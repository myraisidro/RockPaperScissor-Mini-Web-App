// Variables for document ID's
const rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissor = document.getElementById('scissor'),
    userScore = document.getElementById('user-score'),
    computerScore = document.getElementById('computer-score'),
    coin = document.getElementById('coins');

// Declaring default values for scoreboard
let UserScore = 0,
    ComputerScore = 0,
    playerChoice = 0,
    startingCoins = 3,
    computerChoice = 0;

// Event listeners uses to add an event to our buttons
rock.addEventListener('click' , RockChoice); //function for rock
paper.addEventListener('click' , paperChoice); //function for paper
scissor.addEventListener('click' , scissorChoice); //function for paper

// Display default values declared to scoreboard
userScore.textContent = UserScore;
computerScore.textContent = ComputerScore;
coin.textContent = startingCoins;

// Functions for Rock = 1 ; 
function RockChoice(e) {
    playerChoice = 1; //binigyan lang ng value si Rock
    computerChoice = Math.floor(Math.random() * 3 + 1); //para mag random si computer then para mabigyan ng value si computer choicce from 1-3

        // Create Element for image
        const img = document.createElement('img'); //create img element 
        img.setAttribute('src', 'images/rock-left.png'); //add src attribute to img tag
        img.setAttribute('height', '300'); // add height attribute to img tag
        document.querySelector('.userPick').appendChild(img);

        rock.classList.add('disabled');

        // Replace text on strong tag
        const strong = document.createTextNode('You made a pick!').textContent;
        document.querySelector('.strong').innerHTML = strong;

        // Replace text on takePick
        const waitPick = document.createTextNode('Wait for the opponent').textContent;
        document.querySelector('.pickMsg').style.fontSize = '40px';
        document.querySelector('.pickMsg').innerHTML = waitPick;


    if(playerChoice === computerChoice) { //Draw no score would be added
        console.log(`player:rock computer:rock`);
        console.log('draw');
        const img = document.createElement('img'); //create img element 
        img.setAttribute('src', 'images/rock-right.png'); //add src attribute to img tag
        img.setAttribute('height', '300'); // add height attribute to img tag
        document.querySelector('.compPick').appendChild(img);

        drawAlert();


    } 
    else if (playerChoice == 1 && computerChoice == 2){ //PLAYER LOOSE! Player: Rock && Computer: Paper
        console.log(`player:rock computer:paper`);
        startingCoins--;   // deduct reward from user
        ComputerScore++; //add score to computer
        console.log('You Loose');
    } 
    else { //PLAYER WINS! Player: Rock && Computer: Scissor
        console.log(`player:rock computer:scissor`); 
        UserScore++; // add score to user
        startingCoins++ //add reward to user
        console.log('You Win');
    }

    userScore.textContent = UserScore; //display value of UserScore to the element tag na dala ni userScore
    computerScore.textContent = ComputerScore; //display value of ComputerScore to the element tag na dala ni computerScore
    coin.textContent = startingCoins; //display value of ComputerScore to the element tag na dala ni computerScore

    // kapag naubos na yung reward ni user "Game Over" na
    if (startingCoins === 0){
        alert('Game Over');
        UserScore = 0; //declare the value to 0 (reset)
        ComputerScore = 0; //declare value to 0 (reset)
        userScore.textContent = UserScore;  
        computerScore.textContent = ComputerScore;
    }
}

// Function for Paper = 2;
function paperChoice(){

    // Create Element for image
    const img = document.createElement('img'); //create img element 
    img.setAttribute('src', 'images/paper-left.png'); //add src attribute to img tag
    img.setAttribute('height', '300'); // add height attribute to img tag
    document.querySelector('.userPick').appendChild(img);

    // Replace text on strong tag
    const strong = document.createTextNode('You made a pick!').textContent;
    document.querySelector('.strong').innerHTML = strong;

    // Replace text on takePick
    const waitPick = document.createTextNode('Wait for the opponent').textContent;
    document.querySelector('.pickMsg').style.fontSize = '40px';
    document.querySelector('.pickMsg').innerHTML = waitPick;

    playerChoice = 2;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    if(playerChoice === computerChoice) {
        console.log(`player:paper computer:paper`);
        console.log('draw');
    }
    // computer choose rock / player choose paper
     else if (playerChoice == 2 && computerChoice ==1) {
       console.log(`player:paper computer:rock`);
       UserScore++;
       startingCoins++;
       console.log('Win');
    } else {
        // computer choose gunting / player choose paper
        console.log(`player:paper computer:scissor`);
        ComputerScore++;
        startingCoins--;
        console.log('Loose');
    }

    userScore.textContent = UserScore;
    computerScore.textContent = ComputerScore;
    coin.textContent = startingCoins;

    if (startingCoins === 0){
        alert('Game Over');
        UserScore = 0;
        ComputerScore = 0;
        userScore.textContent = UserScore;
        computerScore.textContent = ComputerScore;
    }
    // createLocalStorage();
}

// Function for Scissors = 3;
function scissorChoice(){
    // console.log('paper');
    // Create Element for image
    const img = document.createElement('img'); //create img element 
    img.setAttribute('src', 'images/scissor-left.png'); //add src attribute to img tag
    img.setAttribute('height', '300'); // add height attribute to img tag
    document.querySelector('.userPick').appendChild(img);

    // Replace text on strong tag
    const strong = document.createTextNode('You made a pick!').textContent;
    document.querySelector('.strong').innerHTML = strong;

    // Replace text on takePick
    const waitPick = document.createTextNode('Wait for the opponent').textContent;
    document.querySelector('.pickMsg').style.fontSize = '40px';
    document.querySelector('.pickMsg').innerHTML = waitPick;

    playerChoice = 3;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    
    if(playerChoice === computerChoice) {
        console.log(`player:scissor computer:scissor`);
        console.log('draw');
    }
    // computer choose rock / player choose paper
     else if (playerChoice == 3 && computerChoice == 1) {
       console.log(`player:scissor computer:paper`);
        UserScore++
        startingCoins++
       console.log('Win');
    } else {
        // computer choose gunting / player choose paper
        console.log(`player:scissor computer:rock`);
        ComputerScore++;
        startingCoins--
        console.log('Loose');
    }

    userScore.textContent = UserScore;
    computerScore.textContent = ComputerScore;
    coin.textContent = startingCoins;

    if (startingCoins === 0){
        alert('Game Over');
        UserScore = 0;
        ComputerScore = 0;
        userScore.textContent = UserScore;
        computerScore.textContent = ComputerScore;
    }
    // createLocalStorage();
}

function drawAlert(){
    setTimeout(() => {
        let draw;
    draw += `
    <div class="alert alert-dismissible alert-primary  m-5">
        <p style="font-size: 50px;"> Oh snap, Its Draw! </p>
        <p style="font-size: 20px;"> Current Score: <span class="badge badge-pill badge-light">10</span></p>
        <button type="button" class="btn btn-outline-primary">Reset</button>
        <button type="button" class="btn btn-info">Continue</button>
    </div>
    `;
    }, 3000);
    
    
}