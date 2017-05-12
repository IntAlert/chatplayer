import { createSelector } from 'reselect';

/**
 * Direct selector to the gimp state domain
 */
const selectGimpDomain = () => (state) => state.get('gimp');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Gimp
 */

const makeSelectGimp = () => createSelector(
  selectGimpDomain(),
  (substate) => substate.toJS()
);

export default makeSelectGimp;
export {
  selectGimpDomain,
};
