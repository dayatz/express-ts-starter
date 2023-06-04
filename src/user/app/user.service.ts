import { User } from "../domain/user.entity";
import { IUserRepository } from "../domain/user.repository";
import { IUserService } from "../domain/user.service";

export default class UserService implements IUserService {
  userRepo: IUserRepository
  constructor(userRepo: IUserRepository) {
    this.userRepo = userRepo
  }

  getAll = async (): Promise<User[]> => {
    const users = await this.userRepo.getAll()
    return users
  }
}
