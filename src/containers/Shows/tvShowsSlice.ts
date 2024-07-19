import {AsyncThunk,createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosApi from "../../axios-api";
import { Show } from "../../types";
import { RootState } from "../../app/store";


interface ShowState {
    showList: Show[];  
    loading: boolean;
    error: boolean;
}

const initialState: ShowState = {
    showList: [],
    loading: false,
    error: false,
};

export const fetchTaskShowsList:AsyncThunk<Show[], string, {state:RootState}> = createAsyncThunk ('show/fetch', async (show:string) => {
  const response = await axiosApi.get('search/shows?q=' + show);
  const showList:Show[] = []; 
  response.data.map((tvShow:{show:{name:string,id:string}})=>{
    const showInfo ={ 
      name: tvShow.show.name,
      id: tvShow.show.id,
    }
    showList.push(showInfo);
  })
    
    return showList || [];
}) 

export const showSlice = createSlice({
    name: 'show', 
    initialState,  
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchTaskShowsList.pending, (state) => {
        state.loading = true;
        state.error = false;
      });
      builder.addCase(fetchTaskShowsList.fulfilled, (state, action) => {
        state.loading = false;
        state.showList = action.payload;
      });
      builder.addCase(fetchTaskShowsList.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
     
    }
});
    
export const showReducer = showSlice.reducer;




  