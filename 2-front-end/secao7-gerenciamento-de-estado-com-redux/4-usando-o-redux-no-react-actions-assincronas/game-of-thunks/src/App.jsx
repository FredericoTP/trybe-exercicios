import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from './redux/actions';
import CharacterDetails from './components/CharacterDetails';

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
    const { dispatch } = this.props;
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
          onClick={ () => dispatch(fetchCharacter(character)) }
        >
          Buscar
        </button>
        <CharacterDetails />
      </div>
    );
  }
};

export default connect()(App);
