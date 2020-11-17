const {Employee} = require('../models');

class EmployeeController {
    static async login(req, res){
        
    }

    static async register(req, res){
        const {username,password} = req.body;        
    }
}



module.exports = EmployeeController;