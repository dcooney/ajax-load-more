var ajaxloadmore;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 924:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(210);

var callBind = __webpack_require__(559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(612);
var GetIntrinsic = __webpack_require__(210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {
	        crypto = __webpack_require__.g.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(480);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(249));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ 334:
/***/ (function() {

// focus - focusOptions - preventScroll polyfill
(function() {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    typeof HTMLElement === "undefined"
  ) {
    return;
  }

  var supportsPreventScrollOption = false;
  try {
    var focusElem = document.createElement("div");
    focusElem.addEventListener(
      "focus",
      function(event) {
        event.preventDefault();
        event.stopPropagation();
      },
      true
    );
    focusElem.focus(
      Object.defineProperty({}, "preventScroll", {
        get: function() {
          // Edge v18 gives a false positive for supporting inputs
          if (
            navigator &&
            typeof navigator.userAgent !== 'undefined' &&
            navigator.userAgent &&
            navigator.userAgent.match(/Edge\/1[7-8]/)) {
              return supportsPreventScrollOption = false
          }

          supportsPreventScrollOption = true;
        }
      })
    );
  } catch (e) {}

  if (
    HTMLElement.prototype.nativeFocus === undefined &&
    !supportsPreventScrollOption
  ) {
    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;

    var calcScrollableElements = function(element) {
      var parent = element.parentNode;
      var scrollableElements = [];
      var rootScrollingElement =
        document.scrollingElement || document.documentElement;

      while (parent && parent !== rootScrollingElement) {
        if (
          parent.offsetHeight < parent.scrollHeight ||
          parent.offsetWidth < parent.scrollWidth
        ) {
          scrollableElements.push([
            parent,
            parent.scrollTop,
            parent.scrollLeft
          ]);
        }
        parent = parent.parentNode;
      }
      parent = rootScrollingElement;
      scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);

      return scrollableElements;
    };

    var restoreScrollPosition = function(scrollableElements) {
      for (var i = 0; i < scrollableElements.length; i++) {
        scrollableElements[i][0].scrollTop = scrollableElements[i][1];
        scrollableElements[i][0].scrollLeft = scrollableElements[i][2];
      }
      scrollableElements = [];
    };

    var patchedFocus = function(args) {
      if (args && args.preventScroll) {
        var evScrollableElements = calcScrollableElements(this);
        if (typeof setTimeout === 'function') {
          var thisElem = this;
          setTimeout(function () {
            thisElem.nativeFocus();
            restoreScrollPosition(evScrollableElements);
          }, 0);
        } else {
          this.nativeFocus();
          restoreScrollPosition(evScrollableElements);
        }
      }
      else {
        this.nativeFocus();
      }
    };

    HTMLElement.prototype.focus = patchedFocus;
  }
})();


/***/ }),

/***/ 648:
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(648);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 210:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(405)();
var hasProto = __webpack_require__(185)();

var getProto = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(612);
var hasOwn = __webpack_require__(642);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 185:
/***/ (function(module) {

"use strict";


var test = {
	foo: {}
};

var $Object = Object;

module.exports = function hasProto() {
	return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
};


/***/ }),

/***/ 405:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(419);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 419:
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 642:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(612);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(158)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ 789:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 631:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = __webpack_require__(654);
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 798:
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 129:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(261);
var parse = __webpack_require__(235);
var formats = __webpack_require__(798);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(769);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };

    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(478);
var utils = __webpack_require__(769);
var formats = __webpack_require__(798);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 769:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(798);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(210);
var callBound = __webpack_require__(924);
var inspect = __webpack_require__(631);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ 379:
/***/ (function(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ (function(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 503:
/***/ (function() {

// Object.entries
if (!Object.entries) {
	Object.entries = function (obj) {
		var ownProps = Object.keys(obj),
			i = ownProps.length,
			resArray = new Array(i); // preallocate the Array
		while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

		return resArray;
	};
}

// isArray
if (typeof Array.isArray === 'undefined') {
	Array.isArray = function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	};
}

// Array.from
if (!Array.from) {
	Array.from = (function () {
		var toStr = Object.prototype.toString;
		var isCallable = function (fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function (value) {
			var number = Number(value);
			if (isNaN(number)) {
				return 0;
			}
			if (number === 0 || !isFinite(number)) {
				return number;
			}
			return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function (value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};

		// The length property of the from method is 1.
		return function from(arrayLike /*, mapFn, thisArg */) {
			// 1. Let C be the this value.
			var C = this;

			// 2. Let items be ToObject(arrayLike).
			var items = Object(arrayLike);

			// 3. ReturnIfAbrupt(items).
			if (arrayLike == null) {
				throw new TypeError('Array.from requires an array-like object - not null or undefined');
			}

			// 4. If mapfn is undefined, then let mapping be false.
			var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
			var T;
			if (typeof mapFn !== 'undefined') {
				// 5. else
				// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
				if (!isCallable(mapFn)) {
					throw new TypeError('Array.from: when provided, the second argument must be a function');
				}

				// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
				if (arguments.length > 2) {
					T = arguments[2];
				}
			}

			// 10. Let lenValue be Get(items, "length").
			// 11. Let len be ToLength(lenValue).
			var len = toLength(items.length);

			// 13. If IsConstructor(C) is true, then
			// 13. a. Let A be the result of calling the [[Construct]] internal method
			// of C with an argument list containing the single item len.
			// 14. a. Else, Let A be ArrayCreate(len).
			var A = isCallable(C) ? Object(new C(len)) : new Array(len);

			// 16. Let k be 0.
			var k = 0;
			// 17. Repeat, while k < len… (also steps a - h)
			var kValue;
			while (k < len) {
				kValue = items[k];
				if (mapFn) {
					A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					A[k] = kValue;
				}
				k += 1;
			}
			// 18. Let putStatus be Put(A, "length", len, true).
			A.length = len;
			// 20. Return A.
			return A;
		};
	})();
}

// Nodelist
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// removeChild
// https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('remove')) {
			return;
		}
		Object.defineProperty(item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				if (this.parentNode !== null) this.parentNode.removeChild(this);
			},
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


/***/ }),

/***/ 793:
/***/ (function() {

/**
 * Add dataset support to elements
 * No globals, no overriding prototype with non-standard methods,
 *   handles CamelCase properly, attempts to use standard
 *   Object.defineProperty() (and Function bind()) methods,
 *   falls back to native implementation when existing
 * Inspired by http://code.eligrey.com/html5/dataset/
 *   (via https://github.com/adalgiso/html5-dataset/blob/master/html5-dataset.js )
 * Depends on Function.bind and Object.defineProperty/Object.getOwnPropertyDescriptor (polyfills below)
 * All code below is Licensed under the X11/MIT License
 */
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		'use strict';
		if (typeof this !== 'function') {
			// closest thing possible to the ECMAScript 5 internal IsCallable function
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			FNOP = function () {},
			fBound = function () {
				return fToBind.apply(this instanceof FNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
			};

		FNOP.prototype = this.prototype;
		fBound.prototype = new FNOP();

		return fBound;
	};
}

/*
 * Xccessors Standard: Cross-browser ECMAScript 5 accessors
 * http://purl.eligrey.com/github/Xccessors
 *
 * 2010-06-21
 *
 * By Eli Grey, http://eligrey.com
 *
 * A shim that partially implements Object.defineProperty,
 * Object.getOwnPropertyDescriptor, and Object.defineProperties in browsers that have
 * legacy __(define|lookup)[GS]etter__ support.
 *
 * Licensed under the X11/MIT License
 *   See LICENSE.md
 */

(function () {
	'use strict';
	var ObjectProto = Object.prototype,
		defineGetter = ObjectProto.__defineGetter__,
		defineSetter = ObjectProto.__defineSetter__,
		lookupGetter = ObjectProto.__lookupGetter__,
		lookupSetter = ObjectProto.__lookupSetter__,
		hasOwnProp = ObjectProto.hasOwnProperty;

	if (defineGetter && defineSetter && lookupGetter && lookupSetter) {
		if (!Object.defineProperty) {
			Object.defineProperty = function (obj, prop, descriptor) {
				if (arguments.length < 3) {
					// all arguments required
					throw new TypeError('Arguments not optional');
				}

				prop += ''; // convert prop to string

				if (hasOwnProp.call(descriptor, 'value')) {
					if (!lookupGetter.call(obj, prop) && !lookupSetter.call(obj, prop)) {
						// data property defined and no pre-existing accessors
						obj[prop] = descriptor.value;
					}

					if (hasOwnProp.call(descriptor, 'get') || hasOwnProp.call(descriptor, 'set')) {
						// descriptor has a value prop but accessor already exists
						throw new TypeError('Cannot specify an accessor and a value');
					}
				}

				// can't switch off these features in ECMAScript 3
				// so throw a TypeError if any are false
				if (!(descriptor.writable && descriptor.enumerable && descriptor.configurable)) {
					throw new TypeError('This implementation of Object.defineProperty does not support' + ' false for configurable, enumerable, or writable.');
				}

				if (descriptor.get) {
					defineGetter.call(obj, prop, descriptor.get);
				}
				if (descriptor.set) {
					defineSetter.call(obj, prop, descriptor.set);
				}

				return obj;
			};
		}

		if (!Object.getOwnPropertyDescriptor) {
			Object.getOwnPropertyDescriptor = function (obj, prop) {
				if (arguments.length < 2) {
					// all arguments required
					throw new TypeError('Arguments not optional.');
				}

				prop += ''; // convert prop to string

				var descriptor = {
						configurable: true,
						enumerable: true,
						writable: true,
					},
					getter = lookupGetter.call(obj, prop),
					setter = lookupSetter.call(obj, prop);

				if (!hasOwnProp.call(obj, prop)) {
					// property doesn't exist or is inherited
					return descriptor;
				}
				if (!getter && !setter) {
					// not an accessor so return prop
					descriptor.value = obj[prop];
					return descriptor;
				}

				// there is an accessor, remove descriptor.writable;
				// populate descriptor.get and descriptor.set (IE's behavior)
				delete descriptor.writable;
				descriptor.get = descriptor.set = undefined;

				if (getter) {
					descriptor.get = getter;
				}
				if (setter) {
					descriptor.set = setter;
				}

				return descriptor;
			};
		}

		if (!Object.defineProperties) {
			Object.defineProperties = function (obj, props) {
				var prop;
				for (prop in props) {
					if (hasOwnProp.call(props, prop)) {
						Object.defineProperty(obj, prop, props[prop]);
					}
				}
			};
		}
	}
})();

// Begin dataset code

if (
	!document.documentElement.dataset &&
	// FF is empty while IE gives empty object
	(!Object.getOwnPropertyDescriptor(Element.prototype, 'dataset') || !Object.getOwnPropertyDescriptor(Element.prototype, 'dataset').get)
) {
	var propDescriptor = {
		enumerable: true,
		get: function () {
			'use strict';
			var i,
				that = this,
				HTML5_DOMStringMap,
				attrVal,
				attrName,
				propName,
				attribute,
				attributes = this.attributes,
				attsLength = attributes.length,
				toUpperCase = function (n0) {
					return n0.charAt(1).toUpperCase();
				},
				getter = function () {
					return this;
				},
				setter = function (attrName, value) {
					return typeof value !== 'undefined' ? this.setAttribute(attrName, value) : this.removeAttribute(attrName);
				};
			try {
				// Simulate DOMStringMap w/accessor support
				// Test setting accessor on normal object
				({}).__defineGetter__('test', function () {});
				HTML5_DOMStringMap = {};
			} catch (e1) {
				// Use a DOM object for IE8
				HTML5_DOMStringMap = document.createElement('div');
			}
			for (i = 0; i < attsLength; i++) {
				attribute = attributes[i];
				// Fix: This test really should allow any XML Name without
				//         colons (and non-uppercase for XHTML)
				if (attribute && attribute.name && /^data-\w[\w\-]*$/.test(attribute.name)) {
					attrVal = attribute.value;
					attrName = attribute.name;
					// Change to CamelCase
					propName = attrName.substr(5).replace(/-./g, toUpperCase);
					try {
						Object.defineProperty(HTML5_DOMStringMap, propName, {
							enumerable: this.enumerable,
							get: getter.bind(attrVal || ''),
							set: setter.bind(that, attrName),
						});
					} catch (e2) {
						// if accessors are not working
						HTML5_DOMStringMap[propName] = attrVal;
					}
				}
			}
			return HTML5_DOMStringMap;
		},
	};
	try {
		// FF enumerates over element's dataset, but not
		//   Element.prototype.dataset; IE9 iterates over both
		Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
	} catch (e) {
		propDescriptor.enumerable = false; // IE8 does not allow setting to true
		Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
	}
}


/***/ }),

/***/ 480:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 654:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  almScroll: function() { return /* binding */ almScroll; },
  analytics: function() { return /* binding */ analytics; },
  click: function() { return /* binding */ click; },
  filter: function() { return /* binding */ filter; },
  getOffset: function() { return /* binding */ getOffset; },
  getPostCount: function() { return /* binding */ getPostCount; },
  getTotalPosts: function() { return /* binding */ getTotalPosts; },
  getTotalRemaining: function() { return /* binding */ getTotalRemaining; },
  reset: function() { return /* binding */ ajax_load_more_reset; },
  start: function() { return /* binding */ start; }
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

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
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
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
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
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
const isBoolean = thing => thing === true || thing === false;

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
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

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
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

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
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

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
function forEach(obj, fn, {allOwnKeys = false} = {}) {
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
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
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
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

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
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

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
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

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
}

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
}


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
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
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
}

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
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

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
}

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
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

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

      if(!('toJSON' in source)) {
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
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ var utils = ({
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
  isThenable
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




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
    this.stack = (new Error()).stack;
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
      status: this.response && this.response.status ? this.response.status : null
    };
  }
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
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ var core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ var helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




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
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
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
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
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
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
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
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

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

/* harmony default export */ var helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




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
    '%00': '\x00'
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
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ var helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
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
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




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
      runWhen: options ? options.runWhen : null
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

/* harmony default export */ var core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ var defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ var classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ var classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ var classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js




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
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
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


/* harmony default export */ var browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new browser.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




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
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
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

/* harmony default export */ var helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










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

  transformRequest: [function transformRequest(data, headers) {
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

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
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

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
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
  }],

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
    Blob: browser.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ var lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
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
/* harmony default export */ var parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
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
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





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
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
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

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
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
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
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
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
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
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
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
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ var core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






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
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





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
  __CANCEL__: true
});

