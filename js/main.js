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

var app = Vue.createApp({
  mixins: Object.values(mixins),
  data: function () {
    return {
      loading: true,
      hiddenMenu: false,
      showMenuItems: false,
      menuColor: false,
      scrollTop: 0,
      renderers: []
    };
  },
  created: function () {
    var self = this;
    
    // Safety fallback: dismiss the loading overlay after 1.5s regardless of external assets loading
    var safetyTimeout = setTimeout(function () {
      self.loading = false;
    }, 1500);

    var hideLoading = function () {
      clearTimeout(safetyTimeout);
      self.loading = false;
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      hideLoading();
    } else {
      window.addEventListener("DOMContentLoaded", hideLoading);
      window.addEventListener("load", hideLoading);
    }
  },
  mounted: function () {
    window.addEventListener("scroll", this.handleScroll, true);
    this.render();
  },
  methods: {
    render: function () {
      var it = _createForOfIteratorHelper(this.renderers), step;
      try {
        for (it.s(); !(step = it.n()).done; ) {
          var fn = step.value;
          if (typeof fn === "function") {
            fn();
          }
        }
      } catch (err) {
        it.e(err);
      } finally {
        it.f();
      }
    },
    handleScroll: function () {
      var wrap = this.$refs.homePostsWrap;
      var top = document.documentElement.scrollTop;
      if (this.scrollTop < top) {
        this.hiddenMenu = true;
        this.showMenuItems = false;
      } else {
        this.hiddenMenu = false;
      }
      if (wrap) {
        if (top <= window.innerHeight - 100) {
          this.menuColor = true;
        } else {
          this.menuColor = false;
        }
        if (top <= 400) {
          wrap.style.top = "-" + (top / 5) + "px";
        } else {
          wrap.style.top = "-80px";
        }
      }
      this.scrollTop = top;
    }
  }
});

app.mount("#layout");