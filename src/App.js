import React from 'react'
import {connect} from 'react-redux'; 
import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
class App extends React.Component {
  render() {
    return (
  <div className="container">
    <h1>Jotto</h1>
   <Congrats success={true}/>
   <GuessedWords guessedWords={[
     {guessedWord: 'train', letterMatchCount: 3}
   ]}/>
  </div>

    )

  }
}

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps)(App); 
