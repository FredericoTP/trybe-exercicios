import React from 'react';
import SelectCor from './SelectCor';
import FavoriteFood from './FavoriteFood';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      inputName: '',
      inputEmail: '',
      favoriteFood: '',
      color: '',
      inputCheckbox: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Forms</legend>

          <label htmlFor="inputName">
            Nome:
            <input name="inputName" type="text" id="inputName" value={ this.state.inputName } onChange={ this.handleChange } />
          </label>

          <label htmlFor="inputEmail">
            Email:
            <input name="inputEmail" type="text" id="inputEmail"value={ this.state.inputEmail } onChange={ this.handleChange }/>
          </label>

          <FavoriteFood value={ this.state.favoriteFood } handleChange={ this.handleChange } />

          <SelectCor value={ this.state.color } handleChange={ this.handleChange } />

          <label htmlFor="inputCheckbox">
            Você desenha?
            <input name="inputCheckbox" type="checkbox" id="inputCheckbox" value={ this.state.inputCheckbox } onChange={ this.handleChange }/>
          </label>

          <label htmlFor="">
            Escolha uma foto
            <input type="file" />
          </label>

        </fieldset>
      </form>
    );
  }
}

export default Form;
