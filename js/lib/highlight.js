function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _regeneratorRuntime() {
  "use strict";
  _regeneratorRuntime = function () { return r; };
  var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = Object.defineProperty || function (t, r, e) {
    t[r] = e.value;
  }, a = "function" == typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
  
  function l(t, r, e) {
    return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
  }
  try { l({}, ""); } catch (t) {
    l = function (t, r, e) { return t[r] = e; };
  }
  function s(t, r, e, n) {
    var a = r && r.prototype instanceof g ? r : g, i = Object.create(a.prototype), c = new O(n || []);
    return o(i, "_invoke", { value: A(t, e, c) }), i;
  }
  function f(t, r, e) {
    try { return { type: "normal", arg: t.call(r, e) }; } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  r.wrap = s;
  var h = "suspendedStart", y = "suspendedYield", p = "executing", v = "completed", d = {};
  function g() {}
  function m() {}
  function b() {}
  var w = {};
  l(w, i, (function () { return this; }));
  var _ = Object.getPrototypeOf, L = _ && _(_(I([])));
  L && L !== e && n.call(L, i) && (w = L);
  var x = b.prototype = g.prototype = Object.create(w);
  function S(t) {
    ["next", "throw", "return"].forEach((function (r) {
      l(t, r, (function (t) { return this._invoke(r, t); }));
    }));
  }
  function E(t, r) {
    function e(o, a, i, c) {
      var u = f(t[o], t, a);
      if ("throw" !== u.type) {
        var l = u.arg, s = l.value;
        return s && "object" == _typeof(s) && n.call(s, "__await") ? r.resolve(s.__await).then((function (t) {
          e("next", t, i, c);
        }), (function (t) {
          e("throw", t, i, c);
        })) : r.resolve(s).then((function (t) {
          l.value = t, i(l);
        }), (function (t) {
          return e("throw", t, i, c);
        }));
      }
      c(u.arg);
    }
    var a;
    o(this, "_invoke", {
      value: function (n, o) {
        function i() { return new r((function (t, r) { e(n, o, t, r); })); }
        return a = a ? a.then(i, i) : i();
      }
    });
  }
  function A(r, e, n) {
    var o = h;
    return function (a, i) {
      if (o === p) throw new Error("Generator is already running");
      if (o === v) {
        if ("throw" === a) throw i;
        return { value: t, done: !0 };
      }
      for (n.method = a, n.arg = i; ;) {
        var c = n.delegate;
        if (c) {
          var u = T(c, n);
          if (u) {
            if (u === d) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw o = v, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = p;
        var l = f(r, e, n);
        if ("normal" === l.type) {
          if (o = n.done ? v : y, l.arg === d) continue;
          return { value: l.arg, done: n.done };
        }
        "throw" === l.type && (o = v, n.method = "throw", n.arg = l.arg);
      }
    };
  }
  function T(r, e) {
    var n = e.method, o = r.iterator[n];
    if (o === t) return e.delegate = null, "throw" === n && r.iterator.return && (e.method = "return", e.arg = t, T(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
    var a = f(o, r.iterator, e.arg);
    if ("throw" === a.type) return e.method = "throw", e.arg = a.arg, e.delegate = null, d;
    var i = a.arg;
    return i ? i.done ? (e[r.resultName] = i.value, e.next = r.nextLoc, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d);
  }
  function j(t) {
    var r = { tryLoc: t[0] };
    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
  }
  function k(t) {
    var r = t.completion || {};
    r.type = "normal", delete r.arg, t.completion = r;
  }
  function O(t) {
    this.tryEntries = [{ tryLoc: "root" }], t.forEach(j, this), this.reset(!0);
  }
  function I(r) {
    if (r || "" === r) {
      var e = r[i];
      if (e) return e.call(r);
      if ("function" == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var o = -1, a = function e() {
          for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;
          return e.value = t, e.done = !0, e;
        };
        return a.next = a;
      }
    }
    throw new TypeError(_typeof(r) + " is not iterable");
  }
  return m.prototype = b, o(x, "constructor", { value: b, configurable: !0 }), o(b, "constructor", { value: m, configurable: !0 }), m.displayName = l(b, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) {
    var r = "function" == typeof t && t.constructor;
    return !!r && (r === m || "GeneratorFunction" === (r.displayName || r.name));
  }, r.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, l(t, u, "GeneratorFunction")), t.prototype = Object.create(x), t;
  }, r.awrap = function (t) {
    return { __await: t };
  }, S(E.prototype), l(E.prototype, c, (function () { return this; })), r.AsyncIterator = E, r.async = function (t, e, n, o, a) {
    void 0 === a && (a = Promise);
    var i = new E(s(t, e, n, o), a);
    return r.isGeneratorFunction(e) ? i : i.next().then((function (t) {
      return t.done ? t.value : i.next();
    }));
  }, S(x), l(x, u, "Generator"), l(x, i, (function () { return this; })), l(x, "toString", (function () { return "[object Generator]"; })), r.keys = function (t) {
    var r = Object(t), e = [];
    for (var n in r) e.push(n);
    return e.reverse(), function t() {
      for (; e.length;) {
        var n = e.pop();
        if (n in r) return t.value = n, t.done = !1, t;
      }
      return t.done = !0, t;
    };
  }, r.values = I, O.prototype = {
    constructor: O,
    reset: function (r) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !r)
        for (var o in this) "t" === o.charAt(0) && n.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = t);
    },
    stop: function () {
      this.done = !0;
      var r = this.tryEntries[0].completion;
      if ("throw" === r.type) throw r.arg;
      return this.rval;
    },
    dispatchException: function (r) {
      if (this.done) throw r;
      var o = this;
      function a(r, n) {
        return u.type = "throw", u.arg = r, o.next = n, !!n;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var c = this.tryEntries[i], u = c.completion;
        if ("root" === c.tryLoc) return a("end");
        if (c.tryLoc <= this.prev) {
          var l = n.call(c, "catchLoc"), s = n.call(c, "finallyLoc");
          if (l && s) {
            if (this.prev < c.catchLoc) return a(c.catchLoc, !0);
            if (this.prev < c.finallyLoc) return a(c.finallyLoc);
          } else if (l) {
            if (this.prev < c.catchLoc) return a(c.catchLoc, !0);
          } else {
            if (!s) throw new Error("try statement without catch or finally");
            if (this.prev < c.finallyLoc) return a(c.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, r) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var o = this.tryEntries[e];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var a = o;
          break;
        }
      }
      a && ("break" === t || "continue" === t) && a.tryLoc <= r && r <= a.finallyLoc && (a = null);
      var i = a ? a.completion : {};
      return i.type = t, i.arg = r, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(i);
    },
    complete: function (t, r) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), d;
    },
    finish: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --e) {
        var e = this.tryEntries[r];
        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), k(e), d;
      }
    },
    catch: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e.tryLoc === t) {
          var n = e.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            k(e);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (r, e, n) {
      return this.delegate = { iterator: I(r), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = t), d;
    }
  }, r;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this, args = arguments;
    return new Promise((function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); }
      function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); }
      _next(undefined);
    }));
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function (e) { throw e; },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function () { it = it.call(o); },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var min = Object.prototype.toString.call(o).slice(8, -1);
  if (min === "Object" && o.constructor) min = o.constructor.name;
  if (min === "Map" || min === "Set") return Array.from(o);
  if (min === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(min)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

mixins.highlight = {
  data: function () {
    return {
      copying: false
    };
  },
  created: function () {
    if (typeof hljs !== "undefined") {
      hljs.configure({ ignoreUnescapedHTML: true });
      this.renderers.push(this.highlight);
    }
  },
  methods: {
    sleep: function (ms) {
      return new Promise((function (resolve) {
        return setTimeout(resolve, ms);
      }));
    },
    highlight: function () {
      if (typeof hljs === "undefined") return;
      var self = this;
      var elements = document.querySelectorAll("pre");
      var it = _createForOfIteratorHelper(elements), step;
      try {
        var highlightBlock = function () {
          var el = step.value;
          var text = el.textContent;
          var lang = [].concat(_toConsumableArray(el.classList), _toConsumableArray(el.firstChild.classList))[0] || "plaintext";
          var highlightedCode;
          try {
            highlightedCode = hljs.highlight(text, { language: lang }).value;
          } catch (e) {
            highlightedCode = text;
          }
          el.innerHTML = '\n                <div class="code-content hljs">'.concat(highlightedCode, '</div>\n                <div class="language">').concat(lang, '</div>\n                <div class="copycode">\n                    <i class="fa-solid fa-copy fa-fw"></i>\n                    <i class="fa-solid fa-check fa-fw"></i>\n                </div>\n                ');
          var block = el.querySelector(".code-content");
          if (typeof hljs.lineNumbersBlock === "function") {
            hljs.lineNumbersBlock(block, { singleLine: true });
          }
          var copyBtn = el.querySelector(".copycode");
          copyBtn.addEventListener("click", _asyncToGenerator(_regeneratorRuntime().mark((function runCopy() {
            return _regeneratorRuntime().wrap((function runCopy$(ctx) {
              while (1) switch (ctx.prev = ctx.next) {
                case 0:
                  if (!self.copying) {
                    ctx.next = 2;
                    break;
                  }
                  return ctx.abrupt("return");
                case 2:
                  self.copying = true;
                  copyBtn.classList.add("copied");
                  ctx.next = 6;
                  return navigator.clipboard.writeText(text);
                case 6:
                  ctx.next = 8;
                  return self.sleep(1000);
                case 8:
                  copyBtn.classList.remove("copied");
                  self.copying = false;
                case 10:
                case "end":
                  return ctx.stop();
              }
            }), runCopy);
          }))));
        };
        for (it.s(); !(step = it.n()).done; ) {
          highlightBlock();
        }
      } catch (err) {
        it.e(err);
      } finally {
        it.f();
      }
    }
  }
};