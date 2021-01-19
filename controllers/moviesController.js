const fs = require('fs');
const path = require('path');

let db = require ("../database/models");



let moviesController = {
        
    crear: function(req,res){
        db.genres.findAll()
        .then(function(genres){
            return res.render("formParaCrearPelis", {genres:genres});
        })
    },

    guardado:function(req,res){
        db.movies.create({
            title:req.body.title,
            release_date:req.body.release_date,
            genre_id:req.body.genres
        });
        res.redirect("/movies");
    },
    listado:function(req,res){
        db.movies.findAll()
        .then(function(movies){
            res.render("todasLasPeliculas", {movies:movies})
        })
    },
    
    detalle:function(req,res){
        db.movies.findByPk(req.params.id,{
            include:[{association:"genero"}]
        })
        .then(function(movies){
            res.render("detallePelicula",{movies:movies});
        })
    },
    editar:function(req,res){
        //Pedidos asincronicos de pelicula y genero
        let pedidoPelicula=db.movies.findByPk(req.params.id)
        let pedidoGenero=db.genres.findAll();
//el then se va a ejecutar cuando las dos promesas se hayan cumplido
        Promise.all([pedidoPelicula,pedidoGenero])
            .then(function([movies,genres]){  
                res.render("editarPelicula",{movies:movies,genres:genres});
        })
    },
    actualizar:function(req,res){
        db.movies.update({
            title:req.body.title,
            release_date:req.body.release_date,
            genre_id:req.body.genre_id
        },{
            where:{
                id: req.params.id
            }
        });
        res.redirect("/movies/"+ req.params.id);
    },
    borrar:function(req,res){
        db.movies.destroy({
            where:{
                id:req.params.id
            }
        })
    res.redirect("/movies");
    }
}

module.exports = moviesController;