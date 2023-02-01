
////////////////////////// borrow //////////////////////////////

let names = {
    name: "Prasad",
    Surname : "Jadhav",
    Age: 34,
    Language: ["Hindi","Marathi","English"],
    display:function(){
        console.log(this.name, this.Surname)
    }
}
names.display()


let names1 = {
    name: "Vikrant",
    Surname: "Bapat",
    Age: 45,
    Language: ["Hindi","Marathi","English"]

}

let names2 = {
    name:"Rohit",
    Surname: "Shinde",
    Age: 37,
    Language: ["Hindi","Marathi","English"]
}


//// bind method////

let abc = names.display

let qqq = abc.bind(names1)
qqq()

let rr = abc.bind(names2)
rr()


////////////////////////////////////////////////

let james = {
    firstName: "James",
    lastName: "Bond",
    display:function(){
        console.log(this.firstName, this.lastName)
    }
}

let harry = {
    firstName:"Harry",
    lastName:"Potter",
}

let tom = {
    firstName: "Tom",
    lastName: "Cruise"
}
james.display()

let mm = james.display

let aa = mm.bind(tom)
aa()

let bb = mm.bind(harry)
bb()

//////////////// call method //////////////////////////

mm.call(harry)
mm.call(tom)
mm.call(james)


///////////////////////// apply method ///////////////////

mm.apply(harry)
mm.apply(james)
mm.apply(tom)


//////////////////////////////////////////////////////////////////////////////


let mobile = {
    brand:"Samsung",
    modelNo:"M32",
    display:function(){
        console.log(this.brand, this.modelNo)
    }
}

let mobile1 = {
    brand:"RedMi",
    modelNo:"note 10 Pro"
}

let mobile2 = {
    brand: "realme",
    modelNo:"9 Pro"
}

///////////////////// bind method //////////////////////////

let mob = mobile.display

let mob1 = mob.bind(mobile1)
mob1()

let mob2 = mob.bind(mobile2)
mob2()


/////////////////////////////// call method ///////////////////////////////

mob.call(mobile1)
mob.call(mobile)
mob.call(mobile2)

/////////////////////////////// apply method /////////////////////////////

mob.apply(mobile)
mob.apply(mobile2)
mob.apply(mobile1)


///////////////////////////////////////////////////////////////////////////////////////


let vehicle = {
    name: "Shine",
    madeBy: "Honda",
    regNo: "MFG33333",
    display:function(){
        console.log(this.madeBy, this.name, this.regNo)
    }
}

let vehicle1 = {
    name: "Pulsar",
    madeBy: "Bajaj",
    regNo: "MFG44444"
}

let vehicle2 = {
    name: "Splendor",
    madeBy: "Hero",
    regNo: "MFG11111"
}

let veh = vehicle.display

////////////////////////////// bind method ////////////////////////////////

let veh1 = veh.bind(vehicle1)
veh1()

let veh2 = veh.bind(vehicle)
veh2()

let veh3 = veh.bind(vehicle2)
veh3()


/////////////////////////////// call method /////////////////////////////////

veh.call(vehicle2)
veh.call(vehicle)
veh.call(vehicle1)


/////////////////////////////// apply method /////////////////////////////////

veh.apply(vehicle)
veh.apply(vehicle2)
veh.apply(vehicle1)



/////////////////////////////////////////////////////////////////////////////////////


let cars = {
    name: "Audi",
    Model: "Q3",
    display:function(){
        console.log(this.name, this.Model)
    }
}
cars.display()

let cars1 = {
    name: "Maruti",
    Model: "Ritz"
}

let cars2 = {
    name: "Jaguar",
    Model: "Desire"
}

let car = cars.display

////////////////////////////// bind /////////////////////////////////

let car1 = car.bind(cars1)
car1()

let car2 = car.bind(cars2)
car2()

///////////////////////////////// call //////////////////////////////////////////

car.call(cars1)
car.call(cars)
car.call(cars2)


//////////////////////////////////////////////////////////////////////////////////////


