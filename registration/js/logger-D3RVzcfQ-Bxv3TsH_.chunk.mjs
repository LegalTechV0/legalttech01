const appName = "registration";
const appVersion = "2.7.0";
const global = globalThis || void 0 || self;
var define_global_process_env_default = {};
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var emptyObject = Object.freeze({});
var isArray$1 = Array.isArray;
function isUndef(v2) {
  return v2 === void 0 || v2 === null;
}
function isDef(v2) {
  return v2 !== void 0 && v2 !== null;
}
function isTrue(v2) {
  return v2 === true;
}
function isFalse(v2) {
  return v2 === false;
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || // $flow-disable-line
  typeof value === "symbol" || typeof value === "boolean";
}
function isFunction$1(value) {
  return typeof value === "function";
}
function isObject$1(obj) {
  return obj !== null && typeof obj === "object";
}
var _toString = Object.prototype.toString;
function isPlainObject$1(obj) {
  return _toString.call(obj) === "[object Object]";
}
function isRegExp$1(v2) {
  return _toString.call(v2) === "[object RegExp]";
}
function isValidArrayIndex(val) {
  var n2 = parseFloat(String(val));
  return n2 >= 0 && Math.floor(n2) === n2 && isFinite(val);
}
function isPromise(val) {
  return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
}
function toString$1(val) {
  return val == null ? "" : Array.isArray(val) || isPlainObject$1(val) && val.toString === _toString ? JSON.stringify(val, replacer, 2) : String(val);
}
function replacer(_key, val) {
  if (val && val.__v_isRef) {
    return val.value;
  }
  return val;
}
function toNumber(val) {
  var n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
}
function makeMap(str, expectsLowerCase) {
  var map = /* @__PURE__ */ Object.create(null);
  var list = str.split(",");
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function(val) {
    return map[val.toLowerCase()];
  } : function(val) {
    return map[val];
  };
}
makeMap("slot,component", true);
var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
function remove$2(arr, item) {
  var len = arr.length;
  if (len) {
    if (item === arr[len - 1]) {
      arr.length = len - 1;
      return;
    }
    var index2 = arr.indexOf(item);
    if (index2 > -1) {
      return arr.splice(index2, 1);
    }
  }
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty$1.call(obj, key);
}
function cached(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var camelizeRE = /-(\w)/g;
var camelize = cached(function(str) {
  return str.replace(camelizeRE, function(_2, c) {
    return c ? c.toUpperCase() : "";
  });
});
var capitalize = cached(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }
  boundFn._length = fn.length;
  return boundFn;
}
function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}
var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
function toArray$1(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}
function extend$1(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend$1(res, arr[i]);
    }
  }
  return res;
}
function noop$2(a, b, c) {
}
var no = function(a, b, c) {
  return false;
};
var identity = function(_2) {
  return _2;
};
function looseEqual(a, b) {
  if (a === b)
    return true;
  var isObjectA = isObject$1(a);
  var isObjectB = isObject$1(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function(e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function(key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val))
      return i;
  }
  return -1;
}
function once(fn) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}
function hasChanged(x, y) {
  if (x === y) {
    return x === 0 && 1 / x !== 1 / y;
  } else {
    return x === x || y === y;
  }
}
var SSR_ATTR = "data-server-rendered";
var ASSET_TYPES = ["component", "directive", "filter"];
var LIFECYCLE_HOOKS = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
  "renderTracked",
  "renderTriggered"
];
var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: false,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: false,
  /**
   * Whether to enable devtools
   */
  devtools: false,
  /**
   * Whether to record perf
   */
  performance: false,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop$2,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function isReserved(str) {
  var c = (str + "").charCodeAt(0);
  return c === 36 || c === 95;
}
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
var bailRE = new RegExp("[^".concat(unicodeRegExp.source, ".$_\\d]"));
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split(".");
  return function(obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj)
        return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}
var hasProto = "__proto__" in {};
var inBrowser = typeof window !== "undefined";
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
var isEdge = UA && UA.indexOf("edge/") > 0;
UA && UA.indexOf("android") > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);
var nativeWatch = {}.watch;
var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, "passive", {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test-passive", null, opts);
  } catch (e) {
  }
}
var _isServer;
var isServerRendering = function() {
  if (_isServer === void 0) {
    if (!inBrowser && typeof global !== "undefined") {
      _isServer = global["process"] && define_global_process_env_default.VUE_ENV === "server";
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function isNative(Ctor) {
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
var _Set;
if (typeof Set !== "undefined" && isNative(Set)) {
  _Set = Set;
} else {
  _Set = /** @class */
  function() {
    function Set2() {
      this.set = /* @__PURE__ */ Object.create(null);
    }
    Set2.prototype.has = function(key) {
      return this.set[key] === true;
    };
    Set2.prototype.add = function(key) {
      this.set[key] = true;
    };
    Set2.prototype.clear = function() {
      this.set = /* @__PURE__ */ Object.create(null);
    };
    return Set2;
  }();
}
var currentInstance = null;
function getCurrentInstance() {
  return currentInstance && { proxy: currentInstance };
}
function setCurrentInstance(vm) {
  if (vm === void 0) {
    vm = null;
  }
  if (!vm)
    currentInstance && currentInstance._scope.off();
  currentInstance = vm;
  vm && vm._scope.on();
}
var VNode = (
  /** @class */
  function() {
    function VNode2(tag, data, children, text2, elm, context, componentOptions, asyncFactory) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text2;
      this.elm = elm;
      this.ns = void 0;
      this.context = context;
      this.fnContext = void 0;
      this.fnOptions = void 0;
      this.fnScopeId = void 0;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = void 0;
      this.parent = void 0;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = void 0;
      this.isAsyncPlaceholder = false;
    }
    Object.defineProperty(VNode2.prototype, "child", {
      // DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      get: function() {
        return this.componentInstance;
      },
      enumerable: false,
      configurable: true
    });
    return VNode2;
  }()
);
var createEmptyVNode = function(text2) {
  if (text2 === void 0) {
    text2 = "";
  }
  var node = new VNode();
  node.text = text2;
  node.isComment = true;
  return node;
};
function createTextVNode(val) {
  return new VNode(void 0, void 0, void 0, String(val));
}
function cloneVNode(vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var uid$2 = 0;
var pendingCleanupDeps = [];
var cleanupDeps = function() {
  for (var i = 0; i < pendingCleanupDeps.length; i++) {
    var dep = pendingCleanupDeps[i];
    dep.subs = dep.subs.filter(function(s) {
      return s;
    });
    dep._pending = false;
  }
  pendingCleanupDeps.length = 0;
};
var Dep = (
  /** @class */
  function() {
    function Dep2() {
      this._pending = false;
      this.id = uid$2++;
      this.subs = [];
    }
    Dep2.prototype.addSub = function(sub) {
      this.subs.push(sub);
    };
    Dep2.prototype.removeSub = function(sub) {
      this.subs[this.subs.indexOf(sub)] = null;
      if (!this._pending) {
        this._pending = true;
        pendingCleanupDeps.push(this);
      }
    };
    Dep2.prototype.depend = function(info) {
      if (Dep2.target) {
        Dep2.target.addDep(this);
      }
    };
    Dep2.prototype.notify = function(info) {
      var subs = this.subs.filter(function(s) {
        return s;
      });
      for (var i = 0, l = subs.length; i < l; i++) {
        var sub = subs[i];
        sub.update();
      }
    };
    return Dep2;
  }()
);
Dep.target = null;
var targetStack = [];
function pushTarget(target2) {
  targetStack.push(target2);
  Dep.target = target2;
}
function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
methodsToPatch.forEach(function(method) {
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted)
      ob.observeArray(inserted);
    {
      ob.dep.notify();
    }
    return result;
  });
});
var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var NO_INITIAL_VALUE = {};
var shouldObserve = true;
function toggleObserving(value) {
  shouldObserve = value;
}
var mockDep = {
  notify: noop$2,
  depend: noop$2,
  addSub: noop$2,
  removeSub: noop$2
};
var Observer = (
  /** @class */
  function() {
    function Observer2(value, shallow, mock) {
      if (shallow === void 0) {
        shallow = false;
      }
      if (mock === void 0) {
        mock = false;
      }
      this.value = value;
      this.shallow = shallow;
      this.mock = mock;
      this.dep = mock ? mockDep : new Dep();
      this.vmCount = 0;
      def(value, "__ob__", this);
      if (isArray$1(value)) {
        if (!mock) {
          if (hasProto) {
            value.__proto__ = arrayMethods;
          } else {
            for (var i = 0, l = arrayKeys.length; i < l; i++) {
              var key = arrayKeys[i];
              def(value, key, arrayMethods[key]);
            }
          }
        }
        if (!shallow) {
          this.observeArray(value);
        }
      } else {
        var keys = Object.keys(value);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          defineReactive(value, key, NO_INITIAL_VALUE, void 0, shallow, mock);
        }
      }
    }
    Observer2.prototype.observeArray = function(value) {
      for (var i = 0, l = value.length; i < l; i++) {
        observe(value[i], false, this.mock);
      }
    };
    return Observer2;
  }()
);
function observe(value, shallow, ssrMockReactivity) {
  if (value && hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    return value.__ob__;
  }
  if (shouldObserve && (ssrMockReactivity || !isServerRendering()) && (isArray$1(value) || isPlainObject$1(value)) && Object.isExtensible(value) && !value.__v_skip && !isRef(value) && !(value instanceof VNode)) {
    return new Observer(value, shallow, ssrMockReactivity);
  }
}
function defineReactive(obj, key, val, customSetter, shallow, mock, observeEvenIfShallow) {
  if (observeEvenIfShallow === void 0) {
    observeEvenIfShallow = false;
  }
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && (val === NO_INITIAL_VALUE || arguments.length === 2)) {
    val = obj[key];
  }
  var childOb = shallow ? val && val.__ob__ : observe(val, false, mock);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        {
          dep.depend();
        }
        if (childOb) {
          childOb.dep.depend();
          if (isArray$1(value)) {
            dependArray(value);
          }
        }
      }
      return isRef(value) && !shallow ? value.value : value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (!hasChanged(value, newVal)) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else if (getter) {
        return;
      } else if (!shallow && isRef(value) && !isRef(newVal)) {
        value.value = newVal;
        return;
      } else {
        val = newVal;
      }
      childOb = shallow ? newVal && newVal.__ob__ : observe(newVal, false, mock);
      {
        dep.notify();
      }
    }
  });
  return dep;
}
function set(target2, key, val) {
  if (isReadonly(target2)) {
    return;
  }
  var ob = target2.__ob__;
  if (isArray$1(target2) && isValidArrayIndex(key)) {
    target2.length = Math.max(target2.length, key);
    target2.splice(key, 1, val);
    if (ob && !ob.shallow && ob.mock) {
      observe(val, false, true);
    }
    return val;
  }
  if (key in target2 && !(key in Object.prototype)) {
    target2[key] = val;
    return val;
  }
  if (target2._isVue || ob && ob.vmCount) {
    return val;
  }
  if (!ob) {
    target2[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val, void 0, ob.shallow, ob.mock);
  {
    ob.dep.notify();
  }
  return val;
}
function del(target2, key) {
  if (isArray$1(target2) && isValidArrayIndex(key)) {
    target2.splice(key, 1);
    return;
  }
  var ob = target2.__ob__;
  if (target2._isVue || ob && ob.vmCount) {
    return;
  }
  if (isReadonly(target2)) {
    return;
  }
  if (!hasOwn(target2, key)) {
    return;
  }
  delete target2[key];
  if (!ob) {
    return;
  }
  {
    ob.dep.notify();
  }
}
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    if (e && e.__ob__) {
      e.__ob__.dep.depend();
    }
    if (isArray$1(e)) {
      dependArray(e);
    }
  }
}
function reactive(target2) {
  makeReactive(target2, false);
  return target2;
}
function shallowReactive(target2) {
  makeReactive(target2, true);
  def(target2, "__v_isShallow", true);
  return target2;
}
function makeReactive(target2, shallow) {
  if (!isReadonly(target2)) {
    observe(
      target2,
      shallow,
      isServerRendering()
      /* ssr mock reactivity */
    );
  }
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value[
      "__v_raw"
      /* ReactiveFlags.RAW */
    ]);
  }
  return !!(value && value.__ob__);
}
function isShallow(value) {
  return !!(value && value.__v_isShallow);
}
function isReadonly(value) {
  return !!(value && value.__v_isReadonly);
}
var RefFlag = "__v_isRef";
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref$1(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  var ref2 = {};
  def(ref2, RefFlag, true);
  def(ref2, "__v_isShallow", shallow);
  def(ref2, "dep", defineReactive(ref2, "value", rawValue, null, shallow, isServerRendering()));
  return ref2;
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function proxyWithRefUnwrap(target2, source, key) {
  Object.defineProperty(target2, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      var val = source[key];
      if (isRef(val)) {
        return val.value;
      } else {
        var ob = val && val.__ob__;
        if (ob)
          ob.dep.depend();
        return val;
      }
    },
    set: function(value) {
      var oldValue = source[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
      } else {
        source[key] = value;
      }
    }
  });
}
function customRef(factory) {
  var dep = new Dep();
  var _a2 = factory(function() {
    {
      dep.depend();
    }
  }, function() {
    {
      dep.notify();
    }
  }), get = _a2.get, set2 = _a2.set;
  var ref2 = {
    get value() {
      return get();
    },
    set value(newVal) {
      set2(newVal);
    }
  };
  def(ref2, RefFlag, true);
  return ref2;
}
function toRef(object, key, defaultValue) {
  var val = object[key];
  if (isRef(val)) {
    return val;
  }
  var ref2 = {
    get value() {
      var val2 = object[key];
      return val2 === void 0 ? defaultValue : val2;
    },
    set value(newVal) {
      object[key] = newVal;
    }
  };
  def(ref2, RefFlag, true);
  return ref2;
}
var rawToReadonlyFlag = "__v_rawToReadonly";
function readonly(target2) {
  return createReadonly(target2);
}
function createReadonly(target2, shallow) {
  if (!isPlainObject$1(target2)) {
    return target2;
  }
  if (isReadonly(target2)) {
    return target2;
  }
  var existingFlag = rawToReadonlyFlag;
  var existingProxy = target2[existingFlag];
  if (existingProxy) {
    return existingProxy;
  }
  var proxy2 = Object.create(Object.getPrototypeOf(target2));
  def(target2, existingFlag, proxy2);
  def(proxy2, "__v_isReadonly", true);
  def(proxy2, "__v_raw", target2);
  if (isRef(target2)) {
    def(proxy2, RefFlag, true);
  }
  if (isShallow(target2)) {
    def(proxy2, "__v_isShallow", true);
  }
  var keys = Object.keys(target2);
  for (var i = 0; i < keys.length; i++) {
    defineReadonlyProperty(proxy2, target2, keys[i]);
  }
  return proxy2;
}
function defineReadonlyProperty(proxy2, target2, key, shallow) {
  Object.defineProperty(proxy2, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      var val = target2[key];
      return !isPlainObject$1(val) ? val : readonly(val);
    },
    set: function() {
    }
  });
}
function computed(getterOrOptions, debugOptions) {
  var getter;
  var setter;
  var onlyGetter = isFunction$1(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = noop$2;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  var watcher = isServerRendering() ? null : new Watcher(currentInstance, getter, noop$2, { lazy: true });
  var ref2 = {
    // some libs rely on the presence effect for checking computed refs
    // from normal refs, but the implementation doesn't matter
    effect: watcher,
    get value() {
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      } else {
        return getter();
      }
    },
    set value(newVal) {
      setter(newVal);
    }
  };
  def(ref2, RefFlag, true);
  def(ref2, "__v_isReadonly", onlyGetter);
  return ref2;
}
var WATCHER = "watcher";
var WATCHER_CB = "".concat(WATCHER, " callback");
var WATCHER_GETTER = "".concat(WATCHER, " getter");
var WATCHER_CLEANUP = "".concat(WATCHER, " cleanup");
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
var INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, _a2) {
  var _b = _a2 === void 0 ? emptyObject : _a2, immediate = _b.immediate, deep = _b.deep, _c = _b.flush, flush = _c === void 0 ? "pre" : _c;
  _b.onTrack;
  _b.onTrigger;
  var instance = currentInstance;
  var call = function(fn, type, args) {
    if (args === void 0) {
      args = null;
    }
    var res = invokeWithErrorHandling(fn, null, args, instance, type);
    if (deep && res && res.__ob__)
      res.__ob__.dep.depend();
    return res;
  };
  var getter;
  var forceTrigger = false;
  var isMultiSource = false;
  if (isRef(source)) {
    getter = function() {
      return source.value;
    };
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = function() {
      source.__ob__.dep.depend();
      return source;
    };
    deep = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some(function(s) {
      return isReactive(s) || isShallow(s);
    });
    getter = function() {
      return source.map(function(s) {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          s.__ob__.dep.depend();
          return traverse(s);
        } else if (isFunction$1(s)) {
          return call(s, WATCHER_GETTER);
        } else ;
      });
    };
  } else if (isFunction$1(source)) {
    if (cb) {
      getter = function() {
        return call(source, WATCHER_GETTER);
      };
    } else {
      getter = function() {
        if (instance && instance._isDestroyed) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return call(source, WATCHER, [onCleanup]);
      };
    }
  } else {
    getter = noop$2;
  }
  if (cb && deep) {
    var baseGetter_1 = getter;
    getter = function() {
      return traverse(baseGetter_1());
    };
  }
  var cleanup;
  var onCleanup = function(fn) {
    cleanup = watcher.onStop = function() {
      call(fn, WATCHER_CLEANUP);
    };
  };
  if (isServerRendering()) {
    onCleanup = noop$2;
    if (!cb) {
      getter();
    } else if (immediate) {
      call(cb, WATCHER_CB, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return noop$2;
  }
  var watcher = new Watcher(currentInstance, getter, noop$2, {
    lazy: true
  });
  watcher.noRecurse = !cb;
  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  watcher.run = function() {
    if (!watcher.active) {
      return;
    }
    if (cb) {
      var newValue = watcher.get();
      if (deep || forceTrigger || (isMultiSource ? newValue.some(function(v2, i) {
        return hasChanged(v2, oldValue[i]);
      }) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        call(cb, WATCHER_CB, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      watcher.get();
    }
  };
  if (flush === "sync") {
    watcher.update = watcher.run;
  } else if (flush === "post") {
    watcher.post = true;
    watcher.update = function() {
      return queueWatcher(watcher);
    };
  } else {
    watcher.update = function() {
      if (instance && instance === currentInstance && !instance._isMounted) {
        var buffer2 = instance._preWatchers || (instance._preWatchers = []);
        if (buffer2.indexOf(watcher) < 0)
          buffer2.push(watcher);
      } else {
        queueWatcher(watcher);
      }
    };
  }
  if (cb) {
    if (immediate) {
      watcher.run();
    } else {
      oldValue = watcher.get();
    }
  } else if (flush === "post" && instance) {
    instance.$once("hook:mounted", function() {
      return watcher.get();
    });
  } else {
    watcher.get();
  }
  return function() {
    watcher.teardown();
  };
}
var activeEffectScope;
var EffectScope = (
  /** @class */
  function() {
    function EffectScope2(detached) {
      if (detached === void 0) {
        detached = false;
      }
      this.detached = detached;
      this.active = true;
      this.effects = [];
      this.cleanups = [];
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      }
    }
    EffectScope2.prototype.run = function(fn) {
      if (this.active) {
        var currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      }
    };
    EffectScope2.prototype.on = function() {
      activeEffectScope = this;
    };
    EffectScope2.prototype.off = function() {
      activeEffectScope = this.parent;
    };
    EffectScope2.prototype.stop = function(fromParent) {
      if (this.active) {
        var i = void 0, l = void 0;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].teardown();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        if (!this.detached && this.parent && !fromParent) {
          var last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
        this.active = false;
      }
    };
    return EffectScope2;
  }()
);
function recordEffectScope(effect, scope) {
  if (scope === void 0) {
    scope = activeEffectScope;
  }
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
function resolveProvided(vm) {
  var existing = vm._provided;
  var parentProvides = vm.$parent && vm.$parent._provided;
  if (parentProvides === existing) {
    return vm._provided = Object.create(parentProvides);
  } else {
    return existing;
  }
}
var normalizeEvent = cached(function(name) {
  var passive = name.charAt(0) === "&";
  name = passive ? name.slice(1) : name;
  var once2 = name.charAt(0) === "~";
  name = once2 ? name.slice(1) : name;
  var capture = name.charAt(0) === "!";
  name = capture ? name.slice(1) : name;
  return {
    name,
    once: once2,
    capture,
    passive
  };
});
function createFnInvoker(fns, vm) {
  function invoker() {
    var fns2 = invoker.fns;
    if (isArray$1(fns2)) {
      var cloned = fns2.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments, vm, "v-on handler");
      }
    } else {
      return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
    }
  }
  invoker.fns = fns;
  return invoker;
}
function updateListeners(on, oldOn, add2, remove2, createOnceHandler2, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) ;
    else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler2(event.name, cur, event.capture);
      }
      add2(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove2(event.name, oldOn[name], event.capture);
    }
  }
}
function mergeVNodeHook(def2, hookKey, hook) {
  if (def2 instanceof VNode) {
    def2 = def2.data.hook || (def2.data.hook = {});
  }
  var invoker;
  var oldHook = def2[hookKey];
  function wrappedHook() {
    hook.apply(this, arguments);
    remove$2(invoker.fns, wrappedHook);
  }
  if (isUndef(oldHook)) {
    invoker = createFnInvoker([wrappedHook]);
  } else {
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }
  invoker.merged = true;
  def2[hookKey] = invoker;
}
function extractPropsFromVNodeData(data, Ctor, tag) {
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs2 = data.attrs, props2 = data.props;
  if (isDef(attrs2) || isDef(props2)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
    }
  }
  return res;
}
function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (isArray$1(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : isArray$1(children) ? normalizeArrayChildren(children) : void 0;
}
function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === "boolean")
      continue;
    lastIndex = res.length - 1;
    last = res[lastIndex];
    if (isArray$1(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, "".concat(nestedIndex || "", "_").concat(i));
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== "") {
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist".concat(nestedIndex, "_").concat(i, "__");
        }
        res.push(c);
      }
    }
  }
  return res;
}
function renderList(val, render7) {
  var ret = null, i, l, keys, key;
  if (isArray$1(val) || typeof val === "string") {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render7(val[i], i);
    }
  } else if (typeof val === "number") {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render7(i + 1, i);
    }
  } else if (isObject$1(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render7(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render7(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  ret._isVList = true;
  return ret;
}
function renderSlot(name, fallbackRender, props2, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    props2 = props2 || {};
    if (bindObject) {
      props2 = extend$1(extend$1({}, bindObject), props2);
    }
    nodes = scopedSlotFn(props2) || (isFunction$1(fallbackRender) ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (isFunction$1(fallbackRender) ? fallbackRender() : fallbackRender);
  }
  var target2 = props2 && props2.slot;
  if (target2) {
    return this.$createElement("template", { slot: target2 }, nodes);
  } else {
    return nodes;
  }
}
function resolveFilter(id) {
  return resolveAsset(this.$options, "filters", id) || identity;
}
function isKeyNotMatch(expect, actual) {
  if (isArray$1(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
  return eventKeyCode === void 0;
}
function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject$1(value)) ;
    else {
      if (isArray$1(value)) {
        value = toObject(value);
      }
      var hash = void 0;
      var _loop_1 = function(key2) {
        if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key2);
        var hyphenatedKey = hyphenate(key2);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key2] = value[key2];
          if (isSync) {
            var on = data.on || (data.on = {});
            on["update:".concat(key2)] = function($event) {
              value[key2] = $event;
            };
          }
        }
      };
      for (var key in value) {
        _loop_1(key);
      }
    }
  }
  return data;
}
function renderStatic(index2, isInFor) {
  var cached2 = this._staticTrees || (this._staticTrees = []);
  var tree = cached2[index2];
  if (tree && !isInFor) {
    return tree;
  }
  tree = cached2[index2] = this.$options.staticRenderFns[index2].call(
    this._renderProxy,
    this._c,
    this
    // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__".concat(index2), false);
  return tree;
}
function markOnce(tree, index2, key) {
  markStatic(tree, "__once__".concat(index2).concat(key ? "_".concat(key) : ""), true);
  return tree;
}
function markStatic(tree, key, isOnce) {
  if (isArray$1(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== "string") {
        markStaticNode(tree[i], "".concat(key, "_").concat(i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}
function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject$1(value)) ;
    else {
      var on = data.on = data.on ? extend$1({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}
function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (isArray$1(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    res.$key = contentHashKey;
  }
  return res;
}
function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === "string" && key) {
      baseObj[values[i]] = values[i + 1];
    }
  }
  return baseObj;
}
function prependModifier(value, symbol) {
  return typeof value === "string" ? symbol + value : value;
}
function installRenderHelpers(target2) {
  target2._o = markOnce;
  target2._n = toNumber;
  target2._s = toString$1;
  target2._l = renderList;
  target2._t = renderSlot;
  target2._q = looseEqual;
  target2._i = looseIndexOf;
  target2._m = renderStatic;
  target2._f = resolveFilter;
  target2._k = checkKeyCodes;
  target2._b = bindObjectProps;
  target2._v = createTextVNode;
  target2._e = createEmptyVNode;
  target2._u = resolveScopedSlots;
  target2._g = bindObjectListeners;
  target2._d = bindDynamicKeys;
  target2._p = prependModifier;
}
function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name_1 = data.slot;
      var slot = slots[name_1] || (slots[name_1] = []);
      if (child.tag === "template") {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  for (var name_2 in slots) {
    if (slots[name_2].every(isWhitespace)) {
      delete slots[name_2];
    }
  }
  return slots;
}
function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === " ";
}
function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
function normalizeScopedSlots(ownerVm, scopedSlots, normalSlots, prevScopedSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = scopedSlots ? !!scopedSlots.$stable : !hasNormalSlots;
  var key = scopedSlots && scopedSlots.$key;
  if (!scopedSlots) {
    res = {};
  } else if (scopedSlots._normalized) {
    return scopedSlots._normalized;
  } else if (isStable && prevScopedSlots && prevScopedSlots !== emptyObject && key === prevScopedSlots.$key && !hasNormalSlots && !prevScopedSlots.$hasNormal) {
    return prevScopedSlots;
  } else {
    res = {};
    for (var key_1 in scopedSlots) {
      if (scopedSlots[key_1] && key_1[0] !== "$") {
        res[key_1] = normalizeScopedSlot(ownerVm, normalSlots, key_1, scopedSlots[key_1]);
      }
    }
  }
  for (var key_2 in normalSlots) {
    if (!(key_2 in res)) {
      res[key_2] = proxyNormalSlot(normalSlots, key_2);
    }
  }
  if (scopedSlots && Object.isExtensible(scopedSlots)) {
    scopedSlots._normalized = res;
  }
  def(res, "$stable", isStable);
  def(res, "$key", key);
  def(res, "$hasNormal", hasNormalSlots);
  return res;
}
function normalizeScopedSlot(vm, normalSlots, key, fn) {
  var normalized = function() {
    var cur = currentInstance;
    setCurrentInstance(vm);
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === "object" && !isArray$1(res) ? [res] : normalizeChildren(res);
    var vnode = res && res[0];
    setCurrentInstance(cur);
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
  };
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized;
}
function proxyNormalSlot(slots, key) {
  return function() {
    return slots[key];
  };
}
function initSetup(vm) {
  var options = vm.$options;
  var setup = options.setup;
  if (setup) {
    var ctx = vm._setupContext = createSetupContext(vm);
    setCurrentInstance(vm);
    pushTarget();
    var setupResult = invokeWithErrorHandling(setup, null, [vm._props || shallowReactive({}), ctx], vm, "setup");
    popTarget();
    setCurrentInstance();
    if (isFunction$1(setupResult)) {
      options.render = setupResult;
    } else if (isObject$1(setupResult)) {
      vm._setupState = setupResult;
      if (!setupResult.__sfc) {
        for (var key in setupResult) {
          if (!isReserved(key)) {
            proxyWithRefUnwrap(vm, setupResult, key);
          }
        }
      } else {
        var proxy2 = vm._setupProxy = {};
        for (var key in setupResult) {
          if (key !== "__sfc") {
            proxyWithRefUnwrap(proxy2, setupResult, key);
          }
        }
      }
    } else ;
  }
}
function createSetupContext(vm) {
  return {
    get attrs() {
      if (!vm._attrsProxy) {
        var proxy2 = vm._attrsProxy = {};
        def(proxy2, "_v_attr_proxy", true);
        syncSetupProxy(proxy2, vm.$attrs, emptyObject, vm, "$attrs");
      }
      return vm._attrsProxy;
    },
    get listeners() {
      if (!vm._listenersProxy) {
        var proxy2 = vm._listenersProxy = {};
        syncSetupProxy(proxy2, vm.$listeners, emptyObject, vm, "$listeners");
      }
      return vm._listenersProxy;
    },
    get slots() {
      return initSlotsProxy(vm);
    },
    emit: bind$1(vm.$emit, vm),
    expose: function(exposed) {
      if (exposed) {
        Object.keys(exposed).forEach(function(key) {
          return proxyWithRefUnwrap(vm, exposed, key);
        });
      }
    }
  };
}
function syncSetupProxy(to, from, prev, instance, type) {
  var changed = false;
  for (var key in from) {
    if (!(key in to)) {
      changed = true;
      defineProxyAttr(to, key, instance, type);
    } else if (from[key] !== prev[key]) {
      changed = true;
    }
  }
  for (var key in to) {
    if (!(key in from)) {
      changed = true;
      delete to[key];
    }
  }
  return changed;
}
function defineProxyAttr(proxy2, key, instance, type) {
  Object.defineProperty(proxy2, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      return instance[type][key];
    }
  });
}
function initSlotsProxy(vm) {
  if (!vm._slotsProxy) {
    syncSetupSlots(vm._slotsProxy = {}, vm.$scopedSlots);
  }
  return vm._slotsProxy;
}
function syncSetupSlots(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  for (var key in to) {
    if (!(key in from)) {
      delete to[key];
    }
  }
}
function initRender(vm) {
  vm._vnode = null;
  vm._staticTrees = null;
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = parentVnode ? normalizeScopedSlots(vm.$parent, parentVnode.data.scopedSlots, vm.$slots) : emptyObject;
  vm._c = function(a, b, c, d) {
    return createElement$1(vm, a, b, c, d, false);
  };
  vm.$createElement = function(a, b, c, d) {
    return createElement$1(vm, a, b, c, d, true);
  };
  var parentData = parentVnode && parentVnode.data;
  {
    defineReactive(vm, "$attrs", parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, "$listeners", options._parentListeners || emptyObject, null, true);
  }
}
var currentRenderingInstance = null;
function renderMixin(Vue2) {
  installRenderHelpers(Vue2.prototype);
  Vue2.prototype.$nextTick = function(fn) {
    return nextTick(fn, this);
  };
  Vue2.prototype._render = function() {
    var vm = this;
    var _a2 = vm.$options, render7 = _a2.render, _parentVnode = _a2._parentVnode;
    if (_parentVnode && vm._isMounted) {
      vm.$scopedSlots = normalizeScopedSlots(vm.$parent, _parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      if (vm._slotsProxy) {
        syncSetupSlots(vm._slotsProxy, vm.$scopedSlots);
      }
    }
    vm.$vnode = _parentVnode;
    var prevInst = currentInstance;
    var prevRenderInst = currentRenderingInstance;
    var vnode;
    try {
      setCurrentInstance(vm);
      currentRenderingInstance = vm;
      vnode = render7.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = prevRenderInst;
      setCurrentInstance(prevInst);
    }
    if (isArray$1(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    if (!(vnode instanceof VNode)) {
      vnode = createEmptyVNode();
    }
    vnode.parent = _parentVnode;
    return vnode;
  };
}
function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
    comp = comp.default;
  }
  return isObject$1(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data, context, children, tag };
  return node;
}
function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }
  if (isDef(factory.resolved)) {
    return factory.resolved;
  }
  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    factory.owners.push(owner);
  }
  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }
  if (owner && !isDef(factory.owners)) {
    var owners_1 = factory.owners = [owner];
    var sync_1 = true;
    var timerLoading_1 = null;
    var timerTimeout_1 = null;
    owner.$on("hook:destroyed", function() {
      return remove$2(owners_1, owner);
    });
    var forceRender_1 = function(renderCompleted) {
      for (var i = 0, l = owners_1.length; i < l; i++) {
        owners_1[i].$forceUpdate();
      }
      if (renderCompleted) {
        owners_1.length = 0;
        if (timerLoading_1 !== null) {
          clearTimeout(timerLoading_1);
          timerLoading_1 = null;
        }
        if (timerTimeout_1 !== null) {
          clearTimeout(timerTimeout_1);
          timerTimeout_1 = null;
        }
      }
    };
    var resolve = once(function(res) {
      factory.resolved = ensureCtor(res, baseCtor);
      if (!sync_1) {
        forceRender_1(true);
      } else {
        owners_1.length = 0;
      }
    });
    var reject_1 = once(function(reason) {
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender_1(true);
      }
    });
    var res_1 = factory(resolve, reject_1);
    if (isObject$1(res_1)) {
      if (isPromise(res_1)) {
        if (isUndef(factory.resolved)) {
          res_1.then(resolve, reject_1);
        }
      } else if (isPromise(res_1.component)) {
        res_1.component.then(resolve, reject_1);
        if (isDef(res_1.error)) {
          factory.errorComp = ensureCtor(res_1.error, baseCtor);
        }
        if (isDef(res_1.loading)) {
          factory.loadingComp = ensureCtor(res_1.loading, baseCtor);
          if (res_1.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading_1 = setTimeout(function() {
              timerLoading_1 = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender_1(false);
              }
            }, res_1.delay || 200);
          }
        }
        if (isDef(res_1.timeout)) {
          timerTimeout_1 = setTimeout(function() {
            timerTimeout_1 = null;
            if (isUndef(factory.resolved)) {
              reject_1(null);
            }
          }, res_1.timeout);
        }
      }
    }
    sync_1 = false;
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
function getFirstComponentChild(children) {
  if (isArray$1(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
function createElement$1(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (isArray$1(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = void 0;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}
function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    return createEmptyVNode();
  }
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    return createEmptyVNode();
  }
  if (isArray$1(children) && isFunction$1(children[0])) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === "string") {
    var Ctor = void 0;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      vnode = new VNode(tag, data, children, void 0, void 0, context);
    }
  } else {
    vnode = createComponent(tag, data, context, children);
  }
  if (isArray$1(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns))
      applyNS(vnode, ns);
    if (isDef(data))
      registerDeepBindings(data);
    return vnode;
  } else {
    return createEmptyVNode();
  }
}
function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === "foreignObject") {
    ns = void 0;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
        applyNS(child, ns, force);
      }
    }
  }
}
function registerDeepBindings(data) {
  if (isObject$1(data.style)) {
    traverse(data.style);
  }
  if (isObject$1(data.class)) {
    traverse(data.class);
  }
}
function handleError(err, vm, info) {
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks2 = cur.$options.errorCaptured;
        if (hooks2) {
          for (var i = 0; i < hooks2.length; i++) {
            try {
              var capture = hooks2[i].call(cur, err, vm, info) === false;
              if (capture)
                return;
            } catch (e) {
              globalHandleError(e, cur, "errorCaptured hook");
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}
function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function(e) {
        return handleError(e, vm, info + " (Promise/async)");
      });
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res;
}
function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      if (e !== err) {
        logError(e);
      }
    }
  }
  logError(err);
}
function logError(err, vm, info) {
  if (inBrowser && typeof console !== "undefined") {
    console.error(err);
  } else {
    throw err;
  }
}
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;
function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}
var timerFunc;
if (typeof Promise !== "undefined" && isNative(Promise)) {
  var p_1 = Promise.resolve();
  timerFunc = function() {
    p_1.then(flushCallbacks);
    if (isIOS)
      setTimeout(noop$2);
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var counter_1 = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode_1 = document.createTextNode(String(counter_1));
  observer.observe(textNode_1, {
    characterData: true
  });
  timerFunc = function() {
    counter_1 = (counter_1 + 1) % 2;
    textNode_1.data = String(counter_1);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  timerFunc = function() {
    setImmediate(flushCallbacks);
  };
} else {
  timerFunc = function() {
    setTimeout(flushCallbacks, 0);
  };
}
function nextTick(cb, ctx) {
  var _resolve;
  callbacks.push(function() {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  if (!cb && typeof Promise !== "undefined") {
    return new Promise(function(resolve) {
      _resolve = resolve;
    });
  }
}
function useCssVars(getter) {
  if (!inBrowser && true)
    return;
  var instance = currentInstance;
  if (!instance) {
    return;
  }
  watchPostEffect(function() {
    var el = instance.$el;
    var vars = getter(instance, instance._setupProxy);
    if (el && el.nodeType === 1) {
      var style2 = el.style;
      for (var key in vars) {
        style2.setProperty("--".concat(key), vars[key]);
      }
    }
  });
}
function createLifeCycle(hookName) {
  return function(fn, target2) {
    if (target2 === void 0) {
      target2 = currentInstance;
    }
    if (!target2) {
      return;
    }
    return injectHook(target2, hookName, fn);
  };
}
function injectHook(instance, hookName, fn) {
  var options = instance.$options;
  options[hookName] = mergeLifecycleHook(options[hookName], fn);
}
var onMounted = createLifeCycle("mounted");
var onUnmounted = createLifeCycle("destroyed");
var version = "2.7.16";
function defineComponent(options) {
  return options;
}
var seenObjects = new _Set();
function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
  return val;
}
function _traverse(val, seen) {
  var i, keys;
  var isA = isArray$1(val);
  if (!isA && !isObject$1(val) || val.__v_skip || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--)
      _traverse(val[i], seen);
  } else if (isRef(val)) {
    _traverse(val.value, seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--)
      _traverse(val[keys[i]], seen);
  }
}
var uid$1 = 0;
var Watcher = (
  /** @class */
  function() {
    function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
      recordEffectScope(
        this,
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        activeEffectScope && !activeEffectScope._vm ? activeEffectScope : vm ? vm._scope : void 0
      );
      if ((this.vm = vm) && isRenderWatcher) {
        vm._watcher = this;
      }
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.before = options.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$1;
      this.active = true;
      this.post = false;
      this.dirty = this.lazy;
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression = "";
      if (isFunction$1(expOrFn)) {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = noop$2;
        }
      }
      this.value = this.lazy ? void 0 : this.get();
    }
    Watcher2.prototype.get = function() {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, 'getter for watcher "'.concat(this.expression, '"'));
        } else {
          throw e;
        }
      } finally {
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value;
    };
    Watcher2.prototype.addDep = function(dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
    Watcher2.prototype.cleanupDeps = function() {
      var i = this.deps.length;
      while (i--) {
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };
    Watcher2.prototype.update = function() {
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };
    Watcher2.prototype.run = function() {
      if (this.active) {
        var value = this.get();
        if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject$1(value) || this.deep) {
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            var info = 'callback for watcher "'.concat(this.expression, '"');
            invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
    Watcher2.prototype.evaluate = function() {
      this.value = this.get();
      this.dirty = false;
    };
    Watcher2.prototype.depend = function() {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    };
    Watcher2.prototype.teardown = function() {
      if (this.vm && !this.vm._isBeingDestroyed) {
        remove$2(this.vm._scope.effects, this);
      }
      if (this.active) {
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
        if (this.onStop) {
          this.onStop();
        }
      }
    };
    return Watcher2;
  }()
);
function initEvents(vm) {
  vm._events = /* @__PURE__ */ Object.create(null);
  vm._hasHookEvent = false;
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}
var target$1;
function add$1(event, fn) {
  target$1.$on(event, fn);
}
function remove$1(event, fn) {
  target$1.$off(event, fn);
}
function createOnceHandler$1(event, fn) {
  var _target = target$1;
  return function onceHandler() {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}
function updateComponentListeners(vm, listeners, oldListeners) {
  target$1 = vm;
  updateListeners(listeners, oldListeners || {}, add$1, remove$1, createOnceHandler$1, vm);
  target$1 = void 0;
}
function eventsMixin(Vue2) {
  var hookRE = /^hook:/;
  Vue2.prototype.$on = function(event, fn) {
    var vm = this;
    if (isArray$1(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };
  Vue2.prototype.$once = function(event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };
  Vue2.prototype.$off = function(event, fn) {
    var vm = this;
    if (!arguments.length) {
      vm._events = /* @__PURE__ */ Object.create(null);
      return vm;
    }
    if (isArray$1(event)) {
      for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
        vm.$off(event[i_1], fn);
      }
      return vm;
    }
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };
  Vue2.prototype.$emit = function(event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray$1(cbs) : cbs;
      var args = toArray$1(arguments, 1);
      var info = 'event handler for "'.concat(event, '"');
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm;
  };
}
var activeInstance = null;
function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function() {
    activeInstance = prevActiveInstance;
  };
}
function initLifecycle(vm) {
  var options = vm.$options;
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }
  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._provided = parent ? parent._provided : /* @__PURE__ */ Object.create(null);
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue2) {
  Vue2.prototype._update = function(vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    if (!prevVnode) {
      vm.$el = vm.__patch__(
        vm.$el,
        vnode,
        hydrating,
        false
        /* removeOnly */
      );
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    var wrapper = vm;
    while (wrapper && wrapper.$vnode && wrapper.$parent && wrapper.$vnode === wrapper.$parent._vnode) {
      wrapper.$parent.$el = wrapper.$el;
      wrapper = wrapper.$parent;
    }
  };
  Vue2.prototype.$forceUpdate = function() {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };
  Vue2.prototype.$destroy = function() {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook$1(vm, "beforeDestroy");
    vm._isBeingDestroyed = true;
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove$2(parent.$children, vm);
    }
    vm._scope.stop();
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    vm._isDestroyed = true;
    vm.__patch__(vm._vnode, null);
    callHook$1(vm, "destroyed");
    vm.$off();
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}
function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
  }
  callHook$1(vm, "beforeMount");
  var updateComponent;
  {
    updateComponent = function() {
      vm._update(vm._render(), hydrating);
    };
  }
  var watcherOptions = {
    before: function() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook$1(vm, "beforeUpdate");
      }
    }
  };
  new Watcher(
    vm,
    updateComponent,
    noop$2,
    watcherOptions,
    true
    /* isRenderWatcher */
  );
  hydrating = false;
  var preWatchers = vm._preWatchers;
  if (preWatchers) {
    for (var i = 0; i < preWatchers.length; i++) {
      preWatchers[i].run();
    }
  }
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook$1(vm, "mounted");
  }
  return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  var prevVNode = vm.$vnode;
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;
  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;
  var attrs2 = parentVnode.data.attrs || emptyObject;
  if (vm._attrsProxy) {
    if (syncSetupProxy(vm._attrsProxy, attrs2, prevVNode.data && prevVNode.data.attrs || emptyObject, vm, "$attrs")) {
      needsForceUpdate = true;
    }
  }
  vm.$attrs = attrs2;
  listeners = listeners || emptyObject;
  var prevListeners = vm.$options._parentListeners;
  if (vm._listenersProxy) {
    syncSetupProxy(vm._listenersProxy, listeners, prevListeners || emptyObject, vm, "$listeners");
  }
  vm.$listeners = vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, prevListeners);
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props2 = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props;
      props2[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    vm.$options.propsData = propsData;
  }
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}
function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive)
      return true;
  }
  return false;
}
function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook$1(vm, "activated");
  }
}
function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook$1(vm, "deactivated");
  }
}
function callHook$1(vm, hook, args, setContext) {
  if (setContext === void 0) {
    setContext = true;
  }
  pushTarget();
  var prevInst = currentInstance;
  var prevScope = getCurrentScope();
  setContext && setCurrentInstance(vm);
  var handlers = vm.$options[hook];
  var info = "".concat(hook, " hook");
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit("hook:" + hook);
  }
  if (setContext) {
    setCurrentInstance(prevInst);
    prevScope && prevScope.on();
  }
  popTarget();
}
var queue$1 = [];
var activatedChildren = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;
function resetSchedulerState() {
  index = queue$1.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}
