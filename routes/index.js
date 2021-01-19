var express = require('express');
var router = express.Router();
//var indexController=require("../controllers/indexController");

let db = require ("../database/models");
/* GET home page. */

//router.get('/', indexController.showIndex);


router.get('/', function(req,res,next){
    let toptenpelicula=db.sequelize.query('SELECT * FROM movies WHERE id<11')
    let toptenseries=db.sequelize.query('SELECT * FROM series')
//el then se va a ejecutar cuando las dos promesas se hayan cumplido
        Promise.all([toptenpelicula,toptenseries])
            .then(function([movies,series]){  
                res.render("index",{movies:movies,series:series});

   })
});

   
module.exports = router;
