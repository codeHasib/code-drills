// Challenge 1 — Find Duplicate Users

// Given:

// const users = ["Hasib", "John", "Sarah", "Hasib", "John", "Mike"];

// Return:

// ["Hasib", "John"]

// Requirements:

// Use JavaScript only.
// Result should contain each duplicate only once.
// Order doesn't matter.

// function catchDuplicate(arr) {
//   let freshArr = [];
//   let duplicateArr = [];
//   arr.forEach((item) => {
//     if (!freshArr.includes(item)) {
//       freshArr.push(item);
//     } else if (freshArr.includes(item)) {
//       duplicateArr.push(item);
//     }
//   });
//   return duplicateArr;
// }
// console.log(catchDuplicate(users));

// Challenge 2 — Most Expensive Product

// Given:

// Return:

// {
//   name: "Laptop",
//   price: 800
// }

// Requirements:

// Function should work for any array length.
// Don't hardcode indexes.

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 500 },
//   { name: "Monitor", price: 300 },
// ];

// function mostExpensive(arr) {
//   let expensive = arr[0];
//   arr.forEach((item) => {
//     if (item.price > expensive.price) {
//       expPrice = item;
//     }
//   });
//   return expensive;
// }
// console.log(mostExpensive(products));

// Challenge 3 — Total Cart Price

// Given:

// Return:

// 1300;

// Because:

// 500 * 2 + 100 * 3

// Requirements:

// Create a reusable function.
// Interviewers love this one.

// const cart = [
//   { name: "Phone", price: 500, quantity: 2 },
//   { name: "Headphones", price: 100, quantity: 3 },
// ];

// function totalCartPrice(arr) {
//   let totalPrice = arr.reduce(
//     (sum, current) => sum + current.price * current.quantity,
//     0,
//   );
//   return totalPrice;
// }

// console.log(totalCartPrice(cart));

// Challenge 4 — Group Students By Grade

// Given:

// Return:

// {
//   A: ["Hasib", "Sarah"],
//   B: ["John"],
//   C: ["Mike"]
// }

// Requirements:

// Dynamic solution.
// Should work for any grade values.

// const students = [
//   { name: "Hasib", grade: "A" },
//   { name: "John", grade: "B" },
//   { name: "Sarah", grade: "A" },
//   { name: "Mike", grade: "C" },
// ];

// const groupedObj = students.reduce((acc, curr) => {
//   if (!acc[curr.grade]) {
//     acc[curr.grade] = [];
//     students.forEach((item) => {
//       if (item.grade == curr.grade) {
//         acc[curr.grade].push(item.name);
//       }
//     });
//   }
//   return acc;
// }, {});
// console.log(groupedObj);

// Challenge 5 — Frontend Interview Favorite

// Count occurrences of words.

// Input:

// let str = "javascript react javascript node react javascript";

// Output:

// {
//   javascript: 3,
//   react: 2,
//   node: 1
// }

// Requirements:

// Ignore extra spaces.
// Make the function reusable.

// function strOccur(str) {
//   let strArr = str.split(" ");
//   let groupedObj = strArr.reduce((acc, curr) => {
//     if (acc[curr]) {
//       acc[curr]++;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {});
//   return groupedObj;
// }
// console.log(strOccur(str));

// Challenge 6 — API Data Transformation

// Imagine an API returns:

const users = [
  {
    id: 1,
    name: "Hasib",
    email: "hasib@gmail.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@gmail.com",
  },
];

// Transform it into:

// [
//   {
//     label: "Hasib",
//     value: 1
//   },
//   {
//     label: "John",
//     value: 2
//   }
// ]

// function structure(data) {
//   let structuredArr = [];
//   data.forEach((item) => {
//     structuredArr.push({ label: item.name, value: item.id });
//   });
//   return structuredArr;
// }

// console.log(structure(users));
// This is extremely common in React projects when preparing dropdown options.

// const btn = document.querySelector("button");
// const ul = document.querySelector("ul");

// let taskNum = 0;
// btn.addEventListener("click", () => {
//   taskNum++;
//   let li = document.createElement("li");
//   li.textContent = `Task ${taskNum}`;
//   ul.append(li);
// });
