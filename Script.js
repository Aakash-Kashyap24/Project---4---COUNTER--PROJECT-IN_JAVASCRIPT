// let enterInput=document.querySelector(".enterMessage");
let countShow=document.querySelector(".showCount");
let addBtn = document.querySelector(".addBtn");
let subBtn = document.querySelector(".subBtn");
let resetBtn = document.querySelector(".resetBtn");
let num=0;
countShow.innerHTML=num;
addBtn.addEventListener('click', ()=>{
    
    num++;
    if (num>0) {
        // countShow.style.background='green';
        countShow.classList.remove('redBlink');

    countShow.classList.add('blink');
        
    }
    else{

        countShow.style.color='rgb(0, 255, 0)';

    }
      countShow.innerHTML=num;


})

subBtn.addEventListener('click', ()=>{
        num--;
     if (num<0) {
        // countShow.style.background='red';
        countShow.classList.remove('blink');

    countShow.classList.add('redBlink');
        
    }
     else{
        countShow.style.color='rgb(37, 1, 1)';

    }
    // countShow.classList.add('redBlink');
      countShow.innerHTML=num;

})

resetBtn.addEventListener('click', ()=>{
    
    num=0;
        countShow.innerHTML=num;
        // countShow.classList.remove('blink');
        // countShow.classList.remove('redBlink');
        // countShow.style.background='gray';




})
