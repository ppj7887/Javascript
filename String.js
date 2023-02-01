// Javascript ---- object -- object --- property and method 
// method -- action and return 


// Human --- object 
// property ----- age weight color 
// method ---- walking(), talking()


// String --- object 
// property and method 

// String --- object 
// property and method 

// ways to define string

let fullName = 'Prasad Jadhav'
let fullName2 = "Prasad Jadhav"
let fullName3 = `Prasad Jadhav`

// string concatination

let firstName = "Prasad"
let lastName = "Jadhav"  // below is old method

let firstName1 = "Tejashri"
let lastName1 = "Jadhav"

console.log("My first name is "+ firstName +" My last name is "+ lastName)
console.log('My first name is '+ firstName +' My last name is '+ lastName)
console.log(`My first name is `+ firstName +` My last name is `+ lastName)

// now lets see new method

console.log(`My first name is ${firstName} My last name is ${lastName}`)
console.log(`My first name is ${firstName1} My last name is ${lastName1}`)


////////////////////////////////////// string object ///////////////////////////////////////////

// object property and method

let fruit = "Apple"

console.log(fruit[1])
console.log(fruit[4])
console.log(fruit.length)
console.log(fruit[fruit.length-1])

for(let a = 0; a<fruit.length; a++){
    console.log(a)
    console.log(fruit[a])
}

/// Methods 
// Ation and return types

//////////////////////////////////////// toUpperCase() //////////////////////////////////

// converts all characters to upper case

let city = "Pune"
let aa = city.toUpperCase()
console.log(aa)

/////////////////////////////////////// toLowerCase()  ////////////////////////////////////

// convert all characters to lower case

let movie = "Ek tha Tiger"
let ab1 = movie.toLowerCase()
console.log(ab1)

//////////////////////////////////////// includes() ////////////////////////////////////////

// if given criteria met it will returns with true are false

let name = "Prasad"
let ab2 = name.includes("d")
console.log(ab2)

// substring

let color = "yellow"
let ab3 = color.includes("pq")
console.log(ab3)

//////////////////////////////////////// indexOf() //////////////////////////////////////////

// will give you index of element

let sports = "Cricket"
let ab4 = sports.indexOf("k")
console.log(ab4)

// if incorrect element it will returns wit -1

let tv = "Onida"
let ab5 = tv.indexOf("p")
console.log(ab5)

///////////////////////////////////// trim() //////////////////////////////////////////////
 
// removes extra spaces

let myName = " Anshika  "
console.log(myName.length)
let ab6 = myName.trim()
console.log(ab6.length)

//////////////////////////////////////// trimStart() ///////////////////////////////////

let number = " Fifteen  "
console.log(number.length)
let ab7 = number.trimStart()
console.log(ab7.length)


//////////////////////////////////////// trimEnd() ///////////////////////////////////

let games = "soccer  "
console.log(games.length)
let ab8 = games.trimEnd()
console.log(ab8.length)


////////////////////////////////// count of vovels in name /////////////////////////////////

let myName1 = "Prasad"
let vovels =['a','e','i','o','u']
let count = 0

for(let i=0; i<myName1.length; i++){
if(vovels.includes(myName1[i])){
    console.log(myName1[i])
    count = count+1
}
console.log(count)
}

let word = "india"
let counta = 0

for(let a =0; a<word.length; a++){
    if(vovels.includes(word[a])){
        counta = counta + 1
    } 
    }
    console.log(counta)



let house = "myhouse"
let counts = 0

for(let ab = 0; ab<house.length; ab++){
    if(vovels.includes(house[ab])){
        
        counts = counts +1
    }
    }
    console.log(counts)

    //////////////// printy string in reverse ///////////////////////////

    let bigCity = "mumbai"
    let rev = ""

    for(let ac =bigCity.length-1; ac>=0; ac--){
        rev = rev + bigCity[ac]
    }

    console.log(rev)

    let bank = "account"
    let abc = ""
for(let aa =bank.length-1; aa>=0;aa--){
    abc = abc + bank[aa]
}
console.log(abc)

let dog = "tyson"
let rev1 = ""

for(let x = 0; x<dog.length; x++){
    rev1 = dog[x] + rev1
}
console.log(rev1)

let vov = ['a','e','i','o','u']
let maidenName = "anshika"
let count1 = 0

for(let pq = 0; pq<maidenName.length; pq++){
    if(vov.includes(maidenName[pq])){
        count1 = count1 + 1
        console.log(maidenName[pq])
    }
}
console.log(count1)

//////////////////////////////////////// replace() /////////////////////////////////////

// to replce element in string

let learning = "I am learning javascript"
console.log(learning.replace("javascript", "python"))

let playing  = " Vicky is playing Football"
let play = playing.replace("Football", "Cricket")
console.log(play)


////////////////////////////////////// split() /////////////////////////////////////////////

// splits the elements of string by removing given value

let fullName5 = "Prasad Jadhav"
   let cv = fullName5.split(" ")
   console.log(cv)

let fullName6 = "Anshika Jadhav"
let cb = fullName6.split("a")
console.log(cb)


// now returning word welcome prasad with the method split //

function greet(word){
    let aaa = word.split(' ')
    
    console.log(`welcome ${aaa[0]}`)
    console.log(`welcome ${aaa[1]}`)
}
greet("prasad jadhav")
greet("anshika jadhav")

////////////////////////////////////// charAt///////////////////////////////////

let animal3 = "monkey"
let aaa1 = animal3.charAt(2)
console.log(aaa1)

let aaa2 = animal3.charCodeAt(2)
console.log(aaa2)

/////////////////////////////////////

let name2 = "Pra sad"
let space = ""

for(let p = 0; p<name2.length; p++){
    if(name2[p]!= " "){
    space = space + name2[p]
}
}
console.log(space)


//////////////////////////////////////////////////////////////////////////////

let bornName = "Prasad"
let endName = "Jadhav"

let a1 = (`My name is ${bornName}. My surname is ${endName} `)
console.log(a1)

let string = "Vicky is playing Football"
let game = string.replace("Football", "Cricket")
console.log(game)


let capital = "delhi"
let newCapital = ""

function removeVolels(string){
    let vovels = ['a','e','i','o','u']
    for(let i = 0; i<string.length; i++){
        if(!vovels.includes(string[i])){
            newCapital = newCapital + string[i]
        }
    }
    return newCapital
}

console.log(removeVolels(capital))