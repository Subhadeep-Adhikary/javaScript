const form=document.querySelector('.guess-form');
let attempts=10;
let previousarray=[];
const comp=Math.floor(Math.random()*100)+1;
const notation=document.querySelector('.number')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const number=parseInt(form.querySelector('.guess-input').value)
    if(number==comp){
        document.body.innerHTML='<div class="success">The gurss was right</div><button class="btn reset-btn">restart</button>';
        const div=document.querySelector('.success');
        div.style.color="green";
        div.style.display="block";
    }
    else{
        attempts-=1
        if(attempts!=0){
        previousarray.push(number);
        document.querySelector('.remaining').querySelector('span').innerHTML=attempts;
        document.querySelector('.previous').querySelector('span').innerHTML=previousarray;
        const input=document.querySelector('input');
        input.value="";
        if(number<comp){
        notation.innerHTML="Too low";
        notation.style.color="red";
        notation.style.fontSize="20px";
       }else if(number>comp){
        notation.innerHTML="Too high";
        notation.style.color="green";
        notation.style.fontSize="20px";
        }
    }
    else{
        document.body.innerHTML='<div class="dengour">Game over</div><button class="btn reset-btn">restart</button>';
    }
    }
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('reset-btn')) {
        location.reload();
    }
});
