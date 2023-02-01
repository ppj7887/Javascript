///////////////////////////////////// map() ///////////////////////////////////////////

let aa = [23, 12, 34, 55, 75, 46, 67, 22, 18, 11, 98]
let ab = aa.map(function (el, index, arr) {
    if (el % 2 === 0) {
        return "even"
    }
    else {
        return "Odd"
    }
})
console.log(ab)

///////////////////////////////////// filter() ///////////////////////////////////////////

let ab1 = aa.filter(function (el, index, arr) {
    return el % 2 === 0
}) // this will returns even numbers e.g 2,4,6,8 which can be divided by 2 fully
console.log(ab1)

let ab2 = aa.filter(function (el, index, arr) {
    return el % 2 !== 0
})  // ths will give you odd numbers such as 1,3, 13, 55, which can not be divide by two
// fully
console.log(ab2)

let ab3 = aa.filter(function (el, index, array) {
    return el > 40
})  // will returns all elements above 40
console.log(ab3)


///////////////////////////////////////// find() ///////////////////////////////////////////

let ab4 = aa.find(function (el, index, arr) {
    return el > 30
})  // will returns first element below 30 from left side
console.log(ab4)


///////////////////////////////////////// findIndex /////////////////////////////////////////

let ab5 = aa.findIndex(function (el, index, arr) {
    return el < 20
}) // will returns first index below 20 from left side
console.log(ab5)


///////////////////////////////////////// forEach /////////////////////////////////////////

let ab6 = aa.forEach(function (el, index, arr) {
    console.log(el + 10)
})  // it will add 10 in the elements and returns new elements 
console.log(ab6)


/////////////////////////////// reverse() //////////////////////////////////////

let month = ["January", "February", "March", "April", "May"]
let abc = month.reverse()
console.log(abc)  // will return you reverse elements from right


////////////////////////////// slice() ////////////////////////////////////////

let TV = ["LG", "Samsung", "Sony", "Onida", "BPL"]
console.log(TV.slice(2))
console.log(TV.slice(1, 4))
console.log(TV.slice(-4, -2))
console.log(TV.slice(1, -2)) // gives the elements as per given index


////////////////////////////// splice() /////////////////////////////////////////

// to delete the elemets from given index

console.log(TV.splice(3, 4, "Akai", "BPL India"))
console.log(TV)

// we can also replace new elements there


////////////////////////////////////////// join() ////////////////////////////////////////

// to join elements together

let name = ["Prasad", "Parshuram", "Jadhav"]
let na1 = name.join(" ")
console.log(na1)


///////////////////////////////////////// concat() /////////////////////////////////////////

let a1 = ["Anshika", "Prasad", "Jadhav"]  // to add elements from another array
let b2 = ["Tejashri", "Prasad", "Jadhav"]

let dd = a1.concat(b2)
console.log(dd)

let ee = b2.concat(a1)
console.log(ee)


////////////////////////////////////// indexOf //////////////////////////////////////////

let ppp = a1.indexOf("Prasad")
console.log(ppp)

///////////////////////////////////////// fill ////////////////////////////////////////////

// fills nnew element from given index

let ff = [23, 66, 77, 34, 54, 11, 98, 77]
let ff1 = ff.fill(500, 2, 5)
console.log(ff1)


///////////////////////////////////////// flat ////////////////////////////////////////////

// combines all sub arrays into single array

let ss = [[23, 45, 56], [44, 66, 77], [24, 67, 11]]
console.log(ss[0][1])
ss1 = ss.flat()
console.log(ss1)


let birds = ["Parrot","Crow","Sparrow","Eagle","Owl","Piegeon"]
// let birds1 = birds.splice(0,3)
// console.log(birds1)
console.log(birds)
let mm = birds.findIndex(function(el){
    return el == "Eagle"
})
console.log(mm)

// use single method to add new el at end, update Lion to LION, and delete Monkey

let animals = ["Tiger","Lion","Monkey","Zebra","Elephant"]
// adding Yak at the end
let an = animals.splice(animals.length,0,"Yak")
// console.log(animals)

// updating Lion to LION
animals.splice(animals.includes("Lion"),1,"LION")

console.log(animals)

let cap = "India"
let caps = cap.slice(1,2)
console.log(caps)


let ww = [11,22,44,55,66,77]
let w = ww.slice(1)
console.log(w)
