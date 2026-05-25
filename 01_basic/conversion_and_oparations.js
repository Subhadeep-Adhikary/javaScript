let score= false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber)


//"33" => 33
//"33abc" => NaN
//null => 0
//true => 1

let isLoggedIn=undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true; 0 => false;
//"" => false; "Something"=> true 
//null/undefined => false

let someNumber=33

let StringNumber= String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)





//---------------------Oparations---------------------

let value =3
let negvalue= -value
console.log(negvalue)

let str1="Hello";
let str2="World"

let fullstr= str1 + " " + str2
console.log(fullstr)

console.log("1"+ 2)
console.log(typeof("1"+2));
console.log(1+'2')
console.log("1"+2+2)
console.log(1+2+'2')
console.log(+true)
console.log(+"")

let num1,num2,num3

num1=num2=num3=2*3+1
console.log(num1)

let gameCounter =100
++gameCounter;
console.log(gameCounter);

