function add (x,y){
    return x+y;
}
add(5,4);
const sum = (x,y)=>{  ///it must be const!!!!
    return x+y;
};
sum(5,5);

const names = ['Ali','Olga', 'Nancy','Hadi'];
const newArr = names.map((name, index) => name[0] == "O");   // a function that has another function in its parameters
                                                             //it creates another array
                                                             //first one is the name, second is the index
console.log(newArr);



names.forEach((name , index) => console.log(name+ " index num = " + index)); //ES6


for (let i = 0; i< names.length; i++){                                      //OLD SCHOOL
    console.log(names[i] + " index num = " + i)
}
const numArr = [1,3,4,6,7];
const reducer = (acc,cur) => acc + cur; // acc = 0 cur=1  // cur = 100, atunci numaratoarea incepe cu 100;
console.log(numArr.reduce(reducer));

//Call stack

function first(callback){
    return callback;
}
function callback(callTwo){
    return callTwo;
}
function callTwo(){
    return "Hi";

}
console.log(first(callback(callTwo())));


//our bff

function display(str){
    console.log(str);
}
const print = str => console.log(str);

function yellow(val, val2){
    let x = 100;
    let y = 200;
    console.log(x/y + val + val2);
}
yellow(2,3);




//OLD SCHOOL
const AliPets = ['Dina', 'Lina', 'Crina'];
function pink(name, age, array){
    console.log(`Hi ${name}, you are very young ${age}, you have nice pets ${array}`);
}

pink('Ali', 23, AliPets);

//ES6

const Pets = ['Dina', 'Lina', 'Crina'];
const example = (name, age, array)=>{
    console.log(`Hi ${name}, you are very young ${age}, you have nice pets ${array}`);
}

pink('Ali', 23, Pets);

const greeting = (nam, add, age, pla)=>{
    age +=20;
    nam += ",";
    pla += "DE";
    add += ",";
    return `Hey ${nam} it is very nice to live in ${add} you are getting older too fast ${age}, in your old ${pla}`;
}
console.log(greeting("Ali", "xx str", 10, "Berlin"));



const add2 = () => { ///functions, array and objects MUST be const
    let x = 1120 * 3;
    console.log(x);
};
add2();
