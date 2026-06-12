let myname="Subhadeep"

console.log(myname.trim().length);

let myheros=['thor','spiderman']

let heropower={
    thor:"hammer",
    spiderman:"String",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.subha=function(){
    console.log(`Subha is present in all object`)
}

Array.prototype.heySubha=function(){
    console.log("Someone says hello")
}

myheros.subha()
myheros.heySubha()
// heropower.heySubha()

const user={
    name:"javaScript",
    email:"javaScript@example.com"
}
const developer={
    makeVideo:true
}

const devsupport={
    isAvailable:false
}

const DEsupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:devsupport
}

developer.__proto__= user

//modern syntax
Object.setPrototypeOf(devsupport,developer)

let anotherUsername="Subhadeep_Adhikary"

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
   console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"Subha".trueLength()