const {Router} = require('express');
const router = Router();
const path = require('./sing');

router.get('/', function(req, res) {
    res.render('index.ejs');
});

router.use('/singer',path);



module.exports = router;