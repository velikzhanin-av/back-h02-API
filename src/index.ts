import {SETTINGS} from "./settings";
import {app} from "./app";
import {blogsRouter} from "./routes/blogs/routes";


app.listen(SETTINGS.PORT, () => {
    console.log(`Server started on port ${SETTINGS.PORT}`)
})
app.use(blogsRouter)