var currentFlushTimestamp = 0;
var getNow = Date.now;
if (inBrowser && !isIE) {
  var performance_1 = window.performance;
  if (performance_1 && typeof performance_1.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
    getNow = function() {
      return performance_1.now();
    };
  }
}
var sortCompareFn = function(a, b) {
  if (a.post) {
    if (!b.post)
      return 1;
  } else if (b.post) {
    return -1;
  }
  return a.id - b.id;
};
function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;
  queue$1.sort(sortCompareFn);
  for (index = 0; index < queue$1.length; index++) {
    watcher = queue$1[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
  }
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue$1.slice();
  resetSchedulerState();
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);
  cleanupDeps();
  if (devtools && config.devtools) {
    devtools.emit("flush");
  }
}
function callUpdatedHooks(queue2) {
  var i = queue2.length;
  while (i--) {
    var watcher = queue2[i];
    var vm = watcher.vm;
    if (vm && vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook$1(vm, "updated");
    }
  }
}
function queueActivatedComponent(vm) {
  vm._inactive = false;
  activatedChildren.push(vm);
}
function callActivatedHooks(queue2) {
  for (var i = 0; i < queue2.length; i++) {
    queue2[i]._inactive = true;
    activateChildComponent(
      queue2[i],
      true
      /* true */
    );
  }
}
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] != null) {
    return;
  }
  if (watcher === Dep.target && watcher.noRecurse) {
    return;
  }
  has[id] = true;
  if (!flushing) {
    queue$1.push(watcher);
  } else {
    var i = queue$1.length - 1;
    while (i > index && queue$1[i].id > watcher.id) {
      i--;
    }
    queue$1.splice(i + 1, 0, watcher);
  }
  if (!waiting) {
    waiting = true;
    nextTick(flushSchedulerQueue);
  }
}
function initProvide(vm) {
  var provideOption = vm.$options.provide;
  if (provideOption) {
    var provided = isFunction$1(provideOption) ? provideOption.call(vm) : provideOption;
    if (!isObject$1(provided)) {
      return;
    }
    var source = resolveProvided(vm);
    var keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      Object.defineProperty(source, key, Object.getOwnPropertyDescriptor(provided, key));
    }
  }
}
function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function(key) {
      {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}
function resolveInject(inject2, vm) {
  if (inject2) {
    var result = /* @__PURE__ */ Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject2) : Object.keys(inject2);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key === "__ob__")
        continue;
      var provideKey = inject2[key].from;
      if (provideKey in vm._provided) {
        result[key] = vm._provided[provideKey];
      } else if ("default" in inject2[key]) {
        var provideDefault = inject2[key].default;
        result[key] = isFunction$1(provideDefault) ? provideDefault.call(vm) : provideDefault;
      } else ;
    }
    return result;
  }
}
function FunctionalRenderContext(data, props2, children, parent, Ctor) {
  var _this = this;
  var options = Ctor.options;
  var contextVm;
  if (hasOwn(parent, "_uid")) {
    contextVm = Object.create(parent);
    contextVm._original = parent;
  } else {
    contextVm = parent;
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props2;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function() {
    if (!_this.$slots) {
      normalizeScopedSlots(parent, data.scopedSlots, _this.$slots = resolveSlots(children, parent));
    }
    return _this.$slots;
  };
  Object.defineProperty(this, "scopedSlots", {
    enumerable: true,
    get: function() {
      return normalizeScopedSlots(parent, data.scopedSlots, this.slots());
    }
  });
  if (isCompiled) {
    this.$options = options;
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(parent, data.scopedSlots, this.$slots);
  }
  if (options._scopeId) {
    this._c = function(a, b, c, d) {
      var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
      if (vnode && !isArray$1(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = function(a, b, c, d) {
      return createElement$1(contextVm, a, b, c, d, needNormalization);
    };
  }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props2 = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props2[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs))
      mergeProps(props2, data.attrs);
    if (isDef(data.props))
      mergeProps(props2, data.props);
  }
  var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);
  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (isArray$1(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res;
  }
}
function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  var clone2 = cloneVNode(vnode);
  clone2.fnContext = contextVm;
  clone2.fnOptions = options;
  if (data.slot) {
    (clone2.data || (clone2.data = {})).slot = data.slot;
  }
  return clone2;
}
function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
function getComponentName(options) {
  return options.name || options.__name || options._componentTag;
}
var componentVNodeHooks = {
  init: function(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      var mountedNode = vnode;
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : void 0, hydrating);
    }
  },
  prepatch: function(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData,
      // updated props
      options.listeners,
      // updated listeners
      vnode,
      // new parent vnode
      options.children
      // new children
    );
  },
  insert: function(vnode) {
    var context = vnode.context, componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook$1(componentInstance, "mounted");
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(
          componentInstance,
          true
          /* direct */
        );
      }
    }
  },
  destroy: function(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(
          componentInstance,
          true
          /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }
  var baseCtor = context.$options._base;
  if (isObject$1(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }
  if (typeof Ctor !== "function") {
    return;
  }
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === void 0) {
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }
  data = data || {};
  resolveConstructorOptions(Ctor);
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }
  var propsData = extractPropsFromVNodeData(data, Ctor);
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }
  var listeners = data.on;
  data.on = data.nativeOn;
  if (isTrue(Ctor.options.abstract)) {
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }
  installComponentHooks(data);
  var name = getComponentName(Ctor.options) || tag;
  var vnode = new VNode(
    // @ts-expect-error
    "vue-component-".concat(Ctor.cid).concat(name ? "-".concat(name) : ""),
    data,
    void 0,
    void 0,
    void 0,
    context,
    // @ts-expect-error
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  );
  return vnode;
}
function createComponentInstanceForVnode(vnode, parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent
  };
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}
function installComponentHooks(data) {
  var hooks2 = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks2[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks2[key] = existing ? mergeHook(toMerge, existing) : toMerge;
    }
  }
}
function mergeHook(f1, f2) {
  var merged = function(a, b) {
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged;
}
function transformModel(options, data) {
  var prop = options.model && options.model.prop || "value";
  var event = options.model && options.model.event || "input";
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (isArray$1(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
var warn = noop$2;
var strats = config.optionMergeStrategies;
function mergeData(to, from, recursive) {
  if (recursive === void 0) {
    recursive = true;
  }
  if (!from)
    return to;
  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    if (key === "__ob__")
      continue;
    toVal = to[key];
    fromVal = from[key];
    if (!recursive || !hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject$1(toVal) && isPlainObject$1(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    return function mergedDataFn() {
      return mergeData(isFunction$1(childVal) ? childVal.call(this, this) : childVal, isFunction$1(parentVal) ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      var instanceData = isFunction$1(childVal) ? childVal.call(vm, vm) : childVal;
      var defaultData = isFunction$1(parentVal) ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}
strats.data = function(parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== "function") {
      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }
  return mergeDataOrFn(parentVal, childVal, vm);
};
function mergeLifecycleHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : isArray$1(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks2) {
  var res = [];
  for (var i = 0; i < hooks2.length; i++) {
    if (res.indexOf(hooks2[i]) === -1) {
      res.push(hooks2[i]);
    }
  }
  return res;
}
LIFECYCLE_HOOKS.forEach(function(hook) {
  strats[hook] = mergeLifecycleHook;
});
function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    return extend$1(res, childVal);
  } else {
    return res;
  }
}
ASSET_TYPES.forEach(function(type) {
  strats[type + "s"] = mergeAssets;
});
strats.watch = function(parentVal, childVal, vm, key) {
  if (parentVal === nativeWatch)
    parentVal = void 0;
  if (childVal === nativeWatch)
    childVal = void 0;
  if (!childVal)
    return Object.create(parentVal || null);
  if (!parentVal)
    return childVal;
  var ret = {};
  extend$1(ret, parentVal);
  for (var key_1 in childVal) {
    var parent_1 = ret[key_1];
    var child = childVal[key_1];
    if (parent_1 && !isArray$1(parent_1)) {
      parent_1 = [parent_1];
    }
    ret[key_1] = parent_1 ? parent_1.concat(child) : isArray$1(child) ? child : [child];
  }
  return ret;
};
strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
  if (!parentVal)
    return childVal;
  var ret = /* @__PURE__ */ Object.create(null);
  extend$1(ret, parentVal);
  if (childVal)
    extend$1(ret, childVal);
  return ret;
};
strats.provide = function(parentVal, childVal) {
  if (!parentVal)
    return childVal;
  return function() {
    var ret = /* @__PURE__ */ Object.create(null);
    mergeData(ret, isFunction$1(parentVal) ? parentVal.call(this) : parentVal);
    if (childVal) {
      mergeData(
        ret,
        isFunction$1(childVal) ? childVal.call(this) : childVal,
        false
        // non-recursive
      );
    }
    return ret;
  };
};
var defaultStrat = function(parentVal, childVal) {
  return childVal === void 0 ? parentVal : childVal;
};
function normalizeProps(options, vm) {
  var props2 = options.props;
  if (!props2)
    return;
  var res = {};
  var i, val, name;
  if (isArray$1(props2)) {
    i = props2.length;
    while (i--) {
      val = props2[i];
      if (typeof val === "string") {
        name = camelize(val);
        res[name] = { type: null };
      }
    }
  } else if (isPlainObject$1(props2)) {
    for (var key in props2) {
      val = props2[key];
      name = camelize(key);
      res[name] = isPlainObject$1(val) ? val : { type: val };
    }
  } else ;
  options.props = res;
}
function normalizeInject(options, vm) {
  var inject2 = options.inject;
  if (!inject2)
    return;
  var normalized = options.inject = {};
  if (isArray$1(inject2)) {
    for (var i = 0; i < inject2.length; i++) {
      normalized[inject2[i]] = { from: inject2[i] };
    }
  } else if (isPlainObject$1(inject2)) {
    for (var key in inject2) {
      var val = inject2[key];
      normalized[key] = isPlainObject$1(val) ? extend$1({ from: key }, val) : { from: val };
    }
  } else ;
}
function normalizeDirectives$1(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def2 = dirs[key];
      if (isFunction$1(def2)) {
        dirs[key] = { bind: def2, update: def2 };
      }
    }
  }
}
function mergeOptions(parent, child, vm) {
  if (isFunction$1(child)) {
    child = child.options;
  }
  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives$1(child);
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key2) {
    var strat = strats[key2] || defaultStrat;
    options[key2] = strat(parent[key2], child[key2], vm, key2);
  }
  return options;
}
function resolveAsset(options, type, id, warnMissing) {
  if (typeof id !== "string") {
    return;
  }
  var assets = options[type];
  if (hasOwn(assets, id))
    return assets[id];
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId))
    return assets[camelizedId];
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId))
    return assets[PascalCaseId];
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  return res;
}
function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, "default")) {
      value = false;
    } else if (value === "" || value === hyphenate(key)) {
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  if (value === void 0) {
    value = getPropDefaultValue(vm, prop, key);
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  return value;
}
function getPropDefaultValue(vm, prop, key) {
  if (!hasOwn(prop, "default")) {
    return void 0;
  }
  var def2 = prop.default;
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
    return vm._props[key];
  }
  return isFunction$1(def2) && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
}
var functionTypeCheckRE = /^\s*function (\w+)/;
function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (!isArray$1(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop$2,
  set: noop$2
};
function proxy(target2, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target2, key, sharedPropertyDefinition);
}
function initState(vm) {
  var opts = vm.$options;
  if (opts.props)
    initProps$1(vm, opts.props);
  initSetup(vm);
  if (opts.methods)
    initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    var ob = observe(vm._data = {});
    ob && ob.vmCount++;
  }
  if (opts.computed)
    initComputed$1(vm, opts.computed);
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
function initProps$1(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props2 = vm._props = shallowReactive({});
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  if (!isRoot) {
    toggleObserving(false);
  }
  var _loop_1 = function(key2) {
    keys.push(key2);
    var value = validateProp(key2, propsOptions, propsData, vm);
    {
      defineReactive(
        props2,
        key2,
        value,
        void 0,
        true
        /* shallow */
      );
    }
    if (!(key2 in vm)) {
      proxy(vm, "_props", key2);
    }
  };
  for (var key in propsOptions) {
    _loop_1(key);
  }
  toggleObserving(true);
}
function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = isFunction$1(data) ? getData(data, vm) : data || {};
  if (!isPlainObject$1(data)) {
    data = {};
  }
  var keys = Object.keys(data);
  var props2 = vm.$options.props;
  vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (props2 && hasOwn(props2, key)) ;
    else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  var ob = observe(data);
  ob && ob.vmCount++;
}
function getData(data, vm) {
  pushTarget();
  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}
