//Create a constructor with 4 properties and 3 methods
function MakePizza(tops, crustS, crustT, saucy){
    this.toppings = tops;
    this.crustStyle = crustS;
    this.crustType = crustT;
    this.sauce = saucy
    this.burn = () => console.log('extra crispy')
    this.getETA= () => console.log('basically never')
    this.fling = () => console.log('yeeeeeeet')
}

let pizza = new MakePizza(['peppers', 'cheese', 'spinach'], 'thiiiiiiccc', 'cauliflour', 'vurry');