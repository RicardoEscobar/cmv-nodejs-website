const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(
  rootDir,
  '..',
  'data',
  'staff.json'
);

const getStaffFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log(err);
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Staff {
  constructor(id, pictureURL, department, name, quote = '') {
    this.id = id;
    this.pictureURL = pictureURL;
    this.department = department;
    this.name = name;
    this.quote = quote;
  }

  save() {
    getStaffFromFile(staffMembers => {
      staffMembers.push(this);
      fs.writeFile(p, JSON.stringify(staffMembers), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getStaffFromFile(cb);
  }
};
