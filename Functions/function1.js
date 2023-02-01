// function declaration

// function add(x,y){
//     return x+y
// }
// let addition = add(12,12)
// console.log(addition)

// // function expression

// let add2 = function(x,y){
//     return x+y
// }
// let addition1 = add2(13,12)
// console.log(addition1)

// arrow function

let add3 = (x, y) => {
    return x + y
}
let additonal2 = add3(11, 11)
console.log(additonal2)

// function as a parameter to another

let add4 = function (a, b) {
    return a + b
}
function additional(pq) {
    //      pq = function(a,b){
    //         return a+b
    //  }
    let rr = pq(12, 14)
    return rr
}

let additionOne = additional(add4)
console.log(additionOne)




let add6 = function (c, d) {
    return c + d
}
function addition(fn) {
    // fn = function(c,d){
    //     return c+d
    // }
    let rr = fn(12, 6)
    return rr
}
let additionTwo = addition(add6)
console.log(additionTwo)


let add7 = function (y, z) {
    return y + z
}
function addOne(RR) {
    //     RR = function(y,z){
    //     return y+z
    // }
    let MM = RR(46, 56)
    return MM
}
let uu = addOne(add7)
console.log(uu)

let Prasad = function (s, t) {
    return s - t
}
function India(ind) {
    bb = ind(34, 26)
    return bb
}
let Vijay = India(Prasad)
console.log(Vijay)

/// array as parameter

let fruits = ["apple", "grapes", "orange", "babana"]

function bestfruits(fruit) {
    let mm = fruit.splice(0, 2, "chikoo", "watermelon")
    return mm
}
let mn = bestfruits(fruits)
console.log(mn)
console.log(fruits)

// object as a parameter to function

let info = {
    name: "Anshika Jadhav",
    Age: 02,
    Gender: "Female"

}
function maidenName(myName) {
    myName.age = 03
    return myName
}
let vv = maidenName(info)
console.log(vv.age)


/// array function

let mob = ["nokia", "samsung", "redMi", "oppo", "vivo"]

function mobile(add) {
    let m1 = add.push("micromax")
    return m1
}
let m2 = mobile(mob)
console.log(m2)
console.log(mob)



let bikes = {
    name: "Victor",
    madeBy: "TVS"
}

function myBike(veh) {
    veh.MFG = 2020
    return veh
}
let bikes1 = myBike(bikes)
console.log(bikes1)


////////////////////////////////////////////////////////////////////////////

let canDrive = true

function eligible(can){
    if(can){
        return("You can drive")
    }
    else{
        return("You can not drive")
    }
}
let abc = eligible(canDrive)
console.log(abc + " but your age should be mimimum 18 years completed")



// function to count vovels

function countVovels(string){
    let vovels = ['a','e','i','o','u']
    let count = 0
    string.split("")
    .forEach(function(el){
        if(vovels.includes(el)){
            count = count +1
            console.log(el)
        }
    })
    return count
}
console.log(countVovels("i love my india"))


/// function to remove space from word

function removeSpace(word){
    return word.split(" ")
    .join("")
}
console.log(removeSpace("ahmed nagar"))

// function to print string in reverse

function reverseString(string){
    return string.split(" ")
    .map(function(el){
        return el.split("").reverse().join("")
    }).join(" ")
}
console.log(reverseString("try try but dont cry"))

/// function to remove duplicates from array

let arr = [1,2,4,1,5,2,6,5,9,8,3,4]

function removeDuplicates(array){
    return new Set(array)
}
console.log([...removeDuplicates(arr)])

