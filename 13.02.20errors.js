// 3 types of ERRORS
// `try { ... } catch (e) { ... }`
let userAge = 25;
if (userAge == 25) {
  console.log("something else");
}
console.log("Hi");
let userName = "";
// try {
//   console.log("Hi this is trying phase");
//   // cool();
//   //if (userName == "") throw " Sorry something went wrong ";
//   //if there is an error this part will never run
//   console.log("2nd phase");
// } catch (err) {
//   console.log("this error is" + err);
// } finally{
//     userName = 'xxx'
//     console.log('this will always run ')
// }

function display(){
    console.log('HI this is a cool function ')
}
for(let i=0; i<=8; i++){display()};

(function manyTimeCalledFunction(num){
    display();
    if(num > 1) manyTimeCalledFunction(num-1);
})(8)

function print(){
    console.log('Hi I am Js')
}
const timePrint = setTimeout(print, 5000)


const timerDisplay = setTimeout(() => console.log('You are so cool for having waited'), 5000);
clearTimeout(timerDisplay);
