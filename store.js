import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice.js"; //navigation folder which will control stuff like home screen,etc.

export const store = configureStore({
  reducer : {
    nav: navReducer,
  },
});

