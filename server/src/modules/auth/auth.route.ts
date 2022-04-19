import { Router, Request, Response } from 'express'

import { processRequestBody } from 'zod-express-middleware'
import requireUser from '../../middlewares/requireUser'
import { loginHandler } from './auth.controller'
import { loginSchema } from './auth.schema'

const router = Router()

router.get('/me', requireUser, (req: Request, res: Response) => {
  return res.send(res.locals.user)
})

router.post('/login', processRequestBody(loginSchema.body), loginHandler)

export default router

// NOTES:processRequestBody=> This fetches everything required by the schema from the request body, filters it and validates it against the schema.
