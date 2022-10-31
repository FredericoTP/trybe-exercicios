import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      user: [],
    }
  }

  async fetchRandomUser() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = response.json();

    this.setState({
      user: data.results,
    });
  }

  render() {
    return (
      'asd'
    );
  }
}

export default App;
