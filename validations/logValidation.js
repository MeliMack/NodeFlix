const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');

 

let logValidation = [
  check('userEmail')
    .isEmail().withMessage('Debes ingresar un email válido'),

  check('userPassword')
    .isLength({ min: 8, max: 30 }).withMessage('La constraseña debe contener como mínimo 8 caracteres'),

    check('userCategory')
    .custom(function(){
      let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
      let usersPARSED;
      (usersJSON == '') ? usersPARSED = [] : usersPARSED = JSON.parse(usersJSON);
    for (let i = 0; i < usersPARSED.length; i++) {
    if (usersPARSED[i].userCategory == 'Administrador') {
      return(["OK"])
    }
  }
  return("NO");
}).withMessage('Administrador')
]

module.exports = logValidation;