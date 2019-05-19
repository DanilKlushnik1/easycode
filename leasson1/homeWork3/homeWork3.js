let obj1 = {product : "iphone"}

let obj2 = {}

obj2.price = 1000;
obj2.currency = "dollar";

let detalis = {model : "Masha",color :"Blue"}

detalis.model = "Masha"
detalis.color = "Blue"

let a = "block"
switch (a){
    case ("inline"): console.log("inline");
    break;
    case ("none") : console.log("none");
    break;
    case ("block") : console.log("block");
    break;
    default: console.log("other");
}

let string ="i am in the easycode"
let b = "" 
for(let i = 0; i < string.length; i++ ){
    b+=(string[i - 1] == ' ') ? string[i].toUpperCase() : string[i];

}
console.log(b)

function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("tseb eht ma i"));

for(let i = 1; i<=10; i++){
    console.log(i = i * ++i * ++i * ++i * ++i * ++i * ++i * ++i * ++i * ++i)
    break
}

let str1 ="JavaScript is a pretty good language"
let str2 = "" 
for(let i = 0; i < str1.length; i++ ){
    str2+=(str1[i - 1] == ' ') ? str1[i].toUpperCase() : str1[i];
}
console.log(str2 = str2.replace(/\s/g, ''))

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for(let value of number){
    if (value % 2 !==0)
    console.log(value) 
}

let list = {
    name: "denis",
    work: "easycode",
    age: 29
}
for(let key in list){
    const value = list[key]
        if(typeof value === "string"){
    console.log(value.toUpperCase())}
}