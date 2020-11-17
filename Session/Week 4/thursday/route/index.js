const {Router} = require('express');
const router = Router();
const ProductPath = require('./product');

router.get('/', function(req, res) {
    res.render("index.ejs");
})

router.use('/singer', ProductPath);

module.exports = router;