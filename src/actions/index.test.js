import moxios from 'moxios'; 
import {storeFactory} from '../../test/testUtils'
import {getSecretWord} from './index'

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install()
    });
    afterEach(() => {
        moxios.uninstall(); 
    }); 
    // testing async action creator
    test('addds response word to state', () => {
        const secretWord = 'party'; 
        // making store because our goal is to see if getSecretWord updates the store with the secretword that comes from the server
        const store = storeFactory(); 
        // use moxios.wait to tell it how to respond when axios sends it a request
        moxios.wait(() => {
            //get most recent request (request to random word server)
            const request = moxios.requests.mostRecent(); 
            request.respondWith({
                status: 200, 
                response: secretWord,
            });
        });
        return store.dispatch(getSecretWord()) // dispatch action using the store
        //since getSecretWord returns a promise, store.dispatch will return a promise as well
        .then(() => { //it wont run this callback until the promise is resolved
            const newState = store.getState(); // get the new state to see if it contains the secret word from axios
            expect(newState.secretWord).toBe(secretWord); 
        })

    });
});