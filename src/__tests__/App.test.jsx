import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../redux/store'

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <Provider store={store} >
      <App />
    </Provider>,
  );
});