var computedWatcherOptions = { lazy: true };
function initComputed$1(vm, computed2) {
  var watchers = vm._computedWatchers = /* @__PURE__ */ Object.create(null);
  var isSSR = isServerRendering();
  for (var key in computed2) {
    var userDef = computed2[key];
    var getter = isFunction$1(userDef) ? userDef : userDef.get;
    if (!isSSR) {
      watchers[key] = new Watcher(vm, getter || noop$2, noop$2, computedWatcherOptions);
    }
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}
function defineComputed(target2, key, userDef) {
  var shouldCache = !isServerRendering();
  if (isFunction$1(userDef)) {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop$2;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop$2;
    sharedPropertyDefinition.set = userDef.set || noop$2;
  }
  Object.defineProperty(target2, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}
function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}
function initMethods(vm, methods) {
  vm.$options.props;
  for (var key in methods) {
    vm[key] = typeof methods[key] !== "function" ? noop$2 : bind$1(methods[key], vm);
  }
}
function initWatch(vm, watch2) {
  for (var key in watch2) {
    var handler = watch2[key];
    if (isArray$1(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}
function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject$1(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === "string") {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options);
}
function stateMixin(Vue2) {
  var dataDef = {};
  dataDef.get = function() {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function() {
    return this._props;
  };
  Object.defineProperty(Vue2.prototype, "$data", dataDef);
  Object.defineProperty(Vue2.prototype, "$props", propsDef);
  Vue2.prototype.$set = set;
  Vue2.prototype.$delete = del;
  Vue2.prototype.$watch = function(expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject$1(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = 'callback for immediate watcher "'.concat(watcher.expression, '"');
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
var uid = 0;
function initMixin$1(Vue2) {
  Vue2.prototype._init = function(options) {
    var vm = this;
    vm._uid = uid++;
    vm._isVue = true;
    vm.__v_skip = true;
    vm._scope = new EffectScope(
      true
      /* detached */
    );
    vm._scope.parent = void 0;
    vm._scope._vm = true;
    if (options && options._isComponent) {
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    {
      vm._renderProxy = vm;
    }
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook$1(
      vm,
      "beforeCreate",
      void 0,
      false
      /* setContext */
    );
    initInjections(vm);
    initState(vm);
    initProvide(vm);
    callHook$1(vm, "created");
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}
function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions;
      var modifiedOptions = resolveModifiedOptions(Ctor);
      if (modifiedOptions) {
        extend$1(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}
function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified)
        modified = {};
      modified[key] = latest[key];
    }
  }
  return modified;
}
function Vue(options) {
  this._init(options);
}
initMixin$1(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
function initUse(Vue2) {
  Vue2.use = function(plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }
    var args = toArray$1(arguments, 1);
    args.unshift(this);
    if (isFunction$1(plugin.install)) {
      plugin.install.apply(plugin, args);
    } else if (isFunction$1(plugin)) {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}
function initMixin(Vue2) {
  Vue2.mixin = function(mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
function initExtend(Vue2) {
  Vue2.cid = 0;
  var cid = 1;
  Vue2.extend = function(extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }
    var name = getComponentName(extendOptions) || getComponentName(Super.options);
    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub["super"] = Super;
    if (Sub.options.props) {
      initProps(Sub);
    }
    if (Sub.options.computed) {
      initComputed(Sub);
    }
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    ASSET_TYPES.forEach(function(type) {
      Sub[type] = Super[type];
    });
    if (name) {
      Sub.options.components[name] = Sub;
    }
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend$1({}, Sub.options);
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}
function initProps(Comp) {
  var props2 = Comp.options.props;
  for (var key in props2) {
    proxy(Comp.prototype, "_props", key);
  }
}
function initComputed(Comp) {
  var computed2 = Comp.options.computed;
  for (var key in computed2) {
    defineComputed(Comp.prototype, key, computed2[key]);
  }
}
function initAssetRegisters(Vue2) {
  ASSET_TYPES.forEach(function(type) {
    Vue2[type] = function(id, definition) {
      if (!definition) {
        return this.options[type + "s"][id];
      } else {
        if (type === "component" && isPlainObject$1(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === "directive" && isFunction$1(definition)) {
          definition = { bind: definition, update: definition };
        }
        this.options[type + "s"][id] = definition;
        return definition;
      }
    };
  });
}
function _getComponentName(opts) {
  return opts && (getComponentName(opts.Ctor.options) || opts.tag);
}
function matches(pattern, name) {
  if (isArray$1(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === "string") {
    return pattern.split(",").indexOf(name) > -1;
  } else if (isRegExp$1(pattern)) {
    return pattern.test(name);
  }
  return false;
}
function pruneCache(keepAliveInstance, filter2) {
  var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode, $vnode = keepAliveInstance.$vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name_1 = entry.name;
      if (name_1 && !filter2(name_1)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
  $vnode.componentOptions.children = void 0;
}
function pruneCacheEntry(cache, key, keys, current) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove$2(keys, key);
}
var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: "keep-alive",
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var _a2 = this, cache = _a2.cache, keys = _a2.keys, vnodeToCache = _a2.vnodeToCache, keyToCache = _a2.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag, componentInstance = vnodeToCache.componentInstance, componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: _getComponentName(componentOptions),
          tag,
          componentInstance
        };
        keys.push(keyToCache);
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null);
    this.keys = [];
  },
  destroyed: function() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function() {
    var _this = this;
    this.cacheVNode();
    this.$watch("include", function(val) {
      pruneCache(_this, function(name) {
        return matches(val, name);
      });
    });
    this.$watch("exclude", function(val) {
      pruneCache(_this, function(name) {
        return !matches(val, name);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      var name_2 = _getComponentName(componentOptions);
      var _a2 = this, include = _a2.include, exclude = _a2.exclude;
      if (
        // not included
        include && (!name_2 || !matches(include, name_2)) || // excluded
        exclude && name_2 && matches(exclude, name_2)
      ) {
        return vnode;
      }
      var _b = this, cache = _b.cache, keys = _b.keys;
      var key = vnode.key == null ? (
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        componentOptions.Ctor.cid + (componentOptions.tag ? "::".concat(componentOptions.tag) : "")
      ) : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        remove$2(keys, key);
        keys.push(key);
      } else {
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }
      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive
};
function initGlobalAPI(Vue2) {
  var configDef = {};
  configDef.get = function() {
    return config;
  };
  Object.defineProperty(Vue2, "config", configDef);
  Vue2.util = {
    warn,
    extend: extend$1,
    mergeOptions,
    defineReactive
  };
  Vue2.set = set;
  Vue2.delete = del;
  Vue2.nextTick = nextTick;
  Vue2.observable = function(obj) {
    observe(obj);
    return obj;
  };
  Vue2.options = /* @__PURE__ */ Object.create(null);
  ASSET_TYPES.forEach(function(type) {
    Vue2.options[type + "s"] = /* @__PURE__ */ Object.create(null);
  });
  Vue2.options._base = Vue2;
  extend$1(Vue2.options.components, builtInComponents);
  initUse(Vue2);
  initMixin(Vue2);
  initExtend(Vue2);
  initAssetRegisters(Vue2);
}
initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, "$isServer", {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(Vue, "FunctionalRenderContext", {
  value: FunctionalRenderContext
});
Vue.version = version;
var isReservedAttr = makeMap("style,class");
var acceptValue = makeMap("input,textarea,option,select,progress");
var mustUseProp = function(tag, type, attr) {
  return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
};
var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
var convertEnumeratedValue = function(key, value) {
  return isFalsyAttrValue(value) || value === "false" ? "false" : (
    // allow arbitrary string value for contenteditable
    key === "contenteditable" && isValidContentEditableValue(value) ? value : "true"
  );
};
var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
var xlinkNS = "http://www.w3.org/1999/xlink";
var isXlink = function(name) {
  return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
};
var getXlinkProp = function(name) {
  return isXlink(name) ? name.slice(6, name.length) : "";
};
var isFalsyAttrValue = function(val) {
  return val == null || val === false;
};
function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode2 = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode2 = parentNode2.parent)) {
    if (parentNode2 && parentNode2.data) {
      data = mergeClassData(data, parentNode2.data);
    }
  }
  return renderClass(data.staticClass, data.class);
}
function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}
function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  return "";
}
function concat(a, b) {
  return a ? b ? a + " " + b : a : b || "";
}
function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject$1(value)) {
    return stringifyObject(value);
  }
  if (typeof value === "string") {
    return value;
  }
  return "";
}
function stringifyArray(value) {
  var res = "";
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
      if (res)
        res += " ";
      res += stringified;
    }
  }
  return res;
}
function stringifyObject(value) {
  var res = "";
  for (var key in value) {
    if (value[key]) {
      if (res)
        res += " ";
      res += key;
    }
  }
  return res;
}
var namespaceMap = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
};
var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
var isReservedTag = function(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return "svg";
  }
  if (tag === "math") {
    return "math";
  }
}
var unknownElementCache = /* @__PURE__ */ Object.create(null);
function isUnknownElement(tag) {
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf("-") > -1) {
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}
var isTextInputType = makeMap("text,number,password,search,email,tel,url");
function query(el) {
  if (typeof el === "string") {
    var selected = document.querySelector(el);
    if (!selected) {
      return document.createElement("div");
    }
    return selected;
  } else {
    return el;
  }
}
function createElement(tagName2, vnode) {
  var elm = document.createElement(tagName2);
  if (tagName2 !== "select") {
    return elm;
  }
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
    elm.setAttribute("multiple", "multiple");
  }
  return elm;
}
function createElementNS(namespace, tagName2) {
  return document.createElementNS(namespaceMap[namespace], tagName2);
}
function createTextNode(text2) {
  return document.createTextNode(text2);
}
function createComment(text2) {
  return document.createComment(text2);
}
function insertBefore(parentNode2, newNode, referenceNode) {
  parentNode2.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  node.appendChild(child);
}
function parentNode(node) {
  return node.parentNode;
}
function nextSibling(node) {
  return node.nextSibling;
}
function tagName(node) {
  return node.tagName;
}
function setTextContent(node, text2) {
  node.textContent = text2;
}
function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, "");
}
var nodeOps = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createElement,
  createElementNS,
  createTextNode,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setTextContent,
  setStyleScope
});
var ref = {
  create: function(_2, vnode) {
    registerRef(vnode);
  },
  update: function(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function(vnode) {
    registerRef(vnode, true);
  }
};
function registerRef(vnode, isRemoval) {
  var ref2 = vnode.data.ref;
  if (!isDef(ref2))
    return;
  var vm = vnode.context;
  var refValue = vnode.componentInstance || vnode.elm;
  var value = isRemoval ? null : refValue;
  var $refsValue = isRemoval ? void 0 : refValue;
  if (isFunction$1(ref2)) {
    invokeWithErrorHandling(ref2, vm, [value], vm, "template ref function");
    return;
  }
  var isFor = vnode.data.refInFor;
  var _isString = typeof ref2 === "string" || typeof ref2 === "number";
  var _isRef = isRef(ref2);
  var refs = vm.$refs;
  if (_isString || _isRef) {
    if (isFor) {
      var existing = _isString ? refs[ref2] : ref2.value;
      if (isRemoval) {
        isArray$1(existing) && remove$2(existing, refValue);
      } else {
        if (!isArray$1(existing)) {
          if (_isString) {
            refs[ref2] = [refValue];
            setSetupRef(vm, ref2, refs[ref2]);
          } else {
            ref2.value = [refValue];
          }
        } else if (!existing.includes(refValue)) {
          existing.push(refValue);
        }
      }
    } else if (_isString) {
      if (isRemoval && refs[ref2] !== refValue) {
        return;
      }
      refs[ref2] = $refsValue;
      setSetupRef(vm, ref2, value);
    } else if (_isRef) {
      if (isRemoval && ref2.value !== refValue) {
        return;
      }
      ref2.value = value;
    } else ;
  }
}
function setSetupRef(_a2, key, val) {
  var _setupState = _a2._setupState;
  if (_setupState && hasOwn(_setupState, key)) {
    if (isRef(_setupState[key])) {
      _setupState[key].value = val;
    } else {
      _setupState[key] = val;
    }
  }
}
var emptyNode = new VNode("", {}, []);
var hooks = ["create", "activate", "update", "remove", "destroy"];
function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}
function sameInputType(a, b) {
  if (a.tag !== "input")
    return true;
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key))
      map[key] = i;
  }
  return map;
}
function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules2 = backend.modules, nodeOps2 = backend.nodeOps;
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules2.length; ++j) {
      if (isDef(modules2[j][hooks[i]])) {
        cbs[hooks[i]].push(modules2[j][hooks[i]]);
      }
    }
  }
  function emptyNodeAt(elm) {
    return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
  }
  function createRmCb(childElm, listeners) {
    function remove2() {
      if (--remove2.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove2.listeners = listeners;
    return remove2;
  }
  function removeNode(el) {
    var parent = nodeOps2.parentNode(el);
    if (isDef(parent)) {
      nodeOps2.removeChild(parent, el);
    }
  }
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      vnode = ownerArray[index2] = cloneVNode(vnode);
    }
    vnode.isRootInsert = !nested;
    if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }
    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
      setScope(vnode);
      createChildren(vnode, children, insertedVnodeQueue);
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
      insert(parentElm, vnode.elm, refElm);
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps2.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps2.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }
  function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i2 = vnode.data;
    if (isDef(i2)) {
      var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
      if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
        i2(
          vnode,
          false
          /* hydrating */
        );
      }
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }
  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      registerRef(vnode);
      insertedVnodeQueue.push(vnode);
    }
  }
  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i2;
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
        for (i2 = 0; i2 < cbs.activate.length; ++i2) {
          cbs.activate[i2](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    insert(parentElm, vnode.elm, refElm);
  }
  function insert(parent, elm, ref2) {
    if (isDef(parent)) {
      if (isDef(ref2)) {
        if (nodeOps2.parentNode(ref2) === parent) {
          nodeOps2.insertBefore(parent, elm, ref2);
        }
      } else {
        nodeOps2.appendChild(parent, elm);
      }
    }
  }
  function createChildren(vnode, children, insertedVnodeQueue) {
    if (isArray$1(children)) {
      for (var i_1 = 0; i_1 < children.length; ++i_1) {
        createElm(children[i_1], insertedVnodeQueue, vnode.elm, null, true, children, i_1);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
    }
  }
  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }
  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i_2 = 0; i_2 < cbs.create.length; ++i_2) {
      cbs.create[i_2](emptyNode, vnode);
    }
    i = vnode.data.hook;
    if (isDef(i)) {
      if (isDef(i.create))
        i.create(emptyNode, vnode);
      if (isDef(i.insert))
        insertedVnodeQueue.push(vnode);
    }
  }
  function setScope(vnode) {
    var i2;
    if (isDef(i2 = vnode.fnScopeId)) {
      nodeOps2.setStyleScope(vnode.elm, i2);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
          nodeOps2.setStyleScope(vnode.elm, i2);
        }
        ancestor = ancestor.parent;
      }
    }
    if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
      nodeOps2.setStyleScope(vnode.elm, i2);
    }
  }
  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }
  function invokeDestroyHook(vnode) {
    var i2, j2;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy))
        i2(vnode);
      for (i2 = 0; i2 < cbs.destroy.length; ++i2)
        cbs.destroy[i2](vnode);
    }
    if (isDef(i2 = vnode.children)) {
      for (j2 = 0; j2 < vnode.children.length; ++j2) {
        invokeDestroyHook(vnode.children[j2]);
      }
    }
  }
  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          removeNode(ch.elm);
        }
      }
    }
  }
  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i_3;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        rm.listeners += listeners;
      } else {
        rm = createRmCb(vnode.elm, listeners);
      }
      if (isDef(i_3 = vnode.componentInstance) && isDef(i_3 = i_3._vnode) && isDef(i_3.data)) {
        removeAndInvokeRemoveHook(i_3, rm);
      }
      for (i_3 = 0; i_3 < cbs.remove.length; ++i_3) {
        cbs.remove[i_3](vnode, rm);
      }
      if (isDef(i_3 = vnode.data.hook) && isDef(i_3 = i_3.remove)) {
        i_3(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }
  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
    var canMove = !removeOnly;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx))
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = void 0;
            canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }
  function findIdxInOld(node, oldCh, start, end) {
    for (var i_5 = start; i_5 < end; i_5++) {
      var c = oldCh[i_5];
      if (isDef(c) && sameVnode(node, c))
        return i_5;
    }
  }
  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      vnode = ownerArray[index2] = cloneVNode(vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }
    var i2;
    var data = vnode.data;
    if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
      i2(oldVnode, vnode);
    }
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i2 = 0; i2 < cbs.update.length; ++i2)
        cbs.update[i2](oldVnode, vnode);
      if (isDef(i2 = data.hook) && isDef(i2 = i2.update))
        i2(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch)
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text))
          nodeOps2.setTextContent(elm, "");
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps2.setTextContent(elm, "");
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps2.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch))
        i2(oldVnode, vnode);
    }
  }
  function invokeInsertHook(vnode, queue2, initial) {
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue2;
    } else {
      for (var i_6 = 0; i_6 < queue2.length; ++i_6) {
        queue2[i_6].data.hook.insert(queue2[i_6]);
      }
    }
  }
  var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i2;
    var tag = vnode.tag, data = vnode.data, children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    if (isDef(data)) {
      if (isDef(i2 = data.hook) && isDef(i2 = i2.init))
        i2(
          vnode,
          true
          /* hydrating */
        );
      if (isDef(i2 = vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
            if (i2 !== elm.innerHTML) {
              return false;
            }
          } else {
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i_7 = 0; i_7 < children.length; i_7++) {
              if (!childNode || !hydrate(childNode, children[i_7], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            if (!childrenMatch || childNode) {
              return false;
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data["class"]) {
          traverse(data["class"]);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }
  return function patch2(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode))
        invokeDestroyHook(oldVnode);
      return;
    }
    var isInitialPatch = false;
    var insertedVnodeQueue = [];
    if (isUndef(oldVnode)) {
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            }
          }
          oldVnode = emptyNodeAt(oldVnode);
        }
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps2.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps2.nextSibling(oldElm)
        );
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i_8 = 0; i_8 < cbs.destroy.length; ++i_8) {
              cbs.destroy[i_8](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i_9 = 0; i_9 < cbs.create.length; ++i_9) {
                cbs.create[i_9](emptyNode, ancestor);
              }
              var insert_1 = ancestor.data.hook.insert;
              if (insert_1.merged) {
                var cloned = insert_1.fns.slice(1);
                for (var i_10 = 0; i_10 < cloned.length; i_10++) {
                  cloned[i_10]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }
    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};
function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}
function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      callHook(dir, "bind", vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook(dir, "update", vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }
  if (dirsWithInsert.length) {
    var callInsert = function() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook(dirsWithInsert[i], "inserted", vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, "insert", callInsert);
    } else {
      callInsert();
    }
  }
  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, "postpatch", function() {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
      }
    });
  }
  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        callHook(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
      }
    }
  }
}
var emptyModifiers = /* @__PURE__ */ Object.create(null);
function normalizeDirectives(dirs, vm) {
  var res = /* @__PURE__ */ Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    if (vm._setupState && vm._setupState.__sfc) {
      var setupDef = dir.def || resolveAsset(vm, "_setupState", "v-" + dir.name);
      if (typeof setupDef === "function") {
        dir.def = {
          bind: setupDef,
          update: setupDef
        };
      } else {
        dir.def = setupDef;
      }
    }
    dir.def = dir.def || resolveAsset(vm.$options, "directives", dir.name);
  }
  return res;
}
function getRawDirName(dir) {
  return dir.rawName || "".concat(dir.name, ".").concat(Object.keys(dir.modifiers || {}).join("."));
}
function callHook(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive ".concat(dir.name, " ").concat(hook, " hook"));
    }
  }
}
var baseModules = [ref, directives];
function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs2 = vnode.data.attrs || {};
  if (isDef(attrs2.__ob__) || isTrue(attrs2._v_attr_proxy)) {
    attrs2 = vnode.data.attrs = extend$1({}, attrs2);
  }
  for (key in attrs2) {
    cur = attrs2[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  if ((isIE || isEdge) && attrs2.value !== oldAttrs.value) {
    setAttr(elm, "value", attrs2.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs2[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}
function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf("-") > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}
function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
      var blocker_1 = function(e) {
        e.stopImmediatePropagation();
        el.removeEventListener("input", blocker_1);
      };
      el.addEventListener("input", blocker_1);
      el.__ieph = true;
    }
    el.setAttribute(key, value);
  }
}
var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }
  var cls = genClassForVnode(vnode);
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }
  if (cls !== el._prevClass) {
    el.setAttribute("class", cls);
    el._prevClass = cls;
  }
}
var klass = {
  create: updateClass,
  update: updateClass
};
var RANGE_TOKEN = "__r";
var CHECKBOX_RADIO_TOKEN = "__c";
function normalizeEvents(on) {
  if (isDef(on[RANGE_TOKEN])) {
    var event_1 = isIE ? "change" : "input";
    on[event_1] = [].concat(on[RANGE_TOKEN], on[event_1] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}
var target;
function createOnceHandler(event, handler, capture) {
  var _target = target;
  return function onceHandler() {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove(event, onceHandler, capture, _target);
    }
  };
}
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add(name, handler, capture, passive) {
  if (useMicrotaskFix) {
    var attachedTimestamp_1 = currentFlushTimestamp;
    var original_1 = handler;
    handler = original_1._wrapper = function(e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget || // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp_1 || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original_1.apply(this, arguments);
      }
    };
  }
  target.addEventListener(name, handler, supportsPassive ? { capture, passive } : capture);
}
function remove(name, handler, capture, _target) {
  (_target || target).removeEventListener(
    name,
    //@ts-expect-error
    handler._wrapper || handler,
    capture
  );
}
function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target = vnode.elm || oldVnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add, remove, createOnceHandler, vnode.context);
  target = void 0;
}
var events = {
  create: updateDOMListeners,
  update: updateDOMListeners,
  // @ts-expect-error emptyNode has actually data
  destroy: function(vnode) {
    return updateDOMListeners(vnode, emptyNode);
  }
};
var svgContainer;
function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props2 = vnode.data.domProps || {};
  if (isDef(props2.__ob__) || isTrue(props2._v_attr_proxy)) {
    props2 = vnode.data.domProps = extend$1({}, props2);
  }
  for (key in oldProps) {
    if (!(key in props2)) {
      elm[key] = "";
    }
  }
  for (key in props2) {
    cur = props2[key];
    if (key === "textContent" || key === "innerHTML") {
      if (vnode.children)
        vnode.children.length = 0;
      if (cur === oldProps[key])
        continue;
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }
    if (key === "value" && elm.tagName !== "PROGRESS") {
      elm._value = cur;
      var strCur = isUndef(cur) ? "" : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      svgContainer = svgContainer || document.createElement("div");
      svgContainer.innerHTML = "<svg>".concat(cur, "</svg>");
      var svg2 = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg2.firstChild) {
        elm.appendChild(svg2.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      try {
        elm[key] = cur;
      } catch (e) {
      }
    }
  }
}
function shouldUpdateValue(elm, checkVal) {
  return (
    //@ts-expect-error
    !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal))
  );
}
function isNotInFocusAndDirty(elm, checkVal) {
  var notInFocus = true;
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {
  }
  return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers;
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }
  return value !== newVal;
}
var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
var parseStyleText = cached(function(cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});
function normalizeStyleData(data) {
  var style2 = normalizeStyleBinding(data.style);
  return data.staticStyle ? extend$1(data.staticStyle, style2) : style2;
}
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === "string") {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;
  {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend$1(res, styleData);
      }
    }
  }
  if (styleData = normalizeStyleData(vnode.data)) {
    extend$1(res, styleData);
  }
  var parentNode2 = vnode;
  while (parentNode2 = parentNode2.parent) {
    if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
      extend$1(res, styleData);
    }
  }
  return res;
}
var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function(el, name, val) {
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};
var vendorNames = ["Webkit", "Moz", "ms"];
var emptyStyle;
var normalize = cached(function(prop) {
  emptyStyle = emptyStyle || document.createElement("div").style;
  prop = camelize(prop);
  if (prop !== "filter" && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name_1 = vendorNames[i] + capName;
    if (name_1 in emptyStyle) {
      return name_1;
    }
  }
});
function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }
  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style2 = normalizeStyleBinding(vnode.data.style) || {};
  vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend$1({}, style2) : style2;
  var newStyle = getStyle(vnode);
  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, "");
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    setProp(el, name, cur == null ? "" : cur);
  }
}
var style = {
  create: updateStyle,
  update: updateStyle
};
var whitespaceRE = /\s+/;
function addClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  if (el.classList) {
    if (cls.indexOf(" ") > -1) {
      cls.split(whitespaceRE).forEach(function(c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " ".concat(el.getAttribute("class") || "", " ");
    if (cur.indexOf(" " + cls + " ") < 0) {
      el.setAttribute("class", (cur + cls).trim());
    }
  }
}
function removeClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  if (el.classList) {
    if (cls.indexOf(" ") > -1) {
      cls.split(whitespaceRE).forEach(function(c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute("class");
    }
  } else {
    var cur = " ".concat(el.getAttribute("class") || "", " ");
    var tar = " " + cls + " ";
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, " ");
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute("class", cur);
    } else {
      el.removeAttribute("class");
    }
  }
}
function resolveTransition(def2) {
  if (!def2) {
    return;
  }
  if (typeof def2 === "object") {
    var res = {};
    if (def2.css !== false) {
      extend$1(res, autoCssTransition(def2.name || "v"));
    }
    extend$1(res, def2);
    return res;
  } else if (typeof def2 === "string") {
    return autoCssTransition(def2);
  }
}
var autoCssTransition = cached(function(name) {
  return {
    enterClass: "".concat(name, "-enter"),
    enterToClass: "".concat(name, "-enter-to"),
    enterActiveClass: "".concat(name, "-enter-active"),
    leaveClass: "".concat(name, "-leave"),
    leaveToClass: "".concat(name, "-leave-to"),
    leaveActiveClass: "".concat(name, "-leave-active")
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = "transition";
var ANIMATION = "animation";
var transitionProp = "transition";
var transitionEndEvent = "transitionend";
var animationProp = "animation";
var animationEndEvent = "animationend";
if (hasTransition) {
  if (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0) {
    transitionProp = "WebkitTransition";
    transitionEndEvent = "webkitTransitionEnd";
  }
  if (window.onanimationend === void 0 && window.onwebkitanimationend !== void 0) {
    animationProp = "WebkitAnimation";
    animationEndEvent = "webkitAnimationEnd";
  }
}
var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(fn) {
    return fn();
  }
);
function nextFrame(fn) {
  raf(function() {
    raf(fn);
  });
}
function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}
function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove$2(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
  var _a2 = getTransitionInfo(el, expectedType), type = _a2.type, timeout = _a2.timeout, propCount = _a2.propCount;
  if (!type)
    return cb();
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function() {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}
var transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
  var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
  var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max.apply(null, durations.map(function(d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function enter(vnode, toggleDisplay) {
  var el = vnode.elm;
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }
  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }
  var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter2 = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration;
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }
  var isAppear = !context._isMounted || !vnode.isRootInsert;
  if (isAppear && !appear && appear !== "") {
    return;
  }
  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? isFunction$1(appear) ? appear : enter2 : enter2;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject$1(duration) ? duration.enter : duration);
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function() {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });
  if (!vnode.data.show) {
    mergeVNodeHook(vnode, "insert", function() {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function() {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }
  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }
  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}
function leave(vnode, rm) {
  var el = vnode.elm;
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }
  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  if (isDef(el._leaveCb)) {
    return;
  }
  var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave2 = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave2);
  var explicitLeaveDuration = toNumber(isObject$1(duration) ? duration.leave : duration);
  var cb = el._leaveCb = once(function() {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });
  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }
  function performLeave() {
    if (cb.cancelled) {
      return;
    }
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function() {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave2 && leave2(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}
function isValidDuration(val) {
  return typeof val === "number" && !isNaN(val);
}
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}
function _enter(_2, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}
var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function(vnode, rm) {
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({ nodeOps, modules });
if (isIE9) {
  document.addEventListener("selectionchange", function() {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, "input");
    }
  });
}
var directive = {
  inserted: function(el, binding, vnode, oldVnode) {
    if (vnode.tag === "select") {
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, "postpatch", function() {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener("compositionstart", onCompositionStart);
        el.addEventListener("compositionend", onCompositionEnd);
        el.addEventListener("change", onCompositionEnd);
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function(el, binding, vnode) {
    if (vnode.tag === "select") {
      setSelected(el, binding, vnode.context);
      var prevOptions_1 = el._vOptions;
      var curOptions_1 = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions_1.some(function(o, i) {
        return !looseEqual(o, prevOptions_1[i]);
      })) {
        var needReset = el.multiple ? binding.value.some(function(v2) {
          return hasNoMatchingOption(v2, curOptions_1);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions_1);
        if (needReset) {
          trigger(el, "change");
        }
      }
    }
  }
};
function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding);
  if (isIE || isEdge) {
    setTimeout(function() {
      actuallySetSelected(el, binding);
    }, 0);
  }
}
function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}
function hasNoMatchingOption(value, options) {
  return options.every(function(o) {
    return !looseEqual(o, value);
  });
}
function getValue(option) {
  return "_value" in option ? option._value : option.value;
}
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  if (!e.target.composing)
    return;
  e.target.composing = false;
  trigger(e.target, "input");
}
function trigger(el, type) {
  var e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}
