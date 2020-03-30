 const hamMenu = document.querySelector('.hamburger-menu');
 const mainNav = document.querySelector('.main-nav');
 const navList =document.querySelector('.nav-list');
 const bar =document.querySelector('.bar');
 

 
 

 hamMenu.addEventListener('click',function(){
    
    mainNav.classList.toggle('open');
    hamMenu.classList.toggle('open');
    navList.classList.toggle('open');
});

gsap. fromTo('.hero-clipped',{scaleX: 0},{duration: 1 , scaleX: 1});
gsap. fromTo('.logo',{x: -200, opacity: 0} ,{duration: 1 , delay:0.5 , x: 0,opacity:1});
gsap. fromTo('.hamburger-menu',{x: 200, opacity: 0} ,{duration: 1 , delay: 0.8 , x: 0,opacity:1}); 
gsap. fromTo('.hero-textbox',{y: 200, opacity: 0} ,{duration: 1 , delay:1.3, y:0,opacity:1});