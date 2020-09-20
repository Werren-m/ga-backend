const Product = require('../model/Product');
const View = require('../view/View');


class ProductController{
    static list(){
        // const list = Product.list();
        // View.list(list); 
        Product.list((err, data) => {
            if(err){
                View.error(err);
            }
            else{
                View.list(data);
            }
        })      
    }
    static help(){
        View.help();
    }
    static add(param){
        Product.add(param, (err,data) =>{
            if(err){
                View.err(err);
            }else{
                View.message(data);
            }
        })
    }
    static update(param){
        Product.update(param, (err,data) =>{
            if(err){
                View.error(err);
            }else{
                View.message(data);
            }
        })
    }
    static delete(id){
        Product.delete(id, (err,data) => {
            if(err){
                View.err(err);
            }else{
                View.message(data);
            }
        })
    }
    static complete(id){
        // const complete = Product.complete(id);
        // View.message(complete); 
        Product.complete(id,(err,data) => {
            if(err){
                View.error(err);
            }else{
                View.message(data);
            }
        });

    }
    static uncomplete(id){      
        // const uncomplete = Product.uncomplete(id);
        // View.message(uncomplete);
        Product.uncomplete(id, (err, data) => {
            if(err){
                View.error(err);
            }else{
                View.message(data);
            }
        })
    }
}

module.exports = ProductController;