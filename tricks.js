
// remove duplicates from array use new Set method as per below

let set = new Set([1, 1, 2, 3, 2, 4])
console.log(set)

let sets = new Set(["Prasad", "Vikrant", "Prasad", "Abhay"])
console.log([...sets])

/////

let fruits = ["Mango", "Apple", "Banana", "Grapes"]

let [a, b, c, d] = fruits
console.log(a, b, c, d)


// to get value of properties without useing dot notification or bracket notification

let person = { name: "Prasad", Age: 34, City: "Pune" }

let { name } = person
let { Age } = person
console.log(name, Age)

let bikes = { bikename: "Shine", MFG: "Honda", Price: 85000 }

let { bikename } = bikes
console.log(bikename)

// meege objects

// spread operator (...)
let prasad = { name: "Prasad", Age: 34, City: "Pune" }
let num = {
    Language: "Marathi", Email: "prasad.jadhav001@gmail.com", Mobile: 9156805522,
    name: "Anshika"
}
let megre = { ...prasad, ...num } // use this to merge
console.log(megre)

// Object.assign

prasad = Object.assign(prasad, num)


// compare

let aa = 1
let bb = 2

console.log(--bb === aa) // will return true as value of bb will reduce by 1 due 
// to minus sign

console.log(prasad)

//
let ab = []
let bc = []

console.log(ab === bc)

let animals = ["Lion", "Monkey", "Elephant", "Tiger", "Lion", "Fox"]
let unique = []

animals.forEach(function (el) {
    if (!unique.includes(el)) {
        unique.push(el)
    }
})
console.log(unique)

function toUpperCase(name) {
    let aa = name.split(" ")
        .map(function (el) {
            return el.toUpperCase()
        }).join(" ")
    return aa
}

let am = toUpperCase("i love my india")
console.log(am)


// function to remove duplicates from array

let vegi = ["Potato", "Tomato", "Brinjal", "Tomato", "Cabbage", "Lady Finger"]
let cars = ["WagonR", "Ritz", "Polo", "Innova", "Polo", "Ritz", "Ertiga"]
// let uniques = []

function uniqueNames(array) {
    let uniques = []
    array.forEach(function (el) {
        if (!uniques.includes(el)) {
            uniques.push(el)
        }
    })
    return uniques
}

console.log(uniqueNames(cars))

function removeDuplicates(array) {
    return new Set(array)
}
console.log([...removeDuplicates(vegi)])
console.log([...removeDuplicates(cars)])

/// remove elements from given index

let names = ["Prasad", "Vikrant", "Amol", "Abhay", "rohit", "Kailash", "nitesh"]
// suppose I want to print only first 3 names so you can tytpe as per below
// names.length = 3
console.log(names)


// swap elements

let x = [1, 2, 3];
let y = [4, 5, 6];
[x, y] = [y, x]

console.log(x)

let p = 23, q = 67;
[p, q] = [q, p]

console.log(q)

let m = 10
let n = 20
m = (m++, m++, n)
console.log(m)


/// 
let myName = {
    name: "Prasad",
    age: 34
}

Object.defineProperty(myName, 'age', {  // not to modify a particular property
    value: 34,
    writable: false
})

myName.age = 40
console.log(myName)

/// Object.seal = to prevent from adding or deleting property. but can modify property

Object.seal(myName)
myName.city = "Pune"
console.log(myName)

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

console.log(days.slice(1, 4))

console.log(prasad)

let newNum = [11,0,3,5,0,4,6,0,56] // print all 0 to right side of array
newNum.sort().reverse()
console.log(newNum)


let unique1 = [1,3,1,4,6,1,3,5,2,3]
let even = []
let odd = []

function getUnique(num){
    return new Set(num)
}

let uni = getUnique(unique1)
console.log([...uni])

for(let i =0; i<unique1.length; i++){
if(unique1[i]%2 == 0){
    even.push(unique1[i])
}
else{
    odd.push(unique1[i])
}

}
console.log(even)


let car = ["WagonR", "Ritz", "Polo", "Innova", "Polo", "Ritz", "Ertiga"]
let single = []

function uniqueElements(array){
    let unique = []
    array.forEach((el)=>{
        if(!unique.includes(el)){
            unique.push(el)
        }
    })
    return unique
}

console.log(uniqueElements(car))



