/*
 *
 * Gimp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SCRIPT_FETCH_SUCCEEDED,
  SCRIPT_FETCH_FAILED,
  RESPOND,
  BOT_MESSAGE_INVISIBLE,
  BOT_MESSAGE_WRITING,
  BOT_MESSAGE_VISIBLE,
  TIMER_TICK,
  PRINT,
} from './constants';

const initialState = fromJS({
  script_loaded: false,
  current_stage_id: false,
  show_user_choices: false,
  script: {},
	feed: [],
	scores: {},
});

function homeReducer(state = initialState, action) {

  switch (action.type) {
    case SCRIPT_FETCH_SUCCEEDED:
    
      let nextState = state
        .merge({
          script_loaded: true,
          script: action.script,
          current_stage_id: action.script.setup.initial_stage_id,
          scores: action.script.setup.initial_scores,
				});

      nextState = addPromptMessages(nextState, action.script.setup.initial_stage_id);

      return nextState;


    case SCRIPT_FETCH_FAILED:
    
      console.log('script fetch failed');
      return state;

    case RESPOND:

      // get current and next place in script
      const userResponse = state.getIn(['script', 'stages', action.stage_id, 'choices', action.choice_id]);
      
      if (userResponse.getIn(['targetType']) === 'route') {
        // just abort everything and change the location
        window.location.href = userResponse.getIn(['target']);
        return state;
      }
      // otherwise, assume that this was a response that requires a
      // modification to the feed

      // assume targetType === 'feed'
      const next_stage_id = userResponse.getIn(['target']);

      var nextState = state
      
        // update current place in script
				.set('current_stage_id', next_stage_id)

        // hide user choices
        .set('show_user_choices', false)

				// add user's response
				.update('feed', arr => arr.push({
					speaker: 0,
					type: "text",
					content: userResponse.get('text'),
        }));
          
        // set current context
        // .set('current_context', currentContext)


        // add bot's immediate response (0+ messages)
        nextState = addImmediateChoiceResponses(nextState, userResponse);

				// add bot's prompts (0+ messages )
        nextState = addPromptMessages(nextState, next_stage_id);


      return nextState;


    case TIMER_TICK:


      // if none, find first element in feed with status=BOT_MESSAGE_WRITING, set to BOT_MESSAGE_VISIBLE
      const firstWritingMessageIndex = state.get('feed').findIndex(message => {
        return ( message.speaker == -1 || message.speaker == 1 ) && message.status == BOT_MESSAGE_WRITING;
      })

      if (firstWritingMessageIndex > -1) {

				// update status of message
        let updatedFeed = state.updateIn(['feed', firstWritingMessageIndex], (message) => {
          const newMessage = Object.assign({}, message);
          newMessage.status = BOT_MESSAGE_VISIBLE;
          return newMessage;
				});

				// get score change if any
				const scoreChange = state.getIn(['feed', firstWritingMessageIndex]).scoreChange;


				if (scoreChange) {
					// update score
					updatedFeed = updatedFeed.updateIn(['scores'], (scores) => {
						return calculateNewScores(scoreChange, scores);
					});
				} else {

				}

				return updatedFeed;
				
      }

      // find first element in feed with status=BOT_MESSAGE_INVISIBLE, set to BOT_MESSAGE_WRITING
      const firstInvisibleMessageIndex = state.get('feed').findIndex(message => {
        return (message.speaker == -1 || message.speaker == 1 ) && message.status == BOT_MESSAGE_INVISIBLE;
      });
      if (firstInvisibleMessageIndex > -1 ) {
        return state.updateIn(['feed', firstInvisibleMessageIndex], message => {
          let newMessage = Object.assign({}, message)
          newMessage.status = BOT_MESSAGE_WRITING
          return newMessage;
        });
      }


      // // if none, show user choices if hidden and there are choices available
      if ( state.get('show_user_choices') == false && state.get('current_stage_id') !== false ) {
        return state.set('show_user_choices', true)
      }
      

        
      return state

    case PRINT:
      window.print();
    break;
    
    default:
      return state;
  }
}



// this adds immediate responses to a given choice
function addImmediateChoiceResponses(state, userResponse) {

  var immediateResponses = userResponse.getIn(['responses'])

  if ( immediateResponses == undefined) {
    // no immediate responses
    console.log('// no immediate responses')
    return state
  }



  const nextState = state.update('feed', (arr) => {
    
    var newArr = arr;
    immediateResponses.toArray().forEach((response) => {


      let speaker = 1;

      if (response.get('speaker') !== undefined) {
        speaker = response.get('speaker');
      }

      const feedMessage = {
        speaker, // bot response code, TODO factor out as CONST
        status: BOT_MESSAGE_INVISIBLE,
        // TODO: do something with prompt.type, contentType?
        type: response.get('type'),
        content: response.get('content'),
        more: response.get('more'),
				scoreChange: response.get('scoreChange'),
      }

      newArr = newArr.push(feedMessage);
    })

    return newArr;
  })

  return nextState;
}

// this adds prompt messages for a given stage
function addPromptMessages(state, stage_id) {

  var prompts = state.getIn(['script', 'stages', stage_id, 'prompts']);

  const nextState = state.update('feed', arr => {
    
    var newArr = arr;
    prompts.toArray().forEach(prompt => {


      let speaker = -1;

      if (prompt.get('speaker') !== undefined) {
        speaker = prompt.get('speaker');
      }
      
      const feedMessage = {
        speaker: speaker, // narrator response code, TODO factor out as CONST
        status: BOT_MESSAGE_INVISIBLE,
        // TODO: do something with prompt.type, contentType?
        type: prompt.get('type'),
        content: prompt.get('content'),
        more: prompt.get('more'),
				scoreChange: prompt.get('scoreChange'),
      }

      

      newArr = newArr.push(feedMessage);

      if (prompt.get('more')) {
        console.log('***'+feedMessage.more);
        console.log(newArr.toJS());
      }

    })

    return newArr;
  })

  return nextState
}

function calculateNewScores(scoreChange, currentScores) {
	const newScores = Object.assign({}, currentScores.toJS());
	const scoreChangeJS = scoreChange.toJS();

	for(let scoreName in scoreChangeJS) {
		let change = scoreChangeJS[scoreName];
		
		
		switch(change.operator) {
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
				throw('Unknown change operator ' + change.operator);
		}
		
	}
	return fromJS(newScores);
}

export default homeReducer;