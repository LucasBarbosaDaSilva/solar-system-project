import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar">
        <div id="planet-name">
          <Title headline="Planetas" />

        </div>
        <div id="solar-system">

          { planets.map((e) => (
            <PlanetCard key={ e.name } planetName={ e.name } planetImage={ e.image } />
          ))}
        </div>
      </div>

    );
  }
}

export default SolarSystem;
