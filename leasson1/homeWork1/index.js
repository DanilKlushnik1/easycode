let string = "some test string";

const firstChar = string[0];
const lastChar = string[string.length-1];
console.log(firstChar,lastChar);

console.log(
    firstChar.toUpperCase(),
    lastChar.toUpperCase()
)

console.log(
    string.indexOf("string"),
)

console.log(
    string.lastIndexOf(" "),
)

console.log(
    string.substr(5 , 4) 
)

console.log(
    string.substring(5, 10)
)

console.log(
    string.slice(0,-6)
)

let a = 20;
let b = 16;
a = "20";
b = "16";
console.log(a+b);

const pi = Math.PI;
console.log(pi.toFixed(2))

let numA = 15,
    numB = 11,
    numC = 16,
    numD = 12,
    numE = 51,
    numF = 12,
    numG = 13,
    numH = 51;
    const numberMin = Math.min(numA,numB,numC,numC,numD,numF,numG,numH);
    const numberMax = Math.max(numA,numB,numC,numC,numD,numF,numG,numH);
console.log(numberMin,numberMax)

let randomNumber = Math.random()
console.log(randomNumber.toFixed(2))

let random = Math.floor(Math.random() * 50)
console.log(random)

let z = 0.6;
let y = 0.7;
let x = z+y;
console.log (x.toFixed(1))

const getNumbersFromWords = "100$"
console.log(parseInt(getNumbersFromWords))