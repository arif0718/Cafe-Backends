import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
  app.listen(8081, () => {
    console.log("Server started");
  });
});

// mongoose
//   .connect(
// "mongodb+srv://arifansari90467:ysMmX6QmV9qZYR4N@cluster0.9rhplrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     app.listen(8081, () => {
//       console.log("Server started");
//     });
// });

app.use("/api/users", userRouter);
