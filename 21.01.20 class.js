
//parameters is a variable used inside the function/ value comes outside of the function

// function diplay(str){
//     console.log(str);
// }
// display('Hadi');

//Array.isArray() //to check
const names=['Ali','Hadi','Olga','Nancy'];
let x=1;
console.log(Array.isArray(names));

//Array.includes()
console.log(names.includes('Hadi')); //show that exists or not
console.log(names.indexOf('Hadi')); //shows us the index

//Array.reverse // Reverse

let rev = names.reverse();
console.log(rev);

//Array.concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//Array.filter() // creates a new array

let result1 = names.filter(name =>name.length == 4) // callback function = calling another function ; ES6
console.log(result1);

//Array.find()   //only one result!! it is not a filter

let result2 = names.find(name => name[0] == 'A');
console.log(result2);

//Array.map()  // instead of "for"
const intArray = [2,3,5,6,8];
let result3 = intArray.map(x => x+1);
console.log(result3);



//EXERCISES:

//Reverse the string: “JavaScript”.

let string = "JavaScript";
let reverseString = "";

for(let i=string.length-1; i>=0; i--){
    reverseString = reverseString + string[i];
}
console.log(reverseString);

console.log("Bonus");
/*Write a program to reverse the string: "Hello World". */
let myString = "Hello World!";
let myArray = myString.split(""); // ["h","e","l","l","o", " ", "W", "o", "r", "l", "d"]
myArray.reverse(); // ['!', 'd', 'l', 'r','o', 'W', ' ', 'o','l', 'l', 'e', 'h']
let revString = myArray.join(""); // '!dlroW olleh'
console.log(revString);

// 1. Make an array of your siblings’ names or your favorite movie characters’ names.
let arr = ['Ovidiu', 'Andreea','Dani'];
console.log(arr);
// 2. Make an array of your parents’ names.
let arry = ['Natalia', 'Constantin'];
console.log(arry);
// 3. Combine these two arrays.
let totalArr = arr.concat(arry);
console.log(totalArr);
// 4. Add your pets’ names.
totalArr.push('Grivei');
totalArr.push('Lessie');
console.log(totalArr);
// 5. Reverse the order of the array.
let reverseArray = totalArr.reverse();
console.log(reverseArray);
// 6. Access one of your parents’ names.

console.log(reverseArray[2]);

let resultName = reverseArray.find(name => name[0] == 'C');
console.log(resultName);

// 7. Update the name of one of your parents.
console.log(reverseArray.includes('Constantin'));
console.log(reverseArray.indexOf('Constantin'));
reverseArray[2] = "Ion";
console.log(reverseArray);

