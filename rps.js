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

var result = function(playerChoice, computerChoice)
{
  if(playerChoice === computerChoice)
  {
    alert("computer chose:", computerChoice);
    console.log("It's a tie!")
      alert("It's a tie!")
  }
  else if (playerChoice === "rock" && computerChoice === "scissors")
  {
    alert("computer chose:", computerChoice);
        console.log("You win!");
      alert("You won!");
  }
  else if (playerChoice === "rock" && computerChoice === "paper")
  {
    alert("computer chose:", computerChoice);
        console.log("You lose!");
      alert("You lost!")
  }
  else if (playerChoice === "paper" && computerChoice === "rock")
  {
    alert("computer chose:", computerChoice);
        console.log("You won!");
      alert("You won!")
  }
  else if (playerChoice === "paper" && computerChoice === "scissors")
  {
    alert("computer chose:", computerChoice);
        console.log("You lost!");
      alert("You lost!")
  }
  else if (playerChoice === "scissors" && computerChoice === "rock")
  {
    alert("computer chose:", computerChoice);
        console.log("You lost!");
      alert("You lost!")
  }
  else if (playerChoice === "scissors" && computerChoice === "paper")
  {
      alert(computerChoice);
      console.log("You won!");
      alert("You won!")
  }
}

// calling the compare function
result(playerChoice, computerChoice);
console.log("player chose:", playerChoice, "& computer chose:", computerChoice);
