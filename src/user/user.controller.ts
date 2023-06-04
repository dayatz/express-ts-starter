import type { Request, Response } from 'express'
import { IUserService } from "./domain/user.service"

export default class UserController {
  userService: IUserService
  constructor(userService: IUserService) {
    this.userService = userService
  }

  get = async (_: Request, res: Response) => {
    const users = await this.userService.getAll()
    res.json(users)
  }
}
