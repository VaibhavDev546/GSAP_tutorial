// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();

// console.log(sayHi);


for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
        
    }, 1);
}

const bird = {
    size: 'small',

}

const mouse = {
    name: 'Mickey',
    small: true

}

console.log(mouse[bird["size"]]);
let c = {greeting : "hello"};
let d ;
d = c
c.greeting = "Hiii"
console.log(d);


let a = 3;
let b = new Number(3)
let c = 3

console.log(a == b);
console.log(a === b);
console.log(b === c);


