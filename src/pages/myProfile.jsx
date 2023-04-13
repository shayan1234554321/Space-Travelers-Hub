import React from 'react';
import '../Styles/Profile.css';
import RocketProfile from '../components/RocketProfile';

const MyProfile = () => (
  <div className="profile-container">
    <h1>My Profile</h1>
    <div className="profile">
      <RocketProfile />
    </div>

  </div>
);

export default MyProfile;
