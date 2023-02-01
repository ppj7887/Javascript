let map1 = new Map()
map1.set('name','Prasad')
map1.set(24,'age')
map1.set('mob', 9156805522)
console.log(map1)



console.log(map1.get(24))
console.log(map1.set(24,"height"))
console.log(map1.delete(24))
console.log(map1)
console.log(map1.get('mob'))


let person = new Set("Prasad")
console.log(person)

for(let [key,val] of map1){
    console.log(key, val)
}

let fruits = new Set()
fruits.add("Banana","Apple","Mango")
fruits.add("Mango")
fruits.add("Banana")
fruits.add("Papaya")
fruits.delete("Mango")
console.log([...fruits])
console.log(fruits.size)

for(let key of fruits){
    console.log(key)
}

fruits.forEach(function(el){
    console.log(el)
})



