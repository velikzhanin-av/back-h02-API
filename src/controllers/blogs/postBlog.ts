import {createBlog} from "../../repositories/blogs/blogsRepository";

export const postBlog = (req: any, res: any) => {

    createBlog(req.params)

    res
        .sendStatus(200)

}