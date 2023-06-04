import type { User } from '../domain/user.entity'
import { IUserRepository } from "../domain/user.repository";
import { prisma } from "../../lib/prisma.client";

export default class UserRepository implements IUserRepository {
  async getAll(): Promise<User[]> {
    const usersFromDb = await prisma.user.findMany()
    return usersFromDb.map(u => ({
      id: u.ID,
      name: u.name,
      email: u.email
    }))
  }
}
