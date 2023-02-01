//// remove space from name

let flower = "jasm in"
let space = ""

for (let a = 0; a < flower.length; a++) {
    if (flower[a] != " ") {
        space = space + flower[a]
    }

}
console.log(space)

// reverse name

let animal = "elephant"
let rev = ""

for (let i = 0; i < animal.length; i++) {
    rev = animal[i] + rev
}
console.log(rev)

let greet = "My name is"


let myName = "Prasad Jadhav"
let myAge = 34

let stat = (`My name is ${myName}. I am ${myAge} years old`)
console.log(stat)
console.log(stat.replace("name", "fullName"))

let ad = stat.split('.')
console.log(ad)


for (let aa = 1; aa <= 100; aa++) {
    if (aa % 2 == 0) {
        console.log(aa)
    }
}
for (let ab = 2; ab <= 20; ab = ab + 2) {
    console.log(ab)
}

// function split

function advice(word) {
    let vvv = word.split(".")
    console.log(`It's your turn ${vvv[1]}`)
}
advice("Prasad.Amol.Nitin")

// array as function

let cars = ["wagnor", "ritz,", "swift"]
function Maruti(cars) {
    console.log(cars[2])
}
Maruti(cars)

// string as function

function animal3(status) {
    return "Tiger " + status
}
let king = animal3("is a king of all animals")
console.log(king)


///// remove space

let game = "footba ll"
let rem = ""

for (let mm = 0; mm < game.length; mm++) {
    if (game[mm] != " ") {
        rem = rem + game[mm]
    }
}
console.log(rem)


let family = {
    father: {
        name: "Parshuram Jadhav",
        age: 65
    },
    mother: {
        name: "Shobha Jadhav",
        age: 57
    }
}


// reverse name

let fruit = "Pineapple"
let revN = ""

for (let kk = 0; kk < fruit.length; kk++) {
    revN = fruit[kk] + revN
}
console.log(revN)

//remove space

let flowers = " jas min"
let spaces = ""

for (let i = 0; i < flowers.length; i++) {
    if (flowers[i] !== " ") {
        spaces = spaces + flowers[i]
    }
}
console.log(spaces)

// reverse 

let state = "Maharashtra"
let back = ""

for (let i = 0; i < state.length; i++) {
    back = state[i] + back
}
console.log(back)



///////////// find method

let numbers = [11, 33, 55, 32, 78, 45, 68, 89, 12, 90]
let num = numbers.reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(num)

let num1 = numbers.filter(function (el) {
    return el < 55
})
console.log(num1)

let num2 = numbers.find(function (el) {
    return el > 30
})
console.log(num2)

let num3 = numbers.some(function (el) {
    return el > 10
})
console.log(num3)

let names = ["ABC", "DEF", "GHI"]
let names1 = ["JKL", "MNO", "PQR"]

let num4 = names.join(" ")

console.log(num4)

let name1 = names.concat(names1)
console.log(name1)


////////////////////////////////////////////////////////////////////////////////////

// inheritance

class Parent {

    constructor(fn, mn, ln) {
        this.fathersName = fn
        this.mothersName = mn
        this.lastName = ln
    }
    displayFathersName() {
        console.log(this.fathersName, this.lastName)
    }
    displayMothersName() {
        console.log(this.mothersName, this.lastName)
    }
}

class Son extends Parent {
    constructor(fn, mn, ln, sn) {
        super(fn, mn, ln)
        this.sonName = sn
    }
    displaySonName() {
        console.log(this.sonName, this.lastName)
    }
}

class Daughter extends Parent {
    constructor(fn, mn, ln, dn) {
        super(fn, mn, ln)
        this.daughtersName = dn
    }
    displayDaughtersName() {
        console.log(this.daughtersName, this.lastName)
    }
}

let Bhau = new Parent("Parshuram", "Shobha", "Jadhav")
console.log(Bhau)
Bhau.displayFathersName()
Bhau.displayMothersName()

let Prasad = new Son("Parshuram", "Shobha", "Jadhav", "Prasad")
Prasad.displaySonName()
Prasad.displayFathersName()

/////////////////////////////

// Polymorphism = overloading - same class same method, different signature

class count {

    calculator(a, b, c) {
        if (a != undefined, b != undefined, c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined, b != undefined) {
            console.log(a + b)
        }
        else {
            console.log("Can not add single digit")
        }
    }
}
let cal = new count()
cal.calculator(12, 12, 12)
cal.calculator(34, 12)
cal.calculator(0)


///////////////////////////////////////////////////////////////////////////////////
// Polimorphism = overwriting = different class, same method, same signature

class Bank {

    saving() {
        console.log("Interset will be 6% per year")
    }
    loan() {
        console.log("interest will be 12% per year")
    }
}

class SBI extends Bank {

    saving() {
        console.log("interest will be 7.5% per year")
    }
    loan() {
        console.log("interest will be 13% per year")
    }
}

class PNB extends Bank {

    saving() {
        console.log("interest will be 6.5% per year")
    }
    loan() {
        console.log("interest will be 14% per year")
    }
}

let prasadAccount = new Bank()
prasadAccount.saving()

