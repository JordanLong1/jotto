import React from 'react'; 

import {shallow} from 'enzyme'; 
import {findByTestAttr, storeFactory} from '../test/testUtils'; 
import Input from './Input'; 


const setUp = (initialState={}) => {
    const store = storeFactory(initialState); 
    //added store as prop to connect component within the tests, used shallow to createa  virtual dom, then used .dive to get
    //child component (input)
    const wrapper = shallow(<Input store={store} />).dive().dive(); 
    return wrapper;
};
// enzyme dive method returns the react child component OF the shallow wrapper.

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper; 
        beforeEach(() => {
            const initialState = {success: false} //we can use this initalState for all of our tests
            wrapper = setUp(initialState); 
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input'); 
            expect(component.length).toBe(1);
        }); 

        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box'); 
            expect(inputBox.length).toBe(1);
        }); 

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button'); 
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initalState = {success: true}
            wrapper = setUp(initalState); 
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input'); 
            expect(component.length).toBe(1); 
        }); 

        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box'); 
            expect(inputBox.length).toBe(0); 
        }); 

        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button'); 
            expect(submitButton.length).toBe(0);
        });
    });
}); 

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true; 
        const wrapper = setUp({ success}); 
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
});