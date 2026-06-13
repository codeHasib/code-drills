// Challenge 1 — Find Duplicate Users

// Given:

const users = ["Hasib", "John", "Sarah", "Hasib", "John", "Mike"];

// Return:

// ["Hasib", "John"]

// Requirements:

// Use JavaScript only.
// Result should contain each duplicate only once.
// Order doesn't matter.

// function catchDuplicate(arr) {
//   let freshArr = [];
//   arr.forEach((item) => {
//     if (!freshArr.includes(item)) {
//       freshArr.push(item);
//     }
//   });
//   let duplicates = arr.filter((item) => !freshArr.includes(item));
//   return duplicates;
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

const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Monitor", price: 300 },
];

function mostExpensive(arr) {
  let expensive = arr[0];
  arr.forEach((item) => {
    if (item.price > expensive.price) {
      expPrice = item;
    }
  });
  return expensive;
}
console.log(mostExpensive(products));

// Challenge 3 — Total Cart Price

// Given:

// Return:

// 1300;

// Because:

// 500 * 2 + 100 * 3

// Requirements:

// Create a reusable function.
// Interviewers love this one.

const cart = [
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Headphones", price: 100, quantity: 3 },
];

function totalCartPrice(arr) {
  let totalPrice = arr.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0,
  );
  return totalPrice;
}

console.log(totalCartPrice(cart));

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

const students = [
  { name: "Hasib", grade: "A" },
  { name: "John", grade: "B" },
  { name: "Sarah", grade: "A" },
  { name: "Mike", grade: "C" },
];
