// Arrays 

// javacript -- object

// Object = property and method

// example.

// vehicle is an object
// properties - color, model, reg Node, type
// method = start() stop()

let names = ["Vikranrt", "Prasad", "Rohit", "Abhay"]
console.log(names[0])
console.log(names.length)
console.log(names[names.length-1])

for(let x=0; x<names.length; x++){
    console.log(x)
    console.log(names[x])
}
        //      0       1         2         3           4
let cars = ["Innova", "WagonR", "Swift", "Celerio", "Nexon"]
 //          -5        -4         -3      -2          -1
console.log(cars[3])
console.log(cars.length)  // use to check length
console.log(cars[cars.length-2])  // use to check arrays from end

for(let a=0; a<cars.length; a++){
    console.log(a)
    console.log(cars[a])
}

let colors = ["Yellow", "Red", "Pink", "Blue", "Black", "White"]
console.log(colors[4])
console.log(colors.length)
console.log(colors[colors.length-3])

for(let q=0; q<colors.length; q++){
    console.log(q)
    console.log(colors[q])  
}

// method

////////////////////////////////////// Push Method //////////////////////////////////////////

// Adds new element at last

let city = ["Kolhapur", "Pune", "Satara", "Sangli", "Nagpur"]
let aa = city.push("Ahmednagar")
console.log(aa)
console.log(city)
console.log(city.length)

for(let aa = 0; aa<city.length; aa++){
console.log(aa)
console.log(city[aa])
}

////////////////////////////////////// Unshift method ////////////////////////////////////////

// Adds new elements at begining

let bikes = ["shine", "Pulsar", "Passion", "Splendor"]
let xx = bikes.unshift("Boxer")
console.log(xx)
console.log(bikes)


let coke = ["Pepsi", "Thums up", "Coca Cola", "Sprite"]
let qq = coke.unshift("7 up")
console.log(qq)
console.log(coke)
coke.splice(1,1, "Mirinda")
console.log(coke)

///////////////////////////////////////// Pop Method ////////////////////////////////////////

// removes last element of an array

let iceCreams = ["Vanilla", "Butterscotch", "Chocolate", "Coconut"]
let zz = iceCreams.pop()
console.log(zz)
console.log(iceCreams)

let network = ["Idea", "Airtel", "Vodafone", "Jio" ]
let net = network.pop()
console.log(net)
console.log(network)

if(network[0,2]== "Vodafone"){
    console.log("Yes")
}
else{
    console.log("No")
}
////////////////////////////////////////////// shift method //////////////////////////////////

// removes first element of an array

let TV = ["BPL", "Onida", "Samsung", "LG", "Sony"]  
let cc = TV.shift()
console.log(cc)
console.log(TV)

let Planets = ["Mars", "Jupiter", "Saturn", "Earth"]
let ab = Planets.shift()
console.log(ab)
console.log(Planets)


//////////////////////////////////////////// includes ////////////////////////////////////////

// checks for availability of an element in an array and returns with boolean

let Shoes = ["Bata","Red Chief", "Woodland", "Gucci"]
let dd = Shoes.includes("Woodland")
console.log(dd)

let Fans = ["Khaitan", "Usha", "Philips", "Orient"]

// loop which runs through each element of an array
for(key of Fans){
  console.log(key)
}
