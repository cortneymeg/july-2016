var userPoints = 0;
var compPoints = 0;
var compThrow;
var numLoops = 5;

do {
  for (var i = 0; i < numLoops; i++) {
    
    var randomThrow = Math.floor((Math.random() * 3) + 1);
    
    if (randomThrow === 1) compThrow = "rock";
    else if (randomThrow === 2) compThrow = "paper";
    else if (randomThrow === 3) compThrow = "skizzers";
    else alert("Error, random number out of bounds.");
    
    var userThrow = prompt("Enter 'r' for rock, 'p' for paper, or 's' for skizzers.");
    // 1 = rock, 2 = paper, 3 = skizzers
    if (randomThrow === 1 && userThrow === "r" || 
    randomThrow === 2 && userThrow === "p" || 
    randomThrow === 3 && userThrow === "s") { // tie
      alert("It was a tie!");
    } else if (randomThrow === 1 && userThrow === "p" || 
    randomThrow === 2 && userThrow === "s" || 
    randomThrow === 3 && userThrow === "r") { // user wins
      userPoints += 1;
      alert("Computer threw " + compThrow + ", user wins!");
    } else if (randomThrow === 1 && userThrow === "s" || 
    randomThrow === 2 && userThrow === "r" || 
    randomThrow === 3 && userThrow === "p") { // comp wins
      compPoints += 1;
      alert("Computer threw " + compThrow + ", computer wins");
    }
    alert("User: " + userPoints + ", Computer: " + compPoints);
  }
} while (confirm("Would you like to play again?"));