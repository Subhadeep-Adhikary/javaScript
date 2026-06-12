//ES6

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userone=new user("Someone","some@gamil.com","123")

console.log(userone.encryptPassword())
console.log(userone.changeUsername());

//behind the scene

// function User(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

// User.prototype.encryptPassword=function(){
//         return `${this.password}abc`
//     }

// User.prototype.changeUsername=function(){
//     return `${this.username.toUpperCase()}`
// }

// const usertwo=new User("console","console@gamil.com","183")

// console.log(usertwo.encryptPassword());
// console.log(usertwo.changeUsername());