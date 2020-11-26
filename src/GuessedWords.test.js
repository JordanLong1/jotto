import React from 'react'; 
import { shallow} from 'enzyme'; 
import { findByTestAttr, checkProps } from '../test/testUtils'

import GuessedWords from './GuessedWords'; 

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3}
    ]
}


const setUp  = (props={}) => {
    const setUpProps = {...defaultProps, ...props}; 
    return shallow(<GuessedWords {...setUpProps} />)
}

test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps); // because checkProps is taking a component so we give it GuessedWords cuz thats what we are working with 
    // and its taking some props and its just checking to make sure no error is thrown when we give that component props (defaultProps)
});

describe("if there are no words guessed", () => {
    let wrapper 
    beforeEach(() => {
      wrapper = setUp({ guessedWords: []}); 

    })
    test('renders wuthout error', () => {
        // const wrapper = setUp({ guessedWords: []}); moved this to inside beforeEach so before Each test it runs it. 
        const component = findByTestAttr(wrapper, 'component-guessed-words'); 
        expect(component.length).toBe(1)
    }); 
    test("renders instrucions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions'); 
        expect(instructions.text().length).not.toBe(0); 
    })
});

describe("if there are words guessed", () => {
    let wrapper
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3 },
        {guessedWord: 'agile', letterMatchCount: 1 },
        {guessedWord: 'party', letterMatchCount: 5 }
    ];

    beforeEach(() => {
        wrapper = setUp({ guessedWords})
    })

    test("renders without error", () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words'); 
        expect(component.length).toBe(1)
    });
    test("rendrs guessed words section", () => {
        const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words'); 
        expect(guessedWordsDiv.length).toBe(1); 
    });
    test("correct number of guessed words", () => {
        const guessedWordNode = findByTestAttr(wrapper, 'guessed-word'); 
        expect(guessedWordNode.length).toBe(guessedWords.length);
    });

});