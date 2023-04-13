import React from 'react';
import '../Styles/Profile.css';
import RocketProfile from '../components/RocketProfile';
import MissionProfile from '../components/MissionProfile';

const MyProfile = () => (
  <div className="profile-container">
    <MissionProfile />
    <RocketProfile />
  </div>
);

export default MyProfile;
