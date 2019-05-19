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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppModel */ \"./src/AppModel.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nfunction unify(e) {\n  return e.changedTouches ? e.changedTouches[0] : e;\n}\n\nvar currentPositionX = null;\n\nfunction lock(e) {\n  currentPositionX = unify(e).clientX;\n}\n\nvar countTranslate = 0;\n\nfunction move(e) {\n  var resultDiv2 = document.getElementsByClassName('article');\n  var differentPositionX = unify(e).clientX - currentPositionX;\n  var directionOfMove = Math.sign(differentPositionX);\n\n  if ((countTranslate > 0 || directionOfMove < 0) && (countTranslate < 15 || directionOfMove > 0)) {\n    for (var j = 0; j < 15; j += 1) {\n      resultDiv2[j].style.setProperty('--i', countTranslate - directionOfMove);\n    }\n\n    var numberPage = document.querySelectorAll('.number-btn');\n    var btnPagingControl = document.querySelector('.paging-control').children;\n\n    for (var i = 0; i < 4; i += 1) {\n      numberPage[i].innerHTML = \"\".concat(countTranslate - directionOfMove + i + 1);\n      btnPagingControl[i].setAttribute('tooltip', countTranslate - directionOfMove + i + 1);\n    }\n\n    countTranslate -= directionOfMove;\n  }\n\n  currentPositionX = null;\n}\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.state = {\n      MAXRESULT: 15,\n      APIKEY: 'AIzaSyDlHpAg-P7WklthADmGMUppxeAa229PlHs' // 'AIzaSyCttWdVyalxCfJCtGhTgRqpcxb_deqCruA'\n\n    };\n  }\n\n  _createClass(App, [{\n    key: \"start\",\n    value: function start() {\n      var model = new _AppModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.state);\n      window.document.body.querySelector('.search-btnsubmit').addEventListener('click', function () {\n        if (document.querySelector('.article')) {\n          model.remove();\n        }\n\n        var data = document.querySelector('.search-input').value;\n        model.getClip(data);\n      });\n      var resultDiv = window.document.body.querySelector('.articles');\n      resultDiv.addEventListener('mousedown', lock);\n      resultDiv.addEventListener('touchstart', lock);\n      resultDiv.addEventListener('mouseup', move);\n      resultDiv.addEventListener('touchend', move);\n      resultDiv.addEventListener('touchmove', function (e) {\n        e.preventDefault();\n      }, false);\n      var searchInput = document.querySelector('.search-input');\n      searchInput.addEventListener('focus', function () {\n        searchInput.value = '';\n      });\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/AppModel.js":
/*!*************************!*\
  !*** ./src/AppModel.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppModel; });\n/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppView */ \"./src/AppView.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AppModel =\n/*#__PURE__*/\nfunction () {\n  function AppModel(state) {\n    _classCallCheck(this, AppModel);\n\n    this.state = state;\n  }\n\n  _createClass(AppModel, [{\n    key: \"getClip\",\n    value: function getClip(data) {\n      var _this$state = this.state,\n          MAXRESULT = _this$state.MAXRESULT,\n          APIKEY = _this$state.APIKEY;\n      var url = \"https://www.googleapis.com/youtube/v3/search?key=\".concat(APIKEY, \"&type=video&part=snippet&maxResults=\").concat(MAXRESULT, \"&q=\").concat(data);\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', url, true);\n\n      xhr.onload = function resp() {\n        var result = JSON.parse(xhr.responseText); // const token = result.nextPageToken;\n\n        if (result.items.length !== 0) {\n          var videosId = [];\n\n          for (var i = 0; i < MAXRESULT; i += 1) {\n            videosId.push(result.items[i].id.videoId);\n          }\n\n          videosId.join('');\n          var urlStatistic = \"https://www.googleapis.com/youtube/v3/videos?key=\".concat(APIKEY, \"&id=\").concat(videosId, \"&part=statistics\");\n          fetch(urlStatistic).then(function (res) {\n            return res.json();\n          }).then(function (resultStatistic) {\n            var view = new _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](result, resultStatistic);\n            view.draw();\n          }).catch(function (error) {\n            return error;\n          });\n        }\n      };\n\n      xhr.onerror = function onerr() {\n        return \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \".concat(this.status);\n      };\n\n      xhr.send();\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      var view = new _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.state);\n      view.remove();\n    }\n  }]);\n\n  return AppModel;\n}();\n\n\n\n//# sourceURL=webpack:///./src/AppModel.js?");

/***/ }),

