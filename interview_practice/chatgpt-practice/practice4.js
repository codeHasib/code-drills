// Challenge 1 — User Activity Report

// Given:

const users = [
  { name: "Hasib", active: true },
  { name: "John", active: false },
  { name: "Sarah", active: true },
  { name: "Mike", active: false },
  { name: "Alex", active: true },
];

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

const products = [
  { id: 1, name: "Laptop", stock: 10 },
  { id: 2, name: "Phone", stock: 0 },
  { id: 3, name: "Keyboard", stock: 5 },
  { id: 4, name: "Monitor", stock: 0 },
];

// Create:

function getOutOfStockProducts(products) {
  return products.reduce((acc, curr) => {
    !curr.stock ? acc.push(curr.name) : "";
    return acc;
  }, []);
}

console.log(getOutOfStockProducts(products));
// Return:

// ["Phone", "Monitor"]