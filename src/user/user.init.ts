import UserRepository from "./app/user.repository";
import UserService from "./app/user.service";
import UserController from "./user.controller";

export const userRepo = new UserRepository()
export const userService = new UserService(userRepo)
export const userController = new UserController(userService)

