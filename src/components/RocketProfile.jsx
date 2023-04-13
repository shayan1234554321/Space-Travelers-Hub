import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const reserved = useSelector((store) => store.rockets.filter((rocket) => rocket.rocketStatus));
  return (
    <table>
      <tbody>
        <tr>
          <th><h2>My Rockets</h2></th>
        </tr>
        {reserved.map((rocket) => (
          <tr key={rocket.rocketId}>
            <td>{rocket.rocketName}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default RocketProfile;
