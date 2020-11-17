const {Router} = require('express');
const router = Router();

router.get('/', function(req, res) {
    res.render('index.ejs');
})

router.get('/student', function(req, res){
    res.send('Student Page');
})
router.get('/lecturer', function(req, res){
    res.send('Lecturer Page');
})

module.exports = router;