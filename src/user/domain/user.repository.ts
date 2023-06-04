import type { User } from '../domain/user.entity'

export interface IUserRepository {
  getAll: () => Promise<User[]>
}
