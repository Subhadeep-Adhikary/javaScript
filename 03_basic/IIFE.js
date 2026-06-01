//Immediately Invoke Function Expressions

//named IIFE
(function DB(){
    console.log('DB Connected');
})();

//unnanmed IIFE
( (name)=>{
    console.log(`DB Connected Two ${name} `)
})("SQL");