let tejuAccount = new PNB()
tejuAccount.loan()


function removeSpace(word) {
    let space = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ")
            space = space + word[i]
    }
    return space
}
let aa = removeSpace("ansh ika")
console.log(aa)


class myFamily {
    constructor(fn, mn, ln) {
        this.fathersName = fn
        this.mothersName = mn
        this.lastName = ln
    }
    displayFathersName() {
        console.log(this.fathersName, this.lastName)
    }
    displayMothersName() {
        console.log(this.mothersName, this.lastName)
    }
}

class sonName extends myFamily {
    constructor(fn, mn, ln, sn) {
        super(fn, mn, ln)
        this.sonName = sn
    }
    displaySonName() {
        console.log(this.sonName, this.lastName)
    }
}

class DaughterName extends myFamily {
    constructor(fn, mn, ln, dn) {
        super(fn, mn, ln)
        this.daughtersName = dn
    }
    displayDaughtersName() {
        console.log(this.daughtersName, this.lastName)
    }
}

let anshu = new DaughterName("Prasad", "Tejashri", "Jadhav", "Anshika")
console.log(anshu)
anshu.displayFathersName()
anshu.displayMothersName()


class worldBank {
    calculator(a, b, c) {
        if (a != undefined, b != undefined, c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined, b != undefined) {
            console.log(a + b)
        }
        else {
            console.log("can not add single digit")
        }
    }
}

let abc = new worldBank()
abc.calculator(12, 12, 12)
abc.calculator(23, 45)
abc.calculator(33)

let person = {
    name: "Prasad",
    lastName: "Jadhav",
    age: 34
}

let json = JSON.stringify(person)
console.log(json)
console.log(person)

let fruits = ["Apple", "Mango", "Banana", "Grapes"]

let myJson = JSON.stringify(fruits)
console.log(myJson)

let object = '{"name":"John", "age":30, "car":null}'
object = JSON.parse(object)
console.log(object)

function deleteSpace(word) {
    let space = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            space = space + word[i]
        }
    }
    return space
}
console.log(deleteSpace("pr asad"))
console.log(deleteSpace("ahme dnagar"))

//////////// function to reverse word

function reverseWord(word) {
    return word.split("").reverse()
        .join("")
}
console.log(reverseWord("Prasad"))
console.log(reverseWord("Ahmednagar"))


// function to remove space between word
function deleteOne(word) {
    return word.split(" ")
        .join("")
}
console.log(deleteOne("ans hika"))


// function to print string in reverse

function reverseString(string) {
    return string.split(" ")
        .map(function (el) {
            return el.split("").reverse().join("")
        }).join(" ")
}
console.log(reverseString("try try but dont cry"))
console.log(reverseString("Its my family"))


function countVovels(word) {
    let vovels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    word.split("")
        .forEach(function (el) {
            if (vovels.includes(el)) {
                count = count + 1
                console.log(el)
            }
        })
    return count
}

console.log(countVovels("Chintamani"))
console.log(countVovels("shivajinagar"))

function reverseWord(word) {
    return word.split("").reverse()
        .join("")
}
console.log(reverseWord('ahmednagar'))


function reversePrint(string) {
    return string.split(" ")
        .map((el) => {
            return el.split("").reverse().join("")
        }).join(" ")
}
console.log(reversePrint("I Love my India"))


function getVovels(string) {
    let vovels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    string.split("").forEach((el) => {
        if (vovels.includes(el)) {
            count = count + 1
            console.log(el)
        }
    })
    return count
}

console.log(getVovels("A friend in need is a friend in deed"))

class newFamily {
    constructor(fn, mn, ln) {
        this.fatherName = fn
        this.motherName = mn
        this.lastName = ln
    }
    displayFatherName() {
        console.log(this.fatherName, this.lastName)
    }
    displayMotherName() {
        console.log(this.motherName, this.lastName)
    }

}

class mySon extends newFamily {
    constructor(fn, mn, ln, sn) {
        super(fn, mn, ln)
        this.sonName = sn
    }

    displaySonName() {
        console.log(this.sonName, this.lastName)
    }
}

class myDaughter extends newFamily {
    constructor(fn, mn, ln, dn) {
        super(fn, mn, ln)
        this.daughtersName = dn
    }
    displayDaughtersName() {
        console.log(this.daughtersName, this.lastName)
    }
}

let ppj = new mySon('Parshuram', 'Shobha', 'Jadhav', 'Prasad')
console.log(ppj)
ppj.displayFatherName()
ppj.displayMotherName()
ppj.displaySonName()

function reverseName(name) {
    return name.split("")
        .reverse().join("")
}
console.log(reverseName("Prasad"))

let name = "Prasad"
let reve = ""

function reverse_name(name) {
    for (let i = 0; i < name.length; i++) {
        reve = name[i] + reve
    }
    return reve
}
console.log(reverse_name(name))

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = []
let odd = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        even.push(nums[i])
    }
    else {
        odd.push(nums[i])
    }
}

let sum = nums.reduce(function (acc, el) {
    return acc + el
})
console.log(even)
console.log(odd)
console.log(sum)