// Challenge 1 — Remove Falsy Values

// Given:

// const arr = [0, "hello", false, "", 42, null, undefined, "world"];

// const freshArr = arr.filter((item) => item);

// console.log(freshArr);
// Return:

// ["hello", 42, "world"]

// Challenge 2 — Longest Word

// Given:

// const sentence = "JavaScript developers solve interesting problems";

// const longestWord = sentence
//   .split(" ")
//   .reduce((longestWord, curr) =>
//     longestWord.length > curr.length ? longestWord : curr,
//   );

// console.log(longestWord);

// Return:

// "interesting"

// Round 1 - JavaScript (Easy)
// Question 1

// Write a function that returns the second largest number.

const arr = [10, 5, 7, 20, 15];

function secondLargest(arr) {
  const largestNum = Math.max(...arr);
  const newArr = arr.filter((item) => item !== largestNum);
  const secondLargestNum = Math.max(...newArr);
  return secondLargestNum;
}

console.log(secondLargest(arr));

// Expected:

// 20 -> largest
// 15 -> second largest

// return 15;

// Don't use sort().
