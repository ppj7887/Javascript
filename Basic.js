let a = 1
console.log(a)
a = 13
console.log(a)

const x = 2
console.log(x)

let w = 22
let v = 45

console.log(w + v)
console.log(w - v)
console.log(w * v)

function aa() {
    console.log(3 + 3)
}
aa()

function bb(m, n) {
    console.log(m + n)
    console.log(m - n)
    console.log(m * n)
}
bb(26, 6)

function cc(p, q) {
    return p - q
}
let zz = cc(34, 14)
console.log(zz + zz)
console.log(zz * 6)
console.log(zz % 4)

console.log(7 === 7 && 5 != 5)
console.log(4 == 4 || 5 > 10)

for (let tt = 0; tt <= 10; tt++) {
    console.log(tt)
    if (tt === 8) {
        break
    }
}

// function as a parameter to another function

let abc = function (x, y) {
    return x + y
}
function pqr(cd) {
    //         cd = function(x,y){
    //         return x+y
    // }
    let omg = cd(12, 8)
    return omg
}
let add1 = pqr(abc)
console.log(add1)



let aaa = function (a, b) {
    return a + b
}
function bbb(cc) {
    cc = function (a, b) {
        return a + b
    }
    let dd = cc(16, 8)
    return dd
}
let qq = bbb(aaa)
console.log(qq)


let add3 = function (c, d) {
    return c - d
}
function addOne(audi) {
    // audi = function(c,d){
    //     return c-d
    // }
    let ritz = audi(33, 11)
    return ritz
}
let swift = addOne(add3)
console.log(swift)



// for(let abc =10; abc>=0; abc--){

//     if(abc == 6){
//         break
//     }
//     console.log(abc)
// }

// let a4 = 10
// while(a4>=0){
//     if(a4==3){
//         continue
//     }
//     console.log(a4)
//     a4--
// }

// let Car = function(l,m){
//     return l-m
// }
// function Addon(Add1, Addon2){
//     // Add1 = function(l,m){
//     //     return l-m
//     // }
//     let Add2 = Add1(54,32)
//     let Add6 = Addon2(34,56)
//     return Add2, Add6
// }
// let Add3 = Addon(Car)
// console.log(Add3)


let Anshika = function (o, p) {
    return o + p
}
function Teju(Pillu) {
    let oo = Pillu(34, 56)
    return oo
}
let kk = Teju(Anshika)
console.log(kk)

// string use as a parameter

let bc = function (Opinion) {
    return "Anshika " + Opinion
}
let kl = bc("is a naughty girl")
console.log(kl)


// function used as parameter to another

let flower = function (k, l) {
    return k - l
}
function jasmin(rose) {

    let qq = rose(23, 6)
    return qq
}
let qq1 = jasmin(flower)
console.log(qq1)

var a11 = 90

function numberOne() {
    a11 = 34
    console.log(a11)
}
numberOne(a11)
console.log(a11)


/////////////////

let a1 = 4

function myFunction() {
    return a1 * a1
}
let dd = myFunction()
console.log(dd)


let count = 0

function add() {
    // let count = 0
    console.log(count = count + 1)
}
add()
add()
add()

let sum = 300

function totalSum() {
    sum = 200
    return (sum + 10)
}
let sum1 = totalSum()
console.log(sum1)


function counterOne() {
    let counter = 0
    counter = counter + 1
    return counter
}
counterOne()

// function to count vovels

function countVovels(string) {

    let vovels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let i = 0; i < string.length; i++) {
        if (vovels.includes(string[i])) {
            count = count + 1
            console.log(string[i])
        }
    }
    return count
}

let vov = countVovels("ahmendnagar")
console.log(vov)



// function change case of first letter of string to uppercase

function changeCaseToUpper(string) {

    let newsTring = string.split(" ")
    let string1 = []

    for (let i = 0; i < newsTring.length; i++) {
        string1.push(newsTring[i].charAt(0).toUpperCase() + newsTring[i].slice(1))
    }
    return string1.join(" ")
}

let india = changeCaseToUpper("i love my india")
console.log(india)

var ab = bc = 5

console.log(bc)
