const now = new Date();

// new Date.parse('2022-04-11')

console.log(now.setHours(20));
console.log(now);


// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getMonth());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some  = i ** 3;
};

let end = new Date();

alert(`Цикл отработал за ${ end - start} миллисекунд`)