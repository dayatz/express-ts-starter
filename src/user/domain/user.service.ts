import { User } from "./user.entity";

export interface IUserService {
  getAll: () => Promise<User[]>
}
