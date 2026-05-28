//singleton
// Object.create

//object litrals

const symb=Symbol("key1")
const jsUser={
    name: "Subhadeep",
    "fulname":"Subhadeep Adhikary",//only can be accesed through sqare notation
    [symb]:"mykey1",
    age: 18,
    locatiom: "barast",
    email: "subhadeep@gmail.com",
    isloggedIn:false,
    lastLoggedIn:["monday","sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["fulname"])
console.log(jsUser[symb])

jsUser.email="SubhadeepAdhikary@gmail.com"
// Object.freeze(jsUser)
jsUser.email="subhadeep@outlook.com"

console.log(jsUser.email)
console.log(jsUser)

jsUser.greeeting = function(){
    console.log(`hello user`)
}

jsUser.greetingTwo=function(){
    console.log(`Hello user, ${this.name}`)
}

console.log(jsUser.greeeting())
console.log(jsUser.greeeting)
console.log(jsUser.greetingTwo())

