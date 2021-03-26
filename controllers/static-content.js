const Staff = require('../models/staff');

exports.getHome = (req, res, next) => {
  res.render('static-content/index', {
    title: 'Colegio Montessori de la Vera Cruz',
    currentYear: new Date().getFullYear(),
    path: '/'
  });
}

exports.getAviso = (req, res, next) => {
  res.render('static-content/aviso',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/aviso'
      }
    );
}

exports.getCasaNinios = (req, res, next) => {
  res.render('static-content/casa-ninios',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/casa-ninios'
      }
    );
}

exports.getComunicado = (req, res, next) => {
  res.render('static-content/comunicado',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/comunicado'
      }
    );
}

exports.getComunidadInfantil = (req, res, next) => {
  res.render('static-content/comunidad-infantil',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/comunidad-infantil'
      }
    );
}

exports.getContacto = (req, res, next) => {
  res.render('static-content/contacto',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/contacto',
          isEmailSuccessful: false
      }
    );
}

exports.getGaleria = (req, res, next) => {
  res.render('static-content/galeria',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/galeria'
      }
    );
}

exports.getInscripciones = (req, res, next) => {
  res.render('static-content/inscripciones',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/inscripciones',
          isEmailSuccessful: false
      }
    );
}

exports.getMapa = (req, res, next) => {
  res.render('static-content/mapa',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/mapa'
      }
    );
}

exports.getMetodo = (req, res, next) => {
  res.render('static-content/metodo',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/metodo'
      }
    );
}

exports.getPilar = (req, res, next) => {
  Staff.fetchAll(staff => {
    res.render('static-content/pilar',
        {
            title: 'Colegio Montessori de la Vera Cruz',
            currentYear: new Date().getFullYear(),
            path: '/pilar',
            staff: staff
        }
    );
  });
}

exports.getPreguntas = (req, res, next) => {
  res.render('static-content/preguntas',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/preguntas'
      }
    );
}

exports.getTaller = (req, res, next) => {
  res.render('static-content/taller',
      {
          title: 'Colegio Montessori de la Vera Cruz',
          currentYear: new Date().getFullYear(),
          path: '/taller'
      }
    );
}