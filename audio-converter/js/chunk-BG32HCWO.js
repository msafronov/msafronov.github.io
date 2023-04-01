// ../../node_modules/.pnpm/preact@10.11.3/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function a(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function h(l3, u3, i3) {
  var t3, o4, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return v(l3, f3, t3, o4, null);
}
function v(n2, i3, t3, o4, r3) {
  var f3 = { type: n2, props: i3, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function p(n2) {
  return n2.children;
}
function d(n2, l3) {
  this.props = n2, this.context = l3;
}
function _(n2, l3) {
  if (null == l3)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return k(n2);
  }
}
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l3, u3, i3, t3, o4, r3;
      n3.__d && (o4 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o4] : null, u3, null == o4 ? _(t3) : o4, t3.__h), z(u3, t3), t3.__e != o4 && k(t3)));
    });
}
function w(n2, l3, u3, i3, t3, o4, r3, c3, s3, a3) {
  var h3, y2, d3, k3, b3, g3, w3, x = i3 && i3.__k || e, C2 = x.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (k3 = u3.__k[h3] = null == (k3 = l3[h3]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
      if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h3]) || d3 && k3.key == d3.key && k3.type === d3.type)
        x[h3] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
            x[y2] = void 0;
            break;
          }
          d3 = null;
        }
      j(n2, k3, d3 = d3 || f, t3, o4, r3, c3, s3, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s3 = m(k3, s3, n2) : s3 = A(n2, k3, d3, x, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n2 && (s3 = _(d3));
    }
  for (u3.__e = g3, h3 = C2; h3--; )
    null != x[h3] && N(x[h3], x[h3]);
  if (w3)
    for (h3 = 0; h3 < w3.length; h3++)
      M(w3[h3], w3[++h3], w3[++h3]);
}
function m(n2, l3, u3) {
  for (var i3, t3 = n2.__k, o4 = 0; t3 && o4 < t3.length; o4++)
    (i3 = t3[o4]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function A(n2, l3, u3, i3, t3, o4) {
  var r3, f3, e3;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o4 || null == t3.parentNode)
    n:
      if (null == o4 || o4.parentNode !== n2)
        n2.appendChild(t3), r3 = null;
      else {
        for (f3 = o4, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, o4), r3 = o4;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n2, l3, u3, i3, t3) {
  var o4;
  for (o4 in u3)
    "children" === o4 || "key" === o4 || o4 in l3 || H(n2, o4, null, u3[o4], i3);
  for (o4 in l3)
    t3 && "function" != typeof l3[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l3[o4] || H(n2, o4, l3[o4], u3[o4], i3);
}
function $(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n2, l3, u3, i3, t3) {
  var o4;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o4 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o4] = u3, u3 ? i3 || n2.addEventListener(l3, o4 ? T : I, o4) : n2.removeEventListener(l3, o4 ? T : I, o4);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t3, o4, r3, f3, e3, c3) {
  var a3, h3, v3, y2, _4, k3, b3, g3, m3, x, A2, C2, $2, H2, I2, T2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof T2) {
        if (g3 = u3.props, m3 = (a3 = T2.contextType) && t3[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in T2 && T2.prototype.render ? u3.__c = h3 = new T2(g3, x) : (u3.__c = h3 = new d(g3, x), h3.constructor = T2, h3.render = O), m3 && m3.sub(h3), h3.props = g3, h3.state || (h3.state = {}), h3.context = x, h3.__n = t3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, T2.getDerivedStateFromProps(g3, h3.__s))), y2 = h3.props, _4 = h3.state, v3)
          null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g3 !== y2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g3, x), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g3, h3.__s, x) || u3.__v === i3.__v) {
            for (h3.props = g3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), A2 = 0; A2 < h3._sb.length; A2++)
              h3.__h.push(h3._sb[A2]);
            h3._sb = [], h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(g3, h3.__s, x), null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y2, _4, k3);
          });
        }
        if (h3.context = x, h3.props = g3, h3.__v = u3, h3.__P = n2, C2 = l.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h3.state = h3.__s, h3.__d = false, C2 && C2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++)
            h3.__h.push(h3._sb[H2]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, C2 && C2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++$2 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y2, _4)), I2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray(I2) ? I2 : [I2], u3, i3, t3, o4, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o4, r3, f3, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L(l3, u3, i3, t3, o4, r3, e3, c3) {
  var s3, h3, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
  if ("svg" === d3 && (o4 = true), null != r3) {
    for (; k3 < r3.length; k3++)
      if ((s3 = r3[k3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l3 = s3, r3[k3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
  }
  if (null === d3)
    y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h3 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
          y2[l3.attributes[k3].name] = l3.attributes[k3].value;
      (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y2, o4, c3), v3)
      u3.__k = [];
    else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o4 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k3 = r3.length; k3--; )
        null != r3[k3] && a(r3[k3]);
    c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
  }
  return l3;
}
function M(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t3, o4;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t3.base = t3.__P = null, n2.__c = void 0;
  }
  if (t3 = n2.__k)
    for (o4 = 0; o4 < t3.length; o4++)
      t3[o4] && N(t3[o4], u3, i3 || "function" != typeof n2.type);
  i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function O(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function P(u3, i3, t3) {
  var o4, r3, e3;
  l.__ && l.__(u3, i3), r3 = (o4 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o4 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o4 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o4 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o4), z(e3, u3);
}
function B(n2, l3) {
  var u3 = { __c: l3 = "__cC" + r++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, i3;
    return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
      return i3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(b);
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n = e.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t3, o4, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o4 = t3.constructor) && null != o4.getDerivedStateFromError && (t3.setState(o4.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// ../../node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var _2 = 0;
function o2(o4, e3, n2, t3, f3) {
  var l3, s3, u3 = {};
  for (s3 in e3)
    "ref" == s3 ? l3 = e3[s3] : u3[s3] = e3[s3];
  var a3 = { type: o4, props: u3, key: n2, ref: l3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_2, __source: f3, __self: t3 };
  if ("function" == typeof o4 && (l3 = o4.defaultProps))
    for (s3 in l3)
      void 0 === u3[s3] && (u3[s3] = l3[s3]);
  return l.vnode && l.vnode(a3), a3;
}

// ../../node_modules/.pnpm/preact@10.11.3/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o3 = 0;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function d2(t3, u3) {
  l.__h && l.__h(r2, t3, o3 || u3), o3 = 0;
  var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
}
function p2(n2) {
  return o3 = 1, y(B2, n2);
}
function y(n2, u3, i3) {
  var o4 = d2(t2++, 2);
  if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
    var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
    t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r2, !r2.u)) {
    r2.u = true;
    var f3 = r2.shouldComponentUpdate;
    r2.shouldComponentUpdate = function(n3, t3, r3) {
      if (!o4.__c.__H)
        return true;
      var u4 = o4.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !f3 || f3.call(this, n3, t3, r3);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o4.__c.props === n3) && (!f3 || f3.call(this, n3, t3, r3));
    };
  }
  return o4.__N || o4.__;
}
function h2(u3, i3) {
  var o4 = d2(t2++, 3);
  !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__H.__h.push(o4));
}
function s2(u3, i3) {
  var o4 = d2(t2++, 4);
  !l.__s && z2(o4.__H, i3) && (o4.__ = u3, o4.i = i3, r2.__h.push(o4));
}
function _3(n2) {
  return o3 = 5, F(function() {
    return { current: n2 };
  }, []);
}
function F(n2, r3) {
  var u3 = d2(t2++, 7);
  return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
}
function q(n2) {
  var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
}
function b2() {
  for (var t3; t3 = f2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o4 = t3.__c;
  o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t3, r3) {
  r3.some(function(t4) {
    try {
      t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t4.__v);
    }
  }), l2 && l2(t3, r3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r3, u3 = t3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function z2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function B2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

export {
  p,
  P,
  B,
  p2,
  h2 as h,
  s2 as s,
  _3 as _,
  F,
  q,
  o2 as o
};
