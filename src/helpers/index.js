/**
 * @method - get letter match count
 * @param {string} guessedWord -guessed word
 * @param {string} secretWord -secret word
 * @returns {number} - number of letters matched between guessed word and secret
 */


// export function getLetterMatchCount(guessedWord, secretWord) {
//     const secretLetterSet = new Set(secretWord.split('')); 
//     const guessedLetterSet = new Set(guessedWord.split('')); 
//     return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
// };

export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
 };