var express = require('express');
var router = express.Router();
var galeriaController = require('../controllers/galeria');

/* GET instalaciones */
router.get('/instalaciones', galeriaController.getInstalaciones);

/* GET comunidad-infantil */
router.get('/comunidad-infantil', galeriaController.getComunidadInfantil);

/* GET casa-ninios */
router.get('/casa-ninios', galeriaController.getCasaNinios);

/* GET taller */
router.get('/taller', galeriaController.getTaller);

/* GET musica */
router.get('/musica', galeriaController.getMusica);

/* GET activacion-fisica */
router.get('/activacion-fisica', galeriaController.getActivacionFisica);

/* GET ambiente-externo */
router.get('/ambiente-externo', galeriaController.getAmbienteExterno);

/* GET escuela-padres */
router.get('/escuela-padres', galeriaController.getEscuelaPadres);

module.exports = router;