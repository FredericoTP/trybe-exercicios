import React from 'react';
import { connect } from 'react-redux';

class CharacterDetails extends React.Component {
  render() {
    const { isLoading, data } = this.props;
    return (
      <>
        {isLoading && <div>Loading...</div>}
        {data.length > 0 && (
          data.map((item) => {
            const { name, gender, culture, born, died, titles, aliases, playedBy } = item
            return (
              <div key={ name }>
                <h3>{ `Name: ${ name }` }</h3>
                <h3>{ `Played by: ${ playedBy }` }</h3>
                <p>{ `Gender: ${ gender }` }</p>
                <p>{ `Culture: ${ culture }` }</p>
                <p>{ `Born: ${ born }` }</p>
                {died ? <p>{ `Died: ${died}` }</p> : 'Died: No, is alive!'}
                <p>Titles: {titles.map((title) => <li key={ title }>{ title }</li>)}</p>
                <p>Aliases: {aliases.map((aliase) => <li key={ aliase }>{ aliase }</li>)}</p>
              </div>
            );
          })
        )}
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(CharacterDetails);
