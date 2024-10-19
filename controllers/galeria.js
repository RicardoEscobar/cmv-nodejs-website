const Picture = require('../models/picture');

exports.getInstalaciones = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/instalaciones') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/instalaciones',
      category: 'Instalaciones',
      emoji: '🏫',
      pictures: pictures
    });
  });
}

exports.getComunidadInfantil = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/comunidad-infantil') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/comunidad-infantil',
      category: 'Comunidad Infantil',
      subtitle: '(1 a 3 años)',
      emoji: '👶',
      pictures: pictures
    });
  });
}

exports.getCasaNinios = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/casa-ninios') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/casa-ninios',
      category: 'Casa de los niños',
      subtitle: '(3 a 6 años)',
      emoji: '👧',
      pictures: pictures
    });
  });
}

exports.getTaller = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/taller') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/taller',
      category: 'Taller',
      subtitle: '(6 a 12 años)',
      emoji: '🧑',
      pictures: pictures
    });
  });
}

exports.getMusica = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/musica') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/musica',
      category: 'Música',
      emoji: '🎻',
      pictures: pictures
    });
  });
}

exports.getActivacionFisica = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/activacion-fisica') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/activacion-fisica',
      category: 'Activación Física',
      emoji: '🤸🏻‍♀️',
      pictures: pictures
    });
  });
}

exports.getAmbienteExterno = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/ambiente-externo') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/ambiente-externo',
      category: 'Ambiente Externo',
      emoji: '🦆',
      pictures: pictures
    });
  });
}

exports.getEscuelaPadres = (req, res, next) => {
  Picture.fetchAll(allPictures => {
    
    // filter out the pictures that don't belong to this specific gallery
    pictures = allPictures.filter(obj => {
      if ('path' in obj && typeof(obj.path) === 'string' && obj.path === '/galeria/escuela-padres') {
        return true;
      } else {
        return false;
      }
    });

    res.render('galeria/galeria', {
      title: 'Colegio Montessori de la Vera Cruz',
      currentYear: new Date().getFullYear(),
      path: '/galeria/escuela-padres',
      category: 'Escuela de Padres',
      emoji: '👨‍👩‍👧‍👦',
      pictures: pictures
    });
  });
}