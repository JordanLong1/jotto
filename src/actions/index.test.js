import {correctGuess, actionTypes} from './index';

describe('correct guess', () => {
    test('returns an action with type `CORRECT_GUESS', () => {
        const action = correctGuess(); 
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
         // use toEqual() instead ot toBe() because we only use toBe for immutable objects like strings or numbers not objs or arrays
    }); 
})