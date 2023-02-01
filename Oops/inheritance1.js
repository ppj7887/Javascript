// Inheritance -- repetation --- class -- design 

// // Encapsulation 

// // Inheritance  ???


class grandFather {

    constructor(fn, ln) {
        this.gName = fn
        this.lastName = ln
    }
    display() {
        console.log(this.gName, this.lastName)
    }
}

class father extends grandFather {

    constructor(fn, ln, fName) {
        super(fn, ln)
        this.fName = fName
    }
    display() {
        console.log(this.fName, this.lastName)
    }
}
class son extends father {

    constructor(gName, ln, fname, sName) {
        super(gName, ln, fname)
        this.sName = sName
    }
    display() {
        console.log(this.sName, this.lastName)
    }
}

let GF = new grandFather("Gundoji", "Jadhav")
console.log(GF)

let myFather = new father("Gundoji", "Jadhav", "Parshuram")
myFather.display()
console.log(myFather)

let mySon = new son("Gundoji", "Jadhav", "Parshuram", "Prasad")
mySon.display()
GF.display()
console.log(GF.gName)
console.log(mySon.fName)
console.log(mySon.gName)
console.log(myFather.gName)


/////////////////////////////////////////////////////////////////////////////////


class Parent {

    constructor(fName, mName, ln) {
        this.fName = fName
        this.mName = mName
        this.lastName = ln
    }
    displayfatherName() {
        console.log(this.fName, this.lastName)
    }
    displaymotherName() {
        console.log(this.mName, this.lastName)
    }
}

class sons extends Parent {

    constructor(fName, mName, ln, sName) {
        super(fName, mName, ln)
        this.sName = sName
    }
    display() {
        console.log(this.sName, this.lastName)
        super.displayfatherName()
        super.displaymotherName()
    }
}

class daughter extends Parent {

    constructor(fName, mName, ln, dName) {
        super(fName, mName, ln)
        this.dName = dName
    }
    display() {
        console.log(this.dName, this.lastName)
        super.displayfatherName()
        super.displaymotherName()
    }
}

let Parshuram = new Parent("Parshuram", "Shobha", "Jadhav")
console.log(Parshuram)
Parshuram.displayfatherName()
Parshuram.displaymotherName()


let Prasad = new sons("Parshuram", "Shobha", "Jadhav", "Prasad")
console.log(Prasad)
Prasad.displayfatherName()
console.log(Prasad.mName)


let Pooja = new daughter("Parshuram", "Shobha", "Jadhav", "Pooja")
console.log(Pooja)
Pooja.displaymotherName()
console.log(Pooja.fName)


//////////////////////////////////////////////////////////////////////////////////


class Parents {

    constructor(fName, mName, ln) {
        this.fatherName = fName
        this.motherName = mName
        this.lastName = ln
    }
    displayFather() {
        console.log(this.fatherName, this.lastName)
    }
    displayMother() {
        console.log(this.motherName, this.lastName)
    }
}

class Son1 extends Parents {

    constructor(sName, fName, mName, ln) {
        super(fName, mName, ln)
        this.sonName = sName
    }
    displayName() {
        console.log(this.sonName, this.lastName)
        super.displayFather()
        super.displayMother()
    }
}

class daughter1 extends Parents {

    constructor(fName, mName, ln, dName) {
        super(fName, mName, ln)
        this.daughterName = dName
    }
    displayName() {
        console.log(this.daughterName, this.lastName)
        super.displayFather()
        super.displayMother()
    }
}

let Bhau = new Parents("Parshuram", "Shobha", "Jadhav")
console.log(Bhau)
Bhau.displayFather()

let Pappu = new Son1("Prasad", "Parshuram", "Shobha", "Jadhav")
console.log(Pappu)

console.log(Pappu.fatherName)

let Didi = new daughter1("Parshuram", "Shobha", "Jadhav", "Pooja")
console.log(Didi)
Didi.displayName()
console.log(Didi.motherName)
console.log(Didi.fatherName)


////////////////////////////////////////////////////////////////////////////////////


class Parents1 {

    constructor(fName, mName, ln) {
        this.fatherName = fName
        this.motherName = mName
        this.lastName = ln
    }
    displayfathersName() {
        console.log(this.fatherName, this.lastName)
    }
    displayMothersName() {
        console.log(this.motherName, this.lastName)
    }
}

class son1 extends Parents1 {

    constructor(fName, mName, ln, sName) {
        super(fName, mName, ln)
        this.sonName = sName
    }
    display() {
        console.log(this.sName, this.lastName)
        super.displayfathersName
        super.displayMothersName
    }
}

class daughters1 extends Parents1 {

    constructor(fName, mName, ln, dName) {
        super(fName, mName, ln)
        this.daughterName = dName
    }
    display() {
        console.log(this.daughterName, this.lastName)
        super.displayfathersName
        super.displayMothersName
    }
}

let Bhau2 = new Parents1("Parshuram", "Shobha", "Jadhav")
console.log(Bhau2)

let PP = new son1("Parshuram", "Shobha", "Jadhav", "Prasad")
console.log(PP)

PP.displayfathersName()

let PJ = new daughters1("Parshuram", "Shobha", "Jadhav", "Pooja")
console.log(PJ)
PJ.displayMothersName()
console.log(PJ.fatherName)


///////////////////////////////////////////////////////////////////////////////////////


class myFamily {

    constructor(fName,mName,ln){
        this.fathersName = fName
        this.mothersName = mName
        this.lastName = ln
    }

    displayfather(){
        console.log(this.fathersName, this.lastName)
    }
    displayMother(){
        console.log(this.mothersName, this.lastName)
    }
}

class sonOne extends myFamily{
    constructor(fName,mName,ln,sName){
        super(fName,mName,ln)
        this.sonName = sName
    }
    displaySonName(){
        console.log(this.sonName, this.lastName)
        super.displayfather()
        super.displayMother()
        
    }
}

class daughterOne extends myFamily{
    constructor(fName,mName,ln,dName){
        super(fName,mName,ln)
        this.daughterName = dName
    }
    displayDname(){
        console.log(this.daughterName, this.lastName)
        super.displayfather()
        super.displayMother()
    }
}

let pappa = new myFamily("Parshuram","Shobha","Jadhav")
console.log(pappa)
pappa.displayfather()

let jpae = new sonOne("Parshuram","Shobha","Jadhav","Prasad")
console.log(jpae)
jpae.displayfather()
jpae.displayMother()
console.log(jpae.fathersName)
console.log(jpae.mothersName)


class familyNo1{
    constructor(fn,mn,ln){
        this.fatherName = fn
        this.motherName = mn
        this.lastName = ln
    }

    displayFather(){
        console.log(this.fatherName, this.lastName)
    }
    displayMother(){
        console.log(this.motherName, this.lastName)
    }
}

let ppj = new familyNo1("Parshuram", "Shobha", "Jadhav")
ppj.displayFather()
ppj.displayMother()

class sonName extends familyNo1{
    constructor(fn,mn,ln,sn){
        super(fn,mn,ln)
            this.sonName = sn
    }

    displaySonName(){
        console.log(this.sonName, this.lastName)
        super.displayFather()
        super.displayMother()
    }
}

let pj = new sonName("Parshuram", "Shobha", "Jadhav","Prasad")
pj.displayFather()