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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\src\\\\client\\\\js\\\\index.js: Unsyntactic continue (295:12)\\n\\n\\u001b[0m \\u001b[90m 293 | \\u001b[39m            team_c\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39madd(\\u001b[32m'team_c'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 294 | \\u001b[39m        } \\u001b[36mcatch\\u001b[39m (error) {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 295 | \\u001b[39m            \\u001b[36mcontinue\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 296 | \\u001b[39m        }\\u001b[0m\\n\\u001b[0m \\u001b[90m 297 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 298 | \\u001b[39m})\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:723:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:716:17)\\n    at Parser.raise (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:710:17)\\n    at Parser.verifyBreakContinue (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11173:12)\\n    at Parser.parseBreakContinueStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11155:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10932:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11490:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11477:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11461:10)\\n    at clause.body.withTopicForbiddingContext (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11368:64)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10791:14)\\n    at Parser.parseTryStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11368:26)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10973:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11490:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11477:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11461:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10992:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10916:17)\\n    at Parser.parseIfStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11269:51)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10961:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10916:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11490:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11477:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11461:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10477:24)\\n    at Parser.parseArrowExpression (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10432:10)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10058:12)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9814:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9479:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9459:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9329:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9302:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9257:21)\\n    at Parser.parseExprListItem (C:\\\\Users\\\\LEMUR\\\\Desktop\\\\polyweb.agency\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10553:18)\");\n\n//# sourceURL=webpack:///./client/js/index.js?");

/***/ })

/******/ });