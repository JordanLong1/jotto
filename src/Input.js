import React from 'react'; 
import {connect} from 'react-redux'; 
import {guessWord} from './actions/index';


export class UnconnectedInput extends React.Component {

    state = {currentGuess: null}

    handleChange = (e) => {
        this.setState({
            currentGuess: e.target.value
        });
    }; 

    handleSubmit = (event) => {
        event.preventDefault(); 
        const guessedWord = this.state.currentGuess; 


        if (guessedWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord)
        }
    }


    render() {
        const contents = this.props.success 
        ? null  
        : (
            <form className='form-inline'>
                <input data-test='input-box'
                className='mb-2 mx-sm-3'
                type='text'
                placeholder='enter guess'
                onChange={this.handleChange}
                />
                <button data-test='submit-button'
                className='btn btn-primary mb-2'
                type='submit'
                onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({success})=> {
    return {success}
}

export default connect(mapStateToProps, {guessWord})(UnconnectedInput)