import React from 'react';

class FavoriteFood extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    
    return (
      <label htmlFor="favoriteFood">
        Comida favorita:
        <textarea name="favoriteFood" id="favoriteFood" cols="20" rows="5" value={ value } onChange={ handleChange }></textarea>
      </label>
    );
  }
}

export default FavoriteFood;
