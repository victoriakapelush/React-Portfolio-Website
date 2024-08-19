function Zs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function qs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bs = { exports: {} },
  gi = {},
  ec = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var al = Symbol.for("react.element"),
  Qd = Symbol.for("react.portal"),
  Kd = Symbol.for("react.fragment"),
  Yd = Symbol.for("react.strict_mode"),
  Xd = Symbol.for("react.profiler"),
  Gd = Symbol.for("react.provider"),
  Jd = Symbol.for("react.context"),
  Zd = Symbol.for("react.forward_ref"),
  qd = Symbol.for("react.suspense"),
  bd = Symbol.for("react.memo"),
  ep = Symbol.for("react.lazy"),
  Eu = Symbol.iterator;
function tp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eu && e[Eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function or(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
or.prototype.isReactComponent = {};
or.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = or.prototype;
function ha(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var ma = (ha.prototype = new lc());
ma.constructor = ha;
nc(ma, or.prototype);
ma.isPureReactComponent = !0;
var Cu = Array.isArray,
  ic = Object.prototype.hasOwnProperty,
  va = { current: null },
  oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ic.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: al,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: va.current,
  };
}
function np(e, t) {
  return {
    $$typeof: al,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function rp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _u = /\/+/g;
function $i(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? rp("" + e.key)
    : t.toString(36);
}
function zl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case al:
          case Qd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + $i(o, 0) : r),
      Cu(l)
        ? ((n = ""),
          e != null && (n = e.replace(_u, "$&/") + "/"),
          zl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (ga(l) &&
            (l = np(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(_u, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Cu(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + $i(i, a);
      o += zl(i, t, n, u, l);
    }
  else if (((u = tp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + $i(i, a++)), (o += zl(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function gl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    zl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function lp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Ol = { transition: null },
  ip = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Ol,
    ReactCurrentOwner: va,
  };
Q.Children = {
  map: gl,
  forEach: function (e, t, n) {
    gl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ga(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Q.Component = or;
Q.Fragment = Kd;
Q.Profiler = Xd;
Q.PureComponent = ha;
Q.StrictMode = Yd;
Q.Suspense = qd;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = nc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = va.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      ic.call(t, u) &&
        !oc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: al, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gd, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = ac;
Q.createFactory = function (e) {
  var t = ac.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Zd, render: e };
};
Q.isValidElement = ga;
Q.lazy = function (e) {
  return { $$typeof: ep, _payload: { _status: -1, _result: e }, _init: lp };
};
Q.memo = function (e, t) {
  return { $$typeof: bd, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Ol.transition;
  Ol.transition = {};
  try {
    e();
  } finally {
    Ol.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Oe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
Q.useId = function () {
  return Oe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Oe.current.useRef(e);
};
Q.useState = function (e) {
  return Oe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Oe.current.useTransition();
};
Q.version = "18.2.0";
ec.exports = Q;
var N = ec.exports;
const uc = qs(N),
  op = Zs({ __proto__: null, default: uc }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap = N,
  up = Symbol.for("react.element"),
  sp = Symbol.for("react.fragment"),
  cp = Object.prototype.hasOwnProperty,
  fp = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) cp.call(t, r) && !dp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: up,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: fp.current,
  };
}
gi.Fragment = sp;
gi.jsx = sc;
gi.jsxs = sc;
bs.exports = gi;
var P = bs.exports,
  go = {},
  cc = { exports: {} },
  Ge = {},
  fc = { exports: {} },
  dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var $ = D.length;
    D.push(A);
    e: for (; 0 < $; ) {
      var G = ($ - 1) >>> 1,
        te = D[G];
      if (0 < l(te, A)) (D[G] = A), (D[$] = te), ($ = G);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      $ = D.pop();
    if ($ !== A) {
      D[0] = $;
      e: for (var G = 0, te = D.length, ht = te >>> 1; G < ht; ) {
        var Ee = 2 * (G + 1) - 1,
          it = D[Ee],
          De = Ee + 1,
          zt = D[De];
        if (0 > l(it, $))
          De < te && 0 > l(zt, it)
            ? ((D[G] = zt), (D[De] = $), (G = De))
            : ((D[G] = it), (D[Ee] = $), (G = Ee));
        else if (De < te && 0 > l(zt, $)) (D[G] = zt), (D[De] = $), (G = De);
        else break e;
      }
    }
    return A;
  }
  function l(D, A) {
    var $ = D.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    p = null,
    m = 3,
    k = !1,
    S = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= D)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function E(D) {
    if (((w = !1), h(D), !S))
      if (n(u) !== null) (S = !0), Mt(T);
      else {
        var A = n(s);
        A !== null && le(E, A.startTime - D);
      }
  }
  function T(D, A) {
    (S = !1), w && ((w = !1), d(j), (j = -1)), (k = !0);
    var $ = m;
    try {
      for (
        h(A), p = n(u);
        p !== null && (!(p.expirationTime > A) || (D && !X()));

      ) {
        var G = p.callback;
        if (typeof G == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var te = G(p.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == "function" ? (p.callback = te) : p === n(u) && r(u),
            h(A);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ht = !0;
      else {
        var Ee = n(s);
        Ee !== null && le(E, Ee.startTime - A), (ht = !1);
      }
      return ht;
    } finally {
      (p = null), (m = $), (k = !1);
    }
  }
  var v = !1,
    _ = null,
    j = -1,
    O = 5,
    I = -1;
  function X() {
    return !(e.unstable_now() - I < O);
  }
  function ve() {
    if (_ !== null) {
      var D = e.unstable_now();
      I = D;
      var A = !0;
      try {
        A = _(!0, D);
      } finally {
        A ? he() : ((v = !1), (_ = null));
      }
    } else v = !1;
  }
  var he;
  if (typeof f == "function")
    he = function () {
      f(ve);
    };
  else if (typeof MessageChannel < "u") {
    var Ze = new MessageChannel(),
      Rn = Ze.port2;
    (Ze.port1.onmessage = ve),
      (he = function () {
        Rn.postMessage(null);
      });
  } else
    he = function () {
      C(ve, 0);
    };
  function Mt(D) {
    (_ = D), v || ((v = !0), he());
  }
  function le(D, A) {
    j = C(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || k || ((S = !0), Mt(T));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = m;
      }
      var $ = m;
      m = A;
      try {
        return D();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var $ = m;
      m = D;
      try {
        return A();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, $) {
      var G = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? G + $ : G))
          : ($ = G),
        D)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = $ + te),
        (D = {
          id: c++,
          callback: A,
          priorityLevel: D,
          startTime: $,
          expirationTime: te,
          sortIndex: -1,
        }),
        $ > G
          ? ((D.sortIndex = $),
            t(s, D),
            n(u) === null &&
              D === n(s) &&
              (w ? (d(j), (j = -1)) : (w = !0), le(E, $ - G)))
          : ((D.sortIndex = te), t(u, D), S || k || ((S = !0), Mt(T))),
        D
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (D) {
      var A = m;
      return function () {
        var $ = m;
        m = A;
        try {
          return D.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(dc);
fc.exports = dc;
var pp = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc = N,
  Xe = pp;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hc = new Set(),
  $r = {};
function En(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for ($r[e] = t, e = 0; e < t.length; e++) hc.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yo = Object.prototype.hasOwnProperty,
  hp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pu = {},
  Ru = {};
function mp(e) {
  return yo.call(Ru, e)
    ? !0
    : yo.call(Pu, e)
      ? !1
      : hp.test(e)
        ? (Ru[e] = !0)
        : ((Pu[e] = !0), !1);
}
function vp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function gp(e, t, n, r) {
  if (t === null || typeof t > "u" || vp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function wa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, wa);
    Re[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, wa);
    Re[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, wa);
  Re[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sa(e, t, n, r) {
  var l = Re.hasOwnProperty(t) ? Re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (gp(t, n, l, r) && (n = null),
    r || l === null
      ? mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yl = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  ka = Symbol.for("react.strict_mode"),
  wo = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  vc = Symbol.for("react.context"),
  xa = Symbol.for("react.forward_ref"),
  So = Symbol.for("react.suspense"),
  ko = Symbol.for("react.suspense_list"),
  Ea = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  gc = Symbol.for("react.offscreen"),
  Nu = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nu && e[Nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Vi;
function Rr(e) {
  if (Vi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vi = (t && t[1]) || "";
    }
  return (
    `
` +
    Vi +
    e
  );
}
var Hi = !1;
function Wi(e, t) {
  if (!e || Hi) return "";
  Hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Hi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rr(e) : "";
}
function yp(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wi(e.type, !1)), e;
    case 11:
      return (e = Wi(e.type.render, !1)), e;
    case 1:
      return (e = Wi(e.type, !0)), e;
    default:
      return "";
  }
}
function xo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case Dn:
      return "Portal";
    case wo:
      return "Profiler";
    case ka:
      return "StrictMode";
    case So:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case xa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ea:
        return (
          (t = e.displayName || null), t !== null ? t : xo(e.type) || "Memo"
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return xo(e(t));
        } catch {}
    }
  return null;
}
function wp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xo(t);
    case 8:
      return t === ka ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sp(e) {
  var t = yc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wl(e) {
  e._valueTracker || (e._valueTracker = Sp(e));
}
function wc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Eo(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sc(e, t) {
  (t = t.checked), t != null && Sa(e, "checked", t, !1);
}
function Co(e, t) {
  Sc(e, t);
  var n = en(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _o(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _o(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _o(e, t, n) {
  (t !== "number" || Kl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ju(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: en(n) };
}
function kc(e, t) {
  var n = en(t.value),
    r = en(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ro(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Sl,
  Ec = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sl = Sl || document.createElement("div"),
          Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kp = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function (e) {
  kp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function Cc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (jr.hasOwnProperty(e) && jr[e])
      ? ("" + t).trim()
      : t + "px";
}
function _c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Cc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var xp = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function No(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Lo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var To = null;
function Ca(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jo = null,
  Yn = null,
  Xn = null;
function Mu(e) {
  if ((e = cl(e))) {
    if (typeof jo != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = xi(t)), jo(e.stateNode, e.type, t));
  }
}
function Pc(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function Rc() {
  if (Yn) {
    var e = Yn,
      t = Xn;
    if (((Xn = Yn = null), Mu(e), t)) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function Nc(e, t) {
  return e(t);
}
function Lc() {}
var Qi = !1;
function Tc(e, t, n) {
  if (Qi) return e(t, n);
  Qi = !0;
  try {
    return Nc(e, t, n);
  } finally {
    (Qi = !1), (Yn !== null || Xn !== null) && (Lc(), Rc());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Do = !1;
if (Rt)
  try {
    var mr = {};
    Object.defineProperty(mr, "passive", {
      get: function () {
        Do = !0;
      },
    }),
      window.addEventListener("test", mr, mr),
      window.removeEventListener("test", mr, mr);
  } catch {
    Do = !1;
  }
function Ep(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Dr = !1,
  Yl = null,
  Xl = !1,
  Mo = null,
  Cp = {
    onError: function (e) {
      (Dr = !0), (Yl = e);
    },
  };
function _p(e, t, n, r, l, i, o, a, u) {
  (Dr = !1), (Yl = null), Ep.apply(Cp, arguments);
}
function Pp(e, t, n, r, l, i, o, a, u) {
  if ((_p.apply(this, arguments), Dr)) {
    if (Dr) {
      var s = Yl;
      (Dr = !1), (Yl = null);
    } else throw Error(R(198));
    Xl || ((Xl = !0), (Mo = s));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zu(e) {
  if (Cn(e) !== e) throw Error(R(188));
}
function Rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return zu(l), e;
        if (i === r) return zu(l), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Dc(e) {
  return (e = Rp(e)), e !== null ? Mc(e) : null;
}
function Mc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zc = Xe.unstable_scheduleCallback,
  Ou = Xe.unstable_cancelCallback,
  Np = Xe.unstable_shouldYield,
  Lp = Xe.unstable_requestPaint,
  pe = Xe.unstable_now,
  Tp = Xe.unstable_getCurrentPriorityLevel,
  _a = Xe.unstable_ImmediatePriority,
  Oc = Xe.unstable_UserBlockingPriority,
  Gl = Xe.unstable_NormalPriority,
  jp = Xe.unstable_LowPriority,
  Fc = Xe.unstable_IdlePriority,
  yi = null,
  yt = null;
function Dp(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : Op,
  Mp = Math.log,
  zp = Math.LN2;
function Op(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mp(e) / zp) | 0)) | 0;
}
var kl = 64,
  xl = 4194304;
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Lr(a)) : ((i &= o), i !== 0 && (r = Lr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Lr(o)) : i !== 0 && (r = Lr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ft(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Fp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ip(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ft(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Fp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ic() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function Ki(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ul(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function Up(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ft(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Pa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function Uc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ac,
  Ra,
  Bc,
  $c,
  Vc,
  Oo = !1,
  El = [],
  Kt = null,
  Yt = null,
  Xt = null,
  Wr = new Map(),
  Qr = new Map(),
  Vt = [],
  Ap =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId);
  }
}
function vr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = cl(t)), t !== null && Ra(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Bp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Kt = vr(Kt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Yt = vr(Yt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Xt = vr(Xt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Wr.set(i, vr(Wr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Qr.set(i, vr(Qr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jc(n)), t !== null)) {
          (e.blockedOn = t),
            Vc(e.priority, function () {
              Bc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (To = r), n.target.dispatchEvent(r), (To = null);
    } else return (t = cl(n)), t !== null && Ra(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Iu(e, t, n) {
  Fl(e) && n.delete(t);
}
function $p() {
  (Oo = !1),
    Kt !== null && Fl(Kt) && (Kt = null),
    Yt !== null && Fl(Yt) && (Yt = null),
    Xt !== null && Fl(Xt) && (Xt = null),
    Wr.forEach(Iu),
    Qr.forEach(Iu);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oo ||
      ((Oo = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, $p)));
}
function Kr(e) {
  function t(l) {
    return gr(l, e);
  }
  if (0 < El.length) {
    gr(El[0], e);
    for (var n = 1; n < El.length; n++) {
      var r = El[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kt !== null && gr(Kt, e),
      Yt !== null && gr(Yt, e),
      Xt !== null && gr(Xt, e),
      Wr.forEach(t),
      Qr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && Vt.shift();
}
var Gn = jt.ReactCurrentBatchConfig,
  Zl = !0;
function Vp(e, t, n, r) {
  var l = Z,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (Z = 1), Na(e, t, n, r);
  } finally {
    (Z = l), (Gn.transition = i);
  }
}
function Hp(e, t, n, r) {
  var l = Z,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (Z = 4), Na(e, t, n, r);
  } finally {
    (Z = l), (Gn.transition = i);
  }
}
function Na(e, t, n, r) {
  if (Zl) {
    var l = Fo(e, t, n, r);
    if (l === null) no(e, t, r, ql, n), Fu(e, r);
    else if (Bp(l, e, t, n, r)) r.stopPropagation();
    else if ((Fu(e, r), t & 4 && -1 < Ap.indexOf(e))) {
      for (; l !== null; ) {
        var i = cl(l);
        if (
          (i !== null && Ac(i),
          (i = Fo(e, t, n, r)),
          i === null && no(e, t, r, ql, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else no(e, t, r, null, n);
  }
}
var ql = null;
function Fo(e, t, n, r) {
  if (((ql = null), (e = Ca(r)), (e = cn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ql = e), null;
}
function Wc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tp()) {
        case _a:
          return 1;
        case Oc:
          return 4;
        case Gl:
        case jp:
          return 16;
        case Fc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null,
  La = null,
  Il = null;
function Qc() {
  if (Il) return Il;
  var e,
    t = La,
    n = t.length,
    r,
    l = "value" in Wt ? Wt.value : Wt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Il = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ul(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cl() {
  return !0;
}
function Uu() {
  return !1;
}
function Je(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cl
        : Uu),
      (this.isPropagationStopped = Uu),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cl));
      },
      persist: function () {},
      isPersistent: Cl,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ta = Je(ar),
  sl = ue({}, ar, { view: 0, detail: 0 }),
  Wp = Je(sl),
  Yi,
  Xi,
  yr,
  wi = ue({}, sl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ja,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yr &&
            (yr && e.type === "mousemove"
              ? ((Yi = e.screenX - yr.screenX), (Xi = e.screenY - yr.screenY))
              : (Xi = Yi = 0),
            (yr = e)),
          Yi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xi;
    },
  }),
  Au = Je(wi),
  Qp = ue({}, wi, { dataTransfer: 0 }),
  Kp = Je(Qp),
  Yp = ue({}, sl, { relatedTarget: 0 }),
  Gi = Je(Yp),
  Xp = ue({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gp = Je(Xp),
  Jp = ue({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zp = Je(Jp),
  qp = ue({}, ar, { data: 0 }),
  Bu = Je(qp),
  bp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  eh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  th = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = th[e]) ? !!t[e] : !1;
}
function ja() {
  return nh;
}
var rh = ue({}, sl, {
    key: function (e) {
      if (e.key) {
        var t = bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? eh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ja,
    charCode: function (e) {
      return e.type === "keypress" ? Ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ul(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  lh = Je(rh),
  ih = ue({}, wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $u = Je(ih),
  oh = ue({}, sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ja,
  }),
  ah = Je(oh),
  uh = ue({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sh = Je(uh),
  ch = ue({}, wi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fh = Je(ch),
  dh = [9, 13, 27, 32],
  Da = Rt && "CompositionEvent" in window,
  Mr = null;
Rt && "documentMode" in document && (Mr = document.documentMode);
var ph = Rt && "TextEvent" in window && !Mr,
  Kc = Rt && (!Da || (Mr && 8 < Mr && 11 >= Mr)),
  Vu = " ",
  Hu = !1;
function Yc(e, t) {
  switch (e) {
    case "keyup":
      return dh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function hh(e, t) {
  switch (e) {
    case "compositionend":
      return Xc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hu = !0), Vu);
    case "textInput":
      return (e = t.data), e === Vu && Hu ? null : e;
    default:
      return null;
  }
}
function mh(e, t) {
  if (zn)
    return e === "compositionend" || (!Da && Yc(e, t))
      ? ((e = Qc()), (Il = La = Wt = null), (zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vh[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  Pc(r),
    (t = bl(t, "onChange")),
    0 < t.length &&
      ((n = new Ta("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zr = null,
  Yr = null;
function gh(e) {
  af(e, 0);
}
function Si(e) {
  var t = In(e);
  if (wc(t)) return e;
}
function yh(e, t) {
  if (e === "change") return t;
}
var Jc = !1;
if (Rt) {
  var Ji;
  if (Rt) {
    var Zi = "oninput" in document;
    if (!Zi) {
      var Qu = document.createElement("div");
      Qu.setAttribute("oninput", "return;"),
        (Zi = typeof Qu.oninput == "function");
    }
    Ji = Zi;
  } else Ji = !1;
  Jc = Ji && (!document.documentMode || 9 < document.documentMode);
}
function Ku() {
  zr && (zr.detachEvent("onpropertychange", Zc), (Yr = zr = null));
}
function Zc(e) {
  if (e.propertyName === "value" && Si(Yr)) {
    var t = [];
    Gc(t, Yr, e, Ca(e)), Tc(gh, t);
  }
}
function wh(e, t, n) {
  e === "focusin"
    ? (Ku(), (zr = t), (Yr = n), zr.attachEvent("onpropertychange", Zc))
    : e === "focusout" && Ku();
}
function Sh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Si(Yr);
}
function kh(e, t) {
  if (e === "click") return Si(t);
}
function xh(e, t) {
  if (e === "input" || e === "change") return Si(t);
}
function Eh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : Eh;
function Xr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!yo.call(t, l) || !pt(e[l], t[l])) return !1;
  }
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Yu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yu(n);
  }
}
function qc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function bc() {
  for (var e = window, t = Kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kl(e.document);
  }
  return t;
}
function Ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ch(e) {
  var t = bc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ma(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Xu(n, i));
        var o = Xu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var _h = Rt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  Io = null,
  Or = null,
  Uo = !1;
function Gu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Uo ||
    On == null ||
    On !== Kl(r) ||
    ((r = On),
    "selectionStart" in r && Ma(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Or && Xr(Or, r)) ||
      ((Or = r),
      (r = bl(Io, "onSelect")),
      0 < r.length &&
        ((t = new Ta("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function _l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: _l("Animation", "AnimationEnd"),
    animationiteration: _l("Animation", "AnimationIteration"),
    animationstart: _l("Animation", "AnimationStart"),
    transitionend: _l("Transition", "TransitionEnd"),
  },
  qi = {},
  ef = {};
Rt &&
  ((ef = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function ki(e) {
  if (qi[e]) return qi[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ef) return (qi[e] = t[n]);
  return e;
}
var tf = ki("animationend"),
  nf = ki("animationiteration"),
  rf = ki("animationstart"),
  lf = ki("transitionend"),
  of = new Map(),
  Ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function nn(e, t) {
  of.set(e, t), En(t, [e]);
}
for (var bi = 0; bi < Ju.length; bi++) {
  var eo = Ju[bi],
    Ph = eo.toLowerCase(),
    Rh = eo[0].toUpperCase() + eo.slice(1);
  nn(Ph, "on" + Rh);
}
nn(tf, "onAnimationEnd");
nn(nf, "onAnimationIteration");
nn(rf, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(lf, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Nh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Zu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Pp(r, t, void 0, e), (e.currentTarget = null);
}
function af(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          Zu(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Zu(l, a, s), (i = u);
        }
    }
  }
  if (Xl) throw ((e = Mo), (Xl = !1), (Mo = null), e);
}
function ne(e, t) {
  var n = t[Ho];
  n === void 0 && (n = t[Ho] = new Set());
  var r = e + "__bubble";
  n.has(r) || (uf(t, e, 2, !1), n.add(r));
}
function to(e, t, n) {
  var r = 0;
  t && (r |= 4), uf(n, e, r, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[Pl]) {
    (e[Pl] = !0),
      hc.forEach(function (n) {
        n !== "selectionchange" && (Nh.has(n) || to(n, !1, e), to(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || ((t[Pl] = !0), to("selectionchange", !1, t));
  }
}
function uf(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var l = Vp;
      break;
    case 4:
      l = Hp;
      break;
    default:
      l = Na;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Do ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function no(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = cn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Tc(function () {
    var s = i,
      c = Ca(n),
      p = [];
    e: {
      var m = of.get(e);
      if (m !== void 0) {
        var k = Ta,
          S = e;
        switch (e) {
          case "keypress":
            if (Ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = lh;
            break;
          case "focusin":
            (S = "focus"), (k = Gi);
            break;
          case "focusout":
            (S = "blur"), (k = Gi);
            break;
          case "beforeblur":
          case "afterblur":
            k = Gi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Au;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = ah;
            break;
          case tf:
          case nf:
          case rf:
            k = Gp;
            break;
          case lf:
            k = sh;
            break;
          case "scroll":
            k = Wp;
            break;
          case "wheel":
            k = fh;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Zp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = $u;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              d !== null && ((E = Hr(f, d)), E != null && w.push(Jr(f, E, h)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((m = new k(m, S, null, n, c)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          m &&
            n !== To &&
            (S = n.relatedTarget || n.fromElement) &&
            (cn(S) || S[Nt]))
        )
          break e;
        if (
          (k || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          k
            ? ((S = n.relatedTarget || n.toElement),
              (k = s),
              (S = S ? cn(S) : null),
              S !== null &&
                ((C = Cn(S)), S !== C || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((k = null), (S = s)),
          k !== S)
        ) {
          if (
            ((w = Au),
            (E = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = $u),
              (E = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (C = k == null ? m : In(k)),
            (h = S == null ? m : In(S)),
            (m = new w(E, f + "leave", k, n, c)),
            (m.target = C),
            (m.relatedTarget = h),
            (E = null),
            cn(c) === s &&
              ((w = new w(d, f + "enter", S, n, c)),
              (w.target = h),
              (w.relatedTarget = C),
              (E = w)),
            (C = E),
            k && S)
          )
            t: {
              for (w = k, d = S, f = 0, h = w; h; h = jn(h)) f++;
              for (h = 0, E = d; E; E = jn(E)) h++;
              for (; 0 < f - h; ) (w = jn(w)), f--;
              for (; 0 < h - f; ) (d = jn(d)), h--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = jn(w)), (d = jn(d));
              }
              w = null;
            }
          else w = null;
          k !== null && qu(p, m, k, w, !1),
            S !== null && C !== null && qu(p, C, S, w, !0);
        }
      }
      e: {
        if (
          ((m = s ? In(s) : window),
          (k = m.nodeName && m.nodeName.toLowerCase()),
          k === "select" || (k === "input" && m.type === "file"))
        )
          var T = yh;
        else if (Wu(m))
          if (Jc) T = xh;
          else {
            T = Sh;
            var v = wh;
          }
        else
          (k = m.nodeName) &&
            k.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (T = kh);
        if (T && (T = T(e, s))) {
          Gc(p, T, n, c);
          break e;
        }
        v && v(e, m, s),
          e === "focusout" &&
            (v = m._wrapperState) &&
            v.controlled &&
            m.type === "number" &&
            _o(m, "number", m.value);
      }
      switch (((v = s ? In(s) : window), e)) {
        case "focusin":
          (Wu(v) || v.contentEditable === "true") &&
            ((On = v), (Io = s), (Or = null));
          break;
        case "focusout":
          Or = Io = On = null;
          break;
        case "mousedown":
          Uo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Uo = !1), Gu(p, n, c);
          break;
        case "selectionchange":
          if (_h) break;
        case "keydown":
        case "keyup":
          Gu(p, n, c);
      }
      var _;
      if (Da)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        zn
          ? Yc(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Kc &&
          n.locale !== "ko" &&
          (zn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && zn && (_ = Qc())
            : ((Wt = c),
              (La = "value" in Wt ? Wt.value : Wt.textContent),
              (zn = !0))),
        (v = bl(s, j)),
        0 < v.length &&
          ((j = new Bu(j, e, null, n, c)),
          p.push({ event: j, listeners: v }),
          _ ? (j.data = _) : ((_ = Xc(n)), _ !== null && (j.data = _)))),
        (_ = ph ? hh(e, n) : mh(e, n)) &&
          ((s = bl(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Bu("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: s }),
            (c.data = _)));
    }
    af(p, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Hr(e, n)),
      i != null && r.unshift(Jr(e, i, l)),
      (i = Hr(e, t)),
      i != null && r.push(Jr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Hr(n, i)), u != null && o.unshift(Jr(n, u, a)))
        : l || ((u = Hr(n, i)), u != null && o.push(Jr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Lh = /\r\n?/g,
  Th = /\u0000|\uFFFD/g;
function bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lh,
      `
`,
    )
    .replace(Th, "");
}
function Rl(e, t, n) {
  if (((t = bu(t)), bu(e) !== t && n)) throw Error(R(425));
}
function ei() {}
var Ao = null,
  Bo = null;
function $o(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
  jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  es = typeof Promise == "function" ? Promise : void 0,
  Dh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof es < "u"
        ? function (e) {
            return es.resolve(null).then(e).catch(Mh);
          }
        : Vo;
function Mh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ro(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Kr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Kr(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ts(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + ur,
  Zr = "__reactProps$" + ur,
  Nt = "__reactContainer$" + ur,
  Ho = "__reactEvents$" + ur,
  zh = "__reactListeners$" + ur,
  Oh = "__reactHandles$" + ur;
function cn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ts(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = ts(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cl(e) {
  return (
    (e = e[gt] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function xi(e) {
  return e[Zr] || null;
}
var Wo = [],
  Un = -1;
function rn(e) {
  return { current: e };
}
function re(e) {
  0 > Un || ((e.current = Wo[Un]), (Wo[Un] = null), Un--);
}
function ee(e, t) {
  Un++, (Wo[Un] = e.current), (e.current = t);
}
var tn = {},
  je = rn(tn),
  Be = rn(!1),
  gn = tn;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function ti() {
  re(Be), re(je);
}
function ns(e, t, n) {
  if (je.current !== tn) throw Error(R(168));
  ee(je, t), ee(Be, n);
}
function sf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, wp(e) || "Unknown", l));
  return ue({}, n, r);
}
function ni(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (gn = je.current),
    ee(je, e),
    ee(Be, Be.current),
    !0
  );
}
function rs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = sf(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Be),
      re(je),
      ee(je, e))
    : re(Be),
    ee(Be, n);
}
var kt = null,
  Ei = !1,
  lo = !1;
function cf(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function Fh(e) {
  (Ei = !0), cf(e);
}
function ln() {
  if (!lo && kt !== null) {
    lo = !0;
    var e = 0,
      t = Z;
    try {
      var n = kt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (Ei = !1);
    } catch (l) {
      throw (kt !== null && (kt = kt.slice(e + 1)), zc(_a, ln), l);
    } finally {
      (Z = t), (lo = !1);
    }
  }
  return null;
}
var An = [],
  Bn = 0,
  ri = null,
  li = 0,
  be = [],
  et = 0,
  yn = null,
  Et = 1,
  Ct = "";
function un(e, t) {
  (An[Bn++] = li), (An[Bn++] = ri), (ri = e), (li = t);
}
function ff(e, t, n) {
  (be[et++] = Et), (be[et++] = Ct), (be[et++] = yn), (yn = e);
  var r = Et;
  e = Ct;
  var l = 32 - ft(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ft(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Et = (1 << (32 - ft(t) + l)) | (n << l) | r),
      (Ct = i + e);
  } else (Et = (1 << i) | (n << l) | r), (Ct = e);
}
function za(e) {
  e.return !== null && (un(e, 1), ff(e, 1, 0));
}
function Oa(e) {
  for (; e === ri; )
    (ri = An[--Bn]), (An[Bn] = null), (li = An[--Bn]), (An[Bn] = null);
  for (; e === yn; )
    (yn = be[--et]),
      (be[et] = null),
      (Ct = be[--et]),
      (be[et] = null),
      (Et = be[--et]),
      (be[et] = null);
}
var Ye = null,
  Ke = null,
  ie = !1,
  ct = null;
function df(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ls(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yn !== null ? { id: Et, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ko(e) {
  if (ie) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ls(e, t)) {
        if (Qo(e)) throw Error(R(418));
        t = Gt(n.nextSibling);
        var r = Ye;
        t && ls(e, t)
          ? df(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e));
      }
    } else {
      if (Qo(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (Ye = e);
    }
  }
}
function is(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Nl(e) {
  if (e !== Ye) return !1;
  if (!ie) return is(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Qo(e)) throw (pf(), Error(R(418)));
    for (; t; ) df(e, t), (t = Gt(t.nextSibling));
  }
  if ((is(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function pf() {
  for (var e = Ke; e; ) e = Gt(e.nextSibling);
}
function er() {
  (Ke = Ye = null), (ie = !1);
}
function Fa(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var Ih = jt.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ii = rn(null),
  oi = null,
  $n = null,
  Ia = null;
function Ua() {
  Ia = $n = oi = null;
}
function Aa(e) {
  var t = ii.current;
  re(ii), (e._currentValue = t);
}
function Yo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (oi = e),
    (Ia = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Ia !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (oi === null) throw Error(R(308));
      ($n = e), (oi.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var fn = null;
function Ba(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function hf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ba(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function $a(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function mf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ba(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function Al(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pa(e, n);
  }
}
function os(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ai(e, t, n, r) {
  var l = e.updateQueue;
  $t = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (c = s = u = null), (a = i);
    do {
      var m = a.lane,
        k = a.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: k,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            w = a;
          switch (((m = t), (k = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                p = S.call(k, p, m);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (m = typeof S == "function" ? S.call(k, p, m) : S),
                m == null)
              )
                break e;
              p = ue({}, p, m);
              break e;
            case 2:
              $t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (k = {
          eventTime: k,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = k), (u = p)) : (c = c.next = k),
          (o |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Sn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function as(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var vf = new pc.Component().refs;
function Xo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ci = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = qt(e),
      i = _t(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Jt(e, i, l)),
      t !== null && (dt(t, e, l, r), Al(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = qt(e),
      i = _t(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Jt(e, i, l)),
      t !== null && (dt(t, e, l, r), Al(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = qt(e),
      l = _t(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Jt(e, l, r)),
      t !== null && (dt(t, e, r, n), Al(t, e, r));
  },
};
function us(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Xr(n, r) || !Xr(l, i)
        : !0
  );
}
function gf(e, t, n) {
  var r = !1,
    l = tn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = rt(i))
      : ((l = $e(t) ? gn : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bn(e, l) : tn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ci),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ss(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
}
function Go(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = vf), $a(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = rt(i))
    : ((i = $e(t) ? gn : je.current), (l.context = bn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ci.enqueueReplaceState(l, l.state, null),
      ai(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === vf && (a = l.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function cs(e) {
  var t = e._init;
  return t(e._payload);
}
function yf(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = bt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, h, E) {
    return f === null || f.tag !== 6
      ? ((f = fo(h, d.mode, E)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function u(d, f, h, E) {
    var T = h.type;
    return T === Mn
      ? c(d, f, h.props.children, E, h.key)
      : f !== null &&
          (f.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === Bt &&
              cs(T) === f.type))
        ? ((E = l(f, h.props)), (E.ref = wr(d, f, h)), (E.return = d), E)
        : ((E = Ql(h.type, h.key, h.props, null, d.mode, E)),
          (E.ref = wr(d, f, h)),
          (E.return = d),
          E);
  }
  function s(d, f, h, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = po(h, d.mode, E)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function c(d, f, h, E, T) {
    return f === null || f.tag !== 7
      ? ((f = vn(h, d.mode, E, T)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function p(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = fo("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case yl:
          return (
            (h = Ql(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = wr(d, null, f)),
            (h.return = d),
            h
          );
        case Dn:
          return (f = po(f, d.mode, h)), (f.return = d), f;
        case Bt:
          var E = f._init;
          return p(d, E(f._payload), h);
      }
      if (Nr(f) || hr(f))
        return (f = vn(f, d.mode, h, null)), (f.return = d), f;
      Ll(d, f);
    }
    return null;
  }
  function m(d, f, h, E) {
    var T = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return T !== null ? null : a(d, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yl:
          return h.key === T ? u(d, f, h, E) : null;
        case Dn:
          return h.key === T ? s(d, f, h, E) : null;
        case Bt:
          return (T = h._init), m(d, f, T(h._payload), E);
      }
      if (Nr(h) || hr(h)) return T !== null ? null : c(d, f, h, E, null);
      Ll(d, h);
    }
    return null;
  }
  function k(d, f, h, E, T) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (d = d.get(h) || null), a(f, d, "" + E, T);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case yl:
          return (d = d.get(E.key === null ? h : E.key) || null), u(f, d, E, T);
        case Dn:
          return (d = d.get(E.key === null ? h : E.key) || null), s(f, d, E, T);
        case Bt:
          var v = E._init;
          return k(d, f, h, v(E._payload), T);
      }
      if (Nr(E) || hr(E)) return (d = d.get(h) || null), c(f, d, E, T, null);
      Ll(f, E);
    }
    return null;
  }
  function S(d, f, h, E) {
    for (
      var T = null, v = null, _ = f, j = (f = 0), O = null;
      _ !== null && j < h.length;
      j++
    ) {
      _.index > j ? ((O = _), (_ = null)) : (O = _.sibling);
      var I = m(d, _, h[j], E);
      if (I === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && I.alternate === null && t(d, _),
        (f = i(I, f, j)),
        v === null ? (T = I) : (v.sibling = I),
        (v = I),
        (_ = O);
    }
    if (j === h.length) return n(d, _), ie && un(d, j), T;
    if (_ === null) {
      for (; j < h.length; j++)
        (_ = p(d, h[j], E)),
          _ !== null &&
            ((f = i(_, f, j)), v === null ? (T = _) : (v.sibling = _), (v = _));
      return ie && un(d, j), T;
    }
    for (_ = r(d, _); j < h.length; j++)
      (O = k(_, d, j, h[j], E)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? j : O.key),
          (f = i(O, f, j)),
          v === null ? (T = O) : (v.sibling = O),
          (v = O));
    return (
      e &&
        _.forEach(function (X) {
          return t(d, X);
        }),
      ie && un(d, j),
      T
    );
  }
  function w(d, f, h, E) {
    var T = hr(h);
    if (typeof T != "function") throw Error(R(150));
    if (((h = T.call(h)), h == null)) throw Error(R(151));
    for (
      var v = (T = null), _ = f, j = (f = 0), O = null, I = h.next();
      _ !== null && !I.done;
      j++, I = h.next()
    ) {
      _.index > j ? ((O = _), (_ = null)) : (O = _.sibling);
      var X = m(d, _, I.value, E);
      if (X === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && X.alternate === null && t(d, _),
        (f = i(X, f, j)),
        v === null ? (T = X) : (v.sibling = X),
        (v = X),
        (_ = O);
    }
    if (I.done) return n(d, _), ie && un(d, j), T;
    if (_ === null) {
      for (; !I.done; j++, I = h.next())
        (I = p(d, I.value, E)),
          I !== null &&
            ((f = i(I, f, j)), v === null ? (T = I) : (v.sibling = I), (v = I));
      return ie && un(d, j), T;
    }
    for (_ = r(d, _); !I.done; j++, I = h.next())
      (I = k(_, d, j, I.value, E)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? j : I.key),
          (f = i(I, f, j)),
          v === null ? (T = I) : (v.sibling = I),
          (v = I));
    return (
      e &&
        _.forEach(function (ve) {
          return t(d, ve);
        }),
      ie && un(d, j),
      T
    );
  }
  function C(d, f, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case yl:
          e: {
            for (var T = h.key, v = f; v !== null; ) {
              if (v.key === T) {
                if (((T = h.type), T === Mn)) {
                  if (v.tag === 7) {
                    n(d, v.sibling),
                      (f = l(v, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  v.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Bt &&
                    cs(T) === v.type)
                ) {
                  n(d, v.sibling),
                    (f = l(v, h.props)),
                    (f.ref = wr(d, v, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            h.type === Mn
              ? ((f = vn(h.props.children, d.mode, E, h.key)),
                (f.return = d),
                (d = f))
              : ((E = Ql(h.type, h.key, h.props, null, d.mode, E)),
                (E.ref = wr(d, f, h)),
                (E.return = d),
                (d = E));
          }
          return o(d);
        case Dn:
          e: {
            for (v = h.key; f !== null; ) {
              if (f.key === v)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = po(h, d.mode, E)), (f.return = d), (d = f);
          }
          return o(d);
        case Bt:
          return (v = h._init), C(d, f, v(h._payload), E);
      }
      if (Nr(h)) return S(d, f, h, E);
      if (hr(h)) return w(d, f, h, E);
      Ll(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = fo(h, d.mode, E)), (f.return = d), (d = f)),
        o(d))
      : n(d, f);
  }
  return C;
}
var tr = yf(!0),
  wf = yf(!1),
  fl = {},
  wt = rn(fl),
  qr = rn(fl),
  br = rn(fl);
function dn(e) {
  if (e === fl) throw Error(R(174));
  return e;
}
function Va(e, t) {
  switch ((ee(br, t), ee(qr, e), ee(wt, fl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ro(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ro(t, e));
  }
  re(wt), ee(wt, t);
}
function nr() {
  re(wt), re(qr), re(br);
}
function Sf(e) {
  dn(br.current);
  var t = dn(wt.current),
    n = Ro(t, e.type);
  t !== n && (ee(qr, e), ee(wt, n));
}
function Ha(e) {
  qr.current === e && (re(wt), re(qr));
}
var oe = rn(0);
function ui(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var io = [];
function Wa() {
  for (var e = 0; e < io.length; e++)
    io[e]._workInProgressVersionPrimary = null;
  io.length = 0;
}
var Bl = jt.ReactCurrentDispatcher,
  oo = jt.ReactCurrentBatchConfig,
  wn = 0,
  ae = null,
  ge = null,
  ke = null,
  si = !1,
  Fr = !1,
  el = 0,
  Uh = 0;
function Ne() {
  throw Error(R(321));
}
function Qa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Ka(e, t, n, r, l, i) {
  if (
    ((wn = i),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bl.current = e === null || e.memoizedState === null ? Vh : Hh),
    (e = n(r, l)),
    Fr)
  ) {
    i = 0;
    do {
      if (((Fr = !1), (el = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (ke = ge = null),
        (t.updateQueue = null),
        (Bl.current = Wh),
        (e = n(r, l));
    } while (Fr);
  }
  if (
    ((Bl.current = ci),
    (t = ge !== null && ge.next !== null),
    (wn = 0),
    (ke = ge = ae = null),
    (si = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Ya() {
  var e = el !== 0;
  return (el = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ae.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function lt() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = ke === null ? ae.memoizedState : ke.next;
  if (t !== null) (ke = t), (ge = e);
  else {
    if (e === null) throw Error(R(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      ke === null ? (ae.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function tl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var c = s.lane;
      if ((wn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = p), (o = r)) : (u = u.next = p),
          (ae.lanes |= c),
          (Sn |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      pt(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ae.lanes |= i), (Sn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uo(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    pt(i, t.memoizedState) || (Ae = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function kf() {}
function xf(e, t) {
  var n = ae,
    r = lt(),
    l = t(),
    i = !pt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ae = !0)),
    (r = r.queue),
    Xa(_f.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      nl(9, Cf.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(R(349));
    wn & 30 || Ef(n, t, l);
  }
  return l;
}
function Ef(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pf(t) && Rf(e);
}
function _f(e, t, n) {
  return n(function () {
    Pf(t) && Rf(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Rf(e) {
  var t = Lt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function fs(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $h.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function nl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nf() {
  return lt().memoizedState;
}
function $l(e, t, n, r) {
  var l = vt();
  (ae.flags |= e),
    (l.memoizedState = nl(1 | t, n, void 0, r === void 0 ? null : r));
}
function _i(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((i = o.destroy), r !== null && Qa(r, o.deps))) {
      l.memoizedState = nl(t, n, i, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = nl(1 | t, n, i, r));
}
function ds(e, t) {
  return $l(8390656, 8, e, t);
}
function Xa(e, t) {
  return _i(2048, 8, e, t);
}
function Lf(e, t) {
  return _i(4, 2, e, t);
}
function Tf(e, t) {
  return _i(4, 4, e, t);
}
function jf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Df(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _i(4, 4, jf.bind(null, t, e), n)
  );
}
function Ga() {}
function Mf(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zf(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Of(e, t, n) {
  return wn & 21
    ? (pt(n, t) || ((n = Ic()), (ae.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function Ah(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oo.transition;
  oo.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (oo.transition = r);
  }
}
function Ff() {
  return lt().memoizedState;
}
function Bh(e, t, n) {
  var r = qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    If(e))
  )
    Uf(t, n);
  else if (((n = hf(e, t, n, r)), n !== null)) {
    var l = ze();
    dt(n, e, r, l), Af(n, t, r);
  }
}
function $h(e, t, n) {
  var r = qt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (If(e)) Uf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), pt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ba(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = hf(e, t, l, r)),
      n !== null && ((l = ze()), dt(n, e, r, l), Af(n, t, r));
  }
}
function If(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Uf(e, t) {
  Fr = si = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Af(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pa(e, n);
  }
}
var ci = {
    readContext: rt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: rt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: ds,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $l(4194308, 4, jf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $l(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $l(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bh.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fs,
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = fs(!1),
        t = e[0];
      return (e = Ah.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = vt();
      if (ie) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(R(349));
        wn & 30 || Ef(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ds(_f.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        nl(9, Cf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = xe.identifierPrefix;
      if (ie) {
        var n = Ct,
          r = Et;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = el++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hh = {
    readContext: rt,
    useCallback: Mf,
    useContext: rt,
    useEffect: Xa,
    useImperativeHandle: Df,
    useInsertionEffect: Lf,
    useLayoutEffect: Tf,
    useMemo: zf,
    useReducer: ao,
    useRef: Nf,
    useState: function () {
      return ao(tl);
    },
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      var t = lt();
      return Of(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(tl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: xf,
    useId: Ff,
    unstable_isNewReconciler: !1,
  },
  Wh = {
    readContext: rt,
    useCallback: Mf,
    useContext: rt,
    useEffect: Xa,
    useImperativeHandle: Df,
    useInsertionEffect: Lf,
    useLayoutEffect: Tf,
    useMemo: zf,
    useReducer: uo,
    useRef: Nf,
    useState: function () {
      return uo(tl);
    },
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      var t = lt();
      return ge === null ? (t.memoizedState = e) : Of(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = uo(tl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: xf,
    useId: Ff,
    unstable_isNewReconciler: !1,
  };
function rr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function so(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qh = typeof WeakMap == "function" ? WeakMap : Map;
function Bf(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      di || ((di = !0), (oa = r)), Jo(e, t);
    }),
    n
  );
}
function $f(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Jo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Jo(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ps(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = im.bind(null, e, t, n)), t.then(e, e));
}
function hs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ms(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Kh = jt.ReactCurrentOwner,
  Ae = !1;
function Me(e, t, n, r) {
  t.child = e === null ? wf(t, null, n, r) : tr(t, e.child, n, r);
}
function vs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Jn(t, l),
    (r = Ka(e, t, n, r, i, l)),
    (n = Ya()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Tt(e, t, l))
      : (ie && n && za(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  );
}
function gs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ru(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Vf(e, t, i, r, l))
      : ((e = Ql(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xr), n(o, r) && e.ref === t.ref)
    )
      return Tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = bt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xr(i, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), Tt(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function Hf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Hn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Hn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ee(Hn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Hn, Qe),
      (Qe |= r);
  return Me(e, t, l, n), t.child;
}
function Wf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var i = $e(n) ? gn : je.current;
  return (
    (i = bn(t, i)),
    Jn(t, l),
    (n = Ka(e, t, n, r, i, l)),
    (r = Ya()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Tt(e, t, l))
      : (ie && r && za(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  );
}
function ys(e, t, n, r, l) {
  if ($e(n)) {
    var i = !0;
    ni(t);
  } else i = !1;
  if ((Jn(t, l), t.stateNode === null))
    Vl(e, t), gf(t, n, r), Go(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((s = $e(n) ? gn : je.current), (s = bn(t, s)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && ss(t, o, r, s)),
      ($t = !1);
    var m = t.memoizedState;
    (o.state = m),
      ai(t, r, o, l),
      (u = t.memoizedState),
      a !== r || m !== u || Be.current || $t
        ? (typeof c == "function" && (Xo(t, n, c, r), (u = t.memoizedState)),
          (a = $t || us(t, n, a, r, m, u, s))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      mf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : at(t.type, a)),
      (o.props = s),
      (p = t.pendingProps),
      (m = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = rt(u))
        : ((u = $e(n) ? gn : je.current), (u = bn(t, u)));
    var k = n.getDerivedStateFromProps;
    (c =
      typeof k == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== p || m !== u) && ss(t, o, r, u)),
      ($t = !1),
      (m = t.memoizedState),
      (o.state = m),
      ai(t, r, o, l);
    var S = t.memoizedState;
    a !== p || m !== S || Be.current || $t
      ? (typeof k == "function" && (Xo(t, n, k, r), (S = t.memoizedState)),
        (s = $t || us(t, n, s, r, m, S, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qo(e, t, n, r, i, l);
}
function qo(e, t, n, r, l, i) {
  Wf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && rs(t, n, !1), Tt(e, t, i);
  (r = t.stateNode), (Kh.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tr(t, e.child, null, i)), (t.child = tr(t, null, a, i)))
      : Me(e, t, a, i),
    (t.memoizedState = r.state),
    l && rs(t, n, !0),
    t.child
  );
}
function Qf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ns(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ns(e, t.context, !1),
    Va(e, t.containerInfo);
}
function ws(e, t, n, r, l) {
  return er(), Fa(l), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(oe, l & 1),
    e === null)
  )
    return (
      Ko(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ni(o, r, 0, null)),
              (e = vn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ea(n)),
              (t.memoizedState = bo),
              e)
            : Ja(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Yh(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = bt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = bt(a, i)) : ((i = vn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ea(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = bt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ja(e, t) {
  return (
    (t = Ni({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tl(e, t, n, r) {
  return (
    r !== null && Fa(r),
    tr(t, e.child, null, n),
    (e = Ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = so(Error(R(422)))), Tl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Ni({ mode: "visible", children: r.children }, l, 0, null)),
          (i = vn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && tr(t, e.child, null, o),
          (t.child.memoizedState = ea(o)),
          (t.memoizedState = bo),
          i);
  if (!(t.mode & 1)) return Tl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(R(419))), (r = so(i, r, void 0)), Tl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ae || a)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Lt(e, l), dt(r, e, l, -1));
    }
    return nu(), (r = so(Error(R(421)))), Tl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = om.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ke = Gt(l.nextSibling)),
      (Ye = t),
      (ie = !0),
      (ct = null),
      e !== null &&
        ((be[et++] = Et),
        (be[et++] = Ct),
        (be[et++] = yn),
        (Et = e.id),
        (Ct = e.overflow),
        (yn = t)),
      (t = Ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ss(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yo(e.return, t, n);
}
function co(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Yf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Me(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ss(e, n, t);
        else if (e.tag === 19) Ss(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ui(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          co(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ui(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        co(t, !0, n, null, i);
        break;
      case "together":
        co(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xh(e, t, n) {
  switch (t.tag) {
    case 3:
      Qf(t), er();
      break;
    case 5:
      Sf(t);
      break;
    case 1:
      $e(t.type) && ni(t);
      break;
    case 4:
      Va(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ee(ii, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Kf(e, t, n)
            : (ee(oe, oe.current & 1),
              (e = Tt(e, t, n)),
              e !== null ? e.sibling : null);
      ee(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Yf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hf(e, t, n);
  }
  return Tt(e, t, n);
}
var Xf, ta, Gf, Jf;
Xf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ta = function () {};
Gf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), dn(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Eo(e, l)), (r = Eo(e, r)), (i = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Po(e, l)), (r = Po(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ei);
    }
    No(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            ($r.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (i = i || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                ($r.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && ne("scroll", e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Jf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gh(e, t, n) {
  var r = t.pendingProps;
  switch ((Oa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return $e(t.type) && ti(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        re(Be),
        re(je),
        Wa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (sa(ct), (ct = null)))),
        ta(e, t),
        Le(t),
        null
      );
    case 5:
      Ha(t);
      var l = dn(br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Le(t), null;
        }
        if (((e = dn(wt.current)), Nl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[Zr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tr.length; l++) ne(Tr[l], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Lu(r, i), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              ju(r, i), ne("invalid", r);
          }
          No(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : $r.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              wl(r), Tu(r, i, !0);
              break;
            case "textarea":
              wl(r), Du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ei);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[gt] = t),
            (e[Zr] = r),
            Xf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Lo(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tr.length; l++) ne(Tr[l], e);
                l = r;
                break;
              case "source":
                ne("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (l = r);
                break;
              case "details":
                ne("toggle", e), (l = r);
                break;
              case "input":
                Lu(e, r), (l = Eo(e, r)), ne("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                ju(e, r), (l = Po(e, r)), ne("invalid", e);
                break;
              default:
                l = r;
            }
            No(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? _c(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Ec(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Vr(e, u)
                        : typeof u == "number" && Vr(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        ($r.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && ne("scroll", e)
                          : u != null && Sa(e, i, u, o));
              }
            switch (n) {
              case "input":
                wl(e), Tu(e, r, !1);
                break;
              case "textarea":
                wl(e), Du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Kn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ei);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Jf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = dn(br.current)), dn(wt.current), Nl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (re(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Ke !== null && t.mode & 1 && !(t.flags & 128))
          pf(), er(), (t.flags |= 98560), (i = !1);
        else if (((i = Nl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[gt] = t;
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (i = !1);
        } else ct !== null && (sa(ct), (ct = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? ye === 0 && (ye = 3) : nu())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        nr(), ta(e, t), e === null && Gr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Aa(t.type._context), Le(t), null;
    case 17:
      return $e(t.type) && ti(), Le(t), null;
    case 19:
      if ((re(oe), (i = t.memoizedState), i === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Sr(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ui(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > lr &&
            ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ui(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ie)
            )
              return Le(t), null;
          } else
            2 * pe() - i.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = oe.current),
          ee(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        tu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Jh(e, t) {
  switch ((Oa(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && ti(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nr(),
        re(Be),
        re(je),
        Wa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ha(t), null;
    case 13:
      if (
        (re(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(oe), null;
    case 4:
      return nr(), null;
    case 10:
      return Aa(t.type._context), null;
    case 22:
    case 23:
      return tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1,
  Te = !1,
  Zh = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function na(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var ks = !1;
function qh(e, t) {
  if (((Ao = Zl), (e = bc()), Ma(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var k;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (k = p.firstChild) !== null;

            )
              (m = p), (p = k);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++s === l && (a = o),
                m === i && ++c === r && (u = o),
                (k = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = k;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bo = { focusedElem: e, selectionRange: n }, Zl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    C = S.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : at(t.type, w),
                      C,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (E) {
          ce(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (S = ks), (ks = !1), S;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && na(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ra(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Zf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Zf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[Zr], delete t[Ho], delete t[zh], delete t[Oh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function la(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ei));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (la(e, t, n), e = e.sibling; e !== null; ) la(e, t, n), (e = e.sibling);
}
function ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
var _e = null,
  ut = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) bf(e, t, n), (n = n.sibling);
}
function bf(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(yi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Vn(n, t);
    case 6:
      var r = _e,
        l = ut;
      (_e = null),
        Ut(e, t, n),
        (_e = r),
        (ut = l),
        _e !== null &&
          (ut
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null &&
        (ut
          ? ((e = _e),
            (n = n.stateNode),
            e.nodeType === 8
              ? ro(e.parentNode, n)
              : e.nodeType === 1 && ro(e, n),
            Kr(e))
          : ro(_e, n.stateNode));
      break;
    case 4:
      (r = _e),
        (l = ut),
        (_e = n.stateNode.containerInfo),
        (ut = !0),
        Ut(e, t, n),
        (_e = r),
        (ut = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && na(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), Ut(e, t, n), (Te = r))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function Es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zh()),
      t.forEach(function (r) {
        var l = am.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (_e = a.stateNode), (ut = !1);
              break e;
            case 3:
              (_e = a.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (_e = a.stateNode.containerInfo), (ut = !0);
              break e;
          }
          a = a.return;
        }
        if (_e === null) throw Error(R(160));
        bf(i, o, l), (_e = null), (ut = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ed(t, e), (t = t.sibling);
}
function ed(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), mt(e), r & 4)) {
        try {
          Ir(3, e, e.return), Pi(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          Ir(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      ot(t, e), mt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        mt(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vr(l, "");
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Sc(l, i),
              Lo(a, o);
            var s = Lo(a, i);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                p = u[o + 1];
              c === "style"
                ? _c(l, p)
                : c === "dangerouslySetInnerHTML"
                  ? Ec(l, p)
                  : c === "children"
                    ? Vr(l, p)
                    : Sa(l, c, p, s);
            }
            switch (a) {
              case "input":
                Co(l, i);
                break;
              case "textarea":
                kc(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var k = i.value;
                k != null
                  ? Kn(l, !!i.multiple, k, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Kn(l, !!i.multiple, i.defaultValue, !0)
                      : Kn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Zr] = i;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ot(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kr(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      ot(t, e), mt(e);
      break;
    case 13:
      ot(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ba = pe())),
        r & 4 && Es(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (s = Te) || c), ot(t, e), (Te = s)) : ot(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (p = M = c; M !== null; ) {
              switch (((m = M), (k = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, m, m.return);
                  break;
                case 1:
                  Vn(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    _s(p);
                    continue;
                  }
              }
              k !== null ? ((k.return = m), (M = k)) : _s(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Cc("display", o)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), mt(e), r & 4 && Es(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vr(l, ""), (r.flags &= -33));
          var i = xs(e);
          ia(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = xs(e);
          la(e, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bh(e, t, n) {
  (M = e), td(e);
}
function td(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Te;
        a = jl;
        var s = Te;
        if (((jl = o), (Te = u) && !s))
          for (M = l; M !== null; )
            (o = M),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ps(l)
                : u !== null
                  ? ((u.return = o), (M = u))
                  : Ps(l);
        for (; i !== null; ) (M = i), td(i), (i = i.sibling);
        (M = l), (jl = a), (Te = s);
      }
      Cs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (M = i)) : Cs(e);
  }
}
function Cs(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Pi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && as(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                as(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && Kr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Te || (t.flags & 512 && ra(t));
      } catch (m) {
        ce(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function _s(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ps(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pi(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var i = t.return;
          try {
            ra(t);
          } catch (u) {
            ce(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ra(t);
          } catch (u) {
            ce(t, o, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var em = Math.ceil,
  fi = jt.ReactCurrentDispatcher,
  Za = jt.ReactCurrentOwner,
  nt = jt.ReactCurrentBatchConfig,
  Y = 0,
  xe = null,
  me = null,
  Pe = 0,
  Qe = 0,
  Hn = rn(0),
  ye = 0,
  rl = null,
  Sn = 0,
  Ri = 0,
  qa = 0,
  Ur = null,
  Ue = null,
  ba = 0,
  lr = 1 / 0,
  St = null,
  di = !1,
  oa = null,
  Zt = null,
  Dl = !1,
  Qt = null,
  pi = 0,
  Ar = 0,
  aa = null,
  Hl = -1,
  Wl = 0;
function ze() {
  return Y & 6 ? pe() : Hl !== -1 ? Hl : (Hl = pe());
}
function qt(e) {
  return e.mode & 1
    ? Y & 2 && Pe !== 0
      ? Pe & -Pe
      : Ih.transition !== null
        ? (Wl === 0 && (Wl = Ic()), Wl)
        : ((e = Z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wc(e.type))),
          e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (aa = null), Error(R(185)));
  ul(e, n, r),
    (!(Y & 2) || e !== xe) &&
      (e === xe && (!(Y & 2) && (Ri |= n), ye === 4 && Ht(e, Pe)),
      Ve(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((lr = pe() + 500), Ei && ln()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Ip(e, t);
  var r = Jl(e, e === xe ? Pe : 0);
  if (r === 0)
    n !== null && Ou(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ou(n), t === 1))
      e.tag === 0 ? Fh(Rs.bind(null, e)) : cf(Rs.bind(null, e)),
        Dh(function () {
          !(Y & 6) && ln();
        }),
        (n = null);
    else {
      switch (Uc(r)) {
        case 1:
          n = _a;
          break;
        case 4:
          n = Oc;
          break;
        case 16:
          n = Gl;
          break;
        case 536870912:
          n = Fc;
          break;
        default:
          n = Gl;
      }
      n = sd(n, nd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function nd(e, t) {
  if (((Hl = -1), (Wl = 0), Y & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = Jl(e, e === xe ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hi(e, r);
  else {
    t = r;
    var l = Y;
    Y |= 2;
    var i = ld();
    (xe !== e || Pe !== t) && ((St = null), (lr = pe() + 500), mn(e, t));
    do
      try {
        rm();
        break;
      } catch (a) {
        rd(e, a);
      }
    while (!0);
    Ua(),
      (fi.current = i),
      (Y = l),
      me !== null ? (t = 0) : ((xe = null), (Pe = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zo(e)), l !== 0 && ((r = l), (t = ua(e, l)))), t === 1)
    )
      throw ((n = rl), mn(e, 0), Ht(e, r), Ve(e, pe()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !tm(l) &&
          ((t = hi(e, r)),
          t === 2 && ((i = zo(e)), i !== 0 && ((r = i), (t = ua(e, i)))),
          t === 1))
      )
        throw ((n = rl), mn(e, 0), Ht(e, r), Ve(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          sn(e, Ue, St);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = ba + 500 - pe()), 10 < t))
          ) {
            if (Jl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Vo(sn.bind(null, e, Ue, St), t);
            break;
          }
          sn(e, Ue, St);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ft(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * em(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vo(sn.bind(null, e, Ue, St), r);
            break;
          }
          sn(e, Ue, St);
          break;
        case 5:
          sn(e, Ue, St);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ve(e, pe()), e.callbackNode === n ? nd.bind(null, e) : null;
}
function ua(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    (e = hi(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && sa(t)),
    e
  );
}
function sa(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!pt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ht(e, t) {
  for (
    t &= ~qa,
      t &= ~Ri,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rs(e) {
  if (Y & 6) throw Error(R(327));
  Zn();
  var t = Jl(e, 0);
  if (!(t & 1)) return Ve(e, pe()), null;
  var n = hi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zo(e);
    r !== 0 && ((t = r), (n = ua(e, r)));
  }
  if (n === 1) throw ((n = rl), mn(e, 0), Ht(e, t), Ve(e, pe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Ue, St),
    Ve(e, pe()),
    null
  );
}
function eu(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((lr = pe() + 500), Ei && ln());
  }
}
function kn(e) {
  Qt !== null && Qt.tag === 0 && !(Y & 6) && Zn();
  var t = Y;
  Y |= 1;
  var n = nt.transition,
    r = Z;
  try {
    if (((nt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (nt.transition = n), (Y = t), !(Y & 6) && ln();
  }
}
function tu() {
  (Qe = Hn.current), re(Hn);
}
function mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jh(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Oa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ti();
          break;
        case 3:
          nr(), re(Be), re(je), Wa();
          break;
        case 5:
          Ha(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          re(oe);
          break;
        case 19:
          re(oe);
          break;
        case 10:
          Aa(r.type._context);
          break;
        case 22:
        case 23:
          tu();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (me = e = bt(e.current, null)),
    (Pe = Qe = t),
    (ye = 0),
    (rl = null),
    (qa = Ri = Sn = 0),
    (Ue = Ur = null),
    fn !== null)
  ) {
    for (t = 0; t < fn.length; t++)
      if (((n = fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    fn = null;
  }
  return e;
}
function rd(e, t) {
  do {
    var n = me;
    try {
      if ((Ua(), (Bl.current = ci), si)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        si = !1;
      }
      if (
        ((wn = 0),
        (ke = ge = ae = null),
        (Fr = !1),
        (el = 0),
        (Za.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (rl = t), (me = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var k = hs(o);
          if (k !== null) {
            (k.flags &= -257),
              ms(k, o, a, i, t),
              k.mode & 1 && ps(i, s, t),
              (t = k),
              (u = s);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ps(i, s, t), nu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (ie && a.mode & 1) {
          var C = hs(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ms(C, o, a, i, t),
              Fa(rr(u, a));
            break e;
          }
        }
        (i = u = rr(u, a)),
          ye !== 4 && (ye = 2),
          Ur === null ? (Ur = [i]) : Ur.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = Bf(i, u, t);
              os(i, d);
              break e;
            case 1:
              a = u;
              var f = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = $f(i, a, t);
                os(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      od(n);
    } catch (T) {
      (t = T), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ld() {
  var e = fi.current;
  return (fi.current = ci), e === null ? ci : e;
}
function nu() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    xe === null || (!(Sn & 268435455) && !(Ri & 268435455)) || Ht(xe, Pe);
}
function hi(e, t) {
  var n = Y;
  Y |= 2;
  var r = ld();
  (xe !== e || Pe !== t) && ((St = null), mn(e, t));
  do
    try {
      nm();
      break;
    } catch (l) {
      rd(e, l);
    }
  while (!0);
  if ((Ua(), (Y = n), (fi.current = r), me !== null)) throw Error(R(261));
  return (xe = null), (Pe = 0), ye;
}
function nm() {
  for (; me !== null; ) id(me);
}
function rm() {
  for (; me !== null && !Np(); ) id(me);
}
function id(e) {
  var t = ud(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? od(e) : (me = t),
    (Za.current = null);
}
function od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Jh(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (me = null);
        return;
      }
    } else if (((n = Gh(n, t, Qe)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function sn(e, t, n) {
  var r = Z,
    l = nt.transition;
  try {
    (nt.transition = null), (Z = 1), lm(e, t, n, r);
  } finally {
    (nt.transition = l), (Z = r);
  }
  return null;
}
function lm(e, t, n, r) {
  do Zn();
  while (Qt !== null);
  if (Y & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Up(e, i),
    e === xe && ((me = xe = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dl ||
      ((Dl = !0),
      sd(Gl, function () {
        return Zn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = nt.transition), (nt.transition = null);
    var o = Z;
    Z = 1;
    var a = Y;
    (Y |= 4),
      (Za.current = null),
      qh(e, n),
      ed(n, e),
      Ch(Bo),
      (Zl = !!Ao),
      (Bo = Ao = null),
      (e.current = n),
      bh(n),
      Lp(),
      (Y = a),
      (Z = o),
      (nt.transition = i);
  } else e.current = n;
  if (
    (Dl && ((Dl = !1), (Qt = e), (pi = l)),
    (i = e.pendingLanes),
    i === 0 && (Zt = null),
    Dp(n.stateNode),
    Ve(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (di) throw ((di = !1), (e = oa), (oa = null), e);
  return (
    pi & 1 && e.tag !== 0 && Zn(),
    (i = e.pendingLanes),
    i & 1 ? (e === aa ? Ar++ : ((Ar = 0), (aa = e))) : (Ar = 0),
    ln(),
    null
  );
}
function Zn() {
  if (Qt !== null) {
    var e = Uc(pi),
      t = nt.transition,
      n = Z;
    try {
      if (((nt.transition = null), (Z = 16 > e ? 16 : e), Qt === null))
        var r = !1;
      else {
        if (((e = Qt), (Qt = null), (pi = 0), Y & 6)) throw Error(R(331));
        var l = Y;
        for (Y |= 4, M = e.current; M !== null; ) {
          var i = M,
            o = i.child;
          if (M.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (M = s; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (M = p);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var m = c.sibling,
                        k = c.return;
                      if ((Zf(c), c === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = k), (M = m);
                        break;
                      }
                      M = k;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (M = o);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (M = d);
                break e;
              }
              M = i.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          o = M;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (M = h);
          else
            e: for (o = f; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(9, a);
                  }
                } catch (T) {
                  ce(a, a.return, T);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (M = E);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((Y = l), ln(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(yi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (nt.transition = t);
    }
  }
  return !1;
}
function Ns(e, t, n) {
  (t = rr(n, t)),
    (t = Bf(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = ze()),
    e !== null && (ul(e, 1, t), Ve(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Ns(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ns(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = rr(n, e)),
            (e = $f(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = ze()),
            t !== null && (ul(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Pe & n) === n &&
      (ye === 4 || (ye === 3 && (Pe & 130023424) === Pe && 500 > pe() - ba)
        ? mn(e, 0)
        : (qa |= n)),
    Ve(e, t);
}
function ad(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xl), (xl <<= 1), !(xl & 130023424) && (xl = 4194304))
      : (t = 1));
  var n = ze();
  (e = Lt(e, t)), e !== null && (ul(e, t, n), Ve(e, n));
}
function om(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ad(e, n);
}
function am(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), ad(e, n);
}
var ud;
ud = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), Xh(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), ie && t.flags & 1048576 && ff(t, li, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vl(e, t), (e = t.pendingProps);
      var l = bn(t, je.current);
      Jn(t, n), (l = Ka(null, t, r, e, l, n));
      var i = Ya();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((i = !0), ni(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            $a(t),
            (l.updater = Ci),
            (t.stateNode = l),
            (l._reactInternals = t),
            Go(t, r, e, n),
            (t = qo(null, t, r, !0, i, n)))
          : ((t.tag = 0), ie && i && za(t), Me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = sm(r)),
          (e = at(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = ys(null, t, r, e, n);
            break e;
          case 11:
            t = vs(null, t, r, e, n);
            break e;
          case 14:
            t = gs(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        ys(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Qf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          mf(e, t),
          ai(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = rr(Error(R(423)), t)), (t = ws(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rr(Error(R(424)), t)), (t = ws(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Gt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                ie = !0,
                ct = null,
                n = wf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((er(), r === l)) {
            t = Tt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sf(t),
        e === null && Ko(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        $o(r, l) ? (o = null) : i !== null && $o(r, i) && (t.flags |= 32),
        Wf(e, t),
        Me(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ko(t), null;
    case 13:
      return Kf(e, t, n);
    case 4:
      return (
        Va(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        vs(e, t, r, l, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          ee(ii, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (pt(i.value, o)) {
            if (i.children === l.children && !Be.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = _t(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Yo(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(R(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Yo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = at(r, t.pendingProps)),
        (l = at(r.type, l)),
        gs(e, t, r, l, n)
      );
    case 15:
      return Vf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Vl(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), ni(t)) : (e = !1),
        Jn(t, n),
        gf(t, r, l),
        Go(t, r, l, n),
        qo(null, t, r, !0, e, n)
      );
    case 19:
      return Yf(e, t, n);
    case 22:
      return Hf(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function sd(e, t) {
  return zc(e, t);
}
function um(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tt(e, t, n, r) {
  return new um(e, t, n, r);
}
function ru(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sm(e) {
  if (typeof e == "function") return ru(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xa)) return 11;
    if (e === Ea) return 14;
  }
  return 2;
}
function bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ql(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ru(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mn:
        return vn(n.children, l, i, t);
      case ka:
        (o = 8), (l |= 8);
        break;
      case wo:
        return (
          (e = tt(12, n, t, l | 2)), (e.elementType = wo), (e.lanes = i), e
        );
      case So:
        return (e = tt(13, n, t, l)), (e.elementType = So), (e.lanes = i), e;
      case ko:
        return (e = tt(19, n, t, l)), (e.elementType = ko), (e.lanes = i), e;
      case gc:
        return Ni(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mc:
              o = 10;
              break e;
            case vc:
              o = 9;
              break e;
            case xa:
              o = 11;
              break e;
            case Ea:
              o = 14;
              break e;
            case Bt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function vn(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function Ni(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = gc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fo(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function po(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ki(0)),
    (this.expirationTimes = Ki(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ki(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function lu(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new cm(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = tt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $a(i),
    e
  );
}
function fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cd(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return sf(e, n, t);
  }
  return t;
}
function fd(e, t, n, r, l, i, o, a, u) {
  return (
    (e = lu(n, r, !0, e, l, i, o, a, u)),
    (e.context = cd(null)),
    (n = e.current),
    (r = ze()),
    (l = qt(n)),
    (i = _t(r, l)),
    (i.callback = t ?? null),
    Jt(n, i, l),
    (e.current.lanes = l),
    ul(e, l, r),
    Ve(e, r),
    e
  );
}
function Li(e, t, n, r) {
  var l = t.current,
    i = ze(),
    o = qt(l);
  return (
    (n = cd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(l, t, o)),
    e !== null && (dt(e, l, o, i), Al(e, l, o)),
    o
  );
}
function mi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ls(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function iu(e, t) {
  Ls(e, t), (e = e.alternate) && Ls(e, t);
}
function dm() {
  return null;
}
var dd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ou(e) {
  this._internalRoot = e;
}
Ti.prototype.render = ou.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Li(e, t, null, null);
};
Ti.prototype.unmount = ou.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function () {
      Li(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function Ti(e) {
  this._internalRoot = e;
}
Ti.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function au(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ji(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ts() {}
function pm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = mi(o);
        i.call(s);
      };
    }
    var o = fd(t, r, e, 0, null, !1, !1, "", Ts);
    return (
      (e._reactRootContainer = o),
      (e[Nt] = o.current),
      Gr(e.nodeType === 8 ? e.parentNode : e),
      kn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = mi(u);
      a.call(s);
    };
  }
  var u = lu(e, 0, !1, null, null, !1, !1, "", Ts);
  return (
    (e._reactRootContainer = u),
    (e[Nt] = u.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      Li(t, u, n, r);
    }),
    u
  );
}
function Di(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = mi(o);
        a.call(u);
      };
    }
    Li(t, o, e, l);
  } else o = pm(n, t, e, l, r);
  return mi(o);
}
Ac = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 &&
          (Pa(t, n | 1), Ve(t, pe()), !(Y & 6) && ((lr = pe() + 500), ln()));
      }
      break;
    case 13:
      kn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var l = ze();
          dt(r, e, 1, l);
        }
      }),
        iu(e, 1);
  }
};
Ra = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = ze();
      dt(t, e, 134217728, n);
    }
    iu(e, 134217728);
  }
};
Bc = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = ze();
      dt(n, e, t, r);
    }
    iu(e, t);
  }
};
$c = function () {
  return Z;
};
Vc = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
jo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Co(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xi(r);
            if (!l) throw Error(R(90));
            wc(r), Co(r, l);
          }
        }
      }
      break;
    case "textarea":
      kc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
  }
};
Nc = eu;
Lc = kn;
var hm = { usingClientEntryPoint: !1, Events: [cl, In, xi, Pc, Rc, eu] },
  kr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mm = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Dc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || dm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ml.isDisabled && Ml.supportsFiber)
    try {
      (yi = Ml.inject(mm)), (yt = Ml);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(R(200));
  return fm(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!au(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = dd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Nt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new ou(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Dc(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return kn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!ji(t)) throw Error(R(200));
  return Di(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!au(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = dd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = fd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Nt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ti(t);
};
Ge.render = function (e, t, n) {
  if (!ji(t)) throw Error(R(200));
  return Di(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!ji(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (kn(function () {
        Di(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = eu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ji(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Di(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function pd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd);
    } catch (e) {
      console.error(e);
    }
}
pd(), (cc.exports = Ge);
var uu = cc.exports;
const vm = qs(uu),
  gm = Zs({ __proto__: null, default: vm }, [uu]);
var js = uu;
(go.createRoot = js.createRoot), (go.hydrateRoot = js.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
var de;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(de || (de = {}));
const Ds = "popstate";
function ym(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return ll(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : xn(l);
  }
  return Sm(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ir(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function wm() {
  return Math.random().toString(36).substr(2, 8);
}
function Ms(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ll(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dt(t) : t,
      { state: n, key: (t && t.key) || r || wm() },
    )
  );
}
function xn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Sm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = de.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), o.replaceState(fe({}, o.state, { idx: s }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    a = de.Pop;
    let C = c(),
      d = C == null ? null : C - s;
    (s = C), u && u({ action: a, location: w.location, delta: d });
  }
  function m(C, d) {
    a = de.Push;
    let f = ll(w.location, C, d);
    n && n(f, C), (s = c() + 1);
    let h = Ms(f, s),
      E = w.createHref(f);
    try {
      o.pushState(h, "", E);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      l.location.assign(E);
    }
    i && u && u({ action: a, location: w.location, delta: 1 });
  }
  function k(C, d) {
    a = de.Replace;
    let f = ll(w.location, C, d);
    n && n(f, C), (s = c());
    let h = Ms(f, s),
      E = w.createHref(f);
    o.replaceState(h, "", E),
      i && u && u({ action: a, location: w.location, delta: 0 });
  }
  function S(C) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof C == "string" ? C : xn(C);
    return (
      (f = f.replace(/ $/, "%20")),
      W(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(C) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ds, p),
        (u = C),
        () => {
          l.removeEventListener(Ds, p), (u = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: S,
    encodeLocation(C) {
      let d = S(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: k,
    go(C) {
      return o.go(C);
    },
  };
  return w;
}
var se;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(se || (se = {}));
const km = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function xm(e) {
  return e.index === !0;
}
function ca(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (W(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        xm(l))
      ) {
        let u = fe({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = fe({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = ca(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Wn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dt(t) : t,
    l = sr(r.pathname || "/", n);
  if (l == null) return null;
  let i = hd(e);
  Cm(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let u = Fm(l);
    o = Mm(i[a], u);
  }
  return o;
}
function Em(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function hd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Pt([r, u.relativePath]),
      c = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (W(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      hd(i.children, t, c, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: jm(s, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of md(i.path)) l(i, o, u);
    }),
    t
  );
}
function md(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = md(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Cm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const _m = /^:[\w-]+$/,
  Pm = 3,
  Rm = 2,
  Nm = 1,
  Lm = 10,
  Tm = -2,
  zs = (e) => e === "*";
function jm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(zs) && (r += Tm),
    t && (r += Rm),
    n
      .filter((l) => !zs(l))
      .reduce((l, i) => l + (_m.test(i) ? Pm : i === "" ? Nm : Lm), r)
  );
}
function Dm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Mm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      u = o === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = zm(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = a.route;
    i.push({
      params: r,
      pathname: Pt([l, c.pathname]),
      pathnameBase: Am(Pt([l, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (l = Pt([l, c.pathnameBase]));
  }
  return i;
}
function zm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Om(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, c, p) => {
      let { paramName: m, isOptional: k } = c;
      if (m === "*") {
        let w = a[p] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const S = a[p];
      return (
        k && !S ? (s[m] = void 0) : (s[m] = (S || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Om(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ir(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Fm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ir(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function sr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Im(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Dt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Um(n, t)) : t,
    search: Bm(r),
    hash: $m(l),
  };
}
function Um(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ho(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function su(e, t) {
  let n = vd(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function cu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Dt(e))
    : ((l = fe({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        ho("?", "pathname", "search", l),
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        ho("#", "pathname", "hash", l),
      ),
      W(!l.search || !l.search.includes("#"), ho("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    a = p >= 0 ? t[p] : "/";
  }
  let u = Im(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Am = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Bm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $m = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class fu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function gd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const yd = ["post", "put", "patch", "delete"],
  Vm = new Set(yd),
  Hm = ["get", ...yd],
  Wm = new Set(Hm),
  Qm = new Set([301, 302, 303, 307, 308]),
  Km = new Set([307, 308]),
  mo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ym = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  wd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Xm = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Sd = "remix-router-transitions";
function Gm(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (y) => ({ hasErrorBoundary: g(y) });
  } else l = Xm;
  let i = {},
    o = ca(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future,
    ),
    c = null,
    p = new Set(),
    m = null,
    k = null,
    S = null,
    w = e.hydrationData != null,
    C = Wn(o, e.history.location, u),
    d = null;
  if (C == null) {
    let g = qe(404, { pathname: e.history.location.pathname }),
      { matches: y, route: x } = Vs(o);
    (C = y), (d = { [x.id]: g });
  }
  let f,
    h = C.some((g) => g.route.lazy),
    E = C.some((g) => g.route.loader);
  if (h) f = !1;
  else if (!E) f = !0;
  else if (s.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      y = e.hydrationData ? e.hydrationData.errors : null,
      x = (L) =>
        L.route.loader
          ? L.route.loader.hydrate === !0
            ? !1
            : (g && g[L.route.id] !== void 0) || (y && y[L.route.id] !== void 0)
          : !0;
    if (y) {
      let L = C.findIndex((z) => y[z.route.id] !== void 0);
      f = C.slice(0, L + 1).every(x);
    } else f = C.every(x);
  } else f = e.hydrationData != null;
  let T,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: f,
      navigation: mo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = de.Pop,
    j = !1,
    O,
    I = !1,
    X = new Map(),
    ve = null,
    he = !1,
    Ze = !1,
    Rn = [],
    Mt = [],
    le = new Map(),
    D = 0,
    A = -1,
    $ = new Map(),
    G = new Set(),
    te = new Map(),
    ht = new Map(),
    Ee = new Set(),
    it = new Map(),
    De = new Map(),
    zt = !1;
  function Td() {
    if (
      ((c = e.history.listen((g) => {
        let { action: y, location: x, delta: L } = g;
        if (zt) {
          zt = !1;
          return;
        }
        ir(
          De.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let z = Su({
          currentLocation: v.location,
          nextLocation: x,
          historyAction: y,
        });
        if (z && L != null) {
          (zt = !0),
            e.history.go(L * -1),
            hl(z, {
              state: "blocked",
              location: x,
              proceed() {
                hl(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: x,
                }),
                  e.history.go(L);
              },
              reset() {
                let H = new Map(v.blockers);
                H.set(z, xr), He({ blockers: H });
              },
            });
          return;
        }
        return on(y, x);
      })),
      n)
    ) {
      ov(t, X);
      let g = () => av(t, X);
      t.addEventListener("pagehide", g),
        (ve = () => t.removeEventListener("pagehide", g));
    }
    return v.initialized || on(de.Pop, v.location, { initialHydration: !0 }), T;
  }
  function jd() {
    c && c(),
      ve && ve(),
      p.clear(),
      O && O.abort(),
      v.fetchers.forEach((g, y) => pl(y)),
      v.blockers.forEach((g, y) => wu(y));
  }
  function Dd(g) {
    return p.add(g), () => p.delete(g);
  }
  function He(g, y) {
    y === void 0 && (y = {}), (v = fe({}, v, g));
    let x = [],
      L = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((z, H) => {
        z.state === "idle" && (Ee.has(H) ? L.push(H) : x.push(H));
      }),
      [...p].forEach((z) =>
        z(v, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: y.viewTransitionOpts,
          unstable_flushSync: y.flushSync === !0,
        }),
      ),
      s.v7_fetcherPersist &&
        (x.forEach((z) => v.fetchers.delete(z)), L.forEach((z) => pl(z)));
  }
  function cr(g, y, x) {
    var L, z;
    let { flushSync: H } = x === void 0 ? {} : x,
      B =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        st(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((L = g.state) == null ? void 0 : L._isRedirect) !== !0,
      U;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (U = y.actionData)
        : (U = null)
      : B
        ? (U = v.actionData)
        : (U = null);
    let F = y.loaderData
        ? $s(v.loaderData, y.loaderData, y.matches || [], y.errors)
        : v.loaderData,
      K = v.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((b, Ce) => K.set(Ce, xr)));
    let we =
      j === !0 ||
      (v.navigation.formMethod != null &&
        st(v.navigation.formMethod) &&
        ((z = g.state) == null ? void 0 : z._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      he ||
        _ === de.Pop ||
        (_ === de.Push
          ? e.history.push(g, g.state)
          : _ === de.Replace && e.history.replace(g, g.state));
    let V;
    if (_ === de.Pop) {
      let b = X.get(v.location.pathname);
      b && b.has(g.pathname)
        ? (V = { currentLocation: v.location, nextLocation: g })
        : X.has(g.pathname) &&
          (V = { currentLocation: g, nextLocation: v.location });
    } else if (I) {
      let b = X.get(v.location.pathname);
      b
        ? b.add(g.pathname)
        : ((b = new Set([g.pathname])), X.set(v.location.pathname, b)),
        (V = { currentLocation: v.location, nextLocation: g });
    }
    He(
      fe({}, y, {
        actionData: U,
        loaderData: F,
        historyAction: _,
        location: g,
        initialized: !0,
        navigation: mo,
        revalidation: "idle",
        restoreScrollPosition: xu(g, y.matches || v.matches),
        preventScrollReset: we,
        blockers: K,
      }),
      { viewTransitionOpts: V, flushSync: H === !0 },
    ),
      (_ = de.Pop),
      (j = !1),
      (I = !1),
      (he = !1),
      (Ze = !1),
      (Rn = []),
      (Mt = []);
  }
  async function pu(g, y) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let x = fa(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        g,
        s.v7_relativeSplatPath,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative,
      ),
      {
        path: L,
        submission: z,
        error: H,
      } = Os(s.v7_normalizeFormMethod, !1, x, y),
      B = v.location,
      U = ll(v.location, L, y && y.state);
    U = fe({}, U, e.history.encodeLocation(U));
    let F = y && y.replace != null ? y.replace : void 0,
      K = de.Push;
    F === !0
      ? (K = de.Replace)
      : F === !1 ||
        (z != null &&
          st(z.formMethod) &&
          z.formAction === v.location.pathname + v.location.search &&
          (K = de.Replace));
    let we =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      V = (y && y.unstable_flushSync) === !0,
      b = Su({ currentLocation: B, nextLocation: U, historyAction: K });
    if (b) {
      hl(b, {
        state: "blocked",
        location: U,
        proceed() {
          hl(b, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            pu(g, y);
        },
        reset() {
          let Ce = new Map(v.blockers);
          Ce.set(b, xr), He({ blockers: Ce });
        },
      });
      return;
    }
    return await on(K, U, {
      submission: z,
      pendingError: H,
      preventScrollReset: we,
      replace: y && y.replace,
      enableViewTransition: y && y.unstable_viewTransition,
      flushSync: V,
    });
  }
  function Md() {
    if (
      (Fi(),
      He({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        on(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      on(_ || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function on(g, y, x) {
    O && O.abort(),
      (O = null),
      (_ = g),
      (he = (x && x.startUninterruptedRevalidation) === !0),
      Vd(v.location, v.matches),
      (j = (x && x.preventScrollReset) === !0),
      (I = (x && x.enableViewTransition) === !0);
    let L = a || o,
      z = x && x.overrideNavigation,
      H = Wn(L, y, u),
      B = (x && x.flushSync) === !0;
    if (!H) {
      let Ce = qe(404, { pathname: y.pathname }),
        { matches: We, route: Se } = Vs(L);
      Ii(),
        cr(
          y,
          { matches: We, loaderData: {}, errors: { [Se.id]: Ce } },
          { flushSync: B },
        );
      return;
    }
    if (
      v.initialized &&
      !Ze &&
      ev(v.location, y) &&
      !(x && x.submission && st(x.submission.formMethod))
    ) {
      cr(y, { matches: H }, { flushSync: B });
      return;
    }
    O = new AbortController();
    let U = Cr(e.history, y, O.signal, x && x.submission),
      F,
      K;
    if (x && x.pendingError) K = { [Br(H).route.id]: x.pendingError };
    else if (x && x.submission && st(x.submission.formMethod)) {
      let Ce = await zd(U, y, x.submission, H, {
        replace: x.replace,
        flushSync: B,
      });
      if (Ce.shortCircuited) return;
      (F = Ce.pendingActionData),
        (K = Ce.pendingActionError),
        (z = vo(y, x.submission)),
        (B = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: we,
      loaderData: V,
      errors: b,
    } = await Od(
      U,
      y,
      H,
      z,
      x && x.submission,
      x && x.fetcherSubmission,
      x && x.replace,
      x && x.initialHydration === !0,
      B,
      F,
      K,
    );
    we ||
      ((O = null),
      cr(
        y,
        fe({ matches: H }, F ? { actionData: F } : {}, {
          loaderData: V,
          errors: b,
        }),
      ));
  }
  async function zd(g, y, x, L, z) {
    z === void 0 && (z = {}), Fi();
    let H = lv(y, x);
    He({ navigation: H }, { flushSync: z.flushSync === !0 });
    let B,
      U = pa(L, y);
    if (!U.route.action && !U.route.lazy)
      B = {
        type: se.error,
        error: qe(405, {
          method: g.method,
          pathname: y.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((B = await Er("action", g, U, L, i, l, u, s.v7_relativeSplatPath)),
      g.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (hn(B)) {
      let F;
      return (
        z && z.replace != null
          ? (F = z.replace)
          : (F = B.location === v.location.pathname + v.location.search),
        await fr(v, B, { submission: x, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Qn(B)) {
      let F = Br(L, U.route.id);
      return (
        (z && z.replace) !== !0 && (_ = de.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: B.error } }
      );
    }
    if (pn(B)) throw qe(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: B.data } };
  }
  async function Od(g, y, x, L, z, H, B, U, F, K, we) {
    let V = L || vo(y, z),
      b = z || H || Qs(V),
      Ce = a || o,
      [We, Se] = Fs(
        e.history,
        v,
        x,
        b,
        y,
        s.v7_partialHydration && U === !0,
        Ze,
        Rn,
        Mt,
        Ee,
        te,
        G,
        Ce,
        u,
        K,
        we,
      );
    if (
      (Ii(
        (J) =>
          !(x && x.some((q) => q.route.id === J)) ||
          (We && We.some((q) => q.route.id === J)),
      ),
      (A = ++D),
      We.length === 0 && Se.length === 0)
    ) {
      let J = gu();
      return (
        cr(
          y,
          fe(
            { matches: x, loaderData: {}, errors: we || null },
            K ? { actionData: K } : {},
            J ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: F },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!he && (!s.v7_partialHydration || !U)) {
      Se.forEach((q) => {
        let Ie = v.fetchers.get(q.key),
          vl = _r(void 0, Ie ? Ie.data : void 0);
        v.fetchers.set(q.key, vl);
      });
      let J = K || v.actionData;
      He(
        fe(
          { navigation: V },
          J
            ? Object.keys(J).length === 0
              ? { actionData: null }
              : { actionData: J }
            : {},
          Se.length > 0 ? { fetchers: new Map(v.fetchers) } : {},
        ),
        { flushSync: F },
      );
    }
    Se.forEach((J) => {
      le.has(J.key) && Ft(J.key), J.controller && le.set(J.key, J.controller);
    });
    let Nn = () => Se.forEach((J) => Ft(J.key));
    O && O.signal.addEventListener("abort", Nn);
    let {
      results: Ui,
      loaderResults: Ln,
      fetcherResults: It,
    } = await hu(v.matches, x, We, Se, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", Nn),
      Se.forEach((J) => le.delete(J.key));
    let an = Hs(Ui);
    if (an) {
      if (an.idx >= We.length) {
        let J = Se[an.idx - We.length].key;
        G.add(J);
      }
      return await fr(v, an.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: Ai, errors: pr } = Bs(v, x, We, Ln, we, Se, It, it);
    it.forEach((J, q) => {
      J.subscribe((Ie) => {
        (Ie || J.done) && it.delete(q);
      });
    }),
      s.v7_partialHydration &&
        U &&
        v.errors &&
        Object.entries(v.errors)
          .filter((J) => {
            let [q] = J;
            return !We.some((Ie) => Ie.route.id === q);
          })
          .forEach((J) => {
            let [q, Ie] = J;
            pr = Object.assign(pr || {}, { [q]: Ie });
          });
    let Bi = gu(),
      Tn = yu(A),
      ml = Bi || Tn || Se.length > 0;
    return fe(
      { loaderData: Ai, errors: pr },
      ml ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function Fd(g, y, x, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    le.has(g) && Ft(g);
    let z = (L && L.unstable_flushSync) === !0,
      H = a || o,
      B = fa(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        x,
        s.v7_relativeSplatPath,
        y,
        L == null ? void 0 : L.relative,
      ),
      U = Wn(H, B, u);
    if (!U) {
      dr(g, y, qe(404, { pathname: B }), { flushSync: z });
      return;
    }
    let {
      path: F,
      submission: K,
      error: we,
    } = Os(s.v7_normalizeFormMethod, !0, B, L);
    if (we) {
      dr(g, y, we, { flushSync: z });
      return;
    }
    let V = pa(U, F);
    if (((j = (L && L.preventScrollReset) === !0), K && st(K.formMethod))) {
      Id(g, y, F, V, U, z, K);
      return;
    }
    te.set(g, { routeId: y, path: F }), Ud(g, y, F, V, U, z, K);
  }
  async function Id(g, y, x, L, z, H, B) {
    if ((Fi(), te.delete(g), !L.route.action && !L.route.lazy)) {
      let q = qe(405, { method: B.formMethod, pathname: x, routeId: y });
      dr(g, y, q, { flushSync: H });
      return;
    }
    let U = v.fetchers.get(g);
    Ot(g, iv(B, U), { flushSync: H });
    let F = new AbortController(),
      K = Cr(e.history, x, F.signal, B);
    le.set(g, F);
    let we = D,
      V = await Er("action", K, L, z, i, l, u, s.v7_relativeSplatPath);
    if (K.signal.aborted) {
      le.get(g) === F && le.delete(g);
      return;
    }
    if (s.v7_fetcherPersist && Ee.has(g)) {
      if (hn(V) || Qn(V)) {
        Ot(g, At(void 0));
        return;
      }
    } else {
      if (hn(V))
        if ((le.delete(g), A > we)) {
          Ot(g, At(void 0));
          return;
        } else
          return G.add(g), Ot(g, _r(B)), fr(v, V, { fetcherSubmission: B });
      if (Qn(V)) {
        dr(g, y, V.error);
        return;
      }
    }
    if (pn(V)) throw qe(400, { type: "defer-action" });
    let b = v.navigation.location || v.location,
      Ce = Cr(e.history, b, F.signal),
      We = a || o,
      Se =
        v.navigation.state !== "idle"
          ? Wn(We, v.navigation.location, u)
          : v.matches;
    W(Se, "Didn't find any matches after fetcher action");
    let Nn = ++D;
    $.set(g, Nn);
    let Ui = _r(B, V.data);
    v.fetchers.set(g, Ui);
    let [Ln, It] = Fs(
      e.history,
      v,
      Se,
      B,
      b,
      !1,
      Ze,
      Rn,
      Mt,
      Ee,
      te,
      G,
      We,
      u,
      { [L.route.id]: V.data },
      void 0,
    );
    It.filter((q) => q.key !== g).forEach((q) => {
      let Ie = q.key,
        vl = v.fetchers.get(Ie),
        Wd = _r(void 0, vl ? vl.data : void 0);
      v.fetchers.set(Ie, Wd),
        le.has(Ie) && Ft(Ie),
        q.controller && le.set(Ie, q.controller);
    }),
      He({ fetchers: new Map(v.fetchers) });
    let an = () => It.forEach((q) => Ft(q.key));
    F.signal.addEventListener("abort", an);
    let {
      results: Ai,
      loaderResults: pr,
      fetcherResults: Bi,
    } = await hu(v.matches, Se, Ln, It, Ce);
    if (F.signal.aborted) return;
    F.signal.removeEventListener("abort", an),
      $.delete(g),
      le.delete(g),
      It.forEach((q) => le.delete(q.key));
    let Tn = Hs(Ai);
    if (Tn) {
      if (Tn.idx >= Ln.length) {
        let q = It[Tn.idx - Ln.length].key;
        G.add(q);
      }
      return fr(v, Tn.result);
    }
    let { loaderData: ml, errors: J } = Bs(
      v,
      v.matches,
      Ln,
      pr,
      void 0,
      It,
      Bi,
      it,
    );
    if (v.fetchers.has(g)) {
      let q = At(V.data);
      v.fetchers.set(g, q);
    }
    yu(Nn),
      v.navigation.state === "loading" && Nn > A
        ? (W(_, "Expected pending action"),
          O && O.abort(),
          cr(v.navigation.location, {
            matches: Se,
            loaderData: ml,
            errors: J,
            fetchers: new Map(v.fetchers),
          }))
        : (He({
            errors: J,
            loaderData: $s(v.loaderData, ml, Se, J),
            fetchers: new Map(v.fetchers),
          }),
          (Ze = !1));
  }
  async function Ud(g, y, x, L, z, H, B) {
    let U = v.fetchers.get(g);
    Ot(g, _r(B, U ? U.data : void 0), { flushSync: H });
    let F = new AbortController(),
      K = Cr(e.history, x, F.signal);
    le.set(g, F);
    let we = D,
      V = await Er("loader", K, L, z, i, l, u, s.v7_relativeSplatPath);
    if (
      (pn(V) && (V = (await Ed(V, K.signal, !0)) || V),
      le.get(g) === F && le.delete(g),
      !K.signal.aborted)
    ) {
      if (Ee.has(g)) {
        Ot(g, At(void 0));
        return;
      }
      if (hn(V))
        if (A > we) {
          Ot(g, At(void 0));
          return;
        } else {
          G.add(g), await fr(v, V);
          return;
        }
      if (Qn(V)) {
        dr(g, y, V.error);
        return;
      }
      W(!pn(V), "Unhandled fetcher deferred data"), Ot(g, At(V.data));
    }
  }
  async function fr(g, y, x) {
    let {
      submission: L,
      fetcherSubmission: z,
      replace: H,
    } = x === void 0 ? {} : x;
    y.revalidate && (Ze = !0);
    let B = ll(g.location, y.location, { _isRedirect: !0 });
    if ((W(B, "Expected a location on the redirect navigation"), n)) {
      let b = !1;
      if (y.reloadDocument) b = !0;
      else if (wd.test(y.location)) {
        const Ce = e.history.createURL(y.location);
        b = Ce.origin !== t.location.origin || sr(Ce.pathname, u) == null;
      }
      if (b) {
        H ? t.location.replace(y.location) : t.location.assign(y.location);
        return;
      }
    }
    O = null;
    let U = H === !0 ? de.Replace : de.Push,
      { formMethod: F, formAction: K, formEncType: we } = g.navigation;
    !L && !z && F && K && we && (L = Qs(g.navigation));
    let V = L || z;
    if (Km.has(y.status) && V && st(V.formMethod))
      await on(U, B, {
        submission: fe({}, V, { formAction: y.location }),
        preventScrollReset: j,
      });
    else {
      let b = vo(B, L);
      await on(U, B, {
        overrideNavigation: b,
        fetcherSubmission: z,
        preventScrollReset: j,
      });
    }
  }
  async function hu(g, y, x, L, z) {
    let H = await Promise.all([
        ...x.map((F) => Er("loader", z, F, y, i, l, u, s.v7_relativeSplatPath)),
        ...L.map((F) =>
          F.matches && F.match && F.controller
            ? Er(
                "loader",
                Cr(e.history, F.path, F.controller.signal),
                F.match,
                F.matches,
                i,
                l,
                u,
                s.v7_relativeSplatPath,
              )
            : { type: se.error, error: qe(404, { pathname: F.path }) },
        ),
      ]),
      B = H.slice(0, x.length),
      U = H.slice(x.length);
    return (
      await Promise.all([
        Ws(
          g,
          x,
          B,
          B.map(() => z.signal),
          !1,
          v.loaderData,
        ),
        Ws(
          g,
          L.map((F) => F.match),
          U,
          L.map((F) => (F.controller ? F.controller.signal : null)),
          !0,
        ),
      ]),
      { results: H, loaderResults: B, fetcherResults: U }
    );
  }
  function Fi() {
    (Ze = !0),
      Rn.push(...Ii()),
      te.forEach((g, y) => {
        le.has(y) && (Mt.push(y), Ft(y));
      });
  }
  function Ot(g, y, x) {
    x === void 0 && (x = {}),
      v.fetchers.set(g, y),
      He(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (x && x.flushSync) === !0 },
      );
  }
  function dr(g, y, x, L) {
    L === void 0 && (L = {});
    let z = Br(v.matches, y);
    pl(g),
      He(
        { errors: { [z.route.id]: x }, fetchers: new Map(v.fetchers) },
        { flushSync: (L && L.flushSync) === !0 },
      );
  }
  function mu(g) {
    return (
      s.v7_fetcherPersist &&
        (ht.set(g, (ht.get(g) || 0) + 1), Ee.has(g) && Ee.delete(g)),
      v.fetchers.get(g) || Ym
    );
  }
  function pl(g) {
    let y = v.fetchers.get(g);
    le.has(g) && !(y && y.state === "loading" && $.has(g)) && Ft(g),
      te.delete(g),
      $.delete(g),
      G.delete(g),
      Ee.delete(g),
      v.fetchers.delete(g);
  }
  function Ad(g) {
    if (s.v7_fetcherPersist) {
      let y = (ht.get(g) || 0) - 1;
      y <= 0 ? (ht.delete(g), Ee.add(g)) : ht.set(g, y);
    } else pl(g);
    He({ fetchers: new Map(v.fetchers) });
  }
  function Ft(g) {
    let y = le.get(g);
    W(y, "Expected fetch controller: " + g), y.abort(), le.delete(g);
  }
  function vu(g) {
    for (let y of g) {
      let x = mu(y),
        L = At(x.data);
      v.fetchers.set(y, L);
    }
  }
  function gu() {
    let g = [],
      y = !1;
    for (let x of G) {
      let L = v.fetchers.get(x);
      W(L, "Expected fetcher: " + x),
        L.state === "loading" && (G.delete(x), g.push(x), (y = !0));
    }
    return vu(g), y;
  }
  function yu(g) {
    let y = [];
    for (let [x, L] of $)
      if (L < g) {
        let z = v.fetchers.get(x);
        W(z, "Expected fetcher: " + x),
          z.state === "loading" && (Ft(x), $.delete(x), y.push(x));
      }
    return vu(y), y.length > 0;
  }
  function Bd(g, y) {
    let x = v.blockers.get(g) || xr;
    return De.get(g) !== y && De.set(g, y), x;
  }
  function wu(g) {
    v.blockers.delete(g), De.delete(g);
  }
  function hl(g, y) {
    let x = v.blockers.get(g) || xr;
    W(
      (x.state === "unblocked" && y.state === "blocked") ||
        (x.state === "blocked" && y.state === "blocked") ||
        (x.state === "blocked" && y.state === "proceeding") ||
        (x.state === "blocked" && y.state === "unblocked") ||
        (x.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + x.state + " -> " + y.state,
    );
    let L = new Map(v.blockers);
    L.set(g, y), He({ blockers: L });
  }
  function Su(g) {
    let { currentLocation: y, nextLocation: x, historyAction: L } = g;
    if (De.size === 0) return;
    De.size > 1 && ir(!1, "A router only supports one blocker at a time");
    let z = Array.from(De.entries()),
      [H, B] = z[z.length - 1],
      U = v.blockers.get(H);
    if (
      !(U && U.state === "proceeding") &&
      B({ currentLocation: y, nextLocation: x, historyAction: L })
    )
      return H;
  }
  function Ii(g) {
    let y = [];
    return (
      it.forEach((x, L) => {
        (!g || g(L)) && (x.cancel(), y.push(L), it.delete(L));
      }),
      y
    );
  }
  function $d(g, y, x) {
    if (((m = g), (S = y), (k = x || null), !w && v.navigation === mo)) {
      w = !0;
      let L = xu(v.location, v.matches);
      L != null && He({ restoreScrollPosition: L });
    }
    return () => {
      (m = null), (S = null), (k = null);
    };
  }
  function ku(g, y) {
    return (
      (k &&
        k(
          g,
          y.map((L) => Em(L, v.loaderData)),
        )) ||
      g.key
    );
  }
  function Vd(g, y) {
    if (m && S) {
      let x = ku(g, y);
      m[x] = S();
    }
  }
  function xu(g, y) {
    if (m) {
      let x = ku(g, y),
        L = m[x];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function Hd(g) {
    (i = {}), (a = ca(g, l, void 0, i));
  }
  return (
    (T = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Td,
      subscribe: Dd,
      enableScrollRestoration: $d,
      navigate: pu,
      fetch: Fd,
      revalidate: Md,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: mu,
      deleteFetcher: Ad,
      dispose: jd,
      getBlocker: Bd,
      deleteBlocker: wu,
      _internalFetchControllers: le,
      _internalActiveDeferreds: it,
      _internalSetRoutes: Hd,
    }),
    T
  );
}
function Jm(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function fa(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === o)) {
        s = p;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = cu(l || ".", su(u, i), sr(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !du(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Pt([n, c.pathname])),
    xn(c)
  );
}
function Os(e, t, n, r) {
  if (!r || !Jm(r)) return { path: n };
  if (r.formMethod && !rv(r.formMethod))
    return { path: n, error: qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: qe(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = xd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!st(o)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((k, S) => {
                let [w, C] = S;
                return (
                  "" +
                  k +
                  w +
                  "=" +
                  C +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!st(o)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let u, s;
  if (r.formData) (u = da(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = da(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = As(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = As(u));
    } catch {
      return l();
    }
  let c = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (st(c.formMethod)) return { path: n, submission: c };
  let p = Dt(n);
  return (
    t && p.search && du(p.search) && u.append("index", ""),
    (p.search = "?" + u),
    { path: xn(p), submission: c }
  );
}
function Zm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Fs(e, t, n, r, l, i, o, a, u, s, c, p, m, k, S, w) {
  let C = w ? Object.values(w)[0] : S ? Object.values(S)[0] : void 0,
    d = e.createURL(t.location),
    f = e.createURL(l),
    h = w ? Object.keys(w)[0] : void 0,
    T = Zm(n, h).filter((_, j) => {
      let { route: O } = _;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (i)
        return O.loader.hydrate
          ? !0
          : t.loaderData[O.id] === void 0 &&
              (!t.errors || t.errors[O.id] === void 0);
      if (
        qm(t.loaderData, t.matches[j], _) ||
        a.some((ve) => ve === _.route.id)
      )
        return !0;
      let I = t.matches[j],
        X = _;
      return Is(
        _,
        fe(
          {
            currentUrl: d,
            currentParams: I.params,
            nextUrl: f,
            nextParams: X.params,
          },
          r,
          {
            actionResult: C,
            defaultShouldRevalidate:
              o ||
              d.pathname + d.search === f.pathname + f.search ||
              d.search !== f.search ||
              kd(I, X),
          },
        ),
      );
    }),
    v = [];
  return (
    c.forEach((_, j) => {
      if (i || !n.some((he) => he.route.id === _.routeId) || s.has(j)) return;
      let O = Wn(m, _.path, k);
      if (!O) {
        v.push({
          key: j,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(j),
        X = pa(O, _.path),
        ve = !1;
      p.has(j)
        ? (ve = !1)
        : u.includes(j)
          ? (ve = !0)
          : I && I.state !== "idle" && I.data === void 0
            ? (ve = o)
            : (ve = Is(
                X,
                fe(
                  {
                    currentUrl: d,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: f,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: C, defaultShouldRevalidate: o },
                ),
              )),
        ve &&
          v.push({
            key: j,
            routeId: _.routeId,
            path: _.path,
            matches: O,
            match: X,
            controller: new AbortController(),
          });
    }),
    [T, v]
  );
}
function qm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function kd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Is(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Us(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    ir(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !u && !km.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, fe({}, t(l), { lazy: void 0 }));
}
async function Er(e, t, n, r, l, i, o, a, u) {
  u === void 0 && (u = {});
  let s,
    c,
    p,
    m = (w) => {
      let C,
        d = new Promise((f, h) => (C = h));
      return (
        (p = () => C()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: u.requestContext }),
          d,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let C,
          d = await Promise.all([
            m(w).catch((f) => {
              C = f;
            }),
            Us(n.route, i, l),
          ]);
        if (C) throw C;
        c = d[0];
      } else if ((await Us(n.route, i, l), (w = n.route[e]), w)) c = await m(w);
      else if (e === "action") {
        let C = new URL(t.url),
          d = C.pathname + C.search;
        throw qe(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: se.data, data: void 0 };
    else if (w) c = await m(w);
    else {
      let C = new URL(t.url),
        d = C.pathname + C.search;
      throw qe(404, { pathname: d });
    }
    W(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (w) {
    (s = se.error), (c = w);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (nv(c)) {
    let w = c.status;
    if (Qm.has(w)) {
      let d = c.headers.get("Location");
      if (
        (W(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !wd.test(d))
      )
        d = fa(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, d, a);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          E = sr(h.pathname, o) != null;
        h.origin === f.origin && E && (d = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest) throw (c.headers.set("Location", d), c);
      return {
        type: se.redirect,
        status: w,
        location: d,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: s === se.error ? se.error : se.data, response: c };
    let C;
    try {
      let d = c.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? c.body == null
          ? (C = null)
          : (C = await c.json())
        : (C = await c.text());
    } catch (d) {
      return { type: se.error, error: d };
    }
    return s === se.error
      ? { type: s, error: new fu(w, c.statusText, C), headers: c.headers }
      : { type: se.data, data: C, statusCode: c.status, headers: c.headers };
  }
  if (s === se.error) return { type: s, error: c };
  if (tv(c)) {
    var k, S;
    return {
      type: se.deferred,
      deferredData: c,
      statusCode: (k = c.init) == null ? void 0 : k.status,
      headers:
        ((S = c.init) == null ? void 0 : S.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: se.data, data: c };
}
function Cr(e, t, n, r) {
  let l = e.createURL(xd(t)).toString(),
    i = { signal: n };
  if (r && st(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (i.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = da(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function da(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function As(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function bm(e, t, n, r, l) {
  let i = {},
    o = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, p) => {
      let m = t[p].route.id;
      if (
        (W(!hn(c), "Cannot handle redirect results in processLoaderData"),
        Qn(c))
      ) {
        let k = Br(e, m),
          S = c.error;
        r && ((S = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[k.route.id] == null && (o[k.route.id] = S),
          (i[m] = void 0),
          u || ((u = !0), (a = gd(c.error) ? c.error.status : 500)),
          c.headers && (s[m] = c.headers);
      } else
        pn(c)
          ? (l.set(m, c.deferredData), (i[m] = c.deferredData.data))
          : (i[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (a = c.statusCode),
          c.headers && (s[m] = c.headers);
    }),
    r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
  );
}
function Bs(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = bm(t, n, r, l, a);
  for (let c = 0; c < i.length; c++) {
    let { key: p, match: m, controller: k } = i[c];
    W(
      o !== void 0 && o[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let S = o[c];
    if (!(k && k.signal.aborted))
      if (Qn(S)) {
        let w = Br(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = fe({}, s, { [w.route.id]: S.error })),
          e.fetchers.delete(p);
      } else if (hn(S)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (pn(S)) W(!1, "Unhandled fetcher deferred data");
      else {
        let w = At(S.data);
        e.fetchers.set(p, w);
      }
  }
  return { loaderData: u, errors: s };
}
function $s(e, t, n, r) {
  let l = fe({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Br(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Vs(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function qe(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (a = "defer() is not supported in actions")
            : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((o = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((o = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new fu(e || 500, o, new Error(a), !0)
  );
}
function Hs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (hn(n)) return { result: n, idx: t };
  }
}
function xd(e) {
  let t = typeof e == "string" ? Dt(e) : e;
  return xn(fe({}, t, { hash: "" }));
}
function ev(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function pn(e) {
  return e.type === se.deferred;
}
function Qn(e) {
  return e.type === se.error;
}
function hn(e) {
  return (e && e.type) === se.redirect;
}
function tv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function nv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function rv(e) {
  return Wm.has(e.toLowerCase());
}
function st(e) {
  return Vm.has(e.toLowerCase());
}
async function Ws(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((p) => p.route.id === u.route.id),
      c = s != null && !kd(s, u) && (i && i[u.route.id]) !== void 0;
    if (pn(a) && (l || c)) {
      let p = r[o];
      W(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Ed(a, p, l).then((m) => {
          m && (n[o] = m || n[o]);
        });
    }
  }
}
async function Ed(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: se.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: se.error, error: l };
      }
    return { type: se.data, data: e.deferredData.data };
  }
}
function du(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function pa(e, t) {
  let n = typeof t == "string" ? Dt(t).search : t.search;
  if (e[e.length - 1].route.index && du(n || "")) return e[e.length - 1];
  let r = vd(e);
  return r[r.length - 1];
}
function Qs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function vo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function lv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function _r(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function iv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function At(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function ov(e, t) {
  try {
    let n = e.sessionStorage.getItem(Sd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function av(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Sd, JSON.stringify(n));
    } catch (r) {
      ir(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
const Mi = N.createContext(null),
  Cd = N.createContext(null),
  _n = N.createContext(null),
  zi = N.createContext(null),
  Pn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  _d = N.createContext(null);
function uv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  dl() || W(!1);
  let { basename: r, navigator: l } = N.useContext(_n),
    { hash: i, pathname: o, search: a } = Rd(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Pt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function dl() {
  return N.useContext(zi) != null;
}
function Oi() {
  return dl() || W(!1), N.useContext(zi).location;
}
function Pd(e) {
  N.useContext(_n).static || N.useLayoutEffect(e);
}
function sv() {
  let { isDataRoute: e } = N.useContext(Pn);
  return e ? kv() : cv();
}
function cv() {
  dl() || W(!1);
  let e = N.useContext(Mi),
    { basename: t, future: n, navigator: r } = N.useContext(_n),
    { matches: l } = N.useContext(Pn),
    { pathname: i } = Oi(),
    o = JSON.stringify(su(l, n.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    Pd(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let p = cu(s, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Pt([t, p.pathname])),
          (c.replace ? r.replace : r.push)(p, c.state, c);
      },
      [t, r, o, i, e],
    )
  );
}
function Rd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(_n),
    { matches: l } = N.useContext(Pn),
    { pathname: i } = Oi(),
    o = JSON.stringify(su(l, r.v7_relativeSplatPath));
  return N.useMemo(() => cu(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function fv(e, t, n, r) {
  dl() || W(!1);
  let { navigator: l } = N.useContext(_n),
    { matches: i } = N.useContext(Pn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Oi(),
    c;
  if (t) {
    var p;
    let C = typeof t == "string" ? Dt(t) : t;
    u === "/" || ((p = C.pathname) != null && p.startsWith(u)) || W(!1),
      (c = C);
  } else c = s;
  let m = c.pathname || "/",
    k = m;
  if (u !== "/") {
    let C = u.replace(/^\//, "").split("/");
    k = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let S = Wn(e, { pathname: k }),
    w = vv(
      S &&
        S.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, a, C.params),
            pathname: Pt([
              u,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? u
                : Pt([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && w
    ? N.createElement(
        zi.Provider,
        {
          value: {
            location: il(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: de.Pop,
          },
        },
        w,
      )
    : w;
}
function dv() {
  let e = Sv(),
    t = gd(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const pv = N.createElement(dv, null);
class hv extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Pn.Provider,
          { value: this.props.routeContext },
          N.createElement(_d.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function mv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(Mi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Pn.Provider, { value: t }, r)
  );
}
function vv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let c = o.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id]),
    );
    c >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let p = o[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (s = c),
        p.route.id)
      ) {
        let { loaderData: m, errors: k } = n,
          S =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!k || k[p.route.id] === void 0);
        if (p.route.lazy || S) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, p, m) => {
    let k,
      S = !1,
      w = null,
      C = null;
    n &&
      ((k = a && p.route.id ? a[p.route.id] : void 0),
      (w = p.route.errorElement || pv),
      u &&
        (s < 0 && m === 0
          ? (xv("route-fallback", !1), (S = !0), (C = null))
          : s === m &&
            ((S = !0), (C = p.route.hydrateFallbackElement || null))));
    let d = t.concat(o.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          k
            ? (h = w)
            : S
              ? (h = C)
              : p.route.Component
                ? (h = N.createElement(p.route.Component, null))
                : p.route.element
                  ? (h = p.route.element)
                  : (h = c),
          N.createElement(mv, {
            match: p,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? N.createElement(hv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: k,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Nd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Nd || {}),
  vi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(vi || {});
function gv(e) {
  let t = N.useContext(Mi);
  return t || W(!1), t;
}
function yv(e) {
  let t = N.useContext(Cd);
  return t || W(!1), t;
}
function wv(e) {
  let t = N.useContext(Pn);
  return t || W(!1), t;
}
function Ld(e) {
  let t = wv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Sv() {
  var e;
  let t = N.useContext(_d),
    n = yv(vi.UseRouteError),
    r = Ld(vi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function kv() {
  let { router: e } = gv(Nd.UseNavigateStable),
    t = Ld(vi.UseNavigateStable),
    n = N.useRef(!1);
  return (
    Pd(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, il({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const Ks = {};
function xv(e, t, n) {
  !t && !Ks[e] && (Ks[e] = !0);
}
function Ev(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = de.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  dl() && W(!1);
  let u = t.replace(/^\/*/, "/"),
    s = N.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: il({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o],
    );
  typeof r == "string" && (r = Dt(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: m = "",
      state: k = null,
      key: S = "default",
    } = r,
    w = N.useMemo(() => {
      let C = sr(c, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: k, key: S },
            navigationType: l,
          };
    }, [u, c, p, m, k, S, l]);
  return w == null
    ? null
    : N.createElement(
        _n.Provider,
        { value: s },
        N.createElement(zi.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
function Cv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ol() {
  return (
    (ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ol.apply(this, arguments)
  );
}
function _v(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Pv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Rv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Pv(e);
}
const Nv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Lv = "6";
try {
  window.__reactRouterVersion = Lv;
} catch {}
function Tv(e, t) {
  return Gm({
    basename: t == null ? void 0 : t.basename,
    future: ol({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: ym({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || jv(),
    routes: e,
    mapRouteProperties: Cv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function jv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ol({}, t, { errors: Dv(t.errors) })), t;
}
function Dv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new fu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const Mv = N.createContext({ isTransitioning: !1 }),
  zv = N.createContext(new Map()),
  Ov = "startTransition",
  Ys = op[Ov],
  Fv = "flushSync",
  Xs = gm[Fv];
function Iv(e) {
  Ys ? Ys(e) : e();
}
function Pr(e) {
  Xs ? Xs(e) : e();
}
class Uv {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Av(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = N.useState(n.state),
    [o, a] = N.useState(),
    [u, s] = N.useState({ isTransitioning: !1 }),
    [c, p] = N.useState(),
    [m, k] = N.useState(),
    [S, w] = N.useState(),
    C = N.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = N.useCallback(
      (_) => {
        d ? Iv(_) : _();
      },
      [d],
    ),
    h = N.useCallback(
      (_, j) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: I,
          unstable_viewTransitionOpts: X,
        } = j;
        O.forEach((he) => C.current.delete(he)),
          _.fetchers.forEach((he, Ze) => {
            he.data !== void 0 && C.current.set(Ze, he.data);
          });
        let ve =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!X || ve) {
          I ? Pr(() => i(_)) : f(() => i(_));
          return;
        }
        if (I) {
          Pr(() => {
            m && (c && c.resolve(), m.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let he = n.window.document.startViewTransition(() => {
            Pr(() => i(_));
          });
          he.finished.finally(() => {
            Pr(() => {
              p(void 0), k(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Pr(() => k(he));
          return;
        }
        m
          ? (c && c.resolve(),
            m.skipTransition(),
            w({
              state: _,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(_),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, m, c, C, f],
    );
  N.useLayoutEffect(() => n.subscribe(h), [n, h]),
    N.useEffect(() => {
      u.isTransitioning && !u.flushSync && p(new Uv());
    }, [u]),
    N.useEffect(() => {
      if (c && o && n.window) {
        let _ = o,
          j = c.promise,
          O = n.window.document.startViewTransition(async () => {
            f(() => i(_)), await j;
          });
        O.finished.finally(() => {
          p(void 0), k(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          k(O);
      }
    }, [f, o, c, n.window]),
    N.useEffect(() => {
      c && o && l.location.key === o.location.key && c.resolve();
    }, [c, m, l.location, o]),
    N.useEffect(() => {
      !u.isTransitioning &&
        S &&
        (a(S.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: S.currentLocation,
          nextLocation: S.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, S]),
    N.useEffect(() => {}, []);
  let E = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (_) => n.navigate(_),
        push: (_, j, O) =>
          n.navigate(_, {
            state: j,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (_, j, O) =>
          n.navigate(_, {
            replace: !0,
            state: j,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n],
    ),
    T = n.basename || "/",
    v = N.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: T }),
      [n, E, T],
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      Mi.Provider,
      { value: v },
      N.createElement(
        Cd.Provider,
        { value: l },
        N.createElement(
          zv.Provider,
          { value: C.current },
          N.createElement(
            Mv.Provider,
            { value: u },
            N.createElement(
              Ev,
              {
                basename: T,
                location: l.location,
                navigationType: l.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? N.createElement(Bv, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Bv(e) {
  let { routes: t, future: n, state: r } = e;
  return fv(t, void 0, r, n);
}
const $v =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Vv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xt = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: p,
      } = t,
      m = _v(t, Nv),
      { basename: k } = N.useContext(_n),
      S,
      w = !1;
    if (typeof s == "string" && Vv.test(s) && ((S = s), $v))
      try {
        let h = new URL(window.location.href),
          E = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          T = sr(E.pathname, k);
        E.origin === h.origin && T != null
          ? (s = T + E.search + E.hash)
          : (w = !0);
      } catch {}
    let C = uv(s, { relative: l }),
      d = Hv(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: p,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return N.createElement(
      "a",
      ol({}, m, { href: S || C, onClick: w || i ? r : f, ref: n, target: u }),
    );
  });
var Gs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Gs || (Gs = {}));
var Js;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Js || (Js = {}));
function Hv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = sv(),
    s = Oi(),
    c = Rd(e, { relative: o });
  return N.useCallback(
    (p) => {
      if (Rv(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : xn(s) === xn(c);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, c, r, l, n, e, i, o, a],
  );
}
function Wv() {
  return P.jsxs("div", {
    className: "flex-row index-page-container",
    children: [
      P.jsxs("div", {
        className: "flex-column nav-items-container",
        children: [
          P.jsxs("div", {
            className: "flex-column nav-links-upper",
            children: [
              P.jsx("div", {
                className: "nav-left-item",
                children: P.jsx(xt, {
                  to: "https://www.linkedin.com/in/victoriakapelush/",
                  target: "_blank",
                  className: "socials",
                  children: "LI",
                }),
              }),
              P.jsx("div", {
                className: "nav-left-item",
                children: P.jsx(xt, {
                  to: "https://twitter.com/vicky_kape",
                  target: "_blank",
                  className: "socials",
                  children: "X",
                }),
              }),
              P.jsx("div", {
                className: "nav-left-item",
                children: P.jsx(xt, {
                  to: "https://github.com/victoriakapelush",
                  target: "_blank",
                  className: "socials",
                  children: "GH",
                }),
              }),
              P.jsx("div", { className: "border" }),
            ],
          }),
          P.jsx("p", {
            className: "copyright nav-left-item",
            children: "© / 2024",
          }),
        ],
      }),
      P.jsxs("div", {
        className: "flex-row main-info",
        children: [
          P.jsxs("div", {
            className: "flex-column name-box",
            children: [
              P.jsx("h1", { className: "name", children: "Victoria Kapelush" }),
              P.jsx("p", {
                className: "occupation",
                children: "Software Developer / Website Designer",
              }),
              P.jsx("p", {
                className: "occupation",
                children: "Currently working as a freelance web developer",
              }),
            ],
          }),
          P.jsxs("div", {
            children: [
              P.jsx(xt, { to: "/work", className: "links", children: "Work" }),
              P.jsx(xt, {
                to: "/about",
                className: "links",
                children: "About",
              }),
              P.jsx(xt, {
                to: "/contact",
                className: "links",
                children: "Contact",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Qv() {
  return P.jsxs("div", {
    className: "flex-row contact-index-page-container",
    children: [
      P.jsxs("div", {
        className: "flex-column nav-items-container",
        children: [
          P.jsxs("div", {
            className: "flex-column nav-links-upper",
            children: [
              P.jsx("div", {
                className: "nav-left-item",
                children: P.jsx(xt, {
                  to: "/",
                  className: "socials contact-page-font-color",
                  children: "Home",
                }),
              }),
              P.jsx("div", { className: "border border-color" }),
            ],
          }),
          P.jsx("p", {
            className: "copyright nav-left-item contact-page-font-color",
            children: "© / 2024",
          }),
        ],
      }),
      P.jsxs("div", {
        className: "flex-column contact-main-info contact-main-mobile",
        children: [
          P.jsx("h1", { children: "Hello." }),
          P.jsxs("p", {
            className: "paragraph",
            children: [
              "Got a vision but need a helping hand to make it a reality? ",
              P.jsx("br", {}),
              "Get in touch.",
            ],
          }),
          P.jsxs("p", {
            children: [
              "Email: ",
              P.jsx("span", {
                className: "email",
                children: "victoriakapelush@gmail.com",
              }),
            ],
          }),
          P.jsxs("p", {
            children: [
              "On the Internet:",
              " ",
              P.jsx("a", {
                href: "https://www.linkedin.com/in/victoriakapelush/",
                target: "_blank",
                className: "email",
                children: "LinkedIn",
              }),
              " ",
              "/",
              " ",
              P.jsx("a", {
                className: "email",
                href: "https://twitter.com/vicky_kape",
                target: "_blank",
                children: "X",
              }),
              " ",
              "/",
              " ",
              P.jsx("a", {
                className: "email",
                href: "https://github.com/victoriakapelush",
                target: "_blank",
                children: "Github",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Kv = "/assets/my-photo-B2_l8s2m.jpg";
function Yv() {
  return P.jsxs("div", {
    className: "flex-row about-index-page-container",
    children: [
      P.jsxs("div", {
        className: "flex-column nav-items-container",
        children: [
          P.jsxs("div", {
            className: "flex-column nav-links-upper",
            children: [
              P.jsx("div", {
                className: "nav-left-item",
                children: P.jsx(xt, {
                  to: "/",
                  className: "socials",
                  children: "Home",
                }),
              }),
              P.jsx("div", { className: "border" }),
            ],
          }),
          P.jsx("p", {
            className: "copyright nav-left-item",
            children: "©/2024",
          }),
        ],
      }),
      P.jsxs("div", {
        className: "flex-row about-main-info about-main-mobile",
        children: [
          P.jsxs("div", {
            className: "about-content flex-column",
            children: [
              P.jsx("h1", { children: "About" }),
              P.jsx("h2", {
                children:
                  "I'm Victoria. A developer, designer and problem solver.",
              }),
              P.jsx("p", {
                children:
                  "One of the primary drivers of my choice on why I became a software developer was the ability to create. As a developer, I found an expressive outlet where my ideas could transcend the realm of imagination and materialize into tangible, functional solutions. The power to bring concepts to life through code fascinated me. It's the artistry of problem-solving, algorithms, and well-structured code that continually inspire my journey.",
              }),
              P.jsx("p", {
                children: "This is one of my favourite quotes (by Chris Pine):",
              }),
              P.jsx("q", {
                children:
                  "Programming isn't about what you know; it's about what you can figure out.",
              }),
              P.jsx("p", {
                children:
                  "This resonates so deeply with me because it encapsulates the essence of programming as a dynamic field that prioritizes problem-solving abilities over static knowledge. As someone deeply passionate about software development, I firmly believe that the true essence of programming lies in the ability to creatively tackle new challenges and find innovative solutions, rather than relying solely on pre-existing knowledge.",
              }),
              P.jsx("h4", {
                className: "ed-exp-header",
                children: "Education and Experience",
              }),
              P.jsx("p", {
                className: "ed-exp-line",
                children: "- Bachelor's Degree in Financial Management",
              }),
              P.jsx("p", {
                className: "ed-exp-line",
                children: "- Master's Degree in Computer Science",
              }),
              P.jsx("p", {
                className: "ed-exp-line",
                children:
                  "- 3 years experience in Digital Design, Web and Software Development",
              }),
              P.jsx("h4", { children: "Skills" }),
              P.jsx("p", {
                children:
                  "JavaScript / HTML and CSS / ReactJS / Node.js and Express / Graphic Design",
              }),
              P.jsx("a", { href: "/", className: "cv", children: "My CV" }),
              P.jsx("br", {}),
            ],
          }),
          P.jsx("img", { src: Kv }),
        ],
      }),
    ],
  });
}
function Xv() {
  return P.jsxs("div", {
    className: "flex-row contact-index-page-container",
    children: [
      P.jsxs("div", {
        className: "flex-column nav-items-container",
        children: [
          P.jsxs("div", {
            className: "flex-column nav-links-upper",
            children: [
              P.jsx("div", {
                className: "nav-left-item",
                children: P.jsx(xt, {
                  to: "/",
                  className: "socials contact-page-font-color",
                  children: "Home",
                }),
              }),
              P.jsx("div", { className: "border border-color" }),
            ],
          }),
          P.jsx("p", {
            className: "copyright nav-left-item contact-page-font-color",
            children: "©/2024",
          }),
        ],
      }),
      P.jsxs("div", {
        className: "flex-row contact-main-info work-container",
        children: [
          P.jsxs("div", {
            className: "flex-column work-paragraph",
            children: [
              P.jsx("h4", { children: "Work" }),
              P.jsxs("p", {
                children: [
                  "This is a showcase of my top projects. ",
                  P.jsx("br", {}),
                  "Over the past few years, I've seen the digital design ",
                  P.jsx("br", {}),
                  " and development scene change constantly, ",
                  P.jsx("br", {}),
                  " shaping my role along the way.",
                  " ",
                ],
              }),
              P.jsx("br", {}),
              P.jsxs("p", {
                children: [
                  "With my current experience as a full-stack developer, ",
                  P.jsx("br", {}),
                  "I'm still learning and gaining new skills every day.",
                ],
              }),
            ],
          }),
          P.jsxs("div", {
            className: "flex-column work-links",
            children: [
              P.jsx("a", {
                className: "link-work-name",
                href: "https://narrative-blog.onrender.com",
                target: "_blank",
                children: '"Narrative"',
              }),
              P.jsx("a", {
                className: "gh-link",
                href: "https://github.com/victoriakapelush/Narrative",
                target: "_blank",
                children: "Full-Stack MERN API Blog App",
              }),
              P.jsx("a", {
                className: "link-work-name",
                href: "https://resumebuilderbyvk.netlify.app",
                target: "_blank",
                children: "Resume Builder",
              }),
              P.jsx("a", {
                className: "gh-link",
                href: "https://github.com/victoriakapelush/CV-Application/tree/main",
                target: "_blank",
                children: "React JS Application",
              }),
              P.jsx("a", {
                className: "link-work-name",
                href: "https://beauty-alchemy.netlify.app",
                target: "_blank",
                children: '"Beauty Alchemy"',
              }),
              P.jsx("a", {
                className: "gh-link",
                href: "https://github.com/victoriakapelush/Beauty-Alchemy",
                target: "_blank",
                children: "React Online Store",
              }),
              P.jsx("a", {
                className: "link-work-name",
                href: "https://narrative-blog.onrender.com",
                target: "_blank",
                children: "Social Media",
              }),
              P.jsx("a", {
                className: "gh-link",
                href: "https://github.com/victoriakapelush/Social-Butterfly",
                target: "_blank",
                children: "Full-Stack MERN Social Media App",
              }),
              P.jsx("a", {
                className: "link-work-name",
                href: "https://mksocials.com",
                target: "_blank",
                children: '"MK Socials"',
              }),
              P.jsx("a", {
                className: "gh-link",
                href: "https://github.com/victoriakapelush/Portfolio-Website",
                target: "_blank",
                children: "CSS/JavaScript Portfolio Website",
              }),
              P.jsx("a", {
                className: "link-work-name",
                href: "https://www.wooganyc.com",
                target: "_blank",
                children: '"Wooga NYC"',
              }),
              P.jsx("a", {
                className: "gh-link",
                children: "Website for a korean restaurant in NYC",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Gv = Tv([
  { path: "/", element: P.jsx(Wv, {}) },
  { path: "/contact", element: P.jsx(Qv, {}) },
  { path: "/about", element: P.jsx(Yv, {}) },
  { path: "/work", element: P.jsx(Xv, {}) },
]);
go.createRoot(document.getElementById("root")).render(
  P.jsx(uc.StrictMode, { children: P.jsx(Av, { router: Gv }) }),
);
