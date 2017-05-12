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

import {
  RESPOND,
	SCRIPT
} from './constants';

// The initial state of the App
const initialState = fromJS({
	current_script_id:"1",
	feed: [],
});

function userChoicesReducer(state = initialState, action) {

	// console.log('reducer intial state')
	// console.log(state.toJS())
  switch (action.type) {
		
    case RESPOND:

      // get current and next place in script
			const currentPrompt = SCRIPT[action.script_id];
			const userResponse = SCRIPT[action.script_id].options[action.option_id];
			const nextPrompt = SCRIPT[userResponse.next_script_id];

			const nextState = state
				// add user's response
				.update('feed', arr => arr.push({
					type:0,
					content: userResponse
				})) 
				// add bot's response
				.update('feed', arr => arr.push({
					type:1,
					content: nextPrompt
				}))
				// update current place in script
				.set('current_script_id', userResponse.next_script_id);

				return nextState
        
    default:
      return state;
  }
}

export default userChoicesReducer;