const router = require('express').Router();
const apiRoutes = require('./api');

// use apiRoutes
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.send('<h1>The route is wrong!</h1>')
});

module.exports = router;