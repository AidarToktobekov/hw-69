import { configureStore } from '@reduxjs/toolkit';
import {showReducer} from "../containers/Shows/tvShowsSlice";
import { showByIdReducer } from '../containers/Shows/findShowSlice';



export const store = configureStore({
  reducer: {
    showlist: showReducer,
    show: showByIdReducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


