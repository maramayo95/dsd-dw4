import {Router} from 'express'
import { getPost } from '../controllers/post'

export const postRoutes = Router()

postRoutes.get('/', getPost )