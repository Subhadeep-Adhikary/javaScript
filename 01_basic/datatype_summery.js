// Premitive data type

//  7 types : String, Numberss, Boolean, null, undefined, Symbol, BigInt

const score=100;
const scoreValue=100.333

const isLoggedIn= false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=2652645415465
4944944494n;




// Reference (Non premitive)

// Array, Object, Functions

const heros=["Shaktiman","Thor","Iron Man"];

let myObj={
    name:"Iron Man",
    age:22,
};

const myFunction=function() 
{
    console.log("hello world")
}

console.log(typeof myFunction)
console.log(typeof myObj)





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive), Heap(Non-Premitive)

let myName="Subhadeep"
