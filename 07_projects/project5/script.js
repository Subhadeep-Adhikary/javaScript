const startbtn=document.getElementById('start')
const stopbtn=document.getElementById('stop')
const body=document.querySelector('body')
let inverid=null

const randcolor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
        const index=Math.floor(Math.random()*16);
        color+=hex[index];
        
    }
    return color;
}
startbtn.addEventListener('click',function(){
    if(!inverid){
  inverid=setInterval(function(){
    body.style.backgroundColor=randcolor()
  },150)
}
})
stopbtn.addEventListener('click',function(){
    clearInterval(inverid)
    inverid=null;
})