//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(color,make,model,price){
        this.color = color;
        this.make = make;
        this.model = model;
        this.price = price;
    }
    makeEspresso(){
        console.log("drip drip")
    }
    packBeans(){
        console.log('packit UP')
    }
    clean(){
        console.log("sparkly!")
    }
}

let gaggia = new EspressoMachine('black','gaggia','classic pro', 500);
