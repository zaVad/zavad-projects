let loadContainer =document.querySelector('.load-container');
window.addEventListener('load',loader);
function loader(e){
    
    setTimeout(() => {
        loadContainer.style.display='none'
    },2750);
    
    
};





let send=document.querySelector('.send');
let invader=document.querySelector('.invader');
let gameOver=document.querySelector('.game-over');
const forma= document.getElementById('superform');

    
function superload(){
send.addEventListener('mouseenter',function(){
    invader.classList.add('open');
});



send.addEventListener('mouseleave',function(){
    invader.classList.remove("open");
    
    
});

send.addEventListener('mouseenter',function(){
    gameOver.classList.remove('show');
    

});

send.addEventListener('focus',(e)=>{
    
    
   document.querySelector('.thx').classList.add('show');
   invader.classList.remove('open');
   setTimeout(() => {
    document.querySelector('.thx').classList.remove('show');
       
   },1400); 

});

    

    forma.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const name=document.getElementById('name');
        const email=document.getElementById('email');
        const nameValue= name.value.trim();
        const emailValue= email.value.trim();
        
        if(nameValue===''){

            name.classList.add('error');
            setTimeout(() => {
                name.classList.remove('error');
                    
            }, 1000);
        }
        else{
            name.classList.add('success');
            setTimeout(() => {
                name.classList.remove('success');
                
            }, 1000);
        }
        if(emailValue===''){
            email.classList.add('error');
            setTimeout(() => {
                email.classList.remove('error');
                    
            }, 1000);
        }
        else{
            email.classList.add('success');
            setTimeout(() => {
                email.classList.remove('success');
                
            }, 1000);


        };
        
    });
};

    //button colors//
    let swit= document.getElementById('#skillcolor');
    
    let switcher =document.getElementsByTagName('select');
    let lights =document.querySelector('aside').getElementsByClassName('older');
    

    
    
    
    
    function colorChange(buttonThingy){
       if(buttonThingy.value ==='random'){
           randomFunction();
        }
        else if(buttonThingy.value ==='reset'){
           resetFunction();
        };
        if(buttonThingy.value ==='red'){
            redFunction();
        };
        if(buttonThingy.value ==='green'){
            greenFunction();

        }
        if(buttonThingy.value ==='blue'){
            blueFunction();

        };
        if(buttonThingy.value ==='purple'){
            purpleFunction();

        };
        if(buttonThingy.value ==='yellow'){
            yellowFunction();
        };
        if(buttonThingy.value ==='orange'){
            orangeFunction();

        };
        
        
       
    };
    let interId;
    let cubee=document.querySelectorAll('.content-color');
   let randomNumber= Math.floor(Math.random()*6);
   const choices =['first','second','third','forth','fifth','sixth','content-color'];
   function randomFunction(){
        interId=setInterval(function(){
       for(i=0; i<cubee.length; i++){
           let randomNumber = Math.floor(Math.random()*7);
           cubee[i].classList.remove(cubee[i].classList[0]);
           cubee[i].classList.add(choices[randomNumber]);
        };
    },500);
    
       
   };
   
   
   

    
   function resetFunction(){
    clearInterval(interId);
    for( i=0; i<cubee.length; i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('content-color');
    }
    
};

function redFunction(){
    clearInterval(interId);
    for(i=0; i<cubee.length;i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('first');
    };
};
function greenFunction(){
    clearInterval(interId);
    for(i=0; i<cubee.length;i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('forth');
    };
};
function blueFunction(){
    clearInterval(interId);
    for(i=0; i<cubee.length;i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('third');
    };
};
function orangeFunction(){
    clearInterval(interId);
    for(i=0; i<cubee.length;i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('second');
    };
};
function purpleFunction(){
    clearInterval(interId);
    for(i=0; i<cubee.length;i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('fifth');
    };
};
function yellowFunction(){
    clearInterval(interId);
    for(i=0; i<cubee.length;i++){
        cubee[i].classList.remove(cubee[i].classList[0]);
        cubee[i].classList.add('sixth');
    };
};
//mouse movement over cube changing skills colors//


 let overallCube =document.querySelector('.cube');
 
 overallCube.addEventListener('mousemove',changeSkillsColors);
 let cubeskills= document.querySelectorAll('.content-color');
 function changeSkillsColors(e){
    
    cubeskills.forEach(function(skill){
        skill.style.color="rgb("+e.offsetX+","+e.offsetY+","+e.offsetX+")";
    });
};
overallCube.addEventListener('mouseleave',removeColors);
function removeColors(){
    cubeskills.forEach(function(skill){
        skill.style.color='';

    });
};



 
 

 






