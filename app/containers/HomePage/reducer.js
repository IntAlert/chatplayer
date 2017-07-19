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
  TIMER_TICK
} from './constants';

const initialState = fromJS({
  script_loaded: false,
  current_stage_id: false,
  show_user_choices: false,
  script: {},
	feed: [],
});

function homeReducer(state = initialState, action) {

  // console.log(state.toJS());
  // console.log(action);
  switch (action.type) {
    case SCRIPT_FETCH_SUCCEEDED:
    
      var nextState = state
        .merge({
          script_loaded: true,
          script:action.script,
          current_stage_id:action.script.initial_stage_id
        })

      nextState = addPromptMessages(nextState, action.script.initial_stage_id)

      return nextState;


    case SCRIPT_FETCH_FAILED:
    
      console.log('script fetch failed')
      return state;

    case RESPOND:

      // get current and next place in script
			const userResponse = state.getIn(['script', 'stages', action.stage_id, 'choices', action.choice_id]);
      const next_stage_id = userResponse.getIn(['next_stage_id']);

			var nextState = state
        // update current place in script
				.set('current_stage_id', next_stage_id)

        // hide user choices
        .set('show_user_choices', false)

				// add user's response
				.update('feed', arr => arr.push({
					type:0,
					content: {text: userResponse.get('text')}
				})) 


        // add bot's immediate response (0+ messages)
        nextState = addImmediateChoiceResponses(nextState, userResponse)

				// add bot's prompts (1+ messages )
        nextState = addPromptMessages(nextState, next_stage_id)


      return nextState


    case TIMER_TICK:


      // if none, find first element in feed with status=BOT_MESSAGE_WRITING, set to BOT_MESSAGE_VISIBLE
      const writingMessageIndex = state.get('feed').findIndex(message => {
        return ( message.type == 1 ) && message.status == BOT_MESSAGE_WRITING
      })

      if (writingMessageIndex > -1 ) {
        return state.updateIn(['feed', writingMessageIndex], message => {
          let newMessage = Object.assign({}, message)
          newMessage.status = BOT_MESSAGE_VISIBLE
          return newMessage
        })
      }

      // find first element in feed with status=BOT_MESSAGE_INVISIBLE, set to BOT_MESSAGE_WRITING
      const invisibleMessageIndex = state.get('feed').findIndex(message => {
        return ( message.type == 1 ) && message.status == BOT_MESSAGE_INVISIBLE
      })
      if (invisibleMessageIndex > -1 ) {
        return state.updateIn(['feed', invisibleMessageIndex], message => {
          let newMessage = Object.assign({}, message)
          newMessage.status = BOT_MESSAGE_WRITING
          return newMessage
        })
      }


      // // if none, show user choices if hidden and there are choices available
      if ( state.get('show_user_choices') == false && state.get('current_stage_id') !== false ) {
        return state.set('show_user_choices', true)
      }
      

        
      return state
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

  const nextState = state.update('feed', arr => {
    
    var newArr = arr;
    immediateResponses.toArray().forEach(response => {
      const feedMessage = {
        type:1, // bot response code, TODO factor out as CONST
        status: BOT_MESSAGE_INVISIBLE,
        // TODO: do something with prompt.type, contentType?
        content: {text: response.get('content')}
      }

      newArr = newArr.push(feedMessage);
    })

    return newArr
  })

  return nextState
}

// this adds prompt messages for a given stage
function addPromptMessages(state, stage_id) {

  var prompts = state.getIn(['script', 'stages', stage_id, 'prompts'])


  const nextState = state.update('feed', arr => {
    
    var newArr = arr;
    prompts.toArray().forEach(prompt => {
      const feedMessage = {
        type:1, // bot response code, TODO factor out as CONST
        status: BOT_MESSAGE_INVISIBLE,
        // TODO: do something with prompt.type, contentType?
        content: {text: prompt.get('content')}
      }

      newArr = newArr.push(feedMessage);
    })

    return newArr
  })

  return nextState
}



export default homeReducer;