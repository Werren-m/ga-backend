const Army = require('./Army.js');
const Barrack = require('./Barrack.js')

let knight1 = new Army.Knight("Jave","Knight",3);
let knight2 = new Army.Knight("Naru","Knight",4);
let archer1 = new Army.Archer("Tey","Archer",1);
let archer2 = new Army.Archer("Luffy","Archer",2);
let spearman1 = new Army.Spearman("Nitemare","Spearman",5);

let barrack1 = new Barrack();
barrack1.recruit(knight1);

barrack1.recruit(knight2);
barrack1.recruit(archer1);
barrack1.recruit(archer2);
barrack1.recruit(spearman1);

barrack1.disband("Jave");

barrack1.summon();
barrack1.groupUp();

// console.log(barrack1.slots);

// knight1.talk();
// knight2.talk();
// Archer1.talk();
// Archer2.talk();
// Spearman1.talk();