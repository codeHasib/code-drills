Challenge 1 — Data Transformation (Very Common)
Problem:

You receive API data:

const users = [
{
id: 1,
name: "Hasib",
role: "developer",
active: true,
},
{
id: 2,
name: "Rahim",
role: "designer",
active: false,
},
{
id: 3,
name: "Karim",
role: "developer",
active: true,
},
];

Create a function:

getActiveDevelopers(users)

Requirements:

Return only active developers:

Expected:

[
{
id:1,
name:"Hasib",
role:"developer",
active:true
},
{
id:3,
name:"Karim",
role:"developer",
active:true
}
]

Concepts tested:

array methods
filtering
object access
clean conditions
Challenge 2 — Async JavaScript (Very Important)

You have:

function fetchUser() {
return new Promise((resolve) => {
setTimeout(() => {
resolve({
id:1,
name:"Hasib"
});
},1000);
});
}

Create:

async function getUserData()

Requirements:

call fetchUser
wait for the response
return:
{
success:true,
user:{
id:1,
name:"Hasib"
}
}

Handle possible errors using:

try/catch

Concepts tested:

promises
async/await
error handling
Challenge 3 — Debounce Function (Frontend Favorite)

Implement:

debounce(fn, delay)

Example:

const search = debounce(() => {
console.log("API call");
},500);

Expected behavior:

If called:

search()
search()
search()

quickly:

Only execute once after 500ms.

Concepts tested:

closures
setTimeout
clearTimeout
higher-order functions
Challenge 4 — State Management Thinking

You have:

const cart = [
{
id:1,
name:"Laptop",
price:1000,
quantity:2
},
{
id:2,
name:"Mouse",
price:50,
quantity:1
}
]

Create:

calculateCartTotal(cart)

Expected:

2050

Then create:

getCartSummary(cart)

Expected:

{
totalItems:3,
totalPrice:2050
}

Concepts tested:

reduce
real application logic
Challenge 5 — Debug This Code

What is wrong?

const user = {
name:"Hasib",
age:25
}

function updateUser(user){
user = {
name:"New Name",
age:30
}
}

updateUser(user)

console.log(user)

Questions:

What will print?
Why?
How would you actually update the object?

Concepts tested:

references
objects
pass by value/reference behavior
