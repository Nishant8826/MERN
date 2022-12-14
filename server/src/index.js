import express from "express";
import cors from "cors";
import connection from "./config/database.js";
import userRoutes from "./routes/route.js";
import errorMiddleware from "./middleware/customError.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

connection();

app.use(errorMiddleware)

app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on ${process.env.PORT || 4000}`);
});
