// asking player to choose
playerChoice = prompt("Choose rock, paper or scissors please");

// randomly generate a number for computer choice
computerChoice = Math.random();

// to see computer choice
console.log(computerChoice);

if(computerChoice <=.33)
{   
    computerChoice = "rock"
}
else if(computerChoice >= .33 && computerChoice <= .67)
{
    computerChoice = "paper"
}
else
{
    computerChoice = "scissors"
}

console.log("Computer chose " + computerChoice);

var compare = function(playerChoice, computerChoice)
{
  if(playerChoice === computerChoice)
  {
      console.log("It's a tie!")
  }
  else if (playerChoice === "rock" && computerChoice === "scissors")
  {
      console.log("You win!");
  }
  else if (playerChoice === "rock" && computerChoice === "paper")
  {
      console.log("You lose!");
  }
  else if (playerChoice === "paper" && computerChoice === "rock")
  {
      console.log("You win!");
  }
  else if (playerChoice === "paper" && computerChoice === "scissors")
  {
      console.log("You lose!");
  }
  else if (playerChoice === "scissors" && computerChoice === "rock")
  {
      console.log("You lose!");
  }
  else if (playerChoice === "scissors" && computerChoice === "paper")
  {
      console.log("You win!");
  }
}

// calling the compare function
compare(playerChoice, computerChoice);
console.log("player chose:", playerChoice, "& computer chose:", computerChoice);