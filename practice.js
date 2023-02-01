const a = 1
console.log(a)

// function with parameter and without return type
function prasad (a,b){
console.log(a+b)
console.log(a-b)
console.log(a*b)
}
prasad(12,8)
prasad(26,12)

// function without parameter and without return type

function Anshika (){
    console.log(12+2)
}
Anshika()

// functions with parameter and with return type

function AA(x,y){
    return x-y
}
    let PP = AA(20,6)
console.log(PP+PP)
console.log(PP*2)
console.log(PP%4)

// types

let m = 2
let n = "Teju"
let o = false

console.log(typeof m)
console.log(typeof n)
console.log(typeof o)

// comparision

console.log(2===3)
console.log(3==3)
console.log(5!=='5')
console.log(4!=4)
console.log(6<3)

// logical operator
 // And stands for &&
 // OR stands for ||
 // Not stands for !

 // And Operator

console.log(7===7 && 5<=5)
console.log(6!=6 && 4==4)
console.log(3<5 && 2==='2')
console.log(5!=5 && 4>6)

// OR

console.log(7===7 || 5<=5)
console.log(6!=6 || 4==4)
console.log(3<5 || 2==='2')
console.log(5!=5 || 4>6)

// string as a parameter to function

function Amit(notice){
    return "Abhay " + notice

}
let Sunny = Amit("you are fired")
console.log(Sunny)

// number as a parameter to  functuion

function Vicky(x,y){
    
    return x+y
}
let VV = Vicky(2,2)
console.log(VV)



function TT(instruction){
    return "Avnish " + instruction
}
let DD = TT("go and bring tea for me")
console.log(DD)

function CC(Request){
    return "Sachin " + Request
}
let AB = CC("could you please attend the webinar")
console.log(AB)

// array as parameter to function

let fruit = ["Orange", "Apple", "Banana", "Mango"]
    function fruitKing(fruit){
        fruit.unshift("Guava")
        return fruit
}
let f1 = fruitKing(fruit)
console.log(f1)

// function as parameter to another

let honda = function(m,n){
    return m+n
}
function shine(bb){
    bb = function(m,n){
        return m+n
    }
    let nn = bb(6,8)
    return nn
}
let oo = shine(honda)
console.log(oo)

// array as function

let vegi = ["Potato","Ladyfinger","Brinjal"]
function bestvegi(vegi){
    console.log(vegi[2])
}
bestvegi(vegi)

let car = ["Ritz","Wagnor", "Innova"]
function bestcar(car){
    console.log(car[2])
}
bestcar(car)

let bike = function(conmpliment){
    return "Honda " + conmpliment
}
let hondabike = bike("Shine is the most attractive bike right now")
console.log(hondabike)


/// object as a parameter to function

let mobile = {
    name: "Red Mi",
    modelNo: "10 Pro",
    Price: 14999
}
function handSet(mob){
    mob.name = "Realme"
    mob.MFG = 2022
    return mob
}
  let dd = handSet(mobile)
  console.log(dd)
//   console.log(mobile)

function countVovels(string){
    let vovels = ["a","e","i","o","u"]
    let count = 0
    for(let i = 0; i<string.length; i++){
        if(vovels.includes(string[i])){
            count = count + 1
            console.log(string[i])
        }
    }
    return count
}

let india =  countVovels("i love my india")
console.log(india)

let names = ["Abhay","Vikrant","Amol","rohit","Abhay","Vikrant"]
let bikes = ["Shine","Pulsar","Shine","Splendor","Passion","Splendor","Unicorn"]


function getName(message){
    return this.name + " " + message
}

let myName = {name:"Prasad"}
let myname = getName.call(myName, "is clever")
console.log(myname)


