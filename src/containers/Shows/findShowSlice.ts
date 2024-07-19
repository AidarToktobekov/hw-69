import {AsyncThunk,createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosApi from "../../axios-api";
import { ShowById } from "../../types";
import { RootState } from "../../app/store";


interface ShowByIdState {
    show: ShowById;
    loading: boolean;
    error: boolean;
}

const initialState: ShowByIdState = {
    show: {name: '',url: '',language: '', genres: [], runtime: 1, premiered: '', image: '', summary: ''},
    loading: false,
    error: false,
};

export const fetchTaskShow:AsyncThunk<ShowById, string, {state:RootState}> = createAsyncThunk ('show/fetch', async (show:string) => {
  const response = await axiosApi.get('shows/' + show);
  console.log(response.data);
  const tvShow:ShowById = {
    name: response.data.name,
    url: response.data.url,
    language: response.data.language,
    genres: response.data.genres,
    runtime: response.data.runtime,
    premiered: response.data.premiered,
    image: response.data.image.original,
    summary: response.data.summary,
  }
  
    
  return tvShow || [];
}) 
export const showSlice = createSlice({
    name: 'show', 
    initialState,  
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchTaskShow.pending, (state) => {
        state.loading = true;
        state.error = false;
      });
      builder.addCase(fetchTaskShow.fulfilled, (state, action) => {
        state.loading = false;
        state.show = action.payload;
      });
      builder.addCase(fetchTaskShow.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
     
    }
});
    
export const showByIdReducer = showSlice.reducer;