let bikes = {
    name:"Shine",
    madeBy: "Honda",
    YOM : 2011,
    display:function(){
        console.log(this.name, this.madeBy, this.YOM)
    }
}

let bikes1 = {
    name: "Passion",
    madeBy: "Hero",
    YOM: 2016
}

let bikes2 = {
    name: "Boxer",
    madeBy: "Bajaj",
    YOM: 2012
}

let bike = bikes.display

/////////////////////////////////// call //////////////////////////


bike.call(bikes1)
bike.call(bikes2)
bike.call(bikes)

////////////////////////////////// bind /////////////////////////////////

let b1 = bike.bind(bikes1)
b1()


//////////////////////////////////////////////////////////////////////////

let country = {
    name: "India",
    capital: "Delhi",
    display:function(){
        console.log(this.name,this.capital)
    }
}
let country1 = {
    name:"pakistan",
    capital:"Islamabad"
}

let country2 = {
    name:"Sri Lanka",
    capital: "Colombo"
}


let desh = country.display

////////////////////// bind //////////////////////

let desh1= desh.bind(country1)
let desh2 = desh.bind(country2)
desh1()
desh2()

///////////////////////////////// call ///////////////////////////////////

desh.call(country1)
desh.call(country)


////////////////////////////////////////////////////////////////////////

let TV = {
    name: "Onida",
    type: "LCD",
    display:function(){
        console.log(this.name, this.type)
    }
}

let MTV = TV.display
    
let TV1 = {
    name: "Samsung",
    type: "LED"
}

let TV2 = {
    name: "Sony",
    type: "LCD"
}

/// bind method

let MTV1 = MTV.bind(TV1)
MTV1()

/// 
MTV.call(TV2)


//////////////////////////////////////////////////////////////////////////////////////////

let State = {
    name: "Maharashtra",
    capital: "Mumbai",
    display:function(){
        console.log(this.name, this.capital)
    }
}

let states = State.display

let State1 = {
    name: "Karnataka",
    capital: "Banglore"
}

let State2 = {
    name: "Gujrat",
    capital: "Luckhnow"
}

/////////////////////////////////// bind method ///////////////////////////////

let s1 = states.bind(State1)
s1()
let s2 = states.bind(State2)
s2()


//////////////////////////////////////// call //////////////////////////////////////

states.call(State1)
states.call(State2)
states.call(State)


let pc = {
    name: "Lenovo",
    type: "I5",
    display:function(){
        console.log(this.name, this.type)
    }
}

let pc1 ={
    name: "HP",
    type: "I7"
}

let pc2 = {
    name: "Acer",
    type: "P4"
}

let com = pc.display

let com1 = com.bind(pc1)
com1()

com.call(pc2)


//////////////////////////////////////////////////////////////////////////////////

// call

let myName = {
    name: "Prasad",
    lastName: "Jadhav",
    Age: 34,
    display: function(){
        console.log(this.name, this.lastName)
    }
}

let ab = myName.display

let myName1 = {
    name: "Vikrant",
    lastName: "Bapat",
    Age: 45,
   
}

let myName2 = {
    name: "Rohit",
    lastName: "Shinde",
    Age: 36,
    
}

ab.call(myName1)
// console.log(ab1)

/////////////// bind
 
let m1 = ab.bind(myName2)
m1()


let person = {
    name:"Prasad",
    Age: 35,
    getAge: function(){
        console.log(this.name , this.Age)
    }
}

let person1 = {name:"Vikrant", Age:45}

person.getAge.call(person1)

let person2 = {
    name: "Prasad"
}

function say(greet){
    console.log(greet, `${this.name}`)
}

say.call(person2, "Welcome")
say.apply(person2, ["Hello"])

//Method 1: Convert the keys to Array using - Object.keys()
let p1 = Object.keys(person1)

// Method 2 Converts the Values to Array using - Object.values()
let p2 = Object.values(person1)
console.log(p1)
console.log(p2)

// Method 3 Converts both keys and values using - Object.entries()
let p3 = Object.entries(person1)
console.log(p3)


