import { User } from "../interfaces/user";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User>;
}
