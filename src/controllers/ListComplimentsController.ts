import { Request, Response } from 'express'
import { ListComplimentsService } from '../service'

export class ListComplimentsController {
  async handleListSended(request: Request, response: Response) {
    const { user_id } = request

    const listComplimentsService = new ListComplimentsService()

    const compliments = await listComplimentsService.listSended(user_id)

    return response.json(compliments)
  }

  async handleListReceived(request: Request, response: Response) {
    const { user_id } = request

    const listComplimentsService = new ListComplimentsService()

    const compliments = await listComplimentsService.listReceived(user_id)

    return response.json(compliments)
  }
}
