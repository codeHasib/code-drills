// Challenge 1 ans
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
function getActiveDevelopers(users) {
  const activeUsers = users.filter((user) => user.active);
  return activeUsers;
}
console.log(getActiveDevelopers(users));

// Challenge 2
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Hasib",
      });
    }, 1000);
  });
}
async function getUserData() {
  try {
    let res = await fetchUser();
    if (!res) {
      return new Error("Something went wrong");
    }
    let data = {
      success: true,
      user: res,
    };
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
getUserData();

// Challenge 3
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
const search = debounce(() => {
  console.log("API call");
}, 500);

// Challenge 4
const cart = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    quantity: 2,
  },
  {
    id: 2,
    name: "Mouse",
    price: 50,
    quantity: 1,
  },
];
function calculateCartTotal(cart) {
  let totalPrice = cart.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0,
  );
  return totalPrice;
}
function getCartSummary(cart) {
  let totalPrice = cart.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0,
  );
  let totalItems = cart.reduce((items, current) => items + current.quantity, 0);
  return {
    totalPrice: totalPrice,
    totalItems: totalItems,
  };
}
console.log(getCartSummary(cart));

// Challenge 5
const user = {
 name:"Hasib",
 age:25
}

function updateUser(user){
 user.name = "New name";
 user.age = 45
}

updateUser(user)

console.log(user)
