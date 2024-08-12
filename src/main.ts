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

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
function filterEvenNumbers() {
  return array.filter(filterActiom);
}

function filterActiom(num: number): boolean {
  return num % 2 === 0;
}

console.log(filterEvenNumbers());
