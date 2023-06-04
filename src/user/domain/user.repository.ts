import { User } from "@prisma/client"

export interface IUserRepository {
  getAll: () => Promise<User[]>
}
