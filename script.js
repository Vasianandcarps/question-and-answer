let questions = [
  "Что мне взять с собой на каток?",
  "Что мне положить в холодильник?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце"];
let n = questions.length;
function random(arr) {
  return arr[getRandomInt(n)];
}
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
let question = random(questions);
let answer = random(answers);
let answer1 = random(answers);

alert(question + ": " + answer + "," + answer1);
