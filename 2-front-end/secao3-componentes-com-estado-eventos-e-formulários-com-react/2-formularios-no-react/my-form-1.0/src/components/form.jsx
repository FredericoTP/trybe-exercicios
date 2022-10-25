import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      inputName: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputName: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="inputName">
          Nome:
          <input name="inputName" type="text" id="inputName" value={ this.state.inputName } onChange={ this.handleChange } />
        </label>

        <label htmlFor="inputEmail">
          Email:
          <input type="text" id="inputEmail"/>
        </label>

        <label htmlFor="favoriteFood">
          Comida favorita:
          <textarea name="favoriteFood" id="favoriteFood" cols="20" rows="5"></textarea>
        </label>

        <label htmlFor="selectCor">
          Escolha uma cor:
          <select name="color" id="selectCor">
            <option value="verde">Verde</option>
            <option value="vermelho">Vermelho</option>
            <option value="azul">Azul</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
