const {Router} = require('express');
const router = Router();

const EmployeeRoutes = require('./employee');
// const EmployeeProjectRoutes = require('');
// const ProjectRoutes = require('');

router.get('/', (req, res) => {
    // res.render('index.ejs');
    res.status(200).json({
        msg: "This is homepage"
    });
})

router.use(EmployeeRoutes);
// router.use(EmployeeProjectRoutes);
// router.use(ProjectRoutes);

module.exports = router;