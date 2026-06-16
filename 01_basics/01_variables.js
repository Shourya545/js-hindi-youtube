const accountId = 2354
let accountEmail = "jadhavshorya@gmail.com"
var accountPassword = "76345"
accountCity = "Pune"
let accountState;

// account state me kuch  nhi likha isiliye undefined aagaya

// hum generally let hi use karte hai variable declare karne ke liye because of issue in block scope and functional scope


accountEmail = "shorya54@gmail.com"
accountPassword = "67878"
accountCity = "Indore"

// const ko change nhi kar sakte

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])