let a = 0 || 'string';;
console.log(a)//string потому что string больше 0

let b = 1 && 'string';
console.log(b)//string && видит первое значение false и возврощает его

let c = null || 25;
console.log(c)//25 потому что 25 юольше чем null

let d = null && 25;
console.log(d)//null видит первое значение false и возврощает его

let e = null || 0 || 35;
console.log(e)//35 потому что 35 наибольшее значение

let f = null && 0 && 35;
console.log(f)//null видит первое значение false и возврощает его

console.log(12 + 14 + '12')//2612 12 и 14 это числа а "12" это строка

console.log(3 + 2 - '1')//4

console.log('3' + 2 - 1)//31 "3 " это строка а 2 и 1 числа

console.log(true + 2)//3 true = 1

console.log(+'10' + 1)//11 + перед строкой , если там только чила переобразовывает ее в число

console.log(undefined + 2)//NaN undefined не является числом

console.log(null + 5)//5 null видится как 0

console.log(true + undefined)//NaN

let variable = "hidden"

if (variable = "hiden") {
    console.log("visible")
}else{
    console.log("hidden")
}

let number = 1
let message = (number==0) ? "1" : (number<0) ? "less then zero": number * 10;
console.log(message)

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car.age > 5) {
    console.log('Need Repair' );
    car.needRepair = true;
}else {
    car.needRepair = false;
}

let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
if (item.discount) {
    let itemPrice = parseInt(item.price);
    let itemDiscount = parseInt(item.discount);
    let priceWithDiscount = itemPrice * (100 - itemDiscount) /100
    item.priceWithDiscount = priceWithDiscount;
    console.log(item.priceWithDiscount);
}else{
    console.log(item.price)
}

let product = {name: "Яблоко",price: "10$"};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

let massageProdduct = (parseInt(product.price) >= min && parseInt(product.price) <= max) ? product.name:
"товаров не найдено.";
console.log(massageProdduct)