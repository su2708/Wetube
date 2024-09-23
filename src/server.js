import express from "express";

const PORT = 8000;

const app = express();

const handleHome = (req, res) => {
    return res.send("You get res.send");
}

const handleLogin = (req, res) => {
    return res.send("Login here")
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);