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
