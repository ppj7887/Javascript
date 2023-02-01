// Polymorphism

// // overloading 

// same class , same method , different signature -- overloading
// different class , same method , same signature -- overwriting

// same class , same method , different signature == overloading

class addition {

    Calculator(a, b, c) {
        if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
        else {
            console.log("Can not add single digit")
        }
    }
}

let add = new addition()
add.Calculator(12, 12, 34)
add.Calculator(34, 45)
add.Calculator(2)


// different class , same method , same signature = overwriting


class worldBank {

    save(x) {
        console.log(`Rate of interest will be ${x * 3}`)
    }
    loan(y) {
        console.log(`Rate of interest will be ${y * 9}`)
    }
}

class HDFC extends worldBank {

    save(x) {
        console.log(`Rate of interest will be ${x * 6}`)
    }
    loan(y) {
        console.log(`Rate of interest will be ${y * 7}`)
    }
}

class ICICI extends worldBank {

    save(x) {
        console.log(`Rate of interest will be ${x * 6.5}`)
    }
    loan(y) {
        console.log(`Rate of interest will be ${y * 8}`)
    }
}

let wb = new worldBank()
wb.save(2)

let ic = new ICICI()
ic.loan(3)

let hd = new HDFC()
hd.loan(4)


//////////////////////////////////////////////////////////////////////////////////////

// same class , same method , different signature -- overloading

class addition1 {

    Calc(x, y, z) {
        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined, y != undefined) {
            console.log(x + y)
        }
        else {
            console.log("Can not add single digit")
        }
    }
}

let add4 = new addition1()
add4.Calc(12, 34, 36)
add4.Calc(23, 88)
add4.Calc(1)


// different class , same method , same signature = overwriting

class swissBank {

    saving() {
        console.log("Rate of intereste will be 5.5%")
    }
    loan() {
        console.log("Rate of interest will be 10%")
    }
}

class PNB extends swissBank {

    saving() {
        console.log("Rate of interest will be 6.5%")
    }
    loan() {
        console.log("Rate of interest will be 12%")
    }
}

class SBI extends swissBank {

    saving() {
        console.log("Rate of interest will be 8%")
    }
    loan() {
        console.log("Rate of interest will be 13%")
    }
}

let swiss = new swissBank()
swiss.saving()
swiss.loan()

let PB = new PNB()
PB.saving()
PB.loan()

let SB = new SBI()
SB.saving()
SB.loan()

///////////////////////////////////////////////////////////////////////


class school {

    Nursery() {
        console.log("Minimum age of student should be 4 years completed")
    }
    Primary() {
        console.log("Minimum age of student should be 3 years conmpleted")
    }
}

class school1 extends school {

    Nursery() {
        console.log("Minimum age of student should be 3 years completed")
    }
    Primary() {
        console.log("Minimum age of student should be 2 years conmpleted")
    }
}

class school2 extends school {

    Nursery() {
        console.log("Minimum age of student should be 5 years completed")
    }
    Primary() {
        console.log("Minimum age of student should be 6 years conmpleted")
        // super.Nursery()
    }
}

let Anshu = new school()
Anshu.Nursery()

let Vihaan = new school2()
Vihaan.Primary()


////////////////////////////////////////////////////////////////////////////

class College{

    Arts(){
        console.log("Any HSC passed can eligible for addmission")
    }
    Commerce(){
        console.log("HSC passed with above 50% can eligible for addmission")
    }
    Science(){
        console.log("HSC passed with above 75% can eligible for addmission")
    }
}

class College1 extends College{

    Arts(){
        console.log("Any HSC passed can eligible for addmission")
    }
    Commerce(){
        console.log("Any HSC passed can eligible for addmission")
    }
    Science(){
        console.log("HSC passed with above 55% can eligible for addmission")
    }
}

class College2 extends College{

    Arts(){
        console.log("HSC passed with minimum 45% can be elegible for addmission")
    }
    Commerce(){
        console.log("HSC passed with minimum 55% can be eligible for addmission")
    }
    Science(){
        console.log("HSC passed with minimum 70% can be eligible for addmission")
        super.Science()
    }
}

let Sadhana = new College2()
Sadhana.Commerce()
Sadhana.Science()

let AM = new College1()
AM.Commerce()
AM.Science()
AM.Arts()


/////////////////////////////////////////////////////////////////////////////////////////

class total {

    addition(a,b,c){
        if(a!= undefined && b!= undefined && c!= undefined){
            console.log(a+b-c)
        }
        else if(a!= undefined, b!=undefined){
            console.log(a-b)
        }
        else{
            console.log("can not add single digit")
        }
    }
}

let count = new total()
count.addition(24,46,12)
count.addition(46,34)
count.addition(12)



///////////////////////////////////////////

class countTotal{
    calculator(a,b,c){
        if(a!=undefined && b!= undefined & c!= undefined){
            console.log(a+b+c)
        }
        else if(a!=undefined && b!= undefined){
            console.log(a+b)
        }
        else("Can not add single digit")
    }
}

let totalCount = new countTotal()
totalCount.calculator(12,13,56)

