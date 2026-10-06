import express from "express";
import type { Express, Request, Response } from "express";
import userRouter from "./routes/userRoutes.js"

const app: Express = express();
const PORT = 3000;

app.use(express.json());

app.use("/user", userRouter);


app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
});