var show = {
  bind: function(el, _a2, vnode) {
    var value = _a2.value;
    vnode = locateNode(vnode);
    var transition2 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
    if (value && transition2) {
      vnode.data.show = true;
      enter(vnode, function() {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : "none";
    }
  },
  update: function(el, _a2, vnode) {
    var value = _a2.value, oldValue = _a2.oldValue;
    if (!value === !oldValue)
      return;
    vnode = locateNode(vnode);
    var transition2 = vnode.data && vnode.data.transition;
    if (transition2) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function() {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function() {
          el.style.display = "none";
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : "none";
    }
  },
  unbind: function(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show
};
var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}
function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  var listeners = options._parentListeners;
  for (var key in listeners) {
    data[camelize(key)] = listeners[key];
  }
  return data;
}
function placeholder(h2, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h2("keep-alive", {
      props: rawChild.componentOptions.propsData
    });
  }
}
function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}
function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}
var isNotTextNode = function(c) {
  return c.tag || isAsyncPlaceholder(c);
};
var isVShowDirective = function(d) {
  return d.name === "show";
};
var Transition = {
  name: "transition",
  props: transitionProps,
  abstract: true,
  render: function(h2) {
    var _this = this;
    var children = this.$slots.default;
    if (!children) {
      return;
    }
    children = children.filter(isNotTextNode);
    if (!children.length) {
      return;
    }
    var mode = this.mode;
    var rawChild = children[0];
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }
    var child = getRealChild(rawChild);
    if (!child) {
      return rawChild;
    }
    if (this._leaving) {
      return placeholder(h2, rawChild);
    }
    var id = "__transition-".concat(this._uid, "-");
    child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }
    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      var oldData = oldChild.data.transition = extend$1({}, data);
      if (mode === "out-in") {
        this._leaving = true;
        mergeVNodeHook(oldData, "afterLeave", function() {
          _this._leaving = false;
          _this.$forceUpdate();
        });
        return placeholder(h2, rawChild);
      } else if (mode === "in-out") {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave_1;
        var performLeave = function() {
          delayedLeave_1();
        };
        mergeVNodeHook(data, "afterEnter", performLeave);
        mergeVNodeHook(data, "enterCancelled", performLeave);
        mergeVNodeHook(oldData, "delayLeave", function(leave2) {
          delayedLeave_1 = leave2;
        });
      }
    }
    return rawChild;
  }
};
var props = extend$1({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props,
  beforeMount: function() {
    var _this = this;
    var update = this._update;
    this._update = function(vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(_this);
      _this.__patch__(
        _this._vnode,
        _this.kept,
        false,
        // hydrating
        true
        // removeOnly (!important, avoids unnecessary moves)
      );
      _this._vnode = _this.kept;
      restoreActiveInstance();
      update.call(_this, vnode, hydrating);
    };
  },
  render: function(h2) {
    var tag = this.tag || this.$vnode.data.tag || "span";
    var map = /* @__PURE__ */ Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);
    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        }
      }
    }
    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i = 0; i < prevChildren.length; i++) {
        var c = prevChildren[i];
        c.data.transition = transitionData;
        c.data.pos = c.elm.getBoundingClientRect();
        if (map[c.key]) {
          kept.push(c);
        } else {
          removed.push(c);
        }
      }
      this.kept = h2(tag, null, kept);
      this.removed = removed;
    }
    return h2(tag, null, children);
  },
  updated: function() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || "v") + "-move";
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);
    this._reflow = document.body.offsetHeight;
    children.forEach(function(c) {
      if (c.data.moved) {
        var el_1 = c.elm;
        var s = el_1.style;
        addTransitionClass(el_1, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = "";
        el_1.addEventListener(transitionEndEvent, el_1._moveCb = function cb(e) {
          if (e && e.target !== el_1) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el_1.removeEventListener(transitionEndEvent, cb);
            el_1._moveCb = null;
            removeTransitionClass(el_1, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function(el, moveClass) {
      if (!hasTransition) {
        return false;
      }
      if (this._hasMove) {
        return this._hasMove;
      }
      var clone2 = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function(cls) {
          removeClass(clone2, cls);
        });
      }
      addClass(clone2, moveClass);
      clone2.style.display = "none";
      this.$el.appendChild(clone2);
      var info = getTransitionInfo(clone2);
      this.$el.removeChild(clone2);
      return this._hasMove = info.hasTransform;
    }
  }
};
function callPendingCbs(c) {
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}
function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = "0s";
  }
}
var platformComponents = {
  Transition,
  TransitionGroup
};
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;
extend$1(Vue.options.directives, platformDirectives);
extend$1(Vue.options.components, platformComponents);
Vue.prototype.__patch__ = inBrowser ? patch : noop$2;
Vue.prototype.$mount = function(el, hydrating) {
  el = el && inBrowser ? query(el) : void 0;
  return mountComponent(this, el, hydrating);
};
if (inBrowser) {
  setTimeout(function() {
    if (config.devtools) {
      if (devtools) {
        devtools.emit("init", Vue);
      }
    }
  }, 0);
}
function getDefaultExportFromCjs$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var browser = { exports: {} };
var process = browser.exports = {};
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    if (typeof setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
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
  while (len) {
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
process.nextTick = function(fun) {
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
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = "";
process.versions = {};
function noop$1() {
}
process.on = noop$1;
process.addListener = noop$1;
process.once = noop$1;
process.off = noop$1;
process.removeListener = noop$1;
process.removeAllListeners = noop$1;
process.emit = noop$1;
process.prependListener = noop$1;
process.prependOnceListener = noop$1;
process.listeners = function(name) {
  return [];
};
process.binding = function(name) {
  throw new Error("process.binding is not supported");
};
process.cwd = function() {
  return "/";
};
process.chdir = function(dir) {
  throw new Error("process.chdir is not supported");
};
process.umask = function() {
  return 0;
};
var browserExports = browser.exports;
const process$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var define_process_env_default = {};
  const debug = typeof process$1 === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug;
  return debug_1;
}
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var re = { exports: {} };
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug = requireDebug();
    exports = module.exports = {};
    const re2 = exports.re = [];
    const safeRe = exports.safeRe = [];
    const src = exports.src = [];
    const safeSrc = exports.safeSrc = [];
    const t2 = exports.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token2, max] of safeRegexReplacements) {
        value = value.split(`${token2}*`).join(`${token2}{0,${max}}`).split(`${token2}+`).join(`${token2}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index2 = R++;
      debug(name, index2, value);
      t2[name] = index2;
      src[index2] = value;
      safeSrc[index2] = safe;
      re2[index2] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NUMERICIDENTIFIER]}|${src[t2.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NUMERICIDENTIFIERLOOSE]}|${src[t2.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
    createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
    createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t2.COERCE], true);
    createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a, b) => {
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const debug = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, safeSrc: src, t: t2 } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version2, options) {
      options = parseOptions(options);
      if (version2 instanceof SemVer) {
        if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
          return version2;
        } else {
          version2 = version2.version;
        }
      } else if (typeof version2 !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
      }
      if (version2.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version2, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m = version2.trim().match(options.loose ? re2[t2.LOOSE] : re2[t2.FULL]);
      if (!m) {
        throw new TypeError(`Invalid Version: ${version2}`);
      }
      this.raw = version2;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i = 0;
      do {
        const a = this.prerelease[i];
        const b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i = 0;
      do {
        const a = this.build[i];
        const b = other.build[i];
        debug("build compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const r = new RegExp(`^${this.options.loose ? src[t2.PRERELEASELOOSE] : src[t2.PRERELEASE]}$`);
          const match = `-${identifier}`.match(r);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === "number") {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver = SemVer;
  return semver;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver();
  const parse = (version2, options, throwErrors = false) => {
    if (version2 instanceof SemVer) {
      return version2;
    }
    try {
      return new SemVer(version2, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid_1;
  hasRequiredValid = 1;
  const parse = requireParse();
  const valid2 = (version2, options) => {
    const v2 = parse(version2, options);
    return v2 ? v2.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
var validExports = requireValid();
const valid = /* @__PURE__ */ getDefaultExportFromCjs$1(validExports);
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver();
  const major2 = (a, loose) => new SemVer(a, loose).major;
  major_1 = major2;
  return major_1;
}
var majorExports = requireMajor();
const major = /* @__PURE__ */ getDefaultExportFromCjs$1(majorExports);
class ProxyBus {
  bus;
  constructor(bus2) {
    if (typeof bus2.getVersion !== "function" || !valid(bus2.getVersion())) {
      console.warn("Proxying an event bus with an unknown or invalid version");
    } else if (major(bus2.getVersion()) !== major(this.getVersion())) {
      console.warn(
        "Proxying an event bus of version " + bus2.getVersion() + " with " + this.getVersion()
      );
    }
    this.bus = bus2;
  }
  getVersion() {
    return "3.3.2";
  }
  subscribe(name, handler) {
    this.bus.subscribe(name, handler);
  }
  unsubscribe(name, handler) {
    this.bus.unsubscribe(name, handler);
  }
  emit(name, ...event) {
    this.bus.emit(name, ...event);
  }
}
class SimpleBus {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.2";
  }
  subscribe(name, handler) {
    this.handlers.set(
      name,
      (this.handlers.get(name) || []).concat(
        handler
      )
    );
  }
  unsubscribe(name, handler) {
    this.handlers.set(
      name,
      (this.handlers.get(name) || []).filter((h) => h !== handler)
    );
  }
  emit(name, ...event) {
    const handlers = this.handlers.get(name) || [];
    handlers.forEach((h) => {
      try {
        ;
        h(event[0]);
      } catch (e) {
        console.error("could not invoke event listener", e);
      }
    });
  }
}
let bus = null;
function getBus() {
  if (bus !== null) {
    return bus;
  }
  if (typeof window === "undefined") {
    return new Proxy({}, {
      get: () => {
        return () => console.error(
          "Window not available, EventBus can not be established!"
        );
      }
    });
  }
  if (window.OC?._eventBus && typeof window._nc_event_bus === "undefined") {
    console.warn(
      "found old event bus instance at OC._eventBus. Update your version!"
    );
    window._nc_event_bus = window.OC._eventBus;
  }
  if (typeof window?._nc_event_bus !== "undefined") {
    bus = new ProxyBus(window._nc_event_bus);
  } else {
    bus = window._nc_event_bus = new SimpleBus();
  }
  return bus;
}
function subscribe(name, handler) {
  getBus().subscribe(name, handler);
}
function unsubscribe(name, handler) {
  getBus().unsubscribe(name, handler);
}
var dist = {};
var storagebuilder = {};
var scopedstorage = {};
var hasRequiredScopedstorage;
function requireScopedstorage() {
  if (hasRequiredScopedstorage) return scopedstorage;
  hasRequiredScopedstorage = 1;
  Object.defineProperty(scopedstorage, "__esModule", {
    value: true
  });
  scopedstorage.default = void 0;
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(t2) {
    var i = _toPrimitive(t2, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive(t2, r) {
    if ("object" != typeof t2 || !t2) return t2;
    var e = t2[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t2, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  class ScopedStorage {
    constructor(scope, wrapped, persistent) {
      _defineProperty(this, "scope", void 0);
      _defineProperty(this, "wrapped", void 0);
      this.scope = "".concat(persistent ? ScopedStorage.GLOBAL_SCOPE_PERSISTENT : ScopedStorage.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(scope), "_");
      this.wrapped = wrapped;
    }
    scopeKey(key) {
      return "".concat(this.scope).concat(key);
    }
    setItem(key, value) {
      this.wrapped.setItem(this.scopeKey(key), value);
    }
    getItem(key) {
      return this.wrapped.getItem(this.scopeKey(key));
    }
    removeItem(key) {
      this.wrapped.removeItem(this.scopeKey(key));
    }
    clear() {
      Object.keys(this.wrapped).filter((key) => key.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
    }
  }
  scopedstorage.default = ScopedStorage;
  _defineProperty(ScopedStorage, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol");
  _defineProperty(ScopedStorage, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
  return scopedstorage;
}
var hasRequiredStoragebuilder;
function requireStoragebuilder() {
  if (hasRequiredStoragebuilder) return storagebuilder;
  hasRequiredStoragebuilder = 1;
  Object.defineProperty(storagebuilder, "__esModule", {
    value: true
  });
  storagebuilder.default = void 0;
  var _scopedstorage = _interopRequireDefault(requireScopedstorage());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(t2) {
    var i = _toPrimitive(t2, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _toPrimitive(t2, r) {
    if ("object" != typeof t2 || !t2) return t2;
    var e = t2[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t2, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  class StorageBuilder {
    constructor(appId) {
      _defineProperty(this, "appId", void 0);
      _defineProperty(this, "persisted", false);
      _defineProperty(this, "clearedOnLogout", false);
      this.appId = appId;
    }
    persist() {
      let persist = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      this.persisted = persist;
      return this;
    }
    clearOnLogout() {
      let clear = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      this.clearedOnLogout = clear;
      return this;
    }
    build() {
      return new _scopedstorage.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
    }
  }
  storagebuilder.default = StorageBuilder;
  return storagebuilder;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, "__esModule", {
    value: true
  });
  dist.clearAll = clearAll;
  dist.clearNonPersistent = clearNonPersistent;
  dist.getBuilder = getBuilder;
  var _storagebuilder = _interopRequireDefault(requireStoragebuilder());
  var _scopedstorage = _interopRequireDefault(requireScopedstorage());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function getBuilder(appId) {
    return new _storagebuilder.default(appId);
  }
  function clearStorage(storage, pred) {
    Object.keys(storage).filter((k) => pred ? pred(k) : true).map(storage.removeItem.bind(storage));
  }
  function clearAll() {
    const storages = [window.sessionStorage, window.localStorage];
    storages.map((s) => clearStorage(s));
  }
  function clearNonPersistent() {
    const storages = [window.sessionStorage, window.localStorage];
    storages.map((s) => clearStorage(s, (k) => !k.startsWith(_scopedstorage.default.GLOBAL_SCOPE_PERSISTENT)));
  }
  return dist;
}
var distExports = requireDist();
let token;
const observers = [];
function getRequestToken() {
  if (token === void 0) {
    token = document.head.dataset.requesttoken ?? null;
  }
  return token;
}
function onRequestTokenUpdate(observer) {
  observers.push(observer);
}
subscribe("csrf-token-update", (e) => {
  token = e.token;
  observers.forEach((observer) => {
    try {
      observer(token);
    } catch (e2) {
      console.error("Error updating CSRF token observer", e2);
    }
  });
});
distExports.getBuilder("public").persist().build();
let currentUser;
const getAttribute = (el, attribute) => {
  if (el) {
    return el.getAttribute(attribute);
  }
  return null;
};
function getCurrentUser() {
  if (currentUser !== void 0) {
    return currentUser;
  }
  const head = document?.getElementsByTagName("head")[0];
  if (!head) {
    return null;
  }
  const uid2 = getAttribute(head, "data-user");
  if (uid2 === null) {
    currentUser = null;
    return currentUser;
  }
  currentUser = {
    uid: uid2,
    displayName: getAttribute(head, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  };
  return currentUser;
}
function normalizeComponent$1(scriptExports, render7, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render7) {
    options.render = render7;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main$7 = {
  name: "NcButton",
  inject: {
    getNcPopoverTriggerAttrs: {
      from: "NcPopover:trigger:attrs",
      default: () => () => ({})
    }
  },
  props: {
    /**
     * Set the text and icon alignment
     *
     * @default 'center'
     */
    alignment: {
      type: String,
      default: "center",
      validator: (alignment) => ["start", "start-reverse", "center", "center-reverse", "end", "end-reverse"].includes(alignment)
    },
    /**
     * Toggles the disabled state of the button on and off.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Specify the button size
     * Accepted values: `'small'`, `'normal'` (default), `'large'`
     */
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return ["small", "normal", "large"].includes(value);
      }
    },
    /**
     * Specifies the HTML button type.
     * Accepted values: submit, reset, button.
     *
     * For legacy reasons this can also be used to set the variant of the button (color schema).
     * This is discouraged but the accepted values are:
     * primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success.
     *
     * @default 'secondary' (will change with v9)
     * @deprecated The behavior will change in v9 to only allow the native HTML button types - use `variant` instead for setting the appearance of the button.
     */
    type: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(value) || ["submit", "reset", "button"].includes(value);
      },
      default: "secondary"
    },
    /**
     * Specifies the button native type
     * Accepted values: submit, reset, button. If left empty,
     * the default "button" type will be used.
     *
     * @deprecated use `type` instead - will be removed with v9
     */
    nativeType: {
      type: String,
      validator(value) {
        return ["submit", "reset", "button"].indexOf(value) !== -1;
      },
      default: "button"
    },
    /**
     * Specifies whether the button should span all the available width.
     * By default, buttons span the whole width of the container.
     */
    wide: {
      type: Boolean,
      default: false
    },
    /**
     * Always try to provide an aria-label to your button. Make it more
     * specific than the button's name by provide some more context. E.g. if
     * the name of the button is "send" in the Mail app, the aria label could
     * be "Send email".
     */
    ariaLabel: {
      type: String,
      default: null
    },
    /**
     * Providing the href attribute turns the button component into an `a`
     * element.
     */
    href: {
      type: String,
      default: null
    },
    /**
     * Target for the `a` element if `href` is set.
     */
    target: {
      type: String,
      default: "_self"
    },
    /**
     * Providing the download attribute with href downloads file when clicking.
     */
    download: {
      type: String,
      default: null
    },
    /**
     * Providing the to attribute turns the button component into a `router-link`
     * element. Takes precedence over the href attribute.
     */
    to: {
      type: [String, Object],
      default: null
    },
    /**
     * Pass in `true` if you want the matching behaviour of `router-link` to
     * be non-inclusive: https://router.vuejs.org/api/#exact
     */
    exact: {
      type: Boolean,
      default: false
    },
    /**
     * @deprecated To be removed in @nextcloud/vue 9. Migration guide: remove ariaHidden prop from NcAction* components.
     * @todo Add a check in @nextcloud/vue 9 that this prop is not provided,
     * otherwise root element will inherit incorrect aria-hidden.
     */
    ariaHidden: {
      type: Boolean,
      default: null
    },
    /**
     * The pressed state of the button if it has a checked state
     * This will add the `aria-pressed` attribute and for the button to have the primary style in checked state.
     *
     * Pressed state is not supported for links
     */
    pressed: {
      type: Boolean,
      default: null
    },
    /**
     * Specifies the button variant.
     *
     * Accepted values: primary, secondary, tertiary, tertiary-no-background, tertiary-on-primary, error, warning, success.
     *
     * @default 'secondary'
     * @since 8.24.0
     */
    variant: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(value);
      },
      default: "secondary"
    }
  },
  emits: ["update:pressed", "click"],
  computed: {
    /**
     * The real type to be used for the button, enforces `primary` for pressed state and, if stateful button, any other type for not pressed state
     * Otherwise the type property is used.
     */
    realVariant() {
      if (this.pressed) {
        return "primary";
      }
      if (this.pressed === false && (this.type === "primary" || this.variant === "primary")) {
        return "secondary";
      }
      if (this.type !== "secondary" && ["primary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(this.type)) {
        return this.type;
      }
      return this.variant;
    },
    /**
     * The HTML button type
     */
    realType() {
      if (typeof this.pressed === "boolean") {
        return "button";
      }
      if (this.nativeType !== "button") {
        return this.nativeType;
      }
      if (["primary", "secondary", "tertiary", "tertiary-no-background", "tertiary-on-primary", "error", "warning", "success"].includes(this.type)) {
        return this.nativeType;
      }
      return this.type;
    },
    /**
     * The flexbox alignment of the button content
     */
    flexAlignment() {
      return this.alignment.split("-")[0];
    },
    /**
     * If the button content should be reversed (icon on the end)
     */
    isReverseAligned() {
      return this.alignment.includes("-");
    },
    ncPopoverTriggerAttrs() {
      return this.getNcPopoverTriggerAttrs();
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object|undefined} The created VNode
   */
  render(h) {
    const hasText = !!this.$slots.default;
    const hasIcon = this.$slots?.icon;
    if (!hasText && !this.ariaLabel) {
      console.warn(
        "You need to fill either the text or the ariaLabel props in the button component.",
        {
          text: this.$slots.default?.[0]?.text,
          ariaLabel: this.ariaLabel
        },
        this
      );
    }
    const isLink = this.to || this.href;
    const hasPressed = !isLink && typeof this.pressed === "boolean";
    const renderButton = ({ href, navigate, isActive, isExactActive } = {}) => h(
      isLink ? "a" : "button",
      {
        class: [
          "button-vue",
          `button-vue--size-${this.size}`,
          {
            "button-vue--icon-only": hasIcon && !hasText,
            "button-vue--text-only": hasText && !hasIcon,
            "button-vue--icon-and-text": hasIcon && hasText,
            [`button-vue--vue-${this.realVariant}`]: this.realVariant,
            "button-vue--wide": this.wide,
            [`button-vue--${this.flexAlignment}`]: this.flexAlignment !== "center",
            "button-vue--reverse": this.isReverseAligned,
            active: isActive,
            "router-link-exact-active": isExactActive
          }
        ],
        attrs: {
          "aria-label": this.ariaLabel,
          "aria-pressed": hasPressed ? this.pressed.toString() : void 0,
          disabled: this.disabled,
          type: isLink ? null : this.realType,
          role: isLink ? "button" : null,
          href: this.to ? href : this.href || null,
          target: isLink ? this.target || "_self" : null,
          rel: isLink ? "nofollow noreferrer noopener" : null,
          download: !this.to && this.href && this.download ? this.download : null,
          // If this button is used as a popover trigger, we need to apply trigger attrs, e.g. aria attributes
          ...this.ncPopoverTriggerAttrs,
          // Inherit all the component attrs
          ...this.$attrs
        },
        on: {
          ...this.$listeners,
          click: ($event) => {
            if (hasPressed) {
              this.$emit("update:pressed", !this.pressed);
            }
            this.$emit("click", $event);
            navigate?.($event);
          }
        }
      },
      [
        h("span", { class: "button-vue__wrapper" }, [
          hasIcon ? h(
            "span",
            {
              class: "button-vue__icon",
              attrs: {
                "aria-hidden": "true"
              }
            },
            [this.$slots.icon]
          ) : null,
          hasText ? h("span", { class: "button-vue__text" }, [this.$slots.default]) : null
        ])
      ]
    );
    if (this.to) {
      return h("router-link", {
        props: {
          custom: true,
          to: this.to,
          exact: this.exact
        },
        scopedSlots: {
          default: renderButton
        }
      });
    }
    return renderButton();
  }
};
const _sfc_render$7 = null;
const _sfc_staticRenderFns$7 = null;
var __component__$7 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  "3f8e123a"
);
const NcButton = __component__$7.exports;
const GenRandomId = (length) => {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").slice(0, 5);
};
const _sfc_main$6 = {
  name: "AlertCircleOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$6 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon alert-circle-outline-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  null
);
const AlertCircle = __component__$6.exports;
const _sfc_main$5 = {
  name: "CheckIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$5 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon check-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  null
);
const Check = __component__$5.exports;
function useModelMigration(oldModelName, oldModelEvent, required = false) {
  const vm = getCurrentInstance().proxy;
  if (required && vm.$props[oldModelName] === void 0 && vm.$props.modelValue === void 0) {
    Vue.util.warn(`Missing required prop: "modelValue" or old "${oldModelName}"`);
  }
  const model = computed({
    get() {
      if (vm.$props[oldModelName] !== void 0) {
        return vm.$props[oldModelName];
      }
      return vm.$props.modelValue;
    },
    set(value) {
      vm.$emit("update:modelValue", value);
      vm.$emit("update:model-value", value);
      vm.$emit(oldModelEvent, value);
    }
  });
  return model;
}
const _sfc_main$4 = {
  name: "NcInputField",
  components: {
    NcButton,
    AlertCircle,
    Check
  },
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    value: {
      type: [String, Number],
      default: void 0
    },
    /**
     * The value of the input field
     * If type is 'number' and a number is passed as value than the type of `update:modelValue` will also be 'number'
     */
    modelValue: {
      type: [String, Number],
      default: void 0
    },
    /**
     * The type of the input element
     */
    type: {
      type: String,
      default: "text",
      validator: (value) => [
        "text",
        "password",
        "email",
        "tel",
        "url",
        "search",
        "number"
      ].includes(value)
    },
    /**
     * The input label, always provide one for accessibility purposes.
     * This will also be used as a placeholder unless the placeholder
     * prop is populated with a different string.
     *
     * Note: If the background color is not `--color-main-background` consider using an external label instead (see `labelOutside`).
     */
    label: {
      type: String,
      default: void 0
    },
    /**
     * Pass in true if you want to use an external label. This is useful
     * if you need a label that looks different from the one provided by
     * this component
     */
    labelOutside: {
      type: Boolean,
      default: false
    },
    /**
     * The placeholder of the input. This defaults as the string that's
     * passed into the label prop. In order to remove the placeholder,
     * pass in an empty string.
     */
    placeholder: {
      type: String,
      default: void 0
    },
    /**
     * Controls whether to display the trailing button.
     */
    showTrailingButton: {
      type: Boolean,
      default: false
    },
    /**
     * Label of the trailing button
     *
     * Required when showTrailingButton is set
     */
    trailingButtonLabel: {
      type: String,
      default: ""
    },
    /**
     * Toggles the success state of the component. Adds a checkmark icon.
     * this cannot be used together with canClear.
     */
    success: {
      type: Boolean,
      default: false
    },
    /**
     * Toggles the error state of the component. Adds an error icon.
     * this cannot be used together with canClear.
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Additional helper text message
     *
     * This will be displayed beneath the input field. In case the field is
     * also marked as having an error, the text will be displayed in red.
     */
    helperText: {
      type: String,
      default: ""
    },
    /**
     * Disable the input field
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies whether the input should have a pill form.
     * By default, input has rounded corners.
     */
    pill: {
      type: Boolean,
      default: false
    },
    /**
     * Class to add to the input field.
     * Necessary to use NcInputField in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:value",
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value",
    "trailing-button-click"
  ],
  setup() {
    const model = useModelMigration("value", "update:value", true);
    return {
      model
    };
  },
  computed: {
    computedId() {
      return this.$attrs.id && this.$attrs.id !== "" ? this.$attrs.id : this.inputName;
    },
    inputName() {
      return "input" + GenRandomId();
    },
    hasTrailingIcon() {
      return this.success;
    },
    hasPlaceholder() {
      return this.placeholder !== "" && this.placeholder !== void 0;
    },
    computedPlaceholder() {
      return this.hasPlaceholder ? this.placeholder : this.label;
    },
    isValidLabel() {
      const isValidLabel = this.label || this.labelOutside;
      if (!isValidLabel) {
        console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation.");
      }
      return isValidLabel;
    },
    ariaDescribedby() {
      const ariaDescribedby = [];
      if (this.helperText.length > 0) {
        ariaDescribedby.push(`${this.inputName}-helper-text`);
      }
      if (this.$attrs["aria-describedby"]) {
        ariaDescribedby.push(this.$attrs["aria-describedby"]);
      }
      return ariaDescribedby.join(" ") || null;
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.input.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.input.select();
    },
    handleInput(event) {
      const newValue = this.type === "number" && typeof this.model === "number" ? parseFloat(event.target.value, 10) : event.target.value;
      this.model = newValue;
    },
    handleTrailingButtonClick(event) {
      this.$emit("trailing-button-click", event);
    }
  }
};
var _sfc_render$4 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "input-field", class: {
    "input-field--disabled": _vm.disabled,
    "input-field--label-outside": _vm.labelOutside || !_vm.isValidLabel,
    "input-field--leading-icon": !!_vm.$scopedSlots.icon || !!_vm.$scopedSlots.default || !!_vm.$slots.default,
    "input-field--trailing-icon": _vm.showTrailingButton || _vm.hasTrailingIcon,
    "input-field--pill": _vm.pill
  } }, [_c("div", { staticClass: "input-field__main-wrapper" }, [_c("input", _vm._g(_vm._b({ ref: "input", staticClass: "input-field__input", class: [
    _vm.inputClass,
    {
      "input-field__input--success": _vm.success,
      "input-field__input--error": _vm.error
    }
  ], attrs: { "id": _vm.computedId, "type": _vm.type, "disabled": _vm.disabled, "placeholder": _vm.computedPlaceholder, "aria-describedby": _vm.ariaDescribedby, "aria-live": "polite" }, domProps: { "value": _vm.model?.toString() }, on: { "input": _vm.handleInput } }, "input", _vm.$attrs, false), _vm.$listeners)), !_vm.labelOutside && _vm.isValidLabel ? _c("label", { staticClass: "input-field__label", attrs: { "for": _vm.computedId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e(), _c("div", { directives: [{ name: "show", rawName: "v-show", value: !!_vm.$scopedSlots.icon || !!_vm.$scopedSlots.default || !!_vm.$slots.default, expression: "!!$scopedSlots.icon || !!$scopedSlots.default || !!$slots.default" }], staticClass: "input-field__icon input-field__icon--leading" }, [_vm._t("icon", function() {
    return [_vm._t("default")];
  })], 2), _vm.showTrailingButton ? _c("NcButton", { staticClass: "input-field__trailing-button", attrs: { "aria-label": _vm.trailingButtonLabel, "disabled": _vm.disabled, "variant": "tertiary-no-background" }, on: { "click": _vm.handleTrailingButtonClick }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("trailing-button-icon")];
  }, proxy: true }], null, true) }) : _vm.success || _vm.error ? _c("div", { staticClass: "input-field__icon input-field__icon--trailing" }, [_vm.success ? _c("Check", { staticStyle: { "color": "var(--color-success-text)" }, attrs: { "size": 20 } }) : _vm.error ? _c("AlertCircle", { staticStyle: { "color": "var(--color-error-text)" }, attrs: { "size": 20 } }) : _vm._e()], 1) : _vm._e()], 1), _vm.helperText.length > 0 ? _c("p", { staticClass: "input-field__helper-text-message", class: {
    "input-field__helper-text-message--error": _vm.error,
    "input-field__helper-text-message--success": _vm.success
  }, attrs: { "id": `${_vm.inputName}-helper-text` } }, [_vm.success ? _c("Check", { staticClass: "input-field__helper-text-message__icon", attrs: { "size": 18 } }) : _vm.error ? _c("AlertCircle", { staticClass: "input-field__helper-text-message__icon", attrs: { "size": 18 } }) : _vm._e(), _vm._v(" " + _vm._s(_vm.helperText) + " ")], 1) : _vm._e()]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  "8f3abf17"
);
const NcInputField = __component__$4.exports;
const _sfc_main$3 = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$3 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon close-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const Close = __component__$3.exports;
const _sfc_main$2 = {
  name: "ArrowRightIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$2 = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon arrow-right-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const ArrowRight = __component__$2.exports;
const v = (n2, e, o) => {
  var c;
  const i = Object.assign({
    ocsVersion: 2
  }, {}).ocsVersion === 1 ? 1 : 2;
  return ((c = void 0) != null ? c : w()) + "/ocs/v" + i + ".php" + u(n2, e);
}, u = (n2, e, o) => {
  const c = Object.assign({
    escape: true
  }, {}), r = function(i, s) {
    return s = s || {}, i.replace(
      /{([^{}]*)}/g,
      function(l, t2) {
        const a = s[t2];
        return c.escape ? encodeURIComponent(typeof a == "string" || typeof a == "number" ? a.toString() : l) : typeof a == "string" || typeof a == "number" ? a.toString() : l;
      }
    );
  };
  return n2.charAt(0) !== "/" && (n2 = "/" + n2), r(n2, e || {});
}, _ = (n2, e, o) => {
  var c, r, i;
  const s = Object.assign({
    noRewrite: false
  }, {}), l = (c = void 0) != null ? c : f();
  return ((i = (r = window == null ? void 0 : window.OC) == null ? void 0 : r.config) == null ? void 0 : i.modRewriteWorking) === true && !s.noRewrite ? l + u(n2, e) : l + "/index.php" + u(n2, e);
}, w = () => window.location.protocol + "//" + window.location.host + f();
function f() {
  let n2 = window._oc_webroot;
  if (typeof n2 > "u") {
    n2 = location.pathname;
    const e = n2.indexOf("/index.php/");
    if (e !== -1)
      n2 = n2.slice(0, e);
    else {
      const o = n2.indexOf("/", 1);
      n2 = n2.slice(0, o > 0 ? o : void 0);
    }
  }
  return n2;
}
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf: getPrototypeOf$1,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set2, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set2, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set2[element] = true;
  }
  return set2;
}
function cleanArray(array) {
  for (let index2 = 0; index2 < array.length; index2++) {
    const isPropertyExist = objectHasOwnProperty(array, index2);
    if (!isPropertyExist) {
      array[index2] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf$1(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR
});
const NODE_TYPE = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
const _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.2.5";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document: document2
  } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove2 = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks2 = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName2 = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName2 === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName2 === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName2]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName2 === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName2 === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName2]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName2] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName2] || !ALL_SVG_TAGS[tagName2]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove2(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_2) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_2) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches2 = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches2 && matches2[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(value) {
    return typeof Node === "function" && value instanceof Node;
  };
  function _executeHooks(hooks3, currentNode, data) {
    arrayForEach(hooks3, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks2.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName2 = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks2.uponSanitizeElement, currentNode, {
      tagName: tagName2,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName2] || FORBID_TAGS[tagName2]) {
      if (!FORBID_TAGS[tagName2] && _isBasicCustomElement(tagName2)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName2)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName2)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName2]) {
        const parentNode2 = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode2) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode2.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName2 === "noscript" || tagName2 === "noembed" || tagName2 === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks2.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName2) {
    return tagName2 !== "annotation-xml" && stringMatch(tagName2, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks2.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l = attributes.length;
    while (l--) {
      const attr = attributes[l];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      let value = name === "value" ? attrValue : stringTrim(attrValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks2.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
        } else {
          arrayPop(DOMPurify.removed);
        }
      } catch (_2) {
      }
    }
    _executeHooks(hooks2.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks2.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks2.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks2.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName2 = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName2] || FORBID_TAGS[tagName2]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks2[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index2 = arrayLastIndexOf(hooks2[entryPoint], hookFunction);
      return index2 === -1 ? void 0 : arraySplice(hooks2[entryPoint], index2, 1)[0];
    }
    return arrayPop(hooks2[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks2[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks2 = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var escapeHtml_1;
var hasRequiredEscapeHtml;
function requireEscapeHtml() {
  if (hasRequiredEscapeHtml) return escapeHtml_1;
  hasRequiredEscapeHtml = 1;
  var matchHtmlRegExp = /["'&<>]/;
  escapeHtml_1 = escapeHtml;
  function escapeHtml(string) {
    var str = "" + string;
    var match = matchHtmlRegExp.exec(str);
    if (!match) {
      return str;
    }
    var escape;
    var html2 = "";
    var index2 = 0;
    var lastIndex = 0;
    for (index2 = match.index; index2 < str.length; index2++) {
      switch (str.charCodeAt(index2)) {
        case 34:
          escape = "&quot;";
          break;
        case 38:
          escape = "&amp;";
          break;
        case 39:
          escape = "&#39;";
          break;
        case 60:
          escape = "&lt;";
          break;
        case 62:
          escape = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index2) {
        html2 += str.substring(lastIndex, index2);
      }
      lastIndex = index2 + 1;
      html2 += escape;
    }
    return lastIndex !== index2 ? html2 + str.substring(lastIndex, index2) : html2;
  }
  return escapeHtml_1;
}
var escapeHtmlExports = requireEscapeHtml();
const escapeHTML = /* @__PURE__ */ getDefaultExportFromCjs$1(escapeHtmlExports);
function getLanguage() {
  return document.documentElement.lang || "en";
}
function isRTL(language) {
  const languageCode = getLanguage();
  const rtlLanguages = [
    /* eslint-disable no-multi-spaces */
    "ae",
    // Avestan
    "ar",
    // 'العربية', Arabic
    "arc",
    // Aramaic
    "arz",
    // 'مصرى', Egyptian
    "bcc",
    // 'بلوچی مکرانی', Southern Balochi
    "bqi",
    // 'بختياري', Bakthiari
    "ckb",
    // 'Soranî / کوردی', Sorani
    "dv",
    // Dhivehi
    "fa",
    // 'فارسی', Persian
    "glk",
    // 'گیلکی', Gilaki
    "ha",
    // 'هَوُسَ', Hausa
    "he",
    // 'עברית', Hebrew
    "khw",
    // 'کھوار', Khowar
    "ks",
    // 'कॉशुर / کٲشُر', Kashmiri
    "ku",
    // 'Kurdî / كوردی', Kurdish
    "mzn",
    // 'مازِرونی', Mazanderani
    "nqo",
    // 'ߒߞߏ', N’Ko
    "pnb",
    // 'پنجابی', Western Punjabi
    "ps",
    // 'پښتو', Pashto,
    "sd",
    // 'سنڌي', Sindhi
    "ug",
    // 'Uyghurche / ئۇيغۇرچە', Uyghur
    "ur",
    // 'اردو', Urdu
    "ur-PK",
    // 'اردو', Urdu (nextcloud BCP47 variant)
    "uz-AF",
    // 'اوزبیکی', Uzbek Afghan
    "yi"
    // 'ייִדיש', Yiddish
    /* eslint-enable no-multi-spaces */
  ];
  return rtlLanguages.includes(languageCode);
}
function getAppTranslations(appId) {
  return {
    translations: window._oc_l10n_registry_translations?.[appId] ?? {},
    pluralFunction: window._oc_l10n_registry_plural_functions?.[appId] ?? ((number) => number)
  };
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function translate(app, text2, placeholdersOrNumber, optionsOrNumber, options) {
  const vars = typeof placeholdersOrNumber === "object" ? placeholdersOrNumber : void 0;
  const number = typeof optionsOrNumber === "number" ? optionsOrNumber : typeof placeholdersOrNumber === "number" ? placeholdersOrNumber : void 0;
  const allOptions = {
    // defaults
    escape: true,
    sanitize: true,
    // overwrite with user config
    ...typeof options === "object" ? options : typeof optionsOrNumber === "object" ? optionsOrNumber : {}
  };
  const identity2 = (value) => value;
  const optSanitize = allOptions.sanitize ? purify.sanitize : identity2;
  const optEscape = allOptions.escape ? escapeHTML : identity2;
  const isValidReplacement = (value) => typeof value === "string" || typeof value === "number";
  const _build = (text22, vars2, number2) => {
    return text22.replace(/%n/g, "" + number2).replace(/{([^{}]*)}/g, (match, key) => {
      if (vars2 === void 0 || !(key in vars2)) {
        return optEscape(match);
      }
      const replacement = vars2[key];
      if (isValidReplacement(replacement)) {
        return optEscape(`${replacement}`);
      } else if (typeof replacement === "object" && isValidReplacement(replacement.value)) {
        const escape = replacement.escape !== false ? escapeHTML : identity2;
        return escape(`${replacement.value}`);
      } else {
        return optEscape(match);
      }
    });
  };
  const bundle = options?.bundle ?? getAppTranslations(app);
  let translation = bundle.translations[text2] || text2;
  translation = Array.isArray(translation) ? translation[0] : translation;
  if (typeof vars === "object" || number !== void 0) {
    return optSanitize(_build(
      translation,
      vars,
      number
    ));
  } else {
    return optSanitize(translation);
  }
}
function translatePlural(app, textSingular, textPlural, number, vars, options) {
  const identifier = "_" + textSingular + "_::_" + textPlural + "_";
  const bundle = options?.bundle ?? getAppTranslations(app);
  const value = bundle.translations[identifier];
  if (typeof value !== "undefined") {
    const translation = value;
    if (Array.isArray(translation)) {
      const plural = bundle.pluralFunction(number);
      return translate(app, translation[plural], vars, number, options);
    }
  }
  if (number === 1) {
    return translate(app, textSingular, vars, number, options);
  } else {
    return translate(app, textPlural, vars, number, options);
  }
}
function getPlural(number, language = getLanguage()) {
  if (language === "pt-BR") {
    language = "xbr";
  }
  if (language.length > 3) {
    language = language.substring(0, language.lastIndexOf("-"));
  }
  switch (language) {
    case "az":
    case "bo":
    case "dz":
    case "id":
    case "ja":
    case "jv":
    case "ka":
    case "km":
    case "kn":
    case "ko":
    case "ms":
    case "th":
    case "tr":
    case "vi":
    case "zh":
      return 0;
    case "af":
    case "bn":
    case "bg":
    case "ca":
    case "da":
    case "de":
    case "el":
    case "en":
    case "eo":
    case "es":
    case "et":
    case "eu":
    case "fa":
    case "fi":
    case "fo":
    case "fur":
    case "fy":
    case "gl":
    case "gu":
    case "ha":
    case "he":
    case "hu":
    case "is":
    case "it":
    case "ku":
    case "lb":
    case "ml":
    case "mn":
    case "mr":
    case "nah":
    case "nb":
    case "ne":
    case "nl":
    case "nn":
    case "no":
    case "oc":
    case "om":
    case "or":
    case "pa":
    case "pap":
    case "ps":
    case "pt":
    case "so":
    case "sq":
    case "sv":
    case "sw":
    case "ta":
    case "te":
    case "tk":
    case "ur":
    case "zu":
      return number === 1 ? 0 : 1;
    case "am":
    case "bh":
    case "fil":
    case "fr":
    case "gun":
    case "hi":
    case "hy":
    case "ln":
    case "mg":
    case "nso":
    case "xbr":
    case "ti":
    case "wa":
      return number === 0 || number === 1 ? 0 : 1;
    case "be":
    case "bs":
    case "hr":
    case "ru":
    case "sh":
    case "sr":
    case "uk":
      return number % 10 === 1 && number % 100 !== 11 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2;
    case "cs":
    case "sk":
      return number === 1 ? 0 : number >= 2 && number <= 4 ? 1 : 2;
    case "ga":
      return number === 1 ? 0 : number === 2 ? 1 : 2;
    case "lt":
      return number % 10 === 1 && number % 100 !== 11 ? 0 : number % 10 >= 2 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2;
    case "sl":
      return number % 100 === 1 ? 0 : number % 100 === 2 ? 1 : number % 100 === 3 || number % 100 === 4 ? 2 : 3;
    case "mk":
      return number % 10 === 1 ? 0 : 1;
    case "mt":
      return number === 1 ? 0 : number === 0 || number % 100 > 1 && number % 100 < 11 ? 1 : number % 100 > 10 && number % 100 < 20 ? 2 : 3;
    case "lv":
      return number === 0 ? 0 : number % 10 === 1 && number % 100 !== 11 ? 1 : 2;
    case "pl":
      return number === 1 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 12 || number % 100 > 14) ? 1 : 2;
    case "cy":
      return number === 1 ? 0 : number === 2 ? 1 : number === 8 || number === 11 ? 2 : 3;
    case "ro":
      return number === 1 ? 0 : number === 0 || number % 100 > 0 && number % 100 < 20 ? 1 : 2;
    case "ar":
      return number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 && number % 100 <= 99 ? 4 : 5;
    default:
      return 0;
  }
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
class GettextBuilder {
  debug = false;
  language = "en";
  translations = {};
  setLanguage(language) {
    this.language = language;
    return this;
  }
  /**
   * Try to detect locale from context with `en` as fallback value
   * This only works within a Nextcloud page context.
   *
   * @deprecated use `detectLanguage` instead.
   */
  detectLocale() {
    return this.detectLanguage();
  }
  /**
   * Try to detect locale from context with `en` as fallback value.
   * This only works within a Nextcloud page context.
   */
  detectLanguage() {
    return this.setLanguage(getLanguage().replace("-", "_"));
  }
  addTranslation(language, data) {
    this.translations[language] = data;
    return this;
  }
  enableDebugMode() {
    this.debug = true;
    return this;
  }
  build() {
    if (this.debug) {
      console.debug(`Creating gettext instance for language ${this.language}`);
    }
    const translations = Object.values(this.translations[this.language]?.translations[""] ?? {}).map(({ msgid, msgid_plural: msgidPlural, msgstr }) => {
      if (msgidPlural !== void 0) {
        return [`_${msgid}_::_${msgidPlural}_`, msgstr];
      }
      return [msgid, msgstr[0]];
    });
    const bundle = {
      pluralFunction: (n2) => getPlural(n2, this.language),
      translations: Object.fromEntries(translations)
    };
    return new GettextWrapper(bundle);
  }
}
class GettextWrapper {
  constructor(bundle) {
    this.bundle = bundle;
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(original, placeholders = {}) {
    return translate("", original, placeholders, void 0, { bundle: this.bundle });
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(singular, plural, count, placeholders = {}) {
    return translatePlural("", singular, plural, count, placeholders, { bundle: this.bundle });
  }
}
function getGettextBuilder() {
  return new GettextBuilder();
}
const builder = getGettextBuilder().setLanguage(getLanguage());
let gettext = builder.build();
const n = (...args) => gettext.ngettext(...args);
const t = (...args) => gettext.gettext(...args);
function register(...chunks) {
  for (const chunk of chunks) {
    if (!chunk.registered) {
      for (const { l: language, t: translations } of chunk) {
        if (language !== getLanguage() || !translations) {
          continue;
        }
        const decompressed = Object.fromEntries(
          Object.entries(translations).map(([id, value]) => [
            id,
            {
              msgid: id,
              msgid_plural: value.p,
              msgstr: value.v
            }
          ])
        );
        gettext = builder.addTranslation(getLanguage(), {
          translations: {
            "": {
              ...gettext.bundle.translations?.[""] ?? {},
              ...decompressed
            }
          }
        }).build();
      }
      chunk.registered = true;
    }
  }
}
const t3 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Acapulco": { "v": ["بازلائي مطفي"] }, "Blue Violet": { "v": ["بنفسجي مشعشع"] }, "Boston Blue": { "v": ["سماوي مطفي"] }, "Deluge": { "v": ["بنفسجي مطفي"] }, "Feldspar": { "v": ["وردي صخري"] }, "Gold": { "v": ["ذهبي"] }, "Mariner": { "v": ["أزرق بحري"] }, "Nextcloud blue": { "v": ["أزرق نكست كلاود"] }, "Olivine": { "v": ["زيتي"] }, "Purple": { "v": ["بنفسجي"] }, "Rosy brown": { "v": ["بُنِّي زهري"] }, "Whiskey": { "v": ["نبيذي"] } } }, { "l": "ast", "t": { "Acapulco": { "v": ["Acapulcu"] }, "Blue Violet": { "v": ["Viola azulao"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Oru"] }, "Mariner": { "v": ["Marineru"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Moráu"] }, "Rosy brown": { "v": ["Marrón arrosao"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Modrofialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živicová"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námořnická"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivínová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Růžovohnědá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "cs_CZ", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Modrofialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živicová"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námořnická"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivínová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Růžovohnědá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blue Violet"] }, "Boston Blue": { "v": ["Boston Blue"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Guld"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Lilla"] }, "Rosy brown": { "v": ["Rosy brown"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "de", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blau Violett"] }, "Boston Blue": { "v": ["Boston-Blau"] }, "Deluge": { "v": ["Sintflut"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Seemann"] }, "Nextcloud blue": { "v": ["Nextcloud Blau"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosiges Braun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "de_DE", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blau Violett"] }, "Boston Blue": { "v": ["Boston-Blau"] }, "Deluge": { "v": ["Sintflut"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Seemann"] }, "Nextcloud blue": { "v": ["Nextcloud Blau"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosiges Braun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "el", "t": { "Acapulco": { "v": ["Ακαπούλκο"] }, "Blue Violet": { "v": ["Μπλε Βιολέτ"] }, "Boston Blue": { "v": ["Μπλε Βοστώνης"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Χρυσό"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Μπλε Nextcloud"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Μωβ"] }, "Rosy brown": { "v": ["Ροζ καφέ"] }, "Whiskey": { "v": ["Ουίσκι"] } } }, { "l": "en_GB", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blue Violet"] }, "Boston Blue": { "v": ["Boston Blue"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Purple"] }, "Rosy brown": { "v": ["Rosy brown"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Oro"] }, "Mariner": { "v": ["Marinero"] }, "Nextcloud blue": { "v": ["Azul Nextcloud"] }, "Olivine": { "v": ["Olivino"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Marrón rosáceo"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "Acapulco": { "v": ["Acapulco meresinine"] }, "Blue Violet": { "v": ["Sinakasvioletne"] }, "Boston Blue": { "v": ["Bostoni rohekassinine"] }, "Deluge": { "v": ["Tulvavee lilla"] }, "Feldspar": { "v": ["Põlevkivipruun"] }, "Gold": { "v": ["Kuldne"] }, "Mariner": { "v": ["Meresinine"] }, "Nextcloud blue": { "v": ["Nextcloudi sinine"] }, "Olivine": { "v": ["Oliiviroheline"] }, "Purple": { "v": ["Purpurpunane"] }, "Rosy brown": { "v": ["Roosikarva pruun"] }, "Whiskey": { "v": ["Viskikarva kollakaspruun"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "Acapulco": { "v": ["آکاپولکو"] }, "Blue Violet": { "v": ["بنفش آبی"] }, "Boston Blue": { "v": ["آبی بوستونی"] }, "Deluge": { "v": ["سیل"] }, "Feldspar": { "v": ["فلدسپات"] }, "Gold": { "v": ["طلا"] }, "Mariner": { "v": ["مارینر"] }, "Nextcloud blue": { "v": ["نکس کلود آبی"] }, "Olivine": { "v": ["الیوین"] }, "Purple": { "v": ["بنفش"] }, "Rosy brown": { "v": ["قهوه‌ای رز"] }, "Whiskey": { "v": ["ویسکی"] } } }, { "l": "fi", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Sinivioletti"] }, "Boston Blue": { "v": ["Bostoninsininen"] }, "Deluge": { "v": ["Tulva"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Kulta"] }, "Mariner": { "v": ["Merenkulkija"] }, "Nextcloud blue": { "v": ["Nextcloudin sininen"] }, "Olivine": { "v": ["Oliviini"] }, "Purple": { "v": ["Purppura"] }, "Rosy brown": { "v": ["Ruusunruskea"] }, "Whiskey": { "v": ["Viski"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Bleu violet"] }, "Boston Blue": { "v": ["Bleu de Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Doré"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Bleu Nextcloud"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Violet"] }, "Rosy brown": { "v": ["Brun rosé"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "ga", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Gorm Violet"] }, "Boston Blue": { "v": ["Bostún Gorm"] }, "Deluge": { "v": ["Díle"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Óir"] }, "Mariner": { "v": ["Mairnéalach"] }, "Nextcloud blue": { "v": ["Nextcloud gorm"] }, "Olivine": { "v": ["Olaivín"] }, "Purple": { "v": ["Corcra"] }, "Rosy brown": { "v": ["Rosach donn"] }, "Whiskey": { "v": ["Fuisce"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Azul violeta"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Diluvio"] }, "Feldspar": { "v": ["Feldespato"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Marino"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Pardo rosado"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "Gold": { "v": ["Emas"] }, "Nextcloud blue": { "v": ["Biru Nextcloud"] }, "Purple": { "v": ["Ungu"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Bláklukka"] }, "Boston Blue": { "v": ["Bostonblátt"] }, "Deluge": { "v": ["Fjólublátt"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Gull"] }, "Mariner": { "v": ["Sjóarablátt"] }, "Nextcloud blue": { "v": ["Nextcloud blátt"] }, "Olivine": { "v": ["Ólivín"] }, "Purple": { "v": ["Purpurablátt"] }, "Rosy brown": { "v": ["Rósabrúnt"] }, "Whiskey": { "v": ["Viský"] } } }, { "l": "it", "t": { "Gold": { "v": ["Oro"] }, "Nextcloud blue": { "v": ["Nextcloud blue"] }, "Purple": { "v": ["Viola"] } } }, { "l": "ja", "t": { "Acapulco": { "v": ["アカプルコ"] }, "Blue Violet": { "v": ["ブルーバイオレット"] }, "Boston Blue": { "v": ["ボストンブルー"] }, "Deluge": { "v": ["豪雨"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["黄金"] }, "Mariner": { "v": ["船乗り"] }, "Nextcloud blue": { "v": ["ネクストクラウド・ブルー"] }, "Olivine": { "v": ["カンラン石"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["バラ色"] }, "Whiskey": { "v": ["ウイスキー"] } } }, { "l": "ja_JP", "t": { "Acapulco": { "v": ["アカプルコ"] }, "Blue Violet": { "v": ["ブルーバイオレット"] }, "Boston Blue": { "v": ["ボストンブルー"] }, "Deluge": { "v": ["豪雨"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["黄金"] }, "Mariner": { "v": ["船乗り"] }, "Nextcloud blue": { "v": ["ネクストクラウド・ブルー"] }, "Olivine": { "v": ["カンラン石"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["バラ色"] }, "Whiskey": { "v": ["ウイスキー"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "Acapulco": { "v": ["아카풀코"] }, "Blue Violet": { "v": ["푸른 보라"] }, "Boston Blue": { "v": ["보스턴 블루"] }, "Deluge": { "v": ["폭우"] }, "Feldspar": { "v": ["장석"] }, "Gold": { "v": ["금"] }, "Mariner": { "v": ["뱃사람"] }, "Nextcloud blue": { "v": ["Nextcloud 파랑"] }, "Olivine": { "v": ["감람석"] }, "Purple": { "v": ["보라"] }, "Rosy brown": { "v": ["로지 브라운"] }, "Whiskey": { "v": ["위스키"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blå fiolett"] }, "Boston Blue": { "v": ["Boston blå"] }, "Deluge": { "v": ["Syndflod"] }, "Feldspar": { "v": ["Feltspat"] }, "Gold": { "v": ["Gull"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud-blå"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lilla"] }, "Rosy brown": { "v": ["Rosenrød brun"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blauw Paars"] }, "Boston Blue": { "v": ["Boston Blauw"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Veldspaat"] }, "Gold": { "v": ["Goud"] }, "Mariner": { "v": ["Marine blauw"] }, "Nextcloud blue": { "v": ["Nextcloud blauw"] }, "Olivine": { "v": ["Olivijn"] }, "Purple": { "v": ["Paars"] }, "Rosy brown": { "v": ["Rozig bruin"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Niebieski fiolet"] }, "Boston Blue": { "v": ["Błękit Bostonu"] }, "Deluge": { "v": ["Potop"] }, "Feldspar": { "v": ["Skaleń"] }, "Gold": { "v": ["Złote"] }, "Mariner": { "v": ["Marynarz"] }, "Nextcloud blue": { "v": ["Niebieskie Nextcloud"] }, "Olivine": { "v": ["Oliwin"] }, "Purple": { "v": ["Fioletowy"] }, "Rosy brown": { "v": ["Różowy brąz"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Violeta Azul"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Dilúvio"] }, "Feldspar": { "v": ["Feldspato"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Marinheiro"] }, "Nextcloud blue": { "v": ["azul Nextcloud"] }, "Olivine": { "v": ["Olivina"] }, "Purple": { "v": ["Roxo"] }, "Rosy brown": { "v": ["Castanho rosado"] }, "Whiskey": { "v": ["Uísque"] } } }, { "l": "pt_PT", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Azul violeta"] }, "Boston Blue": { "v": ["Azul Boston"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Ouro"] }, "Mariner": { "v": ["Mariner"] }, "Nextcloud blue": { "v": ["Nextcloud azul"] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Púrpura"] }, "Rosy brown": { "v": ["Castanho rosado"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "ro", "t": { "Gold": { "v": ["Aur"] }, "Nextcloud blue": { "v": ["Nextcloud albastru"] }, "Purple": { "v": ["Purpuriu"] } } }, { "l": "ru", "t": { "Acapulco": { "v": ["Акапулько"] }, "Blue Violet": { "v": ["Синий фиолет"] }, "Boston Blue": { "v": ["Синий Бостон"] }, "Deluge": { "v": ["Перламутрово-фиолетовый"] }, "Feldspar": { "v": ["Античная латунь"] }, "Gold": { "v": ["Золотой"] }, "Mariner": { "v": ["Морской"] }, "Nextcloud blue": { "v": ["Nextcloud голубой"] }, "Olivine": { "v": [" Оливковый"] }, "Purple": { "v": ["Фиолетовый"] }, "Rosy brown": { "v": ["Розово-коричневый"] }, "Whiskey": { "v": ["Виски"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Modro fialová"] }, "Boston Blue": { "v": ["Bostonská modrá"] }, "Deluge": { "v": ["Deluge"] }, "Feldspar": { "v": ["Živec"] }, "Gold": { "v": ["Zlatá"] }, "Mariner": { "v": ["Námorník"] }, "Nextcloud blue": { "v": ["Nextcloud modrá"] }, "Olivine": { "v": ["Olivová"] }, "Purple": { "v": ["Fialová"] }, "Rosy brown": { "v": ["Ružovo hnedá"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Acapulco": { "v": ["Акапулко"] }, "Blue Violet": { "v": ["Плаво љубичаста"] }, "Boston Blue": { "v": ["Бостон плава"] }, "Deluge": { "v": ["Поплава"] }, "Feldspar": { "v": ["Фелдспар"] }, "Gold": { "v": ["Злато"] }, "Mariner": { "v": ["Морнар"] }, "Nextcloud blue": { "v": ["Nextcloud плава"] }, "Olivine": { "v": ["Маслинаста"] }, "Purple": { "v": ["Пурпурна"] }, "Rosy brown": { "v": ["Роси браон"] }, "Whiskey": { "v": ["Виски"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["Blåviolett"] }, "Boston Blue": { "v": ["Bostonblå"] }, "Deluge": { "v": ["Skyfallsblå"] }, "Feldspar": { "v": ["Feldspat"] }, "Gold": { "v": ["Guld"] }, "Mariner": { "v": ["Marinblå"] }, "Nextcloud blue": { "v": ["Nextcloud-blå"] }, "Olivine": { "v": ["Olivin"] }, "Purple": { "v": ["Lila"] }, "Rosy brown": { "v": ["Rosabrun"] }, "Whiskey": { "v": ["Whisky"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Mavi mor"] }, "Boston Blue": { "v": ["Boston mavisi"] }, "Deluge": { "v": ["Sel"] }, "Feldspar": { "v": ["Feldispat"] }, "Gold": { "v": ["Altın"] }, "Mariner": { "v": ["Denizci"] }, "Nextcloud blue": { "v": ["Nextcloud mavi"] }, "Olivine": { "v": ["Zeytinlik"] }, "Purple": { "v": ["Mor"] }, "Rosy brown": { "v": ["Kırmızımsı kahverengi"] }, "Whiskey": { "v": ["Viski"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Acapulco": { "v": ["Акапулько"] }, "Blue Violet": { "v": ["Блакитна фіалка"] }, "Boston Blue": { "v": ["Бостонський синій"] }, "Deluge": { "v": ["Злива"] }, "Feldspar": { "v": ["Польові шпати"] }, "Gold": { "v": ["Золотий"] }, "Mariner": { "v": ["Морський"] }, "Nextcloud blue": { "v": ["Блакитний Nextcloud"] }, "Olivine": { "v": ["Олива"] }, "Purple": { "v": ["Фіолетовий"] }, "Rosy brown": { "v": ["Темно-рожевий"] }, "Whiskey": { "v": ["Кола"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "Acapulco": { "v": ["Akapulko"] }, "Blue Violet": { "v": ["Moviy binafsha"] }, "Boston Blue": { "v": ["Boston ko'k"] }, "Deluge": { "v": ["To'fon"] }, "Feldspar": { "v": ["Feldspar"] }, "Gold": { "v": ["Oltin"] }, "Mariner": { "v": ["Dengizchi"] }, "Nextcloud blue": { "v": ["Ko'k Nextcloud "] }, "Olivine": { "v": ["Olivine"] }, "Purple": { "v": ["Binafsha"] }, "Rosy brown": { "v": ["Qizil jigarrang"] }, "Whiskey": { "v": ["Whiskey"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "Acapulco": { "v": ["Acapulco"] }, "Blue Violet": { "v": ["瓦罗兰特蓝"] }, "Boston Blue": { "v": ["波士顿蓝"] }, "Deluge": { "v": ["洪水色"] }, "Feldspar": { "v": ["长石"] }, "Gold": { "v": ["金色"] }, "Mariner": { "v": ["水手"] }, "Nextcloud blue": { "v": ["Nextcloud 蓝"] }, "Olivine": { "v": ["橄榄石色"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["玫瑰棕色"] }, "Whiskey": { "v": ["威士忌"] } } }, { "l": "zh_HK", "t": { "Acapulco": { "v": ["阿卡普爾科"] }, "Blue Violet": { "v": ["藍紫色"] }, "Boston Blue": { "v": ["波士頓藍"] }, "Deluge": { "v": ["大洪水"] }, "Feldspar": { "v": ["長石"] }, "Gold": { "v": ["Gold"] }, "Mariner": { "v": ["海軍藍"] }, "Nextcloud blue": { "v": ["Nextcloud 藍色"] }, "Olivine": { "v": ["橄欖石色"] }, "Purple": { "v": ["紫色"] }, "Rosy brown": { "v": ["玫瑰棕色"] }, "Whiskey": { "v": ["威士忌"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t4 = [{ "l": "af", "t": { "Actions": { "v": [""] } } }, { "l": "ar", "t": { "Actions": { "v": ["إجراءات"] } } }, { "l": "ast", "t": { "Actions": { "v": ["Aiciones"] } } }, { "l": "az", "t": { "Actions": { "v": [""] } } }, { "l": "be", "t": { "Actions": { "v": [""] } } }, { "l": "bg", "t": { "Actions": { "v": [""] } } }, { "l": "bn_BD", "t": { "Actions": { "v": [""] } } }, { "l": "br", "t": { "Actions": { "v": ["Oberioù"] } } }, { "l": "bs", "t": { "Actions": { "v": [""] } } }, { "l": "ca", "t": { "Actions": { "v": ["Accions"] } } }, { "l": "cs", "t": { "Actions": { "v": ["Akce"] } } }, { "l": "cs_CZ", "t": { "Actions": { "v": ["Akce"] } } }, { "l": "cy_GB", "t": { "Actions": { "v": [""] } } }, { "l": "da", "t": { "Actions": { "v": ["Handlinger"] } } }, { "l": "de", "t": { "Actions": { "v": ["Aktionen"] } } }, { "l": "de_DE", "t": { "Actions": { "v": ["Aktionen"] } } }, { "l": "el", "t": { "Actions": { "v": ["Ενέργειες"] } } }, { "l": "en_GB", "t": { "Actions": { "v": ["Actions"] } } }, { "l": "eo", "t": { "Actions": { "v": ["Agoj"] } } }, { "l": "es", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_419", "t": { "Actions": { "v": [""] } } }, { "l": "es_AR", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_CL", "t": { "Actions": { "v": [""] } } }, { "l": "es_CO", "t": { "Actions": { "v": [""] } } }, { "l": "es_CR", "t": { "Actions": { "v": [""] } } }, { "l": "es_DO", "t": { "Actions": { "v": [""] } } }, { "l": "es_EC", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_GT", "t": { "Actions": { "v": [""] } } }, { "l": "es_HN", "t": { "Actions": { "v": [""] } } }, { "l": "es_MX", "t": { "Actions": { "v": ["Acciones"] } } }, { "l": "es_NI", "t": { "Actions": { "v": [""] } } }, { "l": "es_PA", "t": { "Actions": { "v": [""] } } }, { "l": "es_PE", "t": { "Actions": { "v": [""] } } }, { "l": "es_PR", "t": { "Actions": { "v": [""] } } }, { "l": "es_PY", "t": { "Actions": { "v": [""] } } }, { "l": "es_SV", "t": { "Actions": { "v": [""] } } }, { "l": "es_UY", "t": { "Actions": { "v": [""] } } }, { "l": "et_EE", "t": { "Actions": { "v": ["Tegevus"] } } }, { "l": "eu", "t": { "Actions": { "v": ["Ekintzak"] } } }, { "l": "fa", "t": { "Actions": { "v": ["کنش‌ها"] } } }, { "l": "fi", "t": { "Actions": { "v": ["Toiminnot"] } } }, { "l": "fo", "t": { "Actions": { "v": [""] } } }, { "l": "fr", "t": { "Actions": { "v": ["Actions"] } } }, { "l": "ga", "t": { "Actions": { "v": ["Gníomhartha"] } } }, { "l": "gd", "t": { "Actions": { "v": [""] } } }, { "l": "gl", "t": { "Actions": { "v": ["Accións"] } } }, { "l": "he", "t": { "Actions": { "v": ["פעולות"] } } }, { "l": "hi_IN", "t": { "Actions": { "v": [""] } } }, { "l": "hr", "t": { "Actions": { "v": [""] } } }, { "l": "hsb", "t": { "Actions": { "v": [""] } } }, { "l": "hu", "t": { "Actions": { "v": ["Műveletek"] } } }, { "l": "hy", "t": { "Actions": { "v": [""] } } }, { "l": "ia", "t": { "Actions": { "v": [""] } } }, { "l": "id", "t": { "Actions": { "v": ["Tindakan"] } } }, { "l": "ig", "t": { "Actions": { "v": [""] } } }, { "l": "is", "t": { "Actions": { "v": ["Aðgerðir"] } } }, { "l": "it", "t": { "Actions": { "v": ["Azioni"] } } }, { "l": "ja", "t": { "Actions": { "v": ["操作"] } } }, { "l": "ja_JP", "t": { "Actions": { "v": ["操作"] } } }, { "l": "ka", "t": { "Actions": { "v": [""] } } }, { "l": "ka_GE", "t": { "Actions": { "v": [""] } } }, { "l": "kab", "t": { "Actions": { "v": [""] } } }, { "l": "kk", "t": { "Actions": { "v": [""] } } }, { "l": "km", "t": { "Actions": { "v": [""] } } }, { "l": "kn", "t": { "Actions": { "v": [""] } } }, { "l": "ko", "t": { "Actions": { "v": ["동작"] } } }, { "l": "la", "t": { "Actions": { "v": [""] } } }, { "l": "lb", "t": { "Actions": { "v": [""] } } }, { "l": "lo", "t": { "Actions": { "v": [""] } } }, { "l": "lt_LT", "t": { "Actions": { "v": ["Veiksmai"] } } }, { "l": "lv", "t": { "Actions": { "v": [""] } } }, { "l": "mk", "t": { "Actions": { "v": ["Акции"] } } }, { "l": "mn", "t": { "Actions": { "v": [""] } } }, { "l": "mr", "t": { "Actions": { "v": [""] } } }, { "l": "ms_MY", "t": { "Actions": { "v": [""] } } }, { "l": "my", "t": { "Actions": { "v": ["လုပ်ဆောင်ချက်များ"] } } }, { "l": "nb", "t": { "Actions": { "v": ["Handlinger"] } } }, { "l": "ne", "t": { "Actions": { "v": [""] } } }, { "l": "nl", "t": { "Actions": { "v": ["Acties"] } } }, { "l": "nn_NO", "t": { "Actions": { "v": [""] } } }, { "l": "oc", "t": { "Actions": { "v": ["Accions"] } } }, { "l": "pl", "t": { "Actions": { "v": ["Działania"] } } }, { "l": "ps", "t": { "Actions": { "v": [""] } } }, { "l": "pt_BR", "t": { "Actions": { "v": ["Ações"] } } }, { "l": "pt_PT", "t": { "Actions": { "v": ["Ações"] } } }, { "l": "ro", "t": { "Actions": { "v": ["Acțiuni"] } } }, { "l": "ru", "t": { "Actions": { "v": ["Действия "] } } }, { "l": "sc", "t": { "Actions": { "v": [""] } } }, { "l": "si", "t": { "Actions": { "v": [""] } } }, { "l": "sk", "t": { "Actions": { "v": ["Akcie"] } } }, { "l": "sl", "t": { "Actions": { "v": ["Dejanja"] } } }, { "l": "sq", "t": { "Actions": { "v": [""] } } }, { "l": "sr", "t": { "Actions": { "v": ["Радње"] } } }, { "l": "sr@latin", "t": { "Actions": { "v": [""] } } }, { "l": "sv", "t": { "Actions": { "v": ["Åtgärder"] } } }, { "l": "sw", "t": { "Actions": { "v": [""] } } }, { "l": "ta", "t": { "Actions": { "v": [""] } } }, { "l": "th", "t": { "Actions": { "v": [""] } } }, { "l": "tk", "t": { "Actions": { "v": [""] } } }, { "l": "tr", "t": { "Actions": { "v": ["İşlemler"] } } }, { "l": "ug", "t": { "Actions": { "v": [""] } } }, { "l": "uk", "t": { "Actions": { "v": ["Дії"] } } }, { "l": "ur_PK", "t": { "Actions": { "v": [""] } } }, { "l": "uz", "t": { "Actions": { "v": ["Harakatlar"] } } }, { "l": "vi", "t": { "Actions": { "v": [""] } } }, { "l": "zh_CN", "t": { "Actions": { "v": ["行为"] } } }, { "l": "zh_HK", "t": { "Actions": { "v": ["動作"] } } }, { "l": "zh_TW", "t": { "Actions": { "v": ["動作"] } } }, { "l": "zu_ZA", "t": { "Actions": { "v": [""] } } }];
const t9 = [{ "l": "af", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ar", "t": { "Avatar of {displayName}": { "v": ["صورة الملف الشخصي الرمزية لــ {displayName}  "] }, "Avatar of {displayName}, {status}": { "v": ["صورة الملف الشخصي الرمزية لــ {displayName}، {status}"] } } }, { "l": "ast", "t": { "Avatar of {displayName}": { "v": ["Avatar de: {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de: {displayName}, {status}"] } } }, { "l": "az", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "be", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bg", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bn_BD", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "br", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "bs", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ca", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "cs", "t": { "Avatar of {displayName}": { "v": ["Zástupný obrázek uživatele {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Zástupný obrázek uživatele {displayName}, {status}"] } } }, { "l": "cs_CZ", "t": { "Avatar of {displayName}": { "v": ["Zástupný obrázek uživatele {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Zástupný obrázek uživatele {displayName}, {status}"] } } }, { "l": "cy_GB", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "da", "t": { "Avatar of {displayName}": { "v": ["Avatar af {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar af {displayName}, {status}"] } } }, { "l": "de", "t": { "Avatar of {displayName}": { "v": ["Avatar von {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar von {displayName}, {status}"] } } }, { "l": "de_DE", "t": { "Avatar of {displayName}": { "v": ["Avatar von {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar von {displayName}, {status}"] } } }, { "l": "el", "t": { "Avatar of {displayName}": { "v": ["Άβαταρ του {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Άβαταρ του {displayName}, {status}"] } } }, { "l": "en_GB", "t": { "Avatar of {displayName}": { "v": ["Avatar of {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar of {displayName}, {status}"] } } }, { "l": "eo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_419", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_AR", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_CL", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_CR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_DO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_EC", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_GT", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_HN", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_MX", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "es_NI", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PA", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PR", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_PY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_SV", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "es_UY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "et_EE", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "eu", "t": { "Avatar of {displayName}": { "v": ["{displayName}-(e)n irudia"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} -(e)n irudia, {status}"] } } }, { "l": "fa", "t": { "Avatar of {displayName}": { "v": ["آواتار {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["آواتار {displayName} ، {status}"] } } }, { "l": "fi", "t": { "Avatar of {displayName}": { "v": ["{displayName}n avatar"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}n avatar, {status}"] } } }, { "l": "fo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "fr", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "ga", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "gd", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "gl", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "he", "t": { "Avatar of {displayName}": { "v": ["תמונה ייצוגית של {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["תמונה ייצוגית של {displayName}, {status}"] } } }, { "l": "hi_IN", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hr", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hsb", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "hu", "t": { "Avatar of {displayName}": { "v": ["{displayName} profilképe"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} profilképe, {status}"] } } }, { "l": "hy", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ia", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "id", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "ig", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "is", "t": { "Avatar of {displayName}": { "v": ["Auðkennismynd fyrir {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Auðkennismynd fyrir {displayName}, {status}"] } } }, { "l": "it", "t": { "Avatar of {displayName}": { "v": ["Avatar di {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar di {displayName}, {status}"] } } }, { "l": "ja", "t": { "Avatar of {displayName}": { "v": ["{displayName} のアバター"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} のアバター"] } } }, { "l": "ja_JP", "t": { "Avatar of {displayName}": { "v": ["{displayName} のアバター"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} のアバター"] } } }, { "l": "ka", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ka_GE", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kab", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kk", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "km", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "kn", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ko", "t": { "Avatar of {displayName}": { "v": ["{displayName}님의 아바타"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status}님의 아바타"] } } }, { "l": "la", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lb", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lo", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lt_LT", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "lv", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "mk", "t": { "Avatar of {displayName}": { "v": ["Аватар на {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Аватар на {displayName}, {status}"] } } }, { "l": "mn", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "mr", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ms_MY", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "my", "t": { "Avatar of {displayName}": { "v": ["{displayName} ၏ ကိုယ်ပွား"] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "nb", "t": { "Avatar of {displayName}": { "v": ["Avataren til {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}'s avatar, {status}"] } } }, { "l": "ne", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "nl", "t": { "Avatar of {displayName}": { "v": ["Avatar van {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar van {displayName}, {status}"] } } }, { "l": "nn_NO", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "oc", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "pl", "t": { "Avatar of {displayName}": { "v": ["Awatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Awatar {displayName}, {status}"] } } }, { "l": "ps", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "pt_BR", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "pt_PT", "t": { "Avatar of {displayName}": { "v": ["Avatar de {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar de {displayName}, {status}"] } } }, { "l": "ro", "t": { "Avatar of {displayName}": { "v": ["Avatarul lui {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatarul lui {displayName}, {status}"] } } }, { "l": "ru", "t": { "Avatar of {displayName}": { "v": ["Аватар {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Фотография {displayName}, {status}"] } } }, { "l": "sc", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "si", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sk", "t": { "Avatar of {displayName}": { "v": ["Avatar {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar {displayName}, {status}"] } } }, { "l": "sl", "t": { "Avatar of {displayName}": { "v": ["Podoba {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Prikazna slika {displayName}, {status}"] } } }, { "l": "sq", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sr", "t": { "Avatar of {displayName}": { "v": ["Аватар за {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Avatar za {displayName}, {status}"] } } }, { "l": "sr@latin", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "sv", "t": { "Avatar of {displayName}": { "v": ["{displayName}s avatar"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}s avatar, {status}"] } } }, { "l": "sw", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "ta", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "th", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "tk", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "tr", "t": { "Avatar of {displayName}": { "v": ["{displayName} avatarı"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} avatarı"] } } }, { "l": "ug", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "uk", "t": { "Avatar of {displayName}": { "v": ["Аватар {displayName}"] }, "Avatar of {displayName}, {status}": { "v": ["Аватар {displayName}, {status}"] } } }, { "l": "ur_PK", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "uz", "t": { "Avatar of {displayName}": { "v": [" {displayName}Avatari"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} Avatari"] } } }, { "l": "vi", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }, { "l": "zh_CN", "t": { "Avatar of {displayName}": { "v": ["{displayName}的头像"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}的头像，{status}"] } } }, { "l": "zh_HK", "t": { "Avatar of {displayName}": { "v": ["{displayName} 的頭像"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName} 的頭像，{status}"] } } }, { "l": "zh_TW", "t": { "Avatar of {displayName}": { "v": ["{displayName} 的大頭照"] }, "Avatar of {displayName}, {status}": { "v": ["{displayName}, {status} 的大頭照"] } } }, { "l": "zu_ZA", "t": { "Avatar of {displayName}": { "v": [""] }, "Avatar of {displayName}, {status}": { "v": [""] } } }];
const t10 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "away": { "v": ["غير موجود"] }, "busy": { "v": ["مشغول"] }, "do not disturb": { "v": ["يُرجى عدم الإزعاج"] }, "invisible": { "v": ["غير مرئي"] }, "offline": { "v": ["غير متصل"] }, "online": { "v": ["متصل"] } } }, { "l": "ast", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupáu"] }, "do not disturb": { "v": ["nun molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["desconectáu"] }, "online": { "v": ["en llinia"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "away": { "v": ["pryč"] }, "busy": { "v": ["zaneprádněn(a)"] }, "do not disturb": { "v": ["nerušit"] }, "invisible": { "v": ["neviditelné"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "cs_CZ", "t": { "away": { "v": ["pryč"] }, "busy": { "v": ["zaneprádněn(a)"] }, "do not disturb": { "v": ["nerušit"] }, "invisible": { "v": ["neviditelné"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "away": { "v": ["væk"] }, "busy": { "v": ["optaget"] }, "do not disturb": { "v": ["forstyr ikke"] }, "invisible": { "v": ["usynlig"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "de", "t": { "away": { "v": ["Abwesend"] }, "busy": { "v": ["Beschäftigt"] }, "do not disturb": { "v": ["Bitte nicht stören"] }, "invisible": { "v": ["Unsichtbar"] }, "offline": { "v": ["Offline"] }, "online": { "v": ["Online"] } } }, { "l": "de_DE", "t": { "away": { "v": ["Abwesend"] }, "busy": { "v": ["Beschäftigt"] }, "do not disturb": { "v": ["Bitte nicht stören"] }, "invisible": { "v": ["Unsichtbar"] }, "offline": { "v": ["Offline"] }, "online": { "v": ["Online"] } } }, { "l": "el", "t": { "away": { "v": ["μακριά"] }, "busy": { "v": ["απασχολημένος"] }, "do not disturb": { "v": ["μην ενοχλείτε"] }, "invisible": { "v": ["αόρατο"] }, "offline": { "v": ["εκτός σύνδεσης"] }, "online": { "v": ["συνδεδεμένος"] } } }, { "l": "en_GB", "t": { "away": { "v": ["away"] }, "busy": { "v": ["busy"] }, "do not disturb": { "v": ["do not disturb"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["fuera de línea"] }, "online": { "v": ["en línea"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["desconectado"] }, "online": { "v": ["en línea"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["no molestar"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["fuera de línea"] }, "online": { "v": ["en línea"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "away": { "v": ["eemal"] }, "busy": { "v": ["hõivatud"] }, "do not disturb": { "v": ["ära sega"] }, "invisible": { "v": ["nähtamatu"] }, "offline": { "v": ["pole võrgus"] }, "online": { "v": ["võrgus"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "away": { "v": ["دور از دستگاه"] }, "busy": { "v": ["مشغول"] }, "do not disturb": { "v": ["مزاحم نشوید"] }, "invisible": { "v": ["مخفی"] }, "offline": { "v": ["برون‌خط"] }, "online": { "v": ["برخط"] } } }, { "l": "fi", "t": { "away": { "v": ["poissa"] }, "busy": { "v": ["varattu"] }, "do not disturb": { "v": ["älä häiritse"] }, "invisible": { "v": ["näkymätön"] }, "offline": { "v": ["ei linjalla"] }, "online": { "v": ["linjalla"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "away": { "v": ["absent"] }, "busy": { "v": ["occupé"] }, "do not disturb": { "v": ["ne pas déranger"] }, "invisible": { "v": ["invisible"] }, "offline": { "v": ["hors ligne"] }, "online": { "v": ["en ligne"] } } }, { "l": "ga", "t": { "away": { "v": ["ar shiúl"] }, "busy": { "v": ["gnóthach"] }, "do not disturb": { "v": ["ná cur as"] }, "invisible": { "v": ["dofheicthe"] }, "offline": { "v": ["as líne"] }, "online": { "v": ["ar líne"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["non molestar"] }, "invisible": { "v": ["invisíbel"] }, "offline": { "v": ["desconectado"] }, "online": { "v": ["conectado"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "away": { "v": ["tidak tersedia"] }, "do not disturb": { "v": ["jangan ganggu"] }, "offline": { "v": ["luring"] }, "online": { "v": ["daring"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "away": { "v": ["í burtu"] }, "busy": { "v": ["upptekin/n"] }, "do not disturb": { "v": ["ekki ónáða"] }, "invisible": { "v": ["ósýnilegt"] }, "offline": { "v": ["ónettengt"] }, "online": { "v": ["nettengt"] } } }, { "l": "it", "t": { "away": { "v": ["via"] }, "do not disturb": { "v": ["non disturbare"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ja", "t": { "away": { "v": ["離れる"] }, "busy": { "v": ["ビジー"] }, "do not disturb": { "v": ["邪魔をしないでください"] }, "invisible": { "v": ["不可視"] }, "offline": { "v": ["オフライン"] }, "online": { "v": ["オンライン"] } } }, { "l": "ja_JP", "t": { "away": { "v": ["離れる"] }, "busy": { "v": ["ビジー"] }, "do not disturb": { "v": ["邪魔をしないでください"] }, "invisible": { "v": ["不可視"] }, "offline": { "v": ["オフライン"] }, "online": { "v": ["オンライン"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "away": { "v": ["자리 비움"] }, "busy": { "v": ["바쁨"] }, "do not disturb": { "v": ["방해 금지"] }, "invisible": { "v": ["보이지 않음"] }, "offline": { "v": ["오프라인"] }, "online": { "v": ["온라인"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "away": { "v": ["borte"] }, "busy": { "v": ["opptatt"] }, "do not disturb": { "v": ["ikke forstyrr"] }, "invisible": { "v": ["usynlig"] }, "offline": { "v": ["frakoblet"] }, "online": { "v": ["tilkoblet"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "away": { "v": ["weg"] }, "busy": { "v": ["bezig"] }, "do not disturb": { "v": ["niet storen"] }, "invisible": { "v": ["Onzichtbaar"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "away": { "v": ["stąd"] }, "busy": { "v": ["zajęty"] }, "do not disturb": { "v": ["nie przeszkadzać"] }, "invisible": { "v": ["niewidzialny"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "away": { "v": ["ausente"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["não perturbe"] }, "invisible": { "v": ["invisível"] }, "offline": { "v": ["desligada"] }, "online": { "v": ["ligado"] } } }, { "l": "pt_PT", "t": { "away": { "v": ["longe"] }, "busy": { "v": ["ocupado"] }, "do not disturb": { "v": ["não incomodar"] }, "invisible": { "v": ["invisível"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "ro", "t": { "away": { "v": ["plecat"] }, "do not disturb": { "v": ["nu deranjați"] }, "offline": { "v": ["deconectat"] }, "online": { "v": ["online"] } } }, { "l": "ru", "t": { "away": { "v": ["отсутствие"] }, "busy": { "v": ["занятый"] }, "do not disturb": { "v": ["не беспокоить"] }, "invisible": { "v": ["невидимый"] }, "offline": { "v": ["офлайн"] }, "online": { "v": ["онлайн"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "away": { "v": ["neprítomný"] }, "busy": { "v": ["zaneprázdnený"] }, "do not disturb": { "v": ["nerušiť"] }, "invisible": { "v": ["neviditeľný"] }, "offline": { "v": ["Odpojený - offline"] }, "online": { "v": ["Pripojený - online"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "away": { "v": ["одсутан"] }, "busy": { "v": ["заузет"] }, "do not disturb": { "v": ["не узнемиравај"] }, "invisible": { "v": ["невидљиво"] }, "offline": { "v": ["ван мреже"] }, "online": { "v": ["на мрежи"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "away": { "v": ["borta"] }, "busy": { "v": ["upptagen"] }, "do not disturb": { "v": ["stör ej"] }, "invisible": { "v": ["osynlig"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "away": { "v": ["Uzakta"] }, "busy": { "v": ["meşgul"] }, "do not disturb": { "v": ["Rahatsız etmeyin"] }, "invisible": { "v": ["görünmez"] }, "offline": { "v": ["Çevrim dışı"] }, "online": { "v": ["Çevrim içi"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "away": { "v": ["відсутній"] }, "busy": { "v": ["зайнято"] }, "do not disturb": { "v": ["не турбувати"] }, "invisible": { "v": ["Невидимий"] }, "offline": { "v": ["не в мережі"] }, "online": { "v": ["в мережі"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "away": { "v": ["uzoqda"] }, "busy": { "v": ["band"] }, "do not disturb": { "v": ["bezovta qilmang"] }, "invisible": { "v": ["ko'rinmas"] }, "offline": { "v": ["offline"] }, "online": { "v": ["online"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "away": { "v": ["离开"] }, "busy": { "v": ["繁忙"] }, "do not disturb": { "v": ["请勿打扰"] }, "invisible": { "v": ["隐藏的"] }, "offline": { "v": ["离线"] }, "online": { "v": ["在线"] } } }, { "l": "zh_HK", "t": { "away": { "v": ["離開"] }, "busy": { "v": ["忙碌"] }, "do not disturb": { "v": ["請勿打擾"] }, "invisible": { "v": ["隐藏的"] }, "offline": { "v": ["離線"] }, "online": { "v": ["在線"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t15 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Clear selected": { "v": ["محو المحدّد"] }, "Deselect {option}": { "v": ["إلغاء تحديد {option}"] }, "Options": { "v": ["خيارات"] } } }, { "l": "ast", "t": { "Clear selected": { "v": ["Borrar lo seleicionao"] }, "Deselect {option}": { "v": ["Deseleicionar «{option}»"] }, "Options": { "v": ["Opciones"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "Clear selected": { "v": ["Vyčistit vybrané"] }, "Deselect {option}": { "v": ["Zrušit výběr {option}"] }, "Options": { "v": ["Možnosti"] } } }, { "l": "cs_CZ", "t": { "Clear selected": { "v": ["Vyčistit vybrané"] }, "Deselect {option}": { "v": ["Zrušit výběr {option}"] }, "Options": { "v": ["Možnosti"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "Clear selected": { "v": ["Ryd valgt"] }, "Deselect {option}": { "v": ["Fravælg {option}"] }, "Options": { "v": ["Indstillinger"] } } }, { "l": "de", "t": { "Clear selected": { "v": ["Auswahl leeren"] }, "Deselect {option}": { "v": ["{option} abwählen"] }, "Options": { "v": ["Optionen"] } } }, { "l": "de_DE", "t": { "Clear selected": { "v": ["Auswahl leeren"] }, "Deselect {option}": { "v": ["{option} abwählen"] }, "Options": { "v": ["Optionen"] } } }, { "l": "el", "t": { "Clear selected": { "v": ["Εκκαθάριση επιλογής"] }, "Deselect {option}": { "v": ["Αποεπιλογή {option}"] }, "Options": { "v": ["Επιλογές"] } } }, { "l": "en_GB", "t": { "Clear selected": { "v": ["Clear selected"] }, "Deselect {option}": { "v": ["Deselect {option}"] }, "Options": { "v": ["Options"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "Clear selected": { "v": ["Limpiar selección"] }, "Deselect {option}": { "v": ["Deseleccionar {option}"] }, "Options": { "v": ["Opciones"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "Clear selected": { "v": ["Tühjenad valik"] }, "Deselect {option}": { "v": ["Eemalda {option} valik"] }, "Options": { "v": ["Valikud"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "Clear selected": { "v": ["پاک کردن مورد انتخاب شده"] }, "Deselect {option}": { "v": ["لغو انتخاب {option}"] }, "Options": { "v": ["گزینه‌ها"] } } }, { "l": "fi", "t": { "Clear selected": { "v": ["Tyhjennä valitut"] }, "Deselect {option}": { "v": ["Poista valinta {option}"] }, "Options": { "v": ["Valinnat"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Clear selected": { "v": ["Vider la sélection"] }, "Deselect {option}": { "v": ["Désélectionner {option}"] }, "Options": { "v": ["Options"] } } }, { "l": "ga", "t": { "Clear selected": { "v": ["Glan roghnaithe"] }, "Deselect {option}": { "v": ["Díroghnaigh {option}"] }, "Options": { "v": ["Roghanna"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Clear selected": { "v": ["Limpar o seleccionado"] }, "Deselect {option}": { "v": ["Desmarcar {opción}"] }, "Options": { "v": ["Opcións"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "Clear selected": { "v": ["Hapus terpilih"] }, "Deselect {option}": { "v": ["Batalkan pemilihan {option}"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Clear selected": { "v": ["Hreinsa valið"] }, "Deselect {option}": { "v": ["Afvelja {option}"] }, "Options": { "v": ["Valkostir"] } } }, { "l": "it", "t": { "Clear selected": { "v": ["Cancella selezionati"] }, "Deselect {option}": { "v": ["Deselezionare {option}"] } } }, { "l": "ja", "t": { "Clear selected": { "v": ["選択を解除"] }, "Deselect {option}": { "v": ["{option} の選択を解除"] }, "Options": { "v": ["オプション"] } } }, { "l": "ja_JP", "t": { "Clear selected": { "v": ["選択を解除"] }, "Deselect {option}": { "v": ["{option} の選択を解除"] }, "Options": { "v": ["オプション"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "Clear selected": { "v": ["선택 항목 지우기"] }, "Deselect {option}": { "v": ["{option} 선택 해제"] }, "Options": { "v": ["옵션"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "Clear selected": { "v": ["Tøm merket"] }, "Deselect {option}": { "v": ["Opphev valg {option}"] }, "Options": { "v": ["Alternativer"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "Clear selected": { "v": ["Selectie wissen"] }, "Deselect {option}": { "v": ["Deselecteer {optie}"] }, "Options": { "v": ["Opties"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Clear selected": { "v": ["Wyczyść wybrane"] }, "Deselect {option}": { "v": ["Odznacz {option}"] }, "Options": { "v": ["Opcje"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Clear selected": { "v": ["Limpar selecionados"] }, "Deselect {option}": { "v": ["Desmacar {option}"] }, "Options": { "v": ["Opções"] } } }, { "l": "pt_PT", "t": { "Clear selected": { "v": ["Limpeza selecionada"] }, "Deselect {option}": { "v": ["Desmarcar {option}"] }, "Options": { "v": ["Opções"] } } }, { "l": "ro", "t": { "Clear selected": { "v": ["Șterge selecția"] }, "Deselect {option}": { "v": ["Deselctează {option}"] } } }, { "l": "ru", "t": { "Clear selected": { "v": ["Очистить выбранный"] }, "Deselect {option}": { "v": ["Отменить выбор {option}"] }, "Options": { "v": ["Варианты"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "Clear selected": { "v": ["Vymazať vybraté"] }, "Deselect {option}": { "v": ["Zrušiť výber {option}"] }, "Options": { "v": ["možnosti"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Clear selected": { "v": ["Обриши изабрано"] }, "Deselect {option}": { "v": ["Уклони избор {option}"] }, "Options": { "v": ["Опције"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Clear selected": { "v": ["Rensa val"] }, "Deselect {option}": { "v": ["Avmarkera {option}"] }, "Options": { "v": ["Alternativ"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Clear selected": { "v": ["Seçilmişleri temizle"] }, "Deselect {option}": { "v": ["{option} bırak"] }, "Options": { "v": ["Seçenekler"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Clear selected": { "v": ["Очистити вибране"] }, "Deselect {option}": { "v": ["Зняти вибір {option}"] }, "Options": { "v": ["Параметри"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "Clear selected": { "v": ["Tanlanganni tozalash"] }, "Deselect {option}": { "v": ["{option}tanlovni bekor qiling"] }, "Options": { "v": ["Variantlar"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "Clear selected": { "v": ["清除所选"] }, "Deselect {option}": { "v": ["取消选择 {option}"] }, "Options": { "v": ["选项"] } } }, { "l": "zh_HK", "t": { "Clear selected": { "v": ["清除所選項目"] }, "Deselect {option}": { "v": ["取消選擇 {option}"] }, "Options": { "v": ["選項"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t16 = [{ "l": "af", "t": { "Clear text": { "v": [""] } } }, { "l": "ar", "t": { "Clear text": { "v": ["محو النص"] }, "Save changes": { "v": ["حفظ التغييرات"] } } }, { "l": "ast", "t": { "Clear text": { "v": ["Borrar el testu"] }, "Save changes": { "v": ["Guardar los cambeos"] } } }, { "l": "az", "t": { "Clear text": { "v": [""] } } }, { "l": "be", "t": { "Clear text": { "v": [""] } } }, { "l": "bg", "t": { "Clear text": { "v": [""] } } }, { "l": "bn_BD", "t": { "Clear text": { "v": [""] } } }, { "l": "br", "t": { "Clear text": { "v": [""] } } }, { "l": "bs", "t": { "Clear text": { "v": [""] } } }, { "l": "ca", "t": { "Clear text": { "v": ["Netejar text"] } } }, { "l": "cs", "t": { "Clear text": { "v": ["Čitelný text"] }, "Save changes": { "v": ["Uložit změny"] } } }, { "l": "cs_CZ", "t": { "Clear text": { "v": ["Čitelný text"] }, "Save changes": { "v": ["Uložit změny"] } } }, { "l": "cy_GB", "t": { "Clear text": { "v": [""] } } }, { "l": "da", "t": { "Clear text": { "v": ["Ryd tekst"] }, "Save changes": { "v": ["Gem ændringer"] } } }, { "l": "de", "t": { "Clear text": { "v": ["Klartext"] }, "Save changes": { "v": ["Änderungen speichern"] } } }, { "l": "de_DE", "t": { "Clear text": { "v": ["Klartext"] }, "Save changes": { "v": ["Änderungen speichern"] } } }, { "l": "el", "t": { "Clear text": { "v": ["Εκκαθάριση κειμένου"] }, "Save changes": { "v": ["Αποθήκευση αλλαγών"] } } }, { "l": "en_GB", "t": { "Clear text": { "v": ["Clear text"] }, "Save changes": { "v": ["Save changes"] } } }, { "l": "eo", "t": { "Clear text": { "v": [""] } } }, { "l": "es", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_419", "t": { "Clear text": { "v": [""] } } }, { "l": "es_AR", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_CL", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CO", "t": { "Clear text": { "v": [""] } } }, { "l": "es_CR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_DO", "t": { "Clear text": { "v": [""] } } }, { "l": "es_EC", "t": { "Clear text": { "v": ["Limpiar texto"] } } }, { "l": "es_GT", "t": { "Clear text": { "v": [""] } } }, { "l": "es_HN", "t": { "Clear text": { "v": [""] } } }, { "l": "es_MX", "t": { "Clear text": { "v": ["Limpiar texto"] }, "Save changes": { "v": ["Guardar cambios"] } } }, { "l": "es_NI", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PA", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PE", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PR", "t": { "Clear text": { "v": [""] } } }, { "l": "es_PY", "t": { "Clear text": { "v": [""] } } }, { "l": "es_SV", "t": { "Clear text": { "v": [""] } } }, { "l": "es_UY", "t": { "Clear text": { "v": [""] } } }, { "l": "et_EE", "t": { "Clear text": { "v": ["Kustuta tekst"] }, "Save changes": { "v": ["Salvesta muudatused"] } } }, { "l": "eu", "t": { "Clear text": { "v": ["Garbitu testua"] } } }, { "l": "fa", "t": { "Clear text": { "v": ["پاک کردن متن"] }, "Save changes": { "v": ["ذخیرهٔ تغییرات"] } } }, { "l": "fi", "t": { "Clear text": { "v": ["Tyhjennä teksti"] }, "Save changes": { "v": ["Tallenna muutokset"] } } }, { "l": "fo", "t": { "Clear text": { "v": [""] } } }, { "l": "fr", "t": { "Clear text": { "v": ["Effacer le texte"] }, "Save changes": { "v": ["Sauvegarder les changements"] } } }, { "l": "ga", "t": { "Clear text": { "v": ["Glan téacs"] }, "Save changes": { "v": ["Sabháil na hathruithe"] } } }, { "l": "gd", "t": { "Clear text": { "v": [""] } } }, { "l": "gl", "t": { "Clear text": { "v": ["Limpar o texto"] }, "Save changes": { "v": ["Gardar os cambios"] } } }, { "l": "he", "t": { "Clear text": { "v": ["פינוי טקסט"] } } }, { "l": "hi_IN", "t": { "Clear text": { "v": [""] } } }, { "l": "hr", "t": { "Clear text": { "v": [""] } } }, { "l": "hsb", "t": { "Clear text": { "v": [""] } } }, { "l": "hu", "t": { "Clear text": { "v": ["Szöveg törlése"] } } }, { "l": "hy", "t": { "Clear text": { "v": [""] } } }, { "l": "ia", "t": { "Clear text": { "v": [""] } } }, { "l": "id", "t": { "Clear text": { "v": ["Bersihkan teks"] }, "Save changes": { "v": ["Simpan perubahan"] } } }, { "l": "ig", "t": { "Clear text": { "v": [""] } } }, { "l": "is", "t": { "Clear text": { "v": ["Hreinsa texta"] }, "Save changes": { "v": ["Vista breytingar"] } } }, { "l": "it", "t": { "Clear text": { "v": ["Cancella il testo"] }, "Save changes": { "v": ["Salva le modifiche"] } } }, { "l": "ja", "t": { "Clear text": { "v": ["テキストをクリア"] }, "Save changes": { "v": ["変更を保存"] } } }, { "l": "ja_JP", "t": { "Clear text": { "v": ["テキストをクリア"] }, "Save changes": { "v": ["変更を保存"] } } }, { "l": "ka", "t": { "Clear text": { "v": [""] } } }, { "l": "ka_GE", "t": { "Clear text": { "v": [""] } } }, { "l": "kab", "t": { "Clear text": { "v": [""] } } }, { "l": "kk", "t": { "Clear text": { "v": [""] } } }, { "l": "km", "t": { "Clear text": { "v": [""] } } }, { "l": "kn", "t": { "Clear text": { "v": [""] } } }, { "l": "ko", "t": { "Clear text": { "v": ["텍스트 지우기"] }, "Save changes": { "v": ["변경 사항 저장"] } } }, { "l": "la", "t": { "Clear text": { "v": [""] } } }, { "l": "lb", "t": { "Clear text": { "v": [""] } } }, { "l": "lo", "t": { "Clear text": { "v": [""] } } }, { "l": "lt_LT", "t": { "Clear text": { "v": [""] } } }, { "l": "lv", "t": { "Clear text": { "v": [""] } } }, { "l": "mk", "t": { "Clear text": { "v": [""] } } }, { "l": "mn", "t": { "Clear text": { "v": [""] } } }, { "l": "mr", "t": { "Clear text": { "v": [""] } } }, { "l": "ms_MY", "t": { "Clear text": { "v": [""] } } }, { "l": "my", "t": { "Clear text": { "v": [""] } } }, { "l": "nb", "t": { "Clear text": { "v": ["Fjern tekst"] }, "Save changes": { "v": ["Lagre endringer"] } } }, { "l": "ne", "t": { "Clear text": { "v": [""] } } }, { "l": "nl", "t": { "Clear text": { "v": ["Wis tekst"] }, "Save changes": { "v": ["Wijzigingen opslaan"] } } }, { "l": "nn_NO", "t": { "Clear text": { "v": [""] } } }, { "l": "oc", "t": { "Clear text": { "v": [""] } } }, { "l": "pl", "t": { "Clear text": { "v": ["Wyczyść tekst"] }, "Save changes": { "v": ["Zapisz zmiany"] } } }, { "l": "ps", "t": { "Clear text": { "v": [""] } } }, { "l": "pt_BR", "t": { "Clear text": { "v": ["Limpar texto"] }, "Save changes": { "v": ["Salvar alterações"] } } }, { "l": "pt_PT", "t": { "Clear text": { "v": ["Limpar texto"] }, "Save changes": { "v": ["Gravar alterações"] } } }, { "l": "ro", "t": { "Clear text": { "v": ["Șterge textul"] }, "Save changes": { "v": ["Salvează modificările"] } } }, { "l": "ru", "t": { "Clear text": { "v": ["Очистить текст"] }, "Save changes": { "v": ["Сохранить изменения"] } } }, { "l": "sc", "t": { "Clear text": { "v": [""] } } }, { "l": "si", "t": { "Clear text": { "v": [""] } } }, { "l": "sk", "t": { "Clear text": { "v": ["Vamazať text"] }, "Save changes": { "v": ["Uložiť zmeny"] } } }, { "l": "sl", "t": { "Clear text": { "v": ["Počisti besedilo"] } } }, { "l": "sq", "t": { "Clear text": { "v": [""] } } }, { "l": "sr", "t": { "Clear text": { "v": ["Обриши текст"] }, "Save changes": { "v": ["Сачувај измене"] } } }, { "l": "sr@latin", "t": { "Clear text": { "v": [""] } } }, { "l": "sv", "t": { "Clear text": { "v": ["Ta bort text"] }, "Save changes": { "v": ["Spara ändringar"] } } }, { "l": "sw", "t": { "Clear text": { "v": [""] } } }, { "l": "ta", "t": { "Clear text": { "v": [""] } } }, { "l": "th", "t": { "Clear text": { "v": [""] } } }, { "l": "tk", "t": { "Clear text": { "v": [""] } } }, { "l": "tr", "t": { "Clear text": { "v": ["Metni temizle"] }, "Save changes": { "v": ["Değişiklikleri kaydet"] } } }, { "l": "ug", "t": { "Clear text": { "v": [""] } } }, { "l": "uk", "t": { "Clear text": { "v": ["Очистити текст"] }, "Save changes": { "v": ["Зберегти зміни"] } } }, { "l": "ur_PK", "t": { "Clear text": { "v": [""] } } }, { "l": "uz", "t": { "Clear text": { "v": ["Matnni tozalash"] }, "Save changes": { "v": ["O'zgarishlarni saqlang"] } } }, { "l": "vi", "t": { "Clear text": { "v": [""] } } }, { "l": "zh_CN", "t": { "Clear text": { "v": ["清除文本"] }, "Save changes": { "v": ["保存修改"] } } }, { "l": "zh_HK", "t": { "Clear text": { "v": ["清除文本"] }, "Save changes": { "v": ["保存更改"] } } }, { "l": "zh_TW", "t": { "Clear text": { "v": ["清除文字"] } } }, { "l": "zu_ZA", "t": { "Clear text": { "v": [""] } } }];
const t17 = [{ "l": "af", "t": { "Close": { "v": [""] } } }, { "l": "ar", "t": { "Close": { "v": ["إغلاق"] } } }, { "l": "ast", "t": { "Close": { "v": ["Zarrar"] } } }, { "l": "az", "t": { "Close": { "v": [""] } } }, { "l": "be", "t": { "Close": { "v": [""] } } }, { "l": "bg", "t": { "Close": { "v": [""] } } }, { "l": "bn_BD", "t": { "Close": { "v": [""] } } }, { "l": "br", "t": { "Close": { "v": ["Serriñ"] } } }, { "l": "bs", "t": { "Close": { "v": [""] } } }, { "l": "ca", "t": { "Close": { "v": ["Tanca"] } } }, { "l": "cs", "t": { "Close": { "v": ["Zavřít"] } } }, { "l": "cs_CZ", "t": { "Close": { "v": ["Zavřít"] } } }, { "l": "cy_GB", "t": { "Close": { "v": [""] } } }, { "l": "da", "t": { "Close": { "v": ["Luk"] } } }, { "l": "de", "t": { "Close": { "v": ["Schließen"] } } }, { "l": "de_DE", "t": { "Close": { "v": ["Schließen"] } } }, { "l": "el", "t": { "Close": { "v": ["Κλείσιμο"] } } }, { "l": "en_GB", "t": { "Close": { "v": ["Close"] } } }, { "l": "eo", "t": { "Close": { "v": ["Fermu"] } } }, { "l": "es", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_419", "t": { "Close": { "v": [""] } } }, { "l": "es_AR", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_CL", "t": { "Close": { "v": [""] } } }, { "l": "es_CO", "t": { "Close": { "v": [""] } } }, { "l": "es_CR", "t": { "Close": { "v": [""] } } }, { "l": "es_DO", "t": { "Close": { "v": [""] } } }, { "l": "es_EC", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_GT", "t": { "Close": { "v": [""] } } }, { "l": "es_HN", "t": { "Close": { "v": [""] } } }, { "l": "es_MX", "t": { "Close": { "v": ["Cerrar"] } } }, { "l": "es_NI", "t": { "Close": { "v": [""] } } }, { "l": "es_PA", "t": { "Close": { "v": [""] } } }, { "l": "es_PE", "t": { "Close": { "v": [""] } } }, { "l": "es_PR", "t": { "Close": { "v": [""] } } }, { "l": "es_PY", "t": { "Close": { "v": [""] } } }, { "l": "es_SV", "t": { "Close": { "v": [""] } } }, { "l": "es_UY", "t": { "Close": { "v": [""] } } }, { "l": "et_EE", "t": { "Close": { "v": ["Sulge"] } } }, { "l": "eu", "t": { "Close": { "v": ["Itxi"] } } }, { "l": "fa", "t": { "Close": { "v": ["بستن"] } } }, { "l": "fi", "t": { "Close": { "v": ["Sulje"] } } }, { "l": "fo", "t": { "Close": { "v": [""] } } }, { "l": "fr", "t": { "Close": { "v": ["Fermer"] } } }, { "l": "ga", "t": { "Close": { "v": ["Dún"] } } }, { "l": "gd", "t": { "Close": { "v": [""] } } }, { "l": "gl", "t": { "Close": { "v": ["Pechar"] } } }, { "l": "he", "t": { "Close": { "v": ["סגירה"] } } }, { "l": "hi_IN", "t": { "Close": { "v": [""] } } }, { "l": "hr", "t": { "Close": { "v": [""] } } }, { "l": "hsb", "t": { "Close": { "v": [""] } } }, { "l": "hu", "t": { "Close": { "v": ["Bezárás"] } } }, { "l": "hy", "t": { "Close": { "v": [""] } } }, { "l": "ia", "t": { "Close": { "v": [""] } } }, { "l": "id", "t": { "Close": { "v": ["Tutup"] } } }, { "l": "ig", "t": { "Close": { "v": [""] } } }, { "l": "is", "t": { "Close": { "v": ["Loka"] } } }, { "l": "it", "t": { "Close": { "v": ["Chiudi"] } } }, { "l": "ja", "t": { "Close": { "v": ["閉じる"] } } }, { "l": "ja_JP", "t": { "Close": { "v": ["閉じる"] } } }, { "l": "ka", "t": { "Close": { "v": [""] } } }, { "l": "ka_GE", "t": { "Close": { "v": [""] } } }, { "l": "kab", "t": { "Close": { "v": [""] } } }, { "l": "kk", "t": { "Close": { "v": [""] } } }, { "l": "km", "t": { "Close": { "v": [""] } } }, { "l": "kn", "t": { "Close": { "v": [""] } } }, { "l": "ko", "t": { "Close": { "v": ["닫기"] } } }, { "l": "la", "t": { "Close": { "v": [""] } } }, { "l": "lb", "t": { "Close": { "v": [""] } } }, { "l": "lo", "t": { "Close": { "v": [""] } } }, { "l": "lt_LT", "t": { "Close": { "v": ["Užverti"] } } }, { "l": "lv", "t": { "Close": { "v": ["Aizvērt"] } } }, { "l": "mk", "t": { "Close": { "v": ["Затвори"] } } }, { "l": "mn", "t": { "Close": { "v": [""] } } }, { "l": "mr", "t": { "Close": { "v": [""] } } }, { "l": "ms_MY", "t": { "Close": { "v": [""] } } }, { "l": "my", "t": { "Close": { "v": ["ပိတ်ရန်"] } } }, { "l": "nb", "t": { "Close": { "v": ["Lukk"] } } }, { "l": "ne", "t": { "Close": { "v": [""] } } }, { "l": "nl", "t": { "Close": { "v": ["Sluiten"] } } }, { "l": "nn_NO", "t": { "Close": { "v": [""] } } }, { "l": "oc", "t": { "Close": { "v": ["Tampar"] } } }, { "l": "pl", "t": { "Close": { "v": ["Zamknij"] } } }, { "l": "ps", "t": { "Close": { "v": [""] } } }, { "l": "pt_BR", "t": { "Close": { "v": ["Fechar"] } } }, { "l": "pt_PT", "t": { "Close": { "v": ["Fechar"] } } }, { "l": "ro", "t": { "Close": { "v": ["Închideți"] } } }, { "l": "ru", "t": { "Close": { "v": ["Закрыть"] } } }, { "l": "sc", "t": { "Close": { "v": [""] } } }, { "l": "si", "t": { "Close": { "v": [""] } } }, { "l": "sk", "t": { "Close": { "v": ["Zavrieť"] } } }, { "l": "sl", "t": { "Close": { "v": ["Zapri"] } } }, { "l": "sq", "t": { "Close": { "v": [""] } } }, { "l": "sr", "t": { "Close": { "v": ["Затвори"] } } }, { "l": "sr@latin", "t": { "Close": { "v": [""] } } }, { "l": "sv", "t": { "Close": { "v": ["Stäng"] } } }, { "l": "sw", "t": { "Close": { "v": [""] } } }, { "l": "ta", "t": { "Close": { "v": [""] } } }, { "l": "th", "t": { "Close": { "v": [""] } } }, { "l": "tk", "t": { "Close": { "v": [""] } } }, { "l": "tr", "t": { "Close": { "v": ["Kapat"] } } }, { "l": "ug", "t": { "Close": { "v": [""] } } }, { "l": "uk", "t": { "Close": { "v": ["Закрити"] } } }, { "l": "ur_PK", "t": { "Close": { "v": [""] } } }, { "l": "uz", "t": { "Close": { "v": ["Yopish"] } } }, { "l": "vi", "t": { "Close": { "v": [""] } } }, { "l": "zh_CN", "t": { "Close": { "v": ["关闭"] } } }, { "l": "zh_HK", "t": { "Close": { "v": ["關閉"] } } }, { "l": "zh_TW", "t": { "Close": { "v": ["關閉"] } } }, { "l": "zu_ZA", "t": { "Close": { "v": [""] } } }];
const t23 = [{ "l": "af", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ar", "t": { "External documentation for {name}": { "v": ["التوثيق الخارجي لـ {name}"] } } }, { "l": "ast", "t": { "External documentation for {name}": { "v": ["Documentación esterna pa: {name}"] } } }, { "l": "az", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "be", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bg", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bn_BD", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "br", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "bs", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ca", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "cs", "t": { "External documentation for {name}": { "v": ["Externí dokumentace pro {name}"] } } }, { "l": "cs_CZ", "t": { "External documentation for {name}": { "v": ["Externí dokumentace pro {name}"] } } }, { "l": "cy_GB", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "da", "t": { "External documentation for {name}": { "v": ["Ekstern dokumentation for {name}"] } } }, { "l": "de", "t": { "External documentation for {name}": { "v": ["Externe Dokumentation für {name}"] } } }, { "l": "de_DE", "t": { "External documentation for {name}": { "v": ["Externe Dokumentation für {name}"] } } }, { "l": "el", "t": { "External documentation for {name}": { "v": ["Εξωτερική τεκμηρίωση για {name}"] } } }, { "l": "en_GB", "t": { "External documentation for {name}": { "v": ["External documentation for {name}"] } } }, { "l": "eo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_419", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_AR", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_CL", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_CR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_DO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_EC", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_GT", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_HN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_MX", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "es_NI", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PA", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PR", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_PY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_SV", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "es_UY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "et_EE", "t": { "External documentation for {name}": { "v": ["Väline dokumentatsioon {nimi}"] } } }, { "l": "eu", "t": { "External documentation for {name}": { "v": ["{name}-ren kanpoko dokumentazioa"] } } }, { "l": "fa", "t": { "External documentation for {name}": { "v": ["اسناد بیرونی برای {name}"] } } }, { "l": "fi", "t": { "External documentation for {name}": { "v": ["Ulkoinen dokumentaatio {name}lle"] } } }, { "l": "fo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "fr", "t": { "External documentation for {name}": { "v": ["Documentation externe pour {name}"] } } }, { "l": "ga", "t": { "External documentation for {name}": { "v": ["Doiciméadúchán seachtrach le haghaidh {name}"] } } }, { "l": "gd", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "gl", "t": { "External documentation for {name}": { "v": ["Documentación externa para {name}"] } } }, { "l": "he", "t": { "External documentation for {name}": { "v": ["תיעוד חיצוני עבור {name}"] } } }, { "l": "hi_IN", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hr", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hsb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hu", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "hy", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ia", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "id", "t": { "External documentation for {name}": { "v": ["Dokumentasi eksternal untuk {name}"] } } }, { "l": "ig", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "is", "t": { "External documentation for {name}": { "v": ["Utanaðkomandi leiðbeiningar fyrir {name}"] } } }, { "l": "it", "t": { "External documentation for {name}": { "v": ["Documentazione esterna per {name}"] } } }, { "l": "ja", "t": { "External documentation for {name}": { "v": ["{name} の外部ドキュメント"] } } }, { "l": "ja_JP", "t": { "External documentation for {name}": { "v": ["{name} の外部ドキュメント"] } } }, { "l": "ka", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ka_GE", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kab", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "km", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "kn", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ko", "t": { "External documentation for {name}": { "v": ["{name}의 외부 문서"] } } }, { "l": "la", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lb", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lo", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lt_LT", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "lv", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mn", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "mr", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ms_MY", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "my", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "nb", "t": { "External documentation for {name}": { "v": ["Ekstern dokumentasjon for {name}"] } } }, { "l": "ne", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "nl", "t": { "External documentation for {name}": { "v": ["Externe documentatie voor {name}"] } } }, { "l": "nn_NO", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "oc", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "pl", "t": { "External documentation for {name}": { "v": ["Dokumentacja zewnętrzna dla {name}"] } } }, { "l": "ps", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "pt_BR", "t": { "External documentation for {name}": { "v": ["Documentação externa para {name}"] } } }, { "l": "pt_PT", "t": { "External documentation for {name}": { "v": ["Documentação externa para {name}"] } } }, { "l": "ro", "t": { "External documentation for {name}": { "v": ["Documentație externă pentru {name}"] } } }, { "l": "ru", "t": { "External documentation for {name}": { "v": ["Внешняя документация для {name}"] } } }, { "l": "sc", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "si", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sk", "t": { "External documentation for {name}": { "v": ["Externá dokumentácia pre {name}"] } } }, { "l": "sl", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sq", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sr", "t": { "External documentation for {name}": { "v": ["Спољна документација за {name}"] } } }, { "l": "sr@latin", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "sv", "t": { "External documentation for {name}": { "v": ["Extern dokumentation för {name}"] } } }, { "l": "sw", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "ta", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "th", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "tk", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "tr", "t": { "External documentation for {name}": { "v": ["{name} için dış belgeler"] } } }, { "l": "ug", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "uk", "t": { "External documentation for {name}": { "v": ["Зовнішня документація для {name}"] } } }, { "l": "ur_PK", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "uz", "t": { "External documentation for {name}": { "v": ["{name}uchun tashqi hujjatlar"] } } }, { "l": "vi", "t": { "External documentation for {name}": { "v": [""] } } }, { "l": "zh_CN", "t": { "External documentation for {name}": { "v": ["{name} 的外部文档"] } } }, { "l": "zh_HK", "t": { "External documentation for {name}": { "v": ["{name} 的外部文件"] } } }, { "l": "zh_TW", "t": { "External documentation for {name}": { "v": ["{name} 的外部文件"] } } }, { "l": "zu_ZA", "t": { "External documentation for {name}": { "v": [""] } } }];
const t27 = [{ "l": "af", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ar", "t": { "Hide password": { "v": ["إخفاء كلمة المرور"] }, "Password is secure": { "v": ["كلمة المرور آمنة"] }, "Show password": { "v": ["أظهِر كلمة المرور"] } } }, { "l": "ast", "t": { "Hide password": { "v": ["Anubrir la contraseña"] }, "Password is secure": { "v": ["La contraseña ye segura"] }, "Show password": { "v": ["Amosar la contraseña"] } } }, { "l": "az", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "be", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "bg", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "bn_BD", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "br", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "bs", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ca", "t": { "Hide password": { "v": ["Amagar contrasenya"] }, "Password is secure": { "v": ["Contrasenya segura<br>"] }, "Show password": { "v": ["Mostrar contrasenya"] } } }, { "l": "cs", "t": { "Hide password": { "v": ["Skrýt heslo"] }, "Password is secure": { "v": ["Heslo je bezpečné"] }, "Show password": { "v": ["Zobrazit heslo"] } } }, { "l": "cs_CZ", "t": { "Hide password": { "v": ["Skrýt heslo"] }, "Password is secure": { "v": ["Heslo je bezpečné"] }, "Show password": { "v": ["Zobrazit heslo"] } } }, { "l": "cy_GB", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "da", "t": { "Hide password": { "v": ["Skjul kodeord"] }, "Password is secure": { "v": ["Kodeordet er sikkert"] }, "Show password": { "v": ["Vis kodeord"] } } }, { "l": "de", "t": { "Hide password": { "v": ["Passwort verbergen"] }, "Password is secure": { "v": ["Passwort ist sicher"] }, "Show password": { "v": ["Passwort anzeigen"] } } }, { "l": "de_DE", "t": { "Hide password": { "v": ["Passwort verbergen"] }, "Password is secure": { "v": ["Passwort ist sicher"] }, "Show password": { "v": ["Passwort anzeigen"] } } }, { "l": "el", "t": { "Hide password": { "v": ["Απόκρυψη συνθηματικού"] }, "Password is secure": { "v": ["Το συνθηματικό είναι ασφαλές"] }, "Show password": { "v": ["Εμφάνιση κωδικού πρόσβασης"] } } }, { "l": "en_GB", "t": { "Hide password": { "v": ["Hide password"] }, "Password is secure": { "v": ["Password is secure"] }, "Show password": { "v": ["Show password"] } } }, { "l": "eo", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es", "t": { "Hide password": { "v": ["Ocultar contraseña"] }, "Password is secure": { "v": ["La contraseña es segura"] }, "Show password": { "v": ["Mostrar contraseña"] } } }, { "l": "es_419", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_AR", "t": { "Hide password": { "v": ["Ocultar contraseña"] }, "Password is secure": { "v": ["La contraseña es segura"] }, "Show password": { "v": ["Mostrar contraseña"] } } }, { "l": "es_CL", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_CO", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_CR", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_DO", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_EC", "t": { "Hide password": { "v": ["Ocultar contraseña"] }, "Password is secure": { "v": ["La contraseña es segura"] }, "Show password": { "v": ["Mostrar contraseña"] } } }, { "l": "es_GT", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_HN", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_MX", "t": { "Hide password": { "v": ["Ocultar contraseña"] }, "Password is secure": { "v": ["La contraseña es segura"] }, "Show password": { "v": ["Mostrar contraseña"] } } }, { "l": "es_NI", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PA", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PE", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PR", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_PY", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_SV", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "es_UY", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "et_EE", "t": { "Hide password": { "v": ["Peida salasõna"] }, "Password is secure": { "v": ["Salasõna on turvaline"] }, "Show password": { "v": ["Näita salasõna"] } } }, { "l": "eu", "t": { "Hide password": { "v": ["Ezkutatu pasahitza"] }, "Password is secure": { "v": ["Pasahitza segurua da"] }, "Show password": { "v": ["Erakutsi pasahitza"] } } }, { "l": "fa", "t": { "Hide password": { "v": ["پنهان کردن رمز عبور"] }, "Password is secure": { "v": ["گذرواژه امن است"] }, "Show password": { "v": ["نمایش گذرواژه"] } } }, { "l": "fi", "t": { "Hide password": { "v": ["Piilota salasana"] }, "Password is secure": { "v": ["Salasana on turvallinen"] }, "Show password": { "v": ["Näytä salasana"] } } }, { "l": "fo", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "fr", "t": { "Hide password": { "v": ["Cacher le mot de passe"] }, "Password is secure": { "v": ["Le mot de passe est sécurisé"] }, "Show password": { "v": ["Afficher le mot de passe"] } } }, { "l": "ga", "t": { "Hide password": { "v": ["Folaigh pasfhocal"] }, "Password is secure": { "v": ["Tá pasfhocal slán"] }, "Show password": { "v": ["Taispeáin pasfhocal"] } } }, { "l": "gd", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "gl", "t": { "Hide password": { "v": ["Agochar o contrasinal"] }, "Password is secure": { "v": ["O contrasinal é seguro"] }, "Show password": { "v": ["Amosar o contrasinal"] } } }, { "l": "he", "t": { "Hide password": { "v": ["הסתרת סיסמה"] }, "Password is secure": { "v": ["הסיסמה מאובטחת"] }, "Show password": { "v": ["הצגת סיסמה"] } } }, { "l": "hi_IN", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "hr", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "hsb", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "hu", "t": { "Hide password": { "v": ["Jelszó elrejtése"] }, "Password is secure": { "v": ["A jelszó biztonságos"] }, "Show password": { "v": ["Jelszó megjelenítése"] } } }, { "l": "hy", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ia", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "id", "t": { "Hide password": { "v": ["Sembunyikan sandi"] }, "Password is secure": { "v": ["Kata sandi sudah aman"] }, "Show password": { "v": ["Tampilkan sandi"] } } }, { "l": "ig", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "is", "t": { "Hide password": { "v": ["Fela lykilorð"] }, "Password is secure": { "v": ["Lykilorðið er öruggt"] }, "Show password": { "v": ["Birta lykilorð"] } } }, { "l": "it", "t": { "Hide password": { "v": ["Nascondi la password"] }, "Password is secure": { "v": ["La password è sicura"] }, "Show password": { "v": ["Mostra la password"] } } }, { "l": "ja", "t": { "Hide password": { "v": ["パスワードを非表示"] }, "Password is secure": { "v": ["パスワードは保護されています"] }, "Show password": { "v": ["パスワードを表示"] } } }, { "l": "ja_JP", "t": { "Hide password": { "v": ["パスワードを非表示"] }, "Password is secure": { "v": ["パスワードは保護されています"] }, "Show password": { "v": ["パスワードを表示"] } } }, { "l": "ka", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ka_GE", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "kab", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "kk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "km", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "kn", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ko", "t": { "Hide password": { "v": ["암호 숨기기"] }, "Password is secure": { "v": ["암호가 안전합니다."] }, "Show password": { "v": ["암호 표시"] } } }, { "l": "la", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lb", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lo", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lt_LT", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "lv", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "mk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "mn", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "mr", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ms_MY", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "my", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "nb", "t": { "Hide password": { "v": ["Skjul passord"] }, "Password is secure": { "v": ["Passordet er sikkert"] }, "Show password": { "v": ["Vis passord"] } } }, { "l": "ne", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "nl", "t": { "Hide password": { "v": ["Verberg wachtwoord"] }, "Password is secure": { "v": ["Wachtwoord is veilig"] }, "Show password": { "v": ["Toon wachtwoord"] } } }, { "l": "nn_NO", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "oc", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "pl", "t": { "Hide password": { "v": ["Ukryj hasło"] }, "Password is secure": { "v": ["Hasło jest bezpieczne"] }, "Show password": { "v": ["Pokaż hasło"] } } }, { "l": "ps", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "pt_BR", "t": { "Hide password": { "v": ["Ocultar senha"] }, "Password is secure": { "v": ["A senha é segura"] }, "Show password": { "v": ["Mostrar senha"] } } }, { "l": "pt_PT", "t": { "Hide password": { "v": ["Ocultar palavra-passe"] }, "Password is secure": { "v": ["A palavra-passe é segura"] }, "Show password": { "v": ["Mostrar palavra-passe"] } } }, { "l": "ro", "t": { "Hide password": { "v": ["Ascunde parola"] }, "Password is secure": { "v": ["Parola este sigură"] }, "Show password": { "v": ["Arată parola"] } } }, { "l": "ru", "t": { "Hide password": { "v": ["Скрыть пароль"] }, "Password is secure": { "v": ["Пароль надежный"] }, "Show password": { "v": ["Показать пароль"] } } }, { "l": "sc", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "si", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sk", "t": { "Hide password": { "v": ["Skryť heslo"] }, "Password is secure": { "v": ["Heslo je bezpečné"] }, "Show password": { "v": ["Zobraziť heslo"] } } }, { "l": "sl", "t": { "Hide password": { "v": ["Skrij geslo"] }, "Password is secure": { "v": ["Geslo je varno"] }, "Show password": { "v": ["Pokaži geslo"] } } }, { "l": "sq", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sr", "t": { "Hide password": { "v": ["Сакриј лозинку"] }, "Password is secure": { "v": ["Лозинка је безбедна"] }, "Show password": { "v": ["Прикажи лозинку"] } } }, { "l": "sr@latin", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "sv", "t": { "Hide password": { "v": ["Göm lösenordet"] }, "Password is secure": { "v": ["Lössenordet är säkert"] }, "Show password": { "v": ["Visa lössenordet"] } } }, { "l": "sw", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "ta", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "th", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "tk", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "tr", "t": { "Hide password": { "v": ["Parolayı gizle"] }, "Password is secure": { "v": ["Parola güvenli"] }, "Show password": { "v": ["Parolayı görüntüle"] } } }, { "l": "ug", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "uk", "t": { "Hide password": { "v": ["Приховати пароль"] }, "Password is secure": { "v": ["Пароль безпечний"] }, "Show password": { "v": ["Показати пароль"] } } }, { "l": "ur_PK", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "uz", "t": { "Hide password": { "v": ["Parolni yashirish"] }, "Password is secure": { "v": ["Parol xavfsiz"] }, "Show password": { "v": ["Parolni ko'rsatish"] } } }, { "l": "vi", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }, { "l": "zh_CN", "t": { "Hide password": { "v": ["隐藏密码"] }, "Password is secure": { "v": ["密码安全"] }, "Show password": { "v": ["显示密码"] } } }, { "l": "zh_HK", "t": { "Hide password": { "v": ["隱藏密碼"] }, "Password is secure": { "v": ["密碼是安全的"] }, "Show password": { "v": ["顯示密碼"] } } }, { "l": "zh_TW", "t": { "Hide password": { "v": ["隱藏密碼"] }, "Password is secure": { "v": ["密碼安全"] }, "Show password": { "v": ["顯示密碼"] } } }, { "l": "zu_ZA", "t": { "Hide password": { "v": [""] }, "Password is secure": { "v": [""] }, "Show password": { "v": [""] } } }];
const t30 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "Loading …": { "v": ["التحميل جارٍ ..."] } } }, { "l": "ast", "t": {} }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "Loading …": { "v": ["Načítání…"] } } }, { "l": "cs_CZ", "t": {} }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "Loading …": { "v": ["Indlæser…"] } } }, { "l": "de", "t": { "Loading …": { "v": ["Wird geladen …"] } } }, { "l": "de_DE", "t": { "Loading …": { "v": ["Wird geladen …"] } } }, { "l": "el", "t": { "Loading …": { "v": ["Φόρτωση …"] } } }, { "l": "en_GB", "t": { "Loading …": { "v": ["Loading …"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": {} }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": {} }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": {} }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "Loading …": { "v": ["Laadin…"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "Loading …": { "v": ["در حال بارگذاری ..."] } } }, { "l": "fi", "t": { "Loading …": { "v": ["Ladataan ..."] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "Loading …": { "v": ["Chargement …"] } } }, { "l": "ga", "t": { "Loading …": { "v": ["Á lódáil…"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "Loading …": { "v": ["Cargando…"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": {} }, { "l": "ig", "t": {} }, { "l": "is", "t": { "Loading …": { "v": ["Hleð inn …"] } } }, { "l": "it", "t": {} }, { "l": "ja", "t": { "Loading …": { "v": ["読み込み中 …"] } } }, { "l": "ja_JP", "t": {} }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "Loading …": { "v": ["불러오는 중..."] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "Loading …": { "v": ["Laster inn..."] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "Loading …": { "v": ["Laden ..."] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "Loading …": { "v": ["Wczytywanie…"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "Loading …": { "v": ["Carregando …"] } } }, { "l": "pt_PT", "t": { "Loading …": { "v": ["A carregar..."] } } }, { "l": "ro", "t": {} }, { "l": "ru", "t": { "Loading …": { "v": ["Загрузка ..."] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "Loading …": { "v": ["Nahrávam ..."] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "Loading …": { "v": ["Учитава се…"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "Loading …": { "v": ["Laddar ..."] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "Loading …": { "v": ["Yükleniyor…"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "Loading …": { "v": ["Завантаження ..."] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "Loading …": { "v": ["Yuklanmoqda..."] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "Loading …": { "v": ["加载中..."] } } }, { "l": "zh_HK", "t": { "Loading …": { "v": ["加載中 …"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const t33 = [{ "l": "af", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ar", "t": { "Next": { "v": ["التالي"] }, "Pause slideshow": { "v": ["تجميد عرض الشرائح"] }, "Previous": { "v": ["السابق"] }, "Start slideshow": { "v": ["إبدإ العرض"] } } }, { "l": "ast", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Posar la presentación de diapositives"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Aniciar la presentación de diapositives"] } } }, { "l": "az", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "be", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "bg", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "bn_BD", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "br", "t": { "Next": { "v": ["Da heul"] }, "Pause slideshow": { "v": ["Arsav an diaporama"] }, "Previous": { "v": ["A-raok"] }, "Start slideshow": { "v": ["Kregiñ an diaporama"] } } }, { "l": "bs", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ca", "t": { "Next": { "v": ["Següent"] }, "Pause slideshow": { "v": ["Atura la presentació"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Inicia la presentació"] } } }, { "l": "cs", "t": { "Next": { "v": ["Následující"] }, "Pause slideshow": { "v": ["Pozastavit prezentaci"] }, "Previous": { "v": ["Předchozí"] }, "Start slideshow": { "v": ["Spustit prezentaci"] } } }, { "l": "cs_CZ", "t": { "Next": { "v": ["Následující"] }, "Pause slideshow": { "v": ["Pozastavit prezentaci"] }, "Previous": { "v": ["Předchozí"] }, "Start slideshow": { "v": ["Spustit prezentaci"] } } }, { "l": "cy_GB", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "da", "t": { "Next": { "v": ["Videre"] }, "Pause slideshow": { "v": ["Suspender fremvisning"] }, "Previous": { "v": ["Forrige"] }, "Start slideshow": { "v": ["Start fremvisning"] } } }, { "l": "de", "t": { "Next": { "v": ["Weiter"] }, "Pause slideshow": { "v": ["Diashow pausieren"] }, "Previous": { "v": ["Vorherige"] }, "Start slideshow": { "v": ["Diashow starten"] } } }, { "l": "de_DE", "t": { "Next": { "v": ["Weiter"] }, "Pause slideshow": { "v": ["Diashow pausieren"] }, "Previous": { "v": ["Vorherige"] }, "Start slideshow": { "v": ["Diashow starten"] } } }, { "l": "el", "t": { "Next": { "v": ["Επόμενο"] }, "Pause slideshow": { "v": ["Παύση προβολής διαφανειών"] }, "Previous": { "v": ["Προηγούμενο"] }, "Start slideshow": { "v": ["Έναρξη προβολής διαφανειών"] } } }, { "l": "en_GB", "t": { "Next": { "v": ["Next"] }, "Pause slideshow": { "v": ["Pause slideshow"] }, "Previous": { "v": ["Previous"] }, "Start slideshow": { "v": ["Start slideshow"] } } }, { "l": "eo", "t": { "Next": { "v": ["Sekva"] }, "Pause slideshow": { "v": ["Payzi bildprezenton"] }, "Previous": { "v": ["Antaŭa"] }, "Start slideshow": { "v": ["Komenci bildprezenton"] } } }, { "l": "es", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar la presentación "] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar la presentación"] } } }, { "l": "es_419", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_AR", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar la presentación "] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar la presentación"] } } }, { "l": "es_CL", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_CR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_DO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_EC", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar presentación de diapositivas"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar presentación de diapositivas"] } } }, { "l": "es_GT", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_HN", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_MX", "t": { "Next": { "v": ["Siguiente"] }, "Pause slideshow": { "v": ["Pausar presentación de diapositivas"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar presentación de diapositivas"] } } }, { "l": "es_NI", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PA", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PR", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_PY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_SV", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "es_UY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "et_EE", "t": { "Next": { "v": ["Edasi"] }, "Pause slideshow": { "v": ["Slaidiesitluse paus"] }, "Previous": { "v": ["Eelmine"] }, "Start slideshow": { "v": ["Alusta slaidiesitust"] } } }, { "l": "eu", "t": { "Next": { "v": ["Hurrengoa"] }, "Pause slideshow": { "v": ["Pausatu diaporama"] }, "Previous": { "v": ["Aurrekoa"] }, "Start slideshow": { "v": ["Hasi diaporama"] } } }, { "l": "fa", "t": { "Next": { "v": ["بعدی"] }, "Pause slideshow": { "v": ["توقف نمایش اسلاید"] }, "Previous": { "v": ["قبلی"] }, "Start slideshow": { "v": ["شروع نمایش اسلاید"] } } }, { "l": "fi", "t": { "Next": { "v": ["Seuraava"] }, "Pause slideshow": { "v": ["Keskeytä diaesitys"] }, "Previous": { "v": ["Edellinen"] }, "Start slideshow": { "v": ["Aloita diaesitys"] } } }, { "l": "fo", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "fr", "t": { "Next": { "v": ["Suivant"] }, "Pause slideshow": { "v": ["Mettre le diaporama en pause"] }, "Previous": { "v": ["Précédent"] }, "Start slideshow": { "v": ["Démarrer le diaporama"] } } }, { "l": "ga", "t": { "Next": { "v": ["Ar aghaidh"] }, "Pause slideshow": { "v": ["Cuir taispeántas sleamhnán ar sos"] }, "Previous": { "v": ["Roimhe Seo"] }, "Start slideshow": { "v": ["Tosaigh taispeántas sleamhnán"] } } }, { "l": "gd", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "gl", "t": { "Next": { "v": ["Seguinte"] }, "Pause slideshow": { "v": ["Pausar o diaporama"] }, "Previous": { "v": ["Anterir"] }, "Start slideshow": { "v": ["Iniciar o diaporama"] } } }, { "l": "he", "t": { "Next": { "v": ["הבא"] }, "Pause slideshow": { "v": ["השהיית מצגת"] }, "Previous": { "v": ["הקודם"] }, "Start slideshow": { "v": ["התחלת המצגת"] } } }, { "l": "hi_IN", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hr", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hsb", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "hu", "t": { "Next": { "v": ["Következő"] }, "Pause slideshow": { "v": ["Diavetítés szüneteltetése"] }, "Previous": { "v": ["Előző"] }, "Start slideshow": { "v": ["Diavetítés indítása"] } } }, { "l": "hy", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ia", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "id", "t": { "Next": { "v": ["Selanjutnya"] }, "Pause slideshow": { "v": ["Jeda tayangan slide"] }, "Previous": { "v": ["Sebelumnya"] }, "Start slideshow": { "v": ["Mulai salindia"] } } }, { "l": "ig", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "is", "t": { "Next": { "v": ["Næsta"] }, "Pause slideshow": { "v": ["Gera hlé á skyggnusýningu"] }, "Previous": { "v": ["Fyrri"] }, "Start slideshow": { "v": ["Byrja skyggnusýningu"] } } }, { "l": "it", "t": { "Next": { "v": ["Successivo"] }, "Pause slideshow": { "v": ["Presentazione in pausa"] }, "Previous": { "v": ["Precedente"] }, "Start slideshow": { "v": ["Avvia presentazione"] } } }, { "l": "ja", "t": { "Next": { "v": ["次"] }, "Pause slideshow": { "v": ["スライドショーを一時停止"] }, "Previous": { "v": ["前"] }, "Start slideshow": { "v": ["スライドショーを開始"] } } }, { "l": "ja_JP", "t": { "Next": { "v": ["次"] }, "Pause slideshow": { "v": ["スライドショーを一時停止"] }, "Previous": { "v": ["前"] }, "Start slideshow": { "v": ["スライドショーを開始"] } } }, { "l": "ka", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ka_GE", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kab", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kk", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "km", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "kn", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ko", "t": { "Next": { "v": ["다음"] }, "Pause slideshow": { "v": ["슬라이드쇼 일시정지"] }, "Previous": { "v": ["이전"] }, "Start slideshow": { "v": ["슬라이드쇼 시작"] } } }, { "l": "la", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lb", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lo", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "lt_LT", "t": { "Next": { "v": ["Kitas"] }, "Pause slideshow": { "v": ["Pristabdyti skaidrių rodymą"] }, "Previous": { "v": ["Ankstesnis"] }, "Start slideshow": { "v": ["Pradėti skaidrių rodymą"] } } }, { "l": "lv", "t": { "Next": { "v": ["Nākamais"] }, "Pause slideshow": { "v": ["Pauzēt slaidrādi"] }, "Previous": { "v": ["Iepriekšējais"] }, "Start slideshow": { "v": ["Sākt slaidrādi"] } } }, { "l": "mk", "t": { "Next": { "v": ["Следно"] }, "Pause slideshow": { "v": ["Пузирај слајдшоу"] }, "Previous": { "v": ["Предходно"] }, "Start slideshow": { "v": ["Стартувај слајдшоу"] } } }, { "l": "mn", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "mr", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ms_MY", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "my", "t": { "Next": { "v": ["နောက်သို့ဆက်ရန်"] }, "Pause slideshow": { "v": ["စလိုက်ရှိုး ခေတ္တရပ်ရန်"] }, "Previous": { "v": ["ယခင်"] }, "Start slideshow": { "v": ["စလိုက်ရှိုးအား စတင်ရန်"] } } }, { "l": "nb", "t": { "Next": { "v": ["Neste"] }, "Pause slideshow": { "v": ["Pause lysbildefremvisning"] }, "Previous": { "v": ["Forrige"] }, "Start slideshow": { "v": ["Start lysbildefremvisning"] } } }, { "l": "ne", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "nl", "t": { "Next": { "v": ["Volgende"] }, "Pause slideshow": { "v": ["Pauzeer diavoorstelling"] }, "Previous": { "v": ["Vorige"] }, "Start slideshow": { "v": ["Start diavoorstelling"] } } }, { "l": "nn_NO", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "oc", "t": { "Next": { "v": ["Seguent"] }, "Pause slideshow": { "v": ["Metre en pausa lo diaporama"] }, "Previous": { "v": ["Precedent"] }, "Start slideshow": { "v": ["Lançar lo diaporama"] } } }, { "l": "pl", "t": { "Next": { "v": ["Następny"] }, "Pause slideshow": { "v": ["Wstrzymaj pokaz slajdów"] }, "Previous": { "v": ["Poprzedni"] }, "Start slideshow": { "v": ["Rozpocznij pokaz slajdów"] } } }, { "l": "ps", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "pt_BR", "t": { "Next": { "v": ["Próximo"] }, "Pause slideshow": { "v": ["Pausar apresentação de slides"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar apresentação de slides"] } } }, { "l": "pt_PT", "t": { "Next": { "v": ["Seguinte"] }, "Pause slideshow": { "v": ["Pausar diaporama"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Iniciar diaporama"] } } }, { "l": "ro", "t": { "Next": { "v": ["Următorul"] }, "Pause slideshow": { "v": ["Pauză prezentare de diapozitive"] }, "Previous": { "v": ["Anterior"] }, "Start slideshow": { "v": ["Începeți prezentarea de diapozitive"] } } }, { "l": "ru", "t": { "Next": { "v": ["Следующее"] }, "Pause slideshow": { "v": ["Приостановить показ слйдов"] }, "Previous": { "v": ["Предыдущее"] }, "Start slideshow": { "v": ["Начать показ слайдов"] } } }, { "l": "sc", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "si", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sk", "t": { "Next": { "v": ["Ďalej"] }, "Pause slideshow": { "v": ["Pozastaviť prezentáciu"] }, "Previous": { "v": ["Predchádzajúce"] }, "Start slideshow": { "v": ["Začať prezentáciu"] } } }, { "l": "sl", "t": { "Next": { "v": ["Naslednji"] }, "Pause slideshow": { "v": ["Ustavi predstavitev"] }, "Previous": { "v": ["Predhodni"] }, "Start slideshow": { "v": ["Začni predstavitev"] } } }, { "l": "sq", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sr", "t": { "Next": { "v": ["Следеће"] }, "Pause slideshow": { "v": ["Паузирај слајд шоу"] }, "Previous": { "v": ["Претходно"] }, "Start slideshow": { "v": ["Покрени слајд шоу"] } } }, { "l": "sr@latin", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "sv", "t": { "Next": { "v": ["Nästa"] }, "Pause slideshow": { "v": ["Pausa bildspelet"] }, "Previous": { "v": ["Föregående"] }, "Start slideshow": { "v": ["Starta bildspelet"] } } }, { "l": "sw", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "ta", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "th", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "tk", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "tr", "t": { "Next": { "v": ["Sonraki"] }, "Pause slideshow": { "v": ["Slayt sunumunu duraklat"] }, "Previous": { "v": ["Önceki"] }, "Start slideshow": { "v": ["Slayt sunumunu başlat"] } } }, { "l": "ug", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "uk", "t": { "Next": { "v": ["Вперед"] }, "Pause slideshow": { "v": ["Пауза у показі слайдів"] }, "Previous": { "v": ["Назад"] }, "Start slideshow": { "v": ["Почати показ слайдів"] } } }, { "l": "ur_PK", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "uz", "t": { "Next": { "v": ["Keyingi"] }, "Pause slideshow": { "v": ["Slayd-shouni to'xtatib turish"] }, "Previous": { "v": ["Oldingi"] }, "Start slideshow": { "v": ["Slayd-shouni boshlash"] } } }, { "l": "vi", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }, { "l": "zh_CN", "t": { "Next": { "v": ["下一个"] }, "Pause slideshow": { "v": ["暂停幻灯片"] }, "Previous": { "v": ["上一个"] }, "Start slideshow": { "v": ["开始幻灯片"] } } }, { "l": "zh_HK", "t": { "Next": { "v": ["下一個"] }, "Pause slideshow": { "v": ["暫停幻燈片"] }, "Previous": { "v": ["上一個"] }, "Start slideshow": { "v": ["開始幻燈片"] } } }, { "l": "zh_TW", "t": { "Next": { "v": ["下一個"] }, "Pause slideshow": { "v": ["暫停幻燈片"] }, "Previous": { "v": ["上一個"] }, "Start slideshow": { "v": ["開始幻燈片"] } } }, { "l": "zu_ZA", "t": { "Next": { "v": [""] }, "Pause slideshow": { "v": [""] }, "Previous": { "v": [""] }, "Start slideshow": { "v": [""] } } }];
const t35 = [{ "l": "af", "t": { "No results": { "v": [""] } } }, { "l": "ar", "t": { "No results": { "v": ["ليس هناك أية نتيجة"] } } }, { "l": "ast", "t": { "No results": { "v": ["Nun hai nengún resultáu"] } } }, { "l": "az", "t": { "No results": { "v": [""] } } }, { "l": "be", "t": { "No results": { "v": [""] } } }, { "l": "bg", "t": { "No results": { "v": [""] } } }, { "l": "bn_BD", "t": { "No results": { "v": [""] } } }, { "l": "br", "t": { "No results": { "v": ["Disoc'h ebet"] } } }, { "l": "bs", "t": { "No results": { "v": [""] } } }, { "l": "ca", "t": { "No results": { "v": ["Sense resultats"] } } }, { "l": "cs", "t": { "No results": { "v": ["Nic nenalezeno"] } } }, { "l": "cs_CZ", "t": { "No results": { "v": ["Nic nenalezeno"] } } }, { "l": "cy_GB", "t": { "No results": { "v": [""] } } }, { "l": "da", "t": { "No results": { "v": ["Ingen resultater"] } } }, { "l": "de", "t": { "No results": { "v": ["Keine Ergebnisse"] } } }, { "l": "de_DE", "t": { "No results": { "v": ["Keine Ergebnisse"] } } }, { "l": "el", "t": { "No results": { "v": ["Κανένα αποτέλεσμα"] } } }, { "l": "en_GB", "t": { "No results": { "v": ["No results"] } } }, { "l": "eo", "t": { "No results": { "v": ["La rezulto forestas"] } } }, { "l": "es", "t": { "No results": { "v": [" Ningún resultado"] } } }, { "l": "es_419", "t": { "No results": { "v": [""] } } }, { "l": "es_AR", "t": { "No results": { "v": ["Sin resultados"] } } }, { "l": "es_CL", "t": { "No results": { "v": [""] } } }, { "l": "es_CO", "t": { "No results": { "v": [""] } } }, { "l": "es_CR", "t": { "No results": { "v": [""] } } }, { "l": "es_DO", "t": { "No results": { "v": [""] } } }, { "l": "es_EC", "t": { "No results": { "v": ["Sin resultados"] } } }, { "l": "es_GT", "t": { "No results": { "v": [""] } } }, { "l": "es_HN", "t": { "No results": { "v": [""] } } }, { "l": "es_MX", "t": { "No results": { "v": ["Sin resultados"] } } }, { "l": "es_NI", "t": { "No results": { "v": [""] } } }, { "l": "es_PA", "t": { "No results": { "v": [""] } } }, { "l": "es_PE", "t": { "No results": { "v": [""] } } }, { "l": "es_PR", "t": { "No results": { "v": [""] } } }, { "l": "es_PY", "t": { "No results": { "v": [""] } } }, { "l": "es_SV", "t": { "No results": { "v": [""] } } }, { "l": "es_UY", "t": { "No results": { "v": [""] } } }, { "l": "et_EE", "t": { "No results": { "v": ["Tulemusi pole"] } } }, { "l": "eu", "t": { "No results": { "v": ["Emaitzarik ez"] } } }, { "l": "fa", "t": { "No results": { "v": ["بدون هیچ نتیجه‌ای"] } } }, { "l": "fi", "t": { "No results": { "v": ["Ei tuloksia"] } } }, { "l": "fo", "t": { "No results": { "v": [""] } } }, { "l": "fr", "t": { "No results": { "v": ["Aucun résultat"] } } }, { "l": "ga", "t": { "No results": { "v": ["Gan torthaí"] } } }, { "l": "gd", "t": { "No results": { "v": [""] } } }, { "l": "gl", "t": { "No results": { "v": ["Sen resultados"] } } }, { "l": "he", "t": { "No results": { "v": ["אין תוצאות"] } } }, { "l": "hi_IN", "t": { "No results": { "v": [""] } } }, { "l": "hr", "t": { "No results": { "v": [""] } } }, { "l": "hsb", "t": { "No results": { "v": [""] } } }, { "l": "hu", "t": { "No results": { "v": ["Nincs találat"] } } }, { "l": "hy", "t": { "No results": { "v": [""] } } }, { "l": "ia", "t": { "No results": { "v": [""] } } }, { "l": "id", "t": { "No results": { "v": ["Tidak ada hasil"] } } }, { "l": "ig", "t": { "No results": { "v": [""] } } }, { "l": "is", "t": { "No results": { "v": ["Engar niðurstöður"] } } }, { "l": "it", "t": { "No results": { "v": ["Nessun risultato"] } } }, { "l": "ja", "t": { "No results": { "v": ["結果無し"] } } }, { "l": "ja_JP", "t": { "No results": { "v": ["結果無し"] } } }, { "l": "ka", "t": { "No results": { "v": [""] } } }, { "l": "ka_GE", "t": { "No results": { "v": [""] } } }, { "l": "kab", "t": { "No results": { "v": [""] } } }, { "l": "kk", "t": { "No results": { "v": [""] } } }, { "l": "km", "t": { "No results": { "v": [""] } } }, { "l": "kn", "t": { "No results": { "v": [""] } } }, { "l": "ko", "t": { "No results": { "v": ["결과 없음"] } } }, { "l": "la", "t": { "No results": { "v": [""] } } }, { "l": "lb", "t": { "No results": { "v": [""] } } }, { "l": "lo", "t": { "No results": { "v": [""] } } }, { "l": "lt_LT", "t": { "No results": { "v": ["Nėra rezultatų"] } } }, { "l": "lv", "t": { "No results": { "v": ["Nav rezultātu"] } } }, { "l": "mk", "t": { "No results": { "v": ["Нема резултати"] } } }, { "l": "mn", "t": { "No results": { "v": [""] } } }, { "l": "mr", "t": { "No results": { "v": [""] } } }, { "l": "ms_MY", "t": { "No results": { "v": [""] } } }, { "l": "my", "t": { "No results": { "v": ["ရလဒ်မရှိပါ"] } } }, { "l": "nb", "t": { "No results": { "v": ["Ingen resultater"] } } }, { "l": "ne", "t": { "No results": { "v": [""] } } }, { "l": "nl", "t": { "No results": { "v": ["Geen resultaten"] } } }, { "l": "nn_NO", "t": { "No results": { "v": [""] } } }, { "l": "oc", "t": { "No results": { "v": ["Cap de resultat"] } } }, { "l": "pl", "t": { "No results": { "v": ["Brak wyników"] } } }, { "l": "ps", "t": { "No results": { "v": [""] } } }, { "l": "pt_BR", "t": { "No results": { "v": ["Sem resultados"] } } }, { "l": "pt_PT", "t": { "No results": { "v": ["Sem resultados"] } } }, { "l": "ro", "t": { "No results": { "v": ["Nu există rezultate"] } } }, { "l": "ru", "t": { "No results": { "v": ["Результаты отсуствуют"] } } }, { "l": "sc", "t": { "No results": { "v": [""] } } }, { "l": "si", "t": { "No results": { "v": [""] } } }, { "l": "sk", "t": { "No results": { "v": ["Žiadne výsledky"] } } }, { "l": "sl", "t": { "No results": { "v": ["Ni zadetkov"] } } }, { "l": "sq", "t": { "No results": { "v": [""] } } }, { "l": "sr", "t": { "No results": { "v": ["Нема резултата"] } } }, { "l": "sr@latin", "t": { "No results": { "v": [""] } } }, { "l": "sv", "t": { "No results": { "v": ["Inga resultat"] } } }, { "l": "sw", "t": { "No results": { "v": [""] } } }, { "l": "ta", "t": { "No results": { "v": [""] } } }, { "l": "th", "t": { "No results": { "v": [""] } } }, { "l": "tk", "t": { "No results": { "v": [""] } } }, { "l": "tr", "t": { "No results": { "v": ["Herhangi bir sonuç bulunamadı"] } } }, { "l": "ug", "t": { "No results": { "v": [""] } } }, { "l": "uk", "t": { "No results": { "v": ["Відсутні результати"] } } }, { "l": "ur_PK", "t": { "No results": { "v": [""] } } }, { "l": "uz", "t": { "No results": { "v": ["Natija yoʻq"] } } }, { "l": "vi", "t": { "No results": { "v": [""] } } }, { "l": "zh_CN", "t": { "No results": { "v": ["无结果"] } } }, { "l": "zh_HK", "t": { "No results": { "v": ["無結果"] } } }, { "l": "zh_TW", "t": { "No results": { "v": ["無結果"] } } }, { "l": "zu_ZA", "t": { "No results": { "v": [""] } } }];
const t49 = [{ "l": "af", "t": { "Undo changes": { "v": [""] } } }, { "l": "ar", "t": { "Undo changes": { "v": ["تراجَع عن التغييرات"] } } }, { "l": "ast", "t": { "Undo changes": { "v": ["Desfacer los cambeos"] } } }, { "l": "az", "t": { "Undo changes": { "v": [""] } } }, { "l": "be", "t": { "Undo changes": { "v": [""] } } }, { "l": "bg", "t": { "Undo changes": { "v": [""] } } }, { "l": "bn_BD", "t": { "Undo changes": { "v": [""] } } }, { "l": "br", "t": { "Undo changes": { "v": [""] } } }, { "l": "bs", "t": { "Undo changes": { "v": [""] } } }, { "l": "ca", "t": { "Undo changes": { "v": ["Desfés els canvis"] } } }, { "l": "cs", "t": { "Undo changes": { "v": ["Vzít změny zpět"] } } }, { "l": "cs_CZ", "t": { "Undo changes": { "v": ["Vzít změny zpět"] } } }, { "l": "cy_GB", "t": { "Undo changes": { "v": [""] } } }, { "l": "da", "t": { "Undo changes": { "v": ["Fortryd ændringer"] } } }, { "l": "de", "t": { "Undo changes": { "v": ["Änderungen rückgängig machen"] } } }, { "l": "de_DE", "t": { "Undo changes": { "v": ["Änderungen rückgängig machen"] } } }, { "l": "el", "t": { "Undo changes": { "v": ["Αναίρεση Αλλαγών"] } } }, { "l": "en_GB", "t": { "Undo changes": { "v": ["Undo changes"] } } }, { "l": "eo", "t": { "Undo changes": { "v": [""] } } }, { "l": "es", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_419", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_AR", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_CL", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CO", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_CR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_DO", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_EC", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_GT", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_HN", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_MX", "t": { "Undo changes": { "v": ["Deshacer cambios"] } } }, { "l": "es_NI", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PA", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PE", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PR", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_PY", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_SV", "t": { "Undo changes": { "v": [""] } } }, { "l": "es_UY", "t": { "Undo changes": { "v": [""] } } }, { "l": "et_EE", "t": { "Undo changes": { "v": ["Pööra muudatused tagasi"] } } }, { "l": "eu", "t": { "Undo changes": { "v": ["Aldaketak desegin"] } } }, { "l": "fa", "t": { "Undo changes": { "v": ["لغو تغییرات"] } } }, { "l": "fi", "t": { "Undo changes": { "v": ["Kumoa muutokset"] } } }, { "l": "fo", "t": { "Undo changes": { "v": [""] } } }, { "l": "fr", "t": { "Undo changes": { "v": ["Annuler les changements"] } } }, { "l": "ga", "t": { "Undo changes": { "v": ["Cealaigh athruithe"] } } }, { "l": "gd", "t": { "Undo changes": { "v": [""] } } }, { "l": "gl", "t": { "Undo changes": { "v": ["Desfacer os cambios"] } } }, { "l": "he", "t": { "Undo changes": { "v": ["ביטול שינויים"] } } }, { "l": "hi_IN", "t": { "Undo changes": { "v": [""] } } }, { "l": "hr", "t": { "Undo changes": { "v": [""] } } }, { "l": "hsb", "t": { "Undo changes": { "v": [""] } } }, { "l": "hu", "t": { "Undo changes": { "v": ["Változtatások visszavonása"] } } }, { "l": "hy", "t": { "Undo changes": { "v": [""] } } }, { "l": "ia", "t": { "Undo changes": { "v": [""] } } }, { "l": "id", "t": { "Undo changes": { "v": ["Urungkan perubahan"] } } }, { "l": "ig", "t": { "Undo changes": { "v": [""] } } }, { "l": "is", "t": { "Undo changes": { "v": ["Afturkalla breytingar"] } } }, { "l": "it", "t": { "Undo changes": { "v": ["Cancella i cambiamenti"] } } }, { "l": "ja", "t": { "Undo changes": { "v": ["変更を取り消し"] } } }, { "l": "ja_JP", "t": { "Undo changes": { "v": ["変更を取り消し"] } } }, { "l": "ka", "t": { "Undo changes": { "v": [""] } } }, { "l": "ka_GE", "t": { "Undo changes": { "v": [""] } } }, { "l": "kab", "t": { "Undo changes": { "v": [""] } } }, { "l": "kk", "t": { "Undo changes": { "v": [""] } } }, { "l": "km", "t": { "Undo changes": { "v": [""] } } }, { "l": "kn", "t": { "Undo changes": { "v": [""] } } }, { "l": "ko", "t": { "Undo changes": { "v": ["변경 되돌리기"] } } }, { "l": "la", "t": { "Undo changes": { "v": [""] } } }, { "l": "lb", "t": { "Undo changes": { "v": [""] } } }, { "l": "lo", "t": { "Undo changes": { "v": [""] } } }, { "l": "lt_LT", "t": { "Undo changes": { "v": [""] } } }, { "l": "lv", "t": { "Undo changes": { "v": [""] } } }, { "l": "mk", "t": { "Undo changes": { "v": ["Врати ги промените"] } } }, { "l": "mn", "t": { "Undo changes": { "v": [""] } } }, { "l": "mr", "t": { "Undo changes": { "v": [""] } } }, { "l": "ms_MY", "t": { "Undo changes": { "v": [""] } } }, { "l": "my", "t": { "Undo changes": { "v": [""] } } }, { "l": "nb", "t": { "Undo changes": { "v": ["Tilbakestill endringer"] } } }, { "l": "ne", "t": { "Undo changes": { "v": [""] } } }, { "l": "nl", "t": { "Undo changes": { "v": ["Wijzigingen ongedaan maken"] } } }, { "l": "nn_NO", "t": { "Undo changes": { "v": [""] } } }, { "l": "oc", "t": { "Undo changes": { "v": [""] } } }, { "l": "pl", "t": { "Undo changes": { "v": ["Cofnij zmiany"] } } }, { "l": "ps", "t": { "Undo changes": { "v": [""] } } }, { "l": "pt_BR", "t": { "Undo changes": { "v": ["Desfazer modificações"] } } }, { "l": "pt_PT", "t": { "Undo changes": { "v": ["Anular alterações"] } } }, { "l": "ro", "t": { "Undo changes": { "v": ["Anularea modificărilor"] } } }, { "l": "ru", "t": { "Undo changes": { "v": ["Отменить изменения"] } } }, { "l": "sc", "t": { "Undo changes": { "v": [""] } } }, { "l": "si", "t": { "Undo changes": { "v": [""] } } }, { "l": "sk", "t": { "Undo changes": { "v": ["Vrátiť zmeny"] } } }, { "l": "sl", "t": { "Undo changes": { "v": ["Razveljavi spremembe"] } } }, { "l": "sq", "t": { "Undo changes": { "v": [""] } } }, { "l": "sr", "t": { "Undo changes": { "v": ["Поништи измене"] } } }, { "l": "sr@latin", "t": { "Undo changes": { "v": [""] } } }, { "l": "sv", "t": { "Undo changes": { "v": ["Ångra ändringar"] } } }, { "l": "sw", "t": { "Undo changes": { "v": [""] } } }, { "l": "ta", "t": { "Undo changes": { "v": [""] } } }, { "l": "th", "t": { "Undo changes": { "v": [""] } } }, { "l": "tk", "t": { "Undo changes": { "v": [""] } } }, { "l": "tr", "t": { "Undo changes": { "v": ["Değişiklikleri geri al"] } } }, { "l": "ug", "t": { "Undo changes": { "v": [""] } } }, { "l": "uk", "t": { "Undo changes": { "v": ["Скасувати зміни"] } } }, { "l": "ur_PK", "t": { "Undo changes": { "v": [""] } } }, { "l": "uz", "t": { "Undo changes": { "v": ["O'zgarishlarni bekor qilish"] } } }, { "l": "vi", "t": { "Undo changes": { "v": [""] } } }, { "l": "zh_CN", "t": { "Undo changes": { "v": ["撤销更改"] } } }, { "l": "zh_HK", "t": { "Undo changes": { "v": ["取消更改"] } } }, { "l": "zh_TW", "t": { "Undo changes": { "v": ["還原變更"] } } }, { "l": "zu_ZA", "t": { "Undo changes": { "v": [""] } } }];
const t50 = [{ "l": "af", "t": {} }, { "l": "ar", "t": { "User status: {status}": { "v": ["حالة المستخدِم: {status}"] } } }, { "l": "ast", "t": { "User status: {status}": { "v": ["Estáu del usuariu: {status}"] } } }, { "l": "az", "t": {} }, { "l": "be", "t": {} }, { "l": "bg", "t": {} }, { "l": "bn_BD", "t": {} }, { "l": "br", "t": {} }, { "l": "bs", "t": {} }, { "l": "ca", "t": {} }, { "l": "cs", "t": { "User status: {status}": { "v": ["Stav uživatele: {status}"] } } }, { "l": "cs_CZ", "t": { "User status: {status}": { "v": ["Stav uživatele: {status}"] } } }, { "l": "cy_GB", "t": {} }, { "l": "da", "t": { "User status: {status}": { "v": ["Brugerstatus: {status}"] } } }, { "l": "de", "t": { "User status: {status}": { "v": ["Benutzerstatus: {status}"] } } }, { "l": "de_DE", "t": { "User status: {status}": { "v": ["Benutzerstatus: {status}"] } } }, { "l": "el", "t": { "User status: {status}": { "v": ["Κατάσταση χρήστη: {status}"] } } }, { "l": "en_GB", "t": { "User status: {status}": { "v": ["User status: {status}"] } } }, { "l": "eo", "t": {} }, { "l": "es", "t": { "User status: {status}": { "v": ["Estatus del usuario: {status}"] } } }, { "l": "es_419", "t": {} }, { "l": "es_AR", "t": { "User status: {status}": { "v": ["Estado del usuario: {status}"] } } }, { "l": "es_CL", "t": {} }, { "l": "es_CO", "t": {} }, { "l": "es_CR", "t": {} }, { "l": "es_DO", "t": {} }, { "l": "es_EC", "t": {} }, { "l": "es_GT", "t": {} }, { "l": "es_HN", "t": {} }, { "l": "es_MX", "t": { "User status: {status}": { "v": ["Estado del usuario: {status}"] } } }, { "l": "es_NI", "t": {} }, { "l": "es_PA", "t": {} }, { "l": "es_PE", "t": {} }, { "l": "es_PR", "t": {} }, { "l": "es_PY", "t": {} }, { "l": "es_SV", "t": {} }, { "l": "es_UY", "t": {} }, { "l": "et_EE", "t": { "User status: {status}": { "v": ["Kasutaja olek: {status}"] } } }, { "l": "eu", "t": {} }, { "l": "fa", "t": { "User status: {status}": { "v": ["وضعیت کاربر: {status}"] } } }, { "l": "fi", "t": { "User status: {status}": { "v": ["Käyttäjän tila: {status}"] } } }, { "l": "fo", "t": {} }, { "l": "fr", "t": { "User status: {status}": { "v": ["Statut de l'utilisateur : {status}"] } } }, { "l": "ga", "t": { "User status: {status}": { "v": ["Stádas úsáideora: {status}"] } } }, { "l": "gd", "t": {} }, { "l": "gl", "t": { "User status: {status}": { "v": ["Estado do usuario: {status}"] } } }, { "l": "he", "t": {} }, { "l": "hi_IN", "t": {} }, { "l": "hr", "t": {} }, { "l": "hsb", "t": {} }, { "l": "hu", "t": {} }, { "l": "hy", "t": {} }, { "l": "ia", "t": {} }, { "l": "id", "t": { "User status: {status}": { "v": ["Status pengguna: {status}"] } } }, { "l": "ig", "t": {} }, { "l": "is", "t": { "User status: {status}": { "v": ["Staða notanda: {status}"] } } }, { "l": "it", "t": { "User status: {status}": { "v": ["Stato dell'utente: {status}"] } } }, { "l": "ja", "t": { "User status: {status}": { "v": ["ユーザのステータス: {status}"] } } }, { "l": "ja_JP", "t": { "User status: {status}": { "v": ["ユーザのステータス: {status}"] } } }, { "l": "ka", "t": {} }, { "l": "ka_GE", "t": {} }, { "l": "kab", "t": {} }, { "l": "kk", "t": {} }, { "l": "km", "t": {} }, { "l": "kn", "t": {} }, { "l": "ko", "t": { "User status: {status}": { "v": ["사용자 상태: {status}"] } } }, { "l": "la", "t": {} }, { "l": "lb", "t": {} }, { "l": "lo", "t": {} }, { "l": "lt_LT", "t": {} }, { "l": "lv", "t": {} }, { "l": "mk", "t": {} }, { "l": "mn", "t": {} }, { "l": "mr", "t": {} }, { "l": "ms_MY", "t": {} }, { "l": "my", "t": {} }, { "l": "nb", "t": { "User status: {status}": { "v": ["Brukerstatus: {status}"] } } }, { "l": "ne", "t": {} }, { "l": "nl", "t": { "User status: {status}": { "v": ["Gebruikers status: {status}"] } } }, { "l": "nn_NO", "t": {} }, { "l": "oc", "t": {} }, { "l": "pl", "t": { "User status: {status}": { "v": ["Status użytkownika: {status}"] } } }, { "l": "ps", "t": {} }, { "l": "pt_BR", "t": { "User status: {status}": { "v": ["Status do usuário: {status}"] } } }, { "l": "pt_PT", "t": { "User status: {status}": { "v": ["Estado do utilizador: {status}"] } } }, { "l": "ro", "t": { "User status: {status}": { "v": ["Status utilizator: {status}"] } } }, { "l": "ru", "t": { "User status: {status}": { "v": ["Статус пользователя: {status}"] } } }, { "l": "sc", "t": {} }, { "l": "si", "t": {} }, { "l": "sk", "t": { "User status: {status}": { "v": ["Stav užívateľa: {status}"] } } }, { "l": "sl", "t": {} }, { "l": "sq", "t": {} }, { "l": "sr", "t": { "User status: {status}": { "v": ["Статус корисника: {status}"] } } }, { "l": "sr@latin", "t": {} }, { "l": "sv", "t": { "User status: {status}": { "v": ["Användarstatus: {status}"] } } }, { "l": "sw", "t": {} }, { "l": "ta", "t": {} }, { "l": "th", "t": {} }, { "l": "tk", "t": {} }, { "l": "tr", "t": { "User status: {status}": { "v": ["Kullanıcı durumu: {status}"] } } }, { "l": "ug", "t": {} }, { "l": "uk", "t": { "User status: {status}": { "v": ["Статус користувача: {status}"] } } }, { "l": "ur_PK", "t": {} }, { "l": "uz", "t": { "User status: {status}": { "v": ["Foydalanuvchi holati: {status}"] } } }, { "l": "vi", "t": {} }, { "l": "zh_CN", "t": { "User status: {status}": { "v": ["用户状态：{status}"] } } }, { "l": "zh_HK", "t": { "User status: {status}": { "v": ["用戶狀態：{status}"] } } }, { "l": "zh_TW", "t": {} }, { "l": "zu_ZA", "t": {} }];
const _sfc_main$1 = {
  name: "UndoVariantIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$1 = function render6() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon undo-variant-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null
);
const Undo = __component__$1.exports;
register(t16, t49);
const NcInputFieldProps = new Set(Object.keys(NcInputField.props));
const _sfc_main = {
  name: "NcTextField",
  components: {
    NcInputField,
    Close,
    ArrowRight,
    Undo
  },
  // Allow forwarding all attributes
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * Any [NcInputField](#/Components/NcFields?id=ncinputfield) props
     */
    // Not an actual prop but needed to show in vue-styleguidist docs
    // eslint-disable-next-line
    " ": {},
    // Reuse all the props from NcInputField for better typing and documentation
    ...NcInputField.props,
    /**
     * The `aria-label` to set on the trailing button
     * If no explicit value is set it will default to the one matching the `trailingButtonIcon`:
     * @default 'Clear text'|'Save changes'|'Undo changes'
     */
    trailingButtonLabel: {
      type: String,
      default: ""
    },
    // Custom props
    /**
     * Specifies which material design icon should be used for the trailing
     * button.
     * @type {'close'|'arrowRight'|'undo'}
     */
    trailingButtonIcon: {
      type: String,
      default: "close",
      validator: (value) => [
        "close",
        "arrowRight",
        "undo"
      ].includes(value)
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:value",
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const model = useModelMigration("value", "update:value");
    return {
      model
    };
  },
  computed: {
    propsAndAttrsToForward() {
      const predefinedLabels = {
        undo: t("Undo changes"),
        close: t("Clear text"),
        arrowRight: t("Save changes")
      };
      return {
        // Proxy all the HTML attributes
        ...this.$attrs,
        // Proxy original NcInputField's props
        ...Object.fromEntries(
          Object.entries(this.$props).filter(([key]) => NcInputFieldProps.has(key))
        ),
        // Adjust aria-label for predefined trailing buttons
        trailingButtonLabel: this.trailingButtonLabel || predefinedLabels[this.trailingButtonIcon]
      };
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.inputField.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.inputField.select();
    }
  }
};
var _sfc_render = function render22() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcInputField", _vm._g(_vm._b({ ref: "inputField", scopedSlots: _vm._u([!!_vm.$scopedSlots.icon || !!_vm.$slots.default || !!_vm.$scopedSlots.default ? { key: "icon", fn: function() {
    return [_vm._t("icon", function() {
      return [_vm._t("default")];
    })];
  }, proxy: true } : null, _vm.type !== "search" ? { key: "trailing-button-icon", fn: function() {
    return [_vm.trailingButtonIcon === "close" ? _c("Close", { attrs: { "size": 20 } }) : _vm.trailingButtonIcon === "arrowRight" ? _c("ArrowRight", { attrs: { "size": 20 } }) : _vm.trailingButtonIcon === "undo" ? _c("Undo", { attrs: { "size": 20 } }) : _vm._e()];
  }, proxy: true } : null], null, true) }, "NcInputField", _vm.propsAndAttrsToForward, false), _vm.$listeners));
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const NcTextField = __component__.exports;
function loadState(app, key, fallback) {
  const elem = document.querySelector(`#initial-state-${app}-${key}`);
  if (elem === null) {
    if (fallback !== void 0) {
      return fallback;
    }
    throw new Error(`Could not find initial state ${key} of ${app}`);
  }
  try {
    return JSON.parse(atob(elem.value));
  } catch (e) {
    throw new Error(`Could not parse initial state ${key} of ${app}`);
  }
}
function normalizeComponent(scriptExports, render7, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render7) {
    options.render = render7;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  return {
    exports: scriptExports,
    options
  };
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
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
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
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
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props2, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props2 && Object.assign(constructor.prototype, props2);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props2;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props2 = Object.getOwnPropertyNames(sourceObj);
    i = props2.length;
    while (i-- > 0) {
      prop = props2[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
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
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches2;
  const arr = [];
  while ((matches2 = regExp.exec(str)) !== null) {
    arr.push(matches2);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer2(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
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
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target2 = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target2[key] = reducedValue);
        });
        stack[i] = void 0;
        return target2;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token2, callbacks2) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token2) {
        callbacks2.length && callbacks2.shift()();
      }
    }, false);
    return (cb) => {
      callbacks2.push(cb);
      _global.postMessage(token2, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process$1 !== "undefined" && process$1.nextTick || _setImmediate;
const utils$1 = {
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
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
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
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};
var buffer = {};
var base64Js = {};
base64Js.byteLength = byteLength;
base64Js.toByteArray = toByteArray;
base64Js.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var validLen = b64.indexOf("=");
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0;
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 255;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    );
  }
  return parts.join("");
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer2[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer2[offset + i - d] |= s * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(exports) {
  const base64 = base64Js;
  const ieee754$1 = ieee754;
  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports.Buffer = Buffer2;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 2147483647;
  exports.kMaxLength = K_MAX_LENGTH;
  const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  }
  function typedArraySupport() {
    try {
      const arr = new GlobalUint8Array(1);
      const proto = { foo: function() {
        return 42;
      } };
      Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e) {
      return false;
    }
  }
  Object.defineProperty(Buffer2.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this)) return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer2.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this)) return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new GlobalUint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer2.poolSize = 8192;
  function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString(value, encodingOrOffset);
    }
    if (GlobalArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
    );
  }
  Buffer2.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer2.prototype, GlobalUint8Array.prototype);
  Object.setPrototypeOf(Buffer2, GlobalUint8Array);
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== void 0) {
      return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }
  Buffer2.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
  };
  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }
  Buffer2.allocUnsafe = function(size) {
    return allocUnsafe(size);
  };
  Buffer2.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength2(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, GlobalUint8Array)) {
      const copy = new GlobalUint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new GlobalUint8Array(array);
    } else if (length === void 0) {
      buf = new GlobalUint8Array(array, byteOffset);
    } else {
      buf = new GlobalUint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer2.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer2.alloc(+length);
  }
  Buffer2.isBuffer = function isBuffer2(b) {
    return b != null && b._isBuffer === true && b !== Buffer2.prototype;
  };
  Buffer2.compare = function compare(a, b) {
    if (isInstance(a, GlobalUint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
    if (isInstance(b, GlobalUint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
    if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    }
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  Buffer2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  Buffer2.concat = function concat2(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer2.alloc(0);
    }
    let i;
    if (length === void 0) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    const buffer2 = Buffer2.allocUnsafe(length);
    let pos = 0;
    for (i = 0; i < list.length; ++i) {
      let buf = list[i];
      if (isInstance(buf, GlobalUint8Array)) {
        if (pos + buf.length > buffer2.length) {
          if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
          buf.copy(buffer2, pos);
        } else {
          GlobalUint8Array.prototype.set.call(
            buffer2,
            buf,
            pos
          );
        }
      } else if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer2, pos);
      }
      pos += buf.length;
    }
    return buffer2;
  };
  function byteLength2(string, encoding) {
    if (Buffer2.isBuffer(string)) {
      return string.length;
    }
    if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
      );
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.byteLength = byteLength2;
  function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding) encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.prototype._isBuffer = true;
  function swap(b, n2, m) {
    const i = b[n2];
    b[n2] = b[m];
    b[m] = i;
  }
  Buffer2.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };
  Buffer2.prototype.toString = function toString3() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
  Buffer2.prototype.equals = function equals(b) {
    if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer2.compare(this, b) === 0;
  };
  Buffer2.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
  }
  Buffer2.prototype.compare = function compare(target2, start, end, thisStart, thisEnd) {
    if (isInstance(target2, GlobalUint8Array)) {
      target2 = Buffer2.from(target2, target2.offset, target2.byteLength);
    }
    if (!Buffer2.isBuffer(target2)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target2
      );
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target2 ? target2.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target2.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target2) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target2.slice(start, end);
    for (let i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
    if (buffer2.length === 0) return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer2.length - 1;
    }
    if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
    if (byteOffset >= buffer2.length) {
      if (dir) return -1;
      else byteOffset = buffer2.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof GlobalUint8Array.prototype.indexOf === "function") {
        if (dir) {
          return GlobalUint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
        } else {
          return GlobalUint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i2) {
      if (indexSize === 1) {
        return buf[i2];
      } else {
        return buf.readUInt16BE(i2 * indexSize);
      }
    }
    let i;
    if (dir) {
      let foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
    return -1;
  }
  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i;
    for (i = 0; i < length; ++i) {
      const parsed = parseInt(string.substr(i * 2, 2), 16);
      if (numberIsNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer2.prototype.write = function write(string, offset, length, encoding) {
    if (offset === void 0) {
      encoding = "utf8";
      length = this.length;
      offset = 0;
    } else if (length === void 0 && typeof offset === "string") {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0) encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    }
    const remaining = this.length - offset;
    if (length === void 0 || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
          return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset, length);
        case "base64":
          return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer2.prototype.toJSON = function toJSON2() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while (i < end) {
      const firstByte = buf[i];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  const MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for (let i = start; i < end; ++i) {
      out += hexSliceLookupTable[buf[i]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i = 0; i < bytes.length - 1; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer2.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer2.prototype);
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while (++i < byteLength3 && (mul *= 256)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength3, this.length);
    }
    let val = this[offset + --byteLength3];
    let mul = 1;
    while (byteLength3 > 0 && (mul *= 256)) {
      val += this[offset + --byteLength3] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
  };
  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while (++i < byteLength3 && (mul *= 256)) {
      val += this[offset + i] * mul;
    }
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let i = byteLength3;
    let mul = 1;
    let val = this[offset + --i];
    while (i > 0 && (mul *= 256)) {
      val += this[offset + --i] * mul;
    }
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
  };
  Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
  });
  Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754$1.read(this, offset, true, 23, 4);
  };
  Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754$1.read(this, offset, false, 23, 4);
  };
  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754$1.read(this, offset, true, 52, 8);
  };
  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754$1.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
  }
  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset, byteLength3, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while (++i < byteLength3 && (mul *= 256)) {
      this[offset + i] = value / mul & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset, byteLength3, maxBytes, 0);
    }
    let i = byteLength3 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while (--i >= 0 && (mul *= 256)) {
      this[offset + i] = value / mul & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
  }
  function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
  }
  Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while (++i < byteLength3 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
    }
    let i = byteLength3 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while (--i >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer2.prototype.copy = function copy(target2, targetStart, start, end) {
    if (!Buffer2.isBuffer(target2)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target2.length) targetStart = target2.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    if (end === start) return 0;
    if (target2.length === 0 || this.length === 0) return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    if (end > this.length) end = this.length;
    if (target2.length - targetStart < end - start) {
      end = target2.length - targetStart + start;
    }
    const len = end - start;
    if (this === target2 && typeof GlobalUint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      GlobalUint8Array.prototype.set.call(
        target2,
        this.subarray(start, end),
        targetStart
      );
    }
    return len;
  };
  Buffer2.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        const code2 = val.charCodeAt(0);
        if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
          val = code2;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };
  const errors = {};
  function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${sym}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  E(
    "ERR_INVALID_ARG_TYPE",
    function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    },
    TypeError
  );
  E(
    "ERR_OUT_OF_RANGE",
    function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    },
    RangeError
  );
  function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i >= start + 4; i -= 3) {
      res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
  }
  function checkBounds(buf, offset, byteLength3) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength3] === void 0) {
      boundsError(offset, buf.length - (byteLength3 + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength3) {
    if (value > max || value < min) {
      const n2 = typeof min === "bigint" ? "n" : "";
      let range;
      {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n2} and < 2${n2} ** ${(byteLength3 + 1) * 8}${n2}`;
        } else {
          range = `>= -(2${n2} ** ${(byteLength3 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n2}`;
        }
      }
      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength3);
  }
  function validateNumber(value, name) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(
      "offset",
      `>= ${0} and <= ${length}`,
      value
    );
  }
  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2) return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1) bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0) break;
        bytes.push(
          codePoint >> 6 | 192,
          codePoint & 63 | 128
        );
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0) break;
        bytes.push(
          codePoint >> 12 | 224,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0) break;
        bytes.push(
          codePoint >> 18 | 240,
          codePoint >> 12 & 63 | 128,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i;
    for (i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const i16 = i * 16;
      for (let j = 0; j < 16; ++j) {
        table[i16 + j] = alphabet[i] + alphabet[j];
      }
    }
    return table;
  }();
  function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
  }
})(buffer);
const Buffer = buffer.Buffer;
function AxiosError$1(message, code2, config2, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code2 && (this.code = code2);
  config2 && (this.config = config2);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils$1.inherits(AxiosError$1, Error, {
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
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const prototype$1 = AxiosError$1.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code2) => {
  descriptors[code2] = { value: code2 };
});
Object.defineProperties(AxiosError$1, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError$1.from = (error, code2, config2, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError$1.call(axiosError, error.message, code2, config2, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token2, i) {
    token2 = removeBrackets(token2);
    return !dots && i ? "[" + token2 + "]" : token2;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index2) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index2, dots) : indexes === null ? key : key + "[]",
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
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils$1.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer2(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  if (utils$1.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
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
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
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
function formDataToJSON(formData) {
  function buildPath(path, value, target2, index2) {
    let name = path[index2++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index2 >= path.length;
    name = !name && utils$1.isArray(target2) ? target2.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target2, name)) {
        target2[name] = [target2[name], value];
      } else {
        target2[name] = value;
      }
      return !isNumericKey;
    }
    if (!target2[name] || !utils$1.isObject(target2[name])) {
      target2[name] = [];
    }
    const result = buildPath(path, value, target2[name], index2);
    if (result && utils$1.isArray(target2[name])) {
      target2[name] = arrayToObject(target2[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils$1.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData$1(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
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
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$1.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
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
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed2 = new this(first);
    targets.forEach((target2) => computed2.set(target2));
    return computed2;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders$1.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config2 = this || defaults;
  const context = response || config2;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError$1(message, config2, request) {
  AxiosError$1.call(this, message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config2, request);
  this.name = "CanceledError";
}
utils$1.inherits(CanceledError$1, AxiosError$1, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$1(
      "Request failed with status code " + response.status,
      [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
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
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push("path=" + path);
      utils$1.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$1(config1, config2) {
  config2 = config2 || {};
  const config3 = {};
  function getMergedValue(target2, source, prop, caseless) {
    if (utils$1.isPlainObject(target2) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target2, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
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
    withXSRFToken: defaultToConfig2,
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
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
}
const resolveConfig = (config2) => {
  const newConfig = mergeConfig$1({}, config2);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config2.params, config2.paramsSerializer);
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
    );
  }
  let contentType;
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token2) => token2.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config2);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config2,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config2, request));
      request = null;
    };
    request.onerror = function handleError2() {
      reject(new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config2, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError$1(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
        config2,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config2, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError$1("Unsupported protocol " + protocol + ":", AxiosError$1.ERR_BAD_REQUEST, config2));
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe2();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);
    const unsubscribe2 = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe2);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};
const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res2) => res2[type]() : (_2, config2) => {
      throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config2);
    });
  });
})(new Response());
const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils$1.isBlob(body)) {
    return body.size;
  }
  if (utils$1.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils$1.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils$1.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length = utils$1.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
const fetchAdapter = isFetchSupported && (async (config2) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig(config2);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe2 = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils$1.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe2)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe2 && unsubscribe2();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config2);
    !isStreamResponse && unsubscribe2 && unsubscribe2();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders$1.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config: config2,
        request
      });
    });
  } catch (err) {
    unsubscribe2 && unsubscribe2();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, config2, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError$1.from(err, err && err.code, config2, request);
  }
});
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError$1(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError$1(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError$1(null, config2);
  }
}
function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = AxiosHeaders$1.from(config2.headers);
  config2.data = transformData.call(
    config2,
    config2.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
    config2.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config2.adapter || defaults.adapter);
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData.call(
      config2,
      config2.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$1(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config2,
          config2.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const VERSION$1 = "1.8.4";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1("option " + opt + " must be " + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
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
  async request(configOrUrl, config2) {
    try {
      return await this._request(configOrUrl, config2);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config2) {
    if (typeof configOrUrl === "string") {
      config2 = config2 || {};
      config2.url = configOrUrl;
    } else {
      config2 = configOrUrl || {};
    }
    config2 = mergeConfig$1(this.defaults, config2);
    const { transitional: transitional2, paramsSerializer, headers } = config2;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config2.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    if (config2.allowAbsoluteUrls !== void 0) ;
    else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config2.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config2.allowAbsoluteUrls = true;
    }
    validator.assertOptions(config2, {
      baseUrl: validators.spelling("baseURL"),
      withXsrfToken: validators.spelling("withXSRFToken")
    }, true);
    config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config2.method]
    );
    headers && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config2.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
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
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config2);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config2;
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
  getUri(config2) {
    config2 = mergeConfig$1(this.defaults, config2);
    const fullPath = buildFullPath(config2.baseURL, config2.url, config2.allowAbsoluteUrls);
    return buildURL(fullPath, config2.params, config2.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config2) {
      return this.request(mergeConfig$1(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token2 = this;
    this.promise.then((cancel) => {
      if (!token2._listeners) return;
      let i = token2._listeners.length;
      while (i-- > 0) {
        token2._listeners[i](cancel);
      }
      token2._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token2.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token2.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config2, request) {
      if (token2.reason) {
        return;
      }
      token2.reason = new CanceledError$1(message, config2, request);
      resolvePromise(token2.reason);
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
    const index2 = this._listeners.indexOf(listener);
    if (index2 !== -1) {
      this._listeners.splice(index2, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token2 = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token2,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create2(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios: Axios2,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;
const RETRY_KEY = Symbol("csrf-retry");
const onError$2 = (axios2) => async (error) => {
  var _a2;
  const { config: config2, response, request } = error;
  const responseURL = request == null ? void 0 : request.responseURL;
  const status = response == null ? void 0 : response.status;
  if (status === 412 && ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.message) === "CSRF check failed" && config2[RETRY_KEY] === void 0) {
    console.warn("Request to ".concat(responseURL, " failed because of a CSRF mismatch. Fetching a new token"));
    const { data: { token: token2 } } = await axios2.get(_("/csrftoken"));
    console.debug("New request token ".concat(token2, " fetched"));
    axios2.defaults.headers.requesttoken = token2;
    return axios2({
      ...config2,
      headers: {
        ...config2.headers,
        requesttoken: token2
      },
      [RETRY_KEY]: true
    });
  }
  return Promise.reject(error);
};
const RETRY_DELAY_KEY = Symbol("retryDelay");
const onError$1 = (axios2) => async (error) => {
  var _a2;
  const { config: config2, response, request } = error;
  const responseURL = request == null ? void 0 : request.responseURL;
  const status = response == null ? void 0 : response.status;
  const headers = response == null ? void 0 : response.headers;
  if (status === 503 && headers["x-nextcloud-maintenance-mode"] === "1" && config2.retryIfMaintenanceMode && (!config2[RETRY_DELAY_KEY] || config2[RETRY_DELAY_KEY] <= 32)) {
    const retryDelay = ((_a2 = config2[RETRY_DELAY_KEY]) != null ? _a2 : 1) * 2;
    console.warn("Request to ".concat(responseURL, " failed because of maintenance mode. Retrying in ").concat(retryDelay, "s"));
    await new Promise((resolve) => {
      setTimeout(resolve, retryDelay * 1e3);
    });
    return axios2({
      ...config2,
      [RETRY_DELAY_KEY]: retryDelay
    });
  }
  return Promise.reject(error);
};
const onError = async (error) => {
  var _a2;
  const { config: config2, response, request } = error;
  const responseURL = request == null ? void 0 : request.responseURL;
  const status = response == null ? void 0 : response.status;
  if (status === 401 && ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.message) === "Current user is not logged in" && config2.reloadExpiredSession && (window == null ? void 0 : window.location)) {
    console.error("Request to ".concat(responseURL, " failed because the user session expired. Reloading the page …"));
    window.location.reload();
  }
  return Promise.reject(error);
};
var _a;
const client = axios.create({
  headers: {
    requesttoken: (_a = getRequestToken()) != null ? _a : "",
    "X-Requested-With": "XMLHttpRequest"
  }
});
const cancelableClient = Object.assign(client, {
  CancelToken: axios.CancelToken,
  isCancel: axios.isCancel
});
cancelableClient.interceptors.response.use((r) => r, onError$2(cancelableClient));
cancelableClient.interceptors.response.use((r) => r, onError$1(cancelableClient));
cancelableClient.interceptors.response.use((r) => r, onError);
onRequestTokenUpdate((token2) => {
  client.defaults.headers.requesttoken = token2;
});
var debounce$1 = { exports: {} };
var hasRequiredDebounce;
function requireDebounce() {
  if (hasRequiredDebounce) return debounce$1.exports;
  hasRequiredDebounce = 1;
  function debounce2(function_, wait = 100, options = {}) {
    if (typeof function_ !== "function") {
      throw new TypeError(`Expected the first parameter to be a function, got \`${typeof function_}\`.`);
    }
    if (wait < 0) {
      throw new RangeError("`wait` must not be negative.");
    }
    const { immediate } = typeof options === "boolean" ? { immediate: options } : options;
    let storedContext;
    let storedArguments;
    let timeoutId;
    let timestamp;
    let result;
    function run() {
      const callContext = storedContext;
      const callArguments = storedArguments;
      storedContext = void 0;
      storedArguments = void 0;
      result = function_.apply(callContext, callArguments);
      return result;
    }
    function later() {
      const last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeoutId = setTimeout(later, wait - last);
      } else {
        timeoutId = void 0;
        if (!immediate) {
          result = run();
        }
      }
    }
    const debounced = function(...arguments_) {
      if (storedContext && this !== storedContext && Object.getPrototypeOf(this) === Object.getPrototypeOf(storedContext)) {
        throw new Error("Debounced method called with different contexts of the same prototype.");
      }
      storedContext = this;
      storedArguments = arguments_;
      timestamp = Date.now();
      const callNow = immediate && !timeoutId;
      if (!timeoutId) {
        timeoutId = setTimeout(later, wait);
      }
      if (callNow) {
        result = run();
      }
      return result;
    };
    Object.defineProperty(debounced, "isPending", {
      get() {
        return timeoutId !== void 0;
      }
    });
    debounced.clear = () => {
      if (!timeoutId) {
        return;
      }
      clearTimeout(timeoutId);
      timeoutId = void 0;
    };
    debounced.flush = () => {
      if (!timeoutId) {
        return;
      }
      debounced.trigger();
    };
    debounced.trigger = () => {
      result = run();
      debounced.clear();
    };
    return debounced;
  }
  debounce$1.exports.debounce = debounce2;
  debounce$1.exports = debounce2;
  return debounce$1.exports;
}
var debounceExports = /* @__PURE__ */ requireDebounce();
const debounce = /* @__PURE__ */ getDefaultExportFromCjs$1(debounceExports);
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["Debug"] = 0] = "Debug";
  LogLevel2[LogLevel2["Info"] = 1] = "Info";
  LogLevel2[LogLevel2["Warn"] = 2] = "Warn";
  LogLevel2[LogLevel2["Error"] = 3] = "Error";
  LogLevel2[LogLevel2["Fatal"] = 4] = "Fatal";
  return LogLevel2;
})(LogLevel || {});
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, key + "", value);
  return value;
};
class ConsoleLogger {
  constructor(context) {
    __publicField$1(this, "context");
    this.context = context || {};
  }
  formatMessage(message, level, context) {
    let msg = "[" + LogLevel[level].toUpperCase() + "] ";
    if (context && context.app) {
      msg += context.app + ": ";
    }
    if (typeof message === "string")
      return msg + message;
    msg += "Unexpected ".concat(message.name);
    if (message.message)
      msg += ' "'.concat(message.message, '"');
    if (level === LogLevel.Debug && message.stack)
      msg += "\n\nStack trace:\n".concat(message.stack);
    return msg;
  }
  log(level, message, context) {
    var _a2, _b;
    if (typeof ((_a2 = this.context) == null ? void 0 : _a2.level) === "number" && level < ((_b = this.context) == null ? void 0 : _b.level)) {
      return;
    }
    if (typeof message === "object" && (context == null ? void 0 : context.error) === void 0) {
      context.error = message;
    }
    switch (level) {
      case LogLevel.Debug:
        console.debug(this.formatMessage(message, LogLevel.Debug, context), context);
        break;
      case LogLevel.Info:
        console.info(this.formatMessage(message, LogLevel.Info, context), context);
        break;
      case LogLevel.Warn:
        console.warn(this.formatMessage(message, LogLevel.Warn, context), context);
        break;
      case LogLevel.Error:
        console.error(this.formatMessage(message, LogLevel.Error, context), context);
        break;
      case LogLevel.Fatal:
      default:
        console.error(this.formatMessage(message, LogLevel.Fatal, context), context);
        break;
    }
  }
  debug(message, context) {
    this.log(LogLevel.Debug, message, Object.assign({}, this.context, context));
  }
  info(message, context) {
    this.log(LogLevel.Info, message, Object.assign({}, this.context, context));
  }
  warn(message, context) {
    this.log(LogLevel.Warn, message, Object.assign({}, this.context, context));
  }
  error(message, context) {
    this.log(LogLevel.Error, message, Object.assign({}, this.context, context));
  }
  fatal(message, context) {
    this.log(LogLevel.Fatal, message, Object.assign({}, this.context, context));
  }
}
function buildConsoleLogger(context) {
  return new ConsoleLogger(context);
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class LoggerBuilder {
  constructor(factory) {
    __publicField(this, "context");
    __publicField(this, "factory");
    this.context = {};
    this.factory = factory;
  }
  /**
   * Set the app name within the logging context
   *
   * @param appId App name
   */
  setApp(appId) {
    this.context.app = appId;
    return this;
  }
  /**
   * Set the logging level within the logging context
   *
   * @param level Logging level
   */
  setLogLevel(level) {
    this.context.level = level;
    return this;
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * Set the user id within the logging context
   * @param uid User ID
   * @see {@link detectUser}
   */
  /* eslint-enable jsdoc/no-undefined-types */
  setUid(uid2) {
    this.context.uid = uid2;
    return this;
  }
  /**
   * Detect the currently logged in user and set the user id within the logging context
   */
  detectUser() {
    const user = getCurrentUser();
    if (user !== null) {
      this.context.uid = user.uid;
    }
    return this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const self2 = this;
    const onLoaded = () => {
      var _a2, _b;
      if (document.readyState === "complete" || document.readyState === "interactive") {
        self2.context.level = (_b = (_a2 = window._oc_config) == null ? void 0 : _a2.loglevel) != null ? _b : LogLevel.Warn;
        if (window._oc_debug) {
          self2.context.level = LogLevel.Debug;
        }
        document.removeEventListener("readystatechange", onLoaded);
      } else {
        document.addEventListener("readystatechange", onLoaded);
      }
    };
    onLoaded();
    return this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    if (this.context.level === void 0) {
      this.detectLogLevel();
    }
    return this.factory(this.context);
  }
}
function getLoggerBuilder() {
  return new LoggerBuilder(buildConsoleLogger);
}
const logger = getLoggerBuilder().detectUser().setApp("@nextcloud/vue").build();
export {
  Close as $,
  watch as A,
  computed as B,
  watchEffect as C,
  reactive as D,
  onUnmounted as E,
  t4 as F,
  GenRandomId as G,
  isRTL as H,
  Check as I,
  purify as J,
  useCssVars as K,
  t10 as L,
  t50 as M,
  NcTextField as N,
  t3 as O,
  getDefaultExportFromCjs$1 as P,
  w as Q,
  f as R,
  t9 as S,
  distExports as T,
  getCurrentUser as U,
  Vue as V,
  unsubscribe as W,
  subscribe as X,
  t35 as Y,
  t15 as Z,
  _,
  normalizeComponent as a,
  t23 as a0,
  n as a1,
  process$1 as a2,
  getGettextBuilder as a3,
  t33 as a4,
  t17 as a5,
  t30 as a6,
  NcButton as b,
  NcInputField as c,
  debounce as d,
  cancelableClient as e,
  t as f,
  getRequestToken as g,
  logger as h,
  global as i,
  defineComponent as j,
  nextTick as k,
  loadState as l,
  unref as m,
  normalizeComponent$1 as n,
  onMounted as o,
  getCurrentInstance as p,
  toRef as q,
  register as r,
  readonly as s,
  t27 as t,
  useModelMigration as u,
  v,
  ref$1 as w,
  customRef as x,
  getCurrentScope as y,
  onScopeDispose as z
};
//# sourceMappingURL=logger-D3RVzcfQ-Bxv3TsH_.chunk.mjs.map
