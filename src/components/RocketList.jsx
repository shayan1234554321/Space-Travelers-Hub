import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from './Rocket';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => { dispatch(fetchRockets()); }, [dispatch]);

  return (
    <>
      <hr />
      {rockets.map((rocket) => <Rocket key={rocket.rocketId} rocket={rocket} />)}
    </>
  );
};

export default RocketList;
