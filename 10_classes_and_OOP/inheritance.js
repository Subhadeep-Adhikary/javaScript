class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new coursw was added by ${this.username}`)
    }
}

const choice= new Teacher("Bikram","jaljera@gmail.com","166")

choice.addCourse()


const studentone=new user("Sundar","sundarstu@gmail.com","176")

studentone.logMe()

console.log(choice==studentone)

console.log(choice instanceof user);
