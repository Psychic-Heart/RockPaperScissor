var userScore = 0;
var computerScore = 0;
var userMoves = 0;
var computerMoves = 0;
var userScore_span = document.getElementById("userscore");
var computerScore_span = document.getElementById("computerscore")
var ScoreBoard_div = document.getElementById(".ScoreBoard");
var Moves_div = document.getElementById(".moves")
var userMoves_span = document.getElementById("usermoves")
var computerMoves_span = document.getElementById("computermoves")
var result_p = document.getElementById("result_p");
var rock_div = document.getElementById("Rock");
var paper_div = document.getElementById("Paper");
var scissor_div = document.getElementById("Scissor");

function getComputerChoice(_computerChoice) {
    const choice =["Rock","Paper","Scissor"];
    computerMoves++
    computerMoves_span.innerHTML = computerMoves;
    const randomNumber =Math.floor(Math.random() * 3);
    return choice[randomNumber];
}


function game(userChoice) { 

    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
             lose(userChoice, computerChoice);
             break;
        case "ScissorScissor":
        case "RockRock":
        case "PaperPaper":
            draw(userChoice, computerChoice);
            break;
    }
}
function win(_userChoice, _computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${_userChoice} beats ${_computerChoice}.You Win!!!`
}
function lose(_userChoice, _computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${_userChoice} loses to ${_computerChoice}.You Lost...!`
}
function draw(_userChoice, _computerChoice)
{
    // computerMoves.innerHTML = computerMoves;
    // computerMoves++  
    // ee code venda
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "It is a draw!"
}
function gameOver() {
    if (userScore > computerScore) {
        result_p.innerHTML = "Congratulations. You Won!!!"
    } else if (computerScore > userScore){
        result_p.innerHTML = "Sorry. You Lost!"
    }
    else {
        result_p.innerHTML = "It is a Tie."
    }
}
function main() { 
    rock_div.addEventListener('click',function () {
        if (userMoves<12){
            userMoves++;
            userMoves_span.innerHTML = userMoves;
            console.log(userMoves)
            game("Rock");
        }
        if(userMoves==12){
            gameOver();
        }
    })
    paper_div.addEventListener('click',function () {
        if (userMoves<12){
            userMoves++;
            userMoves_span.innerHTML = userMoves;
            console.log(userMoves)
            game("Paper");
        }
        if(userMoves==12){
            gameOver();
        }
        
    })
    scissor_div.addEventListener('click',function () {
        if (userMoves<12){
            userMoves++;
            userMoves_span.innerHTML = userMoves;
            console.log(userMoves)
            game("Scissor");
        }
        if(userMoves==12){
            gameOver();
        }
        
    })
}

main();