/***/ "./src/AppView.js":
/*!************************!*\
  !*** ./src/AppView.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppView; });\n/* harmony import */ var _pageNavigationView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageNavigationView */ \"./src/pageNavigationView.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AppView =\n/*#__PURE__*/\nfunction () {\n  function AppView(data, dataStatistics) {\n    _classCallCheck(this, AppView);\n\n    this.video = data;\n    this.videoStatistics = dataStatistics;\n  }\n\n  _createClass(AppView, [{\n    key: \"draw\",\n    value: function draw() {\n      var _this = this;\n\n      var resultDiv = document.querySelector('.articles');\n\n      if (this.video.items.length === 0) {\n        var resultMessage = document.createElement('p');\n        resultMessage.className = 'result-empty';\n        resultMessage.textContent = 'По Вашему запросу ничего не найдено';\n        resultDiv.appendChild(resultMessage);\n      } else {\n        for (var i = 0; i < this.video.items.length; i += 1) {\n          var divArticle = document.createElement('div');\n          divArticle.className = 'article';\n          var articleTitle = document.createElement('p');\n          var articleLink = document.createElement('a');\n          articleLink.className = 'link-video';\n          articleLink.style.backgroundImage = \"url(\".concat(this.video.items[i].snippet.thumbnails.default.url, \")\");\n          var articleDesc = document.createElement('p');\n          var articleDatePublish = document.createElement('span');\n          articleDatePublish.className = 'date-publish';\n          var articleAuthor = document.createElement('span');\n          articleAuthor.className = 'author';\n          var countView = document.createElement('span');\n          countView.className = 'count-view';\n          articleTitle.textContent = this.video.items[i].snippet.title;\n          articleTitle.className = 'title';\n          articleLink.href = \"https://www.youtube.com/watch?v=\".concat(this.video.items[i].id.videoId);\n          articleDesc.textContent = this.video.items[i].snippet.description;\n          articleDesc.className = 'description';\n          articleDatePublish.textContent = this.video.items[i].snippet.publishedAt.slice(0, 10);\n          articleAuthor.textContent = this.video.items[i].snippet.channelTitle;\n          countView.textContent = this.videoStatistics.items[i].statistics.viewCount;\n          articleLink.appendChild(articleTitle);\n          divArticle.appendChild(articleLink);\n          divArticle.appendChild(articleAuthor);\n          divArticle.appendChild(articleDatePublish);\n          divArticle.appendChild(countView);\n          divArticle.appendChild(articleDesc);\n          resultDiv.appendChild(divArticle);\n          document.body.appendChild(resultDiv);\n        }\n\n        Object(_pageNavigationView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        var pagingControl = document.querySelector('.paging-control');\n        pagingControl.addEventListener('click', function (e) {\n          var currentPage = e.target.getAttribute('tooltip');\n\n          if (currentPage !== null) {\n            document.querySelector('.page-current').className = 'btn-pagecontrol';\n            e.target.className = 'page-current';\n            var resultDiv2 = document.getElementsByClassName('article');\n\n            for (var j = 0; j < _this.video.items.length; j += 1) {\n              resultDiv2[j].style.setProperty('--i', currentPage);\n            }\n          }\n        });\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      document.querySelector('.paging-control').remove();\n      document.querySelector('.articles').remove();\n      var resultDiv = document.createElement('div');\n      resultDiv.className = 'articles';\n      document.body.appendChild(resultDiv);\n      return this;\n    }\n  }]);\n\n  return AppView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/AppView.js?");

/***/ }),

/***/ "./src/StartPage.js":
/*!**************************!*\
  !*** ./src/StartPage.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartPage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StartPage =\n/*#__PURE__*/\nfunction () {\n  function StartPage() {\n    _classCallCheck(this, StartPage);\n  }\n\n  _createClass(StartPage, [{\n    key: \"draw\",\n    value: function draw() {\n      var searchDiv = document.createElement('div');\n      searchDiv.className = 'search';\n      var searchInputElement = document.createElement('input');\n      searchInputElement.className = 'search-input';\n      searchInputElement.type = 'text';\n      searchInputElement.value = '';\n      searchInputElement.autofocus = 'true';\n      searchInputElement.name = 'q';\n      searchDiv.appendChild(searchInputElement);\n      var btnSubmitElement = document.createElement('button');\n      btnSubmitElement.className = 'search-btnsubmit';\n      btnSubmitElement.innerHTML = 'Search';\n      searchDiv.appendChild(btnSubmitElement);\n      document.body.appendChild(searchDiv);\n      var resultDiv = document.createElement('div');\n      resultDiv.className = 'articles';\n      document.body.appendChild(resultDiv);\n      return this;\n    }\n  }]);\n\n  return StartPage;\n}();\n\n\n\n//# sourceURL=webpack:///./src/StartPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _StartPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartPage */ \"./src/StartPage.js\");\n\n\nvar startPage = new _StartPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nstartPage.draw();\nvar app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pageNavigationView.js":
/*!***********************************!*\
  !*** ./src/pageNavigationView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawPageNavigation; });\nfunction drawPageNavigation() {\n  var pagingControl = document.createElement('div');\n  pagingControl.className = 'paging-control';\n  var countBtn = 4;\n\n  for (var i = 0; i < countBtn; i += 1) {\n    var btnPagingControl = document.createElement('div');\n    btnPagingControl.className = 'btn-pagecontrol';\n    var numberPage = document.createElement('span');\n    numberPage.className = 'number-btn';\n    btnPagingControl.setAttribute('tooltip', i + 1);\n    numberPage.innerHTML = i + 1;\n    btnPagingControl.appendChild(numberPage);\n    pagingControl.appendChild(btnPagingControl);\n  }\n\n  document.body.appendChild(pagingControl);\n  document.querySelector('.btn-pagecontrol').className = 'page-current';\n}\n\n//# sourceURL=webpack:///./src/pageNavigationView.js?");

/***/ })

/******/ });