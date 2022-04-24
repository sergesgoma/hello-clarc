const express = require("express");
const router = express.Router();

// import du middleware pour la validation et la sanitisation des inputs 
const stringValidate = require('./middlewares/stringValidate');
 
// import des controllers
const mainController = require('./controllers/mainController');


// HOMEPAGE
router.get('/', mainController.homePage);

// FORM PAGE
router.get('/form', mainController.formPage);
router.post('/form', stringValidate, mainController.formPagePost);




module.exports = router;