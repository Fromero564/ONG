

module.exports = (sequelize,dataTypes)=>{
    let alias = "Categoria"
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
    
}
let config = {
    timestamps: false,
    tableName: 'categorias',
}
const Categoria = sequelize.define(alias, cols, config); 

Categoria.associate = function(models) {
    Categoria.hasMany(models.Producto, { 
        as: "productos",        
        foreignKey: "categoria_id",
        onDelete: 'CASCADE',
    })
}


    return Categoria
}