import React from 'react';
import ReactDOM from 'react-dom/client';
import RocketList from '../components/RocketList';

// mock useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));
it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <RocketList />
    </div>,
  );
});
