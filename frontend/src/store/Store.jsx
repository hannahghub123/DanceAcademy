import { configureStore } from "@reduxjs/toolkit";
import stdloginReducer from '../features/stdloginSlice';
import stdsignupReducer from '../features/stdsignupSlice';
import tutorloginReducer from '../features/tutorloginSlice';
import tutorsignupReducer from '../features/tutorsignupSlice';
import adminloginReducer from '../features/adminloginSlice';
import admindashReducer from '../features/admindashSlice';
import tprofeditReducer from '../features/tutorprofileEditSlice';
import logoutReducer from '../features/logoutSlice'

const store = configureStore({
    reducer: {
      stdlogin: stdloginReducer,
      stdsignup : stdsignupReducer,
      tutorlogin : tutorloginReducer,
      tutorsignup : tutorsignupReducer,
      adminlogin : adminloginReducer,
      admindash : admindashReducer,
      tprofedit : tprofeditReducer,
      logout : logoutReducer
    },
  });

export default store;