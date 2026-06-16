// String ko "" ya '' dono me likh sakte hai

// const name = "shourya"
// const repoCount = 50

//  console.log(name +  repoCount + "Value" )
// ye syntax accha nhi lagta kyuki ye outdated hai modern tareeks kuch aur hai


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// aajkal ese hi likha jata hai

const gameName = new String('Thunder')
// string declare karne ka tareeka aur new lagane se hum objects use kar sakte hai, ye dusra tareeka hai pehla to wohi const karke jo likha tha


//  console.log(gameName[0]);
//  ese key value pair access hote hai matlab agar isko run karunga to T aayega 

// console.log(gameName.__proto__); isme do baar underscore hai

// neeche jo likhe hai wo (methods) ko dekhne ke tareeke hai ye tareeke ya names hum console me dekh sakte hai jab hum console me jake string wali line dalennge to prototype aaye uspe click karenge to ye sab aajayenge

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);
// isme -ve value nhi de sakte

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);



const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

// ye hitesh ke aage peeche ki gap ko trim kar deta hai

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

// replace kr sakte hai koi bhi value koi bhi sentence me se

console.log(url.includes('sundar'))
// includes use karke pata laga sakte hai ki sundar uss url me hai ki nhi jo ki nhi hai to ye false return kar dega


