console.log(3 == 3.0)
console.log('3')
console.log(typeof '3')
console.log(Number('23'))
console.log(typeof +'3')

//// parseInt method // seperate the number from string if string starts with number
// does not returns if number is with decimals(only returns number)

let a = Number.parseInt('20pa')
console.log(a)

let b = Number.parseInt("pra23pa") // will return NaN as strinf does not start with number
console.log(b)

/// parseFloat method : returns the number with decimals from a string if available

let c = Number.parseFloat("30.55pa")
console.log(c)


// Number.isNaN =  to check wheather the value can be converted in number

let x = Number.isNaN("20")
console.log(x)

let y = Number.isNaN(20)
console.log(y)

let y1 = Number.isNaN(+'20')
console.log(y1)

let y2 = Number.isNaN(10 / 0)
console.log(y2)


// isFinity() = also use =  to check wheather the value is number

let x1 = Number.isFinite(20)
console.log(x1)

let x2 = Number.isFinite("20")
console.log(x2)

let x3 = Number.isFinite(+'20')
console.log(x3)

let x4 = Number.isFinite(10 / 2)
console.log(x4)


// isInteger = returns the datatype

let a1 = Number.isInteger(23.4)
console.log(a1)

let a2 = Number.isInteger(34)
console.log(a2)

let a3 = Number.isInteger("34")
console.log(a3)

let a4 = Number.isInteger(35.3)
console.log(a4)


// isFloat

let b1 = Number.MIN_SAFE_INTEGER  // returns the lowest number
console.log(b1)

let b2 = Number.MAX_SAFE_INTEGER  // returns the highest number
console.log(b2)


// es20

// to get squeare root

let c1 = Math.sqrt(100)
console.log(c1)

// to get square 

let c2 = (4 ** 2)
console.log(c2)

let c3 = (6 ** 2)
console.log(c3)

// Math.max = to get maximum number 

let max = Math.max(34, -45, 555, 567, -4444, 67, 5601, 234, -1234)
console.log(max)

// Math.min = to get min number

let min = Math.min(34, -45, 555, 567, -4444, 67, 5601, 234, -1234)
console.log(min)

// PI

let PI = Math.PI
console.log(PI)

let d1 = Math.trunc(44.56) // removes the decimal
console.log(d1)

let d2 = Math.trunc(56.89)
console.log(d2)

let d3 = Math.ceil(23.12)  // always consider the next value 23.12 = 24
console.log(d3)

let d4 = Math.floor(67.17)   // always consider the lowest  value 67.17 = 67
console.log(d4)

let d5 = Math.trunc(-26.30) // removes the decimal
console.log(d5)

let d6 = Math.floor(-45.34) // will return -46 as 46 is lowest from -45.34
console.log(d6)

let d7 = Math.ceil(-45.56) // returns the highest value 
console.log(d7)

let d8 = -34 > -56
console.log(d8)

let e1 = Math.round(45.12)
console.log(e1)

let e2 = Math.round(45.56)
console.log(e2)

let num = 3456.678990
let e3 = num.toFixed(2)
console.log(e3)

let aa = Number.isInteger(44)
console.log(aa)

console.log(Math.trunc(56.10))

console.log(Number.isNaN("12"))

console.log(Number.isInteger(12.5))

let name = "123Prasad"
let name1 = Number.parseInt(name)
console.log(name1)

let qq = "123.4456aaa"
let qw = Number.parseFloat(qq)
console.log(qw)

let ww = "aa123.44"
let we = Number.parseFloat(ww)
console.log(we)

console.log(Number.isFinite(33))

console.log(Number.isInteger(33))

console.log(Number.isInteger(33.14))

console.log(Number.isFinite(33.14))

let can = 456.5656
let count = can.toFixed(2)
console.log(count)

let total = 3456.789
let cal = total.toFixed(2)
console.log(cal)

let ac = "123prasad"
let ac1 = Number.parseInt(ac)
console.log(ac1)

let ad = "123.45prasad"
let ad1 = Number.parseInt(ad)
let ad2 = Number.parseFloat(ad)
console.log(ad1)
console.log(ad2)

console.log(Number.isNaN('12.56'))
console.log(Number.isInteger('34'))

let aabc = 12.59
let ee = Math.ceil(aabc)
console.log(ee)

let bb = Math.round(12.30)
console.log(bb)

let cc = Math.trunc(34.67)
console.log(cc)

let mm = Number.MAX_SAFE_INTEGER
console.log(mm)

let nn = 15
let n = nn.toString(2)
console.log(n)

let an = 234.567
let pc = Number.isFinite(an)
console.log(pc)


let date = new Date(2022, 11, 12, 09, 18, 50)
console.log(date)

let rr = date.getFullYear()
console.log(rr)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getMilliseconds())
console.log(date.getMonth())

let time = 45n * 45n
console.log(time)

console.log(45n == 45)

let mn = 234456778807654433556777344n * 3456678890554333455n
console.log(mn)

console.log(typeof mn)

let date1 = new Date()
console.log(date1.getTime())

let date2 = new Date(1659290234572)
console.log(date2)

let months = ["January", "February", "March", "April", "May", "June", "July", "August",
    "september", "October", "November", "December"]

let d = new Date(2022, 11, 14, 09, 34, 56)
let month = months[d.getMonth()]
console.log(month)
console.log(d.getSeconds())
console.log(d.getDay())

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let dd1 = new Date()
let day = days[dd1.getDay()]
console.log(day)

let dd2 = new Date(2024, 07, 27)
let day1 = days[dd2.getDay()]
console.log(day1)

let dd3 = new Date(2034, 10, 12)
let day3 = days[dd3.getDay()]
console.log(day3)

let month1 = months[dd3.getMonth()]
console.log(month1)

let de1 = new Date(2028, 03, 09, 12, 45, 43)
let days1 = days[de1.getDay()]
console.log(days1)
console.log(de1.getFullYear())
console.log(de1.getMonth())
console.log(de1.getHours())

console.log(Number.isInteger(12))
console.log(Number.isFinite(12.56))
console.log(Number.parseInt("123prasad"))
console.log(Number.MIN_SAFE_INTEGER)
console.log(de1)

let numbers = 455678904676389248058867698868797768n * 4787866598977588987434377980977n
console.log(numbers)
console.log(typeof numbers)

console.log(Math.trunc(34.78))
console.log(Math.ceil(33.33))
console.log(Math.floor(33.33))
console.log(Math.ceil(-33.33))
console.log(Math.floor(-33.33))
console.log(Math.round(-33.56))
console.log(Math.random() * 2) + 1
console.log(Math.sqrt(36))
console.log(34 ** 2)


