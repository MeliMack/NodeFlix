module.exports=function(sequelize,dataTypes){
    let alias="series";

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
            type:dataTypes.DATE,
            
        },
        genre_id:{
            type:dataTypes.INTEGER,
            
        },
        
    }

    let config={
        tableName:"series",
        timestamps:false
    }
    
    let series= sequelize.define(alias, cols, config);

    series.associate =function(models){
        series.belongsTo(models.genres, {
            as:"genres",
            foreignKey:"genre_id"
        });
    }
    return series;
}