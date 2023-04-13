import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const reserved = useSelector((store) => store.rockets.filter((rocket) => rocket.rocketStatus));
  return (
    <div className="profileRocket">
      <h2>My Rockets</h2>
      {reserved.map((rocket) => (
        <span key={rocket.rocketId}>
          {rocket.rocketName}
        </span>
      ))}
    </div>
  );
};

export default RocketProfile;
