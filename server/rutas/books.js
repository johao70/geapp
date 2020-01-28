const express = require("express");

const router = express.Router();

const Book = require("../models/book");

router.get("/books", (req, res, next) => {
  const { query } = req;
  Book.findAll( { where: query } )
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/books", (req, res, next) => {
  const datos = {
    nombre: req.body.nombre,
    autor: req.body.autor
  };

  if (!datos) {
    res.status(400);
    res,
      json({
        error: "Datos incorrectos"
      });
  } else {
    Book.create(datos)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
