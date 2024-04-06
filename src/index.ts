import {SETTINGS} from "./settings";
import {app} from "./app";
import {blogsRouter} from "./routes/blogs/routes";
import {testingRouter} from "./routes/testing/routes";
import {postInputValidation} from "./middlewares/inputValidation";


app.listen(SETTINGS.PORT, () => {
    console.log(`Server started on port ${SETTINGS.PORT}`)
})

app.use(SETTINGS.PATH.BLOGS, blogsRouter)
app.use(SETTINGS.PATH.TESTING, testingRouter)
