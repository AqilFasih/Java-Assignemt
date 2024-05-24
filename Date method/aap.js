var date_heading = document.getElementById("currentDate")

var onlyDate = document.getElementById("onlyDate")

var onlyDateFormat = document.getElementById("onlyDateFormat")

var time = document.getElementById("time")


console.log(date_heading)
console.log(onlyDate)
console.log(onlyDateFormat)
console.log(time)


var now = new Date () 
date_heading.innerHTML = now 

onlyDate.innerText = "Current Date => " + now.toDateString()
onlyDateFormat.innerText = "Format Date => " + now.toLocaleDateString()
time.innerText = "Time => " + now.toLocaleTimeString()

console.log ('year =>' , now.getFullYear())
console.log ('Hours =>' , now.getHours())
console.log ('Min =>', now.getMinutes() )
var days = [ 'Sunday' , 'Monday', 'Tuesday' , 'Wednesday' ,'Thuesday' , 'Friday','Saturday']
console.log ('Days =>' , days [now.getDay()] )
console.log ( 'Month =>' , now.getMonth())




var now = newDate ()

console.log("Milleseconds=> ",now.getTime())
console.log("seconds=> ",now.getTime() / 1000 )
console.log("minute=> ",now.getTime() / 1000 /60  )
console.log("hour=> ",now.getTime() / 1000/60 / 60 )
console.log("day=> ",now.getTime() / 1000 / 60 / 60 / 24)
 
console.log("month=> ",now.getTime() / 1000 / 60 / 60 / 24 / 30)

console.log("years=> ",Math.floor(now.getTime() / 1000 / 60 / 60 / 24 / 30 / 12))

var fahadBirthDate = new Date("December 14,2006")
fahadBirthDate.setDate(14)
fahadBirthDate.setMonth(11)
fahadBirthDate.setFullYear(2006)

var difference = now.getTime() - fahadBirthDate.getTime()
console.log(difference)

var birthDate = document.getElementById('birthdate')









