const arr = [10, "a", "c", 11, 5];

const [first, second] = arr;
console.log(first);

function restParams(...arr1) {
  console.log(arr1);
}
restParams(arr);

const total = arr.reduce((sum, curr) => sum + curr, 0);
console.log(total);

function groupArr(arr) {
  const strArr = [];
  const numArr = [];
  arr.forEach((item) => {
    if (typeof item === "string") {
      strArr.push(item);
    } else if (typeof item === "number") {
      numArr.push(item);
    }
  });
  return [strArr, numArr];
}

console.log(groupArr(arr));

// For example bet primitive and non primitive data types how they work
let a = 4;
let b = a;
b++;
console.log(a);

let exArr = [1, 3, 4];
let bExArr = exArr;
bExArr.push(5);
console.log(exArr);