const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");
dotenv.config();

const {dbConnection} = require("./database/config");
dbConnection();

const houses = require("./routes/houses");

const app = express();

app.use(cors()); //enable cors
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Rutas de la aplicación */
app.use("/api/houses", houses);

app.use(function (req, res, next) {
  console.error("Ruta no encontrada");
});

app.use(function (err, req, res, next) {
  console.error(err);
});

module.exports = app;
