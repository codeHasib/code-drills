const users = [
  { name: "John", salary: 5000 },
  { name: "Jane", salary: 7000 },
  { name: "Bob", salary: 6000 },
];

function maxSalary(arr) {
  let maxSalary = arr[0].salary;
  arr.forEach((item) => {
    if (item.salary > maxSalary) {
      maxSalary = item.salary;
    }
  });
  return maxSalary;
}

console.log(maxSalary(users));

let arr = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
function different(arr, arr2) {
  let differArr = [];
  arr.forEach((item) => {
    if (!arr2.includes(item)) {
      differArr.push(item);
    }
  });
  return differArr;
}
console.log(different(arr, arr2));

// Count occurrences of each item

let fruitArr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Output: {apple: 3, banana: 2, orange: 1}

let groupedObj = fruitArr.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});
console.log(groupedObj);
