const {Router} = require('express');
const router  = Router();

router.get('/bee_gees', function(req, res) {
    res.send("How deep is your love");
})

router.get('/beatles', function(req, res) {
    res.send("HEY JUDE");
})

module.exports = router;