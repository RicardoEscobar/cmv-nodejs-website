var express = require('express');
var router = express.Router();
var staticContentController = require('../controllers/static-content');

/* GET home */
router.get('/', staticContentController.getHome);

/* GET aviso */
router.get('/aviso', staticContentController.getAviso);

/* GET comunidad-infantil */
router.get('/comunidad-infantil', staticContentController.getComunidadInfantil);

/* GET casa-ninios */
router.get('/casa-ninios', staticContentController.getCasaNinios);

/* GET comunicado */
//router.get('/comunicado', staticContentController.getComunicado);

/* GET contacto */
router.get('/contacto', staticContentController.getContacto);
    
/* GET galeria */
router.get('/galeria', staticContentController.getGaleria);

/* GET inscripciones */
router.get('/inscripciones', staticContentController.getInscripciones);

/* GET mapa */
router.get('/mapa', staticContentController.getMapa);

/* GET metodo */
router.get('/metodo', staticContentController.getMetodo);

/* GET pilar */
router.get('/pilar', staticContentController.getPilar);

/* GET preguntas */
router.get('/preguntas', staticContentController.getPreguntas);

/* GET taller */
router.get('/taller', staticContentController.getTaller);

module.exports = router;