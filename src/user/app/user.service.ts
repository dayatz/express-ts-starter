import { User } from "@prisma/client";
import { IUserRepository } from "../domain/user.repository";
import { IUserService } from "../domain/user.service";
import { prisma } from "../../lib/prisma.client";

export default class UserService implements IUserService {
  userRepo: IUserRepository
  constructor(userRepo: IUserRepository) {
    this.userRepo = userRepo
  }

  async getAll(): Promise<User[]> {
    return prisma.user.findMany()
  }
}
