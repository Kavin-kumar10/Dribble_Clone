import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
    const response = await fetch('http://localhost:8000/profiles');
    const data = await response.json();
    return data;
});
  
export const fetchThumpnails = createAsyncThunk('thumpnails/fetchThumpnails', async () => {
  const response = await fetch('http://localhost:8000/thumpnails');
  const data = await response.json();
  return data;
});
  
export const fetchDesigns = createAsyncThunk('designs/fetchDesigns', async () => {
    const response = await fetch('http://localhost:8000/designs');
    const data = await response.json();
    return data;
  });
    