import express from "express";
import userRouter from "./routes/userRoutes.js";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/user", userRouter);
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map