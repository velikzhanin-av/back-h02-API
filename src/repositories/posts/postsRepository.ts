import {db} from "../../db/db";

export const findAllPosts = () => {
    return db.posts
}

export const createPost = (data:any) => {
    const newPost =
        {
            "id": Math.random().toString(36).substring(2) + Math.floor(Math.random() * 100000),
            "title": data.string,
            "shortDescription": data.shortDescription,
            "content": data.content,
            "blogId": data.blogId,
            "blogName": "string"
        }
    db.posts.push(newPost)
    return newPost
}

export const findPostById = (id: string) => {
    for (let item of db.posts) {
        if (item.id === id) {
            return item
        }
    }
}