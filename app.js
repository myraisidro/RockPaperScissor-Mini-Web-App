// Set Value
let UserScore = 0,
    ComputerScore = 0,
    playerChoice = 0,
    startingCoins = 3,
    computerChoice = 0;

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
    
// Get Score from local storage
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

// Set Hand Images to variable
const uRock = 'images/rock-left.png';
const uPaper = 'images/paper-left.png';
const uScissor = 'images/scissor-left.png';
const cRock = 'images/rock-right.png';
const cPaper = 'images/paper-right.png';
const cScissor = 'images/scissor-right.png';

// Functions for UI
const userPick = document.querySelector('.userPick');
const compPick = document.querySelector('.compPick');
const result = document.getElementById('alertMsg');

function uGesture(choice){
    this.choice = choice;
    userPick.innerHTML = `<img src="${this.choice}" height="300px">`;
}
function cGesture(choice){
    this.choice = choice;
    compPick.innerHTML = `<img src="${this.choice}" height="300px">`;
}

function backMsg(){
    result.innerHTML = `
    <div class="alert alert-dismissible alert-light m-5" style="font-size: 50px;">
    <p class="takePick">
        <strong class="headsUp" style="font-size: 30px;">Continue ...</strong><br> 
        <span class="pickMsg" style="font-size: 50px;">Take another pick!</span> 
    </p>
    </div>`;
    
}

// HIDE HANDS
function hideHands(){
    userPick.innerHTML = '';
    compPick.innerHTML = '';
    result.innerHTML = '';
}

// HIDE ALERTS
function hide(){
    result.innerHTML = '';
}

// GAME STATUS
// DRAW
function Draw(){
    result.innerHTML = `
    <div class="alert alert-dismissible alert-primary  m-5">
        <p style="font-size: 50px;"> Oh snap, Its Draw! </p>
        <p style="font-size: 20px;"> Current Score: <span class="badge badge-pill badge-light">${UserScore}</span></p>
    </div>
    `;
    setTimeout(() => {
        hide();
        hideHands();
        backMsg();
    }, 3000);
}

// WIN
function Win(){
    result.innerHTML = `
    <div class="alert alert-dismissible alert-success  m-5">
        <p style="font-size: 50px;"> Yehey! You won! </p>
        <p style="font-size: 20px;"> Current Score: <span class="badge badge-pill badge-light">${UserScore}</span></p>
    </div>
    `;
    setTimeout(() => {
        hide();
        hideHands();
        backMsg();
    }, 3000);
}

// LOOSE
function Loose(){
    result.innerHTML = `
    <div class="alert alert-dismissible alert-danger  m-5">
        <p style="font-size: 50px;"> Sorry, You lost! </p>
        <p style="font-size: 20px;"> Current Score: <span class="badge badge-pill badge-light">${UserScore}</span></p>
    </div>
    `;
    setTimeout(() => {
        hide();
        hideHands();
        backMsg();
        
    }, 3000);
}

// GAME OVER
function gameOver(){
    result.innerHTML = `
    <div class="alert alert-dismissible alert-danger m-3">
        <p style="font-size: 50px;"> GAME OVER! </p>
        <p style="font-size: 60px;"> 
            <span class="badge badge-pill badge-light">${UserScore}</span> : 
            <span class="badge badge-pill badge-light">${ComputerScore}</span>
        </p>
        <button class="resetBtn btn btn-info btn-lg">Play Again</button>
        <button href="main.html" class="quit btn btn-outline-danger btn-lg">Quit</button>
    </div>
    `;
    setTimeout(() => {
        hideHands();
    }, 1000);
}

// RESET
document.querySelector('.resetBtn').addEventListener('click', function(){
    window.location.reload();
    localStorage.clear();
})

// QUIT
document.querySelector('.quit').addEventListener('click', function(){
    localStorage.clear();
})

// Display Result of values
function resValue(){
    userScore.textContent = UserScore;
    computerScore.textContent = ComputerScore;
    coin.textContent = startingCoins;
}

// FUNCTION FOR ROCK = 1 ; 
function RockChoice() {
    playerChoice = 1; 
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    uGesture(uRock); // Gestures Append

    // ROCK : ROCK
    if(playerChoice === computerChoice) { 
        cGesture(cRock);
        Draw();
    } 
    // ROCK : PAPER
    else if (playerChoice == 1 && computerChoice == 2){
        cGesture(cPaper);
        Loose();
        startingCoins--;  
        ComputerScore++;
    } 
    // ROCK : SCISSOR
    else {
        cGesture(cScissor);
        Win();
        UserScore++;
        startingCoins++;
    }
    resValue(); //Display Score

    if (startingCoins === 0){
        gameOver();
        UserScore = 0; //declare the value to 0 (reset)
        ComputerScore = 0; //declare value to 0 (reset)
        userScore.textContent = UserScore;  
        computerScore.textContent = ComputerScore;
    }

    createLocalStorage();
}

// FUNCTION FOR PAPER = 2;
function paperChoice(){

    uGesture(uPaper); // uGestures Append

    playerChoice = 2;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    // PAPER : PAPER
    if(playerChoice === computerChoice) {
        cGesture(cPaper);
        Draw();
    }
    // PAPER : ROCK
     else if (playerChoice == 2 && computerChoice ==1) {
        cGesture(cRock);
        Win();
        UserScore++;
        startingCoins++;
    } 
    // PAPER : SCISSOR
    else {
        cGesture(cScissor);
        Loose();
        ComputerScore++;
        startingCoins--;
    }
    resValue();

    if (startingCoins === 0){
        gameOver();
        UserScore = 0;
        ComputerScore = 0;
        userScore.textContent = UserScore;
        computerScore.textContent = ComputerScore;
    }

    createLocalStorage();
    
}

// FUNCTION FOR SCISSOR = 3;
function scissorChoice(){
    
    uGesture(uScissor); // uGestures Append

    playerChoice = 3;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    // SCISSOR : SCISSOR
    if(playerChoice === computerChoice) {
        cGesture(cScissor);
        Draw();
    }
    // SCISSOR : ROCK
     else if (playerChoice == 3 && computerChoice == 1) {
        cGesture(cRock);
        Loose();
        UserScore++
        startingCoins++
        
    } 
    // SCISSOR : PAPER
    else {
        cGesture(cScissor);
        Win();
        ComputerScore++;
        startingCoins--
        
    }
    
    resValue();

    if (startingCoins === 0){
        gameOver();
        UserScore = 0;
        ComputerScore = 0;
        userScore.textContent = UserScore;
        computerScore.textContent = ComputerScore;
    }

    createLocalStorage();
}

