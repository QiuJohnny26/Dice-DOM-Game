/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/* Maintain Score between two players so one array of two values  */
var scores,roundScore,activePlayer,gamePlaying,prevRoll,input;


init();

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em';


document.querySelector('.btn-roll').addEventListener('click',function(){
  // 1.Random Number
    
     if(gamePlaying){
     var dice = Math.floor(Math.random() * 6)+1;
     

 // 2.Display the result
      diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

     
 //3. Update the round score if the rolled number was Not a 1
    if ( dice !== 1 ){
             roundScore += dice;
             document.querySelector('#current-' + activePlayer).textContent = roundScore;
             console.log(dice);

// New Rule if the User rolls two 6 in a row next player goes 
          if(prevRoll == dice){
               nextPlayer();
               dice = 0;
              }  
             prevRoll = dice;
              
      } 
        

    else {
      
             nextPlayer();
    }
    }});

     
     document.querySelector('.btn-hold').addEventListener('click',function(){
         if(gamePlaying){
         // Add Score to Current Score
            scores[activePlayer] += roundScore;
         // Update The UI
            
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
              input = document.querySelector('.final-score').value;
              if (input){
                  var winningScore=input;
              } 
             else{
                 winningScore = 100;
             }
         // Check if Player won the Game
            checkWin();
         }
     });



 
        
document.querySelector('.btn-new').addEventListener('click',init);
       

    

function nextPlayer(){
       
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
      
        document.querySelector('.dice').style.display = 'none'; 
}

function checkWin(){
        
       if(scores[activePlayer] >= input) {
        
        document.querySelector('#name-' + activePlayer).textContent = ' Winner ';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;
           
       }
      
     else{
            nextPlayer();
     }
       
     
}

function init(){
 
    gamePlaying = true;
    scores = [0,0];
/* Round Score Starts as 0 , while Active Player stays 0 until 1 for their turn */
    roundScore = 0;
    //activePlayer = 0;
    var randomNum = Math.floor(Math.random() * 1 ) + 0;
    activePlayer=randomNum;
    
    



    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-' + 0).textContent = 'Player-1';
    document.getElementById('name-' + 1).textContent = 'Player-2 ';
    document.querySelector('.player-1'  + '-panel').classList.remove('winner');
    document.querySelector('.player-0'  + '-panel').classList.remove('winner');  
    document.querySelector('.player-0'  + '-panel').classList.remove('active');  
    document.querySelector('.player-1'  + '-panel').classList.remove('active');
   // document.querySelector('.player-0'  + '-panel').classList.add('active');
       
       if(activePlayer == 0){
            
           document.querySelector('.player-0-panel').classList.toggle('active');

       }
    else {
          document.querySelector('.player-1-panel').classList.toggle('active');
    } 
   
}
    



/* calculate random number */
