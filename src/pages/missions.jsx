import React, { useEffect } from 'react';
import '../Styles/Mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMissions } from '../redux/missions/missionsSlice';
import MissionItem from '../components/missionItem';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getAllMissions());
  }, []);

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
