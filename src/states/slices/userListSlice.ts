import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserRepositoryImpl } from "../../data/network/userRepositoryImpl";

const userRepository = new UserRepositoryImpl();

export interface UserState {
  users: any[];
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    console.log('called')
    const users = await userRepository.getUsers();
    return users;
  } catch (error) {
    throw error;
  }
});

const UserListSlice = createSlice({
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

export default UserListSlice.reducer;
