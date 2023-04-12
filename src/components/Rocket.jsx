import React from 'react';
import checkPropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    rocketImage, rocketName, rocketDescription, rocketStatus, rocketId,
  } = rocket;

  return (
    <>
      <img src={rocketImage} alt={rocketName} />
      <h3>{ rocketName}</h3>
      <p>{ rocketDescription }</p>
      <p>{ rocketStatus }</p>
      <p>{ rocketId }</p>
    </>
  );
};

Rocket.propTypes = {
  rocket: checkPropTypes.shape({
    rocketImage: checkPropTypes.string.isRequired,
    rocketName: checkPropTypes.string.isRequired,
    rocketDescription: checkPropTypes.string.isRequired,
    rocketStatus: checkPropTypes.string.isRequired,
    rocketId: checkPropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
