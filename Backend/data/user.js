const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "users.json");

module.exports = {

    /*Trae todos los usuarios*/
    findAll() {
        const usersFileContent = fs.readFileSync(usersFilePath, "utf-8");
        const users = JSON.parse(usersFileContent);
        return users;
    },
    /*Guarda usuario*/
    saveProduct(user) {
        const users = this.findAll();
        users.push(user);
        const usersFileContent = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersFilePath, usersFileContent, "utf-8");
    },

    /*encontrar producto por id*/
    findById(id) {
        return this.findAll().find((p) => p.id == id);
    },
};