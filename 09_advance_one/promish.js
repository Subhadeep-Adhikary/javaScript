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
        resolve({username:"js",email:"javascript@example.com"},1000)
    })
})
promishThree.then(function(user){
    console.log(user);
})

const promishFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username})
        }
    })
})