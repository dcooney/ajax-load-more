/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var ajaxloadmore;
/******/ (function () {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ './src/frontend/js/addons/cache.js':
			/*!*****************************************!*\
  !*** ./src/frontend/js/addons/cache.js ***!
  \*****************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cacheCreateParams: function() { return /* binding */ cacheCreateParams; },\n/* harmony export */   createCache: function() { return /* binding */ createCache; },\n/* harmony export */   getCache: function() { return /* binding */ getCache; },\n/* harmony export */   getCacheSlug: function() { return /* binding */ getCacheSlug; }\n/* harmony export */ });\n/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js/md5 */ "./node_modules/crypto-js/md5.js");\n/* harmony import */ var crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_md5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/api */ "./src/frontend/js/functions/api.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction cacheCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing;\n  alm.addons.cache = (listing === null || listing === void 0 || (_listing$dataset = listing.dataset) === null || _listing$dataset === void 0 ? void 0 : _listing$dataset.cache) === \'true\';\n  if (alm.addons.cache) {\n    alm.addons.cache_id = listing.dataset.cacheId;\n    alm.addons.cache_path = listing.dataset.cachePath;\n    alm.addons.cache_logged_in = listing.dataset.cacheLoggedIn ? listing.dataset.cacheLoggedIn : false;\n  }\n  return alm;\n}\n\n/**\n * Create unique cache slug from query params.\n *\n * @param {Object} alm  The ALM object.\n * @param {Object} data The data object.\n * @return {string}     The cache file slug.\n */\nfunction getCacheSlug(alm, data) {\n  var addons = alm.addons,\n    pagePrev = alm.pagePrev,\n    page = alm.page,\n    _alm$rel = alm.rel,\n    rel = _alm$rel === void 0 ? \'next\' : _alm$rel;\n  if (addons.nextpage) {\n    return "page-".concat(page + addons.nextpage_startpage); // Nextpage.\n  } else if (addons.single_post) {\n    return addons.single_post_id; // Single Post.\n  } else if (addons.woocommerce || addons.elementor) {\n    return rel === \'prev\' ? "page-".concat(pagePrev) : "page-".concat(page + 1); // WooCommerce || Elementor.\n  }\n\n  return crypto_js_md5__WEBPACK_IMPORTED_MODULE_0___default()(JSON.stringify(data)).toString(); // Standard.\n}\n\n/**\n * Create a cache file.\n *\n * @param {Object} alm  The ALM object.\n * @param {string} data Content to cache.\n * @param {string} name The cache slug\n * @since 5.3.1\n */\nfunction createCache(_x, _x2, _x3) {\n  return _createCache.apply(this, arguments);\n}\n\n/**\n * Get cache data file.\n *\n * @param {Object} alm    The ALM object.\n * @param {Object} params Query params.\n * @return {Promise}      Cache data or false.\n */\nfunction _createCache() {\n  _createCache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(alm, data, name) {\n    var _data$html, html, _data$meta, meta, params, res;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _data$html = data.html, html = _data$html === void 0 ? \'\' : _data$html, _data$meta = data.meta, meta = _data$meta === void 0 ? {} : _data$meta;\n          if (!(!html || !alm.addons.cache)) {\n            _context.next = 3;\n            break;\n          }\n          return _context.abrupt("return");\n        case 3:\n          params = {\n            cache_id: alm.addons.cache_id,\n            cache_logged_in: alm.addons.cache_logged_in,\n            canonical_url: alm.canonical_url,\n            name: name,\n            html: html.trim(),\n            postcount: meta.postcount,\n            totalposts: meta.totalposts\n          }; // Create the cache file via REST API.\n          _context.next = 6;\n          return _functions_api__WEBPACK_IMPORTED_MODULE_1__.api.post(\'ajax-load-more/cache/create\', params);\n        case 6:\n          res = _context.sent;\n          if (res.status === 200 && res.data && res.data.success) {\n            console.log(res.data.msg); // eslint-disable-line no-console\n          }\n        case 8:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _createCache.apply(this, arguments);\n}\nfunction getCache(_x4, _x5) {\n  return _getCache.apply(this, arguments);\n}\nfunction _getCache() {\n  _getCache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(alm, params) {\n    var restParams, res;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          if (!(!alm.addons.cache || alm.addons.cache && alm.addons.cache_logged_in)) {\n            _context2.next = 2;\n            break;\n          }\n          return _context2.abrupt("return", false);\n        case 2:\n          restParams = {\n            id: alm.addons.cache_id,\n            name: params.cache_slug\n          };\n          _context2.next = 5;\n          return _functions_api__WEBPACK_IMPORTED_MODULE_1__.api.get(\'ajax-load-more/cache/get\', {\n            params: restParams\n          });\n        case 5:\n          res = _context2.sent;\n          if (!(res.status === 200 && res.data)) {\n            _context2.next = 8;\n            break;\n          }\n          return _context2.abrupt("return", res.data);\n        case 8:\n          return _context2.abrupt("return", false);\n        case 9:\n        case "end":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return _getCache.apply(this, arguments);\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/cache.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/addons/call-to-actions.js':
			/*!***************************************************!*\
  !*** ./src/frontend/js/addons/call-to-actions.js ***!
  \***************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ctaCreateParams: function() { return /* binding */ ctaCreateParams; }\n/* harmony export */ });\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction ctaCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing;\n  alm.addons.cta = (listing === null || listing === void 0 || (_listing$dataset = listing.dataset) === null || _listing$dataset === void 0 ? void 0 : _listing$dataset.cta) === 'true';\n  if (alm.addons.cta) {\n    alm.addons.cta_position = listing.dataset.ctaPosition;\n    alm.addons.cta_repeater = listing.dataset.ctaRepeater;\n    alm.addons.cta_theme_repeater = listing.dataset.ctaThemeRepeater;\n  }\n  return alm;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/call-to-actions.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/comments.js':
			/*!********************************************!*\
  !*** ./src/frontend/js/addons/comments.js ***!
  \********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsCreateParams: function() { return /* binding */ commentsCreateParams; }\n/* harmony export */ });\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction commentsCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing;\n  alm.addons.comments = (listing === null || listing === void 0 || (_listing$dataset = listing.dataset) === null || _listing$dataset === void 0 ? void 0 : _listing$dataset.comments) === 'true';\n  if (alm.addons.comments) {\n    alm.addons.comments_post_id = listing.dataset.comments_post_id;\n    alm.addons.comments_per_page = listing.dataset.comments_per_page;\n    alm.addons.comments_per_page = alm.addons.comments_per_page === undefined ? '5' : alm.addons.comments_per_page;\n    alm.addons.comments_type = listing.dataset.comments_type;\n    alm.addons.comments_style = listing.dataset.comments_style;\n    alm.addons.comments_template = listing.dataset.comments_template;\n    alm.addons.comments_callback = listing.dataset.comments_callback;\n  }\n  return alm;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/comments.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/elementor.js':
			/*!*********************************************!*\
  !*** ./src/frontend/js/addons/elementor.js ***!
  \*********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elementor: function() { return /* binding */ elementor; },\n/* harmony export */   elementorCreateParams: function() { return /* binding */ elementorCreateParams; },\n/* harmony export */   elementorGetContent: function() { return /* binding */ elementorGetContent; },\n/* harmony export */   elementorGetNextUrl: function() { return /* binding */ elementorGetNextUrl; },\n/* harmony export */   elementorInit: function() { return /* binding */ elementorInit; },\n/* harmony export */   elementorLoaded: function() { return /* binding */ elementorLoaded; }\n/* harmony export */ });\n/* harmony import */ var _functions_getButtonURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/getButtonURL */ "./src/frontend/js/functions/getButtonURL.js");\n/* harmony import */ var _modules_lazyImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/lazyImages */ "./src/frontend/js/modules/lazyImages.js");\n/* harmony import */ var _modules_loadItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loadItems */ "./src/frontend/js/modules/loadItems.js");\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./src/frontend/js/addons/cache.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction elementorCreateParams(alm) {\n  var _alm = alm,\n    listing = _alm.listing;\n  alm.addons.elementor = listing.dataset.elementor === \'posts\' && listing.dataset.elementorSettings;\n  if (alm.addons.elementor) {\n    // Get Settings\n    alm.addons.elementor_type = \'posts\';\n    alm.addons.elementor_settings = JSON.parse(alm.listing.dataset.elementorSettings);\n\n    // Parse Container Settings\n    alm.addons.elementor_target = alm.addons.elementor_settings.target;\n    alm.addons.elementor_element = alm.addons.elementor_settings.target ? document.querySelector(".elementor-element ".concat(alm.addons.elementor_settings.target)) : \'\';\n    alm.addons.elementor_widget = elementorGetWidgetType(alm.addons.elementor_element);\n\n    // Masonry\n    alm = setElementorClasses(alm, alm.addons.elementor_widget);\n\n    // Pagination Element\n    alm.addons.elementor_controls = alm.addons.elementor_settings.controls;\n    alm.addons.elementor_controls = alm.addons.elementor_controls === \'true\' ? true : false;\n    alm.addons.elementor_scrolltop = parseInt(alm.addons.elementor_settings.scrolltop);\n\n    // Get next page URL.\n    alm.addons.elementor_next_page = elementorGetNextUrl(alm, alm.addons.elementor_element);\n\n    // Get the max pages.\n    alm.addons.elementor_max_pages = alm.addons.elementor_element.querySelector(\'.e-load-more-anchor\');\n    alm.addons.elementor_max_pages = alm.addons.elementor_max_pages ? parseInt(alm.addons.elementor_max_pages.dataset.maxPage) : 999;\n    alm.addons.elementor_paged = alm.addons.elementor_settings.paged ? parseInt(alm.addons.elementor_settings.paged) : 1;\n    alm.page = parseInt(alm.page) + alm.addons.elementor_paged;\n\n    // Masonry\n    alm = parseMasonryConfig(alm);\n    if (!alm.addons.elementor_element) {\n      console.warn("Ajax Load More: Unable to locate Elementor Widget. Are you sure you\'ve set up your target parameter correctly?");\n    }\n    if (!alm.addons.elementor_next_page) {\n      console.warn(\'Ajax Load More: Unable to locate Elementor pagination. There are either no results or Ajax Load More is unable to locate the pagination widget?\');\n    }\n  }\n  return alm;\n}\n\n/**\n * Set up the instance on Elementor\n *\n * @param {Object} alm\n * @since 5.3.0\n */\nfunction elementorInit(alm) {\n  if (!alm.addons.elementor || !alm.addons.elementor_type || !alm.addons.elementor_type === \'posts\') {\n    return false;\n  }\n  var target = alm.addons.elementor_element;\n  if (target) {\n    // Set button data attributes\n    alm.button.dataset.page = alm.addons.elementor_paged;\n\n    // Set button URL\n    var nextPage = alm.addons.elementor_next_page;\n    alm.button.dataset.url = nextPage ? nextPage : \'\';\n\n    // Set a11y attributes\n    target.setAttribute(\'aria-live\', \'polite\');\n    target.setAttribute(\'aria-atomic\', \'true\');\n    alm.listing.removeAttribute(\'aria-live\');\n    alm.listing.removeAttribute(\'aria-atomic\');\n\n    // Set data atts on 1st grid item\n    var item = target.querySelector(".".concat(alm.addons.elementor_item_class)); // Get first `.product` item\n    if (item) {\n      item.classList.add(\'alm-elementor\');\n      item.dataset.url = window.location;\n      item.dataset.page = alm.addons.elementor_paged;\n      item.dataset.pageTitle = document.title;\n    }\n\n    // Masonry Window Resize. Delay for masonry to be added via Elementor.\n    if (alm.addons.elementor_masonry) {\n      var resizeTimeout;\n      setTimeout(function () {\n        window.addEventListener(\'resize\', function () {\n          clearTimeout(resizeTimeout);\n          resizeTimeout = setTimeout(function () {\n            positionMasonryItems(alm, ".".concat(alm.addons.elementor_container_class), ".".concat(alm.addons.elementor_item_class));\n          }, 100);\n        });\n      }, 250);\n    }\n  }\n}\n\n/**\n * Get the content, title and results text from the Ajax response.\n *\n * @param {Object} alm        The alm object.\n * @param {string} url        The request URL.\n * @param {Object} response   Query response.\n * @param {string} cache_slug The cache slug.\n * @return {Object}           Results data.\n * @since 5.4.0\n */\nfunction elementorGetContent(alm, url, response, cache_slug) {\n  // Default data object.\n  var data = {\n    html: \'\',\n    meta: {\n      postcount: 0,\n      totalposts: 0\n    }\n  };\n\n  // Successful response.\n  if (response.status === 200 && response.data) {\n    var addons = alm.addons,\n      page = alm.page,\n      button = alm.button;\n\n    // Create temp div to hold response data.\n    var content = document.createElement(\'div\');\n    content.innerHTML = response.data;\n\n    // Set button URL.\n    var nextURL = elementorGetNextUrl(alm, content);\n    if (nextURL) {\n      (0,_functions_getButtonURL__WEBPACK_IMPORTED_MODULE_0__.setButtonAtts)(button, page + 1, nextURL);\n    } else {\n      // Disable button if no next page.\n      alm.AjaxLoadMore.triggerDone();\n    }\n\n    // Get Page Title\n    var title = content.querySelector(\'title\').innerHTML;\n    data.pageTitle = title;\n\n    // Get Elementor Items container.\n    var container = content.querySelector("".concat(addons.elementor_target, " .").concat(addons.elementor_container_class));\n    if (!container) {\n      console.warn("Ajax Load More Elementor: Unable to find Elementor container element.");\n      return data;\n    }\n\n    // Get the first item and append data attributes.\n    var item = container ? container.querySelector(".".concat(addons.elementor_item_class)) : null;\n    if (item) {\n      item.classList.add(\'alm-elementor\');\n      item.dataset.url = url;\n      item.dataset.page = addons.elementor_paged;\n      item.dataset.pageTitle = title;\n    }\n\n    // Count the number of returned items.\n    var items = container.querySelectorAll(".".concat(addons.elementor_item_class));\n    if (items) {\n      // Set the html to the elementor container data.\n      data.html = container ? container.innerHTML : \'\';\n      data.meta.postcount = items.length;\n      data.meta.totalposts = items.length;\n\n      // Create cache file.\n      (0,_cache__WEBPACK_IMPORTED_MODULE_3__.createCache)(alm, data, cache_slug);\n    }\n  }\n  return data;\n}\n\n/**\n * Core ALM Elementor loader.\n *\n * @param {HTMLElement} content The HTML data.\n * @param {Object}      alm     The alm object.\n * @since 5.3.0\n */\nfunction elementor(content, alm) {\n  if (!content || !alm) {\n    alm.AjaxLoadMore.triggerDone();\n    return false;\n  }\n  return new Promise(function (resolve) {\n    var addons = alm.addons;\n    var container = alm.addons.elementor_element.querySelector(".".concat(addons.elementor_container_class)); // Get post container\n    var items = content.querySelectorAll(".".concat(addons.elementor_item_class)); // Get all items in container\n\n    if (container && items) {\n      var ElementorItems = Array.prototype.slice.call(items); // Convert NodeList to Array\n\n      // Trigger almElementorLoaded callback.\n      if (typeof almElementorLoaded === \'function\') {\n        window.almElementorLoaded(ElementorItems);\n      }\n      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_modules_loadItems__WEBPACK_IMPORTED_MODULE_2__["default"])(container, ElementorItems, alm);\n            case 2:\n              if (addons.elementor_masonry) {\n                setTimeout(function () {\n                  positionMasonryItems(alm, ".".concat(addons.elementor_container_class), ".".concat(addons.elementor_item_class));\n                }, 125);\n              }\n              resolve(true);\n            case 4:\n            case "end":\n              return _context.stop();\n          }\n        }, _callee);\n      }))()["catch"](function (e) {\n        console.warn(e, \'There was an error with Elementor\'); // eslint-disable-line no-console\n      });\n    } else {\n      resolve(false);\n    }\n  });\n}\n\n/**\n * Elementor loaded and dispatch actions.\n *\n * @param {Object} alm The alm object.\n * @since 5.5.0\n */\nfunction elementorLoaded(alm) {\n  var page = alm.page,\n    AjaxLoadMore = alm.AjaxLoadMore,\n    addons = alm.addons;\n  var nextPage = page + 1;\n  var max_pages = addons.elementor_max_pages;\n\n  // Lazy load images if necessary.\n  (0,_modules_lazyImages__WEBPACK_IMPORTED_MODULE_1__.lazyImages)(alm);\n\n  // Trigger almComplete.\n  if (typeof almComplete === \'function\' && alm.transition !== \'masonry\') {\n    window.almComplete(alm);\n  }\n\n  // End transitions.\n  AjaxLoadMore.transitionEnd();\n\n  // ALM Done.\n  if (nextPage >= max_pages) {\n    AjaxLoadMore.triggerDone();\n  }\n}\n\n/**\n * Set the required classnames for parsing data and injecting content into the Elementor listing\n *\n * @param {Object} alm  The alm object.\n * @param {string} type The Elementor type.\n * @return {Object}     The modified object.\n */\nfunction setElementorClasses(alm) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'posts\';\n  // Container Class\n  alm.addons.elementor_container_class = type === \'woocommerce\' ? alm.addons.elementor_settings.woo_container_class : alm.addons.elementor_settings.posts_container_class;\n\n  // Item Class\n  alm.addons.elementor_item_class = type === \'woocommerce\' ? alm.addons.elementor_settings.woo_item_class : alm.addons.elementor_settings.posts_item_class;\n\n  // Pagination Class\n  alm.addons.elementor_pagination_class = type === \'woocommerce\' ? ".".concat(alm.addons.elementor_settings.woo_pagination_class) : ".".concat(alm.addons.elementor_settings.posts_pagination_class);\n  return alm;\n}\n\n/**\n * Parse Masonry Settings from Elementor Data atts\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction parseMasonryConfig(alm) {\n  if (!alm.addons.elementor_element) {\n    return alm; // Exit if not found.\n  }\n\n  var target = alm.addons.elementor_element;\n  var settings = target.dataset.settings ? JSON.parse(target.dataset.settings) : \'\';\n  if (!settings) {\n    return alm; // Exit if not found.\n  }\n\n  alm.addons.elementor_masonry = settings.hasOwnProperty(\'cards_masonry\') || settings.hasOwnProperty(\'classic_masonry\');\n  if (alm.addons.elementor_masonry) {\n    alm.addons.elementor_masonry_columns = parseInt(settings.cards_columns) || parseInt(settings.classic_columns);\n    alm.addons.elementor_masonry_columns_mobile = parseInt(settings.cards_columns_mobile) || parseInt(settings.classic_columns_mobile);\n    alm.addons.elementor_masonry_columns_tablet = parseInt(settings.cards_columns_tablet) || parseInt(settings.classic_columns_tablet);\n    alm.addons.elementor_masonry_gap = parseInt(settings.cards_row_gap.size);\n  }\n  return alm;\n}\n\n/**\n * Position Elementor Masonry Items\n *\n * @param {Object} alm             The alm object.\n * @param {string} container_class The container classname.\n * @param {string} item_class      The item classname.\n */\nfunction positionMasonryItems(alm, container_class, item_class) {\n  var heights = [];\n\n  // Get Elementor Settings\n  var columnsCount = alm.addons.elementor_masonry_columns;\n  var columnsCountTablet = alm.addons.elementor_masonry_columns_tablet;\n  var columnsCountMobile = alm.addons.elementor_masonry_columns_mobile;\n  var verticalSpaceBetween = alm.addons.elementor_masonry_gap;\n  var columns = columnsCount;\n\n  // Get Elementor Breakpoints\n  var breakpoints = window.elementorFrontendConfig && window.elementorFrontendConfig.breakpoints ? window.elementorFrontendConfig.breakpoints : 0;\n  var windowW = window.innerWidth;\n\n  // Set Columns\n  if (windowW > breakpoints.lg) {\n    columns = columnsCount;\n  } else if (windowW > breakpoints.md) {\n    columns = columnsCountTablet;\n  } else {\n    columns = columnsCountMobile;\n  }\n\n  // Get Containers\n  var container = document.querySelector(container_class);\n  if (!container) {\n    return false;\n  }\n  var items = container.querySelectorAll(item_class);\n  if (!items) {\n    return false;\n  }\n\n  // Loop items\n  items.forEach(function (item, index) {\n    var row = Math.floor(index / columns);\n    var itemHeight = item.getBoundingClientRect().height + verticalSpaceBetween;\n    if (row) {\n      var itemPosition = jQuery(item).position();\n      var indexAtRow = index % columns;\n      var pullHeight = Math.round(itemPosition.top) - heights[indexAtRow];\n      pullHeight *= -1;\n      item.style.marginTop = "".concat(Math.round(pullHeight), "px");\n      heights[indexAtRow] += itemHeight;\n    } else {\n      heights.push(itemHeight);\n    }\n  });\n}\n\n/**\n * Determine the type of elementor widget (woocommerce || posts)\n *\n * @param {HTMLElement} target The target element.\n * @return {string}            The Elementor type.\n */\nfunction elementorGetWidgetType(target) {\n  if (!target) {\n    return false;\n  }\n  // If container contains the woocommerce elementor class\n  var type = target.classList.contains(\'elementor-wc-products\') ? \'woocommerce\' : \'posts\';\n  return type;\n}\n\n/**\n * Get the pagination container for the Elementor pagination.\n *\n * @param {Object}  alm     The alm object.\n * @param {Element} content The HTML content to search.\n * @return {HTMLElement}    The pagination element.\n */\nfunction elementorGetNextUrl(alm, content) {\n  var _addons$elementor_set, _element$querySelecto;\n  var _alm$addons = alm.addons,\n    addons = _alm$addons === void 0 ? {} : _alm$addons;\n\n  // Locate the pagination container.\n  var element = (content === null || content === void 0 ? void 0 : content.querySelector(addons === null || addons === void 0 ? void 0 : addons.elementor_pagination_class)) || (content === null || content === void 0 ? void 0 : content.querySelector(".".concat(addons === null || addons === void 0 || (_addons$elementor_set = addons.elementor_settings) === null || _addons$elementor_set === void 0 ? void 0 : _addons$elementor_set.pagination_class)));\n\n  // Get the next page URL from the pagination element.\n  var nextpage = element === null || element === void 0 || (_element$querySelecto = element.querySelector(\'a.next\')) === null || _element$querySelecto === void 0 ? void 0 : _element$querySelecto.href;\n\n  // Return the next page URL.\n  return nextpage ? nextpage : false;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/elementor.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/addons/filters.js':
			/*!*******************************************!*\
  !*** ./src/frontend/js/addons/filters.js ***!
  \*******************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFiltersAttributes: function() { return /* binding */ addFiltersAttributes; },\n/* harmony export */   buildFilterURL: function() { return /* binding */ buildFilterURL; },\n/* harmony export */   filtersCreateParams: function() { return /* binding */ filtersCreateParams; },\n/* harmony export */   parseQuerystring: function() { return /* binding */ parseQuerystring; }\n/* harmony export */ });\n/* harmony import */ var _functions_getParameterByName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/getParameterByName */ \"./src/frontend/js/functions/getParameterByName.js\");\n/* harmony import */ var _functions_getQueryVariable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/getQueryVariable */ \"./src/frontend/js/functions/getQueryVariable.js\");\n\n\n\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction filtersCreateParams(alm) {\n  var _alm$listing;\n  var listing = alm.listing;\n  alm.addons.filters = (alm === null || alm === void 0 || (_alm$listing = alm.listing) === null || _alm$listing === void 0 || (_alm$listing = _alm$listing.dataset) === null || _alm$listing === void 0 ? void 0 : _alm$listing.filters) === 'true';\n  if (alm.addons.filters) {\n    alm.addons.filters_url = listing.dataset.filtersUrl === 'true';\n    alm.addons.filters_target = listing.dataset.filtersTarget ? listing.dataset.filtersTarget : false;\n    alm.addons.filters_paging = listing.dataset.filtersPaging === 'true';\n    alm.addons.filters_scroll = listing.dataset.filtersScroll === 'true';\n    alm.addons.filters_scrolltop = listing.dataset.filtersScrolltop ? listing.dataset.filtersScrolltop : '30';\n    alm.addons.filters_debug = listing.dataset.filtersDebug;\n    alm.facets = listing.dataset.facets === 'true';\n\n    // Display warning when `filters_target` parameter is missing.\n    if (!alm.addons.filters_target) {\n      console.warn('Ajax Load More: Unable to locate a target for Filters. Make sure you set a target parameter in the core Ajax Load More shortcode - e.g. [ajax_load_more filters=\"true\" target=\"filters\"]');\n    }\n\n    // Parse querystring value for pg.\n    var page = (0,_functions_getParameterByName__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('pg');\n    alm.addons.filters_startpage = page !== null ? parseInt(page) : 0;\n\n    // Handle a paged URL with filters.\n    if (alm.addons.filters_startpage > 0) {\n      if (alm.addons.paging) {\n        // Paging add-on: Set current page value.\n        alm.page = alm.addons.filters_startpage - 1;\n      } else {\n        // Set posts_per_page value to load all required posts.\n        alm.posts_per_page = alm.posts_per_page * alm.addons.filters_startpage;\n        alm.paged = true;\n      }\n    }\n  }\n  return alm;\n}\n\n/**\n * Create data attributes for a Filters item.\n *\n * @param {Object}      alm     The ALM object.\n * @param {HTMLElement} element The element HTML node.\n * @param {number}      pagenum The current page number.\n * @return {HTMLElement}        Modified HTML element.\n */\nfunction addFiltersAttributes(alm, element, pagenum) {\n  var canonical_url = alm.canonical_url;\n  var querystring = window.location.search;\n  element.classList.add('alm-filters');\n  element.dataset.page = pagenum;\n  if (pagenum > 1) {\n    element.dataset.url = canonical_url + buildFilterURL(alm, querystring, pagenum);\n  } else {\n    element.dataset.url = canonical_url + buildFilterURL(alm, querystring, 0);\n  }\n  return element;\n}\n\n/**\n * Parse a filter querystring for returning caches directories.\n *\n * @param {string} path The URL path.\n * @since 5.3.1\n */\nfunction parseQuerystring(path) {\n  // Get querystring\n  var query = window.location.search.substring(1);\n  var obj = '';\n  var cache_dir = '';\n\n  // Parse querystring into object\n  if (query) {\n    obj = JSON.parse('{\"' + query.replace(/&/g, '\",\"').replace(/=/g, '\":\"') + '\"}', function (key, value) {\n      // Replace + with - in URL\n      return key === '' ? value : decodeURIComponent(value.replace(/\\+/g, '-'));\n    });\n\n    // Remove the following properties from the object as they should not be included in the cache ID\n\n    if (obj.pg) {\n      // `pg` object prop\n      delete obj.pg;\n    }\n    if (obj.auto) {\n      // `auto` object prop\n      delete obj.auto;\n    }\n  }\n  if (obj) {\n    cache_dir += '/';\n    Object.keys(obj).forEach(function (key, index) {\n      cache_dir += index > 0 ? '--' : '';\n      cache_dir += \"\".concat(key, \"--\").concat(obj[key]);\n    });\n  }\n  return path + cache_dir;\n}\n\n/**\n * Build new paging URL for filters.\n *\n * @param {Object} alm         The ALM object.\n * @param {string} querystring The current querystring.\n * @param {number} page        The page number.\n * @return {string}            The querystring.\n * @since 5.3.5\n */\nfunction buildFilterURL(alm) {\n  var querystring = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var qs = querystring;\n  if (alm.addons.filters_paging) {\n    if (page > 1) {\n      // Paged\n      if (qs) {\n        // If already has `pg` in querystring\n        if ((0,_functions_getQueryVariable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('pg')) {\n          qs = querystring.replace(/(pg=)[^\\&]+/, '$1' + page);\n        } else {\n          qs = querystring + '&pg=' + page;\n        }\n      } else {\n        qs = '?pg=' + page;\n      }\n    } else {\n      // Not Paged\n      qs = querystring.replace(/(pg=)[^\\&]+/, '');\n      qs = qs === '?' ? '' : qs; // Remove `?` if only symbol in querystring\n      qs = qs[qs.length - 1] === '&' ? qs.slice(0, -1) : qs; // Remove trailing `&` symbols\n    }\n  }\n\n  return qs;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/filters.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/next-page.js':
			/*!*********************************************!*\
  !*** ./src/frontend/js/addons/next-page.js ***!
  \*********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextpageCreateParams: function() { return /* binding */ nextpageCreateParams; }\n/* harmony export */ });\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction nextpageCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing;\n  alm.addons.nextpage = (listing === null || listing === void 0 || (_listing$dataset = listing.dataset) === null || _listing$dataset === void 0 ? void 0 : _listing$dataset.nextpage) === 'true';\n  if (alm.addons.nextpage) {\n    alm.addons.nextpage_urls = listing.dataset.nextpageUrls === undefined ? 'true' : listing.dataset.nextpageUrls;\n    alm.addons.nextpage_scroll = listing.dataset.nextpageScroll === undefined ? 'false:30' : listing.dataset.nextpageScroll;\n    alm.addons.nextpage_post_id = listing.dataset.nextpagePostId ? listing.dataset.nextpagePostId : false;\n    alm.addons.nextpage_startpage = listing.dataset.nextpageStartpage ? parseInt(listing.dataset.nextpageStartpage) : 1;\n    alm.addons.nextpage_title_template = listing.dataset.nextpageTitleTemplate;\n    alm.addons.nextpage_postTitle = alm.listing.dataset.nextpagePostTitle;\n\n    // Set default fallbacks.\n    alm.posts_per_page = 1;\n    alm.orginal_posts_per_page = 1;\n    if (!alm.addons.nextpage_post_id) {\n      alm.addons.nextpage = false;\n    }\n    if (alm.addons.nextpage_startpage > 1) {\n      alm.paged = true;\n    }\n  }\n  return alm;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/next-page.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/paging.js':
			/*!******************************************!*\
  !*** ./src/frontend/js/addons/paging.js ***!
  \******************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pagingCreateParams: function() { return /* binding */ pagingCreateParams; }\n/* harmony export */ });\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction pagingCreateParams(alm) {\n  var listing = alm.listing;\n  alm.addons.paging = listing.dataset.paging === 'true';\n  if (alm.addons.paging) {\n    alm.addons.paging_init = true;\n    alm.addons.paging_controls = listing.dataset.pagingControls === 'true';\n    alm.addons.paging_show_at_most = listing.dataset.pagingShowAtMost ? parseInt(listing.dataset.pagingShowAtMost) : 6;\n    alm.addons.paging_classes = listing.dataset.pagingClasses;\n    alm.addons.paging_first_label = listing.dataset.pagingFirstLabel;\n    alm.addons.paging_previous_label = listing.dataset.pagingPreviousLabel;\n    alm.addons.paging_next_label = listing.dataset.pagingNextLabel;\n    alm.addons.paging_last_label = listing.dataset.pagingLastLabel;\n    alm.addons.paging_scroll = listing.dataset.pagingScroll ? listing.dataset.pagingScroll : false;\n    alm.addons.paging_scrolltop = listing.dataset.pagingScrolltop ? parseInt(listing.dataset.pagingScrolltop) : 100;\n    alm.addons.paging_container = listing.querySelector('.alm-paging-content');\n    alm.pause = alm.addons.preloaded ? true : alm.pause; // If preloaded, pause ALM.\n  }\n\n  return alm;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/paging.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/preloaded.js':
			/*!*********************************************!*\
  !*** ./src/frontend/js/addons/preloaded.js ***!
  \*********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   preloadedCreateParams: function() { return /* binding */ preloadedCreateParams; },\n/* harmony export */   setPreloadedParams: function() { return /* binding */ setPreloadedParams; }\n/* harmony export */ });\n/* harmony import */ var _functions_stripEmptyNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/stripEmptyNodes */ "./src/frontend/js/functions/stripEmptyNodes.js");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/frontend/js/addons/filters.js");\n/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo */ "./src/frontend/js/addons/seo.js");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction preloadedCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing;\n  alm.addons.preloaded = listing.dataset.preloaded === \'true\';\n  alm.addons.preloaded_amount = listing !== null && listing !== void 0 && (_listing$dataset = listing.dataset) !== null && _listing$dataset !== void 0 && _listing$dataset.preloadedAmount ? parseInt(listing.dataset.preloadedAmount) : alm.posts_per_page;\n  if (!alm.addons.preloaded) {\n    alm.addons.preloaded_amount = 0;\n  }\n  if (alm.addons.preloaded) {\n    var _alm$localize;\n    if (alm !== null && alm !== void 0 && (_alm$localize = alm.localize) !== null && _alm$localize !== void 0 && _alm$localize.total_posts) {\n      // Disable ALM if total_posts is equal to or less than preloaded_amount.\n      if (parseInt(alm.localize.total_posts) <= alm.addons.preloaded_amount) {\n        alm.addons.preloaded_total_posts = parseInt(alm.localize.total_posts);\n        alm.disable_ajax = true;\n      }\n    }\n  }\n  return alm;\n}\n\n/**\n * Set parameters on HTML elements for preloaded results.\n *\n * @param {Object} alm The ALM object.\n * @since 7.0.0\n */\nfunction setPreloadedParams(alm) {\n  var addons = alm.addons,\n    listing = alm.listing;\n  if (addons.paging) {\n    // Exit if paging.\n    return;\n  }\n\n  // Parse preloaded data into array of HTML elements.\n  var data = (0,_functions_stripEmptyNodes__WEBPACK_IMPORTED_MODULE_0__["default"])(_toConsumableArray(listing === null || listing === void 0 ? void 0 : listing.childNodes));\n\n  // Get first element in the data array.\n  var firstElement = data !== null && data !== void 0 && data.length && data[0] ? data[0] : false;\n  if (firstElement) {\n    if (addons !== null && addons !== void 0 && addons.seo) {\n      (0,_seo__WEBPACK_IMPORTED_MODULE_2__.addSEOAttributes)(alm, firstElement, 1);\n    }\n    if (addons !== null && addons !== void 0 && addons.filters) {\n      (0,_filters__WEBPACK_IMPORTED_MODULE_1__.addFiltersAttributes)(alm, firstElement, 1);\n    }\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/preloaded.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/addons/seo.js':
			/*!***************************************!*\
  !*** ./src/frontend/js/addons/seo.js ***!
  \***************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSEOAttributes: function() { return /* binding */ addSEOAttributes; },\n/* harmony export */   createSEOOffset: function() { return /* binding */ createSEOOffset; },\n/* harmony export */   getSEOPageNum: function() { return /* binding */ getSEOPageNum; },\n/* harmony export */   seoCreateParams: function() { return /* binding */ seoCreateParams; }\n/* harmony export */ });\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction seoCreateParams(alm) {\n  var _alm$listing;\n  var listing = alm.listing;\n  alm.addons.seo = listing.dataset.seo === 'true';\n  if (alm.addons.seo) {\n    alm.addons.seo_offset = listing.dataset.seoOffset || false;\n    alm.addons.seo_permalink = listing.dataset.seoPermalink;\n    alm.addons.seo_trailing_slash = listing.dataset.seoTrailingSlash === 'false' ? '' : '/';\n    alm.addons.seo_leading_slash = listing.dataset.seoLeadingSlash === 'true' ? '/' : '';\n    if (alm.addons.seo_offset === 'true') {\n      alm.offset = alm.posts_per_page;\n    }\n  }\n  alm.start_page = (alm === null || alm === void 0 || (_alm$listing = alm.listing) === null || _alm$listing === void 0 || (_alm$listing = _alm$listing.dataset) === null || _alm$listing === void 0 ? void 0 : _alm$listing.seoStartPage) || '';\n  if (alm.start_page) {\n    alm.start_page = parseInt(alm.start_page);\n    alm.addons.seo_scroll = listing.dataset.seoScroll;\n    alm.addons.seo_scrolltop = listing.dataset.seoScrolltop;\n    alm.addons.seo_controls = listing.dataset.seoControls;\n    alm.paged = false;\n    if (alm.start_page > 1) {\n      alm.paged = true;\n      if (alm.addons.paging) {\n        // Paging add-on: Set current page value.\n        alm.page = alm.start_page - 1;\n      } else {\n        // Set posts_per_page value to load all required posts.\n        alm.posts_per_page = alm.start_page * alm.posts_per_page;\n      }\n    }\n  } else {\n    alm.start_page = 1;\n  }\n  return alm;\n}\n\n/**\n * Create data attributes for an SEO item.\n *\n * @param {Object}      alm        The ALM object.\n * @param {HTMLElement} element    The element HTML node.\n * @param {number}      pagenum    The current page number.\n * @param {boolean}     skipOffset Skip the SEO offset check.\n * @return {HTMLElement}           Modified HTML element.\n */\nfunction addSEOAttributes(alm, element, pagenum) {\n  var skipOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var addons = alm.addons,\n    canonical_url = alm.canonical_url;\n  var _alm_localize = alm_localize,\n    _alm_localize$retain_ = _alm_localize.retain_querystring,\n    retain_querystring = _alm_localize$retain_ === void 0 ? true : _alm_localize$retain_;\n  var querystring = retain_querystring ? window.location.search : '';\n  pagenum = !skipOffset ? getSEOPageNum(addons === null || addons === void 0 ? void 0 : addons.seo_offset, pagenum) : pagenum;\n  element.classList.add('alm-seo');\n  element.dataset.page = pagenum;\n  if (addons.seo_permalink === 'default') {\n    // Default Permalinks\n    if (pagenum > 1) {\n      element.dataset.url = \"\".concat(canonical_url).concat(querystring, \"&paged=\").concat(pagenum);\n    } else {\n      element.dataset.url = \"\".concat(canonical_url).concat(querystring);\n    }\n  } else {\n    // Pretty Permalinks\n    if (pagenum > 1) {\n      element.dataset.url = \"\".concat(canonical_url).concat(addons.seo_leading_slash, \"page/\").concat(pagenum).concat(addons.seo_trailing_slash).concat(querystring);\n    } else {\n      element.dataset.url = \"\".concat(canonical_url).concat(querystring);\n    }\n  }\n  return element;\n}\n\n/**\n * Get the current page number.\n *\n * @param {string} seo_offset Is this an SEO offset.\n * @param {number} page       The page number,\n * @return {number}           The page number.\n */\nfunction getSEOPageNum(seo_offset, page) {\n  return seo_offset === 'true' ? parseInt(page) + 1 : parseInt(page);\n}\n\n/**\n * Create div to hold offset values for SEO.\n *\n * @param {Object} alm The ALM object.\n */\nfunction createSEOOffset(alm) {\n  var offsetDiv = document.createElement('div');\n  // Add data attributes.\n  offsetDiv = addSEOAttributes(alm, offsetDiv, 1, true);\n\n  // Insert into ALM container.\n  alm.main.insertBefore(offsetDiv, alm.listing);\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/seo.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/singleposts.js':
			/*!***********************************************!*\
  !*** ./src/frontend/js/addons/singleposts.js ***!
  \***********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addSinglePostsAttributes: function() { return /* binding */ addSinglePostsAttributes; },\n/* harmony export */   singlepostsCreateParams: function() { return /* binding */ singlepostsCreateParams; },\n/* harmony export */   singlepostsHTML: function() { return /* binding */ singlepostsHTML; }\n/* harmony export */ });\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ \"./src/frontend/js/addons/cache.js\");\n\n\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction singlepostsCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing;\n  alm.addons.single_post = (listing === null || listing === void 0 || (_listing$dataset = listing.dataset) === null || _listing$dataset === void 0 ? void 0 : _listing$dataset.singlePost) === 'true';\n  if (alm.addons.single_post) {\n    alm.addons.single_post_id = listing.dataset.singlePostId;\n    alm.addons.single_post_query = listing.dataset.singlePostQuery;\n    alm.addons.single_post_order = listing.dataset.singlePostOrder === undefined ? 'previous' : listing.dataset.singlePostOrder;\n    alm.addons.single_post_init_id = listing.dataset.singlePostId;\n    alm.addons.single_post_taxonomy = listing.dataset.singlePostTaxonomy === undefined ? '' : listing.dataset.singlePostTaxonomy;\n    alm.addons.single_post_excluded_terms = listing.dataset.singlePostExcludedTerms === undefined ? '' : listing.dataset.singlePostExcludedTerms;\n    alm.addons.single_post_progress_bar = listing.dataset.singlePostProgressBar === undefined ? '' : listing.dataset.singlePostProgressBar;\n    alm.addons.single_post_target = listing.dataset.singlePostTarget === undefined ? '' : listing.dataset.singlePostTarget;\n    alm.addons.single_post_preview = listing.dataset.singlePostPreview === undefined ? false : true;\n\n    // Post Preview. Does this even work?\n    if (alm.addons.single_post_preview) {\n      var singlePostPreviewData = listing.dataset.singlePostPreview.split(':');\n      alm.addons.single_post_preview_data = {\n        button_label: singlePostPreviewData[0] ? singlePostPreviewData[0] : 'Continue Reading',\n        height: singlePostPreviewData[1] ? singlePostPreviewData[1] : 500,\n        element: singlePostPreviewData[2] ? singlePostPreviewData[2] : 'default',\n        className: 'alm-single-post--preview'\n      };\n    }\n    if (alm.addons.single_post_id === undefined) {\n      alm.addons.single_post_id = '';\n      alm.addons.single_post_init_id = '';\n    }\n\n    // Set default fallbacks.\n    alm.addons.single_post_permalink = '';\n    alm.addons.single_post_title = '';\n    alm.addons.single_post_slug = '';\n    alm.addons.single_post_cache = false;\n    alm.addons.single_post_title_template = listing.dataset.singlePostTitleTemplate;\n    alm.addons.single_post_siteTitle = listing.dataset.singlePostSiteTitle;\n    alm.addons.single_post_siteTagline = listing.dataset.singlePostSiteTagline;\n    alm.addons.single_post_scroll = listing.dataset.singlePostScroll;\n    alm.addons.single_post_scroll_speed = listing.dataset.singlePostScrollSpeed;\n    alm.addons.single_post_scroll_top = listing.dataset.singlePostScrolltop;\n    alm.addons.single_post_controls = listing.dataset.singlePostControls;\n  }\n  return alm;\n}\n\n/**\n * Create the HTML for loading Single Posts.\n *\n * @param {Object} alm        The alm object.\n * @param {Object} response   Query response.\n * @param {string} cache_slug The cache slug.\n * @return {Object}           Results data.\n * @since 5.1.8.1\n */\nfunction singlepostsHTML(alm, response, cache_slug) {\n  var data = {\n    html: '',\n    meta: {\n      postcount: 0,\n      totalposts: 0\n    }\n  };\n\n  // Get target element.\n  var _alm$addons = alm.addons,\n    single_post_target = _alm$addons.single_post_target,\n    single_post_id = _alm$addons.single_post_id;\n  if (response.status === 200 && response.data && single_post_target) {\n    var _window;\n    // Create temp div to hold response data.\n    var div = document.createElement('div');\n    div.innerHTML = response.data;\n\n    // Get target element.\n    var html = div.querySelector(single_post_target);\n    if (!html) {\n      console.warn(\"Ajax Load More: Unable to find \".concat(single_post_target, \" element.\"));\n      return data;\n    }\n\n    // Get any custom target elements.\n    if ((_window = window) !== null && _window !== void 0 && _window.almSinglePostsCustomElements) {\n      var _window2;\n      var customElements = singlepostsGetCustomElements(div, (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.almSinglePostsCustomElements, single_post_id);\n      if (customElements) {\n        // Get first element in HTML.\n        var target = html.querySelector('article, section, div');\n        if (target) {\n          target.appendChild(customElements);\n        }\n      }\n    }\n    data.html = html.innerHTML;\n    data.meta = {\n      postcount: 1,\n      totalposts: 1\n    };\n\n    // Create cache file.\n    (0,_cache__WEBPACK_IMPORTED_MODULE_0__.createCache)(alm, data, cache_slug);\n  }\n  return data;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (singlepostsHTML);\n\n/**\n * Collect custom target elements and append them to the returned HTML.\n * This function is useful to get elements from outside the ALM target and bring them into the returned HTML.\n * Useful for when CSS or JS may be loaded in the <head/> and we need it brought into the HTML for Single Posts.\n *\n * e.g. window.almSinglePostsCustomElements = ['#woocommerce-inline-inline-css', '#wc-block-style-css'];\n *\n * @param {HTMLElement}   content        The HTML element.\n * @param {Array}         customElements The elements to search for in content.\n * @param {string|number} id             The Post ID.\n * @return {HTMLElement}                 The HTML elements.\n */\nfunction singlepostsGetCustomElements() {\n  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var customElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var id = arguments.length > 2 ? arguments[2] : undefined;\n  if (!content || !customElements) {\n    return container; // Exit if empty.\n  }\n\n  // Create container element if if doesn't exist.\n  var container = document.createElement('div');\n  container.classList.add('alm-custom-elements');\n  container.dataset.id = id;\n\n  // Convert customElements to an Array.\n  customElements = !Array.isArray(customElements) ? [customElements] : customElements;\n\n  // Loop Array to extract elements and append to container.\n  for (var i = 0; i < customElements.length; i++) {\n    var element = content.querySelector(customElements[i]);\n    if (element) {\n      element.classList.add('alm-custom-element');\n      container.appendChild(element);\n    }\n  }\n  return container;\n}\n\n/**\n * Create data attributes for a Single Post item.\n *\n * @param {Object} alm      The ALM object.\n * @param {Array}  elements The elements HTML nodes as an array.\n * @return {Array}          Modified HTML element.\n */\nfunction addSinglePostsAttributes(alm, elements) {\n  // Get first element in NodeList.\n  var element = elements !== null && elements !== void 0 && elements.length ? elements[0] : false;\n  if (!element) {\n    return elements;\n  }\n  var page = alm.page,\n    addons = alm.addons;\n  element.setAttribute('class', \"alm-single-post post-\".concat(addons.single_post_id));\n  element.dataset.id = addons.single_post_id;\n  element.dataset.url = addons.single_post_permalink;\n  element.dataset.page = addons.single_post_target ? parseInt(page) + 1 : page;\n  element.dataset.title = addons.single_post_title;\n  return elements;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/singleposts.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/addons/woocommerce.js':
			/*!***********************************************!*\
  !*** ./src/frontend/js/addons/woocommerce.js ***!
  \***********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   almWooCommerceResultsTextInit: function() { return /* binding */ almWooCommerceResultsTextInit; },\n/* harmony export */   wooCreateParams: function() { return /* binding */ wooCreateParams; },\n/* harmony export */   wooGetContent: function() { return /* binding */ wooGetContent; },\n/* harmony export */   wooInit: function() { return /* binding */ wooInit; },\n/* harmony export */   wooReset: function() { return /* binding */ wooReset; },\n/* harmony export */   woocommerce: function() { return /* binding */ woocommerce; },\n/* harmony export */   woocommerceLoaded: function() { return /* binding */ woocommerceLoaded; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var _functions_dispatchScrollEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/dispatchScrollEvent */ "./src/frontend/js/functions/dispatchScrollEvent.js");\n/* harmony import */ var _functions_getButtonURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/getButtonURL */ "./src/frontend/js/functions/getButtonURL.js");\n/* harmony import */ var _modules_lazyImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/lazyImages */ "./src/frontend/js/modules/lazyImages.js");\n/* harmony import */ var _modules_loadItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/loadItems */ "./src/frontend/js/modules/loadItems.js");\n/* harmony import */ var _modules_loadPrevious__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/loadPrevious */ "./src/frontend/js/modules/loadPrevious.js");\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache */ "./src/frontend/js/addons/cache.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n/**\n * Create add-on params for ALM.\n *\n * @param {Object} alm The alm object.\n * @return {Object}    The modified object.\n */\nfunction wooCreateParams(alm) {\n  var _listing$dataset;\n  var listing = alm.listing,\n    addons = alm.addons;\n  alm.addons.woocommerce = (listing === null || listing === void 0 || (_listing$dataset = listing.dataset) === null || _listing$dataset === void 0 ? void 0 : _listing$dataset.woo) === \'true\';\n  if (alm.addons.woocommerce && listing.dataset.wooSettings) {\n    var _addons$woocommerce_s;\n    alm.addons.woocommerce_settings = JSON.parse(listing.dataset.wooSettings);\n    alm.addons.woocommerce_settings.results_text = document.querySelectorAll(addons === null || addons === void 0 || (_addons$woocommerce_s = addons.woocommerce_settings) === null || _addons$woocommerce_s === void 0 ? void 0 : _addons$woocommerce_s.results); // Add Results Text\n    alm.page = parseInt(alm.page) + parseInt(addons.woocommerce_settings.paged);\n  }\n  return alm;\n}\n\n/**\n * Set up instance of ALM WooCommerce\n *\n * @param {Object} alm ALM object.\n * @since 5.3.0\n */\nfunction wooInit(alm) {\n  if (!alm || !alm.addons.woocommerce) {\n    return false;\n  }\n  alm.button.dataset.page = alm.addons.woocommerce_settings.paged + 1; // Page\n\n  // Get upcoming URL.\n  var nextPage = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged];\n  if (nextPage) {\n    alm.button.dataset.url = nextPage;\n  } else {\n    alm.button.dataset.url = \'\';\n  }\n\n  // Set up URL and class parameters on first item in product listing\n  var container = document.querySelector(alm.addons.woocommerce_settings.container); // Get `ul.products`\n  if (container) {\n    var count = getContainerCount(alm.addons.woocommerce_settings.container);\n    var currentPage = alm.addons.woocommerce_settings.paged;\n    if (count > 1) {\n      // Display warning if multiple containers were found.\n      console.warn(\'ALM WooCommerce: Multiple containers with the same classname or ID found. The WooCommerce add-on requires a single container to be defined. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/\');\n    }\n    container.setAttribute(\'aria-live\', \'polite\');\n    container.setAttribute(\'aria-atomic\', \'true\');\n    alm.listing.removeAttribute(\'aria-live\');\n    alm.listing.removeAttribute(\'aria-atomic\');\n    var products = container.querySelector(alm.addons.woocommerce_settings.products); // Get first `.product` item\n    if (products) {\n      products.classList.add(\'alm-woocommerce\');\n      products.dataset.url = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged - 1];\n      products.dataset.page = alm.page;\n      products.dataset.pageTitle = document.title;\n    } else {\n      console.warn(\'ALM WooCommerce: Unable to locate products. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_products\');\n    }\n\n    // Paged URL: Create previous button.\n    if (currentPage > 1) {\n      if (alm.addons.woocommerce_settings.settings.previous_products) {\n        var prevURL = alm.addons.woocommerce_settings.paged_urls[currentPage - 2];\n        var label = alm.addons.woocommerce_settings.settings.previous_products;\n        (0,_modules_loadPrevious__WEBPACK_IMPORTED_MODULE_4__.createLoadPreviousButton)(alm, container, currentPage - 1, prevURL, label);\n      }\n    }\n  } else {\n    console.warn(\'ALM WooCommerce: Unable to locate container element. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_container\');\n  }\n}\n\n/**\n * Core ALM WooCommerce product loader\n *\n * @param {Element} content WooCommerce content container.\n * @param {Object}  alm     ALM object.\n * @since 5.3.0\n */\nfunction woocommerce(content, alm) {\n  if (!content || !alm) {\n    return false;\n  }\n  return new Promise(function (resolve) {\n    var _alm$addons$woocommer = alm.addons.woocommerce_settings,\n      woocommerce_settings = _alm$addons$woocommer === void 0 ? {} : _alm$addons$woocommer;\n    var _woocommerce_settings = woocommerce_settings.settings,\n      settings = _woocommerce_settings === void 0 ? {} : _woocommerce_settings;\n    var container = document.querySelector(woocommerce_settings.container); // Get `ul.products`\n    var products = content.querySelectorAll(woocommerce_settings.products); // Get all `.products`\n    var waitForImages = settings && settings.images_loaded === \'true\' ? true : false;\n    if (container && products) {\n      var wooProducts = Array.prototype.slice.call(products); // Convert NodeList to Array.\n\n      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_modules_loadItems__WEBPACK_IMPORTED_MODULE_3__["default"])(container, wooProducts, alm, waitForImages);\n            case 2:\n              resolve(true);\n            case 3:\n            case "end":\n              return _context.stop();\n          }\n        }, _callee);\n      }))()["catch"](function (e) {\n        console.warn(e, \'There was an error with WooCommerce\'); // eslint-disable-line no-console\n      });\n\n      // Trigger almWooCommerceLoaded callback.\n      if (typeof almWooCommerceLoaded === \'function\') {\n        window.almWooCommerceLoaded(products);\n      }\n    }\n  });\n}\n\n/**\n * Get the content, title and results from the Ajax request.\n *\n * @param {Object} alm        The alm object.\n * @param {string} url        The request URL.\n * @param {Object} response   Query response.\n * @param {string} cache_slug The cache slug.\n * @return {Object}           Results data.\n * @since 5.3.0\n */\nfunction wooGetContent(alm, url, response, cache_slug) {\n  // Default data object.\n  var data = {\n    html: \'\',\n    meta: {\n      postcount: 0,\n      totalposts: 0\n    }\n  };\n\n  // Successful response.\n  if (response.status === 200 && response.data) {\n    var addons = alm.addons,\n      pagePrev = alm.pagePrev,\n      _alm$rel = alm.rel,\n      rel = _alm$rel === void 0 ? \'next\' : _alm$rel,\n      page = alm.page,\n      localize = alm.localize;\n    var total_posts = localize.total_posts;\n    var _addons$woocommerce_s2 = addons.woocommerce_settings,\n      woocommerce_settings = _addons$woocommerce_s2 === void 0 ? {} : _addons$woocommerce_s2;\n    var currentPage = rel === \'prev\' ? pagePrev : page + 1; // Get the page number.\n\n    // Create temp div to hold response data.\n    var div = document.createElement(\'div\');\n    div.innerHTML = response.data;\n\n    // Get Page Title\n    var title = div.querySelector(\'title\').innerHTML;\n    data.pageTitle = title;\n\n    // Get WooCommerce products container.\n    var container = div.querySelector(woocommerce_settings.container);\n    if (!container) {\n      console.warn("Ajax Load More WooCommerce: Unable to find WooCommerce ".concat(woocommerce_settings.container, " element."));\n      return data;\n    }\n\n    // Get the first item and append data attributes.\n    var item = container ? container.querySelector(woocommerce_settings.products) : null;\n    if (item) {\n      item.classList.add(\'alm-woocommerce\');\n      item.dataset.url = url;\n      item.dataset.page = currentPage;\n      item.dataset.pageTitle = title;\n    }\n\n    // Count the number of returned items.\n    var items = container.querySelectorAll(woocommerce_settings.products);\n    if (items) {\n      // Set the html to the elementor container data.\n      data.html = container ? container.innerHTML : \'\';\n      data.meta.postcount = items.length;\n      data.meta.totalposts = total_posts;\n\n      // Create cache file.\n      (0,_cache__WEBPACK_IMPORTED_MODULE_5__.createCache)(alm, data, cache_slug);\n    }\n\n    // Results Text\n    almWooCommerceResultsText(div, alm);\n  }\n  return data;\n}\n\n/**\n * Handle WooCommerce loaded functionality and dispatch actions.\n *\n * @param {Object} alm ALM object.\n * @since 5.5.0\n */\nfunction woocommerceLoaded(alm) {\n  var nextPageNum = alm.page + 2;\n  var nextPage = alm.addons.woocommerce_settings.paged_urls[nextPageNum - 1]; // Get URL.\n\n  // Set button data attributes.\n  if (alm.rel === \'prev\' && alm.buttonPrev) {\n    var prevPageNum = alm.pagePrev - 1;\n    var prevPage = alm.addons.woocommerce_settings.paged_urls[alm.pagePrev - 2];\n    (0,_functions_getButtonURL__WEBPACK_IMPORTED_MODULE_1__.setButtonAtts)(alm.buttonPrev, prevPageNum, prevPage);\n    (0,_functions_dispatchScrollEvent__WEBPACK_IMPORTED_MODULE_0__["default"])(true);\n  } else {\n    (0,_functions_getButtonURL__WEBPACK_IMPORTED_MODULE_1__.setButtonAtts)(alm.button, nextPageNum, nextPage);\n  }\n\n  // Lazy load images if necessary.\n  (0,_modules_lazyImages__WEBPACK_IMPORTED_MODULE_2__.lazyImages)(alm);\n\n  // Trigger almComplete.\n  if (typeof almComplete === \'function\' && alm.transition !== \'masonry\') {\n    window.almComplete(alm);\n  }\n\n  // End transitions.\n  alm.AjaxLoadMore.transitionEnd();\n\n  // ALM Done.\n  if (alm.rel === \'prev\' && alm.pagePrev <= 1) {\n    alm.AjaxLoadMore.triggerDonePrev();\n  }\n  if (alm.rel === \'next\' && nextPageNum > parseInt(alm.addons.woocommerce_settings.pages)) {\n    alm.AjaxLoadMore.triggerDone();\n  }\n}\n\n/**\n * Reset a WooCommerce Instance by hitting the updated site URL.\n *\n * @since 5.3.8\n */\nfunction wooReset() {\n  return new Promise(function (resolve) {\n    var url = window.location;\n    axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url).then(function (response) {\n      if (response.status === 200 && response.data) {\n        var div = document.createElement(\'div\');\n        div.innerHTML = response.data; // Add data to div\n\n        var alm = div.querySelector(\'.ajax-load-more-wrap .alm-listing[data-woo="true"]\'); // Get ALM instance\n        var settings = alm ? alm.dataset.wooSettings : \'\'; // Get settings data\n        resolve(settings);\n      } else {\n        resolve(false);\n      }\n    })["catch"](function () {\n      resolve(false);\n    });\n  });\n}\n\n/**\n * Set results text for WooCommerce Add-on.\n *\n * @param {Element} target The target HTML element.\n * @param {Object}  alm    ALM object.\n * @since 5.3\n */\nfunction almWooCommerceResultsText() {\n  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \'\';\n  var alm = arguments.length > 1 ? arguments[1] : undefined;\n  if (target && alm && alm.addons.woocommerce_settings.results_text) {\n    var currentResults = target.querySelector(alm.addons.woocommerce_settings.results);\n    if (alm.addons.woocommerce_settings.results_text) {\n      //let link = alm.addons.woocommerce_settings.settings.previous_page_link;\n      //let label = alm.addons.woocommerce_settings.settings.previous_page_label;\n      //let sep = alm.addons.woocommerce_settings.settings.previous_page_sep;\n      alm.addons.woocommerce_settings.results_text.forEach(function (element) {\n        element.innerHTML = currentResults.innerHTML;\n        // if (link && label) {\n        // \telement.innerHTML = returnButton(currentResults, link, label, sep);\n        // } else {\n        // \telement.innerHTML = currentResults.innerHTML;\n        // }\n      });\n    }\n  }\n}\n\n/**\n * Initiate Results text.\n *\n * @param {Object} alm ALM object.\n * @since 5.3\n * @deprecated 5.5\n */\nfunction almWooCommerceResultsTextInit(alm) {\n  if (alm && alm.addons.woocommerce_settings.results_text) {\n    var results = document.querySelectorAll(alm.addons.woocommerce_settings.results);\n    if (results.length < 1) {\n      return false;\n    }\n    var link = alm.addons.woocommerce_settings.settings.previous_page_link;\n    var label = alm.addons.woocommerce_settings.settings.previous_page_label;\n    var sep = alm.addons.woocommerce_settings.settings.previous_page_sep;\n    // Loop all result text elements\n    results.forEach(function (element) {\n      if (link && label) {\n        element.innerHTML = returnButton(element, link, label, sep);\n      }\n    });\n  }\n}\n\n/**\n * Create button text for returning to the first page\n *\n * @param {Element} text      The button text.\n * @param {string}  link      Link URL.\n * @param {string}  label     Button label.\n * @param {string}  seperator HTML separator.\n */\nfunction returnButton(text, link, label, seperator) {\n  var button = " ".concat(seperator, " <a href=\\"").concat(link, "\\">").concat(label, "</a>");\n  return text.innerHTML + button;\n}\n\n/**\n * Get total count of WooCommerce containers.\n *\n * @param {string} container The container class.\n * @return {number}          The total umber of containers.\n */\nfunction getContainerCount(container) {\n  if (!container) {\n    return 0;\n  }\n  var containers = document.querySelectorAll(container); // Get all containers.\n  if (containers) {\n    return containers.length;\n  }\n  return 0;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/addons/woocommerce.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/ajax-load-more.js':
			/*!*******************************************!*\
  !*** ./src/frontend/js/ajax-load-more.js ***!
  \*******************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   almScroll: function() { return /* binding */ almScroll; },\n/* harmony export */   analytics: function() { return /* binding */ analytics; },\n/* harmony export */   click: function() { return /* binding */ click; },\n/* harmony export */   filter: function() { return /* binding */ filter; },\n/* harmony export */   getOffset: function() { return /* binding */ getOffset; },\n/* harmony export */   getPostCount: function() { return /* binding */ getPostCount; },\n/* harmony export */   getTotalPosts: function() { return /* binding */ getTotalPosts; },\n/* harmony export */   getTotalRemaining: function() { return /* binding */ getTotalRemaining; },\n/* harmony export */   reset: function() { return /* binding */ reset; },\n/* harmony export */   start: function() { return /* binding */ start; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _addons_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addons/cache */ \"./src/frontend/js/addons/cache.js\");\n/* harmony import */ var _addons_call_to_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addons/call-to-actions */ \"./src/frontend/js/addons/call-to-actions.js\");\n/* harmony import */ var _addons_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addons/comments */ \"./src/frontend/js/addons/comments.js\");\n/* harmony import */ var _addons_elementor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addons/elementor */ \"./src/frontend/js/addons/elementor.js\");\n/* harmony import */ var _addons_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addons/filters */ \"./src/frontend/js/addons/filters.js\");\n/* harmony import */ var _addons_next_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addons/next-page */ \"./src/frontend/js/addons/next-page.js\");\n/* harmony import */ var _addons_paging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addons/paging */ \"./src/frontend/js/addons/paging.js\");\n/* harmony import */ var _addons_preloaded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addons/preloaded */ \"./src/frontend/js/addons/preloaded.js\");\n/* harmony import */ var _addons_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addons/seo */ \"./src/frontend/js/addons/seo.js\");\n/* harmony import */ var _addons_singleposts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addons/singleposts */ \"./src/frontend/js/addons/singleposts.js\");\n/* harmony import */ var _addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addons/woocommerce */ \"./src/frontend/js/addons/woocommerce.js\");\n/* harmony import */ var _functions_displayResults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/displayResults */ \"./src/frontend/js/functions/displayResults.js\");\n/* harmony import */ var _functions_formatHTML__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/formatHTML */ \"./src/frontend/js/functions/formatHTML.js\");\n/* harmony import */ var _functions_getButtonURL__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions/getButtonURL */ \"./src/frontend/js/functions/getButtonURL.js\");\n/* harmony import */ var _functions_getScrollPercentage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functions/getScrollPercentage */ \"./src/frontend/js/functions/getScrollPercentage.js\");\n/* harmony import */ var _functions_getTotals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./functions/getTotals */ \"./src/frontend/js/functions/getTotals.js\");\n/* harmony import */ var _functions_noResults__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functions/noResults */ \"./src/frontend/js/functions/noResults.js\");\n/* harmony import */ var _functions_parsers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./functions/parsers */ \"./src/frontend/js/functions/parsers.js\");\n/* harmony import */ var _functions_queryParams__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./functions/queryParams */ \"./src/frontend/js/functions/queryParams.js\");\n/* harmony import */ var _functions_setFocus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./functions/setFocus */ \"./src/frontend/js/functions/setFocus.js\");\n/* harmony import */ var _functions_windowResize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./functions/windowResize */ \"./src/frontend/js/functions/windowResize.js\");\n/* harmony import */ var _modules_almDebug__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/almDebug */ \"./src/frontend/js/modules/almDebug.js\");\n/* harmony import */ var _modules_fade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/fade */ \"./src/frontend/js/modules/fade.js\");\n/* harmony import */ var _modules_filtering__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/filtering */ \"./src/frontend/js/modules/filtering.js\");\n/* harmony import */ var _modules_insertScript__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/insertScript */ \"./src/frontend/js/modules/insertScript.js\");\n/* harmony import */ var _modules_masonry__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/masonry */ \"./src/frontend/js/modules/masonry.js\");\n/* harmony import */ var _modules_placeholder__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/placeholder */ \"./src/frontend/js/modules/placeholder.js\");\n/* harmony import */ var _modules_resultsText__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/resultsText */ \"./src/frontend/js/modules/resultsText.js\");\n/* harmony import */ var _modules_setLocalizedVars__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/setLocalizedVars */ \"./src/frontend/js/modules/setLocalizedVars.js\");\n/* harmony import */ var _modules_tableofcontents__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/tableofcontents */ \"./src/frontend/js/modules/tableofcontents.js\");\n/* harmony import */ var _scss_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../scss/ajax-load-more.scss */ \"./src/frontend/scss/ajax-load-more.scss\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n// ALM Modules\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// External packages.\nvar qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\nvar imagesLoaded = __webpack_require__(/*! imagesloaded */ \"./node_modules/imagesloaded/imagesloaded.js\");\n\n// Axios Config.\naxios__WEBPACK_IMPORTED_MODULE_31__[\"default\"].defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n\n// Axios Interceptor for nested data objects\naxios__WEBPACK_IMPORTED_MODULE_31__[\"default\"].interceptors.request.use(function (config) {\n  config.paramsSerializer = function (params) {\n    // Qs is already included in the Axios package\n    return qs.stringify(params, {\n      arrayFormat: 'brackets',\n      encode: false\n    });\n  };\n  return config;\n});\n\n// Focus Polyfill.\n__webpack_require__(/*! focus-options-polyfill */ \"./node_modules/focus-options-polyfill/index.js\");\n\n// Global filtering state.\nvar alm_is_filtering = false;\n\n// Start ALM\n(function () {\n  'use strict';\n\n  /**\n   * Initiate Ajax Load More.\n   *\n   * @param {Element} el    The Ajax Load More DOM element/container.\n   * @param {number}  index The current index number of the Ajax Load More instance.\n   */\n  var ajaxloadmore = function ajaxloadmore(el, index) {\n    var _alm_localize, _el$dataset, _alm, _alm2, _alm3, _alm4, _alm5, _alm6, _alm_localize2, _alm7, _alm8, _alm9, _alm10, _alm11, _alm12, _alm13, _alm14, _alm15, _alm16, _alm_localize3, _alm17, _alm18, _alm19, _alm20, _alm21, _alm22;\n    // Move user to top of page to prevent loading of unnessasry posts\n    if (((_alm_localize = alm_localize) === null || _alm_localize === void 0 ? void 0 : _alm_localize.scrolltop) === 'true') {\n      window.scrollTo(0, 0);\n    }\n\n    // Set ALM Variables\n    var alm = this;\n    alm.AjaxLoadMore = {};\n    alm.addons = {};\n    alm.extensions = {};\n    alm.integration = {};\n    alm.window = window;\n    alm.page = 0;\n    alm.postcount = 0;\n    alm.totalposts = 0;\n    alm.proceed = false;\n    alm.disable_ajax = false;\n    alm.init = true;\n    alm.loading = true;\n    alm.finished = false;\n    alm.timer = null;\n    alm.rel = 'next';\n    alm.ua = window.navigator.userAgent ? window.navigator.userAgent : ''; // Browser User Agent\n    alm.vendor = window.navigator.vendor ? window.navigator.vendor : ''; // Browser Vendor\n\n    el.classList.add('alm-' + index); // Add unique classname.\n    el.setAttribute('data-alm-id', index); // Add unique data id.\n\n    // The defined or generated ID for the ALM instance.\n    alm.master_id = el.dataset.id ? \"ajax_load_more_\".concat(el.dataset.id) : el.id;\n    alm.master_id = alm.master_id.replace(/-/g, '_');\n\n    // Localized <script/> variables.\n    alm.localize = window[alm.master_id + '_vars'];\n\n    // Add ALM object to the global window scope.\n    window[alm.master_id] = alm; // e.g. window.ajax_load_more or window.ajax_load_more_{id}\n\n    // ALM Element Containers\n    alm.main = el; // Top level DOM element\n    alm.listing = el.querySelector('.alm-listing') || el.querySelector('.alm-comments');\n    alm.content = alm.listing;\n    alm.ajax = el.querySelector('.alm-ajax');\n    alm.container_type = alm.listing.dataset.containerType;\n    alm.loading_style = alm.listing.dataset.loadingStyle;\n\n    // Instance Params\n    alm.canonical_url = el.dataset.canonicalUrl;\n    alm.nested = el.dataset.nested ? el.dataset.nested : false;\n    alm.is_search = (el === null || el === void 0 || (_el$dataset = el.dataset) === null || _el$dataset === void 0 ? void 0 : _el$dataset.search) === 'true' ? 'true' : false;\n    alm.search_value = alm.is_search === 'true' ? alm.slug : ''; // Convert to value of slug for appending to seo url.\n    alm.slug = el.dataset.slug;\n    alm.post_id = parseInt(el.dataset.postId);\n    alm.id = el.dataset.id ? el.dataset.id : '';\n\n    // Shortcode Params\n\n    alm.repeater = ((_alm = alm) === null || _alm === void 0 || (_alm = _alm.listing) === null || _alm === void 0 || (_alm = _alm.dataset) === null || _alm === void 0 ? void 0 : _alm.repeater) || 'default';\n    alm.theme_repeater = ((_alm2 = alm) === null || _alm2 === void 0 || (_alm2 = _alm2.listing) === null || _alm2 === void 0 || (_alm2 = _alm2.dataset) === null || _alm2 === void 0 ? void 0 : _alm2.themeRepeater) || false;\n    alm.post_type = ((_alm3 = alm) === null || _alm3 === void 0 || (_alm3 = _alm3.listing) === null || _alm3 === void 0 || (_alm3 = _alm3.dataset) === null || _alm3 === void 0 ? void 0 : _alm3.postType) || 'post';\n    alm.sticky_posts = ((_alm4 = alm) === null || _alm4 === void 0 || (_alm4 = _alm4.listing) === null || _alm4 === void 0 || (_alm4 = _alm4.dataset) === null || _alm4 === void 0 ? void 0 : _alm4.stickyPosts) || false;\n    alm.btnWrap = el.querySelectorAll('.alm-btn-wrap'); // Get all `.alm-button-wrap` divs\n    alm.btnWrap = _toConsumableArray(alm.btnWrap); // Convert NodeList to array\n    alm.btnWrap[alm.btnWrap.length - 1].style.visibility = 'visible'; // Get last element (used for nesting)\n    alm.trigger = alm.btnWrap[alm.btnWrap.length - 1];\n    alm.button = ((_alm5 = alm) === null || _alm5 === void 0 || (_alm5 = _alm5.trigger) === null || _alm5 === void 0 ? void 0 : _alm5.querySelector('button.alm-load-more-btn')) || null;\n    alm.button_labels = {\n      \"default\": ((_alm6 = alm) === null || _alm6 === void 0 || (_alm6 = _alm6.listing) === null || _alm6 === void 0 || (_alm6 = _alm6.dataset) === null || _alm6 === void 0 ? void 0 : _alm6.buttonLabel) || ((_alm_localize2 = alm_localize) === null || _alm_localize2 === void 0 ? void 0 : _alm_localize2.button_label),\n      loading: ((_alm7 = alm) === null || _alm7 === void 0 || (_alm7 = _alm7.listing) === null || _alm7 === void 0 || (_alm7 = _alm7.dataset) === null || _alm7 === void 0 ? void 0 : _alm7.buttonLoadingLabel) || null,\n      done: ((_alm8 = alm) === null || _alm8 === void 0 || (_alm8 = _alm8.listing) === null || _alm8 === void 0 || (_alm8 = _alm8.dataset) === null || _alm8 === void 0 ? void 0 : _alm8.buttonDoneLabel) || null\n    };\n    alm.placeholder = alm.main.querySelector('.alm-placeholder') || false;\n    alm.scroll_distance = ((_alm9 = alm) === null || _alm9 === void 0 || (_alm9 = _alm9.listing) === null || _alm9 === void 0 ? void 0 : _alm9.dataset.scrollDistance) || 100;\n    alm.scroll_container = ((_alm10 = alm) === null || _alm10 === void 0 || (_alm10 = _alm10.listing) === null || _alm10 === void 0 ? void 0 : _alm10.dataset.scrollContainer) || null;\n    alm.scroll_direction = ((_alm11 = alm) === null || _alm11 === void 0 || (_alm11 = _alm11.listing) === null || _alm11 === void 0 || (_alm11 = _alm11.dataset) === null || _alm11 === void 0 ? void 0 : _alm11.scrollDirection) || 'vertical';\n    alm.max_pages = (_alm12 = alm) !== null && _alm12 !== void 0 && (_alm12 = _alm12.listing) !== null && _alm12 !== void 0 && (_alm12 = _alm12.dataset) !== null && _alm12 !== void 0 && _alm12.maxPages ? parseInt(alm.listing.dataset.maxPages) : 0;\n    alm.pause_override = ((_alm13 = alm) === null || _alm13 === void 0 || (_alm13 = _alm13.listing) === null || _alm13 === void 0 || (_alm13 = _alm13.dataset) === null || _alm13 === void 0 ? void 0 : _alm13.pauseOverride) || false; // true | false\n    alm.pause = ((_alm14 = alm) === null || _alm14 === void 0 || (_alm14 = _alm14.listing) === null || _alm14 === void 0 || (_alm14 = _alm14.dataset) === null || _alm14 === void 0 ? void 0 : _alm14.pause) || false; // true | false\n    alm.transition = ((_alm15 = alm) === null || _alm15 === void 0 || (_alm15 = _alm15.listing) === null || _alm15 === void 0 || (_alm15 = _alm15.dataset) === null || _alm15 === void 0 ? void 0 : _alm15.transition) || 'fade'; // Transition\n    alm.transition_delay = ((_alm16 = alm) === null || _alm16 === void 0 || (_alm16 = _alm16.listing) === null || _alm16 === void 0 || (_alm16 = _alm16.dataset) === null || _alm16 === void 0 ? void 0 : _alm16.transitionDelay) || 0;\n    alm.speed = (_alm_localize3 = alm_localize) !== null && _alm_localize3 !== void 0 && _alm_localize3.speed ? parseInt(alm_localize.speed) : 250;\n    alm.images_loaded = ((_alm17 = alm) === null || _alm17 === void 0 || (_alm17 = _alm17.listing) === null || _alm17 === void 0 || (_alm17 = _alm17.dataset) === null || _alm17 === void 0 ? void 0 : _alm17.imagesLoaded) === 'true';\n    alm.destroy_after = (_alm18 = alm) !== null && _alm18 !== void 0 && (_alm18 = _alm18.listing) !== null && _alm18 !== void 0 && (_alm18 = _alm18.dataset) !== null && _alm18 !== void 0 && _alm18.destroyAfter ? parseInt(alm.listing.dataset.destroyAfter) : false;\n    alm.lazy_images = ((_alm19 = alm) === null || _alm19 === void 0 || (_alm19 = _alm19.listing.dataset) === null || _alm19 === void 0 ? void 0 : _alm19.lazyImages) === 'true' ? true : false;\n    alm.integration.woocommerce = ((_alm20 = alm) === null || _alm20 === void 0 || (_alm20 = _alm20.listing) === null || _alm20 === void 0 || (_alm20 = _alm20.dataset) === null || _alm20 === void 0 ? void 0 : _alm20.woocommerce) === 'true' ? true : false;\n    alm.scroll = ((_alm21 = alm) === null || _alm21 === void 0 || (_alm21 = _alm21.listing) === null || _alm21 === void 0 || (_alm21 = _alm21.dataset) === null || _alm21 === void 0 ? void 0 : _alm21.scroll) === 'false' ? false : true;\n    alm.orginal_posts_per_page = parseInt(alm.listing.dataset.postsPerPage); // Used for paging add-on\n    alm.posts_per_page = parseInt(alm.listing.dataset.postsPerPage);\n    alm.offset = (_alm22 = alm) !== null && _alm22 !== void 0 && (_alm22 = _alm22.listing) !== null && _alm22 !== void 0 && (_alm22 = _alm22.dataset) !== null && _alm22 !== void 0 && _alm22.offset ? parseInt(alm.listing.dataset.offset) : 0;\n    alm.paged = false;\n\n    // Add-on Shortcode Params\n\n    alm = (0,_addons_elementor__WEBPACK_IMPORTED_MODULE_3__.elementorCreateParams)(alm); // Elementor add-on\n    alm = (0,_addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__.wooCreateParams)(alm); // WooCommerce add-on\n    alm = (0,_addons_cache__WEBPACK_IMPORTED_MODULE_0__.cacheCreateParams)(alm); // Cache add-on\n    alm = (0,_addons_call_to_actions__WEBPACK_IMPORTED_MODULE_1__.ctaCreateParams)(alm); // CTA add-on\n    alm = (0,_addons_next_page__WEBPACK_IMPORTED_MODULE_5__.nextpageCreateParams)(alm); // Nextpage add-on\n    alm = (0,_addons_singleposts__WEBPACK_IMPORTED_MODULE_9__.singlepostsCreateParams)(alm); // Single Posts add-on\n    alm = (0,_addons_comments__WEBPACK_IMPORTED_MODULE_2__.commentsCreateParams)(alm); // Comments add-on\n    alm = (0,_addons_preloaded__WEBPACK_IMPORTED_MODULE_7__.preloadedCreateParams)(alm); // Preloaded add-on.\n    alm = (0,_addons_paging__WEBPACK_IMPORTED_MODULE_6__.pagingCreateParams)(alm); // Paging add-on.\n    alm = (0,_addons_filters__WEBPACK_IMPORTED_MODULE_4__.filtersCreateParams)(alm); // Filters add-on.\n    alm = (0,_addons_seo__WEBPACK_IMPORTED_MODULE_8__.seoCreateParams)(alm); // SEO add-on.\n\n    // Extension Shortcode Params\n\n    // Users\n    alm.extensions.users = alm.listing.dataset.users === 'true';\n    if (alm.extensions.users) {\n      // Override paging params for users\n      alm.orginal_posts_per_page = parseInt(alm.listing.dataset.usersPerPage);\n      alm.posts_per_page = parseInt(alm.listing.dataset.usersPerPage);\n    }\n\n    // REST API.\n    alm.extensions.restapi = alm.listing.dataset.restapi === 'true';\n    if (alm.extensions.restapi) {\n      alm.extensions.restapi_base_url = alm.listing.dataset.restapiBaseUrl;\n      alm.extensions.restapi_namespace = alm.listing.dataset.restapiNamespace;\n      alm.extensions.restapi_endpoint = alm.listing.dataset.restapiEndpoint;\n      alm.extensions.restapi_template_id = alm.listing.dataset.restapiTemplateId;\n      alm.extensions.restapi_debug = alm.listing.dataset.restapiDebug;\n      if (alm.extensions.restapi_template_id === '') {\n        alm.extensions.restapi = false;\n      }\n    }\n\n    // ACF.\n    alm.extensions.acf = alm.listing.dataset.acf === 'true' ? true : false;\n    if (alm.extensions.acf) {\n      alm.extensions.acf_field_type = alm.listing.dataset.acfFieldType;\n      alm.extensions.acf_field_name = alm.listing.dataset.acfFieldName;\n      alm.extensions.acf_parent_field_name = alm.listing.dataset.acfParentFieldName;\n      alm.extensions.acf_row_index = alm.listing.dataset.acfRowIndex;\n      alm.extensions.acf_post_id = alm.listing.dataset.acfPostId;\n      // if field type, name or post ID is empty.\n      if (alm.extensions.acf_field_type === undefined || alm.extensions.acf_field_name === undefined || alm.extensions.acf_post_id === undefined) {\n        alm.extensions.acf = false;\n      }\n    }\n\n    // Term Query.\n    alm.extensions.term_query = alm.listing.dataset.termQuery === 'true';\n    if (alm.extensions.term_query) {\n      alm.extensions.term_query_taxonomy = alm.listing.dataset.termQueryTaxonomy;\n      alm.extensions.term_query_hide_empty = alm.listing.dataset.termQueryHideEmpty;\n      alm.extensions.term_query_number = alm.listing.dataset.termQueryNumber;\n    }\n\n    /* Pause */\n    if (alm.pause === undefined || alm.addons.seo && alm.start_page > 1) {\n      // SEO only.\n      alm.pause = false;\n    }\n    if (alm.addons.preloaded && alm.addons.seo && alm.start_page > 0) {\n      // SEO + Preloaded.\n      alm.pause = false;\n    }\n    if (alm.addons.filters && alm.addons.filters_startpage > 0) {\n      // Filters.\n      alm.pause = false;\n    }\n    if (alm.addons.preloaded && alm.addons.paging) {\n      alm.pause = true;\n    }\n\n    /* Max Pages */\n    alm.max_pages = alm.max_pages === undefined || alm.max_pages === 0 ? 9999 : alm.max_pages;\n\n    /* Scroll Distance */\n    alm.scroll_distance = alm.scroll_distance === undefined ? 100 : alm.scroll_distance;\n    alm.scroll_distance_perc = false;\n    if (alm.scroll_distance.toString().indexOf('%') === -1) {\n      // Standard scroll_distance\n      alm.scroll_distance = parseInt(alm.scroll_distance);\n    } else {\n      // Percentage scroll_distance\n      alm.scroll_distance_perc = true;\n      alm.scroll_distance_orig = parseInt(alm.scroll_distance);\n      alm.scroll_distance = (0,_functions_getScrollPercentage__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(alm);\n    }\n\n    /* Masonry */\n    if (alm.transition === 'masonry') {\n      alm = (0,_modules_masonry__WEBPACK_IMPORTED_MODULE_25__.almMasonryConfig)(alm);\n    }\n\n    /* Paging */\n    if (alm.addons.paging) {\n      // Add loading class to main container.\n      alm.main.classList.add('alm-loading');\n    } else {\n      var almChildren = el.childNodes; // Get child nodes of instance [nodeList]\n      if (almChildren) {\n        var almChildArray = _toConsumableArray(almChildren); // Convert nodeList to array\n\n        // Filter array to find the `.alm-btn-wrap` div\n        var btnWrap = almChildArray.filter(function (element) {\n          if (!element.classList) {\n            // If not element (#text node)\n            return false;\n          }\n          return element.classList.contains('alm-btn-wrap');\n        });\n        alm.button = btnWrap ? btnWrap[0].querySelector('.alm-load-more-btn') : container.querySelector('.alm-btn-wrap .alm-load-more-btn');\n      } else {\n        alm.button = container.querySelector('.alm-btn-wrap .alm-load-more-btn');\n      }\n\n      // Reset button state\n      alm.button.disabled = false;\n      alm.button.style.display = '';\n    }\n\n    /**\n     * No Results.\n     * Set template for showing no results HTML.\n     */\n    var alm_no_results = el.querySelector('.alm-no-results');\n    alm.no_results = alm_no_results ? alm_no_results.innerHTML : '';\n\n    /**\n     * Results Text.\n     * Render \"Showing x of y results\" text.\n     */\n    if (alm.integration.woocommerce) {\n      var _alm23;\n      // If woocommerce, get the default woocommerce results block\n      alm.resultsText = document.querySelectorAll('.woocommerce-result-count');\n      if (((_alm23 = alm) === null || _alm23 === void 0 || (_alm23 = _alm23.resultsText) === null || _alm23 === void 0 ? void 0 : _alm23.length) < 1) {\n        alm.resultsText = document.querySelectorAll('.alm-results-text');\n      }\n    } else {\n      alm.resultsText = document.querySelectorAll('.alm-results-text');\n    }\n    if (alm.resultsText) {\n      alm.resultsText.forEach(function (results) {\n        results.setAttribute('aria-live', 'polite');\n        results.setAttribute('aria-atomic', 'true');\n      });\n    } else {\n      alm.resultsText = false;\n    }\n\n    // Table of Contents: Render 1, 2, 3 etc. when pages are loaded\n    alm.tableofcontents = document.querySelector('.alm-toc') || false;\n    if (alm.tableofcontents) {\n      alm.tableofcontents.setAttribute('aria-live', 'polite');\n      alm.tableofcontents.setAttribute('aria-atomic', 'true');\n    }\n\n    /**\n     * The function to get posts via Ajax/HTTP request.\n     *\n     * @since 2.0.0\n     */\n    alm.AjaxLoadMore.loadPosts = function () {\n      if (alm.disable_ajax) {\n        return;\n      }\n      if (typeof almOnChange === 'function') {\n        window.almOnChange(alm);\n      }\n\n      // Set loading attributes.\n      alm.loading = true;\n      alm.main.classList.add('alm-loading');\n      (0,_modules_placeholder__WEBPACK_IMPORTED_MODULE_26__[\"default\"])('show', alm);\n\n      // Add loading styles to buttons.\n      if (!alm.addons.paging) {\n        if (alm.rel === 'prev') {\n          alm.buttonPrev.classList.add('loading');\n        } else {\n          alm.button.classList.add('loading');\n          if (alm.button_labels.loading) {\n            alm.button.innerHTML = alm.button_labels.loading;\n          }\n        }\n      }\n\n      // Dispatch Ajax request.\n      alm.AjaxLoadMore.ajax();\n    };\n\n    /**\n     * The core Ajax Load More Ajax function.\n     *\n     * @param {string} type The type of Ajax request [standard|totalposts|totalpages].\n     * @since 2.6.0\n     */\n    alm.AjaxLoadMore.ajax = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n      var type,\n        _alm24,\n        params,\n        cache,\n        _args = arguments;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            type = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'standard';\n            if (!alm.extensions.restapi) {\n              _context.next = 5;\n              break;\n            }\n            alm.AjaxLoadMore.restapi(alm);\n            _context.next = 14;\n            break;\n          case 5:\n            // Standard ALM.\n            params = (0,_functions_queryParams__WEBPACK_IMPORTED_MODULE_18__.getAjaxParams)(alm, type); // Cache.\n            if (!((_alm24 = alm) !== null && _alm24 !== void 0 && (_alm24 = _alm24.addons) !== null && _alm24 !== void 0 && _alm24.cache && !['totalposts', 'totalpages'].includes(type))) {\n              _context.next = 13;\n              break;\n            }\n            _context.next = 9;\n            return (0,_addons_cache__WEBPACK_IMPORTED_MODULE_0__.getCache)(alm, Object.assign({}, params));\n          case 9:\n            cache = _context.sent;\n            if (cache) {\n              alm.AjaxLoadMore.render(cache);\n            } else {\n              alm.AjaxLoadMore.adminajax(params, type);\n            }\n            _context.next = 14;\n            break;\n          case 13:\n            alm.AjaxLoadMore.adminajax(params, type);\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n\n    /**\n     * Send request to the admin-ajax.php\n     *\n     * @param {Object} params Query params.\n     * @param {string} type   The type of Ajax request [standard|totalposts|totalpages].\n     * @since 5.0.0\n     */\n    alm.AjaxLoadMore.adminajax = /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params, type) {\n        var _alm_localize4, ajaxurl, _params, _params$cache_slug, cache_slug, data;\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              _alm_localize4 = alm_localize, ajaxurl = _alm_localize4.ajaxurl; // Get Ajax URL\n              _params = params, _params$cache_slug = _params.cache_slug, cache_slug = _params$cache_slug === void 0 ? '' : _params$cache_slug; // Deconstruct query params.\n              /**\n               * Single Posts.\n               * If `single_post_target`, adjust the Ajax URL to the post URL.\n               */\n              if (alm.addons.single_post && alm.addons.single_post_target) {\n                ajaxurl = \"\".concat(alm.addons.single_post_permalink, \"?id=\").concat(alm.addons.single_post_id, \"&alm_page=\").concat(parseInt(alm.page) + 1);\n                params = '';\n              }\n\n              // WooCommerce || Elementor.\n              if (alm.addons.woocommerce || alm.addons.elementor && alm.addons.elementor_type === 'posts') {\n                ajaxurl = (0,_functions_getButtonURL__WEBPACK_IMPORTED_MODULE_13__.getButtonURL)(alm, alm.rel);\n                params = '';\n              }\n\n              // Send HTTP request via axios.\n              _context2.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_31__[\"default\"].get(ajaxurl, {\n                params: params\n              }).then(function (response) {\n                if (alm.addons.single_post && alm.addons.single_post_target) {\n                  // Single Posts\n                  return (0,_addons_singleposts__WEBPACK_IMPORTED_MODULE_9__.singlepostsHTML)(alm, response, cache_slug);\n                } else if (alm.addons.woocommerce) {\n                  // WooCommerce.\n                  return (0,_addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__.wooGetContent)(alm, ajaxurl, response, cache_slug);\n                } else if (alm.addons.elementor) {\n                  // Elementor\n                  return (0,_addons_elementor__WEBPACK_IMPORTED_MODULE_3__.elementorGetContent)(alm, ajaxurl, response, cache_slug);\n                }\n\n                // Standard ALM - Get data from response.\n                return response.data;\n              })[\"catch\"](function (error) {\n                // Error\n                alm.AjaxLoadMore.error(error, 'adminajax');\n              });\n            case 6:\n              data = _context2.sent;\n              _context2.t0 = type;\n              _context2.next = _context2.t0 === 'standard' ? 10 : _context2.t0 === 'totalposts' ? 12 : _context2.t0 === 'totalpages' ? 12 : 14;\n              break;\n            case 10:\n              alm.AjaxLoadMore.render(data);\n              return _context2.abrupt(\"break\", 14);\n            case 12:\n              if (alm.addons.paging && alm.addons.nextpage && typeof almBuildPagination === 'function') {\n                window.almBuildPagination(data.totalpages, alm);\n                alm.totalpages = data.totalpages;\n              } else {\n                if (alm.addons.paging && typeof almBuildPagination === 'function') {\n                  window.almBuildPagination(data.totalposts, alm);\n                }\n              }\n              return _context2.abrupt(\"break\", 14);\n            case 14:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      return function (_x, _x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    /**\n     * Send request to the WP REST API\n     *\n     * @param {Object} alm The Ajax Load More object.\n     * @since 5.0.0\n     */\n    alm.AjaxLoadMore.restapi = function (alm) {\n      var _alm_localize5 = alm_localize,\n        rest_api_url = _alm_localize5.rest_api_url; // Get Rest API URL\n      var _alm$extensions = alm.extensions,\n        restapi_base_url = _alm$extensions.restapi_base_url,\n        restapi_namespace = _alm$extensions.restapi_namespace,\n        restapi_endpoint = _alm$extensions.restapi_endpoint,\n        restapi_template_id = _alm$extensions.restapi_template_id;\n      var alm_rest_template = wp.template(restapi_template_id);\n      var alm_rest_url = \"\".concat(rest_api_url).concat(restapi_base_url, \"/\").concat(restapi_namespace, \"/\").concat(restapi_endpoint);\n      var params = (0,_functions_queryParams__WEBPACK_IMPORTED_MODULE_18__.getRestAPIParams)(alm);\n      axios__WEBPACK_IMPORTED_MODULE_31__[\"default\"].get(alm_rest_url, {\n        params: params\n      }).then(function (response) {\n        // Success\n        var results = response.data; // Get data from response\n        var _results$html = results.html,\n          items = _results$html === void 0 ? null : _results$html,\n          _results$meta = results.meta,\n          meta = _results$meta === void 0 ? null : _results$meta;\n        var postcount = meta && meta.postcount ? meta.postcount : 0;\n        var totalposts = meta && meta.totalposts ? meta.totalposts : 0;\n\n        // loop results to get data from each.\n        var data = '';\n        for (var i = 0; i < items.length; i++) {\n          var result = items[i];\n          data += alm_rest_template(result);\n        }\n\n        // Rest API debug.\n        if (alm.extensions.restapi_debug === 'true') {\n          console.log('ALM RestAPI Debug:', items); // eslint-disable-line no-console\n        }\n\n        // Create results object.\n        var obj = {\n          html: data,\n          meta: {\n            postcount: postcount,\n            totalposts: totalposts\n          }\n        };\n        alm.AjaxLoadMore.render(obj);\n      })[\"catch\"](function (error) {\n        // Error\n        alm.AjaxLoadMore.error(error, 'restapi');\n      });\n    };\n\n    /**\n     * Display/render results function.\n     *\n     * @param {Object} data The results of the Ajax request.\n     * @since 2.6.0\n     */\n    alm.AjaxLoadMore.render = /*#__PURE__*/function () {\n      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {\n        var _alm25;\n        var html, meta, total, totalposts, nodes, temp, paging_container, currentPage;\n        return _regeneratorRuntime().wrap(function _callee7$(_context7) {\n          while (1) switch (_context7.prev = _context7.next) {\n            case 0:\n              if (alm.addons.single_post) {\n                alm.AjaxLoadMore.getSinglePost(); // Fetch  single post data for next post.\n              }\n\n              // Parse incoming data.\n              html = data.html, meta = data.meta;\n              total = meta ? parseInt(meta.postcount) : parseInt(alm.posts_per_page); // Get current post counts.\n              totalposts = typeof meta !== 'undefined' ? meta.totalposts : alm.posts_per_page * 5;\n              alm.totalposts = totalposts;\n              alm.postcount = alm.addons.paging ? total : alm.postcount + total;\n\n              // Set alm.html as plain text return.\n              alm.html = alm.container_type === 'table' ? html : html;\n              if (!meta) {\n                // Display warning if `meta` is missing from response.\n                console.warn('Ajax Load More: Unable to access `meta` object in Ajax response. There may be an issue in your Repeater Template or another theme/plugin hook causing interference with the Ajax request.');\n              }\n\n              // ALM Init: First run only.\n              if (alm.init) {\n                if (meta) {\n                  alm.main.dataset.totalPosts = meta.totalposts ? meta.totalposts : 0;\n                }\n\n                // No Results / ALM Empty.\n                if (total === 0) {\n                  if (alm.addons.paging && typeof almPagingEmpty === 'function') {\n                    window.almPagingEmpty(alm);\n                  }\n                  if (typeof almEmpty === 'function') {\n                    window.almEmpty(alm);\n                  }\n                  if (alm.no_results) {\n                    (0,_functions_noResults__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(alm.content, alm.no_results);\n                  }\n                }\n\n                // Paging Add-on.\n                if (alm.addons.paging) {\n                  // Dispatch call to build pagination.\n                  if (typeof almBuildPagination === 'function') {\n                    window.almBuildPagination(totalposts, alm, false);\n                  }\n                  if (total > 0) {\n                    // Inject content.\n                    alm.addons.paging_container.innerHTML = alm.html;\n\n                    // Start paging functionaity.\n                    alm.AjaxLoadMore.pagingInit();\n                  }\n                }\n\n                // SEO Offset.\n                if (alm.addons.seo && alm.addons.seo_offset && !alm.addons.paging) {\n                  (0,_addons_seo__WEBPACK_IMPORTED_MODULE_8__.createSEOOffset)(alm);\n                }\n\n                /**\n                 * SEO & Filters add-on.\n                 * Handle isPaged results.\n                 */\n                if (alm.paged) {\n                  // Reset the posts_per_page value.\n                  if (alm.addons.seo || alm.addons.filters || alm.extensions.users) {\n                    // Reset posts per page value.\n                    alm.posts_per_page = alm.orginal_posts_per_page;\n                  }\n\n                  // SEO add-on.\n                  if (alm.addons.seo) {\n                    alm.page = alm.start_page ? alm.start_page - 1 : alm.page; // Set new page number.\n                  }\n\n                  // Filters add-on.\n                  if (alm.addons.filters && alm.addons.filters_startpage > 0) {\n                    alm.page = alm.addons.filters_startpage - 1; // Set new page number.\n                  }\n                }\n                // Filters onLoad\n                if (typeof almFiltersOnload === 'function') {\n                  window.almFiltersOnload(alm);\n                }\n              }\n              // End ALM Init.\n\n              /**\n               * Set Filter Facets.\n               */\n              if (alm.addons.filters && alm.facets && data.facets && typeof almFiltersFacets === 'function') {\n                window.almFiltersFacets(data.facets);\n              }\n\n              /**\n               * Display alm_debug results.\n               */\n              (0,_modules_almDebug__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(alm);\n\n              /**\n               * Set localized variables and Results Text.\n               */\n              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n                return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n                  while (1) switch (_context3.prev = _context3.next) {\n                    case 0:\n                      _context3.next = 2;\n                      return (0,_modules_setLocalizedVars__WEBPACK_IMPORTED_MODULE_28__[\"default\"])(alm);\n                    case 2:\n                    case \"end\":\n                      return _context3.stop();\n                  }\n                }, _callee3);\n              }))();\n\n              // Get all returned data as an array of DOM nodes.\n              nodes = alm.container_type === 'table' ? (0,_functions_parsers__WEBPACK_IMPORTED_MODULE_17__.tableParser)(alm.html) : (0,_functions_parsers__WEBPACK_IMPORTED_MODULE_17__.domParser)(alm.html);\n              alm.last_loaded = nodes;\n\n              // Render results.\n              if (!(total > 0)) {\n                _context7.next = 51;\n                break;\n              }\n              if (!(alm.addons.woocommerce || alm.addons.elementor)) {\n                _context7.next = 21;\n                break;\n              }\n              temp = document.createElement('div');\n              temp.innerHTML = html;\n              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {\n                return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n                  while (1) switch (_context4.prev = _context4.next) {\n                    case 0:\n                      if (!alm.addons.woocommerce) {\n                        _context4.next = 4;\n                        break;\n                      }\n                      _context4.next = 3;\n                      return (0,_addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__.woocommerce)(temp, alm);\n                    case 3:\n                      (0,_addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__.woocommerceLoaded)(alm);\n                    case 4:\n                      if (!alm.addons.elementor) {\n                        _context4.next = 8;\n                        break;\n                      }\n                      _context4.next = 7;\n                      return (0,_addons_elementor__WEBPACK_IMPORTED_MODULE_3__.elementor)(temp, alm);\n                    case 7:\n                      (0,_addons_elementor__WEBPACK_IMPORTED_MODULE_3__.elementorLoaded)(alm);\n                    case 8:\n                    case \"end\":\n                      return _context4.stop();\n                  }\n                }, _callee4);\n              }))()[\"catch\"](function (e) {\n                if (alm.addons.woocommerce) {\n                  console.warn('Ajax Load More: There was an error loading woocommerce products.', e);\n                }\n                if (alm.addons.elementor) {\n                  console.warn('Ajax Load More: There was an error loading elementor items.', e);\n                }\n              });\n              alm.init = false;\n              return _context7.abrupt(\"return\");\n            case 21:\n              if (alm.addons.paging) {\n                _context7.next = 36;\n                break;\n              }\n              /**\n               * Infinite Scroll Results.\n               */\n              nodes = (0,_functions_formatHTML__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(alm, nodes);\n              _context7.t0 = alm.transition;\n              _context7.next = _context7.t0 === 'masonry' ? 26 : 30;\n              break;\n            case 26:\n              _context7.next = 28;\n              return (0,_functions_displayResults__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(alm, nodes);\n            case 28:\n              // Wrap almMasonry in anonymous async/await function\n              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {\n                return _regeneratorRuntime().wrap(function _callee5$(_context5) {\n                  while (1) switch (_context5.prev = _context5.next) {\n                    case 0:\n                      _context5.next = 2;\n                      return (0,_modules_masonry__WEBPACK_IMPORTED_MODULE_25__.almMasonry)(alm, alm.init, alm_is_filtering);\n                    case 2:\n                      alm.masonry.init = false;\n                      (0,_functions_windowResize__WEBPACK_IMPORTED_MODULE_20__[\"default\"])();\n\n                      // Callback: ALM Complete\n                      if (typeof almComplete === 'function') {\n                        window.almComplete(alm);\n                      }\n                    case 5:\n                    case \"end\":\n                      return _context5.stop();\n                  }\n                }, _callee5);\n              }))()[\"catch\"](function () {\n                console.error('There was an error with ALM Masonry'); //eslint-disable-line no-console\n              });\n              return _context7.abrupt(\"break\", 33);\n            case 30:\n              _context7.next = 32;\n              return (0,_functions_displayResults__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(alm, nodes);\n            case 32:\n              return _context7.abrupt(\"break\", 33);\n            case 33:\n              // Infinite Scroll -> Images Loaded: Run complete callbacks and checks.\n              imagesLoaded(alm.listing, function () {\n                alm.AjaxLoadMore.nested(); // Nested ALM.\n\n                if (alm_is_filtering && alm.addons.filters) {\n                  if (typeof almFiltersAddonComplete === 'function') {\n                    window.almFiltersAddonComplete(el); // Callback: Filters Add-on Complete\n                  }\n                }\n\n                if (typeof almComplete === 'function' && alm.transition !== 'masonry') {\n                  window.almComplete(alm); // Callback: ALM Complete\n                }\n\n                // Trigger <script /> tags in templates.\n                _modules_insertScript__WEBPACK_IMPORTED_MODULE_24__[\"default\"].init(alm.last_loaded);\n\n                // ALM Done.\n                if (!alm.addons.single_post) {\n                  if (alm.addons.nextpage) {\n                    // Nextpage.\n                    if (alm.localize.post_count + alm.addons.nextpage_startpage >= alm.localize.total_posts) {\n                      alm.AjaxLoadMore.triggerDone();\n                    }\n                  } else {\n                    if (alm.localize.post_count >= alm.localize.total_posts) {\n                      alm.AjaxLoadMore.triggerDone();\n                    }\n                  }\n                }\n                alm_is_filtering = false;\n              });\n              /**\n               * End: Infinite Scroll Results.\n               */\n              _context7.next = 49;\n              break;\n            case 36:\n              if (!alm.init) {\n                _context7.next = 41;\n                break;\n              }\n              alm.main.classList.remove('alm-loading');\n              alm.AjaxLoadMore.triggerAddons(alm);\n              _context7.next = 49;\n              break;\n            case 41:\n              paging_container = alm.addons.paging_container;\n              if (!paging_container) {\n                _context7.next = 49;\n                break;\n              }\n              _context7.next = 45;\n              return (0,_modules_fade__WEBPACK_IMPORTED_MODULE_22__.almFadeOut)(paging_container, 250);\n            case 45:\n              _context7.next = 47;\n              return (0,_functions_displayResults__WEBPACK_IMPORTED_MODULE_11__.displayPagingResults)(alm, nodes);\n            case 47:\n              alm.main.classList.remove('alm-loading');\n\n              // Paging -> Images Loaded: Run complete callbacks and checks.\n              imagesLoaded(paging_container, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {\n                return _regeneratorRuntime().wrap(function _callee6$(_context6) {\n                  while (1) switch (_context6.prev = _context6.next) {\n                    case 0:\n                      _context6.next = 2;\n                      return (0,_modules_fade__WEBPACK_IMPORTED_MODULE_22__.almFadeIn)(paging_container, 250);\n                    case 2:\n                      paging_container.style.opacity = '';\n                      alm.AjaxLoadMore.triggerAddons(alm);\n                      if (typeof almOnPagingComplete === 'function') {\n                        window.almOnPagingComplete(alm); // Callback: Paging Add-on Complete\n                      }\n\n                      if (alm_is_filtering && alm.addons.filters) {\n                        if (typeof almFiltersAddonComplete === 'function') {\n                          window.almFiltersAddonComplete(el); // Callback: Filters Add-on Complete\n                        }\n                      }\n\n                      if (typeof almComplete === 'function') {\n                        window.almComplete(alm); // Callback: ALM Complete\n                      }\n\n                      // Trigger <script /> tags in templates.\n                      _modules_insertScript__WEBPACK_IMPORTED_MODULE_24__[\"default\"].init(alm.last_loaded);\n                      alm_is_filtering = false;\n                    case 9:\n                    case \"end\":\n                      return _context6.stop();\n                  }\n                }, _callee6);\n              })));\n            case 49:\n              _context7.next = 53;\n              break;\n            case 51:\n              /**\n               * No results from Ajax.\n               */\n              alm.AjaxLoadMore.noresults();\n              alm.AjaxLoadMore.transitionEnd();\n            case 53:\n              /**\n               * Destroy After\n               */\n              if (alm.destroy_after) {\n                currentPage = alm.page + 1; // Add 1 because alm.page starts at 0\n                currentPage = alm.addons.preloaded ? currentPage++ : currentPage; // Add 1 for preloaded\n                if (parseInt(currentPage) === parseInt(alm.destroy_after)) {\n                  alm.AjaxLoadMore.destroyed(); // Disable ALM if page = alm.destroy_after value.\n                }\n              }\n\n              /**\n               * Display Table of Contents\n               */\n              (0,_modules_tableofcontents__WEBPACK_IMPORTED_MODULE_29__.tableOfContents)(alm, alm.init);\n\n              /**\n               * Set Focus for accessibility.\n               */\n              if ((_alm25 = alm) !== null && _alm25 !== void 0 && (_alm25 = _alm25.last_loaded) !== null && _alm25 !== void 0 && _alm25.length) {\n                (0,_functions_setFocus__WEBPACK_IMPORTED_MODULE_19__[\"default\"])(alm, alm.last_loaded[0], total, alm_is_filtering);\n              }\n\n              // Remove filtering class\n              alm.main.classList.remove('alm-is-filtering');\n              if (alm.init) {\n                // Add loaded class to main container on initial page load.\n                alm.main.classList.add('alm-is-loaded');\n              }\n\n              // Set init flag\n              alm.init = false;\n            case 59:\n            case \"end\":\n              return _context7.stop();\n          }\n        }, _callee7);\n      }));\n      return function (_x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    /**\n     * Function runs when no results are returned.\n     *\n     * @since 5.3.1\n     */\n    alm.AjaxLoadMore.noresults = function () {\n      if (!alm.addons.paging) {\n        var _alm26, _alm27;\n        // Add .done class, reset btn text\n        (_alm26 = alm) === null || _alm26 === void 0 || (_alm26 = _alm26.button) === null || _alm26 === void 0 || (_alm26 = _alm26.classList) === null || _alm26 === void 0 || _alm26.remove('loading');\n        (_alm27 = alm) === null || _alm27 === void 0 || (_alm27 = _alm27.button) === null || _alm27 === void 0 || (_alm27 = _alm27.classList) === null || _alm27 === void 0 || _alm27.add('done');\n        alm.AjaxLoadMore.resetBtnText();\n      }\n\n      // Callback: ALM Complete\n      if (typeof almComplete === 'function' && alm.transition !== 'masonry') {\n        window.almComplete(alm);\n      }\n\n      // Filters Add-on Complete\n      if (alm_is_filtering && alm.addons.filters) {\n        if (typeof almFiltersAddonComplete === 'function') {\n          window.almFiltersAddonComplete(el);\n        }\n        alm_is_filtering = false;\n      }\n\n      // Masonry, clear `alm-listing` height.\n      if (alm.transition === 'masonry') {\n        alm.content.style.height = 'auto';\n      }\n\n      // ALM Done\n      alm.AjaxLoadMore.triggerDone();\n    };\n\n    /**\n     * Init Paging + Preloaded add-ons.\n     *\n     * @param {string} html Results of Ajax request.\n     * @since 2.11.3\n     */\n    alm.AjaxLoadMore.pagingPreloadedInit = function () {\n      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      alm.AjaxLoadMore.pagingInit(); // Set up paging functionality.\n\n      if (!html) {\n        if (typeof almPagingEmpty === 'function') {\n          window.almPagingEmpty(alm);\n        }\n        if (typeof almEmpty === 'function') {\n          window.almEmpty(alm);\n        }\n        if (alm.no_results) {\n          (0,_functions_noResults__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(alm.content, alm.no_results);\n        }\n      }\n    };\n\n    /**\n     * Init Paging + Next Page add-ons.\n     *\n     * @since 2.14.0\n     */\n    alm.AjaxLoadMore.pagingNextpageInit = function () {\n      alm.AjaxLoadMore.pagingInit(); // Set up paging functionality.\n\n      if (typeof almSetNextPageVars === 'function') {\n        window.almSetNextPageVars(alm); // Set up Nextpage Vars.\n      }\n    };\n\n    /**\n     * Paging add-on first to create required containers.\n     *\n     * @since 5.0\n     */\n    alm.AjaxLoadMore.pagingInit = function () {\n      var paging_container = alm.addons.paging_container; // Get content container.\n\n      if (paging_container) {\n        paging_container.style.outline = 'none';\n        alm.AjaxLoadMore.resetBtnText(); // Reset button text.\n\n        // Delay initial paging reveal to avoid positioning issues.\n        setTimeout(function () {\n          if (typeof almFadePageControls === 'function') {\n            window.almFadePageControls(alm.btnWrap); // Show paging controls.\n          }\n\n          if (paging_container && typeof almPagingSetHeight === 'function') {\n            window.almPagingSetHeight(paging_container); // Set container height.\n          }\n\n          alm.main.classList.remove('alm-loading'); // Remove `alm-loading` class\n        }, 250);\n      }\n    };\n\n    /**\n     *\tAutomatically trigger nested ALM instances.\n     *\n     * @since 5.0\n     */\n    alm.AjaxLoadMore.nested = function () {\n      var nested = alm.listing.querySelectorAll('.ajax-load-more-wrap:not(.alm-is-loaded)'); // Get all new instances\n      if (nested) {\n        _toConsumableArray(nested).forEach(function (element) {\n          window.almInit(element);\n        });\n      }\n    };\n\n    /**\n     *  Get the Single Posts post ID via ajax.\n     *\n     *  @since 2.7.4\n     */\n    alm.AjaxLoadMore.getSinglePost = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {\n      var params, singlePostData;\n      return _regeneratorRuntime().wrap(function _callee8$(_context8) {\n        while (1) switch (_context8.prev = _context8.next) {\n          case 0:\n            if (!alm.fetchingPreviousPost) {\n              _context8.next = 2;\n              break;\n            }\n            return _context8.abrupt(\"return\");\n          case 2:\n            alm.fetchingPreviousPost = true; // Set loading flag.\n\n            // Create data params.\n            params = {\n              action: 'alm_get_single',\n              id: alm.addons.single_post_id,\n              initial_id: alm.addons.single_post_init_id,\n              order: alm.addons.single_post_order,\n              taxonomy: alm.addons.single_post_taxonomy,\n              excluded_terms: alm.addons.single_post_excluded_terms,\n              post_type: alm.post_type,\n              init: alm.addons.single_post_init\n            }; // Send HTTP request via Axios.\n            _context8.next = 6;\n            return axios__WEBPACK_IMPORTED_MODULE_31__[\"default\"].get(alm_localize.ajaxurl, {\n              params: params\n            }).then(function (response) {\n              // Get data from response.\n              var data = response.data;\n              if (data.has_previous_post) {\n                alm.listing.dataset.singlePostId = data.prev_id; // Update single-post-id on instance\n                alm.addons.single_post_id = data.prev_id;\n                alm.addons.single_post_permalink = data.prev_permalink;\n                alm.addons.single_post_title = data.prev_title;\n                alm.addons.single_post_slug = data.prev_slug;\n                alm.addons.single_post_cache = data.cache;\n              } else {\n                alm.addons.single_post_cache = false;\n                if (!data.has_previous_post) {\n                  alm.AjaxLoadMore.triggerDone();\n                }\n              }\n              if (typeof window.almSetSinglePost === 'function') {\n                window.almSetSinglePost(alm, data.current_id, data.permalink, data.title);\n              }\n              alm.fetchingPreviousPost = false;\n              alm.addons.single_post_init = false;\n              return data;\n            })[\"catch\"](function (error) {\n              // Error\n              alm.AjaxLoadMore.error(error, 'getSinglePost');\n              alm.fetchingPreviousPost = false;\n            });\n          case 6:\n            singlePostData = _context8.sent;\n            return _context8.abrupt(\"return\", singlePostData);\n          case 8:\n          case \"end\":\n            return _context8.stop();\n        }\n      }, _callee8);\n    }));\n    if (alm.addons.single_post_id) {\n      alm.fetchingPreviousPost = false;\n      alm.addons.single_post_init = true;\n    }\n\n    /**\n     * Triggers various add-on functions after load complete.\n     *\n     * @param {Object} alm The ALM object.\n     * @since 2.14.0\n     */\n    alm.AjaxLoadMore.triggerAddons = function (alm) {\n      if (typeof almSetNextPage === 'function' && alm.addons.nextpage) {\n        window.almSetNextPage(alm);\n      }\n      if (typeof almSEO === 'function' && alm.addons.seo) {\n        window.almSEO(alm, false);\n      }\n      if (typeof almWooCommerce === 'function' && alm.addons.woocommerce) {\n        window.almWooCommerce(alm);\n      }\n      if (typeof almElementor === 'function' && alm.addons.elementor) {\n        window.almElementor(alm);\n      }\n    };\n\n    /**\n     * Fires a set of actions and functions when ALM has no other posts to load.\n     *\n     * @since 2.11.3\n     */\n    alm.AjaxLoadMore.triggerDone = function () {\n      alm.loading = false;\n      alm.finished = true;\n      (0,_modules_placeholder__WEBPACK_IMPORTED_MODULE_26__[\"default\"])('hide', alm);\n      if (!alm.addons.paging) {\n        if (alm.button_labels.done) {\n          setTimeout(function () {\n            alm.button.innerHTML = alm.button_labels.done;\n          }, 75);\n        }\n        alm.button.classList.add('done');\n        alm.button.removeAttribute('rel');\n        alm.button.disabled = true;\n      }\n\n      // almDone\n      if (typeof almDone === 'function') {\n        // Delay done until animations complete\n        setTimeout(function () {\n          window.almDone(alm);\n        }, alm.speed + 10);\n      }\n    };\n\n    /**\n     * Fires a set of actions once ALm Previous hits the first page.\n     *\n     * @since 5.5.0\n     */\n    alm.AjaxLoadMore.triggerDonePrev = function () {\n      alm.loading = false;\n      (0,_modules_placeholder__WEBPACK_IMPORTED_MODULE_26__[\"default\"])('hide', alm);\n      if (!alm.addons.paging) {\n        alm.buttonPrev.classList.add('done');\n        alm.buttonPrev.removeAttribute('rel');\n        alm.buttonPrev.disabled = true;\n      }\n\n      // almDonePrev Callback.\n      if (typeof almDonePrev === 'function') {\n        // Delay done until animations complete\n        setTimeout(function () {\n          window.almDonePrev(alm);\n        }, alm.speed + 10);\n      }\n    };\n\n    /**\n     * Resets the loading button text after loading has completed.\n     *\n     * @since 2.8.4\n     */\n    alm.AjaxLoadMore.resetBtnText = function () {\n      if (alm.button && alm.button_labels.loading) {\n        alm.button.innerHTML = alm.button_labels[\"default\"];\n      }\n    };\n\n    /**\n     * Button click handler to load posts.\n     *\n     * @param {Object} e The target button element.\n     * @since 4.2.0\n     */\n    alm.AjaxLoadMore.click = function (e) {\n      var button = e.currentTarget || e.target;\n      alm.rel = 'next';\n      if (alm.pause === 'true') {\n        alm.pause = false;\n        alm.pause_override = false;\n        alm.AjaxLoadMore.loadPosts();\n      }\n      if (!alm.loading && !alm.finished && !button.classList.contains('done')) {\n        alm.loading = true;\n        alm.page++;\n        alm.AjaxLoadMore.loadPosts();\n      }\n      button.blur(); // Remove button focus\n    };\n\n    /**\n     * Button click handler for previous load more.\n     *\n     * @param {Object} e The target button element.\n     * @since 5.5.0\n     */\n    alm.AjaxLoadMore.prevClick = function (e) {\n      var button = e.currentTarget || e.target;\n      e.preventDefault();\n      if (!alm.loading && !button.classList.contains('done')) {\n        alm.loading = true;\n        alm.pagePrev--;\n        alm.rel = 'prev';\n        alm.AjaxLoadMore.loadPosts();\n        button.blur(); // Remove button focus\n      }\n    };\n\n    /**\n     * Set the Load Previous button to alm object.\n     *\n     * @param {Element} button The button element.\n     * @since 5.5.0\n     */\n    alm.AjaxLoadMore.setPreviousButton = function (button) {\n      alm.pagePrev = alm.page;\n      alm.buttonPrev = button;\n    };\n\n    /**\n     * Load More button click event handler.\n     *\n     * @since 1.0.0\n     */\n    if (!alm.addons.paging && !alm.fetchingPreviousPost) {\n      alm.button.onclick = alm.AjaxLoadMore.click;\n    }\n\n    /**\n     * Window resize functions for Paging, Scroll Distance Percentage etc.\n     *\n     * @since 2.1.2\n     */\n    if (alm.addons.paging || alm.scroll_distance_perc || alm.scroll_direction === 'horizontal') {\n      var resize;\n      alm.window.onresize = function () {\n        clearTimeout(resize);\n        resize = setTimeout(function () {\n          if (alm.addons.paging) {\n            // Paging\n            if (typeof almOnWindowResize === 'function') {\n              window.almOnWindowResize(alm);\n            }\n          }\n          if (alm.scroll_distance_perc) {\n            alm.scroll_distance = (0,_functions_getScrollPercentage__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(alm);\n          }\n          if (alm.scroll_direction === 'horizontal') {\n            alm.AjaxLoadMore.horizontal();\n          }\n        }, alm.speed);\n      };\n    }\n\n    /**\n     * Check to see if element is visible before loading posts.\n     *\n     * @since 2.1.2\n     */\n    alm.AjaxLoadMore.isVisible = function () {\n      // Check for a width and height to determine visibility\n      alm.visible = alm.main.clientWidth > 0 && alm.main.clientHeight > 0 ? true : false;\n      return alm.visible;\n    };\n\n    /**\n     * Load posts as user scrolls the page.\n     *\n     * @since 1.0\n     */\n    alm.AjaxLoadMore.scroll = function () {\n      if (alm.timer) {\n        clearTimeout(alm.timer);\n      }\n      alm.timer = setTimeout(function () {\n        if (alm.AjaxLoadMore.isVisible() && !alm.fetchingPreviousPost) {\n          var trigger = alm.trigger.getBoundingClientRect();\n          var btnPos = Math.round(trigger.top - alm.window.innerHeight) + alm.scroll_distance;\n          var scrollTrigger = btnPos <= 0 ? true : false;\n\n          // Scroll Container\n          if (alm.window !== window) {\n            var scrollHeight = alm.main.offsetHeight; // ALM height\n            var scrollWidth = alm.main.offsetWidth; // ALM Width\n            var scrollPosition = '';\n            if (alm.scroll_direction === 'horizontal') {\n              // Left/Right\n              alm.AjaxLoadMore.horizontal();\n              scrollPosition = Math.round(alm.window.scrollLeft + alm.window.offsetWidth - alm.scroll_distance); // How far user has scrolled\n              scrollTrigger = scrollWidth <= scrollPosition ? true : false;\n            } else {\n              // Up/Down\n              scrollPosition = Math.round(alm.window.scrollTop + alm.window.offsetHeight - alm.scroll_distance); // How far user has scrolled\n              scrollTrigger = scrollHeight <= scrollPosition ? true : false;\n            }\n          }\n\n          // If Pause && Pause Override\n          if (!alm.loading && !alm.finished && scrollTrigger && alm.page < alm.max_pages - 1 && alm.proceed && alm.pause === 'true' && alm.pause_override === 'true') {\n            alm.button.click();\n          }\n\n          // Standard Scroll\n          else {\n            if (!alm.loading && !alm.finished && scrollTrigger && alm.page < alm.max_pages - 1 && alm.proceed && alm.pause !== 'true') {\n              alm.button.click();\n            }\n          }\n        }\n      }, 25);\n    };\n\n    /**\n     * Add scroll eventlisteners, only when needed.\n     *\n     * @since 5.2.0\n     */\n    alm.AjaxLoadMore.scrollSetup = function () {\n      if (alm.scroll && !alm.addons.paging) {\n        if (alm.scroll_container) {\n          // Scroll Container\n          alm.window = document.querySelector(alm.scroll_container) ? document.querySelector(alm.scroll_container) : alm.window;\n          setTimeout(function () {\n            // Delay to allow for ALM container to resize on load.\n            alm.AjaxLoadMore.horizontal();\n          }, 500);\n        }\n        alm.window.addEventListener('scroll', alm.AjaxLoadMore.scroll); // Scroll\n        alm.window.addEventListener('touchstart', alm.AjaxLoadMore.scroll); // Touch Devices\n        alm.window.addEventListener('wheel', function (e) {\n          // Mousewheel\n          var direction = Math.sign(e.deltaY);\n          if (direction > 0) {\n            alm.AjaxLoadMore.scroll();\n          }\n        });\n        alm.window.addEventListener('keyup', function (e) {\n          var key = e.key;\n          switch (key) {\n            case 'End':\n            case 'PageDown':\n              alm.AjaxLoadMore.scroll();\n              break;\n          }\n        });\n      }\n    };\n\n    /**\n     * Configure horizontal scroll settings.\n     *\n     * @since 5.3.6\n     */\n    alm.AjaxLoadMore.horizontal = function () {\n      if (alm.scroll_direction === 'horizontal') {\n        alm.main.style.width = \"\".concat(alm.listing.offsetWidth, \"px\");\n      }\n    };\n\n    /**\n     * Destroy Ajax Load More functionality.\n     *\n     * @since 3.4.2\n     */\n    alm.AjaxLoadMore.destroyed = function () {\n      alm.disable_ajax = true;\n      if (!alm.addons.paging) {\n        alm.button.style.display = 'none';\n        alm.AjaxLoadMore.triggerDone();\n        if (typeof almDestroyed === 'function') {\n          window.almDestroyed(alm);\n        }\n      }\n    };\n\n    /**\n     * Set variables after loading transition completes.\n     *\n     * @since 3.5\n     */\n    alm.AjaxLoadMore.transitionEnd = function () {\n      setTimeout(function () {\n        alm.AjaxLoadMore.resetBtnText();\n        alm.main.classList.remove('alm-loading');\n\n        // Loading buttons.\n        if (alm.rel === 'prev') {\n          var _alm28;\n          (_alm28 = alm) === null || _alm28 === void 0 || (_alm28 = _alm28.buttonPrev) === null || _alm28 === void 0 || (_alm28 = _alm28.classList) === null || _alm28 === void 0 || _alm28.remove('loading');\n        } else {\n          var _alm29;\n          (_alm29 = alm) === null || _alm29 === void 0 || (_alm29 = _alm29.button) === null || _alm29 === void 0 || (_alm29 = _alm29.classList) === null || _alm29 === void 0 || _alm29.remove('loading');\n        }\n        alm.AjaxLoadMore.triggerAddons(alm);\n        if (!alm.addons.paging) {\n          setTimeout(function () {\n            alm.loading = false; // Delay to prevent loading to fast\n          }, alm.speed * 2);\n        }\n      }, 25);\n\n      // Hide loading placeholder.\n      (0,_modules_placeholder__WEBPACK_IMPORTED_MODULE_26__[\"default\"])('hide', alm);\n    };\n\n    /**\n     * Set individual localized variable.\n     *\n     * @param {string} name\n     * @param {string} value\n     * @since 4.1\n     */\n    alm.AjaxLoadMore.setLocalizedVar = function () {\n      var _alm30;\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      if ((_alm30 = alm) !== null && _alm30 !== void 0 && _alm30.localize && name !== '' && value !== '') {\n        alm.localize[name] = value; // Set ALM localize var.\n        window[alm.master_id + '_vars'][name] = value; // Update vars.\n      }\n    };\n\n    /**\n     * Init Ajax load More functionality and add-ons.\n     *\n     * @since 2.0\n     */\n    alm.AjaxLoadMore.init = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {\n      var nextpage_pages, _alm31, nextpage_first, nextpage_total;\n      return _regeneratorRuntime().wrap(function _callee11$(_context11) {\n        while (1) switch (_context11.prev = _context11.next) {\n          case 0:\n            // Preloaded and Destroy After is 1.\n            if (alm.addons.preloaded && alm.destroy_after === 1) {\n              alm.AjaxLoadMore.destroyed();\n            }\n\n            // Paging Add-on.\n            if (alm.addons.paging) {\n              if (alm.addons.preloaded) {\n                // Preloaded.\n                alm.AjaxLoadMore.ajax('totalposts');\n              } else if (alm.addons.nextpage) {\n                // Next Page.\n                alm.AjaxLoadMore.ajax('totalpages');\n              } else {\n                // Standard.\n                alm.AjaxLoadMore.loadPosts();\n              }\n            }\n\n            // Not Paging & not Single Post.\n            if (!alm.addons.paging && !alm.addons.single_post) {\n              if (alm.disable_ajax) {\n                alm.finished = true;\n                alm.button.classList.add('done');\n              } else {\n                // Set button label.\n                alm.button.innerHTML = alm.button_labels[\"default\"];\n\n                // Check pause.\n                if (alm.pause === 'true') {\n                  alm.loading = false;\n                } else {\n                  alm.AjaxLoadMore.loadPosts();\n                }\n              }\n            }\n\n            // Single Post Add-on.\n            if (alm.addons.single_post) {\n              // Add delay for setup and scripts to load.\n              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {\n                return _regeneratorRuntime().wrap(function _callee9$(_context9) {\n                  while (1) switch (_context9.prev = _context9.next) {\n                    case 0:\n                      _context9.next = 2;\n                      return alm.AjaxLoadMore.getSinglePost();\n                    case 2:\n                      // Set next post on load\n\n                      // Trigger done if custom query and no posts to render\n                      if (alm.addons.single_post_query && alm.addons.single_post_order === '') {\n                        alm.AjaxLoadMore.triggerDone();\n                      }\n                      alm.loading = false;\n                      (0,_modules_tableofcontents__WEBPACK_IMPORTED_MODULE_29__.tableOfContents)(alm, true, true);\n                    case 5:\n                    case \"end\":\n                      return _context9.stop();\n                  }\n                }, _callee9);\n              })), 250);\n            }\n\n            // Preloaded + SEO && !Paging.\n            if (alm.addons.preloaded && alm.addons.seo && !alm.addons.paging) {\n              // Add delay for setup and scripts to load.\n              setTimeout(function () {\n                if (typeof almSEO === 'function' && alm.start_page < 1) {\n                  window.almSEO(alm, true);\n                }\n              }, 200);\n            }\n\n            // Preloaded && !Paging.\n            if (alm.addons.preloaded && !alm.addons.paging) {\n              // Add delay for setup and scripts to load.\n              setTimeout(function () {\n                if (alm.addons.preloaded_total_posts <= alm.addons.preloaded_amount) {\n                  alm.AjaxLoadMore.triggerDone();\n                }\n                // almEmpty callback.\n                if (alm.addons.preloaded_total_posts === 0) {\n                  if (typeof almEmpty === 'function') {\n                    window.almEmpty(alm);\n                  }\n                  if (alm.no_results) {\n                    (0,_functions_noResults__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(alm.content, alm.no_results);\n                  }\n                }\n              }, alm.speed);\n            }\n\n            // Preloaded Add-on ONLY.\n            if (alm.addons.preloaded) {\n              if (alm.resultsText) {\n                _modules_resultsText__WEBPACK_IMPORTED_MODULE_27__.almInitResultsText(alm, 'preloaded');\n              }\n              (0,_modules_tableofcontents__WEBPACK_IMPORTED_MODULE_29__.tableOfContents)(alm, alm.init, true);\n            }\n\n            // Next Page Add-on.\n            if (alm.addons.nextpage) {\n              // Check that posts remain on load\n              if (alm.listing.querySelector('.alm-nextpage') && !alm.addons.paging) {\n                nextpage_pages = alm.listing.querySelectorAll('.alm-nextpage'); // All Next Page Items.\n                if (nextpage_pages) {\n                  nextpage_first = nextpage_pages[0];\n                  nextpage_total = nextpage_first.dataset.totalPosts ? parseInt(nextpage_first.dataset.totalPosts) : (_alm31 = alm) === null || _alm31 === void 0 || (_alm31 = _alm31.localize) === null || _alm31 === void 0 ? void 0 : _alm31.total_posts; // Disable if last page loaded\n                  if (nextpage_pages.length === nextpage_total || parseInt(nextpage_first.dataset.id) === nextpage_total) {\n                    alm.AjaxLoadMore.triggerDone();\n                  }\n                }\n              }\n              if (alm.resultsText) {\n                _modules_resultsText__WEBPACK_IMPORTED_MODULE_27__.almInitResultsText(alm, 'nextpage');\n              }\n              (0,_modules_tableofcontents__WEBPACK_IMPORTED_MODULE_29__.tableOfContents)(alm, alm.init, true);\n            }\n\n            // WooCommerce Add-on.\n            if (alm.addons.woocommerce) {\n              (0,_addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__.wooInit)(alm);\n\n              // Trigger `Done` if `paged is less than `pages`.\n              if (alm.addons.woocommerce_settings.paged >= parseInt(alm.addons.woocommerce_settings.pages)) {\n                alm.AjaxLoadMore.triggerDone();\n              }\n            }\n\n            // Elementor Add-on.\n            if (alm.addons.elementor && alm.addons.elementor_type && alm.addons.elementor_type === 'posts') {\n              (0,_addons_elementor__WEBPACK_IMPORTED_MODULE_3__.elementorInit)(alm);\n\n              // Trigger `Done` if `elementor_next_page` is empty.\n              if (alm.addons.elementor_next_page === '') {\n                alm.AjaxLoadMore.triggerDone();\n              }\n            }\n\n            // Window Load.\n            alm.window.addEventListener('load', function () {\n              // Masonry & Preloaded.\n              if (alm.transition === 'masonry' && alm.addons.preloaded) {\n                // Wrap almMasonry in anonymous async/await function\n                _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {\n                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {\n                    while (1) switch (_context10.prev = _context10.next) {\n                      case 0:\n                        _context10.next = 2;\n                        return (0,_modules_masonry__WEBPACK_IMPORTED_MODULE_25__.almMasonry)(alm, true, false);\n                      case 2:\n                        alm.masonry.init = false;\n                      case 3:\n                      case \"end\":\n                        return _context10.stop();\n                    }\n                  }, _callee10);\n                }))()[\"catch\"](function () {\n                  console.error('There was an error with ALM Masonry');\n                });\n              }\n\n              //  Filters, Facets & Preloaded Facets\n              if (alm.addons.preloaded && alm.addons.filters && alm.facets) {\n                if (typeof almFiltersFacets === 'function') {\n                  var _alm32;\n                  var facets = (_alm32 = alm) === null || _alm32 === void 0 || (_alm32 = _alm32.localize) === null || _alm32 === void 0 ? void 0 : _alm32.facets;\n                  if (facets) {\n                    window.almFiltersFacets(facets);\n                  }\n                }\n              }\n\n              // Window Load Callback.\n              if (typeof almOnLoad === 'function') {\n                window.almOnLoad(alm); // eslint-disable-line\n              }\n            });\n\n            (0,_addons_preloaded__WEBPACK_IMPORTED_MODULE_7__.setPreloadedParams)(alm); // Set preloaded params.\n          case 12:\n          case \"end\":\n            return _context11.stop();\n        }\n      }, _callee11);\n    }));\n\n    /**\n     * Handle error messages.\n     *\n     * @param {string} error    The error message.\n     * @param {string} location The location the error occured.\n     * @since 2.6.0\n     */\n    alm.AjaxLoadMore.error = function (error) {\n      var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      alm.loading = false;\n      if (!alm.addons.paging) {\n        alm.button.classList.remove('loading');\n        alm.AjaxLoadMore.resetBtnText();\n      }\n      console.warn('Error: ', error);\n      if (error.response) {\n        // The request was made and the server responded with a status code that falls out of the range of 2xx.\n        console.error('Error Msg: ', error.message);\n      } else if (error.request) {\n        // The request was made but no response was received.\n        console.error(error.request);\n      } else {\n        // Something happened in setting up the request that triggered an Error.\n        console.error('Error Msg: ', error.message);\n      }\n      if (location) {\n        console.error('ALM Error started in ' + location);\n      }\n      if (error.config) {\n        console.error('ALM Error Debug: ', error.config);\n      }\n    };\n\n    /**\n     * Update Current Page.\n     * Note: Callback function triggered from Paging add-on.\n     *\n     * @param {number} current Current page number.\n     * @param {Object} obj     Optional object (Deprecated).\n     * @param {Object} alm     The ALM object.\n     * @since 2.7.0\n     */\n    window.almUpdateCurrentPage = function (current, obj, alm) {\n      // eslint-disable-line\n      alm.page = current;\n      alm.page = alm.addons.nextpage && !alm.addons.paging ? alm.page - 1 : alm.page; // Next Page add-on\n\n      var target = alm.listing;\n      var data = target === null || target === void 0 ? void 0 : target.innerHTML; // Get content\n\n      if (alm.addons.paging_init && alm.addons.preloaded) {\n        // Paging + Preloaded Firstrun.\n        alm.addons.preloaded_amount = 0; // Reset preloaded_amount param.\n        alm.AjaxLoadMore.pagingPreloadedInit(data);\n        alm.addons.paging_init = false;\n        alm.init = false;\n      } else if (alm.addons.paging_init && alm.addons.nextpage) {\n        // Paging + Next Page on firstrun.\n        alm.AjaxLoadMore.pagingNextpageInit();\n        alm.addons.paging_init = false;\n        alm.init = false;\n      } else {\n        // Standard Paging\n        alm.AjaxLoadMore.loadPosts();\n      }\n    };\n\n    /**\n     * Get the parent ALM container.\n     *\n     * @return {HTMLElement} The ALM listing container.\n     * @since 2.7.0\n     */\n    window.almGetParentContainer = function () {\n      var _alm33;\n      return (_alm33 = alm) === null || _alm33 === void 0 ? void 0 : _alm33.listing;\n    };\n\n    /**\n     * Returns the current ALM obj.\n     *\n     * @param {string} obj The ALM object to return.\n     * @return {Object}    The ALM object.\n     * @since 2.7.0\n     */\n    window.almGetObj = function () {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      if (obj) {\n        return alm[obj]; // Return specific param.\n      }\n\n      return alm; // Return the entire alm object\n    };\n\n    /**\n     * Trigger ajaxloadmore from any element on page.\n     *\n     * @since 2.12.0\n     */\n    window.almTriggerClick = function () {\n      alm.button.click();\n    };\n\n    // Delay to prevent immediate loading of posts on initial page load via scroll.\n    setTimeout(function () {\n      alm.proceed = true;\n      alm.AjaxLoadMore.scrollSetup();\n    }, 500);\n\n    // Init Ajax Load More\n    alm.AjaxLoadMore.init();\n  };\n\n  // End ajaxloadmore\n\n  /**\n   * Initiate instance of Ajax load More\n   *\n   * @param {HTMLElement} el The ALM element.\n   * @param {number}      id The ALM instance ID.\n   * @since 5.0\n   */\n  window.almInit = function (el) {\n    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    new ajaxloadmore(el, id);\n  };\n\n  /**\n   * Initiate Ajax load More if div is present on screen\n   *\n   * @since 2.1.2\n   */\n  var alm_instances = document.querySelectorAll('.ajax-load-more-wrap');\n  if (alm_instances.length) {\n    _toConsumableArray(alm_instances).forEach(function (alm, index) {\n      new ajaxloadmore(alm, index);\n    });\n  }\n})();\n\n/**\n * Filter an Ajax Load More instance.\n *\n * @param {string} transition The transition type.\n * @param {string} speed      The speed of the filter transition.\n * @param {Object} data       Query data as an object.\n * @since 5.0\n */\nvar filter = function filter() {\n  var transition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fade';\n  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '200';\n  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n  if (!transition || !speed || !data) {\n    return false;\n  }\n  alm_is_filtering = true;\n  (0,_modules_filtering__WEBPACK_IMPORTED_MODULE_23__[\"default\"])(transition, speed, data, 'filter');\n};\n\n/**\n * Reset an Ajax Load More instance.\n *\n * @since 5.3.8\n * @param {Object} props The ALM props as an object.\n */\nvar reset = function reset() {\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var data = {};\n  alm_is_filtering = true;\n  if (props && props.target) {\n    data = {\n      target: target\n    };\n  }\n  if (props && props.type === 'woocommerce') {\n    // WooCommerce\n    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {\n      var instance, settings;\n      return _regeneratorRuntime().wrap(function _callee12$(_context12) {\n        while (1) switch (_context12.prev = _context12.next) {\n          case 0:\n            instance = document.querySelector('.ajax-load-more-wrap .alm-listing[data-woo=\"true\"]'); // Get ALM instance\n            _context12.next = 3;\n            return (0,_addons_woocommerce__WEBPACK_IMPORTED_MODULE_10__.wooReset)();\n          case 3:\n            settings = _context12.sent;\n            // Get WooCommerce `settings` via Ajax\n            if (settings) {\n              instance.dataset.wooSettings = settings; // Update data atts\n              (0,_modules_filtering__WEBPACK_IMPORTED_MODULE_23__[\"default\"])('fade', '100', data, 'filter');\n            }\n          case 5:\n          case \"end\":\n            return _context12.stop();\n        }\n      }, _callee12);\n    }))()[\"catch\"](function () {\n      console.warn('Ajax Load More: There was an issue resetting the Ajax Load More instance.');\n    });\n  } else {\n    // Standard ALM\n    (0,_modules_filtering__WEBPACK_IMPORTED_MODULE_23__[\"default\"])('fade', '200', data, 'filter');\n  }\n};\n\n/**\n * Get the total post count in the current query by ALM instance ID.\n * Note: Uses localized ALM variables.\n *\n * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php\n * @param {string} id An optional Ajax Load More ID.\n * @return {number}   The results from the localized variable.\n */\nvar getPostCount = function getPostCount() {\n  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_15__[\"default\"])('post_count', id);\n};\n\n/**\n * Get the total number of posts by ALM instance ID.\n * Note: Uses localized ALM variables.\n *\n * @param {string} id An optional Ajax Load More ID.\n * @return {number}   The results from the localized variable.\n */\nvar getTotalPosts = function getTotalPosts() {\n  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_15__[\"default\"])('total_posts', id);\n};\n\n/**\n * Get the total posts remaining in the current query by ALM instance ID.\n * Note: Uses localized ALM variables.\n *\n * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php\n * @param {string} id An optional Ajax Load More ID.\n * @return {number}   The total remaining posts.\n */\nvar getTotalRemaining = function getTotalRemaining() {\n  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  return (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_15__[\"default\"])('remaining', id);\n};\n\n/**\n * Track Page Views and Analytics\n *\n * @since 5.0\n * @param {string} type The add-on type that is triggering the analytics.\n */\nvar analytics = function analytics() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var _window$location = window.location,\n    _window$location$path = _window$location.pathname,\n    pathname = _window$location$path === void 0 ? '' : _window$location$path,\n    _window$location$sear = _window$location.search,\n    search = _window$location$sear === void 0 ? '' : _window$location$sear;\n\n  /**\n   * ALM Callback Function (URL Change)\n   *\n   * @see https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/#url-update\n   */\n  if (typeof almUrlUpdate === 'function') {\n    window.almUrlUpdate(pathname + search, type);\n  }\n\n  /**\n   * ALM Callback Function\n   */\n  if (typeof almAnalytics === 'function') {\n    window.almAnalytics(pathname + search, type);\n  }\n};\n\n/**\n * Trigger Ajax Load More from other events.\n *\n * @since 5.0\n * @param {Element} el\n */\nvar start = function start(el) {\n  if (!el) {\n    return false;\n  }\n  window.almInit(el);\n};\n\n/**\n * Scroll window to position (global function).\n *\n * @since 5.0\n * @param {string} position The position to scroll.\n */\nvar almScroll = function almScroll(position) {\n  if (!position) {\n    return false;\n  }\n  window.scrollTo({\n    top: position,\n    behavior: 'smooth'\n  });\n};\n\n/**\n * Get the current top/left coordinates of an element relative to the document.\n *\n * @since 5.0\n * @param {HTMLElement} el The HTML element.\n * @return {Object}        The top/left coordinates.\n */\nvar getOffset = function getOffset() {\n  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  if (!el) {\n    return false;\n  }\n  var rect = el.getBoundingClientRect();\n  var scrollLeft = window.scrollX || document.documentElement.scrollLeft;\n  var scrollTop = window.scrollY || document.documentElement.scrollTop;\n  return {\n    top: rect.top + scrollTop,\n    left: rect.left + scrollLeft\n  };\n};\n\n/**\n * Trigger a click event to load Ajax Load More content.\n *\n * @param {string} id The Ajax Load More ID.\n */\nvar click = function click() {\n  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var alm = document.querySelector('.ajax-load-more-wrap');\n  var button = '';\n  if (!id && alm) {\n    // Default ALM element.\n    button = alm.querySelector('button.alm-load-more-btn');\n    if (button) {\n      button.click();\n    }\n  } else {\n    // Ajax Load More by ID.\n    alm = document.querySelector(\".ajax-load-more-wrap[data-id=\\\"\".concat(id, \"\\\"]\"));\n    if (alm) {\n      button = alm.querySelector('button.alm-load-more-btn');\n      if (button) {\n        button.click();\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/ajax-load-more.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/api.js':
			/*!******************************************!*\
  !*** ./src/frontend/js/functions/api.js ***!
  \******************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _alm_localize = alm_localize,\n  rest_api = _alm_localize.rest_api,\n  rest_nonce = _alm_localize.rest_nonce;\n\n/*\n * Create a Api object with Axios and configure it for the WordPRess Rest API.\n *\n * @see https://axios-http.com/docs/instance\n */\nvar api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n  baseURL: rest_api,\n  headers: {\n    'content-type': 'application/json',\n    'X-WP-Nonce': rest_nonce\n  }\n});\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/api.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/constants.js':
			/*!************************************************!*\
  !*** ./src/frontend/js/functions/constants.js ***!
  \************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EXCLUDED_NODES: function() { return /* binding */ EXCLUDED_NODES; }\n/* harmony export */ });\nvar EXCLUDED_NODES = ['#text', '#comment'];\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/constants.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/dispatchScrollEvent.js':
			/*!**********************************************************!*\
  !*** ./src/frontend/js/functions/dispatchScrollEvent.js ***!
  \**********************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ dispatchScrollEvent; }\n/* harmony export */ });\n/**\n * Dispatch a window scroll event.\n *\n * @param {boolean} delay Should this be delayed.\n * @since 5.5\n */\nfunction dispatchScrollEvent() {\n  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  if (typeof Event === 'function') {\n    setTimeout(function () {\n      window.dispatchEvent(new CustomEvent('scroll'));\n    }, delay ? 150 : 1);\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/dispatchScrollEvent.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/displayResults.js':
			/*!*****************************************************!*\
  !*** ./src/frontend/js/functions/displayResults.js ***!
  \*****************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ displayResults; },\n/* harmony export */   displayPagingResults: function() { return /* binding */ displayPagingResults; }\n/* harmony export */ });\n/* harmony import */ var _srcsetPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./srcsetPolyfill */ "./src/frontend/js/functions/srcsetPolyfill.js");\n/* harmony import */ var _modules_lazyImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/lazyImages */ "./src/frontend/js/modules/lazyImages.js");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/frontend/js/functions/constants.js");\n\n\n\nvar imagesLoaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");\n\n/**\n * Append and display Ajax results to the ALM container.\n *\n * @param {Object} alm   The ALM object.\n * @param {Array}  nodes The HTML nodes to append.\n * @return {Promise}     The Promise object.\n */\nfunction displayResults(alm, nodes) {\n  var container = alm.listing,\n    transition = alm.transition,\n    speed = alm.speed,\n    images_loaded = alm.images_loaded;\n  return new Promise(function (resolve) {\n    if (!container || !nodes) {\n      resolve(true);\n      return;\n    }\n    var useTransition = transition === \'fade\' ? true : false;\n\n    // Add each node to the alm listing container.\n    nodes.forEach(function (node) {\n      var nodeName = node.nodeName.toLowerCase();\n      if (useTransition || images_loaded) {\n        node.style.opacity = 0;\n        if (useTransition) {\n          node.style.transition = "all ".concat(speed, "ms ease");\n        }\n      }\n\n      /**\n       * Do not append elements that are not actual element nodes (i.e. #text node).\n       * Add item if not in exclude array.\n       */\n      if (_constants__WEBPACK_IMPORTED_MODULE_2__.EXCLUDED_NODES.indexOf(nodeName) === -1) {\n        container.appendChild(node);\n      }\n    });\n\n    // Run srcSet polyfill.\n    (0,_srcsetPolyfill__WEBPACK_IMPORTED_MODULE_0__["default"])(container, alm.ua);\n\n    // Lazy load images.\n    (0,_modules_lazyImages__WEBPACK_IMPORTED_MODULE_1__.lazyImages)(alm);\n\n    // Display the results.\n    if (images_loaded) {\n      imagesLoaded(container, function () {\n        display(alm, nodes, useTransition);\n      });\n    } else {\n      display(alm, nodes, useTransition);\n    }\n    resolve(true);\n  });\n}\n\n/**\n * Append and display Ajax results to the Paging container.\n *\n * @param {Object} alm   The ALM object.\n * @param {Array}  nodes The HTML nodes to append.\n * @return {Promise}     The Promise object.\n */\nfunction displayPagingResults(alm, nodes) {\n  var addons = alm.addons;\n  var container = addons.paging_container;\n  return new Promise(function (resolve) {\n    if (!container || !nodes) {\n      resolve(true);\n      return;\n    }\n\n    // Clear contents of Paging container.\n    container.style.opacity = 0;\n    container.innerHTML = \'\';\n\n    // Add each node to the paging container.\n    nodes.forEach(function (node) {\n      var nodeName = node.nodeName.toLowerCase();\n      /**\n       * Do not append elements that are not actual element nodes (i.e. #text node).\n       * Add item if not in exclude array.\n       */\n      if (_constants__WEBPACK_IMPORTED_MODULE_2__.EXCLUDED_NODES.indexOf(nodeName) === -1) {\n        container.appendChild(node);\n      }\n    });\n\n    // Run srcSet polyfill.\n    (0,_srcsetPolyfill__WEBPACK_IMPORTED_MODULE_0__["default"])(container, alm.ua);\n\n    // Lazy load images.\n    (0,_modules_lazyImages__WEBPACK_IMPORTED_MODULE_1__.lazyImages)(alm);\n    resolve(true);\n  });\n}\n\n/**\n * Display the loaded results via CSS transition.\n *\n * @param {Object}  alm           The ALM object.\n * @param {Array}   nodes         The HTML nodes to append.\n * @param {boolean} useTransition Use CSS transition.\n */\nfunction display(alm, nodes) {\n  var useTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var delay = alm.transition_delay,\n    images_loaded = alm.images_loaded;\n  var offset = useTransition ? parseInt(delay) : 0; // Delay offset timing.\n\n  if (nodes) {\n    setTimeout(function () {\n      if (useTransition || images_loaded) {\n        nodes.forEach(function (node, index) {\n          setTimeout(function () {\n            node.style.opacity = 1;\n          }, index * offset);\n        });\n      }\n      alm.AjaxLoadMore.transitionEnd();\n    }, 50);\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/displayResults.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/functions/formatHTML.js':
			/*!*************************************************!*\
  !*** ./src/frontend/js/functions/formatHTML.js ***!
  \*************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ formatHTML; }\n/* harmony export */ });\n/* harmony import */ var _addons_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addons/filters */ "./src/frontend/js/addons/filters.js");\n/* harmony import */ var _addons_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addons/seo */ "./src/frontend/js/addons/seo.js");\n/* harmony import */ var _addons_singleposts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addons/singleposts */ "./src/frontend/js/addons/singleposts.js");\n/* harmony import */ var _functions_stripEmptyNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/stripEmptyNodes */ "./src/frontend/js/functions/stripEmptyNodes.js");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n/**\n * Create data attributes for SEO and Filter paged results.\n *\n * @param {Object} alm      The ALM object.\n * @param {Array}  elements The element HTML nodes.\n * @return {Array}          The modified elements.\n * @since 7.0.0\n */\nfunction formatHTML(alm, elements) {\n  var _elements;\n  if (!((_elements = elements) !== null && _elements !== void 0 && _elements.length)) {\n    return [];\n  }\n  var addons = alm.addons,\n    page = alm.page,\n    posts_per_page = alm.posts_per_page,\n    init = alm.init,\n    start_page = alm.start_page,\n    container_type = alm.container_type;\n\n  // Single Posts.\n  if (addons !== null && addons !== void 0 && addons.single_post) {\n    // Single Posts only.\n    elements = (0,_addons_singleposts__WEBPACK_IMPORTED_MODULE_2__.addSinglePostsAttributes)(alm, elements);\n\n    // Single Post Preview.\n    if (addons.single_post_preview && addons.single_post_preview_data && typeof almSinglePostCreatePreview === \'function\') {\n      var singlePreview = almSinglePostCreatePreview(elements[0], addons.single_post_id, addons.single_post_preview_data);\n      if (singlePreview) {\n        elements[0].replaceChildren(singlePreview);\n      }\n    }\n    return elements;\n  }\n\n  // Exit if not SEO or Filters.\n  if (!(addons !== null && addons !== void 0 && addons.seo) && !(addons !== null && addons !== void 0 && addons.filters)) {\n    return elements;\n  }\n  var current = parseInt(page) + 1;\n  current = addons !== null && addons !== void 0 && addons.preloaded ? current + 1 : current;\n\n  // If init and SEO or Filter start_page, set pagenum to 1.\n  if (init && (parseInt(start_page) > 1 || (addons === null || addons === void 0 ? void 0 : addons.filters_startpage) > 1)) {\n    current = 1;\n  }\n\n  // Call to Action add-on: Add 1 if CTA is true.\n  var per_page = addons !== null && addons !== void 0 && addons.cta ? parseInt(posts_per_page) + 1 : parseInt(posts_per_page);\n\n  // If table, format the return data.\n  if (container_type === \'table\') {\n    elements = formatTable(elements);\n  }\n\n  /**\n   * Split elements array into individual pages.\n   */\n  var pages = [];\n  for (var i = 0; i < ((_elements2 = elements) === null || _elements2 === void 0 ? void 0 : _elements2.length); i += per_page) {\n    var _elements2;\n    pages.push(elements.slice(i, per_page + i));\n  }\n\n  /**\n   * Loop pages and modify first element in return data.\n   */\n  if (pages) {\n    for (var _i = 0; _i < pages.length; _i++) {\n      var index = _i > 0 ? _i * per_page : 0;\n      if (elements[index]) {\n        if (addons !== null && addons !== void 0 && addons.seo) {\n          elements[index] = (0,_addons_seo__WEBPACK_IMPORTED_MODULE_1__.addSEOAttributes)(alm, elements[index], _i + current);\n        }\n        if (addons !== null && addons !== void 0 && addons.filters) {\n          elements[index] = (0,_addons_filters__WEBPACK_IMPORTED_MODULE_0__.addFiltersAttributes)(alm, elements[index], _i + current);\n        }\n      }\n    }\n  }\n  return elements;\n}\n\n/**\n * Format return table data.\n *\n * @param {Array} elements The element HTML nodes.\n * @return {Array}         The modified elements.\n */\nfunction formatTable() {\n  var _elements3;\n  var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  if (!elements) {\n    return [];\n  }\n  var tableChildren = (_elements3 = elements) !== null && _elements3 !== void 0 && _elements3.length ? elements[0].childNodes : [];\n  if (tableChildren) {\n    elements = (0,_functions_stripEmptyNodes__WEBPACK_IMPORTED_MODULE_3__["default"])(_toConsumableArray(tableChildren));\n  }\n  return elements;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/formatHTML.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/functions/getButtonURL.js':
			/*!***************************************************!*\
  !*** ./src/frontend/js/functions/getButtonURL.js ***!
  \***************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getButtonURL: function() { return /* binding */ getButtonURL; },\n/* harmony export */   setButtonAtts: function() { return /* binding */ setButtonAtts; }\n/* harmony export */ });\n/**\n * Get the URL for Load More button.\n *\n * @param {Object} alm The Ajax Load More object.\n * @param {string} rel The type of load more, `next` or `previous`.\n * @since 5.4.0\n */\nfunction getButtonURL(alm) {\n  var _button;\n  var rel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'next';\n  if (!alm || !alm.trigger) {\n    return false;\n  }\n  var button = alm.trigger.querySelector('.alm-load-more-btn');\n  if (rel === 'prev') {\n    button = document.querySelector('.alm-load-more-btn--prev');\n  }\n  return ((_button = button) === null || _button === void 0 || (_button = _button.dataset) === null || _button === void 0 ? void 0 : _button.url) || '';\n}\n\n/**\n * Set button dataset attributes.\n *\n * @param {Element} button The HTML element.\n * @param {number}  page   The current page number.\n * @param {string}  url    The URL for updating.\n */\nfunction setButtonAtts(button, page, url) {\n  if (!button) {\n    return;\n  }\n  if (button.rel && button.rel === 'prev') {\n    button.href = url;\n  }\n\n  // Set page & URL attributes.\n  button.dataset.page = page;\n  button.dataset.url = url ? url : '';\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/getButtonURL.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/getParameterByName.js':
			/*!*********************************************************!*\
  !*** ./src/frontend/js/functions/getParameterByName.js ***!
  \*********************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getParameterByName; }\n/* harmony export */ });\n/**\n * Return a query param by name.\n *\n * @param {string} name The query param name.\n * @param {string} url  The URL.\n * @return {string}     The query param value.\n */\nfunction getParameterByName(name, url) {\n  if (!url) url = window.location.href;\n  name = name.replace(/[\\[\\]]/g, '\\\\$&');\n  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');\n  var results = regex.exec(url);\n  if (!results) {\n    return null;\n  }\n  if (!results[2]) {\n    return '';\n  }\n  return decodeURIComponent(results[2].replace(/\\+/g, ' '));\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/getParameterByName.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/getQueryVariable.js':
			/*!*******************************************************!*\
  !*** ./src/frontend/js/functions/getQueryVariable.js ***!
  \*******************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getQueryVariable; }\n/* harmony export */ });\n/**\n * Get a query variable from location querystring\n *\n * @param {string} variable\n * @since 5.3.4\n */\nfunction getQueryVariable(variable) {\n  var query = window.location.search.substring(1);\n  var vars = query.split('&');\n  for (var i = 0; i < vars.length; i++) {\n    var pair = vars[i].split('=');\n    if (decodeURIComponent(pair[0]) === variable) {\n      return decodeURIComponent(pair[1]);\n    }\n  }\n  return false;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/getQueryVariable.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/getScrollPercentage.js':
			/*!**********************************************************!*\
  !*** ./src/frontend/js/functions/getScrollPercentage.js ***!
  \**********************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getScrollPercentage; }\n/* harmony export */ });\n/**\n * Get the scroll distance in pixels from a percentage.\n *\n * @param {Object} alm The Ajax Load More object.\n * @return {number}    The new distance.\n * @since 5.2\n */\nfunction getScrollPercentage(alm) {\n  if (!alm) {\n    return false;\n  }\n  var is_negative = alm.scroll_distance_orig.toString().indexOf('-') === -1 ? false : true; // Is this a negative number\n  var raw_distance = alm.scroll_distance_orig.toString().replace('-', '').replace('%', ''); // Remove - and perc\n  var wh = alm.window.innerHeight; // window height\n  var height = Math.floor(wh / 100 * parseInt(raw_distance)); // Do math to get distance\n  var newdistance = is_negative ? \"-\".concat(height) : height; // Set the distance\n\n  return parseInt(newdistance);\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/getScrollPercentage.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/getTotals.js':
			/*!************************************************!*\
  !*** ./src/frontend/js/functions/getTotals.js ***!
  \************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getTotals; }\n/* harmony export */ });\n/**\n * Get the total posts remaining in the current query by ALM instance ID.\n * Note: Uses localized ALM variables.\n *\n * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php\n * @param {string} type The type of total to retrieve.\n * @param {string} id   An optional Ajax Load More ID.\n * @return {number}     A total post count.\n */\nfunction getTotals(type) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  // Get the ALM localized variable name.\n  var localize_var = id ? \"ajax_load_more_\".concat(id.replace(/-/g, '_'), \"_vars\") : 'ajax_load_more_vars';\n\n  // Get the localized value from the window object.\n  var localized = window[localize_var];\n  if (!localized) {\n    return null;\n  }\n\n  // Deconstruct the object.\n  var total_posts = localized.total_posts,\n    post_count = localized.post_count,\n    page = localized.page,\n    pages = localized.pages;\n  switch (type) {\n    case 'total_posts':\n      return total_posts ? parseInt(total_posts) : '';\n    case 'post_count':\n      return post_count ? parseInt(post_count) : '';\n    case 'page':\n      return page ? parseInt(page) : '';\n    case 'pages':\n      return pages ? parseInt(pages) : '';\n    case 'remaining':\n      if (!total_posts || !post_count) {\n        return '';\n      }\n      return parseInt(total_posts) - parseInt(post_count);\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/getTotals.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/noResults.js':
			/*!************************************************!*\
  !*** ./src/frontend/js/functions/noResults.js ***!
  \************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ noResults; }\n/* harmony export */ });\n/**\n * Set the results text if required.\n *\n * @param {Element} element Target HTML element\n * @param {string}  html    Text as HTML to display.\n * @since 5.1\n */\nfunction noResults(element) {\n  var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  if (!html || !element) {\n    return; // Exit if empty.\n  }\n\n  // Remove empty <p/> tags.\n  html = html.replace(/(<p><\\/p>)+/g, '');\n\n  // Is this a paging instance.\n  var paging = element === null || element === void 0 ? void 0 : element.querySelector('.alm-paging-content');\n  if (paging) {\n    paging.innerHTML = html;\n  } else {\n    element.innerHTML = html;\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/noResults.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/parsers.js':
			/*!**********************************************!*\
  !*** ./src/frontend/js/functions/parsers.js ***!
  \**********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domParser: function() { return /* binding */ domParser; },\n/* harmony export */   tableParser: function() { return /* binding */ tableParser; }\n/* harmony export */ });\n/* harmony import */ var _functions_stripEmptyNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/stripEmptyNodes */ "./src/frontend/js/functions/stripEmptyNodes.js");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n/**\n * Convert a plain text string into an array of HTML nodes.\n *\n * @param {string} html The HTML string\n * @param {string} type The element type.\n * @return {Array}      The HTML nodes as an array.\n * @since 5.0\n */\nfunction domParser() {\n  var _data$body;\n  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \'\';\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'text/html\';\n  if (!html) {\n    return [];\n  }\n  var parser = new DOMParser();\n  var data = parser.parseFromString(html, type);\n  var nodes = data === null || data === void 0 || (_data$body = data.body) === null || _data$body === void 0 ? void 0 : _data$body.childNodes;\n  return nodes ? (0,_functions_stripEmptyNodes__WEBPACK_IMPORTED_MODULE_0__["default"])(_toConsumableArray(nodes)) : [];\n}\n\n/**\n * Convert retun table data into an array of HTML elements.\n *\n * @param {string} html Plain text HTML.\n * @return {Array}      Array of HTML elements.\n * @since 5.0\n */\nfunction tableParser() {\n  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  if (!html) {\n    return [];\n  }\n  // Create table element and add results to table body.\n  var tbody = document.createElement(\'tbody\');\n  tbody.innerHTML = html;\n  return [tbody];\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/parsers.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/functions/queryParams.js':
			/*!**************************************************!*\
  !*** ./src/frontend/js/functions/queryParams.js ***!
  \**************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAjaxParams: function() { return /* binding */ getAjaxParams; },\n/* harmony export */   getRestAPIParams: function() { return /* binding */ getRestAPIParams; },\n/* harmony export */   getTypeParams: function() { return /* binding */ getTypeParams; }\n/* harmony export */ });\n/* harmony import */ var _addons_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addons/cache */ \"./src/frontend/js/addons/cache.js\");\n\n\n/**\n * Build the data object to send with the Ajax request.\n *\n * @param {Object} alm       The ALM object.\n * @param {string} queryType The query type.\n * @return {Object}          The data object.\n * @since 3.6\n */\nfunction getAjaxParams(alm, queryType) {\n  var addons = alm.addons,\n    extensions = alm.extensions;\n\n  // Defaults\n  var data = {\n    action: 'alm_get_posts',\n    query_type: queryType,\n    id: alm.id,\n    post_id: parseInt(alm.post_id),\n    slug: alm.slug,\n    canonical_url: encodeURIComponent(alm.canonical_url),\n    posts_per_page: parseInt(alm.posts_per_page),\n    page: parseInt(alm.page),\n    offset: parseInt(alm.offset),\n    post_type: alm.post_type,\n    repeater: alm.repeater,\n    seo_start_page: alm.start_page\n  };\n\n  // Addons & Extensions\n\n  if (extensions.acf) {\n    data.acf = getTypeParams(alm, 'acf');\n    if (extensions.acf_field_type !== 'relationship') {\n      data.action = 'alm_acf';\n    }\n  }\n  if (addons.comments) {\n    data.comments = getTypeParams(alm, 'comments');\n    data.posts_per_page = addons.comments_per_page;\n    data.action = 'alm_comments';\n  }\n  if (addons.cta) {\n    data.cta = getTypeParams(alm, 'cta');\n  }\n  if (addons.filters) {\n    data.filters = addons.filters;\n    data.filters_startpage = addons.filters_startpage;\n    data.filters_target = addons.filters_target;\n    data.facets = alm.facets;\n  }\n  if (addons.nextpage) {\n    data.nextpage = getTypeParams(alm, 'nextpage');\n    data.action = 'alm_nextpage';\n  }\n  if (addons.paging) {\n    data.paging = addons.paging;\n  }\n  if (addons.preloaded) {\n    data.preloaded = addons.preloaded;\n    data.preloaded_amount = parseInt(addons.preloaded_amount);\n  }\n  if (addons.single_post) {\n    data.single_post = getTypeParams(alm, 'single_post');\n  }\n  if (extensions.term_query) {\n    data.term_query = getTypeParams(alm, 'term_query');\n    data.action = 'alm_get_terms';\n  }\n  if (alm.extensions.users) {\n    data.users = getTypeParams(alm, 'users');\n    data.action = 'alm_users';\n  }\n  if (alm.theme_repeater) {\n    data.theme_repeater = alm.theme_repeater;\n  }\n\n  // Query data params from ALM HTML element.\n  if (alm.listing.dataset.lang) {\n    data.lang = alm.listing.dataset.lang;\n  }\n  if (alm.listing.dataset.stickyPosts) {\n    data.sticky_posts = alm.listing.dataset.stickyPosts;\n  }\n  if (alm.listing.dataset.postFormat) {\n    data.post_format = alm.listing.dataset.postFormat;\n  }\n  if (alm.listing.dataset.category) {\n    data.category = alm.listing.dataset.category;\n  }\n  if (alm.listing.dataset.categoryAnd) {\n    data.category__and = alm.listing.dataset.categoryAnd;\n  }\n  if (alm.listing.dataset.categoryNotIn) {\n    data.category__not_in = alm.listing.dataset.categoryNotIn;\n  }\n  if (alm.listing.dataset.tag) {\n    data.tag = alm.listing.dataset.tag;\n  }\n  if (alm.listing.dataset.tagAnd) {\n    data.tag__and = alm.listing.dataset.tagAnd;\n  }\n  if (alm.listing.dataset.tagNotIn) {\n    data.tag__not_in = alm.listing.dataset.tagNotIn;\n  }\n  if (alm.listing.dataset.taxonomy) {\n    data.taxonomy = alm.listing.dataset.taxonomy;\n  }\n  if (alm.listing.dataset.taxonomyTerms) {\n    data.taxonomy_terms = alm.listing.dataset.taxonomyTerms;\n  }\n  if (alm.listing.dataset.taxonomyOperator) {\n    data.taxonomy_operator = alm.listing.dataset.taxonomyOperator;\n  }\n  if (alm.listing.dataset.taxonomyIncludeChildren) {\n    data.taxonomy_include_children = alm.listing.dataset.taxonomyIncludeChildren;\n  }\n  if (alm.listing.dataset.taxonomyRelation) {\n    data.taxonomy_relation = alm.listing.dataset.taxonomyRelation;\n  }\n  if (alm.listing.dataset.sortKey) {\n    data.sort_key = alm.listing.dataset.sortKey;\n  }\n  if (alm.listing.dataset.metaKey) {\n    data.meta_key = alm.listing.dataset.metaKey;\n  }\n  if (alm.listing.dataset.metaValue) {\n    data.meta_value = alm.listing.dataset.metaValue;\n  }\n  if (alm.listing.dataset.metaCompare) {\n    data.meta_compare = alm.listing.dataset.metaCompare;\n  }\n  if (alm.listing.dataset.metaRelation) {\n    data.meta_relation = alm.listing.dataset.metaRelation;\n  }\n  if (alm.listing.dataset.metaType) {\n    data.meta_type = alm.listing.dataset.metaType;\n  }\n  if (alm.listing.dataset.author) {\n    data.author = alm.listing.dataset.author;\n  }\n  if (alm.listing.dataset.year) {\n    data.year = alm.listing.dataset.year;\n  }\n  if (alm.listing.dataset.month) {\n    data.month = alm.listing.dataset.month;\n  }\n  if (alm.listing.dataset.day) {\n    data.day = alm.listing.dataset.day;\n  }\n  if (alm.listing.dataset.order) {\n    data.order = alm.listing.dataset.order;\n  }\n  if (alm.listing.dataset.orderby) {\n    data.orderby = alm.listing.dataset.orderby;\n  }\n  if (alm.listing.dataset.postStatus) {\n    data.post_status = alm.listing.dataset.postStatus;\n  }\n  if (alm.listing.dataset.postIn) {\n    data.post__in = alm.listing.dataset.postIn;\n  }\n  if (alm.listing.dataset.postNotIn) {\n    data.post__not_in = alm.listing.dataset.postNotIn;\n  }\n  if (alm.listing.dataset.exclude) {\n    data.exclude = alm.listing.dataset.exclude;\n  }\n  if (alm.listing.dataset.search) {\n    data.search = alm.listing.dataset.search;\n  }\n  if (alm.listing.dataset.s) {\n    data.search = alm.listing.dataset.s;\n  }\n  if (alm.listing.dataset.customArgs) {\n    data.custom_args = alm.listing.dataset.customArgs;\n  }\n  if (alm.listing.dataset.vars) {\n    data.vars = alm.listing.dataset.vars;\n  }\n\n  // Cache Params\n\n  if (addons.cache) {\n    data.cache_id = addons.cache_id;\n    data.cache_logged_in = addons.cache_logged_in;\n    data.cache_slug = (0,_addons_cache__WEBPACK_IMPORTED_MODULE_0__.getCacheSlug)(alm, data);\n  }\n  return data;\n}\n\n/**\n * Build the query params for content types.\n *\n * @param {Object} alm  The ALM object.\n * @param {string} type The query type.\n * @return {Object}     The query params.\n */\nfunction getTypeParams(alm, type) {\n  var addons = alm.addons,\n    extensions = alm.extensions;\n  switch (type) {\n    case 'acf':\n      return {\n        acf: 'true',\n        post_id: extensions.acf_post_id,\n        field_type: extensions.acf_field_type,\n        field_name: extensions.acf_field_name,\n        parent_field_name: extensions.acf_parent_field_name,\n        row_index: extensions.acf_row_index\n      };\n    case 'comments':\n      return {\n        comments: 'true',\n        post_id: addons.comments_post_id,\n        per_page: addons.comments_per_page,\n        type: addons.comments_type,\n        style: addons.comments_style,\n        template: addons.comments_template,\n        callback: addons.comments_callback\n      };\n    case 'cta':\n      return {\n        cta: 'true',\n        cta_position: addons.cta_position,\n        cta_repeater: addons.cta_repeater,\n        cta_theme_repeater: addons.cta_theme_repeater\n      };\n    case 'nextpage':\n      return {\n        nextpage: 'true',\n        urls: addons.nextpage_urls,\n        scroll: addons.nextpage_scroll,\n        post_id: addons.nextpage_post_id,\n        startpage: addons.nextpage_startpage,\n        nested: alm.nested\n      };\n    case 'single_post':\n      return {\n        single_post: 'true',\n        id: addons.single_post_id,\n        slug: addons.single_post_slug\n      };\n    case 'term_query':\n      return {\n        term_query: 'true',\n        taxonomy: extensions.term_query_taxonomy,\n        hide_empty: extensions.term_query_hide_empty,\n        number: extensions.term_query_number\n      };\n    case 'users':\n      return {\n        users: 'true',\n        role: alm.listing.dataset.usersRole,\n        include: alm.listing.dataset.usersInclude,\n        exclude: alm.listing.dataset.usersExclude,\n        per_page: alm.posts_per_page,\n        order: alm.listing.dataset.usersOrder,\n        orderby: alm.listing.dataset.usersOrderby\n      };\n  }\n}\n\n/**\n * Build the REST API data object to send with REST API request.\n *\n * @param {Object} alm The ALM object.\n * @return {Object}    The data object.\n * @since 3.6\n */\nfunction getRestAPIParams(alm) {\n  var data = {\n    id: alm.id,\n    post_id: parseInt(alm.post_id),\n    posts_per_page: alm.posts_per_page,\n    page: alm.page,\n    offset: alm.offset,\n    slug: alm.slug,\n    canonical_url: encodeURIComponent(alm.canonical_url),\n    post_type: alm.post_type,\n    post_format: alm.listing.dataset.postFormat,\n    category: alm.listing.dataset.category,\n    category__not_in: alm.listing.dataset.categoryNotIn,\n    tag: alm.listing.dataset.tag,\n    tag__not_in: alm.listing.dataset.tagNotIn,\n    taxonomy: alm.listing.dataset.taxonomy,\n    taxonomy_terms: alm.listing.dataset.taxonomyTerms,\n    taxonomy_operator: alm.listing.dataset.taxonomyOperator,\n    taxonomy_relation: alm.listing.dataset.taxonomyRelation,\n    meta_key: alm.listing.dataset.metaKey,\n    meta_value: alm.listing.dataset.metaValue,\n    meta_compare: alm.listing.dataset.metaCompare,\n    meta_relation: alm.listing.dataset.metaRelation,\n    meta_type: alm.listing.dataset.metaType,\n    author: alm.listing.dataset.author,\n    year: alm.listing.dataset.year,\n    month: alm.listing.dataset.month,\n    day: alm.listing.dataset.day,\n    post_status: alm.listing.dataset.postStatus,\n    order: alm.listing.dataset.order,\n    orderby: alm.listing.dataset.orderby,\n    post__in: alm.listing.dataset.postIn,\n    post__not_in: alm.listing.dataset.postNotIn,\n    search: alm.listing.dataset.search,\n    s: alm.listing.dataset.s,\n    custom_args: alm.listing.dataset.customArgs,\n    vars: alm.listing.dataset.vars,\n    lang: alm.lang,\n    preloaded: alm.addons.preloaded,\n    preloaded_amount: alm.addons.preloaded_amount,\n    seo_start_page: alm.start_page\n  };\n  return data;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/queryParams.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/setFocus.js':
			/*!***********************************************!*\
  !*** ./src/frontend/js/functions/setFocus.js ***!
  \***********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setFocus; }\n/* harmony export */ });\n/**\n * Set user focus to improve accessibility after load events.\n *\n * @param {Object}  alm       ALM object.\n * @param {Element} element   The element to focus on.\n * @param {number}  total     The total number of posts returned.\n * @param {boolean} filtering Is this a filtering event.\n * @since 5.1\n */\nfunction setFocus(alm) {\n  var _alm_localize;\n  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var total = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var filtering = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  if (!((_alm_localize = alm_localize) !== null && _alm_localize !== void 0 && _alm_localize.a11y_focus) || !element) {\n    return;\n  }\n\n  // WooCommerce||ELementor Add-ons.\n  if (alm.addons.woocommerce || alm.addons.elementor) {\n    moveFocus(false, false, element, false);\n    return;\n  }\n  if (total < 1) {\n    return; // Exit if no posts returned.\n  }\n\n  if (alm.addons.paging) {\n    // Paging.\n    moveFocus(alm.init, alm.addons.preloaded, alm.listing, filtering);\n  } else if (alm.addons.single_post || alm.addons.nextpage) {\n    // Single Posts || Next Page - Set `init` to false to trigger focus.\n    moveFocus(false, alm.addons.preloaded, element, filtering);\n  } else {\n    // Standard.\n    moveFocus(alm.init, alm.addons.preloaded, element, filtering);\n  }\n}\n\n/**\n * Move user focus to latest elements that have been loaded.\n *\n * @param {boolean} init      Initial run true or false.\n * @param {string}  preloaded Preloaded true or false.\n * @param {Element} element   The container HTML element.\n * @param {boolean} filtering Filtering true or false.\n * @since 5.1\n */\n\nfunction moveFocus() {\n  var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  var preloaded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'false';\n  var element = arguments.length > 2 ? arguments[2] : undefined;\n  var filtering = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  if (!filtering) {\n    if ((init || !element) && preloaded !== 'true') {\n      return; // Exit if first run\n    }\n  }\n\n  element.setAttribute('tabIndex', '-1'); // Set tabIndex.\n  element.style.outline = 'none'; // Set element outline.\n\n  // Add slight delay for elements to settle into DOM.\n  setTimeout(function () {\n    element.focus({\n      preventScroll: true\n    });\n  }, 25);\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/setFocus.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/srcsetPolyfill.js':
			/*!*****************************************************!*\
  !*** ./src/frontend/js/functions/srcsetPolyfill.js ***!
  \*****************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ srcsetPolyfill; }\n/* harmony export */ });\n/**\n * A srcset polyfill to get Masonry and ImagesLoaded working with Safari and Firefox.\n *\n * @param {HTMLElement} container Container HTML element.\n * @param {string}      ua        The user-agent string.\n * @since 5.0.2\n */\nfunction srcsetPolyfill() {\n  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var ua = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  if (!container) {\n    return false; // Exit if no container.\n  }\n\n  // Exit if useragent is Chrome, Safari or Windows.\n  if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') !== -1 || ua.indexOf('Firefox') > -1 || ua.indexOf('Windows') > -1) {\n    return false;\n  }\n\n  // Get all images.\n  var imgs = container.querySelectorAll('img[srcset]:not(.alm-loaded)');\n\n  // Loop images.\n  for (var i = 0; i < imgs.length; i++) {\n    var img = imgs[i];\n    img.classList.add('alm-loaded');\n    img.outerHTML = img.outerHTML;\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/srcsetPolyfill.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/functions/stripEmptyNodes.js':
			/*!******************************************************!*\
  !*** ./src/frontend/js/functions/stripEmptyNodes.js ***!
  \******************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/frontend/js/functions/constants.js");\n\n\n/**\n * Remove empty HTML nodes from array of nodes.\n * Filter out nodes by nodeName.\n *\n * @param {Array} nodes Array of HTML nodes\n * @return {Array} The filtered array of HTML nodes\n * @since 5.1.3\n */\nvar stripEmptyNodes = function stripEmptyNodes() {\n  var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return (nodes === null || nodes === void 0 ? void 0 : nodes.length) && nodes.filter(function (node) {\n    return _constants__WEBPACK_IMPORTED_MODULE_0__.EXCLUDED_NODES.indexOf(node.nodeName.toLowerCase()) === -1;\n  });\n};\n/* harmony default export */ __webpack_exports__["default"] = (stripEmptyNodes);\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/stripEmptyNodes.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/functions/windowResize.js':
			/*!***************************************************!*\
  !*** ./src/frontend/js/functions/windowResize.js ***!
  \***************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ triggerWindowResize; }\n/* harmony export */ });\n/**\n * Trigger a window resize browser function.\n *\n * @since 5.3.1\n */\nfunction triggerWindowResize() {\n  if (typeof Event === 'function') {\n    // Modern browsers.\n    window.dispatchEvent(new Event('resize'));\n  } else {\n    // Executed on old browsers and especially IE.\n    var resizeEvent = window.document.createEvent('UIEvents');\n    resizeEvent.initUIEvent('resize', true, false, window, 0);\n    window.dispatchEvent(resizeEvent);\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/functions/windowResize.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/modules/almDebug.js':
			/*!*********************************************!*\
  !*** ./src/frontend/js/modules/almDebug.js ***!
  \*********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ almDebug; }\n/* harmony export */ });\n/**\n * Display Ajax Load More debug results.\n *\n * @see https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_debug\n * @param {Object} alm ALM object.\n * @since 5.1.6\n */\nfunction almDebug(alm) {\n  if (alm && alm.debug) {\n    var obj = {\n      query: alm.debug,\n      localize: alm.localize\n    };\n    console.log(\'ALM Debug:\', obj); // eslint-disable-line no-console\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/almDebug.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/fade.js':
			/*!*****************************************!*\
  !*** ./src/frontend/js/modules/fade.js ***!
  \*****************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   almFadeIn: function() { return /* binding */ almFadeIn; },\n/* harmony export */   almFadeOut: function() { return /* binding */ almFadeOut; }\n/* harmony export */ });\n/**\n * Fade element in.\n *\n * @param {HTMLElement} element The HTML element to fade in.\n * @param {number}      speed   The transition speed.\n * @return {Promise}            The Promise object.\n */\nvar almFadeIn = function almFadeIn(element, speed) {\n  return new Promise(function (resolve) {\n    if (speed === 0) {\n      element.style.opacity = 1;\n      element.style.height = 'auto';\n      resolve(true);\n    } else {\n      speed = speed / 10;\n      var op = 0; // initial opacity\n      var timer = setInterval(function () {\n        if (op > 0.9) {\n          element.style.opacity = 1;\n          resolve(true);\n          clearInterval(timer);\n        }\n        element.style.opacity = op;\n        op += 0.1;\n      }, speed);\n      element.style.height = 'auto';\n    }\n  });\n};\n\n/**\n * Fade element out.\n *\n * @param {HTMLElement} element The HTML element to fade out.\n * @param {number}      speed   The transition speed.\n * @return {Promise}            The Promise object.\n */\nvar almFadeOut = function almFadeOut(element, speed) {\n  return new Promise(function (resolve) {\n    speed = speed / 10;\n    element.style.opacity = 0.5;\n    var fadeEffect = setInterval(function () {\n      if (element.style.opacity < 0.1) {\n        element.style.opacity = 0;\n        clearInterval(fadeEffect);\n        resolve(true);\n      } else {\n        element.style.opacity -= 0.1;\n      }\n    }, speed);\n  });\n};\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/fade.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/modules/filtering.js':
			/*!**********************************************!*\
  !*** ./src/frontend/js/modules/filtering.js ***!
  \**********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ almFilter; }\n/* harmony export */ });\n/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade */ \"./src/frontend/js/modules/fade.js\");\n/* harmony import */ var _tableofcontents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableofcontents */ \"./src/frontend/js/modules/tableofcontents.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n/**\n * Filter an Ajax Load More instance.\n *\n * @param {string} transition Transition type.\n * @param {number} speed      Transition speed.\n * @param {Object} data       Data object.\n * @param {string} type       Type of filter.\n * @since 2.6.1\n */\nfunction almFilter(transition) {\n  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;\n  var data = arguments.length > 2 ? arguments[2] : undefined;\n  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'filter';\n  if (data.target) {\n    // Target has been specified.\n    var alm = document.querySelectorAll('.ajax-load-more-wrap[data-id=\"' + data.target.toLowerCase() + '\"]');\n    if (alm) {\n      alm.forEach(function (element) {\n        almFilterTransition(transition, speed, data, type, element);\n      });\n    }\n  } else {\n    // Target not specified.\n    var _alm = document.querySelectorAll('.ajax-load-more-wrap');\n    if (_alm) {\n      _alm.forEach(function (element) {\n        almFilterTransition(transition, speed, data, type, element);\n      });\n    }\n  }\n  (0,_tableofcontents__WEBPACK_IMPORTED_MODULE_1__.clearTOC)(); // Clear table of contents if required\n}\n\n/**\n * Transition Ajax Load More\n *\n * @param {string}  transition Transition type.\n * @param {number}  speed      Transition speed.\n * @param {Object}  data       Data object.\n * @param {string}  type       Type of filter.\n * @param {Element} element    Target element.\n * @since 2.13.1\n */\nfunction almFilterTransition(transition, speed, data, type, element) {\n  if (transition === 'fade' || transition === 'masonry') {\n    // Fade, Masonry transition\n\n    switch (type) {\n      case 'filter':\n        element.classList.add('alm-is-filtering');\n        (0,_fade__WEBPACK_IMPORTED_MODULE_0__.almFadeOut)(element, speed);\n        break;\n    }\n\n    // Move to next function\n    setTimeout(function () {\n      almCompleteFilterTransition(speed, data, type, element);\n    }, speed);\n  } else {\n    // No transition\n    element.classList.add('alm-is-filtering');\n    almCompleteFilterTransition(speed, data, type, element);\n  }\n}\n\n/**\n * Complete the filter transition.\n *\n * @param {number}  speed   Transition speed.\n * @param {Object}  data    Data object.\n * @param {string}  type    Type of filter.\n * @param {Element} element Target element.\n * @since 3.3\n */\nfunction almCompleteFilterTransition(speed, data, type, element) {\n  var btnWrap = element.querySelector('.alm-btn-wrap'); // Get `.alm-btn-wrap` element\n  var listing = element.querySelectorAll('.alm-listing'); // Get `.alm-listing` element\n\n  if (!listing || !btnWrap) {\n    // Exit if elements doesn't exist.\n    return false;\n  }\n\n  // Loop over all .alm-listing divs and clear HTML.\n  _toConsumableArray(listing).forEach(function (element) {\n    // Is this a paging instance.\n    var paging = element.querySelector('.alm-paging-content');\n    if (paging) {\n      paging.innerHTML = '';\n    } else {\n      element.innerHTML = '';\n    }\n  });\n\n  // Get Load More button\n  var button = btnWrap.querySelector('.alm-load-more-btn');\n  if (button) {\n    button.classList.remove('done'); // Reset Button\n  }\n\n  // Clear paging navigation\n  var paging = btnWrap.querySelector('.alm-paging');\n  if (paging) {\n    paging.style.opacity = 0;\n  }\n\n  // Reset Preloaded Amount\n  data.preloadedAmount = 0;\n\n  // Dispatch Filters\n  almSetFilters(speed, data, type, element);\n}\n\n/**\n * Set filter parameters on .alm-listing element.\n *\n * @param {number}  speed   Transition speed.\n * @param {Object}  data    Data object.\n * @param {string}  type    Type of filter.\n * @param {Element} element Target element.\n * @since 2.6.1\n */\nfunction almSetFilters(speed, data, type, element) {\n  // Get `alm-listing` container.\n  var listing = element.querySelector('.alm-listing') || element.querySelector('.alm-comments');\n  if (!listing) {\n    return false;\n  }\n  switch (type) {\n    case 'filter':\n      // Update data attributes\n      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n          key = _Object$entries$_i[0],\n          value = _Object$entries$_i[1];\n        // Convert camelCase data atts back to dashes (-).\n        key = key.replace(/\\W+/g, '-').replace(/([a-z\\d])([A-Z])/g, '$1-$2').toLowerCase();\n        listing.setAttribute('data-' + key, value);\n      }\n      // Fade ALM back (Filters only)\n      (0,_fade__WEBPACK_IMPORTED_MODULE_0__.almFadeIn)(element, speed);\n      break;\n  }\n\n  // Re-initiate Ajax Load More.\n  var target = '';\n  if (data.target) {\n    // Target has been specified\n    target = document.querySelector('.ajax-load-more-wrap[data-id=\"' + data.target + '\"]');\n    if (target) {\n      window.almInit(target);\n    }\n  } else {\n    // Target not specified\n    target = document.querySelector('.ajax-load-more-wrap');\n    if (target) {\n      window.almInit(target);\n    }\n  }\n  switch (type) {\n    case 'filter':\n      // Filters Complete (not the add-on)\n      if (typeof almFilterComplete === 'function') {\n        // Standard Filtering\n        almFilterComplete();\n      }\n      break;\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/filtering.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/modules/insertScript.js':
			/*!*************************************************!*\
  !*** ./src/frontend/js/modules/insertScript.js ***!
  \*************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/**\n * Search nodes for <script/> tags and run scripts.\n * Scripts cannot run with appendChild or innerHTML so this is necessary to function.\n *\n * @since 5.0\n */\nvar insertScript = {\n  /**\n   * Initiate the script insertion.\n   *\n   * @param {Array} nodes The HTML nodes.\n   */\n  init: function init(nodes) {\n    var _this = this;\n    if (!(nodes !== null && nodes !== void 0 && nodes.length)) {\n      return false;\n    }\n    nodes.forEach(function (node) {\n      _this.check(node);\n    });\n  },\n  /**\n   * Parse HTML node from script.\n   *\n   * @param {HTMLElement} node The HTML node/element.\n   * @return {HTMLElement}     The modified HTML node.\n   */\n  check: function check(node) {\n    if (this.isScript(node) === true) {\n      node.parentNode.replaceChild(this.clone(node), node);\n    } else {\n      var i = 0;\n      var children = node.childNodes;\n      if (children === undefined) {\n        var parser = new DOMParser();\n        var data = parser.parseFromString(node, 'text/html');\n        if (data) {\n          children = data.body.childNodes;\n        }\n      }\n      while (i < children.length) {\n        this.replace(children[i++]);\n      }\n    }\n    return node;\n  },\n  /**\n   * Replace the script tag with a clone.\n   *\n   * @param {HTMLElement} node The HTML node/element.\n   * @return {HTMLElement}     The modified node.\n   */\n  replace: function replace(node) {\n    if (this.isScript(node) === true) {\n      node.parentNode.replaceChild(this.clone(node), node);\n    } else {\n      var i = 0;\n      var children = node.childNodes;\n      while (i < children.length) {\n        this.replace(children[i++]);\n      }\n    }\n    return node;\n  },\n  /**\n   * Clone the tag.\n   *\n   * @param {HTMLElement} node The HTML node/element.\n   * @return {HTMLElement}     The cloned node.\n   */\n  clone: function clone(node) {\n    var script = document.createElement('script');\n    script.text = node.innerHTML;\n    for (var i = node.attributes.length - 1; i >= 0; i--) {\n      script.setAttribute(node.attributes[i].name, node.attributes[i].value);\n    }\n    return script;\n  },\n  /**\n   * Is the node a script tag.\n   *\n   * @param {HTMLElement} node The html node.\n   */\n  isScript: function isScript(node) {\n    return node.tagName === 'SCRIPT';\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (insertScript);\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/insertScript.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/modules/lazyImages.js':
			/*!***********************************************!*\
  !*** ./src/frontend/js/modules/lazyImages.js ***!
  \***********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lazyImages: function() { return /* binding */ lazyImages; },\n/* harmony export */   lazyImagesReplace: function() { return /* binding */ lazyImagesReplace; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/**\n * Lazy load images helper.\n * When a plugin or 3rd party script has hooked into WP Post Thumbnails to provide a lazy load solution, images will not load via Ajax.\n * This helper provides a fix by grabbing the dataset value and making it the src.\n *\n * @param {Object} alm The Ajax Load More object.\n */\nfunction lazyImages(alm) {\n  var lazy_images = alm.lazy_images,\n    last_loaded = alm.last_loaded;\n  if (lazy_images && last_loaded !== null && last_loaded !== void 0 && last_loaded.length) {\n    last_loaded.forEach(function (item) {\n      lazyImagesReplace(item);\n    });\n  }\n}\n\n/**\n * Loop all images in container and replace the src.\n *\n * @param {HTMLElement} container The element HTML.\n */\nfunction lazyImagesReplace(container) {\n  var images = container.querySelectorAll(\'img\');\n  if (images) {\n    // Loop all images.\n    _toConsumableArray(images).forEach(function (image) {\n      if (image) {\n        replaceSrc(image);\n      }\n    });\n  }\n}\n\n/**\n * Replace the image src with the value from data-src attributes.\n *\n * @param {HTMLElement} img The HTML image element.\n */\nfunction replaceSrc(img) {\n  var _img$dataset, _img$dataset2, _img$dataset3, _img$dataset4;\n  if (!img) {\n    return;\n  }\n  if (img !== null && img !== void 0 && (_img$dataset = img.dataset) !== null && _img$dataset !== void 0 && _img$dataset.src) {\n    img.src = img.dataset.src;\n  }\n  if (img !== null && img !== void 0 && (_img$dataset2 = img.dataset) !== null && _img$dataset2 !== void 0 && _img$dataset2.srcset) {\n    img.srcset = img.dataset.srcset;\n  }\n  // Blocksy Pro.\n  // @see https://creativethemes.com/blocksy\n  if (img !== null && img !== void 0 && (_img$dataset3 = img.dataset) !== null && _img$dataset3 !== void 0 && _img$dataset3.ctLazy) {\n    img.src = img.dataset.ctLazy;\n  }\n  if (img !== null && img !== void 0 && (_img$dataset4 = img.dataset) !== null && _img$dataset4 !== void 0 && _img$dataset4.ctLazySet) {\n    img.srcset = img.dataset.ctLazySet;\n  }\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/lazyImages.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/loadImage.js':
			/*!**********************************************!*\
  !*** ./src/frontend/js/modules/loadImage.js ***!
  \**********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ loadImage; }\n/* harmony export */ });\n/* harmony import */ var _functions_srcsetPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/srcsetPolyfill */ "./src/frontend/js/functions/srcsetPolyfill.js");\n/* harmony import */ var _lazyImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazyImages */ "./src/frontend/js/modules/lazyImages.js");\n\n\nvar imagesLoaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");\n\n/**\n * Load the image with imagesLoaded\n *\n * @param {Element} container     The HTML container.\n * @param {Element} item          The element to load.\n * @param {string}  ua            Browser user-agent.\n * @param {string}  rel           The loading direction, next or prev.\n * @param {boolean} waitForImages Wait for images to load before loading next item.\n */\nfunction loadImage(container, item, ua) {\n  var rel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \'next\';\n  var waitForImages = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n  /**\n   * Append item to container.\n   */\n  function appendImage() {\n    if (rel === \'prev\') {\n      container.insertBefore(item, container.childNodes[0]);\n    } else {\n      container.appendChild(item);\n    }\n    (0,_lazyImages__WEBPACK_IMPORTED_MODULE_1__.lazyImagesReplace)(item); // Lazy load image fix.\n    (0,_functions_srcsetPolyfill__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ua); // Safari/Firefox polyfills.\n  }\n\n  return new Promise(function (resolve) {\n    item.style.transition = \'all 0.25s ease\'; // Add CSS transition to each item.\n\n    if (waitForImages) {\n      imagesLoaded(item, function () {\n        appendImage();\n        resolve(true); // Send Promise callback\n      });\n    } else {\n      appendImage();\n      resolve(true); // Send Promise callback\n    }\n  });\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/loadImage.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/loadItems.js':
			/*!**********************************************!*\
  !*** ./src/frontend/js/modules/loadItems.js ***!
  \**********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ loadItems; }\n/* harmony export */ });\n/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ "./src/frontend/js/modules/loadImage.js");\n/* harmony import */ var _functions_setFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/setFocus */ "./src/frontend/js/functions/setFocus.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n/**\n * Load all items after Ajax request.\n *\n * Note: The function is used with WooCommerce and Elementor add-ons.\n *\n * @param {HTMLElement} container     The HTML container.\n * @param {Array}       items         Array of items.\n * @param {Object}      alm           The ALM object.\n * @param {boolean}     waitForImages Wait for images to load before loading next item.\n */\nfunction loadItems(container, items, alm) {\n  var waitForImages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n  return new Promise(function (resolve) {\n    var _alm$rel = alm.rel,\n      rel = _alm$rel === void 0 ? \'next\' : _alm$rel;\n    var total = items.length;\n    var index = 0;\n    var count = 1;\n\n    // Reverse items array if rel is \'prev\'.\n    items = rel === \'prev\' ? items.reverse() : items;\n    function loadItem() {\n      if (count <= total) {\n        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n          return _regeneratorRuntime().wrap(function _callee$(_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                items[index].style.opacity = 0;\n                _context.next = 3;\n                return (0,_loadImage__WEBPACK_IMPORTED_MODULE_0__["default"])(container, items[index], alm.ua, rel, waitForImages);\n              case 3:\n                count++;\n                index++;\n                loadItem();\n              case 6:\n              case "end":\n                return _context.stop();\n            }\n          }, _callee);\n        }))()["catch"](function () {\n          console.warn(\'There was an error loading the items.\');\n        });\n      } else {\n        // Delay for effect only\n        setTimeout(function () {\n          items.map(function (item) {\n            item.style.opacity = 1;\n            return item;\n          });\n          if (items[0]) {\n            var focusItem = rel === \'prev\' ? items[items.length - 1] : items[0]; // Get the item to focus.\n            (0,_functions_setFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(alm, focusItem, null, false); // Set the focus.\n          }\n        }, 25);\n        resolve(true);\n      }\n    }\n    loadItem();\n  });\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/loadItems.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/loadPrevious.js':
			/*!*************************************************!*\
  !*** ./src/frontend/js/modules/loadPrevious.js ***!
  \*************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLoadPreviousButton: function() { return /* binding */ createLoadPreviousButton; }\n/* harmony export */ });\n/**\n * Create a Load Previous button.\n *\n * @param {Object} alm       The Ajax Load More object.\n * @param {Object} container The container element.\n * @param {number} page      The previous page number.\n * @param {string} url       The previous page url.\n * @param {string} label     The label for the button.\n * @since 5.5.0\n */\nfunction createLoadPreviousButton(alm, container) {\n  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  var url = arguments.length > 3 ? arguments[3] : undefined;\n  var label = arguments.length > 4 ? arguments[4] : undefined;\n  if (!label) {\n    return;\n  }\n\n  // Create wrapper.\n  var btnWrap = document.createElement('div');\n  btnWrap.classList.add('alm-btn-wrap--prev');\n\n  // Create button.\n  var button = document.createElement('a');\n  button.href = url;\n  button.innerHTML = label;\n  button.setAttribute('rel', 'prev');\n  button.dataset.page = page;\n  button.dataset.url = url;\n  button.setAttribute('class', \"alm-load-more-btn alm-load-more-btn--prev \".concat(alm.loading_style));\n\n  // Click event.\n  button.addEventListener('click', function (e) {\n    alm.AjaxLoadMore.prevClick(e);\n  });\n\n  // Set alm previous button to this button.\n  alm.AjaxLoadMore.setPreviousButton(button);\n\n  // Append button to wrap.\n  btnWrap.appendChild(button);\n\n  // Get parent element.\n  var parent = container.parentNode;\n\n  // Append button before container.\n  parent.insertBefore(btnWrap, container);\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/loadPrevious.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/modules/masonry.js':
			/*!********************************************!*\
  !*** ./src/frontend/js/modules/masonry.js ***!
  \********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   almMasonry: function() { return /* binding */ almMasonry; },\n/* harmony export */   almMasonryConfig: function() { return /* binding */ almMasonryConfig; }\n/* harmony export */ });\n/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade */ "./src/frontend/js/modules/fade.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nvar imagesLoaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");\n\n/**\n * Function to trigger built-in Ajax Load More Masonry.\n *\n * @param {Object}  alm       ALM object.\n * @param {boolean} init      Initial run true or false.\n * @param {boolean} filtering Is this a filtering event.\n * @since 3.1\n */\nfunction almMasonry(alm, init, filtering) {\n  if (!alm.masonry) {\n    console.warn(\'Ajax Load More: Unable to locate Masonry settings.\');\n  }\n  var container = alm.listing,\n    last_loaded = alm.last_loaded,\n    speed = alm.speed;\n  return new Promise(function (resolve) {\n    var _alm$masonry;\n    var selector = alm.masonry.selector;\n    var animation = alm.masonry.animation;\n    var horizontalOrder = (alm === null || alm === void 0 || (_alm$masonry = alm.masonry) === null || _alm$masonry === void 0 ? void 0 : _alm$masonry.horizontalorder) === \'true\' ? true : false;\n    var masonry_init = alm.masonry.init;\n    var columnWidth = alm.masonry.columnwidth;\n    var duration = (speed + 100) / 1000 + \'s\'; // Add 100 for some delay\n    var hidden = \'scale(0.5)\';\n    var visible = \'scale(1)\';\n    if (animation === \'zoom-out\') {\n      hidden = \'translateY(-20px) scale(1.25)\';\n      visible = \'translateY(0) scale(1)\';\n    }\n    if (animation === \'slide-up\') {\n      hidden = \'translateY(50px)\';\n      visible = \'translateY(0)\';\n    }\n    if (animation === \'slide-down\') {\n      hidden = \'translateY(-50px)\';\n      visible = \'translateY(0)\';\n    }\n    if (animation === \'none\') {\n      hidden = \'translateY(0)\';\n      visible = \'translateY(0)\';\n    }\n\n    // columnWidth\n    if (columnWidth) {\n      if (!isNaN(columnWidth)) {\n        columnWidth = parseInt(columnWidth); // Check if number.\n      }\n    } else {\n      columnWidth = selector; // No columnWidth, use the selector\n    }\n\n    if (!filtering) {\n      // First Run.\n      if (masonry_init && init) {\n        imagesLoaded(container, function () {\n          var _window;\n          var defaults = {\n            itemSelector: selector,\n            transitionDuration: duration,\n            columnWidth: columnWidth,\n            // eslint-disable-line\n            horizontalOrder: horizontalOrder,\n            // eslint-disable-line\n            hiddenStyle: {\n              transform: hidden,\n              opacity: 0\n            },\n            visibleStyle: {\n              transform: visible,\n              opacity: 1\n            }\n          };\n\n          // Get custom Masonry options (https://masonry.desandro.com/options.html).\n          var alm_masonry_vars = (_window = window) === null || _window === void 0 ? void 0 : _window.alm_masonry_vars;\n          if (alm_masonry_vars) {\n            Object.keys(alm_masonry_vars).forEach(function (key) {\n              // Loop object\tto create key:prop\n              defaults[key] = alm_masonry_vars[key];\n            });\n          }\n\n          // Init Masonry, delay to allow time for items to be added to the page.\n          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n            return _regeneratorRuntime().wrap(function _callee$(_context) {\n              while (1) switch (_context.prev = _context.next) {\n                case 0:\n                  alm.msnry = new Masonry(container, defaults);\n                  _context.next = 3;\n                  return (0,_fade__WEBPACK_IMPORTED_MODULE_0__.almFadeIn)(container.parentNode, 175);\n                case 3:\n                  resolve(true);\n                case 4:\n                case "end":\n                  return _context.stop();\n              }\n            }, _callee);\n          })), 25);\n        });\n      } else {\n        // Standard / Append content.\n        // eslint-disable-next-line no-lonely-if\n        if (last_loaded) {\n          // ImagesLoaded & appended.\n          imagesLoaded(container, function () {\n            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n              return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n                while (1) switch (_context2.prev = _context2.next) {\n                  case 0:\n                    alm.msnry.appended(last_loaded);\n                    resolve(true);\n                  case 2:\n                  case "end":\n                    return _context2.stop();\n                }\n              }, _callee2);\n            })), 25);\n          });\n        }\n      }\n    } else {\n      // Reset instance.\n      container.parentNode.style.opacity = 0;\n      almMasonry(alm, true, false);\n      resolve(true);\n    }\n  });\n}\n\n/**\n * Set up initial Masonry Configuration.\n *\n * @param {Object} alm ALM Object.\n * @return {Object}    Configuration object.\n */\nfunction almMasonryConfig(alm) {\n  alm.masonry = {};\n  alm.masonry.init = true;\n  if (alm.msnry) {\n    // destroy masonry if it currently exists.\n    alm.msnry.destroy();\n  } else {\n    alm.msnry = \'\';\n  }\n  var masonry_config = JSON.parse(alm.listing.dataset.masonryConfig);\n  if (masonry_config) {\n    alm.masonry.selector = masonry_config.selector;\n    alm.masonry.columnwidth = masonry_config.columnwidth;\n    alm.masonry.animation = masonry_config.animation === \'\' ? \'standard\' : masonry_config.animation;\n    alm.masonry.horizontalorder = masonry_config.horizontalorder === \'\' ? \'true\' : masonry_config.horizontalorder;\n    alm.images_loaded = true;\n    alm.transition_delay = 0;\n  } else {\n    console.warn(\'Ajax Load More: Unable to locate Masonry configuration settings.\');\n  }\n  return alm;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/masonry.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/placeholder.js':
			/*!************************************************!*\
  !*** ./src/frontend/js/modules/placeholder.js ***!
  \************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ placeholder; }\n/* harmony export */ });\n/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade */ "./src/frontend/js/modules/fade.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n/**\n * Show placeholder div.\n *\n * @param {string} type The direction.\n * @param {Object} alm  The ALM object.\n */\nfunction placeholder() {\n  return _placeholder.apply(this, arguments);\n}\nfunction _placeholder() {\n  _placeholder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    var type,\n      alm,\n      placeholder,\n      addons,\n      rel,\n      _args = arguments;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          type = _args.length > 0 && _args[0] !== undefined ? _args[0] : \'show\';\n          alm = _args.length > 1 ? _args[1] : undefined;\n          placeholder = alm.placeholder, addons = alm.addons, rel = alm.rel;\n          if (!(!placeholder || addons.paging || rel === \'prev\')) {\n            _context.next = 5;\n            break;\n          }\n          return _context.abrupt("return", false);\n        case 5:\n          _context.t0 = type;\n          _context.next = _context.t0 === \'hide\' ? 8 : 12;\n          break;\n        case 8:\n          _context.next = 10;\n          return (0,_fade__WEBPACK_IMPORTED_MODULE_0__.almFadeOut)(placeholder, 175);\n        case 10:\n          setTimeout(function () {\n            placeholder.style.display = \'none\';\n          }, 75);\n          return _context.abrupt("break", 15);\n        case 12:\n          placeholder.style.display = \'block\';\n          (0,_fade__WEBPACK_IMPORTED_MODULE_0__.almFadeIn)(placeholder, 175);\n          return _context.abrupt("break", 15);\n        case 15:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _placeholder.apply(this, arguments);\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/placeholder.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/resultsText.js':
			/*!************************************************!*\
  !*** ./src/frontend/js/modules/resultsText.js ***!
  \************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   almGetResultsText: function() { return /* binding */ almGetResultsText; },\n/* harmony export */   almInitResultsText: function() { return /* binding */ almInitResultsText; },\n/* harmony export */   almResultsText: function() { return /* binding */ almResultsText; }\n/* harmony export */ });\n/* harmony import */ var _functions_getTotals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/getTotals */ "./src/frontend/js/functions/getTotals.js");\n\n\n/**\n * Set the results text if required.\n *\n * @param {Object} alm  ALM object.\n * @param {string} type Type of results.\n * @since 5.1\n */\nfunction almResultsText(alm) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'standard\';\n  if (!alm.resultsText || alm.nested === \'true\') {\n    return false;\n  }\n  var resultsType = type === \'nextpage\' || type === \'woocommerce\' ? type : \'standard\';\n  almGetResultsText(alm, resultsType);\n}\n\n/**\n * Get values for showing results text.\n *\n * @param {Object} alm  ALM object.\n * @param {string} type Type of results.\n * @since 4.1\n */\nfunction almGetResultsText(alm) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'standard\';\n  if (!alm.resultsText || !alm.localize || alm.nested === \'true\') {\n    return false;\n  }\n  var page = 0;\n  var pages = 0;\n  var post_count = 0;\n  var total_posts = 0;\n  var posts_per_page = alm.orginal_posts_per_page;\n  switch (type) {\n    // Nextpage\n    case \'nextpage\':\n      page = parseInt(alm.localize.page);\n      post_count = page;\n      pages = parseInt(alm.localize.total_posts);\n      total_posts = parseInt(pages);\n      almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, posts_per_page);\n      break;\n\n    // WooCommerce\n    case \'woocommerce\':\n      // Don\'t do anything\n      break;\n    default:\n      page = (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_0__["default"])(\'page\', alm.id);\n      pages = (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_0__["default"])(\'pages\', alm.id);\n      post_count = (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_0__["default"])(\'post_count\', alm.id);\n      total_posts = (0,_functions_getTotals__WEBPACK_IMPORTED_MODULE_0__["default"])(\'total_posts\', alm.id);\n      almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, posts_per_page);\n  }\n}\n\n/**\n * Display `Showing {x} of {y} pages` text.\n *\n * @param {Object} alm  ALM object.\n * @param {string} type Type of results.\n * @since 4.1\n */\nfunction almInitResultsText(alm) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \'standard\';\n  if (!alm.resultsText || !alm.localize || alm.nested === \'true\') {\n    return false;\n  }\n  var page = 0;\n  var pages = Math.ceil(alm.localize.total_posts / alm.orginal_posts_per_page);\n  var post_count = parseInt(alm.localize.post_count);\n  var total_posts = parseInt(alm.localize.total_posts);\n  switch (type) {\n    case \'nextpage\':\n      // Nextpage\n      page = alm.addons.nextpage_startpage;\n      post_count = page;\n      pages = total_posts;\n      almRenderResultsText(alm.resultsText, page, total_posts, post_count, total_posts, alm.posts_per_page);\n      break;\n    case \'preloaded\':\n      // Preloaded\n      page = alm.addons.paging && alm.addons.seo ? alm.start_page + 1 : parseInt(alm.page) + 1;\n      almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, alm.posts_per_page);\n      break;\n    case \'woocommerce\':\n      // WooCommerce\n      // Don\'t do anything\n      break;\n  }\n}\n\n/**\n * Render `Showing {x} of {y} results` text.\n *\n * @param {Element} el          The results text HTML element.\n * @param {string}  page        The current page number.\n * @param {string}  pages       The total pages.\n * @param {string}  post_count  Total posts displayed.\n * @param {string}  total_posts Total amount of posts in query.\n * @param {string}  per_page    Total amount of posts per page.\n * @since 4.1\n */\nvar almRenderResultsText = function almRenderResultsText(el, page, pages, post_count, total_posts, per_page) {\n  el.forEach(function (result) {\n    pages = parseInt(pages);\n    var text = pages > 0 ? alm_localize.results_text : alm_localize.no_results_text;\n\n    // Paging add-on.\n    // Start and End values for posts in view.\n    var start = page * per_page - per_page + 1;\n    var end_val = page * per_page;\n    var end = end_val <= total_posts ? end_val : total_posts;\n    if (pages > 0) {\n      text = text.replace(\'{num}\', "<span class=\\"alm-results-num\\">".concat(page, "</span>")); // Deprecated\n      text = text.replace(\'{page}\', "<span class=\\"alm-results-page\\">".concat(page, "</span>"));\n      text = text.replace(\'{start}\', "<span class=\\"alm-results-start\\">".concat(start, "</span>"));\n      text = text.replace(\'{end}\', "<span class=\\"alm-results-start\\">".concat(end, "</span>"));\n      text = text.replace(\'{total}\', "<span class=\\"alm-results-total\\">".concat(pages, "</span>")); // Deprecated\n      text = text.replace(\'{pages}\', "<span class=\\"alm-results-pages\\">".concat(pages, "</span>"));\n      text = text.replace(\'{post_count}\', "<span class=\\"alm-results-post_count\\">".concat(post_count, "</span>"));\n      text = text.replace(\'{total_posts}\', "<span class=\\"alm-results-total_posts\\">".concat(total_posts, "</span>"));\n      result.innerHTML = text;\n    } else {\n      result.innerHTML = text;\n    }\n  });\n};\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/resultsText.js?'
				);

				/***/
			},

		/***/ './src/frontend/js/modules/setLocalizedVars.js':
			/*!*****************************************************!*\
  !*** ./src/frontend/js/modules/setLocalizedVars.js ***!
  \*****************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setLocalizedVars; }\n/* harmony export */ });\n/* harmony import */ var _resultsText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultsText */ \"./src/frontend/js/modules/resultsText.js\");\n\n\n/**\n * Set localized variables\n *\n * @param {Object} alm ALM object\n * @since 4.1\n */\nfunction setLocalizedVars(alm) {\n  var addons = alm.addons;\n  return new Promise(function (resolve) {\n    var type = 'standard';\n    if (addons.nextpage) {\n      // Nextpage\n      type = 'nextpage';\n      if (addons.paging) {\n        alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);\n      } else {\n        alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + parseInt(addons.nextpage_startpage) + 1);\n      }\n    } else if (addons.woocommerce) {\n      // WooCommerce\n      type = 'woocommerce';\n      alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);\n    } else {\n      // Standard ALM.\n      var page = parseInt(alm.page) + 1 + (addons.preloaded && !addons.paging ? 1 : 0); // Add 1 page for preloaded.\n      alm.AjaxLoadMore.setLocalizedVar('page', parseInt(page));\n      var pages = Math.ceil(alm.totalposts / alm.orginal_posts_per_page);\n      alm.AjaxLoadMore.setLocalizedVar('pages', parseInt(pages));\n    }\n\n    // Total Posts `total_posts`.\n    // Only update if !preloaded && !nextpage && !woocommerce\n    if (addons.preloaded !== 'true' && !addons.nextpage && !addons.woocommerce) {\n      alm.AjaxLoadMore.setLocalizedVar('total_posts', alm.totalposts);\n    }\n\n    // Viewing count.\n    alm.AjaxLoadMore.setLocalizedVar('post_count', getPostCount(alm));\n\n    // Set Results Text (if required).\n    _resultsText__WEBPACK_IMPORTED_MODULE_0__.almResultsText(alm, type);\n    resolve(true);\n  });\n}\n\n/**\n * Get total post_count.\n *\n * @param {Object} alm ALM object.\n * @return {number}    Total post count.\n */\nfunction getPostCount(alm) {\n  var postcount = alm.postcount,\n    addons = alm.addons,\n    start_page = alm.start_page;\n  var preloaded_amount = addons.preloaded_amount;\n\n  // Construct post count.\n  var count = parseInt(postcount) + parseInt(preloaded_amount);\n  count = start_page > 1 ? count - parseInt(preloaded_amount) : count; // SEO\n  count = addons.filters_startpage > 1 ? count - parseInt(preloaded_amount) : count; // Filters\n  count = addons.single_post ? count + 1 : count; // Single Posts\n  count = addons.nextpage ? count + 1 : count; // Next Page\n\n  return count;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/setLocalizedVars.js?"
				);

				/***/
			},

		/***/ './src/frontend/js/modules/tableofcontents.js':
			/*!****************************************************!*\
  !*** ./src/frontend/js/modules/tableofcontents.js ***!
  \****************************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTOC: function() { return /* binding */ clearTOC; },\n/* harmony export */   tableOfContents: function() { return /* binding */ tableOfContents; }\n/* harmony export */ });\n/* harmony import */ var _ajax_load_more__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ajax-load-more */ "./src/frontend/js/ajax-load-more.js");\n/* harmony import */ var _functions_setFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/setFocus */ "./src/frontend/js/functions/setFocus.js");\n\n\n\n/**\n * Create a numbered table of contents navigation.\n *\n * @param {Object}  alm            The alm object.\n * @param {boolean} init           Init boolean.\n * @param {boolean} from_preloaded Preloaded boolean.\n * @since 5.2\n */\nfunction tableOfContents(alm) {\n  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var from_preloaded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var totalPosts = alm.localize && alm.localize.post_count ? parseInt(alm.localize.post_count) : 0;\n\n  // eslint-disable-next-line eqeqeq\n  if (totalPosts == 0 && !alm.addons.single_post) {\n    // Exit if zero posts and not single posts\n    return false;\n  }\n  if (alm && alm.tableofcontents && alm.transition !== \'masonry\') {\n    var offset = alm.tableofcontents.dataset.offset ? parseInt(alm.tableofcontents.dataset.offset) : 30;\n    var startPage = alm.start_page ? parseInt(alm.start_page) : 0;\n    var filterStartPage = alm.addons.filters_startpage ? parseInt(alm.addons.filters_startpage) : 0;\n    var nextpageStartPage = alm.addons.nextpage_startpage ? parseInt(alm.addons.nextpage_startpage) : 0;\n    var page = parseInt(alm.page);\n    var preloaded = alm.addons.preloaded ? true : false;\n\n    // Exit if Paging or Next Page\n    if (alm.addons.paging || alm.addons.nextpage) {\n      return false;\n    }\n\n    // Init.\n    if (init) {\n      setTimeout(function () {\n        // Paged results\n        if (alm.addons.seo && startPage > 1 || alm.addons.filters && filterStartPage > 1 || alm.addons.nextpage && nextpageStartPage > 1) {\n          // SEO\n          if (alm.addons.seo && startPage > 1) {\n            for (var i = 0; i < startPage; i++) {\n              createTOCButton(alm, i, offset);\n            }\n          }\n          // Filters\n          if (alm.addons.filters && filterStartPage > 1) {\n            for (var _i = 0; _i < filterStartPage; _i++) {\n              createTOCButton(alm, _i, offset);\n            }\n          }\n          // Nextpage\n          if (alm.addons.nextpage && nextpageStartPage > 1) {\n            for (var _i2 = 0; _i2 < nextpageStartPage; _i2++) {\n              createTOCButton(alm, _i2, offset);\n            }\n          }\n        } else {\n          if (!from_preloaded && preloaded) {\n            page = page + 1;\n          }\n          createTOCButton(alm, page, offset);\n        }\n      }, 100);\n    } else {\n      // Preloaded\n      if (preloaded) {\n        if (alm.addons.seo && startPage > 0) {\n          page = page;\n        } else if (alm.addons.filters && filterStartPage > 0) {\n          page = page;\n        } else {\n          page = page + 1;\n        }\n      }\n      createTOCButton(alm, page, offset);\n    }\n  }\n}\n\n/**\n * Clear table of contents.\n */\nfunction clearTOC() {\n  var toc = document.querySelector(\'.alm-toc\');\n  if (toc) {\n    toc.innerHTML = \'\';\n  }\n}\n\n/**\n * Create Standard Page Button.\n *\n * @param {Object} alm    The alm object.\n * @param {string} page   Current page.\n * @param {number} offset The page offset.\n */\nfunction createTOCButton(alm, page, offset) {\n  if (!alm.tableofcontents) {\n    return false;\n  }\n  page = parseInt(page);\n  var posts_per_page = parseInt(alm.posts_per_page);\n\n  // Create button.\n  var button = document.createElement(\'button\');\n  button.type = \'button\';\n  button.innerHTML = getTOCLabel(alm, page + 1);\n  button.dataset.page = alm.addons.single_post_target && alm.init ? page - 1 : page + 1;\n  button.dataset.target = (page + 1) * posts_per_page - posts_per_page + 1;\n\n  // Add button to TOC.\n  alm.tableofcontents.appendChild(button);\n\n  // Click event listener.\n  button.addEventListener(\'click\', function () {\n    var current = this.dataset.page;\n    var target = this.dataset.target;\n\n    // Get all listing children.\n    var children = alm.listing.children;\n\n    // Find element.\n    var element = children[target - 1];\n\n    // Next Page.\n    if (alm.addons.nextpage) {\n      element = document.querySelector(".alm-nextpage[data-page=\\"".concat(current, "\\"]"));\n    }\n    // Single Posts.\n    if (alm.addons.single_post_target) {\n      element = document.querySelector(".alm-single-post[data-page=\\"".concat(current, "\\"]"));\n    }\n    if (!element) {\n      return; // Exit if no target.\n    }\n\n    var top = typeof _ajax_load_more__WEBPACK_IMPORTED_MODULE_0__.getOffset === \'function\' ? (0,_ajax_load_more__WEBPACK_IMPORTED_MODULE_0__.getOffset)(element).top : element.offsetTop;\n    (0,_ajax_load_more__WEBPACK_IMPORTED_MODULE_0__.almScroll)(top - offset);\n    setTimeout(function () {\n      (0,_functions_setFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(alm, element, target, false);\n    }, 500);\n  });\n}\n\n/**\n * Get Button Label.\n *\n * @param {Object} alm  The alm object.\n * @param {string} page The current page.\n * @return {string}     The Label.\n */\nfunction getTOCLabel(alm, page) {\n  var label = page;\n\n  // Single Posts\n  if (alm.addons.single_post) {\n    var thePage = page - 1;\n    var element;\n    if (alm.addons.single_post_target) {\n      // Special functionality for Single Post with a loading target type\n      if (alm.init) {\n        thePage = thePage;\n      } else {\n        thePage = thePage + 1;\n      }\n      var posts = document.querySelectorAll(".alm-single-post");\n      if (posts) {\n        element = posts[thePage];\n      }\n    } else {\n      element = document.querySelector(".alm-single-post[data-page=".concat(page - 1, "]"));\n    }\n    label = element ? element.dataset.title : label;\n  }\n\n  // Dynamic function name.\n  var funcName = "almTOCLabel_".concat(alm.id);\n  if (typeof window[funcName] === \'function\') {\n    label = window[funcName](page, label);\n  }\n  return label;\n}\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/js/modules/tableofcontents.js?'
				);

				/***/
			},

		/***/ './node_modules/call-bind/callBound.js':
			/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar callBind = __webpack_require__(/*! ./ */ \"./node_modules/call-bind/index.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/call-bind/callBound.js?"
				);

				/***/
			},

		/***/ './node_modules/call-bind/index.js':
			/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $apply = GetIntrinsic('%Function.prototype.apply%');\nvar $call = GetIntrinsic('%Function.prototype.call%');\nvar $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\nvar $max = GetIntrinsic('%Math.max%');\n\nif ($defineProperty) {\n\ttry {\n\t\t$defineProperty({}, 'a', { value: 1 });\n\t} catch (e) {\n\t\t// IE 8 has a broken defineProperty\n\t\t$defineProperty = null;\n\t}\n}\n\nmodule.exports = function callBind(originalFunction) {\n\tvar func = $reflectApply(bind, $call, arguments);\n\tif ($gOPD && $defineProperty) {\n\t\tvar desc = $gOPD(func, 'length');\n\t\tif (desc.configurable) {\n\t\t\t// original length, plus the receiver, minus any additional arguments (after the receiver)\n\t\t\t$defineProperty(\n\t\t\t\tfunc,\n\t\t\t\t'length',\n\t\t\t\t{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }\n\t\t\t);\n\t\t}\n\t}\n\treturn func;\n};\n\nvar applyBind = function applyBind() {\n\treturn $reflectApply(bind, $apply, arguments);\n};\n\nif ($defineProperty) {\n\t$defineProperty(module.exports, 'apply', { value: applyBind });\n} else {\n\tmodule.exports.apply = applyBind;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/call-bind/index.js?"
				);

				/***/
			},

		/***/ './node_modules/crypto-js/core.js':
			/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
			/***/ function (module, exports, __webpack_require__) {
				eval(
					";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory();\n\t}\n\telse {}\n}(this, function () {\n\n\t/*globals window, global, require*/\n\n\t/**\n\t * CryptoJS core components.\n\t */\n\tvar CryptoJS = CryptoJS || (function (Math, undefined) {\n\n\t    var crypto;\n\n\t    // Native crypto from window (Browser)\n\t    if (typeof window !== 'undefined' && window.crypto) {\n\t        crypto = window.crypto;\n\t    }\n\n\t    // Native crypto in web worker (Browser)\n\t    if (typeof self !== 'undefined' && self.crypto) {\n\t        crypto = self.crypto;\n\t    }\n\n\t    // Native crypto from worker\n\t    if (typeof globalThis !== 'undefined' && globalThis.crypto) {\n\t        crypto = globalThis.crypto;\n\t    }\n\n\t    // Native (experimental IE 11) crypto from window (Browser)\n\t    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {\n\t        crypto = window.msCrypto;\n\t    }\n\n\t    // Native crypto from global (NodeJS)\n\t    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {\n\t        crypto = __webpack_require__.g.crypto;\n\t    }\n\n\t    // Native crypto import via require (NodeJS)\n\t    if (!crypto && \"function\" === 'function') {\n\t        try {\n\t            crypto = __webpack_require__(/*! crypto */ \"?9157\");\n\t        } catch (err) {}\n\t    }\n\n\t    /*\n\t     * Cryptographically secure pseudorandom number generator\n\t     *\n\t     * As Math.random() is cryptographically not safe to use\n\t     */\n\t    var cryptoSecureRandomInt = function () {\n\t        if (crypto) {\n\t            // Use getRandomValues method (Browser)\n\t            if (typeof crypto.getRandomValues === 'function') {\n\t                try {\n\t                    return crypto.getRandomValues(new Uint32Array(1))[0];\n\t                } catch (err) {}\n\t            }\n\n\t            // Use randomBytes method (NodeJS)\n\t            if (typeof crypto.randomBytes === 'function') {\n\t                try {\n\t                    return crypto.randomBytes(4).readInt32LE();\n\t                } catch (err) {}\n\t            }\n\t        }\n\n\t        throw new Error('Native crypto module could not be used to get secure random number.');\n\t    };\n\n\t    /*\n\t     * Local polyfill of Object.create\n\n\t     */\n\t    var create = Object.create || (function () {\n\t        function F() {}\n\n\t        return function (obj) {\n\t            var subtype;\n\n\t            F.prototype = obj;\n\n\t            subtype = new F();\n\n\t            F.prototype = null;\n\n\t            return subtype;\n\t        };\n\t    }());\n\n\t    /**\n\t     * CryptoJS namespace.\n\t     */\n\t    var C = {};\n\n\t    /**\n\t     * Library namespace.\n\t     */\n\t    var C_lib = C.lib = {};\n\n\t    /**\n\t     * Base object for prototypal inheritance.\n\t     */\n\t    var Base = C_lib.Base = (function () {\n\n\n\t        return {\n\t            /**\n\t             * Creates a new object that inherits from this object.\n\t             *\n\t             * @param {Object} overrides Properties to copy into the new object.\n\t             *\n\t             * @return {Object} The new object.\n\t             *\n\t             * @static\n\t             *\n\t             * @example\n\t             *\n\t             *     var MyType = CryptoJS.lib.Base.extend({\n\t             *         field: 'value',\n\t             *\n\t             *         method: function () {\n\t             *         }\n\t             *     });\n\t             */\n\t            extend: function (overrides) {\n\t                // Spawn\n\t                var subtype = create(this);\n\n\t                // Augment\n\t                if (overrides) {\n\t                    subtype.mixIn(overrides);\n\t                }\n\n\t                // Create default initializer\n\t                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {\n\t                    subtype.init = function () {\n\t                        subtype.$super.init.apply(this, arguments);\n\t                    };\n\t                }\n\n\t                // Initializer's prototype is the subtype object\n\t                subtype.init.prototype = subtype;\n\n\t                // Reference supertype\n\t                subtype.$super = this;\n\n\t                return subtype;\n\t            },\n\n\t            /**\n\t             * Extends this object and runs the init method.\n\t             * Arguments to create() will be passed to init().\n\t             *\n\t             * @return {Object} The new object.\n\t             *\n\t             * @static\n\t             *\n\t             * @example\n\t             *\n\t             *     var instance = MyType.create();\n\t             */\n\t            create: function () {\n\t                var instance = this.extend();\n\t                instance.init.apply(instance, arguments);\n\n\t                return instance;\n\t            },\n\n\t            /**\n\t             * Initializes a newly created object.\n\t             * Override this method to add some logic when your objects are created.\n\t             *\n\t             * @example\n\t             *\n\t             *     var MyType = CryptoJS.lib.Base.extend({\n\t             *         init: function () {\n\t             *             // ...\n\t             *         }\n\t             *     });\n\t             */\n\t            init: function () {\n\t            },\n\n\t            /**\n\t             * Copies properties into this object.\n\t             *\n\t             * @param {Object} properties The properties to mix in.\n\t             *\n\t             * @example\n\t             *\n\t             *     MyType.mixIn({\n\t             *         field: 'value'\n\t             *     });\n\t             */\n\t            mixIn: function (properties) {\n\t                for (var propertyName in properties) {\n\t                    if (properties.hasOwnProperty(propertyName)) {\n\t                        this[propertyName] = properties[propertyName];\n\t                    }\n\t                }\n\n\t                // IE won't copy toString using the loop above\n\t                if (properties.hasOwnProperty('toString')) {\n\t                    this.toString = properties.toString;\n\t                }\n\t            },\n\n\t            /**\n\t             * Creates a copy of this object.\n\t             *\n\t             * @return {Object} The clone.\n\t             *\n\t             * @example\n\t             *\n\t             *     var clone = instance.clone();\n\t             */\n\t            clone: function () {\n\t                return this.init.prototype.extend(this);\n\t            }\n\t        };\n\t    }());\n\n\t    /**\n\t     * An array of 32-bit words.\n\t     *\n\t     * @property {Array} words The array of 32-bit words.\n\t     * @property {number} sigBytes The number of significant bytes in this word array.\n\t     */\n\t    var WordArray = C_lib.WordArray = Base.extend({\n\t        /**\n\t         * Initializes a newly created word array.\n\t         *\n\t         * @param {Array} words (Optional) An array of 32-bit words.\n\t         * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.lib.WordArray.create();\n\t         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);\n\t         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);\n\t         */\n\t        init: function (words, sigBytes) {\n\t            words = this.words = words || [];\n\n\t            if (sigBytes != undefined) {\n\t                this.sigBytes = sigBytes;\n\t            } else {\n\t                this.sigBytes = words.length * 4;\n\t            }\n\t        },\n\n\t        /**\n\t         * Converts this word array to a string.\n\t         *\n\t         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex\n\t         *\n\t         * @return {string} The stringified word array.\n\t         *\n\t         * @example\n\t         *\n\t         *     var string = wordArray + '';\n\t         *     var string = wordArray.toString();\n\t         *     var string = wordArray.toString(CryptoJS.enc.Utf8);\n\t         */\n\t        toString: function (encoder) {\n\t            return (encoder || Hex).stringify(this);\n\t        },\n\n\t        /**\n\t         * Concatenates a word array to this word array.\n\t         *\n\t         * @param {WordArray} wordArray The word array to append.\n\t         *\n\t         * @return {WordArray} This word array.\n\t         *\n\t         * @example\n\t         *\n\t         *     wordArray1.concat(wordArray2);\n\t         */\n\t        concat: function (wordArray) {\n\t            // Shortcuts\n\t            var thisWords = this.words;\n\t            var thatWords = wordArray.words;\n\t            var thisSigBytes = this.sigBytes;\n\t            var thatSigBytes = wordArray.sigBytes;\n\n\t            // Clamp excess bits\n\t            this.clamp();\n\n\t            // Concat\n\t            if (thisSigBytes % 4) {\n\t                // Copy one byte at a time\n\t                for (var i = 0; i < thatSigBytes; i++) {\n\t                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;\n\t                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);\n\t                }\n\t            } else {\n\t                // Copy one word at a time\n\t                for (var j = 0; j < thatSigBytes; j += 4) {\n\t                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];\n\t                }\n\t            }\n\t            this.sigBytes += thatSigBytes;\n\n\t            // Chainable\n\t            return this;\n\t        },\n\n\t        /**\n\t         * Removes insignificant bits.\n\t         *\n\t         * @example\n\t         *\n\t         *     wordArray.clamp();\n\t         */\n\t        clamp: function () {\n\t            // Shortcuts\n\t            var words = this.words;\n\t            var sigBytes = this.sigBytes;\n\n\t            // Clamp\n\t            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);\n\t            words.length = Math.ceil(sigBytes / 4);\n\t        },\n\n\t        /**\n\t         * Creates a copy of this word array.\n\t         *\n\t         * @return {WordArray} The clone.\n\t         *\n\t         * @example\n\t         *\n\t         *     var clone = wordArray.clone();\n\t         */\n\t        clone: function () {\n\t            var clone = Base.clone.call(this);\n\t            clone.words = this.words.slice(0);\n\n\t            return clone;\n\t        },\n\n\t        /**\n\t         * Creates a word array filled with random bytes.\n\t         *\n\t         * @param {number} nBytes The number of random bytes to generate.\n\t         *\n\t         * @return {WordArray} The random word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.lib.WordArray.random(16);\n\t         */\n\t        random: function (nBytes) {\n\t            var words = [];\n\n\t            for (var i = 0; i < nBytes; i += 4) {\n\t                words.push(cryptoSecureRandomInt());\n\t            }\n\n\t            return new WordArray.init(words, nBytes);\n\t        }\n\t    });\n\n\t    /**\n\t     * Encoder namespace.\n\t     */\n\t    var C_enc = C.enc = {};\n\n\t    /**\n\t     * Hex encoding strategy.\n\t     */\n\t    var Hex = C_enc.Hex = {\n\t        /**\n\t         * Converts a word array to a hex string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The hex string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            // Shortcuts\n\t            var words = wordArray.words;\n\t            var sigBytes = wordArray.sigBytes;\n\n\t            // Convert\n\t            var hexChars = [];\n\t            for (var i = 0; i < sigBytes; i++) {\n\t                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;\n\t                hexChars.push((bite >>> 4).toString(16));\n\t                hexChars.push((bite & 0x0f).toString(16));\n\t            }\n\n\t            return hexChars.join('');\n\t        },\n\n\t        /**\n\t         * Converts a hex string to a word array.\n\t         *\n\t         * @param {string} hexStr The hex string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);\n\t         */\n\t        parse: function (hexStr) {\n\t            // Shortcut\n\t            var hexStrLength = hexStr.length;\n\n\t            // Convert\n\t            var words = [];\n\t            for (var i = 0; i < hexStrLength; i += 2) {\n\t                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);\n\t            }\n\n\t            return new WordArray.init(words, hexStrLength / 2);\n\t        }\n\t    };\n\n\t    /**\n\t     * Latin1 encoding strategy.\n\t     */\n\t    var Latin1 = C_enc.Latin1 = {\n\t        /**\n\t         * Converts a word array to a Latin1 string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The Latin1 string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            // Shortcuts\n\t            var words = wordArray.words;\n\t            var sigBytes = wordArray.sigBytes;\n\n\t            // Convert\n\t            var latin1Chars = [];\n\t            for (var i = 0; i < sigBytes; i++) {\n\t                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;\n\t                latin1Chars.push(String.fromCharCode(bite));\n\t            }\n\n\t            return latin1Chars.join('');\n\t        },\n\n\t        /**\n\t         * Converts a Latin1 string to a word array.\n\t         *\n\t         * @param {string} latin1Str The Latin1 string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);\n\t         */\n\t        parse: function (latin1Str) {\n\t            // Shortcut\n\t            var latin1StrLength = latin1Str.length;\n\n\t            // Convert\n\t            var words = [];\n\t            for (var i = 0; i < latin1StrLength; i++) {\n\t                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);\n\t            }\n\n\t            return new WordArray.init(words, latin1StrLength);\n\t        }\n\t    };\n\n\t    /**\n\t     * UTF-8 encoding strategy.\n\t     */\n\t    var Utf8 = C_enc.Utf8 = {\n\t        /**\n\t         * Converts a word array to a UTF-8 string.\n\t         *\n\t         * @param {WordArray} wordArray The word array.\n\t         *\n\t         * @return {string} The UTF-8 string.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);\n\t         */\n\t        stringify: function (wordArray) {\n\t            try {\n\t                return decodeURIComponent(escape(Latin1.stringify(wordArray)));\n\t            } catch (e) {\n\t                throw new Error('Malformed UTF-8 data');\n\t            }\n\t        },\n\n\t        /**\n\t         * Converts a UTF-8 string to a word array.\n\t         *\n\t         * @param {string} utf8Str The UTF-8 string.\n\t         *\n\t         * @return {WordArray} The word array.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);\n\t         */\n\t        parse: function (utf8Str) {\n\t            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));\n\t        }\n\t    };\n\n\t    /**\n\t     * Abstract buffered block algorithm template.\n\t     *\n\t     * The property blockSize must be implemented in a concrete subtype.\n\t     *\n\t     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0\n\t     */\n\t    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({\n\t        /**\n\t         * Resets this block algorithm's data buffer to its initial state.\n\t         *\n\t         * @example\n\t         *\n\t         *     bufferedBlockAlgorithm.reset();\n\t         */\n\t        reset: function () {\n\t            // Initial values\n\t            this._data = new WordArray.init();\n\t            this._nDataBytes = 0;\n\t        },\n\n\t        /**\n\t         * Adds new data to this block algorithm's buffer.\n\t         *\n\t         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.\n\t         *\n\t         * @example\n\t         *\n\t         *     bufferedBlockAlgorithm._append('data');\n\t         *     bufferedBlockAlgorithm._append(wordArray);\n\t         */\n\t        _append: function (data) {\n\t            // Convert string to WordArray, else assume WordArray already\n\t            if (typeof data == 'string') {\n\t                data = Utf8.parse(data);\n\t            }\n\n\t            // Append\n\t            this._data.concat(data);\n\t            this._nDataBytes += data.sigBytes;\n\t        },\n\n\t        /**\n\t         * Processes available data blocks.\n\t         *\n\t         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.\n\t         *\n\t         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.\n\t         *\n\t         * @return {WordArray} The processed data.\n\t         *\n\t         * @example\n\t         *\n\t         *     var processedData = bufferedBlockAlgorithm._process();\n\t         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');\n\t         */\n\t        _process: function (doFlush) {\n\t            var processedWords;\n\n\t            // Shortcuts\n\t            var data = this._data;\n\t            var dataWords = data.words;\n\t            var dataSigBytes = data.sigBytes;\n\t            var blockSize = this.blockSize;\n\t            var blockSizeBytes = blockSize * 4;\n\n\t            // Count blocks ready\n\t            var nBlocksReady = dataSigBytes / blockSizeBytes;\n\t            if (doFlush) {\n\t                // Round up to include partial blocks\n\t                nBlocksReady = Math.ceil(nBlocksReady);\n\t            } else {\n\t                // Round down to include only full blocks,\n\t                // less the number of blocks that must remain in the buffer\n\t                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);\n\t            }\n\n\t            // Count words ready\n\t            var nWordsReady = nBlocksReady * blockSize;\n\n\t            // Count bytes ready\n\t            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);\n\n\t            // Process blocks\n\t            if (nWordsReady) {\n\t                for (var offset = 0; offset < nWordsReady; offset += blockSize) {\n\t                    // Perform concrete-algorithm logic\n\t                    this._doProcessBlock(dataWords, offset);\n\t                }\n\n\t                // Remove processed words\n\t                processedWords = dataWords.splice(0, nWordsReady);\n\t                data.sigBytes -= nBytesReady;\n\t            }\n\n\t            // Return processed words\n\t            return new WordArray.init(processedWords, nBytesReady);\n\t        },\n\n\t        /**\n\t         * Creates a copy of this object.\n\t         *\n\t         * @return {Object} The clone.\n\t         *\n\t         * @example\n\t         *\n\t         *     var clone = bufferedBlockAlgorithm.clone();\n\t         */\n\t        clone: function () {\n\t            var clone = Base.clone.call(this);\n\t            clone._data = this._data.clone();\n\n\t            return clone;\n\t        },\n\n\t        _minBufferSize: 0\n\t    });\n\n\t    /**\n\t     * Abstract hasher template.\n\t     *\n\t     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)\n\t     */\n\t    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({\n\t        /**\n\t         * Configuration options.\n\t         */\n\t        cfg: Base.extend(),\n\n\t        /**\n\t         * Initializes a newly created hasher.\n\t         *\n\t         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.\n\t         *\n\t         * @example\n\t         *\n\t         *     var hasher = CryptoJS.algo.SHA256.create();\n\t         */\n\t        init: function (cfg) {\n\t            // Apply config defaults\n\t            this.cfg = this.cfg.extend(cfg);\n\n\t            // Set initial values\n\t            this.reset();\n\t        },\n\n\t        /**\n\t         * Resets this hasher to its initial state.\n\t         *\n\t         * @example\n\t         *\n\t         *     hasher.reset();\n\t         */\n\t        reset: function () {\n\t            // Reset data buffer\n\t            BufferedBlockAlgorithm.reset.call(this);\n\n\t            // Perform concrete-hasher logic\n\t            this._doReset();\n\t        },\n\n\t        /**\n\t         * Updates this hasher with a message.\n\t         *\n\t         * @param {WordArray|string} messageUpdate The message to append.\n\t         *\n\t         * @return {Hasher} This hasher.\n\t         *\n\t         * @example\n\t         *\n\t         *     hasher.update('message');\n\t         *     hasher.update(wordArray);\n\t         */\n\t        update: function (messageUpdate) {\n\t            // Append\n\t            this._append(messageUpdate);\n\n\t            // Update the hash\n\t            this._process();\n\n\t            // Chainable\n\t            return this;\n\t        },\n\n\t        /**\n\t         * Finalizes the hash computation.\n\t         * Note that the finalize operation is effectively a destructive, read-once operation.\n\t         *\n\t         * @param {WordArray|string} messageUpdate (Optional) A final message update.\n\t         *\n\t         * @return {WordArray} The hash.\n\t         *\n\t         * @example\n\t         *\n\t         *     var hash = hasher.finalize();\n\t         *     var hash = hasher.finalize('message');\n\t         *     var hash = hasher.finalize(wordArray);\n\t         */\n\t        finalize: function (messageUpdate) {\n\t            // Final message update\n\t            if (messageUpdate) {\n\t                this._append(messageUpdate);\n\t            }\n\n\t            // Perform concrete-hasher logic\n\t            var hash = this._doFinalize();\n\n\t            return hash;\n\t        },\n\n\t        blockSize: 512/32,\n\n\t        /**\n\t         * Creates a shortcut function to a hasher's object interface.\n\t         *\n\t         * @param {Hasher} hasher The hasher to create a helper for.\n\t         *\n\t         * @return {Function} The shortcut function.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);\n\t         */\n\t        _createHelper: function (hasher) {\n\t            return function (message, cfg) {\n\t                return new hasher.init(cfg).finalize(message);\n\t            };\n\t        },\n\n\t        /**\n\t         * Creates a shortcut function to the HMAC's object interface.\n\t         *\n\t         * @param {Hasher} hasher The hasher to use in this HMAC helper.\n\t         *\n\t         * @return {Function} The shortcut function.\n\t         *\n\t         * @static\n\t         *\n\t         * @example\n\t         *\n\t         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);\n\t         */\n\t        _createHmacHelper: function (hasher) {\n\t            return function (message, key) {\n\t                return new C_algo.HMAC.init(hasher, key).finalize(message);\n\t            };\n\t        }\n\t    });\n\n\t    /**\n\t     * Algorithm namespace.\n\t     */\n\t    var C_algo = C.algo = {};\n\n\t    return C;\n\t}(Math));\n\n\n\treturn CryptoJS;\n\n}));\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/crypto-js/core.js?"
				);

				/***/
			},

		/***/ './node_modules/crypto-js/md5.js':
			/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
			/***/ function (module, exports, __webpack_require__) {
				eval(
					";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t}\n\telse {}\n}(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t    // Shortcuts\n\t    var C = CryptoJS;\n\t    var C_lib = C.lib;\n\t    var WordArray = C_lib.WordArray;\n\t    var Hasher = C_lib.Hasher;\n\t    var C_algo = C.algo;\n\n\t    // Constants table\n\t    var T = [];\n\n\t    // Compute constants\n\t    (function () {\n\t        for (var i = 0; i < 64; i++) {\n\t            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;\n\t        }\n\t    }());\n\n\t    /**\n\t     * MD5 hash algorithm.\n\t     */\n\t    var MD5 = C_algo.MD5 = Hasher.extend({\n\t        _doReset: function () {\n\t            this._hash = new WordArray.init([\n\t                0x67452301, 0xefcdab89,\n\t                0x98badcfe, 0x10325476\n\t            ]);\n\t        },\n\n\t        _doProcessBlock: function (M, offset) {\n\t            // Swap endian\n\t            for (var i = 0; i < 16; i++) {\n\t                // Shortcuts\n\t                var offset_i = offset + i;\n\t                var M_offset_i = M[offset_i];\n\n\t                M[offset_i] = (\n\t                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |\n\t                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)\n\t                );\n\t            }\n\n\t            // Shortcuts\n\t            var H = this._hash.words;\n\n\t            var M_offset_0  = M[offset + 0];\n\t            var M_offset_1  = M[offset + 1];\n\t            var M_offset_2  = M[offset + 2];\n\t            var M_offset_3  = M[offset + 3];\n\t            var M_offset_4  = M[offset + 4];\n\t            var M_offset_5  = M[offset + 5];\n\t            var M_offset_6  = M[offset + 6];\n\t            var M_offset_7  = M[offset + 7];\n\t            var M_offset_8  = M[offset + 8];\n\t            var M_offset_9  = M[offset + 9];\n\t            var M_offset_10 = M[offset + 10];\n\t            var M_offset_11 = M[offset + 11];\n\t            var M_offset_12 = M[offset + 12];\n\t            var M_offset_13 = M[offset + 13];\n\t            var M_offset_14 = M[offset + 14];\n\t            var M_offset_15 = M[offset + 15];\n\n\t            // Working varialbes\n\t            var a = H[0];\n\t            var b = H[1];\n\t            var c = H[2];\n\t            var d = H[3];\n\n\t            // Computation\n\t            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);\n\t            d = FF(d, a, b, c, M_offset_1,  12, T[1]);\n\t            c = FF(c, d, a, b, M_offset_2,  17, T[2]);\n\t            b = FF(b, c, d, a, M_offset_3,  22, T[3]);\n\t            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);\n\t            d = FF(d, a, b, c, M_offset_5,  12, T[5]);\n\t            c = FF(c, d, a, b, M_offset_6,  17, T[6]);\n\t            b = FF(b, c, d, a, M_offset_7,  22, T[7]);\n\t            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);\n\t            d = FF(d, a, b, c, M_offset_9,  12, T[9]);\n\t            c = FF(c, d, a, b, M_offset_10, 17, T[10]);\n\t            b = FF(b, c, d, a, M_offset_11, 22, T[11]);\n\t            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);\n\t            d = FF(d, a, b, c, M_offset_13, 12, T[13]);\n\t            c = FF(c, d, a, b, M_offset_14, 17, T[14]);\n\t            b = FF(b, c, d, a, M_offset_15, 22, T[15]);\n\n\t            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);\n\t            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);\n\t            c = GG(c, d, a, b, M_offset_11, 14, T[18]);\n\t            b = GG(b, c, d, a, M_offset_0,  20, T[19]);\n\t            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);\n\t            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);\n\t            c = GG(c, d, a, b, M_offset_15, 14, T[22]);\n\t            b = GG(b, c, d, a, M_offset_4,  20, T[23]);\n\t            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);\n\t            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);\n\t            c = GG(c, d, a, b, M_offset_3,  14, T[26]);\n\t            b = GG(b, c, d, a, M_offset_8,  20, T[27]);\n\t            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);\n\t            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);\n\t            c = GG(c, d, a, b, M_offset_7,  14, T[30]);\n\t            b = GG(b, c, d, a, M_offset_12, 20, T[31]);\n\n\t            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);\n\t            d = HH(d, a, b, c, M_offset_8,  11, T[33]);\n\t            c = HH(c, d, a, b, M_offset_11, 16, T[34]);\n\t            b = HH(b, c, d, a, M_offset_14, 23, T[35]);\n\t            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);\n\t            d = HH(d, a, b, c, M_offset_4,  11, T[37]);\n\t            c = HH(c, d, a, b, M_offset_7,  16, T[38]);\n\t            b = HH(b, c, d, a, M_offset_10, 23, T[39]);\n\t            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);\n\t            d = HH(d, a, b, c, M_offset_0,  11, T[41]);\n\t            c = HH(c, d, a, b, M_offset_3,  16, T[42]);\n\t            b = HH(b, c, d, a, M_offset_6,  23, T[43]);\n\t            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);\n\t            d = HH(d, a, b, c, M_offset_12, 11, T[45]);\n\t            c = HH(c, d, a, b, M_offset_15, 16, T[46]);\n\t            b = HH(b, c, d, a, M_offset_2,  23, T[47]);\n\n\t            a = II(a, b, c, d, M_offset_0,  6,  T[48]);\n\t            d = II(d, a, b, c, M_offset_7,  10, T[49]);\n\t            c = II(c, d, a, b, M_offset_14, 15, T[50]);\n\t            b = II(b, c, d, a, M_offset_5,  21, T[51]);\n\t            a = II(a, b, c, d, M_offset_12, 6,  T[52]);\n\t            d = II(d, a, b, c, M_offset_3,  10, T[53]);\n\t            c = II(c, d, a, b, M_offset_10, 15, T[54]);\n\t            b = II(b, c, d, a, M_offset_1,  21, T[55]);\n\t            a = II(a, b, c, d, M_offset_8,  6,  T[56]);\n\t            d = II(d, a, b, c, M_offset_15, 10, T[57]);\n\t            c = II(c, d, a, b, M_offset_6,  15, T[58]);\n\t            b = II(b, c, d, a, M_offset_13, 21, T[59]);\n\t            a = II(a, b, c, d, M_offset_4,  6,  T[60]);\n\t            d = II(d, a, b, c, M_offset_11, 10, T[61]);\n\t            c = II(c, d, a, b, M_offset_2,  15, T[62]);\n\t            b = II(b, c, d, a, M_offset_9,  21, T[63]);\n\n\t            // Intermediate hash value\n\t            H[0] = (H[0] + a) | 0;\n\t            H[1] = (H[1] + b) | 0;\n\t            H[2] = (H[2] + c) | 0;\n\t            H[3] = (H[3] + d) | 0;\n\t        },\n\n\t        _doFinalize: function () {\n\t            // Shortcuts\n\t            var data = this._data;\n\t            var dataWords = data.words;\n\n\t            var nBitsTotal = this._nDataBytes * 8;\n\t            var nBitsLeft = data.sigBytes * 8;\n\n\t            // Add padding\n\t            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);\n\n\t            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);\n\t            var nBitsTotalL = nBitsTotal;\n\t            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (\n\t                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |\n\t                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)\n\t            );\n\t            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (\n\t                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |\n\t                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)\n\t            );\n\n\t            data.sigBytes = (dataWords.length + 1) * 4;\n\n\t            // Hash final blocks\n\t            this._process();\n\n\t            // Shortcuts\n\t            var hash = this._hash;\n\t            var H = hash.words;\n\n\t            // Swap endian\n\t            for (var i = 0; i < 4; i++) {\n\t                // Shortcut\n\t                var H_i = H[i];\n\n\t                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |\n\t                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);\n\t            }\n\n\t            // Return final computed hash\n\t            return hash;\n\t        },\n\n\t        clone: function () {\n\t            var clone = Hasher.clone.call(this);\n\t            clone._hash = this._hash.clone();\n\n\t            return clone;\n\t        }\n\t    });\n\n\t    function FF(a, b, c, d, x, s, t) {\n\t        var n = a + ((b & c) | (~b & d)) + x + t;\n\t        return ((n << s) | (n >>> (32 - s))) + b;\n\t    }\n\n\t    function GG(a, b, c, d, x, s, t) {\n\t        var n = a + ((b & d) | (c & ~d)) + x + t;\n\t        return ((n << s) | (n >>> (32 - s))) + b;\n\t    }\n\n\t    function HH(a, b, c, d, x, s, t) {\n\t        var n = a + (b ^ c ^ d) + x + t;\n\t        return ((n << s) | (n >>> (32 - s))) + b;\n\t    }\n\n\t    function II(a, b, c, d, x, s, t) {\n\t        var n = a + (c ^ (b | ~d)) + x + t;\n\t        return ((n << s) | (n >>> (32 - s))) + b;\n\t    }\n\n\t    /**\n\t     * Shortcut function to the hasher's object interface.\n\t     *\n\t     * @param {WordArray|string} message The message to hash.\n\t     *\n\t     * @return {WordArray} The hash.\n\t     *\n\t     * @static\n\t     *\n\t     * @example\n\t     *\n\t     *     var hash = CryptoJS.MD5('message');\n\t     *     var hash = CryptoJS.MD5(wordArray);\n\t     */\n\t    C.MD5 = Hasher._createHelper(MD5);\n\n\t    /**\n\t     * Shortcut function to the HMAC's object interface.\n\t     *\n\t     * @param {WordArray|string} message The message to hash.\n\t     * @param {WordArray|string} key The secret key.\n\t     *\n\t     * @return {WordArray} The HMAC.\n\t     *\n\t     * @static\n\t     *\n\t     * @example\n\t     *\n\t     *     var hmac = CryptoJS.HmacMD5(message, key);\n\t     */\n\t    C.HmacMD5 = Hasher._createHmacHelper(MD5);\n\t}(Math));\n\n\n\treturn CryptoJS.MD5;\n\n}));\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/crypto-js/md5.js?"
				);

				/***/
			},

		/***/ './node_modules/ev-emitter/ev-emitter.js':
			/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
			/***/ function (module, exports, __webpack_require__) {
				eval(
					"var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * EvEmitter v1.1.0\n * Lil' event emitter\n * MIT License\n */\n\n/* jshint unused: true, undef: true, strict: true */\n\n( function( global, factory ) {\n  // universal module definition\n  /* jshint strict: false */ /* globals define, module, window */\n  if ( true ) {\n    // AMD - RequireJS\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n\n}( typeof window != 'undefined' ? window : this, function() {\n\n\"use strict\";\n\nfunction EvEmitter() {}\n\nvar proto = EvEmitter.prototype;\n\nproto.on = function( eventName, listener ) {\n  if ( !eventName || !listener ) {\n    return;\n  }\n  // set events hash\n  var events = this._events = this._events || {};\n  // set listeners array\n  var listeners = events[ eventName ] = events[ eventName ] || [];\n  // only add once\n  if ( listeners.indexOf( listener ) == -1 ) {\n    listeners.push( listener );\n  }\n\n  return this;\n};\n\nproto.once = function( eventName, listener ) {\n  if ( !eventName || !listener ) {\n    return;\n  }\n  // add event\n  this.on( eventName, listener );\n  // set once flag\n  // set onceEvents hash\n  var onceEvents = this._onceEvents = this._onceEvents || {};\n  // set onceListeners object\n  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};\n  // set flag\n  onceListeners[ listener ] = true;\n\n  return this;\n};\n\nproto.off = function( eventName, listener ) {\n  var listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) {\n    return;\n  }\n  var index = listeners.indexOf( listener );\n  if ( index != -1 ) {\n    listeners.splice( index, 1 );\n  }\n\n  return this;\n};\n\nproto.emitEvent = function( eventName, args ) {\n  var listeners = this._events && this._events[ eventName ];\n  if ( !listeners || !listeners.length ) {\n    return;\n  }\n  // copy over to avoid interference if .off() in listener\n  listeners = listeners.slice(0);\n  args = args || [];\n  // once stuff\n  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];\n\n  for ( var i=0; i < listeners.length; i++ ) {\n    var listener = listeners[i]\n    var isOnce = onceListeners && onceListeners[ listener ];\n    if ( isOnce ) {\n      // remove listener\n      // remove before trigger to prevent recursion\n      this.off( eventName, listener );\n      // unset once flag\n      delete onceListeners[ listener ];\n    }\n    // trigger listener\n    listener.apply( this, args );\n  }\n\n  return this;\n};\n\nproto.allOff = function() {\n  delete this._events;\n  delete this._onceEvents;\n};\n\nreturn EvEmitter;\n\n}));\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/ev-emitter/ev-emitter.js?"
				);

				/***/
			},

		/***/ './node_modules/focus-options-polyfill/index.js':
			/*!******************************************************!*\
  !*** ./node_modules/focus-options-polyfill/index.js ***!
  \******************************************************/
			/***/ function () {
				eval(
					'// focus - focusOptions - preventScroll polyfill\n(function() {\n  if (\n    typeof window === "undefined" ||\n    typeof document === "undefined" ||\n    typeof HTMLElement === "undefined"\n  ) {\n    return;\n  }\n\n  var supportsPreventScrollOption = false;\n  try {\n    var focusElem = document.createElement("div");\n    focusElem.addEventListener(\n      "focus",\n      function(event) {\n        event.preventDefault();\n        event.stopPropagation();\n      },\n      true\n    );\n    focusElem.focus(\n      Object.defineProperty({}, "preventScroll", {\n        get: function() {\n          // Edge v18 gives a false positive for supporting inputs\n          if (\n            navigator &&\n            typeof navigator.userAgent !== \'undefined\' &&\n            navigator.userAgent &&\n            navigator.userAgent.match(/Edge\\/1[7-8]/)) {\n              return supportsPreventScrollOption = false\n          }\n\n          supportsPreventScrollOption = true;\n        }\n      })\n    );\n  } catch (e) {}\n\n  if (\n    HTMLElement.prototype.nativeFocus === undefined &&\n    !supportsPreventScrollOption\n  ) {\n    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;\n\n    var calcScrollableElements = function(element) {\n      var parent = element.parentNode;\n      var scrollableElements = [];\n      var rootScrollingElement =\n        document.scrollingElement || document.documentElement;\n\n      while (parent && parent !== rootScrollingElement) {\n        if (\n          parent.offsetHeight < parent.scrollHeight ||\n          parent.offsetWidth < parent.scrollWidth\n        ) {\n          scrollableElements.push([\n            parent,\n            parent.scrollTop,\n            parent.scrollLeft\n          ]);\n        }\n        parent = parent.parentNode;\n      }\n      parent = rootScrollingElement;\n      scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);\n\n      return scrollableElements;\n    };\n\n    var restoreScrollPosition = function(scrollableElements) {\n      for (var i = 0; i < scrollableElements.length; i++) {\n        scrollableElements[i][0].scrollTop = scrollableElements[i][1];\n        scrollableElements[i][0].scrollLeft = scrollableElements[i][2];\n      }\n      scrollableElements = [];\n    };\n\n    var patchedFocus = function(args) {\n      if (args && args.preventScroll) {\n        var evScrollableElements = calcScrollableElements(this);\n        if (typeof setTimeout === \'function\') {\n          var thisElem = this;\n          setTimeout(function () {\n            thisElem.nativeFocus();\n            restoreScrollPosition(evScrollableElements);\n          }, 0);\n        } else {\n          this.nativeFocus();\n          restoreScrollPosition(evScrollableElements);\n        }\n      }\n      else {\n        this.nativeFocus();\n      }\n    };\n\n    HTMLElement.prototype.focus = patchedFocus;\n  }\n})();\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/focus-options-polyfill/index.js?'
				);

				/***/
			},

		/***/ './node_modules/function-bind/implementation.js':
			/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
			/***/ function (module) {
				'use strict';
				eval(
					"\n\n/* eslint no-invalid-this: 1 */\n\nvar ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';\nvar slice = Array.prototype.slice;\nvar toStr = Object.prototype.toString;\nvar funcType = '[object Function]';\n\nmodule.exports = function bind(that) {\n    var target = this;\n    if (typeof target !== 'function' || toStr.call(target) !== funcType) {\n        throw new TypeError(ERROR_MESSAGE + target);\n    }\n    var args = slice.call(arguments, 1);\n\n    var bound;\n    var binder = function () {\n        if (this instanceof bound) {\n            var result = target.apply(\n                this,\n                args.concat(slice.call(arguments))\n            );\n            if (Object(result) === result) {\n                return result;\n            }\n            return this;\n        } else {\n            return target.apply(\n                that,\n                args.concat(slice.call(arguments))\n            );\n        }\n    };\n\n    var boundLength = Math.max(0, target.length - args.length);\n    var boundArgs = [];\n    for (var i = 0; i < boundLength; i++) {\n        boundArgs.push('$' + i);\n    }\n\n    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);\n\n    if (target.prototype) {\n        var Empty = function Empty() {};\n        Empty.prototype = target.prototype;\n        bound.prototype = new Empty();\n        Empty.prototype = null;\n    }\n\n    return bound;\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/function-bind/implementation.js?"
				);

				/***/
			},

		/***/ './node_modules/function-bind/index.js':
			/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					'\n\nvar implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");\n\nmodule.exports = Function.prototype.bind || implementation;\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/function-bind/index.js?'
				);

				/***/
			},

		/***/ './node_modules/get-intrinsic/index.js':
			/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar undefined;\n\nvar $SyntaxError = SyntaxError;\nvar $Function = Function;\nvar $TypeError = TypeError;\n\n// eslint-disable-next-line consistent-return\nvar getEvalledConstructor = function (expressionSyntax) {\n\ttry {\n\t\treturn $Function('\"use strict\"; return (' + expressionSyntax + ').constructor;')();\n\t} catch (e) {}\n};\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () {\n\tthrow new $TypeError();\n};\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasProto = __webpack_require__(/*! has-proto */ \"./node_modules/has-proto/index.js\")();\n\nvar getProto = Object.getPrototypeOf || (\n\thasProto\n\t\t? function (x) { return x.__proto__; } // eslint-disable-line no-proto\n\t\t: null\n);\n\nvar needsEval = {};\n\nvar TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': needsEval,\n\t'%AsyncGenerator%': needsEval,\n\t'%AsyncGeneratorFunction%': needsEval,\n\t'%AsyncIteratorPrototype%': needsEval,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,\n\t'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,\n\t'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,\n\t'%Boolean%': Boolean,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%Date%': Date,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,\n\t'%Function%': $Function,\n\t'%GeneratorFunction%': needsEval,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%Object%': Object,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%ReferenceError%': ReferenceError,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SyntaxError%': $SyntaxError,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypeError%': $TypeError,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%URIError%': URIError,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet\n};\n\nif (getProto) {\n\ttry {\n\t\tnull.error; // eslint-disable-line no-unused-expressions\n\t} catch (e) {\n\t\t// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229\n\t\tvar errorProto = getProto(getProto(e));\n\t\tINTRINSICS['%Error.prototype%'] = errorProto;\n\t}\n}\n\nvar doEval = function doEval(name) {\n\tvar value;\n\tif (name === '%AsyncFunction%') {\n\t\tvalue = getEvalledConstructor('async function () {}');\n\t} else if (name === '%GeneratorFunction%') {\n\t\tvalue = getEvalledConstructor('function* () {}');\n\t} else if (name === '%AsyncGeneratorFunction%') {\n\t\tvalue = getEvalledConstructor('async function* () {}');\n\t} else if (name === '%AsyncGenerator%') {\n\t\tvar fn = doEval('%AsyncGeneratorFunction%');\n\t\tif (fn) {\n\t\t\tvalue = fn.prototype;\n\t\t}\n\t} else if (name === '%AsyncIteratorPrototype%') {\n\t\tvar gen = doEval('%AsyncGenerator%');\n\t\tif (gen && getProto) {\n\t\t\tvalue = getProto(gen.prototype);\n\t\t}\n\t}\n\n\tINTRINSICS[name] = value;\n\n\treturn value;\n};\n\nvar LEGACY_ALIASES = {\n\t'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],\n\t'%ArrayPrototype%': ['Array', 'prototype'],\n\t'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],\n\t'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],\n\t'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],\n\t'%ArrayProto_values%': ['Array', 'prototype', 'values'],\n\t'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],\n\t'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],\n\t'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],\n\t'%BooleanPrototype%': ['Boolean', 'prototype'],\n\t'%DataViewPrototype%': ['DataView', 'prototype'],\n\t'%DatePrototype%': ['Date', 'prototype'],\n\t'%ErrorPrototype%': ['Error', 'prototype'],\n\t'%EvalErrorPrototype%': ['EvalError', 'prototype'],\n\t'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],\n\t'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],\n\t'%FunctionPrototype%': ['Function', 'prototype'],\n\t'%Generator%': ['GeneratorFunction', 'prototype'],\n\t'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],\n\t'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],\n\t'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],\n\t'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],\n\t'%JSONParse%': ['JSON', 'parse'],\n\t'%JSONStringify%': ['JSON', 'stringify'],\n\t'%MapPrototype%': ['Map', 'prototype'],\n\t'%NumberPrototype%': ['Number', 'prototype'],\n\t'%ObjectPrototype%': ['Object', 'prototype'],\n\t'%ObjProto_toString%': ['Object', 'prototype', 'toString'],\n\t'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],\n\t'%PromisePrototype%': ['Promise', 'prototype'],\n\t'%PromiseProto_then%': ['Promise', 'prototype', 'then'],\n\t'%Promise_all%': ['Promise', 'all'],\n\t'%Promise_reject%': ['Promise', 'reject'],\n\t'%Promise_resolve%': ['Promise', 'resolve'],\n\t'%RangeErrorPrototype%': ['RangeError', 'prototype'],\n\t'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],\n\t'%RegExpPrototype%': ['RegExp', 'prototype'],\n\t'%SetPrototype%': ['Set', 'prototype'],\n\t'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],\n\t'%StringPrototype%': ['String', 'prototype'],\n\t'%SymbolPrototype%': ['Symbol', 'prototype'],\n\t'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],\n\t'%TypedArrayPrototype%': ['TypedArray', 'prototype'],\n\t'%TypeErrorPrototype%': ['TypeError', 'prototype'],\n\t'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],\n\t'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],\n\t'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],\n\t'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],\n\t'%URIErrorPrototype%': ['URIError', 'prototype'],\n\t'%WeakMapPrototype%': ['WeakMap', 'prototype'],\n\t'%WeakSetPrototype%': ['WeakSet', 'prototype']\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar hasOwn = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar $concat = bind.call(Function.call, Array.prototype.concat);\nvar $spliceApply = bind.call(Function.apply, Array.prototype.splice);\nvar $replace = bind.call(Function.call, String.prototype.replace);\nvar $strSlice = bind.call(Function.call, String.prototype.slice);\nvar $exec = bind.call(Function.call, RegExp.prototype.exec);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar first = $strSlice(string, 0, 1);\n\tvar last = $strSlice(string, -1);\n\tif (first === '%' && last !== '%') {\n\t\tthrow new $SyntaxError('invalid intrinsic syntax, expected closing `%`');\n\t} else if (last === '%' && first !== '%') {\n\t\tthrow new $SyntaxError('invalid intrinsic syntax, expected opening `%`');\n\t}\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tvar intrinsicName = name;\n\tvar alias;\n\tif (hasOwn(LEGACY_ALIASES, intrinsicName)) {\n\t\talias = LEGACY_ALIASES[intrinsicName];\n\t\tintrinsicName = '%' + alias[0] + '%';\n\t}\n\n\tif (hasOwn(INTRINSICS, intrinsicName)) {\n\t\tvar value = INTRINSICS[intrinsicName];\n\t\tif (value === needsEval) {\n\t\t\tvalue = doEval(intrinsicName);\n\t\t}\n\t\tif (typeof value === 'undefined' && !allowMissing) {\n\t\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t\t}\n\n\t\treturn {\n\t\t\talias: alias,\n\t\t\tname: intrinsicName,\n\t\t\tvalue: value\n\t\t};\n\t}\n\n\tthrow new $SyntaxError('intrinsic ' + name + ' does not exist!');\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new $TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new $TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tif ($exec(/^%?[^%]*%?$/, name) === null) {\n\t\tthrow new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');\n\t}\n\tvar parts = stringToPath(name);\n\tvar intrinsicBaseName = parts.length > 0 ? parts[0] : '';\n\n\tvar intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);\n\tvar intrinsicRealName = intrinsic.name;\n\tvar value = intrinsic.value;\n\tvar skipFurtherCaching = false;\n\n\tvar alias = intrinsic.alias;\n\tif (alias) {\n\t\tintrinsicBaseName = alias[0];\n\t\t$spliceApply(parts, $concat([0, 1], alias));\n\t}\n\n\tfor (var i = 1, isOwn = true; i < parts.length; i += 1) {\n\t\tvar part = parts[i];\n\t\tvar first = $strSlice(part, 0, 1);\n\t\tvar last = $strSlice(part, -1);\n\t\tif (\n\t\t\t(\n\t\t\t\t(first === '\"' || first === \"'\" || first === '`')\n\t\t\t\t|| (last === '\"' || last === \"'\" || last === '`')\n\t\t\t)\n\t\t\t&& first !== last\n\t\t) {\n\t\t\tthrow new $SyntaxError('property names with quotes must have matching quotes');\n\t\t}\n\t\tif (part === 'constructor' || !isOwn) {\n\t\t\tskipFurtherCaching = true;\n\t\t}\n\n\t\tintrinsicBaseName += '.' + part;\n\t\tintrinsicRealName = '%' + intrinsicBaseName + '%';\n\n\t\tif (hasOwn(INTRINSICS, intrinsicRealName)) {\n\t\t\tvalue = INTRINSICS[intrinsicRealName];\n\t\t} else if (value != null) {\n\t\t\tif (!(part in value)) {\n\t\t\t\tif (!allowMissing) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\treturn void undefined;\n\t\t\t}\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, part);\n\t\t\t\tisOwn = !!desc;\n\n\t\t\t\t// By convention, when a data property is converted to an accessor\n\t\t\t\t// property to emulate a data property that does not suffer from\n\t\t\t\t// the override mistake, that accessor's getter is marked with\n\t\t\t\t// an `originalValue` property. Here, when we detect this, we\n\t\t\t\t// uphold the illusion by pretending to see that original data\n\t\t\t\t// property, i.e., returning the value rather than the getter\n\t\t\t\t// itself.\n\t\t\t\tif (isOwn && 'get' in desc && !('originalValue' in desc.get)) {\n\t\t\t\t\tvalue = desc.get;\n\t\t\t\t} else {\n\t\t\t\t\tvalue = value[part];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tisOwn = hasOwn(value, part);\n\t\t\t\tvalue = value[part];\n\t\t\t}\n\n\t\t\tif (isOwn && !skipFurtherCaching) {\n\t\t\t\tINTRINSICS[intrinsicRealName] = value;\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/get-intrinsic/index.js?"
				);

				/***/
			},

		/***/ './node_modules/has-proto/index.js':
			/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
			/***/ function (module) {
				'use strict';
				eval(
					'\n\nvar test = {\n\tfoo: {}\n};\n\nvar $Object = Object;\n\nmodule.exports = function hasProto() {\n\treturn { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/has-proto/index.js?'
				);

				/***/
			},

		/***/ './node_modules/has-symbols/index.js':
			/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar origSymbol = typeof Symbol !== 'undefined' && Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/has-symbols/index.js?"
				);

				/***/
			},

		/***/ './node_modules/has-symbols/shams.js':
			/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
			/***/ function (module) {
				'use strict';
				eval(
					"\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/has-symbols/shams.js?"
				);

				/***/
			},

		/***/ './node_modules/has/src/index.js':
			/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					'\n\nvar bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");\n\nmodule.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/has/src/index.js?'
				);

				/***/
			},

		/***/ './node_modules/imagesloaded/imagesloaded.js':
			/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
			/***/ function (module, exports, __webpack_require__) {
				eval(
					"var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * imagesLoaded v4.1.4\n * JavaScript is all like \"You images are done yet or what?\"\n * MIT License\n */\n\n( function( window, factory ) { 'use strict';\n  // universal module definition\n\n  /*global define: false, module: false, require: false */\n\n  if ( true ) {\n    // AMD\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n      __webpack_require__(/*! ev-emitter/ev-emitter */ \"./node_modules/ev-emitter/ev-emitter.js\")\n    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {\n      return factory( window, EvEmitter );\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n\n})( typeof window !== 'undefined' ? window : this,\n\n// --------------------------  factory -------------------------- //\n\nfunction factory( window, EvEmitter ) {\n\n'use strict';\n\nvar $ = window.jQuery;\nvar console = window.console;\n\n// -------------------------- helpers -------------------------- //\n\n// extend objects\nfunction extend( a, b ) {\n  for ( var prop in b ) {\n    a[ prop ] = b[ prop ];\n  }\n  return a;\n}\n\nvar arraySlice = Array.prototype.slice;\n\n// turn element or nodeList into an array\nfunction makeArray( obj ) {\n  if ( Array.isArray( obj ) ) {\n    // use object if already an array\n    return obj;\n  }\n\n  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';\n  if ( isArrayLike ) {\n    // convert nodeList to array\n    return arraySlice.call( obj );\n  }\n\n  // array of single index\n  return [ obj ];\n}\n\n// -------------------------- imagesLoaded -------------------------- //\n\n/**\n * @param {Array, Element, NodeList, String} elem\n * @param {Object or Function} options - if function, use as callback\n * @param {Function} onAlways - callback function\n */\nfunction ImagesLoaded( elem, options, onAlways ) {\n  // coerce ImagesLoaded() without new, to be new ImagesLoaded()\n  if ( !( this instanceof ImagesLoaded ) ) {\n    return new ImagesLoaded( elem, options, onAlways );\n  }\n  // use elem as selector string\n  var queryElem = elem;\n  if ( typeof elem == 'string' ) {\n    queryElem = document.querySelectorAll( elem );\n  }\n  // bail if bad element\n  if ( !queryElem ) {\n    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );\n    return;\n  }\n\n  this.elements = makeArray( queryElem );\n  this.options = extend( {}, this.options );\n  // shift arguments if no options set\n  if ( typeof options == 'function' ) {\n    onAlways = options;\n  } else {\n    extend( this.options, options );\n  }\n\n  if ( onAlways ) {\n    this.on( 'always', onAlways );\n  }\n\n  this.getImages();\n\n  if ( $ ) {\n    // add jQuery Deferred object\n    this.jqDeferred = new $.Deferred();\n  }\n\n  // HACK check async to allow time to bind listeners\n  setTimeout( this.check.bind( this ) );\n}\n\nImagesLoaded.prototype = Object.create( EvEmitter.prototype );\n\nImagesLoaded.prototype.options = {};\n\nImagesLoaded.prototype.getImages = function() {\n  this.images = [];\n\n  // filter & find items if we have an item selector\n  this.elements.forEach( this.addElementImages, this );\n};\n\n/**\n * @param {Node} element\n */\nImagesLoaded.prototype.addElementImages = function( elem ) {\n  // filter siblings\n  if ( elem.nodeName == 'IMG' ) {\n    this.addImage( elem );\n  }\n  // get background image on element\n  if ( this.options.background === true ) {\n    this.addElementBackgroundImages( elem );\n  }\n\n  // find children\n  // no non-element nodes, #143\n  var nodeType = elem.nodeType;\n  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {\n    return;\n  }\n  var childImgs = elem.querySelectorAll('img');\n  // concat childElems to filterFound array\n  for ( var i=0; i < childImgs.length; i++ ) {\n    var img = childImgs[i];\n    this.addImage( img );\n  }\n\n  // get child background images\n  if ( typeof this.options.background == 'string' ) {\n    var children = elem.querySelectorAll( this.options.background );\n    for ( i=0; i < children.length; i++ ) {\n      var child = children[i];\n      this.addElementBackgroundImages( child );\n    }\n  }\n};\n\nvar elementNodeTypes = {\n  1: true,\n  9: true,\n  11: true\n};\n\nImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {\n  var style = getComputedStyle( elem );\n  if ( !style ) {\n    // Firefox returns null if in a hidden iframe https://bugzil.la/548397\n    return;\n  }\n  // get url inside url(\"...\")\n  var reURL = /url\\((['\"])?(.*?)\\1\\)/gi;\n  var matches = reURL.exec( style.backgroundImage );\n  while ( matches !== null ) {\n    var url = matches && matches[2];\n    if ( url ) {\n      this.addBackground( url, elem );\n    }\n    matches = reURL.exec( style.backgroundImage );\n  }\n};\n\n/**\n * @param {Image} img\n */\nImagesLoaded.prototype.addImage = function( img ) {\n  var loadingImage = new LoadingImage( img );\n  this.images.push( loadingImage );\n};\n\nImagesLoaded.prototype.addBackground = function( url, elem ) {\n  var background = new Background( url, elem );\n  this.images.push( background );\n};\n\nImagesLoaded.prototype.check = function() {\n  var _this = this;\n  this.progressedCount = 0;\n  this.hasAnyBroken = false;\n  // complete if no images\n  if ( !this.images.length ) {\n    this.complete();\n    return;\n  }\n\n  function onProgress( image, elem, message ) {\n    // HACK - Chrome triggers event before object properties have changed. #83\n    setTimeout( function() {\n      _this.progress( image, elem, message );\n    });\n  }\n\n  this.images.forEach( function( loadingImage ) {\n    loadingImage.once( 'progress', onProgress );\n    loadingImage.check();\n  });\n};\n\nImagesLoaded.prototype.progress = function( image, elem, message ) {\n  this.progressedCount++;\n  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;\n  // progress event\n  this.emitEvent( 'progress', [ this, image, elem ] );\n  if ( this.jqDeferred && this.jqDeferred.notify ) {\n    this.jqDeferred.notify( this, image );\n  }\n  // check if completed\n  if ( this.progressedCount == this.images.length ) {\n    this.complete();\n  }\n\n  if ( this.options.debug && console ) {\n    console.log( 'progress: ' + message, image, elem );\n  }\n};\n\nImagesLoaded.prototype.complete = function() {\n  var eventName = this.hasAnyBroken ? 'fail' : 'done';\n  this.isComplete = true;\n  this.emitEvent( eventName, [ this ] );\n  this.emitEvent( 'always', [ this ] );\n  if ( this.jqDeferred ) {\n    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';\n    this.jqDeferred[ jqMethod ]( this );\n  }\n};\n\n// --------------------------  -------------------------- //\n\nfunction LoadingImage( img ) {\n  this.img = img;\n}\n\nLoadingImage.prototype = Object.create( EvEmitter.prototype );\n\nLoadingImage.prototype.check = function() {\n  // If complete is true and browser supports natural sizes,\n  // try to check for image status manually.\n  var isComplete = this.getIsImageComplete();\n  if ( isComplete ) {\n    // report based on naturalWidth\n    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );\n    return;\n  }\n\n  // If none of the checks above matched, simulate loading on detached element.\n  this.proxyImage = new Image();\n  this.proxyImage.addEventListener( 'load', this );\n  this.proxyImage.addEventListener( 'error', this );\n  // bind to image as well for Firefox. #191\n  this.img.addEventListener( 'load', this );\n  this.img.addEventListener( 'error', this );\n  this.proxyImage.src = this.img.src;\n};\n\nLoadingImage.prototype.getIsImageComplete = function() {\n  // check for non-zero, non-undefined naturalWidth\n  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671\n  return this.img.complete && this.img.naturalWidth;\n};\n\nLoadingImage.prototype.confirm = function( isLoaded, message ) {\n  this.isLoaded = isLoaded;\n  this.emitEvent( 'progress', [ this, this.img, message ] );\n};\n\n// ----- events ----- //\n\n// trigger specified handler for event type\nLoadingImage.prototype.handleEvent = function( event ) {\n  var method = 'on' + event.type;\n  if ( this[ method ] ) {\n    this[ method ]( event );\n  }\n};\n\nLoadingImage.prototype.onload = function() {\n  this.confirm( true, 'onload' );\n  this.unbindEvents();\n};\n\nLoadingImage.prototype.onerror = function() {\n  this.confirm( false, 'onerror' );\n  this.unbindEvents();\n};\n\nLoadingImage.prototype.unbindEvents = function() {\n  this.proxyImage.removeEventListener( 'load', this );\n  this.proxyImage.removeEventListener( 'error', this );\n  this.img.removeEventListener( 'load', this );\n  this.img.removeEventListener( 'error', this );\n};\n\n// -------------------------- Background -------------------------- //\n\nfunction Background( url, element ) {\n  this.url = url;\n  this.element = element;\n  this.img = new Image();\n}\n\n// inherit LoadingImage prototype\nBackground.prototype = Object.create( LoadingImage.prototype );\n\nBackground.prototype.check = function() {\n  this.img.addEventListener( 'load', this );\n  this.img.addEventListener( 'error', this );\n  this.img.src = this.url;\n  // check if image is already complete\n  var isComplete = this.getIsImageComplete();\n  if ( isComplete ) {\n    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );\n    this.unbindEvents();\n  }\n};\n\nBackground.prototype.unbindEvents = function() {\n  this.img.removeEventListener( 'load', this );\n  this.img.removeEventListener( 'error', this );\n};\n\nBackground.prototype.confirm = function( isLoaded, message ) {\n  this.isLoaded = isLoaded;\n  this.emitEvent( 'progress', [ this, this.element, message ] );\n};\n\n// -------------------------- jQuery -------------------------- //\n\nImagesLoaded.makeJQueryPlugin = function( jQuery ) {\n  jQuery = jQuery || window.jQuery;\n  if ( !jQuery ) {\n    return;\n  }\n  // set local variable\n  $ = jQuery;\n  // $().imagesLoaded()\n  $.fn.imagesLoaded = function( options, callback ) {\n    var instance = new ImagesLoaded( this, options, callback );\n    return instance.jqDeferred.promise( $(this) );\n  };\n};\n// try making plugin\nImagesLoaded.makeJQueryPlugin();\n\n// --------------------------  -------------------------- //\n\nreturn ImagesLoaded;\n\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/imagesloaded/imagesloaded.js?"
				);

				/***/
			},

		/***/ './node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/frontend/scss/ajax-load-more.scss':
			/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/frontend/scss/ajax-load-more.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
			/***/ function () {
				eval(
					'// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/scss/ajax-load-more.scss?./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B3%5D'
				);

				/***/
			},

		/***/ './node_modules/object-inspect/index.js':
			/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				eval(
					"var hasMap = typeof Map === 'function' && Map.prototype;\nvar mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;\nvar mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;\nvar mapForEach = hasMap && Map.prototype.forEach;\nvar hasSet = typeof Set === 'function' && Set.prototype;\nvar setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;\nvar setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;\nvar setForEach = hasSet && Set.prototype.forEach;\nvar hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;\nvar weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;\nvar hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;\nvar weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;\nvar hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;\nvar weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;\nvar booleanValueOf = Boolean.prototype.valueOf;\nvar objectToString = Object.prototype.toString;\nvar functionToString = Function.prototype.toString;\nvar $match = String.prototype.match;\nvar $slice = String.prototype.slice;\nvar $replace = String.prototype.replace;\nvar $toUpperCase = String.prototype.toUpperCase;\nvar $toLowerCase = String.prototype.toLowerCase;\nvar $test = RegExp.prototype.test;\nvar $concat = Array.prototype.concat;\nvar $join = Array.prototype.join;\nvar $arrSlice = Array.prototype.slice;\nvar $floor = Math.floor;\nvar bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;\nvar gOPS = Object.getOwnPropertySymbols;\nvar symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;\nvar hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';\n// ie, `has-tostringtag/shams\nvar toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')\n    ? Symbol.toStringTag\n    : null;\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\nvar gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (\n    [].__proto__ === Array.prototype // eslint-disable-line no-proto\n        ? function (O) {\n            return O.__proto__; // eslint-disable-line no-proto\n        }\n        : null\n);\n\nfunction addNumericSeparator(num, str) {\n    if (\n        num === Infinity\n        || num === -Infinity\n        || num !== num\n        || (num && num > -1000 && num < 1000)\n        || $test.call(/e/, str)\n    ) {\n        return str;\n    }\n    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;\n    if (typeof num === 'number') {\n        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)\n        if (int !== num) {\n            var intStr = String(int);\n            var dec = $slice.call(str, intStr.length + 1);\n            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');\n        }\n    }\n    return $replace.call(str, sepRegex, '$&_');\n}\n\nvar utilInspect = __webpack_require__(/*! ./util.inspect */ \"?4f7e\");\nvar inspectCustom = utilInspect.custom;\nvar inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;\n\nmodule.exports = function inspect_(obj, options, depth, seen) {\n    var opts = options || {};\n\n    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {\n        throw new TypeError('option \"quoteStyle\" must be \"single\" or \"double\"');\n    }\n    if (\n        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'\n            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity\n            : opts.maxStringLength !== null\n        )\n    ) {\n        throw new TypeError('option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`');\n    }\n    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;\n    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {\n        throw new TypeError('option \"customInspect\", if provided, must be `true`, `false`, or `\\'symbol\\'`');\n    }\n\n    if (\n        has(opts, 'indent')\n        && opts.indent !== null\n        && opts.indent !== '\\t'\n        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)\n    ) {\n        throw new TypeError('option \"indent\" must be \"\\\\t\", an integer > 0, or `null`');\n    }\n    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {\n        throw new TypeError('option \"numericSeparator\", if provided, must be `true` or `false`');\n    }\n    var numericSeparator = opts.numericSeparator;\n\n    if (typeof obj === 'undefined') {\n        return 'undefined';\n    }\n    if (obj === null) {\n        return 'null';\n    }\n    if (typeof obj === 'boolean') {\n        return obj ? 'true' : 'false';\n    }\n\n    if (typeof obj === 'string') {\n        return inspectString(obj, opts);\n    }\n    if (typeof obj === 'number') {\n        if (obj === 0) {\n            return Infinity / obj > 0 ? '0' : '-0';\n        }\n        var str = String(obj);\n        return numericSeparator ? addNumericSeparator(obj, str) : str;\n    }\n    if (typeof obj === 'bigint') {\n        var bigIntStr = String(obj) + 'n';\n        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;\n    }\n\n    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;\n    if (typeof depth === 'undefined') { depth = 0; }\n    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {\n        return isArray(obj) ? '[Array]' : '[Object]';\n    }\n\n    var indent = getIndent(opts, depth);\n\n    if (typeof seen === 'undefined') {\n        seen = [];\n    } else if (indexOf(seen, obj) >= 0) {\n        return '[Circular]';\n    }\n\n    function inspect(value, from, noIndent) {\n        if (from) {\n            seen = $arrSlice.call(seen);\n            seen.push(from);\n        }\n        if (noIndent) {\n            var newOpts = {\n                depth: opts.depth\n            };\n            if (has(opts, 'quoteStyle')) {\n                newOpts.quoteStyle = opts.quoteStyle;\n            }\n            return inspect_(value, newOpts, depth + 1, seen);\n        }\n        return inspect_(value, opts, depth + 1, seen);\n    }\n\n    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable\n        var name = nameOf(obj);\n        var keys = arrObjKeys(obj, inspect);\n        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');\n    }\n    if (isSymbol(obj)) {\n        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\\(.*\\))_[^)]*$/, '$1') : symToString.call(obj);\n        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;\n    }\n    if (isElement(obj)) {\n        var s = '<' + $toLowerCase.call(String(obj.nodeName));\n        var attrs = obj.attributes || [];\n        for (var i = 0; i < attrs.length; i++) {\n            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);\n        }\n        s += '>';\n        if (obj.childNodes && obj.childNodes.length) { s += '...'; }\n        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';\n        return s;\n    }\n    if (isArray(obj)) {\n        if (obj.length === 0) { return '[]'; }\n        var xs = arrObjKeys(obj, inspect);\n        if (indent && !singleLineValues(xs)) {\n            return '[' + indentedJoin(xs, indent) + ']';\n        }\n        return '[ ' + $join.call(xs, ', ') + ' ]';\n    }\n    if (isError(obj)) {\n        var parts = arrObjKeys(obj, inspect);\n        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {\n            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';\n        }\n        if (parts.length === 0) { return '[' + String(obj) + ']'; }\n        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';\n    }\n    if (typeof obj === 'object' && customInspect) {\n        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {\n            return utilInspect(obj, { depth: maxDepth - depth });\n        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {\n            return obj.inspect();\n        }\n    }\n    if (isMap(obj)) {\n        var mapParts = [];\n        if (mapForEach) {\n            mapForEach.call(obj, function (value, key) {\n                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));\n            });\n        }\n        return collectionOf('Map', mapSize.call(obj), mapParts, indent);\n    }\n    if (isSet(obj)) {\n        var setParts = [];\n        if (setForEach) {\n            setForEach.call(obj, function (value) {\n                setParts.push(inspect(value, obj));\n            });\n        }\n        return collectionOf('Set', setSize.call(obj), setParts, indent);\n    }\n    if (isWeakMap(obj)) {\n        return weakCollectionOf('WeakMap');\n    }\n    if (isWeakSet(obj)) {\n        return weakCollectionOf('WeakSet');\n    }\n    if (isWeakRef(obj)) {\n        return weakCollectionOf('WeakRef');\n    }\n    if (isNumber(obj)) {\n        return markBoxed(inspect(Number(obj)));\n    }\n    if (isBigInt(obj)) {\n        return markBoxed(inspect(bigIntValueOf.call(obj)));\n    }\n    if (isBoolean(obj)) {\n        return markBoxed(booleanValueOf.call(obj));\n    }\n    if (isString(obj)) {\n        return markBoxed(inspect(String(obj)));\n    }\n    if (!isDate(obj) && !isRegExp(obj)) {\n        var ys = arrObjKeys(obj, inspect);\n        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;\n        var protoTag = obj instanceof Object ? '' : 'null prototype';\n        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';\n        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';\n        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');\n        if (ys.length === 0) { return tag + '{}'; }\n        if (indent) {\n            return tag + '{' + indentedJoin(ys, indent) + '}';\n        }\n        return tag + '{ ' + $join.call(ys, ', ') + ' }';\n    }\n    return String(obj);\n};\n\nfunction wrapQuotes(s, defaultStyle, opts) {\n    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '\"' : \"'\";\n    return quoteChar + s + quoteChar;\n}\n\nfunction quote(s) {\n    return $replace.call(String(s), /\"/g, '&quot;');\n}\n\nfunction isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\n\n// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives\nfunction isSymbol(obj) {\n    if (hasShammedSymbols) {\n        return obj && typeof obj === 'object' && obj instanceof Symbol;\n    }\n    if (typeof obj === 'symbol') {\n        return true;\n    }\n    if (!obj || typeof obj !== 'object' || !symToString) {\n        return false;\n    }\n    try {\n        symToString.call(obj);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nfunction isBigInt(obj) {\n    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {\n        return false;\n    }\n    try {\n        bigIntValueOf.call(obj);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nvar hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };\nfunction has(obj, key) {\n    return hasOwn.call(obj, key);\n}\n\nfunction toStr(obj) {\n    return objectToString.call(obj);\n}\n\nfunction nameOf(f) {\n    if (f.name) { return f.name; }\n    var m = $match.call(functionToString.call(f), /^function\\s*([\\w$]+)/);\n    if (m) { return m[1]; }\n    return null;\n}\n\nfunction indexOf(xs, x) {\n    if (xs.indexOf) { return xs.indexOf(x); }\n    for (var i = 0, l = xs.length; i < l; i++) {\n        if (xs[i] === x) { return i; }\n    }\n    return -1;\n}\n\nfunction isMap(x) {\n    if (!mapSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        mapSize.call(x);\n        try {\n            setSize.call(x);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof Map; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakMap(x) {\n    if (!weakMapHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakMapHas.call(x, weakMapHas);\n        try {\n            weakSetHas.call(x, weakSetHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakRef(x) {\n    if (!weakRefDeref || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakRefDeref.call(x);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nfunction isSet(x) {\n    if (!setSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        setSize.call(x);\n        try {\n            mapSize.call(x);\n        } catch (m) {\n            return true;\n        }\n        return x instanceof Set; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakSet(x) {\n    if (!weakSetHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakSetHas.call(x, weakSetHas);\n        try {\n            weakMapHas.call(x, weakMapHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isElement(x) {\n    if (!x || typeof x !== 'object') { return false; }\n    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {\n        return true;\n    }\n    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';\n}\n\nfunction inspectString(str, opts) {\n    if (str.length > opts.maxStringLength) {\n        var remaining = str.length - opts.maxStringLength;\n        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');\n        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;\n    }\n    // eslint-disable-next-line no-control-regex\n    var s = $replace.call($replace.call(str, /(['\\\\])/g, '\\\\$1'), /[\\x00-\\x1f]/g, lowbyte);\n    return wrapQuotes(s, 'single', opts);\n}\n\nfunction lowbyte(c) {\n    var n = c.charCodeAt(0);\n    var x = {\n        8: 'b',\n        9: 't',\n        10: 'n',\n        12: 'f',\n        13: 'r'\n    }[n];\n    if (x) { return '\\\\' + x; }\n    return '\\\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));\n}\n\nfunction markBoxed(str) {\n    return 'Object(' + str + ')';\n}\n\nfunction weakCollectionOf(type) {\n    return type + ' { ? }';\n}\n\nfunction collectionOf(type, size, entries, indent) {\n    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');\n    return type + ' (' + size + ') {' + joinedEntries + '}';\n}\n\nfunction singleLineValues(xs) {\n    for (var i = 0; i < xs.length; i++) {\n        if (indexOf(xs[i], '\\n') >= 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction getIndent(opts, depth) {\n    var baseIndent;\n    if (opts.indent === '\\t') {\n        baseIndent = '\\t';\n    } else if (typeof opts.indent === 'number' && opts.indent > 0) {\n        baseIndent = $join.call(Array(opts.indent + 1), ' ');\n    } else {\n        return null;\n    }\n    return {\n        base: baseIndent,\n        prev: $join.call(Array(depth + 1), baseIndent)\n    };\n}\n\nfunction indentedJoin(xs, indent) {\n    if (xs.length === 0) { return ''; }\n    var lineJoiner = '\\n' + indent.prev + indent.base;\n    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\\n' + indent.prev;\n}\n\nfunction arrObjKeys(obj, inspect) {\n    var isArr = isArray(obj);\n    var xs = [];\n    if (isArr) {\n        xs.length = obj.length;\n        for (var i = 0; i < obj.length; i++) {\n            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';\n        }\n    }\n    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];\n    var symMap;\n    if (hasShammedSymbols) {\n        symMap = {};\n        for (var k = 0; k < syms.length; k++) {\n            symMap['$' + syms[k]] = syms[k];\n        }\n    }\n\n    for (var key in obj) { // eslint-disable-line no-restricted-syntax\n        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {\n            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section\n            continue; // eslint-disable-line no-restricted-syntax, no-continue\n        } else if ($test.call(/[^\\w$]/, key)) {\n            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));\n        } else {\n            xs.push(key + ': ' + inspect(obj[key], obj));\n        }\n    }\n    if (typeof gOPS === 'function') {\n        for (var j = 0; j < syms.length; j++) {\n            if (isEnumerable.call(obj, syms[j])) {\n                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));\n            }\n        }\n    }\n    return xs;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/object-inspect/index.js?"
				);

				/***/
			},

		/***/ './node_modules/qs/lib/formats.js':
			/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
			/***/ function (module) {
				'use strict';
				eval(
					"\n\nvar replace = String.prototype.replace;\nvar percentTwenties = /%20/g;\n\nvar Format = {\n    RFC1738: 'RFC1738',\n    RFC3986: 'RFC3986'\n};\n\nmodule.exports = {\n    'default': Format.RFC3986,\n    formatters: {\n        RFC1738: function (value) {\n            return replace.call(value, percentTwenties, '+');\n        },\n        RFC3986: function (value) {\n            return String(value);\n        }\n    },\n    RFC1738: Format.RFC1738,\n    RFC3986: Format.RFC3986\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/qs/lib/formats.js?"
				);

				/***/
			},

		/***/ './node_modules/qs/lib/index.js':
			/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					'\n\nvar stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");\nvar parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");\nvar formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");\n\nmodule.exports = {\n    formats: formats,\n    parse: parse,\n    stringify: stringify\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/qs/lib/index.js?'
				);

				/***/
			},

		/***/ './node_modules/qs/lib/parse.js':
			/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\n\nvar has = Object.prototype.hasOwnProperty;\nvar isArray = Array.isArray;\n\nvar defaults = {\n    allowDots: false,\n    allowPrototypes: false,\n    allowSparse: false,\n    arrayLimit: 20,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    comma: false,\n    decoder: utils.decode,\n    delimiter: '&',\n    depth: 5,\n    ignoreQueryPrefix: false,\n    interpretNumericEntities: false,\n    parameterLimit: 1000,\n    parseArrays: true,\n    plainObjects: false,\n    strictNullHandling: false\n};\n\nvar interpretNumericEntities = function (str) {\n    return str.replace(/&#(\\d+);/g, function ($0, numberStr) {\n        return String.fromCharCode(parseInt(numberStr, 10));\n    });\n};\n\nvar parseArrayValue = function (val, options) {\n    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {\n        return val.split(',');\n    }\n\n    return val;\n};\n\n// This is what browsers will submit when the ✓ character occurs in an\n// application/x-www-form-urlencoded body and the encoding of the page containing\n// the form is iso-8859-1, or when the submitted form has an accept-charset\n// attribute of iso-8859-1. Presumably also with other charsets that do not contain\n// the ✓ character, such as us-ascii.\nvar isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')\n\n// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.\nvar charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')\n\nvar parseValues = function parseQueryStringValues(str, options) {\n    var obj = { __proto__: null };\n\n    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\\?/, '') : str;\n    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;\n    var parts = cleanStr.split(options.delimiter, limit);\n    var skipIndex = -1; // Keep track of where the utf8 sentinel was found\n    var i;\n\n    var charset = options.charset;\n    if (options.charsetSentinel) {\n        for (i = 0; i < parts.length; ++i) {\n            if (parts[i].indexOf('utf8=') === 0) {\n                if (parts[i] === charsetSentinel) {\n                    charset = 'utf-8';\n                } else if (parts[i] === isoSentinel) {\n                    charset = 'iso-8859-1';\n                }\n                skipIndex = i;\n                i = parts.length; // The eslint settings do not allow break;\n            }\n        }\n    }\n\n    for (i = 0; i < parts.length; ++i) {\n        if (i === skipIndex) {\n            continue;\n        }\n        var part = parts[i];\n\n        var bracketEqualsPos = part.indexOf(']=');\n        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;\n\n        var key, val;\n        if (pos === -1) {\n            key = options.decoder(part, defaults.decoder, charset, 'key');\n            val = options.strictNullHandling ? null : '';\n        } else {\n            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');\n            val = utils.maybeMap(\n                parseArrayValue(part.slice(pos + 1), options),\n                function (encodedVal) {\n                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');\n                }\n            );\n        }\n\n        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {\n            val = interpretNumericEntities(val);\n        }\n\n        if (part.indexOf('[]=') > -1) {\n            val = isArray(val) ? [val] : val;\n        }\n\n        if (has.call(obj, key)) {\n            obj[key] = utils.combine(obj[key], val);\n        } else {\n            obj[key] = val;\n        }\n    }\n\n    return obj;\n};\n\nvar parseObject = function (chain, val, options, valuesParsed) {\n    var leaf = valuesParsed ? val : parseArrayValue(val, options);\n\n    for (var i = chain.length - 1; i >= 0; --i) {\n        var obj;\n        var root = chain[i];\n\n        if (root === '[]' && options.parseArrays) {\n            obj = [].concat(leaf);\n        } else {\n            obj = options.plainObjects ? Object.create(null) : {};\n            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;\n            var index = parseInt(cleanRoot, 10);\n            if (!options.parseArrays && cleanRoot === '') {\n                obj = { 0: leaf };\n            } else if (\n                !isNaN(index)\n                && root !== cleanRoot\n                && String(index) === cleanRoot\n                && index >= 0\n                && (options.parseArrays && index <= options.arrayLimit)\n            ) {\n                obj = [];\n                obj[index] = leaf;\n            } else if (cleanRoot !== '__proto__') {\n                obj[cleanRoot] = leaf;\n            }\n        }\n\n        leaf = obj;\n    }\n\n    return leaf;\n};\n\nvar parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {\n    if (!givenKey) {\n        return;\n    }\n\n    // Transform dot notation to bracket notation\n    var key = options.allowDots ? givenKey.replace(/\\.([^.[]+)/g, '[$1]') : givenKey;\n\n    // The regex chunks\n\n    var brackets = /(\\[[^[\\]]*])/;\n    var child = /(\\[[^[\\]]*])/g;\n\n    // Get the parent\n\n    var segment = options.depth > 0 && brackets.exec(key);\n    var parent = segment ? key.slice(0, segment.index) : key;\n\n    // Stash the parent if it exists\n\n    var keys = [];\n    if (parent) {\n        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties\n        if (!options.plainObjects && has.call(Object.prototype, parent)) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n\n        keys.push(parent);\n    }\n\n    // Loop through children appending to the array until we hit depth\n\n    var i = 0;\n    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {\n        i += 1;\n        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n        keys.push(segment[1]);\n    }\n\n    // If there's a remainder, just add whatever is left\n\n    if (segment) {\n        keys.push('[' + key.slice(segment.index) + ']');\n    }\n\n    return parseObject(keys, val, options, valuesParsed);\n};\n\nvar normalizeParseOptions = function normalizeParseOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {\n        throw new TypeError('Decoder has to be a function.');\n    }\n\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;\n\n    return {\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,\n        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,\n        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,\n        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,\n        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,\n        // eslint-disable-next-line no-implicit-coercion, no-extra-parens\n        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,\n        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,\n        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,\n        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,\n        parseArrays: opts.parseArrays !== false,\n        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (str, opts) {\n    var options = normalizeParseOptions(opts);\n\n    if (str === '' || str === null || typeof str === 'undefined') {\n        return options.plainObjects ? Object.create(null) : {};\n    }\n\n    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;\n    var obj = options.plainObjects ? Object.create(null) : {};\n\n    // Iterate over the keys and setup the new object\n\n    var keys = Object.keys(tempObj);\n    for (var i = 0; i < keys.length; ++i) {\n        var key = keys[i];\n        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');\n        obj = utils.merge(obj, newObj, options);\n    }\n\n    if (options.allowSparse === true) {\n        return obj;\n    }\n\n    return utils.compact(obj);\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/qs/lib/parse.js?"
				);

				/***/
			},

		/***/ './node_modules/qs/lib/stringify.js':
			/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar getSideChannel = __webpack_require__(/*! side-channel */ \"./node_modules/side-channel/index.js\");\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\nvar has = Object.prototype.hasOwnProperty;\n\nvar arrayPrefixGenerators = {\n    brackets: function brackets(prefix) {\n        return prefix + '[]';\n    },\n    comma: 'comma',\n    indices: function indices(prefix, key) {\n        return prefix + '[' + key + ']';\n    },\n    repeat: function repeat(prefix) {\n        return prefix;\n    }\n};\n\nvar isArray = Array.isArray;\nvar push = Array.prototype.push;\nvar pushToArray = function (arr, valueOrArray) {\n    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);\n};\n\nvar toISO = Date.prototype.toISOString;\n\nvar defaultFormat = formats['default'];\nvar defaults = {\n    addQueryPrefix: false,\n    allowDots: false,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    delimiter: '&',\n    encode: true,\n    encoder: utils.encode,\n    encodeValuesOnly: false,\n    format: defaultFormat,\n    formatter: formats.formatters[defaultFormat],\n    // deprecated\n    indices: false,\n    serializeDate: function serializeDate(date) {\n        return toISO.call(date);\n    },\n    skipNulls: false,\n    strictNullHandling: false\n};\n\nvar isNonNullishPrimitive = function isNonNullishPrimitive(v) {\n    return typeof v === 'string'\n        || typeof v === 'number'\n        || typeof v === 'boolean'\n        || typeof v === 'symbol'\n        || typeof v === 'bigint';\n};\n\nvar sentinel = {};\n\nvar stringify = function stringify(\n    object,\n    prefix,\n    generateArrayPrefix,\n    commaRoundTrip,\n    strictNullHandling,\n    skipNulls,\n    encoder,\n    filter,\n    sort,\n    allowDots,\n    serializeDate,\n    format,\n    formatter,\n    encodeValuesOnly,\n    charset,\n    sideChannel\n) {\n    var obj = object;\n\n    var tmpSc = sideChannel;\n    var step = 0;\n    var findFlag = false;\n    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {\n        // Where object last appeared in the ref tree\n        var pos = tmpSc.get(object);\n        step += 1;\n        if (typeof pos !== 'undefined') {\n            if (pos === step) {\n                throw new RangeError('Cyclic object value');\n            } else {\n                findFlag = true; // Break while\n            }\n        }\n        if (typeof tmpSc.get(sentinel) === 'undefined') {\n            step = 0;\n        }\n    }\n\n    if (typeof filter === 'function') {\n        obj = filter(prefix, obj);\n    } else if (obj instanceof Date) {\n        obj = serializeDate(obj);\n    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {\n        obj = utils.maybeMap(obj, function (value) {\n            if (value instanceof Date) {\n                return serializeDate(value);\n            }\n            return value;\n        });\n    }\n\n    if (obj === null) {\n        if (strictNullHandling) {\n            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;\n        }\n\n        obj = '';\n    }\n\n    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {\n        if (encoder) {\n            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);\n            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];\n        }\n        return [formatter(prefix) + '=' + formatter(String(obj))];\n    }\n\n    var values = [];\n\n    if (typeof obj === 'undefined') {\n        return values;\n    }\n\n    var objKeys;\n    if (generateArrayPrefix === 'comma' && isArray(obj)) {\n        // we need to join elements in\n        if (encodeValuesOnly && encoder) {\n            obj = utils.maybeMap(obj, encoder);\n        }\n        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];\n    } else if (isArray(filter)) {\n        objKeys = filter;\n    } else {\n        var keys = Object.keys(obj);\n        objKeys = sort ? keys.sort(sort) : keys;\n    }\n\n    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;\n\n    for (var j = 0; j < objKeys.length; ++j) {\n        var key = objKeys[j];\n        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];\n\n        if (skipNulls && value === null) {\n            continue;\n        }\n\n        var keyPrefix = isArray(obj)\n            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix\n            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');\n\n        sideChannel.set(object, step);\n        var valueSideChannel = getSideChannel();\n        valueSideChannel.set(sentinel, sideChannel);\n        pushToArray(values, stringify(\n            value,\n            keyPrefix,\n            generateArrayPrefix,\n            commaRoundTrip,\n            strictNullHandling,\n            skipNulls,\n            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,\n            filter,\n            sort,\n            allowDots,\n            serializeDate,\n            format,\n            formatter,\n            encodeValuesOnly,\n            charset,\n            valueSideChannel\n        ));\n    }\n\n    return values;\n};\n\nvar normalizeStringifyOptions = function normalizeStringifyOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {\n        throw new TypeError('Encoder has to be a function.');\n    }\n\n    var charset = opts.charset || defaults.charset;\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n\n    var format = formats['default'];\n    if (typeof opts.format !== 'undefined') {\n        if (!has.call(formats.formatters, opts.format)) {\n            throw new TypeError('Unknown format option provided.');\n        }\n        format = opts.format;\n    }\n    var formatter = formats.formatters[format];\n\n    var filter = defaults.filter;\n    if (typeof opts.filter === 'function' || isArray(opts.filter)) {\n        filter = opts.filter;\n    }\n\n    return {\n        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,\n        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,\n        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,\n        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,\n        filter: filter,\n        format: format,\n        formatter: formatter,\n        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,\n        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,\n        sort: typeof opts.sort === 'function' ? opts.sort : null,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (object, opts) {\n    var obj = object;\n    var options = normalizeStringifyOptions(opts);\n\n    var objKeys;\n    var filter;\n\n    if (typeof options.filter === 'function') {\n        filter = options.filter;\n        obj = filter('', obj);\n    } else if (isArray(options.filter)) {\n        filter = options.filter;\n        objKeys = filter;\n    }\n\n    var keys = [];\n\n    if (typeof obj !== 'object' || obj === null) {\n        return '';\n    }\n\n    var arrayFormat;\n    if (opts && opts.arrayFormat in arrayPrefixGenerators) {\n        arrayFormat = opts.arrayFormat;\n    } else if (opts && 'indices' in opts) {\n        arrayFormat = opts.indices ? 'indices' : 'repeat';\n    } else {\n        arrayFormat = 'indices';\n    }\n\n    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];\n    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {\n        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');\n    }\n    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;\n\n    if (!objKeys) {\n        objKeys = Object.keys(obj);\n    }\n\n    if (options.sort) {\n        objKeys.sort(options.sort);\n    }\n\n    var sideChannel = getSideChannel();\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (options.skipNulls && obj[key] === null) {\n            continue;\n        }\n        pushToArray(keys, stringify(\n            obj[key],\n            key,\n            generateArrayPrefix,\n            commaRoundTrip,\n            options.strictNullHandling,\n            options.skipNulls,\n            options.encode ? options.encoder : null,\n            options.filter,\n            options.sort,\n            options.allowDots,\n            options.serializeDate,\n            options.format,\n            options.formatter,\n            options.encodeValuesOnly,\n            options.charset,\n            sideChannel\n        ));\n    }\n\n    var joined = keys.join(options.delimiter);\n    var prefix = options.addQueryPrefix === true ? '?' : '';\n\n    if (options.charsetSentinel) {\n        if (options.charset === 'iso-8859-1') {\n            // encodeURIComponent('&#10003;'), the \"numeric entity\" representation of a checkmark\n            prefix += 'utf8=%26%2310003%3B&';\n        } else {\n            // encodeURIComponent('✓')\n            prefix += 'utf8=%E2%9C%93&';\n        }\n    }\n\n    return joined.length > 0 ? prefix + joined : '';\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/qs/lib/stringify.js?"
				);

				/***/
			},

		/***/ './node_modules/qs/lib/utils.js':
			/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\n\nvar has = Object.prototype.hasOwnProperty;\nvar isArray = Array.isArray;\n\nvar hexTable = (function () {\n    var array = [];\n    for (var i = 0; i < 256; ++i) {\n        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());\n    }\n\n    return array;\n}());\n\nvar compactQueue = function compactQueue(queue) {\n    while (queue.length > 1) {\n        var item = queue.pop();\n        var obj = item.obj[item.prop];\n\n        if (isArray(obj)) {\n            var compacted = [];\n\n            for (var j = 0; j < obj.length; ++j) {\n                if (typeof obj[j] !== 'undefined') {\n                    compacted.push(obj[j]);\n                }\n            }\n\n            item.obj[item.prop] = compacted;\n        }\n    }\n};\n\nvar arrayToObject = function arrayToObject(source, options) {\n    var obj = options && options.plainObjects ? Object.create(null) : {};\n    for (var i = 0; i < source.length; ++i) {\n        if (typeof source[i] !== 'undefined') {\n            obj[i] = source[i];\n        }\n    }\n\n    return obj;\n};\n\nvar merge = function merge(target, source, options) {\n    /* eslint no-param-reassign: 0 */\n    if (!source) {\n        return target;\n    }\n\n    if (typeof source !== 'object') {\n        if (isArray(target)) {\n            target.push(source);\n        } else if (target && typeof target === 'object') {\n            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {\n                target[source] = true;\n            }\n        } else {\n            return [target, source];\n        }\n\n        return target;\n    }\n\n    if (!target || typeof target !== 'object') {\n        return [target].concat(source);\n    }\n\n    var mergeTarget = target;\n    if (isArray(target) && !isArray(source)) {\n        mergeTarget = arrayToObject(target, options);\n    }\n\n    if (isArray(target) && isArray(source)) {\n        source.forEach(function (item, i) {\n            if (has.call(target, i)) {\n                var targetItem = target[i];\n                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {\n                    target[i] = merge(targetItem, item, options);\n                } else {\n                    target.push(item);\n                }\n            } else {\n                target[i] = item;\n            }\n        });\n        return target;\n    }\n\n    return Object.keys(source).reduce(function (acc, key) {\n        var value = source[key];\n\n        if (has.call(acc, key)) {\n            acc[key] = merge(acc[key], value, options);\n        } else {\n            acc[key] = value;\n        }\n        return acc;\n    }, mergeTarget);\n};\n\nvar assign = function assignSingleSource(target, source) {\n    return Object.keys(source).reduce(function (acc, key) {\n        acc[key] = source[key];\n        return acc;\n    }, target);\n};\n\nvar decode = function (str, decoder, charset) {\n    var strWithoutPlus = str.replace(/\\+/g, ' ');\n    if (charset === 'iso-8859-1') {\n        // unescape never throws, no try...catch needed:\n        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);\n    }\n    // utf-8\n    try {\n        return decodeURIComponent(strWithoutPlus);\n    } catch (e) {\n        return strWithoutPlus;\n    }\n};\n\nvar encode = function encode(str, defaultEncoder, charset, kind, format) {\n    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.\n    // It has been adapted here for stricter adherence to RFC 3986\n    if (str.length === 0) {\n        return str;\n    }\n\n    var string = str;\n    if (typeof str === 'symbol') {\n        string = Symbol.prototype.toString.call(str);\n    } else if (typeof str !== 'string') {\n        string = String(str);\n    }\n\n    if (charset === 'iso-8859-1') {\n        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {\n            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';\n        });\n    }\n\n    var out = '';\n    for (var i = 0; i < string.length; ++i) {\n        var c = string.charCodeAt(i);\n\n        if (\n            c === 0x2D // -\n            || c === 0x2E // .\n            || c === 0x5F // _\n            || c === 0x7E // ~\n            || (c >= 0x30 && c <= 0x39) // 0-9\n            || (c >= 0x41 && c <= 0x5A) // a-z\n            || (c >= 0x61 && c <= 0x7A) // A-Z\n            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )\n        ) {\n            out += string.charAt(i);\n            continue;\n        }\n\n        if (c < 0x80) {\n            out = out + hexTable[c];\n            continue;\n        }\n\n        if (c < 0x800) {\n            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        if (c < 0xD800 || c >= 0xE000) {\n            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        i += 1;\n        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));\n        /* eslint operator-linebreak: [2, \"before\"] */\n        out += hexTable[0xF0 | (c >> 18)]\n            + hexTable[0x80 | ((c >> 12) & 0x3F)]\n            + hexTable[0x80 | ((c >> 6) & 0x3F)]\n            + hexTable[0x80 | (c & 0x3F)];\n    }\n\n    return out;\n};\n\nvar compact = function compact(value) {\n    var queue = [{ obj: { o: value }, prop: 'o' }];\n    var refs = [];\n\n    for (var i = 0; i < queue.length; ++i) {\n        var item = queue[i];\n        var obj = item.obj[item.prop];\n\n        var keys = Object.keys(obj);\n        for (var j = 0; j < keys.length; ++j) {\n            var key = keys[j];\n            var val = obj[key];\n            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {\n                queue.push({ obj: obj, prop: key });\n                refs.push(val);\n            }\n        }\n    }\n\n    compactQueue(queue);\n\n    return value;\n};\n\nvar isRegExp = function isRegExp(obj) {\n    return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar isBuffer = function isBuffer(obj) {\n    if (!obj || typeof obj !== 'object') {\n        return false;\n    }\n\n    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));\n};\n\nvar combine = function combine(a, b) {\n    return [].concat(a, b);\n};\n\nvar maybeMap = function maybeMap(val, fn) {\n    if (isArray(val)) {\n        var mapped = [];\n        for (var i = 0; i < val.length; i += 1) {\n            mapped.push(fn(val[i]));\n        }\n        return mapped;\n    }\n    return fn(val);\n};\n\nmodule.exports = {\n    arrayToObject: arrayToObject,\n    assign: assign,\n    combine: combine,\n    compact: compact,\n    decode: decode,\n    encode: encode,\n    isBuffer: isBuffer,\n    isRegExp: isRegExp,\n    maybeMap: maybeMap,\n    merge: merge\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/qs/lib/utils.js?"
				);

				/***/
			},

		/***/ './node_modules/side-channel/index.js':
			/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					"\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $WeakMap = GetIntrinsic('%WeakMap%', true);\nvar $Map = GetIntrinsic('%Map%', true);\n\nvar $weakMapGet = callBound('WeakMap.prototype.get', true);\nvar $weakMapSet = callBound('WeakMap.prototype.set', true);\nvar $weakMapHas = callBound('WeakMap.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSet = callBound('Map.prototype.set', true);\nvar $mapHas = callBound('Map.prototype.has', true);\n\n/*\n * This function traverses the list returning the node corresponding to the\n * given key.\n *\n * That node is also moved to the head of the list, so that if it's accessed\n * again we don't need to traverse the whole list. By doing so, all the recently\n * used nodes can be accessed relatively quickly.\n */\nvar listGetNode = function (list, key) { // eslint-disable-line consistent-return\n\tfor (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {\n\t\tif (curr.key === key) {\n\t\t\tprev.next = curr.next;\n\t\t\tcurr.next = list.next;\n\t\t\tlist.next = curr; // eslint-disable-line no-param-reassign\n\t\t\treturn curr;\n\t\t}\n\t}\n};\n\nvar listGet = function (objects, key) {\n\tvar node = listGetNode(objects, key);\n\treturn node && node.value;\n};\nvar listSet = function (objects, key, value) {\n\tvar node = listGetNode(objects, key);\n\tif (node) {\n\t\tnode.value = value;\n\t} else {\n\t\t// Prepend the new node to the beginning of the list\n\t\tobjects.next = { // eslint-disable-line no-param-reassign\n\t\t\tkey: key,\n\t\t\tnext: objects.next,\n\t\t\tvalue: value\n\t\t};\n\t}\n};\nvar listHas = function (objects, key) {\n\treturn !!listGetNode(objects, key);\n};\n\nmodule.exports = function getSideChannel() {\n\tvar $wm;\n\tvar $m;\n\tvar $o;\n\tvar channel = {\n\t\tassert: function (key) {\n\t\t\tif (!channel.has(key)) {\n\t\t\t\tthrow new $TypeError('Side channel does not contain ' + inspect(key));\n\t\t\t}\n\t\t},\n\t\tget: function (key) { // eslint-disable-line consistent-return\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapGet($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapGet($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn listGet($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\thas: function (key) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapHas($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapHas($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn listHas($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t},\n\t\tset: function (key, value) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif (!$wm) {\n\t\t\t\t\t$wm = new $WeakMap();\n\t\t\t\t}\n\t\t\t\t$weakMapSet($wm, key, value);\n\t\t\t} else if ($Map) {\n\t\t\t\tif (!$m) {\n\t\t\t\t\t$m = new $Map();\n\t\t\t\t}\n\t\t\t\t$mapSet($m, key, value);\n\t\t\t} else {\n\t\t\t\tif (!$o) {\n\t\t\t\t\t/*\n\t\t\t\t\t * Initialize the linked list as an empty node, so that we don't have\n\t\t\t\t\t * to special-case handling of the first node: we can always refer to\n\t\t\t\t\t * it as (previous node).next, instead of something like (list).head\n\t\t\t\t\t */\n\t\t\t\t\t$o = { key: {}, next: null };\n\t\t\t\t}\n\t\t\t\tlistSet($o, key, value);\n\t\t\t}\n\t\t}\n\t};\n\treturn channel;\n};\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/side-channel/index.js?"
				);

				/***/
			},

		/***/ './src/frontend/scss/ajax-load-more.scss':
			/*!***********************************************!*\
  !*** ./src/frontend/scss/ajax-load-more.scss ***!
  \***********************************************/
			/***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./ajax-load-more.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!./src/frontend/scss/ajax-load-more.scss");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__["default"] = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_3_ajax_load_more_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);\n\n\n//# sourceURL=webpack://ajaxloadmore/./src/frontend/scss/ajax-load-more.scss?'
				);

				/***/
			},

		/***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
			/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
			/***/ function (module) {
				'use strict';
				eval(
					'\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
				);

				/***/
			},

		/***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
			/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
			/***/ function (module) {
				'use strict';
				eval(
					'\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
				);

				/***/
			},

		/***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
			/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
			/***/ function (module) {
				'use strict';
				eval(
					'\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
				);

				/***/
			},

		/***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
			/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				'use strict';
				eval(
					'\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
				);

				/***/
			},

		/***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
			/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
			/***/ function (module) {
				'use strict';
				eval(
					'\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
				);

				/***/
			},

		/***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
			/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
			/***/ function (module) {
				'use strict';
				eval(
					'\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
				);

				/***/
			},

		/***/ '?9157':
			/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
			/***/ function () {
				eval('/* (ignored) */\n\n//# sourceURL=webpack://ajaxloadmore/crypto_(ignored)?');

				/***/
			},

		/***/ '?4f7e':
			/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
			/***/ function () {
				eval('/* (ignored) */\n\n//# sourceURL=webpack://ajaxloadmore/./util.inspect_(ignored)?');

				/***/
			},

		/***/ './node_modules/axios/lib/adapters/adapters.js':
			/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");\n/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n\n\n\n\n\nconst knownAdapters = {\n  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]\n}\n\n_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {\n  if(fn) {\n    try {\n      Object.defineProperty(fn, \'name\', {value});\n    } catch (e) {\n      // eslint-disable-next-line no-empty\n    }\n    Object.defineProperty(fn, \'adapterName\', {value});\n  }\n});\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  getAdapter: (adapters) => {\n    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];\n\n    const {length} = adapters;\n    let nameOrAdapter;\n    let adapter;\n\n    for (let i = 0; i < length; i++) {\n      nameOrAdapter = adapters[i];\n      if((adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {\n        break;\n      }\n    }\n\n    if (!adapter) {\n      if (adapter === false) {\n        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](\n          `Adapter ${nameOrAdapter} is not supported by the environment`,\n          \'ERR_NOT_SUPPORT\'\n        );\n      }\n\n      throw new Error(\n        _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ?\n          `Adapter \'${nameOrAdapter}\' is not available in the build` :\n          `Unknown adapter \'${nameOrAdapter}\'`\n      );\n    }\n\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {\n      throw new TypeError(\'adapter is not a function\');\n    }\n\n    return adapter;\n  },\n  adapters: knownAdapters\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/adapters/adapters.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/adapters/xhr.js':
			/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");\n/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");\n/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");\n/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");\n/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");\n/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction progressEventReducer(listener, isDownloadStream) {\n  let bytesNotified = 0;\n  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);\n\n  return e => {\n    const loaded = e.loaded;\n    const total = e.lengthComputable ? e.total : undefined;\n    const progressBytes = loaded - bytesNotified;\n    const rate = _speedometer(progressBytes);\n    const inRange = loaded <= total;\n\n    bytesNotified = loaded;\n\n    const data = {\n      loaded,\n      total,\n      progress: total ? (loaded / total) : undefined,\n      bytes: progressBytes,\n      rate: rate ? rate : undefined,\n      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,\n      event: e\n    };\n\n    data[isDownloadStream ? \'download\' : \'upload\'] = true;\n\n    listener(data);\n  };\n}\n\nconst isXHRAdapterSupported = typeof XMLHttpRequest !== \'undefined\';\n\n/* harmony default export */ __webpack_exports__["default"] = (isXHRAdapterSupported && function (config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    let requestData = config.data;\n    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();\n    const responseType = config.responseType;\n    let onCanceled;\n    function done() {\n      if (config.cancelToken) {\n        config.cancelToken.unsubscribe(onCanceled);\n      }\n\n      if (config.signal) {\n        config.signal.removeEventListener(\'abort\', onCanceled);\n      }\n    }\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {\n      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {\n        requestHeaders.setContentType(false); // Let the browser set it\n      } else {\n        requestHeaders.setContentType(\'multipart/form-data;\', false); // mobile/desktop app frameworks\n      }\n    }\n\n    let request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      const username = config.auth.username || \'\';\n      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : \'\';\n      requestHeaders.set(\'Authorization\', \'Basic \' + btoa(username + \':\' + password));\n    }\n\n    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);\n\n    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    function onloadend() {\n      if (!request) {\n        return;\n      }\n      // Prepare the response\n      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(\n        \'getAllResponseHeaders\' in request && request.getAllResponseHeaders()\n      );\n      const responseData = !responseType || responseType === \'text\' || responseType === \'json\' ?\n        request.responseText : request.response;\n      const response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config,\n        request\n      };\n\n      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {\n        resolve(value);\n        done();\n      }, function _reject(err) {\n        reject(err);\n        done();\n      }, response);\n\n      // Clean up request\n      request = null;\n    }\n\n    if (\'onloadend\' in request) {\n      // Use onloadend if available\n      request.onloadend = onloadend;\n    } else {\n      // Listen for ready state to emulate onloadend\n      request.onreadystatechange = function handleLoad() {\n        if (!request || request.readyState !== 4) {\n          return;\n        }\n\n        // The request errored out and we didn\'t get a response, this will be\n        // handled by onerror instead\n        // With one exception: request that using file: protocol, most browsers\n        // will return status as 0 even though it\'s a successful request\n        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf(\'file:\') === 0)) {\n          return;\n        }\n        // readystate handler is calling before onerror or ontimeout handlers,\n        // so we should call onloadend on the next \'tick\'\n        setTimeout(onloadend);\n      };\n    }\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](\'Request aborted\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it\'s a network error\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](\'Network Error\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      let timeoutErrorMessage = config.timeout ? \'timeout of \' + config.timeout + \'ms exceeded\' : \'timeout exceeded\';\n      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](\n        timeoutErrorMessage,\n        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,\n        config,\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we\'re in a web worker, or react-native.\n    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {\n      // Add xsrf header\n      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))\n        && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);\n\n      if (xsrfValue) {\n        requestHeaders.set(config.xsrfHeaderName, xsrfValue);\n      }\n    }\n\n    // Remove Content-Type if data is undefined\n    requestData === undefined && requestHeaders.setContentType(null);\n\n    // Add headers to the request\n    if (\'setRequestHeader\' in request) {\n      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {\n        request.setRequestHeader(key, val);\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (responseType && responseType !== \'json\') {\n      request.responseType = config.responseType;\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === \'function\') {\n      request.addEventListener(\'progress\', progressEventReducer(config.onDownloadProgress, true));\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === \'function\' && request.upload) {\n      request.upload.addEventListener(\'progress\', progressEventReducer(config.onUploadProgress));\n    }\n\n    if (config.cancelToken || config.signal) {\n      // Handle cancellation\n      // eslint-disable-next-line func-names\n      onCanceled = cancel => {\n        if (!request) {\n          return;\n        }\n        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);\n        request.abort();\n        request = null;\n      };\n\n      config.cancelToken && config.cancelToken.subscribe(onCanceled);\n      if (config.signal) {\n        config.signal.aborted ? onCanceled() : config.signal.addEventListener(\'abort\', onCanceled);\n      }\n    }\n\n    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);\n\n    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](\'Unsupported protocol \' + protocol + \':\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));\n      return;\n    }\n\n\n    // Send the request\n    request.send(requestData || null);\n  });\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/adapters/xhr.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/axios.js':
			/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");\n/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");\n/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");\n/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");\n/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");\n/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");\n/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");\n/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");\n/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");\n/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n *\n * @returns {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);\n  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);\n\n  // Copy axios.prototype to instance\n  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});\n\n  // Copy context to instance\n  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});\n\n  // Factory for creating new instances\n  instance.create = function create(instanceConfig) {\n    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));\n  };\n\n  return instance;\n}\n\n// Create the default instance to be exported\nconst axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];\n\n// Expose Cancel & CancelToken\naxios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];\naxios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];\naxios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];\naxios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;\naxios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];\n\n// Expose AxiosError class\naxios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];\n\n// alias for CanceledError for backward compatibility\naxios.Cancel = axios.CanceledError;\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\n\naxios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];\n\n// Expose isAxiosError\naxios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];\n\n// Expose mergeConfig\naxios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];\n\naxios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];\n\naxios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);\n\naxios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;\n\naxios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];\n\naxios.default = axios;\n\n// this module should only have a default export\n/* harmony default export */ __webpack_exports__["default"] = (axios);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/axios.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/cancel/CancelToken.js':
			/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n\n\n\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @param {Function} executor The executor function.\n *\n * @returns {CancelToken}\n */\nclass CancelToken {\n  constructor(executor) {\n    if (typeof executor !== \'function\') {\n      throw new TypeError(\'executor must be a function.\');\n    }\n\n    let resolvePromise;\n\n    this.promise = new Promise(function promiseExecutor(resolve) {\n      resolvePromise = resolve;\n    });\n\n    const token = this;\n\n    // eslint-disable-next-line func-names\n    this.promise.then(cancel => {\n      if (!token._listeners) return;\n\n      let i = token._listeners.length;\n\n      while (i-- > 0) {\n        token._listeners[i](cancel);\n      }\n      token._listeners = null;\n    });\n\n    // eslint-disable-next-line func-names\n    this.promise.then = onfulfilled => {\n      let _resolve;\n      // eslint-disable-next-line func-names\n      const promise = new Promise(resolve => {\n        token.subscribe(resolve);\n        _resolve = resolve;\n      }).then(onfulfilled);\n\n      promise.cancel = function reject() {\n        token.unsubscribe(_resolve);\n      };\n\n      return promise;\n    };\n\n    executor(function cancel(message, config, request) {\n      if (token.reason) {\n        // Cancellation has already been requested\n        return;\n      }\n\n      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);\n      resolvePromise(token.reason);\n    });\n  }\n\n  /**\n   * Throws a `CanceledError` if cancellation has been requested.\n   */\n  throwIfRequested() {\n    if (this.reason) {\n      throw this.reason;\n    }\n  }\n\n  /**\n   * Subscribe to the cancel signal\n   */\n\n  subscribe(listener) {\n    if (this.reason) {\n      listener(this.reason);\n      return;\n    }\n\n    if (this._listeners) {\n      this._listeners.push(listener);\n    } else {\n      this._listeners = [listener];\n    }\n  }\n\n  /**\n   * Unsubscribe from the cancel signal\n   */\n\n  unsubscribe(listener) {\n    if (!this._listeners) {\n      return;\n    }\n    const index = this._listeners.indexOf(listener);\n    if (index !== -1) {\n      this._listeners.splice(index, 1);\n    }\n  }\n\n  /**\n   * Returns an object that contains a new `CancelToken` and a function that, when called,\n   * cancels the `CancelToken`.\n   */\n  static source() {\n    let cancel;\n    const token = new CancelToken(function executor(c) {\n      cancel = c;\n    });\n    return {\n      token,\n      cancel\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (CancelToken);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/cancel/CancelToken.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/cancel/CanceledError.js':
			/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\n\n/**\n * A `CanceledError` is an object that is thrown when an operation is canceled.\n *\n * @param {string=} message The message.\n * @param {Object=} config The config.\n * @param {Object=} request The request.\n *\n * @returns {CanceledError} The created error.\n */\nfunction CanceledError(message, config, request) {\n  // eslint-disable-next-line no-eq-null,eqeqeq\n  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? \'canceled\' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);\n  this.name = \'CanceledError\';\n}\n\n_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {\n  __CANCEL__: true\n});\n\n/* harmony default export */ __webpack_exports__["default"] = (CanceledError);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/cancel/CanceledError.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/cancel/isCancel.js':
			/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ isCancel; }\n/* harmony export */ });\n\n\nfunction isCancel(value) {\n  return !!(value && value.__CANCEL__);\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/cancel/isCancel.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/Axios.js':
			/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");\n/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");\n/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");\n/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");\n/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");\n/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");\n/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n\n\n\n\n\n\n\n\n\n\n\nconst validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n *\n * @return {Axios} A new instance of Axios\n */\nclass Axios {\n  constructor(instanceConfig) {\n    this.defaults = instanceConfig;\n    this.interceptors = {\n      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),\n      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()\n    };\n  }\n\n  /**\n   * Dispatch a request\n   *\n   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)\n   * @param {?Object} config\n   *\n   * @returns {Promise} The Promise to be fulfilled\n   */\n  request(configOrUrl, config) {\n    /*eslint no-param-reassign:0*/\n    // Allow for axios(\'example/url\'[, config]) a la fetch API\n    if (typeof configOrUrl === \'string\') {\n      config = config || {};\n      config.url = configOrUrl;\n    } else {\n      config = configOrUrl || {};\n    }\n\n    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);\n\n    const {transitional, paramsSerializer, headers} = config;\n\n    if (transitional !== undefined) {\n      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {\n        silentJSONParsing: validators.transitional(validators.boolean),\n        forcedJSONParsing: validators.transitional(validators.boolean),\n        clarifyTimeoutError: validators.transitional(validators.boolean)\n      }, false);\n    }\n\n    if (paramsSerializer != null) {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {\n        config.paramsSerializer = {\n          serialize: paramsSerializer\n        }\n      } else {\n        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {\n          encode: validators.function,\n          serialize: validators.function\n        }, true);\n      }\n    }\n\n    // Set config.method\n    config.method = (config.method || this.defaults.method || \'get\').toLowerCase();\n\n    // Flatten headers\n    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(\n      headers.common,\n      headers[config.method]\n    );\n\n    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(\n      [\'delete\', \'get\', \'head\', \'post\', \'put\', \'patch\', \'common\'],\n      (method) => {\n        delete headers[method];\n      }\n    );\n\n    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);\n\n    // filter out skipped interceptors\n    const requestInterceptorChain = [];\n    let synchronousRequestInterceptors = true;\n    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n      if (typeof interceptor.runWhen === \'function\' && interceptor.runWhen(config) === false) {\n        return;\n      }\n\n      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;\n\n      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);\n    });\n\n    const responseInterceptorChain = [];\n    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);\n    });\n\n    let promise;\n    let i = 0;\n    let len;\n\n    if (!synchronousRequestInterceptors) {\n      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];\n      chain.unshift.apply(chain, requestInterceptorChain);\n      chain.push.apply(chain, responseInterceptorChain);\n      len = chain.length;\n\n      promise = Promise.resolve(config);\n\n      while (i < len) {\n        promise = promise.then(chain[i++], chain[i++]);\n      }\n\n      return promise;\n    }\n\n    len = requestInterceptorChain.length;\n\n    let newConfig = config;\n\n    i = 0;\n\n    while (i < len) {\n      const onFulfilled = requestInterceptorChain[i++];\n      const onRejected = requestInterceptorChain[i++];\n      try {\n        newConfig = onFulfilled(newConfig);\n      } catch (error) {\n        onRejected.call(this, error);\n        break;\n      }\n    }\n\n    try {\n      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);\n    } catch (error) {\n      return Promise.reject(error);\n    }\n\n    i = 0;\n    len = responseInterceptorChain.length;\n\n    while (i < len) {\n      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);\n    }\n\n    return promise;\n  }\n\n  getUri(config) {\n    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);\n    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);\n    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);\n  }\n}\n\n// Provide aliases for supported request methods\n_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach([\'delete\', \'get\', \'head\', \'options\'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {\n      method,\n      url,\n      data: (config || {}).data\n    }));\n  };\n});\n\n_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach([\'post\', \'put\', \'patch\'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n\n  function generateHTTPMethod(isForm) {\n    return function httpMethod(url, data, config) {\n      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {\n        method,\n        headers: isForm ? {\n          \'Content-Type\': \'multipart/form-data\'\n        } : {},\n        url,\n        data\n      }));\n    };\n  }\n\n  Axios.prototype[method] = generateHTTPMethod();\n\n  Axios.prototype[method + \'Form\'] = generateHTTPMethod(true);\n});\n\n/* harmony default export */ __webpack_exports__["default"] = (Axios);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/Axios.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/AxiosError.js':
			/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./node_modules/axios/lib/utils.js\");\n\n\n\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [config] The config.\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n *\n * @returns {Error} The created error.\n */\nfunction AxiosError(message, code, config, request, response) {\n  Error.call(this);\n\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, this.constructor);\n  } else {\n    this.stack = (new Error()).stack;\n  }\n\n  this.message = message;\n  this.name = 'AxiosError';\n  code && (this.code = code);\n  config && (this.config = config);\n  request && (this.request = request);\n  response && (this.response = response);\n}\n\n_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inherits(AxiosError, Error, {\n  toJSON: function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toJSONObject(this.config),\n      code: this.code,\n      status: this.response && this.response.status ? this.response.status : null\n    };\n  }\n});\n\nconst prototype = AxiosError.prototype;\nconst descriptors = {};\n\n[\n  'ERR_BAD_OPTION_VALUE',\n  'ERR_BAD_OPTION',\n  'ECONNABORTED',\n  'ETIMEDOUT',\n  'ERR_NETWORK',\n  'ERR_FR_TOO_MANY_REDIRECTS',\n  'ERR_DEPRECATED',\n  'ERR_BAD_RESPONSE',\n  'ERR_BAD_REQUEST',\n  'ERR_CANCELED',\n  'ERR_NOT_SUPPORT',\n  'ERR_INVALID_URL'\n// eslint-disable-next-line func-names\n].forEach(code => {\n  descriptors[code] = {value: code};\n});\n\nObject.defineProperties(AxiosError, descriptors);\nObject.defineProperty(prototype, 'isAxiosError', {value: true});\n\n// eslint-disable-next-line func-names\nAxiosError.from = (error, code, config, request, response, customProps) => {\n  const axiosError = Object.create(prototype);\n\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toFlatObject(error, axiosError, function filter(obj) {\n    return obj !== Error.prototype;\n  }, prop => {\n    return prop !== 'isAxiosError';\n  });\n\n  AxiosError.call(axiosError, error.message, code, config, request, response);\n\n  axiosError.cause = error;\n\n  axiosError.name = error.name;\n\n  customProps && Object.assign(axiosError, customProps);\n\n  return axiosError;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AxiosError);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/AxiosError.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/AxiosHeaders.js':
			/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");\n\n\n\n\n\nconst $internals = Symbol(\'internals\');\n\nfunction normalizeHeader(header) {\n  return header && String(header).trim().toLowerCase();\n}\n\nfunction normalizeValue(value) {\n  if (value === false || value == null) {\n    return value;\n  }\n\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);\n}\n\nfunction parseTokens(str) {\n  const tokens = Object.create(null);\n  const tokensRE = /([^\\s,;=]+)\\s*(?:=\\s*([^,;]+))?/g;\n  let match;\n\n  while ((match = tokensRE.exec(str))) {\n    tokens[match[1]] = match[2];\n  }\n\n  return tokens;\n}\n\nconst isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&\'*+.]+$/.test(str.trim());\n\nfunction matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {\n    return filter.call(this, value, header);\n  }\n\n  if (isHeaderNameFilter) {\n    value = header;\n  }\n\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;\n\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {\n    return value.indexOf(filter) !== -1;\n  }\n\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {\n    return filter.test(value);\n  }\n}\n\nfunction formatHeader(header) {\n  return header.trim()\n    .toLowerCase().replace(/([a-z\\d])(\\w*)/g, (w, char, str) => {\n      return char.toUpperCase() + str;\n    });\n}\n\nfunction buildAccessors(obj, header) {\n  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(\' \' + header);\n\n  [\'get\', \'set\', \'has\'].forEach(methodName => {\n    Object.defineProperty(obj, methodName + accessorName, {\n      value: function(arg1, arg2, arg3) {\n        return this[methodName].call(this, header, arg1, arg2, arg3);\n      },\n      configurable: true\n    });\n  });\n}\n\nclass AxiosHeaders {\n  constructor(headers) {\n    headers && this.set(headers);\n  }\n\n  set(header, valueOrRewrite, rewrite) {\n    const self = this;\n\n    function setHeader(_value, _header, _rewrite) {\n      const lHeader = normalizeHeader(_header);\n\n      if (!lHeader) {\n        throw new Error(\'header name must be a non-empty string\');\n      }\n\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);\n\n      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {\n        self[key || _header] = normalizeValue(_value);\n      }\n    }\n\n    const setHeaders = (headers, _rewrite) =>\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {\n      setHeaders(header, valueOrRewrite)\n    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {\n      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);\n    } else {\n      header != null && setHeader(valueOrRewrite, header, rewrite);\n    }\n\n    return this;\n  }\n\n  get(header, parser) {\n    header = normalizeHeader(header);\n\n    if (header) {\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);\n\n      if (key) {\n        const value = this[key];\n\n        if (!parser) {\n          return value;\n        }\n\n        if (parser === true) {\n          return parseTokens(value);\n        }\n\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {\n          return parser.call(this, value, key);\n        }\n\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {\n          return parser.exec(value);\n        }\n\n        throw new TypeError(\'parser must be boolean|regexp|function\');\n      }\n    }\n  }\n\n  has(header, matcher) {\n    header = normalizeHeader(header);\n\n    if (header) {\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);\n\n      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));\n    }\n\n    return false;\n  }\n\n  delete(header, matcher) {\n    const self = this;\n    let deleted = false;\n\n    function deleteHeader(_header) {\n      _header = normalizeHeader(_header);\n\n      if (_header) {\n        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);\n\n        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {\n          delete self[key];\n\n          deleted = true;\n        }\n      }\n    }\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {\n      header.forEach(deleteHeader);\n    } else {\n      deleteHeader(header);\n    }\n\n    return deleted;\n  }\n\n  clear(matcher) {\n    const keys = Object.keys(this);\n    let i = keys.length;\n    let deleted = false;\n\n    while (i--) {\n      const key = keys[i];\n      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {\n        delete this[key];\n        deleted = true;\n      }\n    }\n\n    return deleted;\n  }\n\n  normalize(format) {\n    const self = this;\n    const headers = {};\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);\n\n      if (key) {\n        self[key] = normalizeValue(value);\n        delete self[header];\n        return;\n      }\n\n      const normalized = format ? formatHeader(header) : String(header).trim();\n\n      if (normalized !== header) {\n        delete self[header];\n      }\n\n      self[normalized] = normalizeValue(value);\n\n      headers[normalized] = true;\n    });\n\n    return this;\n  }\n\n  concat(...targets) {\n    return this.constructor.concat(this, ...targets);\n  }\n\n  toJSON(asStrings) {\n    const obj = Object.create(null);\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {\n      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(\', \') : value);\n    });\n\n    return obj;\n  }\n\n  [Symbol.iterator]() {\n    return Object.entries(this.toJSON())[Symbol.iterator]();\n  }\n\n  toString() {\n    return Object.entries(this.toJSON()).map(([header, value]) => header + \': \' + value).join(\'\\n\');\n  }\n\n  get [Symbol.toStringTag]() {\n    return \'AxiosHeaders\';\n  }\n\n  static from(thing) {\n    return thing instanceof this ? thing : new this(thing);\n  }\n\n  static concat(first, ...targets) {\n    const computed = new this(first);\n\n    targets.forEach((target) => computed.set(target));\n\n    return computed;\n  }\n\n  static accessor(header) {\n    const internals = this[$internals] = (this[$internals] = {\n      accessors: {}\n    });\n\n    const accessors = internals.accessors;\n    const prototype = this.prototype;\n\n    function defineAccessor(_header) {\n      const lHeader = normalizeHeader(_header);\n\n      if (!accessors[lHeader]) {\n        buildAccessors(prototype, _header);\n        accessors[lHeader] = true;\n      }\n    }\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);\n\n    return this;\n  }\n}\n\nAxiosHeaders.accessor([\'Content-Type\', \'Content-Length\', \'Accept\', \'Accept-Encoding\', \'User-Agent\', \'Authorization\']);\n\n// reserved names hotfix\n_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {\n  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`\n  return {\n    get: () => value,\n    set(headerValue) {\n      this[mapped] = headerValue;\n    }\n  }\n});\n\n_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);\n\n/* harmony default export */ __webpack_exports__["default"] = (AxiosHeaders);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/AxiosHeaders.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/InterceptorManager.js':
			/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\nclass InterceptorManager {\n  constructor() {\n    this.handlers = [];\n  }\n\n  /**\n   * Add a new interceptor to the stack\n   *\n   * @param {Function} fulfilled The function to handle `then` for a `Promise`\n   * @param {Function} rejected The function to handle `reject` for a `Promise`\n   *\n   * @return {Number} An ID used to remove interceptor later\n   */\n  use(fulfilled, rejected, options) {\n    this.handlers.push({\n      fulfilled,\n      rejected,\n      synchronous: options ? options.synchronous : false,\n      runWhen: options ? options.runWhen : null\n    });\n    return this.handlers.length - 1;\n  }\n\n  /**\n   * Remove an interceptor from the stack\n   *\n   * @param {Number} id The ID that was returned by `use`\n   *\n   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise\n   */\n  eject(id) {\n    if (this.handlers[id]) {\n      this.handlers[id] = null;\n    }\n  }\n\n  /**\n   * Clear all interceptors from the stack\n   *\n   * @returns {void}\n   */\n  clear() {\n    if (this.handlers) {\n      this.handlers = [];\n    }\n  }\n\n  /**\n   * Iterate over all the registered interceptors\n   *\n   * This method is particularly useful for skipping over any\n   * interceptors that may have become `null` calling `eject`.\n   *\n   * @param {Function} fn The function to call for each interceptor\n   *\n   * @returns {void}\n   */\n  forEach(fn) {\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {\n      if (h !== null) {\n        fn(h);\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (InterceptorManager);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/InterceptorManager.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/buildFullPath.js':
			/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ buildFullPath; }\n/* harmony export */ });\n/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");\n/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");\n\n\n\n\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n *\n * @returns {string} The combined full path\n */\nfunction buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {\n    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);\n  }\n  return requestedURL;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/buildFullPath.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/dispatchRequest.js':
			/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ dispatchRequest; }\n/* harmony export */ });\n/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");\n/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");\n/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");\n\n\n\n\n\n\n\n\n\n/**\n * Throws a `CanceledError` if cancellation has been requested.\n *\n * @param {Object} config The config that is to be used for the request\n *\n * @returns {void}\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n\n  if (config.signal && config.signal.aborted) {\n    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n *\n * @returns {Promise} The Promise to be fulfilled\n */\nfunction dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);\n\n  // Transform request data\n  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(\n    config,\n    config.transformRequest\n  );\n\n  if ([\'post\', \'put\', \'patch\'].indexOf(config.method) !== -1) {\n    config.headers.setContentType(\'application/x-www-form-urlencoded\', false);\n  }\n\n  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(\n      config,\n      config.transformResponse,\n      response\n    );\n\n    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(\n          config,\n          config.transformResponse,\n          reason.response\n        );\n        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/dispatchRequest.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/mergeConfig.js':
			/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ mergeConfig; }\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n\n\n\n\n\nconst headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n *\n * @returns {Object} New object resulting from merging config2 to config1\n */\nfunction mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  const config = {};\n\n  function getMergedValue(target, source, caseless) {\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {\n      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);\n    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {\n      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);\n    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDeepProperties(a, b, caseless) {\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {\n      return getMergedValue(a, b, caseless);\n    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {\n      return getMergedValue(undefined, a, caseless);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function valueFromConfig2(a, b) {\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {\n      return getMergedValue(undefined, b);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function defaultToConfig2(a, b) {\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {\n      return getMergedValue(undefined, b);\n    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {\n      return getMergedValue(undefined, a);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDirectKeys(a, b, prop) {\n    if (prop in config2) {\n      return getMergedValue(a, b);\n    } else if (prop in config1) {\n      return getMergedValue(undefined, a);\n    }\n  }\n\n  const mergeMap = {\n    url: valueFromConfig2,\n    method: valueFromConfig2,\n    data: valueFromConfig2,\n    baseURL: defaultToConfig2,\n    transformRequest: defaultToConfig2,\n    transformResponse: defaultToConfig2,\n    paramsSerializer: defaultToConfig2,\n    timeout: defaultToConfig2,\n    timeoutMessage: defaultToConfig2,\n    withCredentials: defaultToConfig2,\n    adapter: defaultToConfig2,\n    responseType: defaultToConfig2,\n    xsrfCookieName: defaultToConfig2,\n    xsrfHeaderName: defaultToConfig2,\n    onUploadProgress: defaultToConfig2,\n    onDownloadProgress: defaultToConfig2,\n    decompress: defaultToConfig2,\n    maxContentLength: defaultToConfig2,\n    maxBodyLength: defaultToConfig2,\n    beforeRedirect: defaultToConfig2,\n    transport: defaultToConfig2,\n    httpAgent: defaultToConfig2,\n    httpsAgent: defaultToConfig2,\n    cancelToken: defaultToConfig2,\n    socketPath: defaultToConfig2,\n    responseEncoding: defaultToConfig2,\n    validateStatus: mergeDirectKeys,\n    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)\n  };\n\n  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {\n    const merge = mergeMap[prop] || mergeDeepProperties;\n    const configValue = merge(config1[prop], config2[prop], prop);\n    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);\n  });\n\n  return config;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/mergeConfig.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/settle.js':
			/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ settle; }\n/* harmony export */ });\n/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n\n\n\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n *\n * @returns {object} The response.\n */\nfunction settle(resolve, reject, response) {\n  const validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](\n      \'Request failed with status code \' + response.status,\n      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],\n      response.config,\n      response.request,\n      response\n    ));\n  }\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/settle.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/core/transformData.js':
			/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ transformData; }\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n\n\n\n\n\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Array|Function} fns A single function or Array of functions\n * @param {?Object} response The response object\n *\n * @returns {*} The resulting transformed data\n */\nfunction transformData(fns, response) {\n  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];\n  const context = response || config;\n  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);\n  let data = context.data;\n\n  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {\n    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);\n  });\n\n  headers.normalize();\n\n  return data;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/core/transformData.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/defaults/index.js':
			/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");\n/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");\n/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");\n/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");\n\n\n\n\n\n\n\n\n\n\n/**\n * It takes a string, tries to parse it, and if it fails, it returns the stringified version\n * of the input\n *\n * @param {any} rawValue - The value to be stringified.\n * @param {Function} parser - A function that parses a string into a JavaScript object.\n * @param {Function} encoder - A function that takes a value and returns a string.\n *\n * @returns {string} A stringified version of the rawValue.\n */\nfunction stringifySafely(rawValue, parser, encoder) {\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {\n    try {\n      (parser || JSON.parse)(rawValue);\n      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);\n    } catch (e) {\n      if (e.name !== \'SyntaxError\') {\n        throw e;\n      }\n    }\n  }\n\n  return (encoder || JSON.stringify)(rawValue);\n}\n\nconst defaults = {\n\n  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n\n  adapter: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].isNode ? \'http\' : \'xhr\',\n\n  transformRequest: [function transformRequest(data, headers) {\n    const contentType = headers.getContentType() || \'\';\n    const hasJSONContentType = contentType.indexOf(\'application/json\') > -1;\n    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);\n\n    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {\n      data = new FormData(data);\n    }\n\n    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);\n\n    if (isFormData) {\n      if (!hasJSONContentType) {\n        return data;\n      }\n      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data)) : data;\n    }\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)\n    ) {\n      return data;\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {\n      headers.setContentType(\'application/x-www-form-urlencoded;charset=utf-8\', false);\n      return data.toString();\n    }\n\n    let isFileList;\n\n    if (isObjectPayload) {\n      if (contentType.indexOf(\'application/x-www-form-urlencoded\') > -1) {\n        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data, this.formSerializer).toString();\n      }\n\n      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf(\'multipart/form-data\') > -1) {\n        const _FormData = this.env && this.env.FormData;\n\n        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_5__["default"])(\n          isFileList ? {\'files[]\': data} : data,\n          _FormData && new _FormData(),\n          this.formSerializer\n        );\n      }\n    }\n\n    if (isObjectPayload || hasJSONContentType ) {\n      headers.setContentType(\'application/json\', false);\n      return stringifySafely(data);\n    }\n\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    const transitional = this.transitional || defaults.transitional;\n    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;\n    const JSONRequested = this.responseType === \'json\';\n\n    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {\n      const silentJSONParsing = transitional && transitional.silentJSONParsing;\n      const strictJSONParsing = !silentJSONParsing && JSONRequested;\n\n      try {\n        return JSON.parse(data);\n      } catch (e) {\n        if (strictJSONParsing) {\n          if (e.name === \'SyntaxError\') {\n            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_6__["default"].ERR_BAD_RESPONSE, this, null, this.response);\n          }\n          throw e;\n        }\n      }\n    }\n\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: \'XSRF-TOKEN\',\n  xsrfHeaderName: \'X-XSRF-TOKEN\',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  env: {\n    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.FormData,\n    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].classes.Blob\n  },\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  },\n\n  headers: {\n    common: {\n      \'Accept\': \'application/json, text/plain, */*\',\n      \'Content-Type\': undefined\n    }\n  }\n};\n\n_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach([\'delete\', \'get\', \'head\', \'post\', \'put\', \'patch\'], (method) => {\n  defaults.headers[method] = {};\n});\n\n/* harmony default export */ __webpack_exports__["default"] = (defaults);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/defaults/index.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/defaults/transitional.js':
			/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n  silentJSONParsing: true,\n  forcedJSONParsing: true,\n  clarifyTimeoutError: false\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/defaults/transitional.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/env/data.js':
			/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VERSION: function() { return /* binding */ VERSION; }\n/* harmony export */ });\nconst VERSION = "1.5.0";\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/env/data.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/AxiosURLSearchParams.js':
			/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ \"./node_modules/axios/lib/helpers/toFormData.js\");\n\n\n\n\n/**\n * It encodes a string by replacing all characters that are not in the unreserved set with\n * their percent-encoded equivalents\n *\n * @param {string} str - The string to encode.\n *\n * @returns {string} The encoded string.\n */\nfunction encode(str) {\n  const charMap = {\n    '!': '%21',\n    \"'\": '%27',\n    '(': '%28',\n    ')': '%29',\n    '~': '%7E',\n    '%20': '+',\n    '%00': '\\x00'\n  };\n  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {\n    return charMap[match];\n  });\n}\n\n/**\n * It takes a params object and converts it to a FormData object\n *\n * @param {Object<string, any>} params - The parameters to be converted to a FormData object.\n * @param {Object<string, any>} options - The options object passed to the Axios constructor.\n *\n * @returns {void}\n */\nfunction AxiosURLSearchParams(params, options) {\n  this._pairs = [];\n\n  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, this, options);\n}\n\nconst prototype = AxiosURLSearchParams.prototype;\n\nprototype.append = function append(name, value) {\n  this._pairs.push([name, value]);\n};\n\nprototype.toString = function toString(encoder) {\n  const _encode = encoder ? function(value) {\n    return encoder.call(this, value, encode);\n  } : encode;\n\n  return this._pairs.map(function each(pair) {\n    return _encode(pair[0]) + '=' + _encode(pair[1]);\n  }, '').join('&');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AxiosURLSearchParams);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/AxiosURLSearchParams.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/HttpStatusCode.js':
			/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\nconst HttpStatusCode = {\n  Continue: 100,\n  SwitchingProtocols: 101,\n  Processing: 102,\n  EarlyHints: 103,\n  Ok: 200,\n  Created: 201,\n  Accepted: 202,\n  NonAuthoritativeInformation: 203,\n  NoContent: 204,\n  ResetContent: 205,\n  PartialContent: 206,\n  MultiStatus: 207,\n  AlreadyReported: 208,\n  ImUsed: 226,\n  MultipleChoices: 300,\n  MovedPermanently: 301,\n  Found: 302,\n  SeeOther: 303,\n  NotModified: 304,\n  UseProxy: 305,\n  Unused: 306,\n  TemporaryRedirect: 307,\n  PermanentRedirect: 308,\n  BadRequest: 400,\n  Unauthorized: 401,\n  PaymentRequired: 402,\n  Forbidden: 403,\n  NotFound: 404,\n  MethodNotAllowed: 405,\n  NotAcceptable: 406,\n  ProxyAuthenticationRequired: 407,\n  RequestTimeout: 408,\n  Conflict: 409,\n  Gone: 410,\n  LengthRequired: 411,\n  PreconditionFailed: 412,\n  PayloadTooLarge: 413,\n  UriTooLong: 414,\n  UnsupportedMediaType: 415,\n  RangeNotSatisfiable: 416,\n  ExpectationFailed: 417,\n  ImATeapot: 418,\n  MisdirectedRequest: 421,\n  UnprocessableEntity: 422,\n  Locked: 423,\n  FailedDependency: 424,\n  TooEarly: 425,\n  UpgradeRequired: 426,\n  PreconditionRequired: 428,\n  TooManyRequests: 429,\n  RequestHeaderFieldsTooLarge: 431,\n  UnavailableForLegalReasons: 451,\n  InternalServerError: 500,\n  NotImplemented: 501,\n  BadGateway: 502,\n  ServiceUnavailable: 503,\n  GatewayTimeout: 504,\n  HttpVersionNotSupported: 505,\n  VariantAlsoNegotiates: 506,\n  InsufficientStorage: 507,\n  LoopDetected: 508,\n  NotExtended: 510,\n  NetworkAuthenticationRequired: 511,\n};\n\nObject.entries(HttpStatusCode).forEach(([key, value]) => {\n  HttpStatusCode[value] = key;\n});\n\n/* harmony default export */ __webpack_exports__["default"] = (HttpStatusCode);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/HttpStatusCode.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/bind.js':
			/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ bind; }\n/* harmony export */ });\n\n\nfunction bind(fn, thisArg) {\n  return function wrap() {\n    return fn.apply(thisArg, arguments);\n  };\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/bind.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/buildURL.js':
			/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ buildURL; }\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./node_modules/axios/lib/utils.js\");\n/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ \"./node_modules/axios/lib/helpers/AxiosURLSearchParams.js\");\n\n\n\n\n\n/**\n * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their\n * URI encoded counterparts\n *\n * @param {string} val The value to be encoded.\n *\n * @returns {string} The encoded value.\n */\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @param {?object} options\n *\n * @returns {string} The formatted url\n */\nfunction buildURL(url, params, options) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n  \n  const _encode = options && options.encode || encode;\n\n  const serializeFn = options && options.serialize;\n\n  let serializedParams;\n\n  if (serializeFn) {\n    serializedParams = serializeFn(params, options);\n  } else {\n    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isURLSearchParams(params) ?\n      params.toString() :\n      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](params, options).toString(_encode);\n  }\n\n  if (serializedParams) {\n    const hashmarkIndex = url.indexOf(\"#\");\n\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/buildURL.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/combineURLs.js':
			/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ combineURLs; }\n/* harmony export */ });\n\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n *\n * @returns {string} The combined URL\n */\nfunction combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/combineURLs.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/cookies.js':
			/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ \"./node_modules/axios/lib/utils.js\");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ \"./node_modules/axios/lib/platform/browser/index.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isStandardBrowserEnv ?\n\n// Standard browser envs support document.cookie\n  (function standardBrowserEnv() {\n    return {\n      write: function write(name, value, expires, path, domain, secure) {\n        const cookie = [];\n        cookie.push(name + '=' + encodeURIComponent(value));\n\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isNumber(expires)) {\n          cookie.push('expires=' + new Date(expires).toGMTString());\n        }\n\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isString(path)) {\n          cookie.push('path=' + path);\n        }\n\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isString(domain)) {\n          cookie.push('domain=' + domain);\n        }\n\n        if (secure === true) {\n          cookie.push('secure');\n        }\n\n        document.cookie = cookie.join('; ');\n      },\n\n      read: function read(name) {\n        const match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n        return (match ? decodeURIComponent(match[3]) : null);\n      },\n\n      remove: function remove(name) {\n        this.write(name, '', Date.now() - 86400000);\n      }\n    };\n  })() :\n\n// Non standard browser env (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return {\n      write: function write() {},\n      read: function read() { return null; },\n      remove: function remove() {}\n    };\n  })());\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/cookies.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/formDataToJSON.js':
			/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\n/**\n * It takes a string like `foo[x][y][z]` and returns an array like `[\'foo\', \'x\', \'y\', \'z\']\n *\n * @param {string} name - The name of the property to get.\n *\n * @returns An array of strings.\n */\nfunction parsePropPath(name) {\n  // foo[x][y][z]\n  // foo.x.y.z\n  // foo-x-y-z\n  // foo x y z\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\\w+|\\[(\\w*)]/g, name).map(match => {\n    return match[0] === \'[]\' ? \'\' : match[1] || match[0];\n  });\n}\n\n/**\n * Convert an array to an object.\n *\n * @param {Array<any>} arr - The array to convert to an object.\n *\n * @returns An object with the same keys and values as the array.\n */\nfunction arrayToObject(arr) {\n  const obj = {};\n  const keys = Object.keys(arr);\n  let i;\n  const len = keys.length;\n  let key;\n  for (i = 0; i < len; i++) {\n    key = keys[i];\n    obj[key] = arr[key];\n  }\n  return obj;\n}\n\n/**\n * It takes a FormData object and returns a JavaScript object\n *\n * @param {string} formData The FormData object to convert to JSON.\n *\n * @returns {Object<string, any> | null} The converted object.\n */\nfunction formDataToJSON(formData) {\n  function buildPath(path, value, target, index) {\n    let name = path[index++];\n    const isNumericKey = Number.isFinite(+name);\n    const isLast = index >= path.length;\n    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;\n\n    if (isLast) {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {\n        target[name] = [target[name], value];\n      } else {\n        target[name] = value;\n      }\n\n      return !isNumericKey;\n    }\n\n    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {\n      target[name] = [];\n    }\n\n    const result = buildPath(path, value, target[name], index);\n\n    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {\n      target[name] = arrayToObject(target[name]);\n    }\n\n    return !isNumericKey;\n  }\n\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {\n    const obj = {};\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {\n      buildPath(parsePropPath(name), value, obj, 0);\n    });\n\n    return obj;\n  }\n\n  return null;\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (formDataToJSON);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/formDataToJSON.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/isAbsoluteURL.js':
			/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ isAbsoluteURL; }\n/* harmony export */ });\n\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n *\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nfunction isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d+\\-.]*:)?\\/\\//i.test(url);\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/isAbsoluteURL.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/isAxiosError.js':
			/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ isAxiosError; }\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n *\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nfunction isAxiosError(payload) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/isAxiosError.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/isURLSameOrigin.js':
			/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ \"./node_modules/axios/lib/utils.js\");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ \"./node_modules/axios/lib/platform/browser/index.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isStandardBrowserEnv ?\n\n// Standard browser envs have full support of the APIs needed to test\n// whether the request URL is of the same origin as current location.\n  (function standardBrowserEnv() {\n    const msie = /(msie|trident)/i.test(navigator.userAgent);\n    const urlParsingNode = document.createElement('a');\n    let originURL;\n\n    /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n    function resolveURL(url) {\n      let href = url;\n\n      if (msie) {\n        // IE needs attribute set twice to normalize properties\n        urlParsingNode.setAttribute('href', href);\n        href = urlParsingNode.href;\n      }\n\n      urlParsingNode.setAttribute('href', href);\n\n      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n      return {\n        href: urlParsingNode.href,\n        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n        host: urlParsingNode.host,\n        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n        hostname: urlParsingNode.hostname,\n        port: urlParsingNode.port,\n        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n          urlParsingNode.pathname :\n          '/' + urlParsingNode.pathname\n      };\n    }\n\n    originURL = resolveURL(window.location.href);\n\n    /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n    return function isURLSameOrigin(requestURL) {\n      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n      return (parsed.protocol === originURL.protocol &&\n          parsed.host === originURL.host);\n    };\n  })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return function isURLSameOrigin() {\n      return true;\n    };\n  })());\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/isURLSameOrigin.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/null.js':
			/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n// eslint-disable-next-line strict\n/* harmony default export */ __webpack_exports__["default"] = (null);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/null.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/parseHeaders.js':
			/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ \"./node_modules/axios/lib/utils.js\");\n\n\n\n\n// RawAxiosHeaders whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nconst ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toObjectSet([\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n]);\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} rawHeaders Headers needing to be parsed\n *\n * @returns {Object} Headers parsed into an object\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (rawHeaders => {\n  const parsed = {};\n  let key;\n  let val;\n  let i;\n\n  rawHeaders && rawHeaders.split('\\n').forEach(function parser(line) {\n    i = line.indexOf(':');\n    key = line.substring(0, i).trim().toLowerCase();\n    val = line.substring(i + 1).trim();\n\n    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {\n      return;\n    }\n\n    if (key === 'set-cookie') {\n      if (parsed[key]) {\n        parsed[key].push(val);\n      } else {\n        parsed[key] = [val];\n      }\n    } else {\n      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n    }\n  });\n\n  return parsed;\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/parseHeaders.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/parseProtocol.js':
			/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ parseProtocol; }\n/* harmony export */ });\n\n\nfunction parseProtocol(url) {\n  const match = /^([-+\\w]{1,25})(:?\\/\\/|:)/.exec(url);\n  return match && match[1] || \'\';\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/parseProtocol.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/speedometer.js':
			/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n\n\n/**\n * Calculate data maxRate\n * @param {Number} [samplesCount= 10]\n * @param {Number} [min= 1000]\n * @returns {Function}\n */\nfunction speedometer(samplesCount, min) {\n  samplesCount = samplesCount || 10;\n  const bytes = new Array(samplesCount);\n  const timestamps = new Array(samplesCount);\n  let head = 0;\n  let tail = 0;\n  let firstSampleTS;\n\n  min = min !== undefined ? min : 1000;\n\n  return function push(chunkLength) {\n    const now = Date.now();\n\n    const startedAt = timestamps[tail];\n\n    if (!firstSampleTS) {\n      firstSampleTS = now;\n    }\n\n    bytes[head] = chunkLength;\n    timestamps[head] = now;\n\n    let i = tail;\n    let bytesCount = 0;\n\n    while (i !== head) {\n      bytesCount += bytes[i++];\n      i = i % samplesCount;\n    }\n\n    head = (head + 1) % samplesCount;\n\n    if (head === tail) {\n      tail = (tail + 1) % samplesCount;\n    }\n\n    if (now - firstSampleTS < min) {\n      return;\n    }\n\n    const passed = startedAt && now - startedAt;\n\n    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;\n  };\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (speedometer);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/speedometer.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/spread.js':
			/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ spread; }\n/* harmony export */ });\n\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n *\n * @returns {Function}\n */\nfunction spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/spread.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/toFormData.js':
			/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");\n\n\n\n\n// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored\n\n\n/**\n * Determines if the given thing is a array or js object.\n *\n * @param {string} thing - The object or array to be visited.\n *\n * @returns {boolean}\n */\nfunction isVisitable(thing) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);\n}\n\n/**\n * It removes the brackets from the end of a string\n *\n * @param {string} key - The key of the parameter.\n *\n * @returns {string} the key without the brackets.\n */\nfunction removeBrackets(key) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, \'[]\') ? key.slice(0, -2) : key;\n}\n\n/**\n * It takes a path, a key, and a boolean, and returns a string\n *\n * @param {string} path - The path to the current key.\n * @param {string} key - The key of the current object being iterated over.\n * @param {string} dots - If true, the key will be rendered with dots instead of brackets.\n *\n * @returns {string} The path to the current key.\n */\nfunction renderKey(path, key, dots) {\n  if (!path) return key;\n  return path.concat(key).map(function each(token, i) {\n    // eslint-disable-next-line no-param-reassign\n    token = removeBrackets(token);\n    return !dots && i ? \'[\' + token + \']\' : token;\n  }).join(dots ? \'.\' : \'\');\n}\n\n/**\n * If the array is an array and none of its elements are visitable, then it\'s a flat array.\n *\n * @param {Array<any>} arr - The array to check\n *\n * @returns {boolean}\n */\nfunction isFlatArray(arr) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);\n}\n\nconst predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {\n  return /^is[A-Z]/.test(prop);\n});\n\n/**\n * Convert a data object to FormData\n *\n * @param {Object} obj\n * @param {?Object} [formData]\n * @param {?Object} [options]\n * @param {Function} [options.visitor]\n * @param {Boolean} [options.metaTokens = true]\n * @param {Boolean} [options.dots = false]\n * @param {?Boolean} [options.indexes = false]\n *\n * @returns {Object}\n **/\n\n/**\n * It converts an object into a FormData object\n *\n * @param {Object<any, any>} obj - The object to convert to form data.\n * @param {string} formData - The FormData object to append to.\n * @param {Object<string, any>} options\n *\n * @returns\n */\nfunction toFormData(obj, formData, options) {\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {\n    throw new TypeError(\'target must be an object\');\n  }\n\n  // eslint-disable-next-line no-param-reassign\n  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();\n\n  // eslint-disable-next-line no-param-reassign\n  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {\n    metaTokens: true,\n    dots: false,\n    indexes: false\n  }, false, function defined(option, source) {\n    // eslint-disable-next-line no-eq-null,eqeqeq\n    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);\n  });\n\n  const metaTokens = options.metaTokens;\n  // eslint-disable-next-line no-use-before-define\n  const visitor = options.visitor || defaultVisitor;\n  const dots = options.dots;\n  const indexes = options.indexes;\n  const _Blob = options.Blob || typeof Blob !== \'undefined\' && Blob;\n  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);\n\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {\n    throw new TypeError(\'visitor must be a function\');\n  }\n\n  function convertValue(value) {\n    if (value === null) return \'\';\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {\n      return value.toISOString();\n    }\n\n    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](\'Blob is not supported. Use a Buffer instead.\');\n    }\n\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {\n      return useBlob && typeof Blob === \'function\' ? new Blob([value]) : Buffer.from(value);\n    }\n\n    return value;\n  }\n\n  /**\n   * Default visitor.\n   *\n   * @param {*} value\n   * @param {String|Number} key\n   * @param {Array<String|Number>} path\n   * @this {FormData}\n   *\n   * @returns {boolean} return true to visit the each prop of the value recursively\n   */\n  function defaultVisitor(value, key, path) {\n    let arr = value;\n\n    if (value && !path && typeof value === \'object\') {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, \'{}\')) {\n        // eslint-disable-next-line no-param-reassign\n        key = metaTokens ? key : key.slice(0, -2);\n        // eslint-disable-next-line no-param-reassign\n        value = JSON.stringify(value);\n      } else if (\n        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||\n        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, \'[]\')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))\n        )) {\n        // eslint-disable-next-line no-param-reassign\n        key = removeBrackets(key);\n\n        arr.forEach(function each(el, index) {\n          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(\n            // eslint-disable-next-line no-nested-ternary\n            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + \'[]\'),\n            convertValue(el)\n          );\n        });\n        return false;\n      }\n    }\n\n    if (isVisitable(value)) {\n      return true;\n    }\n\n    formData.append(renderKey(path, key, dots), convertValue(value));\n\n    return false;\n  }\n\n  const stack = [];\n\n  const exposedHelpers = Object.assign(predicates, {\n    defaultVisitor,\n    convertValue,\n    isVisitable\n  });\n\n  function build(value, path) {\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;\n\n    if (stack.indexOf(value) !== -1) {\n      throw Error(\'Circular reference detected in \' + path.join(\'.\'));\n    }\n\n    stack.push(value);\n\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {\n      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(\n        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers\n      );\n\n      if (result === true) {\n        build(el, path ? path.concat(key) : [key]);\n      }\n    });\n\n    stack.pop();\n  }\n\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {\n    throw new TypeError(\'data must be an object\');\n  }\n\n  build(obj);\n\n  return formData;\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (toFormData);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/toFormData.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/toURLEncodedForm.js':
			/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ toURLEncodedForm; }\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");\n\n\n\n\n\n\nfunction toURLEncodedForm(data, options) {\n  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({\n    visitor: function(value, key, path, helpers) {\n      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {\n        this.append(key, value.toString(\'base64\'));\n        return false;\n      }\n\n      return helpers.defaultVisitor.apply(this, arguments);\n    }\n  }, options));\n}\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/toURLEncodedForm.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/helpers/validator.js':
			/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ \"./node_modules/axios/lib/env/data.js\");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ \"./node_modules/axios/lib/core/AxiosError.js\");\n\n\n\n\n\nconst validators = {};\n\n// eslint-disable-next-line func-names\n['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {\n  validators[type] = function validator(thing) {\n    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;\n  };\n});\n\nconst deprecatedWarnings = {};\n\n/**\n * Transitional option validator\n *\n * @param {function|boolean?} validator - set to false if the transitional option has been removed\n * @param {string?} version - deprecated version / removed since version\n * @param {string?} message - some message with additional info\n *\n * @returns {function}\n */\nvalidators.transitional = function transitional(validator, version, message) {\n  function formatMessage(opt, desc) {\n    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \\'' + opt + '\\'' + desc + (message ? '. ' + message : '');\n  }\n\n  // eslint-disable-next-line func-names\n  return (value, opt, opts) => {\n    if (validator === false) {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),\n        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_DEPRECATED\n      );\n    }\n\n    if (version && !deprecatedWarnings[opt]) {\n      deprecatedWarnings[opt] = true;\n      // eslint-disable-next-line no-console\n      console.warn(\n        formatMessage(\n          opt,\n          ' has been deprecated since v' + version + ' and will be removed in the near future'\n        )\n      );\n    }\n\n    return validator ? validator(value, opt, opts) : true;\n  };\n};\n\n/**\n * Assert object's properties type\n *\n * @param {object} options\n * @param {object} schema\n * @param {boolean?} allowUnknown\n *\n * @returns {object}\n */\n\nfunction assertOptions(options, schema, allowUnknown) {\n  if (typeof options !== 'object') {\n    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_BAD_OPTION_VALUE);\n  }\n  const keys = Object.keys(options);\n  let i = keys.length;\n  while (i-- > 0) {\n    const opt = keys[i];\n    const validator = schema[opt];\n    if (validator) {\n      const value = options[opt];\n      const result = value === undefined || validator(value, opt, options);\n      if (result !== true) {\n        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_BAD_OPTION_VALUE);\n      }\n      continue;\n    }\n    if (allowUnknown !== true) {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_BAD_OPTION);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  assertOptions,\n  validators\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/helpers/validator.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/platform/browser/classes/Blob.js':
			/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__["default"] = (typeof Blob !== \'undefined\' ? Blob : null);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/platform/browser/classes/Blob.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/platform/browser/classes/FormData.js':
			/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__["default"] = (typeof FormData !== \'undefined\' ? FormData : null);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/platform/browser/classes/FormData.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/platform/browser/classes/URLSearchParams.js':
			/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (typeof URLSearchParams !== \'undefined\' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js?'
				);

				/***/
			},

		/***/ './node_modules/axios/lib/platform/browser/index.js':
			/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ \"./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js\");\n/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ \"./node_modules/axios/lib/platform/browser/classes/FormData.js\");\n/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ \"./node_modules/axios/lib/platform/browser/classes/Blob.js\");\n\n\n\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n *\n * @returns {boolean}\n */\nconst isStandardBrowserEnv = (() => {\n  let product;\n  if (typeof navigator !== 'undefined' && (\n    (product = navigator.product) === 'ReactNative' ||\n    product === 'NativeScript' ||\n    product === 'NS')\n  ) {\n    return false;\n  }\n\n  return typeof window !== 'undefined' && typeof document !== 'undefined';\n})();\n\n/**\n * Determine if we're running in a standard browser webWorker environment\n *\n * Although the `isStandardBrowserEnv` method indicates that\n * `allows axios to run in a web worker`, the WebWorker will still be\n * filtered out due to its judgment standard\n * `typeof window !== 'undefined' && typeof document !== 'undefined'`.\n * This leads to a problem when axios post `FormData` in webWorker\n */\n const isStandardBrowserWebWorkerEnv = (() => {\n  return (\n    typeof WorkerGlobalScope !== 'undefined' &&\n    // eslint-disable-next-line no-undef\n    self instanceof WorkerGlobalScope &&\n    typeof self.importScripts === 'function'\n  );\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isBrowser: true,\n  classes: {\n    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  isStandardBrowserEnv,\n  isStandardBrowserWebWorkerEnv,\n  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/platform/browser/index.js?"
				);

				/***/
			},

		/***/ './node_modules/axios/lib/utils.js':
			/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
			/***/ function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
				'use strict';
				eval(
					"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n\n\n\n// utils is a library of generic helper functions non-specific to axios\n\nconst {toString} = Object.prototype;\nconst {getPrototypeOf} = Object;\n\nconst kindOf = (cache => thing => {\n    const str = toString.call(thing);\n    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());\n})(Object.create(null));\n\nconst kindOfTest = (type) => {\n  type = type.toLowerCase();\n  return (thing) => kindOf(thing) === type\n}\n\nconst typeOfTest = type => thing => typeof thing === type;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n *\n * @returns {boolean} True if value is an Array, otherwise false\n */\nconst {isArray} = Array;\n\n/**\n * Determine if a value is undefined\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nconst isUndefined = typeOfTest('undefined');\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nconst isArrayBuffer = kindOfTest('ArrayBuffer');\n\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  let result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a String, otherwise false\n */\nconst isString = typeOfTest('string');\n\n/**\n * Determine if a value is a Function\n *\n * @param {*} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nconst isFunction = typeOfTest('function');\n\n/**\n * Determine if a value is a Number\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Number, otherwise false\n */\nconst isNumber = typeOfTest('number');\n\n/**\n * Determine if a value is an Object\n *\n * @param {*} thing The value to test\n *\n * @returns {boolean} True if value is an Object, otherwise false\n */\nconst isObject = (thing) => thing !== null && typeof thing === 'object';\n\n/**\n * Determine if a value is a Boolean\n *\n * @param {*} thing The value to test\n * @returns {boolean} True if value is a Boolean, otherwise false\n */\nconst isBoolean = thing => thing === true || thing === false;\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a plain Object, otherwise false\n */\nconst isPlainObject = (val) => {\n  if (kindOf(val) !== 'object') {\n    return false;\n  }\n\n  const prototype = getPrototypeOf(val);\n  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Date, otherwise false\n */\nconst isDate = kindOfTest('Date');\n\n/**\n * Determine if a value is a File\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a File, otherwise false\n */\nconst isFile = kindOfTest('File');\n\n/**\n * Determine if a value is a Blob\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nconst isBlob = kindOfTest('Blob');\n\n/**\n * Determine if a value is a FileList\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a File, otherwise false\n */\nconst isFileList = kindOfTest('FileList');\n\n/**\n * Determine if a value is a Stream\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nconst isStream = (val) => isObject(val) && isFunction(val.pipe);\n\n/**\n * Determine if a value is a FormData\n *\n * @param {*} thing The value to test\n *\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nconst isFormData = (thing) => {\n  let kind;\n  return thing && (\n    (typeof FormData === 'function' && thing instanceof FormData) || (\n      isFunction(thing.append) && (\n        (kind = kindOf(thing)) === 'formdata' ||\n        // detect form-data instance\n        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')\n      )\n    )\n  )\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nconst isURLSearchParams = kindOfTest('URLSearchParams');\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n *\n * @returns {String} The String freed of excess whitespace\n */\nconst trim = (str) => str.trim ?\n  str.trim() : str.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, '');\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n *\n * @param {Boolean} [allOwnKeys = false]\n * @returns {any}\n */\nfunction forEach(obj, fn, {allOwnKeys = false} = {}) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  let i;\n  let l;\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);\n    const len = keys.length;\n    let key;\n\n    for (i = 0; i < len; i++) {\n      key = keys[i];\n      fn.call(null, obj[key], key, obj);\n    }\n  }\n}\n\nfunction findKey(obj, key) {\n  key = key.toLowerCase();\n  const keys = Object.keys(obj);\n  let i = keys.length;\n  let _key;\n  while (i-- > 0) {\n    _key = keys[i];\n    if (key === _key.toLowerCase()) {\n      return _key;\n    }\n  }\n  return null;\n}\n\nconst _global = (() => {\n  /*eslint no-undef:0*/\n  if (typeof globalThis !== \"undefined\") return globalThis;\n  return typeof self !== \"undefined\" ? self : (typeof window !== 'undefined' ? window : global)\n})();\n\nconst isContextDefined = (context) => !isUndefined(context) && context !== _global;\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n *\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  const {caseless} = isContextDefined(this) && this || {};\n  const result = {};\n  const assignValue = (val, key) => {\n    const targetKey = caseless && findKey(result, key) || key;\n    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {\n      result[targetKey] = merge(result[targetKey], val);\n    } else if (isPlainObject(val)) {\n      result[targetKey] = merge({}, val);\n    } else if (isArray(val)) {\n      result[targetKey] = val.slice();\n    } else {\n      result[targetKey] = val;\n    }\n  }\n\n  for (let i = 0, l = arguments.length; i < l; i++) {\n    arguments[i] && forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n *\n * @param {Boolean} [allOwnKeys]\n * @returns {Object} The resulting value of object a\n */\nconst extend = (a, b, thisArg, {allOwnKeys}= {}) => {\n  forEach(b, (val, key) => {\n    if (thisArg && isFunction(val)) {\n      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  }, {allOwnKeys});\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n *\n * @returns {string} content value without BOM\n */\nconst stripBOM = (content) => {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\n/**\n * Inherit the prototype methods from one constructor into another\n * @param {function} constructor\n * @param {function} superConstructor\n * @param {object} [props]\n * @param {object} [descriptors]\n *\n * @returns {void}\n */\nconst inherits = (constructor, superConstructor, props, descriptors) => {\n  constructor.prototype = Object.create(superConstructor.prototype, descriptors);\n  constructor.prototype.constructor = constructor;\n  Object.defineProperty(constructor, 'super', {\n    value: superConstructor.prototype\n  });\n  props && Object.assign(constructor.prototype, props);\n}\n\n/**\n * Resolve object with deep prototype chain to a flat object\n * @param {Object} sourceObj source object\n * @param {Object} [destObj]\n * @param {Function|Boolean} [filter]\n * @param {Function} [propFilter]\n *\n * @returns {Object}\n */\nconst toFlatObject = (sourceObj, destObj, filter, propFilter) => {\n  let props;\n  let i;\n  let prop;\n  const merged = {};\n\n  destObj = destObj || {};\n  // eslint-disable-next-line no-eq-null,eqeqeq\n  if (sourceObj == null) return destObj;\n\n  do {\n    props = Object.getOwnPropertyNames(sourceObj);\n    i = props.length;\n    while (i-- > 0) {\n      prop = props[i];\n      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {\n        destObj[prop] = sourceObj[prop];\n        merged[prop] = true;\n      }\n    }\n    sourceObj = filter !== false && getPrototypeOf(sourceObj);\n  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);\n\n  return destObj;\n}\n\n/**\n * Determines whether a string ends with the characters of a specified string\n *\n * @param {String} str\n * @param {String} searchString\n * @param {Number} [position= 0]\n *\n * @returns {boolean}\n */\nconst endsWith = (str, searchString, position) => {\n  str = String(str);\n  if (position === undefined || position > str.length) {\n    position = str.length;\n  }\n  position -= searchString.length;\n  const lastIndex = str.indexOf(searchString, position);\n  return lastIndex !== -1 && lastIndex === position;\n}\n\n\n/**\n * Returns new array from array like object or null if failed\n *\n * @param {*} [thing]\n *\n * @returns {?Array}\n */\nconst toArray = (thing) => {\n  if (!thing) return null;\n  if (isArray(thing)) return thing;\n  let i = thing.length;\n  if (!isNumber(i)) return null;\n  const arr = new Array(i);\n  while (i-- > 0) {\n    arr[i] = thing[i];\n  }\n  return arr;\n}\n\n/**\n * Checking if the Uint8Array exists and if it does, it returns a function that checks if the\n * thing passed in is an instance of Uint8Array\n *\n * @param {TypedArray}\n *\n * @returns {Array}\n */\n// eslint-disable-next-line func-names\nconst isTypedArray = (TypedArray => {\n  // eslint-disable-next-line func-names\n  return thing => {\n    return TypedArray && thing instanceof TypedArray;\n  };\n})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));\n\n/**\n * For each entry in the object, call the function with the key and value.\n *\n * @param {Object<any, any>} obj - The object to iterate over.\n * @param {Function} fn - The function to call for each entry.\n *\n * @returns {void}\n */\nconst forEachEntry = (obj, fn) => {\n  const generator = obj && obj[Symbol.iterator];\n\n  const iterator = generator.call(obj);\n\n  let result;\n\n  while ((result = iterator.next()) && !result.done) {\n    const pair = result.value;\n    fn.call(obj, pair[0], pair[1]);\n  }\n}\n\n/**\n * It takes a regular expression and a string, and returns an array of all the matches\n *\n * @param {string} regExp - The regular expression to match against.\n * @param {string} str - The string to search.\n *\n * @returns {Array<boolean>}\n */\nconst matchAll = (regExp, str) => {\n  let matches;\n  const arr = [];\n\n  while ((matches = regExp.exec(str)) !== null) {\n    arr.push(matches);\n  }\n\n  return arr;\n}\n\n/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */\nconst isHTMLForm = kindOfTest('HTMLFormElement');\n\nconst toCamelCase = str => {\n  return str.toLowerCase().replace(/[-_\\s]([a-z\\d])(\\w*)/g,\n    function replacer(m, p1, p2) {\n      return p1.toUpperCase() + p2;\n    }\n  );\n};\n\n/* Creating a function that will check if an object has a property. */\nconst hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);\n\n/**\n * Determine if a value is a RegExp object\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a RegExp object, otherwise false\n */\nconst isRegExp = kindOfTest('RegExp');\n\nconst reduceDescriptors = (obj, reducer) => {\n  const descriptors = Object.getOwnPropertyDescriptors(obj);\n  const reducedDescriptors = {};\n\n  forEach(descriptors, (descriptor, name) => {\n    let ret;\n    if ((ret = reducer(descriptor, name, obj)) !== false) {\n      reducedDescriptors[name] = ret || descriptor;\n    }\n  });\n\n  Object.defineProperties(obj, reducedDescriptors);\n}\n\n/**\n * Makes all methods read-only\n * @param {Object} obj\n */\n\nconst freezeMethods = (obj) => {\n  reduceDescriptors(obj, (descriptor, name) => {\n    // skip restricted props in strict mode\n    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {\n      return false;\n    }\n\n    const value = obj[name];\n\n    if (!isFunction(value)) return;\n\n    descriptor.enumerable = false;\n\n    if ('writable' in descriptor) {\n      descriptor.writable = false;\n      return;\n    }\n\n    if (!descriptor.set) {\n      descriptor.set = () => {\n        throw Error('Can not rewrite read-only method \\'' + name + '\\'');\n      };\n    }\n  });\n}\n\nconst toObjectSet = (arrayOrString, delimiter) => {\n  const obj = {};\n\n  const define = (arr) => {\n    arr.forEach(value => {\n      obj[value] = true;\n    });\n  }\n\n  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));\n\n  return obj;\n}\n\nconst noop = () => {}\n\nconst toFiniteNumber = (value, defaultValue) => {\n  value = +value;\n  return Number.isFinite(value) ? value : defaultValue;\n}\n\nconst ALPHA = 'abcdefghijklmnopqrstuvwxyz'\n\nconst DIGIT = '0123456789';\n\nconst ALPHABET = {\n  DIGIT,\n  ALPHA,\n  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT\n}\n\nconst generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {\n  let str = '';\n  const {length} = alphabet;\n  while (size--) {\n    str += alphabet[Math.random() * length|0]\n  }\n\n  return str;\n}\n\n/**\n * If the thing is a FormData object, return true, otherwise return false.\n *\n * @param {unknown} thing - The thing to check.\n *\n * @returns {boolean}\n */\nfunction isSpecCompliantForm(thing) {\n  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);\n}\n\nconst toJSONObject = (obj) => {\n  const stack = new Array(10);\n\n  const visit = (source, i) => {\n\n    if (isObject(source)) {\n      if (stack.indexOf(source) >= 0) {\n        return;\n      }\n\n      if(!('toJSON' in source)) {\n        stack[i] = source;\n        const target = isArray(source) ? [] : {};\n\n        forEach(source, (value, key) => {\n          const reducedValue = visit(value, i + 1);\n          !isUndefined(reducedValue) && (target[key] = reducedValue);\n        });\n\n        stack[i] = undefined;\n\n        return target;\n      }\n    }\n\n    return source;\n  }\n\n  return visit(obj, 0);\n}\n\nconst isAsyncFn = kindOfTest('AsyncFunction');\n\nconst isThenable = (thing) =>\n  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isArray,\n  isArrayBuffer,\n  isBuffer,\n  isFormData,\n  isArrayBufferView,\n  isString,\n  isNumber,\n  isBoolean,\n  isObject,\n  isPlainObject,\n  isUndefined,\n  isDate,\n  isFile,\n  isBlob,\n  isRegExp,\n  isFunction,\n  isStream,\n  isURLSearchParams,\n  isTypedArray,\n  isFileList,\n  forEach,\n  merge,\n  extend,\n  trim,\n  stripBOM,\n  inherits,\n  toFlatObject,\n  kindOf,\n  kindOfTest,\n  endsWith,\n  toArray,\n  forEachEntry,\n  matchAll,\n  isHTMLForm,\n  hasOwnProperty,\n  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection\n  reduceDescriptors,\n  freezeMethods,\n  toObjectSet,\n  toCamelCase,\n  noop,\n  toFiniteNumber,\n  findKey,\n  global: _global,\n  isContextDefined,\n  ALPHABET,\n  generateString,\n  isSpecCompliantForm,\n  toJSONObject,\n  isAsyncFn,\n  isThenable\n});\n\n\n//# sourceURL=webpack://ajaxloadmore/./node_modules/axios/lib/utils.js?"
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/compat get default export */
	/******/ !(function () {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = function (module) {
			/******/ var getter =
				module && module.__esModule
					? /******/ function () {
							return module['default'];
					  }
					: /******/ function () {
							return module;
					  };
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ !(function () {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = function (exports, definition) {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/global */
	/******/ !(function () {
		/******/ __webpack_require__.g = (function () {
			/******/ if (typeof globalThis === 'object') return globalThis;
			/******/ try {
				/******/ return this || new Function('return this')();
				/******/
			} catch (e) {
				/******/ if (typeof window === 'object') return window;
				/******/
			}
			/******/
		})();
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ !(function () {
		/******/ __webpack_require__.o = function (obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop);
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ !(function () {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = function (exports) {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/nonce */
	/******/ !(function () {
		/******/ __webpack_require__.nc = undefined;
		/******/
	})();
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	!(function () {
		'use strict';
		// ESM COMPAT FLAG
		__webpack_require__.r(__webpack_exports__);

		// EXPORTS
		__webpack_require__.d(__webpack_exports__, {
			almScroll: function () {
				return /* binding */ almScroll;
			},
			analytics: function () {
				return /* binding */ analytics;
			},
			click: function () {
				return /* binding */ click;
			},
			filter: function () {
				return /* binding */ filter;
			},
			getOffset: function () {
				return /* binding */ getOffset;
			},
			getPostCount: function () {
				return /* binding */ ajax_load_more_getPostCount;
			},
			getTotalPosts: function () {
				return /* binding */ getTotalPosts;
			},
			getTotalRemaining: function () {
				return /* binding */ getTotalRemaining;
			},
			reset: function () {
				return /* binding */ ajax_load_more_reset;
			},
			start: function () {
				return /* binding */ start;
			},
		}); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js

		function bind(fn, thisArg) {
			return function wrap() {
				return fn.apply(thisArg, arguments);
			};
		} // CONCATENATED MODULE: ./node_modules/axios/lib/utils.js

		// utils is a library of generic helper functions non-specific to axios

		const { toString: utils_toString } = Object.prototype;
		const { getPrototypeOf } = Object;

		const kindOf = ((cache) => (thing) => {
			const str = utils_toString.call(thing);
			return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
		})(Object.create(null));

		const kindOfTest = (type) => {
			type = type.toLowerCase();
			return (thing) => kindOf(thing) === type;
		};

		const typeOfTest = (type) => (thing) => typeof thing === type;

		/**
		 * Determine if a value is an Array
		 *
		 * @param {Object} val The value to test
		 *
		 * @returns {boolean} True if value is an Array, otherwise false
		 */
		const { isArray } = Array;

		/**
		 * Determine if a value is undefined
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if the value is undefined, otherwise false
		 */
		const isUndefined = typeOfTest('undefined');

		/**
		 * Determine if a value is a Buffer
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a Buffer, otherwise false
		 */
		function isBuffer(val) {
			return (
				val !== null &&
				!isUndefined(val) &&
				val.constructor !== null &&
				!isUndefined(val.constructor) &&
				isFunction(val.constructor.isBuffer) &&
				val.constructor.isBuffer(val)
			);
		}

		/**
		 * Determine if a value is an ArrayBuffer
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
		 */
		const isArrayBuffer = kindOfTest('ArrayBuffer');

		/**
		 * Determine if a value is a view on an ArrayBuffer
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
		 */
		function isArrayBufferView(val) {
			let result;
			if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
				result = ArrayBuffer.isView(val);
			} else {
				result = val && val.buffer && isArrayBuffer(val.buffer);
			}
			return result;
		}

		/**
		 * Determine if a value is a String
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a String, otherwise false
		 */
		const isString = typeOfTest('string');

		/**
		 * Determine if a value is a Function
		 *
		 * @param {*} val The value to test
		 * @returns {boolean} True if value is a Function, otherwise false
		 */
		const isFunction = typeOfTest('function');

		/**
		 * Determine if a value is a Number
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a Number, otherwise false
		 */
		const isNumber = typeOfTest('number');

		/**
		 * Determine if a value is an Object
		 *
		 * @param {*} thing The value to test
		 *
		 * @returns {boolean} True if value is an Object, otherwise false
		 */
		const isObject = (thing) => thing !== null && typeof thing === 'object';

		/**
		 * Determine if a value is a Boolean
		 *
		 * @param {*} thing The value to test
		 * @returns {boolean} True if value is a Boolean, otherwise false
		 */
		const isBoolean = (thing) => thing === true || thing === false;

		/**
		 * Determine if a value is a plain Object
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a plain Object, otherwise false
		 */
		const isPlainObject = (val) => {
			if (kindOf(val) !== 'object') {
				return false;
			}

			const prototype = getPrototypeOf(val);
			return (
				(prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) &&
				!(Symbol.toStringTag in val) &&
				!(Symbol.iterator in val)
			);
		};

		/**
		 * Determine if a value is a Date
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a Date, otherwise false
		 */
		const isDate = kindOfTest('Date');

		/**
		 * Determine if a value is a File
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a File, otherwise false
		 */
		const isFile = kindOfTest('File');

		/**
		 * Determine if a value is a Blob
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a Blob, otherwise false
		 */
		const isBlob = kindOfTest('Blob');

		/**
		 * Determine if a value is a FileList
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a File, otherwise false
		 */
		const isFileList = kindOfTest('FileList');

		/**
		 * Determine if a value is a Stream
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a Stream, otherwise false
		 */
		const isStream = (val) => isObject(val) && isFunction(val.pipe);

		/**
		 * Determine if a value is a FormData
		 *
		 * @param {*} thing The value to test
		 *
		 * @returns {boolean} True if value is an FormData, otherwise false
		 */
		const isFormData = (thing) => {
			let kind;
			return (
				thing &&
				((typeof FormData === 'function' && thing instanceof FormData) ||
					(isFunction(thing.append) &&
						((kind = kindOf(thing)) === 'formdata' ||
							// detect form-data instance
							(kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'))))
			);
		};

		/**
		 * Determine if a value is a URLSearchParams object
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
		 */
		const isURLSearchParams = kindOfTest('URLSearchParams');

		/**
		 * Trim excess whitespace off the beginning and end of a string
		 *
		 * @param {String} str The String to trim
		 *
		 * @returns {String} The String freed of excess whitespace
		 */
		const trim = (str) => (str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

		/**
		 * Iterate over an Array or an Object invoking a function for each item.
		 *
		 * If `obj` is an Array callback will be called passing
		 * the value, index, and complete array for each item.
		 *
		 * If 'obj' is an Object callback will be called passing
		 * the value, key, and complete object for each property.
		 *
		 * @param {Object|Array} obj The object to iterate
		 * @param {Function} fn The callback to invoke for each item
		 *
		 * @param {Boolean} [allOwnKeys = false]
		 * @returns {any}
		 */
		function forEach(obj, fn, { allOwnKeys = false } = {}) {
			// Don't bother if no value provided
			if (obj === null || typeof obj === 'undefined') {
				return;
			}

			let i;
			let l;

			// Force an array if not already something iterable
			if (typeof obj !== 'object') {
				/*eslint no-param-reassign:0*/
				obj = [obj];
			}

			if (isArray(obj)) {
				// Iterate over array values
				for (i = 0, l = obj.length; i < l; i++) {
					fn.call(null, obj[i], i, obj);
				}
			} else {
				// Iterate over object keys
				const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
				const len = keys.length;
				let key;

				for (i = 0; i < len; i++) {
					key = keys[i];
					fn.call(null, obj[key], key, obj);
				}
			}
		}

		function findKey(obj, key) {
			key = key.toLowerCase();
			const keys = Object.keys(obj);
			let i = keys.length;
			let _key;
			while (i-- > 0) {
				_key = keys[i];
				if (key === _key.toLowerCase()) {
					return _key;
				}
			}
			return null;
		}

		const _global = (() => {
			/*eslint no-undef:0*/
			if (typeof globalThis !== 'undefined') return globalThis;
			return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;
		})();

		const isContextDefined = (context) => !isUndefined(context) && context !== _global;

		/**
		 * Accepts varargs expecting each argument to be an object, then
		 * immutably merges the properties of each object and returns result.
		 *
		 * When multiple objects contain the same key the later object in
		 * the arguments list will take precedence.
		 *
		 * Example:
		 *
		 * ```js
		 * var result = merge({foo: 123}, {foo: 456});
		 * console.log(result.foo); // outputs 456
		 * ```
		 *
		 * @param {Object} obj1 Object to merge
		 *
		 * @returns {Object} Result of all merge properties
		 */
		function merge(/* obj1, obj2, obj3, ... */) {
			const { caseless } = (isContextDefined(this) && this) || {};
			const result = {};
			const assignValue = (val, key) => {
				const targetKey = (caseless && findKey(result, key)) || key;
				if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
					result[targetKey] = merge(result[targetKey], val);
				} else if (isPlainObject(val)) {
					result[targetKey] = merge({}, val);
				} else if (isArray(val)) {
					result[targetKey] = val.slice();
				} else {
					result[targetKey] = val;
				}
			};

			for (let i = 0, l = arguments.length; i < l; i++) {
				arguments[i] && forEach(arguments[i], assignValue);
			}
			return result;
		}

		/**
		 * Extends object a by mutably adding to it the properties of object b.
		 *
		 * @param {Object} a The object to be extended
		 * @param {Object} b The object to copy properties from
		 * @param {Object} thisArg The object to bind function to
		 *
		 * @param {Boolean} [allOwnKeys]
		 * @returns {Object} The resulting value of object a
		 */
		const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
			forEach(
				b,
				(val, key) => {
					if (thisArg && isFunction(val)) {
						a[key] = bind(val, thisArg);
					} else {
						a[key] = val;
					}
				},
				{ allOwnKeys }
			);
			return a;
		};

		/**
		 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
		 *
		 * @param {string} content with BOM
		 *
		 * @returns {string} content value without BOM
		 */
		const stripBOM = (content) => {
			if (content.charCodeAt(0) === 0xfeff) {
				content = content.slice(1);
			}
			return content;
		};

		/**
		 * Inherit the prototype methods from one constructor into another
		 * @param {function} constructor
		 * @param {function} superConstructor
		 * @param {object} [props]
		 * @param {object} [descriptors]
		 *
		 * @returns {void}
		 */
		const inherits = (constructor, superConstructor, props, descriptors) => {
			constructor.prototype = Object.create(superConstructor.prototype, descriptors);
			constructor.prototype.constructor = constructor;
			Object.defineProperty(constructor, 'super', {
				value: superConstructor.prototype,
			});
			props && Object.assign(constructor.prototype, props);
		};

		/**
		 * Resolve object with deep prototype chain to a flat object
		 * @param {Object} sourceObj source object
		 * @param {Object} [destObj]
		 * @param {Function|Boolean} [filter]
		 * @param {Function} [propFilter]
		 *
		 * @returns {Object}
		 */
		const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
			let props;
			let i;
			let prop;
			const merged = {};

			destObj = destObj || {};
			// eslint-disable-next-line no-eq-null,eqeqeq
			if (sourceObj == null) return destObj;

			do {
				props = Object.getOwnPropertyNames(sourceObj);
				i = props.length;
				while (i-- > 0) {
					prop = props[i];
					if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
						destObj[prop] = sourceObj[prop];
						merged[prop] = true;
					}
				}
				sourceObj = filter !== false && getPrototypeOf(sourceObj);
			} while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

			return destObj;
		};

		/**
		 * Determines whether a string ends with the characters of a specified string
		 *
		 * @param {String} str
		 * @param {String} searchString
		 * @param {Number} [position= 0]
		 *
		 * @returns {boolean}
		 */
		const endsWith = (str, searchString, position) => {
			str = String(str);
			if (position === undefined || position > str.length) {
				position = str.length;
			}
			position -= searchString.length;
			const lastIndex = str.indexOf(searchString, position);
			return lastIndex !== -1 && lastIndex === position;
		};

		/**
		 * Returns new array from array like object or null if failed
		 *
		 * @param {*} [thing]
		 *
		 * @returns {?Array}
		 */
		const toArray = (thing) => {
			if (!thing) return null;
			if (isArray(thing)) return thing;
			let i = thing.length;
			if (!isNumber(i)) return null;
			const arr = new Array(i);
			while (i-- > 0) {
				arr[i] = thing[i];
			}
			return arr;
		};

		/**
		 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
		 * thing passed in is an instance of Uint8Array
		 *
		 * @param {TypedArray}
		 *
		 * @returns {Array}
		 */
		// eslint-disable-next-line func-names
		const isTypedArray = ((TypedArray) => {
			// eslint-disable-next-line func-names
			return (thing) => {
				return TypedArray && thing instanceof TypedArray;
			};
		})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

		/**
		 * For each entry in the object, call the function with the key and value.
		 *
		 * @param {Object<any, any>} obj - The object to iterate over.
		 * @param {Function} fn - The function to call for each entry.
		 *
		 * @returns {void}
		 */
		const forEachEntry = (obj, fn) => {
			const generator = obj && obj[Symbol.iterator];

			const iterator = generator.call(obj);

			let result;

			while ((result = iterator.next()) && !result.done) {
				const pair = result.value;
				fn.call(obj, pair[0], pair[1]);
			}
		};

		/**
		 * It takes a regular expression and a string, and returns an array of all the matches
		 *
		 * @param {string} regExp - The regular expression to match against.
		 * @param {string} str - The string to search.
		 *
		 * @returns {Array<boolean>}
		 */
		const matchAll = (regExp, str) => {
			let matches;
			const arr = [];

			while ((matches = regExp.exec(str)) !== null) {
				arr.push(matches);
			}

			return arr;
		};

		/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
		const isHTMLForm = kindOfTest('HTMLFormElement');

		const toCamelCase = (str) => {
			return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
				return p1.toUpperCase() + p2;
			});
		};

		/* Creating a function that will check if an object has a property. */
		const utils_hasOwnProperty = (
			({ hasOwnProperty }) =>
			(obj, prop) =>
				hasOwnProperty.call(obj, prop)
		)(Object.prototype);

		/**
		 * Determine if a value is a RegExp object
		 *
		 * @param {*} val The value to test
		 *
		 * @returns {boolean} True if value is a RegExp object, otherwise false
		 */
		const isRegExp = kindOfTest('RegExp');

		const reduceDescriptors = (obj, reducer) => {
			const descriptors = Object.getOwnPropertyDescriptors(obj);
			const reducedDescriptors = {};

			forEach(descriptors, (descriptor, name) => {
				let ret;
				if ((ret = reducer(descriptor, name, obj)) !== false) {
					reducedDescriptors[name] = ret || descriptor;
				}
			});

			Object.defineProperties(obj, reducedDescriptors);
		};

		/**
		 * Makes all methods read-only
		 * @param {Object} obj
		 */

		const freezeMethods = (obj) => {
			reduceDescriptors(obj, (descriptor, name) => {
				// skip restricted props in strict mode
				if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
					return false;
				}

				const value = obj[name];

				if (!isFunction(value)) return;

				descriptor.enumerable = false;

				if ('writable' in descriptor) {
					descriptor.writable = false;
					return;
				}

				if (!descriptor.set) {
					descriptor.set = () => {
						throw Error("Can not rewrite read-only method '" + name + "'");
					};
				}
			});
		};

		const toObjectSet = (arrayOrString, delimiter) => {
			const obj = {};

			const define = (arr) => {
				arr.forEach((value) => {
					obj[value] = true;
				});
			};

			isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

			return obj;
		};

		const noop = () => {};

		const toFiniteNumber = (value, defaultValue) => {
			value = +value;
			return Number.isFinite(value) ? value : defaultValue;
		};

		const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

		const DIGIT = '0123456789';

		const ALPHABET = {
			DIGIT,
			ALPHA,
			ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT,
		};

		const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
			let str = '';
			const { length } = alphabet;
			while (size--) {
				str += alphabet[(Math.random() * length) | 0];
			}

			return str;
		};

		/**
		 * If the thing is a FormData object, return true, otherwise return false.
		 *
		 * @param {unknown} thing - The thing to check.
		 *
		 * @returns {boolean}
		 */
		function isSpecCompliantForm(thing) {
			return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
		}

		const toJSONObject = (obj) => {
			const stack = new Array(10);

			const visit = (source, i) => {
				if (isObject(source)) {
					if (stack.indexOf(source) >= 0) {
						return;
					}

					if (!('toJSON' in source)) {
						stack[i] = source;
						const target = isArray(source) ? [] : {};

						forEach(source, (value, key) => {
							const reducedValue = visit(value, i + 1);
							!isUndefined(reducedValue) && (target[key] = reducedValue);
						});

						stack[i] = undefined;

						return target;
					}
				}

				return source;
			};

			return visit(obj, 0);
		};

		const isAsyncFn = kindOfTest('AsyncFunction');

		const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

		/* harmony default export */ var utils = {
			isArray,
			isArrayBuffer,
			isBuffer,
			isFormData,
			isArrayBufferView,
			isString,
			isNumber,
			isBoolean,
			isObject,
			isPlainObject,
			isUndefined,
			isDate,
			isFile,
			isBlob,
			isRegExp,
			isFunction,
			isStream,
			isURLSearchParams,
			isTypedArray,
			isFileList,
			forEach,
			merge,
			extend,
			trim,
			stripBOM,
			inherits,
			toFlatObject,
			kindOf,
			kindOfTest,
			endsWith,
			toArray,
			forEachEntry,
			matchAll,
			isHTMLForm,
			hasOwnProperty: utils_hasOwnProperty,
			hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
			reduceDescriptors,
			freezeMethods,
			toObjectSet,
			toCamelCase,
			noop,
			toFiniteNumber,
			findKey,
			global: _global,
			isContextDefined,
			ALPHABET,
			generateString,
			isSpecCompliantForm,
			toJSONObject,
			isAsyncFn,
			isThenable,
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js

		/**
		 * Create an Error with the specified message, config, error code, request and response.
		 *
		 * @param {string} message The error message.
		 * @param {string} [code] The error code (for example, 'ECONNABORTED').
		 * @param {Object} [config] The config.
		 * @param {Object} [request] The request.
		 * @param {Object} [response] The response.
		 *
		 * @returns {Error} The created error.
		 */
		function AxiosError(message, code, config, request, response) {
			Error.call(this);

			if (Error.captureStackTrace) {
				Error.captureStackTrace(this, this.constructor);
			} else {
				this.stack = new Error().stack;
			}

			this.message = message;
			this.name = 'AxiosError';
			code && (this.code = code);
			config && (this.config = config);
			request && (this.request = request);
			response && (this.response = response);
		}

		utils.inherits(AxiosError, Error, {
			toJSON: function toJSON() {
				return {
					// Standard
					message: this.message,
					name: this.name,
					// Microsoft
					description: this.description,
					number: this.number,
					// Mozilla
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					// Axios
					config: utils.toJSONObject(this.config),
					code: this.code,
					status: this.response && this.response.status ? this.response.status : null,
				};
			},
		});

		const AxiosError_prototype = AxiosError.prototype;
		const descriptors = {};

		[
			'ERR_BAD_OPTION_VALUE',
			'ERR_BAD_OPTION',
			'ECONNABORTED',
			'ETIMEDOUT',
			'ERR_NETWORK',
			'ERR_FR_TOO_MANY_REDIRECTS',
			'ERR_DEPRECATED',
			'ERR_BAD_RESPONSE',
			'ERR_BAD_REQUEST',
			'ERR_CANCELED',
			'ERR_NOT_SUPPORT',
			'ERR_INVALID_URL',
			// eslint-disable-next-line func-names
		].forEach((code) => {
			descriptors[code] = { value: code };
		});

		Object.defineProperties(AxiosError, descriptors);
		Object.defineProperty(AxiosError_prototype, 'isAxiosError', { value: true });

		// eslint-disable-next-line func-names
		AxiosError.from = (error, code, config, request, response, customProps) => {
			const axiosError = Object.create(AxiosError_prototype);

			utils.toFlatObject(
				error,
				axiosError,
				function filter(obj) {
					return obj !== Error.prototype;
				},
				(prop) => {
					return prop !== 'isAxiosError';
				}
			);

			AxiosError.call(axiosError, error.message, code, config, request, response);

			axiosError.cause = error;

			axiosError.name = error.name;

			customProps && Object.assign(axiosError, customProps);

			return axiosError;
		};

		/* harmony default export */ var core_AxiosError = AxiosError; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js

		// eslint-disable-next-line strict
		/* harmony default export */ var helpers_null = null; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js

		// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored

		/**
		 * Determines if the given thing is a array or js object.
		 *
		 * @param {string} thing - The object or array to be visited.
		 *
		 * @returns {boolean}
		 */
		function isVisitable(thing) {
			return utils.isPlainObject(thing) || utils.isArray(thing);
		}

		/**
		 * It removes the brackets from the end of a string
		 *
		 * @param {string} key - The key of the parameter.
		 *
		 * @returns {string} the key without the brackets.
		 */
		function removeBrackets(key) {
			return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
		}

		/**
		 * It takes a path, a key, and a boolean, and returns a string
		 *
		 * @param {string} path - The path to the current key.
		 * @param {string} key - The key of the current object being iterated over.
		 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
		 *
		 * @returns {string} The path to the current key.
		 */
		function renderKey(path, key, dots) {
			if (!path) return key;
			return path
				.concat(key)
				.map(function each(token, i) {
					// eslint-disable-next-line no-param-reassign
					token = removeBrackets(token);
					return !dots && i ? '[' + token + ']' : token;
				})
				.join(dots ? '.' : '');
		}

		/**
		 * If the array is an array and none of its elements are visitable, then it's a flat array.
		 *
		 * @param {Array<any>} arr - The array to check
		 *
		 * @returns {boolean}
		 */
		function isFlatArray(arr) {
			return utils.isArray(arr) && !arr.some(isVisitable);
		}

		const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
			return /^is[A-Z]/.test(prop);
		});

		/**
		 * Convert a data object to FormData
		 *
		 * @param {Object} obj
		 * @param {?Object} [formData]
		 * @param {?Object} [options]
		 * @param {Function} [options.visitor]
		 * @param {Boolean} [options.metaTokens = true]
		 * @param {Boolean} [options.dots = false]
		 * @param {?Boolean} [options.indexes = false]
		 *
		 * @returns {Object}
		 **/

		/**
		 * It converts an object into a FormData object
		 *
		 * @param {Object<any, any>} obj - The object to convert to form data.
		 * @param {string} formData - The FormData object to append to.
		 * @param {Object<string, any>} options
		 *
		 * @returns
		 */
		function toFormData(obj, formData, options) {
			if (!utils.isObject(obj)) {
				throw new TypeError('target must be an object');
			}

			// eslint-disable-next-line no-param-reassign
			formData = formData || new (helpers_null || FormData)();

			// eslint-disable-next-line no-param-reassign
			options = utils.toFlatObject(
				options,
				{
					metaTokens: true,
					dots: false,
					indexes: false,
				},
				false,
				function defined(option, source) {
					// eslint-disable-next-line no-eq-null,eqeqeq
					return !utils.isUndefined(source[option]);
				}
			);

			const metaTokens = options.metaTokens;
			// eslint-disable-next-line no-use-before-define
			const visitor = options.visitor || defaultVisitor;
			const dots = options.dots;
			const indexes = options.indexes;
			const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
			const useBlob = _Blob && utils.isSpecCompliantForm(formData);

			if (!utils.isFunction(visitor)) {
				throw new TypeError('visitor must be a function');
			}

			function convertValue(value) {
				if (value === null) return '';

				if (utils.isDate(value)) {
					return value.toISOString();
				}

				if (!useBlob && utils.isBlob(value)) {
					throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
				}

				if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
					return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
				}

				return value;
			}

			/**
			 * Default visitor.
			 *
			 * @param {*} value
			 * @param {String|Number} key
			 * @param {Array<String|Number>} path
			 * @this {FormData}
			 *
			 * @returns {boolean} return true to visit the each prop of the value recursively
			 */
			function defaultVisitor(value, key, path) {
				let arr = value;

				if (value && !path && typeof value === 'object') {
					if (utils.endsWith(key, '{}')) {
						// eslint-disable-next-line no-param-reassign
						key = metaTokens ? key : key.slice(0, -2);
						// eslint-disable-next-line no-param-reassign
						value = JSON.stringify(value);
					} else if ((utils.isArray(value) && isFlatArray(value)) || ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value)))) {
						// eslint-disable-next-line no-param-reassign
						key = removeBrackets(key);

						arr.forEach(function each(el, index) {
							!(utils.isUndefined(el) || el === null) &&
								formData.append(
									// eslint-disable-next-line no-nested-ternary
									indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]',
									convertValue(el)
								);
						});
						return false;
					}
				}

				if (isVisitable(value)) {
					return true;
				}

				formData.append(renderKey(path, key, dots), convertValue(value));

				return false;
			}

			const stack = [];

			const exposedHelpers = Object.assign(predicates, {
				defaultVisitor,
				convertValue,
				isVisitable,
			});

			function build(value, path) {
				if (utils.isUndefined(value)) return;

				if (stack.indexOf(value) !== -1) {
					throw Error('Circular reference detected in ' + path.join('.'));
				}

				stack.push(value);

				utils.forEach(value, function each(el, key) {
					const result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);

					if (result === true) {
						build(el, path ? path.concat(key) : [key]);
					}
				});

				stack.pop();
			}

			if (!utils.isObject(obj)) {
				throw new TypeError('data must be an object');
			}

			build(obj);

			return formData;
		}

		/* harmony default export */ var helpers_toFormData = toFormData; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js

		/**
		 * It encodes a string by replacing all characters that are not in the unreserved set with
		 * their percent-encoded equivalents
		 *
		 * @param {string} str - The string to encode.
		 *
		 * @returns {string} The encoded string.
		 */
		function encode(str) {
			const charMap = {
				'!': '%21',
				"'": '%27',
				'(': '%28',
				')': '%29',
				'~': '%7E',
				'%20': '+',
				'%00': '\x00',
			};
			return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
				return charMap[match];
			});
		}

		/**
		 * It takes a params object and converts it to a FormData object
		 *
		 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
		 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
		 *
		 * @returns {void}
		 */
		function AxiosURLSearchParams(params, options) {
			this._pairs = [];

			params && helpers_toFormData(params, this, options);
		}

		const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

		AxiosURLSearchParams_prototype.append = function append(name, value) {
			this._pairs.push([name, value]);
		};

		AxiosURLSearchParams_prototype.toString = function toString(encoder) {
			const _encode = encoder
				? function (value) {
						return encoder.call(this, value, encode);
				  }
				: encode;

			return this._pairs
				.map(function each(pair) {
					return _encode(pair[0]) + '=' + _encode(pair[1]);
				}, '')
				.join('&');
		};

		/* harmony default export */ var helpers_AxiosURLSearchParams = AxiosURLSearchParams; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js

		/**
		 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
		 * URI encoded counterparts
		 *
		 * @param {string} val The value to be encoded.
		 *
		 * @returns {string} The encoded value.
		 */
		function buildURL_encode(val) {
			return encodeURIComponent(val)
				.replace(/%3A/gi, ':')
				.replace(/%24/g, '$')
				.replace(/%2C/gi, ',')
				.replace(/%20/g, '+')
				.replace(/%5B/gi, '[')
				.replace(/%5D/gi, ']');
		}

		/**
		 * Build a URL by appending params to the end
		 *
		 * @param {string} url The base of the url (e.g., http://www.google.com)
		 * @param {object} [params] The params to be appended
		 * @param {?object} options
		 *
		 * @returns {string} The formatted url
		 */
		function buildURL(url, params, options) {
			/*eslint no-param-reassign:0*/
			if (!params) {
				return url;
			}

			const _encode = (options && options.encode) || buildURL_encode;

			const serializeFn = options && options.serialize;

			let serializedParams;

			if (serializeFn) {
				serializedParams = serializeFn(params, options);
			} else {
				serializedParams = utils.isURLSearchParams(params) ? params.toString() : new helpers_AxiosURLSearchParams(params, options).toString(_encode);
			}

			if (serializedParams) {
				const hashmarkIndex = url.indexOf('#');

				if (hashmarkIndex !== -1) {
					url = url.slice(0, hashmarkIndex);
				}
				url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
			}

			return url;
		} // CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js

		class InterceptorManager {
			constructor() {
				this.handlers = [];
			}

			/**
			 * Add a new interceptor to the stack
			 *
			 * @param {Function} fulfilled The function to handle `then` for a `Promise`
			 * @param {Function} rejected The function to handle `reject` for a `Promise`
			 *
			 * @return {Number} An ID used to remove interceptor later
			 */
			use(fulfilled, rejected, options) {
				this.handlers.push({
					fulfilled,
					rejected,
					synchronous: options ? options.synchronous : false,
					runWhen: options ? options.runWhen : null,
				});
				return this.handlers.length - 1;
			}

			/**
			 * Remove an interceptor from the stack
			 *
			 * @param {Number} id The ID that was returned by `use`
			 *
			 * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
			 */
			eject(id) {
				if (this.handlers[id]) {
					this.handlers[id] = null;
				}
			}

			/**
			 * Clear all interceptors from the stack
			 *
			 * @returns {void}
			 */
			clear() {
				if (this.handlers) {
					this.handlers = [];
				}
			}

			/**
			 * Iterate over all the registered interceptors
			 *
			 * This method is particularly useful for skipping over any
			 * interceptors that may have become `null` calling `eject`.
			 *
			 * @param {Function} fn The function to call for each interceptor
			 *
			 * @returns {void}
			 */
			forEach(fn) {
				utils.forEach(this.handlers, function forEachHandler(h) {
					if (h !== null) {
						fn(h);
					}
				});
			}
		}

		/* harmony default export */ var core_InterceptorManager = InterceptorManager; // CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js

		/* harmony default export */ var defaults_transitional = {
			silentJSONParsing: true,
			forcedJSONParsing: true,
			clarifyTimeoutError: false,
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js

		/* harmony default export */ var classes_URLSearchParams = typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js

		/* harmony default export */ var classes_FormData = typeof FormData !== 'undefined' ? FormData : null; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js

		/* harmony default export */ var classes_Blob = typeof Blob !== 'undefined' ? Blob : null; // CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js

		/**
		 * Determine if we're running in a standard browser environment
		 *
		 * This allows axios to run in a web worker, and react-native.
		 * Both environments support XMLHttpRequest, but not fully standard globals.
		 *
		 * web workers:
		 *  typeof window -> undefined
		 *  typeof document -> undefined
		 *
		 * react-native:
		 *  navigator.product -> 'ReactNative'
		 * nativescript
		 *  navigator.product -> 'NativeScript' or 'NS'
		 *
		 * @returns {boolean}
		 */
		const isStandardBrowserEnv = (() => {
			let product;
			if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
				return false;
			}

			return typeof window !== 'undefined' && typeof document !== 'undefined';
		})();

		/**
		 * Determine if we're running in a standard browser webWorker environment
		 *
		 * Although the `isStandardBrowserEnv` method indicates that
		 * `allows axios to run in a web worker`, the WebWorker will still be
		 * filtered out due to its judgment standard
		 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
		 * This leads to a problem when axios post `FormData` in webWorker
		 */
		const isStandardBrowserWebWorkerEnv = (() => {
			return (
				typeof WorkerGlobalScope !== 'undefined' &&
				// eslint-disable-next-line no-undef
				self instanceof WorkerGlobalScope &&
				typeof self.importScripts === 'function'
			);
		})();

		/* harmony default export */ var browser = {
			isBrowser: true,
			classes: {
				URLSearchParams: classes_URLSearchParams,
				FormData: classes_FormData,
				Blob: classes_Blob,
			},
			isStandardBrowserEnv,
			isStandardBrowserWebWorkerEnv,
			protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js

		function toURLEncodedForm(data, options) {
			return helpers_toFormData(
				data,
				new browser.classes.URLSearchParams(),
				Object.assign(
					{
						visitor: function (value, key, path, helpers) {
							if (browser.isNode && utils.isBuffer(value)) {
								this.append(key, value.toString('base64'));
								return false;
							}

							return helpers.defaultVisitor.apply(this, arguments);
						},
					},
					options
				)
			);
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js

		/**
		 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
		 *
		 * @param {string} name - The name of the property to get.
		 *
		 * @returns An array of strings.
		 */
		function parsePropPath(name) {
			// foo[x][y][z]
			// foo.x.y.z
			// foo-x-y-z
			// foo x y z
			return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
				return match[0] === '[]' ? '' : match[1] || match[0];
			});
		}

		/**
		 * Convert an array to an object.
		 *
		 * @param {Array<any>} arr - The array to convert to an object.
		 *
		 * @returns An object with the same keys and values as the array.
		 */
		function arrayToObject(arr) {
			const obj = {};
			const keys = Object.keys(arr);
			let i;
			const len = keys.length;
			let key;
			for (i = 0; i < len; i++) {
				key = keys[i];
				obj[key] = arr[key];
			}
			return obj;
		}

		/**
		 * It takes a FormData object and returns a JavaScript object
		 *
		 * @param {string} formData The FormData object to convert to JSON.
		 *
		 * @returns {Object<string, any> | null} The converted object.
		 */
		function formDataToJSON(formData) {
			function buildPath(path, value, target, index) {
				let name = path[index++];
				const isNumericKey = Number.isFinite(+name);
				const isLast = index >= path.length;
				name = !name && utils.isArray(target) ? target.length : name;

				if (isLast) {
					if (utils.hasOwnProp(target, name)) {
						target[name] = [target[name], value];
					} else {
						target[name] = value;
					}

					return !isNumericKey;
				}

				if (!target[name] || !utils.isObject(target[name])) {
					target[name] = [];
				}

				const result = buildPath(path, value, target[name], index);

				if (result && utils.isArray(target[name])) {
					target[name] = arrayToObject(target[name]);
				}

				return !isNumericKey;
			}

			if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
				const obj = {};

				utils.forEachEntry(formData, (name, value) => {
					buildPath(parsePropPath(name), value, obj, 0);
				});

				return obj;
			}

			return null;
		}

		/* harmony default export */ var helpers_formDataToJSON = formDataToJSON; // CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js

		/**
		 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
		 * of the input
		 *
		 * @param {any} rawValue - The value to be stringified.
		 * @param {Function} parser - A function that parses a string into a JavaScript object.
		 * @param {Function} encoder - A function that takes a value and returns a string.
		 *
		 * @returns {string} A stringified version of the rawValue.
		 */
		function stringifySafely(rawValue, parser, encoder) {
			if (utils.isString(rawValue)) {
				try {
					(parser || JSON.parse)(rawValue);
					return utils.trim(rawValue);
				} catch (e) {
					if (e.name !== 'SyntaxError') {
						throw e;
					}
				}
			}

			return (encoder || JSON.stringify)(rawValue);
		}

		const defaults = {
			transitional: defaults_transitional,

			adapter: browser.isNode ? 'http' : 'xhr',

			transformRequest: [
				function transformRequest(data, headers) {
					const contentType = headers.getContentType() || '';
					const hasJSONContentType = contentType.indexOf('application/json') > -1;
					const isObjectPayload = utils.isObject(data);

					if (isObjectPayload && utils.isHTMLForm(data)) {
						data = new FormData(data);
					}

					const isFormData = utils.isFormData(data);

					if (isFormData) {
						if (!hasJSONContentType) {
							return data;
						}
						return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
					}

					if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
						return data;
					}
					if (utils.isArrayBufferView(data)) {
						return data.buffer;
					}
					if (utils.isURLSearchParams(data)) {
						headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
						return data.toString();
					}

					let isFileList;

					if (isObjectPayload) {
						if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
							return toURLEncodedForm(data, this.formSerializer).toString();
						}

						if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
							const _FormData = this.env && this.env.FormData;

							return helpers_toFormData(isFileList ? { 'files[]': data } : data, _FormData && new _FormData(), this.formSerializer);
						}
					}

					if (isObjectPayload || hasJSONContentType) {
						headers.setContentType('application/json', false);
						return stringifySafely(data);
					}

					return data;
				},
			],

			transformResponse: [
				function transformResponse(data) {
					const transitional = this.transitional || defaults.transitional;
					const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
					const JSONRequested = this.responseType === 'json';

					if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
						const silentJSONParsing = transitional && transitional.silentJSONParsing;
						const strictJSONParsing = !silentJSONParsing && JSONRequested;

						try {
							return JSON.parse(data);
						} catch (e) {
							if (strictJSONParsing) {
								if (e.name === 'SyntaxError') {
									throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
								}
								throw e;
							}
						}
					}

					return data;
				},
			],

			/**
			 * A timeout in milliseconds to abort a request. If set to 0 (default) a
			 * timeout is not created.
			 */
			timeout: 0,

			xsrfCookieName: 'XSRF-TOKEN',
			xsrfHeaderName: 'X-XSRF-TOKEN',

			maxContentLength: -1,
			maxBodyLength: -1,

			env: {
				FormData: browser.classes.FormData,
				Blob: browser.classes.Blob,
			},

			validateStatus: function validateStatus(status) {
				return status >= 200 && status < 300;
			},

			headers: {
				common: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': undefined,
				},
			},
		};

		utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
			defaults.headers[method] = {};
		});

		/* harmony default export */ var lib_defaults = defaults; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js

		// RawAxiosHeaders whose duplicates are ignored by node
		// c.f. https://nodejs.org/api/http.html#http_message_headers
		const ignoreDuplicateOf = utils.toObjectSet([
			'age',
			'authorization',
			'content-length',
			'content-type',
			'etag',
			'expires',
			'from',
			'host',
			'if-modified-since',
			'if-unmodified-since',
			'last-modified',
			'location',
			'max-forwards',
			'proxy-authorization',
			'referer',
			'retry-after',
			'user-agent',
		]);

		/**
		 * Parse headers into an object
		 *
		 * ```
		 * Date: Wed, 27 Aug 2014 08:58:49 GMT
		 * Content-Type: application/json
		 * Connection: keep-alive
		 * Transfer-Encoding: chunked
		 * ```
		 *
		 * @param {String} rawHeaders Headers needing to be parsed
		 *
		 * @returns {Object} Headers parsed into an object
		 */
		/* harmony default export */ var parseHeaders = (rawHeaders) => {
			const parsed = {};
			let key;
			let val;
			let i;

			rawHeaders &&
				rawHeaders.split('\n').forEach(function parser(line) {
					i = line.indexOf(':');
					key = line.substring(0, i).trim().toLowerCase();
					val = line.substring(i + 1).trim();

					if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
						return;
					}

					if (key === 'set-cookie') {
						if (parsed[key]) {
							parsed[key].push(val);
						} else {
							parsed[key] = [val];
						}
					} else {
						parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
					}
				});

			return parsed;
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js

		const $internals = Symbol('internals');

		function normalizeHeader(header) {
			return header && String(header).trim().toLowerCase();
		}

		function normalizeValue(value) {
			if (value === false || value == null) {
				return value;
			}

			return utils.isArray(value) ? value.map(normalizeValue) : String(value);
		}

		function parseTokens(str) {
			const tokens = Object.create(null);
			const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
			let match;

			while ((match = tokensRE.exec(str))) {
				tokens[match[1]] = match[2];
			}

			return tokens;
		}

		const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

		function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
			if (utils.isFunction(filter)) {
				return filter.call(this, value, header);
			}

			if (isHeaderNameFilter) {
				value = header;
			}

			if (!utils.isString(value)) return;

			if (utils.isString(filter)) {
				return value.indexOf(filter) !== -1;
			}

			if (utils.isRegExp(filter)) {
				return filter.test(value);
			}
		}

		function formatHeader(header) {
			return header
				.trim()
				.toLowerCase()
				.replace(/([a-z\d])(\w*)/g, (w, char, str) => {
					return char.toUpperCase() + str;
				});
		}

		function buildAccessors(obj, header) {
			const accessorName = utils.toCamelCase(' ' + header);

			['get', 'set', 'has'].forEach((methodName) => {
				Object.defineProperty(obj, methodName + accessorName, {
					value: function (arg1, arg2, arg3) {
						return this[methodName].call(this, header, arg1, arg2, arg3);
					},
					configurable: true,
				});
			});
		}

		class AxiosHeaders {
			constructor(headers) {
				headers && this.set(headers);
			}

			set(header, valueOrRewrite, rewrite) {
				const self = this;

				function setHeader(_value, _header, _rewrite) {
					const lHeader = normalizeHeader(_header);

					if (!lHeader) {
						throw new Error('header name must be a non-empty string');
					}

					const key = utils.findKey(self, lHeader);

					if (!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
						self[key || _header] = normalizeValue(_value);
					}
				}

				const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

				if (utils.isPlainObject(header) || header instanceof this.constructor) {
					setHeaders(header, valueOrRewrite);
				} else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
					setHeaders(parseHeaders(header), valueOrRewrite);
				} else {
					header != null && setHeader(valueOrRewrite, header, rewrite);
				}

				return this;
			}

			get(header, parser) {
				header = normalizeHeader(header);

				if (header) {
					const key = utils.findKey(this, header);

					if (key) {
						const value = this[key];

						if (!parser) {
							return value;
						}

						if (parser === true) {
							return parseTokens(value);
						}

						if (utils.isFunction(parser)) {
							return parser.call(this, value, key);
						}

						if (utils.isRegExp(parser)) {
							return parser.exec(value);
						}

						throw new TypeError('parser must be boolean|regexp|function');
					}
				}
			}

			has(header, matcher) {
				header = normalizeHeader(header);

				if (header) {
					const key = utils.findKey(this, header);

					return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
				}

				return false;
			}

			delete(header, matcher) {
				const self = this;
				let deleted = false;

				function deleteHeader(_header) {
					_header = normalizeHeader(_header);

					if (_header) {
						const key = utils.findKey(self, _header);

						if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
							delete self[key];

							deleted = true;
						}
					}
				}

				if (utils.isArray(header)) {
					header.forEach(deleteHeader);
				} else {
					deleteHeader(header);
				}

				return deleted;
			}

			clear(matcher) {
				const keys = Object.keys(this);
				let i = keys.length;
				let deleted = false;

				while (i--) {
					const key = keys[i];
					if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
						delete this[key];
						deleted = true;
					}
				}

				return deleted;
			}

			normalize(format) {
				const self = this;
				const headers = {};

				utils.forEach(this, (value, header) => {
					const key = utils.findKey(headers, header);

					if (key) {
						self[key] = normalizeValue(value);
						delete self[header];
						return;
					}

					const normalized = format ? formatHeader(header) : String(header).trim();

					if (normalized !== header) {
						delete self[header];
					}

					self[normalized] = normalizeValue(value);

					headers[normalized] = true;
				});

				return this;
			}

			concat(...targets) {
				return this.constructor.concat(this, ...targets);
			}

			toJSON(asStrings) {
				const obj = Object.create(null);

				utils.forEach(this, (value, header) => {
					value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
				});

				return obj;
			}

			[Symbol.iterator]() {
				return Object.entries(this.toJSON())[Symbol.iterator]();
			}

			toString() {
				return Object.entries(this.toJSON())
					.map(([header, value]) => header + ': ' + value)
					.join('\n');
			}

			get [Symbol.toStringTag]() {
				return 'AxiosHeaders';
			}

			static from(thing) {
				return thing instanceof this ? thing : new this(thing);
			}

			static concat(first, ...targets) {
				const computed = new this(first);

				targets.forEach((target) => computed.set(target));

				return computed;
			}

			static accessor(header) {
				const internals =
					(this[$internals] =
					this[$internals] =
						{
							accessors: {},
						});

				const accessors = internals.accessors;
				const prototype = this.prototype;

				function defineAccessor(_header) {
					const lHeader = normalizeHeader(_header);

					if (!accessors[lHeader]) {
						buildAccessors(prototype, _header);
						accessors[lHeader] = true;
					}
				}

				utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

				return this;
			}
		}

		AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

		// reserved names hotfix
		utils.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
			let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
			return {
				get: () => value,
				set(headerValue) {
					this[mapped] = headerValue;
				},
			};
		});

		utils.freezeMethods(AxiosHeaders);

		/* harmony default export */ var core_AxiosHeaders = AxiosHeaders; // CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js

		/**
		 * Transform the data for a request or a response
		 *
		 * @param {Array|Function} fns A single function or Array of functions
		 * @param {?Object} response The response object
		 *
		 * @returns {*} The resulting transformed data
		 */
		function transformData(fns, response) {
			const config = this || lib_defaults;
			const context = response || config;
			const headers = core_AxiosHeaders.from(context.headers);
			let data = context.data;

			utils.forEach(fns, function transform(fn) {
				data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
			});

			headers.normalize();

			return data;
		} // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js

		function isCancel(value) {
			return !!(value && value.__CANCEL__);
		} // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js

		/**
		 * A `CanceledError` is an object that is thrown when an operation is canceled.
		 *
		 * @param {string=} message The message.
		 * @param {Object=} config The config.
		 * @param {Object=} request The request.
		 *
		 * @returns {CanceledError} The created error.
		 */
		function CanceledError(message, config, request) {
			// eslint-disable-next-line no-eq-null,eqeqeq
			core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
			this.name = 'CanceledError';
		}

		utils.inherits(CanceledError, core_AxiosError, {
			__CANCEL__: true,
		});

		/* harmony default export */ var cancel_CanceledError = CanceledError; // CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js

		/**
		 * Resolve or reject a Promise based on response status.
		 *
		 * @param {Function} resolve A function that resolves the promise.
		 * @param {Function} reject A function that rejects the promise.
		 * @param {object} response The response.
		 *
		 * @returns {object} The response.
		 */
		function settle(resolve, reject, response) {
			const validateStatus = response.config.validateStatus;
			if (!response.status || !validateStatus || validateStatus(response.status)) {
				resolve(response);
			} else {
				reject(
					new core_AxiosError(
						'Request failed with status code ' + response.status,
						[core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
						response.config,
						response.request,
						response
					)
				);
			}
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js

		/* harmony default export */ var cookies = browser.isStandardBrowserEnv
			? // Standard browser envs support document.cookie
			  (function standardBrowserEnv() {
					return {
						write: function write(name, value, expires, path, domain, secure) {
							const cookie = [];
							cookie.push(name + '=' + encodeURIComponent(value));

							if (utils.isNumber(expires)) {
								cookie.push('expires=' + new Date(expires).toGMTString());
							}

							if (utils.isString(path)) {
								cookie.push('path=' + path);
							}

							if (utils.isString(domain)) {
								cookie.push('domain=' + domain);
							}

							if (secure === true) {
								cookie.push('secure');
							}

							document.cookie = cookie.join('; ');
						},

						read: function read(name) {
							const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
							return match ? decodeURIComponent(match[3]) : null;
						},

						remove: function remove(name) {
							this.write(name, '', Date.now() - 86400000);
						},
					};
			  })()
			: // Non standard browser env (web workers, react-native) lack needed support.
			  (function nonStandardBrowserEnv() {
					return {
						write: function write() {},
						read: function read() {
							return null;
						},
						remove: function remove() {},
					};
			  })(); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js

		/**
		 * Determines whether the specified URL is absolute
		 *
		 * @param {string} url The URL to test
		 *
		 * @returns {boolean} True if the specified URL is absolute, otherwise false
		 */
		function isAbsoluteURL(url) {
			// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
			// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
			// by any combination of letters, digits, plus, period, or hyphen.
			return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js

		/**
		 * Creates a new URL by combining the specified URLs
		 *
		 * @param {string} baseURL The base URL
		 * @param {string} relativeURL The relative URL
		 *
		 * @returns {string} The combined URL
		 */
		function combineURLs(baseURL, relativeURL) {
			return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
		} // CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js

		/**
		 * Creates a new URL by combining the baseURL with the requestedURL,
		 * only when the requestedURL is not already an absolute URL.
		 * If the requestURL is absolute, this function returns the requestedURL untouched.
		 *
		 * @param {string} baseURL The base URL
		 * @param {string} requestedURL Absolute or relative URL to combine
		 *
		 * @returns {string} The combined full path
		 */
		function buildFullPath(baseURL, requestedURL) {
			if (baseURL && !isAbsoluteURL(requestedURL)) {
				return combineURLs(baseURL, requestedURL);
			}
			return requestedURL;
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js

		/* harmony default export */ var isURLSameOrigin = browser.isStandardBrowserEnv
			? // Standard browser envs have full support of the APIs needed to test
			  // whether the request URL is of the same origin as current location.
			  (function standardBrowserEnv() {
					const msie = /(msie|trident)/i.test(navigator.userAgent);
					const urlParsingNode = document.createElement('a');
					let originURL;

					/**
					 * Parse a URL to discover it's components
					 *
					 * @param {String} url The URL to be parsed
					 * @returns {Object}
					 */
					function resolveURL(url) {
						let href = url;

						if (msie) {
							// IE needs attribute set twice to normalize properties
							urlParsingNode.setAttribute('href', href);
							href = urlParsingNode.href;
						}

						urlParsingNode.setAttribute('href', href);

						// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
						return {
							href: urlParsingNode.href,
							protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
							host: urlParsingNode.host,
							search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
							hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
							hostname: urlParsingNode.hostname,
							port: urlParsingNode.port,
							pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname,
						};
					}

					originURL = resolveURL(window.location.href);

					/**
					 * Determine if a URL shares the same origin as the current location
					 *
					 * @param {String} requestURL The URL to test
					 * @returns {boolean} True if URL shares the same origin, otherwise false
					 */
					return function isURLSameOrigin(requestURL) {
						const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
						return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
					};
			  })()
			: // Non standard browser envs (web workers, react-native) lack needed support.
			  (function nonStandardBrowserEnv() {
					return function isURLSameOrigin() {
						return true;
					};
			  })(); // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js

		function parseProtocol(url) {
			const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
			return (match && match[1]) || '';
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js

		/**
		 * Calculate data maxRate
		 * @param {Number} [samplesCount= 10]
		 * @param {Number} [min= 1000]
		 * @returns {Function}
		 */
		function speedometer(samplesCount, min) {
			samplesCount = samplesCount || 10;
			const bytes = new Array(samplesCount);
			const timestamps = new Array(samplesCount);
			let head = 0;
			let tail = 0;
			let firstSampleTS;

			min = min !== undefined ? min : 1000;

			return function push(chunkLength) {
				const now = Date.now();

				const startedAt = timestamps[tail];

				if (!firstSampleTS) {
					firstSampleTS = now;
				}

				bytes[head] = chunkLength;
				timestamps[head] = now;

				let i = tail;
				let bytesCount = 0;

				while (i !== head) {
					bytesCount += bytes[i++];
					i = i % samplesCount;
				}

				head = (head + 1) % samplesCount;

				if (head === tail) {
					tail = (tail + 1) % samplesCount;
				}

				if (now - firstSampleTS < min) {
					return;
				}

				const passed = startedAt && now - startedAt;

				return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
			};
		}

		/* harmony default export */ var helpers_speedometer = speedometer; // CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js

		function progressEventReducer(listener, isDownloadStream) {
			let bytesNotified = 0;
			const _speedometer = helpers_speedometer(50, 250);

			return (e) => {
				const loaded = e.loaded;
				const total = e.lengthComputable ? e.total : undefined;
				const progressBytes = loaded - bytesNotified;
				const rate = _speedometer(progressBytes);
				const inRange = loaded <= total;

				bytesNotified = loaded;

				const data = {
					loaded,
					total,
					progress: total ? loaded / total : undefined,
					bytes: progressBytes,
					rate: rate ? rate : undefined,
					estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
					event: e,
				};

				data[isDownloadStream ? 'download' : 'upload'] = true;

				listener(data);
			};
		}

		const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

		/* harmony default export */ var xhr =
			isXHRAdapterSupported &&
			function (config) {
				return new Promise(function dispatchXhrRequest(resolve, reject) {
					let requestData = config.data;
					const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
					const responseType = config.responseType;
					let onCanceled;
					function done() {
						if (config.cancelToken) {
							config.cancelToken.unsubscribe(onCanceled);
						}

						if (config.signal) {
							config.signal.removeEventListener('abort', onCanceled);
						}
					}

					if (utils.isFormData(requestData)) {
						if (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv) {
							requestHeaders.setContentType(false); // Let the browser set it
						} else {
							requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
						}
					}

					let request = new XMLHttpRequest();

					// HTTP basic authentication
					if (config.auth) {
						const username = config.auth.username || '';
						const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
						requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
					}

					const fullPath = buildFullPath(config.baseURL, config.url);

					request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

					// Set the request timeout in MS
					request.timeout = config.timeout;

					function onloadend() {
						if (!request) {
							return;
						}
						// Prepare the response
						const responseHeaders = core_AxiosHeaders.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
						const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
						const response = {
							data: responseData,
							status: request.status,
							statusText: request.statusText,
							headers: responseHeaders,
							config,
							request,
						};

						settle(
							function _resolve(value) {
								resolve(value);
								done();
							},
							function _reject(err) {
								reject(err);
								done();
							},
							response
						);

						// Clean up request
						request = null;
					}

					if ('onloadend' in request) {
						// Use onloadend if available
						request.onloadend = onloadend;
					} else {
						// Listen for ready state to emulate onloadend
						request.onreadystatechange = function handleLoad() {
							if (!request || request.readyState !== 4) {
								return;
							}

							// The request errored out and we didn't get a response, this will be
							// handled by onerror instead
							// With one exception: request that using file: protocol, most browsers
							// will return status as 0 even though it's a successful request
							if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
								return;
							}
							// readystate handler is calling before onerror or ontimeout handlers,
							// so we should call onloadend on the next 'tick'
							setTimeout(onloadend);
						};
					}

					// Handle browser request cancellation (as opposed to a manual cancellation)
					request.onabort = function handleAbort() {
						if (!request) {
							return;
						}

						reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

						// Clean up request
						request = null;
					};

					// Handle low level network errors
					request.onerror = function handleError() {
						// Real errors are hidden from us by the browser
						// onerror should only fire if it's a network error
						reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

						// Clean up request
						request = null;
					};

					// Handle timeout
					request.ontimeout = function handleTimeout() {
						let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
						const transitional = config.transitional || defaults_transitional;
						if (config.timeoutErrorMessage) {
							timeoutErrorMessage = config.timeoutErrorMessage;
						}
						reject(
							new core_AxiosError(
								timeoutErrorMessage,
								transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
								config,
								request
							)
						);

						// Clean up request
						request = null;
					};

					// Add xsrf header
					// This is only done if running in a standard browser environment.
					// Specifically not if we're in a web worker, or react-native.
					if (browser.isStandardBrowserEnv) {
						// Add xsrf header
						const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

						if (xsrfValue) {
							requestHeaders.set(config.xsrfHeaderName, xsrfValue);
						}
					}

					// Remove Content-Type if data is undefined
					requestData === undefined && requestHeaders.setContentType(null);

					// Add headers to the request
					if ('setRequestHeader' in request) {
						utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
							request.setRequestHeader(key, val);
						});
					}

					// Add withCredentials to request if needed
					if (!utils.isUndefined(config.withCredentials)) {
						request.withCredentials = !!config.withCredentials;
					}

					// Add responseType to request if needed
					if (responseType && responseType !== 'json') {
						request.responseType = config.responseType;
					}

					// Handle progress if needed
					if (typeof config.onDownloadProgress === 'function') {
						request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
					}

					// Not all browsers support upload events
					if (typeof config.onUploadProgress === 'function' && request.upload) {
						request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
					}

					if (config.cancelToken || config.signal) {
						// Handle cancellation
						// eslint-disable-next-line func-names
						onCanceled = (cancel) => {
							if (!request) {
								return;
							}
							reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
							request.abort();
							request = null;
						};

						config.cancelToken && config.cancelToken.subscribe(onCanceled);
						if (config.signal) {
							config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
						}
					}

					const protocol = parseProtocol(fullPath);

					if (protocol && browser.protocols.indexOf(protocol) === -1) {
						reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
						return;
					}

					// Send the request
					request.send(requestData || null);
				});
			}; // CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js

		const knownAdapters = {
			http: helpers_null,
			xhr: xhr,
		};

		utils.forEach(knownAdapters, (fn, value) => {
			if (fn) {
				try {
					Object.defineProperty(fn, 'name', { value });
				} catch (e) {
					// eslint-disable-next-line no-empty
				}
				Object.defineProperty(fn, 'adapterName', { value });
			}
		});

		/* harmony default export */ var adapters = {
			getAdapter: (adapters) => {
				adapters = utils.isArray(adapters) ? adapters : [adapters];

				const { length } = adapters;
				let nameOrAdapter;
				let adapter;

				for (let i = 0; i < length; i++) {
					nameOrAdapter = adapters[i];
					if ((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
						break;
					}
				}

				if (!adapter) {
					if (adapter === false) {
						throw new core_AxiosError(`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
					}

					throw new Error(
						utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
					);
				}

				if (!utils.isFunction(adapter)) {
					throw new TypeError('adapter is not a function');
				}

				return adapter;
			},
			adapters: knownAdapters,
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js

		/**
		 * Throws a `CanceledError` if cancellation has been requested.
		 *
		 * @param {Object} config The config that is to be used for the request
		 *
		 * @returns {void}
		 */
		function throwIfCancellationRequested(config) {
			if (config.cancelToken) {
				config.cancelToken.throwIfRequested();
			}

			if (config.signal && config.signal.aborted) {
				throw new cancel_CanceledError(null, config);
			}
		}

		/**
		 * Dispatch a request to the server using the configured adapter.
		 *
		 * @param {object} config The config that is to be used for the request
		 *
		 * @returns {Promise} The Promise to be fulfilled
		 */
		function dispatchRequest(config) {
			throwIfCancellationRequested(config);

			config.headers = core_AxiosHeaders.from(config.headers);

			// Transform request data
			config.data = transformData.call(config, config.transformRequest);

			if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
				config.headers.setContentType('application/x-www-form-urlencoded', false);
			}

			const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

			return adapter(config).then(
				function onAdapterResolution(response) {
					throwIfCancellationRequested(config);

					// Transform response data
					response.data = transformData.call(config, config.transformResponse, response);

					response.headers = core_AxiosHeaders.from(response.headers);

					return response;
				},
				function onAdapterRejection(reason) {
					if (!isCancel(reason)) {
						throwIfCancellationRequested(config);

						// Transform response data
						if (reason && reason.response) {
							reason.response.data = transformData.call(config, config.transformResponse, reason.response);
							reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
						}
					}

					return Promise.reject(reason);
				}
			);
		} // CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js

		const headersToObject = (thing) => (thing instanceof core_AxiosHeaders ? thing.toJSON() : thing);

		/**
		 * Config-specific merge-function which creates a new config-object
		 * by merging two configuration objects together.
		 *
		 * @param {Object} config1
		 * @param {Object} config2
		 *
		 * @returns {Object} New object resulting from merging config2 to config1
		 */
		function mergeConfig(config1, config2) {
			// eslint-disable-next-line no-param-reassign
			config2 = config2 || {};
			const config = {};

			function getMergedValue(target, source, caseless) {
				if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
					return utils.merge.call({ caseless }, target, source);
				} else if (utils.isPlainObject(source)) {
					return utils.merge({}, source);
				} else if (utils.isArray(source)) {
					return source.slice();
				}
				return source;
			}

			// eslint-disable-next-line consistent-return
			function mergeDeepProperties(a, b, caseless) {
				if (!utils.isUndefined(b)) {
					return getMergedValue(a, b, caseless);
				} else if (!utils.isUndefined(a)) {
					return getMergedValue(undefined, a, caseless);
				}
			}

			// eslint-disable-next-line consistent-return
			function valueFromConfig2(a, b) {
				if (!utils.isUndefined(b)) {
					return getMergedValue(undefined, b);
				}
			}

			// eslint-disable-next-line consistent-return
			function defaultToConfig2(a, b) {
				if (!utils.isUndefined(b)) {
					return getMergedValue(undefined, b);
				} else if (!utils.isUndefined(a)) {
					return getMergedValue(undefined, a);
				}
			}

			// eslint-disable-next-line consistent-return
			function mergeDirectKeys(a, b, prop) {
				if (prop in config2) {
					return getMergedValue(a, b);
				} else if (prop in config1) {
					return getMergedValue(undefined, a);
				}
			}

			const mergeMap = {
				url: valueFromConfig2,
				method: valueFromConfig2,
				data: valueFromConfig2,
				baseURL: defaultToConfig2,
				transformRequest: defaultToConfig2,
				transformResponse: defaultToConfig2,
				paramsSerializer: defaultToConfig2,
				timeout: defaultToConfig2,
				timeoutMessage: defaultToConfig2,
				withCredentials: defaultToConfig2,
				adapter: defaultToConfig2,
				responseType: defaultToConfig2,
				xsrfCookieName: defaultToConfig2,
				xsrfHeaderName: defaultToConfig2,
				onUploadProgress: defaultToConfig2,
				onDownloadProgress: defaultToConfig2,
				decompress: defaultToConfig2,
				maxContentLength: defaultToConfig2,
				maxBodyLength: defaultToConfig2,
				beforeRedirect: defaultToConfig2,
				transport: defaultToConfig2,
				httpAgent: defaultToConfig2,
				httpsAgent: defaultToConfig2,
				cancelToken: defaultToConfig2,
				socketPath: defaultToConfig2,
				responseEncoding: defaultToConfig2,
				validateStatus: mergeDirectKeys,
				headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true),
			};

			utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
				const merge = mergeMap[prop] || mergeDeepProperties;
				const configValue = merge(config1[prop], config2[prop], prop);
				(utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
			});

			return config;
		} // CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js

		const VERSION = '1.5.0'; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js
		const validators = {};

		// eslint-disable-next-line func-names
		['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
			validators[type] = function validator(thing) {
				return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
			};
		});

		const deprecatedWarnings = {};

		/**
		 * Transitional option validator
		 *
		 * @param {function|boolean?} validator - set to false if the transitional option has been removed
		 * @param {string?} version - deprecated version / removed since version
		 * @param {string?} message - some message with additional info
		 *
		 * @returns {function}
		 */
		validators.transitional = function transitional(validator, version, message) {
			function formatMessage(opt, desc) {
				return '[Axios v' + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? '. ' + message : '');
			}

			// eslint-disable-next-line func-names
			return (value, opt, opts) => {
				if (validator === false) {
					throw new core_AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), core_AxiosError.ERR_DEPRECATED);
				}

				if (version && !deprecatedWarnings[opt]) {
					deprecatedWarnings[opt] = true;
					// eslint-disable-next-line no-console
					console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
				}

				return validator ? validator(value, opt, opts) : true;
			};
		};

		/**
		 * Assert object's properties type
		 *
		 * @param {object} options
		 * @param {object} schema
		 * @param {boolean?} allowUnknown
		 *
		 * @returns {object}
		 */

		function assertOptions(options, schema, allowUnknown) {
			if (typeof options !== 'object') {
				throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
			}
			const keys = Object.keys(options);
			let i = keys.length;
			while (i-- > 0) {
				const opt = keys[i];
				const validator = schema[opt];
				if (validator) {
					const value = options[opt];
					const result = value === undefined || validator(value, opt, options);
					if (result !== true) {
						throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
					}
					continue;
				}
				if (allowUnknown !== true) {
					throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
				}
			}
		}

		/* harmony default export */ var validator = {
			assertOptions,
			validators,
		}; // CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js

		const Axios_validators = validator.validators;

		/**
		 * Create a new instance of Axios
		 *
		 * @param {Object} instanceConfig The default config for the instance
		 *
		 * @return {Axios} A new instance of Axios
		 */
		class Axios {
			constructor(instanceConfig) {
				this.defaults = instanceConfig;
				this.interceptors = {
					request: new core_InterceptorManager(),
					response: new core_InterceptorManager(),
				};
			}

			/**
			 * Dispatch a request
			 *
			 * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
			 * @param {?Object} config
			 *
			 * @returns {Promise} The Promise to be fulfilled
			 */
			request(configOrUrl, config) {
				/*eslint no-param-reassign:0*/
				// Allow for axios('example/url'[, config]) a la fetch API
				if (typeof configOrUrl === 'string') {
					config = config || {};
					config.url = configOrUrl;
				} else {
					config = configOrUrl || {};
				}

				config = mergeConfig(this.defaults, config);

				const { transitional, paramsSerializer, headers } = config;

				if (transitional !== undefined) {
					validator.assertOptions(
						transitional,
						{
							silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
							forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
							clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean),
						},
						false
					);
				}

				if (paramsSerializer != null) {
					if (utils.isFunction(paramsSerializer)) {
						config.paramsSerializer = {
							serialize: paramsSerializer,
						};
					} else {
						validator.assertOptions(
							paramsSerializer,
							{
								encode: Axios_validators.function,
								serialize: Axios_validators.function,
							},
							true
						);
					}
				}

				// Set config.method
				config.method = (config.method || this.defaults.method || 'get').toLowerCase();

				// Flatten headers
				let contextHeaders = headers && utils.merge(headers.common, headers[config.method]);

				headers &&
					utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (method) => {
						delete headers[method];
					});

				config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

				// filter out skipped interceptors
				const requestInterceptorChain = [];
				let synchronousRequestInterceptors = true;
				this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
					if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
						return;
					}

					synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

					requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
				});

				const responseInterceptorChain = [];
				this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
					responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
				});

				let promise;
				let i = 0;
				let len;

				if (!synchronousRequestInterceptors) {
					const chain = [dispatchRequest.bind(this), undefined];
					chain.unshift.apply(chain, requestInterceptorChain);
					chain.push.apply(chain, responseInterceptorChain);
					len = chain.length;

					promise = Promise.resolve(config);

					while (i < len) {
						promise = promise.then(chain[i++], chain[i++]);
					}

					return promise;
				}

				len = requestInterceptorChain.length;

				let newConfig = config;

				i = 0;

				while (i < len) {
					const onFulfilled = requestInterceptorChain[i++];
					const onRejected = requestInterceptorChain[i++];
					try {
						newConfig = onFulfilled(newConfig);
					} catch (error) {
						onRejected.call(this, error);
						break;
					}
				}

				try {
					promise = dispatchRequest.call(this, newConfig);
				} catch (error) {
					return Promise.reject(error);
				}

				i = 0;
				len = responseInterceptorChain.length;

				while (i < len) {
					promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
				}

				return promise;
			}

			getUri(config) {
				config = mergeConfig(this.defaults, config);
				const fullPath = buildFullPath(config.baseURL, config.url);
				return buildURL(fullPath, config.params, config.paramsSerializer);
			}
		}

		// Provide aliases for supported request methods
		utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
			/*eslint func-names:0*/
			Axios.prototype[method] = function (url, config) {
				return this.request(
					mergeConfig(config || {}, {
						method,
						url,
						data: (config || {}).data,
					})
				);
			};
		});

		utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
			/*eslint func-names:0*/

			function generateHTTPMethod(isForm) {
				return function httpMethod(url, data, config) {
					return this.request(
						mergeConfig(config || {}, {
							method,
							headers: isForm
								? {
										'Content-Type': 'multipart/form-data',
								  }
								: {},
							url,
							data,
						})
					);
				};
			}

			Axios.prototype[method] = generateHTTPMethod();

			Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
		});

		/* harmony default export */ var core_Axios = Axios; // CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js

		/**
		 * A `CancelToken` is an object that can be used to request cancellation of an operation.
		 *
		 * @param {Function} executor The executor function.
		 *
		 * @returns {CancelToken}
		 */
		class CancelToken {
			constructor(executor) {
				if (typeof executor !== 'function') {
					throw new TypeError('executor must be a function.');
				}

				let resolvePromise;

				this.promise = new Promise(function promiseExecutor(resolve) {
					resolvePromise = resolve;
				});

				const token = this;

				// eslint-disable-next-line func-names
				this.promise.then((cancel) => {
					if (!token._listeners) return;

					let i = token._listeners.length;

					while (i-- > 0) {
						token._listeners[i](cancel);
					}
					token._listeners = null;
				});

				// eslint-disable-next-line func-names
				this.promise.then = (onfulfilled) => {
					let _resolve;
					// eslint-disable-next-line func-names
					const promise = new Promise((resolve) => {
						token.subscribe(resolve);
						_resolve = resolve;
					}).then(onfulfilled);

					promise.cancel = function reject() {
						token.unsubscribe(_resolve);
					};

					return promise;
				};

				executor(function cancel(message, config, request) {
					if (token.reason) {
						// Cancellation has already been requested
						return;
					}

					token.reason = new cancel_CanceledError(message, config, request);
					resolvePromise(token.reason);
				});
			}

			/**
			 * Throws a `CanceledError` if cancellation has been requested.
			 */
			throwIfRequested() {
				if (this.reason) {
					throw this.reason;
				}
			}

			/**
			 * Subscribe to the cancel signal
			 */

			subscribe(listener) {
				if (this.reason) {
					listener(this.reason);
					return;
				}

				if (this._listeners) {
					this._listeners.push(listener);
				} else {
					this._listeners = [listener];
				}
			}

			/**
			 * Unsubscribe from the cancel signal
			 */

			unsubscribe(listener) {
				if (!this._listeners) {
					return;
				}
				const index = this._listeners.indexOf(listener);
				if (index !== -1) {
					this._listeners.splice(index, 1);
				}
			}

			/**
			 * Returns an object that contains a new `CancelToken` and a function that, when called,
			 * cancels the `CancelToken`.
			 */
			static source() {
				let cancel;
				const token = new CancelToken(function executor(c) {
					cancel = c;
				});
				return {
					token,
					cancel,
				};
			}
		}

		/* harmony default export */ var cancel_CancelToken = CancelToken; // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js

		/**
		 * Syntactic sugar for invoking a function and expanding an array for arguments.
		 *
		 * Common use case would be to use `Function.prototype.apply`.
		 *
		 *  ```js
		 *  function f(x, y, z) {}
		 *  var args = [1, 2, 3];
		 *  f.apply(null, args);
		 *  ```
		 *
		 * With `spread` this example can be re-written.
		 *
		 *  ```js
		 *  spread(function(x, y, z) {})([1, 2, 3]);
		 *  ```
		 *
		 * @param {Function} callback
		 *
		 * @returns {Function}
		 */
		function spread(callback) {
			return function wrap(arr) {
				return callback.apply(null, arr);
			};
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js

		/**
		 * Determines whether the payload is an error thrown by Axios
		 *
		 * @param {*} payload The value to test
		 *
		 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
		 */
		function isAxiosError(payload) {
			return utils.isObject(payload) && payload.isAxiosError === true;
		} // CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js

		const HttpStatusCode = {
			Continue: 100,
			SwitchingProtocols: 101,
			Processing: 102,
			EarlyHints: 103,
			Ok: 200,
			Created: 201,
			Accepted: 202,
			NonAuthoritativeInformation: 203,
			NoContent: 204,
			ResetContent: 205,
			PartialContent: 206,
			MultiStatus: 207,
			AlreadyReported: 208,
			ImUsed: 226,
			MultipleChoices: 300,
			MovedPermanently: 301,
			Found: 302,
			SeeOther: 303,
			NotModified: 304,
			UseProxy: 305,
			Unused: 306,
			TemporaryRedirect: 307,
			PermanentRedirect: 308,
			BadRequest: 400,
			Unauthorized: 401,
			PaymentRequired: 402,
			Forbidden: 403,
			NotFound: 404,
			MethodNotAllowed: 405,
			NotAcceptable: 406,
			ProxyAuthenticationRequired: 407,
			RequestTimeout: 408,
			Conflict: 409,
			Gone: 410,
			LengthRequired: 411,
			PreconditionFailed: 412,
			PayloadTooLarge: 413,
			UriTooLong: 414,
			UnsupportedMediaType: 415,
			RangeNotSatisfiable: 416,
			ExpectationFailed: 417,
			ImATeapot: 418,
			MisdirectedRequest: 421,
			UnprocessableEntity: 422,
			Locked: 423,
			FailedDependency: 424,
			TooEarly: 425,
			UpgradeRequired: 426,
			PreconditionRequired: 428,
			TooManyRequests: 429,
			RequestHeaderFieldsTooLarge: 431,
			UnavailableForLegalReasons: 451,
			InternalServerError: 500,
			NotImplemented: 501,
			BadGateway: 502,
			ServiceUnavailable: 503,
			GatewayTimeout: 504,
			HttpVersionNotSupported: 505,
			VariantAlsoNegotiates: 506,
			InsufficientStorage: 507,
			LoopDetected: 508,
			NotExtended: 510,
			NetworkAuthenticationRequired: 511,
		};

		Object.entries(HttpStatusCode).forEach(([key, value]) => {
			HttpStatusCode[value] = key;
		});

		/* harmony default export */ var helpers_HttpStatusCode = HttpStatusCode; // CONCATENATED MODULE: ./node_modules/axios/lib/axios.js

		/**
		 * Create an instance of Axios
		 *
		 * @param {Object} defaultConfig The default config for the instance
		 *
		 * @returns {Axios} A new instance of Axios
		 */
		function createInstance(defaultConfig) {
			const context = new core_Axios(defaultConfig);
			const instance = bind(core_Axios.prototype.request, context);

			// Copy axios.prototype to instance
			utils.extend(instance, core_Axios.prototype, context, { allOwnKeys: true });

			// Copy context to instance
			utils.extend(instance, context, null, { allOwnKeys: true });

			// Factory for creating new instances
			instance.create = function create(instanceConfig) {
				return createInstance(mergeConfig(defaultConfig, instanceConfig));
			};

			return instance;
		}

		// Create the default instance to be exported
		const axios = createInstance(lib_defaults);

		// Expose Axios class to allow class inheritance
		axios.Axios = core_Axios;

		// Expose Cancel & CancelToken
		axios.CanceledError = cancel_CanceledError;
		axios.CancelToken = cancel_CancelToken;
		axios.isCancel = isCancel;
		axios.VERSION = VERSION;
		axios.toFormData = helpers_toFormData;

		// Expose AxiosError class
		axios.AxiosError = core_AxiosError;

		// alias for CanceledError for backward compatibility
		axios.Cancel = axios.CanceledError;

		// Expose all/spread
		axios.all = function all(promises) {
			return Promise.all(promises);
		};

		axios.spread = spread;

		// Expose isAxiosError
		axios.isAxiosError = isAxiosError;

		// Expose mergeConfig
		axios.mergeConfig = mergeConfig;

		axios.AxiosHeaders = core_AxiosHeaders;

		axios.formToJSON = (thing) => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

		axios.getAdapter = adapters.getAdapter;

		axios.HttpStatusCode = helpers_HttpStatusCode;

		axios.default = axios;

		// this module should only have a default export
		/* harmony default export */ var lib_axios = axios;

		// EXTERNAL MODULE: ./node_modules/crypto-js/md5.js
		var md5 = __webpack_require__(214);
		var md5_default = /*#__PURE__*/ __webpack_require__.n(md5); // CONCATENATED MODULE: ./src/frontend/js/functions/api.js
		const { rest_api, rest_nonce } = alm_localize;

		/*
		 * Create a Api object with Axios and configure it for the WordPRess Rest API.
		 *
		 * @see https://axios-http.com/docs/instance
		 */
		const api = lib_axios.create({
			baseURL: rest_api,
			headers: {
				'content-type': 'application/json',
				'X-WP-Nonce': rest_nonce,
			},
		}); // CONCATENATED MODULE: ./src/frontend/js/addons/cache.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function cacheCreateParams(alm) {
			const { listing } = alm;
			alm.addons.cache = listing?.dataset?.cache === 'true';
			if (alm.addons.cache) {
				alm.addons.cache_id = listing.dataset.cacheId;
				alm.addons.cache_path = listing.dataset.cachePath;
				alm.addons.cache_logged_in = listing.dataset.cacheLoggedIn ? listing.dataset.cacheLoggedIn : false;
			}
			return alm;
		}

		/**
		 * Create unique cache slug from query params.
		 *
		 * @param {Object} alm  The ALM object.
		 * @param {Object} data The data object.
		 * @return {string}     The cache file slug.
		 */
		function getCacheSlug(alm, data) {
			const { addons, pagePrev, page, rel = 'next' } = alm;
			if (addons.nextpage) {
				return `page-${page + addons.nextpage_startpage}`; // Nextpage.
			} else if (addons.single_post) {
				return addons.single_post_id; // Single Post.
			} else if (addons.woocommerce || addons.elementor) {
				return rel === 'prev' ? `page-${pagePrev}` : `page-${page + 1}`; // WooCommerce || Elementor.
			}
			return md5_default()(JSON.stringify(data)).toString(); // Standard.
		}

		/**
		 * Create a cache file.
		 *
		 * @param {Object} alm  The ALM object.
		 * @param {string} data Content to cache.
		 * @param {string} name The cache slug
		 * @since 5.3.1
		 */
		async function createCache(alm, data, name) {
			const { html = '', meta = {} } = data;

			if (!html || !alm.addons.cache) {
				return;
			}

			const params = {
				cache_id: alm.addons.cache_id,
				cache_logged_in: alm.addons.cache_logged_in,
				canonical_url: alm.canonical_url,
				name,
				html: html.trim(),
				postcount: meta.postcount,
				totalposts: meta.totalposts,
			};

			// Create the cache file via REST API.
			const res = await api.post('ajax-load-more/cache/create', params);
			if (res.status === 200 && res.data && res.data.success) {
				console.log(res.data.msg); // eslint-disable-line no-console
			}
		}

		/**
		 * Get cache data file.
		 *
		 * @param {Object} alm    The ALM object.
		 * @param {Object} params Query params.
		 * @return {Promise}      Cache data or false.
		 */
		async function getCache(alm, params) {
			if (!alm.addons.cache || (alm.addons.cache && alm.addons.cache_logged_in)) {
				// Exit if not cache or cache is enabled but user is logged in with the no-cache setting checked.
				return false;
			}

			const restParams = {
				id: alm.addons.cache_id,
				name: params.cache_slug,
			};

			const res = await api.get('ajax-load-more/cache/get', { params: restParams });
			if (res.status === 200 && res.data) {
				return res.data;
			}

			return false;
		} // CONCATENATED MODULE: ./src/frontend/js/addons/call-to-actions.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function ctaCreateParams(alm) {
			const { listing } = alm;
			alm.addons.cta = listing?.dataset?.cta === 'true';
			if (alm.addons.cta) {
				alm.addons.cta_position = listing.dataset.ctaPosition;
				alm.addons.cta_repeater = listing.dataset.ctaRepeater;
				alm.addons.cta_theme_repeater = listing.dataset.ctaThemeRepeater;
			}
			return alm;
		} // CONCATENATED MODULE: ./src/frontend/js/addons/comments.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function commentsCreateParams(alm) {
			const { listing } = alm;
			alm.addons.comments = listing?.dataset?.comments === 'true';
			if (alm.addons.comments) {
				alm.addons.comments_post_id = listing.dataset.comments_post_id;
				alm.addons.comments_per_page = listing.dataset.comments_per_page;
				alm.addons.comments_per_page = alm.addons.comments_per_page === undefined ? '5' : alm.addons.comments_per_page;
				alm.addons.comments_type = listing.dataset.comments_type;
				alm.addons.comments_style = listing.dataset.comments_style;
				alm.addons.comments_template = listing.dataset.comments_template;
				alm.addons.comments_callback = listing.dataset.comments_callback;
			}
			return alm;
		} // CONCATENATED MODULE: ./src/frontend/js/functions/getButtonURL.js

		/**
		 * Get the URL for Load More button.
		 *
		 * @param {Object} alm The Ajax Load More object.
		 * @param {string} rel The type of load more, `next` or `previous`.
		 * @since 5.4.0
		 */
		function getButtonURL(alm, rel = 'next') {
			if (!alm || !alm.trigger) {
				return false;
			}
			let button = alm.trigger.querySelector('.alm-load-more-btn');
			if (rel === 'prev') {
				button = document.querySelector('.alm-load-more-btn--prev');
			}

			return button?.dataset?.url || '';
		}

		/**
		 * Set button dataset attributes.
		 *
		 * @param {Element} button The HTML element.
		 * @param {number}  page   The current page number.
		 * @param {string}  url    The URL for updating.
		 */
		function setButtonAtts(button, page, url) {
			if (!button) {
				return;
			}

			if (button.rel && button.rel === 'prev') {
				button.href = url;
			}

			// Set page & URL attributes.
			button.dataset.page = page;
			button.dataset.url = url ? url : '';
		} // CONCATENATED MODULE: ./src/frontend/js/modules/lazyImages.js

		/**
		 * Lazy load images helper.
		 * When a plugin or 3rd party script has hooked into WP Post Thumbnails to provide a lazy load solution, images will not load via Ajax.
		 * This helper provides a fix by grabbing the dataset value and making it the src.
		 *
		 * @param {Object} alm The Ajax Load More object.
		 */
		function lazyImages(alm) {
			const { lazy_images, last_loaded } = alm;
			if (lazy_images && last_loaded?.length) {
				last_loaded.forEach((item) => {
					lazyImagesReplace(item);
				});
			}
		}

		/**
		 * Loop all images in container and replace the src.
		 *
		 * @param {HTMLElement} container The element HTML.
		 */
		function lazyImagesReplace(container) {
			const images = container.querySelectorAll('img');
			if (images) {
				// Loop all images.
				[...images].forEach((image) => {
					if (image) {
						replaceSrc(image);
					}
				});
			}
		}

		/**
		 * Replace the image src with the value from data-src attributes.
		 *
		 * @param {HTMLElement} img The HTML image element.
		 */
		function replaceSrc(img) {
			if (!img) {
				return;
			}
			if (img?.dataset?.src) {
				img.src = img.dataset.src;
			}
			if (img?.dataset?.srcset) {
				img.srcset = img.dataset.srcset;
			}
			// Blocksy Pro.
			// @see https://creativethemes.com/blocksy
			if (img?.dataset?.ctLazy) {
				img.src = img.dataset.ctLazy;
			}
			if (img?.dataset?.ctLazySet) {
				img.srcset = img.dataset.ctLazySet;
			}
		} // CONCATENATED MODULE: ./src/frontend/js/functions/srcsetPolyfill.js

		/**
		 * A srcset polyfill to get Masonry and ImagesLoaded working with Safari and Firefox.
		 *
		 * @param {HTMLElement} container Container HTML element.
		 * @param {string}      ua        The user-agent string.
		 * @since 5.0.2
		 */
		function srcsetPolyfill(container = null, ua = '') {
			if (!container) {
				return false; // Exit if no container.
			}

			// Exit if useragent is Chrome, Safari or Windows.
			if ((ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') !== -1) || ua.indexOf('Firefox') > -1 || ua.indexOf('Windows') > -1) {
				return false;
			}

			// Get all images.
			const imgs = container.querySelectorAll('img[srcset]:not(.alm-loaded)');

			// Loop images.
			for (let i = 0; i < imgs.length; i++) {
				const img = imgs[i];
				img.classList.add('alm-loaded');
				img.outerHTML = img.outerHTML;
			}
		} // CONCATENATED MODULE: ./src/frontend/js/modules/loadImage.js

		const imagesLoaded = __webpack_require__(564);

		/**
		 * Load the image with imagesLoaded
		 *
		 * @param {Element} container     The HTML container.
		 * @param {Element} item          The element to load.
		 * @param {string}  ua            Browser user-agent.
		 * @param {string}  rel           The loading direction, next or prev.
		 * @param {boolean} waitForImages Wait for images to load before loading next item.
		 */
		function loadImage(container, item, ua, rel = 'next', waitForImages = true) {
			/**
			 * Append item to container.
			 */
			function appendImage() {
				if (rel === 'prev') {
					container.insertBefore(item, container.childNodes[0]);
				} else {
					container.appendChild(item);
				}

				lazyImagesReplace(item); // Lazy load image fix.
				srcsetPolyfill(item, ua); // Safari/Firefox polyfills.
			}

			return new Promise((resolve) => {
				item.style.transition = 'all 0.25s ease'; // Add CSS transition to each item.

				if (waitForImages) {
					imagesLoaded(item, function () {
						appendImage();
						resolve(true); // Send Promise callback
					});
				} else {
					appendImage();
					resolve(true); // Send Promise callback
				}
			});
		} // CONCATENATED MODULE: ./src/frontend/js/functions/setFocus.js

		/**
		 * Set user focus to improve accessibility after load events.
		 *
		 * @param {Object}  alm       ALM object.
		 * @param {Element} element   The element to focus on.
		 * @param {number}  total     The total number of posts returned.
		 * @param {boolean} filtering Is this a filtering event.
		 * @since 5.1
		 */
		function setFocus(alm, element = null, total = 0, filtering = false) {
			if (!alm_localize?.a11y_focus || !element) {
				return;
			}

			// WooCommerce||ELementor Add-ons.
			if (alm.addons.woocommerce || alm.addons.elementor) {
				moveFocus(false, false, element, false);
				return;
			}

			if (total < 1) {
				return; // Exit if no posts returned.
			}

			if (alm.addons.paging) {
				// Paging.
				moveFocus(alm.init, alm.addons.preloaded, alm.listing, filtering);
			} else if (alm.addons.single_post || alm.addons.nextpage) {
				// Single Posts || Next Page - Set `init` to false to trigger focus.
				moveFocus(false, alm.addons.preloaded, element, filtering);
			} else {
				// Standard.
				moveFocus(alm.init, alm.addons.preloaded, element, filtering);
			}
		}

		/**
		 * Move user focus to latest elements that have been loaded.
		 *
		 * @param {boolean} init      Initial run true or false.
		 * @param {string}  preloaded Preloaded true or false.
		 * @param {Element} element   The container HTML element.
		 * @param {boolean} filtering Filtering true or false.
		 * @since 5.1
		 */

		function moveFocus(init = true, preloaded = 'false', element, filtering = false) {
			if (!filtering) {
				if ((init || !element) && preloaded !== 'true') {
					return; // Exit if first run
				}
			}

			element.setAttribute('tabIndex', '-1'); // Set tabIndex.
			element.style.outline = 'none'; // Set element outline.

			// Add slight delay for elements to settle into DOM.
			setTimeout(function () {
				element.focus({ preventScroll: true });
			}, 25);
		} // CONCATENATED MODULE: ./src/frontend/js/modules/loadItems.js

		/**
		 * Load all items after Ajax request.
		 *
		 * Note: The function is used with WooCommerce and Elementor add-ons.
		 *
		 * @param {HTMLElement} container     The HTML container.
		 * @param {Array}       items         Array of items.
		 * @param {Object}      alm           The ALM object.
		 * @param {boolean}     waitForImages Wait for images to load before loading next item.
		 */
		function loadItems(container, items, alm, waitForImages = true) {
			return new Promise((resolve) => {
				const { rel = 'next' } = alm;
				const total = items.length;
				let index = 0;
				let count = 1;

				// Reverse items array if rel is 'prev'.
				items = rel === 'prev' ? items.reverse() : items;

				function loadItem() {
					if (count <= total) {
						(async function () {
							items[index].style.opacity = 0;
							await loadImage(container, items[index], alm.ua, rel, waitForImages);
							count++;
							index++;
							loadItem();
						})().catch(() => {
							console.warn('There was an error loading the items.');
						});
					} else {
						// Delay for effect only
						setTimeout(function () {
							items.map(function (item) {
								item.style.opacity = 1;
								return item;
							});
							if (items[0]) {
								const focusItem = rel === 'prev' ? items[items.length - 1] : items[0]; // Get the item to focus.
								setFocus(alm, focusItem, null, false); // Set the focus.
							}
						}, 25);

						resolve(true);
					}
				}

				loadItem();
			});
		} // CONCATENATED MODULE: ./src/frontend/js/addons/elementor.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function elementorCreateParams(alm) {
			const { listing } = alm;

			alm.addons.elementor = listing.dataset.elementor === 'posts' && listing.dataset.elementorSettings;
			if (alm.addons.elementor) {
				// Get Settings
				alm.addons.elementor_type = 'posts';
				alm.addons.elementor_settings = JSON.parse(alm.listing.dataset.elementorSettings);

				// Parse Container Settings
				alm.addons.elementor_target = alm.addons.elementor_settings.target;
				alm.addons.elementor_element = alm.addons.elementor_settings.target
					? document.querySelector(`.elementor-element ${alm.addons.elementor_settings.target}`)
					: '';
				alm.addons.elementor_widget = elementorGetWidgetType(alm.addons.elementor_element);

				// Masonry
				alm = setElementorClasses(alm, alm.addons.elementor_widget);

				// Pagination Element
				alm.addons.elementor_controls = alm.addons.elementor_settings.controls;
				alm.addons.elementor_controls = alm.addons.elementor_controls === 'true' ? true : false;
				alm.addons.elementor_scrolltop = parseInt(alm.addons.elementor_settings.scrolltop);

				// Get next page URL.
				alm.addons.elementor_next_page = elementorGetNextUrl(alm, alm.addons.elementor_element);

				// Get the max pages.
				alm.addons.elementor_max_pages = alm.addons.elementor_element.querySelector('.e-load-more-anchor');
				alm.addons.elementor_max_pages = alm.addons.elementor_max_pages ? parseInt(alm.addons.elementor_max_pages.dataset.maxPage) : 999;

				alm.addons.elementor_paged = alm.addons.elementor_settings.paged ? parseInt(alm.addons.elementor_settings.paged) : 1;
				alm.page = parseInt(alm.page) + alm.addons.elementor_paged;

				// Masonry
				alm = parseMasonryConfig(alm);

				if (!alm.addons.elementor_element) {
					console.warn("Ajax Load More: Unable to locate Elementor Widget. Are you sure you've set up your target parameter correctly?");
				}
				if (!alm.addons.elementor_next_page) {
					console.warn(
						'Ajax Load More: Unable to locate Elementor pagination. There are either no results or Ajax Load More is unable to locate the pagination widget?'
					);
				}
			}
			return alm;
		}

		/**
		 * Set up the instance on Elementor
		 *
		 * @param {Object} alm
		 * @since 5.3.0
		 */
		function elementorInit(alm) {
			if (!alm.addons.elementor || !alm.addons.elementor_type || !alm.addons.elementor_type === 'posts') {
				return false;
			}
			const target = alm.addons.elementor_element;

			if (target) {
				// Set button data attributes
				alm.button.dataset.page = alm.addons.elementor_paged;

				// Set button URL
				const nextPage = alm.addons.elementor_next_page;
				alm.button.dataset.url = nextPage ? nextPage : '';

				// Set a11y attributes
				target.setAttribute('aria-live', 'polite');
				target.setAttribute('aria-atomic', 'true');
				alm.listing.removeAttribute('aria-live');
				alm.listing.removeAttribute('aria-atomic');

				// Set data atts on 1st grid item
				const item = target.querySelector(`.${alm.addons.elementor_item_class}`); // Get first `.product` item
				if (item) {
					item.classList.add('alm-elementor');
					item.dataset.url = window.location;
					item.dataset.page = alm.addons.elementor_paged;
					item.dataset.pageTitle = document.title;
				}

				// Masonry Window Resize. Delay for masonry to be added via Elementor.
				if (alm.addons.elementor_masonry) {
					let resizeTimeout;
					setTimeout(function () {
						window.addEventListener('resize', function () {
							clearTimeout(resizeTimeout);
							resizeTimeout = setTimeout(function () {
								positionMasonryItems(alm, `.${alm.addons.elementor_container_class}`, `.${alm.addons.elementor_item_class}`);
							}, 100);
						});
					}, 250);
				}
			}
		}

		/**
		 * Get the content, title and results text from the Ajax response.
		 *
		 * @param {Object} alm        The alm object.
		 * @param {string} url        The request URL.
		 * @param {Object} response   Query response.
		 * @param {string} cache_slug The cache slug.
		 * @return {Object}           Results data.
		 * @since 5.4.0
		 */
		function elementorGetContent(alm, url, response, cache_slug) {
			// Default data object.
			const data = {
				html: '',
				meta: {
					postcount: 0,
					totalposts: 0,
				},
			};

			// Successful response.
			if (response.status === 200 && response.data) {
				const { addons, page, button } = alm;

				// Create temp div to hold response data.
				const content = document.createElement('div');
				content.innerHTML = response.data;

				// Set button URL.
				const nextURL = elementorGetNextUrl(alm, content);
				if (nextURL) {
					setButtonAtts(button, page + 1, nextURL);
				} else {
					// Disable button if no next page.
					alm.AjaxLoadMore.triggerDone();
				}

				// Get Page Title
				const title = content.querySelector('title').innerHTML;
				data.pageTitle = title;

				// Get Elementor Items container.
				const container = content.querySelector(`${addons.elementor_target} .${addons.elementor_container_class}`);
				if (!container) {
					console.warn(`Ajax Load More Elementor: Unable to find Elementor container element.`);
					return data;
				}

				// Get the first item and append data attributes.
				const item = container ? container.querySelector(`.${addons.elementor_item_class}`) : null;
				if (item) {
					item.classList.add('alm-elementor');
					item.dataset.url = url;
					item.dataset.page = addons.elementor_paged;
					item.dataset.pageTitle = title;
				}

				// Count the number of returned items.
				const items = container.querySelectorAll(`.${addons.elementor_item_class}`);
				if (items) {
					// Set the html to the elementor container data.
					data.html = container ? container.innerHTML : '';
					data.meta.postcount = items.length;
					data.meta.totalposts = items.length;

					// Create cache file.
					createCache(alm, data, cache_slug);
				}
			}
			return data;
		}

		/**
		 * Core ALM Elementor loader.
		 *
		 * @param {HTMLElement} content The HTML data.
		 * @param {Object}      alm     The alm object.
		 * @since 5.3.0
		 */
		function elementor(content, alm) {
			if (!content || !alm) {
				alm.AjaxLoadMore.triggerDone();
				return false;
			}

			return new Promise((resolve) => {
				const { addons } = alm;
				const container = alm.addons.elementor_element.querySelector(`.${addons.elementor_container_class}`); // Get post container
				const items = content.querySelectorAll(`.${addons.elementor_item_class}`); // Get all items in container

				if (container && items) {
					const ElementorItems = Array.prototype.slice.call(items); // Convert NodeList to Array

					// Trigger almElementorLoaded callback.
					if (typeof almElementorLoaded === 'function') {
						window.almElementorLoaded(ElementorItems);
					}

					(async function () {
						// Load the items.
						await loadItems(container, ElementorItems, alm);
						if (addons.elementor_masonry) {
							setTimeout(function () {
								positionMasonryItems(alm, `.${addons.elementor_container_class}`, `.${addons.elementor_item_class}`);
							}, 125);
						}

						resolve(true);
					})().catch((e) => {
						console.warn(e, 'There was an error with Elementor'); // eslint-disable-line no-console
					});
				} else {
					resolve(false);
				}
			});
		}

		/**
		 * Elementor loaded and dispatch actions.
		 *
		 * @param {Object} alm The alm object.
		 * @since 5.5.0
		 */
		function elementorLoaded(alm) {
			const { page, AjaxLoadMore, addons } = alm;
			const nextPage = page + 1;

			const max_pages = addons.elementor_max_pages;

			// Lazy load images if necessary.
			lazyImages(alm);

			// Trigger almComplete.
			if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
				window.almComplete(alm);
			}

			// End transitions.
			AjaxLoadMore.transitionEnd();

			// ALM Done.
			if (nextPage >= max_pages) {
				AjaxLoadMore.triggerDone();
			}
		}

		/**
		 * Set the required classnames for parsing data and injecting content into the Elementor listing
		 *
		 * @param {Object} alm  The alm object.
		 * @param {string} type The Elementor type.
		 * @return {Object}     The modified object.
		 */
		function setElementorClasses(alm, type = 'posts') {
			// Get the items based on the Elementor type.
			alm.addons.elementor_container_class = alm.addons.elementor_settings.container_class; // Container class

			switch (type) {
				case 'woocommerce':
					alm.addons.elementor_item_class = alm.addons.elementor_settings.woo_item_class; // item class.
					alm.addons.elementor_pagination_class = `.${alm.addons.elementor_settings.woo_pagination_class}`; // Pagination class.
					break;
				case 'loop-grid':
					alm.addons.elementor_item_class = alm.addons.elementor_settings.loop_grid_item_class; // item class.
					alm.addons.elementor_pagination_class = `.${alm.addons.elementor_settings.loop_grid_pagination_class}`; // Pagination class.
					break;
				default:
					alm.addons.elementor_item_class = alm.addons.elementor_settings.posts_item_class; // item class.
					alm.addons.elementor_pagination_class = `.${alm.addons.elementor_settings.posts_pagination_class}`; // Pagination class.
					break;
			}

			return alm;
		}

		/**
		 * Parse Masonry Settings from Elementor Data atts
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function parseMasonryConfig(alm) {
			const { addons } = alm;

			if (!addons.elementor_element) {
				return alm; // Exit if not found.
			}

			const target = addons.elementor_element;
			const settings = target?.dataset?.settings ? JSON.parse(target.dataset.settings) : '';
			if (!settings) {
				return alm; // Exit if not found.
			}

			addons.elementor_masonry = settings.hasOwnProperty('cards_masonry') || settings.hasOwnProperty('classic_masonry') || settings.hasOwnProperty('masonry');

			if (addons.elementor_masonry) {
				addons.elementor_masonry_columns = parseInt(settings?.cards_columns) || parseInt(settings?.classic_columns) || parseInt(settings?.columns);
				addons.elementor_masonry_columns_mobile =
					parseInt(settings?.cards_columns_mobile) || parseInt(settings?.classic_columns_mobile) || parseInt(settings?.columns_mobile);
				addons.elementor_masonry_columns_tablet =
					parseInt(settings?.cards_columns_tablet) || parseInt(settings?.classic_columns_tablet) || parseInt(settings?.columns_tablet);
				addons.elementor_masonry_gap = parseInt(settings?.cards_row_gap?.size) || parseInt(settings?.row_gap?.size);
			}

			return alm;
		}

		/**
		 * Position Elementor Masonry Items
		 *
		 * @param {Object} alm             The alm object.
		 * @param {string} container_class The container classname.
		 * @param {string} item_class      The item classname.
		 */
		function positionMasonryItems(alm, container_class, item_class) {
			const heights = [];

			// Get Elementor Settings
			const columnsCount = alm.addons.elementor_masonry_columns;
			const columnsCountTablet = alm.addons.elementor_masonry_columns_tablet;
			const columnsCountMobile = alm.addons.elementor_masonry_columns_mobile;
			const verticalSpaceBetween = alm.addons.elementor_masonry_gap;
			let columns = columnsCount;

			// Get Elementor Breakpoints
			const breakpoints = window.elementorFrontendConfig && window.elementorFrontendConfig.breakpoints ? window.elementorFrontendConfig.breakpoints : 0;
			const windowW = window.innerWidth;

			// Set Columns
			if (windowW > breakpoints.lg) {
				columns = columnsCount;
			} else if (windowW > breakpoints.md) {
				columns = columnsCountTablet;
			} else {
				columns = columnsCountMobile;
			}

			// Get Containers
			const container = document.querySelector(container_class);
			if (!container) {
				return false;
			}
			const items = container.querySelectorAll(item_class);
			if (!items) {
				return false;
			}

			// Loop items
			items.forEach((item, index) => {
				const row = Math.floor(index / columns);
				const itemHeight = item.getBoundingClientRect().height + verticalSpaceBetween;

				if (row) {
					const itemPosition = jQuery(item).position();
					const indexAtRow = index % columns;
					let pullHeight = Math.round(itemPosition.top) - heights[indexAtRow];

					pullHeight *= -1;
					item.style.marginTop = `${Math.round(pullHeight)}px`;
					heights[indexAtRow] += itemHeight;
				} else {
					heights.push(itemHeight);
				}
			});
		}

		/**
		 * Determine the type of elementor widget (woocommerce || posts)
		 *
		 * @param {HTMLElement} target The target element.
		 * @return {string}            The Elementor type.
		 */
		function elementorGetWidgetType(target) {
			if (!target) {
				return false;
			}

			// Get Elementor type based on container class.
			if (target.classList.contains('elementor-wc-products')) {
				// WooCommerce.
				return 'woocommerce';
			} else if (target.classList.contains('elementor-widget-loop-grid')) {
				// Loop Grid.
				return 'loop-grid';
			}
			return 'posts';
		}

		/**
		 * Get the pagination container for the Elementor pagination.
		 *
		 * @param {Object}  alm     The alm object.
		 * @param {Element} content The HTML content to search.
		 * @return {HTMLElement}    The pagination element.
		 */
		function elementorGetNextUrl(alm, content) {
			const { addons = {} } = alm;

			// Locate the pagination container.
			const element = content?.querySelector(addons?.elementor_pagination_class) || content?.querySelector(`.${addons?.elementor_settings?.pagination_class}`);

			// Get the next page URL from the pagination element.
			const nextpage = element?.querySelector('a.next')?.href;

			// Return the next page URL.
			return nextpage ? nextpage : false;
		} // CONCATENATED MODULE: ./src/frontend/js/functions/getParameterByName.js

		/**
		 * Return a query param by name.
		 *
		 * @param {string} name The query param name.
		 * @param {string} url  The URL.
		 * @return {string}     The query param value.
		 */
		function getParameterByName(name, url) {
			if (!url) url = window.location.href;
			name = name.replace(/[\[\]]/g, '\\$&');
			const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
			const results = regex.exec(url);
			if (!results) {
				return null;
			}
			if (!results[2]) {
				return '';
			}
			return decodeURIComponent(results[2].replace(/\+/g, ' '));
		} // CONCATENATED MODULE: ./src/frontend/js/functions/getQueryVariable.js

		/**
		 * Get a query variable from location querystring
		 *
		 * @param {string} variable
		 * @since 5.3.4
		 */
		function getQueryVariable(variable) {
			const query = window.location.search.substring(1);
			const vars = query.split('&');
			for (let i = 0; i < vars.length; i++) {
				const pair = vars[i].split('=');
				if (decodeURIComponent(pair[0]) === variable) {
					return decodeURIComponent(pair[1]);
				}
			}
			return false;
		} // CONCATENATED MODULE: ./src/frontend/js/addons/filters.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function filtersCreateParams(alm) {
			const { listing } = alm;
			alm.addons.filters = alm?.listing?.dataset?.filters === 'true';
			if (alm.addons.filters) {
				alm.addons.filters_url = listing.dataset.filtersUrl === 'true';
				alm.addons.filters_target = listing.dataset.filtersTarget ? listing.dataset.filtersTarget : false;
				alm.addons.filters_paging = listing.dataset.filtersPaging === 'true';
				alm.addons.filters_scroll = listing.dataset.filtersScroll === 'true';
				alm.addons.filters_scrolltop = listing.dataset.filtersScrolltop ? listing.dataset.filtersScrolltop : '30';
				alm.addons.filters_debug = listing.dataset.filtersDebug;
				alm.facets = listing.dataset.facets === 'true';

				// Display warning when `filters_target` parameter is missing.
				if (!alm.addons.filters_target) {
					console.warn(
						'Ajax Load More: Unable to locate a target for Filters. Make sure you set a target parameter in the core Ajax Load More shortcode - e.g. [ajax_load_more filters="true" target="filters"]'
					);
				}

				// Parse querystring value for pg.
				const page = getParameterByName('pg');
				alm.addons.filters_startpage = page !== null ? parseInt(page) : 0;

				// Handle a paged URL with filters.
				if (alm.addons.filters_startpage > 0) {
					if (alm.addons.paging) {
						// Paging add-on: Set current page value.
						alm.page = alm.addons.filters_startpage - 1;
					} else {
						// Set posts_per_page value to load all required posts.
						alm.posts_per_page = alm.posts_per_page * alm.addons.filters_startpage;
						alm.paged = true;
					}
				}
			}
			return alm;
		}

		/**
		 * Create data attributes for a Filters item.
		 *
		 * @param {Object}      alm     The ALM object.
		 * @param {HTMLElement} element The element HTML node.
		 * @param {number}      pagenum The current page number.
		 * @return {HTMLElement}        Modified HTML element.
		 */
		function addFiltersAttributes(alm, element, pagenum) {
			const { canonical_url } = alm;
			const querystring = window.location.search;

			element.classList.add('alm-filters');
			element.dataset.page = pagenum;

			if (pagenum > 1) {
				element.dataset.url = canonical_url + buildFilterURL(alm, querystring, pagenum);
			} else {
				element.dataset.url = canonical_url + buildFilterURL(alm, querystring, 0);
			}

			return element;
		}

		/**
		 * Parse a filter querystring for returning caches directories.
		 *
		 * @param {string} path The URL path.
		 * @since 5.3.1
		 */
		function parseQuerystring(path) {
			// Get querystring
			const query = window.location.search.substring(1);

			let obj = '';
			let cache_dir = '';

			// Parse querystring into object
			if (query) {
				obj = JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
					// Replace + with - in URL
					return key === '' ? value : decodeURIComponent(value.replace(/\+/g, '-'));
				});

				// Remove the following properties from the object as they should not be included in the cache ID

				if (obj.pg) {
					// `pg` object prop
					delete obj.pg;
				}

				if (obj.auto) {
					// `auto` object prop
					delete obj.auto;
				}
			}

			if (obj) {
				cache_dir += '/';
				Object.keys(obj).forEach((key, index) => {
					cache_dir += index > 0 ? '--' : '';
					cache_dir += `${key}--${obj[key]}`;
				});
			}

			return path + cache_dir;
		}

		/**
		 * Build new paging URL for filters.
		 *
		 * @param {Object} alm         The ALM object.
		 * @param {string} querystring The current querystring.
		 * @param {number} page        The page number.
		 * @return {string}            The querystring.
		 * @since 5.3.5
		 */
		function buildFilterURL(alm, querystring = '', page = 0) {
			let qs = querystring;
			if (alm.addons.filters_paging) {
				if (page > 1) {
					// Paged
					if (qs) {
						// If already has `pg` in querystring
						if (getQueryVariable('pg')) {
							qs = querystring.replace(/(pg=)[^\&]+/, '$1' + page);
						} else {
							qs = querystring + '&pg=' + page;
						}
					} else {
						qs = '?pg=' + page;
					}
				} else {
					// Not Paged
					qs = querystring.replace(/(pg=)[^\&]+/, '');
					qs = qs === '?' ? '' : qs; // Remove `?` if only symbol in querystring
					qs = qs[qs.length - 1] === '&' ? qs.slice(0, -1) : qs; // Remove trailing `&` symbols
				}
			}
			return qs;
		} // CONCATENATED MODULE: ./src/frontend/js/addons/next-page.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function nextpageCreateParams(alm) {
			const { listing } = alm;
			alm.addons.nextpage = listing?.dataset?.nextpage === 'true';
			if (alm.addons.nextpage) {
				alm.addons.nextpage_urls = listing.dataset.nextpageUrls === undefined ? 'true' : listing.dataset.nextpageUrls;
				alm.addons.nextpage_scroll = listing.dataset.nextpageScroll === undefined ? 'false:30' : listing.dataset.nextpageScroll;
				alm.addons.nextpage_post_id = listing.dataset.nextpagePostId ? listing.dataset.nextpagePostId : false;
				alm.addons.nextpage_startpage = listing.dataset.nextpageStartpage ? parseInt(listing.dataset.nextpageStartpage) : 1;
				alm.addons.nextpage_title_template = listing.dataset.nextpageTitleTemplate;
				alm.addons.nextpage_postTitle = alm.listing.dataset.nextpagePostTitle;

				// Set default fallbacks.
				alm.posts_per_page = 1;
				alm.orginal_posts_per_page = 1;

				if (!alm.addons.nextpage_post_id) {
					alm.addons.nextpage = false;
				}
				if (alm.addons.nextpage_startpage > 1) {
					alm.paged = true;
				}
			}
			return alm;
		} // CONCATENATED MODULE: ./src/frontend/js/modules/insertScript.js

		/**
		 * Search nodes for <script/> tags and run scripts.
		 * Scripts cannot run with appendChild or innerHTML so this is necessary to function.
		 *
		 * @since 5.0
		 */
		const insertScript = {
			/**
			 * Initiate the script insertion.
			 *
			 * @param {Array} nodes The HTML nodes.
			 */
			init(nodes) {
				if (!nodes?.length) {
					return false;
				}
				nodes.forEach((node) => {
					this.check(node);
				});
			},
			/**
			 * Parse HTML node from script.
			 *
			 * @param {HTMLElement} node The HTML node/element.
			 * @return {HTMLElement}     The modified HTML node.
			 */
			check(node) {
				if (this.isScript(node) === true) {
					node.parentNode.replaceChild(this.clone(node), node);
				} else {
					let i = 0;
					let children = node.childNodes;

					if (children === undefined) {
						const parser = new DOMParser();
						const data = parser.parseFromString(node, 'text/html');
						if (data) {
							children = data.body.childNodes;
						}
					}
					while (i < children.length) {
						this.replace(children[i++]);
					}
				}
				return node;
			},

			/**
			 * Replace the script tag with a clone.
			 *
			 * @param {HTMLElement} node The HTML node/element.
			 * @return {HTMLElement}     The modified node.
			 */
			replace(node) {
				if (this.isScript(node) === true) {
					node.parentNode.replaceChild(this.clone(node), node);
				} else {
					let i = 0;
					const children = node.childNodes;
					while (i < children.length) {
						this.replace(children[i++]);
					}
				}
				return node;
			},

			/**
			 * Clone the tag.
			 *
			 * @param {HTMLElement} node The HTML node/element.
			 * @return {HTMLElement}     The cloned node.
			 */
			clone(node) {
				const script = document.createElement('script');
				script.text = node.innerHTML;
				for (let i = node.attributes.length - 1; i >= 0; i--) {
					script.setAttribute(node.attributes[i].name, node.attributes[i].value);
				}
				return script;
			},

			/**
			 * Is the node a script tag.
			 *
			 * @param {HTMLElement} node The html node.
			 */
			isScript(node) {
				return node.tagName === 'SCRIPT';
			},
		};
		/* harmony default export */ var modules_insertScript = insertScript; // CONCATENATED MODULE: ./src/frontend/js/addons/paging.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function pagingCreateParams(alm) {
			const { listing } = alm;
			alm.addons.paging = listing.dataset.paging === 'true';
			if (alm.addons.paging) {
				alm.addons.paging_init = true;
				alm.addons.paging_controls = listing.dataset.pagingControls === 'true';
				alm.addons.paging_show_at_most = listing.dataset.pagingShowAtMost ? parseInt(listing.dataset.pagingShowAtMost) : 6;
				alm.addons.paging_classes = listing.dataset.pagingClasses;

				alm.addons.paging_first_label = listing.dataset.pagingFirstLabel;
				alm.addons.paging_previous_label = listing.dataset.pagingPreviousLabel;
				alm.addons.paging_next_label = listing.dataset.pagingNextLabel;
				alm.addons.paging_last_label = listing.dataset.pagingLastLabel;

				alm.addons.paging_scroll = listing.dataset.pagingScroll ? listing.dataset.pagingScroll : false;
				alm.addons.paging_scrolltop = listing.dataset.pagingScrolltop ? parseInt(listing.dataset.pagingScrolltop) : 100;
				alm.addons.paging_container = listing.querySelector('.alm-paging-content');

				alm.pause = alm.addons.preloaded ? true : alm.pause; // If preloaded, pause ALM.
			}
			return alm;
		}

		/**
		 * Function dispatched after paging content has been loaded.
		 *
		 * @param {Object}  alm              The alm object.
		 * @param {boolean} alm_is_filtering Is ALM filtering.
		 */
		function pagingComplete(alm, alm_is_filtering = false) {
			const { main, AjaxLoadMore, last_loaded } = alm;

			main.classList.remove('alm-loading');
			AjaxLoadMore.triggerAddons(alm);

			if (typeof almOnPagingComplete === 'function') {
				window.almOnPagingComplete(alm); // Callback: Paging Add-on Complete
			}

			if (alm_is_filtering && alm.addons.filters && typeof almFiltersAddonComplete === 'function') {
				window.almFiltersAddonComplete(main); // Callback: Filters Add-on Complete
			}

			if (typeof almComplete === 'function') {
				window.almComplete(alm); // Callback: ALM Complete
			}

			// Trigger <script /> tags in templates.
			modules_insertScript.init(last_loaded);
		} // CONCATENATED MODULE: ./src/frontend/js/functions/constants.js

		const EXCLUDED_NODES = ['#text', '#comment']; // CONCATENATED MODULE: ./src/frontend/js/functions/stripEmptyNodes.js

		/**
		 * Remove empty HTML nodes from array of nodes.
		 * Filter out nodes by nodeName.
		 *
		 * @param {Array} nodes Array of HTML nodes
		 * @return {Array} The filtered array of HTML nodes
		 * @since 5.1.3
		 */
		const stripEmptyNodes = function (nodes = []) {
			return nodes?.length && nodes.filter((node) => EXCLUDED_NODES.indexOf(node.nodeName.toLowerCase()) === -1);
		};
		/* harmony default export */ var functions_stripEmptyNodes = stripEmptyNodes; // CONCATENATED MODULE: ./src/frontend/js/addons/seo.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function seoCreateParams(alm) {
			const { listing } = alm;
			alm.addons.seo = listing.dataset.seo === 'true';
			if (alm.addons.seo) {
				alm.addons.seo_offset = listing.dataset.seoOffset || false;
				alm.addons.seo_permalink = listing.dataset.seoPermalink;
				alm.addons.seo_trailing_slash = listing.dataset.seoTrailingSlash === 'false' ? '' : '/';
				alm.addons.seo_leading_slash = listing.dataset.seoLeadingSlash === 'true' ? '/' : '';
				if (alm.addons.seo_offset === 'true') {
					alm.offset = alm.posts_per_page;
				}
			}

			alm.start_page = alm?.listing?.dataset?.seoStartPage || '';
			if (alm.start_page) {
				alm.start_page = parseInt(alm.start_page);
				alm.addons.seo_scroll = listing.dataset.seoScroll;
				alm.addons.seo_scrolltop = listing.dataset.seoScrolltop;
				alm.addons.seo_controls = listing.dataset.seoControls;
				alm.paged = false;
				if (alm.start_page > 1) {
					alm.paged = true;
					if (alm.addons.paging) {
						// Paging add-on: Set current page value.
						alm.page = alm.start_page - 1;
					} else {
						// Set posts_per_page value to load all required posts.
						alm.posts_per_page = alm.start_page * alm.posts_per_page;
					}
				}
			} else {
				alm.start_page = 1;
			}
			return alm;
		}

		/**
		 * Create data attributes for an SEO item.
		 *
		 * @param {Object}      alm        The ALM object.
		 * @param {HTMLElement} element    The element HTML node.
		 * @param {number}      pagenum    The current page number.
		 * @param {boolean}     skipOffset Skip the SEO offset check.
		 * @return {HTMLElement}           Modified HTML element.
		 */
		function addSEOAttributes(alm, element, pagenum, skipOffset = false) {
			const { addons, canonical_url } = alm;
			const { retain_querystring = true } = alm_localize;
			const querystring = retain_querystring ? window.location.search : '';

			pagenum = !skipOffset ? getSEOPageNum(addons?.seo_offset, pagenum) : pagenum;

			element.classList.add('alm-seo');
			element.dataset.page = pagenum;

			if (addons.seo_permalink === 'default') {
				// Default Permalinks
				if (pagenum > 1) {
					element.dataset.url = `${canonical_url}${querystring}&paged=${pagenum}`;
				} else {
					element.dataset.url = `${canonical_url}${querystring}`;
				}
			} else {
				// Pretty Permalinks
				if (pagenum > 1) {
					element.dataset.url = `${canonical_url}${addons.seo_leading_slash}page/${pagenum}${addons.seo_trailing_slash}${querystring}`;
				} else {
					element.dataset.url = `${canonical_url}${querystring}`;
				}
			}

			return element;
		}

		/**
		 * Get the current page number.
		 *
		 * @param {string} seo_offset Is this an SEO offset.
		 * @param {number} page       The page number,
		 * @return {number}           The page number.
		 */
		function getSEOPageNum(seo_offset, page) {
			return seo_offset === 'true' ? parseInt(page) + 1 : parseInt(page);
		}

		/**
		 * Create div to hold offset values for SEO.
		 *
		 * @param {Object} alm The ALM object.
		 */
		function createSEOOffset(alm) {
			let offsetDiv = document.createElement('div');
			// Add data attributes.
			offsetDiv = addSEOAttributes(alm, offsetDiv, 1, true);

			// Insert into ALM container.
			alm.main.insertBefore(offsetDiv, alm.listing);
		} // CONCATENATED MODULE: ./src/frontend/js/addons/preloaded.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function preloadedCreateParams(alm) {
			const { listing } = alm;
			alm.addons.preloaded = listing.dataset.preloaded === 'true';
			alm.addons.preloaded_amount = listing?.dataset?.preloadedAmount ? parseInt(listing.dataset.preloadedAmount) : alm.posts_per_page;
			if (!alm.addons.preloaded) {
				alm.addons.preloaded_amount = 0;
			}

			if (alm.addons.preloaded) {
				if (alm?.localize?.total_posts) {
					// Disable ALM if total_posts is equal to or less than preloaded_amount.
					if (parseInt(alm.localize.total_posts) <= alm.addons.preloaded_amount) {
						alm.addons.preloaded_total_posts = parseInt(alm.localize.total_posts);
						alm.disable_ajax = true;
					}
				}
			}
			return alm;
		}

		/**
		 * Set parameters on HTML elements for preloaded results.
		 *
		 * @param {Object} alm The ALM object.
		 * @since 7.0.0
		 */
		function setPreloadedParams(alm) {
			const { addons, listing } = alm;

			if (addons.paging) {
				// Exit if paging.
				return;
			}

			// Parse preloaded data into array of HTML elements.
			const data = functions_stripEmptyNodes([...listing?.childNodes]);

			// Get first element in the data array.
			const firstElement = data?.length && data[0] ? data[0] : false;

			if (firstElement) {
				if (addons?.seo) {
					addSEOAttributes(alm, firstElement, 1);
				}
				if (addons?.filters) {
					addFiltersAttributes(alm, firstElement, 1);
				}
			}
		} // CONCATENATED MODULE: ./src/frontend/js/addons/singleposts.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function singlepostsCreateParams(alm) {
			const { listing } = alm;
			alm.addons.single_post = listing?.dataset?.singlePost === 'true';
			if (alm.addons.single_post) {
				alm.addons.single_post_id = listing.dataset.singlePostId;
				alm.addons.single_post_query = listing.dataset.singlePostQuery;
				alm.addons.single_post_order = listing.dataset.singlePostOrder === undefined ? 'previous' : listing.dataset.singlePostOrder;
				alm.addons.single_post_init_id = listing.dataset.singlePostId;
				alm.addons.single_post_taxonomy = listing.dataset.singlePostTaxonomy === undefined ? '' : listing.dataset.singlePostTaxonomy;
				alm.addons.single_post_excluded_terms = listing.dataset.singlePostExcludedTerms === undefined ? '' : listing.dataset.singlePostExcludedTerms;
				alm.addons.single_post_progress_bar = listing.dataset.singlePostProgressBar === undefined ? '' : listing.dataset.singlePostProgressBar;
				alm.addons.single_post_target = listing.dataset.singlePostTarget === undefined ? '' : listing.dataset.singlePostTarget;
				alm.addons.single_post_preview = listing.dataset.singlePostPreview === undefined ? false : true;

				// Post Preview. Does this even work?
				if (alm.addons.single_post_preview) {
					const singlePostPreviewData = listing.dataset.singlePostPreview.split(':');
					alm.addons.single_post_preview_data = {
						button_label: singlePostPreviewData[0] ? singlePostPreviewData[0] : 'Continue Reading',
						height: singlePostPreviewData[1] ? singlePostPreviewData[1] : 500,
						element: singlePostPreviewData[2] ? singlePostPreviewData[2] : 'default',
						className: 'alm-single-post--preview',
					};
				}

				if (alm.addons.single_post_id === undefined) {
					alm.addons.single_post_id = '';
					alm.addons.single_post_init_id = '';
				}

				// Set default fallbacks.
				alm.addons.single_post_permalink = '';
				alm.addons.single_post_title = '';
				alm.addons.single_post_slug = '';
				alm.addons.single_post_cache = false;
				alm.addons.single_post_title_template = listing.dataset.singlePostTitleTemplate;
				alm.addons.single_post_siteTitle = listing.dataset.singlePostSiteTitle;
				alm.addons.single_post_siteTagline = listing.dataset.singlePostSiteTagline;
				alm.addons.single_post_scroll = listing.dataset.singlePostScroll;
				alm.addons.single_post_scroll_speed = listing.dataset.singlePostScrollSpeed;
				alm.addons.single_post_scroll_top = listing.dataset.singlePostScrolltop;
				alm.addons.single_post_controls = listing.dataset.singlePostControls;
			}
			return alm;
		}

		/**
		 * Create the HTML for loading Single Posts.
		 *
		 * @param {Object} alm        The alm object.
		 * @param {Object} response   Query response.
		 * @param {string} cache_slug The cache slug.
		 * @return {Object}           Results data.
		 * @since 5.1.8.1
		 */
		function singlepostsHTML(alm, response, cache_slug) {
			const data = {
				html: '',
				meta: {
					postcount: 0,
					totalposts: 0,
				},
			};

			// Get target element.
			const { single_post_target, single_post_id } = alm.addons;

			if (response.status === 200 && response.data && single_post_target) {
				// Create temp div to hold response data.
				const div = document.createElement('div');
				div.innerHTML = response.data;

				// Get target element.
				const html = div.querySelector(single_post_target);

				if (!html) {
					console.warn(`Ajax Load More: Unable to find ${single_post_target} element.`);
					return data;
				}

				// Get any custom target elements.
				if (window?.almSinglePostsCustomElements) {
					const customElements = singlepostsGetCustomElements(div, window?.almSinglePostsCustomElements, single_post_id);
					if (customElements) {
						// Get first element in HTML.
						const target = html.querySelector('article, section, div');
						if (target) {
							target.appendChild(customElements);
						}
					}
				}

				data.html = html.innerHTML;
				data.meta = {
					postcount: 1,
					totalposts: 1,
				};

				// Create cache file.
				createCache(alm, data, cache_slug);
			}
			return data;
		}
		/* harmony default export */ var singleposts = /* unused pure expression or super */ null && singlepostsHTML;

		/**
		 * Collect custom target elements and append them to the returned HTML.
		 * This function is useful to get elements from outside the ALM target and bring them into the returned HTML.
		 * Useful for when CSS or JS may be loaded in the <head/> and we need it brought into the HTML for Single Posts.
		 *
		 * e.g. window.almSinglePostsCustomElements = ['#woocommerce-inline-inline-css', '#wc-block-style-css'];
		 *
		 * @param {HTMLElement}   content        The HTML element.
		 * @param {Array}         customElements The elements to search for in content.
		 * @param {string|number} id             The Post ID.
		 * @return {HTMLElement}                 The HTML elements.
		 */
		function singlepostsGetCustomElements(content = '', customElements = [], id) {
			if (!content || !customElements) {
				return container; // Exit if empty.
			}

			// Create container element if if doesn't exist.
			const container = document.createElement('div');
			container.classList.add('alm-custom-elements');
			container.dataset.id = id;

			// Convert customElements to an Array.
			customElements = !Array.isArray(customElements) ? [customElements] : customElements;

			// Loop Array to extract elements and append to container.
			for (let i = 0; i < customElements.length; i++) {
				const element = content.querySelector(customElements[i]);
				if (element) {
					element.classList.add('alm-custom-element');
					container.appendChild(element);
				}
			}

			return container;
		}

		/**
		 * Create data attributes for a Single Post item.
		 *
		 * @param {Object}  alm     The ALM object.
		 * @param {Element} element The elements HTML element to add data params.
		 * @return {Array}          Modified HTML element.
		 */
		function addSinglePostsAttributes(alm, element) {
			if (!element) {
				return [];
			}

			const { page, addons } = alm;
			element.setAttribute('class', `alm-single-post post-${addons.single_post_id}`);
			element.dataset.id = addons.single_post_id;
			element.dataset.url = addons.single_post_permalink;
			element.dataset.page = addons.single_post_target ? parseInt(page) + 1 : page;
			element.dataset.title = addons.single_post_title;
			return element;
		} // CONCATENATED MODULE: ./src/frontend/js/functions/dispatchScrollEvent.js

		/**
		 * Dispatch a window scroll event.
		 *
		 * @param {boolean} delay Should this be delayed.
		 * @since 5.5
		 */
		function dispatchScrollEvent(delay = true) {
			if (typeof Event === 'function') {
				setTimeout(
					function () {
						window.dispatchEvent(new CustomEvent('scroll'));
					},
					delay ? 150 : 1
				);
			}
		} // CONCATENATED MODULE: ./src/frontend/js/modules/loadPrevious.js

		/**
		 * Create a Load Previous button.
		 *
		 * @param {Object} alm       The Ajax Load More object.
		 * @param {Object} container The container element.
		 * @param {number} page      The previous page number.
		 * @param {string} url       The previous page url.
		 * @param {string} label     The label for the button.
		 * @since 5.5.0
		 */
		function createLoadPreviousButton(alm, container, page = 1, url, label) {
			if (!label) {
				return;
			}

			// Create wrapper.
			const btnWrap = document.createElement('div');
			btnWrap.classList.add('alm-btn-wrap--prev');

			// Create button.
			const button = document.createElement('a');
			button.href = url;
			button.innerHTML = label;
			button.setAttribute('rel', 'prev');
			button.dataset.page = page;
			button.dataset.url = url;
			button.setAttribute('class', `alm-load-more-btn alm-load-more-btn--prev ${alm.loading_style}`);

			// Click event.
			button.addEventListener('click', function (e) {
				alm.AjaxLoadMore.prevClick(e);
			});

			// Set alm previous button to this button.
			alm.AjaxLoadMore.setPreviousButton(button);

			// Append button to wrap.
			btnWrap.appendChild(button);

			// Get parent element.
			const parent = container.parentNode;

			// Append button before container.
			parent.insertBefore(btnWrap, container);
		} // CONCATENATED MODULE: ./src/frontend/js/addons/woocommerce.js

		/**
		 * Create add-on params for ALM.
		 *
		 * @param {Object} alm The alm object.
		 * @return {Object}    The modified object.
		 */
		function wooCreateParams(alm) {
			const { listing, addons } = alm;
			alm.addons.woocommerce = listing?.dataset?.woo === 'true';
			if (alm.addons.woocommerce && listing.dataset.wooSettings) {
				alm.addons.woocommerce_settings = JSON.parse(listing.dataset.wooSettings);
				alm.addons.woocommerce_settings.results_text = document.querySelectorAll(addons?.woocommerce_settings?.results); // Add Results Text
				alm.page = parseInt(alm.page) + parseInt(addons.woocommerce_settings.paged);
			}
			return alm;
		}

		/**
		 * Set up instance of ALM WooCommerce
		 *
		 * @param {Object} alm ALM object.
		 * @since 5.3.0
		 */
		function wooInit(alm) {
			if (!alm || !alm.addons.woocommerce) {
				return false;
			}

			alm.button.dataset.page = alm.addons.woocommerce_settings.paged + 1; // Page

			// Get upcoming URL.
			const nextPage = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged];
			if (nextPage) {
				alm.button.dataset.url = nextPage;
			} else {
				alm.button.dataset.url = '';
			}

			// Set up URL and class parameters on first item in product listing
			const container = document.querySelector(alm.addons.woocommerce_settings.container); // Get `ul.products`
			if (container) {
				const count = getContainerCount(alm.addons.woocommerce_settings.container);
				const currentPage = alm.addons.woocommerce_settings.paged;

				if (count > 1) {
					// Display warning if multiple containers were found.
					console.warn(
						'ALM WooCommerce: Multiple containers with the same classname or ID found. The WooCommerce add-on requires a single container to be defined. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/'
					);
				}

				container.setAttribute('aria-live', 'polite');
				container.setAttribute('aria-atomic', 'true');

				alm.listing.removeAttribute('aria-live');
				alm.listing.removeAttribute('aria-atomic');

				const products = container.querySelector(alm.addons.woocommerce_settings.products); // Get first `.product` item
				if (products) {
					products.classList.add('alm-woocommerce');
					products.dataset.url = alm.addons.woocommerce_settings.paged_urls[alm.addons.woocommerce_settings.paged - 1];
					products.dataset.page = alm.page;
					products.dataset.pageTitle = document.title;
				} else {
					console.warn(
						'ALM WooCommerce: Unable to locate products. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_products'
					);
				}

				// Paged URL: Create previous button.
				if (currentPage > 1) {
					if (alm.addons.woocommerce_settings.settings.previous_products) {
						const prevURL = alm.addons.woocommerce_settings.paged_urls[currentPage - 2];
						const label = alm.addons.woocommerce_settings.settings.previous_products;
						createLoadPreviousButton(alm, container, currentPage - 1, prevURL, label);
					}
				}
			} else {
				console.warn(
					'ALM WooCommerce: Unable to locate container element. Get more information -> https://connekthq.com/plugins/ajax-load-more/docs/add-ons/woocommerce/#alm_woocommerce_container'
				);
			}
		}

		/**
		 * Core ALM WooCommerce product loader
		 *
		 * @param {Element} content WooCommerce content container.
		 * @param {Object}  alm     ALM object.
		 * @since 5.3.0
		 */
		function woocommerce(content, alm) {
			if (!content || !alm) {
				return false;
			}

			return new Promise((resolve) => {
				const { woocommerce_settings = {} } = alm.addons;
				const { settings = {} } = woocommerce_settings;

				const container = document.querySelector(woocommerce_settings.container); // Get `ul.products`
				const products = content.querySelectorAll(woocommerce_settings.products); // Get all `.products`
				const waitForImages = settings && settings.images_loaded === 'true' ? true : false;

				if (container && products) {
					const wooProducts = Array.prototype.slice.call(products); // Convert NodeList to Array.

					(async function () {
						// Load the Products.
						await loadItems(container, wooProducts, alm, waitForImages);
						resolve(true);
					})().catch((e) => {
						console.warn(e, 'There was an error with WooCommerce'); // eslint-disable-line no-console
					});

					// Trigger almWooCommerceLoaded callback.
					if (typeof almWooCommerceLoaded === 'function') {
						window.almWooCommerceLoaded(products);
					}
				}
			});
		}

		/**
		 * Get the content, title and results from the Ajax request.
		 *
		 * @param {Object} alm        The alm object.
		 * @param {string} url        The request URL.
		 * @param {Object} response   Query response.
		 * @param {string} cache_slug The cache slug.
		 * @return {Object}           Results data.
		 * @since 5.3.0
		 */
		function wooGetContent(alm, url, response, cache_slug) {
			// Default data object.
			const data = {
				html: '',
				meta: {
					postcount: 0,
					totalposts: 0,
				},
			};

			// Successful response.
			if (response.status === 200 && response.data) {
				const { addons, pagePrev, rel = 'next', page, localize } = alm;
				const { total_posts } = localize;
				const { woocommerce_settings = {} } = addons;
				const currentPage = rel === 'prev' ? pagePrev : page + 1; // Get the page number.

				// Create temp div to hold response data.
				const div = document.createElement('div');
				div.innerHTML = response.data;

				// Get Page Title
				const title = div.querySelector('title').innerHTML;
				data.pageTitle = title;

				// Get WooCommerce products container.
				const container = div.querySelector(woocommerce_settings.container);
				if (!container) {
					console.warn(`Ajax Load More WooCommerce: Unable to find WooCommerce ${woocommerce_settings.container} element.`);
					return data;
				}

				// Get the first item and append data attributes.
				const item = container ? container.querySelector(woocommerce_settings.products) : null;
				if (item) {
					item.classList.add('alm-woocommerce');
					item.dataset.url = url;
					item.dataset.page = currentPage;
					item.dataset.pageTitle = title;
				}

				// Count the number of returned items.
				const items = container.querySelectorAll(woocommerce_settings.products);
				if (items) {
					// Set the html to the elementor container data.
					data.html = container ? container.innerHTML : '';
					data.meta.postcount = items.length;
					data.meta.totalposts = total_posts;

					// Create cache file.
					createCache(alm, data, cache_slug);
				}

				// Results Text
				almWooCommerceResultsText(div, alm);
			}

			return data;
		}

		/**
		 * Handle WooCommerce loaded functionality and dispatch actions.
		 *
		 * @param {Object} alm ALM object.
		 * @since 5.5.0
		 */
		function woocommerceLoaded(alm) {
			const nextPageNum = alm.page + 2;
			const nextPage = alm.addons.woocommerce_settings.paged_urls[nextPageNum - 1]; // Get URL.

			// Set button data attributes.
			if (alm.rel === 'prev' && alm.buttonPrev) {
				const prevPageNum = alm.pagePrev - 1;
				const prevPage = alm.addons.woocommerce_settings.paged_urls[alm.pagePrev - 2];
				setButtonAtts(alm.buttonPrev, prevPageNum, prevPage);
				dispatchScrollEvent(true);
			} else {
				setButtonAtts(alm.button, nextPageNum, nextPage);
			}

			// Lazy load images if necessary.
			lazyImages(alm);

			// Trigger almComplete.
			if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
				window.almComplete(alm);
			}

			// End transitions.
			alm.AjaxLoadMore.transitionEnd();

			// ALM Done.
			if (alm.rel === 'prev' && alm.pagePrev <= 1) {
				alm.AjaxLoadMore.triggerDonePrev();
			}
			if (alm.rel === 'next' && nextPageNum > parseInt(alm.addons.woocommerce_settings.pages)) {
				alm.AjaxLoadMore.triggerDone();
			}
		}

		/**
		 * Reset a WooCommerce Instance by hitting the updated site URL.
		 *
		 * @since 5.3.8
		 */
		function wooReset() {
			return new Promise((resolve) => {
				const url = window.location;
				lib_axios
					.get(url)
					.then((response) => {
						if (response.status === 200 && response.data) {
							const div = document.createElement('div');
							div.innerHTML = response.data; // Add data to div

							const alm = div.querySelector('.ajax-load-more-wrap .alm-listing[data-woo="true"]'); // Get ALM instance
							const settings = alm ? alm.dataset.wooSettings : ''; // Get settings data
							resolve(settings);
						} else {
							resolve(false);
						}
					})
					.catch(function () {
						resolve(false);
					});
			});
		}

		/**
		 * Set results text for WooCommerce Add-on.
		 *
		 * @param {Element} target The target HTML element.
		 * @param {Object}  alm    ALM object.
		 * @since 5.3
		 */
		function almWooCommerceResultsText(target = '', alm) {
			if (target && alm && alm.addons.woocommerce_settings.results_text) {
				const currentResults = target.querySelector(alm.addons.woocommerce_settings.results);

				if (alm.addons.woocommerce_settings.results_text) {
					//let link = alm.addons.woocommerce_settings.settings.previous_page_link;
					//let label = alm.addons.woocommerce_settings.settings.previous_page_label;
					//let sep = alm.addons.woocommerce_settings.settings.previous_page_sep;
					alm.addons.woocommerce_settings.results_text.forEach((element) => {
						element.innerHTML = currentResults.innerHTML;
						// if (link && label) {
						// 	element.innerHTML = returnButton(currentResults, link, label, sep);
						// } else {
						// 	element.innerHTML = currentResults.innerHTML;
						// }
					});
				}
			}
		}

		/**
		 * Initiate Results text.
		 *
		 * @param {Object} alm ALM object.
		 * @since 5.3
		 * @deprecated 5.5
		 */
		function almWooCommerceResultsTextInit(alm) {
			if (alm && alm.addons.woocommerce_settings.results_text) {
				const results = document.querySelectorAll(alm.addons.woocommerce_settings.results);
				if (results.length < 1) {
					return false;
				}
				const link = alm.addons.woocommerce_settings.settings.previous_page_link;
				const label = alm.addons.woocommerce_settings.settings.previous_page_label;
				const sep = alm.addons.woocommerce_settings.settings.previous_page_sep;
				// Loop all result text elements
				results.forEach((element) => {
					if (link && label) {
						element.innerHTML = returnButton(element, link, label, sep);
					}
				});
			}
		}

		/**
		 * Create button text for returning to the first page
		 *
		 * @param {Element} text      The button text.
		 * @param {string}  link      Link URL.
		 * @param {string}  label     Button label.
		 * @param {string}  seperator HTML separator.
		 */
		function returnButton(text, link, label, seperator) {
			const button = ` ${seperator} <a href="${link}">${label}</a>`;
			return text.innerHTML + button;
		}

		/**
		 * Get total count of WooCommerce containers.
		 *
		 * @param {string} container The container class.
		 * @return {number}          The total umber of containers.
		 */
		function getContainerCount(container) {
			if (!container) {
				return 0;
			}
			const containers = document.querySelectorAll(container); // Get all containers.
			if (containers) {
				return containers.length;
			}
			return 0;
		} // CONCATENATED MODULE: ./src/frontend/js/functions/displayResults.js

		const displayResults_imagesLoaded = __webpack_require__(564);

		/**
		 * Append and display Ajax results to the ALM container.
		 *
		 * @param {Object} alm   The ALM object.
		 * @param {Array}  nodes The HTML nodes to append.
		 * @return {Promise}     The Promise object.
		 */
		function displayResults(alm, nodes) {
			const { listing: container, transition, speed, images_loaded } = alm;
			return new Promise((resolve) => {
				if (!container || !nodes) {
					resolve(true);
					return;
				}

				const useTransition = transition === 'fade' ? true : false;

				// Add each node to the alm listing container.
				nodes.forEach((node) => {
					const nodeName = node.nodeName.toLowerCase();
					if (useTransition || images_loaded) {
						node.style.opacity = 0;
						if (useTransition) {
							node.style.transition = `all ${speed}ms ease`;
						}
					}

					/**
					 * Do not append elements that are not actual element nodes (i.e. #text node).
					 * Add item if not in exclude array.
					 */
					if (EXCLUDED_NODES.indexOf(nodeName) === -1) {
						container.appendChild(node);
					}
				});

				// Run srcSet polyfill.
				srcsetPolyfill(container, alm.ua);

				// Lazy load images.
				lazyImages(alm);

				// Display the results.
				if (images_loaded) {
					displayResults_imagesLoaded(container, function () {
						display(alm, nodes, useTransition);
					});
				} else {
					display(alm, nodes, useTransition);
				}

				resolve(true);
			});
		}

		/**
		 * Append and display Ajax results to the Paging container.
		 *
		 * @param {Object} alm   The ALM object.
		 * @param {Array}  nodes The HTML nodes to append.
		 * @return {Promise}     The Promise object.
		 */
		function displayPagingResults(alm, nodes) {
			const { addons } = alm;
			const { paging_container: container } = addons;

			return new Promise((resolve) => {
				if (!container || !nodes) {
					resolve(true);
					return;
				}

				// Clear contents of Paging container.
				container.style.opacity = 0;
				container.innerHTML = '';

				// Add each node to the paging container.
				nodes.forEach((node) => {
					const nodeName = node.nodeName.toLowerCase();
					/**
					 * Do not append elements that are not actual element nodes (i.e. #text node).
					 * Add item if not in exclude array.
					 */
					if (EXCLUDED_NODES.indexOf(nodeName) === -1) {
						container.appendChild(node);
					}
				});

				// Run srcSet polyfill.
				srcsetPolyfill(container, alm.ua);

				// Lazy load images.
				lazyImages(alm);

				resolve(true);
			});
		}

		/**
		 * Display the loaded results via CSS transition.
		 *
		 * @param {Object}  alm           The ALM object.
		 * @param {Array}   nodes         The HTML nodes to append.
		 * @param {boolean} useTransition Use CSS transition.
		 */
		function display(alm, nodes, useTransition = true) {
			const { transition_delay: delay, images_loaded } = alm;
			const offset = useTransition ? parseInt(delay) : 0; // Delay offset timing.

			if (nodes) {
				setTimeout(function () {
					if (useTransition || images_loaded) {
						nodes.forEach((node, index) => {
							setTimeout(function () {
								node.style.opacity = 1;
							}, index * offset);
						});
					}
					alm.AjaxLoadMore.transitionEnd();
				}, 50);
			}
		} // CONCATENATED MODULE: ./src/frontend/js/functions/formatHTML.js

		/**
		 * Create data attributes for Single Posts, SEO and Filter paged results.
		 *
		 * @param {Object} alm      The ALM object.
		 * @param {Array}  elements The element HTML nodes.
		 * @return {Array}          The modified elements.
		 * @since 7.0.0
		 */
		function formatHTML(alm, elements) {
			if (!elements?.length) {
				return [];
			}

			const { addons, page, posts_per_page, init, start_page, container_type } = alm;

			// Single Posts.
			if (addons?.single_post) {
				let singleWrap = document.createElement('div');
				singleWrap.innerHTML = alm.html;
				singleWrap = addSinglePostsAttributes(alm, singleWrap);

				// Single Post Preview.
				if (addons?.single_post_preview && addons?.single_post_preview_data && typeof almSinglePostCreatePreview === 'function') {
					const singlePreview = almSinglePostCreatePreview(singleWrap, addons.single_post_id, addons.single_post_preview_data);
					if (singlePreview) {
						singleWrap.replaceChildren(singlePreview);
					}
				}

				alm.last_loaded = [singleWrap];
				return [singleWrap];
			}

			// Exit if not SEO or Filters.
			if (!addons?.seo && !addons?.filters) {
				return elements;
			}

			let current = parseInt(page) + 1;
			current = addons?.preloaded ? current + 1 : current;

			// If init and SEO or Filter start_page, set pagenum to 1.
			if (init && (parseInt(start_page) > 1 || addons?.filters_startpage > 1)) {
				current = 1;
			}

			// Call to Action add-on: Add 1 if CTA is true.
			const per_page = addons?.cta ? parseInt(posts_per_page) + 1 : parseInt(posts_per_page);

			// If table, format the return data.
			if (container_type === 'table') {
				elements = formatTable(elements);
			}

			/**
			 * Split elements array into individual pages.
			 */
			const pages = [];
			for (let i = 0; i < elements?.length; i += per_page) {
				pages.push(elements.slice(i, per_page + i));
			}

			/**
			 * Loop pages and modify first element in return data.
			 */
			if (pages) {
				for (let i = 0; i < pages.length; i++) {
					const index = i > 0 ? i * per_page : 0;
					if (elements[index]) {
						if (addons?.seo) {
							elements[index] = addSEOAttributes(alm, elements[index], i + current);
						}
						if (addons?.filters) {
							elements[index] = addFiltersAttributes(alm, elements[index], i + current);
						}
					}
				}
			}

			return elements;
		}

		/**
		 * Format return table data.
		 *
		 * @param {Array} elements The element HTML nodes.
		 * @return {Array}         The modified elements.
		 */
		function formatTable(elements = []) {
			if (!elements) {
				return [];
			}

			const tableChildren = elements?.length ? elements[0].childNodes : [];
			if (tableChildren) {
				elements = functions_stripEmptyNodes([...tableChildren]);
			}
			return elements;
		} // CONCATENATED MODULE: ./src/frontend/js/functions/getScrollPercentage.js

		/**
		 * Get the scroll distance in pixels from a percentage.
		 *
		 * @param {Object} alm The Ajax Load More object.
		 * @return {number}    The new distance.
		 * @since 5.2
		 */
		function getScrollPercentage(alm) {
			if (!alm) {
				return false;
			}

			const is_negative = alm.scroll_distance_orig.toString().indexOf('-') === -1 ? false : true; // Is this a negative number
			const raw_distance = alm.scroll_distance_orig.toString().replace('-', '').replace('%', ''); // Remove - and perc
			const wh = alm.window.innerHeight; // window height
			const height = Math.floor((wh / 100) * parseInt(raw_distance)); // Do math to get distance
			const newdistance = is_negative ? `-${height}` : height; // Set the distance

			return parseInt(newdistance);
		} // CONCATENATED MODULE: ./src/frontend/js/functions/getTotals.js

		/**
		 * Get the total posts remaining in the current query by ALM instance ID.
		 * Note: Uses localized ALM variables.
		 *
		 * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php
		 * @param {string} type The type of total to retrieve.
		 * @param {string} id   An optional Ajax Load More ID.
		 * @return {number}     A total post count.
		 */
		function getTotals(type, id = '') {
			// Get the ALM localized variable name.
			const localize_var = id ? `ajax_load_more_${id.replace(/-/g, '_')}_vars` : 'ajax_load_more_vars';

			// Get the localized value from the window object.
			const localized = window[localize_var];

			if (!localized) {
				return null;
			}

			// Deconstruct the object.
			const { total_posts, post_count, page, pages } = localized;

			switch (type) {
				case 'total_posts':
					return total_posts ? parseInt(total_posts) : '';

				case 'post_count':
					return post_count ? parseInt(post_count) : '';

				case 'page':
					return page ? parseInt(page) : '';

				case 'pages':
					return pages ? parseInt(pages) : '';

				case 'remaining':
					if (!total_posts || !post_count) {
						return '';
					}
					return parseInt(total_posts) - parseInt(post_count);
			}
		} // CONCATENATED MODULE: ./src/frontend/js/functions/noResults.js

		/**
		 * Set the results text if required.
		 *
		 * @param {Element} element Target HTML element
		 * @param {string}  html    Text as HTML to display.
		 * @since 5.1
		 */
		function noResults(element, html = '') {
			if (!html || !element) {
				return; // Exit if empty.
			}

			// Remove empty <p/> tags.
			html = html.replace(/(<p><\/p>)+/g, '');

			// Is this a paging instance.
			const paging = element?.querySelector('.alm-paging-content');
			if (paging) {
				paging.innerHTML = html;
			} else {
				element.innerHTML = html;
			}
		} // CONCATENATED MODULE: ./src/frontend/js/functions/parsers.js

		/**
		 * Convert a plain text string into an array of HTML nodes.
		 *
		 * @param {string} html The HTML string
		 * @param {string} type The element type.
		 * @return {Array}      The HTML nodes as an array.
		 * @since 5.0
		 */
		function domParser(html = '', type = 'text/html') {
			if (!html) {
				return [];
			}
			const parser = new DOMParser();
			const data = parser.parseFromString(html, type);
			const nodes = data?.body?.childNodes;

			return nodes ? functions_stripEmptyNodes([...nodes]) : [];
		}

		/**
		 * Convert retun table data into an array of HTML elements.
		 *
		 * @param {string} html Plain text HTML.
		 * @return {Array}      Array of HTML elements.
		 * @since 5.0
		 */
		function tableParser(html = null) {
			if (!html) {
				return [];
			}
			// Create table element and add results to table body.
			const tbody = document.createElement('tbody');
			tbody.innerHTML = html;

			return [tbody];
		} // CONCATENATED MODULE: ./src/frontend/js/functions/queryParams.js

		/**
		 * Build the data object to send with the Ajax request.
		 *
		 * @param {Object} alm       The ALM object.
		 * @param {string} queryType The query type.
		 * @return {Object}          The data object.
		 * @since 3.6
		 */
		function getAjaxParams(alm, queryType) {
			const { addons, extensions } = alm;

			// Defaults
			const data = {
				action: 'alm_get_posts',
				query_type: queryType,
				id: alm.id,
				post_id: parseInt(alm.post_id),
				slug: alm.slug,
				canonical_url: encodeURIComponent(alm.canonical_url),
				posts_per_page: parseInt(alm.posts_per_page),
				page: parseInt(alm.page),
				offset: parseInt(alm.offset),
				post_type: alm.post_type,
				repeater: alm.repeater,
				seo_start_page: alm.start_page,
			};

			// Addons & Extensions

			if (extensions.acf) {
				data.acf = getTypeParams(alm, 'acf');
				if (extensions.acf_field_type !== 'relationship') {
					data.action = 'alm_acf';
				}
			}
			if (addons.comments) {
				data.comments = getTypeParams(alm, 'comments');
				data.posts_per_page = addons.comments_per_page;
				data.action = 'alm_comments';
			}
			if (addons.cta) {
				data.cta = getTypeParams(alm, 'cta');
			}
			if (addons.filters) {
				data.filters = addons.filters;
				data.filters_startpage = addons.filters_startpage;
				data.filters_target = addons.filters_target;
				data.facets = alm.facets;
			}
			if (addons.nextpage) {
				data.nextpage = getTypeParams(alm, 'nextpage');
				data.action = 'alm_nextpage';
			}
			if (addons.paging) {
				data.paging = addons.paging;
			}
			if (addons.preloaded) {
				data.preloaded = addons.preloaded;
				data.preloaded_amount = parseInt(addons.preloaded_amount);
			}
			if (addons.single_post) {
				data.single_post = getTypeParams(alm, 'single_post');
			}
			if (extensions.term_query) {
				data.term_query = getTypeParams(alm, 'term_query');
				data.action = 'alm_get_terms';
			}
			if (alm.extensions.users) {
				data.users = getTypeParams(alm, 'users');
				data.action = 'alm_users';
			}
			if (alm.theme_repeater) {
				data.theme_repeater = alm.theme_repeater;
			}

			// Query data params from ALM HTML element.
			if (alm.listing.dataset.lang) {
				data.lang = alm.listing.dataset.lang;
			}
			if (alm.listing.dataset.stickyPosts) {
				data.sticky_posts = alm.listing.dataset.stickyPosts;
			}
			if (alm.listing.dataset.postFormat) {
				data.post_format = alm.listing.dataset.postFormat;
			}
			if (alm.listing.dataset.category) {
				data.category = alm.listing.dataset.category;
			}
			if (alm.listing.dataset.categoryAnd) {
				data.category__and = alm.listing.dataset.categoryAnd;
			}
			if (alm.listing.dataset.categoryNotIn) {
				data.category__not_in = alm.listing.dataset.categoryNotIn;
			}
			if (alm.listing.dataset.tag) {
				data.tag = alm.listing.dataset.tag;
			}
			if (alm.listing.dataset.tagAnd) {
				data.tag__and = alm.listing.dataset.tagAnd;
			}
			if (alm.listing.dataset.tagNotIn) {
				data.tag__not_in = alm.listing.dataset.tagNotIn;
			}
			if (alm.listing.dataset.taxonomy) {
				data.taxonomy = alm.listing.dataset.taxonomy;
			}
			if (alm.listing.dataset.taxonomyTerms) {
				data.taxonomy_terms = alm.listing.dataset.taxonomyTerms;
			}
			if (alm.listing.dataset.taxonomyOperator) {
				data.taxonomy_operator = alm.listing.dataset.taxonomyOperator;
			}
			if (alm.listing.dataset.taxonomyIncludeChildren) {
				data.taxonomy_include_children = alm.listing.dataset.taxonomyIncludeChildren;
			}
			if (alm.listing.dataset.taxonomyRelation) {
				data.taxonomy_relation = alm.listing.dataset.taxonomyRelation;
			}
			if (alm.listing.dataset.sortKey) {
				data.sort_key = alm.listing.dataset.sortKey;
			}
			if (alm.listing.dataset.metaKey) {
				data.meta_key = alm.listing.dataset.metaKey;
			}
			if (alm.listing.dataset.metaValue) {
				data.meta_value = alm.listing.dataset.metaValue;
			}
			if (alm.listing.dataset.metaCompare) {
				data.meta_compare = alm.listing.dataset.metaCompare;
			}
			if (alm.listing.dataset.metaRelation) {
				data.meta_relation = alm.listing.dataset.metaRelation;
			}
			if (alm.listing.dataset.metaType) {
				data.meta_type = alm.listing.dataset.metaType;
			}
			if (alm.listing.dataset.author) {
				data.author = alm.listing.dataset.author;
			}
			if (alm.listing.dataset.year) {
				data.year = alm.listing.dataset.year;
			}
			if (alm.listing.dataset.month) {
				data.month = alm.listing.dataset.month;
			}
			if (alm.listing.dataset.day) {
				data.day = alm.listing.dataset.day;
			}
			if (alm.listing.dataset.order) {
				data.order = alm.listing.dataset.order;
			}
			if (alm.listing.dataset.orderby) {
				data.orderby = alm.listing.dataset.orderby;
			}
			if (alm.listing.dataset.postStatus) {
				data.post_status = alm.listing.dataset.postStatus;
			}
			if (alm.listing.dataset.postIn) {
				data.post__in = alm.listing.dataset.postIn;
			}
			if (alm.listing.dataset.postNotIn) {
				data.post__not_in = alm.listing.dataset.postNotIn;
			}
			if (alm.listing.dataset.exclude) {
				data.exclude = alm.listing.dataset.exclude;
			}
			if (alm.listing.dataset.search) {
				data.search = alm.listing.dataset.search;
			}
			if (alm.listing.dataset.s) {
				data.search = alm.listing.dataset.s;
			}
			if (alm.listing.dataset.customArgs) {
				data.custom_args = alm.listing.dataset.customArgs;
			}
			if (alm.listing.dataset.vars) {
				data.vars = alm.listing.dataset.vars;
			}

			// Cache Params

			if (addons.cache) {
				data.cache_id = addons.cache_id;
				data.cache_logged_in = addons.cache_logged_in;
				data.cache_slug = getCacheSlug(alm, data);
			}

			return data;
		}

		/**
		 * Build the query params for content types.
		 *
		 * @param {Object} alm  The ALM object.
		 * @param {string} type The query type.
		 * @return {Object}     The query params.
		 */
		function getTypeParams(alm, type) {
			const { addons, extensions } = alm;
			switch (type) {
				case 'acf':
					return {
						acf: 'true',
						post_id: extensions.acf_post_id,
						field_type: extensions.acf_field_type,
						field_name: extensions.acf_field_name,
						parent_field_name: extensions.acf_parent_field_name,
						row_index: extensions.acf_row_index,
					};

				case 'comments':
					return {
						comments: 'true',
						post_id: addons.comments_post_id,
						per_page: addons.comments_per_page,
						type: addons.comments_type,
						style: addons.comments_style,
						template: addons.comments_template,
						callback: addons.comments_callback,
					};

				case 'cta':
					return {
						cta: 'true',
						cta_position: addons.cta_position,
						cta_repeater: addons.cta_repeater,
						cta_theme_repeater: addons.cta_theme_repeater,
					};

				case 'nextpage':
					return {
						nextpage: 'true',
						urls: addons.nextpage_urls,
						scroll: addons.nextpage_scroll,
						post_id: addons.nextpage_post_id,
						startpage: addons.nextpage_startpage,
						nested: alm.nested,
					};

				case 'single_post':
					return {
						single_post: 'true',
						id: addons.single_post_id,
						slug: addons.single_post_slug,
					};

				case 'term_query':
					return {
						term_query: 'true',
						taxonomy: extensions.term_query_taxonomy,
						hide_empty: extensions.term_query_hide_empty,
						number: extensions.term_query_number,
					};

				case 'users':
					return {
						users: 'true',
						role: alm.listing.dataset.usersRole,
						include: alm.listing.dataset.usersInclude,
						exclude: alm.listing.dataset.usersExclude,
						per_page: alm.posts_per_page,
						order: alm.listing.dataset.usersOrder,
						orderby: alm.listing.dataset.usersOrderby,
					};
			}
		}

		/**
		 * Build the REST API data object to send with REST API request.
		 *
		 * @param {Object} alm The ALM object.
		 * @return {Object}    The data object.
		 * @since 3.6
		 */
		function getRestAPIParams(alm) {
			const data = {
				id: alm.id,
				post_id: parseInt(alm.post_id),
				posts_per_page: alm.posts_per_page,
				page: alm.page,
				offset: alm.offset,
				slug: alm.slug,
				canonical_url: encodeURIComponent(alm.canonical_url),
				post_type: alm.post_type,
				post_format: alm.listing.dataset.postFormat,
				category: alm.listing.dataset.category,
				category__not_in: alm.listing.dataset.categoryNotIn,
				tag: alm.listing.dataset.tag,
				tag__not_in: alm.listing.dataset.tagNotIn,
				taxonomy: alm.listing.dataset.taxonomy,
				taxonomy_terms: alm.listing.dataset.taxonomyTerms,
				taxonomy_operator: alm.listing.dataset.taxonomyOperator,
				taxonomy_relation: alm.listing.dataset.taxonomyRelation,
				meta_key: alm.listing.dataset.metaKey,
				meta_value: alm.listing.dataset.metaValue,
				meta_compare: alm.listing.dataset.metaCompare,
				meta_relation: alm.listing.dataset.metaRelation,
				meta_type: alm.listing.dataset.metaType,
				author: alm.listing.dataset.author,
				year: alm.listing.dataset.year,
				month: alm.listing.dataset.month,
				day: alm.listing.dataset.day,
				post_status: alm.listing.dataset.postStatus,
				order: alm.listing.dataset.order,
				orderby: alm.listing.dataset.orderby,
				post__in: alm.listing.dataset.postIn,
				post__not_in: alm.listing.dataset.postNotIn,
				search: alm.listing.dataset.search,
				s: alm.listing.dataset.s,
				custom_args: alm.listing.dataset.customArgs,
				vars: alm.listing.dataset.vars,
				lang: alm.lang,
				preloaded: alm.addons.preloaded,
				preloaded_amount: alm.addons.preloaded_amount,
				seo_start_page: alm.start_page,
			};
			return data;
		} // CONCATENATED MODULE: ./src/frontend/js/functions/windowResize.js

		/**
		 * Trigger a window resize browser function.
		 *
		 * @since 5.3.1
		 */
		function triggerWindowResize() {
			if (typeof Event === 'function') {
				// Modern browsers.
				window.dispatchEvent(new Event('resize'));
			} else {
				// Executed on old browsers and especially IE.
				const resizeEvent = window.document.createEvent('UIEvents');
				resizeEvent.initUIEvent('resize', true, false, window, 0);
				window.dispatchEvent(resizeEvent);
			}
		} // CONCATENATED MODULE: ./src/frontend/js/modules/almDebug.js

		/**
		 * Display Ajax Load More debug results.
		 *
		 * @see https://connekthq.com/plugins/ajax-load-more/docs/filter-hooks/#alm_debug
		 * @param {Object} alm ALM object.
		 * @since 5.1.6
		 */
		function almDebug(alm) {
			if (alm && alm.debug) {
				const obj = {
					query: alm.debug,
					localize: alm.localize,
				};
				console.log('ALM Debug:', obj); // eslint-disable-line no-console
			}
		} // CONCATENATED MODULE: ./src/frontend/js/modules/fade.js

		/**
		 * Fade element in.
		 *
		 * @param {HTMLElement} element The HTML element to fade in.
		 * @param {number}      speed   The transition speed.
		 * @return {Promise}            The Promise object.
		 */
		const almFadeIn = (element, speed) => {
			return new Promise((resolve) => {
				if (speed === 0) {
					element.style.opacity = 1;
					element.style.height = 'auto';
					resolve(true);
				} else {
					speed = speed / 10;
					let op = 0; // initial opacity
					const timer = setInterval(function () {
						if (op > 0.9) {
							element.style.opacity = 1;
							resolve(true);
							clearInterval(timer);
						}
						element.style.opacity = op;
						op += 0.1;
					}, speed);
					element.style.height = 'auto';
				}
			});
		};

		/**
		 * Fade element out.
		 *
		 * @param {HTMLElement} element The HTML element to fade out.
		 * @param {number}      speed   The transition speed.
		 * @return {Promise}            The Promise object.
		 */
		const almFadeOut = (element, speed) => {
			return new Promise((resolve) => {
				speed = speed / 10;
				element.style.opacity = 0.5;
				const fadeEffect = setInterval(function () {
					if (element.style.opacity < 0.1) {
						element.style.opacity = 0;
						clearInterval(fadeEffect);
						resolve(true);
					} else {
						element.style.opacity -= 0.1;
					}
				}, speed);
			});
		}; // CONCATENATED MODULE: ./src/frontend/js/modules/tableofcontents.js

		/**
		 * Create a numbered table of contents navigation.
		 *
		 * @param {Object}  alm            The alm object.
		 * @param {boolean} init           Init boolean.
		 * @param {boolean} from_preloaded Preloaded boolean.
		 * @since 5.2
		 */
		function tableOfContents(alm, init = false, from_preloaded = false) {
			const totalPosts = alm.localize && alm.localize.post_count ? parseInt(alm.localize.post_count) : 0;

			// eslint-disable-next-line eqeqeq
			if (totalPosts == 0 && !alm.addons.single_post) {
				// Exit if zero posts and not single posts
				return false;
			}

			if (alm && alm.tableofcontents && alm.transition !== 'masonry') {
				const offset = alm.tableofcontents.dataset.offset ? parseInt(alm.tableofcontents.dataset.offset) : 30;
				const startPage = alm.start_page ? parseInt(alm.start_page) : 0;
				const filterStartPage = alm.addons.filters_startpage ? parseInt(alm.addons.filters_startpage) : 0;
				const nextpageStartPage = alm.addons.nextpage_startpage ? parseInt(alm.addons.nextpage_startpage) : 0;
				let page = parseInt(alm.page);
				const preloaded = alm.addons.preloaded ? true : false;

				// Exit if Paging or Next Page
				if (alm.addons.paging || alm.addons.nextpage) {
					return false;
				}

				// Init.
				if (init) {
					setTimeout(function () {
						// Paged results
						if ((alm.addons.seo && startPage > 1) || (alm.addons.filters && filterStartPage > 1) || (alm.addons.nextpage && nextpageStartPage > 1)) {
							// SEO
							if (alm.addons.seo && startPage > 1) {
								for (let i = 0; i < startPage; i++) {
									createTOCButton(alm, i, offset);
								}
							}
							// Filters
							if (alm.addons.filters && filterStartPage > 1) {
								for (let i = 0; i < filterStartPage; i++) {
									createTOCButton(alm, i, offset);
								}
							}
							// Nextpage
							if (alm.addons.nextpage && nextpageStartPage > 1) {
								for (let i = 0; i < nextpageStartPage; i++) {
									createTOCButton(alm, i, offset);
								}
							}
						} else {
							if (!from_preloaded && preloaded) {
								page = page + 1;
							}
							createTOCButton(alm, page, offset);
						}
					}, 100);
				} else {
					// Preloaded
					if (preloaded) {
						if (alm.addons.seo && startPage > 0) {
							page = page;
						} else if (alm.addons.filters && filterStartPage > 0) {
							page = page;
						} else {
							page = page + 1;
						}
					}

					createTOCButton(alm, page, offset);
				}
			}
		}

		/**
		 * Clear table of contents.
		 */
		function clearTOC() {
			const toc = document.querySelector('.alm-toc');
			if (toc) {
				toc.innerHTML = '';
			}
		}

		/**
		 * Create Standard Page Button.
		 *
		 * @param {Object} alm    The alm object.
		 * @param {string} page   Current page.
		 * @param {number} offset The page offset.
		 */
		function createTOCButton(alm, page, offset) {
			if (!alm.tableofcontents) {
				return false;
			}
			page = parseInt(page);
			const posts_per_page = parseInt(alm.posts_per_page);

			// Create button.
			const button = document.createElement('button');
			button.type = 'button';
			button.innerHTML = getTOCLabel(alm, page + 1);
			button.dataset.page = alm.addons.single_post_target && alm.init ? page - 1 : page + 1;

			button.dataset.target = (page + 1) * posts_per_page - posts_per_page + 1;

			// Add button to TOC.
			alm.tableofcontents.appendChild(button);

			// Click event listener.
			button.addEventListener('click', function () {
				const current = this.dataset.page;
				const target = this.dataset.target;

				// Get all listing children.
				const children = alm.listing.children;

				// Find element.
				let element = children[target - 1];

				// Next Page.
				if (alm.addons.nextpage) {
					element = document.querySelector(`.alm-nextpage[data-page="${current}"]`);
				}
				// Single Posts.
				if (alm.addons.single_post_target) {
					element = document.querySelector(`.alm-single-post[data-page="${current}"]`);
				}

				if (!element) {
					return; // Exit if no target.
				}

				const top = typeof getOffset === 'function' ? getOffset(element).top : element.offsetTop;
				almScroll(top - offset);

				setTimeout(function () {
					setFocus(alm, element, target, false);
				}, 500);
			});
		}

		/**
		 * Get Button Label.
		 *
		 * @param {Object} alm  The alm object.
		 * @param {string} page The current page.
		 * @return {string}     The Label.
		 */
		function getTOCLabel(alm, page) {
			let label = page;

			// Single Posts
			if (alm.addons.single_post) {
				let thePage = page - 1;
				let element;
				if (alm.addons.single_post_target) {
					// Special functionality for Single Post with a loading target type
					if (alm.init) {
						thePage = thePage;
					} else {
						thePage = thePage + 1;
					}
					const posts = document.querySelectorAll(`.alm-single-post`);
					if (posts) {
						element = posts[thePage];
					}
				} else {
					element = document.querySelector(`.alm-single-post[data-page=${page - 1}]`);
				}
				label = element ? element.dataset.title : label;
			}

			// Dynamic function name.
			const funcName = `almTOCLabel_${alm.id}`;
			if (typeof window[funcName] === 'function') {
				label = window[funcName](page, label);
			}

			return label;
		} // CONCATENATED MODULE: ./src/frontend/js/modules/filtering.js

		/**
		 * Filter an Ajax Load More instance.
		 *
		 * @param {string} transition Transition type.
		 * @param {number} speed      Transition speed.
		 * @param {Object} data       Data object.
		 * @param {string} type       Type of filter.
		 * @since 2.6.1
		 */
		function almFilter(transition, speed = 150, data, type = 'filter') {
			if (data.target) {
				// Target has been specified.
				const alm = document.querySelectorAll('.ajax-load-more-wrap[data-id="' + data.target.toLowerCase() + '"]');
				if (alm) {
					alm.forEach(function (element) {
						almFilterTransition(transition, speed, data, type, element);
					});
				}
			} else {
				// Target not specified.
				const alm = document.querySelectorAll('.ajax-load-more-wrap');
				if (alm) {
					alm.forEach(function (element) {
						almFilterTransition(transition, speed, data, type, element);
					});
				}
			}

			clearTOC(); // Clear table of contents if required
		}

		/**
		 * Transition Ajax Load More
		 *
		 * @param {string}  transition Transition type.
		 * @param {number}  speed      Transition speed.
		 * @param {Object}  data       Data object.
		 * @param {string}  type       Type of filter.
		 * @param {Element} element    Target element.
		 * @since 2.13.1
		 */
		function almFilterTransition(transition, speed, data, type, element) {
			if (transition === 'fade' || transition === 'masonry') {
				// Fade, Masonry transition

				switch (type) {
					case 'filter':
						element.classList.add('alm-is-filtering');
						almFadeOut(element, speed);
						break;
				}

				// Move to next function
				setTimeout(function () {
					almCompleteFilterTransition(speed, data, type, element);
				}, speed);
			} else {
				// No transition
				element.classList.add('alm-is-filtering');
				almCompleteFilterTransition(speed, data, type, element);
			}
		}

		/**
		 * Complete the filter transition.
		 *
		 * @param {number}  speed   Transition speed.
		 * @param {Object}  data    Data object.
		 * @param {string}  type    Type of filter.
		 * @param {Element} element Target element.
		 * @since 3.3
		 */
		function almCompleteFilterTransition(speed, data, type, element) {
			const btnWrap = element.querySelector('.alm-btn-wrap'); // Get `.alm-btn-wrap` element
			const listing = element.querySelectorAll('.alm-listing'); // Get `.alm-listing` element

			if (!listing || !btnWrap) {
				// Exit if elements doesn't exist.
				return false;
			}

			// Loop over all .alm-listing divs and clear HTML.
			[...listing].forEach(function (element) {
				// Is this a paging instance.
				const paging = element.querySelector('.alm-paging-content');
				if (paging) {
					paging.innerHTML = '';
				} else {
					element.innerHTML = '';
				}
			});

			// Get Load More button
			const button = btnWrap.querySelector('.alm-load-more-btn');
			if (button) {
				button.classList.remove('done'); // Reset Button
			}

			// Clear paging navigation
			const paging = btnWrap.querySelector('.alm-paging');
			if (paging) {
				paging.style.opacity = 0;
			}

			// Reset Preloaded Amount
			data.preloadedAmount = 0;

			// Dispatch Filters
			almSetFilters(speed, data, type, element);
		}

		/**
		 * Set filter parameters on .alm-listing element.
		 *
		 * @param {number}  speed   Transition speed.
		 * @param {Object}  data    Data object.
		 * @param {string}  type    Type of filter.
		 * @param {Element} element Target element.
		 * @since 2.6.1
		 */
		function almSetFilters(speed, data, type, element) {
			// Get `alm-listing` container.
			const listing = element.querySelector('.alm-listing') || element.querySelector('.alm-comments');
			if (!listing) {
				return false;
			}

			switch (type) {
				case 'filter':
					// Update data attributes
					for (let [key, value] of Object.entries(data)) {
						// Convert camelCase data atts back to dashes (-).
						key = key
							.replace(/\W+/g, '-')
							.replace(/([a-z\d])([A-Z])/g, '$1-$2')
							.toLowerCase();
						listing.setAttribute('data-' + key, value);
					}
					// Fade ALM back (Filters only)
					almFadeIn(element, speed);
					break;
			}

			// Re-initiate Ajax Load More.
			let target = '';
			if (data.target) {
				// Target has been specified
				target = document.querySelector('.ajax-load-more-wrap[data-id="' + data.target + '"]');
				if (target) {
					window.almInit(target);
				}
			} else {
				// Target not specified
				target = document.querySelector('.ajax-load-more-wrap');
				if (target) {
					window.almInit(target);
				}
			}

			switch (type) {
				case 'filter':
					// Filters Complete (not the add-on)
					if (typeof almFilterComplete === 'function') {
						// Standard Filtering
						almFilterComplete();
					}
					break;
			}
		} // CONCATENATED MODULE: ./src/frontend/js/modules/masonry.js

		const masonry_imagesLoaded = __webpack_require__(564);

		/**
		 * Function to trigger built-in Ajax Load More Masonry.
		 *
		 * @param {Object}  alm       ALM object.
		 * @param {boolean} init      Initial run true or false.
		 * @param {boolean} filtering Is this a filtering event.
		 * @since 3.1
		 */
		function almMasonry(alm, init, filtering) {
			if (!alm.masonry) {
				console.warn('Ajax Load More: Unable to locate Masonry settings.');
			}

			const { listing: container, last_loaded, speed } = alm;

			return new Promise((resolve) => {
				const selector = alm.masonry.selector;
				const animation = alm.masonry.animation;
				const horizontalOrder = alm?.masonry?.horizontalorder === 'true' ? true : false;
				const masonry_init = alm.masonry.init;
				let columnWidth = alm.masonry.columnwidth;

				const duration = (speed + 100) / 1000 + 's'; // Add 100 for some delay
				let hidden = 'scale(0.5)';
				let visible = 'scale(1)';

				if (animation === 'zoom-out') {
					hidden = 'translateY(-20px) scale(1.25)';
					visible = 'translateY(0) scale(1)';
				}

				if (animation === 'slide-up') {
					hidden = 'translateY(50px)';
					visible = 'translateY(0)';
				}

				if (animation === 'slide-down') {
					hidden = 'translateY(-50px)';
					visible = 'translateY(0)';
				}

				if (animation === 'none') {
					hidden = 'translateY(0)';
					visible = 'translateY(0)';
				}

				// columnWidth
				if (columnWidth) {
					if (!isNaN(columnWidth)) {
						columnWidth = parseInt(columnWidth); // Check if number.
					}
				} else {
					columnWidth = selector; // No columnWidth, use the selector
				}

				if (!filtering) {
					// First Run.
					if (masonry_init && init) {
						masonry_imagesLoaded(container, function () {
							const defaults = {
								itemSelector: selector,
								transitionDuration: duration,
								columnWidth: columnWidth, // eslint-disable-line
								horizontalOrder: horizontalOrder, // eslint-disable-line
								hiddenStyle: {
									transform: hidden,
									opacity: 0,
								},
								visibleStyle: {
									transform: visible,
									opacity: 1,
								},
							};

							// Get custom Masonry options (https://masonry.desandro.com/options.html).
							const alm_masonry_vars = window?.alm_masonry_vars;
							if (alm_masonry_vars) {
								Object.keys(alm_masonry_vars).forEach(function (key) {
									// Loop object	to create key:prop
									defaults[key] = alm_masonry_vars[key];
								});
							}

							// Init Masonry, delay to allow time for items to be added to the page.
							setTimeout(async function () {
								alm.msnry = new Masonry(container, defaults);
								await almFadeIn(container.parentNode, 175);
								resolve(true);
							}, 25);
						});
					} else {
						// Standard / Append content.
						// eslint-disable-next-line no-lonely-if
						if (last_loaded) {
							// ImagesLoaded & appended.
							masonry_imagesLoaded(container, function () {
								setTimeout(async function () {
									alm.msnry.appended(last_loaded);
									resolve(true);
								}, 25);
							});
						}
					}
				} else {
					// Reset instance.
					container.parentNode.style.opacity = 0;
					almMasonry(alm, true, false);
					resolve(true);
				}
			});
		}

		/**
		 * Set up initial Masonry Configuration.
		 *
		 * @param {Object} alm ALM Object.
		 * @return {Object}    Configuration object.
		 */
		function almMasonryConfig(alm) {
			alm.masonry = {};
			alm.masonry.init = true;
			if (alm.msnry) {
				// destroy masonry if it currently exists.
				alm.msnry.destroy();
			} else {
				alm.msnry = '';
			}
			const masonry_config = JSON.parse(alm.listing.dataset.masonryConfig);
			if (masonry_config) {
				alm.masonry.selector = masonry_config.selector;
				alm.masonry.columnwidth = masonry_config.columnwidth;
				alm.masonry.animation = masonry_config.animation === '' ? 'standard' : masonry_config.animation;
				alm.masonry.horizontalorder = masonry_config.horizontalorder === '' ? 'true' : masonry_config.horizontalorder;
				alm.images_loaded = true;
				alm.transition_delay = 0;
			} else {
				console.warn('Ajax Load More: Unable to locate Masonry configuration settings.');
			}

			return alm;
		} // CONCATENATED MODULE: ./src/frontend/js/modules/placeholder.js

		/**
		 * Show placeholder div.
		 *
		 * @param {string} type The direction.
		 * @param {Object} alm  The ALM object.
		 */
		async function placeholder(type = 'show', alm) {
			const { placeholder, addons, rel } = alm;
			if (!placeholder || addons.paging || rel === 'prev') {
				return false;
			}

			switch (type) {
				case 'hide':
					await almFadeOut(placeholder, 175);
					setTimeout(function () {
						placeholder.style.display = 'none';
					}, 75);

					break;
				default:
					placeholder.style.display = 'block';
					almFadeIn(placeholder, 175);

					break;
			}
		} // CONCATENATED MODULE: ./src/frontend/js/modules/resultsText.js

		/**
		 * Set the results text if required.
		 *
		 * @param {Object} alm  ALM object.
		 * @param {string} type Type of results.
		 * @since 5.1
		 */
		function almResultsText(alm, type = 'standard') {
			if (!alm.resultsText || alm.nested === 'true') {
				return false;
			}
			const resultsType = type === 'nextpage' || type === 'woocommerce' ? type : 'standard';
			almGetResultsText(alm, resultsType);
		}

		/**
		 * Get values for showing results text.
		 *
		 * @param {Object} alm  ALM object.
		 * @param {string} type Type of results.
		 * @since 4.1
		 */
		function almGetResultsText(alm, type = 'standard') {
			if (!alm.resultsText || !alm.localize || alm.nested === 'true') {
				return false;
			}

			let page = 0;
			let pages = 0;
			let post_count = 0;
			let total_posts = 0;
			const posts_per_page = alm.orginal_posts_per_page;

			switch (type) {
				// Nextpage
				case 'nextpage':
					page = parseInt(alm.localize.page);
					post_count = page;
					pages = parseInt(alm.localize.total_posts);
					total_posts = parseInt(pages);
					almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, posts_per_page);

					break;

				// WooCommerce
				case 'woocommerce':
					// Don't do anything
					break;

				default:
					page = getTotals('page', alm.id);
					pages = getTotals('pages', alm.id);
					post_count = getTotals('post_count', alm.id);
					total_posts = getTotals('total_posts', alm.id);

					almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, posts_per_page);
			}
		}

		/**
		 * Display `Showing {x} of {y} pages` text.
		 *
		 * @param {Object} alm  ALM object.
		 * @param {string} type Type of results.
		 * @since 4.1
		 */
		function almInitResultsText(alm, type = 'standard') {
			if (!alm.resultsText || !alm.localize || alm.nested === 'true') {
				return false;
			}

			let page = 0;
			let pages = Math.ceil(alm.localize.total_posts / alm.orginal_posts_per_page);
			let post_count = parseInt(alm.localize.post_count);
			const total_posts = parseInt(alm.localize.total_posts);

			switch (type) {
				case 'nextpage': // Nextpage
					page = alm.addons.nextpage_startpage;
					post_count = page;
					pages = total_posts;
					almRenderResultsText(alm.resultsText, page, total_posts, post_count, total_posts, alm.posts_per_page);
					break;

				case 'preloaded': // Preloaded
					page = alm.addons.paging && alm.addons.seo ? alm.start_page + 1 : parseInt(alm.page) + 1;
					almRenderResultsText(alm.resultsText, page, pages, post_count, total_posts, alm.posts_per_page);
					break;

				case 'woocommerce': // WooCommerce
					// Don't do anything
					break;
			}
		}

		/**
		 * Render `Showing {x} of {y} results` text.
		 *
		 * @param {Element} el          The results text HTML element.
		 * @param {string}  page        The current page number.
		 * @param {string}  pages       The total pages.
		 * @param {string}  post_count  Total posts displayed.
		 * @param {string}  total_posts Total amount of posts in query.
		 * @param {string}  per_page    Total amount of posts per page.
		 * @since 4.1
		 */
		const almRenderResultsText = function (el, page, pages, post_count, total_posts, per_page) {
			el.forEach(function (result) {
				pages = parseInt(pages);
				let text = pages > 0 ? alm_localize.results_text : alm_localize.no_results_text;

				// Paging add-on.
				// Start and End values for posts in view.
				const start = page * per_page - per_page + 1;
				const end_val = page * per_page;
				const end = end_val <= total_posts ? end_val : total_posts;

				if (pages > 0) {
					text = text.replace('{num}', `<span class="alm-results-num">${page}</span>`); // Deprecated
					text = text.replace('{page}', `<span class="alm-results-page">${page}</span>`);
					text = text.replace('{start}', `<span class="alm-results-start">${start}</span>`);
					text = text.replace('{end}', `<span class="alm-results-start">${end}</span>`);
					text = text.replace('{total}', `<span class="alm-results-total">${pages}</span>`); // Deprecated
					text = text.replace('{pages}', `<span class="alm-results-pages">${pages}</span>`);
					text = text.replace('{post_count}', `<span class="alm-results-post_count">${post_count}</span>`);
					text = text.replace('{total_posts}', `<span class="alm-results-total_posts">${total_posts}</span>`);
					result.innerHTML = text;
				} else {
					result.innerHTML = text;
				}
			});
		}; // CONCATENATED MODULE: ./src/frontend/js/modules/setLocalizedVars.js

		/**
		 * Set localized variables
		 *
		 * @param {Object} alm ALM object
		 * @since 4.1
		 */
		function setLocalizedVars(alm) {
			const { addons } = alm;
			return new Promise((resolve) => {
				let type = 'standard';

				if (addons.nextpage) {
					// Nextpage
					type = 'nextpage';
					if (addons.paging) {
						alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
					} else {
						alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + parseInt(addons.nextpage_startpage) + 1);
					}
				} else if (addons.woocommerce) {
					// WooCommerce
					type = 'woocommerce';
					alm.AjaxLoadMore.setLocalizedVar('page', parseInt(alm.page) + 1);
				} else {
					// Standard ALM.
					const page = parseInt(alm.page) + 1 + (addons.preloaded && !addons.paging ? 1 : 0); // Add 1 page for preloaded.
					alm.AjaxLoadMore.setLocalizedVar('page', parseInt(page));

					const pages = Math.ceil(alm.totalposts / alm.orginal_posts_per_page);
					alm.AjaxLoadMore.setLocalizedVar('pages', parseInt(pages));
				}

				// Total Posts `total_posts`.
				// Only update if !preloaded && !nextpage && !woocommerce
				if (addons.preloaded !== 'true' && !addons.nextpage && !addons.woocommerce) {
					alm.AjaxLoadMore.setLocalizedVar('total_posts', alm.totalposts);
				}

				// Viewing count.
				alm.AjaxLoadMore.setLocalizedVar('post_count', getPostCount(alm));

				// Set Results Text (if required).
				almResultsText(alm, type);

				resolve(true);
			});
		}

		/**
		 * Get total post_count.
		 *
		 * @param {Object} alm ALM object.
		 * @return {number}    Total post count.
		 */
		function getPostCount(alm) {
			const { postcount, addons, start_page } = alm;
			const { preloaded_amount } = addons;

			// Construct post count.
			let count = parseInt(postcount) + parseInt(preloaded_amount);
			count = start_page > 1 ? count - parseInt(preloaded_amount) : count; // SEO
			count = addons.filters_startpage > 1 ? count - parseInt(preloaded_amount) : count; // Filters
			count = addons.single_post ? count + 1 : count; // Single Posts
			count = addons.nextpage ? count + 1 : count; // Next Page

			return count;
		}

		// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
		var injectStylesIntoStyleTag = __webpack_require__(379);
		var injectStylesIntoStyleTag_default = /*#__PURE__*/ __webpack_require__.n(injectStylesIntoStyleTag);
		// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
		var styleDomAPI = __webpack_require__(795);
		var styleDomAPI_default = /*#__PURE__*/ __webpack_require__.n(styleDomAPI);
		// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
		var insertBySelector = __webpack_require__(569);
		var insertBySelector_default = /*#__PURE__*/ __webpack_require__.n(insertBySelector);
		// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
		var setAttributesWithoutAttributes = __webpack_require__(565);
		var setAttributesWithoutAttributes_default = /*#__PURE__*/ __webpack_require__.n(setAttributesWithoutAttributes);
		// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
		var insertStyleElement = __webpack_require__(216);
		var insertStyleElement_default = /*#__PURE__*/ __webpack_require__.n(insertStyleElement);
		// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
		var styleTagTransform = __webpack_require__(589);
		var styleTagTransform_default = /*#__PURE__*/ __webpack_require__.n(styleTagTransform);
		// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/frontend/scss/ajax-load-more.scss
		var ajax_load_more = __webpack_require__(789);
		var ajax_load_more_default = /*#__PURE__*/ __webpack_require__.n(ajax_load_more); // CONCATENATED MODULE: ./src/frontend/scss/ajax-load-more.scss
		var options = {};

		options.styleTagTransform = styleTagTransform_default();
		options.setAttributes = setAttributesWithoutAttributes_default();

		options.insert = insertBySelector_default().bind(null, 'head');

		options.domAPI = styleDomAPI_default();
		options.insertStyleElement = insertStyleElement_default();

		var update = injectStylesIntoStyleTag_default()(ajax_load_more_default(), options);

		/* harmony default export */ var scss_ajax_load_more =
			ajax_load_more_default() && ajax_load_more_default().locals ? ajax_load_more_default().locals : undefined; // CONCATENATED MODULE: ./src/frontend/js/ajax-load-more.js

		// ALM Modules

		// External packages.
		const qs = __webpack_require__(129);
		const ajax_load_more_imagesLoaded = __webpack_require__(564);

		// Axios Config.
		lib_axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		// Axios Interceptor for nested data objects
		lib_axios.interceptors.request.use((config) => {
			config.paramsSerializer = (params) => {
				// Qs is already included in the Axios package
				return qs.stringify(params, {
					arrayFormat: 'brackets',
					encode: false,
				});
			};
			return config;
		});

		// Focus Polyfill.
		__webpack_require__(334);

		// Global filtering state.
		let alm_is_filtering = false;

		// Start ALM
		(function () {
			'use strict';

			/**
			 * Initiate Ajax Load More.
			 *
			 * @param {Element} el    The Ajax Load More DOM element/container.
			 * @param {number}  index The current index number of the Ajax Load More instance.
			 */
			const ajaxloadmore = function (el, index) {
				// Move user to top of page to prevent loading of unnessasry posts
				if (alm_localize?.scrolltop === 'true') {
					window.scrollTo(0, 0);
				}

				// Set ALM Variables
				let alm = this;
				alm.AjaxLoadMore = {};
				alm.addons = {};
				alm.extensions = {};
				alm.integration = {};
				alm.window = window;
				alm.page = 0;
				alm.postcount = 0;
				alm.totalposts = 0;
				alm.proceed = false;
				alm.disable_ajax = false;
				alm.init = true;
				alm.loading = true;
				alm.finished = false;
				alm.timer = null;
				alm.rel = 'next';

				alm.ua = window.navigator.userAgent ? window.navigator.userAgent : ''; // Browser User Agent
				alm.vendor = window.navigator.vendor ? window.navigator.vendor : ''; // Browser Vendor

				el.classList.add('alm-' + index); // Add unique classname.
				el.setAttribute('data-alm-id', index); // Add unique data id.

				// The defined or generated ID for the ALM instance.
				alm.master_id = el.dataset.id ? `ajax_load_more_${el.dataset.id}` : el.id;
				alm.master_id = alm.master_id.replace(/-/g, '_');

				// Localized <script/> variables.
				alm.localize = window[alm.master_id + '_vars'];

				// Add ALM object to the global window scope.
				window[alm.master_id] = alm; // e.g. window.ajax_load_more or window.ajax_load_more_{id}

				// ALM Element Containers
				alm.main = el; // Top level DOM element
				alm.listing = el.querySelector('.alm-listing') || el.querySelector('.alm-comments');
				alm.content = alm.listing;
				alm.ajax = el.querySelector('.alm-ajax');
				alm.container_type = alm.listing.dataset.containerType;
				alm.loading_style = alm.listing.dataset.loadingStyle;

				// Instance Params
				alm.canonical_url = el.dataset.canonicalUrl;
				alm.nested = el.dataset.nested ? el.dataset.nested : false;
				alm.is_search = el?.dataset?.search === 'true' ? 'true' : false;
				alm.search_value = alm.is_search === 'true' ? alm.slug : ''; // Convert to value of slug for appending to seo url.
				alm.slug = el.dataset.slug;
				alm.post_id = parseInt(el.dataset.postId);
				alm.id = el.dataset.id ? el.dataset.id : '';

				// Shortcode Params

				alm.repeater = alm?.listing?.dataset?.repeater || 'default';
				alm.theme_repeater = alm?.listing?.dataset?.themeRepeater || false;

				alm.post_type = alm?.listing?.dataset?.postType || 'post';
				alm.sticky_posts = alm?.listing?.dataset?.stickyPosts || false;

				alm.btnWrap = el.querySelectorAll('.alm-btn-wrap'); // Get all `.alm-button-wrap` divs
				alm.btnWrap = [...alm.btnWrap]; // Convert NodeList to array
				alm.btnWrap[alm.btnWrap.length - 1].style.visibility = 'visible'; // Get last element (used for nesting)
				alm.trigger = alm.btnWrap[alm.btnWrap.length - 1];
				alm.button = alm?.trigger?.querySelector('button.alm-load-more-btn') || null;

				alm.button_labels = {
					default: alm?.listing?.dataset?.buttonLabel || alm_localize?.button_label,
					loading: alm?.listing?.dataset?.buttonLoadingLabel || null,
					done: alm?.listing?.dataset?.buttonDoneLabel || null,
				};

				alm.placeholder = alm.main.querySelector('.alm-placeholder') || false;

				alm.scroll_distance = alm?.listing?.dataset.scrollDistance || 100;
				alm.scroll_container = alm?.listing?.dataset.scrollContainer || null;
				alm.scroll_direction = alm?.listing?.dataset?.scrollDirection || 'vertical';
				alm.max_pages = alm?.listing?.dataset?.maxPages ? parseInt(alm.listing.dataset.maxPages) : 0;
				alm.pause_override = alm?.listing?.dataset?.pauseOverride || false; // true | false
				alm.pause = alm?.listing?.dataset?.pause || false; // true | false
				alm.transition = alm?.listing?.dataset?.transition || 'fade'; // Transition
				alm.transition_delay = alm?.listing?.dataset?.transitionDelay || 0;
				alm.speed = alm_localize?.speed ? parseInt(alm_localize.speed) : 250;
				alm.images_loaded = alm?.listing?.dataset?.imagesLoaded === 'true';
				alm.destroy_after = alm?.listing?.dataset?.destroyAfter ? parseInt(alm.listing.dataset.destroyAfter) : false;
				alm.lazy_images = alm?.listing.dataset?.lazyImages === 'true' ? true : false;
				alm.integration.woocommerce = alm?.listing?.dataset?.woocommerce === 'true' ? true : false;

				alm.scroll = alm?.listing?.dataset?.scroll === 'false' ? false : true;
				alm.orginal_posts_per_page = parseInt(alm.listing.dataset.postsPerPage); // Used for paging add-on
				alm.posts_per_page = parseInt(alm.listing.dataset.postsPerPage);
				alm.offset = alm?.listing?.dataset?.offset ? parseInt(alm.listing.dataset.offset) : 0;
				alm.paged = false;

				// Add-on Shortcode Params

				alm = elementorCreateParams(alm); // Elementor add-on
				alm = wooCreateParams(alm); // WooCommerce add-on
				alm = cacheCreateParams(alm); // Cache add-on
				alm = ctaCreateParams(alm); // CTA add-on
				alm = nextpageCreateParams(alm); // Nextpage add-on
				alm = singlepostsCreateParams(alm); // Single Posts add-on
				alm = commentsCreateParams(alm); // Comments add-on
				alm = preloadedCreateParams(alm); // Preloaded add-on.
				alm = pagingCreateParams(alm); // Paging add-on.
				alm = filtersCreateParams(alm); // Filters add-on.
				alm = seoCreateParams(alm); // SEO add-on.

				// Extension Shortcode Params

				// Users
				alm.extensions.users = alm.listing.dataset.users === 'true';
				if (alm.extensions.users) {
					// Override paging params for users
					alm.orginal_posts_per_page = parseInt(alm.listing.dataset.usersPerPage);
					alm.posts_per_page = parseInt(alm.listing.dataset.usersPerPage);
				}

				// REST API.
				alm.extensions.restapi = alm.listing.dataset.restapi === 'true';
				if (alm.extensions.restapi) {
					alm.extensions.restapi_base_url = alm.listing.dataset.restapiBaseUrl;
					alm.extensions.restapi_namespace = alm.listing.dataset.restapiNamespace;
					alm.extensions.restapi_endpoint = alm.listing.dataset.restapiEndpoint;
					alm.extensions.restapi_template_id = alm.listing.dataset.restapiTemplateId;
					alm.extensions.restapi_debug = alm.listing.dataset.restapiDebug;
					if (alm.extensions.restapi_template_id === '') {
						alm.extensions.restapi = false;
					}
				}

				// ACF.
				alm.extensions.acf = alm.listing.dataset.acf === 'true' ? true : false;
				if (alm.extensions.acf) {
					alm.extensions.acf_field_type = alm.listing.dataset.acfFieldType;
					alm.extensions.acf_field_name = alm.listing.dataset.acfFieldName;
					alm.extensions.acf_parent_field_name = alm.listing.dataset.acfParentFieldName;
					alm.extensions.acf_row_index = alm.listing.dataset.acfRowIndex;
					alm.extensions.acf_post_id = alm.listing.dataset.acfPostId;
					// if field type, name or post ID is empty.
					if (alm.extensions.acf_field_type === undefined || alm.extensions.acf_field_name === undefined || alm.extensions.acf_post_id === undefined) {
						alm.extensions.acf = false;
					}
				}

				// Term Query.
				alm.extensions.term_query = alm.listing.dataset.termQuery === 'true';
				if (alm.extensions.term_query) {
					alm.extensions.term_query_taxonomy = alm.listing.dataset.termQueryTaxonomy;
					alm.extensions.term_query_hide_empty = alm.listing.dataset.termQueryHideEmpty;
					alm.extensions.term_query_number = alm.listing.dataset.termQueryNumber;
				}

				/* Pause */
				if (alm.pause === undefined || (alm.addons.seo && alm.start_page > 1)) {
					// SEO only.
					alm.pause = false;
				}
				if (alm.addons.preloaded && alm.addons.seo && alm.start_page > 0) {
					// SEO + Preloaded.
					alm.pause = false;
				}
				if (alm.addons.filters && alm.addons.filters_startpage > 0) {
					// Filters.
					alm.pause = false;
				}
				if (alm.addons.preloaded && alm.addons.paging) {
					alm.pause = true;
				}

				/* Max Pages */
				alm.max_pages = alm.max_pages === undefined || alm.max_pages === 0 ? 9999 : alm.max_pages;

				/* Scroll Distance */
				alm.scroll_distance = alm.scroll_distance === undefined ? 100 : alm.scroll_distance;
				alm.scroll_distance_perc = false;
				if (alm.scroll_distance.toString().indexOf('%') === -1) {
					// Standard scroll_distance
					alm.scroll_distance = parseInt(alm.scroll_distance);
				} else {
					// Percentage scroll_distance
					alm.scroll_distance_perc = true;
					alm.scroll_distance_orig = parseInt(alm.scroll_distance);
					alm.scroll_distance = getScrollPercentage(alm);
				}

				/* Masonry */
				if (alm.transition === 'masonry') {
					alm = almMasonryConfig(alm);
				}

				/* Paging */
				if (alm.addons.paging) {
					// Add loading class to main container.
					alm.main.classList.add('alm-loading');
				} else {
					const almChildren = el.childNodes; // Get child nodes of instance [nodeList]
					if (almChildren) {
						const almChildArray = [...almChildren]; // Convert nodeList to array

						// Filter array to find the `.alm-btn-wrap` div
						const btnWrap = almChildArray.filter(function (element) {
							if (!element.classList) {
								// If not element (#text node)
								return false;
							}
							return element.classList.contains('alm-btn-wrap');
						});
						alm.button = btnWrap ? btnWrap[0].querySelector('.alm-load-more-btn') : container.querySelector('.alm-btn-wrap .alm-load-more-btn');
					} else {
						alm.button = container.querySelector('.alm-btn-wrap .alm-load-more-btn');
					}

					// Reset button state
					alm.button.disabled = false;
					alm.button.style.display = '';
				}

				/**
				 * No Results.
				 * Set template for showing no results HTML.
				 */
				const alm_no_results = el.querySelector('.alm-no-results');
				alm.no_results = alm_no_results ? alm_no_results.innerHTML : '';

				/**
				 * Results Text.
				 * Render "Showing x of y results" text.
				 */
				if (alm.integration.woocommerce) {
					// If woocommerce, get the default woocommerce results block
					alm.resultsText = document.querySelectorAll('.woocommerce-result-count');
					if (alm?.resultsText?.length < 1) {
						alm.resultsText = document.querySelectorAll('.alm-results-text');
					}
				} else {
					alm.resultsText = document.querySelectorAll('.alm-results-text');
				}

				if (alm.resultsText) {
					alm.resultsText.forEach(function (results) {
						results.setAttribute('aria-live', 'polite');
						results.setAttribute('aria-atomic', 'true');
					});
				} else {
					alm.resultsText = false;
				}

				// Table of Contents: Render 1, 2, 3 etc. when pages are loaded
				alm.tableofcontents = document.querySelector('.alm-toc') || false;
				if (alm.tableofcontents) {
					alm.tableofcontents.setAttribute('aria-live', 'polite');
					alm.tableofcontents.setAttribute('aria-atomic', 'true');
				}

				/**
				 * The function to get posts via Ajax/HTTP request.
				 *
				 * @since 2.0.0
				 */
				alm.AjaxLoadMore.loadPosts = function () {
					if (alm.disable_ajax) {
						return;
					}

					if (typeof almOnChange === 'function') {
						window.almOnChange(alm);
					}

					// Set loading attributes.
					alm.loading = true;
					alm.main.classList.add('alm-loading');
					placeholder('show', alm);

					// Add loading styles to buttons.
					if (!alm.addons.paging) {
						if (alm.rel === 'prev') {
							alm.buttonPrev.classList.add('loading');
						} else {
							alm.button.classList.add('loading');
							if (alm.button_labels.loading) {
								alm.button.innerHTML = alm.button_labels.loading;
							}
						}
					}

					// Dispatch Ajax request.
					alm.AjaxLoadMore.ajax();
				};

				/**
				 * The core Ajax Load More Ajax function.
				 *
				 * @param {string} type The type of Ajax request [standard|totalposts|totalpages].
				 * @since 2.6.0
				 */
				alm.AjaxLoadMore.ajax = async function (type = 'standard') {
					// Dispatch HTTP request.
					if (alm.extensions.restapi) {
						alm.AjaxLoadMore.restapi(alm);
					} else {
						// Standard ALM.
						const params = getAjaxParams(alm, type);
						// Cache.
						if (alm?.addons?.cache && !['totalposts', 'totalpages'].includes(type)) {
							// Get cache if available and not a totalposts or totalpages request.
							const cache = await getCache(alm, Object.assign({}, params));
							if (cache) {
								alm.AjaxLoadMore.render(cache);
							} else {
								alm.AjaxLoadMore.adminajax(params, type);
							}
						} else {
							alm.AjaxLoadMore.adminajax(params, type);
						}
					}
				};

				/**
				 * Send request to the admin-ajax.php
				 *
				 * @param {Object} params Query params.
				 * @param {string} type   The type of Ajax request [standard|totalposts|totalpages].
				 * @since 5.0.0
				 */
				alm.AjaxLoadMore.adminajax = async function (params, type) {
					let { ajaxurl } = alm_localize; // Get Ajax URL
					const { cache_slug = '' } = params; // Deconstruct query params.

					/**
					 * Single Posts.
					 * If `single_post_target`, adjust the Ajax URL to the post URL.
					 */
					if (alm.addons.single_post && alm.addons.single_post_target) {
						ajaxurl = `${alm.addons.single_post_permalink}?id=${alm.addons.single_post_id}&alm_page=${parseInt(alm.page) + 1}`;
						params = '';
					}

					// WooCommerce || Elementor.
					if (alm.addons.woocommerce || (alm.addons.elementor && alm.addons.elementor_type === 'posts')) {
						ajaxurl = getButtonURL(alm, alm.rel);
						params = '';
					}

					// Send HTTP request via axios.
					const data = await lib_axios
						.get(ajaxurl, { params })
						.then(function (response) {
							if (alm.addons.single_post && alm.addons.single_post_target) {
								// Single Posts
								return singlepostsHTML(alm, response, cache_slug);
							} else if (alm.addons.woocommerce) {
								// WooCommerce.
								return wooGetContent(alm, ajaxurl, response, cache_slug);
							} else if (alm.addons.elementor) {
								// Elementor
								return elementorGetContent(alm, ajaxurl, response, cache_slug);
							}

							// Standard ALM - Get data from response.
							return response.data;
						})
						.catch(function (error) {
							// Error
							alm.AjaxLoadMore.error(error, 'adminajax');
						});

					switch (type) {
						case 'standard':
							alm.AjaxLoadMore.render(data);
							break;

						case 'totalposts':
						case 'totalpages':
							if (alm.addons.paging && alm.addons.nextpage && typeof almBuildPagination === 'function') {
								window.almBuildPagination(data.totalpages, alm);
								alm.totalpages = data.totalpages;
							} else {
								if (alm.addons.paging && typeof almBuildPagination === 'function') {
									window.almBuildPagination(data.totalposts, alm);
								}
							}
							break;
					}
				};

				/**
				 * Send request to the WP REST API
				 *
				 * @param {Object} alm The Ajax Load More object.
				 * @since 5.0.0
				 */
				alm.AjaxLoadMore.restapi = function (alm) {
					const { rest_api_url } = alm_localize; // Get Rest API URL
					const { restapi_base_url, restapi_namespace, restapi_endpoint, restapi_template_id } = alm.extensions;

					const alm_rest_template = wp.template(restapi_template_id);
					const alm_rest_url = `${rest_api_url}${restapi_base_url}/${restapi_namespace}/${restapi_endpoint}`;
					const params = getRestAPIParams(alm);

					lib_axios
						.get(alm_rest_url, { params })
						.then(function (response) {
							// Success
							const results = response.data; // Get data from response
							const { html: items = null, meta = null } = results;
							const postcount = meta && meta.postcount ? meta.postcount : 0;
							const totalposts = meta && meta.totalposts ? meta.totalposts : 0;

							// loop results to get data from each.
							let data = '';
							for (let i = 0; i < items.length; i++) {
								const result = items[i];
								data += alm_rest_template(result);
							}

							// Rest API debug.
							if (alm.extensions.restapi_debug === 'true') {
								console.log('ALM RestAPI Debug:', items); // eslint-disable-line no-console
							}

							// Create results object.
							const obj = {
								html: data,
								meta: {
									postcount,
									totalposts,
								},
							};
							alm.AjaxLoadMore.render(obj);
						})
						.catch(function (error) {
							// Error
							alm.AjaxLoadMore.error(error, 'restapi');
						});
				};

				/**
				 * Display/render results function.
				 *
				 * @param {Object} data The results of the Ajax request.
				 * @since 2.6.0
				 */
				alm.AjaxLoadMore.render = async function (data) {
					if (alm.addons.single_post) {
						alm.AjaxLoadMore.getSinglePost(); // Fetch  single post data for next post.
					}

					// Parse incoming data.
					const { html, meta } = data;
					const total = meta ? parseInt(meta.postcount) : parseInt(alm.posts_per_page);

					// Get current post counts.
					const totalposts = typeof meta !== 'undefined' ? meta.totalposts : alm.posts_per_page * 5;
					alm.totalposts = totalposts;
					alm.postcount = alm.addons.paging ? total : alm.postcount + total;

					// Set alm.html as plain text return.
					alm.html = alm.container_type === 'table' ? html : html;

					if (!meta) {
						// Display warning if `meta` is missing from response.
						console.warn(
							'Ajax Load More: Unable to access `meta` object in Ajax response. There may be an issue in your Repeater Template or another theme/plugin hook causing interference with the Ajax request.'
						);
					}

					// ALM Init: First run only.
					if (alm.init) {
						if (meta) {
							alm.main.dataset.totalPosts = meta.totalposts ? meta.totalposts : 0;
						}

						// No Results / ALM Empty.
						if (total === 0) {
							if (alm.addons.paging && typeof almPagingEmpty === 'function') {
								window.almPagingEmpty(alm);
							}
							if (typeof almEmpty === 'function') {
								window.almEmpty(alm);
							}
							if (alm.no_results) {
								noResults(alm.content, alm.no_results);
							}
						}

						// Paging Add-on.
						if (alm.addons.paging) {
							// Dispatch call to build pagination.
							if (typeof almBuildPagination === 'function') {
								window.almBuildPagination(totalposts, alm, false);
							}
							if (total > 0) {
								// Reset container opacity.
								alm.addons.paging_container.style.opacity = 0;

								// Inject content.
								//alm.addons.paging_container.innerHTML = alm.html;

								// Start paging functionaity.
								alm.AjaxLoadMore.pagingInit();
							}
						}

						// SEO Offset.
						if (alm.addons.seo && alm.addons.seo_offset && !alm.addons.paging) {
							createSEOOffset(alm);
						}

						/**
						 * SEO & Filters add-on.
						 * Handle isPaged results.
						 */
						if (alm.paged) {
							// Reset the posts_per_page value.
							if (alm.addons.seo || alm.addons.filters || alm.extensions.users) {
								// Reset posts per page value.
								alm.posts_per_page = alm.orginal_posts_per_page;
							}

							// SEO add-on.
							if (alm.addons.seo) {
								alm.page = alm.start_page ? alm.start_page - 1 : alm.page; // Set new page number.
							}

							// Filters add-on.
							if (alm.addons.filters && alm.addons.filters_startpage > 0) {
								alm.page = alm.addons.filters_startpage - 1; // Set new page number.
							}
						}
						// Filters onLoad
						if (typeof almFiltersOnload === 'function') {
							window.almFiltersOnload(alm);
						}
					}
					// End ALM Init.

					/**
					 * Set Filter Facets.
					 */
					if (alm.addons.filters && alm.facets && data.facets && typeof almFiltersFacets === 'function') {
						window.almFiltersFacets(data.facets);
					}

					/**
					 * Display alm_debug results.
					 */
					almDebug(alm);

					/**
					 * Set localized variables and Results Text.
					 */
					(async () => {
						await setLocalizedVars(alm);
					})();

					// Get all returned data as an array of DOM nodes.
					let nodes = alm.container_type === 'table' ? tableParser(alm.html) : domParser(alm.html);
					alm.last_loaded = nodes;

					// Render results.
					if (total > 0) {
						/**
						 * WooCommerce || Elementor Add-on
						 */
						if (alm.addons.woocommerce || alm.addons.elementor) {
							const temp = document.createElement('div');
							temp.innerHTML = html;

							(async function () {
								if (alm.addons.woocommerce) {
									await woocommerce(temp, alm);
									woocommerceLoaded(alm);
								}
								if (alm.addons.elementor) {
									await elementor(temp, alm);
									elementorLoaded(alm);
								}
							})().catch((e) => {
								if (alm.addons.woocommerce) {
									console.warn('Ajax Load More: There was an error loading woocommerce products.', e);
								}
								if (alm.addons.elementor) {
									console.warn('Ajax Load More: There was an error loading elementor items.', e);
								}
							});

							alm.init = false;
							return;
						}

						if (!alm.addons.paging) {
							/**
							 * Infinite Scroll Results.
							 */
							nodes = formatHTML(alm, nodes);

							switch (alm.transition) {
								case 'masonry':
									await displayResults(alm, nodes);

									// Wrap almMasonry in anonymous async/await function
									(async function () {
										await almMasonry(alm, alm.init, alm_is_filtering);
										alm.masonry.init = false;
										triggerWindowResize();

										// Callback: ALM Complete
										if (typeof almComplete === 'function') {
											window.almComplete(alm);
										}
									})().catch(() => {
										console.error('There was an error with ALM Masonry'); //eslint-disable-line no-console
									});
									break;

								default:
									await displayResults(alm, nodes);
									break;
							}

							// Infinite Scroll -> Images Loaded: Run complete callbacks and checks.
							ajax_load_more_imagesLoaded(alm.listing, function () {
								alm.AjaxLoadMore.nested(); // Nested ALM.

								if (alm_is_filtering && alm.addons.filters) {
									if (typeof almFiltersAddonComplete === 'function') {
										window.almFiltersAddonComplete(el); // Callback: Filters Add-on Complete
									}
								}

								if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
									window.almComplete(alm); // Callback: ALM Complete
								}

								// Trigger <script /> tags in templates.
								modules_insertScript.init(alm.last_loaded);

								// ALM Done.
								if (!alm.addons.single_post) {
									if (alm.addons.nextpage) {
										// Nextpage.
										if (alm.localize.post_count + alm.addons.nextpage_startpage >= alm.localize.total_posts) {
											alm.AjaxLoadMore.triggerDone();
										}
									} else {
										if (alm.localize.post_count >= alm.localize.total_posts) {
											alm.AjaxLoadMore.triggerDone();
										}
									}
								}

								alm_is_filtering = false;
							});
							/**
							 * End: Infinite Scroll Results.
							 */
						} else {
							/**
							 * Paging.
							 */
							const { paging_container } = alm.addons;

							if (alm.init) {
								// Paging first run.
								if (paging_container) {
									await displayPagingResults(alm, nodes); // Inject content.

									// Paging -> Images Loaded: Run complete callbacks and checks.
									ajax_load_more_imagesLoaded(paging_container, async function () {
										pagingComplete(alm, alm_is_filtering);
										alm_is_filtering = false;
									});
								}
							} else {
								if (paging_container) {
									await almFadeOut(paging_container, 250);
									await displayPagingResults(alm, nodes); // Inject content.

									// Paging -> Images Loaded: Run complete callbacks and checks.
									ajax_load_more_imagesLoaded(paging_container, async function () {
										await almFadeIn(paging_container, 250);
										paging_container.style.opacity = '';

										pagingComplete(alm, alm_is_filtering);
										alm_is_filtering = false;
									});
								}
							}
							/**
							 * End: Paging.
							 */
						}
					} else {
						/**
						 * No results from Ajax.
						 */
						alm.AjaxLoadMore.noresults();
						alm.AjaxLoadMore.transitionEnd();
					}

					/**
					 * Destroy After
					 */
					if (alm.destroy_after) {
						let currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
						currentPage = alm.addons.preloaded ? currentPage++ : currentPage; // Add 1 for preloaded
						if (parseInt(currentPage) === parseInt(alm.destroy_after)) {
							alm.AjaxLoadMore.destroyed(); // Disable ALM if page = alm.destroy_after value.
						}
					}

					/**
					 * Display Table of Contents
					 */
					tableOfContents(alm, alm.init);

					/**
					 * Set Focus for accessibility.
					 */
					if (alm?.last_loaded?.length) {
						setFocus(alm, alm.last_loaded[0], total, alm_is_filtering);
					}

					// Remove filtering class
					alm.main.classList.remove('alm-is-filtering');

					if (alm.init) {
						// Add loaded class to main container on initial page load.
						alm.main.classList.add('alm-is-loaded');
					}

					// Set init flag
					alm.init = false;
				};

				/**
				 * Function runs when no results are returned.
				 *
				 * @since 5.3.1
				 */
				alm.AjaxLoadMore.noresults = function () {
					if (!alm.addons.paging) {
						// Add .done class, reset btn text
						alm?.button?.classList?.remove('loading');
						alm?.button?.classList?.add('done');
						alm.AjaxLoadMore.resetBtnText();
					}

					// Callback: ALM Complete
					if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
						window.almComplete(alm);
					}

					// Filters Add-on Complete
					if (alm_is_filtering && alm.addons.filters) {
						if (typeof almFiltersAddonComplete === 'function') {
							window.almFiltersAddonComplete(el);
						}
						alm_is_filtering = false;
					}

					// Masonry, clear `alm-listing` height.
					if (alm.transition === 'masonry') {
						alm.content.style.height = 'auto';
					}

					// ALM Done
					alm.AjaxLoadMore.triggerDone();
				};

				/**
				 * Init Paging + Preloaded add-ons.
				 *
				 * @param {string} html Results of Ajax request.
				 * @since 2.11.3
				 */
				alm.AjaxLoadMore.pagingPreloadedInit = function (html = null) {
					alm.AjaxLoadMore.pagingInit(); // Set up paging functionality.

					if (!html) {
						if (typeof almPagingEmpty === 'function') {
							window.almPagingEmpty(alm);
						}
						if (typeof almEmpty === 'function') {
							window.almEmpty(alm);
						}
						if (alm.no_results) {
							noResults(alm.content, alm.no_results);
						}
					}
				};

				/**
				 * Init Paging + Next Page add-ons.
				 *
				 * @since 2.14.0
				 */
				alm.AjaxLoadMore.pagingNextpageInit = function () {
					alm.AjaxLoadMore.pagingInit(); // Set up paging functionality.

					if (typeof almSetNextPageVars === 'function') {
						window.almSetNextPageVars(alm); // Set up Nextpage Vars.
					}
				};

				/**
				 * Paging add-on first to create required containers.
				 *
				 * @since 5.0
				 */
				alm.AjaxLoadMore.pagingInit = function () {
					const { paging_container } = alm.addons; // Get content container.

					if (paging_container) {
						almFadeIn(paging_container, 150); // Fade in paging container.

						// Delay reveal of paging content.
						setTimeout(function () {
							alm.main.classList.remove('alm-loading'); // Remove `alm-loading` class
						}, 150);

						// Delay initial pagination display to avoid positioning issues.
						setTimeout(function () {
							paging_container.style.removeProperty('opacity'); // Remove initial opacity prop.

							if (typeof almFadePageControls === 'function') {
								window.almFadePageControls(alm.btnWrap); // Fade in paging controls.
							}
							if (typeof almPagingSetHeight === 'function') {
								window.almPagingSetHeight(paging_container); // Fade in container height.
							}
						}, 275);
					}
				};

				/**
				 *	Automatically trigger nested ALM instances.
				 *
				 * @since 5.0
				 */
				alm.AjaxLoadMore.nested = function () {
					const nested = alm.listing.querySelectorAll('.ajax-load-more-wrap:not(.alm-is-loaded)'); // Get all new instances
					if (nested) {
						[...nested].forEach(function (element) {
							window.almInit(element);
						});
					}
				};

				/**
				 *  Get the Single Posts post ID via ajax.
				 *
				 *  @since 2.7.4
				 */
				alm.AjaxLoadMore.getSinglePost = async function () {
					if (alm.fetchingPreviousPost) {
						return;
					}
					alm.fetchingPreviousPost = true; // Set loading flag.

					// Create data params.
					const params = {
						action: 'alm_get_single',
						id: alm.addons.single_post_id,
						initial_id: alm.addons.single_post_init_id,
						order: alm.addons.single_post_order,
						taxonomy: alm.addons.single_post_taxonomy,
						excluded_terms: alm.addons.single_post_excluded_terms,
						post_type: alm.post_type,
						init: alm.addons.single_post_init,
					};

					// Send HTTP request via Axios.
					const singlePostData = await lib_axios
						.get(alm_localize.ajaxurl, { params })
						.then(function (response) {
							// Get data from response.
							const { data } = response;

							if (data.has_previous_post) {
								alm.listing.dataset.singlePostId = data.prev_id; // Update single-post-id on instance
								alm.addons.single_post_id = data.prev_id;
								alm.addons.single_post_permalink = data.prev_permalink;
								alm.addons.single_post_title = data.prev_title;
								alm.addons.single_post_slug = data.prev_slug;
								alm.addons.single_post_cache = data.cache;
							} else {
								alm.addons.single_post_cache = false;
								if (!data.has_previous_post) {
									alm.AjaxLoadMore.triggerDone();
								}
							}
							if (typeof window.almSetSinglePost === 'function') {
								window.almSetSinglePost(alm, data.current_id, data.permalink, data.title);
							}
							alm.fetchingPreviousPost = false;
							alm.addons.single_post_init = false;

							return data;
						})
						.catch(function (error) {
							// Error
							alm.AjaxLoadMore.error(error, 'getSinglePost');
							alm.fetchingPreviousPost = false;
						});

					// Send the response.
					return singlePostData;
				};

				if (alm.addons.single_post_id) {
					alm.fetchingPreviousPost = false;
					alm.addons.single_post_init = true;
				}

				/**
				 * Triggers various add-on functions after load complete.
				 *
				 * @param {Object} alm The ALM object.
				 * @since 2.14.0
				 */
				alm.AjaxLoadMore.triggerAddons = function (alm) {
					if (typeof almSetNextPage === 'function' && alm.addons.nextpage) {
						window.almSetNextPage(alm);
					}
					if (typeof almSEO === 'function' && alm.addons.seo) {
						window.almSEO(alm, false);
					}
					if (typeof almWooCommerce === 'function' && alm.addons.woocommerce) {
						window.almWooCommerce(alm);
					}
					if (typeof almElementor === 'function' && alm.addons.elementor) {
						window.almElementor(alm);
					}
				};

				/**
				 * Fires a set of actions and functions when ALM has no other posts to load.
				 *
				 * @since 2.11.3
				 */
				alm.AjaxLoadMore.triggerDone = function () {
					alm.loading = false;
					alm.finished = true;
					placeholder('hide', alm);

					if (!alm.addons.paging) {
						if (alm.button_labels.done) {
							setTimeout(function () {
								alm.button.innerHTML = alm.button_labels.done;
							}, 75);
						}

						alm.button.classList.add('done');
						alm.button.removeAttribute('rel');
						alm.button.disabled = true;
					}

					// almDone
					if (typeof almDone === 'function') {
						// Delay done until animations complete
						setTimeout(function () {
							window.almDone(alm);
						}, alm.speed + 10);
					}
				};

				/**
				 * Fires a set of actions once ALm Previous hits the first page.
				 *
				 * @since 5.5.0
				 */
				alm.AjaxLoadMore.triggerDonePrev = function () {
					alm.loading = false;
					placeholder('hide', alm);

					if (!alm.addons.paging) {
						alm.buttonPrev.classList.add('done');
						alm.buttonPrev.removeAttribute('rel');
						alm.buttonPrev.disabled = true;
					}

					// almDonePrev Callback.
					if (typeof almDonePrev === 'function') {
						// Delay done until animations complete
						setTimeout(function () {
							window.almDonePrev(alm);
						}, alm.speed + 10);
					}
				};

				/**
				 * Resets the loading button text after loading has completed.
				 *
				 * @since 2.8.4
				 */
				alm.AjaxLoadMore.resetBtnText = function () {
					if (alm.button && alm.button_labels.loading) {
						alm.button.innerHTML = alm.button_labels.default;
					}
				};

				/**
				 * Button click handler to load posts.
				 *
				 * @param {Object} e The target button element.
				 * @since 4.2.0
				 */
				alm.AjaxLoadMore.click = function (e) {
					const button = e.currentTarget || e.target;
					alm.rel = 'next';
					if (alm.pause === 'true') {
						alm.pause = false;
						alm.pause_override = false;
						alm.AjaxLoadMore.loadPosts();
					}
					if (!alm.loading && !alm.finished && !button.classList.contains('done')) {
						alm.loading = true;
						alm.page++;
						alm.AjaxLoadMore.loadPosts();
					}
					button.blur(); // Remove button focus
				};

				/**
				 * Button click handler for previous load more.
				 *
				 * @param {Object} e The target button element.
				 * @since 5.5.0
				 */
				alm.AjaxLoadMore.prevClick = function (e) {
					const button = e.currentTarget || e.target;
					e.preventDefault();
					if (!alm.loading && !button.classList.contains('done')) {
						alm.loading = true;
						alm.pagePrev--;
						alm.rel = 'prev';
						alm.AjaxLoadMore.loadPosts();
						button.blur(); // Remove button focus
					}
				};

				/**
				 * Set the Load Previous button to alm object.
				 *
				 * @param {Element} button The button element.
				 * @since 5.5.0
				 */
				alm.AjaxLoadMore.setPreviousButton = function (button) {
					alm.pagePrev = alm.page;
					alm.buttonPrev = button;
				};

				/**
				 * Load More button click event handler.
				 *
				 * @since 1.0.0
				 */
				if (!alm.addons.paging && !alm.fetchingPreviousPost) {
					alm.button.onclick = alm.AjaxLoadMore.click;
				}

				/**
				 * Window resize functions for Paging, Scroll Distance Percentage etc.
				 *
				 * @since 2.1.2
				 */
				if (alm.addons.paging || alm.scroll_distance_perc || alm.scroll_direction === 'horizontal') {
					let resize;
					alm.window.onresize = function () {
						clearTimeout(resize);
						resize = setTimeout(function () {
							if (alm.addons.paging) {
								// Paging
								if (typeof almOnWindowResize === 'function') {
									window.almOnWindowResize(alm);
								}
							}
							if (alm.scroll_distance_perc) {
								alm.scroll_distance = getScrollPercentage(alm);
							}
							if (alm.scroll_direction === 'horizontal') {
								alm.AjaxLoadMore.horizontal();
							}
						}, alm.speed);
					};
				}

				/**
				 * Check to see if element is visible before loading posts.
				 *
				 * @since 2.1.2
				 */
				alm.AjaxLoadMore.isVisible = function () {
					// Check for a width and height to determine visibility
					alm.visible = alm.main.clientWidth > 0 && alm.main.clientHeight > 0 ? true : false;
					return alm.visible;
				};

				/**
				 * Load posts as user scrolls the page.
				 *
				 * @since 1.0
				 */
				alm.AjaxLoadMore.scroll = function () {
					if (alm.timer) {
						clearTimeout(alm.timer);
					}

					alm.timer = setTimeout(function () {
						if (alm.AjaxLoadMore.isVisible() && !alm.fetchingPreviousPost) {
							const trigger = alm.trigger.getBoundingClientRect();
							const btnPos = Math.round(trigger.top - alm.window.innerHeight) + alm.scroll_distance;
							let scrollTrigger = btnPos <= 0 ? true : false;

							// Scroll Container
							if (alm.window !== window) {
								const scrollHeight = alm.main.offsetHeight; // ALM height
								const scrollWidth = alm.main.offsetWidth; // ALM Width
								let scrollPosition = '';
								if (alm.scroll_direction === 'horizontal') {
									// Left/Right
									alm.AjaxLoadMore.horizontal();
									scrollPosition = Math.round(alm.window.scrollLeft + alm.window.offsetWidth - alm.scroll_distance); // How far user has scrolled
									scrollTrigger = scrollWidth <= scrollPosition ? true : false;
								} else {
									// Up/Down
									scrollPosition = Math.round(alm.window.scrollTop + alm.window.offsetHeight - alm.scroll_distance); // How far user has scrolled
									scrollTrigger = scrollHeight <= scrollPosition ? true : false;
								}
							}

							// If Pause && Pause Override
							if (
								!alm.loading &&
								!alm.finished &&
								scrollTrigger &&
								alm.page < alm.max_pages - 1 &&
								alm.proceed &&
								alm.pause === 'true' &&
								alm.pause_override === 'true'
							) {
								alm.button.click();
							}

							// Standard Scroll
							else {
								if (!alm.loading && !alm.finished && scrollTrigger && alm.page < alm.max_pages - 1 && alm.proceed && alm.pause !== 'true') {
									alm.button.click();
								}
							}
						}
					}, 25);
				};

				/**
				 * Add scroll eventlisteners, only when needed.
				 *
				 * @since 5.2.0
				 */
				alm.AjaxLoadMore.scrollSetup = function () {
					if (alm.scroll && !alm.addons.paging) {
						if (alm.scroll_container) {
							// Scroll Container
							alm.window = document.querySelector(alm.scroll_container) ? document.querySelector(alm.scroll_container) : alm.window;
							setTimeout(function () {
								// Delay to allow for ALM container to resize on load.
								alm.AjaxLoadMore.horizontal();
							}, 500);
						}
						alm.window.addEventListener('scroll', alm.AjaxLoadMore.scroll); // Scroll
						alm.window.addEventListener('touchstart', alm.AjaxLoadMore.scroll); // Touch Devices
						alm.window.addEventListener('wheel', function (e) {
							// Mousewheel
							const direction = Math.sign(e.deltaY);
							if (direction > 0) {
								alm.AjaxLoadMore.scroll();
							}
						});
						alm.window.addEventListener('keyup', function (e) {
							const { key } = e;
							switch (key) {
								case 'End':
								case 'PageDown':
									alm.AjaxLoadMore.scroll();
									break;
							}
						});
					}
				};

				/**
				 * Configure horizontal scroll settings.
				 *
				 * @since 5.3.6
				 */
				alm.AjaxLoadMore.horizontal = function () {
					if (alm.scroll_direction === 'horizontal') {
						alm.main.style.width = `${alm.listing.offsetWidth}px`;
					}
				};

				/**
				 * Destroy Ajax Load More functionality.
				 *
				 * @since 3.4.2
				 */
				alm.AjaxLoadMore.destroyed = function () {
					alm.disable_ajax = true;
					if (!alm.addons.paging) {
						alm.button.style.display = 'none';
						alm.AjaxLoadMore.triggerDone();
						if (typeof almDestroyed === 'function') {
							window.almDestroyed(alm);
						}
					}
				};

				/**
				 * Set variables after loading transition completes.
				 *
				 * @since 3.5
				 */
				alm.AjaxLoadMore.transitionEnd = function () {
					setTimeout(function () {
						alm.AjaxLoadMore.resetBtnText();
						alm.main.classList.remove('alm-loading');

						// Loading buttons.
						if (alm.rel === 'prev') {
							alm?.buttonPrev?.classList?.remove('loading');
						} else {
							alm?.button?.classList?.remove('loading');
						}
						alm.AjaxLoadMore.triggerAddons(alm);

						if (!alm.addons.paging) {
							setTimeout(function () {
								alm.loading = false; // Delay to prevent loading to fast
							}, alm.speed * 2);
						}
					}, 25);

					// Hide loading placeholder.
					placeholder('hide', alm);
				};

				/**
				 * Set individual localized variable.
				 *
				 * @param {string} name
				 * @param {string} value
				 * @since 4.1
				 */
				alm.AjaxLoadMore.setLocalizedVar = function (name = '', value = '') {
					if (alm?.localize && name !== '' && value !== '') {
						alm.localize[name] = value; // Set ALM localize var.
						window[alm.master_id + '_vars'][name] = value; // Update vars.
					}
				};

				/**
				 * Init Ajax load More functionality and add-ons.
				 *
				 * @since 2.0
				 */
				alm.AjaxLoadMore.init = async function () {
					// Preloaded and Destroy After is 1.
					if (alm.addons.preloaded && alm.destroy_after === 1) {
						alm.AjaxLoadMore.destroyed();
					}

					// Paging Add-on.
					if (alm.addons.paging) {
						if (alm.addons.preloaded) {
							// Preloaded.
							alm.AjaxLoadMore.ajax('totalposts');
						} else if (alm.addons.nextpage) {
							// Next Page.
							alm.AjaxLoadMore.ajax('totalpages');
						} else {
							// Standard.
							alm.AjaxLoadMore.loadPosts();
						}
					}

					// Not Paging & not Single Post.
					if (!alm.addons.paging && !alm.addons.single_post) {
						if (alm.disable_ajax) {
							alm.finished = true;
							alm.button.classList.add('done');
						} else {
							// Set button label.
							alm.button.innerHTML = alm.button_labels.default;

							// Check pause.
							if (alm.pause === 'true') {
								alm.loading = false;
							} else {
								alm.AjaxLoadMore.loadPosts();
							}
						}
					}

					// Single Post Add-on.
					if (alm.addons.single_post) {
						// Add delay for setup and scripts to load.
						setTimeout(async function () {
							await alm.AjaxLoadMore.getSinglePost(); // Set next post on load

							// Trigger done if custom query and no posts to render
							if (alm.addons.single_post_query && alm.addons.single_post_order === '') {
								alm.AjaxLoadMore.triggerDone();
							}
							alm.loading = false;
							tableOfContents(alm, true, true);
						}, 250);
					}

					// Preloaded + SEO && !Paging.
					if (alm.addons.preloaded && alm.addons.seo && !alm.addons.paging) {
						// Add delay for setup and scripts to load.
						setTimeout(function () {
							if (typeof almSEO === 'function' && alm.start_page < 1) {
								window.almSEO(alm, true);
							}
						}, 200);
					}

					// Preloaded && !Paging.
					if (alm.addons.preloaded && !alm.addons.paging) {
						// Add delay for setup and scripts to load.
						setTimeout(function () {
							if (alm.addons.preloaded_total_posts <= alm.addons.preloaded_amount) {
								alm.AjaxLoadMore.triggerDone();
							}
							// almEmpty callback.
							if (alm.addons.preloaded_total_posts === 0) {
								if (typeof almEmpty === 'function') {
									window.almEmpty(alm);
								}
								if (alm.no_results) {
									noResults(alm.content, alm.no_results);
								}
							}
						}, alm.speed);
					}

					// Preloaded Add-on ONLY.
					if (alm.addons.preloaded) {
						if (alm.resultsText) {
							almInitResultsText(alm, 'preloaded');
						}
						tableOfContents(alm, alm.init, true);
					}

					// Next Page Add-on.
					if (alm.addons.nextpage) {
						// Check that posts remain on load
						if (alm.listing.querySelector('.alm-nextpage') && !alm.addons.paging) {
							const nextpage_pages = alm.listing.querySelectorAll('.alm-nextpage'); // All Next Page Items.
							if (nextpage_pages) {
								const nextpage_first = nextpage_pages[0];
								const nextpage_total = nextpage_first.dataset.totalPosts ? parseInt(nextpage_first.dataset.totalPosts) : alm?.localize?.total_posts;

								// Disable if last page loaded
								if (nextpage_pages.length === nextpage_total || parseInt(nextpage_first.dataset.id) === nextpage_total) {
									alm.AjaxLoadMore.triggerDone();
								}
							}
						}
						if (alm.resultsText) {
							almInitResultsText(alm, 'nextpage');
						}
						tableOfContents(alm, alm.init, true);
					}

					// WooCommerce Add-on.
					if (alm.addons.woocommerce) {
						wooInit(alm);

						if (alm.addons.woocommerce_settings.paged >= parseInt(alm.addons.woocommerce_settings.pages)) {
							alm.AjaxLoadMore.triggerDone(); // Done if `paged is less than `pages`.
						}
					}

					// Elementor Add-on.
					if (alm.addons.elementor && alm.addons.elementor_type && alm.addons.elementor_type === 'posts') {
						elementorInit(alm);

						if (!alm.addons.elementor_next_page) {
							alm.AjaxLoadMore.triggerDone(); // Done if `elementor_next_page` is false.
						}
					}

					// Window Load.
					alm.window.addEventListener('load', function () {
						// Masonry & Preloaded.
						if (alm.transition === 'masonry' && alm.addons.preloaded) {
							// Wrap almMasonry in anonymous async/await function
							(async function () {
								await almMasonry(alm, true, false);
								alm.masonry.init = false;
							})().catch(() => {
								console.error('There was an error with ALM Masonry');
							});
						}

						//  Filters, Facets & Preloaded Facets
						if (alm.addons.preloaded && alm.addons.filters && alm.facets) {
							if (typeof almFiltersFacets === 'function') {
								const facets = alm?.localize?.facets;
								if (facets) {
									window.almFiltersFacets(facets);
								}
							}
						}

						// Window Load Callback.
						if (typeof almOnLoad === 'function') {
							window.almOnLoad(alm); // eslint-disable-line
						}
					});

					setPreloadedParams(alm); // Set preloaded params.
				};

				/**
				 * Handle error messages.
				 *
				 * @param {string} error    The error message.
				 * @param {string} location The location the error occured.
				 * @since 2.6.0
				 */
				alm.AjaxLoadMore.error = function (error, location = null) {
					alm.loading = false;
					if (!alm.addons.paging) {
						alm.button.classList.remove('loading');
						alm.AjaxLoadMore.resetBtnText();
					}
					console.warn('Error: ', error);

					if (error.response) {
						// The request was made and the server responded with a status code that falls out of the range of 2xx.
						console.error('Error Msg: ', error.message);
					} else if (error.request) {
						// The request was made but no response was received.
						console.error(error.request);
					} else {
						// Something happened in setting up the request that triggered an Error.
						console.error('Error Msg: ', error.message);
					}

					if (location) {
						console.error('ALM Error started in ' + location);
					}
					if (error.config) {
						console.error('ALM Error Debug: ', error.config);
					}
				};

				/**
				 * Update Current Page.
				 * Note: Callback function triggered from Paging add-on.
				 *
				 * @param {number} current Current page number.
				 * @param {Object} obj     Optional object (Deprecated).
				 * @param {Object} alm     The ALM object.
				 * @since 2.7.0
				 */
				window.almUpdateCurrentPage = function (current, obj, alm) {
					// eslint-disable-line
					alm.page = current;
					alm.page = alm.addons.nextpage && !alm.addons.paging ? alm.page - 1 : alm.page; // Next Page add-on

					const target = alm.listing;
					const data = target?.innerHTML; // Get content

					if (alm.addons.paging_init && alm.addons.preloaded) {
						// Paging + Preloaded Firstrun.
						alm.addons.preloaded_amount = 0; // Reset preloaded_amount param.
						alm.AjaxLoadMore.pagingPreloadedInit(data);

						alm.addons.paging_init = false;
						alm.init = false;
					} else if (alm.addons.paging_init && alm.addons.nextpage) {
						// Paging + Next Page on firstrun.
						alm.AjaxLoadMore.pagingNextpageInit();

						alm.addons.paging_init = false;
						alm.init = false;
					} else {
						// Standard Paging
						alm.AjaxLoadMore.loadPosts();
					}
				};

				/**
				 * Get the parent ALM container.
				 *
				 * @return {HTMLElement} The ALM listing container.
				 * @since 2.7.0
				 */
				window.almGetParentContainer = function () {
					return alm?.listing;
				};

				/**
				 * Returns the current ALM obj.
				 *
				 * @param {string} obj The ALM object to return.
				 * @return {Object}    The ALM object.
				 * @since 2.7.0
				 */
				window.almGetObj = function (obj = '') {
					if (obj) {
						return alm[obj]; // Return specific param.
					}
					return alm; // Return the entire alm object
				};

				/**
				 * Trigger ajaxloadmore from any element on page.
				 *
				 * @since 2.12.0
				 */
				window.almTriggerClick = function () {
					alm.button.click();
				};

				// Delay to prevent immediate loading of posts on initial page load via scroll.
				setTimeout(function () {
					alm.proceed = true;
					alm.AjaxLoadMore.scrollSetup();
				}, 500);

				// Init Ajax Load More
				alm.AjaxLoadMore.init();
			};

			// End ajaxloadmore

			/**
			 * Initiate instance of Ajax load More
			 *
			 * @param {HTMLElement} el The ALM element.
			 * @param {number}      id The ALM instance ID.
			 * @since 5.0
			 */
			window.almInit = function (el, id = 0) {
				new ajaxloadmore(el, id);
			};

			/**
			 * Initiate Ajax load More if div is present on screen
			 *
			 * @since 2.1.2
			 */
			const alm_instances = document.querySelectorAll('.ajax-load-more-wrap');
			if (alm_instances.length) {
				[...alm_instances].forEach((alm, index) => {
					new ajaxloadmore(alm, index);
				});
			}
		})();

		/**
		 * Filter an Ajax Load More instance.
		 *
		 * @param {string} transition The transition type.
		 * @param {string} speed      The speed of the filter transition.
		 * @param {Object} data       Query data as an object.
		 * @since 5.0
		 */
		const filter = function (transition = 'fade', speed = '200', data = '') {
			if (!transition || !speed || !data) {
				return false;
			}
			alm_is_filtering = true;
			almFilter(transition, speed, data, 'filter');
		};

		/**
		 * Reset an Ajax Load More instance.
		 *
		 * @since 5.3.8
		 * @param {Object} props The ALM props as an object.
		 */
		const ajax_load_more_reset = function (props = {}) {
			let data = {};
			alm_is_filtering = true;

			if (props && props.target) {
				data = {
					target,
				};
			}

			if (props && props.type === 'woocommerce') {
				// WooCommerce
				(async function () {
					const instance = document.querySelector('.ajax-load-more-wrap .alm-listing[data-woo="true"]'); // Get ALM instance
					const settings = await wooReset(); // Get WooCommerce `settings` via Ajax
					if (settings) {
						instance.dataset.wooSettings = settings; // Update data atts
						almFilter('fade', '100', data, 'filter');
					}
				})().catch(() => {
					console.warn('Ajax Load More: There was an issue resetting the Ajax Load More instance.');
				});
			} else {
				// Standard ALM
				almFilter('fade', '200', data, 'filter');
			}
		};

		/**
		 * Get the total post count in the current query by ALM instance ID.
		 * Note: Uses localized ALM variables.
		 *
		 * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php
		 * @param {string} id An optional Ajax Load More ID.
		 * @return {number}   The results from the localized variable.
		 */
		const ajax_load_more_getPostCount = function (id = '') {
			return getTotals('post_count', id);
		};

		/**
		 * Get the total number of posts by ALM instance ID.
		 * Note: Uses localized ALM variables.
		 *
		 * @param {string} id An optional Ajax Load More ID.
		 * @return {number}   The results from the localized variable.
		 */
		const getTotalPosts = function (id = '') {
			return getTotals('total_posts', id);
		};

		/**
		 * Get the total posts remaining in the current query by ALM instance ID.
		 * Note: Uses localized ALM variables.
		 *
		 * @see https://github.com/dcooney/wordpress-ajax-load-more/blob/main/core/classes/class-alm-localize.php
		 * @param {string} id An optional Ajax Load More ID.
		 * @return {number}   The total remaining posts.
		 */
		const getTotalRemaining = function (id = '') {
			return getTotals('remaining', id);
		};

		/**
		 * Track Page Views and Analytics
		 *
		 * @since 5.0
		 * @param {string} type The add-on type that is triggering the analytics.
		 */
		const analytics = function (type = '') {
			const { pathname = '', search = '' } = window.location;

			/**
			 * ALM Callback Function (URL Change)
			 *
			 * @see https://connekthq.com/plugins/ajax-load-more/docs/callback-functions/#url-update
			 */
			if (typeof almUrlUpdate === 'function') {
				window.almUrlUpdate(pathname + search, type);
			}

			/**
			 * ALM Callback Function
			 */
			if (typeof almAnalytics === 'function') {
				window.almAnalytics(pathname + search, type);
			}
		};

		/**
		 * Trigger Ajax Load More from other events.
		 *
		 * @since 5.0
		 * @param {Element} el
		 */
		const start = function (el) {
			if (!el) {
				return false;
			}
			window.almInit(el);
		};

		/**
		 * Scroll window to position (global function).
		 *
		 * @since 5.0
		 * @param {string} position The position to scroll.
		 */
		const almScroll = function (position) {
			if (!position) {
				return false;
			}
			window.scrollTo({
				top: position,
				behavior: 'smooth',
			});
		};

		/**
		 * Get the current top/left coordinates of an element relative to the document.
		 *
		 * @since 5.0
		 * @param {HTMLElement} el The HTML element.
		 * @return {Object}        The top/left coordinates.
		 */
		const getOffset = function (el = null) {
			if (!el) {
				return false;
			}
			const rect = el.getBoundingClientRect();
			const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
		};

		/**
		 * Trigger a click event to load Ajax Load More content.
		 *
		 * @param {string} id The Ajax Load More ID.
		 */
		const click = function (id = '') {
			let alm = document.querySelector('.ajax-load-more-wrap');
			let button = '';
			if (!id && alm) {
				// Default ALM element.
				button = alm.querySelector('button.alm-load-more-btn');
				if (button) {
					button.click();
				}
			} else {
				// Ajax Load More by ID.
				alm = document.querySelector(`.ajax-load-more-wrap[data-id="${id}"]`);
				if (alm) {
					button = alm.querySelector('button.alm-load-more-btn');
					if (button) {
						button.click();
					}
				}
			}
		};
	})();
	ajaxloadmore = __webpack_exports__;
	/******/
})();
