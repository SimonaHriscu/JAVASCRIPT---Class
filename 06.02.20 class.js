function newUser(fName, lName, age, hope) {
  //outer function
  let result = {
    firstName: fName,
    lastName: lName,
    old: age,
    funThingsToDo: hope,
    printOut: function() {
      //inner function as method
      return `Hey ${this.firstName}, you are very old ${this.old}`;
    }
  };
  //this is inner function call
  return result;
}
//this is function call
let x = newUser("Ali", "Straight", 22, "dance");
console.log(x.printOut());
console.log(x.old);

//method inside of an object inside of a function

let arr = [
  { 1: "Ali", age: 22 },
  { 1: "Hadi", age: 33 },
  {
    1: "Olga",
    sum: function() {
      return "Hi";
    }
  }
];

console.log(arr[2].sum());
console.log(arr[2]["sum"]());

///reverse keys and values

let person = {
  name: "Ali",
  job: "teacher"
};

function keysToValues(obj) {
  const keysAndValues = Object.entries(obj);
  console.log(keysAndValues);
  let reversedArr = [];

  for (let i = 0; i < keysAndValues.length; i++) {
    reversedArr.push(keysAndValues[i].reverse());
  }
  return Object.fromEntries(reversedArr);
}
keysToValues(person);



