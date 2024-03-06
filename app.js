const express = require("express");
const authorRouter = require("./author.router");
const logger = require("./logger");

const app = express();

app.use(express.json());
app.use(logger);
app.use("/", authorRouter);

app.all("*", (req, res) =>{
    res.status(404).json({message: "error Page not found"});
});

app.listen(4000, (req, res) =>{
    console.log("App is running on port: 4000")
});