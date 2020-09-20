const Product = require('../model/Product');
const View = require('../view/View');


class ProductController{
    static list(){
        // const list = Product.list();
        // Product.list((err, data) => {
        //     if(err){
        //         throw err;
        //     }else{
        //         View.list(data);   
        //     }
        // })    
        const list = Product.list();
        View.message(list);
    }
    static help(){
        const help = Product.help();
        View.help(help);
    }
    static add(param){
        // const add = Product.add(param);
        Product.add(param,(err,data) =>{
            if(err){
                throw err;
            }else{
                View.message(add);
            }
        })
    }
    static update(param){
        // const update = Product.update(param);
        Product.update(param,(err,data) =>{
            if(err){
                throw err;
            }else{
                View.message(update);
            }
        })
    }
    static delete(id){
        // const del = Product.delete(id);
        Product.delete(id,(err,data) => {
            if(err){
                throw err;
            }else{
                View.message(del);
            }
        })
    }
    static complete(id){
        // const complete = Product.complete(id);
        Product.complete(id,(err,data) => {
            if(err){
                throw err;
            }else{
                View.message(complete); 
            }
        });
    }
    static uncomplete(id){      
        // const uncomplete = Product.uncomplete(id);
        Product.uncomplete(id,(err,data) => {
            if(err){
                throw err;
            }else{
                View.message(uncomplete);
            }
        });
    }
}

module.exports = ProductController;