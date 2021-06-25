import { Router } from 'express'
import { CreateUserController, CreateTagController, AuthenticateUserController, CreateComplimentController } from './controllers'
import { ensureAdmin } from './middlewares'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliment', createComplimentController.handle)

export { router }
