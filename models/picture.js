const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(
  rootDir,
  '..',
  'data',
  'picture.json'
);

const getPicturesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Picture {
  constructor(
    id,
    pictureURL = 'https://via.placeholder.com/300',
    isAlta = true,
    isAncha = true,
    path = '/galeria/instalaciones'
  ) {
    this.id = id;
    this.pictureURL = pictureURL;
    this.isAlta = isAlta;
    this.isAncha = isAncha;
    this.path = path;
  }

  save() {
    getPicturesFromFile(pictures => {
      pictures.push(this);
      fs.writeFile(p, JSON.stringify(pictures), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPicturesFromFile(cb);
  }
};