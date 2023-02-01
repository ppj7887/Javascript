let name = 'Prasad'

console.log(name)

let My_Name = `My name is ${name}`
console.log(My_Name)

let obj = {
    name: "Prasad", lastName: 'Jadhav', age: 34
}

function addObj(add){
    add.city = "Pune"
    return add
}
console.log(addObj(obj))

let arr = [11,22,33,44,55,66]

function addArray(el){
    el.push(77)
    el.splice(1,3)
    return el
}

let av = addArray(arr)
console.log(av)


function splitString(string){
    let str = string.split(" ")
    return `Welcome ${str[0]}`
}
let aa = splitString('Prasad Jadhav')
console.log(aa)

function countVovels(string){
    let vovels = ['a','e','i','o','u']
    let count = 0
    string.split("").forEach((el)=>{
        if(vovels.includes(el)){
            count = count + 1
            console.log(el)
        }
    })
    return count
}
console.log(countVovels("I love my India"))


var m = 433
let n = 490
function addition5() {
    console.log(m)
    console.log(n)
    m = 233
}
addition5()
console.log(m)
console.log(n)


let vehicle = {
    name: "Shine",
    madeBy: "Honda",
    display: function(){
        console.log(this.madeBy, this.name)
    }
}

let bike = vehicle.display

let vehicle2 = {
    name: "Splendor",
    madeBy: "Hero"
}

let hero = bike.bind(vehicle2)
hero()

bike.call(vehicle2)


function getDetails(message){
    return this.name + " " + message
}

let person = {name:"Vikrant"}
console.log(getDetails.call(person, "is awaysom"))


function getTotal(){
    x = 10
    y = 20

    return function(){
        console.log(x+y)
    }
}

let get1 = getTotal()
get1()






