
let b = document.querySelector('#menu');
let c = document.querySelector('#close');
let a = document.querySelector('.main');



b.addEventListener('click',function(){
    a.classList.add('active');
    b.classList.add('active');
    c.classList.add('active');
    
    
})
c.addEventListener('click',function(){
    a.classList.remove('active');
    b.classList.remove('active');
    c.classList.remove('active');
    
})





let sect = document.querySelector('.serv');
let pro = document.querySelector('.project');
let box = document.querySelectorAll('.box');
let box2 = document.querySelectorAll('.box2');
let why = document.querySelector('.why');
let whybtn = document.querySelector('.whybtn');
let info = document.querySelectorAll('.info');



window.onscroll = function(){
    if(window.scrollY >= sect.offsetTop - 10){
        box.forEach((box) => {
            box.style.left = '0';
        })
       
    }
    if(window.scrollY >= why.offsetTop - 10){
        info.forEach((info) => {
            info.style.left = '0';
        }
      
    )
    whybtn.style.right= '0';
    }
    if(window.scrollY >= pro.offsetTop - 10){
        box2.forEach((box2) => {
            box2.style.left = '0';
        })
       
    }
};




