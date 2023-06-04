import { User } from "@prisma/client";
import { IUserRepository } from "../domain/user.repository";

export default class UserRepository implements IUserRepository {
  async getAll(): Promise<User[]> {
    return []
  }
}
