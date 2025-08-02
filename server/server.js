import express from "express";
import router from "./routes/routes.js";
import DBConnection from "./database/database.js";
import cors from "cors";
const app = express();

DBConnection();

app.use(cors());

app.use("/", router);

app.listen(8000, () =>{
    console.log("App is running on port 8000.");
});