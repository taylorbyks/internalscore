import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories, UsersRepositories } from '../repositories'

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (user_sender == user_receiver) {
      throw new Error('Incorrect User Reciver')
    }

    const userReciverExists = await usersRepositories.findOne(user_receiver)

    if (!userReciverExists) {
      throw new Error('User Reciver does not exists')
    }

    const compliment = complimentsRepositories.create({ tag_id, user_sender, user_receiver, message })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}
