import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: { rocketsReducer },
});

export default store;
