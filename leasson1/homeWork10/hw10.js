
const sum = (...other) => {
  const params = Array.prototype.slice.call(other);
  if (!params.length){ return 0;}
  return params.reduce((prev, next) => { return prev + next; });
}
  
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

const rectangle = {
    width:10,
    height:15,
    getSquare: function (){
       return rectangle.width*rectangle.height
  }};
console.log(rectangle.getSquare())

const price = {
    price: 10,
    discount: '15%',
    getPrice: function(){
      return price.price
    },
    getPriceWithDiscount: function(){
      return price.price*(100-parseInt(price.discount))/100
    }
  };

console.log(price.getPrice(),price.getPriceWithDiscount())

const object = {
  height:10,
  heightUp: function (){
    return ++this.height
  }
}

console.log(
  object.height,
  object.heightUp(),
  object.height,
)

const numerator = {
  value: 1,
  double: function () {
    this.value*=2
    return this
  },
  plusOne: function () {
    ++this.value
    return this
  },
  minusOne: function () {
    --this.value
    return this
  },
}
console.log(numerator.plusOne().plusOne().minusOne().double())
console.log(numerator.value)

const product = {
  price: 67,
  quantity: 153,
  cost: function(){
    return this.price*this.quantity
  }
}

console.log(product.cost())

const detail = {
  price: 12,
  quantity: 25,
}

console.log(product.cost.call(detail))

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes))

let element = {
  height: 25,
  getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined
getElementHeight = element.getHeight.bind(element)
console.log(getElementHeight())

