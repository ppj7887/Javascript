// // for(let i = 0; i<=5; i++){
// //     console.log('*'.repeat(i))
// // }

// // for(let i=5; i>=1; i--){
// //     console.log('*'.repeat(i))
// }

// useing function()

function starPattern(no) {
    for (let i = 0; i <= no; i++) {
        console.log('*'.repeat(i))
    }
}
starPattern(5)

function Pattern(no) {
    for (let i = no; i >= 1; i--) {
        console.log('*'.repeat(i))
    }
}

Pattern(5)

for (let i = 5; i >= 1; i--) {
    let s = ""
    for (let j = 0; j <= 5; j++) {
        if (j >= i) {
            s = s + '*'
        }
        else {
            s = s + ""
        }
    }
    console.log(s)
}

let thought = "a frienf in is a friend in deed"

function countWords(str) {
    return str.split(" ").length

}

console.log(countWords(thought))




