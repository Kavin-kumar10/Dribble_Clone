import { createAsyncThunk } from "@reduxjs/toolkit";


const baseUrl = "https://project-data-8mry.onrender.com"

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
    const response = await fetch(`${baseUrl}/profiles`);
    const data = await response.json();
    return data;
});
  
export const fetchThumpnails = createAsyncThunk('thumpnails/fetchThumpnails', async () => {
  const response = await fetch(`${baseUrl}/thumpnails`);
  const data = await response.json();
  return data;
});
  
export const fetchDesigns = createAsyncThunk('designs/fetchDesigns', async () => {
    const response = await fetch(`${baseUrl}/designs`);
    const data = await response.json();
    return data;
  });
    

  export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await fetch(`${baseUrl}/login?email=${email}&password=${password}`);
        const data = await response.json();
        if (data.length === 0) {
          throw new Error('Invalid credentials');
        }
        localStorage.setItem('user', JSON.stringify(data));
        return data[0] 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );