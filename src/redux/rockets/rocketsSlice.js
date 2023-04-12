import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RocketUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = [];

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(RocketUrl).then((res) => res.data.map((el) => (
    {
      rocketId: el.id,
      rocketName: el.name,
      rocketDescription: el.description,
      rocketImage: el.flickr_images[0],
      rocketStatus: false,
    }
  )));
  return response;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleRocketStatus: (state, action) => {
      const rocket = state.find((el) => el.rocketId === action.payload);
      if (rocket) {
        rocket.rocketStatus = !rocket.rocketStatus;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { toggleRocketStatus } = rocketsSlice.actions;
export default rocketsSlice.reducer;
