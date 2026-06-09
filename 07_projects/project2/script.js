const form=document.querySelector('form');
const results=document.querySelector('.result')
const underweight=document.querySelector('#Underweight')
const normal=document.querySelector('#Normal')
const overweight=document.querySelector('#Overweight')
const obese=document.querySelector('#Obesity')
form.addEventListener('submit',function(e) {
    e.preventDefault()
    // const height=parseInt(document.querySelector('.hight').value)
    const height = parseInt(document.querySelector('.height').value)
    const Weight=parseInt(document.querySelector('.weight').value)
    const listItems=document.querySelectorAll('.bmi-categories li')
    listItems.forEach(function(item){
        item.style.backgroundColor='transparent'
    })
    if(height===''||height<0||isNaN(height)){
        results.innerHTML="Pleaswe give a valide hight"
    }
    else if(Weight===''||Weight<0||isNaN(Weight)){
        results.innerHTML="Pleaswe give a valide hight"
    }else{
       const BMI= (Weight/((height*height)/10000)).toFixed(2)
       results.innerHTML=`<span>${BMI}</span>`
       if(BMI<18.5){
        underweight.style.backgroundColor='grey';
       }
       else if(BMI>=18.5 && BMI<24.9){
        normal.style.backgroundColor='green';
       }
       else if(BMI>=25 && BMI<29.9){
        overweight.style.backgroundColor='orange';
       }
       else if(BMI>=30){
        obese.style.backgroundColor='red';
       }
    }
})