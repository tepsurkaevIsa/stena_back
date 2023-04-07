import { Router } from "express";
import { createPost, getAll, getById, getMyPosts, removePost, updatePost, getPostComments } from '../controllers/posts.js'
import { checkAuth } from "../utils/checkAuth.js";
const router = Router()

// Create Post

router.post('/', checkAuth, createPost)

// Get All Posts

router.get('/', getAll)

// Get By ID Post

router.get('/:id', getById)

// Get My Post

router.get('/user/me', checkAuth, getMyPosts)

// Get Delete Post

router.delete('/:id', checkAuth, removePost)

// Update Post

router.put('/:id', checkAuth, updatePost)

// Get Post Comments

router.get('/comments/:id', getPostComments)



export default router