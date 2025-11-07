import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
config()
import {productRouter} from './routes/productRoutes.js'
import {userRouter} from './routes/userRouter.js'

const app = express();

app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRouter)
app.use("/api", userRouter)

app.get("/", (req, res) => {
    res.send("Runs");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});