import express from "express";

const PORT = 4000;

const app = express();

const handListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handListening);