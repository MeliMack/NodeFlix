var express = require('express');
var router = express.Router();
var seriesController=require("../controllers/seriesController");


/*router.get('/', productosController.root); 

/* ver form creacion */
router.get("/crear",seriesController.crear);
router.post("/crear",seriesController.guardado);

/*lectura*/
router.get("/",seriesController.listado);

/*Detalle*/
router.get("/:id",seriesController.detalle);

/*Actualizar*/
router.get("/editar/:id",seriesController.editar);
router.post("/editar/:id",seriesController.actualizar);

/*Borrar*/
router.post("/borrar/:id",seriesController.borrar);

module.exports = router;