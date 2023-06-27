// housekeeping 
const {Model , DataTypes} = require('sequelize');
const sequelize = require('/config/connection');
const { Product, ProductTag } = require('.');

// Create our production model
class ProductTag extends Model {}
Product.init(
    {
        // define columns
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productTag'
    }
);

module.exports = ProductTag;