const account_Id=144553
let accountEmail="Subhadeep@gamil,com"
var accountPassword="12345"
accountCity="Krishnanagar"
let accountState;
// account_Id=2  /*not allowed in js because variable is constant*/

accountEmail="Subh@gmail.com"
accountPassword="54331"
accountCity="Kalyani"

/*
prefer not to use var
because of issue in block scope and funtional scope
*/


console.log(account_Id);

console.table([account_Id,accountEmail,accountPassword,accountCity,accountState])  /*provides a table view*/

