let name = "Prasad"
let unique = []

for(let i=0; i<name.length; i++){
    if(!unique.includes(name[i])){
        unique.push(name[i])
    }
}
console.log(unique)

name = new Set(name)
console.log([...name])

let myName = "Ahmednagar"
myName = new Set(myName)
console.log([...myName])


let myPromise = new Promise((resolve, reject)=>{
    let a = 20
    let b = 10

    if(a==b){
        resolve("The value is equal")
    }
    else{
        reject("The value is not equal")
    }
})

myPromise.then(function(el){
    console.log(el)
}).catch((el)=>{
    console.log(el)
}).finally(()=>{
    console.log("All is Well")
})

let thought = "A friend in need is a friend in deed"

function countVovels(string){
    let vovels = ['a','e','i','o','u']
    let count = 0
    string.split("").forEach((el)=>{
        if(vovels.includes(el)){
            count = count + 1
        }
    })
    return count
}
console.log(countVovels(thought))

let city = "Ban glo re"

function removeSpace(string){
    return string.split(" ").join("")
}
console.log(removeSpace(city))


function reverseString(string){
    return string.split(" ")
    .map((el)=>{
        return el.split("").reverse().join("")
    }).join(" ")
}
console.log(reverseString(thought))

function capitalWord(string){
    return string.split(" ")
    .map((el)=>{
        return `${el[0].toUpperCase()}${el.slice(1)}`
    }).join(" ")
}

console.log(capitalWord(thought))


