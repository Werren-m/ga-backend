const {Router} = require('express');
const router = Router();
const EmployeeController = require('../controllers/employee');


router.get('/',EmployeeController.list)
router.post('/login',EmployeeController.login);
router.post('/register',EmployeeController.register);


module.exports = router;