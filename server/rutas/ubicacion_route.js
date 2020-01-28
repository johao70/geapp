const express = require("express");

const router = express.Router();

const Ubicacion = require("../models/ubicacion");

router.get("/geapp", (req, res, next) => {
  const { query } = req;
  Ubicacion.findAll( { where: query } )
    .then(ubi => {
      res.json(ubi);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/geapp", (req, res, next) => {
  const datos = {
    latitud: req.body.latitud,
    longitud: req.body.longitud,
    nombre: "Johao",
    fecha: req.body.fecha
  };

  if (!datos) {
    res.status(400);
    res,
      json({
        error: "Datos incorrectos"
      });
  } else {
    Ubicacion.create(datos)
      .then(data => {
        return res.status(200).json({
          ok: true,
          datos: data
        })
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
