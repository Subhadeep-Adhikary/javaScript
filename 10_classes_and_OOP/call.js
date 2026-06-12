function SetUsernamr(username){
    this.username=username
}

function createuser(username,email,password){
    SetUsernamr.call(this, username)
    this.email=email
    this.password=password
}

const new1=new createuser("someone","Someone123@gmail.com","123")
console.log(new1)