import { User, UserModel } from './user.model'

export async function createUser(user: Omit<User, 'comparePassword'>) {
  return await UserModel.create(user)
}

export async function findByEmail(email: User['email']) {
  return UserModel.findOne({ email })
}
