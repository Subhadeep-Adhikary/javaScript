const descripter=Object.getOwnPropertyDescriptor(Math,"PI")


console.log(descripter)

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

descripter.value=5

const chai={
    name:'Ginger Chai',
    price:250,
    isAvailable:true,

    order:function(){
        console.log("is comming")
    }
}

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key,val] of Object.entries(chai)) {
    console.log(`${key}: ${val}`)
}