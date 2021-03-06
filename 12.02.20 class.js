//Destructuring objects as function parameters
function fun (num,obj){
console.log(num);
let firstName = obj.name;
console.log(firstName);
}

fun(22,{name:'Ali'});


const userData = {
    firstName: 'Hadi',
    lastName: 'Nsreeny',
    get fullName(){ //we can write without function and : get printOut() = 
        //this is getter method
        console.log(`${this.firstName} ${this.lastName}`)
    },
    set fullName(str){
        let arr = str.split(" ");
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}
//getter
userData.fullName;
// userData.firstName = 'Ali';
// userData.lastName = 'XXX'
//setter
userData.fullName = 'Ali XXX'
userData.fullName; //getting new data

//constructor()

function Person(name, age, activities){
    this.name = name;
    this.age = age;
    this.activities = activities;
}
let ali = new Person('Ali', 22, ['party', 'dance']);
console.log(ali);

// const obj = new Object;   //how to create new classes , works with obj, arrays, date
// console.log(obj);

function User(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.printOut = function(){
        return (`${this.name} ${this.lastName}`)
    }
}

let userName = new User('Simona', 'Hriscu');
console.log(userName.printOut());

//CLASSES

// we use class to create one or more objects, you can't use it for instance in you application but it will be like a  
//for a newer objects if you will.
// the class will have instances properly and can have instances method, ideally we use the properties in the method 
//to achieve a task.
// the class will have also a constructor, this bad boy will run only ones when the object being created, 
//we use constructor function to setup the object
//  class declaration creates a new class with a name that you give, you would  use prototype-based inheritance.
//this references an empty class
class Animals{
    constructor(_kind,_hometown){ //setting up the constructor;
        this.kind = _kind;
        this.hometown = _hometown;
    }
    display(){
        console.log(`It is a very cute ${this.kind}, and lives in ${this.hometown}`)
    }
}
let casper = new Animals('Dog', 'LA');
casper.display();
let sofi = new Animals('cat', 'Berlin');
const lucky = new Animals('Fish', 'Berlin');
lucky.display(); //when we have console.log in the method we do not need to use it again for callback.
sofi.kind = 'Bird';
class Color{
    constructor(){
        this.name = '';
        this.age = 0;
        this.birthDay = 0;
    }

}
const red = new Color();
red.name = 'red';
red.age = 1237;
console.log(red);
const object = new Object();


//extends and super


class Person1{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;

    }
    display(){
        console.log(`Hey ${this.name} I am a parent class`);
    }
}

class Kid extends Person1{ //we link it to the parent class
    constructor(_name, _age, _height){
        super(_name,_age);
        this.height = _height

    }
    show(){
        return `${this.name} is ${this.age} years old I am a child class`;
    }
}

let zain = new Kid('Zain', 10);
zain.display();
console.log(zain.show());
const nancy = new Kid('Nancy', 20)
console.log(nancy.show());
zain.increment =function (){
    console.log('Cool');
}

let names = ['Ali', 'Olga', 'Nancy' , 'Hadi'];
let result;
//Array.find(); --will give us only one result;
result = names.find(name => name.length === 3)
console.log(result)
//Array.filter(); --> will come back with an array
result = names.filter(name => name.length > 3); 
console.log(result)

//Array map ---> returns string

names.map(x=> console.log(x));


let letters = ['a','c','d','b','e'];
let numbers = [2,4,6,7,8];
//Array.reduce()
// acc-the BhxBrowser;
// cur - the current value // after it you write the index of start// if you do not write one it starts with 0
result = numbers.reduce((acc,cur) => acc + cur) / numbers.length;
console.log(result);
//Array.sort(); //it changes the original array

letters.sort();
console.log(letters);
names.sort();
console.log(names);



