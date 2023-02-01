////////////////////////////////////////// map array ///////////////////////////////////////

// you can add, deduct, multiply, substact value with the help  of this array

let aa1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ab1 = aa1.map(function (el, index, arr) {
    return el * 6
})
console.log(ab1)

let aa2 = [11, 23, 4, 67, 34, 56, 98.12]
let ab2 = aa2.map(function (el, index, arr) {
    return el + 2
})
console.log(ab2)



/////////////////////////////////////// filter array ////////////////////////////////////////

let aa3 = [23, 45, 12, 33, 11, 87, 44, 90, 57]
let ab3 = aa3.filter(function (el, index, array) {
    return el < 55
})
console.log(ab3)

let aa4 = [1, 22, 17, 44, 51, 89, 51, 40, 12]
let ab4 = aa4.filter(function (el, index, arr) {
    return el > 23
})
console.log(ab4)


//////////////////////////////////////// some array /////////////////////////////////////////

let aa5 = [12, 34, 67, 12, 78, 30, 82, 59]
let ab5 = aa5.some(function (el, index, arr) {
    return el < 34
})
console.log(ab5)

let aa6 = [11, 9, 33, 36, 70, 12, 47, 50, 1, 112, 97]
let ab6 = aa6.some(function (el, index, arr) {
    return el > 100
})
console.log(ab6)


///////////////////////////////////////// every array ///////////////////////////////////////

let aa7 = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99]
let ab7 = aa7.every(function (el, index, arr) {
    return el < 10
})
console.log(ab7)

let aa8 = [24, 45, 12, 90, 56, 30, 29, 11, 54, 20, 48, 77, 13]
let ab8 = aa8.every(function (el, index, arr) {
    return el > 10
})
console.log(ab8)


//////////////////////////////////////// find array //////////////////////////////////////////

let aa9 = [43, 67, 80, 45, 27, 65, 10, 96, 112, 987]
let ab9 = aa9.find(function (el, index, arr) {
    return el > 10
})
console.log(ab9)

//////////////////////////////////////// findindex array /////////////////////////////////////

let aa10 = [23, 43, 56, 51, 70, 63, 93, 81, 10, 37, 50]
let ab10 = aa10.findIndex(function (el, index, arr) {
    return el > 10
})
console.log(ab10)

/////////////////////////////////////////// forEach /////////////////////////////////////////

// let country = ["India", "Australia", "England", "New zeland"]
//     let ccb =        country.forEach(function(el,index,arr){
//                console.log("Welcome " + el) 
//             })
//             console.log(ccb)


//////////////////////////////////////// reduce() ///////////////////////////////////////////

let ax = [11, 22, 33]  // 66
// let rax = ax.reduce(function(acc,el,index,arr){
//     return acc + el
// },5)
// console.log(rax)

// //ax.reduce(fn,accval)

let iii = ax.reduce(function (acc, el, index, arr) {
    return acc + el  // acc == 33
}, 200)
console.log(iii)


////////////// max value /////////////////

let arr = [2,3,4,5,73,7,8,9]

let arr1 = arr.reduce(function(el,acc){
    return el>acc? el:acc
})

console.log(arr1)

//////////////////// min value /////////////////

let arr2 = arr.reduce(function(el,acc){
    return el<acc? el:acc
})
console.log(arr2)

let total = arr.reduce(function(el,acc){
    return el + acc
})

console.log(total)






