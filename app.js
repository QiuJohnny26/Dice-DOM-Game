/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/* Maintain Score between two players so one array of two values  */
var scores,roundScore,activePlayer;
scores = [0,0];
/* Round Score Starts as 0 , while Active Player stays 0 until 1 for their turn */
roundScore = 0;
activePlayer = 1;

//dice = Math.floor(Math.random() * 6)+1;
//console.log(dice);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em';

document.querySelector('.dice').style.display = 'none';

 function btn(){
     
 }

document.querySelector('.btn-roll').addEventListener('click',function(){
  // 1.Random Number
    var dice = Math.floor(Math.random() * 6)+1;
 // 2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

     
 //3. Update the round score if the rolled number was Not a 1
    
    
})
    


    



/* calculate random number */
