import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const fetchMissions = createAsyncThunk('mission/fetchmissions', async () => {
  const response = await fetch(missionUrl);
  const data = await response.json();
  const missionList = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  console.log(missionList);
  return missionList;
});
const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
