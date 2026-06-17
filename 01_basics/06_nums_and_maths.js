const score = 400
console.log(score);
// isme sirf 400 likha aayega

const balance = new Number(100)
 console.log(balance);
// iske ans me number:1oo likha aayega kyuki yha humne new likh ke object define kara hai jo number type ka hai

// console.log(balance.toString().length);
// toString likhne se wo value string me convert hojati hai aur fir uske aage dot lagake hum string ki properties ko use kar sakte hai jaise yaha pe length likha hai

// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// ye use karke hume precised or round off value milti hai bracket me jitni bhi value daloge utne numbers ka round off hoga

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// isse comma wagera lag jaate hai but wo us ke hisab se lagte hai isiliye IN likh ke indian kar sakte hai


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)