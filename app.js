// Set Value
let UserScore = 0,
    ComputerScore = 0,
    playerChoice = 0,
    startingCoins = 3,
    computerChoice = 0,
    take = '';

// Element and Selectors
const rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissor = document.getElementById('scissor'),
    userScore = document.getElementById('user-score'),
    computerScore = document.getElementById('computer-score'),
    takePick = document.querySelector('.strong'),
    waitPick = document.querySelector('.pickMsg'),
    coin = document.getElementById('coins');


// Event listeners
rock.addEventListener('click' , RockChoice); 
paper.addEventListener('click' , paperChoice); 
scissor.addEventListener('click' , scissorChoice); 
document.addEventListener('DOMContentLoaded' , displayScoreboard);  


// Display default values declared to scoreboard
userScore.textContent = UserScore;
computerScore.textContent = ComputerScore;
coin.textContent = startingCoins;

// Set Hand Images to variable
const uRock = 'images/rock-left.png';
const uPaper = 'images/paper-left.png';
const uScissor = 'images/scissor-left.png';
const cRock = 'images/rock-right.png';
const cPaper = 'images/paper-right.png';
const cScissor = 'images/scissor-right.png';


// Create Local Storage
function createLocalStorage(){ 
    scoreBoard = {
        UserScore : UserScore,
        ComputerScore : ComputerScore,
        startingCoins : startingCoins
            }
    let Game;
        if(sessionStorage.getItem('Games') === null){
        Game = [];
    
    } else {
        Game = JSON.parse(sessionStorage.getItem('Games'));
    } 
    
    Game.push(scoreBoard);
    localStorage.setItem('Games',JSON.stringify(Game));
    }
    
    // get from local Storage
    function displayScoreboard(){
        let game;
    if(localStorage.getItem('Games') === null){
        game = [];
    
    } else {
      game = JSON.parse(localStorage.getItem('Games'));
    } 
    game.forEach(function(games){
        computerScore.textContent = games.ComputerScore;
        userScore.textContent = games.UserScore;
        coin.textContent = games.startingCoins;
    
    });
    }
    

// Function UI
function uGesture(choice){
    this.choice = choice;
    const userPick = document.querySelector('.userPick');
    userPick.innerHTML = `<img src="${this.choice}" height="300px">`;
}
function cGesture(choice){
    this.choice = choice;
    const userPick = document.querySelector('.compPick');
    userPick.innerHTML = `<img src="${this.choice}" height="300px">`;
}


function appendMsg(){

        //USE TEMPLATE STRING INSTEAD OF CHANGING TEXT NODES

        // // Replace text on strong tag
        // const strong = document.createTextNode('You made a pick!').textContent;
        // document.querySelector('.headsUp').innerHTML = strong;

        // // Replace text on takePick
        // const waitPick = document.createTextNode('Wait for the opponent').textContent;
        // document.querySelector('.pickMsg').style.fontSize = '40px';
        // document.querySelector('.pickMsg').innerHTML = waitPick;

        draw.innerHTML = `
        <div class="alert alert-dismissible alert-light m-5" style="font-size: 50px;">
        <p class="takePick">
            <strong class="headsUp" style="font-size: 30px;">You made a pick!</strong><br> 
            <span class="pickMsg" style="font-size: 30px;">Wait for the opponent</span> 
        </p>
    </div>`;
}

const draw = document.getElementById('alertMsg');
function Draw(){
// document.querySelector('.pickMsg').textContent = 'Draw';
    
    draw.innerHTML = `
    <div class="alert alert-dismissible alert-primary  m-5">
        <p style="font-size: 50px;"> Oh snap, Its Draw! </p>
        <p style="font-size: 20px;"> Current Score: <span class="badge badge-pill badge-light">10</span></p>
        <button type="button" class="btn btn-outline-primary">Reset</button>
        <button type="button" class="btn btn-info">Continue</button>
    </div>
    `;
    setTimeout(() => {
        hideDraw();
    }, 3000);
    
}

function hideDraw(){
    draw.innerHTML = "";
    console.log('hidden');
}


// Functions for Rock = 1 ; 
function RockChoice() {
    playerChoice = 1; //binigyan lang ng value si Rock
    computerChoice = Math.floor(Math.random() * 3 + 1); //para mag random si computer then para mabigyan ng value si computer choicce from 1-3

    // uGestures Append
    uGesture(uRock);
    appendMsg();

    if(playerChoice === computerChoice) { //Draw no score would be added
        cGesture(cRock);
        Draw();
 
    } 

    else if (playerChoice == 1 && computerChoice == 2){ //PLAYER LOOSE! Player: Rock && Computer: Paper
        cGesture(cPaper);
        startingCoins--;   // deduct reward from user
        ComputerScore++; //add score to computer
        
    } 
    else { //PLAYER WINS! Player: Rock && Computer: Scissor
        cGesture(cScissor);
        UserScore++; // add score to user
        startingCoins++ //add reward to user
        
    }

    userScore.textContent = UserScore; //display value of UserScore to the element tag na dala ni userScore
    computerScore.textContent = ComputerScore; //display value of ComputerScore to the element tag na dala ni computerScore
    coin.textContent = startingCoins; //display value of ComputerScore to the element tag na dala ni computerScore

    // kapag naubos na yung reward ni user "Game Over" na
    if (startingCoins === 0){
        UserScore = 0; //declare the value to 0 (reset)
        ComputerScore = 0; //declare value to 0 (reset)
        userScore.textContent = UserScore;  
        computerScore.textContent = ComputerScore;
    }
    createLocalStorage();
}

// Function for Paper = 2;
function paperChoice(){

    // uGestures Append
    uGesture(uPaper);
    appendMsg();

    playerChoice = 2;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    if(playerChoice === computerChoice) {
        cGesture(cPaper);

            
    }
    // computer choose rock / player choose paper
     else if (playerChoice == 2 && computerChoice ==1) {
        cGesture(cRock);
       UserScore++;
       startingCoins++;
       
    } else {
        // computer choose gunting / player choose paper
        cGesture(cScissor);
        ComputerScore++;
        startingCoins--;
        
    }

    userScore.textContent = UserScore;
    computerScore.textContent = ComputerScore;
    coin.textContent = startingCoins;

    if (startingCoins === 0){
        UserScore = 0;
        ComputerScore = 0;
        userScore.textContent = UserScore;
        computerScore.textContent = ComputerScore;
    }
    createLocalStorage();
}

// Function for Scissors = 3;
function scissorChoice(){
    
    // uGestures Append
    uGesture(uScissor);
    appendMsg();

    playerChoice = 3;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    if(playerChoice === computerChoice) {
        cGesture(cScissor);
    }
    // computer choose rock / player choose paper
     else if (playerChoice == 3 && computerChoice == 1) {
        cGesture(cRock);
        UserScore++
        startingCoins++
        
    } else {
        // computer choose gunting / player choose paper
        cGesture(cScissor);
        ComputerScore++;
        startingCoins--
        
    }

    userScore.textContent = UserScore;
    computerScore.textContent = ComputerScore;
    coin.textContent = startingCoins;

    if (startingCoins === 0){
        alert('game ove');
        UserScore = 0;
        ComputerScore = 0;
        userScore.textContent = UserScore;
        computerScore.textContent = ComputerScore;
    }
    createLocalStorage();
}

