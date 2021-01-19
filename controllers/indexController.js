const fs = require('fs');
const path = require('path');

let db = require ("../database/models");

let indexController = {
    showIndex: (req, res) => {
        res.render('index')
  
}
}
module.exports = indexController;