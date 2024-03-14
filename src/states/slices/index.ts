import { combineReducers } from "@reduxjs/toolkit";

import userListSlice, { UserListState } from "./userListSlice";
import userFormSlice, { UserFormState } from "./userFormSlice";

export type RootState = {
  users: UserListState;
  userForm: UserFormState;
};

const rootReducer = combineReducers({
  users: userListSlice,
  userForm: userFormSlice,
  // Add other reducers here
});

export default rootReducer;
