/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SCRIPT_FETCH_REQUESTED, TIMER_START, TIMER_TICK } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of RESPOND
 */
export function loadScript() {
  // console.log('loadScript')
  return {
    type: SCRIPT_FETCH_REQUESTED
  };
}

export function startTimer() {
  // console.log('start')
  return {
    type: TIMER_START
  };
}

export function tick() {
  // console.log('tick')
  return {
    type: TIMER_TICK
  };
}