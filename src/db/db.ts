export type DBType = {
    blogs: any[]
}

export let db: DBType =  {
    blogs: [
        {
            "id": "string",
            "name": "string",
            "description": "string",
            "websiteUrl": "string"
        },
        {
            "id": "some string",
            "name": "some string",
            "description": "some string",
            "websiteUrl": "some string"
        }
    ]
}