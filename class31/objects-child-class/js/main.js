//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name;
    }
    get name() {this._name;}
    speak(){
        console.log(`*animal noises* from ${this_name}`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    get breed(){return this._breed}
    speak(){
        console.log('woof woof')
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    get breed(){return this._breed}
    speak(){
        console.log('meeeeeeoooooow')
    }
}
