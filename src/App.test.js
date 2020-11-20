import React from 'react'
import App from './App';
import {shallow} from 'enzyme'; 
import {storeFactory} from '../test/testUtils'


const setUp = (state={}) => {
  const store = storeFactory(state); 
 console.log(store)
  const wrapper = shallow(<App store={store} />).dive().dive(); 
  return wrapper;
};

test('App component has success as a prop', () => {
  const success = true; 
  const wrapper = setUp({success}); 
  const successProp = wrapper.instance().props.success; 
  console.log(wrapper.instance().props)
  expect(successProp).toBe(success);

});

test('has access to secretWord state', () => {
  const word = 'party'; 
  const wrapper = setUp({word}); 
  const secretWordProp = wrapper.instance().props.word; 
  console.log(wrapper.instance().props)
  expect(secretWordProp).toBe(word);
});

test('has access to guessedWords state', () => {
  const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}]; 
  const wrapper = setUp({guessedWords}); 
  const guessedWordState = wrapper.instance().props.guessedWords; 
  console.log(wrapper.instance().props)
  expect(guessedWordState).toBe(guessedWords);
}); 

test('getSecretWord action creator is a function on the props', () => {
  const wrapper = setUp(); 
  const secretWordProp = wrapper.instance().props.getSecretWord; 
  expect(secretWordProp).toBeInstanceOf(Function);
}); 
