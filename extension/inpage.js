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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/inpage/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/chrome-extension-message-wrapper/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/chrome-extension-message-wrapper/index.js ***!
  \****************************************************************/
/*! exports provided: setupMessageListener, initBGFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMessageListener", function() { return setupMessageListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBGFunctions", function() { return initBGFunctions; });
/* harmony import */ var _lib_backgroundSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/backgroundSetup */ "./node_modules/chrome-extension-message-wrapper/lib/backgroundSetup.js");
/* harmony import */ var _lib_contentSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/contentSetup */ "./node_modules/chrome-extension-message-wrapper/lib/contentSetup.js");



const setupMessageListener = _lib_backgroundSetup__WEBPACK_IMPORTED_MODULE_0__["default"];
const initBGFunctions = _lib_contentSetup__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./node_modules/chrome-extension-message-wrapper/lib/backgroundSetup.js":
/*!******************************************************************************!*\
  !*** ./node_modules/chrome-extension-message-wrapper/lib/backgroundSetup.js ***!
  \******************************************************************************/
/*! exports provided: find, invokeFunction, mapNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeFunction", function() { return invokeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapNames", function() { return mapNames; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/chrome-extension-message-wrapper/lib/constants.js");


/**
 * A small helper which is used to get variables in deeply nested objects.
 *
 * @param {Object} object
 * @param {Array} path The path to the variable inside the object
 * @return {*} Returns either an object, function or undefined depending on the path.
 */
const find = (object, path) => {
  if (path.length > 0) {
    let ret = object[path[0]];
    if (typeof ret === "object") {
      ret = find(ret, path.slice(1));
    } else if (path.slice(1).length > 0) {
      return undefined;
    }
    return ret;
  }

  return object;
};

/**
 * Calls a function from the background functions, based on the request.
 * @param {Object} request
 * @param {Object} sender
 * @param {Function} sendResponse
 * @param {Object} backgroundFunctions
 * @returns {Boolean} true if the message channel should be kept open (async function) or false if it is a sync function.
 */
const invokeFunction = (req, sender, sendRes, bgFuncs) => {
  if (find(bgFuncs, req.payload.path)) {
    let ret = find(bgFuncs, req.payload.path);
    if (typeof ret === "function") {
      try {
        ret = ret(...req.payload.args, {
          request: req,
          sender
        });
      } catch (error) {
        sendRes({ error: error.message });
        return false;
      }
      // If it is a promise (async function) keep the message channel open by returning true and send the reponse after resolving.
      if (typeof ret === "object" && ret.then) {
        ret.then(result => sendRes({ result }))
          .catch(error => sendRes({ error: error.message }));
        // Keep the msg channel open for the async response
        return true;
      }
    }
    sendRes({ result: ret });
    return false;
  }
  return false;
};

/**
 * Uses the background functions to create an object with the same structure,
 * only with names of the functions instead of the functions themself.
 *
 * @param {Object} obj Functions inside an object
 */
const mapNames = obj =>
  Object.keys(obj).reduce((acc, key) => {
    let ret = key;
    if (typeof obj[key] === "object") {
      ret = mapNames(obj[key]);
    }
    return { ...acc, [key]: ret };
  }, {});

/**
 * Function which creates the message listener.
 * This should be passend in chrome.runtime.onMessage.addListener
 *
 * @param {Object} bgFuncs Functions which should be available to the content/popup scripts
 * @param {Object} options Options to configure logging, custom message handling etc.
 * @returns {Function} listener which takes Request, Sender and SendResponse
 */
const setupMessageListener = (bgFuncs = {}, options = {}) => (
  req,
  sender,
  sendRes
) => {
  if (req.handler === _constants__WEBPACK_IMPORTED_MODULE_0__["CHROME_EXT_TOOLKIT"]) {
    switch (req.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__["GET_FUNCTION_NAMES"]:
        sendRes({ 
          result: mapNames(bgFuncs)
        });
        return false;
      case _constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE_FUNCTION"]:
        options.verbose &&
          console.log(
            (options.logRequest && options.logRequest(req)) ||
              `Got request to call a function: ${req}`
          );
        return invokeFunction(req, sender, sendRes, bgFuncs);
      default:
        return false;
    }
  } else if (options.customHandler) {
    options.customHandler(req, sender, sendRes);
    return true;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setupMessageListener);


/***/ }),

/***/ "./node_modules/chrome-extension-message-wrapper/lib/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/chrome-extension-message-wrapper/lib/constants.js ***!
  \************************************************************************/
/*! exports provided: CHROME_EXT_TOOLKIT, INVOKE_FUNCTION, GET_FUNCTION_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHROME_EXT_TOOLKIT", function() { return CHROME_EXT_TOOLKIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE_FUNCTION", function() { return INVOKE_FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FUNCTION_NAMES", function() { return GET_FUNCTION_NAMES; });
const CHROME_EXT_TOOLKIT = "__CHROME_EXTENSION_TOOLKIT__";
const INVOKE_FUNCTION = "__INVOKE_FUNCTION__";
const GET_FUNCTION_NAMES = "__GET_FUNCTION_NAMES";


/***/ }),

/***/ "./node_modules/chrome-extension-message-wrapper/lib/contentSetup.js":
/*!***************************************************************************!*\
  !*** ./node_modules/chrome-extension-message-wrapper/lib/contentSetup.js ***!
  \***************************************************************************/
/*! exports provided: makeSendMessage, makeCreateFunction, addEntry, setupBackgroundFunctions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSendMessage", function() { return makeSendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreateFunction", function() { return makeCreateFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntry", function() { return addEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupBackgroundFunctions", function() { return setupBackgroundFunctions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/chrome-extension-message-wrapper/lib/constants.js");


/**
 *
 * @param {Object} chrome
 * @returns {Function} sendMessage(msg) -> chrome.runtime.sendMessage
 */
const makeSendMessage = chrome => msg =>
  new Promise((res, rej) => {
    chrome.runtime.sendMessage(msg, response => {
      if (response.error) {
        rej(response.error);
      } else {
        res(response.result);
      }
    });
  });

/**
 *
 * @param {Function} sendMessage
 * @returns {Function} createFunction(path) -> sendMessage(...)
 */
const makeCreateFunction = sendMessage => path => (...args) =>
  sendMessage({
    handler: _constants__WEBPACK_IMPORTED_MODULE_0__["CHROME_EXT_TOOLKIT"],
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE_FUNCTION"],
    payload: {
      path,
      args
    }
  });

/**
 * Maps over the background function names and creates a function which will send the arguments and path to the background script.
 *
 * @param {Function} createFunction
 * @param {Object} obj Object of background function names
 * @param {Array} path
 * @returns {Object} obj Object of functions
 */
const addEntry = (createFunction, obj, path = []) =>
  Object.keys(obj).reduce((acc, key) => {
    let ret;
    if (typeof obj[key] === "object") {
      ret = addEntry(createFunction, obj[key], [...path, key]);
    } else {
      ret = createFunction([...path, key]);
    }
    return { ...acc, [key]: ret };
  }, {});

/**
 * Initialize the functions from the background script
 *
 * @param {Object} chrome
 * @returns {Promise} Promise with the background functions as an object with the same structure and names which were defined in setupMessageListener
 */
const setupBackgroundFunctions = chrome => {
  const sendMessage = makeSendMessage(chrome);
  const createFunction = makeCreateFunction(sendMessage);
  return sendMessage({
    handler: _constants__WEBPACK_IMPORTED_MODULE_0__["CHROME_EXT_TOOLKIT"],
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["GET_FUNCTION_NAMES"]
  }).then(bgFuncs => {
    return {
      send: sendMessage,
      ...addEntry(createFunction, bgFuncs)
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setupBackgroundFunctions);


/***/ }),

/***/ "./node_modules/extensionizer/extension-instance.js":
/*!**********************************************************!*\
  !*** ./node_modules/extensionizer/extension-instance.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const apis = [
  'alarms',
  'bookmarks',
  'browserAction',
  'commands',
  'contextMenus',
  'cookies',
  'downloads',
  'events',
  'extension',
  'extensionTypes',
  'history',
  'i18n',
  'idle',
  'notifications',
  'pageAction',
  'runtime',
  'storage',
  'tabs',
  'webNavigation',
  'webRequest',
  'windows',
]

const hasChrome = typeof chrome !== 'undefined'
const hasWindow = typeof window !== 'undefined'
const hasBrowser = typeof browser !== 'undefined'

function Extension () {
  const _this = this

  apis.forEach(function (api) {

    _this[api] = null

    if (hasChrome) {
      try {
        if (chrome[api]) {
          _this[api] = chrome[api]
        }
      } catch (e) {
      }
    }

    if (hasWindow) {
      try {
        if (window[api]) {
          _this[api] = window[api]
        }
      } catch (e) {
      }
    }

    if (hasBrowser) {
      try {
        if (browser[api]) {
          _this[api] = browser[api]
        }
      } catch (e) {
      }
      try {
        _this.api = browser.extension[api]
      } catch (e) {
      }
    }
  })

  if (hasBrowser) {
    try {
      if (browser && browser.runtime) {
        this.runtime = browser.runtime
      }
    } catch (e) {
    }

    try {
      if (browser && browser.browserAction) {
        this.browserAction = browser.browserAction
      }
    } catch (e) {
    }
  }

}

module.exports = Extension


/***/ }),

/***/ "./node_modules/extensionizer/index.js":
/*!*********************************************!*\
  !*** ./node_modules/extensionizer/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Extension.js
 *
 * A module for unifying browser differences in the WebExtension API.
 *
 * Initially implemented because Chrome hides all of their WebExtension API
 * behind a global `chrome` variable, but we'd like to start grooming
 * the code-base for cross-browser extension support.
 *
 * You can read more about the WebExtension API here:
 * https://developer.mozilla.org/en-US/Add-ons/WebExtensions
 */

const Extension = __webpack_require__(/*! ./extension-instance */ "./node_modules/extensionizer/extension-instance.js")
module.exports = new Extension()


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/semver/semver.js":
/*!***************************************!*\
  !*** ./node_modules/semver/semver.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var t = exports.tokens = {}
var R = 0

function tok (n) {
  t[n] = R++
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

tok('NUMERICIDENTIFIER')
src[t.NUMERICIDENTIFIER] = '0|[1-9]\\d*'
tok('NUMERICIDENTIFIERLOOSE')
src[t.NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

tok('NONNUMERICIDENTIFIER')
src[t.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

tok('MAINVERSION')
src[t.MAINVERSION] = '(' + src[t.NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[t.NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[t.NUMERICIDENTIFIER] + ')'

tok('MAINVERSIONLOOSE')
src[t.MAINVERSIONLOOSE] = '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

tok('PRERELEASEIDENTIFIER')
src[t.PRERELEASEIDENTIFIER] = '(?:' + src[t.NUMERICIDENTIFIER] +
                            '|' + src[t.NONNUMERICIDENTIFIER] + ')'

tok('PRERELEASEIDENTIFIERLOOSE')
src[t.PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[t.NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[t.NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

tok('PRERELEASE')
src[t.PRERELEASE] = '(?:-(' + src[t.PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[t.PRERELEASEIDENTIFIER] + ')*))'

tok('PRERELEASELOOSE')
src[t.PRERELEASELOOSE] = '(?:-?(' + src[t.PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[t.PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

tok('BUILDIDENTIFIER')
src[t.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

tok('BUILD')
src[t.BUILD] = '(?:\\+(' + src[t.BUILDIDENTIFIER] +
             '(?:\\.' + src[t.BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

tok('FULL')
tok('FULLPLAIN')
src[t.FULLPLAIN] = 'v?' + src[t.MAINVERSION] +
                  src[t.PRERELEASE] + '?' +
                  src[t.BUILD] + '?'

src[t.FULL] = '^' + src[t.FULLPLAIN] + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
tok('LOOSEPLAIN')
src[t.LOOSEPLAIN] = '[v=\\s]*' + src[t.MAINVERSIONLOOSE] +
                  src[t.PRERELEASELOOSE] + '?' +
                  src[t.BUILD] + '?'

tok('LOOSE')
src[t.LOOSE] = '^' + src[t.LOOSEPLAIN] + '$'

tok('GTLT')
src[t.GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
tok('XRANGEIDENTIFIERLOOSE')
src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
tok('XRANGEIDENTIFIER')
src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + '|x|X|\\*'

tok('XRANGEPLAIN')
src[t.XRANGEPLAIN] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[t.PRERELEASE] + ')?' +
                   src[t.BUILD] + '?' +
                   ')?)?'

tok('XRANGEPLAINLOOSE')
src[t.XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[t.PRERELEASELOOSE] + ')?' +
                        src[t.BUILD] + '?' +
                        ')?)?'

tok('XRANGE')
src[t.XRANGE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAIN] + '$'
tok('XRANGELOOSE')
src[t.XRANGELOOSE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
tok('COERCE')
src[t.COERCE] = '(^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'
tok('COERCERTL')
re[t.COERCERTL] = new RegExp(src[t.COERCE], 'g')

// Tilde ranges.
// Meaning is "reasonably at or greater than"
tok('LONETILDE')
src[t.LONETILDE] = '(?:~>?)'

tok('TILDETRIM')
src[t.TILDETRIM] = '(\\s*)' + src[t.LONETILDE] + '\\s+'
re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

tok('TILDE')
src[t.TILDE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAIN] + '$'
tok('TILDELOOSE')
src[t.TILDELOOSE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
tok('LONECARET')
src[t.LONECARET] = '(?:\\^)'

tok('CARETTRIM')
src[t.CARETTRIM] = '(\\s*)' + src[t.LONECARET] + '\\s+'
re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], 'g')
var caretTrimReplace = '$1^'

tok('CARET')
src[t.CARET] = '^' + src[t.LONECARET] + src[t.XRANGEPLAIN] + '$'
tok('CARETLOOSE')
src[t.CARETLOOSE] = '^' + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
tok('COMPARATORLOOSE')
src[t.COMPARATORLOOSE] = '^' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + ')$|^$'
tok('COMPARATOR')
src[t.COMPARATOR] = '^' + src[t.GTLT] + '\\s*(' + src[t.FULLPLAIN] + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
tok('COMPARATORTRIM')
src[t.COMPARATORTRIM] = '(\\s*)' + src[t.GTLT] +
                      '\\s*(' + src[t.LOOSEPLAIN] + '|' + src[t.XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
tok('HYPHENRANGE')
src[t.HYPHENRANGE] = '^\\s*(' + src[t.XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[t.XRANGEPLAIN] + ')' +
                   '\\s*$'

tok('HYPHENRANGELOOSE')
src[t.HYPHENRANGELOOSE] = '^\\s*(' + src[t.XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[t.XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
tok('STAR')
src[t.STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

SemVer.prototype.compareBuild = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  var i = 0
  do {
    var a = this.build[i]
    var b = other.build[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.compareBuild = compareBuild
function compareBuild (a, b, loose) {
  var versionA = new SemVer(a, loose)
  var versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(b, a, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1] !== undefined ? m[1] : ''
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY || version === ANY) {
    return true
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options)
    } catch (er) {
      return false
    }
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    if (this.value === '') {
      return true
    }
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    if (comp.value === '') {
      return true
    }
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[t.COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[t.CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return (
      isSatisfiable(thisComparators, options) &&
      range.set.some(function (rangeComparators) {
        return (
          isSatisfiable(rangeComparators, options) &&
          thisComparators.every(function (thisComparator) {
            return rangeComparators.every(function (rangeComparator) {
              return thisComparator.intersects(rangeComparator, options)
            })
          })
        )
      })
    )
  })
}

// take a set of comparators and determine whether there
// exists a version which can satisfy it
function isSatisfiable (comparators, options) {
  var result = true
  var remainingComparators = comparators.slice()
  var testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every(function (otherComparator) {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p + pr
    } else if (xm) {
      ret = '>=' + M + '.0.0' + pr + ' <' + (+M + 1) + '.0.0' + pr
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0' + pr +
        ' <' + M + '.' + (+m + 1) + '.0' + pr
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options)
    } catch (er) {
      return false
    }
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version, options) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  var match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    var next
    while ((next = re[t.COERCERTL].exec(version)) &&
      (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
          next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null) {
    return null
  }

  return parse(match[2] +
    '.' + (match[3] || '0') +
    '.' + (match[4] || '0'), options)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/common/constants.ts":
/*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_BRANCH_NAME = "default";


/***/ }),

/***/ "./src/inpage/connection.ts":
/*!**********************************!*\
  !*** ./src/inpage/connection.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inpage_pubsub_1 = __webpack_require__(/*! ./inpage-pubsub */ "./src/inpage/inpage-pubsub.ts");
