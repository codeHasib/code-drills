// 🟢 Level 1 — Basics (Warm-up)
// ✅ Challenge 1: Fix this
const user = {
  name: "Hasib",
};

function sayHi() {
  console.log("Hi " + this.name);
}

// // ❌ Currently not working
// sayHi();

// 👉 Task: Use call to make it print:

// Hi Hasib

sayHi.call(user);

// ✅ Challenge 2: Pass Arguments
const user2 = {
  name: "Hasib",
};

function introduce(age, city) {
  console.log(`I am ${this.name}, ${age}, from ${city}`);
}

// 👉 Task:

// Use call
// Then use apply (same result)

// Expected:

// I am Hasib, 22, from Chittagong

introduce.call(user2, 26, "Chittagong");
introduce.apply(user2, [26, "Chittagong"]);

// 🟡 Level 2 — Real Use Cases
// ✅ Challenge 3: Borrow Method
const person1 = {
  name: "Hasib",
  greet() {
    console.log("Hello " + this.name);
  },
};

const person2 = {
  name: "Rahim",
};

// 👉 Task:
// Use call so that person2 can use person1.greet

// Expected:

// Hello Rahim

person1.greet.call(person2);

// ✅ Challenge 4: Use bind for Later Execution
const user3 = {
  name: "Hasib",
};

function greet() {
  console.log("Hi " + this.name);
}

// 👉 Task:

// Create a new function using bind
// Call it later

const fnGreet = greet.bind(user);
fnGreet();
