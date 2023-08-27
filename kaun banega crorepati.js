var readlineSync = require("readline-sync")
var score = 0;
var userName = readlineSync.question("What is your first name? ")

console.log("Welcome " + userName + " to kaun banega crorepati")

function play(question, answer) { 
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase === answer.toUpperCase) {
    console.log("Correct!")
    score = score + 1;
  }
  else {
    console.log("Wrong!!")
    score = score - 1;
  }
  console.log("Current Score " + score)
  console.log("-------x--------")
}

var questions = [
  {
    question: "Where do Rahul live? ",
    answer: "Merces"
  },
  {
    question: "Where do Rahul work? ",
    answer: "Webware"
  },
  {
    question: "Do you know Rahuls Favorite Cricketer? ",
    answer: "Virat"
  },
  {
    question: "Do you know Rahuls Favorite IPL team? ",
    answer: "RCB"
  },
  {
    question: "Do you know Rahuls Favorite Fruit? ",
    answer: "Apple"
  }
]

for (var i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
  console.log("Total score " + score)
}




