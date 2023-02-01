// how to set property at the time of object creation with
// set method

class info {
    setName(nm) {
        this.Name = nm
    }
    setAge(ag) {
        this.Age = ag
    }
    setEducation(ed) {
        this.Education = ed
    }
    setHobbies(hb) {
        this.Hobbies = hb
    }
}
let myName = new info
myName.setName("Prasad Jadhav")
myName.setAge(34)
myName.setEducation("B.com")
myName.setHobbies["Reading", "Swimming", "Music"]

console.log(myName)

for(key in myName){
    console.log(key,myName[key])
}

