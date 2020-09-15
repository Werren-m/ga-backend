const Product = require('../model/Product');
const View = require('../view/View');


class ProductController{
    static list(){
        const list = Product.list();
        View.list(list);       
    }
    static help(){
    }
    static add(param){
        const add = Product.add(param);
        View.message(add);
    }
    static update(param){
        const update = Product.update(param);
        View.message(update);
    }
    static delete(id){
        const del = Product.delete(id);
        View.message(del);
    }
    static complete(id){
        const complete = Product.complete(id);
        View.message(complete); 

    }
    static uncomplete(id){      
        const uncomplete = Product.uncomplete(id);
        View.message(uncomplete);
    }
}

module.exports = ProductController;