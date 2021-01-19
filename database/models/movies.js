module.exports=function(sequelize,dataTypes){
    let alias="movies";

    let cols= {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        title:{
            type:dataTypes.STRING,
            allowNull:false
        },
        release_date:{
            type:dataTypes.DATEONLY,
            
        },
        genre_id:{
            type:dataTypes.INTEGER,
            
        },
        
    }

    let config={
        tableName:"movies",
        timestamps:true,
        underscored:true
    }
    
    let movies= sequelize.define(alias, cols, config);

    movies.associate =function(models){
        movies.belongsTo(models.genres, {
            as:"genero",
            foreignKey:"genre_id"
        });
    }

    return movies;
}