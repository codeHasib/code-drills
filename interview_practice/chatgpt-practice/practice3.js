// Question 1 — User Registration Validation

// const { useState } = require("react");

// Create a function:

// function registerUser(name, email, password) {
//   if (
//     typeof name === "string" &&
//     typeof email === "string" &&
//     typeof password === "string" &&
//     name &&
//     email &&
//     password
//   ) {
//     if (name.length < 3) {
//       return {
//         success: false,
//         message: "User name is too short",
//       };
//     } else if (!email.includes("@")) {
//       return {
//         success: false,
//         message: "Invalid email address",
//       };
//     } else if (password.length < 8) {
//       return {
//         success: false,
//         message: "Password must be in 8 characters",
//       };
//     } else {
//       return {
//         success: true,
//         message: "User registered successfully",
//       };
//     }
//   } else {
//     return "Invalid input";
//   }
// }

// Rules:

// Name cannot be empty.
// Email must contain @.
// Password must be at least 6 characters.

// Return:

// {
//   success: true,
//   message: "User registered"
// }

// or

// {
//   success: false,
//   message: "Password too short"
// }

// console.log(registerUser("Hasib", "hasib@gmail.com", "45678985"));

// Question 2 — MongoDB Style Search

// Given:

// const products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Laptop Bag" },
// ];

// Create:

// function searchProducts(keyword) {
//   let searchedArr = products.filter((item) =>
//     item.name.toLowerCase().includes(keyword.toLowerCase()),
//   );
//   if (searchedArr.length > 0) {
//     return searchedArr;
//   } else {
//     return "Nothing found";
//   }
// }

// Examples:

// console.log(searchProducts(""));

// Should return:

// [
//   { id: 1, name: "Laptop" },
//   { id: 3, name: "Laptop Bag" }
// ]

// Requirements:

// Case-insensitive.
// Partial matching

// Question 3 — Simulate API Pagination

// Given:

// const users = [
// ];

// Create:

// function paginate(users, page, limit) {
//   const start = page - 1 + limit;
//   const end = start + limit;
//   const targetedUsers = users.slice(start, end);
//   return targetedUsers;
// }

// Example:

// paginate(users, 2, 10)

// Should return users 11–20.

// This is a very common backend interview question.

// like in a simple way so that i can also understand i do not have worked with pagination yet so

// Question 4 — Build a Shopping Cart Logic

// Given:

// const cart = [
//   { id: 4, title: "Laptop", price: 4500 },
//   { id: 10, title: "PS5", price: 3500 },
//   { id: 55, title: "PS4", price: 1500 },
//   { id: 5, title: "Mouse", price: 200 },
// ];

// Create functions:

// function addToCart(product) {
//   cart.push(product);
// }
// function removeFromCart(id) {
//   let productIndex;
//   cart.forEach((item, ind) => {
//     if (item.id === id) {
//       productIndex = ind;
//     }
//   });
//   cart.splice(productIndex, 1);
// }
// function getTotal() {
//   return cart.reduce((total, curr) => total + curr.price, 0);
// }
// addToCart({ id: 3, title: "iPhone", price: 500 });
// console.log(cart);
// removeFromCart(3);
// console.log(cart);
// console.log(getTotal());
// Requirements:

// Store products inside cart.
// Calculate total dynamically.
// Remove by id.

// Question 5 — Express Route Logic

// Imagine this route:

// GET /users/:id

// You have:

// const users = [
//   { id: 1, name: "Hasib" },
//   { id: 2, name: "John" },
// ];

// Write the logic that:

// Finds user by id.
// Returns user if found.
// Returns error if not found.

// You can write only the route logic.

// function getUserById(id) {
//   const result = users.find((item) => (item.id = id));
//   if (result) return result;
//   else return { status: 404, message: "Not found" };
// }

// Question 6 — MongoDB Aggregation Thinking

// Given:

// const orders = [
//   { category: "Electronics", amount: 500 },
//   { category: "Electronics", amount: 200 },
//   { category: "Books", amount: 100 },
// ];

// const groupedOrder = orders.reduce((acc, curr) => {
//   if (acc[curr.category]) {
//     acc[curr.category] += curr.amount;
//   } else {
//     acc[curr.category] = curr.amount;
//   }
//   return acc;
// }, {});

// console.log(groupedOrder);

// Return:

// {
//   Electronics: 700,
//   Books: 100
// }

// This tests your ability to group and calculate data.

// Question 7 — React State Question

// Create a component:

// Counter

// Requirements:

// Increment button
// Decrement button
// Reset button
// Count can never go below 0

// Use React state.

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
//       <button onClick={() => count > 0 && setCount((prev) => prev - 1)}>
//         Decrement
//       </button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// };

// Question 8 — Real Junior MERN Interview Question

// Build:

// function getUserStats(users) {
//   return users.reduce(
//     (acc, curr) => {
//       acc.totalUsers = users.length;
//       if (curr.active) {
//         acc.activeUsers++;
//       } else if (!curr.active) {
//         acc.inactiveUsers++;
//       }
//       return acc;
//     },
//     {
//       totalUsers: 0,
//       activeUsers: 0,
//       inactiveUsers: 0,
//     },
//   );
// }

// Input:

// console.log(
//   getUserStats([
//     { name: "Hasib", active: true },
//     { name: "John", active: false },
//     { name: "Sarah", active: true },
//   ]),
// );

// Output:

// {
//   totalUsers: 3,
//   activeUsers: 2,
//   inactiveUsers: 1
// }
