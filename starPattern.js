// // for(let i = 0; i<=5; i++){
// //     console.log('*'.repeat(i))
// // }

// // for(let i=5; i>=1; i--){
// //     console.log('*'.repeat(i))
// }

// useing function()

function starPattern(no){
    for(let i = 0; i<=no; i++){
        console.log('*'.repeat(i))
    }
}
starPattern(5)

function Pattern(no){
    for(let i = no; i>=1; i--){
        console.log('*'.repeat(i))
    }
}

Pattern(5)

for(let i = 5; i>=1; i--){
    let s = ""
    for(let j = 0; j<=5; j++){
        if(j>=i){
            s= s+'*'
        }
        else{
            s = s+""
        }
    }
    console.log(s)
}

let arr = [12,34,23,2,56,67,31,45]
let max = 0

for(let i = 0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i]
    }
    console.log(max)
}


