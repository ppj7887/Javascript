// function declaration

function addition(x, y) {
    return x - y
}
let a = addition(34, 6)
console.log(a)

// function expression

let a1 = function (x, y) {
    return x + y
}
let a2 = a1(12, 8)
console.log(a2)

// arrow function

let a3 = (x, y) =>
    x + y
let a4 = a3(1, 7)
console.log(a4)

// function as a parameter to another function

let a5 = function (x, y) {
    return x + y
}
function ind(mah) {
    let a6 = mah(34, 6)
    return a6
}
let a7 = ind(a5)
console.log(a7)


// string as a parameter to function

function animal(king) {
    return "Tiger " + king
}
let a8 = animal("is the king of all animals")
console.log(a8)

// array as a parameter to function

let marks = [25, 34, 56, 90, 43, 56, 34, 45.78]
let students = []
function result(abc) {
    let ab = abc.map(function (el) {
         if (el > 35) {
            students.push(el)
            console.log("Pass")
        }
        else {
            console.log("fail")
        }

    })
}
result(marks)
console.log(students)


// object as a parameter to function

let vehicle = {
    name: "shine",
    color: "black"
}
function bike(ttt) {
    ttt.color = "brown"
    return ttt
}
let a12 = bike(vehicle)
console.log(a12.color)


// boolean as a parameter to function

function canDrive(value) {
    if (value) {
        console.log("you can drive")
    }
    else {
        console.log("you can not drive")
    }
}
canDrive(true)


// array as a parameter to function

let num2 = [12, 13, 34, 56, 77, 21, 96, 12, 35]

function bestFive(five) {
    let rr = five.slice(2, 4)
    return rr
}
let cc = bestFive(num2)
console.log(cc)
console.log(num2)


// object as a parameter to function

let movie = {
    name: "Kick",
    actor: "Salman Khan"
}
function bestMovie(great) {
    great.name = "Ready"
    return great
}
let kk = bestMovie(movie)
console.log(kk.name)
console.log(movie)


// function as a parameter to another

let ppp = function (a, b) {
    return a - b
}
function qqq(ccc) {
    let ddd = ccc(56, 44)
    return ddd
}
let eee = qqq(ppp)
console.log(eee)



//////




