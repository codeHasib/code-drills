// Challenge 1 — Remove Falsy Values

// Given:

// const arr = [0, "hello", false, "", 42, null, undefined, "world"];

// const freshArr = arr.filter((item) => item);

// console.log(freshArr);
// Return:

// ["hello", 42, "world"]

// Challenge 2 — Longest Word

// Given:

const sentence = "JavaScript developers solve interesting problems";

const longestWord = sentence
  .split(" ")
  .reduce((longestWord, curr) =>
    longestWord.length > curr.length ? longestWord : curr,
  );

console.log(longestWord);

// Return:

// "interesting"
