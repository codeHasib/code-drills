// export const UserDetailsPage = () => {
//   const { id } = useParams();
//   return (
//     <>
//       <p>/users/{id}</p>
//     </>
//   );
// };

// 6. Find the first element that meets condition
// javascript
// Input: ([10, 15, 20, 25], num => num > 18)
// Output: 20

// const arr = [10, 15, 20, 25];
// const firstOne = arr.find(num => num > 18);
// console.log(firstOne);

// Capitalize first letter of each word
// javascript
// Input: "hello world from react"
// Output: "Hello World From React"
// function capitalize(str) {
//   let strArr = str.split(" ").map(word=> word[0].toUpperCase() + word.slice(1)).join(" ");
//   console.log(strArr);
// }
// capitalize("hello world from react");

// Convert array to object using map
// javascript
// Input: ['id', 'name', 'age']
// Output: {id: 'id', name: 'name', age: 'age'}
// const arr = ["id", "name", "age"];
// const arrObj = arr.reduce((acc, curr) => {
//   acc[curr] = curr;
//   return acc;
// }, {});
// console.log(arrObj);

// Timeout a promise (fail if too slow)
// javascript
// function fetchWithTimeout(url, delay) {
//   async function fetchData() {
//     const res = await fetch(url);
//     return res;
//   }
//   setTimeout(() => {
//     fetchData();
//     if (fetchData === Promise) {
//       return "too slow";
//     }
//   }, delay);
// }
// fetchWithTimeout(url, 3000);