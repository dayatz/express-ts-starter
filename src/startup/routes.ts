import type { Express, Request, Response } from 'express'

export default function routerSetup(app: Express) {
  app.get('/', async function (req: Request, res: Response) {
    console.log(req)
    res.send('hello express ts')
  })
}
