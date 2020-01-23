var x = 0;
let y = "3";
y = 3;
const q = 12;

//increment
let a = 8;
a++; // a=a+1 a+=1

//function <name>(parameters){.....}
function sum() {//variable has the value from outside the function used inside // it can be without parameters
let z = x+y;  //=local variable
return z; //local scope
} 

sum(2,3);
//console.log(z) undefined ! z is a local variable

//variables in function
function fun(){
    const num = 10;
    const num2 = 20;
    console.log(num + num2);
    console.log("hi");
    return `Hi the sum is ${num+num2} \n  I\'m \"`}

fun();

let string = 'This is a long text';
console.log(string[0]);

// const <function name>=(<parameters>)=>{...}
const div = (x,y) =>{
    const you = () =>{
        return 3;
    }
    return you();
};
console.log(div());

const names = ["Ali", "Olga", "Nancy"];

console.log(names.includes("Ali"));
console.log(names.indexOf("Ali"));
names.push("Zara"); //when we push we give a value
names.unshift("XX");// it needs a value
names.shift(); //will remove from the first index
names.pop(); //we do not have to give a value; removes the last value

console.log(names);

const arr1 = ["HI", "this", "is"];
const arr2 = ["me", "writing", "you"] ;

const total = arr1.concat(arr2);
total.push("You");

console.log(total.join(" "));

let newArr = names.filter(name => name.length == 3 || name.length ==4); //name is a parameter for anonymous function 
console.log(newArr);


let arrCall = names.find(name => name.length >=1);
console.log(arrCall);


const  str3 = "JavScript";
let newRevStr = str3
.split("")
.reverse()
.join("")
console.log(newRevStr)