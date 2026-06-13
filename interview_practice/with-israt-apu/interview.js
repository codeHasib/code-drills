// async function resolvePromise() {
//   let res = await fetch("");
// }
// let fetchData = () => fetch("").then().catch();

const { useState } = require("react");

// Make an todo app
// let obj = {
//   name: "Hasib",
// };

// function greet(age) {
//   console.log(`Hi ${this.name}, ${age}`);
// }

// greet.call(obj, 20);

// function greet2(age, city) {
//   console.log(`Hi ${this.name}, age: ${age}, city: ${city}`);
// }

// greet2.apply(obj, [20, "chittagong"]);

// function greet3() {
//   console.log(`Hi developer ${this.name}`);
// }

// const fnGreet = greet3.bind(obj);
// fnGreet();

// setTimeout(()=> {
//   console.log("This is from timeout");
// }, 700)

// async function fetchData() {
//   try {
//     const res = await fetch("");
//     if (!res) {
//       for (let i = 0; i < 3; i++) {
//         await res();
//       }
//       return new Error();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// Lift up state

// const [state, setState] = useState(null);
// <Child fun={setState}></Child>;

// function Child({ fun }) {
//   fun("asdf")
// }
