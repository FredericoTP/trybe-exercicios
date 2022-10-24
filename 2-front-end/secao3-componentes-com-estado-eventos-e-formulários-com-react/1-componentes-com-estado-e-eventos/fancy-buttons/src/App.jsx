import React from 'react';
import './App.css';


function handleClickBtnOne() {
  console.log('Hello, World');
}

function handleClickBtnTwo() {
  console.log('My name is');
}

function handleClickBtnThree() {
  console.log('Fred');
}

class App extends React.Component {

  render() {
    return (
      <>
        <button type='button' onClick={handleClickBtnOne}>Um</button>
        <button type='button' onClick={handleClickBtnTwo}>Dois</button>
        <button type='button' onClick={handleClickBtnThree}>Três</button>
      </>
    )
  }
}

export default App;
