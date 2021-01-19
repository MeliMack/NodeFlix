const fs = require('fs');
const path = require('path');

let db = require ("../database/models");



let seriesController = {
        
    crear: function(req,res){
        db.genres.findAll()
        .then(function(genres){
            return res.render("formParaCrearSeries", {genres:genres});
        })
    },

    guardado:function(req,res){
        db.series.create({
            title:req.body.title,
            release_date:req.body.release_date,
            genre_id:req.body.genres
        });
        res.redirect("/series");
    },
    listado:function(req,res){
        db.series.findAll()
        .then(function(series){
            res.render("todasLasSeries", {series:series})
        })
    },
    detalle:function(req,res){
        db.series.findByPk(req.params.id,{
            include:[{association:"genres"}]
        })
        .then(function(series){
            res.render("detalleSeries",{series:series});
        })
    },
    editar:function(req,res){
        //Pedidos asincronicos de pelicula y genero
        let pedidoSeries=db.series.findByPk(req.params.id)
        let pedidoGenero=db.genres.findAll();
//el then se va a ejecutar cuando las dos promesas se hayan cumplido
        Promise.all([pedidoSeries,pedidoGenero])
            .then(function([series,genres]){  
                res.render("editarSeries",{series:series,genres:genres})
        })
    },
    actualizar:function(req,res){
        db.series.update({
            title:req.body.title,
            release_date:req.body.release_date,
            genre_id:req.body.genre_id
        },{
            where:{
                id: req.params.id
            }
        });
        res.redirect("/series/"+ req.params.id);
    },
    borrar:function(req,res){
        db.series.destroy({
            where:{
                id:req.params.id
            }
        })
    res.redirect("/series");
    }
}

module.exports = seriesController;