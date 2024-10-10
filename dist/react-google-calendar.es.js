(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{overflow-wrap:inherit}.unselectable{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.calendar-navigate{padding:10px;opacity:.5}.calendar-navigate:hover{cursor:pointer;opacity:.9}.calendar-header{display:flex;justify-content:space-between;align-items:center}.calendar-title{margin-top:.83em;margin-bottom:.83em}.calendar-body{width:100%;display:grid;grid-template-columns:repeat(7,minmax(40px,1fr));grid-template-rows:50px;grid-auto-rows:minmax(120px,auto)}.calendar-footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.day{text-align:right;padding:14px 0;font-size:14px;border-bottom:1px solid;border-right:1px solid;border-color:#d3d3d3;display:flex;flex-direction:column}@media only screen and (min-width: 601px){.day{padding:14px 20 px 20 px 0px}}.innerDay{display:flex;flex-direction:column;width:100%}.day:nth-of-type(7n){border-right:none}.day-name{font-size:16px;text-transform:uppercase;text-align:center;border-bottom:1px solid;border-top:1px solid;line-height:50px;font-weight:500}.event{box-sizing:border-box;margin:1px 0;font-size:15px;height:26px}.below{z-index:-1}.details{display:flex;font-size:14px;align-items:center;margin-top:12px;margin-bottom:12px}.display-linebreak{white-space:pre-line}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import * as aI from "react";
import Lc, { forwardRef as V0, useContext as R0 } from "react";
import { css as KA, createElement as Tl } from "@emotion/react";
import * as W0 from "react-dom";
var QA = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ui(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var In = { exports: {} }, dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XG;
function y0() {
  if (XG) return dt;
  XG = 1;
  var A = Lc, I = Symbol.for("react.element"), C = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, i = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(u, G, X) {
    var s, o = {}, R = null, m = null;
    X !== void 0 && (R = "" + X), G.key !== void 0 && (R = "" + G.key), G.ref !== void 0 && (m = G.ref);
    for (s in G) t.call(G, s) && !l.hasOwnProperty(s) && (o[s] = G[s]);
    if (u && u.defaultProps) for (s in G = u.defaultProps, G) o[s] === void 0 && (o[s] = G[s]);
    return { $$typeof: I, type: u, key: R, ref: m, props: o, _owner: i.current };
  }
  return dt.Fragment = C, dt.jsx = b, dt.jsxs = b, dt;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sG;
function B0() {
  return sG || (sG = 1, process.env.NODE_ENV !== "production" && function() {
    var A = Lc, I = Symbol.for("react.element"), C = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), u = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), F = Symbol.iterator, x = "@@iterator";
    function p(h) {
      if (h === null || typeof h != "object")
        return null;
      var L = F && h[F] || h[x];
      return typeof L == "function" ? L : null;
    }
    var H = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function J(h) {
      {
        for (var L = arguments.length, O = new Array(L > 1 ? L - 1 : 0), q = 1; q < L; q++)
          O[q - 1] = arguments[q];
        z("error", h, O);
      }
    }
    function z(h, L, O) {
      {
        var q = H.ReactDebugCurrentFrame, rI = q.getStackAddendum();
        rI !== "" && (L += "%s", O = O.concat([rI]));
        var YI = O.map(function(bI) {
          return String(bI);
        });
        YI.unshift("Warning: " + L), Function.prototype.apply.call(console[h], console, YI);
      }
    }
    var S = !1, Y = !1, M = !1, j = !1, oI = !1, dI;
    dI = Symbol.for("react.module.reference");
    function mI(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === t || h === l || oI || h === i || h === X || h === s || j || h === m || S || Y || M || typeof h == "object" && h !== null && (h.$$typeof === R || h.$$typeof === o || h.$$typeof === b || h.$$typeof === u || h.$$typeof === G || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === dI || h.getModuleId !== void 0));
    }
    function LI(h, L, O) {
      var q = h.displayName;
      if (q)
        return q;
      var rI = L.displayName || L.name || "";
      return rI !== "" ? O + "(" + rI + ")" : O;
    }
    function ig(h) {
      return h.displayName || "Context";
    }
    function yI(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && J("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case t:
          return "Fragment";
        case C:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case X:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            var L = h;
            return ig(L) + ".Consumer";
          case b:
            var O = h;
            return ig(O._context) + ".Provider";
          case G:
            return LI(h, h.render, "ForwardRef");
          case o:
            var q = h.displayName || null;
            return q !== null ? q : yI(h.type) || "Memo";
          case R: {
            var rI = h, YI = rI._payload, bI = rI._init;
            try {
              return yI(bI(YI));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var KI = Object.assign, Gg = 0, QI, SI, gg, Sg, xg, Cg, cC;
    function yC() {
    }
    yC.__reactDisabledLog = !0;
    function tC() {
      {
        if (Gg === 0) {
          QI = console.log, SI = console.info, gg = console.warn, Sg = console.error, xg = console.group, Cg = console.groupCollapsed, cC = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: yC,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        Gg++;
      }
    }
    function Ag() {
      {
        if (Gg--, Gg === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: KI({}, h, {
              value: QI
            }),
            info: KI({}, h, {
              value: SI
            }),
            warn: KI({}, h, {
              value: gg
            }),
            error: KI({}, h, {
              value: Sg
            }),
            group: KI({}, h, {
              value: xg
            }),
            groupCollapsed: KI({}, h, {
              value: Cg
            }),
            groupEnd: KI({}, h, {
              value: cC
            })
          });
        }
        Gg < 0 && J("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Zg = H.ReactCurrentDispatcher, eC;
    function PI(h, L, O) {
      {
        if (eC === void 0)
          try {
            throw Error();
          } catch (rI) {
            var q = rI.stack.trim().match(/\n( *(at )?)/);
            eC = q && q[1] || "";
          }
        return `
` + eC + h;
      }
    }
    var pg = !1, JC;
    {
      var iC = typeof WeakMap == "function" ? WeakMap : Map;
      JC = new iC();
    }
    function E(h, L) {
      if (!h || pg)
        return "";
      {
        var O = JC.get(h);
        if (O !== void 0)
          return O;
      }
      var q;
      pg = !0;
      var rI = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var YI;
      YI = Zg.current, Zg.current = null, tC();
      try {
        if (L) {
          var bI = function() {
            throw Error();
          };
          if (Object.defineProperty(bI.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(bI, []);
            } catch (og) {
              q = og;
            }
            Reflect.construct(h, [], bI);
          } else {
            try {
              bI.call();
            } catch (og) {
              q = og;
            }
            h.call(bI.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (og) {
            q = og;
          }
          h();
        }
      } catch (og) {
        if (og && q && typeof og.stack == "string") {
          for (var lI = og.stack.split(`
`), ag = q.stack.split(`
`), zI = lI.length - 1, TI = ag.length - 1; zI >= 1 && TI >= 0 && lI[zI] !== ag[TI]; )
            TI--;
          for (; zI >= 1 && TI >= 0; zI--, TI--)
            if (lI[zI] !== ag[TI]) {
              if (zI !== 1 || TI !== 1)
                do
                  if (zI--, TI--, TI < 0 || lI[zI] !== ag[TI]) {
                    var dg = `
` + lI[zI].replace(" at new ", " at ");
                    return h.displayName && dg.includes("<anonymous>") && (dg = dg.replace("<anonymous>", h.displayName)), typeof h == "function" && JC.set(h, dg), dg;
                  }
                while (zI >= 1 && TI >= 0);
              break;
            }
        }
      } finally {
        pg = !1, Zg.current = YI, Ag(), Error.prepareStackTrace = rI;
      }
      var aA = h ? h.displayName || h.name : "", nC = aA ? PI(aA) : "";
      return typeof h == "function" && JC.set(h, nC), nC;
    }
    function BC(h, L, O) {
      return E(h, !1);
    }
    function _I(h) {
      var L = h.prototype;
      return !!(L && L.isReactComponent);
    }
    function Fg(h, L, O) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return E(h, _I(h));
      if (typeof h == "string")
        return PI(h);
      switch (h) {
        case X:
          return PI("Suspense");
        case s:
          return PI("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case G:
            return BC(h.render);
          case o:
            return Fg(h.type, L, O);
          case R: {
            var q = h, rI = q._payload, YI = q._init;
            try {
              return Fg(YI(rI), L, O);
            } catch {
            }
          }
        }
      return "";
    }
    var kC = Object.prototype.hasOwnProperty, Yg = {}, vA = H.ReactDebugCurrentFrame;
    function GA(h) {
      if (h) {
        var L = h._owner, O = Fg(h.type, h._source, L ? L.type : null);
        vA.setExtraStackFrame(O);
      } else
        vA.setExtraStackFrame(null);
    }
    function fg(h, L, O, q, rI) {
      {
        var YI = Function.call.bind(kC);
        for (var bI in h)
          if (YI(h, bI)) {
            var lI = void 0;
            try {
              if (typeof h[bI] != "function") {
                var ag = Error((q || "React class") + ": " + O + " type `" + bI + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[bI] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ag.name = "Invariant Violation", ag;
              }
              lI = h[bI](L, bI, q, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (zI) {
              lI = zI;
            }
            lI && !(lI instanceof Error) && (GA(rI), J("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", O, bI, typeof lI), GA(null)), lI instanceof Error && !(lI.message in Yg) && (Yg[lI.message] = !0, GA(rI), J("Failed %s type: %s", O, lI.message), GA(null));
          }
      }
    }
    var lg = Array.isArray;
    function lC(h) {
      return lg(h);
    }
    function _C(h) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, O = L && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return O;
      }
    }
    function HA(h) {
      try {
        return xC(h), !1;
      } catch {
        return !0;
      }
    }
    function xC(h) {
      return "" + h;
    }
    function NA(h) {
      if (HA(h))
        return J("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _C(h)), xC(h);
    }
    var Jg = H.ReactCurrentOwner, pC = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gc, Cc, wA;
    wA = {};
    function Oc(h) {
      if (kC.call(h, "ref")) {
        var L = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function jc(h) {
      if (kC.call(h, "key")) {
        var L = Object.getOwnPropertyDescriptor(h, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Mc(h, L) {
      if (typeof h.ref == "string" && Jg.current && L && Jg.current.stateNode !== L) {
        var O = yI(Jg.current.type);
        wA[O] || (J('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', yI(Jg.current.type), h.ref), wA[O] = !0);
      }
    }
    function Dc(h, L) {
      {
        var O = function() {
          gc || (gc = !0, J("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Ec(h, L) {
      {
        var O = function() {
          Cc || (Cc = !0, J("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Kc = function(h, L, O, q, rI, YI, bI) {
      var lI = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: h,
        key: L,
        ref: O,
        props: bI,
        // Record the component responsible for creating this element.
        _owner: YI
      };
      return lI._store = {}, Object.defineProperty(lI._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lI, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(lI, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rI
      }), Object.freeze && (Object.freeze(lI.props), Object.freeze(lI)), lI;
    };
    function Wi(h, L, O, q, rI) {
      {
        var YI, bI = {}, lI = null, ag = null;
        O !== void 0 && (NA(O), lI = "" + O), jc(L) && (NA(L.key), lI = "" + L.key), Oc(L) && (ag = L.ref, Mc(L, rI));
        for (YI in L)
          kC.call(L, YI) && !pC.hasOwnProperty(YI) && (bI[YI] = L[YI]);
        if (h && h.defaultProps) {
          var zI = h.defaultProps;
          for (YI in zI)
            bI[YI] === void 0 && (bI[YI] = zI[YI]);
        }
        if (lI || ag) {
          var TI = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          lI && Dc(bI, TI), ag && Ec(bI, TI);
        }
        return Kc(h, lI, ag, rI, q, Jg.current, bI);
      }
    }
    var Qc = H.ReactCurrentOwner, Ut = H.ReactDebugCurrentFrame;
    function $C(h) {
      if (h) {
        var L = h._owner, O = Fg(h.type, h._source, L ? L.type : null);
        Ut.setExtraStackFrame(O);
      } else
        Ut.setExtraStackFrame(null);
    }
    var Ac;
    Ac = !1;
    function Pc(h) {
      return typeof h == "object" && h !== null && h.$$typeof === I;
    }
    function Tt() {
      {
        if (Qc.current) {
          var h = yI(Qc.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function yi(h) {
      return "";
    }
    var Ot = {};
    function jt(h) {
      {
        var L = Tt();
        if (!L) {
          var O = typeof h == "string" ? h : h.displayName || h.name;
          O && (L = `

Check the top-level render call using <` + O + ">.");
        }
        return L;
      }
    }
    function Mt(h, L) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var O = jt(L);
        if (Ot[O])
          return;
        Ot[O] = !0;
        var q = "";
        h && h._owner && h._owner !== Qc.current && (q = " It was passed a child from " + yI(h._owner.type) + "."), $C(h), J('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, q), $C(null);
      }
    }
    function Dt(h, L) {
      {
        if (typeof h != "object")
          return;
        if (lC(h))
          for (var O = 0; O < h.length; O++) {
            var q = h[O];
            Pc(q) && Mt(q, L);
          }
        else if (Pc(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var rI = p(h);
          if (typeof rI == "function" && rI !== h.entries)
            for (var YI = rI.call(h), bI; !(bI = YI.next()).done; )
              Pc(bI.value) && Mt(bI.value, L);
        }
      }
    }
    function Bi(h) {
      {
        var L = h.type;
        if (L == null || typeof L == "string")
          return;
        var O;
        if (typeof L == "function")
          O = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === G || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === o))
          O = L.propTypes;
        else
          return;
        if (O) {
          var q = yI(L);
          fg(O, h.props, "prop", q, h);
        } else if (L.PropTypes !== void 0 && !Ac) {
          Ac = !0;
          var rI = yI(L);
          J("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rI || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && J("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _c(h) {
      {
        for (var L = Object.keys(h.props), O = 0; O < L.length; O++) {
          var q = L[O];
          if (q !== "children" && q !== "key") {
            $C(h), J("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), $C(null);
            break;
          }
        }
        h.ref !== null && ($C(h), J("Invalid attribute `ref` supplied to `React.Fragment`."), $C(null));
      }
    }
    var Et = {};
    function cc(h, L, O, q, rI, YI) {
      {
        var bI = mI(h);
        if (!bI) {
          var lI = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (lI += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ag = yi();
          ag ? lI += ag : lI += Tt();
          var zI;
          h === null ? zI = "null" : lC(h) ? zI = "array" : h !== void 0 && h.$$typeof === I ? (zI = "<" + (yI(h.type) || "Unknown") + " />", lI = " Did you accidentally export a JSX literal instead of a component?") : zI = typeof h, J("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", zI, lI);
        }
        var TI = Wi(h, L, O, rI, YI);
        if (TI == null)
          return TI;
        if (bI) {
          var dg = L.children;
          if (dg !== void 0)
            if (q)
              if (lC(dg)) {
                for (var aA = 0; aA < dg.length; aA++)
                  Dt(dg[aA], h);
                Object.freeze && Object.freeze(dg);
              } else
                J("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(dg, h);
        }
        if (kC.call(L, "key")) {
          var nC = yI(h), og = Object.keys(L).filter(function(Kt) {
            return Kt !== "key";
          }), $c = og.length > 0 ? "{key: someKey, " + og.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Et[nC + $c]) {
            var fi = og.length > 0 ? "{" + og.join(": ..., ") + ": ...}" : "{}";
            J(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $c, nC, fi, nC), Et[nC + $c] = !0;
          }
        }
        return h === t ? _c(TI) : Bi(TI), TI;
      }
    }
    function xi(h, L, O) {
      return cc(h, L, O, !0);
    }
    function pi(h, L, O) {
      return cc(h, L, O, !1);
    }
    var Fi = pi, Yi = xi;
    rt.Fragment = t, rt.jsx = Fi, rt.jsxs = Yi;
  }()), rt;
}
process.env.NODE_ENV === "production" ? In.exports = y0() : In.exports = B0();
var qe = In.exports, x0 = !1;
function p0(A) {
  if (A.sheet)
    return A.sheet;
  for (var I = 0; I < document.styleSheets.length; I++)
    if (document.styleSheets[I].ownerNode === A)
      return document.styleSheets[I];
}
function F0(A) {
  var I = document.createElement("style");
  return I.setAttribute("data-emotion", A.key), A.nonce !== void 0 && I.setAttribute("nonce", A.nonce), I.appendChild(document.createTextNode("")), I.setAttribute("data-s", ""), I;
}
var Y0 = /* @__PURE__ */ function() {
  function A(C) {
    var t = this;
    this._insertTag = function(i) {
      var l;
      t.tags.length === 0 ? t.insertionPoint ? l = t.insertionPoint.nextSibling : t.prepend ? l = t.container.firstChild : l = t.before : l = t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(i, l), t.tags.push(i);
    }, this.isSpeedy = C.speedy === void 0 ? !x0 : C.speedy, this.tags = [], this.ctr = 0, this.nonce = C.nonce, this.key = C.key, this.container = C.container, this.prepend = C.prepend, this.insertionPoint = C.insertionPoint, this.before = null;
  }
  var I = A.prototype;
  return I.hydrate = function(t) {
    t.forEach(this._insertTag);
  }, I.insert = function(t) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(F0(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = p0(i);
      try {
        l.insertRule(t, l.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(t));
    this.ctr++;
  }, I.flush = function() {
    this.tags.forEach(function(t) {
      var i;
      return (i = t.parentNode) == null ? void 0 : i.removeChild(t);
    }), this.tags = [], this.ctr = 0;
  }, A;
}(), Vg = "-ms-", Ii = "-moz-", RI = "-webkit-", fa = "comm", Rn = "rule", Wn = "decl", f0 = "@import", va = "@keyframes", v0 = "@layer", H0 = Math.abs, Gi = String.fromCharCode, N0 = Object.assign;
function w0(A, I) {
  return sg(A, 0) ^ 45 ? (((I << 2 ^ sg(A, 0)) << 2 ^ sg(A, 1)) << 2 ^ sg(A, 2)) << 2 ^ sg(A, 3) : 0;
}
function Ha(A) {
  return A.trim();
}
function L0(A, I) {
  return (A = I.exec(A)) ? A[0] : A;
}
function WI(A, I, C) {
  return A.replace(I, C);
}
function gn(A, I) {
  return A.indexOf(I);
}
function sg(A, I) {
  return A.charCodeAt(I) | 0;
}
function Bt(A, I, C) {
  return A.slice(I, C);
}
function jC(A) {
  return A.length;
}
function yn(A) {
  return A.length;
}
function we(A, I) {
  return I.push(A), A;
}
function S0(A, I) {
  return A.map(I).join("");
}
var ai = 1, Fc = 1, Na = 0, Mg = 0, Ig = 0, Sc = "";
function di(A, I, C, t, i, l, b) {
  return { value: A, root: I, parent: C, type: t, props: i, children: l, line: ai, column: Fc, length: b, return: "" };
}
function Xt(A, I) {
  return N0(di("", null, null, "", null, null, 0), A, { length: -A.length }, I);
}
function J0() {
  return Ig;
}
function k0() {
  return Ig = Mg > 0 ? sg(Sc, --Mg) : 0, Fc--, Ig === 10 && (Fc = 1, ai--), Ig;
}
function IC() {
  return Ig = Mg < Na ? sg(Sc, Mg++) : 0, Fc++, Ig === 10 && (Fc = 1, ai++), Ig;
}
function EC() {
  return sg(Sc, Mg);
}
function je() {
  return Mg;
}
function Ht(A, I) {
  return Bt(Sc, A, I);
}
function xt(A) {
  switch (A) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function wa(A) {
  return ai = Fc = 1, Na = jC(Sc = A), Mg = 0, [];
}
function La(A) {
  return Sc = "", A;
}
function Me(A) {
  return Ha(Ht(Mg - 1, Cn(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function z0(A) {
  for (; (Ig = EC()) && Ig < 33; )
    IC();
  return xt(A) > 2 || xt(Ig) > 3 ? "" : " ";
}
function U0(A, I) {
  for (; --I && IC() && !(Ig < 48 || Ig > 102 || Ig > 57 && Ig < 65 || Ig > 70 && Ig < 97); )
    ;
  return Ht(A, je() + (I < 6 && EC() == 32 && IC() == 32));
}
function Cn(A) {
  for (; IC(); )
    switch (Ig) {
      case A:
        return Mg;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Cn(Ig);
        break;
      case 40:
        A === 41 && Cn(A);
        break;
      case 92:
        IC();
        break;
    }
  return Mg;
}
function T0(A, I) {
  for (; IC() && A + Ig !== 57; )
    if (A + Ig === 84 && EC() === 47)
      break;
  return "/*" + Ht(I, Mg - 1) + "*" + Gi(A === 47 ? A : IC());
}
function O0(A) {
  for (; !xt(EC()); )
    IC();
  return Ht(A, Mg);
}
function j0(A) {
  return La(De("", null, null, null, [""], A = wa(A), 0, [0], A));
}
function De(A, I, C, t, i, l, b, u, G) {
  for (var X = 0, s = 0, o = b, R = 0, m = 0, F = 0, x = 1, p = 1, H = 1, J = 0, z = "", S = i, Y = l, M = t, j = z; p; )
    switch (F = J, J = IC()) {
      case 40:
        if (F != 108 && sg(j, o - 1) == 58) {
          gn(j += WI(Me(J), "&", "&\f"), "&\f") != -1 && (H = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += Me(J);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += z0(F);
        break;
      case 92:
        j += U0(je() - 1, 7);
        continue;
      case 47:
        switch (EC()) {
          case 42:
          case 47:
            we(M0(T0(IC(), je()), I, C), G);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * x:
        u[X++] = jC(j) * H;
      case 125 * x:
      case 59:
      case 0:
        switch (J) {
          case 0:
          case 125:
            p = 0;
          case 59 + s:
            H == -1 && (j = WI(j, /\f/g, "")), m > 0 && jC(j) - o && we(m > 32 ? oG(j + ";", t, C, o - 1) : oG(WI(j, " ", "") + ";", t, C, o - 2), G);
            break;
          case 59:
            j += ";";
          default:
            if (we(M = ZG(j, I, C, X, s, i, u, z, S = [], Y = [], o), l), J === 123)
              if (s === 0)
                De(j, I, M, M, S, l, o, u, Y);
              else
                switch (R === 99 && sg(j, 3) === 110 ? 100 : R) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    De(A, M, M, t && we(ZG(A, M, M, 0, 0, i, u, z, i, S = [], o), Y), i, Y, o, u, t ? S : Y);
                    break;
                  default:
                    De(j, M, M, M, [""], Y, 0, u, Y);
                }
        }
        X = s = m = 0, x = H = 1, z = j = "", o = b;
        break;
      case 58:
        o = 1 + jC(j), m = F;
      default:
        if (x < 1) {
          if (J == 123)
            --x;
          else if (J == 125 && x++ == 0 && k0() == 125)
            continue;
        }
        switch (j += Gi(J), J * x) {
          case 38:
            H = s > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            u[X++] = (jC(j) - 1) * H, H = 1;
            break;
          case 64:
            EC() === 45 && (j += Me(IC())), R = EC(), s = o = jC(z = j += O0(je())), J++;
            break;
          case 45:
            F === 45 && jC(j) == 2 && (x = 0);
        }
    }
  return l;
}
function ZG(A, I, C, t, i, l, b, u, G, X, s) {
  for (var o = i - 1, R = i === 0 ? l : [""], m = yn(R), F = 0, x = 0, p = 0; F < t; ++F)
    for (var H = 0, J = Bt(A, o + 1, o = H0(x = b[F])), z = A; H < m; ++H)
      (z = Ha(x > 0 ? R[H] + " " + J : WI(J, /&\f/g, R[H]))) && (G[p++] = z);
  return di(A, I, C, i === 0 ? Rn : u, G, X, s);
}
function M0(A, I, C) {
  return di(A, I, C, fa, Gi(J0()), Bt(A, 2, -2), 0);
}
function oG(A, I, C, t) {
  return di(A, I, C, Wn, Bt(A, 0, t), Bt(A, t + 1, -1), t);
}
function Bc(A, I) {
  for (var C = "", t = yn(A), i = 0; i < t; i++)
    C += I(A[i], i, A, I) || "";
  return C;
}
function D0(A, I, C, t) {
  switch (A.type) {
    case v0:
      if (A.children.length) break;
    case f0:
    case Wn:
      return A.return = A.return || A.value;
    case fa:
      return "";
    case va:
      return A.return = A.value + "{" + Bc(A.children, t) + "}";
    case Rn:
      A.value = A.props.join(",");
  }
  return jC(C = Bc(A.children, t)) ? A.return = A.value + "{" + C + "}" : "";
}
function E0(A) {
  var I = yn(A);
  return function(C, t, i, l) {
    for (var b = "", u = 0; u < I; u++)
      b += A[u](C, t, i, l) || "";
    return b;
  };
}
function K0(A) {
  return function(I) {
    I.root || (I = I.return) && A(I);
  };
}
function Q0(A) {
  var I = /* @__PURE__ */ Object.create(null);
  return function(C) {
    return I[C] === void 0 && (I[C] = A(C)), I[C];
  };
}
var P0 = function(I, C, t) {
  for (var i = 0, l = 0; i = l, l = EC(), i === 38 && l === 12 && (C[t] = 1), !xt(l); )
    IC();
  return Ht(I, Mg);
}, _0 = function(I, C) {
  var t = -1, i = 44;
  do
    switch (xt(i)) {
      case 0:
        i === 38 && EC() === 12 && (C[t] = 1), I[t] += P0(Mg - 1, C, t);
        break;
      case 2:
        I[t] += Me(i);
        break;
      case 4:
        if (i === 44) {
          I[++t] = EC() === 58 ? "&\f" : "", C[t] = I[t].length;
          break;
        }
      default:
        I[t] += Gi(i);
    }
  while (i = IC());
  return I;
}, $0 = function(I, C) {
  return La(_0(wa(I), C));
}, mG = /* @__PURE__ */ new WeakMap(), q0 = function(I) {
  if (!(I.type !== "rule" || !I.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  I.length < 1)) {
    for (var C = I.value, t = I.parent, i = I.column === t.column && I.line === t.line; t.type !== "rule"; )
      if (t = t.parent, !t) return;
    if (!(I.props.length === 1 && C.charCodeAt(0) !== 58 && !mG.get(t)) && !i) {
      mG.set(I, !0);
      for (var l = [], b = $0(C, l), u = t.props, G = 0, X = 0; G < b.length; G++)
        for (var s = 0; s < u.length; s++, X++)
          I.props[X] = l[G] ? b[G].replace(/&\f/g, u[s]) : u[s] + " " + b[G];
    }
  }
}, IV = function(I) {
  if (I.type === "decl") {
    var C = I.value;
    // charcode for l
    C.charCodeAt(0) === 108 && // charcode for b
    C.charCodeAt(2) === 98 && (I.return = "", I.value = "");
  }
};
function Sa(A, I) {
  switch (w0(A, I)) {
    case 5103:
      return RI + "print-" + A + A;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return RI + A + A;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return RI + A + Ii + A + Vg + A + A;
    case 6828:
    case 4268:
      return RI + A + Vg + A + A;
    case 6165:
      return RI + A + Vg + "flex-" + A + A;
    case 5187:
      return RI + A + WI(A, /(\w+).+(:[^]+)/, RI + "box-$1$2" + Vg + "flex-$1$2") + A;
    case 5443:
      return RI + A + Vg + "flex-item-" + WI(A, /flex-|-self/, "") + A;
    case 4675:
      return RI + A + Vg + "flex-line-pack" + WI(A, /align-content|flex-|-self/, "") + A;
    case 5548:
      return RI + A + Vg + WI(A, "shrink", "negative") + A;
    case 5292:
      return RI + A + Vg + WI(A, "basis", "preferred-size") + A;
    case 6060:
      return RI + "box-" + WI(A, "-grow", "") + RI + A + Vg + WI(A, "grow", "positive") + A;
    case 4554:
      return RI + WI(A, /([^-])(transform)/g, "$1" + RI + "$2") + A;
    case 6187:
      return WI(WI(WI(A, /(zoom-|grab)/, RI + "$1"), /(image-set)/, RI + "$1"), A, "") + A;
    case 5495:
    case 3959:
      return WI(A, /(image-set\([^]*)/, RI + "$1$`$1");
    case 4968:
      return WI(WI(A, /(.+:)(flex-)?(.*)/, RI + "box-pack:$3" + Vg + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + RI + A + A;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return WI(A, /(.+)-inline(.+)/, RI + "$1$2") + A;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (jC(A) - 1 - I > 6) switch (sg(A, I + 1)) {
        case 109:
          if (sg(A, I + 4) !== 45) break;
        case 102:
          return WI(A, /(.+:)(.+)-([^]+)/, "$1" + RI + "$2-$3$1" + Ii + (sg(A, I + 3) == 108 ? "$3" : "$2-$3")) + A;
        case 115:
          return ~gn(A, "stretch") ? Sa(WI(A, "stretch", "fill-available"), I) + A : A;
      }
      break;
    case 4949:
      if (sg(A, I + 1) !== 115) break;
    case 6444:
      switch (sg(A, jC(A) - 3 - (~gn(A, "!important") && 10))) {
        case 107:
          return WI(A, ":", ":" + RI) + A;
        case 101:
          return WI(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + RI + (sg(A, 14) === 45 ? "inline-" : "") + "box$3$1" + RI + "$2$3$1" + Vg + "$2box$3") + A;
      }
      break;
    case 5936:
      switch (sg(A, I + 11)) {
        case 114:
          return RI + A + Vg + WI(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
        case 108:
          return RI + A + Vg + WI(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
        case 45:
          return RI + A + Vg + WI(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
      }
      return RI + A + Vg + A + A;
  }
  return A;
}
var gV = function(I, C, t, i) {
  if (I.length > -1 && !I.return) switch (I.type) {
    case Wn:
      I.return = Sa(I.value, I.length);
      break;
    case va:
      return Bc([Xt(I, {
        value: WI(I.value, "@", "@" + RI)
      })], i);
    case Rn:
      if (I.length) return S0(I.props, function(l) {
        switch (L0(l, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Bc([Xt(I, {
              props: [WI(l, /:(read-\w+)/, ":" + Ii + "$1")]
            })], i);
          case "::placeholder":
            return Bc([Xt(I, {
              props: [WI(l, /:(plac\w+)/, ":" + RI + "input-$1")]
            }), Xt(I, {
              props: [WI(l, /:(plac\w+)/, ":" + Ii + "$1")]
            }), Xt(I, {
              props: [WI(l, /:(plac\w+)/, Vg + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, CV = [gV], AV = function(I) {
  var C = I.key;
  if (C === "css") {
    var t = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(t, function(x) {
      var p = x.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var i = I.stylisPlugins || CV, l = {}, b, u = [];
  b = I.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + C + ' "]'),
    function(x) {
      for (var p = x.getAttribute("data-emotion").split(" "), H = 1; H < p.length; H++)
        l[p[H]] = !0;
      u.push(x);
    }
  );
  var G, X = [q0, IV];
  {
    var s, o = [D0, K0(function(x) {
      s.insert(x);
    })], R = E0(X.concat(i, o)), m = function(p) {
      return Bc(j0(p), R);
    };
    G = function(p, H, J, z) {
      s = J, m(p ? p + "{" + H.styles + "}" : H.styles), z && (F.inserted[H.name] = !0);
    };
  }
  var F = {
    key: C,
    sheet: new Y0({
      key: C,
      container: b,
      nonce: I.nonce,
      speedy: I.speedy,
      prepend: I.prepend,
      insertionPoint: I.insertionPoint
    }),
    nonce: I.nonce,
    inserted: l,
    registered: {},
    insert: G
  };
  return F.sheet.hydrate(u), F;
}, An = { exports: {} }, xI = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hG;
function cV() {
  if (hG) return xI;
  hG = 1;
  var A = typeof Symbol == "function" && Symbol.for, I = A ? Symbol.for("react.element") : 60103, C = A ? Symbol.for("react.portal") : 60106, t = A ? Symbol.for("react.fragment") : 60107, i = A ? Symbol.for("react.strict_mode") : 60108, l = A ? Symbol.for("react.profiler") : 60114, b = A ? Symbol.for("react.provider") : 60109, u = A ? Symbol.for("react.context") : 60110, G = A ? Symbol.for("react.async_mode") : 60111, X = A ? Symbol.for("react.concurrent_mode") : 60111, s = A ? Symbol.for("react.forward_ref") : 60112, o = A ? Symbol.for("react.suspense") : 60113, R = A ? Symbol.for("react.suspense_list") : 60120, m = A ? Symbol.for("react.memo") : 60115, F = A ? Symbol.for("react.lazy") : 60116, x = A ? Symbol.for("react.block") : 60121, p = A ? Symbol.for("react.fundamental") : 60117, H = A ? Symbol.for("react.responder") : 60118, J = A ? Symbol.for("react.scope") : 60119;
  function z(Y) {
    if (typeof Y == "object" && Y !== null) {
      var M = Y.$$typeof;
      switch (M) {
        case I:
          switch (Y = Y.type, Y) {
            case G:
            case X:
            case t:
            case l:
            case i:
            case o:
              return Y;
            default:
              switch (Y = Y && Y.$$typeof, Y) {
                case u:
                case s:
                case F:
                case m:
                case b:
                  return Y;
                default:
                  return M;
              }
          }
        case C:
          return M;
      }
    }
  }
  function S(Y) {
    return z(Y) === X;
  }
  return xI.AsyncMode = G, xI.ConcurrentMode = X, xI.ContextConsumer = u, xI.ContextProvider = b, xI.Element = I, xI.ForwardRef = s, xI.Fragment = t, xI.Lazy = F, xI.Memo = m, xI.Portal = C, xI.Profiler = l, xI.StrictMode = i, xI.Suspense = o, xI.isAsyncMode = function(Y) {
    return S(Y) || z(Y) === G;
  }, xI.isConcurrentMode = S, xI.isContextConsumer = function(Y) {
    return z(Y) === u;
  }, xI.isContextProvider = function(Y) {
    return z(Y) === b;
  }, xI.isElement = function(Y) {
    return typeof Y == "object" && Y !== null && Y.$$typeof === I;
  }, xI.isForwardRef = function(Y) {
    return z(Y) === s;
  }, xI.isFragment = function(Y) {
    return z(Y) === t;
  }, xI.isLazy = function(Y) {
    return z(Y) === F;
  }, xI.isMemo = function(Y) {
    return z(Y) === m;
  }, xI.isPortal = function(Y) {
    return z(Y) === C;
  }, xI.isProfiler = function(Y) {
    return z(Y) === l;
  }, xI.isStrictMode = function(Y) {
    return z(Y) === i;
  }, xI.isSuspense = function(Y) {
    return z(Y) === o;
  }, xI.isValidElementType = function(Y) {
    return typeof Y == "string" || typeof Y == "function" || Y === t || Y === X || Y === l || Y === i || Y === o || Y === R || typeof Y == "object" && Y !== null && (Y.$$typeof === F || Y.$$typeof === m || Y.$$typeof === b || Y.$$typeof === u || Y.$$typeof === s || Y.$$typeof === p || Y.$$typeof === H || Y.$$typeof === J || Y.$$typeof === x);
  }, xI.typeOf = z, xI;
}
var pI = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VG;
function tV() {
  return VG || (VG = 1, process.env.NODE_ENV !== "production" && function() {
    var A = typeof Symbol == "function" && Symbol.for, I = A ? Symbol.for("react.element") : 60103, C = A ? Symbol.for("react.portal") : 60106, t = A ? Symbol.for("react.fragment") : 60107, i = A ? Symbol.for("react.strict_mode") : 60108, l = A ? Symbol.for("react.profiler") : 60114, b = A ? Symbol.for("react.provider") : 60109, u = A ? Symbol.for("react.context") : 60110, G = A ? Symbol.for("react.async_mode") : 60111, X = A ? Symbol.for("react.concurrent_mode") : 60111, s = A ? Symbol.for("react.forward_ref") : 60112, o = A ? Symbol.for("react.suspense") : 60113, R = A ? Symbol.for("react.suspense_list") : 60120, m = A ? Symbol.for("react.memo") : 60115, F = A ? Symbol.for("react.lazy") : 60116, x = A ? Symbol.for("react.block") : 60121, p = A ? Symbol.for("react.fundamental") : 60117, H = A ? Symbol.for("react.responder") : 60118, J = A ? Symbol.for("react.scope") : 60119;
    function z(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === t || E === X || E === l || E === i || E === o || E === R || typeof E == "object" && E !== null && (E.$$typeof === F || E.$$typeof === m || E.$$typeof === b || E.$$typeof === u || E.$$typeof === s || E.$$typeof === p || E.$$typeof === H || E.$$typeof === J || E.$$typeof === x);
    }
    function S(E) {
      if (typeof E == "object" && E !== null) {
        var BC = E.$$typeof;
        switch (BC) {
          case I:
            var _I = E.type;
            switch (_I) {
              case G:
              case X:
              case t:
              case l:
              case i:
              case o:
                return _I;
              default:
                var Fg = _I && _I.$$typeof;
                switch (Fg) {
                  case u:
                  case s:
                  case F:
                  case m:
                  case b:
                    return Fg;
                  default:
                    return BC;
                }
            }
          case C:
            return BC;
        }
      }
    }
    var Y = G, M = X, j = u, oI = b, dI = I, mI = s, LI = t, ig = F, yI = m, KI = C, Gg = l, QI = i, SI = o, gg = !1;
    function Sg(E) {
      return gg || (gg = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), xg(E) || S(E) === G;
    }
    function xg(E) {
      return S(E) === X;
    }
    function Cg(E) {
      return S(E) === u;
    }
    function cC(E) {
      return S(E) === b;
    }
    function yC(E) {
      return typeof E == "object" && E !== null && E.$$typeof === I;
    }
    function tC(E) {
      return S(E) === s;
    }
    function Ag(E) {
      return S(E) === t;
    }
    function Zg(E) {
      return S(E) === F;
    }
    function eC(E) {
      return S(E) === m;
    }
    function PI(E) {
      return S(E) === C;
    }
    function pg(E) {
      return S(E) === l;
    }
    function JC(E) {
      return S(E) === i;
    }
    function iC(E) {
      return S(E) === o;
    }
    pI.AsyncMode = Y, pI.ConcurrentMode = M, pI.ContextConsumer = j, pI.ContextProvider = oI, pI.Element = dI, pI.ForwardRef = mI, pI.Fragment = LI, pI.Lazy = ig, pI.Memo = yI, pI.Portal = KI, pI.Profiler = Gg, pI.StrictMode = QI, pI.Suspense = SI, pI.isAsyncMode = Sg, pI.isConcurrentMode = xg, pI.isContextConsumer = Cg, pI.isContextProvider = cC, pI.isElement = yC, pI.isForwardRef = tC, pI.isFragment = Ag, pI.isLazy = Zg, pI.isMemo = eC, pI.isPortal = PI, pI.isProfiler = pg, pI.isStrictMode = JC, pI.isSuspense = iC, pI.isValidElementType = z, pI.typeOf = S;
  }()), pI;
}
process.env.NODE_ENV === "production" ? An.exports = cV() : An.exports = tV();
var eV = An.exports, Ja = eV, iV = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, lV = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ka = {};
ka[Ja.ForwardRef] = iV;
ka[Ja.Memo] = lV;
var nV = !0;
function bV(A, I, C) {
  var t = "";
  return C.split(" ").forEach(function(i) {
    A[i] !== void 0 ? I.push(A[i] + ";") : i && (t += i + " ");
  }), t;
}
var za = function(I, C, t) {
  var i = I.key + "-" + C.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (t === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  nV === !1) && I.registered[i] === void 0 && (I.registered[i] = C.styles);
}, uV = function(I, C, t) {
  za(I, C, t);
  var i = I.key + "-" + C.name;
  if (I.inserted[C.name] === void 0) {
    var l = C;
    do
      I.insert(C === l ? "." + i : "", l, I.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function GV(A) {
  for (var I = 0, C, t = 0, i = A.length; i >= 4; ++t, i -= 4)
    C = A.charCodeAt(t) & 255 | (A.charCodeAt(++t) & 255) << 8 | (A.charCodeAt(++t) & 255) << 16 | (A.charCodeAt(++t) & 255) << 24, C = /* Math.imul(k, m): */
    (C & 65535) * 1540483477 + ((C >>> 16) * 59797 << 16), C ^= /* k >>> r: */
    C >>> 24, I = /* Math.imul(k, m): */
    (C & 65535) * 1540483477 + ((C >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (I & 65535) * 1540483477 + ((I >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      I ^= (A.charCodeAt(t + 2) & 255) << 16;
    case 2:
      I ^= (A.charCodeAt(t + 1) & 255) << 8;
    case 1:
      I ^= A.charCodeAt(t) & 255, I = /* Math.imul(h, m): */
      (I & 65535) * 1540483477 + ((I >>> 16) * 59797 << 16);
  }
  return I ^= I >>> 13, I = /* Math.imul(h, m): */
  (I & 65535) * 1540483477 + ((I >>> 16) * 59797 << 16), ((I ^ I >>> 15) >>> 0).toString(36);
}
var aV = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, dV = !1, rV = /[A-Z]|^ms/g, XV = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ua = function(I) {
  return I.charCodeAt(1) === 45;
}, RG = function(I) {
  return I != null && typeof I != "boolean";
}, Ol = /* @__PURE__ */ Q0(function(A) {
  return Ua(A) ? A : A.replace(rV, "-$&").toLowerCase();
}), WG = function(I, C) {
  switch (I) {
    case "animation":
    case "animationName":
      if (typeof C == "string")
        return C.replace(XV, function(t, i, l) {
          return MC = {
            name: i,
            styles: l,
            next: MC
          }, i;
        });
  }
  return aV[I] !== 1 && !Ua(I) && typeof C == "number" && C !== 0 ? C + "px" : C;
}, sV = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function pt(A, I, C) {
  if (C == null)
    return "";
  var t = C;
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof C) {
    case "boolean":
      return "";
    case "object": {
      var i = C;
      if (i.anim === 1)
        return MC = {
          name: i.name,
          styles: i.styles,
          next: MC
        }, i.name;
      var l = C;
      if (l.styles !== void 0) {
        var b = l.next;
        if (b !== void 0)
          for (; b !== void 0; )
            MC = {
              name: b.name,
              styles: b.styles,
              next: MC
            }, b = b.next;
        var u = l.styles + ";";
        return u;
      }
      return ZV(A, I, C);
    }
    case "function": {
      if (A !== void 0) {
        var G = MC, X = C(A);
        return MC = G, pt(A, I, X);
      }
      break;
    }
  }
  var s = C;
  return s;
}
function ZV(A, I, C) {
  var t = "";
  if (Array.isArray(C))
    for (var i = 0; i < C.length; i++)
      t += pt(A, I, C[i]) + ";";
  else
    for (var l in C) {
      var b = C[l];
      if (typeof b != "object") {
        var u = b;
        RG(u) && (t += Ol(l) + ":" + WG(l, u) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && dV)
          throw new Error(sV);
        if (Array.isArray(b) && typeof b[0] == "string" && I == null)
          for (var G = 0; G < b.length; G++)
            RG(b[G]) && (t += Ol(l) + ":" + WG(l, b[G]) + ";");
        else {
          var X = pt(A, I, b);
          switch (l) {
            case "animation":
            case "animationName": {
              t += Ol(l) + ":" + X + ";";
              break;
            }
            default:
              t += l + "{" + X + "}";
          }
        }
      }
    }
  return t;
}
var yG = /label:\s*([^\s;{]+)\s*(;|$)/g, MC;
function oV(A, I, C) {
  if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0)
    return A[0];
  var t = !0, i = "";
  MC = void 0;
  var l = A[0];
  if (l == null || l.raw === void 0)
    t = !1, i += pt(C, I, l);
  else {
    var b = l;
    i += b[0];
  }
  for (var u = 1; u < A.length; u++)
    if (i += pt(C, I, A[u]), t) {
      var G = l;
      i += G[u];
    }
  yG.lastIndex = 0;
  for (var X = "", s; (s = yG.exec(i)) !== null; )
    X += "-" + s[1];
  var o = GV(i) + X;
  return {
    name: o,
    styles: i,
    next: MC
  };
}
var mV = function(I) {
  return I();
}, hV = aI.useInsertionEffect ? aI.useInsertionEffect : !1, VV = hV || mV, RV = !1, Ta = /* @__PURE__ */ aI.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ AV({
    key: "css"
  }) : null
);
Ta.Provider;
var WV = function(I) {
  return /* @__PURE__ */ V0(function(C, t) {
    var i = R0(Ta);
    return I(C, i, t);
  });
}, yV = /* @__PURE__ */ aI.createContext({}), ri = {}.hasOwnProperty, cn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oa = function(I, C) {
  var t = {};
  for (var i in C)
    ri.call(C, i) && (t[i] = C[i]);
  return t[cn] = I, t;
}, BV = function(I) {
  var C = I.cache, t = I.serialized, i = I.isStringTag;
  return za(C, t, i), VV(function() {
    return uV(C, t, i);
  }), null;
}, xV = /* @__PURE__ */ WV(
  /* <any, any> */
  function(A, I, C) {
    var t = A.css;
    typeof t == "string" && I.registered[t] !== void 0 && (t = I.registered[t]);
    var i = A[cn], l = [t], b = "";
    typeof A.className == "string" ? b = bV(I.registered, l, A.className) : A.className != null && (b = A.className + " ");
    var u = oV(l, void 0, aI.useContext(yV));
    b += I.key + "-" + u.name;
    var G = {};
    for (var X in A)
      ri.call(A, X) && X !== "css" && X !== cn && !RV && (G[X] = A[X]);
    return G.className = b, C && (G.ref = C), /* @__PURE__ */ aI.createElement(aI.Fragment, null, /* @__PURE__ */ aI.createElement(BV, {
      cache: I,
      serialized: u,
      isStringTag: typeof i == "string"
    }), /* @__PURE__ */ aI.createElement(i, G));
  }
), ja = xV;
function Q(A, I, C) {
  return ri.call(I, "css") ? qe.jsx(ja, Oa(A, I), C) : qe.jsx(A, I, C);
}
function eg(A, I, C) {
  return ri.call(I, "css") ? qe.jsxs(ja, Oa(A, I), C) : qe.jsxs(A, I, C);
}
var gi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
gi.exports;
(function(A, I) {
  (function() {
    var C, t = "4.17.21", i = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", b = "Expected a function", u = "Invalid `variable` option passed into `_.template`", G = "__lodash_hash_undefined__", X = 500, s = "__lodash_placeholder__", o = 1, R = 2, m = 4, F = 1, x = 2, p = 1, H = 2, J = 4, z = 8, S = 16, Y = 32, M = 64, j = 128, oI = 256, dI = 512, mI = 30, LI = "...", ig = 800, yI = 16, KI = 1, Gg = 2, QI = 3, SI = 1 / 0, gg = 9007199254740991, Sg = 17976931348623157e292, xg = NaN, Cg = 4294967295, cC = Cg - 1, yC = Cg >>> 1, tC = [
      ["ary", j],
      ["bind", p],
      ["bindKey", H],
      ["curry", z],
      ["curryRight", S],
      ["flip", dI],
      ["partial", Y],
      ["partialRight", M],
      ["rearg", oI]
    ], Ag = "[object Arguments]", Zg = "[object Array]", eC = "[object AsyncFunction]", PI = "[object Boolean]", pg = "[object Date]", JC = "[object DOMException]", iC = "[object Error]", E = "[object Function]", BC = "[object GeneratorFunction]", _I = "[object Map]", Fg = "[object Number]", kC = "[object Null]", Yg = "[object Object]", vA = "[object Promise]", GA = "[object Proxy]", fg = "[object RegExp]", lg = "[object Set]", lC = "[object String]", _C = "[object Symbol]", HA = "[object Undefined]", xC = "[object WeakMap]", NA = "[object WeakSet]", Jg = "[object ArrayBuffer]", pC = "[object DataView]", gc = "[object Float32Array]", Cc = "[object Float64Array]", wA = "[object Int8Array]", Oc = "[object Int16Array]", jc = "[object Int32Array]", Mc = "[object Uint8Array]", Dc = "[object Uint8ClampedArray]", Ec = "[object Uint16Array]", Kc = "[object Uint32Array]", Wi = /\b__p \+= '';/g, Qc = /\b(__p \+=) '' \+/g, Ut = /(__e\(.*?\)|\b__t\)) \+\n'';/g, $C = /&(?:amp|lt|gt|quot|#39);/g, Ac = /[&<>"']/g, Pc = RegExp($C.source), Tt = RegExp(Ac.source), yi = /<%-([\s\S]+?)%>/g, Ot = /<%([\s\S]+?)%>/g, jt = /<%=([\s\S]+?)%>/g, Mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dt = /^\w*$/, Bi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _c = /[\\^$.*+?()[\]{}|]/g, Et = RegExp(_c.source), cc = /^\s+/, xi = /\s/, pi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fi = /\{\n\/\* \[wrapped with (.+)\] \*/, Yi = /,? & /, h = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, L = /[()=,{}\[\]\/\s]/, O = /\\(\\)?/g, q = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, rI = /\w*$/, YI = /^[-+]0x[0-9a-f]+$/i, bI = /^0b[01]+$/i, lI = /^\[object .+?Constructor\]$/, ag = /^0o[0-7]+$/i, zI = /^(?:0|[1-9]\d*)$/, TI = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, dg = /($^)/, aA = /['\n\r\u2028\u2029\\]/g, nC = "\\ud800-\\udfff", og = "\\u0300-\\u036f", $c = "\\ufe20-\\ufe2f", fi = "\\u20d0-\\u20ff", Kt = og + $c + fi, Dn = "\\u2700-\\u27bf", En = "a-z\\xdf-\\xf6\\xf8-\\xff", sr = "\\xac\\xb1\\xd7\\xf7", Zr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", or = "\\u2000-\\u206f", mr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Kn = "A-Z\\xc0-\\xd6\\xd8-\\xde", Qn = "\\ufe0e\\ufe0f", Pn = sr + Zr + or + mr, vi = "['’]", hr = "[" + nC + "]", _n = "[" + Pn + "]", Qt = "[" + Kt + "]", $n = "\\d+", Vr = "[" + Dn + "]", qn = "[" + En + "]", Ib = "[^" + nC + Pn + $n + Dn + En + Kn + "]", Hi = "\\ud83c[\\udffb-\\udfff]", Rr = "(?:" + Qt + "|" + Hi + ")", gb = "[^" + nC + "]", Ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", wi = "[\\ud800-\\udbff][\\udc00-\\udfff]", tc = "[" + Kn + "]", Cb = "\\u200d", Ab = "(?:" + qn + "|" + Ib + ")", Wr = "(?:" + tc + "|" + Ib + ")", cb = "(?:" + vi + "(?:d|ll|m|re|s|t|ve))?", tb = "(?:" + vi + "(?:D|LL|M|RE|S|T|VE))?", eb = Rr + "?", ib = "[" + Qn + "]?", yr = "(?:" + Cb + "(?:" + [gb, Ni, wi].join("|") + ")" + ib + eb + ")*", Br = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", lb = ib + eb + yr, pr = "(?:" + [Vr, Ni, wi].join("|") + ")" + lb, Fr = "(?:" + [gb + Qt + "?", Qt, Ni, wi, hr].join("|") + ")", Yr = RegExp(vi, "g"), fr = RegExp(Qt, "g"), Li = RegExp(Hi + "(?=" + Hi + ")|" + Fr + lb, "g"), vr = RegExp([
      tc + "?" + qn + "+" + cb + "(?=" + [_n, tc, "$"].join("|") + ")",
      Wr + "+" + tb + "(?=" + [_n, tc + Ab, "$"].join("|") + ")",
      tc + "?" + Ab + "+" + cb,
      tc + "+" + tb,
      xr,
      Br,
      $n,
      pr
    ].join("|"), "g"), Hr = RegExp("[" + Cb + nC + Kt + Qn + "]"), Nr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, wr = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Lr = -1, wI = {};
    wI[gc] = wI[Cc] = wI[wA] = wI[Oc] = wI[jc] = wI[Mc] = wI[Dc] = wI[Ec] = wI[Kc] = !0, wI[Ag] = wI[Zg] = wI[Jg] = wI[PI] = wI[pC] = wI[pg] = wI[iC] = wI[E] = wI[_I] = wI[Fg] = wI[Yg] = wI[fg] = wI[lg] = wI[lC] = wI[xC] = !1;
    var NI = {};
    NI[Ag] = NI[Zg] = NI[Jg] = NI[pC] = NI[PI] = NI[pg] = NI[gc] = NI[Cc] = NI[wA] = NI[Oc] = NI[jc] = NI[_I] = NI[Fg] = NI[Yg] = NI[fg] = NI[lg] = NI[lC] = NI[_C] = NI[Mc] = NI[Dc] = NI[Ec] = NI[Kc] = !0, NI[iC] = NI[E] = NI[xC] = !1;
    var Sr = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Jr = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, kr = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, zr = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Ur = parseFloat, Tr = parseInt, nb = typeof QA == "object" && QA && QA.Object === Object && QA, Or = typeof self == "object" && self && self.Object === Object && self, rg = nb || Or || Function("return this")(), Si = I && !I.nodeType && I, LA = Si && !0 && A && !A.nodeType && A, bb = LA && LA.exports === Si, Ji = bb && nb.process, bC = function() {
      try {
        var W = LA && LA.require && LA.require("util").types;
        return W || Ji && Ji.binding && Ji.binding("util");
      } catch {
      }
    }(), ub = bC && bC.isArrayBuffer, Gb = bC && bC.isDate, ab = bC && bC.isMap, db = bC && bC.isRegExp, rb = bC && bC.isSet, Xb = bC && bC.isTypedArray;
    function Dg(W, f, B) {
      switch (B.length) {
        case 0:
          return W.call(f);
        case 1:
          return W.call(f, B[0]);
        case 2:
          return W.call(f, B[0], B[1]);
        case 3:
          return W.call(f, B[0], B[1], B[2]);
      }
      return W.apply(f, B);
    }
    function jr(W, f, B, D) {
      for (var CI = -1, hI = W == null ? 0 : W.length; ++CI < hI; ) {
        var cg = W[CI];
        f(D, cg, B(cg), W);
      }
      return D;
    }
    function uC(W, f) {
      for (var B = -1, D = W == null ? 0 : W.length; ++B < D && f(W[B], B, W) !== !1; )
        ;
      return W;
    }
    function Mr(W, f) {
      for (var B = W == null ? 0 : W.length; B-- && f(W[B], B, W) !== !1; )
        ;
      return W;
    }
    function sb(W, f) {
      for (var B = -1, D = W == null ? 0 : W.length; ++B < D; )
        if (!f(W[B], B, W))
          return !1;
      return !0;
    }
    function dA(W, f) {
      for (var B = -1, D = W == null ? 0 : W.length, CI = 0, hI = []; ++B < D; ) {
        var cg = W[B];
        f(cg, B, W) && (hI[CI++] = cg);
      }
      return hI;
    }
    function Pt(W, f) {
      var B = W == null ? 0 : W.length;
      return !!B && ec(W, f, 0) > -1;
    }
    function ki(W, f, B) {
      for (var D = -1, CI = W == null ? 0 : W.length; ++D < CI; )
        if (B(f, W[D]))
          return !0;
      return !1;
    }
    function JI(W, f) {
      for (var B = -1, D = W == null ? 0 : W.length, CI = Array(D); ++B < D; )
        CI[B] = f(W[B], B, W);
      return CI;
    }
    function rA(W, f) {
      for (var B = -1, D = f.length, CI = W.length; ++B < D; )
        W[CI + B] = f[B];
      return W;
    }
    function zi(W, f, B, D) {
      var CI = -1, hI = W == null ? 0 : W.length;
      for (D && hI && (B = W[++CI]); ++CI < hI; )
        B = f(B, W[CI], CI, W);
      return B;
    }
    function Dr(W, f, B, D) {
      var CI = W == null ? 0 : W.length;
      for (D && CI && (B = W[--CI]); CI--; )
        B = f(B, W[CI], CI, W);
      return B;
    }
    function Ui(W, f) {
      for (var B = -1, D = W == null ? 0 : W.length; ++B < D; )
        if (f(W[B], B, W))
          return !0;
      return !1;
    }
    var Er = Ti("length");
    function Kr(W) {
      return W.split("");
    }
    function Qr(W) {
      return W.match(h) || [];
    }
    function Zb(W, f, B) {
      var D;
      return B(W, function(CI, hI, cg) {
        if (f(CI, hI, cg))
          return D = hI, !1;
      }), D;
    }
    function _t(W, f, B, D) {
      for (var CI = W.length, hI = B + (D ? 1 : -1); D ? hI-- : ++hI < CI; )
        if (f(W[hI], hI, W))
          return hI;
      return -1;
    }
    function ec(W, f, B) {
      return f === f ? iX(W, f, B) : _t(W, ob, B);
    }
    function Pr(W, f, B, D) {
      for (var CI = B - 1, hI = W.length; ++CI < hI; )
        if (D(W[CI], f))
          return CI;
      return -1;
    }
    function ob(W) {
      return W !== W;
    }
    function mb(W, f) {
      var B = W == null ? 0 : W.length;
      return B ? ji(W, f) / B : xg;
    }
    function Ti(W) {
      return function(f) {
        return f == null ? C : f[W];
      };
    }
    function Oi(W) {
      return function(f) {
        return W == null ? C : W[f];
      };
    }
    function hb(W, f, B, D, CI) {
      return CI(W, function(hI, cg, vI) {
        B = D ? (D = !1, hI) : f(B, hI, cg, vI);
      }), B;
    }
    function _r(W, f) {
      var B = W.length;
      for (W.sort(f); B--; )
        W[B] = W[B].value;
      return W;
    }
    function ji(W, f) {
      for (var B, D = -1, CI = W.length; ++D < CI; ) {
        var hI = f(W[D]);
        hI !== C && (B = B === C ? hI : B + hI);
      }
      return B;
    }
    function Mi(W, f) {
      for (var B = -1, D = Array(W); ++B < W; )
        D[B] = f(B);
      return D;
    }
    function $r(W, f) {
      return JI(f, function(B) {
        return [B, W[B]];
      });
    }
    function Vb(W) {
      return W && W.slice(0, Bb(W) + 1).replace(cc, "");
    }
    function Eg(W) {
      return function(f) {
        return W(f);
      };
    }
    function Di(W, f) {
      return JI(f, function(B) {
        return W[B];
      });
    }
    function qc(W, f) {
      return W.has(f);
    }
    function Rb(W, f) {
      for (var B = -1, D = W.length; ++B < D && ec(f, W[B], 0) > -1; )
        ;
      return B;
    }
    function Wb(W, f) {
      for (var B = W.length; B-- && ec(f, W[B], 0) > -1; )
        ;
      return B;
    }
    function qr(W, f) {
      for (var B = W.length, D = 0; B--; )
        W[B] === f && ++D;
      return D;
    }
    var IX = Oi(Sr), gX = Oi(Jr);
    function CX(W) {
      return "\\" + zr[W];
    }
    function AX(W, f) {
      return W == null ? C : W[f];
    }
    function ic(W) {
      return Hr.test(W);
    }
    function cX(W) {
      return Nr.test(W);
    }
    function tX(W) {
      for (var f, B = []; !(f = W.next()).done; )
        B.push(f.value);
      return B;
    }
    function Ei(W) {
      var f = -1, B = Array(W.size);
      return W.forEach(function(D, CI) {
        B[++f] = [CI, D];
      }), B;
    }
    function yb(W, f) {
      return function(B) {
        return W(f(B));
      };
    }
    function XA(W, f) {
      for (var B = -1, D = W.length, CI = 0, hI = []; ++B < D; ) {
        var cg = W[B];
        (cg === f || cg === s) && (W[B] = s, hI[CI++] = B);
      }
      return hI;
    }
    function $t(W) {
      var f = -1, B = Array(W.size);
      return W.forEach(function(D) {
        B[++f] = D;
      }), B;
    }
    function eX(W) {
      var f = -1, B = Array(W.size);
      return W.forEach(function(D) {
        B[++f] = [D, D];
      }), B;
    }
    function iX(W, f, B) {
      for (var D = B - 1, CI = W.length; ++D < CI; )
        if (W[D] === f)
          return D;
      return -1;
    }
    function lX(W, f, B) {
      for (var D = B + 1; D--; )
        if (W[D] === f)
          return D;
      return D;
    }
    function lc(W) {
      return ic(W) ? bX(W) : Er(W);
    }
    function FC(W) {
      return ic(W) ? uX(W) : Kr(W);
    }
    function Bb(W) {
      for (var f = W.length; f-- && xi.test(W.charAt(f)); )
        ;
      return f;
    }
    var nX = Oi(kr);
    function bX(W) {
      for (var f = Li.lastIndex = 0; Li.test(W); )
        ++f;
      return f;
    }
    function uX(W) {
      return W.match(Li) || [];
    }
    function GX(W) {
      return W.match(vr) || [];
    }
    var aX = function W(f) {
      f = f == null ? rg : nc.defaults(rg.Object(), f, nc.pick(rg, wr));
      var B = f.Array, D = f.Date, CI = f.Error, hI = f.Function, cg = f.Math, vI = f.Object, Ki = f.RegExp, dX = f.String, GC = f.TypeError, qt = B.prototype, rX = hI.prototype, bc = vI.prototype, Ie = f["__core-js_shared__"], ge = rX.toString, fI = bc.hasOwnProperty, XX = 0, xb = function() {
        var g = /[^.]+$/.exec(Ie && Ie.keys && Ie.keys.IE_PROTO || "");
        return g ? "Symbol(src)_1." + g : "";
      }(), Ce = bc.toString, sX = ge.call(vI), ZX = rg._, oX = Ki(
        "^" + ge.call(fI).replace(_c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ae = bb ? f.Buffer : C, sA = f.Symbol, ce = f.Uint8Array, pb = Ae ? Ae.allocUnsafe : C, te = yb(vI.getPrototypeOf, vI), Fb = vI.create, Yb = bc.propertyIsEnumerable, ee = qt.splice, fb = sA ? sA.isConcatSpreadable : C, It = sA ? sA.iterator : C, SA = sA ? sA.toStringTag : C, ie = function() {
        try {
          var g = TA(vI, "defineProperty");
          return g({}, "", {}), g;
        } catch {
        }
      }(), mX = f.clearTimeout !== rg.clearTimeout && f.clearTimeout, hX = D && D.now !== rg.Date.now && D.now, VX = f.setTimeout !== rg.setTimeout && f.setTimeout, le = cg.ceil, ne = cg.floor, Qi = vI.getOwnPropertySymbols, RX = Ae ? Ae.isBuffer : C, vb = f.isFinite, WX = qt.join, yX = yb(vI.keys, vI), tg = cg.max, mg = cg.min, BX = D.now, xX = f.parseInt, Hb = cg.random, pX = qt.reverse, Pi = TA(f, "DataView"), gt = TA(f, "Map"), _i = TA(f, "Promise"), uc = TA(f, "Set"), Ct = TA(f, "WeakMap"), At = TA(vI, "create"), be = Ct && new Ct(), Gc = {}, FX = OA(Pi), YX = OA(gt), fX = OA(_i), vX = OA(uc), HX = OA(Ct), ue = sA ? sA.prototype : C, ct = ue ? ue.valueOf : C, Nb = ue ? ue.toString : C;
      function d(g) {
        if (OI(g) && !AI(g) && !(g instanceof uI)) {
          if (g instanceof aC)
            return g;
          if (fI.call(g, "__wrapped__"))
            return wu(g);
        }
        return new aC(g);
      }
      var ac = /* @__PURE__ */ function() {
        function g() {
        }
        return function(c) {
          if (!UI(c))
            return {};
          if (Fb)
            return Fb(c);
          g.prototype = c;
          var e = new g();
          return g.prototype = C, e;
        };
      }();
      function Ge() {
      }
      function aC(g, c) {
        this.__wrapped__ = g, this.__actions__ = [], this.__chain__ = !!c, this.__index__ = 0, this.__values__ = C;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: yi,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Ot,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: jt,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: d
        }
      }, d.prototype = Ge.prototype, d.prototype.constructor = d, aC.prototype = ac(Ge.prototype), aC.prototype.constructor = aC;
      function uI(g) {
        this.__wrapped__ = g, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Cg, this.__views__ = [];
      }
      function NX() {
        var g = new uI(this.__wrapped__);
        return g.__actions__ = kg(this.__actions__), g.__dir__ = this.__dir__, g.__filtered__ = this.__filtered__, g.__iteratees__ = kg(this.__iteratees__), g.__takeCount__ = this.__takeCount__, g.__views__ = kg(this.__views__), g;
      }
      function wX() {
        if (this.__filtered__) {
          var g = new uI(this);
          g.__dir__ = -1, g.__filtered__ = !0;
        } else
          g = this.clone(), g.__dir__ *= -1;
        return g;
      }
      function LX() {
        var g = this.__wrapped__.value(), c = this.__dir__, e = AI(g), n = c < 0, a = e ? g.length : 0, r = Ks(0, a, this.__views__), Z = r.start, V = r.end, y = V - Z, v = n ? V : Z - 1, N = this.__iteratees__, w = N.length, U = 0, K = mg(y, this.__takeCount__);
        if (!e || !n && a == y && K == y)
          return cu(g, this.__actions__);
        var _ = [];
        I:
          for (; y-- && U < K; ) {
            v += c;
            for (var eI = -1, $ = g[v]; ++eI < w; ) {
              var nI = N[eI], GI = nI.iteratee, Pg = nI.type, Ng = GI($);
              if (Pg == Gg)
                $ = Ng;
              else if (!Ng) {
                if (Pg == KI)
                  continue I;
                break I;
              }
            }
            _[U++] = $;
          }
        return _;
      }
      uI.prototype = ac(Ge.prototype), uI.prototype.constructor = uI;
      function JA(g) {
        var c = -1, e = g == null ? 0 : g.length;
        for (this.clear(); ++c < e; ) {
          var n = g[c];
          this.set(n[0], n[1]);
        }
      }
      function SX() {
        this.__data__ = At ? At(null) : {}, this.size = 0;
      }
      function JX(g) {
        var c = this.has(g) && delete this.__data__[g];
        return this.size -= c ? 1 : 0, c;
      }
      function kX(g) {
        var c = this.__data__;
        if (At) {
          var e = c[g];
          return e === G ? C : e;
        }
        return fI.call(c, g) ? c[g] : C;
      }
      function zX(g) {
        var c = this.__data__;
        return At ? c[g] !== C : fI.call(c, g);
      }
      function UX(g, c) {
        var e = this.__data__;
        return this.size += this.has(g) ? 0 : 1, e[g] = At && c === C ? G : c, this;
      }
      JA.prototype.clear = SX, JA.prototype.delete = JX, JA.prototype.get = kX, JA.prototype.has = zX, JA.prototype.set = UX;
      function qC(g) {
        var c = -1, e = g == null ? 0 : g.length;
        for (this.clear(); ++c < e; ) {
          var n = g[c];
          this.set(n[0], n[1]);
        }
      }
      function TX() {
        this.__data__ = [], this.size = 0;
      }
      function OX(g) {
        var c = this.__data__, e = ae(c, g);
        if (e < 0)
          return !1;
        var n = c.length - 1;
        return e == n ? c.pop() : ee.call(c, e, 1), --this.size, !0;
      }
      function jX(g) {
        var c = this.__data__, e = ae(c, g);
        return e < 0 ? C : c[e][1];
      }
      function MX(g) {
        return ae(this.__data__, g) > -1;
      }
      function DX(g, c) {
        var e = this.__data__, n = ae(e, g);
        return n < 0 ? (++this.size, e.push([g, c])) : e[n][1] = c, this;
      }
      qC.prototype.clear = TX, qC.prototype.delete = OX, qC.prototype.get = jX, qC.prototype.has = MX, qC.prototype.set = DX;
      function IA(g) {
        var c = -1, e = g == null ? 0 : g.length;
        for (this.clear(); ++c < e; ) {
          var n = g[c];
          this.set(n[0], n[1]);
        }
      }
      function EX() {
        this.size = 0, this.__data__ = {
          hash: new JA(),
          map: new (gt || qC)(),
          string: new JA()
        };
      }
      function KX(g) {
        var c = ye(this, g).delete(g);
        return this.size -= c ? 1 : 0, c;
      }
      function QX(g) {
        return ye(this, g).get(g);
      }
      function PX(g) {
        return ye(this, g).has(g);
      }
      function _X(g, c) {
        var e = ye(this, g), n = e.size;
        return e.set(g, c), this.size += e.size == n ? 0 : 1, this;
      }
      IA.prototype.clear = EX, IA.prototype.delete = KX, IA.prototype.get = QX, IA.prototype.has = PX, IA.prototype.set = _X;
      function kA(g) {
        var c = -1, e = g == null ? 0 : g.length;
        for (this.__data__ = new IA(); ++c < e; )
          this.add(g[c]);
      }
      function $X(g) {
        return this.__data__.set(g, G), this;
      }
      function qX(g) {
        return this.__data__.has(g);
      }
      kA.prototype.add = kA.prototype.push = $X, kA.prototype.has = qX;
      function YC(g) {
        var c = this.__data__ = new qC(g);
        this.size = c.size;
      }
      function Is() {
        this.__data__ = new qC(), this.size = 0;
      }
      function gs(g) {
        var c = this.__data__, e = c.delete(g);
        return this.size = c.size, e;
      }
      function Cs(g) {
        return this.__data__.get(g);
      }
      function As(g) {
        return this.__data__.has(g);
      }
      function cs(g, c) {
        var e = this.__data__;
        if (e instanceof qC) {
          var n = e.__data__;
          if (!gt || n.length < i - 1)
            return n.push([g, c]), this.size = ++e.size, this;
          e = this.__data__ = new IA(n);
        }
        return e.set(g, c), this.size = e.size, this;
      }
      YC.prototype.clear = Is, YC.prototype.delete = gs, YC.prototype.get = Cs, YC.prototype.has = As, YC.prototype.set = cs;
      function wb(g, c) {
        var e = AI(g), n = !e && jA(g), a = !e && !n && VA(g), r = !e && !n && !a && sc(g), Z = e || n || a || r, V = Z ? Mi(g.length, dX) : [], y = V.length;
        for (var v in g)
          (c || fI.call(g, v)) && !(Z && // Safari 9 has enumerable `arguments.length` in strict mode.
          (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          a && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          r && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
          cA(v, y))) && V.push(v);
        return V;
      }
      function Lb(g) {
        var c = g.length;
        return c ? g[ll(0, c - 1)] : C;
      }
      function ts(g, c) {
        return Be(kg(g), zA(c, 0, g.length));
      }
      function es(g) {
        return Be(kg(g));
      }
      function $i(g, c, e) {
        (e !== C && !fC(g[c], e) || e === C && !(c in g)) && gA(g, c, e);
      }
      function tt(g, c, e) {
        var n = g[c];
        (!(fI.call(g, c) && fC(n, e)) || e === C && !(c in g)) && gA(g, c, e);
      }
      function ae(g, c) {
        for (var e = g.length; e--; )
          if (fC(g[e][0], c))
            return e;
        return -1;
      }
      function is(g, c, e, n) {
        return ZA(g, function(a, r, Z) {
          c(n, a, e(a), Z);
        }), n;
      }
      function Sb(g, c) {
        return g && UC(c, ng(c), g);
      }
      function ls(g, c) {
        return g && UC(c, Ug(c), g);
      }
      function gA(g, c, e) {
        c == "__proto__" && ie ? ie(g, c, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : g[c] = e;
      }
      function qi(g, c) {
        for (var e = -1, n = c.length, a = B(n), r = g == null; ++e < n; )
          a[e] = r ? C : Hl(g, c[e]);
        return a;
      }
      function zA(g, c, e) {
        return g === g && (e !== C && (g = g <= e ? g : e), c !== C && (g = g >= c ? g : c)), g;
      }
      function dC(g, c, e, n, a, r) {
        var Z, V = c & o, y = c & R, v = c & m;
        if (e && (Z = a ? e(g, n, a, r) : e(g)), Z !== C)
          return Z;
        if (!UI(g))
          return g;
        var N = AI(g);
        if (N) {
          if (Z = Ps(g), !V)
            return kg(g, Z);
        } else {
          var w = hg(g), U = w == E || w == BC;
          if (VA(g))
            return iu(g, V);
          if (w == Yg || w == Ag || U && !a) {
            if (Z = y || U ? {} : Bu(g), !V)
              return y ? ks(g, ls(Z, g)) : Js(g, Sb(Z, g));
          } else {
            if (!NI[w])
              return a ? g : {};
            Z = _s(g, w, V);
          }
        }
        r || (r = new YC());
        var K = r.get(g);
        if (K)
          return K;
        r.set(g, Z), gG(g) ? g.forEach(function($) {
          Z.add(dC($, c, e, $, g, r));
        }) : qu(g) && g.forEach(function($, nI) {
          Z.set(nI, dC($, c, e, nI, g, r));
        });
        var _ = v ? y ? ol : Zl : y ? Ug : ng, eI = N ? C : _(g);
        return uC(eI || g, function($, nI) {
          eI && (nI = $, $ = g[nI]), tt(Z, nI, dC($, c, e, nI, g, r));
        }), Z;
      }
      function ns(g) {
        var c = ng(g);
        return function(e) {
          return Jb(e, g, c);
        };
      }
      function Jb(g, c, e) {
        var n = e.length;
        if (g == null)
          return !n;
        for (g = vI(g); n--; ) {
          var a = e[n], r = c[a], Z = g[a];
          if (Z === C && !(a in g) || !r(Z))
            return !1;
        }
        return !0;
      }
      function kb(g, c, e) {
        if (typeof g != "function")
          throw new GC(b);
        return Gt(function() {
          g.apply(C, e);
        }, c);
      }
      function et(g, c, e, n) {
        var a = -1, r = Pt, Z = !0, V = g.length, y = [], v = c.length;
        if (!V)
          return y;
        e && (c = JI(c, Eg(e))), n ? (r = ki, Z = !1) : c.length >= i && (r = qc, Z = !1, c = new kA(c));
        I:
          for (; ++a < V; ) {
            var N = g[a], w = e == null ? N : e(N);
            if (N = n || N !== 0 ? N : 0, Z && w === w) {
              for (var U = v; U--; )
                if (c[U] === w)
                  continue I;
              y.push(N);
            } else r(c, w, n) || y.push(N);
          }
        return y;
      }
      var ZA = Gu(zC), zb = Gu(gl, !0);
      function bs(g, c) {
        var e = !0;
        return ZA(g, function(n, a, r) {
          return e = !!c(n, a, r), e;
        }), e;
      }
      function de(g, c, e) {
        for (var n = -1, a = g.length; ++n < a; ) {
          var r = g[n], Z = c(r);
          if (Z != null && (V === C ? Z === Z && !Qg(Z) : e(Z, V)))
            var V = Z, y = r;
        }
        return y;
      }
      function us(g, c, e, n) {
        var a = g.length;
        for (e = tI(e), e < 0 && (e = -e > a ? 0 : a + e), n = n === C || n > a ? a : tI(n), n < 0 && (n += a), n = e > n ? 0 : AG(n); e < n; )
          g[e++] = c;
        return g;
      }
      function Ub(g, c) {
        var e = [];
        return ZA(g, function(n, a, r) {
          c(n, a, r) && e.push(n);
        }), e;
      }
      function Xg(g, c, e, n, a) {
        var r = -1, Z = g.length;
        for (e || (e = qs), a || (a = []); ++r < Z; ) {
          var V = g[r];
          c > 0 && e(V) ? c > 1 ? Xg(V, c - 1, e, n, a) : rA(a, V) : n || (a[a.length] = V);
        }
        return a;
      }
      var Il = au(), Tb = au(!0);
      function zC(g, c) {
        return g && Il(g, c, ng);
      }
      function gl(g, c) {
        return g && Tb(g, c, ng);
      }
      function re(g, c) {
        return dA(c, function(e) {
          return tA(g[e]);
        });
      }
      function UA(g, c) {
        c = mA(c, g);
        for (var e = 0, n = c.length; g != null && e < n; )
          g = g[TC(c[e++])];
        return e && e == n ? g : C;
      }
      function Ob(g, c, e) {
        var n = c(g);
        return AI(g) ? n : rA(n, e(g));
      }
      function vg(g) {
        return g == null ? g === C ? HA : kC : SA && SA in vI(g) ? Es(g) : eZ(g);
      }
      function Cl(g, c) {
        return g > c;
      }
      function Gs(g, c) {
        return g != null && fI.call(g, c);
      }
      function as(g, c) {
        return g != null && c in vI(g);
      }
      function ds(g, c, e) {
        return g >= mg(c, e) && g < tg(c, e);
      }
      function Al(g, c, e) {
        for (var n = e ? ki : Pt, a = g[0].length, r = g.length, Z = r, V = B(r), y = 1 / 0, v = []; Z--; ) {
          var N = g[Z];
          Z && c && (N = JI(N, Eg(c))), y = mg(N.length, y), V[Z] = !e && (c || a >= 120 && N.length >= 120) ? new kA(Z && N) : C;
        }
        N = g[0];
        var w = -1, U = V[0];
        I:
          for (; ++w < a && v.length < y; ) {
            var K = N[w], _ = c ? c(K) : K;
            if (K = e || K !== 0 ? K : 0, !(U ? qc(U, _) : n(v, _, e))) {
              for (Z = r; --Z; ) {
                var eI = V[Z];
                if (!(eI ? qc(eI, _) : n(g[Z], _, e)))
                  continue I;
              }
              U && U.push(_), v.push(K);
            }
          }
        return v;
      }
      function rs(g, c, e, n) {
        return zC(g, function(a, r, Z) {
          c(n, e(a), r, Z);
        }), n;
      }
      function it(g, c, e) {
        c = mA(c, g), g = Yu(g, c);
        var n = g == null ? g : g[TC(XC(c))];
        return n == null ? C : Dg(n, g, e);
      }
      function jb(g) {
        return OI(g) && vg(g) == Ag;
      }
      function Xs(g) {
        return OI(g) && vg(g) == Jg;
      }
      function ss(g) {
        return OI(g) && vg(g) == pg;
      }
      function lt(g, c, e, n, a) {
        return g === c ? !0 : g == null || c == null || !OI(g) && !OI(c) ? g !== g && c !== c : Zs(g, c, e, n, lt, a);
      }
      function Zs(g, c, e, n, a, r) {
        var Z = AI(g), V = AI(c), y = Z ? Zg : hg(g), v = V ? Zg : hg(c);
        y = y == Ag ? Yg : y, v = v == Ag ? Yg : v;
        var N = y == Yg, w = v == Yg, U = y == v;
        if (U && VA(g)) {
          if (!VA(c))
            return !1;
          Z = !0, N = !1;
        }
        if (U && !N)
          return r || (r = new YC()), Z || sc(g) ? Ru(g, c, e, n, a, r) : Ms(g, c, y, e, n, a, r);
        if (!(e & F)) {
          var K = N && fI.call(g, "__wrapped__"), _ = w && fI.call(c, "__wrapped__");
          if (K || _) {
            var eI = K ? g.value() : g, $ = _ ? c.value() : c;
            return r || (r = new YC()), a(eI, $, e, n, r);
          }
        }
        return U ? (r || (r = new YC()), Ds(g, c, e, n, a, r)) : !1;
      }
      function os(g) {
        return OI(g) && hg(g) == _I;
      }
      function cl(g, c, e, n) {
        var a = e.length, r = a, Z = !n;
        if (g == null)
          return !r;
        for (g = vI(g); a--; ) {
          var V = e[a];
          if (Z && V[2] ? V[1] !== g[V[0]] : !(V[0] in g))
            return !1;
        }
        for (; ++a < r; ) {
          V = e[a];
          var y = V[0], v = g[y], N = V[1];
          if (Z && V[2]) {
            if (v === C && !(y in g))
              return !1;
          } else {
            var w = new YC();
            if (n)
              var U = n(v, N, y, g, c, w);
            if (!(U === C ? lt(N, v, F | x, n, w) : U))
              return !1;
          }
        }
        return !0;
      }
      function Mb(g) {
        if (!UI(g) || gZ(g))
          return !1;
        var c = tA(g) ? oX : lI;
        return c.test(OA(g));
      }
      function ms(g) {
        return OI(g) && vg(g) == fg;
      }
      function hs(g) {
        return OI(g) && hg(g) == lg;
      }
      function Vs(g) {
        return OI(g) && ve(g.length) && !!wI[vg(g)];
      }
      function Db(g) {
        return typeof g == "function" ? g : g == null ? Tg : typeof g == "object" ? AI(g) ? Qb(g[0], g[1]) : Kb(g) : dG(g);
      }
      function tl(g) {
        if (!ut(g))
          return yX(g);
        var c = [];
        for (var e in vI(g))
          fI.call(g, e) && e != "constructor" && c.push(e);
        return c;
      }
      function Rs(g) {
        if (!UI(g))
          return tZ(g);
        var c = ut(g), e = [];
        for (var n in g)
          n == "constructor" && (c || !fI.call(g, n)) || e.push(n);
        return e;
      }
      function el(g, c) {
        return g < c;
      }
      function Eb(g, c) {
        var e = -1, n = zg(g) ? B(g.length) : [];
        return ZA(g, function(a, r, Z) {
          n[++e] = c(a, r, Z);
        }), n;
      }
      function Kb(g) {
        var c = hl(g);
        return c.length == 1 && c[0][2] ? pu(c[0][0], c[0][1]) : function(e) {
          return e === g || cl(e, g, c);
        };
      }
      function Qb(g, c) {
        return Rl(g) && xu(c) ? pu(TC(g), c) : function(e) {
          var n = Hl(e, g);
          return n === C && n === c ? Nl(e, g) : lt(c, n, F | x);
        };
      }
      function Xe(g, c, e, n, a) {
        g !== c && Il(c, function(r, Z) {
          if (a || (a = new YC()), UI(r))
            Ws(g, c, Z, e, Xe, n, a);
          else {
            var V = n ? n(yl(g, Z), r, Z + "", g, c, a) : C;
            V === C && (V = r), $i(g, Z, V);
          }
        }, Ug);
      }
      function Ws(g, c, e, n, a, r, Z) {
        var V = yl(g, e), y = yl(c, e), v = Z.get(y);
        if (v) {
          $i(g, e, v);
          return;
        }
        var N = r ? r(V, y, e + "", g, c, Z) : C, w = N === C;
        if (w) {
          var U = AI(y), K = !U && VA(y), _ = !U && !K && sc(y);
          N = y, U || K || _ ? AI(V) ? N = V : DI(V) ? N = kg(V) : K ? (w = !1, N = iu(y, !0)) : _ ? (w = !1, N = lu(y, !0)) : N = [] : at(y) || jA(y) ? (N = V, jA(V) ? N = cG(V) : (!UI(V) || tA(V)) && (N = Bu(y))) : w = !1;
        }
        w && (Z.set(y, N), a(N, y, n, r, Z), Z.delete(y)), $i(g, e, N);
      }
      function Pb(g, c) {
        var e = g.length;
        if (e)
          return c += c < 0 ? e : 0, cA(c, e) ? g[c] : C;
      }
      function _b(g, c, e) {
        c.length ? c = JI(c, function(r) {
          return AI(r) ? function(Z) {
            return UA(Z, r.length === 1 ? r[0] : r);
          } : r;
        }) : c = [Tg];
        var n = -1;
        c = JI(c, Eg(P()));
        var a = Eb(g, function(r, Z, V) {
          var y = JI(c, function(v) {
            return v(r);
          });
          return { criteria: y, index: ++n, value: r };
        });
        return _r(a, function(r, Z) {
          return Ss(r, Z, e);
        });
      }
      function ys(g, c) {
        return $b(g, c, function(e, n) {
          return Nl(g, n);
        });
      }
      function $b(g, c, e) {
        for (var n = -1, a = c.length, r = {}; ++n < a; ) {
          var Z = c[n], V = UA(g, Z);
          e(V, Z) && nt(r, mA(Z, g), V);
        }
        return r;
      }
      function Bs(g) {
        return function(c) {
          return UA(c, g);
        };
      }
      function il(g, c, e, n) {
        var a = n ? Pr : ec, r = -1, Z = c.length, V = g;
        for (g === c && (c = kg(c)), e && (V = JI(g, Eg(e))); ++r < Z; )
          for (var y = 0, v = c[r], N = e ? e(v) : v; (y = a(V, N, y, n)) > -1; )
            V !== g && ee.call(V, y, 1), ee.call(g, y, 1);
        return g;
      }
      function qb(g, c) {
        for (var e = g ? c.length : 0, n = e - 1; e--; ) {
          var a = c[e];
          if (e == n || a !== r) {
            var r = a;
            cA(a) ? ee.call(g, a, 1) : ul(g, a);
          }
        }
        return g;
      }
      function ll(g, c) {
        return g + ne(Hb() * (c - g + 1));
      }
      function xs(g, c, e, n) {
        for (var a = -1, r = tg(le((c - g) / (e || 1)), 0), Z = B(r); r--; )
          Z[n ? r : ++a] = g, g += e;
        return Z;
      }
      function nl(g, c) {
        var e = "";
        if (!g || c < 1 || c > gg)
          return e;
        do
          c % 2 && (e += g), c = ne(c / 2), c && (g += g);
        while (c);
        return e;
      }
      function iI(g, c) {
        return Bl(Fu(g, c, Tg), g + "");
      }
      function ps(g) {
        return Lb(Zc(g));
      }
      function Fs(g, c) {
        var e = Zc(g);
        return Be(e, zA(c, 0, e.length));
      }
      function nt(g, c, e, n) {
        if (!UI(g))
          return g;
        c = mA(c, g);
        for (var a = -1, r = c.length, Z = r - 1, V = g; V != null && ++a < r; ) {
          var y = TC(c[a]), v = e;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return g;
          if (a != Z) {
            var N = V[y];
            v = n ? n(N, y, V) : C, v === C && (v = UI(N) ? N : cA(c[a + 1]) ? [] : {});
          }
          tt(V, y, v), V = V[y];
        }
        return g;
      }
      var Iu = be ? function(g, c) {
        return be.set(g, c), g;
      } : Tg, Ys = ie ? function(g, c) {
        return ie(g, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ll(c),
          writable: !0
        });
      } : Tg;
      function fs(g) {
        return Be(Zc(g));
      }
      function rC(g, c, e) {
        var n = -1, a = g.length;
        c < 0 && (c = -c > a ? 0 : a + c), e = e > a ? a : e, e < 0 && (e += a), a = c > e ? 0 : e - c >>> 0, c >>>= 0;
        for (var r = B(a); ++n < a; )
          r[n] = g[n + c];
        return r;
      }
      function vs(g, c) {
        var e;
        return ZA(g, function(n, a, r) {
          return e = c(n, a, r), !e;
        }), !!e;
      }
      function se(g, c, e) {
        var n = 0, a = g == null ? n : g.length;
        if (typeof c == "number" && c === c && a <= yC) {
          for (; n < a; ) {
            var r = n + a >>> 1, Z = g[r];
            Z !== null && !Qg(Z) && (e ? Z <= c : Z < c) ? n = r + 1 : a = r;
          }
          return a;
        }
        return bl(g, c, Tg, e);
      }
      function bl(g, c, e, n) {
        var a = 0, r = g == null ? 0 : g.length;
        if (r === 0)
          return 0;
        c = e(c);
        for (var Z = c !== c, V = c === null, y = Qg(c), v = c === C; a < r; ) {
          var N = ne((a + r) / 2), w = e(g[N]), U = w !== C, K = w === null, _ = w === w, eI = Qg(w);
          if (Z)
            var $ = n || _;
          else v ? $ = _ && (n || U) : V ? $ = _ && U && (n || !K) : y ? $ = _ && U && !K && (n || !eI) : K || eI ? $ = !1 : $ = n ? w <= c : w < c;
          $ ? a = N + 1 : r = N;
        }
        return mg(r, cC);
      }
      function gu(g, c) {
        for (var e = -1, n = g.length, a = 0, r = []; ++e < n; ) {
          var Z = g[e], V = c ? c(Z) : Z;
          if (!e || !fC(V, y)) {
            var y = V;
            r[a++] = Z === 0 ? 0 : Z;
          }
        }
        return r;
      }
      function Cu(g) {
        return typeof g == "number" ? g : Qg(g) ? xg : +g;
      }
      function Kg(g) {
        if (typeof g == "string")
          return g;
        if (AI(g))
          return JI(g, Kg) + "";
        if (Qg(g))
          return Nb ? Nb.call(g) : "";
        var c = g + "";
        return c == "0" && 1 / g == -SI ? "-0" : c;
      }
      function oA(g, c, e) {
        var n = -1, a = Pt, r = g.length, Z = !0, V = [], y = V;
        if (e)
          Z = !1, a = ki;
        else if (r >= i) {
          var v = c ? null : Os(g);
          if (v)
            return $t(v);
          Z = !1, a = qc, y = new kA();
        } else
          y = c ? [] : V;
        I:
          for (; ++n < r; ) {
            var N = g[n], w = c ? c(N) : N;
            if (N = e || N !== 0 ? N : 0, Z && w === w) {
              for (var U = y.length; U--; )
                if (y[U] === w)
                  continue I;
              c && y.push(w), V.push(N);
            } else a(y, w, e) || (y !== V && y.push(w), V.push(N));
          }
        return V;
      }
      function ul(g, c) {
        return c = mA(c, g), g = Yu(g, c), g == null || delete g[TC(XC(c))];
      }
      function Au(g, c, e, n) {
        return nt(g, c, e(UA(g, c)), n);
      }
      function Ze(g, c, e, n) {
        for (var a = g.length, r = n ? a : -1; (n ? r-- : ++r < a) && c(g[r], r, g); )
          ;
        return e ? rC(g, n ? 0 : r, n ? r + 1 : a) : rC(g, n ? r + 1 : 0, n ? a : r);
      }
      function cu(g, c) {
        var e = g;
        return e instanceof uI && (e = e.value()), zi(c, function(n, a) {
          return a.func.apply(a.thisArg, rA([n], a.args));
        }, e);
      }
      function Gl(g, c, e) {
        var n = g.length;
        if (n < 2)
          return n ? oA(g[0]) : [];
        for (var a = -1, r = B(n); ++a < n; )
          for (var Z = g[a], V = -1; ++V < n; )
            V != a && (r[a] = et(r[a] || Z, g[V], c, e));
        return oA(Xg(r, 1), c, e);
      }
      function tu(g, c, e) {
        for (var n = -1, a = g.length, r = c.length, Z = {}; ++n < a; ) {
          var V = n < r ? c[n] : C;
          e(Z, g[n], V);
        }
        return Z;
      }
      function al(g) {
        return DI(g) ? g : [];
      }
      function dl(g) {
        return typeof g == "function" ? g : Tg;
      }
      function mA(g, c) {
        return AI(g) ? g : Rl(g, c) ? [g] : Nu(BI(g));
      }
      var Hs = iI;
      function hA(g, c, e) {
        var n = g.length;
        return e = e === C ? n : e, !c && e >= n ? g : rC(g, c, e);
      }
      var eu = mX || function(g) {
        return rg.clearTimeout(g);
      };
      function iu(g, c) {
        if (c)
          return g.slice();
        var e = g.length, n = pb ? pb(e) : new g.constructor(e);
        return g.copy(n), n;
      }
      function rl(g) {
        var c = new g.constructor(g.byteLength);
        return new ce(c).set(new ce(g)), c;
      }
      function Ns(g, c) {
        var e = c ? rl(g.buffer) : g.buffer;
        return new g.constructor(e, g.byteOffset, g.byteLength);
      }
      function ws(g) {
        var c = new g.constructor(g.source, rI.exec(g));
        return c.lastIndex = g.lastIndex, c;
      }
      function Ls(g) {
        return ct ? vI(ct.call(g)) : {};
      }
      function lu(g, c) {
        var e = c ? rl(g.buffer) : g.buffer;
        return new g.constructor(e, g.byteOffset, g.length);
      }
      function nu(g, c) {
        if (g !== c) {
          var e = g !== C, n = g === null, a = g === g, r = Qg(g), Z = c !== C, V = c === null, y = c === c, v = Qg(c);
          if (!V && !v && !r && g > c || r && Z && y && !V && !v || n && Z && y || !e && y || !a)
            return 1;
          if (!n && !r && !v && g < c || v && e && a && !n && !r || V && e && a || !Z && a || !y)
            return -1;
        }
        return 0;
      }
      function Ss(g, c, e) {
        for (var n = -1, a = g.criteria, r = c.criteria, Z = a.length, V = e.length; ++n < Z; ) {
          var y = nu(a[n], r[n]);
          if (y) {
            if (n >= V)
              return y;
            var v = e[n];
            return y * (v == "desc" ? -1 : 1);
          }
        }
        return g.index - c.index;
      }
      function bu(g, c, e, n) {
        for (var a = -1, r = g.length, Z = e.length, V = -1, y = c.length, v = tg(r - Z, 0), N = B(y + v), w = !n; ++V < y; )
          N[V] = c[V];
        for (; ++a < Z; )
          (w || a < r) && (N[e[a]] = g[a]);
        for (; v--; )
          N[V++] = g[a++];
        return N;
      }
      function uu(g, c, e, n) {
        for (var a = -1, r = g.length, Z = -1, V = e.length, y = -1, v = c.length, N = tg(r - V, 0), w = B(N + v), U = !n; ++a < N; )
          w[a] = g[a];
        for (var K = a; ++y < v; )
          w[K + y] = c[y];
        for (; ++Z < V; )
          (U || a < r) && (w[K + e[Z]] = g[a++]);
        return w;
      }
      function kg(g, c) {
        var e = -1, n = g.length;
        for (c || (c = B(n)); ++e < n; )
          c[e] = g[e];
        return c;
      }
      function UC(g, c, e, n) {
        var a = !e;
        e || (e = {});
        for (var r = -1, Z = c.length; ++r < Z; ) {
          var V = c[r], y = n ? n(e[V], g[V], V, e, g) : C;
          y === C && (y = g[V]), a ? gA(e, V, y) : tt(e, V, y);
        }
        return e;
      }
      function Js(g, c) {
        return UC(g, Vl(g), c);
      }
      function ks(g, c) {
        return UC(g, Wu(g), c);
      }
      function oe(g, c) {
        return function(e, n) {
          var a = AI(e) ? jr : is, r = c ? c() : {};
          return a(e, g, P(n, 2), r);
        };
      }
      function dc(g) {
        return iI(function(c, e) {
          var n = -1, a = e.length, r = a > 1 ? e[a - 1] : C, Z = a > 2 ? e[2] : C;
          for (r = g.length > 3 && typeof r == "function" ? (a--, r) : C, Z && Hg(e[0], e[1], Z) && (r = a < 3 ? C : r, a = 1), c = vI(c); ++n < a; ) {
            var V = e[n];
            V && g(c, V, n, r);
          }
          return c;
        });
      }
      function Gu(g, c) {
        return function(e, n) {
          if (e == null)
            return e;
          if (!zg(e))
            return g(e, n);
          for (var a = e.length, r = c ? a : -1, Z = vI(e); (c ? r-- : ++r < a) && n(Z[r], r, Z) !== !1; )
            ;
          return e;
        };
      }
      function au(g) {
        return function(c, e, n) {
          for (var a = -1, r = vI(c), Z = n(c), V = Z.length; V--; ) {
            var y = Z[g ? V : ++a];
            if (e(r[y], y, r) === !1)
              break;
          }
          return c;
        };
      }
      function zs(g, c, e) {
        var n = c & p, a = bt(g);
        function r() {
          var Z = this && this !== rg && this instanceof r ? a : g;
          return Z.apply(n ? e : this, arguments);
        }
        return r;
      }
      function du(g) {
        return function(c) {
          c = BI(c);
          var e = ic(c) ? FC(c) : C, n = e ? e[0] : c.charAt(0), a = e ? hA(e, 1).join("") : c.slice(1);
          return n[g]() + a;
        };
      }
      function rc(g) {
        return function(c) {
          return zi(GG(uG(c).replace(Yr, "")), g, "");
        };
      }
      function bt(g) {
        return function() {
          var c = arguments;
          switch (c.length) {
            case 0:
              return new g();
            case 1:
              return new g(c[0]);
            case 2:
              return new g(c[0], c[1]);
            case 3:
              return new g(c[0], c[1], c[2]);
            case 4:
              return new g(c[0], c[1], c[2], c[3]);
            case 5:
              return new g(c[0], c[1], c[2], c[3], c[4]);
            case 6:
              return new g(c[0], c[1], c[2], c[3], c[4], c[5]);
            case 7:
              return new g(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
          }
          var e = ac(g.prototype), n = g.apply(e, c);
          return UI(n) ? n : e;
        };
      }
      function Us(g, c, e) {
        var n = bt(g);
        function a() {
          for (var r = arguments.length, Z = B(r), V = r, y = Xc(a); V--; )
            Z[V] = arguments[V];
          var v = r < 3 && Z[0] !== y && Z[r - 1] !== y ? [] : XA(Z, y);
          if (r -= v.length, r < e)
            return ou(
              g,
              c,
              me,
              a.placeholder,
              C,
              Z,
              v,
              C,
              C,
              e - r
            );
          var N = this && this !== rg && this instanceof a ? n : g;
          return Dg(N, this, Z);
        }
        return a;
      }
      function ru(g) {
        return function(c, e, n) {
          var a = vI(c);
          if (!zg(c)) {
            var r = P(e, 3);
            c = ng(c), e = function(V) {
              return r(a[V], V, a);
            };
          }
          var Z = g(c, e, n);
          return Z > -1 ? a[r ? c[Z] : Z] : C;
        };
      }
      function Xu(g) {
        return AA(function(c) {
          var e = c.length, n = e, a = aC.prototype.thru;
          for (g && c.reverse(); n--; ) {
            var r = c[n];
            if (typeof r != "function")
              throw new GC(b);
            if (a && !Z && We(r) == "wrapper")
              var Z = new aC([], !0);
          }
          for (n = Z ? n : e; ++n < e; ) {
            r = c[n];
            var V = We(r), y = V == "wrapper" ? ml(r) : C;
            y && Wl(y[0]) && y[1] == (j | z | Y | oI) && !y[4].length && y[9] == 1 ? Z = Z[We(y[0])].apply(Z, y[3]) : Z = r.length == 1 && Wl(r) ? Z[V]() : Z.thru(r);
          }
          return function() {
            var v = arguments, N = v[0];
            if (Z && v.length == 1 && AI(N))
              return Z.plant(N).value();
            for (var w = 0, U = e ? c[w].apply(this, v) : N; ++w < e; )
              U = c[w].call(this, U);
            return U;
          };
        });
      }
      function me(g, c, e, n, a, r, Z, V, y, v) {
        var N = c & j, w = c & p, U = c & H, K = c & (z | S), _ = c & dI, eI = U ? C : bt(g);
        function $() {
          for (var nI = arguments.length, GI = B(nI), Pg = nI; Pg--; )
            GI[Pg] = arguments[Pg];
          if (K)
            var Ng = Xc($), _g = qr(GI, Ng);
          if (n && (GI = bu(GI, n, a, K)), r && (GI = uu(GI, r, Z, K)), nI -= _g, K && nI < v) {
            var EI = XA(GI, Ng);
            return ou(
              g,
              c,
              me,
              $.placeholder,
              e,
              GI,
              EI,
              V,
              y,
              v - nI
            );
          }
          var vC = w ? e : this, iA = U ? vC[g] : g;
          return nI = GI.length, V ? GI = iZ(GI, V) : _ && nI > 1 && GI.reverse(), N && y < nI && (GI.length = y), this && this !== rg && this instanceof $ && (iA = eI || bt(iA)), iA.apply(vC, GI);
        }
        return $;
      }
      function su(g, c) {
        return function(e, n) {
          return rs(e, g, c(n), {});
        };
      }
      function he(g, c) {
        return function(e, n) {
          var a;
          if (e === C && n === C)
            return c;
          if (e !== C && (a = e), n !== C) {
            if (a === C)
              return n;
            typeof e == "string" || typeof n == "string" ? (e = Kg(e), n = Kg(n)) : (e = Cu(e), n = Cu(n)), a = g(e, n);
          }
          return a;
        };
      }
      function Xl(g) {
        return AA(function(c) {
          return c = JI(c, Eg(P())), iI(function(e) {
            var n = this;
            return g(c, function(a) {
              return Dg(a, n, e);
            });
          });
        });
      }
      function Ve(g, c) {
        c = c === C ? " " : Kg(c);
        var e = c.length;
        if (e < 2)
          return e ? nl(c, g) : c;
        var n = nl(c, le(g / lc(c)));
        return ic(c) ? hA(FC(n), 0, g).join("") : n.slice(0, g);
      }
      function Ts(g, c, e, n) {
        var a = c & p, r = bt(g);
        function Z() {
          for (var V = -1, y = arguments.length, v = -1, N = n.length, w = B(N + y), U = this && this !== rg && this instanceof Z ? r : g; ++v < N; )
            w[v] = n[v];
          for (; y--; )
            w[v++] = arguments[++V];
          return Dg(U, a ? e : this, w);
        }
        return Z;
      }
      function Zu(g) {
        return function(c, e, n) {
          return n && typeof n != "number" && Hg(c, e, n) && (e = n = C), c = eA(c), e === C ? (e = c, c = 0) : e = eA(e), n = n === C ? c < e ? 1 : -1 : eA(n), xs(c, e, n, g);
        };
      }
      function Re(g) {
        return function(c, e) {
          return typeof c == "string" && typeof e == "string" || (c = sC(c), e = sC(e)), g(c, e);
        };
      }
      function ou(g, c, e, n, a, r, Z, V, y, v) {
        var N = c & z, w = N ? Z : C, U = N ? C : Z, K = N ? r : C, _ = N ? C : r;
        c |= N ? Y : M, c &= ~(N ? M : Y), c & J || (c &= ~(p | H));
        var eI = [
          g,
          c,
          a,
          K,
          w,
          _,
          U,
          V,
          y,
          v
        ], $ = e.apply(C, eI);
        return Wl(g) && fu($, eI), $.placeholder = n, vu($, g, c);
      }
      function sl(g) {
        var c = cg[g];
        return function(e, n) {
          if (e = sC(e), n = n == null ? 0 : mg(tI(n), 292), n && vb(e)) {
            var a = (BI(e) + "e").split("e"), r = c(a[0] + "e" + (+a[1] + n));
            return a = (BI(r) + "e").split("e"), +(a[0] + "e" + (+a[1] - n));
          }
          return c(e);
        };
      }
      var Os = uc && 1 / $t(new uc([, -0]))[1] == SI ? function(g) {
        return new uc(g);
      } : kl;
      function mu(g) {
        return function(c) {
          var e = hg(c);
          return e == _I ? Ei(c) : e == lg ? eX(c) : $r(c, g(c));
        };
      }
      function CA(g, c, e, n, a, r, Z, V) {
        var y = c & H;
        if (!y && typeof g != "function")
          throw new GC(b);
        var v = n ? n.length : 0;
        if (v || (c &= ~(Y | M), n = a = C), Z = Z === C ? Z : tg(tI(Z), 0), V = V === C ? V : tI(V), v -= a ? a.length : 0, c & M) {
          var N = n, w = a;
          n = a = C;
        }
        var U = y ? C : ml(g), K = [
          g,
          c,
          e,
          n,
          a,
          N,
          w,
          r,
          Z,
          V
        ];
        if (U && cZ(K, U), g = K[0], c = K[1], e = K[2], n = K[3], a = K[4], V = K[9] = K[9] === C ? y ? 0 : g.length : tg(K[9] - v, 0), !V && c & (z | S) && (c &= ~(z | S)), !c || c == p)
          var _ = zs(g, c, e);
        else c == z || c == S ? _ = Us(g, c, V) : (c == Y || c == (p | Y)) && !a.length ? _ = Ts(g, c, e, n) : _ = me.apply(C, K);
        var eI = U ? Iu : fu;
        return vu(eI(_, K), g, c);
      }
      function hu(g, c, e, n) {
        return g === C || fC(g, bc[e]) && !fI.call(n, e) ? c : g;
      }
      function Vu(g, c, e, n, a, r) {
        return UI(g) && UI(c) && (r.set(c, g), Xe(g, c, C, Vu, r), r.delete(c)), g;
      }
      function js(g) {
        return at(g) ? C : g;
      }
      function Ru(g, c, e, n, a, r) {
        var Z = e & F, V = g.length, y = c.length;
        if (V != y && !(Z && y > V))
          return !1;
        var v = r.get(g), N = r.get(c);
        if (v && N)
          return v == c && N == g;
        var w = -1, U = !0, K = e & x ? new kA() : C;
        for (r.set(g, c), r.set(c, g); ++w < V; ) {
          var _ = g[w], eI = c[w];
          if (n)
            var $ = Z ? n(eI, _, w, c, g, r) : n(_, eI, w, g, c, r);
          if ($ !== C) {
            if ($)
              continue;
            U = !1;
            break;
          }
          if (K) {
            if (!Ui(c, function(nI, GI) {
              if (!qc(K, GI) && (_ === nI || a(_, nI, e, n, r)))
                return K.push(GI);
            })) {
              U = !1;
              break;
            }
          } else if (!(_ === eI || a(_, eI, e, n, r))) {
            U = !1;
            break;
          }
        }
        return r.delete(g), r.delete(c), U;
      }
      function Ms(g, c, e, n, a, r, Z) {
        switch (e) {
          case pC:
            if (g.byteLength != c.byteLength || g.byteOffset != c.byteOffset)
              return !1;
            g = g.buffer, c = c.buffer;
          case Jg:
            return !(g.byteLength != c.byteLength || !r(new ce(g), new ce(c)));
          case PI:
          case pg:
          case Fg:
            return fC(+g, +c);
          case iC:
            return g.name == c.name && g.message == c.message;
          case fg:
          case lC:
            return g == c + "";
          case _I:
            var V = Ei;
          case lg:
            var y = n & F;
            if (V || (V = $t), g.size != c.size && !y)
              return !1;
            var v = Z.get(g);
            if (v)
              return v == c;
            n |= x, Z.set(g, c);
            var N = Ru(V(g), V(c), n, a, r, Z);
            return Z.delete(g), N;
          case _C:
            if (ct)
              return ct.call(g) == ct.call(c);
        }
        return !1;
      }
      function Ds(g, c, e, n, a, r) {
        var Z = e & F, V = Zl(g), y = V.length, v = Zl(c), N = v.length;
        if (y != N && !Z)
          return !1;
        for (var w = y; w--; ) {
          var U = V[w];
          if (!(Z ? U in c : fI.call(c, U)))
            return !1;
        }
        var K = r.get(g), _ = r.get(c);
        if (K && _)
          return K == c && _ == g;
        var eI = !0;
        r.set(g, c), r.set(c, g);
        for (var $ = Z; ++w < y; ) {
          U = V[w];
          var nI = g[U], GI = c[U];
          if (n)
            var Pg = Z ? n(GI, nI, U, c, g, r) : n(nI, GI, U, g, c, r);
          if (!(Pg === C ? nI === GI || a(nI, GI, e, n, r) : Pg)) {
            eI = !1;
            break;
          }
          $ || ($ = U == "constructor");
        }
        if (eI && !$) {
          var Ng = g.constructor, _g = c.constructor;
          Ng != _g && "constructor" in g && "constructor" in c && !(typeof Ng == "function" && Ng instanceof Ng && typeof _g == "function" && _g instanceof _g) && (eI = !1);
        }
        return r.delete(g), r.delete(c), eI;
      }
      function AA(g) {
        return Bl(Fu(g, C, Ju), g + "");
      }
      function Zl(g) {
        return Ob(g, ng, Vl);
      }
      function ol(g) {
        return Ob(g, Ug, Wu);
      }
      var ml = be ? function(g) {
        return be.get(g);
      } : kl;
      function We(g) {
        for (var c = g.name + "", e = Gc[c], n = fI.call(Gc, c) ? e.length : 0; n--; ) {
          var a = e[n], r = a.func;
          if (r == null || r == g)
            return a.name;
        }
        return c;
      }
      function Xc(g) {
        var c = fI.call(d, "placeholder") ? d : g;
        return c.placeholder;
      }
      function P() {
        var g = d.iteratee || Sl;
        return g = g === Sl ? Db : g, arguments.length ? g(arguments[0], arguments[1]) : g;
      }
      function ye(g, c) {
        var e = g.__data__;
        return IZ(c) ? e[typeof c == "string" ? "string" : "hash"] : e.map;
      }
      function hl(g) {
        for (var c = ng(g), e = c.length; e--; ) {
          var n = c[e], a = g[n];
          c[e] = [n, a, xu(a)];
        }
        return c;
      }
      function TA(g, c) {
        var e = AX(g, c);
        return Mb(e) ? e : C;
      }
      function Es(g) {
        var c = fI.call(g, SA), e = g[SA];
        try {
          g[SA] = C;
          var n = !0;
        } catch {
        }
        var a = Ce.call(g);
        return n && (c ? g[SA] = e : delete g[SA]), a;
      }
      var Vl = Qi ? function(g) {
        return g == null ? [] : (g = vI(g), dA(Qi(g), function(c) {
          return Yb.call(g, c);
        }));
      } : zl, Wu = Qi ? function(g) {
        for (var c = []; g; )
          rA(c, Vl(g)), g = te(g);
        return c;
      } : zl, hg = vg;
      (Pi && hg(new Pi(new ArrayBuffer(1))) != pC || gt && hg(new gt()) != _I || _i && hg(_i.resolve()) != vA || uc && hg(new uc()) != lg || Ct && hg(new Ct()) != xC) && (hg = function(g) {
        var c = vg(g), e = c == Yg ? g.constructor : C, n = e ? OA(e) : "";
        if (n)
          switch (n) {
            case FX:
              return pC;
            case YX:
              return _I;
            case fX:
              return vA;
            case vX:
              return lg;
            case HX:
              return xC;
          }
        return c;
      });
      function Ks(g, c, e) {
        for (var n = -1, a = e.length; ++n < a; ) {
          var r = e[n], Z = r.size;
          switch (r.type) {
            case "drop":
              g += Z;
              break;
            case "dropRight":
              c -= Z;
              break;
            case "take":
              c = mg(c, g + Z);
              break;
            case "takeRight":
              g = tg(g, c - Z);
              break;
          }
        }
        return { start: g, end: c };
      }
      function Qs(g) {
        var c = g.match(Fi);
        return c ? c[1].split(Yi) : [];
      }
      function yu(g, c, e) {
        c = mA(c, g);
        for (var n = -1, a = c.length, r = !1; ++n < a; ) {
          var Z = TC(c[n]);
          if (!(r = g != null && e(g, Z)))
            break;
          g = g[Z];
        }
        return r || ++n != a ? r : (a = g == null ? 0 : g.length, !!a && ve(a) && cA(Z, a) && (AI(g) || jA(g)));
      }
      function Ps(g) {
        var c = g.length, e = new g.constructor(c);
        return c && typeof g[0] == "string" && fI.call(g, "index") && (e.index = g.index, e.input = g.input), e;
      }
      function Bu(g) {
        return typeof g.constructor == "function" && !ut(g) ? ac(te(g)) : {};
      }
      function _s(g, c, e) {
        var n = g.constructor;
        switch (c) {
          case Jg:
            return rl(g);
          case PI:
          case pg:
            return new n(+g);
          case pC:
            return Ns(g, e);
          case gc:
          case Cc:
          case wA:
          case Oc:
          case jc:
          case Mc:
          case Dc:
          case Ec:
          case Kc:
            return lu(g, e);
          case _I:
            return new n();
          case Fg:
          case lC:
            return new n(g);
          case fg:
            return ws(g);
          case lg:
            return new n();
          case _C:
            return Ls(g);
        }
      }
      function $s(g, c) {
        var e = c.length;
        if (!e)
          return g;
        var n = e - 1;
        return c[n] = (e > 1 ? "& " : "") + c[n], c = c.join(e > 2 ? ", " : " "), g.replace(pi, `{
/* [wrapped with ` + c + `] */
`);
      }
      function qs(g) {
        return AI(g) || jA(g) || !!(fb && g && g[fb]);
      }
      function cA(g, c) {
        var e = typeof g;
        return c = c ?? gg, !!c && (e == "number" || e != "symbol" && zI.test(g)) && g > -1 && g % 1 == 0 && g < c;
      }
      function Hg(g, c, e) {
        if (!UI(e))
          return !1;
        var n = typeof c;
        return (n == "number" ? zg(e) && cA(c, e.length) : n == "string" && c in e) ? fC(e[c], g) : !1;
      }
      function Rl(g, c) {
        if (AI(g))
          return !1;
        var e = typeof g;
        return e == "number" || e == "symbol" || e == "boolean" || g == null || Qg(g) ? !0 : Dt.test(g) || !Mt.test(g) || c != null && g in vI(c);
      }
      function IZ(g) {
        var c = typeof g;
        return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? g !== "__proto__" : g === null;
      }
      function Wl(g) {
        var c = We(g), e = d[c];
        if (typeof e != "function" || !(c in uI.prototype))
          return !1;
        if (g === e)
          return !0;
        var n = ml(e);
        return !!n && g === n[0];
      }
      function gZ(g) {
        return !!xb && xb in g;
      }
      var CZ = Ie ? tA : Ul;
      function ut(g) {
        var c = g && g.constructor, e = typeof c == "function" && c.prototype || bc;
        return g === e;
      }
      function xu(g) {
        return g === g && !UI(g);
      }
      function pu(g, c) {
        return function(e) {
          return e == null ? !1 : e[g] === c && (c !== C || g in vI(e));
        };
      }
      function AZ(g) {
        var c = Ye(g, function(n) {
          return e.size === X && e.clear(), n;
        }), e = c.cache;
        return c;
      }
      function cZ(g, c) {
        var e = g[1], n = c[1], a = e | n, r = a < (p | H | j), Z = n == j && e == z || n == j && e == oI && g[7].length <= c[8] || n == (j | oI) && c[7].length <= c[8] && e == z;
        if (!(r || Z))
          return g;
        n & p && (g[2] = c[2], a |= e & p ? 0 : J);
        var V = c[3];
        if (V) {
          var y = g[3];
          g[3] = y ? bu(y, V, c[4]) : V, g[4] = y ? XA(g[3], s) : c[4];
        }
        return V = c[5], V && (y = g[5], g[5] = y ? uu(y, V, c[6]) : V, g[6] = y ? XA(g[5], s) : c[6]), V = c[7], V && (g[7] = V), n & j && (g[8] = g[8] == null ? c[8] : mg(g[8], c[8])), g[9] == null && (g[9] = c[9]), g[0] = c[0], g[1] = a, g;
      }
      function tZ(g) {
        var c = [];
        if (g != null)
          for (var e in vI(g))
            c.push(e);
        return c;
      }
      function eZ(g) {
        return Ce.call(g);
      }
      function Fu(g, c, e) {
        return c = tg(c === C ? g.length - 1 : c, 0), function() {
          for (var n = arguments, a = -1, r = tg(n.length - c, 0), Z = B(r); ++a < r; )
            Z[a] = n[c + a];
          a = -1;
          for (var V = B(c + 1); ++a < c; )
            V[a] = n[a];
          return V[c] = e(Z), Dg(g, this, V);
        };
      }
      function Yu(g, c) {
        return c.length < 2 ? g : UA(g, rC(c, 0, -1));
      }
      function iZ(g, c) {
        for (var e = g.length, n = mg(c.length, e), a = kg(g); n--; ) {
          var r = c[n];
          g[n] = cA(r, e) ? a[r] : C;
        }
        return g;
      }
      function yl(g, c) {
        if (!(c === "constructor" && typeof g[c] == "function") && c != "__proto__")
          return g[c];
      }
      var fu = Hu(Iu), Gt = VX || function(g, c) {
        return rg.setTimeout(g, c);
      }, Bl = Hu(Ys);
      function vu(g, c, e) {
        var n = c + "";
        return Bl(g, $s(n, lZ(Qs(n), e)));
      }
      function Hu(g) {
        var c = 0, e = 0;
        return function() {
          var n = BX(), a = yI - (n - e);
          if (e = n, a > 0) {
            if (++c >= ig)
              return arguments[0];
          } else
            c = 0;
          return g.apply(C, arguments);
        };
      }
      function Be(g, c) {
        var e = -1, n = g.length, a = n - 1;
        for (c = c === C ? n : c; ++e < c; ) {
          var r = ll(e, a), Z = g[r];
          g[r] = g[e], g[e] = Z;
        }
        return g.length = c, g;
      }
      var Nu = AZ(function(g) {
        var c = [];
        return g.charCodeAt(0) === 46 && c.push(""), g.replace(Bi, function(e, n, a, r) {
          c.push(a ? r.replace(O, "$1") : n || e);
        }), c;
      });
      function TC(g) {
        if (typeof g == "string" || Qg(g))
          return g;
        var c = g + "";
        return c == "0" && 1 / g == -SI ? "-0" : c;
      }
      function OA(g) {
        if (g != null) {
          try {
            return ge.call(g);
          } catch {
          }
          try {
            return g + "";
          } catch {
          }
        }
        return "";
      }
      function lZ(g, c) {
        return uC(tC, function(e) {
          var n = "_." + e[0];
          c & e[1] && !Pt(g, n) && g.push(n);
        }), g.sort();
      }
      function wu(g) {
        if (g instanceof uI)
          return g.clone();
        var c = new aC(g.__wrapped__, g.__chain__);
        return c.__actions__ = kg(g.__actions__), c.__index__ = g.__index__, c.__values__ = g.__values__, c;
      }
      function nZ(g, c, e) {
        (e ? Hg(g, c, e) : c === C) ? c = 1 : c = tg(tI(c), 0);
        var n = g == null ? 0 : g.length;
        if (!n || c < 1)
          return [];
        for (var a = 0, r = 0, Z = B(le(n / c)); a < n; )
          Z[r++] = rC(g, a, a += c);
        return Z;
      }
      function bZ(g) {
        for (var c = -1, e = g == null ? 0 : g.length, n = 0, a = []; ++c < e; ) {
          var r = g[c];
          r && (a[n++] = r);
        }
        return a;
      }
      function uZ() {
        var g = arguments.length;
        if (!g)
          return [];
        for (var c = B(g - 1), e = arguments[0], n = g; n--; )
          c[n - 1] = arguments[n];
        return rA(AI(e) ? kg(e) : [e], Xg(c, 1));
      }
      var GZ = iI(function(g, c) {
        return DI(g) ? et(g, Xg(c, 1, DI, !0)) : [];
      }), aZ = iI(function(g, c) {
        var e = XC(c);
        return DI(e) && (e = C), DI(g) ? et(g, Xg(c, 1, DI, !0), P(e, 2)) : [];
      }), dZ = iI(function(g, c) {
        var e = XC(c);
        return DI(e) && (e = C), DI(g) ? et(g, Xg(c, 1, DI, !0), C, e) : [];
      });
      function rZ(g, c, e) {
        var n = g == null ? 0 : g.length;
        return n ? (c = e || c === C ? 1 : tI(c), rC(g, c < 0 ? 0 : c, n)) : [];
      }
      function XZ(g, c, e) {
        var n = g == null ? 0 : g.length;
        return n ? (c = e || c === C ? 1 : tI(c), c = n - c, rC(g, 0, c < 0 ? 0 : c)) : [];
      }
      function sZ(g, c) {
        return g && g.length ? Ze(g, P(c, 3), !0, !0) : [];
      }
      function ZZ(g, c) {
        return g && g.length ? Ze(g, P(c, 3), !0) : [];
      }
      function oZ(g, c, e, n) {
        var a = g == null ? 0 : g.length;
        return a ? (e && typeof e != "number" && Hg(g, c, e) && (e = 0, n = a), us(g, c, e, n)) : [];
      }
      function Lu(g, c, e) {
        var n = g == null ? 0 : g.length;
        if (!n)
          return -1;
        var a = e == null ? 0 : tI(e);
        return a < 0 && (a = tg(n + a, 0)), _t(g, P(c, 3), a);
      }
      function Su(g, c, e) {
        var n = g == null ? 0 : g.length;
        if (!n)
          return -1;
        var a = n - 1;
        return e !== C && (a = tI(e), a = e < 0 ? tg(n + a, 0) : mg(a, n - 1)), _t(g, P(c, 3), a, !0);
      }
      function Ju(g) {
        var c = g == null ? 0 : g.length;
        return c ? Xg(g, 1) : [];
      }
      function mZ(g) {
        var c = g == null ? 0 : g.length;
        return c ? Xg(g, SI) : [];
      }
      function hZ(g, c) {
        var e = g == null ? 0 : g.length;
        return e ? (c = c === C ? 1 : tI(c), Xg(g, c)) : [];
      }
      function VZ(g) {
        for (var c = -1, e = g == null ? 0 : g.length, n = {}; ++c < e; ) {
          var a = g[c];
          n[a[0]] = a[1];
        }
        return n;
      }
      function ku(g) {
        return g && g.length ? g[0] : C;
      }
      function RZ(g, c, e) {
        var n = g == null ? 0 : g.length;
        if (!n)
          return -1;
        var a = e == null ? 0 : tI(e);
        return a < 0 && (a = tg(n + a, 0)), ec(g, c, a);
      }
      function WZ(g) {
        var c = g == null ? 0 : g.length;
        return c ? rC(g, 0, -1) : [];
      }
      var yZ = iI(function(g) {
        var c = JI(g, al);
        return c.length && c[0] === g[0] ? Al(c) : [];
      }), BZ = iI(function(g) {
        var c = XC(g), e = JI(g, al);
        return c === XC(e) ? c = C : e.pop(), e.length && e[0] === g[0] ? Al(e, P(c, 2)) : [];
      }), xZ = iI(function(g) {
        var c = XC(g), e = JI(g, al);
        return c = typeof c == "function" ? c : C, c && e.pop(), e.length && e[0] === g[0] ? Al(e, C, c) : [];
      });
      function pZ(g, c) {
        return g == null ? "" : WX.call(g, c);
      }
      function XC(g) {
        var c = g == null ? 0 : g.length;
        return c ? g[c - 1] : C;
      }
      function FZ(g, c, e) {
        var n = g == null ? 0 : g.length;
        if (!n)
          return -1;
        var a = n;
        return e !== C && (a = tI(e), a = a < 0 ? tg(n + a, 0) : mg(a, n - 1)), c === c ? lX(g, c, a) : _t(g, ob, a, !0);
      }
      function YZ(g, c) {
        return g && g.length ? Pb(g, tI(c)) : C;
      }
      var fZ = iI(zu);
      function zu(g, c) {
        return g && g.length && c && c.length ? il(g, c) : g;
      }
      function vZ(g, c, e) {
        return g && g.length && c && c.length ? il(g, c, P(e, 2)) : g;
      }
      function HZ(g, c, e) {
        return g && g.length && c && c.length ? il(g, c, C, e) : g;
      }
      var NZ = AA(function(g, c) {
        var e = g == null ? 0 : g.length, n = qi(g, c);
        return qb(g, JI(c, function(a) {
          return cA(a, e) ? +a : a;
        }).sort(nu)), n;
      });
      function wZ(g, c) {
        var e = [];
        if (!(g && g.length))
          return e;
        var n = -1, a = [], r = g.length;
        for (c = P(c, 3); ++n < r; ) {
          var Z = g[n];
          c(Z, n, g) && (e.push(Z), a.push(n));
        }
        return qb(g, a), e;
      }
      function xl(g) {
        return g == null ? g : pX.call(g);
      }
      function LZ(g, c, e) {
        var n = g == null ? 0 : g.length;
        return n ? (e && typeof e != "number" && Hg(g, c, e) ? (c = 0, e = n) : (c = c == null ? 0 : tI(c), e = e === C ? n : tI(e)), rC(g, c, e)) : [];
      }
      function SZ(g, c) {
        return se(g, c);
      }
      function JZ(g, c, e) {
        return bl(g, c, P(e, 2));
      }
      function kZ(g, c) {
        var e = g == null ? 0 : g.length;
        if (e) {
          var n = se(g, c);
          if (n < e && fC(g[n], c))
            return n;
        }
        return -1;
      }
      function zZ(g, c) {
        return se(g, c, !0);
      }
      function UZ(g, c, e) {
        return bl(g, c, P(e, 2), !0);
      }
      function TZ(g, c) {
        var e = g == null ? 0 : g.length;
        if (e) {
          var n = se(g, c, !0) - 1;
          if (fC(g[n], c))
            return n;
        }
        return -1;
      }
      function OZ(g) {
        return g && g.length ? gu(g) : [];
      }
      function jZ(g, c) {
        return g && g.length ? gu(g, P(c, 2)) : [];
      }
      function MZ(g) {
        var c = g == null ? 0 : g.length;
        return c ? rC(g, 1, c) : [];
      }
      function DZ(g, c, e) {
        return g && g.length ? (c = e || c === C ? 1 : tI(c), rC(g, 0, c < 0 ? 0 : c)) : [];
      }
      function EZ(g, c, e) {
        var n = g == null ? 0 : g.length;
        return n ? (c = e || c === C ? 1 : tI(c), c = n - c, rC(g, c < 0 ? 0 : c, n)) : [];
      }
      function KZ(g, c) {
        return g && g.length ? Ze(g, P(c, 3), !1, !0) : [];
      }
      function QZ(g, c) {
        return g && g.length ? Ze(g, P(c, 3)) : [];
      }
      var PZ = iI(function(g) {
        return oA(Xg(g, 1, DI, !0));
      }), _Z = iI(function(g) {
        var c = XC(g);
        return DI(c) && (c = C), oA(Xg(g, 1, DI, !0), P(c, 2));
      }), $Z = iI(function(g) {
        var c = XC(g);
        return c = typeof c == "function" ? c : C, oA(Xg(g, 1, DI, !0), C, c);
      });
      function qZ(g) {
        return g && g.length ? oA(g) : [];
      }
      function Io(g, c) {
        return g && g.length ? oA(g, P(c, 2)) : [];
      }
      function go(g, c) {
        return c = typeof c == "function" ? c : C, g && g.length ? oA(g, C, c) : [];
      }
      function pl(g) {
        if (!(g && g.length))
          return [];
        var c = 0;
        return g = dA(g, function(e) {
          if (DI(e))
            return c = tg(e.length, c), !0;
        }), Mi(c, function(e) {
          return JI(g, Ti(e));
        });
      }
      function Uu(g, c) {
        if (!(g && g.length))
          return [];
        var e = pl(g);
        return c == null ? e : JI(e, function(n) {
          return Dg(c, C, n);
        });
      }
      var Co = iI(function(g, c) {
        return DI(g) ? et(g, c) : [];
      }), Ao = iI(function(g) {
        return Gl(dA(g, DI));
      }), co = iI(function(g) {
        var c = XC(g);
        return DI(c) && (c = C), Gl(dA(g, DI), P(c, 2));
      }), to = iI(function(g) {
        var c = XC(g);
        return c = typeof c == "function" ? c : C, Gl(dA(g, DI), C, c);
      }), eo = iI(pl);
      function io(g, c) {
        return tu(g || [], c || [], tt);
      }
      function lo(g, c) {
        return tu(g || [], c || [], nt);
      }
      var no = iI(function(g) {
        var c = g.length, e = c > 1 ? g[c - 1] : C;
        return e = typeof e == "function" ? (g.pop(), e) : C, Uu(g, e);
      });
      function Tu(g) {
        var c = d(g);
        return c.__chain__ = !0, c;
      }
      function bo(g, c) {
        return c(g), g;
      }
      function xe(g, c) {
        return c(g);
      }
      var uo = AA(function(g) {
        var c = g.length, e = c ? g[0] : 0, n = this.__wrapped__, a = function(r) {
          return qi(r, g);
        };
        return c > 1 || this.__actions__.length || !(n instanceof uI) || !cA(e) ? this.thru(a) : (n = n.slice(e, +e + (c ? 1 : 0)), n.__actions__.push({
          func: xe,
          args: [a],
          thisArg: C
        }), new aC(n, this.__chain__).thru(function(r) {
          return c && !r.length && r.push(C), r;
        }));
      });
      function Go() {
        return Tu(this);
      }
      function ao() {
        return new aC(this.value(), this.__chain__);
      }
      function ro() {
        this.__values__ === C && (this.__values__ = CG(this.value()));
        var g = this.__index__ >= this.__values__.length, c = g ? C : this.__values__[this.__index__++];
        return { done: g, value: c };
      }
      function Xo() {
        return this;
      }
      function so(g) {
        for (var c, e = this; e instanceof Ge; ) {
          var n = wu(e);
          n.__index__ = 0, n.__values__ = C, c ? a.__wrapped__ = n : c = n;
          var a = n;
          e = e.__wrapped__;
        }
        return a.__wrapped__ = g, c;
      }
      function Zo() {
        var g = this.__wrapped__;
        if (g instanceof uI) {
          var c = g;
          return this.__actions__.length && (c = new uI(this)), c = c.reverse(), c.__actions__.push({
            func: xe,
            args: [xl],
            thisArg: C
          }), new aC(c, this.__chain__);
        }
        return this.thru(xl);
      }
      function oo() {
        return cu(this.__wrapped__, this.__actions__);
      }
      var mo = oe(function(g, c, e) {
        fI.call(g, e) ? ++g[e] : gA(g, e, 1);
      });
      function ho(g, c, e) {
        var n = AI(g) ? sb : bs;
        return e && Hg(g, c, e) && (c = C), n(g, P(c, 3));
      }
      function Vo(g, c) {
        var e = AI(g) ? dA : Ub;
        return e(g, P(c, 3));
      }
      var Ro = ru(Lu), Wo = ru(Su);
      function yo(g, c) {
        return Xg(pe(g, c), 1);
      }
      function Bo(g, c) {
        return Xg(pe(g, c), SI);
      }
      function xo(g, c, e) {
        return e = e === C ? 1 : tI(e), Xg(pe(g, c), e);
      }
      function Ou(g, c) {
        var e = AI(g) ? uC : ZA;
        return e(g, P(c, 3));
      }
      function ju(g, c) {
        var e = AI(g) ? Mr : zb;
        return e(g, P(c, 3));
      }
      var po = oe(function(g, c, e) {
        fI.call(g, e) ? g[e].push(c) : gA(g, e, [c]);
      });
      function Fo(g, c, e, n) {
        g = zg(g) ? g : Zc(g), e = e && !n ? tI(e) : 0;
        var a = g.length;
        return e < 0 && (e = tg(a + e, 0)), He(g) ? e <= a && g.indexOf(c, e) > -1 : !!a && ec(g, c, e) > -1;
      }
      var Yo = iI(function(g, c, e) {
        var n = -1, a = typeof c == "function", r = zg(g) ? B(g.length) : [];
        return ZA(g, function(Z) {
          r[++n] = a ? Dg(c, Z, e) : it(Z, c, e);
        }), r;
      }), fo = oe(function(g, c, e) {
        gA(g, e, c);
      });
      function pe(g, c) {
        var e = AI(g) ? JI : Eb;
        return e(g, P(c, 3));
      }
      function vo(g, c, e, n) {
        return g == null ? [] : (AI(c) || (c = c == null ? [] : [c]), e = n ? C : e, AI(e) || (e = e == null ? [] : [e]), _b(g, c, e));
      }
      var Ho = oe(function(g, c, e) {
        g[e ? 0 : 1].push(c);
      }, function() {
        return [[], []];
      });
      function No(g, c, e) {
        var n = AI(g) ? zi : hb, a = arguments.length < 3;
        return n(g, P(c, 4), e, a, ZA);
      }
      function wo(g, c, e) {
        var n = AI(g) ? Dr : hb, a = arguments.length < 3;
        return n(g, P(c, 4), e, a, zb);
      }
      function Lo(g, c) {
        var e = AI(g) ? dA : Ub;
        return e(g, fe(P(c, 3)));
      }
      function So(g) {
        var c = AI(g) ? Lb : ps;
        return c(g);
      }
      function Jo(g, c, e) {
        (e ? Hg(g, c, e) : c === C) ? c = 1 : c = tI(c);
        var n = AI(g) ? ts : Fs;
        return n(g, c);
      }
      function ko(g) {
        var c = AI(g) ? es : fs;
        return c(g);
      }
      function zo(g) {
        if (g == null)
          return 0;
        if (zg(g))
          return He(g) ? lc(g) : g.length;
        var c = hg(g);
        return c == _I || c == lg ? g.size : tl(g).length;
      }
      function Uo(g, c, e) {
        var n = AI(g) ? Ui : vs;
        return e && Hg(g, c, e) && (c = C), n(g, P(c, 3));
      }
      var To = iI(function(g, c) {
        if (g == null)
          return [];
        var e = c.length;
        return e > 1 && Hg(g, c[0], c[1]) ? c = [] : e > 2 && Hg(c[0], c[1], c[2]) && (c = [c[0]]), _b(g, Xg(c, 1), []);
      }), Fe = hX || function() {
        return rg.Date.now();
      };
      function Oo(g, c) {
        if (typeof c != "function")
          throw new GC(b);
        return g = tI(g), function() {
          if (--g < 1)
            return c.apply(this, arguments);
        };
      }
      function Mu(g, c, e) {
        return c = e ? C : c, c = g && c == null ? g.length : c, CA(g, j, C, C, C, C, c);
      }
      function Du(g, c) {
        var e;
        if (typeof c != "function")
          throw new GC(b);
        return g = tI(g), function() {
          return --g > 0 && (e = c.apply(this, arguments)), g <= 1 && (c = C), e;
        };
      }
      var Fl = iI(function(g, c, e) {
        var n = p;
        if (e.length) {
          var a = XA(e, Xc(Fl));
          n |= Y;
        }
        return CA(g, n, c, e, a);
      }), Eu = iI(function(g, c, e) {
        var n = p | H;
        if (e.length) {
          var a = XA(e, Xc(Eu));
          n |= Y;
        }
        return CA(c, n, g, e, a);
      });
      function Ku(g, c, e) {
        c = e ? C : c;
        var n = CA(g, z, C, C, C, C, C, c);
        return n.placeholder = Ku.placeholder, n;
      }
      function Qu(g, c, e) {
        c = e ? C : c;
        var n = CA(g, S, C, C, C, C, C, c);
        return n.placeholder = Qu.placeholder, n;
      }
      function Pu(g, c, e) {
        var n, a, r, Z, V, y, v = 0, N = !1, w = !1, U = !0;
        if (typeof g != "function")
          throw new GC(b);
        c = sC(c) || 0, UI(e) && (N = !!e.leading, w = "maxWait" in e, r = w ? tg(sC(e.maxWait) || 0, c) : r, U = "trailing" in e ? !!e.trailing : U);
        function K(EI) {
          var vC = n, iA = a;
          return n = a = C, v = EI, Z = g.apply(iA, vC), Z;
        }
        function _(EI) {
          return v = EI, V = Gt(nI, c), N ? K(EI) : Z;
        }
        function eI(EI) {
          var vC = EI - y, iA = EI - v, rG = c - vC;
          return w ? mg(rG, r - iA) : rG;
        }
        function $(EI) {
          var vC = EI - y, iA = EI - v;
          return y === C || vC >= c || vC < 0 || w && iA >= r;
        }
        function nI() {
          var EI = Fe();
          if ($(EI))
            return GI(EI);
          V = Gt(nI, eI(EI));
        }
        function GI(EI) {
          return V = C, U && n ? K(EI) : (n = a = C, Z);
        }
        function Pg() {
          V !== C && eu(V), v = 0, n = y = a = V = C;
        }
        function Ng() {
          return V === C ? Z : GI(Fe());
        }
        function _g() {
          var EI = Fe(), vC = $(EI);
          if (n = arguments, a = this, y = EI, vC) {
            if (V === C)
              return _(y);
            if (w)
              return eu(V), V = Gt(nI, c), K(y);
          }
          return V === C && (V = Gt(nI, c)), Z;
        }
        return _g.cancel = Pg, _g.flush = Ng, _g;
      }
      var jo = iI(function(g, c) {
        return kb(g, 1, c);
      }), Mo = iI(function(g, c, e) {
        return kb(g, sC(c) || 0, e);
      });
      function Do(g) {
        return CA(g, dI);
      }
      function Ye(g, c) {
        if (typeof g != "function" || c != null && typeof c != "function")
          throw new GC(b);
        var e = function() {
          var n = arguments, a = c ? c.apply(this, n) : n[0], r = e.cache;
          if (r.has(a))
            return r.get(a);
          var Z = g.apply(this, n);
          return e.cache = r.set(a, Z) || r, Z;
        };
        return e.cache = new (Ye.Cache || IA)(), e;
      }
      Ye.Cache = IA;
      function fe(g) {
        if (typeof g != "function")
          throw new GC(b);
        return function() {
          var c = arguments;
          switch (c.length) {
            case 0:
              return !g.call(this);
            case 1:
              return !g.call(this, c[0]);
            case 2:
              return !g.call(this, c[0], c[1]);
            case 3:
              return !g.call(this, c[0], c[1], c[2]);
          }
          return !g.apply(this, c);
        };
      }
      function Eo(g) {
        return Du(2, g);
      }
      var Ko = Hs(function(g, c) {
        c = c.length == 1 && AI(c[0]) ? JI(c[0], Eg(P())) : JI(Xg(c, 1), Eg(P()));
        var e = c.length;
        return iI(function(n) {
          for (var a = -1, r = mg(n.length, e); ++a < r; )
            n[a] = c[a].call(this, n[a]);
          return Dg(g, this, n);
        });
      }), Yl = iI(function(g, c) {
        var e = XA(c, Xc(Yl));
        return CA(g, Y, C, c, e);
      }), _u = iI(function(g, c) {
        var e = XA(c, Xc(_u));
        return CA(g, M, C, c, e);
      }), Qo = AA(function(g, c) {
        return CA(g, oI, C, C, C, c);
      });
      function Po(g, c) {
        if (typeof g != "function")
          throw new GC(b);
        return c = c === C ? c : tI(c), iI(g, c);
      }
      function _o(g, c) {
        if (typeof g != "function")
          throw new GC(b);
        return c = c == null ? 0 : tg(tI(c), 0), iI(function(e) {
          var n = e[c], a = hA(e, 0, c);
          return n && rA(a, n), Dg(g, this, a);
        });
      }
      function $o(g, c, e) {
        var n = !0, a = !0;
        if (typeof g != "function")
          throw new GC(b);
        return UI(e) && (n = "leading" in e ? !!e.leading : n, a = "trailing" in e ? !!e.trailing : a), Pu(g, c, {
          leading: n,
          maxWait: c,
          trailing: a
        });
      }
      function qo(g) {
        return Mu(g, 1);
      }
      function Im(g, c) {
        return Yl(dl(c), g);
      }
      function gm() {
        if (!arguments.length)
          return [];
        var g = arguments[0];
        return AI(g) ? g : [g];
      }
      function Cm(g) {
        return dC(g, m);
      }
      function Am(g, c) {
        return c = typeof c == "function" ? c : C, dC(g, m, c);
      }
      function cm(g) {
        return dC(g, o | m);
      }
      function tm(g, c) {
        return c = typeof c == "function" ? c : C, dC(g, o | m, c);
      }
      function em(g, c) {
        return c == null || Jb(g, c, ng(c));
      }
      function fC(g, c) {
        return g === c || g !== g && c !== c;
      }
      var im = Re(Cl), lm = Re(function(g, c) {
        return g >= c;
      }), jA = jb(/* @__PURE__ */ function() {
        return arguments;
      }()) ? jb : function(g) {
        return OI(g) && fI.call(g, "callee") && !Yb.call(g, "callee");
      }, AI = B.isArray, nm = ub ? Eg(ub) : Xs;
      function zg(g) {
        return g != null && ve(g.length) && !tA(g);
      }
      function DI(g) {
        return OI(g) && zg(g);
      }
      function bm(g) {
        return g === !0 || g === !1 || OI(g) && vg(g) == PI;
      }
      var VA = RX || Ul, um = Gb ? Eg(Gb) : ss;
      function Gm(g) {
        return OI(g) && g.nodeType === 1 && !at(g);
      }
      function am(g) {
        if (g == null)
          return !0;
        if (zg(g) && (AI(g) || typeof g == "string" || typeof g.splice == "function" || VA(g) || sc(g) || jA(g)))
          return !g.length;
        var c = hg(g);
        if (c == _I || c == lg)
          return !g.size;
        if (ut(g))
          return !tl(g).length;
        for (var e in g)
          if (fI.call(g, e))
            return !1;
        return !0;
      }
      function dm(g, c) {
        return lt(g, c);
      }
      function rm(g, c, e) {
        e = typeof e == "function" ? e : C;
        var n = e ? e(g, c) : C;
        return n === C ? lt(g, c, C, e) : !!n;
      }
      function fl(g) {
        if (!OI(g))
          return !1;
        var c = vg(g);
        return c == iC || c == JC || typeof g.message == "string" && typeof g.name == "string" && !at(g);
      }
      function Xm(g) {
        return typeof g == "number" && vb(g);
      }
      function tA(g) {
        if (!UI(g))
          return !1;
        var c = vg(g);
        return c == E || c == BC || c == eC || c == GA;
      }
      function $u(g) {
        return typeof g == "number" && g == tI(g);
      }
      function ve(g) {
        return typeof g == "number" && g > -1 && g % 1 == 0 && g <= gg;
      }
      function UI(g) {
        var c = typeof g;
        return g != null && (c == "object" || c == "function");
      }
      function OI(g) {
        return g != null && typeof g == "object";
      }
      var qu = ab ? Eg(ab) : os;
      function sm(g, c) {
        return g === c || cl(g, c, hl(c));
      }
      function Zm(g, c, e) {
        return e = typeof e == "function" ? e : C, cl(g, c, hl(c), e);
      }
      function om(g) {
        return IG(g) && g != +g;
      }
      function mm(g) {
        if (CZ(g))
          throw new CI(l);
        return Mb(g);
      }
      function hm(g) {
        return g === null;
      }
      function Vm(g) {
        return g == null;
      }
      function IG(g) {
        return typeof g == "number" || OI(g) && vg(g) == Fg;
      }
      function at(g) {
        if (!OI(g) || vg(g) != Yg)
          return !1;
        var c = te(g);
        if (c === null)
          return !0;
        var e = fI.call(c, "constructor") && c.constructor;
        return typeof e == "function" && e instanceof e && ge.call(e) == sX;
      }
      var vl = db ? Eg(db) : ms;
      function Rm(g) {
        return $u(g) && g >= -gg && g <= gg;
      }
      var gG = rb ? Eg(rb) : hs;
      function He(g) {
        return typeof g == "string" || !AI(g) && OI(g) && vg(g) == lC;
      }
      function Qg(g) {
        return typeof g == "symbol" || OI(g) && vg(g) == _C;
      }
      var sc = Xb ? Eg(Xb) : Vs;
      function Wm(g) {
        return g === C;
      }
      function ym(g) {
        return OI(g) && hg(g) == xC;
      }
      function Bm(g) {
        return OI(g) && vg(g) == NA;
      }
      var xm = Re(el), pm = Re(function(g, c) {
        return g <= c;
      });
      function CG(g) {
        if (!g)
          return [];
        if (zg(g))
          return He(g) ? FC(g) : kg(g);
        if (It && g[It])
          return tX(g[It]());
        var c = hg(g), e = c == _I ? Ei : c == lg ? $t : Zc;
        return e(g);
      }
      function eA(g) {
        if (!g)
          return g === 0 ? g : 0;
        if (g = sC(g), g === SI || g === -SI) {
          var c = g < 0 ? -1 : 1;
          return c * Sg;
        }
        return g === g ? g : 0;
      }
      function tI(g) {
        var c = eA(g), e = c % 1;
        return c === c ? e ? c - e : c : 0;
      }
      function AG(g) {
        return g ? zA(tI(g), 0, Cg) : 0;
      }
      function sC(g) {
        if (typeof g == "number")
          return g;
        if (Qg(g))
          return xg;
        if (UI(g)) {
          var c = typeof g.valueOf == "function" ? g.valueOf() : g;
          g = UI(c) ? c + "" : c;
        }
        if (typeof g != "string")
          return g === 0 ? g : +g;
        g = Vb(g);
        var e = bI.test(g);
        return e || ag.test(g) ? Tr(g.slice(2), e ? 2 : 8) : YI.test(g) ? xg : +g;
      }
      function cG(g) {
        return UC(g, Ug(g));
      }
      function Fm(g) {
        return g ? zA(tI(g), -gg, gg) : g === 0 ? g : 0;
      }
      function BI(g) {
        return g == null ? "" : Kg(g);
      }
      var Ym = dc(function(g, c) {
        if (ut(c) || zg(c)) {
          UC(c, ng(c), g);
          return;
        }
        for (var e in c)
          fI.call(c, e) && tt(g, e, c[e]);
      }), tG = dc(function(g, c) {
        UC(c, Ug(c), g);
      }), Ne = dc(function(g, c, e, n) {
        UC(c, Ug(c), g, n);
      }), fm = dc(function(g, c, e, n) {
        UC(c, ng(c), g, n);
      }), vm = AA(qi);
      function Hm(g, c) {
        var e = ac(g);
        return c == null ? e : Sb(e, c);
      }
      var Nm = iI(function(g, c) {
        g = vI(g);
        var e = -1, n = c.length, a = n > 2 ? c[2] : C;
        for (a && Hg(c[0], c[1], a) && (n = 1); ++e < n; )
          for (var r = c[e], Z = Ug(r), V = -1, y = Z.length; ++V < y; ) {
            var v = Z[V], N = g[v];
            (N === C || fC(N, bc[v]) && !fI.call(g, v)) && (g[v] = r[v]);
          }
        return g;
      }), wm = iI(function(g) {
        return g.push(C, Vu), Dg(eG, C, g);
      });
      function Lm(g, c) {
        return Zb(g, P(c, 3), zC);
      }
      function Sm(g, c) {
        return Zb(g, P(c, 3), gl);
      }
      function Jm(g, c) {
        return g == null ? g : Il(g, P(c, 3), Ug);
      }
      function km(g, c) {
        return g == null ? g : Tb(g, P(c, 3), Ug);
      }
      function zm(g, c) {
        return g && zC(g, P(c, 3));
      }
      function Um(g, c) {
        return g && gl(g, P(c, 3));
      }
      function Tm(g) {
        return g == null ? [] : re(g, ng(g));
      }
      function Om(g) {
        return g == null ? [] : re(g, Ug(g));
      }
      function Hl(g, c, e) {
        var n = g == null ? C : UA(g, c);
        return n === C ? e : n;
      }
      function jm(g, c) {
        return g != null && yu(g, c, Gs);
      }
      function Nl(g, c) {
        return g != null && yu(g, c, as);
      }
      var Mm = su(function(g, c, e) {
        c != null && typeof c.toString != "function" && (c = Ce.call(c)), g[c] = e;
      }, Ll(Tg)), Dm = su(function(g, c, e) {
        c != null && typeof c.toString != "function" && (c = Ce.call(c)), fI.call(g, c) ? g[c].push(e) : g[c] = [e];
      }, P), Em = iI(it);
      function ng(g) {
        return zg(g) ? wb(g) : tl(g);
      }
      function Ug(g) {
        return zg(g) ? wb(g, !0) : Rs(g);
      }
      function Km(g, c) {
        var e = {};
        return c = P(c, 3), zC(g, function(n, a, r) {
          gA(e, c(n, a, r), n);
        }), e;
      }
      function Qm(g, c) {
        var e = {};
        return c = P(c, 3), zC(g, function(n, a, r) {
          gA(e, a, c(n, a, r));
        }), e;
      }
      var Pm = dc(function(g, c, e) {
        Xe(g, c, e);
      }), eG = dc(function(g, c, e, n) {
        Xe(g, c, e, n);
      }), _m = AA(function(g, c) {
        var e = {};
        if (g == null)
          return e;
        var n = !1;
        c = JI(c, function(r) {
          return r = mA(r, g), n || (n = r.length > 1), r;
        }), UC(g, ol(g), e), n && (e = dC(e, o | R | m, js));
        for (var a = c.length; a--; )
          ul(e, c[a]);
        return e;
      });
      function $m(g, c) {
        return iG(g, fe(P(c)));
      }
      var qm = AA(function(g, c) {
        return g == null ? {} : ys(g, c);
      });
      function iG(g, c) {
        if (g == null)
          return {};
        var e = JI(ol(g), function(n) {
          return [n];
        });
        return c = P(c), $b(g, e, function(n, a) {
          return c(n, a[0]);
        });
      }
      function Ih(g, c, e) {
        c = mA(c, g);
        var n = -1, a = c.length;
        for (a || (a = 1, g = C); ++n < a; ) {
          var r = g == null ? C : g[TC(c[n])];
          r === C && (n = a, r = e), g = tA(r) ? r.call(g) : r;
        }
        return g;
      }
      function gh(g, c, e) {
        return g == null ? g : nt(g, c, e);
      }
      function Ch(g, c, e, n) {
        return n = typeof n == "function" ? n : C, g == null ? g : nt(g, c, e, n);
      }
      var lG = mu(ng), nG = mu(Ug);
      function Ah(g, c, e) {
        var n = AI(g), a = n || VA(g) || sc(g);
        if (c = P(c, 4), e == null) {
          var r = g && g.constructor;
          a ? e = n ? new r() : [] : UI(g) ? e = tA(r) ? ac(te(g)) : {} : e = {};
        }
        return (a ? uC : zC)(g, function(Z, V, y) {
          return c(e, Z, V, y);
        }), e;
      }
      function ch(g, c) {
        return g == null ? !0 : ul(g, c);
      }
      function th(g, c, e) {
        return g == null ? g : Au(g, c, dl(e));
      }
      function eh(g, c, e, n) {
        return n = typeof n == "function" ? n : C, g == null ? g : Au(g, c, dl(e), n);
      }
      function Zc(g) {
        return g == null ? [] : Di(g, ng(g));
      }
      function ih(g) {
        return g == null ? [] : Di(g, Ug(g));
      }
      function lh(g, c, e) {
        return e === C && (e = c, c = C), e !== C && (e = sC(e), e = e === e ? e : 0), c !== C && (c = sC(c), c = c === c ? c : 0), zA(sC(g), c, e);
      }
      function nh(g, c, e) {
        return c = eA(c), e === C ? (e = c, c = 0) : e = eA(e), g = sC(g), ds(g, c, e);
      }
      function bh(g, c, e) {
        if (e && typeof e != "boolean" && Hg(g, c, e) && (c = e = C), e === C && (typeof c == "boolean" ? (e = c, c = C) : typeof g == "boolean" && (e = g, g = C)), g === C && c === C ? (g = 0, c = 1) : (g = eA(g), c === C ? (c = g, g = 0) : c = eA(c)), g > c) {
          var n = g;
          g = c, c = n;
        }
        if (e || g % 1 || c % 1) {
          var a = Hb();
          return mg(g + a * (c - g + Ur("1e-" + ((a + "").length - 1))), c);
        }
        return ll(g, c);
      }
      var uh = rc(function(g, c, e) {
        return c = c.toLowerCase(), g + (e ? bG(c) : c);
      });
      function bG(g) {
        return wl(BI(g).toLowerCase());
      }
      function uG(g) {
        return g = BI(g), g && g.replace(TI, IX).replace(fr, "");
      }
      function Gh(g, c, e) {
        g = BI(g), c = Kg(c);
        var n = g.length;
        e = e === C ? n : zA(tI(e), 0, n);
        var a = e;
        return e -= c.length, e >= 0 && g.slice(e, a) == c;
      }
      function ah(g) {
        return g = BI(g), g && Tt.test(g) ? g.replace(Ac, gX) : g;
      }
      function dh(g) {
        return g = BI(g), g && Et.test(g) ? g.replace(_c, "\\$&") : g;
      }
      var rh = rc(function(g, c, e) {
        return g + (e ? "-" : "") + c.toLowerCase();
      }), Xh = rc(function(g, c, e) {
        return g + (e ? " " : "") + c.toLowerCase();
      }), sh = du("toLowerCase");
      function Zh(g, c, e) {
        g = BI(g), c = tI(c);
        var n = c ? lc(g) : 0;
        if (!c || n >= c)
          return g;
        var a = (c - n) / 2;
        return Ve(ne(a), e) + g + Ve(le(a), e);
      }
      function oh(g, c, e) {
        g = BI(g), c = tI(c);
        var n = c ? lc(g) : 0;
        return c && n < c ? g + Ve(c - n, e) : g;
      }
      function mh(g, c, e) {
        g = BI(g), c = tI(c);
        var n = c ? lc(g) : 0;
        return c && n < c ? Ve(c - n, e) + g : g;
      }
      function hh(g, c, e) {
        return e || c == null ? c = 0 : c && (c = +c), xX(BI(g).replace(cc, ""), c || 0);
      }
      function Vh(g, c, e) {
        return (e ? Hg(g, c, e) : c === C) ? c = 1 : c = tI(c), nl(BI(g), c);
      }
      function Rh() {
        var g = arguments, c = BI(g[0]);
        return g.length < 3 ? c : c.replace(g[1], g[2]);
      }
      var Wh = rc(function(g, c, e) {
        return g + (e ? "_" : "") + c.toLowerCase();
      });
      function yh(g, c, e) {
        return e && typeof e != "number" && Hg(g, c, e) && (c = e = C), e = e === C ? Cg : e >>> 0, e ? (g = BI(g), g && (typeof c == "string" || c != null && !vl(c)) && (c = Kg(c), !c && ic(g)) ? hA(FC(g), 0, e) : g.split(c, e)) : [];
      }
      var Bh = rc(function(g, c, e) {
        return g + (e ? " " : "") + wl(c);
      });
      function xh(g, c, e) {
        return g = BI(g), e = e == null ? 0 : zA(tI(e), 0, g.length), c = Kg(c), g.slice(e, e + c.length) == c;
      }
      function ph(g, c, e) {
        var n = d.templateSettings;
        e && Hg(g, c, e) && (c = C), g = BI(g), c = Ne({}, c, n, hu);
        var a = Ne({}, c.imports, n.imports, hu), r = ng(a), Z = Di(a, r), V, y, v = 0, N = c.interpolate || dg, w = "__p += '", U = Ki(
          (c.escape || dg).source + "|" + N.source + "|" + (N === jt ? q : dg).source + "|" + (c.evaluate || dg).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (fI.call(c, "sourceURL") ? (c.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Lr + "]") + `
`;
        g.replace(U, function($, nI, GI, Pg, Ng, _g) {
          return GI || (GI = Pg), w += g.slice(v, _g).replace(aA, CX), nI && (V = !0, w += `' +
__e(` + nI + `) +
'`), Ng && (y = !0, w += `';
` + Ng + `;
__p += '`), GI && (w += `' +
((__t = (` + GI + `)) == null ? '' : __t) +
'`), v = _g + $.length, $;
        }), w += `';
`;
        var _ = fI.call(c, "variable") && c.variable;
        if (!_)
          w = `with (obj) {
` + w + `
}
`;
        else if (L.test(_))
          throw new CI(u);
        w = (y ? w.replace(Wi, "") : w).replace(Qc, "$1").replace(Ut, "$1;"), w = "function(" + (_ || "obj") + `) {
` + (_ ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + w + `return __p
}`;
        var eI = aG(function() {
          return hI(r, K + "return " + w).apply(C, Z);
        });
        if (eI.source = w, fl(eI))
          throw eI;
        return eI;
      }
      function Fh(g) {
        return BI(g).toLowerCase();
      }
      function Yh(g) {
        return BI(g).toUpperCase();
      }
      function fh(g, c, e) {
        if (g = BI(g), g && (e || c === C))
          return Vb(g);
        if (!g || !(c = Kg(c)))
          return g;
        var n = FC(g), a = FC(c), r = Rb(n, a), Z = Wb(n, a) + 1;
        return hA(n, r, Z).join("");
      }
      function vh(g, c, e) {
        if (g = BI(g), g && (e || c === C))
          return g.slice(0, Bb(g) + 1);
        if (!g || !(c = Kg(c)))
          return g;
        var n = FC(g), a = Wb(n, FC(c)) + 1;
        return hA(n, 0, a).join("");
      }
      function Hh(g, c, e) {
        if (g = BI(g), g && (e || c === C))
          return g.replace(cc, "");
        if (!g || !(c = Kg(c)))
          return g;
        var n = FC(g), a = Rb(n, FC(c));
        return hA(n, a).join("");
      }
      function Nh(g, c) {
        var e = mI, n = LI;
        if (UI(c)) {
          var a = "separator" in c ? c.separator : a;
          e = "length" in c ? tI(c.length) : e, n = "omission" in c ? Kg(c.omission) : n;
        }
        g = BI(g);
        var r = g.length;
        if (ic(g)) {
          var Z = FC(g);
          r = Z.length;
        }
        if (e >= r)
          return g;
        var V = e - lc(n);
        if (V < 1)
          return n;
        var y = Z ? hA(Z, 0, V).join("") : g.slice(0, V);
        if (a === C)
          return y + n;
        if (Z && (V += y.length - V), vl(a)) {
          if (g.slice(V).search(a)) {
            var v, N = y;
            for (a.global || (a = Ki(a.source, BI(rI.exec(a)) + "g")), a.lastIndex = 0; v = a.exec(N); )
              var w = v.index;
            y = y.slice(0, w === C ? V : w);
          }
        } else if (g.indexOf(Kg(a), V) != V) {
          var U = y.lastIndexOf(a);
          U > -1 && (y = y.slice(0, U));
        }
        return y + n;
      }
      function wh(g) {
        return g = BI(g), g && Pc.test(g) ? g.replace($C, nX) : g;
      }
      var Lh = rc(function(g, c, e) {
        return g + (e ? " " : "") + c.toUpperCase();
      }), wl = du("toUpperCase");
      function GG(g, c, e) {
        return g = BI(g), c = e ? C : c, c === C ? cX(g) ? GX(g) : Qr(g) : g.match(c) || [];
      }
      var aG = iI(function(g, c) {
        try {
          return Dg(g, C, c);
        } catch (e) {
          return fl(e) ? e : new CI(e);
        }
      }), Sh = AA(function(g, c) {
        return uC(c, function(e) {
          e = TC(e), gA(g, e, Fl(g[e], g));
        }), g;
      });
      function Jh(g) {
        var c = g == null ? 0 : g.length, e = P();
        return g = c ? JI(g, function(n) {
          if (typeof n[1] != "function")
            throw new GC(b);
          return [e(n[0]), n[1]];
        }) : [], iI(function(n) {
          for (var a = -1; ++a < c; ) {
            var r = g[a];
            if (Dg(r[0], this, n))
              return Dg(r[1], this, n);
          }
        });
      }
      function kh(g) {
        return ns(dC(g, o));
      }
      function Ll(g) {
        return function() {
          return g;
        };
      }
      function zh(g, c) {
        return g == null || g !== g ? c : g;
      }
      var Uh = Xu(), Th = Xu(!0);
      function Tg(g) {
        return g;
      }
      function Sl(g) {
        return Db(typeof g == "function" ? g : dC(g, o));
      }
      function Oh(g) {
        return Kb(dC(g, o));
      }
      function jh(g, c) {
        return Qb(g, dC(c, o));
      }
      var Mh = iI(function(g, c) {
        return function(e) {
          return it(e, g, c);
        };
      }), Dh = iI(function(g, c) {
        return function(e) {
          return it(g, e, c);
        };
      });
      function Jl(g, c, e) {
        var n = ng(c), a = re(c, n);
        e == null && !(UI(c) && (a.length || !n.length)) && (e = c, c = g, g = this, a = re(c, ng(c)));
        var r = !(UI(e) && "chain" in e) || !!e.chain, Z = tA(g);
        return uC(a, function(V) {
          var y = c[V];
          g[V] = y, Z && (g.prototype[V] = function() {
            var v = this.__chain__;
            if (r || v) {
              var N = g(this.__wrapped__), w = N.__actions__ = kg(this.__actions__);
              return w.push({ func: y, args: arguments, thisArg: g }), N.__chain__ = v, N;
            }
            return y.apply(g, rA([this.value()], arguments));
          });
        }), g;
      }
      function Eh() {
        return rg._ === this && (rg._ = ZX), this;
      }
      function kl() {
      }
      function Kh(g) {
        return g = tI(g), iI(function(c) {
          return Pb(c, g);
        });
      }
      var Qh = Xl(JI), Ph = Xl(sb), _h = Xl(Ui);
      function dG(g) {
        return Rl(g) ? Ti(TC(g)) : Bs(g);
      }
      function $h(g) {
        return function(c) {
          return g == null ? C : UA(g, c);
        };
      }
      var qh = Zu(), I0 = Zu(!0);
      function zl() {
        return [];
      }
      function Ul() {
        return !1;
      }
      function g0() {
        return {};
      }
      function C0() {
        return "";
      }
      function A0() {
        return !0;
      }
      function c0(g, c) {
        if (g = tI(g), g < 1 || g > gg)
          return [];
        var e = Cg, n = mg(g, Cg);
        c = P(c), g -= Cg;
        for (var a = Mi(n, c); ++e < g; )
          c(e);
        return a;
      }
      function t0(g) {
        return AI(g) ? JI(g, TC) : Qg(g) ? [g] : kg(Nu(BI(g)));
      }
      function e0(g) {
        var c = ++XX;
        return BI(g) + c;
      }
      var i0 = he(function(g, c) {
        return g + c;
      }, 0), l0 = sl("ceil"), n0 = he(function(g, c) {
        return g / c;
      }, 1), b0 = sl("floor");
      function u0(g) {
        return g && g.length ? de(g, Tg, Cl) : C;
      }
      function G0(g, c) {
        return g && g.length ? de(g, P(c, 2), Cl) : C;
      }
      function a0(g) {
        return mb(g, Tg);
      }
      function d0(g, c) {
        return mb(g, P(c, 2));
      }
      function r0(g) {
        return g && g.length ? de(g, Tg, el) : C;
      }
      function X0(g, c) {
        return g && g.length ? de(g, P(c, 2), el) : C;
      }
      var s0 = he(function(g, c) {
        return g * c;
      }, 1), Z0 = sl("round"), o0 = he(function(g, c) {
        return g - c;
      }, 0);
      function m0(g) {
        return g && g.length ? ji(g, Tg) : 0;
      }
      function h0(g, c) {
        return g && g.length ? ji(g, P(c, 2)) : 0;
      }
      return d.after = Oo, d.ary = Mu, d.assign = Ym, d.assignIn = tG, d.assignInWith = Ne, d.assignWith = fm, d.at = vm, d.before = Du, d.bind = Fl, d.bindAll = Sh, d.bindKey = Eu, d.castArray = gm, d.chain = Tu, d.chunk = nZ, d.compact = bZ, d.concat = uZ, d.cond = Jh, d.conforms = kh, d.constant = Ll, d.countBy = mo, d.create = Hm, d.curry = Ku, d.curryRight = Qu, d.debounce = Pu, d.defaults = Nm, d.defaultsDeep = wm, d.defer = jo, d.delay = Mo, d.difference = GZ, d.differenceBy = aZ, d.differenceWith = dZ, d.drop = rZ, d.dropRight = XZ, d.dropRightWhile = sZ, d.dropWhile = ZZ, d.fill = oZ, d.filter = Vo, d.flatMap = yo, d.flatMapDeep = Bo, d.flatMapDepth = xo, d.flatten = Ju, d.flattenDeep = mZ, d.flattenDepth = hZ, d.flip = Do, d.flow = Uh, d.flowRight = Th, d.fromPairs = VZ, d.functions = Tm, d.functionsIn = Om, d.groupBy = po, d.initial = WZ, d.intersection = yZ, d.intersectionBy = BZ, d.intersectionWith = xZ, d.invert = Mm, d.invertBy = Dm, d.invokeMap = Yo, d.iteratee = Sl, d.keyBy = fo, d.keys = ng, d.keysIn = Ug, d.map = pe, d.mapKeys = Km, d.mapValues = Qm, d.matches = Oh, d.matchesProperty = jh, d.memoize = Ye, d.merge = Pm, d.mergeWith = eG, d.method = Mh, d.methodOf = Dh, d.mixin = Jl, d.negate = fe, d.nthArg = Kh, d.omit = _m, d.omitBy = $m, d.once = Eo, d.orderBy = vo, d.over = Qh, d.overArgs = Ko, d.overEvery = Ph, d.overSome = _h, d.partial = Yl, d.partialRight = _u, d.partition = Ho, d.pick = qm, d.pickBy = iG, d.property = dG, d.propertyOf = $h, d.pull = fZ, d.pullAll = zu, d.pullAllBy = vZ, d.pullAllWith = HZ, d.pullAt = NZ, d.range = qh, d.rangeRight = I0, d.rearg = Qo, d.reject = Lo, d.remove = wZ, d.rest = Po, d.reverse = xl, d.sampleSize = Jo, d.set = gh, d.setWith = Ch, d.shuffle = ko, d.slice = LZ, d.sortBy = To, d.sortedUniq = OZ, d.sortedUniqBy = jZ, d.split = yh, d.spread = _o, d.tail = MZ, d.take = DZ, d.takeRight = EZ, d.takeRightWhile = KZ, d.takeWhile = QZ, d.tap = bo, d.throttle = $o, d.thru = xe, d.toArray = CG, d.toPairs = lG, d.toPairsIn = nG, d.toPath = t0, d.toPlainObject = cG, d.transform = Ah, d.unary = qo, d.union = PZ, d.unionBy = _Z, d.unionWith = $Z, d.uniq = qZ, d.uniqBy = Io, d.uniqWith = go, d.unset = ch, d.unzip = pl, d.unzipWith = Uu, d.update = th, d.updateWith = eh, d.values = Zc, d.valuesIn = ih, d.without = Co, d.words = GG, d.wrap = Im, d.xor = Ao, d.xorBy = co, d.xorWith = to, d.zip = eo, d.zipObject = io, d.zipObjectDeep = lo, d.zipWith = no, d.entries = lG, d.entriesIn = nG, d.extend = tG, d.extendWith = Ne, Jl(d, d), d.add = i0, d.attempt = aG, d.camelCase = uh, d.capitalize = bG, d.ceil = l0, d.clamp = lh, d.clone = Cm, d.cloneDeep = cm, d.cloneDeepWith = tm, d.cloneWith = Am, d.conformsTo = em, d.deburr = uG, d.defaultTo = zh, d.divide = n0, d.endsWith = Gh, d.eq = fC, d.escape = ah, d.escapeRegExp = dh, d.every = ho, d.find = Ro, d.findIndex = Lu, d.findKey = Lm, d.findLast = Wo, d.findLastIndex = Su, d.findLastKey = Sm, d.floor = b0, d.forEach = Ou, d.forEachRight = ju, d.forIn = Jm, d.forInRight = km, d.forOwn = zm, d.forOwnRight = Um, d.get = Hl, d.gt = im, d.gte = lm, d.has = jm, d.hasIn = Nl, d.head = ku, d.identity = Tg, d.includes = Fo, d.indexOf = RZ, d.inRange = nh, d.invoke = Em, d.isArguments = jA, d.isArray = AI, d.isArrayBuffer = nm, d.isArrayLike = zg, d.isArrayLikeObject = DI, d.isBoolean = bm, d.isBuffer = VA, d.isDate = um, d.isElement = Gm, d.isEmpty = am, d.isEqual = dm, d.isEqualWith = rm, d.isError = fl, d.isFinite = Xm, d.isFunction = tA, d.isInteger = $u, d.isLength = ve, d.isMap = qu, d.isMatch = sm, d.isMatchWith = Zm, d.isNaN = om, d.isNative = mm, d.isNil = Vm, d.isNull = hm, d.isNumber = IG, d.isObject = UI, d.isObjectLike = OI, d.isPlainObject = at, d.isRegExp = vl, d.isSafeInteger = Rm, d.isSet = gG, d.isString = He, d.isSymbol = Qg, d.isTypedArray = sc, d.isUndefined = Wm, d.isWeakMap = ym, d.isWeakSet = Bm, d.join = pZ, d.kebabCase = rh, d.last = XC, d.lastIndexOf = FZ, d.lowerCase = Xh, d.lowerFirst = sh, d.lt = xm, d.lte = pm, d.max = u0, d.maxBy = G0, d.mean = a0, d.meanBy = d0, d.min = r0, d.minBy = X0, d.stubArray = zl, d.stubFalse = Ul, d.stubObject = g0, d.stubString = C0, d.stubTrue = A0, d.multiply = s0, d.nth = YZ, d.noConflict = Eh, d.noop = kl, d.now = Fe, d.pad = Zh, d.padEnd = oh, d.padStart = mh, d.parseInt = hh, d.random = bh, d.reduce = No, d.reduceRight = wo, d.repeat = Vh, d.replace = Rh, d.result = Ih, d.round = Z0, d.runInContext = W, d.sample = So, d.size = zo, d.snakeCase = Wh, d.some = Uo, d.sortedIndex = SZ, d.sortedIndexBy = JZ, d.sortedIndexOf = kZ, d.sortedLastIndex = zZ, d.sortedLastIndexBy = UZ, d.sortedLastIndexOf = TZ, d.startCase = Bh, d.startsWith = xh, d.subtract = o0, d.sum = m0, d.sumBy = h0, d.template = ph, d.times = c0, d.toFinite = eA, d.toInteger = tI, d.toLength = AG, d.toLower = Fh, d.toNumber = sC, d.toSafeInteger = Fm, d.toString = BI, d.toUpper = Yh, d.trim = fh, d.trimEnd = vh, d.trimStart = Hh, d.truncate = Nh, d.unescape = wh, d.uniqueId = e0, d.upperCase = Lh, d.upperFirst = wl, d.each = Ou, d.eachRight = ju, d.first = ku, Jl(d, function() {
        var g = {};
        return zC(d, function(c, e) {
          fI.call(d.prototype, e) || (g[e] = c);
        }), g;
      }(), { chain: !1 }), d.VERSION = t, uC(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(g) {
        d[g].placeholder = d;
      }), uC(["drop", "take"], function(g, c) {
        uI.prototype[g] = function(e) {
          e = e === C ? 1 : tg(tI(e), 0);
          var n = this.__filtered__ && !c ? new uI(this) : this.clone();
          return n.__filtered__ ? n.__takeCount__ = mg(e, n.__takeCount__) : n.__views__.push({
            size: mg(e, Cg),
            type: g + (n.__dir__ < 0 ? "Right" : "")
          }), n;
        }, uI.prototype[g + "Right"] = function(e) {
          return this.reverse()[g](e).reverse();
        };
      }), uC(["filter", "map", "takeWhile"], function(g, c) {
        var e = c + 1, n = e == KI || e == QI;
        uI.prototype[g] = function(a) {
          var r = this.clone();
          return r.__iteratees__.push({
            iteratee: P(a, 3),
            type: e
          }), r.__filtered__ = r.__filtered__ || n, r;
        };
      }), uC(["head", "last"], function(g, c) {
        var e = "take" + (c ? "Right" : "");
        uI.prototype[g] = function() {
          return this[e](1).value()[0];
        };
      }), uC(["initial", "tail"], function(g, c) {
        var e = "drop" + (c ? "" : "Right");
        uI.prototype[g] = function() {
          return this.__filtered__ ? new uI(this) : this[e](1);
        };
      }), uI.prototype.compact = function() {
        return this.filter(Tg);
      }, uI.prototype.find = function(g) {
        return this.filter(g).head();
      }, uI.prototype.findLast = function(g) {
        return this.reverse().find(g);
      }, uI.prototype.invokeMap = iI(function(g, c) {
        return typeof g == "function" ? new uI(this) : this.map(function(e) {
          return it(e, g, c);
        });
      }), uI.prototype.reject = function(g) {
        return this.filter(fe(P(g)));
      }, uI.prototype.slice = function(g, c) {
        g = tI(g);
        var e = this;
        return e.__filtered__ && (g > 0 || c < 0) ? new uI(e) : (g < 0 ? e = e.takeRight(-g) : g && (e = e.drop(g)), c !== C && (c = tI(c), e = c < 0 ? e.dropRight(-c) : e.take(c - g)), e);
      }, uI.prototype.takeRightWhile = function(g) {
        return this.reverse().takeWhile(g).reverse();
      }, uI.prototype.toArray = function() {
        return this.take(Cg);
      }, zC(uI.prototype, function(g, c) {
        var e = /^(?:filter|find|map|reject)|While$/.test(c), n = /^(?:head|last)$/.test(c), a = d[n ? "take" + (c == "last" ? "Right" : "") : c], r = n || /^find/.test(c);
        a && (d.prototype[c] = function() {
          var Z = this.__wrapped__, V = n ? [1] : arguments, y = Z instanceof uI, v = V[0], N = y || AI(Z), w = function(nI) {
            var GI = a.apply(d, rA([nI], V));
            return n && U ? GI[0] : GI;
          };
          N && e && typeof v == "function" && v.length != 1 && (y = N = !1);
          var U = this.__chain__, K = !!this.__actions__.length, _ = r && !U, eI = y && !K;
          if (!r && N) {
            Z = eI ? Z : new uI(this);
            var $ = g.apply(Z, V);
            return $.__actions__.push({ func: xe, args: [w], thisArg: C }), new aC($, U);
          }
          return _ && eI ? g.apply(this, V) : ($ = this.thru(w), _ ? n ? $.value()[0] : $.value() : $);
        });
      }), uC(["pop", "push", "shift", "sort", "splice", "unshift"], function(g) {
        var c = qt[g], e = /^(?:push|sort|unshift)$/.test(g) ? "tap" : "thru", n = /^(?:pop|shift)$/.test(g);
        d.prototype[g] = function() {
          var a = arguments;
          if (n && !this.__chain__) {
            var r = this.value();
            return c.apply(AI(r) ? r : [], a);
          }
          return this[e](function(Z) {
            return c.apply(AI(Z) ? Z : [], a);
          });
        };
      }), zC(uI.prototype, function(g, c) {
        var e = d[c];
        if (e) {
          var n = e.name + "";
          fI.call(Gc, n) || (Gc[n] = []), Gc[n].push({ name: c, func: e });
        }
      }), Gc[me(C, H).name] = [{
        name: "wrapper",
        func: C
      }], uI.prototype.clone = NX, uI.prototype.reverse = wX, uI.prototype.value = LX, d.prototype.at = uo, d.prototype.chain = Go, d.prototype.commit = ao, d.prototype.next = ro, d.prototype.plant = so, d.prototype.reverse = Zo, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = oo, d.prototype.first = d.prototype.head, It && (d.prototype[It] = Xo), d;
    }, nc = aX();
    LA ? ((LA.exports = nc)._ = nc, Si._ = nc) : rg._ = nc;
  }).call(QA);
})(gi, gi.exports);
var pV = gi.exports;
const $g = /* @__PURE__ */ ui(pV);
class Ic extends Error {
}
class FV extends Ic {
  constructor(I) {
    super(`Invalid DateTime: ${I.toMessage()}`);
  }
}
class YV extends Ic {
  constructor(I) {
    super(`Invalid Interval: ${I.toMessage()}`);
  }
}
class fV extends Ic {
  constructor(I) {
    super(`Invalid Duration: ${I.toMessage()}`);
  }
}
class Wc extends Ic {
}
class Ma extends Ic {
  constructor(I) {
    super(`Invalid unit ${I}`);
  }
}
class Rg extends Ic {
}
class RA extends Ic {
  constructor() {
    super("Zone is an abstract class");
  }
}
const T = "numeric", SC = "short", gC = "long", Ci = {
  year: T,
  month: T,
  day: T
}, Da = {
  year: T,
  month: SC,
  day: T
}, vV = {
  year: T,
  month: SC,
  day: T,
  weekday: SC
}, Ea = {
  year: T,
  month: gC,
  day: T
}, Ka = {
  year: T,
  month: gC,
  day: T,
  weekday: gC
}, Qa = {
  hour: T,
  minute: T
}, Pa = {
  hour: T,
  minute: T,
  second: T
}, _a = {
  hour: T,
  minute: T,
  second: T,
  timeZoneName: SC
}, $a = {
  hour: T,
  minute: T,
  second: T,
  timeZoneName: gC
}, qa = {
  hour: T,
  minute: T,
  hourCycle: "h23"
}, Id = {
  hour: T,
  minute: T,
  second: T,
  hourCycle: "h23"
}, gd = {
  hour: T,
  minute: T,
  second: T,
  hourCycle: "h23",
  timeZoneName: SC
}, Cd = {
  hour: T,
  minute: T,
  second: T,
  hourCycle: "h23",
  timeZoneName: gC
}, Ad = {
  year: T,
  month: T,
  day: T,
  hour: T,
  minute: T
}, cd = {
  year: T,
  month: T,
  day: T,
  hour: T,
  minute: T,
  second: T
}, td = {
  year: T,
  month: SC,
  day: T,
  hour: T,
  minute: T
}, ed = {
  year: T,
  month: SC,
  day: T,
  hour: T,
  minute: T,
  second: T
}, HV = {
  year: T,
  month: SC,
  day: T,
  weekday: SC,
  hour: T,
  minute: T
}, id = {
  year: T,
  month: gC,
  day: T,
  hour: T,
  minute: T,
  timeZoneName: SC
}, ld = {
  year: T,
  month: gC,
  day: T,
  hour: T,
  minute: T,
  second: T,
  timeZoneName: SC
}, nd = {
  year: T,
  month: gC,
  day: T,
  weekday: gC,
  hour: T,
  minute: T,
  timeZoneName: gC
}, bd = {
  year: T,
  month: gC,
  day: T,
  weekday: gC,
  hour: T,
  minute: T,
  second: T,
  timeZoneName: gC
};
class Nt {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new RA();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new RA();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new RA();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(I, C) {
    throw new RA();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(I, C) {
    throw new RA();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(I) {
    throw new RA();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(I) {
    throw new RA();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new RA();
  }
}
let jl = null;
class Xi extends Nt {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return jl === null && (jl = new Xi()), jl;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(I, { format: C, locale: t }) {
    return od(I, C, t);
  }
  /** @override **/
  formatOffset(I, C) {
    return Vt(this.offset(I), C);
  }
  /** @override **/
  offset(I) {
    return -new Date(I).getTimezoneOffset();
  }
  /** @override **/
  equals(I) {
    return I.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Ee = {};
function NV(A) {
  return Ee[A] || (Ee[A] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: A,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Ee[A];
}
const wV = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function LV(A, I) {
  const C = A.format(I).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(C), [, i, l, b, u, G, X, s] = t;
  return [b, i, l, u, G, X, s];
}
function SV(A, I) {
  const C = A.formatToParts(I), t = [];
  for (let i = 0; i < C.length; i++) {
    const { type: l, value: b } = C[i], u = wV[l];
    l === "era" ? t[u] = b : gI(u) || (t[u] = parseInt(b, 10));
  }
  return t;
}
let Le = {};
class nA extends Nt {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(I) {
    return Le[I] || (Le[I] = new nA(I)), Le[I];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Le = {}, Ee = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(I) {
    return this.isValidZone(I);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(I) {
    if (!I)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: I }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(I) {
    super(), this.zoneName = I, this.valid = nA.isValidZone(I);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(I, { format: C, locale: t }) {
    return od(I, C, t, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(I, C) {
    return Vt(this.offset(I), C);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(I) {
    const C = new Date(I);
    if (isNaN(C)) return NaN;
    const t = NV(this.name);
    let [i, l, b, u, G, X, s] = t.formatToParts ? SV(t, C) : LV(t, C);
    u === "BC" && (i = -Math.abs(i) + 1);
    const R = Zi({
      year: i,
      month: l,
      day: b,
      hour: G === 24 ? 0 : G,
      minute: X,
      second: s,
      millisecond: 0
    });
    let m = +C;
    const F = m % 1e3;
    return m -= F >= 0 ? F : 1e3 + F, (R - m) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(I) {
    return I.type === "iana" && I.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}
let BG = {};
function JV(A, I = {}) {
  const C = JSON.stringify([A, I]);
  let t = BG[C];
  return t || (t = new Intl.ListFormat(A, I), BG[C] = t), t;
}
let tn = {};
function en(A, I = {}) {
  const C = JSON.stringify([A, I]);
  let t = tn[C];
  return t || (t = new Intl.DateTimeFormat(A, I), tn[C] = t), t;
}
let ln = {};
function kV(A, I = {}) {
  const C = JSON.stringify([A, I]);
  let t = ln[C];
  return t || (t = new Intl.NumberFormat(A, I), ln[C] = t), t;
}
let nn = {};
function zV(A, I = {}) {
  const { base: C, ...t } = I, i = JSON.stringify([A, t]);
  let l = nn[i];
  return l || (l = new Intl.RelativeTimeFormat(A, I), nn[i] = l), l;
}
let ot = null;
function UV() {
  return ot || (ot = new Intl.DateTimeFormat().resolvedOptions().locale, ot);
}
let xG = {};
function TV(A) {
  let I = xG[A];
  if (!I) {
    const C = new Intl.Locale(A);
    I = "getWeekInfo" in C ? C.getWeekInfo() : C.weekInfo, xG[A] = I;
  }
  return I;
}
function OV(A) {
  const I = A.indexOf("-x-");
  I !== -1 && (A = A.substring(0, I));
  const C = A.indexOf("-u-");
  if (C === -1)
    return [A];
  {
    let t, i;
    try {
      t = en(A).resolvedOptions(), i = A;
    } catch {
      const G = A.substring(0, C);
      t = en(G).resolvedOptions(), i = G;
    }
    const { numberingSystem: l, calendar: b } = t;
    return [i, l, b];
  }
}
function jV(A, I, C) {
  return (C || I) && (A.includes("-u-") || (A += "-u"), C && (A += `-ca-${C}`), I && (A += `-nu-${I}`)), A;
}
function MV(A) {
  const I = [];
  for (let C = 1; C <= 12; C++) {
    const t = cI.utc(2009, C, 1);
    I.push(A(t));
  }
  return I;
}
function DV(A) {
  const I = [];
  for (let C = 1; C <= 7; C++) {
    const t = cI.utc(2016, 11, 13 + C);
    I.push(A(t));
  }
  return I;
}
function Se(A, I, C, t) {
  const i = A.listingMode();
  return i === "error" ? null : i === "en" ? C(I) : t(I);
}
function EV(A) {
  return A.numberingSystem && A.numberingSystem !== "latn" ? !1 : A.numberingSystem === "latn" || !A.locale || A.locale.startsWith("en") || new Intl.DateTimeFormat(A.intl).resolvedOptions().numberingSystem === "latn";
}
class KV {
  constructor(I, C, t) {
    this.padTo = t.padTo || 0, this.floor = t.floor || !1;
    const { padTo: i, floor: l, ...b } = t;
    if (!C || Object.keys(b).length > 0) {
      const u = { useGrouping: !1, ...t };
      t.padTo > 0 && (u.minimumIntegerDigits = t.padTo), this.inf = kV(I, u);
    }
  }
  format(I) {
    if (this.inf) {
      const C = this.floor ? Math.floor(I) : I;
      return this.inf.format(C);
    } else {
      const C = this.floor ? Math.floor(I) : Yn(I, 3);
      return qI(C, this.padTo);
    }
  }
}
class QV {
  constructor(I, C, t) {
    this.opts = t, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = I;
    else if (I.zone.type === "fixed") {
      const b = -1 * (I.offset / 60), u = b >= 0 ? `Etc/GMT+${b}` : `Etc/GMT${b}`;
      I.offset !== 0 && nA.create(u).valid ? (i = u, this.dt = I) : (i = "UTC", this.dt = I.offset === 0 ? I : I.setZone("UTC").plus({ minutes: I.offset }), this.originalZone = I.zone);
    } else I.zone.type === "system" ? this.dt = I : I.zone.type === "iana" ? (this.dt = I, i = I.zone.name) : (i = "UTC", this.dt = I.setZone("UTC").plus({ minutes: I.offset }), this.originalZone = I.zone);
    const l = { ...this.opts };
    l.timeZone = l.timeZone || i, this.dtf = en(C, l);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: I }) => I).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const I = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? I.map((C) => {
      if (C.type === "timeZoneName") {
        const t = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...C,
          value: t
        };
      } else
        return C;
    }) : I;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class PV {
  constructor(I, C, t) {
    this.opts = { style: "long", ...t }, !C && sd() && (this.rtf = zV(I, t));
  }
  format(I, C) {
    return this.rtf ? this.rtf.format(I, C) : oR(C, I, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(I, C) {
    return this.rtf ? this.rtf.formatToParts(I, C) : [];
  }
}
const _V = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class FI {
  static fromOpts(I) {
    return FI.create(
      I.locale,
      I.numberingSystem,
      I.outputCalendar,
      I.weekSettings,
      I.defaultToEN
    );
  }
  static create(I, C, t, i, l = !1) {
    const b = I || MI.defaultLocale, u = b || (l ? "en-US" : UV()), G = C || MI.defaultNumberingSystem, X = t || MI.defaultOutputCalendar, s = bn(i) || MI.defaultWeekSettings;
    return new FI(u, G, X, s, b);
  }
  static resetCache() {
    ot = null, tn = {}, ln = {}, nn = {};
  }
  static fromObject({ locale: I, numberingSystem: C, outputCalendar: t, weekSettings: i } = {}) {
    return FI.create(I, C, t, i);
  }
  constructor(I, C, t, i, l) {
    const [b, u, G] = OV(I);
    this.locale = b, this.numberingSystem = C || u || null, this.outputCalendar = t || G || null, this.weekSettings = i, this.intl = jV(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = l, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = EV(this)), this.fastNumbersCached;
  }
  listingMode() {
    const I = this.isEnglish(), C = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return I && C ? "en" : "intl";
  }
  clone(I) {
    return !I || Object.getOwnPropertyNames(I).length === 0 ? this : FI.create(
      I.locale || this.specifiedLocale,
      I.numberingSystem || this.numberingSystem,
      I.outputCalendar || this.outputCalendar,
      bn(I.weekSettings) || this.weekSettings,
      I.defaultToEN || !1
    );
  }
  redefaultToEN(I = {}) {
    return this.clone({ ...I, defaultToEN: !0 });
  }
  redefaultToSystem(I = {}) {
    return this.clone({ ...I, defaultToEN: !1 });
  }
  months(I, C = !1) {
    return Se(this, I, Vd, () => {
      const t = C ? { month: I, day: "numeric" } : { month: I }, i = C ? "format" : "standalone";
      return this.monthsCache[i][I] || (this.monthsCache[i][I] = MV((l) => this.extract(l, t, "month"))), this.monthsCache[i][I];
    });
  }
  weekdays(I, C = !1) {
    return Se(this, I, yd, () => {
      const t = C ? { weekday: I, year: "numeric", month: "long", day: "numeric" } : { weekday: I }, i = C ? "format" : "standalone";
      return this.weekdaysCache[i][I] || (this.weekdaysCache[i][I] = DV(
        (l) => this.extract(l, t, "weekday")
      )), this.weekdaysCache[i][I];
    });
  }
  meridiems() {
    return Se(
      this,
      void 0,
      () => Bd,
      () => {
        if (!this.meridiemCache) {
          const I = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [cI.utc(2016, 11, 13, 9), cI.utc(2016, 11, 13, 19)].map(
            (C) => this.extract(C, I, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(I) {
    return Se(this, I, xd, () => {
      const C = { era: I };
      return this.eraCache[I] || (this.eraCache[I] = [cI.utc(-40, 1, 1), cI.utc(2017, 1, 1)].map(
        (t) => this.extract(t, C, "era")
      )), this.eraCache[I];
    });
  }
  extract(I, C, t) {
    const i = this.dtFormatter(I, C), l = i.formatToParts(), b = l.find((u) => u.type.toLowerCase() === t);
    return b ? b.value : null;
  }
  numberFormatter(I = {}) {
    return new KV(this.intl, I.forceSimple || this.fastNumbers, I);
  }
  dtFormatter(I, C = {}) {
    return new QV(I, this.intl, C);
  }
  relFormatter(I = {}) {
    return new PV(this.intl, this.isEnglish(), I);
  }
  listFormatter(I = {}) {
    return JV(this.intl, I);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Zd() ? TV(this.locale) : _V;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(I) {
    return this.locale === I.locale && this.numberingSystem === I.numberingSystem && this.outputCalendar === I.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let Ml = null;
class Lg extends Nt {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ml === null && (Ml = new Lg(0)), Ml;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(I) {
    return I === 0 ? Lg.utcInstance : new Lg(I);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(I) {
    if (I) {
      const C = I.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (C)
        return new Lg(oi(C[1], C[2]));
    }
    return null;
  }
  constructor(I) {
    super(), this.fixed = I;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Vt(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Vt(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(I, C) {
    return Vt(this.fixed, C);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(I) {
    return I.type === "fixed" && I.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}
class $V extends Nt {
  constructor(I) {
    super(), this.zoneName = I;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function BA(A, I) {
  if (gI(A) || A === null)
    return I;
  if (A instanceof Nt)
    return A;
  if (cR(A)) {
    const C = A.toLowerCase();
    return C === "default" ? I : C === "local" || C === "system" ? Xi.instance : C === "utc" || C === "gmt" ? Lg.utcInstance : Lg.parseSpecifier(C) || nA.create(A);
  } else return FA(A) ? Lg.instance(A) : typeof A == "object" && "offset" in A && typeof A.offset == "function" ? A : new $V(A);
}
const Bn = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, pG = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, qV = Bn.hanidec.replace(/[\[|\]]/g, "").split("");
function IR(A) {
  let I = parseInt(A, 10);
  if (isNaN(I)) {
    I = "";
    for (let C = 0; C < A.length; C++) {
      const t = A.charCodeAt(C);
      if (A[C].search(Bn.hanidec) !== -1)
        I += qV.indexOf(A[C]);
      else
        for (const i in pG) {
          const [l, b] = pG[i];
          t >= l && t <= b && (I += t - l);
        }
    }
    return parseInt(I, 10);
  } else
    return I;
}
let Rc = {};
function gR() {
  Rc = {};
}
function HC({ numberingSystem: A }, I = "") {
  const C = A || "latn";
  return Rc[C] || (Rc[C] = {}), Rc[C][I] || (Rc[C][I] = new RegExp(`${Bn[C]}${I}`)), Rc[C][I];
}
let FG = () => Date.now(), YG = "system", fG = null, vG = null, HG = null, NG = 60, wG, LG = null;
class MI {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return FG;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(I) {
    FG = I;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(I) {
    YG = I;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return BA(YG, Xi.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return fG;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(I) {
    fG = I;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return vG;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(I) {
    vG = I;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return HG;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(I) {
    HG = I;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return LG;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(I) {
    LG = bn(I);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return NG;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(I) {
    NG = I % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return wG;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(I) {
    wG = I;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    FI.resetCache(), nA.resetCache(), cI.resetCache(), gR();
  }
}
class LC {
  constructor(I, C) {
    this.reason = I, this.explanation = C;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const ud = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Gd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function mC(A, I) {
  return new LC(
    "unit out of range",
    `you specified ${I} (of type ${typeof I}) as a ${A}, which is invalid`
  );
}
function xn(A, I, C) {
  const t = new Date(Date.UTC(A, I - 1, C));
  A < 100 && A >= 0 && t.setUTCFullYear(t.getUTCFullYear() - 1900);
  const i = t.getUTCDay();
  return i === 0 ? 7 : i;
}
function ad(A, I, C) {
  return C + (wt(A) ? Gd : ud)[I - 1];
}
function dd(A, I) {
  const C = wt(A) ? Gd : ud, t = C.findIndex((l) => l < I), i = I - C[t];
  return { month: t + 1, day: i };
}
function pn(A, I) {
  return (A - I + 7) % 7 + 1;
}
function Ai(A, I = 4, C = 1) {
  const { year: t, month: i, day: l } = A, b = ad(t, i, l), u = pn(xn(t, i, l), C);
  let G = Math.floor((b - u + 14 - I) / 7), X;
  return G < 1 ? (X = t - 1, G = Ft(X, I, C)) : G > Ft(t, I, C) ? (X = t + 1, G = 1) : X = t, { weekYear: X, weekNumber: G, weekday: u, ...mi(A) };
}
function SG(A, I = 4, C = 1) {
  const { weekYear: t, weekNumber: i, weekday: l } = A, b = pn(xn(t, 1, I), C), u = xc(t);
  let G = i * 7 + l - b - 7 + I, X;
  G < 1 ? (X = t - 1, G += xc(X)) : G > u ? (X = t + 1, G -= xc(t)) : X = t;
  const { month: s, day: o } = dd(X, G);
  return { year: X, month: s, day: o, ...mi(A) };
}
function Dl(A) {
  const { year: I, month: C, day: t } = A, i = ad(I, C, t);
  return { year: I, ordinal: i, ...mi(A) };
}
function JG(A) {
  const { year: I, ordinal: C } = A, { month: t, day: i } = dd(I, C);
  return { year: I, month: t, day: i, ...mi(A) };
}
function kG(A, I) {
  if (!gI(A.localWeekday) || !gI(A.localWeekNumber) || !gI(A.localWeekYear)) {
    if (!gI(A.weekday) || !gI(A.weekNumber) || !gI(A.weekYear))
      throw new Wc(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return gI(A.localWeekday) || (A.weekday = A.localWeekday), gI(A.localWeekNumber) || (A.weekNumber = A.localWeekNumber), gI(A.localWeekYear) || (A.weekYear = A.localWeekYear), delete A.localWeekday, delete A.localWeekNumber, delete A.localWeekYear, {
      minDaysInFirstWeek: I.getMinDaysInFirstWeek(),
      startOfWeek: I.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function CR(A, I = 4, C = 1) {
  const t = si(A.weekYear), i = hC(
    A.weekNumber,
    1,
    Ft(A.weekYear, I, C)
  ), l = hC(A.weekday, 1, 7);
  return t ? i ? l ? !1 : mC("weekday", A.weekday) : mC("week", A.weekNumber) : mC("weekYear", A.weekYear);
}
function AR(A) {
  const I = si(A.year), C = hC(A.ordinal, 1, xc(A.year));
  return I ? C ? !1 : mC("ordinal", A.ordinal) : mC("year", A.year);
}
function rd(A) {
  const I = si(A.year), C = hC(A.month, 1, 12), t = hC(A.day, 1, ci(A.year, A.month));
  return I ? C ? t ? !1 : mC("day", A.day) : mC("month", A.month) : mC("year", A.year);
}
function Xd(A) {
  const { hour: I, minute: C, second: t, millisecond: i } = A, l = hC(I, 0, 23) || I === 24 && C === 0 && t === 0 && i === 0, b = hC(C, 0, 59), u = hC(t, 0, 59), G = hC(i, 0, 999);
  return l ? b ? u ? G ? !1 : mC("millisecond", i) : mC("second", t) : mC("minute", C) : mC("hour", I);
}
function gI(A) {
  return typeof A > "u";
}
function FA(A) {
  return typeof A == "number";
}
function si(A) {
  return typeof A == "number" && A % 1 === 0;
}
function cR(A) {
  return typeof A == "string";
}
function tR(A) {
  return Object.prototype.toString.call(A) === "[object Date]";
}
function sd() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Zd() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function eR(A) {
  return Array.isArray(A) ? A : [A];
}
function zG(A, I, C) {
  if (A.length !== 0)
    return A.reduce((t, i) => {
      const l = [I(i), i];
      return t && C(t[0], l[0]) === t[0] ? t : l;
    }, null)[1];
}
function iR(A, I) {
  return I.reduce((C, t) => (C[t] = A[t], C), {});
}
function Yc(A, I) {
  return Object.prototype.hasOwnProperty.call(A, I);
}
function bn(A) {
  if (A == null)
    return null;
  if (typeof A != "object")
    throw new Rg("Week settings must be an object");
  if (!hC(A.firstDay, 1, 7) || !hC(A.minimalDays, 1, 7) || !Array.isArray(A.weekend) || A.weekend.some((I) => !hC(I, 1, 7)))
    throw new Rg("Invalid week settings");
  return {
    firstDay: A.firstDay,
    minimalDays: A.minimalDays,
    weekend: Array.from(A.weekend)
  };
}
function hC(A, I, C) {
  return si(A) && A >= I && A <= C;
}
function lR(A, I) {
  return A - I * Math.floor(A / I);
}
function qI(A, I = 2) {
  const C = A < 0;
  let t;
  return C ? t = "-" + ("" + -A).padStart(I, "0") : t = ("" + A).padStart(I, "0"), t;
}
function yA(A) {
  if (!(gI(A) || A === null || A === ""))
    return parseInt(A, 10);
}
function MA(A) {
  if (!(gI(A) || A === null || A === ""))
    return parseFloat(A);
}
function Fn(A) {
  if (!(gI(A) || A === null || A === "")) {
    const I = parseFloat("0." + A) * 1e3;
    return Math.floor(I);
  }
}
function Yn(A, I, C = !1) {
  const t = 10 ** I;
  return (C ? Math.trunc : Math.round)(A * t) / t;
}
function wt(A) {
  return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
}
function xc(A) {
  return wt(A) ? 366 : 365;
}
function ci(A, I) {
  const C = lR(I - 1, 12) + 1, t = A + (I - C) / 12;
  return C === 2 ? wt(t) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][C - 1];
}
function Zi(A) {
  let I = Date.UTC(
    A.year,
    A.month - 1,
    A.day,
    A.hour,
    A.minute,
    A.second,
    A.millisecond
  );
  return A.year < 100 && A.year >= 0 && (I = new Date(I), I.setUTCFullYear(A.year, A.month - 1, A.day)), +I;
}
function UG(A, I, C) {
  return -pn(xn(A, 1, I), C) + I - 1;
}
function Ft(A, I = 4, C = 1) {
  const t = UG(A, I, C), i = UG(A + 1, I, C);
  return (xc(A) - t + i) / 7;
}
function un(A) {
  return A > 99 ? A : A > MI.twoDigitCutoffYear ? 1900 + A : 2e3 + A;
}
function od(A, I, C, t = null) {
  const i = new Date(A), l = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  t && (l.timeZone = t);
  const b = { timeZoneName: I, ...l }, u = new Intl.DateTimeFormat(C, b).formatToParts(i).find((G) => G.type.toLowerCase() === "timezonename");
  return u ? u.value : null;
}
function oi(A, I) {
  let C = parseInt(A, 10);
  Number.isNaN(C) && (C = 0);
  const t = parseInt(I, 10) || 0, i = C < 0 || Object.is(C, -0) ? -t : t;
  return C * 60 + i;
}
function md(A) {
  const I = Number(A);
  if (typeof A == "boolean" || A === "" || Number.isNaN(I))
    throw new Rg(`Invalid unit value ${A}`);
  return I;
}
function ti(A, I) {
  const C = {};
  for (const t in A)
    if (Yc(A, t)) {
      const i = A[t];
      if (i == null) continue;
      C[I(t)] = md(i);
    }
  return C;
}
function Vt(A, I) {
  const C = Math.trunc(Math.abs(A / 60)), t = Math.trunc(Math.abs(A % 60)), i = A >= 0 ? "+" : "-";
  switch (I) {
    case "short":
      return `${i}${qI(C, 2)}:${qI(t, 2)}`;
    case "narrow":
      return `${i}${C}${t > 0 ? `:${t}` : ""}`;
    case "techie":
      return `${i}${qI(C, 2)}${qI(t, 2)}`;
    default:
      throw new RangeError(`Value format ${I} is out of range for property format`);
  }
}
function mi(A) {
  return iR(A, ["hour", "minute", "second", "millisecond"]);
}
const nR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], hd = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], bR = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Vd(A) {
  switch (A) {
    case "narrow":
      return [...bR];
    case "short":
      return [...hd];
    case "long":
      return [...nR];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Rd = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Wd = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], uR = ["M", "T", "W", "T", "F", "S", "S"];
function yd(A) {
  switch (A) {
    case "narrow":
      return [...uR];
    case "short":
      return [...Wd];
    case "long":
      return [...Rd];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Bd = ["AM", "PM"], GR = ["Before Christ", "Anno Domini"], aR = ["BC", "AD"], dR = ["B", "A"];
function xd(A) {
  switch (A) {
    case "narrow":
      return [...dR];
    case "short":
      return [...aR];
    case "long":
      return [...GR];
    default:
      return null;
  }
}
function rR(A) {
  return Bd[A.hour < 12 ? 0 : 1];
}
function XR(A, I) {
  return yd(I)[A.weekday - 1];
}
function sR(A, I) {
  return Vd(I)[A.month - 1];
}
function ZR(A, I) {
  return xd(I)[A.year < 0 ? 0 : 1];
}
function oR(A, I, C = "always", t = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, l = ["hours", "minutes", "seconds"].indexOf(A) === -1;
  if (C === "auto" && l) {
    const o = A === "days";
    switch (I) {
      case 1:
        return o ? "tomorrow" : `next ${i[A][0]}`;
      case -1:
        return o ? "yesterday" : `last ${i[A][0]}`;
      case 0:
        return o ? "today" : `this ${i[A][0]}`;
    }
  }
  const b = Object.is(I, -0) || I < 0, u = Math.abs(I), G = u === 1, X = i[A], s = t ? G ? X[1] : X[2] || X[1] : G ? i[A][0] : A;
  return b ? `${u} ${s} ago` : `in ${u} ${s}`;
}
function TG(A, I) {
  let C = "";
  for (const t of A)
    t.literal ? C += t.val : C += I(t.val);
  return C;
}
const mR = {
  D: Ci,
  DD: Da,
  DDD: Ea,
  DDDD: Ka,
  t: Qa,
  tt: Pa,
  ttt: _a,
  tttt: $a,
  T: qa,
  TT: Id,
  TTT: gd,
  TTTT: Cd,
  f: Ad,
  ff: td,
  fff: id,
  ffff: nd,
  F: cd,
  FF: ed,
  FFF: ld,
  FFFF: bd
};
class Bg {
  static create(I, C = {}) {
    return new Bg(I, C);
  }
  static parseFormat(I) {
    let C = null, t = "", i = !1;
    const l = [];
    for (let b = 0; b < I.length; b++) {
      const u = I.charAt(b);
      u === "'" ? (t.length > 0 && l.push({ literal: i || /^\s+$/.test(t), val: t }), C = null, t = "", i = !i) : i || u === C ? t += u : (t.length > 0 && l.push({ literal: /^\s+$/.test(t), val: t }), t = u, C = u);
    }
    return t.length > 0 && l.push({ literal: i || /^\s+$/.test(t), val: t }), l;
  }
  static macroTokenToFormatOpts(I) {
    return mR[I];
  }
  constructor(I, C) {
    this.opts = C, this.loc = I, this.systemLoc = null;
  }
  formatWithSystemDefault(I, C) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(I, { ...this.opts, ...C }).format();
  }
  dtFormatter(I, C = {}) {
    return this.loc.dtFormatter(I, { ...this.opts, ...C });
  }
  formatDateTime(I, C) {
    return this.dtFormatter(I, C).format();
  }
  formatDateTimeParts(I, C) {
    return this.dtFormatter(I, C).formatToParts();
  }
  formatInterval(I, C) {
    return this.dtFormatter(I.start, C).dtf.formatRange(I.start.toJSDate(), I.end.toJSDate());
  }
  resolvedOptions(I, C) {
    return this.dtFormatter(I, C).resolvedOptions();
  }
  num(I, C = 0) {
    if (this.opts.forceSimple)
      return qI(I, C);
    const t = { ...this.opts };
    return C > 0 && (t.padTo = C), this.loc.numberFormatter(t).format(I);
  }
  formatDateTimeFromString(I, C) {
    const t = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", l = (m, F) => this.loc.extract(I, m, F), b = (m) => I.isOffsetFixed && I.offset === 0 && m.allowZ ? "Z" : I.isValid ? I.zone.formatOffset(I.ts, m.format) : "", u = () => t ? rR(I) : l({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), G = (m, F) => t ? sR(I, m) : l(F ? { month: m } : { month: m, day: "numeric" }, "month"), X = (m, F) => t ? XR(I, m) : l(
      F ? { weekday: m } : { weekday: m, month: "long", day: "numeric" },
      "weekday"
    ), s = (m) => {
      const F = Bg.macroTokenToFormatOpts(m);
      return F ? this.formatWithSystemDefault(I, F) : m;
    }, o = (m) => t ? ZR(I, m) : l({ era: m }, "era"), R = (m) => {
      switch (m) {
        case "S":
          return this.num(I.millisecond);
        case "u":
        case "SSS":
          return this.num(I.millisecond, 3);
        case "s":
          return this.num(I.second);
        case "ss":
          return this.num(I.second, 2);
        case "uu":
          return this.num(Math.floor(I.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(I.millisecond / 100));
        case "m":
          return this.num(I.minute);
        case "mm":
          return this.num(I.minute, 2);
        case "h":
          return this.num(I.hour % 12 === 0 ? 12 : I.hour % 12);
        case "hh":
          return this.num(I.hour % 12 === 0 ? 12 : I.hour % 12, 2);
        case "H":
          return this.num(I.hour);
        case "HH":
          return this.num(I.hour, 2);
        case "Z":
          return b({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return b({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return b({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return I.zone.offsetName(I.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return I.zone.offsetName(I.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return I.zoneName;
        case "a":
          return u();
        case "d":
          return i ? l({ day: "numeric" }, "day") : this.num(I.day);
        case "dd":
          return i ? l({ day: "2-digit" }, "day") : this.num(I.day, 2);
        case "c":
          return this.num(I.weekday);
        case "ccc":
          return X("short", !0);
        case "cccc":
          return X("long", !0);
        case "ccccc":
          return X("narrow", !0);
        case "E":
          return this.num(I.weekday);
        case "EEE":
          return X("short", !1);
        case "EEEE":
          return X("long", !1);
        case "EEEEE":
          return X("narrow", !1);
        case "L":
          return i ? l({ month: "numeric", day: "numeric" }, "month") : this.num(I.month);
        case "LL":
          return i ? l({ month: "2-digit", day: "numeric" }, "month") : this.num(I.month, 2);
        case "LLL":
          return G("short", !0);
        case "LLLL":
          return G("long", !0);
        case "LLLLL":
          return G("narrow", !0);
        case "M":
          return i ? l({ month: "numeric" }, "month") : this.num(I.month);
        case "MM":
          return i ? l({ month: "2-digit" }, "month") : this.num(I.month, 2);
        case "MMM":
          return G("short", !1);
        case "MMMM":
          return G("long", !1);
        case "MMMMM":
          return G("narrow", !1);
        case "y":
          return i ? l({ year: "numeric" }, "year") : this.num(I.year);
        case "yy":
          return i ? l({ year: "2-digit" }, "year") : this.num(I.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? l({ year: "numeric" }, "year") : this.num(I.year, 4);
        case "yyyyyy":
          return i ? l({ year: "numeric" }, "year") : this.num(I.year, 6);
        case "G":
          return o("short");
        case "GG":
          return o("long");
        case "GGGGG":
          return o("narrow");
        case "kk":
          return this.num(I.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(I.weekYear, 4);
        case "W":
          return this.num(I.weekNumber);
        case "WW":
          return this.num(I.weekNumber, 2);
        case "n":
          return this.num(I.localWeekNumber);
        case "nn":
          return this.num(I.localWeekNumber, 2);
        case "ii":
          return this.num(I.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(I.localWeekYear, 4);
        case "o":
          return this.num(I.ordinal);
        case "ooo":
          return this.num(I.ordinal, 3);
        case "q":
          return this.num(I.quarter);
        case "qq":
          return this.num(I.quarter, 2);
        case "X":
          return this.num(Math.floor(I.ts / 1e3));
        case "x":
          return this.num(I.ts);
        default:
          return s(m);
      }
    };
    return TG(Bg.parseFormat(C), R);
  }
  formatDurationFromString(I, C) {
    const t = (G) => {
      switch (G[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (G) => (X) => {
      const s = t(X);
      return s ? this.num(G.get(s), X.length) : X;
    }, l = Bg.parseFormat(C), b = l.reduce(
      (G, { literal: X, val: s }) => X ? G : G.concat(s),
      []
    ), u = I.shiftTo(...b.map(t).filter((G) => G));
    return TG(l, i(u));
  }
}
const pd = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Jc(...A) {
  const I = A.reduce((C, t) => C + t.source, "");
  return RegExp(`^${I}$`);
}
function kc(...A) {
  return (I) => A.reduce(
    ([C, t, i], l) => {
      const [b, u, G] = l(I, i);
      return [{ ...C, ...b }, u || t, G];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function zc(A, ...I) {
  if (A == null)
    return [null, null];
  for (const [C, t] of I) {
    const i = C.exec(A);
    if (i)
      return t(i);
  }
  return [null, null];
}
function Fd(...A) {
  return (I, C) => {
    const t = {};
    let i;
    for (i = 0; i < A.length; i++)
      t[A[i]] = yA(I[C + i]);
    return [t, null, C + i];
  };
}
const Yd = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, hR = `(?:${Yd.source}?(?:\\[(${pd.source})\\])?)?`, fn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, fd = RegExp(`${fn.source}${hR}`), vn = RegExp(`(?:T${fd.source})?`), VR = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, RR = /(\d{4})-?W(\d\d)(?:-?(\d))?/, WR = /(\d{4})-?(\d{3})/, yR = Fd("weekYear", "weekNumber", "weekDay"), BR = Fd("year", "ordinal"), xR = /(\d{4})-(\d\d)-(\d\d)/, vd = RegExp(
  `${fn.source} ?(?:${Yd.source}|(${pd.source}))?`
), pR = RegExp(`(?: ${vd.source})?`);
function pc(A, I, C) {
  const t = A[I];
  return gI(t) ? C : yA(t);
}
function FR(A, I) {
  return [{
    year: pc(A, I),
    month: pc(A, I + 1, 1),
    day: pc(A, I + 2, 1)
  }, null, I + 3];
}
function Uc(A, I) {
  return [{
    hours: pc(A, I, 0),
    minutes: pc(A, I + 1, 0),
    seconds: pc(A, I + 2, 0),
    milliseconds: Fn(A[I + 3])
  }, null, I + 4];
}
function Lt(A, I) {
  const C = !A[I] && !A[I + 1], t = oi(A[I + 1], A[I + 2]), i = C ? null : Lg.instance(t);
  return [{}, i, I + 3];
}
function St(A, I) {
  const C = A[I] ? nA.create(A[I]) : null;
  return [{}, C, I + 1];
}
const YR = RegExp(`^T?${fn.source}$`), fR = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function vR(A) {
  const [I, C, t, i, l, b, u, G, X] = A, s = I[0] === "-", o = G && G[0] === "-", R = (m, F = !1) => m !== void 0 && (F || m && s) ? -m : m;
  return [
    {
      years: R(MA(C)),
      months: R(MA(t)),
      weeks: R(MA(i)),
      days: R(MA(l)),
      hours: R(MA(b)),
      minutes: R(MA(u)),
      seconds: R(MA(G), G === "-0"),
      milliseconds: R(Fn(X), o)
    }
  ];
}
const HR = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Hn(A, I, C, t, i, l, b) {
  const u = {
    year: I.length === 2 ? un(yA(I)) : yA(I),
    month: hd.indexOf(C) + 1,
    day: yA(t),
    hour: yA(i),
    minute: yA(l)
  };
  return b && (u.second = yA(b)), A && (u.weekday = A.length > 3 ? Rd.indexOf(A) + 1 : Wd.indexOf(A) + 1), u;
}
const NR = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function wR(A) {
  const [
    ,
    I,
    C,
    t,
    i,
    l,
    b,
    u,
    G,
    X,
    s,
    o
  ] = A, R = Hn(I, i, t, C, l, b, u);
  let m;
  return G ? m = HR[G] : X ? m = 0 : m = oi(s, o), [R, new Lg(m)];
}
function LR(A) {
  return A.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const SR = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, JR = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, kR = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function OG(A) {
  const [, I, C, t, i, l, b, u] = A;
  return [Hn(I, i, t, C, l, b, u), Lg.utcInstance];
}
function zR(A) {
  const [, I, C, t, i, l, b, u] = A;
  return [Hn(I, u, C, t, i, l, b), Lg.utcInstance];
}
const UR = Jc(VR, vn), TR = Jc(RR, vn), OR = Jc(WR, vn), jR = Jc(fd), Hd = kc(
  FR,
  Uc,
  Lt,
  St
), MR = kc(
  yR,
  Uc,
  Lt,
  St
), DR = kc(
  BR,
  Uc,
  Lt,
  St
), ER = kc(
  Uc,
  Lt,
  St
);
function KR(A) {
  return zc(
    A,
    [UR, Hd],
    [TR, MR],
    [OR, DR],
    [jR, ER]
  );
}
function QR(A) {
  return zc(LR(A), [NR, wR]);
}
function PR(A) {
  return zc(
    A,
    [SR, OG],
    [JR, OG],
    [kR, zR]
  );
}
function _R(A) {
  return zc(A, [fR, vR]);
}
const $R = kc(Uc);
function qR(A) {
  return zc(A, [YR, $R]);
}
const IW = Jc(xR, pR), gW = Jc(vd), CW = kc(
  Uc,
  Lt,
  St
);
function AW(A) {
  return zc(
    A,
    [IW, Hd],
    [gW, CW]
  );
}
const jG = "Invalid Duration", Nd = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, cW = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Nd
}, ZC = 146097 / 400, oc = 146097 / 4800, tW = {
  years: {
    quarters: 4,
    months: 12,
    weeks: ZC / 7,
    days: ZC,
    hours: ZC * 24,
    minutes: ZC * 24 * 60,
    seconds: ZC * 24 * 60 * 60,
    milliseconds: ZC * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: ZC / 28,
    days: ZC / 4,
    hours: ZC * 24 / 4,
    minutes: ZC * 24 * 60 / 4,
    seconds: ZC * 24 * 60 * 60 / 4,
    milliseconds: ZC * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: oc / 7,
    days: oc,
    hours: oc * 24,
    minutes: oc * 24 * 60,
    seconds: oc * 24 * 60 * 60,
    milliseconds: oc * 24 * 60 * 60 * 1e3
  },
  ...Nd
}, PA = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], eW = PA.slice(0).reverse();
function WA(A, I, C = !1) {
  const t = {
    values: C ? I.values : { ...A.values, ...I.values || {} },
    loc: A.loc.clone(I.loc),
    conversionAccuracy: I.conversionAccuracy || A.conversionAccuracy,
    matrix: I.matrix || A.matrix
  };
  return new XI(t);
}
function wd(A, I) {
  let C = I.milliseconds ?? 0;
  for (const t of eW.slice(1))
    I[t] && (C += I[t] * A[t].milliseconds);
  return C;
}
function MG(A, I) {
  const C = wd(A, I) < 0 ? -1 : 1;
  PA.reduceRight((t, i) => {
    if (gI(I[i]))
      return t;
    if (t) {
      const l = I[t] * C, b = A[i][t], u = Math.floor(l / b);
      I[i] += u * C, I[t] -= u * b * C;
    }
    return i;
  }, null), PA.reduce((t, i) => {
    if (gI(I[i]))
      return t;
    if (t) {
      const l = I[t] % 1;
      I[t] -= l, I[i] += l * A[t][i];
    }
    return i;
  }, null);
}
function iW(A) {
  const I = {};
  for (const [C, t] of Object.entries(A))
    t !== 0 && (I[C] = t);
  return I;
}
class XI {
  /**
   * @private
   */
  constructor(I) {
    const C = I.conversionAccuracy === "longterm" || !1;
    let t = C ? tW : cW;
    I.matrix && (t = I.matrix), this.values = I.values, this.loc = I.loc || FI.create(), this.conversionAccuracy = C ? "longterm" : "casual", this.invalid = I.invalid || null, this.matrix = t, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(I, C) {
    return XI.fromObject({ milliseconds: I }, C);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(I, C = {}) {
    if (I == null || typeof I != "object")
      throw new Rg(
        `Duration.fromObject: argument expected to be an object, got ${I === null ? "null" : typeof I}`
      );
    return new XI({
      values: ti(I, XI.normalizeUnit),
      loc: FI.fromObject(C),
      conversionAccuracy: C.conversionAccuracy,
      matrix: C.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(I) {
    if (FA(I))
      return XI.fromMillis(I);
    if (XI.isDuration(I))
      return I;
    if (typeof I == "object")
      return XI.fromObject(I);
    throw new Rg(
      `Unknown duration argument ${I} of type ${typeof I}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(I, C) {
    const [t] = _R(I);
    return t ? XI.fromObject(t, C) : XI.invalid("unparsable", `the input "${I}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(I, C) {
    const [t] = qR(I);
    return t ? XI.fromObject(t, C) : XI.invalid("unparsable", `the input "${I}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(I, C = null) {
    if (!I)
      throw new Rg("need to specify a reason the Duration is invalid");
    const t = I instanceof LC ? I : new LC(I, C);
    if (MI.throwOnInvalid)
      throw new fV(t);
    return new XI({ invalid: t });
  }
  /**
   * @private
   */
  static normalizeUnit(I) {
    const C = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[I && I.toLowerCase()];
    if (!C) throw new Ma(I);
    return C;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(I) {
    return I && I.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(I, C = {}) {
    const t = {
      ...C,
      floor: C.round !== !1 && C.floor !== !1
    };
    return this.isValid ? Bg.create(this.loc, t).formatDurationFromString(this, I) : jG;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(I = {}) {
    if (!this.isValid) return jG;
    const C = PA.map((t) => {
      const i = this.values[t];
      return gI(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...I, unit: t.slice(0, -1) }).format(i);
    }).filter((t) => t);
    return this.loc.listFormatter({ type: "conjunction", style: I.listStyle || "narrow", ...I }).format(C);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let I = "P";
    return this.years !== 0 && (I += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (I += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (I += this.weeks + "W"), this.days !== 0 && (I += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (I += "T"), this.hours !== 0 && (I += this.hours + "H"), this.minutes !== 0 && (I += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (I += Yn(this.seconds + this.milliseconds / 1e3, 3) + "S"), I === "P" && (I += "T0S"), I;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(I = {}) {
    if (!this.isValid) return null;
    const C = this.toMillis();
    return C < 0 || C >= 864e5 ? null : (I = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...I,
      includeOffset: !1
    }, cI.fromMillis(C, { zone: "UTC" }).toISOTime(I));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? wd(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(I) {
    if (!this.isValid) return this;
    const C = XI.fromDurationLike(I), t = {};
    for (const i of PA)
      (Yc(C.values, i) || Yc(this.values, i)) && (t[i] = C.get(i) + this.get(i));
    return WA(this, { values: t }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(I) {
    if (!this.isValid) return this;
    const C = XI.fromDurationLike(I);
    return this.plus(C.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(I) {
    if (!this.isValid) return this;
    const C = {};
    for (const t of Object.keys(this.values))
      C[t] = md(I(this.values[t], t));
    return WA(this, { values: C }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(I) {
    return this[XI.normalizeUnit(I)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(I) {
    if (!this.isValid) return this;
    const C = { ...this.values, ...ti(I, XI.normalizeUnit) };
    return WA(this, { values: C });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: I, numberingSystem: C, conversionAccuracy: t, matrix: i } = {}) {
    const b = { loc: this.loc.clone({ locale: I, numberingSystem: C }), matrix: i, conversionAccuracy: t };
    return WA(this, b);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(I) {
    return this.isValid ? this.shiftTo(I).get(I) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const I = this.toObject();
    return MG(this.matrix, I), WA(this, { values: I }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const I = iW(this.normalize().shiftToAll().toObject());
    return WA(this, { values: I }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...I) {
    if (!this.isValid) return this;
    if (I.length === 0)
      return this;
    I = I.map((b) => XI.normalizeUnit(b));
    const C = {}, t = {}, i = this.toObject();
    let l;
    for (const b of PA)
      if (I.indexOf(b) >= 0) {
        l = b;
        let u = 0;
        for (const X in t)
          u += this.matrix[X][b] * t[X], t[X] = 0;
        FA(i[b]) && (u += i[b]);
        const G = Math.trunc(u);
        C[b] = G, t[b] = (u * 1e3 - G * 1e3) / 1e3;
      } else FA(i[b]) && (t[b] = i[b]);
    for (const b in t)
      t[b] !== 0 && (C[l] += b === l ? t[b] : t[b] / this.matrix[l][b]);
    return MG(this.matrix, C), WA(this, { values: C }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const I = {};
    for (const C of Object.keys(this.values))
      I[C] = this.values[C] === 0 ? 0 : -this.values[C];
    return WA(this, { values: I }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(I) {
    if (!this.isValid || !I.isValid || !this.loc.equals(I.loc))
      return !1;
    function C(t, i) {
      return t === void 0 || t === 0 ? i === void 0 || i === 0 : t === i;
    }
    for (const t of PA)
      if (!C(this.values[t], I.values[t]))
        return !1;
    return !0;
  }
}
const mc = "Invalid Interval";
function lW(A, I) {
  return !A || !A.isValid ? jI.invalid("missing or invalid start") : !I || !I.isValid ? jI.invalid("missing or invalid end") : I < A ? jI.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${A.toISO()} and end=${I.toISO()}`
  ) : null;
}
class jI {
  /**
   * @private
   */
  constructor(I) {
    this.s = I.start, this.e = I.end, this.invalid = I.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(I, C = null) {
    if (!I)
      throw new Rg("need to specify a reason the Interval is invalid");
    const t = I instanceof LC ? I : new LC(I, C);
    if (MI.throwOnInvalid)
      throw new YV(t);
    return new jI({ invalid: t });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(I, C) {
    const t = st(I), i = st(C), l = lW(t, i);
    return l ?? new jI({
      start: t,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(I, C) {
    const t = XI.fromDurationLike(C), i = st(I);
    return jI.fromDateTimes(i, i.plus(t));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(I, C) {
    const t = XI.fromDurationLike(C), i = st(I);
    return jI.fromDateTimes(i.minus(t), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(I, C) {
    const [t, i] = (I || "").split("/", 2);
    if (t && i) {
      let l, b;
      try {
        l = cI.fromISO(t, C), b = l.isValid;
      } catch {
        b = !1;
      }
      let u, G;
      try {
        u = cI.fromISO(i, C), G = u.isValid;
      } catch {
        G = !1;
      }
      if (b && G)
        return jI.fromDateTimes(l, u);
      if (b) {
        const X = XI.fromISO(i, C);
        if (X.isValid)
          return jI.after(l, X);
      } else if (G) {
        const X = XI.fromISO(t, C);
        if (X.isValid)
          return jI.before(u, X);
      }
    }
    return jI.invalid("unparsable", `the input "${I}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(I) {
    return I && I.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(I = "milliseconds") {
    return this.isValid ? this.toDuration(I).get(I) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(I = "milliseconds", C) {
    if (!this.isValid) return NaN;
    const t = this.start.startOf(I, C);
    let i;
    return C != null && C.useLocaleWeeks ? i = this.end.reconfigure({ locale: t.locale }) : i = this.end, i = i.startOf(I, C), Math.floor(i.diff(t, I).get(I)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(I) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, I) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(I) {
    return this.isValid ? this.s > I : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(I) {
    return this.isValid ? this.e <= I : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(I) {
    return this.isValid ? this.s <= I && this.e > I : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: I, end: C } = {}) {
    return this.isValid ? jI.fromDateTimes(I || this.s, C || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...I) {
    if (!this.isValid) return [];
    const C = I.map(st).filter((b) => this.contains(b)).sort((b, u) => b.toMillis() - u.toMillis()), t = [];
    let { s: i } = this, l = 0;
    for (; i < this.e; ) {
      const b = C[l] || this.e, u = +b > +this.e ? this.e : b;
      t.push(jI.fromDateTimes(i, u)), i = u, l += 1;
    }
    return t;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(I) {
    const C = XI.fromDurationLike(I);
    if (!this.isValid || !C.isValid || C.as("milliseconds") === 0)
      return [];
    let { s: t } = this, i = 1, l;
    const b = [];
    for (; t < this.e; ) {
      const u = this.start.plus(C.mapUnits((G) => G * i));
      l = +u > +this.e ? this.e : u, b.push(jI.fromDateTimes(t, l)), t = l, i += 1;
    }
    return b;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(I) {
    return this.isValid ? this.splitBy(this.length() / I).slice(0, I) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(I) {
    return this.e > I.s && this.s < I.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(I) {
    return this.isValid ? +this.e == +I.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(I) {
    return this.isValid ? +I.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(I) {
    return this.isValid ? this.s <= I.s && this.e >= I.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(I) {
    return !this.isValid || !I.isValid ? !1 : this.s.equals(I.s) && this.e.equals(I.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(I) {
    if (!this.isValid) return this;
    const C = this.s > I.s ? this.s : I.s, t = this.e < I.e ? this.e : I.e;
    return C >= t ? null : jI.fromDateTimes(C, t);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(I) {
    if (!this.isValid) return this;
    const C = this.s < I.s ? this.s : I.s, t = this.e > I.e ? this.e : I.e;
    return jI.fromDateTimes(C, t);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(I) {
    const [C, t] = I.sort((i, l) => i.s - l.s).reduce(
      ([i, l], b) => l ? l.overlaps(b) || l.abutsStart(b) ? [i, l.union(b)] : [i.concat([l]), b] : [i, b],
      [[], null]
    );
    return t && C.push(t), C;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(I) {
    let C = null, t = 0;
    const i = [], l = I.map((G) => [
      { time: G.s, type: "s" },
      { time: G.e, type: "e" }
    ]), b = Array.prototype.concat(...l), u = b.sort((G, X) => G.time - X.time);
    for (const G of u)
      t += G.type === "s" ? 1 : -1, t === 1 ? C = G.time : (C && +C != +G.time && i.push(jI.fromDateTimes(C, G.time)), C = null);
    return jI.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...I) {
    return jI.xor([this].concat(I)).map((C) => this.intersection(C)).filter((C) => C && !C.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : mc;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(I = Ci, C = {}) {
    return this.isValid ? Bg.create(this.s.loc.clone(C), I).formatInterval(this) : mc;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(I) {
    return this.isValid ? `${this.s.toISO(I)}/${this.e.toISO(I)}` : mc;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : mc;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(I) {
    return this.isValid ? `${this.s.toISOTime(I)}/${this.e.toISOTime(I)}` : mc;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(I, { separator: C = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(I)}${C}${this.e.toFormat(I)}` : mc;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(I, C) {
    return this.isValid ? this.e.diff(this.s, I, C) : XI.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(I) {
    return jI.fromDateTimes(I(this.s), I(this.e));
  }
}
class Je {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(I = MI.defaultZone) {
    const C = cI.now().setZone(I).set({ month: 12 });
    return !I.isUniversal && C.offset !== C.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(I) {
    return nA.isValidZone(I);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(I) {
    return BA(I, MI.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: I = null, locObj: C = null } = {}) {
    return (C || FI.create(I)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: I = null, locObj: C = null } = {}) {
    return (C || FI.create(I)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: I = null, locObj: C = null } = {}) {
    return (C || FI.create(I)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(I = "long", { locale: C = null, numberingSystem: t = null, locObj: i = null, outputCalendar: l = "gregory" } = {}) {
    return (i || FI.create(C, t, l)).months(I);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(I = "long", { locale: C = null, numberingSystem: t = null, locObj: i = null, outputCalendar: l = "gregory" } = {}) {
    return (i || FI.create(C, t, l)).months(I, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(I = "long", { locale: C = null, numberingSystem: t = null, locObj: i = null } = {}) {
    return (i || FI.create(C, t, null)).weekdays(I);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(I = "long", { locale: C = null, numberingSystem: t = null, locObj: i = null } = {}) {
    return (i || FI.create(C, t, null)).weekdays(I, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: I = null } = {}) {
    return FI.create(I).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(I = "short", { locale: C = null } = {}) {
    return FI.create(C, null, "gregory").eras(I);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: sd(), localeWeek: Zd() };
  }
}
function DG(A, I) {
  const C = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), t = C(I) - C(A);
  return Math.floor(XI.fromMillis(t).as("days"));
}
function nW(A, I, C) {
  const t = [
    ["years", (G, X) => X.year - G.year],
    ["quarters", (G, X) => X.quarter - G.quarter + (X.year - G.year) * 4],
    ["months", (G, X) => X.month - G.month + (X.year - G.year) * 12],
    [
      "weeks",
      (G, X) => {
        const s = DG(G, X);
        return (s - s % 7) / 7;
      }
    ],
    ["days", DG]
  ], i = {}, l = A;
  let b, u;
  for (const [G, X] of t)
    C.indexOf(G) >= 0 && (b = G, i[G] = X(A, I), u = l.plus(i), u > I ? (i[G]--, A = l.plus(i), A > I && (u = A, i[G]--, A = l.plus(i))) : A = u);
  return [A, i, u, b];
}
function bW(A, I, C, t) {
  let [i, l, b, u] = nW(A, I, C);
  const G = I - i, X = C.filter(
    (o) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(o) >= 0
  );
  X.length === 0 && (b < I && (b = i.plus({ [u]: 1 })), b !== i && (l[u] = (l[u] || 0) + G / (b - i)));
  const s = XI.fromObject(l, t);
  return X.length > 0 ? XI.fromMillis(G, t).shiftTo(...X).plus(s) : s;
}
const uW = "missing Intl.DateTimeFormat.formatToParts support";
function VI(A, I = (C) => C) {
  return { regex: A, deser: ([C]) => I(IR(C)) };
}
const GW = " ", Ld = `[ ${GW}]`, Sd = new RegExp(Ld, "g");
function aW(A) {
  return A.replace(/\./g, "\\.?").replace(Sd, Ld);
}
function EG(A) {
  return A.replace(/\./g, "").replace(Sd, " ").toLowerCase();
}
function NC(A, I) {
  return A === null ? null : {
    regex: RegExp(A.map(aW).join("|")),
    deser: ([C]) => A.findIndex((t) => EG(C) === EG(t)) + I
  };
}
function KG(A, I) {
  return { regex: A, deser: ([, C, t]) => oi(C, t), groups: I };
}
function ke(A) {
  return { regex: A, deser: ([I]) => I };
}
function dW(A) {
  return A.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function rW(A, I) {
  const C = HC(I), t = HC(I, "{2}"), i = HC(I, "{3}"), l = HC(I, "{4}"), b = HC(I, "{6}"), u = HC(I, "{1,2}"), G = HC(I, "{1,3}"), X = HC(I, "{1,6}"), s = HC(I, "{1,9}"), o = HC(I, "{2,4}"), R = HC(I, "{4,6}"), m = (p) => ({ regex: RegExp(dW(p.val)), deser: ([H]) => H, literal: !0 }), x = ((p) => {
    if (A.literal)
      return m(p);
    switch (p.val) {
      case "G":
        return NC(I.eras("short"), 0);
      case "GG":
        return NC(I.eras("long"), 0);
      case "y":
        return VI(X);
      case "yy":
        return VI(o, un);
      case "yyyy":
        return VI(l);
      case "yyyyy":
        return VI(R);
      case "yyyyyy":
        return VI(b);
      case "M":
        return VI(u);
      case "MM":
        return VI(t);
      case "MMM":
        return NC(I.months("short", !0), 1);
      case "MMMM":
        return NC(I.months("long", !0), 1);
      case "L":
        return VI(u);
      case "LL":
        return VI(t);
      case "LLL":
        return NC(I.months("short", !1), 1);
      case "LLLL":
        return NC(I.months("long", !1), 1);
      case "d":
        return VI(u);
      case "dd":
        return VI(t);
      case "o":
        return VI(G);
      case "ooo":
        return VI(i);
      case "HH":
        return VI(t);
      case "H":
        return VI(u);
      case "hh":
        return VI(t);
      case "h":
        return VI(u);
      case "mm":
        return VI(t);
      case "m":
        return VI(u);
      case "q":
        return VI(u);
      case "qq":
        return VI(t);
      case "s":
        return VI(u);
      case "ss":
        return VI(t);
      case "S":
        return VI(G);
      case "SSS":
        return VI(i);
      case "u":
        return ke(s);
      case "uu":
        return ke(u);
      case "uuu":
        return VI(C);
      case "a":
        return NC(I.meridiems(), 0);
      case "kkkk":
        return VI(l);
      case "kk":
        return VI(o, un);
      case "W":
        return VI(u);
      case "WW":
        return VI(t);
      case "E":
      case "c":
        return VI(C);
      case "EEE":
        return NC(I.weekdays("short", !1), 1);
      case "EEEE":
        return NC(I.weekdays("long", !1), 1);
      case "ccc":
        return NC(I.weekdays("short", !0), 1);
      case "cccc":
        return NC(I.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return KG(new RegExp(`([+-]${u.source})(?::(${t.source}))?`), 2);
      case "ZZZ":
        return KG(new RegExp(`([+-]${u.source})(${t.source})?`), 2);
      case "z":
        return ke(/[a-z_+-/]{1,256}?/i);
      case " ":
        return ke(/[^\S\n\r]/);
      default:
        return m(p);
    }
  })(A) || {
    invalidReason: uW
  };
  return x.token = A, x;
}
const XW = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function sW(A, I, C) {
  const { type: t, value: i } = A;
  if (t === "literal") {
    const G = /^\s+$/.test(i);
    return {
      literal: !G,
      val: G ? " " : i
    };
  }
  const l = I[t];
  let b = t;
  t === "hour" && (I.hour12 != null ? b = I.hour12 ? "hour12" : "hour24" : I.hourCycle != null ? I.hourCycle === "h11" || I.hourCycle === "h12" ? b = "hour12" : b = "hour24" : b = C.hour12 ? "hour12" : "hour24");
  let u = XW[b];
  if (typeof u == "object" && (u = u[l]), u)
    return {
      literal: !1,
      val: u
    };
}
function ZW(A) {
  return [`^${A.map((C) => C.regex).reduce((C, t) => `${C}(${t.source})`, "")}$`, A];
}
function oW(A, I, C) {
  const t = A.match(I);
  if (t) {
    const i = {};
    let l = 1;
    for (const b in C)
      if (Yc(C, b)) {
        const u = C[b], G = u.groups ? u.groups + 1 : 1;
        !u.literal && u.token && (i[u.token.val[0]] = u.deser(t.slice(l, l + G))), l += G;
      }
    return [t, i];
  } else
    return [t, {}];
}
function mW(A) {
  const I = (l) => {
    switch (l) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let C = null, t;
  return gI(A.z) || (C = nA.create(A.z)), gI(A.Z) || (C || (C = new Lg(A.Z)), t = A.Z), gI(A.q) || (A.M = (A.q - 1) * 3 + 1), gI(A.h) || (A.h < 12 && A.a === 1 ? A.h += 12 : A.h === 12 && A.a === 0 && (A.h = 0)), A.G === 0 && A.y && (A.y = -A.y), gI(A.u) || (A.S = Fn(A.u)), [Object.keys(A).reduce((l, b) => {
    const u = I(b);
    return u && (l[u] = A[b]), l;
  }, {}), C, t];
}
let El = null;
function hW() {
  return El || (El = cI.fromMillis(1555555555555)), El;
}
function VW(A, I) {
  if (A.literal)
    return A;
  const C = Bg.macroTokenToFormatOpts(A.val), t = Ud(C, I);
  return t == null || t.includes(void 0) ? A : t;
}
function Jd(A, I) {
  return Array.prototype.concat(...A.map((C) => VW(C, I)));
}
class kd {
  constructor(I, C) {
    if (this.locale = I, this.format = C, this.tokens = Jd(Bg.parseFormat(C), I), this.units = this.tokens.map((t) => rW(t, I)), this.disqualifyingUnit = this.units.find((t) => t.invalidReason), !this.disqualifyingUnit) {
      const [t, i] = ZW(this.units);
      this.regex = RegExp(t, "i"), this.handlers = i;
    }
  }
  explainFromTokens(I) {
    if (this.isValid) {
      const [C, t] = oW(I, this.regex, this.handlers), [i, l, b] = t ? mW(t) : [null, null, void 0];
      if (Yc(t, "a") && Yc(t, "H"))
        throw new Wc(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: I,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: C,
        matches: t,
        result: i,
        zone: l,
        specificOffset: b
      };
    } else
      return { input: I, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function zd(A, I, C) {
  return new kd(A, C).explainFromTokens(I);
}
function RW(A, I, C) {
  const { result: t, zone: i, specificOffset: l, invalidReason: b } = zd(A, I, C);
  return [t, i, l, b];
}
function Ud(A, I) {
  if (!A)
    return null;
  const t = Bg.create(I, A).dtFormatter(hW()), i = t.formatToParts(), l = t.resolvedOptions();
  return i.map((b) => sW(b, A, l));
}
const Kl = "Invalid DateTime", QG = 864e13;
function mt(A) {
  return new LC("unsupported zone", `the zone "${A.name}" is not supported`);
}
function Ql(A) {
  return A.weekData === null && (A.weekData = Ai(A.c)), A.weekData;
}
function Pl(A) {
  return A.localWeekData === null && (A.localWeekData = Ai(
    A.c,
    A.loc.getMinDaysInFirstWeek(),
    A.loc.getStartOfWeek()
  )), A.localWeekData;
}
function DA(A, I) {
  const C = {
    ts: A.ts,
    zone: A.zone,
    c: A.c,
    o: A.o,
    loc: A.loc,
    invalid: A.invalid
  };
  return new cI({ ...C, ...I, old: C });
}
function Td(A, I, C) {
  let t = A - I * 60 * 1e3;
  const i = C.offset(t);
  if (I === i)
    return [t, I];
  t -= (i - I) * 60 * 1e3;
  const l = C.offset(t);
  return i === l ? [t, i] : [A - Math.min(i, l) * 60 * 1e3, Math.max(i, l)];
}
function ze(A, I) {
  A += I * 60 * 1e3;
  const C = new Date(A);
  return {
    year: C.getUTCFullYear(),
    month: C.getUTCMonth() + 1,
    day: C.getUTCDate(),
    hour: C.getUTCHours(),
    minute: C.getUTCMinutes(),
    second: C.getUTCSeconds(),
    millisecond: C.getUTCMilliseconds()
  };
}
function Ke(A, I, C) {
  return Td(Zi(A), I, C);
}
function PG(A, I) {
  const C = A.o, t = A.c.year + Math.trunc(I.years), i = A.c.month + Math.trunc(I.months) + Math.trunc(I.quarters) * 3, l = {
    ...A.c,
    year: t,
    month: i,
    day: Math.min(A.c.day, ci(t, i)) + Math.trunc(I.days) + Math.trunc(I.weeks) * 7
  }, b = XI.fromObject({
    years: I.years - Math.trunc(I.years),
    quarters: I.quarters - Math.trunc(I.quarters),
    months: I.months - Math.trunc(I.months),
    weeks: I.weeks - Math.trunc(I.weeks),
    days: I.days - Math.trunc(I.days),
    hours: I.hours,
    minutes: I.minutes,
    seconds: I.seconds,
    milliseconds: I.milliseconds
  }).as("milliseconds"), u = Zi(l);
  let [G, X] = Td(u, C, A.zone);
  return b !== 0 && (G += b, X = A.zone.offset(G)), { ts: G, o: X };
}
function hc(A, I, C, t, i, l) {
  const { setZone: b, zone: u } = C;
  if (A && Object.keys(A).length !== 0 || I) {
    const G = I || u, X = cI.fromObject(A, {
      ...C,
      zone: G,
      specificOffset: l
    });
    return b ? X : X.setZone(u);
  } else
    return cI.invalid(
      new LC("unparsable", `the input "${i}" can't be parsed as ${t}`)
    );
}
function Ue(A, I, C = !0) {
  return A.isValid ? Bg.create(FI.create("en-US"), {
    allowZ: C,
    forceSimple: !0
  }).formatDateTimeFromString(A, I) : null;
}
function _l(A, I) {
  const C = A.c.year > 9999 || A.c.year < 0;
  let t = "";
  return C && A.c.year >= 0 && (t += "+"), t += qI(A.c.year, C ? 6 : 4), I ? (t += "-", t += qI(A.c.month), t += "-", t += qI(A.c.day)) : (t += qI(A.c.month), t += qI(A.c.day)), t;
}
function _G(A, I, C, t, i, l) {
  let b = qI(A.c.hour);
  return I ? (b += ":", b += qI(A.c.minute), (A.c.millisecond !== 0 || A.c.second !== 0 || !C) && (b += ":")) : b += qI(A.c.minute), (A.c.millisecond !== 0 || A.c.second !== 0 || !C) && (b += qI(A.c.second), (A.c.millisecond !== 0 || !t) && (b += ".", b += qI(A.c.millisecond, 3))), i && (A.isOffsetFixed && A.offset === 0 && !l ? b += "Z" : A.o < 0 ? (b += "-", b += qI(Math.trunc(-A.o / 60)), b += ":", b += qI(Math.trunc(-A.o % 60))) : (b += "+", b += qI(Math.trunc(A.o / 60)), b += ":", b += qI(Math.trunc(A.o % 60)))), l && (b += "[" + A.zone.ianaName + "]"), b;
}
const Od = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, WW = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, yW = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, jd = ["year", "month", "day", "hour", "minute", "second", "millisecond"], BW = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], xW = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function pW(A) {
  const I = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[A.toLowerCase()];
  if (!I) throw new Ma(A);
  return I;
}
function $G(A) {
  switch (A.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return pW(A);
  }
}
function FW(A) {
  return Pe[A] || (Qe === void 0 && (Qe = MI.now()), Pe[A] = A.offset(Qe)), Pe[A];
}
function qG(A, I) {
  const C = BA(I.zone, MI.defaultZone);
  if (!C.isValid)
    return cI.invalid(mt(C));
  const t = FI.fromObject(I);
  let i, l;
  if (gI(A.year))
    i = MI.now();
  else {
    for (const G of jd)
      gI(A[G]) && (A[G] = Od[G]);
    const b = rd(A) || Xd(A);
    if (b)
      return cI.invalid(b);
    const u = FW(C);
    [i, l] = Ke(A, u, C);
  }
  return new cI({ ts: i, zone: C, loc: t, o: l });
}
function Ia(A, I, C) {
  const t = gI(C.round) ? !0 : C.round, i = (b, u) => (b = Yn(b, t || C.calendary ? 0 : 2, !0), I.loc.clone(C).relFormatter(C).format(b, u)), l = (b) => C.calendary ? I.hasSame(A, b) ? 0 : I.startOf(b).diff(A.startOf(b), b).get(b) : I.diff(A, b).get(b);
  if (C.unit)
    return i(l(C.unit), C.unit);
  for (const b of C.units) {
    const u = l(b);
    if (Math.abs(u) >= 1)
      return i(u, b);
  }
  return i(A > I ? -0 : 0, C.units[C.units.length - 1]);
}
function ga(A) {
  let I = {}, C;
  return A.length > 0 && typeof A[A.length - 1] == "object" ? (I = A[A.length - 1], C = Array.from(A).slice(0, A.length - 1)) : C = Array.from(A), [I, C];
}
let Qe, Pe = {}, cI = class kI {
  /**
   * @access private
   */
  constructor(I) {
    const C = I.zone || MI.defaultZone;
    let t = I.invalid || (Number.isNaN(I.ts) ? new LC("invalid input") : null) || (C.isValid ? null : mt(C));
    this.ts = gI(I.ts) ? MI.now() : I.ts;
    let i = null, l = null;
    if (!t)
      if (I.old && I.old.ts === this.ts && I.old.zone.equals(C))
        [i, l] = [I.old.c, I.old.o];
      else {
        const u = FA(I.o) && !I.old ? I.o : C.offset(this.ts);
        i = ze(this.ts, u), t = Number.isNaN(i.year) ? new LC("invalid input") : null, i = t ? null : i, l = t ? null : u;
      }
    this._zone = C, this.loc = I.loc || FI.create(), this.invalid = t, this.weekData = null, this.localWeekData = null, this.c = i, this.o = l, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new kI({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [I, C] = ga(arguments), [t, i, l, b, u, G, X] = C;
    return qG({ year: t, month: i, day: l, hour: b, minute: u, second: G, millisecond: X }, I);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [I, C] = ga(arguments), [t, i, l, b, u, G, X] = C;
    return I.zone = Lg.utcInstance, qG({ year: t, month: i, day: l, hour: b, minute: u, second: G, millisecond: X }, I);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(I, C = {}) {
    const t = tR(I) ? I.valueOf() : NaN;
    if (Number.isNaN(t))
      return kI.invalid("invalid input");
    const i = BA(C.zone, MI.defaultZone);
    return i.isValid ? new kI({
      ts: t,
      zone: i,
      loc: FI.fromObject(C)
    }) : kI.invalid(mt(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(I, C = {}) {
    if (FA(I))
      return I < -QG || I > QG ? kI.invalid("Timestamp out of range") : new kI({
        ts: I,
        zone: BA(C.zone, MI.defaultZone),
        loc: FI.fromObject(C)
      });
    throw new Rg(
      `fromMillis requires a numerical input, but received a ${typeof I} with value ${I}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(I, C = {}) {
    if (FA(I))
      return new kI({
        ts: I * 1e3,
        zone: BA(C.zone, MI.defaultZone),
        loc: FI.fromObject(C)
      });
    throw new Rg("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(I, C = {}) {
    I = I || {};
    const t = BA(C.zone, MI.defaultZone);
    if (!t.isValid)
      return kI.invalid(mt(t));
    const i = FI.fromObject(C), l = ti(I, $G), { minDaysInFirstWeek: b, startOfWeek: u } = kG(l, i), G = MI.now(), X = gI(C.specificOffset) ? t.offset(G) : C.specificOffset, s = !gI(l.ordinal), o = !gI(l.year), R = !gI(l.month) || !gI(l.day), m = o || R, F = l.weekYear || l.weekNumber;
    if ((m || s) && F)
      throw new Wc(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (R && s)
      throw new Wc("Can't mix ordinal dates with month/day");
    const x = F || l.weekday && !m;
    let p, H, J = ze(G, X);
    x ? (p = BW, H = WW, J = Ai(J, b, u)) : s ? (p = xW, H = yW, J = Dl(J)) : (p = jd, H = Od);
    let z = !1;
    for (const mI of p) {
      const LI = l[mI];
      gI(LI) ? z ? l[mI] = H[mI] : l[mI] = J[mI] : z = !0;
    }
    const S = x ? CR(l, b, u) : s ? AR(l) : rd(l), Y = S || Xd(l);
    if (Y)
      return kI.invalid(Y);
    const M = x ? SG(l, b, u) : s ? JG(l) : l, [j, oI] = Ke(M, X, t), dI = new kI({
      ts: j,
      zone: t,
      o: oI,
      loc: i
    });
    return l.weekday && m && I.weekday !== dI.weekday ? kI.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${l.weekday} and a date of ${dI.toISO()}`
    ) : dI.isValid ? dI : kI.invalid(dI.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(I, C = {}) {
    const [t, i] = KR(I);
    return hc(t, i, C, "ISO 8601", I);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(I, C = {}) {
    const [t, i] = QR(I);
    return hc(t, i, C, "RFC 2822", I);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(I, C = {}) {
    const [t, i] = PR(I);
    return hc(t, i, C, "HTTP", C);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(I, C, t = {}) {
    if (gI(I) || gI(C))
      throw new Rg("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: l = null } = t, b = FI.fromOpts({
      locale: i,
      numberingSystem: l,
      defaultToEN: !0
    }), [u, G, X, s] = RW(b, I, C);
    return s ? kI.invalid(s) : hc(u, G, t, `format ${C}`, I, X);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(I, C, t = {}) {
    return kI.fromFormat(I, C, t);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(I, C = {}) {
    const [t, i] = AW(I);
    return hc(t, i, C, "SQL", I);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(I, C = null) {
    if (!I)
      throw new Rg("need to specify a reason the DateTime is invalid");
    const t = I instanceof LC ? I : new LC(I, C);
    if (MI.throwOnInvalid)
      throw new FV(t);
    return new kI({ invalid: t });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(I) {
    return I && I.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(I, C = {}) {
    const t = Ud(I, FI.fromObject(C));
    return t ? t.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(I, C = {}) {
    return Jd(Bg.parseFormat(I), FI.fromObject(C)).map((i) => i.val).join("");
  }
  static resetCache() {
    Qe = void 0, Pe = {};
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(I) {
    return this[I];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Ql(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Ql(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Ql(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? Pl(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Pl(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Pl(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Dl(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Je.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Je.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Je.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Je.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const I = 864e5, C = 6e4, t = Zi(this.c), i = this.zone.offset(t - I), l = this.zone.offset(t + I), b = this.zone.offset(t - i * C), u = this.zone.offset(t - l * C);
    if (b === u)
      return [this];
    const G = t - b * C, X = t - u * C, s = ze(G, b), o = ze(X, u);
    return s.hour === o.hour && s.minute === o.minute && s.second === o.second && s.millisecond === o.millisecond ? [DA(this, { ts: G }), DA(this, { ts: X })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return wt(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return ci(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? xc(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ft(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ft(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(I = {}) {
    const { locale: C, numberingSystem: t, calendar: i } = Bg.create(
      this.loc.clone(I),
      I
    ).resolvedOptions(this);
    return { locale: C, numberingSystem: t, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(I = 0, C = {}) {
    return this.setZone(Lg.instance(I), C);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(MI.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(I, { keepLocalTime: C = !1, keepCalendarTime: t = !1 } = {}) {
    if (I = BA(I, MI.defaultZone), I.equals(this.zone))
      return this;
    if (I.isValid) {
      let i = this.ts;
      if (C || t) {
        const l = I.offset(this.ts), b = this.toObject();
        [i] = Ke(b, l, I);
      }
      return DA(this, { ts: i, zone: I });
    } else
      return kI.invalid(mt(I));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: I, numberingSystem: C, outputCalendar: t } = {}) {
    const i = this.loc.clone({ locale: I, numberingSystem: C, outputCalendar: t });
    return DA(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(I) {
    return this.reconfigure({ locale: I });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(I) {
    if (!this.isValid) return this;
    const C = ti(I, $G), { minDaysInFirstWeek: t, startOfWeek: i } = kG(C, this.loc), l = !gI(C.weekYear) || !gI(C.weekNumber) || !gI(C.weekday), b = !gI(C.ordinal), u = !gI(C.year), G = !gI(C.month) || !gI(C.day), X = u || G, s = C.weekYear || C.weekNumber;
    if ((X || b) && s)
      throw new Wc(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (G && b)
      throw new Wc("Can't mix ordinal dates with month/day");
    let o;
    l ? o = SG(
      { ...Ai(this.c, t, i), ...C },
      t,
      i
    ) : gI(C.ordinal) ? (o = { ...this.toObject(), ...C }, gI(C.day) && (o.day = Math.min(ci(o.year, o.month), o.day))) : o = JG({ ...Dl(this.c), ...C });
    const [R, m] = Ke(o, this.o, this.zone);
    return DA(this, { ts: R, o: m });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(I) {
    if (!this.isValid) return this;
    const C = XI.fromDurationLike(I);
    return DA(this, PG(this, C));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(I) {
    if (!this.isValid) return this;
    const C = XI.fromDurationLike(I).negate();
    return DA(this, PG(this, C));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(I, { useLocaleWeeks: C = !1 } = {}) {
    if (!this.isValid) return this;
    const t = {}, i = XI.normalizeUnit(I);
    switch (i) {
      case "years":
        t.month = 1;
      case "quarters":
      case "months":
        t.day = 1;
      case "weeks":
      case "days":
        t.hour = 0;
      case "hours":
        t.minute = 0;
      case "minutes":
        t.second = 0;
      case "seconds":
        t.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (C) {
        const l = this.loc.getStartOfWeek(), { weekday: b } = this;
        b < l && (t.weekNumber = this.weekNumber - 1), t.weekday = l;
      } else
        t.weekday = 1;
    if (i === "quarters") {
      const l = Math.ceil(this.month / 3);
      t.month = (l - 1) * 3 + 1;
    }
    return this.set(t);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(I, C) {
    return this.isValid ? this.plus({ [I]: 1 }).startOf(I, C).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(I, C = {}) {
    return this.isValid ? Bg.create(this.loc.redefaultToEN(C)).formatDateTimeFromString(this, I) : Kl;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(I = Ci, C = {}) {
    return this.isValid ? Bg.create(this.loc.clone(C), I).formatDateTime(this) : Kl;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(I = {}) {
    return this.isValid ? Bg.create(this.loc.clone(I), I).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: I = "extended",
    suppressSeconds: C = !1,
    suppressMilliseconds: t = !1,
    includeOffset: i = !0,
    extendedZone: l = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const b = I === "extended";
    let u = _l(this, b);
    return u += "T", u += _G(this, b, C, t, i, l), u;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: I = "extended" } = {}) {
    return this.isValid ? _l(this, I === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Ue(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: I = !1,
    suppressSeconds: C = !1,
    includeOffset: t = !0,
    includePrefix: i = !1,
    extendedZone: l = !1,
    format: b = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + _G(
      this,
      b === "extended",
      C,
      I,
      t,
      l
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Ue(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Ue(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? _l(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: I = !0, includeZone: C = !1, includeOffsetSpace: t = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (C || I) && (t && (i += " "), C ? i += "z" : I && (i += "ZZ")), Ue(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(I = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(I)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : Kl;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(I = {}) {
    if (!this.isValid) return {};
    const C = { ...this.c };
    return I.includeConfig && (C.outputCalendar = this.outputCalendar, C.numberingSystem = this.loc.numberingSystem, C.locale = this.loc.locale), C;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(I, C = "milliseconds", t = {}) {
    if (!this.isValid || !I.isValid)
      return XI.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...t }, l = eR(C).map(XI.normalizeUnit), b = I.valueOf() > this.valueOf(), u = b ? this : I, G = b ? I : this, X = bW(u, G, l, i);
    return b ? X.negate() : X;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(I = "milliseconds", C = {}) {
    return this.diff(kI.now(), I, C);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(I) {
    return this.isValid ? jI.fromDateTimes(this, I) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(I, C, t) {
    if (!this.isValid) return !1;
    const i = I.valueOf(), l = this.setZone(I.zone, { keepLocalTime: !0 });
    return l.startOf(C, t) <= i && i <= l.endOf(C, t);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(I) {
    return this.isValid && I.isValid && this.valueOf() === I.valueOf() && this.zone.equals(I.zone) && this.loc.equals(I.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(I = {}) {
    if (!this.isValid) return null;
    const C = I.base || kI.fromObject({}, { zone: this.zone }), t = I.padding ? this < C ? -I.padding : I.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], l = I.unit;
    return Array.isArray(I.unit) && (i = I.unit, l = void 0), Ia(C, this.plus(t), {
      ...I,
      numeric: "always",
      units: i,
      unit: l
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(I = {}) {
    return this.isValid ? Ia(I.base || kI.fromObject({}, { zone: this.zone }), this, {
      ...I,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...I) {
    if (!I.every(kI.isDateTime))
      throw new Rg("min requires all arguments be DateTimes");
    return zG(I, (C) => C.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...I) {
    if (!I.every(kI.isDateTime))
      throw new Rg("max requires all arguments be DateTimes");
    return zG(I, (C) => C.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(I, C, t = {}) {
    const { locale: i = null, numberingSystem: l = null } = t, b = FI.fromOpts({
      locale: i,
      numberingSystem: l,
      defaultToEN: !0
    });
    return zd(b, I, C);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(I, C, t = {}) {
    return kI.fromFormatExplain(I, C, t);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(I, C = {}) {
    const { locale: t = null, numberingSystem: i = null } = C, l = FI.fromOpts({
      locale: t,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new kd(l, I);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(I, C, t = {}) {
    if (gI(I) || gI(C))
      throw new Rg(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: l = null } = t, b = FI.fromOpts({
      locale: i,
      numberingSystem: l,
      defaultToEN: !0
    });
    if (!b.equals(C.locale))
      throw new Rg(
        `fromFormatParser called with a locale of ${b}, but the format parser was created for ${C.locale}`
      );
    const { result: u, zone: G, specificOffset: X, invalidReason: s } = C.explainFromTokens(I);
    return s ? kI.invalid(s) : hc(
      u,
      G,
      t,
      `format ${C.format}`,
      I,
      X
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Ci;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Da;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return vV;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Ea;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Ka;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Qa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Pa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return _a;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return $a;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return qa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Id;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return gd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Ad;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return td;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return ed;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return HV;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return id;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return ld;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return nd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return bd;
  }
};
function st(A) {
  if (cI.isDateTime(A))
    return A;
  if (A && A.valueOf && FA(A.valueOf()))
    return cI.fromJSDate(A);
  if (A && typeof A == "object")
    return cI.fromObject(A);
  throw new Rg(
    `Unknown datetime argument: ${A}, of type ${typeof A}`
  );
}
var Gn = [
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
  "SU"
], wg = (
  /** @class */
  function() {
    function A(I, C) {
      if (C === 0)
        throw new Error("Can't create weekday with n == 0");
      this.weekday = I, this.n = C;
    }
    return A.fromStr = function(I) {
      return new A(Gn.indexOf(I));
    }, A.prototype.nth = function(I) {
      return this.n === I ? this : new A(this.weekday, I);
    }, A.prototype.equals = function(I) {
      return this.weekday === I.weekday && this.n === I.n;
    }, A.prototype.toString = function() {
      var I = Gn[this.weekday];
      return this.n && (I = (this.n > 0 ? "+" : "") + String(this.n) + I), I;
    }, A.prototype.getJsWeekday = function() {
      return this.weekday === 6 ? 0 : this.weekday + 1;
    }, A;
  }()
), $I = function(A) {
  return A != null;
}, OC = function(A) {
  return typeof A == "number";
}, Ca = function(A) {
  return typeof A == "string" && Gn.includes(A);
}, qg = Array.isArray, PC = function(A, I) {
  I === void 0 && (I = A), arguments.length === 1 && (I = A, A = 0);
  for (var C = [], t = A; t < I; t++)
    C.push(t);
  return C;
}, sI = function(A, I) {
  var C = 0, t = [];
  if (qg(A))
    for (; C < I; C++)
      t[C] = [].concat(A);
  else
    for (; C < I; C++)
      t[C] = A;
  return t;
}, YW = function(A) {
  return qg(A) ? A : [A];
};
function Vc(A, I, C) {
  C === void 0 && (C = " ");
  var t = String(A);
  return I = I >> 0, t.length > I ? String(t) : (I = I - t.length, I > C.length && (C += sI(C, I / C.length)), C.slice(0, I) + String(t));
}
var fW = function(A, I, C) {
  var t = A.split(I);
  return C ? t.slice(0, C).concat([t.slice(C).join(I)]) : t;
}, oC = function(A, I) {
  var C = A % I;
  return C * I < 0 ? C + I : C;
}, $l = function(A, I) {
  return { div: Math.floor(A / I), mod: oC(A, I) };
}, DC = function(A) {
  return !$I(A) || A.length === 0;
}, ug = function(A) {
  return !DC(A);
}, HI = function(A, I) {
  return ug(A) && A.indexOf(I) !== -1;
}, $A = function(A, I, C, t, i, l) {
  return t === void 0 && (t = 0), i === void 0 && (i = 0), l === void 0 && (l = 0), new Date(Date.UTC(A, I - 1, C, t, i, l));
}, vW = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Md = 1e3 * 60 * 60 * 24, Dd = 9999, Ed = $A(1970, 1, 1), HW = [6, 0, 1, 2, 3, 4, 5], Rt = function(A) {
  return A % 4 === 0 && A % 100 !== 0 || A % 400 === 0;
}, Kd = function(A) {
  return A instanceof Date;
}, ht = function(A) {
  return Kd(A) && !isNaN(A.getTime());
}, NW = function(A, I) {
  var C = A.getTime(), t = I.getTime(), i = C - t;
  return Math.round(i / Md);
}, an = function(A) {
  return NW(A, Ed);
}, Qd = function(A) {
  return new Date(Ed.getTime() + A * Md);
}, wW = function(A) {
  var I = A.getUTCMonth();
  return I === 1 && Rt(A.getUTCFullYear()) ? 29 : vW[I];
}, fc = function(A) {
  return HW[A.getUTCDay()];
}, Aa = function(A, I) {
  var C = $A(A, I + 1, 1);
  return [fc(C), wW(C)];
}, Pd = function(A, I) {
  return I = I || A, new Date(Date.UTC(A.getUTCFullYear(), A.getUTCMonth(), A.getUTCDate(), I.getHours(), I.getMinutes(), I.getSeconds(), I.getMilliseconds()));
}, dn = function(A) {
  var I = new Date(A.getTime());
  return I;
}, ca = function(A) {
  for (var I = [], C = 0; C < A.length; C++)
    I.push(dn(A[C]));
  return I;
}, Yt = function(A) {
  A.sort(function(I, C) {
    return I.getTime() - C.getTime();
  });
}, Nn = function(A, I) {
  I === void 0 && (I = !0);
  var C = new Date(A);
  return [
    Vc(C.getUTCFullYear().toString(), 4, "0"),
    Vc(C.getUTCMonth() + 1, 2, "0"),
    Vc(C.getUTCDate(), 2, "0"),
    "T",
    Vc(C.getUTCHours(), 2, "0"),
    Vc(C.getUTCMinutes(), 2, "0"),
    Vc(C.getUTCSeconds(), 2, "0"),
    I ? "Z" : ""
  ].join("");
}, wn = function(A) {
  var I = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/, C = I.exec(A);
  if (!C)
    throw new Error("Invalid UNTIL value: ".concat(A));
  return new Date(Date.UTC(parseInt(C[1], 10), parseInt(C[2], 10) - 1, parseInt(C[3], 10), parseInt(C[5], 10) || 0, parseInt(C[6], 10) || 0, parseInt(C[7], 10) || 0));
}, ta = function(A, I) {
  var C = A.toLocaleString("sv-SE", { timeZone: I });
  return C.replace(" ", "T") + "Z";
}, LW = function(A, I) {
  var C = Intl.DateTimeFormat().resolvedOptions().timeZone, t = new Date(ta(A, C)), i = new Date(ta(A, I ?? "UTC")), l = i.getTime() - t.getTime();
  return new Date(A.getTime() - l);
}, yc = (
  /** @class */
  function() {
    function A(I, C) {
      this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = I, this.args = C, I === "between" ? (this.maxDate = C.inc ? C.before : new Date(C.before.getTime() - 1), this.minDate = C.inc ? C.after : new Date(C.after.getTime() + 1)) : I === "before" ? this.maxDate = C.inc ? C.dt : new Date(C.dt.getTime() - 1) : I === "after" && (this.minDate = C.inc ? C.dt : new Date(C.dt.getTime() + 1));
    }
    return A.prototype.accept = function(I) {
      ++this.total;
      var C = this.minDate && I < this.minDate, t = this.maxDate && I > this.maxDate;
      if (this.method === "between") {
        if (C)
          return !0;
        if (t)
          return !1;
      } else if (this.method === "before") {
        if (t)
          return !1;
      } else if (this.method === "after")
        return C ? !0 : (this.add(I), !1);
      return this.add(I);
    }, A.prototype.add = function(I) {
      return this._result.push(I), !0;
    }, A.prototype.getValue = function() {
      var I = this._result;
      switch (this.method) {
        case "all":
        case "between":
          return I;
        case "before":
        case "after":
        default:
          return I.length ? I[I.length - 1] : null;
      }
    }, A.prototype.clone = function() {
      return new A(this.method, this.args);
    }, A;
  }()
), rn = function(A, I) {
  return rn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, t) {
    C.__proto__ = t;
  } || function(C, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (C[i] = t[i]);
  }, rn(A, I);
};
function Ln(A, I) {
  if (typeof I != "function" && I !== null)
    throw new TypeError("Class extends value " + String(I) + " is not a constructor or null");
  rn(A, I);
  function C() {
    this.constructor = A;
  }
  A.prototype = I === null ? Object.create(I) : (C.prototype = I.prototype, new C());
}
var CC = function() {
  return CC = Object.assign || function(I) {
    for (var C, t = 1, i = arguments.length; t < i; t++) {
      C = arguments[t];
      for (var l in C) Object.prototype.hasOwnProperty.call(C, l) && (I[l] = C[l]);
    }
    return I;
  }, CC.apply(this, arguments);
};
function k(A, I, C) {
  if (C || arguments.length === 2) for (var t = 0, i = I.length, l; t < i; t++)
    (l || !(t in I)) && (l || (l = Array.prototype.slice.call(I, 0, t)), l[t] = I[t]);
  return A.concat(l || Array.prototype.slice.call(I));
}
var ea = (
  /** @class */
  function(A) {
    Ln(I, A);
    function I(C, t, i) {
      var l = A.call(this, C, t) || this;
      return l.iterator = i, l;
    }
    return I.prototype.add = function(C) {
      return this.iterator(C, this._result.length) ? (this._result.push(C), !0) : !1;
    }, I;
  }(yc)
), ei = {
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  tokens: {
    SKIP: /^[ \r\n\t]+|^\.$/,
    number: /^[1-9][0-9]*/,
    numberAsText: /^(one|two|three)/i,
    every: /^every/i,
    "day(s)": /^days?/i,
    "weekday(s)": /^weekdays?/i,
    "week(s)": /^weeks?/i,
    "hour(s)": /^hours?/i,
    "minute(s)": /^minutes?/i,
    "month(s)": /^months?/i,
    "year(s)": /^years?/i,
    on: /^(on|in)/i,
    at: /^(at)/i,
    the: /^the/i,
    first: /^first/i,
    second: /^second/i,
    third: /^third/i,
    nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
    last: /^last/i,
    for: /^for/i,
    "time(s)": /^times?/i,
    until: /^(un)?til/i,
    monday: /^mo(n(day)?)?/i,
    tuesday: /^tu(e(s(day)?)?)?/i,
    wednesday: /^we(d(n(esday)?)?)?/i,
    thursday: /^th(u(r(sday)?)?)?/i,
    friday: /^fr(i(day)?)?/i,
    saturday: /^sa(t(urday)?)?/i,
    sunday: /^su(n(day)?)?/i,
    january: /^jan(uary)?/i,
    february: /^feb(ruary)?/i,
    march: /^mar(ch)?/i,
    april: /^apr(il)?/i,
    may: /^may/i,
    june: /^june?/i,
    july: /^july?/i,
    august: /^aug(ust)?/i,
    september: /^sep(t(ember)?)?/i,
    october: /^oct(ober)?/i,
    november: /^nov(ember)?/i,
    december: /^dec(ember)?/i,
    comma: /^(,\s*|(and|or)\s*)+/i
  }
}, ia = function(A, I) {
  return A.indexOf(I) !== -1;
}, SW = function(A) {
  return A.toString();
}, JW = function(A, I, C) {
  return "".concat(I, " ").concat(C, ", ").concat(A);
}, uA = (
  /** @class */
  function() {
    function A(I, C, t, i) {
      if (C === void 0 && (C = SW), t === void 0 && (t = ei), i === void 0 && (i = JW), this.text = [], this.language = t || ei, this.gettext = C, this.dateFormatter = i, this.rrule = I, this.options = I.options, this.origOptions = I.origOptions, this.origOptions.bymonthday) {
        var l = [].concat(this.options.bymonthday), b = [].concat(this.options.bynmonthday);
        l.sort(function(s, o) {
          return s - o;
        }), b.sort(function(s, o) {
          return o - s;
        }), this.bymonthday = l.concat(b), this.bymonthday.length || (this.bymonthday = null);
      }
      if ($I(this.origOptions.byweekday)) {
        var u = qg(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday], G = String(u);
        this.byweekday = {
          allWeeks: u.filter(function(s) {
            return !s.n;
          }),
          someWeeks: u.filter(function(s) {
            return !!s.n;
          }),
          isWeekdays: G.indexOf("MO") !== -1 && G.indexOf("TU") !== -1 && G.indexOf("WE") !== -1 && G.indexOf("TH") !== -1 && G.indexOf("FR") !== -1 && G.indexOf("SA") === -1 && G.indexOf("SU") === -1,
          isEveryDay: G.indexOf("MO") !== -1 && G.indexOf("TU") !== -1 && G.indexOf("WE") !== -1 && G.indexOf("TH") !== -1 && G.indexOf("FR") !== -1 && G.indexOf("SA") !== -1 && G.indexOf("SU") !== -1
        };
        var X = function(s, o) {
          return s.weekday - o.weekday;
        };
        this.byweekday.allWeeks.sort(X), this.byweekday.someWeeks.sort(X), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
      } else
        this.byweekday = null;
    }
    return A.isFullyConvertible = function(I) {
      var C = !0;
      if (!(I.options.freq in A.IMPLEMENTED) || I.origOptions.until && I.origOptions.count)
        return !1;
      for (var t in I.origOptions) {
        if (ia(["dtstart", "tzid", "wkst", "freq"], t))
          return !0;
        if (!ia(A.IMPLEMENTED[I.options.freq], t))
          return !1;
      }
      return C;
    }, A.prototype.isFullyConvertible = function() {
      return A.isFullyConvertible(this.rrule);
    }, A.prototype.toString = function() {
      var I = this.gettext;
      if (!(this.options.freq in A.IMPLEMENTED))
        return I("RRule error: Unable to fully convert this rrule to text");
      if (this.text = [I("every")], this[II.FREQUENCIES[this.options.freq]](), this.options.until) {
        this.add(I("until"));
        var C = this.options.until;
        this.add(this.dateFormatter(C.getUTCFullYear(), this.language.monthNames[C.getUTCMonth()], C.getUTCDate()));
      } else this.options.count && this.add(I("for")).add(this.options.count.toString()).add(this.plural(this.options.count) ? I("times") : I("time"));
      return this.isFullyConvertible() || this.add(I("(~ approximate)")), this.text.join("");
    }, A.prototype.HOURLY = function() {
      var I = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? I("hours") : I("hour"));
    }, A.prototype.MINUTELY = function() {
      var I = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? I("minutes") : I("minute"));
    }, A.prototype.DAILY = function() {
      var I = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(this.plural(this.options.interval) ? I("weekdays") : I("weekday")) : this.add(this.plural(this.options.interval) ? I("days") : I("day")), this.origOptions.bymonth && (this.add(I("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour();
    }, A.prototype.WEEKLY = function() {
      var I = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? I("weeks") : I("week")), this.byweekday && this.byweekday.isWeekdays ? this.options.interval === 1 ? this.add(this.plural(this.options.interval) ? I("weekdays") : I("weekday")) : this.add(I("on")).add(I("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(this.plural(this.options.interval) ? I("days") : I("day")) : (this.options.interval === 1 && this.add(I("week")), this.origOptions.bymonth && (this.add(I("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.origOptions.byhour && this._byhour());
    }, A.prototype.MONTHLY = function() {
      var I = this.gettext;
      this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()).add(I("months")), this.plural(this.options.interval) && this.add(I("in"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? I("months") : I("month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(I("on")).add(I("weekdays")) : this.byweekday && this._byweekday();
    }, A.prototype.YEARLY = function() {
      var I = this.gettext;
      this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()), this.add(I("years"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? I("years") : I("year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(I("on the")).add(this.list(this.options.byyearday, this.nth, I("and"))).add(I("day")), this.options.byweekno && this.add(I("in")).add(this.plural(this.options.byweekno.length) ? I("weeks") : I("week")).add(this.list(this.options.byweekno, void 0, I("and")));
    }, A.prototype._bymonthday = function() {
      var I = this.gettext;
      this.byweekday && this.byweekday.allWeeks ? this.add(I("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, I("or"))).add(I("the")).add(this.list(this.bymonthday, this.nth, I("or"))) : this.add(I("on the")).add(this.list(this.bymonthday, this.nth, I("and")));
    }, A.prototype._byweekday = function() {
      var I = this.gettext;
      this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(I("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(I("and")), this.add(I("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, I("and"))));
    }, A.prototype._byhour = function() {
      var I = this.gettext;
      this.add(I("at")).add(this.list(this.origOptions.byhour, void 0, I("and")));
    }, A.prototype._bymonth = function() {
      this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
    }, A.prototype.nth = function(I) {
      I = parseInt(I.toString(), 10);
      var C, t = this.gettext;
      if (I === -1)
        return t("last");
      var i = Math.abs(I);
      switch (i) {
        case 1:
        case 21:
        case 31:
          C = i + t("st");
          break;
        case 2:
        case 22:
          C = i + t("nd");
          break;
        case 3:
        case 23:
          C = i + t("rd");
          break;
        default:
          C = i + t("th");
      }
      return I < 0 ? C + " " + t("last") : C;
    }, A.prototype.monthtext = function(I) {
      return this.language.monthNames[I - 1];
    }, A.prototype.weekdaytext = function(I) {
      var C = OC(I) ? (I + 1) % 7 : I.getJsWeekday();
      return (I.n ? this.nth(I.n) + " " : "") + this.language.dayNames[C];
    }, A.prototype.plural = function(I) {
      return I % 100 !== 1;
    }, A.prototype.add = function(I) {
      return this.text.push(" "), this.text.push(I), this;
    }, A.prototype.list = function(I, C, t, i) {
      var l = this;
      i === void 0 && (i = ","), qg(I) || (I = [I]);
      var b = function(G, X, s) {
        for (var o = "", R = 0; R < G.length; R++)
          R !== 0 && (R === G.length - 1 ? o += " " + s + " " : o += X + " "), o += G[R];
        return o;
      };
      C = C || function(G) {
        return G.toString();
      };
      var u = function(G) {
        return C && C.call(l, G);
      };
      return t ? b(I.map(u), i, t) : I.map(u).join(i + " ");
    }, A;
  }()
), kW = (
  /** @class */
  function() {
    function A(I) {
      this.done = !0, this.rules = I;
    }
    return A.prototype.start = function(I) {
      return this.text = I, this.done = !1, this.nextSymbol();
    }, A.prototype.isDone = function() {
      return this.done && this.symbol === null;
    }, A.prototype.nextSymbol = function() {
      var I, C;
      this.symbol = null, this.value = null;
      do {
        if (this.done)
          return !1;
        var t = void 0;
        I = null;
        for (var i in this.rules) {
          t = this.rules[i];
          var l = t.exec(this.text);
          l && (I === null || l[0].length > I[0].length) && (I = l, C = i);
        }
        if (I != null && (this.text = this.text.substr(I[0].length), this.text === "" && (this.done = !0)), I == null) {
          this.done = !0, this.symbol = null, this.value = null;
          return;
        }
      } while (C === "SKIP");
      return this.symbol = C, this.value = I, !0;
    }, A.prototype.accept = function(I) {
      if (this.symbol === I) {
        if (this.value) {
          var C = this.value;
          return this.nextSymbol(), C;
        }
        return this.nextSymbol(), !0;
      }
      return !1;
    }, A.prototype.acceptNumber = function() {
      return this.accept("number");
    }, A.prototype.expect = function(I) {
      if (this.accept(I))
        return !0;
      throw new Error("expected " + I + " but found " + this.symbol);
    }, A;
  }()
);
function _d(A, I) {
  I === void 0 && (I = ei);
  var C = {}, t = new kW(I.tokens);
  if (!t.start(A))
    return null;
  return i(), C;
  function i() {
    t.expect("every");
    var R = t.acceptNumber();
    if (R && (C.interval = parseInt(R[0], 10)), t.isDone())
      throw new Error("Unexpected end");
    switch (t.symbol) {
      case "day(s)":
        C.freq = II.DAILY, t.nextSymbol() && (b(), o());
        break;
      case "weekday(s)":
        C.freq = II.WEEKLY, C.byweekday = [II.MO, II.TU, II.WE, II.TH, II.FR], t.nextSymbol(), b(), o();
        break;
      case "week(s)":
        C.freq = II.WEEKLY, t.nextSymbol() && (l(), b(), o());
        break;
      case "hour(s)":
        C.freq = II.HOURLY, t.nextSymbol() && (l(), o());
        break;
      case "minute(s)":
        C.freq = II.MINUTELY, t.nextSymbol() && (l(), o());
        break;
      case "month(s)":
        C.freq = II.MONTHLY, t.nextSymbol() && (l(), o());
        break;
      case "year(s)":
        C.freq = II.YEARLY, t.nextSymbol() && (l(), o());
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        C.freq = II.WEEKLY;
        var m = t.symbol.substr(0, 2).toUpperCase();
        if (C.byweekday = [II[m]], !t.nextSymbol())
          return;
        for (; t.accept("comma"); ) {
          if (t.isDone())
            throw new Error("Unexpected end");
          var F = G();
          if (!F)
            throw new Error("Unexpected symbol " + t.symbol + ", expected weekday");
          C.byweekday.push(II[F]), t.nextSymbol();
        }
        b(), s(), o();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        if (C.freq = II.YEARLY, C.bymonth = [u()], !t.nextSymbol())
          return;
        for (; t.accept("comma"); ) {
          if (t.isDone())
            throw new Error("Unexpected end");
          var x = u();
          if (!x)
            throw new Error("Unexpected symbol " + t.symbol + ", expected month");
          C.bymonth.push(x), t.nextSymbol();
        }
        l(), o();
        break;
      default:
        throw new Error("Unknown symbol");
    }
  }
  function l() {
    var R = t.accept("on"), m = t.accept("the");
    if (R || m)
      do {
        var F = X(), x = G(), p = u();
        if (F)
          x ? (t.nextSymbol(), C.byweekday || (C.byweekday = []), C.byweekday.push(II[x].nth(F))) : (C.bymonthday || (C.bymonthday = []), C.bymonthday.push(F), t.accept("day(s)"));
        else if (x)
          t.nextSymbol(), C.byweekday || (C.byweekday = []), C.byweekday.push(II[x]);
        else if (t.symbol === "weekday(s)")
          t.nextSymbol(), C.byweekday || (C.byweekday = [II.MO, II.TU, II.WE, II.TH, II.FR]);
        else if (t.symbol === "week(s)") {
          t.nextSymbol();
          var H = t.acceptNumber();
          if (!H)
            throw new Error("Unexpected symbol " + t.symbol + ", expected week number");
          for (C.byweekno = [parseInt(H[0], 10)]; t.accept("comma"); ) {
            if (H = t.acceptNumber(), !H)
              throw new Error("Unexpected symbol " + t.symbol + "; expected monthday");
            C.byweekno.push(parseInt(H[0], 10));
          }
        } else if (p)
          t.nextSymbol(), C.bymonth || (C.bymonth = []), C.bymonth.push(p);
        else
          return;
      } while (t.accept("comma") || t.accept("the") || t.accept("on"));
  }
  function b() {
    var R = t.accept("at");
    if (R)
      do {
        var m = t.acceptNumber();
        if (!m)
          throw new Error("Unexpected symbol " + t.symbol + ", expected hour");
        for (C.byhour = [parseInt(m[0], 10)]; t.accept("comma"); ) {
          if (m = t.acceptNumber(), !m)
            throw new Error("Unexpected symbol " + t.symbol + "; expected hour");
          C.byhour.push(parseInt(m[0], 10));
        }
      } while (t.accept("comma") || t.accept("at"));
  }
  function u() {
    switch (t.symbol) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return !1;
    }
  }
  function G() {
    switch (t.symbol) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return t.symbol.substr(0, 2).toUpperCase();
      default:
        return !1;
    }
  }
  function X() {
    switch (t.symbol) {
      case "last":
        return t.nextSymbol(), -1;
      case "first":
        return t.nextSymbol(), 1;
      case "second":
        return t.nextSymbol(), t.accept("last") ? -2 : 2;
      case "third":
        return t.nextSymbol(), t.accept("last") ? -3 : 3;
      case "nth":
        var R = parseInt(t.value[1], 10);
        if (R < -366 || R > 366)
          throw new Error("Nth out of range: " + R);
        return t.nextSymbol(), t.accept("last") ? -R : R;
      default:
        return !1;
    }
  }
  function s() {
    t.accept("on"), t.accept("the");
    var R = X();
    if (R)
      for (C.bymonthday = [R], t.nextSymbol(); t.accept("comma"); ) {
        if (R = X(), !R)
          throw new Error("Unexpected symbol " + t.symbol + "; expected monthday");
        C.bymonthday.push(R), t.nextSymbol();
      }
  }
  function o() {
    if (t.symbol === "until") {
      var R = Date.parse(t.text);
      if (!R)
        throw new Error("Cannot parse until date:" + t.text);
      C.until = new Date(R);
    } else t.accept("for") && (C.count = parseInt(t.value[0], 10), t.expect("number"));
  }
}
var ZI;
(function(A) {
  A[A.YEARLY = 0] = "YEARLY", A[A.MONTHLY = 1] = "MONTHLY", A[A.WEEKLY = 2] = "WEEKLY", A[A.DAILY = 3] = "DAILY", A[A.HOURLY = 4] = "HOURLY", A[A.MINUTELY = 5] = "MINUTELY", A[A.SECONDLY = 6] = "SECONDLY";
})(ZI || (ZI = {}));
function Sn(A) {
  return A < ZI.HOURLY;
}
var zW = function(A, I) {
  return I === void 0 && (I = ei), new II(_d(A, I) || void 0);
}, Tc = [
  "count",
  "until",
  "interval",
  "byweekday",
  "bymonthday",
  "bymonth"
];
uA.IMPLEMENTED = [];
uA.IMPLEMENTED[ZI.HOURLY] = Tc;
uA.IMPLEMENTED[ZI.MINUTELY] = Tc;
uA.IMPLEMENTED[ZI.DAILY] = ["byhour"].concat(Tc);
uA.IMPLEMENTED[ZI.WEEKLY] = Tc;
uA.IMPLEMENTED[ZI.MONTHLY] = Tc;
uA.IMPLEMENTED[ZI.YEARLY] = ["byweekno", "byyearday"].concat(Tc);
var UW = function(A, I, C, t) {
  return new uA(A, I, C, t).toString();
}, TW = uA.isFullyConvertible, ii = (
  /** @class */
  function() {
    function A(I, C, t, i) {
      this.hour = I, this.minute = C, this.second = t, this.millisecond = i || 0;
    }
    return A.prototype.getHours = function() {
      return this.hour;
    }, A.prototype.getMinutes = function() {
      return this.minute;
    }, A.prototype.getSeconds = function() {
      return this.second;
    }, A.prototype.getMilliseconds = function() {
      return this.millisecond;
    }, A.prototype.getTime = function() {
      return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 + this.millisecond;
    }, A;
  }()
), OW = (
  /** @class */
  function(A) {
    Ln(I, A);
    function I(C, t, i, l, b, u, G) {
      var X = A.call(this, l, b, u, G) || this;
      return X.year = C, X.month = t, X.day = i, X;
    }
    return I.fromDate = function(C) {
      return new this(C.getUTCFullYear(), C.getUTCMonth() + 1, C.getUTCDate(), C.getUTCHours(), C.getUTCMinutes(), C.getUTCSeconds(), C.valueOf() % 1e3);
    }, I.prototype.getWeekday = function() {
      return fc(new Date(this.getTime()));
    }, I.prototype.getTime = function() {
      return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
    }, I.prototype.getDay = function() {
      return this.day;
    }, I.prototype.getMonth = function() {
      return this.month;
    }, I.prototype.getYear = function() {
      return this.year;
    }, I.prototype.addYears = function(C) {
      this.year += C;
    }, I.prototype.addMonths = function(C) {
      if (this.month += C, this.month > 12) {
        var t = Math.floor(this.month / 12), i = oC(this.month, 12);
        this.month = i, this.year += t, this.month === 0 && (this.month = 12, --this.year);
      }
    }, I.prototype.addWeekly = function(C, t) {
      t > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - t)) + C * 7 : this.day += -(this.getWeekday() - t) + C * 7, this.fixDay();
    }, I.prototype.addDaily = function(C) {
      this.day += C, this.fixDay();
    }, I.prototype.addHours = function(C, t, i) {
      for (t && (this.hour += Math.floor((23 - this.hour) / C) * C); ; ) {
        this.hour += C;
        var l = $l(this.hour, 24), b = l.div, u = l.mod;
        if (b && (this.hour = u, this.addDaily(b)), DC(i) || HI(i, this.hour))
          break;
      }
    }, I.prototype.addMinutes = function(C, t, i, l) {
      for (t && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / C) * C); ; ) {
        this.minute += C;
        var b = $l(this.minute, 60), u = b.div, G = b.mod;
        if (u && (this.minute = G, this.addHours(u, !1, i)), (DC(i) || HI(i, this.hour)) && (DC(l) || HI(l, this.minute)))
          break;
      }
    }, I.prototype.addSeconds = function(C, t, i, l, b) {
      for (t && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / C) * C); ; ) {
        this.second += C;
        var u = $l(this.second, 60), G = u.div, X = u.mod;
        if (G && (this.second = X, this.addMinutes(G, !1, i, l)), (DC(i) || HI(i, this.hour)) && (DC(l) || HI(l, this.minute)) && (DC(b) || HI(b, this.second)))
          break;
      }
    }, I.prototype.fixDay = function() {
      if (!(this.day <= 28)) {
        var C = Aa(this.year, this.month - 1)[1];
        if (!(this.day <= C))
          for (; this.day > C; ) {
            if (this.day -= C, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > Dd))
              return;
            C = Aa(this.year, this.month - 1)[1];
          }
      }
    }, I.prototype.add = function(C, t) {
      var i = C.freq, l = C.interval, b = C.wkst, u = C.byhour, G = C.byminute, X = C.bysecond;
      switch (i) {
        case ZI.YEARLY:
          return this.addYears(l);
        case ZI.MONTHLY:
          return this.addMonths(l);
        case ZI.WEEKLY:
          return this.addWeekly(l, b);
        case ZI.DAILY:
          return this.addDaily(l);
        case ZI.HOURLY:
          return this.addHours(l, t, u);
        case ZI.MINUTELY:
          return this.addMinutes(l, t, u, G);
        case ZI.SECONDLY:
          return this.addSeconds(l, t, u, G, X);
      }
    }, I;
  }(ii)
);
function $d(A) {
  for (var I = [], C = Object.keys(A), t = 0, i = C; t < i.length; t++) {
    var l = i[t];
    HI(oy, l) || I.push(l), Kd(A[l]) && !ht(A[l]) && I.push(l);
  }
  if (I.length)
    throw new Error("Invalid options: " + I.join(", "));
  return CC({}, A);
}
function jW(A) {
  var I = CC(CC({}, Jn), $d(A));
  if ($I(I.byeaster) && (I.freq = II.YEARLY), !($I(I.freq) && II.FREQUENCIES[I.freq]))
    throw new Error("Invalid frequency: ".concat(I.freq, " ").concat(A.freq));
  if (I.dtstart || (I.dtstart = new Date((/* @__PURE__ */ new Date()).setMilliseconds(0))), $I(I.wkst) ? OC(I.wkst) || (I.wkst = I.wkst.weekday) : I.wkst = II.MO.weekday, $I(I.bysetpos)) {
    OC(I.bysetpos) && (I.bysetpos = [I.bysetpos]);
    for (var C = 0; C < I.bysetpos.length; C++) {
      var t = I.bysetpos[C];
      if (t === 0 || !(t >= -366 && t <= 366))
        throw new Error("bysetpos must be between 1 and 366, or between -366 and -1");
    }
  }
  if (!(I.byweekno || ug(I.byweekno) || ug(I.byyearday) || I.bymonthday || ug(I.bymonthday) || $I(I.byweekday) || $I(I.byeaster)))
    switch (I.freq) {
      case II.YEARLY:
        I.bymonth || (I.bymonth = I.dtstart.getUTCMonth() + 1), I.bymonthday = I.dtstart.getUTCDate();
        break;
      case II.MONTHLY:
        I.bymonthday = I.dtstart.getUTCDate();
        break;
      case II.WEEKLY:
        I.byweekday = [fc(I.dtstart)];
        break;
    }
  if ($I(I.bymonth) && !qg(I.bymonth) && (I.bymonth = [I.bymonth]), $I(I.byyearday) && !qg(I.byyearday) && OC(I.byyearday) && (I.byyearday = [I.byyearday]), !$I(I.bymonthday))
    I.bymonthday = [], I.bynmonthday = [];
  else if (qg(I.bymonthday)) {
    for (var i = [], l = [], C = 0; C < I.bymonthday.length; C++) {
      var t = I.bymonthday[C];
      t > 0 ? i.push(t) : t < 0 && l.push(t);
    }
    I.bymonthday = i, I.bynmonthday = l;
  } else I.bymonthday < 0 ? (I.bynmonthday = [I.bymonthday], I.bymonthday = []) : (I.bynmonthday = [], I.bymonthday = [I.bymonthday]);
  if ($I(I.byweekno) && !qg(I.byweekno) && (I.byweekno = [I.byweekno]), !$I(I.byweekday))
    I.bynweekday = null;
  else if (OC(I.byweekday))
    I.byweekday = [I.byweekday], I.bynweekday = null;
  else if (Ca(I.byweekday))
    I.byweekday = [wg.fromStr(I.byweekday).weekday], I.bynweekday = null;
  else if (I.byweekday instanceof wg)
    !I.byweekday.n || I.freq > II.MONTHLY ? (I.byweekday = [I.byweekday.weekday], I.bynweekday = null) : (I.bynweekday = [[I.byweekday.weekday, I.byweekday.n]], I.byweekday = null);
  else {
    for (var b = [], u = [], C = 0; C < I.byweekday.length; C++) {
      var G = I.byweekday[C];
      if (OC(G)) {
        b.push(G);
        continue;
      } else if (Ca(G)) {
        b.push(wg.fromStr(G).weekday);
        continue;
      }
      !G.n || I.freq > II.MONTHLY ? b.push(G.weekday) : u.push([G.weekday, G.n]);
    }
    I.byweekday = ug(b) ? b : null, I.bynweekday = ug(u) ? u : null;
  }
  return $I(I.byhour) ? OC(I.byhour) && (I.byhour = [I.byhour]) : I.byhour = I.freq < II.HOURLY ? [I.dtstart.getUTCHours()] : null, $I(I.byminute) ? OC(I.byminute) && (I.byminute = [I.byminute]) : I.byminute = I.freq < II.MINUTELY ? [I.dtstart.getUTCMinutes()] : null, $I(I.bysecond) ? OC(I.bysecond) && (I.bysecond = [I.bysecond]) : I.bysecond = I.freq < II.SECONDLY ? [I.dtstart.getUTCSeconds()] : null, { parsedOptions: I };
}
function MW(A) {
  var I = A.dtstart.getTime() % 1e3;
  if (!Sn(A.freq))
    return [];
  var C = [];
  return A.byhour.forEach(function(t) {
    A.byminute.forEach(function(i) {
      A.bysecond.forEach(function(l) {
        C.push(new ii(t, i, l, I));
      });
    });
  }), C;
}
function Xn(A) {
  var I = A.split(`
`).map(DW).filter(function(C) {
    return C !== null;
  });
  return CC(CC({}, I[0]), I[1]);
}
function li(A) {
  var I = {}, C = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(A);
  if (!C)
    return I;
  var t = C[1], i = C[2];
  return t && (I.tzid = t), I.dtstart = wn(i), I;
}
function DW(A) {
  if (A = A.replace(/^\s+|\s+$/, ""), !A.length)
    return null;
  var I = /^([A-Z]+?)[:;]/.exec(A.toUpperCase());
  if (!I)
    return la(A);
  var C = I[1];
  switch (C.toUpperCase()) {
    case "RRULE":
    case "EXRULE":
      return la(A);
    case "DTSTART":
      return li(A);
    default:
      throw new Error("Unsupported RFC prop ".concat(C, " in ").concat(A));
  }
}
function la(A) {
  var I = A.replace(/^RRULE:/i, ""), C = li(I), t = A.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
  return t.forEach(function(i) {
    var l = i.split("="), b = l[0], u = l[1];
    switch (b.toUpperCase()) {
      case "FREQ":
        C.freq = ZI[u.toUpperCase()];
        break;
      case "WKST":
        C.wkst = wC[u.toUpperCase()];
        break;
      case "COUNT":
      case "INTERVAL":
      case "BYSETPOS":
      case "BYMONTH":
      case "BYMONTHDAY":
      case "BYYEARDAY":
      case "BYWEEKNO":
      case "BYHOUR":
      case "BYMINUTE":
      case "BYSECOND":
        var G = EW(u), X = b.toLowerCase();
        C[X] = G;
        break;
      case "BYWEEKDAY":
      case "BYDAY":
        C.byweekday = KW(u);
        break;
      case "DTSTART":
      case "TZID":
        var s = li(A);
        C.tzid = s.tzid, C.dtstart = s.dtstart;
        break;
      case "UNTIL":
        C.until = wn(u);
        break;
      case "BYEASTER":
        C.byeaster = Number(u);
        break;
      default:
        throw new Error("Unknown RRULE property '" + b + "'");
    }
  }), C;
}
function EW(A) {
  if (A.indexOf(",") !== -1) {
    var I = A.split(",");
    return I.map(na);
  }
  return na(A);
}
function na(A) {
  return /^[+-]?\d+$/.test(A) ? Number(A) : A;
}
function KW(A) {
  var I = A.split(",");
  return I.map(function(C) {
    if (C.length === 2)
      return wC[C];
    var t = C.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
    if (!t || t.length < 3)
      throw new SyntaxError("Invalid weekday string: ".concat(C));
    var i = Number(t[1]), l = t[2], b = wC[l].weekday;
    return new wg(b, i);
  });
}
var ni = (
  /** @class */
  function() {
    function A(I, C) {
      if (isNaN(I.getTime()))
        throw new RangeError("Invalid date passed to DateWithZone");
      this.date = I, this.tzid = C;
    }
    return Object.defineProperty(A.prototype, "isUTC", {
      get: function() {
        return !this.tzid || this.tzid.toUpperCase() === "UTC";
      },
      enumerable: !1,
      configurable: !0
    }), A.prototype.toString = function() {
      var I = Nn(this.date.getTime(), this.isUTC);
      return this.isUTC ? ":".concat(I) : ";TZID=".concat(this.tzid, ":").concat(I);
    }, A.prototype.getTime = function() {
      return this.date.getTime();
    }, A.prototype.rezonedDate = function() {
      return this.isUTC ? this.date : LW(this.date, this.tzid);
    }, A;
  }()
);
function sn(A) {
  for (var I = [], C = "", t = Object.keys(A), i = Object.keys(Jn), l = 0; l < t.length; l++)
    if (t[l] !== "tzid" && HI(i, t[l])) {
      var b = t[l].toUpperCase(), u = A[t[l]], G = "";
      if (!(!$I(u) || qg(u) && !u.length)) {
        switch (b) {
          case "FREQ":
            G = II.FREQUENCIES[A.freq];
            break;
          case "WKST":
            OC(u) ? G = new wg(u).toString() : G = u.toString();
            break;
          case "BYWEEKDAY":
            b = "BYDAY", G = YW(u).map(function(m) {
              return m instanceof wg ? m : qg(m) ? new wg(m[0], m[1]) : new wg(m);
            }).toString();
            break;
          case "DTSTART":
            C = QW(u, A.tzid);
            break;
          case "UNTIL":
            G = Nn(u, !A.tzid);
            break;
          default:
            if (qg(u)) {
              for (var X = [], s = 0; s < u.length; s++)
                X[s] = String(u[s]);
              G = X.toString();
            } else
              G = String(u);
        }
        G && I.push([b, G]);
      }
    }
  var o = I.map(function(m) {
    var F = m[0], x = m[1];
    return "".concat(F, "=").concat(x.toString());
  }).join(";"), R = "";
  return o !== "" && (R = "RRULE:".concat(o)), [C, R].filter(function(m) {
    return !!m;
  }).join(`
`);
}
function QW(A, I) {
  return A ? "DTSTART" + new ni(new Date(A), I).toString() : "";
}
function PW(A, I) {
  return Array.isArray(A) ? !Array.isArray(I) || A.length !== I.length ? !1 : A.every(function(C, t) {
    return C.getTime() === I[t].getTime();
  }) : A instanceof Date ? I instanceof Date && A.getTime() === I.getTime() : A === I;
}
var _W = (
  /** @class */
  function() {
    function A() {
      this.all = !1, this.before = [], this.after = [], this.between = [];
    }
    return A.prototype._cacheAdd = function(I, C, t) {
      C && (C = C instanceof Date ? dn(C) : ca(C)), I === "all" ? this.all = C : (t._value = C, this[I].push(t));
    }, A.prototype._cacheGet = function(I, C) {
      var t = !1, i = C ? Object.keys(C) : [], l = function(s) {
        for (var o = 0; o < i.length; o++) {
          var R = i[o];
          if (!PW(C[R], s[R]))
            return !0;
        }
        return !1;
      }, b = this[I];
      if (I === "all")
        t = this.all;
      else if (qg(b))
        for (var u = 0; u < b.length; u++) {
          var G = b[u];
          if (!(i.length && l(G))) {
            t = G._value;
            break;
          }
        }
      if (!t && this.all) {
        for (var X = new yc(I, C), u = 0; u < this.all.length && X.accept(this.all[u]); u++)
          ;
        t = X.getValue(), this._cacheAdd(I, t, C);
      }
      return qg(t) ? ca(t) : t instanceof Date ? dn(t) : t;
    }, A;
  }()
), $W = k(k(k(k(k(k(k(k(k(k(k(k(k([], sI(1, 31), !0), sI(2, 28), !0), sI(3, 31), !0), sI(4, 30), !0), sI(5, 31), !0), sI(6, 30), !0), sI(7, 31), !0), sI(8, 31), !0), sI(9, 30), !0), sI(10, 31), !0), sI(11, 30), !0), sI(12, 31), !0), sI(1, 7), !0), qW = k(k(k(k(k(k(k(k(k(k(k(k(k([], sI(1, 31), !0), sI(2, 29), !0), sI(3, 31), !0), sI(4, 30), !0), sI(5, 31), !0), sI(6, 30), !0), sI(7, 31), !0), sI(8, 31), !0), sI(9, 30), !0), sI(10, 31), !0), sI(11, 30), !0), sI(12, 31), !0), sI(1, 7), !0), Iy = PC(1, 29), gy = PC(1, 30), xA = PC(1, 31), Wg = PC(1, 32), Cy = k(k(k(k(k(k(k(k(k(k(k(k(k([], Wg, !0), gy, !0), Wg, !0), xA, !0), Wg, !0), xA, !0), Wg, !0), Wg, !0), xA, !0), Wg, !0), xA, !0), Wg, !0), Wg.slice(0, 7), !0), Ay = k(k(k(k(k(k(k(k(k(k(k(k(k([], Wg, !0), Iy, !0), Wg, !0), xA, !0), Wg, !0), xA, !0), Wg, !0), Wg, !0), xA, !0), Wg, !0), xA, !0), Wg, !0), Wg.slice(0, 7), !0), cy = PC(-28, 0), ty = PC(-29, 0), pA = PC(-30, 0), yg = PC(-31, 0), ey = k(k(k(k(k(k(k(k(k(k(k(k(k([], yg, !0), ty, !0), yg, !0), pA, !0), yg, !0), pA, !0), yg, !0), yg, !0), pA, !0), yg, !0), pA, !0), yg, !0), yg.slice(0, 7), !0), iy = k(k(k(k(k(k(k(k(k(k(k(k(k([], yg, !0), cy, !0), yg, !0), pA, !0), yg, !0), pA, !0), yg, !0), yg, !0), pA, !0), yg, !0), pA, !0), yg, !0), yg.slice(0, 7), !0), ly = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366], ny = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], ba = function() {
  for (var A = [], I = 0; I < 55; I++)
    A = A.concat(PC(7));
  return A;
}();
function by(A, I) {
  var C = $A(A, 1, 1), t = Rt(A) ? 366 : 365, i = Rt(A + 1) ? 366 : 365, l = an(C), b = fc(C), u = CC(CC({ yearlen: t, nextyearlen: i, yearordinal: l, yearweekday: b }, uy(A)), { wnomask: null });
  if (DC(I.byweekno))
    return u;
  u.wnomask = sI(0, t + 7);
  var G, X, s = G = oC(7 - b + I.wkst, 7);
  s >= 4 ? (s = 0, X = u.yearlen + oC(b - I.wkst, 7)) : X = t - s;
  for (var o = Math.floor(X / 7), R = oC(X, 7), m = Math.floor(o + R / 4), F = 0; F < I.byweekno.length; F++) {
    var x = I.byweekno[F];
    if (x < 0 && (x += m + 1), x > 0 && x <= m) {
      var p = void 0;
      x > 1 ? (p = s + (x - 1) * 7, s !== G && (p -= 7 - G)) : p = s;
      for (var H = 0; H < 7 && (u.wnomask[p] = 1, p++, u.wdaymask[p] !== I.wkst); H++)
        ;
    }
  }
  if (HI(I.byweekno, 1)) {
    var p = s + m * 7;
    if (s !== G && (p -= 7 - G), p < t)
      for (var F = 0; F < 7 && (u.wnomask[p] = 1, p += 1, u.wdaymask[p] !== I.wkst); F++)
        ;
  }
  if (s) {
    var J = void 0;
    if (HI(I.byweekno, -1))
      J = -1;
    else {
      var z = fc($A(A - 1, 1, 1)), S = oC(7 - z.valueOf() + I.wkst, 7), Y = Rt(A - 1) ? 366 : 365, M = void 0;
      S >= 4 ? (S = 0, M = Y + oC(z - I.wkst, 7)) : M = t - s, J = Math.floor(52 + oC(M, 7) / 4);
    }
    if (HI(I.byweekno, J))
      for (var p = 0; p < s; p++)
        u.wnomask[p] = 1;
  }
  return u;
}
function uy(A) {
  var I = Rt(A) ? 366 : 365, C = $A(A, 1, 1), t = fc(C);
  return I === 365 ? {
    mmask: $W,
    mdaymask: Ay,
    nmdaymask: iy,
    wdaymask: ba.slice(t),
    mrange: ny
  } : {
    mmask: qW,
    mdaymask: Cy,
    nmdaymask: ey,
    wdaymask: ba.slice(t),
    mrange: ly
  };
}
function Gy(A, I, C, t, i, l) {
  var b = {
    lastyear: A,
    lastmonth: I,
    nwdaymask: []
  }, u = [];
  if (l.freq === II.YEARLY)
    if (DC(l.bymonth))
      u = [[0, C]];
    else
      for (var G = 0; G < l.bymonth.length; G++)
        I = l.bymonth[G], u.push(t.slice(I - 1, I + 1));
  else l.freq === II.MONTHLY && (u = [t.slice(I - 1, I + 1)]);
  if (DC(u))
    return b;
  b.nwdaymask = sI(0, C);
  for (var G = 0; G < u.length; G++)
    for (var X = u[G], s = X[0], o = X[1] - 1, R = 0; R < l.bynweekday.length; R++) {
      var m = void 0, F = l.bynweekday[R], x = F[0], p = F[1];
      p < 0 ? (m = o + (p + 1) * 7, m -= oC(i[m] - x, 7)) : (m = s + (p - 1) * 7, m += oC(7 - i[m] + x, 7)), s <= m && m <= o && (b.nwdaymask[m] = 1);
    }
  return b;
}
function ay(A, I) {
  I === void 0 && (I = 0);
  var C = A % 19, t = Math.floor(A / 100), i = A % 100, l = Math.floor(t / 4), b = t % 4, u = Math.floor((t + 8) / 25), G = Math.floor((t - u + 1) / 3), X = Math.floor(19 * C + t - l - G + 15) % 30, s = Math.floor(i / 4), o = i % 4, R = Math.floor(32 + 2 * b + 2 * s - X - o) % 7, m = Math.floor((C + 11 * X + 22 * R) / 451), F = Math.floor((X + R - 7 * m + 114) / 31), x = (X + R - 7 * m + 114) % 31 + 1, p = Date.UTC(A, F - 1, x + I), H = Date.UTC(A, 0, 1);
  return [Math.ceil((p - H) / (1e3 * 60 * 60 * 24))];
}
var dy = (
  /** @class */
  function() {
    function A(I) {
      this.options = I;
    }
    return A.prototype.rebuild = function(I, C) {
      var t = this.options;
      if (I !== this.lastyear && (this.yearinfo = by(I, t)), ug(t.bynweekday) && (C !== this.lastmonth || I !== this.lastyear)) {
        var i = this.yearinfo, l = i.yearlen, b = i.mrange, u = i.wdaymask;
        this.monthinfo = Gy(I, C, l, b, u, t);
      }
      $I(t.byeaster) && (this.eastermask = ay(I, t.byeaster));
    }, Object.defineProperty(A.prototype, "lastyear", {
      get: function() {
        return this.monthinfo ? this.monthinfo.lastyear : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "lastmonth", {
      get: function() {
        return this.monthinfo ? this.monthinfo.lastmonth : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "yearlen", {
      get: function() {
        return this.yearinfo.yearlen;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "yearordinal", {
      get: function() {
        return this.yearinfo.yearordinal;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "mrange", {
      get: function() {
        return this.yearinfo.mrange;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "wdaymask", {
      get: function() {
        return this.yearinfo.wdaymask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "mmask", {
      get: function() {
        return this.yearinfo.mmask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "wnomask", {
      get: function() {
        return this.yearinfo.wnomask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "nwdaymask", {
      get: function() {
        return this.monthinfo ? this.monthinfo.nwdaymask : [];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "nextyearlen", {
      get: function() {
        return this.yearinfo.nextyearlen;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "mdaymask", {
      get: function() {
        return this.yearinfo.mdaymask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(A.prototype, "nmdaymask", {
      get: function() {
        return this.yearinfo.nmdaymask;
      },
      enumerable: !1,
      configurable: !0
    }), A.prototype.ydayset = function() {
      return [PC(this.yearlen), 0, this.yearlen];
    }, A.prototype.mdayset = function(I, C) {
      for (var t = this.mrange[C - 1], i = this.mrange[C], l = sI(null, this.yearlen), b = t; b < i; b++)
        l[b] = b;
      return [l, t, i];
    }, A.prototype.wdayset = function(I, C, t) {
      for (var i = sI(null, this.yearlen + 7), l = an($A(I, C, t)) - this.yearordinal, b = l, u = 0; u < 7 && (i[l] = l, ++l, this.wdaymask[l] !== this.options.wkst); u++)
        ;
      return [i, b, l];
    }, A.prototype.ddayset = function(I, C, t) {
      var i = sI(null, this.yearlen), l = an($A(I, C, t)) - this.yearordinal;
      return i[l] = l, [i, l, l + 1];
    }, A.prototype.htimeset = function(I, C, t, i) {
      var l = this, b = [];
      return this.options.byminute.forEach(function(u) {
        b = b.concat(l.mtimeset(I, u, t, i));
      }), Yt(b), b;
    }, A.prototype.mtimeset = function(I, C, t, i) {
      var l = this.options.bysecond.map(function(b) {
        return new ii(I, C, b, i);
      });
      return Yt(l), l;
    }, A.prototype.stimeset = function(I, C, t, i) {
      return [new ii(I, C, t, i)];
    }, A.prototype.getdayset = function(I) {
      switch (I) {
        case ZI.YEARLY:
          return this.ydayset.bind(this);
        case ZI.MONTHLY:
          return this.mdayset.bind(this);
        case ZI.WEEKLY:
          return this.wdayset.bind(this);
        case ZI.DAILY:
          return this.ddayset.bind(this);
        default:
          return this.ddayset.bind(this);
      }
    }, A.prototype.gettimeset = function(I) {
      switch (I) {
        case ZI.HOURLY:
          return this.htimeset.bind(this);
        case ZI.MINUTELY:
          return this.mtimeset.bind(this);
        case ZI.SECONDLY:
          return this.stimeset.bind(this);
      }
    }, A;
  }()
);
function ry(A, I, C, t, i, l) {
  for (var b = [], u = 0; u < A.length; u++) {
    var G = void 0, X = void 0, s = A[u];
    s < 0 ? (G = Math.floor(s / I.length), X = oC(s, I.length)) : (G = Math.floor((s - 1) / I.length), X = oC(s - 1, I.length));
    for (var o = [], R = C; R < t; R++) {
      var m = l[R];
      $I(m) && o.push(m);
    }
    var F = void 0;
    G < 0 ? F = o.slice(G)[0] : F = o[G];
    var x = I[X], p = Qd(i.yearordinal + F), H = Pd(p, x);
    HI(b, H) || b.push(H);
  }
  return Yt(b), b;
}
function qd(A, I) {
  var C = I.dtstart, t = I.freq, i = I.interval, l = I.until, b = I.bysetpos, u = I.count;
  if (u === 0 || i === 0)
    return lA(A);
  var G = OW.fromDate(C), X = new dy(I);
  X.rebuild(G.year, G.month);
  for (var s = Zy(X, G, I); ; ) {
    var o = X.getdayset(t)(G.year, G.month, G.day), R = o[0], m = o[1], F = o[2], x = sy(R, m, F, X, I);
    if (ug(b))
      for (var p = ry(b, s, m, F, X, R), H = 0; H < p.length; H++) {
        var J = p[H];
        if (l && J > l)
          return lA(A);
        if (J >= C) {
          var z = ua(J, I);
          if (!A.accept(z) || u && (--u, !u))
            return lA(A);
        }
      }
    else
      for (var H = m; H < F; H++) {
        var S = R[H];
        if ($I(S))
          for (var Y = Qd(X.yearordinal + S), M = 0; M < s.length; M++) {
            var j = s[M], J = Pd(Y, j);
            if (l && J > l)
              return lA(A);
            if (J >= C) {
              var z = ua(J, I);
              if (!A.accept(z) || u && (--u, !u))
                return lA(A);
            }
          }
      }
    if (I.interval === 0 || (G.add(I, x), G.year > Dd))
      return lA(A);
    Sn(t) || (s = X.gettimeset(t)(G.hour, G.minute, G.second, 0)), X.rebuild(G.year, G.month);
  }
}
function Xy(A, I, C) {
  var t = C.bymonth, i = C.byweekno, l = C.byweekday, b = C.byeaster, u = C.bymonthday, G = C.bynmonthday, X = C.byyearday;
  return ug(t) && !HI(t, A.mmask[I]) || ug(i) && !A.wnomask[I] || ug(l) && !HI(l, A.wdaymask[I]) || ug(A.nwdaymask) && !A.nwdaymask[I] || b !== null && !HI(A.eastermask, I) || (ug(u) || ug(G)) && !HI(u, A.mdaymask[I]) && !HI(G, A.nmdaymask[I]) || ug(X) && (I < A.yearlen && !HI(X, I + 1) && !HI(X, -A.yearlen + I) || I >= A.yearlen && !HI(X, I + 1 - A.yearlen) && !HI(X, -A.nextyearlen + I - A.yearlen));
}
function ua(A, I) {
  return new ni(A, I.tzid).rezonedDate();
}
function lA(A) {
  return A.getValue();
}
function sy(A, I, C, t, i) {
  for (var l = !1, b = I; b < C; b++) {
    var u = A[b];
    l = Xy(t, u, i), l && (A[u] = null);
  }
  return l;
}
function Zy(A, I, C) {
  var t = C.freq, i = C.byhour, l = C.byminute, b = C.bysecond;
  return Sn(t) ? MW(C) : t >= II.HOURLY && ug(i) && !HI(i, I.hour) || t >= II.MINUTELY && ug(l) && !HI(l, I.minute) || t >= II.SECONDLY && ug(b) && !HI(b, I.second) ? [] : A.gettimeset(t)(I.hour, I.minute, I.second, I.millisecond);
}
var wC = {
  MO: new wg(0),
  TU: new wg(1),
  WE: new wg(2),
  TH: new wg(3),
  FR: new wg(4),
  SA: new wg(5),
  SU: new wg(6)
}, Jn = {
  freq: ZI.YEARLY,
  dtstart: null,
  interval: 1,
  wkst: wC.MO,
  count: null,
  until: null,
  tzid: null,
  bysetpos: null,
  bymonth: null,
  bymonthday: null,
  bynmonthday: null,
  byyearday: null,
  byweekno: null,
  byweekday: null,
  bynweekday: null,
  byhour: null,
  byminute: null,
  bysecond: null,
  byeaster: null
}, oy = Object.keys(Jn), II = (
  /** @class */
  function() {
    function A(I, C) {
      I === void 0 && (I = {}), C === void 0 && (C = !1), this._cache = C ? null : new _W(), this.origOptions = $d(I);
      var t = jW(I).parsedOptions;
      this.options = t;
    }
    return A.parseText = function(I, C) {
      return _d(I, C);
    }, A.fromText = function(I, C) {
      return zW(I, C);
    }, A.fromString = function(I) {
      return new A(A.parseString(I) || void 0);
    }, A.prototype._iter = function(I) {
      return qd(I, this.options);
    }, A.prototype._cacheGet = function(I, C) {
      return this._cache ? this._cache._cacheGet(I, C) : !1;
    }, A.prototype._cacheAdd = function(I, C, t) {
      if (this._cache)
        return this._cache._cacheAdd(I, C, t);
    }, A.prototype.all = function(I) {
      if (I)
        return this._iter(new ea("all", {}, I));
      var C = this._cacheGet("all");
      return C === !1 && (C = this._iter(new yc("all", {})), this._cacheAdd("all", C)), C;
    }, A.prototype.between = function(I, C, t, i) {
      if (t === void 0 && (t = !1), !ht(I) || !ht(C))
        throw new Error("Invalid date passed in to RRule.between");
      var l = {
        before: C,
        after: I,
        inc: t
      };
      if (i)
        return this._iter(new ea("between", l, i));
      var b = this._cacheGet("between", l);
      return b === !1 && (b = this._iter(new yc("between", l)), this._cacheAdd("between", b, l)), b;
    }, A.prototype.before = function(I, C) {
      if (C === void 0 && (C = !1), !ht(I))
        throw new Error("Invalid date passed in to RRule.before");
      var t = { dt: I, inc: C }, i = this._cacheGet("before", t);
      return i === !1 && (i = this._iter(new yc("before", t)), this._cacheAdd("before", i, t)), i;
    }, A.prototype.after = function(I, C) {
      if (C === void 0 && (C = !1), !ht(I))
        throw new Error("Invalid date passed in to RRule.after");
      var t = { dt: I, inc: C }, i = this._cacheGet("after", t);
      return i === !1 && (i = this._iter(new yc("after", t)), this._cacheAdd("after", i, t)), i;
    }, A.prototype.count = function() {
      return this.all().length;
    }, A.prototype.toString = function() {
      return sn(this.origOptions);
    }, A.prototype.toText = function(I, C, t) {
      return UW(this, I, C, t);
    }, A.prototype.isFullyConvertibleToText = function() {
      return TW(this);
    }, A.prototype.clone = function() {
      return new A(this.origOptions);
    }, A.FREQUENCIES = [
      "YEARLY",
      "MONTHLY",
      "WEEKLY",
      "DAILY",
      "HOURLY",
      "MINUTELY",
      "SECONDLY"
    ], A.YEARLY = ZI.YEARLY, A.MONTHLY = ZI.MONTHLY, A.WEEKLY = ZI.WEEKLY, A.DAILY = ZI.DAILY, A.HOURLY = ZI.HOURLY, A.MINUTELY = ZI.MINUTELY, A.SECONDLY = ZI.SECONDLY, A.MO = wC.MO, A.TU = wC.TU, A.WE = wC.WE, A.TH = wC.TH, A.FR = wC.FR, A.SA = wC.SA, A.SU = wC.SU, A.parseString = Xn, A.optionsToString = sn, A;
  }()
);
function my(A, I, C, t, i, l) {
  var b = {}, u = A.accept;
  function G(R, m) {
    C.forEach(function(F) {
      F.between(R, m, !0).forEach(function(x) {
        b[Number(x)] = !0;
      });
    });
  }
  i.forEach(function(R) {
    var m = new ni(R, l).rezonedDate();
    b[Number(m)] = !0;
  }), A.accept = function(R) {
    var m = Number(R);
    return isNaN(m) ? u.call(this, R) : !b[m] && (G(new Date(m - 1), new Date(m + 1)), !b[m]) ? (b[m] = !0, u.call(this, R)) : !0;
  }, A.method === "between" && (G(A.args.after, A.args.before), A.accept = function(R) {
    var m = Number(R);
    return b[m] ? !0 : (b[m] = !0, u.call(this, R));
  });
  for (var X = 0; X < t.length; X++) {
    var s = new ni(t[X], l).rezonedDate();
    if (!A.accept(new Date(s.getTime())))
      break;
  }
  I.forEach(function(R) {
    qd(A, R.options);
  });
  var o = A._result;
  switch (Yt(o), A.method) {
    case "all":
    case "between":
      return o;
    case "before":
      return o.length && o[o.length - 1] || null;
    case "after":
    default:
      return o.length && o[0] || null;
  }
}
var Ga = {
  dtstart: null,
  cache: !1,
  unfold: !1,
  forceset: !1,
  compatible: !1,
  tzid: null
};
function hy(A, I) {
  var C = [], t = [], i = [], l = [], b = li(A), u = b.dtstart, G = b.tzid, X = By(A, I.unfold);
  return X.forEach(function(s) {
    var o;
    if (s) {
      var R = yy(s), m = R.name, F = R.parms, x = R.value;
      switch (m.toUpperCase()) {
        case "RRULE":
          if (F.length)
            throw new Error("unsupported RRULE parm: ".concat(F.join(",")));
          C.push(Xn(s));
          break;
        case "RDATE":
          var p = (o = /RDATE(?:;TZID=([^:=]+))?/i.exec(s)) !== null && o !== void 0 ? o : [], H = p[1];
          H && !G && (G = H), t = t.concat(aa(x, F));
          break;
        case "EXRULE":
          if (F.length)
            throw new Error("unsupported EXRULE parm: ".concat(F.join(",")));
          i.push(Xn(x));
          break;
        case "EXDATE":
          l = l.concat(aa(x, F));
          break;
        case "DTSTART":
          break;
        default:
          throw new Error("unsupported property: " + m);
      }
    }
  }), {
    dtstart: u,
    tzid: G,
    rrulevals: C,
    rdatevals: t,
    exrulevals: i,
    exdatevals: l
  };
}
function Vy(A, I) {
  var C = hy(A, I), t = C.rrulevals, i = C.rdatevals, l = C.exrulevals, b = C.exdatevals, u = C.dtstart, G = C.tzid, X = I.cache === !1;
  if (I.compatible && (I.forceset = !0, I.unfold = !0), I.forceset || t.length > 1 || i.length || l.length || b.length) {
    var s = new py(X);
    return s.dtstart(u), s.tzid(G || void 0), t.forEach(function(R) {
      s.rrule(new II(ql(R, u, G), X));
    }), i.forEach(function(R) {
      s.rdate(R);
    }), l.forEach(function(R) {
      s.exrule(new II(ql(R, u, G), X));
    }), b.forEach(function(R) {
      s.exdate(R);
    }), I.compatible && I.dtstart && s.rdate(u), s;
  }
  var o = t[0] || {};
  return new II(ql(o, o.dtstart || I.dtstart || u, o.tzid || I.tzid || G), X);
}
function Zn(A, I) {
  return I === void 0 && (I = {}), Vy(A, Ry(I));
}
function ql(A, I, C) {
  return CC(CC({}, A), { dtstart: I, tzid: C });
}
function Ry(A) {
  var I = [], C = Object.keys(A), t = Object.keys(Ga);
  if (C.forEach(function(i) {
    HI(t, i) || I.push(i);
  }), I.length)
    throw new Error("Invalid options: " + I.join(", "));
  return CC(CC({}, Ga), A);
}
function Wy(A) {
  if (A.indexOf(":") === -1)
    return {
      name: "RRULE",
      value: A
    };
  var I = fW(A, ":", 1), C = I[0], t = I[1];
  return {
    name: C,
    value: t
  };
}
function yy(A) {
  var I = Wy(A), C = I.name, t = I.value, i = C.split(";");
  if (!i)
    throw new Error("empty property name");
  return {
    name: i[0].toUpperCase(),
    parms: i.slice(1),
    value: t
  };
}
function By(A, I) {
  if (I === void 0 && (I = !1), A = A && A.trim(), !A)
    throw new Error("Invalid empty string");
  if (!I)
    return A.split(/\s/);
  for (var C = A.split(`
`), t = 0; t < C.length; ) {
    var i = C[t] = C[t].replace(/\s+$/g, "");
    i ? t > 0 && i[0] === " " ? (C[t - 1] += i.slice(1), C.splice(t, 1)) : t += 1 : C.splice(t, 1);
  }
  return C;
}
function xy(A) {
  A.forEach(function(I) {
    if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(I))
      throw new Error("unsupported RDATE/EXDATE parm: " + I);
  });
}
function aa(A, I) {
  return xy(I), A.split(",").map(function(C) {
    return wn(C);
  });
}
function da(A) {
  var I = this;
  return function(C) {
    if (C !== void 0 && (I["_".concat(A)] = C), I["_".concat(A)] !== void 0)
      return I["_".concat(A)];
    for (var t = 0; t < I._rrule.length; t++) {
      var i = I._rrule[t].origOptions[A];
      if (i)
        return i;
    }
  };
}
var py = (
  /** @class */
  function(A) {
    Ln(I, A);
    function I(C) {
      C === void 0 && (C = !1);
      var t = A.call(this, {}, C) || this;
      return t.dtstart = da.apply(t, ["dtstart"]), t.tzid = da.apply(t, ["tzid"]), t._rrule = [], t._rdate = [], t._exrule = [], t._exdate = [], t;
    }
    return I.prototype._iter = function(C) {
      return my(C, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    }, I.prototype.rrule = function(C) {
      ra(C, this._rrule);
    }, I.prototype.exrule = function(C) {
      ra(C, this._exrule);
    }, I.prototype.rdate = function(C) {
      Xa(C, this._rdate);
    }, I.prototype.exdate = function(C) {
      Xa(C, this._exdate);
    }, I.prototype.rrules = function() {
      return this._rrule.map(function(C) {
        return Zn(C.toString());
      });
    }, I.prototype.exrules = function() {
      return this._exrule.map(function(C) {
        return Zn(C.toString());
      });
    }, I.prototype.rdates = function() {
      return this._rdate.map(function(C) {
        return new Date(C.getTime());
      });
    }, I.prototype.exdates = function() {
      return this._exdate.map(function(C) {
        return new Date(C.getTime());
      });
    }, I.prototype.valueOf = function() {
      var C = [];
      return !this._rrule.length && this._dtstart && (C = C.concat(sn({ dtstart: this._dtstart }))), this._rrule.forEach(function(t) {
        C = C.concat(t.toString().split(`
`));
      }), this._exrule.forEach(function(t) {
        C = C.concat(t.toString().split(`
`).map(function(i) {
          return i.replace(/^RRULE:/, "EXRULE:");
        }).filter(function(i) {
          return !/^DTSTART/.test(i);
        }));
      }), this._rdate.length && C.push(sa("RDATE", this._rdate, this.tzid())), this._exdate.length && C.push(sa("EXDATE", this._exdate, this.tzid())), C;
    }, I.prototype.toString = function() {
      return this.valueOf().join(`
`);
    }, I.prototype.clone = function() {
      var C = new I(!!this._cache);
      return this._rrule.forEach(function(t) {
        return C.rrule(t.clone());
      }), this._exrule.forEach(function(t) {
        return C.exrule(t.clone());
      }), this._rdate.forEach(function(t) {
        return C.rdate(new Date(t.getTime()));
      }), this._exdate.forEach(function(t) {
        return C.exdate(new Date(t.getTime()));
      }), C;
    }, I;
  }(II)
);
function ra(A, I) {
  if (!(A instanceof II))
    throw new TypeError(String(A) + " is not RRule instance");
  HI(I.map(String), String(A)) || I.push(A);
}
function Xa(A, I) {
  if (!(A instanceof Date))
    throw new TypeError(String(A) + " is not Date instance");
  HI(I.map(Number), Number(A)) || (I.push(A), Yt(I));
}
function sa(A, I, C) {
  var t = !C || C.toUpperCase() === "UTC", i = t ? "".concat(A, ":") : "".concat(A, ";TZID=").concat(C, ":"), l = I.map(function(b) {
    return Nn(b.valueOf(), t);
  }).join(",");
  return "".concat(i).concat(l);
}
var Za = "__global_unique_id__", Fy = function() {
  return QA[Za] = (QA[Za] || 0) + 1;
};
const EA = /* @__PURE__ */ ui(Fy);
var Ir = aI.createContext(), gr = aI.createContext();
function Cr(A) {
  var I = A.children, C = aI.useState(null), t = C[0], i = C[1], l = aI.useRef(!1);
  aI.useEffect(function() {
    return function() {
      l.current = !0;
    };
  }, []);
  var b = aI.useCallback(function(u) {
    l.current || i(u);
  }, []);
  return /* @__PURE__ */ aI.createElement(Ir.Provider, {
    value: t
  }, /* @__PURE__ */ aI.createElement(gr.Provider, {
    value: b
  }, I));
}
var Ar = function(I) {
  return Array.isArray(I) ? I[0] : I;
}, cr = function(I) {
  if (typeof I == "function") {
    for (var C = arguments.length, t = new Array(C > 1 ? C - 1 : 0), i = 1; i < C; i++)
      t[i - 1] = arguments[i];
    return I.apply(void 0, t);
  }
}, on = function(I, C) {
  if (typeof I == "function")
    return cr(I, C);
  I != null && (I.current = C);
}, oa = function(I) {
  return I.reduce(function(C, t) {
    var i = t[0], l = t[1];
    return C[i] = l, C;
  }, {});
}, ma = typeof window < "u" && window.document && window.document.createElement ? aI.useLayoutEffect : aI.useEffect, Og = "top", RC = "bottom", WC = "right", jg = "left", kn = "auto", Jt = [Og, RC, WC, jg], vc = "start", ft = "end", Yy = "clippingParents", tr = "viewport", Zt = "popper", fy = "reference", ha = /* @__PURE__ */ Jt.reduce(function(A, I) {
  return A.concat([I + "-" + vc, I + "-" + ft]);
}, []), er = /* @__PURE__ */ [].concat(Jt, [kn]).reduce(function(A, I) {
  return A.concat([I, I + "-" + vc, I + "-" + ft]);
}, []), vy = "beforeRead", Hy = "read", Ny = "afterRead", wy = "beforeMain", Ly = "main", Sy = "afterMain", Jy = "beforeWrite", ky = "write", zy = "afterWrite", Uy = [vy, Hy, Ny, wy, Ly, Sy, Jy, ky, zy];
function QC(A) {
  return A ? (A.nodeName || "").toLowerCase() : null;
}
function AC(A) {
  if (A == null)
    return window;
  if (A.toString() !== "[object Window]") {
    var I = A.ownerDocument;
    return I && I.defaultView || window;
  }
  return A;
}
function qA(A) {
  var I = AC(A).Element;
  return A instanceof I || A instanceof Element;
}
function VC(A) {
  var I = AC(A).HTMLElement;
  return A instanceof I || A instanceof HTMLElement;
}
function zn(A) {
  if (typeof ShadowRoot > "u")
    return !1;
  var I = AC(A).ShadowRoot;
  return A instanceof I || A instanceof ShadowRoot;
}
function Ty(A) {
  var I = A.state;
  Object.keys(I.elements).forEach(function(C) {
    var t = I.styles[C] || {}, i = I.attributes[C] || {}, l = I.elements[C];
    !VC(l) || !QC(l) || (Object.assign(l.style, t), Object.keys(i).forEach(function(b) {
      var u = i[b];
      u === !1 ? l.removeAttribute(b) : l.setAttribute(b, u === !0 ? "" : u);
    }));
  });
}
function Oy(A) {
  var I = A.state, C = {
    popper: {
      position: I.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(I.elements.popper.style, C.popper), I.styles = C, I.elements.arrow && Object.assign(I.elements.arrow.style, C.arrow), function() {
    Object.keys(I.elements).forEach(function(t) {
      var i = I.elements[t], l = I.attributes[t] || {}, b = Object.keys(I.styles.hasOwnProperty(t) ? I.styles[t] : C[t]), u = b.reduce(function(G, X) {
        return G[X] = "", G;
      }, {});
      !VC(i) || !QC(i) || (Object.assign(i.style, u), Object.keys(l).forEach(function(G) {
        i.removeAttribute(G);
      }));
    });
  };
}
const jy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ty,
  effect: Oy,
  requires: ["computeStyles"]
};
function KC(A) {
  return A.split("-")[0];
}
var _A = Math.max, bi = Math.min, Hc = Math.round;
function mn() {
  var A = navigator.userAgentData;
  return A != null && A.brands && Array.isArray(A.brands) ? A.brands.map(function(I) {
    return I.brand + "/" + I.version;
  }).join(" ") : navigator.userAgent;
}
function ir() {
  return !/^((?!chrome|android).)*safari/i.test(mn());
}
function Nc(A, I, C) {
  I === void 0 && (I = !1), C === void 0 && (C = !1);
  var t = A.getBoundingClientRect(), i = 1, l = 1;
  I && VC(A) && (i = A.offsetWidth > 0 && Hc(t.width) / A.offsetWidth || 1, l = A.offsetHeight > 0 && Hc(t.height) / A.offsetHeight || 1);
  var b = qA(A) ? AC(A) : window, u = b.visualViewport, G = !ir() && C, X = (t.left + (G && u ? u.offsetLeft : 0)) / i, s = (t.top + (G && u ? u.offsetTop : 0)) / l, o = t.width / i, R = t.height / l;
  return {
    width: o,
    height: R,
    top: s,
    right: X + o,
    bottom: s + R,
    left: X,
    x: X,
    y: s
  };
}
function Un(A) {
  var I = Nc(A), C = A.offsetWidth, t = A.offsetHeight;
  return Math.abs(I.width - C) <= 1 && (C = I.width), Math.abs(I.height - t) <= 1 && (t = I.height), {
    x: A.offsetLeft,
    y: A.offsetTop,
    width: C,
    height: t
  };
}
function lr(A, I) {
  var C = I.getRootNode && I.getRootNode();
  if (A.contains(I))
    return !0;
  if (C && zn(C)) {
    var t = I;
    do {
      if (t && A.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function bA(A) {
  return AC(A).getComputedStyle(A);
}
function My(A) {
  return ["table", "td", "th"].indexOf(QC(A)) >= 0;
}
function YA(A) {
  return ((qA(A) ? A.ownerDocument : (
    // $FlowFixMe[prop-missing]
    A.document
  )) || window.document).documentElement;
}
function hi(A) {
  return QC(A) === "html" ? A : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    A.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    A.parentNode || // DOM Element detected
    (zn(A) ? A.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    YA(A)
  );
}
function Va(A) {
  return !VC(A) || // https://github.com/popperjs/popper-core/issues/837
  bA(A).position === "fixed" ? null : A.offsetParent;
}
function Dy(A) {
  var I = /firefox/i.test(mn()), C = /Trident/i.test(mn());
  if (C && VC(A)) {
    var t = bA(A);
    if (t.position === "fixed")
      return null;
  }
  var i = hi(A);
  for (zn(i) && (i = i.host); VC(i) && ["html", "body"].indexOf(QC(i)) < 0; ) {
    var l = bA(i);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || I && l.willChange === "filter" || I && l.filter && l.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function kt(A) {
  for (var I = AC(A), C = Va(A); C && My(C) && bA(C).position === "static"; )
    C = Va(C);
  return C && (QC(C) === "html" || QC(C) === "body" && bA(C).position === "static") ? I : C || Dy(A) || I;
}
function Tn(A) {
  return ["top", "bottom"].indexOf(A) >= 0 ? "x" : "y";
}
function Wt(A, I, C) {
  return _A(A, bi(I, C));
}
function Ey(A, I, C) {
  var t = Wt(A, I, C);
  return t > C ? C : t;
}
function nr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function br(A) {
  return Object.assign({}, nr(), A);
}
function ur(A, I) {
  return I.reduce(function(C, t) {
    return C[t] = A, C;
  }, {});
}
var Ky = function(I, C) {
  return I = typeof I == "function" ? I(Object.assign({}, C.rects, {
    placement: C.placement
  })) : I, br(typeof I != "number" ? I : ur(I, Jt));
};
function Qy(A) {
  var I, C = A.state, t = A.name, i = A.options, l = C.elements.arrow, b = C.modifiersData.popperOffsets, u = KC(C.placement), G = Tn(u), X = [jg, WC].indexOf(u) >= 0, s = X ? "height" : "width";
  if (!(!l || !b)) {
    var o = Ky(i.padding, C), R = Un(l), m = G === "y" ? Og : jg, F = G === "y" ? RC : WC, x = C.rects.reference[s] + C.rects.reference[G] - b[G] - C.rects.popper[s], p = b[G] - C.rects.reference[G], H = kt(l), J = H ? G === "y" ? H.clientHeight || 0 : H.clientWidth || 0 : 0, z = x / 2 - p / 2, S = o[m], Y = J - R[s] - o[F], M = J / 2 - R[s] / 2 + z, j = Wt(S, M, Y), oI = G;
    C.modifiersData[t] = (I = {}, I[oI] = j, I.centerOffset = j - M, I);
  }
}
function Py(A) {
  var I = A.state, C = A.options, t = C.element, i = t === void 0 ? "[data-popper-arrow]" : t;
  i != null && (typeof i == "string" && (i = I.elements.popper.querySelector(i), !i) || lr(I.elements.popper, i) && (I.elements.arrow = i));
}
const _y = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Qy,
  effect: Py,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wc(A) {
  return A.split("-")[1];
}
var $y = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qy(A, I) {
  var C = A.x, t = A.y, i = I.devicePixelRatio || 1;
  return {
    x: Hc(C * i) / i || 0,
    y: Hc(t * i) / i || 0
  };
}
function Ra(A) {
  var I, C = A.popper, t = A.popperRect, i = A.placement, l = A.variation, b = A.offsets, u = A.position, G = A.gpuAcceleration, X = A.adaptive, s = A.roundOffsets, o = A.isFixed, R = b.x, m = R === void 0 ? 0 : R, F = b.y, x = F === void 0 ? 0 : F, p = typeof s == "function" ? s({
    x: m,
    y: x
  }) : {
    x: m,
    y: x
  };
  m = p.x, x = p.y;
  var H = b.hasOwnProperty("x"), J = b.hasOwnProperty("y"), z = jg, S = Og, Y = window;
  if (X) {
    var M = kt(C), j = "clientHeight", oI = "clientWidth";
    if (M === AC(C) && (M = YA(C), bA(M).position !== "static" && u === "absolute" && (j = "scrollHeight", oI = "scrollWidth")), M = M, i === Og || (i === jg || i === WC) && l === ft) {
      S = RC;
      var dI = o && M === Y && Y.visualViewport ? Y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[j]
      );
      x -= dI - t.height, x *= G ? 1 : -1;
    }
    if (i === jg || (i === Og || i === RC) && l === ft) {
      z = WC;
      var mI = o && M === Y && Y.visualViewport ? Y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[oI]
      );
      m -= mI - t.width, m *= G ? 1 : -1;
    }
  }
  var LI = Object.assign({
    position: u
  }, X && $y), ig = s === !0 ? qy({
    x: m,
    y: x
  }, AC(C)) : {
    x: m,
    y: x
  };
  if (m = ig.x, x = ig.y, G) {
    var yI;
    return Object.assign({}, LI, (yI = {}, yI[S] = J ? "0" : "", yI[z] = H ? "0" : "", yI.transform = (Y.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + x + "px)" : "translate3d(" + m + "px, " + x + "px, 0)", yI));
  }
  return Object.assign({}, LI, (I = {}, I[S] = J ? x + "px" : "", I[z] = H ? m + "px" : "", I.transform = "", I));
}
function IB(A) {
  var I = A.state, C = A.options, t = C.gpuAcceleration, i = t === void 0 ? !0 : t, l = C.adaptive, b = l === void 0 ? !0 : l, u = C.roundOffsets, G = u === void 0 ? !0 : u, X = {
    placement: KC(I.placement),
    variation: wc(I.placement),
    popper: I.elements.popper,
    popperRect: I.rects.popper,
    gpuAcceleration: i,
    isFixed: I.options.strategy === "fixed"
  };
  I.modifiersData.popperOffsets != null && (I.styles.popper = Object.assign({}, I.styles.popper, Ra(Object.assign({}, X, {
    offsets: I.modifiersData.popperOffsets,
    position: I.options.strategy,
    adaptive: b,
    roundOffsets: G
  })))), I.modifiersData.arrow != null && (I.styles.arrow = Object.assign({}, I.styles.arrow, Ra(Object.assign({}, X, {
    offsets: I.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: G
  })))), I.attributes.popper = Object.assign({}, I.attributes.popper, {
    "data-popper-placement": I.placement
  });
}
const gB = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: IB,
  data: {}
};
var Te = {
  passive: !0
};
function CB(A) {
  var I = A.state, C = A.instance, t = A.options, i = t.scroll, l = i === void 0 ? !0 : i, b = t.resize, u = b === void 0 ? !0 : b, G = AC(I.elements.popper), X = [].concat(I.scrollParents.reference, I.scrollParents.popper);
  return l && X.forEach(function(s) {
    s.addEventListener("scroll", C.update, Te);
  }), u && G.addEventListener("resize", C.update, Te), function() {
    l && X.forEach(function(s) {
      s.removeEventListener("scroll", C.update, Te);
    }), u && G.removeEventListener("resize", C.update, Te);
  };
}
const AB = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: CB,
  data: {}
};
var cB = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _e(A) {
  return A.replace(/left|right|bottom|top/g, function(I) {
    return cB[I];
  });
}
var tB = {
  start: "end",
  end: "start"
};
function Wa(A) {
  return A.replace(/start|end/g, function(I) {
    return tB[I];
  });
}
function On(A) {
  var I = AC(A), C = I.pageXOffset, t = I.pageYOffset;
  return {
    scrollLeft: C,
    scrollTop: t
  };
}
function jn(A) {
  return Nc(YA(A)).left + On(A).scrollLeft;
}
function eB(A, I) {
  var C = AC(A), t = YA(A), i = C.visualViewport, l = t.clientWidth, b = t.clientHeight, u = 0, G = 0;
  if (i) {
    l = i.width, b = i.height;
    var X = ir();
    (X || !X && I === "fixed") && (u = i.offsetLeft, G = i.offsetTop);
  }
  return {
    width: l,
    height: b,
    x: u + jn(A),
    y: G
  };
}
function iB(A) {
  var I, C = YA(A), t = On(A), i = (I = A.ownerDocument) == null ? void 0 : I.body, l = _A(C.scrollWidth, C.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), b = _A(C.scrollHeight, C.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -t.scrollLeft + jn(A), G = -t.scrollTop;
  return bA(i || C).direction === "rtl" && (u += _A(C.clientWidth, i ? i.clientWidth : 0) - l), {
    width: l,
    height: b,
    x: u,
    y: G
  };
}
function Mn(A) {
  var I = bA(A), C = I.overflow, t = I.overflowX, i = I.overflowY;
  return /auto|scroll|overlay|hidden/.test(C + i + t);
}
function Gr(A) {
  return ["html", "body", "#document"].indexOf(QC(A)) >= 0 ? A.ownerDocument.body : VC(A) && Mn(A) ? A : Gr(hi(A));
}
function yt(A, I) {
  var C;
  I === void 0 && (I = []);
  var t = Gr(A), i = t === ((C = A.ownerDocument) == null ? void 0 : C.body), l = AC(t), b = i ? [l].concat(l.visualViewport || [], Mn(t) ? t : []) : t, u = I.concat(b);
  return i ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(yt(hi(b)))
  );
}
function hn(A) {
  return Object.assign({}, A, {
    left: A.x,
    top: A.y,
    right: A.x + A.width,
    bottom: A.y + A.height
  });
}
function lB(A, I) {
  var C = Nc(A, !1, I === "fixed");
  return C.top = C.top + A.clientTop, C.left = C.left + A.clientLeft, C.bottom = C.top + A.clientHeight, C.right = C.left + A.clientWidth, C.width = A.clientWidth, C.height = A.clientHeight, C.x = C.left, C.y = C.top, C;
}
function ya(A, I, C) {
  return I === tr ? hn(eB(A, C)) : qA(I) ? lB(I, C) : hn(iB(YA(A)));
}
function nB(A) {
  var I = yt(hi(A)), C = ["absolute", "fixed"].indexOf(bA(A).position) >= 0, t = C && VC(A) ? kt(A) : A;
  return qA(t) ? I.filter(function(i) {
    return qA(i) && lr(i, t) && QC(i) !== "body";
  }) : [];
}
function bB(A, I, C, t) {
  var i = I === "clippingParents" ? nB(A) : [].concat(I), l = [].concat(i, [C]), b = l[0], u = l.reduce(function(G, X) {
    var s = ya(A, X, t);
    return G.top = _A(s.top, G.top), G.right = bi(s.right, G.right), G.bottom = bi(s.bottom, G.bottom), G.left = _A(s.left, G.left), G;
  }, ya(A, b, t));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function ar(A) {
  var I = A.reference, C = A.element, t = A.placement, i = t ? KC(t) : null, l = t ? wc(t) : null, b = I.x + I.width / 2 - C.width / 2, u = I.y + I.height / 2 - C.height / 2, G;
  switch (i) {
    case Og:
      G = {
        x: b,
        y: I.y - C.height
      };
      break;
    case RC:
      G = {
        x: b,
        y: I.y + I.height
      };
      break;
    case WC:
      G = {
        x: I.x + I.width,
        y: u
      };
      break;
    case jg:
      G = {
        x: I.x - C.width,
        y: u
      };
      break;
    default:
      G = {
        x: I.x,
        y: I.y
      };
  }
  var X = i ? Tn(i) : null;
  if (X != null) {
    var s = X === "y" ? "height" : "width";
    switch (l) {
      case vc:
        G[X] = G[X] - (I[s] / 2 - C[s] / 2);
        break;
      case ft:
        G[X] = G[X] + (I[s] / 2 - C[s] / 2);
        break;
    }
  }
  return G;
}
function vt(A, I) {
  I === void 0 && (I = {});
  var C = I, t = C.placement, i = t === void 0 ? A.placement : t, l = C.strategy, b = l === void 0 ? A.strategy : l, u = C.boundary, G = u === void 0 ? Yy : u, X = C.rootBoundary, s = X === void 0 ? tr : X, o = C.elementContext, R = o === void 0 ? Zt : o, m = C.altBoundary, F = m === void 0 ? !1 : m, x = C.padding, p = x === void 0 ? 0 : x, H = br(typeof p != "number" ? p : ur(p, Jt)), J = R === Zt ? fy : Zt, z = A.rects.popper, S = A.elements[F ? J : R], Y = bB(qA(S) ? S : S.contextElement || YA(A.elements.popper), G, s, b), M = Nc(A.elements.reference), j = ar({
    reference: M,
    element: z,
    strategy: "absolute",
    placement: i
  }), oI = hn(Object.assign({}, z, j)), dI = R === Zt ? oI : M, mI = {
    top: Y.top - dI.top + H.top,
    bottom: dI.bottom - Y.bottom + H.bottom,
    left: Y.left - dI.left + H.left,
    right: dI.right - Y.right + H.right
  }, LI = A.modifiersData.offset;
  if (R === Zt && LI) {
    var ig = LI[i];
    Object.keys(mI).forEach(function(yI) {
      var KI = [WC, RC].indexOf(yI) >= 0 ? 1 : -1, Gg = [Og, RC].indexOf(yI) >= 0 ? "y" : "x";
      mI[yI] += ig[Gg] * KI;
    });
  }
  return mI;
}
function uB(A, I) {
  I === void 0 && (I = {});
  var C = I, t = C.placement, i = C.boundary, l = C.rootBoundary, b = C.padding, u = C.flipVariations, G = C.allowedAutoPlacements, X = G === void 0 ? er : G, s = wc(t), o = s ? u ? ha : ha.filter(function(F) {
    return wc(F) === s;
  }) : Jt, R = o.filter(function(F) {
    return X.indexOf(F) >= 0;
  });
  R.length === 0 && (R = o);
  var m = R.reduce(function(F, x) {
    return F[x] = vt(A, {
      placement: x,
      boundary: i,
      rootBoundary: l,
      padding: b
    })[KC(x)], F;
  }, {});
  return Object.keys(m).sort(function(F, x) {
    return m[F] - m[x];
  });
}
function GB(A) {
  if (KC(A) === kn)
    return [];
  var I = _e(A);
  return [Wa(A), I, Wa(I)];
}
function aB(A) {
  var I = A.state, C = A.options, t = A.name;
  if (!I.modifiersData[t]._skip) {
    for (var i = C.mainAxis, l = i === void 0 ? !0 : i, b = C.altAxis, u = b === void 0 ? !0 : b, G = C.fallbackPlacements, X = C.padding, s = C.boundary, o = C.rootBoundary, R = C.altBoundary, m = C.flipVariations, F = m === void 0 ? !0 : m, x = C.allowedAutoPlacements, p = I.options.placement, H = KC(p), J = H === p, z = G || (J || !F ? [_e(p)] : GB(p)), S = [p].concat(z).reduce(function(tC, Ag) {
      return tC.concat(KC(Ag) === kn ? uB(I, {
        placement: Ag,
        boundary: s,
        rootBoundary: o,
        padding: X,
        flipVariations: F,
        allowedAutoPlacements: x
      }) : Ag);
    }, []), Y = I.rects.reference, M = I.rects.popper, j = /* @__PURE__ */ new Map(), oI = !0, dI = S[0], mI = 0; mI < S.length; mI++) {
      var LI = S[mI], ig = KC(LI), yI = wc(LI) === vc, KI = [Og, RC].indexOf(ig) >= 0, Gg = KI ? "width" : "height", QI = vt(I, {
        placement: LI,
        boundary: s,
        rootBoundary: o,
        altBoundary: R,
        padding: X
      }), SI = KI ? yI ? WC : jg : yI ? RC : Og;
      Y[Gg] > M[Gg] && (SI = _e(SI));
      var gg = _e(SI), Sg = [];
      if (l && Sg.push(QI[ig] <= 0), u && Sg.push(QI[SI] <= 0, QI[gg] <= 0), Sg.every(function(tC) {
        return tC;
      })) {
        dI = LI, oI = !1;
        break;
      }
      j.set(LI, Sg);
    }
    if (oI)
      for (var xg = F ? 3 : 1, Cg = function(Ag) {
        var Zg = S.find(function(eC) {
          var PI = j.get(eC);
          if (PI)
            return PI.slice(0, Ag).every(function(pg) {
              return pg;
            });
        });
        if (Zg)
          return dI = Zg, "break";
      }, cC = xg; cC > 0; cC--) {
        var yC = Cg(cC);
        if (yC === "break") break;
      }
    I.placement !== dI && (I.modifiersData[t]._skip = !0, I.placement = dI, I.reset = !0);
  }
}
const dB = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: aB,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ba(A, I, C) {
  return C === void 0 && (C = {
    x: 0,
    y: 0
  }), {
    top: A.top - I.height - C.y,
    right: A.right - I.width + C.x,
    bottom: A.bottom - I.height + C.y,
    left: A.left - I.width - C.x
  };
}
function xa(A) {
  return [Og, WC, RC, jg].some(function(I) {
    return A[I] >= 0;
  });
}
function rB(A) {
  var I = A.state, C = A.name, t = I.rects.reference, i = I.rects.popper, l = I.modifiersData.preventOverflow, b = vt(I, {
    elementContext: "reference"
  }), u = vt(I, {
    altBoundary: !0
  }), G = Ba(b, t), X = Ba(u, i, l), s = xa(G), o = xa(X);
  I.modifiersData[C] = {
    referenceClippingOffsets: G,
    popperEscapeOffsets: X,
    isReferenceHidden: s,
    hasPopperEscaped: o
  }, I.attributes.popper = Object.assign({}, I.attributes.popper, {
    "data-popper-reference-hidden": s,
    "data-popper-escaped": o
  });
}
const XB = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: rB
};
function sB(A, I, C) {
  var t = KC(A), i = [jg, Og].indexOf(t) >= 0 ? -1 : 1, l = typeof C == "function" ? C(Object.assign({}, I, {
    placement: A
  })) : C, b = l[0], u = l[1];
  return b = b || 0, u = (u || 0) * i, [jg, WC].indexOf(t) >= 0 ? {
    x: u,
    y: b
  } : {
    x: b,
    y: u
  };
}
function ZB(A) {
  var I = A.state, C = A.options, t = A.name, i = C.offset, l = i === void 0 ? [0, 0] : i, b = er.reduce(function(s, o) {
    return s[o] = sB(o, I.rects, l), s;
  }, {}), u = b[I.placement], G = u.x, X = u.y;
  I.modifiersData.popperOffsets != null && (I.modifiersData.popperOffsets.x += G, I.modifiersData.popperOffsets.y += X), I.modifiersData[t] = b;
}
const oB = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ZB
};
function mB(A) {
  var I = A.state, C = A.name;
  I.modifiersData[C] = ar({
    reference: I.rects.reference,
    element: I.rects.popper,
    strategy: "absolute",
    placement: I.placement
  });
}
const hB = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: mB,
  data: {}
};
function VB(A) {
  return A === "x" ? "y" : "x";
}
function RB(A) {
  var I = A.state, C = A.options, t = A.name, i = C.mainAxis, l = i === void 0 ? !0 : i, b = C.altAxis, u = b === void 0 ? !1 : b, G = C.boundary, X = C.rootBoundary, s = C.altBoundary, o = C.padding, R = C.tether, m = R === void 0 ? !0 : R, F = C.tetherOffset, x = F === void 0 ? 0 : F, p = vt(I, {
    boundary: G,
    rootBoundary: X,
    padding: o,
    altBoundary: s
  }), H = KC(I.placement), J = wc(I.placement), z = !J, S = Tn(H), Y = VB(S), M = I.modifiersData.popperOffsets, j = I.rects.reference, oI = I.rects.popper, dI = typeof x == "function" ? x(Object.assign({}, I.rects, {
    placement: I.placement
  })) : x, mI = typeof dI == "number" ? {
    mainAxis: dI,
    altAxis: dI
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, dI), LI = I.modifiersData.offset ? I.modifiersData.offset[I.placement] : null, ig = {
    x: 0,
    y: 0
  };
  if (M) {
    if (l) {
      var yI, KI = S === "y" ? Og : jg, Gg = S === "y" ? RC : WC, QI = S === "y" ? "height" : "width", SI = M[S], gg = SI + p[KI], Sg = SI - p[Gg], xg = m ? -oI[QI] / 2 : 0, Cg = J === vc ? j[QI] : oI[QI], cC = J === vc ? -oI[QI] : -j[QI], yC = I.elements.arrow, tC = m && yC ? Un(yC) : {
        width: 0,
        height: 0
      }, Ag = I.modifiersData["arrow#persistent"] ? I.modifiersData["arrow#persistent"].padding : nr(), Zg = Ag[KI], eC = Ag[Gg], PI = Wt(0, j[QI], tC[QI]), pg = z ? j[QI] / 2 - xg - PI - Zg - mI.mainAxis : Cg - PI - Zg - mI.mainAxis, JC = z ? -j[QI] / 2 + xg + PI + eC + mI.mainAxis : cC + PI + eC + mI.mainAxis, iC = I.elements.arrow && kt(I.elements.arrow), E = iC ? S === "y" ? iC.clientTop || 0 : iC.clientLeft || 0 : 0, BC = (yI = LI == null ? void 0 : LI[S]) != null ? yI : 0, _I = SI + pg - BC - E, Fg = SI + JC - BC, kC = Wt(m ? bi(gg, _I) : gg, SI, m ? _A(Sg, Fg) : Sg);
      M[S] = kC, ig[S] = kC - SI;
    }
    if (u) {
      var Yg, vA = S === "x" ? Og : jg, GA = S === "x" ? RC : WC, fg = M[Y], lg = Y === "y" ? "height" : "width", lC = fg + p[vA], _C = fg - p[GA], HA = [Og, jg].indexOf(H) !== -1, xC = (Yg = LI == null ? void 0 : LI[Y]) != null ? Yg : 0, NA = HA ? lC : fg - j[lg] - oI[lg] - xC + mI.altAxis, Jg = HA ? fg + j[lg] + oI[lg] - xC - mI.altAxis : _C, pC = m && HA ? Ey(NA, fg, Jg) : Wt(m ? NA : lC, fg, m ? Jg : _C);
      M[Y] = pC, ig[Y] = pC - fg;
    }
    I.modifiersData[t] = ig;
  }
}
const WB = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: RB,
  requiresIfExists: ["offset"]
};
function yB(A) {
  return {
    scrollLeft: A.scrollLeft,
    scrollTop: A.scrollTop
  };
}
function BB(A) {
  return A === AC(A) || !VC(A) ? On(A) : yB(A);
}
function xB(A) {
  var I = A.getBoundingClientRect(), C = Hc(I.width) / A.offsetWidth || 1, t = Hc(I.height) / A.offsetHeight || 1;
  return C !== 1 || t !== 1;
}
function pB(A, I, C) {
  C === void 0 && (C = !1);
  var t = VC(I), i = VC(I) && xB(I), l = YA(I), b = Nc(A, i, C), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, G = {
    x: 0,
    y: 0
  };
  return (t || !t && !C) && ((QC(I) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Mn(l)) && (u = BB(I)), VC(I) ? (G = Nc(I, !0), G.x += I.clientLeft, G.y += I.clientTop) : l && (G.x = jn(l))), {
    x: b.left + u.scrollLeft - G.x,
    y: b.top + u.scrollTop - G.y,
    width: b.width,
    height: b.height
  };
}
function FB(A) {
  var I = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), t = [];
  A.forEach(function(l) {
    I.set(l.name, l);
  });
  function i(l) {
    C.add(l.name);
    var b = [].concat(l.requires || [], l.requiresIfExists || []);
    b.forEach(function(u) {
      if (!C.has(u)) {
        var G = I.get(u);
        G && i(G);
      }
    }), t.push(l);
  }
  return A.forEach(function(l) {
    C.has(l.name) || i(l);
  }), t;
}
function YB(A) {
  var I = FB(A);
  return Uy.reduce(function(C, t) {
    return C.concat(I.filter(function(i) {
      return i.phase === t;
    }));
  }, []);
}
function fB(A) {
  var I;
  return function() {
    return I || (I = new Promise(function(C) {
      Promise.resolve().then(function() {
        I = void 0, C(A());
      });
    })), I;
  };
}
function vB(A) {
  var I = A.reduce(function(C, t) {
    var i = C[t.name];
    return C[t.name] = i ? Object.assign({}, i, t, {
      options: Object.assign({}, i.options, t.options),
      data: Object.assign({}, i.data, t.data)
    }) : t, C;
  }, {});
  return Object.keys(I).map(function(C) {
    return I[C];
  });
}
var pa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fa() {
  for (var A = arguments.length, I = new Array(A), C = 0; C < A; C++)
    I[C] = arguments[C];
  return !I.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function HB(A) {
  A === void 0 && (A = {});
  var I = A, C = I.defaultModifiers, t = C === void 0 ? [] : C, i = I.defaultOptions, l = i === void 0 ? pa : i;
  return function(u, G, X) {
    X === void 0 && (X = l);
    var s = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, pa, l),
      modifiersData: {},
      elements: {
        reference: u,
        popper: G
      },
      attributes: {},
      styles: {}
    }, o = [], R = !1, m = {
      state: s,
      setOptions: function(H) {
        var J = typeof H == "function" ? H(s.options) : H;
        x(), s.options = Object.assign({}, l, s.options, J), s.scrollParents = {
          reference: qA(u) ? yt(u) : u.contextElement ? yt(u.contextElement) : [],
          popper: yt(G)
        };
        var z = YB(vB([].concat(t, s.options.modifiers)));
        return s.orderedModifiers = z.filter(function(S) {
          return S.enabled;
        }), F(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!R) {
          var H = s.elements, J = H.reference, z = H.popper;
          if (Fa(J, z)) {
            s.rects = {
              reference: pB(J, kt(z), s.options.strategy === "fixed"),
              popper: Un(z)
            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(mI) {
              return s.modifiersData[mI.name] = Object.assign({}, mI.data);
            });
            for (var S = 0; S < s.orderedModifiers.length; S++) {
              if (s.reset === !0) {
                s.reset = !1, S = -1;
                continue;
              }
              var Y = s.orderedModifiers[S], M = Y.fn, j = Y.options, oI = j === void 0 ? {} : j, dI = Y.name;
              typeof M == "function" && (s = M({
                state: s,
                options: oI,
                name: dI,
                instance: m
              }) || s);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: fB(function() {
        return new Promise(function(p) {
          m.forceUpdate(), p(s);
        });
      }),
      destroy: function() {
        x(), R = !0;
      }
    };
    if (!Fa(u, G))
      return m;
    m.setOptions(X).then(function(p) {
      !R && X.onFirstUpdate && X.onFirstUpdate(p);
    });
    function F() {
      s.orderedModifiers.forEach(function(p) {
        var H = p.name, J = p.options, z = J === void 0 ? {} : J, S = p.effect;
        if (typeof S == "function") {
          var Y = S({
            state: s,
            name: H,
            instance: m,
            options: z
          }), M = function() {
          };
          o.push(Y || M);
        }
      });
    }
    function x() {
      o.forEach(function(p) {
        return p();
      }), o = [];
    }
    return m;
  };
}
var NB = [AB, hB, gB, jy, oB, dB, WB, _y, XB], wB = /* @__PURE__ */ HB({
  defaultModifiers: NB
}), LB = typeof Element < "u", SB = typeof Map == "function", JB = typeof Set == "function", kB = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function $e(A, I) {
  if (A === I) return !0;
  if (A && I && typeof A == "object" && typeof I == "object") {
    if (A.constructor !== I.constructor) return !1;
    var C, t, i;
    if (Array.isArray(A)) {
      if (C = A.length, C != I.length) return !1;
      for (t = C; t-- !== 0; )
        if (!$e(A[t], I[t])) return !1;
      return !0;
    }
    var l;
    if (SB && A instanceof Map && I instanceof Map) {
      if (A.size !== I.size) return !1;
      for (l = A.entries(); !(t = l.next()).done; )
        if (!I.has(t.value[0])) return !1;
      for (l = A.entries(); !(t = l.next()).done; )
        if (!$e(t.value[1], I.get(t.value[0]))) return !1;
      return !0;
    }
    if (JB && A instanceof Set && I instanceof Set) {
      if (A.size !== I.size) return !1;
      for (l = A.entries(); !(t = l.next()).done; )
        if (!I.has(t.value[0])) return !1;
      return !0;
    }
    if (kB && ArrayBuffer.isView(A) && ArrayBuffer.isView(I)) {
      if (C = A.length, C != I.length) return !1;
      for (t = C; t-- !== 0; )
        if (A[t] !== I[t]) return !1;
      return !0;
    }
    if (A.constructor === RegExp) return A.source === I.source && A.flags === I.flags;
    if (A.valueOf !== Object.prototype.valueOf && typeof A.valueOf == "function" && typeof I.valueOf == "function") return A.valueOf() === I.valueOf();
    if (A.toString !== Object.prototype.toString && typeof A.toString == "function" && typeof I.toString == "function") return A.toString() === I.toString();
    if (i = Object.keys(A), C = i.length, C !== Object.keys(I).length) return !1;
    for (t = C; t-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(I, i[t])) return !1;
    if (LB && A instanceof Element) return !1;
    for (t = C; t-- !== 0; )
      if (!((i[t] === "_owner" || i[t] === "__v" || i[t] === "__o") && A.$$typeof) && !$e(A[i[t]], I[i[t]]))
        return !1;
    return !0;
  }
  return A !== A && I !== I;
}
var zB = function(I, C) {
  try {
    return $e(I, C);
  } catch (t) {
    if ((t.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw t;
  }
};
const UB = /* @__PURE__ */ ui(zB);
var TB = [], OB = function(I, C, t) {
  t === void 0 && (t = {});
  var i = aI.useRef(null), l = {
    onFirstUpdate: t.onFirstUpdate,
    placement: t.placement || "bottom",
    strategy: t.strategy || "absolute",
    modifiers: t.modifiers || TB
  }, b = aI.useState({
    styles: {
      popper: {
        position: l.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), u = b[0], G = b[1], X = aI.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(m) {
        var F = m.state, x = Object.keys(F.elements);
        W0.flushSync(function() {
          G({
            styles: oa(x.map(function(p) {
              return [p, F.styles[p] || {}];
            })),
            attributes: oa(x.map(function(p) {
              return [p, F.attributes[p]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), s = aI.useMemo(function() {
    var R = {
      onFirstUpdate: l.onFirstUpdate,
      placement: l.placement,
      strategy: l.strategy,
      modifiers: [].concat(l.modifiers, [X, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return UB(i.current, R) ? i.current || R : (i.current = R, R);
  }, [l.onFirstUpdate, l.placement, l.strategy, l.modifiers, X]), o = aI.useRef();
  return ma(function() {
    o.current && o.current.setOptions(s);
  }, [s]), ma(function() {
    if (!(I == null || C == null)) {
      var R = t.createPopper || wB, m = R(I, C, s);
      return o.current = m, function() {
        m.destroy(), o.current = null;
      };
    }
  }, [I, C, t.createPopper]), {
    state: o.current ? o.current.state : null,
    styles: u.styles,
    attributes: u.attributes,
    update: o.current ? o.current.update : null,
    forceUpdate: o.current ? o.current.forceUpdate : null
  };
}, jB = function() {
}, MB = function() {
  return Promise.resolve(null);
}, DB = [];
function EB(A) {
  var I = A.placement, C = I === void 0 ? "bottom" : I, t = A.strategy, i = t === void 0 ? "absolute" : t, l = A.modifiers, b = l === void 0 ? DB : l, u = A.referenceElement, G = A.onFirstUpdate, X = A.innerRef, s = A.children, o = aI.useContext(Ir), R = aI.useState(null), m = R[0], F = R[1], x = aI.useState(null), p = x[0], H = x[1];
  aI.useEffect(function() {
    on(X, m);
  }, [X, m]);
  var J = aI.useMemo(function() {
    return {
      placement: C,
      strategy: i,
      onFirstUpdate: G,
      modifiers: [].concat(b, [{
        name: "arrow",
        enabled: p != null,
        options: {
          element: p
        }
      }])
    };
  }, [C, i, G, b, p]), z = OB(u || o, m, J), S = z.state, Y = z.styles, M = z.forceUpdate, j = z.update, oI = aI.useMemo(function() {
    return {
      ref: F,
      style: Y.popper,
      placement: S ? S.placement : C,
      hasPopperEscaped: S && S.modifiersData.hide ? S.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: S && S.modifiersData.hide ? S.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: Y.arrow,
        ref: H
      },
      forceUpdate: M || jB,
      update: j || MB
    };
  }, [F, H, C, S, Y, j, M]);
  return Ar(s)(oI);
}
var KB = process.env.NODE_ENV !== "production", dr = function() {
};
if (KB) {
  var QB = function(I, C) {
    var t = arguments.length;
    C = new Array(t > 1 ? t - 1 : 0);
    for (var i = 1; i < t; i++)
      C[i - 1] = arguments[i];
    var l = 0, b = "Warning: " + I.replace(/%s/g, function() {
      return C[l++];
    });
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  };
  dr = function(A, I, C) {
    var t = arguments.length;
    C = new Array(t > 2 ? t - 2 : 0);
    for (var i = 2; i < t; i++)
      C[i - 2] = arguments[i];
    if (I === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    A || QB.apply(null, [I].concat(C));
  };
}
var PB = dr;
const _B = /* @__PURE__ */ ui(PB);
function rr(A) {
  var I = A.children, C = A.innerRef, t = aI.useContext(gr), i = aI.useCallback(function(l) {
    on(C, l), cr(t, l);
  }, [C, t]);
  return aI.useEffect(function() {
    return function() {
      return on(C, null);
    };
  }, []), aI.useEffect(function() {
    _B(!!t, "`Reference` should not be used outside of a `Manager` component.");
  }, [t]), Ar(I)({
    ref: i
  });
}
function $B(A) {
  return /* @__PURE__ */ eg("svg", { viewBox: "0 0 24 24", ...A, children: [
    /* @__PURE__ */ Q("path", { d: "M24 24H0V0h24v24z", fill: "none" }),
    /* @__PURE__ */ Q("circle", { cx: 12, cy: 12, r: 8 })
  ] });
}
function qB(A) {
  return /* @__PURE__ */ eg("svg", { viewBox: "0 0 24 24", width: 18, height: 18, ...A, children: [
    /* @__PURE__ */ Q("path", { d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ Q("path", { d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" })
  ] });
}
function Ix(A) {
  return /* @__PURE__ */ eg("svg", { viewBox: "0 0 24 24", width: 18, height: 18, ...A, children: [
    /* @__PURE__ */ Q("path", { d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ Q("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" })
  ] });
}
function gx(A) {
  return /* @__PURE__ */ eg("svg", { viewBox: "0 0 24 24", width: 18, height: 18, ...A, children: [
    /* @__PURE__ */ Q("path", { d: "M0 0h24v24H0z", fill: "none" }),
    /* @__PURE__ */ Q("path", { d: "M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" })
  ] });
}
function Xr(A, I) {
  return A.hasSame(bg(A).startOf("day"), "second") && I.hasSame(bg(I).startOf("day"), "second");
}
function Cx(A, I, C, t, i, l) {
  const b = new URL("https://calendar.google.com/calendar/r/eventedit");
  return b.searchParams.append("text", C || ""), l ? b.searchParams.append("dates", A.toFormat("yyyyMMdd") + "/" + I.toFormat("yyyyMMdd")) : b.searchParams.append("dates", A.toFormat("yyyyMMdd'T'HHmmss") + "/" + I.toFormat("yyyyMMdd'T'HHmmss")), b.searchParams.append("details", t || ""), b.searchParams.append("location", i || ""), b.href;
}
function Ax(A, I) {
  return I.diff(A, "hours").hours >= 24 || !A.hasSame(I, "day") && I.hour >= 12;
}
function cx(A, I, C, t) {
  let i, l, b, u, G, X, s, o = parseInt, R = Math.round, m = typeof C == "string";
  if (typeof A != "number" || A < -1 || A > 1 || typeof I != "string" || I[0] != "r" && I[0] != "#" || C) return null;
  function F(x) {
    let p = x.length, H = {};
    if (p > 9) {
      if ([i, l, b, m] = x = x.split(","), p = x.length, p < 3 || p > 4) return null;
      H.r = o(i[3] == "a" ? i.slice(5) : i.slice(4)), H.g = o(l), H.b = o(b), H.a = m ? parseFloat(m) : -1;
    } else {
      if (p == 8 || p == 6 || p < 4) return null;
      p < 6 && (x = "#" + x[1] + x[1] + x[2] + x[2] + x[3] + x[3] + (p > 4 ? x[4] + x[4] : "")), x = o(x.slice(1), 16), p == 9 || p == 5 ? (H.r = x >> 24 & 255, H.g = x >> 16 & 255, H.b = x >> 8 & 255, H.a = R((x & 255) / 0.255) / 1e3) : (H.r = x >> 16, H.g = x >> 8 & 255, H.b = x & 255, H.a = -1);
    }
    return H;
  }
  return s = I.length > 9, s = m ? C.length > 9 : s, G = F(I), u = A < 0, X = u ? {
    r: 0,
    g: 0,
    b: 0,
    a: -1
  } : {
    r: 255,
    g: 255,
    b: 255,
    a: -1
  }, A = u ? A * -1 : A, u = 1 - A, !G || !X ? null : (i = R((u * G.r ** 2 + A * X.r ** 2) ** 0.5), l = R((u * G.g ** 2 + A * X.g ** 2) ** 0.5), b = R((u * G.b ** 2 + A * X.b ** 2) ** 0.5), m = G.a, X = X.a, G = m >= 0 || X >= 0, m = G ? m < 0 ? X : X < 0 ? m : m * u + X * A : 0, s ? "rgb" + (G ? "a(" : "(") + i + "," + l + "," + b + (G ? "," + R(m * 1e3) / 1e3 : "") + ")" : "#" + (4294967296 + i * 16777216 + l * 65536 + b * 256 + (G ? R(m * 255) : 0)).toString(16).slice(1, G ? void 0 : -2));
}
function bg(A) {
  return A instanceof cI ? A : A instanceof Date ? cI.fromJSDate(A) : typeof A == "number" ? cI.fromMillis(A) : cI.fromISO(A);
}
function fA() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var tx = process.env.NODE_ENV === "production" ? {
  name: "p9r3d0",
  styles: "position:absolute;right:2px;top:-5px;opacity:0.5;font-size:24px;&:hover{cursor:pointer;opacity:0.9;}"
} : {
  name: "17coeau-Tooltip",
  styles: "position:absolute;right:2px;top:-5px;opacity:0.5;font-size:24px;&:hover{cursor:pointer;opacity:0.9;};label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTXdCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3BwZXIgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQ2FsZW5kYXJUb2RheSBmcm9tIFwiLi9zdmcvY2FsZW5kYXJUb2RheVwiO1xuaW1wb3J0IFBsYWNlIGZyb20gXCIuL3N2Zy9wbGFjZVwiO1xuaW1wb3J0IFN1YmplY3QgZnJvbSBcIi4vc3ZnL3N1YmplY3RcIjtcbmltcG9ydCB7IFRvb2x0aXBQcm9wcywgVG9vbHRpcFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvdG9vbHRpcFwiO1xuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJVUkwsIGlzQWxsRGF5IH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFRvb2x0aXBQcm9wcyxcbiAgVG9vbHRpcFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFRvb2x0aXBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgYWxsRGF5ID0gaXNBbGxEYXkodGhpcy5wcm9wcy5zdGFydFRpbWUsIHRoaXMucHJvcHMuZW5kVGltZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZURpc3BsYXk6IFRvb2x0aXAuZ2V0VGltZURpc3BsYXkoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIGFsbERheSxcbiAgICAgICksXG4gICAgICBldmVudFVSTDogZ2V0Q2FsZW5kYXJVUkwoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbixcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFRpbWVEaXNwbGF5KFxuICAgIHN0YXJ0VGltZTogRGF0ZVRpbWUsXG4gICAgZW5kVGltZTogRGF0ZVRpbWUsXG4gICAgYWxsRGF5OiBib29sZWFuLFxuICApOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodGltZTogRGF0ZVRpbWUpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3QgPSB0aW1lLmRheSAlIDEwO1xuICAgICAgc3dpdGNoIChyZXN0KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gXCJzdFwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBcInJkXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxsRGF5KSB7XG4gICAgICBsZXQgZW5kRGF0ZSA9IGVuZFRpbWUubWludXMoeyBkYXk6IDEgfSk7XG5cbiAgICAgIGlmIChlbmREYXRlLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lLnRvRm9ybWF0KFwiY2NjYywgTU1NTSBkXCIpICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5XCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kRGF0ZS50b0Zvcm1hdChcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmREYXRlKSArIFwiJywgeXl5eVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kVGltZS5oYXNTYW1lKHN0YXJ0VGltZSwgXCJkYXlcIikpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgK1xuICAgICAgICAgIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArXG4gICAgICAgICAgXCJcXG5cIiArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kVGltZS50b0Zvcm1hdChcImg6bW1hXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLVxcblwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoZW5kVGltZSkgKyBcIicsIHl5eXksIGg6bW1cIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgPFN1YmplY3QgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkFcIikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb24gPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICBsZXQgbG9jYXRpb246IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uKSB7XG4gICAgICBsb2NhdGlvbiA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzIGxvY2F0aW9uXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxhY2UgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck5hbWU6IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmNhbGVuZGFyTmFtZSkge1xuICAgICAgY2FsZW5kYXJOYW1lID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgY2FsZW5kYXJOYW1lXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FsZW5kYXJUb2RheSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmNhbGVuZGFyTmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHBlclxuICAgICAgICBtb2RpZmllcnM9e1t7IG5hbWU6IFwicHJldmVudE92ZXJmbG93XCIsIG9wdGlvbnM6IHsgYWx0QXhpczogdHJ1ZSB9IH1dfVxuICAgICAgPlxuICAgICAgICB7KHsgcmVmLCBzdHlsZSwgcGxhY2VtZW50LCBhcnJvd1Byb3BzIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHt0aGlzLnByb3BzLnNob3dUb29sdGlwID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MTU2NWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbHRpcFN0eWxlcyxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIlxuICAgICAgICAgICAgICAgIGNzcz17eyBtYXJnaW5Ub3A6IFwiMHB4XCIsIHBhZGRpbmdUb3A6IFwiMTguNjc1cHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheS1saW5lYnJlYWtcIj57dGhpcy5zdGF0ZS50aW1lRGlzcGxheX08L3A+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAge2xvY2F0aW9ufVxuICAgICAgICAgICAgICB7Y2FsZW5kYXJOYW1lfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMuc3RhdGUuZXZlbnRVUkx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29weSB0byBDYWxlbmRhclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: fA
}, ex = process.env.NODE_ENV === "production" ? {
  name: "qzmnd2",
  styles: "padding-right:10px"
} : {
  name: "7nsoqz-Tooltip",
  styles: "padding-right:10px;label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzR2UiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: fA
}, ix = process.env.NODE_ENV === "production" ? {
  name: "htidso",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px)"
} : {
  name: "1289bq2-Tooltip",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px);label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR1kiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: fA
}, lx = process.env.NODE_ENV === "production" ? {
  name: "1uk7isy",
  styles: "padding-right:10px;display:flex;align-items:center"
} : {
  name: "y7165v-Tooltip",
  styles: "padding-right:10px;display:flex;align-items:center;label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SFkiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: fA
}, nx = process.env.NODE_ENV === "production" ? {
  name: "htidso",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px)"
} : {
  name: "1289bq2-Tooltip",
  styles: "overflow-wrap:break-word;max-width:calc(100% - 28px);label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SVkiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: fA
}, bx = process.env.NODE_ENV === "production" ? {
  name: "1uk7isy",
  styles: "padding-right:10px;display:flex;align-items:center"
} : {
  name: "y7165v-Tooltip",
  styles: "padding-right:10px;display:flex;align-items:center;label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSlkiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: fA
}, ux = process.env.NODE_ENV === "production" ? {
  name: "bjn8wh",
  styles: "position:relative"
} : {
  name: "xfysr9-Tooltip",
  styles: "position:relative;label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTWMiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: fA
}, Gx = process.env.NODE_ENV === "production" ? {
  name: "5ar9vx",
  styles: "margin-top:0px;padding-top:18.675px"
} : {
  name: "1micmwc-Tooltip",
  styles: "margin-top:0px;padding-top:18.675px;label:Tooltip;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TmdCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3BwZXIgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQ2FsZW5kYXJUb2RheSBmcm9tIFwiLi9zdmcvY2FsZW5kYXJUb2RheVwiO1xuaW1wb3J0IFBsYWNlIGZyb20gXCIuL3N2Zy9wbGFjZVwiO1xuaW1wb3J0IFN1YmplY3QgZnJvbSBcIi4vc3ZnL3N1YmplY3RcIjtcbmltcG9ydCB7IFRvb2x0aXBQcm9wcywgVG9vbHRpcFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvdG9vbHRpcFwiO1xuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJVUkwsIGlzQWxsRGF5IH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFRvb2x0aXBQcm9wcyxcbiAgVG9vbHRpcFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFRvb2x0aXBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgYWxsRGF5ID0gaXNBbGxEYXkodGhpcy5wcm9wcy5zdGFydFRpbWUsIHRoaXMucHJvcHMuZW5kVGltZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZURpc3BsYXk6IFRvb2x0aXAuZ2V0VGltZURpc3BsYXkoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIGFsbERheSxcbiAgICAgICksXG4gICAgICBldmVudFVSTDogZ2V0Q2FsZW5kYXJVUkwoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbixcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFRpbWVEaXNwbGF5KFxuICAgIHN0YXJ0VGltZTogRGF0ZVRpbWUsXG4gICAgZW5kVGltZTogRGF0ZVRpbWUsXG4gICAgYWxsRGF5OiBib29sZWFuLFxuICApOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodGltZTogRGF0ZVRpbWUpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3QgPSB0aW1lLmRheSAlIDEwO1xuICAgICAgc3dpdGNoIChyZXN0KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gXCJzdFwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBcInJkXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxsRGF5KSB7XG4gICAgICBsZXQgZW5kRGF0ZSA9IGVuZFRpbWUubWludXMoeyBkYXk6IDEgfSk7XG5cbiAgICAgIGlmIChlbmREYXRlLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lLnRvRm9ybWF0KFwiY2NjYywgTU1NTSBkXCIpICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5XCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kRGF0ZS50b0Zvcm1hdChcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmREYXRlKSArIFwiJywgeXl5eVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kVGltZS5oYXNTYW1lKHN0YXJ0VGltZSwgXCJkYXlcIikpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgK1xuICAgICAgICAgIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArXG4gICAgICAgICAgXCJcXG5cIiArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kVGltZS50b0Zvcm1hdChcImg6bW1hXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLVxcblwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoZW5kVGltZSkgKyBcIicsIHl5eXksIGg6bW1cIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgPFN1YmplY3QgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkFcIikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb24gPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICBsZXQgbG9jYXRpb246IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uKSB7XG4gICAgICBsb2NhdGlvbiA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzIGxvY2F0aW9uXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxhY2UgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck5hbWU6IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmNhbGVuZGFyTmFtZSkge1xuICAgICAgY2FsZW5kYXJOYW1lID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgY2FsZW5kYXJOYW1lXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FsZW5kYXJUb2RheSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmNhbGVuZGFyTmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHBlclxuICAgICAgICBtb2RpZmllcnM9e1t7IG5hbWU6IFwicHJldmVudE92ZXJmbG93XCIsIG9wdGlvbnM6IHsgYWx0QXhpczogdHJ1ZSB9IH1dfVxuICAgICAgPlxuICAgICAgICB7KHsgcmVmLCBzdHlsZSwgcGxhY2VtZW50LCBhcnJvd1Byb3BzIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHt0aGlzLnByb3BzLnNob3dUb29sdGlwID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MTU2NWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbHRpcFN0eWxlcyxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIlxuICAgICAgICAgICAgICAgIGNzcz17eyBtYXJnaW5Ub3A6IFwiMHB4XCIsIHBhZGRpbmdUb3A6IFwiMTguNjc1cHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheS1saW5lYnJlYWtcIj57dGhpcy5zdGF0ZS50aW1lRGlzcGxheX08L3A+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAge2xvY2F0aW9ufVxuICAgICAgICAgICAgICB7Y2FsZW5kYXJOYW1lfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMuc3RhdGUuZXZlbnRVUkx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29weSB0byBDYWxlbmRhclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: fA
};
class Vi extends Lc.Component {
  constructor(I) {
    super(I);
    let C = Xr(this.props.startTime, this.props.endTime);
    this.state = {
      timeDisplay: Vi.getTimeDisplay(this.props.startTime, this.props.endTime, C),
      eventURL: Cx(this.props.startTime, this.props.endTime, this.props.name, this.props.description, this.props.location, C)
    };
  }
  static getTimeDisplay(I, C, t) {
    function i(l) {
      switch (l.day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
    if (t) {
      let l = C.minus({
        day: 1
      });
      return l.hasSame(I, "day") ? I.toFormat("cccc, MMMM d") + i(I) : I.toFormat("MMM d'" + i(I) + "', yyyy") + " - " + l.toFormat("MMM d'" + i(l) + "', yyyy");
    } else
      return C.hasSame(I, "day") ? I.toFormat("cccc, MMMM d") + i(I) + `
` + I.toFormat("h:mma").toLowerCase() + " - " + C.toFormat("h:mma").toLowerCase() : I.toFormat("MMM d'" + i(I) + "', yyyy, h:mm") + I.toFormat("a").toLowerCase() + ` -
` + C.toFormat("MMM d'" + i(C) + "', yyyy, h:mm") + C.toFormat("a").toLowerCase();
  }
  render() {
    let I;
    this.props.description ? I = /* @__PURE__ */ eg("div", { className: "details description", children: [
      /* @__PURE__ */ Q("div", { css: ex, children: /* @__PURE__ */ Q(gx, { fill: "currentColor" }) }),
      /* @__PURE__ */ Q("div", { css: ix, onMouseDown: (i) => {
        i.target.nodeName == "A" && i.preventDefault();
      }, dangerouslySetInnerHTML: {
        __html: this.props.description
      } })
    ] }) : I = /* @__PURE__ */ Q("div", {});
    let C;
    this.props.location ? C = /* @__PURE__ */ eg("div", { className: "details location", children: [
      /* @__PURE__ */ Q("div", { css: lx, children: /* @__PURE__ */ Q(Ix, { fill: "currentColor" }) }),
      /* @__PURE__ */ Q("div", { css: nx, children: this.props.location })
    ] }) : C = /* @__PURE__ */ Q("div", {});
    let t;
    return this.props.calendarName ? t = /* @__PURE__ */ eg("div", { className: "details calendarName", children: [
      /* @__PURE__ */ Q("div", { css: bx, children: /* @__PURE__ */ Q(qB, { fill: "currentColor" }) }),
      /* @__PURE__ */ Q("div", { children: this.props.calendarName })
    ] }) : t = /* @__PURE__ */ Q("div", {}), /* @__PURE__ */ Q(EB, { modifiers: [{
      name: "preventOverflow",
      options: {
        altAxis: !0
      }
    }], children: ({
      ref: i,
      style: l,
      placement: b,
      arrowProps: u
    }) => /* @__PURE__ */ Q("div", { className: "tooltip", ref: i, style: l, "data-placement": b, css: [
      /* @__PURE__ */ KA("visibility:", this.props.showTooltip ? "visible" : "hidden", ";width:250px;background:#fff;text-align:left;padding:5px;border-radius:6px;color:#51565d;border:2px solid rgba(81, 86, 93, 0.1);position:absolute;z-index:1;" + (process.env.NODE_ENV === "production" ? "" : ";label:Tooltip;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTGlCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3BwZXIgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQ2FsZW5kYXJUb2RheSBmcm9tIFwiLi9zdmcvY2FsZW5kYXJUb2RheVwiO1xuaW1wb3J0IFBsYWNlIGZyb20gXCIuL3N2Zy9wbGFjZVwiO1xuaW1wb3J0IFN1YmplY3QgZnJvbSBcIi4vc3ZnL3N1YmplY3RcIjtcbmltcG9ydCB7IFRvb2x0aXBQcm9wcywgVG9vbHRpcFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvdG9vbHRpcFwiO1xuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJVUkwsIGlzQWxsRGF5IH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFRvb2x0aXBQcm9wcyxcbiAgVG9vbHRpcFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFRvb2x0aXBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgYWxsRGF5ID0gaXNBbGxEYXkodGhpcy5wcm9wcy5zdGFydFRpbWUsIHRoaXMucHJvcHMuZW5kVGltZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZURpc3BsYXk6IFRvb2x0aXAuZ2V0VGltZURpc3BsYXkoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIGFsbERheSxcbiAgICAgICksXG4gICAgICBldmVudFVSTDogZ2V0Q2FsZW5kYXJVUkwoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbixcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFRpbWVEaXNwbGF5KFxuICAgIHN0YXJ0VGltZTogRGF0ZVRpbWUsXG4gICAgZW5kVGltZTogRGF0ZVRpbWUsXG4gICAgYWxsRGF5OiBib29sZWFuLFxuICApOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodGltZTogRGF0ZVRpbWUpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3QgPSB0aW1lLmRheSAlIDEwO1xuICAgICAgc3dpdGNoIChyZXN0KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gXCJzdFwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBcInJkXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxsRGF5KSB7XG4gICAgICBsZXQgZW5kRGF0ZSA9IGVuZFRpbWUubWludXMoeyBkYXk6IDEgfSk7XG5cbiAgICAgIGlmIChlbmREYXRlLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lLnRvRm9ybWF0KFwiY2NjYywgTU1NTSBkXCIpICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5XCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kRGF0ZS50b0Zvcm1hdChcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmREYXRlKSArIFwiJywgeXl5eVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kVGltZS5oYXNTYW1lKHN0YXJ0VGltZSwgXCJkYXlcIikpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgK1xuICAgICAgICAgIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArXG4gICAgICAgICAgXCJcXG5cIiArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kVGltZS50b0Zvcm1hdChcImg6bW1hXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLVxcblwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoZW5kVGltZSkgKyBcIicsIHl5eXksIGg6bW1cIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgPFN1YmplY3QgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkFcIikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb24gPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICBsZXQgbG9jYXRpb246IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uKSB7XG4gICAgICBsb2NhdGlvbiA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzIGxvY2F0aW9uXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxhY2UgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck5hbWU6IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmNhbGVuZGFyTmFtZSkge1xuICAgICAgY2FsZW5kYXJOYW1lID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgY2FsZW5kYXJOYW1lXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FsZW5kYXJUb2RheSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmNhbGVuZGFyTmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHBlclxuICAgICAgICBtb2RpZmllcnM9e1t7IG5hbWU6IFwicHJldmVudE92ZXJmbG93XCIsIG9wdGlvbnM6IHsgYWx0QXhpczogdHJ1ZSB9IH1dfVxuICAgICAgPlxuICAgICAgICB7KHsgcmVmLCBzdHlsZSwgcGxhY2VtZW50LCBhcnJvd1Byb3BzIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHt0aGlzLnByb3BzLnNob3dUb29sdGlwID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MTU2NWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbHRpcFN0eWxlcyxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIlxuICAgICAgICAgICAgICAgIGNzcz17eyBtYXJnaW5Ub3A6IFwiMHB4XCIsIHBhZGRpbmdUb3A6IFwiMTguNjc1cHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheS1saW5lYnJlYWtcIj57dGhpcy5zdGF0ZS50aW1lRGlzcGxheX08L3A+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAge2xvY2F0aW9ufVxuICAgICAgICAgICAgICB7Y2FsZW5kYXJOYW1lfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMuc3RhdGUuZXZlbnRVUkx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29weSB0byBDYWxlbmRhclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"),
      // @ts-ignore
      this.props.tooltipStyles,
      process.env.NODE_ENV === "production" ? "" : ";label:Tooltip;",
      process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErS1kiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL3Rvb2x0aXAudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYWxlbmRhclRvZGF5IGZyb20gXCIuL3N2Zy9jYWxlbmRhclRvZGF5XCI7XG5pbXBvcnQgUGxhY2UgZnJvbSBcIi4vc3ZnL3BsYWNlXCI7XG5pbXBvcnQgU3ViamVjdCBmcm9tIFwiLi9zdmcvc3ViamVjdFwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3BzLCBUb29sdGlwU3RhdGUgfSBmcm9tIFwiLi90eXBlcy90b29sdGlwXCI7XG5pbXBvcnQgeyBnZXRDYWxlbmRhclVSTCwgaXNBbGxEYXkgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgVG9vbHRpcFByb3BzLFxuICBUb29sdGlwU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9vbHRpcFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBhbGxEYXkgPSBpc0FsbERheSh0aGlzLnByb3BzLnN0YXJ0VGltZSwgdGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lRGlzcGxheTogVG9vbHRpcC5nZXRUaW1lRGlzcGxheShcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICAgIGV2ZW50VVJMOiBnZXRDYWxlbmRhclVSTChcbiAgICAgICAgdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMuZW5kVGltZSxcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICB0aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLFxuICAgICAgICBhbGxEYXksXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0VGltZURpc3BsYXkoXG4gICAgc3RhcnRUaW1lOiBEYXRlVGltZSxcbiAgICBlbmRUaW1lOiBEYXRlVGltZSxcbiAgICBhbGxEYXk6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh0aW1lOiBEYXRlVGltZSk6IHN0cmluZyB7XG4gICAgICBsZXQgcmVzdCA9IHRpbWUuZGF5ICUgMTA7XG4gICAgICBzd2l0Y2ggKHJlc3QpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gXCJuZFwiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbGxEYXkpIHtcbiAgICAgIGxldCBlbmREYXRlID0gZW5kVGltZS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgaWYgKGVuZERhdGUuaGFzU2FtZShzdGFydFRpbWUsIFwiZGF5XCIpKSB7XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcbiAgICAgICAgICAgIFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KHN0YXJ0VGltZSkgKyBcIicsIHl5eXlcIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmREYXRlLnRvRm9ybWF0KFwiTU1NIGQnXCIgKyBnZXRPcmRpbmFsU3VmZml4KGVuZERhdGUpICsgXCInLCB5eXl5XCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbmRUaW1lLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImNjY2MsIE1NTU0gZFwiKSArXG4gICAgICAgICAgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICtcbiAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJoOm1tYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5LCBoOm1tXCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICBcIiAtXFxuXCIgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIGVuZFRpbWUudG9Gb3JtYXQoXCJhXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uOiBKU1guRWxlbWVudDtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY3NzPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8U3ViamVjdCBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGxvY2F0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgbG9jYXRpb25cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQbGFjZSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3sgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiwgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gMjhweClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gPGRpdj48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IGNhbGVuZGFyTmFtZTogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuY2FsZW5kYXJOYW1lKSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscyBjYWxlbmRhck5hbWVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYWxlbmRhclRvZGF5IGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGVuZGFyTmFtZSA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wcGVyXG4gICAgICAgIG1vZGlmaWVycz17W3sgbmFtZTogXCJwcmV2ZW50T3ZlcmZsb3dcIiwgb3B0aW9uczogeyBhbHRBeGlzOiB0cnVlIH0gfV19XG4gICAgICA+XG4gICAgICAgIHsoeyByZWYsIHN0eWxlLCBwbGFjZW1lbnQsIGFycm93UHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYXRhLXBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAke3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTY1ZDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDgxLCA4NiwgOTMsIDAuMSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAtdGV4dFwiXG4gICAgICAgICAgICAgICAgY3NzPXt7IG1hcmdpblRvcDogXCIwcHhcIiwgcGFkZGluZ1RvcDogXCIxOC42NzVweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LWxpbmVicmVha1wiPnt0aGlzLnN0YXRlLnRpbWVEaXNwbGF5fTwvcD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICAgIHtjYWxlbmRhck5hbWV9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17dGhpcy5zdGF0ZS5ldmVudFVSTH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb3B5IHRvIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Qb3BwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
    ], children: /* @__PURE__ */ eg("div", { css: ux, children: [
      /* @__PURE__ */ Q("div", { css: tx, onClick: this.props.closeTooltip, children: "×" }),
      /* @__PURE__ */ Q("h2", { className: "tooltip-text", css: Gx, children: this.props.name }),
      /* @__PURE__ */ Q("p", { className: "display-linebreak", children: this.state.timeDisplay }),
      I,
      C,
      t,
      /* @__PURE__ */ Q("a", { href: this.state.eventURL, target: "_blank", onMouseDown: (G) => G.preventDefault(), css: /* @__PURE__ */ KA({
        fontSize: "13px",
        tabIndex: -1
      }, process.env.NODE_ENV === "production" ? "" : ";label:Tooltip;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtT2dCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy90b29sdGlwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3BwZXIgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQ2FsZW5kYXJUb2RheSBmcm9tIFwiLi9zdmcvY2FsZW5kYXJUb2RheVwiO1xuaW1wb3J0IFBsYWNlIGZyb20gXCIuL3N2Zy9wbGFjZVwiO1xuaW1wb3J0IFN1YmplY3QgZnJvbSBcIi4vc3ZnL3N1YmplY3RcIjtcbmltcG9ydCB7IFRvb2x0aXBQcm9wcywgVG9vbHRpcFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvdG9vbHRpcFwiO1xuaW1wb3J0IHsgZ2V0Q2FsZW5kYXJVUkwsIGlzQWxsRGF5IH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFRvb2x0aXBQcm9wcyxcbiAgVG9vbHRpcFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFRvb2x0aXBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgYWxsRGF5ID0gaXNBbGxEYXkodGhpcy5wcm9wcy5zdGFydFRpbWUsIHRoaXMucHJvcHMuZW5kVGltZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZURpc3BsYXk6IFRvb2x0aXAuZ2V0VGltZURpc3BsYXkoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIGFsbERheSxcbiAgICAgICksXG4gICAgICBldmVudFVSTDogZ2V0Q2FsZW5kYXJVUkwoXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbixcbiAgICAgICAgYWxsRGF5LFxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFRpbWVEaXNwbGF5KFxuICAgIHN0YXJ0VGltZTogRGF0ZVRpbWUsXG4gICAgZW5kVGltZTogRGF0ZVRpbWUsXG4gICAgYWxsRGF5OiBib29sZWFuLFxuICApOiBzdHJpbmcge1xuICAgIGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodGltZTogRGF0ZVRpbWUpOiBzdHJpbmcge1xuICAgICAgbGV0IHJlc3QgPSB0aW1lLmRheSAlIDEwO1xuICAgICAgc3dpdGNoIChyZXN0KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gXCJzdFwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiBcInJkXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwidGhcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWxsRGF5KSB7XG4gICAgICBsZXQgZW5kRGF0ZSA9IGVuZFRpbWUubWludXMoeyBkYXk6IDEgfSk7XG5cbiAgICAgIGlmIChlbmREYXRlLmhhc1NhbWUoc3RhcnRUaW1lLCBcImRheVwiKSkge1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lLnRvRm9ybWF0KFwiY2NjYywgTU1NTSBkXCIpICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXG4gICAgICAgICAgICBcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChzdGFydFRpbWUpICsgXCInLCB5eXl5XCIsXG4gICAgICAgICAgKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kRGF0ZS50b0Zvcm1hdChcIk1NTSBkJ1wiICsgZ2V0T3JkaW5hbFN1ZmZpeChlbmREYXRlKSArIFwiJywgeXl5eVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZW5kVGltZS5oYXNTYW1lKHN0YXJ0VGltZSwgXCJkYXlcIikpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzdGFydFRpbWUudG9Gb3JtYXQoXCJjY2NjLCBNTU1NIGRcIikgK1xuICAgICAgICAgIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArXG4gICAgICAgICAgXCJcXG5cIiArXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgZW5kVGltZS50b0Zvcm1hdChcImg6bW1hXCIpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3RhcnRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoc3RhcnRUaW1lKSArIFwiJywgeXl5eSwgaDptbVwiLFxuICAgICAgICAgICkgK1xuICAgICAgICAgIHN0YXJ0VGltZS50b0Zvcm1hdChcImFcIikudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgXCIgLVxcblwiICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFxuICAgICAgICAgICAgXCJNTU0gZCdcIiArIGdldE9yZGluYWxTdWZmaXgoZW5kVGltZSkgKyBcIicsIHl5eXksIGg6bW1cIixcbiAgICAgICAgICApICtcbiAgICAgICAgICBlbmRUaW1lLnRvRm9ybWF0KFwiYVwiKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbjogSlNYLkVsZW1lbnQ7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNzcz17eyBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgPFN1YmplY3QgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkFcIikge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb24gPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICBsZXQgbG9jYXRpb246IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uKSB7XG4gICAgICBsb2NhdGlvbiA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzIGxvY2F0aW9uXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxhY2UgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIsIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDI4cHgpXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9IDxkaXY+PC9kaXY+O1xuICAgIH1cblxuICAgIGxldCBjYWxlbmRhck5hbWU6IEpTWC5FbGVtZW50O1xuICAgIGlmICh0aGlzLnByb3BzLmNhbGVuZGFyTmFtZSkge1xuICAgICAgY2FsZW5kYXJOYW1lID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMgY2FsZW5kYXJOYW1lXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FsZW5kYXJUb2RheSBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmNhbGVuZGFyTmFtZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxlbmRhck5hbWUgPSA8ZGl2PjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcHBlclxuICAgICAgICBtb2RpZmllcnM9e1t7IG5hbWU6IFwicHJldmVudE92ZXJmbG93XCIsIG9wdGlvbnM6IHsgYWx0QXhpczogdHJ1ZSB9IH1dfVxuICAgICAgPlxuICAgICAgICB7KHsgcmVmLCBzdHlsZSwgcGxhY2VtZW50LCBhcnJvd1Byb3BzIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJHt0aGlzLnByb3BzLnNob3dUb29sdGlwID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1MTU2NWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbHRpcFN0eWxlcyxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHRcIlxuICAgICAgICAgICAgICAgIGNzcz17eyBtYXJnaW5Ub3A6IFwiMHB4XCIsIHBhZGRpbmdUb3A6IFwiMTguNjc1cHhcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheS1saW5lYnJlYWtcIj57dGhpcy5zdGF0ZS50aW1lRGlzcGxheX08L3A+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAge2xvY2F0aW9ufVxuICAgICAgICAgICAgICB7Y2FsZW5kYXJOYW1lfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3RoaXMuc3RhdGUuZXZlbnRVUkx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29weSB0byBDYWxlbmRhclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"), children: "Copy to Calendar" })
    ] }) }) });
  }
}
function Ri() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ax = process.env.NODE_ENV === "production" ? {
  name: "18i2ql3",
  styles: "@media (max-width: 599px){display:none;}"
} : {
  name: "190p05k-Event",
  styles: "@media (max-width: 599px){display:none;};label:Event;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0c0QiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: Ri
}, dx = process.env.NODE_ENV === "production" ? {
  name: "obigwj",
  styles: "border-radius:3px;width:100%;&:hover{cursor:pointer;background:rgba(81, 86, 93, 0.1);}"
} : {
  name: "17undz0-Event",
  styles: "border-radius:3px;width:100%;&:hover{cursor:pointer;background:rgba(81, 86, 93, 0.1);};label:Event;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURxQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: Ri
}, rx = process.env.NODE_ENV === "production" ? {
  name: "urwrh8",
  styles: "position:relative;&:focus{outline:none;}"
} : {
  name: "xrcpmh-Event",
  styles: "position:relative;&:focus{outline:none;};label:Event;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: Ri
}, Xx = process.env.NODE_ENV === "production" ? {
  name: "f3vz0n",
  styles: "font-weight:500"
} : {
  name: "7rb84a-Event",
  styles: "font-weight:500;label:Event;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0h3QiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: Ri
};
class Ya extends Lc.Component {
  constructor(I) {
    super(I), this.state = {
      startTime: this.props.startTime,
      endTime: this.props.endTime,
      showTooltip: !1
    }, this.toggleTooltip = this.toggleTooltip.bind(this), this.closeTooltip = this.closeTooltip.bind(this);
  }
  closeTooltip() {
    this.setState({
      showTooltip: !1
    });
  }
  toggleTooltip() {
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  }
  render() {
    return /* @__PURE__ */ Q(Cr, { children: /* @__PURE__ */ eg(
      "div",
      {
        className: "event",
        tabIndex: "0",
        onBlur: this.closeTooltip,
        css: rx,
        children: [
          /* @__PURE__ */ Q(rr, { children: ({
            ref: I
          }) => /* @__PURE__ */ Q("div", { css: [
            dx,
            // @ts-ignore
            this.props.eventStyles,
            process.env.NODE_ENV === "production" ? "" : ";label:Event;",
            process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
          ], onClick: this.toggleTooltip, ref: I, children: /* @__PURE__ */ eg("div", { className: "event-text", css: [
            "color:#51565d;padding:3px 0px 3px 20px;margin-right:5px;overflow-x:hidden;white-space:nowrap;position:relative;text-align:left;",
            // @ts-ignore
            this.props.eventTextStyles,
            process.env.NODE_ENV === "production" ? "" : ";label:Event;",
            process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVrQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
          ], children: [
            /* @__PURE__ */ Q("span", { css: [
              {
                position: "absolute",
                top: "5px",
                left: "2px",
                color: this.props.color || "#4786ff",
                height: "15px",
                width: "15px"
              },
              // @ts-ignore
              this.props.eventCircleStyles,
              process.env.NODE_ENV === "production" ? "" : ";label:Event;",
              process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9ldmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZvQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvZXZlbnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cblxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYW5hZ2VyLCBSZWZlcmVuY2UgfSBmcm9tIFwicmVhY3QtcG9wcGVyXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgRmliZXJNYW51YWxSZWNvcmRJY29uIGZyb20gXCIuL3N2Zy9maWJlck1hbnVhbFJlY29yZFwiO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSBcIi4vdG9vbHRpcFwiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcywgRXZlbnRTdGF0ZSB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxFdmVudFByb3BzLCBFdmVudFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFdmVudFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0VGltZTogdGhpcy5wcm9wcy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiB0aGlzLnByb3BzLmVuZFRpbWUsXG4gICAgICBzaG93VG9vbHRpcDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VUb29sdGlwID0gdGhpcy5jbG9zZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFuYWdlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50XCJcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWZlcmVuY2U+XG4gICAgICAgICAgICB7KHsgcmVmIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg4MSwgODYsIDkzLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ldmVudFN0eWxlcyxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVG9vbHRpcH1cbiAgICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50LXRleHRcIlxuICAgICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4IDNweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZXZlbnRUZXh0U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIHx8IFwiIzQ3ODZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV2ZW50Q2lyY2xlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmliZXJNYW51YWxSZWNvcmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3RhcnRUaW1lLnRvRm9ybWF0KFwiaDptbWEgXCIpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXt7IGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1JlZmVyZW5jZT5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSl9XG4gICAgICAgICAgICBlbmRUaW1lPXt0b19kYXRldGltZSh0aGlzLnByb3BzLmVuZFRpbWUpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgIHRvb2x0aXBTdHlsZXM9e3RoaXMucHJvcHMudG9vbHRpcFN0eWxlc31cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXt0aGlzLnN0YXRlLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgY2xvc2VUb29sdGlwPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgICAgIGNhbGVuZGFyTmFtZT17dGhpcy5wcm9wcy5jYWxlbmRhck5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hbmFnZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
            ], children: /* @__PURE__ */ Q($B, { fill: "currentColor", fontSize: "inherit", width: "100%" }) }),
            /* @__PURE__ */ Q("span", { css: ax, children: this.state.startTime.toFormat("h:mma ") }),
            /* @__PURE__ */ Q("span", { css: Xx, children: this.props.name })
          ] }) }) }),
          /* @__PURE__ */ Q(Vi, { name: this.props.name, startTime: bg(this.props.startTime), endTime: bg(this.props.endTime), description: this.props.description, location: this.props.location, tooltipStyles: this.props.tooltipStyles, showTooltip: this.state.showTooltip, closeTooltip: this.closeTooltip, calendarName: this.props.calendarName })
        ]
      }
    ) });
  }
}
const sx = ["ES", "PT", "FR", "SL", "DE", "PL"], Oe = {
  EN: {
    MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    DAYS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  ES: {
    MONTHS: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nombre", "Diciembre"],
    DAYS: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
  },
  PT: {
    MONTHS: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Nome", "Dezembro"],
    DAYS: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  },
  FR: {
    MONTHS: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    DAYS: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  },
  SL: {
    MONTHS: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
    DAYS: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
  },
  DE: {
    MONTHS: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    DAYS: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  },
  PL: {
    MONTHS: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    DAYS: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"]
  },
  IS: {
    MONTHS: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
    DAYS: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"]
  }
};
function Zx() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ox = process.env.NODE_ENV === "production" ? {
  name: "f3vz0n",
  styles: "font-weight:500"
} : {
  name: "jc1ljl-MultiEvent",
  styles: "font-weight:500;label:MultiEvent;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSndCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */",
  toString: Zx
};
class mx extends Lc.Component {
  constructor(I) {
    super(I);
    let C = this.props.color || "#4786ff", t = bg(this.props.startTime), i = bg(this.props.endTime);
    this.state = {
      startTime: t,
      endTime: i,
      color: C,
      darkColor: cx(-0.35, C) ?? "#FFFF",
      allDay: Xr(t, i),
      showTooltip: !1
    }, this.toggleTooltip = this.toggleTooltip.bind(this), this.closeTooltip = this.closeTooltip.bind(this);
  }
  closeTooltip() {
    this.setState({
      showTooltip: !1
    });
  }
  toggleTooltip() {
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  }
  render() {
    const I = /* @__PURE__ */ KA('margin-left:8px;border-top-left-radius:0px;border-bottom-left-radius:0px;&:before{content:"";position:absolute;left:0;bottom:0;width:0;height:0;border-right:8px solid ', this.state.color, ";border-top:13px solid transparent;border-bottom:13px solid transparent;}&:hover::before{cursor:pointer;border-right-color:", this.state.darkColor, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3lCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"), C = /* @__PURE__ */ KA('margin-right:8px;border-top-right-radius:0px;border-bottom-right-radius:0px;&:after{content:"";position:absolute;right:0;bottom:0;width:0;height:0;border-left:8px solid ', this.state.color, ";border-top:13px solid transparent;border-bottom:13px solid transparent;}&:hover::after{cursor:pointer;border-left-color:", this.state.darkColor, ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRTBCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */");
    return /* @__PURE__ */ Q(
      "div",
      {
        className: "event",
        tabIndex: "0",
        onBlur: this.closeTooltip,
        css: /* @__PURE__ */ KA("width:", "calc(" + this.props.length + "00% + " + ((this.props.length || 1) - 1) + "px)", ";&:focus{outline:none;}position:relative;" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmdCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"),
        children: /* @__PURE__ */ eg(Cr, { children: [
          /* @__PURE__ */ Q(rr, { children: ({
            ref: t
          }) => /* @__PURE__ */ Q("div", { css: [
            /* @__PURE__ */ KA(
              "width:",
              // @ts-ignore
              "calc(100% - " + 8 * (Number(this.props.arrowLeft || !1) + Number(this.props.arrowRight || !1)) + "px)",
              ";border-radius:3px;background:",
              this.state.color,
              ";&:hover{background:",
              this.state.darkColor,
              ";}",
              this.props.arrowLeft && I,
              " ",
              this.props.arrowRight && C,
              ";" + (process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;"),
              process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R3FCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
            ),
            // @ts-ignore
            this.props.multiEventStyles,
            process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;",
            process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2dCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
          ], onClick: this.toggleTooltip, ref: t, children: /* @__PURE__ */ eg("div", { className: "event-text", css: /* @__PURE__ */ KA({
            padding: "3px 0px",
            color: "white",
            marginLeft: this.props.arrowLeft ? "2px" : "5px",
            marginRight: this.props.arrowRight ? "0px" : "5px",
            overflowX: "hidden",
            whiteSpace: "nowrap",
            position: "relative",
            textAlign: "left",
            "&:hover": {
              cursor: "pointer"
            }
          }, process.env.NODE_ENV === "production" ? "" : ";label:MultiEvent;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSWtCIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9tdWx0aUV2ZW50LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFJlZmVyZW5jZSB9IGZyb20gXCJyZWFjdC1wb3BwZXJcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcywgTXVsdGlFdmVudFN0YXRlIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgaXNBbGxEYXksIHBTQkMsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIE11bHRpRXZlbnRQcm9wcyxcbiAgTXVsdGlFdmVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgfHwgXCIjNDc4NmZmXCI7XG4gICAgbGV0IHN0YXJ0X3RpbWUgPSB0b19kYXRldGltZSh0aGlzLnByb3BzLnN0YXJ0VGltZSk7XG4gICAgbGV0IGVuZF90aW1lID0gdG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydFRpbWU6IHN0YXJ0X3RpbWUsXG4gICAgICBlbmRUaW1lOiBlbmRfdGltZSxcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIGRhcmtDb2xvcjogcFNCQygtMC4zNSwgY29sb3IpID8/IFwiI0ZGRkZcIixcbiAgICAgIGFsbERheTogaXNBbGxEYXkoc3RhcnRfdGltZSwgZW5kX3RpbWUpLFxuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlVG9vbHRpcCA9IHRoaXMuY2xvc2VUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgYm9yZGVyLXRvcDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoaXMuc3RhdGUuZGFya0NvbG9yfTtcbiAgICAgIH1cbiAgICBgO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICR7dGhpcy5zdGF0ZS5jb2xvcn07XG4gICAgICAgIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7dGhpcy5zdGF0ZS5kYXJrQ29sb3J9O1xuICAgICAgfVxuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJldmVudFwiXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6ICR7XCJjYWxjKFwiICtcbiAgICAgICAgICB0aGlzLnByb3BzLmxlbmd0aCArXG4gICAgICAgICAgXCIwMCUgKyBcIiArXG4gICAgICAgICAgKCh0aGlzLnByb3BzLmxlbmd0aCB8fCAxKSAtIDEpICtcbiAgICAgICAgICBcInB4KVwifTtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPE1hbmFnZXI+XG4gICAgICAgICAgPFJlZmVyZW5jZT5cbiAgICAgICAgICAgIHsoeyByZWYgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICBcImNhbGMoMTAwJSAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICA4ICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChOdW1iZXIodGhpcy5wcm9wcy5hcnJvd0xlZnQgfHwgZmFsc2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYXJyb3dSaWdodCB8fCBmYWxzZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcInB4KVwiXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmNvbG9yfTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmRhcmtDb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLmFycm93TGVmdCAmJiBsZWZ0QXJyb3d9XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5hcnJvd1JpZ2h0ICYmIHJpZ2h0QXJyb3d9XG4gICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aUV2ZW50U3R5bGVzLFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVUb29sdGlwfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMucHJvcHMuYXJyb3dMZWZ0ID8gXCIycHhcIiA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLnByb3BzLmFycm93UmlnaHQgPyBcIjBweFwiIDogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsbERheVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YXJ0VGltZS50b0Zvcm1hdChcImg6bW1hIFwiKX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17eyBmb250V2VpZ2h0OiBcIjUwMFwiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9SZWZlcmVuY2U+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0YXJ0VGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5zdGFydFRpbWUpfVxuICAgICAgICAgICAgZW5kVGltZT17dG9fZGF0ZXRpbWUodGhpcy5wcm9wcy5lbmRUaW1lKX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICB0b29sdGlwU3R5bGVzPXt0aGlzLnByb3BzLnRvb2x0aXBTdHlsZXN9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17dGhpcy5zdGF0ZS5zaG93VG9vbHRpcH1cbiAgICAgICAgICAgIGNsb3NlVG9vbHRpcD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgICAgICBjYWxlbmRhck5hbWU9e3RoaXMucHJvcHMuY2FsZW5kYXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFuYWdlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"), children: [
            this.state.allDay ? "" : this.state.startTime.toFormat("h:mma "),
            /* @__PURE__ */ Q("span", { css: ox, children: this.props.name })
          ] }) }) }),
          /* @__PURE__ */ Q(Vi, { name: this.props.name, startTime: bg(this.props.startTime), endTime: bg(this.props.endTime), description: this.props.description, location: this.props.location, tooltipStyles: this.props.tooltipStyles, showTooltip: this.state.showTooltip, closeTooltip: this.closeTooltip, calendarName: this.props.calendarName })
        ] })
      }
    );
  }
}
function hx(A) {
  return new Promise((I, C) => {
    const t = document.createElement("script");
    t.src = "https://apis.google.com/js/api.js", document.body.appendChild(t), t.onload = () => {
      gapi.load("client", () => {
        gapi.client.init({
          apiKey: A
        }).then(() => {
          gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest").then(() => I("GAPI client successfully loaded for API"), (i) => C(i));
        });
      });
    };
  });
}
function Vx(A, I = 1e3) {
  return gapi.client.calendar.events.list({
    calendarId: A,
    maxResults: I
  });
}
function zt() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Rx = process.env.NODE_ENV === "production" ? {
  name: "1hrdiqt",
  styles: "font-size:14px;text-decoration:none;color:inherit;&:hover{text-decoration:underline;}"
} : {
  name: "d0cexe-Calendar",
  styles: "font-size:14px;text-decoration:none;color:inherit;&:hover{text-decoration:underline;};label:Calendar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaXhCd0IiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBycnVsZXN0ciB9IGZyb20gXCJycnVsZVwiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBndWQgZnJvbSBcImd1ZFwiO1xuXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBMYW5ndWFnZXMsIGF2YWlsYWJsZUxhbmd1YWdlcyB9IGZyb20gXCIuL2xhbmd1YWdlc1wiO1xuaW1wb3J0IE11bHRpRXZlbnQgZnJvbSBcIi4vbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJQcm9wcywgQ2FsZW5kYXJTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBFdmVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXMvZXZlbnRcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzL211bHRpRXZlbnRcIjtcbmltcG9ydCB7IGdldEV2ZW50c0xpc3QsIGxvYWRDYWxlbmRhckFQSSB9IGZyb20gXCIuL3V0aWxzL2dvb2dsZUNhbGVuZGFyQVBJXCI7XG5pbXBvcnQgeyBpc011bHRpRXZlbnQsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBDYWxlbmRhclByb3BzLFxuICBDYWxlbmRhclN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbGVuZGFyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vbnRoTmFtZXM6IFsuLi5MYW5ndWFnZXMuRU4uTU9OVEhTXSxcbiAgICAgIGRheXM6IFsuLi5MYW5ndWFnZXMuRU4uREFZU10sXG4gICAgICB0b2RheTogRGF0ZVRpbWUubm93KCksXG4gICAgICBjdXJyZW50OiBEYXRlVGltZS51dGMoKS5zdGFydE9mKFwibW9udGhcIiksIC8vY3VycmVudCBwb3NpdGlvbiBvbiBjYWxlbmRhciAoZmlyc3QgZGF5IG9mIG1vbnRoKVxuICAgICAgY2FsZW5kYXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sIC8vYWxsIGRheSBvciBtdWx0aSBkYXkgZXZlbnRzXG4gICAgICBzaW5nbGVFdmVudHM6IFtdLCAvL3NpbmdsZSBkYXkgZXZlbnRzXG4gICAgICB1c2VyVGltZXpvbmU6IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogXCJzeXN0ZW1cIiB9KS56b25lLFxuICAgICAgc2hvd0Zvb3RlcjogcHJvcHMuc2hvd0Zvb3RlciB8fCB0cnVlLFxuICAgICAgc2hvd0Fycm93OiBwcm9wcy5zaG93QXJyb3cgfHwgdHJ1ZSxcbiAgICAgIHByb2Nlc3NlZENhbGVuZGFyczogW10sXG4gICAgfTtcblxuICAgIHRoaXMubGFzdE1vbnRoID0gdGhpcy5sYXN0TW9udGguYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHRNb250aCA9IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmxhbmd1YWdlICYmXG4gICAgICBhdmFpbGFibGVMYW5ndWFnZXMuaW5jbHVkZXModGhpcy5wcm9wcy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpKVxuICAgICkge1xuICAgICAgLy8gdHJ5IHRvIGNoYW5nZSBsYW5ndWFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRoaXMucHJvcHMubGFuZ3VhZ2UudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgbW9udGhOYW1lczogWy4uLkxhbmd1YWdlc1tsYW5nXS5NT05USFNdLFxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGRheXM6IFsuLi5MYW5ndWFnZXNbbGFuZ10uREFZU10sXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjaG9vc2luZyBhIG5ldyBsYW5ndWFnZVwiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2luaXQgYW5kIGxvYWQgZ29vZ2xlIGNhbGVuZGFyIGFwaVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkQ2FsZW5kYXJBUEkodGhpcy5wcm9wcy5hcGlLZXkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgR0FQSSBjbGllbnQgZm9yIEFQSVwiLCBlcnIpO1xuICAgIH1cblxuICAgIC8vR2V0IGV2ZW50cyBmcm9tIGFsbCBjYWxlbmRhcnNcbiAgICBmb3IgKGxldCBjYWxlbmRhciBvZiB0aGlzLnByb3BzLmNhbGVuZGFycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy9xdWVyeSBhcGkgZm9yIGV2ZW50c1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRFdmVudHNMaXN0KGNhbGVuZGFyLmNhbGVuZGFySWQpO1xuXG4gICAgICAgIC8vcHJvY2VzcyBldmVudHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMucHJvY2Vzc0V2ZW50cyhcbiAgICAgICAgICByZXMucmVzdWx0Lml0ZW1zLFxuICAgICAgICAgIHJlcy5yZXN1bHQuc3VtbWFyeSxcbiAgICAgICAgICBjYWxlbmRhci5jb2xvciA/PyBcIlwiLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vZml4IGR1cGxpY2F0ZSBjYWxlbmRhcnNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByb2Nlc3NlZENhbGVuZGFycy5pbmNsdWRlcyhjYWxlbmRhci5jYWxlbmRhcklkKSkge1xuICAgICAgICAgIC8vc2V0IHN0YXRlIHdpdGggY2FsY3VsYXRlZCB2YWx1ZXNcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV2ZW50czogWy4uLnRoaXMuc3RhdGUuZXZlbnRzLCAuLi5ldmVudHNbMF1dLFxuICAgICAgICAgICAgc2luZ2xlRXZlbnRzOiBbLi4udGhpcy5zdGF0ZS5zaW5nbGVFdmVudHMsIC4uLmV2ZW50c1sxXV0sXG4gICAgICAgICAgICBwcm9jZXNzZWRDYWxlbmRhcnM6IFtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wcm9jZXNzZWRDYWxlbmRhcnMsXG4gICAgICAgICAgICAgIGNhbGVuZGFyLmNhbGVuZGFySWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgZXZlbnRzXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9nZXQgZWFzeSB0byB3b3JrIHdpdGggZXZlbnRzIGFuZCBzaW5nbGVFdmVudHMgZnJvbSByZXNwb25zZVxuICBwcm9jZXNzRXZlbnRzKGl0ZW1zOiBhbnlbXSwgY2FsZW5kYXJOYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgbGV0IHNpbmdsZUV2ZW50czogYW55W10gPSBbXTtcbiAgICBsZXQgZXZlbnRzOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjaGFuZ2VkOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjYW5jZWxsZWQ6IGFueVtdID0gW107XG5cbiAgICBpdGVtcy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lKSB7XG4gICAgICAgIC8vY2FuY2VsbGVkIG9yIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGlmIChldmVudC5zdGF0dXMgPT0gXCJjYW5jZWxsZWRcIikge1xuICAgICAgICAgIC8vY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICAgIGNhbmNlbGxlZC5wdXNoKHtcbiAgICAgICAgICAgIHJlY3VycmluZ0V2ZW50SWQ6IGV2ZW50LnJlY3VycmluZ0V2ZW50SWQsXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0VGltZTogZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc3RhdHVzID09IFwiY29uZmlybWVkXCIpIHtcbiAgICAgICAgICAvL2NoYW5nZWQgZXZlbnRzXG4gICAgICAgICAgY2hhbmdlZC5wdXNoKHtcbiAgICAgICAgICAgIHJlY3VycmluZ0V2ZW50SWQ6IGV2ZW50LnJlY3VycmluZ0V2ZW50SWQsXG4gICAgICAgICAgICBuYW1lOiBldmVudC5zdW1tYXJ5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgb3JpZ2luYWxTdGFydFRpbWU6IGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGUpLFxuICAgICAgICAgICAgbmV3U3RhcnRUaW1lOiBldmVudC5zdGFydC5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlKSxcbiAgICAgICAgICAgIG5ld0VuZFRpbWU6IGV2ZW50LmVuZC5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGUpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNhdGVnb3JpemVkOiBcIiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNvbmZpcm1lZFwiKSB7XG4gICAgICAgIC8vbm9ybWFsIGV2ZW50c1xuICAgICAgICBsZXQgbmV3RXZlbnQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIG5hbWU6IGV2ZW50LnN1bW1hcnksXG4gICAgICAgICAgc3RhcnRUaW1lOiBldmVudC5zdGFydC5kYXRlVGltZVxuICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKVxuICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGUpLFxuICAgICAgICAgIGVuZFRpbWU6IGV2ZW50LmVuZC5kYXRlVGltZVxuICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlVGltZSlcbiAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZSksXG4gICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICByZWN1cnJlbmNlOiBldmVudC5yZWN1cnJlbmNlLFxuICAgICAgICAgIGNoYW5nZWRFdmVudHM6IFtdLFxuICAgICAgICAgIGNhbmNlbGxlZEV2ZW50czogW10sXG4gICAgICAgICAgY2FsZW5kYXJOYW1lOiBjYWxlbmRhck5hbWUsXG4gICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpc011bHRpRXZlbnQobmV3RXZlbnQuc3RhcnRUaW1lLCBuZXdFdmVudC5lbmRUaW1lKSkge1xuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW5nbGVFdmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNhdGVnb3JpemVkOiBcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9hZGQgY2hhbmdlZCBldmVudHMgYW5kIGNhbmNlbGxlZCBldmVudHMgdG8gY29ycmVzcG9uZGluZyBldmVudCBvYmplY3RcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICAvL3B1c2ggY2hhbmdlZCBldmVudHNcbiAgICAgICAgY2hhbmdlZFxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5nZSkgPT4gY2hhbmdlLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2hhbmdlZEV2ZW50cy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9wdXNoIGNhbmNlbGxlZCBldmVudHNcbiAgICAgICAgY2FuY2VsbGVkXG4gICAgICAgICAgLmZpbHRlcigoY2FuY2VsKSA9PiBjYW5jZWwucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jYW5jZWxsZWRFdmVudHMucHVzaChjYW5jZWwub3JpZ2luYWxTdGFydFRpbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2luZ2xlRXZlbnRzLmZvckVhY2goKGV2ZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgLy9wdXNoIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGNoYW5nZWRcbiAgICAgICAgICAuZmlsdGVyKChjaGFuZ2UpID0+IGNoYW5nZS5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNoYW5nZWRFdmVudHMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vcHVzaCBjYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgIGNhbmNlbGxlZFxuICAgICAgICAgIC5maWx0ZXIoKGNhbmNlbCkgPT4gY2FuY2VsLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNhbmNlbCkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2FuY2VsbGVkRXZlbnRzLnB1c2goY2FuY2VsLm9yaWdpbmFsU3RhcnRUaW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBbZXZlbnRzLCBzaW5nbGVFdmVudHNdO1xuICB9XG5cbiAgLy9zZXRzIGN1cnJlbnQgbW9udGggdG8gcHJldmlvdXMgbW9udGhcbiAgbGFzdE1vbnRoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnQubWludXMoeyBtb250aDogMSB9KSB9KTtcbiAgfVxuXG4gIC8vc2V0cyBjdXJyZW50IG1vbnRoIHRvIGZvbGxvd2luZyBtb250aFxuICBuZXh0TW9udGgoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudC5wbHVzKHsgbW9udGg6IDEgfSkgfSk7XG4gIH1cblxuICBjbGVhckV2ZW50cygpIHtcbiAgICBsZXQgZGF5c0luTW9udGggPSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXktXCIgKyBpKTtcbiAgICAgIHdoaWxlIChub2RlLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vcmVuZGVycyB0aGUgZGF5IG9mIHdlZWsgbmFtZXNcbiAgcmVuZGVyRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXlzLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkYXktbmFtZVwiXG4gICAgICAgIGtleT17XCJkYXktb2Ytd2Vlay1cIiArIGl9XG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIHsgYm9yZGVyQ29sb3I6IFwiTGlnaHRHcmF5XCIgfSxcbiAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICB7eH1cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICB9XG5cbiAgLy9yZW5kZXJzIHRoZSBibG9ja3MgZm9yIHRoZSBkYXlzIG9mIGVhY2ggbW9udGhcbiAgcmVuZGVyRGF0ZXMoZXZlbnRzRWFjaERheTogYW55W10pOiBhbnlbXSB7XG4gICAgbGV0IGN1cnJlbnREYXlzSW5Nb250aCA9IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbGV0IGRheXMgPSBbLi4uQXJyYXkoY3VycmVudERheXNJbk1vbnRoICsgMSkua2V5cygpXS5zbGljZSgxKTsgLy8gY3JlYXRlIGFycmF5IGZyb20gMSB0byBudW1iZXIgb2YgZGF5cyBpbiBtb250aFxuICAgIGxldCBkYXlPZldlZWsgPSB0aGlzLnN0YXRlLmN1cnJlbnQud2Vla2RheTsgLy9nZXQgZGF5IG9mIHdlZWsgb2YgZmlyc3QgZGF5IGluIHRoZSBtb250aFxuICAgIGxldCBwYWREYXlzID1cbiAgICAgICgoKC1jdXJyZW50RGF5c0luTW9udGggLSB0aGlzLnN0YXRlLmN1cnJlbnQud2Vla2RheSkgJSA3KSArIDcpICUgNzsgLy9udW1iZXIgb2YgZGF5cyB0byBmaWxsIG91dCB0aGUgbGFzdCByb3dcblxuICAgIHJldHVybiBbXG4gICAgICBbLi4uQXJyYXkoZGF5T2ZXZWVrKV0ubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgIGtleT17XCJlbXB0eS1kYXktXCIgKyBpfVxuICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKSksXG4gICAgICBkYXlzLm1hcCgoeCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeCA9PSB0aGlzLnN0YXRlLnRvZGF5LmRheSAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5oYXNTYW1lKHRoaXMuc3RhdGUudG9kYXksIFwibW9udGhcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICAgICAga2V5PXtcImRheS1cIiArIHh9XG4gICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSksXG4gICAgICAgICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9kYXlcIiwge30pLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGF5XCIgaWQ9e1wiZGF5LVwiICsgeH0+XG4gICAgICAgICAgICAgICAge2V2ZW50c0VhY2hEYXlbeCAtIDFdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICAgICAga2V5PXtcImRheS1cIiArIHh9XG4gICAgICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckRheVwiIGlkPXtcImRheS1cIiArIHh9PlxuICAgICAgICAgICAgICAgIHtldmVudHNFYWNoRGF5W3ggLSAxXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIFsuLi5BcnJheShwYWREYXlzKV0ubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgIGtleT17XCJlbXB0eS1kYXktMi1cIiArIGl9XG4gICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApKSxcbiAgICBdO1xuICB9XG5cbiAgLy9nZXQgYXJyYXkgb2YgYXJyYXlzIG9mIGxlbmd0aCBkYXlzIGluIG1vbnRoIGNvbnRhaW5pbmcgdGhlIGV2ZW50cyBpbiBlYWNoIGRheVxuICBnZXRSZW5kZXJFdmVudHMoZXZlbnRzOiBhbnlbXSwgc2luZ2xlRXZlbnRzOiBhbnlbXSkge1xuICAgIGxldCBldmVudHNFYWNoRGF5ID0gWy4uLkFycmF5KHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMCldLm1hcChcbiAgICAgIChlKSA9PiBbXSxcbiAgICApOyAvL2NyZWF0ZSBhcnJheSBvZiBlbXB0eSBhcnJheXMgb2YgbGVuZ3RoIGRheXNJbk1vbnRoXG4gICAgbGV0IGV2ZW50c1RvUmVuZGVyOiBFdmVudFByb3BzW10gPSBbXTtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvX2RhdGV0aW1lKGV2ZW50LmVuZFRpbWUpLmRpZmYoXG4gICAgICAgICAgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKSxcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRhdGVzID0gQ2FsZW5kYXIuZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgICAgICAgZXZlbnQucmVjdXJyZW5jZVswXSxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Lm1pbnVzKGR1cmF0aW9uKSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQucGx1cyh7IG1vbnRoOiAxIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVuZGVyIHJlY3VycmVuY2VzXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgICAvL2Rvbid0IHJlbmRlciBpZiBpdCBpcyBjYW5jZWxsZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5jYW5jZWxsZWRFdmVudHMuc29tZSgoY2FuY2VsbGVkTW9tZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgIGNhbmNlbGxlZE1vbWVudC5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBwcm9wczogRXZlbnRQcm9wcztcbiAgICAgICAgICAvL3VwZGF0ZSBpbmZvcm1hdGlvbiBpZiBldmVudCBoYXMgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRFdmVudCA9IGV2ZW50LmNoYW5nZWRFdmVudHMuZmluZCgoY2hhbmdlZEV2ZW50OiBhbnkpID0+XG4gICAgICAgICAgICBjaGFuZ2VkRXZlbnQub3JpZ2luYWxTdGFydFRpbWUuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChjaGFuZ2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBjaGFuZ2VkRXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3U3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3RW5kVGltZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5nZWRFdmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGNoYW5nZWRFdmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudFN0YXJ0ID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhkYXRlLmdldFRpbWUoKSwge1xuICAgICAgICAgICAgICB6b25lOiBcInV0Y1wiLFxuICAgICAgICAgICAgfSk7IC8vc2luY2UgcnJ1bGUgd29ya3Mgd2l0aCB1dGMgdGltZXNcbiAgICAgICAgICAgIGxldCBldmVudEVuZCA9IGV2ZW50U3RhcnQucGx1cyhkdXJhdGlvbik7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogZXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBldmVudFN0YXJ0LFxuICAgICAgICAgICAgICBlbmRUaW1lOiBldmVudEVuZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudHNUb1JlbmRlci5wdXNoKHByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3JlbmRlciBldmVudFxuICAgICAgICAvL2NoZWNrIGlmIGV2ZW50IGlzIGluIHJhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKGV2ZW50LnN0YXJ0VGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggfHxcbiAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyKSAmJlxuICAgICAgICAgICAgZXZlbnQuZW5kVGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGgpIHx8XG4gICAgICAgICAgZXZlbnQuZW5kVGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudHNUb1JlbmRlci5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50c1RvUmVuZGVyID0gZXZlbnRzVG9SZW5kZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcyAhPSAwKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYi5lbmRUaW1lLmRpZmYoYS5lbmRUaW1lKS5taWxsaXNlY29uZHM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudHNUb1JlbmRlci5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3TXVsdGlFdmVudChldmVudHNFYWNoRGF5LCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBsZXQgZXZlbnRQcm9wcyA9IHtcbiAgICAgIHRvb2x0aXBTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvb2x0aXBcIiwge30pLCAvL2dldHMgdGhpcy5wcm9wcy5zdHlsZXMudG9vbHRpcCBpZiBleGlzdHMsIGVsc2UgZW1wdHkgb2JqZWN0XG4gICAgICBldmVudFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRcIiwge30pLFxuICAgICAgZXZlbnRDaXJjbGVTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50Q2lyY2xlXCIsIHt9KSxcbiAgICAgIGV2ZW50VGV4dFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRUZXh0XCIsIHt9KSxcbiAgICB9O1xuXG4gICAgbGV0IHNpbmdsZUV2ZW50c1RvUmVuZGVyOiBFdmVudFByb3BzW10gPSBbXTtcbiAgICBzaW5nbGVFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvX2RhdGV0aW1lKGV2ZW50LmVuZFRpbWUpLmRpZmYoXG4gICAgICAgICAgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL2dldCByZWN1cnJlbmNlcyB1c2luZyBSUnVsZVxuICAgICAgICBsZXQgZGF0ZXMgPSBDYWxlbmRhci5nZXREYXRlc0Zyb21SUnVsZShcbiAgICAgICAgICBldmVudC5yZWN1cnJlbmNlWzBdLFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSxcbiAgICAgICAgICB0b19kYXRldGltZSh0aGlzLnN0YXRlLmN1cnJlbnQpLFxuICAgICAgICAgIHRvX2RhdGV0aW1lKHRoaXMuc3RhdGUuY3VycmVudCkucGx1cyh7IG1vbnRoOiAxIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVuZGVyIHJlY3VycmVuY2VzXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgICAvL2NoZWNrIGlmIGl0IGlzIGluIGNhbmNlbGxlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbGxlZEV2ZW50cy5zb21lKChjYW5jZWxsZWRNb21lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgY2FuY2VsbGVkTW9tZW50Lmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9pZiBldmVudCBoYXMgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRFdmVudCA9IGV2ZW50LmNoYW5nZWRFdmVudHMuZmluZCgoY2hhbmdlZEV2ZW50OiBhbnkpID0+XG4gICAgICAgICAgICBjaGFuZ2VkRXZlbnQub3JpZ2luYWxTdGFydFRpbWUuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBwcm9wczogRXZlbnRQcm9wcztcbiAgICAgICAgICBpZiAoY2hhbmdlZEV2ZW50KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogY2hhbmdlZEV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogY2hhbmdlZEV2ZW50Lm5ld1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogY2hhbmdlZEV2ZW50Lm5ld0VuZFRpbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGFuZ2VkRXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBjaGFuZ2VkRXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRTdGFydCA9IERhdGVUaW1lLmZyb21NaWxsaXMoZGF0ZS5nZXRUaW1lKCksIHtcbiAgICAgICAgICAgICAgem9uZTogXCJ1dGNcIixcbiAgICAgICAgICAgIH0pOyAvL2F2b2lkIGJhZCB0aW1lem9uZSBjb252ZXJzaW9uc1xuICAgICAgICAgICAgbGV0IGV2ZW50RW5kID0gZXZlbnRTdGFydC5wbHVzKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50U3RhcnQsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGV2ZW50RW5kLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIucHVzaChwcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jaGVjayBpZiBldmVudCBpcyBpbiBjdXJyZW50IG1vbnRoXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIHx8XG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIgPSBzaW5nbGVFdmVudHNUb1JlbmRlci5zb3J0KFxuICAgICAgKGEsIGIpID0+IGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcyxcbiAgICApO1xuICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclNpbmdsZUV2ZW50KGV2ZW50c0VhY2hEYXksIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSkuZGF5LCB7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAuLi5ldmVudFByb3BzLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRzRWFjaERheTtcbiAgfVxuXG4gIC8vVE9ETzogcmVmYWN0b3JcbiAgLy9kZWNpZGVzIGhvdyB0byByZW5kZXIgZXZlbnRzXG4gIGRyYXdNdWx0aUV2ZW50KGV2ZW50c0VhY2hEYXk6IGFueVtdLCBwcm9wczogTXVsdGlFdmVudFByb3BzKSB7XG4gICAgbGV0IHN0YXJ0RHJhd0RhdGU7XG4gICAgbGV0IGJsb2NrTGVuZ3RoID0gMTtcbiAgICBsZXQgY3VyRGF0ZTogRGF0ZVRpbWU7XG4gICAgbGV0IGVuZERhdGU6IERhdGVUaW1lO1xuXG4gICAgbGV0IGFycm93TGVmdCA9IGZhbHNlO1xuICAgIGxldCBhcnJvd1JpZ2h0ID0gZmFsc2U7XG5cbiAgICBpZiAocHJvcHMuZW5kVGltZS5oYXNTYW1lKHByb3BzLmVuZFRpbWUuc3RhcnRPZihcImRheVwiKSwgXCJzZWNvbmRcIikpIHtcbiAgICAgIGVuZERhdGUgPSBwcm9wcy5lbmRUaW1lXG4gICAgICAgIC5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KVxuICAgICAgICAubWludXMoeyBkYXk6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZERhdGUgPSB0b19kYXRldGltZShwcm9wcy5lbmRUaW1lKS5zZXRab25lKFwidXRjXCIsIHtcbiAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRvX2RhdGV0aW1lKHByb3BzLnN0YXJ0VGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkgPFxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50XG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QXJyb3cpIHtcbiAgICAgICAgYXJyb3dMZWZ0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc3RhcnREcmF3RGF0ZSA9IDE7XG4gICAgICBjdXJEYXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydERyYXdEYXRlID0gcHJvcHMuc3RhcnRUaW1lLmRheTtcbiAgICAgIGN1ckRhdGUgPSB0b19kYXRldGltZShwcm9wcy5zdGFydFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwge1xuICAgICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGN1ckRhdGUuc3RhcnRPZihcImRheVwiKSA8PSBlbmREYXRlLnN0YXJ0T2YoXCJkYXlcIikpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VyRGF0ZS5kYXkgPT0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoICYmXG4gICAgICAgICFlbmREYXRlLmhhc1NhbWUodGhpcy5zdGF0ZS5jdXJyZW50LCBcIm1vbnRoXCIpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Fycm93KSB7XG4gICAgICAgICAgYXJyb3dSaWdodCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RyYXcgdGhlbiBxdWl0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGN1ckRhdGUuZGF5ID09IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCB8fFxuICAgICAgICBjdXJEYXRlLmhhc1NhbWUoZW5kRGF0ZSwgXCJkYXlcIilcbiAgICAgICkge1xuICAgICAgICAvL2RyYXcgdGhlbiBxdWl0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoY3VyRGF0ZS53ZWVrZGF5ID09IDYpIHtcbiAgICAgICAgLy9kcmF3IHRoZW4gcmVzZXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBzdGFydERyYXdEYXRlID0gY3VyRGF0ZS5wbHVzKHsgZGF5OiAxIH0pLmRheTtcbiAgICAgICAgYmxvY2tMZW5ndGggPSAwO1xuICAgICAgICBhcnJvd0xlZnQgPSBmYWxzZTtcbiAgICAgICAgYXJyb3dSaWdodCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBibG9ja0xlbmd0aCsrO1xuICAgICAgY3VyRGF0ZSA9IGN1ckRhdGUucGx1cyh7IGRheTogMSB9KTtcbiAgICB9XG4gIH1cblxuICAvL1RPRE86IHJlZmFjdG9yIHRoaXMgdG9vP1xuICAvL2hhbmRsZXMgcmVuZGVyaW5nIGFuZCBwcm9wZXIgc3RhY2tpbmcgb2YgaW5kaXZpZHVhbCBibG9ja3NcbiAgcmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgIGV2ZW50c0VhY2hEYXk6IGFueVtdLFxuICAgIHN0YXJ0RGF0ZTogYW55LFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHByb3BzOiBhbnksXG4gICAgYXJyb3dMZWZ0OiBib29sZWFuLFxuICAgIGFycm93UmlnaHQ6IGJvb2xlYW4sXG4gICkge1xuICAgIGxldCBtdWx0aUV2ZW50UHJvcHMgPSB7XG4gICAgICB0b29sdGlwU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b29sdGlwXCIsIHt9KSwgLy9nZXRzIHRoaXMucHJvcHMuc3R5bGVzLnRvb2x0aXAgaWYgZXhpc3RzLCBlbHNlIGVtcHR5IG9iamVjdFxuICAgICAgbXVsdGlFdmVudFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwibXVsdGlFdmVudFwiLCB7fSksXG4gICAgfTtcblxuICAgIGxldCBtYXhCbG9ja3MgPSAwO1xuICAgIGxldCBjbG9zZWRTbG90czogYW55W10gPSBbXTsgLy9rZWVwIHRyYWNrIG9mIHJvd3MgdGhhdCB0aGUgZXZlbnQgY2FuJ3QgYmUgaW5zZXJ0ZWQgaW50b1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRheUV2ZW50cyA9IGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldO1xuICAgICAgaWYgKGRheUV2ZW50cy5sZW5ndGggPiBtYXhCbG9ja3MpIHtcbiAgICAgICAgbWF4QmxvY2tzID0gZGF5RXZlbnRzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgLy9hZGRyZXNzIHJvd3MgdGhhdCBhcmUgbm90IHRoZSBsYXN0IGVsZW1lbnQgaW4gY2xvc2VkU2xvdHNcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4QmxvY2tzOyBqKyspIHtcbiAgICAgICAgaWYgKGogPiBkYXlFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xvc2VkU2xvdHMuaW5jbHVkZXMoaikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5RXZlbnRzW2pdLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImlzRXZlbnRcIikpIHtcbiAgICAgICAgICBjbG9zZWRTbG90cy5wdXNoKGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNob3NlblJvdyA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEJsb2NrczsgaSsrKSB7XG4gICAgICBpZiAoIWNsb3NlZFNsb3RzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgIGNob3NlblJvdyA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vZmlsbCBpbiBwbGFjZWhvbGRlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3BsYWNlaG9sZGVyc1xuICAgICAgd2hpbGUgKGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldLmxlbmd0aCA8PSBjaG9zZW5Sb3cpIHtcbiAgICAgICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV0ucHVzaChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJldmVudCBiZWxvdyBwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBrZXk9e2BwbGFjZWhvbGRlci0ke2d1ZCgpfWB9XG4gICAgICAgICAgPjwvZGl2PixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy9yZXN0IG9mIGV2ZW50IHRoYXQgaXMgdW5kZXIgdGhlIG1haW4gYmFubmVyXG4gICAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXVtjaG9zZW5Sb3ddID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnQgZXZlbnQgYmVsb3dcIiBrZXk9e2BmaWxsZXItJHtndWQoKX1gfT48L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9yZW5kZXIgZXZlbnRcbiAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDFdW2Nob3NlblJvd10gPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BtdWx0aS1ldmVudC0ke2Nob3NlblJvd31gfT5cbiAgICAgICAgPE11bHRpRXZlbnRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgey4uLm11bHRpRXZlbnRQcm9wc31cbiAgICAgICAgICBsZW5ndGg9e2xlbmd0aH1cbiAgICAgICAgICBhcnJvd0xlZnQ9e2Fycm93TGVmdH1cbiAgICAgICAgICBhcnJvd1JpZ2h0PXthcnJvd1JpZ2h0fVxuICAgICAgICAgIGtleT17YG11bHRpLWV2ZW50LSR7Z3VkKCl9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2F0dGVtcHRzIHRvIHJlbmRlciBpbiBhIHBsYWNlaG9sZGVyIHRoZW4gYXQgdGhlIGVuZFxuICByZW5kZXJTaW5nbGVFdmVudChldmVudHNFYWNoRGF5OiBhbnlbXSwgZGF0ZTogbnVtYmVyLCBldmVudDogRXZlbnRQcm9wcykge1xuICAgIGxldCBmb3VuZEVtcHR5ID0gZmFsc2U7XG4gICAgbGV0IG5vZGVzID0gZXZlbnRzRWFjaERheVtkYXRlIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBub2Rlc1tpXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJldmVudFwiKSAmJlxuICAgICAgICAhbm9kZXNbaV0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXNFdmVudFwiKVxuICAgICAgKSB7XG4gICAgICAgIC8vdGFyZ2V0IG9ubHkgcGxhY2Vob2xkZXJzXG4gICAgICAgIG5vZGVzW2ldID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9PlxuICAgICAgICAgICAgPEV2ZW50IHsuLi5ldmVudH0ga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgZm91bmRFbXB0eSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kRW1wdHkpIHtcbiAgICAgIGV2ZW50c0VhY2hEYXlbZGF0ZSAtIDFdLnB1c2goXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9PlxuICAgICAgICAgIDxFdmVudCB7Li4uZXZlbnR9IGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9IC8+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy9nZXQgZGF0ZXMgYmFzZWQgb24gcnJ1bGUgc3RyaW5nIGJldHdlZW4gZGF0ZXNcbiAgc3RhdGljIGdldERhdGVzRnJvbVJSdWxlKFxuICAgIHN0cjogc3RyaW5nLFxuICAgIGV2ZW50U3RhcnQ6IERhdGVUaW1lLFxuICAgIGJldHdlZW5TdGFydDogRGF0ZVRpbWUsXG4gICAgYmV0d2VlbkVuZDogRGF0ZVRpbWUsXG4gICkge1xuICAgIC8vZ2V0IHJlY3VycmVuY2VzIHVzaW5nIFJSdWxlXG4gICAgbGV0IHJzdHIgPSBgRFRTVEFSVDoke2V2ZW50U3RhcnQuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkudG9Gb3JtYXQoXCJ5eXl5TU1kZCdUJ0hIbW1zc1wiKX1aXFxuJHtzdHJ9YDtcbiAgICBsZXQgcnJ1bGVTZXQgPSBycnVsZXN0cihyc3RyLCB7IGZvcmNlc2V0OiB0cnVlIH0pO1xuXG4gICAgLy9nZXQgZGF0ZXNcbiAgICBsZXQgYmVnaW4gPSBiZXR3ZWVuU3RhcnQudG9VVEMoKS50b0pTRGF0ZSgpO1xuICAgIGxldCBlbmQgPSBiZXR3ZWVuRW5kLnRvVVRDKCkudG9KU0RhdGUoKTtcbiAgICBsZXQgZGF0ZXMgPSBycnVsZVNldC5iZXR3ZWVuKGJlZ2luLCBlbmQpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZXZlbnRzRWFjaERheSA9IHRoaXMuZ2V0UmVuZGVyRXZlbnRzKFxuICAgICAgdGhpcy5zdGF0ZS5ldmVudHMsXG4gICAgICB0aGlzLnN0YXRlLnNpbmdsZUV2ZW50cyxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyXCJcbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJMaWdodEdyYXlcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1MTU2NWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImNhbGVuZGFyXCIsIHt9KSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhci1uYXZpZ2F0ZSB1bnNlbGVjdGFibGVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5sYXN0TW9udGh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxMDA5NDtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhbGVuZGFyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1vbnRoTmFtZXNbdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIC0gMV0gK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQueWVhcn1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXItbmF2aWdhdGUgdW5zZWxlY3RhYmxlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTAwOTU7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWJvZHlcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXlzKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyRGF0ZXMoZXZlbnRzRWFjaERheSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Rm9vdGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWxsIHRpbWVzIHNob3duIHlvdXIgdGltZXpvbmUgKHt0aGlzLnN0YXRlLnVzZXJUaW1lem9uZS5uYW1lfSlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yP2NpZD1cIiArXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNhbGVuZGFyc1swXS5jYWxlbmRhcklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJiM0MzsgQWRkIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: zt
}, Wx = process.env.NODE_ENV === "production" ? {
  name: "p20sj1",
  styles: "vertical-align:top;margin-left:3px;margin-right:3px"
} : {
  name: "s71wyw-Calendar",
  styles: "vertical-align:top;margin-left:3px;margin-right:3px;label:Calendar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcXdCc0IiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBycnVsZXN0ciB9IGZyb20gXCJycnVsZVwiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBndWQgZnJvbSBcImd1ZFwiO1xuXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBMYW5ndWFnZXMsIGF2YWlsYWJsZUxhbmd1YWdlcyB9IGZyb20gXCIuL2xhbmd1YWdlc1wiO1xuaW1wb3J0IE11bHRpRXZlbnQgZnJvbSBcIi4vbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJQcm9wcywgQ2FsZW5kYXJTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBFdmVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXMvZXZlbnRcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzL211bHRpRXZlbnRcIjtcbmltcG9ydCB7IGdldEV2ZW50c0xpc3QsIGxvYWRDYWxlbmRhckFQSSB9IGZyb20gXCIuL3V0aWxzL2dvb2dsZUNhbGVuZGFyQVBJXCI7XG5pbXBvcnQgeyBpc011bHRpRXZlbnQsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBDYWxlbmRhclByb3BzLFxuICBDYWxlbmRhclN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbGVuZGFyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vbnRoTmFtZXM6IFsuLi5MYW5ndWFnZXMuRU4uTU9OVEhTXSxcbiAgICAgIGRheXM6IFsuLi5MYW5ndWFnZXMuRU4uREFZU10sXG4gICAgICB0b2RheTogRGF0ZVRpbWUubm93KCksXG4gICAgICBjdXJyZW50OiBEYXRlVGltZS51dGMoKS5zdGFydE9mKFwibW9udGhcIiksIC8vY3VycmVudCBwb3NpdGlvbiBvbiBjYWxlbmRhciAoZmlyc3QgZGF5IG9mIG1vbnRoKVxuICAgICAgY2FsZW5kYXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sIC8vYWxsIGRheSBvciBtdWx0aSBkYXkgZXZlbnRzXG4gICAgICBzaW5nbGVFdmVudHM6IFtdLCAvL3NpbmdsZSBkYXkgZXZlbnRzXG4gICAgICB1c2VyVGltZXpvbmU6IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogXCJzeXN0ZW1cIiB9KS56b25lLFxuICAgICAgc2hvd0Zvb3RlcjogcHJvcHMuc2hvd0Zvb3RlciB8fCB0cnVlLFxuICAgICAgc2hvd0Fycm93OiBwcm9wcy5zaG93QXJyb3cgfHwgdHJ1ZSxcbiAgICAgIHByb2Nlc3NlZENhbGVuZGFyczogW10sXG4gICAgfTtcblxuICAgIHRoaXMubGFzdE1vbnRoID0gdGhpcy5sYXN0TW9udGguYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHRNb250aCA9IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmxhbmd1YWdlICYmXG4gICAgICBhdmFpbGFibGVMYW5ndWFnZXMuaW5jbHVkZXModGhpcy5wcm9wcy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpKVxuICAgICkge1xuICAgICAgLy8gdHJ5IHRvIGNoYW5nZSBsYW5ndWFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRoaXMucHJvcHMubGFuZ3VhZ2UudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgbW9udGhOYW1lczogWy4uLkxhbmd1YWdlc1tsYW5nXS5NT05USFNdLFxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGRheXM6IFsuLi5MYW5ndWFnZXNbbGFuZ10uREFZU10sXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjaG9vc2luZyBhIG5ldyBsYW5ndWFnZVwiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2luaXQgYW5kIGxvYWQgZ29vZ2xlIGNhbGVuZGFyIGFwaVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkQ2FsZW5kYXJBUEkodGhpcy5wcm9wcy5hcGlLZXkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgR0FQSSBjbGllbnQgZm9yIEFQSVwiLCBlcnIpO1xuICAgIH1cblxuICAgIC8vR2V0IGV2ZW50cyBmcm9tIGFsbCBjYWxlbmRhcnNcbiAgICBmb3IgKGxldCBjYWxlbmRhciBvZiB0aGlzLnByb3BzLmNhbGVuZGFycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy9xdWVyeSBhcGkgZm9yIGV2ZW50c1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRFdmVudHNMaXN0KGNhbGVuZGFyLmNhbGVuZGFySWQpO1xuXG4gICAgICAgIC8vcHJvY2VzcyBldmVudHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMucHJvY2Vzc0V2ZW50cyhcbiAgICAgICAgICByZXMucmVzdWx0Lml0ZW1zLFxuICAgICAgICAgIHJlcy5yZXN1bHQuc3VtbWFyeSxcbiAgICAgICAgICBjYWxlbmRhci5jb2xvciA/PyBcIlwiLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vZml4IGR1cGxpY2F0ZSBjYWxlbmRhcnNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByb2Nlc3NlZENhbGVuZGFycy5pbmNsdWRlcyhjYWxlbmRhci5jYWxlbmRhcklkKSkge1xuICAgICAgICAgIC8vc2V0IHN0YXRlIHdpdGggY2FsY3VsYXRlZCB2YWx1ZXNcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV2ZW50czogWy4uLnRoaXMuc3RhdGUuZXZlbnRzLCAuLi5ldmVudHNbMF1dLFxuICAgICAgICAgICAgc2luZ2xlRXZlbnRzOiBbLi4udGhpcy5zdGF0ZS5zaW5nbGVFdmVudHMsIC4uLmV2ZW50c1sxXV0sXG4gICAgICAgICAgICBwcm9jZXNzZWRDYWxlbmRhcnM6IFtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wcm9jZXNzZWRDYWxlbmRhcnMsXG4gICAgICAgICAgICAgIGNhbGVuZGFyLmNhbGVuZGFySWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgZXZlbnRzXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9nZXQgZWFzeSB0byB3b3JrIHdpdGggZXZlbnRzIGFuZCBzaW5nbGVFdmVudHMgZnJvbSByZXNwb25zZVxuICBwcm9jZXNzRXZlbnRzKGl0ZW1zOiBhbnlbXSwgY2FsZW5kYXJOYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgbGV0IHNpbmdsZUV2ZW50czogYW55W10gPSBbXTtcbiAgICBsZXQgZXZlbnRzOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjaGFuZ2VkOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjYW5jZWxsZWQ6IGFueVtdID0gW107XG5cbiAgICBpdGVtcy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lKSB7XG4gICAgICAgIC8vY2FuY2VsbGVkIG9yIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGlmIChldmVudC5zdGF0dXMgPT0gXCJjYW5jZWxsZWRcIikge1xuICAgICAgICAgIC8vY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICAgIGNhbmNlbGxlZC5wdXNoKHtcbiAgICAgICAgICAgIHJlY3VycmluZ0V2ZW50SWQ6IGV2ZW50LnJlY3VycmluZ0V2ZW50SWQsXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0VGltZTogZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc3RhdHVzID09IFwiY29uZmlybWVkXCIpIHtcbiAgICAgICAgICAvL2NoYW5nZWQgZXZlbnRzXG4gICAgICAgICAgY2hhbmdlZC5wdXNoKHtcbiAgICAgICAgICAgIHJlY3VycmluZ0V2ZW50SWQ6IGV2ZW50LnJlY3VycmluZ0V2ZW50SWQsXG4gICAgICAgICAgICBuYW1lOiBldmVudC5zdW1tYXJ5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgb3JpZ2luYWxTdGFydFRpbWU6IGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGUpLFxuICAgICAgICAgICAgbmV3U3RhcnRUaW1lOiBldmVudC5zdGFydC5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlKSxcbiAgICAgICAgICAgIG5ld0VuZFRpbWU6IGV2ZW50LmVuZC5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGUpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNhdGVnb3JpemVkOiBcIiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNvbmZpcm1lZFwiKSB7XG4gICAgICAgIC8vbm9ybWFsIGV2ZW50c1xuICAgICAgICBsZXQgbmV3RXZlbnQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIG5hbWU6IGV2ZW50LnN1bW1hcnksXG4gICAgICAgICAgc3RhcnRUaW1lOiBldmVudC5zdGFydC5kYXRlVGltZVxuICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKVxuICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGUpLFxuICAgICAgICAgIGVuZFRpbWU6IGV2ZW50LmVuZC5kYXRlVGltZVxuICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlVGltZSlcbiAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZSksXG4gICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICByZWN1cnJlbmNlOiBldmVudC5yZWN1cnJlbmNlLFxuICAgICAgICAgIGNoYW5nZWRFdmVudHM6IFtdLFxuICAgICAgICAgIGNhbmNlbGxlZEV2ZW50czogW10sXG4gICAgICAgICAgY2FsZW5kYXJOYW1lOiBjYWxlbmRhck5hbWUsXG4gICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpc011bHRpRXZlbnQobmV3RXZlbnQuc3RhcnRUaW1lLCBuZXdFdmVudC5lbmRUaW1lKSkge1xuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW5nbGVFdmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNhdGVnb3JpemVkOiBcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9hZGQgY2hhbmdlZCBldmVudHMgYW5kIGNhbmNlbGxlZCBldmVudHMgdG8gY29ycmVzcG9uZGluZyBldmVudCBvYmplY3RcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICAvL3B1c2ggY2hhbmdlZCBldmVudHNcbiAgICAgICAgY2hhbmdlZFxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5nZSkgPT4gY2hhbmdlLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2hhbmdlZEV2ZW50cy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9wdXNoIGNhbmNlbGxlZCBldmVudHNcbiAgICAgICAgY2FuY2VsbGVkXG4gICAgICAgICAgLmZpbHRlcigoY2FuY2VsKSA9PiBjYW5jZWwucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jYW5jZWxsZWRFdmVudHMucHVzaChjYW5jZWwub3JpZ2luYWxTdGFydFRpbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2luZ2xlRXZlbnRzLmZvckVhY2goKGV2ZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgLy9wdXNoIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGNoYW5nZWRcbiAgICAgICAgICAuZmlsdGVyKChjaGFuZ2UpID0+IGNoYW5nZS5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNoYW5nZWRFdmVudHMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vcHVzaCBjYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgIGNhbmNlbGxlZFxuICAgICAgICAgIC5maWx0ZXIoKGNhbmNlbCkgPT4gY2FuY2VsLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNhbmNlbCkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2FuY2VsbGVkRXZlbnRzLnB1c2goY2FuY2VsLm9yaWdpbmFsU3RhcnRUaW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBbZXZlbnRzLCBzaW5nbGVFdmVudHNdO1xuICB9XG5cbiAgLy9zZXRzIGN1cnJlbnQgbW9udGggdG8gcHJldmlvdXMgbW9udGhcbiAgbGFzdE1vbnRoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnQubWludXMoeyBtb250aDogMSB9KSB9KTtcbiAgfVxuXG4gIC8vc2V0cyBjdXJyZW50IG1vbnRoIHRvIGZvbGxvd2luZyBtb250aFxuICBuZXh0TW9udGgoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudC5wbHVzKHsgbW9udGg6IDEgfSkgfSk7XG4gIH1cblxuICBjbGVhckV2ZW50cygpIHtcbiAgICBsZXQgZGF5c0luTW9udGggPSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXktXCIgKyBpKTtcbiAgICAgIHdoaWxlIChub2RlLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vcmVuZGVycyB0aGUgZGF5IG9mIHdlZWsgbmFtZXNcbiAgcmVuZGVyRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXlzLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkYXktbmFtZVwiXG4gICAgICAgIGtleT17XCJkYXktb2Ytd2Vlay1cIiArIGl9XG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIHsgYm9yZGVyQ29sb3I6IFwiTGlnaHRHcmF5XCIgfSxcbiAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICB7eH1cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICB9XG5cbiAgLy9yZW5kZXJzIHRoZSBibG9ja3MgZm9yIHRoZSBkYXlzIG9mIGVhY2ggbW9udGhcbiAgcmVuZGVyRGF0ZXMoZXZlbnRzRWFjaERheTogYW55W10pOiBhbnlbXSB7XG4gICAgbGV0IGN1cnJlbnREYXlzSW5Nb250aCA9IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbGV0IGRheXMgPSBbLi4uQXJyYXkoY3VycmVudERheXNJbk1vbnRoICsgMSkua2V5cygpXS5zbGljZSgxKTsgLy8gY3JlYXRlIGFycmF5IGZyb20gMSB0byBudW1iZXIgb2YgZGF5cyBpbiBtb250aFxuICAgIGxldCBkYXlPZldlZWsgPSB0aGlzLnN0YXRlLmN1cnJlbnQud2Vla2RheTsgLy9nZXQgZGF5IG9mIHdlZWsgb2YgZmlyc3QgZGF5IGluIHRoZSBtb250aFxuICAgIGxldCBwYWREYXlzID1cbiAgICAgICgoKC1jdXJyZW50RGF5c0luTW9udGggLSB0aGlzLnN0YXRlLmN1cnJlbnQud2Vla2RheSkgJSA3KSArIDcpICUgNzsgLy9udW1iZXIgb2YgZGF5cyB0byBmaWxsIG91dCB0aGUgbGFzdCByb3dcblxuICAgIHJldHVybiBbXG4gICAgICBbLi4uQXJyYXkoZGF5T2ZXZWVrKV0ubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgIGtleT17XCJlbXB0eS1kYXktXCIgKyBpfVxuICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKSksXG4gICAgICBkYXlzLm1hcCgoeCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeCA9PSB0aGlzLnN0YXRlLnRvZGF5LmRheSAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5oYXNTYW1lKHRoaXMuc3RhdGUudG9kYXksIFwibW9udGhcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICAgICAga2V5PXtcImRheS1cIiArIHh9XG4gICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSksXG4gICAgICAgICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9kYXlcIiwge30pLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGF5XCIgaWQ9e1wiZGF5LVwiICsgeH0+XG4gICAgICAgICAgICAgICAge2V2ZW50c0VhY2hEYXlbeCAtIDFdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICAgICAga2V5PXtcImRheS1cIiArIHh9XG4gICAgICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckRheVwiIGlkPXtcImRheS1cIiArIHh9PlxuICAgICAgICAgICAgICAgIHtldmVudHNFYWNoRGF5W3ggLSAxXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIFsuLi5BcnJheShwYWREYXlzKV0ubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgIGtleT17XCJlbXB0eS1kYXktMi1cIiArIGl9XG4gICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApKSxcbiAgICBdO1xuICB9XG5cbiAgLy9nZXQgYXJyYXkgb2YgYXJyYXlzIG9mIGxlbmd0aCBkYXlzIGluIG1vbnRoIGNvbnRhaW5pbmcgdGhlIGV2ZW50cyBpbiBlYWNoIGRheVxuICBnZXRSZW5kZXJFdmVudHMoZXZlbnRzOiBhbnlbXSwgc2luZ2xlRXZlbnRzOiBhbnlbXSkge1xuICAgIGxldCBldmVudHNFYWNoRGF5ID0gWy4uLkFycmF5KHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMCldLm1hcChcbiAgICAgIChlKSA9PiBbXSxcbiAgICApOyAvL2NyZWF0ZSBhcnJheSBvZiBlbXB0eSBhcnJheXMgb2YgbGVuZ3RoIGRheXNJbk1vbnRoXG4gICAgbGV0IGV2ZW50c1RvUmVuZGVyOiBFdmVudFByb3BzW10gPSBbXTtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvX2RhdGV0aW1lKGV2ZW50LmVuZFRpbWUpLmRpZmYoXG4gICAgICAgICAgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKSxcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRhdGVzID0gQ2FsZW5kYXIuZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgICAgICAgZXZlbnQucmVjdXJyZW5jZVswXSxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Lm1pbnVzKGR1cmF0aW9uKSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQucGx1cyh7IG1vbnRoOiAxIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVuZGVyIHJlY3VycmVuY2VzXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgICAvL2Rvbid0IHJlbmRlciBpZiBpdCBpcyBjYW5jZWxsZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5jYW5jZWxsZWRFdmVudHMuc29tZSgoY2FuY2VsbGVkTW9tZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgIGNhbmNlbGxlZE1vbWVudC5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBwcm9wczogRXZlbnRQcm9wcztcbiAgICAgICAgICAvL3VwZGF0ZSBpbmZvcm1hdGlvbiBpZiBldmVudCBoYXMgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRFdmVudCA9IGV2ZW50LmNoYW5nZWRFdmVudHMuZmluZCgoY2hhbmdlZEV2ZW50OiBhbnkpID0+XG4gICAgICAgICAgICBjaGFuZ2VkRXZlbnQub3JpZ2luYWxTdGFydFRpbWUuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChjaGFuZ2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBjaGFuZ2VkRXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3U3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3RW5kVGltZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5nZWRFdmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGNoYW5nZWRFdmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudFN0YXJ0ID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhkYXRlLmdldFRpbWUoKSwge1xuICAgICAgICAgICAgICB6b25lOiBcInV0Y1wiLFxuICAgICAgICAgICAgfSk7IC8vc2luY2UgcnJ1bGUgd29ya3Mgd2l0aCB1dGMgdGltZXNcbiAgICAgICAgICAgIGxldCBldmVudEVuZCA9IGV2ZW50U3RhcnQucGx1cyhkdXJhdGlvbik7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogZXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBldmVudFN0YXJ0LFxuICAgICAgICAgICAgICBlbmRUaW1lOiBldmVudEVuZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudHNUb1JlbmRlci5wdXNoKHByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3JlbmRlciBldmVudFxuICAgICAgICAvL2NoZWNrIGlmIGV2ZW50IGlzIGluIHJhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKGV2ZW50LnN0YXJ0VGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggfHxcbiAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyKSAmJlxuICAgICAgICAgICAgZXZlbnQuZW5kVGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGgpIHx8XG4gICAgICAgICAgZXZlbnQuZW5kVGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudHNUb1JlbmRlci5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50c1RvUmVuZGVyID0gZXZlbnRzVG9SZW5kZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcyAhPSAwKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYi5lbmRUaW1lLmRpZmYoYS5lbmRUaW1lKS5taWxsaXNlY29uZHM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudHNUb1JlbmRlci5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3TXVsdGlFdmVudChldmVudHNFYWNoRGF5LCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBsZXQgZXZlbnRQcm9wcyA9IHtcbiAgICAgIHRvb2x0aXBTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvb2x0aXBcIiwge30pLCAvL2dldHMgdGhpcy5wcm9wcy5zdHlsZXMudG9vbHRpcCBpZiBleGlzdHMsIGVsc2UgZW1wdHkgb2JqZWN0XG4gICAgICBldmVudFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRcIiwge30pLFxuICAgICAgZXZlbnRDaXJjbGVTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50Q2lyY2xlXCIsIHt9KSxcbiAgICAgIGV2ZW50VGV4dFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRUZXh0XCIsIHt9KSxcbiAgICB9O1xuXG4gICAgbGV0IHNpbmdsZUV2ZW50c1RvUmVuZGVyOiBFdmVudFByb3BzW10gPSBbXTtcbiAgICBzaW5nbGVFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvX2RhdGV0aW1lKGV2ZW50LmVuZFRpbWUpLmRpZmYoXG4gICAgICAgICAgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL2dldCByZWN1cnJlbmNlcyB1c2luZyBSUnVsZVxuICAgICAgICBsZXQgZGF0ZXMgPSBDYWxlbmRhci5nZXREYXRlc0Zyb21SUnVsZShcbiAgICAgICAgICBldmVudC5yZWN1cnJlbmNlWzBdLFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSxcbiAgICAgICAgICB0b19kYXRldGltZSh0aGlzLnN0YXRlLmN1cnJlbnQpLFxuICAgICAgICAgIHRvX2RhdGV0aW1lKHRoaXMuc3RhdGUuY3VycmVudCkucGx1cyh7IG1vbnRoOiAxIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVuZGVyIHJlY3VycmVuY2VzXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgICAvL2NoZWNrIGlmIGl0IGlzIGluIGNhbmNlbGxlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbGxlZEV2ZW50cy5zb21lKChjYW5jZWxsZWRNb21lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgY2FuY2VsbGVkTW9tZW50Lmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9pZiBldmVudCBoYXMgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRFdmVudCA9IGV2ZW50LmNoYW5nZWRFdmVudHMuZmluZCgoY2hhbmdlZEV2ZW50OiBhbnkpID0+XG4gICAgICAgICAgICBjaGFuZ2VkRXZlbnQub3JpZ2luYWxTdGFydFRpbWUuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBwcm9wczogRXZlbnRQcm9wcztcbiAgICAgICAgICBpZiAoY2hhbmdlZEV2ZW50KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogY2hhbmdlZEV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogY2hhbmdlZEV2ZW50Lm5ld1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogY2hhbmdlZEV2ZW50Lm5ld0VuZFRpbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGFuZ2VkRXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBjaGFuZ2VkRXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRTdGFydCA9IERhdGVUaW1lLmZyb21NaWxsaXMoZGF0ZS5nZXRUaW1lKCksIHtcbiAgICAgICAgICAgICAgem9uZTogXCJ1dGNcIixcbiAgICAgICAgICAgIH0pOyAvL2F2b2lkIGJhZCB0aW1lem9uZSBjb252ZXJzaW9uc1xuICAgICAgICAgICAgbGV0IGV2ZW50RW5kID0gZXZlbnRTdGFydC5wbHVzKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50U3RhcnQsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGV2ZW50RW5kLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIucHVzaChwcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jaGVjayBpZiBldmVudCBpcyBpbiBjdXJyZW50IG1vbnRoXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIHx8XG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIgPSBzaW5nbGVFdmVudHNUb1JlbmRlci5zb3J0KFxuICAgICAgKGEsIGIpID0+IGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcyxcbiAgICApO1xuICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclNpbmdsZUV2ZW50KGV2ZW50c0VhY2hEYXksIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSkuZGF5LCB7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAuLi5ldmVudFByb3BzLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRzRWFjaERheTtcbiAgfVxuXG4gIC8vVE9ETzogcmVmYWN0b3JcbiAgLy9kZWNpZGVzIGhvdyB0byByZW5kZXIgZXZlbnRzXG4gIGRyYXdNdWx0aUV2ZW50KGV2ZW50c0VhY2hEYXk6IGFueVtdLCBwcm9wczogTXVsdGlFdmVudFByb3BzKSB7XG4gICAgbGV0IHN0YXJ0RHJhd0RhdGU7XG4gICAgbGV0IGJsb2NrTGVuZ3RoID0gMTtcbiAgICBsZXQgY3VyRGF0ZTogRGF0ZVRpbWU7XG4gICAgbGV0IGVuZERhdGU6IERhdGVUaW1lO1xuXG4gICAgbGV0IGFycm93TGVmdCA9IGZhbHNlO1xuICAgIGxldCBhcnJvd1JpZ2h0ID0gZmFsc2U7XG5cbiAgICBpZiAocHJvcHMuZW5kVGltZS5oYXNTYW1lKHByb3BzLmVuZFRpbWUuc3RhcnRPZihcImRheVwiKSwgXCJzZWNvbmRcIikpIHtcbiAgICAgIGVuZERhdGUgPSBwcm9wcy5lbmRUaW1lXG4gICAgICAgIC5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KVxuICAgICAgICAubWludXMoeyBkYXk6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZERhdGUgPSB0b19kYXRldGltZShwcm9wcy5lbmRUaW1lKS5zZXRab25lKFwidXRjXCIsIHtcbiAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRvX2RhdGV0aW1lKHByb3BzLnN0YXJ0VGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkgPFxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50XG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QXJyb3cpIHtcbiAgICAgICAgYXJyb3dMZWZ0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc3RhcnREcmF3RGF0ZSA9IDE7XG4gICAgICBjdXJEYXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydERyYXdEYXRlID0gcHJvcHMuc3RhcnRUaW1lLmRheTtcbiAgICAgIGN1ckRhdGUgPSB0b19kYXRldGltZShwcm9wcy5zdGFydFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwge1xuICAgICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGN1ckRhdGUuc3RhcnRPZihcImRheVwiKSA8PSBlbmREYXRlLnN0YXJ0T2YoXCJkYXlcIikpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VyRGF0ZS5kYXkgPT0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoICYmXG4gICAgICAgICFlbmREYXRlLmhhc1NhbWUodGhpcy5zdGF0ZS5jdXJyZW50LCBcIm1vbnRoXCIpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Fycm93KSB7XG4gICAgICAgICAgYXJyb3dSaWdodCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RyYXcgdGhlbiBxdWl0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGN1ckRhdGUuZGF5ID09IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCB8fFxuICAgICAgICBjdXJEYXRlLmhhc1NhbWUoZW5kRGF0ZSwgXCJkYXlcIilcbiAgICAgICkge1xuICAgICAgICAvL2RyYXcgdGhlbiBxdWl0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoY3VyRGF0ZS53ZWVrZGF5ID09IDYpIHtcbiAgICAgICAgLy9kcmF3IHRoZW4gcmVzZXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBzdGFydERyYXdEYXRlID0gY3VyRGF0ZS5wbHVzKHsgZGF5OiAxIH0pLmRheTtcbiAgICAgICAgYmxvY2tMZW5ndGggPSAwO1xuICAgICAgICBhcnJvd0xlZnQgPSBmYWxzZTtcbiAgICAgICAgYXJyb3dSaWdodCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBibG9ja0xlbmd0aCsrO1xuICAgICAgY3VyRGF0ZSA9IGN1ckRhdGUucGx1cyh7IGRheTogMSB9KTtcbiAgICB9XG4gIH1cblxuICAvL1RPRE86IHJlZmFjdG9yIHRoaXMgdG9vP1xuICAvL2hhbmRsZXMgcmVuZGVyaW5nIGFuZCBwcm9wZXIgc3RhY2tpbmcgb2YgaW5kaXZpZHVhbCBibG9ja3NcbiAgcmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgIGV2ZW50c0VhY2hEYXk6IGFueVtdLFxuICAgIHN0YXJ0RGF0ZTogYW55LFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHByb3BzOiBhbnksXG4gICAgYXJyb3dMZWZ0OiBib29sZWFuLFxuICAgIGFycm93UmlnaHQ6IGJvb2xlYW4sXG4gICkge1xuICAgIGxldCBtdWx0aUV2ZW50UHJvcHMgPSB7XG4gICAgICB0b29sdGlwU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b29sdGlwXCIsIHt9KSwgLy9nZXRzIHRoaXMucHJvcHMuc3R5bGVzLnRvb2x0aXAgaWYgZXhpc3RzLCBlbHNlIGVtcHR5IG9iamVjdFxuICAgICAgbXVsdGlFdmVudFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwibXVsdGlFdmVudFwiLCB7fSksXG4gICAgfTtcblxuICAgIGxldCBtYXhCbG9ja3MgPSAwO1xuICAgIGxldCBjbG9zZWRTbG90czogYW55W10gPSBbXTsgLy9rZWVwIHRyYWNrIG9mIHJvd3MgdGhhdCB0aGUgZXZlbnQgY2FuJ3QgYmUgaW5zZXJ0ZWQgaW50b1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRheUV2ZW50cyA9IGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldO1xuICAgICAgaWYgKGRheUV2ZW50cy5sZW5ndGggPiBtYXhCbG9ja3MpIHtcbiAgICAgICAgbWF4QmxvY2tzID0gZGF5RXZlbnRzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgLy9hZGRyZXNzIHJvd3MgdGhhdCBhcmUgbm90IHRoZSBsYXN0IGVsZW1lbnQgaW4gY2xvc2VkU2xvdHNcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4QmxvY2tzOyBqKyspIHtcbiAgICAgICAgaWYgKGogPiBkYXlFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xvc2VkU2xvdHMuaW5jbHVkZXMoaikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5RXZlbnRzW2pdLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImlzRXZlbnRcIikpIHtcbiAgICAgICAgICBjbG9zZWRTbG90cy5wdXNoKGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNob3NlblJvdyA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEJsb2NrczsgaSsrKSB7XG4gICAgICBpZiAoIWNsb3NlZFNsb3RzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgIGNob3NlblJvdyA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vZmlsbCBpbiBwbGFjZWhvbGRlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3BsYWNlaG9sZGVyc1xuICAgICAgd2hpbGUgKGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldLmxlbmd0aCA8PSBjaG9zZW5Sb3cpIHtcbiAgICAgICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV0ucHVzaChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJldmVudCBiZWxvdyBwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBrZXk9e2BwbGFjZWhvbGRlci0ke2d1ZCgpfWB9XG4gICAgICAgICAgPjwvZGl2PixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy9yZXN0IG9mIGV2ZW50IHRoYXQgaXMgdW5kZXIgdGhlIG1haW4gYmFubmVyXG4gICAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXVtjaG9zZW5Sb3ddID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnQgZXZlbnQgYmVsb3dcIiBrZXk9e2BmaWxsZXItJHtndWQoKX1gfT48L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9yZW5kZXIgZXZlbnRcbiAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDFdW2Nob3NlblJvd10gPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BtdWx0aS1ldmVudC0ke2Nob3NlblJvd31gfT5cbiAgICAgICAgPE11bHRpRXZlbnRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgey4uLm11bHRpRXZlbnRQcm9wc31cbiAgICAgICAgICBsZW5ndGg9e2xlbmd0aH1cbiAgICAgICAgICBhcnJvd0xlZnQ9e2Fycm93TGVmdH1cbiAgICAgICAgICBhcnJvd1JpZ2h0PXthcnJvd1JpZ2h0fVxuICAgICAgICAgIGtleT17YG11bHRpLWV2ZW50LSR7Z3VkKCl9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2F0dGVtcHRzIHRvIHJlbmRlciBpbiBhIHBsYWNlaG9sZGVyIHRoZW4gYXQgdGhlIGVuZFxuICByZW5kZXJTaW5nbGVFdmVudChldmVudHNFYWNoRGF5OiBhbnlbXSwgZGF0ZTogbnVtYmVyLCBldmVudDogRXZlbnRQcm9wcykge1xuICAgIGxldCBmb3VuZEVtcHR5ID0gZmFsc2U7XG4gICAgbGV0IG5vZGVzID0gZXZlbnRzRWFjaERheVtkYXRlIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBub2Rlc1tpXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJldmVudFwiKSAmJlxuICAgICAgICAhbm9kZXNbaV0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXNFdmVudFwiKVxuICAgICAgKSB7XG4gICAgICAgIC8vdGFyZ2V0IG9ubHkgcGxhY2Vob2xkZXJzXG4gICAgICAgIG5vZGVzW2ldID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9PlxuICAgICAgICAgICAgPEV2ZW50IHsuLi5ldmVudH0ga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgZm91bmRFbXB0eSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kRW1wdHkpIHtcbiAgICAgIGV2ZW50c0VhY2hEYXlbZGF0ZSAtIDFdLnB1c2goXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9PlxuICAgICAgICAgIDxFdmVudCB7Li4uZXZlbnR9IGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9IC8+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy9nZXQgZGF0ZXMgYmFzZWQgb24gcnJ1bGUgc3RyaW5nIGJldHdlZW4gZGF0ZXNcbiAgc3RhdGljIGdldERhdGVzRnJvbVJSdWxlKFxuICAgIHN0cjogc3RyaW5nLFxuICAgIGV2ZW50U3RhcnQ6IERhdGVUaW1lLFxuICAgIGJldHdlZW5TdGFydDogRGF0ZVRpbWUsXG4gICAgYmV0d2VlbkVuZDogRGF0ZVRpbWUsXG4gICkge1xuICAgIC8vZ2V0IHJlY3VycmVuY2VzIHVzaW5nIFJSdWxlXG4gICAgbGV0IHJzdHIgPSBgRFRTVEFSVDoke2V2ZW50U3RhcnQuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkudG9Gb3JtYXQoXCJ5eXl5TU1kZCdUJ0hIbW1zc1wiKX1aXFxuJHtzdHJ9YDtcbiAgICBsZXQgcnJ1bGVTZXQgPSBycnVsZXN0cihyc3RyLCB7IGZvcmNlc2V0OiB0cnVlIH0pO1xuXG4gICAgLy9nZXQgZGF0ZXNcbiAgICBsZXQgYmVnaW4gPSBiZXR3ZWVuU3RhcnQudG9VVEMoKS50b0pTRGF0ZSgpO1xuICAgIGxldCBlbmQgPSBiZXR3ZWVuRW5kLnRvVVRDKCkudG9KU0RhdGUoKTtcbiAgICBsZXQgZGF0ZXMgPSBycnVsZVNldC5iZXR3ZWVuKGJlZ2luLCBlbmQpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZXZlbnRzRWFjaERheSA9IHRoaXMuZ2V0UmVuZGVyRXZlbnRzKFxuICAgICAgdGhpcy5zdGF0ZS5ldmVudHMsXG4gICAgICB0aGlzLnN0YXRlLnNpbmdsZUV2ZW50cyxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyXCJcbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJMaWdodEdyYXlcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1MTU2NWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImNhbGVuZGFyXCIsIHt9KSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhci1uYXZpZ2F0ZSB1bnNlbGVjdGFibGVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5sYXN0TW9udGh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxMDA5NDtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhbGVuZGFyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1vbnRoTmFtZXNbdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIC0gMV0gK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQueWVhcn1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXItbmF2aWdhdGUgdW5zZWxlY3RhYmxlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTAwOTU7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWJvZHlcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXlzKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyRGF0ZXMoZXZlbnRzRWFjaERheSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Rm9vdGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWxsIHRpbWVzIHNob3duIHlvdXIgdGltZXpvbmUgKHt0aGlzLnN0YXRlLnVzZXJUaW1lem9uZS5uYW1lfSlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yP2NpZD1cIiArXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNhbGVuZGFyc1swXS5jYWxlbmRhcklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJiM0MzsgQWRkIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: zt
}, yx = process.env.NODE_ENV === "production" ? {
  name: "7l8byf",
  styles: "font-size:14px;padding-left:5px;text-align:left"
} : {
  name: "155wnvz-Calendar",
  styles: "font-size:14px;padding-left:5px;text-align:left;label:Calendar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNHZCc0IiLCJmaWxlIjoiL2hvbWUvY2hha2gvRG9jdW1lbnRzL290aGVyLWdpdC9yZWFjdC1nb29nbGUtY2FsZW5kYXIvc3JjL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBycnVsZXN0ciB9IGZyb20gXCJycnVsZVwiO1xuXG4vL0B0cy1pZ25vcmVcbmltcG9ydCBndWQgZnJvbSBcImd1ZFwiO1xuXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vZXZlbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBMYW5ndWFnZXMsIGF2YWlsYWJsZUxhbmd1YWdlcyB9IGZyb20gXCIuL2xhbmd1YWdlc1wiO1xuaW1wb3J0IE11bHRpRXZlbnQgZnJvbSBcIi4vbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJQcm9wcywgQ2FsZW5kYXJTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBFdmVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXMvZXZlbnRcIjtcbmltcG9ydCB7IE11bHRpRXZlbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzL211bHRpRXZlbnRcIjtcbmltcG9ydCB7IGdldEV2ZW50c0xpc3QsIGxvYWRDYWxlbmRhckFQSSB9IGZyb20gXCIuL3V0aWxzL2dvb2dsZUNhbGVuZGFyQVBJXCI7XG5pbXBvcnQgeyBpc011bHRpRXZlbnQsIHRvX2RhdGV0aW1lIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBDYWxlbmRhclByb3BzLFxuICBDYWxlbmRhclN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENhbGVuZGFyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vbnRoTmFtZXM6IFsuLi5MYW5ndWFnZXMuRU4uTU9OVEhTXSxcbiAgICAgIGRheXM6IFsuLi5MYW5ndWFnZXMuRU4uREFZU10sXG4gICAgICB0b2RheTogRGF0ZVRpbWUubm93KCksXG4gICAgICBjdXJyZW50OiBEYXRlVGltZS51dGMoKS5zdGFydE9mKFwibW9udGhcIiksIC8vY3VycmVudCBwb3NpdGlvbiBvbiBjYWxlbmRhciAoZmlyc3QgZGF5IG9mIG1vbnRoKVxuICAgICAgY2FsZW5kYXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sIC8vYWxsIGRheSBvciBtdWx0aSBkYXkgZXZlbnRzXG4gICAgICBzaW5nbGVFdmVudHM6IFtdLCAvL3NpbmdsZSBkYXkgZXZlbnRzXG4gICAgICB1c2VyVGltZXpvbmU6IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogXCJzeXN0ZW1cIiB9KS56b25lLFxuICAgICAgc2hvd0Zvb3RlcjogcHJvcHMuc2hvd0Zvb3RlciB8fCB0cnVlLFxuICAgICAgc2hvd0Fycm93OiBwcm9wcy5zaG93QXJyb3cgfHwgdHJ1ZSxcbiAgICAgIHByb2Nlc3NlZENhbGVuZGFyczogW10sXG4gICAgfTtcblxuICAgIHRoaXMubGFzdE1vbnRoID0gdGhpcy5sYXN0TW9udGguYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHRNb250aCA9IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmxhbmd1YWdlICYmXG4gICAgICBhdmFpbGFibGVMYW5ndWFnZXMuaW5jbHVkZXModGhpcy5wcm9wcy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpKVxuICAgICkge1xuICAgICAgLy8gdHJ5IHRvIGNoYW5nZSBsYW5ndWFnZVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGFuZyA9IHRoaXMucHJvcHMubGFuZ3VhZ2UudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgbW9udGhOYW1lczogWy4uLkxhbmd1YWdlc1tsYW5nXS5NT05USFNdLFxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGRheXM6IFsuLi5MYW5ndWFnZXNbbGFuZ10uREFZU10sXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjaG9vc2luZyBhIG5ldyBsYW5ndWFnZVwiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2luaXQgYW5kIGxvYWQgZ29vZ2xlIGNhbGVuZGFyIGFwaVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkQ2FsZW5kYXJBUEkodGhpcy5wcm9wcy5hcGlLZXkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgR0FQSSBjbGllbnQgZm9yIEFQSVwiLCBlcnIpO1xuICAgIH1cblxuICAgIC8vR2V0IGV2ZW50cyBmcm9tIGFsbCBjYWxlbmRhcnNcbiAgICBmb3IgKGxldCBjYWxlbmRhciBvZiB0aGlzLnByb3BzLmNhbGVuZGFycykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy9xdWVyeSBhcGkgZm9yIGV2ZW50c1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRFdmVudHNMaXN0KGNhbGVuZGFyLmNhbGVuZGFySWQpO1xuXG4gICAgICAgIC8vcHJvY2VzcyBldmVudHNcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMucHJvY2Vzc0V2ZW50cyhcbiAgICAgICAgICByZXMucmVzdWx0Lml0ZW1zLFxuICAgICAgICAgIHJlcy5yZXN1bHQuc3VtbWFyeSxcbiAgICAgICAgICBjYWxlbmRhci5jb2xvciA/PyBcIlwiLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vZml4IGR1cGxpY2F0ZSBjYWxlbmRhcnNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByb2Nlc3NlZENhbGVuZGFycy5pbmNsdWRlcyhjYWxlbmRhci5jYWxlbmRhcklkKSkge1xuICAgICAgICAgIC8vc2V0IHN0YXRlIHdpdGggY2FsY3VsYXRlZCB2YWx1ZXNcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV2ZW50czogWy4uLnRoaXMuc3RhdGUuZXZlbnRzLCAuLi5ldmVudHNbMF1dLFxuICAgICAgICAgICAgc2luZ2xlRXZlbnRzOiBbLi4udGhpcy5zdGF0ZS5zaW5nbGVFdmVudHMsIC4uLmV2ZW50c1sxXV0sXG4gICAgICAgICAgICBwcm9jZXNzZWRDYWxlbmRhcnM6IFtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wcm9jZXNzZWRDYWxlbmRhcnMsXG4gICAgICAgICAgICAgIGNhbGVuZGFyLmNhbGVuZGFySWQsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgZXZlbnRzXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9nZXQgZWFzeSB0byB3b3JrIHdpdGggZXZlbnRzIGFuZCBzaW5nbGVFdmVudHMgZnJvbSByZXNwb25zZVxuICBwcm9jZXNzRXZlbnRzKGl0ZW1zOiBhbnlbXSwgY2FsZW5kYXJOYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgbGV0IHNpbmdsZUV2ZW50czogYW55W10gPSBbXTtcbiAgICBsZXQgZXZlbnRzOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjaGFuZ2VkOiBhbnlbXSA9IFtdO1xuICAgIGxldCBjYW5jZWxsZWQ6IGFueVtdID0gW107XG5cbiAgICBpdGVtcy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lKSB7XG4gICAgICAgIC8vY2FuY2VsbGVkIG9yIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGlmIChldmVudC5zdGF0dXMgPT0gXCJjYW5jZWxsZWRcIikge1xuICAgICAgICAgIC8vY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICAgIGNhbmNlbGxlZC5wdXNoKHtcbiAgICAgICAgICAgIHJlY3VycmluZ0V2ZW50SWQ6IGV2ZW50LnJlY3VycmluZ0V2ZW50SWQsXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0VGltZTogZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc3RhdHVzID09IFwiY29uZmlybWVkXCIpIHtcbiAgICAgICAgICAvL2NoYW5nZWQgZXZlbnRzXG4gICAgICAgICAgY2hhbmdlZC5wdXNoKHtcbiAgICAgICAgICAgIHJlY3VycmluZ0V2ZW50SWQ6IGV2ZW50LnJlY3VycmluZ0V2ZW50SWQsXG4gICAgICAgICAgICBuYW1lOiBldmVudC5zdW1tYXJ5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgb3JpZ2luYWxTdGFydFRpbWU6IGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGUpLFxuICAgICAgICAgICAgbmV3U3RhcnRUaW1lOiBldmVudC5zdGFydC5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlKSxcbiAgICAgICAgICAgIG5ld0VuZFRpbWU6IGV2ZW50LmVuZC5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGUpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNhdGVnb3JpemVkOiBcIiwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNvbmZpcm1lZFwiKSB7XG4gICAgICAgIC8vbm9ybWFsIGV2ZW50c1xuICAgICAgICBsZXQgbmV3RXZlbnQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIG5hbWU6IGV2ZW50LnN1bW1hcnksXG4gICAgICAgICAgc3RhcnRUaW1lOiBldmVudC5zdGFydC5kYXRlVGltZVxuICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKVxuICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGUpLFxuICAgICAgICAgIGVuZFRpbWU6IGV2ZW50LmVuZC5kYXRlVGltZVxuICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlVGltZSlcbiAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZSksXG4gICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICByZWN1cnJlbmNlOiBldmVudC5yZWN1cnJlbmNlLFxuICAgICAgICAgIGNoYW5nZWRFdmVudHM6IFtdLFxuICAgICAgICAgIGNhbmNlbGxlZEV2ZW50czogW10sXG4gICAgICAgICAgY2FsZW5kYXJOYW1lOiBjYWxlbmRhck5hbWUsXG4gICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpc011bHRpRXZlbnQobmV3RXZlbnQuc3RhcnRUaW1lLCBuZXdFdmVudC5lbmRUaW1lKSkge1xuICAgICAgICAgIGV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW5nbGVFdmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNhdGVnb3JpemVkOiBcIiwgZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9hZGQgY2hhbmdlZCBldmVudHMgYW5kIGNhbmNlbGxlZCBldmVudHMgdG8gY29ycmVzcG9uZGluZyBldmVudCBvYmplY3RcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICAvL3B1c2ggY2hhbmdlZCBldmVudHNcbiAgICAgICAgY2hhbmdlZFxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5nZSkgPT4gY2hhbmdlLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2hhbmdlZEV2ZW50cy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9wdXNoIGNhbmNlbGxlZCBldmVudHNcbiAgICAgICAgY2FuY2VsbGVkXG4gICAgICAgICAgLmZpbHRlcigoY2FuY2VsKSA9PiBjYW5jZWwucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jYW5jZWxsZWRFdmVudHMucHVzaChjYW5jZWwub3JpZ2luYWxTdGFydFRpbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2luZ2xlRXZlbnRzLmZvckVhY2goKGV2ZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgLy9wdXNoIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGNoYW5nZWRcbiAgICAgICAgICAuZmlsdGVyKChjaGFuZ2UpID0+IGNoYW5nZS5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNoYW5nZWRFdmVudHMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vcHVzaCBjYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgIGNhbmNlbGxlZFxuICAgICAgICAgIC5maWx0ZXIoKGNhbmNlbCkgPT4gY2FuY2VsLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNhbmNlbCkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2FuY2VsbGVkRXZlbnRzLnB1c2goY2FuY2VsLm9yaWdpbmFsU3RhcnRUaW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBbZXZlbnRzLCBzaW5nbGVFdmVudHNdO1xuICB9XG5cbiAgLy9zZXRzIGN1cnJlbnQgbW9udGggdG8gcHJldmlvdXMgbW9udGhcbiAgbGFzdE1vbnRoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnQubWludXMoeyBtb250aDogMSB9KSB9KTtcbiAgfVxuXG4gIC8vc2V0cyBjdXJyZW50IG1vbnRoIHRvIGZvbGxvd2luZyBtb250aFxuICBuZXh0TW9udGgoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudC5wbHVzKHsgbW9udGg6IDEgfSkgfSk7XG4gIH1cblxuICBjbGVhckV2ZW50cygpIHtcbiAgICBsZXQgZGF5c0luTW9udGggPSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXktXCIgKyBpKTtcbiAgICAgIHdoaWxlIChub2RlLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vcmVuZGVycyB0aGUgZGF5IG9mIHdlZWsgbmFtZXNcbiAgcmVuZGVyRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXlzLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkYXktbmFtZVwiXG4gICAgICAgIGtleT17XCJkYXktb2Ytd2Vlay1cIiArIGl9XG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIHsgYm9yZGVyQ29sb3I6IFwiTGlnaHRHcmF5XCIgfSxcbiAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICB7eH1cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICB9XG5cbiAgLy9yZW5kZXJzIHRoZSBibG9ja3MgZm9yIHRoZSBkYXlzIG9mIGVhY2ggbW9udGhcbiAgcmVuZGVyRGF0ZXMoZXZlbnRzRWFjaERheTogYW55W10pOiBhbnlbXSB7XG4gICAgbGV0IGN1cnJlbnREYXlzSW5Nb250aCA9IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbGV0IGRheXMgPSBbLi4uQXJyYXkoY3VycmVudERheXNJbk1vbnRoICsgMSkua2V5cygpXS5zbGljZSgxKTsgLy8gY3JlYXRlIGFycmF5IGZyb20gMSB0byBudW1iZXIgb2YgZGF5cyBpbiBtb250aFxuICAgIGxldCBkYXlPZldlZWsgPSB0aGlzLnN0YXRlLmN1cnJlbnQud2Vla2RheTsgLy9nZXQgZGF5IG9mIHdlZWsgb2YgZmlyc3QgZGF5IGluIHRoZSBtb250aFxuICAgIGxldCBwYWREYXlzID1cbiAgICAgICgoKC1jdXJyZW50RGF5c0luTW9udGggLSB0aGlzLnN0YXRlLmN1cnJlbnQud2Vla2RheSkgJSA3KSArIDcpICUgNzsgLy9udW1iZXIgb2YgZGF5cyB0byBmaWxsIG91dCB0aGUgbGFzdCByb3dcblxuICAgIHJldHVybiBbXG4gICAgICBbLi4uQXJyYXkoZGF5T2ZXZWVrKV0ubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgIGtleT17XCJlbXB0eS1kYXktXCIgKyBpfVxuICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKSksXG4gICAgICBkYXlzLm1hcCgoeCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeCA9PSB0aGlzLnN0YXRlLnRvZGF5LmRheSAmJlxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5oYXNTYW1lKHRoaXMuc3RhdGUudG9kYXksIFwibW9udGhcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICAgICAga2V5PXtcImRheS1cIiArIHh9XG4gICAgICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSksXG4gICAgICAgICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9kYXlcIiwge30pLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGF5XCIgaWQ9e1wiZGF5LVwiICsgeH0+XG4gICAgICAgICAgICAgICAge2V2ZW50c0VhY2hEYXlbeCAtIDFdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICAgICAga2V5PXtcImRheS1cIiArIHh9XG4gICAgICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckRheVwiIGlkPXtcImRheS1cIiArIHh9PlxuICAgICAgICAgICAgICAgIHtldmVudHNFYWNoRGF5W3ggLSAxXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIFsuLi5BcnJheShwYWREYXlzKV0ubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgIGtleT17XCJlbXB0eS1kYXktMi1cIiArIGl9XG4gICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApKSxcbiAgICBdO1xuICB9XG5cbiAgLy9nZXQgYXJyYXkgb2YgYXJyYXlzIG9mIGxlbmd0aCBkYXlzIGluIG1vbnRoIGNvbnRhaW5pbmcgdGhlIGV2ZW50cyBpbiBlYWNoIGRheVxuICBnZXRSZW5kZXJFdmVudHMoZXZlbnRzOiBhbnlbXSwgc2luZ2xlRXZlbnRzOiBhbnlbXSkge1xuICAgIGxldCBldmVudHNFYWNoRGF5ID0gWy4uLkFycmF5KHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMCldLm1hcChcbiAgICAgIChlKSA9PiBbXSxcbiAgICApOyAvL2NyZWF0ZSBhcnJheSBvZiBlbXB0eSBhcnJheXMgb2YgbGVuZ3RoIGRheXNJbk1vbnRoXG4gICAgbGV0IGV2ZW50c1RvUmVuZGVyOiBFdmVudFByb3BzW10gPSBbXTtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvX2RhdGV0aW1lKGV2ZW50LmVuZFRpbWUpLmRpZmYoXG4gICAgICAgICAgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKSxcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRhdGVzID0gQ2FsZW5kYXIuZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgICAgICAgZXZlbnQucmVjdXJyZW5jZVswXSxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Lm1pbnVzKGR1cmF0aW9uKSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQucGx1cyh7IG1vbnRoOiAxIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVuZGVyIHJlY3VycmVuY2VzXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgICAvL2Rvbid0IHJlbmRlciBpZiBpdCBpcyBjYW5jZWxsZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5jYW5jZWxsZWRFdmVudHMuc29tZSgoY2FuY2VsbGVkTW9tZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgIGNhbmNlbGxlZE1vbWVudC5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBwcm9wczogRXZlbnRQcm9wcztcbiAgICAgICAgICAvL3VwZGF0ZSBpbmZvcm1hdGlvbiBpZiBldmVudCBoYXMgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRFdmVudCA9IGV2ZW50LmNoYW5nZWRFdmVudHMuZmluZCgoY2hhbmdlZEV2ZW50OiBhbnkpID0+XG4gICAgICAgICAgICBjaGFuZ2VkRXZlbnQub3JpZ2luYWxTdGFydFRpbWUuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChjaGFuZ2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBjaGFuZ2VkRXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3U3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3RW5kVGltZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5nZWRFdmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGNoYW5nZWRFdmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudFN0YXJ0ID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhkYXRlLmdldFRpbWUoKSwge1xuICAgICAgICAgICAgICB6b25lOiBcInV0Y1wiLFxuICAgICAgICAgICAgfSk7IC8vc2luY2UgcnJ1bGUgd29ya3Mgd2l0aCB1dGMgdGltZXNcbiAgICAgICAgICAgIGxldCBldmVudEVuZCA9IGV2ZW50U3RhcnQucGx1cyhkdXJhdGlvbik7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogZXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBldmVudFN0YXJ0LFxuICAgICAgICAgICAgICBlbmRUaW1lOiBldmVudEVuZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudHNUb1JlbmRlci5wdXNoKHByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3JlbmRlciBldmVudFxuICAgICAgICAvL2NoZWNrIGlmIGV2ZW50IGlzIGluIHJhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKGV2ZW50LnN0YXJ0VGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggfHxcbiAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyKSAmJlxuICAgICAgICAgICAgZXZlbnQuZW5kVGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGgpIHx8XG4gICAgICAgICAgZXZlbnQuZW5kVGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudHNUb1JlbmRlci5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50c1RvUmVuZGVyID0gZXZlbnRzVG9SZW5kZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcyAhPSAwKSB7XG4gICAgICAgIHJldHVybiBhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYi5lbmRUaW1lLmRpZmYoYS5lbmRUaW1lKS5taWxsaXNlY29uZHM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudHNUb1JlbmRlci5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3TXVsdGlFdmVudChldmVudHNFYWNoRGF5LCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBsZXQgZXZlbnRQcm9wcyA9IHtcbiAgICAgIHRvb2x0aXBTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvb2x0aXBcIiwge30pLCAvL2dldHMgdGhpcy5wcm9wcy5zdHlsZXMudG9vbHRpcCBpZiBleGlzdHMsIGVsc2UgZW1wdHkgb2JqZWN0XG4gICAgICBldmVudFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRcIiwge30pLFxuICAgICAgZXZlbnRDaXJjbGVTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50Q2lyY2xlXCIsIHt9KSxcbiAgICAgIGV2ZW50VGV4dFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRUZXh0XCIsIHt9KSxcbiAgICB9O1xuXG4gICAgbGV0IHNpbmdsZUV2ZW50c1RvUmVuZGVyOiBFdmVudFByb3BzW10gPSBbXTtcbiAgICBzaW5nbGVFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvX2RhdGV0aW1lKGV2ZW50LmVuZFRpbWUpLmRpZmYoXG4gICAgICAgICAgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL2dldCByZWN1cnJlbmNlcyB1c2luZyBSUnVsZVxuICAgICAgICBsZXQgZGF0ZXMgPSBDYWxlbmRhci5nZXREYXRlc0Zyb21SUnVsZShcbiAgICAgICAgICBldmVudC5yZWN1cnJlbmNlWzBdLFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSxcbiAgICAgICAgICB0b19kYXRldGltZSh0aGlzLnN0YXRlLmN1cnJlbnQpLFxuICAgICAgICAgIHRvX2RhdGV0aW1lKHRoaXMuc3RhdGUuY3VycmVudCkucGx1cyh7IG1vbnRoOiAxIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vcmVuZGVyIHJlY3VycmVuY2VzXG4gICAgICAgIGRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcbiAgICAgICAgICAvL2NoZWNrIGlmIGl0IGlzIGluIGNhbmNlbGxlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbGxlZEV2ZW50cy5zb21lKChjYW5jZWxsZWRNb21lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgY2FuY2VsbGVkTW9tZW50Lmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9pZiBldmVudCBoYXMgY2hhbmdlZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRFdmVudCA9IGV2ZW50LmNoYW5nZWRFdmVudHMuZmluZCgoY2hhbmdlZEV2ZW50OiBhbnkpID0+XG4gICAgICAgICAgICBjaGFuZ2VkRXZlbnQub3JpZ2luYWxTdGFydFRpbWUuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBwcm9wczogRXZlbnRQcm9wcztcbiAgICAgICAgICBpZiAoY2hhbmdlZEV2ZW50KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogY2hhbmdlZEV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogY2hhbmdlZEV2ZW50Lm5ld1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogY2hhbmdlZEV2ZW50Lm5ld0VuZFRpbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGFuZ2VkRXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBjaGFuZ2VkRXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRTdGFydCA9IERhdGVUaW1lLmZyb21NaWxsaXMoZGF0ZS5nZXRUaW1lKCksIHtcbiAgICAgICAgICAgICAgem9uZTogXCJ1dGNcIixcbiAgICAgICAgICAgIH0pOyAvL2F2b2lkIGJhZCB0aW1lem9uZSBjb252ZXJzaW9uc1xuICAgICAgICAgICAgbGV0IGV2ZW50RW5kID0gZXZlbnRTdGFydC5wbHVzKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50U3RhcnQsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGV2ZW50RW5kLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIucHVzaChwcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jaGVjayBpZiBldmVudCBpcyBpbiBjdXJyZW50IG1vbnRoXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIHx8XG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIgPSBzaW5nbGVFdmVudHNUb1JlbmRlci5zb3J0KFxuICAgICAgKGEsIGIpID0+IGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcyxcbiAgICApO1xuICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclNpbmdsZUV2ZW50KGV2ZW50c0VhY2hEYXksIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSkuZGF5LCB7XG4gICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAuLi5ldmVudFByb3BzLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRzRWFjaERheTtcbiAgfVxuXG4gIC8vVE9ETzogcmVmYWN0b3JcbiAgLy9kZWNpZGVzIGhvdyB0byByZW5kZXIgZXZlbnRzXG4gIGRyYXdNdWx0aUV2ZW50KGV2ZW50c0VhY2hEYXk6IGFueVtdLCBwcm9wczogTXVsdGlFdmVudFByb3BzKSB7XG4gICAgbGV0IHN0YXJ0RHJhd0RhdGU7XG4gICAgbGV0IGJsb2NrTGVuZ3RoID0gMTtcbiAgICBsZXQgY3VyRGF0ZTogRGF0ZVRpbWU7XG4gICAgbGV0IGVuZERhdGU6IERhdGVUaW1lO1xuXG4gICAgbGV0IGFycm93TGVmdCA9IGZhbHNlO1xuICAgIGxldCBhcnJvd1JpZ2h0ID0gZmFsc2U7XG5cbiAgICBpZiAocHJvcHMuZW5kVGltZS5oYXNTYW1lKHByb3BzLmVuZFRpbWUuc3RhcnRPZihcImRheVwiKSwgXCJzZWNvbmRcIikpIHtcbiAgICAgIGVuZERhdGUgPSBwcm9wcy5lbmRUaW1lXG4gICAgICAgIC5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KVxuICAgICAgICAubWludXMoeyBkYXk6IDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZERhdGUgPSB0b19kYXRldGltZShwcm9wcy5lbmRUaW1lKS5zZXRab25lKFwidXRjXCIsIHtcbiAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRvX2RhdGV0aW1lKHByb3BzLnN0YXJ0VGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkgPFxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50XG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QXJyb3cpIHtcbiAgICAgICAgYXJyb3dMZWZ0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc3RhcnREcmF3RGF0ZSA9IDE7XG4gICAgICBjdXJEYXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydERyYXdEYXRlID0gcHJvcHMuc3RhcnRUaW1lLmRheTtcbiAgICAgIGN1ckRhdGUgPSB0b19kYXRldGltZShwcm9wcy5zdGFydFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwge1xuICAgICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGN1ckRhdGUuc3RhcnRPZihcImRheVwiKSA8PSBlbmREYXRlLnN0YXJ0T2YoXCJkYXlcIikpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VyRGF0ZS5kYXkgPT0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoICYmXG4gICAgICAgICFlbmREYXRlLmhhc1NhbWUodGhpcy5zdGF0ZS5jdXJyZW50LCBcIm1vbnRoXCIpXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Fycm93KSB7XG4gICAgICAgICAgYXJyb3dSaWdodCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RyYXcgdGhlbiBxdWl0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGN1ckRhdGUuZGF5ID09IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCB8fFxuICAgICAgICBjdXJEYXRlLmhhc1NhbWUoZW5kRGF0ZSwgXCJkYXlcIilcbiAgICAgICkge1xuICAgICAgICAvL2RyYXcgdGhlbiBxdWl0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoY3VyRGF0ZS53ZWVrZGF5ID09IDYpIHtcbiAgICAgICAgLy9kcmF3IHRoZW4gcmVzZXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBzdGFydERyYXdEYXRlID0gY3VyRGF0ZS5wbHVzKHsgZGF5OiAxIH0pLmRheTtcbiAgICAgICAgYmxvY2tMZW5ndGggPSAwO1xuICAgICAgICBhcnJvd0xlZnQgPSBmYWxzZTtcbiAgICAgICAgYXJyb3dSaWdodCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBibG9ja0xlbmd0aCsrO1xuICAgICAgY3VyRGF0ZSA9IGN1ckRhdGUucGx1cyh7IGRheTogMSB9KTtcbiAgICB9XG4gIH1cblxuICAvL1RPRE86IHJlZmFjdG9yIHRoaXMgdG9vP1xuICAvL2hhbmRsZXMgcmVuZGVyaW5nIGFuZCBwcm9wZXIgc3RhY2tpbmcgb2YgaW5kaXZpZHVhbCBibG9ja3NcbiAgcmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgIGV2ZW50c0VhY2hEYXk6IGFueVtdLFxuICAgIHN0YXJ0RGF0ZTogYW55LFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHByb3BzOiBhbnksXG4gICAgYXJyb3dMZWZ0OiBib29sZWFuLFxuICAgIGFycm93UmlnaHQ6IGJvb2xlYW4sXG4gICkge1xuICAgIGxldCBtdWx0aUV2ZW50UHJvcHMgPSB7XG4gICAgICB0b29sdGlwU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b29sdGlwXCIsIHt9KSwgLy9nZXRzIHRoaXMucHJvcHMuc3R5bGVzLnRvb2x0aXAgaWYgZXhpc3RzLCBlbHNlIGVtcHR5IG9iamVjdFxuICAgICAgbXVsdGlFdmVudFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwibXVsdGlFdmVudFwiLCB7fSksXG4gICAgfTtcblxuICAgIGxldCBtYXhCbG9ja3MgPSAwO1xuICAgIGxldCBjbG9zZWRTbG90czogYW55W10gPSBbXTsgLy9rZWVwIHRyYWNrIG9mIHJvd3MgdGhhdCB0aGUgZXZlbnQgY2FuJ3QgYmUgaW5zZXJ0ZWQgaW50b1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGRheUV2ZW50cyA9IGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldO1xuICAgICAgaWYgKGRheUV2ZW50cy5sZW5ndGggPiBtYXhCbG9ja3MpIHtcbiAgICAgICAgbWF4QmxvY2tzID0gZGF5RXZlbnRzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgLy9hZGRyZXNzIHJvd3MgdGhhdCBhcmUgbm90IHRoZSBsYXN0IGVsZW1lbnQgaW4gY2xvc2VkU2xvdHNcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4QmxvY2tzOyBqKyspIHtcbiAgICAgICAgaWYgKGogPiBkYXlFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xvc2VkU2xvdHMuaW5jbHVkZXMoaikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5RXZlbnRzW2pdLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImlzRXZlbnRcIikpIHtcbiAgICAgICAgICBjbG9zZWRTbG90cy5wdXNoKGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNob3NlblJvdyA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG1heEJsb2NrczsgaSsrKSB7XG4gICAgICBpZiAoIWNsb3NlZFNsb3RzLmluY2x1ZGVzKGkpKSB7XG4gICAgICAgIGNob3NlblJvdyA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vZmlsbCBpbiBwbGFjZWhvbGRlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvL3BsYWNlaG9sZGVyc1xuICAgICAgd2hpbGUgKGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldLmxlbmd0aCA8PSBjaG9zZW5Sb3cpIHtcbiAgICAgICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV0ucHVzaChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJldmVudCBiZWxvdyBwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBrZXk9e2BwbGFjZWhvbGRlci0ke2d1ZCgpfWB9XG4gICAgICAgICAgPjwvZGl2PixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy9yZXN0IG9mIGV2ZW50IHRoYXQgaXMgdW5kZXIgdGhlIG1haW4gYmFubmVyXG4gICAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXVtjaG9zZW5Sb3ddID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnQgZXZlbnQgYmVsb3dcIiBrZXk9e2BmaWxsZXItJHtndWQoKX1gfT48L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9yZW5kZXIgZXZlbnRcbiAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDFdW2Nob3NlblJvd10gPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BtdWx0aS1ldmVudC0ke2Nob3NlblJvd31gfT5cbiAgICAgICAgPE11bHRpRXZlbnRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgey4uLm11bHRpRXZlbnRQcm9wc31cbiAgICAgICAgICBsZW5ndGg9e2xlbmd0aH1cbiAgICAgICAgICBhcnJvd0xlZnQ9e2Fycm93TGVmdH1cbiAgICAgICAgICBhcnJvd1JpZ2h0PXthcnJvd1JpZ2h0fVxuICAgICAgICAgIGtleT17YG11bHRpLWV2ZW50LSR7Z3VkKCl9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvL2F0dGVtcHRzIHRvIHJlbmRlciBpbiBhIHBsYWNlaG9sZGVyIHRoZW4gYXQgdGhlIGVuZFxuICByZW5kZXJTaW5nbGVFdmVudChldmVudHNFYWNoRGF5OiBhbnlbXSwgZGF0ZTogbnVtYmVyLCBldmVudDogRXZlbnRQcm9wcykge1xuICAgIGxldCBmb3VuZEVtcHR5ID0gZmFsc2U7XG4gICAgbGV0IG5vZGVzID0gZXZlbnRzRWFjaERheVtkYXRlIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBub2Rlc1tpXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJldmVudFwiKSAmJlxuICAgICAgICAhbm9kZXNbaV0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXNFdmVudFwiKVxuICAgICAgKSB7XG4gICAgICAgIC8vdGFyZ2V0IG9ubHkgcGxhY2Vob2xkZXJzXG4gICAgICAgIG5vZGVzW2ldID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9PlxuICAgICAgICAgICAgPEV2ZW50IHsuLi5ldmVudH0ga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgZm91bmRFbXB0eSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kRW1wdHkpIHtcbiAgICAgIGV2ZW50c0VhY2hEYXlbZGF0ZSAtIDFdLnB1c2goXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9PlxuICAgICAgICAgIDxFdmVudCB7Li4uZXZlbnR9IGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9IC8+XG4gICAgICAgIDwvZGl2PixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy9nZXQgZGF0ZXMgYmFzZWQgb24gcnJ1bGUgc3RyaW5nIGJldHdlZW4gZGF0ZXNcbiAgc3RhdGljIGdldERhdGVzRnJvbVJSdWxlKFxuICAgIHN0cjogc3RyaW5nLFxuICAgIGV2ZW50U3RhcnQ6IERhdGVUaW1lLFxuICAgIGJldHdlZW5TdGFydDogRGF0ZVRpbWUsXG4gICAgYmV0d2VlbkVuZDogRGF0ZVRpbWUsXG4gICkge1xuICAgIC8vZ2V0IHJlY3VycmVuY2VzIHVzaW5nIFJSdWxlXG4gICAgbGV0IHJzdHIgPSBgRFRTVEFSVDoke2V2ZW50U3RhcnQuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkudG9Gb3JtYXQoXCJ5eXl5TU1kZCdUJ0hIbW1zc1wiKX1aXFxuJHtzdHJ9YDtcbiAgICBsZXQgcnJ1bGVTZXQgPSBycnVsZXN0cihyc3RyLCB7IGZvcmNlc2V0OiB0cnVlIH0pO1xuXG4gICAgLy9nZXQgZGF0ZXNcbiAgICBsZXQgYmVnaW4gPSBiZXR3ZWVuU3RhcnQudG9VVEMoKS50b0pTRGF0ZSgpO1xuICAgIGxldCBlbmQgPSBiZXR3ZWVuRW5kLnRvVVRDKCkudG9KU0RhdGUoKTtcbiAgICBsZXQgZGF0ZXMgPSBycnVsZVNldC5iZXR3ZWVuKGJlZ2luLCBlbmQpO1xuICAgIHJldHVybiBkYXRlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZXZlbnRzRWFjaERheSA9IHRoaXMuZ2V0UmVuZGVyRXZlbnRzKFxuICAgICAgdGhpcy5zdGF0ZS5ldmVudHMsXG4gICAgICB0aGlzLnN0YXRlLnNpbmdsZUV2ZW50cyxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyXCJcbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJMaWdodEdyYXlcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1MTU2NWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImNhbGVuZGFyXCIsIHt9KSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhci1uYXZpZ2F0ZSB1bnNlbGVjdGFibGVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5sYXN0TW9udGh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxMDA5NDtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhbGVuZGFyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1vbnRoTmFtZXNbdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIC0gMV0gK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQueWVhcn1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXItbmF2aWdhdGUgdW5zZWxlY3RhYmxlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dE1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTAwOTU7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWJvZHlcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXlzKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyRGF0ZXMoZXZlbnRzRWFjaERheSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Rm9vdGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWxsIHRpbWVzIHNob3duIHlvdXIgdGltZXpvbmUgKHt0aGlzLnN0YXRlLnVzZXJUaW1lem9uZS5uYW1lfSlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yP2NpZD1cIiArXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNhbGVuZGFyc1swXS5jYWxlbmRhcklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJiM0MzsgQWRkIENhbGVuZGFyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: zt
}, Bx = process.env.NODE_ENV === "production" ? {
  name: "sgs7ru",
  styles: "padding-right:6px"
} : {
  name: "csro95-Calendar",
  styles: "padding-right:6px;label:Calendar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcVJnQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJydWxlc3RyIH0gZnJvbSBcInJydWxlXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGd1ZCBmcm9tIFwiZ3VkXCI7XG5cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IExhbmd1YWdlcywgYXZhaWxhYmxlTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgTXVsdGlFdmVudCBmcm9tIFwiLi9tdWx0aUV2ZW50XCI7XG5pbXBvcnQgeyBDYWxlbmRhclByb3BzLCBDYWxlbmRhclN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEV2ZW50UHJvcHMgfSBmcm9tIFwiLi90eXBlcy9ldmVudFwiO1xuaW1wb3J0IHsgTXVsdGlFdmVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgZ2V0RXZlbnRzTGlzdCwgbG9hZENhbGVuZGFyQVBJIH0gZnJvbSBcIi4vdXRpbHMvZ29vZ2xlQ2FsZW5kYXJBUElcIjtcbmltcG9ydCB7IGlzTXVsdGlFdmVudCwgdG9fZGF0ZXRpbWUgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIENhbGVuZGFyUHJvcHMsXG4gIENhbGVuZGFyU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FsZW5kYXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9udGhOYW1lczogWy4uLkxhbmd1YWdlcy5FTi5NT05USFNdLFxuICAgICAgZGF5czogWy4uLkxhbmd1YWdlcy5FTi5EQVlTXSxcbiAgICAgIHRvZGF5OiBEYXRlVGltZS5ub3coKSxcbiAgICAgIGN1cnJlbnQ6IERhdGVUaW1lLnV0YygpLnN0YXJ0T2YoXCJtb250aFwiKSwgLy9jdXJyZW50IHBvc2l0aW9uIG9uIGNhbGVuZGFyIChmaXJzdCBkYXkgb2YgbW9udGgpXG4gICAgICBjYWxlbmRhcnM6IFtdLFxuICAgICAgZXZlbnRzOiBbXSwgLy9hbGwgZGF5IG9yIG11bHRpIGRheSBldmVudHNcbiAgICAgIHNpbmdsZUV2ZW50czogW10sIC8vc2luZ2xlIGRheSBldmVudHNcbiAgICAgIHVzZXJUaW1lem9uZTogRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiBcInN5c3RlbVwiIH0pLnpvbmUsXG4gICAgICBzaG93Rm9vdGVyOiBwcm9wcy5zaG93Rm9vdGVyIHx8IHRydWUsXG4gICAgICBzaG93QXJyb3c6IHByb3BzLnNob3dBcnJvdyB8fCB0cnVlLFxuICAgICAgcHJvY2Vzc2VkQ2FsZW5kYXJzOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5sYXN0TW9udGggPSB0aGlzLmxhc3RNb250aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dE1vbnRoID0gdGhpcy5uZXh0TW9udGguYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMubGFuZ3VhZ2UgJiZcbiAgICAgIGF2YWlsYWJsZUxhbmd1YWdlcy5pbmNsdWRlcyh0aGlzLnByb3BzLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkpXG4gICAgKSB7XG4gICAgICAvLyB0cnkgdG8gY2hhbmdlIGxhbmd1YWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5wcm9wcy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBtb250aE5hbWVzOiBbLi4uTGFuZ3VhZ2VzW2xhbmddLk1PTlRIU10sXG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgZGF5czogWy4uLkxhbmd1YWdlc1tsYW5nXS5EQVlTXSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNob29zaW5nIGEgbmV3IGxhbmd1YWdlXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vaW5pdCBhbmQgbG9hZCBnb29nbGUgY2FsZW5kYXIgYXBpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWRDYWxlbmRhckFQSSh0aGlzLnByb3BzLmFwaUtleSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBHQVBJIGNsaWVudCBmb3IgQVBJXCIsIGVycik7XG4gICAgfVxuXG4gICAgLy9HZXQgZXZlbnRzIGZyb20gYWxsIGNhbGVuZGFyc1xuICAgIGZvciAobGV0IGNhbGVuZGFyIG9mIHRoaXMucHJvcHMuY2FsZW5kYXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvL3F1ZXJ5IGFwaSBmb3IgZXZlbnRzXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEV2ZW50c0xpc3QoY2FsZW5kYXIuY2FsZW5kYXJJZCk7XG5cbiAgICAgICAgLy9wcm9jZXNzIGV2ZW50c1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5wcm9jZXNzRXZlbnRzKFxuICAgICAgICAgIHJlcy5yZXN1bHQuaXRlbXMsXG4gICAgICAgICAgcmVzLnJlc3VsdC5zdW1tYXJ5LFxuICAgICAgICAgIGNhbGVuZGFyLmNvbG9yID8/IFwiXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9maXggZHVwbGljYXRlIGNhbGVuZGFyc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucHJvY2Vzc2VkQ2FsZW5kYXJzLmluY2x1ZGVzKGNhbGVuZGFyLmNhbGVuZGFySWQpKSB7XG4gICAgICAgICAgLy9zZXQgc3RhdGUgd2l0aCBjYWxjdWxhdGVkIHZhbHVlc1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBbLi4udGhpcy5zdGF0ZS5ldmVudHMsIC4uLmV2ZW50c1swXV0sXG4gICAgICAgICAgICBzaW5nbGVFdmVudHM6IFsuLi50aGlzLnN0YXRlLnNpbmdsZUV2ZW50cywgLi4uZXZlbnRzWzFdXSxcbiAgICAgICAgICAgIHByb2Nlc3NlZENhbGVuZGFyczogW1xuICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnByb2Nlc3NlZENhbGVuZGFycyxcbiAgICAgICAgICAgICAgY2FsZW5kYXIuY2FsZW5kYXJJZCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBldmVudHNcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL2dldCBlYXN5IHRvIHdvcmsgd2l0aCBldmVudHMgYW5kIHNpbmdsZUV2ZW50cyBmcm9tIHJlc3BvbnNlXG4gIHByb2Nlc3NFdmVudHMoaXRlbXM6IGFueVtdLCBjYWxlbmRhck5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IGFueVtdIHtcbiAgICBsZXQgc2luZ2xlRXZlbnRzOiBhbnlbXSA9IFtdO1xuICAgIGxldCBldmVudHM6IGFueVtdID0gW107XG4gICAgbGV0IGNoYW5nZWQ6IGFueVtdID0gW107XG4gICAgbGV0IGNhbmNlbGxlZDogYW55W10gPSBbXTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQub3JpZ2luYWxTdGFydFRpbWUpIHtcbiAgICAgICAgLy9jYW5jZWxsZWQgb3IgY2hhbmdlZCBldmVudHNcbiAgICAgICAgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNhbmNlbGxlZFwiKSB7XG4gICAgICAgICAgLy9jYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgICAgY2FuY2VsbGVkLnB1c2goe1xuICAgICAgICAgICAgcmVjdXJyaW5nRXZlbnRJZDogZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRUaW1lOiBldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zdGF0dXMgPT0gXCJjb25maXJtZWRcIikge1xuICAgICAgICAgIC8vY2hhbmdlZCBldmVudHNcbiAgICAgICAgICBjaGFuZ2VkLnB1c2goe1xuICAgICAgICAgICAgcmVjdXJyaW5nRXZlbnRJZDogZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnN1bW1hcnksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0VGltZTogZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZSksXG4gICAgICAgICAgICBuZXdTdGFydFRpbWU6IGV2ZW50LnN0YXJ0LmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGUpLFxuICAgICAgICAgICAgbmV3RW5kVGltZTogZXZlbnQuZW5kLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJOb3QgY2F0ZWdvcml6ZWQ6IFwiLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc3RhdHVzID09IFwiY29uZmlybWVkXCIpIHtcbiAgICAgICAgLy9ub3JtYWwgZXZlbnRzXG4gICAgICAgIGxldCBuZXdFdmVudCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgbmFtZTogZXZlbnQuc3VtbWFyeSxcbiAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50LnN0YXJ0LmRhdGVUaW1lXG4gICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZVRpbWUpXG4gICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZSksXG4gICAgICAgICAgZW5kVGltZTogZXZlbnQuZW5kLmRhdGVUaW1lXG4gICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGVUaW1lKVxuICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgIHJlY3VycmVuY2U6IGV2ZW50LnJlY3VycmVuY2UsXG4gICAgICAgICAgY2hhbmdlZEV2ZW50czogW10sXG4gICAgICAgICAgY2FuY2VsbGVkRXZlbnRzOiBbXSxcbiAgICAgICAgICBjYWxlbmRhck5hbWU6IGNhbGVuZGFyTmFtZSxcbiAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGlzTXVsdGlFdmVudChuZXdFdmVudC5zdGFydFRpbWUsIG5ld0V2ZW50LmVuZFRpbWUpKSB7XG4gICAgICAgICAgZXZlbnRzLnB1c2gobmV3RXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpbmdsZUV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgY2F0ZWdvcml6ZWQ6IFwiLCBldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2FkZCBjaGFuZ2VkIGV2ZW50cyBhbmQgY2FuY2VsbGVkIGV2ZW50cyB0byBjb3JyZXNwb25kaW5nIGV2ZW50IG9iamVjdFxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIC8vcHVzaCBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBjaGFuZ2VkXG4gICAgICAgICAgLmZpbHRlcigoY2hhbmdlKSA9PiBjaGFuZ2UucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jaGFuZ2VkRXZlbnRzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvL3B1c2ggY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICBjYW5jZWxsZWRcbiAgICAgICAgICAuZmlsdGVyKChjYW5jZWwpID0+IGNhbmNlbC5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjYW5jZWwpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNhbmNlbGxlZEV2ZW50cy5wdXNoKGNhbmNlbC5vcmlnaW5hbFN0YXJ0VGltZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVFdmVudHMuZm9yRWFjaCgoZXZlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICAvL3B1c2ggY2hhbmdlZCBldmVudHNcbiAgICAgICAgY2hhbmdlZFxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5nZSkgPT4gY2hhbmdlLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2hhbmdlZEV2ZW50cy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9wdXNoIGNhbmNlbGxlZCBldmVudHNcbiAgICAgICAgY2FuY2VsbGVkXG4gICAgICAgICAgLmZpbHRlcigoY2FuY2VsKSA9PiBjYW5jZWwucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jYW5jZWxsZWRFdmVudHMucHVzaChjYW5jZWwub3JpZ2luYWxTdGFydFRpbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtldmVudHMsIHNpbmdsZUV2ZW50c107XG4gIH1cblxuICAvL3NldHMgY3VycmVudCBtb250aCB0byBwcmV2aW91cyBtb250aFxuICBsYXN0TW9udGgoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudC5taW51cyh7IG1vbnRoOiAxIH0pIH0pO1xuICB9XG5cbiAgLy9zZXRzIGN1cnJlbnQgbW9udGggdG8gZm9sbG93aW5nIG1vbnRoXG4gIG5leHRNb250aCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LnBsdXMoeyBtb250aDogMSB9KSB9KTtcbiAgfVxuXG4gIGNsZWFyRXZlbnRzKCkge1xuICAgIGxldCBkYXlzSW5Nb250aCA9IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS1cIiArIGkpO1xuICAgICAgd2hpbGUgKG5vZGUubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9yZW5kZXJzIHRoZSBkYXkgb2Ygd2VlayBuYW1lc1xuICByZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRheXMubWFwKCh4LCBpKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRheS1uYW1lXCJcbiAgICAgICAga2V5PXtcImRheS1vZi13ZWVrLVwiICsgaX1cbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAgeyBib3JkZXJDb2xvcjogXCJMaWdodEdyYXlcIiB9LFxuICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSksXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIHt4fVxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gIH1cblxuICAvL3JlbmRlcnMgdGhlIGJsb2NrcyBmb3IgdGhlIGRheXMgb2YgZWFjaCBtb250aFxuICByZW5kZXJEYXRlcyhldmVudHNFYWNoRGF5OiBhbnlbXSk6IGFueVtdIHtcbiAgICBsZXQgY3VycmVudERheXNJbk1vbnRoID0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBsZXQgZGF5cyA9IFsuLi5BcnJheShjdXJyZW50RGF5c0luTW9udGggKyAxKS5rZXlzKCldLnNsaWNlKDEpOyAvLyBjcmVhdGUgYXJyYXkgZnJvbSAxIHRvIG51bWJlciBvZiBkYXlzIGluIG1vbnRoXG4gICAgbGV0IGRheU9mV2VlayA9IHRoaXMuc3RhdGUuY3VycmVudC53ZWVrZGF5OyAvL2dldCBkYXkgb2Ygd2VlayBvZiBmaXJzdCBkYXkgaW4gdGhlIG1vbnRoXG4gICAgbGV0IHBhZERheXMgPVxuICAgICAgKCgoLWN1cnJlbnREYXlzSW5Nb250aCAtIHRoaXMuc3RhdGUuY3VycmVudC53ZWVrZGF5KSAlIDcpICsgNykgJSA3OyAvL251bWJlciBvZiBkYXlzIHRvIGZpbGwgb3V0IHRoZSBsYXN0IHJvd1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIFsuLi5BcnJheShkYXlPZldlZWspXS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAga2V5PXtcImVtcHR5LWRheS1cIiArIGl9XG4gICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApKSxcbiAgICAgIGRheXMubWFwKCh4KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB4ID09IHRoaXMuc3RhdGUudG9kYXkuZGF5ICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Lmhhc1NhbWUodGhpcy5zdGF0ZS50b2RheSwgXCJtb250aFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgICAgICBrZXk9e1wiZGF5LVwiICsgeH1cbiAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KSxcbiAgICAgICAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b2RheVwiLCB7fSksXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEYXlcIiBpZD17XCJkYXktXCIgKyB4fT5cbiAgICAgICAgICAgICAgICB7ZXZlbnRzRWFjaERheVt4IC0gMV19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgICAgICBrZXk9e1wiZGF5LVwiICsgeH1cbiAgICAgICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGF5XCIgaWQ9e1wiZGF5LVwiICsgeH0+XG4gICAgICAgICAgICAgICAge2V2ZW50c0VhY2hEYXlbeCAtIDFdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgWy4uLkFycmF5KHBhZERheXMpXS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAga2V5PXtcImVtcHR5LWRheS0yLVwiICsgaX1cbiAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICkpLFxuICAgIF07XG4gIH1cblxuICAvL2dldCBhcnJheSBvZiBhcnJheXMgb2YgbGVuZ3RoIGRheXMgaW4gbW9udGggY29udGFpbmluZyB0aGUgZXZlbnRzIGluIGVhY2ggZGF5XG4gIGdldFJlbmRlckV2ZW50cyhldmVudHM6IGFueVtdLCBzaW5nbGVFdmVudHM6IGFueVtdKSB7XG4gICAgbGV0IGV2ZW50c0VhY2hEYXkgPSBbLi4uQXJyYXkodGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwKV0ubWFwKFxuICAgICAgKGUpID0+IFtdLFxuICAgICk7IC8vY3JlYXRlIGFycmF5IG9mIGVtcHR5IGFycmF5cyBvZiBsZW5ndGggZGF5c0luTW9udGhcbiAgICBsZXQgZXZlbnRzVG9SZW5kZXI6IEV2ZW50UHJvcHNbXSA9IFtdO1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9fZGF0ZXRpbWUoZXZlbnQuZW5kVGltZSkuZGlmZihcbiAgICAgICAgICB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLFxuICAgICAgICApO1xuICAgICAgICBsZXQgZGF0ZXMgPSBDYWxlbmRhci5nZXREYXRlc0Zyb21SUnVsZShcbiAgICAgICAgICBldmVudC5yZWN1cnJlbmNlWzBdLFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQubWludXMoZHVyYXRpb24pLFxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5wbHVzKHsgbW9udGg6IDEgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZW5kZXIgcmVjdXJyZW5jZXNcbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgIC8vZG9uJ3QgcmVuZGVyIGlmIGl0IGlzIGNhbmNlbGxlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbGxlZEV2ZW50cy5zb21lKChjYW5jZWxsZWRNb21lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgY2FuY2VsbGVkTW9tZW50Lmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHByb3BzOiBFdmVudFByb3BzO1xuICAgICAgICAgIC8vdXBkYXRlIGluZm9ybWF0aW9uIGlmIGV2ZW50IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgY29uc3QgY2hhbmdlZEV2ZW50ID0gZXZlbnQuY2hhbmdlZEV2ZW50cy5maW5kKChjaGFuZ2VkRXZlbnQ6IGFueSkgPT5cbiAgICAgICAgICAgIGNoYW5nZWRFdmVudC5vcmlnaW5hbFN0YXJ0VGltZS5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGNoYW5nZWRFdmVudCkge1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGNoYW5nZWRFdmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGNoYW5nZWRFdmVudC5uZXdTdGFydFRpbWUsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGNoYW5nZWRFdmVudC5uZXdFbmRUaW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbmdlZEV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogY2hhbmdlZEV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV2ZW50U3RhcnQgPSBEYXRlVGltZS5mcm9tTWlsbGlzKGRhdGUuZ2V0VGltZSgpLCB7XG4gICAgICAgICAgICAgIHpvbmU6IFwidXRjXCIsXG4gICAgICAgICAgICB9KTsgLy9zaW5jZSBycnVsZSB3b3JrcyB3aXRoIHV0YyB0aW1lc1xuICAgICAgICAgICAgbGV0IGV2ZW50RW5kID0gZXZlbnRTdGFydC5wbHVzKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50U3RhcnQsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGV2ZW50RW5kLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50c1RvUmVuZGVyLnB1c2gocHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vcmVuZGVyIGV2ZW50XG4gICAgICAgIC8vY2hlY2sgaWYgZXZlbnQgaXMgaW4gcmFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoZXZlbnQuc3RhcnRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCB8fFxuICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXIpICYmXG4gICAgICAgICAgICBldmVudC5lbmRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCkgfHxcbiAgICAgICAgICBldmVudC5lbmRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50c1RvUmVuZGVyLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnRzVG9SZW5kZXIgPSBldmVudHNUb1JlbmRlci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzICE9IDApIHtcbiAgICAgICAgcmV0dXJuIGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiLmVuZFRpbWUuZGlmZihhLmVuZFRpbWUpLm1pbGxpc2Vjb25kcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50c1RvUmVuZGVyLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXdNdWx0aUV2ZW50KGV2ZW50c0VhY2hEYXksIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGxldCBldmVudFByb3BzID0ge1xuICAgICAgdG9vbHRpcFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9vbHRpcFwiLCB7fSksIC8vZ2V0cyB0aGlzLnByb3BzLnN0eWxlcy50b29sdGlwIGlmIGV4aXN0cywgZWxzZSBlbXB0eSBvYmplY3RcbiAgICAgIGV2ZW50U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudFwiLCB7fSksXG4gICAgICBldmVudENpcmNsZVN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRDaXJjbGVcIiwge30pLFxuICAgICAgZXZlbnRUZXh0U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudFRleHRcIiwge30pLFxuICAgIH07XG5cbiAgICBsZXQgc2luZ2xlRXZlbnRzVG9SZW5kZXI6IEV2ZW50UHJvcHNbXSA9IFtdO1xuICAgIHNpbmdsZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9fZGF0ZXRpbWUoZXZlbnQuZW5kVGltZSkuZGlmZihcbiAgICAgICAgICB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vZ2V0IHJlY3VycmVuY2VzIHVzaW5nIFJSdWxlXG4gICAgICAgIGxldCBkYXRlcyA9IENhbGVuZGFyLmdldERhdGVzRnJvbVJSdWxlKFxuICAgICAgICAgIGV2ZW50LnJlY3VycmVuY2VbMF0sXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLFxuICAgICAgICAgIHRvX2RhdGV0aW1lKHRoaXMuc3RhdGUuY3VycmVudCksXG4gICAgICAgICAgdG9fZGF0ZXRpbWUodGhpcy5zdGF0ZS5jdXJyZW50KS5wbHVzKHsgbW9udGg6IDEgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZW5kZXIgcmVjdXJyZW5jZXNcbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgIC8vY2hlY2sgaWYgaXQgaXMgaW4gY2FuY2VsbGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQuY2FuY2VsbGVkRXZlbnRzLnNvbWUoKGNhbmNlbGxlZE1vbWVudDogYW55KSA9PlxuICAgICAgICAgICAgICBjYW5jZWxsZWRNb21lbnQuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2lmIGV2ZW50IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgY29uc3QgY2hhbmdlZEV2ZW50ID0gZXZlbnQuY2hhbmdlZEV2ZW50cy5maW5kKChjaGFuZ2VkRXZlbnQ6IGFueSkgPT5cbiAgICAgICAgICAgIGNoYW5nZWRFdmVudC5vcmlnaW5hbFN0YXJ0VGltZS5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IHByb3BzOiBFdmVudFByb3BzO1xuICAgICAgICAgIGlmIChjaGFuZ2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBjaGFuZ2VkRXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3U3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3RW5kVGltZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5nZWRFdmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGNoYW5nZWRFdmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudFN0YXJ0ID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhkYXRlLmdldFRpbWUoKSwge1xuICAgICAgICAgICAgICB6b25lOiBcInV0Y1wiLFxuICAgICAgICAgICAgfSk7IC8vYXZvaWQgYmFkIHRpbWV6b25lIGNvbnZlcnNpb25zXG4gICAgICAgICAgICBsZXQgZXZlbnRFbmQgPSBldmVudFN0YXJ0LnBsdXMoZHVyYXRpb24pO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnRTdGFydCxcbiAgICAgICAgICAgICAgZW5kVGltZTogZXZlbnRFbmQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5wdXNoKHByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NoZWNrIGlmIGV2ZW50IGlzIGluIGN1cnJlbnQgbW9udGhcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggfHxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhclxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzaW5nbGVFdmVudHNUb1JlbmRlciA9IHNpbmdsZUV2ZW50c1RvUmVuZGVyLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzLFxuICAgICk7XG4gICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyU2luZ2xlRXZlbnQoZXZlbnRzRWFjaERheSwgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKS5kYXksIHtcbiAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgIC4uLmV2ZW50UHJvcHMsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudHNFYWNoRGF5O1xuICB9XG5cbiAgLy9UT0RPOiByZWZhY3RvclxuICAvL2RlY2lkZXMgaG93IHRvIHJlbmRlciBldmVudHNcbiAgZHJhd011bHRpRXZlbnQoZXZlbnRzRWFjaERheTogYW55W10sIHByb3BzOiBNdWx0aUV2ZW50UHJvcHMpIHtcbiAgICBsZXQgc3RhcnREcmF3RGF0ZTtcbiAgICBsZXQgYmxvY2tMZW5ndGggPSAxO1xuICAgIGxldCBjdXJEYXRlOiBEYXRlVGltZTtcbiAgICBsZXQgZW5kRGF0ZTogRGF0ZVRpbWU7XG5cbiAgICBsZXQgYXJyb3dMZWZ0ID0gZmFsc2U7XG4gICAgbGV0IGFycm93UmlnaHQgPSBmYWxzZTtcblxuICAgIGlmIChwcm9wcy5lbmRUaW1lLmhhc1NhbWUocHJvcHMuZW5kVGltZS5zdGFydE9mKFwiZGF5XCIpLCBcInNlY29uZFwiKSkge1xuICAgICAgZW5kRGF0ZSA9IHByb3BzLmVuZFRpbWVcbiAgICAgICAgLnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pXG4gICAgICAgIC5taW51cyh7IGRheTogMSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kRGF0ZSA9IHRvX2RhdGV0aW1lKHByb3BzLmVuZFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwge1xuICAgICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdG9fZGF0ZXRpbWUocHJvcHMuc3RhcnRUaW1lKS5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KSA8XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBcnJvdykge1xuICAgICAgICBhcnJvd0xlZnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzdGFydERyYXdEYXRlID0gMTtcbiAgICAgIGN1ckRhdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0RHJhd0RhdGUgPSBwcm9wcy5zdGFydFRpbWUuZGF5O1xuICAgICAgY3VyRGF0ZSA9IHRvX2RhdGV0aW1lKHByb3BzLnN0YXJ0VGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7XG4gICAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY3VyRGF0ZS5zdGFydE9mKFwiZGF5XCIpIDw9IGVuZERhdGUuc3RhcnRPZihcImRheVwiKSkge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJEYXRlLmRheSA9PSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggJiZcbiAgICAgICAgIWVuZERhdGUuaGFzU2FtZSh0aGlzLnN0YXRlLmN1cnJlbnQsIFwibW9udGhcIilcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QXJyb3cpIHtcbiAgICAgICAgICBhcnJvd1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZHJhdyB0aGVuIHF1aXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgY3VyRGF0ZS5kYXkgPT0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoIHx8XG4gICAgICAgIGN1ckRhdGUuaGFzU2FtZShlbmREYXRlLCBcImRheVwiKVxuICAgICAgKSB7XG4gICAgICAgIC8vZHJhdyB0aGVuIHF1aXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjdXJEYXRlLndlZWtkYXkgPT0gNikge1xuICAgICAgICAvL2RyYXcgdGhlbiByZXNldFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0RHJhd0RhdGUgPSBjdXJEYXRlLnBsdXMoeyBkYXk6IDEgfSkuZGF5O1xuICAgICAgICBibG9ja0xlbmd0aCA9IDA7XG4gICAgICAgIGFycm93TGVmdCA9IGZhbHNlO1xuICAgICAgICBhcnJvd1JpZ2h0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGJsb2NrTGVuZ3RoKys7XG4gICAgICBjdXJEYXRlID0gY3VyRGF0ZS5wbHVzKHsgZGF5OiAxIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vVE9ETzogcmVmYWN0b3IgdGhpcyB0b28/XG4gIC8vaGFuZGxlcyByZW5kZXJpbmcgYW5kIHByb3BlciBzdGFja2luZyBvZiBpbmRpdmlkdWFsIGJsb2Nrc1xuICByZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgZXZlbnRzRWFjaERheTogYW55W10sXG4gICAgc3RhcnREYXRlOiBhbnksXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgcHJvcHM6IGFueSxcbiAgICBhcnJvd0xlZnQ6IGJvb2xlYW4sXG4gICAgYXJyb3dSaWdodDogYm9vbGVhbixcbiAgKSB7XG4gICAgbGV0IG11bHRpRXZlbnRQcm9wcyA9IHtcbiAgICAgIHRvb2x0aXBTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvb2x0aXBcIiwge30pLCAvL2dldHMgdGhpcy5wcm9wcy5zdHlsZXMudG9vbHRpcCBpZiBleGlzdHMsIGVsc2UgZW1wdHkgb2JqZWN0XG4gICAgICBtdWx0aUV2ZW50U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJtdWx0aUV2ZW50XCIsIHt9KSxcbiAgICB9O1xuXG4gICAgbGV0IG1heEJsb2NrcyA9IDA7XG4gICAgbGV0IGNsb3NlZFNsb3RzOiBhbnlbXSA9IFtdOyAvL2tlZXAgdHJhY2sgb2Ygcm93cyB0aGF0IHRoZSBldmVudCBjYW4ndCBiZSBpbnNlcnRlZCBpbnRvXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF5RXZlbnRzID0gZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV07XG4gICAgICBpZiAoZGF5RXZlbnRzLmxlbmd0aCA+IG1heEJsb2Nrcykge1xuICAgICAgICBtYXhCbG9ja3MgPSBkYXlFdmVudHMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICAvL2FkZHJlc3Mgcm93cyB0aGF0IGFyZSBub3QgdGhlIGxhc3QgZWxlbWVudCBpbiBjbG9zZWRTbG90c1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhCbG9ja3M7IGorKykge1xuICAgICAgICBpZiAoaiA+IGRheUV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChjbG9zZWRTbG90cy5pbmNsdWRlcyhqKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXlFdmVudHNbal0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXNFdmVudFwiKSkge1xuICAgICAgICAgIGNsb3NlZFNsb3RzLnB1c2goaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hvc2VuUm93ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4QmxvY2tzOyBpKyspIHtcbiAgICAgIGlmICghY2xvc2VkU2xvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgY2hvc2VuUm93ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9maWxsIGluIHBsYWNlaG9sZGVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vcGxhY2Vob2xkZXJzXG4gICAgICB3aGlsZSAoZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV0ubGVuZ3RoIDw9IGNob3NlblJvdykge1xuICAgICAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXS5wdXNoKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50IGJlbG93IHBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGtleT17YHBsYWNlaG9sZGVyLSR7Z3VkKCl9YH1cbiAgICAgICAgICA+PC9kaXY+LFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvL3Jlc3Qgb2YgZXZlbnQgdGhhdCBpcyB1bmRlciB0aGUgbWFpbiBiYW5uZXJcbiAgICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldW2Nob3NlblJvd10gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudCBldmVudCBiZWxvd1wiIGtleT17YGZpbGxlci0ke2d1ZCgpfWB9PjwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL3JlbmRlciBldmVudFxuICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMV1bY2hvc2VuUm93XSA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YG11bHRpLWV2ZW50LSR7Y2hvc2VuUm93fWB9PlxuICAgICAgICA8TXVsdGlFdmVudFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB7Li4ubXVsdGlFdmVudFByb3BzfVxuICAgICAgICAgIGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGFycm93TGVmdD17YXJyb3dMZWZ0fVxuICAgICAgICAgIGFycm93UmlnaHQ9e2Fycm93UmlnaHR9XG4gICAgICAgICAga2V5PXtgbXVsdGktZXZlbnQtJHtndWQoKX1gfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vYXR0ZW1wdHMgdG8gcmVuZGVyIGluIGEgcGxhY2Vob2xkZXIgdGhlbiBhdCB0aGUgZW5kXG4gIHJlbmRlclNpbmdsZUV2ZW50KGV2ZW50c0VhY2hEYXk6IGFueVtdLCBkYXRlOiBudW1iZXIsIGV2ZW50OiBFdmVudFByb3BzKSB7XG4gICAgbGV0IGZvdW5kRW1wdHkgPSBmYWxzZTtcbiAgICBsZXQgbm9kZXMgPSBldmVudHNFYWNoRGF5W2RhdGUgLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5vZGVzW2ldLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImV2ZW50XCIpICYmXG4gICAgICAgICFub2Rlc1tpXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJpc0V2ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgLy90YXJnZXQgb25seSBwbGFjZWhvbGRlcnNcbiAgICAgICAgbm9kZXNbaV0gPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0+XG4gICAgICAgICAgICA8RXZlbnQgey4uLmV2ZW50fSBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBmb3VuZEVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRFbXB0eSkge1xuICAgICAgZXZlbnRzRWFjaERheVtkYXRlIC0gMV0ucHVzaChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0+XG4gICAgICAgICAgPEV2ZW50IHsuLi5ldmVudH0ga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0gLz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvL2dldCBkYXRlcyBiYXNlZCBvbiBycnVsZSBzdHJpbmcgYmV0d2VlbiBkYXRlc1xuICBzdGF0aWMgZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgc3RyOiBzdHJpbmcsXG4gICAgZXZlbnRTdGFydDogRGF0ZVRpbWUsXG4gICAgYmV0d2VlblN0YXJ0OiBEYXRlVGltZSxcbiAgICBiZXR3ZWVuRW5kOiBEYXRlVGltZSxcbiAgKSB7XG4gICAgLy9nZXQgcmVjdXJyZW5jZXMgdXNpbmcgUlJ1bGVcbiAgICBsZXQgcnN0ciA9IGBEVFNUQVJUOiR7ZXZlbnRTdGFydC5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS50b0Zvcm1hdChcInl5eXlNTWRkJ1QnSEhtbXNzXCIpfVpcXG4ke3N0cn1gO1xuICAgIGxldCBycnVsZVNldCA9IHJydWxlc3RyKHJzdHIsIHsgZm9yY2VzZXQ6IHRydWUgfSk7XG5cbiAgICAvL2dldCBkYXRlc1xuICAgIGxldCBiZWdpbiA9IGJldHdlZW5TdGFydC50b1VUQygpLnRvSlNEYXRlKCk7XG4gICAgbGV0IGVuZCA9IGJldHdlZW5FbmQudG9VVEMoKS50b0pTRGF0ZSgpO1xuICAgIGxldCBkYXRlcyA9IHJydWxlU2V0LmJldHdlZW4oYmVnaW4sIGVuZCk7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBldmVudHNFYWNoRGF5ID0gdGhpcy5nZXRSZW5kZXJFdmVudHMoXG4gICAgICB0aGlzLnN0YXRlLmV2ZW50cyxcbiAgICAgIHRoaXMuc3RhdGUuc2luZ2xlRXZlbnRzLFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIlxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIkxpZ2h0R3JheVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzUxNTY1ZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiY2FsZW5kYXJcIiwge30pLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyLW5hdmlnYXRlIHVuc2VsZWN0YWJsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxhc3RNb250aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzEwMDk0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FsZW5kYXItdGl0bGVcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubW9udGhOYW1lc1t0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggLSAxXSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC55ZWFyfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhci1uYXZpZ2F0ZSB1bnNlbGVjdGFibGVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxMDA5NTtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItYm9keVwiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckRheXMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXRlcyhldmVudHNFYWNoRGF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dGb290ZXIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGwgdGltZXMgc2hvd24geW91ciB0aW1lem9uZSAoe3RoaXMuc3RhdGUudXNlclRpbWV6b25lLm5hbWV9KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL3I/Y2lkPVwiICtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsZW5kYXJzWzBdLmNhbGVuZGFySWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmIzQzOyBBZGQgQ2FsZW5kYXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: zt
}, xx = process.env.NODE_ENV === "production" ? {
  name: "sgs7ru",
  styles: "padding-right:6px"
} : {
  name: "csro95-Calendar",
  styles: "padding-right:6px;label:Calendar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1NnQiIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJydWxlc3RyIH0gZnJvbSBcInJydWxlXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGd1ZCBmcm9tIFwiZ3VkXCI7XG5cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IExhbmd1YWdlcywgYXZhaWxhYmxlTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgTXVsdGlFdmVudCBmcm9tIFwiLi9tdWx0aUV2ZW50XCI7XG5pbXBvcnQgeyBDYWxlbmRhclByb3BzLCBDYWxlbmRhclN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEV2ZW50UHJvcHMgfSBmcm9tIFwiLi90eXBlcy9ldmVudFwiO1xuaW1wb3J0IHsgTXVsdGlFdmVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgZ2V0RXZlbnRzTGlzdCwgbG9hZENhbGVuZGFyQVBJIH0gZnJvbSBcIi4vdXRpbHMvZ29vZ2xlQ2FsZW5kYXJBUElcIjtcbmltcG9ydCB7IGlzTXVsdGlFdmVudCwgdG9fZGF0ZXRpbWUgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIENhbGVuZGFyUHJvcHMsXG4gIENhbGVuZGFyU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FsZW5kYXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9udGhOYW1lczogWy4uLkxhbmd1YWdlcy5FTi5NT05USFNdLFxuICAgICAgZGF5czogWy4uLkxhbmd1YWdlcy5FTi5EQVlTXSxcbiAgICAgIHRvZGF5OiBEYXRlVGltZS5ub3coKSxcbiAgICAgIGN1cnJlbnQ6IERhdGVUaW1lLnV0YygpLnN0YXJ0T2YoXCJtb250aFwiKSwgLy9jdXJyZW50IHBvc2l0aW9uIG9uIGNhbGVuZGFyIChmaXJzdCBkYXkgb2YgbW9udGgpXG4gICAgICBjYWxlbmRhcnM6IFtdLFxuICAgICAgZXZlbnRzOiBbXSwgLy9hbGwgZGF5IG9yIG11bHRpIGRheSBldmVudHNcbiAgICAgIHNpbmdsZUV2ZW50czogW10sIC8vc2luZ2xlIGRheSBldmVudHNcbiAgICAgIHVzZXJUaW1lem9uZTogRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiBcInN5c3RlbVwiIH0pLnpvbmUsXG4gICAgICBzaG93Rm9vdGVyOiBwcm9wcy5zaG93Rm9vdGVyIHx8IHRydWUsXG4gICAgICBzaG93QXJyb3c6IHByb3BzLnNob3dBcnJvdyB8fCB0cnVlLFxuICAgICAgcHJvY2Vzc2VkQ2FsZW5kYXJzOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5sYXN0TW9udGggPSB0aGlzLmxhc3RNb250aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dE1vbnRoID0gdGhpcy5uZXh0TW9udGguYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMubGFuZ3VhZ2UgJiZcbiAgICAgIGF2YWlsYWJsZUxhbmd1YWdlcy5pbmNsdWRlcyh0aGlzLnByb3BzLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkpXG4gICAgKSB7XG4gICAgICAvLyB0cnkgdG8gY2hhbmdlIGxhbmd1YWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5wcm9wcy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBtb250aE5hbWVzOiBbLi4uTGFuZ3VhZ2VzW2xhbmddLk1PTlRIU10sXG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgZGF5czogWy4uLkxhbmd1YWdlc1tsYW5nXS5EQVlTXSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNob29zaW5nIGEgbmV3IGxhbmd1YWdlXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vaW5pdCBhbmQgbG9hZCBnb29nbGUgY2FsZW5kYXIgYXBpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWRDYWxlbmRhckFQSSh0aGlzLnByb3BzLmFwaUtleSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBHQVBJIGNsaWVudCBmb3IgQVBJXCIsIGVycik7XG4gICAgfVxuXG4gICAgLy9HZXQgZXZlbnRzIGZyb20gYWxsIGNhbGVuZGFyc1xuICAgIGZvciAobGV0IGNhbGVuZGFyIG9mIHRoaXMucHJvcHMuY2FsZW5kYXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvL3F1ZXJ5IGFwaSBmb3IgZXZlbnRzXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEV2ZW50c0xpc3QoY2FsZW5kYXIuY2FsZW5kYXJJZCk7XG5cbiAgICAgICAgLy9wcm9jZXNzIGV2ZW50c1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5wcm9jZXNzRXZlbnRzKFxuICAgICAgICAgIHJlcy5yZXN1bHQuaXRlbXMsXG4gICAgICAgICAgcmVzLnJlc3VsdC5zdW1tYXJ5LFxuICAgICAgICAgIGNhbGVuZGFyLmNvbG9yID8/IFwiXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9maXggZHVwbGljYXRlIGNhbGVuZGFyc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucHJvY2Vzc2VkQ2FsZW5kYXJzLmluY2x1ZGVzKGNhbGVuZGFyLmNhbGVuZGFySWQpKSB7XG4gICAgICAgICAgLy9zZXQgc3RhdGUgd2l0aCBjYWxjdWxhdGVkIHZhbHVlc1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBbLi4udGhpcy5zdGF0ZS5ldmVudHMsIC4uLmV2ZW50c1swXV0sXG4gICAgICAgICAgICBzaW5nbGVFdmVudHM6IFsuLi50aGlzLnN0YXRlLnNpbmdsZUV2ZW50cywgLi4uZXZlbnRzWzFdXSxcbiAgICAgICAgICAgIHByb2Nlc3NlZENhbGVuZGFyczogW1xuICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnByb2Nlc3NlZENhbGVuZGFycyxcbiAgICAgICAgICAgICAgY2FsZW5kYXIuY2FsZW5kYXJJZCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBldmVudHNcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL2dldCBlYXN5IHRvIHdvcmsgd2l0aCBldmVudHMgYW5kIHNpbmdsZUV2ZW50cyBmcm9tIHJlc3BvbnNlXG4gIHByb2Nlc3NFdmVudHMoaXRlbXM6IGFueVtdLCBjYWxlbmRhck5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IGFueVtdIHtcbiAgICBsZXQgc2luZ2xlRXZlbnRzOiBhbnlbXSA9IFtdO1xuICAgIGxldCBldmVudHM6IGFueVtdID0gW107XG4gICAgbGV0IGNoYW5nZWQ6IGFueVtdID0gW107XG4gICAgbGV0IGNhbmNlbGxlZDogYW55W10gPSBbXTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQub3JpZ2luYWxTdGFydFRpbWUpIHtcbiAgICAgICAgLy9jYW5jZWxsZWQgb3IgY2hhbmdlZCBldmVudHNcbiAgICAgICAgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNhbmNlbGxlZFwiKSB7XG4gICAgICAgICAgLy9jYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgICAgY2FuY2VsbGVkLnB1c2goe1xuICAgICAgICAgICAgcmVjdXJyaW5nRXZlbnRJZDogZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRUaW1lOiBldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zdGF0dXMgPT0gXCJjb25maXJtZWRcIikge1xuICAgICAgICAgIC8vY2hhbmdlZCBldmVudHNcbiAgICAgICAgICBjaGFuZ2VkLnB1c2goe1xuICAgICAgICAgICAgcmVjdXJyaW5nRXZlbnRJZDogZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnN1bW1hcnksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0VGltZTogZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZSksXG4gICAgICAgICAgICBuZXdTdGFydFRpbWU6IGV2ZW50LnN0YXJ0LmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGUpLFxuICAgICAgICAgICAgbmV3RW5kVGltZTogZXZlbnQuZW5kLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJOb3QgY2F0ZWdvcml6ZWQ6IFwiLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc3RhdHVzID09IFwiY29uZmlybWVkXCIpIHtcbiAgICAgICAgLy9ub3JtYWwgZXZlbnRzXG4gICAgICAgIGxldCBuZXdFdmVudCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgbmFtZTogZXZlbnQuc3VtbWFyeSxcbiAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50LnN0YXJ0LmRhdGVUaW1lXG4gICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZVRpbWUpXG4gICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZSksXG4gICAgICAgICAgZW5kVGltZTogZXZlbnQuZW5kLmRhdGVUaW1lXG4gICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGVUaW1lKVxuICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgIHJlY3VycmVuY2U6IGV2ZW50LnJlY3VycmVuY2UsXG4gICAgICAgICAgY2hhbmdlZEV2ZW50czogW10sXG4gICAgICAgICAgY2FuY2VsbGVkRXZlbnRzOiBbXSxcbiAgICAgICAgICBjYWxlbmRhck5hbWU6IGNhbGVuZGFyTmFtZSxcbiAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGlzTXVsdGlFdmVudChuZXdFdmVudC5zdGFydFRpbWUsIG5ld0V2ZW50LmVuZFRpbWUpKSB7XG4gICAgICAgICAgZXZlbnRzLnB1c2gobmV3RXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpbmdsZUV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgY2F0ZWdvcml6ZWQ6IFwiLCBldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2FkZCBjaGFuZ2VkIGV2ZW50cyBhbmQgY2FuY2VsbGVkIGV2ZW50cyB0byBjb3JyZXNwb25kaW5nIGV2ZW50IG9iamVjdFxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIC8vcHVzaCBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBjaGFuZ2VkXG4gICAgICAgICAgLmZpbHRlcigoY2hhbmdlKSA9PiBjaGFuZ2UucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jaGFuZ2VkRXZlbnRzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvL3B1c2ggY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICBjYW5jZWxsZWRcbiAgICAgICAgICAuZmlsdGVyKChjYW5jZWwpID0+IGNhbmNlbC5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjYW5jZWwpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNhbmNlbGxlZEV2ZW50cy5wdXNoKGNhbmNlbC5vcmlnaW5hbFN0YXJ0VGltZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVFdmVudHMuZm9yRWFjaCgoZXZlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICAvL3B1c2ggY2hhbmdlZCBldmVudHNcbiAgICAgICAgY2hhbmdlZFxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5nZSkgPT4gY2hhbmdlLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2hhbmdlZEV2ZW50cy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9wdXNoIGNhbmNlbGxlZCBldmVudHNcbiAgICAgICAgY2FuY2VsbGVkXG4gICAgICAgICAgLmZpbHRlcigoY2FuY2VsKSA9PiBjYW5jZWwucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jYW5jZWxsZWRFdmVudHMucHVzaChjYW5jZWwub3JpZ2luYWxTdGFydFRpbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtldmVudHMsIHNpbmdsZUV2ZW50c107XG4gIH1cblxuICAvL3NldHMgY3VycmVudCBtb250aCB0byBwcmV2aW91cyBtb250aFxuICBsYXN0TW9udGgoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudC5taW51cyh7IG1vbnRoOiAxIH0pIH0pO1xuICB9XG5cbiAgLy9zZXRzIGN1cnJlbnQgbW9udGggdG8gZm9sbG93aW5nIG1vbnRoXG4gIG5leHRNb250aCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LnBsdXMoeyBtb250aDogMSB9KSB9KTtcbiAgfVxuXG4gIGNsZWFyRXZlbnRzKCkge1xuICAgIGxldCBkYXlzSW5Nb250aCA9IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS1cIiArIGkpO1xuICAgICAgd2hpbGUgKG5vZGUubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9yZW5kZXJzIHRoZSBkYXkgb2Ygd2VlayBuYW1lc1xuICByZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRheXMubWFwKCh4LCBpKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRheS1uYW1lXCJcbiAgICAgICAga2V5PXtcImRheS1vZi13ZWVrLVwiICsgaX1cbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAgeyBib3JkZXJDb2xvcjogXCJMaWdodEdyYXlcIiB9LFxuICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSksXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIHt4fVxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gIH1cblxuICAvL3JlbmRlcnMgdGhlIGJsb2NrcyBmb3IgdGhlIGRheXMgb2YgZWFjaCBtb250aFxuICByZW5kZXJEYXRlcyhldmVudHNFYWNoRGF5OiBhbnlbXSk6IGFueVtdIHtcbiAgICBsZXQgY3VycmVudERheXNJbk1vbnRoID0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBsZXQgZGF5cyA9IFsuLi5BcnJheShjdXJyZW50RGF5c0luTW9udGggKyAxKS5rZXlzKCldLnNsaWNlKDEpOyAvLyBjcmVhdGUgYXJyYXkgZnJvbSAxIHRvIG51bWJlciBvZiBkYXlzIGluIG1vbnRoXG4gICAgbGV0IGRheU9mV2VlayA9IHRoaXMuc3RhdGUuY3VycmVudC53ZWVrZGF5OyAvL2dldCBkYXkgb2Ygd2VlayBvZiBmaXJzdCBkYXkgaW4gdGhlIG1vbnRoXG4gICAgbGV0IHBhZERheXMgPVxuICAgICAgKCgoLWN1cnJlbnREYXlzSW5Nb250aCAtIHRoaXMuc3RhdGUuY3VycmVudC53ZWVrZGF5KSAlIDcpICsgNykgJSA3OyAvL251bWJlciBvZiBkYXlzIHRvIGZpbGwgb3V0IHRoZSBsYXN0IHJvd1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIFsuLi5BcnJheShkYXlPZldlZWspXS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAga2V5PXtcImVtcHR5LWRheS1cIiArIGl9XG4gICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApKSxcbiAgICAgIGRheXMubWFwKCh4KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB4ID09IHRoaXMuc3RhdGUudG9kYXkuZGF5ICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Lmhhc1NhbWUodGhpcy5zdGF0ZS50b2RheSwgXCJtb250aFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgICAgICBrZXk9e1wiZGF5LVwiICsgeH1cbiAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KSxcbiAgICAgICAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b2RheVwiLCB7fSksXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEYXlcIiBpZD17XCJkYXktXCIgKyB4fT5cbiAgICAgICAgICAgICAgICB7ZXZlbnRzRWFjaERheVt4IC0gMV19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgICAgICBrZXk9e1wiZGF5LVwiICsgeH1cbiAgICAgICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGF5XCIgaWQ9e1wiZGF5LVwiICsgeH0+XG4gICAgICAgICAgICAgICAge2V2ZW50c0VhY2hEYXlbeCAtIDFdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgWy4uLkFycmF5KHBhZERheXMpXS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAga2V5PXtcImVtcHR5LWRheS0yLVwiICsgaX1cbiAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICkpLFxuICAgIF07XG4gIH1cblxuICAvL2dldCBhcnJheSBvZiBhcnJheXMgb2YgbGVuZ3RoIGRheXMgaW4gbW9udGggY29udGFpbmluZyB0aGUgZXZlbnRzIGluIGVhY2ggZGF5XG4gIGdldFJlbmRlckV2ZW50cyhldmVudHM6IGFueVtdLCBzaW5nbGVFdmVudHM6IGFueVtdKSB7XG4gICAgbGV0IGV2ZW50c0VhY2hEYXkgPSBbLi4uQXJyYXkodGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwKV0ubWFwKFxuICAgICAgKGUpID0+IFtdLFxuICAgICk7IC8vY3JlYXRlIGFycmF5IG9mIGVtcHR5IGFycmF5cyBvZiBsZW5ndGggZGF5c0luTW9udGhcbiAgICBsZXQgZXZlbnRzVG9SZW5kZXI6IEV2ZW50UHJvcHNbXSA9IFtdO1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9fZGF0ZXRpbWUoZXZlbnQuZW5kVGltZSkuZGlmZihcbiAgICAgICAgICB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLFxuICAgICAgICApO1xuICAgICAgICBsZXQgZGF0ZXMgPSBDYWxlbmRhci5nZXREYXRlc0Zyb21SUnVsZShcbiAgICAgICAgICBldmVudC5yZWN1cnJlbmNlWzBdLFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQubWludXMoZHVyYXRpb24pLFxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5wbHVzKHsgbW9udGg6IDEgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZW5kZXIgcmVjdXJyZW5jZXNcbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgIC8vZG9uJ3QgcmVuZGVyIGlmIGl0IGlzIGNhbmNlbGxlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbGxlZEV2ZW50cy5zb21lKChjYW5jZWxsZWRNb21lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgY2FuY2VsbGVkTW9tZW50Lmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHByb3BzOiBFdmVudFByb3BzO1xuICAgICAgICAgIC8vdXBkYXRlIGluZm9ybWF0aW9uIGlmIGV2ZW50IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgY29uc3QgY2hhbmdlZEV2ZW50ID0gZXZlbnQuY2hhbmdlZEV2ZW50cy5maW5kKChjaGFuZ2VkRXZlbnQ6IGFueSkgPT5cbiAgICAgICAgICAgIGNoYW5nZWRFdmVudC5vcmlnaW5hbFN0YXJ0VGltZS5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGNoYW5nZWRFdmVudCkge1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGNoYW5nZWRFdmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGNoYW5nZWRFdmVudC5uZXdTdGFydFRpbWUsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGNoYW5nZWRFdmVudC5uZXdFbmRUaW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbmdlZEV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogY2hhbmdlZEV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV2ZW50U3RhcnQgPSBEYXRlVGltZS5mcm9tTWlsbGlzKGRhdGUuZ2V0VGltZSgpLCB7XG4gICAgICAgICAgICAgIHpvbmU6IFwidXRjXCIsXG4gICAgICAgICAgICB9KTsgLy9zaW5jZSBycnVsZSB3b3JrcyB3aXRoIHV0YyB0aW1lc1xuICAgICAgICAgICAgbGV0IGV2ZW50RW5kID0gZXZlbnRTdGFydC5wbHVzKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50U3RhcnQsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGV2ZW50RW5kLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50c1RvUmVuZGVyLnB1c2gocHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vcmVuZGVyIGV2ZW50XG4gICAgICAgIC8vY2hlY2sgaWYgZXZlbnQgaXMgaW4gcmFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoZXZlbnQuc3RhcnRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCB8fFxuICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXIpICYmXG4gICAgICAgICAgICBldmVudC5lbmRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCkgfHxcbiAgICAgICAgICBldmVudC5lbmRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50c1RvUmVuZGVyLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnRzVG9SZW5kZXIgPSBldmVudHNUb1JlbmRlci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzICE9IDApIHtcbiAgICAgICAgcmV0dXJuIGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiLmVuZFRpbWUuZGlmZihhLmVuZFRpbWUpLm1pbGxpc2Vjb25kcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50c1RvUmVuZGVyLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXdNdWx0aUV2ZW50KGV2ZW50c0VhY2hEYXksIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGxldCBldmVudFByb3BzID0ge1xuICAgICAgdG9vbHRpcFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9vbHRpcFwiLCB7fSksIC8vZ2V0cyB0aGlzLnByb3BzLnN0eWxlcy50b29sdGlwIGlmIGV4aXN0cywgZWxzZSBlbXB0eSBvYmplY3RcbiAgICAgIGV2ZW50U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudFwiLCB7fSksXG4gICAgICBldmVudENpcmNsZVN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRDaXJjbGVcIiwge30pLFxuICAgICAgZXZlbnRUZXh0U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudFRleHRcIiwge30pLFxuICAgIH07XG5cbiAgICBsZXQgc2luZ2xlRXZlbnRzVG9SZW5kZXI6IEV2ZW50UHJvcHNbXSA9IFtdO1xuICAgIHNpbmdsZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9fZGF0ZXRpbWUoZXZlbnQuZW5kVGltZSkuZGlmZihcbiAgICAgICAgICB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vZ2V0IHJlY3VycmVuY2VzIHVzaW5nIFJSdWxlXG4gICAgICAgIGxldCBkYXRlcyA9IENhbGVuZGFyLmdldERhdGVzRnJvbVJSdWxlKFxuICAgICAgICAgIGV2ZW50LnJlY3VycmVuY2VbMF0sXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLFxuICAgICAgICAgIHRvX2RhdGV0aW1lKHRoaXMuc3RhdGUuY3VycmVudCksXG4gICAgICAgICAgdG9fZGF0ZXRpbWUodGhpcy5zdGF0ZS5jdXJyZW50KS5wbHVzKHsgbW9udGg6IDEgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZW5kZXIgcmVjdXJyZW5jZXNcbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgIC8vY2hlY2sgaWYgaXQgaXMgaW4gY2FuY2VsbGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQuY2FuY2VsbGVkRXZlbnRzLnNvbWUoKGNhbmNlbGxlZE1vbWVudDogYW55KSA9PlxuICAgICAgICAgICAgICBjYW5jZWxsZWRNb21lbnQuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2lmIGV2ZW50IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgY29uc3QgY2hhbmdlZEV2ZW50ID0gZXZlbnQuY2hhbmdlZEV2ZW50cy5maW5kKChjaGFuZ2VkRXZlbnQ6IGFueSkgPT5cbiAgICAgICAgICAgIGNoYW5nZWRFdmVudC5vcmlnaW5hbFN0YXJ0VGltZS5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IHByb3BzOiBFdmVudFByb3BzO1xuICAgICAgICAgIGlmIChjaGFuZ2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBjaGFuZ2VkRXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3U3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3RW5kVGltZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5nZWRFdmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGNoYW5nZWRFdmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudFN0YXJ0ID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhkYXRlLmdldFRpbWUoKSwge1xuICAgICAgICAgICAgICB6b25lOiBcInV0Y1wiLFxuICAgICAgICAgICAgfSk7IC8vYXZvaWQgYmFkIHRpbWV6b25lIGNvbnZlcnNpb25zXG4gICAgICAgICAgICBsZXQgZXZlbnRFbmQgPSBldmVudFN0YXJ0LnBsdXMoZHVyYXRpb24pO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnRTdGFydCxcbiAgICAgICAgICAgICAgZW5kVGltZTogZXZlbnRFbmQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5wdXNoKHByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NoZWNrIGlmIGV2ZW50IGlzIGluIGN1cnJlbnQgbW9udGhcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggfHxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhclxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzaW5nbGVFdmVudHNUb1JlbmRlciA9IHNpbmdsZUV2ZW50c1RvUmVuZGVyLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzLFxuICAgICk7XG4gICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyU2luZ2xlRXZlbnQoZXZlbnRzRWFjaERheSwgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKS5kYXksIHtcbiAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgIC4uLmV2ZW50UHJvcHMsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudHNFYWNoRGF5O1xuICB9XG5cbiAgLy9UT0RPOiByZWZhY3RvclxuICAvL2RlY2lkZXMgaG93IHRvIHJlbmRlciBldmVudHNcbiAgZHJhd011bHRpRXZlbnQoZXZlbnRzRWFjaERheTogYW55W10sIHByb3BzOiBNdWx0aUV2ZW50UHJvcHMpIHtcbiAgICBsZXQgc3RhcnREcmF3RGF0ZTtcbiAgICBsZXQgYmxvY2tMZW5ndGggPSAxO1xuICAgIGxldCBjdXJEYXRlOiBEYXRlVGltZTtcbiAgICBsZXQgZW5kRGF0ZTogRGF0ZVRpbWU7XG5cbiAgICBsZXQgYXJyb3dMZWZ0ID0gZmFsc2U7XG4gICAgbGV0IGFycm93UmlnaHQgPSBmYWxzZTtcblxuICAgIGlmIChwcm9wcy5lbmRUaW1lLmhhc1NhbWUocHJvcHMuZW5kVGltZS5zdGFydE9mKFwiZGF5XCIpLCBcInNlY29uZFwiKSkge1xuICAgICAgZW5kRGF0ZSA9IHByb3BzLmVuZFRpbWVcbiAgICAgICAgLnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pXG4gICAgICAgIC5taW51cyh7IGRheTogMSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kRGF0ZSA9IHRvX2RhdGV0aW1lKHByb3BzLmVuZFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwge1xuICAgICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdG9fZGF0ZXRpbWUocHJvcHMuc3RhcnRUaW1lKS5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KSA8XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBcnJvdykge1xuICAgICAgICBhcnJvd0xlZnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzdGFydERyYXdEYXRlID0gMTtcbiAgICAgIGN1ckRhdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0RHJhd0RhdGUgPSBwcm9wcy5zdGFydFRpbWUuZGF5O1xuICAgICAgY3VyRGF0ZSA9IHRvX2RhdGV0aW1lKHByb3BzLnN0YXJ0VGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7XG4gICAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY3VyRGF0ZS5zdGFydE9mKFwiZGF5XCIpIDw9IGVuZERhdGUuc3RhcnRPZihcImRheVwiKSkge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJEYXRlLmRheSA9PSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggJiZcbiAgICAgICAgIWVuZERhdGUuaGFzU2FtZSh0aGlzLnN0YXRlLmN1cnJlbnQsIFwibW9udGhcIilcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QXJyb3cpIHtcbiAgICAgICAgICBhcnJvd1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZHJhdyB0aGVuIHF1aXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgY3VyRGF0ZS5kYXkgPT0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoIHx8XG4gICAgICAgIGN1ckRhdGUuaGFzU2FtZShlbmREYXRlLCBcImRheVwiKVxuICAgICAgKSB7XG4gICAgICAgIC8vZHJhdyB0aGVuIHF1aXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjdXJEYXRlLndlZWtkYXkgPT0gNikge1xuICAgICAgICAvL2RyYXcgdGhlbiByZXNldFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0RHJhd0RhdGUgPSBjdXJEYXRlLnBsdXMoeyBkYXk6IDEgfSkuZGF5O1xuICAgICAgICBibG9ja0xlbmd0aCA9IDA7XG4gICAgICAgIGFycm93TGVmdCA9IGZhbHNlO1xuICAgICAgICBhcnJvd1JpZ2h0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGJsb2NrTGVuZ3RoKys7XG4gICAgICBjdXJEYXRlID0gY3VyRGF0ZS5wbHVzKHsgZGF5OiAxIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vVE9ETzogcmVmYWN0b3IgdGhpcyB0b28/XG4gIC8vaGFuZGxlcyByZW5kZXJpbmcgYW5kIHByb3BlciBzdGFja2luZyBvZiBpbmRpdmlkdWFsIGJsb2Nrc1xuICByZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgZXZlbnRzRWFjaERheTogYW55W10sXG4gICAgc3RhcnREYXRlOiBhbnksXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgcHJvcHM6IGFueSxcbiAgICBhcnJvd0xlZnQ6IGJvb2xlYW4sXG4gICAgYXJyb3dSaWdodDogYm9vbGVhbixcbiAgKSB7XG4gICAgbGV0IG11bHRpRXZlbnRQcm9wcyA9IHtcbiAgICAgIHRvb2x0aXBTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvb2x0aXBcIiwge30pLCAvL2dldHMgdGhpcy5wcm9wcy5zdHlsZXMudG9vbHRpcCBpZiBleGlzdHMsIGVsc2UgZW1wdHkgb2JqZWN0XG4gICAgICBtdWx0aUV2ZW50U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJtdWx0aUV2ZW50XCIsIHt9KSxcbiAgICB9O1xuXG4gICAgbGV0IG1heEJsb2NrcyA9IDA7XG4gICAgbGV0IGNsb3NlZFNsb3RzOiBhbnlbXSA9IFtdOyAvL2tlZXAgdHJhY2sgb2Ygcm93cyB0aGF0IHRoZSBldmVudCBjYW4ndCBiZSBpbnNlcnRlZCBpbnRvXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF5RXZlbnRzID0gZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV07XG4gICAgICBpZiAoZGF5RXZlbnRzLmxlbmd0aCA+IG1heEJsb2Nrcykge1xuICAgICAgICBtYXhCbG9ja3MgPSBkYXlFdmVudHMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICAvL2FkZHJlc3Mgcm93cyB0aGF0IGFyZSBub3QgdGhlIGxhc3QgZWxlbWVudCBpbiBjbG9zZWRTbG90c1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhCbG9ja3M7IGorKykge1xuICAgICAgICBpZiAoaiA+IGRheUV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChjbG9zZWRTbG90cy5pbmNsdWRlcyhqKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXlFdmVudHNbal0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXNFdmVudFwiKSkge1xuICAgICAgICAgIGNsb3NlZFNsb3RzLnB1c2goaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hvc2VuUm93ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4QmxvY2tzOyBpKyspIHtcbiAgICAgIGlmICghY2xvc2VkU2xvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgY2hvc2VuUm93ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9maWxsIGluIHBsYWNlaG9sZGVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vcGxhY2Vob2xkZXJzXG4gICAgICB3aGlsZSAoZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV0ubGVuZ3RoIDw9IGNob3NlblJvdykge1xuICAgICAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXS5wdXNoKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50IGJlbG93IHBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGtleT17YHBsYWNlaG9sZGVyLSR7Z3VkKCl9YH1cbiAgICAgICAgICA+PC9kaXY+LFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvL3Jlc3Qgb2YgZXZlbnQgdGhhdCBpcyB1bmRlciB0aGUgbWFpbiBiYW5uZXJcbiAgICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldW2Nob3NlblJvd10gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudCBldmVudCBiZWxvd1wiIGtleT17YGZpbGxlci0ke2d1ZCgpfWB9PjwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL3JlbmRlciBldmVudFxuICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMV1bY2hvc2VuUm93XSA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YG11bHRpLWV2ZW50LSR7Y2hvc2VuUm93fWB9PlxuICAgICAgICA8TXVsdGlFdmVudFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB7Li4ubXVsdGlFdmVudFByb3BzfVxuICAgICAgICAgIGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGFycm93TGVmdD17YXJyb3dMZWZ0fVxuICAgICAgICAgIGFycm93UmlnaHQ9e2Fycm93UmlnaHR9XG4gICAgICAgICAga2V5PXtgbXVsdGktZXZlbnQtJHtndWQoKX1gfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vYXR0ZW1wdHMgdG8gcmVuZGVyIGluIGEgcGxhY2Vob2xkZXIgdGhlbiBhdCB0aGUgZW5kXG4gIHJlbmRlclNpbmdsZUV2ZW50KGV2ZW50c0VhY2hEYXk6IGFueVtdLCBkYXRlOiBudW1iZXIsIGV2ZW50OiBFdmVudFByb3BzKSB7XG4gICAgbGV0IGZvdW5kRW1wdHkgPSBmYWxzZTtcbiAgICBsZXQgbm9kZXMgPSBldmVudHNFYWNoRGF5W2RhdGUgLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5vZGVzW2ldLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImV2ZW50XCIpICYmXG4gICAgICAgICFub2Rlc1tpXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJpc0V2ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgLy90YXJnZXQgb25seSBwbGFjZWhvbGRlcnNcbiAgICAgICAgbm9kZXNbaV0gPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0+XG4gICAgICAgICAgICA8RXZlbnQgey4uLmV2ZW50fSBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBmb3VuZEVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRFbXB0eSkge1xuICAgICAgZXZlbnRzRWFjaERheVtkYXRlIC0gMV0ucHVzaChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0+XG4gICAgICAgICAgPEV2ZW50IHsuLi5ldmVudH0ga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0gLz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvL2dldCBkYXRlcyBiYXNlZCBvbiBycnVsZSBzdHJpbmcgYmV0d2VlbiBkYXRlc1xuICBzdGF0aWMgZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgc3RyOiBzdHJpbmcsXG4gICAgZXZlbnRTdGFydDogRGF0ZVRpbWUsXG4gICAgYmV0d2VlblN0YXJ0OiBEYXRlVGltZSxcbiAgICBiZXR3ZWVuRW5kOiBEYXRlVGltZSxcbiAgKSB7XG4gICAgLy9nZXQgcmVjdXJyZW5jZXMgdXNpbmcgUlJ1bGVcbiAgICBsZXQgcnN0ciA9IGBEVFNUQVJUOiR7ZXZlbnRTdGFydC5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS50b0Zvcm1hdChcInl5eXlNTWRkJ1QnSEhtbXNzXCIpfVpcXG4ke3N0cn1gO1xuICAgIGxldCBycnVsZVNldCA9IHJydWxlc3RyKHJzdHIsIHsgZm9yY2VzZXQ6IHRydWUgfSk7XG5cbiAgICAvL2dldCBkYXRlc1xuICAgIGxldCBiZWdpbiA9IGJldHdlZW5TdGFydC50b1VUQygpLnRvSlNEYXRlKCk7XG4gICAgbGV0IGVuZCA9IGJldHdlZW5FbmQudG9VVEMoKS50b0pTRGF0ZSgpO1xuICAgIGxldCBkYXRlcyA9IHJydWxlU2V0LmJldHdlZW4oYmVnaW4sIGVuZCk7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBldmVudHNFYWNoRGF5ID0gdGhpcy5nZXRSZW5kZXJFdmVudHMoXG4gICAgICB0aGlzLnN0YXRlLmV2ZW50cyxcbiAgICAgIHRoaXMuc3RhdGUuc2luZ2xlRXZlbnRzLFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIlxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIkxpZ2h0R3JheVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzUxNTY1ZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiY2FsZW5kYXJcIiwge30pLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyLW5hdmlnYXRlIHVuc2VsZWN0YWJsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxhc3RNb250aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzEwMDk0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FsZW5kYXItdGl0bGVcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubW9udGhOYW1lc1t0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggLSAxXSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC55ZWFyfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhci1uYXZpZ2F0ZSB1bnNlbGVjdGFibGVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxMDA5NTtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItYm9keVwiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckRheXMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXRlcyhldmVudHNFYWNoRGF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dGb290ZXIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGwgdGltZXMgc2hvd24geW91ciB0aW1lem9uZSAoe3RoaXMuc3RhdGUudXNlclRpbWV6b25lLm5hbWV9KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL3I/Y2lkPVwiICtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsZW5kYXJzWzBdLmNhbGVuZGFySWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmIzQzOyBBZGQgQ2FsZW5kYXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */",
  toString: zt
};
class Vn extends Lc.Component {
  constructor(I) {
    super(I), this.state = {
      monthNames: [...Oe.EN.MONTHS],
      days: [...Oe.EN.DAYS],
      today: cI.now(),
      current: cI.utc().startOf("month"),
      //current position on calendar (first day of month)
      calendars: [],
      events: [],
      //all day or multi day events
      singleEvents: [],
      //single day events
      userTimezone: cI.fromObject({}, {
        zone: "system"
      }).zone,
      showFooter: I.showFooter || !0,
      showArrow: I.showArrow || !0,
      processedCalendars: []
    }, this.lastMonth = this.lastMonth.bind(this), this.nextMonth = this.nextMonth.bind(this);
  }
  async componentDidMount() {
    if (this.props.language && sx.includes(this.props.language.toUpperCase()))
      try {
        const I = this.props.language.toUpperCase();
        this.setState({
          //@ts-ignore
          monthNames: [...Oe[I].MONTHS],
          //@ts-ignore
          days: [...Oe[I].DAYS]
        });
      } catch (I) {
        console.error("Error choosing a new language", I);
      }
    try {
      const I = await hx(this.props.apiKey);
    } catch (I) {
      console.error("Error loading GAPI client for API", I);
    }
    for (let I of this.props.calendars)
      try {
        const C = await Vx(I.calendarId), t = this.processEvents(C.result.items, C.result.summary, I.color ?? "");
        this.state.processedCalendars.includes(I.calendarId) || this.setState({
          events: [...this.state.events, ...t[0]],
          singleEvents: [...this.state.singleEvents, ...t[1]],
          processedCalendars: [...this.state.processedCalendars, I.calendarId]
        });
      } catch (C) {
        console.error("Error getting events", C);
      }
  }
  //get easy to work with events and singleEvents from response
  processEvents(I, C, t) {
    let i = [], l = [], b = [], u = [];
    return I.forEach((G) => {
      if (G.originalStartTime)
        G.status == "cancelled" ? u.push({
          recurringEventId: G.recurringEventId,
          originalStartTime: G.originalStartTime.dateTime ? cI.fromISO(G.originalStartTime.dateTime) : cI.fromISO(G.originalStartTime.date)
        }) : G.status == "confirmed" ? b.push({
          recurringEventId: G.recurringEventId,
          name: G.summary,
          description: G.description,
          location: G.location,
          originalStartTime: G.originalStartTime.dateTime ? cI.fromISO(G.originalStartTime.dateTime) : cI.fromISO(G.originalStartTime.date),
          newStartTime: G.start.dateTime ? cI.fromISO(G.start.dateTime) : cI.fromISO(G.start.date),
          newEndTime: G.end.dateTime ? cI.fromISO(G.end.dateTime) : cI.fromISO(G.end.date)
        }) : console.log("Not categorized: ", G);
      else if (G.status == "confirmed") {
        let X = {
          id: G.id,
          name: G.summary,
          startTime: G.start.dateTime ? cI.fromISO(G.start.dateTime) : cI.fromISO(G.start.date),
          endTime: G.end.dateTime ? cI.fromISO(G.end.dateTime) : cI.fromISO(G.end.date),
          description: G.description,
          location: G.location,
          recurrence: G.recurrence,
          changedEvents: [],
          cancelledEvents: [],
          calendarName: C,
          color: t
        };
        Ax(X.startTime, X.endTime) ? l.push(X) : i.push(X);
      } else
        console.log("Not categorized: ", G);
    }), l.forEach((G, X, s) => {
      G.recurrence && (b.filter((o) => o.recurringEventId == G.id).forEach((o) => {
        s[X].changedEvents.push(o);
      }), u.filter((o) => o.recurringEventId == G.id).forEach((o) => {
        s[X].cancelledEvents.push(o.originalStartTime);
      }));
    }), i.forEach((G, X, s) => {
      G.recurrence && (b.filter((o) => o.recurringEventId == G.id).forEach((o) => {
        s[X].changedEvents.push(o);
      }), u.filter((o) => o.recurringEventId == G.id).forEach((o) => {
        s[X].cancelledEvents.push(o.originalStartTime);
      }));
    }), [l, i];
  }
  //sets current month to previous month
  lastMonth() {
    this.setState({
      current: this.state.current.minus({
        month: 1
      })
    });
  }
  //sets current month to following month
  nextMonth() {
    this.setState({
      current: this.state.current.plus({
        month: 1
      })
    });
  }
  clearEvents() {
    let I = this.state.current.daysInMonth ?? 30;
    for (let C = 1; C <= I; C++) {
      const t = document.getElementById("day-" + C);
      for (; t.lastElementChild; )
        t.removeChild(t.lastElementChild);
    }
  }
  //renders the day of week names
  renderDays() {
    return this.state.days.map((I, C) => /* @__PURE__ */ Q("div", { className: "day-name", css: ["border-color:LightGray;", $g.get(this.props.styles, "day", {}), process.env.NODE_ENV === "production" ? "" : ";label:Calendar;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk9RIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcnJ1bGVzdHIgfSBmcm9tIFwicnJ1bGVcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgZ3VkIGZyb20gXCJndWRcIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VzLCBhdmFpbGFibGVMYW5ndWFnZXMgfSBmcm9tIFwiLi9sYW5ndWFnZXNcIjtcbmltcG9ydCBNdWx0aUV2ZW50IGZyb20gXCIuL211bHRpRXZlbnRcIjtcbmltcG9ydCB7IENhbGVuZGFyUHJvcHMsIENhbGVuZGFyU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyBNdWx0aUV2ZW50UHJvcHMgfSBmcm9tIFwiLi90eXBlcy9tdWx0aUV2ZW50XCI7XG5pbXBvcnQgeyBnZXRFdmVudHNMaXN0LCBsb2FkQ2FsZW5kYXJBUEkgfSBmcm9tIFwiLi91dGlscy9nb29nbGVDYWxlbmRhckFQSVwiO1xuaW1wb3J0IHsgaXNNdWx0aUV2ZW50LCB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgQ2FsZW5kYXJQcm9wcyxcbiAgQ2FsZW5kYXJTdGF0ZVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYWxlbmRhclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb250aE5hbWVzOiBbLi4uTGFuZ3VhZ2VzLkVOLk1PTlRIU10sXG4gICAgICBkYXlzOiBbLi4uTGFuZ3VhZ2VzLkVOLkRBWVNdLFxuICAgICAgdG9kYXk6IERhdGVUaW1lLm5vdygpLFxuICAgICAgY3VycmVudDogRGF0ZVRpbWUudXRjKCkuc3RhcnRPZihcIm1vbnRoXCIpLCAvL2N1cnJlbnQgcG9zaXRpb24gb24gY2FsZW5kYXIgKGZpcnN0IGRheSBvZiBtb250aClcbiAgICAgIGNhbGVuZGFyczogW10sXG4gICAgICBldmVudHM6IFtdLCAvL2FsbCBkYXkgb3IgbXVsdGkgZGF5IGV2ZW50c1xuICAgICAgc2luZ2xlRXZlbnRzOiBbXSwgLy9zaW5nbGUgZGF5IGV2ZW50c1xuICAgICAgdXNlclRpbWV6b25lOiBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IFwic3lzdGVtXCIgfSkuem9uZSxcbiAgICAgIHNob3dGb290ZXI6IHByb3BzLnNob3dGb290ZXIgfHwgdHJ1ZSxcbiAgICAgIHNob3dBcnJvdzogcHJvcHMuc2hvd0Fycm93IHx8IHRydWUsXG4gICAgICBwcm9jZXNzZWRDYWxlbmRhcnM6IFtdLFxuICAgIH07XG5cbiAgICB0aGlzLmxhc3RNb250aCA9IHRoaXMubGFzdE1vbnRoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TW9udGggPSB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5sYW5ndWFnZSAmJlxuICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzLmluY2x1ZGVzKHRoaXMucHJvcHMubGFuZ3VhZ2UudG9VcHBlckNhc2UoKSlcbiAgICApIHtcbiAgICAgIC8vIHRyeSB0byBjaGFuZ2UgbGFuZ3VhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLnByb3BzLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIG1vbnRoTmFtZXM6IFsuLi5MYW5ndWFnZXNbbGFuZ10uTU9OVEhTXSxcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBkYXlzOiBbLi4uTGFuZ3VhZ2VzW2xhbmddLkRBWVNdLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hvb3NpbmcgYSBuZXcgbGFuZ3VhZ2VcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9pbml0IGFuZCBsb2FkIGdvb2dsZSBjYWxlbmRhciBhcGlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgbG9hZENhbGVuZGFyQVBJKHRoaXMucHJvcHMuYXBpS2V5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIEdBUEkgY2xpZW50IGZvciBBUElcIiwgZXJyKTtcbiAgICB9XG5cbiAgICAvL0dldCBldmVudHMgZnJvbSBhbGwgY2FsZW5kYXJzXG4gICAgZm9yIChsZXQgY2FsZW5kYXIgb2YgdGhpcy5wcm9wcy5jYWxlbmRhcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vcXVlcnkgYXBpIGZvciBldmVudHNcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RXZlbnRzTGlzdChjYWxlbmRhci5jYWxlbmRhcklkKTtcblxuICAgICAgICAvL3Byb2Nlc3MgZXZlbnRzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLnByb2Nlc3NFdmVudHMoXG4gICAgICAgICAgcmVzLnJlc3VsdC5pdGVtcyxcbiAgICAgICAgICByZXMucmVzdWx0LnN1bW1hcnksXG4gICAgICAgICAgY2FsZW5kYXIuY29sb3IgPz8gXCJcIixcbiAgICAgICAgKTtcblxuICAgICAgICAvL2ZpeCBkdXBsaWNhdGUgY2FsZW5kYXJzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5wcm9jZXNzZWRDYWxlbmRhcnMuaW5jbHVkZXMoY2FsZW5kYXIuY2FsZW5kYXJJZCkpIHtcbiAgICAgICAgICAvL3NldCBzdGF0ZSB3aXRoIGNhbGN1bGF0ZWQgdmFsdWVzXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBldmVudHM6IFsuLi50aGlzLnN0YXRlLmV2ZW50cywgLi4uZXZlbnRzWzBdXSxcbiAgICAgICAgICAgIHNpbmdsZUV2ZW50czogWy4uLnRoaXMuc3RhdGUuc2luZ2xlRXZlbnRzLCAuLi5ldmVudHNbMV1dLFxuICAgICAgICAgICAgcHJvY2Vzc2VkQ2FsZW5kYXJzOiBbXG4gICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJvY2Vzc2VkQ2FsZW5kYXJzLFxuICAgICAgICAgICAgICBjYWxlbmRhci5jYWxlbmRhcklkLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGV2ZW50c1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vZ2V0IGVhc3kgdG8gd29yayB3aXRoIGV2ZW50cyBhbmQgc2luZ2xlRXZlbnRzIGZyb20gcmVzcG9uc2VcbiAgcHJvY2Vzc0V2ZW50cyhpdGVtczogYW55W10sIGNhbGVuZGFyTmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogYW55W10ge1xuICAgIGxldCBzaW5nbGVFdmVudHM6IGFueVtdID0gW107XG4gICAgbGV0IGV2ZW50czogYW55W10gPSBbXTtcbiAgICBsZXQgY2hhbmdlZDogYW55W10gPSBbXTtcbiAgICBsZXQgY2FuY2VsbGVkOiBhbnlbXSA9IFtdO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5vcmlnaW5hbFN0YXJ0VGltZSkge1xuICAgICAgICAvL2NhbmNlbGxlZCBvciBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBpZiAoZXZlbnQuc3RhdHVzID09IFwiY2FuY2VsbGVkXCIpIHtcbiAgICAgICAgICAvL2NhbmNlbGxlZCBldmVudHNcbiAgICAgICAgICBjYW5jZWxsZWQucHVzaCh7XG4gICAgICAgICAgICByZWN1cnJpbmdFdmVudElkOiBldmVudC5yZWN1cnJpbmdFdmVudElkLFxuICAgICAgICAgICAgb3JpZ2luYWxTdGFydFRpbWU6IGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGUpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNvbmZpcm1lZFwiKSB7XG4gICAgICAgICAgLy9jaGFuZ2VkIGV2ZW50c1xuICAgICAgICAgIGNoYW5nZWQucHVzaCh7XG4gICAgICAgICAgICByZWN1cnJpbmdFdmVudElkOiBldmVudC5yZWN1cnJpbmdFdmVudElkLFxuICAgICAgICAgICAgbmFtZTogZXZlbnQuc3VtbWFyeSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRUaW1lOiBldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0VGltZTogZXZlbnQuc3RhcnQuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZSksXG4gICAgICAgICAgICBuZXdFbmRUaW1lOiBldmVudC5lbmQuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBjYXRlZ29yaXplZDogXCIsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5zdGF0dXMgPT0gXCJjb25maXJtZWRcIikge1xuICAgICAgICAvL25vcm1hbCBldmVudHNcbiAgICAgICAgbGV0IG5ld0V2ZW50ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudC5zdW1tYXJ5LFxuICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnQuc3RhcnQuZGF0ZVRpbWVcbiAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlVGltZSlcbiAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlKSxcbiAgICAgICAgICBlbmRUaW1lOiBldmVudC5lbmQuZGF0ZVRpbWVcbiAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZVRpbWUpXG4gICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGUpLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgcmVjdXJyZW5jZTogZXZlbnQucmVjdXJyZW5jZSxcbiAgICAgICAgICBjaGFuZ2VkRXZlbnRzOiBbXSxcbiAgICAgICAgICBjYW5jZWxsZWRFdmVudHM6IFtdLFxuICAgICAgICAgIGNhbGVuZGFyTmFtZTogY2FsZW5kYXJOYW1lLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNNdWx0aUV2ZW50KG5ld0V2ZW50LnN0YXJ0VGltZSwgbmV3RXZlbnQuZW5kVGltZSkpIHtcbiAgICAgICAgICBldmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2luZ2xlRXZlbnRzLnB1c2gobmV3RXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBjYXRlZ29yaXplZDogXCIsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vYWRkIGNoYW5nZWQgZXZlbnRzIGFuZCBjYW5jZWxsZWQgZXZlbnRzIHRvIGNvcnJlc3BvbmRpbmcgZXZlbnQgb2JqZWN0XG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgLy9wdXNoIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGNoYW5nZWRcbiAgICAgICAgICAuZmlsdGVyKChjaGFuZ2UpID0+IGNoYW5nZS5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNoYW5nZWRFdmVudHMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vcHVzaCBjYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgIGNhbmNlbGxlZFxuICAgICAgICAgIC5maWx0ZXIoKGNhbmNlbCkgPT4gY2FuY2VsLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNhbmNlbCkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2FuY2VsbGVkRXZlbnRzLnB1c2goY2FuY2VsLm9yaWdpbmFsU3RhcnRUaW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNpbmdsZUV2ZW50cy5mb3JFYWNoKChldmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIC8vcHVzaCBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBjaGFuZ2VkXG4gICAgICAgICAgLmZpbHRlcigoY2hhbmdlKSA9PiBjaGFuZ2UucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jaGFuZ2VkRXZlbnRzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvL3B1c2ggY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICBjYW5jZWxsZWRcbiAgICAgICAgICAuZmlsdGVyKChjYW5jZWwpID0+IGNhbmNlbC5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjYW5jZWwpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNhbmNlbGxlZEV2ZW50cy5wdXNoKGNhbmNlbC5vcmlnaW5hbFN0YXJ0VGltZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2V2ZW50cywgc2luZ2xlRXZlbnRzXTtcbiAgfVxuXG4gIC8vc2V0cyBjdXJyZW50IG1vbnRoIHRvIHByZXZpb3VzIG1vbnRoXG4gIGxhc3RNb250aCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50Lm1pbnVzKHsgbW9udGg6IDEgfSkgfSk7XG4gIH1cblxuICAvL3NldHMgY3VycmVudCBtb250aCB0byBmb2xsb3dpbmcgbW9udGhcbiAgbmV4dE1vbnRoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnQucGx1cyh7IG1vbnRoOiAxIH0pIH0pO1xuICB9XG5cbiAgY2xlYXJFdmVudHMoKSB7XG4gICAgbGV0IGRheXNJbk1vbnRoID0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGU6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5LVwiICsgaSk7XG4gICAgICB3aGlsZSAobm9kZS5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL3JlbmRlcnMgdGhlIGRheSBvZiB3ZWVrIG5hbWVzXG4gIHJlbmRlckRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF5cy5tYXAoKHgsIGkpID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZGF5LW5hbWVcIlxuICAgICAgICBrZXk9e1wiZGF5LW9mLXdlZWstXCIgKyBpfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB7IGJvcmRlckNvbG9yOiBcIkxpZ2h0R3JheVwiIH0sXG4gICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAge3h9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgfVxuXG4gIC8vcmVuZGVycyB0aGUgYmxvY2tzIGZvciB0aGUgZGF5cyBvZiBlYWNoIG1vbnRoXG4gIHJlbmRlckRhdGVzKGV2ZW50c0VhY2hEYXk6IGFueVtdKTogYW55W10ge1xuICAgIGxldCBjdXJyZW50RGF5c0luTW9udGggPSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzA7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCBkYXlzID0gWy4uLkFycmF5KGN1cnJlbnREYXlzSW5Nb250aCArIDEpLmtleXMoKV0uc2xpY2UoMSk7IC8vIGNyZWF0ZSBhcnJheSBmcm9tIDEgdG8gbnVtYmVyIG9mIGRheXMgaW4gbW9udGhcbiAgICBsZXQgZGF5T2ZXZWVrID0gdGhpcy5zdGF0ZS5jdXJyZW50LndlZWtkYXk7IC8vZ2V0IGRheSBvZiB3ZWVrIG9mIGZpcnN0IGRheSBpbiB0aGUgbW9udGhcbiAgICBsZXQgcGFkRGF5cyA9XG4gICAgICAoKCgtY3VycmVudERheXNJbk1vbnRoIC0gdGhpcy5zdGF0ZS5jdXJyZW50LndlZWtkYXkpICUgNykgKyA3KSAlIDc7IC8vbnVtYmVyIG9mIGRheXMgdG8gZmlsbCBvdXQgdGhlIGxhc3Qgcm93XG5cbiAgICByZXR1cm4gW1xuICAgICAgWy4uLkFycmF5KGRheU9mV2VlayldLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICBrZXk9e1wiZW1wdHktZGF5LVwiICsgaX1cbiAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICkpLFxuICAgICAgZGF5cy5tYXAoKHgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHggPT0gdGhpcy5zdGF0ZS50b2RheS5kYXkgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQuaGFzU2FtZSh0aGlzLnN0YXRlLnRvZGF5LCBcIm1vbnRoXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAgICAgIGtleT17XCJkYXktXCIgKyB4fVxuICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pLFxuICAgICAgICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvZGF5XCIsIHt9KSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckRheVwiIGlkPXtcImRheS1cIiArIHh9PlxuICAgICAgICAgICAgICAgIHtldmVudHNFYWNoRGF5W3ggLSAxXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAgICAgIGtleT17XCJkYXktXCIgKyB4fVxuICAgICAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEYXlcIiBpZD17XCJkYXktXCIgKyB4fT5cbiAgICAgICAgICAgICAgICB7ZXZlbnRzRWFjaERheVt4IC0gMV19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBbLi4uQXJyYXkocGFkRGF5cyldLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICBrZXk9e1wiZW1wdHktZGF5LTItXCIgKyBpfVxuICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKSksXG4gICAgXTtcbiAgfVxuXG4gIC8vZ2V0IGFycmF5IG9mIGFycmF5cyBvZiBsZW5ndGggZGF5cyBpbiBtb250aCBjb250YWluaW5nIHRoZSBldmVudHMgaW4gZWFjaCBkYXlcbiAgZ2V0UmVuZGVyRXZlbnRzKGV2ZW50czogYW55W10sIHNpbmdsZUV2ZW50czogYW55W10pIHtcbiAgICBsZXQgZXZlbnRzRWFjaERheSA9IFsuLi5BcnJheSh0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzApXS5tYXAoXG4gICAgICAoZSkgPT4gW10sXG4gICAgKTsgLy9jcmVhdGUgYXJyYXkgb2YgZW1wdHkgYXJyYXlzIG9mIGxlbmd0aCBkYXlzSW5Nb250aFxuICAgIGxldCBldmVudHNUb1JlbmRlcjogRXZlbnRQcm9wc1tdID0gW107XG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB0b19kYXRldGltZShldmVudC5lbmRUaW1lKS5kaWZmKFxuICAgICAgICAgIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSksXG4gICAgICAgICk7XG4gICAgICAgIGxldCBkYXRlcyA9IENhbGVuZGFyLmdldERhdGVzRnJvbVJSdWxlKFxuICAgICAgICAgIGV2ZW50LnJlY3VycmVuY2VbMF0sXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLFxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5taW51cyhkdXJhdGlvbiksXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LnBsdXMoeyBtb250aDogMSB9KSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL3JlbmRlciByZWN1cnJlbmNlc1xuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgICAgLy9kb24ndCByZW5kZXIgaWYgaXQgaXMgY2FuY2VsbGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQuY2FuY2VsbGVkRXZlbnRzLnNvbWUoKGNhbmNlbGxlZE1vbWVudDogYW55KSA9PlxuICAgICAgICAgICAgICBjYW5jZWxsZWRNb21lbnQuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcHJvcHM6IEV2ZW50UHJvcHM7XG4gICAgICAgICAgLy91cGRhdGUgaW5mb3JtYXRpb24gaWYgZXZlbnQgaGFzIGNoYW5nZWRcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkRXZlbnQgPSBldmVudC5jaGFuZ2VkRXZlbnRzLmZpbmQoKGNoYW5nZWRFdmVudDogYW55KSA9PlxuICAgICAgICAgICAgY2hhbmdlZEV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoY2hhbmdlZEV2ZW50KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogY2hhbmdlZEV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogY2hhbmdlZEV2ZW50Lm5ld1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogY2hhbmdlZEV2ZW50Lm5ld0VuZFRpbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGFuZ2VkRXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBjaGFuZ2VkRXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRTdGFydCA9IERhdGVUaW1lLmZyb21NaWxsaXMoZGF0ZS5nZXRUaW1lKCksIHtcbiAgICAgICAgICAgICAgem9uZTogXCJ1dGNcIixcbiAgICAgICAgICAgIH0pOyAvL3NpbmNlIHJydWxlIHdvcmtzIHdpdGggdXRjIHRpbWVzXG4gICAgICAgICAgICBsZXQgZXZlbnRFbmQgPSBldmVudFN0YXJ0LnBsdXMoZHVyYXRpb24pO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnRTdGFydCxcbiAgICAgICAgICAgICAgZW5kVGltZTogZXZlbnRFbmQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnRzVG9SZW5kZXIucHVzaChwcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9yZW5kZXIgZXZlbnRcbiAgICAgICAgLy9jaGVjayBpZiBldmVudCBpcyBpbiByYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgKChldmVudC5zdGFydFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIHx8XG4gICAgICAgICAgICBldmVudC5zdGFydFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhcikgJiZcbiAgICAgICAgICAgIGV2ZW50LmVuZFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoKSB8fFxuICAgICAgICAgIGV2ZW50LmVuZFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhclxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzVG9SZW5kZXIucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudHNUb1JlbmRlciA9IGV2ZW50c1RvUmVuZGVyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHMgIT0gMCkge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGIuZW5kVGltZS5kaWZmKGEuZW5kVGltZSkubWlsbGlzZWNvbmRzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnRzVG9SZW5kZXIuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZHJhd011bHRpRXZlbnQoZXZlbnRzRWFjaERheSwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgbGV0IGV2ZW50UHJvcHMgPSB7XG4gICAgICB0b29sdGlwU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b29sdGlwXCIsIHt9KSwgLy9nZXRzIHRoaXMucHJvcHMuc3R5bGVzLnRvb2x0aXAgaWYgZXhpc3RzLCBlbHNlIGVtcHR5IG9iamVjdFxuICAgICAgZXZlbnRTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50XCIsIHt9KSxcbiAgICAgIGV2ZW50Q2lyY2xlU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudENpcmNsZVwiLCB7fSksXG4gICAgICBldmVudFRleHRTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50VGV4dFwiLCB7fSksXG4gICAgfTtcblxuICAgIGxldCBzaW5nbGVFdmVudHNUb1JlbmRlcjogRXZlbnRQcm9wc1tdID0gW107XG4gICAgc2luZ2xlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB0b19kYXRldGltZShldmVudC5lbmRUaW1lKS5kaWZmKFxuICAgICAgICAgIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9nZXQgcmVjdXJyZW5jZXMgdXNpbmcgUlJ1bGVcbiAgICAgICAgbGV0IGRhdGVzID0gQ2FsZW5kYXIuZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgICAgICAgZXZlbnQucmVjdXJyZW5jZVswXSxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUsXG4gICAgICAgICAgdG9fZGF0ZXRpbWUodGhpcy5zdGF0ZS5jdXJyZW50KSxcbiAgICAgICAgICB0b19kYXRldGltZSh0aGlzLnN0YXRlLmN1cnJlbnQpLnBsdXMoeyBtb250aDogMSB9KSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL3JlbmRlciByZWN1cnJlbmNlc1xuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgICAgLy9jaGVjayBpZiBpdCBpcyBpbiBjYW5jZWxsZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5jYW5jZWxsZWRFdmVudHMuc29tZSgoY2FuY2VsbGVkTW9tZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgIGNhbmNlbGxlZE1vbWVudC5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vaWYgZXZlbnQgaGFzIGNoYW5nZWRcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkRXZlbnQgPSBldmVudC5jaGFuZ2VkRXZlbnRzLmZpbmQoKGNoYW5nZWRFdmVudDogYW55KSA9PlxuICAgICAgICAgICAgY2hhbmdlZEV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgcHJvcHM6IEV2ZW50UHJvcHM7XG4gICAgICAgICAgaWYgKGNoYW5nZWRFdmVudCkge1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGNoYW5nZWRFdmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGNoYW5nZWRFdmVudC5uZXdTdGFydFRpbWUsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGNoYW5nZWRFdmVudC5uZXdFbmRUaW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbmdlZEV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogY2hhbmdlZEV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV2ZW50U3RhcnQgPSBEYXRlVGltZS5mcm9tTWlsbGlzKGRhdGUuZ2V0VGltZSgpLCB7XG4gICAgICAgICAgICAgIHpvbmU6IFwidXRjXCIsXG4gICAgICAgICAgICB9KTsgLy9hdm9pZCBiYWQgdGltZXpvbmUgY29udmVyc2lvbnNcbiAgICAgICAgICAgIGxldCBldmVudEVuZCA9IGV2ZW50U3RhcnQucGx1cyhkdXJhdGlvbik7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogZXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBldmVudFN0YXJ0LFxuICAgICAgICAgICAgICBlbmRUaW1lOiBldmVudEVuZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLnB1c2gocHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY2hlY2sgaWYgZXZlbnQgaXMgaW4gY3VycmVudCBtb250aFxuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCB8fFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyID0gc2luZ2xlRXZlbnRzVG9SZW5kZXIuc29ydChcbiAgICAgIChhLCBiKSA9PiBhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHMsXG4gICAgKTtcbiAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJTaW5nbGVFdmVudChldmVudHNFYWNoRGF5LCB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLmRheSwge1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgLi4uZXZlbnRQcm9wcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGV2ZW50c0VhY2hEYXk7XG4gIH1cblxuICAvL1RPRE86IHJlZmFjdG9yXG4gIC8vZGVjaWRlcyBob3cgdG8gcmVuZGVyIGV2ZW50c1xuICBkcmF3TXVsdGlFdmVudChldmVudHNFYWNoRGF5OiBhbnlbXSwgcHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIGxldCBzdGFydERyYXdEYXRlO1xuICAgIGxldCBibG9ja0xlbmd0aCA9IDE7XG4gICAgbGV0IGN1ckRhdGU6IERhdGVUaW1lO1xuICAgIGxldCBlbmREYXRlOiBEYXRlVGltZTtcblxuICAgIGxldCBhcnJvd0xlZnQgPSBmYWxzZTtcbiAgICBsZXQgYXJyb3dSaWdodCA9IGZhbHNlO1xuXG4gICAgaWYgKHByb3BzLmVuZFRpbWUuaGFzU2FtZShwcm9wcy5lbmRUaW1lLnN0YXJ0T2YoXCJkYXlcIiksIFwic2Vjb25kXCIpKSB7XG4gICAgICBlbmREYXRlID0gcHJvcHMuZW5kVGltZVxuICAgICAgICAuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSlcbiAgICAgICAgLm1pbnVzKHsgZGF5OiAxIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmREYXRlID0gdG9fZGF0ZXRpbWUocHJvcHMuZW5kVGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7XG4gICAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0b19kYXRldGltZShwcm9wcy5zdGFydFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pIDxcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFxuICAgICkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Fycm93KSB7XG4gICAgICAgIGFycm93TGVmdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0RHJhd0RhdGUgPSAxO1xuICAgICAgY3VyRGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnREcmF3RGF0ZSA9IHByb3BzLnN0YXJ0VGltZS5kYXk7XG4gICAgICBjdXJEYXRlID0gdG9fZGF0ZXRpbWUocHJvcHMuc3RhcnRUaW1lKS5zZXRab25lKFwidXRjXCIsIHtcbiAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdoaWxlIChjdXJEYXRlLnN0YXJ0T2YoXCJkYXlcIikgPD0gZW5kRGF0ZS5zdGFydE9mKFwiZGF5XCIpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1ckRhdGUuZGF5ID09IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCAmJlxuICAgICAgICAhZW5kRGF0ZS5oYXNTYW1lKHRoaXMuc3RhdGUuY3VycmVudCwgXCJtb250aFwiKVxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBcnJvdykge1xuICAgICAgICAgIGFycm93UmlnaHQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kcmF3IHRoZW4gcXVpdFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBjdXJEYXRlLmRheSA9PSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggfHxcbiAgICAgICAgY3VyRGF0ZS5oYXNTYW1lKGVuZERhdGUsIFwiZGF5XCIpXG4gICAgICApIHtcbiAgICAgICAgLy9kcmF3IHRoZW4gcXVpdFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGN1ckRhdGUud2Vla2RheSA9PSA2KSB7XG4gICAgICAgIC8vZHJhdyB0aGVuIHJlc2V0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnREcmF3RGF0ZSA9IGN1ckRhdGUucGx1cyh7IGRheTogMSB9KS5kYXk7XG4gICAgICAgIGJsb2NrTGVuZ3RoID0gMDtcbiAgICAgICAgYXJyb3dMZWZ0ID0gZmFsc2U7XG4gICAgICAgIGFycm93UmlnaHQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgYmxvY2tMZW5ndGgrKztcbiAgICAgIGN1ckRhdGUgPSBjdXJEYXRlLnBsdXMoeyBkYXk6IDEgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9UT0RPOiByZWZhY3RvciB0aGlzIHRvbz9cbiAgLy9oYW5kbGVzIHJlbmRlcmluZyBhbmQgcHJvcGVyIHN0YWNraW5nIG9mIGluZGl2aWR1YWwgYmxvY2tzXG4gIHJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICBldmVudHNFYWNoRGF5OiBhbnlbXSxcbiAgICBzdGFydERhdGU6IGFueSxcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICBwcm9wczogYW55LFxuICAgIGFycm93TGVmdDogYm9vbGVhbixcbiAgICBhcnJvd1JpZ2h0OiBib29sZWFuLFxuICApIHtcbiAgICBsZXQgbXVsdGlFdmVudFByb3BzID0ge1xuICAgICAgdG9vbHRpcFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9vbHRpcFwiLCB7fSksIC8vZ2V0cyB0aGlzLnByb3BzLnN0eWxlcy50b29sdGlwIGlmIGV4aXN0cywgZWxzZSBlbXB0eSBvYmplY3RcbiAgICAgIG11bHRpRXZlbnRTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcIm11bHRpRXZlbnRcIiwge30pLFxuICAgIH07XG5cbiAgICBsZXQgbWF4QmxvY2tzID0gMDtcbiAgICBsZXQgY2xvc2VkU2xvdHM6IGFueVtdID0gW107IC8va2VlcCB0cmFjayBvZiByb3dzIHRoYXQgdGhlIGV2ZW50IGNhbid0IGJlIGluc2VydGVkIGludG9cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXlFdmVudHMgPSBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXTtcbiAgICAgIGlmIChkYXlFdmVudHMubGVuZ3RoID4gbWF4QmxvY2tzKSB7XG4gICAgICAgIG1heEJsb2NrcyA9IGRheUV2ZW50cy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIC8vYWRkcmVzcyByb3dzIHRoYXQgYXJlIG5vdCB0aGUgbGFzdCBlbGVtZW50IGluIGNsb3NlZFNsb3RzXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heEJsb2NrczsgaisrKSB7XG4gICAgICAgIGlmIChqID4gZGF5RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKGNsb3NlZFNsb3RzLmluY2x1ZGVzKGopKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheUV2ZW50c1tqXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJpc0V2ZW50XCIpKSB7XG4gICAgICAgICAgY2xvc2VkU2xvdHMucHVzaChqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjaG9zZW5Sb3cgPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBtYXhCbG9ja3M7IGkrKykge1xuICAgICAgaWYgKCFjbG9zZWRTbG90cy5pbmNsdWRlcyhpKSkge1xuICAgICAgICBjaG9zZW5Sb3cgPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2ZpbGwgaW4gcGxhY2Vob2xkZXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy9wbGFjZWhvbGRlcnNcbiAgICAgIHdoaWxlIChldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXS5sZW5ndGggPD0gY2hvc2VuUm93KSB7XG4gICAgICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldLnB1c2goXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQgYmVsb3cgcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAga2V5PXtgcGxhY2Vob2xkZXItJHtndWQoKX1gfVxuICAgICAgICAgID48L2Rpdj4sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vcmVzdCBvZiBldmVudCB0aGF0IGlzIHVuZGVyIHRoZSBtYWluIGJhbm5lclxuICAgICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV1bY2hvc2VuUm93XSA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50IGV2ZW50IGJlbG93XCIga2V5PXtgZmlsbGVyLSR7Z3VkKCl9YH0+PC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vcmVuZGVyIGV2ZW50XG4gICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxXVtjaG9zZW5Sb3ddID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgbXVsdGktZXZlbnQtJHtjaG9zZW5Sb3d9YH0+XG4gICAgICAgIDxNdWx0aUV2ZW50XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHsuLi5tdWx0aUV2ZW50UHJvcHN9XG4gICAgICAgICAgbGVuZ3RoPXtsZW5ndGh9XG4gICAgICAgICAgYXJyb3dMZWZ0PXthcnJvd0xlZnR9XG4gICAgICAgICAgYXJyb3dSaWdodD17YXJyb3dSaWdodH1cbiAgICAgICAgICBrZXk9e2BtdWx0aS1ldmVudC0ke2d1ZCgpfWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy9hdHRlbXB0cyB0byByZW5kZXIgaW4gYSBwbGFjZWhvbGRlciB0aGVuIGF0IHRoZSBlbmRcbiAgcmVuZGVyU2luZ2xlRXZlbnQoZXZlbnRzRWFjaERheTogYW55W10sIGRhdGU6IG51bWJlciwgZXZlbnQ6IEV2ZW50UHJvcHMpIHtcbiAgICBsZXQgZm91bmRFbXB0eSA9IGZhbHNlO1xuICAgIGxldCBub2RlcyA9IGV2ZW50c0VhY2hEYXlbZGF0ZSAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZXNbaV0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZXZlbnRcIikgJiZcbiAgICAgICAgIW5vZGVzW2ldLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImlzRXZlbnRcIilcbiAgICAgICkge1xuICAgICAgICAvL3RhcmdldCBvbmx5IHBsYWNlaG9sZGVyc1xuICAgICAgICBub2Rlc1tpXSA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfT5cbiAgICAgICAgICAgIDxFdmVudCB7Li4uZXZlbnR9IGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICAgIGZvdW5kRW1wdHkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZEVtcHR5KSB7XG4gICAgICBldmVudHNFYWNoRGF5W2RhdGUgLSAxXS5wdXNoKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfT5cbiAgICAgICAgICA8RXZlbnQgey4uLmV2ZW50fSBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfSAvPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vZ2V0IGRhdGVzIGJhc2VkIG9uIHJydWxlIHN0cmluZyBiZXR3ZWVuIGRhdGVzXG4gIHN0YXRpYyBnZXREYXRlc0Zyb21SUnVsZShcbiAgICBzdHI6IHN0cmluZyxcbiAgICBldmVudFN0YXJ0OiBEYXRlVGltZSxcbiAgICBiZXR3ZWVuU3RhcnQ6IERhdGVUaW1lLFxuICAgIGJldHdlZW5FbmQ6IERhdGVUaW1lLFxuICApIHtcbiAgICAvL2dldCByZWN1cnJlbmNlcyB1c2luZyBSUnVsZVxuICAgIGxldCByc3RyID0gYERUU1RBUlQ6JHtldmVudFN0YXJ0LnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pLnRvRm9ybWF0KFwieXl5eU1NZGQnVCdISG1tc3NcIil9WlxcbiR7c3RyfWA7XG4gICAgbGV0IHJydWxlU2V0ID0gcnJ1bGVzdHIocnN0ciwgeyBmb3JjZXNldDogdHJ1ZSB9KTtcblxuICAgIC8vZ2V0IGRhdGVzXG4gICAgbGV0IGJlZ2luID0gYmV0d2VlblN0YXJ0LnRvVVRDKCkudG9KU0RhdGUoKTtcbiAgICBsZXQgZW5kID0gYmV0d2VlbkVuZC50b1VUQygpLnRvSlNEYXRlKCk7XG4gICAgbGV0IGRhdGVzID0gcnJ1bGVTZXQuYmV0d2VlbihiZWdpbiwgZW5kKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGV2ZW50c0VhY2hEYXkgPSB0aGlzLmdldFJlbmRlckV2ZW50cyhcbiAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLFxuICAgICAgdGhpcy5zdGF0ZS5zaW5nbGVFdmVudHMsXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhclwiXG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiTGlnaHRHcmF5XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJjYWxlbmRhclwiLCB7fSksXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXItbmF2aWdhdGUgdW5zZWxlY3RhYmxlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubGFzdE1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTAwOTQ7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYWxlbmRhci10aXRsZVwiPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tb250aE5hbWVzW3RoaXMuc3RhdGUuY3VycmVudC5tb250aCAtIDFdICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJ9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyLW5hdmlnYXRlIHVuc2VsZWN0YWJsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzEwMDk1O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1ib2R5XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyRGF5cygpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckRhdGVzKGV2ZW50c0VhY2hEYXkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Zvb3RlciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFsbCB0aW1lcyBzaG93biB5b3VyIHRpbWV6b25lICh7dGhpcy5zdGF0ZS51c2VyVGltZXpvbmUubmFtZX0pXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgXCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvcj9jaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxlbmRhcnNbMF0uY2FsZW5kYXJJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICYjNDM7IEFkZCBDYWxlbmRhclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"], children: I }, "day-of-week-" + C));
  }
  //renders the blocks for the days of each month
  renderDates(I) {
    let C = this.state.current.daysInMonth ?? 30, t = [...Array(C + 1).keys()].slice(1), i = this.state.current.weekday, l = ((-C - this.state.current.weekday) % 7 + 7) % 7;
    return [[...Array(i)].map((b, u) => /* @__PURE__ */ Q("div", { className: "day", css: $g.get(this.props.styles, "day", {}) }, "empty-day-" + u)), t.map((b) => b == this.state.today.day && this.state.current.hasSame(this.state.today, "month") ? /* @__PURE__ */ eg("div", { className: "day", css: [$g.get(this.props.styles, "day", {}), $g.get(this.props.styles, "today", {}), process.env.NODE_ENV === "production" ? "" : ";label:Calendar;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK1FjIiwiZmlsZSI6Ii9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcnJ1bGVzdHIgfSBmcm9tIFwicnJ1bGVcIjtcblxuLy9AdHMtaWdub3JlXG5pbXBvcnQgZ3VkIGZyb20gXCJndWRcIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VzLCBhdmFpbGFibGVMYW5ndWFnZXMgfSBmcm9tIFwiLi9sYW5ndWFnZXNcIjtcbmltcG9ydCBNdWx0aUV2ZW50IGZyb20gXCIuL211bHRpRXZlbnRcIjtcbmltcG9ydCB7IENhbGVuZGFyUHJvcHMsIENhbGVuZGFyU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgRXZlbnRQcm9wcyB9IGZyb20gXCIuL3R5cGVzL2V2ZW50XCI7XG5pbXBvcnQgeyBNdWx0aUV2ZW50UHJvcHMgfSBmcm9tIFwiLi90eXBlcy9tdWx0aUV2ZW50XCI7XG5pbXBvcnQgeyBnZXRFdmVudHNMaXN0LCBsb2FkQ2FsZW5kYXJBUEkgfSBmcm9tIFwiLi91dGlscy9nb29nbGVDYWxlbmRhckFQSVwiO1xuaW1wb3J0IHsgaXNNdWx0aUV2ZW50LCB0b19kYXRldGltZSB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgQ2FsZW5kYXJQcm9wcyxcbiAgQ2FsZW5kYXJTdGF0ZVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYWxlbmRhclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb250aE5hbWVzOiBbLi4uTGFuZ3VhZ2VzLkVOLk1PTlRIU10sXG4gICAgICBkYXlzOiBbLi4uTGFuZ3VhZ2VzLkVOLkRBWVNdLFxuICAgICAgdG9kYXk6IERhdGVUaW1lLm5vdygpLFxuICAgICAgY3VycmVudDogRGF0ZVRpbWUudXRjKCkuc3RhcnRPZihcIm1vbnRoXCIpLCAvL2N1cnJlbnQgcG9zaXRpb24gb24gY2FsZW5kYXIgKGZpcnN0IGRheSBvZiBtb250aClcbiAgICAgIGNhbGVuZGFyczogW10sXG4gICAgICBldmVudHM6IFtdLCAvL2FsbCBkYXkgb3IgbXVsdGkgZGF5IGV2ZW50c1xuICAgICAgc2luZ2xlRXZlbnRzOiBbXSwgLy9zaW5nbGUgZGF5IGV2ZW50c1xuICAgICAgdXNlclRpbWV6b25lOiBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IFwic3lzdGVtXCIgfSkuem9uZSxcbiAgICAgIHNob3dGb290ZXI6IHByb3BzLnNob3dGb290ZXIgfHwgdHJ1ZSxcbiAgICAgIHNob3dBcnJvdzogcHJvcHMuc2hvd0Fycm93IHx8IHRydWUsXG4gICAgICBwcm9jZXNzZWRDYWxlbmRhcnM6IFtdLFxuICAgIH07XG5cbiAgICB0aGlzLmxhc3RNb250aCA9IHRoaXMubGFzdE1vbnRoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0TW9udGggPSB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5sYW5ndWFnZSAmJlxuICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzLmluY2x1ZGVzKHRoaXMucHJvcHMubGFuZ3VhZ2UudG9VcHBlckNhc2UoKSlcbiAgICApIHtcbiAgICAgIC8vIHRyeSB0byBjaGFuZ2UgbGFuZ3VhZ2VcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLnByb3BzLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIG1vbnRoTmFtZXM6IFsuLi5MYW5ndWFnZXNbbGFuZ10uTU9OVEhTXSxcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBkYXlzOiBbLi4uTGFuZ3VhZ2VzW2xhbmddLkRBWVNdLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hvb3NpbmcgYSBuZXcgbGFuZ3VhZ2VcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9pbml0IGFuZCBsb2FkIGdvb2dsZSBjYWxlbmRhciBhcGlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgbG9hZENhbGVuZGFyQVBJKHRoaXMucHJvcHMuYXBpS2V5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIEdBUEkgY2xpZW50IGZvciBBUElcIiwgZXJyKTtcbiAgICB9XG5cbiAgICAvL0dldCBldmVudHMgZnJvbSBhbGwgY2FsZW5kYXJzXG4gICAgZm9yIChsZXQgY2FsZW5kYXIgb2YgdGhpcy5wcm9wcy5jYWxlbmRhcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vcXVlcnkgYXBpIGZvciBldmVudHNcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RXZlbnRzTGlzdChjYWxlbmRhci5jYWxlbmRhcklkKTtcblxuICAgICAgICAvL3Byb2Nlc3MgZXZlbnRzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLnByb2Nlc3NFdmVudHMoXG4gICAgICAgICAgcmVzLnJlc3VsdC5pdGVtcyxcbiAgICAgICAgICByZXMucmVzdWx0LnN1bW1hcnksXG4gICAgICAgICAgY2FsZW5kYXIuY29sb3IgPz8gXCJcIixcbiAgICAgICAgKTtcblxuICAgICAgICAvL2ZpeCBkdXBsaWNhdGUgY2FsZW5kYXJzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5wcm9jZXNzZWRDYWxlbmRhcnMuaW5jbHVkZXMoY2FsZW5kYXIuY2FsZW5kYXJJZCkpIHtcbiAgICAgICAgICAvL3NldCBzdGF0ZSB3aXRoIGNhbGN1bGF0ZWQgdmFsdWVzXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBldmVudHM6IFsuLi50aGlzLnN0YXRlLmV2ZW50cywgLi4uZXZlbnRzWzBdXSxcbiAgICAgICAgICAgIHNpbmdsZUV2ZW50czogWy4uLnRoaXMuc3RhdGUuc2luZ2xlRXZlbnRzLCAuLi5ldmVudHNbMV1dLFxuICAgICAgICAgICAgcHJvY2Vzc2VkQ2FsZW5kYXJzOiBbXG4gICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJvY2Vzc2VkQ2FsZW5kYXJzLFxuICAgICAgICAgICAgICBjYWxlbmRhci5jYWxlbmRhcklkLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGV2ZW50c1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vZ2V0IGVhc3kgdG8gd29yayB3aXRoIGV2ZW50cyBhbmQgc2luZ2xlRXZlbnRzIGZyb20gcmVzcG9uc2VcbiAgcHJvY2Vzc0V2ZW50cyhpdGVtczogYW55W10sIGNhbGVuZGFyTmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogYW55W10ge1xuICAgIGxldCBzaW5nbGVFdmVudHM6IGFueVtdID0gW107XG4gICAgbGV0IGV2ZW50czogYW55W10gPSBbXTtcbiAgICBsZXQgY2hhbmdlZDogYW55W10gPSBbXTtcbiAgICBsZXQgY2FuY2VsbGVkOiBhbnlbXSA9IFtdO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5vcmlnaW5hbFN0YXJ0VGltZSkge1xuICAgICAgICAvL2NhbmNlbGxlZCBvciBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBpZiAoZXZlbnQuc3RhdHVzID09IFwiY2FuY2VsbGVkXCIpIHtcbiAgICAgICAgICAvL2NhbmNlbGxlZCBldmVudHNcbiAgICAgICAgICBjYW5jZWxsZWQucHVzaCh7XG4gICAgICAgICAgICByZWN1cnJpbmdFdmVudElkOiBldmVudC5yZWN1cnJpbmdFdmVudElkLFxuICAgICAgICAgICAgb3JpZ2luYWxTdGFydFRpbWU6IGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGUpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNvbmZpcm1lZFwiKSB7XG4gICAgICAgICAgLy9jaGFuZ2VkIGV2ZW50c1xuICAgICAgICAgIGNoYW5nZWQucHVzaCh7XG4gICAgICAgICAgICByZWN1cnJpbmdFdmVudElkOiBldmVudC5yZWN1cnJpbmdFdmVudElkLFxuICAgICAgICAgICAgbmFtZTogZXZlbnQuc3VtbWFyeSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRUaW1lOiBldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0VGltZTogZXZlbnQuc3RhcnQuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZSksXG4gICAgICAgICAgICBuZXdFbmRUaW1lOiBldmVudC5lbmQuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBjYXRlZ29yaXplZDogXCIsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5zdGF0dXMgPT0gXCJjb25maXJtZWRcIikge1xuICAgICAgICAvL25vcm1hbCBldmVudHNcbiAgICAgICAgbGV0IG5ld0V2ZW50ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudC5zdW1tYXJ5LFxuICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnQuc3RhcnQuZGF0ZVRpbWVcbiAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlVGltZSlcbiAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlKSxcbiAgICAgICAgICBlbmRUaW1lOiBldmVudC5lbmQuZGF0ZVRpbWVcbiAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZVRpbWUpXG4gICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGUpLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgcmVjdXJyZW5jZTogZXZlbnQucmVjdXJyZW5jZSxcbiAgICAgICAgICBjaGFuZ2VkRXZlbnRzOiBbXSxcbiAgICAgICAgICBjYW5jZWxsZWRFdmVudHM6IFtdLFxuICAgICAgICAgIGNhbGVuZGFyTmFtZTogY2FsZW5kYXJOYW1lLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNNdWx0aUV2ZW50KG5ld0V2ZW50LnN0YXJ0VGltZSwgbmV3RXZlbnQuZW5kVGltZSkpIHtcbiAgICAgICAgICBldmVudHMucHVzaChuZXdFdmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2luZ2xlRXZlbnRzLnB1c2gobmV3RXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBjYXRlZ29yaXplZDogXCIsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vYWRkIGNoYW5nZWQgZXZlbnRzIGFuZCBjYW5jZWxsZWQgZXZlbnRzIHRvIGNvcnJlc3BvbmRpbmcgZXZlbnQgb2JqZWN0XG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgLy9wdXNoIGNoYW5nZWQgZXZlbnRzXG4gICAgICAgIGNoYW5nZWRcbiAgICAgICAgICAuZmlsdGVyKChjaGFuZ2UpID0+IGNoYW5nZS5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNoYW5nZWRFdmVudHMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vcHVzaCBjYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgIGNhbmNlbGxlZFxuICAgICAgICAgIC5maWx0ZXIoKGNhbmNlbCkgPT4gY2FuY2VsLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNhbmNlbCkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2FuY2VsbGVkRXZlbnRzLnB1c2goY2FuY2VsLm9yaWdpbmFsU3RhcnRUaW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNpbmdsZUV2ZW50cy5mb3JFYWNoKChldmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIC8vcHVzaCBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBjaGFuZ2VkXG4gICAgICAgICAgLmZpbHRlcigoY2hhbmdlKSA9PiBjaGFuZ2UucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jaGFuZ2VkRXZlbnRzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvL3B1c2ggY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICBjYW5jZWxsZWRcbiAgICAgICAgICAuZmlsdGVyKChjYW5jZWwpID0+IGNhbmNlbC5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjYW5jZWwpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNhbmNlbGxlZEV2ZW50cy5wdXNoKGNhbmNlbC5vcmlnaW5hbFN0YXJ0VGltZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2V2ZW50cywgc2luZ2xlRXZlbnRzXTtcbiAgfVxuXG4gIC8vc2V0cyBjdXJyZW50IG1vbnRoIHRvIHByZXZpb3VzIG1vbnRoXG4gIGxhc3RNb250aCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50Lm1pbnVzKHsgbW9udGg6IDEgfSkgfSk7XG4gIH1cblxuICAvL3NldHMgY3VycmVudCBtb250aCB0byBmb2xsb3dpbmcgbW9udGhcbiAgbmV4dE1vbnRoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50OiB0aGlzLnN0YXRlLmN1cnJlbnQucGx1cyh7IG1vbnRoOiAxIH0pIH0pO1xuICB9XG5cbiAgY2xlYXJFdmVudHMoKSB7XG4gICAgbGV0IGRheXNJbk1vbnRoID0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGU6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5LVwiICsgaSk7XG4gICAgICB3aGlsZSAobm9kZS5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL3JlbmRlcnMgdGhlIGRheSBvZiB3ZWVrIG5hbWVzXG4gIHJlbmRlckRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF5cy5tYXAoKHgsIGkpID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZGF5LW5hbWVcIlxuICAgICAgICBrZXk9e1wiZGF5LW9mLXdlZWstXCIgKyBpfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB7IGJvcmRlckNvbG9yOiBcIkxpZ2h0R3JheVwiIH0sXG4gICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAge3h9XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgfVxuXG4gIC8vcmVuZGVycyB0aGUgYmxvY2tzIGZvciB0aGUgZGF5cyBvZiBlYWNoIG1vbnRoXG4gIHJlbmRlckRhdGVzKGV2ZW50c0VhY2hEYXk6IGFueVtdKTogYW55W10ge1xuICAgIGxldCBjdXJyZW50RGF5c0luTW9udGggPSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzA7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCBkYXlzID0gWy4uLkFycmF5KGN1cnJlbnREYXlzSW5Nb250aCArIDEpLmtleXMoKV0uc2xpY2UoMSk7IC8vIGNyZWF0ZSBhcnJheSBmcm9tIDEgdG8gbnVtYmVyIG9mIGRheXMgaW4gbW9udGhcbiAgICBsZXQgZGF5T2ZXZWVrID0gdGhpcy5zdGF0ZS5jdXJyZW50LndlZWtkYXk7IC8vZ2V0IGRheSBvZiB3ZWVrIG9mIGZpcnN0IGRheSBpbiB0aGUgbW9udGhcbiAgICBsZXQgcGFkRGF5cyA9XG4gICAgICAoKCgtY3VycmVudERheXNJbk1vbnRoIC0gdGhpcy5zdGF0ZS5jdXJyZW50LndlZWtkYXkpICUgNykgKyA3KSAlIDc7IC8vbnVtYmVyIG9mIGRheXMgdG8gZmlsbCBvdXQgdGhlIGxhc3Qgcm93XG5cbiAgICByZXR1cm4gW1xuICAgICAgWy4uLkFycmF5KGRheU9mV2VlayldLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICBrZXk9e1wiZW1wdHktZGF5LVwiICsgaX1cbiAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICkpLFxuICAgICAgZGF5cy5tYXAoKHgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHggPT0gdGhpcy5zdGF0ZS50b2RheS5kYXkgJiZcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQuaGFzU2FtZSh0aGlzLnN0YXRlLnRvZGF5LCBcIm1vbnRoXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAgICAgIGtleT17XCJkYXktXCIgKyB4fVxuICAgICAgICAgICAgICBjc3M9e1tcbiAgICAgICAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pLFxuICAgICAgICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvZGF5XCIsIHt9KSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3h9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckRheVwiIGlkPXtcImRheS1cIiArIHh9PlxuICAgICAgICAgICAgICAgIHtldmVudHNFYWNoRGF5W3ggLSAxXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAgICAgIGtleT17XCJkYXktXCIgKyB4fVxuICAgICAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEYXlcIiBpZD17XCJkYXktXCIgKyB4fT5cbiAgICAgICAgICAgICAgICB7ZXZlbnRzRWFjaERheVt4IC0gMV19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBbLi4uQXJyYXkocGFkRGF5cyldLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgICBrZXk9e1wiZW1wdHktZGF5LTItXCIgKyBpfVxuICAgICAgICAgIGNzcz17Xy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKSksXG4gICAgXTtcbiAgfVxuXG4gIC8vZ2V0IGFycmF5IG9mIGFycmF5cyBvZiBsZW5ndGggZGF5cyBpbiBtb250aCBjb250YWluaW5nIHRoZSBldmVudHMgaW4gZWFjaCBkYXlcbiAgZ2V0UmVuZGVyRXZlbnRzKGV2ZW50czogYW55W10sIHNpbmdsZUV2ZW50czogYW55W10pIHtcbiAgICBsZXQgZXZlbnRzRWFjaERheSA9IFsuLi5BcnJheSh0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggPz8gMzApXS5tYXAoXG4gICAgICAoZSkgPT4gW10sXG4gICAgKTsgLy9jcmVhdGUgYXJyYXkgb2YgZW1wdHkgYXJyYXlzIG9mIGxlbmd0aCBkYXlzSW5Nb250aFxuICAgIGxldCBldmVudHNUb1JlbmRlcjogRXZlbnRQcm9wc1tdID0gW107XG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB0b19kYXRldGltZShldmVudC5lbmRUaW1lKS5kaWZmKFxuICAgICAgICAgIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSksXG4gICAgICAgICk7XG4gICAgICAgIGxldCBkYXRlcyA9IENhbGVuZGFyLmdldERhdGVzRnJvbVJSdWxlKFxuICAgICAgICAgIGV2ZW50LnJlY3VycmVuY2VbMF0sXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLFxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5taW51cyhkdXJhdGlvbiksXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LnBsdXMoeyBtb250aDogMSB9KSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL3JlbmRlciByZWN1cnJlbmNlc1xuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgICAgLy9kb24ndCByZW5kZXIgaWYgaXQgaXMgY2FuY2VsbGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQuY2FuY2VsbGVkRXZlbnRzLnNvbWUoKGNhbmNlbGxlZE1vbWVudDogYW55KSA9PlxuICAgICAgICAgICAgICBjYW5jZWxsZWRNb21lbnQuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcHJvcHM6IEV2ZW50UHJvcHM7XG4gICAgICAgICAgLy91cGRhdGUgaW5mb3JtYXRpb24gaWYgZXZlbnQgaGFzIGNoYW5nZWRcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkRXZlbnQgPSBldmVudC5jaGFuZ2VkRXZlbnRzLmZpbmQoKGNoYW5nZWRFdmVudDogYW55KSA9PlxuICAgICAgICAgICAgY2hhbmdlZEV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoY2hhbmdlZEV2ZW50KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogY2hhbmdlZEV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogY2hhbmdlZEV2ZW50Lm5ld1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogY2hhbmdlZEV2ZW50Lm5ld0VuZFRpbWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGFuZ2VkRXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBjaGFuZ2VkRXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRTdGFydCA9IERhdGVUaW1lLmZyb21NaWxsaXMoZGF0ZS5nZXRUaW1lKCksIHtcbiAgICAgICAgICAgICAgem9uZTogXCJ1dGNcIixcbiAgICAgICAgICAgIH0pOyAvL3NpbmNlIHJydWxlIHdvcmtzIHdpdGggdXRjIHRpbWVzXG4gICAgICAgICAgICBsZXQgZXZlbnRFbmQgPSBldmVudFN0YXJ0LnBsdXMoZHVyYXRpb24pO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnRTdGFydCxcbiAgICAgICAgICAgICAgZW5kVGltZTogZXZlbnRFbmQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnRzVG9SZW5kZXIucHVzaChwcm9wcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9yZW5kZXIgZXZlbnRcbiAgICAgICAgLy9jaGVjayBpZiBldmVudCBpcyBpbiByYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgKChldmVudC5zdGFydFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoIHx8XG4gICAgICAgICAgICBldmVudC5zdGFydFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhcikgJiZcbiAgICAgICAgICAgIGV2ZW50LmVuZFRpbWUubW9udGggIT0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1vbnRoKSB8fFxuICAgICAgICAgIGV2ZW50LmVuZFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhclxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzVG9SZW5kZXIucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudHNUb1JlbmRlciA9IGV2ZW50c1RvUmVuZGVyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHMgIT0gMCkge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGIuZW5kVGltZS5kaWZmKGEuZW5kVGltZSkubWlsbGlzZWNvbmRzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnRzVG9SZW5kZXIuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZHJhd011bHRpRXZlbnQoZXZlbnRzRWFjaERheSwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgbGV0IGV2ZW50UHJvcHMgPSB7XG4gICAgICB0b29sdGlwU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b29sdGlwXCIsIHt9KSwgLy9nZXRzIHRoaXMucHJvcHMuc3R5bGVzLnRvb2x0aXAgaWYgZXhpc3RzLCBlbHNlIGVtcHR5IG9iamVjdFxuICAgICAgZXZlbnRTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50XCIsIHt9KSxcbiAgICAgIGV2ZW50Q2lyY2xlU3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudENpcmNsZVwiLCB7fSksXG4gICAgICBldmVudFRleHRTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImV2ZW50VGV4dFwiLCB7fSksXG4gICAgfTtcblxuICAgIGxldCBzaW5nbGVFdmVudHNUb1JlbmRlcjogRXZlbnRQcm9wc1tdID0gW107XG4gICAgc2luZ2xlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB0b19kYXRldGltZShldmVudC5lbmRUaW1lKS5kaWZmKFxuICAgICAgICAgIHRvX2RhdGV0aW1lKGV2ZW50LnN0YXJ0VGltZSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9nZXQgcmVjdXJyZW5jZXMgdXNpbmcgUlJ1bGVcbiAgICAgICAgbGV0IGRhdGVzID0gQ2FsZW5kYXIuZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgICAgICAgZXZlbnQucmVjdXJyZW5jZVswXSxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUsXG4gICAgICAgICAgdG9fZGF0ZXRpbWUodGhpcy5zdGF0ZS5jdXJyZW50KSxcbiAgICAgICAgICB0b19kYXRldGltZSh0aGlzLnN0YXRlLmN1cnJlbnQpLnBsdXMoeyBtb250aDogMSB9KSxcbiAgICAgICAgKTtcblxuICAgICAgICAvL3JlbmRlciByZWN1cnJlbmNlc1xuICAgICAgICBkYXRlcy5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgICAgLy9jaGVjayBpZiBpdCBpcyBpbiBjYW5jZWxsZWRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC5jYW5jZWxsZWRFdmVudHMuc29tZSgoY2FuY2VsbGVkTW9tZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgIGNhbmNlbGxlZE1vbWVudC5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vaWYgZXZlbnQgaGFzIGNoYW5nZWRcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkRXZlbnQgPSBldmVudC5jaGFuZ2VkRXZlbnRzLmZpbmQoKGNoYW5nZWRFdmVudDogYW55KSA9PlxuICAgICAgICAgICAgY2hhbmdlZEV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgcHJvcHM6IEV2ZW50UHJvcHM7XG4gICAgICAgICAgaWYgKGNoYW5nZWRFdmVudCkge1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGNoYW5nZWRFdmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGNoYW5nZWRFdmVudC5uZXdTdGFydFRpbWUsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGNoYW5nZWRFdmVudC5uZXdFbmRUaW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbmdlZEV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogY2hhbmdlZEV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV2ZW50U3RhcnQgPSBEYXRlVGltZS5mcm9tTWlsbGlzKGRhdGUuZ2V0VGltZSgpLCB7XG4gICAgICAgICAgICAgIHpvbmU6IFwidXRjXCIsXG4gICAgICAgICAgICB9KTsgLy9hdm9pZCBiYWQgdGltZXpvbmUgY29udmVyc2lvbnNcbiAgICAgICAgICAgIGxldCBldmVudEVuZCA9IGV2ZW50U3RhcnQucGx1cyhkdXJhdGlvbik7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogZXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBldmVudFN0YXJ0LFxuICAgICAgICAgICAgICBlbmRUaW1lOiBldmVudEVuZCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICAgIGNhbGVuZGFyTmFtZTogZXZlbnQuY2FsZW5kYXJOYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogZXZlbnQuY29sb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLnB1c2gocHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY2hlY2sgaWYgZXZlbnQgaXMgaW4gY3VycmVudCBtb250aFxuICAgICAgICBpZiAoXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCB8fFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS55ZWFyICE9IHRoaXMuc3RhdGUuY3VycmVudC55ZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNpbmdsZUV2ZW50c1RvUmVuZGVyID0gc2luZ2xlRXZlbnRzVG9SZW5kZXIuc29ydChcbiAgICAgIChhLCBiKSA9PiBhLnN0YXJ0VGltZS5kaWZmKGIuc3RhcnRUaW1lKS5taWxsaXNlY29uZHMsXG4gICAgKTtcbiAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJTaW5nbGVFdmVudChldmVudHNFYWNoRGF5LCB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLmRheSwge1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgLi4uZXZlbnRQcm9wcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGV2ZW50c0VhY2hEYXk7XG4gIH1cblxuICAvL1RPRE86IHJlZmFjdG9yXG4gIC8vZGVjaWRlcyBob3cgdG8gcmVuZGVyIGV2ZW50c1xuICBkcmF3TXVsdGlFdmVudChldmVudHNFYWNoRGF5OiBhbnlbXSwgcHJvcHM6IE11bHRpRXZlbnRQcm9wcykge1xuICAgIGxldCBzdGFydERyYXdEYXRlO1xuICAgIGxldCBibG9ja0xlbmd0aCA9IDE7XG4gICAgbGV0IGN1ckRhdGU6IERhdGVUaW1lO1xuICAgIGxldCBlbmREYXRlOiBEYXRlVGltZTtcblxuICAgIGxldCBhcnJvd0xlZnQgPSBmYWxzZTtcbiAgICBsZXQgYXJyb3dSaWdodCA9IGZhbHNlO1xuXG4gICAgaWYgKHByb3BzLmVuZFRpbWUuaGFzU2FtZShwcm9wcy5lbmRUaW1lLnN0YXJ0T2YoXCJkYXlcIiksIFwic2Vjb25kXCIpKSB7XG4gICAgICBlbmREYXRlID0gcHJvcHMuZW5kVGltZVxuICAgICAgICAuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSlcbiAgICAgICAgLm1pbnVzKHsgZGF5OiAxIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmREYXRlID0gdG9fZGF0ZXRpbWUocHJvcHMuZW5kVGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7XG4gICAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0b19kYXRldGltZShwcm9wcy5zdGFydFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pIDxcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFxuICAgICkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Fycm93KSB7XG4gICAgICAgIGFycm93TGVmdCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0RHJhd0RhdGUgPSAxO1xuICAgICAgY3VyRGF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnREcmF3RGF0ZSA9IHByb3BzLnN0YXJ0VGltZS5kYXk7XG4gICAgICBjdXJEYXRlID0gdG9fZGF0ZXRpbWUocHJvcHMuc3RhcnRUaW1lKS5zZXRab25lKFwidXRjXCIsIHtcbiAgICAgICAga2VlcExvY2FsVGltZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdoaWxlIChjdXJEYXRlLnN0YXJ0T2YoXCJkYXlcIikgPD0gZW5kRGF0ZS5zdGFydE9mKFwiZGF5XCIpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1ckRhdGUuZGF5ID09IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCAmJlxuICAgICAgICAhZW5kRGF0ZS5oYXNTYW1lKHRoaXMuc3RhdGUuY3VycmVudCwgXCJtb250aFwiKVxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBcnJvdykge1xuICAgICAgICAgIGFycm93UmlnaHQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kcmF3IHRoZW4gcXVpdFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBjdXJEYXRlLmRheSA9PSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggfHxcbiAgICAgICAgY3VyRGF0ZS5oYXNTYW1lKGVuZERhdGUsIFwiZGF5XCIpXG4gICAgICApIHtcbiAgICAgICAgLy9kcmF3IHRoZW4gcXVpdFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGN1ckRhdGUud2Vla2RheSA9PSA2KSB7XG4gICAgICAgIC8vZHJhdyB0aGVuIHJlc2V0XG4gICAgICAgIHRoaXMucmVuZGVyTXVsdGlFdmVudEJsb2NrKFxuICAgICAgICAgIGV2ZW50c0VhY2hEYXksXG4gICAgICAgICAgc3RhcnREcmF3RGF0ZSxcbiAgICAgICAgICBibG9ja0xlbmd0aCxcbiAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICBhcnJvd0xlZnQsXG4gICAgICAgICAgYXJyb3dSaWdodCxcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnREcmF3RGF0ZSA9IGN1ckRhdGUucGx1cyh7IGRheTogMSB9KS5kYXk7XG4gICAgICAgIGJsb2NrTGVuZ3RoID0gMDtcbiAgICAgICAgYXJyb3dMZWZ0ID0gZmFsc2U7XG4gICAgICAgIGFycm93UmlnaHQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgYmxvY2tMZW5ndGgrKztcbiAgICAgIGN1ckRhdGUgPSBjdXJEYXRlLnBsdXMoeyBkYXk6IDEgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9UT0RPOiByZWZhY3RvciB0aGlzIHRvbz9cbiAgLy9oYW5kbGVzIHJlbmRlcmluZyBhbmQgcHJvcGVyIHN0YWNraW5nIG9mIGluZGl2aWR1YWwgYmxvY2tzXG4gIHJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICBldmVudHNFYWNoRGF5OiBhbnlbXSxcbiAgICBzdGFydERhdGU6IGFueSxcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICBwcm9wczogYW55LFxuICAgIGFycm93TGVmdDogYm9vbGVhbixcbiAgICBhcnJvd1JpZ2h0OiBib29sZWFuLFxuICApIHtcbiAgICBsZXQgbXVsdGlFdmVudFByb3BzID0ge1xuICAgICAgdG9vbHRpcFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9vbHRpcFwiLCB7fSksIC8vZ2V0cyB0aGlzLnByb3BzLnN0eWxlcy50b29sdGlwIGlmIGV4aXN0cywgZWxzZSBlbXB0eSBvYmplY3RcbiAgICAgIG11bHRpRXZlbnRTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcIm11bHRpRXZlbnRcIiwge30pLFxuICAgIH07XG5cbiAgICBsZXQgbWF4QmxvY2tzID0gMDtcbiAgICBsZXQgY2xvc2VkU2xvdHM6IGFueVtdID0gW107IC8va2VlcCB0cmFjayBvZiByb3dzIHRoYXQgdGhlIGV2ZW50IGNhbid0IGJlIGluc2VydGVkIGludG9cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXlFdmVudHMgPSBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXTtcbiAgICAgIGlmIChkYXlFdmVudHMubGVuZ3RoID4gbWF4QmxvY2tzKSB7XG4gICAgICAgIG1heEJsb2NrcyA9IGRheUV2ZW50cy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIC8vYWRkcmVzcyByb3dzIHRoYXQgYXJlIG5vdCB0aGUgbGFzdCBlbGVtZW50IGluIGNsb3NlZFNsb3RzXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heEJsb2NrczsgaisrKSB7XG4gICAgICAgIGlmIChqID4gZGF5RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKGNsb3NlZFNsb3RzLmluY2x1ZGVzKGopKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheUV2ZW50c1tqXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJpc0V2ZW50XCIpKSB7XG4gICAgICAgICAgY2xvc2VkU2xvdHMucHVzaChqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjaG9zZW5Sb3cgPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBtYXhCbG9ja3M7IGkrKykge1xuICAgICAgaWYgKCFjbG9zZWRTbG90cy5pbmNsdWRlcyhpKSkge1xuICAgICAgICBjaG9zZW5Sb3cgPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2ZpbGwgaW4gcGxhY2Vob2xkZXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy9wbGFjZWhvbGRlcnNcbiAgICAgIHdoaWxlIChldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXS5sZW5ndGggPD0gY2hvc2VuUm93KSB7XG4gICAgICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldLnB1c2goXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXZlbnQgYmVsb3cgcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAga2V5PXtgcGxhY2Vob2xkZXItJHtndWQoKX1gfVxuICAgICAgICAgID48L2Rpdj4sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vcmVzdCBvZiBldmVudCB0aGF0IGlzIHVuZGVyIHRoZSBtYWluIGJhbm5lclxuICAgICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV1bY2hvc2VuUm93XSA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50IGV2ZW50IGJlbG93XCIga2V5PXtgZmlsbGVyLSR7Z3VkKCl9YH0+PC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vcmVuZGVyIGV2ZW50XG4gICAgZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxXVtjaG9zZW5Sb3ddID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgbXVsdGktZXZlbnQtJHtjaG9zZW5Sb3d9YH0+XG4gICAgICAgIDxNdWx0aUV2ZW50XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHsuLi5tdWx0aUV2ZW50UHJvcHN9XG4gICAgICAgICAgbGVuZ3RoPXtsZW5ndGh9XG4gICAgICAgICAgYXJyb3dMZWZ0PXthcnJvd0xlZnR9XG4gICAgICAgICAgYXJyb3dSaWdodD17YXJyb3dSaWdodH1cbiAgICAgICAgICBrZXk9e2BtdWx0aS1ldmVudC0ke2d1ZCgpfWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy9hdHRlbXB0cyB0byByZW5kZXIgaW4gYSBwbGFjZWhvbGRlciB0aGVuIGF0IHRoZSBlbmRcbiAgcmVuZGVyU2luZ2xlRXZlbnQoZXZlbnRzRWFjaERheTogYW55W10sIGRhdGU6IG51bWJlciwgZXZlbnQ6IEV2ZW50UHJvcHMpIHtcbiAgICBsZXQgZm91bmRFbXB0eSA9IGZhbHNlO1xuICAgIGxldCBub2RlcyA9IGV2ZW50c0VhY2hEYXlbZGF0ZSAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZXNbaV0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZXZlbnRcIikgJiZcbiAgICAgICAgIW5vZGVzW2ldLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImlzRXZlbnRcIilcbiAgICAgICkge1xuICAgICAgICAvL3RhcmdldCBvbmx5IHBsYWNlaG9sZGVyc1xuICAgICAgICBub2Rlc1tpXSA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfT5cbiAgICAgICAgICAgIDxFdmVudCB7Li4uZXZlbnR9IGtleT17YHNpbmdsZS1ldmVudC0ke2d1ZCgpfWB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICAgIGZvdW5kRW1wdHkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZEVtcHR5KSB7XG4gICAgICBldmVudHNFYWNoRGF5W2RhdGUgLSAxXS5wdXNoKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzRXZlbnRcIiBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfT5cbiAgICAgICAgICA8RXZlbnQgey4uLmV2ZW50fSBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfSAvPlxuICAgICAgICA8L2Rpdj4sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vZ2V0IGRhdGVzIGJhc2VkIG9uIHJydWxlIHN0cmluZyBiZXR3ZWVuIGRhdGVzXG4gIHN0YXRpYyBnZXREYXRlc0Zyb21SUnVsZShcbiAgICBzdHI6IHN0cmluZyxcbiAgICBldmVudFN0YXJ0OiBEYXRlVGltZSxcbiAgICBiZXR3ZWVuU3RhcnQ6IERhdGVUaW1lLFxuICAgIGJldHdlZW5FbmQ6IERhdGVUaW1lLFxuICApIHtcbiAgICAvL2dldCByZWN1cnJlbmNlcyB1c2luZyBSUnVsZVxuICAgIGxldCByc3RyID0gYERUU1RBUlQ6JHtldmVudFN0YXJ0LnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pLnRvRm9ybWF0KFwieXl5eU1NZGQnVCdISG1tc3NcIil9WlxcbiR7c3RyfWA7XG4gICAgbGV0IHJydWxlU2V0ID0gcnJ1bGVzdHIocnN0ciwgeyBmb3JjZXNldDogdHJ1ZSB9KTtcblxuICAgIC8vZ2V0IGRhdGVzXG4gICAgbGV0IGJlZ2luID0gYmV0d2VlblN0YXJ0LnRvVVRDKCkudG9KU0RhdGUoKTtcbiAgICBsZXQgZW5kID0gYmV0d2VlbkVuZC50b1VUQygpLnRvSlNEYXRlKCk7XG4gICAgbGV0IGRhdGVzID0gcnJ1bGVTZXQuYmV0d2VlbihiZWdpbiwgZW5kKTtcbiAgICByZXR1cm4gZGF0ZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGV2ZW50c0VhY2hEYXkgPSB0aGlzLmdldFJlbmRlckV2ZW50cyhcbiAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLFxuICAgICAgdGhpcy5zdGF0ZS5zaW5nbGVFdmVudHMsXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhclwiXG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiTGlnaHRHcmF5XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjNTE1NjVkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJjYWxlbmRhclwiLCB7fSksXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXItbmF2aWdhdGUgdW5zZWxlY3RhYmxlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubGFzdE1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjMTAwOTQ7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYWxlbmRhci10aXRsZVwiPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tb250aE5hbWVzW3RoaXMuc3RhdGUuY3VycmVudC5tb250aCAtIDFdICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJ9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyLW5hdmlnYXRlIHVuc2VsZWN0YWJsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRNb250aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzEwMDk1O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1ib2R5XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyRGF5cygpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckRhdGVzKGV2ZW50c0VhY2hEYXkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Zvb3RlciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFsbCB0aW1lcyBzaG93biB5b3VyIHRpbWV6b25lICh7dGhpcy5zdGF0ZS51c2VyVGltZXpvbmUubmFtZX0pXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgXCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvcj9jaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxlbmRhcnNbMF0uY2FsZW5kYXJJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICYjNDM7IEFkZCBDYWxlbmRhclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"], children: [
      /* @__PURE__ */ Q("span", { css: Bx, children: b }),
      /* @__PURE__ */ Q("div", { className: "innerDay", id: "day-" + b, children: I[b - 1] })
    ] }, "day-" + b) : /* @__PURE__ */ eg("div", { className: "day", css: $g.get(this.props.styles, "day", {}), children: [
      /* @__PURE__ */ Q("span", { css: xx, children: b }),
      /* @__PURE__ */ Q("div", { className: "innerDay", id: "day-" + b, children: I[b - 1] })
    ] }, "day-" + b)), [...Array(l)].map((b, u) => /* @__PURE__ */ Q("div", { className: "day", css: $g.get(this.props.styles, "day", {}) }, "empty-day-2-" + u))];
  }
  //get array of arrays of length days in month containing the events in each day
  getRenderEvents(I, C) {
    let t = [...Array(this.state.current.daysInMonth ?? 30)].map((u) => []), i = [];
    I.forEach((u) => {
      if (u.recurrence) {
        let G = bg(u.endTime).diff(bg(u.startTime));
        Vn.getDatesFromRRule(u.recurrence[0], u.startTime, this.state.current.minus(G), this.state.current.plus({
          month: 1
        })).forEach((s) => {
          if (u.cancelledEvents.some((m) => m.hasSame(s, "day")))
            return;
          let o;
          const R = u.changedEvents.find((m) => m.originalStartTime.hasSame(s, "day"));
          if (R)
            o = {
              name: R.name,
              startTime: R.newStartTime,
              endTime: R.newEndTime,
              description: R.description,
              location: R.location,
              calendarName: u.calendarName,
              color: u.color
            };
          else {
            let m = cI.fromMillis(s.getTime(), {
              zone: "utc"
            }), F = m.plus(G);
            o = {
              name: u.name,
              startTime: m,
              endTime: F,
              description: u.description,
              location: u.location,
              calendarName: u.calendarName,
              color: u.color
            };
          }
          i.push(o);
        });
      } else {
        if ((u.startTime.month != this.state.current.month || u.startTime.year != this.state.current.year) && u.endTime.month != this.state.current.month || u.endTime.year != this.state.current.year)
          return;
        i.push(u);
      }
    }), i = i.sort((u, G) => u.startTime.diff(G.startTime).milliseconds != 0 ? u.startTime.diff(G.startTime).milliseconds : G.endTime.diff(u.endTime).milliseconds), i.forEach((u) => {
      this.drawMultiEvent(t, u);
    });
    let l = {
      tooltipStyles: $g.get(this.props.styles, "tooltip", {}),
      //gets this.props.styles.tooltip if exists, else empty object
      eventStyles: $g.get(this.props.styles, "event", {}),
      eventCircleStyles: $g.get(this.props.styles, "eventCircle", {}),
      eventTextStyles: $g.get(this.props.styles, "eventText", {})
    }, b = [];
    return C.forEach((u) => {
      if (u.recurrence) {
        let G = bg(u.endTime).diff(bg(u.startTime));
        Vn.getDatesFromRRule(u.recurrence[0], u.startTime, bg(this.state.current), bg(this.state.current).plus({
          month: 1
        })).forEach((s) => {
          if (u.cancelledEvents.some((m) => m.hasSame(s, "day")))
            return;
          const o = u.changedEvents.find((m) => m.originalStartTime.hasSame(s, "day"));
          let R;
          if (o)
            R = {
              name: o.name,
              startTime: o.newStartTime,
              endTime: o.newEndTime,
              description: o.description,
              location: o.location,
              calendarName: u.calendarName,
              color: u.color
            };
          else {
            let m = cI.fromMillis(s.getTime(), {
              zone: "utc"
            }), F = m.plus(G);
            R = {
              name: u.name,
              startTime: m,
              endTime: F,
              description: u.description,
              location: u.location,
              calendarName: u.calendarName,
              color: u.color
            };
          }
          b.push(R);
        });
      } else {
        if (u.startTime.month != this.state.current.month || u.startTime.year != this.state.current.year)
          return;
        b.push(u);
      }
    }), b = b.sort((u, G) => u.startTime.diff(G.startTime).milliseconds), b.forEach((u) => {
      this.renderSingleEvent(t, bg(u.startTime).day, {
        ...u,
        ...l
      });
    }), t;
  }
  //TODO: refactor
  //decides how to render events
  drawMultiEvent(I, C) {
    let t, i = 1, l, b, u = !1, G = !1;
    for (C.endTime.hasSame(C.endTime.startOf("day"), "second") ? b = C.endTime.setZone("utc", {
      keepLocalTime: !0
    }).minus({
      day: 1
    }) : b = bg(C.endTime).setZone("utc", {
      keepLocalTime: !0
    }), bg(C.startTime).setZone("utc", {
      keepLocalTime: !0
    }) < this.state.current ? (this.state.showArrow && (u = !0), t = 1, l = this.state.current) : (t = C.startTime.day, l = bg(C.startTime).setZone("utc", {
      keepLocalTime: !0
    })); l.startOf("day") <= b.startOf("day"); ) {
      if (l.day == this.state.current.daysInMonth && !b.hasSame(this.state.current, "month")) {
        this.state.showArrow && (G = !0), this.renderMultiEventBlock(I, t, i, C, u, G);
        break;
      }
      if (l.day == this.state.current.daysInMonth || l.hasSame(b, "day")) {
        this.renderMultiEventBlock(I, t, i, C, u, G);
        break;
      }
      l.weekday == 6 && (this.renderMultiEventBlock(I, t, i, C, u, G), t = l.plus({
        day: 1
      }).day, i = 0, u = !1, G = !1), i++, l = l.plus({
        day: 1
      });
    }
  }
  //TODO: refactor this too?
  //handles rendering and proper stacking of individual blocks
  renderMultiEventBlock(I, C, t, i, l, b) {
    let u = {
      tooltipStyles: $g.get(this.props.styles, "tooltip", {}),
      //gets this.props.styles.tooltip if exists, else empty object
      multiEventStyles: $g.get(this.props.styles, "multiEvent", {})
    }, G = 0, X = [];
    for (let o = 0; o < t; o++) {
      let R = I[C - 1 + o];
      R.length > G && (G = R.length);
      for (let m = 0; m < G && !(m > R.length); m++) {
        if (X.includes(m))
          continue;
        R[m].props.className.includes("isEvent") && X.push(m);
      }
    }
    let s = -1;
    for (let o = 0; o <= G; o++)
      if (!X.includes(o)) {
        s = o;
        break;
      }
    for (let o = 0; o < t; o++) {
      for (; I[C - 1 + o].length <= s; )
        I[C - 1 + o].push(/* @__PURE__ */ Q("div", { className: "event below placeholder" }, `placeholder-${EA()}`));
      I[C - 1 + o][s] = /* @__PURE__ */ Q("div", { className: "isEvent event below" }, `filler-${EA()}`);
    }
    I[C - 1][s] = /* @__PURE__ */ Q("div", { className: "isEvent", children: /* @__PURE__ */ Tl(mx, { ...i, ...u, length: t, arrowLeft: l, arrowRight: b, key: `multi-event-${EA()}` }) }, `multi-event-${s}`);
  }
  //attempts to render in a placeholder then at the end
  renderSingleEvent(I, C, t) {
    let i = !1, l = I[C - 1];
    for (let b = 0; b < l.length; b++)
      if (l[b].props.className.includes("event") && !l[b].props.className.includes("isEvent")) {
        l[b] = /* @__PURE__ */ Q("div", { className: "isEvent", children: /* @__PURE__ */ Tl(Ya, { ...t, key: `single-event-${EA()}` }) }, `single-event-${EA()}`), i = !0;
        break;
      }
    i || I[C - 1].push(/* @__PURE__ */ Q("div", { className: "isEvent", children: /* @__PURE__ */ Tl(Ya, { ...t, key: `single-event-${EA()}` }) }, `single-event-${EA()}`));
  }
  //get dates based on rrule string between dates
  static getDatesFromRRule(I, C, t, i) {
    let l = `DTSTART:${C.setZone("utc", {
      keepLocalTime: !0
    }).toFormat("yyyyMMdd'T'HHmmss")}Z
${I}`, b = Zn(l, {
      forceset: !0
    }), u = t.toUTC().toJSDate(), G = i.toUTC().toJSDate();
    return b.between(u, G);
  }
  render() {
    let I = this.getRenderEvents(this.state.events, this.state.singleEvents);
    return /* @__PURE__ */ eg("div", { className: "calendar", css: ["font-size:18px;border:1px solid;min-width:300px;position:relative;border-color:LightGray;color:#51565d;", $g.get(this.props.styles, "calendar", {}), process.env.NODE_ENV === "production" ? "" : ";label:Calendar;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYWtoL0RvY3VtZW50cy9vdGhlci1naXQvcmVhY3QtZ29vZ2xlLWNhbGVuZGFyL3NyYy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb3RCUSIsImZpbGUiOiIvaG9tZS9jaGFraC9Eb2N1bWVudHMvb3RoZXItZ2l0L3JlYWN0LWdvb2dsZS1jYWxlbmRhci9zcmMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJydWxlc3RyIH0gZnJvbSBcInJydWxlXCI7XG5cbi8vQHRzLWlnbm9yZVxuaW1wb3J0IGd1ZCBmcm9tIFwiZ3VkXCI7XG5cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IExhbmd1YWdlcywgYXZhaWxhYmxlTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgTXVsdGlFdmVudCBmcm9tIFwiLi9tdWx0aUV2ZW50XCI7XG5pbXBvcnQgeyBDYWxlbmRhclByb3BzLCBDYWxlbmRhclN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEV2ZW50UHJvcHMgfSBmcm9tIFwiLi90eXBlcy9ldmVudFwiO1xuaW1wb3J0IHsgTXVsdGlFdmVudFByb3BzIH0gZnJvbSBcIi4vdHlwZXMvbXVsdGlFdmVudFwiO1xuaW1wb3J0IHsgZ2V0RXZlbnRzTGlzdCwgbG9hZENhbGVuZGFyQVBJIH0gZnJvbSBcIi4vdXRpbHMvZ29vZ2xlQ2FsZW5kYXJBUElcIjtcbmltcG9ydCB7IGlzTXVsdGlFdmVudCwgdG9fZGF0ZXRpbWUgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIENhbGVuZGFyUHJvcHMsXG4gIENhbGVuZGFyU3RhdGVcbj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FsZW5kYXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9udGhOYW1lczogWy4uLkxhbmd1YWdlcy5FTi5NT05USFNdLFxuICAgICAgZGF5czogWy4uLkxhbmd1YWdlcy5FTi5EQVlTXSxcbiAgICAgIHRvZGF5OiBEYXRlVGltZS5ub3coKSxcbiAgICAgIGN1cnJlbnQ6IERhdGVUaW1lLnV0YygpLnN0YXJ0T2YoXCJtb250aFwiKSwgLy9jdXJyZW50IHBvc2l0aW9uIG9uIGNhbGVuZGFyIChmaXJzdCBkYXkgb2YgbW9udGgpXG4gICAgICBjYWxlbmRhcnM6IFtdLFxuICAgICAgZXZlbnRzOiBbXSwgLy9hbGwgZGF5IG9yIG11bHRpIGRheSBldmVudHNcbiAgICAgIHNpbmdsZUV2ZW50czogW10sIC8vc2luZ2xlIGRheSBldmVudHNcbiAgICAgIHVzZXJUaW1lem9uZTogRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiBcInN5c3RlbVwiIH0pLnpvbmUsXG4gICAgICBzaG93Rm9vdGVyOiBwcm9wcy5zaG93Rm9vdGVyIHx8IHRydWUsXG4gICAgICBzaG93QXJyb3c6IHByb3BzLnNob3dBcnJvdyB8fCB0cnVlLFxuICAgICAgcHJvY2Vzc2VkQ2FsZW5kYXJzOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5sYXN0TW9udGggPSB0aGlzLmxhc3RNb250aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dE1vbnRoID0gdGhpcy5uZXh0TW9udGguYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMubGFuZ3VhZ2UgJiZcbiAgICAgIGF2YWlsYWJsZUxhbmd1YWdlcy5pbmNsdWRlcyh0aGlzLnByb3BzLmxhbmd1YWdlLnRvVXBwZXJDYXNlKCkpXG4gICAgKSB7XG4gICAgICAvLyB0cnkgdG8gY2hhbmdlIGxhbmd1YWdlXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5wcm9wcy5sYW5ndWFnZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICBtb250aE5hbWVzOiBbLi4uTGFuZ3VhZ2VzW2xhbmddLk1PTlRIU10sXG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgZGF5czogWy4uLkxhbmd1YWdlc1tsYW5nXS5EQVlTXSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNob29zaW5nIGEgbmV3IGxhbmd1YWdlXCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vaW5pdCBhbmQgbG9hZCBnb29nbGUgY2FsZW5kYXIgYXBpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvYWRDYWxlbmRhckFQSSh0aGlzLnByb3BzLmFwaUtleSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBHQVBJIGNsaWVudCBmb3IgQVBJXCIsIGVycik7XG4gICAgfVxuXG4gICAgLy9HZXQgZXZlbnRzIGZyb20gYWxsIGNhbGVuZGFyc1xuICAgIGZvciAobGV0IGNhbGVuZGFyIG9mIHRoaXMucHJvcHMuY2FsZW5kYXJzKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvL3F1ZXJ5IGFwaSBmb3IgZXZlbnRzXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEV2ZW50c0xpc3QoY2FsZW5kYXIuY2FsZW5kYXJJZCk7XG5cbiAgICAgICAgLy9wcm9jZXNzIGV2ZW50c1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5wcm9jZXNzRXZlbnRzKFxuICAgICAgICAgIHJlcy5yZXN1bHQuaXRlbXMsXG4gICAgICAgICAgcmVzLnJlc3VsdC5zdW1tYXJ5LFxuICAgICAgICAgIGNhbGVuZGFyLmNvbG9yID8/IFwiXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9maXggZHVwbGljYXRlIGNhbGVuZGFyc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucHJvY2Vzc2VkQ2FsZW5kYXJzLmluY2x1ZGVzKGNhbGVuZGFyLmNhbGVuZGFySWQpKSB7XG4gICAgICAgICAgLy9zZXQgc3RhdGUgd2l0aCBjYWxjdWxhdGVkIHZhbHVlc1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXZlbnRzOiBbLi4udGhpcy5zdGF0ZS5ldmVudHMsIC4uLmV2ZW50c1swXV0sXG4gICAgICAgICAgICBzaW5nbGVFdmVudHM6IFsuLi50aGlzLnN0YXRlLnNpbmdsZUV2ZW50cywgLi4uZXZlbnRzWzFdXSxcbiAgICAgICAgICAgIHByb2Nlc3NlZENhbGVuZGFyczogW1xuICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnByb2Nlc3NlZENhbGVuZGFycyxcbiAgICAgICAgICAgICAgY2FsZW5kYXIuY2FsZW5kYXJJZCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBldmVudHNcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL2dldCBlYXN5IHRvIHdvcmsgd2l0aCBldmVudHMgYW5kIHNpbmdsZUV2ZW50cyBmcm9tIHJlc3BvbnNlXG4gIHByb2Nlc3NFdmVudHMoaXRlbXM6IGFueVtdLCBjYWxlbmRhck5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IGFueVtdIHtcbiAgICBsZXQgc2luZ2xlRXZlbnRzOiBhbnlbXSA9IFtdO1xuICAgIGxldCBldmVudHM6IGFueVtdID0gW107XG4gICAgbGV0IGNoYW5nZWQ6IGFueVtdID0gW107XG4gICAgbGV0IGNhbmNlbGxlZDogYW55W10gPSBbXTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQub3JpZ2luYWxTdGFydFRpbWUpIHtcbiAgICAgICAgLy9jYW5jZWxsZWQgb3IgY2hhbmdlZCBldmVudHNcbiAgICAgICAgaWYgKGV2ZW50LnN0YXR1cyA9PSBcImNhbmNlbGxlZFwiKSB7XG4gICAgICAgICAgLy9jYW5jZWxsZWQgZXZlbnRzXG4gICAgICAgICAgY2FuY2VsbGVkLnB1c2goe1xuICAgICAgICAgICAgcmVjdXJyaW5nRXZlbnRJZDogZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRUaW1lOiBldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlVGltZVxuICAgICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5vcmlnaW5hbFN0YXJ0VGltZS5kYXRlKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zdGF0dXMgPT0gXCJjb25maXJtZWRcIikge1xuICAgICAgICAgIC8vY2hhbmdlZCBldmVudHNcbiAgICAgICAgICBjaGFuZ2VkLnB1c2goe1xuICAgICAgICAgICAgcmVjdXJyaW5nRXZlbnRJZDogZXZlbnQucmVjdXJyaW5nRXZlbnRJZCxcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnN1bW1hcnksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogZXZlbnQubG9jYXRpb24sXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0VGltZTogZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZVRpbWVcbiAgICAgICAgICAgICAgPyBEYXRlVGltZS5mcm9tSVNPKGV2ZW50Lm9yaWdpbmFsU3RhcnRUaW1lLmRhdGVUaW1lKVxuICAgICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQub3JpZ2luYWxTdGFydFRpbWUuZGF0ZSksXG4gICAgICAgICAgICBuZXdTdGFydFRpbWU6IGV2ZW50LnN0YXJ0LmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5zdGFydC5kYXRlVGltZSlcbiAgICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LnN0YXJ0LmRhdGUpLFxuICAgICAgICAgICAgbmV3RW5kVGltZTogZXZlbnQuZW5kLmRhdGVUaW1lXG4gICAgICAgICAgICAgID8gRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZVRpbWUpXG4gICAgICAgICAgICAgIDogRGF0ZVRpbWUuZnJvbUlTTyhldmVudC5lbmQuZGF0ZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJOb3QgY2F0ZWdvcml6ZWQ6IFwiLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc3RhdHVzID09IFwiY29uZmlybWVkXCIpIHtcbiAgICAgICAgLy9ub3JtYWwgZXZlbnRzXG4gICAgICAgIGxldCBuZXdFdmVudCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgbmFtZTogZXZlbnQuc3VtbWFyeSxcbiAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50LnN0YXJ0LmRhdGVUaW1lXG4gICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZVRpbWUpXG4gICAgICAgICAgICA6IERhdGVUaW1lLmZyb21JU08oZXZlbnQuc3RhcnQuZGF0ZSksXG4gICAgICAgICAgZW5kVGltZTogZXZlbnQuZW5kLmRhdGVUaW1lXG4gICAgICAgICAgICA/IERhdGVUaW1lLmZyb21JU08oZXZlbnQuZW5kLmRhdGVUaW1lKVxuICAgICAgICAgICAgOiBEYXRlVGltZS5mcm9tSVNPKGV2ZW50LmVuZC5kYXRlKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgIHJlY3VycmVuY2U6IGV2ZW50LnJlY3VycmVuY2UsXG4gICAgICAgICAgY2hhbmdlZEV2ZW50czogW10sXG4gICAgICAgICAgY2FuY2VsbGVkRXZlbnRzOiBbXSxcbiAgICAgICAgICBjYWxlbmRhck5hbWU6IGNhbGVuZGFyTmFtZSxcbiAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGlzTXVsdGlFdmVudChuZXdFdmVudC5zdGFydFRpbWUsIG5ld0V2ZW50LmVuZFRpbWUpKSB7XG4gICAgICAgICAgZXZlbnRzLnB1c2gobmV3RXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpbmdsZUV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgY2F0ZWdvcml6ZWQ6IFwiLCBldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2FkZCBjaGFuZ2VkIGV2ZW50cyBhbmQgY2FuY2VsbGVkIGV2ZW50cyB0byBjb3JyZXNwb25kaW5nIGV2ZW50IG9iamVjdFxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgIGlmIChldmVudC5yZWN1cnJlbmNlKSB7XG4gICAgICAgIC8vcHVzaCBjaGFuZ2VkIGV2ZW50c1xuICAgICAgICBjaGFuZ2VkXG4gICAgICAgICAgLmZpbHRlcigoY2hhbmdlKSA9PiBjaGFuZ2UucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jaGFuZ2VkRXZlbnRzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAvL3B1c2ggY2FuY2VsbGVkIGV2ZW50c1xuICAgICAgICBjYW5jZWxsZWRcbiAgICAgICAgICAuZmlsdGVyKChjYW5jZWwpID0+IGNhbmNlbC5yZWN1cnJpbmdFdmVudElkID09IGV2ZW50LmlkKVxuICAgICAgICAgIC5mb3JFYWNoKChjYW5jZWwpID0+IHtcbiAgICAgICAgICAgIGFycltpZHhdLmNhbmNlbGxlZEV2ZW50cy5wdXNoKGNhbmNlbC5vcmlnaW5hbFN0YXJ0VGltZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaW5nbGVFdmVudHMuZm9yRWFjaCgoZXZlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICBpZiAoZXZlbnQucmVjdXJyZW5jZSkge1xuICAgICAgICAvL3B1c2ggY2hhbmdlZCBldmVudHNcbiAgICAgICAgY2hhbmdlZFxuICAgICAgICAgIC5maWx0ZXIoKGNoYW5nZSkgPT4gY2hhbmdlLnJlY3VycmluZ0V2ZW50SWQgPT0gZXZlbnQuaWQpXG4gICAgICAgICAgLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICAgICAgYXJyW2lkeF0uY2hhbmdlZEV2ZW50cy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9wdXNoIGNhbmNlbGxlZCBldmVudHNcbiAgICAgICAgY2FuY2VsbGVkXG4gICAgICAgICAgLmZpbHRlcigoY2FuY2VsKSA9PiBjYW5jZWwucmVjdXJyaW5nRXZlbnRJZCA9PSBldmVudC5pZClcbiAgICAgICAgICAuZm9yRWFjaCgoY2FuY2VsKSA9PiB7XG4gICAgICAgICAgICBhcnJbaWR4XS5jYW5jZWxsZWRFdmVudHMucHVzaChjYW5jZWwub3JpZ2luYWxTdGFydFRpbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtldmVudHMsIHNpbmdsZUV2ZW50c107XG4gIH1cblxuICAvL3NldHMgY3VycmVudCBtb250aCB0byBwcmV2aW91cyBtb250aFxuICBsYXN0TW9udGgoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudC5taW51cyh7IG1vbnRoOiAxIH0pIH0pO1xuICB9XG5cbiAgLy9zZXRzIGN1cnJlbnQgbW9udGggdG8gZm9sbG93aW5nIG1vbnRoXG4gIG5leHRNb250aCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LnBsdXMoeyBtb250aDogMSB9KSB9KTtcbiAgfVxuXG4gIGNsZWFyRXZlbnRzKCkge1xuICAgIGxldCBkYXlzSW5Nb250aCA9IHRoaXMuc3RhdGUuY3VycmVudC5kYXlzSW5Nb250aCA/PyAzMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS1cIiArIGkpO1xuICAgICAgd2hpbGUgKG5vZGUubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9yZW5kZXJzIHRoZSBkYXkgb2Ygd2VlayBuYW1lc1xuICByZW5kZXJEYXlzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRheXMubWFwKCh4LCBpKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRheS1uYW1lXCJcbiAgICAgICAga2V5PXtcImRheS1vZi13ZWVrLVwiICsgaX1cbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAgeyBib3JkZXJDb2xvcjogXCJMaWdodEdyYXlcIiB9LFxuICAgICAgICAgIF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSksXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIHt4fVxuICAgICAgPC9kaXY+XG4gICAgKSk7XG4gIH1cblxuICAvL3JlbmRlcnMgdGhlIGJsb2NrcyBmb3IgdGhlIGRheXMgb2YgZWFjaCBtb250aFxuICByZW5kZXJEYXRlcyhldmVudHNFYWNoRGF5OiBhbnlbXSk6IGFueVtdIHtcbiAgICBsZXQgY3VycmVudERheXNJbk1vbnRoID0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBsZXQgZGF5cyA9IFsuLi5BcnJheShjdXJyZW50RGF5c0luTW9udGggKyAxKS5rZXlzKCldLnNsaWNlKDEpOyAvLyBjcmVhdGUgYXJyYXkgZnJvbSAxIHRvIG51bWJlciBvZiBkYXlzIGluIG1vbnRoXG4gICAgbGV0IGRheU9mV2VlayA9IHRoaXMuc3RhdGUuY3VycmVudC53ZWVrZGF5OyAvL2dldCBkYXkgb2Ygd2VlayBvZiBmaXJzdCBkYXkgaW4gdGhlIG1vbnRoXG4gICAgbGV0IHBhZERheXMgPVxuICAgICAgKCgoLWN1cnJlbnREYXlzSW5Nb250aCAtIHRoaXMuc3RhdGUuY3VycmVudC53ZWVrZGF5KSAlIDcpICsgNykgJSA3OyAvL251bWJlciBvZiBkYXlzIHRvIGZpbGwgb3V0IHRoZSBsYXN0IHJvd1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIFsuLi5BcnJheShkYXlPZldlZWspXS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAga2V5PXtcImVtcHR5LWRheS1cIiArIGl9XG4gICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICA+PC9kaXY+XG4gICAgICApKSxcbiAgICAgIGRheXMubWFwKCh4KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB4ID09IHRoaXMuc3RhdGUudG9kYXkuZGF5ICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Lmhhc1NhbWUodGhpcy5zdGF0ZS50b2RheSwgXCJtb250aFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgICAgICBrZXk9e1wiZGF5LVwiICsgeH1cbiAgICAgICAgICAgICAgY3NzPXtbXG4gICAgICAgICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZGF5XCIsIHt9KSxcbiAgICAgICAgICAgICAgICBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJ0b2RheVwiLCB7fSksXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt4fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEYXlcIiBpZD17XCJkYXktXCIgKyB4fT5cbiAgICAgICAgICAgICAgICB7ZXZlbnRzRWFjaERheVt4IC0gMV19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXlcIlxuICAgICAgICAgICAgICBrZXk9e1wiZGF5LVwiICsgeH1cbiAgICAgICAgICAgICAgY3NzPXtfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJkYXlcIiwge30pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGF5XCIgaWQ9e1wiZGF5LVwiICsgeH0+XG4gICAgICAgICAgICAgICAge2V2ZW50c0VhY2hEYXlbeCAtIDFdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgWy4uLkFycmF5KHBhZERheXMpXS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICAgICAga2V5PXtcImVtcHR5LWRheS0yLVwiICsgaX1cbiAgICAgICAgICBjc3M9e18uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcImRheVwiLCB7fSl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgICkpLFxuICAgIF07XG4gIH1cblxuICAvL2dldCBhcnJheSBvZiBhcnJheXMgb2YgbGVuZ3RoIGRheXMgaW4gbW9udGggY29udGFpbmluZyB0aGUgZXZlbnRzIGluIGVhY2ggZGF5XG4gIGdldFJlbmRlckV2ZW50cyhldmVudHM6IGFueVtdLCBzaW5nbGVFdmVudHM6IGFueVtdKSB7XG4gICAgbGV0IGV2ZW50c0VhY2hEYXkgPSBbLi4uQXJyYXkodGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoID8/IDMwKV0ubWFwKFxuICAgICAgKGUpID0+IFtdLFxuICAgICk7IC8vY3JlYXRlIGFycmF5IG9mIGVtcHR5IGFycmF5cyBvZiBsZW5ndGggZGF5c0luTW9udGhcbiAgICBsZXQgZXZlbnRzVG9SZW5kZXI6IEV2ZW50UHJvcHNbXSA9IFtdO1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9fZGF0ZXRpbWUoZXZlbnQuZW5kVGltZSkuZGlmZihcbiAgICAgICAgICB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLFxuICAgICAgICApO1xuICAgICAgICBsZXQgZGF0ZXMgPSBDYWxlbmRhci5nZXREYXRlc0Zyb21SUnVsZShcbiAgICAgICAgICBldmVudC5yZWN1cnJlbmNlWzBdLFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnQubWludXMoZHVyYXRpb24pLFxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC5wbHVzKHsgbW9udGg6IDEgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZW5kZXIgcmVjdXJyZW5jZXNcbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgIC8vZG9uJ3QgcmVuZGVyIGlmIGl0IGlzIGNhbmNlbGxlZFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LmNhbmNlbGxlZEV2ZW50cy5zb21lKChjYW5jZWxsZWRNb21lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgY2FuY2VsbGVkTW9tZW50Lmhhc1NhbWUoZGF0ZSwgXCJkYXlcIiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHByb3BzOiBFdmVudFByb3BzO1xuICAgICAgICAgIC8vdXBkYXRlIGluZm9ybWF0aW9uIGlmIGV2ZW50IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgY29uc3QgY2hhbmdlZEV2ZW50ID0gZXZlbnQuY2hhbmdlZEV2ZW50cy5maW5kKChjaGFuZ2VkRXZlbnQ6IGFueSkgPT5cbiAgICAgICAgICAgIGNoYW5nZWRFdmVudC5vcmlnaW5hbFN0YXJ0VGltZS5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGNoYW5nZWRFdmVudCkge1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGNoYW5nZWRFdmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGNoYW5nZWRFdmVudC5uZXdTdGFydFRpbWUsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGNoYW5nZWRFdmVudC5uZXdFbmRUaW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbmdlZEV2ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogY2hhbmdlZEV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV2ZW50U3RhcnQgPSBEYXRlVGltZS5mcm9tTWlsbGlzKGRhdGUuZ2V0VGltZSgpLCB7XG4gICAgICAgICAgICAgIHpvbmU6IFwidXRjXCIsXG4gICAgICAgICAgICB9KTsgLy9zaW5jZSBycnVsZSB3b3JrcyB3aXRoIHV0YyB0aW1lc1xuICAgICAgICAgICAgbGV0IGV2ZW50RW5kID0gZXZlbnRTdGFydC5wbHVzKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBldmVudC5uYW1lLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IGV2ZW50U3RhcnQsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IGV2ZW50RW5kLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50c1RvUmVuZGVyLnB1c2gocHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vcmVuZGVyIGV2ZW50XG4gICAgICAgIC8vY2hlY2sgaWYgZXZlbnQgaXMgaW4gcmFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoZXZlbnQuc3RhcnRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCB8fFxuICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXIpICYmXG4gICAgICAgICAgICBldmVudC5lbmRUaW1lLm1vbnRoICE9IHRoaXMuc3RhdGUuY3VycmVudC5tb250aCkgfHxcbiAgICAgICAgICBldmVudC5lbmRUaW1lLnllYXIgIT0gdGhpcy5zdGF0ZS5jdXJyZW50LnllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50c1RvUmVuZGVyLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnRzVG9SZW5kZXIgPSBldmVudHNUb1JlbmRlci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzICE9IDApIHtcbiAgICAgICAgcmV0dXJuIGEuc3RhcnRUaW1lLmRpZmYoYi5zdGFydFRpbWUpLm1pbGxpc2Vjb25kcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiLmVuZFRpbWUuZGlmZihhLmVuZFRpbWUpLm1pbGxpc2Vjb25kcztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50c1RvUmVuZGVyLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXdNdWx0aUV2ZW50KGV2ZW50c0VhY2hEYXksIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGxldCBldmVudFByb3BzID0ge1xuICAgICAgdG9vbHRpcFN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwidG9vbHRpcFwiLCB7fSksIC8vZ2V0cyB0aGlzLnByb3BzLnN0eWxlcy50b29sdGlwIGlmIGV4aXN0cywgZWxzZSBlbXB0eSBvYmplY3RcbiAgICAgIGV2ZW50U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudFwiLCB7fSksXG4gICAgICBldmVudENpcmNsZVN0eWxlczogXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiZXZlbnRDaXJjbGVcIiwge30pLFxuICAgICAgZXZlbnRUZXh0U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJldmVudFRleHRcIiwge30pLFxuICAgIH07XG5cbiAgICBsZXQgc2luZ2xlRXZlbnRzVG9SZW5kZXI6IEV2ZW50UHJvcHNbXSA9IFtdO1xuICAgIHNpbmdsZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlY3VycmVuY2UpIHtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9fZGF0ZXRpbWUoZXZlbnQuZW5kVGltZSkuZGlmZihcbiAgICAgICAgICB0b19kYXRldGltZShldmVudC5zdGFydFRpbWUpLFxuICAgICAgICApO1xuXG4gICAgICAgIC8vZ2V0IHJlY3VycmVuY2VzIHVzaW5nIFJSdWxlXG4gICAgICAgIGxldCBkYXRlcyA9IENhbGVuZGFyLmdldERhdGVzRnJvbVJSdWxlKFxuICAgICAgICAgIGV2ZW50LnJlY3VycmVuY2VbMF0sXG4gICAgICAgICAgZXZlbnQuc3RhcnRUaW1lLFxuICAgICAgICAgIHRvX2RhdGV0aW1lKHRoaXMuc3RhdGUuY3VycmVudCksXG4gICAgICAgICAgdG9fZGF0ZXRpbWUodGhpcy5zdGF0ZS5jdXJyZW50KS5wbHVzKHsgbW9udGg6IDEgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9yZW5kZXIgcmVjdXJyZW5jZXNcbiAgICAgICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgIC8vY2hlY2sgaWYgaXQgaXMgaW4gY2FuY2VsbGVkXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQuY2FuY2VsbGVkRXZlbnRzLnNvbWUoKGNhbmNlbGxlZE1vbWVudDogYW55KSA9PlxuICAgICAgICAgICAgICBjYW5jZWxsZWRNb21lbnQuaGFzU2FtZShkYXRlLCBcImRheVwiKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2lmIGV2ZW50IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgY29uc3QgY2hhbmdlZEV2ZW50ID0gZXZlbnQuY2hhbmdlZEV2ZW50cy5maW5kKChjaGFuZ2VkRXZlbnQ6IGFueSkgPT5cbiAgICAgICAgICAgIGNoYW5nZWRFdmVudC5vcmlnaW5hbFN0YXJ0VGltZS5oYXNTYW1lKGRhdGUsIFwiZGF5XCIpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgbGV0IHByb3BzOiBFdmVudFByb3BzO1xuICAgICAgICAgIGlmIChjaGFuZ2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgICBuYW1lOiBjaGFuZ2VkRXZlbnQubmFtZSxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3U3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBjaGFuZ2VkRXZlbnQubmV3RW5kVGltZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5nZWRFdmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGNoYW5nZWRFdmVudC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgY2FsZW5kYXJOYW1lOiBldmVudC5jYWxlbmRhck5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBldmVudC5jb2xvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBldmVudFN0YXJ0ID0gRGF0ZVRpbWUuZnJvbU1pbGxpcyhkYXRlLmdldFRpbWUoKSwge1xuICAgICAgICAgICAgICB6b25lOiBcInV0Y1wiLFxuICAgICAgICAgICAgfSk7IC8vYXZvaWQgYmFkIHRpbWV6b25lIGNvbnZlcnNpb25zXG4gICAgICAgICAgICBsZXQgZXZlbnRFbmQgPSBldmVudFN0YXJ0LnBsdXMoZHVyYXRpb24pO1xuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IGV2ZW50Lm5hbWUsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogZXZlbnRTdGFydCxcbiAgICAgICAgICAgICAgZW5kVGltZTogZXZlbnRFbmQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgbG9jYXRpb246IGV2ZW50LmxvY2F0aW9uLFxuICAgICAgICAgICAgICBjYWxlbmRhck5hbWU6IGV2ZW50LmNhbGVuZGFyTmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGV2ZW50LmNvbG9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5wdXNoKHByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NoZWNrIGlmIGV2ZW50IGlzIGluIGN1cnJlbnQgbW9udGhcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZS5tb250aCAhPSB0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggfHxcbiAgICAgICAgICBldmVudC5zdGFydFRpbWUueWVhciAhPSB0aGlzLnN0YXRlLmN1cnJlbnQueWVhclxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzaW5nbGVFdmVudHNUb1JlbmRlci5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzaW5nbGVFdmVudHNUb1JlbmRlciA9IHNpbmdsZUV2ZW50c1RvUmVuZGVyLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYS5zdGFydFRpbWUuZGlmZihiLnN0YXJ0VGltZSkubWlsbGlzZWNvbmRzLFxuICAgICk7XG4gICAgc2luZ2xlRXZlbnRzVG9SZW5kZXIuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyU2luZ2xlRXZlbnQoZXZlbnRzRWFjaERheSwgdG9fZGF0ZXRpbWUoZXZlbnQuc3RhcnRUaW1lKS5kYXksIHtcbiAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgIC4uLmV2ZW50UHJvcHMsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudHNFYWNoRGF5O1xuICB9XG5cbiAgLy9UT0RPOiByZWZhY3RvclxuICAvL2RlY2lkZXMgaG93IHRvIHJlbmRlciBldmVudHNcbiAgZHJhd011bHRpRXZlbnQoZXZlbnRzRWFjaERheTogYW55W10sIHByb3BzOiBNdWx0aUV2ZW50UHJvcHMpIHtcbiAgICBsZXQgc3RhcnREcmF3RGF0ZTtcbiAgICBsZXQgYmxvY2tMZW5ndGggPSAxO1xuICAgIGxldCBjdXJEYXRlOiBEYXRlVGltZTtcbiAgICBsZXQgZW5kRGF0ZTogRGF0ZVRpbWU7XG5cbiAgICBsZXQgYXJyb3dMZWZ0ID0gZmFsc2U7XG4gICAgbGV0IGFycm93UmlnaHQgPSBmYWxzZTtcblxuICAgIGlmIChwcm9wcy5lbmRUaW1lLmhhc1NhbWUocHJvcHMuZW5kVGltZS5zdGFydE9mKFwiZGF5XCIpLCBcInNlY29uZFwiKSkge1xuICAgICAgZW5kRGF0ZSA9IHByb3BzLmVuZFRpbWVcbiAgICAgICAgLnNldFpvbmUoXCJ1dGNcIiwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pXG4gICAgICAgIC5taW51cyh7IGRheTogMSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kRGF0ZSA9IHRvX2RhdGV0aW1lKHByb3BzLmVuZFRpbWUpLnNldFpvbmUoXCJ1dGNcIiwge1xuICAgICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdG9fZGF0ZXRpbWUocHJvcHMuc3RhcnRUaW1lKS5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KSA8XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnRcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBcnJvdykge1xuICAgICAgICBhcnJvd0xlZnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzdGFydERyYXdEYXRlID0gMTtcbiAgICAgIGN1ckRhdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0RHJhd0RhdGUgPSBwcm9wcy5zdGFydFRpbWUuZGF5O1xuICAgICAgY3VyRGF0ZSA9IHRvX2RhdGV0aW1lKHByb3BzLnN0YXJ0VGltZSkuc2V0Wm9uZShcInV0Y1wiLCB7XG4gICAgICAgIGtlZXBMb2NhbFRpbWU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY3VyRGF0ZS5zdGFydE9mKFwiZGF5XCIpIDw9IGVuZERhdGUuc3RhcnRPZihcImRheVwiKSkge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJEYXRlLmRheSA9PSB0aGlzLnN0YXRlLmN1cnJlbnQuZGF5c0luTW9udGggJiZcbiAgICAgICAgIWVuZERhdGUuaGFzU2FtZSh0aGlzLnN0YXRlLmN1cnJlbnQsIFwibW9udGhcIilcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QXJyb3cpIHtcbiAgICAgICAgICBhcnJvd1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZHJhdyB0aGVuIHF1aXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgY3VyRGF0ZS5kYXkgPT0gdGhpcy5zdGF0ZS5jdXJyZW50LmRheXNJbk1vbnRoIHx8XG4gICAgICAgIGN1ckRhdGUuaGFzU2FtZShlbmREYXRlLCBcImRheVwiKVxuICAgICAgKSB7XG4gICAgICAgIC8vZHJhdyB0aGVuIHF1aXRcbiAgICAgICAgdGhpcy5yZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgICAgICAgZXZlbnRzRWFjaERheSxcbiAgICAgICAgICBzdGFydERyYXdEYXRlLFxuICAgICAgICAgIGJsb2NrTGVuZ3RoLFxuICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIGFycm93TGVmdCxcbiAgICAgICAgICBhcnJvd1JpZ2h0LFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjdXJEYXRlLndlZWtkYXkgPT0gNikge1xuICAgICAgICAvL2RyYXcgdGhlbiByZXNldFxuICAgICAgICB0aGlzLnJlbmRlck11bHRpRXZlbnRCbG9jayhcbiAgICAgICAgICBldmVudHNFYWNoRGF5LFxuICAgICAgICAgIHN0YXJ0RHJhd0RhdGUsXG4gICAgICAgICAgYmxvY2tMZW5ndGgsXG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgYXJyb3dMZWZ0LFxuICAgICAgICAgIGFycm93UmlnaHQsXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0RHJhd0RhdGUgPSBjdXJEYXRlLnBsdXMoeyBkYXk6IDEgfSkuZGF5O1xuICAgICAgICBibG9ja0xlbmd0aCA9IDA7XG4gICAgICAgIGFycm93TGVmdCA9IGZhbHNlO1xuICAgICAgICBhcnJvd1JpZ2h0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGJsb2NrTGVuZ3RoKys7XG4gICAgICBjdXJEYXRlID0gY3VyRGF0ZS5wbHVzKHsgZGF5OiAxIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vVE9ETzogcmVmYWN0b3IgdGhpcyB0b28/XG4gIC8vaGFuZGxlcyByZW5kZXJpbmcgYW5kIHByb3BlciBzdGFja2luZyBvZiBpbmRpdmlkdWFsIGJsb2Nrc1xuICByZW5kZXJNdWx0aUV2ZW50QmxvY2soXG4gICAgZXZlbnRzRWFjaERheTogYW55W10sXG4gICAgc3RhcnREYXRlOiBhbnksXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgcHJvcHM6IGFueSxcbiAgICBhcnJvd0xlZnQ6IGJvb2xlYW4sXG4gICAgYXJyb3dSaWdodDogYm9vbGVhbixcbiAgKSB7XG4gICAgbGV0IG11bHRpRXZlbnRQcm9wcyA9IHtcbiAgICAgIHRvb2x0aXBTdHlsZXM6IF8uZ2V0KHRoaXMucHJvcHMuc3R5bGVzLCBcInRvb2x0aXBcIiwge30pLCAvL2dldHMgdGhpcy5wcm9wcy5zdHlsZXMudG9vbHRpcCBpZiBleGlzdHMsIGVsc2UgZW1wdHkgb2JqZWN0XG4gICAgICBtdWx0aUV2ZW50U3R5bGVzOiBfLmdldCh0aGlzLnByb3BzLnN0eWxlcywgXCJtdWx0aUV2ZW50XCIsIHt9KSxcbiAgICB9O1xuXG4gICAgbGV0IG1heEJsb2NrcyA9IDA7XG4gICAgbGV0IGNsb3NlZFNsb3RzOiBhbnlbXSA9IFtdOyAvL2tlZXAgdHJhY2sgb2Ygcm93cyB0aGF0IHRoZSBldmVudCBjYW4ndCBiZSBpbnNlcnRlZCBpbnRvXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZGF5RXZlbnRzID0gZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV07XG4gICAgICBpZiAoZGF5RXZlbnRzLmxlbmd0aCA+IG1heEJsb2Nrcykge1xuICAgICAgICBtYXhCbG9ja3MgPSBkYXlFdmVudHMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICAvL2FkZHJlc3Mgcm93cyB0aGF0IGFyZSBub3QgdGhlIGxhc3QgZWxlbWVudCBpbiBjbG9zZWRTbG90c1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhCbG9ja3M7IGorKykge1xuICAgICAgICBpZiAoaiA+IGRheUV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChjbG9zZWRTbG90cy5pbmNsdWRlcyhqKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXlFdmVudHNbal0ucHJvcHMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaXNFdmVudFwiKSkge1xuICAgICAgICAgIGNsb3NlZFNsb3RzLnB1c2goaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hvc2VuUm93ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4QmxvY2tzOyBpKyspIHtcbiAgICAgIGlmICghY2xvc2VkU2xvdHMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgY2hvc2VuUm93ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9maWxsIGluIHBsYWNlaG9sZGVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vcGxhY2Vob2xkZXJzXG4gICAgICB3aGlsZSAoZXZlbnRzRWFjaERheVtzdGFydERhdGUgLSAxICsgaV0ubGVuZ3RoIDw9IGNob3NlblJvdykge1xuICAgICAgICBldmVudHNFYWNoRGF5W3N0YXJ0RGF0ZSAtIDEgKyBpXS5wdXNoKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50IGJlbG93IHBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIGtleT17YHBsYWNlaG9sZGVyLSR7Z3VkKCl9YH1cbiAgICAgICAgICA+PC9kaXY+LFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvL3Jlc3Qgb2YgZXZlbnQgdGhhdCBpcyB1bmRlciB0aGUgbWFpbiBiYW5uZXJcbiAgICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMSArIGldW2Nob3NlblJvd10gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudCBldmVudCBiZWxvd1wiIGtleT17YGZpbGxlci0ke2d1ZCgpfWB9PjwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL3JlbmRlciBldmVudFxuICAgIGV2ZW50c0VhY2hEYXlbc3RhcnREYXRlIC0gMV1bY2hvc2VuUm93XSA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNFdmVudFwiIGtleT17YG11bHRpLWV2ZW50LSR7Y2hvc2VuUm93fWB9PlxuICAgICAgICA8TXVsdGlFdmVudFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB7Li4ubXVsdGlFdmVudFByb3BzfVxuICAgICAgICAgIGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGFycm93TGVmdD17YXJyb3dMZWZ0fVxuICAgICAgICAgIGFycm93UmlnaHQ9e2Fycm93UmlnaHR9XG4gICAgICAgICAga2V5PXtgbXVsdGktZXZlbnQtJHtndWQoKX1gfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vYXR0ZW1wdHMgdG8gcmVuZGVyIGluIGEgcGxhY2Vob2xkZXIgdGhlbiBhdCB0aGUgZW5kXG4gIHJlbmRlclNpbmdsZUV2ZW50KGV2ZW50c0VhY2hEYXk6IGFueVtdLCBkYXRlOiBudW1iZXIsIGV2ZW50OiBFdmVudFByb3BzKSB7XG4gICAgbGV0IGZvdW5kRW1wdHkgPSBmYWxzZTtcbiAgICBsZXQgbm9kZXMgPSBldmVudHNFYWNoRGF5W2RhdGUgLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG5vZGVzW2ldLnByb3BzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImV2ZW50XCIpICYmXG4gICAgICAgICFub2Rlc1tpXS5wcm9wcy5jbGFzc05hbWUuaW5jbHVkZXMoXCJpc0V2ZW50XCIpXG4gICAgICApIHtcbiAgICAgICAgLy90YXJnZXQgb25seSBwbGFjZWhvbGRlcnNcbiAgICAgICAgbm9kZXNbaV0gPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0+XG4gICAgICAgICAgICA8RXZlbnQgey4uLmV2ZW50fSBrZXk9e2BzaW5nbGUtZXZlbnQtJHtndWQoKX1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBmb3VuZEVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRFbXB0eSkge1xuICAgICAgZXZlbnRzRWFjaERheVtkYXRlIC0gMV0ucHVzaChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc0V2ZW50XCIga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0+XG4gICAgICAgICAgPEV2ZW50IHsuLi5ldmVudH0ga2V5PXtgc2luZ2xlLWV2ZW50LSR7Z3VkKCl9YH0gLz5cbiAgICAgICAgPC9kaXY+LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvL2dldCBkYXRlcyBiYXNlZCBvbiBycnVsZSBzdHJpbmcgYmV0d2VlbiBkYXRlc1xuICBzdGF0aWMgZ2V0RGF0ZXNGcm9tUlJ1bGUoXG4gICAgc3RyOiBzdHJpbmcsXG4gICAgZXZlbnRTdGFydDogRGF0ZVRpbWUsXG4gICAgYmV0d2VlblN0YXJ0OiBEYXRlVGltZSxcbiAgICBiZXR3ZWVuRW5kOiBEYXRlVGltZSxcbiAgKSB7XG4gICAgLy9nZXQgcmVjdXJyZW5jZXMgdXNpbmcgUlJ1bGVcbiAgICBsZXQgcnN0ciA9IGBEVFNUQVJUOiR7ZXZlbnRTdGFydC5zZXRab25lKFwidXRjXCIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS50b0Zvcm1hdChcInl5eXlNTWRkJ1QnSEhtbXNzXCIpfVpcXG4ke3N0cn1gO1xuICAgIGxldCBycnVsZVNldCA9IHJydWxlc3RyKHJzdHIsIHsgZm9yY2VzZXQ6IHRydWUgfSk7XG5cbiAgICAvL2dldCBkYXRlc1xuICAgIGxldCBiZWdpbiA9IGJldHdlZW5TdGFydC50b1VUQygpLnRvSlNEYXRlKCk7XG4gICAgbGV0IGVuZCA9IGJldHdlZW5FbmQudG9VVEMoKS50b0pTRGF0ZSgpO1xuICAgIGxldCBkYXRlcyA9IHJydWxlU2V0LmJldHdlZW4oYmVnaW4sIGVuZCk7XG4gICAgcmV0dXJuIGRhdGVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBldmVudHNFYWNoRGF5ID0gdGhpcy5nZXRSZW5kZXJFdmVudHMoXG4gICAgICB0aGlzLnN0YXRlLmV2ZW50cyxcbiAgICAgIHRoaXMuc3RhdGUuc2luZ2xlRXZlbnRzLFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIlxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIkxpZ2h0R3JheVwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzUxNTY1ZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXy5nZXQodGhpcy5wcm9wcy5zdHlsZXMsIFwiY2FsZW5kYXJcIiwge30pLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbGVuZGFyLW5hdmlnYXRlIHVuc2VsZWN0YWJsZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxhc3RNb250aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmIzEwMDk0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FsZW5kYXItdGl0bGVcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubW9udGhOYW1lc1t0aGlzLnN0YXRlLmN1cnJlbnQubW9udGggLSAxXSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudC55ZWFyfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYWxlbmRhci1uYXZpZ2F0ZSB1bnNlbGVjdGFibGVcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0TW9udGh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiMxMDA5NTtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItYm9keVwiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckRheXMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXRlcyhldmVudHNFYWNoRGF5KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dGb290ZXIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbGwgdGltZXMgc2hvd24geW91ciB0aW1lem9uZSAoe3RoaXMuc3RhdGUudXNlclRpbWV6b25lLm5hbWV9KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL3I/Y2lkPVwiICtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsZW5kYXJzWzBdLmNhbGVuZGFySWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmIzQzOyBBZGQgQ2FsZW5kYXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */"], children: [
      /* @__PURE__ */ eg("div", { className: "calendar-header", children: [
        /* @__PURE__ */ Q("div", { className: "calendar-navigate unselectable", onClick: this.lastMonth, children: "❮" }),
        /* @__PURE__ */ Q("div", { children: /* @__PURE__ */ Q("h2", { className: "calendar-title", children: this.state.monthNames[this.state.current.month - 1] + " " + this.state.current.year }) }),
        /* @__PURE__ */ Q("div", { className: "calendar-navigate unselectable", onClick: this.nextMonth, children: "❯" })
      ] }),
      /* @__PURE__ */ eg("div", { className: "calendar-body", children: [
        this.renderDays(),
        this.renderDates(I)
      ] }),
      this.state.showFooter && /* @__PURE__ */ eg("div", { className: "calendar-footer", children: [
        /* @__PURE__ */ eg("div", { css: yx, children: [
          "All times shown your timezone (",
          this.state.userTimezone.name,
          ")"
        ] }),
        /* @__PURE__ */ Q("div", { css: Wx, children: /* @__PURE__ */ Q("a", { href: "https://calendar.google.com/calendar/r?cid=" + this.props.calendars[0].calendarId, target: "_blank", css: Rx, children: "+ Add Calendar" }) })
      ] })
    ] });
  }
}
export {
  Vn as default
};
