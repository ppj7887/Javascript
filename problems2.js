let nestedObject = [
    {
        itemId: 1,
        itemDetails: {
            name: "C++",
            caregory: "Programming Language",
            price: 500,
        },
        itemCategory: "Basic",
    },
    {
        itemId: 2,
        itemDetails: {
            name: "C++",
            caregory: "Programming Language",
            price: 1800,
        },
        itemCategory: "Beginner",
    },
    {
        itemId: 3,
        itemDetails: {
            name: "Java Script",
            caregory: "Web Development",
            price: 1500,
        },
        itemCategory: "Advanced",
    }]

    console.log(nestedObject)
    console.log(nestedObject[0]["itemDetails"])

nestedObject.filter(function(el,index,arr){
        return el.itemDetails.price >= 1500
    }).forEach(function(el){
        console.log(el.itemId)
    })

    nestedObject.filter(function(el){
        return el.itemDetails.name == "C++"
    }).forEach(function(el){
        console.log(el.itemId)
    })