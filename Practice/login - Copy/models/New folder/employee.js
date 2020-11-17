'use strict';
const {
  Model
} = require('sequelize');
const { Hooks } = require('sequelize/types/lib/hooks');
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
          msg: "Please input your username"
        },
        isEmail: {
          msg: "Must be in email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please fill your password"
        },
        isAlphanumeric: {
          msg: "Please use alphanumeric characters only"
        },
        len:[8,12]
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
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};