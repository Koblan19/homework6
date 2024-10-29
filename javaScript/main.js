// #1, 2
let score = 90;

if (score >= 90) {
    console.log("Отлично");
}
else if (score >= 70 && score <= 89) {
    console.log("Хорошо");
}
else if (score >= 50 && score <= 69) {
    console.log("Удовлетворительно");
}
else {
    console.log("Неудовлетворительно");
}

// #3
let number = 20;

isEven = number % 2 == 0 ? "Четное" : "Нечетное";

console.log(isEven);

// #4
/*let userInput = +prompt("Введите число");

switch (userInput) {
    case 1:
        alert("Один");
        break;
    case 2:
        alert("Два");
        break;
    case 3:
        alert("Три");
        break;
    case 4:
        alert("Четыре");
        break;
    case 5:
        alert("Пять");
        break;
    default:
        alert("Неизвестное число");
} */

// #5
let a = "Apple";
let b;

if (a != null || a != undefined) {
    b = a ?? ''
}
else {
    b = 100;
}
console.log(b);

// Массивы:

// 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2
console.log(numbers[3]);

// 3
numbers[5] = 25;
console.log(numbers);

// 4
numbers.push(11);
console.log(numbers.length);

// 5
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 6
console.log(matrix[1][2]);

// 7
let fruits = ["Яблоко", "Банан", "Киви"];
fruits.unshift("Мандарин");
fruits.push("Гранат");
console.log(fruits);

// 8
console.log(fruits.length);

// Циклы:

// 1
let ex = 0;
while (ex < 10) {
    ex++;
    console.log(ex);
}

// 2
let xe = 4;
do {
    xe++;
    console.log(xe);
} while (xe < 15);

// 3
let mounth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
for (let i = 0; i < mounth.length; i++) {
    console.log(mounth[i]);
}

// 4
for (let value of mounth) {
    console.log(value);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 5
for (let i = 1; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
    else{
        continue;
    }
}

// 6
while (true){
    let request = +prompt("Введите число");
        if (request == 0){
            break;
        }
}

// 7
for (i = 1; i <= 10; i++) {
    if (i != 3 && i != 7) {
        console.log(i);
    }
    else {
        continue;
    }
}
