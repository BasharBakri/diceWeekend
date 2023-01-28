const images = document.querySelectorAll('img');
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const popup = document.getElementById('popup');
const input = document.querySelector('input');

const player1Container = document.getElementById('player1Container');
const player2Container = document.getElementById('player2Container');
const player1Article = document.getElementById('player1article');
const player2Article = document.getElementById('player2article');

const rollButton = document.getElementById('rollbtn');
const holdButton = document.getElementById('holdbtn');
const newButton = document.getElementById('newbtn');
const startButton = document.getElementById('start');

const player1Current = document.getElementById('player1current');
const player2Current = document.getElementById('player2current');
const player1Total = document.getElementById('player1total');
const player2Total = document.getElementById('player2total');



let inputValue;
let current = 0;
let total1 = 0;
let total2 = 0;
let activePlayer = 1; 


//start button

startButton.addEventListener('click', function(){
  if (popup.style.display !== "none") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  };
  current = 0;
  total1 = 0;
  total2 = 0;
  player1Total.innerText = parseInt('0');
  player2Total.innerText = parseInt('0');
  rollButton.disabled = false;
  holdButton.disabled = false;
  player1Container.style.backgroundColor = '#F9F6F0';
  player2Container.style.backgroundColor = '#DDD0C8';
  player1Article.innerText = '';
  player2Article.innerText = '';
  activePlayer = 1;
  inputValue = input.value;
  holdButton.disabled = true;
  img1.src = './imgs/dice-0.png'
  img2.src = './imgs/dice-0.png'
});

//hold button


holdButton.addEventListener('click', function(){
  if(activePlayer ===1) {
    player1Container.style.backgroundColor = '#F9F6F0';
    player2Container.style.backgroundColor = '#DDD0C8';
    total1 += parseInt(player1Current.innerText);
    player1Total.innerText = parseInt(total1);
  };
  if(activePlayer ===2) {
    player1Container.style.backgroundColor = '#DDD0C8';
    player2Container.style.backgroundColor = '#F9F6F0';
    total2 += parseInt(player2Current.innerText);
    player2Total.innerText = total2;
  };


  activePlayer = activePlayer === 1 ? 2 : 1;

  // to make turn switching correct
  if(activePlayer ===1) {
    player1Container.style.backgroundColor = '#F9F6F0';
    player2Container.style.backgroundColor = '#DDD0C8';
  };
  if(activePlayer ===2) {
    player1Container.style.backgroundColor = '#DDD0C8';
    player2Container.style.backgroundColor = '#F9F6F0';
  };

  if(total1 > inputValue || total2 > inputValue || total1 === inputValue || total2 === inputValue){
    holdButton.disabled = true;
    rollButton.disabled = true;
  } else {
    holdButton.disabled = false;
    rollButton.disabled = false;
  };
  
  if(total1 === inputValue || total2 > inputValue){
    player1Container.style.backgroundColor = '#f4f4f4';
    player2Container.style.backgroundColor = '#323232';
    player1Article.innerText = 'Player 1 is the Winner!';
    player2Article.innerText = 'Player 2 is the loser!';
  };
  if(total2 === inputValue || total1 > inputValue){
    player2Container.style.backgroundColor = '#f4f4f4';
    player1Container.style.backgroundColor = '#323232';
    player1Article.innerText = 'Player 1 is the loser!';
    player2Article.innerText = 'Player 2 is the Winner!';
    
  };

  player1Current.innerText = parseInt('0');
  player2Current.innerText = parseInt('0');
  holdButton.disabled = true;
});



const rollTwice = function(){
  holdButton.disabled = false;
  let roll1 = Math.floor((Math.random()*6)+1);
  let roll2 = Math.floor((Math.random()*6)+1);
  console.log(roll1);
  
  current += roll1 + roll2;
  //This looks ugly and there's probably a way to make it much shorter and nicer.
  if(roll1 === 1){
      img1.src = './imgs/dice-1.png';
    }
  if(roll1 === 2){
      img1.src = './imgs/dice-2.png';
    }
  if(roll1 === 3){
      img1.src = './imgs/dice-3.png';
    }
  if(roll1 === 4){
      img1.src = './imgs/dice-4.png';
    }
  if(roll1 === 5){
      img1.src = './imgs/dice-5.png';
    }
  if(roll1 === 6){
      img1.src = './imgs/dice-6.png';
    }
  if(roll2 === 1){
      img2.src = './imgs/dice-1.png';
    }
  if(roll2 === 2){
      img2.src = './imgs/dice-2.png';
    }
  if(roll2 === 3){
      img2.src = './imgs/dice-3.png';
    }
  if(roll2 === 4){
      img2.src = './imgs/dice-4.png';
    }
  if(roll2 === 5){
      img2.src = './imgs/dice-5.png';
    }
  if(roll2 === 6){
      img2.src = './imgs/dice-6.png';
    }

  if(roll1 === 6 && roll2 === 6) {
    activePlayer = activePlayer === 1 ? 2 : 1; 
    current = 0;
    player1Current.innerText = 0;
    player2Current.innerText = 0;
    holdButton.disabled = true;
    alert('You got two 6s! Your turn has ended and current score is removed!')
  };
  if (activePlayer === 1){
    player1Container.style.backgroundColor = '#F9F6F0';
    player2Container.style.backgroundColor = '#DDD0C8';
    player1Current.innerText= parseInt(current); 
    holdButton.addEventListener('click', function(){
    current = 0;});
  };

  if (activePlayer === 2){
      player1Container.style.backgroundColor = '#DDD0C8';
      player2Container.style.backgroundColor = '#F9F6F0';
      player2Current.innerText= parseInt(current);
      holdButton.addEventListener('click', function(){
        current = 0;});
        };
};


rollButton.addEventListener("click", rollTwice);



newButton.addEventListener('click', function(){
  popup.style.display = 'block';
});
