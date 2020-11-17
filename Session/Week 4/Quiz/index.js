let Meat = require('./meat.js');
let Campfire = require('./campfire.js');

let beef1 = new Meat.Beef(1,"beef",300);
let beef2 = new Meat.Beef(2,"beef",300);
let mutton1 = new Meat.Mutton(3,"mutton",300);
let mutton2 = new Meat.Mutton(4,"mutton",300);
let camp = new Campfire;

camp.stock(beef1);
camp.stock(beef2);
camp.stock(mutton1);
camp.stock(mutton2);

camp.grill(beef1);
camp.grill(beef2);
camp.grill(mutton1);
camp.grill(mutton2);

camp.eat(beef1);
camp.eat(beef2);
camp.eat(mutton1);
camp.eat(mutton2);

console.log(camp.fullness);