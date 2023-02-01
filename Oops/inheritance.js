// class ---->
// Oops 
// Encapsulation   ---
// Inheritance  ---- we can
// Polymorphism  ---- 
// Abstraction---- typescript

// Inheritance

// Programm 1

class player {
    firstName = "Virat"
    lastName = "Kohli"
    jersyNo = 08
}

class viceCaptain extends player {
    designation = "Vice Captain"
}

class captain extends viceCaptain {
    teamCaptain = "Captain"
}
let Virat = new captain()
console.log(Virat.firstName)
console.log(Virat.designation)
console.log(Virat.teamCaptain)

///////////////

class student {
    firstName = "Vikrant"
    lastName = "Bapat"
    rollNumber = 30
    adharNo = 23456
}

class advisor extends student {
    salary = 15000
}

class manager extends advisor {
    position = "Sr Manager"
}

let Vikrant = new manager()
console.log(Vikrant)
console.log(Vikrant.position)

////////////////////////////////////////////////////////////////////////////////////

// Programm 2
// Parent constructor, no constructor in child

class myStudents {
    constructor(fn, ln, rn, ag) {
        this.firstName = fn
        this.lastName = ln
        this.rollNumber = rn
        this.age = ag
    }
}

class position extends myStudents {
    salary = 10000
}

let Anshika = new position("Anshika", "Jadhav", 33, 23)
console.log(Anshika)
console.log(Anshika.age)
console.log(Anshika.rollNumber)


////

class Teju {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.Age = ag
        this.rollNumber = rn
    }
}

class teacher extends Teju {
    salary = 10000
}

let Tejashree = new teacher("Tejashree", "Jadhav", 29, 33)
console.log(Tejashree)


//////////////////////////////////////////////////////////////////////////////////////

// Programm 3
// parent constructor + child constructor

class vehicle {
    constructor(nm, mb, MFG, co) {
        this.name = nm
        this.madeBy = mb
        this.MFGyear = MFG
        this.color - co
    }
}

class mileage extends vehicle {
    constructor(nm, mb, MFG, co, ml) {
        super(nm, mb, MFG, co)
        this.mileage = ml
    }
}

let shine = new mileage("Shine", "Honda", 2011, "Black", 50)
console.log(shine)


//////////////////////////////////////////////////////////////////////////////

class state {
    constructor(nm, ca, po) {
        this.name = nm
        this.capital = ca
        this.population = po
    }
}

class maha extends state {
    constructor(nm, ca, po, fp) {
        super(nm, ca, po)
        this.famosPoint = fp
    }
}

let Maharashtra = new maha("Maharashtra", "Mumbai", "2 Crores", "Nariman Point")
console.log(Maharashtra)
console.log(Maharashtra.population)


//////////////////////////////////////////////////////////////////////////////////////

class country {
    constructor(nm,ca,po){
        this.name = nm
        this.capital =ca
        this.population = po
    }
}

class states extends country {
    constructor(nm,ca,po,st){
        super(nm,ca,po)
        this.states = st
    }
}

let india = new states("India","Delhi","140 Crores",28)
console.log(india)


/////////////////////////////////////////////////////////////////////////////////////////////

class India{
    constructor(st,pp){
        this.state = st
        this.population = pp
    }
}

class Maha extends India{
    constructor(st,pp,ca){
        super(st,pp)
        this.capital = ca
    }
}

class Kar extends India{
    constructor(st,pp,ca){
        super(st,pp)
        this.capital = ca
    }
}

let maharashtra = new Maha("MAharashtra", 1000000,"Mumbai")
console.log(maharashtra)


let ind = new India(28, "140 crore")
console.log(ind)