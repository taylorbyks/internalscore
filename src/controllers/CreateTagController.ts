import { Request, Response } from 'express'
import { CreateTagService } from '../service'

export class CreateTagController {
  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body

      const createTagService = new CreateTagService()

      const tag = await createTagService.execute({ name })

      return response.json(tag)
    } catch (error) {
      return response.status(400).json({ error: error.message})
    }
  }
}
