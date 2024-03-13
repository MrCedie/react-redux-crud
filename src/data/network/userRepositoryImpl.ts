import axios from "axios";
import { User } from "../../domain/interfaces/user";
import { UserRepository } from "../../domain/repositories/userRepository";

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
}
