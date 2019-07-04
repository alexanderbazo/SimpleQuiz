(function () {
  'use strict';

  /* eslint-env browser */

  // Loads raw file content with Fetch API

  class Loader {
    load(url) {
      return new Promise(function(resolve, reject) {
        fetch(url).then(function(response) {
          return response.text();
        }).then(function(result) {
          resolve(result);
        });
      });
    }
  }

  var Loader$1 = new Loader();

  /* eslint-env browser */

  // Parses quiz files to javascript 

  class Quiz {
    constructor() {
      this.title = "";
      this.description = "";
      this.questions = [];
    }
  }

  class Question {
    constructor() {
      this.title = "";
      this.description = "";
      this.answers = [];
    }
  }

  class Answer {
    constructor() {
      this.text = "";
      this.explanation = "";
      this.isCorrect = false;
    }
  }

  // Writes first question from lines into quiz and returns line number of last answer
  function extractQuestion(quiz, lines) {
  	let question = new Question();
  	question.title = lines[0].substr(lines[0].indexOf(" ") + 1).trim();
  	question.description = lines[1].trim();
  	for(let i = 2; i < lines.length; i++) {
  		let answer = new Answer(),
  			line = lines[i];
  		answer.text = line.substr(line.indexOf(" "), line.indexOf("|")-1).trim();
  		answer.explanation = line.split("|")[1].trim();
  		answer.isCorrect = line.startsWith("+");
  		question.answers.push(answer);
  	}
  	quiz.questions.push(question);
  	return 0;
  }

  function createQuizFromFileContent(content) {
    let lines = content.split("\n"),
      quiz = new Quiz();
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      // Skip empty lines
      if (line.trim() === "") {
        continue;
      }
      if (line.startsWith("#")) {
        quiz.title = line.substr(line.indexOf(" ") + 1).trim();
        quiz.description = lines[i + 1].trim();
        i++;
        continue;
      }
      if (line.startsWith("?")) {
        i += extractQuestion(quiz, lines.splice(i));
        continue;
      }
    }
    return quiz;
  }

  class Parser {
    parse(fileContent) {
      return new Promise(function(resolve, reject) {
        let quiz = createQuizFromFileContent(fileContent);
        resolve(quiz);
      });
    }
  }

  var Parser$1 = new Parser();

  /* eslint-env browser */

  function initElement(el) {
    let url = el.getAttribute("data-quiz-url");
    Loader$1.load(url).then(onFileLoaded.bind(null, el));
  }

  function onFileLoaded(el, content) {
    Parser$1.parse(content).then(onParsed.bind(null, el));
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

}());
