//array

const array= [0,1,4,true,"name"]
const heros=["Shaktiman","Captain America","Kakashi","Jhonny Sins"]
console.log(array[3])

const myArr2=new Array(1 , 2, 3, 4)
console.log(myArr2[0])

//Methods

myArr2.push(6)//add to thr last
myArr2.push(5)
myArr2.pop()
myArr2.unshift(0)//add to the first
console.log(myArr2)
console.log(myArr2.includes(9))
console.log(myArr2.indexOf(9))

const newArr=myArr2.join(array)

console.log(newArr)
console.log(myArr2)
console.log(typeof(newArr))
console.log(typeof(myArr2))

console.log("A ", myArr2)
const myn1= myArr2.slice(1,3)
console.log(myn1)
console.log("A ", myArr2)
const myn2=myArr2.splice(1,3)
console.log(myn2)
console.log("C", myArr2)