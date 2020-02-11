const obj = [
  {
    name: "Ali",
    lastName: "see"
  },
  {
    name: "Olga",
    lastName: "xs",
    printOut: function() {
      console.log("Hi");
    }
  },
  {
    name: "Nancy",
    lastName: "lss"
  }
];

obj[1].printOut();
obj[1]["printOut"]();

//Clones vs. References
//primitive values(simple values = number, string, boolean)
let str = 'How are you?';
let newStr = str;//cloning
str = 'something else';
console.log(newStr);

let num = 220;
let newNum = num;
console.log(newNum);

//compound/ complex
//Object, array, function 
const names=['Ali','Olga','Mira', 'Nancy'];
let newArray = names;//reference (it changes the original array)
console.log(newArray);
newArray[1]='New';
console.log(names);

/////////////////////////////////////////////////////
const car ={
    name:'Ford',
    year:'2020',
    color:'red'
}
const newObject = car;
newObject.name = 'BMW';
console.log(car.name);

//Shallow copying using ...(spread operator)

let namesArr = ['Ali','Hadi'];
let newNamesArr = [...namesArr];
newNamesArr[0] = 'New Name';
console.log(newNamesArr);
console.log(namesArr);

//Shallow copying using .concat();

let newNames2 = [].concat(namesArr)

//Shallow copying using .slice();

let newNames3 = namesArr.slice(0);
console.log(newNames3);
//Shallow copying using .assign();
const newObj2 = Object.assign(car);
const newObj3 = {...car};
console.log(newObj3);

//infinity function call 

//DONT DO THIS 6000
// function one(){
//     two()
// }
// function two(){
//     one()
// }

//Recursion ---Depp cloning;

const factorial = function (num) {
   // console.log(num);
    if(num===1){
        return 1;
    }
    return num*factorial(num-1);

}

 console.log(factorial(8));

// function countdown(n) {
//     if (n <= 0) {
//       console.log(0);
//     } else {
//       console.log(n);
//       countdown(n - 1);
//     }
//   }
//   countdown(10);


  function countdown(n) {
    if (n < 0) {
      return false;
    }
    console.log(n);
    countdown(n - 1);
  }
  countdown(5);
//deep copy using recursion 

function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map(key => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == "array") {
    return obj.map(deepCopy);
  }
  return obj;
}
const newObj = { 1: "hi", 2: "how are you", fun: () => console.log("Hi") };
const superNewObj = deepCopy(newObj);
console.log(superNewObj);

///cool console 

console.table(newObj3);




//console.table();

