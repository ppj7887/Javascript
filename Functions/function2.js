////////////////////////////// number as parameter to function ////////////////////////////////

function addition(x, y) {

    return x + y
}
let additionOne = addition(12, 8)
console.log(additionOne)

function add2(a, b) {

    return a + b
}
let additionTwo = add2(14, 4)
console.log(additionTwo)

///////////////////////// string as a parameter to function //////////////////////////////

function great(word) {
    return "welcome " + word
}
let greatOne = great("Prasad")
console.log(greatOne)

function print(name) {
    return "Prasad " + name
}
let print1 = print("Jadhav")
console.log(print1)

function Anshu(compliment) {
    return "Prasad " + compliment
}
let Teju = Anshu("is a genious")
console.log(Teju)

function Corp(Advice) {
    return "Vikrant " + Advice
}
let DLG = Corp("should work hard to get this job")
console.log(DLG)


/////////////////////////////// boolean as parameter to function/////////////////////////////

let isGraduate = true
function eligible(AA) {
    if (AA) {
        console.log("can apply")
    }
    else {
        console.log("can not apply")
    }
}
eligible(isGraduate)

// array

let names = ["Prasad", "Tejashree"]
console.log(names[1])

let fruits = ["Apple", "Orange"]
console.log(fruits[1])

////////////////////////////////// array as parameter to function //////////////////////////

let name = ["Vikrant", "Bapat"]
function printName(name) {
    console.log(name[0])
}
printName(name)

let city = ["Pune", "Mumbai"]
function largeCity(city) {
    console.log(city[1])
}
largeCity(city)

let state = ["Maharashtra", "Karnataka"]
function country(state) {
    console.log(state[1])
}
country(state)


///////////////////////////// function as a parameter to function ////////////////////////////

let abc1 = function (p, q) {
    return p - q
}
function aaa1(aaa2) {
    let abc2 = aaa2(24, 6)
    return abc2
}
let abc3 = aaa1(abc1)
console.log(abc3)


function welcome(name2) {
    return "Prasad Jadhav " + name2
}
let abd1 = welcome("is the best")
console.log(abd1)


let name2 = ["Anshika", "Jadhav"]
function naming(name2) {
    console.log(name2[1])
}
naming(name2)


let cars = ["Ritz", "Swift"]
function Maruti(cars) {
    console.log(cars[0])
}
Maruti(cars)



let god = ["Bramha", "Vishnu", "Mahesh"]
function mainGod(god) {
    console.log(god[1])
    console.log(god.push("Ganesha"))
}
mainGod(god)
console.log(god)



function Anshika(nature) {
    return "Prasad " + nature
}
dad = Anshika("is the father of Anshika")
console.log(dad)


// object used as a parameter to another function

let country1 = {
    name: "India",
    Population: "130 Crores"
}
function state1(name) {
    name.states = 28
    name.capital = "Delhi"
    delete name.Population
    return name
}
let cou1 = state1(country1)
console.log(cou1)


// string us a parameter to functin

function someOne(greet) {
    return "Anshika " + greet + " after a long time"
}
let wel = someOne("welcome Home")
console.log(wel)


// object use as a parameter to function

let house = {
    Name: "Mai",
    Owner: "Parshuram Jadhav",
    City: "Pune"
}

function myHouse(ghar) {
    delete ghar.City
    ghar.State = "Maharashtra"
    return ghar
}
let house1 = myHouse(house)
console.log(house1)

/// array as parameter

let birds = ["Crow", "Sparrow", "Parrot", "Peacock"]

function birdKing(bird) {
    bird.push("Eagle")
    bird.shift()
    bird.reverse()
    return bird
}
let myBird = birdKing(birds)
console.log(myBird)


function getTotal(a, b) {
    return a + b === 100 || a * b === 100
}
let total = getTotal(50, 50)
console.log(total)


// function to remove duplicates
 
function removeUnique(array){
    return new Set(array)
}
console.log([...removeUnique(array)])
console.log([...removeUnique(array)])





