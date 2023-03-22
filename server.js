import express from "express";
import { postRoutes } from "./routes/post.js";
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express ()
const PORT = 8080;

app.use(express.json())
app.use('/api/post', postRoutes)


async function main() {
    await mongoose.connect(process.env.DB);
  }

main()


app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}/api/post`)
})

