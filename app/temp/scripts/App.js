/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(23)('wks')
  , uid        = __webpack_require__(14)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(11);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(36)
  , toPrimitive    = __webpack_require__(51)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys')
  , uid    = __webpack_require__(14);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(4)
  , hide      = __webpack_require__(6)
  , redefine  = __webpack_require__(21)
  , ctx       = __webpack_require__(16)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , hide      = __webpack_require__(6)
  , has       = __webpack_require__(2)
  , SRC       = __webpack_require__(14)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(4).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(37)
  , defined = __webpack_require__(8);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(13)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _quizzes = __webpack_require__(29);

var _quizzes2 = _interopRequireDefault(_quizzes);

var _Quiz = __webpack_require__(30);

var _Quiz2 = _interopRequireDefault(_Quiz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  // Add quiz data from JSON file to variable
  var quizzes = _quizzes2.default.quizzes;
  // Add quiz names to an array
  var quizNames = quizzes.map(function (quiz) {
    return Object.keys(quiz).toString();
  });

  // Load quiz names into page tabs and add event listeners
  quizNames.forEach(function (name, index) {
    var navLink = document.getElementById('nav-' + index);
    navLink.innerHTML = name;
    navLink.addEventListener('click', function () {
      quiz = new _Quiz2.default(quizzes[index]);
      quiz.loadQuiz();
      document.querySelector('.active').classList.remove('active');
      navLink.classList.add('active');
    });
  });

  // Load first quiz on page load
  var quiz = new _Quiz2.default(quizzes[0]);
  quiz.loadQuiz();
})();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(53);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"quizzes":[{"Game of Thrones":{"quote":"'When you play the game of thrones, you win or you die. There is no middle ground.'","quoteSource":"Season 1, Episode 7","questions":[{"question":"What are the house words of House Stark?","choices":["The North Remembers","When the snows fall and the white winds blow, the lone wolf dies but the pack survives","Winter is Coming","The winters are hard, but the Starks will endure"],"correctAnswer":2},{"question":"What is the name of Ned Stark's Valyrian greatsword?","choices":["Longclaw","Oathkeeper","Heartsbane","Ice"],"correctAnswer":3},{"question":"Which of these names is not on Arya's list?","choices":["Cersei","Roose Bolton","Joffery","Illyn Payne"],"correctAnswer":1},{"question":"What are the house words of House Targaryen?","choices":["Fire cannot kill a dragon","Blood of the Dragon","All men must die, but we are not men","Fire and Blood"],"correctAnswer":3},{"question":"What or who kills Khal Drogo in the end?","choices":["The witch, Mirri","His bloodriders","Daenerys suffocates him","His chest wound"],"correctAnswer":2},{"question":"When Jon first meets Tyrion, what advice does Tyrion give him?","choices":["“It’s not easy being drunk all the time. If it were easy, everyone would do it.”","“Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.”","“It’s hard to put a leash on a dog once you’ve put a crown on its head.”","“A mind needs books like a sword needs a whetstone.”"],"correctAnswer":1},{"question":"What are the house words of House Lannister?","choices":["Hear me roar!","A Lannister always pays his debts","Teach them what it means to put a lion in a cage","When you play a game of thrones, you win or you die"],"correctAnswer":0}]}},{"Buffy the Vampire Slayer":{"quote":"'In every generation there is a chosen one... she alone will stand against the vampires, the demons and the forces of darkness. She is the slayer.'","quoteSource":"Season 1, Episode 1","questions":[{"question":"Who is the first vampire that Buffy kills in the first episode, 'Welcome to the Hellmouth'?","choices":["Darla","Luke","Jesse","Thomas"],"correctAnswer":3},{"question":"What gift does Angel give Buffy for her 17th birthday?","choices":["A silver cross","A book","A Claddagh ring","Takes her ice skating"],"correctAnswer":2},{"question":"In the episode 'Where the Wild Things Are', the gang goes to find Giles for help. They find him singing and playing guitar at the Espresso Bar. What song is he performing?","choices":["Behind Blue Eyes","Freebird","Tales of Brave Ulysses","Wild Horses"],"correctAnswer":0},{"question":"Xander tells Anya to dress up as something scary in the Halloween episode 'Fear, Itself'. What does she dress up as?","choices":["A nurse","A clown","A demon","A bunny"],"correctAnswer":3},{"question":"What name do Willow and Tara give their kitten?","choices":["Trixie","They haven't found her name","Miss Kitty Fantastico","Joan"],"correctAnswer":2},{"question":"What phrase is not on Buffy's tombstone?","choices":["She saved the world a lot","Beloved Daughter","Devoted Friend","Beloved Sister"],"correctAnswer":1},{"question":"In the episode 'Restless', what does Tara warn Buffy?","choices":["'Be back before dawn.'","'You don't understand.'","'You're asking the wrong questions.'","'Don't stick out your elbow.'"],"correctAnswer":0},{"question":"What does Dawn get Tara for her birthday in the episode 'Family'?","choices":["A spellbook","A witch Pez dispenser","A necklace","A crystal ball"],"correctAnswer":1}]}},{"Parks and Rec":{"quote":"'We need to remember what's important in life: friends, waffles, work. Or waffles, friends, work. Doesn't matter, but work is third.'","quoteSource":"Season 3, Episode 13","questions":[{"question":"What is the title of the book Leslie writes?","choices":["Failure: an American Success Story","Pawnee: The Greatest Town in America","Off the Sidelines: Raise Your Voice, Change the World","A History of Pawnee, Indiana"],"correctAnswer":1},{"question":"What word and description appears at the very top of the Swanson Pyramid of Greatness?","choices":["Capitalism - God's way of determining who is smart, and who is poor","Discipline - The ability to repeat a boring thing over and over","Buffets - Whenever available. Choose quantity over quality","Honor - If you need it defined, you don't have it"],"correctAnswer":3},{"question":"Which of these is not one of Andy's own secrets he tells Ron after finding out about Duke Silver?","choices":["'I'm allergic to sushi. Every time I eat more than 80 pieces, I throw up'","'I don't know who Al Gore is and at this point I'm too afraid to ask'","'When they say 2% milk, I don't know what the other 98% is'","'I didn't actually sell my last car, I just forgot where I parked it'"],"correctAnswer":0},{"question":"What superhero costume does Ben buy when Donna and Tom bring him along on their annual 'Treat Yo Self' day?","choices":["Superman","Spider-man","Batman","Captain America"],"correctAnswer":2},{"question":"What is the only thing Ron hates more than lying?","choices":["Clear alcohols","Salad","Cats","Skim milk"],"correctAnswer":3},{"question":"What is April's favorite band?","choices":["Neutral Milk Hotel","Scarecrow Boat","The Duke Silver Trio","Mouse Rat"],"correctAnswer":0}]}},{"Twin Peaks":{"quote":"'I have no idea where this will lead us. But I have a definite feeling it will be a place both wonderful and strange.'","quoteSource":"Season 2, Episode 18","questions":[{"question":"Who discovers Laura Palmer's body?","choices":["Sheriff Harry S. Truman","Doc Hayward","Hank Jennings","Pete Martell"],"correctAnswer":3},{"question":"What is the name of Agent Cooper's secretary, who he addresses on most of his recordings?","choices":["Lucy","Margaret","Diane","Nadine"],"correctAnswer":2},{"question":"What is the name of the diner Shelly works at?","choices":["Great Northern Diner","Double R Diner","Roadhouse","Bookhouse Diner"],"correctAnswer":1},{"question":"What is Agent Cooper's favorite type of donut?","choices":["Bearclaw","Boston Creme","Jelly","Cruller"],"correctAnswer":2},{"question":"What is the Log Lady's real name?","choices":["Margaret Lanterman","Catherine Martell","Annie Blackburn","Nadine Hurley"],"correctAnswer":0}]}}]}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Quiz(data) {
  var _this = this;

  this.name = Object.keys(data).toString();
  this.questionSet = data[this.name].questions;
  this.quote = data[this.name].quote;
  this.quoteSource = data[this.name].quoteSource;
  this.numOfQuestions = this.questionSet.length;
  this.answers = [];

  var quizEl = document.querySelector('.quiz');
  var btnContainer = document.querySelector('.btn-container');
  var validationEl = document.querySelector('.validation');

  btnContainer.innerHTML = '\n    <button id="back" class="btn hidden">\n      Back\n    </button>\n    <button id="start" class="btn">\n      Start\n    </button>\n    <button id="next" class="btn hidden">\n      Next\n    </button>\n    <button id="retry" class="btn hidden">\n      Retry\n    </button>\n  ';

  var startBtn = document.getElementById('start');
  var backBtn = document.getElementById('back');
  var nextBtn = document.getElementById('next');
  var retryBtn = document.getElementById('retry');

  var hideElement = function hideElement(el) {
    el.classList.add('hidden');
  };

  var showElement = function showElement(el) {
    el.classList.remove('hidden');
  };

  this.loadQuiz = function () {
    hideElement(retryBtn);
    showElement(startBtn);

    _this.currentQuestion = 0;

    quizEl.innerHTML = '';
    quizEl.innerHTML = '\n      <p class="name">' + _this.name + '</p>\n      <p class="quote">' + _this.quote + '</p>\n      <p class="quote-source">' + _this.quoteSource + '</p>\n    ';
  };

  this.saveAnswer = function () {
    _this.answers[_this.currentQuestion] = document.querySelector('[name="choices"]:checked').value;
  };

  this.loadAnswer = function (answer) {
    if (answer !== undefined) {
      var choices = document.getElementsByName('choices');

      choices[answer].checked = true;
    }
  };

  this.validateChoice = function () {
    var choices = Array.from(document.getElementsByName('choices'));
    var isAnswerSelected = false;

    choices.forEach(function (choice) {
      if (choice.checked === true) {
        isAnswerSelected = true;
      }
    });

    return isAnswerSelected;
  };

  this.loadQuestion = function (qn) {
    quizEl.innerHTML = "";
    quizEl.innerHTML += '<div class="count">' + (_this.currentQuestion + 1) + ' / ' + _this.numOfQuestions + '</div>';
    quizEl.innerHTML += '<p class="question">' + qn.question + '</p>';

    qn.choices.forEach(function (choice, index) {
      quizEl.innerHTML += '\n        <div class="choice">\n          <input type="radio" name="choices" id="choice-' + index + '" class="choice--radio" value="' + index + '" />\n          <label for="choice-' + index + '" class="choice--label">' + choice + '</label>\n        </div>\n      ';
    });

    var radios = Array.from(document.getElementsByName('choices'));

    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        hideElement(validationEl);
        _this.saveAnswer();
      });
    });
  };

  this.showAnswers = function () {
    var answersBtn = document.getElementById('answers');
    hideElement(answersBtn);

    _this.answers.forEach(function (answer, index) {
      if (+answer === _this.questionSet[index].correctAnswer) {
        quizEl.innerHTML += '\n          <div class="answer">\n            <p>\n              <span class="num">' + (index + 1) + '</span>\n              ' + _this.questionSet[index].choices[answer] + ' \n              <span class="icon-correct">\u2714</span>\n            </p>\n          </div>\n      ';
      } else {
        quizEl.innerHTML += '\n          <div class="answer">\n            <p>\n              <span class="num">' + (index + 1) + '</span>\n              ' + _this.questionSet[index].choices[answer] + '\n              <span class="icon-incorrect">X</span>\n              </p>\n            <p class="answer-correct">\n              <span>Correct answer:</span> ' + _this.questionSet[index].choices[_this.questionSet[index].correctAnswer] + '\n            </p>\n          </div>\n        ';
      }
    });
  };

  this.completeQuiz = function () {
    hideElement(backBtn);
    hideElement(nextBtn);
    showElement(retryBtn);

    var correct = 0;

    _this.answers.forEach(function (answer, index) {
      if (+answer === _this.questionSet[index].correctAnswer) {
        correct++;
      }
    });

    var score = (correct / _this.numOfQuestions * 100).toFixed(0);

    quizEl.innerHTML = "";
    quizEl.innerHTML += '\n      <p class="score">' + score + '%</p>    \n      <p class="correct">You got ' + correct + ' out of ' + _this.numOfQuestions + ' questions right.</p>\n      <div class="btn-container">\n        <button id="answers" class="btn-link">Show answers</button>\n      </div>\n    ';

    var answersBtn = document.getElementById('answers');
    answersBtn.addEventListener('click', _this.showAnswers);
  };

  this.startQuiz = function () {
    hideElement(startBtn);
    showElement(nextBtn);

    _this.loadQuestion(_this.questionSet[0]);
  };

  this.nextQuestion = function () {
    if (_this.validateChoice()) {
      showElement(backBtn);
      if (_this.currentQuestion < _this.numOfQuestions - 1) {
        _this.currentQuestion++;
        _this.loadQuestion(_this.questionSet[_this.currentQuestion]);
        _this.loadAnswer(_this.answers[_this.currentQuestion]);
      } else {
        _this.completeQuiz();
      }
    } else {
      showElement(validationEl);
    }
  };

  this.prevQuestion = function () {
    _this.currentQuestion--;
    _this.loadQuestion(_this.questionSet[_this.currentQuestion]);
    _this.loadAnswer(_this.answers[_this.currentQuestion]);
    if (_this.currentQuestion === 0) {
      hideElement(backBtn);
    }
  };

  startBtn.addEventListener('click', this.startQuiz);
  backBtn.addEventListener('click', this.prevQuestion);
  nextBtn.addEventListener('click', this.nextQuestion);
  retryBtn.addEventListener('click', this.loadQuiz);
}

exports.default = Quiz;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24)
  , toLength  = __webpack_require__(25)
  , toIndex   = __webpack_require__(50);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(11);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(10)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(44)
  , descriptor     = __webpack_require__(11)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(43)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(21)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(10)
  , $iterCreate    = __webpack_require__(40)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(46)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(3)
  , dPs         = __webpack_require__(45)
  , enumBugKeys = __webpack_require__(18)
  , IE_PROTO    = __webpack_require__(12)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(35).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(3)
  , getKeys  = __webpack_require__(48);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(26)
  , IE_PROTO    = __webpack_require__(12)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(24)
  , arrayIndexOf = __webpack_require__(32)(false)
  , IE_PROTO     = __webpack_require__(12)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(47)
  , enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13)
  , defined   = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(33)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(10);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(16)
  , $export        = __webpack_require__(19)
  , toObject       = __webpack_require__(26)
  , call           = __webpack_require__(39)
  , isArrayIter    = __webpack_require__(38)
  , toLength       = __webpack_require__(25)
  , createProperty = __webpack_require__(34)
  , getIterFn      = __webpack_require__(52);

$export($export.S + $export.F * !__webpack_require__(42)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
module.exports = __webpack_require__(27);


/***/ })
/******/ ]);