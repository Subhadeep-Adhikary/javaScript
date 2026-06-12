function multipleby(num){
    return num*5
}
multipleby.power=2;

console.log(multipleby(5))
console.log(multipleby.power)
console.log(multipleby.prototype)

function createUser(username, score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    score++;
}
createUser.prototype.printME=function(){
    console.log(`The name of the user is ${this.username} and the score is ${this.score}`)
}

const coffe=new createUser("cafechino",350)
const blkcoffe=new createUser("blackcoffe",150)

blkcoffe.printME()