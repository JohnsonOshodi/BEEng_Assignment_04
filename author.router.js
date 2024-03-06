const express = require("express");
const authorRouter = express.Router();

authorRouter.put("/", (req, res) =>{
    console.log(req.params);
    res.send("Hello, This is a PUT request")
});

authorRouter.get("/", (req, res) =>{
    console.log(req.params);
    res.send("Hello, This is a GET request")
});

authorRouter.post("/", (req, res) =>{
    console.log(req.params);
    res.send("Hello, This is a POST request")
});

authorRouter.delete("/", (req, res) =>{
    console.log(req.params);
    res.send("Hello, This is a DELETE request")
})

module.exports = authorRouter;