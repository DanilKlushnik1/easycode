function multiply() {
    const mul = [...arguments]
    if (mul.length<=0){
      return 0
    }
    let result = 1
    for(let value of mul){
      result *= value
    }
    return result 
  }
  const test = multiply(4)
  console.log(test)

function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("test"));

function getCodeStringFromTest (str){
    let result = ""
    for(let i = 0;i < str.length; i++){
    result += str.charCodeAt(i) + " ";}
    return result
}
console.log(getCodeStringFromTest("helo"))

function random(number){
    const randomNumber = Math.floor(Math.random()*10)
    if(number === randomNumber){
      return "Вы выиграли"
    }else{
      return "Вы не угадали"
    }
  }
  console.log(random(4))

  function generateArray(number){
    const result = []
    for(let i = 1; i <= number; i++){
      result.push(i)
    }
    return result
  }
  console.log(generateArray(10))

  function dubleArray(array){
    return [...array, ...array]
  }
  console.log(dubleArray([2,2,8]))

  function changeCollection(firstArray,secondArray){
    return [
        firstArray.slice(1,firsArray.length-1),
        secondArray.slice(1, secondArray.length-1)
    ]
  }

  console.log(changeCollection([1,4,8,8],[2,2,8]))

  function changeCollection(firstArray,secondArray){
    return [
        firstArray.slice(1),
        secondArray.slice(1)
    ]
  }
  
  console.log(changeCollection([1,2,3],[4,5,6]))

  const testUsers =  [ 
      {name: "Denis", age: 29, gender: "male"}, 
      {name: "Ivan", age: 20, gender: "male"},
      {name: "Glad", age: 54, gender: "female"},
      {name: "Enot", age: 2, gender: "female"},
      {name: "Detrov", age: 28, gender: "female"}
    ]
    function funcGetUsers(users,key,value){
        return users.filter(user => user[key] === value)
    }
    console.log(funcGetUsers(testUsers,"age",54))