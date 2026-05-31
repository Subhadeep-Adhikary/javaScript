function SayMyName(){
console.log("S");
console.log("u")
console.log("b")
console.log("h")
console.log("a")
console.log("d")
console.log("e")
console.log("e")
console.log("p")
}

SayMyName //Its a refernce because it has no parentesis
SayMyName()  //This is a perfect function call
/*
function AddNumbers(num1,num2){
    console.log(num1+num2)
}
AddNumbers(3,6)
AddNumbers(3,"4")
const result=AddNumbers(3,null)
console.log("Result :",result)*/

function AddNumbers(num1,num2){
    // const result=num1+num2
    // return result
    return num1+num2
}
const result= AddNumbers(9,2)
console.log("Result : ",result)