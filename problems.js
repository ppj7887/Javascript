let movie = [

    {
        fullName: "Sultaan",
        Rating: 8,
        songs: ['Buleya', 'Jag ghoomeya', "Mitti me khoon", '440 volt'],
        country: "India",
        Actor: "Salman Khan",
        Actress: "Anushka Sharma",
        support: {
            music: "Sajid-Wajid",
            director: "Manish Malhotra",
            producer: "Yash Raj"
        }


    },
    {
        fullName: "Pk",
        Rating: 9,
        songs: ['Waste of time', 'Chaar Kadam', "tharki chokro", 'nanga punga dost'],
        Actor: "Amir Khan",
        Actress: "Anushka Sharma",
        country: "India",
        support: {
            music: "atul gogavale",
            director: "rajkumar hirani",
            producer: "vidhu vinod chopra"
        }


    },
    {
        fullName: "Ek tha Tiger",
        Rating: 8,
        songs: ['Laapata', 'Tiger theme', "banjaraa", 'Mashaallah'],
        country: "Cuba",
        Actor: "Salman Khan",
        Actress: "Katrina Kaif",
        support: {
            music: "Sajid-Wajid",
            director: "kabir khan",
            producer: "Yash Raj"
        }

    },
    {

        fullName: "Dilwale",
        Rating: 3,
        songs: ['gerua', 'janam janam', "tukur tukur"],
        Actor: "Shahrukh Khan",
        Actress: "Kajol",
        country: "Australia",
        support: {
            music: "pritam",
            director: "Rohit Shetty",
            producer: "Pritam"
        }

    }
]
//   / print full name and actor

movie.forEach(function (el, index, arr) {
    console.log(el.fullName, el.Actor)
})



// full name and length of songs

movie.forEach(function (el, index, arr) {
    console.log(el.fullName, el.songs.length)
})



// movie belongs to india (country india)

movie.filter(function (el, index, arr) {
    return el.country == "India"
}).forEach(function (el) {
    console.log(el.fullName)
})



// movie belongs to salman or shahrukh  with rating >

movie.filter(function (el) {
    return (el.Actor == 'Salman Khan' || el.Actor == "Shahrukh Khan") && el.Rating > 2
}).forEach(function (el) {
    console.log(el.fullName)
})


//   full name with count of support

let count = 0

movie.forEach(function (el) {
    // console.log(el.fullName)
    for (let key in el.support) {

        count = count + 1
    }
    console.log(el.fullName + " " + count)
})
//   console.log(el.fullName + " " + count)
console.log(count)


// average of ratin

console.log(movie.reduce(function (acc, el) {
    return acc + el.Rating
}, 0) / movie.length)


// max raring

let ab = movie.map(function (el) {
    return el.Rating
}).sort()
console.log(ab)

let ab1 = ab[ab.length - 1]

console.log(movie.find(function (el) {
    return el.Rating == ab1
}).fullName)


// movies of salman anushka sharma

movie.filter(function (el) {
    return el.Actor == "Salman Khan" && el.Actress == "Anushka Sharma"
}).forEach(function (el) {
    console.log(el.fullName)
})

// movies with music given by sajid wajid

movie.filter(function (el) {
    return el.support.music == "Sajid-Wajid"
}).forEach(function (el) {
    console.log(el.fullName)
})

let pp = {
    name: "Prasad",
    Age: 34,
    email: "Prasad.jadhav"
}
for (let key in pp) {
    console.log(key, pp[key])
}

movie.filter(function (el) {
    return el.songs.includes("Laapata", "Janam Janam")
}).forEach(function (el) {
    console.log(el.fullName)
})

function createLogo(logo){
    logo.forEach(function(el){
       el.logo = el.Actor.split(" ")
       .map(function(el){
        return el[0]
       }).join("").toLowerCase()
    })
}
createLogo(movie)
console.log(movie)

