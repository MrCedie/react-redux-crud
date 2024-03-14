import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserUseCase } from "../../domain/usecases/userUseCase";
import { User } from "../../domain/interfaces/user";

const userRepository = new UserUseCase();

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const users = await userRepository.getUsers();
    return users;
  } catch (error) {
    throw error;
  }
});

export const getUser = createAsyncThunk(
  "userForm/getUsers",
  async (id: string) => {
    try {
      const user = await userRepository.getUser(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const addUser = createAsyncThunk(
  "userForm/addUsers",
  async (formData: User) => {
    try {
      const user = await userRepository.addUser(formData);
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const updateUser = createAsyncThunk(
  "userForm/updateUser",
  async ({ id, formData }: { id: string; formData: User }) => {
    try {
      const user = await userRepository.updateUser(id, formData);
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "userForm/deleteUser",
  async (id: string) => {
    try {
      const user = await userRepository.deleteUser(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
);
