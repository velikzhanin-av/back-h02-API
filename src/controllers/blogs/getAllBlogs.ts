import {db} from "../../db/db";

export const getAllBlogs = (req: any, res: any) => {
    res
        .status(201)
        .json(db.blogs)
}