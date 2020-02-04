///Spread syntax...
let array = [1,3,455,6];
let copyArray = [...array];
console.log(copyArray);

function sum(...args){   // find the sum of the array
    let array = args ;
    let result = 0;
    for( let i = 0; i< array.length; i++){
        result += array[i];
    }
    return `the sum is ${result}`

}
console.log(sum(3,4,4,5,6,7,8,9,2,2));
console.log(sum(7,88,98,9))

function charArr(...args){ //how many elements the array has
    let array = args;
    return array.length;
}
console.log(charArr(3,4,4,5,6,7,8,9,2,2));

function nSidedShape(n) {
   // let array = 
   // ["circle","semi-circle","triangle","square","pentagon" ,"hexagon" ,"heptagon" ,"octagon" , "nonagon","decagon"];
    let result = "";
   for(let i = 0; i<=10; i++){
       result += i;
		return result;
	}
}

nSidedShape();



