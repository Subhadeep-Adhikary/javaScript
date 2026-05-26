let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2026, 4 ,28)
let myCreatedDate = new Date(2026, 4 ,28, 4, 3)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let anotherdate = new Date()
console.log(anotherdate.getMonth()+1)
console.log(anotherdate.getDay())

const anDate = anotherdate.toLocaleString('default',{
    weekday:"long",
})

console.log(anDate)