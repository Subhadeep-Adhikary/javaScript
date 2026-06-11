const promish1=new Promise(function(resolve,reject){
    //Do an Async
    //DB calls,Cryptography,network
    setTimeout(function(){
        console.log('Async task is compleate')
        resolve()
    },1000)
})

promish1.then(function(){
    console.log("Promish consumeed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promishThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"js",email:"javascript@example.com"})
    },1000)
})
promishThree.then(function(user){
    console.log(user);
})

const promishFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Aman",password:"123"})
        }else{
            reject("Error: something went wrong")
        }
    },1000)
})

promishFour
.then((user)=>{
    console.log('user');
    return user.username;
})
.then((username)=>{
  console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("the Promish is either resolved or rejected"))

console.log('username')

const promishfive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Amar",password:"153"})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
});
async function consumePromishFive(){
    try{
  const response=await promishfive
  console.log(response);
  }
  catch(error){
    console.log(error)
  }
}

consumePromishFive()

async function getALlUsers(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)}
    catch(error){
        console.log("E :",error);
    }
}
getALlUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}
).catch((error)=>console.log(error))