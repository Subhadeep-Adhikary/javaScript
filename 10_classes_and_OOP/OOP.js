const user={
    username:"Subhadeep",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Get users details from Database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    } 
}

console.log(user.username);
// console.log(user.getUserDetails());

const user2={
    username:"Subhadeep",
    loginCount:8,
    signedIm:true,
    getUserDetails:function(){
        // console.log("Get users details from Database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    } 
}

function User(username,loginCount,signedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signedIn=signedIn;
    
    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}
const userOne=new User("Subhadeep",20,true)
const userTwo=new User("Unknown",12,false)
console.log(userOne.constructor);
console.log(userTwo)