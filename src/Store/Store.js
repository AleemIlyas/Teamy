import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
// Import any other middleware you need

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  // Add any other middleware here
});

export default store;
