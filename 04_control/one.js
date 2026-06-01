//if

if (conditon=true){
   console.log("execute")
}
if(condition=false){
    console.log("will not execute")
}

const isUserLoggedIn=true

if (isUserLoggedIn){
    console.log(`Wellcome user`)
}

if (2=="2"){
    console.log("you are true")
}

if (2==="2"){
    console.log("you are not true")
}

// if-else
const temprature=41
if (temprature<40){
    console.log("Temprature is less than 40")
}else{
    console.log("temprature is not less then 40")
}


const score= 200

if(score>100){
    const power="Fly"
    console.log(`user's power ${power}`)
}

// console.log(`${power}`)

const balance=1000
if (balance>500) console.log("Test"),console.log("test2");

//nested
if(balance<500){
    console.log("Less than 500")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else{
    console.log("Greater than 900")
}


const DebitCard=true
const LoggedInFromGoggle=false
const LoggedInFromEmail=true

if(isUserLoggedIn && DebitCard){
    console.log("Allowed to purchase")
}

if (LoggedInFromGoggle || LoggedInFromEmail){
    console.log("User logged in")
}