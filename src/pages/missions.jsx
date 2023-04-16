import React from 'react';
import '../Styles/Mission.css';
import { useSelector } from 'react-redux';
import MissionItem from '../components/missionItem';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="missionContainer">
      <span className="line" />
      <div className="missionTable">
        <div className="tableHeader">
          <h4>Mission</h4>
          <h4>Description</h4>
          <h4>status</h4>
          <span />
        </div>
        {
          missions?.map((mission) => (
            <MissionItem mission={mission} missions={missions} key={mission.mission_id} />
          ))
        }
      </div>
    </div>
  );
};

export default Missions;
