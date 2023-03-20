import express from "express";
import { postRoutes } from "./routes/post";

const app = express ()
const PORT = 8080;

app.use(express.json())
app.use('/api/post', postRoutes)

app.listen(PORT, () => {
    console.log(`Server listen on https://localhost:${PORT}`)
})