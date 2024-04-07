import {db} from "../../db/db";

export const findAllBlogs = () => {
    return db.blogs
}

export const createBlog = (data:any) => {
    const newBlog =
        {
            "id": data.id,
            "name": data.name,
            "description": data.description,
            "websiteUrl": data.websiteUrl
        }
    db.blogs.push(newBlog)
        return newBlog
    }

export const findBlogById = (data:any) => {
    // const blog = db.blogs.find(item => item.id == data)
    for (let item of db.blogs) {
        if (item.id === data) {
            return item
        }
    }
}