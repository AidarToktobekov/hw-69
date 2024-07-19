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
    show: {name: '---',url: '',language: '---', genres: ['---'], runtime: 1, image: '---', summary: '---'},
    loading: false,
    error: false,
};

export const fetchTaskShow:AsyncThunk<ShowById, string, {state:RootState}> = createAsyncThunk ('showById/fetch', async (show:string) => {
  const response = await axiosApi.get('shows/' + show);
  const tvShow:ShowById = {
    name: response.data.name,
    url: response.data.url,
    language: response.data.language,
    genres: response.data.genres,
    runtime: response.data.runtime,
    image: response.data.image.original,
    summary: response.data.summary,
  }
  console.log(tvShow);
  

  return tvShow || [];
}) 
export const showByIdSlice = createSlice({
    name: 'showById', 
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
    
export const showByIdReducer = showByIdSlice.reducer;
export const showLoading = (state: RootState) => state.show.loading;

