import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories'

export class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)

    let users = await usersRepositories.find()

    return classToPlain(users)
  }
}