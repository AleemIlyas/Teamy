import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import teamReducer from './teamReducer';
const rootReducer = combineReducers({
    user : userReducer , 
    project : projectReducer,
    teams : teamReducer
});

export default rootReducer;
