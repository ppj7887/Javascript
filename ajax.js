// function one(){
//     console.log("hello")
// }
// one()

// function two(){
//     console.log("bye")
// }
// two()


// function setTime(){
//     setTimeout(function(){
//         console.log("Hello")
//     },2000)
// }

// function One(){
//     console.log("bye")
// }

// setTime()
// One()

// asyn ============ first goes to execution content

// call to ==== asyn but we want  ==== sync
// create user
// get user id
// get user info

// function getUser(){
//     setTimeout(function(){
//         console.log("create user")
//     },3000)

//     setTimeout(function(){
//         console.log("get user id")
//     },2000)

//     setTimeout(function(){
//         console.log("get user info")
//     },1000)
// }
// getUser()

// asyn to ====== sync ====== call back hell

// function getUser() {
//     setTimeout(function () {
//         console.log("create user")
//         setTimeout(function () {
//             console.log("get user id")
//             setTimeout(function () {
//                 console.log("get user info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getUser()


//// promise

// let pro = new Promise(function(resolve,reject){

//         let a = 10
//         let b = 10
//         if(a==b){
//             resolve("hello")
//         }
//         else{
//             reject("Bye")
//         }

// })

// pro.then(function(string){
//     console.log(string)
// },function(string){
//     console.log(string)
// })

// let pro2 = new Promise(function(resolve,reject){
//     let a = 20
//     let b = 10

//     if (a+b==30){
//         resolve([2,3,5,4])
//     }
//     else{
//         reject([-22,-33,-44,-55])
//     }
// })

// pro2.then(function(arr){
//     console.log(arr[1])
// })
// .catch(function(arr){
//     console.log(arr[3])
// })

// let pro3 = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 10

//     if (a + b == 30) {
//         resolve([2, 3, 5, 4])
//     }
//     else {
//         reject([-22, -33, -44, -55])
//     }
// })

// pro3.then(function (arr) {
//     console.log(arr[1])
// })
//     .catch(function (arr) {
//         console.log(arr[3])
//     })
// .finally(function () {
//     console.log("I will always there")
// })


///////////////////////////////////////////////////////////////////////////////

// async excution

// function addOne(){
//     setTimeout(function(){
//         console.log("create user")
//     },3000)
//     setTimeout(function(){
//         console.log("get user id")
//     },2000)
//     setTimeout(function(){
//         console.log("get user info")
//     },1000)
// }
// addOne()

// now async to sync for above

// function addOne1(){
//     setTimeout(function(){
//         console.log("create user")
//         setTimeout(function(){
//             console.log("get user id")
//             setTimeout(function(){
//                 console.log("get user info")
//             },1000)
//         },2000)
//     },3000)
// }
// addOne1()


///////////////// promise /////////////////

// let pro11 = new Promise(function (resolve, reject) {
//     let x = 20
//     let y = 40

//     if (x < y) {
//         resolve("you can go")
//     }
//     else {
//         reject("please wait")
//     }
// })

// pro11.then(function (string) {
//     console.log(string)
// }, function (string) {
//     console.log(string)
// })

// let pro4 = new Promise(function(resolve,reject){
//     let x = 66
//     let y = 33

//     if(x/y*6 == 10){
//         resolve([12,13,14,15])
//     }
//     else{
//         reject([-11,-33,-55,-66])
//     }
// })

// pro4.then(function(arr){
//     console.log(arr[3])
// })
// .catch(function(arr){
//     console.log(arr[1])
// })
// .finally(function(){
//     console.log("Target achived")
// })

//////////////////////////////////////////////////////////////////////////////////////////

// let pro = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 20

//     if(a*2 == b){
//         resolve("correct")
//     }
//     else{
//         reject("Incorrect")
//     }

// })
//     pro.then(function(arr){
//         console.log(arr)
//     })
//     .catch(function(arr){
//         console.log(arr)


// })

// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('user created') {
//                 resolve("user created")
//             }
//             else {
//                 reject("user not created")
//             }
//         }, 3000)
//     })
// }

// function getUserId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('get user id') {
//                 resolve("get user id")
//             }
//             else {
//                 reject("user id not found")
//             }
//         }, 2000)
//     })
// }

// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ("userInfo") {
//                 resolve("get userInfo")
//             }
//             else {
//                 reject("user info not found")
//             }
//         }, 1000)
//     })
// }

// let getInfo = async function () {
//     let a = await createUser()
//     console.log(a)

//     let b = await getUserId()
//     console.log(b)

//     let c = await getUserInfo()
//     console.log(c)
// }
// getInfo()


let pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if ('user created') {
            resolve("user created")
        }
        else {
            reject("user not created")
        }
    }, 3000)
})


function getUserId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('get user id') {
                resolve("get user id")
            }
            else {
                reject("user id not found")
            }
        }, 2000)
    })
}

function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ("userInfo") {
                resolve("get userInfo")
            }
            else {
                reject("user info not found")
            }
        }, 1000)
    })
}

// pro.then(function(str){
//     console.log(str)
//     return getUserId()
// }).
// then(function(str){
//     console.log(str)
//     return getUserInfo()
// }).
// then(function(str){
//     console.log(str)
// })

let myPro = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if ("user created") {
            resolve("user created")
        }
        else {
            reject("user not created")
        }
    }, 3000)
})

function getalluser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ("get user id") {
                resolve("get user ID")
            }
            else {
                reject("use ID not available")
            }
        }, 2000)
    })
}

function userIdInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ("get user info") {
                resolve("Get user Info")
            }
            else {
                reject("Error getiing userInfo")
            }
        }, 1000)
    })
}

myPro.then(function (str) {
    console.log(str)
    return getalluser()
}).then(function (str) {
    console.log(str)
    return userIdInfo()
}).then(function (str) {
    console.log(str)
})

