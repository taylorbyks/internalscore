import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories'

interface IAuthenticateRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    const user = await usersRepository.findOne({ email })

    if (!user) {
      throw new Error('Email is incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Password is incorrect')
    }

    const token = sign({ email: user.email }, 'd41d8cd98f00b204e9800998ecf8427e', { subject: user.id, expiresIn: '1d' })

    return token
  }
}
