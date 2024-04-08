import {findAllBlogs} from "../../repositories/blogs/blogsRepository";
import {Request, Response} from "express";


export const getAllPosts = (req: Request, res: Response) => {
    const db = findAllBlogs()
    res
        .status(200)
        .json(db)
}