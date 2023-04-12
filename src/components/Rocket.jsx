import React from 'react';
import checkPropTypes from 'prop-types';
import '../Styles/Rocket.css';

const Rocket = ({ rocket }) => {
  const {
    rocketImage, rocketName, rocketDescription, rocketStatus,
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
  }).isRequired,
};

export default Rocket;
