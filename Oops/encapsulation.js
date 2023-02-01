/// encapsulation

// closure

function countOne() {
    let count = 0

    return function () {
        count = count + 1
        console.log(count)
    }
}
let cc = countOne()
cc()
cc()
cc()


///

class student {
    constructor() {
        let salary = 20000
        let bonus = 1000
        this.getSalary = function () {
            this.salary = salary
            console.log(salary)
        }
        this.getBonus = function () {
            this.bonus = bonus
            console.log(bonus)
        }
    }
}

let PP = new student()
PP.getSalary()
console.log(PP.salary)

////////////// problem block scope is accessible in global scope ////

class family {

    constructor(fn, ln, ag) {
        this._firstName = fn
        this._lastName = ln
        this._age = ag
    }
    getAge() {
        console.log(this._age)
    }
    getfirstName() {
        console.log(this._firstName)
    }
    getlastName() {
        console.log(this._lastName)
    }
}

let Prasad = new family("Prasad", "Jadhav", 34)
console.log(Prasad)
Prasad._firstName = "Prasad1"
console.log(Prasad._firstName)


///////////////////////////////////////////////////////////////////////////

// solution = Abstraction (use function constructor)

let employee = function (fn, ln, ag, salary) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.salary = salary
    let bonus = 500

    this.getupdateSalary = function () {
        console.log(this.salary + bonus)
    }

}
let Prasad1 = new employee("Prasad", "Jadhav", 34, 15000)
Prasad1.getupdateSalary()
// Prasad1.bonus = 1000  // anyone can change the amount of bonus which we dont want
Prasad1.getupdateSalary()
console.log(Prasad1.bonus)


////////////////////////////////////////////////////////////////////////////////////////

function cars(cn, mb, pc) {
    this.carName = cn
    this.madeBy = mb
    this.price = pc
    let priceNextyear = 20000

    this.getPriceNextYear = function () {
        console.log(this.price + priceNextyear)
    }
}

let Swift = new cars("Swift", "Maruti Suzuki", 650000)
console.log(Swift)
Swift.getPriceNextYear()
Swift.priceNextyear = 30000
Swift.getPriceNextYear()


//////////////////////////////////////////////////

function bank(ah, an) {
    this.accountHolder = ah
    this.accountNumber = an
    let accountBalance = 50000

    this.getBalance = function () {
        console.log(accountBalance)
    }
}
let savingAccount = new bank("Prasad Jadhav", 123456)
savingAccount.accountBalance = 20000
savingAccount.getBalance()


///////////////////////////////////////////////////////////////////////////

function myBank(ah, an, ab) {
    this.accountHolder = ah
    this.accountNumber = an
    this.accountBalance = ab
    let fixedDeposit = 50000

    this.getTotalBalance = function () {
        console.log(this.accountBalance + fixedDeposit)
    }
}

let cAccount = new myBank("Tejashree Jadhav", 345678, 150000)
cAccount.getTotalBalance()
// fixedDeposit = 111111
cAccount.getTotalBalance()
// cAccount.fixedDeposit = 44000
cAccount.getTotalBalance()

// console.log(cAccount)


//////////////////////////////////////////////////////////////////////////////////////

function banks(ah, an, ac) {
    this.accountHolder = ah
    this.accountNumber = an
    this.accountBalance = ac
    let fixedDeposit = 45000

    this.getTotalBalance = function () {
        console.log(this.accountBalance + fixedDeposit)
    }
}

let UBI = new banks("Prasad Jadhav", 499802010302580, 300000)
console.log(UBI)
fixedDeposit = 50000
UBI.getTotalBalance()


function bankAccount(ah,an,ab){
    this.accountHolder = ah
    this.accountNumber = an
    this.accountBalance = ab
    let fixedDeposit = 50000

    this.getTotalBalance=function(){
        console.log(this.accountBalance + fixedDeposit)
    }
}

let AJ = new bankAccount("Anshika Jadhav", 123456, 135000)
AJ.fixedDeposit = 40000
AJ.getTotalBalance()



