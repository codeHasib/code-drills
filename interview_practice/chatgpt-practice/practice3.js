// Question 1 — User Registration Validation

// Create a function:

function registerUser(name, email, password) {
  if (
    typeof name === "string" &&
    typeof email === "string" &&
    typeof password === "string" &&
    name &&
    email &&
    password
  ) {
    if (name.length < 3) {
      return {
        success: false,
        message: "User name is too short",
      };
    } else if (!email.includes("@")) {
      return {
        success: false,
        message: "Invalid email address",
      };
    } else if (password.length < 8) {
      return {
        success: false,
        message: "Password must be in 8 characters",
      };
    } else {
      return {
        success: true,
        message: "User registered successfully",
      };
    }
  } else {
    return "Invalid input";
  }
}

// Rules:

// Name cannot be empty.
// Email must contain @.
// Password must be at least 6 characters.

// Return:

// {
//   success: true,
//   message: "User registered"
// }

// or

// {
//   success: false,
//   message: "Password too short"
// }

console.log(registerUser("Hasib", "hasib@gmail.com", "45678985"));