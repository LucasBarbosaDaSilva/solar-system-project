import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" id="planet-card">
        <p data-testid="planet-name" id={ planetName }>{ planetName }</p>

        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ planetName }
        />

      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
