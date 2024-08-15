// const name: string = "Vlad";
// const age: number = 20;
// const email: string = "123123213@gmail.com";

// function createArray() {
//   return [`name: ${name}, age: ${age}, email: ${email}`];
// }

// console.log(createArray());
// Оголошення інтерфейсу для типів параметрів

// interface CalculateTypes {
//   first: number | string;
//   second: number | string;
// }

// // Перевантаження функції calculate
// function calculate(first: number, second: number): string;
// function calculate(first: string, second: string): string;
// function calculate(first: number | string, second: number | string): string {
//   if (typeof first === "number" && typeof second === "number") {
//     // Якщо обидва параметри - числа
//     return `${first} + ${second} = ${first + second}`;
//   } else if (typeof first === "string" && typeof second === "string") {
//     // Якщо обидва параметри - рядки
//     return `${first} + ${second} = ${first.concat(second)}`;
//   } else {
//     // Якщо параметри різних типів
//     return "Invalid input types";
//   }
// }

// // Приклади виклику функції
// console.log(calculate(2, 4)); // Виведе: "2 + 4 = 6"
// console.log(calculate("Hello, ", "World!")); // Виведе: "Hello, World! = Hello, World!"
// console.log(calculate(2, "4")); // Виведе: "Invalid input types"

//

// function isEven(a: number): boolean {
//   return a % 2 === 0;
// }

// console.log(isEven(2));

// function toUpperCaseText(a: string) {
//   return a.toUpperCase();
// }

// console.log(toUpperCaseText("cat"));

// let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// function sumArray() {
//   return array.reduce((sum, current) => sum + current, 0);
// }

// console.log(sumArray());

// let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// function reverseArray() {
//   return [...array].reverse();
// }

// console.log(reverseArray());

// let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// function filterEvenNumbers() {
//   return array.filter(filterActiom);
// }

// function filterActiom(num: number): boolean {
//   return num % 2 === 0;
// }

// console.log(filterEvenNumbers());

// type typeScript = {
//   name: string;
//   number: number;
// };

// let user: typeScript[] = [
//   { name: "Tom", number: 20 },
//   { name: "Jake", number: 24 },
//   { name: "Anders", number: 10 },
// ];

// console.log(user);

// type typeGreet = {
//   name: string;
//   age: number;
// };

// function cat(person: typeGreet): string {
//   const message = `Hello, my name is ${person.name} and I am ${person.age} years old.`;
//   console.log(message);
//   return message;
// }

// cat({ name: "cat", age: 20 });

// function greeting(name: string, age: 20): string {
//   return `Hello, my name is ${name} and I am ${age} years old.`;
// }

// console.log(greeting("cat", 20));

// function isEven(num: number): boolean {
//   return num % 2 === 0;
// }

// console.log(isEven(4));

// //////////
// 1
// function factorial(num: number): number {
//   if (num < 0) return -1;
//   if (num === 0 || num === 1) return 1;
//   let sum: number = 1;
//   for (let i = 2; i <= num; i++) {
//     sum *= i;
//   }
//   return sum;
// }

// console.log(factorial(6));
// 2
// class Point {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;

//   constructor(x1: number, y1: number, x2: number, y2: number) {
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//   }
//   distance(): number {
//     return Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
//   }
// }
// const point = new Point(4, 5, 2, 1);
// console.log(point.distance());

// class Point {
//   constructor(public x: number, public y: number) {}

//   distanceTo(other: Point): number {
//     const dx = this.x - other.x;
//     const dy = this.y - other.y;
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// }

// const point1 = new Point(4, 5);
// const point2 = new Point(2, 1);

// console.log(point1.distanceTo(point2));

// 3

// function palindrome(str: string): boolean {
//   const palindromeStr = str.replace(/\s+/g, "").toLowerCase();
//   return palindromeStr === palindromeStr.split("").reverse().join("");
// }

// console.log(palindrome("lol"));

// 4 Завдання
// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// const massive: User[] = [
//   { name: "cat", email: "cat@gmail.com", age: 20 },
//   { name: "vasia", email: "egeg@gmail.com", age: 18 },
//   { name: "afe", email: "qeqe@gmail.com", age: 16 },
// ];

// function age(user: User): string {
//   if (user.age < 18) {
//     return `${JSON.stringify(user)} - "В доступі відмовлено"`;
//   } else {
//     return `${JSON.stringify(user)} - "Доступ Дозволено"`;
//   }
// }

// massive.forEach((user) => console.log(age(user)));

interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Необов'язкове поле
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName} `);
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
};

greet(john); // Виведе: "Hello, John Doe"
