// housekeeping 
const {Model , DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


// initialize product model (table) by extending off Sequelize's Model class
class Product extends Model {}
// set up fields and rules for Product model
Product.init(
    {
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
    //   set up stock as integer, default value 10
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true
        }
      },
    // category id set up as foreign key
      category_id: {
        type: DataTypes.INTEGER,
        references : {
          model: 'category',
          key: 'id'
        }
      }
    },
    // configure metadata, including naming conventions
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product',
    }
  );

module.exports = Product;