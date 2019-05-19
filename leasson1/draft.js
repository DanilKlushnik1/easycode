// const {test} = require("./File")
// test()
// [1, 1, 2, 3, 4, 4, 5, 5, 3].reduce((a, b) => a ^ b)



//  function getCodeStringFromTest (str){
//      let result = ""
//      for(let i = 0;i < str.length; i++){
//      result += str.charCodeAt(i) + " ";}
//      return result
//  }
//  console.log(getCodeStringFromTest("helo"))

//  function getCodeStringFromText(){

//  }

//  function reverseStr(str){
//    let result = ""
//    for(let i = str.length - 1;i >= 0; i--){
//      const char = str[i]
//      result += char
//    }
//    return result
//  }
//  console.log(reverseStr("pidor"))
//  function random(number){
//    const randomNumber = Math.floor(Math.random()*10)
//    if(number === randomNumber){
//      return "Вы выиграли"
//    }else{
//      return "Вы не угадали"
//    }
//  }
//  console.log(random(4))

//  function generateArray(number){
//    const result = []
//    for(let i = 1; i <= number; i++){
//      result.push(i)
//    }
//    return result
//  }
//  console.log(generateArray(10))

//  function dubleArray(array){
//    return [...array, ...array]
//  }
//  console.log(dubleArray([2,2,8]))

//  function changeCollection(firstArray,secondArray){
//    return [
//        firstArray.slice(1),
//        secondArray.slice(1)
//    ]
//  }

//  console.log(changeCollection([1,2,3],[4,5,6]))

// callback 

// function x (a){
//     return function(b){
//         return a+b
//     }
// }

// [1,2,3].map((item => console.log(item)))

// [1,2,3].forEach(element => 1)
    
// [1,2,3].map(function (item) {return item})

// [1,2,3].filter(function (item) {return item>1})

// [1,2,3].find(function (item) {return item<2})

// const firstFunc = (array, callback) => {
//     const outputOfCallback = callback(array)
//     return `New Value: ${outputOfCallback}` 
// }


// const hendler1 = array => {
//     return array.reduce((acc, elem, index, arr) => {
//         const lowerCasedElem = elem.toLowerCase()
//         const firstUpperChar = elem[0].toUpperCase()
//         const output = firstUpperChar + lowerCasedElem.slice(1)

//         acc += output

//         return acc
//     }, "")
// }

// const retutnNumber = array =>{
//     return array.map(elem => ({
//             digit: elem,
//             odd: elem % 2 !== 0
//     }))
// }

// console.log(
//     [1, 2, 3, 0].some(elem => elem === 0)
// )

// const containsZero = array => {
//     return array.reduce((acc,elem) => {
//         if(elem === 0){
//             acc = true
//         }
//         return acc
//     },false)
// }
// const hendler3 = array => {
//     return array.reduce((acc, elem) => {
//         acc += `${elem.name} is ${elem.age}, `

//         return acc
//     }, "")
// }

// console.log(
//     firstFunc([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}], hendler3)
// )

// // [...document.body.children]
// function multiply() {
//     const mul = [...other]
//     if (mul.length<=0){
//       return 0
//     }
//     let result = 1
//     for(let value of mul){
//       result *= value
//     }
//     return result 
//   }
//   const test = multiply(4,5,6)
//   console.log(test)
