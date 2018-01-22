(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sandpit = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.3' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function _anObject(it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function _ctx(fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');

  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function setMeta(it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {} // weak collections IDs
      } });
  };
  var fastKey = function fastKey(it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }return it[META].i;
  };
  var getWeak = function getWeak(it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function onFreeze(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function _shared(key) {
  return store[key] || (store[key] = {});
};

var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var _Symbol = _global.Symbol;
  var USE_SYMBOL = typeof _Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var _library = false;

var defineProperty$1 = _objectDp.f;
var _wksDefine = function _wksDefine(name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: _wksExt.f(name) });
};

var toString = {}.toString;

var _cof = function _cof(it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function _toIobject(it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes


var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function _sharedKey(key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) _has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols


var _enumKeys = function _enumKeys(it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    _objectDp.f(O, P = keys[i++], Properties[P]);
  }return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
  }return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = _createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
  f: f$4
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
  f: f$5
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
  f: f$6
};

// ECMAScript 6 symbols shim


var META = _meta.KEY;

var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$2 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function get$$1() {
      return dP$1(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
} : dP$1;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty$1 = function defineProperty$$1(it, key, D) {
  if (it === ObjectProto) $defineProperty$1(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty$1(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create$$1(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$2(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN$2(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty$1;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  _wks(es6Symbols[j++]);
}for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
  _wksDefine(wellKnownSymbols[k++]);
}_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty$1,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperties: _objectDps });

// most Object methods by ES6 should accept primitives


var _objectSap = function _objectSap(KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () {
    fn(1);
  }), 'Object', exp);
};

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

// 7.1.13 ToObject(argument)

var _toObject = function _toObject(it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto$1 : null;
};

// 19.1.2.9 Object.getPrototypeOf(O)


_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf$$1(it) {
    return _objectGpo(_toObject(it));
  };
});

// 19.1.2.14 Object.keys(O)


_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

// 19.1.2.5 Object.freeze(O)

var meta$1 = _meta.onFreeze;

_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && _isObject(it) ? $freeze(meta$1(it)) : it;
  };
});

// 19.1.2.17 Object.seal(O)

var meta$2 = _meta.onFreeze;

_objectSap('seal', function ($seal) {
  return function seal(it) {
    return $seal && _isObject(it) ? $seal(meta$2(it)) : it;
  };
});

// 19.1.2.15 Object.preventExtensions(O)

var meta$3 = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$3(it)) : it;
  };
});

// 19.1.2.12 Object.isFrozen(O)


