import {Router} from 'express'
import { deletePost, getPost, getPosts, postPost, updatePost } from '../controllers/post.js'

export const postRoutes = Router()

postRoutes.get('/', getPosts )
postRoutes.get('/', getPost)
postRoutes.post ('/', postPost)
postRoutes.put('/:id', updatePost)
postRoutes.delete('/:id', deletePost)
