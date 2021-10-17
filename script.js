let questions = [
  "Что мне взять с собой на каток?",
  "Что мне положить в холодильник?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце"];
let n = questions.length;
let m = answers.length;
function randomQuestions(questions) {
  return questions[getRandomInt(n)];
}
function randomAnswers(answers) {
  return answers[getRandomInt(n)];
}
function randomAnswers1(answers) {
  return answers[getRandomInt(n)];
}
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

let question = randomQuestions(questions);
let answer = randomAnswers(answers);
let answer1 = randomAnswers1(answers);

alert(question + ": " + answer + "," + answer1);
