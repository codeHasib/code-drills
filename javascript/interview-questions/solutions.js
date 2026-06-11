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
    let data = await fetchUser();
    
  } catch (err) {}
}
getUserData();

// Challenge 3
