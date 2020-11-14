import React from 'react'
import PropTypes from 'prop-types'; 

const GuessedWords = props => {
    let contents 
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='guess-instructions'>Try to guess the secret word!</span>
        )   
    }

    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

GuessedWords.propTypes = { // this one will look funky because we are expecting an array of objects AND a particular shape
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired, 
            letterMatchCount: PropTypes.number.isRequired, 
        })
    ).isRequired
}

export default GuessedWords;