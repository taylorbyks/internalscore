import { Router } from 'express'
import { CreateUserController, CreateTagController, AuthenticateUserController, CreateComplimentController, ListComplimentsController, ListTagsController } from './controllers'
import { ensureAdmin, ensureAuthenticate } from './middlewares'

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listComplimentsController = new ListComplimentsController()
const listTagsController = new ListTagsController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.get('/tags', ensureAuthenticate, listTagsController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)
router.get('/users/compliments/send', ensureAuthenticate, listComplimentsController.handleListSended)
router.get('/users/compliments/recive', ensureAuthenticate, listComplimentsController.handleListReceived)
