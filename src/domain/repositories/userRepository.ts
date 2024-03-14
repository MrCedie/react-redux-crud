import { MessageResponse } from "../interfaces/response";
import { User } from "../interfaces/user";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User>;
  addUser(formData: User): Promise<User>;
  updateUser(id: string, formData: User): Promise<MessageResponse>;
  deleteUser(id: string): Promise<MessageResponse>;
}