/* harmony default export */ var cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




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
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ var cookies = (browser.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
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
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


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
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





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
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ var isURLSameOrigin = (browser.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
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
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
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
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


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

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ var helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ var xhr = (isXHRAdapterSupported && function (config) {
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
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

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
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (browser.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

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
      onCanceled = cancel => {
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
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: helpers_null,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ var adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new core_AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









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
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

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
      return utils.merge.call({caseless}, target, source);
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
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.5.0";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





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
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
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

/* harmony default export */ var validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











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
      response: new core_InterceptorManager()
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

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

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
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ var core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




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
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
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
      cancel
    };
  }
}

/* harmony default export */ var cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


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
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
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

/* harmony default export */ var helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js




















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
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

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

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ var lib_axios = (axios);

// EXTERNAL MODULE: ./node_modules/crypto-js/md5.js
var md5 = __webpack_require__(214);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
;// CONCATENATED MODULE: ./src/frontend/js/helpers/api.js

const { rest_api, rest_nonce } = alm_localize;

/*
 * Create a Api object with Axios and configure it for the WordPRess Rest Api.
 *
 */
const api = lib_axios.create({
	baseURL: rest_api,
	headers: {
		'content-type': 'application/json',
		'X-WP-Nonce': rest_nonce,
	},
});

;// CONCATENATED MODULE: ./src/frontend/js/addons/cache.js



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
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/getButtonURL.js
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

	const url = button ? button.dataset.url : '';
	return url ? url : '';
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

	button.dataset.page = page; // Set Page.
	button.dataset.url = url ? url : ''; // Set URL.
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/lazyImages.js
/**
 * Lazy load images helper.
 * When a plugin or 3rd party script has hooked into WP Post Thumbnails to provide a lazy load solution, images will not load via Ajax.
 * This helper provides a fix by grabbing the dataset value and making it the src.
 *
 * @param {Object} alm The Ajax Load More object.
 */
function lazyImages(alm) {
	if (alm?.lazy_images) {
		// Set container based on reveal div.
		const container = !alm.transition_container ? alm.content : alm.el;
		lazyImagesReplace(container);
	}
}

/**
 * Loop all images in container and replace the src.
 *
 * @param {HTMLElement} container The element HTML.
 */
function lazyImagesReplace(container) {
	const images = container.getElementsByTagName('img');
	if (images) {
		// Loop all images.
		Array.prototype.forEach.call(images, (img) => {
			if (img) {
				replaceSrc(img);
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
	if (img) {
		if (img.dataset.src) {
			img.src = img.dataset.src;
		}
		if (img.dataset.srcset) {
			img.srcset = img.dataset.srcset;
		}
		// Blocksy Pro.
		// @see https://creativethemes.com/blocksy
		if (img.dataset.ctLazy) {
			img.src = img.dataset.ctLazy;
		}
		if (img.dataset.ctLazySet) {
			img.srcset = img.dataset.ctLazySet;
		}
	}
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/srcsetPolyfill.js
/**
 * A srcset polyfill to get Masonry and ImagesLoaded working with Safari and Firefox.
 *
 * @param {Element} container Contaienr HTML element.
 * @param {string}  ua        The user-agent string.
 * @since 5.0.2
 */
function srcsetPolyfill(container = null, ua = '') {
	// Exit if no container
	if (!container) {
		return false;
	}

	// Exit if useragent is Chrome, Safari or Windows
	if ((ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') !== -1) || ua.indexOf('Firefox') > -1 || ua.indexOf('Windows') > -1) {
		return false;
	}

	// Get the images
	const imgs = container.querySelectorAll('img[srcset]:not(.alm-loaded)');

	// Loop images
	for (let i = 0; i < imgs.length; i++) {
		const img = imgs[i];
		img.classList.add('alm-loaded');
		img.outerHTML = img.outerHTML;
	}
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/loadImage.js


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
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/setFocus.js
/**
 * Set user focus to improve accessibility after load events.
 *
 * @param {Object}  alm          ALM object.
 * @param {Element} element      The element to focus on.
 * @param {number}  total        The total number of posts returned.
 * @param {boolean} is_filtering Is this a filtering event.
 * @since 5.1
 */
const setFocus = (alm, element = null, total = 0, is_filtering = false) => {
	if (!alm_localize.a11y_focus) {
		return false;
	}

	// WooCommerce Add-on
	if (alm.addons.woocommerce || alm.addons.elementor) {
		moveFocus(false, false, element, false);
		return;
	}

	// Has Total
	if (alm.transition_container && total > 0) {
		if (alm.addons.paging) {
			// Paging
			moveFocus(alm.init, alm.addons.preloaded, alm.listing, is_filtering);
		} else if (alm.addons.single_post || alm.addons.nextpage) {
			// Single Posts OR Next Page, set `init` to false to trigger focus
			moveFocus(false, alm.addons.preloaded, element, is_filtering);
		} else {
			// Standard ALM
			moveFocus(alm.init, alm.addons.preloaded, element, is_filtering);
		}
	} else if (!alm.transition_container) {
		// Table Layout, no transition container
		moveFocus(alm.init, alm.addons.preloaded, element[0], is_filtering);
	}
};
/* harmony default export */ var modules_setFocus = (setFocus);

/**
 * moveFocus
 * Move user focus to alm-reveal div
 *
 * @param {boolean}     init         Initial run true or false.
 * @param {string}      preloaded    Preloaded true or false.
 * @param {HTMLElement} element      The container HTML element.
 * @param {boolean}     is_filtering Filtering true or false.
 * @since 5.1
 */

const moveFocus = (init = true, preloaded = 'false', element, is_filtering = false) => {
	if (!is_filtering) {
		if ((init || !element) && preloaded !== 'true') {
			return false; // Exit if first run
		}
	}

	// Check if element is an array.
	// If `transition_container="false"`, `element` will be an array.
	/*
   let is_array = Array.isArray(element);
   element = (is_array) ? element[0] : element;
   */

	// Set tabIndex and style on element
	element.setAttribute('tabIndex', '-1');
	element.style.outline = 'none';

	// Get Parent container if `.alm-listing` set parent to element
	const parent = !element.classList.contains('alm-listing') ? element.parentNode : element;

	// Scroll Container
	const scrollContainer = parent.dataset.scrollContainer;

	// If scroll container, move it, not the window.
	if (scrollContainer) {
		const container = document.querySelector(scrollContainer);
		if (container) {
			setTimeout(function () {
				element.focus({ preventScroll: true });
			}, 50);
		}
	}

	// Move window
	else {
		setTimeout(function () {
			element.focus({ preventScroll: true });
		}, 50);
	}
};

;// CONCATENATED MODULE: ./src/frontend/js/modules/loadItems.js



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
						modules_setFocus(alm, focusItem, null, false); // Set the focus.
					}
				}, 25);

				resolve(true);
			}
		}

		loadItem();
	});
}

;// CONCATENATED MODULE: ./src/frontend/js/addons/elementor.js





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
 * Create Elementor params for ALM.
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
function elementorCreateParams(alm) {
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
	return alm;
}

/**
 * Set the required classnames for parsing data and injecting content into the Elementor listing
 *
 * @param {Object} alm  The alm object.
 * @param {string} type The Elementor type.
 * @return {Object}     The modified object.
 */
function setElementorClasses(alm, type = 'posts') {
	// Container Class
	alm.addons.elementor_container_class =
		type === 'woocommerce' ? alm.addons.elementor_settings.woo_container_class : alm.addons.elementor_settings.posts_container_class;

	// Item Class
	alm.addons.elementor_item_class = type === 'woocommerce' ? alm.addons.elementor_settings.woo_item_class : alm.addons.elementor_settings.posts_item_class;

	// Pagination Class
	alm.addons.elementor_pagination_class =
		type === 'woocommerce' ? `.${alm.addons.elementor_settings.woo_pagination_class}` : `.${alm.addons.elementor_settings.posts_pagination_class}`;

	return alm;
}

/**
 * Parse Masonry Settings from Elementor Data atts
 *
 * @param {Object} alm The alm object.
 * @return {Object}    The modified object.
 */
function parseMasonryConfig(alm) {
	if (!alm.addons.elementor_element) {
		return alm; // Exit if not found.
	}

	const target = alm.addons.elementor_element;

	const settings = target.dataset.settings ? JSON.parse(target.dataset.settings) : '';
	if (!settings) {
		return alm; // Exit if not found.
	}

	alm.addons.elementor_masonry = settings.hasOwnProperty('cards_masonry') || settings.hasOwnProperty('classic_masonry');
	if (alm.addons.elementor_masonry) {
		alm.addons.elementor_masonry_columns = parseInt(settings.cards_columns) || parseInt(settings.classic_columns);
		alm.addons.elementor_masonry_columns_mobile = parseInt(settings.cards_columns_mobile) || parseInt(settings.classic_columns_mobile);
		alm.addons.elementor_masonry_columns_tablet = parseInt(settings.cards_columns_tablet) || parseInt(settings.classic_columns_tablet);
		alm.addons.elementor_masonry_gap = parseInt(settings.cards_row_gap.size);
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
	// If container contains the woocommerce elementor class
	const type = target.classList.contains('elementor-wc-products') ? 'woocommerce' : 'posts';
	return type;
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
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/getQueryVariable.js
/**
 * Get a query variable from location querystring
 *
 * @param {string} variable
 * @since 5.3.4
 */
const getQueryVariable = function (variable) {
	const query = window.location.search.substring(1);
	const vars = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) === variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return false;
};
/* harmony default export */ var helpers_getQueryVariable = (getQueryVariable);

;// CONCATENATED MODULE: ./src/frontend/js/addons/filters.js

const FILTERS_CLASSNAME = 'alm-filters';

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
 * @since 5.3.5
 */
function buildFilterURL(alm, querystring = '', page = 0) {
	let qs = querystring;

	if (alm.addons.filters_paging) {
		if (page > 1) {
			// Paged
			if (qs) {
				// If already has `pg` in querystring
				if (helpers_getQueryVariable('pg')) {
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
}

/**
 * Create data attributes for Filters paged results.
 *
 * @param {Object} alm     The ALM object.
 * @param {Array}  element An array of filter elements.
 * @since 5.3.1
 */
function createMasonryFiltersPage(alm, element) {
	if (!alm.addons.filters) {
		return element;
	}

	const querystring = window.location.search;
	let page = alm.page + 1;
	page = alm.addons.preloaded === 'true' ? page + 1 : page;
	element = masonryFiltersAtts(alm, element, querystring, page);

	return element;
}

/**
 * Create data attributes for Filters - used when ?pg=2, ?pg=3 etc are hit on page load
 *
 * @param {Object} alm      The ALM object.
 * @param {Array}  elements An array of filter elements.
 * @since 5.3.1
 */
function createMasonryFiltersPages(alm, elements) {
	if (!alm.addons.filters) {
		return elements;
	}

	let pagenum = 1;
	const page = alm.page;
	const querystring = window.location.search;

	if (alm.addons.filters_startpage > 1) {
		// Create pages
		const posts_per_page = parseInt(alm.posts_per_page);
		const return_data = [];

		// Slice data array into individual pages
		for (let i = 0; i < elements.length; i += posts_per_page) {
			return_data.push(elements.slice(i, posts_per_page + i));
		}

		// Loop new data array
		for (let k = 0; k < return_data.length; k++) {
			const target = k > 0 ? k * posts_per_page : 0;
			pagenum = k + 1;

			if (elements[target]) {
				elements[target] = masonryFiltersAtts(alm, elements[target], querystring, pagenum);
			}
		}
	} else {
		pagenum = page;
		if (elements && elements[0]) {
			elements[0] = masonryFiltersAtts(alm, elements[0], querystring, pagenum);
		}
	}

	return elements;
}

/**
 * Create the attributes (page, url, classes)  for the masonry items.
 *
 * @param {Object}  alm         The ALM object.
 * @param {Element} element     The container element.
 * @param {string}  querystring The current querystring.
 * @param {number}  pagenum     The page number.
 * @return {Element}            Modified HTML element.
 */
function masonryFiltersAtts(alm, element, querystring, pagenum) {
	element.classList.add(FILTERS_CLASSNAME);
	element.dataset.page = pagenum;
	if (pagenum > 1) {
		element.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, pagenum);
	} else {
		let updatedQS = querystring.replace(/(pg=)[^\&]+/, ''); // Remove `pg` from querysting
		updatedQS = updatedQS === '?' ? '' : updatedQS; // Remove empty querysting

		element.dataset.url = alm.canonical_url + updatedQS;
	}

	return element;
}

;// CONCATENATED MODULE: ./src/frontend/js/addons/seo.js
/**
 * Create data attributes for SEO paged results.
 *
 * @param {Object} alm
 * @param {Array}  element
 * @since 5.3.1
 */
function createMasonrySEOPage(alm, element) {
	if (!alm.addons.seo) {
		return element;
	}

	const querystring = window.location.search;
	const seo_class = 'alm-seo';
	let page = alm.page + 1;
	page = alm.addons.preloaded === 'true' ? page + 1 : page;
	element = masonrySEOAtts(alm, element, querystring, seo_class, page);

	return element;
}

/**
 * Create data attributes for SEO -  used when /page/2/, /page/3/ etc are hit on page load.
 *
 * @param {Object} alm
 * @param {Array}  elements
 * @since 5.3.1
 */
function createMasonrySEOPages(alm, elements) {
	if (!alm.addons.seo) {
		return elements;
	}

	let pagenum = 1;
	const page = alm.page;
	const seo_class = 'alm-seo';
	const querystring = window.location.search;

	if (alm.start_page > 1) {
		// Create pages
		const posts_per_page = parseInt(alm.posts_per_page);
		const return_data = [];

		// Slice data array into individual pages
		for (let i = 0; i < elements.length; i += posts_per_page) {
			return_data.push(elements.slice(i, posts_per_page + i));
		}

		// Loop new data array
		for (let k = 0; k < return_data.length; k++) {
			const target = k > 0 ? k * posts_per_page : 0;
			pagenum = k + 1;
			if (elements[target]) {
				elements[target] = masonrySEOAtts(alm, elements[target], querystring, seo_class, pagenum);
			}
		}
	} else {
		pagenum = page;
		elements[0] = masonrySEOAtts(alm, elements[0], querystring, seo_class, pagenum);
	}

	return elements;
}

/**
 * Create the attributes (page, url, classes) for the masonry items.
 *
 * @param {Object} alm
 * @param {Object} element
 * @param {string} querystring
 * @param {string} seo_class
 * @param {number} pagenum
 * @return {HTMLElement} Modified HTML element.
 */
function masonrySEOAtts(alm, element, querystring, seo_class, pagenum) {
	element.classList.add(seo_class);
	element.dataset.page = pagenum;

	if (alm.addons.seo_permalink === 'default') {
		// Default Permalinks
		if (pagenum > 1) {
			element.dataset.url = alm.canonical_url + querystring + '&paged=' + pagenum;
		} else {
			element.dataset.url = alm.canonical_url + querystring;
		}
	} else {
		// Pretty Permalinks
		if (pagenum > 1) {
			element.dataset.url = alm.canonical_url + alm.addons.seo_leading_slash + 'page/' + pagenum + alm.addons.seo_trailing_slash + querystring;
		} else {
			element.dataset.url = alm.canonical_url + querystring;
		}
	}

	return element;
}

/**
 * Create data attributes for SEO -  used when /page/2/, /page/3/ etc are hit on page load.
 *
 * @param {Object}      alm         ALM object.
 * @param {HTMLElement} element     Div element.
 * @param {string}      querystring Current querystring.
 * @param {string}      seo_class   Classname to add to element.
 * @param {number}      pagenum     Current page number.
 * @return {HTMLElement}            Modified HTML element.
 * @since 5.3.1
 */
function createSEOAttributes(alm, element, querystring, seo_class, pagenum) {
	element.setAttribute('class', 'alm-reveal' + seo_class + alm.tcc);
	element.dataset.page = pagenum;

	if (alm.addons.seo_permalink === 'default') {
		// Default Permalinks
		element.dataset.url = pagenum > 1 ? alm.canonical_url + querystring + '&paged=' + pagenum : alm.canonical_url + querystring;
	} else {
		// Pretty Permalinks
		element.dataset.url =
			pagenum > 1
				? alm.canonical_url + alm.addons.seo_leading_slash + 'page/' + pagenum + alm.addons.seo_trailing_slash + querystring
				: alm.canonical_url + querystring;
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
	if (seo_offset === 'true') {
		return parseInt(page) + 1;
	}
	return page;
}

;// CONCATENATED MODULE: ./src/frontend/js/addons/singleposts.js


/**
 * Create the HTML for loading Single Posts.
 *
 * @param {Object} alm        The alm object.
 * @param {Object} response   Query response.
 * @param {string} cache_slug The cache slug.
 * @return {Object}           Results data.
 * @since 5.1.8.1
 */
function singlePostHTML(alm, response, cache_slug) {
	const data = {
		html: '',
		meta: {
			postcount: 0,
			totalposts: 0,
		},
	};

	// Get target element.
	const { single_post_target } = alm.addons;

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
		const customElements = window && window.almSinglePostsCustomElements;
		if (customElements) {
			html.appendChild(singlePostsGetCustomElements(div, customElements));
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
/* harmony default export */ var singleposts = ((/* unused pure expression or super */ null && (singlePostHTML)));

/**
 * Collect custom target elements and append them to the returned HTML.
 *
 * This function is useful to get elements from outside the ALM target and bring them into the returned HTML.
 * Useful for when CSS or JS may be loaded in the <head/> and we need it brought into the HTML for Single Posts.
 *
 * e.g. window.almSinglePostsCustomElements = ['#woocommerce-inline-inline-css', '#wc-block-style-css'];
 *
 * @param {HTMLElement} content        The HTML element.
 * @param {Array}       customElements The elements to search for in content.
 * @return {HTMLElement}               The HTML elements.
 */
function singlePostsGetCustomElements(content = '', customElements = []) {
	// Create container element to hold elements.
	const container = document.createElement('div');
	container.classList.add('alm-custom-elements');

	// Exit if empty.
	if (!content || !customElements) {
		return container;
	}

	// Convert customElements to an Array.
	customElements = !Array.isArray(customElements) ? [customElements] : customElements;

	// Loop Array to extract elements and append to container.
	for (let i = 0; i < customElements.length; i++) {
		const element = content.querySelector(customElements[i]);
		if (element) {
			container.appendChild(element);
		}
	}

	return container;
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/dispatchScrollEvent.js
/**
 * Dispatch a window scroll event.
 *
 * @param {boolean} delay Should this be delayed.
 * @since 5.5
 */
const dispatchScrollEvent = function (delay = true) {
	if (typeof Event === 'function') {
		setTimeout(
			function () {
				window.dispatchEvent(new CustomEvent('scroll'));
			},
			delay ? 150 : 1
		);
	}
};
/* harmony default export */ var helpers_dispatchScrollEvent = (dispatchScrollEvent);

;// CONCATENATED MODULE: ./src/frontend/js/modules/loadPrevious.js
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
}

;// CONCATENATED MODULE: ./src/frontend/js/addons/woocommerce.js








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
		helpers_dispatchScrollEvent(true);
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
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/almAppendChildren.js
const nodeNameArray = ['#text', '#comment'];

/**
 * Loop array of elements and append to target
 *
 * @param {Element} target     Target element to append items
 * @param {Element} array      An array of elements
 * @param {string}  transition The transiton
 * @since 5.0
 */
function almAppendChildren(target = null, array = null, transition = 'fade') {
	if (!target || !array) {
		return false;
	}
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		almAppendChild(target, element, transition);
	}
}

/**
 * Append a child element to a container
 *
 * @param {Element} target     Target element to append items
 * @param {Element} element    The element to append
 * @param {string}  transition The transiton
 * @since 5.0
 */
function almAppendChild(target = null, element = null, transition = 'fade') {
	if (!target || !element) {
		return false;
	}
	// Do not append elements that are not actual element nodes (i.e. #text node)
	// Add item if not in exclude array
	if (nodeNameArray.indexOf(element.nodeName.toLowerCase()) === -1) {
		if (transition === 'masonry') {
			// If Masonry, opacity = zero
			element.style.opacity = 0;
		}
		target.appendChild(element);
	}
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/almDomParser.js
/**
 * Convert a plain text string into an array of HTML nodes.
 *
 * @param {string} html The HTML string
 * @param {string} type The element type.
 * @return {Array}      The HTML nodes as an array.
 * @since 5.0
 */
function almDomParser(html = '', type = 'text/html') {
	if (!html) {
		return '';
	}
	const parser = new DOMParser();
	const data = parser.parseFromString(html, type);
	const results = data ? Array.prototype.slice.call(data.body.childNodes) : data;
	return results;
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/getParameterByName.js
/**
 * Return a query param by name.
 *
 * @param {string} name The query param name.
 * @param {string} url  The URL.
 * @return {string}     The query param value.
 */
const getParameterByName = function (name, url) {
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
};
/* harmony default export */ var helpers_getParameterByName = (getParameterByName);

;// CONCATENATED MODULE: ./src/frontend/js/helpers/getScrollPercentage.js
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
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/getTotals.js
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
	const total_posts = localized.total_posts;
	const post_count = localized.post_count;
	const page = localized.page;
	const pages = localized.pages;

	if (!localized) {
		return null;
	}

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
}

// EXTERNAL MODULE: ./src/frontend/js/helpers/helpers.js
var helpers = __webpack_require__(503);
;// CONCATENATED MODULE: ./src/frontend/js/helpers/queryParams.js


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
	if (addons.comments === 'true') {
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
	if (addons.preloaded === 'true') {
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
	if (alm.theme_repeater) {
		data.theme_repeater = alm.theme_repeater;
	}
	if (alm.addons.users) {
		data.users = getTypeParams(alm, 'users');
		data.action = 'alm_users';
	}

	// Query Data Params

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
}

;// CONCATENATED MODULE: ./src/frontend/js/helpers/stripEmptyNodes.js
/**
 * Remove empty HTML nodes from array of nodes
 * Remove all empty text nodes from SEO and Filters return
 *
 * @param {Array} nodes Array of HTML nodes
 * @return {Array}      The filtered array of HTML nodes
 * @since 5.1.3
 */
const stripEmptyNodes = function (nodes = '') {
	if (!nodes) {
		return false;
	}

	// Exclude these nodeNames from being rendered
	const nodeNameArray = ['#text', '#comment'];

	// Filter data by nodeName
	return nodes.filter((node) => nodeNameArray.indexOf(node.nodeName.toLowerCase()) === -1);
};
/* harmony default export */ var helpers_stripEmptyNodes = (stripEmptyNodes);

;// CONCATENATED MODULE: ./src/frontend/js/helpers/tableWrap.js
/**
 * Wrap `table` containers in tbody elements
 * innerHTML and DOMParser do not work with <tr/> <td/> elements etc.
 *
 * @param {string} html Plain text HTML.
 * @return {Array} Array of HTML elements.
 * @since 5.0
 */
const tableWrap = function (html = null) {
	if (!html) {
		return false;
	}
	const table_reveal = document.createElement('tbody');
	table_reveal.innerHTML = html;

	const table_reveal_array = [table_reveal];
	return table_reveal_array;
};
/* harmony default export */ var helpers_tableWrap = (tableWrap);

;// CONCATENATED MODULE: ./src/frontend/js/modules/almDebug.js
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
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/fade.js
/**
 * Fade element in.
 *
 * @param {HTMLElement} element The HTML element to fade in.
 * @param {number}      speed   The transition speed.
 */
const almFadeIn = (element, speed) => {
	if (speed === 0) {
		element.style.opacity = 1;
		element.style.height = 'auto';
	} else {
		speed = speed / 10;
		let op = 0; // initial opacity
		const timer = setInterval(function () {
			if (op > 0.9) {
				element.style.opacity = 1;
				clearInterval(timer);
			}
			element.style.opacity = op;
			op += 0.1;
		}, speed);
		element.style.height = 'auto';
	}
};

/**
 * Fade element out.
 *
 * @param {HTMLElement} element The HTML element to fade out.
 * @param {number}      speed   The transition speed.
 */
const almFadeOut = (element, speed) => {
	speed = speed / 10;
	element.style.opacity = 0.5;
	const fadeEffect = setInterval(function () {
		if (element.style.opacity < 0.1) {
			clearInterval(fadeEffect);
		} else {
			element.style.opacity -= 0.1;
		}
	}, speed);
};

;// CONCATENATED MODULE: ./src/frontend/js/modules/tableofcontents.js



/**
 * Create a numbered table of contents navigation
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

	if (alm && alm.tableofcontents && alm.transition_container && alm.transition !== 'masonry') {
		const offset = alm.tableofcontents.dataset.offset ? parseInt(alm.tableofcontents.dataset.offset) : 30;
		const startPage = alm.start_page ? parseInt(alm.start_page) : 0;
		const filterStartPage = alm.addons.filters_startpage ? parseInt(alm.addons.filters_startpage) : 0;
		const nextpageStartPage = alm.addons.nextpage_startpage ? parseInt(alm.addons.nextpage_startpage) : 0;
		let page = parseInt(alm.page);
		const preloaded = alm.addons.preloaded === 'true' ? true : false;

		// Exit if Paging or Next Page
		if (alm.addons.paging || alm.addons.nextpage) {
			return false;
		}

		// Init

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

	const button = document.createElement('button');
	button.type = 'button';

	page = parseInt(page) + 1;
	button.innerHTML = getTOCLabel(alm, page);
	button.dataset.page = alm.addons.single_post_target && alm.init ? page - 1 : page;
	alm.tableofcontents.appendChild(button);

	button.addEventListener('click', function () {
		const thePage = this.dataset.page;
		let target = document.querySelector(`.alm-reveal:nth-child(${thePage})`) || document.querySelector(`.alm-nextpage:nth-child(${thePage})`);

		// Single Posts
		if (alm.addons.single_post_target) {
			target = document.querySelector(`.alm-reveal.alm-single-post[data-page="${thePage}"]`);
		}

		if (!target) {
			return false;
		}
		const top = typeof getOffset === 'function' ? getOffset(target).top : target.offsetTop;
		almScroll(top - offset);

		// Set Focus for A11y
		setTimeout(function () {
			modules_setFocus(alm, target, thePage, false);
		}, 1000);
	});
}

/**
 * Get Button Label.
 *
 * @param {Object} alm  The alm object.
 * @param {string} page Current page.
 * @return {string} Label.
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
			const posts = document.querySelectorAll(`.alm-reveal.alm-single-post`);
			if (posts) {
				element = posts[thePage];
			}
		} else {
			element = document.querySelector(`.alm-reveal.alm-single-post[data-page=${page - 1}]`);
		}
		label = element ? element.dataset.title : label;
	}

	// Dynamic function name
	const funcName = `almTOCLabel_${alm.id}`;
	if (typeof window[funcName] === 'function') {
		label = window[funcName](page, label);
	}

	return label;
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/filtering.js



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

			case 'tab':
				element.classList.add('alm-loading');
				const new_element = element.querySelector('.alm-listing');
				element.style.height = new_element.offsetHeight + 'px';
				almFadeOut(new_element, speed);
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
		// Bail early if elements doesn't exist.
		return false;
	}

	// Loop over all .alm-listing divs and clear HTML.
	[...listing].forEach(function (e) {
		e.innerHTML = '';
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

		case 'tab':
			// Update `data-tab-template` attribute
			listing.setAttribute('data-preloaded', 'false');
			listing.setAttribute('data-pause', 'false');
			listing.setAttribute('data-tab-template', data.tabTemplate);

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

		case 'tab':
			// Tabs Complete
			if (typeof almTabsComplete === 'function') {
				// Standard Filtering
				almTabsComplete();
			}
			break;
	}
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/insertScript.js
/**
 * Search nodes for <script/> tags and run scripts.
 * Scripts cannot run with appendChild or innerHTML so this is necessary to function.
 *
 * @since 5.0
 */
const insertScript = {
	init(node) {
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

	isScript(node) {
		return node.tagName === 'SCRIPT';
	},

	clone(node) {
		const script = document.createElement('script');
		script.text = node.innerHTML;
		for (let i = node.attributes.length - 1; i >= 0; i--) {
			script.setAttribute(node.attributes[i].name, node.attributes[i].value);
		}
		return script;
	},
};
/* harmony default export */ var modules_insertScript = (insertScript);

;// CONCATENATED MODULE: ./src/frontend/js/modules/masonry.js








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

	return new Promise((resolve) => {
		const container = alm.listing;
		const html = alm.html;
		const selector = alm.masonry.selector;
		let columnWidth = alm.masonry.columnwidth;
		const animation = alm.masonry.animation;
		let horizontalOrder = alm.masonry.horizontalorder;
		const speed = alm.speed;
		const masonry_init = alm.masonry.init;

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

		// horizontalOrder
		horizontalOrder = horizontalOrder === 'true' ? true : false;

		if (!filtering) {
			// First Run.
			if (masonry_init && init) {
				// Run srcSet polyfill.
				srcsetPolyfill(container, alm.ua);

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
					const alm_masonry_vars = window.alm_masonry_vars;
					if (alm_masonry_vars) {
						Object.keys(alm_masonry_vars).forEach(function (key) {
							// Loop object	to create key:prop
							defaults[key] = alm_masonry_vars[key];
						});
					}

					const data = container.querySelectorAll(selector);

					// Create Filters URL, if required.
					if (alm.addons.filters) {
						createMasonryFiltersPages(alm, Array.prototype.slice.call(data));
					}

					// Create SEO URL, if required.
					if (alm.addons.seo) {
						createMasonrySEOPages(alm, Array.prototype.slice.call(data));
					}

					// Init Masonry, delay to allow time for items to be added to the page.
					setTimeout(function () {
						alm.msnry = new Masonry(container, defaults);
						almFadeIn(container.parentNode, 125); // Fade In
						resolve(true);
					}, 1);
				});
			}

			// Standard / Append content.
			else {
				// Loop all items and create array of node elements
				const data = helpers_stripEmptyNodes(almDomParser(html, 'text/html'));

				if (data) {
					// Append elements listing.
					almAppendChildren(alm.listing, data, 'masonry');

					// Run srcSet polyfill.
					srcsetPolyfill(container, alm.ua);

					// imagesLoaded & append.
					masonry_imagesLoaded(container, function () {
						alm.msnry.appended(data);

						// Set Focus.
						modules_setFocus(alm, data, data.length, false);

						// Create Filters URL, if required.
						if (alm.addons.filters) {
							createMasonryFiltersPage(alm, data[0]);
						}

						// Create SEO URL, if required.
						if (alm.addons.seo) {
							createMasonrySEOPage(alm, data[0]);
						}

						resolve(true);
					});
				}
			}
		} else {
			// Reset
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
		alm.transition_container = false;
		alm.images_loaded = false;
	} else {
		console.warn('Ajax Load More: Unable to locate Masonry configuration settings.');
	}

	return alm;
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/noResults.js
/**
 * Set the results text if required.
 *
 * @param {HTMLElement} target The target HTML element
 * @param {string}      html   The HTML.
 * @since 5.1
 */
const almNoResults = (target, html = '') => {
	if (html === '') {
		return false; // exit if empty
	}

	// Remove empty <p/> tags
	html = html.replace(/(<p><\/p>)+/g, '');

	// Append to DOM
	target.innerHTML = html;
};

/* harmony default export */ var noResults = (almNoResults);

;// CONCATENATED MODULE: ./src/frontend/js/modules/placeholder.js


function showPlaceholder(alm) {
	if (!alm || !alm.main || alm.addons.paging || alm.rel === 'prev') {
		return false;
	}
	if (alm.placeholder) {
		alm.placeholder.style.display = 'block';
		almFadeIn(alm.placeholder, 150);
	}
}

function hidePlaceholder(alm) {
	if (!alm || !alm.main || alm.addons.paging) {
		return false;
	}
	if (alm.placeholder) {
		almFadeOut(alm.placeholder, 150);
		setTimeout(function () {
			alm.placeholder.style.display = 'none';
		}, 75);
	}
}

;// CONCATENATED MODULE: ./src/frontend/js/modules/resultsText.js


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
			page = alm.addons.paging && alm.addons.seo ? parseInt(alm.start_page) + 1 : parseInt(alm.page) + 1;
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
};

;// CONCATENATED MODULE: ./src/frontend/js/modules/setLocalizedVars.js


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
			const page = addons.preloaded === 'true' ? parseInt(alm.page) + 2 : parseInt(alm.page) + 1;
			alm.AjaxLoadMore.setLocalizedVar('page', parseInt(page));

			let pages = Math.ceil(alm.totalposts / alm.orginal_posts_per_page);
			pages = addons.preloaded === 'true' ? pages + 1 : pages;
			alm.AjaxLoadMore.setLocalizedVar('pages', parseInt(pages));
		}

		// Total Posts `total_posts`.
		// Only update if !preloaded && !nextpage && !woocommerce
		if (addons.preloaded !== 'true' && !addons.nextpage && !addons.woocommerce) {
			alm.AjaxLoadMore.setLocalizedVar('total_posts', alm.totalposts);
		}

		// Viewing count.
		alm.AjaxLoadMore.setLocalizedVar('post_count', almSetPostCount(alm));

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
function almSetPostCount(alm) {
	const { postcount, addons } = alm;
	const { preloaded_amount } = addons;

	// Construct post count.
	let count = parseInt(postcount) + parseInt(preloaded_amount);
	count = alm.start_page > 1 ? count - parseInt(preloaded_amount) : count; // SEO
	count = addons.filters_startpage > 1 ? count - parseInt(preloaded_amount) : count; // Filters
	count = addons.single_post ? count + 1 : count; // Single Posts
	count = addons.nextpage ? count + 1 : count; // Next Page

	return count;
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/frontend/scss/ajax-load-more.scss
var ajax_load_more = __webpack_require__(789);
var ajax_load_more_default = /*#__PURE__*/__webpack_require__.n(ajax_load_more);
;// CONCATENATED MODULE: ./src/frontend/scss/ajax-load-more.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()((ajax_load_more_default()), options);




       /* harmony default export */ var scss_ajax_load_more = ((ajax_load_more_default()) && (ajax_load_more_default()).locals ? (ajax_load_more_default()).locals : undefined);

;// CONCATENATED MODULE: ./src/frontend/js/ajax-load-more.js
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

// Polyfills
__webpack_require__(334);
__webpack_require__(793);

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
		if (alm_localize && alm_localize.scrolltop === 'true') {
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
		alm.isSafari = /Safari/i.test(alm.ua) && /Apple Computer/.test(alm.vendor) && !/Mobi|Android/i.test(alm.ua);

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
		alm.el = alm.content;
		alm.ajax = el.querySelector('.alm-ajax');
		alm.container_type = alm.listing.dataset.containerType;
		alm.loading_style = alm.listing.dataset.loadingStyle;

		// Instance Params
		alm.canonical_url = el.dataset.canonicalUrl;
		alm.nested = el.dataset.nested ? el.dataset.nested : false;
		alm.is_search = el?.dataset?.search === 'true' ? 'true' : false;
		alm.slug = el.dataset.slug;
		alm.post_id = parseInt(el.dataset.postId);
		alm.id = el.dataset.id ? el.dataset.id : '';

		// No results template
		const alm_no_results = el.querySelector('.alm-no-results');
		alm.no_results = alm_no_results ? alm_no_results.innerHTML : '';

		// Shortcode Params
		alm.repeater = alm.listing.dataset.repeater; // Repeaters
		alm.theme_repeater = alm.listing.dataset.themeRepeater;

		alm.post_type = alm.listing.dataset.postType ? alm.listing.dataset.postType : 'post';
		alm.sticky_posts = alm.listing.dataset.stickyPosts ? alm.listing.dataset.stickyPosts : null;

		alm.btnWrap = el.querySelectorAll('.alm-btn-wrap'); // Get all `.alm-button-wrap` divs
		alm.btnWrap = Array.prototype.slice.call(alm.btnWrap); // Convert NodeList to array
		alm.btnWrap[alm.btnWrap.length - 1].style.visibility = 'visible'; // Get last element (used for nesting)
		alm.trigger = alm.btnWrap[alm.btnWrap.length - 1];
		alm.button = alm.trigger.querySelector('button.alm-load-more-btn');

		alm.button_label = alm.listing.dataset.buttonLabel || 'Load More';
		alm.button_loading_label = alm.listing.dataset.buttonLoadingLabel || false;
		alm.button_done_label = alm.listing.dataset.buttonDoneLabel || false;

		alm.placeholder = alm.main.querySelector('.alm-placeholder') || false;

		alm.scroll_distance = alm.listing.dataset.scrollDistance || 100;
		alm.scroll_container = alm.listing.dataset.scrollContainer || '';
		alm.scroll_direction = alm.listing.dataset.scrollDirection || 'vertical';
		alm.max_pages = alm.listing.dataset.maxPages ? parseInt(alm.listing.dataset.maxPages) : 0;
		alm.pause_override = alm.listing.dataset.pauseOverride ? alm.listing.dataset.pauseOverride : false; // true | false
		alm.pause = alm.listing.dataset.pause ? alm.listing.dataset.pause : false; // true | false
		alm.transition = alm.listing.dataset.transition || 'fade'; // Transition
		alm.transition_container = alm?.listing?.dataset?.transitionContainer === 'false' ? false : true; // Transition Container
		alm.tcc = alm.listing.dataset.transitionContainerClasses || ''; // Transition Container Classes
		alm.speed = alm?.localize?.speed ? parseInt(alm.localize.speed) : 150;
		alm.images_loaded = alm.listing.dataset.imagesLoaded ? alm.listing.dataset.imagesLoaded : false;
		alm.destroy_after = alm.listing.dataset.destroyAfter ? alm.listing.dataset.destroyAfter : '';
		alm.lazy_images = alm?.listing.dataset?.lazyImages === 'true' ? true : false;
		alm.integration.woocommerce = alm?.listing?.dataset?.woocommerce === 'true' ? true : false;

		alm.scroll = alm?.listing?.dataset?.scroll === 'false' ? false : true;
		alm.orginal_posts_per_page = parseInt(alm.listing.dataset.postsPerPage); // Used for paging add-on
		alm.posts_per_page = parseInt(alm.listing.dataset.postsPerPage);
		alm.offset = alm?.listing?.dataset?.offset ? parseInt(alm.listing.dataset.offset) : 0;

		// Convert to value of slug for appending to seo url.
		alm.search_value = alm.is_search === 'true' ? alm.slug : '';

		// Add-on Shortcode Params

		// Elementor add-on
		alm.addons.elementor = alm.listing.dataset.elementor === 'posts' && alm.listing.dataset.elementorSettings ? true : false;
		if (alm.addons.elementor) {
			alm = elementorCreateParams(alm);
		}

		// WooCommerce add-on
		alm.addons.woocommerce = alm?.listing?.dataset?.woo === 'true' ? true : false;
		if (alm.addons.woocommerce && alm.listing.dataset.wooSettings) {
			alm.addons.woocommerce_settings = JSON.parse(alm.listing.dataset.wooSettings);
			alm.addons.woocommerce_settings.results_text = document.querySelectorAll(alm.addons.woocommerce_settings.results); // Add Results Text
			alm.page = parseInt(alm.page) + parseInt(alm.addons.woocommerce_settings.paged);
		}

		// Cache add-on
		alm.addons.cache = alm?.listing?.dataset?.cache === 'true' ? true : false;
		if (alm.addons.cache) {
			alm.addons.cache_id = alm.listing.dataset.cacheId;
			alm.addons.cache_path = alm.listing.dataset.cachePath;
			alm.addons.cache_logged_in = alm.listing.dataset.cacheLoggedIn ? alm.listing.dataset.cacheLoggedIn : false;
		}

		// CTA add-on
		alm.addons.cta = alm?.listing?.dataset?.cta === 'true' ? true : false;
		if (alm.addons.cta) {
			alm.addons.cta_position = alm.listing.dataset.ctaPosition;
			alm.addons.cta_repeater = alm.listing.dataset.ctaRepeater;
			alm.addons.cta_theme_repeater = alm.listing.dataset.ctaThemeRepeater;
		}

		// Nextpage add-on
		alm.addons.nextpage = alm.listing.dataset.nextpage;
		if (alm.addons.nextpage === 'true') {
			alm.addons.nextpage_urls = alm.listing.dataset.nextpageUrls;
			alm.addons.nextpage_scroll = alm.listing.dataset.nextpageScroll;
			alm.addons.nextpage_post_id = alm.listing.dataset.nextpagePostId;
			alm.addons.nextpage_startpage = parseInt(alm.listing.dataset.nextpageStartpage);
			alm.addons.nextpage_title_template = alm.listing.dataset.nextpageTitleTemplate;
		}

		// Single Posts add-on
		alm.addons.single_post = alm.listing.dataset.singlePost;
		if (alm.addons.single_post === 'true') {
			alm.addons.single_post_id = alm.listing.dataset.singlePostId;
			alm.addons.single_post_query = alm.listing.dataset.singlePostQuery;
			alm.addons.single_post_order = alm.listing.dataset.singlePostOrder === undefined ? 'previous' : alm.listing.dataset.singlePostOrder;
			alm.addons.single_post_init_id = alm.listing.dataset.singlePostId;
			alm.addons.single_post_taxonomy = alm.listing.dataset.singlePostTaxonomy === undefined ? '' : alm.listing.dataset.singlePostTaxonomy;
			alm.addons.single_post_excluded_terms = alm.listing.dataset.singlePostExcludedTerms === undefined ? '' : alm.listing.dataset.singlePostExcludedTerms;
			alm.addons.single_post_progress_bar = alm.listing.dataset.singlePostProgressBar === undefined ? '' : alm.listing.dataset.singlePostProgressBar;
			alm.addons.single_post_target = alm.listing.dataset.singlePostTarget === undefined ? '' : alm.listing.dataset.singlePostTarget;
			alm.addons.single_post_preview = alm.listing.dataset.singlePostPreview === undefined ? false : true;

			if (alm.addons.single_post_preview) {
				const singlePostPreviewData = alm.listing.dataset.singlePostPreview.split(':');
				alm.addons.single_post_preview_data = {
					button_label: singlePostPreviewData[0] ? singlePostPreviewData[0] : 'Continue Reading',
					height: singlePostPreviewData[1] ? singlePostPreviewData[1] : 500,
					element: singlePostPreviewData[2] ? singlePostPreviewData[2] : 'default',
					className: 'alm-single-post--preview',
				};
			}
		}

		// Comments add-on
		alm.addons.comments = alm.listing.dataset.comments ? alm.listing.dataset.comments : false;
		if (alm.addons.comments === 'true') {
			alm.addons.comments_post_id = alm.listing.dataset.comments_post_id; // current post id
			alm.addons.comments_per_page = alm.listing.dataset.comments_per_page;
			alm.addons.comments_per_page = alm.addons.comments_per_page === undefined ? '5' : alm.addons.comments_per_page;
			alm.addons.comments_type = alm.listing.dataset.comments_type;
			alm.addons.comments_style = alm.listing.dataset.comments_style;
			alm.addons.comments_template = alm.listing.dataset.comments_template;
			alm.addons.comments_callback = alm.listing.dataset.comments_callback;
		}

		alm.addons.filters = alm.listing.dataset.filters;
		alm.addons.seo = alm.listing.dataset.seo;
		alm.addons.seo_offset = alm.listing.dataset.seoOffset || 0;

		// Preloaded
		alm.addons.preloaded = alm.listing.dataset.preloaded; // Preloaded add-on
		alm.addons.preloaded_amount = alm.listing.dataset.preloadedAmount ? alm.listing.dataset.preloadedAmount : 0;
		alm.is_preloaded = alm.listing.dataset.isPreloaded === 'true' ? true : false;

		// Users
		alm.addons.users = alm.listing.dataset.users === 'true' ? true : false; // Users add-on
		if (alm.addons.users) {
			// Override paging params for users
			alm.orginal_posts_per_page = alm.listing.dataset.usersPerPage;
			alm.posts_per_page = alm.listing.dataset.usersPerPage;
		}

		// Extension Shortcode Params

		// REST API.
		alm.extensions.restapi = alm.listing.dataset.restapi === 'true' ? true : false;
		if (alm.extensions.restapi) {
			alm.extensions.restapi_base_url = alm.listing.dataset.restapiBaseUrl;
			alm.extensions.restapi_namespace = alm.listing.dataset.restapiNamespace;
			alm.extensions.restapi_endpoint = alm.listing.dataset.restapiEndpoint;
			alm.extensions.restapi_template_id = alm.listing.dataset.restapiTemplateId;
			alm.extensions.restapi_debug = alm.listing.dataset.restapiDebug;
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
		alm.extensions.term_query = alm.listing.dataset.termQuery === 'true' ? true : false;
		if (alm.extensions.term_query) {
			alm.extensions.term_query_taxonomy = alm.listing.dataset.termQueryTaxonomy;
			alm.extensions.term_query_hide_empty = alm.listing.dataset.termQueryHideEmpty;
			alm.extensions.term_query_number = alm.listing.dataset.termQueryNumber;
		}

		// Paging.
		alm.addons.paging = alm.listing.dataset.paging; // Paging add-on
		if (alm.addons.paging === 'true') {
			alm.addons.paging = true;
			alm.addons.paging_init = true;
			alm.addons.paging_controls = alm.listing.dataset.pagingControls === 'true' ? true : false;
			alm.addons.paging_show_at_most = alm.listing.dataset.pagingShowAtMost;
			alm.addons.paging_classes = alm.listing.dataset.pagingClasses;
			alm.addons.paging_show_at_most = alm.addons.paging_show_at_most === undefined ? 7 : alm.addons.paging_show_at_most;

			alm.addons.paging_first_label = alm.listing.dataset.pagingFirstLabel;
			alm.addons.paging_previous_label = alm.listing.dataset.pagingPreviousLabel;
			alm.addons.paging_next_label = alm.listing.dataset.pagingNextLabel;
			alm.addons.paging_last_label = alm.listing.dataset.pagingLastLabel;

			alm.addons.paging_scroll = alm.listing.dataset.pagingScroll ? alm.listing.dataset.pagingScroll : false;
			alm.addons.paging_scrolltop = alm.listing.dataset.pagingScrolltop ? parseInt(alm.listing.dataset.pagingScrolltop) : 100;

			// If preloaded, pause ALM
			alm.pause = alm.addons.preloaded === 'true' ? true : alm.pause;
		} else {
			alm.addons.paging = false;
		}

		// Filters
		if (alm.addons.filters === 'true') {
			alm.addons.filters = true;
			alm.addons.filters_url = alm.listing.dataset.filtersUrl === 'true' ? true : false;
			alm.addons.filters_target = alm.listing.dataset.filtersTarget ? alm.listing.dataset.filtersTarget : false;
			alm.addons.filters_paging = alm.listing.dataset.filtersPaging === 'true' ? true : false;
			alm.addons.filters_scroll = alm.listing.dataset.filtersScroll === 'true' ? true : false;
			alm.addons.filters_scrolltop = alm.listing.dataset.filtersScrolltop ? alm.listing.dataset.filtersScrolltop : '30';
			alm.addons.filters_debug = alm.listing.dataset.filtersDebug;
			alm.addons.filters_startpage = 0;
			alm.facets = alm.listing.dataset.facets === 'true' ? true : false;

			// Display warning when `filters_target` parameter is missing.
			if (!alm.addons.filters_target) {
				console.warn(
					'Ajax Load More: Unable to locate a target for Filters. Make sure you set a target parameter in the core Ajax Load More shortcode - e.g. [ajax_load_more filters="true" target="filters"]'
				);
			}

			// Get Paged Querystring Val
			const page = helpers_getParameterByName('pg');
			alm.addons.filters_startpage = page !== null ? parseInt(page) : 0;

			// If not Paging add-on
			if (!alm.addons.paging && alm.addons.filters_startpage > 0) {
				alm.posts_per_page = alm.posts_per_page * alm.addons.filters_startpage;
				alm.isPaged = alm.addons.filters_startpage > 0 ? true : false;
			}
		} else {
			alm.addons.filters = false;
		}

		/* REST API */
		if (alm.extensions.restapi) {
			alm.extensions.restapi_debug = alm.extensions.restapi_debug === undefined ? false : alm.extensions.restapi_debug;
			alm.extensions.restapi = alm.extensions.restapi_template_id === '' ? false : alm.extensions.restapi;
		}

		/* Preloaded */
		if (alm.addons.preloaded === 'true') {
			// Preloaded Amount
			alm.addons.preloaded_amount = alm.addons.preloaded_amount === undefined ? alm.posts_per_page : alm.addons.preloaded_amount;
			if (alm?.localize?.total_posts !== null) {
				// Disable ALM if total_posts is equal to or less than preloaded_amount.
				if (parseInt(alm.localize.total_posts) <= parseInt(alm.addons.preloaded_amount)) {
					alm.addons.preloaded_total_posts = alm.localize.total_posts;
					alm.disable_ajax = true;
				}
			}
		} else {
			alm.addons.preloaded = 'false';
		}
		/* End Preloaded  */

		/* SEO */
		alm.addons.seo = alm.addons.seo === undefined ? false : alm.addons.seo;
		alm.addons.seo = alm.addons.seo === 'true' ? true : alm.addons.seo;

		if (alm.addons.seo) {
			alm.addons.seo_permalink = alm.listing.dataset.seoPermalink;
			alm.addons.seo_pageview = alm.listing.dataset.seoPageview;
			alm.addons.seo_trailing_slash = alm.listing.dataset.seoTrailingSlash === 'false' ? '' : '/';
			alm.addons.seo_leading_slash = alm.listing.dataset.seoLeadingSlash === 'true' ? '/' : '';
		}
		alm.start_page = alm.listing.dataset.seoStartPage;

		if (alm.start_page) {
			alm.addons.seo_scroll = alm.listing.dataset.seoScroll;
			alm.addons.seo_scrolltop = alm.listing.dataset.seoScrolltop;
			alm.addons.seo_controls = alm.listing.dataset.seoControls;
			alm.isPaged = false;
			if (alm.start_page > 1) {
				alm.isPaged = true; // Is this a paged page > 1 ?
				alm.posts_per_page = alm.start_page * alm.posts_per_page;
			}
			if (alm.addons.paging) {
				// If paging, reset posts_per_page
				alm.posts_per_page = alm.orginal_posts_per_page;
			}
		} else {
			alm.start_page = 1;
		}
		/* End SEO  */

		/* Nextpage */
		if (alm.addons.nextpage === 'true') {
			alm.addons.nextpage = true;
			alm.posts_per_page = 1;

			if (alm.addons.nextpage_urls === undefined) {
				alm.addons.nextpage_urls = 'true';
			}
			if (alm.addons.nextpage_scroll === undefined) {
				alm.addons.nextpage_scroll = 'false:30';
			}
			if (alm.addons.nextpage_post_id === undefined) {
				alm.addons.nextpage = false;
				alm.addons.nextpage_post_id = null;
			}
			if (alm.addons.nextpage_startpage === undefined) {
				alm.addons.nextpage_startpage = 1;
			}
			if (alm.addons.nextpage_startpage > 1) {
				alm.isPaged = true;
			}
			alm.addons.nextpage_postTitle = alm.listing.dataset.nextpagePostTitle;
		} else {
			alm.addons.nextpage = false;
		}
		/* End Nextpage  */

		/* Single Post */
		if (alm.addons.single_post === 'true') {
			alm.addons.single_post = true;
			alm.addons.single_post_permalink = '';
			alm.addons.single_post_title = '';
			alm.addons.single_post_slug = '';
			alm.addons.single_post_cache = false;
			alm.addons.single_post_title_template = alm.listing.dataset.singlePostTitleTemplate;
			alm.addons.single_post_siteTitle = alm.listing.dataset.singlePostSiteTitle;
			alm.addons.single_post_siteTagline = alm.listing.dataset.singlePostSiteTagline;
			alm.addons.single_post_pageview = alm.listing.dataset.singlePostPageview;
			alm.addons.single_post_scroll = alm.listing.dataset.singlePostScroll;
			alm.addons.single_post_scroll_speed = alm.listing.dataset.singlePostScrollSpeed;
			alm.addons.single_post_scroll_top = alm.listing.dataset.singlePostScrolltop;
			alm.addons.single_post_controls = alm.listing.dataset.singlePostControls;
		} else {
			alm.addons.single_post = false;
		}
		if (alm.addons.single_post && alm.addons.single_post_id === undefined) {
			alm.addons.single_post_id = '';
			alm.addons.single_post_init_id = '';
		}
		/* End Single Post */

		/* Pause */
		if (alm.pause === undefined || (alm.addons.seo && alm.start_page > 1)) {
			// SEO only
			alm.pause = false;
		}
		if (alm.addons.preloaded === 'true' && alm.addons.seo && alm.start_page > 0) {
			// SEO + Preloaded
			alm.pause = false;
		}
		if (alm.addons.filters && alm.addons.filters_startpage > 0) {
			// Filters
			alm.pause = false;
		}
		if (alm.addons.preloaded === 'true' && alm.addons.paging) {
			alm.pause = true;
		}

		/* Repeater and Theme Repeater */
		alm.repeater = alm.repeater === undefined ? 'default' : alm.repeater;
		alm.theme_repeater = alm.theme_repeater === undefined ? false : alm.theme_repeater;

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
			alm.main.classList.add('loading'); // add loading class to main container
		} else {
			const almChildren = el.childNodes; // Get child nodes of instance [nodeList]
			if (almChildren) {
				const almChildArray = Array.prototype.slice.call(almChildren); // Convert nodeList to array

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

		// Results Text
		// Render "Showing x of y results" text.
		// If woocommerce, get the default woocommerce results block
		if (alm.integration.woocommerce) {
			alm.resultsText = document.querySelectorAll('.woocommerce-result-count');
			if (alm.resultsText.length < 1) {
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

		// Table of Contents
		// Render 1, 2, 3 etc. when pages are loaded
		alm.tableofcontents = document.querySelector('.alm-toc');
		if (alm.tableofcontents) {
			alm.tableofcontents.setAttribute('aria-live', 'polite');
			alm.tableofcontents.setAttribute('aria-atomic', 'true');
		} else {
			alm.tableofcontents = false;
		}

		/**
		 * The function to get posts via Ajax.
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
			showPlaceholder(alm);
			alm.main.classList.add('alm-loading');

			// Add loading styles to buttons.
			if (!alm.addons.paging) {
				if (alm.rel === 'prev') {
					alm.buttonPrev.classList.add('loading');
				} else {
					alm.button.classList.add('loading');
					if (alm.button_loading_label !== false) {
						alm.button.innerHTML = alm.button_loading_label;
					}
				}
			}

			alm.AjaxLoadMore.ajax(); // Dispatch http request.
		};

		/**
		 * The core Ajax Load More Ajax function.
		 *
		 * @param {string} type The type of Ajax request [standard|totalposts|totalpages].
		 * @since 2.6.0
		 */
		alm.AjaxLoadMore.ajax = async function (type = 'standard') {
			// Dispatch Ajax request.
			if (alm.extensions.restapi) {
				// Rest API.
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
						return singlePostHTML(alm, response, cache_slug);
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
			const alm_rest_template = wp.template(alm.extensions.restapi_template_id);
			const alm_rest_url = `${rest_api_url}${alm.extensions.restapi_base_url}/${alm.extensions.restapi_namespace}/${alm.extensions.restapi_endpoint}`;
			const params = getRestAPIParams(alm); // [./helpers/queryParams.js]

			lib_axios
				.get(alm_rest_url, { params })
				.then(function (response) {
					// Success
					const results = response.data; // Get data from response
					const { html = null, meta = null } = results;
					const postcount = meta && meta.postcount ? meta.postcount : 0;
					const totalposts = meta && meta.totalposts ? meta.totalposts : 0;

					// loop results to get data from each.
					let data = '';
					for (let i = 0; i < html.length; i++) {
						const result = html[i];
						if (alm.restapi_debug === 'true') {
							console.log(result); // eslint-disable-line no-console
						}
						data += alm_rest_template(result);
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

		// If pagination enabled, run query to get total posts or pages.
		if (alm.addons.paging) {
			if (alm.addons.nextpage) {
				alm.AjaxLoadMore.ajax('totalpages');
			} else {
				alm.AjaxLoadMore.ajax('totalposts');
			}
		}

		/**
		 * Display/render results function.
		 *
		 * @param {Object} data The results of the Ajax request.
		 * @since 2.6.0
		 */
		alm.AjaxLoadMore.render = function (data) {
			if (alm.addons.single_post) {
				alm.AjaxLoadMore.getSinglePost(); // Get single post data for next post.
			}

			let isPaged = false;

			// Create `.alm-reveal` element
			let reveal = alm.container_type === 'table' ? document.createElement('tbody') : document.createElement('div');
			alm.el = reveal;
			reveal.style.opacity = 0;
			reveal.style.height = 0;
			reveal.style.outline = 'none';

			// Pase data.
			const { html, meta } = data;
			let total = meta ? parseInt(meta.postcount) : parseInt(alm.posts_per_page);

			// Get current post counts.
			const totalposts = typeof meta !== 'undefined' ? meta.totalposts : alm.posts_per_page * 5;
			alm.totalposts = alm.addons.preloaded === 'true' ? totalposts - alm.addons.preloaded_amount : totalposts;
			alm.postcount = alm.addons.paging ? total : alm.postcount + total;

			if (!meta) {
				// Display warning if `meta` is missing.
				console.warn(
					'Ajax Load More: Unable to access `meta` object in Ajax response. There may be an issue in your Repeater Template or another hook causing interference.'
				);
			}

			// Set alm.html as plain text return
			alm.html = html;

			// First Run Only
			if (alm.init) {
				// Set Meta
				if (meta) {
					alm.main.dataset.totalPosts = meta.totalposts ? meta.totalposts : 0;
				}
				// Paging
				if (alm.addons.paging && total > 0) {
					// Add paging containers and content
					alm.AjaxLoadMore.pagingInit(html, 'alm-reveal');
				}
				// ALM Empty
				if (total === 0) {
					if (alm.addons.paging) {
						if (typeof almPagingEmpty === 'function') {
							window.almPagingEmpty(alm);
						}
					}
					if (typeof almEmpty === 'function') {
						window.almEmpty(alm);
					}
					if (alm.no_results) {
						setTimeout(function () {
							noResults(alm.content, alm.no_results);
						}, alm.speed + 10);
					}
				}

				// isPaged
				if (alm.isPaged) {
					// Reset the posts_per_page parameter
					alm.posts_per_page = alm.addons.users ? alm.listing.dataset.usersPerPage : alm.listing.dataset.postsPerPage; // Users
					alm.posts_per_page = alm.addons.nextpage ? 1 : alm.posts_per_page; // NextPage

					// SEO add-on
					alm.page = alm.start_page ? alm.start_page - 1 : alm.page; // Set new page #

					// Filters add-on
					if (alm.addons.filters) {
						if (alm.addons.filters_startpage > 0) {
							alm.page = alm.addons.filters_startpage - 1; // Set new page #
							alm.posts_per_page = alm.listing.dataset.postsPerPage; // Reset `filters-startpage` data after the first run
						}
					}
				}
			}

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

			/**
			 * Render results
			 */
			if (total > 0) {
				// We have results!

				if (!alm.addons.paging) {
					// Single Posts.
					if (alm.addons.single_post) {
						reveal.setAttribute('class', `alm-reveal alm-single-post post-${alm.addons.single_post_id}${alm.tcc ? ` ${alm.tcc}` : ''}`);
						reveal.dataset.url = alm.addons.single_post_permalink;
						if (alm.addons.single_post_target) {
							reveal.dataset.page = parseInt(alm.page) + 1;
						} else {
							reveal.dataset.page = alm.page;
						}
						reveal.dataset.id = alm.addons.single_post_id;
						reveal.dataset.title = alm.addons.single_post_title;
						reveal.innerHTML = alm.html;

						// Single Post Preview
						if (alm.addons.single_post_preview && alm.addons.single_post_preview_data && typeof almSinglePostCreatePreview === 'function') {
							const singlePreview = window.almSinglePostCreatePreview(reveal, alm.addons.single_post_id, alm.addons.single_post_preview_data);
							reveal.replaceChildren(singlePreview ? singlePreview : reveal);
						}
					} else {
						if (!alm.transition_container) {
							// No transition container
							alm.el = alm.html;
							reveal = alm.container_type === 'table' ? helpers_tableWrap(alm.html) : helpers_stripEmptyNodes(almDomParser(alm.html, 'text/html'));
						} else {
							// Standard container
							let pagenum;
							const querystring = window.location.search;
							const seo_class = alm.addons.seo ? ' alm-seo' : '';
							const filters_class = alm.addons.filters ? ' alm-filters' : '';
							const preloaded_class = alm.is_preloaded ? ' alm-preloaded' : '';

							// Init, SEO and Filter Paged
							if (alm.init && (alm.start_page > 1 || alm.addons.filters_startpage > 0)) {
								// loop through items and break into separate .alm-reveal divs for paging

								const data = [];
								const container_array = [];
								let posts_per_page = parseInt(alm.posts_per_page);
								let pages = Math.ceil(total / posts_per_page);
								isPaged = true;

								// Call to Actions
								if (alm.addons.cta) {
									posts_per_page = posts_per_page + 1; // Add 1 to posts_per_page for CTAs
									pages = Math.ceil(total / posts_per_page); // Update pages let with new posts_per_page
									total = pages + total; // Get new total w/ CTAs added
								}

								// Parse returned HTML and strip empty nodes
								const html = helpers_stripEmptyNodes(almDomParser(alm.html, 'text/html'));

								// Split data into array of individual page
								for (let i = 0; i < total; i += posts_per_page) {
									data.push(html.slice(i, posts_per_page + i));
								}

								// Loop data array to build .alm-reveal containers
								for (let k = 0; k < data.length; k++) {
									const p = alm.addons.preloaded === 'true' ? 1 : 0; // Add 1 page if items are preloaded.
									let alm_reveal = document.createElement('div');

									if (k > 0 || alm.addons.preloaded === 'true') {
										pagenum = k + 1 + p; // > Paged

										if (alm.addons.seo) {
											// SEO
											alm_reveal = createSEOAttributes(alm, alm_reveal, querystring, seo_class, getSEOPageNum(alm.addons.seo_offset, pagenum));
										}

										if (alm.addons.filters) {
											// Filters
											alm_reveal.setAttribute('class', 'alm-reveal' + filters_class + alm.tcc);
											alm_reveal.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, pagenum);
											alm_reveal.dataset.page = pagenum;
										}
									} else {
										// First Page
										if (alm.addons.seo) {
											// SEO
											alm_reveal = createSEOAttributes(alm, alm_reveal, querystring, seo_class + preloaded_class, getSEOPageNum(alm.addons.seo_offset, 1));
										}
										if (alm.addons.filters) {
											// Filters
											alm_reveal.setAttribute('class', 'alm-reveal' + filters_class + preloaded_class + alm.tcc);
											alm_reveal.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, 0);
											alm_reveal.dataset.page = '1';
										}
									}

									// Append children to `.alm-reveal` element
									almAppendChildren(alm_reveal, data[k]);

									// Run srcSet polyfill
									srcsetPolyfill(alm_reveal, alm.ua);

									// Push alm_reveal elements into container_array
									container_array.push(alm_reveal);
								}

								// Set opacity and height of .alm-listing div to allow for fadein.
								alm.listing.style.opacity = 0;
								alm.listing.style.height = 0;

								// Append container_array to `.alm-listing`
								almAppendChildren(alm.listing, container_array);

								reveal = alm.listing;
								alm.el = reveal;
							}
							// End Init & SEO
							else {
								// Preloaded OR SEO (and Paged)
								if ((alm.addons.seo && alm.page > 0) || alm.addons.preloaded === 'true') {
									const p2 = alm.addons.preloaded === 'true' ? 1 : 0; // Add 1 page if items are preloaded.

									// SEO [Paged]
									pagenum = alm.page + 1 + p2;

									if (alm.addons.seo) {
										// SEO
										reveal = createSEOAttributes(alm, reveal, querystring, seo_class, getSEOPageNum(alm.addons.seo_offset, pagenum));
									} else if (alm.addons.filters) {
										// Filters
										reveal.setAttribute('class', 'alm-reveal' + filters_class + alm.tcc);
										reveal.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, pagenum);
										reveal.dataset.page = pagenum;
									} else {
										// Basic ALM
										reveal.setAttribute('class', 'alm-reveal' + alm.tcc);
									}
								} else if (alm.addons.filters) {
									// Filters
									reveal.setAttribute('class', 'alm-reveal' + filters_class + alm.tcc);
									reveal.dataset.url = alm.canonical_url + buildFilterURL(alm, querystring, parseInt(alm.page) + 1);
									reveal.dataset.page = parseInt(alm.page) + 1;
								} else {
									if (alm.addons.seo) {
										// SEO [Page 1]
										reveal = createSEOAttributes(alm, reveal, querystring, seo_class, getSEOPageNum(alm.addons.seo_offset, 1));
									} else {
										// Basic ALM
										reveal.setAttribute('class', 'alm-reveal' + alm.tcc);
									}
								}

								reveal.innerHTML = alm.html;
							}
						}
					}

					// WooCommerce Add-on
					if (alm.addons.woocommerce) {
						(async function () {
							await woocommerce(reveal, alm);
							woocommerceLoaded(alm);
						})().catch((e) => {
							console.warn('Ajax Load More: There was an error loading woocommerce products.', e);
						});

						alm.init = false;
						return;
					}

					// Elementor Add-on
					if (alm.addons.elementor) {
						(async function () {
							await elementor(reveal, alm);
							elementorLoaded(alm);
						})().catch((e) => {
							console.warn('Ajax Load More: There was an error loading Elementor items.', e);
						});

						alm.init = false;
						return;
					}

					// Append `reveal` div to ALM Listing container
					// Do not append when transtion == masonry OR init and !preloaded
					if (alm.transition !== 'masonry' || (alm.init && alm.addons.preloaded !== 'true')) {
						if (!isPaged) {
							if (!alm.transition_container) {
								// No transition container.
								if (alm.images_loaded === 'true') {
									ajax_load_more_imagesLoaded(reveal, function () {
										almAppendChildren(alm.listing, reveal);

										// Run srcSet polyfill
										srcsetPolyfill(alm.listing, alm.ua);
									});
								} else {
									almAppendChildren(alm.listing, reveal);

									// Run srcSet polyfill.
									srcsetPolyfill(alm.listing, alm.ua);
								}
							} else {
								// Standard container.
								alm.listing.appendChild(reveal);
							}
						}
					}

					/**
					 * Transitions
					 */

					// Masonry
					if (alm.transition === 'masonry') {
						alm.el = alm.listing;

						// Wrap almMasonry in anonymous async/await function
						(async function () {
							await almMasonry(alm, alm.init, alm_is_filtering);
							alm.masonry.init = false;

							alm.AjaxLoadMore.triggerWindowResize();
							alm.AjaxLoadMore.transitionEnd();

							if (typeof almComplete === 'function') {
								window.almComplete(alm);
							}

							// Lazy load images if necessary.
							lazyImages(alm);
						})().catch(() => {
							console.error('There was an error with ALM Masonry'); //eslint-disable-line no-console
						});
					}

					// None
					else if (alm.transition === 'none' && alm.transition_container) {
						if (alm.images_loaded === 'true') {
							ajax_load_more_imagesLoaded(reveal, function () {
								almFadeIn(reveal, 0);
								alm.AjaxLoadMore.transitionEnd();
							});
						} else {
							almFadeIn(reveal, 0);
							alm.AjaxLoadMore.transitionEnd();
						}
					}

					// Default (Fade)
					else {
						if (alm.images_loaded === 'true') {
							ajax_load_more_imagesLoaded(reveal, function () {
								if (alm.transition_container) {
									almFadeIn(reveal, alm.speed);
								}
								alm.AjaxLoadMore.transitionEnd();
							});
						} else {
							if (alm.transition_container) {
								almFadeIn(reveal, alm.speed);
							}
							alm.AjaxLoadMore.transitionEnd();
						}
					}
				} else {
					// Paging
					if (!alm.init) {
						// Paging container.
						const pagingContent = alm.listing.querySelector('.alm-paging-content');

						if (pagingContent) {
							almFadeOut(pagingContent, alm.speed);
							pagingContent.style.outline = 'none';
							alm.main.classList.remove('alm-loading');

							setTimeout(function () {
								pagingContent.style.opacity = 0;
								pagingContent.innerHTML = alm.html;

								ajax_load_more_imagesLoaded(pagingContent, function () {
									// Delay for effect
									alm.AjaxLoadMore.triggerAddons(alm);
									almFadeIn(pagingContent, alm.speed);

									// Remove opacity on element to fix CSS transition
									setTimeout(function () {
										pagingContent.style.opacity = '';

										// Insert Script
										modules_insertScript.init(pagingContent);
									}, parseInt(alm.speed) + 10);

									// Paging addon
									if (typeof almOnPagingComplete === 'function') {
										window.almOnPagingComplete(alm);
									}
								});
							}, parseInt(alm.speed) + 25);
						}
					} else {
						setTimeout(function () {
							alm.main.classList.remove('alm-loading');
							alm.AjaxLoadMore.triggerAddons(alm);
						}, alm.speed);
					}
					// End Paging
				}

				// ALM Loaded, run complete callbacks
				ajax_load_more_imagesLoaded(reveal, function () {
					// Nested
					alm.AjaxLoadMore.nested(reveal);

					// Insert Script
					modules_insertScript.init(alm.el);

					// Trigger almComplete
					if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
						window.almComplete(alm);
					}

					// Lazy load images if necessary
					lazyImages(alm);

					// Filters Add-on Complete
					if (alm_is_filtering && alm.addons.filters) {
						if (typeof almFiltersAddonComplete === 'function') {
							// Filters Add-on
							window.almFiltersAddonComplete(el);
						}
					}

					alm_is_filtering = false;

					/**
					 * ALM Done.
					 */
					if (!alm.addons.single_post) {
						if (alm.addons.nextpage) {
							// Nextpage.
							if (alm.postcount + alm.addons.nextpage_startpage >= alm.totalposts) {
								alm.AjaxLoadMore.triggerDone();
							}
						} else {
							if (alm.postcount >= alm.totalposts) {
								alm.AjaxLoadMore.triggerDone();
							}
						}
					}
				});
				// End ALM Loaded

				// Filters onLoad
				if (typeof almFiltersOnload === 'function' && alm.init) {
					window.almFiltersOnload(alm);
				}
			} else {
				/**
				 * No results from Ajax
				 */

				alm.AjaxLoadMore.noresults();
			}

			// Destroy After
			if (alm.destroy_after !== undefined && alm.destroy_after !== '') {
				let currentPage = alm.page + 1; // Add 1 because alm.page starts at 0
				currentPage = alm.addons.preloaded === 'true' ? currentPage++ : currentPage; // Add 1 for preloaded
				if (parseInt(currentPage) === parseInt(alm.destroy_after)) {
					// Disable ALM if page = alm.destroy_after value.
					alm.AjaxLoadMore.destroyed();
				}
			}

			/**
			 * Display Table of Contents
			 */

			tableOfContents(alm, alm.init);

			/**
			 * Set Focus for A11y
			 */

			if (alm.transition !== 'masonry') {
				modules_setFocus(alm, reveal, total, alm_is_filtering);
			}

			// Remove filtering class
			if (alm.main.classList.contains('alm-is-filtering')) {
				alm.main.classList.remove('alm-is-filtering');
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
				setTimeout(function () {
					alm.button.classList.remove('loading');
					alm.button.classList.add('done');
				}, alm.speed);
				alm.AjaxLoadMore.resetBtnText();
			}

			// Trigger almComplete
			if (typeof almComplete === 'function' && alm.transition !== 'masonry') {
				window.almComplete(alm);
			}

			// Filters Add-on Complete
			if (alm_is_filtering && alm.addons.filters) {
				if (typeof almFiltersAddonComplete === 'function') {
					// Filters Add-on
					almFiltersAddonComplete(el);
				}
				alm_is_filtering = false;
			}

			// Masonry, clear `alm-listing` height
			if (alm.transition === 'masonry') {
				alm.content.style.height = 'auto';
			}

			alm.AjaxLoadMore.triggerDone(); // ALM Done
		};

		/**
		 * First run for Paging + Preloaded add-ons.
		 * Moves preloaded content into ajax container.
		 *
		 * @param {string} data Results of Ajax request.
		 * @since 2.11.3
		 */
		alm.AjaxLoadMore.pagingPreloadedInit = function (data) {
			data = data === null ? '' : data; // Check for null data object

			// Add paging containers and content
			alm.AjaxLoadMore.pagingInit(data, 'alm-reveal');

			if (data === '') {
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
		 * First run for Paging + Next Page add-ons.
		 * Moves .alm-nextpage content into ajax container.
		 *
		 * @param {string} data Results of Ajax request.
		 * @since 2.14.0
		 */
		alm.AjaxLoadMore.pagingNextpageInit = function (data) {
			data = data === null ? '' : data; // Check for null data object

			// Add paging containers and content
			alm.AjaxLoadMore.pagingInit(data, 'alm-reveal alm-nextpage');

			// Set up Nextpage Vars
			if (typeof almSetNextPageVars === 'function') {
				window.almSetNextPageVars(alm); // Next Page Add-on
			}
		};

		/**
		 * First run for Paging to create required containers.
		 *
		 * @param {string} data    The Ajax response data.
		 * @param {string} classes The classes to add to the container.
		 * @since 5.0
		 */
		alm.AjaxLoadMore.pagingInit = function (data, classes = 'alm-reveal') {
			data = data === null ? '' : data; // Check for null data object.

			// Create `alm-reveal` container.
			const reveal = document.createElement('div');
			reveal.setAttribute('class', classes);

			// Create `alm-paging-loading` container.
			const content = document.createElement('div');
			content.setAttribute('class', 'alm-paging-content' + alm.tcc);
			content.innerHTML = data;
			reveal.appendChild(content);

			// Create `alm-paging-content` container.
			const loader = document.createElement('div');
			loader.setAttribute('class', 'alm-paging-loading');
			reveal.appendChild(loader);

			// Add div to container.
			alm.listing.appendChild(reveal);

			// Insert Script.
			modules_insertScript.init(reveal);

			// Reset button text.
			alm.AjaxLoadMore.resetBtnText();

			// Delay reveal of paging to avoid positioning issues.
			setTimeout(function () {
				if (typeof almFadePageControls === 'function') {
					window.almFadePageControls(alm.btnWrap);
				}

				if (typeof almPagingSetHeight === 'function') {
					window.almPagingSetHeight(reveal);
				}

				// Deprecated in Paging 5.7.
				if (typeof almOnWindowResize === 'function') {
					window.almOnWindowResize(alm);
				}
				// Remove loading class from main container.
				alm.main.classList.remove('loading');
			}, alm.speed);
		};

		/**
		 *	Automatically trigger nested ALM instances - requires `.alm-reveal` container.
		 *
		 * @param {HTMLElement} reveal The reveal div.
		 * @since 5.0
		 */
		alm.AjaxLoadMore.nested = function (reveal) {
			if (!reveal || !alm.transition_container) {
				return false; // Exit if not `transition_container`
			}
			const nested = reveal.querySelectorAll('.ajax-load-more-wrap'); // Get all instances
			if (nested) {
				nested.forEach(function (element) {
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

			// Set loading flag.
			alm.fetchingPreviousPost = true;

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
			hidePlaceholder(alm);

			if (!alm.addons.paging) {
				// Update button text
				if (alm.button_done_label !== false) {
					setTimeout(function () {
						alm.button.innerHTML = alm.button_done_label;
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
			hidePlaceholder(alm);

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
			if (alm.button_loading_label !== false && !alm.addons.paging) {
				alm.button.innerHTML = alm.button_label;
			}
		};

		/**
		 * Button click handler to load posts.
		 *
		 * @param {Object} e The target button element.
		 * @since 4.2.0
		 */
		alm.AjaxLoadMore.click = function (e) {
			const button = e.target || e.currentTarget;
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
			const button = e.target || e.currentTarget;
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
		 * Trigger a window resize browser function.
		 *
		 * @since 5.3.1
		 */
		alm.AjaxLoadMore.triggerWindowResize = function () {
			if (typeof Event === 'function') {
				// modern browsers
				window.dispatchEvent(new Event('resize'));
			} else {
				//This will be executed on old browsers and especially IE
				const resizeEvent = window.document.createEvent('UIEvents');
				resizeEvent.initUIEvent('resize', true, false, window, 0);
				window.dispatchEvent(resizeEvent);
			}
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
				if (alm.scroll_container !== '') {
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
					// End, Page Down
					const code = e.key ? e.key : e.code;
					switch (code) {
						case 35:
						case 34:
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
		 * Set variables after loading transiton completes.
		 *
		 * @since 3.5
		 */
		alm.AjaxLoadMore.transitionEnd = function () {
			setTimeout(function () {
				alm.AjaxLoadMore.resetBtnText();
				alm.main.classList.remove('alm-loading');
				// Loading button
				if (alm.rel === 'prev') {
					alm.buttonPrev.classList.remove('loading');
				} else {
					alm.button.classList.remove('loading');
				}
				alm.AjaxLoadMore.triggerAddons(alm);
				if (!alm.addons.paging) {
					setTimeout(function () {
						alm.loading = false; // Delay to prevent loading to fast
					}, alm.speed * 3);
				}
			}, 50);
			hidePlaceholder(alm);
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
			// Preloaded and destroy_after is 1.
			if (alm.addons.preloaded === 'true' && alm.destroy_after === 1) {
				alm.AjaxLoadMore.destroyed();
			}

			if (!alm.addons.paging && !alm.addons.single_post) {
				if (alm.disable_ajax) {
					alm.finished = true;
					alm.button.classList.add('done');
				} else {
					// Set button label.
					alm.button.innerHTML = alm.button_label;

					// If Pause.
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

					// Set loading flag to false.
					alm.loading = false;

					// Display Table of Contents
					tableOfContents(alm, true, true);
				}, 200);
			}

			// Preloaded + SEO && !Paging.
			if (alm.addons.preloaded === 'true' && alm.addons.seo && !alm.addons.paging) {
				// Add delay for setup and scripts to load.
				setTimeout(function () {
					if (typeof almSEO === 'function' && alm.start_page < 1) {
						window.almSEO(alm, true);
					}
				}, 200);
			}

			// Preloaded && !Paging.
			if (alm.addons.preloaded === 'true' && !alm.addons.paging) {
				// Add delay for setup and scripts to load.
				setTimeout(function () {
					if (alm.addons.preloaded_total_posts <= parseInt(alm.addons.preloaded_amount)) {
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
			if (alm.addons.preloaded === 'true') {
				if (alm.resultsText) {
					almInitResultsText(alm, 'preloaded');
				}

				// Display Table of Contents.
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

				// Results Text.
				if (alm.resultsText) {
					almInitResultsText(alm, 'nextpage');
				}

				// Display Table of Contents.
				tableOfContents(alm, alm.init, true);
			}

			// WooCommerce Add-on.
			if (alm.addons.woocommerce) {
				wooInit(alm);

				// Trigger `Done` if `paged is less than `pages`.
				if (alm.addons.woocommerce_settings.paged >= parseInt(alm.addons.woocommerce_settings.pages)) {
					alm.AjaxLoadMore.triggerDone();
				}
			}

			// Elementor Add-on.
			if (alm.addons.elementor && alm.addons.elementor_type && alm.addons.elementor_type === 'posts') {
				elementorInit(alm);

				// Trigger `Done` if `elementor_next_page` is empty
				if (alm.addons.elementor_next_page === '') {
					alm.AjaxLoadMore.triggerDone();
				}
			}

			// Window Load.
			alm.window.addEventListener('load', function () {
				// Masonry & Preloaded.
				if (alm.transition === 'masonry' && alm.addons.preloaded === 'true') {
					// Wrap almMasonry in anonymous async/await function
					(async function () {
						await almMasonry(alm, true, false);
						alm.masonry.init = false;
					})().catch(() => {
						console.error('There was an error with ALM Masonry');
					});
				}

				//  Filters, Facets & Preloaded Facets
				if (alm.addons.preloaded === 'true' && alm.addons.filters && alm.facets) {
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
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.error('Error Msg: ', error.message);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of ClientRequest in node.js
				console.error(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
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

			let data = '';
			let target = '';

			if (alm.addons.paging_init && alm.addons.preloaded === 'true') {
				// Paging + Preloaded Firstrun
				target = alm.listing.querySelector('.alm-reveal') || alm.listing.querySelector('.alm-nextpage');
				if (target) {
					data = target.innerHTML; // Get content
					target.parentNode.removeChild(target); // Remove target
					alm.addons.preloaded_amount = 0; // Reset preloaded
					alm.AjaxLoadMore.pagingPreloadedInit(data);
				}
				alm.addons.paging_init = false;
				alm.init = false;
			} else if (alm.addons.paging_init && alm.addons.nextpage) {
				// Paging + Next Page on firstrun
				target = alm.listing.querySelector('.alm-reveal') || alm.listing.querySelector('.alm-nextpage');
				if (target) {
					data = target.innerHTML; // Get content
					target.parentNode.removeChild(target); // Remove target
					alm.AjaxLoadMore.pagingNextpageInit(data);
				}
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
const getPostCount = function (id = '') {
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

}();
ajaxloadmore = __webpack_exports__;
/******/ })()
;