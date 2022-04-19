import { Router } from 'express'

import { processRequestBody } from 'zod-express-middleware'
import { registerUserHandler } from './user.controller'
import { registerSchema } from './user.schema'

const router = Router()

router.post('/', processRequestBody(registerSchema.body), registerUserHandler)

export default router

// NOTES:processRequestBody=> This fetches everything required by the schema from the request body, filters it and validates it against the schema.
