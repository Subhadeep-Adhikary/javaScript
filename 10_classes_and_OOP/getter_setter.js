class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = String(value).toUpperCase();
    }
}

const subha=new user("subhadee@gmail.com",123)
console.log(subha.password)