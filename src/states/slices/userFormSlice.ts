import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserRepositoryImpl } from "../../data/network/userRepositoryImpl";
import { User } from "../../domain/interfaces/user";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../actions/userActions";

export interface UserFormState {
  user: User | null;
  loading: boolean;
  submissionLoading: boolean;
  error: any;
}

const initialState: UserFormState = {
  user: null,
  loading: false,
  submissionLoading: false,
  error: null,
};

const userFormSlice = createSlice({
  name: "userForm",
  initialState,
  reducers: {
    clearUserForm: (state) => {
      console.log("caled");
      state.user = null;
      state.loading = false;
      state.submissionLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // getUser
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred.";
    });

    // Add User
    builder.addCase(addUser.pending, (state) => {
      state.submissionLoading = true;
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.submissionLoading = false;
      state.error = null;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.submissionLoading = false;
      state.error = action.error.message || "An error occurred.";
    });

    // Update User
    builder.addCase(updateUser.pending, (state) => {
      state.submissionLoading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.submissionLoading = false;
      state.error = null;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.submissionLoading = false;
      state.error = action.error.message || "An error occurred.";
    });

    // Delete User
    builder.addCase(deleteUser.pending, (state) => {
      state.submissionLoading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.submissionLoading = false;
      state.error = null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.submissionLoading = false;
      state.error = action.error.message || "An error occurred.";
    });
  },
});

export const { clearUserForm } = userFormSlice.actions;

export default userFormSlice.reducer;
