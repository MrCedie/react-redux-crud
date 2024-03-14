import { UserRepositoryImpl } from "../../data/network/userRepositoryImpl";
import { MessageResponse } from "../interfaces/response";
import { User } from "../interfaces/user";
import { UserRepository } from "../repositories/userRepository";

const userRepository = new UserRepositoryImpl();

export class UserUseCase implements UserRepository {
  getUsers(): Promise<User[]> {
    return userRepository.getUsers();
  }

  getUser(id: string): Promise<User> {
    return userRepository.getUser(id);
  }

  addUser(formData: User): Promise<User> {
    return userRepository.addUser(formData);
  }

  updateUser(id: string, formData: User): Promise<MessageResponse> {
    return userRepository.updateUser(id, formData);
  }

  deleteUser(id: string): Promise<MessageResponse> {
    throw userRepository.deleteUser(id);
  }
}
