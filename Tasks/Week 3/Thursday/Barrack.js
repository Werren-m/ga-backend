class Barrack {
    constructor(slots){
        this.slots = slots || []
    }
    group = {
        Knight: [],
        Archer: [],
        Spearman: []
    };
    recruit(army){
        this.slots.push(army);        
    }
    summon(){
        console.log(this.slots);                         
    }
    disband(name){
        for(let i=0; i<this.slots.length; i++){
            if(this.slots[i].name === name){
                this.slots.splice(i,1);
            }
        }        
    }
    groupUp(){
        for(let i=0; i<this.slots.length; i++){
            if(this.slots[i].type === "Knight"){
                this.group.Knight.push(this.slots[i].name)
            }else if(this.slots[i].type === "Archer"){
                this.group.Archer.push(this.slots[i].name)
            }else if(this.slots[i].type === "Spearman"){
                this.group.Spearman.push(this.slots[i].name)
            }else{
            }            
        }
        console.log(this.group);
    }
}

module.exports = Barrack;