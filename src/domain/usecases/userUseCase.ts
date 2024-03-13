import { User } from "../interfaces/user";
import { UserRepository } from "../repositories/userRepository";

export class UserUseCase implements UserRepository {
  userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  getUsers(): Promise<User[]> {
    return this.userRepo.getUsers();
  }

  async getUser(id: string): Promise<User> {
    return this.userRepo.getUser(id);
  }
}
