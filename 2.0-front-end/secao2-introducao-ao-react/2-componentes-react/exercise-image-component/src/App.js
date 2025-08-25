import React from 'react';
import './App.css';
import Image from './Image';
import cat from './cat.jpg'

class App extends React.Component {
  render() {
    return (
      <Image source={cat} alternativeText={'Cute cat staring'}/>
    );
  }
}

export default App;
