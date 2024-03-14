import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userActions";
import { User } from "../../domain/interfaces/user";

export interface UserListState {
  users: User[];
  loading: boolean;
  error: any;
}

const initialState: UserListState = {
  users: [],
  loading: false,
  error: null,
};

const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred.";
    });
  },
});

export default userListSlice.reducer;
