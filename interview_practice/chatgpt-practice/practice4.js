// Challenge 1 — User Activity Report

// Given:

// const users = [
//   { name: "Hasib", active: true },
//   { name: "John", active: false },
//   { name: "Sarah", active: true },
//   { name: "Mike", active: false },
//   { name: "Alex", active: true },
// ];

// Create:

// function getUserReport(users) {
//   return users.reduce(
//     (acc, curr) => {
//       acc.totalUsers = users.length;
//       if (curr.active) {
//         acc.activeUsers++;
//         acc.activeNames.push(curr.name);
//       } else if (!curr.active) acc.inactiveUsers++;
//       return acc;
//     },
//     {
//       totalUsers: 0,
//       activeUsers: 0,
//       inactiveUsers: 0,
//       activeNames: [],
//     },
//   );
// }
// console.log(getUserReport(users));
// Return:

// {
//   totalUsers: 5,
//   activeUsers: 3,
//   inactiveUsers: 2,
//   activeNames: ["Hasib", "Sarah", "Alex"]
// }

// Challenge 2 — E-commerce Inventory Check

// Given:

// const products = [
//   { id: 1, name: "Laptop", stock: 10 },
//   { id: 2, name: "Phone", stock: 0 },
//   { id: 3, name: "Keyboard", stock: 5 },
//   { id: 4, name: "Monitor", stock: 0 },
// ];

// Create:

// function getOutOfStockProducts(products) {
//   return products.reduce((acc, curr) => {
//     !curr.stock ? acc.push(curr.name) : "";
//     return acc;
//   }, []);
// }

// console.log(getOutOfStockProducts(products));
// Return:

// ["Phone", "Monitor"]

// Challenge 3 — API Response Formatter

// Backend returns:

// const users = [
//   {
//     _id: "abc123",
//     name: "Hasib",
//     email: "hasib@gmail.com",
//   },
//   {
//     _id: "xyz456",
//     name: "John",
//     email: "john@gmail.com",
//   },
// ];

// Transform into:

// function structured(arr) {
//   return arr.map((item) => {
//     return {
//       value: item._id,
//       label: item.name,
//     };
//   });
// }

// [
//   {
//     value: "abc123",
//     label: "Hasib"
//   },
//   {
//     value: "xyz456",
//     label: "John"
//   }
// ]
// console.log(structured(users));
// Create a reusable function.

// Challenge 4 — Find Top Scorer

// Given:

// const students = [
//   { name: "Hasib", score: 88 },
//   { name: "John", score: 95 },
//   { name: "Sarah", score: 91 },
// ];

// // Create:

// function getTopScorer(students) {
//   return students.reduce((highest, lowest) =>
//     highest.score > lowest.score ? highest : lowest,
//   );
// }

// console.log(getTopScorer(students));

// Return the entire student object with the highest score.

// Challenge 5 — Order Statistics

// Given:

// const orders = [
//   { amount: 100 },
//   { amount: 200 },
//   { amount: 300 },
//   { amount: 400 },
// ];

// function orderStats(arr) {
//   const totalOrders = arr.length;
//   const totalRevenue = arr.reduce((sum, curr) => sum + curr.amount, 0);
//   const averageOrder = totalRevenue / totalOrders;
//   return {
//     totalOrders,
//     totalRevenue,
//     averageOrder,
//   };
// }

// console.log(orderStats(orders));

// Return:

// {
//   totalOrders: 4,
//   totalRevenue: 1000,
//   averageOrder: 250
// }

// const users = [
//   { email: "a@gmail.com" },
//   { email: "b@gmail.com" },
//   { email: "a@gmail.com" },
//   { email: "c@gmail.com" },
//   { email: "b@gmail.com" },
// ];

// // Return:

// function removeDuplicateEmails(arr) {
//   return arr.reduce((acc, curr) => {
//     const exists = acc.some((user) => user.email === curr.email);

//     if (!exists) {
//       acc.push(curr);
//     }

//     return acc;
//   }, []);
// }
// console.log(removeDuplicateEmails(users));
// [
//   { email: "a@gmail.com" },
//   { email: "b@gmail.com" },
//   { email: "c@gmail.com" }
// ]

// Keep the first occurrence.

// Challenge 8 — Junior MERN Interview Favorite

// Create:

function createSlug(title) {
  return title.trim().toLowerCase().split(" ").join("-");
}

// Input:

console.log(createSlug("Learn JavaScript In 30 Days"));

// Output:

// "learn-javascript-in-30-days"

// Requirements:

// Lowercase everything.
// Replace spaces with hyphens.
// Remove extra spaces.
