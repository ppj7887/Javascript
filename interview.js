let name = "Pra sad"
let name1 = "Aus tra lia"

function removeSpace(str){
    return str.split(" ").join("")
}
console.log(removeSpace(name))
console.log(removeSpace(name1))

let thought = "A Friend in need is a friend in deed"

function reverseString(string){
    return string.split(" ")
    .map(function(el){
        return el.split("").reverse().join("")
    }).join(" ")
}

console.log(reverseString(thought))


function countVovels(string){
    let vovels = ["a","e","i","o","u"]
    let count = 0
    string.split("")
    .forEach(function(el){
        if(vovels.includes(el)){
            count = count + 1
        }
        
        })
        return count    
}

console.log(countVovels(thought))

// to change first character of a string to uppercase

function sentenceCase(str){
    return str.split(" ")
    .map(function(el){
        return el.charAt(0).toUpperCase() + el.slice(1)
    }).join(" ")
}

console.log(sentenceCase(thought))

let array = [34,4,56,77,11,35,2,90,39,1,27]
let min = array[0]

for(let i = 0; i<array.length; i++){
    if(array[i]>min){
        min = array[i]
    }
}
console.log(min)

let marks = [12,45,56,78,93,46,67,28,48]

function evenTotal(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 ==0){
            sum = sum + marks[i]
        }
    }
    return sum
}

console.log(evenTotal(marks))

function maximum(arr){
    let max = arr[0]
    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(maximum(marks))


x = 34
console.log(x)
var x;


//// call method

function Hello(){
    return `Hello ${this.name}`
}

let ppj = {name:"Prasad"}

console.log(Hello.call(ppj))

/// apply

function greet(message){
    return `${this.name} is ${message}`
}

let anshu = {name: "Anshika"}

console.log(greet.apply(anshu, ["Beautiful"]))

// bind

let obj = {
    displayDetails:function(model, reg){
        return(`${this.name} ${model} ${reg}`)
    }
}

let teju = {name:"Tejashri"}

let bike = obj.displayDetails.bind(teju, "Honda", 12345)
console.log(bike)


{
    var ac1 = 1
}
console.log(ac1)

function reverseWord(word){
    return word.split("").reverse().join("")
}
console.log(reverseWord("Anshika"))

let mark = [45,56,67,34,89,67,12,50,78]
let max1 = mark[0]
let min1 = mark[0]

for(let i=0;i<mark.length; i++){
    if(mark[i]>max1){
        max1 = mark[i]
    }
    if(mark[i]<min1){
        min1 = mark[i]
    }
}

console.log(max1)
console.log(min1)

function addition4() {
    let m = 45
    let n = 34
    return function () {
        console.log(m + n)
    }
}
let add2 = addition4()
// // console.log(add2)
add2()


// passing function as a parameter to another fun ctiuon

function sum(a,b){
    return a+b
}

function addition(num){
    return num(12,34)
}

let total = addition(sum)
console.log(total)

function welcome(){
    return `Hello ${this.name}`
}

let aa = {name:"Prasad"}

console.log(welcome.call(aa))

function greet1(message){
    return `${this.name} is ${message}`
}

let bb = {name:"Vikrant"}
console.log(greet1.apply(bb, ["Clever"]))


function abc(){
    var ad = 13
    console.log(ad)
}

// console.log(ad)

function getSum(a,b){
    return a+b
}

function getTotal(total){
    return total(12,4)
}

let totalSum = getTotal(getSum)
console.log(totalSum)

let object = {
    bikeDetails:function(MFG, regNum){
        return `${this.name} MFG Year:${MFG} Registration number is ${regNum}`
    }
}

let owner = {name:"Prasad"}

console.log(object.bikeDetails.bind(owner, 2011, "XYZ123"))


let cases = [1,2,1,4,5,6,7,3,5]
let count = []

