import express from 'express'
const router = express.Router()

import { getPosts, addPost } from "../controllers/post.js";


router.get("/",getPosts)
router.post("/",addPost)

export default router