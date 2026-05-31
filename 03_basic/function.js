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

//If parameter is not given it takes it as undefine
/*
function loginUserMassage(username){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} Just logged in`
}

console.log(loginUserMassage("Subhadeep"))
console.log(loginUserMassage())
*/


//Never takes parameter undefine and with the default parameter can be oveerriden with given parameter
function loginUserMassage(username="Sam"){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} Just logged in`
}

console.log(loginUserMassage("Subhadeep"))
console.log(loginUserMassage())

function calculateCartPrice(val1,val2,...num1){
   return num1
}
console.log(calculateCartPrice(200,400,500,2000))

const product={
   name:"fan",
   price:"1250"
}

function handleObject(anyobject){
    console.log(`Object name is ${anyobject.name} and price is %${anyobject.price}`)
    return
}
console.log(handleObject(product))
handleObject({
    name:"Book",
    price:"200"
})

const myNewArray=[200,400,100,600]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArray))