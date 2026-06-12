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


