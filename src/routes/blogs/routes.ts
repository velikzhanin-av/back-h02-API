import {Router} from "express";
import {getAllBlogs} from "../../controllers/blogs/getAllBlogs";
import {postBlog} from "../../controllers/blogs/postBlog";
import {getBlogById} from "../../controllers/blogs/getBlogById";
import {updateBlogById} from "../../controllers/blogs/updateBlogById";
import {deleteBlogById} from "../../controllers/blogs/deleteBlogById";

export const blogsRouter = Router()

blogsRouter.get('/', getAllBlogs)
blogsRouter.post('/', postBlog)
blogsRouter.get('/:id' , getBlogById)
blogsRouter.put('/:id' , updateBlogById)
blogsRouter.delete('/:id' , deleteBlogById)
