// Parameters

console.log(7 === '7' && 6 == 6)
console.log(5 == 5 || 6 < 5)

// conditional statement

// let aa = 34
// if(aa>=0 && aa<35){
//     console.log("Fail")
// }
// if(aa>=35 && aa<50){
//     console.log("Second Class")
// }
// if(aa>=50 && aa<60){
//     console.log("First Class")
// }
// else{
//     console.log("Distinction")
// }

let aa = 72
if (aa >= 0 && aa < 35) {
    console.log("Fail")
}
else if (aa >= 35 && aa < 50) {
    console.log("Second Class")
}
else if (aa >= 50 && aa < 60) {
    console.log("First Class")
}
else {
    console.log("Distinction")
}

// loops


for (let ab = 0; ab <= 10; ab++) {

    console.log(ab)
}

let bb = 0
while (bb < 10) {
    console.log(bb)
    bb++
}

// let ranNumber = Math.floor(Math.random()*6)+1
// console.log(ranNumber)

// for(ab=0; ab<10; ab++){
//     let userInput = prompt("Enter the value")
//     if(ranNumber == userInput){
//         console.log("Yes you are right")
//         break
//     }
//     else{
//         console.log("you are wrong")
//     }
// }

// let userInput = prompt("Enter correct value")
// while(userInput != ranNumber){
//     userInput = prompt("Enter correct input")
//     if(ranNumber == userInput){
//         console.log("That's right")
//         break
//     }
//     else{
//         console.log("Try again")
//     }
// }

// function as parameter to another

let mm = function (c, d) {
    return c + d
}
function abc(bbb) {

    let ccc = bbb(34, 55)
    return ccc
}
let ddd = abc(mm)
console.log(ddd)

let country = ["India", "Pakistan", "Sri Lanka", "Nepal"]
console.log(country)
console.log(country.length)
console.log(country[2])

let bc = country.push("Bangladesh")
console.log(bc)
console.log(country)

let dc = country.unshift("Kenya")
console.log(dc)
console.log(country)

let db = country.pop()
console.log(db)
console.log(country)

let df = country.shift()
console.log(df)
console.log(country)

let tt = country.includes("Pakistan")
console.log(tt)

for (let de = 0; de < country.length; de++) {
    console.log(de)
    console.log(country[de])
}
////////////////////////////////////// array practice /////////////////////////////////////

let fruits = ['Orange', 'Apple', 'Mango', 'Pineapple', 'Grapes']

let fr01 = fruits.slice(2)
console.log(fr01)

let fr02 = fruits.splice(1,3)
console.log(fr02)



