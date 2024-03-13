import { combineReducers } from "@reduxjs/toolkit";

import userListSlice from "./userListSlice";

const rootReducer = combineReducers({
  users: userListSlice,
  // Add other reducers here
});

export default rootReducer;
