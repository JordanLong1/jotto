import React from 'react'
import App, {UnconnectedApp} from './App';
import {shallow} from 'enzyme'; 
import {storeFactory} from '../test/testUtils'


const setUp = (state={}) => {
  const store = storeFactory(state); 
  const wrapper = shallow(<App store={store} />).dive().dive(); 
  return wrapper;
};

test('App component has success as a prop', () => {
  const success = true; 
  const wrapper = setUp({success}); 
  const successProp = wrapper.instance().props.success; 
  expect(successProp).toBe(success);

});

test('has access to secretWord state', () => {
  const secretWord = 'party'; 
  const wrapper = setUp({secretWord}); 
  const secretWordProp = wrapper.instance().props.secretWord; 
  expect(secretWordProp).toBe(secretWord);
});

test('has access to guessedWords state', () => {
  const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}]; 
  const wrapper = setUp({guessedWords}); 
  const guessedWordState = wrapper.instance().props.guessedWords; 
  expect(guessedWordState).toBe(guessedWords);
}); 

test('getSecretWord action creator is a function on the props', () => {
  const wrapper = setUp(); 
  const secretWordProp = wrapper.instance().props.getSecretWord; 
  expect(secretWordProp).toBeInstanceOf(Function);
}); 

test('getSecretWord runs on App mount', () => {

  const getSecretWordMock = jest.fn(); // this a jest function that jest will watch to see when its called and how
    const props = {
      getSecretWord: getSecretWordMock, 
      success: false, 
      guessedWords: []
    }
  // set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props}/>);
  // run lifeCycle method
  wrapper.instance().componentDidMount(); // runs lifecycle method on wrappper
  //check if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length; // this is how we get how many times mock got called 
  expect(getSecretWordCallCount).toBe(1); 
});
