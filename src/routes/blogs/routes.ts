import {Router} from "express";
import {SETTINGS} from "../../settings";
import {getAllBlogs} from "../../controllers/blogs/getAllBlogs";

export const blogsRouter = Router()

blogsRouter.get(SETTINGS.PATH.BLOGS, getAllBlogs)