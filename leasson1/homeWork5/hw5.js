const firstFunc = (array, callback) => {
    const outputOfCallback = callback(array)
    return `New Value: ${outputOfCallback}` 
}

const hendler1 = array => {
    return array.reduce((acc, elem, index, arr) => {
        const lowerCasedElem = elem.toLowerCase()
        const firstUpperChar = elem[0].toUpperCase()
        const output = firstUpperChar + lowerCasedElem.slice(1)

        acc += output

        return acc
    }, "")
}

const hendler2 = array => {
    return array.reduce((acc, elem) => {
        const multiply = elem*10

        acc += multiply + " "

        return acc
    }, "")
    
}

const hendler3 = array => {
    return array.reduce((acc, elem) => {
        acc += `${elem.name} is ${elem.age}, `

        return acc
    }, "")
}

const hendler4 = array => {
    return array.reduce((acc, elem) => {
        const reversedStr = elem.split('').reverse().join('')
        acc += reversedStr + " "

        return acc
    }, "")   
}

console.log(
    firstFunc(['my', 'name', 'is', 'danil'], hendler1)
)

console.log(
    firstFunc([10, 20, 50, 100], hendler2)
)

console.log(
    firstFunc([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}], hendler3)
)

console.log(
    firstFunc(['my', 'name', 'is', 'danil'], hendler4)
)

const every = (array, callback) => {
    return array.reduce((acc, elem) => {
        if(!callback(elem)) {
            acc = false
        }
        return acc
    }, true)
}

console.log(
    every(
        [1,1,2],
        elem => elem === 1
    )    
)

const returnNumber = array =>{
    return array.map(elem => {
        return {
            digit: elem,
            odd: elem % 2 !== 0
        }
    })
}

console.log(returnNumber([1,2,3]))

console.log(
    [1, 2, 3, 0].some(elem => elem === 0)
)

console.log(
    ['yes', 'hello', 'no', 'easycode', 'what'].some(elem => elem.length > 3)
    )
const splitSentence = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

const joinSentence = array => {
    const sortedArray = array.sort((a, b) => {
        if(a.index > b.index) return 1
        if(a.index < b.index) return -1
        if(a.index === b.index) return 0
    } )
    
    return sortedArray.reduce((acc, elem) => {
        acc += elem.char

        return acc
    }, '')
}
console.log(joinSentence(splitSentence))

const arraySorting = [[14, 45],  [1],  ['a', 'c', 'd']];
console.log(arraySorting.sort());

const arrayOfObject = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]
const sortingByCores = array => array.sort((a, b) => {
    if(a.info.cores > b.info.cores) return 1
    if(a.info.cores < b.info.cores) return -1
    if(a.info.cores === b.info.cores) return 0
} )

console.log(
    sortingByCores(arrayOfObject)
)

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

const filterProducts = (array, minPrice, maxPrice) => {
    const filteredProducts = array.filter(product => product.price >= minPrice && product.price <= maxPrice)
    return filteredProducts.sort((a, b) => {
        if(a.price > b.price) return 1
        if(a.price < b.price) return -1
        if(a.price === b.price) return 0 })
}

console.log(filterProducts(products, 0, 64))