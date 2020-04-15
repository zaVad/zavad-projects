 const  times = document.querySelector('.fa-times');
 const nav= document.getElementById('nav-active');
 const menuToggle= document.querySelector('.menu-toggle');
 const overlay =document.querySelector('.overlay');
 
 menuToggle.addEventListener('click',function(e){
     nav.classList.add('active');
     overlay.classList.add('open');
     
 })
 
 

 times.addEventListener('click',function(e){
     nav.classList.remove('active');
     overlay.classList.remove('open');
    

 })
 