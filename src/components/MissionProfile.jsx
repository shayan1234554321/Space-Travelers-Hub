import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const [reserved, setReserved] = useState([]);

  useEffect(() => {
    const temp = missions.filter((mission) => mission.reserved);
    setReserved(temp);
  }, [missions]);

  return (
    <div className="profileMission">
      <h2>My Mission</h2>
      {reserved.map((mission) => (
        <span key={mission.mission_id}>
          {mission.mission_name}
        </span>
      ))}
    </div>
  );
};

export default MissionProfile;