var ANY_EVENT = Symbol('any_event');
var TYPE_FILTER = function (type) { return function (op, msg) { return msg.type === type; }; };
var Connection = /** @class */ (function () {
    function Connection(_bus, eventDef) {
        var _this = this;
        var _a;
        this._bus = _bus;
        this.eventDef = eventDef;
        this.listenerContextMap = new WeakMap();
        this.autoProperties = new Map(); //ToDo: connection-wide autoproperties. Remove or not?
        this.listeners = new Set();
        (_a = this._bus) === null || _a === void 0 ? void 0 : _a.onMessage(function (operation, message) {
            _this.onMessage(operation, message);
        });
    }
    // op - operation, subject
    // msg - payload
    Connection.prototype.send = function (op, msg) {
        return this._bus.exec(op, msg);
    };
    Connection.prototype.subscribeOnceForContext = function (ctx) {
        var listener = this.listenerContextMap.get(ctx);
        if (!listener) {
            var me_1 = this;
            listener = me_1.listener();
            var handler_1 = function (evt) {
                if (evt.data.operation == 'destroy') {
                    var subId = typeof listener.f === 'string' ? listener.f : undefined;
                    if (subId !== undefined) {
                        me_1.send('unsubscribe', subId);
                    }
                    inpage_pubsub_1.unsubscribe(ctx.id, handler_1);
                    me_1.listeners.delete(listener);
                    me_1.listenerContextMap.delete(ctx);
                }
            };
            //note: multiple handlers of many conns for the same topic (context) are possible.
            inpage_pubsub_1.subscribe(ctx.id, handler_1);
            me_1.listenerContextMap.set(ctx, listener);
            //message to server to switch the subscription on/off
            //exact format is to be adjusted
            this.send('subscribe', { id: ctx.id, type: ctx.contextType })
                .then(function (id) { return listener.f = id; });
        }
        return listener;
    };
    Connection.prototype.addAutoProperty = function (apConfig, setter, ctx) {
        var listener = this.subscribeOnceForContext(ctx);
        var ap = {
            conn: apConfig.conn,
            name: apConfig.name,
            value: undefined,
            set: function (v) { ap.value = v; setter(v); }
        };
        listener.p.push(ap);
        return ap;
    };
    Connection.prototype.sendAndListen = function (topic, message, h, ap) {
        //Decision Choice 1: 
        // create listener first and setup the filter for given subscription id later
        var listener = this.listener("", h, ap);
        this.send(topic, message).then(function (subId) { return listener.f = subId; });
        //Decision Choice 2: 
        // create listener later as the server replies with the subscription id
        //this.send(topic, message).then(subId => this.listen(subId, h as any, ap));
        return this;
    };
    Connection.prototype.listen = function (filterOrHander, evtOrMsgOrAP, ap) {
        this.listener.call(this, arguments);
        return this;
    };
    Connection.prototype.listener = function (filterOrHander, evtOrMsgOrAP, ap) {
        var _a;
        var listener;
        if (filterOrHander === undefined) {
            listener = { f: undefined, h: undefined, p: [] };
        }
        else if (typeof filterOrHander === 'object') { //is an EventHandler
            listener = { f: undefined, h: filterOrHander, p: [] };
        }
        else if (evtOrMsgOrAP instanceof Array) {
            listener = { f: filterOrHander, h: undefined, p: evtOrMsgOrAP || [] };
        }
        else if (typeof evtOrMsgOrAP == 'function') {
            listener = { f: filterOrHander, h: (_a = {}, _a[ANY_EVENT] = evtOrMsgOrAP, _a), p: ap || [] };
        }
        else {
            listener = { f: filterOrHander, h: evtOrMsgOrAP, p: ap || [] };
        }
        this.listeners.add(listener);
        return listener;
    };
    //connection with AutoProperty support added by proxy
    Connection.create = function (_bus, eventsDef) {
        return new Proxy(new Connection(_bus, eventsDef), {
            //ToDo: this is an old code. verify Autoproperty creation 
            get: function (target, prop, receiver) {
                return prop in target ? target[prop] : {
                    conn: target,
                    name: prop,
                };
            }
        });
    };
    Connection.prototype.topicMatch = function (topic, pattern) {
        if (!pattern || pattern == topic)
            return true;
        else if (!topic)
            return false;
        var expected = pattern.split('.');
        var actual = topic.split('.');
        if (expected.length > actual.length)
            return false;
        for (var i = 0; i < actual.length; ++i) {
            if (actual[i] != expected[i] && expected[i] != "*")
                return false;
        }
        return true;
    };
    Connection.prototype.onMessage = function (op, msg) {
        var e_1, _a;
        var _this = this;
        try {
            var isTopicMatch_1 = function (op, msg, f) {
                return typeof f === 'string' ? _this.topicMatch(op, f) : f(op, msg);
            };
            this.listeners.forEach(function (listener) {
                var e_2, _a, e_3, _b;
                if (!listener.f || isTopicMatch_1(op, msg, listener.f)) {
                    if (listener.h) {
                        try {
                            for (var _c = __values(__spread(Object.keys(listener.h), [ANY_EVENT])), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var eventId = _d.value;
                                var cond = _this.eventDef ? _this.eventDef[eventId] : eventId;
                                //ToDo: extract msg.type default
                                if ((typeof cond === 'function' ? cond(op, msg) : msg.type == cond) || eventId === ANY_EVENT) {
                                    var handlers = listener.h[eventId];
                                    if (Array.isArray(handlers)) {
                                        handlers.forEach(function (h) { return h(op, msg); });
                                    }
                                    else {
                                        handlers(op, msg);
                                    }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                    try {
                        //push values to autoProperties
                        for (var _e = __values(listener.p || []), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var ap = _f.value;
                            ap && msg[ap.name] !== undefined && ap.set(msg[ap.name]);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            });
            try {
                // ToDo: is it necessary?
                //push values to autoProperties
                for (var _b = __values(this.autoProperties.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ap = _c.value;
                    ap && msg[ap.name] && ap.set(msg[ap.name]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        catch (err) {
            console.error(err);
        }
    };
    return Connection;
}());
exports.Connection = Connection;


/***/ }),

/***/ "./src/inpage/core.ts":
/*!****************************!*\
  !*** ./src/inpage/core.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chrome_extension_message_wrapper_1 = __webpack_require__(/*! chrome-extension-message-wrapper */ "./node_modules/chrome-extension-message-wrapper/index.js");
var extension = __webpack_require__(/*! extensionizer */ "./node_modules/extensionizer/index.js");
var GlobalEventBus = __webpack_require__(/*! ./globalEventBus */ "./src/inpage/globalEventBus.ts");
var overlay_1 = __webpack_require__(/*! ./overlay */ "./src/inpage/overlay.ts");
var swiper_1 = __webpack_require__(/*! ./swiper */ "./src/inpage/swiper.ts");
var connection_1 = __webpack_require__(/*! ./connection */ "./src/inpage/connection.ts");
var wsJsonRpc_1 = __webpack_require__(/*! ./wsJsonRpc */ "./src/inpage/wsJsonRpc.ts");
var overlayManager_1 = __webpack_require__(/*! ./overlayManager */ "./src/inpage/overlayManager.ts");
var Core = /** @class */ (function () {
    function Core() {
        var _this = this;
        this.overlayManager = new overlayManager_1.OverlayManager();
        this._popupOverlay = null;
        this.publish = function (topic, data) { return GlobalEventBus.publish(topic, data); };
        this.subscribe = function (topic, func) { return GlobalEventBus.subscribe(topic, func); };
        extension.runtime.onMessage.addListener(function (message, sender, sendResponse) {
            if (typeof message === 'string') {
                if (message === "OPEN_PAIRING_OVERLAY") {
                    _this.waitPairingOverlay().finally(function () { return sendResponse(); });
                }
                else if (message === "TOGGLE_OVERLAY") {
                    _this._togglePopupOverlay();
                    sendResponse();
                }
            }
            else if (typeof message === 'object' && message.type !== undefined) {
                if (message.type === 'OPEN_DEPLOY_OVERLAY') {
                    _this.waitDeployOverlay(message.payload).finally(function () { return sendResponse(); });
                }
            }
        });
        var swiper = new swiper_1.Swiper(document.body);
        swiper.on("left", function () {
            if (_this._popupOverlay == null) {
                _this._togglePopupOverlay();
            }
            else {
                _this._popupOverlay.open();
            }
        });
        swiper.on("right", function () {
            _this.overlayManager.close();
        });
    }
    Core.prototype.waitPairingOverlay = function () {
        var _this = this;
        var me = this;
        return new Promise(function (resolve, reject) {
            var pairingUrl = extension.extension.getURL('pairing.html');
            var overlay = new overlay_1.Overlay(_this.overlayManager, pairingUrl, 'Wallet');
            overlay.open();
            // ToDo: add timeout?
            overlay.onmessage = function (topic, message) {
                if (topic === 'ready') {
                    overlay.close();
                    resolve();
                }
                if (topic === 'error') {
                    reject();
                }
            };
        });
    };
    Core.prototype.waitDeployOverlay = function (payload) {
        var _this = this;
        var me = this;
        return new Promise(function (resolve, reject) {
            var pairingUrl = extension.extension.getURL('deploy.html');
            var overlay = new overlay_1.Overlay(_this.overlayManager, pairingUrl, 'Deploy');
            overlay.open(function () { return overlay.send('data', [payload]); });
            // ToDo: add timeout?
            overlay.onmessage = function (topic, message) {
                if (topic === 'ready') {
                    overlay.close();
                    resolve();
                }
                if (topic === 'error') {
                    reject();
                }
            };
        });
    };
    Core.prototype._togglePopupOverlay = function () {
        var _a;
        if (!((_a = this._popupOverlay) === null || _a === void 0 ? void 0 : _a.registered)) {
            var pairingUrl = extension.extension.getURL('popup.html');
            this._popupOverlay = new overlay_1.Overlay(this.overlayManager, pairingUrl, 'Dapplets');
            this._popupOverlay.open();
        }
        else {
            this.overlayManager.toggle();
        }
    };
    Core.prototype._sendWalletConnectTx = function (dappletId, metadata, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var backgroundFunctions, loadDapplet, loadDappletFrames, transactionCreated, transactionRejected, checkConnection, getGlobalConfig, sendLegacyTransaction, isConnected, me, dappletResult, walletInfo, waitApproving;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chrome_extension_message_wrapper_1.initBGFunctions(extension)];
                    case 1:
                        backgroundFunctions = _a.sent();
                        loadDapplet = backgroundFunctions.loadDapplet, loadDappletFrames = backgroundFunctions.loadDappletFrames, transactionCreated = backgroundFunctions.transactionCreated, transactionRejected = backgroundFunctions.transactionRejected, checkConnection = backgroundFunctions.checkConnection, getGlobalConfig = backgroundFunctions.getGlobalConfig, sendLegacyTransaction = backgroundFunctions.sendLegacyTransaction;
                        return [4 /*yield*/, checkConnection()];
                    case 2:
                        isConnected = _a.sent();
                        me = this;
                        if (!!isConnected) return [3 /*break*/, 4];
                        callback({ type: "PAIRING" });
                        return [4 /*yield*/, this.waitPairingOverlay()];
                    case 3:
                        _a.sent();
                        callback({ type: "PAIRED" });
                        _a.label = 4;
                    case 4:
                        callback({ type: "PENDING" });
                        dappletResult = null;
                        return [4 /*yield*/, getGlobalConfig()];
                    case 5:
                        walletInfo = (_a.sent()).walletInfo;
                        if (!(walletInfo.protocolVersion === "0.2.0")) return [3 /*break*/, 7];
                        console.log("Wallet is Dapplet Frames compatible. Sending Dapplet Frames transaction...");
                        return [4 /*yield*/, loadDappletFrames(dappletId, metadata)];
                    case 6:
                        dappletResult = _a.sent();
                        return [3 /*break*/, 12];
                    case 7:
                        if (!(walletInfo.protocolVersion === "0.1.0")) return [3 /*break*/, 9];
                        console.log("Wallet is Dapplet compatible. Sending Dapplet transaction...");
                        return [4 /*yield*/, loadDapplet(dappletId, metadata)];
                    case 8:
                        dappletResult = _a.sent();
                        return [3 /*break*/, 12];
                    case 9:
                        console.log("Wallet is Dapplet incompatible. Showing dapplet view...");
                        waitApproving = function () {
                            return new Promise(function (resolve, reject) {
                                var pairingUrl = extension.extension.getURL('dapplet.html');
                                var overlay = new overlay_1.Overlay(me.overlayManager, pairingUrl, 'Dapplet');
                                // ToDo: implement multiframe
                                overlay.open(function () { return overlay.send('txmeta', [dappletId, metadata]); });
                                // ToDo: add timeout?
                                overlay.onMessage(function (topic, message) {
                                    if (topic === 'approved') {
                                        resolve();
                                        overlay.close();
                                    }
                                    if (topic === 'error') {
                                        reject();
                                        overlay.close();
                                    }
                                });
                            });
                        };
                        return [4 /*yield*/, waitApproving()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, sendLegacyTransaction(dappletId, metadata)];
                    case 11:
                        dappletResult = _a.sent();
                        _a.label = 12;
                    case 12:
                        if (dappletResult) {
                            transactionCreated(dappletResult);
                            callback({ type: "CREATED", data: dappletResult });
                        }
                        else {
                            transactionRejected();
                            callback({ type: "REJECTED" });
                        }
                        return [2 /*return*/, dappletResult];
                }
            });
        });
    };
    Core.prototype.connect = function (cfg, eventDef) {
        var rpc = new wsJsonRpc_1.WsJsonRpc(cfg.url);
        var conn = connection_1.Connection.create(rpc, eventDef);
        return conn;
    };
    Core.prototype.wallet = function (cfg, eventDef) {
        var me = this;
        var transport = {
            _txCount: 0,
            _handler: null,
            exec: function (dappletId, ctx) {
                var id = ++transport._txCount;
                me._sendWalletConnectTx(dappletId, ctx, function (e) { return transport._handler(id, e); });
                return new Promise(function (resolve, reject) { return resolve(id); });
            },
            onMessage: function (handler) {
                transport._handler = handler;
                return {
                    off: function () { return transport._handler = null; }
                };
            }
        };
        var conn = connection_1.Connection.create(transport, eventDef);
        return conn;
    };
    Core.prototype.overlay = function (cfg, eventDef) {
        var _overlay = new overlay_1.Overlay(this.overlayManager, cfg.url, cfg.title);
        var conn = connection_1.Connection.create(_overlay, eventDef);
        return conn;
    };
    // ToDo: remove it or implement!
    Core.prototype.contextStarted = function (contextIds, parentContext) { };
    Core.prototype.contextFinished = function (contextIds, parentContext) { };
    return Core;
}());
exports.default = Core;


/***/ }),

/***/ "./src/inpage/globalEventBus.ts":
/*!**************************************!*\
  !*** ./src/inpage/globalEventBus.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extension = __webpack_require__(/*! extensionizer */ "./node_modules/extensionizer/index.js");
function publish(topic, data) {
    extension.runtime.sendMessage({ type: "EVENTBUS_PUBLISH", payload: { topic: topic, data: data } });
}
exports.publish = publish;
function subscribe(topic, func) {
    extension.runtime.onMessage.addListener(function (_a) {
        var topic = _a.topic, data = _a.data;
        return func(topic, data);
    });
    extension.runtime.sendMessage({ type: "EVENTBUS_SUBSCRIBE", payload: { topic: topic } });
}
exports.subscribe = subscribe;


/***/ }),

/***/ "./src/inpage/index.ts":
/*!*****************************!*\
  !*** ./src/inpage/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var injector_1 = __webpack_require__(/*! ./injector */ "./src/inpage/injector.ts");
var core_1 = __webpack_require__(/*! ./core */ "./src/inpage/core.ts");
var extension = __webpack_require__(/*! extensionizer */ "./node_modules/extensionizer/index.js");
var observer = new MutationObserver(function () {
    if (document.body) {
        var core = new core_1.default(); // ToDo: is it global for all modules?
        var injector_2 = new injector_1.Injector(core);
        extension.runtime.onMessage.addListener(function (message, sender, sendResponse) { return __awaiter(void 0, void 0, void 0, function () {
            var feature, feature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!message || !message.type)
                            return [2 /*return*/];
                        if (!(message.type === "FEATURE_ACTIVATED")) return [3 /*break*/, 2];
                        feature = message.payload;
                        console.log("The feature " + feature.name + "#" + feature.branch + "@" + feature.version + " was activated.");
                        return [4 /*yield*/, injector_2.loadModules([feature])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(message.type === "FEATURE_DEACTIVATED")) return [3 /*break*/, 4];
                        feature = message.payload;
                        console.log("The feature " + feature.name + "#" + feature.branch + "@" + feature.version + " was deactivated.");
                        return [4 /*yield*/, injector_2.unloadModules([feature])];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (message.type === "CURRENT_CONTEXT_IDS") {
                            sendResponse(injector_2.availableContextIds);
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        observer.disconnect();
    }
});
observer.observe(document.documentElement, { childList: true });


/***/ }),

/***/ "./src/inpage/injector.ts":
/*!********************************!*\
  !*** ./src/inpage/injector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var chrome_extension_message_wrapper_1 = __webpack_require__(/*! chrome-extension-message-wrapper */ "./node_modules/chrome-extension-message-wrapper/index.js");
var semver_1 = __webpack_require__(/*! semver */ "./node_modules/semver/semver.js");
var overlay_1 = __webpack_require__(/*! ./overlay */ "./src/inpage/overlay.ts");
var constants_1 = __webpack_require__(/*! ../common/constants */ "./src/common/constants.ts");
var extension = __webpack_require__(/*! extensionizer */ "./node_modules/extensionizer/index.js");
var Injector = /** @class */ (function () {
    function Injector(core) {
        this.core = core;
        this.availableContextIds = [];
        this.registry = [];
        this._setContextActivivty([window.location.hostname], undefined, true);
        window.exports = {}; // for CommonJS modules compatibility
    }
    Injector.prototype.loadModules = function (modules) {
        return __awaiter(this, void 0, void 0, function () {
            var getModulesWithDeps, loadedModules, orderedModules, i, m, i, feature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!modules || !modules.length)
                            return [2 /*return*/];
                        return [4 /*yield*/, chrome_extension_message_wrapper_1.initBGFunctions(extension)];
                    case 1:
                        getModulesWithDeps = (_a.sent()).getModulesWithDeps;
                        return [4 /*yield*/, getModulesWithDeps(modules)];
                    case 2:
                        loadedModules = _a.sent();
                        orderedModules = loadedModules.map(function (l) {
                            var _a, _b;
                            var m = modules.find(function (m) { return m.name === l.manifest.name &&
                                m.branch === l.manifest.branch &&
                                m.version === l.manifest.version; });
                            return (__assign(__assign({}, l), { order: (_a = m) === null || _a === void 0 ? void 0 : _a.order, contextIds: ((_b = m) === null || _b === void 0 ? void 0 : _b.contextIds) || [window.location.hostname] }));
                        });
                        return [4 /*yield*/, this._processModules(orderedModules)];
                    case 3:
                        _a.sent();
                        // module initialization
                        for (i = 0; i < this.registry.length; i++) {
                            if (this.registry[i].instance)
                                continue;
                            this.registry[i].instance = new this.registry[i].clazz();
                            m = this.registry[i];
                            console.log("The module " + m.manifest.name + "#" + m.manifest.branch + "@" + m.manifest.version + " was loaded.");
                        }
                        // feature attaching
                        for (i = 0; i < this.registry.length; i++) {
                            if (this.registry[i].manifest.type === "FEATURE" /* Feature */) {
                                feature = this.registry[i].instance;
                                feature.orderIndex = this.registry[i].order;
                                // ToDo: fix context ids adding
                                feature.contextIds = this.registry[i].contextIds.map(function (id) {
                                    var _a = __read(id.split('/')), headContextId = _a[0], tailContextId = _a.slice(1); // ToDo: check head?
                                    return tailContextId.join('/');
                                }).filter(function (id) { return !!id; });
                                feature.activate();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Injector.prototype.unloadModules = function (modules) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                modules.map(function (m) { return _this.registry.find(function (r) {
                    return m.name === r.manifest.name &&
                        m.branch === r.manifest.branch &&
                        m.version === r.manifest.version;
                }); }).forEach(function (m) {
                    if (!m)
                        return;
                    m.instance.deactivate();
                    console.log("The module " + m.manifest.name + "#" + m.manifest.branch + "@" + m.manifest.version + " was unloaded.");
                    _this.registry = _this.registry.filter(function (r) { return r !== m; });
                });
                return [2 /*return*/];
            });
        });
    };
    Injector.prototype._processModules = function (modules) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, optimizeDependency, getModulesWithDeps, addEvent, core, _loop_1, this_1, modules_1, modules_1_1, _b, manifest, script, order, contextIds, e_1_1;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, chrome_extension_message_wrapper_1.initBGFunctions(extension)];
                    case 1:
                        _a = _d.sent(), optimizeDependency = _a.optimizeDependency, getModulesWithDeps = _a.getModulesWithDeps, addEvent = _a.addEvent;
                        core = this.core;
                        _loop_1 = function (manifest, script, order, contextIds) {
                            var registeredModule, coreWrapper, execScript, branch_1, injectDecorator, injectableDecorator, optimizedBranch, missingDependencies, injectableDecorator, injectDecorator;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        registeredModule = this_1.registry.find(function (m) { return m.manifest.name == manifest.name && m.manifest.branch == manifest.branch && m.manifest.version == manifest.version; });
                                        if (registeredModule) {
                                            if (contextIds) {
                                                if (registeredModule.contextIds) {
                                                    (_a = registeredModule.contextIds).push.apply(_a, __spread(contextIds));
                                                }
                                                else {
                                                    registeredModule.contextIds = __spread(contextIds);
                                                }
                                            }
                                            return [2 /*return*/, "continue"];
                                        }
                                        coreWrapper = {
                                            overlayManager: core.overlayManager,
                                            publish: core.publish,
                                            subscribe: core.subscribe,
                                            waitPairingOverlay: core.waitPairingOverlay,
                                            contextStarted: function (contextIds, parentContext) { return _this._setContextActivivty(contextIds, window.location.hostname + (parentContext ? "/" + parentContext : ""), true); },
                                            contextFinished: function (contextIds, parentContext) { return _this._setContextActivivty(contextIds, window.location.hostname + (parentContext ? "/" + parentContext : ""), false); },
                                            connect: core.connect.bind(core),
                                            overlay: core.overlay.bind(core),
                                            wallet: core.wallet.bind(core)
                                        };
                                        execScript = new Function('Core', 'SubscribeOptions', 'Inject', 'Injectable', script);
                                        if (!(manifest.type == "RESOLVER" /* Resolver */)) return [3 /*break*/, 4];
                                        branch_1 = null;
                                        injectDecorator = function () { };
                                        injectableDecorator = function (constructor) {
                                            var resolver = new constructor();
                                            branch_1 = resolver.getBranch();
                                        };
                                        // ToDo: do not exec resolver twice (when second feature is activated)
                                        execScript(coreWrapper, overlay_1.SubscribeOptions, injectDecorator, injectableDecorator);
                                        addEvent('Branch resolving', "Resolver of \"" + manifest.name + "\" defined the \"" + branch_1 + "\" branch");
                                        return [4 /*yield*/, optimizeDependency(manifest.name, branch_1, manifest.version)];
                                    case 1:
                                        optimizedBranch = _b.sent();
                                        return [4 /*yield*/, getModulesWithDeps([optimizedBranch])];
                                    case 2:
                                        missingDependencies = _b.sent();
                                        return [4 /*yield*/, this_1._processModules(missingDependencies)];
                                    case 3:
                                        _b.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        injectableDecorator = function (constructor) {
                                            if (!_this.registry.find(function (m) { return m.manifest.name == manifest.name && m.manifest.branch == manifest.branch && m.manifest.version == manifest.version; })) {
                                                _this.registry.push({
                                                    manifest: manifest,
                                                    clazz: constructor,
                                                    instance: null,
                                                    order: order,
                                                    contextIds: contextIds
                                                });
                                            }
                                        };
                                        injectDecorator = function (name) { return function (target, propertyKey, descriptor) {
                                            descriptor = descriptor || {};
                                            descriptor.get = function () {
                                                // ToDo: Fix error "TypeError: Cannot read property 'instance' of undefined"
                                                var versions = _this.registry.filter(function (m) { return m.manifest.name == name; }).map(function (m) { return m.manifest.version; });
                                                var dependency = manifest.dependencies[name];
                                                // ToDo: check `dependency` for undefined
                                                // ToDo: Should be moved to the background? 
                                                // ToDo: Fetch prefix from global settings.
                                                // ToDo: Replace '>=' to '^'
                                                var prefix = '>='; // https://devhints.io/semver
                                                var range = prefix + (typeof dependency === "string" ? dependency : dependency[constants_1.DEFAULT_BRANCH_NAME]);
                                                var maxVer = semver_1.maxSatisfying(versions, range);
                                                return _this.registry.find(function (m) { return m.manifest.name == name && m.manifest.version == maxVer; }).instance;
                                            };
                                            return descriptor;
                                        }; };
                                        execScript(coreWrapper, overlay_1.SubscribeOptions, injectDecorator, injectableDecorator);
                                        _b.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        modules_1 = __values(modules), modules_1_1 = modules_1.next();
                        _d.label = 3;
                    case 3:
                        if (!!modules_1_1.done) return [3 /*break*/, 6];
                        _b = modules_1_1.value, manifest = _b.manifest, script = _b.script, order = _b.order, contextIds = _b.contextIds;
                        return [5 /*yield**/, _loop_1(manifest, script, order, contextIds)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        modules_1_1 = modules_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (modules_1_1 && !modules_1_1.done && (_c = modules_1.return)) _c.call(modules_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Injector.prototype._setContextActivivty = function (contextIds, parentContext, isActive) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                contextIds = parentContext ? contextIds.map(function (_a) {
                    var id = _a.id;
                    return parentContext + '/' + id;
                }) : contextIds;
                if (isActive) {
                    contextIds.forEach(function (id) {
                        if (_this.availableContextIds.indexOf(id) === -1) {
                            _this.availableContextIds.push(id);
                        }
                    });
                }
                else {
                    contextIds.forEach(function (id) {
                        var index = _this.availableContextIds.indexOf(id);
                        if (index > -1)
                            _this.availableContextIds.splice(index, 1);
                    });
                }
                extension.runtime.sendMessage({
                    type: isActive ? "CONTEXT_STARTED" : "CONTEXT_FINISHED",
                    payload: { contextIds: contextIds }
                });
                return [2 /*return*/];
            });
        });
    };
    return Injector;
}());
exports.Injector = Injector;


/***/ }),

/***/ "./src/inpage/inpage-pubsub.ts":
/*!*************************************!*\
  !*** ./src/inpage/inpage-pubsub.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function publish(name, data) {
    var e = new Event(name);
    e.data = data;
    dispatchEvent(e);
}
exports.publish = publish;
function subscribe(name, handler) {
    addEventListener(name, handler);
}
exports.subscribe = subscribe;
function unsubscribe(name, handler) {
    removeEventListener(name, handler);
}
exports.unsubscribe = unsubscribe;


/***/ }),

/***/ "./src/inpage/overlay.ts":
/*!*******************************!*\
  !*** ./src/inpage/overlay.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SubscribeOptions;
(function (SubscribeOptions) {
    SubscribeOptions[SubscribeOptions["SINGLE_THREAD"] = 0] = "SINGLE_THREAD";
    SubscribeOptions[SubscribeOptions["MULTI_THREAD"] = 1] = "MULTI_THREAD";
})(SubscribeOptions = exports.SubscribeOptions || (exports.SubscribeOptions = {}));
var Overlay = /** @class */ (function () {
    function Overlay(manager, uri, title) {
        var _this = this;
        this.title = title;
        this._manager = null;
        this._queue = [];
        this._isFrameLoaded = false;
        this._msgCount = 0;
        this.frame = null;
        this.registered = false;
        this.onmessage = null;
        this._manager = manager;
        this.frame = document.createElement('iframe');
        this.frame.src = uri;
        this.frame.allowFullscreen = true;
        this.frame.addEventListener('load', function () {
            //setTimeout(() => {
            _this._isFrameLoaded = true;
            _this._queue.forEach(function (msg) { return _this._send(msg); });
            _this._queue = [];
            //}, 1000);
        });
    }
    /**
     * Opens tab. If it doesn't exist, then adds tab to the panel.
     */
    Overlay.prototype.open = function (callback) {
        var _this = this;
        this._manager.register(this);
        this._manager.activate(this);
        this._manager.open();
        if (!callback || typeof callback !== 'function')
            return;
        if (this._isFrameLoaded) {
            callback.apply({});
        }
        else {
            var loadHandler_1 = function () {
                callback.apply({});
                _this.frame.removeEventListener('load', loadHandler_1);
            };
            this.frame.addEventListener('load', loadHandler_1);
        }
    };
    /**
     * Removes tab from the panel.
     */
    Overlay.prototype.close = function () {
        this._manager.unregister(this);
    };
    Overlay.prototype.send = function (topic, message) {
        var msg = JSON.stringify({ topic: topic, args: message }); // ToDo: fix args
        this.frame.contentWindow.postMessage(msg, '*');
    };
    Overlay.prototype._send = function (data) {
        if (!this._isFrameLoaded) {
            this._queue.push(data);
            this.open();
        }
        else {
            this.frame.contentWindow.postMessage(data, '*');
        }
    };
    Overlay.prototype.exec = function (topic, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = ++_this._msgCount;
            var data = JSON.stringify({
                id: id,
                topic: topic,
                message: message
            });
            _this._send(data);
            var listener = function (e) {
                if (e.source != _this.frame.contentWindow)
                    return; // Listen messages from only our frame
                if (!e.data)
                    return;
                var data = JSON.parse(e.data);
                if (!data.topic && data.id === id) {
                    window.removeEventListener('message', listener);
                    if (!data.error) {
                        resolve(data.result);
                    }
                    else {
                        reject(data.error);
                    }
                }
            };
            window.addEventListener('message', listener, false);
        });
    };
    Overlay.prototype.onMessage = function (handler) {
        var _this = this;
        var listener = function (e) {
            if (e.source != _this.frame.contentWindow)
                return; // Listen messages from only our frame
            if (!e.data)
                return;
            var _a = JSON.parse(e.data), topic = _a.topic, message = _a.message;
            if (topic !== undefined)
                handler(topic, message);
        };
        window.addEventListener('message', listener);
        return {
            off: function () { return window.removeEventListener('message', listener); }
        };
    };
    return Overlay;
}());
exports.Overlay = Overlay;


/***/ }),

