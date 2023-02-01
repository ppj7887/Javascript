document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color = "red"
})

let byid1 = document.querySelector("#m1")
console.log(byid1)

let byclass = document.querySelector(".one")
console.log(byclass)

let byId= document.querySelector("#m1")
byId.addEventListener('click',function(){
    byId.textContent = "My sweet daughter"
})

document.querySelector('p')   //by tagname
document.querySelector('p[name="nm"]')

//common method/generic method

tagname[attr="value"]
//<p id = "m1" class = "one"  name = "nm">My Daughter</p>

