let money = 500
const tax = 0.12
const phone = 115
const dop = 9
let limit = 200
// const num = 0

function a (num){
	num = (num * tax)+num
	return num
}

function b (num){
	num = "$" + num
	return num
}

const sell = phone + dop
const phoneBuy = 0

console.log(b(a(sell)))

if(limit<sell){
	for(let i = phoneBuy; i > money; i ){
		phoneBuy = money -sell
	}
}
if (limit<sell){
	console.log("dorogo")
}

