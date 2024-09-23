import express from "express";

const PORT = 8000;

const app = express();

app.get("/", () => console.log("Somebody is trying to go home."))

const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);