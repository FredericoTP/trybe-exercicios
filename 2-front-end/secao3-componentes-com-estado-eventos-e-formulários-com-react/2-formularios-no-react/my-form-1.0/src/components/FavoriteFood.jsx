import React from 'react';

class FavoriteFood extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let erro = undefined;
    if (value.length > 25) {
      erro = 'Texto muito grande';
    }
    
    return (
      <label htmlFor="favoriteFood">
        Comida favorita:
        <textarea name="favoriteFood" id="favoriteFood" cols="20" rows="5" value={ value } onChange={ handleChange }></textarea>
        <spam>{ erro }</spam>
      </label>
    );
  }
}

export default FavoriteFood;
