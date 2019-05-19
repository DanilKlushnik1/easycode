
// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
//   }
  
//   Component.prototype.setText = function (text) { 
//     this.node.textContent = text;
//   };

class Component{
    constructor(tagName){
      this.tagName = tagName || 'div';
      this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text
    }
}

class calculator{
    constructor(){
        this.num = Number(0)
    }
    plus(a){
        this.num += a
        return this
    }
    minus(a){
        this.num -= a
        return this
    }
    mul(a){
        this.num *= a
        return this
    }
    division(a){
        this.num /= a
        return this
    }
    get value () {console.log(this.num)}
    set value (number) {this.num = number}
}
const numb = new calculator("0")
numb.value = "3"
numb.plus(1)
numb.minus(6)
numb.plus(22)
numb.mul(2)
numb.division(3)
numb.value
