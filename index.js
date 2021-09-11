var input = require('readline-sync');
const chalk = require('chalk');

var userName = input.question(chalk.blue("Hi! Please enter your Name "));
console.log(chalk.blue("Hi", userName, "Let's start this game\nLets check how well you know Harry Potter movies? "));
var score = 0;
function play(question, answer, userAnswer){
  if (userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log(chalk.blue("Right Answer"));
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong Answer"));
  }
}
var questionOne = {question: "What is the name of Harry Potter's owl? ",
  answer: "Hedwig"
};
var questionTwo = {question: "How would you spell the spell you would use to disarm someone? ",
  answer: "Expelliarmus"
};
var questionThree = {question: "Name the tree that Arthur Weasley's flying car crashes into? ",
  answer: "The whomping willow"
};
var questionFour = {question: "What position did Harry Potter play at Quidditch? ",
  answer: "Seeker"
};
var questionFive = {question: "What animal could Peter Pettigrew turn into? ",
  answer: "Rat"
};
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i].question;
  userAnswer = input.question(chalk.blue(currentQuestion));
  play(questions[i].question,questions[i].answer,userAnswer);
}

console.log(chalk.blue("You scored", score));

