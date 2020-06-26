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

console.log("Computer chose" + computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 == choice2)
    {
        console.log("it's a tie!");
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            console.log("rock wins");
        }
        else
        {
            console.log("paper wins");
        }
    }
    else if(choice2 === "paper")
    {
        if(choice2 === "rock")
        {
            console.log("paper wins!");
        }
        else
        {
            console.log("scissors win");
        }
    }


}

compare(playerChoice, computerChoice);
