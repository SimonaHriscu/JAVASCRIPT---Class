const o = {
    name: 'Andrea',
    age: 27,
    add: 'Berlin'
}

o.name;
o.age = 33;
o['add'] = 'see str';

console.log(Object.keys(o));

console.log(Object.values(o));

o.print = function(){
    console.log(`Hi ${o.name} you are very old ${o.age} and it's very nice to live in ${o.add}`)
}
o.print();

function userData(userName, userAge, userAdd){
    const obj = {
        name: userName,
        age: userAge,
        add: userAdd,
        output: function(){
            console.log(`Hi ${this.name} you are very old ${this.age} and it's very nice to live in ${o.add}`); //only for the old sytax
        }

    }
    return obj;
}
userData('Olga', 48, 'Seestr.')


//////////////////////////////

const person = {
    height: 177, 
    age: 34,
    city: 'Berlin'
}
console.log(Object.hasOwnProperty('sss'))
console.log(person.hasOwnProperty('age'));