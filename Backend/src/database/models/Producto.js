
module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        nombre: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(6,2),
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.STRING(11),
           allowNull: false,
           references: {
            model: 'categorias',
            key: 'id'
        }
            
        },
        imagen: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        talle: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
         
    };
    let config = {
        timestamps: false,
       
    }
    const Producto = sequelize.define(alias, cols, config); 


    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'categoria_id',
            onDelete: 'CASCADE',
          }),
        Producto.belongsToMany(models.User, {
             through: models.Productocarrito,
             foreignKey: 'productos_id', // clave foránea de Producto en la tabla Productocarrito
             otherKey: 'user_id', // clave foránea de User en la tabla Productocarrito
        })
    }

    return Producto
}
