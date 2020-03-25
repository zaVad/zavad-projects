//Blackjack-project//

//event listeners for buttons//
const hitButton= document.querySelector('#blackjack-hit-button');
hitButton.addEventListener('click',blackjackHit);

const dealButton =document.querySelector('#blackjack-deal-button');
dealButton.addEventListener('click',blackjackDeal);

const standButton =document.querySelector('#blackjack-stand-button');
standButton.addEventListener('click',standFunction);
 



//blackjack game object---all info in a object..//
let blackjackGame={
    you:{scoreSpan:'#your-blackjack-result',div:'#your-box',score:0},
    dealer:{scoreSpan:'#dealer-blackjack-result',div:'#dealer-box',score:0},
    cards:['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
    cardsValue:{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},
    wins: 0,
    losses:0,
    draws:0,
    stands: false,
    turnsOver: false,
    moving: false,

};


//global variables//
let YOU =blackjackGame['you'];
let DEALER =blackjackGame['dealer'];
const cardsArrey =blackjackGame['cards'];
let hitSound =new Audio('./sound/swish.m4a');
let winSound =new Audio('./sound/cash.mp3');
let loseSound= new Audio('./sound/aww.mp3');
const cardsValue =blackjackGame['cardsValue'];







 
 // hitbutton main function//
function blackjackHit(){
    
  if(blackjackGame['stands'] === false){
    blackjackGame['turnsOver']=false;  
    const CARD =randomCard();
    showCard(YOU,CARD);
    updateScore(YOU,CARD);
    showScore(YOU,CARD);
    if(YOU['score']>21){
        showResult(determineWinner());
        blackjackGame['stands']=true;
    }
    if(YOU['score']>21 && DEALER['score']===0){
        blackjackGame['turnsOver']=true;
        
    }
    
    }
    
};



//hitbutton internal functions//

function showCard(activePlayer,CARD){
    if(activePlayer['score']<=21){
    let cardImage=  document.createElement('img');
  cardImage.src=`./img/${CARD}.png`;
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
 };
};

function randomCard(){
    let randNumber = Math.floor(Math.random()*13);
    return cardsArrey[randNumber];
};
 

function updateScore(activePlayer,CARD){
    
    if(CARD==='A'){
        if(activePlayer['score']+cardsValue[CARD][1]<=21){
            activePlayer['score']+=cardsValue[CARD][1];
        }
        else{
            activePlayer['score']+=cardsValue[CARD][0];
        }
    }
    else{
        activePlayer['score']+=cardsValue[CARD];
    }
};

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent='DIED'
        document.querySelector(activePlayer['scoreSpan']).style.color='red'
    }
    else{
    document.querySelector(activePlayer ['scoreSpan']).textContent=activePlayer['score'];
    }
    
   
    
};


//dealbutton main function//

function blackjackDeal(){
    if(blackjackGame['turnsOver']===true){
    let yourImages=document.querySelector(YOU['div']).querySelectorAll('img');
    let dealerImages=document.querySelector(DEALER['div']).querySelectorAll('img');
    yourImages.forEach(function(img){
        img.remove();
    });
    dealerImages.forEach(function(img){
        img.remove();
    });
    YOU['score']=0
    DEALER['score']=0
    document.querySelector(YOU['scoreSpan']).textContent=0;
    document.querySelector(DEALER['scoreSpan']).textContent=0;
    document.querySelector(DEALER['scoreSpan']).style.color='';
    document.querySelector(YOU['scoreSpan']).style.color='';
    document.querySelector('#blackjack-result').textContent = "Let's play !";
    document.querySelector('#blackjack-result').style.color = "black";
    blackjackGame['stands']=false;
    
    }
};

//stand main function//

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}


async function standFunction(){
    if(YOU['score']!==0){
        blackjackGame['stands']=true;
        if(YOU['score']<=21){
        while(DEALER['score']<=16 && blackjackGame['stands']===true){
        let CARD = randomCard();
        showCard(DEALER,CARD);
        updateScore(DEALER,CARD);
        showScore(DEALER,CARD);
        
        await sleep(500);
        if(DEALER['score']>=16){
            
            
            showResult(determineWinner());
            
            blackjackGame['turnsOver']=true;
            
        }
        
        } 
    }
    
};


    
};

//function determining who won and who lost//

function determineWinner(){
    let winner =''
    if(YOU['score']<=21){
        
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            winner=YOU;
            blackjackGame['wins']++;
        }
        else if(YOU['score']<DEALER['score']){
            winner=DEALER;
            blackjackGame['losses']++;
            
            
        }
        else if(YOU['score']===DEALER['score']){
            blackjackGame['draws']++;
            

        }
        else if(YOU['score']>21 && DEALER['score']>21){
            blackjackGame['draws']++;

        }
        else if(YOU['score']> 21 && DEALER['score']<=21){
            winner=DEALER;
            blackjackGame['wins']++
        }
    }
    else{
        winner=DEALER;
        blackjackGame['losses']++

    };
    console.log(blackjackGame);    
    return winner;

};

function showResult(winner){

    let message , messageColor;
    
    if(winner === YOU){
        message ='YOU WON !';
        messageColor ='green';
        winSound.play();
        


    }
    else if(winner=== DEALER){
        message ='YOU LOST !';
        messageColor ='red';
        loseSound.play();
        
        
    }
    else{
        message ='YOU DREW';
        messageColor ='black';
        
    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
    
    document.querySelector('#wins').textContent=blackjackGame['wins'];
    document.querySelector('#losses').textContent=blackjackGame['losses'];
    document.querySelector('#draws').textContent=blackjackGame['draws'];
    
    
    if(YOU['score']>21){
        document.querySelector('#losses').textContent=blackjackGame['losses'];
    }

};



