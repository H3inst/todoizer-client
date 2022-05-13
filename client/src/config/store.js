import { configureStore } from '@reduxjs/toolkit';

import interfaceReducer from '../features/interface/interfaceSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    interface: interfaceReducer
  }
});