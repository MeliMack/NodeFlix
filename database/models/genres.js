module.exports=function(sequelize,dataTypes){
    let alias="genres";

    let cols= {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING,
            allowNull:false
        }
                
    }

    let config={
        tableName:"genres",
        timestamps:false
    }
    
    let genres= sequelize.define(alias, cols, config);

    genres.associate =function(models){
        genres.hasMany(models.movies, {
            as:"movies",
            foreignKey:"genre_id"
        });

        genres.hasMany(models.series, {
            as:"series",
            foreignKey:"genre_id"
            });
    }
    
    
    return genres;
}