const print = (x) => {
    if(x){
        console.log(x)
    }else {
        console.log("Print works")
    }
}
const scrolls= [
    {
        name : "Scroll of protections",
        power : 150,
        type : "Defense"
    }
]
module.exports = {
    print, scrolls 
};