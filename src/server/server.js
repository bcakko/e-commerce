const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/auth");
const cors = require("cors");

const app = express();
const port = 4000;
const db_url = `mongodb+srv://adessi:adessi2022@adesso.2sfcvab.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db_url);
const database = mongoose.connection;

database.on("error", error => {
    throw error
});

database.once("connected", () => {
    console.log("Database connected");
})

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
    console.log("server started at localhost:4000")
})