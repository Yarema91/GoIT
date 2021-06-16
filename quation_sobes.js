// import { StrictMode } from "react";

// import { set } from "mongoose";

// //spread розпиляє
// var log =  function (a, b, c) {
// console.log(a,b,c); //spread rest operators
// }

// log(...['spread', 'rest', 'operators']);


// //rest  збирає
// var log = function(...test) {
//     console.log(test); //[ 1, 2, 3, 4, 5 ]
// }
// log(1,2,3,4,5);

// //round number
// const num = 5.544;
// console.log(Math.round(num)); //6

// //strict mode строгий режим
// "use strict";
// num = 7;
// console.log();

// //substring
// var anyString = 'Mozila';
// console.log(anyString.substring(0, 3)); //Moz

// //create aray & object
// const person = new Object();
// console.log(person);
// const person1= Object.create();

// var dgd= Array.from(); // створює новий масив
// Object.assign // конкатенує пустий обєкт

// //How to access value in the array
// //indexOf, по індексу через квадратні дужки

// let sum = [2, 5, 6];
// sum.reduse(acc + curr); //15

// // метод some хочаб один  & every кожен

//
// const obj = {
//     name: 'Tolia',
//     age: 29

// }

// console.log(obj.age);
// console.log(obj['name']);
// console.log(Object.values(obj)); // або значення або ключі
// console.log(Object.entries(obj)); // і значення і ключі

// Object.assign() //add props thits object



// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var removed = arr.splice(2,2);
// console.log(removed);

// var mas = Array.of(12, 5, 1, "JS");
// // mas.pop();
// // mas.shift();
// mas.slice(0, 2);
// console.log(mas);//[  5, 1 ]

// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };


// // using spread ...
// let p1 = {
//     ...person
// };

// // using  Object.assign() method
// let p2 = Object.assign({}, person);
// console.log('p2', p2);

// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));
// console.log('p3',p3);

// //spread
// const obj = {
//     name: 'Misha',
//     age: 29,
//     reiting: 12424
// };

// const arr = ['yarema', 'misha'];
// console.log( arr1 = Oblect.entries(arr));

// console.log(...arr);
// console.log({...obj});

// // arr['name'] = null;
// let  newObl = JSON.parse(JSON.stringify(obj));
// console.log(newObj);
// console.log(arr);

// JSON. stringify перетворює з обєкта в json,  parse навпаки

// var mySet = new Set();
// console.log(mySet.add(4));

// // var text = 'india';
// var arr = ['yarema', 'misha'];
// var mySet = new set(arr);
// console.log(mySet)


// let yarema = {name: 'Yarema'};
// let viz= new Map();
// viz.set(yarema, 434)
// console.log(viz.get(yarema));

// //SET
// let set = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set) alert(value);

// // то же самое с forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });

// //lose context

// ми можемо взяти метод showData () з об'єкта user, який ми зробили в попередньому прикладі
// Нижче ми зв'яжемо метод user.showData з об'єктом cars          
// var cars = {
//     data: [
//         { name: "Honda Accord", age: 14 },
//         { name: "Tesla Model S", age: 2 }
//     ]

// }

// cars.showData = user.showData.bind(cars);
// cars.showData(); // Honda Accord 14 

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(fullName) {
//         [this.firstName, this.lastName] = fullName.split(' ');∫
//     },
// }

// Контекст - це силка на обєкт в момент виклику
// const user = {
//         firstName: 'John',
//         lastName: 'Doe',
//         getfullName() {
//             return (`${this.firstName} ${this.lastName}`);
//         }
//     }

// const ggt = user.getfullName.bind(user); //John Doe
// const ggt = user.getfullName; //underfined

// console.log(ggt());

// const user1 = {
//     name: 'Mon',
  
//    sayHi( age) {
//        console.log(`${this.name}, ${age}`);
//     }
// };
// const ghh= user1.sayHi;
// ghh.apply(user1,[12]); //Mon, 12


 //class constructor
class Animal {
    constructor(name) {
        this.name = name;}
    speak() {
        console.log(`${this.name} видає звук`);

    }
}
let d = new Animal('Misha')

// d.speak(); //конструктор супер класу передає параметр наме

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} повторяє`);

    }

}

let p = new Dog('Poli');
// console.log(p);
p.speak;

_ra