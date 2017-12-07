this["Dashboard"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.object = exports.Disposable = exports.async = exports.array = undefined;

var _core = __webpack_require__(31);

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _core2 = _interopRequireDefault(_core);

var _array = __webpack_require__(31);

var _array2 = _interopRequireDefault(_array);

var _async = __webpack_require__(32);

var _async2 = _interopRequireDefault(_async);

var _Disposable = __webpack_require__(35);

var _Disposable2 = _interopRequireDefault(_Disposable);

var _object = __webpack_require__(36);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(37);

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.array = _array2.default;
exports.async = _async2.default;
exports.Disposable = _Disposable2.default;
exports.object = _object2.default;
exports.string = _string2.default;
exports.default = _core2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dom = undefined;

var _domNamed = __webpack_require__(52);

Object.keys(_domNamed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _domNamed[key];
    }
  });
});

var dom = _interopRequireWildcard(_domNamed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = dom;
exports.dom = dom;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSXComponent = exports.Config = exports.validators = exports.DangerouslySetHTML = undefined;

var _metalState = __webpack_require__(6);

var _DangerouslySetHTML = __webpack_require__(43);

var _DangerouslySetHTML2 = _interopRequireDefault(_DangerouslySetHTML);

var _JSXComponent = __webpack_require__(18);

var _JSXComponent2 = _interopRequireDefault(_JSXComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _JSXComponent2.default;
exports.DangerouslySetHTML = _DangerouslySetHTML2.default;
exports.validators = _metalState.validators;
exports.Config = _metalState.Config;
exports.JSXComponent = _JSXComponent2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventHandler = exports.EventHandle = exports.EventEmitterProxy = exports.EventEmitter = undefined;

var _EventEmitter = __webpack_require__(40);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _EventEmitterProxy = __webpack_require__(41);

var _EventEmitterProxy2 = _interopRequireDefault(_EventEmitterProxy);

var _EventHandle = __webpack_require__(16);

var _EventHandle2 = _interopRequireDefault(_EventHandle);

var _EventHandler = __webpack_require__(42);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EventEmitter2.default;
exports.EventEmitter = _EventEmitter2.default;
exports.EventEmitterProxy = _EventEmitterProxy2.default;
exports.EventHandle = _EventHandle2.default;
exports.EventHandler = _EventHandler2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearData = clearData;
exports.getData = getData;
var RENDERER_DATA = '__METAL_IC_RENDERER_DATA__';

/**
 * Removes the incremental dom renderer data object for this component.
 * @param {!Component} component
 */
function clearData(component) {
  component[RENDERER_DATA] = null;
}

/**
 * Gets the incremental dom renderer data object for this component, creating
 * it if it doesn't exist yet.
 * @param {!Component} component
 * @return {!Object}
 */
function getData(component) {
  if (!component[RENDERER_DATA]) {
    component[RENDERER_DATA] = {};
  }
  return component[RENDERER_DATA];
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentRenderer = exports.ComponentRegistry = exports.ComponentDataManager = exports.Component = undefined;

var _events = __webpack_require__(26);

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _Component = __webpack_require__(59);

var _Component2 = _interopRequireDefault(_Component);

var _ComponentDataManager = __webpack_require__(27);

var _ComponentDataManager2 = _interopRequireDefault(_ComponentDataManager);

var _ComponentRegistry = __webpack_require__(61);

var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);

var _ComponentRenderer = __webpack_require__(28);

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Component2.default;
exports.Component = _Component2.default;
exports.ComponentDataManager = _ComponentDataManager2.default;
exports.ComponentRegistry = _ComponentRegistry2.default;
exports.ComponentRenderer = _ComponentRenderer2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = exports.Config = exports.validators = undefined;

var _validators = __webpack_require__(15);

var _validators2 = _interopRequireDefault(_validators);

var _Config = __webpack_require__(38);

var _Config2 = _interopRequireDefault(_Config);

var _State = __webpack_require__(39);

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _State2.default;
exports.validators = _validators2.default;
exports.Config = _Config2.default;
exports.State = _State2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.globalEvalStyles = exports.globalEval = exports.features = exports.DomEventHandle = exports.DomEventEmitterProxy = exports.domData = undefined;

var _dom = __webpack_require__(1);

Object.keys(_dom).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _dom[key];
		}
	});
});

var _dom2 = _interopRequireDefault(_dom);

var _domData = __webpack_require__(12);

var _domData2 = _interopRequireDefault(_domData);

var _DomEventEmitterProxy = __webpack_require__(54);

var _DomEventEmitterProxy2 = _interopRequireDefault(_DomEventEmitterProxy);

var _DomEventHandle = __webpack_require__(22);

var _DomEventHandle2 = _interopRequireDefault(_DomEventHandle);

var _features = __webpack_require__(23);

var _features2 = _interopRequireDefault(_features);

var _globalEval = __webpack_require__(55);

var _globalEval2 = _interopRequireDefault(_globalEval);

var _globalEvalStyles = __webpack_require__(56);

var _globalEvalStyles2 = _interopRequireDefault(_globalEvalStyles);

__webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.domData = _domData2.default;
exports.DomEventEmitterProxy = _DomEventEmitterProxy2.default;
exports.DomEventHandle = _DomEventHandle2.default;
exports.features = _features2.default;
exports.globalEval = _globalEval2.default;
exports.globalEvalStyles = _globalEvalStyles2.default;
exports.default = _dom2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML2IncDom = undefined;

var _HTML2IncDom = __webpack_require__(45);

var _HTML2IncDom2 = _interopRequireDefault(_HTML2IncDom);

var _IncrementalDomRenderer = __webpack_require__(48);

var _IncrementalDomRenderer2 = _interopRequireDefault(_IncrementalDomRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HTML2IncDom = _HTML2IncDom2.default;
exports.default = _IncrementalDomRenderer2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getOriginalFns = getOriginalFns;
exports.getOriginalFn = getOriginalFn;
exports.startInterception = startInterception;
exports.stopInterception = stopInterception;

__webpack_require__(18);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Gets the original incremental dom functions.
 * @return {!Object}
 */
function getOriginalFns() {
	return originalFns;
}

/**
 * Gets the original incremental dom function with the given name.
 * @param {string} name
 * @return {!Object}
 */
function getOriginalFn(name) {
	return originalFns[name];
}

/**
 * Starts intercepting calls to incremental dom, replacing them with the given
 * functions. Note that `elementVoid`, `elementOpenStart`, `elementOpenEnd`
 * and `attr` are the only ones that can't be intercepted, since they'll
 * automatically be converted into equivalent calls to `elementOpen` and
 * `elementClose`.
 * @param {!Object} fns Functions to be called instead of the original ones
 *     from incremental DOM. Should be given as a map from the function name
 *     to the function that should intercept it. All interceptors will receive
 *     the original function as the first argument, the actual arguments from
 *     from the original call following it.
 */
function startInterception(fns) {
	fns.attr = fnAttr;
	fns.elementOpenEnd = fnOpenEnd;
	fns.elementOpenStart = fnOpenStart;
	fns.elementVoid = fnVoid;
	fnStack.push(fns);
}

/**
 * Restores the original `elementOpen` function from incremental dom to the
 * implementation it used before the last call to `startInterception`.
 */
function stopInterception() {
	fnStack.pop();
}

var originalFns = {
	attr: IncrementalDOM.attr,
	attributes: IncrementalDOM.attributes[IncrementalDOM.symbols.default],
	elementClose: IncrementalDOM.elementClose,
	elementOpen: IncrementalDOM.elementOpen,
	elementOpenEnd: IncrementalDOM.elementOpenEnd,
	elementOpenStart: IncrementalDOM.elementOpenStart,
	elementVoid: IncrementalDOM.elementVoid,
	text: IncrementalDOM.text
};

var fnStack = [];

var collectedArgs = [];

function fnAttr(name, value) {
	collectedArgs.push(name, value);
}

function fnOpenStart(tag, key, statics) {
	collectedArgs = [tag, key, statics];
}

function fnOpenEnd() {
	var _IncrementalDOM;

	return (_IncrementalDOM = IncrementalDOM).elementOpen.apply(_IncrementalDOM, _toConsumableArray(collectedArgs));
}

function fnVoid() {
	IncrementalDOM.elementOpen.apply(null, arguments);
	return IncrementalDOM.elementClose.apply(null, arguments);
}

function getStack() {
	return fnStack.length > 0 ? fnStack[fnStack.length - 1] : null;
}

function buildHandleCall(name) {
	var data = {
		name: name
	};
	var fn = handleCall.bind(data);
	return fn;
}

function handleCall() {
	var name = this.name; // eslint-disable-line
	var stack = getStack();
	var fn = stack && stack[name] || originalFns[name];
	return fn.apply(undefined, arguments);
}

IncrementalDOM.attr = buildHandleCall('attr');
IncrementalDOM.elementClose = buildHandleCall('elementClose');
IncrementalDOM.elementOpen = buildHandleCall('elementOpen');
IncrementalDOM.elementOpenEnd = buildHandleCall('elementOpenEnd');
IncrementalDOM.elementOpenStart = buildHandleCall('elementOpenStart');
IncrementalDOM.elementVoid = buildHandleCall('elementVoid');
IncrementalDOM.text = buildHandleCall('text');

IncrementalDOM.attributes[IncrementalDOM.symbols.default] = buildHandleCall('attributes');

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METAL_DATA = '__metal_data__';

/**
 * Set of utilities for dom data operations
 */

var domData = function () {
	function domData() {
		_classCallCheck(this, domData);
	}

	_createClass(domData, null, [{
		key: 'get',

		/**
   * Gets Metal.js's data for the given element.
   * @param {!Element} element
   * @param {string=} name Optional property from the data to be returned.
   * @param {*=} initialValue Optional value to the set the requested property
   *     to if it doesn't exist yet in the data.
   * @return {!Object}
   */
		value: function get(element, name, initialValue) {
			if (!element[METAL_DATA]) {
				element[METAL_DATA] = {};
			}
			if (!name) {
				return element[METAL_DATA];
			}
			if (!(0, _metal.isDef)(element[METAL_DATA][name]) && (0, _metal.isDef)(initialValue)) {
				element[METAL_DATA][name] = initialValue;
			}
			return element[METAL_DATA][name];
		}

		/**
   * Checks if the given element has data stored in it.
   * @param {!Element} element
   * @return {boolean}
   */

	}, {
		key: 'has',
		value: function has(element) {
			return !!element[METAL_DATA];
		}

		/**
   * Sets Metal.js's data for the given element.
   * @param {!Element} element
   * @param {string=} name Property from the data to be set.
   * @param {*=} value Value to be set on the element.
   * @return {!Object|*}
   */

	}, {
		key: 'set',
		value: function set(element, name, value) {
			if (!element[METAL_DATA]) {
				element[METAL_DATA] = {};
			}
			if (!name || !(0, _metal.isDef)(value)) {
				return element[METAL_DATA];
			}
			element[METAL_DATA][name] = value;
			return element[METAL_DATA][name];
		}
	}]);

	return domData;
}();

exports.default = domData;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(64);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _metal = __webpack_require__(0);

var ERROR_OBJECT_OF_TYPE = 'Expected object of one type.';
var ERROR_ONE_OF = 'Expected one of the following values:';
var ERROR_ONE_OF_TYPE = 'Expected one of given types.';

/**
 * Provides access to various type validators that will return an
 * instance of Error when validation fails. Note that all type validators
 * will also accept null or undefined values. To not accept these you should
 * instead make your state property required.
 */
var validators = {
	any: function any() {
		return function () {
			return true;
		};
	},
	array: buildTypeValidator('array'),
	bool: buildTypeValidator('boolean'),
	func: buildTypeValidator('function'),
	number: buildTypeValidator('number'),
	object: buildTypeValidator('object'),
	string: buildTypeValidator('string'),

	/**
  * Creates a validator that checks that the value it receives is an array
  * of items, and that all of the items pass the given validator.
  * @param {!function()} validator Validator to check each item against.
  * @return {!function()}
  */
	arrayOf: function arrayOf(validator) {
		if (isInvalid(validators.func(validator))) {
			throwConfigError('function', validator, 'arrayOf');
		}
		return maybe(function (value, name, context) {
			var result = validators.array(value, name, context);
			if (isInvalid(result)) {
				return result;
			}
			return validateArrayItems(validator, value, name, context);
		});
	},

	/**
  * Creates a validator that checks if a value is an instance of a given class.
  * @param {!function()} expectedClass Class to check value against.
  * @return {!function()}
  */
	instanceOf: function instanceOf(expectedClass) {
		return maybe(function (value, name, context) {
			if (value instanceof expectedClass) {
				return true;
			}
			var msg = 'Expected instance of ' + expectedClass;
			return composeError(msg, name, context);
		});
	},

	/**
  * Creates a validator that checks that the value it receives is an object,
  * and that all values within that object pass the given validator.
  * @param {!function()} validator Validator to check each object value against.
  * @return {!function()}
  */
	objectOf: function objectOf(validator) {
		if (isInvalid(validators.func(validator))) {
			throwConfigError('function', validator, 'objectOf');
		}
		return maybe(function (value, name, context) {
			for (var key in value) {
				if (isInvalid(validator(value[key]))) {
					return composeError(ERROR_OBJECT_OF_TYPE, name, context);
				}
			}
			return true;
		});
	},

	/**
  * Creates a validator that checks if the received value matches one of the
  * given values.
  * @param {!Array} arrayOfValues Array of values to check equality against.
  * @return {!function()}
  */
	oneOf: function oneOf(arrayOfValues) {
		return maybe(function (value, name, context) {
			var result = validators.array(arrayOfValues, name, context);
			if (isInvalid(result)) {
				return result;
			}
			return arrayOfValues.indexOf(value) === -1 ? composeError(composeOneOfErrorMessage(arrayOfValues), name, context) // eslint-disable-line
			: true;
		});
	},

	/**
  * Creates a validator that checks if the received value matches one of the
  * given types.
  * @param {!Array} arrayOfTypeValidators Array of validators to check value
  *     against.
  * @return {!function()}
  */
	oneOfType: function oneOfType(arrayOfTypeValidators) {
		return maybe(function (value, name, context) {
			var result = validators.array(arrayOfTypeValidators, name, context); // eslint-disable-line
			if (isInvalid(result)) {
				return result;
			}

			for (var i = 0; i < arrayOfTypeValidators.length; i++) {
				// eslint-disable-next-line
				if (!isInvalid(arrayOfTypeValidators[i](value, name, context))) {
					return true;
				}
			}
			return composeError(ERROR_ONE_OF_TYPE, name, context);
		});
	},

	/**
  * Creates a validator that checks if the received value is an object, and
  * that its contents match the given shape.
  * @param {!Object} shape An object containing validators for each key.
  * @return {!function()}
  */
	shapeOf: function shapeOf(shape) {
		if (isInvalid(validators.object(shape))) {
			throwConfigError('object', shape, 'shapeOf');
		}
		return maybe(function (value, name, context) {
			var valueResult = validators.object(value, name, context);
			if (isInvalid(valueResult)) {
				return valueResult;
			}
			for (var key in shape) {
				if (Object.prototype.hasOwnProperty.call(shape, key)) {
					var validator = shape[key];
					var required = false;
					if (validator.config) {
						required = validator.config.required;
						validator = validator.config.validator;
					}
					if (required && !(0, _metal.isDefAndNotNull)(value[key]) || isInvalid(validator(value[key]))) {
						return validator(value[key], name + '.' + key, context);
					}
				}
			}
			return true;
		});
	}
};

/**
 * Creates a validator that checks against a specific primitive type.
 * @param {string} expectedType Type to check against.
 * @return {!function()} Function that runs the validator if called with
 *     arguments, or just returns it otherwise. This means that when using a
 *     type validator in `State` it may be just passed directly (like
 *     `validators.bool`), or called with no args (like `validators.bool()`).
 *     That's done to allow all validators to be used consistently, since some
 *     (like `arrayOf`) always require that you call the function before
 *     receiving the actual validator. Type validators don't need the call, but
 *     work if it's made anyway.
 */
function buildTypeValidator(expectedType) {
	var validatorFn = maybe(validateType.bind(null, expectedType));
	return function () {
		if (arguments.length === 0) {
			return validatorFn;
		} else {
			return validatorFn.apply(undefined, arguments);
		}
	};
}

/**
 * Composes a warning a warning message.
 * @param {string} error Error message to display to console.
 * @param {?string} name Name of state property that is giving the error.
 * @param {Object} context The property's owner.
 * @return {!Error}
 */
function composeError(error, name, context) {
	var compName = context ? (0, _metal.getFunctionName)(context.constructor) : null;
	var renderer = context && context.getRenderer && context.getRenderer();
	var parent = renderer && renderer.getParent && renderer.getParent();
	var parentName = parent ? (0, _metal.getFunctionName)(parent.constructor) : null;
	var location = parentName ? 'Check render method of \'' + parentName + '\'.' : '';
	return new Error('Invalid state passed to \'' + name + '\'.' + (' ' + error + ' Passed to \'' + compName + '\'. ' + location));
}

/**
 * Composes an error message for Config.oneOf validator.
 * @param {!Array} arrayOfValues Array of values to check equality against.
 * @return {!Error}
 */
function composeOneOfErrorMessage(arrayOfValues) {
	return ERROR_ONE_OF + ' ' + JSON.stringify(arrayOfValues) + '.';
}

/**
 * Returns the type of the given value.
 * @param {*} value Any value.
 * @return {string} Type of value.
 */
function getType(value) {
	return Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
}

/**
 * Checks if the given validator result says that the value is invalid.
 * @param {boolean|!Error} result
 * @return {boolean}
 */
function isInvalid(result) {
	return result instanceof Error;
}

/**
 * Wraps the given validator so that it also accepts null/undefined values.
 *   a validator that checks a value against a single type, null, or
 * undefined.
 * @param {!function()} typeValidator Validator to wrap.
 * @return {!function()} Wrapped validator.
 */
function maybe(typeValidator) {
	return function (value, name, context) {
		return (0, _metal.isDefAndNotNull)(value) ? typeValidator(value, name, context) : true; // eslint-disable-line
	};
}

/**
 * Throws error if validator is invoked with incorrect type.
 * @param {string} expectedType String representing the expected type.
 * @param {*} value The value to match the type of.
 * @param {!string} name Name of the function the validator is intended for.
 */
function throwConfigError(expectedType, value, name) {
	var type = getType(value);
	throw new Error('Expected type ' + expectedType + ', but received type ' + type + '. passed to ' + name + '.');
}

/**
 * Checks if all the items of the given array pass the given validator.
 * @param {!function()} validator
 * @param {*} value The array to validate items for.
 * @param {string} name The name of the array property being checked.
 * @param {!Object} context Owner of the array property being checked.
 * @return {!Error|boolean} `true` if the type matches, or an error otherwise.
 */
function validateArrayItems(validator, value, name, context) {
	for (var i = 0; i < value.length; i++) {
		if (isInvalid(validator(value[i], name, context))) {
			var itemValidatorError = validator(value[i], name, context);
			var errorMessage = 'Validator for ' + name + '[' + i + '] says: "' + itemValidatorError + '"';
			return composeError(errorMessage, name, context);
		}
	}
	return true;
}

/**
 * Checks if the given value matches the expected type.
 * @param {string} expectedType String representing the expected type.
 * @param {*} value The value to match the type of.
 * @param {string} name The name of the property being checked.
 * @param {!Object} context Owner of the property being checked.
 * @return {!Error|boolean} `true` if the type matches, or an error otherwise.
 */
function validateType(expectedType, value, name, context) {
	var type = getType(value);
	if (type !== expectedType) {
		var msg = 'Expected type \'' + expectedType + '\', but received type \'' + type + '\'.';
		return composeError(msg, name, context);
	}
	return true;
}

exports.default = validators;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.core = undefined;

var _coreNamed = __webpack_require__(30);

Object.keys(_coreNamed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _coreNamed[key];
    }
  });
});

var core = _interopRequireWildcard(_coreNamed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = core;
exports.core = core;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventHandle utility. Holds information about an event subscription, and
 * allows removing them easily.
 * EventHandle is a Disposable, but it's important to note that the
 * EventEmitter that created it is not the one responsible for disposing it.
 * That responsibility is for the code that holds a reference to it.
 * @extends {Disposable}
 */
var EventHandle = function (_Disposable) {
	_inherits(EventHandle, _Disposable);

	/**
  * EventHandle constructor
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  */
	function EventHandle(emitter, event, listener) {
		_classCallCheck(this, EventHandle);

		/**
   * The EventEmitter instance that the event was subscribed to.
   * @type {EventEmitter}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventHandle.__proto__ || Object.getPrototypeOf(EventHandle)).call(this));

		_this.emitter_ = emitter;

		/**
   * The name of the event that was subscribed to.
   * @type {string}
   * @protected
   */
		_this.event_ = event;

		/**
   * The listener subscribed to the event.
   * @type {Function}
   * @protected
   */
		_this.listener_ = listener;
		return _this;
	}

	/**
  * Disposes of this instance's object references.
  * @override
  */


	_createClass(EventHandle, [{
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.removeListener();
			this.emitter_ = null;
			this.listener_ = null;
		}

		/**
   * Removes the listener subscription from the emitter.
   */

	}, {
		key: 'removeListener',
		value: function removeListener() {
			if (!this.emitter_.isDisposed()) {
				this.emitter_.removeListener(this.event_, this.listener_);
			}
		}
	}]);

	return EventHandle;
}(_metal.Disposable);

exports.default = EventHandle;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(44);

var _metal = __webpack_require__(0);

var _metalComponent = __webpack_require__(5);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalIncrementalDom = __webpack_require__(10);

var _metalIncrementalDom2 = _interopRequireDefault(_metalIncrementalDom);

var _JSXDataManager = __webpack_require__(63);

var _JSXDataManager2 = _interopRequireDefault(_JSXDataManager);

var _JSXRenderer = __webpack_require__(28);

var _JSXRenderer2 = _interopRequireDefault(_JSXRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component that has built-in integration with JSX templates. Example:
 *
 * <code>
 * class MyComponent extends JSXComponent {
 *   render() {
 *     return <div>Hello World</div>
 *   }
 * }
 * </code>
 */
var JSXComponent = function (_Component) {
	_inherits(JSXComponent, _Component);

	function JSXComponent() {
		_classCallCheck(this, JSXComponent);

		return _possibleConstructorReturn(this, (JSXComponent.__proto__ || Object.getPrototypeOf(JSXComponent)).apply(this, arguments));
	}

	_createClass(JSXComponent, [{
		key: 'handleStateWillChange_',


		/**
   * Fires before state batch changes. Provides hook point for modifying
   *     state.
   * @param {Event} event
   * @protected
   */
		value: function handleStateWillChange_(event) {
			if (event.type !== 'state') {
				this.willReceiveProps(event.changes);
			}
		}

		/**
   * Returns props that are not used or declared in the component.
   * @return {Object} Object containing props
   */

	}, {
		key: 'otherProps',
		value: function otherProps() {
			var removeKeys = [].concat(_toConsumableArray(this.getDataManager().getPropsInstance(this).getStateKeys()), ['key', 'ref']);

			var retObj = _metal.object.mixin({}, this.props);

			for (var i = 0; i < removeKeys.length; i++) {
				var key = removeKeys[i];

				if (retObj.hasOwnProperty(key)) {
					delete retObj[key];
				}
			}

			return retObj;
		}

		/**
   * Lifecycle. Called when the component is about to receive new props.
   * Provides a hook point for modifying state that can be used in the next
   * rerender.
   * @param {Object} changes Changes made to this.props
   */

	}, {
		key: 'willReceiveProps',
		value: function willReceiveProps() {}
	}], [{
		key: 'render',

		/**
   * Creates and renders the given function, which can either be a simple
   * JSX function or a component constructor.
   * @param {!function()} fnOrCtor Either be a simple jsx dom function or a
   *     component constructor.
   * @param {Object=} opt_data Optional config data for the function.
   * @param {Element=} opt_element Optional parent for the rendered content.
   * @return {!Component} The rendered component's instance.
   * @override
   */
		value: function render() {
			return _metalIncrementalDom2.default.render.apply(_metalIncrementalDom2.default, arguments);
		}
	}]);

	return JSXComponent;
}(_metalComponent2.default);

JSXComponent.DATA_MANAGER = _JSXDataManager2.default;
JSXComponent.RENDERER = _JSXRenderer2.default;

exports.default = JSXComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _incrementalDom = __webpack_require__(49);

var IncrementalDOM = _interopRequireWildcard(_incrementalDom);

var _incrementalDomString = __webpack_require__(50);

var IncrementalDOMString = _interopRequireWildcard(_incrementalDomString);

var _metal = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if ((0, _metal.isServerSide)()) {
	// Overrides global.IncrementalDOM virtual elements with incremental dom
	// string implementation for server side rendering. At the moment it does not
	// override for Node.js tests since tests are using jsdom to simulate the
	// browser.
	global.IncrementalDOM = IncrementalDOMString;
} else {
	var scope = typeof exports !== 'undefined' && typeof global !== 'undefined' ? global : window;

	scope.IncrementalDOM = IncrementalDOM;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChanges = clearChanges;
exports.getChanges = getChanges;
exports.trackChanges = trackChanges;

var _data = __webpack_require__(4);

/**
 * Clears the changes tracked so far.
 * @param {!Object} data
 */
function clearChanges(data) {
  data.changes = null;
}

/**
 * Handles the `stateKeyChanged` event from a component. Stores change data.
 * @param {!Object} data
 * @param {!Object} eventData
 * @private
 */
function handleStateKeyChanged_(data, eventData) {
  data.changes = data.changes || {};
  var type = eventData.type || 'props';
  data.changes[type] = data.changes[type] || {};
  data.changes[type][eventData.key] = eventData;
}

/**
 * Returns an object with changes in the given component since the last time,
 * or null if there weren't any.
 * @param {!Component} component
 * @return {Object}
 */
function getChanges(component) {
  return (0, _data.getData)(component).changes;
}

/**
 * Starts tracking changes for the given component
 * @param {!Component} component
 */
function trackChanges(component) {
  var data = (0, _data.getData)(component);
  component.on('stateKeyChanged', handleStateKeyChanged_.bind(null, data));
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHILD_OWNER = undefined;
exports.captureChildren = captureChildren;
exports.isChildTag = isChildTag;
exports.getOwner = getOwner;
exports.renderChildTree = renderChildTree;

var _callArgs = __webpack_require__(21);

var _metal = __webpack_require__(0);

var _incrementalDomAop = __webpack_require__(11);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Property identifying a specific object as a Metal.js child node, and
 * pointing to the component instance that created it.
 * @type {string}
 */
var CHILD_OWNER = exports.CHILD_OWNER = '__metalChildOwner';

/**
 * Captures all child elements from incremental dom calls.
 * @param {!Component} component The component that is capturing children.
 * @param {!function()} callback Function to be called when children have all
 *     been captured.
 * @param {Object} data Data to pass to the callback function when calling it.
 */
function captureChildren(component, callback, data) {
	owner_ = component;
	callback_ = callback;
	callbackData_ = data;
	tree_ = {
		props: {
			children: []
		}
	};
	tree_.config = tree_.props;
	currentParent_ = tree_;
	isCapturing_ = true;
	(0, _incrementalDomAop.startInterception)({
		elementClose: handleInterceptedCloseCall_,
		elementOpen: handleInterceptedOpenCall_,
		text: handleInterceptedTextCall_
	});
}

/**
 * Checks if the given tag was built from a component's children.
 * @param {*} tag
 * @return {boolean}
 */
function isChildTag(tag) {
	return (0, _metal.isDef)(tag.tag);
}

/**
 * Gets the node's original owner.
 * @param {!Object} node
 * @return {Component}
 */
function getOwner(node) {
	return node[CHILD_OWNER];
}

/**
 * Renders a children tree through incremental dom.
 * @param {!{args: Array, children: !Array, isText: ?boolean}} tree
 * @param {function()=} skipNode Optional function that is called for
 *     each node to be rendered. If it returns true, the node will be skipped.
 * @protected
 */
function renderChildTree(tree, skipNode) {
	if (isCapturing_) {
		// If capturing, just add the node directly to the captured tree.
		addChildToTree(tree);
		return;
	}

	if (skipNode && skipNode.call(null, tree)) {
		return;
	}

	if ((0, _metal.isDef)(tree.text)) {
		var args = tree.args ? tree.args : [];
		args[0] = tree.text;
		IncrementalDOM.text.apply(null, args);
	} else {
		var _args = (0, _callArgs.buildCallFromConfig)(tree.tag, tree.props);
		_args[0] = {
			tag: _args[0],
			owner: getOwner(tree)
		};
		IncrementalDOM.elementOpen.apply(null, _args);
		if (tree.props.children) {
			for (var i = 0; i < tree.props.children.length; i++) {
				renderChildTree(tree.props.children[i], skipNode);
			}
		}
		IncrementalDOM.elementClose(tree.tag);
	}
}

var callbackData_ = void 0;
var callback_ = void 0;
var currentParent_ = void 0;
var isCapturing_ = false;
var owner_ = void 0;
var tree_ = void 0;

/**
 * Adds a child element to the tree.
 * @param {!Array} args The arguments passed to the incremental dom call.
 * @param {boolean=} isText Optional flag indicating if the child is a
 *     text element.
 * @protected
 * @return {Object}
 */
function addChildCallToTree_(args) {
	var isText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var child = _defineProperty({
		parent: currentParent_
	}, CHILD_OWNER, owner_);

	if (isText) {
		child.text = args[0];
		if (args.length > 1) {
			child.args = args;
		}
	} else {
		child.tag = args[0];
		child.props = (0, _callArgs.buildConfigFromCall)(args);
		child.props.children = [];
		child.config = child.props;
	}

	addChildToTree(child);
	return child;
}

function addChildToTree(child) {
	currentParent_.props.children.push(child);
}

/**
 * Handles an intercepted call to the `elementClose` function from incremental
 * dom.
 * @protected
 * @return {Element | boolean}
 */
function handleInterceptedCloseCall_() {
	if (currentParent_ === tree_) {
		(0, _incrementalDomAop.stopInterception)();
		isCapturing_ = false;
		var node = callback_.call(owner_, tree_, callbackData_);
		callback_ = null;
		callbackData_ = null;
		currentParent_ = null;
		owner_ = null;
		tree_ = null;
		return node;
	} else {
		currentParent_ = currentParent_.parent;
		return true;
	}
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom.
 * @param {!function()} originalFn The original function before interception.
 * @protected
 */
function handleInterceptedOpenCall_() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	currentParent_ = addChildCallToTree_(args);
}

/**
 * Handles an intercepted call to the `text` function from incremental dom.
 * @param {!function()} originalFn The original function before interception.
 * @protected
 */
function handleInterceptedTextCall_() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	addChildCallToTree_(args, true);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Builds the component config object from its incremental dom call's
 * arguments.
 * @param {!Array} args
 * @return {!Object}
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildConfigFromCall = buildConfigFromCall;
exports.buildCallFromConfig = buildCallFromConfig;
function buildConfigFromCall(args) {
	var config = {};
	if (args[1]) {
		config.key = args[1];
	}
	var attrsArr = (args[2] || []).concat(args.slice(3));
	for (var i = 0; i < attrsArr.length; i += 2) {
		config[attrsArr[i]] = attrsArr[i + 1];
	}
	return config;
}

/**
 * Builds an incremental dom call array from the given tag and config object.
 * @param {string} tag
 * @param {!Object} config
 * @return {!Array}
 */
function buildCallFromConfig(tag, config) {
	var call = [tag, config.key, []];
	var keys = Object.keys(config);
	for (var i = 0; i < keys.length; i++) {
		if (keys[i] !== 'children' && keys[i] !== 'key') {
			call.push(keys[i], config[keys[i]]);
		}
	}
	return call;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalEvents = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a special EventHandle, that is responsible for dom events, instead
 * of EventEmitter events.
 * @extends {EventHandle}
 */
var DomEventHandle = function (_EventHandle) {
	_inherits(DomEventHandle, _EventHandle);

	/**
  * The constructor for `DomEventHandle`.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @param {boolean} capture Flag indicating if listener should be triggered
  *   during capture phase, instead of during the bubbling phase. Defaults to false.
  * @constructor
  */
	function DomEventHandle(emitter, event, listener, capture) {
		_classCallCheck(this, DomEventHandle);

		var _this = _possibleConstructorReturn(this, (DomEventHandle.__proto__ || Object.getPrototypeOf(DomEventHandle)).call(this, emitter, event, listener));

		_this.capture_ = capture;
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(DomEventHandle, [{
		key: 'removeListener',
		value: function removeListener() {
			this.emitter_.removeEventListener(this.event_, this.listener_, this.capture_);
		}
	}]);

	return DomEventHandle;
}(_metalEvents.EventHandle);

exports.default = DomEventHandle;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(1);

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class with static methods responsible for doing browser feature checks.
 */
var features = function () {
	function features() {
		_classCallCheck(this, features);
	}

	_createClass(features, null, [{
		key: 'checkAnimationEventName',

		/**
   * Some browsers still supports prefixed animation events. This method can
   * be used to retrieve the current browser event name for both, animation
   * and transition.
   * @return {object}
   */
		value: function checkAnimationEventName() {
			if (features.animationEventName_ === undefined) {
				features.animationEventName_ = {
					animation: features.checkAnimationEventName_('animation'),
					transition: features.checkAnimationEventName_('transition')
				};
			}
			return features.animationEventName_;
		}

		/**
   * @protected
   * @param {string} type Type to test: animation, transition.
   * @return {string} Browser event name.
   */

	}, {
		key: 'checkAnimationEventName_',
		value: function checkAnimationEventName_(type) {
			var prefixes = ['Webkit', 'MS', 'O', ''];
			var typeTitleCase = _metal.string.replaceInterval(type, 0, 1, type.substring(0, 1).toUpperCase());
			var suffixes = [typeTitleCase + 'End', typeTitleCase + 'End', typeTitleCase + 'End', type + 'end'];
			if (!features.animationElement_) {
				features.animationElement_ = document.createElement('div');
			}
			for (var i = 0; i < prefixes.length; i++) {
				if (features.animationElement_.style[prefixes[i] + typeTitleCase] !== undefined // eslint-disable-line
				) {
						return prefixes[i].toLowerCase() + suffixes[i];
					}
			}
			return type + 'end';
		}

		/**
   * Some browsers (like IE9) change the order of element attributes, when html
   * is rendered. This method can be used to check if this behavior happens on
   * the current browser.
   * @return {boolean}
   */

	}, {
		key: 'checkAttrOrderChange',
		value: function checkAttrOrderChange() {
			if (features.attrOrderChange_ === undefined) {
				var originalContent = '<div data-component="" data-ref=""></div>';
				var element = document.createElement('div');
				(0, _dom.append)(element, originalContent);
				features.attrOrderChange_ = originalContent !== element.innerHTML;
			}
			return features.attrOrderChange_;
		}
	}]);

	return features;
}();

features.animationElement_ = undefined;
features.animationEventName_ = undefined;
features.attrOrderChange_ = undefined;

exports.default = features;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getComponentBeingRendered = getComponentBeingRendered;
exports.isComponentTag_ = isComponentTag_;
exports.render = render;
exports.renderChild = renderChild;
exports.renderFunction = renderFunction;

var _attributes = __webpack_require__(58);

var _callArgs = __webpack_require__(21);

var _children = __webpack_require__(20);

var _changes = __webpack_require__(19);

var _metalDom = __webpack_require__(7);

var _data = __webpack_require__(4);

var _metal = __webpack_require__(0);

var _unused = __webpack_require__(62);

var _incrementalDomAop = __webpack_require__(11);

var _metalComponent = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var renderingComponents_ = [];
var emptyChildren_ = [];

/**
 * Adds the given css classes to the specified arguments for an incremental
 * dom call, merging with the existing value if there is one.
 * @param {string} elementClasses
 * @param {!Object} config
 * @private
 */
function addElementClasses_(elementClasses, config) {
	if (config.class) {
		config.class += ' ' + elementClasses;
		config.class = removeDuplicateClasses_(config.class);
	} else {
		config.class = elementClasses;
	}
}

/**
 * Builds the "children" array to be passed to the current component.
 * @param {!Array<!Object>} children
 * @return {!Array<!Object>}
 * @private
 */
function buildChildren_(children) {
	return children.length === 0 ? emptyChildren_ : children;
}

/**
 * Finishes the render operation, doing some cleaups.
 * @param {!Component} component
 * @private
 */
function cleanUpRender_(component) {
	(0, _incrementalDomAop.stopInterception)();
	if (!(0, _data.getData)(component).rootElementReached) {
		component.element = null;
	}
	component.informRendered();
	finishedRenderingComponent_();
}

/**
 * Removes the most recent component from the queue of rendering components.
 * @private
 */
function finishedRenderingComponent_() {
	renderingComponents_.pop();
	if (renderingComponents_.length === 0) {
		(0, _unused.disposeUnused)();
	}
}

/**
 * Generates a key for the next element to be rendered.
 * @param {!Component} component
 * @param {?string} key The key originally passed to the element.
 * @return {?string}
 * @private
 */
function generateKey_(component, key) {
	var data = (0, _data.getData)(component);
	if (!data.rootElementReached && data.config.key) {
		key = data.config.key;
	}
	return component.getRenderer().generateKey(component, key);
}

/**
 * Gets the child components stored in the given object.
 * @param {!Object} data
 * @return {!Array<!Component>}
 * @private
 */
function getChildComponents_(data) {
	data.childComponents = data.childComponents || [];
	return data.childComponents;
}

/**
 * Gets the component being currently rendered.
 * @return {Component}
 */
function getComponentBeingRendered() {
	return renderingComponents_[renderingComponents_.length - 1];
}

/**
 * Gets the data object that should be currently used. This object will either
 * come from the current element being rendered by incremental dom or from
 * the component instance being rendered (only when the current element is the
 * component's direct parent).
 * @return {!Object}
 * @private
 */
function getCurrentData() {
	var element = IncrementalDOM.currentElement();
	var comp = getComponentBeingRendered();
	var obj = (0, _data.getData)(comp);
	if (obj.rootElementReached && comp.element && element !== comp.element.parentNode) {
		obj = _metalDom.domData.get(element);
	}
	obj.icComponentsData = obj.icComponentsData || {};
	return obj.icComponentsData;
}

/**
 * Returns the "ref" to be used for a component. Uses "key" as "ref" when
 * compatibility mode is on for the current renderer.
 * @param {!Component} owner
 * @param {!Object} config
 * @return {?string}
 * @private
 */
function getRef_(owner, config) {
	var compatData = (0, _metal.getCompatibilityModeData)();
	if (compatData) {
		var ownerRenderer = owner.getRenderer();
		var renderers = compatData.renderers;
		var useKey = !renderers || renderers.indexOf(ownerRenderer) !== -1 || renderers.indexOf(ownerRenderer.RENDERER_NAME) !== -1;
		if (useKey && config.key && !config.ref) {
			return config.key;
		}
	}
	return config.ref;
}

/**
 * Gets the sub component referenced by the given tag and config data,
 * creating it if it doesn't yet exist.
 * @param {string|!Function} tagOrCtor The tag name.
 * @param {!Object} config The config object for the sub component.
 * @param {!Component} owner
 * @return {!Component} The sub component.
 * @protected
 */
function getSubComponent_(tagOrCtor, config, owner) {
	var Ctor = tagOrCtor;
	if ((0, _metal.isString)(Ctor)) {
		Ctor = _metalComponent.ComponentRegistry.getConstructor(tagOrCtor);
	}

	var ref = getRef_(owner, config);
	var comp = void 0;
	if ((0, _metal.isDef)(ref)) {
		comp = match_(owner.components[ref], Ctor, config, owner);
		owner.components[ref] = comp;
		owner.refs[ref] = comp;
	} else {
		var data = getCurrentData();
		var key = config.key;
		if (!(0, _metal.isDef)(key)) {
			var type = (0, _metal.getUid)(Ctor, true);
			data.currCount = data.currCount || {};
			data.currCount[type] = data.currCount[type] || 0;
			key = '__METAL_IC__' + type + '_' + data.currCount[type]++;
		}
		comp = match_(data.prevComps ? data.prevComps[key] : null, Ctor, config, owner);
		data.currComps = data.currComps || {};
		data.currComps[key] = comp;
	}

	return comp;
}

/**
 * Handles the event of children having finished being captured.
 * @param {!Object} tree The captured children in tree format.
 * @private
 * @return {Object}
 */
function handleChildrenCaptured_(tree, _ref) {
	var props = _ref.props,
	    tag = _ref.tag;

	props.children = buildChildren_(tree.props.children);
	return renderFromTag_(tag, props);
}

/**
 * Handles a child being rendered via `IncrementalDomChildren.render`. Skips
 * component nodes so that they can be rendered the correct way without
 * having to recapture both them and their children via incremental dom.
 * @param {!Object} node
 * @return {boolean}
 * @private
 */
function handleChildRender_(node) {
	if (node.tag && isComponentTag_(node.tag)) {
		node.props.children = buildChildren_(node.props.children);
		renderFromTag_(node.tag, node.props, (0, _children.getOwner)(node));
		return true;
	}
}

/**
 * Handles an intercepted call to the attributes default handler from
 * incremental dom.
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 * @private
 */
function handleInterceptedAttributesCall_(element, name, value) {
	(0, _attributes.applyAttribute)(getComponentBeingRendered(), element, name, value);
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom.
 * @param {string} tag
 * @private
 * @return {Object}
 */
function handleInterceptedOpenCall_(tag) {
	if (isComponentTag_(tag)) {
		return handleSubComponentCall_.apply(undefined, arguments);
	} else {
		return handleRegularCall_.apply(undefined, arguments);
	}
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom, done for a regular element. Among other things, adds any inline
 * listeners found on the first render and makes sure that component root
 * elements are always reused.
 * @param {!Component} owner
 * @param {!Array} args
 * @return {!Element} The rendered element.
 * @private
 */
function handleRegularCall_() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var config = (0, _callArgs.buildConfigFromCall)(args);
	var tag = args[0];

	var comp = getComponentBeingRendered();
	var owner = comp;
	if ((0, _children.isChildTag)(tag)) {
		owner = tag.owner;
		tag = tag.tag;
	}
	config.key = generateKey_(comp, config.key);

	if (!(0, _data.getData)(comp).rootElementReached) {
		var elementClasses = comp.getDataManager().get(comp, 'elementClasses');
		if (elementClasses) {
			addElementClasses_(elementClasses, config);
		}
	}
	(0, _attributes.convertListenerNamesToFns)(comp, config);

	var call = (0, _callArgs.buildCallFromConfig)(tag, config);
	var node = (0, _incrementalDomAop.getOriginalFn)('elementOpen').apply(undefined, _toConsumableArray(call));
	resetNodeData_(node);
	updateElementIfNotReached_(comp, node);

	if ((0, _metal.isDefAndNotNull)(config.ref)) {
		owner.refs[config.ref] = node;
	}
	owner.getRenderer().handleNodeRendered(node);

	return node;
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom, done for a sub component element. Creates and updates the appropriate
 * sub component.
 * @private
 */
function handleSubComponentCall_() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	(0, _children.captureChildren)(getComponentBeingRendered(), handleChildrenCaptured_, {
		props: (0, _callArgs.buildConfigFromCall)(args),
		tag: args[0]
	});
}

/**
 * Passes down elementClasses to a child component if the parent component
 * returns another component at the top level (HOC).
 * @param {*} parent The parent component
 * @param {*} config The config of the subcomponent
 */
function inheritElementClasses_(parent, config) {
	var parentData = (0, _data.getData)(parent);
	var parentConfig = parentData.config;

	if (!parentData.rootElementReached && parentConfig && (0, _metal.isString)(parentConfig.elementClasses)) {
		var currentClasses = '';
		if ((0, _metal.isString)(config.elementClasses)) {
			currentClasses = config.elementClasses + ' ';
		}

		config.elementClasses = currentClasses + parentConfig.elementClasses;
	}
}

/**
 * Checks if the given tag represents a metal component.
 * @param {string} tag
 * @return {boolean}
 * @private
 */
function isComponentTag_(tag) {
	return (0, _metal.isFunction)(tag) || (0, _metal.isString)(tag) && tag[0] === tag[0].toUpperCase(); // eslint-disable-line
}

/**
 * Checks if the given component can be a match for a constructor.
 * @param {!Component} comp
 * @param {!function()} Ctor
 * @param {!Component} owner
 * @return {boolean}
 * @private
 */
function isMatch_(comp, Ctor, owner) {
	if (!comp || comp.constructor !== Ctor || comp.isDisposed()) {
		return false;
	}
	return (0, _data.getData)(comp).owner === owner;
}

/**
 * Returns the given component if it matches the specified constructor
 * function. Otherwise, returns a new instance of the given constructor. On
 * both cases the component's state and config will be updated.
 * @param {Component} comp
 * @param {!function()} Ctor
 * @param {!Object} config
 * @param {!Component} owner
 * @return {!Component}
 * @private
 */
function match_(comp, Ctor, config, owner) {
	if (isMatch_(comp, Ctor, owner)) {
		comp.startSkipUpdates();
		comp.getDataManager().replaceNonInternal(comp, config);
		comp.stopSkipUpdates();
	} else {
		comp = new Ctor(config, false);
	}
	(0, _data.getData)(comp).config = config;
	return comp;
}

/**
 * Prepares the render operation, resetting the component's data and starting
 * the incremental dom interception.
 * @param {!Component} component
 * @private
 */
function prepareRender_(component) {
	renderingComponents_.push(component);

	var data = (0, _data.getData)(component);
	resetComponentsData_(data.icComponentsData);
	(0, _changes.clearChanges)(data);
	data.rootElementReached = false;
	component.refs = {};

	if (data.childComponents) {
		(0, _unused.schedule)(data.childComponents);
		data.childComponents = null;
	}

	(0, _incrementalDomAop.startInterception)({
		attributes: handleInterceptedAttributesCall_,
		elementOpen: handleInterceptedOpenCall_
	});
}

/**
 * Removes duplicate css classes from the given string.
 * @param {string} classString
 * @return {string}
 * @private
 */
function removeDuplicateClasses_(classString) {
	var classes = [];
	var all = classString.split(/\s+/);
	var used = {};
	for (var i = 0; i < all.length; i++) {
		if (!used[all[i]]) {
			used[all[i]] = true;
			classes.push(all[i]);
		}
	}
	return classes.join(' ');
}

/**
 * Renders the component with incremental dom function calls. This assumes that
 * an incremental dom `patch` is already running, and that this function has
 * been called inside it.
 * @param {!Component} component
 */
function render(component) {
	prepareRender_(component);
	component.getRenderer().renderIncDom(component);
	cleanUpRender_(component);
}

/**
 * Renders the given child node.
 * @param {!Object} child
 */
function renderChild(child) {
	(0, _children.renderChildTree)(child, handleChildRender_);
}

/**
 * Renders the contents for the given tag.
 * @param {!function()|string} tag
 * @param {!Object} config
 * @param {Component=} owner
 * @private
 * @return {Object}
 */
function renderFromTag_(tag, config, owner) {
	if ((0, _metal.isString)(tag) || tag.prototype.getRenderer) {
		var comp = renderSubComponent_(tag, config, owner);
		updateElementIfNotReached_(getComponentBeingRendered(), comp.element);
		return comp.element;
	} else {
		return tag(config);
	}
}

/**
 * Creates and renders the given function, which can either be a simple
 * incremental dom function or a component constructor.
 * @param {!IncrementalDomRenderer} renderer
 * @param {!function()} fnOrCtor Either a simple incremental dom function or a
 *     component constructor.
 * @param {Object|Element=} dataOrElement Optional config data for the
 *     function or parent for the rendered content.
 * @param {Element=} parent Optional parent for the rendered content.
 * @return {!Component} The rendered component's instance.
 */
function renderFunction(renderer, fnOrCtor, dataOrElement, parent) {
	if (!_metalComponent.Component.isComponentCtor(fnOrCtor)) {
		var fn = fnOrCtor;

		var TempComponent = function (_Component) {
			_inherits(TempComponent, _Component);

			function TempComponent() {
				_classCallCheck(this, TempComponent);

				return _possibleConstructorReturn(this, (TempComponent.__proto__ || Object.getPrototypeOf(TempComponent)).apply(this, arguments));
			}

			_createClass(TempComponent, [{
				key: 'created',
				value: function created() {
					var parent = getComponentBeingRendered();
					if (parent) {
						updateContext_(this, parent);
					}
				}
			}, {
				key: 'render',
				value: function render() {
					fn(this.getInitialConfig());
				}
			}]);

			return TempComponent;
		}(_metalComponent.Component);

		TempComponent.RENDERER = renderer;
		fnOrCtor = TempComponent;
	}
	return _metalComponent.Component.render(fnOrCtor, dataOrElement, parent);
}

/**
 * This updates the sub component that is represented by the given data.
 * The sub component is created, added to its parent and rendered. If it
 * had already been rendered before though, it will only have its state
 * updated instead.
 * @param {string|!function()} tagOrCtor The tag name or constructor function.
 * @param {!Object} config The config object for the sub component.
 * @param {ComponentRenderer=} owner
 * @return {!Component} The updated sub component.
 * @private
 */
function renderSubComponent_(tagOrCtor, config, owner) {
	var parent = getComponentBeingRendered();
	owner = owner || parent;

	inheritElementClasses_(parent, config);

	var comp = getSubComponent_(tagOrCtor, config, owner);
	updateContext_(comp, parent);

	var data = (0, _data.getData)(comp);
	data.parent = parent;
	data.owner = owner;

	var parentData = (0, _data.getData)(parent);
	getChildComponents_(parentData).push(comp);
	if (!config.key && !parentData.rootElementReached) {
		config.key = parentData.config.key;
	}

	comp.getRenderer().renderInsidePatch(comp);
	if (!comp.wasRendered) {
		comp.renderComponent();
	}
	return comp;
}

/**
 * Resets the given incremental dom data object, preparing it for the next pass.
 * @param {Object} data
 * @private
 */
function resetComponentsData_(data) {
	if (data) {
		data.prevComps = data.currComps;
		data.currComps = null;
		data.currCount = null;
	}
}
/**
 * Resets all data stored in the given node.
 * @param {!Element} node
 * @private
 */
function resetNodeData_(node) {
	if (_metalDom.domData.has(node)) {
		resetComponentsData_(_metalDom.domData.get(node).icComponentsData);
	}
}

/**
 * Updates the given component's context according to the data from the
 * component that is currently being rendered.
 * @param {!Component} comp
 * @param {!Component} parent
 * @protected
 */
function updateContext_(comp, parent) {
	var context = comp.context;
	var childContext = parent.getChildContext ? parent.getChildContext() : null; // eslint-disable-line
	_metal.object.mixin(context, parent.context, childContext);
	comp.context = context;
}

/**
 * Updates this renderer's component's element with the given values, unless
 * it has already been reached by an earlier call.
 * @param {!Component} component
 * @param {!Element} node
 * @private
 */
function updateElementIfNotReached_(component, node) {
	var data = (0, _data.getData)(component);
	if (!data.rootElementReached) {
		data.rootElementReached = true;
		if (component.element !== node) {
			component.element = node;
		}
	}
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addListenersFromObj = addListenersFromObj;
exports.getComponentFn = getComponentFn;

var _metal = __webpack_require__(0);

/**
 * Adds the listeners specified in the given object.
 * @param {!Component} component
 * @param {Object} events
 * @return {!Array<!EventHandle>} Handles from all subscribed events.
 */
function addListenersFromObj(component, events) {
	var eventNames = Object.keys(events || {});
	var handles = [];
	for (var i = 0; i < eventNames.length; i++) {
		var info = extractListenerInfo_(component, events[eventNames[i]]);
		if (info.fn) {
			var handle = void 0;
			if (info.selector) {
				handle = component.delegate(eventNames[i], info.selector, info.fn); // eslint-disable-line
			} else {
				handle = component.on(eventNames[i], info.fn);
			}
			handles.push(handle);
		}
	}
	return handles;
}

/**
 * Extracts listener info from the given value.
 * @param {!Component} component
 * @param {function()|string|{selector:string,fn:function()}|string} value
 * @return {!{selector:string,fn:function()}}
 * @protected
 */
function extractListenerInfo_(component, value) {
	var info = {
		fn: value
	};
	if ((0, _metal.isObject)(value) && !(0, _metal.isFunction)(value)) {
		info.selector = value.selector;
		info.fn = value.fn;
	}
	if ((0, _metal.isString)(info.fn)) {
		info.fn = getComponentFn(component, info.fn);
	}
	return info;
}

/**
 * Gets the listener function from its name. Throws an error if none exist.
 * @param {!Component} component
 * @param {string} fnName
 * @return {function()}
 */
function getComponentFn(component, fnName) {
	if ((0, _metal.isFunction)(component[fnName])) {
		return component[fnName].bind(component);
	} else {
		console.error('No function named ' + fnName + ' was found in the component\n\t\t\t"' + (0, _metal.getFunctionName)(component.constructor) + '". Make sure that you specify\n\t\t\tvalid function names when adding inline listeners');
	}
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BLACKLIST = {
	components: true,
	context: true,
	element: true,
	refs: true,
	state: true,
	stateKey: true,
	wasRendered: true
};
var DATA_MANAGER_DATA = '__DATA_MANAGER_DATA__';

/**
 * Class to handle Component Data
 */

var ComponentDataManager = function () {
	function ComponentDataManager() {
		_classCallCheck(this, ComponentDataManager);
	}

	_createClass(ComponentDataManager, [{
		key: 'createState_',

		/**
   * Creates the `State` instance that will handle the main component data.
   * @param {!Component} component
   * @param {!Object} data
   * @protected
   */
		value: function createState_(component, data) {
			var state = new _metalState2.default(component.getInitialConfig(), component, component); // eslint-disable-line
			state.setKeysBlacklist(BLACKLIST);
			state.configState(_metal.object.mixin({}, data, _metalState2.default.getStateStatic(component.constructor)));
			this.getManagerData(component).state_ = state;
		}

		/**
   * Disposes of any data being used by the manager in this component.
   * @param {!Component} component
   */

	}, {
		key: 'dispose',
		value: function dispose(component) {
			var data = this.getManagerData(component);
			if (data.state_) {
				data.state_.dispose();
			}
			component[DATA_MANAGER_DATA] = null;
		}

		/**
   * Gets the data with the given name.
   * @param {!Component} component
   * @param {string} name
   * @return {*}
   */

	}, {
		key: 'get',
		value: function get(component, name) {
			return this.getManagerData(component).state_.get(name);
		}

		/**
   * Gets the manager data for the given component.
   * @param {!Component} component
   * @return {Object}
   */

	}, {
		key: 'getManagerData',
		value: function getManagerData(component) {
			return component[DATA_MANAGER_DATA];
		}

		/**
   * Gets the keys for state data that can be synced via `sync` functions.
   * @param {!Component} component
   * @return {!Array<string>}
   */

	}, {
		key: 'getSyncKeys',
		value: function getSyncKeys(component) {
			return this.getManagerData(component).state_.getStateKeys();
		}

		/**
   * Gets the keys for state data.
   * @param {!Component} component
   * @return {!Array<string>}
   */

	}, {
		key: 'getStateKeys',
		value: function getStateKeys(component) {
			return this.getManagerData(component).state_.getStateKeys();
		}

		/**
   * Gets the whole state data.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getState',
		value: function getState(component) {
			return this.getManagerData(component).state_.getState();
		}

		/**
   * Gets the `State` instance being used.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getStateInstance',
		value: function getStateInstance(component) {
			return this.getManagerData(component).state_;
		}

		/**
   * Updates all non internal data with the given values (or to the default
   * value if none is given).
   * @param {!Component} component
   * @param {!Object} data
   * @param {State=} state
   */

	}, {
		key: 'replaceNonInternal',
		value: function replaceNonInternal(component, data) {
			var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getManagerData(component).state_;

			var keys = state.getStateKeys();
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (!state.getStateKeyConfig(key).internal) {
					if (data.hasOwnProperty(key)) {
						state.set(key, data[key]);
					} else {
						state.setDefaultValue(key);
					}
				}
			}
		}

		/**
   * Sets the value of all the specified state keys.
   * @param {!Component} component
   * @param {!Object.<string,*>} state A map of state keys to the values they
   *   should be set to.
   * @param {function()=} callback An optional function that will be run
   *   after the next batched update is triggered.
   */

	}, {
		key: 'setState',
		value: function setState(component, state, callback) {
			this.getManagerData(component).state_.setState(state, callback);
		}

		/**
   * Sets up the specified component's data.
   * @param {!Component} component
   * @param {!Object} data
   */

	}, {
		key: 'setUp',
		value: function setUp(component, data) {
			component[DATA_MANAGER_DATA] = {};
			this.createState_(component, data);
		}
	}]);

	return ComponentDataManager;
}();

exports.default = new ComponentDataManager();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Base class that component renderers should extend from. It defines the
 * required methods all renderers should have.
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentRenderer = function () {
	function ComponentRenderer() {
		_classCallCheck(this, ComponentRenderer);
	}

	_createClass(ComponentRenderer, [{
		key: 'dispose',

		/**
   * Disposes of any data specific to the given component.
   * @param {!Component} component
   */
		value: function dispose() {}

		/**
   * Returns extra configuration for data that should be added to the manager.
   * Sub classes can override to return `State` config for properties that
   * should be added to the component.
   * @param {!Component} component
   */

	}, {
		key: 'getExtraDataConfig',
		value: function getExtraDataConfig() {}

		/**
   * Renders the whole content (including its main element) and informs the
   * component about it. Should be overridden by sub classes.
   * @param {!Component} component
   */

	}, {
		key: 'render',
		value: function render(component) {
			if (!component.element) {
				component.element = document.createElement('div');
			}
			component.informRendered();
		}

		/**
   * Sets up this component to be used by this renderer. Sub classes should
   * override as needed for more behavior.
   * @param {!Component} component
   */

	}, {
		key: 'setUp',
		value: function setUp() {}

		/**
   * Updates the component's element html. This is automatically called when
   * the value of at least one of the component's state keys has changed.
   * Should be implemented by sub classes. Sub classes have to remember to call
   * "informRendered" on the component when any update rendering is done.
   * @param {!Component} component
   * @param {Object.<string, Object>} changes Object containing the names
   *     of all changed state keys, each mapped to an object with its new
   *     (newVal) and previous (prevVal) values.
   */

	}, {
		key: 'update',
		value: function update() {}
	}]);

	return ComponentRenderer;
}();

exports.default = new ComponentRenderer();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(0);

var _metalIncrementalDom = __webpack_require__(10);

var _metalIncrementalDom2 = _interopRequireDefault(_metalIncrementalDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COUNT_PROP = '__metalJsxCount';
var INC_DOM_DATA = '__incrementalDOMData';
var KEY_PREFIX = '_metal_jsx_';

/**
 * Renderer that handles JSX.
 */

var JSXRenderer = function (_IncrementalDomRender) {
	_inherits(JSXRenderer, _IncrementalDomRender);

	function JSXRenderer() {
		_classCallCheck(this, JSXRenderer);

		return _possibleConstructorReturn(this, (JSXRenderer.__proto__ || Object.getPrototypeOf(JSXRenderer)).apply(this, arguments));
	}

	_createClass(JSXRenderer, [{
		key: 'buildShouldUpdateArgs',

		/**
   * @inheritDoc
   */
		value: function buildShouldUpdateArgs(changes) {
			return [changes.state, changes.props];
		}

		/**
   * Called when generating a key for the next dom element to be created via
   * incremental dom. Adds keys to elements that don't have one yet, according
   * to their position in the parent. This helps use cases that use
   * conditionally rendered elements, which is very common in JSX.
   * @param {!Component} component
   * @param {string} key
   * @return {?string}
   */

	}, {
		key: 'generateKey',
		value: function generateKey(component, key) {
			key = _get(JSXRenderer.prototype.__proto__ || Object.getPrototypeOf(JSXRenderer.prototype), 'generateKey', this).call(this, component, key);
			var comp = this.getPatchingComponent();
			var data = comp.getRenderer().getData(comp);
			if (!(0, _metal.isDefAndNotNull)(key)) {
				if (data.rootElementRendered) {
					key = KEY_PREFIX + jsxRenderer_.incElementCount();
				} else if (comp.element && comp.element[INC_DOM_DATA]) {
					key = comp.element[INC_DOM_DATA].key;
				}
			}
			if (!data.rootElementRendered) {
				data.rootElementRendered = true;
			}
			return key;
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'handleNodeRendered',
		value: function handleNodeRendered(node) {
			node[COUNT_PROP] = 0;
		}

		/**
   * Increments the number of children in the current element.
   * @return {number}
   */

	}, {
		key: 'incElementCount',
		value: function incElementCount() {
			var node = IncrementalDOM.currentElement();
			node[COUNT_PROP] = (node[COUNT_PROP] || 0) + 1;
			return node[COUNT_PROP];
		}

		/**
   * Overrides the original method from `IncrementalDomRenderer` so we can
   * keep track of if the root element of the patched component has already
   * been rendered or not.
   * @param {!Component} component
   * @override
   */

	}, {
		key: 'patch',
		value: function patch(component) {
			this.getData(component).rootElementRendered = false;
			_get(JSXRenderer.prototype.__proto__ || Object.getPrototypeOf(JSXRenderer.prototype), 'patch', this).call(this, component);
		}

		/**
   * Overrides the original method from `IncrementalDomRenderer` to handle the
   * case where developers return a child node directly from the "render"
   * function.
   * @param {!Component} component
   * @override
   */

	}, {
		key: 'renderIncDom',
		value: function renderIncDom(component) {
			if (component.render) {
				iDOMHelpers.renderArbitrary(component.render());
			} else {
				_get(JSXRenderer.prototype.__proto__ || Object.getPrototypeOf(JSXRenderer.prototype), 'renderIncDom', this).call(this, component);
			}
		}

		/**
   * Skips the current child in the count (used when a conditional render
   * decided not to render anything).
   */

	}, {
		key: 'skipChild',
		value: function skipChild() {
			IncrementalDOM.elementVoid(jsxRenderer_.incElementCount);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'skipRender',
		value: function skipRender() {
			jsxRenderer_.skipChild();
			_get(JSXRenderer.prototype.__proto__ || Object.getPrototypeOf(JSXRenderer.prototype), 'skipRender', this).call(this);
		}
	}]);

	return JSXRenderer;
}(_metalIncrementalDom2.default.constructor);

var jsxRenderer_ = new JSXRenderer();
jsxRenderer_.RENDERER_NAME = 'jsx';

exports.default = jsxRenderer_;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * A collection of core utility functions.
 * @const
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.abstractMethod = abstractMethod;
exports.disableCompatibilityMode = disableCompatibilityMode;
exports.enableCompatibilityMode = enableCompatibilityMode;
exports.getCompatibilityModeData = getCompatibilityModeData;
exports.getFunctionName = getFunctionName;
exports.getStaticProperty = getStaticProperty;
exports.getUid = getUid;
exports.identityFunction = identityFunction;
exports.isBoolean = isBoolean;
exports.isDef = isDef;
exports.isDefAndNotNull = isDefAndNotNull;
exports.isDocument = isDocument;
exports.isDocumentFragment = isDocumentFragment;
exports.isElement = isElement;
exports.isFunction = isFunction;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isWindow = isWindow;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.isString = isString;
exports.isServerSide = isServerSide;
exports.nullFunction = nullFunction;
var compatibilityModeData_ = void 0;

/**
 * Counter for unique id.
 * @type {Number}
 * @private
 */
var uniqueIdCounter_ = 1;

/**
 * Unique id property prefix.
 * @type {String}
 * @protected
 */
var UID_PROPERTY = exports.UID_PROPERTY = 'core_' + (Math.random() * 1e9 >>> 0);

/**
 * When defining a class Foo with an abstract method bar(), you can do:
 * Foo.prototype.bar = abstractMethod
 *
 * Now if a subclass of Foo fails to override bar(), an error will be thrown
 * when bar() is invoked.
 *
 * @type {!Function}
 * @throws {Error} when invoked to indicate the method should be overridden.
 */
function abstractMethod() {
  throw Error('Unimplemented abstract method');
}

/**
 * Disables Metal.js's compatibility mode.
 */
function disableCompatibilityMode() {
  compatibilityModeData_ = undefined;
}

/**
 * Enables Metal.js's compatibility mode with the following features from rc
 * and 1.x versions:
 *     - Using "key" to reference component instances. In the current version
 *       this should be done via "ref" instead. This allows old code still
 *       using "key" to keep working like before. NOTE: this may cause
 *       problems, since "key" is meant to be used differently. Only use this
 *       if it's not possible to upgrade the code to use "ref" instead.
 * @param {Object=} opt_data Optional object with data to specify more
 *     details, such as:
 *         - renderers {Array} the template renderers that should be in
 *           compatibility mode, either their constructors or strings
 *           representing them (e.g. 'soy' or 'jsx'). By default, all the ones
 *           that extend from IncrementalDomRenderer.
 * @type {Object}
 */
function enableCompatibilityMode() {
  var opt_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  compatibilityModeData_ = opt_data;
}

/**
 * Returns the data used for compatibility mode, or nothing if it hasn't been
 * enabled.
 * @return {Object}
 */
function getCompatibilityModeData() {
  // Compatibility mode can be set via the __METAL_COMPATIBILITY__ global var.
  if (compatibilityModeData_ === undefined) {
    if (typeof window !== 'undefined' && window.__METAL_COMPATIBILITY__) {
      enableCompatibilityMode(window.__METAL_COMPATIBILITY__);
    }
  }
  return compatibilityModeData_;
}

/**
 * Returns the first argument if it's truthy, or the second otherwise.
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @protected
 */
function getFirstTruthy_(a, b) {
  return a || b;
}

/**
 * Gets the name of the given function. If the current browser doesn't
 * support the `name` property, this will calculate it from the function's
 * content string.
 * @param {!function()} fn
 * @return {string}
 */
function getFunctionName(fn) {
  if (!fn.name) {
    var str = fn.toString();
    fn.name = str.substring(9, str.indexOf('('));
  }
  return fn.name;
}

/**
 * Gets the value of a static property in the given class. The value will be
 * inherited from ancestors as expected, unless a custom merge function is given,
 * which can change how the super classes' value for that property will be merged
 * together.
 * The final merged value will be stored in another property, so that it won't
 * be recalculated even if this function is called multiple times.
 * @param {!function()} ctor Class constructor.
 * @param {string} propertyName Property name to be merged.
 * @param {function(*, *):*=} opt_mergeFn Function that receives the merged
 *     value of the property so far and the next value to be merged to it.
 *     Should return these two merged together. If not passed the final property
 *     will be the first truthy value among ancestors.
 */
function getStaticProperty(ctor, propertyName, opt_mergeFn) {
  var mergedName = propertyName + '_MERGED';
  if (!ctor.hasOwnProperty(mergedName)) {
    var merged = ctor.hasOwnProperty(propertyName) ? ctor[propertyName] : null;
    if (ctor.__proto__ && !ctor.__proto__.isPrototypeOf(Function)) {
      var mergeFn = opt_mergeFn || getFirstTruthy_;
      merged = mergeFn(merged, getStaticProperty(ctor.__proto__, propertyName, mergeFn));
    }
    ctor[mergedName] = merged;
  }
  return ctor[mergedName];
}

/**
 * Gets an unique id. If `opt_object` argument is passed, the object is
 * mutated with an unique id. Consecutive calls with the same object
 * reference won't mutate the object again, instead the current object uid
 * returns. See {@link UID_PROPERTY}.
 * @param {Object=} opt_object Optional object to be mutated with the uid. If
 *     not specified this method only returns the uid.
 * @param {boolean=} opt_noInheritance Optional flag indicating if this
 *     object's uid property can be inherited from parents or not.
 * @throws {Error} when invoked to indicate the method should be overridden.
 */
function getUid(opt_object, opt_noInheritance) {
  if (opt_object) {
    var id = opt_object[UID_PROPERTY];
    if (opt_noInheritance && !opt_object.hasOwnProperty(UID_PROPERTY)) {
      id = null;
    }
    return id || (opt_object[UID_PROPERTY] = uniqueIdCounter_++);
  }
  return uniqueIdCounter_++;
}

/**
 * The identity function. Returns its first argument.
 * @param {*=} opt_returnValue The single value that will be returned.
 * @return {?} The first argument.
 */
function identityFunction(opt_returnValue) {
  return opt_returnValue;
}

/**
 * Returns true if the specified value is a boolean.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is boolean.
 */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
 * Returns true if the specified value is not undefined.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is defined.
 */
function isDef(val) {
  return val !== undefined;
}

/**
 * Returns true if value is not undefined or null.
 * @param {*} val
 * @return {boolean}
 */
function isDefAndNotNull(val) {
  return isDef(val) && !isNull(val);
}

/**
 * Returns true if value is a document.
 * @param {*} val
 * @return {boolean}
 */
function isDocument(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.nodeType === 9;
}

/**
 * Returns true if value is a document-fragment.
 * @param {*} val
 * @return {boolean}
 */
function isDocumentFragment(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.nodeType === 11;
}

/**
 * Returns true if value is a dom element.
 * @param {*} val
 * @return {boolean}
 */
function isElement(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.nodeType === 1;
}

/**
 * Returns true if the specified value is a function.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is a function.
 */
function isFunction(val) {
  return typeof val === 'function';
}

/**
 * Returns true if value is null.
 * @param {*} val
 * @return {boolean}
 */
function isNull(val) {
  return val === null;
}

/**
 * Returns true if the specified value is a number.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is a number.
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Returns true if value is a window.
 * @param {*} val
 * @return {boolean}
 */
function isWindow(val) {
  return val !== null && val === val.window;
}

/**
 * Returns true if the specified value is an object. This includes arrays
 * and functions.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is an object.
 */
function isObject(val) {
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  return type === 'object' && val !== null || type === 'function';
}

/**
 * Returns true if value is a Promise.
 * @param {*} val
 * @return {boolean}
 */
function isPromise(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && typeof val.then === 'function';
}

/**
 * Returns true if value is a string.
 * @param {*} val
 * @return {boolean}
 */
function isString(val) {
  return typeof val === 'string' || val instanceof String;
}

/**
 * Sets to true if running inside Node.js environment with extra check for
 * `process.browser` to skip Karma runner environment. Karma environment has
 * `process` defined even though it runs on the browser.
 * @return {boolean}
 */
function isServerSide() {
  return typeof process !== 'undefined' && typeof process.env !== 'undefined' && process.env.NODE_ENV !== 'test' && !process.browser;
}

/**
 * Null function used for default values of callbacks, etc.
 * @return {void} Nothing.
 */
function nullFunction() {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = function () {
	function array() {
		_classCallCheck(this, array);
	}

	_createClass(array, null, [{
		key: 'equal',

		/**
   * Checks if the given arrays have the same content.
   * @param {!Array<*>} arr1
   * @param {!Array<*>} arr2
   * @return {boolean}
   */
		value: function equal(arr1, arr2) {
			if (arr1 === arr2) {
				return true;
			}
			if (arr1.length !== arr2.length) {
				return false;
			}
			for (var i = 0; i < arr1.length; i++) {
				if (arr1[i] !== arr2[i]) {
					return false;
				}
			}
			return true;
		}

		/**
   * Returns the first value in the given array that isn't undefined.
   * @param {!Array} arr
   * @return {*}
   */

	}, {
		key: 'firstDefinedValue',
		value: function firstDefinedValue(arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] !== undefined) {
					return arr[i];
				}
			}
		}

		/**
   * Transforms the input nested array to become flat.
   * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
   * @param {Array.<*>} opt_output Optional output array.
   * @return {Array.<*>} Flat array.
   */

	}, {
		key: 'flatten',
		value: function flatten(arr, opt_output) {
			var output = opt_output || [];
			for (var i = 0; i < arr.length; i++) {
				if (Array.isArray(arr[i])) {
					array.flatten(arr[i], output);
				} else {
					output.push(arr[i]);
				}
			}
			return output;
		}

		/**
   * Removes the first occurrence of a particular value from an array.
   * @param {Array.<T>} arr Array from which to remove value.
   * @param {T} obj Object to remove.
   * @return {boolean} True if an element was removed.
   * @template T
   */

	}, {
		key: 'remove',
		value: function remove(arr, obj) {
			var i = arr.indexOf(obj);
			var rv = void 0;
			if (rv = i >= 0) {
				array.removeAt(arr, i);
			}
			return rv;
		}

		/**
   * Removes from an array the element at index i
   * @param {Array} arr Array or array like object from which to remove value.
   * @param {number} i The index to remove.
   * @return {boolean} True if an element was removed.
   */

	}, {
		key: 'removeAt',
		value: function removeAt(arr, i) {
			return Array.prototype.splice.call(arr, i, 1).length === 1;
		}

		/**
   * Slices the given array, just like Array.prototype.slice, but this
   * is faster and working on all array-like objects (like arguments).
   * @param {!Object} arr Array-like object to slice.
   * @param {number} start The index that should start the slice.
   * @param {number=} opt_end The index where the slice should end, not
   *   included in the final array. If not given, all elements after the
   *   start index will be included.
   * @return {!Array}
   */

	}, {
		key: 'slice',
		value: function slice(arr, start, opt_end) {
			var sliced = [];
			var end = (0, _core.isDef)(opt_end) ? opt_end : arr.length;
			for (var i = start; i < end; i++) {
				sliced.push(arr[i]);
			}
			return sliced;
		}
	}]);

	return array;
}();

exports.default = array;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/*!
 * Polyfill from Google's Closure Library.
 * Copyright 2013 The Closure Library Authors. All Rights Reserved.
 */



Object.defineProperty(exports, "__esModule", {
	value: true
});
var async = {};

/**
 * Throw an item without interrupting the current execution context.  For
 * example, if processing a group of items in a loop, sometimes it is useful
 * to report an error while still allowing the rest of the batch to be
 * processed.
 * @param {*} exception
 */
async.throwException = function (exception) {
	// Each throw needs to be in its own context.
	async.nextTick(function () {
		throw exception;
	});
};

/**
 * Fires the provided callback just before the current callstack unwinds, or as
 * soon as possible after the current JS execution context.
 * @param {function(this:THIS)} callback
 * @param {THIS=} opt_context Object to use as the "this value" when calling
 *     the provided function.
 * @template THIS
 */
async.run = function (callback, opt_context) {
	if (!async.run.workQueueScheduled_) {
		// Nothing is currently scheduled, schedule it now.
		async.nextTick(async.run.processWorkQueue);
		async.run.workQueueScheduled_ = true;
	}

	async.run.workQueue_.push(new async.run.WorkItem_(callback, opt_context));
};

/** @private {boolean} */
async.run.workQueueScheduled_ = false;

/** @private {!Array.<!async.run.WorkItem_>} */
async.run.workQueue_ = [];

/**
 * Run any pending async.run work items. This function is not intended
 * for general use, but for use by entry point handlers to run items ahead of
 * async.nextTick.
 */
async.run.processWorkQueue = function () {
	// NOTE: additional work queue items may be pushed while processing.
	while (async.run.workQueue_.length) {
		// Don't let the work queue grow indefinitely.
		var workItems = async.run.workQueue_;
		async.run.workQueue_ = [];
		for (var i = 0; i < workItems.length; i++) {
			var workItem = workItems[i];
			try {
				workItem.fn.call(workItem.scope);
			} catch (e) {
				async.throwException(e);
			}
		}
	}

	// There are no more work items, reset the work queue.
	async.run.workQueueScheduled_ = false;
};

/**
 * @constructor
 * @final
 * @struct
 * @private
 *
 * @param {function()} fn
 * @param {Object|null|undefined} scope
 */
async.run.WorkItem_ = function (fn, scope) {
	/** @const */
	this.fn = fn;
	/** @const */
	this.scope = scope;
};

/**
 * Fires the provided callbacks as soon as possible after the current JS
 * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
 * reasons.
 * @param {function(this:SCOPE)} callback Callback function to fire as soon as
 *     possible.
 * @param {SCOPE=} opt_context Object in whose scope to call the listener.
 * @template SCOPE
 */
async.nextTick = function (callback, opt_context) {
	var cb = callback;
	if (opt_context) {
		cb = callback.bind(opt_context);
	}
	cb = async.nextTick.wrapCallback_(cb);
	// Introduced and currently only supported by IE10.
	// Verify if variable is defined on the current runtime (i.e., node, browser).
	// Can't use typeof enclosed in a function (such as core.isFunction) or an
	// exception will be thrown when the function is called on an environment
	// where the variable is undefined.
	if (typeof setImmediate === 'function') {
		setImmediate(cb);
		return;
	}
	// Look for and cache the custom fallback version of setImmediate.
	if (!async.nextTick.setImmediate_) {
		async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_();
	}
	async.nextTick.setImmediate_(cb);
};

/**
 * Cache for the setImmediate implementation.
 * @type {function(function())}
 * @private
 */
async.nextTick.setImmediate_ = null;

/**
 * Determines the best possible implementation to run a function as soon as
 * the JS event loop is idle.
 * @return {function(function())} The "setImmediate" implementation.
 * @private
 */
async.nextTick.getSetImmediateEmulator_ = function () {
	// Create a private message channel and use it to postMessage empty messages
	// to ourselves.
	var Channel = void 0;

	// Verify if variable is defined on the current runtime (i.e., node, browser).
	// Can't use typeof enclosed in a function (such as core.isFunction) or an
	// exception will be thrown when the function is called on an environment
	// where the variable is undefined.
	if (typeof MessageChannel === 'function') {
		Channel = MessageChannel;
	}

	// If MessageChannel is not available and we are in a browser, implement
	// an iframe based polyfill in browsers that have postMessage and
	// document.addEventListener. The latter excludes IE8 because it has a
	// synchronous postMessage implementation.
	if (typeof Channel === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener) {
		/** @constructor */
		Channel = function Channel() {
			// Make an empty, invisible iframe.
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = '';
			document.documentElement.appendChild(iframe);
			var win = iframe.contentWindow;
			var doc = win.document;
			doc.open();
			doc.write('');
			doc.close();
			var message = 'callImmediate' + Math.random();
			var origin = win.location.protocol + '//' + win.location.host;
			var onmessage = function (e) {
				// Validate origin and message to make sure that this message was
				// intended for us.
				if (e.origin !== origin && e.data !== message) {
					return;
				}
				this.port1.onmessage();
			}.bind(this);
			win.addEventListener('message', onmessage, false);
			this.port1 = {};
			this.port2 = {
				postMessage: function postMessage() {
					win.postMessage(message, origin);
				}
			};
		};
	}
	if (typeof Channel !== 'undefined') {
		var channel = new Channel();
		// Use a fifo linked list to call callbacks in the right order.
		var head = {};
		var tail = head;
		channel.port1.onmessage = function () {
			head = head.next;
			var cb = head.cb;
			head.cb = null;
			cb();
		};
		return function (cb) {
			tail.next = {
				cb: cb
			};
			tail = tail.next;
			channel.port2.postMessage(0);
		};
	}
	// Implementation for IE6-8: Script elements fire an asynchronous
	// onreadystatechange event when inserted into the DOM.
	if (typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('script')) {
		return function (cb) {
			var script = document.createElement('script');
			script.onreadystatechange = function () {
				// Clean up and call the callback.
				script.onreadystatechange = null;
				script.parentNode.removeChild(script);
				script = null;
				cb();
				cb = null;
			};
			document.documentElement.appendChild(script);
		};
	}
	// Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
	// or more.
	return function (cb) {
		setTimeout(cb, 0);
	};
};

/**
 * Helper function that is overrided to protect callbacks with entry point
 * monitor if the application monitors entry points.
 * @param {function()} callback Callback function to fire as soon as possible.
 * @return {function()} The wrapped callback.
 * @private
 */
async.nextTick.wrapCallback_ = function (opt_returnValue) {
	return opt_returnValue;
};

exports.default = async;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33).setImmediate))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(34);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(9)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Disposable utility. When inherited provides the `dispose` function to its
 * subclass, which is responsible for disposing of any object references
 * when an instance won't be used anymore. Subclasses should override
 * `disposeInternal` to implement any specific disposing logic.
 * @constructor
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Disposable = function () {
	function Disposable() {
		_classCallCheck(this, Disposable);

		/**
   * Flag indicating if this instance has already been disposed.
   * @type {boolean}
   * @protected
   */
		this.disposed_ = false;
	}

	/**
  * Disposes of this instance's object references. Calls `disposeInternal`.
  */


	_createClass(Disposable, [{
		key: 'dispose',
		value: function dispose() {
			if (!this.disposed_) {
				this.disposeInternal();
				this.disposed_ = true;
			}
		}

		/**
   * Subclasses should override this method to implement any specific
   * disposing logic (like clearing references and calling `dispose` on other
   * disposables).
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {}

		/**
   * Checks if this instance has already been disposed.
   * @return {boolean}
   */

	}, {
		key: 'isDisposed',
		value: function isDisposed() {
			return this.disposed_;
		}
	}]);

	return Disposable;
}();

exports.default = Disposable;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var object = function () {
	function object() {
		_classCallCheck(this, object);
	}

	_createClass(object, null, [{
		key: 'mixin',

		/**
   * Copies all the members of a source object to a target object.
   * @param {Object} target Target object.
   * @param {...Object} var_args The objects from which values will be copied.
   * @return {Object} Returns the target object reference.
   */
		value: function mixin(target) {
			var key = void 0,
			    source = void 0;
			for (var i = 1; i < arguments.length; i++) {
				source = arguments[i];
				for (key in source) {
					target[key] = source[key];
				}
			}
			return target;
		}

		/**
   * Returns an object based on its fully qualified external name.
   * @param {string} name The fully qualified name.
   * @param {object=} opt_obj The object within which to look; default is
   *     <code>window</code>.
   * @return {?} The value (object or primitive) or, if not found, undefined.
   */

	}, {
		key: 'getObjectByName',
		value: function getObjectByName(name, opt_obj) {
			var scope = opt_obj || window;
			var parts = name.split('.');
			return parts.reduce(function (part, key) {
				return part[key];
			}, scope);
		}

		/**
   * Returns a new object with the same keys as the given one, but with
   * their values set to the return values of the specified function.
   * @param {!Object} obj
   * @param {!function(string, *)} fn
   * @return {!Object}
   */

	}, {
		key: 'map',
		value: function map(obj, fn) {
			var mappedObj = {};
			var keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
				mappedObj[keys[i]] = fn(keys[i], obj[keys[i]]);
			}
			return mappedObj;
		}

		/**
   * Checks if the two given objects are equal. This is done via a shallow
   * check, including only the keys directly contained by the 2 objects.
   * @return {boolean}
   */

	}, {
		key: 'shallowEqual',
		value: function shallowEqual(obj1, obj2) {
			if (obj1 === obj2) {
				return true;
			}

			var keys1 = Object.keys(obj1);
			var keys2 = Object.keys(obj2);
			if (keys1.length !== keys2.length) {
				return false;
			}

			for (var i = 0; i < keys1.length; i++) {
				if (obj1[keys1[i]] !== obj2[keys1[i]]) {
					return false;
				}
			}
			return true;
		}
	}]);

	return object;
}();

exports.default = object;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var string = function () {
	function string() {
		_classCallCheck(this, string);
	}

	_createClass(string, null, [{
		key: 'caseInsensitiveCompare',

		/**
   * Compares the given strings without taking the case into account.
   * @param {string|number} str1
   * @param {string|number} str2
   * @return {number} Either -1, 0 or 1, according to if the first string is
   *     "smaller", equal or "bigger" than the second given string.
   */
		value: function caseInsensitiveCompare(str1, str2) {
			var test1 = String(str1).toLowerCase();
			var test2 = String(str2).toLowerCase();

			if (test1 < test2) {
				return -1;
			} else if (test1 === test2) {
				return 0;
			} else {
				return 1;
			}
		}

		/**
   * Removes the breaking spaces from the left and right of the string and
   * collapses the sequences of breaking spaces in the middle into single spaces.
   * The original and the result strings render the same way in HTML.
   * @param {string} str A string in which to collapse spaces.
   * @return {string} Copy of the string with normalized breaking spaces.
   */

	}, {
		key: 'collapseBreakingSpaces',
		value: function collapseBreakingSpaces(str) {
			return str.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
		}

		/**
  * Escapes characters in the string that are not safe to use in a RegExp.
  * @param {*} str The string to escape. If not a string, it will be casted
  *     to one.
  * @return {string} A RegExp safe, escaped copy of {@code s}.
  */

	}, {
		key: 'escapeRegex',
		value: function escapeRegex(str) {
			return String(str).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
		}

		/**
  * Returns a string with at least 64-bits of randomness.
  * @return {string} A random string, e.g. sn1s7vb4gcic.
  */

	}, {
		key: 'getRandomString',
		value: function getRandomString() {
			var x = 2147483648;
			return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36);
		}

		/**
   * Calculates the hashcode for a string. The hashcode value is computed by
   * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
   * property of using 31 prime is that the multiplication can be replaced by
   * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
   * Modern VMs do this sort of optimization automatically.
   * @param {String} val Target string.
   * @return {Number} Returns the string hashcode.
   */

	}, {
		key: 'hashCode',
		value: function hashCode(val) {
			var hash = 0;
			for (var i = 0, len = val.length; i < len; i++) {
				hash = 31 * hash + val.charCodeAt(i);
				hash %= 0x100000000;
			}
			return hash;
		}

		/**
   * Replaces interval into the string with specified value, e.g.
   * `replaceInterval("abcde", 1, 4, "")` returns "ae".
   * @param {string} str The input string.
   * @param {Number} start Start interval position to be replaced.
   * @param {Number} end End interval position to be replaced.
   * @param {string} value The value that replaces the specified interval.
   * @return {string}
   */

	}, {
		key: 'replaceInterval',
		value: function replaceInterval(str, start, end, value) {
			return str.substring(0, start) + value + str.substring(end);
		}
	}]);

	return string;
}();

exports.default = string;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(0);

var _validators = __webpack_require__(15);

var _validators2 = _interopRequireDefault(_validators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sugar api that can be used as an alternative for manually building `State`
 * configuration in the expected format. For example, instead of having
 * something like this:
 *
 * ```js
 * MyClass.STATE = {
 *   foo: {
 *     required: true,
 *     validator: validators.number,
 *     value: 13
 *   }
 * };
 * ```
 *
 * You could instead do:
 *
 * ```js
 * MyClass.STATE = {
 *   foo: Config.required().number().value(13)
 * };
 * ```
 */
var Config = {
	/**
 * An object that contains a validator function.
 * @typedef {!Object} ConfigWithValidator
 */

	/**
  * Function that creates `State` object with an `any` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	any: setPrimitiveValidators('any'),

	/**
  * Function that creates `State` object with an `array` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	array: setPrimitiveValidators('array'),

	/**
  * Function that creates `State` object with an `arrayOf` validator.
  * @param {ConfigWithValidator} stateConfig `State` configuration object
  * @return {ConfigWithValidator} `State` configuration object.
  */
	arrayOf: setNestedValidators('arrayOf'),

	/**
  * Function that creates `State` object with a `bool` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	bool: setPrimitiveValidators('bool'),

	/**
  * Function that creates `State` object with a `func` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	func: setPrimitiveValidators('func'),

	/**
  * Function that creates `State` object with an `instanceOf` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	instanceOf: setExplicitValueValidators('instanceOf'),

	/**
  * Function that creates `State` object with a `number` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	number: setPrimitiveValidators('number'),

	/**
  * Function that creates `State` object with an `object` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	object: setPrimitiveValidators('object'),

	/**
  * Function that creates `State` object with an `objectOf` validator.
  * @param {ConfigWithValidator} stateConfig `State` configuration object
  * @return {ConfigWithValidator} `State` configuration object.
  */
	objectOf: setNestedValidators('objectOf'),

	/**
  * Function that creates `State` object with an `oneOf` validator.
  * @param {!Array} values `State` configuration object
  * @return {ConfigWithValidator} `State` configuration object.
  */
	oneOf: setExplicitValueValidators('oneOf'),

	/**
  * Creates `State` configuration object with an `oneOfType` validator.
  * @param {ConfigWithValidator[]} validatorArray Array of `State` configuration objects.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	oneOfType: function oneOfType(validatorArray) {
		validatorArray = validatorArray.map(function (configObj) {
			return configObj.config.validator;
		});

		return this.validator(_validators2.default.oneOfType(validatorArray));
	},


	/**
  * Creates `State` configuration object with a `shapeOf` validator.
  * @param {!Object.<string, ConfigWithValidator>} shapeObj Values being `State` configuration objects.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	shapeOf: function shapeOf(shapeObj) {
		shapeObj = destructShapeOfConfigs(shapeObj);

		return this.validator(_validators2.default.shapeOf(shapeObj));
	},


	/**
  * Function that creates `State` object with an `string` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	string: setPrimitiveValidators('string'),

	/**
  * Adds the `internal` flag to the `State` configuration.
  * @param {boolean} required Flag to set "internal" to. True by default.
  * @return {!Object} `State` configuration object.
  */
	internal: function internal() {
		var internal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		return mergeConfig(this, {
			internal: internal
		});
	},


	/**
  * Adds the `required` flag to the `State` configuration.
  * @param {boolean} required Flag to set "required" to. True by default.
  * @return {!Object} `State` configuration object.
  */
	required: function required() {
		var required = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		return mergeConfig(this, {
			required: required
		});
	},


	/**
  * Adds a setter to the `State` configuration.
  * @param {!function()} setter
  * @return {!Object} `State` configuration object.
  */
	setter: function setter(_setter) {
		return mergeConfig(this, {
			setter: _setter
		});
	},


	/**
  * Adds a validator to the `State` configuration.
  * @param {!function()} validator
  * @return {!Object} `State` configuration object.
  */
	validator: function validator(_validator) {
		return mergeConfig(this, {
			validator: _validator
		});
	},


	/**
  * Adds a default value to the `State` configuration.
  * @param {*} value
  * @return {!Object} `State` configuration object.
  */
	value: function value(_value) {
		return mergeConfig(this, {
			value: _value
		});
	},


	/**
  * Adds a valueFn that will return a default value for the `State` configuration.
  * @param {!function()} valueFn
  * @return {!Object} `State` configuration object.
  */
	valueFn: function valueFn(_valueFn) {
		return mergeConfig(this, {
			valueFn: _valueFn
		});
	},


	/**
  * Adds the `writeOnce` flag to the `State` configuration.
  * @param {boolean} writeOnce Flag to set "writeOnce" to. False by default.
  * @return {!Object} `State` configuration object.
  */
	writeOnce: function writeOnce() {
		var writeOnce = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		return mergeConfig(this, {
			writeOnce: writeOnce
		});
	}
};

/**
 * Recursively sets validators for shapeOf.
 * @param {!Object} shape The shape of specific types.
 * @return {!Object} Shape object with validators as values.
 */
function destructShapeOfConfigs(shape) {
	var keys = Object.keys(shape);

	var retShape = {};

	keys.forEach(function (key) {
		var value = shape[key];

		retShape[key] = value.config && value.config.validator ? value.config.validator : destructShapeOfConfigs(value);
	});

	return retShape;
}

/**
 * Merges the given config object into the one that has been built so far.
 * @param {!Object} context The object calling this function.
 * @param {!Object} config The object to merge to the built config.
 * @return {!Object} The final object containing the built config.
 */
function mergeConfig(context, config) {
	var obj = context;
	if (obj === Config) {
		obj = Object.create(Config);
		obj.config = {};
	}
	_metal.object.mixin(obj.config, config);
	return obj;
}

/**
* Calls validators with provided argument.
* @param {string} name The name of the validator.
* @param {!function()}
*/
function setExplicitValueValidators(name) {
	return function (arg) {
		return this.validator(_validators2.default[name](arg));
	};
}

/**
* Calls validators with a single nested config.
* @param {string} name The name of the validator.
* @return {!function()}
*/
function setNestedValidators(name) {
	return function (arg) {
		return this.validator(_validators2.default[name](arg.config.validator));
	};
}

/**
* Adds primitive type validators to the config object.
* @param {string} name The name of the validator.
* @return {!function()}
*/
function setPrimitiveValidators(name) {
	return function () {
		return this.validator(_validators2.default[name]);
	};
}

exports.default = Config;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(0);

var _metalEvents = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * State adds support for having object properties that can be watched for
 * changes, as well as configured with validators, setters and other options.
 * See the `configState` method for a complete list of available configuration
 * options for each state key.
 * @extends {EventEmitter}
 */
var State = function (_EventEmitter) {
	_inherits(State, _EventEmitter);

	/**
  * Constructor function for `State`.
  * @param {Object=} opt_config Optional config object with initial values to
  *     set state properties to.
  * @param {Object=} opt_obj Optional object that should hold the state
  *     properties. If none is given, they will be added directly to `this`
  *     instead.
  * @param {Object=} opt_context Optional context to call functions (like
  *     validators and setters) on. Defaults to `this`.
  */
	function State(opt_config, opt_obj, opt_context) {
		_classCallCheck(this, State);

		/**
   * Context to call functions (like validators and setters) on.
   * @type {!Object}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this));

		_this.context_ = opt_context || _this;

		/**
   * Map of keys that can not be used as state keys.
   * @type {Object<string, boolean>}
   * @protected
   */
		_this.keysBlacklist_ = null;

		/**
   * Object that should hold the state properties.
   * @type {!Object}
   * @protected
   */
		_this.obj_ = opt_obj || _this;

		_this.eventData_ = null;

		/**
   * Object with information about the batch event that is currently
   * scheduled, or null if none is.
   * @type {Object}
   * @protected
   */
		_this.scheduledBatchData_ = null;

		/**
   * Object that contains information about all this instance's state keys.
   * @type {!Object<string, !Object>}
   * @protected
   */
		_this.stateInfo_ = {};

		_this.stateConfigs_ = {};

		_this.initialValues_ = _metal.object.mixin({}, opt_config);

		_this.setShouldUseFacade(true);
		_this.configStateFromStaticHint_();

		Object.defineProperty(_this.obj_, State.STATE_REF_KEY, {
			configurable: true,
			enumerable: false,
			value: _this
		});
		return _this;
	}

	/**
  * Logs an error if the given property is required but wasn't given.
  * @param {string} name
  * @protected
  */


	_createClass(State, [{
		key: 'assertGivenIfRequired_',
		value: function assertGivenIfRequired_(name) {
			var config = this.stateConfigs_[name];
			if (config.required) {
				var info = this.getStateInfo(name);
				var value = info.state === State.KeyStates.INITIALIZED ? this.get(name) : this.initialValues_[name];
				if (!(0, _metal.isDefAndNotNull)(value)) {
					var errorMessage = 'The property called "' + name + '" is required but didn\'t receive a value.';
					if (this.shouldThrowValidationError()) {
						throw new Error(errorMessage);
					} else {
						console.error(errorMessage);
					}
				}
			}
		}

		/**
   * Logs an error if the `validatorReturn` is instance of `Error`.
   * @param {*} validatorReturn
   * @protected
   */

	}, {
		key: 'assertValidatorReturnInstanceOfError_',
		value: function assertValidatorReturnInstanceOfError_(validatorReturn) {
			if (validatorReturn instanceof Error) {
				if (this.shouldThrowValidationError()) {
					throw validatorReturn;
				} else {
					console.error('Warning: ' + validatorReturn);
				}
			}
		}

		/**
   * Checks that the given name is a valid state key name. If it's not, an error
   * will be thrown.
   * @param {string} name The name to be validated.
   * @throws {Error}
   * @protected
   */

	}, {
		key: 'assertValidStateKeyName_',
		value: function assertValidStateKeyName_(name) {
			if (this.keysBlacklist_ && this.keysBlacklist_[name]) {
				throw new Error('It\'s not allowed to create a state key with the name "' + name + '".');
			}
		}

		/**
   * Builds the property definition object for the specified state key.
   * @param {string} name The name of the key.
   * @return {!Object}
   * @protected
   */

	}, {
		key: 'buildKeyPropertyDef_',
		value: function buildKeyPropertyDef_(name) {
			return {
				configurable: true,
				enumerable: true,
				get: function get() {
					return this[State.STATE_REF_KEY].getStateKeyValue_(name);
				},
				set: function set(val) {
					this[State.STATE_REF_KEY].setStateKeyValue_(name, val);
				}
			};
		}

		/**
   * Calls the requested function, running the appropriate code for when it's
   * passed as an actual function object or just the function's name.
   * @param {!Function|string} fn Function, or name of the function to run.
   * @param {!Array} An optional array of parameters to be passed to the
   *   function that will be called.
   * @return {*} The return value of the called function.
   * @protected
   */

	}, {
		key: 'callFunction_',
		value: function callFunction_(fn, args) {
			if ((0, _metal.isString)(fn)) {
				return this.context_[fn].apply(this.context_, args);
			} else if ((0, _metal.isFunction)(fn)) {
				return fn.apply(this.context_, args);
			}
		}

		/**
   * Calls the state key's setter, if there is one.
   * @param {string} name The name of the key.
   * @param {*} value The value to be set.
   * @param {*} currentValue The current value.
   * @return {*} The final value to be set.
   * @protected
   */

	}, {
		key: 'callSetter_',
		value: function callSetter_(name, value, currentValue) {
			var config = this.stateConfigs_[name];
			if (config.setter) {
				value = this.callFunction_(config.setter, [value, currentValue]);
			}
			return value;
		}

		/**
   * Calls the state key's validator, if there is one. Emits console
   * warning if validator returns a string.
   * @param {string} name The name of the key.
   * @param {*} value The value to be validated.
   * @return {boolean} Flag indicating if value is valid or not.
   * @protected
   */

	}, {
		key: 'callValidator_',
		value: function callValidator_(name, value) {
			var config = this.stateConfigs_[name];
			if (config.validator) {
				var validatorReturn = this.callFunction_(config.validator, [value, name, this.context_]);
				this.assertValidatorReturnInstanceOfError_(validatorReturn);
				return validatorReturn;
			}
			return true;
		}

		/**
   * Checks if the it's allowed to write on the requested state key.
   * @param {string} name The name of the key.
   * @return {boolean}
   */

	}, {
		key: 'canSetState',
		value: function canSetState(name) {
			var info = this.getStateInfo(name);
			return !this.stateConfigs_[name].writeOnce || !info.written;
		}

		/**
   * Adds the given key(s) to the state, together with its(their) configs.
   * Config objects support the given settings:
   *     required - When set to `true`, causes errors to be printed (via
   *     `console.error`) if no value is given for the property.
   *
   *     setter - Function for normalizing state key values. It receives the new
   *     value that was set, and returns the value that should be stored.
   *
   *     validator - Function that validates state key values. When it returns
   *     false, the new value is ignored. When it returns an instance of Error,
   *     it will emit the error to the console.
   *
   *     value - The default value for the state key. Note that setting this to
   *     an object will cause all class instances to use the same reference to
   *     the object. To have each instance use a different reference for objects,
   *     use the `valueFn` option instead.
   *
   *     valueFn - A function that returns the default value for a state key.
   *
   *     writeOnce - Ignores writes to the state key after it's been first
   *     written to. That is, allows writes only when setting the value for the
   *     first time.
   * @param {!Object.<string, !Object>|string} configs An object that maps
   *     configuration options for keys to be added to the state.
   * @param {boolean|Object|*=} opt_context The context where the added state
   *     keys will be defined (defaults to `this`), or false if they shouldn't
   *     be defined at all.
   */

	}, {
		key: 'configState',
		value: function configState(configs, opt_context) {
			var names = Object.keys(configs);
			if (names.length === 0) {
				return;
			}

			if (opt_context !== false) {
				var props = {};
				for (var i = 0; i < names.length; i++) {
					var name = names[i];
					this.assertValidStateKeyName_(name);
					props[name] = this.buildKeyPropertyDef_(name);
				}
				Object.defineProperties(opt_context || this.obj_, props);
			}

			this.stateConfigs_ = configs;
			for (var _i = 0; _i < names.length; _i++) {
				var _name = names[_i];
				configs[_name] = configs[_name].config ? configs[_name].config : configs[_name];
				this.assertGivenIfRequired_(names[_i]);
				this.validateInitialValue_(names[_i]);
			}
		}

		/**
   * Adds state keys from super classes static hint `MyClass.STATE = {};`.
   * @protected
   */

	}, {
		key: 'configStateFromStaticHint_',
		value: function configStateFromStaticHint_() {
			var ctor = this.constructor;
			if (ctor !== State) {
				var defineContext = void 0;
				if (this.obj_ === this) {
					var staticKey = State.STATE_STATIC_HINT_CONFIGURED;

					ctor[staticKey] = ctor[staticKey] || {};

					defineContext = ctor[staticKey][ctor.name] ? false : ctor.prototype;
					ctor[staticKey][ctor.name] = true;
				}
				this.configState(State.getStateStatic(ctor), defineContext);
			}
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			_get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'disposeInternal', this).call(this);
			this.initialValues_ = null;
			this.stateInfo_ = null;
			this.stateConfigs_ = null;
			this.scheduledBatchData_ = null;
		}

		/**
   * Emits the state change batch event.
   * @protected
   */

	}, {
		key: 'emitBatchEvent_',
		value: function emitBatchEvent_() {
			if (!this.isDisposed()) {
				this.context_.emit('stateWillChange', this.scheduledBatchData_);

				var data = this.scheduledBatchData_;
				this.scheduledBatchData_ = null;
				this.context_.emit('stateChanged', data);
			}
		}

		/**
   * Returns the value of the requested state key.
   * Note: this can and should be accomplished by accessing the value as a
   * regular property. This should only be used in cases where a function is
   * actually needed.
   * @param {string} name
   * @return {*}
   */

	}, {
		key: 'get',
		value: function get(name) {
			return this.obj_[name];
		}

		/**
   * Returns an object that maps state keys to their values.
   * @param {Array<string>=} opt_names A list of names of the keys that should
   *   be returned. If none is given, the whole state will be returned.
   * @return {Object.<string, *>}
   */

	}, {
		key: 'getState',
		value: function getState(opt_names) {
			var state = {};
			var names = opt_names || this.getStateKeys();

			for (var i = 0; i < names.length; i++) {
				state[names[i]] = this.get(names[i]);
			}

			return state;
		}

		/**
   * Gets information about the specified state property.
   * @param {string} name
   * @return {!Object}
   */

	}, {
		key: 'getStateInfo',
		value: function getStateInfo(name) {
			if (!this.stateInfo_[name]) {
				this.stateInfo_[name] = {};
			}
			return this.stateInfo_[name];
		}

		/**
   * Gets the config object for the requested state key.
   * @param {string} name The key's name.
   * @return {Object}
   * @protected
   */

	}, {
		key: 'getStateKeyConfig',
		value: function getStateKeyConfig(name) {
			return this.stateConfigs_ ? this.stateConfigs_[name] : null;
		}

		/**
   * Returns an array with all state keys.
   * @return {!Array.<string>}
   */

	}, {
		key: 'getStateKeys',
		value: function getStateKeys() {
			return this.stateConfigs_ ? Object.keys(this.stateConfigs_) : [];
		}

		/**
   * Gets the value of the specified state key. This is passed as that key's
   * getter to the `Object.defineProperty` call inside the `addKeyToState` method.
   * @param {string} name The name of the key.
   * @return {*}
   * @protected
   */

	}, {
		key: 'getStateKeyValue_',
		value: function getStateKeyValue_(name) {
			if (!this.warnIfDisposed_(name)) {
				this.initStateKey_(name);
				return this.getStateInfo(name).value;
			}
		}

		/**
   * Merges the STATE static variable for the given constructor function.
   * @param  {!Function} ctor Constructor function.
   * @return {boolean} Returns true if merge happens, false otherwise.
   * @static
   */

	}, {
		key: 'hasBeenSet',


		/**
   * Checks if the value of the state key with the given name has already been
   * set. Note that this doesn't run the key's getter.
   * @param {string} name The name of the key.
   * @return {boolean}
   */
		value: function hasBeenSet(name) {
			var info = this.getStateInfo(name);
			return info.state === State.KeyStates.INITIALIZED || this.hasInitialValue_(name);
		}

		/**
   * Checks if an initial value was given to the specified state property.
   * @param {string} name The name of the key.
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'hasInitialValue_',
		value: function hasInitialValue_(name) {
			return this.initialValues_.hasOwnProperty(name) && (0, _metal.isDef)(this.initialValues_[name]);
		}

		/**
   * Checks if the given key is present in this instance's state.
   * @param {string} key
   * @return {boolean}
   */

	}, {
		key: 'hasStateKey',
		value: function hasStateKey(key) {
			if (!this.warnIfDisposed_(key)) {
				return !!this.stateConfigs_[key];
			}
		}

		/**
   * Informs of changes to a state key's value through an event. Won't trigger
   * the event if the value hasn't changed or if it's being initialized.
   * @param {string} name The name of the key.
   * @param {*} prevVal The previous value of the key.
   * @protected
   */

	}, {
		key: 'informChange_',
		value: function informChange_(name, prevVal) {
			if (this.shouldInformChange_(name, prevVal)) {
				var data = _metal.object.mixin({
					key: name,
					newVal: this.get(name),
					prevVal: prevVal
				}, this.eventData_);
				this.context_.emit(name + 'Changed', data);
				this.context_.emit('stateKeyChanged', data);
				this.scheduleBatchEvent_(data);
			}
		}

		/**
   * Initializes the specified state key, giving it a first value.
   * @param {string} name The name of the key.
   * @protected
   */

	}, {
		key: 'initStateKey_',
		value: function initStateKey_(name) {
			var info = this.getStateInfo(name);
			if (info.state !== State.KeyStates.UNINITIALIZED) {
				return;
			}

			info.state = State.KeyStates.INITIALIZING;
			this.setInitialValue_(name);
			if (!info.written) {
				this.setDefaultValue(name);
			}
			info.state = State.KeyStates.INITIALIZED;
		}

		/**
   * Merges two values for the STATE property into a single object.
   * @param {Object} mergedVal
   * @param {Object} currVal
   * @return {!Object} The merged value.
   * @static
   */

	}, {
		key: 'removeStateKey',


		/**
   * Removes the requested state key.
   * @param {string} name The name of the key.
   */
		value: function removeStateKey(name) {
			this.stateInfo_[name] = null;
			this.stateConfigs_[name] = null;
			delete this.obj_[name];
		}

		/**
   * Schedules a state change batch event to be emitted asynchronously.
   * @param {!Object} changeData Information about a state key's update.
   * @protected
   */

	}, {
		key: 'scheduleBatchEvent_',
		value: function scheduleBatchEvent_(changeData) {
			if (!this.scheduledBatchData_) {
				_metal.async.nextTick(this.emitBatchEvent_, this);
				this.scheduledBatchData_ = _metal.object.mixin({
					changes: {}
				}, this.eventData_);
			}

			var name = changeData.key;
			var changes = this.scheduledBatchData_.changes;
			if (changes[name]) {
				changes[name].newVal = changeData.newVal;
			} else {
				changes[name] = changeData;
			}
		}

		/**
   * Sets the value of the requested state key.
   * Note: this can and should be accomplished by setting the state key as a
   * regular property. This should only be used in cases where a function is
   * actually needed.
   * @param {string} name
   * @param {*} value
   * @return {*}
   */

	}, {
		key: 'set',
		value: function set(name, value) {
			if (this.hasStateKey(name)) {
				this.obj_[name] = value;
			}
		}

		/**
   * Sets the default value of the requested state key.
   * @param {string} name The name of the key.
   * @return {*}
   */

	}, {
		key: 'setDefaultValue',
		value: function setDefaultValue(name) {
			var config = this.stateConfigs_[name];

			if (config.value !== undefined) {
				this.set(name, config.value);
			} else {
				this.set(name, this.callFunction_(config.valueFn));
			}
		}

		/**
   * Sets data to be sent with all events emitted from this instance.
   * @param {Object}
   */

	}, {
		key: 'setEventData',
		value: function setEventData(data) {
			this.eventData_ = data;
		}

		/**
   * Sets the initial value of the requested state key.
   * @param {string} name The name of the key.
   * @return {*}
   * @protected
   */

	}, {
		key: 'setInitialValue_',
		value: function setInitialValue_(name) {
			if (this.hasInitialValue_(name)) {
				this.set(name, this.initialValues_[name]);
				this.initialValues_[name] = undefined;
			}
		}

		/**
   * Sets a map of keys that are not valid state keys.
   * @param {!Object<string, boolean>}
   */

	}, {
		key: 'setKeysBlacklist',
		value: function setKeysBlacklist(blacklist) {
			this.keysBlacklist_ = blacklist;
		}

		/**
   * Sets the value of all the specified state keys.
   * @param {!Object.<string,*>} values A map of state keys to the values they
   *   should be set to.
   * @param {function()=} opt_callback An optional function that will be run
   *   after the next batched update is triggered.
   */

	}, {
		key: 'setState',
		value: function setState(values, opt_callback) {
			var _this2 = this;

			Object.keys(values).forEach(function (name) {
				return _this2.set(name, values[name]);
			});
			if (opt_callback && this.scheduledBatchData_) {
				this.context_.once('stateChanged', opt_callback);
			}
		}

		/**
   * Sets the value of the specified state key. This is passed as that key's
   * setter to the `Object.defineProperty` call inside the `addKeyToState`
   * method.
   * @param {string} name The name of the key.
   * @param {*} value The new value of the key.
   * @protected
   */

	}, {
		key: 'setStateKeyValue_',
		value: function setStateKeyValue_(name, value) {
			if (this.warnIfDisposed_(name) || !this.canSetState(name) || !this.validateKeyValue_(name, value)) {
				return;
			}

			var prevVal = this.get(name);
			var info = this.getStateInfo(name);
			info.value = this.callSetter_(name, value, prevVal);
			this.assertGivenIfRequired_(name);
			info.written = true;
			this.informChange_(name, prevVal);
		}

		/**
   * Checks if we should inform about a state update. Updates are ignored during
   * state initialization. Otherwise, updates to primitive values are only
   * informed when the new value is different from the previous one. Updates to
   * objects (which includes functions and arrays) are always informed outside
   * initialization though, since we can't be sure if all of the internal data
   * has stayed the same.
   * @param {string} name The name of the key.
   * @param {*} prevVal The previous value of the key.
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'shouldInformChange_',
		value: function shouldInformChange_(name, prevVal) {
			var info = this.getStateInfo(name);
			return info.state === State.KeyStates.INITIALIZED && ((0, _metal.isObject)(prevVal) || prevVal !== this.get(name));
		}

		/**
   * Returns a boolean that determines whether or not should throw error when
   * vaildator functions returns an `Error` instance.
   * @return {boolean} By default returns false.
   */

	}, {
		key: 'shouldThrowValidationError',
		value: function shouldThrowValidationError() {
			return false;
		}

		/**
   * Validates the initial value for the state property with the given name.
   * @param {string} name
   * @protected
   */

	}, {
		key: 'validateInitialValue_',
		value: function validateInitialValue_(name) {
			if (this.initialValues_.hasOwnProperty(name) && !this.callValidator_(name, this.initialValues_[name])) {

				delete this.initialValues_[name];
			}
		}

		/**
   * Validates the state key's value, which includes calling the validator
   * defined in the key's configuration object, if there is one.
   * @param {string} name The name of the key.
   * @param {*} value The value to be validated.
   * @return {boolean} Flag indicating if value is valid or not.
   * @protected
   */

	}, {
		key: 'validateKeyValue_',
		value: function validateKeyValue_(name, value) {
			var info = this.getStateInfo(name);
			return info.state === State.KeyStates.INITIALIZING || this.callValidator_(name, value);
		}

		/**
   * Warns if this instance has already been disposed.
   * @param {string} name Name of the property to be accessed if not disposed.
   * @return {boolean} True if disposed, or false otherwise.
   * @protected
   */

	}, {
		key: 'warnIfDisposed_',
		value: function warnIfDisposed_(name) {
			var disposed = this.isDisposed();
			if (disposed) {
				console.warn('Error. Trying to access property "' + name + '" on disposed instance');
			}
			return disposed;
		}
	}], [{
		key: 'getStateStatic',
		value: function getStateStatic(ctor) {
			return (0, _metal.getStaticProperty)(ctor, 'STATE', State.mergeState);
		}
	}, {
		key: 'mergeState',
		value: function mergeState(mergedVal, currVal) {
			return _metal.object.mixin({}, currVal, mergedVal);
		}
	}]);

	return State;
}(_metalEvents.EventEmitter);

/**
 * Constant used as key on State instance for storing property definition.
 * @type {!string}
 */


State.STATE_REF_KEY = '__METAL_STATE_REF_KEY__';

/**
 * Constant used as key on class constructors that extend from State, stores
 * which constructors have had their static STATE configured so that
 * configuration of STATE is not repeated.
 * @type {!string}
 */
State.STATE_STATIC_HINT_CONFIGURED = '__METAL_STATE_STATIC_HINT_CONFIGURED__';

/**
 * Constants that represent the states that a state key can be in.
 * @type {!Object}
 */
State.KeyStates = {
	UNINITIALIZED: undefined,
	INITIALIZING: 1,
	INITIALIZED: 2
};

exports.default = State;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _EventHandle = __webpack_require__(17);

var _EventHandle2 = _interopRequireDefault(_EventHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var singleArray_ = [0];

/**
 * EventEmitter utility.
 * @constructor
 * @extends {Disposable}
 */

var EventEmitter = function (_Disposable) {
	_inherits(EventEmitter, _Disposable);

	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		/**
   * Holds event listeners scoped by event type.
   * @type {Object<string, !Array<!function()>>}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

		_this.events_ = null;

		/**
   * Handlers that are triggered when an event is listened to.
   * @type {Array}
   */
		_this.listenerHandlers_ = null;

		/**
   * Configuration option which determines if an event facade should be sent
   * as a param of listeners when emitting events. If set to true, the facade
   * will be passed as the first argument of the listener.
   * @type {boolean}
   * @protected
   */
		_this.shouldUseFacade_ = false;
		return _this;
	}

	/**
  * Adds a handler to given holder variable. If the holder doesn't have a
  * value yet, it will receive the handler directly. If the holder is an array,
  * the value will just be added to it. Otherwise, the holder will be set to a
  * new array containing its previous value plus the new handler.
  * @param {*} holder
  * @param {!function()|Object} handler
  * @return {*} The holder's new value.
  * @protected
  */


	_createClass(EventEmitter, [{
		key: 'addHandler_',
		value: function addHandler_(holder, handler) {
			if (!holder) {
				holder = handler;
			} else {
				if (!Array.isArray(holder)) {
					holder = [holder];
				}
				holder.push(handler);
			}
			return holder;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'addListener',
		value: function addListener(event, listener, opt_default) {
			this.validateListener_(listener);

			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.addSingleListener_(events[i], listener, opt_default);
			}

			return new _EventHandle2.default(this, event, listener);
		}

		/**
   * Adds a listener to the end of the listeners array for a single event.
   * @param {string} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   * @param {Function=} opt_origin The original function that was added as a
   *   listener, if there is any.
   * @protected
   */

	}, {
		key: 'addSingleListener_',
		value: function addSingleListener_(event, listener, opt_default, opt_origin) {
			this.runListenerHandlers_(event);
			if (opt_default || opt_origin) {
				listener = {
					default: opt_default,
					fn: listener,
					origin: opt_origin
				};
			}
			this.events_ = this.events_ || {};
			this.events_[event] = this.addHandler_(this.events_[event], listener);
		}

		/**
   * Builds facade for the given event.
   * @param {string} event
   * @return {Object}
   * @protected
   */

	}, {
		key: 'buildFacade_',
		value: function buildFacade_(event) {
			if (this.getShouldUseFacade()) {
				var facade = {
					preventDefault: function preventDefault() {
						facade.preventedDefault = true;
					},
					target: this,
					type: event
				};
				return facade;
			}
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.events_ = null;
		}

		/**
   * Execute each of the listeners in order with the supplied arguments.
   * @param {string} event
   * @param {*} opt_args [arg1], [arg2], [...]
   * @return {boolean} Returns true if event had listeners, false otherwise.
   */

	}, {
		key: 'emit',
		value: function emit(event) {
			var listeners = this.getRawListeners_(event);
			if (listeners.length === 0) {
				return false;
			}

			var args = _metal.array.slice(arguments, 1);
			this.runListeners_(listeners, args, this.buildFacade_(event));
			return true;
		}

		/**
   * Gets the listener objects for the given event, if there are any.
   * @param {string} event
   * @return {!Array}
   * @protected
   */

	}, {
		key: 'getRawListeners_',
		value: function getRawListeners_(event) {
			var directListeners = toArray(this.events_ && this.events_[event]);
			return directListeners.concat(toArray(this.events_ && this.events_['*']));
		}

		/**
   * Gets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @return {boolean}
   */

	}, {
		key: 'getShouldUseFacade',
		value: function getShouldUseFacade() {
			return this.shouldUseFacade_;
		}

		/**
   * Returns an array of listeners for the specified event.
   * @param {string} event
   * @return {Array} Array of listeners.
   */

	}, {
		key: 'listeners',
		value: function listeners(event) {
			return this.getRawListeners_(event).map(function (listener) {
				return listener.fn ? listener.fn : listener;
			});
		}

		/**
   * Adds a listener that will be invoked a fixed number of times for the
   * events. After each event is triggered the specified amount of times, the
   * listener is removed for it.
   * @param {!(Array|string)} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'many',
		value: function many(event, amount, listener) {
			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.many_(events[i], amount, listener);
			}

			return new _EventHandle2.default(this, event, listener);
		}

		/**
   * Adds a listener that will be invoked a fixed number of times for a single
   * event. After the event is triggered the specified amount of times, the
   * listener is removed.
   * @param {string} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @protected
   */

	}, {
		key: 'many_',
		value: function many_(event, amount, listener) {
			var self = this;

			if (amount <= 0) {
				return;
			}

			function handlerInternal() {
				if (--amount === 0) {
					self.removeListener(event, handlerInternal);
				}
				listener.apply(self, arguments);
			}

			self.addSingleListener_(event, handlerInternal, false, listener);
		}

		/**
   * Checks if a listener object matches the given listener function. To match,
   * it needs to either point to that listener or have it as its origin.
   * @param {!Object} listenerObj
   * @param {!Function} listener
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'matchesListener_',
		value: function matchesListener_(listenerObj, listener) {
			var fn = listenerObj.fn || listenerObj;
			return fn === listener || listenerObj.origin && listenerObj.origin === listener;
		}

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'off',
		value: function off(event, listener) {
			this.validateListener_(listener);
			if (!this.events_) {
				return this;
			}

			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.events_[events[i]] = this.removeMatchingListenerObjs_(toArray(this.events_[events[i]]), listener);
			}

			return this;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'on',
		value: function on() {
			return this.addListener.apply(this, arguments);
		}

		/**
   * Adds handler that gets triggered when an event is listened to on this
   * instance.
   * @param {!function()}
   */

	}, {
		key: 'onListener',
		value: function onListener(handler) {
			this.listenerHandlers_ = this.addHandler_(this.listenerHandlers_, handler);
		}

		/**
   * Adds a one time listener for the events. This listener is invoked only the
   * next time each event is fired, after which it is removed.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'once',
		value: function once(events, listener) {
			return this.many(events, 1, listener);
		}

		/**
   * Removes all listeners, or those of the specified events. It's not a good
   * idea to remove listeners that were added elsewhere in the code,
   * especially when it's on an emitter that you didn't create.
   * @param {(Array|string)=} opt_events
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners(opt_events) {
			if (this.events_) {
				if (opt_events) {
					var events = this.toEventsArray_(opt_events);
					for (var i = 0; i < events.length; i++) {
						this.events_[events[i]] = null;
					}
				} else {
					this.events_ = null;
				}
			}
			return this;
		}

		/**
   * Removes all listener objects from the given array that match the given
   * listener function.
   * @param {Array.<Object>} listenerObjs
   * @param {!Function} listener
   * @return {Array.<Object>|Object} The new listeners array for this event.
   * @protected
   */

	}, {
		key: 'removeMatchingListenerObjs_',
		value: function removeMatchingListenerObjs_(listenerObjs, listener) {
			var finalListeners = [];
			for (var i = 0; i < listenerObjs.length; i++) {
				if (!this.matchesListener_(listenerObjs[i], listener)) {
					finalListeners.push(listenerObjs[i]);
				}
			}
			return finalListeners.length > 0 ? finalListeners : null;
		}

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'removeListener',
		value: function removeListener() {
			return this.off.apply(this, arguments);
		}

		/**
   * Runs the handlers when an event is listened to.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'runListenerHandlers_',
		value: function runListenerHandlers_(event) {
			var handlers = this.listenerHandlers_;
			if (handlers) {
				handlers = toArray(handlers);
				for (var i = 0; i < handlers.length; i++) {
					handlers[i](event);
				}
			}
		}

		/**
   * Runs the given listeners.
   * @param {!Array} listeners
   * @param {!Array} args
   * @param (Object) facade
   * @protected
   */

	}, {
		key: 'runListeners_',
		value: function runListeners_(listeners, args, facade) {
			if (facade) {
				args.push(facade);
			}

			var defaultListeners = [];
			for (var i = 0; i < listeners.length; i++) {
				var listener = listeners[i].fn || listeners[i];
				if (listeners[i].default) {
					defaultListeners.push(listener);
				} else {
					listener.apply(this, args);
				}
			}
			if (!facade || !facade.preventedDefault) {
				for (var j = 0; j < defaultListeners.length; j++) {
					defaultListeners[j].apply(this, args);
				}
			}
		}

		/**
   * Sets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @param {boolean} shouldUseFacade
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'setShouldUseFacade',
		value: function setShouldUseFacade(shouldUseFacade) {
			this.shouldUseFacade_ = shouldUseFacade;
			return this;
		}

		/**
   * Converts the parameter to an array if only one event is given. Reuses the
   * same array each time this conversion is done, to avoid using more memory
   * than necessary.
   * @param  {!(Array|string)} events
   * @return {!Array}
   * @protected
   */

	}, {
		key: 'toEventsArray_',
		value: function toEventsArray_(events) {
			if ((0, _metal.isString)(events)) {
				singleArray_[0] = events;
				events = singleArray_;
			}
			return events;
		}

		/**
   * Checks if the given listener is valid, throwing an exception when it's not.
   * @param  {*} listener
   * @protected
   */

	}, {
		key: 'validateListener_',
		value: function validateListener_(listener) {
			if (!(0, _metal.isFunction)(listener)) {
				throw new TypeError('Listener must be a function');
			}
		}
	}]);

	return EventEmitter;
}(_metal.Disposable);

function toArray(val) {
	val = val || [];
	return Array.isArray(val) ? val : [val];
}

exports.default = EventEmitter;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventEmitterProxy utility. It's responsible for linking two EventEmitter
 * instances together, emitting events from the first emitter through the
 * second one. That means that listening to a supported event on the target
 * emitter will mean listening to it on the origin emitter as well.
 * @param {EventEmitter} originEmitter Events originated on this emitter
 *   will be fired for the target emitter's listeners as well.
 * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
 *   will also be triggered when the event is fired by the origin emitter.
 * @param {Object} opt_blacklist Optional blacklist of events that should not be
 *   proxied.
 * @constructor
 * @extends {Disposable}
 */
var EventEmitterProxy = function (_Disposable) {
	_inherits(EventEmitterProxy, _Disposable);

	function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
		_classCallCheck(this, EventEmitterProxy);

		/**
   * Map of events that should not be proxied.
   * @type {Object}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventEmitterProxy.__proto__ || Object.getPrototypeOf(EventEmitterProxy)).call(this));

		_this.blacklist_ = opt_blacklist;

		/**
   * The origin emitter. This emitter's events will be proxied through the
   * target emitter.
   * @type {EventEmitter}
   * @protected
   */
		_this.originEmitter_ = originEmitter;

		/**
   * A list of events that are pending to be listened by an actual origin
   * emitter. Events are stored here when the origin doesn't exist, so they
   * can be set on a new origin when one is set.
   * @type {Array}
   * @protected
   */
		_this.pendingEvents_ = null;

		/**
   * Holds a map of events from the origin emitter that are already being proxied.
   * @type {Object<string, !EventHandle>}
   * @protected
   */
		_this.proxiedEvents_ = null;

		/**
   * The target emitter. This emitter will emit all events that come from
   * the origin emitter.
   * @type {EventEmitter}
   * @protected
   */
		_this.targetEmitter_ = targetEmitter;

		/**
   * Map of events that should be proxied. If whitelist is set blacklist is ignored.
   * @type {Object}
   * @protected
   */
		_this.whitelist_ = opt_whitelist;

		_this.startProxy_();
		return _this;
	}

	/**
  * Adds the given listener for the given event.
  * @param {string} event
  * @param {!function()} listener
  * @return {!EventHandle} The listened event's handle.
  * @protected
  */


	_createClass(EventEmitterProxy, [{
		key: 'addListener_',
		value: function addListener_(event, listener) {
			return this.originEmitter_.on(event, listener);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.removeListeners_();
			this.proxiedEvents_ = null;
			this.originEmitter_ = null;
			this.targetEmitter_ = null;
		}

		/**
   * Emits the specified event type on the target emitter.
   * @protected
   */

	}, {
		key: 'emitOnTarget_',
		value: function emitOnTarget_() {
			this.targetEmitter_.emit.apply(this.targetEmitter_, arguments);
		}

		/**
   * Proxies the given event from the origin to the target emitter.
   * @param {string} event
   */

	}, {
		key: 'proxyEvent',
		value: function proxyEvent(event) {
			if (this.shouldProxyEvent_(event)) {
				this.tryToAddListener_(event);
			}
		}

		/**
   * Removes the proxy listener for all events.
   * @protected
   */

	}, {
		key: 'removeListeners_',
		value: function removeListeners_() {
			if (this.proxiedEvents_) {
				var events = Object.keys(this.proxiedEvents_);
				for (var i = 0; i < events.length; i++) {
					this.proxiedEvents_[events[i]].removeListener();
				}
				this.proxiedEvents_ = null;
			}
			this.pendingEvents_ = null;
		}

		/**
   * Changes the origin emitter. This automatically detaches any events that
   * were already being proxied from the previous emitter, and starts proxying
   * them on the new emitter instead.
   * @param {!EventEmitter} originEmitter
   */

	}, {
		key: 'setOriginEmitter',
		value: function setOriginEmitter(originEmitter) {
			var _this2 = this;

			var events = this.originEmitter_ && this.proxiedEvents_ ? Object.keys(this.proxiedEvents_) : this.pendingEvents_;
			this.originEmitter_ = originEmitter;
			if (events) {
				this.removeListeners_();
				events.forEach(function (event) {
					return _this2.proxyEvent(event);
				});
			}
		}

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'shouldProxyEvent_',
		value: function shouldProxyEvent_(event) {
			if (this.whitelist_ && !this.whitelist_[event]) {
				return false;
			}
			if (this.blacklist_ && this.blacklist_[event]) {
				return false;
			}
			return !this.proxiedEvents_ || !this.proxiedEvents_[event];
		}

		/**
   * Starts proxying all events from the origin to the target emitter.
   * @protected
   */

	}, {
		key: 'startProxy_',
		value: function startProxy_() {
			this.targetEmitter_.onListener(this.proxyEvent.bind(this));
		}

		/**
   * Adds a listener to the origin emitter, if it exists. Otherwise, stores
   * the pending listener so it can be used on a future origin emitter.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'tryToAddListener_',
		value: function tryToAddListener_(event) {
			if (this.originEmitter_) {
				this.proxiedEvents_ = this.proxiedEvents_ || {};
				this.proxiedEvents_[event] = this.addListener_(event, this.emitOnTarget_.bind(this, event));
			} else {
				this.pendingEvents_ = this.pendingEvents_ || [];
				this.pendingEvents_.push(event);
			}
		}
	}]);

	return EventEmitterProxy;
}(_metal.Disposable);

exports.default = EventEmitterProxy;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventHandler utility. It's useful for easily removing a group of
 * listeners from different EventEmitter instances.
 * @constructor
 * @extends {Disposable}
 */
var EventHandler = function (_Disposable) {
	_inherits(EventHandler, _Disposable);

	function EventHandler() {
		_classCallCheck(this, EventHandler);

		/**
   * An array that holds the added event handles, so the listeners can be
   * removed later.
   * @type {Array.<EventHandle>}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventHandler.__proto__ || Object.getPrototypeOf(EventHandler)).call(this));

		_this.eventHandles_ = [];
		return _this;
	}

	/**
  * Adds event handles to be removed later through the `removeAllListeners`
  * method.
  * @param {...(!EventHandle)} var_args
  */


	_createClass(EventHandler, [{
		key: 'add',
		value: function add() {
			for (var i = 0; i < arguments.length; i++) {
				this.eventHandles_.push(arguments[i]);
			}
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.eventHandles_ = null;
		}

		/**
   * Removes all listeners that have been added through the `add` method.
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners() {
			for (var i = 0; i < this.eventHandles_.length; i++) {
				this.eventHandles_[i].removeListener();
			}

			this.eventHandles_ = [];
		}
	}]);

	return EventHandler;
}(_metal.Disposable);

exports.default = EventHandler;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JSXComponent = __webpack_require__(18);

var _JSXComponent2 = _interopRequireDefault(_JSXComponent);

var _metalState = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JSXComponent that renders html passed in.
 * @class
 */
var DangerouslySetHTML = function (_Component) {
	_inherits(DangerouslySetHTML, _Component);

	function DangerouslySetHTML() {
		_classCallCheck(this, DangerouslySetHTML);

		return _possibleConstructorReturn(this, (DangerouslySetHTML.__proto__ || Object.getPrototypeOf(DangerouslySetHTML)).apply(this, arguments));
	}

	_createClass(DangerouslySetHTML, [{
		key: 'render',

		/**
   * @return {Component}
   */
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    tag = _props.tag;


			IncrementalDOM.elementOpen(tag, null, null);

			var node = IncrementalDOM.elementClose(tag);

			node.innerHTML = content;

			return node;
		}
	}]);

	return DangerouslySetHTML;
}(_JSXComponent2.default);

DangerouslySetHTML.PROPS = {
	content: _metalState.Config.string(),
	tag: _metalState.Config.string().value('span')
};

exports.default = DangerouslySetHTML;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _metalIncrementalDom = __webpack_require__(10);

var _metalIncrementalDom2 = _interopRequireDefault(_metalIncrementalDom);

var _JSXRenderer = __webpack_require__(29);

var _JSXRenderer2 = _interopRequireDefault(_JSXRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These helpers are all from "babel-plugin-incremental-dom". See its README
 * file for more details:
 * https://github.com/jridgewell/babel-plugin-incremental-dom#runtime
 */

var scope = typeof exports !== 'undefined' && typeof global !== 'undefined' ? global : window;

scope.iDOMHelpers = scope.iDOMHelpers || {};

scope.iDOMHelpers.attr = function (value, attrName) {
	IncrementalDOM.attr(attrName, value);
};

scope.iDOMHelpers.forOwn = function (object, iterator) {
	var hasOwn = Object.prototype.hasOwnProperty;
	for (var prop in object) {
		if (hasOwn.call(object, prop)) {
			iterator(object[prop], prop);
		}
	}
};

scope.iDOMHelpers.jsxWrapper = function (elementClosure, args) {
	var wrapper = args ? function () {
		return elementClosure.apply(this, args);
	} : elementClosure;
	wrapper.__jsxDOMWrapper = true;
	return wrapper;
};

scope.iDOMHelpers.renderArbitrary = function (child) {
	var type = typeof child === 'undefined' ? 'undefined' : _typeof(child);
	if (type === 'number' || type === 'string' || child && child instanceof String) {
		IncrementalDOM.text(child);
	} else if (type === 'function' && child.__jsxDOMWrapper) {
		child();
	} else if (Array.isArray(child)) {
		child.forEach(scope.iDOMHelpers.renderArbitrary);
	} else if (String(child) === '[object Object]') {
		// Renders special incremental dom nodes in a special way :)
		if (_metalIncrementalDom2.default.isIncDomNode(child)) {
			_metalIncrementalDom2.default.renderChild(child);
		} else {
			scope.iDOMHelpers.forOwn(child, scope.iDOMHelpers.renderArbitrary);
		}
	} else if (!child) {
		_JSXRenderer2.default.skipChild();
	}
};

exports.default = scope.iDOMHelpers;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTMLParser = __webpack_require__(46);

var _HTMLParser2 = _interopRequireDefault(_HTMLParser);

var _unescape = __webpack_require__(47);

var _unescape2 = _interopRequireDefault(_unescape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parser_;

var HTML2IncDom = function () {
	function HTML2IncDom() {
		_classCallCheck(this, HTML2IncDom);
	}

	_createClass(HTML2IncDom, null, [{
		key: 'buildFn',

		/**
   * Should convert the given html string to a function with calls to
   * incremental dom methods.
   * @param {string} html
   * @return {!function()} Function with incremental dom calls for building
   *     the given html string.
   */
		value: function buildFn(html) {
			return function () {
				return HTML2IncDom.run(html);
			};
		}

		/**
   * Gets the html parser being currently used.
   * @return {!function()}
   */

	}, {
		key: 'getParser',
		value: function getParser() {
			return parser_ || _HTMLParser2.default;
		}

		/**
   * Should convert the given html string to calls to incremental dom methods.
   * @param {string} html
   */

	}, {
		key: 'run',
		value: function run(html) {
			HTML2IncDom.getParser()(html, {
				start: function start(tag, attrs, unary) {
					var fn = unary ? IncrementalDOM.elementVoid : IncrementalDOM.elementOpen;
					var args = [tag, null, []];
					for (var i = 0; i < attrs.length; i++) {
						args.push(attrs[i].name, attrs[i].value);
					}
					fn.apply(null, args);
				},

				end: function end(tag) {
					IncrementalDOM.elementClose(tag);
				},

				chars: function chars(text) {
					IncrementalDOM.text(text, _unescape2.default);
				}
			});
		}

		/**
   * Changes the function that will be used to parse html strings. By default
   * this will use the `HTMLParser` function from
   * https://github.com/blowsie/Pure-JavaScript-HTML5-Parser. This will accept
   * any function that follows that same api, basically accepting the html
   * string and an object with `start`, `end` and `chars` functions to be called
   * during the parsing.
   * @param {!function(string, !Object} newParser
   */

	}, {
		key: 'setParser',
		value: function setParser(newParser) {
			parser_ = newParser;
		}
	}]);

	return HTML2IncDom;
}();

exports.default = HTML2IncDom;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* eslint-disable */

/*
 * HTML5 Parser By Sam Blowes
 *
 * Designed for HTML5 documents
 *
 * Original code by John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * ----------------------------------------------------------------------------
 * License
 * ----------------------------------------------------------------------------
 *
 * This code is triple licensed using Apache Software License 2.0,
 * Mozilla Public License or GNU Public License
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is Simple HTML Parser.
 *
 * The Initial Developer of the Original Code is Erik Arvidsson.
 * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
 * Reserved.
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 * @license
 */

/*
 *
 * ----------------------------------------------------------------------------
 * Usage
 * ----------------------------------------------------------------------------
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
    attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

// Block Elements - HTML 5
var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("script,style");

var HTMLParser = function HTMLParser(html, handler) {
	var index,
	    chars,
	    match,
	    stack = [],
	    last = html;
	stack.last = function () {
		return this[this.length - 1];
	};

	while (html) {
		chars = true;

		// Make sure we're not in a script or style element
		if (!stack.last() || !special[stack.last()]) {

			// Comment
			if (html.indexOf("<!--") == 0) {
				index = html.indexOf("-->");

				if (index >= 0) {
					if (handler.comment) handler.comment(html.substring(4, index));
					html = html.substring(index + 3);
					chars = false;
				}

				// end tag
			} else if (html.indexOf("</") == 0) {
				match = html.match(endTag);

				if (match) {
					html = html.substring(match[0].length);
					match[0].replace(endTag, parseEndTag);
					chars = false;
				}

				// start tag
			} else if (html.indexOf("<") == 0) {
				match = html.match(startTag);

				if (match) {
					html = html.substring(match[0].length);
					match[0].replace(startTag, parseStartTag);
					chars = false;
				}
			}

			if (chars) {
				index = html.indexOf("<");

				var text = index < 0 ? html : html.substring(0, index);
				html = index < 0 ? "" : html.substring(index);

				if (handler.chars) handler.chars(text);
			}
		} else {
			html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
				text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
				if (handler.chars) handler.chars(text);

				return "";
			});

			parseEndTag("", stack.last());
		}

		if (html == last) throw "Parse Error: " + html;
		last = html;
	}

	// Clean up any remaining tags
	parseEndTag();

	function parseStartTag(tag, tagName, rest, unary) {
		tagName = tagName.toLowerCase();

		if (block[tagName]) {
			// Close last tag if it's inline, except if it's a "span" (since people
			// usually add anything they want to spans, and browsers allow it).
			// Note: this exception for "span" was added manually (i.e. it's not
			// present in the original code).
			while (stack.last() && inline[stack.last()] && stack.last() !== 'span') {
				parseEndTag("", stack.last());
			}
		}

		if (closeSelf[tagName] && stack.last() == tagName) {
			parseEndTag("", tagName);
		}

		unary = empty[tagName] || !!unary;

		if (!unary) stack.push(tagName);

		if (handler.start) {
			var attrs = [];

			rest.replace(attr, function (match, name) {
				var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";

				attrs.push({
					name: name,
					value: value,
					escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
				});
			});

			if (handler.start) handler.start(tagName, attrs, unary);
		}
	}

	function parseEndTag(tag, tagName) {
		// If no tag name is provided, clean shop
		if (!tagName) var pos = 0;

		// Find the closest opened tag of the same type
		else for (var pos = stack.length - 1; pos >= 0; pos--) {
				if (stack[pos] == tagName) break;
			}if (pos >= 0) {
			// Close all the open elements, up the stack
			for (var i = stack.length - 1; i >= pos; i--) {
				if (handler.end) handler.end(stack[i]);
			} // Remove the open elements from the stack
			stack.length = pos;
		}
	}
};

function makeMap(str) {
	var obj = {},
	    items = str.split(",");
	for (var i = 0; i < items.length; i++) {
		obj[items[i]] = true;
	}return obj;
}

exports.default = HTMLParser;

/* eslint-enable */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Unescapes an HTML string using a DOM to resolve non-XML, non-numeric
 * entities. This function is XSS-safe and whitespace-preserving.
 * @private
 * @param {string} str The string to unescape.
 * @return {string} The unescaped {@code str} string.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function unescape(str) {
  /** @type {!Object<string, string>} */
  var seen = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };
  var div = document.createElement('div');

  // Match as many valid entity characters as possible. If the actual entity
  // happens to be shorter, it will still work as innerHTML will return the
  // trailing characters unchanged. Since the entity characters do not include
  // open angle bracket, there is no chance of XSS from the innerHTML use.
  // Since no whitespace is passed to innerHTML, whitespace is preserved.
  return str.replace(HTML_ENTITY_PATTERN_, function (s, entity) {
    // Check for cached entity.
    var value = seen[s];
    if (value) {
      return value;
    }
    // Check for numeric entity.
    if (entity.charAt(0) === '#') {
      // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex numbers.
      var n = Number('0' + entity.substr(1));
      if (!isNaN(n)) {
        value = String.fromCharCode(n);
      }
    }
    // Fall back to innerHTML otherwise.
    if (!value) {
      // Append a non-entity character to avoid a bug in Webkit that parses
      // an invalid entity at the end of innerHTML text as the empty string.
      div.innerHTML = s + ' ';
      // Then remove the trailing character from the result.
      value = div.firstChild.nodeValue.slice(0, -1);
    }
    // Cache and return.
    seen[s] = value;
    return value;
  });
}

exports.default = unescape;

/**
 * Regular expression that matches an HTML entity.
 * @type {!RegExp}
 */

var HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(19);

var _changes = __webpack_require__(20);

var _data = __webpack_require__(4);

var _children = __webpack_require__(21);

var _patch2 = __webpack_require__(51);

var _render = __webpack_require__(25);

var _metalComponent = __webpack_require__(5);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IncrementalDomRenderer = function (_ComponentRenderer$co) {
	_inherits(IncrementalDomRenderer, _ComponentRenderer$co);

	function IncrementalDomRenderer() {
		_classCallCheck(this, IncrementalDomRenderer);

		return _possibleConstructorReturn(this, (IncrementalDomRenderer.__proto__ || Object.getPrototypeOf(IncrementalDomRenderer)).apply(this, arguments));
	}

	_createClass(IncrementalDomRenderer, [{
		key: 'buildShouldUpdateArgs',

		/**
   * Returns an array with the args that should be passed to the component's
   * `shouldUpdate` method. This can be overridden by sub classes to change
   * what the method should receive.
   * @param {Object} changes
   * @return {!Array}
   */
		value: function buildShouldUpdateArgs(changes) {
			return [changes.props];
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'dispose',
		value: function dispose(component) {
			var data = (0, _data.getData)(component);
			var ref = data.config.ref;
			var owner = data.owner;
			if (owner && owner.components && owner.components[ref] === component) {
				delete owner.components[ref];
			}

			if (data.childComponents) {
				for (var i = 0; i < data.childComponents.length; i++) {
					var child = data.childComponents[i];
					if (!child.isDisposed()) {
						child.element = null;
						child.dispose();
					}
				}
			}

			(0, _data.clearData)(component);
		}

		/**
   * Generates a key for the element currently being rendered in the given
   * component. By default, just returns the original key. Sub classes can
   * override this to change the behavior.
   * @param {!Component} component
   * @param {string} key
   * @return {?string}
   */

	}, {
		key: 'generateKey',
		value: function generateKey(component, key) {
			return key;
		}

		/**
   * Get the component's config data.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getConfig',
		value: function getConfig(component) {
			return (0, _data.getData)(component).config;
		}

		/**
   * Get the component's incremental dom renderer data.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getData',
		value: function getData(component) {
			return (0, _data.getData)(component);
		}

		/**
   * Gets the component that triggered the current patch operation.
   * @return {Component}
   */

	}, {
		key: 'getPatchingComponent',
		value: function getPatchingComponent() {
			return (0, _patch2.getPatchingComponent)();
		}

		/**
   * Handles a node having just been rendered. Sub classes should override this
   * for custom behavior.
   */

	}, {
		key: 'handleNodeRendered',
		value: function handleNodeRendered() {}

		/**
   * Checks if the given object is an incremental dom node.
   * @param {!Object} node
   * @return {boolean}
   */

	}, {
		key: 'isIncDomNode',
		value: function isIncDomNode(node) {
			return !!(0, _children.getOwner)(node);
		}

		/**
   * Calls incremental dom's patch function to render the component.
   * @param {!Component} component
   */

	}, {
		key: 'patch',
		value: function patch(component) {
			(0, _patch2.patch)(component);
		}

		/**
   * Renders the renderer's component for the first time, patching its element
   * through incremental dom function calls. If the first arg is a function
   * instead of a component instance, creates and renders this function, which
   * can either be a simple incremental dom function or a component constructor.
   * @param {!Component} component
   * @param {!Component|function()} component Can be a component instance, a
   *     simple incremental dom function or a component constructor.
   * @param {Object|Element=} opt_dataOrElement Optional config data for the
   *     function, or parent for the rendered content.
   * @param {Element=} opt_parent Optional parent for the rendered content.
   * @return {!Component} The rendered component's instance.
   */

	}, {
		key: 'render',
		value: function render(component, opt_dataOrElement, opt_parent) {
			if (component instanceof _metalComponent.Component) {
				this.patch(component);
			} else {
				return (0, _render.renderFunction)(this, component, opt_dataOrElement, opt_parent);
			}
		}

		/**
   * Renders the given child node via its owner renderer.
   * @param {!Object} child
   */

	}, {
		key: 'renderChild',
		value: function renderChild(child) {
			(0, _render.renderChild)(child);
		}

		/**
   * Calls functions from `IncrementalDOM` to build the component element's
   * content. Can be overriden by subclasses (for integration with template
   * engines for example).
   * @param {!Component} component
   */

	}, {
		key: 'renderIncDom',
		value: function renderIncDom(component) {
			if (component.render) {
				component.render();
			} else {
				IncrementalDOM.elementVoid('div');
			}
		}

		/**
   * Runs the incremental dom functions for rendering this component, without
   * calling `patch`. This function needs to be called inside a `patch`.
   * @param {!Component} component
   */

	}, {
		key: 'renderInsidePatch',
		value: function renderInsidePatch(component) {
			var changes = (0, _changes.getChanges)(component);

			var shouldRender = !component.wasRendered || this.shouldUpdate(component, changes) || IncrementalDOM.currentPointer() !== component.element;
			if (shouldRender) {
				this.willUpdate_(component, changes);

				(0, _render.render)(component);
			} else if (component.element) {
				this.skipRender();
			}
		}

		/**
   * Sets up this component to be used by this renderer.
   * @param {!Component} component
   */

	}, {
		key: 'setUp',
		value: function setUp(component) {
			component.context = {};
			component.components = {};
			component.refs = {};

			var data = (0, _data.getData)(component);
			data.config = component.getInitialConfig();
			(0, _changes.trackChanges)(component);
		}

		/**
   * Checks if the component should be updated with the current state changes.
   * @param {!Component} component
   * @param {Object} changes
   * @return {boolean}
   */

	}, {
		key: 'shouldUpdate',
		value: function shouldUpdate(component, changes) {
			if (!changes) {
				return false;
			}
			if (component.shouldUpdate) {
				return component.shouldUpdate.apply(component, _toConsumableArray(this.buildShouldUpdateArgs(changes)));
			}
			return true;
		}

		/**
   * Skips the next disposal of children components, by clearing the array as
   * if there were no children rendered the last time. This can be useful for
   * allowing components to be reused by other parent components in separate
   * render update cycles.
   * @param {!Component} component
   */

	}, {
		key: 'skipNextChildrenDisposal',
		value: function skipNextChildrenDisposal(component) {
			(0, _data.getData)(component).childComponents = null;
		}

		/**
   * Skips rendering the current node.
   */

	}, {
		key: 'skipRender',
		value: function skipRender() {
			IncrementalDOM.skipNode();
		}

		/**
   * Updates the renderer's component when state changes, patching its element
   * through incremental dom function calls.
   * @param {!Component} component
   * @param {Object} data
   */

	}, {
		key: 'update',
		value: function update(component, data) {
			var changes = (0, _changes.getChanges)(component);
			if (data.forceUpdate || this.shouldUpdate(component, changes)) {
				this.willUpdate_(component, changes);
				this.patch(component);
			}
		}

		/**
   * Invokes component's "willUpdate" lifecycle method if applicable.
   * @param {!Component} component
   * @param {Object} changes
   */

	}, {
		key: 'willUpdate_',
		value: function willUpdate_(component, changes) {
			if (!component.wasRendered || !changes) {
				return;
			}
			component.informWillUpdate.apply(component, _toConsumableArray(this.buildShouldUpdateArgs(changes)));
		}
	}]);

	return IncrementalDomRenderer;
}(_metalComponent.ComponentRenderer.constructor);

var renderer = new IncrementalDomRenderer();

// Name of this renderer. Renderers should provide this as a way to identify
// them via a simple string (when calling enableCompatibilityMode to add
// support to old features for specific renderers for example).
renderer.RENDERER_NAME = 'incremental-dom';

exports.default = renderer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A cached reference to the hasOwnProperty function.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * A constructor function that will create blank objects.
 * @constructor
 */
function Blank() {}

Blank.prototype = Object.create(null);

/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param {!Object<string, *>} map The map to check.
 * @param {string} property The property to check.
 * @return {boolean} Whether map has property.
 */
var has = function (map, property) {
  return hasOwnProperty.call(map, property);
};

/**
 * Creates an map object without a prototype.
 * @return {!Object}
 */
var createMap = function () {
  return new Blank();
};

/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 * @param {!string} nodeName
 * @param {?string=} key
 * @constructor
 */
function NodeData(nodeName, key) {
  /**
   * The attributes and their values.
   * @const {!Object<string, *>}
   */
  this.attrs = createMap();

  /**
   * An array of attribute name/value pairs, used for quickly diffing the
   * incomming attributes to see if the DOM node's attributes need to be
   * updated.
   * @const {Array<*>}
   */
  this.attrsArr = [];

  /**
   * The incoming attributes for this Node, before they are updated.
   * @const {!Object<string, *>}
   */
  this.newAttrs = createMap();

  /**
   * Whether or not the statics have been applied for the node yet.
   * {boolean}
   */
  this.staticsApplied = false;

  /**
   * The key used to identify this node, used to preserve DOM nodes when they
   * move within their parent.
   * @const
   */
  this.key = key;

  /**
   * Keeps track of children within this node by their key.
   * {!Object<string, !Element>}
   */
  this.keyMap = createMap();

  /**
   * Whether or not the keyMap is currently valid.
   * @type {boolean}
   */
  this.keyMapValid = true;

  /**
   * Whether or the associated node is, or contains, a focused Element.
   * @type {boolean}
   */
  this.focused = false;

  /**
   * The node name for this node.
   * @const {string}
   */
  this.nodeName = nodeName;

  /**
   * @type {?string}
   */
  this.text = null;
}

/**
 * Initializes a NodeData object for a Node.
 *
 * @param {Node} node The node to initialize data for.
 * @param {string} nodeName The node name of node.
 * @param {?string=} key The key that identifies the node.
 * @return {!NodeData} The newly initialized data object
 */
var initData = function (node, nodeName, key) {
  var data = new NodeData(nodeName, key);
  node['__incrementalDOMData'] = data;
  return data;
};

/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 *
 * @param {?Node} node The Node to retrieve the data for.
 * @return {!NodeData} The NodeData for this Node.
 */
var getData = function (node) {
  importNode(node);
  return node['__incrementalDOMData'];
};

/**
 * Imports node and its subtree, initializing caches.
 *
 * @param {?Node} node The Node to import.
 */
var importNode = function (node) {
  if (node['__incrementalDOMData']) {
    return;
  }

  var isElement = node instanceof Element;
  var nodeName = isElement ? node.localName : node.nodeName;
  var key = isElement ? node.getAttribute('key') : null;
  var data = initData(node, nodeName, key);

  if (key) {
    getData(node.parentNode).keyMap[key] = node;
  }

  if (isElement) {
    var attributes = node.attributes;
    var attrs = data.attrs;
    var newAttrs = data.newAttrs;
    var attrsArr = data.attrsArr;

    for (var i = 0; i < attributes.length; i += 1) {
      var attr = attributes[i];
      var name = attr.name;
      var value = attr.value;

      attrs[name] = value;
      newAttrs[name] = undefined;
      attrsArr.push(name);
      attrsArr.push(value);
    }
  }

  for (var child = node.firstChild; child; child = child.nextSibling) {
    importNode(child);
  }
};

/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param {string} tag The tag to get the namespace for.
 * @param {?Node} parent
 * @return {?string} The namespace to create the tag in.
 */
var getNamespaceForTag = function (tag, parent) {
  if (tag === 'svg') {
    return 'http://www.w3.org/2000/svg';
  }

  if (getData(parent).nodeName === 'foreignObject') {
    return null;
  }

  return parent.namespaceURI;
};

/**
 * Creates an Element.
 * @param {Document} doc The document with which to create the Element.
 * @param {?Node} parent
 * @param {string} tag The tag for the Element.
 * @param {?string=} key A key to identify the Element.
 * @return {!Element}
 */
var createElement = function (doc, parent, tag, key) {
  var namespace = getNamespaceForTag(tag, parent);
  var el = undefined;

  if (namespace) {
    el = doc.createElementNS(namespace, tag);
  } else {
    el = doc.createElement(tag);
  }

  initData(el, tag, key);

  return el;
};

/**
 * Creates a Text Node.
 * @param {Document} doc The document with which to create the Element.
 * @return {!Text}
 */
var createText = function (doc) {
  var node = doc.createTextNode('');
  initData(node, '#text', null);
  return node;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var notifications = {
  /**
   * Called after patch has compleated with any Nodes that have been created
   * and added to the DOM.
   * @type {?function(Array<!Node>)}
   */
  nodesCreated: null,

  /**
   * Called after patch has compleated with any Nodes that have been removed
   * from the DOM.
   * Note it's an applications responsibility to handle any childNodes.
   * @type {?function(Array<!Node>)}
   */
  nodesDeleted: null
};

/**
 * Keeps track of the state of a patch.
 * @constructor
 */
function Context() {
  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.created = notifications.nodesCreated && [];

  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.deleted = notifications.nodesDeleted && [];
}

/**
 * @param {!Node} node
 */
Context.prototype.markCreated = function (node) {
  if (this.created) {
    this.created.push(node);
  }
};

/**
 * @param {!Node} node
 */
Context.prototype.markDeleted = function (node) {
  if (this.deleted) {
    this.deleted.push(node);
  }
};

/**
 * Notifies about nodes that were created during the patch opearation.
 */
Context.prototype.notifyChanges = function () {
  if (this.created && this.created.length > 0) {
    notifications.nodesCreated(this.created);
  }

  if (this.deleted && this.deleted.length > 0) {
    notifications.nodesDeleted(this.deleted);
  }
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
  * Keeps track whether or not we are in an attributes declaration (after
  * elementOpenStart, but before elementOpenEnd).
  * @type {boolean}
  */
var inAttributes = false;

/**
  * Keeps track whether or not we are in an element that should not have its
  * children cleared.
  * @type {boolean}
  */
var inSkip = false;

/**
 * Makes sure that there is a current patch context.
 * @param {string} functionName
 * @param {*} context
 */
var assertInPatch = function (functionName, context) {
  if (!context) {
    throw new Error('Cannot call ' + functionName + '() unless in patch.');
  }
};

/**
 * Makes sure that a patch closes every node that it opened.
 * @param {?Node} openElement
 * @param {!Node|!DocumentFragment} root
 */
var assertNoUnclosedTags = function (openElement, root) {
  if (openElement === root) {
    return;
  }

  var currentElement = openElement;
  var openTags = [];
  while (currentElement && currentElement !== root) {
    openTags.push(currentElement.nodeName.toLowerCase());
    currentElement = currentElement.parentNode;
  }

  throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
};

/**
 * Makes sure that the caller is not where attributes are expected.
 * @param {string} functionName
 */
var assertNotInAttributes = function (functionName) {
  if (inAttributes) {
    throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
  }
};

/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param {string} functionName
 */
var assertNotInSkip = function (functionName) {
  if (inSkip) {
    throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
  }
};

/**
 * Makes sure that the caller is where attributes are expected.
 * @param {string} functionName
 */
var assertInAttributes = function (functionName) {
  if (!inAttributes) {
    throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
  }
};

/**
 * Makes sure the patch closes virtual attributes call
 */
var assertVirtualAttributesClosed = function () {
  if (inAttributes) {
    throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
  }
};

/**
  * Makes sure that tags are correctly nested.
  * @param {string} nodeName
  * @param {string} tag
  */
var assertCloseMatchesOpenTag = function (nodeName, tag) {
  if (nodeName !== tag) {
    throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
  }
};

/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param {string} functionName
 * @param {?Node} previousNode
 */
var assertNoChildrenDeclaredYet = function (functionName, previousNode) {
  if (previousNode !== null) {
    throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
  }
};

/**
 * Checks that a call to patchOuter actually patched the element.
 * @param {?Node} startNode The value for the currentNode when the patch
 *     started.
 * @param {?Node} currentNode The currentNode when the patch finished.
 * @param {?Node} expectedNextNode The Node that is expected to follow the
 *    currentNode after the patch;
 * @param {?Node} expectedPrevNode The Node that is expected to preceed the
 *    currentNode after the patch.
 */
var assertPatchElementNoExtras = function (startNode, currentNode, expectedNextNode, expectedPrevNode) {
  var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
  var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
  var wasRemoved = currentNode === startNode;

  if (!wasUpdated && !wasChanged && !wasRemoved) {
    throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
  }
};

/**
 * Updates the state of being in an attribute declaration.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInAttributes = function (value) {
  var previous = inAttributes;
  inAttributes = value;
  return previous;
};

/**
 * Updates the state of being in a skip element.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInSkip = function (value) {
  var previous = inSkip;
  inSkip = value;
  return previous;
};

/**
 * Copyright 2016 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {!Node} node
 * @return {boolean} True if the node the root of a document, false otherwise.
 */
var isDocumentRoot = function (node) {
  // For ShadowRoots, check if they are a DocumentFragment instead of if they
  // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
  // not supported.
  return node instanceof Document || node instanceof DocumentFragment;
};

/**
 * @param {!Node} node The node to start at, inclusive.
 * @param {?Node} root The root ancestor to get until, exclusive.
 * @return {!Array<!Node>} The ancestry of DOM nodes.
 */
var getAncestry = function (node, root) {
  var ancestry = [];
  var cur = node;

  while (cur !== root) {
    ancestry.push(cur);
    cur = cur.parentNode;
  }

  return ancestry;
};

/**
 * @param {!Node} node
 * @return {!Node} The root node of the DOM tree that contains node.
 */
var getRoot = function (node) {
  var cur = node;
  var prev = cur;

  while (cur) {
    prev = cur;
    cur = cur.parentNode;
  }

  return prev;
};

/**
 * @param {!Node} node The node to get the activeElement for.
 * @return {?Element} The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */
var getActiveElement = function (node) {
  var root = getRoot(node);
  return isDocumentRoot(root) ? root.activeElement : null;
};

/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param {!Node} node The reference node to get the activeElement for.
 * @param {?Node} root The root to get the focused path until.
 * @return {!Array<Node>}
 */
var getFocusedPath = function (node, root) {
  var activeElement = getActiveElement(node);

  if (!activeElement || !node.contains(activeElement)) {
    return [];
  }

  return getAncestry(activeElement, root);
};

/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param {?Node} parentNode
 * @param {!Node} node
 * @param {?Node} referenceNode
 */
var moveBefore = function (parentNode, node, referenceNode) {
  var insertReferenceNode = node.nextSibling;
  var cur = referenceNode;

  while (cur !== node) {
    var next = cur.nextSibling;
    parentNode.insertBefore(cur, insertReferenceNode);
    cur = next;
  }
};

/** @type {?Context} */
var context = null;

/** @type {?Node} */
var currentNode = null;

/** @type {?Node} */
var currentParent = null;

/** @type {?Document} */
var doc = null;

/**
 * @param {!Array<Node>} focusPath The nodes to mark.
 * @param {boolean} focused Whether or not they are focused.
 */
var markFocused = function (focusPath, focused) {
  for (var i = 0; i < focusPath.length; i += 1) {
    getData(focusPath[i]).focused = focused;
  }
};

/**
 * Returns a patcher function that sets up and restores a patch context,
 * running the run function with the provided data.
 * @param {function((!Element|!DocumentFragment),!function(T),T=): ?Node} run
 * @return {function((!Element|!DocumentFragment),!function(T),T=): ?Node}
 * @template T
 */
var patchFactory = function (run) {
  /**
   * TODO(moz): These annotations won't be necessary once we switch to Closure
   * Compiler's new type inference. Remove these once the switch is done.
   *
   * @param {(!Element|!DocumentFragment)} node
   * @param {!function(T)} fn
   * @param {T=} data
   * @return {?Node} node
   * @template T
   */
  var f = function (node, fn, data) {
    var prevContext = context;
    var prevDoc = doc;
    var prevCurrentNode = currentNode;
    var prevCurrentParent = currentParent;
    var previousInAttributes = false;
    var previousInSkip = false;

    context = new Context();
    doc = node.ownerDocument;
    currentParent = node.parentNode;

    if (process.env.NODE_ENV !== 'production') {
      previousInAttributes = setInAttributes(false);
      previousInSkip = setInSkip(false);
    }

    var focusPath = getFocusedPath(node, currentParent);
    markFocused(focusPath, true);
    var retVal = run(node, fn, data);
    markFocused(focusPath, false);

    if (process.env.NODE_ENV !== 'production') {
      assertVirtualAttributesClosed();
      setInAttributes(previousInAttributes);
      setInSkip(previousInSkip);
    }

    context.notifyChanges();

    context = prevContext;
    doc = prevDoc;
    currentNode = prevCurrentNode;
    currentParent = prevCurrentParent;

    return retVal;
  };
  return f;
};

/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {!Element|!DocumentFragment} node The Element or Document
 *     to patch.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {!Node} The patched node.
 * @template T
 */
var patchInner = patchFactory(function (node, fn, data) {
  currentNode = node;

  enterNode();
  fn(data);
  exitNode();

  if (process.env.NODE_ENV !== 'production') {
    assertNoUnclosedTags(currentNode, node);
  }

  return node;
});

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 * @param {!Element} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM. This should have at most one top level
 *     element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {?Node} The node if it was updated, its replacedment or null if it
 *     was removed.
 * @template T
 */
var patchOuter = patchFactory(function (node, fn, data) {
  var startNode = /** @type {!Element} */{ nextSibling: node };
  var expectedNextNode = null;
  var expectedPrevNode = null;

  if (process.env.NODE_ENV !== 'production') {
    expectedNextNode = node.nextSibling;
    expectedPrevNode = node.previousSibling;
  }

  currentNode = startNode;
  fn(data);

  if (process.env.NODE_ENV !== 'production') {
    assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
  }

  if (node !== currentNode && node.parentNode) {
    removeChild(currentParent, node, getData(currentParent).keyMap);
  }

  return startNode === currentNode ? null : currentNode;
});

/**
 * Checks whether or not the current node matches the specified nodeName and
 * key.
 *
 * @param {!Node} matchNode A node to match the data to.
 * @param {?string} nodeName The nodeName for this node.
 * @param {?string=} key An optional key that identifies a node.
 * @return {boolean} True if the node matches, false otherwise.
 */
var matches = function (matchNode, nodeName, key) {
  var data = getData(matchNode);

  // Key check is done using double equals as we want to treat a null key the
  // same as undefined. This should be okay as the only values allowed are
  // strings, null and undefined so the == semantics are not too weird.
  return nodeName === data.nodeName && key == data.key;
};

/**
 * Aligns the virtual Element definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param {string} nodeName For an Element, this should be a valid tag string.
 *     For a Text, this should be #text.
 * @param {?string=} key The key used to identify this element.
 */
var alignWithDOM = function (nodeName, key) {
  if (currentNode && matches(currentNode, nodeName, key)) {
    return;
  }

  var parentData = getData(currentParent);
  var currentNodeData = currentNode && getData(currentNode);
  var keyMap = parentData.keyMap;
  var node = undefined;

  // Check to see if the node has moved within the parent.
  if (key) {
    var keyNode = keyMap[key];
    if (keyNode) {
      if (matches(keyNode, nodeName, key)) {
        node = keyNode;
      } else if (keyNode === currentNode) {
        context.markDeleted(keyNode);
      } else {
        removeChild(currentParent, keyNode, keyMap);
      }
    }
  }

  // Create the node if it doesn't exist.
  if (!node) {
    if (nodeName === '#text') {
      node = createText(doc);
    } else {
      node = createElement(doc, currentParent, nodeName, key);
    }

    if (key) {
      keyMap[key] = node;
    }

    context.markCreated(node);
  }

  // Re-order the node into the right position, preserving focus if either
  // node or currentNode are focused by making sure that they are not detached
  // from the DOM.
  if (getData(node).focused) {
    // Move everything else before the node.
    moveBefore(currentParent, node, currentNode);
  } else if (currentNodeData && currentNodeData.key && !currentNodeData.focused) {
    // Remove the currentNode, which can always be added back since we hold a
    // reference through the keyMap. This prevents a large number of moves when
    // a keyed item is removed or moved backwards in the DOM.
    currentParent.replaceChild(node, currentNode);
    parentData.keyMapValid = false;
  } else {
    currentParent.insertBefore(node, currentNode);
  }

  currentNode = node;
};

/**
 * @param {?Node} node
 * @param {?Node} child
 * @param {?Object<string, !Element>} keyMap
 */
var removeChild = function (node, child, keyMap) {
  node.removeChild(child);
  context.markDeleted( /** @type {!Node}*/child);

  var key = getData(child).key;
  if (key) {
    delete keyMap[key];
  }
};

/**
 * Clears out any unvisited Nodes, as the corresponding virtual element
 * functions were never called for them.
 */
var clearUnvisitedDOM = function () {
  var node = currentParent;
  var data = getData(node);
  var keyMap = data.keyMap;
  var keyMapValid = data.keyMapValid;
  var child = node.lastChild;
  var key = undefined;

  if (child === currentNode && keyMapValid) {
    return;
  }

  while (child !== currentNode) {
    removeChild(node, child, keyMap);
    child = node.lastChild;
  }

  // Clean the keyMap, removing any unusued keys.
  if (!keyMapValid) {
    for (key in keyMap) {
      child = keyMap[key];
      if (child.parentNode !== node) {
        context.markDeleted(child);
        delete keyMap[key];
      }
    }

    data.keyMapValid = true;
  }
};

/**
 * Changes to the first child of the current node.
 */
var enterNode = function () {
  currentParent = currentNode;
  currentNode = null;
};

/**
 * @return {?Node} The next Node to be patched.
 */
var getNextNode = function () {
  if (currentNode) {
    return currentNode.nextSibling;
  } else {
    return currentParent.firstChild;
  }
};

/**
 * Changes to the next sibling of the current node.
 */
var nextNode = function () {
  currentNode = getNextNode();
};

/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
var exitNode = function () {
  clearUnvisitedDOM();

  currentNode = currentParent;
  currentParent = currentParent.parentNode;
};

/**
 * Makes sure that the current node is an Element with a matching tagName and
 * key.
 *
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return {!Element} The corresponding Element.
 */
var coreElementOpen = function (tag, key) {
  nextNode();
  alignWithDOM(tag, key);
  enterNode();
  return (/** @type {!Element} */currentParent
  );
};

/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
var coreElementClose = function () {
  if (process.env.NODE_ENV !== 'production') {
    setInSkip(false);
  }

  exitNode();
  return (/** @type {!Element} */currentNode
  );
};

/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 *
 * @return {!Text} The corresponding Text Node.
 */
var coreText = function () {
  nextNode();
  alignWithDOM('#text', null);
  return (/** @type {!Text} */currentNode
  );
};

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInPatch('currentElement', context);
    assertNotInAttributes('currentElement');
  }
  return (/** @type {!Element} */currentParent
  );
};

/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
var currentPointer = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInPatch('currentPointer', context);
    assertNotInAttributes('currentPointer');
  }
  return getNextNode();
};

/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
var skip = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertNoChildrenDeclaredYet('skip', currentNode);
    setInSkip(true);
  }
  currentNode = currentParent.lastChild;
};

/**
 * Skips the next Node to be patched, moving the pointer forward to the next
 * sibling of the current pointer.
 */
var skipNode = nextNode;

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var symbols = {
  default: '__default'
};

/**
 * @param {string} name
 * @return {string|undefined} The namespace to use for the attribute.
 */
var getNamespace = function (name) {
  if (name.lastIndexOf('xml:', 0) === 0) {
    return 'http://www.w3.org/XML/1998/namespace';
  }

  if (name.lastIndexOf('xlink:', 0) === 0) {
    return 'http://www.w3.org/1999/xlink';
  }
};

/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
var applyAttr = function (el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    var attrNS = getNamespace(name);
    if (attrNS) {
      el.setAttributeNS(attrNS, name, value);
    } else {
      el.setAttribute(name, value);
    }
  }
};

/**
 * Applies a property to a given Element.
 * @param {!Element} el
 * @param {string} name The property's name.
 * @param {*} value The property's value.
 */
var applyProp = function (el, name, value) {
  el[name] = value;
};

/**
 * Applies a value to a style declaration. Supports CSS custom properties by
 * setting properties containing a dash using CSSStyleDeclaration.setProperty.
 * @param {CSSStyleDeclaration} style
 * @param {!string} prop
 * @param {*} value
 */
var setStyleValue = function (style, prop, value) {
  if (prop.indexOf('-') >= 0) {
    style.setProperty(prop, /** @type {string} */value);
  } else {
    style[prop] = value;
  }
};

/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */
var applyStyle = function (el, name, style) {
  if (typeof style === 'string') {
    el.style.cssText = style;
  } else {
    el.style.cssText = '';
    var elStyle = el.style;
    var obj = /** @type {!Object<string,string>} */style;

    for (var prop in obj) {
      if (has(obj, prop)) {
        setStyleValue(elStyle, prop, obj[prop]);
      }
    }
  }
};

/**
 * Updates a single attribute on an Element.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
var applyAttributeTyped = function (el, name, value) {
  var type = typeof value;

  if (type === 'object' || type === 'function') {
    applyProp(el, name, value);
  } else {
    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
  }
};

/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function (el, name, value) {
  var data = getData(el);
  var attrs = data.attrs;

  if (attrs[name] === value) {
    return;
  }

  var mutator = attributes[name] || attributes[symbols.default];
  mutator(el, name, value);

  attrs[name] = value;
};

/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
var attributes = createMap();

// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = applyAttributeTyped;

attributes['style'] = applyStyle;

/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;

/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {Array<*>}
 */
var argsBuilder = [];

/**
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function (tag, key, statics, var_args) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementOpen');
    assertNotInSkip('elementOpen');
  }

  var node = coreElementOpen(tag, key);
  var data = getData(node);

  if (!data.staticsApplied) {
    if (statics) {
      for (var _i = 0; _i < statics.length; _i += 2) {
        var name = /** @type {string} */statics[_i];
        var value = statics[_i + 1];
        updateAttribute(node, name, value);
      }
    }
    // Down the road, we may want to keep track of the statics array to use it
    // as an additional signal about whether a node matches or not. For now,
    // just use a marker so that we do not reapply statics.
    data.staticsApplied = true;
  }

  /*
   * Checks to see if one or more attributes have changed for a given Element.
   * When no attributes have changed, this is much faster than checking each
   * individual argument. When attributes have changed, the overhead of this is
   * minimal.
   */
  var attrsArr = data.attrsArr;
  var newAttrs = data.newAttrs;
  var isNew = !attrsArr.length;
  var i = ATTRIBUTES_OFFSET;
  var j = 0;

  for (; i < arguments.length; i += 2, j += 2) {
    var _attr = arguments[i];
    if (isNew) {
      attrsArr[j] = _attr;
      newAttrs[_attr] = undefined;
    } else if (attrsArr[j] !== _attr) {
      break;
    }

    var value = arguments[i + 1];
    if (isNew || attrsArr[j + 1] !== value) {
      attrsArr[j + 1] = value;
      updateAttribute(node, _attr, value);
    }
  }

  if (i < arguments.length || j < attrsArr.length) {
    for (; i < arguments.length; i += 1, j += 1) {
      attrsArr[j] = arguments[i];
    }

    if (j < attrsArr.length) {
      attrsArr.length = j;
    }

    /*
     * Actually perform the attribute update.
     */
    for (i = 0; i < attrsArr.length; i += 2) {
      var name = /** @type {string} */attrsArr[i];
      var value = attrsArr[i + 1];
      newAttrs[name] = value;
    }

    for (var _attr2 in newAttrs) {
      updateAttribute(node, _attr2, newAttrs[_attr2]);
      newAttrs[_attr2] = undefined;
    }
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function (tag, key, statics) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementOpenStart');
    setInAttributes(true);
  }

  argsBuilder[0] = tag;
  argsBuilder[1] = key;
  argsBuilder[2] = statics;
};

/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function (name, value) {
  if (process.env.NODE_ENV !== 'production') {
    assertInAttributes('attr');
  }

  argsBuilder.push(name);
  argsBuilder.push(value);
};

/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInAttributes('elementOpenEnd');
    setInAttributes(false);
  }

  var node = elementOpen.apply(null, argsBuilder);
  argsBuilder.length = 0;
  return node;
};

/**
 * Closes an open virtual Element.
 *
 * @param {string} tag The element's tag.
 * @return {!Element} The corresponding Element.
 */
var elementClose = function (tag) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementClose');
  }

  var node = coreElementClose();

  if (process.env.NODE_ENV !== 'production') {
    assertCloseMatchesOpenTag(getData(node).nodeName, tag);
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function (tag, key, statics, var_args) {
  elementOpen.apply(null, arguments);
  return elementClose(tag);
};

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text = function (value, var_args) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('text');
    assertNotInSkip('text');
  }

  var node = coreText();
  var data = getData(node);

  if (data.text !== value) {
    data.text = /** @type {string} */value;

    var formatted = value;
    for (var i = 1; i < arguments.length; i += 1) {
      /*
       * Call the formatter function directly to prevent leaking arguments.
       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
       */
      var fn = arguments[i];
      formatted = fn(formatted);
    }

    node.data = formatted;
  }

<<<<<<< HEAD:src/main/resources/static/build/Dashboard.js
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : d3_zoom_src_constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : d3_zoom_src_constant(!!_), zoom) : filter;
exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.skipNode = skipNode;
exports.elementVoid = elementVoid;
exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen;
exports.elementClose = elementClose;
exports.text = text;
exports.attr = attr;
exports.symbols = symbols;
exports.attributes = attributes;
exports.applyAttr = applyAttr;
exports.applyProp = applyProp;
exports.notifications = notifications;
exports.importNode = importNode;

//# sourceMappingURL=incremental-dom-cjs.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

<<<<<<< HEAD:src/main/resources/static/build/Dashboard.js
// CONCATENATED MODULE: ./node_modules/d3-zoom/index.js



// CONCATENATED MODULE: ./node_modules/d3/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisect", function() { return bisect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ascending", function() { return ascending; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisector", function() { return bisector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "descending", function() { return descending; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "deviation", function() { return deviation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "extent", function() { return src_extent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "histogram", function() { return src_histogram; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return freedmanDiaconis; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return scott; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return sturges; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "max", function() { return src_max; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mean", function() { return src_mean; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "median", function() { return median; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "merge", function() { return src_merge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "min", function() { return src_min; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "quantile", function() { return quantile; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "range", function() { return src_range; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "sum", function() { return src_sum; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ticks", function() { return ticks; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "transpose", function() { return src_transpose; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "variance", function() { return variance; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "axisTop", function() { return axisTop; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "axisRight", function() { return axisRight; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "axisBottom", function() { return axisBottom; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "axisLeft", function() { return axisLeft; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "brush", function() { return src_brush; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "brushX", function() { return brushX; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "brushY", function() { return brushY; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "brushSelection", function() { return brushSelection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "chord", function() { return src_chord; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ribbon", function() { return src_ribbon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "nest", function() { return src_nest; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "set", function() { return src_set; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "map", function() { return src_map; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "keys", function() { return src_keys; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "values", function() { return src_values; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "entries", function() { return src_entries; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "color", function() { return color_color; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "rgb", function() { return color_rgb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "lab", function() { return lab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "cubehelix", function() { return cubehelix_cubehelix; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "dispatch", function() { return src_dispatch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "drag", function() { return src_drag; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "dragDisable", function() { return nodrag; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "dragEnable", function() { return yesdrag; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return dsv; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "csvParse", function() { return csvParse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return csvParseRows; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "csvFormat", function() { return csvFormat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return csvFormatRows; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tsvParse", function() { return tsvParse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return tsvParseRows; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return tsvFormat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return tsvFormatRows; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeLinear", function() { return linear_linear; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeQuad", function() { return quadInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return quadIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return quadOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return quadInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCubic", function() { return cubicInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return cubicIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return cubicOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return cubicInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easePoly", function() { return polyInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return polyIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return polyOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return polyInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeSin", function() { return sinInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return sinIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return sinOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return sinInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeExp", function() { return expInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return expIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return expOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return expInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCircle", function() { return circleInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return circleIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return circleOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return circleInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBounce", function() { return bounceOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return bounceIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return bounceOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return bounceInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBack", function() { return backInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return backIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return backOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return backInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeElastic", function() { return elasticOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return elasticIn; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return elasticOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return elasticInOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceCenter", function() { return src_center; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceCollide", function() { return collide; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceLink", function() { return src_link; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceManyBody", function() { return manyBody; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceRadial", function() { return radial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceSimulation", function() { return src_simulation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceX", function() { return d3_force_src_x; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "forceY", function() { return d3_force_src_y; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return defaultLocale; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "format", function() { return defaultLocale_format; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return defaultLocale_formatPrefix; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "formatLocale", function() { return src_locale; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return formatSpecifier; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return precisionFixed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return precisionPrefix; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "precisionRound", function() { return precisionRound; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoArea", function() { return src_area; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoBounds", function() { return bounds; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return src_centroid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoCircle", function() { return src_circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return clip_antimeridian; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return clip_circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return clip_extent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return clipRectangle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoContains", function() { return contains; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoDistance", function() { return src_distance; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return graticule_graticule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return graticule10; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return src_interpolate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoLength", function() { return src_length; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoPath", function() { return d3_geo_src_path; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return albers; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return projection_albersUsa; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return azimuthalEqualArea; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return azimuthalEqualAreaRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return azimuthalEquidistant; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return azimuthalEquidistantRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return conicConformal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return conicConformalRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return conicEqualArea; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return conicEqualAreaRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return conicEquidistant; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return conicEquidistantRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return equirectangular; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return equirectangularRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return gnomonic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return gnomonicRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return projection_identity; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoProjection", function() { return projection_projection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return projectionMutator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoMercator", function() { return mercator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return mercatorRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return naturalEarth1; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return naturalEarth1Raw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return orthographic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return orthographicRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return stereographic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return stereographicRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return transverseMercator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return transverseMercatorRaw; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoRotation", function() { return src_rotation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoStream", function() { return src_stream; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "geoTransform", function() { return src_transform; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "cluster", function() { return cluster; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "hierarchy", function() { return hierarchy; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "pack", function() { return src_pack; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "packSiblings", function() { return siblings; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "packEnclose", function() { return enclose; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "partition", function() { return src_partition; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stratify", function() { return src_stratify; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tree", function() { return src_tree; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemap", function() { return src_treemap; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return binary; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemapDice", function() { return dice; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return treemap_slice; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return sliceDice; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return squarify; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return treemap_resquarify; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolate", function() { return src_value; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return src_array; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return src_basis; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return basisClosed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return src_date; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return src_number; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return src_object; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return src_round; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateString", function() { return src_string; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return src_zoom; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return src_rgb; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return rgbBasis; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return rgbBasisClosed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return src_hsl; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return hslLong; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return lab_lab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return src_hcl; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return hclLong; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return src_cubehelix; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return cubehelixLong; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "quantize", function() { return quantize; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "path", function() { return src_path; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "polygonArea", function() { return d3_polygon_src_area; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "polygonCentroid", function() { return d3_polygon_src_centroid; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "polygonHull", function() { return hull; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "polygonContains", function() { return src_contains; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "polygonLength", function() { return d3_polygon_src_length; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "quadtree", function() { return quadtree; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "randomUniform", function() { return uniform; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "randomNormal", function() { return src_normal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "randomLogNormal", function() { return logNormal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "randomBates", function() { return bates; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "randomIrwinHall", function() { return irwinHall; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "randomExponential", function() { return src_exponential; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "request", function() { return src_request; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "html", function() { return src_html; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "text", function() { return src_text; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "xml", function() { return xml; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "csv", function() { return src_csv; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tsv", function() { return src_tsv; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleBand", function() { return band; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scalePoint", function() { return band_point; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return identity_identity; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return src_linear_linear; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleLog", function() { return log_log; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return ordinal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return implicit; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scalePow", function() { return pow_pow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return pow_sqrt; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return quantile_quantile; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return quantize_quantize; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return threshold_threshold; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleTime", function() { return src_time; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return utcTime; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return category10; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return category20b; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return category20c; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return category20; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return d3_scale_src_cubehelix; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return src_rainbow; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return warm; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return cool; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return viridis; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return magma; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return inferno; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return plasma; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return sequential; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "creator", function() { return creator; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "local", function() { return local; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "matcher", function() { return src_matcher; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "namespaces", function() { return namespaces; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "clientPoint", function() { return src_point; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "select", function() { return src_select; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "selectAll", function() { return src_selectAll; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "selection", function() { return src_selection; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "selector", function() { return src_selector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "selectorAll", function() { return selectorAll; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "style", function() { return styleValue; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "touch", function() { return src_touch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "touches", function() { return src_touches; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "window", function() { return src_window; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "event", function() { return on_event; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "arc", function() { return src_arc; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "area", function() { return d3_shape_src_area; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "line", function() { return src_line; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "pie", function() { return src_pie; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "areaRadial", function() { return areaRadial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "radialArea", function() { return areaRadial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "lineRadial", function() { return src_lineRadial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "radialLine", function() { return src_lineRadial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "pointRadial", function() { return pointRadial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbol", function() { return src_symbol; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return symbol_circle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolCross", function() { return symbol_cross; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return diamond; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return square; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolStar", function() { return star; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return triangle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "symbolWye", function() { return wye; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return curve_basisClosed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return basisOpen; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveBasis", function() { return curve_basis; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveBundle", function() { return curve_bundle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return cardinalClosed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return cardinalOpen; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return cardinal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return catmullRomClosed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return catmullRomOpen; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return curve_catmullRom; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return linearClosed; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveLinear", function() { return curve_linear; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return monotoneX; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return monotoneY; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveNatural", function() { return natural; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveStep", function() { return curve_step; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return stepAfter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return stepBefore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stack", function() { return src_stack; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return expand; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return diverging; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return offset_none; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return silhouette; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return wiggle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return order_ascending; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return order_descending; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return insideOut; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return order_none; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return order_reverse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeInterval", function() { return newInterval; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return src_millisecond; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return milliseconds; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return src_millisecond; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return milliseconds; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeSecond", function() { return src_second; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return seconds; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcSecond", function() { return src_second; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return seconds; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMinute", function() { return src_minute; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return minutes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeHour", function() { return src_hour; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeHours", function() { return hours; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeDay", function() { return src_day; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeDays", function() { return days; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeWeek", function() { return sunday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return sundays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeSunday", function() { return sunday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeSundays", function() { return sundays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMonday", function() { return monday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMondays", function() { return mondays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return tuesday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return tuesdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return wednesday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return wednesdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeThursday", function() { return thursday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return thursdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeFriday", function() { return friday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeFridays", function() { return fridays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return saturday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return saturdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMonth", function() { return src_month; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeMonths", function() { return months; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeYear", function() { return src_year; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeYears", function() { return years; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMinute", function() { return src_utcMinute; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcHour", function() { return src_utcHour; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcDay", function() { return src_utcDay; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcWeek", function() { return utcSunday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return utcSundays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMonth", function() { return src_utcMonth; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcYear", function() { return src_utcYear; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return defaultLocale_defaultLocale; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return formatLocale; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isoFormat", function() { return isoFormat; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isoParse", function() { return isoParse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "timeout", function() { return src_timeout; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interval", function() { return src_interval; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "transition", function() { return src_transition_transition; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "active", function() { return src_active; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "interrupt", function() { return interrupt; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "voronoi", function() { return src_voronoi; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zoom", function() { return d3_zoom_src_zoom; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return transform_transform; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zoomIdentity", function() { return transform_identity; });
/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.IncrementalDOM = global.IncrementalDOM || {})));
}(this, (function (exports) { 'use strict';

/**
 * An array used to store the strings generated by calls to
 * elementOpen, elementOpenStart, elementOpenEnd, elementEnd and elementVoid
 */
exports.buffer = [];

/** @type {?Object} */
exports.currentParent = null;

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function currentElement() {
  return exports.currentParent;
};

/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
var currentPointer = function currentPointer() {
  return {};
};

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 *
 * @param {?object} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing open/close/etc. calls that
 *     describe the DOM. This should have at most one top level element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {void} Nothing.
 */
var patch = function patch(node, fn, data) {
  exports.currentParent = node;
  fn(data);
  exports.currentParent.innerHTML = exports.buffer.join('');
  exports.buffer = [];
  return exports.currentParent;
};

var patchOuter = patch;
var patchInner = patch;

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 *
 * @return {void} Nothing.
 */
var text = function text(value, var_args) {
  var formatted = value;
  for (var i = 1; i < arguments.length; i += 1) {
    var fn = arguments[i];
    formatted = fn(formatted);
  }
  exports.buffer.push(formatted);
};

/** @const */
var symbols = {
  default: '__default'
};

/** @const */
var attributes = {};

/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Array.<string>} el Buffer to append element attributes.
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function updateAttribute(el, name, value) {
  var mutator = attributes[name] || attributes[symbols.default];
  mutator(el, name, value);
};

// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = function (el, name, value) {
  if (Array.isArray(el)) {
    el.push(' ' + name + '="' + value + '"');
  }
};

/**
 * Truncates an array, removing items up until length.
 * @param {!Array<*>} arr The array to truncate.
 * @param {number} length The new length of the array.
 */
var truncateArray = function truncateArray(arr, length) {
  while (arr.length > length) {
    arr.pop();
  }
};

/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;

/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {!Array<*>}
 */
var argsBuilder = [];

/**
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 * @return {void} Nothing.
 */
var attr = function attr(name, value) {
  argsBuilder.push(name);
  argsBuilder.push(value);
};

/**
 * Closes an open virtual Element.
 *
 * @param {string} The Element's tag.
 * @return {void} Nothing.
 */
var elementClose = function elementClose(nameOrCtor) {
  if (typeof nameOrCtor === 'function') {
    new nameOrCtor();
    return;
  }
  exports.buffer.push('</' + nameOrCtor + '>');
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 *
 * @param {string} The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {void} Nothing.
 */
var elementVoid = function elementVoid(nameOrCtor, key, statics, var_args) {
  elementOpen.apply(null, arguments);
  return elementClose(nameOrCtor);
};

/**
 * @param {!string} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {void} Nothing.
 */
var elementOpen = function elementOpen(nameOrCtor, key, statics, var_args) {
  if (typeof nameOrCtor === 'function') {
    new nameOrCtor();
    return exports.currentParent;
  }

  exports.buffer.push('<' + nameOrCtor);

  if (statics) {
    for (var _i = 0; _i < statics.length; _i += 2) {
      var name = /** @type {string} */statics[_i];
      var value = statics[_i + 1];
      updateAttribute(exports.buffer, name, value);
    }
  }

  var i = ATTRIBUTES_OFFSET;
  var j = 0;

  for (; i < arguments.length; i += 2, j += 2) {
    var _name = arguments[i];
    var _value = arguments[i + 1];
    updateAttribute(exports.buffer, _name, _value);
  }

  exports.buffer.push('>');

  return exports.currentParent;
};

/**
 * Closes an open tag started with elementOpenStart.
 *
 * @return {void} Nothing.
 */
var elementOpenEnd = function elementOpenEnd() {
  elementOpen.apply(null, argsBuilder);
  truncateArray(argsBuilder, 0);
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @return {void} Nothing.
 */
var elementOpenStart = function elementOpenStart(nameOrCtor, key, statics) {
  argsBuilder[0] = nameOrCtor;
  argsBuilder[1] = key;
  argsBuilder[2] = statics;
};

/**
 * Returns the constructred DOM string at this point.
 * @param {function} fn
 * @return {string} The constructed DOM string.
 */
var renderToString = function renderToString(fn) {
  patch({}, fn);
  return currentElement().innerHTML;
};

exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.patch = patch;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.text = text;
exports.attr = attr;
exports.elementClose = elementClose;
exports.elementOpen = elementOpen;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpenStart = elementOpenStart;
exports.elementVoid = elementVoid;
exports.renderToString = renderToString;
exports.symbols = symbols;
exports.attributes = attributes;
exports.updateAttribute = updateAttribute;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPatchingComponent = getPatchingComponent;
exports.patch = patch;

var _metalDom = __webpack_require__(7);

var _data = __webpack_require__(4);

var _render = __webpack_require__(25);

var patchingComponents_ = [];

/**
 * Guarantees that the component's element has a parent. That's necessary
 * when calling incremental dom's `patchOuter` for now, as otherwise it will
 * throw an error if the element needs to be replaced.
 * @return {Element} The parent, in case it was added.
 * @private
 */
function buildParentIfNecessary_(element) {
	if (!element || !element.parentNode) {
		var parent = {};
		if (typeof document !== 'undefined') {
			parent = document.createElement('div');
		}
		if (element) {
			(0, _metalDom.append)(parent, element);
		}
		return parent;
	}
}

/**
 * Calls incremental dom's patch function.
 * @param {!Component} component The component to patch.
 * @param {!Element} element The element the component should be patched on.
 * @param {boolean=} opt_outer Flag indicating if `patchOuter` should be used
 *     instead of `patch`.
 * @private
 */
function callPatch_(component, element, opt_outer) {
	patchingComponents_.push(component);

	var data = (0, _data.getData)(component);
	if (!data.render) {
		// Store reference to avoid binds on every patch.
		data.render = _render.render.bind(null, component);
	}

	var patchFn = opt_outer ? IncrementalDOM.patchOuter : IncrementalDOM.patch;
	patchFn(element, data.render);

	patchingComponents_.pop();
}

/**
 * Gets the component that triggered the current patch operation.
 * @return {Component}
 */
function getPatchingComponent() {
	return patchingComponents_[patchingComponents_.length - 1];
}

/**
 * Patches the component with incremental dom function calls.
 * @param {!Component} component
 */
function patch(component) {
	if (!tryPatchEmptyWithParent_(component)) {
		if (!tryPatchWithNoParent_(component)) {
			var element = component.element;
			callPatch_(component, element, true);
		}
	}
}

/**
 * Checks if the component has no content but was rendered from another
 * component. If so, we'll need to patch this parent to make sure that any new
 * content will be added in the right position.
 * @param {!Component} component
 * @return {?boolean} True if the patch happened. Nothing otherwise.
 * @private
 */
function tryPatchEmptyWithParent_(component) {
	var data = (0, _data.getData)(component);
	if (!component.element && data.parent) {
		data.parent.getRenderer().patch(data.parent);
		return true;
	}
}

/**
 * Checks if the component's element exists and has a parent. If that's not the
 * case, a temporary parent will be created and passed to the `patch` function,
 * since incremental dom requires it. Once the patch is done the temporary
 * parent is removed and the component's content is reattached to the correct
 * final position.
 * @param {!Component} component
 * @return {?boolean} True if the patch happened. Nothing otherwise.
 * @private
 */
function tryPatchWithNoParent_(component) {
	var tempParent = buildParentIfNecessary_(component.element);
	if (tempParent) {
		callPatch_(component, tempParent);
		(0, _metalDom.exitDocument)(component.element);
		if (component.element && component.inDocument) {
			var attach = component.getAttachData();
			component.attachElement(attach.parent, attach.sibling);
		}
		return true;
	}
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.customEvents = undefined;
exports.addClasses = addClasses;
exports.closest = closest;
exports.append = append;
exports.buildFragment = buildFragment;
exports.contains = contains;
exports.delegate = delegate;
exports.isNodeListLike = isNodeListLike;
exports.enterDocument = enterDocument;
exports.exitDocument = exitDocument;
exports.hasClass = hasClass;
exports.isEmpty = isEmpty;
exports.match = match;
exports.next = next;
exports.on = on;
exports.once = once;
exports.parent = parent;
exports.registerCustomEvent = registerCustomEvent;
exports.removeChildren = removeChildren;
exports.removeClasses = removeClasses;
exports.replace = replace;
exports.supportsEvent = supportsEvent;
exports.toElement = toElement;
exports.toggleClasses = toggleClasses;
exports.triggerEvent = triggerEvent;

var _metal = __webpack_require__(0);

var _domData = __webpack_require__(12);

var _domData2 = _interopRequireDefault(_domData);

var _DomDelegatedEventHandle = __webpack_require__(53);

var _DomDelegatedEventHandle2 = _interopRequireDefault(_DomDelegatedEventHandle);

var _DomEventHandle = __webpack_require__(23);

var _DomEventHandle2 = _interopRequireDefault(_DomEventHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementsByTag_ = {};
var supportCache_ = {};
var customEvents = exports.customEvents = {};

var LAST_CONTAINER = '__metal_last_container__';
var USE_CAPTURE = {
	blur: true,
	error: true,
	focus: true,
	invalid: true,
	load: true,
	scroll: true
};

/**
 * Adds the requested CSS classes to an element.
 * @param {!Element|!Nodelist} elements The element or elements to add CSS classes to.
 * @param {string} classes CSS classes to add.
 */
function addClasses(elements, classes) {
	if (!(0, _metal.isObject)(elements) || !(0, _metal.isString)(classes)) {
		return;
	}

	if (!elements.length) {
		elements = [elements];
	}

	for (var i = 0; i < elements.length; i++) {
		if ('classList' in elements[i]) {
			addClassesWithNative_(elements[i], classes);
		} else {
			addClassesWithoutNative_(elements[i], classes);
		}
	}
}

/**
 * Adds the requested CSS classes to an element using classList.
 * @param {!Element} element The element to add CSS classes to.
 * @param {string} classes CSS classes to add.
 * @private
 */
function addClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		if (className) {
			element.classList.add(className);
		}
	});
}

/**
 * Adds the requested CSS classes to an element without using classList.
 * @param {!Element} element The element to add CSS classes to.
 * @param {string} classes CSS classes to add.
 * @private
 */
function addClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';
	var classesToAppend = '';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		var className = classes[i];

		if (elementClassName.indexOf(' ' + className + ' ') === -1) {
			classesToAppend += ' ' + className;
		}
	}

	if (classesToAppend) {
		element.className = element.className + classesToAppend;
	}
}

/**
 * Adds an event listener to the given element, to be triggered via delegate.
 * @param {!Element} element
 * @param {string} eventName
 * @param {!function()} listener
 * @private
 */
function addElementListener_(element, eventName, listener) {
	addToArr_(_domData2.default.get(element, 'listeners', {}), eventName, listener);
}

/**
 * Adds an event listener to the given element, to be triggered via delegate
 * selectors.
 * @param {!Element} element
 * @param {string} eventName
 * @param {string} selector
 * @param {!function()} listener
 * @private
 */
function addSelectorListener_(element, eventName, selector, listener) {
	var delegatingData = _domData2.default.get(element, 'delegating', {});
	addToArr_(delegatingData[eventName].selectors, selector, listener);
}

/**
 * Adds a value to an array inside an object, creating it first if it doesn't
 * yet exist.
 * @param {!Array} arr
 * @param {string} key
 * @param {*} value
 * @private
 */
function addToArr_(arr, key, value) {
	if (!arr[key]) {
		arr[key] = [];
	}
	arr[key].push(value);
}

/**
 * Attaches a delegate listener, unless there's already one attached.
 * @param {!Element} element
 * @param {string} eventName
 * @private
 */
function attachDelegateEvent_(element, eventName) {
	var delegatingData = _domData2.default.get(element, 'delegating', {});
	if (!delegatingData[eventName]) {
		delegatingData[eventName] = {
			handle: on(element, eventName, handleDelegateEvent_, !!USE_CAPTURE[eventName]),
			selectors: {}
		};
	}
}

/**
 * Gets the closest element up the tree from the given element (including
 * itself) that matches the specified selector, or null if none match.
 * @param {Element} element
 * @param {string} selector
 * @return {Element}
 */
function closest(element, selector) {
	while (element && !match(element, selector)) {
		element = element.parentNode;
	}
	return element;
}

/**
 * Appends a child node with text or other nodes to a parent node. If
 * child is a HTML string it will be automatically converted to a document
 * fragment before appending it to the parent.
 * @param {!Element} parent The node to append nodes to.
 * @param {!(Element|NodeList|string)} child The thing to append to the parent.
 * @return {!Element} The appended child.
 */
function append(parent, child) {
	if ((0, _metal.isString)(child)) {
		child = buildFragment(child);
	}
	if (isNodeListLike(child)) {
		var childArr = Array.prototype.slice.call(child);
		for (var i = 0; i < childArr.length; i++) {
			parent.appendChild(childArr[i]);
		}
	} else {
		parent.appendChild(child);
	}
	return child;
}

/**
 * Helper for converting a HTML string into a document fragment.
 * @param {string} htmlString The HTML string to convert.
 * @return {!Element} The resulting document fragment.
 */
function buildFragment(htmlString) {
	var tempDiv = document.createElement('div');
	tempDiv.innerHTML = '<br>' + htmlString;
	tempDiv.removeChild(tempDiv.firstChild);

	var fragment = document.createDocumentFragment();
	while (tempDiv.firstChild) {
		fragment.appendChild(tempDiv.firstChild);
	}
	return fragment;
}

/**
 * Checks if the first element contains the second one.
 * @param {!Element} element1
 * @param {!Element} element2
 * @return {boolean}
 */
function contains(element1, element2) {
	if ((0, _metal.isDocument)(element1)) {
		// document.contains is not defined on IE9, so call it on documentElement instead.
		return element1.documentElement.contains(element2);
	} else {
		return element1.contains(element2);
	}
}

/**
 * Listens to the specified event on the given DOM element, but only calls the
 * given callback listener when it's triggered by elements that match the
 * given selector or target element.
 * @param {!Element} element The DOM element the event should be listened on.
 * @param {string} eventName The name of the event to listen to.
 * @param {!Element|string} selectorOrTarget Either an element or css selector
 *     that should match the event for the listener to be triggered.
 * @param {!function(!Object)} callback Function to be called when the event
 *     is triggered. It will receive the normalized event object.
 * @param {boolean=} opt_default Optional flag indicating if this is a default
 *     listener. That means that it would only be executed after all non
 *     default listeners, and only if the event isn't prevented via
 *     `preventDefault`.
 * @return {!EventHandle} Can be used to remove the listener.
 */
function delegate(element, eventName, selectorOrTarget, callback, opt_default) {
	var customConfig = customEvents[eventName];
	if (customConfig && customConfig.delegate) {
		eventName = customConfig.originalEvent;
		callback = customConfig.handler.bind(customConfig, callback);
	}

	if (opt_default) {
		// Wrap callback so we don't set property directly on it.
		callback = callback.bind();
		callback.defaultListener_ = true;
	}

	attachDelegateEvent_(element, eventName);
	if ((0, _metal.isString)(selectorOrTarget)) {
		addSelectorListener_(element, eventName, selectorOrTarget, callback);
	} else {
		addElementListener_(selectorOrTarget, eventName, callback);
	}

	return new _DomDelegatedEventHandle2.default((0, _metal.isString)(selectorOrTarget) ? element : selectorOrTarget, eventName, callback, (0, _metal.isString)(selectorOrTarget) ? selectorOrTarget : null);
}

/**
 * Verifies if the element is able to trigger the Click event,
 * simulating browsers behaviour, avoiding event listeners to be called by triggerEvent method.
 * @param {Element} node Element to be checked.
 * @param {string} eventName The event name.
 * @private
 */
function isAbleToInteractWith_(node, eventName, opt_eventObj) {
	if (opt_eventObj && eventName === 'click' && opt_eventObj.button === 2) {
		// Firefox triggers "click" events on the document for right clicks. This
		// causes our delegate logic to trigger it for regular elements too, which
		// shouldn't happen. Ignoring them here.
		return false;
	}

	var matchesSelector = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'FIELDSET'];
	if (eventName === 'click' && matchesSelector.indexOf(node.tagName) > -1) {
		return !(node.disabled || parent(node, 'fieldset[disabled]'));
	}
	return true;
}

/**
 * Returns true if the specified value is a NodeList or like one.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is like a NodeList.
 */
function isNodeListLike(val) {
	return (0, _metal.isDefAndNotNull)(val) && typeof val.length === 'number' && typeof val.item === 'function';
}

/**
 * Inserts node in document as last element.
 * @param {Element} node Element to remove children from.
 */
function enterDocument(node) {
	node && append(document.body, node);
}

/**
 * Removes node from document.
 * @param {Element} node Element to remove children from.
 */
function exitDocument(node) {
	if (node && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

/**
 * This is called when an event is triggered by a delegate listener. All
 * matching listeners of this event type from `target` to `currentTarget` will
 * be triggered.
 * @param {!Event} event The event payload.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function handleDelegateEvent_(event) {
	normalizeDelegateEvent_(event);
	var ret = true;
	var container = event.currentTarget;
	var defFns = [];

	ret &= triggerDelegatedListeners_(container, event, defFns);
	ret &= triggerDefaultDelegatedListeners_(defFns, event);

	event.delegateTarget = null;
	event[LAST_CONTAINER] = container;
	return ret;
}

/**
 * Checks if the given element has the requested css class.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 */
function hasClass(element, className) {
	if ('classList' in element) {
		return hasClassWithNative_(element, className);
	} else {
		return hasClassWithoutNative_(element, className);
	}
}

/**
 * Checks if the given element has the requested css class using classList.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 * @private
 */
function hasClassWithNative_(element, className) {
	return className.indexOf(' ') === -1 && element.classList.contains(className);
}

/**
 * Checks if the given element has the requested css class without using classList.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 * @private
 */
function hasClassWithoutNative_(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0 && className.split(' ').length === 1;
}

/**
 * Checks if the given element is empty or not.
 * @param {!Element} element
 * @return {boolean}
 */
function isEmpty(element) {
	return element.childNodes.length === 0;
}

/**
 * Check if an element matches a given selector.
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 */
function match(element, selector) {
	if (!element || element.nodeType !== 1) {
		return false;
	}

	var p = Element.prototype;
	var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
	if (m) {
		return m.call(element, selector);
	}

	return matchFallback_(element, selector);
}

/**
 * Check if an element matches a given selector, using an internal implementation
 * instead of calling existing javascript functions.
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 * @private
 */
function matchFallback_(element, selector) {
	var nodes = document.querySelectorAll(selector, element.parentNode);
	for (var i = 0; i < nodes.length; ++i) {
		if (nodes[i] === element) {
			return true;
		}
	}
	return false;
}

/**
 * Returns the next sibling of the given element that matches the specified
 * selector, or null if there is none.
 * @param {!Element} element
 * @param {?string} selector
 */
function next(element, selector) {
	do {
		element = element.nextSibling;
		if (element && match(element, selector)) {
			return element;
		}
	} while (element);
	return null;
}

/**
 * Normalizes the event payload for delegate listeners.
 * @param {!Event} event
 * @private
 */
function normalizeDelegateEvent_(event) {
	event.stopPropagation = stopPropagation_;
	event.stopImmediatePropagation = stopImmediatePropagation_;
}

/**
 * Listens to the specified event on the given DOM element. This function normalizes
 * DOM event payloads and functions so they'll work the same way on all supported
 * browsers.
 * @param {!Element|string} element The DOM element to listen to the event on, or
 *   a selector that should be delegated on the entire document.
 * @param {string} eventName The name of the event to listen to.
 * @param {!function(!Object)} callback Function to be called when the event is
 *   triggered. It will receive the normalized event object.
 * @param {boolean} opt_capture Flag indicating if listener should be triggered
 *   during capture phase, instead of during the bubbling phase. Defaults to false.
 * @return {!DomEventHandle} Can be used to remove the listener.
 */
function on(element, eventName, callback, opt_capture) {
	if ((0, _metal.isString)(element)) {
		return delegate(document, eventName, element, callback);
	}
	var customConfig = customEvents[eventName];
	if (customConfig && customConfig.event) {
		eventName = customConfig.originalEvent;
		callback = customConfig.handler.bind(customConfig, callback);
	}
	element.addEventListener(eventName, callback, opt_capture);
	return new _DomEventHandle2.default(element, eventName, callback, opt_capture);
}

/**
 * Listens to the specified event on the given DOM element once. This
 * function normalizes DOM event payloads and functions so they'll work the
 * same way on all supported browsers.
 * @param {!Element} element The DOM element to listen to the event on.
 * @param {string} eventName The name of the event to listen to.
 * @param {!function(!Object)} callback Function to be called when the event
 *   is triggered. It will receive the normalized event object.
 * @return {!DomEventHandle} Can be used to remove the listener.
 */
function once(element, eventName, callback) {
	var domEventHandle = on(element, eventName, function () {
		domEventHandle.removeListener();
		return callback.apply(this, arguments);
	});
	return domEventHandle;
}

/**
 * Gets the first parent from the given element that matches the specified
 * selector, or null if none match.
 * @param {!Element} element
 * @param {string} selector
 * @return {Element}
 */
function parent(element, selector) {
	return closest(element.parentNode, selector);
}

/**
 * Registers a custom event.
 * @param {string} eventName The name of the custom event.
 * @param {!Object} customConfig An object with information about how the event
 *   should be handled.
 */
function registerCustomEvent(eventName, customConfig) {
	customEvents[eventName] = customConfig;
}

/**
 * Removes all the child nodes on a DOM node.
 * @param {Element} node Element to remove children from.
 */
function removeChildren(node) {
	var child = void 0;
	while (child = node.firstChild) {
		node.removeChild(child);
	}
}

/**
 * Removes the requested CSS classes from an element.
 * @param {!Element|!NodeList} elements The element or elements to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 */
function removeClasses(elements, classes) {
	if (!(0, _metal.isObject)(elements) || !(0, _metal.isString)(classes)) {
		return;
	}

	if (!elements.length) {
		elements = [elements];
	}

	for (var i = 0; i < elements.length; i++) {
		if ('classList' in elements[i]) {
			removeClassesWithNative_(elements[i], classes);
		} else {
			removeClassesWithoutNative_(elements[i], classes);
		}
	}
}

/**
 * Removes the requested CSS classes from an element using classList.
 * @param {!Element} element The element to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 * @private
 */
function removeClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		if (className) {
			element.classList.remove(className);
		}
	});
}

/**
 * Removes the requested CSS classes from an element without using classList.
 * @param {!Element} element The element to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 * @private
 */
function removeClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
	}

	element.className = elementClassName.trim();
}

/**
 * Replaces the first element with the second.
 * @param {Element} element1
 * @param {Element} element2
 */
function replace(element1, element2) {
	if (element1 && element2 && element1 !== element2 && element1.parentNode) {
		element1.parentNode.insertBefore(element2, element1);
		element1.parentNode.removeChild(element1);
	}
}

/**
 * The function that replaces `stopImmediatePropagation_` for events.
 * @private
 */
function stopImmediatePropagation_() {
	var event = this; // eslint-disable-line
	event.stopped = true;
	event.stoppedImmediate = true;
	Event.prototype.stopImmediatePropagation.call(event);
}

/**
 * The function that replaces `stopPropagation` for events.
 * @private
 */
function stopPropagation_() {
	var event = this; // eslint-disable-line
	event.stopped = true;
	Event.prototype.stopPropagation.call(event);
}

/**
 * Checks if the given element supports the given event type.
 * @param {!Element|string} element The DOM element or element tag name to check.
 * @param {string} eventName The name of the event to check.
 * @return {boolean}
 */
function supportsEvent(element, eventName) {
	if (customEvents[eventName]) {
		return true;
	}

	if ((0, _metal.isString)(element)) {
		if (!elementsByTag_[element]) {
			elementsByTag_[element] = document.createElement(element);
		}
		element = elementsByTag_[element];
	}

	var tag = element.tagName;
	if (!supportCache_[tag] || !supportCache_[tag].hasOwnProperty(eventName)) {
		supportCache_[tag] = supportCache_[tag] || {};
		supportCache_[tag][eventName] = 'on' + eventName in element;
	}
	return supportCache_[tag][eventName];
}

/**
 * This triggers all default matched delegated listeners of a given event type.
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 * @param {!Event} event
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerDefaultDelegatedListeners_(defFns, event) {
	var ret = true;

	for (var i = 0; i < defFns.length && !event.defaultPrevented; i++) {
		event.delegateTarget = defFns[i].element;
		ret &= defFns[i].fn(event);
	}

	return ret;
}

/**
 * This triggers all matched delegated listeners of a given event type when its
 * delegated target is able to interact.
 * @param {!Element} container
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerDelegatedListeners_(container, event, defaultFns) {
	var ret = true;
	var currElement = event.target;
	var limit = container.parentNode;

	while (currElement && currElement !== limit && !event.stopped) {
		if (isAbleToInteractWith_(currElement, event.type, event)) {
			event.delegateTarget = currElement;
			ret &= triggerElementListeners_(currElement, event, defaultFns);
			ret &= triggerSelectorListeners_(container, currElement, event, defaultFns);
		}
		currElement = currElement.parentNode;
	}

	return ret;
}

/**
 * Converts the given argument to a DOM element. Strings are assumed to
 * be selectors, and so a matched element will be returned. If the arg
 * is already a DOM element it will be the return value.
 * @param {string|Element|Document} selectorOrElement
 * @return {Element} The converted element, or null if none was found.
 */
function toElement(selectorOrElement) {
	if ((0, _metal.isElement)(selectorOrElement) || (0, _metal.isDocument)(selectorOrElement) || (0, _metal.isDocumentFragment)(selectorOrElement)) {
		return selectorOrElement;
	} else if ((0, _metal.isString)(selectorOrElement)) {
		if (selectorOrElement[0] === '#' && selectorOrElement.indexOf(' ') === -1) {
			return document.getElementById(selectorOrElement.substr(1));
		} else {
			return document.querySelector(selectorOrElement);
		}
	} else {
		return null;
	}
}

/**
 * Adds or removes one or more classes from an element. If any of the classes
 * is present, it will be removed from the element, or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 */
function toggleClasses(element, classes) {
	if (!(0, _metal.isObject)(element) || !(0, _metal.isString)(classes)) {
		return;
	}

	if ('classList' in element) {
		toggleClassesWithNative_(element, classes);
	} else {
		toggleClassesWithoutNative_(element, classes);
	}
}

/**
 * Adds or removes one or more classes from an element using classList.
 * If any of the classes is present, it will be removed from the element,
 * or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 * @private
 */
function toggleClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		element.classList.toggle(className);
	});
}

/**
 * Adds or removes one or more classes from an element without using classList.
 * If any of the classes is present, it will be removed from the element,
 * or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 * @private
 */
function toggleClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		var className = ' ' + classes[i] + ' ';
		var classIndex = elementClassName.indexOf(className);

		if (classIndex === -1) {
			elementClassName = '' + elementClassName + classes[i] + ' ';
		} else {
			var before = elementClassName.substring(0, classIndex);
			var after = elementClassName.substring(classIndex + className.length);
			elementClassName = before + ' ' + after;
		}
	}

	element.className = elementClassName.trim();
}

/**
 * Triggers all listeners for the given event type that are stored in the
 * specified element.
 * @param {!Element} element
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerElementListeners_(element, event, defaultFns) {
	var lastContainer = event[LAST_CONTAINER];
	if (!(0, _metal.isDef)(lastContainer) || !contains(lastContainer, element)) {
		var listeners = _domData2.default.get(element, 'listeners', {})[event.type];
		return triggerListeners_(listeners, event, element, defaultFns);
	}
	return true;
}

/**
 * Triggers the specified event on the given element.
 * NOTE: This should mostly be used for testing, not on real code.
 * @param {!Element} element The node that should trigger the event.
 * @param {string} eventName The name of the event to be triggred.
 * @param {Object=} opt_eventObj An object with data that should be on the
 *   triggered event's payload.
 */
function triggerEvent(element, eventName, opt_eventObj) {
	if (isAbleToInteractWith_(element, eventName, opt_eventObj)) {
		var eventObj = document.createEvent('HTMLEvents');
		eventObj.initEvent(eventName, true, true);
		_metal.object.mixin(eventObj, opt_eventObj);
		element.dispatchEvent(eventObj);
	}
}

/**
 * Triggers the given listeners array.
 * @param {Array<!function()>} listeners
 * @param {!Event} event
 * @param {!Element} element
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerListeners_(listeners, event, element, defaultFns) {
	var ret = true;
	listeners = listeners || [];
	for (var i = 0; i < listeners.length && !event.stoppedImmediate; i++) {
		if (listeners[i].defaultListener_) {
			defaultFns.push({
				element: element,
				fn: listeners[i]
			});
		} else {
			ret &= listeners[i](event);
		}
	}
	return ret;
}

/**
 * Triggers all selector listeners for the given event.
 * @param {!Element} container
 * @param {!Element} element
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerSelectorListeners_(container, element, event, defaultFns) {
	var ret = true;
	var data = _domData2.default.get(container, 'delegating', {});
	var map = data[event.type].selectors;
	var selectors = Object.keys(map);
	for (var i = 0; i < selectors.length && !event.stoppedImmediate; i++) {
		if (match(element, selectors[i])) {
			var listeners = map[selectors[i]];
			ret &= triggerListeners_(listeners, event, element, defaultFns);
		}
	}
	return ret;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _domData = __webpack_require__(12);

var _domData2 = _interopRequireDefault(_domData);

var _metalEvents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a special EventHandle, that is responsible for dom delegated events
 * (only the ones that receive a target element, not a selector string).
 * @extends {EventHandle}
 */
var DomDelegatedEventHandle = function (_EventHandle) {
	_inherits(DomDelegatedEventHandle, _EventHandle);

	/**
  * The constructor for `DomDelegatedEventHandle`.
  * @param {!Event} emitter Element the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @param {string=} opt_selector An optional selector used when delegating
  *     the event.
  * @constructor
  */
	function DomDelegatedEventHandle(emitter, event, listener, opt_selector) {
		_classCallCheck(this, DomDelegatedEventHandle);

		var _this = _possibleConstructorReturn(this, (DomDelegatedEventHandle.__proto__ || Object.getPrototypeOf(DomDelegatedEventHandle)).call(this, emitter, event, listener));

		_this.selector_ = opt_selector;
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(DomDelegatedEventHandle, [{
		key: 'removeListener',
		value: function removeListener() {
			var delegating = _domData2.default.get(this.emitter_, 'delegating', {});
			var listeners = _domData2.default.get(this.emitter_, 'listeners', {});
			var selector = this.selector_;
			var arr = (0, _metal.isString)(selector) ? delegating[this.event_].selectors : listeners;
			var key = (0, _metal.isString)(selector) ? selector : this.event_;

			_metal.array.remove(arr[key] || [], this.listener_);
			if (arr[key] && arr[key].length === 0) {
				delete arr[key];
			}
		}
	}]);

	return DomDelegatedEventHandle;
}(_metalEvents.EventHandle);

exports.default = DomDelegatedEventHandle;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dom = __webpack_require__(1);

var _metalEvents = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DomEventEmitterProxy utility. It extends `EventEmitterProxy` to also accept
 * dom elements as origin emitters.
 * @extends {EventEmitterProxy}
 */
var DomEventEmitterProxy = function (_EventEmitterProxy) {
	_inherits(DomEventEmitterProxy, _EventEmitterProxy);

	function DomEventEmitterProxy() {
		_classCallCheck(this, DomEventEmitterProxy);

		return _possibleConstructorReturn(this, (DomEventEmitterProxy.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy)).apply(this, arguments));
	}

	_createClass(DomEventEmitterProxy, [{
		key: 'addListener_',

		/**
   * Adds the given listener for the given event.
   * @param {string} event
   * @param {!function()} listener
   * @return {!EventHandle} The listened event's handle.
   * @protected
   * @override
   */
		value: function addListener_(event, listener) {
			if (this.originEmitter_.addEventListener) {
				if (this.isDelegateEvent_(event)) {
					var index = event.indexOf(':', 9);
					var eventName = event.substring(9, index);
					var selector = event.substring(index + 1);
					return (0, _dom.delegate)(this.originEmitter_, eventName, selector, listener);
				} else {
					return (0, _dom.on)(this.originEmitter_, event, listener);
				}
			} else {
				return _get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'addListener_', this).call(this, event, listener);
			}
		}

		/**
   * Checks if the given event is of the delegate type.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'isDelegateEvent_',
		value: function isDelegateEvent_(event) {
			return event.substr(0, 9) === 'delegate:';
		}

		/**
   * Checks if the given event is supported by the origin element.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'isSupportedDomEvent_',
		value: function isSupportedDomEvent_(event) {
			if (!this.originEmitter_ || !this.originEmitter_.addEventListener) {
				return true;
			}
			return this.isDelegateEvent_(event) && event.indexOf(':', 9) !== -1 || (0, _dom.supportsEvent)(this.originEmitter_, event);
		}

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   * @override
   */

	}, {
		key: 'shouldProxyEvent_',
		value: function shouldProxyEvent_(event) {
			return _get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'shouldProxyEvent_', this).call(this, event) && this.isSupportedDomEvent_(event);
		}
	}]);

	return DomEventEmitterProxy;
}(_metalEvents.EventEmitterProxy);

exports.default = DomEventEmitterProxy;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _dom = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility functions for running javascript code in the global scope.
 */
var globalEval = function () {
	function globalEval() {
		_classCallCheck(this, globalEval);
	}

	_createClass(globalEval, null, [{
		key: 'run',

		/**
   * Evaluates the given string in the global scope.
   * @param {string} text
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */
		value: function run(text, opt_appendFn) {
			var script = document.createElement('script');
			script.text = text;
			if (opt_appendFn) {
				opt_appendFn(script);
			} else {
				document.head.appendChild(script);
			}
			(0, _dom.exitDocument)(script);
			return script;
		}

		/**
   * Evaluates the given javascript file in the global scope.
   * @param {string} src The file's path.
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */

	}, {
		key: 'runFile',
		value: function runFile(src, opt_callback, opt_appendFn) {
			var script = document.createElement('script');
			script.src = src;

			var callback = function callback() {
				(0, _dom.exitDocument)(script);
				opt_callback && opt_callback();
			};
			(0, _dom.once)(script, 'load', callback);
			(0, _dom.once)(script, 'error', callback);

			if (opt_appendFn) {
				opt_appendFn(script);
			} else {
				document.head.appendChild(script);
			}

			return script;
		}

		/**
   * Evaluates the code referenced by the given script element.
   * @param {!Element} script
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */

	}, {
		key: 'runScript',
		value: function runScript(script, opt_callback, opt_appendFn) {
			var callback = function callback() {
				opt_callback && opt_callback();
			};
			if (script.type && script.type !== 'text/javascript') {
				_metal.async.nextTick(callback);
				return;
			}
			(0, _dom.exitDocument)(script);
			if (script.src) {
				return globalEval.runFile(script.src, opt_callback, opt_appendFn);
			} else {
				_metal.async.nextTick(callback);
				return globalEval.run(script.text, opt_appendFn);
			}
		}

		/**
   * Evaluates any script tags present in the given element.
   * @param {!Element} element
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runScriptsInElement',
		value: function runScriptsInElement(element, opt_callback, opt_appendFn) {
			var scripts = element.querySelectorAll('script');
			if (scripts.length) {
				globalEval.runScriptsInOrder(scripts, 0, opt_callback, opt_appendFn);
			} else if (opt_callback) {
				_metal.async.nextTick(opt_callback);
			}
		}

		/**
   * Runs the given scripts elements in the order that they appear.
   * @param {!NodeList} scripts
   * @param {number} index
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runScriptsInOrder',
		value: function runScriptsInOrder(scripts, index, opt_callback, opt_appendFn) {
			globalEval.runScript(scripts.item(index), function () {
				if (index < scripts.length - 1) {
					globalEval.runScriptsInOrder(scripts, index + 1, opt_callback, opt_appendFn);
				} else if (opt_callback) {
					_metal.async.nextTick(opt_callback);
				}
			}, opt_appendFn);
		}
	}]);

	return globalEval;
}();

exports.default = globalEval;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _dom = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility functions for running styles.
 */
var globalEvalStyles = function () {
	function globalEvalStyles() {
		_classCallCheck(this, globalEvalStyles);
	}

	_createClass(globalEvalStyles, null, [{
		key: 'run',

		/**
   * Evaluates the given style.
   * @param {string} text
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} style
   */
		value: function run(text, opt_appendFn) {
			var style = document.createElement('style');
			style.innerHTML = text;
			if (opt_appendFn) {
				opt_appendFn(style);
			} else {
				document.head.appendChild(style);
			}
			return style;
		}

		/**
   * Evaluates the given style file.
   * @param {string} href The file's path.
   * @param {function()=} opt_callback Optional function to be called
   *   when the styles has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} style
   */

	}, {
		key: 'runFile',
		value: function runFile(href, opt_callback, opt_appendFn) {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
			globalEvalStyles.runStyle(link, opt_callback, opt_appendFn);
			return link;
		}

		/**
   * Evaluates the code referenced by the given style/link element.
   * @param {!Element} style
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   *  @return {Element} style
   */

	}, {
		key: 'runStyle',
		value: function runStyle(style, opt_callback, opt_appendFn) {
			var callback = function callback() {
				opt_callback && opt_callback();
			};
			if (style.rel && style.rel !== 'stylesheet') {
				_metal.async.nextTick(callback);
				return;
			}

			if (style.tagName === 'STYLE') {
				_metal.async.nextTick(callback);
			} else {
				(0, _dom.once)(style, 'load', callback);
				(0, _dom.once)(style, 'error', callback);
			}

			if (opt_appendFn) {
				opt_appendFn(style);
			} else {
				document.head.appendChild(style);
			}

			return style;
		}

		/**
   * Evaluates any style present in the given element.
   * @param {!Element} element
   * @param {function()=} opt_callback Optional function to be called when the
   *   style has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runStylesInElement',
		value: function runStylesInElement(element, opt_callback, opt_appendFn) {
			var styles = element.querySelectorAll('style,link');
			if (styles.length === 0 && opt_callback) {
				_metal.async.nextTick(opt_callback);
				return;
			}

			var loadCount = 0;
			var callback = function callback() {
				if (opt_callback && ++loadCount === styles.length) {
					_metal.async.nextTick(opt_callback);
				}
			};
			for (var i = 0; i < styles.length; i++) {
				globalEvalStyles.runStyle(styles[i], callback, opt_appendFn);
			}
		}
	}]);

	return globalEvalStyles;
}();

exports.default = globalEvalStyles;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _metal = __webpack_require__(0);

var _dom = __webpack_require__(1);

var _features = __webpack_require__(24);

var _features2 = _interopRequireDefault(_features);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Register custom events for event delegation.
 */
function registerEvents() {
	var mouseEventMap = {
		mouseenter: 'mouseover',
		mouseleave: 'mouseout',
		pointerenter: 'pointerover',
		pointerleave: 'pointerout'
	};
	Object.keys(mouseEventMap).forEach(function (eventName) {
		(0, _dom.registerCustomEvent)(eventName, {
			delegate: true,
			handler: function handler(callback, event) {
				var related = event.relatedTarget;
				var target = event.delegateTarget;
				if (!related || related !== target && !(0, _dom.contains)(target, related)) {
					event.customType = eventName;
					return callback(event);
				}
			},
			originalEvent: mouseEventMap[eventName]
		});
	});

	var animationEventMap = {
		animation: 'animationend',
		transition: 'transitionend'
	};
	Object.keys(animationEventMap).forEach(function (eventType) {
		var eventName = animationEventMap[eventType];
		(0, _dom.registerCustomEvent)(eventName, {
			event: true,
			delegate: true,
			handler: function handler(callback, event) {
				event.customType = eventName;
				return callback(event);
			},
			originalEvent: _features2.default.checkAnimationEventName()[eventType]
		});
	});
}

if (!(0, _metal.isServerSide)()) {
	registerEvents();
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyAttribute = applyAttribute;
exports.convertListenerNamesToFns = convertListenerNamesToFns;

var _metal = __webpack_require__(0);

var _metalDom = __webpack_require__(7);

var _metalComponent = __webpack_require__(5);

var _incrementalDomAop = __webpack_require__(11);

var HANDLE_SUFFIX = '__handle__';
var LISTENER_REGEX = /^(?:on([A-Z].+))|(?:data-on(.+))$/;

/**
 * Applies an attribute to a specified element owned by the given component.
 * @param {!Component} component
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 */
function applyAttribute(component, element, name, value) {
  var eventName = getEventFromListenerAttr_(name);
  if (eventName) {
    attachEvent_(component, element, name, eventName, value);
    return;
  }

  value = fixCheckedAttr_(name, value);
  setValueAttrAsProperty_(element, name, value);

  if ((0, _metal.isBoolean)(value)) {
    setBooleanAttr_(element, name, value);
  } else {
    (0, _incrementalDomAop.getOriginalFn)('attributes')(element, name, value);
  }
}

/**
 * Listens to the specified event, attached via incremental dom calls.
 * @param {!Component} component
 * @param {!Element} element
 * @param {string} attr
 * @param {string} eventName
 * @param {function()} fn
 * @private
 */
function attachEvent_(component, element, attr, eventName, fn) {
  if ((0, _metal.isServerSide)()) {
    return;
  }
  var handleKey = eventName + HANDLE_SUFFIX;
  if (element[handleKey]) {
    element[handleKey].removeListener();
    element[handleKey] = null;
  }
  if (fn) {
    element[attr] = fn;
    element[handleKey] = (0, _metalDom.delegate)(document, eventName, element, fn);
  }
}

/**
 * Converts all event listener attributes given as function names to actual
 * function references. It's important to do this before calling the real
 * incremental dom `elementOpen` function, otherwise if a component passes
 * the same function name that an element was already using for another
 * component, that event won't be reattached as incremental dom will think that
 * the value hasn't changed. Passing the function references as the value will
 * guarantee that different functions will cause events to be reattached,
 * regardless of their original names.
 * @param {!Component} component
 * @param {!Object} config
 */
function convertListenerNamesToFns(component, config) {
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    config[key] = convertListenerNameToFn_(component, key, config[key]);
  }
}

/**
 * Converts the given attribute's value to a function reference, if it's
 * currently a listener name. It also register the listener name for
 * further usage.
 * @param {!Component} component
 * @param {string} name
 * @param {*} value
 * @return {*}
 * @private
 */
function convertListenerNameToFn_(component, name, value) {
  if ((0, _metal.isString)(value)) {
    var eventName = getEventFromListenerAttr_(name);
    if (eventName) {
      var fn = (0, _metalComponent.getComponentFn)(component, value);
      if (fn) {
        return fn;
      }
    }
  }
  return value;
}

/**
 * Changes the value of the `checked` attribute to be a boolean.
 * NOTE: This is a temporary fix to account for incremental dom setting
 * "checked" as an attribute only, which can cause bugs since that won't
 * necessarily check/uncheck the element it's set on. See
 * https://github.com/google/incremental-dom/issues/198 for more details.
 * @param {string} name
 * @param {*} value
 * @return {*}
 * @private
 */
function fixCheckedAttr_(name, value) {
  if (name === 'checked') {
    value = (0, _metal.isDefAndNotNull)(value) && value !== false;
  }
  return value;
}

/**
 * Returns the event name if the given attribute is a listener (matching the
 * `LISTENER_REGEX` regex), or null if it isn't.
 * @param {string} attr
 * @return {?string}
 * @private
 */
function getEventFromListenerAttr_(attr) {
  var matches = LISTENER_REGEX.exec(attr);
  var eventName = matches ? matches[1] ? matches[1] : matches[2] : null;
  return eventName ? eventName.toLowerCase() : null;
}

/**
 * Sets boolean attributes manually. This is done because incremental dom sets
 * boolean values as string data attributes by default, which is counter
 * intuitive. This changes the behavior to use the actual boolean value.
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 * @private
 */
function setBooleanAttr_(element, name, value) {
  if ((0, _metal.isServerSide)()) {
    return;
  }
  element[name] = value;
  if (value) {
    element.setAttribute(name, '');
  } else {
    element.removeAttribute(name);
  }
}

/**
 * Sets the value of the `value` attribute directly in the element.
 * NOTE: This is a temporary fix to account for incremental dom setting "value"
 * as an attribute only, which can cause bugs since that won't necessarily
 * update the input's content it's set on. See
 * https://github.com/google/incremental-dom/issues/239 for more details. We
 * only do this if the new value is different though, as otherwise the browser
 * will automatically move the typing cursor to the end of the field.
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 * @private
 */
function setValueAttrAsProperty_(element, name, value) {
  if ((0, _metal.isServerSide)()) {
    return;
  }
  if (name === 'value' && element.value !== value) {
    element[name] = value;
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _events = __webpack_require__(26);

var _metal = __webpack_require__(0);

var _sync = __webpack_require__(60);

var _metalDom = __webpack_require__(7);

var _ComponentDataManager = __webpack_require__(27);

var _ComponentDataManager2 = _interopRequireDefault(_ComponentDataManager);

var _ComponentRenderer = __webpack_require__(28);

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

var _metalEvents = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component collects common behaviors to be followed by UI components, such
 * as Lifecycle, CSS classes management, events encapsulation and support for
 * different types of rendering.
 * Rendering logic can be done by either:
 *     - Listening to the `render` event inside the `created` lifecycle function
 *       and adding the rendering logic to the listener.
 *     - Using an existing implementation of `ComponentRenderer` like `Soy`,
 *       and following its patterns.
 *     - Building your own implementation of a `ComponentRenderer`.
 * Specifying the renderer that will be used can be done by setting the RENDERER
 * static variable to the renderer's constructor function.
 *
 * Example:
 *
 * <code>
 * class CustomComponent extends Component {
 *   created() {
 *   }
 *
 *   rendered() {
 *   }
 *
 *   willAttach() {
 *   }
 *
 *   attached() {
 *   }
 *
 *   willReceiveState() {
 *   }
 *
 *   // willReceiveProps is only available in JSX components
 *   willReceiveProps() {
 *   }
 *
 *   shouldUpdate() {
 *   }
 *
 *   willUpdate() {
 *   }
 *
 *   willDetach() {
 *   }
 *
 *   detached() {
 *   }
 *
 *   disposed() {
 *   }
 * }
 *
 * CustomComponent.RENDERER = MyRenderer;
 *
 * CustomComponent.STATE = {
 *   title: { value: 'Title' },
 *   fontSize: { value: '10px' }
 * };
 * </code>
 *
 * @extends {State}
 */
var Component = function (_EventEmitter) {
	_inherits(Component, _EventEmitter);

	/**
  * Constructor function for `Component`.
  * @param {Object=} opt_config An object with the initial values for this
  *     component's state.
  * @param {boolean|string|Element=} opt_parentElement The element where the
  *     component should be rendered. Can be given as a selector or an element.
  *     If `false` is passed, the component won't be rendered automatically
  *     after created.
  * @constructor
  */
	function Component(opt_config, opt_parentElement) {
		_classCallCheck(this, Component);

		/**
   * Instance of `DomEventEmitterProxy` which proxies events from the component's
   * element to the component itself.
   * @type {!DomEventEmitterProxy}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

		_this.elementEventProxy_ = new _metalDom.DomEventEmitterProxy(null, _this, proxyBlackList_);

		/**
   * The `EventHandler` instance for events attached from the `events` state key.
   * @type {EventHandler}
   * @protected
   */
		_this.eventsStateKeyHandler_ = null;

		/**
   * Stores the pending callback function for when `forceUpdate` is used
   * to trigger a rerender.
   * @type {?function}
   */
		_this.forceUpdateCallback_ = null;

		/**
   * Whether the element is in document.
   * @type {boolean}
   */
		_this.inDocument = false;

		/**
   * The initial config option passed to this constructor.
   * @type {!Object}
   * @protected
   */
		_this.initialConfig_ = opt_config || {};

		/**
   * Whether the element was rendered.
   * @type {boolean}
   */
		_this.wasRendered = false;

		/**
   * The component's element will be appended to the element this variable is
   * set to, unless the user specifies another parent when calling `render` or
   * `attach`.
   * @type {!Element}
   */
		_this.DEFAULT_ELEMENT_PARENT = typeof document !== 'undefined' ? document.body : null;

		_this.setShouldUseFacade(true);
		_this.element = _this.initialConfig_.element;

		_this.setUpRenderer_();
		_this.setUpDataManager_();
		_this.setUpSyncUpdates_();

		_this.on('stateWillChange', _this.handleStateWillChange_);
		_this.on('stateChanged', _this.handleComponentStateChanged_);
		_this.on('eventsChanged', _this.onEventsChanged_);
		_this.addListenersFromObj_(_this.dataManager_.get(_this, 'events'));

		_this.created();
		_this.componentCreated_ = true;
		if (opt_parentElement !== false) {
			_this.renderComponent(opt_parentElement);
		}
		return _this;
	}

	/**
  * Getter logic for the element property.
  * @return {Element}
  */


	_createClass(Component, [{
		key: 'addListenersFromObj_',


		/**
   * Adds the listeners specified in the given object.
   * @param {!Object} obj
   * @protected
   */
		value: function addListenersFromObj_(obj) {
			var _eventsStateKeyHandle;

			if (!this.eventsStateKeyHandler_) {
				this.eventsStateKeyHandler_ = new _metalEvents.EventHandler();
			}
			var handles = (0, _events.addListenersFromObj)(this, obj);
			(_eventsStateKeyHandle = this.eventsStateKeyHandler_).add.apply(_eventsStateKeyHandle, _toConsumableArray(handles));
		}

		/**
   * Invokes the attached Lifecycle. When attached, the component element is
   * appended to the DOM and any other action to be performed must be
   * implemented in this method, such as, binding DOM events. A component can
   * be re-attached multiple times.
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM.
   * @protected
   * @chainable
   */

	}, {
		key: 'attach',
		value: function attach(opt_parentElement, opt_siblingElement) {
			if (!this.inDocument) {
				this.emit('willAttach');
				this.willAttach();
				this.attachElement(opt_parentElement, opt_siblingElement);
				this.inDocument = true;
				this.attachData_ = {
					parent: opt_parentElement,
					sibling: opt_siblingElement
				};
				this.emit('attached', this.attachData_);
				this.attached();
			}
			return this;
		}

		/**
   * Lifecycle. When attached, the component element is appended to the DOM
   * and any other action to be performed must be implemented in this method,
   * such as, binding DOM events. A component can be re-attached multiple
   * times, therefore the undo behavior for any action performed in this phase
   * must be implemented on the detach phase.
   */

	}, {
		key: 'attached',
		value: function attached() {}

		/**
   * Attaches the component element into the DOM.
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM, e.g.
   *     `component.attach(null, existingElement)`.
   */

	}, {
		key: 'attachElement',
		value: function attachElement(opt_parentElement, opt_siblingElement) {
			var element = this.element;
			if (element && (opt_siblingElement || !element.parentNode)) {
				var parent = (0, _metalDom.toElement)(opt_parentElement) || this.DEFAULT_ELEMENT_PARENT;
				parent.insertBefore(element, (0, _metalDom.toElement)(opt_siblingElement));
			}
		}

		/**
   * Lifecycle. This is called when the component has just been created, before
   * it's rendered.
   */

	}, {
		key: 'created',
		value: function created() {}

		/**
   * Listens to a delegate event on the component's element.
   * @param {string} eventName The name of the event to listen to.
   * @param {string} selector The selector that matches the child elements that
   *   the event should be triggered for.
   * @param {!function(!Object)} callback Function to be called when the event is
   *   triggered. It will receive the normalized event object.
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'delegate',
		value: function delegate(eventName, selector, callback) {
			return this.on('delegate:' + eventName + ':' + selector, callback);
		}

		/**
   * Invokes the detached Lifecycle. When detached, the component element is
   * removed from the DOM and any other action to be performed must be
   * implemented in this method, such as, unbinding DOM events. A component
   * can be detached multiple times.
   * @chainable
   */

	}, {
		key: 'detach',
		value: function detach() {
			if (this.inDocument) {
				this.emit('willDetach');
				this.willDetach();
				if (this.element && this.element.parentNode) {
					this.element.parentNode.removeChild(this.element);
				}
				this.inDocument = false;
				this.detached();
			}
			this.emit('detached');
			return this;
		}

		/**
   * Lifecycle. When detached, the component element is removed from the DOM
   * and any other action to be performed must be implemented in this method,
   * such as, unbinding DOM events. A component can be detached multiple
   * times, therefore the undo behavior for any action performed in this phase
   * must be implemented on the attach phase.
   */

	}, {
		key: 'detached',
		value: function detached() {}

		/**
   * Lifecycle. Called when the component is disposed. Should be overridden by
   * sub classes to dispose of any internal data or events.
   */

	}, {
		key: 'disposed',
		value: function disposed() {}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.detach();
			this.disposed();

			this.elementEventProxy_.dispose();
			this.elementEventProxy_ = null;

			this.dataManager_.dispose(this);
			this.dataManager_ = null;

			this.renderer_.dispose(this);
			this.renderer_ = null;

			_get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'disposeInternal', this).call(this);
		}

		/**
   * Forces an update that ignores the `shouldUpdate` lifecycle method for
   * components whose render depends on external variables.
   */

	}, {
		key: 'forceUpdate',
		value: function forceUpdate(opt_callback) {
			this.forceUpdateCallback_ = opt_callback;

			this.updateRenderer_({
				forceUpdate: true
			});
		}

		/**
   * Gets data about where this component was attached at.
   * @return {!Object}
   */

	}, {
		key: 'getAttachData',
		value: function getAttachData() {
			return this.attachData_;
		}

		/**
   * Gets the `ComponentDataManager` being used.
   * @return {!ComponentDataManager}
   */

	}, {
		key: 'getDataManager',
		value: function getDataManager() {
			return this.dataManager_;
		}

		/**
   * Gets the configuration object that was passed to this component's constructor.
   * @return {!Object}
   */

	}, {
		key: 'getInitialConfig',
		value: function getInitialConfig() {
			return this.initialConfig_;
		}

		/**
   * Gets state data for this component.
   * @return {!Object}
   */

	}, {
		key: 'getState',
		value: function getState() {
			return this.dataManager_.getState(this);
		}

		/**
   * Gets the keys for the state data.
   * @return {!Array<string>}
   */

	}, {
		key: 'getStateKeys',
		value: function getStateKeys() {
			return this.dataManager_.getStateKeys(this);
		}

		/**
   * Gets the `ComponentRenderer` instance being used.
   * @return {!ComponentRenderer}
   */

	}, {
		key: 'getRenderer',
		value: function getRenderer() {
			return this.renderer_;
		}

		/**
   * Handles a change in the component's element.
   * @param {Element} prevVal
   * @param {Element} newVal
   * @protected
   */

	}, {
		key: 'handleComponentElementChanged_',
		value: function handleComponentElementChanged_(prevVal, newVal) {
			this.elementEventProxy_.setOriginEmitter(newVal);
			if (this.componentCreated_) {
				this.emit('elementChanged', {
					prevVal: prevVal,
					newVal: newVal
				});
				if (newVal && this.wasRendered) {
					this.syncVisible(this.dataManager_.get(this, 'visible'));
				}
			}
		}

		/**
   * Handles state batch changes. Calls any existing `sync` functions that
   * match the changed state keys.
   * @param {Event} event
   * @protected
   */

	}, {
		key: 'handleComponentStateChanged_',
		value: function handleComponentStateChanged_(event) {
			if (!this.hasSyncUpdates()) {
				this.updateRenderer_(event);
			}
			(0, _sync.syncState)(this, event.changes);
			this.emit('stateSynced', event);
		}

		/**
   * Handles a `stateKeyChanged` event. This is only called for components that
   * have requested updates to happen synchronously.
   * @param {!{key: string, newVal: *, prevVal: *}} data
   * @protected
   */

	}, {
		key: 'handleComponentStateKeyChanged_',
		value: function handleComponentStateKeyChanged_(data) {
			this.updateRenderer_({
				changes: _defineProperty({}, data.key, data)
			});
		}

		/**
   * Fires before state batch changes. Provides hook point for modifying
   *     state.
   * @param {Event} event
   * @protected
   */

	}, {
		key: 'handleStateWillChange_',
		value: function handleStateWillChange_(event) {
			this.willReceiveState(event.changes);
		}

		/**
   * Checks if this component has sync updates enabled.
   * @return {boolean}
   */

	}, {
		key: 'hasSyncUpdates',
		value: function hasSyncUpdates() {
			return this.syncUpdates_;
		}

		/**
   * Informs that the component that the rendered has finished rendering it. The
   * renderer is the one responsible for calling this when appropriate. This
   * will emit events and run the appropriate lifecycle for the first render.
   */

	}, {
		key: 'informRendered',
		value: function informRendered() {
			var firstRender = !this.hasRendererRendered_;
			this.hasRendererRendered_ = true;

			if (this.forceUpdateCallback_) {
				this.forceUpdateCallback_();
				this.forceUpdateCallback_ = null;
			}

			this.rendered(firstRender);
			this.emit('rendered', firstRender);
		}

		/**
   * Informs the component that the renderer is about to update. Calls the
   * component's `willUpdate` lifecycle method.
   * @param {Object} changes
   */

	}, {
		key: 'informWillUpdate',
		value: function informWillUpdate() {
			this.willUpdate.apply(this, arguments);
		}

		/**
   * Checks if the given function is a component constructor.
   * @param {!function()} fn Any function
   * @return {boolean}
   */

	}, {
		key: 'mergeElementClasses_',

	/**
  * Handles a template call, calling the current interception function if one
  * is set, or otherwise just calling the original function instead.
  * @param {!function()} originalFn The original template function that was
  *     intercepted.
  * @param {Object=} data Template data object.
  * @param {*=} ignored
  * @param {Object=} ijData Template injected data object.
  * @return {*} The return value of the function that is called to handle this
  *     interception.
  */
	handleTemplateCall_: function handleTemplateCall_(originalFn, data, ignored, ijData) {
		var interceptFn = SoyAop.interceptFns_[SoyAop.interceptFns_.length - 1]; // eslint-disable-line
		if (interceptFn) {
			return interceptFn.call(null, originalFn, data, ignored, ijData);
		} else {
			return originalFn.call(null, data, ignored, ijData);
		/**
   * Merges two values for the ELEMENT_CLASSES property into a single one.
   * @param {string} class1
   * @param {string} class2
   * @return {string} The merged value.
   * @protected
   */
		value: function mergeElementClasses_(class1, class2) {
			return class1 ? class1 + ' ' + (class2 || '') : class2;
		}

		/**
   * Fired when the `events` state value is changed.
   * @param {!Object} event
   * @protected
   */

	}, {
		key: 'onEventsChanged_',
		value: function onEventsChanged_(event) {
			this.eventsStateKeyHandler_.removeAllListeners();
			this.addListenersFromObj_(event.newVal);
		}

		/**
   * Creates and renders a component for the given constructor function. This
   * will always make sure that the constructor runs without rendering the
   * component, having the `render` step happen only after it has finished.
   * @param {!function()} Ctor The component's constructor function.
   * @param {Object|Element=} opt_configOrElement Optional config data or parent
   *     for the component.
   * @param {Element=} opt_element Optional parent for the component.
   * @return {!Component} The rendered component's instance.
   */

	}, {
		key: 'renderComponent',


		/**
   * Renders the component into the DOM via its `ComponentRenderer`. Stores the
   * given parent element to be used when the renderer is done (`informRendered`).
   * @param {(string|Element|boolean)=} opt_parentElement Optional parent element
   *     to render the component. If set to `false`, the element won't be
   *     attached to any element after rendering. In this case, `attach` should
   *     be called manually later to actually attach it to the dom.
   */
		value: function renderComponent(opt_parentElement) {
			if (!this.hasRendererRendered_) {
				if (!(0, _metal.isServerSide)() && window.__METAL_DEV_TOOLS_HOOK__) {
					window.__METAL_DEV_TOOLS_HOOK__(this);
				}
				this.getRenderer().render(this);
			}
			this.emit('render');
			(0, _sync.syncState)(this);
			this.attach(opt_parentElement);
			this.wasRendered = true;
		}

		/**
   * Setter logic for the element property.
   * @param {?string|Element} val
   */

	}, {
		key: 'setState',


		/**
   * Sets the value of all the specified state keys.
   * @param {!Object.<string,*>} values A map of state keys to the values they
   *   should be set to.
   * @param {function()=} opt_callback An optional function that will be run
   *   after the next batched update is triggered.
   */
		value: function setState(state, opt_callback) {
			this.dataManager_.setState(this, state, opt_callback);
		}

		/**
   * Setter for the `elementClasses` data property. Appends given value with
   * the one specified in `ELEMENT_CLASSES`.
   * @param {string} val
   * @return {string}
   * @protected
   */

	}, {
		key: 'setterElementClassesFn_',
		value: function setterElementClassesFn_(val) {
			var elementClasses = (0, _metal.getStaticProperty)(this.constructor, 'ELEMENT_CLASSES', this.mergeElementClasses_);
			if (elementClasses) {
				val += ' ' + elementClasses;
			}
			return val.trim();
		}

		/**
   * Sets up the component's data manager.
   * @protected
   */

	}, {
		key: 'setUpDataManager_',
		value: function setUpDataManager_() {
			this.dataManager_ = (0, _metal.getStaticProperty)(this.constructor, 'DATA_MANAGER');
			this.dataManager_.setUp(this, _metal.object.mixin({}, this.renderer_.getExtraDataConfig(this), Component.DATA));
		}

		/**
   * Sets up the component's renderer.
   * @protected
   */

	}, {
		key: 'setUpRenderer_',
		value: function setUpRenderer_() {
			this.renderer_ = (0, _metal.getStaticProperty)(this.constructor, 'RENDERER');
			this.renderer_.setUp(this);
		}

		/**
   * Sets up the component to use sync updates when `SYNC_UPDATES` is `true`.
   * @protected
   */

	}, {
		key: 'setUpSyncUpdates_',
		value: function setUpSyncUpdates_() {
			this.syncUpdates_ = (0, _metal.getStaticProperty)(this.constructor, 'SYNC_UPDATES');
			if (this.hasSyncUpdates()) {
				this.on('stateKeyChanged', this.handleComponentStateKeyChanged_.bind(this));
			}
		}

		/**
   * Skips renderer updates until `stopSkipUpdates` is called.
   */

	}, {
		key: 'startSkipUpdates',
		value: function startSkipUpdates() {
			this.skipUpdates_ = true;
		}

		/**
   * Stops skipping renderer updates.
   */

	}, {
		key: 'stopSkipUpdates',
		value: function stopSkipUpdates() {
			this.skipUpdates_ = false;
		}

		/**
   * State synchronization logic for `visible` state key.
   * Updates the element's display value according to its visibility.
   * @param {boolean} newVal
   */

	}, {
		key: 'syncVisible',
		value: function syncVisible(newVal) {
			if (this.element) {
				this.element.style.display = newVal ? '' : 'none';
			}
		}

		/**
   * Lifecycle. Called whenever the component has just been rendered.
   * @param {boolean} firstRender Flag indicating if this was the component's
   *     first render.
   */

	}, {
		key: 'rendered',
		value: function rendered() {}

		/**
   * Calls "update" on the renderer, passing it the changed data.
   * @param {!{changes: !Object}} data
   * @protected
   */

	}, {
		key: 'updateRenderer_',
		value: function updateRenderer_(data) {
			if (!data.forceUpdate) {
				this.forceUpdateCallback_ = null;
			}

			if (!this.skipUpdates_ && this.hasRendererRendered_) {
				this.getRenderer().update(this, data);
			}
		}

		/**
   * Validator logic for the `events` state key.
   * @param {Object} val
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'validatorEventsFn_',
		value: function validatorEventsFn_(val) {
			return !(0, _metal.isDefAndNotNull)(val) || (0, _metal.isObject)(val);
		}

		/**
   * Lifecycle. Fires before the component has been attached to the DOM.
   */

	}, {
		key: 'willAttach',
		value: function willAttach() {}

		/**
   * Lifecycle. Fires before component is detached from the DOM.
   */

	}, {
		key: 'willDetach',
		value: function willDetach() {}

		/**
   * Lifecycle. Called when the component is about to receive state changes.
   * Provides a hook point for modifying state that can be used in the next
   * rerender.
   * @param {Object} changes Changes made to this.state
   */

	}, {
		key: 'willReceiveState',
		value: function willReceiveState() {}

		/**
   * Lifecycle. Called when the component's renderer is about to update.
   * @param {Object} changes
   */

	}, {
		key: 'willUpdate',
		value: function willUpdate() {}
	}, {
		key: 'element',
		get: function get() {
			return this.elementValue_;
		},
		set: function set(val) {
			if (!(0, _metal.isElement)(val) && !(0, _metal.isString)(val) && (0, _metal.isDefAndNotNull)(val)) {
				return;
			}

			if (val) {
				val = (0, _metalDom.toElement)(val) || this.elementValue_;
			}

			if (this.elementValue_ !== val) {
				var prev = this.elementValue_;
				this.elementValue_ = val;
				this.handleComponentElementChanged_(prev, val);
			}
		}
	}], [{
		key: 'isComponentCtor',
		value: function isComponentCtor(fn) {
			return fn.prototype && fn.prototype[Component.COMPONENT_FLAG];
		}
	}, {
		key: 'render',
		value: function render(Ctor, opt_configOrElement, opt_element) {
			var config = opt_configOrElement;
			var element = opt_element;
			if ((0, _metal.isElement)(opt_configOrElement)) {
				config = null;
				element = opt_configOrElement;
			}
			var instance = new Ctor(config, false);
			instance.renderComponent(element);
			return instance;
		}

		/**
   * Creates and renders a component for the given constructor function as
   * string. This will always make sure that the constructor runs without
   * rendering the component, having the `render` step happen only after it
   * has finished.
   * @param {!function()} Ctor The component's constructor function.
   * @param {Object|Element=} opt_configOrElement Optional config data or
   *     parent for the component.
   * @return {!String} The rendered component's content as string.
   */

	}, {
		key: 'renderToString',
		value: function renderToString(Ctor, opt_config) {
			var rendererName = Ctor.RENDERER && Ctor.RENDERER.RENDERER_NAME;
			switch (rendererName) {
				case 'jsx':
				case 'soy':
				case 'incremental-dom':
					{
						if (typeof IncrementalDOM === 'undefined') {
							throw new Error('Error. Trying to render incremental dom ' + 'based component to string requires IncrementalDOM ' + 'implementation to be loaded.');
						}
						// Incremental dom patches for components or nested components are
						// isolated inside the component element. The following code intercepts
						// incremental dom patches and collect results into temporary stack in
						// order to successfully collect the final string of the outermost
						// component after all nested components stack rendered.
						var interceptedComponentStrings = [];
						var patch = IncrementalDOM.patch;
						var patchInterceptor = function patchInterceptor() {
							var currentElement = patch.apply(null, arguments);
							interceptedComponentStrings.push(currentElement.innerHTML);
							IncrementalDOM.patch = patch;
						};
						IncrementalDOM.patch = patchInterceptor;
						Component.render(Ctor, opt_config).dispose();
						return interceptedComponentStrings[0];
					}
				default:
					throw new Error('Error. Trying to render non incremental dom ' + 'based component to string.');
			}
		}
	}]);

	return Component;
}(_metalEvents.EventEmitter);

/**
 * Component data definition.
 * @type {Object}
 * @static
 */


Component.DATA = {
	/**
  * Objects describing children elements that were passed to be rendered inside
  * this component.
  * @type {!Array<!Object>}
  */
	children: {
		validator: Array.isArray,
		value: []
	},

	/**
  * CSS classes to be applied to the element.
  * @type {string}
  */
	elementClasses: {
		setter: 'setterElementClassesFn_',
		validator: _metal.isString,
		value: ''
	},

	/**
  * Listeners that should be attached to this component. Should be provided as
  * an object, where the keys are event names and the values are the listener
  * functions (or function names).
  * @type {Object<string, (function()|string|{selector: string, fn: function()|string})>}
  */
	events: {
		validator: 'validatorEventsFn_',
		value: null
	},

	/**
  * Indicates if the component is visible or not.
  * @type {boolean}
  */
	visible: {
		validator: _metal.isBoolean,
		value: true
	}
};

/**
 * Name of the flag used to identify component constructors via their prototype.
 * @type {string}
 */
Component.COMPONENT_FLAG = '__metal_component__';

/**
 * The `ComponentDataManager` class that should be used. This class will be
 * responsible for handling the component's data. Each component may have its
 * own implementation.
 * @type {!ComponentDataManager}
 */
Component.DATA_MANAGER = _ComponentDataManager2.default;

/**
 * CSS classes to be applied to the element.
 * @type {string}
 */
Component.ELEMENT_CLASSES = '';

/**
 * The `ComponentRenderer` that should be used. Components need to set this
 * to a subclass of `ComponentRenderer` that has the rendering logic, like
 * `SoyRenderer`.
 * @type {!ComponentRenderer}
 */
Component.RENDERER = _ComponentRenderer2.default;

/**
 * Flag indicating if component updates will happen synchronously. Updates are
 * done asynchronously by default, which allows changes to be batched and
 * applied together.
 * @type {boolean}
 */
Component.SYNC_UPDATES = false;

/**
 * Sets a prototype flag to easily determine if a given constructor is for
 * a component or not.
 */
Component.prototype[Component.COMPONENT_FLAG] = true;

var proxyBlackList_ = {
	eventsChanged: true,
	stateChanged: true,
	stateKeyChanged: true
};

exports.default = Component;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.syncState = syncState;

var _metal = __webpack_require__(0);

var SYNC_FNS_KEY = '__METAL_SYNC_FNS__';

/**
 * Gets the `sync` methods for this component's state. Caches the results in
 * the component's constructor whenever possible, so that this doesn't need to
 * be calculated again. It's not possible to cache the results when at least
 * one sync method is defined in the instance itself instead of in its
 * prototype, as it may be bound to the instance (not reusable by others).
 * @param {!Component} component
 * @return {!Object}
 * @private
 */
function getSyncFns_(component) {
	var ctor = component.constructor;
	if (ctor.hasOwnProperty(SYNC_FNS_KEY)) {
		return ctor[SYNC_FNS_KEY];
	}

	var fns = {};
	var keys = component.getDataManager().getSyncKeys(component);
	var canCache = true;
	for (var i = 0; i < keys.length; i++) {
		var name = 'sync' + keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
		var fn = component[name];
		if (fn) {
			fns[keys[i]] = fn;
			canCache = canCache && component.constructor.prototype[name];
		}
	}

	if (canCache) {
		ctor[SYNC_FNS_KEY] = fns;
	}
	return fns;
}

/**
 * Calls "sync" functions for the given component's state.
 * @param {!Component} component
 * @param {Object=} opt_changes When given, only the properties inside it will
 *     be synced. Otherwise all state properties will be synced.
 */
function syncState(component, opt_changes) {
	var syncFns = getSyncFns_(component);
	var keys = Object.keys(opt_changes || syncFns);
	for (var i = 0; i < keys.length; i++) {
		var fn = syncFns[keys[i]];
		if ((0, _metal.isFunction)(fn)) {
			var change = opt_changes && opt_changes[keys[i]];
			var manager = component.getDataManager();
			fn.call(component, change ? change.newVal : manager.get(component, keys[i]), change ? change.prevVal : undefined);
		}
	}
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The component registry is used to register components, so they can
 * be accessible by name.
 * @type {Object}
 */
var ComponentRegistry = function () {
	function ComponentRegistry() {
		_classCallCheck(this, ComponentRegistry);
	}

	_createClass(ComponentRegistry, null, [{
		key: 'getConstructor',

		/**
   * Gets the constructor function for the given component name, or
   * undefined if it hasn't been registered yet.
   * @param {string} name The component's name.
   * @return {?function()}
   * @static
   */
		value: function getConstructor(name) {
			var constructorFn = ComponentRegistry.components_[name];
			if (!constructorFn) {
				console.error('There\'s no constructor registered for the component named ' + name + '.\n\t\t\t\tComponents need to be registered via ComponentRegistry.register.');
			}
			return constructorFn;
		}

		/**
   * Registers a component, so it can be found by its name.
   * @param {!Function} constructorFn The component's constructor function.
   * @param {string=} opt_name Name of the registered component. If none is given
   *   the name defined by the NAME static variable will be used instead. If that
   *   isn't set as well, the name of the constructor function will be used.
   * @static
   */

	}, {
		key: 'register',
		value: function register(constructorFn, opt_name) {
			var name = opt_name;
			if (!name) {
				if (constructorFn.hasOwnProperty('NAME')) {
					name = constructorFn.NAME;
				} else {
					name = (0, _metal.getFunctionName)(constructorFn);
				}
			}
			constructorFn.NAME = name;
			ComponentRegistry.components_[name] = constructorFn;
		}
	}]);

	return ComponentRegistry;
}();

/**
 * Holds all registered components, indexed by their names.
 * @type {!Object<string, function()>}
 * @protected
 * @static
 */


ComponentRegistry.components_ = {};

exports.default = ComponentRegistry;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.disposeUnused = disposeUnused;
exports.schedule = schedule;

var _data = __webpack_require__(4);

var comps_ = [];
var disposing_ = false;

/**
 * Disposes all sub components that were not rerendered since the last
 * time this function was scheduled.
 */
function disposeUnused() {
	if (disposing_) {
		return;
	}
	disposing_ = true;

	for (var i = 0; i < comps_.length; i++) {
		var comp = comps_[i];
		if (!comp.isDisposed() && !(0, _data.getData)(comp).parent) {
			// Don't let disposing cause the element to be removed, since it may
			// be currently being reused by another component.
			comp.element = null;
			comp.dispose();
		}
	}
	comps_ = [];
	disposing_ = false;
}

/**
 * Schedules the given components to be checked and disposed if not used
 * anymore when `disposeUnused` is called.
 * @param {!Array<!Component>} comps
 */
function schedule(comps) {
	for (var i = 0; i < comps.length; i++) {
		if (!comps[i].isDisposed()) {
			(0, _data.getData)(comps[i]).parent = null;
			comps_.push(comps[i]);
		}
	}
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _metalComponent = __webpack_require__(5);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXDataManager = function (_ComponentDataManager) {
	_inherits(JSXDataManager, _ComponentDataManager);

	function JSXDataManager() {
		_classCallCheck(this, JSXDataManager);

		return _possibleConstructorReturn(this, (JSXDataManager.__proto__ || Object.getPrototypeOf(JSXDataManager)).apply(this, arguments));
	}

	_createClass(JSXDataManager, [{
		key: 'addUnconfiguredProps_',

		/**
   * Manually adds props that weren't configured via `PROPS`.
   * @param {!Component} component
   * @param {!State} props
   * @param {!Object} data
   * @protected
   */
		value: function addUnconfiguredProps_(component, props, data) {
			var keys = Object.keys(data);
			for (var i = 0; i < keys.length; i++) {
				if (!props.hasStateKey(keys[i])) {
					component.props[keys[i]] = data[keys[i]];
				}
			}
		}

		/**
   * Overrides the original method so that we can have two separate `State`
   * instances: one responsible for `state` and another for `props`.
   * @param {!Component} comp
   * @param {!Object} config
   * @protected
   * @override
   */

	}, {
		key: 'createState_',
		value: function createState_(comp, config) {
			var ctor = comp.constructor;
			comp.props = {};
			comp.state = {};
			var data = this.getManagerData(comp);

			data.props_ = new _metalState2.default(comp.getInitialConfig(), comp.props, comp);
			data.props_.configState(_metal.object.mixin({}, config, (0, _metal.getStaticProperty)(ctor, 'PROPS', _metalState2.default.mergeState)));
			this.addUnconfiguredProps_(comp, data.props_, comp.getInitialConfig());

			data.state_ = new _metalState2.default({}, comp.state, comp);
			data.state_.setEventData({
				type: 'state'
			});
			data.state_.configState(_metalState2.default.getStateStatic(ctor));
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'dispose',
		value: function dispose(component) {
			var data = this.getManagerData(component);
			data.props_.dispose();
			_metalComponent.ComponentDataManager.dispose.call(this, component);
		}

		/**
   * Overrides the original method so we can get properties from `props` by
   * default.
   * @param {!Component} component
   * @param {string} name
   * @return {*}
   * @override
   */

	}, {
		key: 'get',
		value: function get(component, name) {
			return this.getManagerData(component).props_.get(name);
		}

		/**
   * Gets the `State` instance being used for "props".
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getPropsInstance',
		value: function getPropsInstance(component) {
			return this.getManagerData(component).props_;
		}

		/**
   * Overrides the original method so we can enable "sync" methods just for
   * `props`.
   * @param {!Component} component
   * @return {!Array<string>}
   * @override
   */

	}, {
		key: 'getSyncKeys',
		value: function getSyncKeys(component) {
			return this.getManagerData(component).props_.getStateKeys();
		}

		/**
   * Overrides the original method so we can replace values in `props`.
   * @param {!Component} component
   * @param {!Object} data
   * @override
   */

	}, {
		key: 'replaceNonInternal',
		value: function replaceNonInternal(component, data) {
			var prevProps = void 0;
			if (component.propsChanged) {
				prevProps = _metal.object.mixin({}, component.props);
			}

			var props = this.getManagerData(component).props_;
			_metalComponent.ComponentDataManager.replaceNonInternal.call(this, component, data, props);
			this.addUnconfiguredProps_(component, props, data);
			if (component.propsChanged) {
				component.propsChanged(prevProps);
			}
		}
	}]);

	return JSXDataManager;
}(_metalComponent.ComponentDataManager.constructor);

exports.default = new JSXDataManager();

/***/ }),
/* 64 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Card.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Card.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900);", ""]);

// module
exports.push([module.i, "/*!\n * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #868e96;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #868e96;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput:not([type=\"range\"]),\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 5px; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96; }\n  .blockquote-footer::before {\n    content: \"\\2014   \\A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #868e96; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f8f9fa;\n  border-radius: 0.25rem; }\n  a > code {\n    padding: 0;\n    color: inherit;\n    background-color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\n\npre {\n  display: block;\n  font-size: 90%;\n  color: #212529; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #e9ecef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #e9ecef; }\n  .table tbody + tbody {\n    border-top: 2px solid #e9ecef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #e9ecef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #e9ecef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2; }\n\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #e9ecef; }\n\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm.table-bordered {\n      border: 0; } }\n\n@media (max-width: 767px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md.table-bordered {\n      border: 0; } }\n\n@media (max-width: 991px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg.table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl.table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n  .table-responsive.table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: none;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .form-control::placeholder {\n    color: #868e96;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px); }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.col-form-legend {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  font-size: 1rem; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .form-control-plaintext.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .form-control-plaintext.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.5rem; }\n  .form-check.disabled .form-check-label {\n    color: #868e96; }\n\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.25rem;\n  margin-left: -1.25rem; }\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-label {\n    vertical-align: middle; }\n\n.valid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #28a745; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745; }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:valid + .form-check-label, .form-check-input.is-valid + .form-check-label {\n  color: #28a745; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-indicator, .custom-control-input.is-valid ~ .custom-control-indicator {\n  background-color: rgba(40, 167, 69, 0.4); }\n\n.was-validated .custom-control-input:valid ~ .custom-control-description, .custom-control-input.is-valid ~ .custom-control-description {\n  color: #28a745; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-indicator, .custom-control-input.is-valid:focus ~ .custom-control-indicator {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-file-input:valid ~ .custom-file-control, .custom-file-input.is-valid ~ .custom-file-control {\n  border-color: #28a745; }\n  .was-validated .custom-file-input:valid ~ .custom-file-control::before, .custom-file-input.is-valid ~ .custom-file-control::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-control, .custom-file-input.is-valid:focus ~ .custom-file-control {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545; }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:invalid + .form-check-label, .form-check-input.is-invalid + .form-check-label {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-indicator, .custom-control-input.is-invalid ~ .custom-control-indicator {\n  background-color: rgba(220, 53, 69, 0.4); }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-description, .custom-control-input.is-invalid ~ .custom-control-description {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-indicator, .custom-control-input.is-invalid:focus ~ .custom-control-indicator {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-control, .custom-file-input.is-invalid ~ .custom-file-control {\n  border-color: #dc3545; }\n  .was-validated .custom-file-input:invalid ~ .custom-file-control::before, .custom-file-input.is-invalid ~ .custom-file-control::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-control, .custom-file-input.is-invalid:focus ~ .custom-file-control {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      margin-top: 0;\n      margin-bottom: 0; }\n    .form-inline .form-check-label {\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding-left: 0; }\n    .form-inline .custom-control-indicator {\n      position: static;\n      display: inline-block;\n      margin-right: 0.25rem;\n      vertical-align: text-bottom; }\n    .form-inline .has-feedback .form-control-feedback {\n      top: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: .65; }\n  .btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\n    background-image: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n  .btn-primary:focus, .btn-primary.focus, .form-file-input:focus + .btn-primary {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #727b84;\n    border-color: #6c757d; }\n  .btn-secondary:focus, .btn-secondary.focus, .form-file-input:focus + .btn-secondary {\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #868e96;\n    border-color: #868e96; }\n  .btn-secondary:not([disabled]):not(.disabled):active, .btn-secondary:not([disabled]):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #666e76;\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n  .btn-success:focus, .btn-success.focus, .form-file-input:focus + .btn-success {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-success:not([disabled]):not(.disabled):active, .btn-success:not([disabled]):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-info:not([disabled]):not(.disabled):active, .btn-info:not([disabled]):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f;\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-warning {\n  color: #111;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n  .btn-warning:hover {\n    color: #111;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n  .btn-warning:focus, .btn-warning.focus, .form-file-input:focus + .btn-warning {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-warning:not([disabled]):not(.disabled):active, .btn-warning:not([disabled]):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #111;\n    background-color: #d39e00;\n    border-color: #c69500;\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n  .btn-danger:focus, .btn-danger.focus, .form-file-input:focus + .btn-danger {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-danger:not([disabled]):not(.disabled):active, .btn-danger:not([disabled]):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-light {\n  color: #111;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #111;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n  .btn-light:focus, .btn-light.focus, .form-file-input:focus + .btn-light {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-light:not([disabled]):not(.disabled):active, .btn-light:not([disabled]):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #111;\n    background-color: #dae0e5;\n    border-color: #d3d9df;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n  .btn-dark:focus, .btn-dark.focus, .form-file-input:focus + .btn-dark {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-dark:not([disabled]):not(.disabled):active, .btn-dark:not([disabled]):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n  .btn-outline-primary:not([disabled]):not(.disabled):active, .btn-outline-primary:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #868e96;\n    background-color: transparent; }\n  .btn-outline-secondary:not([disabled]):not(.disabled):active, .btn-outline-secondary:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96;\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n  .btn-outline-success:not([disabled]):not(.disabled):active, .btn-outline-success:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n  .btn-outline-info:not([disabled]):not(.disabled):active, .btn-outline-info:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n  .btn-outline-warning:hover {\n    color: #fff;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n  .btn-outline-warning:not([disabled]):not(.disabled):active, .btn-outline-warning:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n  .btn-outline-danger:not([disabled]):not(.disabled):active, .btn-outline-danger:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n  .btn-outline-light:not([disabled]):not(.disabled):active, .btn-outline-light:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n  .btn-outline-dark:not([disabled]):not(.disabled):active, .btn-outline-dark:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent; }\n  .btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-link:focus, .btn-link.focus {\n    border-color: transparent;\n    box-shadow: none; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #868e96; }\n\n.btn-lg, .btn-group-lg > .btn, .btn-group-lg .btn-group > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn, .btn-group-sm .btn-group > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n  .btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear; }\n  .fade.show {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.show {\n    display: block; }\n\ntr.collapse.show {\n  display: table-row; }\n\ntbody.collapse.show {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #868e96;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 0 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n  .btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn + .dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .btn + .dropdown-toggle-split::after {\n    margin-left: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split, .btn-group-sm .btn-group > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split, .btn-group-lg .btn-group > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n  .btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n  .btn-group-vertical > .btn:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0; }\n  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn,\n[data-toggle=\"buttons\"] > .btn-group > .btn {\n  margin-bottom: 0; }\n  [data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n  [data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n  [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n  [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  width: 100%; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 1;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 2; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control,\n.input-group .custom-select,\n.input-group .custom-file {\n  display: flex;\n  align-items: center; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child),\n  .input-group .custom-select:not(:first-child):not(:last-child),\n  .input-group .custom-file:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group .custom-file {\n  display: flex;\n  align-items: center; }\n\n.input-group .custom-select,\n.input-group .custom-file {\n  width: 100%; }\n\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:not(:last-child),\n.input-group .custom-select:not(:last-child),\n.input-group .custom-file:not(:last-child) .custom-file-control::before,\n.input-group-addon:not(:last-child),\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group > .btn,\n.input-group-btn:not(:last-child) > .dropdown-toggle,\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group-addon:not(:last-child) {\n  border-right: 0; }\n\n.input-group .form-control:not(:first-child),\n.input-group .custom-select:not(:first-child),\n.input-group .custom-file:not(:first-child) .custom-file-control,\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-control + .input-group-addon:not(:first-child),\n.custom-select + .input-group-addon:not(:first-child),\n.custom-file + .input-group-addon:not(:first-child) {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  align-items: stretch;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn + .btn {\n    margin-left: 0; }\n  .input-group-btn:not(:last-child) > .btn,\n  .input-group-btn:not(:last-child) > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:not(:first-child) > .btn,\n  .input-group-btn:not(:first-child) > .btn-group {\n    z-index: 1;\n    margin-left: 0; }\n    .input-group-btn:not(:first-child) > .btn:first-child,\n    .input-group-btn:not(:first-child) > .btn-group:first-child {\n      margin-left: -1px; }\n    .input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n    .input-group-btn:not(:first-child) > .btn-group:focus,\n    .input-group-btn:not(:first-child) > .btn-group:active,\n    .input-group-btn:not(:first-child) > .btn-group:hover {\n      z-index: 2; }\n\n.custom-control {\n  position: relative;\n  display: inline-flex;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #007bff; }\n  .custom-control-input:focus ~ .custom-control-indicator {\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .custom-control-input:active ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #b3d7ff; }\n  .custom-control-input:disabled ~ .custom-control-indicator {\n    background-color: #e9ecef; }\n  .custom-control-input:disabled ~ .custom-control-description {\n    color: #868e96; }\n\n.custom-control-indicator {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-indicator {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #007bff;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-indicator {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-controls-stacked {\n  display: flex;\n  flex-direction: column; }\n  .custom-controls-stacked .custom-control {\n    margin-bottom: 0.25rem; }\n    .custom-controls-stacked .custom-control + .custom-control {\n      margin-left: 0; }\n\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  appearance: none; }\n  .custom-select:focus {\n    border-color: #80bdff;\n    outline: none; }\n    .custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select[multiple] {\n    height: auto;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #868e96;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-control {\n    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff; }\n\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  user-select: none;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .custom-file-control:lang(en):empty::after {\n    content: \"Choose file...\"; }\n  .custom-file-control::before {\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    z-index: 6;\n    display: block;\n    height: calc(2.25rem + 2px);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #e9ecef;\n    border: 1px solid #ced4da;\n    border-radius: 0 0.25rem 0.25rem 0; }\n  .custom-file-control:lang(en)::before {\n    content: \"Browse\"; }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #868e96; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #e9ecef #e9ecef #ddd; }\n    .nav-tabs .nav-link.disabled {\n      color: #868e96;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 767px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 991px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 1199px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n  .navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-text a {\n    color: #fff; }\n    .navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {\n      color: #fff; }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n  .card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-deck {\n  display: flex;\n  flex-direction: column; }\n  .card-deck .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-deck {\n      flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: flex;\n        flex: 1 0 0%;\n        flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group {\n  display: flex;\n  flex-direction: column; }\n  .card-group .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-group {\n      flex-flow: row wrap; }\n      .card-group .card {\n        flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group .card:first-child .card-img-top,\n          .card-group .card:first-child .card-header {\n            border-top-right-radius: 0; }\n          .card-group .card:first-child .card-img-bottom,\n          .card-group .card:first-child .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group .card:last-child .card-img-top,\n          .card-group .card:last-child .card-header {\n            border-top-left-radius: 0; }\n          .card-group .card:last-child .card-img-bottom,\n          .card-group .card:last-child .card-footer {\n            border-bottom-left-radius: 0; }\n        .card-group .card:only-child {\n          border-radius: 0.25rem; }\n          .card-group .card:only-child .card-img-top,\n          .card-group .card:only-child .card-header {\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem; }\n          .card-group .card:only-child .card-img-bottom,\n          .card-group .card:only-child .card-footer {\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem; }\n        .card-group .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n          .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n          .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n          .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n            border-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #868e96;\n  content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #868e96; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .page-link:focus, .page-link:hover {\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #ddd; }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #ddd; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n  .badge-primary[href]:focus, .badge-primary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0062cc; }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96; }\n  .badge-secondary[href]:focus, .badge-secondary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #6c757d; }\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n  .badge-success[href]:focus, .badge-success[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n  .badge-info[href]:focus, .badge-info[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b; }\n\n.badge-warning {\n  color: #111;\n  background-color: #ffc107; }\n  .badge-warning[href]:focus, .badge-warning[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #d39e00; }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n  .badge-danger[href]:focus, .badge-danger[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n\n.badge-light {\n  color: #111;\n  background-color: #f8f9fa; }\n  .badge-light[href]:focus, .badge-light[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #dae0e5; }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .badge-dark[href]:focus, .badge-dark[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 4rem; }\n  .alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n  .alert-primary hr {\n    border-top-color: #9fcdff; }\n  .alert-primary .alert-link {\n    color: #002752; }\n\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2; }\n  .alert-secondary hr {\n    border-top-color: #cfd2d6; }\n  .alert-secondary .alert-link {\n    color: #2e3133; }\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n  .alert-success hr {\n    border-top-color: #b1dfbb; }\n  .alert-success .alert-link {\n    color: #0b2e13; }\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n  .alert-info hr {\n    border-top-color: #abdde5; }\n  .alert-info .alert-link {\n    color: #062c33; }\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n  .alert-warning hr {\n    border-top-color: #ffe8a1; }\n  .alert-warning .alert-link {\n    color: #533f03; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n  .alert-danger hr {\n    border-top-color: #f1b0b7; }\n  .alert-danger .alert-link {\n    color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n  .alert-light hr {\n    border-top-color: #ececf6; }\n  .alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n  .alert-dark hr {\n    border-top-color: #b9bbbe; }\n  .alert-dark .alert-link {\n    color: #040505; }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #007bff; }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body {\n  flex: 1; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:focus, .list-group-item-action:hover {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .list-group-item:focus, .list-group-item:hover {\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #868e96;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 1;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #004085; }\n  a.list-group-item-primary:focus, a.list-group-item-primary:hover,\n  button.list-group-item-primary:focus,\n  button.list-group-item-primary:hover {\n    color: #004085;\n    background-color: #9fcdff; }\n  a.list-group-item-primary.active,\n  button.list-group-item-primary.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2; }\n\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e; }\n  a.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\n  button.list-group-item-secondary:focus,\n  button.list-group-item-secondary:hover {\n    color: #464a4e;\n    background-color: #cfd2d6; }\n  a.list-group-item-secondary.active,\n  button.list-group-item-secondary.active {\n    color: #fff;\n    background-color: #464a4e;\n    border-color: #464a4e; }\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #155724; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #155724;\n    background-color: #b1dfbb; }\n  a.list-group-item-success.active,\n  button.list-group-item-success.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #0c5460; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #0c5460;\n    background-color: #abdde5; }\n  a.list-group-item-info.active,\n  button.list-group-item-info.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856404; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #856404;\n    background-color: #ffe8a1; }\n  a.list-group-item-warning.active,\n  button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #721c24; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #721c24;\n    background-color: #f1b0b7; }\n  a.list-group-item-danger.active,\n  button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182; }\n  a.list-group-item-light:focus, a.list-group-item-light:hover,\n  button.list-group-item-light:focus,\n  button.list-group-item-light:hover {\n    color: #818182;\n    background-color: #ececf6; }\n  a.list-group-item-light.active,\n  button.list-group-item-light.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21; }\n  a.list-group-item-dark:focus, a.list-group-item-dark:hover,\n  button.list-group-item-dark:focus,\n  button.list-group-item-dark:hover {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  a.list-group-item-dark.active,\n  button.list-group-item-dark.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -25%); }\n  .modal.show .modal-dialog {\n    transform: translate(0, 0); }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n  .modal-header .close {\n    padding: 15px;\n    margin: -15px -15px -15px auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 15px; }\n\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 15px;\n  border-top: 1px solid #e9ecef; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto; }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 5px;\n    height: 5px; }\n  .tooltip .arrow::before {\n    position: absolute;\n    border-color: transparent;\n    border-style: solid; }\n  .tooltip.bs-tooltip-top, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] {\n    padding: 5px 0; }\n    .tooltip.bs-tooltip-top .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0; }\n    .tooltip.bs-tooltip-top .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.bs-tooltip-right, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] {\n    padding: 0 5px; }\n    .tooltip.bs-tooltip-right .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n      left: 0; }\n    .tooltip.bs-tooltip-right .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.bs-tooltip-bottom, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] {\n    padding: 5px 0; }\n    .tooltip.bs-tooltip-bottom .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0; }\n    .tooltip.bs-tooltip-bottom .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.bs-tooltip-left, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] {\n    padding: 0 5px; }\n    .tooltip.bs-tooltip-left .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n      right: 0; }\n    .tooltip.bs-tooltip-left .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      right: 0;\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n  .popover .arrow::before,\n  .popover .arrow::after {\n    position: absolute;\n    display: block;\n    border-color: transparent;\n    border-style: solid; }\n  .popover .arrow::before {\n    content: \"\";\n    border-width: 0.8rem; }\n  .popover .arrow::after {\n    content: \"\";\n    border-width: 0.8rem; }\n  .popover.bs-popover-top, .popover.bs-popover-auto[x-placement^=\"top\"] {\n    margin-bottom: 0.8rem; }\n    .popover.bs-popover-top .arrow, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0; }\n    .popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n    .popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      border-bottom-width: 0; }\n    .popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n      bottom: -0.8rem;\n      margin-left: -0.8rem;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      bottom: calc((0.8rem - 1px) * -1);\n      margin-left: -0.8rem;\n      border-top-color: #fff; }\n  .popover.bs-popover-right, .popover.bs-popover-auto[x-placement^=\"right\"] {\n    margin-left: 0.8rem; }\n    .popover.bs-popover-right .arrow, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow {\n      left: 0; }\n    .popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n    .popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      margin-top: -0.8rem;\n      border-left-width: 0; }\n    .popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n      left: -0.8rem;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      left: calc((0.8rem - 1px) * -1);\n      border-right-color: #fff; }\n  .popover.bs-popover-bottom, .popover.bs-popover-auto[x-placement^=\"bottom\"] {\n    margin-top: 0.8rem; }\n    .popover.bs-popover-bottom .arrow, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0; }\n    .popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n    .popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      margin-left: -0.8rem;\n      border-top-width: 0; }\n    .popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n      top: -0.8rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      top: calc((0.8rem - 1px) * -1);\n      border-bottom-color: #fff; }\n    .popover.bs-popover-bottom .popover-header::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      display: block;\n      width: 20px;\n      margin-left: -10px;\n      content: \"\";\n      border-bottom: 1px solid #f7f7f7; }\n  .popover.bs-popover-left, .popover.bs-popover-auto[x-placement^=\"left\"] {\n    margin-right: 0.8rem; }\n    .popover.bs-popover-left .arrow, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow {\n      right: 0; }\n    .popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n    .popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      margin-top: -0.8rem;\n      border-right-width: 0; }\n    .popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n      right: -0.8rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      right: calc((0.8rem - 1px) * -1);\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  align-items: center;\n  width: 100%;\n  transition: transform 0.6s ease;\n  backface-visibility: hidden;\n  perspective: 1000px; }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next,\n.active.carousel-item-right {\n  transform: translateX(100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      transform: translate3d(-100%, 0, 0); } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev:focus, .carousel-control-prev:hover,\n  .carousel-control-next:focus,\n  .carousel-control-next:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    position: relative;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #007bff !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #0062cc !important; }\n\n.bg-secondary {\n  background-color: #868e96 !important; }\n\na.bg-secondary:focus, a.bg-secondary:hover {\n  background-color: #6c757d !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:focus, a.bg-light:hover {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:focus, a.bg-dark:hover {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #e9ecef !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #007bff !important; }\n\n.border-secondary {\n  border-color: #868e96 !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n.d-print-block {\n  display: none !important; }\n  @media print {\n    .d-print-block {\n      display: block !important; } }\n\n.d-print-inline {\n  display: none !important; }\n  @media print {\n    .d-print-inline {\n      display: inline !important; } }\n\n.d-print-inline-block {\n  display: none !important; }\n  @media print {\n    .d-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  clip-path: none; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #007bff !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #0062cc !important; }\n\n.text-secondary {\n  color: #868e96 !important; }\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important; }\n\n.text-muted {\n  color: #868e96 !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.alert {\n  border-style: solid; }\n  .alert .close {\n    font-size: 0.875rem;\n    height: 2rem;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    position: absolute;\n    right: 0.5rem;\n    top: 0.75rem;\n    width: 2rem; }\n  .alert .lead {\n    margin-right: 0.3125rem; }\n\n.alert-link,\n.alert-link.btn-unstyled {\n  font-weight: 700; }\n  .alert-link:focus, .alert-link:hover,\n  .alert-link.btn-unstyled:focus,\n  .alert-link.btn-unstyled:hover {\n    text-decoration: underline; }\n\n.alert-indicator {\n  font-size: 1.25rem; }\n  .alert-indicator + .lead {\n    margin-left: 0.3125rem; }\n\n.alert-dismissible {\n  padding-right: 2.5rem; }\n\n.alert-fluid {\n  border-radius: 0;\n  border-width: 0 0 1px 0;\n  padding: 0; }\n  .alert-fluid.alert-dismissible .container,\n  .alert-fluid.alert-dismissible .container-fluid {\n    padding-right: calc(2.5rem + 15px);\n    position: relative; }\n  .alert-fluid .container,\n  .alert-fluid .container-fluid {\n    padding: 0.75rem 1.25rem; }\n  .alert-fluid .close {\n    right: calc(15px + 0.25rem); }\n\n.alert-container {\n  height: 0;\n  position: relative; }\n\n.alert-notifications .alert {\n  width: 22.5rem; }\n  .alert-notifications .alert:last-child {\n    margin-bottom: 0; }\n\n.alert-notifications-absolute {\n  height: 0;\n  position: absolute;\n  right: 0.5rem;\n  top: 4.75rem;\n  z-index: 5000; }\n\n.alert-notifications-fixed {\n  height: 0;\n  position: fixed;\n  right: 1.25rem;\n  top: 4.75rem;\n  z-index: 5000; }\n\n.aspect-ratio {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  padding-bottom: 100%; }\n\n.aspect-ratio-item {\n  position: absolute;\n  word-wrap: break-word; }\n\n.aspect-ratio-item-fluid {\n  max-width: 100%;\n  position: absolute;\n  word-wrap: break-word; }\n\n.aspect-ratio-item-vertical-fluid {\n  max-height: 100%;\n  position: absolute;\n  word-wrap: break-word; }\n\n.aspect-ratio-item-top-center {\n  position: absolute;\n  bottom: auto;\n  left: 50%;\n  right: auto;\n  top: 0;\n  transform: translateX(-50%); }\n\n.aspect-ratio-item-top-right {\n  position: absolute;\n  bottom: auto;\n  left: auto;\n  right: 0;\n  top: 0; }\n\n.aspect-ratio-item-right-middle {\n  position: absolute;\n  bottom: auto;\n  left: auto;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.aspect-ratio-item-bottom-right {\n  position: absolute;\n  bottom: 0;\n  left: auto;\n  right: 0;\n  top: auto; }\n\n.aspect-ratio-item-bottom-center {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%); }\n\n.aspect-ratio-item-bottom-left {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto; }\n\n.aspect-ratio-item-left-middle {\n  position: absolute;\n  bottom: auto;\n  left: 0;\n  right: auto;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.aspect-ratio-item-center-middle {\n  position: absolute;\n  bottom: auto;\n  left: 50%;\n  right: auto;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\n.aspect-ratio-3-to-2 {\n  padding-bottom: 66.66667%; }\n\n.aspect-ratio-4-to-3 {\n  padding-bottom: 75%; }\n\n.aspect-ratio-8-to-5 {\n  padding-bottom: 62.5%; }\n\n.aspect-ratio-16-to-9 {\n  padding-bottom: 56.25%; }\n\n.aspect-ratio-bg-cover {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.aspect-ratio-bg-center {\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.badge {\n  border-color: transparent;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 2px;\n  margin-top: 2px;\n  max-width: 100%;\n  white-space: normal;\n  word-wrap: break-word; }\n  .badge a {\n    color: #FFF;\n    text-decoration: underline; }\n    .badge a:focus, .badge a:hover {\n      text-decoration: none; }\n  .badge .close {\n    color: inherit;\n    float: none;\n    font-size: inherit;\n    margin-left: 2px;\n    opacity: 1;\n    vertical-align: middle; }\n  .badge .lexicon-icon {\n    height: 9px;\n    width: 9px; }\n\n.breadcrumb-link {\n  display: block;\n  color: #007bff; }\n  .breadcrumb-link:focus, .breadcrumb-link:hover {\n    color: #0056b3; }\n  .breadcrumb-link > .breadcrumb-text-truncate {\n    text-decoration: none; }\n    .breadcrumb-link > .breadcrumb-text-truncate:focus, .breadcrumb-link > .breadcrumb-text-truncate:hover {\n      text-decoration: underline; }\n\n.breadcrumb-item {\n  margin-right: 0.5em;\n  position: relative; }\n  .breadcrumb-item + .breadcrumb-item {\n    padding-left: 1em; }\n    .breadcrumb-item + .breadcrumb-item::before {\n      float: left;\n      background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%3E%3Cpath%20class='lexicon-icon-outline'%20d='M396.394%20255.607a28.207%2028.207%200%200%200-8.272-19.111L160.901%209.275c-11.026-11.059-28.94-11.059-39.999%200-11.058%2011.026-11.058%2028.941%200%2039.999l206.333%20206.333L120.902%20461.94c-11.058%2011.058-11.058%2028.973%200%2039.999%2011.059%2011.059%2028.972%2011.059%2039.999%200l227.221-227.221a28.196%2028.196%200%200%200%208.272-19.111z'%20fill='%23868e96'/%3E%3C/svg%3E\");\n      background-repeat: no-repeat;\n      background-size: 100%;\n      content: '';\n      display: block;\n      height: 0.75em;\n      left: 0;\n      margin-top: -0.375em;\n      padding: 0;\n      position: absolute;\n      top: 50%;\n      width: 0.75em; }\n  .breadcrumb-item .dropdown-toggle {\n    text-decoration: none; }\n    .breadcrumb-item .dropdown-toggle:focus, .breadcrumb-item .dropdown-toggle:hover {\n      text-decoration: none; }\n\n.breadcrumb-text-truncate {\n  display: inline-block;\n  max-width: 17.875rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: bottom; }\n\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  margin-bottom: 0.125rem;\n  margin-top: 0.125rem; }\n  .btn-toolbar .btn-group:not(:last-child),\n  .btn-toolbar .input-group:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.btn-group-lg .btn-monospaced {\n  padding: 0; }\n\n.btn-group-sm .btn-monospaced {\n  padding: 0; }\n\n.btn-link {\n  border-radius: 1px; }\n  .btn-link:focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n    text-decoration: none; }\n  .btn-link:hover {\n    text-decoration: underline; }\n\n.btn-unstyled, .menubar-toggler {\n  background-color: transparent;\n  border-radius: 1px;\n  border-width: 0;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: inherit;\n  max-width: 100%;\n  padding: 0;\n  text-align: left;\n  line-height: inherit;\n  vertical-align: baseline; }\n\n.btn-monospaced {\n  height: 2.375rem;\n  line-height: 2.375rem;\n  width: 2.375rem;\n  overflow: hidden;\n  padding: 0;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word; }\n  .btn-monospaced.btn-lg, .btn-group-lg > .btn-monospaced.btn, .btn-group-lg .btn-group > .btn-monospaced.btn {\n    height: 3rem;\n    line-height: 3rem;\n    width: 3rem; }\n  .btn-monospaced.btn-sm, .btn-group-sm > .btn-monospaced.btn, .btn-group-sm .btn-group > .btn-monospaced.btn {\n    height: 1.9375rem;\n    line-height: 1.9375rem;\n    width: 1.9375rem; }\n  .btn-monospaced .lexicon-icon {\n    display: block;\n    height: 100%;\n    margin: auto; }\n\n.card,\n.card-horizontal {\n  border-style: solid;\n  display: block;\n  margin-bottom: 1.25rem;\n  position: relative; }\n  .card .flex-col:first-child,\n  .card-horizontal .flex-col:first-child {\n    border-top-left-radius: calc(0.25rem - 1px);\n    border-bottom-left-radius: calc(0.25rem - 1px); }\n  .card .flex-col:last-child,\n  .card-horizontal .flex-col:last-child {\n    border-top-right-radius: calc(0.25rem - 1px);\n    border-bottom-right-radius: calc(0.25rem - 1px); }\n\n.card-section-header {\n  color: #868e96;\n  font-size: 0.75rem;\n  line-height: 2.5;\n  margin-bottom: 1.5rem;\n  padding: 0 15px;\n  text-transform: uppercase; }\n\n.card-title {\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 0.5rem; }\n\n.card-subtitle {\n  color: #868e96;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  margin-top: -0.5rem; }\n\n.card-divider {\n  background-color: rgba(0, 0, 0, 0.125);\n  height: 1px;\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.card-link {\n  color: #007bff; }\n  .card-link:focus, .card-link:hover {\n    color: #0056b3;\n    text-decoration: none; }\n  .card-link + .card-link {\n    margin-left: 0; }\n  .card-link.btn-link {\n    color: #007bff;\n    border-width: 0;\n    cursor: pointer;\n    font-size: inherit;\n    font-weight: inherit;\n    max-width: 100%;\n    padding: 0;\n    text-align: left;\n    line-height: normal; }\n    .card-link.btn-link:focus, .card-link.btn-link:hover {\n      color: #0056b3;\n      text-decoration: none; }\n\nbutton.card-link {\n  background-color: transparent;\n  border-width: 0;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: inherit;\n  max-width: 100%;\n  padding: 0;\n  text-align: left;\n  line-height: normal; }\n\n.card-row {\n  display: flex;\n  width: 100%; }\n  .card-row .flex-col {\n    justify-content: center;\n    padding-left: 0;\n    padding-right: 0; }\n  .card-row .flex-col-expand {\n    min-width: 25px; }\n\n.card-row .flex-col-gutters {\n  padding-left: 10px;\n  padding-right: 10px; }\n  .card-row .flex-col-gutters .card-divider {\n    margin-left: -10px;\n    margin-right: -10px; }\n\n.justify-content-center .flex-col {\n  justify-content: center; }\n\n.justify-content-start .flex-col {\n  justify-content: flex-start; }\n\n.justify-content-end .flex-col {\n  justify-content: flex-end; }\n\n.text-center .flex-col {\n  text-align: center; }\n\n.text-left .flex-col {\n  text-align: left; }\n\n.text-right .flex-col {\n  text-align: right; }\n\n.card-item-first {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n  width: 100%; }\n\n.flex-col:first-child .card-item-first {\n  border-radius: calc(0.25rem - 1px) 0 0 calc(0.25rem - 1px); }\n\n.card-item-last {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n  width: 100%; }\n\n.flex-col:last-child .card-item-last {\n  border-radius: 0 calc(0.25rem - 1px) calc(0.25rem - 1px) 0; }\n\n.rounded .card-header,\n.rounded .card-item-first {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.rounded .card-footer,\n.rounded .card-item-last {\n  border-bottom-left-radius: calc(0.25rem - 1px);\n  border-bottom-right-radius: calc(0.25rem - 1px); }\n\n.rounded .flex-col:first-child {\n  border-bottom-left-radius: calc(0.25rem - 1px);\n  border-top-left-radius: calc(0.25rem - 1px); }\n  .rounded .flex-col:first-child .card-item-first {\n    border-radius: calc(0.25rem - 1px) 0 0 calc(0.25rem - 1px); }\n\n.rounded .flex-col:last-child {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n  .rounded .flex-col:last-child .card-item-last {\n    border-radius: 0 calc(0.25rem - 1px) calc(0.25rem - 1px) 0; }\n\n.rounded-0 .card-header,\n.rounded-0 .card-item-first {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.rounded-0 .card-footer,\n.rounded-0 .card-item-last {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.rounded-0 .flex-col:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n  .rounded-0 .flex-col:first-child .card-item-first {\n    border-radius: 0 0 0 0; }\n\n.rounded-0 .flex-col:last-child {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n  .rounded-0 .flex-col:last-child .card-item-last {\n    border-radius: 0 0 0 0; }\n\n.rounded-circle .card-header,\n.rounded-circle .card-item-first {\n  border-top-left-radius: calc(5000px - 1px);\n  border-top-right-radius: calc(5000px - 1px); }\n\n.rounded-circle .card-footer,\n.rounded-circle .card-item-last {\n  border-bottom-left-radius: calc(5000px - 1px);\n  border-bottom-right-radius: calc(5000px - 1px); }\n\n.rounded-circle .flex-col:first-child {\n  border-bottom-left-radius: calc(5000px - 1px);\n  border-top-left-radius: calc(5000px - 1px); }\n  .rounded-circle .flex-col:first-child .card-item-first {\n    border-radius: calc(5000px - 1px) 0 0 calc(5000px - 1px); }\n\n.rounded-circle .flex-col:last-child {\n  border-bottom-right-radius: calc(5000px - 1px);\n  border-top-right-radius: calc(5000px - 1px); }\n  .rounded-circle .flex-col:last-child .card-item-last {\n    border-radius: 0 calc(5000px - 1px) calc(5000px - 1px) 0; }\n\n.form-check-card {\n  margin-bottom: 1.25rem;\n  margin-top: 0; }\n  .form-check-card .card {\n    font-size: 1rem;\n    margin-bottom: 0; }\n  .form-check-card .custom-control {\n    display: inline;\n    margin-right: 0;\n    position: static; }\n    .form-check-card .custom-control > label {\n      font-weight: 400;\n      padding-left: 0; }\n  .form-check-card .custom-control-input,\n  .form-check-card .custom-control-indicator {\n    z-index: 1; }\n  .form-check-card .form-check-input {\n    margin-left: 0;\n    margin-top: 0;\n    position: absolute;\n    z-index: 1; }\n  .form-check-card .form-check-label {\n    color: #212529;\n    display: inline;\n    font-weight: 400;\n    padding-left: 0;\n    position: static; }\n  .form-check-card.active .card,\n  .form-check-card .custom-control-input:checked ~ .card,\n  .form-check-card .form-check-input:checked ~ .card {\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.form-check-card:hover .card {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-control-input:hover ~ .card,\n.form-check-input:hover ~ .card {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.form-check-bottom-left .card-horizontal > .card-body,\n.form-check-middle-left .card-horizontal > .card-body,\n.form-check-top-left .card-horizontal > .card-body {\n  padding-left: 40px; }\n\n.form-check-bottom-right .card-horizontal > .card-body,\n.form-check-middle-right .card-horizontal > .card-body,\n.form-check-top-right .card-horizontal > .card-body {\n  padding-right: 40px; }\n\n.form-check-bottom-left .custom-control-input,\n.form-check-bottom-left .custom-control-indicator,\n.form-check-bottom-left .form-check-input {\n  bottom: 1rem;\n  left: 1rem;\n  top: auto;\n  transform: none; }\n\n.form-check-bottom-right .custom-control-input,\n.form-check-bottom-right .custom-control-indicator,\n.form-check-bottom-right .form-check-input {\n  bottom: 1rem;\n  left: auto;\n  right: 1rem;\n  top: auto;\n  transform: none; }\n\n.form-check-middle-left .custom-control-input,\n.form-check-middle-left .custom-control-indicator,\n.form-check-middle-left .form-check-input {\n  left: 1rem;\n  margin-top: 0;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.form-check-middle-right .custom-control-input,\n.form-check-middle-right .custom-control-indicator,\n.form-check-middle-right .form-check-input {\n  left: auto;\n  margin-top: 0;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.form-check-top-left .custom-control-input,\n.form-check-top-left .custom-control-indicator,\n.form-check-top-left .form-check-input {\n  left: 1rem;\n  top: 1rem;\n  transform: none; }\n\n.form-check-top-right .custom-control-input,\n.form-check-top-right .custom-control-indicator,\n.form-check-top-right .form-check-input {\n  left: auto;\n  right: 1rem;\n  top: 1rem;\n  transform: none; }\n\n.card-type-asset .aspect-ratio {\n  border-bottom: 1px solid white;\n  padding-bottom: 56.25%; }\n\n.card-type-asset .aspect-ratio-item-fluid {\n  color: #ebecee;\n  font-size: 64px; }\n  .card-type-asset .aspect-ratio-item-fluid .sticker {\n    display: block;\n    border-radius: 100px; }\n    .card-type-asset .aspect-ratio-item-fluid .sticker .lexicon-icon {\n      font-size: 64px; }\n\n.card-type-asset .bg-checkered .aspect-ratio-item-fluid {\n  color: #212529; }\n\n.card-type-asset .card-row {\n  align-items: flex-start; }\n\n.card-type-asset .card-subtitle {\n  margin-bottom: 0; }\n\n.card-type-asset .dropdown-action {\n  margin-right: -8px;\n  margin-top: -3px; }\n\n.card-type-directory .card-title {\n  margin-bottom: 0; }\n\n.card-type-directory .dropdown-action {\n  margin-right: -8px; }\n\n.card-type-directory .sticker {\n  font-size: 18px; }\n\n.dropdown-header {\n  white-space: normal;\n  word-wrap: break-word; }\n\n.dropdown-subheader {\n  color: #868e96;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.5rem 1.5rem;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.dropdown-caption {\n  color: #868e96;\n  font-size: 0.875rem;\n  padding: 0.25rem 1.5rem;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.dropdown-item {\n  overflow: hidden;\n  position: relative;\n  white-space: normal;\n  word-wrap: break-word; }\n  .dropdown-item.active label,\n  .dropdown-item.active .form-check-label {\n    color: #fff; }\n  .dropdown-item.disabled label,\n  .dropdown-item.disabled .form-check-label, .dropdown-item:disabled label,\n  .dropdown-item:disabled .form-check-label {\n    color: #868e96; }\n  .dropdown-item.disabled.btn-link, .dropdown-item.disabled.btn-unstyled, .dropdown-item:disabled.btn-link, .dropdown-item:disabled.btn-unstyled {\n    opacity: 1; }\n  .dropdown-item.btn-link {\n    line-height: 1.5;\n    transition: none; }\n    .dropdown-item.btn-link:focus, .dropdown-item.btn-link:hover {\n      text-decoration: none; }\n  .dropdown-item.btn-unstyled {\n    font-weight: 400;\n    padding: 0.25rem 1.5rem;\n    transition: none; }\n  .dropdown-item .form-check {\n    margin-bottom: 0; }\n  .dropdown-item .custom-control {\n    margin-bottom: 0;\n    margin-right: 0;\n    min-height: 1rem; }\n\n.dropdown-section {\n  padding: 0.25rem 1.5rem; }\n\n.dropdown-menu {\n  max-height: 500px;\n  max-width: 260px;\n  overflow: auto; }\n  @media (max-width: 991px) {\n    .dropdown-menu {\n      max-height: 295px;\n      max-width: 230px; } }\n  .dropdown-menu .alert {\n    line-height: normal;\n    margin: 0.5rem;\n    padding: 0.5rem 1.5rem; }\n    .dropdown-menu .alert:first-child {\n      margin-top: 0; }\n    .dropdown-menu .alert:last-child {\n      margin-bottom: 0; }\n  .dropdown-menu .alert-fluid {\n    margin-left: 0;\n    margin-right: 0; }\n    .dropdown-menu .alert-fluid:first-child {\n      margin-top: -0.5rem; }\n    .dropdown-menu .alert-fluid:last-child {\n      margin-bottom: -0.5rem; }\n  .dropdown-menu .inline-scroller {\n    max-height: 200px; }\n    @media (max-width: 991px) {\n      .dropdown-menu .inline-scroller {\n        max-height: none; } }\n\n.dropdown-action {\n  display: inline-block;\n  vertical-align: middle; }\n  .dropdown-action > .dropdown-toggle {\n    border-radius: 0.25rem;\n    color: #007bff;\n    display: block;\n    height: 2rem;\n    line-height: 2rem;\n    width: 2rem;\n    text-align: center; }\n    .dropdown-action > .dropdown-toggle:hover {\n      color: #0056b3; }\n    .dropdown-action > .dropdown-toggle:disabled, .dropdown-action > .dropdown-toggle.disabled {\n      color: #868e96;\n      opacity: 0.65; }\n\n.dropdown-menu-indicator-start .dropdown-item-indicator {\n  height: 1rem;\n  left: 1.5rem;\n  position: absolute;\n  top: 0.25rem;\n  width: 1rem; }\n\n.dropdown-menu-indicator-start .dropdown-header,\n.dropdown-menu-indicator-start .dropdown-subheader,\n.dropdown-menu-indicator-start .dropdown-caption,\n.dropdown-menu-indicator-start .dropdown-item {\n  padding-left: 3.5rem; }\n\n.dropdown-menu-indicator-end .dropdown-item-indicator {\n  position: absolute;\n  right: 1.5rem;\n  top: 0.25rem; }\n\n.dropdown-menu-indicator-end .dropdown-item {\n  padding-right: 3.5rem; }\n\n.dropdown-menu-top {\n  bottom: 100% !important;\n  left: 0 !important;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n  right: auto !important;\n  top: auto !important;\n  transform: none !important;\n  will-change: auto !important; }\n\n.dropdown-menu-top-right {\n  bottom: 100% !important;\n  left: auto !important;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n  right: 0 !important;\n  top: auto !important;\n  transform: none !important;\n  will-change: auto !important; }\n\n.dropdown-menu-top-center {\n  bottom: 100% !important;\n  left: 50% !important;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n  right: auto !important;\n  top: auto !important;\n  transform: translateX(-50%) !important;\n  will-change: auto !important; }\n\n.dropdown-menu-center {\n  bottom: auto !important;\n  left: 50% !important;\n  right: auto !important;\n  top: 100% !important;\n  transform: translateX(-50%) !important;\n  will-change: auto !important; }\n\n.dropdown-menu-left-side {\n  bottom: auto !important;\n  left: auto !important;\n  margin-right: 0.125rem;\n  margin-top: 0;\n  right: 100% !important;\n  top: 0 !important;\n  transform: none !important;\n  will-change: auto !important; }\n\n.dropdown-menu-left-side-bottom {\n  bottom: 0 !important;\n  left: auto !important;\n  margin-right: 0.125rem;\n  margin-top: 0;\n  right: 100% !important;\n  top: auto !important;\n  transform: none !important;\n  will-change: auto !important; }\n\n.dropdown-menu-left-side-middle {\n  bottom: auto !important;\n  left: auto !important;\n  margin-right: 0.125rem;\n  margin-top: 0;\n  right: 100% !important;\n  top: 50% !important;\n  transform: translate(0, -50%) !important;\n  will-change: auto !important; }\n\n.dropdown-menu-right-side {\n  bottom: auto !important;\n  left: 100% !important;\n  margin-left: 0.125rem;\n  margin-top: 0;\n  right: auto !important;\n  top: 0 !important;\n  transform: none !important;\n  will-change: auto !important; }\n\n.dropdown-menu-right-side-bottom {\n  bottom: 0 !important;\n  left: 100% !important;\n  margin-left: 0.125rem;\n  margin-top: 0;\n  right: auto !important;\n  top: auto !important;\n  transform: none !important;\n  will-change: auto !important; }\n\n.dropdown-menu-right-side-middle {\n  bottom: auto !important;\n  left: 100% !important;\n  margin-left: 0.125rem;\n  margin-top: 0;\n  right: auto !important;\n  top: 50% !important;\n  transform: translate(0, -50%) !important;\n  will-change: auto !important; }\n\n.dropdown-full .dropdown-menu,\n.dropdown-wide .dropdown-menu {\n  max-width: none;\n  padding: 5px 0;\n  width: 100%; }\n  @media (min-width: 768px) {\n    .dropdown-full .dropdown-menu,\n    .dropdown-wide .dropdown-menu {\n      max-height: none;\n      padding: 20px 0;\n      width: 100%; } }\n\n.dropdown-full .dropdown-header ~ .dropdown-header,\n.dropdown-wide .dropdown-header ~ .dropdown-header {\n  margin-top: 20px; }\n\n.dropdown-full .dropdown-menu > .row,\n.dropdown-wide .dropdown-menu > .row {\n  margin-left: 0;\n  margin-right: 0; }\n\n@media (min-width: 992px) {\n  .dropdown-wide .dropdown-menu {\n    min-width: 500px; } }\n\n.nav-item.dropdown-full {\n  position: static; }\n\n@media (max-width: 991px) {\n  .nav-item.dropdown-wide {\n    position: static; } }\n\n@media (max-width: 767px) {\n  .navbar-nav .dropdown-menu-center {\n    -ms-transform: none;\n    transform: none; } }\n\n.navbar-right .dropdown-menu-center {\n  left: 50%;\n  right: auto; }\n\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n  height: 14px;\n  width: 14px; }\n\ninput[type=\"radio\"] {\n  cursor: pointer;\n  height: 15px;\n  width: 14px; }\n\nfieldset {\n  word-wrap: break-word; }\n\n@-moz-document url-prefix() {\n  fieldset {\n    display: table-cell; } }\n\nlabel {\n  max-width: 100%;\n  word-wrap: break-word; }\n  label + .form-text {\n    margin-top: 0; }\n  label .reference-mark {\n    color: #ffc107; }\n\n.form-container {\n  background-color: #fff;\n  border-color: rgba(0, 0, 0, 0.125);\n  border-style: solid;\n  border-width: 0.0625rem;\n  border-radius: 0.25rem;\n  padding-bottom: 1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1.5rem; }\n\n.form-group {\n  position: relative; }\n\n.form-control {\n  border-width: 1px;\n  height: calc(2.25rem + 2px); }\n  .form-control::-ms-clear, .form-control::-ms-reveal {\n    display: none;\n    height: 0;\n    width: 0; }\n\n.form-control[multiple],\n.form-control[size] {\n  height: auto; }\n\nselect.form-control:not([multiple]):not([size]) {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\");\n  background-position: right 0.75rem center;\n  background-repeat: no-repeat;\n  background-size: 8px 10px;\n  padding-right: 1.75rem; }\n  select.form-control:not([multiple]):not([size])::-ms-expand {\n    display: none; }\n\ntextarea.form-control {\n  height: 150px; }\n\n.form-check-label {\n  display: inline;\n  position: relative; }\n\nfieldset[disabled] label .form-control {\n  font-weight: normal;\n  opacity: 1; }\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: calc(2.875rem + 2px); }\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: calc(1.8125rem + 2px); }\n\n.form-inline-autofit {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column; }\n  .form-inline-autofit > .btn:not(:last-child),\n  .form-inline-autofit > .form-control:not(:last-child),\n  .form-inline-autofit > .form-inline-group:not(:last-child) {\n    margin-bottom: 1rem; }\n  .form-inline-autofit .form-inline-group {\n    flex: 1;\n    position: relative;\n    width: 100%; }\n  .form-inline-autofit .input-group {\n    flex: 1; }\n  @media (max-width: 575px) {\n    .form-inline-autofit > label,\n    .form-inline-autofit > .btn,\n    .form-inline-autofit > .form-control,\n    .form-inline-autofit > .form-inline-group,\n    .form-inline-autofit > .input-group {\n      flex-basis: auto !important; } }\n\n@media (min-width: 576px) {\n  .form-inline-autofit {\n    flex: 1;\n    flex-direction: row;\n    width: 100%; }\n    .form-inline-autofit > label:not(:last-child) {\n      margin-right: 15px; }\n    .form-inline-autofit > .btn:not(:last-child),\n    .form-inline-autofit > .form-control:not(:last-child),\n    .form-inline-autofit > .form-file:not(:last-child),\n    .form-inline-autofit > .form-inline-group:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 15px; }\n    .form-inline-autofit .form-control {\n      flex: 1;\n      min-width: 10px;\n      width: 100%; }\n    .form-inline-autofit > label {\n      display: inline-block;\n      margin-bottom: calc(2.25rem + 2px)-1.5rem/2; }\n  .form-inline-group label {\n    display: inline-block; } }\n\n.container-fluid-max-sm {\n  max-width: 540px; }\n\n.container-fluid-max-md {\n  max-width: 720px; }\n\n.container-fluid-max-lg {\n  max-width: 960px; }\n\n.container-fluid-max-xl {\n  max-width: 1140px; }\n\n.container-no-gutters {\n  padding-left: 0;\n  padding-right: 0; }\n  .container-no-gutters > .row {\n    margin-left: 0;\n    margin-right: 0; }\n    .container-no-gutters > .row > .col,\n    .container-no-gutters > .row > [class*=\"col-\"] {\n      padding-right: 0;\n      padding-left: 0; }\n  @media (max-width: 575px) {\n    .container-no-gutters-sm-down {\n      padding-left: 0;\n      padding-right: 0; }\n      .container-no-gutters-sm-down > .row {\n        margin-left: 0;\n        margin-right: 0; }\n        .container-no-gutters-sm-down > .row > .col,\n        .container-no-gutters-sm-down > .row > [class*=\"col-\"] {\n          padding-right: 0;\n          padding-left: 0; } }\n  @media (max-width: 767px) {\n    .container-no-gutters-md-down {\n      padding-left: 0;\n      padding-right: 0; }\n      .container-no-gutters-md-down > .row {\n        margin-left: 0;\n        margin-right: 0; }\n        .container-no-gutters-md-down > .row > .col,\n        .container-no-gutters-md-down > .row > [class*=\"col-\"] {\n          padding-right: 0;\n          padding-left: 0; } }\n  @media (max-width: 991px) {\n    .container-no-gutters-lg-down {\n      padding-left: 0;\n      padding-right: 0; }\n      .container-no-gutters-lg-down > .row {\n        margin-left: 0;\n        margin-right: 0; }\n        .container-no-gutters-lg-down > .row > .col,\n        .container-no-gutters-lg-down > .row > [class*=\"col-\"] {\n          padding-right: 0;\n          padding-left: 0; } }\n  @media (max-width: 1199px) {\n    .container-no-gutters-xl-down {\n      padding-left: 0;\n      padding-right: 0; }\n      .container-no-gutters-xl-down > .row {\n        margin-left: 0;\n        margin-right: 0; }\n        .container-no-gutters-xl-down > .row > .col,\n        .container-no-gutters-xl-down > .row > [class*=\"col-\"] {\n          padding-right: 0;\n          padding-left: 0; } }\n\n.custom-select {\n  -webkit-appearance: none; }\n\n.form-file {\n  display: flex;\n  position: relative; }\n\n.form-file-input {\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 10; }\n  .form-file-input:focus + .input-group {\n    border-radius: 1px;\n    box-shadow: 0 0 0 0.075rem #FFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-file-input:focus + .custom-file-control {\n  border-radius: 1px; }\n\n.custom-control-indicator {\n  font-size: 1rem; }\n\n.custom-control-description {\n  line-height: 1rem; }\n\n.custom-control-input:disabled ~ .custom-control-indicator {\n  background-color: #e9ecef;\n  box-shadow: none; }\n\n.custom-control .custom-control-input:focus ~ .custom-control-indicator {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #007bff; }\n\n.custom-control {\n  display: block;\n  margin-bottom: 0.25rem;\n  margin-right: 0;\n  min-height: 0;\n  padding-left: 0; }\n  .custom-control label {\n    display: inline;\n    margin-bottom: 0;\n    padding-left: 1.5rem; }\n\n.custom-control-input {\n  height: 1rem;\n  left: 0;\n  top: 0.25rem;\n  width: 1rem;\n  z-index: 0; }\n\n.custom-control-inline {\n  display: inline-block; }\n  .custom-control-inline + .custom-control-inline {\n    margin-left: 1rem; }\n\n.invalid-feedback,\n.valid-feedback {\n  font-size: 0.875rem; }\n\n.form-feedback-item {\n  font-size: 0.875rem;\n  margin-top: 0.25rem; }\n\n.form-feedback-indicator {\n  margin-left: 0.3125rem;\n  margin-right: 0.3125rem; }\n  .form-feedback-indicator:first-child {\n    margin-left: 0; }\n\n.form-text {\n  color: #868e96;\n  font-size: 0.875rem; }\n\n.was-validated .form-control:valid,\n.was-validated .form-control.is-valid {\n  border-color: #28a745; }\n  .was-validated .form-control:valid:focus,\n  .was-validated .form-control.is-valid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .form-control:invalid,\n.was-validated .form-control.is-invalid {\n  border-color: #dc3545; }\n  .was-validated .form-control:invalid:focus,\n  .was-validated .form-control.is-invalid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.has-error .custom-control-description,\n.has-error .form-check-label {\n  color: #dc3545; }\n\n.has-error .form-control {\n  border-color: #dc3545; }\n  .has-error .form-control:focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.has-error .form-feedback-item {\n  color: #dc3545; }\n\n.has-error select.form-control:not([multiple]):not([size]) {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23dc3545' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"); }\n\n.has-warning .custom-control-description,\n.has-warning .form-check-label {\n  color: #ffc107; }\n\n.has-warning .form-control {\n  border-color: #ffc107; }\n  .has-warning .form-control:focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25); }\n\n.has-warning .form-feedback-item {\n  color: #ffc107; }\n\n.has-warning select.form-control:not([multiple]):not([size]) {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23ffc107' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"); }\n\n.has-success .custom-control-description,\n.has-success .form-check-label {\n  color: #28a745; }\n\n.has-success .form-control {\n  border-color: #28a745; }\n  .has-success .form-control:focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.has-success .form-feedback-item {\n  color: #28a745; }\n\n.has-success select.form-control:not([multiple]):not([size]) {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%2328a745' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\"); }\n\n.lexicon-icon {\n  display: inline-block;\n  fill: currentColor;\n  height: 1em;\n  margin-top: -3px;\n  vertical-align: middle;\n  width: 1em; }\n\n.lexicon-icon-sm {\n  font-size: 0.5rem; }\n\n.lexicon-icon-lg {\n  font-size: 2rem; }\n\n.lexicon-icon-xl {\n  font-size: 8rem; }\n\na.collapse-icon {\n  padding-right: 2.28125rem; }\n\n.collapse-icon-closed .lexicon-icon,\n.collapse-icon-open .lexicon-icon {\n  display: block; }\n\n.collapse-icon .collapse-icon-closed,\n.collapse-icon .collapse-icon-open {\n  height: 1em;\n  position: absolute;\n  right: 0.9375rem;\n  top: calc(0.5rem + 1px + (((1rem * 1.5) - 1em) / 2));\n  width: 1em; }\n  .collapse-icon .collapse-icon-closed .lexicon-icon,\n  .collapse-icon .collapse-icon-open .lexicon-icon {\n    margin-top: 0; }\n\n.collapse-icon .collapse-icon-closed {\n  display: none; }\n\n.collapse-icon .collapse-icon-open {\n  display: inline-block; }\n\n.collapsed .collapse-icon-closed {\n  display: inline-block; }\n\n.collapsed .collapse-icon-open {\n  display: none; }\n\n.collapse-icon-middle .collapse-icon-closed,\n.collapse-icon-middle .collapse-icon-open {\n  margin-top: 0;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%); }\n\n.input-group {\n  align-items: flex-start; }\n  .input-group .form-control:focus {\n    z-index: 4; }\n\n.input-group-btn .btn:hover {\n  z-index: 3; }\n\n.input-group-btn .btn:focus {\n  z-index: 4; }\n\n.input-group-btn > .btn {\n  height: calc(2.25rem + 2px);\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.input-group-btn > .btn + .btn {\n  margin-left: 0; }\n\n.input-group-btn:first-child {\n  text-align: right; }\n\n.input-group-btn:last-child > .btn {\n  margin-left: -1px; }\n\n.input-group-btn:not(:first-child) > .form-file .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.input-group-btn:not(:last-child) > .form-file .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group-addon {\n  align-items: center;\n  border-width: 1px;\n  color: #495057;\n  display: flex;\n  height: calc(2.25rem + 2px);\n  padding-bottom: 0;\n  padding-top: 0; }\n  .input-group-addon .custom-control .custom-control-indicator {\n    display: inline-block;\n    position: static;\n    vertical-align: middle; }\n    .input-group-addon .custom-control .custom-control-indicator + .custom-control-description {\n      margin-left: 6px; }\n  .input-group-addon .custom-control .custom-control-description {\n    display: inline-block;\n    vertical-align: middle; }\n  .input-group-addon .custom-control,\n  .input-group-addon .form-check {\n    margin-bottom: 3px; }\n  .input-group-addon .custom-control label,\n  .input-group-addon .form-check-label {\n    display: block;\n    padding: 0; }\n  .input-group-addon .form-check-input {\n    display: inline-block;\n    margin-left: 0;\n    position: static;\n    vertical-align: middle; }\n    .input-group-addon .form-check-input + .form-check-description {\n      display: inline-block;\n      margin-left: 6px;\n      vertical-align: middle; }\n\n.input-group-input {\n  display: flex; }\n  .input-group-input .form-control {\n    display: block; }\n\n.input-group-constrain {\n  border-bottom-width: 0;\n  height: auto;\n  line-height: 2.25rem;\n  max-width: 300px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-left: 0;\n  padding-right: 0; }\n\n.input-group-constrain-text {\n  border-bottom-color: #ced4da;\n  border-bottom-style: solid;\n  border-bottom-width: 0.0625rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem; }\n\n.input-group-secondary .input-group-addon {\n  background-color: #868e96;\n  border-color: #868e96;\n  border-style: solid;\n  border-width: 0.0625rem;\n  margin-right: -0.0625rem; }\n\n.input-group-secondary .form-control + .input-group-addon:not(:first-child) {\n  border-left-color: #868e96;\n  border-left-style: solid;\n  border-left-width: 0.0625rem;\n  margin-left: -0.0625rem;\n  margin-right: 0; }\n\n.input-group-transparent .form-control:not(:first-child), .input-group-transparent .form-control:not(:last-child), .input-group-transparent .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0.25rem; }\n\n.input-group-transparent.input-group-lg .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0.3rem; }\n\n.input-group-transparent.input-group-sm .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0.3rem; }\n\n.input-group-transparent .btn-link {\n  border-width: 0; }\n\n.input-group-transparent .btn-unstyled {\n  border-width: 0;\n  font-size: 1rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem; }\n\n.input-group-transparent .input-group-btn .btn,\n.input-group-transparent .input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-transparent .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0.25rem; }\n\n.input-group-transparent .input-group-btn:last-child > .btn {\n  margin-left: 1px; }\n\n.input-group-transparent .input-group-btn:not(:last-child) > .btn {\n  margin-right: 1px; }\n\n.input-group-transparent .input-group-addon {\n  background-color: transparent;\n  border-width: 0; }\n\n.input-group-inset .form-control {\n  padding-right: 3.25rem; }\n\n.input-group-inset .input-group-input {\n  width: 100%; }\n\n.input-group-inset-left .form-control {\n  padding-left: 3.25em;\n  padding-right: 0.75rem; }\n\n.input-group-inset-left .input-group-inset-item {\n  left: 0.28125rem;\n  right: auto; }\n\n.input-group-inset-item {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  right: 0.28125rem;\n  position: absolute;\n  z-index: 5; }\n  .input-group-inset-item .btn {\n    height: 75%;\n    padding-bottom: 0;\n    padding-top: 0;\n    padding-left: 0.5625rem;\n    padding-right: 0.5625rem; }\n  .input-group-inset-item .btn-unstyled {\n    color: inherit; }\n\n.input-group-lg > .input-group-addon {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.input-group-lg .input-group-constrain {\n  height: auto;\n  line-height: 2.875rem;\n  padding-left: 0;\n  padding-right: 0; }\n\n.input-group-lg .input-group-constrain-text {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.input-group-lg > .input-group-btn > .btn {\n  height: calc(2.875rem + 2px);\n  padding-bottom: 0;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0; }\n\n.input-group-lg > .input-group-input .form-control {\n  font-size: 1.25rem;\n  height: calc(2.875rem + 2px); }\n\n.input-group-sm > .input-group-addon {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.input-group-sm .input-group-constrain {\n  height: auto;\n  line-height: 1.8125rem;\n  padding-left: 0;\n  padding-right: 0; }\n\n.input-group-sm .input-group-constrain-text {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n\n.input-group-sm > .input-group-btn > .btn {\n  height: calc(1.8125rem + 2px);\n  padding-bottom: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0; }\n\n.input-group-sm > .input-group-input .form-control {\n  font-size: 0.875rem;\n  height: calc(1.8125rem + 2px); }\n\n.label {\n  border-color: #212529;\n  border-radius: 0.25rem;\n  border-style: solid;\n  border-width: 0.0625rem;\n  display: inline-block;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1.125rem;\n  margin-bottom: 2px;\n  margin-top: 2px;\n  max-width: 100%;\n  padding-left: 0.4375rem;\n  padding-right: 0.4375rem;\n  white-space: normal;\n  word-wrap: break-word; }\n  .label a {\n    display: inline-block;\n    text-decoration: underline; }\n    .label a:focus, .label a:hover {\n      color: #FFF;\n      text-decoration: none; }\n  .label .close {\n    color: inherit;\n    float: none;\n    font-size: inherit;\n    margin-left: 2px;\n    opacity: 1;\n    vertical-align: middle; }\n    .label .close .lexicon-icon {\n      height: 0.8em;\n      vertical-align: baseline;\n      width: 0.8em; }\n\na.label {\n  text-decoration: none; }\n\n.label-lg {\n  border-width: 0.0625rem;\n  font-size: 0.875rem;\n  line-height: 1.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.label-primary {\n  background-color: #FFF;\n  border-color: #007bff;\n  color: #007bff; }\n  .label-primary[href]:focus, .label-primary[href]:hover {\n    border-color: #0062cc;\n    color: #0062cc; }\n  .label-primary a {\n    color: #007bff; }\n    .label-primary a:focus, .label-primary a:hover {\n      color: #0062cc; }\n\n.label-secondary {\n  background-color: #FFF;\n  border-color: #868e96;\n  color: #868e96; }\n  .label-secondary[href]:focus, .label-secondary[href]:hover {\n    border-color: #6c757d;\n    color: #6c757d; }\n  .label-secondary a {\n    color: #868e96; }\n    .label-secondary a:focus, .label-secondary a:hover {\n      color: #6c757d; }\n\n.label-success {\n  background-color: #FFF;\n  border-color: #28a745;\n  color: #28a745; }\n  .label-success[href]:focus, .label-success[href]:hover {\n    border-color: #1e7e34;\n    color: #1e7e34; }\n  .label-success a {\n    color: #28a745; }\n    .label-success a:focus, .label-success a:hover {\n      color: #1e7e34; }\n\n.label-info {\n  background-color: #FFF;\n  border-color: #17a2b8;\n  color: #17a2b8; }\n  .label-info[href]:focus, .label-info[href]:hover {\n    border-color: #117a8b;\n    color: #117a8b; }\n  .label-info a {\n    color: #17a2b8; }\n    .label-info a:focus, .label-info a:hover {\n      color: #117a8b; }\n\n.label-warning {\n  background-color: #FFF;\n  border-color: #ffc107;\n  color: #ffc107; }\n  .label-warning[href]:focus, .label-warning[href]:hover {\n    border-color: #d39e00;\n    color: #d39e00; }\n  .label-warning a {\n    color: #ffc107; }\n    .label-warning a:focus, .label-warning a:hover {\n      color: #d39e00; }\n\n.label-danger {\n  background-color: #FFF;\n  border-color: #dc3545;\n  color: #dc3545; }\n  .label-danger[href]:focus, .label-danger[href]:hover {\n    border-color: #bd2130;\n    color: #bd2130; }\n  .label-danger a {\n    color: #dc3545; }\n    .label-danger a:focus, .label-danger a:hover {\n      color: #bd2130; }\n\n.label-dark {\n  background-color: #FFF;\n  border-color: #343a40;\n  color: #343a40; }\n  .label-dark[href]:focus, .label-dark[href]:hover {\n    border-color: #1d2124;\n    color: #1d2124; }\n  .label-dark a {\n    color: #343a40; }\n    .label-dark a:focus, .label-dark a:hover {\n      color: #1d2124; }\n\n.label-light {\n  border-color: #f8f9fa;\n  color: #f8f9fa; }\n  .label-light[href]:focus, .label-light[href]:hover {\n    border-color: #dae0e5;\n    color: #dae0e5; }\n  .label-light a {\n    color: #f8f9fa; }\n    .label-light a:focus, .label-light a:hover {\n      color: #dae0e5; }\n\n.list-group {\n  border-radius: 0.25rem; }\n\n.list-group-bordered .list-group-item-flex {\n  padding: 0; }\n  .list-group-bordered .list-group-item-flex.active .flex-col {\n    border-color: #007bff; }\n\n.list-group-bordered .flex-col {\n  border-left: 1px solid rgba(0, 0, 0, 0.125);\n  border-right: 1px solid rgba(0, 0, 0, 0.125);\n  margin-left: -1px;\n  padding: 0.75rem 1.25rem; }\n  .list-group-bordered .flex-col:first-child, .list-group-bordered .flex-col:last-child {\n    border-left-width: 0;\n    border-right-width: 0;\n    margin-left: 0; }\n\n.list-group-notification .list-group-item {\n  border-width: 0;\n  box-shadow: inset 0.5rem 0 #007bff, inset -0.0625rem 0 rgba(0, 0, 0, 0.125), inset 0 0.0625rem rgba(0, 0, 0, 0.125), inset 0 -0.0625rem rgba(0, 0, 0, 0.125); }\n  .list-group-notification .list-group-item.active {\n    box-shadow: inset 0.5rem 0 #007bff, inset -0.0625rem 0 #007bff, inset 0 0.0625rem #007bff, inset 0 -0.0625rem #007bff; }\n  .list-group-notification .list-group-item:first-child {\n    border-top-left-radius: 0; }\n  .list-group-notification .list-group-item:last-child {\n    border-bottom-left-radius: 0; }\n\n.list-group-header {\n  align-items: center;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -1px;\n  padding: 0.75rem 1.25rem; }\n  .list-group-header:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-header:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-header-title {\n  font-size: 1rem;\n  margin-bottom: 0; }\n\n.list-group-title {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: 0.5rem; }\n\n.list-group-subtitle {\n  line-height: 1;\n  margin-bottom: 0; }\n\n.list-group-detail {\n  margin-top: 0.25rem; }\n\n.show-dropdown-action-on-active .list-group-item.active .dropdown-action .dropdown-menu {\n  background-color: #007bff; }\n\n.show-dropdown-action-on-active .list-group-item.active .dropdown-action .dropdown-item {\n  color: #fff; }\n\n.list-group-item.active {\n  z-index: auto; }\n  .list-group-item.active .dropdown-action .dropdown-toggle,\n  .list-group-item.active .list-group-link {\n    color: #fff; }\n  .list-group-item.active .list-group-title,\n  .list-group-item.active a.list-group-title,\n  .list-group-item.active .list-group-title a {\n    color: #fff; }\n  .list-group-item.active .list-group-subtitle,\n  .list-group-item.active a.list-group-subtitle,\n  .list-group-item.active .list-group-subtitle a {\n    color: #fff; }\n  .list-group-item.active .list-group-link {\n    color: #fff; }\n\n.list-group-item-flex {\n  display: flex;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  .list-group-item-flex .flex-col {\n    justify-content: flex-start;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem; }\n    .list-group-item-flex .flex-col .custom-control:only-child,\n    .list-group-item-flex .flex-col .form-check:only-child {\n      margin-bottom: 0; }\n\n.list-group-item-action:focus {\n  z-index: 1; }\n\n.show-quick-actions-on-hover .list-group-item:not(.active):hover .quick-action-menu {\n  display: flex; }\n\n.show-quick-actions-on-hover .focus:not(.active) .quick-action-menu {\n  display: flex; }\n\n.list-group .quick-action-menu {\n  align-items: flex-start;\n  background-color: #fff; }\n\n.list-group-bordered .quick-action-menu {\n  padding-bottom: 0.75rem;\n  padding-top: 0.75rem; }\n\n.list-group-item-flex.active .quick-action-menu {\n  background-color: #007bff; }\n\n.list-group-item-flex.active .quick-action-item {\n  color: #fff; }\n\n.modal-content {\n  overflow: hidden; }\n\n.modal-header {\n  align-items: center;\n  border-color: #e9ecef;\n  flex-shrink: 0;\n  height: 4rem;\n  padding-bottom: 0;\n  padding-top: 0; }\n  .modal-header .close {\n    margin: 0;\n    padding: 0; }\n\n.modal-body.inline-scroller {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  padding: 15px; }\n\n.modal-footer {\n  flex-shrink: 0;\n  height: 4.5rem;\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.modal-item-first {\n  margin-right: auto; }\n\n.modal-item {\n  flex-grow: 1; }\n\n.modal-item-last {\n  margin-left: auto; }\n\n.modal-footer > .modal-item-first {\n  margin-right: auto; }\n\n.modal-footer > .modal-item-last {\n  margin-left: auto; }\n\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 500;\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.modal-title-indicator {\n  display: inline-block;\n  font-size: 0.875rem;\n  margin-right: 0.5rem;\n  margin-top: -0.2em;\n  vertical-align: middle; }\n\n.modal .btn-monospaced,\n.modal .close {\n  color: #000;\n  font-size: 1rem;\n  min-width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  width: 2rem;\n  opacity: 0.5; }\n  .modal .btn-monospaced:focus, .modal .btn-monospaced:hover,\n  .modal .close:focus,\n  .modal .close:hover {\n    opacity: 0.75; }\n  .modal .btn-monospaced:first-child,\n  .modal .close:first-child {\n    margin-left: -0.3125rem; }\n  .modal .btn-monospaced:last-child,\n  .modal .close:last-child {\n    margin-right: -0.3125rem; }\n\n.btn-monospaced + .modal-title,\n.close + .modal-title {\n  margin-left: 0.3125rem; }\n\n.modal-title + .btn-monospaced,\n.modal-title + .close {\n  margin-left: 0.3125rem; }\n\n.modal-body-iframe {\n  height: 160px;\n  padding: 0; }\n  .modal-body-iframe iframe {\n    border-width: 0;\n    height: 100%;\n    position: absolute;\n    width: 100%; }\n\n.modal-full-screen {\n  bottom: 45px;\n  left: 45px;\n  margin: 0;\n  max-width: none;\n  position: absolute;\n  right: 45px;\n  top: 45px; }\n  .modal-full-screen .modal-content {\n    border-color: rgba(0, 0, 0, 0.2);\n    border-radius: 0.3rem;\n    border-width: 1px;\n    height: 100%; }\n  .modal-full-screen .modal-body {\n    overflow: auto; }\n\n@media (max-width: 767px) {\n  .modal-full-screen-sm-down {\n    bottom: 0;\n    left: 0;\n    margin: 0;\n    max-width: none;\n    position: absolute;\n    right: 0;\n    top: 0; }\n    .modal-full-screen-sm-down .modal-body {\n      overflow: auto; }\n    .modal-full-screen-sm-down .modal-content {\n      border-radius: 0;\n      border-width: 0;\n      height: 100%; } }\n\n.modal-success .btn-monospaced,\n.modal-success .close {\n  color: #155724; }\n\n.modal-success .modal-header {\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n  color: #155724; }\n\n.modal-info .btn-monospaced,\n.modal-info .close {\n  color: #0c5460; }\n\n.modal-info .modal-header {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460; }\n\n.modal-warning .btn-monospaced,\n.modal-warning .close {\n  color: #856404; }\n\n.modal-warning .modal-header {\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n  color: #856404; }\n\n.modal-danger .btn-monospaced,\n.modal-danger .close {\n  color: #721c24; }\n\n.modal-danger .modal-header {\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n  color: #721c24; }\n\n.multi-step-nav {\n  align-items: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin-bottom: 15px;\n  padding: 0 15px;\n  position: relative; }\n\n.multi-step-indicator-label-bottom .multi-step-item {\n  padding-bottom: 1.5rem; }\n\n.multi-step-indicator-label-bottom .multi-step-indicator-label {\n  top: 2rem; }\n\n.multi-step-indicator-label-top .multi-step-item {\n  padding-top: 1.5rem; }\n\n.multi-step-indicator-label-top .multi-step-indicator-label {\n  bottom: 2.25rem; }\n\n.multi-step-title-center .multi-step-title {\n  margin-left: 1rem;\n  max-width: 100px;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  text-overflow: ellipsis;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  width: auto; }\n\n.multi-step-item {\n  margin-bottom: 10px;\n  position: relative; }\n  .multi-step-item.active .multi-step-icon {\n    background-color: #007bff;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 1rem;\n    color: #fff; }\n  .multi-step-item.active .multi-step-divider {\n    background-color: #e9ecef; }\n  .multi-step-item.active.complete .multi-step-icon {\n    background-color: #007bff;\n    color: #fff; }\n  .multi-step-item.complete .dropdown .multi-step-icon, .multi-step-item.complete .dropdown .multi-step-icon:active {\n    background-image: none; }\n  .multi-step-item.complete .multi-step-icon {\n    background-color: #868e96;\n    color: #FFF;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%3E%3Cpath%20class='lexicon-icon-outline'%20d='M502.091%2060.993c-9.909-9.91-25.962-9.91-35.843%200L129.26%20397.981%2045.752%20314.53c-9.881-9.909-25.962-9.909-35.843%200-9.909%209.909-9.909%2025.962%200%2035.843l98.257%2098.257c2.608%202.608%205.679%204.433%208.924%205.679%204.028%202.464%208.403%204.115%2012.952%204.115%206.49%200%2012.981-2.464%2017.936-7.418L502.09%2096.865c9.909-9.909%209.909-25.962%200-35.871v-.001z'%20fill='%23FFF'/%3E%3C/svg%3E\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 1rem; }\n    .multi-step-item.complete .multi-step-icon[data-multi-step-icon]:before {\n      content: normal; }\n    .multi-step-item.complete .multi-step-icon:active {\n      background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%3E%3Cpath%20class='lexicon-icon-outline'%20d='M502.091%2060.993c-9.909-9.91-25.962-9.91-35.843%200L129.26%20397.981%2045.752%20314.53c-9.881-9.909-25.962-9.909-35.843%200-9.909%209.909-9.909%2025.962%200%2035.843l98.257%2098.257c2.608%202.608%205.679%204.433%208.924%205.679%204.028%202.464%208.403%204.115%2012.952%204.115%206.49%200%2012.981-2.464%2017.936-7.418L502.09%2096.865c9.909-9.909%209.909-25.962%200-35.871v-.001z'%20fill='%23FFF'/%3E%3C/svg%3E\"); }\n  .multi-step-item.complete .multi-step-divider {\n    background-color: #868e96; }\n\n.multi-step-title {\n  font-size: 1rem;\n  line-height: normal;\n  margin-bottom: 0.625rem;\n  word-wrap: break-word; }\n\n.multi-step-item-expand {\n  flex-grow: 1;\n  width: 75px; }\n\n.multi-step-divider {\n  background-color: #e9ecef;\n  height: 0.25rem;\n  margin-left: 2rem;\n  margin-top: -0.25rem;\n  position: relative;\n  top: 1.125rem; }\n\n.multi-step-indicator {\n  position: relative;\n  width: 2rem; }\n  .multi-step-indicator .dropdown-item-indicator {\n    display: none; }\n  .multi-step-indicator .complete .dropdown-item-indicator {\n    display: block; }\n  .multi-step-indicator .multi-step-indicator-label {\n    font-size: 1rem;\n    left: 50%;\n    max-width: 100px;\n    position: absolute;\n    transform: translateX(-50%);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\nbutton.multi-step-icon {\n  cursor: pointer;\n  border-width: 0;\n  padding: 0; }\n  button.multi-step-icon:focus, button.multi-step-icon:hover {\n    background-color: #e9ecef;\n    color: rgba(0, 0, 0, 0.7);\n    text-decoration: none; }\n\na.multi-step-icon:focus, a.multi-step-icon:hover {\n  background-color: #e9ecef;\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none; }\n\n.multi-step-icon {\n  align-items: center;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem; }\n  .multi-step-icon[data-multi-step-icon]:before {\n    content: attr(data-multi-step-icon);\n    height: 2rem;\n    line-height: 2rem;\n    text-align: center;\n    width: 2rem; }\n  .multi-step-icon .btn-link {\n    vertical-align: baseline; }\n  .multi-step-icon .lexicon-icon {\n    height: 1rem;\n    margin-top: 0;\n    width: 1rem; }\n\n.multi-step-item-fixed-width.multi-step-item,\n.multi-step-item-fixed-width .multi-step-item-expand {\n  flex-grow: 0;\n  width: 150px; }\n\n@media (max-width: 767px) {\n  .multi-step-nav-collapse-sm {\n    flex-wrap: nowrap; }\n    .multi-step-nav-collapse-sm.multi-step-indicator-label-top .multi-step-indicator-label {\n      bottom: auto;\n      top: 0; }\n    .multi-step-nav-collapse-sm.multi-step-indicator-label-bottom .multi-step-indicator-label {\n      bottom: 0;\n      top: auto; }\n    .multi-step-nav-collapse-sm.multi-step-title-center .multi-step-title {\n      margin-left: 0;\n      max-width: none;\n      transform: none; }\n    .multi-step-nav-collapse-sm .active.multi-step-item {\n      position: static; }\n    .multi-step-nav-collapse-sm .active .multi-step-title {\n      display: block;\n      left: 0;\n      position: absolute;\n      right: 0;\n      text-align: center;\n      top: 0; }\n      .multi-step-nav-collapse-sm .active .multi-step-title + .multi-step-indicator {\n        margin-top: calc(1rem * 1.5); }\n    .multi-step-nav-collapse-sm .active .multi-step-indicator {\n      position: static; }\n    .multi-step-nav-collapse-sm .active .multi-step-indicator-label {\n      display: block;\n      left: 0;\n      max-width: none;\n      position: absolute;\n      right: 0;\n      text-align: center;\n      transform: none;\n      width: auto; }\n    .multi-step-nav-collapse-sm .multi-step-item {\n      margin-bottom: 0;\n      min-width: 2rem;\n      padding-top: 1.75rem; }\n    .multi-step-nav-collapse-sm .multi-step-title {\n      display: none; }\n    .multi-step-nav-collapse-sm .multi-step-indicator-label {\n      display: none; } }\n\n.nav-btn.btn-unstyled,\n.nav-link {\n  color: #007bff;\n  position: relative; }\n  .nav-btn.btn-unstyled:focus,\n  .nav-link:focus {\n    z-index: 1; }\n  .nav-btn.btn-unstyled:focus, .nav-btn.btn-unstyled:hover,\n  .nav-link:focus,\n  .nav-link:hover {\n    color: #0056b3; }\n  .nav-btn.btn-unstyled.disabled,\n  .nav-link.disabled {\n    color: #868e96; }\n  .nav-btn.btn-unstyled.active,\n  .nav-link.active {\n    color: #495057; }\n\n.nav-btn {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  line-height: 1.5;\n  margin: 0.25rem 0.25rem;\n  min-height: 2rem;\n  min-width: 2rem;\n  padding-bottom: 0;\n  padding-top: 0;\n  text-align: center;\n  width: auto; }\n  .nav-btn.btn-link {\n    margin-left: 0;\n    margin-right: 0; }\n  .nav-btn .lexicon-icon {\n    margin-top: 0; }\n\n.nav-btn.disabled,\n.nav-link.disabled {\n  opacity: 1; }\n\n.nav-link.btn-unstyled {\n  padding: 0.5rem 1rem; }\n\n.nav-btn-monospaced {\n  padding: 0; }\n\n.nav-link-monospaced {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0.25rem 0.25rem;\n  min-height: 2rem;\n  min-width: 2rem;\n  padding: 0; }\n  .nav-link-monospaced .lexicon-icon {\n    margin-top: 0; }\n\n.nav-item {\n  word-wrap: break-word; }\n\n.nav-item[class*='col-'] {\n  padding-left: 0;\n  padding-right: 0;\n  text-align: center; }\n\n.nav-text-truncate {\n  display: inline-block;\n  margin-bottom: -6px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.dropdown-toggle .nav-text-truncate {\n  max-width: calc(100% - 24px); }\n\n.nav-stacked {\n  display: block; }\n\n.nav-unstyled {\n  flex-wrap: nowrap; }\n  .nav-unstyled .nav-btn {\n    margin: 0 0.25rem;\n    min-height: 2rem;\n    padding: 0 0.25rem; }\n  .nav-unstyled .nav-link {\n    line-height: 2rem;\n    padding: 0 0.25rem; }\n  .nav-unstyled .nav-link-monospaced {\n    margin: 0 0.25rem; }\n\n.nav-nested {\n  flex-direction: column;\n  flex-wrap: nowrap; }\n  .nav-nested .nav > li > a {\n    padding-left: 2rem; }\n  .nav-nested .nav > li > .nav-equal-height-heading {\n    padding-left: 1rem; }\n  .nav-nested .nav .nav > li > a {\n    padding-left: 3rem; }\n  .nav-nested .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 2rem; }\n  .nav-nested .nav .nav .nav > li > a {\n    padding-left: 4rem; }\n  .nav-nested .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 3rem; }\n  .nav-nested .nav .nav .nav .nav > li > a {\n    padding-left: 5rem; }\n  .nav-nested .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 4rem; }\n  .nav-nested .nav .nav .nav .nav .nav > li > a {\n    padding-left: 6rem; }\n  .nav-nested .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 5rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 7rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 6rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 8rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 7rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 9rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 8rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 10rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 9rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 11rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 10rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 12rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 11rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 13rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 12rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 14rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 13rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 15rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 14rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > a {\n    padding-left: 16rem; }\n  .nav-nested .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav .nav > li > .nav-equal-height-heading {\n    padding-left: 15rem; }\n\n.nav-nested-margins {\n  flex-direction: column;\n  flex-wrap: nowrap; }\n  .nav-nested-margins > li .nav > li {\n    margin-left: 1rem; }\n\n.nav-tabs .nav-link.active {\n  border-color: #ddd; }\n\n.nav-tabs .nav-link {\n  white-space: nowrap; }\n\n.nav-tabs + .tab-content .tab-pane.active:first-child {\n  border-top-left-radius: 0; }\n\n.dropdown-item[data-toggle=\"tab\"] .dropdown-item-indicator {\n  display: none; }\n\n.dropdown-item[data-toggle=\"tab\"].active .dropdown-item-indicator {\n  display: block; }\n\n.nav-underline .nav-link { }\n  .nav-underline .nav-link:after {\n    bottom: 0;\n    display: block;\n    position: absolute;\n    left: 0.5rem;\n    right: 0.5rem;\n    width: auto; }\n\n.nav-underline .nav-item .nav-link.active:after {\n  background-color: #007bff; }\n\n.nav-underline .nav-link.active:after,\n.nav-underline .nav-item.show .nav-link:after {\n  content: \"\";\n  height: 0.1875rem; }\n\n.menubar {\n  position: relative; }\n\n.menubar-toggler {\n  display: none; }\n\n.menubar-vertical-expand-md {\n  max-width: 15.625rem; }\n  @media (max-width: 767px) {\n    .menubar-vertical-expand-md {\n      align-items: center;\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0.0625rem;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      max-width: none;\n      min-height: 3rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem; } }\n  .menubar-vertical-expand-md .menubar-collapse {\n    display: block; }\n    @media (max-width: 767px) {\n      .menubar-vertical-expand-md .menubar-collapse {\n        border-color: transparent;\n        border-style: solid;\n        border-width: 0.0625rem;\n        display: none;\n        left: -0.0625rem;\n        position: absolute;\n        right: -0.0625rem;\n        top: 100%;\n        z-index: 500; }\n        .menubar-vertical-expand-md .menubar-collapse > .nav {\n          margin-bottom: 0.5rem;\n          margin-top: 0.5rem; } }\n    .menubar-vertical-expand-md .menubar-collapse.collapsing, .menubar-vertical-expand-md .menubar-collapse.show {\n      display: block; }\n  @media (max-width: 767px) {\n    .menubar-vertical-expand-md .menubar-toggler {\n      align-items: center;\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0.0625rem;\n      display: flex;\n      height: 2rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem; }\n      .menubar-vertical-expand-md .menubar-toggler .lexicon-icon {\n        margin-top: 0; } }\n\n@media (max-width: 767px) {\n  .menubar-transparent.menubar-vertical-expand-md .menubar-collapse {\n    background-color: #fff;\n    border-color: rgba(0, 0, 0, 0.15);\n    border-radius: 0.25rem; } }\n\n@media (max-width: 767px) {\n  .menubar-transparent.menubar-vertical-expand-md .menubar-toggler {\n    color: rgba(0, 0, 0, 0.9); } }\n\n.menubar-transparent.menubar-vertical-expand-md .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .menubar-transparent.menubar-vertical-expand-md .nav-link:focus, .menubar-transparent.menubar-vertical-expand-md .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  @media (max-width: 767px) {\n    .menubar-transparent.menubar-vertical-expand-md .nav-link {\n      color: #212529; }\n      .menubar-transparent.menubar-vertical-expand-md .nav-link:hover {\n        background-color: #f8f9fa;\n        color: #16181b; } }\n  .menubar-transparent.menubar-vertical-expand-md .nav-link.active {\n    color: rgba(0, 0, 0, 0.9); }\n    @media (max-width: 767px) {\n      .menubar-transparent.menubar-vertical-expand-md .nav-link.active {\n        background-color: #007bff;\n        color: #fff; } }\n  .menubar-transparent.menubar-vertical-expand-md .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n    @media (max-width: 767px) {\n      .menubar-transparent.menubar-vertical-expand-md .nav-link.disabled {\n        background-color: transparent;\n        color: #868e96; } }\n\n.navbar {\n  border-width: 0; }\n  .navbar .container,\n  .navbar .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n\n.navbar-nav {\n  flex-direction: row; }\n  .navbar-nav .dropdown-menu {\n    position: absolute; }\n  .navbar-nav .nav-link {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem; }\n\n.navbar-nav .nav-item > .custom-control,\n.navbar-nav .nav-item > .form-check {\n  margin-bottom: 0;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem; }\n\n.navbar-title {\n  font-size: 1.25rem;\n  font-weight: 500;\n  margin-bottom: 0; }\n\n.navbar-text {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n\n.navbar-collapse {\n  max-width: 100%; }\n  .navbar-collapse .navbar-nav {\n    flex-direction: column; }\n  .navbar-collapse .dropdown-toggle .navbar-text-truncate {\n    max-width: calc(100% - 25px); }\n\n.navbar-text-truncate {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: bottom; }\n\n.navbar-toggler-link {\n  align-items: center;\n  display: flex;\n  border-width: 0;\n  line-height: 1.5;\n  max-width: 100%;\n  padding: 0.3125rem 0.5rem;\n  position: relative; }\n  .navbar-toggler-link:focus {\n    outline: none; }\n  .navbar-toggler-link .lexicon-icon {\n    min-width: 1em;\n    margin-left: 3px;\n    margin-top: 0; }\n\n.navbar-brand {\n  margin-right: 0;\n  max-width: calc(100% - 72px);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n\n.navbar-form {\n  align-items: center;\n  display: flex;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n  .navbar-form > form {\n    width: 100%; }\n  .navbar-form .form-inline .form-control {\n    margin-bottom: 0; }\n\n.navbar-form-autofit {\n  flex-basis: 100px;\n  flex-grow: 1; }\n  .navbar-form-autofit form {\n    display: flex;\n    width: 100%; }\n  .navbar-form-autofit .form-inline {\n    align-items: flex-end;\n    flex: 1;\n    flex-direction: row;\n    width: 100%; }\n  .navbar-form-autofit .form-control {\n    flex: 1;\n    min-width: 50px;\n    width: 100%; }\n\n.navbar-overlay {\n  background-color: #fff; }\n\n.navbar-breakpoint-d-block,\n.navbar-breakpoint-d-inline-block,\n.navbar-breakpoint-d-flex {\n  display: none !important; }\n\n.navbar-expand {\n  flex-wrap: wrap;\n  justify-content: space-between; }\n  .navbar-expand .navbar-nav {\n    flex-wrap: wrap; }\n  .navbar-expand-sm {\n    justify-content: space-between; }\n    .navbar-expand-sm .nav-item {\n      align-items: center;\n      display: flex; }\n    .navbar-expand-sm .nav-item .navbar-text-truncate {\n      max-width: 140px; }\n    .navbar-expand-sm .container,\n    .navbar-expand-sm .container-fluid {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      padding-left: 15px;\n      padding-right: 15px; }\n    .navbar-expand-sm .navbar-collapse .container,\n    .navbar-expand-sm .navbar-collapse .container-fluid {\n      padding-left: 0;\n      padding-right: 0; }\n    @media (max-width: 575px) {\n      .navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n        left: 0;\n        padding: 0 1rem;\n        position: absolute;\n        right: 0;\n        top: 100%;\n        z-index: 500; }\n        .navbar-expand-sm.navbar-collapse-absolute .navbar-collapse .container,\n        .navbar-expand-sm.navbar-collapse-absolute .navbar-collapse .container-fluid {\n          padding-left: 15px;\n          padding-right: 15px; }\n        .navbar-expand-sm.navbar-collapse-absolute .navbar-collapse .navbar-nav:last-child,\n        .navbar-expand-sm.navbar-collapse-absolute .navbar-collapse .navbar-form:last-child {\n          padding-bottom: 0.5rem; }\n      .navbar-expand-sm .navbar-collapse .container,\n      .navbar-expand-sm .navbar-collapse .container-fluid {\n        display: block;\n        padding-left: 0;\n        padding-right: 0; }\n      .navbar-expand-sm .navbar-collapse .nav-item {\n        display: block; }\n      .navbar-expand-sm .navbar-collapse .navbar-text-truncate {\n        max-width: 100%; }\n      .navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-toggle .navbar-text-truncate {\n        max-width: calc(100% - 25px); }\n      .navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n        margin-left: -1rem;\n        margin-right: -1rem; }\n      .navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:focus, .navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n        background-color: transparent; }\n      .navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n        background-color: transparent; }\n      .navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-menu {\n        background-color: transparent;\n        border-width: 0;\n        box-shadow: none;\n        margin: 0;\n        max-height: none;\n        max-width: none;\n        overflow: visible;\n        padding: 0;\n        position: static; }\n      .navbar-expand-sm .show-dropdown-on-collapse .dropdown-header,\n      .navbar-expand-sm .show-dropdown-on-collapse .dropdown-item {\n        padding: 0.5rem 0.5rem; }\n      .navbar-expand-sm .show-dropdown-on-collapse .dropdown-menu {\n        display: block; }\n      .navbar-expand-sm .show-dropdown-on-collapse .dropdown-toggle {\n        display: none; }\n      .navbar-expand-sm .navbar-breakpoint-down-d-block {\n        display: block !important; }\n      .navbar-expand-sm .navbar-breakpoint-down-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-sm .navbar-breakpoint-down-d-flex {\n        display: flex !important; }\n      .navbar-expand-sm .navbar-breakpoint-down-d-none {\n        display: none !important; } }\n    @media (min-width: 576px) {\n      .navbar-expand-sm .navbar-brand .navbar-text-truncate {\n        max-width: 140px; }\n      .navbar-expand-sm .navbar-collapse {\n        flex-grow: 1;\n        flex-wrap: wrap;\n        justify-content: space-between; }\n        .navbar-expand-sm .navbar-collapse .navbar-nav {\n          flex-direction: row;\n          flex-wrap: wrap; }\n        .navbar-expand-sm .navbar-collapse .dropdown-toggle .navbar-text-truncate {\n          max-width: 115px; }\n      .navbar-expand-sm .navbar-breakpoint-d-block {\n        display: block !important; }\n      .navbar-expand-sm .navbar-breakpoint-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-sm .navbar-breakpoint-d-flex {\n        display: flex !important; }\n      .navbar-expand-sm .navbar-breakpoint-d-none {\n        display: none !important; } }\n  .navbar-expand-md {\n    justify-content: space-between; }\n    .navbar-expand-md .nav-item {\n      align-items: center;\n      display: flex; }\n    .navbar-expand-md .nav-item .navbar-text-truncate {\n      max-width: 140px; }\n    .navbar-expand-md .container,\n    .navbar-expand-md .container-fluid {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      padding-left: 15px;\n      padding-right: 15px; }\n    .navbar-expand-md .navbar-collapse .container,\n    .navbar-expand-md .navbar-collapse .container-fluid {\n      padding-left: 0;\n      padding-right: 0; }\n    @media (max-width: 767px) {\n      .navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n        left: 0;\n        padding: 0 1rem;\n        position: absolute;\n        right: 0;\n        top: 100%;\n        z-index: 500; }\n        .navbar-expand-md.navbar-collapse-absolute .navbar-collapse .container,\n        .navbar-expand-md.navbar-collapse-absolute .navbar-collapse .container-fluid {\n          padding-left: 15px;\n          padding-right: 15px; }\n        .navbar-expand-md.navbar-collapse-absolute .navbar-collapse .navbar-nav:last-child,\n        .navbar-expand-md.navbar-collapse-absolute .navbar-collapse .navbar-form:last-child {\n          padding-bottom: 0.5rem; }\n      .navbar-expand-md .navbar-collapse .container,\n      .navbar-expand-md .navbar-collapse .container-fluid {\n        display: block;\n        padding-left: 0;\n        padding-right: 0; }\n      .navbar-expand-md .navbar-collapse .nav-item {\n        display: block; }\n      .navbar-expand-md .navbar-collapse .navbar-text-truncate {\n        max-width: 100%; }\n      .navbar-expand-md .navbar-collapse .navbar-nav .dropdown-toggle .navbar-text-truncate {\n        max-width: calc(100% - 25px); }\n      .navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n        margin-left: -1rem;\n        margin-right: -1rem; }\n      .navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:focus, .navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n        background-color: transparent; }\n      .navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n        background-color: transparent; }\n      .navbar-expand-md .navbar-collapse .navbar-nav .dropdown-menu {\n        background-color: transparent;\n        border-width: 0;\n        box-shadow: none;\n        margin: 0;\n        max-height: none;\n        max-width: none;\n        overflow: visible;\n        padding: 0;\n        position: static; }\n      .navbar-expand-md .show-dropdown-on-collapse .dropdown-header,\n      .navbar-expand-md .show-dropdown-on-collapse .dropdown-item {\n        padding: 0.5rem 0.5rem; }\n      .navbar-expand-md .show-dropdown-on-collapse .dropdown-menu {\n        display: block; }\n      .navbar-expand-md .show-dropdown-on-collapse .dropdown-toggle {\n        display: none; }\n      .navbar-expand-md .navbar-breakpoint-down-d-block {\n        display: block !important; }\n      .navbar-expand-md .navbar-breakpoint-down-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-md .navbar-breakpoint-down-d-flex {\n        display: flex !important; }\n      .navbar-expand-md .navbar-breakpoint-down-d-none {\n        display: none !important; } }\n    @media (min-width: 768px) {\n      .navbar-expand-md .navbar-brand .navbar-text-truncate {\n        max-width: 140px; }\n      .navbar-expand-md .navbar-collapse {\n        flex-grow: 1;\n        flex-wrap: wrap;\n        justify-content: space-between; }\n        .navbar-expand-md .navbar-collapse .navbar-nav {\n          flex-direction: row;\n          flex-wrap: wrap; }\n        .navbar-expand-md .navbar-collapse .dropdown-toggle .navbar-text-truncate {\n          max-width: 115px; }\n      .navbar-expand-md .navbar-breakpoint-d-block {\n        display: block !important; }\n      .navbar-expand-md .navbar-breakpoint-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-md .navbar-breakpoint-d-flex {\n        display: flex !important; }\n      .navbar-expand-md .navbar-breakpoint-d-none {\n        display: none !important; } }\n  .navbar-expand-lg {\n    justify-content: space-between; }\n    .navbar-expand-lg .nav-item {\n      align-items: center;\n      display: flex; }\n    .navbar-expand-lg .nav-item .navbar-text-truncate {\n      max-width: 140px; }\n    .navbar-expand-lg .container,\n    .navbar-expand-lg .container-fluid {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      padding-left: 15px;\n      padding-right: 15px; }\n    .navbar-expand-lg .navbar-collapse .container,\n    .navbar-expand-lg .navbar-collapse .container-fluid {\n      padding-left: 0;\n      padding-right: 0; }\n    @media (max-width: 991px) {\n      .navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n        left: 0;\n        padding: 0 1rem;\n        position: absolute;\n        right: 0;\n        top: 100%;\n        z-index: 500; }\n        .navbar-expand-lg.navbar-collapse-absolute .navbar-collapse .container,\n        .navbar-expand-lg.navbar-collapse-absolute .navbar-collapse .container-fluid {\n          padding-left: 15px;\n          padding-right: 15px; }\n        .navbar-expand-lg.navbar-collapse-absolute .navbar-collapse .navbar-nav:last-child,\n        .navbar-expand-lg.navbar-collapse-absolute .navbar-collapse .navbar-form:last-child {\n          padding-bottom: 0.5rem; }\n      .navbar-expand-lg .navbar-collapse .container,\n      .navbar-expand-lg .navbar-collapse .container-fluid {\n        display: block;\n        padding-left: 0;\n        padding-right: 0; }\n      .navbar-expand-lg .navbar-collapse .nav-item {\n        display: block; }\n      .navbar-expand-lg .navbar-collapse .navbar-text-truncate {\n        max-width: 100%; }\n      .navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-toggle .navbar-text-truncate {\n        max-width: calc(100% - 25px); }\n      .navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n        margin-left: -1rem;\n        margin-right: -1rem; }\n      .navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:focus, .navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n        background-color: transparent; }\n      .navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n        background-color: transparent; }\n      .navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-menu {\n        background-color: transparent;\n        border-width: 0;\n        box-shadow: none;\n        margin: 0;\n        max-height: none;\n        max-width: none;\n        overflow: visible;\n        padding: 0;\n        position: static; }\n      .navbar-expand-lg .show-dropdown-on-collapse .dropdown-header,\n      .navbar-expand-lg .show-dropdown-on-collapse .dropdown-item {\n        padding: 0.5rem 0.5rem; }\n      .navbar-expand-lg .show-dropdown-on-collapse .dropdown-menu {\n        display: block; }\n      .navbar-expand-lg .show-dropdown-on-collapse .dropdown-toggle {\n        display: none; }\n      .navbar-expand-lg .navbar-breakpoint-down-d-block {\n        display: block !important; }\n      .navbar-expand-lg .navbar-breakpoint-down-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-lg .navbar-breakpoint-down-d-flex {\n        display: flex !important; }\n      .navbar-expand-lg .navbar-breakpoint-down-d-none {\n        display: none !important; } }\n    @media (min-width: 992px) {\n      .navbar-expand-lg .navbar-brand .navbar-text-truncate {\n        max-width: 140px; }\n      .navbar-expand-lg .navbar-collapse {\n        flex-grow: 1;\n        flex-wrap: wrap;\n        justify-content: space-between; }\n        .navbar-expand-lg .navbar-collapse .navbar-nav {\n          flex-direction: row;\n          flex-wrap: wrap; }\n        .navbar-expand-lg .navbar-collapse .dropdown-toggle .navbar-text-truncate {\n          max-width: 115px; }\n      .navbar-expand-lg .navbar-breakpoint-d-block {\n        display: block !important; }\n      .navbar-expand-lg .navbar-breakpoint-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-lg .navbar-breakpoint-d-flex {\n        display: flex !important; }\n      .navbar-expand-lg .navbar-breakpoint-d-none {\n        display: none !important; } }\n  .navbar-expand-xl {\n    justify-content: space-between; }\n    .navbar-expand-xl .nav-item {\n      align-items: center;\n      display: flex; }\n    .navbar-expand-xl .nav-item .navbar-text-truncate {\n      max-width: 140px; }\n    .navbar-expand-xl .container,\n    .navbar-expand-xl .container-fluid {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      padding-left: 15px;\n      padding-right: 15px; }\n    .navbar-expand-xl .navbar-collapse .container,\n    .navbar-expand-xl .navbar-collapse .container-fluid {\n      padding-left: 0;\n      padding-right: 0; }\n    @media (max-width: 1199px) {\n      .navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n        left: 0;\n        padding: 0 1rem;\n        position: absolute;\n        right: 0;\n        top: 100%;\n        z-index: 500; }\n        .navbar-expand-xl.navbar-collapse-absolute .navbar-collapse .container,\n        .navbar-expand-xl.navbar-collapse-absolute .navbar-collapse .container-fluid {\n          padding-left: 15px;\n          padding-right: 15px; }\n        .navbar-expand-xl.navbar-collapse-absolute .navbar-collapse .navbar-nav:last-child,\n        .navbar-expand-xl.navbar-collapse-absolute .navbar-collapse .navbar-form:last-child {\n          padding-bottom: 0.5rem; }\n      .navbar-expand-xl .navbar-collapse .container,\n      .navbar-expand-xl .navbar-collapse .container-fluid {\n        display: block;\n        padding-left: 0;\n        padding-right: 0; }\n      .navbar-expand-xl .navbar-collapse .nav-item {\n        display: block; }\n      .navbar-expand-xl .navbar-collapse .navbar-text-truncate {\n        max-width: 100%; }\n      .navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-toggle .navbar-text-truncate {\n        max-width: calc(100% - 25px); }\n      .navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n        margin-left: -1rem;\n        margin-right: -1rem; }\n      .navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:focus, .navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n        background-color: transparent; }\n      .navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n        background-color: transparent; }\n      .navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-menu {\n        background-color: transparent;\n        border-width: 0;\n        box-shadow: none;\n        margin: 0;\n        max-height: none;\n        max-width: none;\n        overflow: visible;\n        padding: 0;\n        position: static; }\n      .navbar-expand-xl .show-dropdown-on-collapse .dropdown-header,\n      .navbar-expand-xl .show-dropdown-on-collapse .dropdown-item {\n        padding: 0.5rem 0.5rem; }\n      .navbar-expand-xl .show-dropdown-on-collapse .dropdown-menu {\n        display: block; }\n      .navbar-expand-xl .show-dropdown-on-collapse .dropdown-toggle {\n        display: none; }\n      .navbar-expand-xl .navbar-breakpoint-down-d-block {\n        display: block !important; }\n      .navbar-expand-xl .navbar-breakpoint-down-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-xl .navbar-breakpoint-down-d-flex {\n        display: flex !important; }\n      .navbar-expand-xl .navbar-breakpoint-down-d-none {\n        display: none !important; } }\n    @media (min-width: 1200px) {\n      .navbar-expand-xl .navbar-brand .navbar-text-truncate {\n        max-width: 140px; }\n      .navbar-expand-xl .navbar-collapse {\n        flex-grow: 1;\n        flex-wrap: wrap;\n        justify-content: space-between; }\n        .navbar-expand-xl .navbar-collapse .navbar-nav {\n          flex-direction: row;\n          flex-wrap: wrap; }\n        .navbar-expand-xl .navbar-collapse .dropdown-toggle .navbar-text-truncate {\n          max-width: 115px; }\n      .navbar-expand-xl .navbar-breakpoint-d-block {\n        display: block !important; }\n      .navbar-expand-xl .navbar-breakpoint-d-inline-block {\n        display: inline-block !important; }\n      .navbar-expand-xl .navbar-breakpoint-d-flex {\n        display: flex !important; }\n      .navbar-expand-xl .navbar-breakpoint-d-none {\n        display: none !important; } }\n  .navbar-expand {\n    justify-content: space-between; }\n    .navbar-expand .nav-item {\n      align-items: center;\n      display: flex; }\n    .navbar-expand .nav-item .navbar-text-truncate {\n      max-width: 140px; }\n    .navbar-expand .container,\n    .navbar-expand .container-fluid {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      padding-left: 15px;\n      padding-right: 15px; }\n    .navbar-expand .navbar-collapse .container,\n    .navbar-expand .navbar-collapse .container-fluid {\n      padding-left: 0;\n      padding-right: 0; }\n\n@media (max-width: 575px) {\n  .navbar-overlay-xs-down {\n    bottom: 0;\n    display: none;\n    justify-content: space-between;\n    left: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 450; }\n    .navbar-overlay-xs-down.show {\n      display: flex; } }\n\n@media (max-width: 767px) {\n  .navbar-overlay-sm-down {\n    bottom: 0;\n    display: none;\n    justify-content: space-between;\n    left: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 450; }\n    .navbar-overlay-sm-down.show {\n      display: flex; } }\n\n@media (max-width: 991px) {\n  .navbar-overlay-md-down {\n    bottom: 0;\n    display: none;\n    justify-content: space-between;\n    left: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 450; }\n    .navbar-overlay-md-down.show {\n      display: flex; } }\n\n@media (max-width: 1199px) {\n  .navbar-overlay-lg-down {\n    bottom: 0;\n    display: none;\n    justify-content: space-between;\n    left: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 450; }\n    .navbar-overlay-lg-down.show {\n      display: flex; } }\n\n.navbar-overlay-up {\n  bottom: 0;\n  display: none;\n  justify-content: space-between;\n  left: 0;\n  margin-left: 0;\n  margin-right: 0;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 450; }\n  .navbar-overlay-up.show {\n    display: flex; }\n\n.navbar-underline .navbar-toggler-link:after {\n  background-color: #007bff;\n  bottom: -0.5rem;\n  content: '';\n  display: block;\n  height: 0.1875rem;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: auto; }\n\n@media (min-width: 576px) {\n  .navbar-underline.navbar-expand-sm .navbar-nav .nav-link.active:after {\n    background-color: #007bff;\n    bottom: -0.5rem;\n    content: '';\n    display: block;\n    height: 0.1875rem;\n    left: 0;\n    position: absolute;\n    right: 0;\n    width: auto; } }\n\n@media (min-width: 768px) {\n  .navbar-underline.navbar-expand-md .navbar-nav .nav-link.active:after {\n    background-color: #007bff;\n    bottom: -0.5rem;\n    content: '';\n    display: block;\n    height: 0.1875rem;\n    left: 0;\n    position: absolute;\n    right: 0;\n    width: auto; } }\n\n@media (min-width: 992px) {\n  .navbar-underline.navbar-expand-lg .navbar-nav .nav-link.active:after {\n    background-color: #007bff;\n    bottom: -0.5rem;\n    content: '';\n    display: block;\n    height: 0.1875rem;\n    left: 0;\n    position: absolute;\n    right: 0;\n    width: auto; } }\n\n@media (min-width: 1200px) {\n  .navbar-underline.navbar-expand-xl .navbar-nav .nav-link.active:after {\n    background-color: #007bff;\n    bottom: -0.5rem;\n    content: '';\n    display: block;\n    height: 0.1875rem;\n    left: 0;\n    position: absolute;\n    right: 0;\n    width: auto; } }\n\n.navbar-underline.navbar-expand .navbar-nav .nav-link.active:after {\n  background-color: #007bff;\n  bottom: -0.5rem;\n  content: '';\n  display: block;\n  height: 0.1875rem;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: auto; }\n\n.navbar-transparent {\n  background-color: #fff;\n  border-color: transparent;\n  border-style: solid; }\n  .navbar-transparent .nav-link,\n  .navbar-transparent .navbar-nav .btn-unstyled {\n    color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent .nav-link:hover,\n    .navbar-transparent .navbar-nav .btn-unstyled:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar-transparent .nav-link.active, .navbar-transparent .nav-link[aria-expanded=\"true\"],\n    .navbar-transparent .navbar-nav .btn-unstyled.active,\n    .navbar-transparent .navbar-nav .btn-unstyled[aria-expanded=\"true\"] {\n      color: rgba(0, 0, 0, 0.9); }\n    .navbar-transparent .nav-link.disabled,\n    .navbar-transparent .navbar-nav .btn-unstyled.disabled {\n      color: rgba(0, 0, 0, 0.3); }\n  .navbar-transparent .navbar-toggler {\n    color: rgba(0, 0, 0, 0.5); }\n  .navbar-transparent .navbar-toggler-link[aria-expanded=\"true\"] {\n    color: rgba(0, 0, 0, 0.9); }\n  .navbar-transparent .navbar-overlay {\n    background-color: #fff; }\n  @media (max-width: 575px) {\n    .navbar-transparent.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      background-color: #fff;\n      border-color: transparent; }\n    .navbar-transparent.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-header,\n    .navbar-transparent.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar-transparent.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navbar-transparent.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 767px) {\n    .navbar-transparent.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      background-color: #fff;\n      border-color: transparent; }\n    .navbar-transparent.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-header,\n    .navbar-transparent.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar-transparent.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navbar-transparent.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 991px) {\n    .navbar-transparent.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      background-color: #fff;\n      border-color: transparent; }\n    .navbar-transparent.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-header,\n    .navbar-transparent.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar-transparent.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navbar-transparent.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 1199px) {\n    .navbar-transparent.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      background-color: #fff;\n      border-color: transparent; }\n    .navbar-transparent.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-header,\n    .navbar-transparent.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navbar-transparent.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navbar-transparent.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navbar-transparent.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n\n.application-bar {\n  flex-wrap: nowrap;\n  border-width: 0 0 0 0;\n  font-size: 1rem;\n  padding: 0 0; }\n  .application-bar .navbar-toggler {\n    font-size: 1.25rem;\n    height: 2.00001rem;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    padding-top: 0.25rem; }\n  .application-bar .navbar-toggler-link {\n    height: auto;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.75rem;\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    padding-top: 0.75rem; }\n  .application-bar .navbar-brand {\n    font-size: 1.25rem;\n    margin-right: 0;\n    padding-bottom: 0.5625rem;\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    padding-top: 0.5625rem; }\n  .application-bar .navbar-nav .nav-btn {\n    margin-bottom: 0.5rem;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    margin-top: 0.5rem;\n    min-height: 2rem;\n    min-width: 2rem; }\n  .application-bar .navbar-nav .nav-item > .custom-control,\n  .application-bar .navbar-nav .nav-item > .form-check {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem; }\n  .application-bar .navbar-nav .nav-link,\n  .application-bar .navbar-nav .navbar-text {\n    margin-bottom: 0.5rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.5rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    padding-top: 0.25rem; }\n  .application-bar .navbar-nav .nav-link-monospaced {\n    margin-bottom: 0.5rem;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    margin-top: 0.5rem;\n    padding: 0; }\n  @media (max-width: 575px) {\n    .application-bar.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0 0;\n      left: 0;\n      margin-top: 0;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .application-bar.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .application-bar.navbar-expand-sm .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n      .application-bar.navbar-expand-sm .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 576px) {\n    .application-bar.navbar-expand-sm .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.25rem;\n      padding-bottom: 0.8125rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.8125rem; }\n    .application-bar.navbar-expand-sm .navbar-form {\n      padding-left: 0.25rem;\n      padding-right: 0.25rem; }\n    .application-bar.navbar-expand-sm .nav-btn {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .application-bar.navbar-expand-sm .nav-item > .custom-control,\n    .application-bar.navbar-expand-sm .nav-item > .form-check {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n    .application-bar.navbar-expand-sm .nav-link,\n    .application-bar.navbar-expand-sm .navbar-text {\n      margin-bottom: 0.75rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.75rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n    .application-bar.navbar-expand-sm .nav-link-monospaced {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      padding: 0; } }\n  @media (max-width: 767px) {\n    .application-bar.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0 0;\n      left: 0;\n      margin-top: 0;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .application-bar.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .application-bar.navbar-expand-md .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n      .application-bar.navbar-expand-md .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 768px) {\n    .application-bar.navbar-expand-md .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.25rem;\n      padding-bottom: 0.8125rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.8125rem; }\n    .application-bar.navbar-expand-md .navbar-form {\n      padding-left: 0.25rem;\n      padding-right: 0.25rem; }\n    .application-bar.navbar-expand-md .nav-btn {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .application-bar.navbar-expand-md .nav-item > .custom-control,\n    .application-bar.navbar-expand-md .nav-item > .form-check {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n    .application-bar.navbar-expand-md .nav-link,\n    .application-bar.navbar-expand-md .navbar-text {\n      margin-bottom: 0.75rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.75rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n    .application-bar.navbar-expand-md .nav-link-monospaced {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      padding: 0; } }\n  @media (max-width: 991px) {\n    .application-bar.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0 0;\n      left: 0;\n      margin-top: 0;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .application-bar.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .application-bar.navbar-expand-lg .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n      .application-bar.navbar-expand-lg .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 992px) {\n    .application-bar.navbar-expand-lg .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.25rem;\n      padding-bottom: 0.8125rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.8125rem; }\n    .application-bar.navbar-expand-lg .navbar-form {\n      padding-left: 0.25rem;\n      padding-right: 0.25rem; }\n    .application-bar.navbar-expand-lg .nav-btn {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .application-bar.navbar-expand-lg .nav-item > .custom-control,\n    .application-bar.navbar-expand-lg .nav-item > .form-check {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n    .application-bar.navbar-expand-lg .nav-link,\n    .application-bar.navbar-expand-lg .navbar-text {\n      margin-bottom: 0.75rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.75rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n    .application-bar.navbar-expand-lg .nav-link-monospaced {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      padding: 0; } }\n  @media (max-width: 1199px) {\n    .application-bar.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0 0;\n      left: 0;\n      margin-top: 0;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .application-bar.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .application-bar.navbar-expand-xl .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n      .application-bar.navbar-expand-xl .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 1200px) {\n    .application-bar.navbar-expand-xl .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.25rem;\n      padding-bottom: 0.8125rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.8125rem; }\n    .application-bar.navbar-expand-xl .navbar-form {\n      padding-left: 0.25rem;\n      padding-right: 0.25rem; }\n    .application-bar.navbar-expand-xl .nav-btn {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .application-bar.navbar-expand-xl .nav-item > .custom-control,\n    .application-bar.navbar-expand-xl .nav-item > .form-check {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n    .application-bar.navbar-expand-xl .nav-link,\n    .application-bar.navbar-expand-xl .navbar-text {\n      margin-bottom: 0.75rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.75rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.25rem;\n      padding-right: 0.25rem;\n      padding-top: 0.25rem; }\n    .application-bar.navbar-expand-xl .nav-link-monospaced {\n      margin-bottom: 0.75rem;\n      margin-left: 0.25rem;\n      margin-right: 0.25rem;\n      margin-top: 0.75rem;\n      padding: 0; } }\n  .application-bar.navbar-expand .navbar-brand {\n    font-size: 1.25rem;\n    margin-right: 0.25rem;\n    padding-bottom: 0.8125rem;\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    padding-top: 0.8125rem; }\n  .application-bar.navbar-expand .navbar-form {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem; }\n  .application-bar.navbar-expand .nav-btn {\n    margin-bottom: 0.75rem;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    margin-top: 0.75rem;\n    min-height: 2rem;\n    min-width: 2rem; }\n  .application-bar.navbar-expand .nav-item > .custom-control,\n  .application-bar.navbar-expand .nav-item > .form-check {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem; }\n  .application-bar.navbar-expand .nav-link,\n  .application-bar.navbar-expand .navbar-text {\n    margin-bottom: 0.75rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.75rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    padding-top: 0.25rem; }\n  .application-bar.navbar-expand .nav-link-monospaced {\n    margin-bottom: 0.75rem;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    margin-top: 0.75rem;\n    padding: 0; }\n  @media (max-width: 575px) {\n    .application-bar .navbar-overlay-xs-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 767px) {\n    .application-bar .navbar-overlay-sm-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 991px) {\n    .application-bar .navbar-overlay-md-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 1199px) {\n    .application-bar .navbar-overlay-lg-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  .application-bar .navbar-overlay-up {\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0; }\n  .application-bar.navbar-underline .navbar-toggler-link:after {\n    bottom: -0.5rem;\n    height: 0.125rem; }\n  @media (min-width: 576px) {\n    .application-bar.navbar-underline.navbar-expand-sm .navbar-nav .nav-link.active:after {\n      bottom: -0.75rem;\n      height: 0.125rem; } }\n  @media (min-width: 768px) {\n    .application-bar.navbar-underline.navbar-expand-md .navbar-nav .nav-link.active:after {\n      bottom: -0.75rem;\n      height: 0.125rem; } }\n  @media (min-width: 992px) {\n    .application-bar.navbar-underline.navbar-expand-lg .navbar-nav .nav-link.active:after {\n      bottom: -0.75rem;\n      height: 0.125rem; } }\n  @media (min-width: 1200px) {\n    .application-bar.navbar-underline.navbar-expand-xl .navbar-nav .nav-link.active:after {\n      bottom: -0.75rem;\n      height: 0.125rem; } }\n  .application-bar.navbar-underline.navbar-expand .navbar-nav .nav-link.active:after {\n    bottom: -0.75rem;\n    height: 0.125rem; }\n  .application-bar .container,\n  .application-bar .container-fluid {\n    flex-wrap: nowrap; }\n  .application-bar .navbar-nav {\n    flex-wrap: nowrap; }\n\n.application-bar-dark {\n  background-color: #343a40;\n  border-color: transparent;\n  border-style: solid;\n  color: rgba(255, 255, 255, 0.5); }\n  .application-bar-dark .nav-link,\n  .application-bar-dark .navbar-nav .btn-unstyled {\n    color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark .nav-link:hover,\n    .application-bar-dark .navbar-nav .btn-unstyled:hover {\n      color: rgba(255, 255, 255, 0.75); }\n    .application-bar-dark .nav-link.active, .application-bar-dark .nav-link[aria-expanded=\"true\"],\n    .application-bar-dark .navbar-nav .btn-unstyled.active,\n    .application-bar-dark .navbar-nav .btn-unstyled[aria-expanded=\"true\"] {\n      color: #fff; }\n    .application-bar-dark .nav-link.disabled,\n    .application-bar-dark .navbar-nav .btn-unstyled.disabled {\n      color: rgba(255, 255, 255, 0.25); }\n  .application-bar-dark .navbar-toggler {\n    color: rgba(255, 255, 255, 0.5); }\n  .application-bar-dark .navbar-toggler-link[aria-expanded=\"true\"] {\n    color: #fff; }\n  .application-bar-dark .navbar-overlay {\n    background-color: #343a40; }\n  @media (max-width: 575px) {\n    .application-bar-dark.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      background-color: #343a40;\n      border-color: transparent; }\n    .application-bar-dark.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-header,\n    .application-bar-dark.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.75); }\n    .application-bar-dark.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: #fff; }\n    .application-bar-dark.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n  @media (max-width: 767px) {\n    .application-bar-dark.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      background-color: #343a40;\n      border-color: transparent; }\n    .application-bar-dark.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-header,\n    .application-bar-dark.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.75); }\n    .application-bar-dark.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: #fff; }\n    .application-bar-dark.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n  @media (max-width: 991px) {\n    .application-bar-dark.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      background-color: #343a40;\n      border-color: transparent; }\n    .application-bar-dark.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-header,\n    .application-bar-dark.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.75); }\n    .application-bar-dark.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: #fff; }\n    .application-bar-dark.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n  @media (max-width: 1199px) {\n    .application-bar-dark.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      background-color: #343a40;\n      border-color: transparent; }\n    .application-bar-dark.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-header,\n    .application-bar-dark.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.5); }\n    .application-bar-dark.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.75); }\n    .application-bar-dark.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: #fff; }\n    .application-bar-dark.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n\n.management-bar {\n  border-width: 0 0 0.0625rem 0;\n  font-size: 1rem;\n  padding: 0 0; }\n  .management-bar .navbar-toggler {\n    font-size: 1.25rem;\n    height: 2.00001rem;\n    margin-left: 0.875rem;\n    margin-right: 0.875rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    padding-top: 0.25rem; }\n  .management-bar .navbar-toggler-link {\n    height: auto;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.71875rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.71875rem; }\n  .management-bar .navbar-brand {\n    font-size: 1.25rem;\n    margin-right: 0;\n    padding-bottom: 0.53125rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.53125rem; }\n  .management-bar .navbar-nav .nav-btn {\n    margin-bottom: 0.46875rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.46875rem;\n    min-height: 2rem;\n    min-width: 2rem; }\n  .management-bar .navbar-nav .nav-item > .custom-control,\n  .management-bar .navbar-nav .nav-item > .form-check {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem; }\n  .management-bar .navbar-nav .nav-link,\n  .management-bar .navbar-nav .navbar-text {\n    margin-bottom: 0.46875rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.46875rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.25rem; }\n  .management-bar .navbar-nav .nav-link-monospaced {\n    margin-bottom: 0.46875rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.46875rem;\n    padding: 0; }\n  .management-bar .dropdown-menu {\n    margin-top: 0; }\n  @media (max-width: 575px) {\n    .management-bar.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .management-bar.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .management-bar.navbar-expand-sm .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n      .management-bar.navbar-expand-sm .navbar-form .form-control {\n        height: 2rem;\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 576px) {\n    .management-bar.navbar-expand-sm .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.5rem;\n      padding-bottom: 1.03125rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 1.03125rem; }\n    .management-bar.navbar-expand-sm .navbar-form {\n      padding-left: 0.5rem;\n      padding-right: 0.5rem; }\n    .management-bar.navbar-expand-sm .nav-btn {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .management-bar.navbar-expand-sm .nav-item > .custom-control,\n    .management-bar.navbar-expand-sm .nav-item > .form-check {\n      margin-left: 0.5rem;\n      margin-right: 0.5rem; }\n    .management-bar.navbar-expand-sm .nav-link,\n    .management-bar.navbar-expand-sm .navbar-text {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n    .management-bar.navbar-expand-sm .nav-link-monospaced {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding: 0; } }\n  @media (max-width: 767px) {\n    .management-bar.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .management-bar.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .management-bar.navbar-expand-md .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n      .management-bar.navbar-expand-md .navbar-form .form-control {\n        height: 2rem;\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 768px) {\n    .management-bar.navbar-expand-md .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.5rem;\n      padding-bottom: 1.03125rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 1.03125rem; }\n    .management-bar.navbar-expand-md .navbar-form {\n      padding-left: 0.5rem;\n      padding-right: 0.5rem; }\n    .management-bar.navbar-expand-md .nav-btn {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .management-bar.navbar-expand-md .nav-item > .custom-control,\n    .management-bar.navbar-expand-md .nav-item > .form-check {\n      margin-left: 0.5rem;\n      margin-right: 0.5rem; }\n    .management-bar.navbar-expand-md .nav-link,\n    .management-bar.navbar-expand-md .navbar-text {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n    .management-bar.navbar-expand-md .nav-link-monospaced {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding: 0; } }\n  @media (max-width: 991px) {\n    .management-bar.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .management-bar.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .management-bar.navbar-expand-lg .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n      .management-bar.navbar-expand-lg .navbar-form .form-control {\n        height: 2rem;\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 992px) {\n    .management-bar.navbar-expand-lg .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.5rem;\n      padding-bottom: 1.03125rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 1.03125rem; }\n    .management-bar.navbar-expand-lg .navbar-form {\n      padding-left: 0.5rem;\n      padding-right: 0.5rem; }\n    .management-bar.navbar-expand-lg .nav-btn {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .management-bar.navbar-expand-lg .nav-item > .custom-control,\n    .management-bar.navbar-expand-lg .nav-item > .form-check {\n      margin-left: 0.5rem;\n      margin-right: 0.5rem; }\n    .management-bar.navbar-expand-lg .nav-link,\n    .management-bar.navbar-expand-lg .navbar-text {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n    .management-bar.navbar-expand-lg .nav-link-monospaced {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding: 0; } }\n  @media (max-width: 1199px) {\n    .management-bar.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .management-bar.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .management-bar.navbar-expand-xl .navbar-form {\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n      .management-bar.navbar-expand-xl .navbar-form .form-control {\n        height: 2rem;\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (min-width: 1200px) {\n    .management-bar.navbar-expand-xl .navbar-brand {\n      font-size: 1.25rem;\n      margin-right: 0.5rem;\n      padding-bottom: 1.03125rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 1.03125rem; }\n    .management-bar.navbar-expand-xl .navbar-form {\n      padding-left: 0.5rem;\n      padding-right: 0.5rem; }\n    .management-bar.navbar-expand-xl .nav-btn {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      min-height: 2rem;\n      min-width: 2rem; }\n    .management-bar.navbar-expand-xl .nav-item > .custom-control,\n    .management-bar.navbar-expand-xl .nav-item > .form-check {\n      margin-left: 0.5rem;\n      margin-right: 0.5rem; }\n    .management-bar.navbar-expand-xl .nav-link,\n    .management-bar.navbar-expand-xl .navbar-text {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding-bottom: 0.25rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      padding-top: 0.25rem; }\n    .management-bar.navbar-expand-xl .nav-link-monospaced {\n      margin-bottom: 0.96875rem;\n      margin-left: 0.5rem;\n      margin-right: 0.5rem;\n      margin-top: 0.96875rem;\n      padding: 0; } }\n  .management-bar.navbar-expand .navbar-brand {\n    font-size: 1.25rem;\n    margin-right: 0.5rem;\n    padding-bottom: 1.03125rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 1.03125rem; }\n  .management-bar.navbar-expand .navbar-form {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem; }\n  .management-bar.navbar-expand .nav-btn {\n    margin-bottom: 0.96875rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.96875rem;\n    min-height: 2rem;\n    min-width: 2rem; }\n  .management-bar.navbar-expand .nav-item > .custom-control,\n  .management-bar.navbar-expand .nav-item > .form-check {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem; }\n  .management-bar.navbar-expand .nav-link,\n  .management-bar.navbar-expand .navbar-text {\n    margin-bottom: 0.96875rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.96875rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 0.25rem; }\n  .management-bar.navbar-expand .nav-link-monospaced {\n    margin-bottom: 0.96875rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0.96875rem;\n    padding: 0; }\n  @media (max-width: 575px) {\n    .management-bar .navbar-overlay-xs-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 767px) {\n    .management-bar .navbar-overlay-sm-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 991px) {\n    .management-bar .navbar-overlay-md-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 1199px) {\n    .management-bar .navbar-overlay-lg-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  .management-bar .navbar-overlay-up {\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0; }\n  .management-bar.navbar-underline .navbar-toggler-link:after {\n    bottom: -0.53125rem;\n    height: 0.25rem; }\n  @media (min-width: 576px) {\n    .management-bar.navbar-underline.navbar-expand-sm .navbar-nav .nav-link.active:after {\n      bottom: -1.03125rem;\n      height: 0.25rem; } }\n  @media (min-width: 768px) {\n    .management-bar.navbar-underline.navbar-expand-md .navbar-nav .nav-link.active:after {\n      bottom: -1.03125rem;\n      height: 0.25rem; } }\n  @media (min-width: 992px) {\n    .management-bar.navbar-underline.navbar-expand-lg .navbar-nav .nav-link.active:after {\n      bottom: -1.03125rem;\n      height: 0.25rem; } }\n  @media (min-width: 1200px) {\n    .management-bar.navbar-underline.navbar-expand-xl .navbar-nav .nav-link.active:after {\n      bottom: -1.03125rem;\n      height: 0.25rem; } }\n  .management-bar.navbar-underline.navbar-expand .navbar-nav .nav-link.active:after {\n    bottom: -1.03125rem;\n    height: 0.25rem; }\n\n.management-bar-light {\n  background-color: #f8f9fa;\n  border-color: transparent;\n  border-style: solid; }\n  .management-bar-light .nav-link,\n  .management-bar-light .navbar-nav .btn-unstyled {\n    color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light .nav-link:hover,\n    .management-bar-light .navbar-nav .btn-unstyled:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-light .nav-link.active, .management-bar-light .nav-link[aria-expanded=\"true\"],\n    .management-bar-light .navbar-nav .btn-unstyled.active,\n    .management-bar-light .navbar-nav .btn-unstyled[aria-expanded=\"true\"] {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-light .nav-link.disabled,\n    .management-bar-light .navbar-nav .btn-unstyled.disabled {\n      color: rgba(0, 0, 0, 0.3); }\n  .management-bar-light .navbar-toggler {\n    color: rgba(0, 0, 0, 0.5); }\n  .management-bar-light .navbar-toggler-link[aria-expanded=\"true\"] {\n    color: rgba(0, 0, 0, 0.9); }\n  .management-bar-light .navbar-overlay {\n    background-color: #f8f9fa; }\n  @media (max-width: 575px) {\n    .management-bar-light.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .management-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 767px) {\n    .management-bar-light.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .management-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 991px) {\n    .management-bar-light.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .management-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 1199px) {\n    .management-bar-light.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .management-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n\n.management-bar-primary {\n  background-color: #dcedff;\n  border-color: #007bff;\n  border-style: solid;\n  color: rgba(0, 0, 0, 0.5); }\n  .management-bar-primary .nav-link,\n  .management-bar-primary .navbar-nav .btn-unstyled {\n    color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary .nav-link:hover,\n    .management-bar-primary .navbar-nav .btn-unstyled:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-primary .nav-link.active, .management-bar-primary .nav-link[aria-expanded=\"true\"],\n    .management-bar-primary .navbar-nav .btn-unstyled.active,\n    .management-bar-primary .navbar-nav .btn-unstyled[aria-expanded=\"true\"] {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-primary .nav-link.disabled,\n    .management-bar-primary .navbar-nav .btn-unstyled.disabled {\n      color: rgba(0, 0, 0, 0.3); }\n  .management-bar-primary .navbar-toggler {\n    color: rgba(0, 0, 0, 0.5); }\n  .management-bar-primary .navbar-toggler-link[aria-expanded=\"true\"] {\n    color: rgba(0, 0, 0, 0.9); }\n  .management-bar-primary .navbar-overlay {\n    background-color: #dcedff; }\n  @media (max-width: 575px) {\n    .management-bar-primary.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      background-color: #dcedff;\n      border-color: #007bff; }\n    .management-bar-primary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-primary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-primary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-primary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 767px) {\n    .management-bar-primary.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      background-color: #dcedff;\n      border-color: #007bff; }\n    .management-bar-primary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-primary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-primary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-primary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 991px) {\n    .management-bar-primary.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      background-color: #dcedff;\n      border-color: #007bff; }\n    .management-bar-primary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-primary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-primary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-primary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 1199px) {\n    .management-bar-primary.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      background-color: #dcedff;\n      border-color: #007bff; }\n    .management-bar-primary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-header,\n    .management-bar-primary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .management-bar-primary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .management-bar-primary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .management-bar-primary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n\n.navigation-bar {\n  border-width: 0 0 0.0625rem 0;\n  font-size: 1rem;\n  padding: 0 0; }\n  .navigation-bar .navbar-toggler {\n    font-size: 1.25rem;\n    height: 2.00001rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    padding-bottom: 0.25rem;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    padding-top: 0.25rem; }\n  .navigation-bar .navbar-toggler-link {\n    height: auto;\n    font-size: 1rem;\n    line-height: 1.5;\n    margin-left: 0;\n    margin-right: 0;\n    padding-bottom: 0.71875rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.71875rem; }\n  .navigation-bar .navbar-brand {\n    font-size: 1.25rem;\n    margin-right: 0;\n    padding-bottom: 0.53125rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.53125rem; }\n  .navigation-bar .navbar-nav .nav-btn {\n    margin-bottom: 0.46875rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.46875rem;\n    min-height: 2rem;\n    min-width: 2rem; }\n  .navigation-bar .navbar-nav .nav-item > .custom-control,\n  .navigation-bar .navbar-nav .nav-item > .form-check {\n    margin-left: 1rem;\n    margin-right: 1rem; }\n  .navigation-bar .navbar-nav .nav-link,\n  .navigation-bar .navbar-nav .navbar-text {\n    margin-bottom: 0rem;\n    margin-top: 0rem;\n    padding-bottom: 0.71875rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.71875rem; }\n  .navigation-bar .navbar-nav .nav-link-monospaced {\n    margin-bottom: 0.46875rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 0.46875rem;\n    padding: 0; }\n  .navigation-bar .dropdown-menu {\n    margin-top: 0; }\n  @media (max-width: 575px) {\n    .navigation-bar.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .navigation-bar.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .navigation-bar.navbar-expand-sm .navbar-form {\n      padding-bottom: 0.71875rem;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      padding-top: 0.71875rem; }\n      .navigation-bar.navbar-expand-sm .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (max-width: 767px) {\n    .navigation-bar.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .navigation-bar.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .navigation-bar.navbar-expand-md .navbar-form {\n      padding-bottom: 0.71875rem;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      padding-top: 0.71875rem; }\n      .navigation-bar.navbar-expand-md .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (max-width: 991px) {\n    .navigation-bar.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .navigation-bar.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .navigation-bar.navbar-expand-lg .navbar-form {\n      padding-bottom: 0.71875rem;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      padding-top: 0.71875rem; }\n      .navigation-bar.navbar-expand-lg .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (max-width: 1199px) {\n    .navigation-bar.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      border-color: transparent;\n      border-style: solid;\n      border-width: 0 0 0.0625rem 0;\n      left: 0;\n      margin-top: 0.0625rem;\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0;\n      right: 0; }\n    .navigation-bar.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      margin-left: 0;\n      margin-right: 0; }\n    .navigation-bar.navbar-expand-xl .navbar-form {\n      padding-bottom: 0.71875rem;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      padding-top: 0.71875rem; }\n      .navigation-bar.navbar-expand-xl .navbar-form .form-control {\n        padding-bottom: 0;\n        padding-top: 0; } }\n  @media (max-width: 575px) {\n    .navigation-bar .navbar-overlay-xs-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 767px) {\n    .navigation-bar .navbar-overlay-sm-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 991px) {\n    .navigation-bar .navbar-overlay-md-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  @media (max-width: 1199px) {\n    .navigation-bar .navbar-overlay-lg-down {\n      padding-bottom: 0;\n      padding-left: 0;\n      padding-right: 0;\n      padding-top: 0; } }\n  .navigation-bar .navbar-overlay-up {\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0; }\n  .navigation-bar.navbar-underline .navbar-toggler-link:after {\n    bottom: -0.0625rem;\n    height: 0.25rem; }\n  @media (min-width: 576px) {\n    .navigation-bar.navbar-underline.navbar-expand-sm .navbar-nav .nav-link.active:after {\n      bottom: -0.0625rem;\n      height: 0.25rem; } }\n  @media (min-width: 768px) {\n    .navigation-bar.navbar-underline.navbar-expand-md .navbar-nav .nav-link.active:after {\n      bottom: -0.0625rem;\n      height: 0.25rem; } }\n  @media (min-width: 992px) {\n    .navigation-bar.navbar-underline.navbar-expand-lg .navbar-nav .nav-link.active:after {\n      bottom: -0.0625rem;\n      height: 0.25rem; } }\n  @media (min-width: 1200px) {\n    .navigation-bar.navbar-underline.navbar-expand-xl .navbar-nav .nav-link.active:after {\n      bottom: -0.0625rem;\n      height: 0.25rem; } }\n  .navigation-bar.navbar-underline.navbar-expand .navbar-nav .nav-link.active:after {\n    bottom: -0.0625rem;\n    height: 0.25rem; }\n\n.navigation-bar-light {\n  background-color: #f8f9fa;\n  border-color: transparent;\n  border-style: solid; }\n  .navigation-bar-light .nav-link,\n  .navigation-bar-light .navbar-nav .btn-unstyled {\n    color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light .nav-link:hover,\n    .navigation-bar-light .navbar-nav .btn-unstyled:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navigation-bar-light .nav-link.active, .navigation-bar-light .nav-link[aria-expanded=\"true\"],\n    .navigation-bar-light .navbar-nav .btn-unstyled.active,\n    .navigation-bar-light .navbar-nav .btn-unstyled[aria-expanded=\"true\"] {\n      color: rgba(0, 0, 0, 0.9); }\n    .navigation-bar-light .nav-link.disabled,\n    .navigation-bar-light .navbar-nav .btn-unstyled.disabled {\n      color: rgba(0, 0, 0, 0.3); }\n  .navigation-bar-light .navbar-toggler {\n    color: rgba(0, 0, 0, 0.5); }\n  .navigation-bar-light .navbar-toggler-link[aria-expanded=\"true\"] {\n    color: rgba(0, 0, 0, 0.9); }\n  .navigation-bar-light .navbar-overlay {\n    background-color: #f8f9fa; }\n  @media (max-width: 575px) {\n    .navigation-bar-light.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .navigation-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navigation-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navigation-bar-light.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 767px) {\n    .navigation-bar-light.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .navigation-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navigation-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navigation-bar-light.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 991px) {\n    .navigation-bar-light.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .navigation-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navigation-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navigation-bar-light.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n  @media (max-width: 1199px) {\n    .navigation-bar-light.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      background-color: #f8f9fa;\n      border-color: transparent; }\n    .navigation-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(0, 0, 0, 0.5); }\n    .navigation-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(0, 0, 0, 0.7); }\n    .navigation-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(0, 0, 0, 0.9); }\n    .navigation-bar-light.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(0, 0, 0, 0.3); } }\n\n.navigation-bar-secondary {\n  background-color: #868e96;\n  border-color: transparent;\n  border-style: solid;\n  color: #FFF; }\n  .navigation-bar-secondary .nav-link,\n  .navigation-bar-secondary .navbar-nav .btn-unstyled {\n    color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary .nav-link:hover,\n    .navigation-bar-secondary .navbar-nav .btn-unstyled:hover {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary .nav-link.active, .navigation-bar-secondary .nav-link[aria-expanded=\"true\"],\n    .navigation-bar-secondary .navbar-nav .btn-unstyled.active,\n    .navigation-bar-secondary .navbar-nav .btn-unstyled[aria-expanded=\"true\"] {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary .nav-link.disabled,\n    .navigation-bar-secondary .navbar-nav .btn-unstyled.disabled {\n      color: rgba(255, 255, 255, 0.25); }\n  .navigation-bar-secondary .navbar-brand {\n    color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary .navbar-brand:hover {\n      color: rgba(255, 255, 255, 0.9); }\n  .navigation-bar-secondary .navbar-toggler {\n    color: rgba(255, 255, 255, 0.65); }\n  .navigation-bar-secondary .navbar-toggler-link[aria-expanded=\"true\"] {\n    color: rgba(255, 255, 255, 0.9); }\n  .navigation-bar-secondary .navbar-overlay {\n    background-color: #868e96; }\n  @media (max-width: 575px) {\n    .navigation-bar-secondary.navbar-expand-sm.navbar-collapse-absolute .navbar-collapse {\n      background-color: #868e96;\n      border-color: transparent; }\n    .navigation-bar-secondary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-secondary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-sm .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n  @media (max-width: 767px) {\n    .navigation-bar-secondary.navbar-expand-md.navbar-collapse-absolute .navbar-collapse {\n      background-color: #868e96;\n      border-color: transparent; }\n    .navigation-bar-secondary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-secondary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-md .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n  @media (max-width: 991px) {\n    .navigation-bar-secondary.navbar-expand-lg.navbar-collapse-absolute .navbar-collapse {\n      background-color: #868e96;\n      border-color: transparent; }\n    .navigation-bar-secondary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-secondary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-lg .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n  @media (max-width: 1199px) {\n    .navigation-bar-secondary.navbar-expand-xl.navbar-collapse-absolute .navbar-collapse {\n      background-color: #868e96;\n      border-color: transparent; }\n    .navigation-bar-secondary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-header,\n    .navigation-bar-secondary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item {\n      color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-divider {\n      border-color: rgba(255, 255, 255, 0.65); }\n    .navigation-bar-secondary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item:hover {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.active {\n      color: rgba(255, 255, 255, 0.9); }\n    .navigation-bar-secondary.navbar-expand-xl .navbar-collapse .navbar-nav .dropdown-item.disabled {\n      color: rgba(255, 255, 255, 0.25); } }\n\n.pagination {\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem; }\n\n.pagination-bar {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap; }\n\n.page-link:focus {\n  z-index: 3; }\n\n.page-link.btn-unstyled {\n  background-color: #fff;\n  border-width: 1px;\n  line-height: 1.25;\n  max-width: none;\n  padding: 0.5rem 0.75rem; }\n\n.pagination-items-per-page {\n  margin-bottom: 0.5rem; }\n  .pagination-items-per-page > a,\n  .pagination-items-per-page > .btn-unstyled {\n    border-color: #ddd;\n    border-radius: 0.25rem;\n    border-style: solid;\n    border-width: 1px;\n    color: #007bff;\n    display: block;\n    line-height: 1.25;\n    padding: 0.5rem 0.75rem;\n    text-decoration: none; }\n    .pagination-items-per-page > a:focus, .pagination-items-per-page > a:hover,\n    .pagination-items-per-page > .btn-unstyled:focus,\n    .pagination-items-per-page > .btn-unstyled:hover {\n      background-color: #e9ecef;\n      border-color: #ddd;\n      color: #0056b3; }\n\n.show.page-item .dropdown-toggle, .show.pagination-items-per-page .dropdown-toggle {\n  background-color: #007bff;\n  border-color: #007bff;\n  color: #fff; }\n\n.pagination-results {\n  border-color: transparent;\n  border-style: solid;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.5rem;\n  margin-right: auto;\n  padding: 0.5rem 0.75rem; }\n\n.pagination-sm .pagination-items-per-page > a,\n.pagination-sm .pagination-items-per-page > .btn-unstyled,\n.pagination-sm .pagination-results {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.25rem 0.75rem; }\n\n.pagination-sm .page-link {\n  font-size: 0.875rem;\n  line-height: 1.5; }\n  .pagination-sm .page-link.btn-unstyled {\n    padding: 0.25rem 0.5rem; }\n\n.pagination-lg .pagination-items-per-page > a,\n.pagination-lg .pagination-items-per-page > .btn-unstyled,\n.pagination-lg .pagination-results {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  padding: 0.75rem 0.75rem; }\n\n.pagination-lg .page-link {\n  font-size: 1.25rem;\n  line-height: 1.5; }\n  .pagination-lg .page-link.btn-unstyled {\n    padding: 0.75rem 1.5rem; }\n\n.panel {\n  background-color: #FFF;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 1px 1px 1px 1px;\n  border-radius: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n  word-wrap: break-word; }\n\n.panel-header {\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n  line-height: normal;\n  padding: 0.75rem 1.25rem;\n  position: relative; }\n\n.panel-header-link {\n  color: inherit;\n  display: block;\n  padding: 0.75rem 1.25rem; }\n  .panel-header-link:hover {\n    color: inherit; }\n  .panel-header-link:focus {\n    z-index: 1; }\n  .panel-header-link .collapse-icon {\n    padding-right: 2.28125rem; }\n\n.panel-body {\n  padding: 0.75rem 1.25rem; }\n\n.panel-footer {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n  border-top: 1px solid transparent;\n  padding: 0.75rem 1.25rem; }\n\n.panel-title {\n  font-weight: 500; }\n\n.panel .collapse-icon-closed,\n.panel .collapse-icon-open {\n  font-size: 0.875rem; }\n\n.panel-group {\n  background-color: #FFF;\n  border-radius: 0.25rem; }\n  .panel-group .panel {\n    margin-bottom: -1px; }\n    .panel-group .panel:first-child:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0; }\n    .panel-group .panel:last-child:not(:first-child) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n      .panel-group .panel:last-child:not(:first-child) > .panel-header.collapsed {\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        transition: border-radius 1s ease; }\n    .panel-group .panel:not(:first-child):not(:last-child) {\n      border-radius: 0; }\n    .panel-group .panel:only-child .panel-header.collapsed {\n      border-radius: 0.25rem;\n      transition: border-radius 1s ease; }\n  .panel-group .panel:not(:first-child) {\n    margin-top: -1px; }\n    .panel-group .panel:not(:first-child) .panel-header {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n  .panel-group .panel-header {\n    border-bottom-width: 0; }\n    .panel-group .panel-header + .panel-collapse > .panel-body {\n      border-top: 1px solid transparent; }\n\n.panel-group-fluid .panel {\n  border-left-width: 0;\n  border-right-width: 0; }\n  .panel-group-fluid .panel:first-child, .panel-group-fluid .panel:last-child {\n    border-radius: 0; }\n\n.panel-group-fluid-first .panel {\n  border-left-width: 0;\n  border-right-width: 0; }\n  .panel-group-fluid-first .panel:first-child {\n    border-top-width: 0; }\n  .panel-group-fluid-first .panel:last-child {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.panel-group-fluid-last .panel {\n  border-left-width: 0;\n  border-right-width: 0; }\n  .panel-group-fluid-last .panel:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  .panel-group-fluid-last .panel:last-child {\n    border-bottom-width: 0; }\n\n.card-body > .panel-group-fluid,\n.card-body > .panel-group-fluid-first,\n.card-body > .panel-group-fluid-last {\n  margin-left: -1.25rem;\n  margin-right: -1.25rem; }\n\n.form-container > .panel-group-fluid {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem; }\n\n.form-container > .panel-group-fluid-first {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n  margin-top: -1.5rem; }\n\n.form-container > .panel-group-fluid-last {\n  margin-bottom: -1.5rem;\n  margin-left: -1.5rem;\n  margin-right: -1.5rem; }\n\n.panel-secondary {\n  border-color: rgba(0, 0, 0, 0.125); }\n  .panel-secondary .panel-header {\n    background-color: #f8f9fa;\n    border-color: rgba(0, 0, 0, 0.125); }\n    .panel-group .panel-secondary .panel-header + .panel-collapse > .panel-body {\n      border-color: rgba(0, 0, 0, 0.125); }\n  .panel-secondary .panel-footer {\n    background-color: #f8f9fa;\n    border-color: rgba(0, 0, 0, 0.125); }\n\n.popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n  border-bottom-color: #f7f7f7; }\n\n.popover .inline-scroller {\n  max-height: 14.75rem; }\n\n.popover-header {\n  font-weight: 500; }\n\n.popover-body {\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px); }\n\n.progress {\n  flex-grow: 1;\n  min-width: 6.25rem; }\n\n.progress-lg,\n.progress-lg > .progress {\n  border-radius: 0.25rem;\n  font-size: 1.25rem;\n  height: 2rem;\n  line-height: 2rem; }\n\n.progress-group {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap; }\n\n.progress-group-addon {\n  margin-right: 1rem;\n  text-align: center; }\n  .progress-group-addon:first-child {\n    padding-left: 0; }\n  .progress-group-addon:last-child {\n    padding-right: 0; }\n\n.progress ~ .progress-group-addon {\n  margin-left: 1rem;\n  margin-right: 0; }\n\n.progress-group-feedback {\n  color: #007bff; }\n\n.progress-group-stacked {\n  display: block; }\n  .progress-group-stacked .progress-group-addon {\n    margin-left: 0;\n    margin-right: 0; }\n\n.progress-success .progress-bar {\n  background-color: #28a745; }\n\n.progress-success .progress-group-feedback {\n  color: #28a745; }\n\n.progress-info .progress-bar {\n  background-color: #17a2b8; }\n\n.progress-info .progress-group-feedback {\n  color: #17a2b8; }\n\n.progress-warning .progress-bar {\n  background-color: #ffc107; }\n\n.progress-warning .progress-group-feedback {\n  color: #ffc107; }\n\n.progress-danger .progress-bar {\n  background-color: #dc3545; }\n\n.progress-danger .progress-group-feedback {\n  color: #dc3545; }\n\n.quick-action-menu {\n  align-items: center;\n  bottom: 0;\n  display: none;\n  left: auto;\n  position: absolute;\n  right: 100%;\n  top: 0; }\n\n.quick-action-item {\n  border-radius: 0.25rem;\n  color: #007bff;\n  display: flex;\n  line-height: 1;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.5rem; }\n  .quick-action-item:hover {\n    color: #0056b3; }\n  .quick-action-item:disabled, .quick-action-item.disabled {\n    color: #868e96;\n    opacity: 0.65; }\n  .quick-action-item .lexicon-icon {\n    margin-top: 0; }\n\n.container-fluid-1280.sidenav-container {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.sidenav-container {\n  position: relative; }\n  .sidenav-container > .sidenav-menu-slider {\n    visibility: hidden;\n    width: 0; }\n  .sidenav-container > .sidenav-content {\n    left: 0; }\n\n.sidenav-container.open > .sidenav-menu-slider {\n  visibility: visible; }\n\n.sidenav-content {\n  padding-left: 0;\n  padding-right: 0;\n  position: relative; }\n  @media (min-width: 768px) {\n    .sidenav-content {\n      position: static; }\n      .sidenav-content::after {\n        display: block;\n        clear: both;\n        content: \"\"; } }\n\n.sidenav-menu {\n  height: 100%;\n  position: relative; }\n\n.sidenav-menu-slider {\n  overflow: hidden;\n  position: absolute;\n  width: 320px;\n  z-index: 10; }\n\n.sidenav-fixed > .sidenav-menu-slider {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  top: 0;\n  z-index: 1035; }\n\n.sidenav-right > .sidenav-content {\n  left: auto;\n  right: 0; }\n\n.sidenav-right > .sidenav-menu-slider {\n  left: auto;\n  right: 0; }\n  .sidenav-right > .sidenav-menu-slider .sidenav-menu {\n    right: 0; }\n\n.sidenav-js-fouc > .sidenav-menu-slider {\n  opacity: 0;\n  visibility: hidden; }\n\n.sidenav-transition .sidenav-content,\n.sidenav-transition .sidenav-menu,\n.sidenav-transition .sidenav-menu-slider {\n  transition: all 0.5s ease; }\n\n.sidenav-transition {\n  transition: all 0.5s ease; }\n\n.sidenav-fixed.sidenav-menu-slider {\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  top: 0;\n  visibility: hidden;\n  width: 0; }\n  .sidenav-fixed.sidenav-menu-slider.open {\n    visibility: visible;\n    width: 320px; }\n  .sidenav-fixed.sidenav-menu-slider .sidenav-menu {\n    position: absolute; }\n\n.sidenav-menu-slider .sidenav-menu {\n  width: 320px; }\n\n.sidenav-menu-slider.sidenav-right {\n  left: auto;\n  right: 0; }\n  .sidenav-menu-slider.sidenav-right .sidenav-menu {\n    right: 0; }\n\n.sidebar {\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.sidebar-header,\n.sidebar-footer {\n  padding-bottom: 1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1.5rem; }\n\n.sidebar-body {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1.5rem; }\n  .sidebar-body > .sidebar-section {\n    margin-bottom: 2rem; }\n    .sidebar-body > .sidebar-section:last-child {\n      margin-bottom: 0; }\n\n.sidebar-section {\n  position: relative;\n  word-wrap: break-word; }\n\n.sidebar-section-flex {\n  display: flex; }\n  .sidebar-section-flex .flex-col {\n    justify-content: center;\n    min-height: 40px; }\n\n.sidebar-list {\n  font-size: 0.875rem;\n  padding-left: 0;\n  list-style: none; }\n\n.sidebar-list-item {\n  border-color: transparent;\n  border-style: solid;\n  border-width: 1px 0 1px 0;\n  display: flex;\n  margin-bottom: -1px; }\n  .sidebar-list-item .flex-col {\n    justify-content: center;\n    padding-bottom: 1rem;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    padding-top: 1rem; }\n\n.sidebar-panel {\n  margin-bottom: 1rem;\n  position: relative; }\n\n.sidebar-actions {\n  flex-wrap: nowrap;\n  margin-right: -0.5rem; }\n\n.sidebar-title {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: normal;\n  margin-bottom: 0; }\n\n.sidebar-subtitle {\n  font-size: 1.125rem;\n  font-weight: 500;\n  line-height: normal; }\n\n.sidebar-caption {\n  font-size: 0.875rem; }\n\n.sidebar-dt {\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase; }\n\n.sidebar-dd {\n  font-size: 0.75rem;\n  margin-bottom: 0.75rem; }\n\n.sidebar-light {\n  background-color: #fff;\n  border-color: #d4d7de;\n  border-style: solid;\n  border-width: 0 0 0 1px;\n  color: #212529; }\n  .sidebar-light .sidebar-header .sidebar-title.sidebar-link,\n  .sidebar-light .sidebar-header .sidebar-title .sidebar-link {\n    text-decoration: none; }\n  .sidebar-light .sidebar-actions .sidebar-link {\n    text-decoration: none; }\n  .sidebar-light .sidebar-list-item {\n    border-color: #d4d7de; }\n  .sidebar-light .sidebar-panel {\n    background-color: #f8f9fa; }\n\n.sticker {\n  border-radius: 0.25rem;\n  display: inline-block;\n  font-size: 0.875rem;\n  height: 2rem;\n  line-height: 2rem;\n  width: 2rem;\n  position: relative;\n  text-align: center;\n  vertical-align: middle; }\n  .sticker .lexicon-icon {\n    display: block;\n    height: 100%;\n    margin: auto; }\n  .sticker img {\n    vertical-align: top; }\n  .sticker .img-fluid {\n    border-radius: 0.25rem; }\n  .sticker.rounded .img-fluid {\n    border-radius: 0.25rem; }\n  .sticker.rounded-circle .img-fluid {\n    border-radius: 5000px; }\n  .sticker.rounded-0 .img-fluid {\n    border-radius: 0; }\n\n.sticker-overlay {\n  align-items: center;\n  border-radius: 0.25rem;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.sticker-bottom-left {\n  bottom: 15px;\n  left: 15px;\n  position: absolute;\n  right: auto;\n  top: auto; }\n\n.sticker-bottom-right {\n  bottom: 15px;\n  left: auto;\n  position: absolute;\n  right: 15px;\n  top: auto; }\n\n.sticker-top-left {\n  left: 15px;\n  position: absolute;\n  top: 15px; }\n\n.sticker-top-right {\n  left: auto;\n  position: absolute;\n  right: 15px;\n  top: 15px; }\n\n.sticker-outside {\n  left: -1rem;\n  top: -1rem; }\n  .sticker-outside.sticker-bottom-left {\n    bottom: -1rem;\n    top: auto; }\n  .sticker-outside.sticker-bottom-right {\n    bottom: -1rem;\n    left: auto;\n    right: -1rem;\n    top: auto; }\n  .sticker-outside.sticker-top-right {\n    left: auto;\n    right: -1rem; }\n\n.sticker-sm {\n  font-size: 0.75rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  width: 1.5rem; }\n  .sticker-sm.sticker-outside {\n    left: -0.75rem;\n    top: -0.75rem; }\n    .sticker-sm.sticker-outside.sticker-bottom-left {\n      bottom: -0.75rem;\n      top: auto; }\n    .sticker-sm.sticker-outside.sticker-bottom-right {\n      bottom: -0.75rem;\n      left: auto;\n      right: -0.75rem;\n      top: auto; }\n    .sticker-sm.sticker-outside.sticker-top-right {\n      left: auto;\n      right: -0.75rem; }\n\n.sticker-lg {\n  font-size: 1.125rem;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  width: 2.5rem; }\n  .sticker-lg.sticker-outside {\n    left: -1.25rem;\n    top: -1.25rem; }\n    .sticker-lg.sticker-outside.sticker-bottom-left {\n      bottom: -1.25rem;\n      top: auto; }\n    .sticker-lg.sticker-outside.sticker-bottom-right {\n      bottom: -1.25rem;\n      left: auto;\n      right: -1.25rem;\n      top: auto; }\n    .sticker-lg.sticker-outside.sticker-top-right {\n      left: auto;\n      right: -1.25rem; }\n\n.sticker-xl {\n  font-size: 1.25rem;\n  height: 3rem;\n  line-height: 3rem;\n  width: 3rem; }\n  .sticker-xl.sticker-outside {\n    left: -1.5rem;\n    top: -1.5rem; }\n    .sticker-xl.sticker-outside.sticker-bottom-left {\n      bottom: -1.5rem;\n      top: auto; }\n    .sticker-xl.sticker-outside.sticker-bottom-right {\n      bottom: -1.5rem;\n      left: auto;\n      right: -1.5rem;\n      top: auto; }\n    .sticker-xl.sticker-outside.sticker-top-right {\n      left: auto;\n      right: -1.5rem; }\n\n.sticker-primary {\n  background-color: #007bff;\n  color: #fff; }\n\n.sticker-secondary {\n  background-color: #868e96;\n  color: #fff; }\n\n.sticker-success {\n  background-color: #28a745;\n  color: #fff; }\n\n.sticker-info {\n  background-color: #17a2b8;\n  color: #fff; }\n\n.sticker-warning {\n  background-color: #ffc107;\n  color: #111; }\n\n.sticker-danger {\n  background-color: #dc3545;\n  color: #fff; }\n\n.sticker-light {\n  background-color: #f8f9fa;\n  color: #111; }\n\n.sticker-dark {\n  background-color: #343a40;\n  color: #fff; }\n\n.subnav {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.875rem;\n  justify-content: space-between;\n  padding-left: 0;\n  padding-right: 0; }\n  .subnav .container,\n  .subnav .container-fluid {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n\n.subnav-nav {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0; }\n  .subnav-nav > li {\n    display: flex; }\n\n.subnav-title {\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: uppercase; }\n\n.subnav-link {\n  color: #007bff;\n  text-decoration: none; }\n  .subnav-link:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\nbutton.subnav-link {\n  background-color: transparent;\n  border-width: 0;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: normal;\n  max-width: 100%;\n  padding: 0;\n  text-align: left;\n  text-transform: inherit;\n  vertical-align: baseline; }\n\nbutton.subnav-item,\n.subnav-item {\n  line-height: 2rem;\n  padding-bottom: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0; }\n\n.subnav-item.subnav-link {\n  text-decoration: none; }\n  .subnav-item.subnav-link:focus, .subnav-item.subnav-link:hover {\n    text-decoration: none; }\n\n.subnav-primary {\n  background-color: #007bff;\n  color: rgba(255, 255, 255, 0.5); }\n  .subnav-primary .subnav-link {\n    color: #FFF; }\n    .subnav-primary .subnav-link:focus, .subnav-primary .subnav-link:hover {\n      color: rgba(255, 255, 255, 0.75); }\n  .subnav-primary .subnav-item.subnav-link {\n    color: rgba(255, 255, 255, 0.5); }\n    .subnav-primary .subnav-item.subnav-link:focus, .subnav-primary .subnav-item.subnav-link:hover {\n      color: rgba(255, 255, 255, 0.75); }\n\n.subnav-light {\n  background-color: #f8f9fa;\n  color: rgba(0, 0, 0, 0.5); }\n  .subnav-light .subnav-item.subnav-link {\n    color: rgba(0, 0, 0, 0.5); }\n    .subnav-light .subnav-item.subnav-link:focus, .subnav-light .subnav-item.subnav-link:hover {\n      color: rgba(0, 0, 0, 0.7); }\n\n.subnav-dark {\n  background-color: #343a40;\n  color: rgba(255, 255, 255, 0.5); }\n  .subnav-dark .subnav-item.subnav-link {\n    color: rgba(255, 255, 255, 0.5); }\n    .subnav-dark .subnav-item.subnav-link:focus, .subnav-dark .subnav-item.subnav-link:hover {\n      color: rgba(255, 255, 255, 0.75); }\n\ntable {\n  border-collapse: separate; }\n\nth {\n  height: 20px; }\n\n.table {\n  border-collapse: collapse; }\n  .table th {\n    color: #495057;\n    height: 36px;\n    position: relative; }\n  .table td {\n    position: relative; }\n  .table td:first-child,\n  .table th:first-child {\n    padding-left: 15px; }\n  .table td:last-child,\n  .table th:last-child {\n    padding-right: 15px; }\n  .table .custom-control,\n  .table .form-check {\n    margin-bottom: 0; }\n\n.table-cell-content {\n  display: table-cell;\n  max-width: 100px;\n  min-width: 100px;\n  width: auto;\n  word-wrap: break-word; }\n\n.table-cell-field {\n  display: table-cell;\n  width: 1%; }\n\n.table-list {\n  background-color: #FFF;\n  border-radius: 6px;\n  margin-bottom: 1.0625rem; }\n  .table-list thead:first-child tr:first-child th:first-child,\n  .table-list thead:first-child tr:first-child td:first-child,\n  .table-list tbody:first-child tr:first-child th:first-child,\n  .table-list tbody:first-child tr:first-child td:first-child,\n  .table-list tfoot:first-child tr:first-child th:first-child,\n  .table-list tfoot:first-child tr:first-child td:first-child {\n    border-top-left-radius: 6px; }\n  .table-list thead:first-child tr:first-child th:last-child,\n  .table-list thead:first-child tr:first-child td:last-child,\n  .table-list tbody:first-child tr:first-child th:last-child,\n  .table-list tbody:first-child tr:first-child td:last-child,\n  .table-list tfoot:first-child tr:first-child th:last-child,\n  .table-list tfoot:first-child tr:first-child td:last-child {\n    border-top-right-radius: 6px; }\n  .table-list thead:last-child tr:last-child th:first-child,\n  .table-list thead:last-child tr:last-child td:first-child,\n  .table-list tbody:last-child tr:last-child th:first-child,\n  .table-list tbody:last-child tr:last-child td:first-child,\n  .table-list tfoot:last-child tr:last-child th:first-child,\n  .table-list tfoot:last-child tr:last-child td:first-child {\n    border-bottom-left-radius: 6px; }\n  .table-list thead:last-child tr:last-child th:last-child,\n  .table-list thead:last-child tr:last-child td:last-child,\n  .table-list tbody:last-child tr:last-child th:last-child,\n  .table-list tbody:last-child tr:last-child td:last-child,\n  .table-list tfoot:last-child tr:last-child th:last-child,\n  .table-list tfoot:last-child tr:last-child td:last-child {\n    border-bottom-right-radius: 6px; }\n  .table-list th,\n  .table-list td {\n    box-shadow: inset 0 0.0625rem #e9ecef, 0 0.0625rem #e9ecef;\n    padding-top: 0.8125rem; }\n    .table-list th:first-child,\n    .table-list td:first-child {\n      box-shadow: inset 0 0.0625rem #e9ecef, 0 0.0625rem #e9ecef, inset 0.0625rem 0 #e9ecef;\n      padding-left: 0.8125rem;\n      padding-top: 0.8125rem; }\n    .table-list th:last-child,\n    .table-list td:last-child {\n      box-shadow: inset 0 0.0625rem #e9ecef, inset -0.0625rem 0 #e9ecef, 0 0.0625rem #e9ecef;\n      padding-right: 0.8125rem;\n      padding-top: 0.8125rem; }\n    .table-list th:only-child,\n    .table-list td:only-child {\n      box-shadow: inset 0 0.0625rem #e9ecef, inset -0.0625rem 0 #e9ecef, 0 0.0625rem #e9ecef, inset 0.0625rem 0 #e9ecef;\n      padding-left: 0.8125rem;\n      padding-right: 0.8125rem;\n      padding-top: 0.8125rem; }\n  .table-list thead td,\n  .table-list thead th {\n    border-width: 0; }\n  .table-list tbody td,\n  .table-list tbody th,\n  .table-list tfoot td,\n  .table-list tfoot th {\n    border-width: 0;\n    vertical-align: middle; }\n\n.table-list.table-bordered {\n  border-width: 0; }\n  .table-list.table-bordered th,\n  .table-list.table-bordered td {\n    box-shadow: inset 0 0.0625rem #e9ecef, inset -0.0625rem 0 #e9ecef, 0 0.0625rem #e9ecef, -0.03125rem 0.03125rem 0 0.03125rem #e9ecef;\n    padding-right: 0.8125rem;\n    padding-top: 0.8125rem; }\n    .table-list.table-bordered th:first-child,\n    .table-list.table-bordered td:first-child {\n      box-shadow: inset 0 0.0625rem #e9ecef, inset -0.0625rem 0 #e9ecef, 0 0.0625rem #e9ecef, inset 0.0625rem 0 #e9ecef;\n      padding-left: 0.8125rem;\n      padding-right: 0.8125rem;\n      padding-top: 0.8125rem; }\n\n.table-list.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #F2F2F2; }\n\n.table-list.table-hover tbody tr:hover {\n  background-color: #ECECEC; }\n\n.table-list.table-hover .table-active:hover {\n  background-color: #DADADA; }\n  .table-list.table-hover .table-active:hover > th,\n  .table-list.table-hover .table-active:hover > td {\n    background-color: #DADADA; }\n\n.table-list .table-active,\n.table-list .table-active > th,\n.table-list .table-active > td {\n  background-color: #DADADA; }\n\n.table-autofit td,\n.table-autofit th {\n  width: 1%; }\n\n.table-autofit .table-cell-content {\n  width: auto; }\n\n.table-heading-nowrap thead td,\n.table-heading-nowrap thead th {\n  white-space: nowrap; }\n\n.table .table-divider td,\n.table .table-divider th {\n  background-color: #FFF;\n  padding: 0.75rem; }\n\n.table-valign-bottom tbody td,\n.table-valign-bottom tbody th,\n.table-valign-bottom tfoot td,\n.table-valign-bottom tfoot th,\n.table-valign-bottom thead td,\n.table-valign-bottom thead th {\n  vertical-align: bottom; }\n\n.table-valign-middle tbody td,\n.table-valign-middle tbody th,\n.table-valign-middle tfoot td,\n.table-valign-middle tfoot th,\n.table-valign-middle thead td,\n.table-valign-middle thead th {\n  vertical-align: middle; }\n\n.table-valign-top tbody td,\n.table-valign-top tbody th,\n.table-valign-top tfoot td,\n.table-valign-top tfoot th,\n.table-valign-top thead td,\n.table-valign-top thead th {\n  vertical-align: top; }\n\n.tbody-valign-bottom tbody td {\n  vertical-align: bottom; }\n\n.tbody-valign-middle tbody td {\n  vertical-align: middle; }\n\n.tbody-valign-top tbody td {\n  vertical-align: top; }\n\n.thead-valign-bottom thead td,\n.thead-valign-bottom thead th {\n  vertical-align: bottom; }\n\n.thead-valign-middle thead td,\n.thead-valign-middle thead th {\n  vertical-align: middle; }\n\n.thead-valign-top thead td,\n.thead-valign-top thead th {\n  vertical-align: top; }\n\n.show-quick-actions-on-hover tr:not(.table-active):hover .quick-action-menu {\n  display: flex; }\n\n.show-quick-actions-on-hover .table-focus:not(.table-active) .quick-action-menu {\n  display: flex; }\n\n.table .quick-action-menu {\n  align-items: flex-start;\n  background-color: #fff;\n  padding-bottom: 0.75rem;\n  padding-top: 0.75rem; }\n\n.table-striped tbody tr:nth-of-type(odd) .quick-action-menu {\n  background-color: #F2F2F2; }\n\n.table-striped tbody .table-active:nth-of-type(odd) .quick-action-menu {\n  background-color: #E0E0E0; }\n\n.table-hover tbody tr:hover .quick-action-menu {\n  background-color: #ECECEC; }\n\n.table-hover tbody .table-active:hover .quick-action-menu {\n  background-color: #DADADA; }\n\n.table-active .quick-action-menu {\n  background-color: #DADADA; }\n\n.table-list .quick-action-menu {\n  align-items: center;\n  background-color: #FFF;\n  bottom: 0;\n  top: 0.0625rem; }\n\n.table-list.table-striped tbody tr:nth-of-type(odd) .quick-action-menu {\n  background-color: #F2F2F2; }\n\n.table-list.table-striped tbody .table-active:nth-of-type(odd) .quick-action-menu {\n  background-color: #DADADA; }\n\n.table-list.table-hover tbody tr:hover .quick-action-menu {\n  background-color: #ECECEC; }\n\n.table-list.table-hover tbody .table-active:hover .quick-action-menu {\n  background-color: #DADADA; }\n\n.table-list .table-active .quick-action-menu {\n  background-color: #DADADA; }\n\n@media (max-width: 575px) {\n  .table-responsive-sm {\n    overflow-y: hidden; } }\n\n@media (max-width: 767px) {\n  .table-responsive-md {\n    overflow-y: hidden; } }\n\n@media (max-width: 991px) {\n  .table-responsive-lg {\n    overflow-y: hidden; } }\n\n@media (max-width: 1199px) {\n  .table-responsive-xl {\n    overflow-y: hidden; } }\n\n.table-responsive {\n  overflow-y: hidden; }\n\n.timeline {\n  padding-left: 0;\n  list-style: none;\n  padding-left: 25px; }\n  .timeline .panel,\n  .timeline .panel-group {\n    margin-bottom: 0; }\n\n.timeline-icon {\n  background-color: #fff;\n  border: 2px solid #DDD;\n  border-radius: 50%;\n  display: block;\n  height: 10px;\n  line-height: 10px;\n  width: 10px; }\n\n.timeline-increment {\n  background-color: #fff;\n  left: -39px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 1; }\n\n.timeline-increment-text {\n  display: block;\n  max-width: 65px; }\n\n.timeline-item-label {\n  color: #212529; }\n\n.timeline-item {\n  padding-bottom: 5px;\n  padding-left: 40px;\n  padding-top: 5px;\n  position: relative; }\n  .timeline-item:before {\n    background-color: #DDD;\n    bottom: 0;\n    content: '';\n    display: block;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 2px; }\n  .timeline-item.active .timeline-icon {\n    background-color: #007bff;\n    border-color: #007bff; }\n  .timeline-item .panel,\n  .timeline-item .panel-heading {\n    position: relative; }\n  .timeline-item .panel .timeline-increment {\n    margin-left: -1px; }\n\n.timeline-right {\n  padding-left: 0;\n  padding-right: 25px; }\n  .timeline-right .timeline-item {\n    padding-left: 0;\n    padding-right: 40px; }\n    .timeline-right .timeline-item:before {\n      left: auto;\n      right: -2px; }\n    .timeline-right .timeline-item .panel .timeline-increment {\n      margin-left: auto;\n      margin-right: -1px; }\n    .timeline-right .timeline-item .timeline-increment {\n      left: auto;\n      right: -41px;\n      -ms-transform: translate(50%, -50%);\n      transform: translate(50%, -50%); }\n\n@media (max-width: 575px) {\n  .timeline-right-xs-only {\n    padding-left: 0;\n    padding-right: 25px; }\n    .timeline-right-xs-only .timeline-item {\n      padding-left: 0;\n      padding-right: 40px; }\n      .timeline-right-xs-only .timeline-item:before {\n        left: auto;\n        right: -2px; }\n      .timeline-right-xs-only .timeline-item .panel .timeline-increment {\n        margin-left: auto;\n        margin-right: -1px; }\n      .timeline-right-xs-only .timeline-item .timeline-increment {\n        left: auto;\n        right: -41px;\n        -ms-transform: translate(50%, -50%);\n        transform: translate(50%, -50%); } }\n\n@media (min-width: 768px) {\n  .timeline-center {\n    padding-left: 0; }\n    .timeline-center .timeline-item {\n      margin-left: 50%;\n      width: 50%; }\n      .timeline-center .timeline-item .timeline-item-label {\n        left: -100%;\n        margin-left: -80px;\n        position: absolute;\n        text-align: right;\n        top: 50%;\n        -ms-transform: translateY(-50%);\n        transform: translateY(-50%);\n        width: 100%; }\n    .timeline-center .timeline-item.timeline-item-reverse {\n      padding-left: 0;\n      padding-right: 40px;\n      margin-left: 0; }\n      .timeline-center .timeline-item.timeline-item-reverse:before {\n        left: auto;\n        right: -2px; }\n      .timeline-center .timeline-item.timeline-item-reverse .panel .timeline-increment {\n        margin-left: auto;\n        margin-right: -1px; }\n      .timeline-center .timeline-item.timeline-item-reverse .timeline-increment {\n        left: auto;\n        right: -41px;\n        -ms-transform: translate(50%, -50%);\n        transform: translate(50%, -50%); }\n      .timeline-center .timeline-item.timeline-item-reverse .timeline-item-label {\n        margin-left: auto;\n        margin-right: -80px;\n        right: -100%;\n        text-align: left; } }\n\n@media (min-width: 768px) {\n  .timeline-even .timeline-item:nth-of-type(even),\n  .timeline-odd .timeline-item:nth-of-type(odd) {\n    padding-left: 0;\n    padding-right: 40px;\n    margin-left: 0; }\n    .timeline-even .timeline-item:nth-of-type(even):before,\n    .timeline-odd .timeline-item:nth-of-type(odd):before {\n      left: auto;\n      right: -2px; }\n    .timeline-even .timeline-item:nth-of-type(even) .panel .timeline-increment,\n    .timeline-odd .timeline-item:nth-of-type(odd) .panel .timeline-increment {\n      margin-left: auto;\n      margin-right: -1px; }\n    .timeline-even .timeline-item:nth-of-type(even) .timeline-increment,\n    .timeline-odd .timeline-item:nth-of-type(odd) .timeline-increment {\n      left: auto;\n      right: -41px;\n      -ms-transform: translate(50%, -50%);\n      transform: translate(50%, -50%); }\n    .timeline-even .timeline-item:nth-of-type(even) .timeline-item-label,\n    .timeline-odd .timeline-item:nth-of-type(odd) .timeline-item-label {\n      margin-left: auto;\n      margin-right: -80px;\n      right: -100%;\n      text-align: left; } }\n\n.timeline-spacing-xl.timeline {\n  padding-left: 25px; }\n\n@media (min-width: 768px) {\n  .timeline-spacing-xl.timeline-center {\n    padding-left: 0; }\n    .timeline-spacing-xl.timeline-center .timeline-item .timeline-item-label {\n      margin-left: -100px; }\n    .timeline-spacing-xl.timeline-center .timeline-item.timeline-item-reverse {\n      padding-right: 50px; }\n      .timeline-spacing-xl.timeline-center .timeline-item.timeline-item-reverse .timeline-increment {\n        right: -51px; }\n      .timeline-spacing-xl.timeline-center .timeline-item.timeline-item-reverse .timeline-item-label {\n        margin-left: auto;\n        margin-right: -100px; } }\n\n@media (min-width: 768px) {\n  .timeline-spacing-xl.timeline-even .timeline-item:nth-of-type(even),\n  .timeline-spacing-xl.timeline-odd .timeline-item:nth-of-type(odd) {\n    padding-right: 50px; }\n    .timeline-spacing-xl.timeline-even .timeline-item:nth-of-type(even) .timeline-increment,\n    .timeline-spacing-xl.timeline-odd .timeline-item:nth-of-type(odd) .timeline-increment {\n      right: -51px; }\n    .timeline-spacing-xl.timeline-even .timeline-item:nth-of-type(even) .timeline-item-label,\n    .timeline-spacing-xl.timeline-odd .timeline-item:nth-of-type(odd) .timeline-item-label {\n      margin-left: auto;\n      margin-right: -100px; } }\n\n.timeline-spacing-xl.timeline-right {\n  padding-right: 25px; }\n  .timeline-spacing-xl.timeline-right .timeline-item {\n    padding-right: 50px; }\n    .timeline-spacing-xl.timeline-right .timeline-item .timeline-increment {\n      right: -51px; }\n\n@media (max-width: 575px) {\n  .timeline-spacing-xl.timeline-right-xs-only {\n    padding-left: 0;\n    padding-right: 25px; }\n    .timeline-spacing-xl.timeline-right-xs-only .timeline-item {\n      padding-left: 0;\n      padding-right: 50px; }\n      .timeline-spacing-xl.timeline-right-xs-only .timeline-item .timeline-increment {\n        left: auto;\n        right: -51px; } }\n\n.timeline-spacing-xl .timeline-item {\n  padding-bottom: 15px;\n  padding-left: 50px;\n  padding-top: 15px; }\n  .timeline-spacing-xl .timeline-item .timeline-increment {\n    left: -49px; }\n\n.timeline-spacing-xl .timeline-increment-text {\n  max-width: 75px; }\n\n.toggle-switch {\n  cursor: pointer; }\n\n.toggle-switch-bar .toggle-switch-handle {\n  display: block;\n  float: left;\n  min-width: 50px;\n  text-transform: uppercase; }\n\n.toggle-switch-bar .toggle-switch-icon {\n  font-size: 12px; }\n  .toggle-switch-bar .toggle-switch-icon .lexicon-icon {\n    margin-top: -0.2em; }\n\n.toggle-switch-bar .button-icon {\n  font-size: 12px; }\n\n.toggle-switch-check {\n  font-size: 62.5%;\n  opacity: 0;\n  position: absolute; }\n  .toggle-switch-check:empty ~ .toggle-switch-bar {\n    cursor: pointer;\n    display: block;\n    float: left;\n    font-size: 0.75rem;\n    height: 25px;\n    line-height: 25px;\n    position: relative;\n    text-indent: 0;\n    -ms-user-select: none;\n    user-select: none; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar:after {\n      background-color: #fff;\n      border-color: #ced4da;\n      border-radius: 3px 0 0 3px;\n      border-style: solid;\n      border-width: 1px;\n      bottom: 0;\n      content: '';\n      display: block;\n      height: 25px;\n      left: 0;\n      position: absolute;\n      top: 0;\n      transition: background-color 100ms ease-in, border-color 100ms ease-in, color 100ms ease-in, left 100ms ease-in, right 100ms ease-in;\n      width: 25px; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar:before {\n      background-color: #e9ecef;\n      border-color: #ced4da;\n      border-radius: 3px;\n      border-style: solid;\n      border-width: 1px;\n      bottom: 0;\n      content: ' ';\n      display: block;\n      left: 0;\n      position: absolute;\n      top: 0;\n      transition: background-color 100ms ease-in, border-color 100ms ease-in, color 100ms ease-in, left 100ms ease-in, right 100ms ease-in;\n      width: 50px; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-handle:after {\n      content: attr(data-label-off);\n      margin-left: 58px;\n      transition: background-color 100ms ease-in, border-color 100ms ease-in, color 100ms ease-in, left 100ms ease-in, right 100ms ease-in;\n      white-space: nowrap; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-handle:before {\n      transition: background-color 100ms ease-in, border-color 100ms ease-in, color 100ms ease-in, left 100ms ease-in, right 100ms ease-in; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon {\n      color: #495057;\n      left: 0;\n      line-height: 25px;\n      position: absolute;\n      text-align: center;\n      text-indent: 0;\n      top: 0;\n      transition: background-color 100ms ease-in, border-color 100ms ease-in, color 100ms ease-in, left 100ms ease-in, right 100ms ease-in;\n      width: 25px;\n      z-index: 1; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-on {\n      left: 0;\n      opacity: 0; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .toggle-switch-icon-off {\n      left: 25px; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .button-icon {\n      color: #495057; }\n    .toggle-switch-check:empty ~ .toggle-switch-bar .button-icon-on {\n      opacity: 0; }\n  .toggle-switch-check:checked ~ .toggle-switch-bar:after {\n    background-color: #FFF;\n    border-color: #007bff;\n    border-radius: 0 3px 3px 0;\n    border-style: solid;\n    border-width: 1px;\n    left: 25px; }\n  .toggle-switch-check:checked ~ .toggle-switch-bar:before {\n    background-color: #007bff;\n    border-color: #007bff;\n    border-radius: 3px;\n    border-style: solid;\n    border-width: 1px; }\n  .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-handle:after {\n    content: attr(data-label-on); }\n  .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon {\n    color: #fff; }\n  .toggle-switch-check:checked ~ .toggle-switch-bar .button-icon {\n    color: #007bff;\n    left: 25px; }\n  .toggle-switch-check:checked ~ .toggle-switch-bar .button-icon-on,\n  .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-on {\n    opacity: 1; }\n  .toggle-switch-check:checked ~ .toggle-switch-bar .button-icon-off,\n  .toggle-switch-check:checked ~ .toggle-switch-bar .toggle-switch-icon-off {\n    opacity: 0; }\n  .toggle-switch-check:disabled ~ .toggle-switch-bar, .toggle-switch-check.disabled ~ .toggle-switch-bar {\n    cursor: not-allowed;\n    opacity: 0.4; }\n\n.toggle-switch-label {\n  display: block;\n  margin-bottom: 2px; }\n\n.toggle-switch-text {\n  clear: both;\n  display: block;\n  font-size: 0.75rem; }\n\n.toggle-switch-text-left {\n  float: left;\n  line-height: 25px;\n  margin-right: 8px; }\n\n.toggle-switch-text-right {\n  clear: none;\n  float: left;\n  line-height: 25px;\n  margin-left: 8px; }\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -ms-overflow-style: scrollbar;\n  -webkit-font-smoothing: antialiased; }\n\n.section-header {\n  border-style: solid;\n  border-width: 0 0 1px 0;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3125rem;\n  padding-top: 0.3125rem;\n  position: relative;\n  text-transform: uppercase;\n  word-wrap: break-word; }\n  .section-header .collapse-icon-closed,\n  .section-header .collapse-icon-open {\n    right: 0;\n    top: calc(0.3125rem + (((0.875rem * 1.2) - 1em) / 2)); }\n\na.section-header:hover {\n  text-decoration: none; }\n\n.section-subheader {\n  font-size: 0.875rem;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.3125rem;\n  padding-top: 0.3125rem;\n  text-transform: uppercase;\n  word-wrap: break-word; }\n\n.reference-mark {\n  display: inline-block;\n  font-size: 0.75rem;\n  position: relative;\n  vertical-align: super; }\n\nmark,\n.mark {\n  background-color: #fff3cd;\n  box-decoration-break: clone;\n  box-shadow: -0.25em 0 0 #fff3cd;\n  color: #212529;\n  display: inline;\n  line-height: normal;\n  padding: 2px 0.25em 3px 0;\n  position: relative;\n  white-space: pre-wrap; }\n  mark:before,\n  .mark:before {\n    background-color: #fff3cd;\n    bottom: 0;\n    content: '';\n    display: block;\n    position: absolute;\n    right: 100%;\n    top: 0;\n    width: 0.25em;\n    z-index: -1; }\n\n.text-truncate {\n  display: block; }\n\n.bg-checkered {\n  background-image: linear-gradient(45deg, #e9ecef 25%, transparent 25%), linear-gradient(-45deg, #e9ecef 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e9ecef 75%), linear-gradient(-45deg, transparent 75%, #e9ecef 75%);\n  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;\n  background-size: 20px 20px; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-circle {\n  border-radius: 5000px !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.flex-col {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  min-height: 0;\n  position: relative; }\n\n.flex-col-expand {\n  flex-grow: 1;\n  min-width: 50px;\n  width: 100%;\n  word-wrap: break-word; }\n\n.inline-scroller {\n  list-style: none;\n  margin: 0;\n  max-height: 125px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 0; }\n\n.page-header {\n  background-color: #e9ecef; }\n\n.loading-icon, .loading-animation,\n.loadingmask-message .loadingmask-message-content {\n  animation: loading-icon 1.7s infinite ease;\n  border-radius: 50%;\n  display: block;\n  font-size: 16px;\n  height: 1em;\n  margin: 1em auto;\n  position: relative;\n  width: 1em; }\n  .loading-icon:after, .loading-animation:after, .loading-icon:before, .loading-animation:before,\n  .loadingmask-message .loadingmask-message-content:after,\n  .loadingmask-message .loadingmask-message-content:before {\n    border-radius: 50%;\n    content: '';\n    display: block;\n    font-size: inherit;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n\n@keyframes loading-icon {\n  0% {\n    box-shadow: 0 -0.83em 0 -0.4em #4d67ff, 0 -0.83em 0 -0.42em #4d76ff, 0 -0.83em 0 -0.44em #4d85ff, 0 -0.83em 0 -0.46em #4d94ff, 0 -0.83em 0 -0.477em #4da3ff;\n    transform: rotate(0); }\n  2%, 96% {\n    box-shadow: 0 -0.83em 0 -0.4em #4d67ff, 0 -0.83em 0 -0.42em #4d76ff, 0 -0.83em 0 -0.44em #4d85ff, 0 -0.83em 0 -0.46em #4d94ff, 0 -0.83em 0 -0.477em #4da3ff; }\n  10% {\n    box-shadow: 0 -0.83em 0 -0.4em #4d67ff, -0.087em -0.825em 0 -0.42em #4d76ff, -0.173em -0.812em 0 -0.44em #4d85ff, -0.256em -0.789em 0 -0.46em #4d94ff, -0.338em -0.758em 0 -0.477em #4da3ff; }\n  25% {\n    box-shadow: 0 -0.83em 0 -0.4em #4d67ff, -0.338em -0.758em 0 -0.42em #4d76ff, -0.555em -0.617em 0 -0.44em #4d85ff, -0.671em -0.488em 0 -0.46em #4d94ff, -0.719em -0.415em 0 -0.477em #4da3ff; }\n  40% {\n    box-shadow: 0 -0.83em 0 -0.4em #4dc0ff, -0.377em -0.74em 0 -0.42em #4dcfff, -0.645em -0.522em 0 -0.44em #4ddeff, -0.775em -0.297em 0 -0.46em #4dedff, -0.82em -0.13em 0 -0.477em #4dfcff; }\n  60% {\n    box-shadow: 0 -0.83em 0 -0.4em #4d67ff, -0.087em -0.825em 0 -0.42em #4d76ff, -0.173em -0.812em 0 -0.44em #4d85ff, -0.256em -0.789em 0 -0.46em #4d94ff, -0.297em -0.775em 0 -0.477em #4da3ff; }\n  100% {\n    box-shadow: 0 -0.83em 0 -0.4em #4d67ff, 0 -0.83em 0 -0.42em #4d76ff, 0 -0.83em 0 -0.44em #4d85ff, 0 -0.83em 0 -0.46em #4d94ff, 0 -0.83em 0 -0.477em #4da3ff;\n    transform: rotate(360deg); } }\n\n.loading-icon.linear, .linear.loading-animation, .loading-icon.linear:before, .linear.loading-animation:before, .loading-icon.linear:after, .linear.loading-animation:after {\n  border-radius: 50%;\n  box-shadow: none; }\n\n.loading-icon.linear, .linear.loading-animation {\n  animation: none;\n  height: 1em;\n  margin: 0 auto;\n  position: relative;\n  transform: translateZ(0);\n  width: 1em; }\n\n.loading-icon.linear:before, .linear.loading-animation:before, .loading-icon.linear:after, .linear.loading-animation:after {\n  animation: 2s ease-out infinite both;\n  border: 0.15em solid transparent;\n  border-left-color: #3395ff;\n  border-radius: 50%;\n  content: '';\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transform: rotate(270deg);\n  transform-origin: 50%;\n  width: 100%; }\n\n.loading-icon.linear:before, .linear.loading-animation:before {\n  animation-name: loading-icon-linear; }\n\n.loading-icon.linear:after, .linear.loading-animation:after {\n  animation-name: loading-icon-spin; }\n\n@keyframes loading-icon-linear {\n  0% {\n    transform: rotate(0deg); }\n  10.99% {\n    border-bottom-color: transparent; }\n  11% {\n    border-bottom-color: #3395ff; }\n  66% {\n    border-bottom-color: #3395ff; }\n  66.6% {\n    border-bottom-color: transparent; }\n  66.6%, 100% {\n    transform: rotate(360deg); } }\n\n@keyframes loading-icon-linear {\n  0% {\n    transform: rotate(0deg); }\n  10.99% {\n    border-bottom-color: transparent; }\n  11% {\n    border-bottom-color: #3395ff; }\n  66% {\n    border-bottom-color: #3395ff; }\n  66.6% {\n    border-bottom-color: transparent; }\n  66.6%, 100% {\n    transform: rotate(360deg); } }\n\n@keyframes loading-icon-spin {\n  0%, 22% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\na.btn > .loading-icon, a.btn > .loading-animation,\nbutton > .loading-icon,\nbutton > .loading-animation {\n  font-size: 1em;\n  margin-right: 0.8em;\n  margin-top: 0; }\n\na.btn > .loading-icon.linear, a.btn > .linear.loading-animation,\nbutton > .loading-icon.linear,\nbutton > .linear.loading-animation {\n  margin-right: 0.2em;\n  margin-top: -0.2em; }\n\na.btn > .loading-icon, a.btn > .loading-animation, a.btn > .loading-icon.linear, a.btn > .linear.loading-animation,\nbutton > .loading-icon,\nbutton > .loading-animation,\nbutton > .loading-icon.linear,\nbutton > .linear.loading-animation {\n  display: none;\n  margin-bottom: 0;\n  vertical-align: middle; }\n\na.btn.loading > .loading-icon, a.btn.loading > .loading-animation, a.btn.loading > .loading-icon.linear, a.btn.loading > .linear.loading-animation,\nbutton.loading > .loading-icon,\nbutton.loading > .loading-animation,\nbutton.loading > .loading-icon.linear,\nbutton.loading > .linear.loading-animation {\n  display: inline-block; }\n\n.loading-icon.loading-icon-xs, .loading-icon-xs.loading-animation, .loading-animation.loading-animation-xs {\n  font-size: 8px; }\n\n.loading-icon.loading-icon-sm, .loading-icon-sm.loading-animation, .loading-animation.loading-animation-sm {\n  font-size: 10px; }\n\n.loading-icon.loading-icon-md, .loading-icon-md.loading-animation, .loading-animation.loading-animation-md {\n  font-size: 32px; }\n\n.loading-icon.loading-icon-lg, .loading-icon-lg.loading-animation, .loading-animation.loading-animation-lg {\n  font-size: 64px; }\n\nhtml, body {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  font-family: \"Source Sans Pro\", sans-serif; }\n\n#wrapper {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n  #wrapper main {\n    flex: 1 0 auto; }\n\n@media screen and (min-width: 768px) {\n  .row.row__no-margin > div {\n    padding: 5px; }\n    .row.row__no-margin > div:first-child {\n      padding-left: 15px;\n      padding-right: 5px; }\n    .row.row__no-margin > div:last-child {\n      padding-right: 15px;\n      padding-left: 5px; } }\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Button = exports.Icon = exports.Card = exports.Header = undefined;

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _Card = __webpack_require__(75);

var _Card2 = _interopRequireDefault(_Card);

var _Icon = __webpack_require__(82);

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = __webpack_require__(84);

var _Button2 = _interopRequireDefault(_Button);

var _Footer = __webpack_require__(88);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Header = _Header2.default;
exports.Card = _Card2.default;
exports.Icon = _Icon2.default;
exports.Button = _Button2.default;
exports.Footer = _Footer2.default;

/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dashboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

var _components = __webpack_require__(68);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_JSXComponent) {
    _inherits(Dashboard, _JSXComponent);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
    }

    _createClass(Dashboard, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'id', 'wrapper');
            IncrementalDOM.elementOpen(_components.Header, null, null, 'title', 'My Company Site > Workflow');
            IncrementalDOM.elementClose(_components.Header);
            IncrementalDOM.elementOpen('main');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'container-fluid');
            IncrementalDOM.elementVoid(DropdownSection);
            IncrementalDOM.elementVoid(CardSection);
            IncrementalDOM.elementVoid(TableSection);
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementClose('main');
            IncrementalDOM.elementOpen(_components.Footer, null, null, 'title', '\xA9 Copyright 2017');
            IncrementalDOM.elementClose(_components.Footer);
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return Dashboard;
}(_metalJsx2.default);

var DropdownSection = function (_JSXComponent2) {
    _inherits(DropdownSection, _JSXComponent2);

    function DropdownSection() {
        _classCallCheck(this, DropdownSection);

        return _possibleConstructorReturn(this, (DropdownSection.__proto__ || Object.getPrototypeOf(DropdownSection)).apply(this, arguments));
    }

    _createClass(DropdownSection, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', 'row');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-sm-12 text-right');
            IncrementalDOM.elementOpen('span');
            IncrementalDOM.text('Dropdown 1');
            IncrementalDOM.elementClose('span');
            IncrementalDOM.elementOpen('span');
            IncrementalDOM.text('Dropdown 2');
            IncrementalDOM.elementClose('span');
            IncrementalDOM.elementClose('div');
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return DropdownSection;
}(_metalJsx2.default);

var CardSection = function (_JSXComponent3) {
    _inherits(CardSection, _JSXComponent3);

    function CardSection() {
        _classCallCheck(this, CardSection);

        return _possibleConstructorReturn(this, (CardSection.__proto__ || Object.getPrototypeOf(CardSection)).apply(this, arguments));
    }

    _createClass(CardSection, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', 'row');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-5 col-sm-12');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'row row__no-margin');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-4 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'Workflows', 'icon', 'share', 'number', '9');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-4 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'Published', 'icon', 'play', 'number', '7');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-4 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'Unpublished', 'icon', 'live', 'number', '2');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-7 col-sm-12');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'row row__no-margin');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-3 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'Process', 'icon', 'organizations', 'number', '185');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-3 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'Started', 'icon', 'check-circle', 'number', '116');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-3 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'In Progress', 'icon', 'reload', 'number', '66');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-md-3 col-sm-12');
            IncrementalDOM.elementVoid(_components.Card, null, null, 'title', 'Completed', 'icon', 'times', 'number', '3');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementClose('div');
            IncrementalDOM.elementClose('div');
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return CardSection;
}(_metalJsx2.default);

var TableSection = function (_JSXComponent4) {
    _inherits(TableSection, _JSXComponent4);

    function TableSection() {
        _classCallCheck(this, TableSection);

        return _possibleConstructorReturn(this, (TableSection.__proto__ || Object.getPrototypeOf(TableSection)).apply(this, arguments));
    }

    _createClass(TableSection, [{
        key: 'renderTableBody',
        value: function renderTableBody() {
            var items = this.state.items;


            return [].map.call(items, function (item, index) {
                IncrementalDOM.elementOpen('tr');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-left');
                iDOMHelpers.renderArbitrary(item.workflow);
                IncrementalDOM.elementClose('td');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-center');
                iDOMHelpers.renderArbitrary(item.status);
                IncrementalDOM.elementClose('td');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-right');
                iDOMHelpers.renderArbitrary(item.process);
                IncrementalDOM.elementClose('td');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-right');
                iDOMHelpers.renderArbitrary(item.started);
                IncrementalDOM.elementClose('td');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-right');
                iDOMHelpers.renderArbitrary(item.inProgress);
                IncrementalDOM.elementClose('td');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-right');
                iDOMHelpers.renderArbitrary(item.completed);
                IncrementalDOM.elementClose('td');
                IncrementalDOM.elementOpen('td', null, null, 'class', 'text-right');
                IncrementalDOM.elementVoid(_components.Button, null, null, 'label', 'view report', 'style', 'primary');
                IncrementalDOM.elementClose('td');
                return IncrementalDOM.elementClose('tr');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', 'row');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'col-sm-12');
            IncrementalDOM.elementOpen('table', null, null, 'class', 'show-quick-actions-on-hover table table-autofit table-list table-responsive-lg');
            IncrementalDOM.elementOpen('thead');
            IncrementalDOM.elementOpen('tr');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-left');
            IncrementalDOM.text('Workflow');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-center');
            IncrementalDOM.text('Status');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-right');
            IncrementalDOM.text('Process');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-right');
            IncrementalDOM.text('Started');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-right');
            IncrementalDOM.text('In Progress');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-right');
            IncrementalDOM.text('Completed');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementOpen('th', null, null, 'class', 'text-right');
            IncrementalDOM.elementClose('th');
            IncrementalDOM.elementClose('tr');
            IncrementalDOM.elementClose('thead');
            IncrementalDOM.elementOpen('tbody');
            iDOMHelpers.renderArbitrary(this.renderTableBody());
            IncrementalDOM.elementClose('tbody');
            IncrementalDOM.elementClose('table');
            IncrementalDOM.elementClose('div');
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return TableSection;
}(_metalJsx2.default);

TableSection.STATE = {
    items: {
        value: [{
            workflow: 'New Hirings - ENG',
            status: 'Active',
            process: 30,
            started: 20,
            inProgress: 8,
            completed: 2
        }, {
            workflow: 'New Hirings - ENG',
            status: 'Active',
            process: 30,
            started: 20,
            inProgress: 8,
            completed: 2
        }, {
            workflow: 'New Hirings - ENG',
            status: 'Active',
            process: 30,
            started: 20,
            inProgress: 8,
            completed: 2
        }, {
            workflow: 'New Hirings - ENG',
            status: 'Active',
            process: 30,
            started: 20,
            inProgress: 8,
            completed: 2
        }, {
            workflow: 'New Hirings - ENG',
            status: 'Active',
            process: 30,
            started: 20,
            inProgress: 8,
            completed: 2
        }]
    }
};

exports.Dashboard = Dashboard;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(72);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Header2.default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

__webpack_require__(73);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_JSXComponent) {
    _inherits(Header, _JSXComponent);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('header', null, null, 'class', 'header');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'container-fluid');
            IncrementalDOM.elementOpen('h2', null, null, 'class', 'header__title');
            iDOMHelpers.renderArbitrary(this.props.title);
            IncrementalDOM.elementClose('h2');
            IncrementalDOM.elementClose('div');
            return IncrementalDOM.elementClose('header');
        }
    }]);

    return Header;
}(_metalJsx2.default);

exports.default = Header;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Header.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, ".header {\n  background-color: #303240;\n  color: #fff; }\n  .header .header__title {\n    margin: 0;\n    padding: 1.5rem 0;\n    font-size: 1.5rem; }\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = __webpack_require__(76);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Card2.default;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

var _components = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_JSXComponent) {
    _inherits(Card, _JSXComponent);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', this.props.className);
            IncrementalDOM.elementVoid(_components.CardIcon, null, null, 'className', this.props.className, 'icon', this.props.icon);
            IncrementalDOM.elementVoid(_components.CardNumber, null, null, 'className', this.props.className, 'number', this.props.number);
            IncrementalDOM.elementVoid(_components.CardTitle, null, null, 'className', this.props.className, 'title', this.props.title);
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return Card;
}(_metalJsx2.default);

exports.default = Card;


Card.PROPS = {
    className: {
        value: 'card-dashboard'
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardNumber = exports.CardIcon = exports.CardTitle = undefined;

var _CardTitle = __webpack_require__(78);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardIcon = __webpack_require__(80);

var _CardIcon2 = _interopRequireDefault(_CardIcon);

var _CardNumber = __webpack_require__(81);

var _CardNumber2 = _interopRequireDefault(_CardNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CardTitle = _CardTitle2.default;
exports.CardIcon = _CardIcon2.default;
exports.CardNumber = _CardNumber2.default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardTitle = function (_JSXComponent) {
    _inherits(CardTitle, _JSXComponent);

    function CardTitle() {
        _classCallCheck(this, CardTitle);

        return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
    }

    _createClass(CardTitle, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', this.props.className + '__title');
            iDOMHelpers.renderArbitrary(this.props.title);
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return CardTitle;
}(_metalJsx2.default);

exports.default = CardTitle;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, ".card-dashboard-group {\n  display: flex; }\n  .card-dashboard-group .card-dashboard {\n    margin: 0 3px; }\n\n.card-dashboard {\n  background-color: #F3F3F3;\n  text-align: center;\n  width: 100%;\n  padding: 1.5rem 0;\n  margin-bottom: 1.5rem; }\n  .card-dashboard .card-dashboard__title {\n    font-size: 1.3rem;\n    font-weight: 700; }\n  .card-dashboard .card-dashboard__icon {\n    font-size: 1rem;\n    color: #737796; }\n  .card-dashboard .card-dashboard__number {\n    font-size: 4rem;\n    font-weight: 300;\n    line-height: 4.5rem; }\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

var _components = __webpack_require__(68);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardIcon = function (_JSXComponent) {
    _inherits(CardIcon, _JSXComponent);

    function CardIcon() {
        _classCallCheck(this, CardIcon);

        return _possibleConstructorReturn(this, (CardIcon.__proto__ || Object.getPrototypeOf(CardIcon)).apply(this, arguments));
    }

    _createClass(CardIcon, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', this.props.className + '__icon');
            IncrementalDOM.elementVoid(_components.Icon, null, null, 'symbol', this.props.icon);
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return CardIcon;
}(_metalJsx2.default);

exports.default = CardIcon;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardNumber = function (_JSXComponent) {
    _inherits(CardNumber, _JSXComponent);

    function CardNumber() {
        _classCallCheck(this, CardNumber);

        return _possibleConstructorReturn(this, (CardNumber.__proto__ || Object.getPrototypeOf(CardNumber)).apply(this, arguments));
    }

    _createClass(CardNumber, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('div', null, null, 'class', this.props.className + '__number');
            iDOMHelpers.renderArbitrary(this.props.number);
            return IncrementalDOM.elementClose('div');
        }
    }]);

    return CardNumber;
}(_metalJsx2.default);

exports.default = CardNumber;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(83);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Icon2.default;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_JSXComponent) {
    _inherits(Icon, _JSXComponent);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('svg', null, null, 'class', 'lexicon-icon');
            IncrementalDOM.elementVoid('use', null, null, 'xlink:href', this.props.spritemap + '#' + this.props.symbol);
            return IncrementalDOM.elementClose('svg');
        }
    }]);

    return Icon;
}(_metalJsx2.default);

Icon.PROPS = {
    spritemap: {
        value: '/node_modules/clay/build/images/icons/icons.svg'
    }
};

exports.default = Icon;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(85);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

__webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_JSXComponent) {
    _inherits(Button, _JSXComponent);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('button', null, null, 'class', 'btn btn-dashboard btn-' + this.props.style, 'type', 'button');
            iDOMHelpers.renderArbitrary(this.props.label);
            return IncrementalDOM.elementClose('button');
        }
    }]);

    return Button;
}(_metalJsx2.default);

exports.default = Button;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Button.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Button.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, ".btn-dashboard.btn-primary {\n  color: #303240;\n  background-color: #fff;\n  border: 1px solid #9094ac; }\n  .btn-dashboard.btn-primary:hover {\n    color: #fff;\n    background-color: #303240;\n    border: 1px solid #303240; }\n", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Footer = __webpack_require__(89);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Footer2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalJsx = __webpack_require__(2);

var _metalJsx2 = _interopRequireDefault(_metalJsx);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_JSXComponent) {
    _inherits(Footer, _JSXComponent);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            IncrementalDOM.elementOpen('footer', null, null, 'class', 'footer');
            IncrementalDOM.elementOpen('div', null, null, 'class', 'container-fluid');
            IncrementalDOM.elementOpen('h4', null, null, 'class', 'footer__title');
            iDOMHelpers.renderArbitrary(this.props.title);
            IncrementalDOM.elementClose('h4');
            IncrementalDOM.elementClose('div');
            return IncrementalDOM.elementClose('footer');
        }
    }]);

    return Footer;
}(_metalJsx2.default);

exports.default = Footer;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(14)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Footer.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/sass-loader/lib/loader.js!./Footer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #fff;\n  color: #303240; }\n  .footer .footer__title {\n    margin: 0;\n    padding: 1.5rem 0;\n    font-size: 1rem; }\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=Dashboard.js.map