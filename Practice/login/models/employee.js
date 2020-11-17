'use strict';
const {encryptPwd} = require('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.Project)
    }
  };
  
  Employee.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Please input your username"
        },
        isEmail: {
          message: "Must be in email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please fill your password"
        },
        is: {
          args: /^(?=[a-zA-Z0-9]*[a-zA-Z])(?=[a-zA-Z0-9]*\d)[a-zA-Z0-9]*$/i,
          msg: "Please enter alphanumeric password"
        }, 
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name must not be empty, thanks"
        }
      }
    }
  }, {
      hooks : {
        beforeCreate(employee){
          employee.password = encryptPwd(employee.password)
        }
      },
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};