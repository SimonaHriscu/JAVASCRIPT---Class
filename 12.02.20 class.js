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

// we use class to create one or more objects, you can't use it instance in you application but it will be like a  
//for a newer objects if you will.
// the class will have instances properly and can have instances method, ideally we use the properties in the method 
//to achieve a task.
// the class will have also a constructor, this bad boy will run only ones when the object being created, 
//we use constructor function to setup the object
//  class declaration creates a new class with a name that you give, you would  use prototype-based inheritance.

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
console.log(sofi.kind);