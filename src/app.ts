import express from 'express'
import securitySetup from './startup/security'
import routerSetup from './startup/routes'
import initApp from './startup/init'

const app = express()
initApp(app)
securitySetup(app, express)
routerSetup(app)

