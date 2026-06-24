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

const names = ["hasib", "john", "sarah"];

function capitalizeNames(arr) {
  let newArr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  return newArr;
}
console.log(capitalizeNames(names));

// Return:

// ["Hasib", "John", "Sarah"]
