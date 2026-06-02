//for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

for (let i = 0; i <=10 ; i++) {
    console.log(`Outer Loop value ${i}`)
    for (j =0;j <=10;j++) {
        console.log(`${i}*${j} = ${i*j}`)      
    }    
}


let myArray=['Flash','Superman','Batman'] 
for (let k = 0; k < myArray.length; k++) {
    const element = myArray[k];
    console.log(element)
}

//break and continue

// for (let index = 1; index <= 20; index++){
//     if(index==5){
//         console.log("Detected number 5")
//         break;
//     }
//     console.log(index)
   
// }

for (let index = 1; index <= 20; index++){
    if(index==5){
        console.log("Detected number 5")
        continue;
    }
    console.log(index)
   
}