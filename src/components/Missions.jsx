import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div id="mission-title">

          <Title headline="Missões" />
        </div>
        <div id="mission-box">

          { missions.map((e) => (
            <MissionCard
              key={ e.name }
              name={ e.name }
              year={ e.year }
              country={ e.country }
              destination={ e.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
