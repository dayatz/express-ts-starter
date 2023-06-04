import type { Express } from "express";
import express from 'express'
import { userController } from "./user.init";

export default function initUserRoute(app: Express) {
  const router = express.Router() 
  router.get('/', userController.get)
  app.use('/users', router)
}
