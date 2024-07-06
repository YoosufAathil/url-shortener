import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

dotenv.config();
connectDb();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://url-shortener-one-mauve.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/api/", shortUrl);
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
