import React from 'react';

class SelectCor extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="selectCor">
        Escolha uma cor:
        <select name="color" id="selectCor" value={ value } onChange={handleChange}>
          <option value="verde">Verde</option>
          <option value="vermelho">Vermelho</option>
          <option value="azul">Azul</option>
        </select>
      </label>
    );
  }
}

export default SelectCor;
