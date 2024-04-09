import {Router} from "express";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {getAllPosts} from "../../controllers/posts/getAllPosts";
import {postPost} from "../../controllers/posts/postPost";

export const postsRouter = Router()

postsRouter.get('/', getAllPosts)
postsRouter.post('/', postPost)