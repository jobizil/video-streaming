import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import {} from '../modules/auth/auth.utils'
export default function requireUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = res.locals.user
  if (!user) return res.sendStatus(StatusCodes.FORBIDDEN)

  return next()
}