_objectSap('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

// 19.1.2.13 Object.isSealed(O)


_objectSap('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

// 19.1.2.11 Object.isExtensible(O)


_objectSap('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

// 19.1.2.1 Object.assign(target, source, ...)


var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// 19.1.3.10 Object.is(value1, value2)

_export(_export.S, 'Object', { is: _sameValue });

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function check(O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
  // builtinTag case
  : ARG ? _cof(O)
  // ES3 arguments fallback
  : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()

var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + _classof(this) + ']';
  }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function _invoke(fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /* , ...args */) {
  var fn = _aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function bound() /* args... */{
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
  };
  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


_export(_export.P, 'Function', { bind: _bind });

var dP$2 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || _descriptors && dP$2(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

var HAS_INSTANCE = _wks('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
    if (typeof this != 'function' || !_isObject(O)) return false;
    if (!_isObject(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = _objectGpo(O)) {
      if (this.prototype === O) return true;
    }return false;
  } });

var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200B\x85';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseInt = _global.parseInt;
var $trim = _stringTrim.trim;

var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

// 18.2.5 parseInt(string, radix)
_export(_export.G + _export.F * (parseInt != _parseInt), { parseInt: _parseInt });

var $parseFloat = _global.parseFloat;
var $trim$1 = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$1(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 18.2.4 parseFloat(string)
_export(_export.G + _export.F * (parseFloat != _parseFloat), { parseFloat: _parseFloat });

var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }return that;
};

var gOPN$3 = _objectGopn.f;
var gOPD$2 = _objectGopd.f;
var dP$3 = _objectDp.f;
var $trim$2 = _stringTrim.trim;
var NUMBER = 'Number';
var $Number = _global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
  var it = _toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:case 98:
          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
        case 79:case 111:
          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
        default:
          return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      }return parseInt(digits, radix);
    }
  }return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
    // check on 1..constructor(foo) case
    && (BROKEN_COF ? _fails(function () {
      proto.valueOf.call(that);
    }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = _descriptors ? gOPN$3(Base) : (
  // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
    if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
      dP$3($Number, key, gOPD$2(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _redefine(_global, NUMBER, $Number);
}

var _aNumberValue = function _aNumberValue(it, msg) {
  if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

var _stringRepeat = function repeat(count) {
  var str = String(_defined(this));
  var res = '';
  var n = _toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }return res;
};

var $toFixed = 1.0.toFixed;
var floor$1 = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function divide(n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor$1(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function numToString() {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
    }
  }return s;
};
var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function log(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }return n;
};

_export(_export.P + _export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_fails(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = _aNumberValue(this, ERROR);
    var f = _toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + _stringRepeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }return m;
  }
});

var $toPrecision = 1.0.toPrecision;

_export(_export.P + _export.F * (_fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !_fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

// 20.1.2.1 Number.EPSILON


_export(_export.S, 'Number', { EPSILON: Math.pow(2, -52) });

// 20.1.2.2 Number.isFinite(number)

var _isFinite = _global.isFinite;

_export(_export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

// 20.1.2.3 Number.isInteger(number)

var floor$2 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$2(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

// 20.1.2.4 Number.isNaN(number)


_export(_export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

// 20.1.2.5 Number.isSafeInteger(number)


var abs = Math.abs;

_export(_export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

// 20.1.2.6 Number.MAX_SAFE_INTEGER


_export(_export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

// 20.1.2.10 Number.MIN_SAFE_INTEGER


_export(_export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

// 20.1.2.13 Number.parseInt(string, radix)
_export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', { parseInt: _parseInt });

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

// 20.2.2.3 Math.acosh(x)


var sqrt = Math.sqrt;
var $acosh = Math.acosh;

_export(_export.S + _export.F * !($acosh
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710
// Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

// 20.2.2.5 Math.asinh(x)

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
_export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

// 20.2.2.7 Math.atanh(x)

var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
_export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

// 20.2.2.9 Math.cbrt(x)


_export(_export.S, 'Math', {
  cbrt: function cbrt(x) {
    return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

// 20.2.2.11 Math.clz32(x)


_export(_export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

// 20.2.2.12 Math.cosh(x)

var exp = Math.exp;

_export(_export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
var _mathExpm1 = !$expm1
// Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
// Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

// 20.2.2.14 Math.expm1(x)


_export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', { expm1: _mathExpm1 });

// 20.2.2.16 Math.fround(x)

var pow$1 = Math.pow;
var EPSILON = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
var MIN32 = pow$1(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

var _mathFround = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = _mathSign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

// 20.2.2.16 Math.fround(x)


_export(_export.S, 'Math', { fround: _mathFround });

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

var abs$1 = Math.abs;

_export(_export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs$1(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

// 20.2.2.18 Math.imul(x, y)

var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
_export(_export.S + _export.F * _fails(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

// 20.2.2.21 Math.log10(x)


_export(_export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

// 20.2.2.20 Math.log1p(x)


_export(_export.S, 'Math', { log1p: _mathLog1p });

// 20.2.2.22 Math.log2(x)


_export(_export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

// 20.2.2.28 Math.sign(x)


_export(_export.S, 'Math', { sign: _mathSign });

// 20.2.2.30 Math.sinh(x)


var exp$1 = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
_export(_export.S + _export.F * _fails(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (_mathExpm1(x) - _mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

// 20.2.2.33 Math.tanh(x)


var exp$2 = Math.exp;

_export(_export.S, 'Math', {
  tanh: function tanh(x) {
    var a = _mathExpm1(x = +x);
    var b = _mathExpm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

// 20.2.2.34 Math.trunc(x)


_export(_export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }return res.join('');
  }
});

_export(_export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = _toIobject(callSite.raw);
    var len = _toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }return res.join('');
  }
});

// 21.1.3.25 String.prototype.trim()
_stringTrim('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = !BUGGY && $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var $at$1 = _stringAt(false);
_export(_export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at$1(this, pos);
  }
});

// 7.2.8 IsRegExp(argument)


var MATCH = _wks('match');
var _isRegexp = function _isRegexp(it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// helper for String#{startsWith, endsWith, includes}


var _stringContext = function _stringContext(that, searchString, NAME) {
  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(_defined(that));
};

var MATCH$1 = _wks('match');
var _failsIsRegexp = function _failsIsRegexp(KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }return true;
};

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = _stringContext(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = _toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

var INCLUDES = 'includes';

_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_export(_export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _stringRepeat
});

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = _stringContext(this, searchString, STARTS_WITH);
    var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(_defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function _stringHtml(NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  _export(_export.P + _export.F * _fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

// B.2.3.2 String.prototype.anchor(name)
_stringHtml('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

// B.2.3.3 String.prototype.big()
_stringHtml('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

// B.2.3.4 String.prototype.blink()
_stringHtml('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

// B.2.3.5 String.prototype.bold()
_stringHtml('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

// B.2.3.6 String.prototype.fixed()
_stringHtml('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

// B.2.3.7 String.prototype.fontcolor(color)
_stringHtml('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

// B.2.3.8 String.prototype.fontsize(size)
_stringHtml('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

// B.2.3.9 String.prototype.italics()
_stringHtml('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

// B.2.3.10 String.prototype.link(url)
_stringHtml('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

// B.2.3.11 String.prototype.small()
_stringHtml('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

// B.2.3.12 String.prototype.strike()
_stringHtml('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

// B.2.3.13 String.prototype.sub()
_stringHtml('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

// B.2.3.14 String.prototype.sup()
_stringHtml('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

// 20.3.3.1 / 15.9.4.4 Date.now()


_export(_export.S, 'Date', { now: function now() {
    return new Date().getTime();
  } });

_export(_export.P + _export.F * _fails(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
      return 1;
    } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = _toObject(this);
    var pv = _toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
var _dateToIsoString = _fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !_fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()


// PhantomJS / old WebKit has a broken implementations
_export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
  toISOString: _dateToIsoString
});

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime$1 = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  _redefine(DateProto, TO_STRING, function toString() {
    var value = getTime$1.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

var NUMBER$1 = 'number';

var _dateToPrimitive = function _dateToPrimitive(hint) {
  if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
  return _toPrimitive(_anObject(this), hint != NUMBER$1);
};

var TO_PRIMITIVE$1 = _wks('toPrimitive');
var proto$1 = Date.prototype;

if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


_export(_export.S, 'Array', { isArray: _isArray });

// call something on iterator step with safe closing on error

var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function _createProperty(object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  
} catch (e) {/* empty */}

var _iterDetect = function _iterDetect(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR$3] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) {
  
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

// WebKit Array.of isn't generic
_export(_export.S + _export.F * _fails(function () {
  function F() {/* empty */}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of() /* ...args */{
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) {
      _createProperty(result, index, arguments[index++]);
    }result.length = aLen;
    return result;
  }
});

var _strictMethod = function _strictMethod(method, arg) {
  return !!method && _fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
  });
};

// 22.1.3.13 Array.prototype.join(separator)


var arrayJoin = [].join;

// fallback for not array-like strings
_export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
  }
});

var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
_export(_export.P + _export.F * _fails(function () {
  if (_html) arraySlice$1.call(_html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = _toLength(this.length);
    var klass = _cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice$1.call(this, begin, end);
    var start = _toAbsoluteIndex(begin, len);
    var upTo = _toAbsoluteIndex(end, len);
    var size = _toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }return cloned;
  }
});

var $sort = [].sort;
var test$1 = [1, 2, 3];

_export(_export.P + _export.F * (_fails(function () {
  // IE8-
  test$1.sort(undefined);
}) || !_fails(function () {
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
  }
});

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex


var _arrayMethods = function _arrayMethods(TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var $forEach = _arrayMethods(0);
var STRICT = _strictMethod([].forEach, true);

_export(_export.P + _export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var $map = _arrayMethods(1);

_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

var $filter = _arrayMethods(2);

_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $some = _arrayMethods(3);

_export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

var $every = _arrayMethods(4);

_export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
  _aFunction(callbackfn);
  var O = _toObject(that);
  var self = _iobject(O);
  var length = _toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }return memo;
};

_export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

_export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $indexOf = _arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

var $native$1 = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
    var O = _toIobject(this);
    var length = _toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }return -1;
  }
});

var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = _toObject(this);
  var len = _toLength(O.length);
  var to = _toAbsoluteIndex(target, len);
  var from = _toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }return O;
};

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto$1 = Array.prototype;
if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function _addToUnscopables(key) {
  ArrayProto$1[UNSCOPABLES][key] = true;
};

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


_export(_export.P, 'Array', { copyWithin: _arrayCopyWithin });

_addToUnscopables('copyWithin');

var _arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = _toObject(this);
  var length = _toLength(O.length);
  var aLen = arguments.length;
  var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
  while (endPos > index) {
    O[index++] = value;
  }return O;
};

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


_export(_export.P, 'Array', { fill: _arrayFill });

_addToUnscopables('fill');

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $find = _arrayMethods(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
_export(_export.P + _export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY);

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $find$1 = _arrayMethods(6);
var KEY$1 = 'findIndex';
var forced$1 = true;
// Shouldn't skip holes
if (KEY$1 in []) Array(1)[KEY$1](function () {
  forced$1 = false;
});
_export(_export.P + _export.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY$1);

var SPECIES$1 = _wks('species');

var _setSpecies = function _setSpecies(KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

_setSpecies('Array');

var _iterStep = function _iterStep(done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

// 21.2.5.3 get RegExp.prototype.flags

var _flags = function _flags() {
  var that = _anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var dP$4 = _objectDp.f;
var gOPN$4 = _objectGopn.f;

var $RegExp = _global.RegExp;
var Base$1 = $RegExp;
var proto$2 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_descriptors && (!CORRECT_NEW || _fails(function () {
  re2[_wks('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = _isRegexp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p, f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
  };
  var proxy = function proxy(key) {
    key in $RegExp || dP$4($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base$1[key];
      },
      set: function set(it) {
        Base$1[key] = it;
      }
    });
  };
  for (var keys$1 = gOPN$4(Base$1), i = 0; keys$1.length > i;) {
    proxy(keys$1[i++]);
  }proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  _redefine(_global, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

// 21.2.5.3 get RegExp.prototype.flags()
if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
});

var TO_STRING$1 = 'toString';
var $toString$1 = /./[TO_STRING$1];

var define = function define(fn) {
  _redefine(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_fails(function () {
  return $toString$1.call({ source: 'a', flags: 'b' }) != '/a/b';
})) {
  define(function toString() {
    var R = _anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString$1.name != TO_STRING$1) {
  define(function toString() {
    return $toString$1.call(this);
  });
}

var _fixReWks = function _fixReWks(KEY, length, exec) {
  var SYMBOL = _wks(KEY);
  var fns = exec(_defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (_fails(function () {
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  })) {
    _redefine(String.prototype, KEY, strfn);
    _hide(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

// @@match logic
_fixReWks('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

// @@replace logic
_fixReWks('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

// @@search logic
_fixReWks('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split) {
  var isRegExp = _isRegexp;
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function $split(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function $split(separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : core_getIteratorMethod(iterable);
    var f = _ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
      result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = _iterCall(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$2 = _wks('species');
var _speciesConstructor = function _speciesConstructor(O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES$2]) == undefined ? D : _aFunction(S);
};

var process = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(_ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(_ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function defer(id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function defer(id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$1 = _global.process;
var Promise$1 = _global.Promise;
var isNode = _cof(process$1) == 'process';

var _microtask = function _microtask() {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function notify() {
      process$1.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$7 = function f(C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
  f: f$7
};

var _perform = function _perform(exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _promiseResolve = function _promiseResolve(C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll = function _redefineAll(target, src, safe) {
  for (var key in src) {
    _redefine(target, key, src[key], safe);
  }return target;
};

var task = _task.set;
var microtask = _microtask();

var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process$2 = _global.process;
var $Promise = _global[PROMISE];
var isNode$1 = _classof(process$2) == 'process';
var empty = function empty() {/* empty */};
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability$1 = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$1) {
          process$2.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$1) {
      process$2.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process$2.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability$1 = function newPromiseCapability$$1(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

var _validateCollection = function _validateCollection(it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var dP$5 = _objectDp.f;

var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = _objectCreate(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = _validateCollection(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors) dP$5(C.prototype, 'size', {
      get: function get() {
        return _validateCollection(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key, // <- key
        v: value, // <- value
        p: prev = that._l, // <- previous entry
        n: undefined, // <- next entry
        r: false // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    _iterDefine(C, NAME, function (iterated, kind) {
      this._t = _validateCollection(iterated, NAME); // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return _iterStep(1);
      }
      // return step by kind
      if (kind == 'keys') return _iterStep(0, entry.k);
      if (kind == 'values') return _iterStep(0, entry.v);
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    _redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = _fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = _iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && _fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        _anInstance(target, C, NAME);
        var that = _inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

var SET = 'Set';

// 23.2 Set Objects
var es6_set = _collection(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
  }
}, _collectionStrong);

var getWeak = _meta.getWeak;

var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = id$1++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var es6_weakMap = createCommonjsModule(function (module) {
  var each = _arrayMethods(0);

  var WEAK_MAP = 'WeakMap';
  var getWeak = _meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = _collectionWeak.ufstore;
  var tmp = {};
  var InternalMap;

  var wrapper = function wrapper(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (_isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

  // IE11 WeakMap frozen keys fix
  if (_fails(function () {
    return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
  })) {
    InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
    _objectAssign(InternalMap.prototype, methods);
    _meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      _redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (_isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
          // store all the rest on native weakmap
        }return method.call(this, a, b);
      });
    });
  }
});

var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
_collection(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
  }
}, _collectionWeak, false, true);

var TYPED = _uid('typed_array');
var VIEW = _uid('view');
var ABV = !!(_global.ArrayBuffer && _global.DataView);
var CONSTR = ABV;
var i$1 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i$1 < l) {
  if (Typed = _global[TypedArrayConstructors[i$1++]]) {
    _hide(Typed.prototype, TYPED, true);
    _hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

var _typed = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

// https://tc39.github.io/ecma262/#sec-toindex


var _toIndex = function _toIndex(it) {
  if (it === undefined) return 0;
  var number = _toInteger(it);
  var length = _toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

var _typedBuffer = createCommonjsModule(function (module, exports) {
  var gOPN = _objectGopn.f;
  var dP = _objectDp.f;

  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length!';
  var WRONG_INDEX = 'Wrong index!';
  var $ArrayBuffer = _global[ARRAY_BUFFER];
  var $DataView = _global[DATA_VIEW];
  var Math = _global.Math;
  var RangeError = _global.RangeError;
  // eslint-disable-next-line no-shadow-restricted-names
  var Infinity = _global.Infinity;
  var BaseBuffer = $ArrayBuffer;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;
  var BUFFER = 'buffer';
  var BYTE_LENGTH = 'byteLength';
  var BYTE_OFFSET = 'byteOffset';
  var $BUFFER = _descriptors ? '_b' : BUFFER;
  var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
  var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET;

  // IEEE754 conversions based on https://github.com/feross/ieee754
  function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value);
    // eslint-disable-next-line no-self-compare
    if (value != value || value === Infinity) {
      // eslint-disable-next-line no-self-compare
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
    buffer[--i] |= s * 128;
    return buffer;
  }
  function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;
    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }return (s ? -1 : 1) * m * pow(2, e - mLen);
  }

  function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  }
  function packI8(it) {
    return [it & 0xff];
  }
  function packI16(it) {
    return [it & 0xff, it >> 8 & 0xff];
  }
  function packI32(it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  }
  function packF64(it) {
    return packIEEE754(it, 52, 8);
  }
  function packF32(it) {
    return packIEEE754(it, 23, 4);
  }

  function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, { get: function get() {
        return this[internal];
      } });
  }

  function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = _toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  }
  function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = _toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);
    for (var i = 0; i < bytes; i++) {
      store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }
  }

  if (!_typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = _toIndex(length);
      this._b = _arrayFill.call(new Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      _anInstance(this, $DataView, DATA_VIEW);
      _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH];
      var offset = _toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if (_descriptors) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    _redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!_fails(function () {
      $ArrayBuffer(1);
    }) || !_fails(function () {
      new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || _fails(function () {
      new $ArrayBuffer(); // eslint-disable-line no-new
      new $ArrayBuffer(1.5); // eslint-disable-line no-new
      new $ArrayBuffer(NaN); // eslint-disable-line no-new
      return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer);
        return new BaseBuffer(_toIndex(length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
      }
      if (!_library) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  _setToStringTag($DataView, DATA_VIEW);
  _hide($DataView[PROTOTYPE], _typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
});

var ArrayBuffer$1 = _global.ArrayBuffer;

var $ArrayBuffer = _typedBuffer.ArrayBuffer;
var $DataView = _typedBuffer.DataView;
var $isView = _typed.ABV && ArrayBuffer$1.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW$1 = _typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

_export(_export.G + _export.W + _export.F * (ArrayBuffer$1 !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

_export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
  }
});

_export(_export.P + _export.U + _export.F * _fails(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(_anObject(this), start); // FF fix
    var len = _anObject(this).byteLength;
    var first = _toAbsoluteIndex(start, len);
    var final = _toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }return result;
  }
});

_setSpecies(ARRAY_BUFFER);

_export(_export.G + _export.W + _export.F * !_typed.ABV, {
  DataView: _typedBuffer.DataView
});

var _typedArray = createCommonjsModule(function (module) {
  if (_descriptors) {
    var LIBRARY = _library;
    var global = _global;
    var fails = _fails;
    var $export = _export;
    var $typed = _typed;
    var $buffer = _typedBuffer;
    var ctx = _ctx;
    var anInstance = _anInstance;
    var propertyDesc = _propertyDesc;
    var hide = _hide;
    var redefineAll = _redefineAll;
    var toInteger = _toInteger;
    var toLength = _toLength;
    var toIndex = _toIndex;
    var toAbsoluteIndex = _toAbsoluteIndex;
    var toPrimitive = _toPrimitive;
    var has = _has;
    var classof = _classof;
    var isObject = _isObject;
    var toObject = _toObject;
    var isArrayIter = _isArrayIter;
    var create = _objectCreate;
    var getPrototypeOf = _objectGpo;
    var gOPN = _objectGopn.f;
    var getIterFn = core_getIteratorMethod;
    var uid = _uid;
    var wks = _wks;
    var createArrayMethod = _arrayMethods;
    var createArrayIncludes = _arrayIncludes;
    var speciesConstructor = _speciesConstructor;
    var ArrayIterators = es6_array_iterator;
    var Iterators = _iterators;
    var $iterDetect = _iterDetect;
    var setSpecies = _setSpecies;
    var arrayFill = _arrayFill;
    var arrayCopyWithin = _arrayCopyWithin;
    var $DP = _objectDp;
    var $GOPD = _objectGopd;
    var dP = $DP.f;
    var gOPD = $GOPD.f;
    var RangeError = global.RangeError;
    var TypeError = global.TypeError;
    var Uint8Array = global.Uint8Array;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
    var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
    var PROTOTYPE = 'prototype';
    var ArrayProto = Array[PROTOTYPE];
    var $ArrayBuffer = $buffer.ArrayBuffer;
    var $DataView = $buffer.DataView;
    var arrayForEach = createArrayMethod(0);
    var arrayFilter = createArrayMethod(2);
    var arraySome = createArrayMethod(3);
    var arrayEvery = createArrayMethod(4);
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var arrayIncludes = createArrayIncludes(true);
    var arrayIndexOf = createArrayIncludes(false);
    var arrayValues = ArrayIterators.values;
    var arrayKeys = ArrayIterators.keys;
    var arrayEntries = ArrayIterators.entries;
    var arrayLastIndexOf = ArrayProto.lastIndexOf;
    var arrayReduce = ArrayProto.reduce;
    var arrayReduceRight = ArrayProto.reduceRight;
    var arrayJoin = ArrayProto.join;
    var arraySort = ArrayProto.sort;
    var arraySlice = ArrayProto.slice;
    var arrayToString = ArrayProto.toString;
    var arrayToLocaleString = ArrayProto.toLocaleString;
    var ITERATOR = wks('iterator');
    var TAG = wks('toStringTag');
    var TYPED_CONSTRUCTOR = uid('typed_constructor');
    var DEF_CONSTRUCTOR = uid('def_constructor');
    var ALL_CONSTRUCTORS = $typed.CONSTR;
    var TYPED_ARRAY = $typed.TYPED;
    var VIEW = $typed.VIEW;
    var WRONG_LENGTH = 'Wrong length!';

    var $map = createArrayMethod(1, function (O, length) {
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });

    var LITTLE_ENDIAN = fails(function () {
      // eslint-disable-next-line no-undef
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });

    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
      new Uint8Array(1).set({});
    });

    var toOffset = function toOffset(it, BYTES) {
      var offset = toInteger(it);
      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
      return offset;
    };

    var validate = function validate(it) {
      if (isObject(it) && TYPED_ARRAY in it) return it;
      throw TypeError(it + ' is not a typed array!');
    };

    var allocate = function allocate(C, length) {
      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
        throw TypeError('It is not a typed array constructor!');
      }return new C(length);
    };

    var speciesFromList = function speciesFromList(O, list) {
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };

    var fromList = function fromList(C, list) {
      var index = 0;
      var length = list.length;
      var result = allocate(C, length);
      while (length > index) {
        result[index] = list[index++];
      }return result;
    };

    var addGetter = function addGetter(it, key, internal) {
      dP(it, key, { get: function get$$1() {
          return this._d[internal];
        } });
    };

    var $from = function from(source /* , mapfn, thisArg */) {
      var O = toObject(source);
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iterFn = getIterFn(O);
      var i, length, values, result, step, iterator;
      if (iterFn != undefined && !isArrayIter(iterFn)) {
        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
          values.push(step.value);
        }O = values;
      }
      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };

    var $of = function of() /* ...items */{
      var index = 0;
      var length = arguments.length;
      var result = allocate(this, length);
      while (length > index) {
        result[index] = arguments[index++];
      }return result;
    };

    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
      arrayToLocaleString.call(new Uint8Array(1));
    });

    var $toLocaleString = function toLocaleString() {
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };

    var proto = {
      copyWithin: function copyWithin(target, start /* , end */) {
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn /* , thisArg */) {
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value /* , start, end */) {
        // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn /* , thisArg */) {
        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate /* , thisArg */) {
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate /* , thisArg */) {
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn /* , thisArg */) {
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement /* , fromIndex */) {
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement /* , fromIndex */) {
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator) {
        // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
        // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn /* , thisArg */) {
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn /* , initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn /* , initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse() {
        var that = this;
        var length = validate(that).length;
        var middle = Math.floor(length / 2);
        var index = 0;
        var value;
        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }return that;
      },
      some: function some(callbackfn /* , thisArg */) {
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn) {
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end) {
        var O = validate(this);
        var length = O.length;
        var $begin = toAbsoluteIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
      }
    };

    var $slice = function slice(start, end) {
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };

    var $set = function set$$1(arrayLike /* , offset */) {
      validate(this);
      var offset = toOffset(arguments[1], 1);
      var length = this.length;
      var src = toObject(arrayLike);
      var len = toLength(src.length);
      var index = 0;
      if (len + offset > length) throw RangeError(WRONG_LENGTH);
      while (index < len) {
        this[offset + index] = src[index++];
      }
    };

    var $iterators$$1 = {
      entries: function entries() {
        return arrayEntries.call(validate(this));
      },
      keys: function keys() {
        return arrayKeys.call(validate(this));
      },
      values: function values() {
        return arrayValues.call(validate(this));
      }
    };

    var isTAIndex = function isTAIndex(target, key) {
      return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty$$1(target, key, desc) {
      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
        target[key] = desc.value;
        return target;
      }return dP(target, key, desc);
    };

    if (!ALL_CONSTRUCTORS) {
      $GOPD.f = $getDesc;
      $DP.f = $setDesc;
    }

    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty: $setDesc
    });

    if (fails(function () {
      arrayToString.call({});
    })) {
      arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      };
    }

    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators$$1);
    hide($TypedArrayPrototype$, ITERATOR, $iterators$$1.values);
    redefineAll($TypedArrayPrototype$, {
      slice: $slice,
      set: $set,
      constructor: function constructor() {/* noop */},
      toString: arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function get$$1() {
        return this[TYPED_ARRAY];
      }
    });

    // eslint-disable-next-line max-statements
    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
      CLAMPED = !!CLAMPED;
      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + KEY;
      var SETTER = 'set' + KEY;
      var TypedArray = global[NAME];
      var Base = TypedArray || {};
      var TAC = TypedArray && getPrototypeOf(TypedArray);
      var FORCED = !TypedArray || !$typed.ABV;
      var O = {};
      var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function getter(that, index) {
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function setter(that, index, value) {
        var data = that._d;
        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function addElement(that, index) {
        dP(that, index, {
          get: function get$$1() {
            return getter(this, index);
          },
          set: function set$$1(value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (FORCED) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME, '_d');
          var index = 0;
          var offset = 0;
          var buffer, byteLength, length, klass;
          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new $ArrayBuffer(byteLength);
          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (TYPED_ARRAY in data) {
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while (index < length) {
            addElement(that, index++);
          }
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if (!fails(function () {
        TypedArray(1);
      }) || !fails(function () {
        new TypedArray(-1); // eslint-disable-line no-new
      }) || !$iterDetect(function (iter) {
        new TypedArray(); // eslint-disable-line no-new
        new TypedArray(null); // eslint-disable-line no-new
        new TypedArray(1.5); // eslint-disable-line no-new
        new TypedArray(iter); // eslint-disable-line no-new
      }, true)) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME);
          var klass;
          // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645
          if (!isObject(data)) return new Base(toIndex(data));
          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
          }
          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator = TypedArrayPrototype[ITERATOR];
      var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
      var $iterator = $iterators$$1.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
        dP(TypedArrayPrototype, TAG, {
          get: function get$$1() {
            return NAME;
          }
        });
      }

      O[NAME] = TypedArray;

      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES
      });

      $export($export.S + $export.F * fails(function () {
        Base.of.call(TypedArray, 1);
      }), NAME, {
        from: $from,
        of: $of
      });

      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

      $export($export.P, NAME, proto);

      setSpecies(NAME);

      $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators$$1);

      if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

      $export($export.P + $export.F * fails(function () {
        new TypedArray(1).slice();
      }), NAME, { slice: $slice });

      $export($export.P + $export.F * (fails(function () {
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
      }) || !fails(function () {
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, { toLocaleString: $toLocaleString });

      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function () {/* empty */};
});

_typedArray('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

_typedArray('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)


var rApply = (_global.Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
_export(_export.S + _export.F * !_fails(function () {
  rApply(function () {/* empty */});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = _aFunction(target);
    var L = _anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])


var rConstruct = (_global.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = _fails(function () {
  function F() {/* empty */}
  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);
});
var ARGS_BUG = !_fails(function () {
  rConstruct(function () {/* empty */});
});

_export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    _aFunction(Target);
    _anObject(args);
    var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (_bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return _isObject(result) ? result : instance;
  }
});

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)


// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
_export(_export.S + _export.F * _fails(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(_objectDp.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    _anObject(target);
    propertyKey = _toPrimitive(propertyKey, true);
    _anObject(attributes);
    try {
      _objectDp.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// 26.1.4 Reflect.deleteProperty(target, propertyKey)

var gOPD$3 = _objectGopd.f;

_export(_export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD$3(_anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

// 26.1.5 Reflect.enumerate(target)


var Enumerate = function Enumerate(iterated) {
  this._t = _anObject(iterated); // target
  this._i = 0; // next index
  var keys = this._k = []; // keys
  var key;
  for (key in iterated) {
    keys.push(key);
  }
};
_iterCreate(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

_export(_export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

// 26.1.6 Reflect.get(target, propertyKey [, receiver])


function get$1(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (_anObject(target) === receiver) return target[propertyKey];
  if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (_isObject(proto = _objectGpo(target))) return get$1(proto, propertyKey, receiver);
}

_export(_export.S, 'Reflect', { get: get$1 });

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)


_export(_export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return _objectGopd.f(_anObject(target), propertyKey);
  }
});

// 26.1.8 Reflect.getPrototypeOf(target)


_export(_export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return _objectGpo(_anObject(target));
  }
});

// 26.1.9 Reflect.has(target, propertyKey)


_export(_export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

// 26.1.10 Reflect.isExtensible(target)


var $isExtensible = Object.isExtensible;

_export(_export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    _anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

// all object keys, includes non-enumerable and symbols


var Reflect$1 = _global.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
  var keys = _objectGopn.f(_anObject(it));
  var getSymbols = _objectGops.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

// 26.1.11 Reflect.ownKeys(target)


_export(_export.S, 'Reflect', { ownKeys: _ownKeys });

// 26.1.12 Reflect.preventExtensions(target)


var $preventExtensions = Object.preventExtensions;

_export(_export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    _anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])


function set$1(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (_isObject(proto = _objectGpo(target))) {
      return set$1(proto, propertyKey, V, receiver);
    }
    ownDesc = _propertyDesc(0);
  }
  if (_has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !_isObject(receiver)) return false;
    existingDescriptor = _objectGopd.f(receiver, propertyKey) || _propertyDesc(0);
    existingDescriptor.value = V;
    _objectDp.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

_export(_export.S, 'Reflect', { set: set$1 });

// 26.1.14 Reflect.setPrototypeOf(target, proto)


if (_setProto) _export(_export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    _setProto.check(target, proto);
    try {
      _setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

// https://github.com/tc39/Array.prototype.includes

var $includes = _arrayIncludes(true);

_export(_export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_addToUnscopables('includes');

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (_isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

var _flattenIntoArray = flattenIntoArray;

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap


_export(_export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = _toObject(this);
    var sourceLen, A;
    _aFunction(callbackfn);
    sourceLen = _toLength(O.length);
    A = _arraySpeciesCreate(O, 0);
    _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

_addToUnscopables('flatMap');

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten


_export(_export.P, 'Array', {
  flatten: function flatten() /* depthArg = 1 */{
    var depthArg = arguments[0];
    var O = _toObject(this);
    var sourceLen = _toLength(O.length);
    var A = _arraySpeciesCreate(O, 0);
    _flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : _toInteger(depthArg));
    return A;
  }
});

_addToUnscopables('flatten');

// https://github.com/mathiasbynens/String.prototype.at

var $at$2 = _stringAt(true);

_export(_export.P, 'String', {
  at: function at(pos) {
    return $at$2(this, pos);
  }
});

// https://github.com/tc39/proposal-string-pad-start-end


var _stringPad = function _stringPad(that, maxLength, fillString, left) {
  var S = String(_defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = _toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

var navigator = _global.navigator;

var _userAgent = navigator && navigator.userAgent || '';

// https://github.com/tc39/proposal-string-pad-start-end


// https://github.com/zloirock/core-js/issues/280
_export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

// https://github.com/tc39/proposal-string-pad-start-end


// https://github.com/zloirock/core-js/issues/280
_export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

// https://tc39.github.io/String.prototype.matchAll/


var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
  this._r = regexp;
  this._s = string;
};

_iterCreate($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

_export(_export.P, 'String', {
  matchAll: function matchAll(regexp) {
    _defined(this);
    if (!_isRegexp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : _flags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = _toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

_wksDefine('asyncIterator');

_wksDefine('observable');

// https://github.com/tc39/proposal-object-getownpropertydescriptors


_export(_export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = _toIobject(object);
    var getDesc = _objectGopd.f;
    var keys = _ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) _createProperty(result, key, desc);
    }
    return result;
  }
});

var isEnum$1 = _objectPie.f;
var _objectToArray = function _objectToArray(isEntries) {
  return function (it) {
    var O = _toIobject(it);
    var keys = _objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      if (isEnum$1.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

// https://github.com/tc39/proposal-object-values-entries

var $values = _objectToArray(false);

_export(_export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

// https://github.com/tc39/proposal-object-values-entries

var $entries = _objectToArray(true);

_export(_export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

// Forced replacement prototype accessors methods
var _objectForcedPam = _library || !_fails(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () {/* empty */});
  delete _global[K];
});

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    _objectDp.f(_toObject(this), P, { get: _aFunction(getter), enumerable: true, configurable: true });
  }
});

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    _objectDp.f(_toObject(this), P, { set: _aFunction(setter), enumerable: true, configurable: true });
  }
});

var getOwnPropertyDescriptor = _objectGopd.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = _toObject(this);
    var K = _toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = _objectGpo(O));
  }
});

var getOwnPropertyDescriptor$1 = _objectGopd.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = _toObject(this);
    var K = _toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor$1(O, K)) return D.set;
    } while (O = _objectGpo(O));
  }
});

var _arrayFromIterable = function _arrayFromIterable(iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function _collectionToJson(NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Set', { toJSON: _collectionToJson('Set') });

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function _setCollectionOf(COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
_setCollectionOf('Set');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
_setCollectionOf('WeakSet');

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionFrom = function _setCollectionFrom(COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      _aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) _aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = _ctx(mapFn, arguments[2], 2);
        _forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        _forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
_setCollectionFrom('Set');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
_setCollectionFrom('WeakSet');

// https://github.com/tc39/proposal-global


_export(_export.G, { global: _global });

// https://github.com/tc39/proposal-global


_export(_export.S, 'System', { global: _global });

// https://github.com/ljharb/proposal-is-error


_export(_export.S, 'Error', {
  isError: function isError(it) {
    return _cof(it) === 'Error';
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


_export(_export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


_export(_export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

// https://rwaldron.github.io/proposal-math-extensions/

var RAD_PER_DEG = 180 / Math.PI;

_export(_export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

// https://rwaldron.github.io/proposal-math-extensions/
var _mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (arguments.length === 0
  // eslint-disable-next-line no-self-compare
  || x != x
  // eslint-disable-next-line no-self-compare
  || inLow != inLow
  // eslint-disable-next-line no-self-compare
  || inHigh != inHigh
  // eslint-disable-next-line no-self-compare
  || outLow != outLow
  // eslint-disable-next-line no-self-compare
  || outHigh != outHigh) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

// https://rwaldron.github.io/proposal-math-extensions/


_export(_export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return _mathFround(_mathScale(x, inLow, inHigh, outLow, outHigh));
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


_export(_export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

// https://rwaldron.github.io/proposal-math-extensions/

var DEG_PER_RAD = Math.PI / 180;

_export(_export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

// https://rwaldron.github.io/proposal-math-extensions/


_export(_export.S, 'Math', { scale: _mathScale });

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

// http://jfbastien.github.io/papers/Math.signbit.html


_export(_export.S, 'Math', { signbit: function signbit(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
  } });

_export(_export.P + _export.R, 'Promise', { 'finally': function _finally(onFinally) {
    var C = _speciesConstructor(this, _core.Promise || _global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return _promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return _promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  } });

// https://github.com/tc39/proposal-promise-try


_export(_export.S, 'Promise', { 'try': function _try(callbackfn) {
    var promiseCapability = _newPromiseCapability.f(this);
    var result = _perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

var shared$1 = _shared('metadata');
var store$1 = shared$1.store || (shared$1.store = new es6_weakMap());

var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
  var targetMetadata = store$1.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store$1.set(target, targetMetadata = new es6_map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new es6_map());
  }return keyMetadata;
};
var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) {
    keys.push(key);
  });
  return keys;
};
var toMetaKey = function toMetaKey(it) {
  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
};
var exp$3 = function exp(O) {
  _export(_export.S, 'Reflect', O);
};

var _metadata = {
  store: store$1,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp$3
};

var toMetaKey$1 = _metadata.key;
var ordinaryDefineOwnMetadata$1 = _metadata.set;

_metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
    ordinaryDefineOwnMetadata$1(metadataKey, metadataValue, _anObject(target), toMetaKey$1(targetKey));
  } });

var toMetaKey$2 = _metadata.key;
var getOrCreateMetadataMap$1 = _metadata.map;
var store$2 = _metadata.store;

_metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2]);
    var metadataMap = getOrCreateMetadataMap$1(_anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store$2.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store$2['delete'](target);
  } });

var ordinaryHasOwnMetadata$1 = _metadata.has;
var ordinaryGetOwnMetadata$1 = _metadata.get;
var toMetaKey$3 = _metadata.key;

var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
  var parent = _objectGpo(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

_metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetMetadata(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
  } });

var ordinaryOwnMetadataKeys$1 = _metadata.keys;
var toMetaKey$4 = _metadata.key;

var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
  var oKeys = ordinaryOwnMetadataKeys$1(O, P);
  var parent = _objectGpo(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? _arrayFromIterable(new es6_set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

_metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    return ordinaryMetadataKeys(_anObject(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
  } });

var ordinaryGetOwnMetadata$2 = _metadata.get;
var toMetaKey$5 = _metadata.key;

_metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetOwnMetadata$2(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
  } });

var ordinaryOwnMetadataKeys$2 = _metadata.keys;
var toMetaKey$6 = _metadata.key;

_metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    return ordinaryOwnMetadataKeys$2(_anObject(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
  } });

var ordinaryHasOwnMetadata$2 = _metadata.has;
var toMetaKey$7 = _metadata.key;

var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = _objectGpo(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

_metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasMetadata(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
  } });

var ordinaryHasOwnMetadata$3 = _metadata.has;
var toMetaKey$8 = _metadata.key;

_metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasOwnMetadata$3(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
  } });

var toMetaKey$9 = _metadata.key;
var ordinaryDefineOwnMetadata$2 = _metadata.set;

_metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, targetKey) {
      ordinaryDefineOwnMetadata$2(metadataKey, metadataValue, (targetKey !== undefined ? _anObject : _aFunction)(target), toMetaKey$9(targetKey));
    };
  } });

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask

var microtask$1 = _microtask();
var process$3 = _global.process;
var isNode$2 = _cof(process$3) == 'process';

_export(_export.G, {
  asap: function asap(fn) {
    var domain = isNode$2 && process$3.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});

// https://github.com/zenparsing/es-observable


var microtask$2 = _microtask();
var OBSERVABLE = _wks('observable');

var RETURN = _forOf.RETURN;

var getMethod = function getMethod(fn) {
  return fn == null ? undefined : _aFunction(fn);
};

var cleanupSubscription = function cleanupSubscription(subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function subscriptionClosed(subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function closeSubscription(subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function Subscription(observer, subscriber) {
  _anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
        subscription.unsubscribe();
      };else _aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  }if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = _redefineAll({}, {
  unsubscribe: function unsubscribe() {
    closeSubscription(this);
  }
});

var SubscriptionObserver = function SubscriptionObserver(subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = _redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    }cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  _anInstance(this, $Observable, 'Observable', '_f')._f = _aFunction(subscriber);
};

_redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (_core.Promise || _global.Promise)(function (resolve, reject) {
      _aFunction(fn);
      var subscription = that.subscribe({
        next: function next(value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

_redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(_anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = _anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask$2(function () {
        if (!done) {
          try {
            if (_forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) {
      items[i] = arguments[i++];
    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask$2(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  }
});

_hide($Observable.prototype, OBSERVABLE, function () {
  return this;
});

_export(_export.G, { Observable: $Observable });

_setSpecies('Observable');

// ie9- setTimeout & setInterval additional parameters fix


var slice = [].slice;
var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check
var wrap$1 = function wrap(set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
_export(_export.G + _export.B + _export.F * MSIE, {
  setTimeout: wrap$1(_global.setTimeout),
  setInterval: wrap$1(_global.setInterval)
});

_export(_export.G + _export.B, {
  setImmediate: _task.set,
  clearImmediate: _task.clear
});

var ITERATOR$4 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
  var NAME$1 = collections[i$2];
  var explicit = DOMIterables[NAME$1];
  var Collection = _global[NAME$1];
  var proto$3 = Collection && Collection.prototype;
  var key$1;
  if (proto$3) {
    if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
    if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
    _iterators[NAME$1] = ArrayValues;
    if (explicit) for (key$1 in es6_array_iterator) {
      if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
    }
  }
}

var runtime = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

  !function (global) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    var inModule = 'object' === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function (arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      if (_typeof(global.process) === "object" && global.process.domain) {
        invoke = global.process.domain.bind(invoke);
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    runtime.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[toStringTagSymbol] = "Generator";

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function stop() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  _typeof(commonjsGlobal) === "object" ? commonjsGlobal : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : commonjsGlobal);
});

var _replacer = function _replacer(regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

// https://github.com/benjamingr/RexExp.escape

var $re = _replacer(/[\\^$*+?.()|[\]{}]/g, '\\$&');

_export(_export.S, 'RegExp', { escape: function escape(it) {
    return $re(it);
  } });

var _escape = _core.RegExp.escape;

if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define$1(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define$1(String.prototype, "padLeft", "".padStart);
define$1(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define$1(Array, key, Function.call.bind([][key]));
});

var dat_gui = createCommonjsModule(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(commonjsGlobal, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _index = __webpack_require__(1);

				var _index2 = _interopRequireDefault(_index);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				exports.default = _index2.default; /**
                                        * dat-gui JavaScript Controller Library
                                        * http://code.google.com/p/dat-gui
                                        *
                                        * Copyright 2011 Data Arts Team, Google Creative Lab
                                        *
                                        * Licensed under the Apache License, Version 2.0 (the "License");
                                        * you may not use this file except in compliance with the License.
                                        * You may obtain a copy of the License at
                                        *
                                        * http://www.apache.org/licenses/LICENSE-2.0
                                        */

				module.exports = exports['default'];

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Color = __webpack_require__(2);

				var _Color2 = _interopRequireDefault(_Color);

				var _math = __webpack_require__(6);

				var _math2 = _interopRequireDefault(_math);

				var _interpret = __webpack_require__(3);

				var _interpret2 = _interopRequireDefault(_interpret);

				var _Controller = __webpack_require__(7);

				var _Controller2 = _interopRequireDefault(_Controller);

				var _BooleanController = __webpack_require__(8);

				var _BooleanController2 = _interopRequireDefault(_BooleanController);

				var _OptionController = __webpack_require__(10);

				var _OptionController2 = _interopRequireDefault(_OptionController);

				var _StringController = __webpack_require__(11);

				var _StringController2 = _interopRequireDefault(_StringController);

				var _NumberController = __webpack_require__(12);

				var _NumberController2 = _interopRequireDefault(_NumberController);

				var _NumberControllerBox = __webpack_require__(13);

				var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

				var _NumberControllerSlider = __webpack_require__(14);

				var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

				var _FunctionController = __webpack_require__(15);

				var _FunctionController2 = _interopRequireDefault(_FunctionController);

				var _ColorController = __webpack_require__(16);

				var _ColorController2 = _interopRequireDefault(_ColorController);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _GUI = __webpack_require__(17);

				var _GUI2 = _interopRequireDefault(_GUI);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				exports.default = {
					color: {
						Color: _Color2.default,
						math: _math2.default,
						interpret: _interpret2.default
					},

					controllers: {
						Controller: _Controller2.default,
						BooleanController: _BooleanController2.default,
						OptionController: _OptionController2.default,
						StringController: _StringController2.default,
						NumberController: _NumberController2.default,
						NumberControllerBox: _NumberControllerBox2.default,
						NumberControllerSlider: _NumberControllerSlider2.default,
						FunctionController: _FunctionController2.default,
						ColorController: _ColorController2.default
					},

					dom: {
						dom: _dom2.default
					},

					gui: {
						GUI: _GUI2.default
					},

					GUI: _GUI2.default
				};
				module.exports = exports['default'];

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _interpret = __webpack_require__(3);

				var _interpret2 = _interopRequireDefault(_interpret);

				var _math = __webpack_require__(6);

				var _math2 = _interopRequireDefault(_math);

				var _toString = __webpack_require__(4);

				var _toString2 = _interopRequireDefault(_toString);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				var Color = function () {
					function Color() {
						_classCallCheck(this, Color);

						this.__state = _interpret2.default.apply(this, arguments);

						if (this.__state === false) {
							throw new Error('Failed to interpret color arguments');
						}

						this.__state.a = this.__state.a || 1;
					}

					Color.prototype.toString = function toString() {
						return (0, _toString2.default)(this);
					};

					Color.prototype.toHexString = function toHexString() {
						return (0, _toString2.default)(this, true);
					};

					Color.prototype.toOriginal = function toOriginal() {
						return this.__state.conversion.write(this);
					};

					return Color;
				}();

				function defineRGBComponent(target, component, componentHexIndex) {
					Object.defineProperty(target, component, {
						get: function get$$1() {
							if (this.__state.space === 'RGB') {
								return this.__state[component];
							}

							Color.recalculateRGB(this, component, componentHexIndex);

							return this.__state[component];
						},

						set: function set$$1(v) {
							if (this.__state.space !== 'RGB') {
								Color.recalculateRGB(this, component, componentHexIndex);
								this.__state.space = 'RGB';
							}

							this.__state[component] = v;
						}
					});
				}

				function defineHSVComponent(target, component) {
					Object.defineProperty(target, component, {
						get: function get$$1() {
							if (this.__state.space === 'HSV') {
								return this.__state[component];
							}

							Color.recalculateHSV(this);

							return this.__state[component];
						},

						set: function set$$1(v) {
							if (this.__state.space !== 'HSV') {
								Color.recalculateHSV(this);
								this.__state.space = 'HSV';
							}

							this.__state[component] = v;
						}
					});
				}

				Color.recalculateRGB = function (color, component, componentHexIndex) {
					if (color.__state.space === 'HEX') {
						color.__state[component] = _math2.default.component_from_hex(color.__state.hex, componentHexIndex);
					} else if (color.__state.space === 'HSV') {
						_common2.default.extend(color.__state, _math2.default.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
					} else {
						throw new Error('Corrupted color state');
					}
				};

				Color.recalculateHSV = function (color) {
					var result = _math2.default.rgb_to_hsv(color.r, color.g, color.b);

					_common2.default.extend(color.__state, {
						s: result.s,
						v: result.v
					});

					if (!_common2.default.isNaN(result.h)) {
						color.__state.h = result.h;
					} else if (_common2.default.isUndefined(color.__state.h)) {
						color.__state.h = 0;
					}
				};

				Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];

				defineRGBComponent(Color.prototype, 'r', 2);
				defineRGBComponent(Color.prototype, 'g', 1);
				defineRGBComponent(Color.prototype, 'b', 0);

				defineHSVComponent(Color.prototype, 'h');
				defineHSVComponent(Color.prototype, 's');
				defineHSVComponent(Color.prototype, 'v');

				Object.defineProperty(Color.prototype, 'a', {
					get: function get$$1() {
						return this.__state.a;
					},

					set: function set$$1(v) {
						this.__state.a = v;
					}
				});

				Object.defineProperty(Color.prototype, 'hex', {
					get: function get$$1() {
						if (!this.__state.space !== 'HEX') {
							this.__state.hex = _math2.default.rgb_to_hex(this.r, this.g, this.b);
						}

						return this.__state.hex;
					},

					set: function set$$1(v) {
						this.__state.space = 'HEX';
						this.__state.hex = v;
					}
				});

				exports.default = Color;
				module.exports = exports['default'];

				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _toString = __webpack_require__(4);

				var _toString2 = _interopRequireDefault(_toString);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				var INTERPRETATIONS = [
				// Strings
				{
					litmus: _common2.default.isString,
					conversions: {
						THREE_CHAR_HEX: {
							read: function read(original) {
								var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
								if (test === null) {
									return false;
								}

								return {
									space: 'HEX',
									hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
								};
							},

							write: _toString2.default
						},

						SIX_CHAR_HEX: {
							read: function read(original) {
								var test = original.match(/^#([A-F0-9]{6})$/i);
								if (test === null) {
									return false;
								}

								return {
									space: 'HEX',
									hex: parseInt('0x' + test[1].toString(), 0)
								};
							},

							write: _toString2.default
						},

						CSS_RGB: {
							read: function read(original) {
								var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
								if (test === null) {
									return false;
								}

								return {
									space: 'RGB',
									r: parseFloat(test[1]),
									g: parseFloat(test[2]),
									b: parseFloat(test[3])
								};
							},

							write: _toString2.default
						},

						CSS_RGBA: {
							read: function read(original) {
								var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
								if (test === null) {
									return false;
								}

								return {
									space: 'RGB',
									r: parseFloat(test[1]),
									g: parseFloat(test[2]),
									b: parseFloat(test[3]),
									a: parseFloat(test[4])
								};
							},

							write: _toString2.default
						}
					}
				},

				// Numbers
				{
					litmus: _common2.default.isNumber,

					conversions: {

						HEX: {
							read: function read(original) {
								return {
									space: 'HEX',
									hex: original,
									conversionName: 'HEX'
								};
							},

							write: function write(color) {
								return color.hex;
							}
						}

					}

				},

				// Arrays
				{
					litmus: _common2.default.isArray,
					conversions: {
						RGB_ARRAY: {
							read: function read(original) {
								if (original.length !== 3) {
									return false;
								}

								return {
									space: 'RGB',
									r: original[0],
									g: original[1],
									b: original[2]
								};
							},

							write: function write(color) {
								return [color.r, color.g, color.b];
							}
						},

						RGBA_ARRAY: {
							read: function read(original) {
								if (original.length !== 4) return false;
								return {
									space: 'RGB',
									r: original[0],
									g: original[1],
									b: original[2],
									a: original[3]
								};
							},

							write: function write(color) {
								return [color.r, color.g, color.b, color.a];
							}
						}
					}
				},

				// Objects
				{
					litmus: _common2.default.isObject,
					conversions: {

						RGBA_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.r) && _common2.default.isNumber(original.g) && _common2.default.isNumber(original.b) && _common2.default.isNumber(original.a)) {
									return {
										space: 'RGB',
										r: original.r,
										g: original.g,
										b: original.b,
										a: original.a
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									r: color.r,
									g: color.g,
									b: color.b,
									a: color.a
								};
							}
						},

						RGB_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.r) && _common2.default.isNumber(original.g) && _common2.default.isNumber(original.b)) {
									return {
										space: 'RGB',
										r: original.r,
										g: original.g,
										b: original.b
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									r: color.r,
									g: color.g,
									b: color.b
								};
							}
						},

						HSVA_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.h) && _common2.default.isNumber(original.s) && _common2.default.isNumber(original.v) && _common2.default.isNumber(original.a)) {
									return {
										space: 'HSV',
										h: original.h,
										s: original.s,
										v: original.v,
										a: original.a
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									h: color.h,
									s: color.s,
									v: color.v,
									a: color.a
								};
							}
						},

						HSV_OBJ: {
							read: function read(original) {
								if (_common2.default.isNumber(original.h) && _common2.default.isNumber(original.s) && _common2.default.isNumber(original.v)) {
									return {
										space: 'HSV',
										h: original.h,
										s: original.s,
										v: original.v
									};
								}
								return false;
							},

							write: function write(color) {
								return {
									h: color.h,
									s: color.s,
									v: color.v
								};
							}
						}
					}
				}];

				var result = void 0;
				var toReturn = void 0;

				var interpret = function interpret() {
					toReturn = false;

					var original = arguments.length > 1 ? _common2.default.toArray(arguments) : arguments[0];
					_common2.default.each(INTERPRETATIONS, function (family) {
						if (family.litmus(original)) {
							_common2.default.each(family.conversions, function (conversion, conversionName) {
								result = conversion.read(original);

								if (toReturn === false && result !== false) {
									toReturn = result;
									result.conversionName = conversionName;
									result.conversion = conversion;
									return _common2.default.BREAK;
								}
							});

							return _common2.default.BREAK;
						}
					});

					return toReturn;
				};

				exports.default = interpret;
				module.exports = exports['default'];

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				exports.__esModule = true;

				exports.default = function (color, forceCSSHex) {
					var colorFormat = color.__state.conversionName.toString();

					var r = Math.round(color.r);
					var g = Math.round(color.g);
					var b = Math.round(color.b);
					var a = color.a;
					var h = Math.round(color.h);
					var s = color.s.toFixed(1);
					var v = color.v.toFixed(1);

					if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
						var str = color.hex.toString(16);
						while (str.length < 6) {
							str = '0' + str;
						}
						return '#' + str;
					} else if (colorFormat === 'CSS_RGB') {
						return 'rgb(' + r + ',' + g + ',' + b + ')';
					} else if (colorFormat === 'CSS_RGBA') {
						return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
					} else if (colorFormat === 'HEX') {
						return '0x' + color.hex.toString(16);
					} else if (colorFormat === 'RGB_ARRAY') {
						return '[' + r + ',' + g + ',' + b + ']';
					} else if (colorFormat === 'RGBA_ARRAY') {
						return '[' + r + ',' + g + ',' + b + ',' + a + ']';
					} else if (colorFormat === 'RGB_OBJ') {
						return '{r:' + r + ',g:' + g + ',b:' + b + '}';
					} else if (colorFormat === 'RGBA_OBJ') {
						return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
					} else if (colorFormat === 'HSV_OBJ') {
						return '{h:' + h + ',s:' + s + ',v:' + v + '}';
					} else if (colorFormat === 'HSVA_OBJ') {
						return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
					}

					return 'unknown format';
				};

				module.exports = exports['default']; /**
                                          * dat-gui JavaScript Controller Library
                                          * http://code.google.com/p/dat-gui
                                          *
                                          * Copyright 2011 Data Arts Team, Google Creative Lab
                                          *
                                          * Licensed under the Apache License, Version 2.0 (the "License");
                                          * you may not use this file except in compliance with the License.
                                          * You may obtain a copy of the License at
                                          *
                                          * http://www.apache.org/licenses/LICENSE-2.0
                                          */

				/***/
			},
			/* 5 */
			/***/function (module, exports) {

				exports.__esModule = true;
				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				var ARR_EACH = Array.prototype.forEach;
				var ARR_SLICE = Array.prototype.slice;

				/**
     * Band-aid methods for things that should be a lot easier in JavaScript.
     * Implementation and structure inspired by underscore.js
     * http://documentcloud.github.com/underscore/
     */

				var Common = {
					BREAK: {},

					extend: function extend(target) {
						this.each(ARR_SLICE.call(arguments, 1), function (obj) {
							var keys = this.isObject(obj) ? Object.keys(obj) : [];
							keys.forEach(function (key) {
								if (!this.isUndefined(obj[key])) {
									target[key] = obj[key];
								}
							}.bind(this));
						}, this);

						return target;
					},

					defaults: function defaults$$1(target) {
						this.each(ARR_SLICE.call(arguments, 1), function (obj) {
							var keys = this.isObject(obj) ? Object.keys(obj) : [];
							keys.forEach(function (key) {
								if (this.isUndefined(target[key])) {
									target[key] = obj[key];
								}
							}.bind(this));
						}, this);

						return target;
					},

					compose: function compose() {
						var toCall = ARR_SLICE.call(arguments);
						return function () {
							var args = ARR_SLICE.call(arguments);
							for (var i = toCall.length - 1; i >= 0; i--) {
								args = [toCall[i].apply(this, args)];
							}
							return args[0];
						};
					},

					each: function each(obj, itr, scope) {
						if (!obj) {
							return;
						}

						if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
							obj.forEach(itr, scope);
						} else if (obj.length === obj.length + 0) {
							// Is number but not NaN
							var key = void 0;
							var l = void 0;
							for (key = 0, l = obj.length; key < l; key++) {
								if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
									return;
								}
							}
						} else {
							for (var _key in obj) {
								if (itr.call(scope, obj[_key], _key) === this.BREAK) {
									return;
								}
							}
						}
					},

					defer: function defer(fnc) {
						setTimeout(fnc, 0);
					},

					// if the function is called repeatedly, wait until threshold passes until we execute the function
					debounce: function debounce(func, threshold, callImmediately) {
						var timeout = void 0;

						return function () {
							var obj = this;
							var args = arguments;
							function delayed() {
								timeout = null;
								if (!callImmediately) func.apply(obj, args);
							}

							var callNow = callImmediately || !timeout;

							clearTimeout(timeout);
							timeout = setTimeout(delayed, threshold);

							if (callNow) {
								func.apply(obj, args);
							}
						};
					},

					toArray: function toArray$$1(obj) {
						if (obj.toArray) return obj.toArray();
						return ARR_SLICE.call(obj);
					},

					isUndefined: function isUndefined(obj) {
						return obj === undefined;
					},

					isNull: function isNull(obj) {
						return obj === null;
					},

					isNaN: function (_isNaN) {
						function isNaN(_x) {
							return _isNaN.apply(this, arguments);
						}

						isNaN.toString = function () {
							return _isNaN.toString();
						};

						return isNaN;
					}(function (obj) {
						return isNaN(obj);
					}),

					isArray: Array.isArray || function (obj) {
						return obj.constructor === Array;
					},

					isObject: function isObject(obj) {
						return obj === Object(obj);
					},

					isNumber: function isNumber(obj) {
						return obj === obj + 0;
					},

					isString: function isString(obj) {
						return obj === obj + '';
					},

					isBoolean: function isBoolean(obj) {
						return obj === false || obj === true;
					},

					isFunction: function isFunction(obj) {
						return Object.prototype.toString.call(obj) === '[object Function]';
					}

				};

				exports.default = Common;
				module.exports = exports['default'];

				/***/
			},
			/* 6 */
			/***/function (module, exports) {

				exports.__esModule = true;
				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				var tmpComponent = void 0;

				var ColorMath = {
					hsv_to_rgb: function hsv_to_rgb(h, s, v) {
						var hi = Math.floor(h / 60) % 6;

						var f = h / 60 - Math.floor(h / 60);
						var p = v * (1.0 - s);
						var q = v * (1.0 - f * s);
						var t = v * (1.0 - (1.0 - f) * s);

						var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];

						return {
							r: c[0] * 255,
							g: c[1] * 255,
							b: c[2] * 255
						};
					},

					rgb_to_hsv: function rgb_to_hsv(r, g, b) {
						var min = Math.min(r, g, b);
						var max = Math.max(r, g, b);
						var delta = max - min;
						var h = void 0;
						var s = void 0;

						if (max !== 0) {
							s = delta / max;
						} else {
							return {
								h: NaN,
								s: 0,
								v: 0
							};
						}

						if (r === max) {
							h = (g - b) / delta;
						} else if (g === max) {
							h = 2 + (b - r) / delta;
						} else {
							h = 4 + (r - g) / delta;
						}
						h /= 6;
						if (h < 0) {
							h += 1;
						}

						return {
							h: h * 360,
							s: s,
							v: max / 255
						};
					},

					rgb_to_hex: function rgb_to_hex(r, g, b) {
						var hex = this.hex_with_component(0, 2, r);
						hex = this.hex_with_component(hex, 1, g);
						hex = this.hex_with_component(hex, 0, b);
						return hex;
					},

					component_from_hex: function component_from_hex(hex, componentIndex) {
						return hex >> componentIndex * 8 & 0xFF;
					},

					hex_with_component: function hex_with_component(hex, componentIndex, value) {
						return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
					}
				};

				exports.default = ColorMath;
				module.exports = exports["default"];

				/***/
			},
			/* 7 */
			/***/function (module, exports) {

				exports.__esModule = true;

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				/**
     * @class An "abstract" class that represents a given property of an object.
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var Controller = function () {
					function Controller(object, property) {
						_classCallCheck(this, Controller);

						this.initialValue = object[property];

						/**
       * Those who extend this class will put their DOM elements in here.
       * @type {DOMElement}
       */
						this.domElement = document.createElement('div');

						/**
       * The object to manipulate
       * @type {Object}
       */
						this.object = object;

						/**
       * The name of the property to manipulate
       * @type {String}
       */
						this.property = property;

						/**
       * The function to be called on change.
       * @type {Function}
       * @ignore
       */
						this.__onChange = undefined;

						/**
       * The function to be called on finishing change.
       * @type {Function}
       * @ignore
       */
						this.__onFinishChange = undefined;
					}

					/**
      * Specify that a function fire every time someone changes the value with
      * this Controller.
      *
      * @param {Function} fnc This function will be called whenever the value
      * is modified via this Controller.
      * @returns {Controller} this
      */

					Controller.prototype.onChange = function onChange(fnc) {
						this.__onChange = fnc;
						return this;
					};

					/**
      * Specify that a function fire every time someone "finishes" changing
      * the value wih this Controller. Useful for values that change
      * incrementally like numbers or strings.
      *
      * @param {Function} fnc This function will be called whenever
      * someone "finishes" changing the value via this Controller.
      * @returns {Controller} this
      */

					Controller.prototype.onFinishChange = function onFinishChange(fnc) {
						this.__onFinishChange = fnc;
						return this;
					};

					/**
      * Change the value of <code>object[property]</code>
      *
      * @param {Object} newValue The new value of <code>object[property]</code>
      */

					Controller.prototype.setValue = function setValue(newValue) {
						this.object[this.property] = newValue;
						if (this.__onChange) {
							this.__onChange.call(this, newValue);
						}

						this.updateDisplay();
						return this;
					};

					/**
      * Gets the value of <code>object[property]</code>
      *
      * @returns {Object} The current value of <code>object[property]</code>
      */

					Controller.prototype.getValue = function getValue() {
						return this.object[this.property];
					};

					/**
      * Refreshes the visual display of a Controller in order to keep sync
      * with the object's current value.
      * @returns {Controller} this
      */

					Controller.prototype.updateDisplay = function updateDisplay() {
						return this;
					};

					/**
      * @returns {Boolean} true if the value has deviated from initialValue
      */

					Controller.prototype.isModified = function isModified() {
						return this.initialValue !== this.getValue();
					};

					return Controller;
				}();

				exports.default = Controller;
				module.exports = exports['default'];

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a checkbox input to alter the boolean property of an object.
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var BooleanController = function (_Controller) {
					_inherits(BooleanController, _Controller);

					function BooleanController(object, property) {
						_classCallCheck(this, BooleanController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _this = _this2;
						_this2.__prev = _this2.getValue();

						_this2.__checkbox = document.createElement('input');
						_this2.__checkbox.setAttribute('type', 'checkbox');

						function onChange() {
							_this.setValue(!_this.__prev);
						}

						_dom2.default.bind(_this2.__checkbox, 'change', onChange, false);

						_this2.domElement.appendChild(_this2.__checkbox);

						// Match original value
						_this2.updateDisplay();
						return _this2;
					}

					BooleanController.prototype.setValue = function setValue(v) {
						var toReturn = _Controller.prototype.setValue.call(this, v);
						if (this.__onFinishChange) {
							this.__onFinishChange.call(this, this.getValue());
						}
						this.__prev = this.getValue();
						return toReturn;
					};

					BooleanController.prototype.updateDisplay = function updateDisplay() {
						if (this.getValue() === true) {
							this.__checkbox.setAttribute('checked', 'checked');
							this.__checkbox.checked = true;
							this.__prev = true;
						} else {
							this.__checkbox.checked = false;
							this.__prev = false;
						}

						return _Controller.prototype.updateDisplay.call(this);
					};

					return BooleanController;
				}(_Controller3.default);

				exports.default = BooleanController;
				module.exports = exports['default'];

				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var EVENT_MAP = {
					HTMLEvents: ['change'],
					MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
					KeyboardEvents: ['keydown']
				}; /**
        * dat-gui JavaScript Controller Library
        * http://code.google.com/p/dat-gui
        *
        * Copyright 2011 Data Arts Team, Google Creative Lab
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        */

				var EVENT_MAP_INV = {};
				_common2.default.each(EVENT_MAP, function (v, k) {
					_common2.default.each(v, function (e) {
						EVENT_MAP_INV[e] = k;
					});
				});

				var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

				function cssValueToPixels(val) {
					if (val === '0' || _common2.default.isUndefined(val)) {
						return 0;
					}

					var match = val.match(CSS_VALUE_PIXELS);

					if (!_common2.default.isNull(match)) {
						return parseFloat(match[1]);
					}

					// TODO ...ems? %?

					return 0;
				}

				/**
     * @namespace
     * @member dat.dom
     */
				var dom = {

					/**
      *
      * @param elem
      * @param selectable
      */
					makeSelectable: function makeSelectable(elem, selectable) {
						if (elem === undefined || elem.style === undefined) return;

						elem.onselectstart = selectable ? function () {
							return false;
						} : function () {};

						elem.style.MozUserSelect = selectable ? 'auto' : 'none';
						elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
						elem.unselectable = selectable ? 'on' : 'off';
					},

					/**
      *
      * @param elem
      * @param horizontal
      * @param vert
      */
					makeFullscreen: function makeFullscreen(elem, hor, vert) {
						var vertical = vert;
						var horizontal = hor;

						if (_common2.default.isUndefined(horizontal)) {
							horizontal = true;
						}

						if (_common2.default.isUndefined(vertical)) {
							vertical = true;
						}

						elem.style.position = 'absolute';

						if (horizontal) {
							elem.style.left = 0;
							elem.style.right = 0;
						}
						if (vertical) {
							elem.style.top = 0;
							elem.style.bottom = 0;
						}
					},

					/**
      *
      * @param elem
      * @param eventType
      * @param params
      */
					fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
						var params = pars || {};
						var className = EVENT_MAP_INV[eventType];
						if (!className) {
							throw new Error('Event type ' + eventType + ' not supported.');
						}
						var evt = document.createEvent(className);
						switch (className) {
							case 'MouseEvents':
								{
									var clientX = params.x || params.clientX || 0;
									var clientY = params.y || params.clientY || 0;
									evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, // screen X
									0, // screen Y
									clientX, // client X
									clientY, // client Y
									false, false, false, false, 0, null);
									break;
								}
							case 'KeyboardEvents':
								{
									var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
									_common2.default.defaults(params, {
										cancelable: true,
										ctrlKey: false,
										altKey: false,
										shiftKey: false,
										metaKey: false,
										keyCode: undefined,
										charCode: undefined
									});
									init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
									break;
								}
							default:
								{
									evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
									break;
								}
						}
						_common2.default.defaults(evt, aux);
						elem.dispatchEvent(evt);
					},

					/**
      *
      * @param elem
      * @param event
      * @param func
      * @param bool
      */
					bind: function bind(elem, event, func, newBool) {
						var bool = newBool || false;
						if (elem.addEventListener) {
							elem.addEventListener(event, func, bool);
						} else if (elem.attachEvent) {
							elem.attachEvent('on' + event, func);
						}
						return dom;
					},

					/**
      *
      * @param elem
      * @param event
      * @param func
      * @param bool
      */
					unbind: function unbind(elem, event, func, newBool) {
						var bool = newBool || false;
						if (elem.removeEventListener) {
							elem.removeEventListener(event, func, bool);
						} else if (elem.detachEvent) {
							elem.detachEvent('on' + event, func);
						}
						return dom;
					},

					/**
      *
      * @param elem
      * @param className
      */
					addClass: function addClass(elem, className) {
						if (elem.className === undefined) {
							elem.className = className;
						} else if (elem.className !== className) {
							var classes = elem.className.split(/ +/);
							if (classes.indexOf(className) === -1) {
								classes.push(className);
								elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
							}
						}
						return dom;
					},

					/**
      *
      * @param elem
      * @param className
      */
					removeClass: function removeClass(elem, className) {
						if (className) {
							if (elem.className === className) {
								elem.removeAttribute('class');
							} else {
								var classes = elem.className.split(/ +/);
								var index = classes.indexOf(className);
								if (index !== -1) {
									classes.splice(index, 1);
									elem.className = classes.join(' ');
								}
							}
						} else {
							elem.className = undefined;
						}
						return dom;
					},

					hasClass: function hasClass(elem, className) {
						return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
					},

					/**
      *
      * @param elem
      */
					getWidth: function getWidth(elem) {
						var style = getComputedStyle(elem);

						return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
					},

					/**
      *
      * @param elem
      */
					getHeight: function getHeight(elem) {
						var style = getComputedStyle(elem);

						return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
					},

					/**
      *
      * @param el
      */
					getOffset: function getOffset(el) {
						var elem = el;
						var offset = { left: 0, top: 0 };
						if (elem.offsetParent) {
							do {
								offset.left += elem.offsetLeft;
								offset.top += elem.offsetTop;
								elem = elem.offsetParent;
							} while (elem);
						}
						return offset;
					},

					// http://stackoverflow.com/posts/2684561/revisions
					/**
      *
      * @param elem
      */
					isActive: function isActive(elem) {
						return elem === document.activeElement && (elem.type || elem.href);
					}

				};

				exports.default = dom;
				module.exports = exports['default'];

				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a select input to alter the property of an object, using a
     * list of accepted values.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Object|string[]} options A map of labels to acceptable values, or
     * a list of acceptable string values.
     *
     * @member dat.controllers
     */
				var OptionController = function (_Controller) {
					_inherits(OptionController, _Controller);

					function OptionController(object, property, opts) {
						_classCallCheck(this, OptionController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var options = opts;

						var _this = _this2;

						/**
       * The drop down menu
       * @ignore
       */
						_this2.__select = document.createElement('select');

						if (_common2.default.isArray(options)) {
							var map = {};
							_common2.default.each(options, function (element) {
								map[element] = element;
							});
							options = map;
						}

						_common2.default.each(options, function (value, key) {
							var opt = document.createElement('option');
							opt.innerHTML = key;
							opt.setAttribute('value', value);
							_this.__select.appendChild(opt);
						});

						// Acknowledge original value
						_this2.updateDisplay();

						_dom2.default.bind(_this2.__select, 'change', function () {
							var desiredValue = this.options[this.selectedIndex].value;
							_this.setValue(desiredValue);
						});

						_this2.domElement.appendChild(_this2.__select);
						return _this2;
					}

					OptionController.prototype.setValue = function setValue(v) {
						var toReturn = _Controller.prototype.setValue.call(this, v);

						if (this.__onFinishChange) {
							this.__onFinishChange.call(this, this.getValue());
						}
						return toReturn;
					};

					OptionController.prototype.updateDisplay = function updateDisplay() {
						if (_dom2.default.isActive(this.__select)) return this; // prevent number from updating if user is trying to manually update
						this.__select.value = this.getValue();
						return _Controller.prototype.updateDisplay.call(this);
					};

					return OptionController;
				}(_Controller3.default);

				exports.default = OptionController;
				module.exports = exports['default'];

				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a text input to alter the string property of an object.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var StringController = function (_Controller) {
					_inherits(StringController, _Controller);

					function StringController(object, property) {
						_classCallCheck(this, StringController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _this = _this2;

						function onChange() {
							_this.setValue(_this.__input.value);
						}

						function onBlur() {
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.getValue());
							}
						}

						_this2.__input = document.createElement('input');
						_this2.__input.setAttribute('type', 'text');

						_dom2.default.bind(_this2.__input, 'keyup', onChange);
						_dom2.default.bind(_this2.__input, 'change', onChange);
						_dom2.default.bind(_this2.__input, 'blur', onBlur);
						_dom2.default.bind(_this2.__input, 'keydown', function (e) {
							if (e.keyCode === 13) {
								this.blur();
							}
						});

						_this2.updateDisplay();

						_this2.domElement.appendChild(_this2.__input);
						return _this2;
					}

					StringController.prototype.updateDisplay = function updateDisplay() {
						// Stops the caret from moving on account of:
						// keyup -> setValue -> updateDisplay
						if (!_dom2.default.isActive(this.__input)) {
							this.__input.value = this.getValue();
						}
						return _Controller.prototype.updateDisplay.call(this);
					};

					return StringController;
				}(_Controller3.default);

				exports.default = StringController;
				module.exports = exports['default'];

				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				function numDecimals(x) {
					var _x = x.toString();
					if (_x.indexOf('.') > -1) {
						return _x.length - _x.indexOf('.') - 1;
					}

					return 0;
				}

				/**
     * @class Represents a given property of an object that is a number.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Object} [params] Optional parameters
     * @param {Number} [params.min] Minimum allowed value
     * @param {Number} [params.max] Maximum allowed value
     * @param {Number} [params.step] Increment by which to change value
     *
     * @member dat.controllers
     */

				var NumberController = function (_Controller) {
					_inherits(NumberController, _Controller);

					function NumberController(object, property, params) {
						_classCallCheck(this, NumberController);

						var _this = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _params = params || {};

						_this.__min = _params.min;
						_this.__max = _params.max;
						_this.__step = _params.step;

						if (_common2.default.isUndefined(_this.__step)) {
							if (_this.initialValue === 0) {
								_this.__impliedStep = 1; // What are we, psychics?
							} else {
								// Hey Doug, check this out.
								_this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
							}
						} else {
							_this.__impliedStep = _this.__step;
						}

						_this.__precision = numDecimals(_this.__impliedStep);
						return _this;
					}

					NumberController.prototype.setValue = function setValue(v) {
						var _v = v;

						if (this.__min !== undefined && _v < this.__min) {
							_v = this.__min;
						} else if (this.__max !== undefined && _v > this.__max) {
							_v = this.__max;
						}

						if (this.__step !== undefined && _v % this.__step !== 0) {
							_v = Math.round(_v / this.__step) * this.__step;
						}

						return _Controller.prototype.setValue.call(this, _v);
					};

					/**
      * Specify a minimum value for <code>object[property]</code>.
      *
      * @param {Number} minValue The minimum value for
      * <code>object[property]</code>
      * @returns {dat.controllers.NumberController} this
      */

					NumberController.prototype.min = function min(v) {
						this.__min = v;
						return this;
					};

					/**
      * Specify a maximum value for <code>object[property]</code>.
      *
      * @param {Number} maxValue The maximum value for
      * <code>object[property]</code>
      * @returns {dat.controllers.NumberController} this
      */

					NumberController.prototype.max = function max(v) {
						this.__max = v;
						return this;
					};

					/**
      * Specify a step value that dat.controllers.NumberController
      * increments by.
      *
      * @param {Number} stepValue The step value for
      * dat.controllers.NumberController
      * @default if minimum and maximum specified increment is 1% of the
      * difference otherwise stepValue is 1
      * @returns {dat.controllers.NumberController} this
      */

					NumberController.prototype.step = function step(v) {
						this.__step = v;
						this.__impliedStep = v;
						this.__precision = numDecimals(v);
						return this;
					};

					return NumberController;
				}(_Controller3.default);

				exports.default = NumberController;
				module.exports = exports['default'];

				/***/
			},
			/* 13 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _NumberController2 = __webpack_require__(12);

				var _NumberController3 = _interopRequireDefault(_NumberController2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				function roundToDecimal(value, decimals) {
					var tenTo = Math.pow(10, decimals);
					return Math.round(value * tenTo) / tenTo;
				}

				/**
     * @class Represents a given property of an object that is a number and
     * provides an input element with which to manipulate it.
     *
     * @extends dat.controllers.Controller
     * @extends dat.controllers.NumberController
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Object} [params] Optional parameters
     * @param {Number} [params.min] Minimum allowed value
     * @param {Number} [params.max] Maximum allowed value
     * @param {Number} [params.step] Increment by which to change value
     *
     * @member dat.controllers
     */

				var NumberControllerBox = function (_NumberController) {
					_inherits(NumberControllerBox, _NumberController);

					function NumberControllerBox(object, property, params) {
						_classCallCheck(this, NumberControllerBox);

						var _this2 = _possibleConstructorReturn(this, _NumberController.call(this, object, property, params));

						_this2.__truncationSuspended = false;

						var _this = _this2;

						/**
       * {Number} Previous mouse y position
       * @ignore
       */
						var prevY = void 0;

						function onChange() {
							var attempted = parseFloat(_this.__input.value);
							if (!_common2.default.isNaN(attempted)) {
								_this.setValue(attempted);
							}
						}

						function onFinish() {
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.getValue());
							}
						}

						function onBlur() {
							onFinish();
						}

						function onMouseDrag(e) {
							var diff = prevY - e.clientY;
							_this.setValue(_this.getValue() + diff * _this.__impliedStep);

							prevY = e.clientY;
						}

						function onMouseUp() {
							_dom2.default.unbind(window, 'mousemove', onMouseDrag);
							_dom2.default.unbind(window, 'mouseup', onMouseUp);
							onFinish();
						}

						function onMouseDown(e) {
							_dom2.default.bind(window, 'mousemove', onMouseDrag);
							_dom2.default.bind(window, 'mouseup', onMouseUp);
							prevY = e.clientY;
						}

						_this2.__input = document.createElement('input');
						_this2.__input.setAttribute('type', 'text');

						// Makes it so manually specified values are not truncated.

						_dom2.default.bind(_this2.__input, 'change', onChange);
						_dom2.default.bind(_this2.__input, 'blur', onBlur);
						_dom2.default.bind(_this2.__input, 'mousedown', onMouseDown);
						_dom2.default.bind(_this2.__input, 'keydown', function (e) {
							// When pressing enter, you can be as precise as you want.
							if (e.keyCode === 13) {
								_this.__truncationSuspended = true;
								this.blur();
								_this.__truncationSuspended = false;
								onFinish();
							}
						});

						_this2.updateDisplay();

						_this2.domElement.appendChild(_this2.__input);
						return _this2;
					}

					NumberControllerBox.prototype.updateDisplay = function updateDisplay() {
						this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
						return _NumberController.prototype.updateDisplay.call(this);
					};

					return NumberControllerBox;
				}(_NumberController3.default);

				exports.default = NumberControllerBox;
				module.exports = exports['default'];

				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _NumberController2 = __webpack_require__(12);

				var _NumberController3 = _interopRequireDefault(_NumberController2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				function map(v, i1, i2, o1, o2) {
					return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
				}

				/**
     * @class Represents a given property of an object that is a number, contains
     * a minimum and maximum, and provides a slider element with which to
     * manipulate it. It should be noted that the slider element is made up of
     * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
     * <code>&lt;slider&gt;</code> element.
     *
     * @extends dat.controllers.Controller
     * @extends dat.controllers.NumberController
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     * @param {Number} minValue Minimum allowed value
     * @param {Number} maxValue Maximum allowed value
     * @param {Number} stepValue Increment by which to change value
     *
     * @member dat.controllers
     */

				var NumberControllerSlider = function (_NumberController) {
					_inherits(NumberControllerSlider, _NumberController);

					function NumberControllerSlider(object, property, min, max, step) {
						_classCallCheck(this, NumberControllerSlider);

						var _this2 = _possibleConstructorReturn(this, _NumberController.call(this, object, property, { min: min, max: max, step: step }));

						var _this = _this2;

						_this2.__background = document.createElement('div');
						_this2.__foreground = document.createElement('div');

						_dom2.default.bind(_this2.__background, 'mousedown', onMouseDown);

						_dom2.default.addClass(_this2.__background, 'slider');
						_dom2.default.addClass(_this2.__foreground, 'slider-fg');

						function onMouseDown(e) {
							document.activeElement.blur();

							_dom2.default.bind(window, 'mousemove', onMouseDrag);
							_dom2.default.bind(window, 'mouseup', onMouseUp);

							onMouseDrag(e);
						}

						function onMouseDrag(e) {
							e.preventDefault();

							var bgRect = _this.__background.getBoundingClientRect();

							_this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));

							return false;
						}

						function onMouseUp() {
							_dom2.default.unbind(window, 'mousemove', onMouseDrag);
							_dom2.default.unbind(window, 'mouseup', onMouseUp);
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.getValue());
							}
						}

						_this2.updateDisplay();

						_this2.__background.appendChild(_this2.__foreground);
						_this2.domElement.appendChild(_this2.__background);
						return _this2;
					}

					NumberControllerSlider.prototype.updateDisplay = function updateDisplay() {
						var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
						this.__foreground.style.width = pct * 100 + '%';
						return _NumberController.prototype.updateDisplay.call(this);
					};

					return NumberControllerSlider;
				}(_NumberController3.default);

				exports.default = NumberControllerSlider;
				module.exports = exports['default'];

				/***/
			},
			/* 15 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				/**
     * @class Provides a GUI interface to fire a specified method, a property of an object.
     *
     * @extends dat.controllers.Controller
     *
     * @param {Object} object The object to be manipulated
     * @param {string} property The name of the property to be manipulated
     *
     * @member dat.controllers
     */
				var FunctionController = function (_Controller) {
					_inherits(FunctionController, _Controller);

					function FunctionController(object, property, text) {
						_classCallCheck(this, FunctionController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						var _this = _this2;

						_this2.__button = document.createElement('div');
						_this2.__button.innerHTML = text === undefined ? 'Fire' : text;

						_dom2.default.bind(_this2.__button, 'click', function (e) {
							e.preventDefault();
							_this.fire();
							return false;
						});

						_dom2.default.addClass(_this2.__button, 'button');

						_this2.domElement.appendChild(_this2.__button);
						return _this2;
					}

					FunctionController.prototype.fire = function fire() {
						if (this.__onChange) {
							this.__onChange.call(this);
						}
						this.getValue().call(this.object);
						if (this.__onFinishChange) {
							this.__onFinishChange.call(this, this.getValue());
						}
					};

					return FunctionController;
				}(_Controller3.default);

				exports.default = FunctionController;
				module.exports = exports['default'];

				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _Controller2 = __webpack_require__(7);

				var _Controller3 = _interopRequireDefault(_Controller2);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _Color = __webpack_require__(2);

				var _Color2 = _interopRequireDefault(_Color);

				var _interpret = __webpack_require__(3);

				var _interpret2 = _interopRequireDefault(_interpret);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				var ColorController = function (_Controller) {
					_inherits(ColorController, _Controller);

					function ColorController(object, property) {
						_classCallCheck(this, ColorController);

						var _this2 = _possibleConstructorReturn(this, _Controller.call(this, object, property));

						_this2.__color = new _Color2.default(_this2.getValue());
						_this2.__temp = new _Color2.default(0);

						var _this = _this2;

						_this2.domElement = document.createElement('div');

						_dom2.default.makeSelectable(_this2.domElement, false);

						_this2.__selector = document.createElement('div');
						_this2.__selector.className = 'selector';

						_this2.__saturation_field = document.createElement('div');
						_this2.__saturation_field.className = 'saturation-field';

						_this2.__field_knob = document.createElement('div');
						_this2.__field_knob.className = 'field-knob';
						_this2.__field_knob_border = '2px solid ';

						_this2.__hue_knob = document.createElement('div');
						_this2.__hue_knob.className = 'hue-knob';

						_this2.__hue_field = document.createElement('div');
						_this2.__hue_field.className = 'hue-field';

						_this2.__input = document.createElement('input');
						_this2.__input.type = 'text';
						_this2.__input_textShadow = '0 1px 1px ';

						_dom2.default.bind(_this2.__input, 'keydown', function (e) {
							if (e.keyCode === 13) {
								// on enter
								onBlur.call(this);
							}
						});

						_dom2.default.bind(_this2.__input, 'blur', onBlur);

						_dom2.default.bind(_this2.__selector, 'mousedown', function () /* e */{
							_dom2.default.addClass(this, 'drag').bind(window, 'mouseup', function () /* e */{
								_dom2.default.removeClass(_this.__selector, 'drag');
							});
						});

						var valueField = document.createElement('div');

						_common2.default.extend(_this2.__selector.style, {
							width: '122px',
							height: '102px',
							padding: '3px',
							backgroundColor: '#222',
							boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
						});

						_common2.default.extend(_this2.__field_knob.style, {
							position: 'absolute',
							width: '12px',
							height: '12px',
							border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
							boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
							borderRadius: '12px',
							zIndex: 1
						});

						_common2.default.extend(_this2.__hue_knob.style, {
							position: 'absolute',
							width: '15px',
							height: '2px',
							borderRight: '4px solid #fff',
							zIndex: 1
						});

						_common2.default.extend(_this2.__saturation_field.style, {
							width: '100px',
							height: '100px',
							border: '1px solid #555',
							marginRight: '3px',
							display: 'inline-block',
							cursor: 'pointer'
						});

						_common2.default.extend(valueField.style, {
							width: '100%',
							height: '100%',
							background: 'none'
						});

						linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');

						_common2.default.extend(_this2.__hue_field.style, {
							width: '15px',
							height: '100px',
							border: '1px solid #555',
							cursor: 'ns-resize',
							position: 'absolute',
							top: '3px',
							right: '3px'
						});

						hueGradient(_this2.__hue_field);

						_common2.default.extend(_this2.__input.style, {
							outline: 'none',
							//      width: '120px',
							textAlign: 'center',
							//      padding: '4px',
							//      marginBottom: '6px',
							color: '#fff',
							border: 0,
							fontWeight: 'bold',
							textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
						});

						_dom2.default.bind(_this2.__saturation_field, 'mousedown', fieldDown);
						_dom2.default.bind(_this2.__field_knob, 'mousedown', fieldDown);

						_dom2.default.bind(_this2.__hue_field, 'mousedown', function (e) {
							setH(e);
							_dom2.default.bind(window, 'mousemove', setH);
							_dom2.default.bind(window, 'mouseup', fieldUpH);
						});

						function fieldDown(e) {
							setSV(e);
							// document.body.style.cursor = 'none';
							_dom2.default.bind(window, 'mousemove', setSV);
							_dom2.default.bind(window, 'mouseup', fieldUpSV);
						}

						function fieldUpSV() {
							_dom2.default.unbind(window, 'mousemove', setSV);
							_dom2.default.unbind(window, 'mouseup', fieldUpSV);
							// document.body.style.cursor = 'default';
							onFinish();
						}

						function onBlur() {
							var i = (0, _interpret2.default)(this.value);
							if (i !== false) {
								_this.__color.__state = i;
								_this.setValue(_this.__color.toOriginal());
							} else {
								this.value = _this.__color.toString();
							}
						}

						function fieldUpH() {
							_dom2.default.unbind(window, 'mousemove', setH);
							_dom2.default.unbind(window, 'mouseup', fieldUpH);
							onFinish();
						}

						function onFinish() {
							if (_this.__onFinishChange) {
								_this.__onFinishChange.call(_this, _this.__color.toOriginal());
							}
						}

						_this2.__saturation_field.appendChild(valueField);
						_this2.__selector.appendChild(_this2.__field_knob);
						_this2.__selector.appendChild(_this2.__saturation_field);
						_this2.__selector.appendChild(_this2.__hue_field);
						_this2.__hue_field.appendChild(_this2.__hue_knob);

						_this2.domElement.appendChild(_this2.__input);
						_this2.domElement.appendChild(_this2.__selector);

						_this2.updateDisplay();

						function setSV(e) {
							e.preventDefault();

							var fieldRect = _this.__saturation_field.getBoundingClientRect();
							var s = (e.clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
							var v = 1 - (e.clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

							if (v > 1) {
								v = 1;
							} else if (v < 0) {
								v = 0;
							}

							if (s > 1) {
								s = 1;
							} else if (s < 0) {
								s = 0;
							}

							_this.__color.v = v;
							_this.__color.s = s;

							_this.setValue(_this.__color.toOriginal());

							return false;
						}

						function setH(e) {
							e.preventDefault();

							var fieldRect = _this.__hue_field.getBoundingClientRect();
							var h = 1 - (e.clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);

							if (h > 1) {
								h = 1;
							} else if (h < 0) {
								h = 0;
							}

							_this.__color.h = h * 360;

							_this.setValue(_this.__color.toOriginal());

							return false;
						}
						return _this2;
					}

					ColorController.prototype.updateDisplay = function updateDisplay() {
						var i = (0, _interpret2.default)(this.getValue());

						if (i !== false) {
							var mismatch = false;

							// Check for mismatch on the interpreted value.

							_common2.default.each(_Color2.default.COMPONENTS, function (component) {
								if (!_common2.default.isUndefined(i[component]) && !_common2.default.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
									mismatch = true;
									return {}; // break
								}
							}, this);

							// If nothing diverges, we keep our previous values
							// for statefulness, otherwise we recalculate fresh
							if (mismatch) {
								_common2.default.extend(this.__color.__state, i);
							}
						}

						_common2.default.extend(this.__temp.__state, this.__color.__state);

						this.__temp.a = 1;

						var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
						var _flip = 255 - flip;

						_common2.default.extend(this.__field_knob.style, {
							marginLeft: 100 * this.__color.s - 7 + 'px',
							marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
							backgroundColor: this.__temp.toHexString(),
							border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
						});

						this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';

						this.__temp.s = 1;
						this.__temp.v = 1;

						linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());

						this.__input.value = this.__color.toString();

						_common2.default.extend(this.__input.style, {
							backgroundColor: this.__color.toHexString(),
							color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
							textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
						});
					};

					return ColorController;
				}(_Controller3.default);

				var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];

				function linearGradient(elem, x, a, b) {
					elem.style.background = '';
					_common2.default.each(vendors, function (vendor) {
						elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
					});
				}

				function hueGradient(elem) {
					elem.style.background = '';
					elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
					elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
					elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
					elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
					elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
				}

				exports.default = ColorController;
				module.exports = exports['default'];

				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
				}; /**
        * dat-gui JavaScript Controller Library
        * http://code.google.com/p/dat-gui
        *
        * Copyright 2011 Data Arts Team, Google Creative Lab
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        */

				var _css = __webpack_require__(18);

				var _css2 = _interopRequireDefault(_css);

				var _saveDialogue = __webpack_require__(19);

				var _saveDialogue2 = _interopRequireDefault(_saveDialogue);

				var _ControllerFactory = __webpack_require__(20);

				var _ControllerFactory2 = _interopRequireDefault(_ControllerFactory);

				var _Controller = __webpack_require__(7);

				var _Controller2 = _interopRequireDefault(_Controller);

				var _BooleanController = __webpack_require__(8);

				var _BooleanController2 = _interopRequireDefault(_BooleanController);

				var _FunctionController = __webpack_require__(15);

				var _FunctionController2 = _interopRequireDefault(_FunctionController);

				var _NumberControllerBox = __webpack_require__(13);

				var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

				var _NumberControllerSlider = __webpack_require__(14);

				var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

				var _ColorController = __webpack_require__(16);

				var _ColorController2 = _interopRequireDefault(_ColorController);

				var _requestAnimationFrame = __webpack_require__(21);

				var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

				var _CenteredDiv = __webpack_require__(22);

				var _CenteredDiv2 = _interopRequireDefault(_CenteredDiv);

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				var _style = __webpack_require__(23);

				var _style2 = _interopRequireDefault(_style);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				// CSS to embed in build

				_css2.default.inject(_style2.default);

				/** Outer-most className for GUI's */
				var CSS_NAMESPACE = 'dg';

				var HIDE_KEY_CODE = 72;

				/** The only value shared between the JS and SCSS. Use caution. */
				var CLOSE_BUTTON_HEIGHT = 20;

				var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

				var SUPPORTS_LOCAL_STORAGE = function () {
					try {
						return 'localStorage' in window && window.localStorage !== null;
					} catch (e) {
						return false;
					}
				}();

				var SAVE_DIALOGUE = void 0;

				/** Have we yet to create an autoPlace GUI? */
				var autoPlaceVirgin = true;

				/** Fixed position div that auto place GUI's go inside */
				var autoPlaceContainer = void 0;

				/** Are we hiding the GUI's ? */
				var hide = false;

				/** GUI's which should be hidden */
				var hideableGuis = [];

				/**
     * A lightweight controller library for JavaScript. It allows you to easily
     * manipulate variables and fire functions on the fly.
     * @class
     *
     * @member dat.gui
     *
     * @param {Object} [params]
     * @param {String} [params.name] The name of this GUI.
     * @param {Object} [params.load] JSON object representing the saved state of
     * this GUI.
     * @param {Boolean} [params.auto=true]
     * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
     * @param {Boolean} [params.closed] If true, starts closed
     * @param {Boolean} [params.closeOnTop] If true, close/open button shows on top of the GUI
     */
				var GUI = function GUI(pars) {
					var _this = this;

					var params = pars || {};

					/**
      * Outermost DOM Element
      * @type DOMElement
      */
					this.domElement = document.createElement('div');
					this.__ul = document.createElement('ul');
					this.domElement.appendChild(this.__ul);

					_dom2.default.addClass(this.domElement, CSS_NAMESPACE);

					/**
      * Nested GUI's by name
      * @ignore
      */
					this.__folders = {};

					this.__controllers = [];

					/**
      * List of objects I'm remembering for save, only used in top level GUI
      * @ignore
      */
					this.__rememberedObjects = [];

					/**
      * Maps the index of remembered objects to a map of controllers, only used
      * in top level GUI.
      *
      * @private
      * @ignore
      *
      * @example
      * [
      *  {
        *    propertyName: Controller,
        *    anotherPropertyName: Controller
        *  },
      *  {
        *    propertyName: Controller
        *  }
      * ]
      */
					this.__rememberedObjectIndecesToControllers = [];

					this.__listening = [];

					// Default parameters
					params = _common2.default.defaults(params, {
						closeOnTop: false,
						autoPlace: true,
						width: GUI.DEFAULT_WIDTH
					});

					params = _common2.default.defaults(params, {
						resizable: params.autoPlace,
						hideable: params.autoPlace
					});

					if (!_common2.default.isUndefined(params.load)) {
						// Explicit preset
						if (params.preset) {
							params.load.preset = params.preset;
						}
					} else {
						params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
					}

					if (_common2.default.isUndefined(params.parent) && params.hideable) {
						hideableGuis.push(this);
					}

					// Only root level GUI's are resizable.
					params.resizable = _common2.default.isUndefined(params.parent) && params.resizable;

					if (params.autoPlace && _common2.default.isUndefined(params.scrollable)) {
						params.scrollable = true;
					}
					//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

					// Not part of params because I don't want people passing this in via
					// constructor. Should be a 'remembered' value.
					var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

					var saveToLocalStorage = void 0;

					Object.defineProperties(this,
					/** @lends dat.gui.GUI.prototype */
					{
						/**
       * The parent <code>GUI</code>
       * @type dat.gui.GUI
       */
						parent: {
							get: function get$$1() {
								return params.parent;
							}
						},

						scrollable: {
							get: function get$$1() {
								return params.scrollable;
							}
						},

						/**
       * Handles <code>GUI</code>'s element placement for you
       * @type Boolean
       */
						autoPlace: {
							get: function get$$1() {
								return params.autoPlace;
							}
						},

						/**
       * Handles <code>GUI</code>'s position of open/close button
       * @type Boolean
       */
						closeOnTop: {
							get: function get$$1() {
								return params.closeOnTop;
							}
						},

						/**
       * The identifier for a set of saved values
       * @type String
       */
						preset: {
							get: function get$$1() {
								if (_this.parent) {
									return _this.getRoot().preset;
								}

								return params.load.preset;
							},

							set: function set$$1(v) {
								if (_this.parent) {
									_this.getRoot().preset = v;
								} else {
									params.load.preset = v;
								}
								setPresetSelectIndex(this);
								_this.revert();
							}
						},

						/**
       * The width of <code>GUI</code> element
       * @type Number
       */
						width: {
							get: function get$$1() {
								return params.width;
							},
							set: function set$$1(v) {
								params.width = v;
								setWidth(_this, v);
							}
						},

						/**
       * The name of <code>GUI</code>. Used for folders. i.e
       * a folder's name
       * @type String
       */
						name: {
							get: function get$$1() {
								return params.name;
							},
							set: function set$$1(v) {
								// TODO Check for collisions among sibling folders
								params.name = v;
								if (titleRowName) {
									titleRowName.innerHTML = params.name;
								}
							}
						},

						/**
       * Whether the <code>GUI</code> is collapsed or not
       * @type Boolean
       */
						closed: {
							get: function get$$1() {
								return params.closed;
							},
							set: function set$$1(v) {
								params.closed = v;
								if (params.closed) {
									_dom2.default.addClass(_this.__ul, GUI.CLASS_CLOSED);
								} else {
									_dom2.default.removeClass(_this.__ul, GUI.CLASS_CLOSED);
								}
								// For browsers that aren't going to respect the CSS transition,
								// Lets just check our height against the window height right off
								// the bat.
								this.onResize();

								if (_this.__closeButton) {
									_this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
								}
							}
						},

						/**
       * Contains all presets
       * @type Object
       */
						load: {
							get: function get$$1() {
								return params.load;
							}
						},

						/**
       * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
       * <code>remember</code>ing
       * @type Boolean
       */
						useLocalStorage: {

							get: function get$$1() {
								return useLocalStorage;
							},
							set: function set$$1(bool) {
								if (SUPPORTS_LOCAL_STORAGE) {
									useLocalStorage = bool;
									if (bool) {
										_dom2.default.bind(window, 'unload', saveToLocalStorage);
									} else {
										_dom2.default.unbind(window, 'unload', saveToLocalStorage);
									}
									localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
								}
							}
						}
					});

					// Are we a root level GUI?
					if (_common2.default.isUndefined(params.parent)) {
						params.closed = false;

						_dom2.default.addClass(this.domElement, GUI.CLASS_MAIN);
						_dom2.default.makeSelectable(this.domElement, false);

						// Are we supposed to be loading locally?
						if (SUPPORTS_LOCAL_STORAGE) {
							if (useLocalStorage) {
								_this.useLocalStorage = true;

								var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

								if (savedGui) {
									params.load = JSON.parse(savedGui);
								}
							}
						}

						this.__closeButton = document.createElement('div');
						this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
						_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
						if (params.closeOnTop) {
							_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
							this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
						} else {
							_dom2.default.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
							this.domElement.appendChild(this.__closeButton);
						}

						_dom2.default.bind(this.__closeButton, 'click', function () {
							_this.closed = !_this.closed;
						});
						// Oh, you're a nested GUI!
					} else {
						if (params.closed === undefined) {
							params.closed = true;
						}

						var _titleRowName = document.createTextNode(params.name);
						_dom2.default.addClass(_titleRowName, 'controller-name');

						var titleRow = addRow(_this, _titleRowName);

						var onClickTitle = function onClickTitle(e) {
							e.preventDefault();
							_this.closed = !_this.closed;
							return false;
						};

						_dom2.default.addClass(this.__ul, GUI.CLASS_CLOSED);

						_dom2.default.addClass(titleRow, 'title');
						_dom2.default.bind(titleRow, 'click', onClickTitle);

						if (!params.closed) {
							this.closed = false;
						}
					}

					if (params.autoPlace) {
						if (_common2.default.isUndefined(params.parent)) {
							if (autoPlaceVirgin) {
								autoPlaceContainer = document.createElement('div');
								_dom2.default.addClass(autoPlaceContainer, CSS_NAMESPACE);
								_dom2.default.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
								document.body.appendChild(autoPlaceContainer);
								autoPlaceVirgin = false;
							}

							// Put it in the dom for you.
							autoPlaceContainer.appendChild(this.domElement);

							// Apply the auto styles
							_dom2.default.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
						}

						// Make it not elastic.
						if (!this.parent) {
							setWidth(_this, params.width);
						}
					}

					this.__resizeHandler = function () {
						_this.onResizeDebounced();
					};

					_dom2.default.bind(window, 'resize', this.__resizeHandler);
					_dom2.default.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
					_dom2.default.bind(this.__ul, 'transitionend', this.__resizeHandler);
					_dom2.default.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
					this.onResize();

					if (params.resizable) {
						addResizeHandle(this);
					}

					saveToLocalStorage = function saveToLocalStorage() {
						if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
							localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
						}
					};

					// expose this method publicly
					this.saveToLocalStorageIfPossible = saveToLocalStorage;

					function resetWidth() {
						var root = _this.getRoot();
						root.width += 1;
						_common2.default.defer(function () {
							root.width -= 1;
						});
					}

					if (!params.parent) {
						resetWidth();
					}
				};

				GUI.toggleHide = function () {
					hide = !hide;
					_common2.default.each(hideableGuis, function (gui) {
						gui.domElement.style.display = hide ? 'none' : '';
					});
				};

				GUI.CLASS_AUTO_PLACE = 'a';
				GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
				GUI.CLASS_MAIN = 'main';
				GUI.CLASS_CONTROLLER_ROW = 'cr';
				GUI.CLASS_TOO_TALL = 'taller-than-window';
				GUI.CLASS_CLOSED = 'closed';
				GUI.CLASS_CLOSE_BUTTON = 'close-button';
				GUI.CLASS_CLOSE_TOP = 'close-top';
				GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
				GUI.CLASS_DRAG = 'drag';

				GUI.DEFAULT_WIDTH = 245;
				GUI.TEXT_CLOSED = 'Close Controls';
				GUI.TEXT_OPEN = 'Open Controls';

				GUI._keydownHandler = function (e) {
					if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
						GUI.toggleHide();
					}
				};
				_dom2.default.bind(window, 'keydown', GUI._keydownHandler, false);

				_common2.default.extend(GUI.prototype,

				/** @lends dat.gui.GUI */
				{

					/**
      * @param object
      * @param property
      * @returns {dat.controllers.Controller} The new controller that was added.
      * @instance
      */
					add: function add(object, property) {
						return _add(this, object, property, {
							factoryArgs: Array.prototype.slice.call(arguments, 2)
						});
					},

					/**
      * @param object
      * @param property
      * @returns {dat.controllers.ColorController} The new controller that was added.
      * @instance
      */
					addColor: function addColor(object, property) {
						return _add(this, object, property, {
							color: true
						});
					},

					/**
      * @param controller
      * @instance
      */
					remove: function remove(controller) {
						// TODO listening?
						this.__ul.removeChild(controller.__li);
						this.__controllers.splice(this.__controllers.indexOf(controller), 1);
						var _this = this;
						_common2.default.defer(function () {
							_this.onResize();
						});
					},

					destroy: function destroy() {
						if (this.autoPlace) {
							autoPlaceContainer.removeChild(this.domElement);
						}

						_dom2.default.unbind(window, 'keydown', GUI._keydownHandler, false);
						_dom2.default.unbind(window, 'resize', this.__resizeHandler);

						if (this.saveToLocalStorageIfPossible) {
							_dom2.default.unbind(window, 'unload', this.saveToLocalStorageIfPossible);
						}
					},

					/**
      * @param name
      * @returns {dat.gui.GUI} The new folder.
      * @throws {Error} if this GUI already has a folder by the specified
      * name
      * @instance
      */
					addFolder: function addFolder(name) {
						// We have to prevent collisions on names in order to have a key
						// by which to remember saved values
						if (this.__folders[name] !== undefined) {
							throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
						}

						var newGuiParams = { name: name, parent: this };

						// We need to pass down the autoPlace trait so that we can
						// attach event listeners to open/close folder actions to
						// ensure that a scrollbar appears if the window is too short.
						newGuiParams.autoPlace = this.autoPlace;

						// Do we have saved appearance data for this folder?
						if (this.load && // Anything loaded?
						this.load.folders && // Was my parent a dead-end?
						this.load.folders[name]) {
							// Did daddy remember me?
							// Start me closed if I was closed
							newGuiParams.closed = this.load.folders[name].closed;

							// Pass down the loaded data
							newGuiParams.load = this.load.folders[name];
						}

						var gui = new GUI(newGuiParams);
						this.__folders[name] = gui;

						var li = addRow(this, gui.domElement);
						_dom2.default.addClass(li, 'folder');
						return gui;
					},

					open: function open() {
						this.closed = false;
					},

					close: function close() {
						this.closed = true;
					},

					onResize: function onResize() {
						// we debounce this function to prevent performance issues when rotating on tablet/mobile
						var root = this.getRoot();
						if (root.scrollable) {
							var top = _dom2.default.getOffset(root.__ul).top;
							var h = 0;

							_common2.default.each(root.__ul.childNodes, function (node) {
								if (!(root.autoPlace && node === root.__save_row)) {
									h += _dom2.default.getHeight(node);
								}
							});

							if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
								_dom2.default.addClass(root.domElement, GUI.CLASS_TOO_TALL);
								root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
							} else {
								_dom2.default.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
								root.__ul.style.height = 'auto';
							}
						}

						if (root.__resize_handle) {
							_common2.default.defer(function () {
								root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
							});
						}

						if (root.__closeButton) {
							root.__closeButton.style.width = root.width + 'px';
						}
					},

					onResizeDebounced: _common2.default.debounce(function () {
						this.onResize();
					}, 50),

					/**
      * Mark objects for saving. The order of these objects cannot change as
      * the GUI grows. When remembering new objects, append them to the end
      * of the list.
      *
      * @param {Object...} objects
      * @throws {Error} if not called on a top level GUI.
      * @instance
      */
					remember: function remember() {
						if (_common2.default.isUndefined(SAVE_DIALOGUE)) {
							SAVE_DIALOGUE = new _CenteredDiv2.default();
							SAVE_DIALOGUE.domElement.innerHTML = _saveDialogue2.default;
						}

						if (this.parent) {
							throw new Error('You can only call remember on a top level GUI.');
						}

						var _this = this;

						_common2.default.each(Array.prototype.slice.call(arguments), function (object) {
							if (_this.__rememberedObjects.length === 0) {
								addSaveMenu(_this);
							}
							if (_this.__rememberedObjects.indexOf(object) === -1) {
								_this.__rememberedObjects.push(object);
							}
						});

						if (this.autoPlace) {
							// Set save row width
							setWidth(this, this.width);
						}
					},

					/**
      * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
      * @instance
      */
					getRoot: function getRoot() {
						var gui = this;
						while (gui.parent) {
							gui = gui.parent;
						}
						return gui;
					},

					/**
      * @returns {Object} a JSON object representing the current state of
      * this GUI as well as its remembered properties.
      * @instance
      */
					getSaveObject: function getSaveObject() {
						var toReturn = this.load;
						toReturn.closed = this.closed;

						// Am I remembering any values?
						if (this.__rememberedObjects.length > 0) {
							toReturn.preset = this.preset;

							if (!toReturn.remembered) {
								toReturn.remembered = {};
							}

							toReturn.remembered[this.preset] = getCurrentPreset(this);
						}

						toReturn.folders = {};
						_common2.default.each(this.__folders, function (element, key) {
							toReturn.folders[key] = element.getSaveObject();
						});

						return toReturn;
					},

					save: function save() {
						if (!this.load.remembered) {
							this.load.remembered = {};
						}

						this.load.remembered[this.preset] = getCurrentPreset(this);
						markPresetModified(this, false);
						this.saveToLocalStorageIfPossible();
					},

					saveAs: function saveAs(presetName) {
						if (!this.load.remembered) {
							// Retain default values upon first save
							this.load.remembered = {};
							this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
						}

						this.load.remembered[presetName] = getCurrentPreset(this);
						this.preset = presetName;
						addPresetOption(this, presetName, true);
						this.saveToLocalStorageIfPossible();
					},

					revert: function revert(gui) {
						_common2.default.each(this.__controllers, function (controller) {
							// Make revert work on Default.
							if (!this.getRoot().load.remembered) {
								controller.setValue(controller.initialValue);
							} else {
								recallSavedValue(gui || this.getRoot(), controller);
							}

							// fire onFinishChange callback
							if (controller.__onFinishChange) {
								controller.__onFinishChange.call(controller, controller.getValue());
							}
						}, this);

						_common2.default.each(this.__folders, function (folder) {
							folder.revert(folder);
						});

						if (!gui) {
							markPresetModified(this.getRoot(), false);
						}
					},

					listen: function listen(controller) {
						var init = this.__listening.length === 0;
						this.__listening.push(controller);
						if (init) {
							updateDisplays(this.__listening);
						}
					},

					updateDisplay: function updateDisplay() {
						_common2.default.each(this.__controllers, function (controller) {
							controller.updateDisplay();
						});
						_common2.default.each(this.__folders, function (folder) {
							folder.updateDisplay();
						});
					}
				});

				/**
     * Add a row to the end of the GUI or before another row.
     *
     * @param gui
     * @param [newDom] If specified, inserts the dom content in the new row
     * @param [liBefore] If specified, places the new row before another row
     */
				function addRow(gui, newDom, liBefore) {
					var li = document.createElement('li');
					if (newDom) {
						li.appendChild(newDom);
					}

					if (liBefore) {
						gui.__ul.insertBefore(li, liBefore);
					} else {
						gui.__ul.appendChild(li);
					}
					gui.onResize();
					return li;
				}

				function markPresetModified(gui, modified) {
					var opt = gui.__preset_select[gui.__preset_select.selectedIndex];

					// console.log('mark', modified, opt);
					if (modified) {
						opt.innerHTML = opt.value + '*';
					} else {
						opt.innerHTML = opt.value;
					}
				}

				function augmentController(gui, li, controller) {
					controller.__li = li;
					controller.__gui = gui;

					_common2.default.extend(controller, {
						options: function options(_options) {
							if (arguments.length > 1) {
								var nextSibling = controller.__li.nextElementSibling;
								controller.remove();

								return _add(gui, controller.object, controller.property, {
									before: nextSibling,
									factoryArgs: [_common2.default.toArray(arguments)]
								});
							}

							if (_common2.default.isArray(_options) || _common2.default.isObject(_options)) {
								var _nextSibling = controller.__li.nextElementSibling;
								controller.remove();

								return _add(gui, controller.object, controller.property, {
									before: _nextSibling,
									factoryArgs: [_options]
								});
							}
						},

						name: function name(v) {
							controller.__li.firstElementChild.firstElementChild.innerHTML = v;
							return controller;
						},

						listen: function listen() {
							controller.__gui.listen(controller);
							return controller;
						},

						remove: function remove() {
							controller.__gui.remove(controller);
							return controller;
						}
					});

					// All sliders should be accompanied by a box.
					if (controller instanceof _NumberControllerSlider2.default) {
						var box = new _NumberControllerBox2.default(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });

						_common2.default.each(['updateDisplay', 'onChange', 'onFinishChange', 'step'], function (method) {
							var pc = controller[method];
							var pb = box[method];
							controller[method] = box[method] = function () {
								var args = Array.prototype.slice.call(arguments);
								pb.apply(box, args);
								return pc.apply(controller, args);
							};
						});

						_dom2.default.addClass(li, 'has-slider');
						controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
					} else if (controller instanceof _NumberControllerBox2.default) {
						var r = function r(returned) {
							// Have we defined both boundaries?
							if (_common2.default.isNumber(controller.__min) && _common2.default.isNumber(controller.__max)) {
								// Well, then lets just replace this with a slider.

								// lets remember if the old controller had a specific name or was listening
								var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
								var wasListening = controller.__gui.__listening.indexOf(controller) > -1;

								controller.remove();
								var newController = _add(gui, controller.object, controller.property, {
									before: controller.__li.nextElementSibling,
									factoryArgs: [controller.__min, controller.__max, controller.__step]
								});

								newController.name(oldName);
								if (wasListening) newController.listen();

								return newController;
							}

							return returned;
						};

						controller.min = _common2.default.compose(r, controller.min);
						controller.max = _common2.default.compose(r, controller.max);
					} else if (controller instanceof _BooleanController2.default) {
						_dom2.default.bind(li, 'click', function () {
							_dom2.default.fakeEvent(controller.__checkbox, 'click');
						});

						_dom2.default.bind(controller.__checkbox, 'click', function (e) {
							e.stopPropagation(); // Prevents double-toggle
						});
					} else if (controller instanceof _FunctionController2.default) {
						_dom2.default.bind(li, 'click', function () {
							_dom2.default.fakeEvent(controller.__button, 'click');
						});

						_dom2.default.bind(li, 'mouseover', function () {
							_dom2.default.addClass(controller.__button, 'hover');
						});

						_dom2.default.bind(li, 'mouseout', function () {
							_dom2.default.removeClass(controller.__button, 'hover');
						});
					} else if (controller instanceof _ColorController2.default) {
						_dom2.default.addClass(li, 'color');
						controller.updateDisplay = _common2.default.compose(function (val) {
							li.style.borderLeftColor = controller.__color.toString();
							return val;
						}, controller.updateDisplay);

						controller.updateDisplay();
					}

					controller.setValue = _common2.default.compose(function (val) {
						if (gui.getRoot().__preset_select && controller.isModified()) {
							markPresetModified(gui.getRoot(), true);
						}

						return val;
					}, controller.setValue);
				}

				function recallSavedValue(gui, controller) {
					// Find the topmost GUI, that's where remembered objects live.
					var root = gui.getRoot();

					// Does the object we're controlling match anything we've been told to
					// remember?
					var matchedIndex = root.__rememberedObjects.indexOf(controller.object);

					// Why yes, it does!
					if (matchedIndex !== -1) {
						// Let me fetch a map of controllers for thcommon.isObject.
						var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];

						// Ohp, I believe this is the first controller we've created for this
						// object. Lets make the map fresh.
						if (controllerMap === undefined) {
							controllerMap = {};
							root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
						}

						// Keep track of this controller
						controllerMap[controller.property] = controller;

						// Okay, now have we saved any values for this controller?
						if (root.load && root.load.remembered) {
							var presetMap = root.load.remembered;

							// Which preset are we trying to load?
							var preset = void 0;

							if (presetMap[gui.preset]) {
								preset = presetMap[gui.preset];
							} else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
								// Uhh, you can have the default instead?
								preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
							} else {
								// Nada.
								return;
							}

							// Did the loaded object remember thcommon.isObject? &&  Did we remember this particular property?
							if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
								// We did remember something for this guy ...
								var value = preset[matchedIndex][controller.property];

								// And that's what it is.
								controller.initialValue = value;
								controller.setValue(value);
							}
						}
					}
				}

				function _add(gui, object, property, params) {
					if (object[property] === undefined) {
						throw new Error('Object "' + object + '" has no property "' + property + '"');
					}

					var controller = void 0;

					if (params.color) {
						controller = new _ColorController2.default(object, property);
					} else {
						var factoryArgs = [object, property].concat(params.factoryArgs);
						controller = _ControllerFactory2.default.apply(gui, factoryArgs);
					}

					if (params.before instanceof _Controller2.default) {
						params.before = params.before.__li;
					}

					recallSavedValue(gui, controller);

					_dom2.default.addClass(controller.domElement, 'c');

					var name = document.createElement('span');
					_dom2.default.addClass(name, 'property-name');
					name.innerHTML = controller.property;

					var container = document.createElement('div');
					container.appendChild(name);
					container.appendChild(controller.domElement);

					var li = addRow(gui, container, params.before);

					_dom2.default.addClass(li, GUI.CLASS_CONTROLLER_ROW);
					if (controller instanceof _ColorController2.default) {
						_dom2.default.addClass(li, 'color');
					} else {
						_dom2.default.addClass(li, _typeof$$1(controller.getValue()));
					}

					augmentController(gui, li, controller);

					gui.__controllers.push(controller);

					return controller;
				}

				function getLocalStorageHash(gui, key) {
					// TODO how does this deal with multiple GUI's?
					return document.location.href + '.' + key;
				}

				function addPresetOption(gui, name, setSelected) {
					var opt = document.createElement('option');
					opt.innerHTML = name;
					opt.value = name;
					gui.__preset_select.appendChild(opt);
					if (setSelected) {
						gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
					}
				}

				function showHideExplain(gui, explain) {
					explain.style.display = gui.useLocalStorage ? 'block' : 'none';
				}

				function addSaveMenu(gui) {
					var div = gui.__save_row = document.createElement('li');

					_dom2.default.addClass(gui.domElement, 'has-save');

					gui.__ul.insertBefore(div, gui.__ul.firstChild);

					_dom2.default.addClass(div, 'save-row');

					var gears = document.createElement('span');
					gears.innerHTML = '&nbsp;';
					_dom2.default.addClass(gears, 'button gears');

					// TODO replace with FunctionController
					var button = document.createElement('span');
					button.innerHTML = 'Save';
					_dom2.default.addClass(button, 'button');
					_dom2.default.addClass(button, 'save');

					var button2 = document.createElement('span');
					button2.innerHTML = 'New';
					_dom2.default.addClass(button2, 'button');
					_dom2.default.addClass(button2, 'save-as');

					var button3 = document.createElement('span');
					button3.innerHTML = 'Revert';
					_dom2.default.addClass(button3, 'button');
					_dom2.default.addClass(button3, 'revert');

					var select = gui.__preset_select = document.createElement('select');

					if (gui.load && gui.load.remembered) {
						_common2.default.each(gui.load.remembered, function (value, key) {
							addPresetOption(gui, key, key === gui.preset);
						});
					} else {
						addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
					}

					_dom2.default.bind(select, 'change', function () {
						for (var index = 0; index < gui.__preset_select.length; index++) {
							gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
						}

						gui.preset = this.value;
					});

					div.appendChild(select);
					div.appendChild(gears);
					div.appendChild(button);
					div.appendChild(button2);
					div.appendChild(button3);

					if (SUPPORTS_LOCAL_STORAGE) {
						var explain = document.getElementById('dg-local-explain');
						var localStorageCheckBox = document.getElementById('dg-local-storage');
						var saveLocally = document.getElementById('dg-save-locally');

						saveLocally.style.display = 'block';

						if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
							localStorageCheckBox.setAttribute('checked', 'checked');
						}

						showHideExplain(gui, explain);

						// TODO: Use a boolean controller, fool!
						_dom2.default.bind(localStorageCheckBox, 'change', function () {
							gui.useLocalStorage = !gui.useLocalStorage;
							showHideExplain(gui, explain);
						});
					}

					var newConstructorTextArea = document.getElementById('dg-new-constructor');

					_dom2.default.bind(newConstructorTextArea, 'keydown', function (e) {
						if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
							SAVE_DIALOGUE.hide();
						}
					});

					_dom2.default.bind(gears, 'click', function () {
						newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
						SAVE_DIALOGUE.show();
						newConstructorTextArea.focus();
						newConstructorTextArea.select();
					});

					_dom2.default.bind(button, 'click', function () {
						gui.save();
					});

					_dom2.default.bind(button2, 'click', function () {
						var presetName = prompt('Enter a new preset name.');
						if (presetName) {
							gui.saveAs(presetName);
						}
					});

					_dom2.default.bind(button3, 'click', function () {
						gui.revert();
					});

					// div.appendChild(button2);
				}

				function addResizeHandle(gui) {
					var pmouseX = void 0;

					gui.__resize_handle = document.createElement('div');

					_common2.default.extend(gui.__resize_handle.style, {

						width: '6px',
						marginLeft: '-3px',
						height: '200px',
						cursor: 'ew-resize',
						position: 'absolute'
						// border: '1px solid blue'

					});

					function drag(e) {
						e.preventDefault();

						gui.width += pmouseX - e.clientX;
						gui.onResize();
						pmouseX = e.clientX;

						return false;
					}

					function dragStop() {
						_dom2.default.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
						_dom2.default.unbind(window, 'mousemove', drag);
						_dom2.default.unbind(window, 'mouseup', dragStop);
					}

					function dragStart(e) {
						e.preventDefault();

						pmouseX = e.clientX;

						_dom2.default.addClass(gui.__closeButton, GUI.CLASS_DRAG);
						_dom2.default.bind(window, 'mousemove', drag);
						_dom2.default.bind(window, 'mouseup', dragStop);

						return false;
					}

					_dom2.default.bind(gui.__resize_handle, 'mousedown', dragStart);
					_dom2.default.bind(gui.__closeButton, 'mousedown', dragStart);

					gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
				}

				function setWidth(gui, w) {
					gui.domElement.style.width = w + 'px';
					// Auto placed save-rows are position fixed, so we have to
					// set the width manually if we want it to bleed to the edge
					if (gui.__save_row && gui.autoPlace) {
						gui.__save_row.style.width = w + 'px';
					}
					if (gui.__closeButton) {
						gui.__closeButton.style.width = w + 'px';
					}
				}

				function getCurrentPreset(gui, useInitialValues) {
					var toReturn = {};

					// For each object I'm remembering
					_common2.default.each(gui.__rememberedObjects, function (val, index) {
						var savedValues = {};

						// The controllers I've made for thcommon.isObject by property
						var controllerMap = gui.__rememberedObjectIndecesToControllers[index];

						// Remember each value for each property
						_common2.default.each(controllerMap, function (controller, property) {
							savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
						});

						// Save the values for thcommon.isObject
						toReturn[index] = savedValues;
					});

					return toReturn;
				}

				function setPresetSelectIndex(gui) {
					for (var index = 0; index < gui.__preset_select.length; index++) {
						if (gui.__preset_select[index].value === gui.preset) {
							gui.__preset_select.selectedIndex = index;
						}
					}
				}

				function updateDisplays(controllerArray) {
					if (controllerArray.length !== 0) {
						_requestAnimationFrame2.default.call(window, function () {
							updateDisplays(controllerArray);
						});
					}

					_common2.default.each(controllerArray, function (c) {
						c.updateDisplay();
					});
				}

				exports.default = GUI;
				module.exports = exports['default'];

				/***/
			},
			/* 18 */
			/***/function (module, exports) {

				module.exports = {
					load: function load(url, indoc) {
						var doc = indoc || document;
						var link = doc.createElement('link');
						link.type = 'text/css';
						link.rel = 'stylesheet';
						link.href = url;
						doc.getElementsByTagName('head')[0].appendChild(link);
					},

					inject: function inject(css, indoc) {
						var doc = indoc || document;
						var injected = document.createElement('style');
						injected.type = 'text/css';
						injected.innerHTML = css;
						var head = doc.getElementsByTagName('head')[0];
						try {
							head.appendChild(injected);
						} catch (e) {// Unable to inject CSS, probably because of a Content Security Policy
						}
					}
				};

				/***/
			},
			/* 19 */
			/***/function (module, exports) {

				module.exports = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

				/***/
			},
			/* 20 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _OptionController = __webpack_require__(10);

				var _OptionController2 = _interopRequireDefault(_OptionController);

				var _NumberControllerBox = __webpack_require__(13);

				var _NumberControllerBox2 = _interopRequireDefault(_NumberControllerBox);

				var _NumberControllerSlider = __webpack_require__(14);

				var _NumberControllerSlider2 = _interopRequireDefault(_NumberControllerSlider);

				var _StringController = __webpack_require__(11);

				var _StringController2 = _interopRequireDefault(_StringController);

				var _FunctionController = __webpack_require__(15);

				var _FunctionController2 = _interopRequireDefault(_FunctionController);

				var _BooleanController = __webpack_require__(8);

				var _BooleanController2 = _interopRequireDefault(_BooleanController);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var ControllerFactory = function ControllerFactory(object, property) {
					var initialValue = object[property];

					// Providing options?
					if (_common2.default.isArray(arguments[2]) || _common2.default.isObject(arguments[2])) {
						return new _OptionController2.default(object, property, arguments[2]);
					}

					// Providing a map?
					if (_common2.default.isNumber(initialValue)) {
						// Has min and max? (slider)
						if (_common2.default.isNumber(arguments[2]) && _common2.default.isNumber(arguments[3])) {
							// has step?
							if (_common2.default.isNumber(arguments[4])) {
								return new _NumberControllerSlider2.default(object, property, arguments[2], arguments[3], arguments[4]);
							}

							return new _NumberControllerSlider2.default(object, property, arguments[2], arguments[3]);
						}

						// number box
						if (_common2.default.isNumber(arguments[4])) {
							// has step
							return new _NumberControllerBox2.default(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
						}
						return new _NumberControllerBox2.default(object, property, { min: arguments[2], max: arguments[3] });
					}

					if (_common2.default.isString(initialValue)) {
						return new _StringController2.default(object, property);
					}

					if (_common2.default.isFunction(initialValue)) {
						return new _FunctionController2.default(object, property, '');
					}

					if (_common2.default.isBoolean(initialValue)) {
						return new _BooleanController2.default(object, property);
					}

					return null;
				}; /**
        * dat-gui JavaScript Controller Library
        * http://code.google.com/p/dat-gui
        *
        * Copyright 2011 Data Arts Team, Google Creative Lab
        *
        * Licensed under the Apache License, Version 2.0 (the "License");
        * you may not use this file except in compliance with the License.
        * You may obtain a copy of the License at
        *
        * http://www.apache.org/licenses/LICENSE-2.0
        */

				exports.default = ControllerFactory;
				module.exports = exports['default'];

				/***/
			},
			/* 21 */
			/***/function (module, exports) {

				exports.__esModule = true;
				/**
     * dat-gui JavaScript Controller Library
     * http://code.google.com/p/dat-gui
     *
     * Copyright 2011 Data Arts Team, Google Creative Lab
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     */

				function requestAnimationFrame(callback) {
					setTimeout(callback, 1000 / 60);
				}

				exports.default = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;
				module.exports = exports["default"];

				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {

				exports.__esModule = true;

				var _dom = __webpack_require__(9);

				var _dom2 = _interopRequireDefault(_dom);

				var _common = __webpack_require__(5);

				var _common2 = _interopRequireDefault(_common);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				} /**
       * dat-gui JavaScript Controller Library
       * http://code.google.com/p/dat-gui
       *
       * Copyright 2011 Data Arts Team, Google Creative Lab
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

				var CenteredDiv = function () {
					function CenteredDiv() {
						_classCallCheck(this, CenteredDiv);

						this.backgroundElement = document.createElement('div');
						_common2.default.extend(this.backgroundElement.style, {
							backgroundColor: 'rgba(0,0,0,0.8)',
							top: 0,
							left: 0,
							display: 'none',
							zIndex: '1000',
							opacity: 0,
							WebkitTransition: 'opacity 0.2s linear',
							transition: 'opacity 0.2s linear'
						});

						_dom2.default.makeFullscreen(this.backgroundElement);
						this.backgroundElement.style.position = 'fixed';

						this.domElement = document.createElement('div');
						_common2.default.extend(this.domElement.style, {
							position: 'fixed',
							display: 'none',
							zIndex: '1001',
							opacity: 0,
							WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
							transition: 'transform 0.2s ease-out, opacity 0.2s linear'
						});

						document.body.appendChild(this.backgroundElement);
						document.body.appendChild(this.domElement);

						var _this = this;
						_dom2.default.bind(this.backgroundElement, 'click', function () {
							_this.hide();
						});
					}

					CenteredDiv.prototype.show = function show() {
						var _this = this;

						this.backgroundElement.style.display = 'block';

						this.domElement.style.display = 'block';
						this.domElement.style.opacity = 0;
						//    this.domElement.style.top = '52%';
						this.domElement.style.webkitTransform = 'scale(1.1)';

						this.layout();

						_common2.default.defer(function () {
							_this.backgroundElement.style.opacity = 1;
							_this.domElement.style.opacity = 1;
							_this.domElement.style.webkitTransform = 'scale(1)';
						});
					};

					/**
      * Hide centered div
      */

					CenteredDiv.prototype.hide = function hide() {
						var _this = this;

						var hide = function hide() {
							_this.domElement.style.display = 'none';
							_this.backgroundElement.style.display = 'none';

							_dom2.default.unbind(_this.domElement, 'webkitTransitionEnd', hide);
							_dom2.default.unbind(_this.domElement, 'transitionend', hide);
							_dom2.default.unbind(_this.domElement, 'oTransitionEnd', hide);
						};

						_dom2.default.bind(this.domElement, 'webkitTransitionEnd', hide);
						_dom2.default.bind(this.domElement, 'transitionend', hide);
						_dom2.default.bind(this.domElement, 'oTransitionEnd', hide);

						this.backgroundElement.style.opacity = 0;
						//    this.domElement.style.top = '48%';
						this.domElement.style.opacity = 0;
						this.domElement.style.webkitTransform = 'scale(1.1)';
					};

					CenteredDiv.prototype.layout = function layout() {
						this.domElement.style.left = window.innerWidth / 2 - _dom2.default.getWidth(this.domElement) / 2 + 'px';
						this.domElement.style.top = window.innerHeight / 2 - _dom2.default.getHeight(this.domElement) / 2 + 'px';
					};

					return CenteredDiv;
				}();

				exports.default = CenteredDiv;
				module.exports = exports['default'];

				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(24)();
				// imports


				// module
				exports.push([module.id, ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */\n  /** allow overflow for color selector */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button.close-top {\n        position: relative; }\n      .dg.main .close-button.close-bottom {\n        position: absolute; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-y: visible; }\n    .dg.a.has-save > ul.close-top {\n      margin-top: 0; }\n    .dg.a.has-save > ul.close-bottom {\n      margin-top: 27px; }\n    .dg.a.has-save > ul.closed {\n      margin-top: 0; }\n    .dg.a .save-row {\n      top: 0;\n      z-index: 1002; }\n      .dg.a .save-row.close-top {\n        position: relative; }\n      .dg.a .save-row.close-bottom {\n        position: fixed; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out;\n    -webkit-transition: overflow 0.1s linear;\n    -o-transition: overflow 0.1s linear;\n    -moz-transition: overflow 0.1s linear;\n    transition: overflow 0.1s linear; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid transparent; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px;\n    overflow: hidden; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%;\n    position: relative; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 7px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .cr.color {\n    overflow: visible; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.color {\n    border-left: 3px solid; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2FA1D6; }\n    .dg .cr.number input[type=text] {\n      color: #2FA1D6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2FA1D6;\n    max-width: 100%; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", ""]);

				// exports


				/***/
			},
			/* 24 */
			/***/function (module, exports) {

				/*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];

					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};

					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string") modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number") alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};

				/***/
			}
			/******/])
		);
	});
	
	
});

var dat = unwrapExports(dat_gui);

var strictUriEncode = function strictUriEncode(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$1(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$1(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function extract(str) {
	return str.split('?')[1] || '';
};

var parse = function parse(str, opts) {
	opts = objectAssign({ arrayFormat: 'none' }, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function stringify(obj, opts) {
	var defaults$$1 = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults$$1, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var queryString = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

var debounce = function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

var alea = createCommonjsModule(function (module) {
  // A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
  // http://baagoe.com/en/RandomMusings/javascript/
  // https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
  // Original work is under MIT license -

  // Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:
  // 
  // The above copyright notice and this permission notice shall be included in
  // all copies or substantial portions of the Software.
  // 
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  // THE SOFTWARE.


  (function (global, module, define) {

    function Alea(seed) {
      var me = this,
          mash = Mash();

      me.next = function () {
        var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
        me.s0 = me.s1;
        me.s1 = me.s2;
        return me.s2 = t - (me.c = t | 0);
      };

      // Apply the seeding algorithm from Baagoe.
      me.c = 1;
      me.s0 = mash(' ');
      me.s1 = mash(' ');
      me.s2 = mash(' ');
      me.s0 -= mash(seed);
      if (me.s0 < 0) {
        me.s0 += 1;
      }
      me.s1 -= mash(seed);
      if (me.s1 < 0) {
        me.s1 += 1;
      }
      me.s2 -= mash(seed);
      if (me.s2 < 0) {
        me.s2 += 1;
      }
      mash = null;
    }

    function copy(f, t) {
      t.c = f.c;
      t.s0 = f.s0;
      t.s1 = f.s1;
      t.s2 = f.s2;
      return t;
    }

    function impl(seed, opts) {
      var xg = new Alea(seed),
          state = opts && opts.state,
          prng = xg.next;
      prng.int32 = function () {
        return xg.next() * 0x100000000 | 0;
      };
      prng.double = function () {
        return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
      };
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    function Mash() {
      var n = 0xefc8249d;

      var mash = function mash(data) {
        data = data.toString();
        for (var i = 0; i < data.length; i++) {
          n += data.charCodeAt(i);
          var h = 0.02519603282416938 * n;
          n = h >>> 0;
          h -= n;
          h *= n;
          n = h >>> 0;
          h -= n;
          n += h * 0x100000000; // 2^32
        }
        return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
      };

      return mash;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.alea = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xor128 = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xor128" prng algorithm by
  // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this,
          strseed = '';

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;

      // Set up generator function.
      me.next = function () {
        var t = me.x ^ me.x << 11;
        me.x = me.y;
        me.y = me.z;
        me.z = me.w;
        return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
      };

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xor128 = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xorwow = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xorwow" prng algorithm by
  // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this,
          strseed = '';

      // Set up generator function.
      me.next = function () {
        var t = me.x ^ me.x >>> 2;
        me.x = me.y;me.y = me.z;me.z = me.w;me.w = me.v;
        return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
      };

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;
      me.v = 0;

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        if (k == strseed.length) {
          me.d = me.x << 10 ^ me.x >>> 4;
        }
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      t.v = f.v;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xorwow = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xorshift7 = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xorshift7" algorithm by
  // François Panneton and Pierre L'ecuyer:
  // "On the Xorgshift Random Number Generators"
  // http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this;

      // Set up generator function.
      me.next = function () {
        // Update xor generator.
        var X = me.x,
            i = me.i,
            t,
            v;
        t = X[i];t ^= t >>> 7;v = t ^ t << 24;
        t = X[i + 1 & 7];v ^= t ^ t >>> 10;
        t = X[i + 3 & 7];v ^= t ^ t >>> 3;
        t = X[i + 4 & 7];v ^= t ^ t << 7;
        t = X[i + 7 & 7];t = t ^ t << 13;v ^= t ^ t << 9;
        X[i] = v;
        me.i = i + 1 & 7;
        return v;
      };

      function init(me, seed) {
        var j,
            w,
            X = [];

        if (seed === (seed | 0)) {
          // Seed state array using a 32-bit integer.
          w = X[0] = seed;
        } else {
          // Seed state using a string.
          seed = '' + seed;
          for (j = 0; j < seed.length; ++j) {
            X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
          }
        }
        // Enforce an array length of 8, not all zeroes.
        while (X.length < 8) {
          X.push(0);
        }for (j = 0; j < 8 && X[j] === 0; ++j) {}
        if (j == 8) w = X[7] = -1;else w = X[j];

        me.x = X;
        me.i = 0;

        // Discard an initial 256 values.
        for (j = 256; j > 0; --j) {
          me.next();
        }
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.x = f.x.slice();
      t.i = f.i;
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +new Date();
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (state.x) copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xorshift7 = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var xor4096 = createCommonjsModule(function (module) {
  // A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
  //
  // This fast non-cryptographic random number generator is designed for
  // use in Monte-Carlo algorithms. It combines a long-period xorshift
  // generator with a Weyl generator, and it passes all common batteries
  // of stasticial tests for randomness while consuming only a few nanoseconds
  // for each prng generated.  For background on the generator, see Brent's
  // paper: "Some long-period random number generators using shifts and xors."
  // http://arxiv.org/pdf/1004.3115v1.pdf
  //
  // Usage:
  //
  // var xor4096 = require('xor4096');
  // random = xor4096(1);                        // Seed with int32 or string.
  // assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
  // assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
  //
  // For nonzero numeric keys, this impelementation provides a sequence
  // identical to that by Brent's xorgens 3 implementaion in C.  This
  // implementation also provides for initalizing the generator with
  // string seeds, or for saving and restoring the state of the generator.
  //
  // On Chrome, this prng benchmarks about 2.1 times slower than
  // Javascript's built-in Math.random().

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this;

      // Set up generator function.
      me.next = function () {
        var w = me.w,
            X = me.X,
            i = me.i,
            t,
            v;
        // Update Weyl generator.
        me.w = w = w + 0x61c88647 | 0;
        // Update xor generator.
        v = X[i + 34 & 127];
        t = X[i = i + 1 & 127];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12;
        // Update Xor generator array state.
        v = X[i] = v ^ t;
        me.i = i;
        // Result is the combination.
        return v + (w ^ w >>> 16) | 0;
      };

      function init(me, seed) {
        var t,
            v,
            i,
            j,
            w,
            X = [],
            limit = 128;
        if (seed === (seed | 0)) {
          // Numeric seeds initialize v, which is used to generates X.
          v = seed;
          seed = null;
        } else {
          // String seeds are mixed into v and X one character at a time.
          seed = seed + '\0';
          v = 0;
          limit = Math.max(limit, seed.length);
        }
        // Initialize circular array and weyl value.
        for (i = 0, j = -32; j < limit; ++j) {
          // Put the unicode characters into the array, and shuffle them.
          if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
          // After 32 shuffles, take v as the starting w value.
          if (j === 0) w = v;
          v ^= v << 10;
          v ^= v >>> 15;
          v ^= v << 4;
          v ^= v >>> 13;
          if (j >= 0) {
            w = w + 0x61c88647 | 0; // Weyl.
            t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
            i = 0 == t ? i + 1 : 0; // Count zeroes.
          }
        }
        // We have detected all zeroes; make the key nonzero.
        if (i >= 128) {
          X[(seed && seed.length || 0) & 127] = -1;
        }
        // Run the generator 512 times to further mix the state before using it.
        // Factoring this as a function slows the main generator, so it is just
        // unrolled here.  The weyl generator is not advanced while warming up.
        i = 127;
        for (j = 4 * 128; j > 0; --j) {
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          X[i] = v ^ t;
        }
        // Storing state as object members is faster than using closure variables.
        me.w = w;
        me.X = X;
        me.i = i;
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.i = f.i;
      t.w = f.w;
      t.X = f.X.slice();
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +new Date();
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if (state.X) copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xor4096 = impl;
    }
  })(commonjsGlobal, // window object or global
  'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var tychei = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "Tyche-i" prng algorithm by
  // Samuel Neves and Filipe Araujo.
  // See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

  (function (global, module, define) {

    function XorGen(seed) {
      var me = this,
          strseed = '';

      // Set up generator function.
      me.next = function () {
        var b = me.b,
            c = me.c,
            d = me.d,
            a = me.a;
        b = b << 25 ^ b >>> 7 ^ c;
        c = c - d | 0;
        d = d << 24 ^ d >>> 8 ^ a;
        a = a - b | 0;
        me.b = b = b << 20 ^ b >>> 12 ^ c;
        me.c = c = c - d | 0;
        me.d = d << 16 ^ c >>> 16 ^ a;
        return me.a = a - b | 0;
      };

      /* The following is non-inverted tyche, which has better internal
       * bit diffusion, but which is about 25% slower than tyche-i in JS.
      me.next = function() {
        var a = me.a, b = me.b, c = me.c, d = me.d;
        a = (me.a + me.b | 0) >>> 0;
        d = me.d ^ a; d = d << 16 ^ d >>> 16;
        c = me.c + d | 0;
        b = me.b ^ c; b = b << 12 ^ d >>> 20;
        me.a = a = a + b | 0;
        d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
        me.c = c = c + d | 0;
        b = b ^ c;
        return me.b = (b << 7 ^ b >>> 25);
      }
      */

      me.a = 0;
      me.b = 0;
      me.c = 2654435769 | 0;
      me.d = 1367130551;

      if (seed === Math.floor(seed)) {
        // Integer seed.
        me.a = seed / 0x100000000 | 0;
        me.b = seed | 0;
      } else {
        // String seed.
        strseed += seed;
      }

      // Mix in string seed, then discard an initial batch of 64 values.
      for (var k = 0; k < strseed.length + 20; k++) {
        me.b ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.a = f.a;
      t.b = f.b;
      t.c = f.c;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);
        return result;
      };
      prng.int32 = xg.next;
      prng.quick = prng;
      if (state) {
        if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
        prng.state = function () {
          return copy(xg, {});
        };
      }
      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.tychei = impl;
    }
  })(commonjsGlobal, 'object' == 'object' && module, // present in node.js
  typeof undefined == 'function' && undefined // present with an AMD loader
  );
});

var empty$1 = {};

var empty$2 = Object.freeze({
	default: empty$1
});

var require$$0$29 = ( empty$2 && empty$1 ) || empty$2;

var seedrandom = createCommonjsModule(function (module) {
  /*
  Copyright 2014 David Bau.
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  */

  (function (pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var global = this,
        width = 256,
        // each RC4 output is 0 <= x < 256
    chunks = 6,
        // at least six RC4 outputs for each double
    digits = 52,
        // there are 52 significant digits in a double
    rngname = 'random',
        // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto; // node.js crypto module, initialized at the bottom.

    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed, options, callback) {
      var key = [];
      options = options == true ? { entropy: true } : options || {};

      // Flatten the seed string or build one from local entropy if needed.
      var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key);

      // Use the seed to initialize an ARC4 generator.
      var arc4 = new ARC4(key);

      // This function returns a random double in [0, 1) that contains
      // randomness in every bit of the mantissa of the IEEE 754 value.
      var prng = function prng() {
        var n = arc4.g(chunks),
            // Start with a numerator n < 2 ^ 48
        d = startdenom,
            //   and denominator d = 2 ^ 48.
        x = 0; //   and no 'extra last byte'.
        while (n < significance) {
          // Fill up all significant digits by
          n = (n + x) * width; //   shifting numerator and
          d *= width; //   denominator and generating a
          x = arc4.g(1); //   new least-significant-byte.
        }
        while (n >= overflow) {
          // To avoid rounding up, before adding
          n /= 2; //   last byte, shift everything
          d /= 2; //   right using integer math until
          x >>>= 1; //   we have exactly the desired bits.
        }
        return (n + x) / d; // Form the number within [0, 1).
      };

      prng.int32 = function () {
        return arc4.g(4) | 0;
      };
      prng.quick = function () {
        return arc4.g(4) / 0x100000000;
      };
      prng.double = prng;

      // Mix the randomness into accumulated entropy.
      mixkey(tostring(arc4.S), pool);

      // Calling convention: what to return as a function of prng, seed, is_math.
      return (options.pass || callback || function (prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) {
            copy(state, arc4);
          }
          // Only provide the .state method if requested via options.state.
          prng.state = function () {
            return copy(arc4, {});
          };
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) {
          math[rngname] = prng;return seed;
        }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    }
    math['seed' + rngname] = seedrandom;

    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
      var t,
          keylen = key.length,
          me = this,
          i = 0,
          j = me.i = me.j = 0,
          s = me.S = [];

      // The empty key [] is treated as [0].
      if (!keylen) {
        key = [keylen++];
      }

      // Set up S using the standard key scheduling algorithm.
      while (i < width) {
        s[i] = i++;
      }
      for (i = 0; i < width; i++) {
        s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
        s[j] = t;
      }

      // The "g" method returns the next (count) outputs as one number.
      (me.g = function (count) {
        // Using instance members instead of closure state nearly doubles speed.
        var t,
            r = 0,
            i = me.i,
            j = me.j,
            s = me.S;
        while (count--) {
          t = s[i = mask & i + 1];
          r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
        }
        me.i = i;me.j = j;
        return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
      })(width);
    }

    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
      t.i = f.i;
      t.j = f.j;
      t.S = f.S.slice();
      return t;
    }

    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
      var result = [],
          typ = typeof obj === 'undefined' ? 'undefined' : _typeof(obj),
          prop;
      if (depth && typ == 'object') {
        for (prop in obj) {
          try {
            result.push(flatten(obj[prop], depth - 1));
          } catch (e) {}
        }
      }
      return result.length ? result : typ == 'string' ? obj : obj + '\0';
    }

    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
      var stringseed = seed + '',
          smear,
          j = 0;
      while (j < stringseed.length) {
        key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
      }
      return tostring(key);
    }

    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
      try {
        var out;
        if (nodecrypto && (out = nodecrypto.randomBytes)) {
          // The use of 'out' to remember randomBytes makes tight minified code.
          out = out(width);
        } else {
          out = new Uint8Array(width);
          (global.crypto || global.msCrypto).getRandomValues(out);
        }
        return tostring(out);
      } catch (e) {
        var browser = global.navigator,
            plugins = browser && browser.plugins;
        return [+new Date(), global, plugins, global.screen, tostring(pool)];
      }
    }

    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
      return String.fromCharCode.apply(0, a);
    }

    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);

    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if ('object' == 'object' && module.exports) {
      module.exports = seedrandom;
      // When in node.js, try using crypto package for autoseeding.
      try {
        nodecrypto = require$$0$29;
      } catch (ex) {}
    } else if (typeof undefined == 'function' && undefined.amd) {
      undefined(function () {
        return seedrandom;
      });
    }

    // End anonymous scope, and pass initial values.
  })([], // pool: entropy pool starts empty
  Math // math: package containing random, pow, and seedrandom
  );
});

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.


// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.


// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.


// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.


// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.


// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.


// The original ARC4-based prng included in this library.
// Period: ~2^1600


seedrandom.alea = alea;
seedrandom.xor128 = xor128;
seedrandom.xorwow = xorwow;
seedrandom.xorshift7 = xorshift7;
seedrandom.xor4096 = xor4096;
seedrandom.tychei = tychei;

var seedrandom$2 = seedrandom;

var logger = {
  active: false,
  log: function log(message) {
    logger.print('log', message);
  },
  warn: function warn(message) {
    logger.print('warn', message);
  },
  error: function error(message) {
    logger.print('error', message);
  },
  info: function info(message) {
    logger.print('info', message);
  },
  print: function print(type, message) {
    if (logger.active) console[type]('\uD83D\uDC49 Sandpit: ' + message);
  }
};

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
};

var simpleSwizzle = createCommonjsModule(function (module) {
	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = module.exports = function swizzle(args) {
		var results = [];

		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];

			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}

		return results;
	};

	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};
});

var colorString = createCommonjsModule(function (module) {
	/* MIT license */

	var reverseNames = {};

	// create a list of reverse color names
	for (var name in colorName) {
		if (colorName.hasOwnProperty(name)) {
			reverseNames[colorName[name]] = name;
		}
	}

	var cs = module.exports = {
		to: {}
	};

	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}

		if (!val) {
			return null;
		}

		return { model: model, value: val };
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var keyword = /(\D+)/;

		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				rgb[3] = parseFloat(match[4]);
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			rgb = colorName[match[1]];

			if (!rgb) {
				return null;
			}

			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hsl);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = (parseFloat(match[1]) % 360 + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
		var match = string.match(hwb);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = (parseFloat(match[1]) % 360 + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function () {
		var rgba = simpleSwizzle(arguments);

		return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
	};

	cs.to.rgb = function () {
		var rgba = simpleSwizzle(arguments);

		return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
		var rgba = simpleSwizzle(arguments);

		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
		var hsla = simpleSwizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = simpleSwizzle(arguments);

		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
		var str = num.toString(16).toUpperCase();
		return str.length < 2 ? '0' + str : str;
	}
});

var colorString_1 = colorString.to;

var conversions = createCommonjsModule(function (module) {
	/* MIT license */

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	var reverseKeywords = {};
	for (var key in colorName) {
		if (colorName.hasOwnProperty(key)) {
			reverseKeywords[colorName[key]] = key;
		}
	}

	var convert = module.exports = {
		rgb: { channels: 3, labels: 'rgb' },
		hsl: { channels: 3, labels: 'hsl' },
		hsv: { channels: 3, labels: 'hsv' },
		hwb: { channels: 3, labels: 'hwb' },
		cmyk: { channels: 4, labels: 'cmyk' },
		xyz: { channels: 3, labels: 'xyz' },
		lab: { channels: 3, labels: 'lab' },
		lch: { channels: 3, labels: 'lch' },
		hex: { channels: 1, labels: ['hex'] },
		keyword: { channels: 1, labels: ['keyword'] },
		ansi16: { channels: 1, labels: ['ansi16'] },
		ansi256: { channels: 1, labels: ['ansi256'] },
		hcg: { channels: 3, labels: ['h', 'c', 'g'] },
		apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
		gray: { channels: 1, labels: ['gray'] }
	};

	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', { value: channels });
			Object.defineProperty(convert[model], 'labels', { value: labels });
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var v;

		if (max === 0) {
			s = 0;
		} else {
			s = delta / max * 1000 / 10;
		}

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		v = max / 255 * 1000 / 10;

		return [h, s, v];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	/**
  * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
  * */
	function comparativeDistance(x, y) {
		return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in colorName) {
			if (colorName.hasOwnProperty(keyword)) {
				var value = colorName[keyword];

				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);

				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return colorName[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		// assume sRGB
		r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
		g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
		b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

		var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
		var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
		var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= l <= 1 ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - s * f);
		var t = 255 * v * (1 - s * (1 - f));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= lmin <= 1 ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh); // linear interpolation

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0:
				r = v;g = n;b = wh;break;
			case 1:
				r = n;g = v;b = wh;break;
			case 2:
				r = wh;g = v;b = n;break;
			case 3:
				r = wh;g = n;b = v;break;
			case 4:
				r = n;g = wh;b = v;break;
			case 5:
				r = v;g = wh;b = n;break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = x * 3.2406 + y * -1.5372 + z * -0.4986;
		g = x * -0.9689 + y * 1.8758 + z * 0.0415;
		b = x * 0.0557 + y * -0.2040 + z * 1.0570;

		// assume sRGB
		r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

		g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

		b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round((r - 8) / 247 * 24) + 232;
		}

		var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = (color & 1) * mult * 255;
		var g = (color >> 1 & 1) * mult * 255;
		var b = (color >> 2 & 1) * mult * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = rem % 6 / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}

		var integer = parseInt(colorString, 16);
		var r = integer >> 16 & 0xFF;
		var g = integer >> 8 & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = max - min;
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else if (max === r) {
			hue = (g - b) / chroma % 6;
		} else if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = h % 1 * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1;pure[1] = v;pure[2] = 0;break;
			case 1:
				pure[0] = w;pure[1] = 1;pure[2] = 0;break;
			case 2:
				pure[0] = 0;pure[1] = 1;pure[2] = v;break;
			case 3:
				pure[0] = 0;pure[1] = w;pure[2] = 1;break;
			case 4:
				pure[0] = v;pure[1] = 0;pure[2] = 1;break;
			default:
				pure[0] = 1;pure[1] = 0;pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
});

var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function route(fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', { value: conversions[fromModel].channels });
	Object.defineProperty(convert[fromModel], 'labels', { value: conversions[fromModel].labels });

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
// to be honest, I don't really feel like keyword belongs in color convert, but eh.
'keyword',

// gray conflicts with some method names, and has its own method defined.
'gray',

// shouldn't really be in color-convert either...
'hex'];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [obj >> 16 & 0xFF, obj >> 8 & 0xFF, obj & 0xFF];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function toString() {
		return this.string();
	},

	toJSON: function toJSON() {
		return this[this.model]();
	},

	string: function string(places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function percentString(places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function array() {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function object() {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function unitArray() {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function unitObject() {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function round(places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function alpha(val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) {
		return (val % 360 + 360) % 360;
	}), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function keyword(val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function hex(val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function rgbNumber() {
		var rgb = this.rgb().color;
		return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
	},

	luminosity: function luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function level(color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return contrastRatio >= 4.5 ? 'AA' : '';
	},

	dark: function dark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function light() {
		return !this.dark();
	},

	negate: function negate() {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function lighten(ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function darken(ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function saturate(ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function desaturate(ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function whiten(ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function blacken(ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function fade(ratio) {
		return this.alpha(this.valpha - this.valpha * ratio);
	},

	opaquer: function opaquer(ratio) {
		return this.alpha(this.valpha + this.valpha * ratio);
	},

	rotate: function rotate(degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function mix(mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color = Color;

/**
 * A utility for editing colors:
 * {@link https://github.com/Qix-/color}
 * @class Color
 */

/**
 * A utility for testing the type of a reference
 */
var Is = function () {
  function Is() {
    classCallCheck(this, Is);
  }

  createClass(Is, null, [{
    key: 'element',

    /**
     * Tests if the object is a HTMLElement
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is a HTMLElement
     */
    value: function element(object) {
      // Credit: http://stackoverflow.com/a/384380
      try {
        // Using W3 DOM2 (works for FF, Opera and Chrom)
        return object instanceof window.HTMLElement;
      } catch (e) {
        // Browsers not supporting W3 DOM2 don't have HTMLElement and
        // an exception is thrown and we end up here. Testing some
        // properties that all elements have. (works on IE7)
        return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.nodeType === 1 && _typeof(object.style) === 'object' && _typeof(object.ownerDocument) === 'object';
      }
    }

    /**
     * Tests if the object is an array
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is an array
     */

  }, {
    key: 'array',
    value: function array(object) {
      return Object.prototype.toString.call(object) === '[object Array]';
    }

    /**
     * Tests if the object is an object, not an array
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is an object
     */

  }, {
    key: 'object',
    value: function object(_object) {
      return (typeof _object === 'undefined' ? 'undefined' : _typeof(_object)) === 'object' && !this.array(_object);
    }

    /**
     * Tests if the object is a canvas
     * @param {object} object - The object to test
     * @returns {boolean} If set to true, the object is a canvas
     */

  }, {
    key: 'canvas',
    value: function canvas(object) {
      return !!object.getContext;
    }
  }]);
  return Is;
}();

/**
 * A utility for math stuff
 */

var Mathematics = function () {
  function Mathematics() {
    classCallCheck(this, Mathematics);
  }

  createClass(Mathematics, null, [{
    key: 'randomBetween',


    /**
     * Returns a number between min and max
     * @param {int} min - The minimum range
     * @param {int} max - The maximum range
     * @returns {int|float} A random number between min and max
     */
    value: function randomBetween(min, max) {
      var random = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.random;

      // Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      return min + random() * (max - min);
    }

    /**
     * Returns a random element in an array or object
     * @param {array|object} - The array or object
     * @returns {*} The array item or object value
     */

  }, {
    key: 'randomFrom',
    value: function randomFrom(object) {
      var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random;

      if (Is.array(object)) {
        return object[Math.floor(random() * object.length)];
      } else if (Is.object(object)) {
        var result = {};
        var key = Object.keys(object)[Math.floor(random() * Object.keys(object).length)];
        var value = object[key];
        result[key] = value;
        return result;
      }
    }
  }, {
    key: 'TWO_PI',

    /** Returns PI * 2 */
    get: function get$$1() {
      return Math.PI * 2;
    }
    /** Returns PI / 2 */

  }, {
    key: 'HALF_PI',
    get: function get$$1() {
      return Math.PI / 2;
    }
    /** Returns PI / 4 */

  }, {
    key: 'QUARTER_PI',
    get: function get$$1() {
      return Math.PI / 4;
    }
  }]);
  return Mathematics;
}();

var stats_min = createCommonjsModule(function (module, exports) {
  // stats.js - http://github.com/mrdoob/stats.js
  (function (f, e) {
    module.exports = e();
  })(commonjsGlobal, function () {
    var f = function f() {
      function e(a) {
        c.appendChild(a.dom);return a;
      }function u(a) {
        for (var d = 0; d < c.children.length; d++) {
          c.children[d].style.display = d === a ? "block" : "none";
        }l = a;
      }var l = 0,
          c = document.createElement("div");c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click", function (a) {
        a.preventDefault();
        u(++l % c.children.length);
      }, !1);var k = (performance || Date).now(),
          g = k,
          a = 0,
          r = e(new f.Panel("FPS", "#0ff", "#002")),
          h = e(new f.Panel("MS", "#0f0", "#020"));if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));u(0);return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function begin() {
          k = (performance || Date).now();
        }, end: function end() {
          a++;var c = (performance || Date).now();h.update(c - k, 200);if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
            var d = performance.memory;t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
          }return c;
        }, update: function update() {
          k = this.end();
        }, domElement: c, setMode: u };
    };f.Panel = function (e, f, l) {
      var c = Infinity,
          k = 0,
          g = Math.round,
          a = g(window.devicePixelRatio || 1),
          r = 80 * a,
          h = 48 * a,
          t = 3 * a,
          v = 2 * a,
          d = 3 * a,
          m = 15 * a,
          n = 74 * a,
          p = 30 * a,
          q = document.createElement("canvas");q.width = r;q.height = h;q.style.cssText = "width:80px;height:48px";var b = q.getContext("2d");b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";b.textBaseline = "top";b.fillStyle = l;b.fillRect(0, 0, r, h);b.fillStyle = f;b.fillText(e, t, v);
      b.fillRect(d, m, n, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d, m, n, p);return { dom: q, update: function update(h, w) {
          c = Math.min(c, h);k = Math.max(k, h);b.fillStyle = l;b.globalAlpha = 1;b.fillRect(0, 0, r, m);b.fillStyle = f;b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);b.fillRect(d + n - a, m, a, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
        } };
    };return f;
  });
});

/**
 * A utility for viewing stats / framerate
 * {@link https://github.com/mrdoob/stats.js/}
 * @class Stats
 */

var victor = createCommonjsModule(function (module, exports) {
  exports = module.exports = Victor;

  /**
   * # Victor - A JavaScript 2D vector class with methods for common vector operations
   */

  /**
   * Constructor. Will also work without the `new` keyword
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = Victor(42, 1337);
   *
   * @param {Number} x Value of the x axis
   * @param {Number} y Value of the y axis
   * @return {Victor}
   * @api public
   */
  function Victor(x, y) {
    if (!(this instanceof Victor)) {
      return new Victor(x, y);
    }

    /**
     * The X axis
     *
     * ### Examples:
     *     var vec = new Victor.fromArray(42, 21);
     *
     *     vec.x;
     *     // => 42
     *
     * @api public
     */
    this.x = x || 0;

    /**
     * The Y axis
     *
     * ### Examples:
     *     var vec = new Victor.fromArray(42, 21);
     *
     *     vec.y;
     *     // => 21
     *
     * @api public
     */
    this.y = y || 0;
  }

  /**
   * # Static
   */

  /**
   * Creates a new instance from an array
   *
   * ### Examples:
   *     var vec = Victor.fromArray([42, 21]);
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   * @name Victor.fromArray
   * @param {Array} array Array with the x and y values at index 0 and 1 respectively
   * @return {Victor} The new instance
   * @api public
   */
  Victor.fromArray = function (arr) {
    return new Victor(arr[0] || 0, arr[1] || 0);
  };

  /**
   * Creates a new instance from an object
   *
   * ### Examples:
   *     var vec = Victor.fromObject({ x: 42, y: 21 });
   *
   *     vec.toString();
   *     // => x:42, y:21
   *
   * @name Victor.fromObject
   * @param {Object} obj Object with the values for x and y
   * @return {Victor} The new instance
   * @api public
   */
  Victor.fromObject = function (obj) {
    return new Victor(obj.x || 0, obj.y || 0);
  };

  /**
   * # Manipulation
   *
   * These functions are chainable.
   */

  /**
   * Adds another vector's X axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addX(vec2);
   *     vec1.toString();
   *     // => x:30, y:10
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addX = function (vec) {
    this.x += vec.x;
    return this;
  };

  /**
   * Adds another vector's Y axis to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.addY(vec2);
   *     vec1.toString();
   *     // => x:10, y:40
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addY = function (vec) {
    this.y += vec.y;
    return this;
  };

  /**
   * Adds another vector to this one
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.add(vec2);
   *     vec1.toString();
   *     // => x:30, y:40
   *
   * @param {Victor} vector The other vector you want to add to this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.add = function (vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  };

  /**
   * Adds the given scalar to both vector axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalar(2);
   *     vec.toString();
   *     // => x: 3, y: 4
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalar = function (scalar) {
    this.x += scalar;
    this.y += scalar;
    return this;
  };

  /**
   * Adds the given scalar to the X axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalarX(2);
   *     vec.toString();
   *     // => x: 3, y: 2
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalarX = function (scalar) {
    this.x += scalar;
    return this;
  };

  /**
   * Adds the given scalar to the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(1, 2);
   *
   *     vec.addScalarY(2);
   *     vec.toString();
   *     // => x: 1, y: 4
   *
   * @param {Number} scalar The scalar to add
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.addScalarY = function (scalar) {
    this.y += scalar;
    return this;
  };

  /**
   * Subtracts the X axis of another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtractX(vec2);
   *     vec1.toString();
   *     // => x:80, y:50
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractX = function (vec) {
    this.x -= vec.x;
    return this;
  };

  /**
   * Subtracts the Y axis of another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtractY(vec2);
   *     vec1.toString();
   *     // => x:100, y:20
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractY = function (vec) {
    this.y -= vec.y;
    return this;
  };

  /**
   * Subtracts another vector from this one
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(20, 30);
   *
   *     vec1.subtract(vec2);
   *     vec1.toString();
   *     // => x:80, y:20
   *
   * @param {Victor} vector The other vector you want subtract from this one
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtract = function (vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  };

  /**
   * Subtracts the given scalar from both axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalar(20);
   *     vec.toString();
   *     // => x: 80, y: 180
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalar = function (scalar) {
    this.x -= scalar;
    this.y -= scalar;
    return this;
  };

  /**
   * Subtracts the given scalar from the X axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalarX(20);
   *     vec.toString();
   *     // => x: 80, y: 200
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalarX = function (scalar) {
    this.x -= scalar;
    return this;
  };

  /**
   * Subtracts the given scalar from the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 200);
   *
   *     vec.subtractScalarY(20);
   *     vec.toString();
   *     // => x: 100, y: 180
   *
   * @param {Number} scalar The scalar to subtract
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.subtractScalarY = function (scalar) {
    this.y -= scalar;
    return this;
  };

  /**
   * Divides the X axis by the x component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 0);
   *
   *     vec.divideX(vec2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Victor} vector The other vector you want divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideX = function (vector) {
    this.x /= vector.x;
    return this;
  };

  /**
   * Divides the Y axis by the y component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(0, 2);
   *
   *     vec.divideY(vec2);
   *     vec.toString();
   *     // => x:100, y:25
   *
   * @param {Victor} vector The other vector you want divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideY = function (vector) {
    this.y /= vector.y;
    return this;
  };

  /**
   * Divides both vector axis by a axis values of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 2);
   *
   *     vec.divide(vec2);
   *     vec.toString();
   *     // => x:50, y:25
   *
   * @param {Victor} vector The vector to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divide = function (vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    return this;
  };

  /**
   * Divides both vector axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalar(2);
   *     vec.toString();
   *     // => x:50, y:25
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalar = function (scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
    } else {
      this.x = 0;
      this.y = 0;
    }

    return this;
  };

  /**
   * Divides the X axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalarX(2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalarX = function (scalar) {
    if (scalar !== 0) {
      this.x /= scalar;
    } else {
      this.x = 0;
    }
    return this;
  };

  /**
   * Divides the Y axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.divideScalarY(2);
   *     vec.toString();
   *     // => x:100, y:25
   *
   * @param {Number} The scalar to divide by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.divideScalarY = function (scalar) {
    if (scalar !== 0) {
      this.y /= scalar;
    } else {
      this.y = 0;
    }
    return this;
  };

  /**
   * Inverts the X axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invertX();
   *     vec.toString();
   *     // => x:-100, y:50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invertX = function () {
    this.x *= -1;
    return this;
  };

  /**
   * Inverts the Y axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invertY();
   *     vec.toString();
   *     // => x:100, y:-50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invertY = function () {
    this.y *= -1;
    return this;
  };

  /**
   * Inverts both axis
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.invert();
   *     vec.toString();
   *     // => x:-100, y:-50
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.invert = function () {
    this.invertX();
    this.invertY();
    return this;
  };

  /**
   * Multiplies the X axis by X component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 0);
   *
   *     vec.multiplyX(vec2);
   *     vec.toString();
   *     // => x:200, y:50
   *
   * @param {Victor} vector The vector to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyX = function (vector) {
    this.x *= vector.x;
    return this;
  };

  /**
   * Multiplies the Y axis by Y component of given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(0, 2);
   *
   *     vec.multiplyX(vec2);
   *     vec.toString();
   *     // => x:100, y:100
   *
   * @param {Victor} vector The vector to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyY = function (vector) {
    this.y *= vector.y;
    return this;
  };

  /**
   * Multiplies both vector axis by values from a given vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     var vec2 = new Victor(2, 2);
   *
   *     vec.multiply(vec2);
   *     vec.toString();
   *     // => x:200, y:100
   *
   * @param {Victor} vector The vector to multiply by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiply = function (vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  };

  /**
   * Multiplies both vector axis by the given scalar value
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalar(2);
   *     vec.toString();
   *     // => x:200, y:100
   *
   * @param {Number} The scalar to multiply by
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalar = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  };

  /**
   * Multiplies the X axis by the given scalar
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalarX(2);
   *     vec.toString();
   *     // => x:200, y:50
   *
   * @param {Number} The scalar to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalarX = function (scalar) {
    this.x *= scalar;
    return this;
  };

  /**
   * Multiplies the Y axis by the given scalar
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.multiplyScalarY(2);
   *     vec.toString();
   *     // => x:100, y:100
   *
   * @param {Number} The scalar to multiply the axis with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.multiplyScalarY = function (scalar) {
    this.y *= scalar;
    return this;
  };

  /**
   * Normalize
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.normalize = function () {
    var length = this.length();

    if (length === 0) {
      this.x = 1;
      this.y = 0;
    } else {
      this.divide(Victor(length, length));
    }
    return this;
  };

  Victor.prototype.norm = Victor.prototype.normalize;

  /**
   * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.limit(80, 0.9);
   *     vec.toString();
   *     // => x:90, y:50
   *
   * @param {Number} max The maximum value for both x and y axis
   * @param {Number} factor Factor by which the axis are to be multiplied with
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.limit = function (max, factor) {
    if (Math.abs(this.x) > max) {
      this.x *= factor;
    }
    if (Math.abs(this.y) > max) {
      this.y *= factor;
    }
    return this;
  };

  /**
   * Randomizes both vector axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:67, y:73
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomize = function (topLeft, bottomRight) {
    this.randomizeX(topLeft, bottomRight);
    this.randomizeY(topLeft, bottomRight);

    return this;
  };

  /**
   * Randomizes the y axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:55, y:50
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeX = function (topLeft, bottomRight) {
    var min = Math.min(topLeft.x, bottomRight.x);
    var max = Math.max(topLeft.x, bottomRight.x);
    this.x = random(min, max);
    return this;
  };

  /**
   * Randomizes the y axis with a value between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
   *     vec.toString();
   *     // => x:100, y:66
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeY = function (topLeft, bottomRight) {
    var min = Math.min(topLeft.y, bottomRight.y);
    var max = Math.max(topLeft.y, bottomRight.y);
    this.y = random(min, max);
    return this;
  };

  /**
   * Randomly randomizes either axis between 2 vectors
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
   *     vec.toString();
   *     // => x:100, y:77
   *
   * @param {Victor} topLeft first vector
   * @param {Victor} bottomRight second vector
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
    if (!!Math.round(Math.random())) {
      this.randomizeX(topLeft, bottomRight);
    } else {
      this.randomizeY(topLeft, bottomRight);
    }
    return this;
  };

  /**
   * Rounds both axis to an integer value
   *
   * ### Examples:
   *     var vec = new Victor(100.2, 50.9);
   *
   *     vec.unfloat();
   *     vec.toString();
   *     // => x:100, y:51
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.unfloat = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  /**
   * Rounds both axis to a certain precision
   *
   * ### Examples:
   *     var vec = new Victor(100.2, 50.9);
   *
   *     vec.unfloat();
   *     vec.toString();
   *     // => x:100, y:51
   *
   * @param {Number} Precision (default: 8)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.toFixed = function (precision) {
    if (typeof precision === 'undefined') {
      precision = 8;
    }
    this.x = this.x.toFixed(precision);
    this.y = this.y.toFixed(precision);
    return this;
  };

  /**
   * Performs a linear blend / interpolation of the X axis towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mixX(vec2, 0.5);
   *     vec.toString();
   *     // => x:150, y:100
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mixX = function (vec, amount) {
    if (typeof amount === 'undefined') {
      amount = 0.5;
    }

    this.x = (1 - amount) * this.x + amount * vec.x;
    return this;
  };

  /**
   * Performs a linear blend / interpolation of the Y axis towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mixY(vec2, 0.5);
   *     vec.toString();
   *     // => x:100, y:150
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mixY = function (vec, amount) {
    if (typeof amount === 'undefined') {
      amount = 0.5;
    }

    this.y = (1 - amount) * this.y + amount * vec.y;
    return this;
  };

  /**
   * Performs a linear blend / interpolation towards another vector
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 100);
   *     var vec2 = new Victor(200, 200);
   *
   *     vec1.mix(vec2, 0.5);
   *     vec.toString();
   *     // => x:150, y:150
   *
   * @param {Victor} vector The other vector
   * @param {Number} amount The blend amount (optional, default: 0.5)
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.mix = function (vec, amount) {
    this.mixX(vec, amount);
    this.mixY(vec, amount);
    return this;
  };

  /**
   * # Products
   */

  /**
   * Creates a clone of this vector
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = vec1.clone();
   *
   *     vec2.toString();
   *     // => x:10, y:10
   *
   * @return {Victor} A clone of the vector
   * @api public
   */
  Victor.prototype.clone = function () {
    return new Victor(this.x, this.y);
  };

  /**
   * Copies another vector's X component in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copyX(vec1);
   *
   *     vec2.toString();
   *     // => x:20, y:10
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copyX = function (vec) {
    this.x = vec.x;
    return this;
  };

  /**
   * Copies another vector's Y component in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copyY(vec1);
   *
   *     vec2.toString();
   *     // => x:10, y:20
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copyY = function (vec) {
    this.y = vec.y;
    return this;
  };

  /**
   * Copies another vector's X and Y components in to its own
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *     var vec2 = new Victor(20, 20);
   *     var vec2 = vec1.copy(vec1);
   *
   *     vec2.toString();
   *     // => x:20, y:20
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.copy = function (vec) {
    this.copyX(vec);
    this.copyY(vec);
    return this;
  };

  /**
   * Sets the vector to zero (0,0)
   *
   * ### Examples:
   *     var vec1 = new Victor(10, 10);
   *		 var1.zero();
   *     vec1.toString();
   *     // => x:0, y:0
   *
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.zero = function () {
    this.x = this.y = 0;
    return this;
  };

  /**
   * Calculates the dot product of this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.dot(vec2);
   *     // => 23000
   *
   * @param {Victor} vector The second vector
   * @return {Number} Dot product
   * @api public
   */
  Victor.prototype.dot = function (vec2) {
    return this.x * vec2.x + this.y * vec2.y;
  };

  Victor.prototype.cross = function (vec2) {
    return this.x * vec2.y - this.y * vec2.x;
  };

  /**
   * Projects a vector onto another vector, setting itself to the result.
   *
   * ### Examples:
   *     var vec = new Victor(100, 0);
   *     var vec2 = new Victor(100, 100);
   *
   *     vec.projectOnto(vec2);
   *     vec.toString();
   *     // => x:50, y:50
   *
   * @param {Victor} vector The other vector you want to project this vector onto
   * @return {Victor} `this` for chaining capabilities
   * @api public
   */
  Victor.prototype.projectOnto = function (vec2) {
    var coeff = (this.x * vec2.x + this.y * vec2.y) / (vec2.x * vec2.x + vec2.y * vec2.y);
    this.x = coeff * vec2.x;
    this.y = coeff * vec2.y;
    return this;
  };

  Victor.prototype.horizontalAngle = function () {
    return Math.atan2(this.y, this.x);
  };

  Victor.prototype.horizontalAngleDeg = function () {
    return radian2degrees(this.horizontalAngle());
  };

  Victor.prototype.verticalAngle = function () {
    return Math.atan2(this.x, this.y);
  };

  Victor.prototype.verticalAngleDeg = function () {
    return radian2degrees(this.verticalAngle());
  };

  Victor.prototype.angle = Victor.prototype.horizontalAngle;
  Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
  Victor.prototype.direction = Victor.prototype.horizontalAngle;

  Victor.prototype.rotate = function (angle) {
    var nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    var ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);

    this.x = nx;
    this.y = ny;

    return this;
  };

  Victor.prototype.rotateDeg = function (angle) {
    angle = degrees2radian(angle);
    return this.rotate(angle);
  };

  Victor.prototype.rotateTo = function (rotation) {
    return this.rotate(rotation - this.angle());
  };

  Victor.prototype.rotateToDeg = function (rotation) {
    rotation = degrees2radian(rotation);
    return this.rotateTo(rotation);
  };

  Victor.prototype.rotateBy = function (rotation) {
    var angle = this.angle() + rotation;

    return this.rotate(angle);
  };

  Victor.prototype.rotateByDeg = function (rotation) {
    rotation = degrees2radian(rotation);
    return this.rotateBy(rotation);
  };

  /**
   * Calculates the distance of the X axis between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceX(vec2);
   *     // => -100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceX = function (vec) {
    return this.x - vec.x;
  };

  /**
   * Same as `distanceX()` but always returns an absolute number
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.absDistanceX(vec2);
   *     // => 100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Absolute distance
   * @api public
   */
  Victor.prototype.absDistanceX = function (vec) {
    return Math.abs(this.distanceX(vec));
  };

  /**
   * Calculates the distance of the Y axis between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceY(vec2);
   *     // => -10
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceY = function (vec) {
    return this.y - vec.y;
  };

  /**
   * Same as `distanceY()` but always returns an absolute number
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceY(vec2);
   *     // => 10
   *
   * @param {Victor} vector The second vector
   * @return {Number} Absolute distance
   * @api public
   */
  Victor.prototype.absDistanceY = function (vec) {
    return Math.abs(this.distanceY(vec));
  };

  /**
   * Calculates the euclidean distance between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distance(vec2);
   *     // => 100.4987562112089
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distance = function (vec) {
    return Math.sqrt(this.distanceSq(vec));
  };

  /**
   * Calculates the squared euclidean distance between this vector and another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(200, 60);
   *
   *     vec1.distanceSq(vec2);
   *     // => 10100
   *
   * @param {Victor} vector The second vector
   * @return {Number} Distance
   * @api public
   */
  Victor.prototype.distanceSq = function (vec) {
    var dx = this.distanceX(vec),
        dy = this.distanceY(vec);

    return dx * dx + dy * dy;
  };

  /**
   * Calculates the length or magnitude of the vector
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.length();
   *     // => 111.80339887498948
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  Victor.prototype.length = function () {
    return Math.sqrt(this.lengthSq());
  };

  /**
   * Squared length / magnitude
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *
   *     vec.lengthSq();
   *     // => 12500
   *
   * @return {Number} Length / Magnitude
   * @api public
   */
  Victor.prototype.lengthSq = function () {
    return this.x * this.x + this.y * this.y;
  };

  Victor.prototype.magnitude = Victor.prototype.length;

  /**
   * Returns a true if vector is (0, 0)
   *
   * ### Examples:
   *     var vec = new Victor(100, 50);
   *     vec.zero();
   *
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  Victor.prototype.isZero = function () {
    return this.x === 0 && this.y === 0;
  };

  /**
   * Returns a true if this vector is the same as another
   *
   * ### Examples:
   *     var vec1 = new Victor(100, 50);
   *     var vec2 = new Victor(100, 50);
   *     vec1.isEqualTo(vec2);
   *
   *     // => true
   *
   * @return {Boolean}
   * @api public
   */
  Victor.prototype.isEqualTo = function (vec2) {
    return this.x === vec2.x && this.y === vec2.y;
  };

  /**
   * # Utility Methods
   */

  /**
   * Returns an string representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toString();
   *     // => x:10, y:20
   *
   * @return {String}
   * @api public
   */
  Victor.prototype.toString = function () {
    return 'x:' + this.x + ', y:' + this.y;
  };

  /**
   * Returns an array representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toArray();
   *     // => [10, 20]
   *
   * @return {Array}
   * @api public
   */
  Victor.prototype.toArray = function () {
    return [this.x, this.y];
  };

  /**
   * Returns an object representation of the vector
   *
   * ### Examples:
   *     var vec = new Victor(10, 20);
   *
   *     vec.toObject();
   *     // => { x: 10, y: 20 }
   *
   * @return {Object}
   * @api public
   */
  Victor.prototype.toObject = function () {
    return { x: this.x, y: this.y };
  };

  var degrees = 180 / Math.PI;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function radian2degrees(rad) {
    return rad * degrees;
  }

  function degrees2radian(deg) {
    return deg / degrees;
  }
});

/**
 * A utility for handling vectors, with a couple
 * of additional helpers: {@link http://victorjs.org/}
 * @class Vector
 */
victor.prototype.setLength = function (scalar) {
  var length = this.length();
  if (scalar >= 0 && length !== 0) {
    var sinA = this.y / length;
    var sinB = this.x / length;
    this.y = sinA * scalar;
    this.x = sinB * scalar;
  }
  return this;
};

victor.prototype.addLength = function (scalar) {
  return this.setLength(this.length() + scalar);
};

var gyronorm_complete = createCommonjsModule(function (module) {
	(function (root) {

		// Store setTimeout reference so promise-polyfill will be unaffected by
		// other code modifying setTimeout (like sinon.useFakeTimers())
		var setTimeoutFunc = setTimeout;

		function noop() {}

		// Polyfill for Function.prototype.bind
		function bind(fn, thisArg) {
			return function () {
				fn.apply(thisArg, arguments);
			};
		}

		function Promise(fn) {
			if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
			if (typeof fn !== 'function') throw new TypeError('not a function');
			this._state = 0;
			this._handled = false;
			this._value = undefined;
			this._deferreds = [];

			doResolve(fn, this);
		}

		function handle(self, deferred) {
			while (self._state === 3) {
				self = self._value;
			}
			if (self._state === 0) {
				self._deferreds.push(deferred);
				return;
			}
			self._handled = true;
			Promise._immediateFn(function () {
				var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
				if (cb === null) {
					(self._state === 1 ? resolve : reject)(deferred.promise, self._value);
					return;
				}
				var ret;
				try {
					ret = cb(self._value);
				} catch (e) {
					reject(deferred.promise, e);
					return;
				}
				resolve(deferred.promise, ret);
			});
		}

		function resolve(self, newValue) {
			try {
				// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
				if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
				if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
					var then = newValue.then;
					if (newValue instanceof Promise) {
						self._state = 3;
						self._value = newValue;
						finale(self);
						return;
					} else if (typeof then === 'function') {
						doResolve(bind(then, newValue), self);
						return;
					}
				}
				self._state = 1;
				self._value = newValue;
				finale(self);
			} catch (e) {
				reject(self, e);
			}
		}

		function reject(self, newValue) {
			self._state = 2;
			self._value = newValue;
			finale(self);
		}

		function finale(self) {
			if (self._state === 2 && self._deferreds.length === 0) {
				Promise._immediateFn(function () {
					if (!self._handled) {
						Promise._unhandledRejectionFn(self._value);
					}
				});
			}

			for (var i = 0, len = self._deferreds.length; i < len; i++) {
				handle(self, self._deferreds[i]);
			}
			self._deferreds = null;
		}

		function Handler(onFulfilled, onRejected, promise) {
			this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
			this.onRejected = typeof onRejected === 'function' ? onRejected : null;
			this.promise = promise;
		}

		/**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
		function doResolve(fn, self) {
			var done = false;
			try {
				fn(function (value) {
					if (done) return;
					done = true;
					resolve(self, value);
				}, function (reason) {
					if (done) return;
					done = true;
					reject(self, reason);
				});
			} catch (ex) {
				if (done) return;
				done = true;
				reject(self, ex);
			}
		}

		Promise.prototype['catch'] = function (onRejected) {
			return this.then(null, onRejected);
		};

		Promise.prototype.then = function (onFulfilled, onRejected) {
			var prom = new this.constructor(noop);

			handle(this, new Handler(onFulfilled, onRejected, prom));
			return prom;
		};

		Promise.all = function (arr) {
			var args = Array.prototype.slice.call(arr);

			return new Promise(function (resolve, reject) {
				if (args.length === 0) return resolve([]);
				var remaining = args.length;

				function res(i, val) {
					try {
						if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
							var then = val.then;
							if (typeof then === 'function') {
								then.call(val, function (val) {
									res(i, val);
								}, reject);
								return;
							}
						}
						args[i] = val;
						if (--remaining === 0) {
							resolve(args);
						}
					} catch (ex) {
						reject(ex);
					}
				}

				for (var i = 0; i < args.length; i++) {
					res(i, args[i]);
				}
			});
		};

		Promise.resolve = function (value) {
			if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
				return value;
			}

			return new Promise(function (resolve) {
				resolve(value);
			});
		};

		Promise.reject = function (value) {
			return new Promise(function (resolve, reject) {
				reject(value);
			});
		};

		Promise.race = function (values) {
			return new Promise(function (resolve, reject) {
				for (var i = 0, len = values.length; i < len; i++) {
					values[i].then(resolve, reject);
				}
			});
		};

		// Use polyfill for setImmediate for performance gains
		Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
			setImmediate(fn);
		} || function (fn) {
			setTimeoutFunc(fn, 0);
		};

		Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
			if (typeof console !== 'undefined' && console) {
				console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
			}
		};

		/**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
		Promise._setImmediateFn = function _setImmediateFn(fn) {
			Promise._immediateFn = fn;
		};

		/**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
		Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
			Promise._unhandledRejectionFn = fn;
		};

		if ('object' !== 'undefined' && module.exports) {
			module.exports = Promise;
		} else if (!root.Promise) {
			root.Promise = Promise;
		}
	})(commonjsGlobal);

	/**
  *
  * FULL TILT
  * http://github.com/richtr/Full-Tilt
  *
  * A standalone DeviceOrientation + DeviceMotion JavaScript library that
  * normalises orientation sensor input, applies relevant screen orientation
  * transforms, returns Euler Angle, Quaternion and Rotation
  * Matrix representations back to web developers and provides conversion
  * between all supported orientation representation types.
  *
  * Copyright: 2014 Rich Tibbett
  * License:   MIT
  *
  */

	(function (window) {

		// Only initialize the FULLTILT API if it is not already attached to the DOM
		if (window.FULLTILT !== undefined && window.FULLTILT !== null) {
			return;
		}

		var M_PI = Math.PI;
		var M_PI_2 = M_PI / 2;
		var M_2_PI = 2 * M_PI;

		// Degree to Radian conversion
		var degToRad = M_PI / 180;
		var radToDeg = 180 / M_PI;

		// Internal device orientation + motion variables
		var sensors = {
			"orientation": {
				active: false,
				callbacks: [],
				data: undefined
			},
			"motion": {
				active: false,
				callbacks: [],
				data: undefined
			}
		};
		var screenActive = false;

		// Internal screen orientation variables
		var hasScreenOrientationAPI = window.screen && window.screen.orientation && window.screen.orientation.angle !== undefined && window.screen.orientation.angle !== null ? true : false;
		var screenOrientationAngle = (hasScreenOrientationAPI ? window.screen.orientation.angle : window.orientation || 0) * degToRad;

		var SCREEN_ROTATION_0 = 0,
		    SCREEN_ROTATION_90 = M_PI_2,
		    SCREEN_ROTATION_180 = M_PI,
		    SCREEN_ROTATION_270 = M_2_PI / 3,
		    SCREEN_ROTATION_MINUS_90 = -M_PI_2;

		// Math.sign polyfill
		function sign(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) return x;
			return x > 0 ? 1 : -1;
		}

		///// Promise-based Sensor Data checker //////

		function SensorCheck(sensorRootObj) {

			var promise = new Promise(function (resolve, reject) {

				var runCheck = function runCheck(tries) {

					setTimeout(function () {

						if (sensorRootObj && sensorRootObj.data) {

							resolve();
						} else if (tries >= 20) {

							reject();
						} else {

							runCheck(++tries);
						}
					}, 50);
				};

				runCheck(0);
			});

			return promise;
		}

		////// Internal Event Handlers //////

		function handleScreenOrientationChange() {

			if (hasScreenOrientationAPI) {

				screenOrientationAngle = (window.screen.orientation.angle || 0) * degToRad;
			} else {

				screenOrientationAngle = (window.orientation || 0) * degToRad;
			}
		}

		function handleDeviceOrientationChange(event) {

			sensors.orientation.data = event;

			// Fire every callback function each time deviceorientation is updated
			for (var i in sensors.orientation.callbacks) {

				sensors.orientation.callbacks[i].call(this);
			}
		}

		function handleDeviceMotionChange(event) {

			sensors.motion.data = event;

			// Fire every callback function each time devicemotion is updated
			for (var i in sensors.motion.callbacks) {

				sensors.motion.callbacks[i].call(this);
			}
		}

		///// FULLTILT API Root Object /////

		var FULLTILT = {};

		FULLTILT.version = "0.5.3";

		///// FULLTILT API Root Methods /////

		FULLTILT.getDeviceOrientation = function (options) {

			var promise = new Promise(function (resolve, reject) {

				var control = new FULLTILT.DeviceOrientation(options);

				control.start();

				var orientationSensorCheck = new SensorCheck(sensors.orientation);

				orientationSensorCheck.then(function () {

					control._alphaAvailable = sensors.orientation.data.alpha && sensors.orientation.data.alpha !== null;
					control._betaAvailable = sensors.orientation.data.beta && sensors.orientation.data.beta !== null;
					control._gammaAvailable = sensors.orientation.data.gamma && sensors.orientation.data.gamma !== null;

					resolve(control);
				}).catch(function () {

					control.stop();
					reject('DeviceOrientation is not supported');
				});
			});

			return promise;
		};

		FULLTILT.getDeviceMotion = function (options) {

			var promise = new Promise(function (resolve, reject) {

				var control = new FULLTILT.DeviceMotion(options);

				control.start();

				var motionSensorCheck = new SensorCheck(sensors.motion);

				motionSensorCheck.then(function () {

					control._accelerationXAvailable = sensors.motion.data.acceleration && sensors.motion.data.acceleration.x;
					control._accelerationYAvailable = sensors.motion.data.acceleration && sensors.motion.data.acceleration.y;
					control._accelerationZAvailable = sensors.motion.data.acceleration && sensors.motion.data.acceleration.z;

					control._accelerationIncludingGravityXAvailable = sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.x;
					control._accelerationIncludingGravityYAvailable = sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.y;
					control._accelerationIncludingGravityZAvailable = sensors.motion.data.accelerationIncludingGravity && sensors.motion.data.accelerationIncludingGravity.z;

					control._rotationRateAlphaAvailable = sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.alpha;
					control._rotationRateBetaAvailable = sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.beta;
					control._rotationRateGammaAvailable = sensors.motion.data.rotationRate && sensors.motion.data.rotationRate.gamma;

					resolve(control);
				}).catch(function () {

					control.stop();
					reject('DeviceMotion is not supported');
				});
			});

			return promise;
		};

		////// FULLTILT.Quaternion //////

		FULLTILT.Quaternion = function (x, y, z, w) {

			var quat, outQuat;

			this.set = function (x, y, z, w) {

				this.x = x || 0;
				this.y = y || 0;
				this.z = z || 0;
				this.w = w || 1;
			};

			this.copy = function (quaternion) {

				this.x = quaternion.x;
				this.y = quaternion.y;
				this.z = quaternion.z;
				this.w = quaternion.w;
			};

			this.setFromEuler = function () {

				var _x, _y, _z;
				var _x_2, _y_2, _z_2;
				var cX, cY, cZ, sX, sY, sZ;

				return function (euler) {

					euler = euler || {};

					_z = (euler.alpha || 0) * degToRad;
					_x = (euler.beta || 0) * degToRad;
					_y = (euler.gamma || 0) * degToRad;

					_z_2 = _z / 2;
					_x_2 = _x / 2;
					_y_2 = _y / 2;

					cX = Math.cos(_x_2);
					cY = Math.cos(_y_2);
					cZ = Math.cos(_z_2);
					sX = Math.sin(_x_2);
					sY = Math.sin(_y_2);
					sZ = Math.sin(_z_2);

					this.set(sX * cY * cZ - cX * sY * sZ, // x
					cX * sY * cZ + sX * cY * sZ, // y
					cX * cY * sZ + sX * sY * cZ, // z
					cX * cY * cZ - sX * sY * sZ // w
					);

					this.normalize();

					return this;
				};
			}();

			this.setFromRotationMatrix = function () {

				var R;

				return function (matrix) {

					R = matrix.elements;

					this.set(0.5 * Math.sqrt(1 + R[0] - R[4] - R[8]) * sign(R[7] - R[5]), // x
					0.5 * Math.sqrt(1 - R[0] + R[4] - R[8]) * sign(R[2] - R[6]), // y
					0.5 * Math.sqrt(1 - R[0] - R[4] + R[8]) * sign(R[3] - R[1]), // z
					0.5 * Math.sqrt(1 + R[0] + R[4] + R[8]) // w
					);

					return this;
				};
			}();

			this.multiply = function (quaternion) {

				outQuat = FULLTILT.Quaternion.prototype.multiplyQuaternions(this, quaternion);
				this.copy(outQuat);

				return this;
			};

			this.rotateX = function (angle) {

				outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle(this, [1, 0, 0], angle);
				this.copy(outQuat);

				return this;
			};

			this.rotateY = function (angle) {

				outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle(this, [0, 1, 0], angle);
				this.copy(outQuat);

				return this;
			};

			this.rotateZ = function (angle) {

				outQuat = FULLTILT.Quaternion.prototype.rotateByAxisAngle(this, [0, 0, 1], angle);
				this.copy(outQuat);

				return this;
			};

			this.normalize = function () {

				return FULLTILT.Quaternion.prototype.normalize(this);
			};

			// Initialize object values
			this.set(x, y, z, w);
		};

		FULLTILT.Quaternion.prototype = {

			constructor: FULLTILT.Quaternion,

			multiplyQuaternions: function () {

				var multipliedQuat = new FULLTILT.Quaternion();

				return function (a, b) {

					var qax = a.x,
					    qay = a.y,
					    qaz = a.z,
					    qaw = a.w;
					var qbx = b.x,
					    qby = b.y,
					    qbz = b.z,
					    qbw = b.w;

					multipliedQuat.set(qax * qbw + qaw * qbx + qay * qbz - qaz * qby, // x
					qay * qbw + qaw * qby + qaz * qbx - qax * qbz, // y
					qaz * qbw + qaw * qbz + qax * qby - qay * qbx, // z
					qaw * qbw - qax * qbx - qay * qby - qaz * qbz // w
					);

					return multipliedQuat;
				};
			}(),

			normalize: function normalize(q) {

				var len = Math.sqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);

				if (len === 0) {

					q.x = 0;
					q.y = 0;
					q.z = 0;
					q.w = 1;
				} else {

					len = 1 / len;

					q.x *= len;
					q.y *= len;
					q.z *= len;
					q.w *= len;
				}

				return q;
			},

			rotateByAxisAngle: function () {

				var outputQuaternion = new FULLTILT.Quaternion();
				var transformQuaternion = new FULLTILT.Quaternion();

				var halfAngle, sA;

				return function (targetQuaternion, axis, angle) {

					halfAngle = (angle || 0) / 2;
					sA = Math.sin(halfAngle);

					transformQuaternion.set((axis[0] || 0) * sA, // x
					(axis[1] || 0) * sA, // y
					(axis[2] || 0) * sA, // z
					Math.cos(halfAngle) // w
					);

					// Multiply quaternion by q
					outputQuaternion = FULLTILT.Quaternion.prototype.multiplyQuaternions(targetQuaternion, transformQuaternion);

					return FULLTILT.Quaternion.prototype.normalize(outputQuaternion);
				};
			}()

		};

		////// FULLTILT.RotationMatrix //////

		FULLTILT.RotationMatrix = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {

			var outMatrix;

			this.elements = new Float32Array(9);

			this.identity = function () {

				this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);

				return this;
			};

			this.set = function (m11, m12, m13, m21, m22, m23, m31, m32, m33) {

				this.elements[0] = m11 || 1;
				this.elements[1] = m12 || 0;
				this.elements[2] = m13 || 0;
				this.elements[3] = m21 || 0;
				this.elements[4] = m22 || 1;
				this.elements[5] = m23 || 0;
				this.elements[6] = m31 || 0;
				this.elements[7] = m32 || 0;
				this.elements[8] = m33 || 1;
			};

			this.copy = function (matrix) {

				this.elements[0] = matrix.elements[0];
				this.elements[1] = matrix.elements[1];
				this.elements[2] = matrix.elements[2];
				this.elements[3] = matrix.elements[3];
				this.elements[4] = matrix.elements[4];
				this.elements[5] = matrix.elements[5];
				this.elements[6] = matrix.elements[6];
				this.elements[7] = matrix.elements[7];
				this.elements[8] = matrix.elements[8];
			};

			this.setFromEuler = function () {

				var _x, _y, _z;
				var cX, cY, cZ, sX, sY, sZ;

				return function (euler) {

					euler = euler || {};

					_z = (euler.alpha || 0) * degToRad;
					_x = (euler.beta || 0) * degToRad;
					_y = (euler.gamma || 0) * degToRad;

					cX = Math.cos(_x);
					cY = Math.cos(_y);
					cZ = Math.cos(_z);
					sX = Math.sin(_x);
					sY = Math.sin(_y);
					sZ = Math.sin(_z);

					//
					// ZXY-ordered rotation matrix construction.
					//

					this.set(cZ * cY - sZ * sX * sY, // 1,1
					-cX * sZ, // 1,2
					cY * sZ * sX + cZ * sY, // 1,3

					cY * sZ + cZ * sX * sY, // 2,1
					cZ * cX, // 2,2
					sZ * sY - cZ * cY * sX, // 2,3

					-cX * sY, // 3,1
					sX, // 3,2
					cX * cY // 3,3
					);

					this.normalize();

					return this;
				};
			}();

			this.setFromQuaternion = function () {

				var sqw, sqx, sqy, sqz;

				return function (q) {

					sqw = q.w * q.w;
					sqx = q.x * q.x;
					sqy = q.y * q.y;
					sqz = q.z * q.z;

					this.set(sqw + sqx - sqy - sqz, // 1,1
					2 * (q.x * q.y - q.w * q.z), // 1,2
					2 * (q.x * q.z + q.w * q.y), // 1,3

					2 * (q.x * q.y + q.w * q.z), // 2,1
					sqw - sqx + sqy - sqz, // 2,2
					2 * (q.y * q.z - q.w * q.x), // 2,3

					2 * (q.x * q.z - q.w * q.y), // 3,1
					2 * (q.y * q.z + q.w * q.x), // 3,2
					sqw - sqx - sqy + sqz // 3,3
					);

					return this;
				};
			}();

			this.multiply = function (m) {

				outMatrix = FULLTILT.RotationMatrix.prototype.multiplyMatrices(this, m);
				this.copy(outMatrix);

				return this;
			};

			this.rotateX = function (angle) {

				outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(this, [1, 0, 0], angle);
				this.copy(outMatrix);

				return this;
			};

			this.rotateY = function (angle) {

				outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 1, 0], angle);
				this.copy(outMatrix);

				return this;
			};

			this.rotateZ = function (angle) {

				outMatrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(this, [0, 0, 1], angle);
				this.copy(outMatrix);

				return this;
			};

			this.normalize = function () {

				return FULLTILT.RotationMatrix.prototype.normalize(this);
			};

			// Initialize object values
			this.set(m11, m12, m13, m21, m22, m23, m31, m32, m33);
		};

		FULLTILT.RotationMatrix.prototype = {

			constructor: FULLTILT.RotationMatrix,

			multiplyMatrices: function () {

				var matrix = new FULLTILT.RotationMatrix();

				var aE, bE;

				return function (a, b) {

					aE = a.elements;
					bE = b.elements;

					matrix.set(aE[0] * bE[0] + aE[1] * bE[3] + aE[2] * bE[6], aE[0] * bE[1] + aE[1] * bE[4] + aE[2] * bE[7], aE[0] * bE[2] + aE[1] * bE[5] + aE[2] * bE[8], aE[3] * bE[0] + aE[4] * bE[3] + aE[5] * bE[6], aE[3] * bE[1] + aE[4] * bE[4] + aE[5] * bE[7], aE[3] * bE[2] + aE[4] * bE[5] + aE[5] * bE[8], aE[6] * bE[0] + aE[7] * bE[3] + aE[8] * bE[6], aE[6] * bE[1] + aE[7] * bE[4] + aE[8] * bE[7], aE[6] * bE[2] + aE[7] * bE[5] + aE[8] * bE[8]);

					return matrix;
				};
			}(),

			normalize: function normalize(matrix) {

				var R = matrix.elements;

				// Calculate matrix determinant
				var determinant = R[0] * R[4] * R[8] - R[0] * R[5] * R[7] - R[1] * R[3] * R[8] + R[1] * R[5] * R[6] + R[2] * R[3] * R[7] - R[2] * R[4] * R[6];

				// Normalize matrix values
				R[0] /= determinant;
				R[1] /= determinant;
				R[2] /= determinant;
				R[3] /= determinant;
				R[4] /= determinant;
				R[5] /= determinant;
				R[6] /= determinant;
				R[7] /= determinant;
				R[8] /= determinant;

				matrix.elements = R;

				return matrix;
			},

			rotateByAxisAngle: function () {

				var outputMatrix = new FULLTILT.RotationMatrix();
				var transformMatrix = new FULLTILT.RotationMatrix();

				var sA, cA;
				var validAxis = false;

				return function (targetRotationMatrix, axis, angle) {

					transformMatrix.identity(); // reset transform matrix

					validAxis = false;

					sA = Math.sin(angle);
					cA = Math.cos(angle);

					if (axis[0] === 1 && axis[1] === 0 && axis[2] === 0) {
						// x

						validAxis = true;

						transformMatrix.elements[4] = cA;
						transformMatrix.elements[5] = -sA;
						transformMatrix.elements[7] = sA;
						transformMatrix.elements[8] = cA;
					} else if (axis[1] === 1 && axis[0] === 0 && axis[2] === 0) {
						// y

						validAxis = true;

						transformMatrix.elements[0] = cA;
						transformMatrix.elements[2] = sA;
						transformMatrix.elements[6] = -sA;
						transformMatrix.elements[8] = cA;
					} else if (axis[2] === 1 && axis[0] === 0 && axis[1] === 0) {
						// z

						validAxis = true;

						transformMatrix.elements[0] = cA;
						transformMatrix.elements[1] = -sA;
						transformMatrix.elements[3] = sA;
						transformMatrix.elements[4] = cA;
					}

					if (validAxis) {

						outputMatrix = FULLTILT.RotationMatrix.prototype.multiplyMatrices(targetRotationMatrix, transformMatrix);

						outputMatrix = FULLTILT.RotationMatrix.prototype.normalize(outputMatrix);
					} else {

						outputMatrix = targetRotationMatrix;
					}

					return outputMatrix;
				};
			}()

		};

		////// FULLTILT.Euler //////

		FULLTILT.Euler = function (alpha, beta, gamma) {

			this.set = function (alpha, beta, gamma) {

				this.alpha = alpha || 0;
				this.beta = beta || 0;
				this.gamma = gamma || 0;
			};

			this.copy = function (inEuler) {

				this.alpha = inEuler.alpha;
				this.beta = inEuler.beta;
				this.gamma = inEuler.gamma;
			};

			this.setFromRotationMatrix = function () {

				var R, _alpha, _beta, _gamma;

				return function (matrix) {

					R = matrix.elements;

					if (R[8] > 0) {
						// cos(beta) > 0

						_alpha = Math.atan2(-R[1], R[4]);
						_beta = Math.asin(R[7]); // beta (-pi/2, pi/2)
						_gamma = Math.atan2(-R[6], R[8]); // gamma (-pi/2, pi/2)
					} else if (R[8] < 0) {
						// cos(beta) < 0

						_alpha = Math.atan2(R[1], -R[4]);
						_beta = -Math.asin(R[7]);
						_beta += _beta >= 0 ? -M_PI : M_PI; // beta [-pi,-pi/2) U (pi/2,pi)
						_gamma = Math.atan2(R[6], -R[8]); // gamma (-pi/2, pi/2)
					} else {
						// R[8] == 0

						if (R[6] > 0) {
							// cos(gamma) == 0, cos(beta) > 0

							_alpha = Math.atan2(-R[1], R[4]);
							_beta = Math.asin(R[7]); // beta [-pi/2, pi/2]
							_gamma = -M_PI_2; // gamma = -pi/2
						} else if (R[6] < 0) {
							// cos(gamma) == 0, cos(beta) < 0

							_alpha = Math.atan2(R[1], -R[4]);
							_beta = -Math.asin(R[7]);
							_beta += _beta >= 0 ? -M_PI : M_PI; // beta [-pi,-pi/2) U (pi/2,pi)
							_gamma = -M_PI_2; // gamma = -pi/2
						} else {
							// R[6] == 0, cos(beta) == 0

							// gimbal lock discontinuity
							_alpha = Math.atan2(R[3], R[0]);
							_beta = R[7] > 0 ? M_PI_2 : -M_PI_2; // beta = +-pi/2
							_gamma = 0; // gamma = 0
						}
					}

					// alpha is in [-pi, pi], make sure it is in [0, 2*pi).
					if (_alpha < 0) {
						_alpha += M_2_PI; // alpha [0, 2*pi)
					}

					// Convert to degrees
					_alpha *= radToDeg;
					_beta *= radToDeg;
					_gamma *= radToDeg;

					// apply derived euler angles to current object
					this.set(_alpha, _beta, _gamma);
				};
			}();

			this.setFromQuaternion = function () {

				var _alpha, _beta, _gamma;

				return function (q) {

					var sqw = q.w * q.w;
					var sqx = q.x * q.x;
					var sqy = q.y * q.y;
					var sqz = q.z * q.z;

					var unitLength = sqw + sqx + sqy + sqz; // Normalised == 1, otherwise correction divisor.
					var wxyz = q.w * q.x + q.y * q.z;
					var epsilon = 1e-6; // rounding factor

					if (wxyz > (0.5 - epsilon) * unitLength) {

						_alpha = 2 * Math.atan2(q.y, q.w);
						_beta = M_PI_2;
						_gamma = 0;
					} else if (wxyz < (-0.5 + epsilon) * unitLength) {

						_alpha = -2 * Math.atan2(q.y, q.w);
						_beta = -M_PI_2;
						_gamma = 0;
					} else {

						var aX = sqw - sqx + sqy - sqz;
						var aY = 2 * (q.w * q.z - q.x * q.y);

						var gX = sqw - sqx - sqy + sqz;
						var gY = 2 * (q.w * q.y - q.x * q.z);

						if (gX > 0) {

							_alpha = Math.atan2(aY, aX);
							_beta = Math.asin(2 * wxyz / unitLength);
							_gamma = Math.atan2(gY, gX);
						} else {

							_alpha = Math.atan2(-aY, -aX);
							_beta = -Math.asin(2 * wxyz / unitLength);
							_beta += _beta < 0 ? M_PI : -M_PI;
							_gamma = Math.atan2(-gY, -gX);
						}
					}

					// alpha is in [-pi, pi], make sure it is in [0, 2*pi).
					if (_alpha < 0) {
						_alpha += M_2_PI; // alpha [0, 2*pi)
					}

					// Convert to degrees
					_alpha *= radToDeg;
					_beta *= radToDeg;
					_gamma *= radToDeg;

					// apply derived euler angles to current object
					this.set(_alpha, _beta, _gamma);
				};
			}();

			this.rotateX = function (angle) {

				FULLTILT.Euler.prototype.rotateByAxisAngle(this, [1, 0, 0], angle);

				return this;
			};

			this.rotateY = function (angle) {

				FULLTILT.Euler.prototype.rotateByAxisAngle(this, [0, 1, 0], angle);

				return this;
			};

			this.rotateZ = function (angle) {

				FULLTILT.Euler.prototype.rotateByAxisAngle(this, [0, 0, 1], angle);

				return this;
			};

			// Initialize object values
			this.set(alpha, beta, gamma);
		};

		FULLTILT.Euler.prototype = {

			constructor: FULLTILT.Euler,

			rotateByAxisAngle: function () {

				var _matrix = new FULLTILT.RotationMatrix();
				return function (targetEuler, axis, angle) {

					_matrix.setFromEuler(targetEuler);

					_matrix = FULLTILT.RotationMatrix.prototype.rotateByAxisAngle(_matrix, axis, angle);

					targetEuler.setFromRotationMatrix(_matrix);

					return targetEuler;
				};
			}()

		};

		///// FULLTILT.DeviceOrientation //////

		FULLTILT.DeviceOrientation = function (options) {

			this.options = options || {}; // by default use UA deviceorientation 'type' ("game" on iOS, "world" on Android)

			var tries = 0;
			var maxTries = 200;
			var successCount = 0;
			var successThreshold = 10;

			this.alphaOffsetScreen = 0;
			this.alphaOffsetDevice = undefined;

			// Create a game-based deviceorientation object (initial alpha === 0 degrees)
			if (this.options.type === "game") {

				var setGameAlphaOffset = function (evt) {

					if (evt.alpha !== null) {
						// do regardless of whether 'evt.absolute' is also true
						this.alphaOffsetDevice = new FULLTILT.Euler(evt.alpha, 0, 0);
						this.alphaOffsetDevice.rotateZ(-screenOrientationAngle);

						// Discard first {successThreshold} responses while a better compass lock is found by UA
						if (++successCount >= successThreshold) {
							window.removeEventListener('deviceorientation', setGameAlphaOffset, false);
							return;
						}
					}

					if (++tries >= maxTries) {
						window.removeEventListener('deviceorientation', setGameAlphaOffset, false);
					}
				}.bind(this);

				window.addEventListener('deviceorientation', setGameAlphaOffset, false);

				// Create a compass-based deviceorientation object (initial alpha === compass degrees)
			} else if (this.options.type === "world") {

				var setCompassAlphaOffset = function (evt) {

					if (evt.absolute !== true && evt.webkitCompassAccuracy !== undefined && evt.webkitCompassAccuracy !== null && +evt.webkitCompassAccuracy >= 0 && +evt.webkitCompassAccuracy < 50) {
						this.alphaOffsetDevice = new FULLTILT.Euler(evt.webkitCompassHeading, 0, 0);
						this.alphaOffsetDevice.rotateZ(screenOrientationAngle);
						this.alphaOffsetScreen = screenOrientationAngle;

						// Discard first {successThreshold} responses while a better compass lock is found by UA
						if (++successCount >= successThreshold) {
							window.removeEventListener('deviceorientation', setCompassAlphaOffset, false);
							return;
						}
					}

					if (++tries >= maxTries) {
						window.removeEventListener('deviceorientation', setCompassAlphaOffset, false);
					}
				}.bind(this);

				window.addEventListener('deviceorientation', setCompassAlphaOffset, false);
			} // else... use whatever orientation system the UA provides ("game" on iOS, "world" on Android)
		};

		FULLTILT.DeviceOrientation.prototype = {

			constructor: FULLTILT.DeviceOrientation,

			start: function start(callback) {

				if (callback && Object.prototype.toString.call(callback) == '[object Function]') {

					sensors.orientation.callbacks.push(callback);
				}

				if (!screenActive) {

					if (hasScreenOrientationAPI) {

						window.screen.orientation.addEventListener('change', handleScreenOrientationChange, false);
					} else {

						window.addEventListener('orientationchange', handleScreenOrientationChange, false);
					}
				}

				if (!sensors.orientation.active) {

					window.addEventListener('deviceorientation', handleDeviceOrientationChange, false);

					sensors.orientation.active = true;
				}
			},

			stop: function stop() {

				if (sensors.orientation.active) {

					window.removeEventListener('deviceorientation', handleDeviceOrientationChange, false);

					sensors.orientation.active = false;
				}
			},

			listen: function listen(callback) {

				this.start(callback);
			},

			getFixedFrameQuaternion: function () {

				var euler = new FULLTILT.Euler();
				var matrix = new FULLTILT.RotationMatrix();
				var quaternion = new FULLTILT.Quaternion();

				return function () {

					var orientationData = sensors.orientation.data || { alpha: 0, beta: 0, gamma: 0 };

					var adjustedAlpha = orientationData.alpha;

					if (this.alphaOffsetDevice) {
						matrix.setFromEuler(this.alphaOffsetDevice);
						matrix.rotateZ(-this.alphaOffsetScreen);
						euler.setFromRotationMatrix(matrix);

						if (euler.alpha < 0) {
							euler.alpha += 360;
						}

						euler.alpha %= 360;

						adjustedAlpha -= euler.alpha;
					}

					euler.set(adjustedAlpha, orientationData.beta, orientationData.gamma);

					quaternion.setFromEuler(euler);

					return quaternion;
				};
			}(),

			getScreenAdjustedQuaternion: function () {

				var quaternion;

				return function () {

					quaternion = this.getFixedFrameQuaternion();

					// Automatically apply screen orientation transform
					quaternion.rotateZ(-screenOrientationAngle);

					return quaternion;
				};
			}(),

			getFixedFrameMatrix: function () {

				var euler = new FULLTILT.Euler();
				var matrix = new FULLTILT.RotationMatrix();

				return function () {

					var orientationData = sensors.orientation.data || { alpha: 0, beta: 0, gamma: 0 };

					var adjustedAlpha = orientationData.alpha;

					if (this.alphaOffsetDevice) {
						matrix.setFromEuler(this.alphaOffsetDevice);
						matrix.rotateZ(-this.alphaOffsetScreen);
						euler.setFromRotationMatrix(matrix);

						if (euler.alpha < 0) {
							euler.alpha += 360;
						}

						euler.alpha %= 360;

						adjustedAlpha -= euler.alpha;
					}

					euler.set(adjustedAlpha, orientationData.beta, orientationData.gamma);

					matrix.setFromEuler(euler);

					return matrix;
				};
			}(),

			getScreenAdjustedMatrix: function () {

				var matrix;

				return function () {

					matrix = this.getFixedFrameMatrix();

					// Automatically apply screen orientation transform
					matrix.rotateZ(-screenOrientationAngle);

					return matrix;
				};
			}(),

			getFixedFrameEuler: function () {

				var euler = new FULLTILT.Euler();
				var matrix;

				return function () {

					matrix = this.getFixedFrameMatrix();

					euler.setFromRotationMatrix(matrix);

					return euler;
				};
			}(),

			getScreenAdjustedEuler: function () {

				var euler = new FULLTILT.Euler();
				var matrix;

				return function () {

					matrix = this.getScreenAdjustedMatrix();

					euler.setFromRotationMatrix(matrix);

					return euler;
				};
			}(),

			isAbsolute: function isAbsolute() {

				if (sensors.orientation.data && sensors.orientation.data.absolute === true) {
					return true;
				}

				return false;
			},

			getLastRawEventData: function getLastRawEventData() {

				return sensors.orientation.data || {};
			},

			_alphaAvailable: false,
			_betaAvailable: false,
			_gammaAvailable: false,

			isAvailable: function isAvailable(_valueType) {

				switch (_valueType) {
					case this.ALPHA:
						return this._alphaAvailable;

					case this.BETA:
						return this._betaAvailable;

					case this.GAMMA:
						return this._gammaAvailable;
				}
			},

			ALPHA: 'alpha',
			BETA: 'beta',
			GAMMA: 'gamma'

		};

		///// FULLTILT.DeviceMotion //////

		FULLTILT.DeviceMotion = function (options) {

			this.options = options || {}; // placeholder object since no options are currently supported
		};

		FULLTILT.DeviceMotion.prototype = {

			constructor: FULLTILT.DeviceMotion,

			start: function start(callback) {

				if (callback && Object.prototype.toString.call(callback) == '[object Function]') {

					sensors.motion.callbacks.push(callback);
				}

				if (!screenActive) {

					if (hasScreenOrientationAPI) {

						window.screen.orientation.addEventListener('change', handleScreenOrientationChange, false);
					} else {

						window.addEventListener('orientationchange', handleScreenOrientationChange, false);
					}
				}

				if (!sensors.motion.active) {

					window.addEventListener('devicemotion', handleDeviceMotionChange, false);

					sensors.motion.active = true;
				}
			},

			stop: function stop() {

				if (sensors.motion.active) {

					window.removeEventListener('devicemotion', handleDeviceMotionChange, false);

					sensors.motion.active = false;
				}
			},

			listen: function listen(callback) {

				this.start(callback);
			},

			getScreenAdjustedAcceleration: function getScreenAdjustedAcceleration() {

				var accData = sensors.motion.data && sensors.motion.data.acceleration ? sensors.motion.data.acceleration : { x: 0, y: 0, z: 0 };
				var screenAccData = {};

				switch (screenOrientationAngle) {
					case SCREEN_ROTATION_90:
						screenAccData.x = -accData.y;
						screenAccData.y = accData.x;
						break;
					case SCREEN_ROTATION_180:
						screenAccData.x = -accData.x;
						screenAccData.y = -accData.y;
						break;
					case SCREEN_ROTATION_270:
					case SCREEN_ROTATION_MINUS_90:
						screenAccData.x = accData.y;
						screenAccData.y = -accData.x;
						break;
					default:
						// SCREEN_ROTATION_0
						screenAccData.x = accData.x;
						screenAccData.y = accData.y;
						break;
				}

				screenAccData.z = accData.z;

				return screenAccData;
			},

			getScreenAdjustedAccelerationIncludingGravity: function getScreenAdjustedAccelerationIncludingGravity() {

				var accGData = sensors.motion.data && sensors.motion.data.accelerationIncludingGravity ? sensors.motion.data.accelerationIncludingGravity : { x: 0, y: 0, z: 0 };
				var screenAccGData = {};

				switch (screenOrientationAngle) {
					case SCREEN_ROTATION_90:
						screenAccGData.x = -accGData.y;
						screenAccGData.y = accGData.x;
						break;
					case SCREEN_ROTATION_180:
						screenAccGData.x = -accGData.x;
						screenAccGData.y = -accGData.y;
						break;
					case SCREEN_ROTATION_270:
					case SCREEN_ROTATION_MINUS_90:
						screenAccGData.x = accGData.y;
						screenAccGData.y = -accGData.x;
						break;
					default:
						// SCREEN_ROTATION_0
						screenAccGData.x = accGData.x;
						screenAccGData.y = accGData.y;
						break;
				}

				screenAccGData.z = accGData.z;

				return screenAccGData;
			},

			getScreenAdjustedRotationRate: function getScreenAdjustedRotationRate() {

				var rotRateData = sensors.motion.data && sensors.motion.data.rotationRate ? sensors.motion.data.rotationRate : { alpha: 0, beta: 0, gamma: 0 };
				var screenRotRateData = {};

				switch (screenOrientationAngle) {
					case SCREEN_ROTATION_90:
						screenRotRateData.beta = -rotRateData.gamma;
						screenRotRateData.gamma = rotRateData.beta;
						break;
					case SCREEN_ROTATION_180:
						screenRotRateData.beta = -rotRateData.beta;
						screenRotRateData.gamma = -rotRateData.gamma;
						break;
					case SCREEN_ROTATION_270:
					case SCREEN_ROTATION_MINUS_90:
						screenRotRateData.beta = rotRateData.gamma;
						screenRotRateData.gamma = -rotRateData.beta;
						break;
					default:
						// SCREEN_ROTATION_0
						screenRotRateData.beta = rotRateData.beta;
						screenRotRateData.gamma = rotRateData.gamma;
						break;
				}

				screenRotRateData.alpha = rotRateData.alpha;

				return screenRotRateData;
			},

			getLastRawEventData: function getLastRawEventData() {

				return sensors.motion.data || {};
			},

			_accelerationXAvailable: false,
			_accelerationYAvailable: false,
			_accelerationZAvailable: false,

			_accelerationIncludingGravityXAvailable: false,
			_accelerationIncludingGravityYAvailable: false,
			_accelerationIncludingGravityZAvailable: false,

			_rotationRateAlphaAvailable: false,
			_rotationRateBetaAvailable: false,
			_rotationRateGammaAvailable: false,

			isAvailable: function isAvailable(_valueType) {

				switch (_valueType) {
					case this.ACCELERATION_X:
						return this._accelerationXAvailable;

					case this.ACCELERATION_Y:
						return this._accelerationYAvailable;

					case this.ACCELERATION_Z:
						return this._accelerationZAvailable;

					case this.ACCELERATION_INCLUDING_GRAVITY_X:
						return this._accelerationIncludingGravityXAvailable;

					case this.ACCELERATION_INCLUDING_GRAVITY_Y:
						return this._accelerationIncludingGravityYAvailable;

					case this.ACCELERATION_INCLUDING_GRAVITY_Z:
						return this._accelerationIncludingGravityZAvailable;

					case this.ROTATION_RATE_ALPHA:
						return this._rotationRateAlphaAvailable;

					case this.ROTATION_RATE_BETA:
						return this._rotationRateBetaAvailable;

					case this.ROTATION_RATE_GAMMA:
						return this._rotationRateGammaAvailable;
				}
			},

			ACCELERATION_X: 'accelerationX',
			ACCELERATION_Y: 'accelerationY',
			ACCELERATION_Z: 'accelerationZ',

			ACCELERATION_INCLUDING_GRAVITY_X: 'accelerationIncludingGravityX',
			ACCELERATION_INCLUDING_GRAVITY_Y: 'accelerationIncludingGravityY',
			ACCELERATION_INCLUDING_GRAVITY_Z: 'accelerationIncludingGravityZ',

			ROTATION_RATE_ALPHA: 'rotationRateAlpha',
			ROTATION_RATE_BETA: 'rotationRateBeta',
			ROTATION_RATE_GAMMA: 'rotationRateGamma'

		};

		////// Attach FULLTILT to root DOM element //////

		window.FULLTILT = FULLTILT;
	})(window);
	/**
 * JavaScript project for accessing and normalizing the accelerometer and gyroscope data on mobile devices
 *
 * @author Doruk Eker <dorukeker@gmail.com>
 * @copyright Doruk Eker <http://dorukeker.com>
 * @version 2.0.4
 * @license MIT License | http://opensource.org/licenses/MIT
 */

	(function (root, factory) {
		if (typeof undefined === 'function' && undefined.amd) {
			undefined(function () {
				return root.GyroNorm = factory();
			});
		} else if ('object' === 'object' && module.exports) {
			module.exports = root.GyroNorm = factory();
		} else {
			root.GyroNorm = factory();
		}
	})(commonjsGlobal, function () {
		/* Constants */
		var GAME = 'game';
		var WORLD = 'world';
		var DEVICE_ORIENTATION = 'deviceorientation';
		var ACCELERATION = 'acceleration';
		var ACCELERATION_INCLUDING_GRAVITY = 'accelerationinludinggravity';
		var ROTATION_RATE = 'rotationrate';

		/*-------------------------------------------------------*/
		/* PRIVATE VARIABLES */

		var _interval = null; // Timer to return values
		var _calibrationValue = 0; // Alpha offset value
		var _gravityCoefficient = 0; // Coefficient to normalze gravity related values
		var _isRunning = false; // Boolean value if GyroNorm is tracking
		var _isReady = false; // Boolean value if GyroNorm is is initialized

		var _do = null; // Object to store the device orientation values
		var _dm = null; // Object to store the device motion values

		/* OPTIONS */
		var _frequency = 50; // Frequency for the return data in milliseconds
		var _gravityNormalized = true; // Flag if to normalize gravity values
		var _orientationBase = GAME; // Can be GyroNorm.GAME or GyroNorm.WORLD. GyroNorm.GAME returns orientation values with respect to the head direction of the device. GyroNorm.WORLD returns the orientation values with respect to the actual north direction of the world.
		var _decimalCount = 2; // Number of digits after the decimals point for the return values
		var _logger = null; // Function to callback on error. There is no default value. It can only be set by the user on gn.init()
		var _screenAdjusted = false; // If set to true it will return screen adjusted values. (e.g. On a horizontal orientation of a mobile device, the head would be one of the sides, instead of  the actual head of the device.)

		var GyroNorm = function GyroNorm(options) {};

		/* Constants */
		GyroNorm.GAME = GAME;
		GyroNorm.WORLD = WORLD;
		GyroNorm.DEVICE_ORIENTATION = DEVICE_ORIENTATION;
		GyroNorm.ACCELERATION = ACCELERATION;
		GyroNorm.ACCELERATION_INCLUDING_GRAVITY = ACCELERATION_INCLUDING_GRAVITY;
		GyroNorm.ROTATION_RATE = ROTATION_RATE;

		/*
  *
  * Initialize GyroNorm instance function
  *
  * @param object options - values are as follows. If set in the init function they overwrite the default option values
  * @param int options.frequency
  * @param boolean options.gravityNormalized
  * @param boolean options.orientationBase
  * @param boolean options.decimalCount
  * @param function options.logger
  * @param function options.screenAdjusted
  *
  */

		GyroNorm.prototype.init = function (options) {
			// Assign options that are passed with the constructor function
			if (options && options.frequency) _frequency = options.frequency;
			if (options && options.gravityNormalized) _gravityNormalized = options.gravityNormalized;
			if (options && options.orientationBase) _orientationBase = options.orientationBase;
			if (options && typeof options.decimalCount === 'number' && options.decimalCount >= 0) _decimalCount = parseInt(options.decimalCount);
			if (options && options.logger) _logger = options.logger;
			if (options && options.screenAdjusted) _screenAdjusted = options.screenAdjusted;

			var deviceOrientationPromise = new FULLTILT.getDeviceOrientation({ 'type': _orientationBase }).then(function (controller) {
				_do = controller;
			});

			var deviceMotionPromise = new FULLTILT.getDeviceMotion().then(function (controller) {
				_dm = controller;
				// Set gravity coefficient
				_gravityCoefficient = _dm.getScreenAdjustedAccelerationIncludingGravity().z > 0 ? -1 : 1;
			});

			return Promise.all([deviceOrientationPromise, deviceMotionPromise]).then(function () {
				_isReady = true;
			});
		};

		/*
  *
  * Stops all the tracking and listening on the window objects
  *
  */
		GyroNorm.prototype.end = function () {
			try {
				_isReady = false;
				this.stop();
				_dm.stop();
				_do.stop();
			} catch (err) {
				log(err);
			}
		};

		/*
  *
  * Starts tracking the values
  *
  * @param function callback - Callback function to read the values
  *
  */
		GyroNorm.prototype.start = function (callback) {
			if (!_isReady) {
				log({ message: 'GyroNorm is not initialized yet. First call the "init()" function.', code: 1 });
				return;
			}

			_interval = setInterval(function () {
				callback(snapShot());
			}, _frequency);
			_isRunning = true;
		};

		/*
  *
  * Stops tracking the values
  *
  */
		GyroNorm.prototype.stop = function () {
			if (_interval) {
				clearInterval(_interval);
				_isRunning = false;
			}
		};

		/*
  *
  * Toggles if to normalize gravity related values
  *
  * @param boolean flag
  *
  */
		GyroNorm.prototype.normalizeGravity = function (flag) {
			_gravityNormalized = flag ? true : false;
		};

		/*
  *
  * Sets the current head direction as alpha = 0
  * Can only be used if device orientation is being tracked, values are not screen adjusted, value type is GyroNorm.EULER and orientation base is GyroNorm.GAME
  *
  * @return: If head direction is set successfully returns true, else false
  *
  */
		GyroNorm.prototype.setHeadDirection = function () {
			if (_screenAdjusted || _orientationBase === WORLD) {
				return false;
			}

			_calibrationValue = _do.getFixedFrameEuler().alpha;
			return true;
		};

		/*
  *
  * Sets the log function
  *
  */
		GyroNorm.prototype.startLogging = function (logger) {
			if (logger) {
				_logger = logger;
			}
		};

		/*
  *
  * Sets the log function to null which stops the logging
  *
  */
		GyroNorm.prototype.stopLogging = function () {
			_logger = null;
		};

		/*
  *
  * Returns if certain type of event is available on the device
  *
  * @param string _eventType - possible values are "deviceorientation" , "devicemotion" , "compassneedscalibration"
  *
  * @return true if event is available false if not
  *
  */
		GyroNorm.prototype.isAvailable = function (_eventType) {

			var doSnapShot = _do.getScreenAdjustedEuler();
			var accSnapShot = _dm.getScreenAdjustedAcceleration();
			var accGraSnapShot = _dm.getScreenAdjustedAccelerationIncludingGravity();
			var rotRateSnapShot = _dm.getScreenAdjustedRotationRate();

			switch (_eventType) {
				case DEVICE_ORIENTATION:
					return doSnapShot.alpha && doSnapShot.alpha !== null && doSnapShot.beta && doSnapShot.beta !== null && doSnapShot.gamma && doSnapShot.gamma !== null;
					break;

				case ACCELERATION:
					return accSnapShot && accSnapShot.x && accSnapShot.y && accSnapShot.z;
					break;

				case ACCELERATION_INCLUDING_GRAVITY:
					return accGraSnapShot && accGraSnapShot.x && accGraSnapShot.y && accGraSnapShot.z;
					break;

				case ROTATION_RATE:
					return rotRateSnapShot && rotRateSnapShot.alpha && rotRateSnapShot.beta && rotRateSnapShot.gamma;
					break;

				default:
					return {
						deviceOrientationAvailable: doSnapShot.alpha && doSnapShot.alpha !== null && doSnapShot.beta && doSnapShot.beta !== null && doSnapShot.gamma && doSnapShot.gamma !== null,
						accelerationAvailable: accSnapShot && accSnapShot.x && accSnapShot.y && accSnapShot.z,
						accelerationIncludingGravityAvailable: accGraSnapShot && accGraSnapShot.x && accGraSnapShot.y && accGraSnapShot.z,
						rotationRateAvailable: rotRateSnapShot && rotRateSnapShot.alpha && rotRateSnapShot.beta && rotRateSnapShot.gamma
					};
					break;
			}
		};

		/*
  *
  * Returns boolean value if the GyroNorm is running
  *
  */
		GyroNorm.prototype.isRunning = function () {
			return _isRunning;
		};

		/*-------------------------------------------------------*/
		/* PRIVATE FUNCTIONS */

		/*
  *
  * Utility function to round with digits after the decimal point
  *
  * @param float number - the original number to round
  *
  */
		function rnd(number) {
			return Math.round(number * Math.pow(10, _decimalCount)) / Math.pow(10, _decimalCount);
		}

		/*
  *
  * Starts calibration
  *
  */
		function snapShot() {
			var doSnapShot = {};

			if (_screenAdjusted) {
				doSnapShot = _do.getScreenAdjustedEuler();
			} else {
				doSnapShot = _do.getFixedFrameEuler();
			}

			var accSnapShot = _dm.getScreenAdjustedAcceleration();
			var accGraSnapShot = _dm.getScreenAdjustedAccelerationIncludingGravity();
			var rotRateSnapShot = _dm.getScreenAdjustedRotationRate();

			var alphaToSend = 0;

			if (_orientationBase === GAME) {
				alphaToSend = doSnapShot.alpha - _calibrationValue;
				alphaToSend = alphaToSend < 0 ? 360 - Math.abs(alphaToSend) : alphaToSend;
			} else {
				alphaToSend = doSnapShot.alpha;
			}

			var snapShot = {
				do: {
					alpha: rnd(alphaToSend),
					beta: rnd(doSnapShot.beta),
					gamma: rnd(doSnapShot.gamma),
					absolute: _do.isAbsolute()
				},
				dm: {
					x: rnd(accSnapShot.x),
					y: rnd(accSnapShot.y),
					z: rnd(accSnapShot.z),
					gx: rnd(accGraSnapShot.x),
					gy: rnd(accGraSnapShot.y),
					gz: rnd(accGraSnapShot.z),
					alpha: rnd(rotRateSnapShot.alpha),
					beta: rnd(rotRateSnapShot.beta),
					gamma: rnd(rotRateSnapShot.gamma)
				}
			};

			// Normalize gravity
			if (_gravityNormalized) {
				snapShot.dm.gx *= _gravityCoefficient;
				snapShot.dm.gy *= _gravityCoefficient;
				snapShot.dm.gz *= _gravityCoefficient;
			}

			return snapShot;
		}

		/*
  *
  * Starts listening to orientation event on the window object
  *
  */
		function log(err) {
			if (_logger) {
				if (typeof err == 'string') {
					err = { message: err, code: 0 };
				}
				_logger(err);
			}
		}

		return GyroNorm;
	});
});

(function (self) {
  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : window);

/**
 * A playground for creative coding
 */

var Sandpit = function () {
  createClass(Sandpit, null, [{
    key: 'CANVAS',
    get: function get$$1() {
      return '2d';
    }
  }, {
    key: 'WEBGL',
    get: function get$$1() {
      return 'webgl';
    }
  }, {
    key: 'EXPERIMENTAL_WEBGL',
    get: function get$$1() {
      return 'experimental-webgl';
    }

    /**
     * @param {(string|object)} container - The container for the canvas to be added to
     * @param {string} type - Defines whether the context is 2d or 3d
     * @param {object} options - Optionally decide to ignore rescaling for retina displays,
     * disable putting settings into the query string, or add stats to the dom
     */

  }]);

  function Sandpit(container, type, options) {
    classCallCheck(this, Sandpit);

    logger.info('⛱ Welcome to Sandpit');
    this._queryable = options && options.hasOwnProperty('queryable') ? options.queryable : true;
    this._retina = options && options.hasOwnProperty('retina') ? options.retina : true;
    this._stats = options && options.hasOwnProperty('stats') ? options.stats : false;
    this._setupContext(container, type, this._retina);
  }

  /**
   * Set up the canvas
   * @private
   */


  createClass(Sandpit, [{
    key: '_setupContext',
    value: function _setupContext(container, type, retina) {
      // Check that the correct container type has been passed
      if (typeof container !== 'string' && (typeof container === 'undefined' ? 'undefined' : _typeof(container)) !== 'object') {
        throw new Error('Please provide a string or object reference to the container, like ".container", or document.querySelector(".container")');
      }
      // Check that the type is set
      if (typeof type !== 'string' || type !== Sandpit.CANVAS && type !== Sandpit.WEBGL) {
        throw new Error('Please provide a context type - either `Sandpit.CANVAS` or `Sandpit.WEBGL`');
      }

      // Either find the container, or just use the object
      var _container = void 0;
      if (typeof container === 'string') {
        _container = document.querySelector(container);
      } else if ((typeof container === 'undefined' ? 'undefined' : _typeof(container)) === 'object') {
        _container = container;
      }

      // Check the container is a dom element
      if (Is.element(_container)) {
        // Check the container is a canvas element
        // and if so, use it instead of making a new one
        if (Is.canvas(_container)) {
          this._canvas = _container;
        } else {
          this._canvas = document.createElement('canvas');
          _container.appendChild(this._canvas);
        }
        // Set the width and height
        this._canvas.width = this._canvas.clientWidth;
        this._canvas.height = this._canvas.clientHeight;
        // Grab the context
        if (type === Sandpit.CANVAS) {
          this._context = this._canvas.getContext(type);
        } else if (type === Sandpit.WEBGL || type === Sandpit.EXPERIMENTAL_WEBGL) {
          this._context = this._canvas.getContext(Sandpit.WEBGL) || this._canvas.getContext(Sandpit.EXPERIMENTAL_WEBGL);
        }
        this._type = type;

        // Deal with retina displays
        if (type === Sandpit.CANVAS && window.devicePixelRatio !== 1 && this._retina) {
          this._handleRetina();
        }

        // Sets up stats, if they are enabled
        if (this._stats) this.setupStats();
      } else {
        throw new Error('The container is not a HTMLElement');
      }
    }

    /**
     *  Resizes the canvas for retina
     *  @private
     */

  }, {
    key: '_handleRetina',
    value: function _handleRetina() {
      var ratio = window.devicePixelRatio;
      // Increaser the canvas by the ratio
      this._canvas.width = this._canvas.clientWidth * ratio;
      this._canvas.height = this._canvas.clientHeight * ratio;
      // Scale the canvas to the new ratio
      this._context.scale(ratio, ratio);
    }

    /**
     * Sets up the settings gui via dat.gui
     * @param {object} settings - An object of key value pairs
     * for the setting name and default value
     * @param {boolean} queryable - Whether or not to store settings
     * in the query string for easy sharing
     * @private
     */

  }, {
    key: '_setupSettings',
    value: function _setupSettings() {
      var _this = this;

      this._settings = {};
      this._clearGui = true;
      this._resetGui = true;
      // Destroy the gui if new settings are being passed in
      if (this._gui) {
        this._gui.domElement.removeEventListener('touchmove', this._preventDefault);
        this._gui.destroy();
      }
      this._gui = new dat.GUI();
      this._gui.domElement.addEventListener('touchmove', this._preventDefault, false);

      // If queryable is true, set up the query string management
      // for storing settings
      if (this._queryable) {
        if (window.location.search) {
          var params = queryString.parse(window.location.search);
          Object.keys(params).forEach(function (key) {
            // Check if the param is a float, and if so, parse it
            if (parseFloat(params[key])) {
              params[key] = parseFloat(params[key]);
            }
            // If a setting matches the param, use the param
            if (_this.defaults[key]) {
              var param = params[key];
              // Convert string to boolean if 'true' or 'false'
              if (param === 'true') param = true;
              if (param === 'false') param = false;
              if (_typeof(_this.defaults[key].value) !== 'object') {
                // If sticky is true, stick with the default setting
                // otherwise set the default to the param
                if (!_this.defaults[key].sticky) {
                  _this.defaults[key].value = param;
                }
              } else {
                // If the param is an object, store the
                // name in a selected property
                if (!_this.defaults[key].sticky) {
                  _this.defaults[key].selected = param;
                } else {
                  // If sticky is true, force the default setting
                  _this.defaults[key].selected = _this.defaults[key].value[Object.keys(_this.defaults[key].value)[0]];
                }
              }
            }
          });
        }
      }

      // Create settings folder and add each item to it
      var group = this._gui.addFolder('Settings');
      Object.keys(this.defaults).forEach(function (name) {
        var options = false;
        var value = _this.defaults[name].value;

        if (value || _typeof(_this.defaults[name]) === 'object') {
          // If it's an object, supply the array or object,
          // and grab the right value
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            options = value;
            // If a selected option is available via the query
            // string, use that
            if (_this.defaults[name].selected) {
              _this._settings[name] = _this.defaults[name].selected;
            } else {
              // If not, grab the first item in the object or array
              _this._settings[name] = Is.array(value) ? value[0] : value[Object.keys(value)[0]];
            }
          } else {
            // If it's not an object, pass the setting on
            _this._settings[name] = _this.defaults[name].value;
          }

          // If it's a colour, use a different method
          var guiField = _this.defaults[name].color ? group.addColor(_this._settings, name) : group.add(_this._settings, name, options);

          // Check for min, max and step, and add to the gui field
          if (_this.defaults[name].min !== undefined) guiField = guiField.min(_this.defaults[name].min);
          if (_this.defaults[name].max !== undefined) guiField = guiField.max(_this.defaults[name].max);
          if (_this.defaults[name].step !== undefined) guiField = guiField.step(_this.defaults[name].step);
          if (_this.defaults[name].editable === false) {
            guiField.domElement.style.pointerEvents = 'none';
            guiField.domElement.style.opacity = 0.5;
          }

          // Handle the change event
          guiField.onChange(debounce(function (value) {
            _this._change(name, value);
          }), 300);
        } else {
          // Handle properties that aren't tied to value -
          // usually settings that relate to the gui itself
          switch (name) {
            case 'clear':
              _this._clearGui = _this.defaults[name];
              break;
            case 'reset':
              _this._resetGui = _this.defaults[name];
              break;
            default:
              break;
          }
        }
      });
      // Open the settings drawer
      group.open();

      // Hide controls for mobile
      if (this.width <= 767) {
        this._gui.close();
      }

      // If queryable is enabled, serialize the final settings
      // and push them to the query string
      if (this._queryable) {
        var query = queryString.stringify(this._settings);
        window.history.replaceState({}, null, this._getPathFromUrl() + '?' + query);
        // Adds a clear and reset button to the gui interface,
        // if they aren't disabled in the settings
        if (this._clearGui) this._gui.add({ clear: function clear() {
            _this.clear();
          } }, 'clear');
        if (this._resetGui) this._gui.add({ reset: function reset() {
            _this._reset();
          } }, 'reset');
      }
    }

    /**
     * Resets the settings in the query string, and offers a hook
     * to do something more fancy with sandpit.reset
     * @private
     */

  }, {
    key: '_reset',
    value: function _reset() {
      if (this._queryable || this.reset) {
        if (this.reset) {
          // If there's a reset method available, run that
          this.reset();
        } else {
          // If queryable, clear the query string
          window.history.replaceState({}, null, this._getPathFromUrl());
          // Reload the video
          window.location.reload();
        }
      }
    }

    /**vst
    
     * Handles a changed setting
     * @param {string} name - Setting name
     * @param {*} value - The new setting value
     * @private
     */

  }, {
    key: '_change',
    value: function _change(name, value) {
      logger.info('Update fired on ' + name + ': ' + value);
      if (this._queryable) {
        var query = queryString.stringify(this._settings);
        window.history.pushState({}, null, this._getPathFromUrl() + '?' + query);
      }
      // If there is a change hook, use it
      if (this.change) {
        this.change(name, value);
      }
    }

    /**
     * Sets up the primary animation loop
     * @private
     */

  }, {
    key: '_setupLoop',
    value: function _setupLoop() {
      this._time = 0;
      this._loop();
    }

    /**
     * The primary animation loop
     * @private
     */

  }, {
    key: '_loop',
    value: function _loop() {
      // Start stat recording for this frame
      if (this.stats) this.stats.begin();
      // Clear the canvas if autoclear is set
      if (this._autoClear) this.clear();
      // Loop!
      if (this.loop) this.loop();
      // Increment time
      this._time++;
      // End stat recording for this frame
      if (this.stats) this.stats.end();
      this._animationFrame = window.requestAnimationFrame(this._loop.bind(this));
    }

    /**
     * Sets up event management
     * @private
     */

  }, {
    key: '_setupEvents',
    value: function _setupEvents() {
      var _this2 = this;

      this._events = {};
      this._setupResize();
      this._setupInput();

      // Loop through and add event listeners
      Object.keys(this._events).forEach(function (event) {
        if (_this2._events[event].disable) {
          // If the disable property exists, add prevent default to it
          _this2._events[event].disable.addEventListener(event, _this2._preventDefault, false);
        }
        _this2._events[event].context.addEventListener(event, _this2._events[event].event.bind(_this2), false);
      });
    }

    /**
     * Sets up the resize event, optionally using a user defined option
     * @private
     */

  }, {
    key: '_setupResize',
    value: function _setupResize() {
      this._resizeEvent = this.resize ? this.resize : this.resizeCanvas;
      this._events['resize'] = { event: this._resizeEvent, context: window };
    }

    /**
     * Hooks up the mouse events
     * @private
     */

  }, {
    key: '_setupMouse',
    value: function _setupMouse() {
      this._events['mousemove'] = { event: this._handleMouseMove, context: document };
      this._events['mousedown'] = { event: this._handleMouseDown, context: document };
      this._events['mouseenter'] = { event: this._handleMouseEnter, context: document };
      this._events['mouseleave'] = { event: this._handleMouseLeave, context: document };
      this._events['mouseup'] = { event: this._handleMouseUp, context: document };
    }

    /**
     * Hooks up the touch events
     * @private
     */

  }, {
    key: '_setupTouches',
    value: function _setupTouches() {
      var body = document.querySelector('body');
      this._events['touchmove'] = { event: this._handleTouchMove, disable: document, context: body };
      this._events['touchstart'] = { event: this._handleTouchStart, disable: document, context: body };
      this._events['touchend'] = { event: this._handleTouchEnd, disable: document, context: body };
    }

    /**
     * Stops an event bubbling up
     * @private
     */

  }, {
    key: '_stopPropagation',
    value: function _stopPropagation(event) {
      event.stopPropagation();
    }

    /**
     * Stops an event firing its default behaviour
     * @private
     */

  }, {
    key: '_preventDefault',
    value: function _preventDefault(event) {
      event.preventDefault();
    }

    /**
     * Hooks up the accelerometer events
     * @private
     */

  }, {
    key: '_setupAccelerometer',
    value: function _setupAccelerometer() {
      var _this3 = this;

      this._gyroscope = new gyronorm_complete();
      this._gyroscope.init().then(function () {
        _this3._gyroscope.start(_this3._handleAccelerometer.bind(_this3));
      }).catch(function (e) {
        logger.warn('Accelerometer is not supported by this device');
      });
    }

    /**
     * Defines the input object and sets up the mouse, accelerometer and touches
     * @param {event} event
     * @private
     */

  }, {
    key: '_setupInput',
    value: function _setupInput() {
      this.input = {};
      this._setupMouse();
      this._setupTouches();
      this._setupAccelerometer();
    }

    /**
     * Handles the mousemove event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseMove',
    value: function _handleMouseMove(event) {
      event.touches = {};
      event.touches[0] = event;
      this._handleTouches(event);
      if (this.move) this.move(event);
    }

    /**
     * Handles the mousedown event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseDown',
    value: function _handleMouseDown(event) {
      event.touches = {};
      event.touches[0] = event;
      this._handleTouches(event);
      if (this.touch) this.touch(event);
    }

    /**
     * Handles the mouseup event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseUp',
    value: function _handleMouseUp(event) {
      this._handleRelease();
      if (this.release) this.release(event);
    }

    /**
     * Handles the mouseenter event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {
      this.input.inFrame = true;
    }

    /**
     * Handles the mouseleave event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      this.input.inFrame = false;
    }

    /**
     * Handles the touchmove event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(event) {
      // So, event.preventDefault() seems required to prevent pinching,
      // but sometimes pinches still rarely happen (3 - 5 fingers), so
      // is there a way to avoid this? Currently added a
      // focusTouchesOnCanvas() method to blow away all other
      // touch events, for use outside the demo environment,
      // but this isn't really a viable solution. If possible,
      // I'd use the bit below, but I've commented it out for now:
      // this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation()
      event.preventDefault();
      this._handleTouches(event);
      if (this.move) this.move(event);
    }

    /**
     * Handles the touchstart event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(event) {
      this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation();
      this._handleTouches(event);
      if (this.touch) this.touch(event);
    }

    /**
     * Handles the touchend event
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd(event) {
      this._focusTouchesOnCanvas ? event.preventDefault() : event.stopPropagation();
      this._handleTouches(event);
      if (this.release) this.release(event);
    }

    /**
     * Handles the accelerometer event, using the
     * GyroNorm.js library
     * @param {event} event
     * @private
     */

  }, {
    key: '_handleAccelerometer',
    value: function _handleAccelerometer(data) {
      this.input.accelerometer = data;
      // Apply some helpers to more easily
      // access x, y and rotation
      this.input.accelerometer.xAxis = data.do.beta;
      this.input.accelerometer.yAxis = data.do.gamma;
      this.input.accelerometer.rotation = data.do.alpha;
      this.input.accelerometer.gamma = data.do.gamma;
      this.input.accelerometer.beta = data.do.beta;
      this.input.accelerometer.alpha = data.do.alpha;
      // Fire the accelerometer event, if available
      if (this.accelerometer) this.accelerometer();
    }

    /**
     * Handles a set of touches
     * @param {object} touches - An object containing touch information, in
     * the format {0: TouchItem, 1: TouchItem}
     * @private
     */

  }, {
    key: '_handleTouches',
    value: function _handleTouches(event) {
      var _this4 = this;

      // Delete the length parameter from touches,
      // so we can loop through it
      delete event.touches.length;
      if (Object.keys(event.touches).length) {
        var touches = Object.keys(event.touches).map(function (key, i) {
          // Set the X & Y for input from the first touch
          if (i === 0) {
            _this4.input.x = event.touches[key].pageX;
            _this4.input.y = event.touches[key].pageY;
          }

          var touch = {};
          // If there is previous touch, store it as a helper
          if (_this4.input.touches && _this4.input.touches[key]) {
            touch.previousX = _this4.input.touches[key].x;
            touch.previousY = _this4.input.touches[key].y;
          }
          // Store the x and y
          touch.x = event.touches[key].pageX;
          touch.y = event.touches[key].pageY;
          // If force is available, add it
          if (event.touches[key].force) touch.force = event.touches[key].force;
          return touch;
        });
        // Update the touches
        this.input.touches = touches;
      } else {
        this._handleRelease();
      }
    }

    /**
     * Deletes the appropriate data from inputs on release
     * @param {object} pointer - An object containing pointer information,
     * in the format of {pageX: x, pageY: y}
     * @private
     */

  }, {
    key: '_handleRelease',
    value: function _handleRelease() {
      delete this.input.x;
      delete this.input.y;
      delete this.input.touches;
    }

    /**
     * Creates the settings GUI
     * @param {object} settings - An object containing key value pairs for each setting
     * @param {boolean} queryable - Enables query string storage of settings
     * @return {object} Context
     */

  }, {
    key: 'clear',


    /**
     * Clears the canvas, and if change is set,
     * fires change
     * @param {boolean} boolean
     */
    value: function clear() {
      if (this._type === Sandpit.CANVAS) {
        this._context.clearRect(0, 0, this.width, this.height);
      } else if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
        this._context.clearColor(0, 0, 0, 0);
        this._context.clear(this._context.COLOR_BUFFER_BIT | this._context.DEPTH_BUFFER_BIT);
      }
      if (this.change) this.change();
    }

    /**
     * Grab the current path from the url
     * @private
     */

  }, {
    key: '_getPathFromUrl',
    value: function _getPathFromUrl() {
      return window.location.toString().split(/[?#]/)[0];
    }

    /**
     * Clear the query string
     */

  }, {
    key: 'clearQueryString',
    value: function clearQueryString() {
      window.history.replaceState({}, null, this._getPathFromUrl());
    }

    /**
     * Sets whether to or not to ignore the touch events for
     * multitouch, bypassing pinch to zoom, but meaning no
     * other touch events will work
     * @param {boolean} boolean
     */

  }, {
    key: 'fill',


    /**
     * Fills the canvas with the provided colour
     * @param {string} color - The color to fill with, in string format
     * (for example, '#000', 'rgba(0, 0, 0, 0.5)')
     */
    value: function fill(color$$1) {
      this._fill = color$$1;
      if (this._type === Sandpit.CANVAS) {
        this._context.fillStyle = this._fill;
        this._context.fillRect(0, 0, this.width, this.height);
      } else if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
        // TODO: Use fill to update the clearColor of a 3D canvas
        logger.warn('fill() is currently only supported in 2D');
      }
    }

    /**
     * Returns a promise using fetch
     * https://github.com/github/fetch
     * @param {string} url - The url to fetch
     */

  }, {
    key: 'get',
    value: function get$$1(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
          resolve(response.text());
        }).catch(function (error) {
          logger.info('Get fail', error);
          reject();
        });
      });
    }

    /**
     * Returns a random number generator based on a seed
     * @param {string} seed - The seed with which to create the random number
     * @returns {function} A function that returns a random number
     */

  }, {
    key: 'random',
    value: function random() {
      var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '123456';

      return seedrandom$2(seed);
    }

    /**
     * Resizes the canvas to the window width and height
     */

  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas() {
      if (this._type === Sandpit.CANVAS && window.devicePixelRatio !== 1 && this._retina) {
        this._handleRetina();
      } else {
        this._canvas.width = this._canvas.clientWidth;
        this._canvas.height = this._canvas.clientHeight;
      }
      if (this._type === Sandpit.WEBGL || this._type === Sandpit.EXPERIMENTAL_WEBGL) {
        this._context.viewport(0, 0, this._context.drawingBufferWidth, this._context.drawingBufferHeight);
      }
      if (this.change) this.change();
    }

    /**
     * Handle the stats object
     * @param {object} stats - a Stats.js object, which can be imported
     * from Sandpit with `import { Stats } from 'sandpit'`
     */

  }, {
    key: 'setupStats',
    value: function setupStats() {
      if (!this.stats) {
        this.stats = new stats_min();
        document.querySelector('body').appendChild(this.stats.dom);
      }
    }

    /**
     * Sets up resizing and input events and starts the loop
     */

  }, {
    key: 'start',
    value: function start() {
      // Sets up the events
      this._setupEvents();
      // Sets up setup
      if (this.setup) this.setup();
      // Loop!
      if (!this.loop) logger.warn('Looks like you need to define a loop');
      this._setupLoop();
    }

    /**
     * Stops the loop and removes event listeners
     */

  }, {
    key: 'stop',
    value: function stop() {
      var _this5 = this;

      // Stop the animation frame loop
      window.cancelAnimationFrame(this._animationFrame);
      // Delete element, if initiated
      if (this.canvas) {
        this.canvas.outerHTML = '';
        delete this.canvas;
      }
      if (this.stats) {
        document.querySelector('body').removeChild(this.stats.dom);
        delete this.stats;
      }
      // Remove Gui, if initiated
      if (this._gui) {
        this._gui.domElement.removeEventListener('touchmove', this._preventDefault);
        this._gui.destroy();
      }
      // Remove all event listeners
      Object.keys(this._events).forEach(function (event) {
        if (_this5._events[event].disable) {
          _this5._events[event].disable.removeEventListener(event, _this5._preventDefault);
        }
        _this5._events[event].context.removeEventListener(event, _this5._events[event].event.bind(_this5));
      });
    }
  }, {
    key: 'settings',
    set: function set$$1(settings) {
      // Sets up settings
      if (settings && Object.keys(settings).length) {
        this.defaults = settings;
        this._setupSettings();
      }
    }

    /**
     * Returns the settings object
     * @return {object} settings
     */
    ,
    get: function get$$1() {
      return this._settings;
    }

    /**
     * Defines whether or not to return debugger messages from Sandpit
     * @param {boolean} boolean
     * @return {object} Context
     */

  }, {
    key: 'debug',
    set: function set$$1(boolean) {
      logger.active = boolean;
    }

    /**
     * Checks if debugger is active
     * @return {boolean} active
     */
    ,
    get: function get$$1() {
      return logger.active;
    }

    /**
     * Sets whether the canvas autoclears after each render
     * @param {boolean} boolean
     */

  }, {
    key: 'autoClear',
    set: function set$$1(boolean) {
      this._autoClear = boolean;
    }

    /**
     * Checks if autoclear is on
     * @return {boolean} active
     */
    ,
    get: function get$$1() {
      return this._autoClear;
    }
  }, {
    key: 'focusTouchesOnCanvas',
    set: function set$$1(boolean) {
      this._focusTouchesOnCanvas = boolean;
    }

    /**
     * Checks if touches are focused on the canvas
     * @return {boolean} active
     */
    ,
    get: function get$$1() {
      return this._focusTouchesOnCanvas;
    }

    /**
     * Returns the canvas context
     * @return {object} Context
     */

  }, {
    key: 'context',
    get: function get$$1() {
      return this._context;
    }

    /**
     * Returns the canvas object
     * @return {canvas} Canvas
     */

  }, {
    key: 'canvas',
    get: function get$$1() {
      return this._canvas;
    }

    /**
     * Returns the frame increment
     * @returns {number} Canvas width
     */

  }, {
    key: 'time',
    get: function get$$1() {
      return this._time;
    }

    /**
     * Returns the canvas width
     * @returns {number} Canvas width
     */

  }, {
    key: 'width',
    get: function get$$1() {
      return this._canvas.clientWidth;
    }

    /**
     * Sets the canvas width
     * @param {number} width - The width to make the canvas
     */
    ,
    set: function set$$1(width) {
      this._canvas.width = width;
    }

    /**
     * Returns the canvas height
     * @returns {number} Canvas height
     */

  }, {
    key: 'height',
    get: function get$$1() {
      return this._canvas.clientHeight;
    }

    /**
     * Sets the canvas height
     * @param {number} height - The height to make the canvas
     */
    ,
    set: function set$$1(height) {
      this._canvas.height = height;
    }
  }]);
  return Sandpit;
}();

Sandpit.Color = color;
Sandpit.Is = Is;
Sandpit.Mathematics = Mathematics;
Sandpit.Stats = stats_min;
Sandpit.Vector = victor;

return Sandpit;

})));
