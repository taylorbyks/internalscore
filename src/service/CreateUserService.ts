import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error('Incorrect email')
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}
