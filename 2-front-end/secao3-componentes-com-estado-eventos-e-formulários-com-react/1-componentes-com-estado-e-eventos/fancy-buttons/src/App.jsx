import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      btnOne: 0,
      btnTwo: 0,
      btnThree: 0,
    }

    this.handleClickBtnOne = this.handleClickBtnOne.bind(this);
    this.handleClickBtnTwo = this.handleClickBtnTwo.bind(this);
    this.handleClickBtnThree = this.handleClickBtnThree.bind(this);
  }

  handleClickBtnOne() {
    this.setState((stateBefore, _props) => ({
      btnOne: stateBefore.btnOne + 1,
    }))
  }
  
  handleClickBtnTwo() {
    this.setState((stateBefore, _props) => ({
      btnTwo: stateBefore.btnTwo + 1,
    }))
  }
  
  handleClickBtnThree() {
    this.setState((stateBefore, _props) => ({
      btnThree: stateBefore.btnThree +1,
    }))
  }

  render() {
    const { btnOne, btnTwo, btnThree } = this.state;
    return (
      <>
        <button type='button' onClick={ this.handleClickBtnOne }>{ btnOne }</button>
        <button type='button' onClick={ this.handleClickBtnTwo }>{ btnTwo }</button>
        <button type='button' onClick={ this.handleClickBtnThree }>{ btnThree }</button>
      </>
    )
  }
}

export default App;
