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
    this.getButtonColor = this.getButtonColor.bind(this);
  }

  handleClickBtnOne() {
    const { btnOne } = this.state;
    this.setState((stateBefore, _props) => ({
      btnOne: stateBefore.btnOne + 1,
    }), () => {
      console.log(`Background do botão 1: ${this.getButtonColor(btnOne)}`);
    })
  }
  
  handleClickBtnTwo() {
    const { btnTwo } = this.state;
    this.setState((stateBefore, _props) => ({
      btnTwo: stateBefore.btnTwo + 1,
    }), () => {
      console.log(`Background do botão 2: ${this.getButtonColor(btnTwo)}`);
    })
  }
  
  handleClickBtnThree() {
    const { btnThree } = this.state;
    this.setState((stateBefore, _props) => ({
      btnThree: stateBefore.btnThree +1,
    }), () => {
      console.log(`Background do botão 3: ${this.getButtonColor(btnThree)}`);
    })
  }

  getButtonColor(num) {
    if (num % 2 === 0) {
      return 'green';
    }
    return 'white';
  }

  render() {
    const { btnOne, btnTwo, btnThree } = this.state;
    return (
      <>
        <button type='button' style={ {backgroundColor: this.getButtonColor(btnOne)} } onClick={ this.handleClickBtnOne }>{ btnOne }</button>
        <button type='button' style={ {backgroundColor: this.getButtonColor(btnTwo)} } onClick={ this.handleClickBtnTwo }>{ btnTwo }</button>
        <button type='button' style={ {backgroundColor: this.getButtonColor(btnThree)} } onClick={ this.handleClickBtnThree }>{ btnThree }</button>
      </>
    )
  }
}

export default App;
