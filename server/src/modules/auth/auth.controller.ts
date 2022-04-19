import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import omit from '../../helpers/omit'

import { findByEmail } from '../user/user.service'
import { signJwt } from './auth.utils'
import { LoginUserType } from './auth.schema'

export async function loginHandler(
  req: Request<{}, {}, LoginUserType>,
  res: Response
) {
  const { email, password } = req.body

  const user = await findByEmail(email)

  if (!user || !user.comparePassword(password))
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send('Invalid login credentials.')

  const payload = omit(user.toJSON(), ['password', '__v'])

  const jwt = signJwt(payload)
  res.cookie('accessToken', jwt, {
    maxAge: 3.154e10, //1yr
    httpOnly: true,
    domain: process.env.DOMAIN || 'localhost',
    path: '/',
    sameSite: 'strict',
    secure: false,
  })
  return res.status(StatusCodes.OK).send(jwt)
}
