import {Router} from "express";
import {SETTINGS} from "../../settings";
import {getAllBlogs} from "../../controllers/blogs/getAllBlogs";
import {createBlog} from "../../controllers/blogs/createBlog";
import {getBlogById} from "../../controllers/blogs/getBlogById";
import {updateBlogById} from "../../controllers/blogs/updateBlogById";
import {deleteBlogById} from "../../controllers/blogs/deleteBlogById";

export const blogsRouter = Router()

blogsRouter.get(SETTINGS.PATH.BLOGS, getAllBlogs)
blogsRouter.get('/testing/all-data', getAllBlogs)
blogsRouter.post(SETTINGS.PATH.BLOGS, createBlog)
blogsRouter.get(SETTINGS.PATH.BLOGS + '/:id' , getBlogById)
blogsRouter.put(SETTINGS.PATH.BLOGS + '/:id' , updateBlogById)
blogsRouter.delete(SETTINGS.PATH.BLOGS + '/:id' , deleteBlogById)
