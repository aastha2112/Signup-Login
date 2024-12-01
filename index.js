function signup(userName) {
  let usernames = ["Aastha", "Adam", "Piyush", "John", "Lucy"];
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === userName) {
      return "User Already Regsistered, Please Login";
    } else {
      usernames.push(userName);
      return "Signup Sucessfull, Please Login";
    }
  }
}

// console.log(signup("Aastha"));
// console.log(signup("Alice"));

function login(userName, password) {
  let usernames = ["Aastha", "Adam", "Piyush", "John", "Lucy"];
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === userName && password === "Emp@123") {
      return "Login Sucessfull...";
    } else if (usernames[i] === userName && password !== "Emp@123") {
      return "Wrong Password.... ";
    } else {
      return "User Not Found, Please Signup";
    }
  }
}

console.log(login("Aastha", "Emp@123")); //Login Sucessfull...
console.log(login("Aastha", "Emp@12345")); //Wrong Password....
console.log(login("Julia", "Emp@123")); //User Not Found, Please Signup
