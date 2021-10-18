let questions = [
  "Что мне взять с собой на каток?",
  "Что мне положить в холодильник?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце"];
let n = prompt("Сколько ответов хотите получить введите число от 1-4");

function random(arr, n) {
  return arr[getRandomInt(arr)];
}

function getRandomInt(questions) {
  return Math.floor(Math.random() * questions.length);
}

document.write(random(questions, 1) + ":");
for (let i = 0; i < n; i++) {
  if (n > 1) {
    document.write("," + random(answers, i));
  } else {
    document.write(random(answers, i));
  }
}
