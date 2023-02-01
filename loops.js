// for loop

for (let a = 0; a <= 10; a++) {
    console.log(a)
}

for (let x = 10; x >= 0; x--) {
    console.log(x)
}
for (let p = 1; p < 6; p++) {
    console.log("Hello World")
}
// while loop

let ab = 1
while (ab < 10) {
    console.log(ab)
    ab++
}

let pq = 3
while (pq <= 30) {
    console.log(pq)
    pq = pq + 3
}

let ww = 20
while (ww > 1) {
    console.log(ww)
    ww--
}

// break and continue statement for with loop


for (let RR = 1; RR <= 10; RR++) {
    if (RR == 6) {
        break
    }
    console.log(RR)
}

for (let TT = 10; TT >= 1; TT--) {
    if (TT == 5) {
        continue
    }
    console.log(TT)
}

// break and continue statement with while loop

let xx = 0
while (xx <= 10) {
    if (xx == 6) {
        break
    }
    console.log(xx)
    xx++
}

for (let cc = 3; cc <= 10; cc++) {

    if (cc == 6) {
        break
    }
    console.log(cc)
}

// floors

console.log(Math.floor(3.6))
console.log(Math.ceil(4.3))
console.log(Math.round(6.6))

let rmn = Math.floor(Math.random() * 7) + 1
console.log(rmn)




// for(let a = 0; a<=6; a++){
// let randomNumber1 = Math.floor(Math.random()*6)+1
// console.log(randomNumber1)

// let userName2 = prompt("please enter input")
// if(randomNumber1 == userName2){
//     console.log("your guess is correct")
//     break
// }
// else{
//     console.log("your guess is incorrect")
// }
// }

// for(let a = 0; a<=6; a++){
//     let randomNumber1 = Math.floor(Math.random()*6)+1
//     console.log(randomNumber1)

//     let userName2 = prompt("please enter input")
//     if(randomNumber1 == userName2){
//         console.log("your guess is correct")
//         break
//     }
//     else{
//         console.log("your guess is incorrect")
//     }
//     }

//     let randomNumber2 = Math.floor(Math.random()*6)+1
//     console.log(randomNumber2)
// let userInput = prompt("Enter correct Input")
//     while(randomNumber2 != userInput){
//         userInput = prompt("Enter correct Input")
//         if(randomNumber2 == userInput){
//         console.log("You are right")
//         break
//         }
//     else {
//         console.log("you are wrong")
//     }
//     }

// let RMN = Math.floor(Math.random()*6)+1
// console.log(RMN)

// for(a=0; a<10; a++){
//     let TokenNumber = prompt("Enter Value")
//     if(RMN == TokenNumber){
//         console.log("True")
//         break
//     }
//     else{
//         console.log("False")
//     }
// }

// let RMN1 = Math.floor(Math.random()*6)+1
// console.log(RMN1)

// let userValue = prompt("Enter correct input")
// while(RMN1 != userValue){
//    userValue = prompt("Enter correct input")
//     if(userValue == RMN1){
//         console.log(" You are right")
//         break
//     }
// else{
//     console.log("Not right")
// }
// }

//////////////////////////////////////////////////////////////////////////////////////

// let RMN1 = Math.floor(Math.random()*6)+1
// console.log(RMN1)

// let userValue = prompt("Please enter input")
// while(userValue != RMN1){
//     userValue = prompt("Please enter input")
//     if(userValue == RMN1){
//         console.log("Your guess is right")
//     }
//     else{
//         console.log("Your guess is wrong")
//     }
// }

// let ranNumber = Math.floor(Math.random()*6)
// console.log(ranNumber)

// for(let a = 0; a<10; a++){
//     let userInput = prompt("Enter correct input")
//     if(userInput == ranNumber){
//         console.log("Correct guess")
//         break
//     }
//     else {
//         console.log("incorrect guess")
//     }
// }

// let ranNumber1 = Math.floor(Math.random()*6)
// console.log(ranNumber1)

// let userNum = prompt("Enter correct value")
// while(userNum != ranNumber1){
//     userNum = prompt("Enter correct value")
//     if(ranNumber1 == userNum){
//         console.log("Yes its right")
//         break
//     }
//     else {
//         console.log("No its wrong")
//     }
// }

// let rannum = Math.floor(Math.random()*6)+1
// console.log(rannum)

// for(let a=0; a<=10; a++){
//     let userWorld = prompt("Enter correct input")
//     if(userWorld == rannum){
//         console.log("True")
//         break
//     }
//     else{
// console.log("False")
//     }


// }

// let ranNum = Math.floor(Math.random()*6)+1
// console.log(ranNum)

// for(let xx =0; xx<7; xx++){
//     let userName = prompt("Enter correct input")
//     if(userName == ranNum){
//         console.log("Correct guess")
//         break
//     }
//     else{
// //         console.log("incorrect guess")
//     }
// }
// let userName = prompt("Enter correct value")
// while(userName !== ranNum){
//     userName = prompt("Enter correct value")
//     if(userName == ranNum){
//         console.log("Correct")
//         break
//     }
//     else{
//         console.log("incorrect")
//     }
// }


// let ranNum = Math.floor(Math.random() * 6) + 1
// console.log(ranNum)

//     for(let i = 0;i<=6;i++){
//     let userName = prompt("enter the value")
//     if(userName == ranNum){
//         console.log("your guess is correct")
//         break
//     }
//     else {
//         console.log("your guess is incorrect")
//     }
// }



let i = 0
while (i < 10) {
    console.log(i)
    i++
}

for (let i = 0; i < 10; i++) {
    if (i == 6) {
        break
    }
    console.log(i)
}

for(let i = 0; i<=10; i++){
    if(i == 6){
        
        continue
    }
    console.log(i)
}

let abc = 1
while(abc <=10){
    console.log(abc)
    if(ab == 8)
    break
}