
let playerChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
   
   random = Math.floor(Math.random() * 3) + 1;
 
   if(random === 1){
      return "rock";
   }
   else if(random === 2){
      return  "paper";
   }  
   else if(random === 3){
      return "scissors";
   }
}

function getPlayerChoice(){
     
   return prompt("Enter Rock, Paper or Scissors? ").toLowerCase(); 
}


function playRound(playerChoice, computerChoice){ 

   if(playerChoice === "rock" && computerChoice === "scissors"){
      console.log("You Win! rock beats scissors.");
      humanScore = humanScore + 1;
   }
   else if(playerChoice === "rock" && computerChoice === "paper"){
      console.log("You Lose! paper beats rock.");
      computerScore = computerScore + 1;
   }
   else if(playerChoice === "rock" && computerChoice === "rock"){
      console.log("It's a tie!");   
   }
   else if(playerChoice === "scissors" && computerChoice === "paper"){
      console.log("You Win! scissors beats paper.");
      humanScore = humanScore + 1;
   }
   else if(playerChoice === "scissors" && computerChoice === "rock"){
      console.log("You Lose! rock beats scissors.");
      computerScore = computerScore + 1;
   }
   else if(playerChoice === "scissors" && computerChoice === "scissors"){
      console.log("It's a tie!");   
   }
   else if(playerChoice === "paper" && computerChoice === "rock"){
      console.log("You Win! paper beats rock.");
      humanScore = humanScore + 1;
   }
   else if(playerChoice === "paper" && computerChoice === "scissors"){
      console.log("You Lose! scissors beats paper.");
      computerScore = computerScore + 1;
   }
   else if(playerChoice === "paper" && computerChoice === "paper"){
      console.log("It's a tie!");   
   }

}





const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);