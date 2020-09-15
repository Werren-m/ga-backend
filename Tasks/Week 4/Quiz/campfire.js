class Campfire{
    constructor(){
        this.container = [];
        this.fullness = {
            beefs: 0,
            muttons: 0
        }
    }

    stock(meat){
        this.container.push(meat);
    }

    grill(meat){
        let statusList = ["Rare","Medium","Well Done"];
        meat.status = statusList[Math.floor(Math.random() * statusList.length)];
    }

    // eat(steak){
    //     for(let i=0; i<this.container.length; i++){
    //         if(this.container[i].slot === steak){
    //             switch(this.container[i].type){
    //                 case "beef":
    //                     this.fullness.beefs += 1;
    //                     break;
                    
    //                 case "mutton":
    //                     this.fullness.muttons += 1;
    //                     break;
    //             }
    //             this.container.splice(i,1);
    //         }
    //     }
    // }

    eat(steak){
        for(let i=0; i<this.container.length; i++){
            if(this.container[i].slot === steak.slot){
                switch(this.container[i].type){
                    case "beef":
                        this.fullness.beefs += 1;
                        break;
                    
                    case "mutton":
                        this.fullness.muttons += 1;
                        break;
                }
                this.container.splice(i,1);
            }
        }
    }

    checkStock(){
        console.log(this.container);
    }
}

module.exports = Campfire;