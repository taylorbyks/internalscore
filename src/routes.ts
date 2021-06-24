import { Router } from 'express'
import { CreateUserController, CreateTagController, AuthenticateUserController } from './controllers'
import { ensureAdmin } from './middlewares'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)

export { router }
