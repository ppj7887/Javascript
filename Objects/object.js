let info = {
    firstName: "Prasad",
    lastName: "Jadhav",
    Age: 34,
    rollNumber: 23

}
console.log(info)

// retrive the object

// two types are there to update the details

// 1) .notation
// 2) bracket notation


//////////////////////////////////////// . notation ///////////////////////////////////////

// retrive the elemets

console.log(info.firstName)
console.log(info.rollNumber)


// add elements

info.city = "pune"
info.language = "Marathi"
console.log(info)

// update the elements

info.Age = 30
info.firstName = "Tejashri"
console.log(info)

// delete the elements 

delete info.Age
delete info.language
console.log(info)

for (let key in info) {
    console.log(key, info[key])
}

///////////////////////////////////// bracket notation //////////////////////////////////////////

let vehicle = {
    name: "Shine",
    color: "black",
}

// add elements

vehicle["Model"] = "Drum"
vehicle["reg"] = "en12345"
vehicle["MFG"] = 2010
console.log(vehicle)

// update elements

vehicle["color"] = "Brown"
vehicle["name"] = "activa"
console.log(vehicle)


// delete elemets

delete vehicle["color"]
delete vehicle["reg"]
console.log(vehicle)


// aaply loop

for (let key in vehicle) {
    console.log(key, vehicle[key])
}

let cars = [
    {
        name: "Innova",
        Make: "Toyota"
    }
    ,
    {
        name: "Swift",
        Make: "Maruti Suzuke"
    }
    ,
    {
        name: "i10",
        Make: "Hyundai"
    }
]
console.log(cars[0]['Make'])
console.log(cars[2]['name'])

cars[1]["name"] = "wagonR"
console.log(cars)


let movie = [
    {
        name: "Judwaa",
        hero: "Salman Khan"
    }
    ,
    {
        name: "Hero no.1",
        hero: "Govinda"
    }
    ,
    {
        name: "Zero",
        hero: "Shahrukh Khan"
    }
]
console.log(movie[2]["hero"])
console.log(movie[1]["name"])
movie[2]["name"] = "Chak De India"
console.log(movie)

let house = {
    name: "Mai",
    Address: {
        Street: "shiv mandir",
        location: " near sampada residency",
        pincode: 411028
    },
    owner: "Parshuram Jadhav",
    Age: 65
}

house.name = ("Sai")
house.Address.Street = ("mahadev mandir")
console.log(house)
house.city = (18)
console.log(house)
delete house.Address.pincode
console.log(house)
console.log(house.owner)
house.Address.Pincode = 411028
console.log(house)

for (let key in house) {
    console.log(key, house[key])
}

