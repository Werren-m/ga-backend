const bcrypt = require('bcrypt');
const saltRound = Number(process.env.SALT_ROUND);

const encryptPwd = (password) => {
    return bcrypt.hashSync(password,saltRound);
}

const decryptPwd = (password, employeePwd) => {
    return bcrypt.compareSync(password,employeePwd);
}

module.exports = {
    encryptPwd, decryptPwd
}