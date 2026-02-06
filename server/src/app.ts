import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Backend is working");
});

app.get("/health", (req, res) => {
    res.send("Server is healthy");
});

app.get("/about", (req, res) => {
    res.send("This is about route");
    console.log(req.method);
    console.log(req.url);
});

app.get("/time", (req, res) => {
    res.send("This is time route");
});

export default app;