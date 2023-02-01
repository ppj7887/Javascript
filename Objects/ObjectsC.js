// how to set property at the time of object creation with
// constructor method


class movie {
    constructor(mn, rt, an, acn, sn) {

        this.movieName = mn
        this.rating = rt
        this.actorName = an
        this.actressName = acn
        this.songs = sn
    }
}

let Abc = new movie("Ek tha Tiger", 8, "Salman Khan", "Katrina Kaif", ["Laapata", "Mashaallah", "Buleya"])

Abc.director = "Kabir Khan"
console.log(Abc)

let ccc = new movie("Om Shanti Om", 7, "Shahrukh Khan", "Deepika Padukone", ["Om shanti Om", "Disco", "Aankho me"])
console.log(ccc)
ccc.Producer = "Red Chilli Entertainment"
console.log(ccc)


////////////////////////////////////////////////////////////////////////////////////////////

class house {
    constructor(hn, sn, lc, pc) {
        this.name = hn
        this.street = sn
        this.location = lc
        this.pincode = pc
    }
}

let myHome = new house("Mai", "Shiv mandir", "near sampada residency", 411028)
console.log(myHome)
myHome.owner = "Parshuram Jadhav"
console.log(myHome)

let newHome = new house("Ashirwad", "Sr.no.18", "Near Shital Stores", 413008)
console.log(newHome)
newHome.city = "Mumbai"
console.log(newHome)

///////////////////////////////////////////////////////////////////////////////////////////

class info {
    constructor(fn, ag, ed, hb, ms) {
        this.fullName = fn
        this.Age = ag
        this.Education = ed
        this.Hobbies = hb
        this.maritalStatus = ms
    }
}

let myName = new info("Prasad Jadhav", 34, "B.com", ["Reading", "Swimming", "Music"], "Married")
console.log(myName)
myName.emailid = "prasad.jadhav001@gmail.com"
myName.mobbileNumber = 9155805522
delete myName.maritalStatus
console.log(myName)

let myName1 = new info("Vikrant Bapat", 45, "M.com", ["Dancing", "Mimicary", "Reading"], "Single")
console.log(myName1)

/////////////////////////////////////////////////////////////////////////////////////////

class mobile {
    constructor(br, mn, rn, mf, pc) {

        this.brand = br
        this.modelNo = mn
        this.regNo = rn
        this.Mfgby = mf
        this.price = pc
    }
}

let handSet = new mobile("Samsung", "M32", "RMN000780", "S Korea", "16999")
console.log(handSet)

let handSet1 = new mobile("RedMi", "11 Pro", "SRT000876PQ", "China", "18499")
console.log(handSet1)

let handSet2 = new mobile("Oppo", "K10", "STRE87654IUN", "China", 14999)
console.log(handSet2)

handSet2.specification = ["5G", "Processor Snapdeal 888"]
console.log(handSet2)


///////////////////////////////////////////////////////////////////////////////////////////

class info1 {
    constructor(fi, age, ed, gd, ms, hb) {

        this.firstName = fi
        this.Age = age
        this.Education = ed
        this.Gender = gd
        this.maritalStatus = ms
        this.Hobbies = hb
    }
}

let Prasad = new info1("Prasad Jadhav", 34, "B.com", "Male", "Married", ["Swimming", "Reading", "Music"])
console.log(Prasad)
console.log(Prasad.ed)
console.log(Prasad.Hobbies[1])

////////////////////////////////////////////////////////////////////////////////////


class cars {
    constructor(cn, mb, YOM, co, ml) {

        this.carName = cn
        this.madeBy = mb
        this.year = YOM
        this.color = co
        this.mileage = ml
    }
    display() {
        console.log(this.madeBy, this.carName)
    }
}



let Audi = new cars('Q3', "Audi", 2021, "Blue", 13)
console.log(Audi)

Audi.display()


/////////////////////////////////////////////////////////////////////////////////////

// object create

let proto = {

    display: function () {
        console.log(this.firstName, this.lastName)
    }, init: function (fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.Age = ag
    }

}

let Amol1 = Object.create(proto)
Amol1.firstName = "Amol"
Amol1.lastName = "Nimbore"
Amol1.Age = 30


console.log(Amol1)

Amol1.display()
let Vikrant = Object.create(proto)
Vikrant.init("Vikrant", "Bapat", 45)
console.log(Vikrant)

let Tejashri = Object.create(proto)
Tejashri.init("Tejashri", "Jadhav", 29)
console.log(Tejashri)
Tejashri.display()


///

class myFamily{

    constructor(fn,mn,ln){
        this.fatherName = fn
        this.motherName = mn
        this.lastName = ln
    }
    displayFathersName(){
        console.log(this.fatherName, this.lastName)
    }
    displayMothersName(){
        console.log(this.motherName, this.lastName)
    }
}

let ppj = new myFamily('Parshuram','Shobha','Jadhav')
ppj.displayFathersName()
ppj.displayMothersName()
