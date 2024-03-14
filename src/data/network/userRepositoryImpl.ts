import axios from "axios";
import { User } from "../../domain/interfaces/user";
import { UserRepository } from "../../domain/repositories/userRepository";
import { MessageResponse } from "../../domain/interfaces/response";

export class UserRepositoryImpl implements UserRepository {
  async getUsers(): Promise<User[]> {
    const res = await axios.get(
      "https://sample-crud-two.vercel.app/firestore/users"
    );
    return res.data;
  }

  async getUser(id: string): Promise<User> {
    const res = await axios.get(
      `https://sample-crud-two.vercel.app/firestore/users/${id}`
    );
    return res.data;
  }

  async addUser(formData: User): Promise<User> {
    const res = await axios.post(
      `https://sample-crud-two.vercel.app/firestore/users`,
      formData
    );

    return res.data;
  }

  async updateUser(id: string, formData: User): Promise<MessageResponse> {
    const res = await axios.put(
      `https://sample-crud-two.vercel.app/firestore/users/${id}`,
      formData
    );

    return res.data;
  }

  async deleteUser(id: string): Promise<MessageResponse> {
    const res = await axios.delete(
      `https://sample-crud-two.vercel.app/firestore/users/${id}`
    );

    return res.data;
  }
}
