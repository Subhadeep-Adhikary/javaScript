//prop

class user{
    constructor(username){
      this.username=username
    }
    logme(){
        cxonsole.log(`Username is ${this.username}`)
    }
    
    static createId(){
        return '123'
    }
}

const subh=new user("Subhadeep")
// console.log(subh.createId())

class Teacher extends user{
    constructor(email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iPhone","i@phone.com")
console.log(iphone.createId());