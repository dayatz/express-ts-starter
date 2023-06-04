import type { Express } from 'express'
import cors from 'cors'

export default function securitySetup(app: Express, express: any) {
  app
    .use(cors())
    .use(express.json())
}

