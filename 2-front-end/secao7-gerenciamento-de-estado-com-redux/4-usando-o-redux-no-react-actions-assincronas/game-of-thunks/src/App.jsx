import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      character: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange ({target}) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { character } = this.state;
    return (
      <div>
        <label htmlFor="">Personagem: </label>
        <input
          type="text"
          value={ character }
          name="character"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ character.length === 0 }
        >
          Buscar
        </button>
      </div>
    );
  }
};

export default App;
