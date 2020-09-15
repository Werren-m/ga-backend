const Product = require('../model/Product.js');
const View = require('../view/View.js');

class ProductController{
    static list(){
        const list = Product.list();
        View.list(list);
    }
    static add(params){
        const add = Product.add(params);
        // View.list(list);
    }
    static delete(){
        const list = Product.delete();
        // View.list(list);
    }
    static update(){
        const list = Product.update();
        // View.list(list);
    }
    static message(msg){
        View.message(msg);
    }
}

module.exports = ProductController;