# SimpleQuiz

A simple *Javascript* library to render small multiple-choice quizes in HTML pages.

## Usage

Mark quiz elements with `class=simple-quiz`. Question and answers are defined in external files and linked with the `data-quiz-url` attribute. Include `simplequiz.min.js` from the `dist`-folder into your HTML page. Quizzes will be automatically loaded and initialized on `load`.

```
<div id="quiz" class="simple-quiz" data-quiz-url="myQuiz.quiz"></div>

<script type="application/javascript" src="simplequiz.min.js"></script>
```

## Formatting Quizes

Quizes are formatted using a simple markup

```
# Javascript
Some simple questions on Javascript

? Data types
Select primitive data types only.
+ Boolean | Boolean values are primitive types in Javascript
+ Undefined | Undefined is a primitive types in Javascript
- Object | Objects are the only non-primitive type in Javascript
```

Blank lines can be used but are not necessary.

## Build

[`bable-cli`](https://babeljs.io/), [`rollup.s`](https://rollupjs.org/guide/en/) and [`UglifyJS`](https://github.com/mishoo/UglifyJS2) have to be installed to build the library.

Run `npm install` to install dependencies. Run `npm run bundle` to bundle the library. Run `npm run pack` to bundle and minify the library. Output is generated in `dist`.

## Demo

A demo file is include in the `dist`-folder.