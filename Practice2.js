let colors = ["Red", "White", "Blue", "Pink"]
console.log(colors)
console.log(colors.length)
console.log(colors[2])

for (let a = 0; a < colors.length; a++) {
    console.log(a)
    console.log(colors[a])
}

// push method

let mm = colors.push("Green")
console.log(mm)
console.log(colors)
console.log(colors.length)

// unshift method

let mm1 = colors.unshift("yellow")
console.log(mm)
console.log(colors)
console.log(colors.length)

// pop method

let cc = colors.pop()
console.log(cc)
console.log(colors)

// shift method

let dd = colors.shift()
console.log(dd)
console.log(colors)

// includes method

let ee = colors.includes("Pink")
console.log(ee)
console.log(colors.length)
console.log(colors[colors.length - 1])

let pq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a1 = pq.map(function (el, index, arr) {
    return el * 2
})
console.log(a1)

// removing space in name with loop

let name = "prasa d"
let rev = ""

for (let a = 0; a < name.length; a++) {
    if (name[a] != " ") {
        rev = rev + name[a]
    }
}
console.log(rev)

// printing name in nreverse with loop

let name1 = "anshika"
let rev1 = ""

for (let b = 0; b < name1.length; b++) {
    rev1 = name1[b] + rev1
}
console.log(rev1)

// removing space

let flower = "jas min"
let space = ""

for (let d = 0; d < flower.length; d++) {
    if (flower[d] != " ") {
        space = space + flower[d]
    }
}
console.log(space)

let vovels = ['a', 'e', 'i', 'o', 'u']
let flower2 = "rose"
let count = 0

for (let xx = 0; xx < flower2.length; xx++) {
    if (vovels.includes(flower2[xx])) {
        count = count + 1
        console.log(flower2[xx])
    }
}
console.log(count)


function Addition(greet) {
    let ccc = greet.split(' ')
    console.log(`welcome ${ccc[0]} !`)
    console.log(`welcome ${ccc[1]} !`)
}
Addition("Prasad Jadhav")


/// count vovels

let pet = "Piegeon"
let sum = 0

for (let y = 0; y < pet.length; y++) {
    if (vovels.includes(pet[y])) {
        sum = sum + 1
        console.log(pet[y])
    }
}
console.log(sum)

////////////////// object creation with constructor method ///////////////////

class vehicle {

    constructor(vn, num, rn, mb) {

        this.vehicleName = vn
        this.vehicleNumber = num
        this.registrationNumber = rn
        this.madeBy = mb
    }
}

let bike = new vehicle("Shine", "MH12HP8324", "SRN0008976", "Honda")
console.log(bike)


//////////////////////////////////// destructure /////////////////////////////


let names = ["Prasad", "Vikrant", "Rohit", "Abhay"]

let [am, bm, cm, dm] = names
console.log(am)

let color = ["Green", "Yellow", "Blue", "Red"]

for (let i = 0; i < color.length; i++) {
    console.log(color[i])
}

console.log(color)
color.push("Pink")
console.log(color)
color.shift()
console.log(color)
color.splice(1, 2, "Orange", "Purple")
console.log(color)

let object = [{ name: "Prasad", Age: 34, email: "prasad.jadhav001@gmail.com" },
{ name: "Vikrant", Age: 45, email: "vikrant.bapat@gmail.com" },
{ name: "Abhay", Age: 43, email: "abhay.kadam@gmail.com" }]

console.table(object)
// console.table(names)





