/*

//Loop case no.1:

let y = 1;
let result = 1;
while(y <= 10){
    result = y * 9
    console.log(`${y} * 9 = ${result}`);
    y++;
}

let count = 100;

while(count >= 50){
    console.log(`this number is ${count}`);
    count--;
}
//while will never go inside the loop;

//Loop case no.2:

let a = 3;
do{
    console.log(a);
    a++;
} while (a <= 100);
//do will do at least 1 round and then will do the condition;

let zara = 100;
do{
    console.log(`this is ${zara} on the line`);
    zara --;
}while(zara >= 0);

//Loop case no.3:
//declaring, condition , increment/decrement
for( let i = 0; i <= 10; i++) { //i=...
    console.log(i);
}


for(let i = 0; i<=10; i++){
    if(i%2 ===0){
    console.log(i);
}
}*/
// let boxy = '';
// for(let i = 100; i<1000;) {
//     i += 100;
//     boxy+= i;
// }
// console.log(boxy);
/*
for (let i=0; i<=100; i++){
    if (i == 30){
        break;
    }
    console.log(i);
}
let xx = false;
for(let w = 0; w <=100; w++){
    if(xx){
        console.log('That is it');
        break; // stop after the first condition is met;
    }
    if(w ==20){
        xx = true;
    }
}
let result2 = 0;
for (let i=1; i<=10; i++){
    for(let j = 1; j<=10; j++){
    result2 = i * j;
    console.log(`${i} * ${j} = ${result2}`); // every 10 times j, i will move once.
}
}

let str = "This is a log text";
for ( let i = 0; i <= str.length-1; i++ ){
    console.log(`The ${i} letter is ${str[i]}`);
}
*/

/*
Addition. Write a program to add up the numbers 1 to 20.
There are i bottles of beer on the wall. Write a program that will output, 
“There is one bottle of beer on the wall.” “There are two bottles of beer on the wall” up 
until there are five bottles.
The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, 
it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
*/
/*
console.log("Exercise 1:"); /// DRY(Don't repeat yourself);

let sum = 0;
for(i = 1; i <= 20; i++){
    sum = sum + i;
}
console.log('sum', sum); ///!!!!!!! console.log in afara loop altfel imi apar toate iteratiile.

console.log("Exercise 2:");

for(i =1 ; i<=5; i++){
    if(i==1){
     console.log(`There is  ${i} bottle of beer on the wall`);
    } else {console.log(`There are  ${i} bottles of beer on the wall`);
    }
}

console.log("Exercise 3:");
for(i =0 ; i<=20; i++){
    if(i %2 === 0){
        console.log(`number ${i}  is even`);
    } else{
        console.log(`number ${i}  is odd`);
    }
}


let box = "";
for(let i = 0 ; i < 4; i++){
    box += 'YYYY\n';
}
console.log(box);
// \n ?? */

// 1, 2, 4, 8... 128
// 0, 2, 4... 10
// 3, 6, 9 ... 15
// 9, 8, 7... 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

console.log("Exercise a:");

let box = "";
for(let i = 1; i<=4; i++){
    box+= 'T';
    console.log(box);
}

console.log("Exercise b:");

let symbol = '@';

for(let i = 0; i<4; i++){
    let toPrint = '';
     for(let j= 0; j < 4-i; j++){
        toPrint += symbol;
    }
    console.log(toPrint);
}

for(let i = 0; i<4; i++){
     for(let j= 0; j < i; j++){
         console.log('@');}

// let symbol2 = '@';
// for(let i = 0; i<4; i++){
//     console.log(symbol2);}

// let myString = "@@@@";
// for (let i = myString.length; i > 0; i--) {
//   console.log(myString.substr(0, i));
// }    Manareala!!!!!



// console.log("@@@@\n@@@\n@@\n@")


/*
console.log("Exercise 1:");
// 1, 2, 4, 8... 128


for(let i = 1; i<=128; ){ //when i-- sau i* you put in the second line
    console.log(i);
    i*=2;

}

console.log("Exercise 2:");
// 0, 2, 4... 10

for(let i = 0; i<=10; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

console.log("Exercise 3:");
// 3, 6, 9 ... 15

for(i = 3; i<=15; i++){
    if(i%3 == 0){
        console.log(i);
    }
}
console.log("Exercise 4:");
//9, 8, 7... 0
for(i = 9; i>=0; i--){
    console.log(i);
}
console.log("Exercise 5:");
//1 1 1 2 2 2 3 3 3 4 4 4


for(let i = 1; i<=4; i++){
    for(let m= 1; m<=4; m++)
    console.log(i);
}

console.log("Exercise 6:");
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for(let i = 0; i<=4; i++){
    for(let m= 0; m<=4; m++)
    console.log(m);
}
*/



// let arrSt = [];
// for(let i = 0; i<=10; i++){
//     arrSt[i] = 2 + i; /// arrStr[0] = 2+0; i se schimba la fiecare iteratie, deci pentru fiecare [i]*1,2,3 rezultatul va fi 1+2; 
//     console.log(arrSt);
// }
