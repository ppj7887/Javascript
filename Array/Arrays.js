let names = ["Prasad", "Vikrant", "Abhay", "rohit"]
console.log(names)
console.log(names.length)
console.log(names[3])
console.log(names.unshift("Amol"))
console.log(names)
console.log(names.pop())
console.log(names)
console.log(names.shift())
console.log(names.push("Kailash"))
console.log(names)
console.log(names.includes("Vikrant"))
console.log(names.reverse())
console.log(names.sort())
console.log(names.slice(0, 2))
console.log(names.splice(0, 2, "Amit", "Nilesh"))
console.log(names)

let names2 = ["Ashish", "Sujit", "Rahul", "Anil"]
console.log(names2.join(" "))

console.log(names.concat(names2))

let aa2 = [[2, 4, 6], [8, 10, 12], [14, 16, 18]]
let aa3 = aa2.flat()
console.log(aa3)

let aa4 = [12, 45, 55, 56, 23, 78]
let aa5 = aa4.fill(200, 1, 4)
console.log(aa5)

///////////////////////////////////////////////////////////////////////////////////////////////


let numbers = [23, 56, 44, 57, 11, 42, 92, 33, 20, 67, 90]
let aa1 = numbers.map(function (el, index, arr) {
    if (el % 2 === 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
})
console.log(aa1)

let am2 = numbers.filter(function (el, index, arr) {
    return el % 2 == 0
})
console.log(am2)

let am1 = numbers.find(function (el, index, arr) {
    return el % 2 !== 0
})
console.log(am1)

let am3 = numbers.some(function (el, index, arr) {
    return el % 2 == 0
})
console.log(am3)

let am4 = numbers.findIndex(function (el, index, arr) {
    return el % 3 == 0
})
console.log(am4)

let am5 = numbers.reduce(function (acc, el) {
    return acc + el
}, 100)
console.log(am5)


/////////////////////////// loops ////////////////////////

let a1 = [23, 45, 45, 67, 23, 67]
for (let i = 0; i < a1.length; i++) {
    console.log(i)
    console.log(a1[i])
}

let bikes = ["Shine","Pulsar","Unicorn","Splendor"]
let b1 = bikes.push("Victor")
console.log(bikes)
console.log(bikes.length)
console.log(b1)

let aaa = bikes.splice(1,2, "ABC", "XYZ")
console.log(aaa)
console.log(bikes)

let maps = bikes.map(function(el){
    return "Honda" + el
})
console.log(maps)
let join = maps.join(" ").toLowerCase()
console.log(join)