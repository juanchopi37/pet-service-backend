import {Router} from 'express'
import type {Request, Response} from 'express'

const app = router

const userApi = (app) => {
  const router = Router()

  app.use('/api/user', router )

}
