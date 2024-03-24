import {createBlog} from "../../repositories/blogs/blogsRepository";

export const postBlog = (req: any, res: any) => {

    const newBlog = createBlog(req.body)

    res
        .status(200)
        .json(newBlog)

}