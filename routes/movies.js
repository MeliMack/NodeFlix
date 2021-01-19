var express = require('express');
var router = express.Router();
var moviesController=require("../controllers/moviesController");


/*router.get('/', productosController.root); 

/* ver form creacion */
router.get("/crear",moviesController.crear);
router.post("/crear",moviesController.guardado);

/*lectura*/
router.get("/",moviesController.listado);

/*Detalle*/
router.get("/:id",moviesController.detalle);

/*Actualizar*/
router.get("/editar/:id",moviesController.editar);
router.post("/editar/:id",moviesController.actualizar);

/*Borrar*/
router.post("/borrar/:id",moviesController.borrar);

module.exports = router;