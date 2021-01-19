module.exports=function(sequelize,dataTypes){
    let alias="user";

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
        },
        email:{
            type:dataTypes.STRING,
            
        },
        profile:{
            type:dataTypes.STRING,
            
        },
        
    }

    let config={
        tableName:"user",
        timestamps:false
    }
    
    let user= sequelize.define(alias, cols, config);

    return user;
}