/*let arrStr = ["hi", 'text', 'text']; //first way
console.log(arrStr);
let arrInt;


arrInt=[]; //2nd way
console.log(arrInt);
arrInt[0]=22;
arrInt[1]=22;
console.log(arrInt);

//Array(num) // to create array with new slots
let arrString = new Array();
let arrStr2 = Array('Hadi','Ali');
console.log(arrStr2);

//Array.of creating  array
let strArr = Array.of(3);
console.log(strArr);

//Accessing using square brackets:

arrInt[2] = 33;
console.log(arrInt);
arrInt.push(663);
arrInt.push(222); //pushed to the last element of the array;
arrInt.unshift(322);
console.log(arrInt);
console.log(typeof arrInt);

// finding Items;

var firstNameArr=["Ali", "Olga", "Hadi"];
console.log(firstNameArr.indexOf('Nancy'));



let arrStingName = [];
for(let i=0; i<=10; i++){
    arrStingName[i]=`Hadi ${i}`;
}
console.log(arrStingName);
let funArr=['😎','💪🏻','😊'];
console.log(funArr);
funArr.pop(); // the last one ;
console.log(funArr);

// .push (add a last element – nu scriem nimic inre paranteze)
// .pop( sterge ultimul element)
// .shift(delete first element – nu scriem nimic intre paranteze)
// .unshift(like push, adaugam 2 sau mai multe in primul element)
// .reverse (undo)
// .splice(are 2 argumente: 1-pozitia, 2-daca/cate elemente sterge, 3-elementul)

const lastName = ['Ali']; // with const we cannot change the array but we can change the index of the array;
lastName[0]='Nsreeny';
lastName[1]='Reeny';
console.log(lastName);

let names = ['simona','maria','ioana','dorel']; //array
let name = 'I like jam in the morning'; //string
console.log(names.length); //index of array
console.log(name.length); //index of string
//Array.slice()
console.log(names.slice());
console.log(names.splice(1,3));

//Array.split();
let stringToArray = name.split(' ');
console.log(stringToArray);

//Array.join

const arrayString = ['This', 'is', 'array', 'was', 'string'];
let stringToarr = arrayString.join(" ");
console.log(stringToarr);


*/

// 1. Declare a variable named “euroCities” and assign an array to the variable e.g. 
// [“Paris”, “London”, “Valletta”, “Prague”, “Rome”]. Declare another variable and assign the second 
// item of the array as a value.
// 2. Change the first item in the array to “Berlin”.
// 3. Print the length of the array “euroCities”.
// 4. Remove the last item of the array “euroCities”.
// 5. Use an array method to add “Budapest” to the euroCities array.
// 6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

/*
console.log('Exercise 1:')


let euroCities=["Paris", "London", "Valletta", "Prague", "Rome"];
let englishCity = euroCities[1];

console.log(euroCities);
console.log(englishCity);

console.log('Exercise 2:')

euroCities[0] = "Berlin";
console.log(euroCities);

console.log('Exercise 3:')

console.log(euroCities.length);

console.log('Exercise 4:')

euroCities.pop()
console.log(euroCities);

console.log('Exercise 5:')

euroCities.push("Budapest");
console.log(euroCities);

console.log('Exercise 6:')

let asianCities = ["Shanghai", "HongKong", "Tokyo", "Seoul", "Manila"];
console.log(asianCities);

console.log('Exercise 7:')
//7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let newArrow = asianCities.splice(1,3);
console.log(newArrow);

*/


// 1. SumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). 
// Bonus: Print to screen both the sum and the product of these numbers.
console.log("Exercise 1:")
let arr=[2,3,4,5,6];
let sum = 0;
let product = 1;
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
    product*=arr[i];
}
console.log(`Sum is: ${sum}`);
console.log(`Product is: ${product}`);


// 2. Hello Frien Create an array filled with your friends’ and family’s names. 
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
// Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
console.log("Exercise 2:")

let friends=['Andreea','Ovidiu','Dani','Natalia', 'Constantin'];
for(i=0; i<friends.length; i++){
    console.log("Hello "  + friends[i]+ "!");
}
for(i=0; i<friends.length; i++){
    console.log(friends[i] + ' is at index ' + friends.indexOf(friends[i])+' of my friends array.');
}


// 3. City Names. Create an array of city names. Loop through the array and add the city names to a string. 
// Example of expected output: “Berlin, Paris, Prague, Rome”.
console.log("Exercise 3:")

let cityNames=["Berlin", "Paris", "Prague", "Rome"];
let cityNamesStr="";
for(let i=0;i <cityNames.length; i++){
    cityNamesStr += cityNames[i];
    if(i===cityNames.length-1){
        cityNamesStr+= '.'
    }else {
        cityNamesStr += ", ";
    }
    }
    console.log(cityNamesStr);

// console.log(cityNames.join(", "));

// 4. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each 
// even integer. Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
console.log("Exercise 4:")
let arry=[2,3,4,5,6];
let newArry= [];
let int=0;


for(let i=0; i< arry.length; i++){
    int = arry[i];
    if(int%2===0){
    int--;
    arry.push(int);
}else{
    i++;
    arry.push(int);
}
}
console.log(arry)

// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
// 5 .Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
console.log("Exercise 5:");

names=["matt", "sara", "lara"]

for(var i = 0 ; i < names.length ; i++){
    names[i] = names[i].charAt(0).toUpperCase()+ names[i].substr(1);
}   
console.log(names)
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
names2=["samuel", "MARIA", "luke", "mary"]

for(var i = 0 ; i < names2.length ; i++){
    names2[i] = names2[i].toLowerCase();
    names2[i] = names2[i].charAt(0).toUpperCase()+ names2[i].substr(1);
}   
console.log(names2)

// [“cynthia”, “karen”, “jaNe”, “carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

