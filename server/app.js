const express = require("express");

const bodyParser = require("body-parser");

const books = require("./rutas/books");
const cors = require("cors");

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Bienvenidos al Yavirac!");
});
app.use("/api", books);

app.listen(PORT, () => {
  console.log(`Servidor en el puerto: ${PORT}`);
});
