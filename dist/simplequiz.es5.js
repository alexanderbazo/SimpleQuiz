"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	'use strict';

	/* eslint-env browser */

	var Loader = function () {
		function Loader() {
			_classCallCheck(this, Loader);
		}

		_createClass(Loader, [{
			key: "load",
			value: function load(url) {
				console.log("Loading file from " + url);
			}
		}]);

		return Loader;
	}();

	var Loader$1 = new Loader();

	/* eslint-env browser */

	Loader$1.load("./data/test.quiz");
})();
