// let arr = [];

// // Objects
// // keys, properties : value
// const o = {
//   1: "Hadi",
//   2: "Ali",
//   3: "Olga"
// };
// const obj = {
//   name: "Nancy",
//   lastName: "saaaa",
//   age: 44,
//   add: "xxx str"
// };
// // old school
// let aliName = "Ali";
// let aliAdd = "xxx str";
// let aliAge = 22;
// let aliLastName = "something";
// // const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// const object = {
//   color: "Red",
//   size: "big",
//   year: 1990,
//   arr: [1, 3, 4, 5, 67]
// };
// // Accessing properties with bracket notation
// const car = {};
// console.log(car);
// car["name"] = "Ford";
// console.log(car);
// car["year"] = 2020;
// console.log(car);

// // Accessing properties with dot notation
// car.age = 22;
// console.log(car);
// car.age = 44;
// car.fa = "hhh";
// console.log(car.name);
// console.log(car["name"]);
// const save = new Object();
// const arr1 = new Array();
// console.log(save);
// console.log(car.name);
// console.log(car);
// // cool for 😎
// for (let prop in car) {
//   console.log(`car.${prop} : ${car[prop]} `);
// }
// const 1 = {
//   name: "Zain",
//   age: 20,
//   birthYear: 2000,
//   gender: "Male",
//   hight: "170",
//   print: function() {
//     console.log(` this user ${person.name} his born in ${person.birthYear} `);
//   },
//   old: () => {
//     return 2020 - person.birthYear;
//   }
// };

// // Object.keys
// console.log(Object.keys(person));
// // Object.values
// console.log(Object.values(person));

// // Object.entries()
// for (let [key, value] of Object.entries(person)) {
//   console.log(`${key} : ${value} `);
// }
// // Methods
// person.print();
// console.log(person.old());
// // Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
// for (let prop in person) {
//   console.log(`person.${prop} : ${person[prop]} `);
// }

// // Object.assign
// const obj1 = { 1: 2, 2: 300 }; // kid
// const obj2 = { 1: 4, 3: 3224 }; // parents
// const totalObj = Object.assign({ name: "Nancy" }, obj1, obj2); // family
// console.log(totalObj);

// //Get Values. Create a function that returns an array of all values of an object’s properties.
// const getValues = object => {
//   return Object.values(object);
// };
// console.log(getValues(person));
// console.log(getValues(car));

// // Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// person.printOut = () => {
//   return ` Hi ${person.name}, you are very short ${person.hight}, and also tooo old ${person.birthYear} `;
// };
// console.log(person.printOut());

// //Object.defineProperty()
// Object.defineProperty(person, "birthDay", {
//   value: 20,
//   writable: false
// });
// person.birthDay = 30;
// console.log(person.birthDay);
// //Object.defineProperties()
// Object.defineProperties(person, {
//   p1: {
//     value: 33,
//     writable: true
//   },
//   p2: {
//     value: {},
//     writable: false
//   },
//   p3: {
//     value: "fffff",
//     writable: false
//   }
// });
// console.log(person.p3);
// console.log(Object.keys(person));

// Object Person. Create an object named person. Loop through the object and print both the property
// and value of the object.
console.log("Exercise 1:");
const person1 = { 1: "andreeea", 2: "simona" };
console.log(Object.keys(person1));
console.log(Object.values(person1));

for (let prop in person1) {
       console.log(`person1.${prop} : ${person1[prop]} `);
     }

console.log("Exercise 2:");
// Get Values. Create a function that returns an array of all values of an object’s properties.
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
};
console.log(Object.values(getObjectValues));

console.log("Exercise 3:");

//    Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
//   firstName: "Ali",
//   job: "painter",
//   age: 20,
//   city: "Berlin"
// }
// Example of Expected Output “Ali is a 20 year old  in Berlin”.

let person = {
    firstName: "Ali",
    job: "painter",
    age: 20,
    city: "Berlin"
};

person.printOut = () => {
      return ` ${person.firstName} is a ${person.age} year old living in  ${person.city}.`;
    };
    console.log(person.printOut());

    console.log("Exercise 4:");
   
   
//     List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]

let student = {
       name: "Mike", 
       class: "4A",
       course: "English"
 }
 console.log(Object.keys(student));




 const getValues = student => {
       return Object.keys(getValues);
     };
     console.log(Object.keys(getValues));
     //console.log(getValues(car));
