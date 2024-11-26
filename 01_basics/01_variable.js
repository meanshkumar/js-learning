console.log("Code Running")

const accountId = 2134
var accountName = "Ansh"
let accountEmail = "im.ansh1410@ansh.com"
accountCity = "Jaipur" // we can make variable without even defining but it's not a good practice

console.log("Before Changing")

console.table([accountId,accountName,accountEmail,accountCity])

// accountId = 1 // We cant't change const value in JS  // It will throw an Error
accountName = "Sonal"
accountEmail = "sonal@sonal.com"
accountCity = "Dhanbad" 

console.log("After Changing");

console.table([accountId,accountName,accountEmail,accountCity])

//Prefer not to use Var because of issue in block scope & functional scope , use let (Modern JS)

