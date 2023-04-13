import React from 'react';
import { useDispatch } from 'react-redux';
import checkPropTypes from 'prop-types';
import { toggleRocketStatus } from '../redux/rockets/rocketsSlice';
import '../Styles/Rocket.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    rocketImage, rocketName, rocketDescription, rocketStatus, rocketId,
  } = rocket;

  return (
    <div className="rocketItem">
      <img src={rocketImage} alt={rocketName} />
      <div>
        <h3>{rocketName}</h3>
        <p>
          {rocketStatus && <span className="blueBag">Reserved</span>}
          {rocketDescription}
        </p>
        {rocketStatus
          ? (
            <button type="button" className="whiteBag" onClick={() => { dispatch(toggleRocketStatus(rocketId)); }}>
              Cancel reservation
            </button>
          )
          : (
            <button type="button" className="blueBag" onClick={() => { dispatch(toggleRocketStatus(rocketId)); }}>
              Reserve Rocket
            </button>
          )}
        ;
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: checkPropTypes.shape({
    rocketImage: checkPropTypes.string.isRequired,
    rocketName: checkPropTypes.string.isRequired,
    rocketDescription: checkPropTypes.string.isRequired,
    rocketStatus: checkPropTypes.bool.isRequired,
    rocketId: checkPropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
