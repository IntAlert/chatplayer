/*
 * userChoicesReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import {RESPOND} from './constants';

// The initial state of the App
const initialState = fromJS({
	// current_stage_id: SCRIPT.initial_stage_id,
	// feed: [],
});

function userChoicesReducer(state = initialState, action) {

	// console.log('reducer intial state')
	// console.log(state.toJS())
  switch (action.type) {
		
    // case RESPOND:

    //   // get current and next place in script
	// 		const userResponse = SCRIPT.stages[action.script_id].choices[action.choice_id];
	// 		const nextStage = SCRIPT.stages[userResponse.next_stage_id];

	// 		const nextState = state
	// 			// add user's response
	// 			.update('feed', arr => arr.push({
	// 				type:0,
	// 				content: userResponse
	// 			})) 
	// 			// add bot's prompts 1+ messages 
	// 			.update('feed', arr => {

	// 				var newArr = arr;

	// 					nextStage.prompts.forEach(prompt => {

	// 						const feedMessage = {
	// 							type:1, // bot response code, TODO factor out as CONST
	// 							// TODO: do something with prompt.type, contentType?
	// 							content: {text: prompt.content}
	// 						}

	// 						newArr = newArr.push(feedMessage);
	// 					})

	// 					return newArr
						
	// 			})
	// 			// update current place in script
	// 			.set('current_stage_id', userResponse.next_stage_id);

	// 			return nextState
        
    default:
      return state;
  }
}

export default userChoicesReducer;