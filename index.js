const chalk = require('chalk');
console.log(chalk.cyan.bold('       WELCOME TO') + chalk.green.bold(' THE GAME OF THRONES ') + chalk.cyan.bold('QUIZ \n\n'));
var readlineSync = require("readline-sync");
var userName = readlineSync.question(chalk.cyan("May I know your name? "));
console.log(chalk.green('Welcome! ') +chalk.green.bold(userName ) + chalk.green(' \nLet us start the quiz.\n\n'));
console.log(chalk.bold("Instructions:")+"You have to write the correct option below.")
console.log("\n________________________________________________\n");

var score = 0;
function test(question,answer)
{
  const chalk = require('chalk');
  var readlineSync = require("readline-sync");
  var userInput = readlineSync.question(chalk.cyan(question));
  if(userInput.toUpperCase() === answer.toUpperCase())
  {
    console.log(("\nGood!👍, You are right."));
    score = score+1;
  }
  else
  {
    console.log(("\nSorry🙁, You are wrong"));
  }
  console.log(chalk.red("Your current score is " + score + "\n"));
}


var queOne = {
  question: chalk.green("\n\n1.Which novel series is Game of Throne based on? ") + ("\n\na.Nightflyers \nb.A Song of Ice and Fire \n-> "),
  answer: "b"
}

var queTwo = {
  question: chalk.green("\n\n2.How many kingdoms are there in Westeros continent? ")+ ("\n\na.Seven \nb.Thirteen \n-> "),
  answer: "a"
}

var queThree = {
  question: chalk.green("\n\n3.Who is Elia Martell for Daenerys?") + ("\n\na.Sister in Law \nb.Cousins \n-> "),
  answer: "a"
}

var queFour = {
  question:chalk.green ("\n\n4.What is the fictional place where most of the plot is set?") + (" \n\na.The Drones Area \nb.Seven Kingdoms of Westeros \n-> "),
  answer: "b"
}

var queFive = {
  question:chalk.green( "\n\n5.What is the last name of Bastards in Dorne?") + (" \n\na.Sand \nb.Sea \n-> "),
  answer: "a"
}

var queSix = {
  question: chalk.green("\n\n6.Who shot the burning arrow at Hoster Tully's Funeral? ")+ ("\n\na.Edmure Tully \nb.Brynden Tully \n-> "),
  answer: "b"
}

var queSeven = {
  question:chalk.green ("\n\n7.What Unsullied have to do at the end of training in order to prove he has no mercy?")+(" \n\na.To kill a newborn slave child \nb.To kill their mother \n-> "),
  answer: "a"
}

var queEigth = {
  question:chalk.green ("\n\n8.Who was nicknamed the Lightning Lord?") + (" \n\na.Mycah \nb.Beric Dondarrion \n-> "),
  answer: "b "
}

var queNine = {
  question:chalk.green( "\n\n9.What is Arya Stark's sword known as?") + ("\n\na.Slash \nb.Needle \n-> "),
  answer: "b"
}

var queTen = {
  question: chalk.green("\n\n10.Who leads the troop attacking the king's landing during the battle of Blackwater?") + (" \n\na.Stannis Baratheon \nb.Ser Loras Tyrell \n-> "),
  answer: "a"
}

var queList = [queOne, queTwo, queThree, queFour, queFive, queSix, queSeven, queEigth, queNine, queTen];
for(var i =0; i<queList.length; i++)
{
  currQuestion = queList[i];
  test(currQuestion.question,currQuestion.answer);
  console.log("________________________________________________");
}

console.log(chalk.red.bold("\n\nYour final score is " + score+"🎉"));
console.log(chalk.red.bold("Thankyou for playing.😊"));

// var highScores = [
//   {PlayerA : 9,
//   PlayerB : 8}
// ];
// console.log("\nCheckout the Highscores below.👇")
// console.log(highScores);

var highScore = [
  {
    name:"Player A",
    score:"9"
  },
  {
    name:"Player B",
    score:"7"
  }

];
function updateScore(){
 console.log("Check the highscore below.\nSend a screenshot if you've made a new highscore.");
 for(var i =0; i<highScore.length; i++){
   console.log(highScore[i].name + ": " + highScore[i].score);
 }
}

updateScore();