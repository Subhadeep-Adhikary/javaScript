// const appuser= new Object()

const appuser={}

appuser.id="123abc"
appuser.name="Ravi"
appuser.isLoggedIn=false

console.log(appuser)

const regularuser={
    email:"some1@gmail.com",
    fulname:{
        user_fulname:{
            firstname:"Someone",
            lastname:"Bhattachariya"
        }
    }
}

console.log(regularuser.fulname.user_fulname.firstname+" "+regularuser.fulname.user_fulname.lastname)

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj5={5:"a", 6:"b"}

const obj3={obj1, obj2}

const obj4= Object.assign({},obj1,obj2,obj5)

const obj6={...obj1,...obj2,...obj5}

console.log(obj3)
console.log(obj4)
console.log(obj6)

//for db oparation
const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"678@gmail.com"
    },
    {
        id:3,
        email:"jkc@gmail.com"
    }
]
console.log(users[1].email)
console.log(Object.keys(appuser))
console.log(Object.values(appuser))
console.log(Object.entries(appuser))

console.log(appuser.hasOwnProperty('isLogedIn')) //it cheaks is the object has following properety or not
