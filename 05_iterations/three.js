//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greeting='Hello World!'
for (const greet of greeting) {
    console.log(`Each charecter is ${greet}`)    
}

//Maps

const map= new Map()
map.set('IN','INDIA')
map.set('USA','United State of America')
map.set('FI',"france")

console.log(map)

for (const [key , value] of map) {
     console.log(key,"=>",value)   
}

const myobj={
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const [key,value] of myobj) {
//     console.log(key,"=>",value);    
// }


// for (const key in map) {
//    console.log(key)
// }