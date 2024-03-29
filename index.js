// création du serveur express
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;
const router = require("./app/router");
require("dotenv").config({ path: "./.env" });

const app = express();

// connexion à la DB
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log("DB is connected");
  },
  { useFindAndModify: false }
);

// définition du view engine + path des views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'));

// path du dossier static
app.use(express.static(path.join(__dirname, "/public")));

// extraction des données du formulaire + ajout aux propriétés du req.body
app.use(express.urlencoded({ extended: true }));

// lancement du serveur + mise en mode écoute
app.use(router);
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
