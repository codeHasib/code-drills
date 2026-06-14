// Question 1 — User Registration Validation

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

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Laptop Bag" },
];

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

const users = [
  /* 50 users */
];

// Create:

function paginate(users, page, limit) {
  const start = page - 1 + limit;
  const end = start + limit;
  const targetedUsers = users.slice(start, end);
  return targetedUsers;
}

// Example:

// paginate(users, 2, 10)

// Should return users 11–20.

// This is a very common backend interview question.

// like in a simple way so that i can also understand i do not have worked with pagination yet so
