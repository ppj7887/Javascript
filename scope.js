// function expression

let name = function (x, y) {
    return x + y
}
let name1 = name(13, 14)
console.log(name1)


// function declaration

function India(x, y) {
    return x - y
}
let i1 = India(56, 33)
console.log(i1)


// arrow function

let i2 = (x, y) => {
    return x + y
}
let a1 = i2(24, 12)
console.log(a1)


// --------------------------------------------------------//

// Lexical scope

function addition() {
    let x = 56
    let y = 20
    console.log(x + y)

    function addition1() {
        let a = 34
        let b = 12
        console.log(a - b)

        function addition2() {
            console.log(x + y + a - b)
            let c = 44
            let d = 24
            console.log(c + d)
        }
        addition2()
    }
    addition1()
}
addition()

// closures

function addition3(a1, b1) {
    return a1 + b1
    console.log(a1 + b1)
}
let add1 = addition3(14, 24)
console.log(add1)
console.log(add1 + add1)

// encapsulation

function addition4() {
    let m = 45
    let n = 34
    return function () {
        console.log(m + n)
    }
}
let add2 = addition4()
console.log(add2)
add2()


// var is a 

{
    var a = 1000
    console.log(a)
}
console.log(a)

// let is a blocked scope
// constant is also a blocked scope

// {
//     let b = 134
//     console.log(b)
// }
// console.log(b)

// const

// {
//     const p = 234
//     console.log(p)
// }
// console.log(p)

// programm 1

var m = 433
let n = 490
function addition5() {
    console.log(m)
    console.log(n)
    m = 233
}
addition5()
console.log(m)
console.log(n)

// programm 2

var c = 300
let d = 700

function add7() {
    var c = 299
    console.log(d)
    console.log(c)
    d = 560
}
add7()
console.log(d)


//// programm 3

var h = 457

function add7() {
    h = 455
    // console.log(h)
    h = 679
    console.log(h)
}
console.log(h)
add7()

/////////////////////////////////////////////////////////////////////////////////

function m1() {
    let a1 = 33
    let a2 = 22
    console.log(a1 + a2)

    function m2() {
        let b1 = 11
        let b2 = 12
        console.log(b1 + b2)
        console.log(a1 + b1)
    }
    m2()
}
m1()


///

function add() {
    let v = 34
    let w = 11
    return function () {
        console.log(v + w)
    }
}
let q1 = add()
console.log(q1)
q1()


///////////////////////////// var ///////////////////////////////////

var aa = 34
let bb = 78

function addOne() {
    aa = 450
    // console.log(aa)
    aa = 575
    // console.log(aa)
    // console.log(bb)
}
console.log(aa)
// addOne()
// console.log(aa)

var cc = 96
// let cc = 33
function allSet() {
    let cc = 67
    console.log(cc)
}
allSet()
console.log(cc)


//// closures

function addMe() {
    let ab = 34
    let ba = 45

    return function () {
        console.log(ab + ba)
    }
}
let a11 = addMe()
a11()



//////////////////////////////// lexical scope

function addOne() {
    let a = 10
    let b = 20
    console.log(a + b)

    function addTwo() {
        let c = 23
        let d = 34
        console.log(c + d)

        function addThree() {
            let e = 45
            let f = 67
            console.log(a + f + d + e)
            console.log(e - f)
        }
        addThree()
    }
    addTwo()
}
addOne()


getTotal()
function getTotal(){
    console.log( 12+ 24)
}

function addition4() {
    let m = 45
    let n = 34
    return function () {
        console.log(m + n)
    }
}
let add4 = addition4()
console.log(add4)
add4()