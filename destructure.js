// array unpack  === destructure

// programm 1

let arr = [12, 14, 15, 45]

let [a, b, c, d] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// programm 2

let name = [['anshika', 'prasad'], ['tejashri', 'vijay']]

let [[aa, bb], [cc, dd]] = name
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

// programm 3 object

let info = {
    firstName: "Prasad",
    lastName: "Jadhav",
    Age: 34
}

let { firstName: fn, Age: ag, lastName: ln } = info

console.log(fn)
console.log(ag)
console.log(ln)

// programm 4   object inside array

let names = [
    {
        name: "Vikrant",
        surname: "Bapat",
        Age: 45
    },
    {
        name: "Rohit",
        surname: "Shinde",
        Age: 38
    }
]

let [{ name: f1, surname: f2, Age: a1 }, { name: g1, surname: g2, Age: g3 }] = names

console.log(f1)
console.log(f2)
console.log(a1)
console.log(g1)
console.log(g2)
console.log(g3)


// programms 5 arrays inside object

let lang = {
    Prasad: ["Hindi", "Marathi", "English"],
    Vikrant: ["English", "Japnese", "french"]
}

let { Prasad: [m1, m2, m3], Vikrant: [x1, x2, x3] } = lang

console.log(m1)
console.log(m2)
console.log(m3)
console.log(x1)
console.log(x2)
console.log(x3)


// programm 6  object inside object

let family = {
    Father: {
        firstName: "Parshuram",
        lastName: "Jadhav"
    },
    Mother: {
        firstName: "Shobha",
        lastName: "Jadhav"
    }
}
let { Father: { firstName: fn1, lastName: fn2 }, Mother: { firstName: fn3, lastName: fn4 } } = family

console.log(fn1)
console.log(fn2)
console.log(fn3)
console.log(fn4)


/// array

let vegi = ["Potato", "Brinjal", "Cabbage", "Tomato"]

let [xx, yy, zz, qq] = vegi
console.log(xx)
console.log(qq)
console.log(yy)
console.log(zz)

// object

let temple = {
    name: "Siddhivinayak",
    Place: "Mumbai"
}

let { name: b1, Place: b2 } = temple
console.log(b1)
console.log(b2)

// array inside object

let hobbies = {
    Prasad: ["Reading", "Swimming", "Music"],
    Vikrant: ["Jogging", "Writing", "Travelling"]
}
let { Prasad: [ab, bc, cd], Vikrant: [p1, q1, r1] } = hobbies
console.log(ab)
console.log(r1)

// object inside array

let TV = [
    {
        name: "SONY",
        madeIn: "Japan"
    },
    {
        name: "Onida",
        madeIn: "India"
    },
    {
        name: "Samsung",
        madeIn: "South Korea"
    }
]
let [{ name: uu, madeIn: ll }, { name: ff, madeIn: hh }, { name: ww, madeIn: ii }] = TV

console.log(ii)
console.log(ff)

// object inside object

let myFamily = {
    parents: {
        father: "Parshuram",
        mother: "shobha",
        sister: "Puja"
    }
}
let { parents: { father: fa, mother: mo, sister: si } } = myFamily

console.log(si)
console.log(fa)
console.log(mo)


////////////////////////////////////////////////////////////////////////////////////

let array = ["Vicki","Pappu","Niki"]
let [c1,e1,d1] = array
console.log(c1)
console.log(e1)
console.log(d1)

let num = [[12,13,14],[15,16,17],[18,19,20]]
let[[ax,ay,az],[bx,by,bz],[cx,cy,cz]] = num

console.log(ax)
console.log(cz)
console.log(by)

let family1 = {
    father:{
        name:"Parshuram",
        Age: 65
    },
    mother:{
        name:"Shobha",
        Age: 56
    },
    Wife:{
        name:"Tejashri",
        Age:29
    }
}

let {father:{name:pp1,Age:pp2},mother:{name:pp3,Age:pp4},Wife:{name:pp5,Age:pp6}} = family1

console.log(pp4)
console.log(pp2)
console.log(pp5)

///// object inside array

let cars = [
    {
        name: "Indica",
        Brand: "Tata"
    },
    {
        name: "Swift",
        Brand:"Maruti Suzuki"
    },
    {
        name: "Polo",
        Brand:"Volkswagen"
    }
]

let [{name:cc1,Brand:cc2},{name:cc3,Brand:cc4},{name:cc5,Brand:cc6}] = cars
console.log(cc4)
console.log(cc2)
console.log(cc6)
