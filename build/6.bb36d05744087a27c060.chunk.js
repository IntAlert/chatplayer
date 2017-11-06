webpackJsonp([6],{

/***/ "./app/containers/HomePage/constants.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SCRIPT_FETCH_REQUESTED_EN; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SCRIPT_FETCH_REQUESTED_FR; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return SCRIPT_FETCH_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return SCRIPT_FETCH_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return RESPOND; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return TIMER_START; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return TIMER_TICK; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return PRINT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return BOT_MESSAGE_INVISIBLE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return BOT_MESSAGE_WRITING; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return BOT_MESSAGE_VISIBLE; });
/*
 *
 * Home page constants
 *
 */

var SCRIPT_FETCH_REQUESTED_EN = 'app/Home/SCRIPT_FETCH_REQUESTED_EN';
var SCRIPT_FETCH_REQUESTED_FR = 'app/Home/SCRIPT_FETCH_REQUESTED_FR';
var SCRIPT_FETCH_SUCCEEDED = 'app/Home/SCRIPT_FETCH_SUCCEEDED';
var SCRIPT_FETCH_FAILED = 'app/Home/SCRIPT_FETCH_FAILED';

var RESPOND = 'borderbot/Home/RESPOND';

var TIMER_START = 'app/Home/TIMER_START';
var TIMER_TICK = 'app/Home/TIMER_TICK';
var PRINT = 'app/Home/PRINT';

var BOT_MESSAGE_INVISIBLE = 'app/Home/BOT_MESSAGE_INVISIBLE';
var BOT_MESSAGE_WRITING = 'app/Home/BOT_MESSAGE_WRITING';
var BOT_MESSAGE_VISIBLE = 'app/Home/BOT_MESSAGE_VISIBLE';

/***/ },

/***/ "./app/containers/HomePage/reducer.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("./node_modules/immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./app/containers/HomePage/constants.js");
/*
 *
 * Gimp reducer
 *
 */




var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({
  script_loaded: false,
  current_stage_id: false,
  show_user_choices: false,
  script: {},
  feed: [],
  scores: {}
});

function homeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* SCRIPT_FETCH_SUCCEEDED */]:

      var _nextState = state.merge({
        script_loaded: true,
        script: action.script,
        current_stage_id: action.script.setup.initial_stage_id,
        scores: action.script.setup.initial_scores
      });

      _nextState = addPromptMessages(_nextState, action.script.setup.initial_stage_id);

      return _nextState;

    case __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* SCRIPT_FETCH_FAILED */]:

      console.log('script fetch failed');
      return state;

    case __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* RESPOND */]:

      // get current and next place in script
      var userResponse = state.getIn(['script', 'stages', action.stage_id, 'choices', action.choice_id]);

      if (userResponse.getIn(['targetType']) === 'route') {
        // just abort everything and change the location
        window.location.href = userResponse.getIn(['target']);
        return state;
      }
      // otherwise, assume that this was a response that requires a
      // modification to the feed

      // assume targetType === 'feed'
      var next_stage_id = userResponse.getIn(['target']);

      var _nextState = state

      // update current place in script
      .set('current_stage_id', next_stage_id)

      // hide user choices
      .set('show_user_choices', false)

      // add user's response
      .update('feed', function (arr) {
        return arr.push({
          speaker: 0,
          type: "text",
          content: userResponse.get('text')
        });
      });

      // set current context
      // .set('current_context', currentContext)


      // add bot's immediate response (0+ messages)
      _nextState = addImmediateChoiceResponses(_nextState, userResponse);

      // add bot's prompts (0+ messages )
      _nextState = addPromptMessages(_nextState, next_stage_id);

      return _nextState;

    case __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* TIMER_TICK */]:

      // if none, find first element in feed with status=BOT_MESSAGE_WRITING, set to BOT_MESSAGE_VISIBLE
      var firstWritingMessageIndex = state.get('feed').findIndex(function (message) {
        return (message.speaker == -1 || message.speaker == 1) && message.status == __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* BOT_MESSAGE_WRITING */];
      });

      if (firstWritingMessageIndex > -1) {

        // update status of message
        var updatedFeed = state.updateIn(['feed', firstWritingMessageIndex], function (message) {
          var newMessage = Object.assign({}, message);
          newMessage.status = __WEBPACK_IMPORTED_MODULE_1__constants__["j" /* BOT_MESSAGE_VISIBLE */];
          return newMessage;
        });

        // get score change if any
        var scoreChange = state.getIn(['feed', firstWritingMessageIndex]).scoreChange;

        if (scoreChange) {
          // update score
          updatedFeed = updatedFeed.updateIn(['scores'], function (scores) {
            return calculateNewScores(scoreChange, scores);
          });
        } else {}

        return updatedFeed;
      }

      // find first element in feed with status=BOT_MESSAGE_INVISIBLE, set to BOT_MESSAGE_WRITING
      var firstInvisibleMessageIndex = state.get('feed').findIndex(function (message) {
        return (message.speaker == -1 || message.speaker == 1) && message.status == __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* BOT_MESSAGE_INVISIBLE */];
      });
      if (firstInvisibleMessageIndex > -1) {
        return state.updateIn(['feed', firstInvisibleMessageIndex], function (message) {
          var newMessage = Object.assign({}, message);
          newMessage.status = __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* BOT_MESSAGE_WRITING */];
          return newMessage;
        });
      }

      // // if none, show user choices if hidden and there are choices available
      if (state.get('show_user_choices') == false && state.get('current_stage_id') !== false) {
        return state.set('show_user_choices', true);
      }

      return state;

    case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* PRINT */]:
      window.print();
      break;

    default:
      return state;
  }
}

