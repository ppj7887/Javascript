let name = "Prasad"
let vovels = ["a", "e", "i", "o", "u"]
let count = 0

for (let i = 0; i < name.length; i++) {
    if (vovels.includes(name[i])) {
        count = count + 1
    }
}
console.log(count)

let fruit = "mango"
let counta = 0

for (let a = 0; a < fruit.length; a++) {
    if (vovels.includes(fruit[a])) {
        console.log(fruit[a])
        counta = counta + 1
    }
}
console.log(counta)


///////////////////////////// reverese//////////////////////////////////////

// print name reversely  prasad == dasarp

let animal = "tiger"
let rev = ""

for (let ab = 0; ab < animal.length; ab++) {
    rev = animal[ab] + rev
}
console.log(rev)

let bird = "piegeon"
let rev1 = ""

for (let ab1 = bird.length - 1; ab1 >= 0; ab1--) {
    rev1 = rev1 + bird[ab1]
}
console.log(rev1)



///////////////////////////////// find vovels ////////////////////////////////////////

let vovels1 = ["a", "e", "i", "o", "u"]
let birds = "peacock"
let count1 = 0

for (let xx = 0; xx < birds.length; xx++) {
    if (vovels1.includes(birds[xx])) {
        count1 = count1 + 1
        console.log(birds[xx])
    }
}
console.log(count1)


let birds1 = "sparrow"
let counts = 0

for (let zz = 0; zz < birds1.length; zz++) {
    if (vovels1.includes(birds1[zz])) {
        counts = counts + 1
    }
}
console.log(counts)


///////////////////////////// reverese print ///////////////////////////

let animals = "elephant"
let rev2 = ""

for (let cc = 0; cc < animals.length; cc++) {
    rev2 = animals[cc] + rev2
}
console.log(rev2)


let cities = "ahmednagar"
let reve = ""

for (let xz = 0; xz < cities.length; xz++) {
    reve = cities[xz] + reve
}
console.log(reve)


///////// vovels //////////////////

let cities1 = "nagpur"
let counta2 = 0

for (let cb = 0; cb < cities1.length; cb++) {
    if (vovels.includes(cities1[cb])) {
        counta2 = counta2 + 1
    }
}
console.log(counta2)


///////////////////////// remove space between name and print name ////////////////////////

// e.g prasa d ==> prasad

let tv = "oni da"
let vv = ""

for (let am = 0; am < tv.length; am++) {
    if (tv[am] != " ") {
        vv = vv + tv[am]
    }
}
console.log(vv)

let tv1 = "aka i"
let vv1 = ""
for (let an = 0; an < tv1.length; an++) {
    if (tv1[an] != " ") {
        vv1 = vv1 + tv1[an]
    }
}
console.log(vv1)

let planet = "mercury"
let counta1 = 0

for (let g = 0; g < planet.length; g++) {
    if (vovels.includes(planet[g])) {
        counta1 = counta1 + 1
        console.log(planet[g])
    }
}
console.log(counta1)


//// name in reverse

let star = "chandni"
let rev3 = ""

for (let ee = 0; ee < star.length; ee++) {
    rev3 = star[ee] + rev3
}
console.log(rev3)

// remove space

let flower = "Jasm in"
let space = ""

for (let mm = 0; mm < flower.length; mm++) {
    if (flower[mm] != " ") {
        space = space + flower[mm]
    }
}
console.log(space)

// name in reverse

let game = "cricket"
let rev11 = ""

for (let mn = 0; mn < game.length; mn++) {
    rev11 = game[mn] + rev11
}
console.log(rev11)

let flowers = "Lotus"
let count2 = 0

for (let vv = 0; vv < flowers.length; vv++) {
    if (vovels.includes(flowers[vv])) {
        count2 = count2 + 1
        console.log(flowers[vv])
    }
}
console.log(count2)

// reverse name

let oil = "sunflower"
let spaces = ""

for (let i = 0; i < oil.length; i++) {
    spaces = oil[i] + spaces
}
console.log(spaces)

////////////////////////////////////////////////////

let fruits = "Ora nge"
let blank = ""

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] !== " ") {
        blank = blank + fruits[i]
    }
}
console.log(blank)

///////////////////////////////////////////////////////////////


let city = "ahmednagar"
let space1 = ""

for (let i = 0; i < city.length; i++) {
    space1 = city[i] + space1
}
console.log(space1)


let country = "srilanka"
let total = 0

for(let i = 0; i<country.length; i++){
    if(vovels.includes(country[i])){
        total = total + 1
    }
}
console.log(total)




