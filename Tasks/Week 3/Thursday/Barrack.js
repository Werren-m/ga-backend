class Barrack {
    constructor(slots){
        this.slots = slots || []
    }
    
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
        let group = {
            Knight: [],
            Archer: [],
            Spearman: []
        };
        for(let i=0; i<this.slots.length; i++){
            if(this.slots[i].type === "Knight"){
                group.Knight.push(this.slots[i].name)
            }else if(this.slots[i].type === "Archer"){
                group.Archer.push(this.slots[i].name)
            }else if(this.slots[i].type === "Spearman"){
                group.Spearman.push(this.slots[i].name)
            }else{
            }            
        }
        console.log(group);
    }
}

module.exports = Barrack;