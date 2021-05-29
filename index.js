const express = require("express");

const app = express();

app.get("/", (req, res) => res.send(`Hola, llegaste hasta acá`));

app.listen(5000);