/***/ "./src/inpage/overlayManager.ts":
/*!**************************************!*\
  !*** ./src/inpage/overlayManager.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// ToDo: clean class names
var TabItemClass = 'pageNav__tabItem';
var ContentItemClass = 'pageNav__contentItem';
var ActiveTabHeaderClass = 'pageNav__tabItem--active';
var ActiveTabContentClass = 'pageNav__contentItem--active';
var CollapsedOverlayClass = 'overlay-collapsed';
var HiddenOverlayClass = 'overlay-hidden';
var OverlayManager = /** @class */ (function () {
    function OverlayManager() {
        var _this = this;
        this._panel = null;
        this._tabList = null;
        this._contentList = null;
        this._activeOverlay = null;
        this._tabsRegistry = [];
        // Side panel
        var panel = document.createElement("dapplets-overlay-manager");
        panel.classList.add('overlay-frame', 'overlay-outer', CollapsedOverlayClass, HiddenOverlayClass);
        document.body.appendChild(panel);
        this._panel = panel;
        var bucketBar = document.createElement("div");
        bucketBar.classList.add('overlay-bucket-bar');
        panel.appendChild(bucketBar);
        var toolBar = document.createElement("div");
        toolBar.classList.add('overlay-toolbar');
        panel.appendChild(toolBar);
        var ul = document.createElement('ul');
        toolBar.appendChild(ul);
        var li = document.createElement('li');
        ul.appendChild(li);
        var button = document.createElement('button');
        button.title = "Toggle or Resize Sidebar";
        button.classList.add('overlay-frame-button', 'overlay-frame-button--sidebar_toggle');
        button.innerText = '⇄';
        button.onclick = function () { return _this.toggle(); };
        li.appendChild(button);
        // Tabs
        var nav = document.createElement("div");
        nav.classList.add('pageNav');
        panel.appendChild(nav);
        var tabList = document.createElement("div");
        tabList.classList.add('pageNav__tabList');
        nav.appendChild(tabList);
        this._tabList = tabList;
        var contentList = document.createElement("div");
        contentList.classList.add('pageNav__contentList');
        nav.appendChild(contentList);
        this._contentList = contentList;
    }
    /**
     * Expands the panel.
     */
    OverlayManager.prototype.open = function () {
        this._panel.classList.remove(CollapsedOverlayClass);
    };
    /**
     * Collapses the panel.
     */
    OverlayManager.prototype.close = function () {
        this._panel.classList.add(CollapsedOverlayClass);
    };
    /**
     * Shows the panel.
     */
    OverlayManager.prototype.show = function () {
        this._panel.classList.remove(HiddenOverlayClass);
    };
    /**
     * Hides the panel.
     */
    OverlayManager.prototype.hide = function () {
        this._panel.classList.add(HiddenOverlayClass);
    };
    OverlayManager.prototype.toggle = function () {
        this._panel.classList.toggle(CollapsedOverlayClass);
    };
    OverlayManager.prototype.register = function (overlay) {
        var _this = this;
        overlay.registered = true;
        if (this._tabsRegistry.filter(function (t) { return t.overlay === overlay; }).length > 0)
            return;
        var tabItem = document.createElement('div');
        tabItem.classList.add(TabItemClass);
        tabItem.innerText = overlay.title;
        tabItem.addEventListener('click', function (ev) {
            ev.cancelBubble = true;
            ev.stopPropagation();
            _this.activate(overlay);
        });
        this._tabList.appendChild(tabItem);
        var closeBtn = document.createElement('span');
        closeBtn.innerText = 'X';
        closeBtn.classList.add('tabItem__closeBtn');
        closeBtn.addEventListener('click', function (ev) {
            ev.cancelBubble = true;
            ev.stopPropagation();
            _this.unregister(overlay);
        });
        tabItem.appendChild(closeBtn);
        var contentItem = document.createElement('div');
        contentItem.classList.add(ContentItemClass);
        contentItem.appendChild(overlay.frame);
        this._contentList.appendChild(contentItem);
        this._tabsRegistry.push({ overlay: overlay, tabItem: tabItem, contentItem: contentItem });
        this.activate(overlay);
        this.show();
    };
    OverlayManager.prototype.unregister = function (overlay) {
        console.log('unregister overlay ' + overlay.title);
        overlay.registered = false;
        var tab = this._tabsRegistry.filter(function (t) { return t.overlay === overlay; })[0];
        if (!tab)
            return;
        this._tabList.removeChild(tab.tabItem);
        this._contentList.removeChild(tab.contentItem);
        this._tabsRegistry = this._tabsRegistry.filter(function (t) { return t.overlay !== overlay; });
        if (this._activeOverlay === overlay) {
            this._activeOverlay = null;
            var nextTab = this._tabsRegistry[0];
            nextTab && this.activate(nextTab.overlay);
        }
        if (this._tabsRegistry.length == 0) {
            this.hide();
        }
    };
    OverlayManager.prototype.activate = function (overlay) {
        console.log('activate overlay ' + overlay.title);
        if (this._activeOverlay == overlay)
            return;
        if (this._activeOverlay) {
            this.deactivate(this._activeOverlay);
        }
        var tab = this._tabsRegistry.filter(function (t) { return t.overlay === overlay; })[0];
        tab.tabItem.classList.toggle(ActiveTabHeaderClass, true);
        tab.contentItem.classList.toggle(ActiveTabContentClass, true);
        this._activeOverlay = overlay;
    };
    OverlayManager.prototype.deactivate = function (overlay) {
        console.log('deactivate overlay ' + overlay.title);
        var tab = this._tabsRegistry.filter(function (t) { return t.overlay === overlay; })[0];
        tab.tabItem.classList.toggle(ActiveTabHeaderClass, false);
        tab.contentItem.classList.toggle(ActiveTabContentClass, false);
    };
    return OverlayManager;
}());
exports.OverlayManager = OverlayManager;


/***/ }),

