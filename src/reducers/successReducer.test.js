//plan of attack, if no action and no state, return default (false)
// if CORRECT_GUESS action type, return true 

import {actionTypes} from '../actions'
import successReducer from './successReducer'; 

test('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {}); // whwnever a reducer does a switch on the action type which is pretty much always 
    // we have to make sure we pass in a type in the test or we will get cannot ready type of undefined
    expect(newState).toBe(false); // can use toBe because false is immutable
}); 

test('returns state of true upon receiving an action type of CORRECT_GUESS', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS}); 
    expect(newState).toBe(true); 
}); 