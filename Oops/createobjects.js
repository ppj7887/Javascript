// object literal == create object manually

let Amol = {
    firstName: "Amol",
    lastName: "Nimbore",
    Age: 35,
    rollNumber: 20
}
console.log(Amol)


////////////////////////////////// function constructor ///////////////////////////////////

let Person = function (fn, ln, ag, rn) {

    this.firstName = fn
    this.lastName = ln
    this.Age = ag
    this.rollNumber = rn
    this.display = function () {
        console.log(this.firstName, this.lastName)
    }
}

let Prasad = new Person("Prasad", "Jadhav", 34, 45)
let Vikrant = new Person("Vikrant", "Bapat", 45, 34)
let Rohit = new Person("Rohit", "Shinde", 36, 20)
let Abhay = new Person("Abhay", "Kadam", 39, 66)
let Umesh = new Person("Umesh", "Shinde", 32, 18)

let friends = [Prasad, Vikrant, Rohit, Abhay, Umesh]

friends.forEach(function (el) {
    delete el.rollNumber
    el.City = "Pune"
    el.Language = "Marathi"
})
console.log(friends)

Vikrant.display()

////// create objects by creating a template to avoid repetation of similar things

// Template 

let Person2 = function (fn, ln, rn) {
    this.firstName = fn
    this.lastName = ln
    this.rollNumber = rn
    // this.display = function(){
    //     console.log(this.firstName, this.lastName)
    // }
}

// creating objects by using template

let Teju = new Person2("Tejashri", "Jadhav", 33)
let Anshu = new Person2("Anshika", "Jadhav", 44)

console.log(Teju)
console.log(Anshu)

console.log(Teju.__proto__ === Person2.prototype)
console.log(Anshu.__proto__ === Person2.prototype)

Person2.prototype.display = function () {
    console.log(this.firstName, this.lastName, this.rollNumber)
}

Teju.display()
Anshu.display()

Person2.prototype.State = "Maharashtra"
console.log(Anshu.State)
console.log(Teju.State)


let fruits = ["Apple", "Mango", "Banana"]
fruits.push("Orange")
console.log(fruits)
console.log(fruits.__proto__ === Array.prototype)

///////////////////////////////////////////////////////////////////////////////////////////

let vehicle = function (nm, co, rn, mk) {

    this.name = nm
    this.color = co
    this.regNo = rn
    this.make = mk
    // this.display = function(){
    //     console.log(this.make, this.name)
}

let honda = new vehicle("Shine", "Black", "SRN45678", "Honda")
console.log(honda)
let hero = new vehicle("Passion", "Blue", "PQR12345", "Hero")
console.log(hero)
let tvs = new vehicle("Victor", "Light Blue", "xyz0000", "TVS")
console.log(tvs)

let bikes = [honda, hero, tvs]

bikes.forEach(function (el) {
    el.Mileage = 50
})
console.log(bikes)


vehicle.prototype.display = function () {
    console.log(this.make, this.name)
}

honda.display()
hero.display()

for (key in honda) {
    console.log(key, honda[key])
}

///////////////////////////////// set method /////////////////////////////////////////


class Names {
    setName(fullName) {
        fullName = nm
    }
    setAge(Age) {
        Age = ag
    }
    setEdu(Education) {
        Education = ed
    }
    setHobbies(Hobbies) {
        Hobbies = hb
    }
}

let myName = new Names
myName.fullName = "Prasad Jadhav"
myName.Age = 34
myName.Education = "B.Com"
myName.Hobbies = ["Cricket", "Reading", "Music"]

console.log(myName)

let Anshika = new Names
Anshika.fullName = "Anshika Jadhav"
Anshika.Age = 02
Anshika.Education = "NA"
Anshika.Hobbies = ["NA"]

console.log(Anshika)

///////////////////////////////////////////////////////////////////////////////

// Class es6

class movies {

    constructor(mn, ac, act, Dr) {

        this.movieName = mn
        this.Actor = ac
        this.Actress = act
        this.Director = Dr
    }
    display() {
        console.log(this.movieName, this.Director)
    }
}

let Partner = new movies("Partner", "Salman Khan", "Lara Dutta", "David Dhawan")
let Dilwale = new movies("Dilwale", "Shahrukh Khan", "Kajol", "Rohit Shetty")
let Pk = new movies("Pk", "Amir Khan", "Anushka Sharma", "Rajkumar Hirani")
let BB = new movies("Bajrangi Bhaijaan", "Salman Khan", "Kareena Kapoor", "Kabeer Khan")

console.log(Partner)
console.log(Dilwale)
console.log(Pk)
console.log(BB)

Partner.display()
Dilwale.display()
Pk.display()
BB.display()

let allMovies = [Partner, Dilwale, Pk, BB]

let all = allMovies.forEach(function (el) {
    el.Language = "Hindi"
})
console.log(allMovies)



//////////////////////////////////// Object Create //////////////////////////////////

let house = Object.create({})
house.name = "Mai"
house.Owner = "Parshuram Jadhav"
house.location = "Near Shiv Mandir"

console.log(house)

let proto = {
    display: function () {
        console.log(this.name, this.Owner)
    }, init: function (nm, ow, lo) {
        this.name = nm
        this.Owner = ow
        this.location = lo
    }
}

let house1 = Object.create(proto)
house1.init("Ashirwad", "Anshika Jadhav", "Near Sampada Residency")
console.log(house1)

house1.display()

console.log(Pk)

//////////////////////////////////////////////

let myBike = Object.create({})
myBike.Name = "Splendor"
myBike.madeBy = "Hero"
myBike.mileage = 67

console.log(myBike)

let proto1 = {
    display:function(){
        console.log(this.madeBy, this.name)
    },
    init:function(nm,mb,ml,co){
        this.name = nm
        this.madeBy= mb
        this.mileage = ml
        this.color = co
    }
}

let Activa = Object.create(proto1)
Activa.init("Activa","Honda",36,"Brown")
console.log(Activa)
Activa.display()

house1.pincode = 411028
console.log(house1)


////////////////////////////////////////////////////////////

let pro = {
    init:function(nm,ln,ag){
        this.name = nm
        this.lastname = ln
        this.age = ag
    },
    display:function(){
        console.log(this.name, this.lastname)
    }
}

let Vicky = Object.create(pro)
Vicky.init("vikrant","Bapat",45)
console.log(Vicky)
Vicky.display()