/***/ "./src/inpage/swiper.ts":
/*!******************************!*\
  !*** ./src/inpage/swiper.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swiper = /** @class */ (function () {
    function Swiper(el) {
        var _this = this;
        this._touchStartX = 0;
        this._touchStartY = 0;
        this._touchEndX = 0;
        this._touchEndY = 0;
        this._callbacks = {};
        this._config = {
            angleWidth: 0.75,
            lengthPart: 0.05,
            touches: 1
        };
        el.addEventListener('touchstart', function (event) {
            if (event.changedTouches.length != _this._config.touches)
                return;
            _this._touchStartX = event.changedTouches[0].screenX;
            _this._touchStartY = event.changedTouches[0].screenY;
        }, false);
        el.addEventListener('touchend', function (event) {
            if (event.changedTouches.length != _this._config.touches)
                return;
            _this._touchEndX = event.changedTouches[0].screenX;
            _this._touchEndY = event.changedTouches[0].screenY;
            _this._touchHandler();
        }, false);
    }
    Swiper.prototype._touchHandler = function () {
        var dX = this._touchEndX - this._touchStartX;
        var dY = this._touchEndY - this._touchStartY;
        var width = document.body.offsetWidth;
        var height = document.body.offsetHeight;
        var angle = -Math.atan2(dY, dX) * 180 / Math.PI;
        var _a = this._config, angleWidth = _a.angleWidth, lengthPart = _a.lengthPart;
        if (-45 * angleWidth < angle && angle < 45 * angleWidth && Math.abs(dX) / width > lengthPart) {
            this._fireEvent("right");
        }
        if (90 - 45 * angleWidth < angle && angle < 90 + 45 * angleWidth && Math.abs(dY) / height > lengthPart) {
            this._fireEvent("up");
        }
        if ((180 - 45 * angleWidth < angle && angle < 180 || -180 < angle && angle < -180 + 45 * angleWidth) && Math.abs(dX) / width > lengthPart) {
            this._fireEvent("left");
        }
        if (-90 - 45 * angleWidth < angle && angle < -90 + 45 * angleWidth && Math.abs(dY) / height > lengthPart) {
            this._fireEvent("down");
        }
    };
    Swiper.prototype._fireEvent = function (event) {
        var e_1, _a;
        try {
            for (var _b = __values(this._callbacks[event] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                var callback = _c.value;
                callback.apply({});
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Swiper.prototype.on = function (event, callback) {
        if (!this._callbacks[event]) {
            this._callbacks[event] = [];
        }
        this._callbacks[event].push(callback);
    };
    return Swiper;
}());
exports.Swiper = Swiper;


/***/ }),

/***/ "./src/inpage/wsJsonRpc.ts":
/*!*********************************!*\
  !*** ./src/inpage/wsJsonRpc.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WsJsonRpc = /** @class */ (function () {
    function WsJsonRpc(url) {
        this.url = url;
        this._queue = [];
        this._msgCount = 0;
        this._connect();
    }
    WsJsonRpc.prototype.exec = function (topic, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = ++_this._msgCount;
            _this._send(JSON.stringify({
                jsonrpc: "2.0",
                id: id,
                method: topic,
                params: [message]
            }));
            var listener = function (e) {
                var rpc = JSON.parse(e.data);
                if (!rpc.method && rpc.id === id) {
                    _this._ws.removeEventListener('message', listener);
                    if (!rpc.error) {
                        resolve(rpc.result);
                    }
                    else {
                        reject(rpc.error);
                    }
                }
            };
            _this._ws.addEventListener('message', listener);
        });
    };
    // ToDo: do we need this method?
    // public notify(topic: string, message: any): void {
    //     this._send(JSON.stringify({
    //         jsonrpc: "2.0", 
    //         method: topic,
    //         params: [message]
    //     }));
    // }
    WsJsonRpc.prototype.onMessage = function (handler) {
        var _this = this;
        var listener = function (e) {
            var rpc = JSON.parse(e.data);
            if (rpc.method)
                handler(rpc.method, rpc.params[0]);
        };
        this._ws.addEventListener('message', listener);
        return {
            off: function () { return _this._ws.removeEventListener('message', listener); }
        };
    };
    WsJsonRpc.prototype._connect = function () {
        var _this = this;
        this._ws = new WebSocket(this.url);
        this._ws.onopen = function () {
            _this._queue.forEach(function (msg) { return _this._ws.send(msg); });
            _this._queue = [];
        };
        this._ws.onclose = function () {
            _this._msgCount = 0;
        };
    };
    WsJsonRpc.prototype._send = function (data) {
        if (this._ws.readyState !== WebSocket.OPEN) {
            this._queue.push(data);
            if (this._ws.readyState === WebSocket.CLOSED) {
                this._connect();
            }
        }
        else {
            this._ws.send(data);
        }
    };
    return WsJsonRpc;
}());
exports.WsJsonRpc = WsJsonRpc;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tZS1leHRlbnNpb24tbWVzc2FnZS13cmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaHJvbWUtZXh0ZW5zaW9uLW1lc3NhZ2Utd3JhcHBlci9saWIvYmFja2dyb3VuZFNldHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaHJvbWUtZXh0ZW5zaW9uLW1lc3NhZ2Utd3JhcHBlci9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaHJvbWUtZXh0ZW5zaW9uLW1lc3NhZ2Utd3JhcHBlci9saWIvY29udGVudFNldHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHRlbnNpb25pemVyL2V4dGVuc2lvbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXh0ZW5zaW9uaXplci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnBhZ2UvY29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wYWdlL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucGFnZS9nbG9iYWxFdmVudEJ1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnBhZ2UvaW5qZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucGFnZS9pbnBhZ2UtcHVic3ViLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnBhZ2Uvb3ZlcmxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wYWdlL292ZXJsYXlNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnBhZ2Uvc3dpcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnBhZ2Uvd3NKc29uUnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNOOztBQUV2Qyw2QkFBNkIsNERBQWU7QUFDNUMsd0JBQXdCLHlEQUFZOzs7Ozs7Ozs7Ozs7O0FDSjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsWUFBWSxFQUFFO0FBQ2Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFzQjtBQUNoRDs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hELDBCQUEwQixvQ0FBb0M7QUFDOUQsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LENBQUM7UUFDdkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLHlCQUFLLEdBQWIsVUFBYyxJQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUE5RVksOEJBQVMiLCJmaWxlIjoiaW5wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5wYWdlL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IGJhY2tncm91bmRTZXR1cCBmcm9tIFwiLi9saWIvYmFja2dyb3VuZFNldHVwXCI7XHJcbmltcG9ydCBjb250ZW50U2V0dXAgZnJvbSBcIi4vbGliL2NvbnRlbnRTZXR1cFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHVwTWVzc2FnZUxpc3RlbmVyID0gYmFja2dyb3VuZFNldHVwO1xyXG5leHBvcnQgY29uc3QgaW5pdEJHRnVuY3Rpb25zID0gY29udGVudFNldHVwO1xyXG4iLCJpbXBvcnQge1xyXG4gIENIUk9NRV9FWFRfVE9PTEtJVCxcclxuICBJTlZPS0VfRlVOQ1RJT04sXHJcbiAgR0VUX0ZVTkNUSU9OX05BTUVTXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQSBzbWFsbCBoZWxwZXIgd2hpY2ggaXMgdXNlZCB0byBnZXQgdmFyaWFibGVzIGluIGRlZXBseSBuZXN0ZWQgb2JqZWN0cy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxyXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIHRvIHRoZSB2YXJpYWJsZSBpbnNpZGUgdGhlIG9iamVjdFxyXG4gKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGVpdGhlciBhbiBvYmplY3QsIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gdGhlIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmluZCA9IChvYmplY3QsIHBhdGgpID0+IHtcclxuICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgcmV0ID0gb2JqZWN0W3BhdGhbMF1dO1xyXG4gICAgaWYgKHR5cGVvZiByZXQgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgcmV0ID0gZmluZChyZXQsIHBhdGguc2xpY2UoMSkpO1xyXG4gICAgfSBlbHNlIGlmIChwYXRoLnNsaWNlKDEpLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqZWN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGxzIGEgZnVuY3Rpb24gZnJvbSB0aGUgYmFja2dyb3VuZCBmdW5jdGlvbnMsIGJhc2VkIG9uIHRoZSByZXF1ZXN0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gc2VuZGVyXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbmRSZXNwb25zZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYmFja2dyb3VuZEZ1bmN0aW9uc1xyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWVzc2FnZSBjaGFubmVsIHNob3VsZCBiZSBrZXB0IG9wZW4gKGFzeW5jIGZ1bmN0aW9uKSBvciBmYWxzZSBpZiBpdCBpcyBhIHN5bmMgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW52b2tlRnVuY3Rpb24gPSAocmVxLCBzZW5kZXIsIHNlbmRSZXMsIGJnRnVuY3MpID0+IHtcclxuICBpZiAoZmluZChiZ0Z1bmNzLCByZXEucGF5bG9hZC5wYXRoKSkge1xyXG4gICAgbGV0IHJldCA9IGZpbmQoYmdGdW5jcywgcmVxLnBheWxvYWQucGF0aCk7XHJcbiAgICBpZiAodHlwZW9mIHJldCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0ID0gcmV0KC4uLnJlcS5wYXlsb2FkLmFyZ3MsIHtcclxuICAgICAgICAgIHJlcXVlc3Q6IHJlcSxcclxuICAgICAgICAgIHNlbmRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNlbmRSZXMoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8gSWYgaXQgaXMgYSBwcm9taXNlIChhc3luYyBmdW5jdGlvbikga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gYnkgcmV0dXJuaW5nIHRydWUgYW5kIHNlbmQgdGhlIHJlcG9uc2UgYWZ0ZXIgcmVzb2x2aW5nLlxyXG4gICAgICBpZiAodHlwZW9mIHJldCA9PT0gXCJvYmplY3RcIiAmJiByZXQudGhlbikge1xyXG4gICAgICAgIHJldC50aGVuKHJlc3VsdCA9PiBzZW5kUmVzKHsgcmVzdWx0IH0pKVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHNlbmRSZXMoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSk7XHJcbiAgICAgICAgLy8gS2VlcCB0aGUgbXNnIGNoYW5uZWwgb3BlbiBmb3IgdGhlIGFzeW5jIHJlc3BvbnNlXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbmRSZXMoeyByZXN1bHQ6IHJldCB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZXMgdGhlIGJhY2tncm91bmQgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzdHJ1Y3R1cmUsXHJcbiAqIG9ubHkgd2l0aCBuYW1lcyBvZiB0aGUgZnVuY3Rpb25zIGluc3RlYWQgb2YgdGhlIGZ1bmN0aW9ucyB0aGVtc2VsZi5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBGdW5jdGlvbnMgaW5zaWRlIGFuIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcE5hbWVzID0gb2JqID0+XHJcbiAgT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICBsZXQgcmV0ID0ga2V5O1xyXG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICByZXQgPSBtYXBOYW1lcyhvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiByZXQgfTtcclxuICB9LCB7fSk7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgbWVzc2FnZSBsaXN0ZW5lci5cclxuICogVGhpcyBzaG91bGQgYmUgcGFzc2VuZCBpbiBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXJcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGJnRnVuY3MgRnVuY3Rpb25zIHdoaWNoIHNob3VsZCBiZSBhdmFpbGFibGUgdG8gdGhlIGNvbnRlbnQvcG9wdXAgc2NyaXB0c1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHRvIGNvbmZpZ3VyZSBsb2dnaW5nLCBjdXN0b20gbWVzc2FnZSBoYW5kbGluZyBldGMuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gbGlzdGVuZXIgd2hpY2ggdGFrZXMgUmVxdWVzdCwgU2VuZGVyIGFuZCBTZW5kUmVzcG9uc2VcclxuICovXHJcbmNvbnN0IHNldHVwTWVzc2FnZUxpc3RlbmVyID0gKGJnRnVuY3MgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiAoXHJcbiAgcmVxLFxyXG4gIHNlbmRlcixcclxuICBzZW5kUmVzXHJcbikgPT4ge1xyXG4gIGlmIChyZXEuaGFuZGxlciA9PT0gQ0hST01FX0VYVF9UT09MS0lUKSB7XHJcbiAgICBzd2l0Y2ggKHJlcS50eXBlKSB7XHJcbiAgICAgIGNhc2UgR0VUX0ZVTkNUSU9OX05BTUVTOlxyXG4gICAgICAgIHNlbmRSZXMoeyBcclxuICAgICAgICAgIHJlc3VsdDogbWFwTmFtZXMoYmdGdW5jcylcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGNhc2UgSU5WT0tFX0ZVTkNUSU9OOlxyXG4gICAgICAgIG9wdGlvbnMudmVyYm9zZSAmJlxyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIChvcHRpb25zLmxvZ1JlcXVlc3QgJiYgb3B0aW9ucy5sb2dSZXF1ZXN0KHJlcSkpIHx8XHJcbiAgICAgICAgICAgICAgYEdvdCByZXF1ZXN0IHRvIGNhbGwgYSBmdW5jdGlvbjogJHtyZXF9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gaW52b2tlRnVuY3Rpb24ocmVxLCBzZW5kZXIsIHNlbmRSZXMsIGJnRnVuY3MpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKG9wdGlvbnMuY3VzdG9tSGFuZGxlcikge1xyXG4gICAgb3B0aW9ucy5jdXN0b21IYW5kbGVyKHJlcSwgc2VuZGVyLCBzZW5kUmVzKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldHVwTWVzc2FnZUxpc3RlbmVyO1xyXG4iLCJleHBvcnQgY29uc3QgQ0hST01FX0VYVF9UT09MS0lUID0gXCJfX0NIUk9NRV9FWFRFTlNJT05fVE9PTEtJVF9fXCI7XHJcbmV4cG9ydCBjb25zdCBJTlZPS0VfRlVOQ1RJT04gPSBcIl9fSU5WT0tFX0ZVTkNUSU9OX19cIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GVU5DVElPTl9OQU1FUyA9IFwiX19HRVRfRlVOQ1RJT05fTkFNRVNcIjtcclxuIiwiaW1wb3J0IHtcclxuICBDSFJPTUVfRVhUX1RPT0xLSVQsXHJcbiAgSU5WT0tFX0ZVTkNUSU9OLFxyXG4gIEdFVF9GVU5DVElPTl9OQU1FU1xyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaHJvbWVcclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBzZW5kTWVzc2FnZShtc2cpIC0+IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFrZVNlbmRNZXNzYWdlID0gY2hyb21lID0+IG1zZyA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnLCByZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgIHJlaihyZXNwb25zZS5lcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzKHJlc3BvbnNlLnJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbmRNZXNzYWdlXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gY3JlYXRlRnVuY3Rpb24ocGF0aCkgLT4gc2VuZE1lc3NhZ2UoLi4uKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1ha2VDcmVhdGVGdW5jdGlvbiA9IHNlbmRNZXNzYWdlID0+IHBhdGggPT4gKC4uLmFyZ3MpID0+XHJcbiAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgaGFuZGxlcjogQ0hST01FX0VYVF9UT09MS0lULFxyXG4gICAgdHlwZTogSU5WT0tFX0ZVTkNUSU9OLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICBwYXRoLFxyXG4gICAgICBhcmdzXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4vKipcclxuICogTWFwcyBvdmVyIHRoZSBiYWNrZ3JvdW5kIGZ1bmN0aW9uIG5hbWVzIGFuZCBjcmVhdGVzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBzZW5kIHRoZSBhcmd1bWVudHMgYW5kIHBhdGggdG8gdGhlIGJhY2tncm91bmQgc2NyaXB0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjcmVhdGVGdW5jdGlvblxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCBvZiBiYWNrZ3JvdW5kIGZ1bmN0aW9uIG5hbWVzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcclxuICogQHJldHVybnMge09iamVjdH0gb2JqIE9iamVjdCBvZiBmdW5jdGlvbnNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGRFbnRyeSA9IChjcmVhdGVGdW5jdGlvbiwgb2JqLCBwYXRoID0gW10pID0+XHJcbiAgT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICBsZXQgcmV0O1xyXG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICByZXQgPSBhZGRFbnRyeShjcmVhdGVGdW5jdGlvbiwgb2JqW2tleV0sIFsuLi5wYXRoLCBrZXldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldCA9IGNyZWF0ZUZ1bmN0aW9uKFsuLi5wYXRoLCBrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IHJldCB9O1xyXG4gIH0sIHt9KTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIHRoZSBmdW5jdGlvbnMgZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGNocm9tZVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSB3aXRoIHRoZSBiYWNrZ3JvdW5kIGZ1bmN0aW9ucyBhcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzdHJ1Y3R1cmUgYW5kIG5hbWVzIHdoaWNoIHdlcmUgZGVmaW5lZCBpbiBzZXR1cE1lc3NhZ2VMaXN0ZW5lclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldHVwQmFja2dyb3VuZEZ1bmN0aW9ucyA9IGNocm9tZSA9PiB7XHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBtYWtlU2VuZE1lc3NhZ2UoY2hyb21lKTtcclxuICBjb25zdCBjcmVhdGVGdW5jdGlvbiA9IG1ha2VDcmVhdGVGdW5jdGlvbihzZW5kTWVzc2FnZSk7XHJcbiAgcmV0dXJuIHNlbmRNZXNzYWdlKHtcclxuICAgIGhhbmRsZXI6IENIUk9NRV9FWFRfVE9PTEtJVCxcclxuICAgIHR5cGU6IEdFVF9GVU5DVElPTl9OQU1FU1xyXG4gIH0pLnRoZW4oYmdGdW5jcyA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZW5kOiBzZW5kTWVzc2FnZSxcclxuICAgICAgLi4uYWRkRW50cnkoY3JlYXRlRnVuY3Rpb24sIGJnRnVuY3MpXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dXBCYWNrZ3JvdW5kRnVuY3Rpb25zO1xyXG4iLCJjb25zdCBhcGlzID0gW1xuICAnYWxhcm1zJyxcbiAgJ2Jvb2ttYXJrcycsXG4gICdicm93c2VyQWN0aW9uJyxcbiAgJ2NvbW1hbmRzJyxcbiAgJ2NvbnRleHRNZW51cycsXG4gICdjb29raWVzJyxcbiAgJ2Rvd25sb2FkcycsXG4gICdldmVudHMnLFxuICAnZXh0ZW5zaW9uJyxcbiAgJ2V4dGVuc2lvblR5cGVzJyxcbiAgJ2hpc3RvcnknLFxuICAnaTE4bicsXG4gICdpZGxlJyxcbiAgJ25vdGlmaWNhdGlvbnMnLFxuICAncGFnZUFjdGlvbicsXG4gICdydW50aW1lJyxcbiAgJ3N0b3JhZ2UnLFxuICAndGFicycsXG4gICd3ZWJOYXZpZ2F0aW9uJyxcbiAgJ3dlYlJlcXVlc3QnLFxuICAnd2luZG93cycsXG5dXG5cbmNvbnN0IGhhc0Nocm9tZSA9IHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnXG5jb25zdCBoYXNXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuY29uc3QgaGFzQnJvd3NlciA9IHR5cGVvZiBicm93c2VyICE9PSAndW5kZWZpbmVkJ1xuXG5mdW5jdGlvbiBFeHRlbnNpb24gKCkge1xuICBjb25zdCBfdGhpcyA9IHRoaXNcblxuICBhcGlzLmZvckVhY2goZnVuY3Rpb24gKGFwaSkge1xuXG4gICAgX3RoaXNbYXBpXSA9IG51bGxcblxuICAgIGlmIChoYXNDaHJvbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChjaHJvbWVbYXBpXSkge1xuICAgICAgICAgIF90aGlzW2FwaV0gPSBjaHJvbWVbYXBpXVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1dpbmRvdykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHdpbmRvd1thcGldKSB7XG4gICAgICAgICAgX3RoaXNbYXBpXSA9IHdpbmRvd1thcGldXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzQnJvd3Nlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGJyb3dzZXJbYXBpXSkge1xuICAgICAgICAgIF90aGlzW2FwaV0gPSBicm93c2VyW2FwaV1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgX3RoaXMuYXBpID0gYnJvd3Nlci5leHRlbnNpb25bYXBpXVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBpZiAoaGFzQnJvd3Nlcikge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYnJvd3NlciAmJiBicm93c2VyLnJ1bnRpbWUpIHtcbiAgICAgICAgdGhpcy5ydW50aW1lID0gYnJvd3Nlci5ydW50aW1lXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAoYnJvd3NlciAmJiBicm93c2VyLmJyb3dzZXJBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5icm93c2VyQWN0aW9uID0gYnJvd3Nlci5icm93c2VyQWN0aW9uXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5zaW9uXG4iLCIvKiBFeHRlbnNpb24uanNcbiAqXG4gKiBBIG1vZHVsZSBmb3IgdW5pZnlpbmcgYnJvd3NlciBkaWZmZXJlbmNlcyBpbiB0aGUgV2ViRXh0ZW5zaW9uIEFQSS5cbiAqXG4gKiBJbml0aWFsbHkgaW1wbGVtZW50ZWQgYmVjYXVzZSBDaHJvbWUgaGlkZXMgYWxsIG9mIHRoZWlyIFdlYkV4dGVuc2lvbiBBUElcbiAqIGJlaGluZCBhIGdsb2JhbCBgY2hyb21lYCB2YXJpYWJsZSwgYnV0IHdlJ2QgbGlrZSB0byBzdGFydCBncm9vbWluZ1xuICogdGhlIGNvZGUtYmFzZSBmb3IgY3Jvc3MtYnJvd3NlciBleHRlbnNpb24gc3VwcG9ydC5cbiAqXG4gKiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgV2ViRXh0ZW5zaW9uIEFQSSBoZXJlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvQWRkLW9ucy9XZWJFeHRlbnNpb25zXG4gKi9cblxuY29uc3QgRXh0ZW5zaW9uID0gcmVxdWlyZSgnLi9leHRlbnNpb24taW5zdGFuY2UnKVxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRXh0ZW5zaW9uKClcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBTZW1WZXJcblxudmFyIGRlYnVnXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICAgIHByb2Nlc3MuZW52ICYmXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyAmJlxuICAgIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpKSB7XG4gIGRlYnVnID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgIGFyZ3MudW5zaGlmdCgnU0VNVkVSJylcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKVxuICB9XG59IGVsc2Uge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9XG59XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCdcblxudmFyIE1BWF9MRU5HVEggPSAyNTZcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHxcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gOTAwNzE5OTI1NDc0MDk5MVxuXG4vLyBNYXggc2FmZSBzZWdtZW50IGxlbmd0aCBmb3IgY29lcmNpb24uXG52YXIgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCA9IDE2XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG52YXIgcmUgPSBleHBvcnRzLnJlID0gW11cbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdXG52YXIgdCA9IGV4cG9ydHMudG9rZW5zID0ge31cbnZhciBSID0gMFxuXG5mdW5jdGlvbiB0b2sgKG4pIHtcbiAgdFtuXSA9IFIrK1xufVxuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG50b2soJ05VTUVSSUNJREVOVElGSUVSJylcbnNyY1t0Lk5VTUVSSUNJREVOVElGSUVSXSA9ICcwfFsxLTldXFxcXGQqJ1xudG9rKCdOVU1FUklDSURFTlRJRklFUkxPT1NFJylcbnNyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdID0gJ1swLTldKydcblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxudG9rKCdOT05OVU1FUklDSURFTlRJRklFUicpXG5zcmNbdC5OT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKidcblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnRvaygnTUFJTlZFUlNJT04nKVxuc3JjW3QuTUFJTlZFUlNJT05dID0gJygnICsgc3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1t0Lk5VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbdC5OVU1FUklDSURFTlRJRklFUl0gKyAnKSdcblxudG9rKCdNQUlOVkVSU0lPTkxPT1NFJylcbnNyY1t0Lk1BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudG9rKCdQUkVSRUxFQVNFSURFTlRJRklFUicpXG5zcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1t0Lk5VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknXG5cbnRvaygnUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRScpXG5zcmNbdC5QUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSA9ICcoPzonICsgc3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW3QuTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudG9rKCdQUkVSRUxFQVNFJylcbnNyY1t0LlBSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdICsgJykqKSknXG5cbnRvaygnUFJFUkVMRUFTRUxPT1NFJylcbnNyY1t0LlBSRVJFTEVBU0VMT09TRV0gPSAnKD86LT8oJyArIHNyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknXG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhIElkZW50aWZpZXJcbi8vIEFueSBjb21iaW5hdGlvbiBvZiBkaWdpdHMsIGxldHRlcnMsIG9yIGh5cGhlbnMuXG5cbnRvaygnQlVJTERJREVOVElGSUVSJylcbnNyY1t0LkJVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKydcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGFcbi8vIFBsdXMgc2lnbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgcGVyaW9kLXNlcGFyYXRlZCBidWlsZCBtZXRhZGF0YVxuLy8gaWRlbnRpZmllcnMuXG5cbnRvaygnQlVJTEQnKVxuc3JjW3QuQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbdC5CVUlMRElERU5USUZJRVJdICtcbiAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW3QuQlVJTERJREVOVElGSUVSXSArICcpKikpJ1xuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudG9rKCdGVUxMJylcbnRvaygnRlVMTFBMQUlOJylcbnNyY1t0LkZVTExQTEFJTl0gPSAndj8nICsgc3JjW3QuTUFJTlZFUlNJT05dICtcbiAgICAgICAgICAgICAgICAgIHNyY1t0LlBSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXSArICc/J1xuXG5zcmNbdC5GVUxMXSA9ICdeJyArIHNyY1t0LkZVTExQTEFJTl0gKyAnJCdcblxuLy8gbGlrZSBmdWxsLCBidXQgYWxsb3dzIHYxLjIuMyBhbmQgPTEuMi4zLCB3aGljaCBwZW9wbGUgZG8gc29tZXRpbWVzLlxuLy8gYWxzbywgMS4wLjBhbHBoYTEgKHByZXJlbGVhc2Ugd2l0aG91dCB0aGUgaHlwaGVuKSB3aGljaCBpcyBwcmV0dHlcbi8vIGNvbW1vbiBpbiB0aGUgbnBtIHJlZ2lzdHJ5LlxudG9rKCdMT09TRVBMQUlOJylcbnNyY1t0LkxPT1NFUExBSU5dID0gJ1t2PVxcXFxzXSonICsgc3JjW3QuTUFJTlZFUlNJT05MT09TRV0gK1xuICAgICAgICAgICAgICAgICAgc3JjW3QuUFJFUkVMRUFTRUxPT1NFXSArICc/JyArXG4gICAgICAgICAgICAgICAgICBzcmNbdC5CVUlMRF0gKyAnPydcblxudG9rKCdMT09TRScpXG5zcmNbdC5MT09TRV0gPSAnXicgKyBzcmNbdC5MT09TRVBMQUlOXSArICckJ1xuXG50b2soJ0dUTFQnKVxuc3JjW3QuR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJ1xuXG4vLyBTb21ldGhpbmcgbGlrZSBcIjIuKlwiIG9yIFwiMS4yLnhcIi5cbi8vIE5vdGUgdGhhdCBcIngueFwiIGlzIGEgdmFsaWQgeFJhbmdlIGlkZW50aWZlciwgbWVhbmluZyBcImFueSB2ZXJzaW9uXCJcbi8vIE9ubHkgdGhlIGZpcnN0IGl0ZW0gaXMgc3RyaWN0bHkgcmVxdWlyZWQuXG50b2soJ1hSQU5HRUlERU5USUZJRVJMT09TRScpXG5zcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW3QuTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnfHh8WHxcXFxcKidcbnRvaygnWFJBTkdFSURFTlRJRklFUicpXG5zcmNbdC5YUkFOR0VJREVOVElGSUVSXSA9IHNyY1t0Lk5VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJ1xuXG50b2soJ1hSQU5HRVBMQUlOJylcbnNyY1t0LlhSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbdC5YUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbdC5YUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbdC5YUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbdC5QUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXSArICc/JyArXG4gICAgICAgICAgICAgICAgICAgJyk/KT8nXG5cbnRvaygnWFJBTkdFUExBSU5MT09TRScpXG5zcmNbdC5YUkFOR0VQTEFJTkxPT1NFXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbdC5QUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbdC5CVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nXG5cbnRvaygnWFJBTkdFJylcbnNyY1t0LlhSQU5HRV0gPSAnXicgKyBzcmNbdC5HVExUXSArICdcXFxccyonICsgc3JjW3QuWFJBTkdFUExBSU5dICsgJyQnXG50b2soJ1hSQU5HRUxPT1NFJylcbnNyY1t0LlhSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1t0LkdUTFRdICsgJ1xcXFxzKicgKyBzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXSArICckJ1xuXG4vLyBDb2VyY2lvbi5cbi8vIEV4dHJhY3QgYW55dGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBiZSBhIHBhcnQgb2YgYSB2YWxpZCBzZW12ZXJcbnRvaygnQ09FUkNFJylcbnNyY1t0LkNPRVJDRV0gPSAnKF58W15cXFxcZF0pJyArXG4gICAgICAgICAgICAgICcoXFxcXGR7MSwnICsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCArICd9KScgK1xuICAgICAgICAgICAgICAnKD86XFxcXC4oXFxcXGR7MSwnICsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCArICd9KSk/JyArXG4gICAgICAgICAgICAgICcoPzpcXFxcLihcXFxcZHsxLCcgKyBNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIICsgJ30pKT8nICtcbiAgICAgICAgICAgICAgJyg/OiR8W15cXFxcZF0pJ1xudG9rKCdDT0VSQ0VSVEwnKVxucmVbdC5DT0VSQ0VSVExdID0gbmV3IFJlZ0V4cChzcmNbdC5DT0VSQ0VdLCAnZycpXG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG50b2soJ0xPTkVUSUxERScpXG5zcmNbdC5MT05FVElMREVdID0gJyg/On4+PyknXG5cbnRvaygnVElMREVUUklNJylcbnNyY1t0LlRJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW3QuTE9ORVRJTERFXSArICdcXFxccysnXG5yZVt0LlRJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1t0LlRJTERFVFJJTV0sICdnJylcbnZhciB0aWxkZVRyaW1SZXBsYWNlID0gJyQxfidcblxudG9rKCdUSUxERScpXG5zcmNbdC5USUxERV0gPSAnXicgKyBzcmNbdC5MT05FVElMREVdICsgc3JjW3QuWFJBTkdFUExBSU5dICsgJyQnXG50b2soJ1RJTERFTE9PU0UnKVxuc3JjW3QuVElMREVMT09TRV0gPSAnXicgKyBzcmNbdC5MT05FVElMREVdICsgc3JjW3QuWFJBTkdFUExBSU5MT09TRV0gKyAnJCdcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnRvaygnTE9ORUNBUkVUJylcbnNyY1t0LkxPTkVDQVJFVF0gPSAnKD86XFxcXF4pJ1xuXG50b2soJ0NBUkVUVFJJTScpXG5zcmNbdC5DQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1t0LkxPTkVDQVJFVF0gKyAnXFxcXHMrJ1xucmVbdC5DQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbdC5DQVJFVFRSSU1dLCAnZycpXG52YXIgY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nXG5cbnRvaygnQ0FSRVQnKVxuc3JjW3QuQ0FSRVRdID0gJ14nICsgc3JjW3QuTE9ORUNBUkVUXSArIHNyY1t0LlhSQU5HRVBMQUlOXSArICckJ1xudG9rKCdDQVJFVExPT1NFJylcbnNyY1t0LkNBUkVUTE9PU0VdID0gJ14nICsgc3JjW3QuTE9ORUNBUkVUXSArIHNyY1t0LlhSQU5HRVBMQUlOTE9PU0VdICsgJyQnXG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG50b2soJ0NPTVBBUkFUT1JMT09TRScpXG5zcmNbdC5DT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW3QuR1RMVF0gKyAnXFxcXHMqKCcgKyBzcmNbdC5MT09TRVBMQUlOXSArICcpJHxeJCdcbnRvaygnQ09NUEFSQVRPUicpXG5zcmNbdC5DT01QQVJBVE9SXSA9ICdeJyArIHNyY1t0LkdUTFRdICsgJ1xcXFxzKignICsgc3JjW3QuRlVMTFBMQUlOXSArICcpJHxeJCdcblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnRvaygnQ09NUEFSQVRPUlRSSU0nKVxuc3JjW3QuQ09NUEFSQVRPUlRSSU1dID0gJyhcXFxccyopJyArIHNyY1t0LkdUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBzcmNbdC5MT09TRVBMQUlOXSArICd8JyArIHNyY1t0LlhSQU5HRVBMQUlOXSArICcpJ1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVt0LkNPTVBBUkFUT1JUUklNXSA9IG5ldyBSZWdFeHAoc3JjW3QuQ09NUEFSQVRPUlRSSU1dLCAnZycpXG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMydcblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnRvaygnSFlQSEVOUkFOR0UnKVxuc3JjW3QuSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1t0LlhSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbdC5YUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccyokJ1xuXG50b2soJ0hZUEhFTlJBTkdFTE9PU0UnKVxuc3JjW3QuSFlQSEVOUkFOR0VMT09TRV0gPSAnXlxcXFxzKignICsgc3JjW3QuWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1t0LlhSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJ1xuXG4vLyBTdGFyIHJhbmdlcyBiYXNpY2FsbHkganVzdCBhbGxvdyBhbnl0aGluZyBhdCBhbGwuXG50b2soJ1NUQVInKVxuc3JjW3QuU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKidcblxuLy8gQ29tcGlsZSB0byBhY3R1YWwgcmVnZXhwIG9iamVjdHMuXG4vLyBBbGwgYXJlIGZsYWctZnJlZSwgdW5sZXNzIHRoZXkgd2VyZSBjcmVhdGVkIGFib3ZlIHdpdGggYSBmbGFnLlxuZm9yICh2YXIgaSA9IDA7IGkgPCBSOyBpKyspIHtcbiAgZGVidWcoaSwgc3JjW2ldKVxuICBpZiAoIXJlW2ldKSB7XG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSlcbiAgfVxufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmZ1bmN0aW9uIHBhcnNlICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgcmV0dXJuIHZlcnNpb25cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LkxPT1NFXSA6IHJlW3QuRlVMTF1cbiAgaWYgKCFyLnRlc3QodmVyc2lvbikpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0cy52YWxpZCA9IHZhbGlkXG5mdW5jdGlvbiB2YWxpZCAodmVyc2lvbiwgb3B0aW9ucykge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIG9wdGlvbnMpXG4gIHJldHVybiB2ID8gdi52ZXJzaW9uIDogbnVsbFxufVxuXG5leHBvcnRzLmNsZWFuID0gY2xlYW5cbmZ1bmN0aW9uIGNsZWFuICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBvcHRpb25zKVxuICByZXR1cm4gcyA/IHMudmVyc2lvbiA6IG51bGxcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXJcblxuZnVuY3Rpb24gU2VtVmVyICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBvcHRpb25zLmxvb3NlKSB7XG4gICAgICByZXR1cm4gdmVyc2lvblxuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi52ZXJzaW9uXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pXG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIG9wdGlvbnMpXG4gIH1cblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgb3B0aW9ucylcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG5cbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChvcHRpb25zLmxvb3NlID8gcmVbdC5MT09TRV0gOiByZVt0LkZVTExdKVxuXG4gIGlmICghbSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pXG4gIH1cblxuICB0aGlzLnJhdyA9IHZlcnNpb25cblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV1cbiAgdGhpcy5taW5vciA9ICttWzJdXG4gIHRoaXMucGF0Y2ggPSArbVszXVxuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG4gIH1cblxuICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuICB9XG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBwYXRjaCB2ZXJzaW9uJylcbiAgfVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pIHtcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICB9IGVsc2Uge1xuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkXG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaWRcbiAgICB9KVxuICB9XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXVxuICB0aGlzLmZvcm1hdCgpXG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnZlcnNpb24gPSB0aGlzLm1ham9yICsgJy4nICsgdGhpcy5taW5vciArICcuJyArIHRoaXMucGF0Y2hcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKVxuICB9XG4gIHJldHVybiB0aGlzLnZlcnNpb25cbn1cblxuU2VtVmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvblxufVxuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgZGVidWcoJ1NlbVZlci5jb21wYXJlJywgdGhpcy52ZXJzaW9uLCB0aGlzLm9wdGlvbnMsIG90aGVyKVxuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpXG59XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKVxufVxuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gIH1cblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xXG4gIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gMVxuICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldXG4gICAgdmFyIGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldXG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYSA9PT0gYikge1xuICAgICAgY29udGludWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyhhLCBiKVxuICAgIH1cbiAgfSB3aGlsZSAoKytpKVxufVxuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVCdWlsZCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgfVxuXG4gIHZhciBpID0gMFxuICBkbyB7XG4gICAgdmFyIGEgPSB0aGlzLmJ1aWxkW2ldXG4gICAgdmFyIGIgPSBvdGhlci5idWlsZFtpXVxuICAgIGRlYnVnKCdwcmVyZWxlYXNlIGNvbXBhcmUnLCBpLCBhLCBiKVxuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICB9XG4gIH0gd2hpbGUgKCsraSlcbn1cblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbiAocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICBzd2l0Y2ggKHJlbGVhc2UpIHtcbiAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICB0aGlzLm1ham9yKytcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgIHRoaXMubWlub3IrK1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKVxuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICBicmVha1xuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgIC8vIHByZXBhdGNoLlxuICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucGF0Y2ggIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgfVxuICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtaW5vcic6XG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1pbm9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWlub3IgdmVyc2lvbi5cbiAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMSBidW1wcyB0byAxLjMuMFxuICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgIH1cbiAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucGF0Y2grK1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgIGJyZWFrXG4gICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAvLyAxLjAuMCBcInByZVwiIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgY2FzZSAncHJlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKytcbiAgICAgICAgICAgIGkgPSAtMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJyArIHJlbGVhc2UpXG4gIH1cbiAgdGhpcy5mb3JtYXQoKVxuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvblxuICByZXR1cm4gdGhpc1xufVxuXG5leHBvcnRzLmluYyA9IGluY1xuZnVuY3Rpb24gaW5jICh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mIChsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlXG4gICAgbG9vc2UgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpLmluYyhyZWxlYXNlLCBpZGVudGlmaWVyKS52ZXJzaW9uXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmXG5mdW5jdGlvbiBkaWZmICh2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHZhciB2MSA9IHBhcnNlKHZlcnNpb24xKVxuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKVxuICAgIHZhciBwcmVmaXggPSAnJ1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcHJlZml4ID0gJ3ByZSdcbiAgICAgIHZhciBkZWZhdWx0UmVzdWx0ID0gJ3ByZXJlbGVhc2UnXG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArIGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0IC8vIG1heSBiZSB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVyc1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmZ1bmN0aW9uIGNvbXBhcmVJZGVudGlmaWVycyAoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKVxuICB2YXIgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVyc1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyAoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpXG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvclxuZnVuY3Rpb24gbWFqb3IgKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvclxufVxuXG5leHBvcnRzLm1pbm9yID0gbWlub3JcbmZ1bmN0aW9uIG1pbm9yIChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWlub3Jcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoXG5mdW5jdGlvbiBwYXRjaCAoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoXG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmVcbmZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKG5ldyBTZW1WZXIoYiwgbG9vc2UpKVxufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZVxuZnVuY3Rpb24gY29tcGFyZUxvb3NlIChhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpXG59XG5cbmV4cG9ydHMuY29tcGFyZUJ1aWxkID0gY29tcGFyZUJ1aWxkXG5mdW5jdGlvbiBjb21wYXJlQnVpbGQgKGEsIGIsIGxvb3NlKSB7XG4gIHZhciB2ZXJzaW9uQSA9IG5ldyBTZW1WZXIoYSwgbG9vc2UpXG4gIHZhciB2ZXJzaW9uQiA9IG5ldyBTZW1WZXIoYiwgbG9vc2UpXG4gIHJldHVybiB2ZXJzaW9uQS5jb21wYXJlKHZlcnNpb25CKSB8fCB2ZXJzaW9uQS5jb21wYXJlQnVpbGQodmVyc2lvbkIpXG59XG5cbmV4cG9ydHMucmNvbXBhcmUgPSByY29tcGFyZVxuZnVuY3Rpb24gcmNvbXBhcmUgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGIsIGEsIGxvb3NlKVxufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0XG5mdW5jdGlvbiBzb3J0IChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZUJ1aWxkKGEsIGIsIGxvb3NlKVxuICB9KVxufVxuXG5leHBvcnRzLnJzb3J0ID0gcnNvcnRcbmZ1bmN0aW9uIHJzb3J0IChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuY29tcGFyZUJ1aWxkKGIsIGEsIGxvb3NlKVxuICB9KVxufVxuXG5leHBvcnRzLmd0ID0gZ3RcbmZ1bmN0aW9uIGd0IChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPiAwXG59XG5cbmV4cG9ydHMubHQgPSBsdFxuZnVuY3Rpb24gbHQgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDBcbn1cblxuZXhwb3J0cy5lcSA9IGVxXG5mdW5jdGlvbiBlcSAoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwXG59XG5cbmV4cG9ydHMubmVxID0gbmVxXG5mdW5jdGlvbiBuZXEgKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMFxufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZVxuZnVuY3Rpb24gZ3RlIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMFxufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZVxuZnVuY3Rpb24gbHRlIChhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMFxufVxuXG5leHBvcnRzLmNtcCA9IGNtcFxuZnVuY3Rpb24gY21wIChhLCBvcCwgYiwgbG9vc2UpIHtcbiAgc3dpdGNoIChvcCkge1xuICAgIGNhc2UgJz09PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKVxuICAgICAgICBhID0gYS52ZXJzaW9uXG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKVxuICAgICAgICBiID0gYi52ZXJzaW9uXG4gICAgICByZXR1cm4gYSA9PT0gYlxuXG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpXG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpXG4gICAgICAgIGIgPSBiLnZlcnNpb25cbiAgICAgIHJldHVybiBhICE9PSBiXG5cbiAgICBjYXNlICcnOlxuICAgIGNhc2UgJz0nOlxuICAgIGNhc2UgJz09JzpcbiAgICAgIHJldHVybiBlcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJyE9JzpcbiAgICAgIHJldHVybiBuZXEoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc+JzpcbiAgICAgIHJldHVybiBndChhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz49JzpcbiAgICAgIHJldHVybiBndGUoYSwgYiwgbG9vc2UpXG5cbiAgICBjYXNlICc8JzpcbiAgICAgIHJldHVybiBsdChhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzw9JzpcbiAgICAgIHJldHVybiBsdGUoYSwgYiwgbG9vc2UpXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKVxuICB9XG59XG5cbmV4cG9ydHMuQ29tcGFyYXRvciA9IENvbXBhcmF0b3JcbmZ1bmN0aW9uIENvbXBhcmF0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgaW5jbHVkZVByZXJlbGVhc2U6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSkge1xuICAgICAgcmV0dXJuIGNvbXBcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcCA9IGNvbXAudmFsdWVcbiAgICB9XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgb3B0aW9ucylcbiAgfVxuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgb3B0aW9ucylcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gIHRoaXMucGFyc2UoY29tcClcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSkge1xuICAgIHRoaXMudmFsdWUgPSAnJ1xuICB9IGVsc2Uge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvblxuICB9XG5cbiAgZGVidWcoJ2NvbXAnLCB0aGlzKVxufVxuXG52YXIgQU5ZID0ge31cbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LkNPTVBBUkFUT1JMT09TRV0gOiByZVt0LkNPTVBBUkFUT1JdXG4gIHZhciBtID0gY29tcC5tYXRjaChyKVxuXG4gIGlmICghbSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApXG4gIH1cblxuICB0aGlzLm9wZXJhdG9yID0gbVsxXSAhPT0gdW5kZWZpbmVkID8gbVsxXSA6ICcnXG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpIHtcbiAgICB0aGlzLm9wZXJhdG9yID0gJydcbiAgfVxuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pIHtcbiAgICB0aGlzLnNlbXZlciA9IEFOWVxuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VtdmVyID0gbmV3IFNlbVZlcihtWzJdLCB0aGlzLm9wdGlvbnMubG9vc2UpXG4gIH1cbn1cblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlXG59XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5vcHRpb25zLmxvb3NlKVxuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZIHx8IHZlcnNpb24gPT09IEFOWSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5vcHRpb25zKVxufVxuXG5Db21wYXJhdG9yLnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24gKGNvbXAsIG9wdGlvbnMpIHtcbiAgaWYgKCEoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBDb21wYXJhdG9yIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHZhciByYW5nZVRtcFxuXG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnJykge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmFuZ2VUbXAgPSBuZXcgUmFuZ2UoY29tcC52YWx1ZSwgb3B0aW9ucylcbiAgICByZXR1cm4gc2F0aXNmaWVzKHRoaXMudmFsdWUsIHJhbmdlVG1wLCBvcHRpb25zKVxuICB9IGVsc2UgaWYgKGNvbXAub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgaWYgKGNvbXAudmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByYW5nZVRtcCA9IG5ldyBSYW5nZSh0aGlzLnZhbHVlLCBvcHRpb25zKVxuICAgIHJldHVybiBzYXRpc2ZpZXMoY29tcC5zZW12ZXIsIHJhbmdlVG1wLCBvcHRpb25zKVxuICB9XG5cbiAgdmFyIHNhbWVEaXJlY3Rpb25JbmNyZWFzaW5nID1cbiAgICAodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPicpICYmXG4gICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJz4nKVxuICB2YXIgc2FtZURpcmVjdGlvbkRlY3JlYXNpbmcgPVxuICAgICh0aGlzLm9wZXJhdG9yID09PSAnPD0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpXG4gIHZhciBzYW1lU2VtVmVyID0gdGhpcy5zZW12ZXIudmVyc2lvbiA9PT0gY29tcC5zZW12ZXIudmVyc2lvblxuICB2YXIgZGlmZmVyZW50RGlyZWN0aW9uc0luY2x1c2l2ZSA9XG4gICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzw9JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPD0nKVxuICB2YXIgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gPVxuICAgIGNtcCh0aGlzLnNlbXZlciwgJzwnLCBjb21wLnNlbXZlciwgb3B0aW9ucykgJiZcbiAgICAoKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJz4nKSAmJlxuICAgIChjb21wLm9wZXJhdG9yID09PSAnPD0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8JykpXG4gIHZhciBvcHBvc2l0ZURpcmVjdGlvbnNHcmVhdGVyVGhhbiA9XG4gICAgY21wKHRoaXMuc2VtdmVyLCAnPicsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICgodGhpcy5vcGVyYXRvciA9PT0gJzw9JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPCcpICYmXG4gICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJz4nKSlcblxuICByZXR1cm4gc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgfHwgc2FtZURpcmVjdGlvbkRlY3JlYXNpbmcgfHxcbiAgICAoc2FtZVNlbVZlciAmJiBkaWZmZXJlbnREaXJlY3Rpb25zSW5jbHVzaXZlKSB8fFxuICAgIG9wcG9zaXRlRGlyZWN0aW9uc0xlc3NUaGFuIHx8IG9wcG9zaXRlRGlyZWN0aW9uc0dyZWF0ZXJUaGFuXG59XG5cbmV4cG9ydHMuUmFuZ2UgPSBSYW5nZVxuZnVuY3Rpb24gUmFuZ2UgKHJhbmdlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgbG9vc2U6ICEhb3B0aW9ucyxcbiAgICAgIGluY2x1ZGVQcmVyZWxlYXNlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGlmIChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSB7XG4gICAgaWYgKHJhbmdlLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgcmFuZ2UuaW5jbHVkZVByZXJlbGVhc2UgPT09ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgcmV0dXJuIHJhbmdlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UucmF3LCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIGlmIChyYW5nZSBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnZhbHVlLCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpXG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgdGhpcy5pbmNsdWRlUHJlcmVsZWFzZSA9ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuXG4gIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gIHRoaXMucmF3ID0gcmFuZ2VcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpXG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIC8vIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHJlbGV2YW50IGZvciB3aGF0ZXZlciByZWFzb25cbiAgICByZXR1cm4gYy5sZW5ndGhcbiAgfSlcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpXG4gIH1cblxuICB0aGlzLmZvcm1hdCgpXG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmFuZ2UgPSB0aGlzLnNldC5tYXAoZnVuY3Rpb24gKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKClcbiAgfSkuam9pbignfHwnKS50cmltKClcbiAgcmV0dXJuIHRoaXMucmFuZ2Vcbn1cblxuUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZVxufVxuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICB2YXIgbG9vc2UgPSB0aGlzLm9wdGlvbnMubG9vc2VcbiAgcmFuZ2UgPSByYW5nZS50cmltKClcbiAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gIHZhciBociA9IGxvb3NlID8gcmVbdC5IWVBIRU5SQU5HRUxPT1NFXSA6IHJlW3QuSFlQSEVOUkFOR0VdXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShociwgaHlwaGVuUmVwbGFjZSlcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpXG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbdC5DT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSlcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVt0LkNPTVBBUkFUT1JUUklNXSlcblxuICAvLyBgfiAxLjIuM2AgPT4gYH4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuQ0FSRVRUUklNXSwgY2FyZXRUcmltUmVwbGFjZSlcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJylcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW3QuQ09NUEFSQVRPUkxPT1NFXSA6IHJlW3QuQ09NUEFSQVRPUl1cbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpXG4gIH0sIHRoaXMpLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pXG4gIGlmICh0aGlzLm9wdGlvbnMubG9vc2UpIHtcbiAgICAvLyBpbiBsb29zZSBtb2RlLCB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCB2YWxpZCBjb21wYXJhdG9yc1xuICAgIHNldCA9IHNldC5maWx0ZXIoZnVuY3Rpb24gKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKVxuICAgIH0pXG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbiAoY29tcCkge1xuICAgIHJldHVybiBuZXcgQ29tcGFyYXRvcihjb21wLCB0aGlzLm9wdGlvbnMpXG4gIH0sIHRoaXMpXG5cbiAgcmV0dXJuIHNldFxufVxuXG5SYW5nZS5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChyYW5nZSwgb3B0aW9ucykge1xuICBpZiAoIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2EgUmFuZ2UgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuc2V0LnNvbWUoZnVuY3Rpb24gKHRoaXNDb21wYXJhdG9ycykge1xuICAgIHJldHVybiAoXG4gICAgICBpc1NhdGlzZmlhYmxlKHRoaXNDb21wYXJhdG9ycywgb3B0aW9ucykgJiZcbiAgICAgIHJhbmdlLnNldC5zb21lKGZ1bmN0aW9uIChyYW5nZUNvbXBhcmF0b3JzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaXNTYXRpc2ZpYWJsZShyYW5nZUNvbXBhcmF0b3JzLCBvcHRpb25zKSAmJlxuICAgICAgICAgIHRoaXNDb21wYXJhdG9ycy5ldmVyeShmdW5jdGlvbiAodGhpc0NvbXBhcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZUNvbXBhcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChyYW5nZUNvbXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXNDb21wYXJhdG9yLmludGVyc2VjdHMocmFuZ2VDb21wYXJhdG9yLCBvcHRpb25zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgfSlcbn1cblxuLy8gdGFrZSBhIHNldCBvZiBjb21wYXJhdG9ycyBhbmQgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlcmVcbi8vIGV4aXN0cyBhIHZlcnNpb24gd2hpY2ggY2FuIHNhdGlzZnkgaXRcbmZ1bmN0aW9uIGlzU2F0aXNmaWFibGUgKGNvbXBhcmF0b3JzLCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlXG4gIHZhciByZW1haW5pbmdDb21wYXJhdG9ycyA9IGNvbXBhcmF0b3JzLnNsaWNlKClcbiAgdmFyIHRlc3RDb21wYXJhdG9yID0gcmVtYWluaW5nQ29tcGFyYXRvcnMucG9wKClcblxuICB3aGlsZSAocmVzdWx0ICYmIHJlbWFpbmluZ0NvbXBhcmF0b3JzLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChvdGhlckNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0ZXN0Q29tcGFyYXRvci5pbnRlcnNlY3RzKG90aGVyQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICB9KVxuXG4gICAgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBNb3N0bHkganVzdCBmb3IgdGVzdGluZyBhbmQgbGVnYWN5IEFQSSByZWFzb25zXG5leHBvcnRzLnRvQ29tcGFyYXRvcnMgPSB0b0NvbXBhcmF0b3JzXG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzIChyYW5nZSwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKS5zZXQubWFwKGZ1bmN0aW9uIChjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZVxuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKVxuICB9KVxufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ2NvbXAnLCBjb21wLCBvcHRpb25zKVxuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygnY2FyZXQnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBvcHRpb25zKVxuICBkZWJ1ZygndGlsZGVzJywgY29tcClcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd4cmFuZ2UnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdzdGFycycsIGNvbXApXG4gIHJldHVybiBjb21wXG59XG5cbmZ1bmN0aW9uIGlzWCAoaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJ1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyAoY29tcCwgb3B0aW9ucykge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUgKGNvbXAsIG9wdGlvbnMpIHtcbiAgdmFyIHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5USUxERUxPT1NFXSA6IHJlW3QuVElMREVdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24gKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgdmFyIHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZVRpbGRlIHByJywgcHIpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgJy0nICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnXG4gICAgfVxuXG4gICAgZGVidWcoJ3RpbGRlIHJldHVybicsIHJldClcbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIF4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMFxuLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMFxuLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMFxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0cyAoY29tcCwgb3B0aW9ucykge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24gKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgb3B0aW9ucylcbiAgdmFyIHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5DQVJFVExPT1NFXSA6IHJlW3QuQ0FSRVRdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24gKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgdmFyIHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCdcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgJy0nICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArICctJyArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgJy0nICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJylcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJykge1xuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCdcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyAoY29tcCwgb3B0aW9ucykge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBvcHRpb25zKVxuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbiAoY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlWFJhbmdlKGNvbXAsIG9wdGlvbnMpXG4gIH0pLmpvaW4oJyAnKVxufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlIChjb21wLCBvcHRpb25zKSB7XG4gIGNvbXAgPSBjb21wLnRyaW0oKVxuICB2YXIgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlhSQU5HRUxPT1NFXSA6IHJlW3QuWFJBTkdFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uIChyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpXG4gICAgdmFyIHhNID0gaXNYKE0pXG4gICAgdmFyIHhtID0geE0gfHwgaXNYKG0pXG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApXG4gICAgdmFyIGFueVggPSB4cFxuXG4gICAgaWYgKGd0bHQgPT09ICc9JyAmJiBhbnlYKSB7XG4gICAgICBndGx0ID0gJydcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSBpbmNsdWRpbmcgcHJlcmVsZWFzZXMgaW4gdGhlIG1hdGNoLCB0aGVuIHdlIG5lZWRcbiAgICAvLyB0byBmaXggdGhpcyB0byAtMCwgdGhlIGxvd2VzdCBwb3NzaWJsZSBwcmVyZWxlYXNlIHZhbHVlXG4gICAgcHIgPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gJy0wJyA6ICcnXG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wLTAnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICByZXQgPSAnKidcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gd2Uga25vdyBwYXRjaCBpcyBhbiB4LCBiZWNhdXNlIHdlIGhhdmUgYW55IHggYXQgYWxsLlxuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKSB7XG4gICAgICAgIG0gPSAwXG4gICAgICB9XG4gICAgICBwID0gMFxuXG4gICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgIC8vID4xLjIuMyA9PiA+PSAxLjIuNFxuICAgICAgICBndGx0ID0gJz49J1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxXG4gICAgICAgICAgbSA9IDBcbiAgICAgICAgICBwID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgICAgICBwID0gMFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG0gPSArbSArIDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSBndGx0ICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHJcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wJyArIHByICsgJyA8JyArICgrTSArIDEpICsgJy4wLjAnICsgcHJcbiAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAnICsgcHIgK1xuICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJyArIHByXG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpXG5cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMgKGNvbXAsIG9wdGlvbnMpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIG9wdGlvbnMpXG4gIC8vIExvb3NlbmVzcyBpcyBpZ25vcmVkIGhlcmUuICBzdGFyIGlzIGFsd2F5cyBhcyBsb29zZSBhcyBpdCBnZXRzIVxuICByZXR1cm4gY29tcC50cmltKCkucmVwbGFjZShyZVt0LlNUQVJdLCAnJylcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbdC5IWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAgQW55IDMuNC54IHdpbGwgZG9cbi8vIDEuMiAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMFxuZnVuY3Rpb24gaHlwaGVuUmVwbGFjZSAoJDAsXG4gIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG4gIGlmIChpc1goZk0pKSB7XG4gICAgZnJvbSA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKGZtKSkge1xuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCdcbiAgfSBlbHNlIGlmIChpc1goZnApKSB7XG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJ1xuICB9IGVsc2Uge1xuICAgIGZyb20gPSAnPj0nICsgZnJvbVxuICB9XG5cbiAgaWYgKGlzWCh0TSkpIHtcbiAgICB0byA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKHRtKSkge1xuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnXG4gIH0gZWxzZSBpZiAoaXNYKHRwKSkge1xuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnXG4gIH0gZWxzZSBpZiAodHByKSB7XG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByXG4gIH0gZWxzZSB7XG4gICAgdG8gPSAnPD0nICsgdG9cbiAgfVxuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKClcbn1cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICB0cnkge1xuICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24sIHRoaXMub3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiB0ZXN0U2V0IChzZXQsIHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYnVnKHNldFtpXS5zZW12ZXIpXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyLnByZXJlbGVhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXJcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnRzLnNhdGlzZmllcyA9IHNhdGlzZmllc1xuZnVuY3Rpb24gc2F0aXNmaWVzICh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pXG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmdcbmZ1bmN0aW9uIG1heFNhdGlzZnlpbmcgKHZlcnNpb25zLCByYW5nZSwgb3B0aW9ucykge1xuICB2YXIgbWF4ID0gbnVsbFxuICB2YXIgbWF4U1YgPSBudWxsXG4gIHRyeSB7XG4gICAgdmFyIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBvcHRpb25zKVxuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7XG4gICAgICAvLyBzYXRpc2ZpZXModiwgcmFuZ2UsIG9wdGlvbnMpXG4gICAgICBpZiAoIW1heCB8fCBtYXhTVi5jb21wYXJlKHYpID09PSAtMSkge1xuICAgICAgICAvLyBjb21wYXJlKG1heCwgdiwgdHJ1ZSlcbiAgICAgICAgbWF4ID0gdlxuICAgICAgICBtYXhTViA9IG5ldyBTZW1WZXIobWF4LCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1heFxufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nXG5mdW5jdGlvbiBtaW5TYXRpc2Z5aW5nICh2ZXJzaW9ucywgcmFuZ2UsIG9wdGlvbnMpIHtcbiAgdmFyIG1pbiA9IG51bGxcbiAgdmFyIG1pblNWID0gbnVsbFxuICB0cnkge1xuICAgIHZhciByYW5nZU9iaiA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZlcnNpb25zLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICBpZiAocmFuZ2VPYmoudGVzdCh2KSkge1xuICAgICAgLy8gc2F0aXNmaWVzKHYsIHJhbmdlLCBvcHRpb25zKVxuICAgICAgaWYgKCFtaW4gfHwgbWluU1YuY29tcGFyZSh2KSA9PT0gMSkge1xuICAgICAgICAvLyBjb21wYXJlKG1pbiwgdiwgdHJ1ZSlcbiAgICAgICAgbWluID0gdlxuICAgICAgICBtaW5TViA9IG5ldyBTZW1WZXIobWluLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1pblxufVxuXG5leHBvcnRzLm1pblZlcnNpb24gPSBtaW5WZXJzaW9uXG5mdW5jdGlvbiBtaW5WZXJzaW9uIChyYW5nZSwgbG9vc2UpIHtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKVxuXG4gIHZhciBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMCcpXG4gIGlmIChyYW5nZS50ZXN0KG1pbnZlcikpIHtcbiAgICByZXR1cm4gbWludmVyXG4gIH1cblxuICBtaW52ZXIgPSBuZXcgU2VtVmVyKCcwLjAuMC0wJylcbiAgaWYgKHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIG1pbnZlciA9IG51bGxcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV1cblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIENsb25lIHRvIGF2b2lkIG1hbmlwdWxhdGluZyB0aGUgY29tcGFyYXRvcidzIHNlbXZlciBvYmplY3QuXG4gICAgICB2YXIgY29tcHZlciA9IG5ldyBTZW1WZXIoY29tcGFyYXRvci5zZW12ZXIudmVyc2lvbilcbiAgICAgIHN3aXRjaCAoY29tcGFyYXRvci5vcGVyYXRvcikge1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICBpZiAoY29tcHZlci5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29tcHZlci5wYXRjaCsrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB2ZXIucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB2ZXIucmF3ID0gY29tcHZlci5mb3JtYXQoKVxuICAgICAgICAgIC8qIGZhbGx0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICBpZiAoIW1pbnZlciB8fCBndChtaW52ZXIsIGNvbXB2ZXIpKSB7XG4gICAgICAgICAgICBtaW52ZXIgPSBjb21wdmVyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgLyogSWdub3JlIG1heGltdW0gdmVyc2lvbnMgKi9cbiAgICAgICAgICBicmVha1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBvcGVyYXRpb246ICcgKyBjb21wYXJhdG9yLm9wZXJhdG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpZiAobWludmVyICYmIHJhbmdlLnRlc3QobWludmVyKSkge1xuICAgIHJldHVybiBtaW52ZXJcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2VcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UgKHJhbmdlLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIG9wdGlvbnMpLnJhbmdlIHx8ICcqJ1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0clxuZnVuY3Rpb24gbHRyICh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBvcHRpb25zKVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0clxuZnVuY3Rpb24gZ3RyICh2ZXJzaW9uLCByYW5nZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBvcHRpb25zKVxufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlXG5mdW5jdGlvbiBvdXRzaWRlICh2ZXJzaW9uLCByYW5nZSwgaGlsbywgb3B0aW9ucykge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBvcHRpb25zKVxuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wXG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0XG4gICAgICBsdGVmbiA9IGx0ZVxuICAgICAgbHRmbiA9IGx0XG4gICAgICBjb21wID0gJz4nXG4gICAgICBlY29tcCA9ICc+PSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHRcbiAgICAgIGx0ZWZuID0gZ3RlXG4gICAgICBsdGZuID0gZ3RcbiAgICAgIGNvbXAgPSAnPCdcbiAgICAgIGVjb21wID0gJzw9J1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKVxuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBvcHRpb25zKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXVxuXG4gICAgdmFyIGhpZ2ggPSBudWxsXG4gICAgdmFyIGxvdyA9IG51bGxcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yXG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvclxuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvclxuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBvcHRpb25zKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZVxuZnVuY3Rpb24gcHJlcmVsZWFzZSAodmVyc2lvbiwgb3B0aW9ucykge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgb3B0aW9ucylcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbFxufVxuXG5leHBvcnRzLmludGVyc2VjdHMgPSBpbnRlcnNlY3RzXG5mdW5jdGlvbiBpbnRlcnNlY3RzIChyMSwgcjIsIG9wdGlvbnMpIHtcbiAgcjEgPSBuZXcgUmFuZ2UocjEsIG9wdGlvbnMpXG4gIHIyID0gbmV3IFJhbmdlKHIyLCBvcHRpb25zKVxuICByZXR1cm4gcjEuaW50ZXJzZWN0cyhyMilcbn1cblxuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2VcbmZ1bmN0aW9uIGNvZXJjZSAodmVyc2lvbiwgb3B0aW9ucykge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIHJldHVybiB2ZXJzaW9uXG4gIH1cblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdudW1iZXInKSB7XG4gICAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBtYXRjaCA9IG51bGxcbiAgaWYgKCFvcHRpb25zLnJ0bCkge1xuICAgIG1hdGNoID0gdmVyc2lvbi5tYXRjaChyZVt0LkNPRVJDRV0pXG4gIH0gZWxzZSB7XG4gICAgLy8gRmluZCB0aGUgcmlnaHQtbW9zdCBjb2VyY2libGUgc3RyaW5nIHRoYXQgZG9lcyBub3Qgc2hhcmVcbiAgICAvLyBhIHRlcm1pbnVzIHdpdGggYSBtb3JlIGxlZnQtd2FyZCBjb2VyY2libGUgc3RyaW5nLlxuICAgIC8vIEVnLCAnMS4yLjMuNCcgd2FudHMgdG8gY29lcmNlICcyLjMuNCcsIG5vdCAnMy40JyBvciAnNCdcbiAgICAvL1xuICAgIC8vIFdhbGsgdGhyb3VnaCB0aGUgc3RyaW5nIGNoZWNraW5nIHdpdGggYSAvZyByZWdleHBcbiAgICAvLyBNYW51YWxseSBzZXQgdGhlIGluZGV4IHNvIGFzIHRvIHBpY2sgdXAgb3ZlcmxhcHBpbmcgbWF0Y2hlcy5cbiAgICAvLyBTdG9wIHdoZW4gd2UgZ2V0IGEgbWF0Y2ggdGhhdCBlbmRzIGF0IHRoZSBzdHJpbmcgZW5kLCBzaW5jZSBub1xuICAgIC8vIGNvZXJjaWJsZSBzdHJpbmcgY2FuIGJlIG1vcmUgcmlnaHQtd2FyZCB3aXRob3V0IHRoZSBzYW1lIHRlcm1pbnVzLlxuICAgIHZhciBuZXh0XG4gICAgd2hpbGUgKChuZXh0ID0gcmVbdC5DT0VSQ0VSVExdLmV4ZWModmVyc2lvbikpICYmXG4gICAgICAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoICE9PSB2ZXJzaW9uLmxlbmd0aClcbiAgICApIHtcbiAgICAgIGlmICghbWF0Y2ggfHxcbiAgICAgICAgICBuZXh0LmluZGV4ICsgbmV4dFswXS5sZW5ndGggIT09IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoID0gbmV4dFxuICAgICAgfVxuICAgICAgcmVbdC5DT0VSQ0VSVExdLmxhc3RJbmRleCA9IG5leHQuaW5kZXggKyBuZXh0WzFdLmxlbmd0aCArIG5leHRbMl0ubGVuZ3RoXG4gICAgfVxuICAgIC8vIGxlYXZlIGl0IGluIGEgY2xlYW4gc3RhdGVcbiAgICByZVt0LkNPRVJDRVJUTF0ubGFzdEluZGV4ID0gLTFcbiAgfVxuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gcGFyc2UobWF0Y2hbMl0gK1xuICAgICcuJyArIChtYXRjaFszXSB8fCAnMCcpICtcbiAgICAnLicgKyAobWF0Y2hbNF0gfHwgJzAnKSwgb3B0aW9ucylcbn1cbiIsImV4cG9ydCBjb25zdCBlbnVtIE1vZHVsZVR5cGVzIHtcclxuICAgIE90aGVyID0gXCJPVEhFUlwiLFxyXG4gICAgRmVhdHVyZSA9IFwiRkVBVFVSRVwiLFxyXG4gICAgQWRhcHRlciA9IFwiQURBUFRFUlwiLFxyXG4gICAgUmVzb2x2ZXIgPSBcIlJFU09MVkVSXCJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgV2FsbGV0SW5mbyA9IHtcclxuICAgIGNvbXBhdGlibGU6IGJvb2xlYW4sXHJcbiAgICBwcm90b2NvbFZlcnNpb246IHN0cmluZyxcclxuICAgIGVuZ2luZVZlcnNpb246IHN0cmluZyxcclxuICAgIGRldmljZToge1xyXG4gICAgICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nLFxyXG4gICAgICAgIG1vZGVsOiBzdHJpbmdcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQlJBTkNIX05BTUUgPSBcImRlZmF1bHRcIjtcclxuXHJcbiIsImltcG9ydCB7IElQdWJTdWIgfSBmcm9tIFwiLi90eXBlc1wiXHJcbmltcG9ydCB7IHN1YnNjcmliZSwgdW5zdWJzY3JpYmUsIHB1Ymxpc2ggfSBmcm9tICcuL2lucGFnZS1wdWJzdWInXHJcbnR5cGUgS2V5ID0gc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sXHJcbnR5cGUgTXNnRmlsdGVyID0gc3RyaW5nIHwgKChvcDogYW55LCBtc2c6IGFueSkgPT4gYm9vbGVhbilcclxuZXhwb3J0IHR5cGUgRXZlbnREZWY8VCBleHRlbmRzIEtleT4gPSB7IFtrZXkgaW4gVF06IE1zZ0ZpbHRlciB9XHJcbnR5cGUgTXNnSGFuZGxlciA9ICgob3A6IHN0cmluZywgbXNnOiBhbnkpID0+IHZvaWQpXHJcbnR5cGUgRXZlbnRIYW5kbGVyID0geyBba2V5IGluIEtleV06IE1zZ0hhbmRsZXJbXSB8IE1zZ0hhbmRsZXIgfVxyXG5leHBvcnQgdHlwZSBBdXRvUHJvcGVydHkgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHNldDogKHNldHRlcjogKHZhbHVlOiBhbnkpID0+IHZvaWQpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0b1Byb3BlcnR5Q29uZiA9IHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgY29ubjogQ29ubmVjdGlvblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBdXRvUHJvcGVydGllczxNPiA9IHsgW2tleSBpbiBrZXlvZiBNXTogQXV0b1Byb3BlcnR5IH1cclxuZXhwb3J0IHR5cGUgTGlzdGVuZXIgPSB7IGY/OiBNc2dGaWx0ZXIsIGg/OiBFdmVudEhhbmRsZXIsIHA6IEF1dG9Qcm9wZXJ0eVtdIH1cclxuXHJcbmNvbnN0IEFOWV9FVkVOVDogYW55ID0gU3ltYm9sKCdhbnlfZXZlbnQnKVxyXG5jb25zdCBUWVBFX0ZJTFRFUiA9ICh0eXBlOiBzdHJpbmcpID0+IChvcDogYW55LCBtc2c6IGFueSkgPT4gbXNnLnR5cGUgPT09IHR5cGVcclxuXHJcbnR5cGUgRXZlbnRUeXBlID0ge1xyXG4gICAgb3BlcmF0aW9uOiBzdHJpbmcsIC8vICdjcmVhdGUnXHJcbiAgICB0b3BpYzogc3RyaW5nLCAgICAgLy8gY29ubmVjdHMgZXZlbnRzIHRvZ2V0aGVyLiBtYXliZSBjb250ZXh0SWQgb3IganVzdCByYW5kb20uIFxyXG4gICAgLy8gbWF5YmUgYmV0dGVyIGRhdGEgc3RydWN0dXJlIG9yIG5hbWluZz9cclxuICAgIGNvbnRleHRUeXBlOiBzdHJpbmcsIC8vICd0d2VldCdcclxuICAgIGNvbnRleHRJZDogc3RyaW5nLCAgLy8gJzEyMzEyMzEyMycgdHdlZXQgSWQgIFxyXG4gICAgY29udGV4dDogYW55ICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBDb250ZXh0OyBmb3IgZXhhbXBsZSBwYXJzZWQgVFdFRVQgb2JqZXh0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbm5lY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgbGlzdGVuZXJzOiBTZXQ8TGlzdGVuZXI+XHJcbiAgICBzZW5kKG9wOiBhbnksIG1zZz86IGFueSk6IFByb21pc2U8YW55PlxyXG4gICAgLy9iaW5kKGU6IEV2ZW50VHlwZSk6IExpc3RlbmVyXHJcbiAgICBhZGRBdXRvUHJvcGVydHkoYXBDb25maWc6QXV0b1Byb3BlcnR5Q29uZiwgc2V0dGVyOiAodjphbnkpPT52b2lkLCBjdHg/OiBhbnkpOkF1dG9Qcm9wZXJ0eVxyXG4gICAgc2VuZEFuZExpc3Rlbih0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnksIGg6IE1zZ0hhbmRsZXIgfCBFdmVudEhhbmRsZXIpOiB0aGlzXHJcbiAgICBsaXN0ZW4oaDogRXZlbnRIYW5kbGVyKTogdGhpc1xyXG4gICAgbGlzdGVuKGY6IE1zZ0ZpbHRlciwgYXA/OiBBdXRvUHJvcGVydHlbXSk6IHRoaXNcclxuICAgIGxpc3RlbihmOiBNc2dGaWx0ZXIsIGg6IE1zZ0hhbmRsZXIsIGFwPzogQXV0b1Byb3BlcnR5W10pOiB0aGlzXHJcbiAgICBsaXN0ZW4oZjogTXNnRmlsdGVyLCBoOiBFdmVudEhhbmRsZXIsIGFwPzogQXV0b1Byb3BlcnR5W10pOiB0aGlzXHJcbiAgICBsaXN0ZW5lcihoOiBFdmVudEhhbmRsZXIpOiBMaXN0ZW5lclxyXG4gICAgbGlzdGVuZXIoZjogTXNnRmlsdGVyLCBhcD86IEF1dG9Qcm9wZXJ0eVtdKTogTGlzdGVuZXJcclxuICAgIGxpc3RlbmVyKGY6IE1zZ0ZpbHRlciwgaDogTXNnSGFuZGxlciwgYXA/OiBBdXRvUHJvcGVydHlbXSk6IExpc3RlbmVyXHJcbiAgICBsaXN0ZW5lcihmOiBNc2dGaWx0ZXIsIGg6IEV2ZW50SGFuZGxlciwgYXA/OiBBdXRvUHJvcGVydHlbXSk6IExpc3RlbmVyXHJcbiAgICB0b3BpY01hdGNoKHRvcGljOiBzdHJpbmcsIHBhdHRlcm46IHN0cmluZyk6IGJvb2xlYW5cclxuICAgIG9uTWVzc2FnZShvcDogYW55LCBtc2c6IGFueSk6IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb24gaW1wbGVtZW50cyBJQ29ubmVjdGlvbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyQ29udGV4dE1hcCA9IG5ldyBXZWFrTWFwPGFueSwgTGlzdGVuZXI+KClcclxuICAgIHByaXZhdGUgYXV0b1Byb3BlcnRpZXMgPSBuZXcgTWFwPEtleSwgQXV0b1Byb3BlcnR5PigpICAvL1RvRG86IGNvbm5lY3Rpb24td2lkZSBhdXRvcHJvcGVydGllcy4gUmVtb3ZlIG9yIG5vdD9cclxuICAgIHB1YmxpYyByZWFkb25seSBsaXN0ZW5lcnMgPSBuZXcgU2V0PExpc3RlbmVyPigpXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVzPzogSVB1YlN1YixcclxuICAgICAgICBwcml2YXRlIGV2ZW50RGVmPzogRXZlbnREZWY8YW55PlxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fYnVzPy5vbk1lc3NhZ2UoKG9wZXJhdGlvbiwgbWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZShvcGVyYXRpb24sIG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3AgLSBvcGVyYXRpb24sIHN1YmplY3RcclxuICAgIC8vIG1zZyAtIHBheWxvYWRcclxuICAgIHNlbmQob3A6IGFueSwgbXNnPzogYW55KSB7IC8vIHNob3VsZCByZXR1cm4gcHJvbWlzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9idXMuZXhlYyhvcCwgbXNnKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlT25jZUZvckNvbnRleHQoY3R4OmFueSk6IExpc3RlbmVyIHtcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyQ29udGV4dE1hcC5nZXQoY3R4KVxyXG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbWUgPSB0aGlzXHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gbWUubGlzdGVuZXIoKVxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2dDphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldnQuZGF0YS5vcGVyYXRpb24gPT0gJ2Rlc3Ryb3knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViSWQgPSB0eXBlb2YgbGlzdGVuZXIuZiA9PT0gJ3N0cmluZycgPyBsaXN0ZW5lci5mIDogdW5kZWZpbmVkICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZW5kKCd1bnN1YnNjcmliZScsIHN1YklkKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZShjdHguaWQsIGhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgbWUubGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcilcclxuICAgICAgICAgICAgICAgICAgICBtZS5saXN0ZW5lckNvbnRleHRNYXAuZGVsZXRlKGN0eClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL25vdGU6IG11bHRpcGxlIGhhbmRsZXJzIG9mIG1hbnkgY29ubnMgZm9yIHRoZSBzYW1lIHRvcGljIChjb250ZXh0KSBhcmUgcG9zc2libGUuXHJcbiAgICAgICAgICAgIHN1YnNjcmliZShjdHguaWQsIGhhbmRsZXIpXHJcbiAgICAgICAgICAgIG1lLmxpc3RlbmVyQ29udGV4dE1hcC5zZXQoY3R4LCBsaXN0ZW5lcilcclxuICAgICAgICAgICAgLy9tZXNzYWdlIHRvIHNlcnZlciB0byBzd2l0Y2ggdGhlIHN1YnNjcmlwdGlvbiBvbi9vZmZcclxuICAgICAgICAgICAgLy9leGFjdCBmb3JtYXQgaXMgdG8gYmUgYWRqdXN0ZWRcclxuICAgICAgICAgICAgdGhpcy5zZW5kKCdzdWJzY3JpYmUnLCB7IGlkOiBjdHguaWQsIHR5cGU6IGN0eC5jb250ZXh0VHlwZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaWQgPT4gbGlzdGVuZXIuZiA9IGlkICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lclxyXG4gICAgfVxyXG5cclxuICAgIGFkZEF1dG9Qcm9wZXJ0eShhcENvbmZpZzpBdXRvUHJvcGVydHlDb25mLCBzZXR0ZXI6ICh2OmFueSk9PnZvaWQsIGN0eD86IGFueSkge1xyXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuc3Vic2NyaWJlT25jZUZvckNvbnRleHQoY3R4KVxyXG4gICAgICAgIGxldCBhcCA9IHtcclxuICAgICAgICAgICAgY29ubjogYXBDb25maWcuY29ubixcclxuICAgICAgICAgICAgbmFtZTogYXBDb25maWcubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgc2V0OiAodjphbnkpID0+IHsgYXAudmFsdWUgPSB2OyBzZXR0ZXIodikgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0ZW5lci5wLnB1c2goYXApXHJcbiAgICAgICAgcmV0dXJuIGFwO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRBbmRMaXN0ZW4odG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55LCBoOiBNc2dIYW5kbGVyIHwgRXZlbnRIYW5kbGVyLCBhcD86IEF1dG9Qcm9wZXJ0eVtdKTogdGhpcyB7XHJcbiAgICAgICAgLy9EZWNpc2lvbiBDaG9pY2UgMTogXHJcbiAgICAgICAgLy8gY3JlYXRlIGxpc3RlbmVyIGZpcnN0IGFuZCBzZXR1cCB0aGUgZmlsdGVyIGZvciBnaXZlbiBzdWJzY3JpcHRpb24gaWQgbGF0ZXJcclxuICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyKFwiXCIsIGggYXMgYW55LCBhcClcclxuICAgICAgICB0aGlzLnNlbmQodG9waWMsIG1lc3NhZ2UpLnRoZW4oc3ViSWQgPT4gbGlzdGVuZXIuZiA9IHN1YklkKTtcclxuICAgICAgICAvL0RlY2lzaW9uIENob2ljZSAyOiBcclxuICAgICAgICAvLyBjcmVhdGUgbGlzdGVuZXIgbGF0ZXIgYXMgdGhlIHNlcnZlciByZXBsaWVzIHdpdGggdGhlIHN1YnNjcmlwdGlvbiBpZFxyXG4gICAgICAgIC8vdGhpcy5zZW5kKHRvcGljLCBtZXNzYWdlKS50aGVuKHN1YklkID0+IHRoaXMubGlzdGVuKHN1YklkLCBoIGFzIGFueSwgYXApKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGlzdGVuKGg6IEV2ZW50SGFuZGxlcik6IHRoaXNcclxuICAgIGxpc3RlbihmOiBNc2dGaWx0ZXIsIGFwPzogQXV0b1Byb3BlcnR5W10pOiB0aGlzXHJcbiAgICBsaXN0ZW4oZjogTXNnRmlsdGVyLCBoOiBNc2dIYW5kbGVyLCBhcD86IEF1dG9Qcm9wZXJ0eVtdKTogdGhpc1xyXG4gICAgbGlzdGVuKGY6IE1zZ0ZpbHRlciwgaDogRXZlbnRIYW5kbGVyLCBhcD86IEF1dG9Qcm9wZXJ0eVtdKTogdGhpc1xyXG4gICAgbGlzdGVuKGZpbHRlck9ySGFuZGVyOiBNc2dGaWx0ZXIgfCBFdmVudEhhbmRsZXIsIGV2dE9yTXNnT3JBUD86IEV2ZW50SGFuZGxlciB8IE1zZ0hhbmRsZXIgfCBBdXRvUHJvcGVydHlbXSwgYXA/OiBBdXRvUHJvcGVydHlbXSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLCBhcmd1bWVudHMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsLCB3aGVuIG5ldyBjb250ZXh0IHdhcyBjcmVhdGVkLlxyXG4gICAgbGlzdGVuZXIoKTogTGlzdGVuZXJcclxuICAgIGxpc3RlbmVyKGg6IEV2ZW50SGFuZGxlcik6IExpc3RlbmVyXHJcbiAgICBsaXN0ZW5lcihmOiBNc2dGaWx0ZXIsIGFwPzogQXV0b1Byb3BlcnR5W10pOiBMaXN0ZW5lclxyXG4gICAgbGlzdGVuZXIoZjogTXNnRmlsdGVyLCBoOiBNc2dIYW5kbGVyLCBhcD86IEF1dG9Qcm9wZXJ0eVtdKTogTGlzdGVuZXJcclxuICAgIGxpc3RlbmVyKGY6IE1zZ0ZpbHRlciwgaDogRXZlbnRIYW5kbGVyLCBhcD86IEF1dG9Qcm9wZXJ0eVtdKTogTGlzdGVuZXJcclxuICAgIGxpc3RlbmVyKGZpbHRlck9ySGFuZGVyPzogTXNnRmlsdGVyIHwgRXZlbnRIYW5kbGVyLCBldnRPck1zZ09yQVA/OiBFdmVudEhhbmRsZXIgfCBNc2dIYW5kbGVyIHwgQXV0b1Byb3BlcnR5W10sIGFwPzogQXV0b1Byb3BlcnR5W10pOiBMaXN0ZW5lciB7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyOkxpc3RlbmVyXHJcbiAgICAgICAgaWYgKGZpbHRlck9ySGFuZGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB7IGY6IHVuZGVmaW5lZCwgICAgICBoOiB1bmRlZmluZWQsIHA6IFtdIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJPckhhbmRlciA9PT0gJ29iamVjdCcpIHsgLy9pcyBhbiBFdmVudEhhbmRsZXJcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB7IGY6IHVuZGVmaW5lZCwgICAgICBoOiBmaWx0ZXJPckhhbmRlciwgcDogW10gfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0T3JNc2dPckFQIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB7IGY6IGZpbHRlck9ySGFuZGVyLCBoOiB1bmRlZmluZWQsICAgICAgcDogZXZ0T3JNc2dPckFQIHx8IFtdIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBldnRPck1zZ09yQVAgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IHsgZjogZmlsdGVyT3JIYW5kZXIsIGg6IHsgW0FOWV9FVkVOVF06IGV2dE9yTXNnT3JBUCB9LCBwOiBhcCB8fCBbXSB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB7IGY6IGZpbHRlck9ySGFuZGVyLCBoOiBldnRPck1zZ09yQVAhLCAgcDogYXAgfHwgW10gfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5hZGQobGlzdGVuZXIpXHJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyXHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25uZWN0aW9uIHdpdGggQXV0b1Byb3BlcnR5IHN1cHBvcnQgYWRkZWQgYnkgcHJveHlcclxuICAgIHN0YXRpYyBjcmVhdGU8TT4oX2J1czogSVB1YlN1YiwgZXZlbnRzRGVmPzogRXZlbnREZWY8YW55Pik6IEF1dG9Qcm9wZXJ0aWVzPE0+ICYgQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShuZXcgQ29ubmVjdGlvbihfYnVzLCBldmVudHNEZWYpLCB7XHJcbiAgICAgICAgICAgIC8vVG9EbzogdGhpcyBpcyBhbiBvbGQgY29kZS4gdmVyaWZ5IEF1dG9wcm9wZXJ0eSBjcmVhdGlvbiBcclxuICAgICAgICAgICAgZ2V0KHRhcmdldDogYW55LCBwcm9wOiBzdHJpbmcsIHJlY2VpdmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgPyB0YXJnZXRbcHJvcF0gOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubjogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb3AsXHJcbiAgICAgICAgICAgICAgICB9IGFzIEF1dG9Qcm9wZXJ0eUNvbmYgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRvcGljTWF0Y2godG9waWM6IHN0cmluZywgcGF0dGVybjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFwYXR0ZXJuIHx8IHBhdHRlcm4gPT0gdG9waWMpIHJldHVybiB0cnVlXHJcbiAgICAgICAgZWxzZSBpZiAoIXRvcGljKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgICAgICAgbGV0IGV4cGVjdGVkID0gcGF0dGVybi5zcGxpdCgnLicpXHJcbiAgICAgICAgbGV0IGFjdHVhbCA9IHRvcGljLnNwbGl0KCcuJylcclxuICAgICAgICBpZiAoZXhwZWN0ZWQubGVuZ3RoID4gYWN0dWFsLmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0dWFsLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3R1YWxbaV0gIT0gZXhwZWN0ZWRbaV0gJiYgZXhwZWN0ZWRbaV0gIT0gXCIqXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBvbk1lc3NhZ2Uob3A6IGFueSwgbXNnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1RvcGljTWF0Y2ggPSAob3A6IGFueSwgbXNnOiBhbnksIGY6IE1zZ0ZpbHRlcikgPT5cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBmID09PSAnc3RyaW5nJyA/IHRoaXMudG9waWNNYXRjaChvcCwgZikgOiBmKG9wLCBtc2cpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lci5mIHx8IGlzVG9waWNNYXRjaChvcCwgbXNnLCBsaXN0ZW5lci5mKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGV2ZW50SWQgb2YgWy4uLk9iamVjdC5rZXlzKGxpc3RlbmVyLmgpLCBBTllfRVZFTlRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29uZCA9IHRoaXMuZXZlbnREZWYgPyB0aGlzLmV2ZW50RGVmW2V2ZW50SWRdIDogZXZlbnRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Ub0RvOiBleHRyYWN0IG1zZy50eXBlIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbmQgPT09ICdmdW5jdGlvbicgPyBjb25kKG9wLCBtc2cpIDogbXNnLnR5cGUgPT0gY29uZCkgfHwgZXZlbnRJZCA9PT0gQU5ZX0VWRU5UKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlcnMgPSBsaXN0ZW5lci5oW2V2ZW50SWRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLmZvckVhY2goaCA9PiBoKG9wLCBtc2cpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzKG9wLCBtc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcHVzaCB2YWx1ZXMgdG8gYXV0b1Byb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhcCBvZiBsaXN0ZW5lci5wIHx8IFtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwICYmIG1zZ1thcC5uYW1lXSAhPT0gdW5kZWZpbmVkICYmIGFwLnNldChtc2dbYXAubmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBUb0RvOiBpcyBpdCBuZWNlc3Nhcnk/XHJcbiAgICAgICAgICAgIC8vcHVzaCB2YWx1ZXMgdG8gYXV0b1Byb3BlcnRpZXNcclxuICAgICAgICAgICAgZm9yIChsZXQgYXAgb2YgdGhpcy5hdXRvUHJvcGVydGllcy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgYXAgJiYgbXNnW2FwLm5hbWVdICYmIGFwLnNldChtc2dbYXAubmFtZV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGluaXRCR0Z1bmN0aW9ucyB9IGZyb20gXCJjaHJvbWUtZXh0ZW5zaW9uLW1lc3NhZ2Utd3JhcHBlclwiO1xyXG5pbXBvcnQgKiBhcyBleHRlbnNpb24gZnJvbSAnZXh0ZW5zaW9uaXplcic7XHJcblxyXG5pbXBvcnQgKiBhcyBHbG9iYWxFdmVudEJ1cyBmcm9tICcuL2dsb2JhbEV2ZW50QnVzJztcclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlcIjtcclxuaW1wb3J0IHsgU3dpcGVyIH0gZnJvbSBcIi4vc3dpcGVyXCI7XHJcbmltcG9ydCB7IEF1dG9Qcm9wZXJ0aWVzLCBFdmVudERlZiwgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgV3NKc29uUnBjIH0gZnJvbSBcIi4vd3NKc29uUnBjXCI7XHJcbmltcG9ydCB7IE92ZXJsYXlNYW5hZ2VyIH0gZnJvbSBcIi4vb3ZlcmxheU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xyXG4gICAgcHVibGljIG92ZXJsYXlNYW5hZ2VyID0gbmV3IE92ZXJsYXlNYW5hZ2VyKCk7XHJcbiAgICBwcml2YXRlIF9wb3B1cE92ZXJsYXk6IE92ZXJsYXkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGV4dGVuc2lvbi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UgPT09IFwiT1BFTl9QQUlSSU5HX09WRVJMQVlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdFBhaXJpbmdPdmVybGF5KCkuZmluYWxseSgoKSA9PiBzZW5kUmVzcG9uc2UoKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09IFwiVE9HR0xFX09WRVJMQVlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVBvcHVwT3ZlcmxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnb2JqZWN0JyAmJiBtZXNzYWdlLnR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ09QRU5fREVQTE9ZX09WRVJMQVknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0RGVwbG95T3ZlcmxheShtZXNzYWdlLnBheWxvYWQpLmZpbmFsbHkoKCkgPT4gc2VuZFJlc3BvbnNlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgc3dpcGVyLm9uKFwibGVmdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wb3B1cE92ZXJsYXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlUG9wdXBPdmVybGF5KClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwT3ZlcmxheS5vcGVuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN3aXBlci5vbihcInJpZ2h0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vdmVybGF5TWFuYWdlci5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdWJsaXNoID0gKHRvcGljOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4gR2xvYmFsRXZlbnRCdXMucHVibGlzaCh0b3BpYywgZGF0YSlcclxuICAgIHB1YmxpYyBzdWJzY3JpYmUgPSAodG9waWM6IHN0cmluZywgZnVuYzogRnVuY3Rpb24pID0+IEdsb2JhbEV2ZW50QnVzLnN1YnNjcmliZSh0b3BpYywgZnVuYylcclxuXHJcbiAgICBwdWJsaWMgd2FpdFBhaXJpbmdPdmVybGF5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWlyaW5nVXJsID0gZXh0ZW5zaW9uLmV4dGVuc2lvbi5nZXRVUkwoJ3BhaXJpbmcuaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IE92ZXJsYXkodGhpcy5vdmVybGF5TWFuYWdlciwgcGFpcmluZ1VybCwgJ1dhbGxldCcpO1xyXG4gICAgICAgICAgICBvdmVybGF5Lm9wZW4oKTtcclxuICAgICAgICAgICAgLy8gVG9EbzogYWRkIHRpbWVvdXQ/XHJcbiAgICAgICAgICAgIG92ZXJsYXkub25tZXNzYWdlID0gKHRvcGljLCBtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9waWMgPT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b3BpYyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhaXREZXBsb3lPdmVybGF5KHBheWxvYWQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWlyaW5nVXJsID0gZXh0ZW5zaW9uLmV4dGVuc2lvbi5nZXRVUkwoJ2RlcGxveS5odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgT3ZlcmxheSh0aGlzLm92ZXJsYXlNYW5hZ2VyLCBwYWlyaW5nVXJsLCAnRGVwbG95Jyk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkub3BlbigoKSA9PiBvdmVybGF5LnNlbmQoJ2RhdGEnLCBbcGF5bG9hZF0pKTtcclxuICAgICAgICAgICAgLy8gVG9EbzogYWRkIHRpbWVvdXQ/XHJcbiAgICAgICAgICAgIG92ZXJsYXkub25tZXNzYWdlID0gKHRvcGljLCBtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9waWMgPT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b3BpYyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF90b2dnbGVQb3B1cE92ZXJsYXkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cE92ZXJsYXk/LnJlZ2lzdGVyZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFpcmluZ1VybCA9IGV4dGVuc2lvbi5leHRlbnNpb24uZ2V0VVJMKCdwb3B1cC5odG1sJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwT3ZlcmxheSA9IG5ldyBPdmVybGF5KHRoaXMub3ZlcmxheU1hbmFnZXIsIHBhaXJpbmdVcmwsICdEYXBwbGV0cycpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cE92ZXJsYXkub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheU1hbmFnZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX3NlbmRXYWxsZXRDb25uZWN0VHgoZGFwcGxldElkLCBtZXRhZGF0YSwgY2FsbGJhY2s6IChlOiB7IHR5cGU6IHN0cmluZywgZGF0YT86IGFueSB9KSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRnVuY3Rpb25zID0gYXdhaXQgaW5pdEJHRnVuY3Rpb25zKGV4dGVuc2lvbik7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsb2FkRGFwcGxldCxcclxuICAgICAgICAgICAgbG9hZERhcHBsZXRGcmFtZXMsXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uQ3JlYXRlZCxcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25SZWplY3RlZCxcclxuICAgICAgICAgICAgY2hlY2tDb25uZWN0aW9uLFxyXG4gICAgICAgICAgICBnZXRHbG9iYWxDb25maWcsXHJcbiAgICAgICAgICAgIHNlbmRMZWdhY3lUcmFuc2FjdGlvblxyXG4gICAgICAgIH0gPSBiYWNrZ3JvdW5kRnVuY3Rpb25zO1xyXG5cclxuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IGNoZWNrQ29ubmVjdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soeyB0eXBlOiBcIlBBSVJJTkdcIiB9KTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy53YWl0UGFpcmluZ092ZXJsYXkoKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soeyB0eXBlOiBcIlBBSVJFRFwiIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FsbGJhY2soeyB0eXBlOiBcIlBFTkRJTkdcIiB9KTtcclxuXHJcbiAgICAgICAgbGV0IGRhcHBsZXRSZXN1bHQgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB7IHdhbGxldEluZm8gfSA9IGF3YWl0IGdldEdsb2JhbENvbmZpZygpO1xyXG5cclxuICAgICAgICBpZiAod2FsbGV0SW5mby5wcm90b2NvbFZlcnNpb24gPT09IFwiMC4yLjBcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBpcyBEYXBwbGV0IEZyYW1lcyBjb21wYXRpYmxlLiBTZW5kaW5nIERhcHBsZXQgRnJhbWVzIHRyYW5zYWN0aW9uLi4uXCIpO1xyXG4gICAgICAgICAgICBkYXBwbGV0UmVzdWx0ID0gYXdhaXQgbG9hZERhcHBsZXRGcmFtZXMoZGFwcGxldElkLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3YWxsZXRJbmZvLnByb3RvY29sVmVyc2lvbiA9PT0gXCIwLjEuMFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGlzIERhcHBsZXQgY29tcGF0aWJsZS4gU2VuZGluZyBEYXBwbGV0IHRyYW5zYWN0aW9uLi4uXCIpO1xyXG4gICAgICAgICAgICBkYXBwbGV0UmVzdWx0ID0gYXdhaXQgbG9hZERhcHBsZXQoZGFwcGxldElkLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgaXMgRGFwcGxldCBpbmNvbXBhdGlibGUuIFNob3dpbmcgZGFwcGxldCB2aWV3Li4uXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2FpdEFwcHJvdmluZyA9IGZ1bmN0aW9uICgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpcmluZ1VybCA9IGV4dGVuc2lvbi5leHRlbnNpb24uZ2V0VVJMKCdkYXBwbGV0Lmh0bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IE92ZXJsYXkobWUub3ZlcmxheU1hbmFnZXIsIHBhaXJpbmdVcmwsICdEYXBwbGV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogaW1wbGVtZW50IG11bHRpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5Lm9wZW4oKCkgPT4gb3ZlcmxheS5zZW5kKCd0eG1ldGEnLCBbZGFwcGxldElkLCBtZXRhZGF0YV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUb0RvOiBhZGQgdGltZW91dD9cclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5Lm9uTWVzc2FnZSgodG9waWMsIG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvcGljID09PSAnYXBwcm92ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3BpYyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgd2FpdEFwcHJvdmluZygpO1xyXG4gICAgICAgICAgICBkYXBwbGV0UmVzdWx0ID0gYXdhaXQgc2VuZExlZ2FjeVRyYW5zYWN0aW9uKGRhcHBsZXRJZCwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhcHBsZXRSZXN1bHQpIHtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25DcmVhdGVkKGRhcHBsZXRSZXN1bHQpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7IHR5cGU6IFwiQ1JFQVRFRFwiLCBkYXRhOiBkYXBwbGV0UmVzdWx0IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uUmVqZWN0ZWQoKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soeyB0eXBlOiBcIlJFSkVDVEVEXCIgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGFwcGxldFJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29ubmVjdDxNPihjZmc6IHsgdXJsOiBzdHJpbmcgfSwgZXZlbnREZWY/OiBFdmVudERlZjxhbnk+KTogQXV0b1Byb3BlcnRpZXM8TT4gJiBDb25uZWN0aW9uIHtcclxuICAgICAgICBjb25zdCBycGMgPSBuZXcgV3NKc29uUnBjKGNmZy51cmwpO1xyXG4gICAgICAgIGNvbnN0IGNvbm4gPSBDb25uZWN0aW9uLmNyZWF0ZTxNPihycGMsIGV2ZW50RGVmKTtcclxuICAgICAgICByZXR1cm4gY29ubjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FsbGV0PE0+KGNmZz86IHt9LCBldmVudERlZj86IEV2ZW50RGVmPGFueT4pOiBBdXRvUHJvcGVydGllczxNPiAmIENvbm5lY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcclxuICAgICAgICBjb25zdCB0cmFuc3BvcnQgPSB7XHJcbiAgICAgICAgICAgIF90eENvdW50OiAwLFxyXG4gICAgICAgICAgICBfaGFuZGxlcjogbnVsbCxcclxuICAgICAgICAgICAgZXhlYzogKGRhcHBsZXRJZDogc3RyaW5nLCBjdHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSArK3RyYW5zcG9ydC5fdHhDb3VudDtcclxuICAgICAgICAgICAgICAgIG1lLl9zZW5kV2FsbGV0Q29ubmVjdFR4KGRhcHBsZXRJZCwgY3R4LCAoZSkgPT4gdHJhbnNwb3J0Ll9oYW5kbGVyKGlkLCBlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVzb2x2ZShpZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbk1lc3NhZ2U6IChoYW5kbGVyOiAodG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnQuX2hhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmY6ICgpID0+IHRyYW5zcG9ydC5faGFuZGxlciA9IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29ubiA9IENvbm5lY3Rpb24uY3JlYXRlPE0+KHRyYW5zcG9ydCwgZXZlbnREZWYpO1xyXG4gICAgICAgIHJldHVybiBjb25uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVybGF5PE0+KGNmZzogeyB1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZyB9LCBldmVudERlZj86IEV2ZW50RGVmPGFueT4pOiBBdXRvUHJvcGVydGllczxNPiAmIENvbm5lY3Rpb24ge1xyXG4gICAgICAgIGNvbnN0IF9vdmVybGF5ID0gbmV3IE92ZXJsYXkodGhpcy5vdmVybGF5TWFuYWdlciwgY2ZnLnVybCwgY2ZnLnRpdGxlKTtcclxuICAgICAgICBjb25zdCBjb25uID0gQ29ubmVjdGlvbi5jcmVhdGU8TT4oX292ZXJsYXksIGV2ZW50RGVmKTtcclxuICAgICAgICByZXR1cm4gY29ubjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb0RvOiByZW1vdmUgaXQgb3IgaW1wbGVtZW50IVxyXG4gICAgY29udGV4dFN0YXJ0ZWQoY29udGV4dElkczogYW55W10sIHBhcmVudENvbnRleHQ/OiBzdHJpbmcpOiB2b2lkIHsgfVxyXG4gICAgY29udGV4dEZpbmlzaGVkKGNvbnRleHRJZHM6IGFueVtdLCBwYXJlbnRDb250ZXh0Pzogc3RyaW5nKTogdm9pZCB7IH1cclxufSIsImltcG9ydCAqIGFzIGV4dGVuc2lvbiBmcm9tICdleHRlbnNpb25pemVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoKHRvcGljOiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgZXh0ZW5zaW9uLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcIkVWRU5UQlVTX1BVQkxJU0hcIiwgcGF5bG9hZDogeyB0b3BpYywgZGF0YSB9IH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKHRvcGljOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICBleHRlbnNpb24ucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHsgdG9waWMsIGRhdGEgfSkgPT4gZnVuYyh0b3BpYywgZGF0YSkpO1xyXG4gICAgZXh0ZW5zaW9uLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcIkVWRU5UQlVTX1NVQlNDUklCRVwiLCBwYXlsb2FkOiB7IHRvcGljIH0gfSk7XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InXHJcbmltcG9ydCBDb3JlIGZyb20gJy4vY29yZSc7XHJcbmltcG9ydCAqIGFzIGV4dGVuc2lvbiBmcm9tICdleHRlbnNpb25pemVyJztcclxuXHJcbnZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgY29uc3QgY29yZSA9IG5ldyBDb3JlKCk7IC8vIFRvRG86IGlzIGl0IGdsb2JhbCBmb3IgYWxsIG1vZHVsZXM/XHJcbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoY29yZSk7XHJcbiAgICAgICAgZXh0ZW5zaW9uLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgIW1lc3NhZ2UudHlwZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJGRUFUVVJFX0FDVElWQVRFRFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gbWVzc2FnZS5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGZlYXR1cmUgJHtmZWF0dXJlLm5hbWV9IyR7ZmVhdHVyZS5icmFuY2h9QCR7ZmVhdHVyZS52ZXJzaW9ufSB3YXMgYWN0aXZhdGVkLmAsICk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBpbmplY3Rvci5sb2FkTW9kdWxlcyhbZmVhdHVyZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJGRUFUVVJFX0RFQUNUSVZBVEVEXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmUgPSBtZXNzYWdlLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZmVhdHVyZSAke2ZlYXR1cmUubmFtZX0jJHtmZWF0dXJlLmJyYW5jaH1AJHtmZWF0dXJlLnZlcnNpb259IHdhcyBkZWFjdGl2YXRlZC5gLCApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgaW5qZWN0b3IudW5sb2FkTW9kdWxlcyhbZmVhdHVyZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJDVVJSRU5UX0NPTlRFWFRfSURTXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZShpbmplY3Rvci5hdmFpbGFibGVDb250ZXh0SWRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxufSk7XHJcbm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTsiLCJpbXBvcnQgeyBpbml0QkdGdW5jdGlvbnMgfSBmcm9tIFwiY2hyb21lLWV4dGVuc2lvbi1tZXNzYWdlLXdyYXBwZXJcIjtcclxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlJztcclxuaW1wb3J0IHsgbWF4U2F0aXNmeWluZyB9IGZyb20gJ3NlbXZlcic7XHJcbmltcG9ydCB7IFN1YnNjcmliZU9wdGlvbnMgfSBmcm9tICcuL292ZXJsYXknO1xyXG5pbXBvcnQgeyBNb2R1bGVUeXBlcywgREVGQVVMVF9CUkFOQ0hfTkFNRSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5pbXBvcnQgKiBhcyBleHRlbnNpb24gZnJvbSAnZXh0ZW5zaW9uaXplcic7XHJcbmltcG9ydCB7IElSZXNvbHZlciwgSUNvbnRlbnRBZGFwdGVyLCBJRmVhdHVyZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgTWFuaWZlc3QgZnJvbSBcIi4uL2JhY2tncm91bmQvbW9kZWxzL21hbmlmZXN0XCI7XHJcbmltcG9ydCBNYW5pZmVzdERUTyBmcm9tIFwiLi4vYmFja2dyb3VuZC9kdG8vbWFuaWZlc3REVE9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XHJcbiAgICBwdWJsaWMgYXZhaWxhYmxlQ29udGV4dElkczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiB7XHJcbiAgICAgICAgbWFuaWZlc3Q6IE1hbmlmZXN0LFxyXG4gICAgICAgIGNsYXp6OiBhbnksXHJcbiAgICAgICAgaW5zdGFuY2U/OiBhbnksXHJcbiAgICAgICAgb3JkZXI6IG51bWJlcixcclxuICAgICAgICBjb250ZXh0SWRzOiBzdHJpbmdbXVxyXG4gICAgfVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvcmU6IENvcmUpIHtcclxuICAgICAgICB0aGlzLl9zZXRDb250ZXh0QWN0aXZpdnR5KFt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVdLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5leHBvcnRzID0ge307IC8vIGZvciBDb21tb25KUyBtb2R1bGVzIGNvbXBhdGliaWxpdHlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbG9hZE1vZHVsZXMobW9kdWxlczogeyBuYW1lOiBzdHJpbmcsIGJyYW5jaDogc3RyaW5nLCB2ZXJzaW9uOiBzdHJpbmcsIG9yZGVyOiBudW1iZXIsIGNvbnRleHRJZHM6IHN0cmluZ1tdIH1bXSkge1xyXG4gICAgICAgIGlmICghbW9kdWxlcyB8fCAhbW9kdWxlcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCB7IGdldE1vZHVsZXNXaXRoRGVwcyB9ID0gYXdhaXQgaW5pdEJHRnVuY3Rpb25zKGV4dGVuc2lvbik7XHJcbiAgICAgICAgY29uc3QgbG9hZGVkTW9kdWxlczogeyBtYW5pZmVzdDogTWFuaWZlc3QsIHNjcmlwdDogc3RyaW5nIH1bXSA9IGF3YWl0IGdldE1vZHVsZXNXaXRoRGVwcyhtb2R1bGVzKTtcclxuICAgICAgICBjb25zdCBvcmRlcmVkTW9kdWxlcyA9IGxvYWRlZE1vZHVsZXMubWFwKChsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBtb2R1bGVzLmZpbmQobSA9PiBtLm5hbWUgPT09IGwubWFuaWZlc3QubmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgbS5icmFuY2ggPT09IGwubWFuaWZlc3QuYnJhbmNoICYmXHJcbiAgICAgICAgICAgICAgICBtLnZlcnNpb24gPT09IGwubWFuaWZlc3QudmVyc2lvbik7XHJcbiAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgLi4ubCxcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBtPy5vcmRlcixcclxuICAgICAgICAgICAgICAgIGNvbnRleHRJZHM6IG0/LmNvbnRleHRJZHMgfHwgW3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fcHJvY2Vzc01vZHVsZXMob3JkZXJlZE1vZHVsZXMpO1xyXG5cclxuICAgICAgICAvLyBtb2R1bGUgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0cnlbaV0uaW5zdGFuY2UpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5W2ldLmluc3RhbmNlID0gbmV3IHRoaXMucmVnaXN0cnlbaV0uY2xhenooKTtcclxuICAgICAgICAgICAgY29uc3QgbSA9IHRoaXMucmVnaXN0cnlbaV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGUgbW9kdWxlICR7bS5tYW5pZmVzdC5uYW1lfSMke20ubWFuaWZlc3QuYnJhbmNofUAke20ubWFuaWZlc3QudmVyc2lvbn0gd2FzIGxvYWRlZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZlYXR1cmUgYXR0YWNoaW5nXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lzdHJ5W2ldLm1hbmlmZXN0LnR5cGUgPT09IE1vZHVsZVR5cGVzLkZlYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmU6IElGZWF0dXJlID0gdGhpcy5yZWdpc3RyeVtpXS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmUub3JkZXJJbmRleCA9IHRoaXMucmVnaXN0cnlbaV0ub3JkZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBmaXggY29udGV4dCBpZHMgYWRkaW5nXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlLmNvbnRleHRJZHMgPSB0aGlzLnJlZ2lzdHJ5W2ldLmNvbnRleHRJZHMubWFwKGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbaGVhZENvbnRleHRJZCwgLi4udGFpbENvbnRleHRJZF0gPSBpZC5zcGxpdCgnLycpOyAvLyBUb0RvOiBjaGVjayBoZWFkP1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWlsQ29udGV4dElkLmpvaW4oJy8nKTtcclxuICAgICAgICAgICAgICAgIH0pLmZpbHRlcihpZCA9PiAhIWlkKTtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmUuYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgdW5sb2FkTW9kdWxlcyhtb2R1bGVzOiB7IG5hbWU6IHN0cmluZywgYnJhbmNoOiBzdHJpbmcsIHZlcnNpb246IHN0cmluZyB9W10pIHtcclxuICAgICAgICBtb2R1bGVzLm1hcChtID0+IHRoaXMucmVnaXN0cnkuZmluZChyID0+XHJcbiAgICAgICAgICAgIG0ubmFtZSA9PT0gci5tYW5pZmVzdC5uYW1lICYmXHJcbiAgICAgICAgICAgIG0uYnJhbmNoID09PSByLm1hbmlmZXN0LmJyYW5jaCAmJlxyXG4gICAgICAgICAgICBtLnZlcnNpb24gPT09IHIubWFuaWZlc3QudmVyc2lvblxyXG4gICAgICAgICkpLmZvckVhY2gobSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBtLmluc3RhbmNlLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBtb2R1bGUgJHttLm1hbmlmZXN0Lm5hbWV9IyR7bS5tYW5pZmVzdC5icmFuY2h9QCR7bS5tYW5pZmVzdC52ZXJzaW9ufSB3YXMgdW5sb2FkZWQuYCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cnkgPSB0aGlzLnJlZ2lzdHJ5LmZpbHRlcihyID0+IHIgIT09IG0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX3Byb2Nlc3NNb2R1bGVzKG1vZHVsZXM6IHsgbWFuaWZlc3Q6IE1hbmlmZXN0LCBzY3JpcHQ6IHN0cmluZywgb3JkZXI6IG51bWJlciwgY29udGV4dElkczogc3RyaW5nW10gfVtdKSB7XHJcbiAgICAgICAgY29uc3QgeyBvcHRpbWl6ZURlcGVuZGVuY3ksIGdldE1vZHVsZXNXaXRoRGVwcywgYWRkRXZlbnQgfSA9IGF3YWl0IGluaXRCR0Z1bmN0aW9ucyhleHRlbnNpb24pO1xyXG4gICAgICAgIGNvbnN0IHsgY29yZSB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB7IG1hbmlmZXN0LCBzY3JpcHQsIG9yZGVyLCBjb250ZXh0SWRzIH0gb2YgbW9kdWxlcykge1xyXG4gICAgICAgICAgICAvLyBNb2R1bGUgaXMgbG9hZGVkIGFscmVhZHlcclxuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZE1vZHVsZSA9IHRoaXMucmVnaXN0cnkuZmluZChtID0+IG0ubWFuaWZlc3QubmFtZSA9PSBtYW5pZmVzdC5uYW1lICYmIG0ubWFuaWZlc3QuYnJhbmNoID09IG1hbmlmZXN0LmJyYW5jaCAmJiBtLm1hbmlmZXN0LnZlcnNpb24gPT0gbWFuaWZlc3QudmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkTW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dElkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkTW9kdWxlLmNvbnRleHRJZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZE1vZHVsZS5jb250ZXh0SWRzLnB1c2goLi4uY29udGV4dElkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZE1vZHVsZS5jb250ZXh0SWRzID0gWy4uLmNvbnRleHRJZHNdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUb0RvOiBlbGVtZW5hdGUgdGhlIGJvaWxlcnBsYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcmVXcmFwcGVyID0ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheU1hbmFnZXI6IGNvcmUub3ZlcmxheU1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICBwdWJsaXNoOiBjb3JlLnB1Ymxpc2gsXHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmU6IGNvcmUuc3Vic2NyaWJlLFxyXG4gICAgICAgICAgICAgICAgd2FpdFBhaXJpbmdPdmVybGF5OiBjb3JlLndhaXRQYWlyaW5nT3ZlcmxheSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTdGFydGVkOiAoY29udGV4dElkczogYW55W10sIHBhcmVudENvbnRleHQ6IHN0cmluZykgPT4gdGhpcy5fc2V0Q29udGV4dEFjdGl2aXZ0eShjb250ZXh0SWRzLCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAocGFyZW50Q29udGV4dCA/IGAvJHtwYXJlbnRDb250ZXh0fWAgOiBcIlwiKSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RmluaXNoZWQ6IChjb250ZXh0SWRzOiBhbnlbXSwgcGFyZW50Q29udGV4dDogc3RyaW5nKSA9PiB0aGlzLl9zZXRDb250ZXh0QWN0aXZpdnR5KGNvbnRleHRJZHMsIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArIChwYXJlbnRDb250ZXh0ID8gYC8ke3BhcmVudENvbnRleHR9YCA6IFwiXCIpLCBmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBjb3JlLmNvbm5lY3QuYmluZChjb3JlKSxcclxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IGNvcmUub3ZlcmxheS5iaW5kKGNvcmUpLFxyXG4gICAgICAgICAgICAgICAgd2FsbGV0OiBjb3JlLndhbGxldC5iaW5kKGNvcmUpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBleGVjU2NyaXB0ID0gbmV3IEZ1bmN0aW9uKCdDb3JlJywgJ1N1YnNjcmliZU9wdGlvbnMnLCAnSW5qZWN0JywgJ0luamVjdGFibGUnLCBzY3JpcHQpO1xyXG4gICAgICAgICAgICBpZiAobWFuaWZlc3QudHlwZSA9PSBNb2R1bGVUeXBlcy5SZXNvbHZlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJyYW5jaDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IGFkZCBkZXBlbmRlbmN5IHN1cHBvcnQgZm9yIHJlc29sdmVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmplY3REZWNvcmF0b3IgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmplY3RhYmxlRGVjb3JhdG9yID0gKGNvbnN0cnVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZXI6IElSZXNvbHZlciA9IG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaCA9IHJlc29sdmVyLmdldEJyYW5jaCgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBkbyBub3QgZXhlYyByZXNvbHZlciB0d2ljZSAod2hlbiBzZWNvbmQgZmVhdHVyZSBpcyBhY3RpdmF0ZWQpXHJcbiAgICAgICAgICAgICAgICBleGVjU2NyaXB0KGNvcmVXcmFwcGVyLCBTdWJzY3JpYmVPcHRpb25zLCBpbmplY3REZWNvcmF0b3IsIGluamVjdGFibGVEZWNvcmF0b3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KCdCcmFuY2ggcmVzb2x2aW5nJywgYFJlc29sdmVyIG9mIFwiJHttYW5pZmVzdC5uYW1lfVwiIGRlZmluZWQgdGhlIFwiJHticmFuY2h9XCIgYnJhbmNoYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpbWl6ZWRCcmFuY2ggPSBhd2FpdCBvcHRpbWl6ZURlcGVuZGVuY3kobWFuaWZlc3QubmFtZSwgYnJhbmNoLCBtYW5pZmVzdC52ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdEZXBlbmRlbmNpZXMgPSBhd2FpdCBnZXRNb2R1bGVzV2l0aERlcHMoW29wdGltaXplZEJyYW5jaF0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fcHJvY2Vzc01vZHVsZXMobWlzc2luZ0RlcGVuZGVuY2llcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUb0RvOiBkZXNjcmliZSBpdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5qZWN0YWJsZURlY29yYXRvciA9IChjb25zdHJ1Y3RvcjogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVnaXN0cnkuZmluZChtID0+IG0ubWFuaWZlc3QubmFtZSA9PSBtYW5pZmVzdC5uYW1lICYmIG0ubWFuaWZlc3QuYnJhbmNoID09IG1hbmlmZXN0LmJyYW5jaCAmJiBtLm1hbmlmZXN0LnZlcnNpb24gPT0gbWFuaWZlc3QudmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0OiBtYW5pZmVzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXp6OiBjb25zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dElkczogY29udGV4dElkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRvRG86IGRlc2NyaWJlIGl0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmplY3REZWNvcmF0b3IgPSAobmFtZTogc3RyaW5nKSA9PiAodGFyZ2V0LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gZGVzY3JpcHRvciB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogRml4IGVycm9yIFwiVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0eSAnaW5zdGFuY2UnIG9mIHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25zID0gdGhpcy5yZWdpc3RyeS5maWx0ZXIobSA9PiBtLm1hbmlmZXN0Lm5hbWUgPT0gbmFtZSkubWFwKG0gPT4gbS5tYW5pZmVzdC52ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeSA9IG1hbmlmZXN0LmRlcGVuZGVuY2llc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IGNoZWNrIGBkZXBlbmRlbmN5YCBmb3IgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IFNob3VsZCBiZSBtb3ZlZCB0byB0aGUgYmFja2dyb3VuZD8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvRG86IEZldGNoIHByZWZpeCBmcm9tIGdsb2JhbCBzZXR0aW5ncy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9EbzogUmVwbGFjZSAnPj0nIHRvICdeJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSAnPj0nOyAvLyBodHRwczovL2RldmhpbnRzLmlvL3NlbXZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHByZWZpeCArICh0eXBlb2YgZGVwZW5kZW5jeSA9PT0gXCJzdHJpbmdcIiA/IGRlcGVuZGVuY3kgOiBkZXBlbmRlbmN5W0RFRkFVTFRfQlJBTkNIX05BTUVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFZlciA9IG1heFNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmZpbmQobSA9PiBtLm1hbmlmZXN0Lm5hbWUgPT0gbmFtZSAmJiBtLm1hbmlmZXN0LnZlcnNpb24gPT0gbWF4VmVyKS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGV4ZWNTY3JpcHQoY29yZVdyYXBwZXIsIFN1YnNjcmliZU9wdGlvbnMsIGluamVjdERlY29yYXRvciwgaW5qZWN0YWJsZURlY29yYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfc2V0Q29udGV4dEFjdGl2aXZ0eShjb250ZXh0SWRzOiBhbnlbXSwgcGFyZW50Q29udGV4dDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnRleHRJZHMgPSBwYXJlbnRDb250ZXh0ID8gY29udGV4dElkcy5tYXAoKHsgaWQgfSkgPT4gcGFyZW50Q29udGV4dCArICcvJyArIGlkKSA6IGNvbnRleHRJZHM7XHJcblxyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0SWRzLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ29udGV4dElkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUNvbnRleHRJZHMucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRJZHMuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlQ29udGV4dElkcy5pbmRleE9mKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmF2YWlsYWJsZUNvbnRleHRJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHRlbnNpb24ucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHR5cGU6IGlzQWN0aXZlID8gXCJDT05URVhUX1NUQVJURURcIiA6IFwiQ09OVEVYVF9GSU5JU0hFRFwiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7IGNvbnRleHRJZHMgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2gobmFtZTpzdHJpbmcsIGRhdGE6YW55KSB7XHJcbiAgICBsZXQgZTphbnkgPSBuZXcgRXZlbnQobmFtZSlcclxuICAgIGUuZGF0YSA9IGRhdGFcclxuICAgIGRpc3BhdGNoRXZlbnQoZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShuYW1lOiBzdHJpbmcsIGhhbmRsZXI6IChlOkV2ZW50KT0+dm9pZCkge1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5zdWJzY3JpYmUobmFtZTogc3RyaW5nLCBoYW5kbGVyOiAoZTpFdmVudCk9PnZvaWQpIHtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcilcclxufSIsImltcG9ydCB7IE92ZXJsYXlNYW5hZ2VyIH0gZnJvbSAnLi9vdmVybGF5TWFuYWdlcic7XHJcbmltcG9ydCB7IElQdWJTdWIgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBlbnVtIFN1YnNjcmliZU9wdGlvbnMge1xyXG4gICAgU0lOR0xFX1RIUkVBRCxcclxuICAgIE1VTFRJX1RIUkVBRFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJsYXkgaW1wbGVtZW50cyBJUHViU3ViIHtcclxuICAgIHByaXZhdGUgX21hbmFnZXI6IE92ZXJsYXlNYW5hZ2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3F1ZXVlOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaXNGcmFtZUxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfbXNnQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyByZWdpc3RlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25tZXNzYWdlOiAodG9waWM6IHN0cmluZywgbWVzc2FnZTogYW55KSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyOiBPdmVybGF5TWFuYWdlciwgdXJpOiBzdHJpbmcsIHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYWdlciA9IG1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgIHRoaXMuZnJhbWUuc3JjID0gdXJpO1xyXG4gICAgICAgIHRoaXMuZnJhbWUuYWxsb3dGdWxsc2NyZWVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0ZyYW1lTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXVlLmZvckVhY2gobXNnID0+IHRoaXMuX3NlbmQobXNnKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICAvL30sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgdGFiLiBJZiBpdCBkb2Vzbid0IGV4aXN0LCB0aGVuIGFkZHMgdGFiIHRvIHRoZSBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW4oY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX21hbmFnZXIucmVnaXN0ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbWFuYWdlci5hY3RpdmF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9tYW5hZ2VyLm9wZW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJhbWVMb2FkZWQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoe30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoe30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZEhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxvYWRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRhYiBmcm9tIHRoZSBwYW5lbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX21hbmFnZXIudW5yZWdpc3Rlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VuZCh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBtc2cgPSBKU09OLnN0cmluZ2lmeSh7IHRvcGljLCBhcmdzOiBtZXNzYWdlIH0pOyAvLyBUb0RvOiBmaXggYXJnc1xyXG4gICAgICAgIHRoaXMuZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtc2csICcqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VuZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzRnJhbWVMb2FkZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKGRhdGEsICcqJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKyt0aGlzLl9tc2dDb3VudDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgdG9waWMsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zb3VyY2UgIT0gdGhpcy5mcmFtZS5jb250ZW50V2luZG93KSByZXR1cm47IC8vIExpc3RlbiBtZXNzYWdlcyBmcm9tIG9ubHkgb3VyIGZyYW1lXHJcbiAgICAgICAgICAgICAgICBpZiAoIWUuZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnRvcGljICYmIGRhdGEuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1lc3NhZ2UoaGFuZGxlcjogKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5zb3VyY2UgIT0gdGhpcy5mcmFtZS5jb250ZW50V2luZG93KSByZXR1cm47IC8vIExpc3RlbiBtZXNzYWdlcyBmcm9tIG9ubHkgb3VyIGZyYW1lXHJcbiAgICAgICAgICAgIGlmICghZS5kYXRhKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdG9waWMsIG1lc3NhZ2UgfSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgICAgICAgaWYgKHRvcGljICE9PSB1bmRlZmluZWQpIGhhbmRsZXIodG9waWMsIG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9mZjogKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheSc7XHJcblxyXG4vLyBUb0RvOiBjbGVhbiBjbGFzcyBuYW1lc1xyXG5jb25zdCBUYWJJdGVtQ2xhc3MgPSAncGFnZU5hdl9fdGFiSXRlbSc7XHJcbmNvbnN0IENvbnRlbnRJdGVtQ2xhc3MgPSAncGFnZU5hdl9fY29udGVudEl0ZW0nO1xyXG5jb25zdCBBY3RpdmVUYWJIZWFkZXJDbGFzcyA9ICdwYWdlTmF2X190YWJJdGVtLS1hY3RpdmUnO1xyXG5jb25zdCBBY3RpdmVUYWJDb250ZW50Q2xhc3MgPSAncGFnZU5hdl9fY29udGVudEl0ZW0tLWFjdGl2ZSc7XHJcbmNvbnN0IENvbGxhcHNlZE92ZXJsYXlDbGFzcyA9ICdvdmVybGF5LWNvbGxhcHNlZCc7XHJcbmNvbnN0IEhpZGRlbk92ZXJsYXlDbGFzcyA9ICdvdmVybGF5LWhpZGRlbic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgX3BhbmVsOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF90YWJMaXN0OiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9jb250ZW50TGlzdDogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZlT3ZlcmxheTogT3ZlcmxheSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGFic1JlZ2lzdHJ5OiB7XHJcbiAgICAgICAgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICB0YWJJdGVtOiBIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICBjb250ZW50SXRlbTogSFRNTERpdkVsZW1lbnRcclxuICAgIH1bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFNpZGUgcGFuZWxcclxuICAgICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXBwbGV0cy1vdmVybGF5LW1hbmFnZXJcIik7XHJcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1mcmFtZScsICdvdmVybGF5LW91dGVyJywgQ29sbGFwc2VkT3ZlcmxheUNsYXNzLCBIaWRkZW5PdmVybGF5Q2xhc3MpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWwpO1xyXG4gICAgICAgIHRoaXMuX3BhbmVsID0gcGFuZWw7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1Y2tldEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgYnVja2V0QmFyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktYnVja2V0LWJhcicpO1xyXG4gICAgICAgIHBhbmVsLmFwcGVuZENoaWxkKGJ1Y2tldEJhcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvb2xCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRvb2xCYXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS10b29sYmFyJyk7XHJcbiAgICAgICAgcGFuZWwuYXBwZW5kQ2hpbGQodG9vbEJhcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB0b29sQmFyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gXCJUb2dnbGUgb3IgUmVzaXplIFNpZGViYXJcIjtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1mcmFtZS1idXR0b24nLCAnb3ZlcmxheS1mcmFtZS1idXR0b24tLXNpZGViYXJfdG9nZ2xlJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICfih4QnO1xyXG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy50b2dnbGUoKTtcclxuICAgICAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgICAgICAvLyBUYWJzXHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgncGFnZU5hdicpO1xyXG4gICAgICAgIHBhbmVsLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhYkxpc3QuY2xhc3NMaXN0LmFkZCgncGFnZU5hdl9fdGFiTGlzdCcpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh0YWJMaXN0KTtcclxuICAgICAgICB0aGlzLl90YWJMaXN0ID0gdGFiTGlzdDtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRlbnRMaXN0LmNsYXNzTGlzdC5hZGQoJ3BhZ2VOYXZfX2NvbnRlbnRMaXN0Jyk7XHJcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGNvbnRlbnRMaXN0KTtcclxuICAgICAgICB0aGlzLl9jb250ZW50TGlzdCA9IGNvbnRlbnRMaXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4cGFuZHMgdGhlIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlbigpIHtcclxuICAgICAgICB0aGlzLl9wYW5lbC5jbGFzc0xpc3QucmVtb3ZlKENvbGxhcHNlZE92ZXJsYXlDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsYXBzZXMgdGhlIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFuZWwuY2xhc3NMaXN0LmFkZChDb2xsYXBzZWRPdmVybGF5Q2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvd3MgdGhlIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICB0aGlzLl9wYW5lbC5jbGFzc0xpc3QucmVtb3ZlKEhpZGRlbk92ZXJsYXlDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlcyB0aGUgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuX3BhbmVsLmNsYXNzTGlzdC5hZGQoSGlkZGVuT3ZlcmxheUNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuX3BhbmVsLmNsYXNzTGlzdC50b2dnbGUoQ29sbGFwc2VkT3ZlcmxheUNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIob3ZlcmxheTogT3ZlcmxheSkge1xyXG4gICAgICAgIG92ZXJsYXkucmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RhYnNSZWdpc3RyeS5maWx0ZXIodCA9PiB0Lm92ZXJsYXkgPT09IG92ZXJsYXkpLmxlbmd0aCA+IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhYkl0ZW0uY2xhc3NMaXN0LmFkZChUYWJJdGVtQ2xhc3MpO1xyXG4gICAgICAgIHRhYkl0ZW0uaW5uZXJUZXh0ID0gb3ZlcmxheS50aXRsZTtcclxuICAgICAgICB0YWJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGV2LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlKG92ZXJsYXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3RhYkxpc3QuYXBwZW5kQ2hpbGQodGFiSXRlbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9ICdYJztcclxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YWJJdGVtX19jbG9zZUJ0bicpO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGV2LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXIob3ZlcmxheSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFiSXRlbS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudEl0ZW0uY2xhc3NMaXN0LmFkZChDb250ZW50SXRlbUNsYXNzKTtcclxuICAgICAgICBjb250ZW50SXRlbS5hcHBlbmRDaGlsZChvdmVybGF5LmZyYW1lKTtcclxuICAgICAgICB0aGlzLl9jb250ZW50TGlzdC5hcHBlbmRDaGlsZChjb250ZW50SXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RhYnNSZWdpc3RyeS5wdXNoKHsgb3ZlcmxheSwgdGFiSXRlbSwgY29udGVudEl0ZW0gfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGUob3ZlcmxheSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyKG92ZXJsYXk6IE92ZXJsYXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndW5yZWdpc3RlciBvdmVybGF5ICcgKyBvdmVybGF5LnRpdGxlKTtcclxuICAgICAgICBvdmVybGF5LnJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLl90YWJzUmVnaXN0cnkuZmlsdGVyKHQgPT4gdC5vdmVybGF5ID09PSBvdmVybGF5KVswXTtcclxuICAgICAgICBpZiAoIXRhYikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLl90YWJMaXN0LnJlbW92ZUNoaWxkKHRhYi50YWJJdGVtKTtcclxuICAgICAgICB0aGlzLl9jb250ZW50TGlzdC5yZW1vdmVDaGlsZCh0YWIuY29udGVudEl0ZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3RhYnNSZWdpc3RyeSA9IHRoaXMuX3RhYnNSZWdpc3RyeS5maWx0ZXIodCA9PiB0Lm92ZXJsYXkgIT09IG92ZXJsYXkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlT3ZlcmxheSA9PT0gb3ZlcmxheSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVPdmVybGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFRhYiA9IHRoaXMuX3RhYnNSZWdpc3RyeVswXTtcclxuICAgICAgICAgICAgbmV4dFRhYiAmJiB0aGlzLmFjdGl2YXRlKG5leHRUYWIub3ZlcmxheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fdGFic1JlZ2lzdHJ5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUob3ZlcmxheTogT3ZlcmxheSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmF0ZSBvdmVybGF5ICcgKyBvdmVybGF5LnRpdGxlKTtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlT3ZlcmxheSA9PSBvdmVybGF5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVPdmVybGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSh0aGlzLl9hY3RpdmVPdmVybGF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYiA9IHRoaXMuX3RhYnNSZWdpc3RyeS5maWx0ZXIodCA9PiB0Lm92ZXJsYXkgPT09IG92ZXJsYXkpWzBdO1xyXG4gICAgICAgIHRhYi50YWJJdGVtLmNsYXNzTGlzdC50b2dnbGUoQWN0aXZlVGFiSGVhZGVyQ2xhc3MsIHRydWUpO1xyXG4gICAgICAgIHRhYi5jb250ZW50SXRlbS5jbGFzc0xpc3QudG9nZ2xlKEFjdGl2ZVRhYkNvbnRlbnRDbGFzcywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZU92ZXJsYXkgPSBvdmVybGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWFjdGl2YXRlKG92ZXJsYXk6IE92ZXJsYXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGVhY3RpdmF0ZSBvdmVybGF5ICcgKyBvdmVybGF5LnRpdGxlKTtcclxuICAgICAgICBjb25zdCB0YWIgPSB0aGlzLl90YWJzUmVnaXN0cnkuZmlsdGVyKHQgPT4gdC5vdmVybGF5ID09PSBvdmVybGF5KVswXTtcclxuICAgICAgICB0YWIudGFiSXRlbS5jbGFzc0xpc3QudG9nZ2xlKEFjdGl2ZVRhYkhlYWRlckNsYXNzLCBmYWxzZSk7XHJcbiAgICAgICAgdGFiLmNvbnRlbnRJdGVtLmNsYXNzTGlzdC50b2dnbGUoQWN0aXZlVGFiQ29udGVudENsYXNzLCBmYWxzZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU3dpcGVyIHtcclxuXHJcbiAgICBwcml2YXRlIF90b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICBwcml2YXRlIF90b3VjaFN0YXJ0WSA9IDA7XHJcbiAgICBwcml2YXRlIF90b3VjaEVuZFggPSAwO1xyXG4gICAgcHJpdmF0ZSBfdG91Y2hFbmRZID0gMDtcclxuICAgIHByaXZhdGUgX2NhbGxiYWNrczoge1xyXG4gICAgICAgIFtldmVudDogc3RyaW5nXTogRnVuY3Rpb25bXVxyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZyA9IHtcclxuICAgICAgICBhbmdsZVdpZHRoOiAwLjc1LFxyXG4gICAgICAgIGxlbmd0aFBhcnQ6IDAuMDUsXHJcbiAgICAgICAgdG91Y2hlczogMVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggIT0gdGhpcy5fY29uZmlnLnRvdWNoZXMpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5fdG91Y2hTdGFydFggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgICAgICB0aGlzLl90b3VjaFN0YXJ0WSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoICE9IHRoaXMuX2NvbmZpZy50b3VjaGVzKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoRW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoRW5kWSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxlcigpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b3VjaEhhbmRsZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZFggPSB0aGlzLl90b3VjaEVuZFggLSB0aGlzLl90b3VjaFN0YXJ0WDtcclxuICAgICAgICBjb25zdCBkWSA9IHRoaXMuX3RvdWNoRW5kWSAtIHRoaXMuX3RvdWNoU3RhcnRZO1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodFxyXG5cclxuICAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKGRZLCBkWCkgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgICAgICBjb25zdCB7IGFuZ2xlV2lkdGgsIGxlbmd0aFBhcnQgfSA9IHRoaXMuX2NvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKC00NSAqIGFuZ2xlV2lkdGggPCBhbmdsZSAmJiBhbmdsZSA8IDQ1ICogYW5nbGVXaWR0aCAmJiBNYXRoLmFicyhkWCkgLyB3aWR0aCA+IGxlbmd0aFBhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlyZUV2ZW50KFwicmlnaHRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoOTAgLSA0NSAqIGFuZ2xlV2lkdGggPCBhbmdsZSAmJiBhbmdsZSA8IDkwICsgNDUgKiBhbmdsZVdpZHRoICYmIE1hdGguYWJzKGRZKSAvIGhlaWdodCA+IGxlbmd0aFBhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlyZUV2ZW50KFwidXBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKDE4MCAtIDQ1ICogYW5nbGVXaWR0aCA8IGFuZ2xlICYmIGFuZ2xlIDwgMTgwIHx8IC0xODAgPCBhbmdsZSAmJiBhbmdsZSA8IC0xODAgKyA0NSAqIGFuZ2xlV2lkdGgpICYmIE1hdGguYWJzKGRYKSAvIHdpZHRoID4gbGVuZ3RoUGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maXJlRXZlbnQoXCJsZWZ0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKC05MCAtIDQ1ICogYW5nbGVXaWR0aCA8IGFuZ2xlICYmIGFuZ2xlIDwgLTkwICsgNDUgKiBhbmdsZVdpZHRoICYmIE1hdGguYWJzKGRZKSAvIGhlaWdodCA+IGxlbmd0aFBhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZmlyZUV2ZW50KFwiZG93blwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmlyZUV2ZW50KGV2ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoe30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnQ6IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJkb3duXCIgfCBcInVwXCIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFja3NbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElQdWJTdWIgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdzSnNvblJwYyBpbXBsZW1lbnRzIElQdWJTdWIge1xyXG4gICAgcHJpdmF0ZSBfcXVldWU6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIF93czogV2ViU29ja2V0O1xyXG5cclxuICAgIHByaXZhdGUgX21zZ0NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlYyh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKyt0aGlzLl9tc2dDb3VudDtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBqc29ucnBjOiBcIjIuMFwiLFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHRvcGljLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbbWVzc2FnZV1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJwYyA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJwYy5tZXRob2QgJiYgcnBjLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFycGMuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShycGMucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocnBjLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb0RvOiBkbyB3ZSBuZWVkIHRoaXMgbWV0aG9kP1xyXG4gICAgLy8gcHVibGljIG5vdGlmeSh0b3BpYzogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vICAgICB0aGlzLl9zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgICAgICAganNvbnJwYzogXCIyLjBcIiwgXHJcbiAgICAvLyAgICAgICAgIG1ldGhvZDogdG9waWMsXHJcbiAgICAvLyAgICAgICAgIHBhcmFtczogW21lc3NhZ2VdXHJcbiAgICAvLyAgICAgfSkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBvbk1lc3NhZ2UoaGFuZGxlcjogKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBycGMgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChycGMubWV0aG9kKSBoYW5kbGVyKHJwYy5tZXRob2QsIHJwYy5wYXJhbXNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb2ZmOiAoKSA9PiB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuX3dzID0gbmV3IFdlYlNvY2tldCh0aGlzLnVybCk7XHJcbiAgICAgICAgdGhpcy5fd3Mub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKG1zZyA9PiB0aGlzLl93cy5zZW5kKG1zZykpO1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fd3Mub25jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbXNnQ291bnQgPSAwO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VuZChkYXRhOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5fd3MucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dzLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==