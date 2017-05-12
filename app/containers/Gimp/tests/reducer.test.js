
import { fromJS } from 'immutable';
import gimpReducer from '../reducer';

describe('gimpReducer', () => {
  it('returns the initial state', () => {
    expect(gimpReducer(undefined, {})).toEqual(fromJS({}));
  });
});
