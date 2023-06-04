import { User } from "@prisma/client";

export interface IUserService {
  getAll: () => Promise<User[]>
}
