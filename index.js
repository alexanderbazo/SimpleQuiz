/* eslint-env browser */

import Loader from "./lib/FileLoader.js";
import Parser from "./lib/QuizParser.js";

function initElement(el) {
  let url = el.getAttribute("data-quiz-url");
  Loader.load(url).then(onFileLoaded.bind(null, el));
}

function onFileLoaded(el, content) {
  Parser.parse(content).then(onParsed.bind(null, el));
}

function onParsed(el, quiz) {
  console.log(quiz);
}

function init() {
  let quizElements = document.querySelectorAll(".simple-quiz[data-quiz-url]");
  for (let i = 0; i < quizElements.length; i++) {
    initElement(quizElements[i]);
  }
}

window.addEventListener("load", init);