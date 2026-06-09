const form=document.querySelector('.guess-form');
let attempts=10;
const restart=document.querySelector('.reset-btn')
let previousarray=[];
const comp=Math.floor(Math.random()*10)+1;
form.addEventListener('submit',function(e){
    e.preventDefault();
    const number=parseInt(form.querySelector('.guess-input').value)
    if(number==comp){
        document.body.innerHTML='<div class="success">The gurss was right</div><button>restart</button>';
        const div=document.querySelector('.success');
        div.style.color="green";
        div.style.display="block";
    }
    else{
        attempts-=1;
        previousarray.push(number);
        document.querySelector('.remaining').querySelector('span').innerHTML=attempts;
        document.querySelector('.previous').querySelector('span').innerHTML=previousarray;
        const input=document.querySelector('input');
        input.value="";
    }
});
restart.addEventListener('click',()=>{
   attempts=10;
   previousarray=[]
   document.querySelector('.remaining').querySelector('span').innerHTML=attempts;
   document.querySelector('.previous').querySelector('span').innerHTML=previousarray;
   const input=document.querySelector('input');
   input.value="";
});