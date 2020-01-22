function sum(x,y){ ///parameters
    let result =  x+y; //with return i push the result outside the function;s   function  declaration(what it will do)
    return result;
}
let fun = sum(2,4); //function call
console.log(fun);

function div(x,y){
    return x/y;
}
function age (x){
    if (x==30){
        return "You are cool";
    }else{
        return "You are nice";
    }
}
console.log(age(20));

const numbers1 = [1,2,3,4,5,6,10,45,66];
const numbers2 = [14,442,53,664,5,6,10,45,66];
function arrBig(array){
    let result = array.filter(num => num >=15);
    return result;
}
arrBig(numbers1);
console.log(arrBig(numbers1));
console.log(arrBig(numbers2));


function fourArrChart(array){
    let result = [];
    for(let i =0; i < array.length; i++){
        if(array[i].length == 4){
            result.push(array[i]);
        }

    }
    return result;
}
function Ochr(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i][0] === 'O'){
            result.push(array[i]);
        }
    }
    return result;
}
const names2 = ['Ali','Hadi','Nancy','Olga'];
console.log(fourArrChart(names2));
console.log(Ochr(names2));

const monthNames = [
'January', 
'February', 
'March', 
'April', 
'May', 
'June', 
'July',
'August', 
'September', 
'October', 
'November',
'December'
];
function nameOfThatMonth(num){
    switch(num){
        case 1:
            result = monthNames[0];
            break;
        case 2:
            result = monthNames[1];
            break;
        case 3:
            result = monthNames[2];
            break;
        case 4:
            result = monthNames[3];
            break;
        case 5:
            result = monthNames[4];
            break;
        case 6:
            result = monthNames[5];
            break;
        case 7:
            result = monthNames[6];
            break;
        case 8:
            result = monthNames[7];
            break;
        case 9:
            result = monthNames[8];
            break;
        case 10:
            result = monthNames[9];
            break;
        case 11:
            result = monthNames[10];
            break;
        case 12:
            result = monthNames[11];
            break;
        default:
            result = "This is not month";

    }
    return result;

}

console.log(nameOfThatMonth(100));
console.log(nameOfThatMonth(2));
console.log(nameOfThatMonth(22));


  function numToMonth(num) {  
      return (months[num-1])
    }  
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log(numToMonth(11));

    

   

    



    // function reversedArray(arr){
    //     let newArray = [];
    //     let strToArr = "";
    //     let str = "";
    //     let revStr = "";
    //     for(let i=0; i<arr.length;  i++){
    //         str = arr[i];
    //         strToArr =  str.split("");
    //         strToArr.reverse();
    //         revStr = strToArr.join("");
    //         newArray.push(revStr);
            
    //     }
    //     return newArray;
    // }


    function reversedArray(arr){
        let newArray = [];
        let str = "";
        for(let i=0; i<arr.length;  i++){
            str = arr[i]
            .split("")
            .reverse()
            .join("")
            newArray.push(str);
            
        }
        return newArray;
    }
    newStr = ["dogs", "horses", "dolphins"];
    console.log(newStr);
    console.log(reversedArray(newStr));