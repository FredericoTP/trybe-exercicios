import React from 'react';

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

          <label htmlFor="inputName">
            Nome:
            <input name="inputName" type="text" id="inputName" value={ this.state.inputName } onChange={ this.handleChange } />
          </label>

          <label htmlFor="inputEmail">
            Email:
            <input name="inputEmail" type="text" id="inputEmail"value={ this.state.inputEmail } onChange={ this.handleChange }/>
          </label>

          <label htmlFor="favoriteFood">
            Comida favorita:
            <textarea name="favoriteFood" id="favoriteFood" cols="20" rows="5" value={ this.state.favoriteFood } onChange={ this.handleChange }></textarea>
          </label>

          <label htmlFor="selectCor">
            Escolha uma cor:
            <select name="color" id="selectCor" value={ this.state.color } onChange={ this.handleChange }>
              <option value="verde">Verde</option>
              <option value="vermelho">Vermelho</option>
              <option value="azul">Azul</option>
            </select>
          </label>

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
