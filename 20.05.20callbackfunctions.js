// callbacks one more time
// let's make hot chocolate

// function prepareHotChocolate(callback) {
//     // first step
//     setTimeout(() => {
//       let milk = "boiled";
//       // one milk boiled start next step
//       callback(milk, callback2);
//     }, 2000);
//   }
  
//   function callback(milk, callback2) {
//     if (milk == "boiled") {
//       let chocolate = "added";
//       // one chocolate boiled start next step
//       callback2(chocolate, callback3);
//     }
//   }
//   function callback2(chocolate, callback3) {
//     if (chocolate == "added") {
//       let marshmallow = "added";
//       // one marshmallow boiled start next step
//       callback3(marshmallow);
//     }
//   }
  
//   function callback3(marshmallow) {
//     if (marshmallow == "added") {
//       console.log("Cool your drink is ready");
//     }
//   }
  
//   // calling the function
  
//   prepareHotChocolate(callback);


function milkCheck(response) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (response == "heated") {
          resolve("your milk is hot now add chocolate");
        }
      }, 3000);
    });
  }
  function chocolateCheck(response) {
    return new Promise((resolve) => {
      resolve(` ${response} now add marshmallow`);
    });
  }
  function marshmallowCheck(response) {
    return new Promise((resolve) => {
      resolve(` ${response} now your drink is ready`);
    });
  }
  async function prepareHotCocoa() {
    const step1 = await milkCheck("heated");
    console.log(step1);
    const step2 = await chocolateCheck(step1);
    console.log(step2);
    const step3 = await marshmallowCheck(step2);
    console.log(step3);
  }
  prepareHotCocoa();

//   let checkPromise = new Promise((resolve, reject) => {
//     let x = true;
//     if (x) {
//       resolve("your drink is ready");
//     } else {
//       reject("sorry, your drink is not ready");
//     }
//   });
  
//   checkPromise
//     .then((message) => {
//       console.log(`great! ${message}`);
//     })
//     .catch((message) => {
//       console.log(`OH no,  ${message}`);
//     });

//     // Promisify setTimeout
//   function delay(ms) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, ms);
//     });
//   }
  
//   let ms = 2000;
//   delay(ms);
  