import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
  hasError: false,
  isFetched: false,
};

export const getRocketsData = createAsyncThunk('rockets/getRocketsData', async () => {
  try {
    const dataStream = await axios(rocketsUrl);
    const rockets = [];
    dataStream.data.forEach((data) => {
      rockets.push({
        id: data.id,
        name: data.name,
        description: data.description,
        image: data.flickr_images[0],
        reserved: false,
      });
    });
    return rockets;
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: true } : rocket));
    },
    cancelBooking: (state, action) => {
      state.rockets = state.rockets.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: false } : rocket));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRocketsData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getRocketsData.fulfilled, (state, action) => {
      const isLoading = false;
      const isFetched = true;
      const rockets = action.payload;
      return {
        ...state,
        rockets,
        isLoading,
        isFetched,
      };
    });
    builder.addCase(getRocketsData.rejected, (state) => {
      const isLoading = false;
      const hasError = true;
      return {
        ...state,
        isLoading,
        hasError,
      };
    });
  },
});

export const { bookRocket, cancelBooking } = rocketsSlice.actions;
export default rocketsSlice.reducer;
