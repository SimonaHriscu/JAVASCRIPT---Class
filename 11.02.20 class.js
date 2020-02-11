//Nested Arrays

const arr = [
  [2, 3, 4, 5],
  [533, 53],
  [3, 45, 56, 67]
];
console.log(arr[2][2]);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([i, j, 44, 56]); ///pushing an array;
  }
}

arr.forEach(array => array.forEach(element => console.log(element))); //two methods, two ES6
// console.log(arrayNew)

let names = ["Ali", "Olga", "Nancy"];

names.forEach(name => console.log(name)); //just an explanation;
names.map(name => console.log(name)); //just an explanation; this will normally create another array;

let family = [
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
]; //OLDSCHOOL
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}

family.forEach(arr => arr.forEach(element => console.log(element))); //..the new way!

//for of
for (let innerArr of family) {
  for (let element of innerArr) {
    console.log(element);
  }
}

console.log('T-Shirt')
const tShirt = {
  color: "red",
  size: ["XS", "S", "M", "L", "XL"],
  countries: {
    name: ["China", "Germany"],
    capital: ["Beijing", "Berlin"],
    obj: {
      one: 3344,
      two: 5654,
      printOut: function() {
        console.log(this.one);
      }
    },
    display: function() {
      console.log(this.name);
    }
  },
  fabric: "cotton",
  method: function() {
    console.log(this.color);
  }
};
console.log(tShirt.color);
console.log(tShirt.size[3]);
console.log(tShirt.countries.name[1]);
console.log(tShirt.countries.capital[1]);
console.log(tShirt.countries.obj.one);
tShirt.method(); //inside tShirt
tShirt.countries.display();//inside Countries
tShirt.countries.obj.printOut();//inside obj

let newShortWay = tShirt.countries; //reference
newShortWay.display

//Nesting and accessing array in objects

let car = ['Ford', 'pink', 2020, 'engine', 'xs'];
// let carName = car[0];
// let carColor = car[1];
let [carName, carColor, carYear, ...rest] = car // spread operator
console.log(rest)

//Nesting and iterating over objects in arrays

const object = {
    firstName: 'Ali',
    old:22,
    country: 'Germany'
};

({firstName, old, country } = object);
console.log(country);


