import { Request, Response } from 'express'
import StatusCodes from 'http-status-codes'

import { RegisterUserType } from './user.schema'
import { createUser } from './user.service'
export async function registerUserHandler(
  req: Request<{}, {}, RegisterUserType>,
  res: Response
) {
  const { username, email, password } = req.body

  try {
    await createUser({ username, email, password })
    return res.status(StatusCodes.CREATED).send('User created successfully')
  } catch (error: any) {
    if (error.code === 11000)
      return res
        .status(StatusCodes.CONFLICT)
        .send('Username or email already exists')

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
  }
}
