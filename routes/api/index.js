// housekeeping 
const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// router
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;