// this adds immediate responses to a given choice
function addImmediateChoiceResponses(state, userResponse) {

  var immediateResponses = userResponse.getIn(['responses']);

  if (immediateResponses == undefined) {
    // no immediate responses
    console.log('// no immediate responses');
    return state;
  }

  var nextState = state.update('feed', function (arr) {

    var newArr = arr;
    immediateResponses.toArray().forEach(function (response) {
      var feedMessage = {
        speaker: 1, // bot response code, TODO factor out as CONST
        status: __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* BOT_MESSAGE_INVISIBLE */],
        // TODO: do something with prompt.type, contentType?
        type: response.get('type'),
        content: response.get('content'),
        more: response.get('more'),
        scoreChange: response.get('scoreChange')
      };

      newArr = newArr.push(feedMessage);
    });

    return newArr;
  });

  return nextState;
}

// this adds prompt messages for a given stage
function addPromptMessages(state, stage_id) {

  var prompts = state.getIn(['script', 'stages', stage_id, 'prompts']);

  var nextState = state.update('feed', function (arr) {

    var newArr = arr;
    prompts.toArray().forEach(function (prompt) {

      var speaker = -1;

      if (prompt.get('speaker') !== undefined) {
        speaker = prompt.get('speaker');
      }

      console.log(prompt.get('speaker'));

      var feedMessage = {
        speaker: speaker, // narrator response code, TODO factor out as CONST
        status: __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* BOT_MESSAGE_INVISIBLE */],
        // TODO: do something with prompt.type, contentType?
        type: prompt.get('type'),
        content: prompt.get('content'),
        more: prompt.get('more'),
        scoreChange: prompt.get('scoreChange')
      };

      newArr = newArr.push(feedMessage);

      if (prompt.get('more')) {
        console.log('***' + feedMessage.more);
        console.log(newArr.toJS());
      }
    });

    return newArr;
  });

  return nextState;
}

function calculateNewScores(scoreChange, currentScores) {
  var newScores = Object.assign({}, currentScores.toJS());
  var scoreChangeJS = scoreChange.toJS();

  for (var scoreName in scoreChangeJS) {
    var change = scoreChangeJS[scoreName];

    switch (change.operator) {
      case 'multiply':
        newScores[scoreName] = Math.ceil(newScores[scoreName] * change.amount);
        break;
      case 'add':
        newScores[scoreName] += change.amount;
        break;
      case 'set':
        newScores[scoreName] = change.amount;
        break;
      default:
        throw 'Unknown change operator ' + change.operator;
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(newScores);
}

/* harmony default export */ exports["default"] = homeReducer;

/***/ }

});