import React from 'react';
import ReactDOM from 'react-dom/client';
import Missions from '../pages/missions';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Missions />
    </div>,
  );
});
