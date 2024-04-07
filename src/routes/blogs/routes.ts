import {Router} from "express";
import {getAllBlogs} from "../../controllers/blogs/getAllBlogs";
import {postBlog} from "../../controllers/blogs/postBlog";
import {getBlogById} from "../../controllers/blogs/getBlogById";
import {updateBlogById} from "../../controllers/blogs/updateBlogById";
import {deleteBlogById} from "../../controllers/blogs/deleteBlogById";
import {
    descriptionValidation,
    nameValidation,
    postInputValidation, websiteUrlValidation
} from "../../middlewares/inputValidation";
import {authMiddleware} from "../../middlewares/authMiddleware";

export const blogsRouter = Router()

blogsRouter.get('/', getAllBlogs)
blogsRouter.post('/', authMiddleware,
    nameValidation,
    descriptionValidation,
    websiteUrlValidation,
    postInputValidation,
    postBlog)
blogsRouter.get('/:id', getBlogById)
blogsRouter.put('/:id', authMiddleware,
    nameValidation,
    descriptionValidation,
    websiteUrlValidation,
    postInputValidation,
    updateBlogById)
blogsRouter.delete('/:id', authMiddleware, deleteBlogById)
