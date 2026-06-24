// Challenge 1 — Second Largest Number

// Given:

// const nums = [10, 5, 20, 8, 15];
// function getSecondMax(arr) {
//   const firstMaxNum = Math.max(...arr);
//   const indexOfFirst = nums.indexOf(firstMaxNum);
//   arr.splice(indexOfFirst, 1);
//   const secondMaxNum = Math.max(...arr);
//   return secondMaxNum;
// }
// console.log(getSecondMax(nums));
// Return:

// 15

// Requirements:

// Reusable function
// Works for any array length

// Challenge 2 — Capitalize Names

// Given:

// const names = ["hasib", "john", "sarah"];

// function capitalizeNames(arr) {
//   let newArr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
//   return newArr;
// }
// console.log(capitalizeNames(names));

// Return:

// ["Hasib", "John", "Sarah"]

// Challenge 3 — User Lookup

// Given:

// const users = [
//   { id: 1, name: "Hasib" },
//   { id: 2, name: "John" },
//   { id: 3, name: "Sarah" },
// ];

// Create:

// function findUserById(arr, id) {
//   let user = arr.find((item) => item.id == id);
//   return user;
// }
// console.log(findUserById(users, 3));

// Example:

// findUserById(users, 2);

// Returns:

// {
//   id: 2,
//   name: "John"
// }

// Challenge 4 — Count Vowels

// Input:

// "javascript"

// Output:

// 3

// Count:

// a
// a
// i

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}
console.log(countVowels("javascript"));
