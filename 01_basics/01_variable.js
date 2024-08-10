const accountId = 191919
let accountEmail = "div@gmail.com"
var accountPassword = "919191"
accountCity = "Delhi"
let accountState;

accountEmail = "div19@gmail.com"
accountPassword = "12345"
accountCity = "Noida"

// accountId = 4 //constant can't be changed
console.log(accountId);

/*
Prefer not to use var
becoz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
