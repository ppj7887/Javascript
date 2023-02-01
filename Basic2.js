// conditional statement

let Anshika = 35
if (Anshika >= 0 && Anshika < 35) {
    console.log("Fail")
}
if (Anshika >= 35 && Anshika < 50) {
    console.log("Pass Class")
}
if (Anshika >= 50 && Anshika < 60) {
    console.log("Second Class")
}
if (Anshika >= 60 && Anshika < 70) {
    console.log("First Class")
}
else {
    console.log("Distinction")
}

// else if

let Q = 93

if (Q >= 0 && Q < 35) {
    console.log("C Grade")
}
else if (Q >= 35 && Q < 50) {
    console.log("B Grade")
}
else if (Q > 50 && Q < 65) {
    console.log("A Grade")
}
else {
    console.log("A+")
}

if (4 < 6) {
    console.log("Yes")
}
else {
    console.log("No")
}
if (7 === 7) {
    console.log("True")
}
else {
    console.log("False")
}

//////////////////////////// for loop ////////////////////////////////////////

for (let a = 0; a <= 10; a++) {
    if (a == 6) {
        break
    }
    console.log(a)
}

/////////////////////////////////// array practice /////////////////////////////////

let movie = ["Sholay", "Don", "Agneepath", "Deewar", "Sharabi"]
let rating = [1, 2, 3, 4, 5, 6]
console.log(movie.length)
console.log(movie[movie.length - 1])
let b2 = movie.push("Namak Halaal")
console.log(b2)
console.log(movie)

let b3 = movie.reverse()
console.log(b3)

let b4 = movie.concat(rating)
console.log(b4)


let b5 = movie.indexOf("Deewar")
console.log(b5)


let aa1 = [33, 55, 21, 44, 78, 23, 13, 80, 34, 57, 56, 79, 16]
let ab1 = aa1.filter(function (el, index, arr) {
    return el > 40
})
console.log(ab1)

let ab2 = aa1.find(function (el, index, arr) {
    return el > 20
})
console.log(ab2)

let ab3 = aa1.findIndex(function (el, index, arr) {
    return el < 20
})
console.log(ab3)

let xx1 = [22, 45, 67, 34, 78, 89, 45, 20, 47, 32, 78]
let xy1 = xx1.map(function (el, index, arr) {
    return el % 2 !== 0
})
console.log(xy1)


let xy2 = xx1.filter(function (el, index, arr) {
    return el % 2 === 0
})

for (let x1 = 0; x1 < xy2.length; x1++) {
    console.log(x1)
    console.log(xy2[x1])
}

let xy3 = xx1.find(function (el, index, arr) {
    return el < 40
})
console.log(xy3)

let xy4 = xx1.every(function (el, index, arr) {
    return el < 100
})
console.log(xy4)


let Marks = 79

if (Marks >= 0 && Marks < 35) {
    console.log("Fail")
}
else if (Marks >= 35 && Marks < 50) {
    console.log("Pass Class")
}
else if (Marks >= 50 && Marks < 60) {
    console.log("Second Class")
}
else if (Marks >= 60 && Marks < 75) {
    console.log("First Class")
}
else {
    console.log("Distiction")
}


let person ={
    firstName: "Prasad",
    lastName: "Jadhav",
    Age: 34,
}

    // this.setLanguage =function(){
    //     this.lang = language
    // }


person.language = "english"
console.log(person)
delete person.language
console.log(person)
// person.displayName()

let bikeDetails = {
    getDetails: function(registratinNumber, Model){
        console.log(this.name + "Bike Details :" + registratinNumber + Model)
    }
}

let Prasad = {name:"Prasad"}

let shine = bikeDetails.getDetails.bind(Prasad, "XYZ1234", "Shine")
shine()

let cars = {
    displayCars: function(){
        console.log(this.madeBy, this.name)
    }
}

let wagonR = {
    name:"WagonR", madeBy: "Maruti Suzuki"
}

let getName = cars.displayCars.bind(wagonR)
getName()

cars.displayCars.call(wagonR)
cars.displayCars.apply(wagonR)



