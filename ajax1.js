// // synch code

// function addOne() {
//     setTimeout(function () {
//         console.log("bye")
//     }, 2000)
// }
// // addOne()

// function add() {
//     console.log("Hello")
// }
// // add()

// ////// 

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get user ID")
//             setTimeout(function () {
//                 console.log("get userInfo")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()


// let pro = new Promise(function(resolve, reject){
//     let a = 20
//     let b = 10
//     if(a-b === 30){
//         resolve("It's working")
//     }
//     else{
//         reject("Undefined Error")
//     }
// })

// pro.then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// }).finally(function(){
//     console.log("Show must go on")
// })


function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ("user created") {
                resolve("creat user")
            }
            else {
                reject("user  not crated")
            }
        }, 3000)
    })
}

function getUserId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ("get id") {
                resolve("Id available")
            }
            else {
                reject("Id not available")
            }
        }, 2000)
    })
}

function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ("user info available") {
                resolve("user info taken")
            }
            else {
                reject("user info not found")
            }
        })
    })
}

// let getAllinfo = async function(){
//     let ab = await createUser()
//     console.log(ab)
//     let bb = await getUserId()
//     console.log(bb)
//     let cc = await getUserInfo()
//     console.log(cc)
// }
// getAllinfo()

createUser()
    .then(function (str) {
        console.log(str)
        return getUserId()
    }).then(function (str) {
        console.log(str)
        return getUserInfo()
    }).then(function (str) {
        console.log(str)
    })