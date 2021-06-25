import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories, UsersRepositories } from '../repositories'

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_reciver: string
  message: string
}

export class CreateComplimentService {
  async execute({ tag_id, user_sender, user_reciver, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (user_sender == user_reciver) {
      throw new Error('Incorrect User Reciver')
    }

    const userReciverExists = await usersRepositories.findOne(user_reciver)

    if (!userReciverExists) {
      throw new Error('User Reciver does not exists')
    }

    const compliment = complimentsRepositories.create({ tag_id, user_sender, user_reciver, message })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}