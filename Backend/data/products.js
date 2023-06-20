const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "productsDatos.json");

module.exports = {

    /*te trae todos los productos*/
    findAll() {
        const productsFileContent = fs.readFileSync(productsFilePath, "utf-8");
        const products = JSON.parse(productsFileContent);
        return products;
    },
    /*te guarda todos los productos*/
    saveProduct(product) {
        const products = this.findAll();
        products.push(product);
        const productsFileContent = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsFileContent, "utf-8");
    },
    /*encontrar producto por id*/
    findById(id) {
        return this.findAll().find((p) => p.id == id);
    },
};