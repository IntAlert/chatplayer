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
        
    default:
      return state;
  }
}

export default userChoicesReducer;