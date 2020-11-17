const { Employee } = require("../models");
const bcrypt = require("bcrypt");
const { decryptPwd } = require("../helpers/bcrypt");

const multer = require("multer");
const upload = multer();

class EmployeeController {
	static async list(req, res) {
		try {
			const employee = await Employee.findAll();
			res.status(200).json(employee);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async login(req, res) {
		const { username, password } = req.body;
		try {
			const employee = await Employee.findOne({
				where: { username },
			});
			if (employee) {
				if (decryptPwd(password, employee.password)) {
					res.status(200).json(employee);
				} else {
					res.status(404).json({ msg: "Wrong password" });
				}
			} else {
				res.status(404).json({ msg: "Username not found" });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static async register(req, res) {
        
		const username = req.body.username;
		const password = req.body.password;

		try {
			// const pwdBcrypt = bcrypt.hashSync(password,1);
			const employee = await Employee.create({
				username,
				password,
			});
			res.status(201).json(employee);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}

module.exports = EmployeeController;
