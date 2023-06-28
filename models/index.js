// housekeeping 
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { BelongsTo } = require('sequelize');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});
console.log(Product);

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

// export model
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};