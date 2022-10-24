import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClickBtnOne = this.handleClickBtnOne.bind(this);
    this.handleClickBtnTwo = this.handleClickBtnTwo.bind(this);
    this.handleClickBtnThree = this.handleClickBtnThree.bind(this);
  }

  handleClickBtnOne() {
    console.log('Hello, World');
  }
  
  handleClickBtnTwo() {
    console.log('My name is');
  }
  
  handleClickBtnThree() {
    console.log('Fred');
  }

  render() {
    return (
      <>
        <button type='button' onClick={ this.handleClickBtnOne }>Um</button>
        <button type='button' onClick={ this.handleClickBtnTwo }>Dois</button>
        <button type='button' onClick={ this.handleClickBtnThree }>Três</button>
      </>
    )
  }
}

export default App;
