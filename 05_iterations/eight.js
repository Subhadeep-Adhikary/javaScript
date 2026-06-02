const myNums=[1 ,2 ,3]

// const myTotal= myNums.reduce(function(acc,curval){
//     return acc+curval
// },0)

const myTotal=myNums.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal)

const shopingcart=[
    {
        itemname:"potato",
        price:12,
        q:2
    },
    {
        itemname:"Onion",
        price:20,
        q:1
    },
    {
        itemname:"Carrot",
        price:15,
        q:2
    }
]

const totalPrice=shopingcart.reduce((acc,item)=>acc+(item.price*item.q),0)
console.log(totalPrice);
