// Challenge 1 — Remove Falsy Values

// Given:

const arr = [0, "hello", false, "", 42, null, undefined, "world"];

const freshArr = arr.filter((item) => item);

console.log(freshArr);
// Return:

// ["hello", 42, "world"]
