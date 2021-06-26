import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories'

export class ListComplimentsService {
  async listReceived(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
    })

    return compliments
  }

  async listSended(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
    })

    return compliments
  }
}
