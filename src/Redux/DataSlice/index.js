import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDesigns, fetchProfiles,fetchThumpnails } from "../AxiosCalls";

const initialState = {
    Collections:[],
    savedDesigns:[],
    selectedDesign:null,
    selectedCollection:null,
    Profiles:[],
    Thumpnails: [],
    Designs:[],
    loading: false,
    error: null,
};



const dataSlice = createSlice({
    name:"Data",
    initialState,
    reducers:{
      addCollection: (state, action) => {
        state.Collections.push({
          id: action.payload.id, 
          name: action.payload.name, 
          items: [], 
        });
      },
      setSelectedCollection: (state, action) => {
        state.selectedCollection = action.payload;
      },
      setSelectedDesign: (state, action) => {
        state.selectedDesign = action.payload;
      },
      addItemToCollection: (state, action) => {
        const item = state.selectedDesign;
        const collectionId = state.selectedCollection.id;
        
        const collection = state.Collections.find(
          (col) => col.id === collectionId
        );
        
        if (collection) {
          collection.items.push(item);
          state.savedDesigns.push(item);
        }
      },
    },
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
          })

          //Thumpnails
          .addCase(fetchThumpnails.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchThumpnails.fulfilled, (state, action) => {
            state.loading = false;
            state.Thumpnails = action.payload;
          })
          .addCase(fetchThumpnails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

          //Designs
          .addCase(fetchDesigns.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchDesigns.fulfilled, (state, action) => {
            state.loading = false;
            state.Designs = action.payload;
          })
          .addCase(fetchDesigns.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })}
          
});

export const { addCollection, addItemToCollection,setSelectedDesign,setSelectedCollection } = dataSlice.actions;

export default dataSlice.reducer