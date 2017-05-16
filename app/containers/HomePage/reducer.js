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

				// add user's response
				.update('feed', arr => arr.push({
					type:0,
					content: {text: userResponse.get('text')}
				})) 
				// add bot's prompts 1+ messages 



      nextState = addPromptMessages(nextState, next_stage_id)


      return nextState


    case TIMER_TICK:

      // find first element in feed with status=BOT_MESSAGE_INVISIBLE, set to BOT_MESSAGE_WRITING
      const invisibleMessageIndex = state.get('feed').findIndex(message => {
        return ( message.type == 1 ) && message.status == BOT_MESSAGE_INVISIBLE
      })
      if (invisibleMessageIndex > -1 ) {
        let message = state.getIn(['feed', invisibleMessageIndex])
        message.status = BOT_MESSAGE_WRITING
        console.log('Show Bot Writing: ' + message.content.text);
        return state.setIn(['feed', String(invisibleMessageIndex)], message)
      }

      // if none, find first element in feed with status=BOT_MESSAGE_WRITING, set to BOT_MESSAGE_VISIBLE
      const writingMessageIndex = state.get('feed').findIndex(message => {
        return ( message.type == 1 ) && message.status == BOT_MESSAGE_WRITING
      })
      if (writingMessageIndex > -1 ) {
        let message = state.getIn(['feed', writingMessageIndex])
        message.status = BOT_MESSAGE_VISIBLE
        console.log('Show Bot Message: ' + message.content.text);
        return state.setIn(['feed', String(writingMessageIndex)], message)
      }

      // if none, show user choices if hidden and there are choices available
      if ( state.get('show_user_choices') == false && state.get('current_stage_id') !== false ) {
        console.log('Show User Choices');
        return state.set('show_user_choices', true)
      }
      

        
      return state
    default:
      return state;
  }
}



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
