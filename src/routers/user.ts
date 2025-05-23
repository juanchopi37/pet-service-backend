import {Router, Request, Response} from 'express'


const userApi = (app) => {
  const router = Router()

  app.use('/api/user', router )

}
