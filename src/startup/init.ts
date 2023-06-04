import type { Express } from 'express'
import config from './configs/dev'

export default function initApp(app: Express) {
  app.listen(config.PORT, function() {
    console.log(`Server started on port ${config.PORT}`)
  })
}
