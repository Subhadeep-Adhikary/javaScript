const product= {
    name:"Book",
    price:199,

    OnPerchase:function(){
        console.log(`${this.name} has sold`)
        console.log(this)
    }
}

product.OnPerchase()
product.name = "bottle";
product.OnPerchase()

// console.log(this)
function one(){
    let name="Subhadeep Adhikary"
    console.log(this)
}

one()

//arrow function

const newfunction = ()=>{
    let username="Subhadeep"
    console.log(this)
}

newfunction()

const add=(num1,num2)=>(num1+num2)

console.log(add(2,3))


const myarray =[2,3,5,8,7]

//myarray.forEach9()