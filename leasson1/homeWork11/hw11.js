function minus (a){
    a=a||0
  return  (b) => {
    b=b||0
  return (a-b)
  }
}

console.log(minus(25)(5))

function multiplyMaker (a){
    let b = a;
    return function (a){
        b *= a
        return b
    }
}
const multiply = multiplyMaker(2)

console.log(multiply(8))
console.log(multiply(4))

const obj = {
    string : " ",
    installString : function(a){
        if(a||typeof(a) == "number"){
            this.string = a
            return this
        }else{
            this.string = a
            return this
        }
    },
    getString : function(){
        console.log(this.string)
    },
    stringLength : function(){
        console.log(this.string.length)
    },
    stringFlip : function(){
        let result = ""
        for(let i = this.string.length-1; i>=0; i--){
            result += this.string[i]
            
        }
        console.log(result)
    }
}

obj.installString("danil")
obj.getString()
obj.stringLength()
obj.stringFlip()

obj.installString("67")
obj.getString()
obj.stringLength()
obj.stringFlip()

function Car (type,age){
    this.type = type[0].toUpperCase() + type.slice(1)
    this.age = age
    this.yearOfCar = 2019 - age
}

const lexus = new Car("lexus", 2)

console.log(lexus.type)
console.log(lexus.age)
console.log(lexus.yearOfCar)

function String (originalString){
    this.originalString = originalString
    this.cipherString = originalString.split("").reverse().join("")
}

const newString = new String("Сложно о простом")
console.log(newString.originalString)
console.log(newString.cipherString)