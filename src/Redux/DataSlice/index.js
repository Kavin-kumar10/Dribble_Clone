import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Profiles:[],
    loading: false,
    error: null,
};

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
    const response = await fetch('http://localhost:8000/profiles');
    const data = await response.json();
    return data;
  });
  

const dataSlice = createSlice({
    name:"Data",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchProfiles.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProfiles.fulfilled, (state, action) => {
            state.loading = false;
            state.Profiles = action.payload;
          })
          .addCase(fetchProfiles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })}
});

export default dataSlice.reducer