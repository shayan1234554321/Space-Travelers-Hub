import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <>
      <hr />
      {rockets.map((rocket) => <Rocket key={rocket.rocketId} rocket={rocket} />)}
    </>
  );
};

export default RocketList;
