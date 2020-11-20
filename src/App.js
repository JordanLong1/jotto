import React from 'react'
import {connect} from 'react-redux'; 
import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import {getSecretWord} from './actions/index'
import Input from './Input'

export class UnconnectedApp extends React.Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
  <div className="container">
    <h1>Jotto</h1>
    <div>The secret word is {this.props.secretWord} </div>
   <Congrats success={this.props.success}/>
   <GuessedWords guessedWords={this.props.guessedWords}/>

   <Input />
  </div>

    )

  }
}

const mapStateToProps = state => {
  const {success, guessedWords, secretWord} = state; 
  return {success, guessedWords, secretWord}
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp); 
