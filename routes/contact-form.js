var express = require('express');
var router = express.Router();
var contactFormController = require('../controllers/contact-form');

/* POST contacto */
router.post('/contacto', contactFormController.postContacto);

/* POST inscripciones */
router.post('/inscripciones', contactFormController.postInscripciones);

module.exports = router;