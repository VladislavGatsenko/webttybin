parcelRequire = (function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
	o = "function" == typeof require && require;
  function u(n, t) {
	if (!r[n]) {
	  if (!e[n]) {
		var f = "function" == typeof parcelRequire && parcelRequire;
		if (!t && f) return f(n, !0);
		if (i) return i(n, !0);
		if (o && "string" == typeof n) return o(n);
		var c = new Error("Cannot find module '" + n + "'");
		throw ((c.code = "MODULE_NOT_FOUND"), c);
	  }
	  (p.resolve = function (r) {
		return e[n][1][r] || r;
	  }),
		(p.cache = {});
	  var l = (r[n] = new u.Module(n));
	  e[n][0].call(l.exports, p, l, l.exports, this);
	}
	return r[n].exports;
	function p(e) {
	  return u(p.resolve(e));
	}
  }
  (u.isParcelRequire = !0),
	(u.Module = function (e) {
	  (this.id = e), (this.bundle = u), (this.exports = {});
	}),
	(u.modules = e),
	(u.cache = r),
	(u.parent = i),
	(u.register = function (r, n) {
	  e[r] = [
		function (e, r) {
		  r.exports = n;
		},
		{},
	  ];
	});
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
	var c = u(n[n.length - 1]);
	"object" == typeof exports && "undefined" != typeof module
	  ? (module.exports = c)
	  : "function" == typeof define && define.amd
		? define(function () {
			return c;
		  })
		: t && (this[t] = c);
  }
  return u;
})(
  {
	zKeE: [
	  function (require, module, exports) {
		var e = (module.exports = { version: "2.5.7" });
		"number" == typeof __e && (__e = e);
	  },
	  {},
	],
	Q17y: [
	  function (require, module, exports) {
		var r = require("../../modules/_core"),
		  i = r.JSON || (r.JSON = { stringify: JSON.stringify });
		module.exports = function (r) {
		  return i.stringify.apply(i, arguments);
		};
	  },
	  { "../../modules/_core": "zKeE" },
	],
	E09K: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/json/stringify");
	  },
	  { "core-js/library/fn/json/stringify": "Q17y" },
	],
	MpYs: [
	  function (require, module, exports) {
		var o = Math.ceil,
		  r = Math.floor;
		module.exports = function (t) {
		  return isNaN((t = +t)) ? 0 : (t > 0 ? r : o)(t);
		};
	  },
	  {},
	],
	U72i: [
	  function (require, module, exports) {
		module.exports = function (o) {
		  if (null == o) throw TypeError("Can't call method on  " + o);
		  return o;
		};
	  },
	  {},
	],
	lytE: [
	  function (require, module, exports) {
		var e = require("./_to-integer"),
		  r = require("./_defined");
		module.exports = function (t) {
		  return function (n, i) {
			var o,
			  u,
			  c = String(r(n)),
			  d = e(i),
			  a = c.length;
			return d < 0 || d >= a
			  ? t
				? ""
				: void 0
			  : (o = c.charCodeAt(d)) < 55296 ||
				  o > 56319 ||
				  d + 1 === a ||
				  (u = c.charCodeAt(d + 1)) < 56320 ||
				  u > 57343
				? t
				  ? c.charAt(d)
				  : o
				: t
				  ? c.slice(d, d + 2)
				  : u - 56320 + ((o - 55296) << 10) + 65536;
		  };
		};
	  },
	  { "./_to-integer": "MpYs", "./_defined": "U72i" },
	],
	"1kq3": [
	  function (require, module, exports) {
		module.exports = !0;
	  },
	  {},
	],
	i1Q6: [
	  function (require, module, exports) {
		var e = (module.exports =
		  "undefined" != typeof window && window.Math == Math
			? window
			: "undefined" != typeof self && self.Math == Math
			  ? self
			  : Function("return this")());
		"number" == typeof __g && (__g = e);
	  },
	  {},
	],
	g31e: [
	  function (require, module, exports) {
		module.exports = function (o) {
		  if ("function" != typeof o)
			throw TypeError(o + " is not a function!");
		  return o;
		};
	  },
	  {},
	],
	"3zRh": [
	  function (require, module, exports) {
		var r = require("./_a-function");
		module.exports = function (n, t, u) {
		  if ((r(n), void 0 === t)) return n;
		  switch (u) {
			case 1:
			  return function (r) {
				return n.call(t, r);
			  };
			case 2:
			  return function (r, u) {
				return n.call(t, r, u);
			  };
			case 3:
			  return function (r, u, e) {
				return n.call(t, r, u, e);
			  };
		  }
		  return function () {
			return n.apply(t, arguments);
		  };
		};
	  },
	  { "./_a-function": "g31e" },
	],
	BxvP: [
	  function (require, module, exports) {
		module.exports = function (o) {
		  return "object" == typeof o ? null !== o : "function" == typeof o;
		};
	  },
	  {},
	],
	zotD: [
	  function (require, module, exports) {
		var r = require("./_is-object");
		module.exports = function (e) {
		  if (!r(e)) throw TypeError(e + " is not an object!");
		  return e;
		};
	  },
	  { "./_is-object": "BxvP" },
	],
	wLcK: [
	  function (require, module, exports) {
		module.exports = function (r) {
		  try {
			return !!r();
		  } catch (t) {
			return !0;
		  }
		};
	  },
	  {},
	],
	"6MLN": [
	  function (require, module, exports) {
		module.exports = !require("./_fails")(function () {
		  return (
			7 !=
			Object.defineProperty({}, "a", {
			  get: function () {
				return 7;
			  },
			}).a
		  );
		});
	  },
	  { "./_fails": "wLcK" },
	],
	"9kxq": [
	  function (require, module, exports) {
		var e = require("./_is-object"),
		  r = require("./_global").document,
		  t = e(r) && e(r.createElement);
		module.exports = function (e) {
		  return t ? r.createElement(e) : {};
		};
	  },
	  { "./_is-object": "BxvP", "./_global": "i1Q6" },
	],
	R6c1: [
	  function (require, module, exports) {
		module.exports =
		  !require("./_descriptors") &&
		  !require("./_fails")(function () {
			return (
			  7 !=
			  Object.defineProperty(require("./_dom-create")("div"), "a", {
				get: function () {
				  return 7;
				},
			  }).a
			);
		  });
	  },
	  { "./_descriptors": "6MLN", "./_fails": "wLcK", "./_dom-create": "9kxq" },
	],
	EKwp: [
	  function (require, module, exports) {
		var t = require("./_is-object");
		module.exports = function (r, e) {
		  if (!t(r)) return r;
		  var o, n;
		  if (e && "function" == typeof (o = r.toString) && !t((n = o.call(r))))
			return n;
		  if ("function" == typeof (o = r.valueOf) && !t((n = o.call(r))))
			return n;
		  if (
			!e &&
			"function" == typeof (o = r.toString) &&
			!t((n = o.call(r)))
		  )
			return n;
		  throw TypeError("Can't convert object to primitive value");
		};
	  },
	  { "./_is-object": "BxvP" },
	],
	Gfzd: [
	  function (require, module, exports) {
		var e = require("./_an-object"),
		  r = require("./_ie8-dom-define"),
		  t = require("./_to-primitive"),
		  i = Object.defineProperty;
		exports.f = require("./_descriptors")
		  ? Object.defineProperty
		  : function (o, n, u) {
			  if ((e(o), (n = t(n, !0)), e(u), r))
				try {
				  return i(o, n, u);
				} catch (c) {}
			  if ("get" in u || "set" in u)
				throw TypeError("Accessors not supported!");
			  return "value" in u && (o[n] = u.value), o;
			};
	  },
	  {
		"./_an-object": "zotD",
		"./_ie8-dom-define": "R6c1",
		"./_to-primitive": "EKwp",
		"./_descriptors": "6MLN",
	  },
	],
	"0WCH": [
	  function (require, module, exports) {
		module.exports = function (e, r) {
		  return {
			enumerable: !(1 & e),
			configurable: !(2 & e),
			writable: !(4 & e),
			value: r,
		  };
		};
	  },
	  {},
	],
	akPY: [
	  function (require, module, exports) {
		var r = require("./_object-dp"),
		  e = require("./_property-desc");
		module.exports = require("./_descriptors")
		  ? function (t, u, o) {
			  return r.f(t, u, e(1, o));
			}
		  : function (r, e, t) {
			  return (r[e] = t), r;
			};
	  },
	  {
		"./_object-dp": "Gfzd",
		"./_property-desc": "0WCH",
		"./_descriptors": "6MLN",
	  },
	],
	yS17: [
	  function (require, module, exports) {
		var r = {}.hasOwnProperty;
		module.exports = function (e, n) {
		  return r.call(e, n);
		};
	  },
	  {},
	],
	vSO4: [
	  function (require, module, exports) {
		var e = require("./_global"),
		  r = require("./_core"),
		  n = require("./_ctx"),
		  t = require("./_hide"),
		  i = require("./_has"),
		  u = "prototype",
		  o = function (c, a, f) {
			var l,
			  s,
			  p,
			  h = c & o.F,
			  v = c & o.G,
			  q = c & o.S,
			  w = c & o.P,
			  _ = c & o.B,
			  y = c & o.W,
			  d = v ? r : r[a] || (r[a] = {}),
			  F = d[u],
			  g = v ? e : q ? e[a] : (e[a] || {})[u];
			for (l in (v && (f = a), f))
			  ((s = !h && g && void 0 !== g[l]) && i(d, l)) ||
				((p = s ? g[l] : f[l]),
				(d[l] =
				  v && "function" != typeof g[l]
					? f[l]
					: _ && s
					  ? n(p, e)
					  : y && g[l] == p
						? (function (e) {
							var r = function (r, n, t) {
							  if (this instanceof e) {
								switch (arguments.length) {
								  case 0:
									return new e();
								  case 1:
									return new e(r);
								  case 2:
									return new e(r, n);
								}
								return new e(r, n, t);
							  }
							  return e.apply(this, arguments);
							};
							return (r[u] = e[u]), r;
						  })(p)
						: w && "function" == typeof p
						  ? n(Function.call, p)
						  : p),
				w &&
				  (((d.virtual || (d.virtual = {}))[l] = p),
				  c & o.R && F && !F[l] && t(F, l, p)));
		  };
		(o.F = 1),
		  (o.G = 2),
		  (o.S = 4),
		  (o.P = 8),
		  (o.B = 16),
		  (o.W = 32),
		  (o.U = 64),
		  (o.R = 128),
		  (module.exports = o);
	  },
	  {
		"./_global": "i1Q6",
		"./_core": "zKeE",
		"./_ctx": "3zRh",
		"./_hide": "akPY",
		"./_has": "yS17",
	  },
	],
	gojl: [
	  function (require, module, exports) {
		module.exports = require("./_hide");
	  },
	  { "./_hide": "akPY" },
	],
	dhak: [
	  function (require, module, exports) {
		module.exports = {};
	  },
	  {},
	],
	ShN9: [
	  function (require, module, exports) {
		var r = {}.toString;
		module.exports = function (t) {
		  return r.call(t).slice(8, -1);
		};
	  },
	  {},
	],
	E5Ce: [
	  function (require, module, exports) {
		var e = require("./_cof");
		module.exports = Object("z").propertyIsEnumerable(0)
		  ? Object
		  : function (r) {
			  return "String" == e(r) ? r.split("") : Object(r);
			};
	  },
	  { "./_cof": "ShN9" },
	],
	Wyka: [
	  function (require, module, exports) {
		var e = require("./_iobject"),
		  r = require("./_defined");
		module.exports = function (i) {
		  return e(r(i));
		};
	  },
	  { "./_iobject": "E5Ce", "./_defined": "U72i" },
	],
	S7IM: [
	  function (require, module, exports) {
		var e = require("./_to-integer"),
		  r = Math.min;
		module.exports = function (t) {
		  return t > 0 ? r(e(t), 9007199254740991) : 0;
		};
	  },
	  { "./_to-integer": "MpYs" },
	],
	Zwq5: [
	  function (require, module, exports) {
		var e = require("./_to-integer"),
		  r = Math.max,
		  t = Math.min;
		module.exports = function (n, a) {
		  return (n = e(n)) < 0 ? r(n + a, 0) : t(n, a);
		};
	  },
	  { "./_to-integer": "MpYs" },
	],
	LNnS: [
	  function (require, module, exports) {
		var e = require("./_to-iobject"),
		  r = require("./_to-length"),
		  t = require("./_to-absolute-index");
		module.exports = function (n) {
		  return function (i, o, u) {
			var f,
			  l = e(i),
			  a = r(l.length),
			  c = t(u, a);
			if (n && o != o) {
			  for (; a > c; ) if ((f = l[c++]) != f) return !0;
			} else
			  for (; a > c; c++)
				if ((n || c in l) && l[c] === o) return n || c || 0;
			return !n && -1;
		  };
		};
	  },
	  {
		"./_to-iobject": "Wyka",
		"./_to-length": "S7IM",
		"./_to-absolute-index": "Zwq5",
	  },
	],
	NB7d: [
	  function (require, module, exports) {
		var r = require("./_core"),
		  e = require("./_global"),
		  o = "__core-js_shared__",
		  i = e[o] || (e[o] = {});
		(module.exports = function (r, e) {
		  return i[r] || (i[r] = void 0 !== e ? e : {});
		})("versions", []).push({
		  version: r.version,
		  mode: require("./_library") ? "pure" : "global",
		  copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
		});
	  },
	  { "./_core": "zKeE", "./_global": "i1Q6", "./_library": "1kq3" },
	],
	X6va: [
	  function (require, module, exports) {
		var o = 0,
		  t = Math.random();
		module.exports = function (n) {
		  return "Symbol(".concat(
			void 0 === n ? "" : n,
			")_",
			(++o + t).toString(36),
		  );
		};
	  },
	  {},
	],
	"/wuY": [
	  function (require, module, exports) {
		var e = require("./_shared")("keys"),
		  r = require("./_uid");
		module.exports = function (u) {
		  return e[u] || (e[u] = r(u));
		};
	  },
	  { "./_shared": "NB7d", "./_uid": "X6va" },
	],
	B9Lq: [
	  function (require, module, exports) {
		var r = require("./_has"),
		  e = require("./_to-iobject"),
		  u = require("./_array-includes")(!1),
		  i = require("./_shared-key")("IE_PROTO");
		module.exports = function (o, a) {
		  var n,
			s = e(o),
			t = 0,
			h = [];
		  for (n in s) n != i && r(s, n) && h.push(n);
		  for (; a.length > t; ) r(s, (n = a[t++])) && (~u(h, n) || h.push(n));
		  return h;
		};
	  },
	  {
		"./_has": "yS17",
		"./_to-iobject": "Wyka",
		"./_array-includes": "LNnS",
		"./_shared-key": "/wuY",
	  },
	],
	KxjL: [
	  function (require, module, exports) {
		module.exports =
		  "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
			",",
		  );
	  },
	  {},
	],
	knrM: [
	  function (require, module, exports) {
		var e = require("./_object-keys-internal"),
		  r = require("./_enum-bug-keys");
		module.exports =
		  Object.keys ||
		  function (u) {
			return e(u, r);
		  };
	  },
	  { "./_object-keys-internal": "B9Lq", "./_enum-bug-keys": "KxjL" },
	],
	gjjs: [
	  function (require, module, exports) {
		var e = require("./_object-dp"),
		  r = require("./_an-object"),
		  t = require("./_object-keys");
		module.exports = require("./_descriptors")
		  ? Object.defineProperties
		  : function (o, i) {
			  r(o);
			  for (var u, c = t(i), n = c.length, s = 0; n > s; )
				e.f(o, (u = c[s++]), i[u]);
			  return o;
			};
	  },
	  {
		"./_object-dp": "Gfzd",
		"./_an-object": "zotD",
		"./_object-keys": "knrM",
		"./_descriptors": "6MLN",
	  },
	],
	ebIA: [
	  function (require, module, exports) {
		var e = require("./_global").document;
		module.exports = e && e.documentElement;
	  },
	  { "./_global": "i1Q6" },
	],
	TNJq: [
	  function (require, module, exports) {
		var e = require("./_an-object"),
		  r = require("./_object-dps"),
		  t = require("./_enum-bug-keys"),
		  n = require("./_shared-key")("IE_PROTO"),
		  o = function () {},
		  i = "prototype",
		  u = function () {
			var e,
			  r = require("./_dom-create")("iframe"),
			  n = t.length;
			for (
			  r.style.display = "none",
				require("./_html").appendChild(r),
				r.src = "javascript:",
				(e = r.contentWindow.document).open(),
				e.write("<script>document.F=Object</script>"),
				e.close(),
				u = e.F;
			  n--;

			)
			  delete u[i][t[n]];
			return u();
		  };
		module.exports =
		  Object.create ||
		  function (t, c) {
			var a;
			return (
			  null !== t
				? ((o[i] = e(t)), (a = new o()), (o[i] = null), (a[n] = t))
				: (a = u()),
			  void 0 === c ? a : r(a, c)
			);
		  };
	  },
	  {
		"./_an-object": "zotD",
		"./_object-dps": "gjjs",
		"./_enum-bug-keys": "KxjL",
		"./_shared-key": "/wuY",
		"./_dom-create": "9kxq",
		"./_html": "ebIA",
	  },
	],
	Ug9I: [
	  function (require, module, exports) {
		var e = require("./_shared")("wks"),
		  r = require("./_uid"),
		  o = require("./_global").Symbol,
		  u = "function" == typeof o,
		  i = (module.exports = function (i) {
			return e[i] || (e[i] = (u && o[i]) || (u ? o : r)("Symbol." + i));
		  });
		i.store = e;
	  },
	  { "./_shared": "NB7d", "./_uid": "X6va", "./_global": "i1Q6" },
	],
	"11Ut": [
	  function (require, module, exports) {
		var e = require("./_object-dp").f,
		  r = require("./_has"),
		  o = require("./_wks")("toStringTag");
		module.exports = function (t, u, i) {
		  t &&
			!r((t = i ? t : t.prototype), o) &&
			e(t, o, { configurable: !0, value: u });
		};
	  },
	  { "./_object-dp": "Gfzd", "./_has": "yS17", "./_wks": "Ug9I" },
	],
	b7Q2: [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_object-create"),
		  r = require("./_property-desc"),
		  t = require("./_set-to-string-tag"),
		  i = {};
		require("./_hide")(i, require("./_wks")("iterator"), function () {
		  return this;
		}),
		  (module.exports = function (o, u, s) {
			(o.prototype = e(i, { next: r(1, s) })), t(o, u + " Iterator");
		  });
	  },
	  {
		"./_object-create": "TNJq",
		"./_property-desc": "0WCH",
		"./_set-to-string-tag": "11Ut",
		"./_hide": "akPY",
		"./_wks": "Ug9I",
	  },
	],
	mbLO: [
	  function (require, module, exports) {
		var e = require("./_defined");
		module.exports = function (r) {
		  return Object(e(r));
		};
	  },
	  { "./_defined": "U72i" },
	],
	HHE0: [
	  function (require, module, exports) {
		var t = require("./_has"),
		  e = require("./_to-object"),
		  o = require("./_shared-key")("IE_PROTO"),
		  r = Object.prototype;
		module.exports =
		  Object.getPrototypeOf ||
		  function (c) {
			return (
			  (c = e(c)),
			  t(c, o)
				? c[o]
				: "function" == typeof c.constructor &&
					c instanceof c.constructor
				  ? c.constructor.prototype
				  : c instanceof Object
					? r
					: null
			);
		  };
	  },
	  { "./_has": "yS17", "./_to-object": "mbLO", "./_shared-key": "/wuY" },
	],
	uRfg: [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_library"),
		  r = require("./_export"),
		  t = require("./_redefine"),
		  i = require("./_hide"),
		  n = require("./_iterators"),
		  u = require("./_iter-create"),
		  o = require("./_set-to-string-tag"),
		  s = require("./_object-gpo"),
		  a = require("./_wks")("iterator"),
		  c = !([].keys && "next" in [].keys()),
		  f = "@@iterator",
		  l = "keys",
		  q = "values",
		  y = function () {
			return this;
		  };
		module.exports = function (_, p, h, k, v, w, d) {
		  u(h, p, k);
		  var x,
			b,
			g,
			j = function (e) {
			  if (!c && e in I) return I[e];
			  switch (e) {
				case l:
				case q:
				  return function () {
					return new h(this, e);
				  };
			  }
			  return function () {
				return new h(this, e);
			  };
			},
			m = p + " Iterator",
			A = v == q,
			F = !1,
			I = _.prototype,
			O = I[a] || I[f] || (v && I[v]),
			P = O || j(v),
			z = v ? (A ? j("entries") : P) : void 0,
			B = ("Array" == p && I.entries) || O;
		  if (
			(B &&
			  (g = s(B.call(new _()))) !== Object.prototype &&
			  g.next &&
			  (o(g, m, !0), e || "function" == typeof g[a] || i(g, a, y)),
			A &&
			  O &&
			  O.name !== q &&
			  ((F = !0),
			  (P = function () {
				return O.call(this);
			  })),
			(e && !d) || (!c && !F && I[a]) || i(I, a, P),
			(n[p] = P),
			(n[m] = y),
			v)
		  )
			if (
			  ((x = { values: A ? P : j(q), keys: w ? P : j(l), entries: z }),
			  d)
			)
			  for (b in x) b in I || t(I, b, x[b]);
			else r(r.P + r.F * (c || F), p, x);
		  return x;
		};
	  },
	  {
		"./_library": "1kq3",
		"./_export": "vSO4",
		"./_redefine": "gojl",
		"./_hide": "akPY",
		"./_iterators": "dhak",
		"./_iter-create": "b7Q2",
		"./_set-to-string-tag": "11Ut",
		"./_object-gpo": "HHE0",
		"./_wks": "Ug9I",
	  },
	],
	"i+u+": [
	  function (require, module, exports) {
		"use strict";
		var i = require("./_string-at")(!0);
		require("./_iter-define")(
		  String,
		  "String",
		  function (i) {
			(this._t = String(i)), (this._i = 0);
		  },
		  function () {
			var t,
			  e = this._t,
			  n = this._i;
			return n >= e.length
			  ? { value: void 0, done: !0 }
			  : ((t = i(e, n)), (this._i += t.length), { value: t, done: !1 });
		  },
		);
	  },
	  { "./_string-at": "lytE", "./_iter-define": "uRfg" },
	],
	ID6i: [
	  function (require, module, exports) {
		module.exports = function () {};
	  },
	  {},
	],
	"xwD+": [
	  function (require, module, exports) {
		module.exports = function (e, n) {
		  return { value: n, done: !!e };
		};
	  },
	  {},
	],
	OYXR: [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_add-to-unscopables"),
		  r = require("./_iter-step"),
		  t = require("./_iterators"),
		  i = require("./_to-iobject");
		(module.exports = require("./_iter-define")(
		  Array,
		  "Array",
		  function (e, r) {
			(this._t = i(e)), (this._i = 0), (this._k = r);
		  },
		  function () {
			var e = this._t,
			  t = this._k,
			  i = this._i++;
			return !e || i >= e.length
			  ? ((this._t = void 0), r(1))
			  : r(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]]);
		  },
		  "values",
		)),
		  (t.Arguments = t.Array),
		  e("keys"),
		  e("values"),
		  e("entries");
	  },
	  {
		"./_add-to-unscopables": "ID6i",
		"./_iter-step": "xwD+",
		"./_iterators": "dhak",
		"./_to-iobject": "Wyka",
		"./_iter-define": "uRfg",
	  },
	],
	COf8: [
	  function (require, module, exports) {
		require("./es6.array.iterator");
		for (
		  var t = require("./_global"),
			e = require("./_hide"),
			i = require("./_iterators"),
			r = require("./_wks")("toStringTag"),
			s =
			  "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
				",",
			  ),
			L = 0;
		  L < s.length;
		  L++
		) {
		  var a = s[L],
			l = t[a],
			S = l && l.prototype;
		  S && !S[r] && e(S, r, a), (i[a] = i.Array);
		}
	  },
	  {
		"./es6.array.iterator": "OYXR",
		"./_global": "i1Q6",
		"./_hide": "akPY",
		"./_iterators": "dhak",
		"./_wks": "Ug9I",
	  },
	],
	ZxII: [
	  function (require, module, exports) {
		exports.f = require("./_wks");
	  },
	  { "./_wks": "Ug9I" },
	],
	nFDa: [
	  function (require, module, exports) {
		require("../../modules/es6.string.iterator"),
		  require("../../modules/web.dom.iterable"),
		  (module.exports = require("../../modules/_wks-ext").f("iterator"));
	  },
	  {
		"../../modules/es6.string.iterator": "i+u+",
		"../../modules/web.dom.iterable": "COf8",
		"../../modules/_wks-ext": "ZxII",
	  },
	],
	"573u": [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/symbol/iterator");
	  },
	  { "core-js/library/fn/symbol/iterator": "nFDa" },
	],
	e8vu: [
	  function (require, module, exports) {
		var e = require("./_uid")("meta"),
		  r = require("./_is-object"),
		  t = require("./_has"),
		  n = require("./_object-dp").f,
		  i = 0,
		  u =
			Object.isExtensible ||
			function () {
			  return !0;
			},
		  f = !require("./_fails")(function () {
			return u(Object.preventExtensions({}));
		  }),
		  o = function (r) {
			n(r, e, { value: { i: "O" + ++i, w: {} } });
		  },
		  s = function (n, i) {
			if (!r(n))
			  return "symbol" == typeof n
				? n
				: ("string" == typeof n ? "S" : "P") + n;
			if (!t(n, e)) {
			  if (!u(n)) return "F";
			  if (!i) return "E";
			  o(n);
			}
			return n[e].i;
		  },
		  c = function (r, n) {
			if (!t(r, e)) {
			  if (!u(r)) return !0;
			  if (!n) return !1;
			  o(r);
			}
			return r[e].w;
		  },
		  E = function (r) {
			return f && a.NEED && u(r) && !t(r, e) && o(r), r;
		  },
		  a = (module.exports = {
			KEY: e,
			NEED: !1,
			fastKey: s,
			getWeak: c,
			onFreeze: E,
		  });
	  },
	  {
		"./_uid": "X6va",
		"./_is-object": "BxvP",
		"./_has": "yS17",
		"./_object-dp": "Gfzd",
		"./_fails": "wLcK",
	  },
	],
	c2zY: [
	  function (require, module, exports) {
		var r = require("./_global"),
		  e = require("./_core"),
		  o = require("./_library"),
		  i = require("./_wks-ext"),
		  l = require("./_object-dp").f;
		module.exports = function (u) {
		  var a = e.Symbol || (e.Symbol = o ? {} : r.Symbol || {});
		  "_" == u.charAt(0) || u in a || l(a, u, { value: i.f(u) });
		};
	  },
	  {
		"./_global": "i1Q6",
		"./_core": "zKeE",
		"./_library": "1kq3",
		"./_wks-ext": "ZxII",
		"./_object-dp": "Gfzd",
	  },
	],
	Ocr3: [
	  function (require, module, exports) {
		exports.f = Object.getOwnPropertySymbols;
	  },
	  {},
	],
	z7R8: [
	  function (require, module, exports) {
		exports.f = {}.propertyIsEnumerable;
	  },
	  {},
	],
	ycyv: [
	  function (require, module, exports) {
		var e = require("./_object-keys"),
		  r = require("./_object-gops"),
		  o = require("./_object-pie");
		module.exports = function (t) {
		  var u = e(t),
			i = r.f;
		  if (i)
			for (var c, f = i(t), a = o.f, l = 0; f.length > l; )
			  a.call(t, (c = f[l++])) && u.push(c);
		  return u;
		};
	  },
	  {
		"./_object-keys": "knrM",
		"./_object-gops": "Ocr3",
		"./_object-pie": "z7R8",
	  },
	],
	ayXv: [
	  function (require, module, exports) {
		var r = require("./_cof");
		module.exports =
		  Array.isArray ||
		  function (e) {
			return "Array" == r(e);
		  };
	  },
	  { "./_cof": "ShN9" },
	],
	Ni5N: [
	  function (require, module, exports) {
		var e = require("./_object-keys-internal"),
		  r = require("./_enum-bug-keys").concat("length", "prototype");
		exports.f =
		  Object.getOwnPropertyNames ||
		  function (t) {
			return e(t, r);
		  };
	  },
	  { "./_object-keys-internal": "B9Lq", "./_enum-bug-keys": "KxjL" },
	],
	rMkZ: [
	  function (require, module, exports) {
		var e = require("./_to-iobject"),
		  t = require("./_object-gopn").f,
		  o = {}.toString,
		  r =
			"object" == typeof window && window && Object.getOwnPropertyNames
			  ? Object.getOwnPropertyNames(window)
			  : [],
		  n = function (e) {
			try {
			  return t(e);
			} catch (o) {
			  return r.slice();
			}
		  };
		module.exports.f = function (c) {
		  return r && "[object Window]" == o.call(c) ? n(c) : t(e(c));
		};
	  },
	  { "./_to-iobject": "Wyka", "./_object-gopn": "Ni5N" },
	],
	sxPs: [
	  function (require, module, exports) {
		var e = require("./_object-pie"),
		  r = require("./_property-desc"),
		  i = require("./_to-iobject"),
		  t = require("./_to-primitive"),
		  o = require("./_has"),
		  c = require("./_ie8-dom-define"),
		  u = Object.getOwnPropertyDescriptor;
		exports.f = require("./_descriptors")
		  ? u
		  : function (p, q) {
			  if (((p = i(p)), (q = t(q, !0)), c))
				try {
				  return u(p, q);
				} catch (_) {}
			  if (o(p, q)) return r(!e.f.call(p, q), p[q]);
			};
	  },
	  {
		"./_object-pie": "z7R8",
		"./_property-desc": "0WCH",
		"./_to-iobject": "Wyka",
		"./_to-primitive": "EKwp",
		"./_has": "yS17",
		"./_ie8-dom-define": "R6c1",
		"./_descriptors": "6MLN",
	  },
	],
	Aa2f: [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_global"),
		  r = require("./_has"),
		  t = require("./_descriptors"),
		  i = require("./_export"),
		  n = require("./_redefine"),
		  o = require("./_meta").KEY,
		  u = require("./_fails"),
		  s = require("./_shared"),
		  f = require("./_set-to-string-tag"),
		  a = require("./_uid"),
		  c = require("./_wks"),
		  l = require("./_wks-ext"),
		  p = require("./_wks-define"),
		  b = require("./_enum-keys"),
		  h = require("./_is-array"),
		  y = require("./_an-object"),
		  _ = require("./_is-object"),
		  q = require("./_to-iobject"),
		  g = require("./_to-primitive"),
		  m = require("./_property-desc"),
		  v = require("./_object-create"),
		  d = require("./_object-gopn-ext"),
		  S = require("./_object-gopd"),
		  j = require("./_object-dp"),
		  O = require("./_object-keys"),
		  k = S.f,
		  w = j.f,
		  P = d.f,
		  E = e.Symbol,
		  F = e.JSON,
		  N = F && F.stringify,
		  J = "prototype",
		  x = c("_hidden"),
		  I = c("toPrimitive"),
		  T = {}.propertyIsEnumerable,
		  C = s("symbol-registry"),
		  M = s("symbols"),
		  D = s("op-symbols"),
		  G = Object[J],
		  K = "function" == typeof E,
		  Q = e.QObject,
		  W = !Q || !Q[J] || !Q[J].findChild,
		  Y =
			t &&
			u(function () {
			  return (
				7 !=
				v(
				  w({}, "a", {
					get: function () {
					  return w(this, "a", { value: 7 }).a;
					},
				  }),
				).a
			  );
			})
			  ? function (e, r, t) {
				  var i = k(G, r);
				  i && delete G[r], w(e, r, t), i && e !== G && w(G, r, i);
				}
			  : w,
		  z = function (e) {
			var r = (M[e] = v(E[J]));
			return (r._k = e), r;
		  },
		  A =
			K && "symbol" == typeof E.iterator
			  ? function (e) {
				  return "symbol" == typeof e;
				}
			  : function (e) {
				  return e instanceof E;
				},
		  B = function (e, t, i) {
			return (
			  e === G && B(D, t, i),
			  y(e),
			  (t = g(t, !0)),
			  y(i),
			  r(M, t)
				? (i.enumerable
					? (r(e, x) && e[x][t] && (e[x][t] = !1),
					  (i = v(i, { enumerable: m(0, !1) })))
					: (r(e, x) || w(e, x, m(1, {})), (e[x][t] = !0)),
				  Y(e, t, i))
				: w(e, t, i)
			);
		  },
		  H = function (e, r) {
			y(e);
			for (var t, i = b((r = q(r))), n = 0, o = i.length; o > n; )
			  B(e, (t = i[n++]), r[t]);
			return e;
		  },
		  L = function (e, r) {
			return void 0 === r ? v(e) : H(v(e), r);
		  },
		  R = function (e) {
			var t = T.call(this, (e = g(e, !0)));
			return (
			  !(this === G && r(M, e) && !r(D, e)) &&
			  (!(t || !r(this, e) || !r(M, e) || (r(this, x) && this[x][e])) ||
				t)
			);
		  },
		  U = function (e, t) {
			if (((e = q(e)), (t = g(t, !0)), e !== G || !r(M, t) || r(D, t))) {
			  var i = k(e, t);
			  return (
				!i || !r(M, t) || (r(e, x) && e[x][t]) || (i.enumerable = !0), i
			  );
			}
		  },
		  V = function (e) {
			for (var t, i = P(q(e)), n = [], u = 0; i.length > u; )
			  r(M, (t = i[u++])) || t == x || t == o || n.push(t);
			return n;
		  },
		  X = function (e) {
			for (
			  var t, i = e === G, n = P(i ? D : q(e)), o = [], u = 0;
			  n.length > u;

			)
			  !r(M, (t = n[u++])) || (i && !r(G, t)) || o.push(M[t]);
			return o;
		  };
		K ||
		  (n(
			(E = function () {
			  if (this instanceof E)
				throw TypeError("Symbol is not a constructor!");
			  var e = a(arguments.length > 0 ? arguments[0] : void 0),
				i = function (t) {
				  this === G && i.call(D, t),
					r(this, x) && r(this[x], e) && (this[x][e] = !1),
					Y(this, e, m(1, t));
				};
			  return t && W && Y(G, e, { configurable: !0, set: i }), z(e);
			})[J],
			"toString",
			function () {
			  return this._k;
			},
		  ),
		  (S.f = U),
		  (j.f = B),
		  (require("./_object-gopn").f = d.f = V),
		  (require("./_object-pie").f = R),
		  (require("./_object-gops").f = X),
		  t && !require("./_library") && n(G, "propertyIsEnumerable", R, !0),
		  (l.f = function (e) {
			return z(c(e));
		  })),
		  i(i.G + i.W + i.F * !K, { Symbol: E });
		for (
		  var Z =
			  "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
				",",
			  ),
			$ = 0;
		  Z.length > $;

		)
		  c(Z[$++]);
		for (var ee = O(c.store), re = 0; ee.length > re; ) p(ee[re++]);
		i(i.S + i.F * !K, "Symbol", {
		  for: function (e) {
			return r(C, (e += "")) ? C[e] : (C[e] = E(e));
		  },
		  keyFor: function (e) {
			if (!A(e)) throw TypeError(e + " is not a symbol!");
			for (var r in C) if (C[r] === e) return r;
		  },
		  useSetter: function () {
			W = !0;
		  },
		  useSimple: function () {
			W = !1;
		  },
		}),
		  i(i.S + i.F * !K, "Object", {
			create: L,
			defineProperty: B,
			defineProperties: H,
			getOwnPropertyDescriptor: U,
			getOwnPropertyNames: V,
			getOwnPropertySymbols: X,
		  }),
		  F &&
			i(
			  i.S +
				i.F *
				  (!K ||
					u(function () {
					  var e = E();
					  return (
						"[null]" != N([e]) ||
						"{}" != N({ a: e }) ||
						"{}" != N(Object(e))
					  );
					})),
			  "JSON",
			  {
				stringify: function (e) {
				  for (var r, t, i = [e], n = 1; arguments.length > n; )
					i.push(arguments[n++]);
				  if (((t = r = i[1]), (_(r) || void 0 !== e) && !A(e)))
					return (
					  h(r) ||
						(r = function (e, r) {
						  if (
							("function" == typeof t && (r = t.call(this, e, r)),
							!A(r))
						  )
							return r;
						}),
					  (i[1] = r),
					  N.apply(F, i)
					);
				},
			  },
			),
		  E[J][I] || require("./_hide")(E[J], I, E[J].valueOf),
		  f(E, "Symbol"),
		  f(Math, "Math", !0),
		  f(e.JSON, "JSON", !0);
	  },
	  {
		"./_global": "i1Q6",
		"./_has": "yS17",
		"./_descriptors": "6MLN",
		"./_export": "vSO4",
		"./_redefine": "gojl",
		"./_meta": "e8vu",
		"./_fails": "wLcK",
		"./_shared": "NB7d",
		"./_set-to-string-tag": "11Ut",
		"./_uid": "X6va",
		"./_wks": "Ug9I",
		"./_wks-ext": "ZxII",
		"./_wks-define": "c2zY",
		"./_enum-keys": "ycyv",
		"./_is-array": "ayXv",
		"./_an-object": "zotD",
		"./_is-object": "BxvP",
		"./_to-iobject": "Wyka",
		"./_to-primitive": "EKwp",
		"./_property-desc": "0WCH",
		"./_object-create": "TNJq",
		"./_object-gopn-ext": "rMkZ",
		"./_object-gopd": "sxPs",
		"./_object-dp": "Gfzd",
		"./_object-keys": "knrM",
		"./_object-gopn": "Ni5N",
		"./_object-pie": "z7R8",
		"./_object-gops": "Ocr3",
		"./_library": "1kq3",
		"./_hide": "akPY",
	  },
	],
	tuDi: [function (require, module, exports) {}, {}],
	c6mp: [
	  function (require, module, exports) {
		require("./_wks-define")("asyncIterator");
	  },
	  { "./_wks-define": "c2zY" },
	],
	"2mwf": [
	  function (require, module, exports) {
		require("./_wks-define")("observable");
	  },
	  { "./_wks-define": "c2zY" },
	],
	Ky5l: [
	  function (require, module, exports) {
		require("../../modules/es6.symbol"),
		  require("../../modules/es6.object.to-string"),
		  require("../../modules/es7.symbol.async-iterator"),
		  require("../../modules/es7.symbol.observable"),
		  (module.exports = require("../../modules/_core").Symbol);
	  },
	  {
		"../../modules/es6.symbol": "Aa2f",
		"../../modules/es6.object.to-string": "tuDi",
		"../../modules/es7.symbol.async-iterator": "c6mp",
		"../../modules/es7.symbol.observable": "2mwf",
		"../../modules/_core": "zKeE",
	  },
	],
	mr6k: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/symbol");
	  },
	  { "core-js/library/fn/symbol": "Ky5l" },
	],
	ZHvQ: [
	  function (require, module, exports) {
		var e = require("./_cof"),
		  t = require("./_wks")("toStringTag"),
		  n =
			"Arguments" ==
			e(
			  (function () {
				return arguments;
			  })(),
			),
		  r = function (e, t) {
			try {
			  return e[t];
			} catch (n) {}
		  };
		module.exports = function (u) {
		  var o, c, i;
		  return void 0 === u
			? "Undefined"
			: null === u
			  ? "Null"
			  : "string" == typeof (c = r((o = Object(u)), t))
				? c
				: n
				  ? e(o)
				  : "Object" == (i = e(o)) && "function" == typeof o.callee
					? "Arguments"
					: i;
		};
	  },
	  { "./_cof": "ShN9", "./_wks": "Ug9I" },
	],
	KUik: [
	  function (require, module, exports) {
		module.exports = function (o, n, r, i) {
		  if (!(o instanceof n) || (void 0 !== i && i in o))
			throw TypeError(r + ": incorrect invocation!");
		  return o;
		};
	  },
	  {},
	],
	hEIm: [
	  function (require, module, exports) {
		var r = require("./_an-object");
		module.exports = function (t, e, o, a) {
		  try {
			return a ? e(r(o)[0], o[1]) : e(o);
		  } catch (n) {
			var c = t.return;
			throw (void 0 !== c && r(c.call(t)), n);
		  }
		};
	  },
	  { "./_an-object": "zotD" },
	],
	af0K: [
	  function (require, module, exports) {
		var r = require("./_iterators"),
		  e = require("./_wks")("iterator"),
		  t = Array.prototype;
		module.exports = function (o) {
		  return void 0 !== o && (r.Array === o || t[e] === o);
		};
	  },
	  { "./_iterators": "dhak", "./_wks": "Ug9I" },
	],
	"7AqT": [
	  function (require, module, exports) {
		var r = require("./_classof"),
		  e = require("./_wks")("iterator"),
		  t = require("./_iterators");
		module.exports = require("./_core").getIteratorMethod = function (o) {
		  if (null != o) return o[e] || o["@@iterator"] || t[r(o)];
		};
	  },
	  {
		"./_classof": "ZHvQ",
		"./_wks": "Ug9I",
		"./_iterators": "dhak",
		"./_core": "zKeE",
	  },
	],
	ozpD: [
	  function (require, module, exports) {
		var e = require("./_ctx"),
		  r = require("./_iter-call"),
		  t = require("./_is-array-iter"),
		  i = require("./_an-object"),
		  o = require("./_to-length"),
		  n = require("./core.get-iterator-method"),
		  u = {},
		  a = {},
		  f = (module.exports = function (f, l, c, q, _) {
			var h,
			  s,
			  d,
			  g,
			  p = _
				? function () {
					return f;
				  }
				: n(f),
			  v = e(c, q, l ? 2 : 1),
			  x = 0;
			if ("function" != typeof p)
			  throw TypeError(f + " is not iterable!");
			if (t(p)) {
			  for (h = o(f.length); h > x; x++)
				if (
				  (g = l ? v(i((s = f[x]))[0], s[1]) : v(f[x])) === u ||
				  g === a
				)
				  return g;
			} else
			  for (d = p.call(f); !(s = d.next()).done; )
				if ((g = r(d, v, s.value, l)) === u || g === a) return g;
		  });
		(f.BREAK = u), (f.RETURN = a);
	  },
	  {
		"./_ctx": "3zRh",
		"./_iter-call": "hEIm",
		"./_is-array-iter": "af0K",
		"./_an-object": "zotD",
		"./_to-length": "S7IM",
		"./core.get-iterator-method": "7AqT",
	  },
	],
	B1ls: [
	  function (require, module, exports) {
		var r = require("./_an-object"),
		  e = require("./_a-function"),
		  u = require("./_wks")("species");
		module.exports = function (n, o) {
		  var i,
			t = r(n).constructor;
		  return void 0 === t || null == (i = r(t)[u]) ? o : e(i);
		};
	  },
	  { "./_an-object": "zotD", "./_a-function": "g31e", "./_wks": "Ug9I" },
	],
	o4G5: [
	  function (require, module, exports) {
		module.exports = function (e, r, l) {
		  var a = void 0 === l;
		  switch (r.length) {
			case 0:
			  return a ? e() : e.call(l);
			case 1:
			  return a ? e(r[0]) : e.call(l, r[0]);
			case 2:
			  return a ? e(r[0], r[1]) : e.call(l, r[0], r[1]);
			case 3:
			  return a ? e(r[0], r[1], r[2]) : e.call(l, r[0], r[1], r[2]);
			case 4:
			  return a
				? e(r[0], r[1], r[2], r[3])
				: e.call(l, r[0], r[1], r[2], r[3]);
		  }
		  return e.apply(l, r);
		};
	  },
	  {},
	],
	uzcO: [
	  function (require, module, exports) {
		var e,
		  t,
		  n,
		  i = require("./_ctx"),
		  o = require("./_invoke"),
		  r = require("./_html"),
		  s = require("./_dom-create"),
		  a = require("./_global"),
		  c = a.process,
		  u = a.setImmediate,
		  p = a.clearImmediate,
		  f = a.MessageChannel,
		  l = a.Dispatch,
		  d = 0,
		  m = {},
		  h = "onreadystatechange",
		  g = function () {
			var e = +this;
			if (m.hasOwnProperty(e)) {
			  var t = m[e];
			  delete m[e], t();
			}
		  },
		  v = function (e) {
			g.call(e.data);
		  };
		(u && p) ||
		  ((u = function (t) {
			for (var n = [], i = 1; arguments.length > i; )
			  n.push(arguments[i++]);
			return (
			  (m[++d] = function () {
				o("function" == typeof t ? t : Function(t), n);
			  }),
			  e(d),
			  d
			);
		  }),
		  (p = function (e) {
			delete m[e];
		  }),
		  "process" == require("./_cof")(c)
			? (e = function (e) {
				c.nextTick(i(g, e, 1));
			  })
			: l && l.now
			  ? (e = function (e) {
				  l.now(i(g, e, 1));
				})
			  : f
				? ((n = (t = new f()).port2),
				  (t.port1.onmessage = v),
				  (e = i(n.postMessage, n, 1)))
				: a.addEventListener &&
					"function" == typeof postMessage &&
					!a.importScripts
				  ? ((e = function (e) {
					  a.postMessage(e + "", "*");
					}),
					a.addEventListener("message", v, !1))
				  : (e =
					  h in s("script")
						? function (e) {
							r.appendChild(s("script"))[h] = function () {
							  r.removeChild(this), g.call(e);
							};
						  }
						: function (e) {
							setTimeout(i(g, e, 1), 0);
						  })),
		  (module.exports = { set: u, clear: p });
	  },
	  {
		"./_ctx": "3zRh",
		"./_invoke": "o4G5",
		"./_html": "ebIA",
		"./_dom-create": "9kxq",
		"./_global": "i1Q6",
		"./_cof": "ShN9",
	  },
	],
	H109: [
	  function (require, module, exports) {
		var e = require("./_global"),
		  t = require("./_task").set,
		  r = e.MutationObserver || e.WebKitMutationObserver,
		  n = e.process,
		  o = e.Promise,
		  a = "process" == require("./_cof")(n);
		module.exports = function () {
		  var i,
			c,
			s,
			v = function () {
			  var e, t;
			  for (a && (e = n.domain) && e.exit(); i; ) {
				(t = i.fn), (i = i.next);
				try {
				  t();
				} catch (r) {
				  throw (i ? s() : (c = void 0), r);
				}
			  }
			  (c = void 0), e && e.enter();
			};
		  if (a)
			s = function () {
			  n.nextTick(v);
			};
		  else if (!r || (e.navigator && e.navigator.standalone))
			if (o && o.resolve) {
			  var u = o.resolve(void 0);
			  s = function () {
				u.then(v);
			  };
			} else
			  s = function () {
				t.call(e, v);
			  };
		  else {
			var f = !0,
			  l = document.createTextNode("");
			new r(v).observe(l, { characterData: !0 }),
			  (s = function () {
				l.data = f = !f;
			  });
		  }
		  return function (e) {
			var t = { fn: e, next: void 0 };
			c && (c.next = t), i || ((i = t), s()), (c = t);
		  };
		};
	  },
	  { "./_global": "i1Q6", "./_task": "uzcO", "./_cof": "ShN9" },
	],
	AIlg: [
	  function (require, module, exports) {
		"use strict";
		var r = require("./_a-function");
		function e(e) {
		  var o, t;
		  (this.promise = new e(function (r, e) {
			if (void 0 !== o || void 0 !== t)
			  throw TypeError("Bad Promise constructor");
			(o = r), (t = e);
		  })),
			(this.resolve = r(o)),
			(this.reject = r(t));
		}
		module.exports.f = function (r) {
		  return new e(r);
		};
	  },
	  { "./_a-function": "g31e" },
	],
	kX4D: [
	  function (require, module, exports) {
		module.exports = function (e) {
		  try {
			return { e: !1, v: e() };
		  } catch (r) {
			return { e: !0, v: r };
		  }
		};
	  },
	  {},
	],
	"/cCi": [
	  function (require, module, exports) {
		var e = require("./_global"),
		  r = e.navigator;
		module.exports = (r && r.userAgent) || "";
	  },
	  { "./_global": "i1Q6" },
	],
	"5Czc": [
	  function (require, module, exports) {
		var r = require("./_an-object"),
		  e = require("./_is-object"),
		  i = require("./_new-promise-capability");
		module.exports = function (o, t) {
		  if ((r(o), e(t) && t.constructor === o)) return t;
		  var u = i.f(o);
		  return (0, u.resolve)(t), u.promise;
		};
	  },
	  {
		"./_an-object": "zotD",
		"./_is-object": "BxvP",
		"./_new-promise-capability": "AIlg",
	  },
	],
	O6kh: [
	  function (require, module, exports) {
		var r = require("./_hide");
		module.exports = function (e, i, n) {
		  for (var o in i) n && e[o] ? (e[o] = i[o]) : r(e, o, i[o]);
		  return e;
		};
	  },
	  { "./_hide": "akPY" },
	],
	FGzK: [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_global"),
		  r = require("./_core"),
		  i = require("./_object-dp"),
		  t = require("./_descriptors"),
		  u = require("./_wks")("species");
		module.exports = function (o) {
		  var c = "function" == typeof r[o] ? r[o] : e[o];
		  t &&
			c &&
			!c[u] &&
			i.f(c, u, {
			  configurable: !0,
			  get: function () {
				return this;
			  },
			});
		};
	  },
	  {
		"./_global": "i1Q6",
		"./_core": "zKeE",
		"./_object-dp": "Gfzd",
		"./_descriptors": "6MLN",
		"./_wks": "Ug9I",
	  },
	],
	Lli7: [
	  function (require, module, exports) {
		var r = require("./_wks")("iterator"),
		  t = !1;
		try {
		  var n = [7][r]();
		  (n.return = function () {
			t = !0;
		  }),
			Array.from(n, function () {
			  throw 2;
			});
		} catch (e) {}
		module.exports = function (n, u) {
		  if (!u && !t) return !1;
		  var o = !1;
		  try {
			var c = [7],
			  a = c[r]();
			(a.next = function () {
			  return { done: (o = !0) };
			}),
			  (c[r] = function () {
				return a;
			  }),
			  n(c);
		  } catch (e) {}
		  return o;
		};
	  },
	  { "./_wks": "Ug9I" },
	],
	"9kJF": [
	  function (require, module, exports) {
		"use strict";
		var e,
		  r,
		  t,
		  i,
		  n = require("./_library"),
		  o = require("./_global"),
		  c = require("./_ctx"),
		  s = require("./_classof"),
		  u = require("./_export"),
		  a = require("./_is-object"),
		  _ = require("./_a-function"),
		  h = require("./_an-instance"),
		  f = require("./_for-of"),
		  l = require("./_species-constructor"),
		  v = require("./_task").set,
		  d = require("./_microtask")(),
		  p = require("./_new-promise-capability"),
		  m = require("./_perform"),
		  q = require("./_user-agent"),
		  y = require("./_promise-resolve"),
		  j = "Promise",
		  w = o.TypeError,
		  g = o.process,
		  x = g && g.versions,
		  b = (x && x.v8) || "",
		  k = o[j],
		  P = "process" == s(g),
		  F = function () {},
		  S = (r = p.f),
		  E = !!(function () {
			try {
			  var e = k.resolve(1),
				r = ((e.constructor = {})[require("./_wks")("species")] =
				  function (e) {
					e(F, F);
				  });
			  return (
				(P || "function" == typeof PromiseRejectionEvent) &&
				e.then(F) instanceof r &&
				0 !== b.indexOf("6.6") &&
				-1 === q.indexOf("Chrome/66")
			  );
			} catch (t) {}
		  })(),
		  O = function (e) {
			var r;
			return !(!a(e) || "function" != typeof (r = e.then)) && r;
		  },
		  R = function (e, r) {
			if (!e._n) {
			  e._n = !0;
			  var t = e._c;
			  d(function () {
				for (
				  var i = e._v,
					n = 1 == e._s,
					o = 0,
					c = function (r) {
					  var t,
						o,
						c,
						s = n ? r.ok : r.fail,
						u = r.resolve,
						a = r.reject,
						_ = r.domain;
					  try {
						s
						  ? (n || (2 == e._h && H(e), (e._h = 1)),
							!0 === s
							  ? (t = i)
							  : (_ && _.enter(),
								(t = s(i)),
								_ && (_.exit(), (c = !0))),
							t === r.promise
							  ? a(w("Promise-chain cycle"))
							  : (o = O(t))
								? o.call(t, u, a)
								: u(t))
						  : a(i);
					  } catch (h) {
						_ && !c && _.exit(), a(h);
					  }
					};
				  t.length > o;

				)
				  c(t[o++]);
				(e._c = []), (e._n = !1), r && !e._h && C(e);
			  });
			}
		  },
		  C = function (e) {
			v.call(o, function () {
			  var r,
				t,
				i,
				n = e._v,
				c = G(e);
			  if (
				(c &&
				  ((r = m(function () {
					P
					  ? g.emit("unhandledRejection", n, e)
					  : (t = o.onunhandledrejection)
						? t({ promise: e, reason: n })
						: (i = o.console) &&
						  i.error &&
						  i.error("Unhandled promise rejection", n);
				  })),
				  (e._h = P || G(e) ? 2 : 1)),
				(e._a = void 0),
				c && r.e)
			  )
				throw r.v;
			});
		  },
		  G = function (e) {
			return 1 !== e._h && 0 === (e._a || e._c).length;
		  },
		  H = function (e) {
			v.call(o, function () {
			  var r;
			  P
				? g.emit("rejectionHandled", e)
				: (r = o.onrejectionhandled) && r({ promise: e, reason: e._v });
			});
		  },
		  T = function (e) {
			var r = this;
			r._d ||
			  ((r._d = !0),
			  ((r = r._w || r)._v = e),
			  (r._s = 2),
			  r._a || (r._a = r._c.slice()),
			  R(r, !0));
		  },
		  U = function (e) {
			var r,
			  t = this;
			if (!t._d) {
			  (t._d = !0), (t = t._w || t);
			  try {
				if (t === e) throw w("Promise can't be resolved itself");
				(r = O(e))
				  ? d(function () {
					  var i = { _w: t, _d: !1 };
					  try {
						r.call(e, c(U, i, 1), c(T, i, 1));
					  } catch (n) {
						T.call(i, n);
					  }
					})
				  : ((t._v = e), (t._s = 1), R(t, !1));
			  } catch (i) {
				T.call({ _w: t, _d: !1 }, i);
			  }
			}
		  };
		E ||
		  ((k = function (r) {
			h(this, k, j, "_h"), _(r), e.call(this);
			try {
			  r(c(U, this, 1), c(T, this, 1));
			} catch (t) {
			  T.call(this, t);
			}
		  }),
		  ((e = function (e) {
			(this._c = []),
			  (this._a = void 0),
			  (this._s = 0),
			  (this._d = !1),
			  (this._v = void 0),
			  (this._h = 0),
			  (this._n = !1);
		  }).prototype = require("./_redefine-all")(k.prototype, {
			then: function (e, r) {
			  var t = S(l(this, k));
			  return (
				(t.ok = "function" != typeof e || e),
				(t.fail = "function" == typeof r && r),
				(t.domain = P ? g.domain : void 0),
				this._c.push(t),
				this._a && this._a.push(t),
				this._s && R(this, !1),
				t.promise
			  );
			},
			catch: function (e) {
			  return this.then(void 0, e);
			},
		  })),
		  (t = function () {
			var r = new e();
			(this.promise = r),
			  (this.resolve = c(U, r, 1)),
			  (this.reject = c(T, r, 1));
		  }),
		  (p.f = S =
			function (e) {
			  return e === k || e === i ? new t(e) : r(e);
			})),
		  u(u.G + u.W + u.F * !E, { Promise: k }),
		  require("./_set-to-string-tag")(k, j),
		  require("./_set-species")(j),
		  (i = require("./_core")[j]),
		  u(u.S + u.F * !E, j, {
			reject: function (e) {
			  var r = S(this);
			  return (0, r.reject)(e), r.promise;
			},
		  }),
		  u(u.S + u.F * (n || !E), j, {
			resolve: function (e) {
			  return y(n && this === i ? k : this, e);
			},
		  }),
		  u(
			u.S +
			  u.F *
				!(
				  E &&
				  require("./_iter-detect")(function (e) {
					k.all(e).catch(F);
				  })
				),
			j,
			{
			  all: function (e) {
				var r = this,
				  t = S(r),
				  i = t.resolve,
				  n = t.reject,
				  o = m(function () {
					var t = [],
					  o = 0,
					  c = 1;
					f(e, !1, function (e) {
					  var s = o++,
						u = !1;
					  t.push(void 0),
						c++,
						r.resolve(e).then(function (e) {
						  u || ((u = !0), (t[s] = e), --c || i(t));
						}, n);
					}),
					  --c || i(t);
				  });
				return o.e && n(o.v), t.promise;
			  },
			  race: function (e) {
				var r = this,
				  t = S(r),
				  i = t.reject,
				  n = m(function () {
					f(e, !1, function (e) {
					  r.resolve(e).then(t.resolve, i);
					});
				  });
				return n.e && i(n.v), t.promise;
			  },
			},
		  );
	  },
	  {
		"./_library": "1kq3",
		"./_global": "i1Q6",
		"./_ctx": "3zRh",
		"./_classof": "ZHvQ",
		"./_export": "vSO4",
		"./_is-object": "BxvP",
		"./_a-function": "g31e",
		"./_an-instance": "KUik",
		"./_for-of": "ozpD",
		"./_species-constructor": "B1ls",
		"./_task": "uzcO",
		"./_microtask": "H109",
		"./_new-promise-capability": "AIlg",
		"./_perform": "kX4D",
		"./_user-agent": "/cCi",
		"./_promise-resolve": "5Czc",
		"./_wks": "Ug9I",
		"./_redefine-all": "O6kh",
		"./_set-to-string-tag": "11Ut",
		"./_set-species": "FGzK",
		"./_core": "zKeE",
		"./_iter-detect": "Lli7",
	  },
	],
	zaru: [
	  function (require, module, exports) {
		"use strict";
		var r = require("./_export"),
		  e = require("./_core"),
		  t = require("./_global"),
		  n = require("./_species-constructor"),
		  i = require("./_promise-resolve");
		r(r.P + r.R, "Promise", {
		  finally: function (r) {
			var o = n(this, e.Promise || t.Promise),
			  u = "function" == typeof r;
			return this.then(
			  u
				? function (e) {
					return i(o, r()).then(function () {
					  return e;
					});
				  }
				: r,
			  u
				? function (e) {
					return i(o, r()).then(function () {
					  throw e;
					});
				  }
				: r,
			);
		  },
		});
	  },
	  {
		"./_export": "vSO4",
		"./_core": "zKeE",
		"./_global": "i1Q6",
		"./_species-constructor": "B1ls",
		"./_promise-resolve": "5Czc",
	  },
	],
	"+CEt": [
	  function (require, module, exports) {
		"use strict";
		var r = require("./_export"),
		  e = require("./_new-promise-capability"),
		  i = require("./_perform");
		r(r.S, "Promise", {
		  try: function (r) {
			var t = e.f(this),
			  o = i(r);
			return (o.e ? t.reject : t.resolve)(o.v), t.promise;
		  },
		});
	  },
	  {
		"./_export": "vSO4",
		"./_new-promise-capability": "AIlg",
		"./_perform": "kX4D",
	  },
	],
	"9u1Q": [
	  function (require, module, exports) {
		require("../modules/es6.object.to-string"),
		  require("../modules/es6.string.iterator"),
		  require("../modules/web.dom.iterable"),
		  require("../modules/es6.promise"),
		  require("../modules/es7.promise.finally"),
		  require("../modules/es7.promise.try"),
		  (module.exports = require("../modules/_core").Promise);
	  },
	  {
		"../modules/es6.object.to-string": "tuDi",
		"../modules/es6.string.iterator": "i+u+",
		"../modules/web.dom.iterable": "COf8",
		"../modules/es6.promise": "9kJF",
		"../modules/es7.promise.finally": "zaru",
		"../modules/es7.promise.try": "+CEt",
		"../modules/_core": "zKeE",
	  },
	],
	"7eOf": [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/promise");
	  },
	  { "core-js/library/fn/promise": "9u1Q" },
	],
	VtE8: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var s = (function () {
		  function s() {
			(this._disposables = []), (this._isDisposed = !1);
		  }
		  return (
			(s.prototype.dispose = function () {
			  (this._isDisposed = !0),
				this._disposables.forEach(function (s) {
				  return s.dispose();
				}),
				(this._disposables.length = 0);
			}),
			(s.prototype.register = function (s) {
			  this._disposables.push(s);
			}),
			(s.prototype.unregister = function (s) {
			  var e = this._disposables.indexOf(s);
			  -1 !== e && this._disposables.splice(e, 1);
			}),
			s
		  );
		})();
		exports.Disposable = s;
	  },
	  {},
	],
	lW8c: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, n) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(e, n);
			};
			return function (e, n) {
			  function o() {
				this.constructor = e;
			  }
			  t(e, n),
				(e.prototype =
				  null === n
					? Object.create(n)
					: ((o.prototype = n.prototype), new o()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./Lifecycle"),
		  n = (function (e) {
			function n() {
			  var t = e.call(this) || this;
			  return (t._events = t._events || {}), t;
			}
			return (
			  t(n, e),
			  (n.prototype.on = function (t, e) {
				(this._events[t] = this._events[t] || []),
				  this._events[t].push(e);
			  }),
			  (n.prototype.addDisposableListener = function (t, e) {
				var n = this;
				this.on(t, e);
				var o = !1;
				return {
				  dispose: function () {
					o || (n.off(t, e), (o = !0));
				  },
				};
			  }),
			  (n.prototype.off = function (t, e) {
				if (this._events[t])
				  for (var n = this._events[t], o = n.length; o--; )
					if (n[o] === e) return void n.splice(o, 1);
			  }),
			  (n.prototype.removeAllListeners = function (t) {
				this._events[t] && delete this._events[t];
			  }),
			  (n.prototype.emit = function (t) {
				for (var e = [], n = 1; n < arguments.length; n++)
				  e[n - 1] = arguments[n];
				if (this._events[t])
				  for (var o = this._events[t], r = 0; r < o.length; r++)
					o[r].apply(this, e);
			  }),
			  (n.prototype.listeners = function (t) {
				return this._events[t] || [];
			  }),
			  (n.prototype.dispose = function () {
				e.prototype.dispose.call(this), (this._events = {});
			  }),
			  n
			);
		  })(e.Disposable);
		exports.EventEmitter = n;
	  },
	  { "./Lifecycle": "VtE8" },
	],
	JJu0: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, i) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(e, i);
			};
			return function (e, i) {
			  function n() {
				this.constructor = e;
			  }
			  t(e, i),
				(e.prototype =
				  null === i
					? Object.create(i)
					: ((n.prototype = i.prototype), new n()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./EventEmitter"),
		  i = (function (e) {
			function i(t) {
			  var i = e.call(this) || this;
			  return (
				(i._maxLength = t),
				(i._array = new Array(i._maxLength)),
				(i._startIndex = 0),
				(i._length = 0),
				i
			  );
			}
			return (
			  t(i, e),
			  Object.defineProperty(i.prototype, "maxLength", {
				get: function () {
				  return this._maxLength;
				},
				set: function (t) {
				  if (this._maxLength !== t) {
					for (
					  var e = new Array(t), i = 0;
					  i < Math.min(t, this.length);
					  i++
					)
					  e[i] = this._array[this._getCyclicIndex(i)];
					(this._array = e),
					  (this._maxLength = t),
					  (this._startIndex = 0);
				  }
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(i.prototype, "length", {
				get: function () {
				  return this._length;
				},
				set: function (t) {
				  if (t > this._length)
					for (var e = this._length; e < t; e++)
					  this._array[e] = void 0;
				  this._length = t;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (i.prototype.get = function (t) {
				return this._array[this._getCyclicIndex(t)];
			  }),
			  (i.prototype.set = function (t, e) {
				this._array[this._getCyclicIndex(t)] = e;
			  }),
			  (i.prototype.push = function (t) {
				(this._array[this._getCyclicIndex(this._length)] = t),
				  this._length === this._maxLength
					? (this._startIndex++,
					  this._startIndex === this._maxLength &&
						(this._startIndex = 0),
					  this.emit("trim", 1))
					: this._length++;
			  }),
			  (i.prototype.pop = function () {
				return this._array[this._getCyclicIndex(this._length-- - 1)];
			  }),
			  (i.prototype.splice = function (t, e) {
				for (var i = [], n = 2; n < arguments.length; n++)
				  i[n - 2] = arguments[n];
				if (e) {
				  for (var r = t; r < this._length - e; r++)
					this._array[this._getCyclicIndex(r)] =
					  this._array[this._getCyclicIndex(r + e)];
				  this._length -= e;
				}
				if (i && i.length) {
				  for (r = this._length - 1; r >= t; r--)
					this._array[this._getCyclicIndex(r + i.length)] =
					  this._array[this._getCyclicIndex(r)];
				  for (r = 0; r < i.length; r++)
					this._array[this._getCyclicIndex(t + r)] = i[r];
				  if (this._length + i.length > this.maxLength) {
					var h = this._length + i.length - this.maxLength;
					(this._startIndex += h),
					  (this._length = this.maxLength),
					  this.emit("trim", h);
				  } else this._length += i.length;
				}
			  }),
			  (i.prototype.trimStart = function (t) {
				t > this._length && (t = this._length),
				  (this._startIndex += t),
				  (this._length -= t),
				  this.emit("trim", t);
			  }),
			  (i.prototype.shiftElements = function (t, e, i) {
				if (!(e <= 0)) {
				  if (t < 0 || t >= this._length)
					throw new Error("start argument out of range");
				  if (t + i < 0)
					throw new Error(
					  "Cannot shift elements in list beyond index 0",
					);
				  if (i > 0) {
					for (var n = e - 1; n >= 0; n--)
					  this.set(t + n + i, this.get(t + n));
					var r = t + e + i - this._length;
					if (r > 0)
					  for (this._length += r; this._length > this.maxLength; )
						this._length--,
						  this._startIndex++,
						  this.emit("trim", 1);
				  } else
					for (n = 0; n < e; n++)
					  this.set(t + n + i, this.get(t + n));
				}
			  }),
			  (i.prototype._getCyclicIndex = function (t) {
				return (this._startIndex + t) % this.maxLength;
			  }),
			  i
			);
		  })(e.EventEmitter);
		exports.CircularList = i;
	  },
	  { "./EventEmitter": "lW8c" },
	],
	dDZ9: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("./Buffer"),
		  e = (function () {
			function e(e, i, n) {
			  if (
				((this.isWrapped = !1),
				(this._data = []),
				(this.length = this._data.length),
				e)
			  ) {
				i ||
				  (i = [
					0,
					t.NULL_CELL_CHAR,
					t.NULL_CELL_WIDTH,
					t.NULL_CELL_CODE,
				  ]);
				for (var s = 0; s < e; s++) this.push(i);
			  }
			  n && (this.isWrapped = !0);
			}
			return (
			  (e.blankLine = function (i, n, s) {
				return new e(
				  i,
				  [n, t.NULL_CELL_CHAR, t.NULL_CELL_WIDTH, t.NULL_CELL_CODE],
				  s,
				);
			  }),
			  (e.prototype.get = function (t) {
				return this._data[t];
			  }),
			  (e.prototype.set = function (t, e) {
				this._data[t] = e;
			  }),
			  (e.prototype.pop = function () {
				var t = this._data.pop();
				return (this.length = this._data.length), t;
			  }),
			  (e.prototype.push = function (t) {
				this._data.push(t), (this.length = this._data.length);
			  }),
			  (e.prototype.splice = function (t, e) {
				for (var i, n = [], s = 2; s < arguments.length; s++)
				  n[s - 2] = arguments[s];
				var r = (i = this._data).splice.apply(i, [t, e].concat(n));
				return (this.length = this._data.length), r;
			  }),
			  (e.prototype.insertCells = function (t, e, i) {
				for (; e--; ) this.splice(t, 0, i), this.pop();
			  }),
			  (e.prototype.deleteCells = function (t, e, i) {
				for (; e--; ) this.splice(t, 1), this.push(i);
			  }),
			  (e.prototype.replaceCells = function (t, e, i) {
				for (; t < e && t < this.length; ) this.set(t++, i);
			  }),
			  e
			);
		  })();
		exports.BufferLine = e;
	  },
	  { "./Buffer": "nJkY" },
	],
	nJkY: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, s) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
				})(e, s);
			};
			return function (e, s) {
			  function i() {
				this.constructor = e;
			  }
			  t(e, s),
				(e.prototype =
				  null === s
					? Object.create(s)
					: ((i.prototype = s.prototype), new i()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./common/CircularList"),
		  s = require("./common/EventEmitter"),
		  i = require("./BufferLine");
		(exports.DEFAULT_ATTR = 131840),
		  (exports.CHAR_DATA_ATTR_INDEX = 0),
		  (exports.CHAR_DATA_CHAR_INDEX = 1),
		  (exports.CHAR_DATA_WIDTH_INDEX = 2),
		  (exports.CHAR_DATA_CODE_INDEX = 3),
		  (exports.MAX_BUFFER_SIZE = 4294967295),
		  (exports.NULL_CELL_CHAR = " "),
		  (exports.NULL_CELL_WIDTH = 1),
		  (exports.NULL_CELL_CODE = 32);
		var r = (function () {
		  function t(t, e) {
			(this._terminal = t),
			  (this._hasScrollback = e),
			  (this.markers = []),
			  this.clear();
		  }
		  return (
			Object.defineProperty(t.prototype, "hasScrollback", {
			  get: function () {
				return (
				  this._hasScrollback &&
				  this.lines.maxLength > this._terminal.rows
				);
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			Object.defineProperty(t.prototype, "isCursorInViewport", {
			  get: function () {
				var t = this.ybase + this.y - this.ydisp;
				return t >= 0 && t < this._terminal.rows;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			(t.prototype._getCorrectBufferLength = function (t) {
			  if (!this._hasScrollback) return t;
			  var e = t + this._terminal.options.scrollback;
			  return e > exports.MAX_BUFFER_SIZE ? exports.MAX_BUFFER_SIZE : e;
			}),
			(t.prototype.fillViewportRows = function () {
			  if (0 === this.lines.length)
				for (var t = this._terminal.rows; t--; )
				  this.lines.push(
					i.BufferLine.blankLine(
					  this._terminal.cols,
					  exports.DEFAULT_ATTR,
					),
				  );
			}),
			(t.prototype.clear = function () {
			  (this.ydisp = 0),
				(this.ybase = 0),
				(this.y = 0),
				(this.x = 0),
				(this.lines = new e.CircularList(
				  this._getCorrectBufferLength(this._terminal.rows),
				)),
				(this.scrollTop = 0),
				(this.scrollBottom = this._terminal.rows - 1),
				this.setupTabStops();
			}),
			(t.prototype.resize = function (t, e) {
			  var s = this._getCorrectBufferLength(e);
			  if (
				(s > this.lines.maxLength && (this.lines.maxLength = s),
				this.lines.length > 0)
			  ) {
				if (this._terminal.cols < t)
				  for (
					var r = [
						exports.DEFAULT_ATTR,
						exports.NULL_CELL_CHAR,
						exports.NULL_CELL_WIDTH,
						exports.NULL_CELL_CODE,
					  ],
					  n = 0;
					n < this.lines.length;
					n++
				  )
					for (; this.lines.get(n).length < t; )
					  this.lines.get(n).push(r);
				var o = 0;
				if (this._terminal.rows < e)
				  for (var h = this._terminal.rows; h < e; h++)
					this.lines.length < e + this.ybase &&
					  (this.ybase > 0 &&
					  this.lines.length <= this.ybase + this.y + o + 1
						? (this.ybase--, o++, this.ydisp > 0 && this.ydisp--)
						: this.lines.push(
							i.BufferLine.blankLine(t, exports.DEFAULT_ATTR),
						  ));
				else
				  for (h = this._terminal.rows; h > e; h--)
					this.lines.length > e + this.ybase &&
					  (this.lines.length > this.ybase + this.y + 1
						? this.lines.pop()
						: (this.ybase++, this.ydisp++));
				if (s < this.lines.maxLength) {
				  var a = this.lines.length - s;
				  a > 0 &&
					(this.lines.trimStart(a),
					(this.ybase = Math.max(this.ybase - a, 0)),
					(this.ydisp = Math.max(this.ydisp - a, 0))),
					(this.lines.maxLength = s);
				}
				(this.x = Math.min(this.x, t - 1)),
				  (this.y = Math.min(this.y, e - 1)),
				  o && (this.y += o),
				  (this.savedY = Math.min(this.savedY, e - 1)),
				  (this.savedX = Math.min(this.savedX, t - 1)),
				  (this.scrollTop = 0);
			  }
			  this.scrollBottom = e - 1;
			}),
			(t.prototype.stringIndexToBufferIndex = function (t, e) {
			  for (; e; ) {
				for (var s = this.lines.get(t), i = 0; i < s.length; ++i)
				  if ((e -= s.get(i)[exports.CHAR_DATA_CHAR_INDEX].length) < 0)
					return [t, i];
				t++;
			  }
			  return [t, 0];
			}),
			(t.prototype.translateBufferLineToString = function (t, e, s, i) {
			  void 0 === s && (s = 0), void 0 === i && (i = null);
			  var r = "",
				n = this.lines.get(t);
			  if (!n) return "";
			  var o = s;
			  null === i && (i = n.length);
			  for (var h = i, a = 0; a < n.length; a++) {
				var l = n.get(a);
				(r += l[exports.CHAR_DATA_CHAR_INDEX]),
				  0 === l[exports.CHAR_DATA_WIDTH_INDEX]
					? (s >= a && o--, i > a && h--)
					: l[exports.CHAR_DATA_CHAR_INDEX].length > 1 &&
					  (s > a &&
						(o += l[exports.CHAR_DATA_CHAR_INDEX].length - 1),
					  i > a &&
						(h += l[exports.CHAR_DATA_CHAR_INDEX].length - 1));
			  }
			  if (e) {
				var p = r.search(/\s+$/);
				if ((-1 !== p && (h = Math.min(h, p)), h <= o)) return "";
			  }
			  return r.substring(o, h);
			}),
			(t.prototype.getWrappedRangeForLine = function (t) {
			  for (var e = t, s = t; e > 0 && this.lines.get(e).isWrapped; )
				e--;
			  for (
				;
				s + 1 < this.lines.length && this.lines.get(s + 1).isWrapped;

			  )
				s++;
			  return { first: e, last: s };
			}),
			(t.prototype.setupTabStops = function (t) {
			  for (
				null != t
				  ? this.tabs[t] || (t = this.prevStop(t))
				  : ((this.tabs = {}), (t = 0));
				t < this._terminal.cols;
				t += this._terminal.options.tabStopWidth
			  )
				this.tabs[t] = !0;
			}),
			(t.prototype.prevStop = function (t) {
			  for (null == t && (t = this.x); !this.tabs[--t] && t > 0; );
			  return t >= this._terminal.cols
				? this._terminal.cols - 1
				: t < 0
				  ? 0
				  : t;
			}),
			(t.prototype.nextStop = function (t) {
			  for (
				null == t && (t = this.x);
				!this.tabs[++t] && t < this._terminal.cols;

			  );
			  return t >= this._terminal.cols
				? this._terminal.cols - 1
				: t < 0
				  ? 0
				  : t;
			}),
			(t.prototype.addMarker = function (t) {
			  var e = this,
				s = new n(t);
			  return (
				this.markers.push(s),
				s.register(
				  this.lines.addDisposableListener("trim", function (t) {
					(s.line -= t), s.line < 0 && s.dispose();
				  }),
				),
				s.register(
				  s.addDisposableListener("dispose", function () {
					return e._removeMarker(s);
				  }),
				),
				s
			  );
			}),
			(t.prototype._removeMarker = function (t) {
			  this.markers.splice(this.markers.indexOf(t), 1);
			}),
			(t.prototype.iterator = function (t, e, s, i, r) {
			  return new o(this, t, e, s, i, r);
			}),
			t
		  );
		})();
		exports.Buffer = r;
		var n = (function (e) {
		  function s(t) {
			var i = e.call(this) || this;
			return (i.line = t), (i._id = s._nextId++), (i.isDisposed = !1), i;
		  }
		  return (
			t(s, e),
			Object.defineProperty(s.prototype, "id", {
			  get: function () {
				return this._id;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			(s.prototype.dispose = function () {
			  this.isDisposed ||
				((this.isDisposed = !0),
				this.emit("dispose"),
				e.prototype.dispose.call(this));
			}),
			(s._nextId = 1),
			s
		  );
		})(s.EventEmitter);
		exports.Marker = n;
		var o = (function () {
		  function t(t, e, s, i, r, n) {
			void 0 === s && (s = 0),
			  void 0 === i && (i = t.lines.length),
			  void 0 === r && (r = 0),
			  void 0 === n && (n = 0),
			  (this._buffer = t),
			  (this._trimRight = e),
			  (this._startIndex = s),
			  (this._endIndex = i),
			  (this._startOverscan = r),
			  (this._endOverscan = n),
			  this._startIndex < 0 && (this._startIndex = 0),
			  this._endIndex > this._buffer.lines.length &&
				(this._endIndex = this._buffer.lines.length),
			  (this._current = this._startIndex);
		  }
		  return (
			(t.prototype.hasNext = function () {
			  return this._current < this._endIndex;
			}),
			(t.prototype.next = function () {
			  var t = this._buffer.getWrappedRangeForLine(this._current);
			  t.first < this._startIndex - this._startOverscan &&
				(t.first = this._startIndex - this._startOverscan),
				t.last > this._endIndex + this._endOverscan &&
				  (t.last = this._endIndex + this._endOverscan),
				(t.first = Math.max(t.first, 0)),
				(t.last = Math.min(t.last, this._buffer.lines.length));
			  for (var e = "", s = t.first; s <= t.last; ++s)
				e += this._buffer.translateBufferLineToString(
				  s,
				  !!this._trimRight && s === t.last,
				);
			  return (this._current = t.last + 1), { range: t, content: e };
			}),
			t
		  );
		})();
		exports.BufferStringIterator = o;
	  },
	  {
		"./common/CircularList": "JJu0",
		"./common/EventEmitter": "lW8c",
		"./BufferLine": "dDZ9",
	  },
	],
	cxFs: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, r) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
				})(e, r);
			};
			return function (e, r) {
			  function i() {
				this.constructor = e;
			  }
			  t(e, r),
				(e.prototype =
				  null === r
					? Object.create(r)
					: ((i.prototype = r.prototype), new i()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./Buffer"),
		  r = require("./common/EventEmitter"),
		  i = (function (r) {
			function i(t) {
			  var i = r.call(this) || this;
			  return (
				(i._terminal = t),
				(i._normal = new e.Buffer(i._terminal, !0)),
				i._normal.fillViewportRows(),
				(i._alt = new e.Buffer(i._terminal, !1)),
				(i._activeBuffer = i._normal),
				i.setupTabStops(),
				i
			  );
			}
			return (
			  t(i, r),
			  Object.defineProperty(i.prototype, "alt", {
				get: function () {
				  return this._alt;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(i.prototype, "active", {
				get: function () {
				  return this._activeBuffer;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(i.prototype, "normal", {
				get: function () {
				  return this._normal;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (i.prototype.activateNormalBuffer = function () {
				this._activeBuffer !== this._normal &&
				  (this._alt.clear(),
				  (this._activeBuffer = this._normal),
				  this.emit("activate", {
					activeBuffer: this._normal,
					inactiveBuffer: this._alt,
				  }));
			  }),
			  (i.prototype.activateAltBuffer = function () {
				this._activeBuffer !== this._alt &&
				  (this._alt.fillViewportRows(),
				  (this._activeBuffer = this._alt),
				  this.emit("activate", {
					activeBuffer: this._alt,
					inactiveBuffer: this._normal,
				  }));
			  }),
			  (i.prototype.resize = function (t, e) {
				this._normal.resize(t, e), this._alt.resize(t, e);
			  }),
			  (i.prototype.setupTabStops = function (t) {
				this._normal.setupTabStops(t), this._alt.setupTabStops(t);
			  }),
			  i
			);
		  })(r.EventEmitter);
		exports.BufferSet = i;
	  },
	  { "./Buffer": "nJkY", "./common/EventEmitter": "lW8c" },
	],
	ZmpO: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = (function () {
		  function t(t, i, e) {
			(this._textarea = t),
			  (this._compositionView = i),
			  (this._terminal = e),
			  (this._isComposing = !1),
			  (this._isSendingComposition = !1),
			  (this._compositionPosition = { start: null, end: null });
		  }
		  return (
			(t.prototype.compositionstart = function () {
			  (this._isComposing = !0),
				(this._compositionPosition.start = this._textarea.value.length),
				(this._compositionView.textContent = ""),
				this._compositionView.classList.add("active");
			}),
			(t.prototype.compositionupdate = function (t) {
			  var i = this;
			  (this._compositionView.textContent = t.data),
				this.updateCompositionElements(),
				setTimeout(function () {
				  i._compositionPosition.end = i._textarea.value.length;
				}, 0);
			}),
			(t.prototype.compositionend = function () {
			  this._finalizeComposition(!0);
			}),
			(t.prototype.keydown = function (t) {
			  if (this._isComposing || this._isSendingComposition) {
				if (229 === t.keyCode) return !1;
				if (16 === t.keyCode || 17 === t.keyCode || 18 === t.keyCode)
				  return !1;
				this._finalizeComposition(!1);
			  }
			  return (
				229 !== t.keyCode || (this._handleAnyTextareaChanges(), !1)
			  );
			}),
			(t.prototype._finalizeComposition = function (t) {
			  var i = this;
			  if (
				(this._compositionView.classList.remove("active"),
				(this._isComposing = !1),
				this._clearTextareaPosition(),
				t)
			  ) {
				var e = {
				  start: this._compositionPosition.start,
				  end: this._compositionPosition.end,
				};
				(this._isSendingComposition = !0),
				  setTimeout(function () {
					if (i._isSendingComposition) {
					  i._isSendingComposition = !1;
					  var t = void 0;
					  (t = i._isComposing
						? i._textarea.value.substring(e.start, e.end)
						: i._textarea.value.substring(e.start)),
						i._terminal.handler(t);
					}
				  }, 0);
			  } else {
				this._isSendingComposition = !1;
				var o = this._textarea.value.substring(
				  this._compositionPosition.start,
				  this._compositionPosition.end,
				);
				this._terminal.handler(o);
			  }
			}),
			(t.prototype._handleAnyTextareaChanges = function () {
			  var t = this,
				i = this._textarea.value;
			  setTimeout(function () {
				if (!t._isComposing) {
				  var e = t._textarea.value.replace(i, "");
				  e.length > 0 && t._terminal.handler(e);
				}
			  }, 0);
			}),
			(t.prototype.updateCompositionElements = function (t) {
			  var i = this;
			  if (this._isComposing) {
				if (this._terminal.buffer.isCursorInViewport) {
				  var e = Math.ceil(
					  this._terminal.charMeasure.height *
						this._terminal.options.lineHeight,
					),
					o = this._terminal.buffer.y * e,
					s =
					  this._terminal.buffer.x *
					  this._terminal.charMeasure.width;
				  (this._compositionView.style.left = s + "px"),
					(this._compositionView.style.top = o + "px"),
					(this._compositionView.style.height = e + "px"),
					(this._compositionView.style.lineHeight = e + "px");
				  var n = this._compositionView.getBoundingClientRect();
				  (this._textarea.style.left = s + "px"),
					(this._textarea.style.top = o + "px"),
					(this._textarea.style.width = n.width + "px"),
					(this._textarea.style.height = n.height + "px"),
					(this._textarea.style.lineHeight = n.height + "px");
				}
				t ||
				  setTimeout(function () {
					return i.updateCompositionElements(!0);
				  }, 0);
			  }
			}),
			(t.prototype._clearTextareaPosition = function () {
			  (this._textarea.style.left = ""), (this._textarea.style.top = "");
			}),
			t
		  );
		})();
		exports.CompositionHelper = t;
	  },
	  {},
	],
	"0SNy": [
	  function (require, module, exports) {
		"use strict";
		function e(e, t, n, s) {
		  return (
			e.addEventListener(t, n, s),
			{
			  dispose: function () {
				n && (e.removeEventListener(t, n, s), (e = null), (n = null));
			  },
			}
		  );
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.addDisposableDomListener = e);
	  },
	  {},
	],
	"8hXU": [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__extends) ||
		  (function () {
			var e = function (t, r) {
			  return (e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (e, t) {
					e.__proto__ = t;
				  }) ||
				function (e, t) {
				  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
				})(t, r);
			};
			return function (t, r) {
			  function i() {
				this.constructor = t;
			  }
			  e(t, r),
				(t.prototype =
				  null === r
					? Object.create(r)
					: ((i.prototype = r.prototype), new i()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("./common/Lifecycle"),
		  r = require("./ui/Lifecycle"),
		  i = 15,
		  o = (function (t) {
			function o(e, o, l, s) {
			  var n = t.call(this) || this;
			  return (
				(n._terminal = e),
				(n._viewportElement = o),
				(n._scrollArea = l),
				(n._charMeasure = s),
				(n.scrollBarWidth = 0),
				(n._currentRowHeight = 0),
				(n._lastRecordedBufferLength = 0),
				(n._lastRecordedViewportHeight = 0),
				(n._lastRecordedBufferHeight = 0),
				(n._lastScrollTop = 0),
				(n._wheelPartialScroll = 0),
				(n._refreshAnimationFrame = null),
				(n._ignoreNextScrollEvent = !1),
				(n.scrollBarWidth =
				  n._viewportElement.offsetWidth - n._scrollArea.offsetWidth ||
				  i),
				n.register(
				  r.addDisposableDomListener(
					n._viewportElement,
					"scroll",
					n._onScroll.bind(n),
				  ),
				),
				setTimeout(function () {
				  return n.syncScrollArea();
				}, 0),
				n
			  );
			}
			return (
			  e(o, t),
			  (o.prototype.onThemeChanged = function (e) {
				this._viewportElement.style.backgroundColor = e.background.css;
			  }),
			  (o.prototype._refresh = function () {
				var e = this;
				null === this._refreshAnimationFrame &&
				  (this._refreshAnimationFrame = requestAnimationFrame(
					function () {
					  return e._innerRefresh();
					},
				  ));
			  }),
			  (o.prototype._innerRefresh = function () {
				if (this._charMeasure.height > 0) {
				  (this._currentRowHeight =
					this._terminal.renderer.dimensions.scaledCellHeight /
					window.devicePixelRatio),
					(this._lastRecordedViewportHeight =
					  this._viewportElement.offsetHeight);
				  var e =
					Math.round(
					  this._currentRowHeight * this._lastRecordedBufferLength,
					) +
					(this._lastRecordedViewportHeight -
					  this._terminal.renderer.dimensions.canvasHeight);
				  this._lastRecordedBufferHeight !== e &&
					((this._lastRecordedBufferHeight = e),
					(this._scrollArea.style.height =
					  this._lastRecordedBufferHeight + "px"));
				}
				var t = this._terminal.buffer.ydisp * this._currentRowHeight;
				this._viewportElement.scrollTop !== t &&
				  ((this._ignoreNextScrollEvent = !0),
				  (this._viewportElement.scrollTop = t)),
				  (this._refreshAnimationFrame = null);
			  }),
			  (o.prototype.syncScrollArea = function () {
				if (
				  this._lastRecordedBufferLength !==
				  this._terminal.buffer.lines.length
				)
				  return (
					(this._lastRecordedBufferLength =
					  this._terminal.buffer.lines.length),
					void this._refresh()
				  );
				if (
				  this._lastRecordedViewportHeight ===
				  this._terminal.renderer.dimensions.canvasHeight
				) {
				  var e = this._terminal.buffer.ydisp * this._currentRowHeight;
				  (this._lastScrollTop === e &&
					this._lastScrollTop === this._viewportElement.scrollTop &&
					this._terminal.renderer.dimensions.scaledCellHeight /
					  window.devicePixelRatio ===
					  this._currentRowHeight) ||
					this._refresh();
				} else this._refresh();
			  }),
			  (o.prototype._onScroll = function (e) {
				if (
				  ((this._lastScrollTop = this._viewportElement.scrollTop),
				  this._viewportElement.offsetParent)
				)
				  if (this._ignoreNextScrollEvent)
					this._ignoreNextScrollEvent = !1;
				  else {
					var t =
					  Math.round(this._lastScrollTop / this._currentRowHeight) -
					  this._terminal.buffer.ydisp;
					this._terminal.scrollLines(t, !0);
				  }
			  }),
			  (o.prototype.onWheel = function (e) {
				var t = this._getPixelsScrolled(e);
				0 !== t &&
				  ((this._viewportElement.scrollTop += t), e.preventDefault());
			  }),
			  (o.prototype._getPixelsScrolled = function (e) {
				if (0 === e.deltaY) return 0;
				var t = e.deltaY;
				return (
				  e.deltaMode === WheelEvent.DOM_DELTA_LINE
					? (t *= this._currentRowHeight)
					: e.deltaMode === WheelEvent.DOM_DELTA_PAGE &&
					  (t *= this._currentRowHeight * this._terminal.rows),
				  t
				);
			  }),
			  (o.prototype.getLinesScrolled = function (e) {
				if (0 === e.deltaY) return 0;
				var t = e.deltaY;
				return (
				  e.deltaMode === WheelEvent.DOM_DELTA_PIXEL
					? ((t /= this._currentRowHeight + 0),
					  (this._wheelPartialScroll += t),
					  (t =
						Math.floor(Math.abs(this._wheelPartialScroll)) *
						(this._wheelPartialScroll > 0 ? 1 : -1)),
					  (this._wheelPartialScroll %= 1))
					: e.deltaMode === WheelEvent.DOM_DELTA_PAGE &&
					  (t *= this._terminal.rows),
				  t
				);
			  }),
			  (o.prototype.onTouchStart = function (e) {
				this._lastTouchY = e.touches[0].pageY;
			  }),
			  (o.prototype.onTouchMove = function (e) {
				var t = this._lastTouchY - e.touches[0].pageY;
				(this._lastTouchY = e.touches[0].pageY),
				  0 !== t &&
					((this._viewportElement.scrollTop += t),
					e.preventDefault());
			  }),
			  o
			);
		  })(t.Disposable);
		exports.Viewport = o;
	  },
	  { "./common/Lifecycle": "VtE8", "./ui/Lifecycle": "0SNy" },
	],
	"3c3X": [
	  function (require, module, exports) {
		"use strict";
		function e(e) {
		  return e.replace(/\r?\n/g, "\r");
		}
		function t(e, t) {
		  return t ? "[200~" + e + "[201~" : e;
		}
		function l(e, t, l) {
		  t.browser.isMSIE
			? window.clipboardData.setData("Text", l.selectionText)
			: e.clipboardData.setData("text/plain", l.selectionText),
			e.preventDefault();
		}
		function a(l, a) {
		  l.stopPropagation();
		  var o = function (o) {
			(o = t((o = e(o)), a.bracketedPasteMode)),
			  a.handler(o),
			  (a.textarea.value = ""),
			  a.emit("paste", o),
			  a.cancel(l);
		  };
		  a.browser.isMSIE
			? window.clipboardData && o(window.clipboardData.getData("Text"))
			: l.clipboardData && o(l.clipboardData.getData("text/plain"));
		}
		function o(e, t) {
		  (t.style.position = "fixed"),
			(t.style.width = "20px"),
			(t.style.height = "20px"),
			(t.style.left = e.clientX - 10 + "px"),
			(t.style.top = e.clientY - 10 + "px"),
			(t.style.zIndex = "1000"),
			t.focus(),
			setTimeout(function () {
			  (t.style.position = null),
				(t.style.width = null),
				(t.style.height = null),
				(t.style.left = null),
				(t.style.top = null),
				(t.style.zIndex = null);
			}, 200);
		}
		function n(e, t, l, a) {
		  o(e, t),
			a && !l.isClickInSelection(e) && l.selectWordAtCursor(e),
			(t.value = l.selectionText),
			t.select();
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.prepareTextForTerminal = e),
		  (exports.bracketTextForPaste = t),
		  (exports.copyHandler = l),
		  (exports.pasteHandler = a),
		  (exports.moveTextAreaUnderMouseCursor = o),
		  (exports.rightClickHandler = n);
	  },
	  {},
	],
	xnQp: [
	  function (require, module, exports) {
		"use strict";
		var S, C;
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (function (S) {
			(S.NUL = "\0"),
			  (S.SOH = ""),
			  (S.STX = ""),
			  (S.ETX = ""),
			  (S.EOT = ""),
			  (S.ENQ = ""),
			  (S.ACK = ""),
			  (S.BEL = ""),
			  (S.BS = "\b"),
			  (S.HT = "\t"),
			  (S.LF = "\n"),
			  (S.VT = "\v"),
			  (S.FF = "\f"),
			  (S.CR = "\r"),
			  (S.SO = ""),
			  (S.SI = ""),
			  (S.DLE = ""),
			  (S.DC1 = ""),
			  (S.DC2 = ""),
			  (S.DC3 = ""),
			  (S.DC4 = ""),
			  (S.NAK = ""),
			  (S.SYN = ""),
			  (S.ETB = ""),
			  (S.CAN = ""),
			  (S.EM = ""),
			  (S.SUB = ""),
			  (S.ESC = ""),
			  (S.FS = ""),
			  (S.GS = ""),
			  (S.RS = ""),
			  (S.US = ""),
			  (S.SP = " "),
			  (S.DEL = "");
		  })((S = exports.C0 || (exports.C0 = {}))),
		  (function (S) {
			(S.PAD = ""),
			  (S.HOP = ""),
			  (S.BPH = ""),
			  (S.NBH = ""),
			  (S.IND = ""),
			  (S.NEL = ""),
			  (S.SSA = ""),
			  (S.ESA = ""),
			  (S.HTS = ""),
			  (S.HTJ = ""),
			  (S.VTS = ""),
			  (S.PLD = ""),
			  (S.PLU = ""),
			  (S.RI = ""),
			  (S.SS2 = ""),
			  (S.SS3 = ""),
			  (S.DCS = ""),
			  (S.PU1 = ""),
			  (S.PU2 = ""),
			  (S.STS = ""),
			  (S.CCH = ""),
			  (S.MW = ""),
			  (S.SPA = ""),
			  (S.EPA = ""),
			  (S.SOS = ""),
			  (S.SGCI = ""),
			  (S.SCI = ""),
			  (S.CSI = ""),
			  (S.ST = ""),
			  (S.OSC = ""),
			  (S.PM = ""),
			  (S.APC = "");
		  })((C = exports.C1 || (exports.C1 = {})));
	  },
	  {},
	],
	"6f5g": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.CHARSETS = {}),
		  (exports.DEFAULT_CHARSET = exports.CHARSETS.B),
		  (exports.CHARSETS[0] = {
			"`": "◆",
			a: "▒",
			b: "\t",
			c: "\f",
			d: "\r",
			e: "\n",
			f: "°",
			g: "±",
			h: "␤",
			i: "\v",
			j: "┘",
			k: "┐",
			l: "┌",
			m: "└",
			n: "┼",
			o: "⎺",
			p: "⎻",
			q: "─",
			r: "⎼",
			s: "⎽",
			t: "├",
			u: "┤",
			v: "┴",
			w: "┬",
			x: "│",
			y: "≤",
			z: "≥",
			"{": "π",
			"|": "≠",
			"}": "£",
			"~": "·",
		  }),
		  (exports.CHARSETS.A = { "#": "£" }),
		  (exports.CHARSETS.B = null),
		  (exports.CHARSETS[4] = {
			"#": "£",
			"@": "¾",
			"[": "ij",
			"\\": "½",
			"]": "|",
			"{": "¨",
			"|": "f",
			"}": "¼",
			"~": "´",
		  }),
		  (exports.CHARSETS.C = exports.CHARSETS[5] =
			{
			  "[": "Ä",
			  "\\": "Ö",
			  "]": "Å",
			  "^": "Ü",
			  "`": "é",
			  "{": "ä",
			  "|": "ö",
			  "}": "å",
			  "~": "ü",
			}),
		  (exports.CHARSETS.R = {
			"#": "£",
			"@": "à",
			"[": "°",
			"\\": "ç",
			"]": "§",
			"{": "é",
			"|": "ù",
			"}": "è",
			"~": "¨",
		  }),
		  (exports.CHARSETS.Q = {
			"@": "à",
			"[": "â",
			"\\": "ç",
			"]": "ê",
			"^": "î",
			"`": "ô",
			"{": "é",
			"|": "ù",
			"}": "è",
			"~": "û",
		  }),
		  (exports.CHARSETS.K = {
			"@": "§",
			"[": "Ä",
			"\\": "Ö",
			"]": "Ü",
			"{": "ä",
			"|": "ö",
			"}": "ü",
			"~": "ß",
		  }),
		  (exports.CHARSETS.Y = {
			"#": "£",
			"@": "§",
			"[": "°",
			"\\": "ç",
			"]": "é",
			"`": "ù",
			"{": "à",
			"|": "ò",
			"}": "è",
			"~": "ì",
		  }),
		  (exports.CHARSETS.E = exports.CHARSETS[6] =
			{
			  "@": "Ä",
			  "[": "Æ",
			  "\\": "Ø",
			  "]": "Å",
			  "^": "Ü",
			  "`": "ä",
			  "{": "æ",
			  "|": "ø",
			  "}": "å",
			  "~": "ü",
			}),
		  (exports.CHARSETS.Z = {
			"#": "£",
			"@": "§",
			"[": "¡",
			"\\": "Ñ",
			"]": "¿",
			"{": "°",
			"|": "ñ",
			"}": "ç",
		  }),
		  (exports.CHARSETS.H = exports.CHARSETS[7] =
			{
			  "@": "É",
			  "[": "Ä",
			  "\\": "Ö",
			  "]": "Å",
			  "^": "Ü",
			  "`": "é",
			  "{": "ä",
			  "|": "ö",
			  "}": "å",
			  "~": "ü",
			}),
		  (exports.CHARSETS["="] = {
			"#": "ù",
			"@": "à",
			"[": "é",
			"\\": "ç",
			"]": "ê",
			"^": "î",
			_: "è",
			"`": "ô",
			"{": "ä",
			"|": "ö",
			"}": "ü",
			"~": "û",
		  });
	  },
	  {},
	],
	"Xux/": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
	  },
	  {},
	],
	lZiw: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var I,
		  e = require("../shared/Types");
		(exports.IColorSet = e.IColorSet),
		  (function (I) {
			(I[(I.BOLD = 1)] = "BOLD"),
			  (I[(I.UNDERLINE = 2)] = "UNDERLINE"),
			  (I[(I.BLINK = 4)] = "BLINK"),
			  (I[(I.INVERSE = 8)] = "INVERSE"),
			  (I[(I.INVISIBLE = 16)] = "INVISIBLE"),
			  (I[(I.DIM = 32)] = "DIM"),
			  (I[(I.ITALIC = 64)] = "ITALIC");
		  })((I = exports.FLAGS || (exports.FLAGS = {})));
	  },
	  { "../shared/Types": "Xux/" },
	],
	"6Lzu": [
	  function (require, module, exports) {
		"use strict";
		function r(r) {
		  for (var t = 0, n = 0; n < r.length; ++n) {
			var e = r.charCodeAt(n);
			if (55296 <= e && e <= 56319) {
			  var o = r.charCodeAt(n + 1);
			  if (isNaN(o)) return t;
			  e = 1024 * (e - 55296) + (o - 56320) + 65536;
			}
			(56320 <= e && e <= 57343) || (t += exports.wcwidth(e));
		  }
		  return t;
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.wcwidth = (function (r) {
			var t = [
				[768, 879],
				[1155, 1158],
				[1160, 1161],
				[1425, 1469],
				[1471, 1471],
				[1473, 1474],
				[1476, 1477],
				[1479, 1479],
				[1536, 1539],
				[1552, 1557],
				[1611, 1630],
				[1648, 1648],
				[1750, 1764],
				[1767, 1768],
				[1770, 1773],
				[1807, 1807],
				[1809, 1809],
				[1840, 1866],
				[1958, 1968],
				[2027, 2035],
				[2305, 2306],
				[2364, 2364],
				[2369, 2376],
				[2381, 2381],
				[2385, 2388],
				[2402, 2403],
				[2433, 2433],
				[2492, 2492],
				[2497, 2500],
				[2509, 2509],
				[2530, 2531],
				[2561, 2562],
				[2620, 2620],
				[2625, 2626],
				[2631, 2632],
				[2635, 2637],
				[2672, 2673],
				[2689, 2690],
				[2748, 2748],
				[2753, 2757],
				[2759, 2760],
				[2765, 2765],
				[2786, 2787],
				[2817, 2817],
				[2876, 2876],
				[2879, 2879],
				[2881, 2883],
				[2893, 2893],
				[2902, 2902],
				[2946, 2946],
				[3008, 3008],
				[3021, 3021],
				[3134, 3136],
				[3142, 3144],
				[3146, 3149],
				[3157, 3158],
				[3260, 3260],
				[3263, 3263],
				[3270, 3270],
				[3276, 3277],
				[3298, 3299],
				[3393, 3395],
				[3405, 3405],
				[3530, 3530],
				[3538, 3540],
				[3542, 3542],
				[3633, 3633],
				[3636, 3642],
				[3655, 3662],
				[3761, 3761],
				[3764, 3769],
				[3771, 3772],
				[3784, 3789],
				[3864, 3865],
				[3893, 3893],
				[3895, 3895],
				[3897, 3897],
				[3953, 3966],
				[3968, 3972],
				[3974, 3975],
				[3984, 3991],
				[3993, 4028],
				[4038, 4038],
				[4141, 4144],
				[4146, 4146],
				[4150, 4151],
				[4153, 4153],
				[4184, 4185],
				[4448, 4607],
				[4959, 4959],
				[5906, 5908],
				[5938, 5940],
				[5970, 5971],
				[6002, 6003],
				[6068, 6069],
				[6071, 6077],
				[6086, 6086],
				[6089, 6099],
				[6109, 6109],
				[6155, 6157],
				[6313, 6313],
				[6432, 6434],
				[6439, 6440],
				[6450, 6450],
				[6457, 6459],
				[6679, 6680],
				[6912, 6915],
				[6964, 6964],
				[6966, 6970],
				[6972, 6972],
				[6978, 6978],
				[7019, 7027],
				[7616, 7626],
				[7678, 7679],
				[8203, 8207],
				[8234, 8238],
				[8288, 8291],
				[8298, 8303],
				[8400, 8431],
				[12330, 12335],
				[12441, 12442],
				[43014, 43014],
				[43019, 43019],
				[43045, 43046],
				[64286, 64286],
				[65024, 65039],
				[65056, 65059],
				[65279, 65279],
				[65529, 65531],
			  ],
			  n = [
				[68097, 68099],
				[68101, 68102],
				[68108, 68111],
				[68152, 68154],
				[68159, 68159],
				[119143, 119145],
				[119155, 119170],
				[119173, 119179],
				[119210, 119213],
				[119362, 119364],
				[917505, 917505],
				[917536, 917631],
				[917760, 917999],
			  ];
			function e(r, t) {
			  var n,
				e = 0,
				o = t.length - 1;
			  if (r < t[0][0] || r > t[o][1]) return !1;
			  for (; o >= e; )
				if (r > t[(n = (e + o) >> 1)][1]) e = n + 1;
				else {
				  if (!(r < t[n][0])) return !0;
				  o = n - 1;
				}
			  return !1;
			}
			var o = 0 | r.control,
			  u = null;
			return function (i) {
			  if ((i |= 0) < 32) return 0 | o;
			  if (i < 127) return 1;
			  var f,
				a =
				  u ||
				  (function () {
					var n;
					u =
					  "undefined" == typeof Uint32Array
						? new Array(4096)
						: new Uint32Array(4096);
					for (var o = 0; o < 4096; ++o) {
					  for (var i = 0, f = 16; f--; )
						i =
						  (i << 2) |
						  (0 === (n = 16 * o + f)
							? r.nul
							: n < 32 || (n >= 127 && n < 160)
							  ? r.control
							  : e(n, t)
								? 0
								: (function (r) {
									  return (
										r >= 4352 &&
										(r <= 4447 ||
										  9001 === r ||
										  9002 === r ||
										  (r >= 11904 &&
											r <= 42191 &&
											12351 !== r) ||
										  (r >= 44032 && r <= 55203) ||
										  (r >= 63744 && r <= 64255) ||
										  (r >= 65040 && r <= 65049) ||
										  (r >= 65072 && r <= 65135) ||
										  (r >= 65280 && r <= 65376) ||
										  (r >= 65504 && r <= 65510))
									  );
									})(n)
								  ? 2
								  : 1);
					  u[o] = i;
					}
					return u;
				  })();
			  return i < 65536
				? (a[i >> 4] >> ((15 & i) << 1)) & 3
				: e((f = i), n)
				  ? 0
				  : (f >= 131072 && f <= 196605) || (f >= 196608 && f <= 262141)
					? 2
					: 1;
			};
		  })({ nul: 0, control: 0 })),
		  (exports.getStringCellWidth = r);
	  },
	  {},
	],
	"4kff": [
	  function (require, module, exports) {
		"use strict";
		var S, E, C;
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (function (S) {
			(S.HOVER = "linkhover"),
			  (S.TOOLTIP = "linktooltip"),
			  (S.LEAVE = "linkleave");
		  })(
			(S =
			  exports.LinkHoverEventTypes ||
			  (exports.LinkHoverEventTypes = {})),
		  ),
		  (function (S) {
			(S[(S.GROUND = 0)] = "GROUND"),
			  (S[(S.ESCAPE = 1)] = "ESCAPE"),
			  (S[(S.ESCAPE_INTERMEDIATE = 2)] = "ESCAPE_INTERMEDIATE"),
			  (S[(S.CSI_ENTRY = 3)] = "CSI_ENTRY"),
			  (S[(S.CSI_PARAM = 4)] = "CSI_PARAM"),
			  (S[(S.CSI_INTERMEDIATE = 5)] = "CSI_INTERMEDIATE"),
			  (S[(S.CSI_IGNORE = 6)] = "CSI_IGNORE"),
			  (S[(S.SOS_PM_APC_STRING = 7)] = "SOS_PM_APC_STRING"),
			  (S[(S.OSC_STRING = 8)] = "OSC_STRING"),
			  (S[(S.DCS_ENTRY = 9)] = "DCS_ENTRY"),
			  (S[(S.DCS_PARAM = 10)] = "DCS_PARAM"),
			  (S[(S.DCS_IGNORE = 11)] = "DCS_IGNORE"),
			  (S[(S.DCS_INTERMEDIATE = 12)] = "DCS_INTERMEDIATE"),
			  (S[(S.DCS_PASSTHROUGH = 13)] = "DCS_PASSTHROUGH");
		  })((E = exports.ParserState || (exports.ParserState = {}))),
		  (function (S) {
			(S[(S.IGNORE = 0)] = "IGNORE"),
			  (S[(S.ERROR = 1)] = "ERROR"),
			  (S[(S.PRINT = 2)] = "PRINT"),
			  (S[(S.EXECUTE = 3)] = "EXECUTE"),
			  (S[(S.OSC_START = 4)] = "OSC_START"),
			  (S[(S.OSC_PUT = 5)] = "OSC_PUT"),
			  (S[(S.OSC_END = 6)] = "OSC_END"),
			  (S[(S.CSI_DISPATCH = 7)] = "CSI_DISPATCH"),
			  (S[(S.PARAM = 8)] = "PARAM"),
			  (S[(S.COLLECT = 9)] = "COLLECT"),
			  (S[(S.ESC_DISPATCH = 10)] = "ESC_DISPATCH"),
			  (S[(S.CLEAR = 11)] = "CLEAR"),
			  (S[(S.DCS_HOOK = 12)] = "DCS_HOOK"),
			  (S[(S.DCS_PUT = 13)] = "DCS_PUT"),
			  (S[(S.DCS_UNHOOK = 14)] = "DCS_UNHOOK");
		  })((C = exports.ParserAction || (exports.ParserAction = {})));
	  },
	  {},
	],
	k6J0: [
	  function (require, module, exports) {
		"use strict";
		var r =
		  (this && this.__extends) ||
		  (function () {
			var r = function (a, e) {
			  return (r =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (r, a) {
					r.__proto__ = a;
				  }) ||
				function (r, a) {
				  for (var e in a) a.hasOwnProperty(e) && (r[e] = a[e]);
				})(a, e);
			};
			return function (a, e) {
			  function t() {
				this.constructor = a;
			  }
			  r(a, e),
				(a.prototype =
				  null === e
					? Object.create(e)
					: ((t.prototype = e.prototype), new t()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var a = require("./Types"),
		  e = require("./common/Lifecycle");
		function t(r, a) {
		  for (var e = a - r, t = new Array(e); e--; ) t[e] = --a;
		  return t;
		}
		var s = (function () {
		  function r(r) {
			this.table =
			  "undefined" == typeof Uint8Array
				? new Array(r)
				: new Uint8Array(r);
		  }
		  return (
			(r.prototype.add = function (r, a, e, t) {
			  this.table[(a << 8) | r] =
				((0 | e) << 4) | (void 0 === t ? a : t);
			}),
			(r.prototype.addMany = function (r, a, e, t) {
			  for (var s = 0; s < r.length; s++) this.add(r[s], a, e, t);
			}),
			r
		  );
		})();
		exports.TransitionTable = s;
		var n = t(32, 127),
		  S = t(0, 24);
		S.push(25), S.concat(t(28, 32));
		var P = (a.ParserAction.ERROR << 4) | a.ParserState.GROUND;
		exports.VT500_TRANSITION_TABLE = (function () {
		  var r,
			e = new s(4095),
			P = t(a.ParserState.GROUND, a.ParserState.DCS_PASSTHROUGH + 1);
		  for (r in P)
			for (var d = 0; d < 160; ++d)
			  e.add(d, r, a.ParserAction.ERROR, a.ParserState.GROUND);
		  for (r in (e.addMany(
			n,
			a.ParserState.GROUND,
			a.ParserAction.PRINT,
			a.ParserState.GROUND,
		  ),
		  P))
			e.addMany(
			  [24, 26, 153, 154],
			  r,
			  a.ParserAction.EXECUTE,
			  a.ParserState.GROUND,
			),
			  e.addMany(
				t(128, 144),
				r,
				a.ParserAction.EXECUTE,
				a.ParserState.GROUND,
			  ),
			  e.addMany(
				t(144, 152),
				r,
				a.ParserAction.EXECUTE,
				a.ParserState.GROUND,
			  ),
			  e.add(156, r, a.ParserAction.IGNORE, a.ParserState.GROUND),
			  e.add(27, r, a.ParserAction.CLEAR, a.ParserState.ESCAPE),
			  e.add(157, r, a.ParserAction.OSC_START, a.ParserState.OSC_STRING),
			  e.addMany(
				[152, 158, 159],
				r,
				a.ParserAction.IGNORE,
				a.ParserState.SOS_PM_APC_STRING,
			  ),
			  e.add(155, r, a.ParserAction.CLEAR, a.ParserState.CSI_ENTRY),
			  e.add(144, r, a.ParserAction.CLEAR, a.ParserState.DCS_ENTRY);
		  return (
			e.addMany(
			  S,
			  a.ParserState.GROUND,
			  a.ParserAction.EXECUTE,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  S,
			  a.ParserState.ESCAPE,
			  a.ParserAction.EXECUTE,
			  a.ParserState.ESCAPE,
			),
			e.add(
			  127,
			  a.ParserState.ESCAPE,
			  a.ParserAction.IGNORE,
			  a.ParserState.ESCAPE,
			),
			e.addMany(
			  S,
			  a.ParserState.OSC_STRING,
			  a.ParserAction.IGNORE,
			  a.ParserState.OSC_STRING,
			),
			e.addMany(
			  S,
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.EXECUTE,
			  a.ParserState.CSI_ENTRY,
			),
			e.add(
			  127,
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_ENTRY,
			),
			e.addMany(
			  S,
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.EXECUTE,
			  a.ParserState.CSI_PARAM,
			),
			e.add(
			  127,
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_PARAM,
			),
			e.addMany(
			  S,
			  a.ParserState.CSI_IGNORE,
			  a.ParserAction.EXECUTE,
			  a.ParserState.CSI_IGNORE,
			),
			e.addMany(
			  S,
			  a.ParserState.CSI_INTERMEDIATE,
			  a.ParserAction.EXECUTE,
			  a.ParserState.CSI_INTERMEDIATE,
			),
			e.add(
			  127,
			  a.ParserState.CSI_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_INTERMEDIATE,
			),
			e.addMany(
			  S,
			  a.ParserState.ESCAPE_INTERMEDIATE,
			  a.ParserAction.EXECUTE,
			  a.ParserState.ESCAPE_INTERMEDIATE,
			),
			e.add(
			  127,
			  a.ParserState.ESCAPE_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.ESCAPE_INTERMEDIATE,
			),
			e.add(
			  93,
			  a.ParserState.ESCAPE,
			  a.ParserAction.OSC_START,
			  a.ParserState.OSC_STRING,
			),
			e.addMany(
			  n,
			  a.ParserState.OSC_STRING,
			  a.ParserAction.OSC_PUT,
			  a.ParserState.OSC_STRING,
			),
			e.add(
			  127,
			  a.ParserState.OSC_STRING,
			  a.ParserAction.OSC_PUT,
			  a.ParserState.OSC_STRING,
			),
			e.addMany(
			  [156, 27, 24, 26, 7],
			  a.ParserState.OSC_STRING,
			  a.ParserAction.OSC_END,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  t(28, 32),
			  a.ParserState.OSC_STRING,
			  a.ParserAction.IGNORE,
			  a.ParserState.OSC_STRING,
			),
			e.addMany(
			  [88, 94, 95],
			  a.ParserState.ESCAPE,
			  a.ParserAction.IGNORE,
			  a.ParserState.SOS_PM_APC_STRING,
			),
			e.addMany(
			  n,
			  a.ParserState.SOS_PM_APC_STRING,
			  a.ParserAction.IGNORE,
			  a.ParserState.SOS_PM_APC_STRING,
			),
			e.addMany(
			  S,
			  a.ParserState.SOS_PM_APC_STRING,
			  a.ParserAction.IGNORE,
			  a.ParserState.SOS_PM_APC_STRING,
			),
			e.add(
			  156,
			  a.ParserState.SOS_PM_APC_STRING,
			  a.ParserAction.IGNORE,
			  a.ParserState.GROUND,
			),
			e.add(
			  91,
			  a.ParserState.ESCAPE,
			  a.ParserAction.CLEAR,
			  a.ParserState.CSI_ENTRY,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.CSI_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  t(48, 58),
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.PARAM,
			  a.ParserState.CSI_PARAM,
			),
			e.add(
			  59,
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.PARAM,
			  a.ParserState.CSI_PARAM,
			),
			e.addMany(
			  [60, 61, 62, 63],
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.COLLECT,
			  a.ParserState.CSI_PARAM,
			),
			e.addMany(
			  t(48, 58),
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.PARAM,
			  a.ParserState.CSI_PARAM,
			),
			e.add(
			  59,
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.PARAM,
			  a.ParserState.CSI_PARAM,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.CSI_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  [58, 60, 61, 62, 63],
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_IGNORE,
			),
			e.addMany(
			  t(32, 64),
			  a.ParserState.CSI_IGNORE,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_IGNORE,
			),
			e.add(
			  127,
			  a.ParserState.CSI_IGNORE,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_IGNORE,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.CSI_IGNORE,
			  a.ParserAction.IGNORE,
			  a.ParserState.GROUND,
			),
			e.add(
			  58,
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_IGNORE,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.CSI_ENTRY,
			  a.ParserAction.COLLECT,
			  a.ParserState.CSI_INTERMEDIATE,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.CSI_INTERMEDIATE,
			  a.ParserAction.COLLECT,
			  a.ParserState.CSI_INTERMEDIATE,
			),
			e.addMany(
			  t(48, 64),
			  a.ParserState.CSI_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.CSI_IGNORE,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.CSI_INTERMEDIATE,
			  a.ParserAction.CSI_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.CSI_PARAM,
			  a.ParserAction.COLLECT,
			  a.ParserState.CSI_INTERMEDIATE,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.ESCAPE,
			  a.ParserAction.COLLECT,
			  a.ParserState.ESCAPE_INTERMEDIATE,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.ESCAPE_INTERMEDIATE,
			  a.ParserAction.COLLECT,
			  a.ParserState.ESCAPE_INTERMEDIATE,
			),
			e.addMany(
			  t(48, 127),
			  a.ParserState.ESCAPE_INTERMEDIATE,
			  a.ParserAction.ESC_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  t(48, 80),
			  a.ParserState.ESCAPE,
			  a.ParserAction.ESC_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  t(81, 88),
			  a.ParserState.ESCAPE,
			  a.ParserAction.ESC_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  [89, 90, 92],
			  a.ParserState.ESCAPE,
			  a.ParserAction.ESC_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.addMany(
			  t(96, 127),
			  a.ParserState.ESCAPE,
			  a.ParserAction.ESC_DISPATCH,
			  a.ParserState.GROUND,
			),
			e.add(
			  80,
			  a.ParserState.ESCAPE,
			  a.ParserAction.CLEAR,
			  a.ParserState.DCS_ENTRY,
			),
			e.addMany(
			  S,
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_ENTRY,
			),
			e.add(
			  127,
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_ENTRY,
			),
			e.addMany(
			  t(28, 32),
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_ENTRY,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.COLLECT,
			  a.ParserState.DCS_INTERMEDIATE,
			),
			e.add(
			  58,
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_IGNORE,
			),
			e.addMany(
			  t(48, 58),
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.PARAM,
			  a.ParserState.DCS_PARAM,
			),
			e.add(
			  59,
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.PARAM,
			  a.ParserState.DCS_PARAM,
			),
			e.addMany(
			  [60, 61, 62, 63],
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.COLLECT,
			  a.ParserState.DCS_PARAM,
			),
			e.addMany(
			  S,
			  a.ParserState.DCS_IGNORE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_IGNORE,
			),
			e.addMany(
			  t(32, 128),
			  a.ParserState.DCS_IGNORE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_IGNORE,
			),
			e.addMany(
			  t(28, 32),
			  a.ParserState.DCS_IGNORE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_IGNORE,
			),
			e.addMany(
			  S,
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_PARAM,
			),
			e.add(
			  127,
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_PARAM,
			),
			e.addMany(
			  t(28, 32),
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_PARAM,
			),
			e.addMany(
			  t(48, 58),
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.PARAM,
			  a.ParserState.DCS_PARAM,
			),
			e.add(
			  59,
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.PARAM,
			  a.ParserState.DCS_PARAM,
			),
			e.addMany(
			  [58, 60, 61, 62, 63],
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_IGNORE,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.COLLECT,
			  a.ParserState.DCS_INTERMEDIATE,
			),
			e.addMany(
			  S,
			  a.ParserState.DCS_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_INTERMEDIATE,
			),
			e.add(
			  127,
			  a.ParserState.DCS_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_INTERMEDIATE,
			),
			e.addMany(
			  t(28, 32),
			  a.ParserState.DCS_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_INTERMEDIATE,
			),
			e.addMany(
			  t(32, 48),
			  a.ParserState.DCS_INTERMEDIATE,
			  a.ParserAction.COLLECT,
			  a.ParserState.DCS_INTERMEDIATE,
			),
			e.addMany(
			  t(48, 64),
			  a.ParserState.DCS_INTERMEDIATE,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_IGNORE,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.DCS_INTERMEDIATE,
			  a.ParserAction.DCS_HOOK,
			  a.ParserState.DCS_PASSTHROUGH,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.DCS_PARAM,
			  a.ParserAction.DCS_HOOK,
			  a.ParserState.DCS_PASSTHROUGH,
			),
			e.addMany(
			  t(64, 127),
			  a.ParserState.DCS_ENTRY,
			  a.ParserAction.DCS_HOOK,
			  a.ParserState.DCS_PASSTHROUGH,
			),
			e.addMany(
			  S,
			  a.ParserState.DCS_PASSTHROUGH,
			  a.ParserAction.DCS_PUT,
			  a.ParserState.DCS_PASSTHROUGH,
			),
			e.addMany(
			  n,
			  a.ParserState.DCS_PASSTHROUGH,
			  a.ParserAction.DCS_PUT,
			  a.ParserState.DCS_PASSTHROUGH,
			),
			e.add(
			  127,
			  a.ParserState.DCS_PASSTHROUGH,
			  a.ParserAction.IGNORE,
			  a.ParserState.DCS_PASSTHROUGH,
			),
			e.addMany(
			  [27, 156],
			  a.ParserState.DCS_PASSTHROUGH,
			  a.ParserAction.DCS_UNHOOK,
			  a.ParserState.GROUND,
			),
			e
		  );
		})();
		var d = (function () {
			function r() {}
			return (
			  (r.prototype.hook = function (r, a, e) {}),
			  (r.prototype.put = function (r, a, e) {}),
			  (r.prototype.unhook = function () {}),
			  r
			);
		  })(),
		  c = (function (e) {
			function t(r) {
			  void 0 === r && (r = exports.VT500_TRANSITION_TABLE);
			  var t = e.call(this) || this;
			  return (
				(t.TRANSITIONS = r),
				(t.initialState = a.ParserState.GROUND),
				(t.currentState = t.initialState),
				(t._osc = ""),
				(t._params = [0]),
				(t._collect = ""),
				(t._printHandlerFb = function (r, a, e) {}),
				(t._executeHandlerFb = function (r) {}),
				(t._csiHandlerFb = function (r, a, e) {}),
				(t._escHandlerFb = function (r, a) {}),
				(t._oscHandlerFb = function (r, a) {}),
				(t._dcsHandlerFb = new d()),
				(t._errorHandlerFb = function (r) {
				  return r;
				}),
				(t._printHandler = t._printHandlerFb),
				(t._executeHandlers = Object.create(null)),
				(t._csiHandlers = Object.create(null)),
				(t._escHandlers = Object.create(null)),
				(t._oscHandlers = Object.create(null)),
				(t._dcsHandlers = Object.create(null)),
				(t._activeDcsHandler = null),
				(t._errorHandler = t._errorHandlerFb),
				t
			  );
			}
			return (
			  r(t, e),
			  (t.prototype.dispose = function () {
				(this._printHandlerFb = null),
				  (this._executeHandlerFb = null),
				  (this._csiHandlerFb = null),
				  (this._escHandlerFb = null),
				  (this._oscHandlerFb = null),
				  (this._dcsHandlerFb = null),
				  (this._errorHandlerFb = null),
				  (this._printHandler = null),
				  (this._executeHandlers = null),
				  (this._csiHandlers = null),
				  (this._escHandlers = null),
				  (this._oscHandlers = null),
				  (this._dcsHandlers = null),
				  (this._activeDcsHandler = null),
				  (this._errorHandler = null);
			  }),
			  (t.prototype.setPrintHandler = function (r) {
				this._printHandler = r;
			  }),
			  (t.prototype.clearPrintHandler = function () {
				this._printHandler = this._printHandlerFb;
			  }),
			  (t.prototype.setExecuteHandler = function (r, a) {
				this._executeHandlers[r.charCodeAt(0)] = a;
			  }),
			  (t.prototype.clearExecuteHandler = function (r) {
				this._executeHandlers[r.charCodeAt(0)] &&
				  delete this._executeHandlers[r.charCodeAt(0)];
			  }),
			  (t.prototype.setExecuteHandlerFallback = function (r) {
				this._executeHandlerFb = r;
			  }),
			  (t.prototype.setCsiHandler = function (r, a) {
				this._csiHandlers[r.charCodeAt(0)] = a;
			  }),
			  (t.prototype.clearCsiHandler = function (r) {
				this._csiHandlers[r.charCodeAt(0)] &&
				  delete this._csiHandlers[r.charCodeAt(0)];
			  }),
			  (t.prototype.setCsiHandlerFallback = function (r) {
				this._csiHandlerFb = r;
			  }),
			  (t.prototype.setEscHandler = function (r, a) {
				this._escHandlers[r] = a;
			  }),
			  (t.prototype.clearEscHandler = function (r) {
				this._escHandlers[r] && delete this._escHandlers[r];
			  }),
			  (t.prototype.setEscHandlerFallback = function (r) {
				this._escHandlerFb = r;
			  }),
			  (t.prototype.setOscHandler = function (r, a) {
				this._oscHandlers[r] = a;
			  }),
			  (t.prototype.clearOscHandler = function (r) {
				this._oscHandlers[r] && delete this._oscHandlers[r];
			  }),
			  (t.prototype.setOscHandlerFallback = function (r) {
				this._oscHandlerFb = r;
			  }),
			  (t.prototype.setDcsHandler = function (r, a) {
				this._dcsHandlers[r] = a;
			  }),
			  (t.prototype.clearDcsHandler = function (r) {
				this._dcsHandlers[r] && delete this._dcsHandlers[r];
			  }),
			  (t.prototype.setDcsHandlerFallback = function (r) {
				this._dcsHandlerFb = r;
			  }),
			  (t.prototype.setErrorHandler = function (r) {
				this._errorHandler = r;
			  }),
			  (t.prototype.clearErrorHandler = function () {
				this._errorHandler = this._errorHandlerFb;
			  }),
			  (t.prototype.reset = function () {
				(this.currentState = this.initialState),
				  (this._osc = ""),
				  (this._params = [0]),
				  (this._collect = ""),
				  (this._activeDcsHandler = null);
			  }),
			  (t.prototype.parse = function (r) {
				for (
				  var e = 0,
					t = 0,
					s = !1,
					n = this.currentState,
					S = -1,
					d = -1,
					c = this._osc,
					i = this._collect,
					o = this._params,
					A = this.TRANSITIONS.table,
					E = this._activeDcsHandler,
					_ = null,
					C = r.length,
					R = 0;
				  R < C;
				  ++R
				)
				  if (
					((e = r.charCodeAt(R)),
					n === a.ParserState.GROUND && e > 31 && e < 128)
				  ) {
					S = ~S ? S : R;
					do {
					  R++;
					} while (
					  R < C &&
					  r.charCodeAt(R) > 31 &&
					  r.charCodeAt(R) < 128
					);
					R--;
				  } else if (n === a.ParserState.CSI_PARAM && e > 47 && e < 57)
					o[o.length - 1] = 10 * o[o.length - 1] + e - 48;
				  else {
					switch ((t = e < 160 ? A[(n << 8) | e] : P) >> 4) {
					  case a.ParserAction.PRINT:
						S = ~S ? S : R;
						break;
					  case a.ParserAction.EXECUTE:
						~S && (this._printHandler(r, S, R), (S = -1)),
						  (_ = this._executeHandlers[e])
							? _()
							: this._executeHandlerFb(e);
						break;
					  case a.ParserAction.IGNORE:
						~S
						  ? (this._printHandler(r, S, R), (S = -1))
						  : ~d && (E.put(r, d, R), (d = -1));
						break;
					  case a.ParserAction.ERROR:
						if (e > 159)
						  switch (n) {
							case a.ParserState.GROUND:
							  S = ~S ? S : R;
							  break;
							case a.ParserState.OSC_STRING:
							  (c += String.fromCharCode(e)),
								(t |= a.ParserState.OSC_STRING);
							  break;
							case a.ParserState.CSI_IGNORE:
							  t |= a.ParserState.CSI_IGNORE;
							  break;
							case a.ParserState.DCS_IGNORE:
							  t |= a.ParserState.DCS_IGNORE;
							  break;
							case a.ParserState.DCS_PASSTHROUGH:
							  (d = ~d ? d : R),
								(t |= a.ParserState.DCS_PASSTHROUGH);
							  break;
							default:
							  s = !0;
						  }
						else s = !0;
						if (s) {
						  if (
							this._errorHandler({
							  position: R,
							  code: e,
							  currentState: n,
							  print: S,
							  dcs: d,
							  osc: c,
							  collect: i,
							  params: o,
							  abort: !1,
							}).abort
						  )
							return;
						  s = !1;
						}
						break;
					  case a.ParserAction.CSI_DISPATCH:
						(_ = this._csiHandlers[e])
						  ? _(o, i)
						  : this._csiHandlerFb(i, o, e);
						break;
					  case a.ParserAction.PARAM:
						59 === e
						  ? o.push(0)
						  : (o[o.length - 1] = 10 * o[o.length - 1] + e - 48);
						break;
					  case a.ParserAction.COLLECT:
						i += String.fromCharCode(e);
						break;
					  case a.ParserAction.ESC_DISPATCH:
						(_ = this._escHandlers[i + String.fromCharCode(e)])
						  ? _(i, e)
						  : this._escHandlerFb(i, e);
						break;
					  case a.ParserAction.CLEAR:
						~S && (this._printHandler(r, S, R), (S = -1)),
						  (c = ""),
						  (o = [0]),
						  (i = ""),
						  (d = -1);
						break;
					  case a.ParserAction.DCS_HOOK:
						(E = this._dcsHandlers[i + String.fromCharCode(e)]) ||
						  (E = this._dcsHandlerFb),
						  E.hook(i, o, e);
						break;
					  case a.ParserAction.DCS_PUT:
						d = ~d ? d : R;
						break;
					  case a.ParserAction.DCS_UNHOOK:
						E && (~d && E.put(r, d, R), E.unhook(), (E = null)),
						  27 === e && (t |= a.ParserState.ESCAPE),
						  (c = ""),
						  (o = [0]),
						  (i = ""),
						  (d = -1);
						break;
					  case a.ParserAction.OSC_START:
						~S && (this._printHandler(r, S, R), (S = -1)), (c = "");
						break;
					  case a.ParserAction.OSC_PUT:
						c += r.charAt(R);
						break;
					  case a.ParserAction.OSC_END:
						if (c && 24 !== e && 26 !== e) {
						  var I = c.indexOf(";");
						  if (-1 === I) this._oscHandlerFb(-1, c);
						  else {
							var l = parseInt(c.substring(0, I)),
							  T = c.substring(I + 1);
							(_ = this._oscHandlers[l])
							  ? _(T)
							  : this._oscHandlerFb(l, T);
						  }
						}
						27 === e && (t |= a.ParserState.ESCAPE),
						  (c = ""),
						  (o = [0]),
						  (i = ""),
						  (d = -1);
					}
					n = 15 & t;
				  }
				n === a.ParserState.GROUND && ~S
				  ? this._printHandler(r, S, r.length)
				  : n === a.ParserState.DCS_PASSTHROUGH &&
					~d &&
					E &&
					E.put(r, d, r.length),
				  (this._osc = c),
				  (this._collect = i),
				  (this._params = o),
				  (this._activeDcsHandler = E),
				  (this.currentState = n);
			  }),
			  t
			);
		  })(e.Disposable);
		exports.EscapeSequenceParser = c;
	  },
	  { "./Types": "4kff", "./common/Lifecycle": "VtE8" },
	],
	uvkR: [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__extends) ||
		  (function () {
			var e = function (t, r) {
			  return (e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (e, t) {
					e.__proto__ = t;
				  }) ||
				function (e, t) {
				  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
				})(t, r);
			};
			return function (t, r) {
			  function i() {
				this.constructor = t;
			  }
			  e(t, r),
				(t.prototype =
				  null === r
					? Object.create(r)
					: ((i.prototype = r.prototype), new i()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("./common/data/EscapeSequences"),
		  r = require("./core/data/Charsets"),
		  i = require("./Buffer"),
		  s = require("./renderer/Types"),
		  n = require("./CharWidth"),
		  a = require("./EscapeSequenceParser"),
		  l = require("./common/Lifecycle"),
		  o = require("./BufferLine"),
		  u = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 },
		  _ = (function () {
			function e(e) {
			  this._terminal = e;
			}
			return (
			  (e.prototype.hook = function (e, t, r) {
				this._data = "";
			  }),
			  (e.prototype.put = function (e, t, r) {
				this._data += e.substring(t, r);
			  }),
			  (e.prototype.unhook = function () {
				this._terminal.handler(
				  t.C0.ESC + "P0+r" + this._data + t.C0.ESC + "\\",
				);
			  }),
			  e
			);
		  })(),
		  c = (function () {
			function e(e) {
			  this._terminal = e;
			}
			return (
			  (e.prototype.hook = function (e, t, r) {
				this._data = "";
			  }),
			  (e.prototype.put = function (e, t, r) {
				this._data += e.substring(t, r);
			  }),
			  (e.prototype.unhook = function () {
				switch (this._data) {
				  case '"q':
					return this._terminal.handler(
					  t.C0.ESC + 'P1$r0"q' + t.C0.ESC + "\\",
					);
				  case '"p':
					return this._terminal.handler(
					  t.C0.ESC + 'P1$r61"p' + t.C0.ESC + "\\",
					);
				  case "r":
					var e =
					  this._terminal.buffer.scrollTop +
					  1 +
					  ";" +
					  (this._terminal.buffer.scrollBottom + 1) +
					  "r";
					return this._terminal.handler(
					  t.C0.ESC + "P1$r" + e + t.C0.ESC + "\\",
					);
				  case "m":
					return this._terminal.handler(
					  t.C0.ESC + "P1$r0m" + t.C0.ESC + "\\",
					);
				  case " q":
					var r = { block: 2, underline: 4, bar: 6 }[
					  this._terminal.getOption("cursorStyle")
					];
					return (
					  (r -= this._terminal.getOption("cursorBlink")),
					  this._terminal.handler(
						t.C0.ESC + "P1$r" + r + " q" + t.C0.ESC + "\\",
					  )
					);
				  default:
					this._terminal.error("Unknown DCS $q %s", this._data),
					  this._terminal.handler(
						t.C0.ESC + "P0$r" + this._data + t.C0.ESC + "\\",
					  );
				}
			  }),
			  e
			);
		  })(),
		  f = (function (l) {
			function f(e, i) {
			  void 0 === i && (i = new a.EscapeSequenceParser());
			  var s = l.call(this) || this;
			  (s._terminal = e),
				(s._parser = i),
				s.register(s._parser),
				(s._surrogateHigh = ""),
				s._parser.setCsiHandlerFallback(function (e, t, r) {
				  s._terminal.error("Unknown CSI code: ", {
					collect: e,
					params: t,
					flag: String.fromCharCode(r),
				  });
				}),
				s._parser.setEscHandlerFallback(function (e, t) {
				  s._terminal.error("Unknown ESC code: ", {
					collect: e,
					flag: String.fromCharCode(t),
				  });
				}),
				s._parser.setExecuteHandlerFallback(function (e) {
				  s._terminal.error("Unknown EXECUTE code: ", { code: e });
				}),
				s._parser.setOscHandlerFallback(function (e, t) {
				  s._terminal.error("Unknown OSC code: ", {
					identifier: e,
					data: t,
				  });
				}),
				s._parser.setPrintHandler(function (e, t, r) {
				  return s.print(e, t, r);
				}),
				s._parser.setCsiHandler("@", function (e, t) {
				  return s.insertChars(e);
				}),
				s._parser.setCsiHandler("A", function (e, t) {
				  return s.cursorUp(e);
				}),
				s._parser.setCsiHandler("B", function (e, t) {
				  return s.cursorDown(e);
				}),
				s._parser.setCsiHandler("C", function (e, t) {
				  return s.cursorForward(e);
				}),
				s._parser.setCsiHandler("D", function (e, t) {
				  return s.cursorBackward(e);
				}),
				s._parser.setCsiHandler("E", function (e, t) {
				  return s.cursorNextLine(e);
				}),
				s._parser.setCsiHandler("F", function (e, t) {
				  return s.cursorPrecedingLine(e);
				}),
				s._parser.setCsiHandler("G", function (e, t) {
				  return s.cursorCharAbsolute(e);
				}),
				s._parser.setCsiHandler("H", function (e, t) {
				  return s.cursorPosition(e);
				}),
				s._parser.setCsiHandler("I", function (e, t) {
				  return s.cursorForwardTab(e);
				}),
				s._parser.setCsiHandler("J", function (e, t) {
				  return s.eraseInDisplay(e);
				}),
				s._parser.setCsiHandler("K", function (e, t) {
				  return s.eraseInLine(e);
				}),
				s._parser.setCsiHandler("L", function (e, t) {
				  return s.insertLines(e);
				}),
				s._parser.setCsiHandler("M", function (e, t) {
				  return s.deleteLines(e);
				}),
				s._parser.setCsiHandler("P", function (e, t) {
				  return s.deleteChars(e);
				}),
				s._parser.setCsiHandler("S", function (e, t) {
				  return s.scrollUp(e);
				}),
				s._parser.setCsiHandler("T", function (e, t) {
				  return s.scrollDown(e, t);
				}),
				s._parser.setCsiHandler("X", function (e, t) {
				  return s.eraseChars(e);
				}),
				s._parser.setCsiHandler("Z", function (e, t) {
				  return s.cursorBackwardTab(e);
				}),
				s._parser.setCsiHandler("`", function (e, t) {
				  return s.charPosAbsolute(e);
				}),
				s._parser.setCsiHandler("a", function (e, t) {
				  return s.hPositionRelative(e);
				}),
				s._parser.setCsiHandler("b", function (e, t) {
				  return s.repeatPrecedingCharacter(e);
				}),
				s._parser.setCsiHandler("c", function (e, t) {
				  return s.sendDeviceAttributes(e, t);
				}),
				s._parser.setCsiHandler("d", function (e, t) {
				  return s.linePosAbsolute(e);
				}),
				s._parser.setCsiHandler("e", function (e, t) {
				  return s.vPositionRelative(e);
				}),
				s._parser.setCsiHandler("f", function (e, t) {
				  return s.hVPosition(e);
				}),
				s._parser.setCsiHandler("g", function (e, t) {
				  return s.tabClear(e);
				}),
				s._parser.setCsiHandler("h", function (e, t) {
				  return s.setMode(e, t);
				}),
				s._parser.setCsiHandler("l", function (e, t) {
				  return s.resetMode(e, t);
				}),
				s._parser.setCsiHandler("m", function (e, t) {
				  return s.charAttributes(e);
				}),
				s._parser.setCsiHandler("n", function (e, t) {
				  return s.deviceStatus(e, t);
				}),
				s._parser.setCsiHandler("p", function (e, t) {
				  return s.softReset(e, t);
				}),
				s._parser.setCsiHandler("q", function (e, t) {
				  return s.setCursorStyle(e, t);
				}),
				s._parser.setCsiHandler("r", function (e, t) {
				  return s.setScrollRegion(e, t);
				}),
				s._parser.setCsiHandler("s", function (e, t) {
				  return s.saveCursor(e);
				}),
				s._parser.setCsiHandler("u", function (e, t) {
				  return s.restoreCursor(e);
				}),
				s._parser.setExecuteHandler(t.C0.BEL, function () {
				  return s.bell();
				}),
				s._parser.setExecuteHandler(t.C0.LF, function () {
				  return s.lineFeed();
				}),
				s._parser.setExecuteHandler(t.C0.VT, function () {
				  return s.lineFeed();
				}),
				s._parser.setExecuteHandler(t.C0.FF, function () {
				  return s.lineFeed();
				}),
				s._parser.setExecuteHandler(t.C0.CR, function () {
				  return s.carriageReturn();
				}),
				s._parser.setExecuteHandler(t.C0.BS, function () {
				  return s.backspace();
				}),
				s._parser.setExecuteHandler(t.C0.HT, function () {
				  return s.tab();
				}),
				s._parser.setExecuteHandler(t.C0.SO, function () {
				  return s.shiftOut();
				}),
				s._parser.setExecuteHandler(t.C0.SI, function () {
				  return s.shiftIn();
				}),
				s._parser.setExecuteHandler(t.C1.IND, function () {
				  return s.index();
				}),
				s._parser.setExecuteHandler(t.C1.NEL, function () {
				  return s.nextLine();
				}),
				s._parser.setExecuteHandler(t.C1.HTS, function () {
				  return s.tabSet();
				}),
				s._parser.setOscHandler(0, function (e) {
				  return s.setTitle(e);
				}),
				s._parser.setOscHandler(2, function (e) {
				  return s.setTitle(e);
				}),
				s._parser.setEscHandler("7", function () {
				  return s.saveCursor([]);
				}),
				s._parser.setEscHandler("8", function () {
				  return s.restoreCursor([]);
				}),
				s._parser.setEscHandler("D", function () {
				  return s.index();
				}),
				s._parser.setEscHandler("E", function () {
				  return s.nextLine();
				}),
				s._parser.setEscHandler("H", function () {
				  return s.tabSet();
				}),
				s._parser.setEscHandler("M", function () {
				  return s.reverseIndex();
				}),
				s._parser.setEscHandler("=", function () {
				  return s.keypadApplicationMode();
				}),
				s._parser.setEscHandler(">", function () {
				  return s.keypadNumericMode();
				}),
				s._parser.setEscHandler("c", function () {
				  return s.reset();
				}),
				s._parser.setEscHandler("n", function () {
				  return s.setgLevel(2);
				}),
				s._parser.setEscHandler("o", function () {
				  return s.setgLevel(3);
				}),
				s._parser.setEscHandler("|", function () {
				  return s.setgLevel(3);
				}),
				s._parser.setEscHandler("}", function () {
				  return s.setgLevel(2);
				}),
				s._parser.setEscHandler("~", function () {
				  return s.setgLevel(1);
				}),
				s._parser.setEscHandler("%@", function () {
				  return s.selectDefaultCharset();
				}),
				s._parser.setEscHandler("%G", function () {
				  return s.selectDefaultCharset();
				});
			  var n = function (e) {
				  o._parser.setEscHandler("(" + e, function () {
					return s.selectCharset("(" + e);
				  }),
					o._parser.setEscHandler(")" + e, function () {
					  return s.selectCharset(")" + e);
					}),
					o._parser.setEscHandler("*" + e, function () {
					  return s.selectCharset("*" + e);
					}),
					o._parser.setEscHandler("+" + e, function () {
					  return s.selectCharset("+" + e);
					}),
					o._parser.setEscHandler("-" + e, function () {
					  return s.selectCharset("-" + e);
					}),
					o._parser.setEscHandler("." + e, function () {
					  return s.selectCharset("." + e);
					}),
					o._parser.setEscHandler("/" + e, function () {
					  return s.selectCharset("/" + e);
					});
				},
				o = this;
			  for (var u in r.CHARSETS) n(u);
			  return (
				s._parser.setErrorHandler(function (e) {
				  return s._terminal.error("Parsing error: ", e), e;
				}),
				s._parser.setDcsHandler("$q", new c(s._terminal)),
				s._parser.setDcsHandler("+q", new _(s._terminal)),
				s
			  );
			}
			return (
			  e(f, l),
			  (f.prototype.dispose = function () {
				l.prototype.dispose.call(this), (this._terminal = null);
			  }),
			  (f.prototype.parse = function (e) {
				if (this._terminal) {
				  var t = this._terminal.buffer,
					r = t.x,
					i = t.y;
				  this._terminal.debug && this._terminal.log("data: " + e),
					this._surrogateHigh &&
					  ((e = this._surrogateHigh + e),
					  (this._surrogateHigh = "")),
					this._parser.parse(e),
					((t = this._terminal.buffer).x === r && t.y === i) ||
					  this._terminal.emit("cursormove");
				}
			  }),
			  (f.prototype.print = function (e, t, r) {
				var s,
				  a,
				  l,
				  o,
				  u = this._terminal.buffer,
				  _ = this._terminal.charset,
				  c = this._terminal.options.screenReaderMode,
				  f = this._terminal.cols,
				  h = this._terminal.wraparoundMode,
				  m = this._terminal.insertMode,
				  p = this._terminal.curAttr,
				  d = u.lines.get(u.y + u.ybase);
				this._terminal.updateRange(u.y);
				for (var b = t; b < r; ++b) {
				  if (
					((s = e.charAt(b)),
					55296 <= (a = e.charCodeAt(b)) && a <= 56319)
				  ) {
					if (((l = e.charCodeAt(b + 1)), isNaN(l))) {
					  this._surrogateHigh = s;
					  continue;
					}
					(a = 1024 * (a - 55296) + (l - 56320) + 65536),
					  (s += e.charAt(b + 1));
				  }
				  if (!(56320 <= a && a <= 57343))
					if (
					  ((o = n.wcwidth(a)),
					  _ && (a = (s = _[s] || s).charCodeAt(0)),
					  c && this._terminal.emit("a11y.char", s),
					  o || !u.x)
					) {
					  if (u.x + o - 1 >= f)
						if (h)
						  (u.x = 0),
							u.y++,
							u.y > u.scrollBottom
							  ? (u.y--, this._terminal.scroll(!0))
							  : (u.lines.get(u.y).isWrapped = !0),
							(d = u.lines.get(u.y + u.ybase));
						else if (2 === o) continue;
					  if (m)
						for (var C = 0; C < o; ++C) {
						  var y = d.pop();
						  L = d.get(u.x - 2);
						  0 === y[i.CHAR_DATA_WIDTH_INDEX] &&
							L &&
							2 === L[i.CHAR_DATA_WIDTH_INDEX] &&
							d.set(this._terminal.cols - 2, [
							  p,
							  i.NULL_CELL_CHAR,
							  i.NULL_CELL_WIDTH,
							  i.NULL_CELL_CODE,
							]),
							d.splice(u.x, 0, [
							  p,
							  i.NULL_CELL_CHAR,
							  i.NULL_CELL_WIDTH,
							  i.NULL_CELL_CODE,
							]);
						}
					  d.set(u.x++, [p, s, o, a]),
						2 === o && d.set(u.x++, [p, "", 0, void 0]);
					} else {
					  var L,
						E = d.get(u.x - 1);
					  E &&
						(E[i.CHAR_DATA_WIDTH_INDEX]
						  ? ((E[i.CHAR_DATA_CHAR_INDEX] += s),
							(E[i.CHAR_DATA_CODE_INDEX] = a))
						  : (L = d.get(u.x - 2)) &&
							((L[i.CHAR_DATA_CHAR_INDEX] += s),
							(L[i.CHAR_DATA_CODE_INDEX] = a)));
					}
				}
				this._terminal.updateRange(u.y);
			  }),
			  (f.prototype.bell = function () {
				this._terminal.bell();
			  }),
			  (f.prototype.lineFeed = function () {
				var e = this._terminal.buffer;
				this._terminal.options.convertEol && (e.x = 0),
				  e.y++,
				  e.y > e.scrollBottom && (e.y--, this._terminal.scroll()),
				  e.x >= this._terminal.cols && e.x--,
				  this._terminal.emit("linefeed");
			  }),
			  (f.prototype.carriageReturn = function () {
				this._terminal.buffer.x = 0;
			  }),
			  (f.prototype.backspace = function () {
				this._terminal.buffer.x > 0 && this._terminal.buffer.x--;
			  }),
			  (f.prototype.tab = function () {
				var e = this._terminal.buffer.x;
				(this._terminal.buffer.x = this._terminal.buffer.nextStop()),
				  this._terminal.options.screenReaderMode &&
					this._terminal.emit(
					  "a11y.tab",
					  this._terminal.buffer.x - e,
					);
			  }),
			  (f.prototype.shiftOut = function () {
				this._terminal.setgLevel(1);
			  }),
			  (f.prototype.shiftIn = function () {
				this._terminal.setgLevel(0);
			  }),
			  (f.prototype.insertChars = function (e) {
				this._terminal.buffer.lines
				  .get(this._terminal.buffer.y + this._terminal.buffer.ybase)
				  .insertCells(this._terminal.buffer.x, e[0] || 1, [
					this._terminal.eraseAttr(),
					i.NULL_CELL_CHAR,
					i.NULL_CELL_WIDTH,
					i.NULL_CELL_CODE,
				  ]),
				  this._terminal.updateRange(this._terminal.buffer.y);
			  }),
			  (f.prototype.cursorUp = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.y -= t),
				  this._terminal.buffer.y < 0 && (this._terminal.buffer.y = 0);
			  }),
			  (f.prototype.cursorDown = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.y += t),
				  this._terminal.buffer.y >= this._terminal.rows &&
					(this._terminal.buffer.y = this._terminal.rows - 1),
				  this._terminal.buffer.x >= this._terminal.cols &&
					this._terminal.buffer.x--;
			  }),
			  (f.prototype.cursorForward = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.x += t),
				  this._terminal.buffer.x >= this._terminal.cols &&
					(this._terminal.buffer.x = this._terminal.cols - 1);
			  }),
			  (f.prototype.cursorBackward = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  this._terminal.buffer.x >= this._terminal.cols &&
					this._terminal.buffer.x--,
				  (this._terminal.buffer.x -= t),
				  this._terminal.buffer.x < 0 && (this._terminal.buffer.x = 0);
			  }),
			  (f.prototype.cursorNextLine = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.y += t),
				  this._terminal.buffer.y >= this._terminal.rows &&
					(this._terminal.buffer.y = this._terminal.rows - 1),
				  (this._terminal.buffer.x = 0);
			  }),
			  (f.prototype.cursorPrecedingLine = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.y -= t),
				  this._terminal.buffer.y < 0 && (this._terminal.buffer.y = 0),
				  (this._terminal.buffer.x = 0);
			  }),
			  (f.prototype.cursorCharAbsolute = function (e) {
				var t = e[0];
				t < 1 && (t = 1), (this._terminal.buffer.x = t - 1);
			  }),
			  (f.prototype.cursorPosition = function (e) {
				var t,
				  r = e[0] - 1;
				(t = e.length >= 2 ? e[1] - 1 : 0),
				  r < 0
					? (r = 0)
					: r >= this._terminal.rows && (r = this._terminal.rows - 1),
				  t < 0
					? (t = 0)
					: t >= this._terminal.cols && (t = this._terminal.cols - 1),
				  (this._terminal.buffer.x = t),
				  (this._terminal.buffer.y = r);
			  }),
			  (f.prototype.cursorForwardTab = function (e) {
				for (var t = e[0] || 1; t--; )
				  this._terminal.buffer.x = this._terminal.buffer.nextStop();
			  }),
			  (f.prototype._eraseInBufferLine = function (e, t, r) {
				this._terminal.buffer.lines
				  .get(this._terminal.buffer.ybase + e)
				  .replaceCells(t, r, [
					this._terminal.eraseAttr(),
					i.NULL_CELL_CHAR,
					i.NULL_CELL_WIDTH,
					i.NULL_CELL_CODE,
				  ]);
			  }),
			  (f.prototype.eraseInDisplay = function (e) {
				var t;
				switch (e[0]) {
				  case 0:
					for (
					  t = this._terminal.buffer.y,
						this._terminal.updateRange(t),
						this._eraseInBufferLine(
						  t++,
						  this._terminal.buffer.x,
						  this._terminal.cols,
						);
					  t < this._terminal.rows;
					  t++
					)
					  this._eraseInBufferLine(t, 0, this._terminal.cols);
					this._terminal.updateRange(t);
					break;
				  case 1:
					for (
					  t = this._terminal.buffer.y,
						this._terminal.updateRange(t),
						this._eraseInBufferLine(
						  t,
						  0,
						  this._terminal.buffer.x + 1,
						);
					  t--;

					)
					  this._eraseInBufferLine(t, 0, this._terminal.cols);
					this._terminal.updateRange(0);
					break;
				  case 2:
					for (
					  t = this._terminal.rows,
						this._terminal.updateRange(t - 1);
					  t--;

					)
					  this._eraseInBufferLine(t, 0, this._terminal.cols);
					this._terminal.updateRange(0);
					break;
				  case 3:
					var r =
					  this._terminal.buffer.lines.length - this._terminal.rows;
					r > 0 &&
					  (this._terminal.buffer.lines.trimStart(r),
					  (this._terminal.buffer.ybase = Math.max(
						this._terminal.buffer.ybase - r,
						0,
					  )),
					  (this._terminal.buffer.ydisp = Math.max(
						this._terminal.buffer.ydisp - r,
						0,
					  )),
					  this._terminal.emit("scroll", 0));
				}
			  }),
			  (f.prototype.eraseInLine = function (e) {
				switch (e[0]) {
				  case 0:
					this._eraseInBufferLine(
					  this._terminal.buffer.y,
					  this._terminal.buffer.x,
					  this._terminal.cols,
					);
					break;
				  case 1:
					this._eraseInBufferLine(
					  this._terminal.buffer.y,
					  0,
					  this._terminal.buffer.x + 1,
					);
					break;
				  case 2:
					this._eraseInBufferLine(
					  this._terminal.buffer.y,
					  0,
					  this._terminal.cols,
					);
				}
				this._terminal.updateRange(this._terminal.buffer.y);
			  }),
			  (f.prototype.insertLines = function (e) {
				var t = e[0];
				t < 1 && (t = 1);
				for (
				  var r = this._terminal.buffer,
					i = r.y + r.ybase,
					s = this._terminal.rows - 1 - r.scrollBottom,
					n = this._terminal.rows - 1 + r.ybase - s + 1;
				  t--;

				)
				  r.lines.splice(n - 1, 1),
					r.lines.splice(
					  i,
					  0,
					  o.BufferLine.blankLine(
						this._terminal.cols,
						this._terminal.eraseAttr(),
					  ),
					);
				this._terminal.updateRange(r.y),
				  this._terminal.updateRange(r.scrollBottom);
			  }),
			  (f.prototype.deleteLines = function (e) {
				var t = e[0];
				t < 1 && (t = 1);
				var r,
				  i = this._terminal.buffer,
				  s = i.y + i.ybase;
				for (
				  r = this._terminal.rows - 1 - i.scrollBottom,
					r = this._terminal.rows - 1 + i.ybase - r;
				  t--;

				)
				  i.lines.splice(s, 1),
					i.lines.splice(
					  r,
					  0,
					  o.BufferLine.blankLine(
						this._terminal.cols,
						this._terminal.eraseAttr(),
					  ),
					);
				this._terminal.updateRange(i.y),
				  this._terminal.updateRange(i.scrollBottom);
			  }),
			  (f.prototype.deleteChars = function (e) {
				this._terminal.buffer.lines
				  .get(this._terminal.buffer.y + this._terminal.buffer.ybase)
				  .deleteCells(this._terminal.buffer.x, e[0] || 1, [
					this._terminal.eraseAttr(),
					i.NULL_CELL_CHAR,
					i.NULL_CELL_WIDTH,
					i.NULL_CELL_CODE,
				  ]),
				  this._terminal.updateRange(this._terminal.buffer.y);
			  }),
			  (f.prototype.scrollUp = function (e) {
				for (var t = e[0] || 1, r = this._terminal.buffer; t--; )
				  r.lines.splice(r.ybase + r.scrollTop, 1),
					r.lines.splice(
					  r.ybase + r.scrollBottom,
					  0,
					  o.BufferLine.blankLine(
						this._terminal.cols,
						i.DEFAULT_ATTR,
					  ),
					);
				this._terminal.updateRange(r.scrollTop),
				  this._terminal.updateRange(r.scrollBottom);
			  }),
			  (f.prototype.scrollDown = function (e, t) {
				if (e.length < 2 && !t) {
				  for (var r = e[0] || 1, s = this._terminal.buffer; r--; )
					s.lines.splice(s.ybase + s.scrollBottom, 1),
					  s.lines.splice(
						s.ybase + s.scrollBottom,
						0,
						o.BufferLine.blankLine(
						  this._terminal.cols,
						  i.DEFAULT_ATTR,
						),
					  );
				  this._terminal.updateRange(s.scrollTop),
					this._terminal.updateRange(s.scrollBottom);
				}
			  }),
			  (f.prototype.eraseChars = function (e) {
				this._terminal.buffer.lines
				  .get(this._terminal.buffer.y + this._terminal.buffer.ybase)
				  .replaceCells(
					this._terminal.buffer.x,
					this._terminal.buffer.x + (e[0] || 1),
					[
					  this._terminal.eraseAttr(),
					  i.NULL_CELL_CHAR,
					  i.NULL_CELL_WIDTH,
					  i.NULL_CELL_CODE,
					],
				  );
			  }),
			  (f.prototype.cursorBackwardTab = function (e) {
				for (var t = e[0] || 1, r = this._terminal.buffer; t--; )
				  r.x = r.prevStop();
			  }),
			  (f.prototype.charPosAbsolute = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.x = t - 1),
				  this._terminal.buffer.x >= this._terminal.cols &&
					(this._terminal.buffer.x = this._terminal.cols - 1);
			  }),
			  (f.prototype.hPositionRelative = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.x += t),
				  this._terminal.buffer.x >= this._terminal.cols &&
					(this._terminal.buffer.x = this._terminal.cols - 1);
			  }),
			  (f.prototype.repeatPrecedingCharacter = function (e) {
				var t = this._terminal.buffer,
				  r = t.lines.get(t.ybase + t.y);
				r.replaceCells(
				  t.x,
				  t.x + (e[0] || 1),
				  r.get(t.x - 1) || [
					i.DEFAULT_ATTR,
					i.NULL_CELL_CHAR,
					i.NULL_CELL_WIDTH,
					i.NULL_CELL_CODE,
				  ],
				);
			  }),
			  (f.prototype.sendDeviceAttributes = function (e, r) {
				e[0] > 0 ||
				  (r
					? ">" === r &&
					  (this._terminal.is("xterm")
						? this._terminal.handler(t.C0.ESC + "[>0;276;0c")
						: this._terminal.is("rxvt-unicode")
						  ? this._terminal.handler(t.C0.ESC + "[>85;95;0c")
						  : this._terminal.is("linux")
							? this._terminal.handler(e[0] + "c")
							: this._terminal.is("screen") &&
							  this._terminal.handler(
								t.C0.ESC + "[>83;40003;0c",
							  ))
					: this._terminal.is("xterm") ||
						this._terminal.is("rxvt-unicode") ||
						this._terminal.is("screen")
					  ? this._terminal.handler(t.C0.ESC + "[?1;2c")
					  : this._terminal.is("linux") &&
						this._terminal.handler(t.C0.ESC + "[?6c"));
			  }),
			  (f.prototype.linePosAbsolute = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.y = t - 1),
				  this._terminal.buffer.y >= this._terminal.rows &&
					(this._terminal.buffer.y = this._terminal.rows - 1);
			  }),
			  (f.prototype.vPositionRelative = function (e) {
				var t = e[0];
				t < 1 && (t = 1),
				  (this._terminal.buffer.y += t),
				  this._terminal.buffer.y >= this._terminal.rows &&
					(this._terminal.buffer.y = this._terminal.rows - 1),
				  this._terminal.buffer.x >= this._terminal.cols &&
					this._terminal.buffer.x--;
			  }),
			  (f.prototype.hVPosition = function (e) {
				e[0] < 1 && (e[0] = 1),
				  e[1] < 1 && (e[1] = 1),
				  (this._terminal.buffer.y = e[0] - 1),
				  this._terminal.buffer.y >= this._terminal.rows &&
					(this._terminal.buffer.y = this._terminal.rows - 1),
				  (this._terminal.buffer.x = e[1] - 1),
				  this._terminal.buffer.x >= this._terminal.cols &&
					(this._terminal.buffer.x = this._terminal.cols - 1);
			  }),
			  (f.prototype.tabClear = function (e) {
				var t = e[0];
				t <= 0
				  ? delete this._terminal.buffer.tabs[this._terminal.buffer.x]
				  : 3 === t && (this._terminal.buffer.tabs = {});
			  }),
			  (f.prototype.setMode = function (e, t) {
				if (e.length > 1)
				  for (var i = 0; i < e.length; i++) this.setMode([e[i]]);
				else if (t) {
				  if ("?" === t)
					switch (e[0]) {
					  case 1:
						this._terminal.applicationCursor = !0;
						break;
					  case 2:
						this._terminal.setgCharset(0, r.DEFAULT_CHARSET),
						  this._terminal.setgCharset(1, r.DEFAULT_CHARSET),
						  this._terminal.setgCharset(2, r.DEFAULT_CHARSET),
						  this._terminal.setgCharset(3, r.DEFAULT_CHARSET);
						break;
					  case 3:
						(this._terminal.savedCols = this._terminal.cols),
						  this._terminal.resize(132, this._terminal.rows);
						break;
					  case 6:
						this._terminal.originMode = !0;
						break;
					  case 7:
						this._terminal.wraparoundMode = !0;
						break;
					  case 12:
						break;
					  case 66:
						this._terminal.log(
						  "Serial port requested application keypad.",
						),
						  (this._terminal.applicationKeypad = !0),
						  this._terminal.viewport.syncScrollArea();
						break;
					  case 9:
					  case 1e3:
					  case 1002:
					  case 1003:
						(this._terminal.x10Mouse = 9 === e[0]),
						  (this._terminal.vt200Mouse = 1e3 === e[0]),
						  (this._terminal.normalMouse = e[0] > 1e3),
						  (this._terminal.mouseEvents = !0),
						  this._terminal.element.classList.add(
							"enable-mouse-events",
						  ),
						  this._terminal.selectionManager.disable(),
						  this._terminal.log("Binding to mouse events.");
						break;
					  case 1004:
						this._terminal.sendFocus = !0;
						break;
					  case 1005:
						this._terminal.utfMouse = !0;
						break;
					  case 1006:
						this._terminal.sgrMouse = !0;
						break;
					  case 1015:
						this._terminal.urxvtMouse = !0;
						break;
					  case 25:
						this._terminal.cursorHidden = !1;
						break;
					  case 1049:
					  case 47:
					  case 1047:
						this._terminal.buffers.activateAltBuffer(),
						  this._terminal.viewport.syncScrollArea(),
						  this._terminal.showCursor();
						break;
					  case 2004:
						this._terminal.bracketedPasteMode = !0;
					}
				} else
				  switch (e[0]) {
					case 4:
					  this._terminal.insertMode = !0;
				  }
			  }),
			  (f.prototype.resetMode = function (e, t) {
				if (e.length > 1)
				  for (var r = 0; r < e.length; r++) this.resetMode([e[r]]);
				else if (t) {
				  if ("?" === t)
					switch (e[0]) {
					  case 1:
						this._terminal.applicationCursor = !1;
						break;
					  case 3:
						132 === this._terminal.cols &&
						  this._terminal.savedCols &&
						  this._terminal.resize(
							this._terminal.savedCols,
							this._terminal.rows,
						  ),
						  delete this._terminal.savedCols;
						break;
					  case 6:
						this._terminal.originMode = !1;
						break;
					  case 7:
						this._terminal.wraparoundMode = !1;
						break;
					  case 12:
						break;
					  case 66:
						this._terminal.log("Switching back to normal keypad."),
						  (this._terminal.applicationKeypad = !1),
						  this._terminal.viewport.syncScrollArea();
						break;
					  case 9:
					  case 1e3:
					  case 1002:
					  case 1003:
						(this._terminal.x10Mouse = !1),
						  (this._terminal.vt200Mouse = !1),
						  (this._terminal.normalMouse = !1),
						  (this._terminal.mouseEvents = !1),
						  this._terminal.element.classList.remove(
							"enable-mouse-events",
						  ),
						  this._terminal.selectionManager.enable();
						break;
					  case 1004:
						this._terminal.sendFocus = !1;
						break;
					  case 1005:
						this._terminal.utfMouse = !1;
						break;
					  case 1006:
						this._terminal.sgrMouse = !1;
						break;
					  case 1015:
						this._terminal.urxvtMouse = !1;
						break;
					  case 25:
						this._terminal.cursorHidden = !0;
						break;
					  case 1049:
					  case 47:
					  case 1047:
						this._terminal.buffers.activateNormalBuffer(),
						  this._terminal.refresh(0, this._terminal.rows - 1),
						  this._terminal.viewport.syncScrollArea(),
						  this._terminal.showCursor();
						break;
					  case 2004:
						this._terminal.bracketedPasteMode = !1;
					}
				} else
				  switch (e[0]) {
					case 4:
					  this._terminal.insertMode = !1;
				  }
			  }),
			  (f.prototype.charAttributes = function (e) {
				if (1 !== e.length || 0 !== e[0]) {
				  for (
					var t,
					  r = e.length,
					  n = this._terminal.curAttr >> 18,
					  a = (this._terminal.curAttr >> 9) & 511,
					  l = 511 & this._terminal.curAttr,
					  o = 0;
					o < r;
					o++
				  )
					(t = e[o]) >= 30 && t <= 37
					  ? (a = t - 30)
					  : t >= 40 && t <= 47
						? (l = t - 40)
						: t >= 90 && t <= 97
						  ? (a = (t += 8) - 90)
						  : t >= 100 && t <= 107
							? (l = (t += 8) - 100)
							: 0 === t
							  ? ((n = i.DEFAULT_ATTR >> 18),
								(a = (i.DEFAULT_ATTR >> 9) & 511),
								(l = 511 & i.DEFAULT_ATTR))
							  : 1 === t
								? (n |= s.FLAGS.BOLD)
								: 3 === t
								  ? (n |= s.FLAGS.ITALIC)
								  : 4 === t
									? (n |= s.FLAGS.UNDERLINE)
									: 5 === t
									  ? (n |= s.FLAGS.BLINK)
									  : 7 === t
										? (n |= s.FLAGS.INVERSE)
										: 8 === t
										  ? (n |= s.FLAGS.INVISIBLE)
										  : 2 === t
											? (n |= s.FLAGS.DIM)
											: 22 === t
											  ? ((n &= ~s.FLAGS.BOLD),
												(n &= ~s.FLAGS.DIM))
											  : 23 === t
												? (n &= ~s.FLAGS.ITALIC)
												: 24 === t
												  ? (n &= ~s.FLAGS.UNDERLINE)
												  : 25 === t
													? (n &= ~s.FLAGS.BLINK)
													: 27 === t
													  ? (n &= ~s.FLAGS.INVERSE)
													  : 28 === t
														? (n &=
															~s.FLAGS.INVISIBLE)
														: 39 === t
														  ? (a =
															  (i.DEFAULT_ATTR >>
																9) &
															  511)
														  : 49 === t
															? (l =
																511 &
																i.DEFAULT_ATTR)
															: 38 === t
															  ? 2 === e[o + 1]
																? ((o += 2),
																  -1 ===
																	(a =
																	  this._terminal.matchColor(
																		255 &
																		  e[o],
																		255 &
																		  e[
																			o +
																			  1
																		  ],
																		255 &
																		  e[
																			o +
																			  2
																		  ],
																	  )) &&
																	(a = 511),
																  (o += 2))
																: 5 ===
																	e[o + 1] &&
																  (a = t =
																	255 &
																	e[(o += 2)])
															  : 48 === t
																? 2 === e[o + 1]
																  ? ((o += 2),
																	-1 ===
																	  (l =
																		this._terminal.matchColor(
																		  255 &
																			e[
																			  o
																			],
																		  255 &
																			e[
																			  o +
																				1
																			],
																		  255 &
																			e[
																			  o +
																				2
																			],
																		)) &&
																	  (l = 511),
																	(o += 2))
																  : 5 ===
																	  e[
																		o + 1
																	  ] &&
																	(l = t =
																	  255 &
																	  e[
																		(o += 2)
																	  ])
																: 100 === t
																  ? ((a =
																	  (i.DEFAULT_ATTR >>
																		9) &
																	  511),
																	(l =
																	  511 &
																	  i.DEFAULT_ATTR))
																  : this._terminal.error(
																	  "Unknown SGR attribute: %d.",
																	  t,
																	);
				  this._terminal.curAttr = (n << 18) | (a << 9) | l;
				} else this._terminal.curAttr = i.DEFAULT_ATTR;
			  }),
			  (f.prototype.deviceStatus = function (e, r) {
				if (r) {
				  if ("?" === r)
					switch (e[0]) {
					  case 6:
						(i = this._terminal.buffer.y + 1),
						  (s = this._terminal.buffer.x + 1);
						this._terminal.emit(
						  "data",
						  t.C0.ESC + "[?" + i + ";" + s + "R",
						);
					}
				} else
				  switch (e[0]) {
					case 5:
					  this._terminal.emit("data", t.C0.ESC + "[0n");
					  break;
					case 6:
					  var i = this._terminal.buffer.y + 1,
						s = this._terminal.buffer.x + 1;
					  this._terminal.emit(
						"data",
						t.C0.ESC + "[" + i + ";" + s + "R",
					  );
				  }
			  }),
			  (f.prototype.softReset = function (e, t) {
				"!" === t &&
				  ((this._terminal.cursorHidden = !1),
				  (this._terminal.insertMode = !1),
				  (this._terminal.originMode = !1),
				  (this._terminal.wraparoundMode = !0),
				  (this._terminal.applicationKeypad = !1),
				  this._terminal.viewport.syncScrollArea(),
				  (this._terminal.applicationCursor = !1),
				  (this._terminal.buffer.scrollTop = 0),
				  (this._terminal.buffer.scrollBottom =
					this._terminal.rows - 1),
				  (this._terminal.curAttr = i.DEFAULT_ATTR),
				  (this._terminal.buffer.x = this._terminal.buffer.y = 0),
				  (this._terminal.charset = null),
				  (this._terminal.glevel = 0),
				  (this._terminal.charsets = [null]));
			  }),
			  (f.prototype.setCursorStyle = function (e, t) {
				if (" " === t) {
				  var r = e[0] < 1 ? 1 : e[0];
				  switch (r) {
					case 1:
					case 2:
					  this._terminal.setOption("cursorStyle", "block");
					  break;
					case 3:
					case 4:
					  this._terminal.setOption("cursorStyle", "underline");
					  break;
					case 5:
					case 6:
					  this._terminal.setOption("cursorStyle", "bar");
				  }
				  var i = r % 2 == 1;
				  this._terminal.setOption("cursorBlink", i);
				}
			  }),
			  (f.prototype.setScrollRegion = function (e, t) {
				t ||
				  ((this._terminal.buffer.scrollTop = (e[0] || 1) - 1),
				  (this._terminal.buffer.scrollBottom =
					(e[1] && e[1] <= this._terminal.rows
					  ? e[1]
					  : this._terminal.rows) - 1),
				  (this._terminal.buffer.x = 0),
				  (this._terminal.buffer.y = 0));
			  }),
			  (f.prototype.saveCursor = function (e) {
				(this._terminal.buffer.savedX = this._terminal.buffer.x),
				  (this._terminal.buffer.savedY = this._terminal.buffer.y),
				  (this._terminal.savedCurAttr = this._terminal.curAttr);
			  }),
			  (f.prototype.restoreCursor = function (e) {
				(this._terminal.buffer.x = this._terminal.buffer.savedX || 0),
				  (this._terminal.buffer.y = this._terminal.buffer.savedY || 0),
				  (this._terminal.curAttr =
					this._terminal.savedCurAttr || i.DEFAULT_ATTR);
			  }),
			  (f.prototype.setTitle = function (e) {
				this._terminal.handleTitle(e);
			  }),
			  (f.prototype.nextLine = function () {
				(this._terminal.buffer.x = 0), this.index();
			  }),
			  (f.prototype.keypadApplicationMode = function () {
				this._terminal.log("Serial port requested application keypad."),
				  (this._terminal.applicationKeypad = !0),
				  this._terminal.viewport &&
					this._terminal.viewport.syncScrollArea();
			  }),
			  (f.prototype.keypadNumericMode = function () {
				this._terminal.log("Switching back to normal keypad."),
				  (this._terminal.applicationKeypad = !1),
				  this._terminal.viewport &&
					this._terminal.viewport.syncScrollArea();
			  }),
			  (f.prototype.selectDefaultCharset = function () {
				this._terminal.setgLevel(0),
				  this._terminal.setgCharset(0, r.DEFAULT_CHARSET);
			  }),
			  (f.prototype.selectCharset = function (e) {
				if (2 !== e.length) return this.selectDefaultCharset();
				"/" !== e[0] &&
				  this._terminal.setgCharset(
					u[e[0]],
					r.CHARSETS[e[1]] || r.DEFAULT_CHARSET,
				  );
			  }),
			  (f.prototype.index = function () {
				this._terminal.index();
			  }),
			  (f.prototype.tabSet = function () {
				this._terminal.tabSet();
			  }),
			  (f.prototype.reverseIndex = function () {
				this._terminal.reverseIndex();
			  }),
			  (f.prototype.reset = function () {
				this._parser.reset(), this._terminal.reset();
			  }),
			  (f.prototype.setgLevel = function (e) {
				this._terminal.setgLevel(e);
			  }),
			  f
			);
		  })(l.Disposable);
		exports.InputHandler = f;
	  },
	  {
		"./common/data/EscapeSequences": "xnQp",
		"./core/data/Charsets": "6f5g",
		"./Buffer": "nJkY",
		"./renderer/Types": "lZiw",
		"./CharWidth": "6Lzu",
		"./EscapeSequenceParser": "k6J0",
		"./common/Lifecycle": "VtE8",
		"./BufferLine": "dDZ9",
	  },
	],
	LQXW: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.INVERTED_DEFAULT_COLOR = -1),
		  (exports.DIM_OPACITY = 0.5);
	  },
	  {},
	],
	"3JPA": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = (function () {
		  function e() {
			this.cache = [];
		  }
		  return (
			(e.prototype.resize = function (e, t) {
			  for (var h = 0; h < e; h++) {
				this.cache.length <= h && this.cache.push([]);
				for (var c = this.cache[h].length; c < t; c++)
				  this.cache[h].push(null);
				this.cache[h].length = t;
			  }
			  this.cache.length = e;
			}),
			(e.prototype.clear = function () {
			  for (var e = 0; e < this.cache.length; e++)
				for (var t = 0; t < this.cache[e].length; t++)
				  this.cache[e][t] = null;
			}),
			e
		  );
		})();
		exports.GridCache = e;
	  },
	  {},
	],
	spzq: [
	  function (require, module, exports) {
		"use strict";
		function o(o, e, n, t) {
		  var r = {
			foreground: t.foreground,
			background: t.background,
			cursor: null,
			cursorAccent: null,
			selection: null,
			ansi: t.ansi.slice(0, 16),
		  };
		  return {
			type: n.options.experimentalCharAtlas,
			devicePixelRatio: window.devicePixelRatio,
			scaledCharWidth: o,
			scaledCharHeight: e,
			fontFamily: n.options.fontFamily,
			fontSize: n.options.fontSize,
			fontWeight: n.options.fontWeight,
			fontWeightBold: n.options.fontWeightBold,
			allowTransparency: n.options.allowTransparency,
			colors: r,
		  };
		}
		function e(o, e) {
		  for (var n = 0; n < o.colors.ansi.length; n++)
			if (o.colors.ansi[n].rgba !== e.colors.ansi[n].rgba) return !1;
		  return (
			o.type === e.type &&
			o.devicePixelRatio === e.devicePixelRatio &&
			o.fontFamily === e.fontFamily &&
			o.fontSize === e.fontSize &&
			o.fontWeight === e.fontWeight &&
			o.fontWeightBold === e.fontWeightBold &&
			o.allowTransparency === e.allowTransparency &&
			o.scaledCharWidth === e.scaledCharWidth &&
			o.scaledCharHeight === e.scaledCharHeight &&
			o.colors.foreground === e.colors.foreground &&
			o.colors.background === e.colors.background
		  );
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.generateConfig = o),
		  (exports.configEquals = e);
	  },
	  {},
	],
	"5e5Z": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = (function () {
		  function t() {
			this._didWarmUp = !1;
		  }
		  return (
			(t.prototype.dispose = function () {}),
			(t.prototype.warmUp = function () {
			  this._didWarmUp || (this._doWarmUp(), (this._didWarmUp = !0));
			}),
			(t.prototype._doWarmUp = function () {}),
			(t.prototype.beginFrame = function () {}),
			t
		  );
		})();
		exports.default = t;
	  },
	  {},
	],
	"9RWO": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var s = i("#ffffff"),
		  r = i("#000000"),
		  o = i("#ffffff"),
		  t = i("#000000"),
		  e = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967159 };
		function i(s) {
		  return { css: s, rgba: (parseInt(s.slice(1), 16) << 8) | 255 };
		}
		function a(s) {
		  var r = s.toString(16);
		  return r.length < 2 ? "0" + r : r;
		}
		exports.DEFAULT_ANSI_COLORS = (function () {
		  for (
			var s = [
				i("#2e3436"),
				i("#cc0000"),
				i("#4e9a06"),
				i("#c4a000"),
				i("#3465a4"),
				i("#75507b"),
				i("#06989a"),
				i("#d3d7cf"),
				i("#555753"),
				i("#ef2929"),
				i("#8ae234"),
				i("#fce94f"),
				i("#729fcf"),
				i("#ad7fa8"),
				i("#34e2e2"),
				i("#eeeeec"),
			  ],
			  r = [0, 95, 135, 175, 215, 255],
			  o = 0;
			o < 216;
			o++
		  ) {
			var t = r[(o / 36) % 6 | 0],
			  e = r[(o / 6) % 6 | 0],
			  l = r[o % 6];
			s.push({
			  css: "#" + a(t) + a(e) + a(l),
			  rgba: ((t << 24) | (e << 16) | (l << 8) | 255) >>> 0,
			});
		  }
		  for (o = 0; o < 24; o++) {
			var c = 8 + 10 * o,
			  n = a(c);
			s.push({
			  css: "#" + n + n + n,
			  rgba: ((c << 24) | (c << 16) | (c << 8) | 255) >>> 0,
			});
		  }
		  return s;
		})();
		var l = (function () {
		  function i(i, a) {
			this.allowTransparency = a;
			var l = i.createElement("canvas");
			(l.width = 1),
			  (l.height = 1),
			  (this._ctx = l.getContext("2d")),
			  (this._ctx.globalCompositeOperation = "copy"),
			  (this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1)),
			  (this.colors = {
				foreground: s,
				background: r,
				cursor: o,
				cursorAccent: t,
				selection: e,
				ansi: exports.DEFAULT_ANSI_COLORS.slice(),
			  });
		  }
		  return (
			(i.prototype.setTheme = function (i) {
			  (this.colors.foreground = this._parseColor(i.foreground, s)),
				(this.colors.background = this._parseColor(i.background, r)),
				(this.colors.cursor = this._parseColor(i.cursor, o, !0)),
				(this.colors.cursorAccent = this._parseColor(
				  i.cursorAccent,
				  t,
				  !0,
				)),
				(this.colors.selection = this._parseColor(i.selection, e, !0)),
				(this.colors.ansi[0] = this._parseColor(
				  i.black,
				  exports.DEFAULT_ANSI_COLORS[0],
				)),
				(this.colors.ansi[1] = this._parseColor(
				  i.red,
				  exports.DEFAULT_ANSI_COLORS[1],
				)),
				(this.colors.ansi[2] = this._parseColor(
				  i.green,
				  exports.DEFAULT_ANSI_COLORS[2],
				)),
				(this.colors.ansi[3] = this._parseColor(
				  i.yellow,
				  exports.DEFAULT_ANSI_COLORS[3],
				)),
				(this.colors.ansi[4] = this._parseColor(
				  i.blue,
				  exports.DEFAULT_ANSI_COLORS[4],
				)),
				(this.colors.ansi[5] = this._parseColor(
				  i.magenta,
				  exports.DEFAULT_ANSI_COLORS[5],
				)),
				(this.colors.ansi[6] = this._parseColor(
				  i.cyan,
				  exports.DEFAULT_ANSI_COLORS[6],
				)),
				(this.colors.ansi[7] = this._parseColor(
				  i.white,
				  exports.DEFAULT_ANSI_COLORS[7],
				)),
				(this.colors.ansi[8] = this._parseColor(
				  i.brightBlack,
				  exports.DEFAULT_ANSI_COLORS[8],
				)),
				(this.colors.ansi[9] = this._parseColor(
				  i.brightRed,
				  exports.DEFAULT_ANSI_COLORS[9],
				)),
				(this.colors.ansi[10] = this._parseColor(
				  i.brightGreen,
				  exports.DEFAULT_ANSI_COLORS[10],
				)),
				(this.colors.ansi[11] = this._parseColor(
				  i.brightYellow,
				  exports.DEFAULT_ANSI_COLORS[11],
				)),
				(this.colors.ansi[12] = this._parseColor(
				  i.brightBlue,
				  exports.DEFAULT_ANSI_COLORS[12],
				)),
				(this.colors.ansi[13] = this._parseColor(
				  i.brightMagenta,
				  exports.DEFAULT_ANSI_COLORS[13],
				)),
				(this.colors.ansi[14] = this._parseColor(
				  i.brightCyan,
				  exports.DEFAULT_ANSI_COLORS[14],
				)),
				(this.colors.ansi[15] = this._parseColor(
				  i.brightWhite,
				  exports.DEFAULT_ANSI_COLORS[15],
				));
			}),
			(i.prototype._parseColor = function (s, r, o) {
			  if ((void 0 === o && (o = this.allowTransparency), !s)) return r;
			  if (
				((this._ctx.fillStyle = this._litmusColor),
				(this._ctx.fillStyle = s),
				"string" != typeof this._ctx.fillStyle)
			  )
				return (
				  console.warn(
					"Color: " + s + " is invalid using fallback " + r.css,
				  ),
				  r
				);
			  this._ctx.fillRect(0, 0, 1, 1);
			  var t = this._ctx.getImageData(0, 0, 1, 1).data;
			  return o || 255 === t[3]
				? {
					css: s,
					rgba:
					  ((t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3]) >>> 0,
				  }
				: (console.warn(
					"Color: " +
					  s +
					  " is using transparency, but allowTransparency is false. Using fallback " +
					  r.css +
					  ".",
				  ),
				  r);
			}),
			i
		  );
		})();
		exports.ColorManager = l;
	  },
	  {},
	],
	"Uj/q": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.CHAR_ATLAS_CELL_SPACING = 1);
	  },
	  {},
	],
	"/tmL": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = "undefined" == typeof navigator,
		  i = e ? "node" : navigator.userAgent,
		  n = e ? "node" : navigator.platform;
		function o(e, i) {
		  return e.indexOf(i) >= 0;
		}
		(exports.isFirefox = !!~i.indexOf("Firefox")),
		  (exports.isSafari = /^((?!chrome|android).)*safari/i.test(i)),
		  (exports.isMSIE = !!~i.indexOf("MSIE") || !!~i.indexOf("Trident")),
		  (exports.isMac = o(["Macintosh", "MacIntel", "MacPPC", "Mac68K"], n)),
		  (exports.isIpad = "iPad" === n),
		  (exports.isIphone = "iPhone" === n),
		  (exports.isMSWindows = o(["Windows", "Win16", "Win32", "WinCE"], n)),
		  (exports.isLinux = n.indexOf("Linux") >= 0);
	  },
	  {},
	],
	jdPj: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./Types"),
		  r = require("../utils/Browser");
		function t(t, i, n) {
		  var l = n.scaledCharWidth + e.CHAR_ATLAS_CELL_SPACING,
			s = n.scaledCharHeight + e.CHAR_ATLAS_CELL_SPACING,
			f = i(255 * l, 34 * s),
			c = f.getContext("2d", { alpha: n.allowTransparency });
		  (c.fillStyle = n.colors.background.css),
			c.fillRect(0, 0, f.width, f.height),
			c.save(),
			(c.fillStyle = n.colors.foreground.css),
			(c.font = o(n.fontWeight, n)),
			(c.textBaseline = "top");
		  for (var g = 0; g < 256; g++)
			c.save(),
			  c.beginPath(),
			  c.rect(g * l, 0, l, s),
			  c.clip(),
			  c.fillText(String.fromCharCode(g), g * l, 0),
			  c.restore();
		  c.save(), (c.font = o(n.fontWeightBold, n));
		  for (g = 0; g < 256; g++)
			c.save(),
			  c.beginPath(),
			  c.rect(g * l, s, l, s),
			  c.clip(),
			  c.fillText(String.fromCharCode(g), g * l, s),
			  c.restore();
		  c.restore(), (c.font = o(n.fontWeight, n));
		  for (var h = 0; h < 16; h++) {
			var d = (h + 2) * s;
			for (g = 0; g < 256; g++)
			  c.save(),
				c.beginPath(),
				c.rect(g * l, d, l, s),
				c.clip(),
				(c.fillStyle = n.colors.ansi[h].css),
				c.fillText(String.fromCharCode(g), g * l, d),
				c.restore();
		  }
		  c.font = o(n.fontWeightBold, n);
		  for (h = 0; h < 16; h++)
			for (d = (h + 2 + 16) * s, g = 0; g < 256; g++)
			  c.save(),
				c.beginPath(),
				c.rect(g * l, d, l, s),
				c.clip(),
				(c.fillStyle = n.colors.ansi[h].css),
				c.fillText(String.fromCharCode(g), g * l, d),
				c.restore();
		  if (
			(c.restore(),
			!("createImageBitmap" in t) || r.isFirefox || r.isSafari)
		  )
			return f instanceof HTMLCanvasElement
			  ? f
			  : new Promise(function (e) {
				  return e(f.transferToImageBitmap());
				});
		  var C = c.getImageData(0, 0, f.width, f.height);
		  return a(C, n.colors.background), t.createImageBitmap(C);
		}
		function a(e, r) {
		  for (
			var t = !0,
			  a = r.rgba >>> 24,
			  o = (r.rgba >>> 16) & 255,
			  i = (r.rgba >>> 8) & 255,
			  n = 0;
			n < e.data.length;
			n += 4
		  )
			e.data[n] === a && e.data[n + 1] === o && e.data[n + 2] === i
			  ? (e.data[n + 3] = 0)
			  : (t = !1);
		  return t;
		}
		function o(e, r) {
		  return (
			e + " " + r.fontSize * r.devicePixelRatio + "px " + r.fontFamily
		  );
		}
		(exports.generateStaticCharAtlasTexture = t), (exports.clearColor = a);
	  },
	  { "./Types": "Uj/q", "../utils/Browser": "/tmL" },
	],
	"3zpl": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = (function () {
		  function e(e) {
			(this.capacity = e),
			  (this._map = {}),
			  (this._head = null),
			  (this._tail = null),
			  (this._nodePool = []),
			  (this.size = 0);
		  }
		  return (
			(e.prototype._unlinkNode = function (e) {
			  var t = e.prev,
				l = e.next;
			  e === this._head && (this._head = l),
				e === this._tail && (this._tail = t),
				null !== t && (t.next = l),
				null !== l && (l.prev = t);
			}),
			(e.prototype._appendNode = function (e) {
			  var t = this._tail;
			  null !== t && (t.next = e),
				(e.prev = t),
				(e.next = null),
				(this._tail = e),
				null === this._head && (this._head = e);
			}),
			(e.prototype.prealloc = function (e) {
			  for (var t = this._nodePool, l = 0; l < e; l++)
				t.push({ prev: null, next: null, key: null, value: null });
			}),
			(e.prototype.get = function (e) {
			  var t = this._map[e];
			  return void 0 !== t
				? (this._unlinkNode(t), this._appendNode(t), t.value)
				: null;
			}),
			(e.prototype.peekValue = function (e) {
			  var t = this._map[e];
			  return void 0 !== t ? t.value : null;
			}),
			(e.prototype.peek = function () {
			  var e = this._head;
			  return null === e ? null : e.value;
			}),
			(e.prototype.set = function (e, t) {
			  var l = this._map[e];
			  if (void 0 !== l)
				(l = this._map[e]), this._unlinkNode(l), (l.value = t);
			  else if (this.size >= this.capacity)
				(l = this._head),
				  this._unlinkNode(l),
				  delete this._map[l.key],
				  (l.key = e),
				  (l.value = t),
				  (this._map[e] = l);
			  else {
				var i = this._nodePool;
				i.length > 0
				  ? (((l = i.pop()).key = e), (l.value = t))
				  : (l = { prev: null, next: null, key: e, value: t }),
				  (this._map[e] = l),
				  this.size++;
			  }
			  this._appendNode(l);
			}),
			e
		  );
		})();
		exports.default = e;
	  },
	  {},
	],
	"p5c+": [
	  function (require, module, exports) {
		"use strict";
		var t =
			(this && this.__extends) ||
			(function () {
			  var t = function (i, o) {
				return (t =
				  Object.setPrototypeOf ||
				  ({ __proto__: [] } instanceof Array &&
					function (t, i) {
					  t.__proto__ = i;
					}) ||
				  function (t, i) {
					for (var o in i) i.hasOwnProperty(o) && (t[o] = i[o]);
				  })(i, o);
			  };
			  return function (i, o) {
				function e() {
				  this.constructor = i;
				}
				t(i, o),
				  (i.prototype =
					null === o
					  ? Object.create(o)
					  : ((e.prototype = o.prototype), new e()));
			  };
			})(),
		  i =
			(this && this.__importDefault) ||
			function (t) {
			  return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var o = require("./Types"),
		  e = i(require("./BaseCharAtlas")),
		  a = require("../ColorManager"),
		  r = require("../../shared/atlas/CharAtlasGenerator"),
		  n = i(require("./LRUMap")),
		  h = require("../../shared/utils/Browser"),
		  s = 1024,
		  c = 1024,
		  _ = { css: "rgba(0, 0, 0, 0)", rgba: 0 },
		  p = 100,
		  l = 100;
		function g(t) {
		  return (
			(t.code << 21) |
			(t.bg << 12) |
			(t.fg << 3) |
			((t.bold ? 0 : 4) + (t.dim ? 0 : 2) + (t.italic ? 0 : 1))
		  );
		}
		var u = (function (i) {
		  function e(t, o) {
			var e = i.call(this) || this;
			(e._config = o),
			  (e._drawToCacheCount = 0),
			  (e._glyphsWaitingOnBitmap = []),
			  (e._bitmapCommitTimeout = null),
			  (e._bitmap = null),
			  (e._cacheCanvas = t.createElement("canvas")),
			  (e._cacheCanvas.width = s),
			  (e._cacheCanvas.height = c),
			  (e._cacheCtx = e._cacheCanvas.getContext("2d", { alpha: !0 }));
			var a = t.createElement("canvas");
			(a.width = e._config.scaledCharWidth),
			  (a.height = e._config.scaledCharHeight),
			  (e._tmpCtx = a.getContext("2d", {
				alpha: e._config.allowTransparency,
			  })),
			  (e._width = Math.floor(s / e._config.scaledCharWidth)),
			  (e._height = Math.floor(c / e._config.scaledCharHeight));
			var r = e._width * e._height;
			return (e._cacheMap = new n.default(r)), e._cacheMap.prealloc(r), e;
		  }
		  return (
			t(e, i),
			(e.prototype.dispose = function () {
			  null !== this._bitmapCommitTimeout &&
				(window.clearTimeout(this._bitmapCommitTimeout),
				(this._bitmapCommitTimeout = null));
			}),
			(e.prototype.beginFrame = function () {
			  this._drawToCacheCount = 0;
			}),
			(e.prototype.draw = function (t, i, o, e) {
			  if (32 === i.code) return !0;
			  var a = g(i),
				r = this._cacheMap.get(a);
			  if (null != r) return this._drawFromCache(t, r, o, e), !0;
			  if (this._canCache(i) && this._drawToCacheCount < p) {
				var n = void 0;
				n =
				  this._cacheMap.size < this._cacheMap.capacity
					? this._cacheMap.size
					: this._cacheMap.peek().index;
				var h = this._drawToCache(i, n);
				return (
				  this._cacheMap.set(a, h), this._drawFromCache(t, h, o, e), !0
				);
			  }
			  return !1;
			}),
			(e.prototype._canCache = function (t) {
			  return t.code < 256;
			}),
			(e.prototype._toCoordinateX = function (t) {
			  return (t % this._width) * this._config.scaledCharWidth;
			}),
			(e.prototype._toCoordinateY = function (t) {
			  return (
				Math.floor(t / this._width) * this._config.scaledCharHeight
			  );
			}),
			(e.prototype._drawFromCache = function (t, i, o, e) {
			  if (!i.isEmpty) {
				var a = this._toCoordinateX(i.index),
				  r = this._toCoordinateY(i.index);
				t.drawImage(
				  i.inBitmap ? this._bitmap : this._cacheCanvas,
				  a,
				  r,
				  this._config.scaledCharWidth,
				  this._config.scaledCharHeight,
				  o,
				  e,
				  this._config.scaledCharWidth,
				  this._config.scaledCharHeight,
				);
			  }
			}),
			(e.prototype._getColorFromAnsiIndex = function (t) {
			  return t < this._config.colors.ansi.length
				? this._config.colors.ansi[t]
				: a.DEFAULT_ANSI_COLORS[t];
			}),
			(e.prototype._getBackgroundColor = function (t) {
			  return this._config.allowTransparency
				? _
				: t.bg === o.INVERTED_DEFAULT_COLOR
				  ? this._config.colors.foreground
				  : t.bg < 256
					? this._getColorFromAnsiIndex(t.bg)
					: this._config.colors.background;
			}),
			(e.prototype._getForegroundColor = function (t) {
			  return t.fg === o.INVERTED_DEFAULT_COLOR
				? this._config.colors.background
				: t.fg < 256
				  ? this._getColorFromAnsiIndex(t.fg)
				  : this._config.colors.foreground;
			}),
			(e.prototype._drawToCache = function (t, i) {
			  this._drawToCacheCount++, this._tmpCtx.save();
			  var e = this._getBackgroundColor(t);
			  (this._tmpCtx.globalCompositeOperation = "copy"),
				(this._tmpCtx.fillStyle = e.css),
				this._tmpCtx.fillRect(
				  0,
				  0,
				  this._config.scaledCharWidth,
				  this._config.scaledCharHeight,
				),
				(this._tmpCtx.globalCompositeOperation = "source-over");
			  var a = t.bold
				  ? this._config.fontWeightBold
				  : this._config.fontWeight,
				n = t.italic ? "italic" : "";
			  (this._tmpCtx.font =
				n +
				" " +
				a +
				" " +
				this._config.fontSize * this._config.devicePixelRatio +
				"px " +
				this._config.fontFamily),
				(this._tmpCtx.textBaseline = "top"),
				(this._tmpCtx.fillStyle = this._getForegroundColor(t).css),
				t.dim && (this._tmpCtx.globalAlpha = o.DIM_OPACITY),
				this._tmpCtx.fillText(t.chars, 0, 0),
				this._tmpCtx.restore();
			  var h = this._tmpCtx.getImageData(
				  0,
				  0,
				  this._config.scaledCharWidth,
				  this._config.scaledCharHeight,
				),
				s = !1;
			  this._config.allowTransparency || (s = r.clearColor(h, e));
			  var c = this._toCoordinateX(i),
				_ = this._toCoordinateY(i);
			  this._cacheCtx.putImageData(h, c, _);
			  var p = { index: i, isEmpty: s, inBitmap: !1 };
			  return this._addGlyphToBitmap(p), p;
			}),
			(e.prototype._addGlyphToBitmap = function (t) {
			  var i = this;
			  "createImageBitmap" in window &&
				!h.isFirefox &&
				!h.isSafari &&
				(this._glyphsWaitingOnBitmap.push(t),
				null === this._bitmapCommitTimeout &&
				  (this._bitmapCommitTimeout = window.setTimeout(function () {
					return i._generateBitmap();
				  }, l)));
			}),
			(e.prototype._generateBitmap = function () {
			  var t = this,
				i = this._glyphsWaitingOnBitmap;
			  (this._glyphsWaitingOnBitmap = []),
				window.createImageBitmap(this._cacheCanvas).then(function (o) {
				  t._bitmap = o;
				  for (var e = 0; e < i.length; e++) {
					i[e].inBitmap = !0;
				  }
				}),
				(this._bitmapCommitTimeout = null);
			}),
			e
		  );
		})(e.default);
		exports.default = u;
	  },
	  {
		"./Types": "LQXW",
		"./BaseCharAtlas": "5e5Z",
		"../ColorManager": "9RWO",
		"../../shared/atlas/CharAtlasGenerator": "jdPj",
		"./LRUMap": "3zpl",
		"../../shared/utils/Browser": "/tmL",
	  },
	],
	zngU: [
	  function (require, module, exports) {
		"use strict";
		var t =
			(this && this.__extends) ||
			(function () {
			  var t = function (r, e) {
				return (t =
				  Object.setPrototypeOf ||
				  ({ __proto__: [] } instanceof Array &&
					function (t, r) {
					  t.__proto__ = r;
					}) ||
				  function (t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
				  })(r, e);
			  };
			  return function (r, e) {
				function n() {
				  this.constructor = r;
				}
				t(r, e),
				  (r.prototype =
					null === e
					  ? Object.create(e)
					  : ((n.prototype = e.prototype), new n()));
			  };
			})(),
		  r =
			(this && this.__importDefault) ||
			function (t) {
			  return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = r(require("./BaseCharAtlas")),
		  n = (function (r) {
			function e(t, e) {
			  return r.call(this) || this;
			}
			return (
			  t(e, r),
			  (e.prototype.draw = function (t, r, e, n) {
				return !1;
			  }),
			  e
			);
		  })(e.default);
		exports.default = n;
	  },
	  { "./BaseCharAtlas": "5e5Z" },
	],
	gJee: [
	  function (require, module, exports) {
		"use strict";
		var t =
			(this && this.__extends) ||
			(function () {
			  var t = function (e, r) {
				return (t =
				  Object.setPrototypeOf ||
				  ({ __proto__: [] } instanceof Array &&
					function (t, e) {
					  t.__proto__ = e;
					}) ||
				  function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
				  })(e, r);
			  };
			  return function (e, r) {
				function n() {
				  this.constructor = e;
				}
				t(e, r),
				  (e.prototype =
					null === r
					  ? Object.create(r)
					  : ((n.prototype = r.prototype), new n()));
			  };
			})(),
		  e =
			(this && this.__importDefault) ||
			function (t) {
			  return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var r = require("./Types"),
		  n = require("../../shared/atlas/Types"),
		  a = require("../../shared/atlas/CharAtlasGenerator"),
		  i = e(require("./BaseCharAtlas")),
		  o = (function (e) {
			function i(t, r) {
			  var n = e.call(this) || this;
			  return (
				(n._document = t),
				(n._config = r),
				(n._canvasFactory = function (t, e) {
				  var r = n._document.createElement("canvas");
				  return (r.width = t), (r.height = e), r;
				}),
				n
			  );
			}
			return (
			  t(i, e),
			  (i.prototype._doWarmUp = function () {
				var t = this,
				  e = a.generateStaticCharAtlasTexture(
					window,
					this._canvasFactory,
					this._config,
				  );
				e instanceof HTMLCanvasElement
				  ? (this._texture = e)
				  : e.then(function (e) {
					  t._texture = e;
					});
			  }),
			  (i.prototype._isCached = function (t, e) {
				var r = t.code < 256,
				  n = t.fg < 16,
				  a = t.fg >= 256,
				  i = t.bg >= 256;
				return r && (n || a) && i && !t.italic;
			  }),
			  (i.prototype.draw = function (t, e, a, i) {
				if (null === this._texture || void 0 === this._texture)
				  return !1;
				var o = 0;
				if (
				  (e.fg < 256
					? (o = 2 + e.fg + (e.bold ? 16 : 0))
					: e.bold && (o = 1),
				  !this._isCached(e, o))
				)
				  return !1;
				t.save();
				var s =
					this._config.scaledCharWidth + n.CHAR_ATLAS_CELL_SPACING,
				  c = this._config.scaledCharHeight + n.CHAR_ATLAS_CELL_SPACING;
				return (
				  e.dim && (t.globalAlpha = r.DIM_OPACITY),
				  t.drawImage(
					this._texture,
					e.code * s,
					o * c,
					s,
					this._config.scaledCharHeight,
					a,
					i,
					s,
					this._config.scaledCharHeight,
				  ),
				  t.restore(),
				  !0
				);
			  }),
			  i
			);
		  })(i.default);
		exports.default = o;
	  },
	  {
		"./Types": "LQXW",
		"../../shared/atlas/Types": "Uj/q",
		"../../shared/atlas/CharAtlasGenerator": "jdPj",
		"./BaseCharAtlas": "5e5Z",
	  },
	],
	U7kw: [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__importDefault) ||
		  function (e) {
			return e && e.__esModule ? e : { default: e };
		  };
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var r = require("./CharAtlasUtils"),
		  a = e(require("./DynamicCharAtlas")),
		  t = e(require("./NoneCharAtlas")),
		  n = e(require("./StaticCharAtlas")),
		  i = { none: t.default, static: n.default, dynamic: a.default },
		  o = [];
		function l(e, a, t, n) {
		  for (var l = r.generateConfig(t, n, e, a), s = 0; s < o.length; s++) {
			var u = (f = o[s]).ownedBy.indexOf(e);
			if (u >= 0) {
			  if (r.configEquals(f.config, l)) return f.atlas;
			  1 === f.ownedBy.length ? o.splice(s, 1) : f.ownedBy.splice(u, 1);
			  break;
			}
		  }
		  for (s = 0; s < o.length; s++) {
			var f = o[s];
			if (r.configEquals(f.config, l)) return f.ownedBy.push(e), f.atlas;
		  }
		  var c = {
			atlas: new i[e.options.experimentalCharAtlas](document, l),
			config: l,
			ownedBy: [e],
		  };
		  return o.push(c), c.atlas;
		}
		function s(e) {
		  for (var r = 0; r < o.length; r++) {
			var a = o[r].ownedBy.indexOf(e);
			if (-1 !== a) {
			  1 === o[r].ownedBy.length
				? o.splice(r, 1)
				: o[r].ownedBy.splice(a, 1);
			  break;
			}
		  }
		}
		(exports.acquireCharAtlas = l), (exports.removeTerminalFromCache = s);
	  },
	  {
		"./CharAtlasUtils": "spzq",
		"./DynamicCharAtlas": "p5c+",
		"./NoneCharAtlas": "zngU",
		"./StaticCharAtlas": "gJee",
	  },
	],
	SM14: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("./atlas/Types"),
		  i = require("./atlas/CharAtlasCache"),
		  e = require("../Buffer"),
		  s = (function () {
			function s(t, i, e, s, h) {
			  (this._container = t),
				(this._alpha = s),
				(this._colors = h),
				(this._scaledCharWidth = 0),
				(this._scaledCharHeight = 0),
				(this._scaledCellWidth = 0),
				(this._scaledCellHeight = 0),
				(this._scaledCharLeft = 0),
				(this._scaledCharTop = 0),
				(this._currentGlyphIdentifier = {
				  chars: "",
				  code: 0,
				  bg: 0,
				  fg: 0,
				  bold: !1,
				  dim: !1,
				  italic: !1,
				}),
				(this._canvas = document.createElement("canvas")),
				this._canvas.classList.add("xterm-" + i + "-layer"),
				(this._canvas.style.zIndex = e.toString()),
				this._initCanvas(),
				this._container.appendChild(this._canvas);
			}
			return (
			  (s.prototype.dispose = function () {
				this._container.removeChild(this._canvas),
				  this._charAtlas && this._charAtlas.dispose();
			  }),
			  (s.prototype._initCanvas = function () {
				(this._ctx = this._canvas.getContext("2d", {
				  alpha: this._alpha,
				})),
				  this._alpha || this.clearAll();
			  }),
			  (s.prototype.onOptionsChanged = function (t) {}),
			  (s.prototype.onBlur = function (t) {}),
			  (s.prototype.onFocus = function (t) {}),
			  (s.prototype.onCursorMove = function (t) {}),
			  (s.prototype.onGridChanged = function (t, i, e) {}),
			  (s.prototype.onSelectionChanged = function (t, i, e, s) {
				void 0 === s && (s = !1);
			  }),
			  (s.prototype.onThemeChanged = function (t, i) {
				this._refreshCharAtlas(t, i);
			  }),
			  (s.prototype.setTransparency = function (t, i) {
				if (i !== this._alpha) {
				  var e = this._canvas;
				  (this._alpha = i),
					(this._canvas = this._canvas.cloneNode()),
					this._initCanvas(),
					this._container.replaceChild(this._canvas, e),
					this._refreshCharAtlas(t, this._colors),
					this.onGridChanged(t, 0, t.rows - 1);
				}
			  }),
			  (s.prototype._refreshCharAtlas = function (t, e) {
				(this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0) ||
				  ((this._charAtlas = i.acquireCharAtlas(
					t,
					e,
					this._scaledCharWidth,
					this._scaledCharHeight,
				  )),
				  this._charAtlas.warmUp());
			  }),
			  (s.prototype.resize = function (t, i) {
				(this._scaledCellWidth = i.scaledCellWidth),
				  (this._scaledCellHeight = i.scaledCellHeight),
				  (this._scaledCharWidth = i.scaledCharWidth),
				  (this._scaledCharHeight = i.scaledCharHeight),
				  (this._scaledCharLeft = i.scaledCharLeft),
				  (this._scaledCharTop = i.scaledCharTop),
				  (this._canvas.width = i.scaledCanvasWidth),
				  (this._canvas.height = i.scaledCanvasHeight),
				  (this._canvas.style.width = i.canvasWidth + "px"),
				  (this._canvas.style.height = i.canvasHeight + "px"),
				  this._alpha || this.clearAll(),
				  this._refreshCharAtlas(t, this._colors);
			  }),
			  (s.prototype.fillCells = function (t, i, e, s) {
				this._ctx.fillRect(
				  t * this._scaledCellWidth,
				  i * this._scaledCellHeight,
				  e * this._scaledCellWidth,
				  s * this._scaledCellHeight,
				);
			  }),
			  (s.prototype.fillBottomLineAtCells = function (t, i, e) {
				void 0 === e && (e = 1),
				  this._ctx.fillRect(
					t * this._scaledCellWidth,
					(i + 1) * this._scaledCellHeight -
					  window.devicePixelRatio -
					  1,
					e * this._scaledCellWidth,
					window.devicePixelRatio,
				  );
			  }),
			  (s.prototype.fillLeftLineAtCell = function (t, i) {
				this._ctx.fillRect(
				  t * this._scaledCellWidth,
				  i * this._scaledCellHeight,
				  window.devicePixelRatio,
				  this._scaledCellHeight,
				);
			  }),
			  (s.prototype.strokeRectAtCell = function (t, i, e, s) {
				(this._ctx.lineWidth = window.devicePixelRatio),
				  this._ctx.strokeRect(
					t * this._scaledCellWidth + window.devicePixelRatio / 2,
					i * this._scaledCellHeight + window.devicePixelRatio / 2,
					e * this._scaledCellWidth - window.devicePixelRatio,
					s * this._scaledCellHeight - window.devicePixelRatio,
				  );
			  }),
			  (s.prototype.clearAll = function () {
				this._alpha
				  ? this._ctx.clearRect(
					  0,
					  0,
					  this._canvas.width,
					  this._canvas.height,
					)
				  : ((this._ctx.fillStyle = this._colors.background.css),
					this._ctx.fillRect(
					  0,
					  0,
					  this._canvas.width,
					  this._canvas.height,
					));
			  }),
			  (s.prototype.clearCells = function (t, i, e, s) {
				this._alpha
				  ? this._ctx.clearRect(
					  t * this._scaledCellWidth,
					  i * this._scaledCellHeight,
					  e * this._scaledCellWidth,
					  s * this._scaledCellHeight,
					)
				  : ((this._ctx.fillStyle = this._colors.background.css),
					this._ctx.fillRect(
					  t * this._scaledCellWidth,
					  i * this._scaledCellHeight,
					  e * this._scaledCellWidth,
					  s * this._scaledCellHeight,
					));
			  }),
			  (s.prototype.fillCharTrueColor = function (t, i, s, h) {
				(this._ctx.font = this._getFont(t, !1, !1)),
				  (this._ctx.textBaseline = "top"),
				  this._clipRow(t, h),
				  this._ctx.fillText(
					i[e.CHAR_DATA_CHAR_INDEX],
					s * this._scaledCellWidth + this._scaledCharLeft,
					h * this._scaledCellHeight + this._scaledCharTop,
				  );
			  }),
			  (s.prototype.drawChars = function (
				i,
				e,
				s,
				h,
				l,
				a,
				c,
				o,
				n,
				r,
				d,
			  ) {
				(c +=
				  i.options.drawBoldTextInBrightColors &&
				  n &&
				  c < 8 &&
				  c !== t.INVERTED_DEFAULT_COLOR
					? 8
					: 0),
				  (this._currentGlyphIdentifier.chars = e),
				  (this._currentGlyphIdentifier.code = s),
				  (this._currentGlyphIdentifier.bg = o),
				  (this._currentGlyphIdentifier.fg = c),
				  (this._currentGlyphIdentifier.bold =
					n && i.options.enableBold),
				  (this._currentGlyphIdentifier.dim = r),
				  (this._currentGlyphIdentifier.italic = d),
				  (this._charAtlas &&
					this._charAtlas.draw(
					  this._ctx,
					  this._currentGlyphIdentifier,
					  l * this._scaledCellWidth + this._scaledCharLeft,
					  a * this._scaledCellHeight + this._scaledCharTop,
					)) ||
					this._drawUncachedChars(
					  i,
					  e,
					  h,
					  c,
					  l,
					  a,
					  n && i.options.enableBold,
					  r,
					  d,
					);
			  }),
			  (s.prototype._drawUncachedChars = function (
				i,
				e,
				s,
				h,
				l,
				a,
				c,
				o,
				n,
			  ) {
				this._ctx.save(),
				  (this._ctx.font = this._getFont(i, c, n)),
				  (this._ctx.textBaseline = "top"),
				  h === t.INVERTED_DEFAULT_COLOR
					? (this._ctx.fillStyle = this._colors.background.css)
					: (this._ctx.fillStyle =
						h < 256
						  ? this._colors.ansi[h].css
						  : this._colors.foreground.css),
				  this._clipRow(i, a),
				  o && (this._ctx.globalAlpha = t.DIM_OPACITY),
				  this._ctx.fillText(
					e,
					l * this._scaledCellWidth + this._scaledCharLeft,
					a * this._scaledCellHeight + this._scaledCharTop,
				  ),
				  this._ctx.restore();
			  }),
			  (s.prototype._clipRow = function (t, i) {
				this._ctx.beginPath(),
				  this._ctx.rect(
					0,
					i * this._scaledCellHeight,
					t.cols * this._scaledCellWidth,
					this._scaledCellHeight,
				  ),
				  this._ctx.clip();
			  }),
			  (s.prototype._getFont = function (t, i, e) {
				return (
				  (e ? "italic" : "") +
				  " " +
				  (i ? t.options.fontWeightBold : t.options.fontWeight) +
				  " " +
				  t.options.fontSize * window.devicePixelRatio +
				  "px " +
				  t.options.fontFamily
				);
			  }),
			  s
			);
		  })();
		exports.BaseRenderLayer = s;
	  },
	  {
		"./atlas/Types": "LQXW",
		"./atlas/CharAtlasCache": "U7kw",
		"../Buffer": "nJkY",
	  },
	],
	TXoM: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (r, e) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, r) {
					t.__proto__ = r;
				  }) ||
				function (t, r) {
				  for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
				})(r, e);
			};
			return function (r, e) {
			  function a() {
				this.constructor = r;
			  }
			  t(r, e),
				(r.prototype =
				  null === e
					? Object.create(e)
					: ((a.prototype = e.prototype), new a()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var r = require("../Buffer"),
		  e = require("./Types"),
		  a = require("./atlas/Types"),
		  s = require("./GridCache"),
		  i = require("./BaseRenderLayer"),
		  o = (function (i) {
			function o(t, r, e, a, o) {
			  var c = i.call(this, t, "text", r, o, e) || this;
			  return (
				(c._characterOverlapCache = {}),
				(c._state = new s.GridCache()),
				(c._characterJoinerRegistry = a),
				c
			  );
			}
			return (
			  t(o, i),
			  (o.prototype.resize = function (t, r) {
				i.prototype.resize.call(this, t, r);
				var e = this._getFont(t, !1, !1);
				(this._characterWidth === r.scaledCharWidth &&
				  this._characterFont === e) ||
				  ((this._characterWidth = r.scaledCharWidth),
				  (this._characterFont = e),
				  (this._characterOverlapCache = {})),
				  this._state.clear(),
				  this._state.resize(t.cols, t.rows);
			  }),
			  (o.prototype.reset = function (t) {
				this._state.clear(), this.clearAll();
			  }),
			  (o.prototype._forEachCell = function (t, s, i, o, c) {
				for (var n = s; n <= i; n++)
				  for (
					var l = n + t.buffer.ydisp,
					  _ = t.buffer.lines.get(l),
					  h = o ? o.getJoinedCharacters(l) : [],
					  f = 0;
					f < t.cols;
					f++
				  ) {
					var u = _.get(f),
					  p = u[r.CHAR_DATA_CODE_INDEX],
					  A = u[r.CHAR_DATA_CHAR_INDEX],
					  C = u[r.CHAR_DATA_ATTR_INDEX],
					  d = u[r.CHAR_DATA_WIDTH_INDEX],
					  D = !1,
					  E = f;
					if (0 !== d) {
					  if (h.length > 0 && f === h[0][0]) {
						D = !0;
						var y = h.shift();
						(A = t.buffer.translateBufferLineToString(
						  l,
						  !0,
						  y[0],
						  y[1],
						)),
						  (d = y[1] - y[0]),
						  (p = 1 / 0),
						  (E = y[1] - 1);
					  }
					  !D &&
						this._isOverlapping(u) &&
						E < _.length - 1 &&
						_.get(E + 1)[r.CHAR_DATA_CODE_INDEX] ===
						  r.NULL_CELL_CODE &&
						(d = 2);
					  var v = C >> 18,
						T = 511 & C,
						L = (C >> 9) & 511;
					  if (v & e.FLAGS.INVERSE) {
						var O = T;
						(T = L),
						  256 === (L = O) && (L = a.INVERTED_DEFAULT_COLOR),
						  257 === T && (T = a.INVERTED_DEFAULT_COLOR);
					  }
					  c(p, A, d, f, n, L, T, v), (f = E);
					}
				  }
			  }),
			  (o.prototype._drawBackground = function (t, r, e) {
				var s = this,
				  i = this._ctx,
				  o = t.cols,
				  c = 0,
				  n = 0,
				  l = null;
				i.save(),
				  this._forEachCell(
					t,
					r,
					e,
					null,
					function (t, r, e, _, h, f, u, p) {
					  var A = null;
					  u === a.INVERTED_DEFAULT_COLOR
						? (A = s._colors.foreground.css)
						: u < 256 && (A = s._colors.ansi[u].css),
						null === l && ((c = _), (n = h)),
						h !== n
						  ? ((i.fillStyle = l),
							s.fillCells(c, n, o - c, 1),
							(c = _),
							(n = h))
						  : l !== A &&
							((i.fillStyle = l),
							s.fillCells(c, n, _ - c, 1),
							(c = _),
							(n = h)),
						(l = A);
					},
				  ),
				  null !== l &&
					((i.fillStyle = l), this.fillCells(c, n, o - c, 1)),
				  i.restore();
			  }),
			  (o.prototype._drawForeground = function (t, r, s) {
				var i = this;
				this._forEachCell(
				  t,
				  r,
				  s,
				  this._characterJoinerRegistry,
				  function (r, s, o, c, n, l, _, h) {
					h & e.FLAGS.INVISIBLE ||
					  (h & e.FLAGS.UNDERLINE &&
						(i._ctx.save(),
						l === a.INVERTED_DEFAULT_COLOR
						  ? (i._ctx.fillStyle = i._colors.background.css)
						  : (i._ctx.fillStyle =
							  l < 256
								? i._colors.ansi[l].css
								: i._colors.foreground.css),
						i.fillBottomLineAtCells(c, n, o),
						i._ctx.restore()),
					  i.drawChars(
						t,
						s,
						r,
						o,
						c,
						n,
						l,
						_,
						!!(h & e.FLAGS.BOLD),
						!!(h & e.FLAGS.DIM),
						!!(h & e.FLAGS.ITALIC),
					  ));
				  },
				);
			  }),
			  (o.prototype.onGridChanged = function (t, r, e) {
				0 !== this._state.cache.length &&
				  (this._charAtlas && this._charAtlas.beginFrame(),
				  this.clearCells(0, r, t.cols, e - r + 1),
				  this._drawBackground(t, r, e),
				  this._drawForeground(t, r, e));
			  }),
			  (o.prototype.onOptionsChanged = function (t) {
				this.setTransparency(t, t.options.allowTransparency);
			  }),
			  (o.prototype._isOverlapping = function (t) {
				if (1 !== t[r.CHAR_DATA_WIDTH_INDEX]) return !1;
				if (t[r.CHAR_DATA_CODE_INDEX] < 256) return !1;
				var e = t[r.CHAR_DATA_CHAR_INDEX];
				if (this._characterOverlapCache.hasOwnProperty(e))
				  return this._characterOverlapCache[e];
				this._ctx.save(), (this._ctx.font = this._characterFont);
				var a =
				  Math.floor(this._ctx.measureText(e).width) >
				  this._characterWidth;
				return (
				  this._ctx.restore(), (this._characterOverlapCache[e] = a), a
				);
			  }),
			  o
			);
		  })(i.BaseRenderLayer);
		exports.TextRenderLayer = o;
	  },
	  {
		"../Buffer": "nJkY",
		"./Types": "lZiw",
		"./atlas/Types": "LQXW",
		"./GridCache": "3JPA",
		"./BaseRenderLayer": "SM14",
	  },
	],
	xczP: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, s) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
				})(e, s);
			};
			return function (e, s) {
			  function r() {
				this.constructor = e;
			  }
			  t(e, s),
				(e.prototype =
				  null === s
					? Object.create(s)
					: ((r.prototype = s.prototype), new r()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./BaseRenderLayer"),
		  s = (function (e) {
			function s(t, s, r) {
			  var i = e.call(this, t, "selection", s, !0, r) || this;
			  return i._clearState(), i;
			}
			return (
			  t(s, e),
			  (s.prototype._clearState = function () {
				this._state = {
				  start: null,
				  end: null,
				  columnSelectMode: null,
				  ydisp: null,
				};
			  }),
			  (s.prototype.resize = function (t, s) {
				e.prototype.resize.call(this, t, s), this._clearState();
			  }),
			  (s.prototype.reset = function (t) {
				this._state.start &&
				  this._state.end &&
				  (this._clearState(), this.clearAll());
			  }),
			  (s.prototype.onSelectionChanged = function (t, e, s, r) {
				if (
				  this._didStateChange(e, s, r, t.buffer.ydisp) &&
				  (this.clearAll(), e && s)
				) {
				  var i = e[1] - t.buffer.ydisp,
					o = s[1] - t.buffer.ydisp,
					n = Math.max(i, 0),
					a = Math.min(o, t.rows - 1);
				  if (!(n >= t.rows || a < 0)) {
					if (
					  ((this._ctx.fillStyle = this._colors.selection.css), r)
					) {
					  var l = e[0],
						c = s[0] - l,
						u = a - n + 1;
					  this.fillCells(l, n, c, u);
					} else {
					  l = i === n ? e[0] : 0;
					  var h = n === a ? s[0] : t.cols;
					  this.fillCells(l, n, h - l, 1);
					  var f = Math.max(a - n - 1, 0);
					  if ((this.fillCells(0, n + 1, t.cols, f), n !== a)) {
						var p = o === a ? s[0] : t.cols;
						this.fillCells(0, a, p, 1);
					  }
					}
					(this._state.start = [e[0], e[1]]),
					  (this._state.end = [s[0], s[1]]),
					  (this._state.columnSelectMode = r),
					  (this._state.ydisp = t.buffer.ydisp);
				  }
				}
			  }),
			  (s.prototype._didStateChange = function (t, e, s, r) {
				return (
				  !this._areCoordinatesEqual(t, this._state.start) ||
				  !this._areCoordinatesEqual(e, this._state.end) ||
				  s !== this._state.columnSelectMode ||
				  r !== this._state.ydisp
				);
			  }),
			  (s.prototype._areCoordinatesEqual = function (t, e) {
				return !(!t || !e) && t[0] === e[0] && t[1] === e[1];
			  }),
			  s
			);
		  })(e.BaseRenderLayer);
		exports.SelectionRenderLayer = s;
	  },
	  { "./BaseRenderLayer": "SM14" },
	],
	W3ei: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, r) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
				})(e, r);
			};
			return function (e, r) {
			  function i() {
				this.constructor = e;
			  }
			  t(e, r),
				(e.prototype =
				  null === r
					? Object.create(r)
					: ((i.prototype = r.prototype), new i()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("../Buffer"),
		  r = require("./BaseRenderLayer"),
		  i = 600,
		  s = (function (r) {
			function i(t, e, i) {
			  var s = r.call(this, t, "cursor", e, !0, i) || this;
			  return (
				(s._state = {
				  x: null,
				  y: null,
				  isFocused: null,
				  style: null,
				  width: null,
				}),
				(s._cursorRenderers = {
				  bar: s._renderBarCursor.bind(s),
				  block: s._renderBlockCursor.bind(s),
				  underline: s._renderUnderlineCursor.bind(s),
				}),
				s
			  );
			}
			return (
			  t(i, r),
			  (i.prototype.resize = function (t, e) {
				r.prototype.resize.call(this, t, e),
				  (this._state = {
					x: null,
					y: null,
					isFocused: null,
					style: null,
					width: null,
				  });
			  }),
			  (i.prototype.reset = function (t) {
				this._clearCursor(),
				  this._cursorBlinkStateManager &&
					(this._cursorBlinkStateManager.dispose(),
					(this._cursorBlinkStateManager = null),
					this.onOptionsChanged(t));
			  }),
			  (i.prototype.onBlur = function (t) {
				this._cursorBlinkStateManager &&
				  this._cursorBlinkStateManager.pause(),
				  t.refresh(t.buffer.y, t.buffer.y);
			  }),
			  (i.prototype.onFocus = function (t) {
				this._cursorBlinkStateManager
				  ? this._cursorBlinkStateManager.resume(t)
				  : t.refresh(t.buffer.y, t.buffer.y);
			  }),
			  (i.prototype.onOptionsChanged = function (t) {
				var e = this;
				t.options.cursorBlink
				  ? this._cursorBlinkStateManager ||
					(this._cursorBlinkStateManager = new n(t, function () {
					  e._render(t, !0);
					}))
				  : (this._cursorBlinkStateManager &&
					  (this._cursorBlinkStateManager.dispose(),
					  (this._cursorBlinkStateManager = null)),
					t.refresh(t.buffer.y, t.buffer.y));
			  }),
			  (i.prototype.onCursorMove = function (t) {
				this._cursorBlinkStateManager &&
				  this._cursorBlinkStateManager.restartBlinkAnimation(t);
			  }),
			  (i.prototype.onGridChanged = function (t, e, r) {
				!this._cursorBlinkStateManager ||
				this._cursorBlinkStateManager.isPaused
				  ? this._render(t, !1)
				  : this._cursorBlinkStateManager.restartBlinkAnimation(t);
			  }),
			  (i.prototype._render = function (t, r) {
				if (t.cursorState && !t.cursorHidden) {
				  var i = t.buffer.ybase + t.buffer.y,
					s = i - t.buffer.ydisp;
				  if (s < 0 || s >= t.rows) this._clearCursor();
				  else {
					var n = t.buffer.lines.get(i).get(t.buffer.x);
					if (n) {
					  if (!t.isFocused)
						return (
						  this._clearCursor(),
						  this._ctx.save(),
						  (this._ctx.fillStyle = this._colors.cursor.css),
						  this._renderBlurCursor(t, t.buffer.x, s, n),
						  this._ctx.restore(),
						  (this._state.x = t.buffer.x),
						  (this._state.y = s),
						  (this._state.isFocused = !1),
						  (this._state.style = t.options.cursorStyle),
						  void (this._state.width = n[e.CHAR_DATA_WIDTH_INDEX])
						);
					  if (
						!this._cursorBlinkStateManager ||
						this._cursorBlinkStateManager.isCursorVisible
					  ) {
						if (this._state) {
						  if (
							this._state.x === t.buffer.x &&
							this._state.y === s &&
							this._state.isFocused === t.isFocused &&
							this._state.style === t.options.cursorStyle &&
							this._state.width === n[e.CHAR_DATA_WIDTH_INDEX]
						  )
							return;
						  this._clearCursor();
						}
						this._ctx.save(),
						  this._cursorRenderers[
							t.options.cursorStyle || "block"
						  ](t, t.buffer.x, s, n),
						  this._ctx.restore(),
						  (this._state.x = t.buffer.x),
						  (this._state.y = s),
						  (this._state.isFocused = !1),
						  (this._state.style = t.options.cursorStyle),
						  (this._state.width = n[e.CHAR_DATA_WIDTH_INDEX]);
					  } else this._clearCursor();
					}
				  }
				} else this._clearCursor();
			  }),
			  (i.prototype._clearCursor = function () {
				this._state &&
				  (this.clearCells(
					this._state.x,
					this._state.y,
					this._state.width,
					1,
				  ),
				  (this._state = {
					x: null,
					y: null,
					isFocused: null,
					style: null,
					width: null,
				  }));
			  }),
			  (i.prototype._renderBarCursor = function (t, e, r, i) {
				this._ctx.save(),
				  (this._ctx.fillStyle = this._colors.cursor.css),
				  this.fillLeftLineAtCell(e, r),
				  this._ctx.restore();
			  }),
			  (i.prototype._renderBlockCursor = function (t, r, i, s) {
				this._ctx.save(),
				  (this._ctx.fillStyle = this._colors.cursor.css),
				  this.fillCells(r, i, s[e.CHAR_DATA_WIDTH_INDEX], 1),
				  (this._ctx.fillStyle = this._colors.cursorAccent.css),
				  this.fillCharTrueColor(t, s, r, i),
				  this._ctx.restore();
			  }),
			  (i.prototype._renderUnderlineCursor = function (t, e, r, i) {
				this._ctx.save(),
				  (this._ctx.fillStyle = this._colors.cursor.css),
				  this.fillBottomLineAtCells(e, r),
				  this._ctx.restore();
			  }),
			  (i.prototype._renderBlurCursor = function (t, r, i, s) {
				this._ctx.save(),
				  (this._ctx.strokeStyle = this._colors.cursor.css),
				  this.strokeRectAtCell(r, i, s[e.CHAR_DATA_WIDTH_INDEX], 1),
				  this._ctx.restore();
			  }),
			  i
			);
		  })(r.BaseRenderLayer);
		exports.CursorRenderLayer = s;
		var n = (function () {
		  function t(t, e) {
			(this._renderCallback = e),
			  (this.isCursorVisible = !0),
			  t.isFocused && this._restartInterval();
		  }
		  return (
			Object.defineProperty(t.prototype, "isPaused", {
			  get: function () {
				return !(this._blinkStartTimeout || this._blinkInterval);
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			(t.prototype.dispose = function () {
			  this._blinkInterval &&
				(window.clearInterval(this._blinkInterval),
				(this._blinkInterval = null)),
				this._blinkStartTimeout &&
				  (window.clearTimeout(this._blinkStartTimeout),
				  (this._blinkStartTimeout = null)),
				this._animationFrame &&
				  (window.cancelAnimationFrame(this._animationFrame),
				  (this._animationFrame = null));
			}),
			(t.prototype.restartBlinkAnimation = function (t) {
			  var e = this;
			  this.isPaused ||
				((this._animationTimeRestarted = Date.now()),
				(this.isCursorVisible = !0),
				this._animationFrame ||
				  (this._animationFrame = window.requestAnimationFrame(
					function () {
					  e._renderCallback(), (e._animationFrame = null);
					},
				  )));
			}),
			(t.prototype._restartInterval = function (t) {
			  var e = this;
			  void 0 === t && (t = i),
				this._blinkInterval &&
				  window.clearInterval(this._blinkInterval),
				(this._blinkStartTimeout = setTimeout(function () {
				  if (e._animationTimeRestarted) {
					var t = i - (Date.now() - e._animationTimeRestarted);
					if (((e._animationTimeRestarted = null), t > 0))
					  return void e._restartInterval(t);
				  }
				  (e.isCursorVisible = !1),
					(e._animationFrame = window.requestAnimationFrame(
					  function () {
						e._renderCallback(), (e._animationFrame = null);
					  },
					)),
					(e._blinkInterval = setInterval(function () {
					  if (e._animationTimeRestarted) {
						var t = i - (Date.now() - e._animationTimeRestarted);
						return (
						  (e._animationTimeRestarted = null),
						  void e._restartInterval(t)
						);
					  }
					  (e.isCursorVisible = !e.isCursorVisible),
						(e._animationFrame = window.requestAnimationFrame(
						  function () {
							e._renderCallback(), (e._animationFrame = null);
						  },
						));
					}, i));
				}, t));
			}),
			(t.prototype.pause = function () {
			  (this.isCursorVisible = !0),
				this._blinkInterval &&
				  (window.clearInterval(this._blinkInterval),
				  (this._blinkInterval = null)),
				this._blinkStartTimeout &&
				  (window.clearTimeout(this._blinkStartTimeout),
				  (this._blinkStartTimeout = null)),
				this._animationFrame &&
				  (window.cancelAnimationFrame(this._animationFrame),
				  (this._animationFrame = null));
			}),
			(t.prototype.resume = function (t) {
			  (this._animationTimeRestarted = null),
				this._restartInterval(),
				this.restartBlinkAnimation(t);
			}),
			t
		  );
		})();
	  },
	  { "../Buffer": "nJkY", "./BaseRenderLayer": "SM14" },
	],
	PsFh: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, s) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
				})(e, s);
			};
			return function (e, s) {
			  function i() {
				this.constructor = e;
			  }
			  t(e, s),
				(e.prototype =
				  null === s
					? Object.create(s)
					: ((i.prototype = s.prototype), new i()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("../Types"),
		  s = require("./BaseRenderLayer"),
		  i = require("./atlas/Types"),
		  r = (function (s) {
			function r(t, i, r, n) {
			  var o = s.call(this, t, "link", i, !0, r) || this;
			  return (
				(o._state = null),
				n.linkifier.on(e.LinkHoverEventTypes.HOVER, function (t) {
				  return o._onLinkHover(t);
				}),
				n.linkifier.on(e.LinkHoverEventTypes.LEAVE, function (t) {
				  return o._onLinkLeave(t);
				}),
				o
			  );
			}
			return (
			  t(r, s),
			  (r.prototype.resize = function (t, e) {
				s.prototype.resize.call(this, t, e), (this._state = null);
			  }),
			  (r.prototype.reset = function (t) {
				this._clearCurrentLink();
			  }),
			  (r.prototype._clearCurrentLink = function () {
				if (this._state) {
				  this.clearCells(
					this._state.x1,
					this._state.y1,
					this._state.cols - this._state.x1,
					1,
				  );
				  var t = this._state.y2 - this._state.y1 - 1;
				  t > 0 &&
					this.clearCells(0, this._state.y1 + 1, this._state.cols, t),
					this.clearCells(0, this._state.y2, this._state.x2, 1),
					(this._state = null);
				}
			  }),
			  (r.prototype._onLinkHover = function (t) {
				if (
				  (t.fg === i.INVERTED_DEFAULT_COLOR
					? (this._ctx.fillStyle = this._colors.background.css)
					: t.fg < 256
					  ? (this._ctx.fillStyle = this._colors.ansi[t.fg].css)
					  : (this._ctx.fillStyle = this._colors.foreground.css),
				  t.y1 === t.y2)
				)
				  this.fillBottomLineAtCells(t.x1, t.y1, t.x2 - t.x1);
				else {
				  this.fillBottomLineAtCells(t.x1, t.y1, t.cols - t.x1);
				  for (var e = t.y1 + 1; e < t.y2; e++)
					this.fillBottomLineAtCells(0, e, t.cols);
				  this.fillBottomLineAtCells(0, t.y2, t.x2);
				}
				this._state = t;
			  }),
			  (r.prototype._onLinkLeave = function (t) {
				this._clearCurrentLink();
			  }),
			  r
			);
		  })(s.BaseRenderLayer);
		exports.LinkRenderLayer = r;
	  },
	  {
		"../Types": "4kff",
		"./BaseRenderLayer": "SM14",
		"./atlas/Types": "LQXW",
	  },
	],
	JM9Q: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = (function () {
		  function t(t, i) {
			(this._terminal = t),
			  (this._callback = i),
			  (this._animationFrame = null);
		  }
		  return (
			(t.prototype.dispose = function () {
			  this._animationFrame &&
				(window.cancelAnimationFrame(this._animationFrame),
				(this._animationFrame = null));
			}),
			(t.prototype.refresh = function (t, i) {
			  var n = this;
			  (t = null != t ? t : 0),
				(i = null != i ? i : this._terminal.rows - 1);
			  var r = void 0 !== this._rowStart && null !== this._rowStart,
				a = void 0 !== this._rowEnd && null !== this._rowEnd;
			  (this._rowStart = r ? Math.min(this._rowStart, t) : t),
				(this._rowEnd = a ? Math.max(this._rowEnd, i) : i),
				this._animationFrame ||
				  (this._animationFrame = window.requestAnimationFrame(
					function () {
					  return n._innerRefresh();
					},
				  ));
			}),
			(t.prototype._innerRefresh = function () {
			  (this._rowStart = Math.max(this._rowStart, 0)),
				(this._rowEnd = Math.min(
				  this._rowEnd,
				  this._terminal.rows - 1,
				)),
				this._callback(this._rowStart, this._rowEnd),
				(this._rowStart = null),
				(this._rowEnd = null),
				(this._animationFrame = null);
			}),
			t
		  );
		})();
		exports.RenderDebouncer = t;
	  },
	  {},
	],
	"9pHa": [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, i) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(e, i);
			};
			return function (e, i) {
			  function r() {
				this.constructor = e;
			  }
			  t(e, i),
				(e.prototype =
				  null === i
					? Object.create(i)
					: ((r.prototype = i.prototype), new r()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("../common/Lifecycle"),
		  i = (function (e) {
			function i() {
			  return (null !== e && e.apply(this, arguments)) || this;
			}
			return (
			  t(i, e),
			  (i.prototype.setListener = function (t) {
				var e = this;
				this._listener && this.clearListener(),
				  (this._listener = t),
				  (this._outerListener = function () {
					e._listener(
					  window.devicePixelRatio,
					  e._currentDevicePixelRatio,
					),
					  e._updateDpr();
				  }),
				  this._updateDpr();
			  }),
			  (i.prototype.dispose = function () {
				e.prototype.dispose.call(this), this.clearListener();
			  }),
			  (i.prototype._updateDpr = function () {
				this._resolutionMediaMatchList &&
				  this._resolutionMediaMatchList.removeListener(
					this._outerListener,
				  ),
				  (this._currentDevicePixelRatio = window.devicePixelRatio),
				  (this._resolutionMediaMatchList = window.matchMedia(
					"screen and (resolution: " +
					  window.devicePixelRatio +
					  "dppx)",
				  )),
				  this._resolutionMediaMatchList.addListener(
					this._outerListener,
				  );
			  }),
			  (i.prototype.clearListener = function () {
				this._listener &&
				  (this._resolutionMediaMatchList.removeListener(
					this._outerListener,
				  ),
				  (this._listener = null),
				  (this._outerListener = null));
			  }),
			  i
			);
		  })(e.Disposable);
		exports.ScreenDprMonitor = i;
	  },
	  { "../common/Lifecycle": "VtE8" },
	],
	"+hXO": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var r = require("../Buffer"),
		  e = (function () {
			function e(r) {
			  (this._terminal = r),
				(this._characterJoiners = []),
				(this._nextCharacterJoinerId = 0);
			}
			return (
			  (e.prototype.registerCharacterJoiner = function (r) {
				var e = { id: this._nextCharacterJoinerId++, handler: r };
				return this._characterJoiners.push(e), e.id;
			  }),
			  (e.prototype.deregisterCharacterJoiner = function (r) {
				for (var e = 0; e < this._characterJoiners.length; e++)
				  if (this._characterJoiners[e].id === r)
					return this._characterJoiners.splice(e, 1), !0;
				return !1;
			  }),
			  (e.prototype.getJoinedCharacters = function (e) {
				if (0 === this._characterJoiners.length) return [];
				var t = this._terminal.buffer.lines.get(e);
				if (0 === t.length) return [];
				for (
				  var i = [],
					n = this._terminal.buffer.translateBufferLineToString(
					  e,
					  !0,
					),
					a = 0,
					s = 0,
					h = 0,
					o = t.get(0)[r.CHAR_DATA_ATTR_INDEX] >> 9,
					_ = 0;
				  _ < this._terminal.cols;
				  _++
				) {
				  var c = t.get(_),
					f = c[r.CHAR_DATA_CHAR_INDEX],
					l = c[r.CHAR_DATA_WIDTH_INDEX],
					g = c[r.CHAR_DATA_ATTR_INDEX] >> 9;
				  if (0 !== l) {
					if (g !== o) {
					  if (_ - a > 1)
						for (
						  var u = this._getJoinedRanges(n, h, s, t, a), A = 0;
						  A < u.length;
						  A++
						)
						  i.push(u[A]);
					  (a = _), (h = s), (o = g);
					}
					s += f.length;
				  }
				}
				if (this._terminal.cols - a > 1)
				  for (
					u = this._getJoinedRanges(n, h, s, t, a), A = 0;
					A < u.length;
					A++
				  )
					i.push(u[A]);
				return i;
			  }),
			  (e.prototype._getJoinedRanges = function (r, t, i, n, a) {
				for (
				  var s = r.substring(t, i),
					h = this._characterJoiners[0].handler(s),
					o = 1;
				  o < this._characterJoiners.length;
				  o++
				)
				  for (
					var _ = this._characterJoiners[o].handler(s), c = 0;
					c < _.length;
					c++
				  )
					e._mergeRanges(h, _[c]);
				return this._stringRangesToCellRanges(h, n, a), h;
			  }),
			  (e.prototype._stringRangesToCellRanges = function (e, t, i) {
				var n = 0,
				  a = !1,
				  s = 0,
				  h = e[n];
				if (h) {
				  for (var o = i; o < this._terminal.cols; o++) {
					var _ = t.get(o),
					  c = _[r.CHAR_DATA_WIDTH_INDEX],
					  f = _[r.CHAR_DATA_CHAR_INDEX].length;
					if (0 !== c) {
					  if (
						(!a && h[0] <= s && ((h[0] = o), (a = !0)), h[1] <= s)
					  ) {
						if (((h[1] = o), !(h = e[++n]))) break;
						h[0] <= s ? ((h[0] = o), (a = !0)) : (a = !1);
					  }
					  s += f;
					}
				  }
				  h && (h[1] = this._terminal.cols);
				}
			  }),
			  (e._mergeRanges = function (r, e) {
				for (var t = !1, i = 0; i < r.length; i++) {
				  var n = r[i];
				  if (t) {
					if (e[1] <= n[0]) return (r[i - 1][1] = e[1]), r;
					if (e[1] <= n[1])
					  return (
						(r[i - 1][1] = Math.max(e[1], n[1])),
						r.splice(i, 1),
						(t = !1),
						r
					  );
					r.splice(i, 1), i--;
				  } else {
					if (e[1] <= n[0]) return r.splice(i, 0, e), r;
					if (e[1] <= n[1]) return (n[0] = Math.min(e[0], n[0])), r;
					e[0] < n[1] && ((n[0] = Math.min(e[0], n[0])), (t = !0));
				  }
				}
				return t ? (r[r.length - 1][1] = e[1]) : r.push(e), r;
			  }),
			  e
			);
		  })();
		exports.CharacterJoinerRegistry = e;
	  },
	  { "../Buffer": "nJkY" },
	],
	gvu2: [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__extends) ||
		  (function () {
			var e = function (i, n) {
			  return (e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (e, i) {
					e.__proto__ = i;
				  }) ||
				function (e, i) {
				  for (var n in i) i.hasOwnProperty(n) && (e[n] = i[n]);
				})(i, n);
			};
			return function (i, n) {
			  function t() {
				this.constructor = i;
			  }
			  e(i, n),
				(i.prototype =
				  null === n
					? Object.create(n)
					: ((t.prototype = n.prototype), new t()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var i = require("./TextRenderLayer"),
		  n = require("./SelectionRenderLayer"),
		  t = require("./CursorRenderLayer"),
		  r = require("./ColorManager"),
		  s = require("./LinkRenderLayer"),
		  o = require("../common/EventEmitter"),
		  a = require("../ui/RenderDebouncer"),
		  h = require("../ui/ScreenDprMonitor"),
		  l = require("../renderer/CharacterJoinerRegistry"),
		  c = (function (o) {
			function c(e, c) {
			  var d = o.call(this) || this;
			  (d._terminal = e), (d._isPaused = !1), (d._needsFullRefresh = !1);
			  var u = d._terminal.options.allowTransparency;
			  if (
				((d.colorManager = new r.ColorManager(document, u)),
				(d._characterJoinerRegistry = new l.CharacterJoinerRegistry(e)),
				c && d.colorManager.setTheme(c),
				(d._renderLayers = [
				  new i.TextRenderLayer(
					d._terminal.screenElement,
					0,
					d.colorManager.colors,
					d._characterJoinerRegistry,
					u,
				  ),
				  new n.SelectionRenderLayer(
					d._terminal.screenElement,
					1,
					d.colorManager.colors,
				  ),
				  new s.LinkRenderLayer(
					d._terminal.screenElement,
					2,
					d.colorManager.colors,
					d._terminal,
				  ),
				  new t.CursorRenderLayer(
					d._terminal.screenElement,
					3,
					d.colorManager.colors,
				  ),
				]),
				(d.dimensions = {
				  scaledCharWidth: null,
				  scaledCharHeight: null,
				  scaledCellWidth: null,
				  scaledCellHeight: null,
				  scaledCharLeft: null,
				  scaledCharTop: null,
				  scaledCanvasWidth: null,
				  scaledCanvasHeight: null,
				  canvasWidth: null,
				  canvasHeight: null,
				  actualCellWidth: null,
				  actualCellHeight: null,
				}),
				(d._devicePixelRatio = window.devicePixelRatio),
				d._updateDimensions(),
				d.onOptionsChanged(),
				(d._renderDebouncer = new a.RenderDebouncer(
				  d._terminal,
				  d._renderRows.bind(d),
				)),
				(d._screenDprMonitor = new h.ScreenDprMonitor()),
				d._screenDprMonitor.setListener(function () {
				  return d.onWindowResize(window.devicePixelRatio);
				}),
				d.register(d._screenDprMonitor),
				"IntersectionObserver" in window)
			  ) {
				var _ = new IntersectionObserver(
				  function (e) {
					return d.onIntersectionChange(e[0]);
				  },
				  { threshold: 0 },
				);
				_.observe(d._terminal.element),
				  d.register({
					dispose: function () {
					  return _.disconnect();
					},
				  });
			  }
			  return d;
			}
			return (
			  e(c, o),
			  (c.prototype.dispose = function () {
				o.prototype.dispose.call(this),
				  this._renderLayers.forEach(function (e) {
					return e.dispose();
				  });
			  }),
			  (c.prototype.onIntersectionChange = function (e) {
				(this._isPaused = 0 === e.intersectionRatio),
				  !this._isPaused &&
					this._needsFullRefresh &&
					this._terminal.refresh(0, this._terminal.rows - 1);
			  }),
			  (c.prototype.onWindowResize = function (e) {
				this._devicePixelRatio !== e &&
				  ((this._devicePixelRatio = e),
				  this.onResize(this._terminal.cols, this._terminal.rows));
			  }),
			  (c.prototype.setTheme = function (e) {
				var i = this;
				return (
				  this.colorManager.setTheme(e),
				  this._renderLayers.forEach(function (e) {
					e.onThemeChanged(i._terminal, i.colorManager.colors),
					  e.reset(i._terminal);
				  }),
				  this._isPaused
					? (this._needsFullRefresh = !0)
					: this._terminal.refresh(0, this._terminal.rows - 1),
				  this.colorManager.colors
				);
			  }),
			  (c.prototype.onResize = function (e, i) {
				var n = this;
				this._updateDimensions(),
				  this._renderLayers.forEach(function (e) {
					return e.resize(n._terminal, n.dimensions);
				  }),
				  this._isPaused
					? (this._needsFullRefresh = !0)
					: this._terminal.refresh(0, this._terminal.rows - 1),
				  (this._terminal.screenElement.style.width =
					this.dimensions.canvasWidth + "px"),
				  (this._terminal.screenElement.style.height =
					this.dimensions.canvasHeight + "px"),
				  this.emit("resize", {
					width: this.dimensions.canvasWidth,
					height: this.dimensions.canvasHeight,
				  });
			  }),
			  (c.prototype.onCharSizeChanged = function () {
				this.onResize(this._terminal.cols, this._terminal.rows);
			  }),
			  (c.prototype.onBlur = function () {
				var e = this;
				this._runOperation(function (i) {
				  return i.onBlur(e._terminal);
				});
			  }),
			  (c.prototype.onFocus = function () {
				var e = this;
				this._runOperation(function (i) {
				  return i.onFocus(e._terminal);
				});
			  }),
			  (c.prototype.onSelectionChanged = function (e, i, n) {
				var t = this;
				void 0 === n && (n = !1),
				  this._runOperation(function (r) {
					return r.onSelectionChanged(t._terminal, e, i, n);
				  });
			  }),
			  (c.prototype.onCursorMove = function () {
				var e = this;
				this._runOperation(function (i) {
				  return i.onCursorMove(e._terminal);
				});
			  }),
			  (c.prototype.onOptionsChanged = function () {
				var e = this;
				(this.colorManager.allowTransparency =
				  this._terminal.options.allowTransparency),
				  this._runOperation(function (i) {
					return i.onOptionsChanged(e._terminal);
				  });
			  }),
			  (c.prototype.clear = function () {
				var e = this;
				this._runOperation(function (i) {
				  return i.reset(e._terminal);
				});
			  }),
			  (c.prototype._runOperation = function (e) {
				this._isPaused
				  ? (this._needsFullRefresh = !0)
				  : this._renderLayers.forEach(function (i) {
					  return e(i);
					});
			  }),
			  (c.prototype.refreshRows = function (e, i) {
				this._isPaused
				  ? (this._needsFullRefresh = !0)
				  : this._renderDebouncer.refresh(e, i);
			  }),
			  (c.prototype._renderRows = function (e, i) {
				var n = this;
				this._renderLayers.forEach(function (t) {
				  return t.onGridChanged(n._terminal, e, i);
				}),
				  this._terminal.emit("refresh", { start: e, end: i });
			  }),
			  (c.prototype._updateDimensions = function () {
				this._terminal.charMeasure.width &&
				  this._terminal.charMeasure.height &&
				  ((this.dimensions.scaledCharWidth = Math.floor(
					this._terminal.charMeasure.width * window.devicePixelRatio,
				  )),
				  (this.dimensions.scaledCharHeight = Math.ceil(
					this._terminal.charMeasure.height * window.devicePixelRatio,
				  )),
				  (this.dimensions.scaledCellHeight = Math.floor(
					this.dimensions.scaledCharHeight *
					  this._terminal.options.lineHeight,
				  )),
				  (this.dimensions.scaledCharTop =
					1 === this._terminal.options.lineHeight
					  ? 0
					  : Math.round(
						  (this.dimensions.scaledCellHeight -
							this.dimensions.scaledCharHeight) /
							2,
						)),
				  (this.dimensions.scaledCellWidth =
					this.dimensions.scaledCharWidth +
					Math.round(this._terminal.options.letterSpacing)),
				  (this.dimensions.scaledCharLeft = Math.floor(
					this._terminal.options.letterSpacing / 2,
				  )),
				  (this.dimensions.scaledCanvasHeight =
					this._terminal.rows * this.dimensions.scaledCellHeight),
				  (this.dimensions.scaledCanvasWidth =
					this._terminal.cols * this.dimensions.scaledCellWidth),
				  (this.dimensions.canvasHeight = Math.round(
					this.dimensions.scaledCanvasHeight /
					  window.devicePixelRatio,
				  )),
				  (this.dimensions.canvasWidth = Math.round(
					this.dimensions.scaledCanvasWidth / window.devicePixelRatio,
				  )),
				  (this.dimensions.actualCellHeight =
					this.dimensions.canvasHeight / this._terminal.rows),
				  (this.dimensions.actualCellWidth =
					this.dimensions.canvasWidth / this._terminal.cols));
			  }),
			  (c.prototype.registerCharacterJoiner = function (e) {
				return this._characterJoinerRegistry.registerCharacterJoiner(e);
			  }),
			  (c.prototype.deregisterCharacterJoiner = function (e) {
				return this._characterJoinerRegistry.deregisterCharacterJoiner(
				  e,
				);
			  }),
			  c
			);
		  })(o.EventEmitter);
		exports.Renderer = c;
	  },
	  {
		"./TextRenderLayer": "TXoM",
		"./SelectionRenderLayer": "xczP",
		"./CursorRenderLayer": "W3ei",
		"./ColorManager": "9RWO",
		"./LinkRenderLayer": "PsFh",
		"../common/EventEmitter": "lW8c",
		"../ui/RenderDebouncer": "JM9Q",
		"../ui/ScreenDprMonitor": "9pHa",
		"../renderer/CharacterJoinerRegistry": "+hXO",
	  },
	],
	w6zZ: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, o) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
				})(e, o);
			};
			return function (e, o) {
			  function n() {
				this.constructor = e;
			  }
			  t(e, o),
				(e.prototype =
				  null === o
					? Object.create(o)
					: ((n.prototype = o.prototype), new n()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("../common/Lifecycle"),
		  o = require("./Lifecycle"),
		  n = 500,
		  i = (function (e) {
			function i(t) {
			  var n = e.call(this) || this;
			  return (
				(n._terminal = t),
				(n._zones = []),
				(n._areZonesActive = !1),
				(n._tooltipTimeout = null),
				(n._currentZone = null),
				(n._lastHoverCoords = [null, null]),
				n.register(
				  o.addDisposableDomListener(
					n._terminal.element,
					"mousedown",
					function (t) {
					  return n._onMouseDown(t);
					},
				  ),
				),
				(n._mouseMoveListener = function (t) {
				  return n._onMouseMove(t);
				}),
				(n._clickListener = function (t) {
				  return n._onClick(t);
				}),
				n
			  );
			}
			return (
			  t(i, e),
			  (i.prototype.dispose = function () {
				e.prototype.dispose.call(this), this._deactivate();
			  }),
			  (i.prototype.add = function (t) {
				this._zones.push(t),
				  1 === this._zones.length && this._activate();
			  }),
			  (i.prototype.clearAll = function (t, e) {
				if (0 !== this._zones.length) {
				  e || ((t = 0), (e = this._terminal.rows - 1));
				  for (var o = 0; o < this._zones.length; o++) {
					var n = this._zones[o];
					((n.y1 > t && n.y1 <= e + 1) ||
					  (n.y2 > t && n.y2 <= e + 1) ||
					  (n.y1 < t && n.y2 > e + 1)) &&
					  (this._currentZone &&
						this._currentZone === n &&
						(this._currentZone.leaveCallback(),
						(this._currentZone = null)),
					  this._zones.splice(o--, 1));
				  }
				  0 === this._zones.length && this._deactivate();
				}
			  }),
			  (i.prototype._activate = function () {
				this._areZonesActive ||
				  ((this._areZonesActive = !0),
				  this._terminal.element.addEventListener(
					"mousemove",
					this._mouseMoveListener,
				  ),
				  this._terminal.element.addEventListener(
					"click",
					this._clickListener,
				  ));
			  }),
			  (i.prototype._deactivate = function () {
				this._areZonesActive &&
				  ((this._areZonesActive = !1),
				  this._terminal.element.removeEventListener(
					"mousemove",
					this._mouseMoveListener,
				  ),
				  this._terminal.element.removeEventListener(
					"click",
					this._clickListener,
				  ));
			  }),
			  (i.prototype._onMouseMove = function (t) {
				(this._lastHoverCoords[0] === t.pageX &&
				  this._lastHoverCoords[1] === t.pageY) ||
				  (this._onHover(t),
				  (this._lastHoverCoords = [t.pageX, t.pageY]));
			  }),
			  (i.prototype._onHover = function (t) {
				var e = this,
				  o = this._findZoneEventAt(t);
				o !== this._currentZone &&
				  (this._currentZone &&
					(this._currentZone.leaveCallback(),
					(this._currentZone = null),
					this._tooltipTimeout && clearTimeout(this._tooltipTimeout)),
				  o &&
					((this._currentZone = o),
					o.hoverCallback && o.hoverCallback(t),
					(this._tooltipTimeout = setTimeout(function () {
					  return e._onTooltip(t);
					}, n))));
			  }),
			  (i.prototype._onTooltip = function (t) {
				this._tooltipTimeout = null;
				var e = this._findZoneEventAt(t);
				e && e.tooltipCallback && e.tooltipCallback(t);
			  }),
			  (i.prototype._onMouseDown = function (t) {
				if (this._areZonesActive) {
				  var e = this._findZoneEventAt(t);
				  e &&
					e.willLinkActivate(t) &&
					(t.preventDefault(), t.stopImmediatePropagation());
				}
			  }),
			  (i.prototype._onClick = function (t) {
				var e = this._findZoneEventAt(t);
				e &&
				  (e.clickCallback(t),
				  t.preventDefault(),
				  t.stopImmediatePropagation());
			  }),
			  (i.prototype._findZoneEventAt = function (t) {
				var e = this._terminal.mouseHelper.getCoords(
				  t,
				  this._terminal.screenElement,
				  this._terminal.charMeasure,
				  this._terminal.options.lineHeight,
				  this._terminal.cols,
				  this._terminal.rows,
				);
				if (!e) return null;
				for (
				  var o = e[0], n = e[1], i = 0;
				  i < this._zones.length;
				  i++
				) {
				  var r = this._zones[i];
				  if (r.y1 === r.y2) {
					if (n === r.y1 && o >= r.x1 && o < r.x2) return r;
				  } else if (
					(n === r.y1 && o >= r.x1) ||
					(n === r.y2 && o < r.x2) ||
					(n > r.y1 && n < r.y2)
				  )
					return r;
				}
				return null;
			  }),
			  i
			);
		  })(e.Disposable);
		exports.MouseZoneManager = i;
		var r = (function () {
		  return function (t, e, o, n, i, r, s, l, a) {
			(this.x1 = t),
			  (this.y1 = e),
			  (this.x2 = o),
			  (this.y2 = n),
			  (this.clickCallback = i),
			  (this.hoverCallback = r),
			  (this.tooltipCallback = s),
			  (this.leaveCallback = l),
			  (this.willLinkActivate = a);
		  };
		})();
		exports.MouseZone = r;
	  },
	  { "../common/Lifecycle": "VtE8", "./Lifecycle": "0SNy" },
	],
	ijp2: [
	  function (require, module, exports) {
		"use strict";
		var t =
		  (this && this.__extends) ||
		  (function () {
			var t = function (e, i) {
			  return (t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (t, e) {
					t.__proto__ = e;
				  }) ||
				function (t, e) {
				  for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(e, i);
			};
			return function (e, i) {
			  function r() {
				this.constructor = e;
			  }
			  t(e, i),
				(e.prototype =
				  null === i
					? Object.create(i)
					: ((r.prototype = i.prototype), new r()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./Types"),
		  i = require("./ui/MouseZoneManager"),
		  r = require("./common/EventEmitter"),
		  n = require("./Buffer"),
		  o = require("./CharWidth"),
		  a = (function (r) {
			function a(t) {
			  var e = r.call(this) || this;
			  return (
				(e._terminal = t),
				(e._linkMatchers = []),
				(e._nextLinkMatcherId = 0),
				(e._rowsToLinkify = { start: null, end: null }),
				e
			  );
			}
			return (
			  t(a, r),
			  (a.prototype.attachToDom = function (t) {
				this._mouseZoneManager = t;
			  }),
			  (a.prototype.linkifyRows = function (t, e) {
				var i = this;
				this._mouseZoneManager &&
				  (null === this._rowsToLinkify.start
					? ((this._rowsToLinkify.start = t),
					  (this._rowsToLinkify.end = e))
					: ((this._rowsToLinkify.start = Math.min(
						this._rowsToLinkify.start,
						t,
					  )),
					  (this._rowsToLinkify.end = Math.max(
						this._rowsToLinkify.end,
						e,
					  ))),
				  this._mouseZoneManager.clearAll(t, e),
				  this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId),
				  (this._rowsTimeoutId = setTimeout(function () {
					return i._linkifyRows();
				  }, a.TIME_BEFORE_LINKIFY)));
			  }),
			  (a.prototype._linkifyRows = function () {
				this._rowsTimeoutId = null;
				var t = this._terminal.buffer,
				  e = t.ydisp + this._rowsToLinkify.start;
				if (!(e >= t.lines.length)) {
				  for (
					var i =
						t.ydisp +
						Math.min(this._rowsToLinkify.end, this._terminal.rows) +
						1,
					  r = Math.ceil(
						a.OVERSCAN_CHAR_LIMIT / this._terminal.cols,
					  ),
					  n = this._terminal.buffer.iterator(!1, e, i, r, r);
					n.hasNext();

				  )
					for (
					  var o = n.next(), s = 0;
					  s < this._linkMatchers.length;
					  s++
					)
					  this._doLinkifyRow(
						o.range.first,
						o.content,
						this._linkMatchers[s],
					  );
				  (this._rowsToLinkify.start = null),
					(this._rowsToLinkify.end = null);
				}
			  }),
			  (a.prototype.registerLinkMatcher = function (t, e, i) {
				if ((void 0 === i && (i = {}), !e))
				  throw new Error("handler must be defined");
				var r = {
				  id: this._nextLinkMatcherId++,
				  regex: t,
				  handler: e,
				  matchIndex: i.matchIndex,
				  validationCallback: i.validationCallback,
				  hoverTooltipCallback: i.tooltipCallback,
				  hoverLeaveCallback: i.leaveCallback,
				  willLinkActivate: i.willLinkActivate,
				  priority: i.priority || 0,
				};
				return this._addLinkMatcherToList(r), r.id;
			  }),
			  (a.prototype._addLinkMatcherToList = function (t) {
				if (0 !== this._linkMatchers.length) {
				  for (var e = this._linkMatchers.length - 1; e >= 0; e--)
					if (t.priority <= this._linkMatchers[e].priority)
					  return void this._linkMatchers.splice(e + 1, 0, t);
				  this._linkMatchers.splice(0, 0, t);
				} else this._linkMatchers.push(t);
			  }),
			  (a.prototype.deregisterLinkMatcher = function (t) {
				for (var e = 0; e < this._linkMatchers.length; e++)
				  if (this._linkMatchers[e].id === t)
					return this._linkMatchers.splice(e, 1), !0;
				return !1;
			  }),
			  (a.prototype._doLinkifyRow = function (t, e, i) {
				for (
				  var r,
					o = this,
					a = new RegExp(i.regex.source, i.regex.flags + "g"),
					s = -1,
					l = function () {
					  var l =
						r["number" != typeof i.matchIndex ? 0 : i.matchIndex];
					  if (!l) {
						if (h._terminal.debug)
						  throw (
							(console.log({ match: r, matcher: i }),
							new Error(
							  "match found without corresponding matchIndex",
							))
						  );
						return "break";
					  }
					  (s = e.indexOf(l, s + 1)), (a.lastIndex = s + l.length);
					  var c,
						_ = h._terminal.buffer.stringIndexToBufferIndex(t, s),
						f = h._terminal.buffer.lines.get(_[0]).get(_[1]);
					  if (f) {
						var u = f[n.CHAR_DATA_ATTR_INDEX];
						c = (u >> 9) & 511;
					  }
					  i.validationCallback
						? i.validationCallback(l, function (t) {
							o._rowsTimeoutId ||
							  (t &&
								o._addLink(
								  _[1],
								  _[0] - o._terminal.buffer.ydisp,
								  l,
								  i,
								  c,
								));
						  })
						: h._addLink(
							_[1],
							_[0] - h._terminal.buffer.ydisp,
							l,
							i,
							c,
						  );
					},
					h = this;
				  null !== (r = a.exec(e));

				) {
				  if ("break" === l()) break;
				}
			  }),
			  (a.prototype._addLink = function (t, r, n, a, s) {
				var l = this,
				  h = o.getStringCellWidth(n),
				  c = t % this._terminal.cols,
				  _ = r + Math.floor(t / this._terminal.cols),
				  f = (c + h) % this._terminal.cols,
				  u = _ + Math.floor((c + h) / this._terminal.cols);
				0 === f && ((f = this._terminal.cols), u--),
				  this._mouseZoneManager.add(
					new i.MouseZone(
					  c + 1,
					  _ + 1,
					  f + 1,
					  u + 1,
					  function (t) {
						if (a.handler) return a.handler(t, n);
						window.open(n, "_blank");
					  },
					  function (t) {
						l.emit(
						  e.LinkHoverEventTypes.HOVER,
						  l._createLinkHoverEvent(c, _, f, u, s),
						),
						  l._terminal.element.classList.add(
							"xterm-cursor-pointer",
						  );
					  },
					  function (t) {
						l.emit(
						  e.LinkHoverEventTypes.TOOLTIP,
						  l._createLinkHoverEvent(c, _, f, u, s),
						),
						  a.hoverTooltipCallback &&
							a.hoverTooltipCallback(t, n);
					  },
					  function () {
						l.emit(
						  e.LinkHoverEventTypes.LEAVE,
						  l._createLinkHoverEvent(c, _, f, u, s),
						),
						  l._terminal.element.classList.remove(
							"xterm-cursor-pointer",
						  ),
						  a.hoverLeaveCallback && a.hoverLeaveCallback();
					  },
					  function (t) {
						return !a.willLinkActivate || a.willLinkActivate(t, n);
					  },
					),
				  );
			  }),
			  (a.prototype._createLinkHoverEvent = function (t, e, i, r, n) {
				return {
				  x1: t,
				  y1: e,
				  x2: i,
				  y2: r,
				  cols: this._terminal.cols,
				  fg: n,
				};
			  }),
			  (a.TIME_BEFORE_LINKIFY = 200),
			  (a.OVERSCAN_CHAR_LIMIT = 2e3),
			  a
			);
		  })(r.EventEmitter);
		exports.Linkifier = a;
	  },
	  {
		"./Types": "4kff",
		"./ui/MouseZoneManager": "w6zZ",
		"./common/EventEmitter": "lW8c",
		"./Buffer": "nJkY",
		"./CharWidth": "6Lzu",
	  },
	],
	ueEb: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = (function () {
		  function e(e) {
			this._renderer = e;
		  }
		  return (
			(e.getCoordsRelativeToElement = function (e, t) {
			  if (null === e.pageX || void 0 === e.pageX) return null;
			  for (var r = t, o = e.pageX, n = e.pageY; t; )
				(o -= t.offsetLeft), (n -= t.offsetTop), (t = t.offsetParent);
			  for (t = r; t && t !== t.ownerDocument.body; )
				(o += t.scrollLeft), (n += t.scrollTop), (t = t.parentElement);
			  return [o, n];
			}),
			(e.prototype.getCoords = function (t, r, o, n, i, l, a) {
			  if (!o.width || !o.height) return null;
			  var s = e.getCoordsRelativeToElement(t, r);
			  return s
				? ((s[0] = Math.ceil(
					(s[0] +
					  (a ? this._renderer.dimensions.actualCellWidth / 2 : 0)) /
					  this._renderer.dimensions.actualCellWidth,
				  )),
				  (s[1] = Math.ceil(
					s[1] / this._renderer.dimensions.actualCellHeight,
				  )),
				  (s[0] = Math.min(Math.max(s[0], 1), i + (a ? 1 : 0))),
				  (s[1] = Math.min(Math.max(s[1], 1), l)),
				  s)
				: null;
			}),
			(e.prototype.getRawByteCoords = function (e, t, r, o, n, i) {
			  var l = this.getCoords(e, t, r, o, n, i),
				a = l[0],
				s = l[1];
			  return { x: (a += 32), y: (s += 32) };
			}),
			e
		  );
		})();
		exports.MouseHelper = e;
	  },
	  {},
	],
	GmvH: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = (function () {
		  function t(t) {
			(this._terminal = t), this.clearSelection();
		  }
		  return (
			(t.prototype.clearSelection = function () {
			  (this.selectionStart = null),
				(this.selectionEnd = null),
				(this.isSelectAllActive = !1),
				(this.selectionStartLength = 0);
			}),
			Object.defineProperty(t.prototype, "finalSelectionStart", {
			  get: function () {
				return this.isSelectAllActive
				  ? [0, 0]
				  : this.selectionEnd &&
					  this.selectionStart &&
					  this.areSelectionValuesReversed()
					? this.selectionEnd
					: this.selectionStart;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			Object.defineProperty(t.prototype, "finalSelectionEnd", {
			  get: function () {
				if (this.isSelectAllActive)
				  return [
					this._terminal.cols,
					this._terminal.buffer.ybase + this._terminal.rows - 1,
				  ];
				if (!this.selectionStart) return null;
				if (!this.selectionEnd || this.areSelectionValuesReversed()) {
				  var t = this.selectionStart[0] + this.selectionStartLength;
				  return t > this._terminal.cols
					? [
						t % this._terminal.cols,
						this.selectionStart[1] +
						  Math.floor(t / this._terminal.cols),
					  ]
					: [t, this.selectionStart[1]];
				}
				return this.selectionStartLength &&
				  this.selectionEnd[1] === this.selectionStart[1]
				  ? [
					  Math.max(
						this.selectionStart[0] + this.selectionStartLength,
						this.selectionEnd[0],
					  ),
					  this.selectionEnd[1],
					]
				  : this.selectionEnd;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			(t.prototype.areSelectionValuesReversed = function () {
			  var t = this.selectionStart,
				e = this.selectionEnd;
			  return (
				!(!t || !e) && (t[1] > e[1] || (t[1] === e[1] && t[0] > e[0]))
			  );
			}),
			(t.prototype.onTrim = function (t) {
			  return (
				this.selectionStart && (this.selectionStart[1] -= t),
				this.selectionEnd && (this.selectionEnd[1] -= t),
				this.selectionEnd && this.selectionEnd[1] < 0
				  ? (this.clearSelection(), !0)
				  : (this.selectionStart &&
					  this.selectionStart[1] < 0 &&
					  (this.selectionStart[1] = 0),
					!1)
			  );
			}),
			t
		  );
		})();
		exports.SelectionModel = t;
	  },
	  {},
	],
	uYIN: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t,
		  e = require("../common/data/EscapeSequences");
		!(function (t) {
		  (t.UP = "A"), (t.DOWN = "B"), (t.RIGHT = "C"), (t.LEFT = "D");
		})(t || (t = {}));
		var o = (function () {
		  function o(t, e) {
			var o;
			(this._mouseEvent = t),
			  (this._terminal = e),
			  (this._lines = this._terminal.buffer.lines),
			  (this._startCol = this._terminal.buffer.x),
			  (this._startRow = this._terminal.buffer.y);
			var r = this._terminal.mouseHelper.getCoords(
			  this._mouseEvent,
			  this._terminal.element,
			  this._terminal.charMeasure,
			  this._terminal.options.lineHeight,
			  this._terminal.cols,
			  this._terminal.rows,
			  !1,
			);
			r &&
			  ((o = r.map(function (t) {
				return t - 1;
			  })),
			  (this._endCol = o[0]),
			  (this._endRow = o[1]));
		  }
		  return (
			(o.prototype.move = function () {
			  this._mouseEvent.altKey &&
				void 0 !== this._endCol &&
				void 0 !== this._endRow &&
				this._terminal.handler(this._arrowSequences());
			}),
			(o.prototype._arrowSequences = function () {
			  return this._terminal.buffer.hasScrollback
				? this._moveHorizontallyOnly()
				: this._resetStartingRow() +
					this._moveToRequestedRow() +
					this._moveToRequestedCol();
			}),
			(o.prototype._resetStartingRow = function () {
			  return 0 === this._moveToRequestedRow().length
				? ""
				: r(
					this._bufferLine(
					  this._startCol,
					  this._startRow,
					  this._startCol,
					  this._startRow - this._wrappedRowsForRow(this._startRow),
					  !1,
					).length,
					this._sequence(t.LEFT),
				  );
			}),
			(o.prototype._moveToRequestedRow = function () {
			  var t = this._startRow - this._wrappedRowsForRow(this._startRow),
				e = this._endRow - this._wrappedRowsForRow(this._endRow);
			  return r(
				Math.abs(t - e) - this._wrappedRowsCount(),
				this._sequence(this._verticalDirection()),
			  );
			}),
			(o.prototype._moveToRequestedCol = function () {
			  var e;
			  e =
				this._moveToRequestedRow().length > 0
				  ? this._endRow - this._wrappedRowsForRow(this._endRow)
				  : this._startRow;
			  var o = this._endRow,
				i = this._horizontalDirection();
			  return r(
				this._bufferLine(
				  this._startCol,
				  e,
				  this._endCol,
				  o,
				  i === t.RIGHT,
				).length,
				this._sequence(i),
			  );
			}),
			(o.prototype._moveHorizontallyOnly = function () {
			  var t = this._horizontalDirection();
			  return r(
				Math.abs(this._startCol - this._endCol),
				this._sequence(t),
			  );
			}),
			(o.prototype._wrappedRowsCount = function () {
			  for (
				var e = 0,
				  o = this._startRow - this._wrappedRowsForRow(this._startRow),
				  r = this._endRow - this._wrappedRowsForRow(this._endRow),
				  i = 0;
				i < Math.abs(o - r);
				i++
			  ) {
				var s = this._verticalDirection() === t.UP ? -1 : 1;
				this._lines.get(o + s * i).isWrapped && e++;
			  }
			  return e;
			}),
			(o.prototype._wrappedRowsForRow = function (t) {
			  for (
				var e = 0, o = this._lines.get(t).isWrapped;
				o && t >= 0 && t < this._terminal.rows;

			  )
				e++, t--, (o = this._lines.get(t).isWrapped);
			  return e;
			}),
			(o.prototype._horizontalDirection = function () {
			  var e;
			  return (
				(e =
				  this._moveToRequestedRow().length > 0
					? this._endRow - this._wrappedRowsForRow(this._endRow)
					: this._startRow),
				(this._startCol < this._endCol && e <= this._endRow) ||
				(this._startCol >= this._endCol && e < this._endRow)
				  ? t.RIGHT
				  : t.LEFT
			  );
			}),
			(o.prototype._verticalDirection = function () {
			  return this._startRow > this._endRow ? t.UP : t.DOWN;
			}),
			(o.prototype._bufferLine = function (t, e, o, r, i) {
			  for (var s = t, n = e, h = ""; s !== o || n !== r; )
				(s += i ? 1 : -1),
				  i && s > this._terminal.cols - 1
					? ((h += this._terminal.buffer.translateBufferLineToString(
						n,
						!1,
						t,
						s,
					  )),
					  (s = 0),
					  (t = 0),
					  n++)
					: !i &&
					  s < 0 &&
					  ((h += this._terminal.buffer.translateBufferLineToString(
						n,
						!1,
						0,
						t + 1,
					  )),
					  (t = s = this._terminal.cols - 1),
					  n--);
			  return (
				h +
				this._terminal.buffer.translateBufferLineToString(n, !1, t, s)
			  );
			}),
			(o.prototype._sequence = function (t) {
			  var o = this._terminal.applicationCursor ? "O" : "[";
			  return e.C0.ESC + o + t;
			}),
			o
		  );
		})();
		function r(t, e) {
		  t = Math.floor(t);
		  for (var o = "", r = 0; r < t; r++) o += e;
		  return o;
		}
		exports.AltClickHandler = o;
	  },
	  { "../common/data/EscapeSequences": "xnQp" },
	],
	"TOt/": [
	  function (require, module, exports) {
		"use strict";
		var e =
			(this && this.__extends) ||
			(function () {
			  var e = function (t, i) {
				return (e =
				  Object.setPrototypeOf ||
				  ({ __proto__: [] } instanceof Array &&
					function (e, t) {
					  e.__proto__ = t;
					}) ||
				  function (e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				  })(t, i);
			  };
			  return function (t, i) {
				function n() {
				  this.constructor = t;
				}
				e(t, i),
				  (t.prototype =
					null === i
					  ? Object.create(i)
					  : ((n.prototype = i.prototype), new n()));
			  };
			})(),
		  t =
			(this && this.__importStar) ||
			function (e) {
			  if (e && e.__esModule) return e;
			  var t = {};
			  if (null != e)
				for (var i in e)
				  Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			  return (t.default = e), t;
			};
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var i,
		  n = require("./utils/MouseHelper"),
		  o = t(require("./shared/utils/Browser")),
		  r = require("./common/EventEmitter"),
		  s = require("./SelectionModel"),
		  l = require("./Buffer"),
		  h = require("./handlers/AltClickHandler"),
		  _ = 50,
		  a = 15,
		  c = 50,
		  u = 500,
		  f = " ()[]{}'\"",
		  m = String.fromCharCode(160),
		  d = new RegExp(m, "g");
		!(function (e) {
		  (e[(e.NORMAL = 0)] = "NORMAL"),
			(e[(e.WORD = 1)] = "WORD"),
			(e[(e.LINE = 2)] = "LINE"),
			(e[(e.COLUMN = 3)] = "COLUMN");
		})((i = exports.SelectionMode || (exports.SelectionMode = {})));
		var p = (function (t) {
		  function r(e, n) {
			var o = t.call(this) || this;
			return (
			  (o._terminal = e),
			  (o._charMeasure = n),
			  (o._enabled = !0),
			  o._initListeners(),
			  o.enable(),
			  (o._model = new s.SelectionModel(e)),
			  (o._activeSelectionMode = i.NORMAL),
			  o
			);
		  }
		  return (
			e(r, t),
			(r.prototype.dispose = function () {
			  t.prototype.dispose.call(this), this._removeMouseDownListeners();
			}),
			Object.defineProperty(r.prototype, "_buffer", {
			  get: function () {
				return this._terminal.buffers.active;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			(r.prototype._initListeners = function () {
			  var e = this;
			  (this._mouseMoveListener = function (t) {
				return e._onMouseMove(t);
			  }),
				(this._mouseUpListener = function (t) {
				  return e._onMouseUp(t);
				}),
				(this._trimListener = function (t) {
				  return e._onTrim(t);
				}),
				this.initBuffersListeners();
			}),
			(r.prototype.initBuffersListeners = function () {
			  var e = this;
			  this._terminal.buffer.lines.on("trim", this._trimListener),
				this._terminal.buffers.on("activate", function (t) {
				  return e._onBufferActivate(t);
				});
			}),
			(r.prototype.disable = function () {
			  this.clearSelection(), (this._enabled = !1);
			}),
			(r.prototype.enable = function () {
			  this._enabled = !0;
			}),
			Object.defineProperty(r.prototype, "selectionStart", {
			  get: function () {
				return this._model.finalSelectionStart;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			Object.defineProperty(r.prototype, "selectionEnd", {
			  get: function () {
				return this._model.finalSelectionEnd;
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			Object.defineProperty(r.prototype, "hasSelection", {
			  get: function () {
				var e = this._model.finalSelectionStart,
				  t = this._model.finalSelectionEnd;
				return !(!e || !t) && (e[0] !== t[0] || e[1] !== t[1]);
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			Object.defineProperty(r.prototype, "selectionText", {
			  get: function () {
				var e = this._model.finalSelectionStart,
				  t = this._model.finalSelectionEnd;
				if (!e || !t) return "";
				var n = [];
				if (this._activeSelectionMode === i.COLUMN) {
				  if (e[0] === t[0]) return "";
				  for (var r = e[1]; r <= t[1]; r++) {
					var s = this._buffer.translateBufferLineToString(
					  r,
					  !0,
					  e[0],
					  t[0],
					);
					n.push(s);
				  }
				} else {
				  var l = e[1] === t[1] ? t[0] : null;
				  n.push(
					this._buffer.translateBufferLineToString(e[1], !0, e[0], l),
				  );
				  for (r = e[1] + 1; r <= t[1] - 1; r++) {
					var h = this._buffer.lines.get(r);
					s = this._buffer.translateBufferLineToString(r, !0);
					h.isWrapped ? (n[n.length - 1] += s) : n.push(s);
				  }
				  if (e[1] !== t[1]) {
					(h = this._buffer.lines.get(t[1])),
					  (s = this._buffer.translateBufferLineToString(
						t[1],
						!0,
						0,
						t[0],
					  ));
					h.isWrapped ? (n[n.length - 1] += s) : n.push(s);
				  }
				}
				return n
				  .map(function (e) {
					return e.replace(d, " ");
				  })
				  .join(o.isMSWindows ? "\r\n" : "\n");
			  },
			  enumerable: !0,
			  configurable: !0,
			}),
			(r.prototype.clearSelection = function () {
			  this._model.clearSelection(),
				this._removeMouseDownListeners(),
				this.refresh();
			}),
			(r.prototype.refresh = function (e) {
			  var t = this;
			  (this._refreshAnimationFrame ||
				(this._refreshAnimationFrame = window.requestAnimationFrame(
				  function () {
					return t._refresh();
				  },
				)),
			  o.isLinux && e) &&
				this.selectionText.length &&
				this.emit("newselection", this.selectionText);
			}),
			(r.prototype._refresh = function () {
			  (this._refreshAnimationFrame = null),
				this.emit("refresh", {
				  start: this._model.finalSelectionStart,
				  end: this._model.finalSelectionEnd,
				  columnSelectMode: this._activeSelectionMode === i.COLUMN,
				});
			}),
			(r.prototype.isClickInSelection = function (e) {
			  var t = this._getMouseBufferCoords(e),
				i = this._model.finalSelectionStart,
				n = this._model.finalSelectionEnd;
			  return (
				!(!i || !n) &&
				((t[1] > i[1] && t[1] < n[1]) ||
				  (i[1] === n[1] &&
					t[1] === i[1] &&
					t[0] > i[0] &&
					t[0] < n[0]) ||
				  (i[1] < n[1] && t[1] === n[1] && t[0] < n[0]))
			  );
			}),
			(r.prototype.selectWordAtCursor = function (e) {
			  var t = this._getMouseBufferCoords(e);
			  t &&
				(this._selectWordAt(t, !1),
				(this._model.selectionEnd = null),
				this.refresh(!0));
			}),
			(r.prototype.selectAll = function () {
			  (this._model.isSelectAllActive = !0),
				this.refresh(),
				this._terminal.emit("selection");
			}),
			(r.prototype.selectLines = function (e, t) {
			  this._model.clearSelection(),
				(e = Math.max(e, 0)),
				(t = Math.min(t, this._terminal.buffer.lines.length - 1)),
				(this._model.selectionStart = [0, e]),
				(this._model.selectionEnd = [this._terminal.cols, t]),
				this.refresh(),
				this._terminal.emit("selection");
			}),
			(r.prototype._onTrim = function (e) {
			  this._model.onTrim(e) && this.refresh();
			}),
			(r.prototype._getMouseBufferCoords = function (e) {
			  var t = this._terminal.mouseHelper.getCoords(
				e,
				this._terminal.screenElement,
				this._charMeasure,
				this._terminal.options.lineHeight,
				this._terminal.cols,
				this._terminal.rows,
				!0,
			  );
			  return t
				? (t[0]--, t[1]--, (t[1] += this._terminal.buffer.ydisp), t)
				: null;
			}),
			(r.prototype._getMouseEventScrollAmount = function (e) {
			  var t = n.MouseHelper.getCoordsRelativeToElement(
				  e,
				  this._terminal.screenElement,
				)[1],
				i =
				  this._terminal.rows *
				  Math.ceil(
					this._charMeasure.height *
					  this._terminal.options.lineHeight,
				  );
			  return t >= 0 && t <= i
				? 0
				: (t > i && (t -= i),
				  (t = Math.min(Math.max(t, -_), _)),
				  (t /= _) / Math.abs(t) + Math.round(t * (a - 1)));
			}),
			(r.prototype.shouldForceSelection = function (e) {
			  return o.isMac
				? e.altKey &&
					this._terminal.options.macOptionClickForcesSelection
				: e.shiftKey;
			}),
			(r.prototype.onMouseDown = function (e) {
			  if (
				((this._mouseDownTimeStamp = e.timeStamp),
				(2 !== e.button || !this.hasSelection) && 0 === e.button)
			  ) {
				if (!this._enabled) {
				  if (!this.shouldForceSelection(e)) return;
				  e.stopPropagation();
				}
				e.preventDefault(),
				  (this._dragScrollAmount = 0),
				  this._enabled && e.shiftKey
					? this._onIncrementalClick(e)
					: 1 === e.detail
					  ? this._onSingleClick(e)
					  : 2 === e.detail
						? this._onDoubleClick(e)
						: 3 === e.detail && this._onTripleClick(e),
				  this._addMouseDownListeners(),
				  this.refresh(!0);
			  }
			}),
			(r.prototype._addMouseDownListeners = function () {
			  var e = this;
			  this._terminal.element.ownerDocument.addEventListener(
				"mousemove",
				this._mouseMoveListener,
			  ),
				this._terminal.element.ownerDocument.addEventListener(
				  "mouseup",
				  this._mouseUpListener,
				),
				(this._dragScrollIntervalTimer = setInterval(function () {
				  return e._dragScroll();
				}, c));
			}),
			(r.prototype._removeMouseDownListeners = function () {
			  this._terminal.element.ownerDocument &&
				(this._terminal.element.ownerDocument.removeEventListener(
				  "mousemove",
				  this._mouseMoveListener,
				),
				this._terminal.element.ownerDocument.removeEventListener(
				  "mouseup",
				  this._mouseUpListener,
				)),
				clearInterval(this._dragScrollIntervalTimer),
				(this._dragScrollIntervalTimer = null);
			}),
			(r.prototype._onIncrementalClick = function (e) {
			  this._model.selectionStart &&
				(this._model.selectionEnd = this._getMouseBufferCoords(e));
			}),
			(r.prototype._onSingleClick = function (e) {
			  if (
				((this._model.selectionStartLength = 0),
				(this._model.isSelectAllActive = !1),
				(this._activeSelectionMode = this.shouldColumnSelect(e)
				  ? i.COLUMN
				  : i.NORMAL),
				(this._model.selectionStart = this._getMouseBufferCoords(e)),
				this._model.selectionStart)
			  ) {
				this._model.selectionEnd = null;
				var t = this._buffer.lines.get(this._model.selectionStart[1]);
				if (t)
				  if (!(t.length >= this._model.selectionStart[0]))
					0 ===
					  t.get(this._model.selectionStart[0])[
						l.CHAR_DATA_WIDTH_INDEX
					  ] && this._model.selectionStart[0]++;
			  }
			}),
			(r.prototype._onDoubleClick = function (e) {
			  var t = this._getMouseBufferCoords(e);
			  t &&
				((this._activeSelectionMode = i.WORD),
				this._selectWordAt(t, !0));
			}),
			(r.prototype._onTripleClick = function (e) {
			  var t = this._getMouseBufferCoords(e);
			  t &&
				((this._activeSelectionMode = i.LINE),
				this._selectLineAt(t[1]));
			}),
			(r.prototype.shouldColumnSelect = function (e) {
			  return (
				e.altKey &&
				!(
				  o.isMac &&
				  this._terminal.options.macOptionClickForcesSelection
				)
			  );
			}),
			(r.prototype._onMouseMove = function (e) {
			  e.stopImmediatePropagation();
			  var t = this._model.selectionEnd
				? [this._model.selectionEnd[0], this._model.selectionEnd[1]]
				: null;
			  if (
				((this._model.selectionEnd = this._getMouseBufferCoords(e)),
				this._model.selectionEnd)
			  ) {
				if (
				  (this._activeSelectionMode === i.LINE
					? this._model.selectionEnd[1] <
					  this._model.selectionStart[1]
					  ? (this._model.selectionEnd[0] = 0)
					  : (this._model.selectionEnd[0] = this._terminal.cols)
					: this._activeSelectionMode === i.WORD &&
					  this._selectToWordAt(this._model.selectionEnd),
				  (this._dragScrollAmount = this._getMouseEventScrollAmount(e)),
				  this._activeSelectionMode !== i.COLUMN &&
					(this._dragScrollAmount > 0
					  ? (this._model.selectionEnd[0] = this._terminal.cols)
					  : this._dragScrollAmount < 0 &&
						(this._model.selectionEnd[0] = 0)),
				  this._model.selectionEnd[1] < this._buffer.lines.length)
				) {
				  var n = this._buffer.lines
					.get(this._model.selectionEnd[1])
					.get(this._model.selectionEnd[0]);
				  n &&
					0 === n[l.CHAR_DATA_WIDTH_INDEX] &&
					this._model.selectionEnd[0]++;
				}
				(t &&
				  t[0] === this._model.selectionEnd[0] &&
				  t[1] === this._model.selectionEnd[1]) ||
				  this.refresh(!0);
			  } else this.refresh(!0);
			}),
			(r.prototype._dragScroll = function () {
			  this._dragScrollAmount &&
				(this._terminal.scrollLines(this._dragScrollAmount, !1),
				this._dragScrollAmount > 0
				  ? (this._activeSelectionMode !== i.COLUMN &&
					  (this._model.selectionEnd[0] = this._terminal.cols),
					(this._model.selectionEnd[1] = Math.min(
					  this._terminal.buffer.ydisp + this._terminal.rows,
					  this._terminal.buffer.lines.length - 1,
					)))
				  : (this._activeSelectionMode !== i.COLUMN &&
					  (this._model.selectionEnd[0] = 0),
					(this._model.selectionEnd[1] =
					  this._terminal.buffer.ydisp)),
				this.refresh());
			}),
			(r.prototype._onMouseUp = function (e) {
			  var t = e.timeStamp - this._mouseDownTimeStamp;
			  this._removeMouseDownListeners(),
				this.selectionText.length <= 1 && t < u
				  ? new h.AltClickHandler(e, this._terminal).move()
				  : this.hasSelection && this._terminal.emit("selection");
			}),
			(r.prototype._onBufferActivate = function (e) {
			  this.clearSelection(),
				e.inactiveBuffer.lines.off("trim", this._trimListener),
				e.activeBuffer.lines.on("trim", this._trimListener);
			}),
			(r.prototype._convertViewportColToCharacterIndex = function (e, t) {
			  for (var i = t[0], n = 0; t[0] >= n; n++) {
				var o = e.get(n);
				0 === o[l.CHAR_DATA_WIDTH_INDEX]
				  ? i--
				  : o[l.CHAR_DATA_CHAR_INDEX].length > 1 &&
					t[0] !== n &&
					(i += o[l.CHAR_DATA_CHAR_INDEX].length - 1);
			  }
			  return i;
			}),
			(r.prototype.setSelection = function (e, t, i) {
			  this._model.clearSelection(),
				this._removeMouseDownListeners(),
				(this._model.selectionStart = [e, t]),
				(this._model.selectionStartLength = i),
				this.refresh();
			}),
			(r.prototype._getWordAt = function (e, t, i, n) {
			  if (
				(void 0 === i && (i = !0),
				void 0 === n && (n = !0),
				e[0] >= this._terminal.cols)
			  )
				return null;
			  var o = this._buffer.lines.get(e[1]);
			  if (!o) return null;
			  var r = this._buffer.translateBufferLineToString(e[1], !1),
				s = this._convertViewportColToCharacterIndex(o, e),
				h = s,
				_ = e[0] - s,
				a = 0,
				c = 0,
				u = 0,
				f = 0;
			  if (" " === r.charAt(s)) {
				for (; s > 0 && " " === r.charAt(s - 1); ) s--;
				for (; h < r.length && " " === r.charAt(h + 1); ) h++;
			  } else {
				var m = e[0],
				  d = e[0];
				for (
				  0 === o.get(m)[l.CHAR_DATA_WIDTH_INDEX] && (a++, m--),
					2 === o.get(d)[l.CHAR_DATA_WIDTH_INDEX] && (c++, d++),
					o.get(d)[l.CHAR_DATA_CHAR_INDEX].length > 1 &&
					  ((f += o.get(d)[l.CHAR_DATA_CHAR_INDEX].length - 1),
					  (h += o.get(d)[l.CHAR_DATA_CHAR_INDEX].length - 1));
				  m > 0 && s > 0 && !this._isCharWordSeparator(o.get(m - 1));

				) {
				  0 === (p = o.get(m - 1))[l.CHAR_DATA_WIDTH_INDEX]
					? (a++, m--)
					: p[l.CHAR_DATA_CHAR_INDEX].length > 1 &&
					  ((u += p[l.CHAR_DATA_CHAR_INDEX].length - 1),
					  (s -= p[l.CHAR_DATA_CHAR_INDEX].length - 1)),
					s--,
					m--;
				}
				for (
				  ;
				  d < o.length &&
				  h + 1 < r.length &&
				  !this._isCharWordSeparator(o.get(d + 1));

				) {
				  var p;
				  2 === (p = o.get(d + 1))[l.CHAR_DATA_WIDTH_INDEX]
					? (c++, d++)
					: p[l.CHAR_DATA_CHAR_INDEX].length > 1 &&
					  ((f += p[l.CHAR_DATA_CHAR_INDEX].length - 1),
					  (h += p[l.CHAR_DATA_CHAR_INDEX].length - 1)),
					h++,
					d++;
				}
			  }
			  h++;
			  var A = s + _ - a + u,
				g = Math.min(this._terminal.cols, h - s + a + c - u - f);
			  if (!t && "" === r.slice(s, h).trim()) return null;
			  if (i && 0 === A && 32 !== o.get(0)[l.CHAR_DATA_CODE_INDEX]) {
				var v = this._buffer.lines.get(e[1] - 1);
				if (
				  v &&
				  o.isWrapped &&
				  32 !== v.get(this._terminal.cols - 1)[l.CHAR_DATA_CODE_INDEX]
				) {
				  var S = this._getWordAt(
					[this._terminal.cols - 1, e[1] - 1],
					!1,
					!0,
					!1,
				  );
				  if (S) {
					var C = this._terminal.cols - S.start;
					(A -= C), (g += C);
				  }
				}
			  }
			  if (
				n &&
				A + g === this._terminal.cols &&
				32 !== o.get(this._terminal.cols - 1)[l.CHAR_DATA_CODE_INDEX]
			  ) {
				var D = this._buffer.lines.get(e[1] + 1);
				if (
				  D &&
				  D.isWrapped &&
				  32 !== D.get(0)[l.CHAR_DATA_CODE_INDEX]
				) {
				  var E = this._getWordAt([0, e[1] + 1], !1, !1, !0);
				  E && (g += E.length);
				}
			  }
			  return { start: A, length: g };
			}),
			(r.prototype._selectWordAt = function (e, t) {
			  var i = this._getWordAt(e, t);
			  if (i) {
				for (; i.start < 0; ) (i.start += this._terminal.cols), e[1]--;
				(this._model.selectionStart = [i.start, e[1]]),
				  (this._model.selectionStartLength = i.length);
			  }
			}),
			(r.prototype._selectToWordAt = function (e) {
			  var t = this._getWordAt(e, !0);
			  if (t) {
				for (var i = e[1]; t.start < 0; )
				  (t.start += this._terminal.cols), i--;
				if (!this._model.areSelectionValuesReversed())
				  for (; t.start + t.length > this._terminal.cols; )
					(t.length -= this._terminal.cols), i++;
				this._model.selectionEnd = [
				  this._model.areSelectionValuesReversed()
					? t.start
					: t.start + t.length,
				  i,
				];
			  }
			}),
			(r.prototype._isCharWordSeparator = function (e) {
			  return (
				0 !== e[l.CHAR_DATA_WIDTH_INDEX] &&
				f.indexOf(e[l.CHAR_DATA_CHAR_INDEX]) >= 0
			  );
			}),
			(r.prototype._selectLineAt = function (e) {
			  var t = this._buffer.getWrappedRangeForLine(e);
			  (this._model.selectionStart = [0, t.first]),
				(this._model.selectionEnd = [this._terminal.cols, t.last]),
				(this._model.selectionStartLength = 0);
			}),
			r
		  );
		})(r.EventEmitter);
		exports.SelectionManager = p;
	  },
	  {
		"./utils/MouseHelper": "ueEb",
		"./shared/utils/Browser": "/tmL",
		"./common/EventEmitter": "lW8c",
		"./SelectionModel": "GmvH",
		"./Buffer": "nJkY",
		"./handlers/AltClickHandler": "uYIN",
	  },
	],
	fEPo: [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__extends) ||
		  (function () {
			var e = function (t, n) {
			  return (e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (e, t) {
					e.__proto__ = t;
				  }) ||
				function (e, t) {
				  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
				})(t, n);
			};
			return function (t, n) {
			  function r() {
				this.constructor = t;
			  }
			  e(t, n),
				(t.prototype =
				  null === n
					? Object.create(n)
					: ((r.prototype = n.prototype), new r()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("../common/EventEmitter"),
		  n = (function (t) {
			function n(e, n) {
			  var r = t.call(this) || this;
			  return (
				(r._document = e),
				(r._parentElement = n),
				(r._measureElement = r._document.createElement("span")),
				r._measureElement.classList.add("xterm-char-measure-element"),
				(r._measureElement.textContent = "W"),
				r._measureElement.setAttribute("aria-hidden", "true"),
				r._parentElement.appendChild(r._measureElement),
				r
			  );
			}
			return (
			  e(n, t),
			  Object.defineProperty(n.prototype, "width", {
				get: function () {
				  return this._width;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(n.prototype, "height", {
				get: function () {
				  return this._height;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (n.prototype.measure = function (e) {
				(this._measureElement.style.fontFamily = e.fontFamily),
				  (this._measureElement.style.fontSize = e.fontSize + "px");
				var t = this._measureElement.getBoundingClientRect();
				0 !== t.width &&
				  0 !== t.height &&
				  ((this._width === t.width && this._height === t.height) ||
					((this._width = t.width),
					(this._height = Math.ceil(t.height)),
					this.emit("charsizechanged")));
			  }),
			  n
			);
		  })(t.EventEmitter);
		exports.CharMeasure = n;
	  },
	  { "../common/EventEmitter": "lW8c" },
	],
	LZis: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.blankLine = "Blank line"),
		  (exports.promptLabel = "Terminal input"),
		  (exports.tooMuchOutput =
			"Too much output to announce, navigate to rows manually to read");
	  },
	  {},
	],
	nSfh: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.clone = function (r, e) {
			if ((void 0 === e && (e = 5), "object" != typeof r)) return r;
			if (null === r) return null;
			var t = Array.isArray(r) ? [] : {};
			for (var o in r) t[o] = e <= 1 ? r[o] : exports.clone(r[o], e - 1);
			return t;
		  });
	  },
	  {},
	],
	OPxE: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.DEFAULT_BELL_SOUND =
			"data:audio/wav;base64,UklGRigBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQBAADpAFgCwAMlBZoG/wdmCcoKRAypDQ8PbRDBEQQTOxRtFYcWlBePGIUZXhoiG88bcBz7HHIdzh0WHlMeZx51HmkeUx4WHs8dah0AHXwc3hs9G4saxRnyGBIYGBcQFv8U4RPAEoYRQBACD70NWwwHC6gJOwjWBloF7gOBAhABkf8b/qv8R/ve+Xf4Ife79W/0JfPZ8Z/wde9N7ijtE+wU6xvqM+lb6H7nw+YX5mrlxuQz5Mzje+Ma49fioeKD4nXiYeJy4pHitOL04j/jn+MN5IPkFOWs5U3mDefM55/ogOl36m7rdOyE7abuyu8D8Unyj/Pg9D/2qfcb+Yn6/vuK/Qj/lAAlAg==");
		var e = (function () {
		  function e(e) {
			this._terminal = e;
		  }
		  return (
			(e.prototype.playBellSound = function () {
			  var e = window.AudioContext || window.webkitAudioContext;
			  if (
				(!this._audioContext && e && (this._audioContext = new e()),
				this._audioContext)
			  ) {
				var t = this._audioContext.createBufferSource(),
				  o = this._audioContext;
				this._audioContext.decodeAudioData(
				  this._base64ToArrayBuffer(
					this._removeMimeType(this._terminal.options.bellSound),
				  ),
				  function (e) {
					(t.buffer = e), t.connect(o.destination), t.start(0);
				  },
				);
			  } else
				console.warn(
				  "Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version",
				);
			}),
			(e.prototype._base64ToArrayBuffer = function (e) {
			  for (
				var t = window.atob(e),
				  o = t.length,
				  n = new Uint8Array(o),
				  i = 0;
				i < o;
				i++
			  )
				n[i] = t.charCodeAt(i);
			  return n.buffer;
			}),
			(e.prototype._removeMimeType = function (e) {
			  return e.split(",")[1];
			}),
			e
		  );
		})();
		exports.SoundManager = e;
	  },
	  {},
	],
	zPBq: [
	  function (require, module, exports) {
		"use strict";
		var e =
			(this && this.__extends) ||
			(function () {
			  var e = function (t, i) {
				return (e =
				  Object.setPrototypeOf ||
				  ({ __proto__: [] } instanceof Array &&
					function (e, t) {
					  e.__proto__ = t;
					}) ||
				  function (e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				  })(t, i);
			  };
			  return function (t, i) {
				function n() {
				  this.constructor = t;
				}
				e(t, i),
				  (t.prototype =
					null === i
					  ? Object.create(i)
					  : ((n.prototype = i.prototype), new n()));
			  };
			})(),
		  t =
			(this && this.__importStar) ||
			function (e) {
			  if (e && e.__esModule) return e;
			  var t = {};
			  if (null != e)
				for (var i in e)
				  Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
			  return (t.default = e), t;
			};
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var i,
		  n = t(require("./Strings")),
		  r = require("./shared/utils/Browser"),
		  s = require("./ui/RenderDebouncer"),
		  o = require("./ui/Lifecycle"),
		  a = require("./common/Lifecycle"),
		  l = 20;
		!(function (e) {
		  (e[(e.TOP = 0)] = "TOP"), (e[(e.BOTTOM = 1)] = "BOTTOM");
		})(i || (i = {}));
		var _ = (function (t) {
		  function a(e) {
			var n = t.call(this) || this;
			(n._terminal = e),
			  (n._liveRegionLineCount = 0),
			  (n._charsToConsume = []),
			  (n._accessibilityTreeRoot = document.createElement("div")),
			  n._accessibilityTreeRoot.classList.add("xterm-accessibility"),
			  (n._rowContainer = document.createElement("div")),
			  n._rowContainer.classList.add("xterm-accessibility-tree"),
			  (n._rowElements = []);
			for (var r = 0; r < n._terminal.rows; r++)
			  (n._rowElements[r] = n._createAccessibilityTreeNode()),
				n._rowContainer.appendChild(n._rowElements[r]);
			return (
			  (n._topBoundaryFocusListener = function (e) {
				return n._onBoundaryFocus(e, i.TOP);
			  }),
			  (n._bottomBoundaryFocusListener = function (e) {
				return n._onBoundaryFocus(e, i.BOTTOM);
			  }),
			  n._rowElements[0].addEventListener(
				"focus",
				n._topBoundaryFocusListener,
			  ),
			  n._rowElements[n._rowElements.length - 1].addEventListener(
				"focus",
				n._bottomBoundaryFocusListener,
			  ),
			  n._refreshRowsDimensions(),
			  n._accessibilityTreeRoot.appendChild(n._rowContainer),
			  (n._renderRowsDebouncer = new s.RenderDebouncer(
				n._terminal,
				n._renderRows.bind(n),
			  )),
			  n._refreshRows(),
			  (n._liveRegion = document.createElement("div")),
			  n._liveRegion.classList.add("live-region"),
			  n._liveRegion.setAttribute("aria-live", "assertive"),
			  n._accessibilityTreeRoot.appendChild(n._liveRegion),
			  n._terminal.element.insertAdjacentElement(
				"afterbegin",
				n._accessibilityTreeRoot,
			  ),
			  n.register(n._renderRowsDebouncer),
			  n.register(
				n._terminal.addDisposableListener("resize", function (e) {
				  return n._onResize(e.rows);
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("refresh", function (e) {
				  return n._refreshRows(e.start, e.end);
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("scroll", function (e) {
				  return n._refreshRows();
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("a11y.char", function (e) {
				  return n._onChar(e);
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("linefeed", function () {
				  return n._onChar("\n");
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("a11y.tab", function (e) {
				  return n._onTab(e);
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("key", function (e) {
				  return n._onKey(e);
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("blur", function () {
				  return n._clearLiveRegion();
				}),
			  ),
			  n.register(
				n._terminal.addDisposableListener("dprchange", function () {
				  return n._refreshRowsDimensions();
				}),
			  ),
			  n.register(
				n._terminal.renderer.addDisposableListener(
				  "resize",
				  function () {
					return n._refreshRowsDimensions();
				  },
				),
			  ),
			  n.register(
				o.addDisposableDomListener(window, "resize", function () {
				  return n._refreshRowsDimensions();
				}),
			  ),
			  n
			);
		  }
		  return (
			e(a, t),
			(a.prototype.dispose = function () {
			  t.prototype.dispose.call(this),
				this._terminal.element.removeChild(this._accessibilityTreeRoot),
				(this._rowElements.length = 0);
			}),
			(a.prototype._onBoundaryFocus = function (e, t) {
			  var n = e.target,
				r =
				  this._rowElements[
					t === i.TOP ? 1 : this._rowElements.length - 2
				  ];
			  if (
				n.getAttribute("aria-posinset") !==
				  (t === i.TOP
					? "1"
					: "" + this._terminal.buffer.lines.length) &&
				e.relatedTarget === r
			  ) {
				var s, o;
				if (
				  (t === i.TOP
					? ((s = n),
					  (o = this._rowElements.pop()),
					  this._rowContainer.removeChild(o))
					: ((s = this._rowElements.shift()),
					  (o = n),
					  this._rowContainer.removeChild(s)),
				  s.removeEventListener(
					"focus",
					this._topBoundaryFocusListener,
				  ),
				  o.removeEventListener(
					"focus",
					this._bottomBoundaryFocusListener,
				  ),
				  t === i.TOP)
				) {
				  var a = this._createAccessibilityTreeNode();
				  this._rowElements.unshift(a),
					this._rowContainer.insertAdjacentElement("afterbegin", a);
				} else {
				  a = this._createAccessibilityTreeNode();
				  this._rowElements.push(a), this._rowContainer.appendChild(a);
				}
				this._rowElements[0].addEventListener(
				  "focus",
				  this._topBoundaryFocusListener,
				),
				  this._rowElements[
					this._rowElements.length - 1
				  ].addEventListener(
					"focus",
					this._bottomBoundaryFocusListener,
				  ),
				  this._terminal.scrollLines(t === i.TOP ? -1 : 1),
				  this._rowElements[
					t === i.TOP ? 1 : this._rowElements.length - 2
				  ].focus(),
				  e.preventDefault(),
				  e.stopImmediatePropagation();
			  }
			}),
			(a.prototype._onResize = function (e) {
			  this._rowElements[
				this._rowElements.length - 1
			  ].removeEventListener("focus", this._bottomBoundaryFocusListener);
			  for (
				var t = this._rowContainer.children.length;
				t < this._terminal.rows;
				t++
			  )
				(this._rowElements[t] = this._createAccessibilityTreeNode()),
				  this._rowContainer.appendChild(this._rowElements[t]);
			  for (; this._rowElements.length > e; )
				this._rowContainer.removeChild(this._rowElements.pop());
			  this._rowElements[this._rowElements.length - 1].addEventListener(
				"focus",
				this._bottomBoundaryFocusListener,
			  ),
				this._refreshRowsDimensions();
			}),
			(a.prototype._createAccessibilityTreeNode = function () {
			  var e = document.createElement("div");
			  return (
				e.setAttribute("role", "listitem"),
				(e.tabIndex = -1),
				this._refreshRowDimensions(e),
				e
			  );
			}),
			(a.prototype._onTab = function (e) {
			  for (var t = 0; t < e; t++) this._onChar(" ");
			}),
			(a.prototype._onChar = function (e) {
			  var t = this;
			  if (this._liveRegionLineCount < l + 1) {
				if (this._charsToConsume.length > 0)
				  this._charsToConsume.shift() !== e &&
					this._announceCharacter(e);
				else this._announceCharacter(e);
				"\n" === e &&
				  (this._liveRegionLineCount++,
				  this._liveRegionLineCount === l + 1 &&
					(this._liveRegion.textContent += n.tooMuchOutput)),
				  r.isMac &&
					this._liveRegion.textContent &&
					this._liveRegion.textContent.length > 0 &&
					!this._liveRegion.parentNode &&
					setTimeout(function () {
					  t._accessibilityTreeRoot.appendChild(t._liveRegion);
					}, 0);
			  }
			}),
			(a.prototype._clearLiveRegion = function () {
			  (this._liveRegion.textContent = ""),
				(this._liveRegionLineCount = 0),
				r.isMac &&
				  this._liveRegion.parentNode &&
				  this._accessibilityTreeRoot.removeChild(this._liveRegion);
			}),
			(a.prototype._onKey = function (e) {
			  this._clearLiveRegion(), this._charsToConsume.push(e);
			}),
			(a.prototype._refreshRows = function (e, t) {
			  this._renderRowsDebouncer.refresh(e, t);
			}),
			(a.prototype._renderRows = function (e, t) {
			  for (
				var i = this._terminal.buffer,
				  r = i.lines.length.toString(),
				  s = e;
				s <= t;
				s++
			  ) {
				var o = i.translateBufferLineToString(i.ydisp + s, !0),
				  a = (i.ydisp + s + 1).toString(),
				  l = this._rowElements[s];
				(l.textContent = 0 === o.length ? n.blankLine : o),
				  l.setAttribute("aria-posinset", a),
				  l.setAttribute("aria-setsize", r);
			  }
			}),
			(a.prototype._refreshRowsDimensions = function () {
			  if (this._terminal.renderer.dimensions.actualCellHeight) {
				this._rowElements.length !== this._terminal.rows &&
				  this._onResize(this._terminal.rows);
				for (var e = 0; e < this._terminal.rows; e++)
				  this._refreshRowDimensions(this._rowElements[e]);
			  }
			}),
			(a.prototype._refreshRowDimensions = function (e) {
			  e.style.height =
				this._terminal.renderer.dimensions.actualCellHeight + "px";
			}),
			(a.prototype._announceCharacter = function (e) {
			  " " === e
				? (this._liveRegion.innerHTML += "&nbsp;")
				: (this._liveRegion.textContent += e);
			}),
			a
		  );
		})(a.Disposable);
		exports.AccessibilityManager = _;
	  },
	  {
		"./Strings": "LZis",
		"./shared/utils/Browser": "/tmL",
		"./ui/RenderDebouncer": "JM9Q",
		"./ui/Lifecycle": "0SNy",
		"./common/Lifecycle": "VtE8",
	  },
	],
	"7dSu": [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("../../Buffer"),
		  t = require("../Types");
		(exports.BOLD_CLASS = "xterm-bold"),
		  (exports.ITALIC_CLASS = "xterm-italic"),
		  (exports.CURSOR_CLASS = "xterm-cursor"),
		  (exports.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block"),
		  (exports.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar"),
		  (exports.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline");
		var r = (function () {
		  function r(e) {
			this._document = e;
		  }
		  return (
			(r.prototype.createRow = function (r, s, S, a, L, _) {
			  for (
				var o = this._document.createDocumentFragment(), A = 0, C = 0;
				C < r.length;
				C++
			  )
				if (!(A >= _)) {
				  var c = r.get(C),
					d = c[e.CHAR_DATA_CHAR_INDEX],
					i = c[e.CHAR_DATA_ATTR_INDEX],
					R = c[e.CHAR_DATA_WIDTH_INDEX];
				  if (0 !== R) {
					var n = this._document.createElement("span");
					R > 1 && (n.style.width = L * R + "px");
					var x = i >> 18,
					  p = 511 & i,
					  u = (i >> 9) & 511;
					if (s && C === a)
					  switch ((n.classList.add(exports.CURSOR_CLASS), S)) {
						case "bar":
						  n.classList.add(exports.CURSOR_STYLE_BAR_CLASS);
						  break;
						case "underline":
						  n.classList.add(exports.CURSOR_STYLE_UNDERLINE_CLASS);
						  break;
						default:
						  n.classList.add(exports.CURSOR_STYLE_BLOCK_CLASS);
					  }
					if (x & t.FLAGS.INVERSE) {
					  var l = p;
					  (p = u),
						256 === (u = l) && (u = 0),
						257 === p && (p = 15);
					}
					x & t.FLAGS.BOLD &&
					  (u < 8 && (u += 8), n.classList.add(exports.BOLD_CLASS)),
					  x & t.FLAGS.ITALIC &&
						n.classList.add(exports.ITALIC_CLASS),
					  (n.textContent = d),
					  257 !== u && n.classList.add("xterm-fg-" + u),
					  256 !== p && n.classList.add("xterm-bg-" + p),
					  o.appendChild(n),
					  (A += R);
				  }
				}
			  return o;
			}),
			r
		  );
		})();
		exports.DomRendererRowFactory = r;
	  },
	  { "../../Buffer": "nJkY", "../Types": "lZiw" },
	],
	sQSM: [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__extends) ||
		  (function () {
			var e = function (t, i) {
			  return (e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
				  function (e, t) {
					e.__proto__ = t;
				  }) ||
				function (e, t) {
				  for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(t, i);
			};
			return function (t, i) {
			  function n() {
				this.constructor = t;
			  }
			  e(t, i),
				(t.prototype =
				  null === i
					? Object.create(i)
					: ((n.prototype = i.prototype), new n()));
			};
		  })();
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("../../Types"),
		  i = require("../../common/EventEmitter"),
		  n = require("../ColorManager"),
		  r = require("../../ui/RenderDebouncer"),
		  s = require("./DomRendererRowFactory"),
		  o = "xterm-dom-renderer-owner-",
		  l = "xterm-rows",
		  a = "xterm-fg-",
		  h = "xterm-bg-",
		  c = "xterm-focus",
		  m = "xterm-selection",
		  d = 1,
		  _ = (function (i) {
			function _(e, a) {
			  var h = i.call(this) || this;
			  (h._terminal = e),
				(h._terminalClass = d++),
				(h._rowElements = []);
			  var c = h._terminal.options.allowTransparency;
			  return (
				(h.colorManager = new n.ColorManager(document, c)),
				h.setTheme(a),
				(h._rowContainer = document.createElement("div")),
				h._rowContainer.classList.add(l),
				(h._rowContainer.style.lineHeight = "normal"),
				h._rowContainer.setAttribute("aria-hidden", "true"),
				h._refreshRowElements(h._terminal.cols, h._terminal.rows),
				(h._selectionContainer = document.createElement("div")),
				h._selectionContainer.classList.add(m),
				h._selectionContainer.setAttribute("aria-hidden", "true"),
				(h.dimensions = {
				  scaledCharWidth: null,
				  scaledCharHeight: null,
				  scaledCellWidth: null,
				  scaledCellHeight: null,
				  scaledCharLeft: null,
				  scaledCharTop: null,
				  scaledCanvasWidth: null,
				  scaledCanvasHeight: null,
				  canvasWidth: null,
				  canvasHeight: null,
				  actualCellWidth: null,
				  actualCellHeight: null,
				}),
				h._updateDimensions(),
				(h._renderDebouncer = new r.RenderDebouncer(
				  h._terminal,
				  h._renderRows.bind(h),
				)),
				(h._rowFactory = new s.DomRendererRowFactory(document)),
				h._terminal.element.classList.add(o + h._terminalClass),
				h._terminal.screenElement.appendChild(h._rowContainer),
				h._terminal.screenElement.appendChild(h._selectionContainer),
				h._terminal.linkifier.on(
				  t.LinkHoverEventTypes.HOVER,
				  function (e) {
					return h._onLinkHover(e);
				  },
				),
				h._terminal.linkifier.on(
				  t.LinkHoverEventTypes.LEAVE,
				  function (e) {
					return h._onLinkLeave(e);
				  },
				),
				h
			  );
			}
			return (
			  e(_, i),
			  (_.prototype.dispose = function () {
				this._terminal.element.classList.remove(
				  o + this._terminalClass,
				),
				  this._terminal.screenElement.removeChild(this._rowContainer),
				  this._terminal.screenElement.removeChild(
					this._selectionContainer,
				  ),
				  this._terminal.screenElement.removeChild(
					this._themeStyleElement,
				  ),
				  this._terminal.screenElement.removeChild(
					this._dimensionsStyleElement,
				  ),
				  i.prototype.dispose.call(this);
			  }),
			  (_.prototype._updateDimensions = function () {
				var e = this;
				(this.dimensions.scaledCharWidth =
				  this._terminal.charMeasure.width * window.devicePixelRatio),
				  (this.dimensions.scaledCharHeight =
					this._terminal.charMeasure.height *
					window.devicePixelRatio),
				  (this.dimensions.scaledCellWidth =
					this.dimensions.scaledCharWidth),
				  (this.dimensions.scaledCellHeight =
					this.dimensions.scaledCharHeight),
				  (this.dimensions.scaledCharLeft = 0),
				  (this.dimensions.scaledCharTop = 0),
				  (this.dimensions.scaledCanvasWidth =
					this.dimensions.scaledCellWidth * this._terminal.cols),
				  (this.dimensions.scaledCanvasHeight =
					this.dimensions.scaledCellHeight * this._terminal.rows),
				  (this.dimensions.canvasWidth =
					this._terminal.charMeasure.width * this._terminal.cols),
				  (this.dimensions.canvasHeight =
					this._terminal.charMeasure.height * this._terminal.rows),
				  (this.dimensions.actualCellWidth =
					this._terminal.charMeasure.width),
				  (this.dimensions.actualCellHeight =
					this._terminal.charMeasure.height),
				  this._rowElements.forEach(function (t) {
					(t.style.width = e.dimensions.canvasWidth + "px"),
					  (t.style.height = e._terminal.charMeasure.height + "px");
				  }),
				  this._dimensionsStyleElement ||
					((this._dimensionsStyleElement =
					  document.createElement("style")),
					this._terminal.screenElement.appendChild(
					  this._dimensionsStyleElement,
					));
				var t =
				  this._terminalSelector +
				  " ." +
				  l +
				  " span { display: inline-block; height: 100%; vertical-align: top; width: " +
				  this._terminal.charMeasure.width +
				  "px}";
				(this._dimensionsStyleElement.innerHTML = t),
				  (this._selectionContainer.style.height =
					this._terminal._viewportElement.style.height),
				  (this._rowContainer.style.width =
					this.dimensions.canvasWidth + "px"),
				  (this._rowContainer.style.height =
					this.dimensions.canvasHeight + "px");
			  }),
			  (_.prototype.setTheme = function (e) {
				var t = this;
				e && this.colorManager.setTheme(e),
				  this._themeStyleElement ||
					((this._themeStyleElement =
					  document.createElement("style")),
					this._terminal.screenElement.appendChild(
					  this._themeStyleElement,
					));
				var i =
				  this._terminalSelector +
				  " ." +
				  l +
				  " { color: " +
				  this.colorManager.colors.foreground.css +
				  "; background-color: " +
				  this.colorManager.colors.background.css +
				  "; font-family: " +
				  this._terminal.getOption("fontFamily") +
				  "; font-size: " +
				  this._terminal.getOption("fontSize") +
				  "px;}";
				return (
				  (i +=
					this._terminalSelector +
					" span:not(." +
					s.BOLD_CLASS +
					") { font-weight: " +
					this._terminal.options.fontWeight +
					";}" +
					this._terminalSelector +
					" span." +
					s.BOLD_CLASS +
					" { font-weight: " +
					this._terminal.options.fontWeightBold +
					";}" +
					this._terminalSelector +
					" span." +
					s.ITALIC_CLASS +
					" { font-style: italic;}"),
				  (i +=
					this._terminalSelector +
					" ." +
					l +
					":not(." +
					c +
					") ." +
					s.CURSOR_CLASS +
					" { outline: 1px solid " +
					this.colorManager.colors.cursor.css +
					"; outline-offset: -1px;}" +
					this._terminalSelector +
					" ." +
					l +
					"." +
					c +
					" ." +
					s.CURSOR_CLASS +
					"." +
					s.CURSOR_STYLE_BLOCK_CLASS +
					" { background-color: " +
					this.colorManager.colors.cursor.css +
					"; color: " +
					this.colorManager.colors.cursorAccent.css +
					";}" +
					this._terminalSelector +
					" ." +
					l +
					"." +
					c +
					" ." +
					s.CURSOR_CLASS +
					"." +
					s.CURSOR_STYLE_BAR_CLASS +
					" { box-shadow: 1px 0 0 " +
					this.colorManager.colors.cursor.css +
					" inset;}" +
					this._terminalSelector +
					" ." +
					l +
					"." +
					c +
					" ." +
					s.CURSOR_CLASS +
					"." +
					s.CURSOR_STYLE_UNDERLINE_CLASS +
					" { box-shadow: 0 -1px 0 " +
					this.colorManager.colors.cursor.css +
					" inset;}"),
				  (i +=
					this._terminalSelector +
					" ." +
					m +
					" { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" +
					this._terminalSelector +
					" ." +
					m +
					" div { position: absolute; background-color: " +
					this.colorManager.colors.selection.css +
					";}"),
				  this.colorManager.colors.ansi.forEach(function (e, n) {
					i +=
					  t._terminalSelector +
					  " ." +
					  a +
					  n +
					  " { color: " +
					  e.css +
					  "; }" +
					  t._terminalSelector +
					  " ." +
					  h +
					  n +
					  " { background-color: " +
					  e.css +
					  "; }";
				  }),
				  (this._themeStyleElement.innerHTML = i),
				  this.colorManager.colors
				);
			  }),
			  (_.prototype.onWindowResize = function (e) {
				this._updateDimensions();
			  }),
			  (_.prototype._refreshRowElements = function (e, t) {
				for (var i = this._rowElements.length; i <= t; i++) {
				  var n = document.createElement("div");
				  this._rowContainer.appendChild(n), this._rowElements.push(n);
				}
				for (; this._rowElements.length > t; )
				  this._rowContainer.removeChild(this._rowElements.pop());
			  }),
			  (_.prototype.onResize = function (e, t) {
				this._refreshRowElements(e, t), this._updateDimensions();
			  }),
			  (_.prototype.onCharSizeChanged = function () {
				this._updateDimensions();
			  }),
			  (_.prototype.onBlur = function () {
				this._rowContainer.classList.remove(c);
			  }),
			  (_.prototype.onFocus = function () {
				this._rowContainer.classList.add(c);
			  }),
			  (_.prototype.onSelectionChanged = function (e, t, i) {
				for (; this._selectionContainer.children.length; )
				  this._selectionContainer.removeChild(
					this._selectionContainer.children[0],
				  );
				if (e && t) {
				  var n = e[1] - this._terminal.buffer.ydisp,
					r = t[1] - this._terminal.buffer.ydisp,
					s = Math.max(n, 0),
					o = Math.min(r, this._terminal.rows - 1);
				  if (!(s >= this._terminal.rows || o < 0)) {
					var l = document.createDocumentFragment();
					if (i)
					  l.appendChild(
						this._createSelectionElement(s, e[0], t[0], o - s + 1),
					  );
					else {
					  var a = n === s ? e[0] : 0,
						h = s === o ? t[0] : this._terminal.cols;
					  l.appendChild(this._createSelectionElement(s, a, h));
					  var c = o - s - 1;
					  if (
						(l.appendChild(
						  this._createSelectionElement(
							s + 1,
							0,
							this._terminal.cols,
							c,
						  ),
						),
						s !== o)
					  ) {
						var m = r === o ? t[0] : this._terminal.cols;
						l.appendChild(this._createSelectionElement(o, 0, m));
					  }
					}
					this._selectionContainer.appendChild(l);
				  }
				}
			  }),
			  (_.prototype._createSelectionElement = function (e, t, i, n) {
				void 0 === n && (n = 1);
				var r = document.createElement("div");
				return (
				  (r.style.height =
					n * this._terminal.charMeasure.height + "px"),
				  (r.style.top = e * this._terminal.charMeasure.height + "px"),
				  (r.style.left = t * this._terminal.charMeasure.width + "px"),
				  (r.style.width =
					this._terminal.charMeasure.width * (i - t) + "px"),
				  r
				);
			  }),
			  (_.prototype.onCursorMove = function () {}),
			  (_.prototype.onOptionsChanged = function () {
				this._updateDimensions(),
				  this.setTheme(void 0),
				  this._terminal.refresh(0, this._terminal.rows - 1);
			  }),
			  (_.prototype.clear = function () {
				this._rowElements.forEach(function (e) {
				  return (e.innerHTML = "");
				});
			  }),
			  (_.prototype.refreshRows = function (e, t) {
				this._renderDebouncer.refresh(e, t);
			  }),
			  (_.prototype._renderRows = function (e, t) {
				for (
				  var i = this._terminal,
					n = i.buffer.ybase + i.buffer.y,
					r = this._terminal.buffer.x,
					s = e;
				  s <= t;
				  s++
				) {
				  var o = this._rowElements[s];
				  o.innerHTML = "";
				  var l = s + i.buffer.ydisp,
					a = i.buffer.lines.get(l),
					h = i.options.cursorStyle;
				  o.appendChild(
					this._rowFactory.createRow(
					  a,
					  l === n,
					  h,
					  r,
					  i.charMeasure.width,
					  i.cols,
					),
				  );
				}
				this._terminal.emit("refresh", { start: e, end: t });
			  }),
			  Object.defineProperty(_.prototype, "_terminalSelector", {
				get: function () {
				  return "." + o + this._terminalClass;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (_.prototype.registerCharacterJoiner = function (e) {
				return -1;
			  }),
			  (_.prototype.deregisterCharacterJoiner = function (e) {
				return !1;
			  }),
			  (_.prototype._onLinkHover = function (e) {
				this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0);
			  }),
			  (_.prototype._onLinkLeave = function (e) {
				this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1);
			  }),
			  (_.prototype._setCellUnderline = function (e, t, i, n, r, s) {
				for (; e !== t || i !== n; ) {
				  (this._rowElements[i].children[e].style.textDecoration = s
					? "underline"
					: "none"),
					0 === (e = (e + 1) % r) && i++;
				}
			  }),
			  _
			);
		  })(i.EventEmitter);
		exports.DomRenderer = _;
	  },
	  {
		"../../Types": "4kff",
		"../../common/EventEmitter": "lW8c",
		"../ColorManager": "9RWO",
		"../../ui/RenderDebouncer": "JM9Q",
		"./DomRendererRowFactory": "7dSu",
	  },
	],
	PCbn: [
	  function (require, module, exports) {
		"use strict";
		var e;
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (function (e) {
			(e[(e.SEND_KEY = 0)] = "SEND_KEY"),
			  (e[(e.SELECT_ALL = 1)] = "SELECT_ALL"),
			  (e[(e.PAGE_UP = 2)] = "PAGE_UP"),
			  (e[(e.PAGE_DOWN = 3)] = "PAGE_DOWN");
		  })(
			(e =
			  exports.KeyboardResultType || (exports.KeyboardResultType = {})),
		  );
	  },
	  {},
	],
	mtWM: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("../Types"),
		  C = require("../../common/data/EscapeSequences"),
		  y = {
			48: ["0", ")"],
			49: ["1", "!"],
			50: ["2", "@"],
			51: ["3", "#"],
			52: ["4", "$"],
			53: ["5", "%"],
			54: ["6", "^"],
			55: ["7", "&"],
			56: ["8", "*"],
			57: ["9", "("],
			186: [";", ":"],
			187: ["=", "+"],
			188: [",", "<"],
			189: ["-", "_"],
			190: [".", ">"],
			191: ["/", "?"],
			192: ["`", "~"],
			219: ["[", "{"],
			220: ["\\", "|"],
			221: ["]", "}"],
			222: ["'", '"'],
		  };
		function k(k, a, r, S) {
		  var E = {
			  type: e.KeyboardResultType.SEND_KEY,
			  cancel: !1,
			  key: void 0,
			},
			t =
			  (k.shiftKey ? 1 : 0) |
			  (k.altKey ? 2 : 0) |
			  (k.ctrlKey ? 4 : 0) |
			  (k.metaKey ? 8 : 0);
		  switch (k.keyCode) {
			case 0:
			  "UIKeyInputUpArrow" === k.key
				? (E.key = a ? C.C0.ESC + "OA" : C.C0.ESC + "[A")
				: "UIKeyInputLeftArrow" === k.key
				  ? (E.key = a ? C.C0.ESC + "OD" : C.C0.ESC + "[D")
				  : "UIKeyInputRightArrow" === k.key
					? (E.key = a ? C.C0.ESC + "OC" : C.C0.ESC + "[C")
					: "UIKeyInputDownArrow" === k.key &&
					  (E.key = a ? C.C0.ESC + "OB" : C.C0.ESC + "[B");
			  break;
			case 8:
			  if (k.shiftKey) {
				E.key = C.C0.BS;
				break;
			  }
			  if (k.altKey) {
				E.key = C.C0.ESC + C.C0.DEL;
				break;
			  }
			  E.key = C.C0.DEL;
			  break;
			case 9:
			  if (k.shiftKey) {
				E.key = C.C0.ESC + "[Z";
				break;
			  }
			  (E.key = C.C0.HT), (E.cancel = !0);
			  break;
			case 13:
			  (E.key = C.C0.CR), (E.cancel = !0);
			  break;
			case 27:
			  (E.key = C.C0.ESC), (E.cancel = !0);
			  break;
			case 37:
			  t
				? ((E.key = C.C0.ESC + "[1;" + (t + 1) + "D"),
				  E.key === C.C0.ESC + "[1;3D" &&
					(E.key = r ? C.C0.ESC + "b" : C.C0.ESC + "[1;5D"))
				: (E.key = a ? C.C0.ESC + "OD" : C.C0.ESC + "[D");
			  break;
			case 39:
			  t
				? ((E.key = C.C0.ESC + "[1;" + (t + 1) + "C"),
				  E.key === C.C0.ESC + "[1;3C" &&
					(E.key = r ? C.C0.ESC + "f" : C.C0.ESC + "[1;5C"))
				: (E.key = a ? C.C0.ESC + "OC" : C.C0.ESC + "[C");
			  break;
			case 38:
			  t
				? ((E.key = C.C0.ESC + "[1;" + (t + 1) + "A"),
				  E.key === C.C0.ESC + "[1;3A" && (E.key = C.C0.ESC + "[1;5A"))
				: (E.key = a ? C.C0.ESC + "OA" : C.C0.ESC + "[A");
			  break;
			case 40:
			  t
				? ((E.key = C.C0.ESC + "[1;" + (t + 1) + "B"),
				  E.key === C.C0.ESC + "[1;3B" && (E.key = C.C0.ESC + "[1;5B"))
				: (E.key = a ? C.C0.ESC + "OB" : C.C0.ESC + "[B");
			  break;
			case 45:
			  k.shiftKey || k.ctrlKey || (E.key = C.C0.ESC + "[2~");
			  break;
			case 46:
			  E.key = t ? C.C0.ESC + "[3;" + (t + 1) + "~" : C.C0.ESC + "[3~";
			  break;
			case 36:
			  E.key = t
				? C.C0.ESC + "[1;" + (t + 1) + "H"
				: a
				  ? C.C0.ESC + "OH"
				  : C.C0.ESC + "[H";
			  break;
			case 35:
			  E.key = t
				? C.C0.ESC + "[1;" + (t + 1) + "F"
				: a
				  ? C.C0.ESC + "OF"
				  : C.C0.ESC + "[F";
			  break;
			case 33:
			  k.shiftKey
				? (E.type = e.KeyboardResultType.PAGE_UP)
				: (E.key = C.C0.ESC + "[5~");
			  break;
			case 34:
			  k.shiftKey
				? (E.type = e.KeyboardResultType.PAGE_DOWN)
				: (E.key = C.C0.ESC + "[6~");
			  break;
			case 112:
			  E.key = t ? C.C0.ESC + "[1;" + (t + 1) + "P" : C.C0.ESC + "OP";
			  break;
			case 113:
			  E.key = t ? C.C0.ESC + "[1;" + (t + 1) + "Q" : C.C0.ESC + "OQ";
			  break;
			case 114:
			  E.key = t ? C.C0.ESC + "[1;" + (t + 1) + "R" : C.C0.ESC + "OR";
			  break;
			case 115:
			  E.key = t ? C.C0.ESC + "[1;" + (t + 1) + "S" : C.C0.ESC + "OS";
			  break;
			case 116:
			  E.key = t ? C.C0.ESC + "[15;" + (t + 1) + "~" : C.C0.ESC + "[15~";
			  break;
			case 117:
			  E.key = t ? C.C0.ESC + "[17;" + (t + 1) + "~" : C.C0.ESC + "[17~";
			  break;
			case 118:
			  E.key = t ? C.C0.ESC + "[18;" + (t + 1) + "~" : C.C0.ESC + "[18~";
			  break;
			case 119:
			  E.key = t ? C.C0.ESC + "[19;" + (t + 1) + "~" : C.C0.ESC + "[19~";
			  break;
			case 120:
			  E.key = t ? C.C0.ESC + "[20;" + (t + 1) + "~" : C.C0.ESC + "[20~";
			  break;
			case 121:
			  E.key = t ? C.C0.ESC + "[21;" + (t + 1) + "~" : C.C0.ESC + "[21~";
			  break;
			case 122:
			  E.key = t ? C.C0.ESC + "[23;" + (t + 1) + "~" : C.C0.ESC + "[23~";
			  break;
			case 123:
			  E.key = t ? C.C0.ESC + "[24;" + (t + 1) + "~" : C.C0.ESC + "[24~";
			  break;
			default:
			  if (!k.ctrlKey || k.shiftKey || k.altKey || k.metaKey)
				if ((r && !S) || !k.altKey || k.metaKey)
				  r &&
					!k.altKey &&
					!k.ctrlKey &&
					k.metaKey &&
					65 === k.keyCode &&
					(E.type = e.KeyboardResultType.SELECT_ALL);
				else {
				  var o = y[k.keyCode],
					s = o && o[k.shiftKey ? 1 : 0];
				  if (s) E.key = C.C0.ESC + s;
				  else if (k.keyCode >= 65 && k.keyCode <= 90) {
					var c = k.ctrlKey ? k.keyCode - 64 : k.keyCode + 32;
					E.key = C.C0.ESC + String.fromCharCode(c);
				  }
				}
			  else
				k.keyCode >= 65 && k.keyCode <= 90
				  ? (E.key = String.fromCharCode(k.keyCode - 64))
				  : 32 === k.keyCode
					? (E.key = String.fromCharCode(0))
					: k.keyCode >= 51 && k.keyCode <= 55
					  ? (E.key = String.fromCharCode(k.keyCode - 51 + 27))
					  : 56 === k.keyCode
						? (E.key = String.fromCharCode(127))
						: 219 === k.keyCode
						  ? (E.key = String.fromCharCode(27))
						  : 220 === k.keyCode
							? (E.key = String.fromCharCode(28))
							: 221 === k.keyCode &&
							  (E.key = String.fromCharCode(29));
		  }
		  return E;
		}
		exports.evaluateKeyboardEvent = k;
	  },
	  { "../Types": "PCbn", "../../common/data/EscapeSequences": "xnQp" },
	],
	"Ns+I": [
	  function (require, module, exports) {
		"use strict";
		var e =
			(this && this.__extends) ||
			(function () {
			  var e = function (t, r) {
				return (e =
				  Object.setPrototypeOf ||
				  ({ __proto__: [] } instanceof Array &&
					function (e, t) {
					  e.__proto__ = t;
					}) ||
				  function (e, t) {
					for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
				  })(t, r);
			  };
			  return function (t, r) {
				function i() {
				  this.constructor = t;
				}
				e(t, r),
				  (t.prototype =
					null === r
					  ? Object.create(r)
					  : ((i.prototype = r.prototype), new i()));
			  };
			})(),
		  t =
			(this && this.__importStar) ||
			function (e) {
			  if (e && e.__esModule) return e;
			  var t = {};
			  if (null != e)
				for (var r in e)
				  Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
			  return (t.default = e), t;
			};
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var r = require("./BufferSet"),
		  i = require("./Buffer"),
		  s = require("./CompositionHelper"),
		  o = require("./common/EventEmitter"),
		  n = require("./Viewport"),
		  a = require("./handlers/Clipboard"),
		  h = require("./common/data/EscapeSequences"),
		  l = require("./InputHandler"),
		  u = require("./renderer/Renderer"),
		  c = require("./Linkifier"),
		  f = require("./SelectionManager"),
		  p = require("./ui/CharMeasure"),
		  d = t(require("./shared/utils/Browser")),
		  m = require("./ui/Lifecycle"),
		  b = t(require("./Strings")),
		  y = require("./utils/MouseHelper"),
		  g = require("./utils/Clone"),
		  _ = require("./SoundManager"),
		  w = require("./renderer/ColorManager"),
		  v = require("./ui/MouseZoneManager"),
		  M = require("./AccessibilityManager"),
		  L = require("./ui/ScreenDprMonitor"),
		  C = require("./renderer/atlas/CharAtlasCache"),
		  S = require("./renderer/dom/DomRenderer"),
		  x = require("./core/input/Keyboard"),
		  D = require("./core/Types"),
		  E = require("./BufferLine"),
		  k = "undefined" != typeof window ? window.document : null,
		  T = 5,
		  A = 300,
		  B = ["cols", "rows"],
		  H = {
			cols: 80,
			rows: 24,
			convertEol: !1,
			termName: "xterm",
			cursorBlink: !1,
			cursorStyle: "block",
			bellSound: _.DEFAULT_BELL_SOUND,
			bellStyle: "none",
			drawBoldTextInBrightColors: !0,
			enableBold: !0,
			experimentalCharAtlas: "static",
			fontFamily: "courier-new, courier, monospace",
			fontSize: 15,
			fontWeight: "normal",
			fontWeightBold: "bold",
			lineHeight: 1,
			letterSpacing: 0,
			scrollback: 1e3,
			screenKeys: !1,
			screenReaderMode: !1,
			debug: !1,
			macOptionIsMeta: !1,
			macOptionClickForcesSelection: !1,
			cancelEvents: !1,
			disableStdin: !1,
			useFlowControl: !1,
			allowTransparency: !1,
			tabStopWidth: 8,
			theme: null,
			rightClickSelectsWord: d.isMac,
			rendererType: "canvas",
		  },
		  R = (function (t) {
			function o(e) {
			  void 0 === e && (e = {});
			  var r = t.call(this) || this;
			  return (r.browser = d), (r.options = g.clone(e)), r._setup(), r;
			}
			return (
			  e(o, t),
			  (o.prototype.dispose = function () {
				t.prototype.dispose.call(this),
				  (this._customKeyEventHandler = null),
				  C.removeTerminalFromCache(this),
				  (this.handler = function () {}),
				  (this.write = function () {}),
				  this.element &&
					this.element.parentNode &&
					this.element.parentNode.removeChild(this.element);
			  }),
			  (o.prototype.destroy = function () {
				this.dispose();
			  }),
			  (o.prototype._setup = function () {
				var e = this;
				Object.keys(H).forEach(function (t) {
				  (null !== e.options[t] && void 0 !== e.options[t]) ||
					(e.options[t] = H[t]);
				}),
				  (this._parent = k ? k.body : null),
				  (this.cols = this.options.cols),
				  (this.rows = this.options.rows),
				  this.options.handler && this.on("data", this.options.handler),
				  (this.cursorState = 0),
				  (this.cursorHidden = !1),
				  (this._customKeyEventHandler = null),
				  (this.applicationKeypad = !1),
				  (this.applicationCursor = !1),
				  (this.originMode = !1),
				  (this.insertMode = !1),
				  (this.wraparoundMode = !0),
				  (this.bracketedPasteMode = !1),
				  (this.charset = null),
				  (this.gcharset = null),
				  (this.glevel = 0),
				  (this.charsets = [null]),
				  (this.curAttr = i.DEFAULT_ATTR),
				  (this.params = []),
				  (this.currentParam = 0),
				  (this.writeBuffer = []),
				  (this._writeInProgress = !1),
				  (this._xoffSentToCatchUp = !1),
				  (this._userScrolling = !1),
				  (this._inputHandler = new l.InputHandler(this)),
				  this.register(this._inputHandler),
				  (this.renderer = this.renderer || null),
				  (this.selectionManager = this.selectionManager || null),
				  (this.linkifier = this.linkifier || new c.Linkifier(this)),
				  (this._mouseZoneManager = this._mouseZoneManager || null),
				  (this.soundManager =
					this.soundManager || new _.SoundManager(this)),
				  (this.buffers = new r.BufferSet(this)),
				  this.selectionManager &&
					(this.selectionManager.clearSelection(),
					this.selectionManager.initBuffersListeners());
			  }),
			  Object.defineProperty(o.prototype, "buffer", {
				get: function () {
				  return this.buffers.active;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (o.prototype.eraseAttr = function () {
				return (-512 & i.DEFAULT_ATTR) | (511 & this.curAttr);
			  }),
			  (o.prototype.focus = function () {
				this.textarea && this.textarea.focus();
			  }),
			  Object.defineProperty(o.prototype, "isFocused", {
				get: function () {
				  return k.activeElement === this.textarea;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (o.prototype.getOption = function (e) {
				if (!(e in H))
				  throw new Error('No option with key "' + e + '"');
				return this.options[e];
			  }),
			  (o.prototype.setOption = function (e, t) {
				if (!(e in H))
				  throw new Error('No option with key "' + e + '"');
				if (
				  (-1 !== B.indexOf(e) &&
					console.error(
					  'Option "' + e + '" can only be set in the constructor',
					),
				  this.options[e] !== t)
				) {
				  switch (e) {
					case "bellStyle":
					  t || (t = "none");
					  break;
					case "cursorStyle":
					  t || (t = "block");
					  break;
					case "fontWeight":
					  t || (t = "normal");
					  break;
					case "fontWeightBold":
					  t || (t = "bold");
					  break;
					case "lineHeight":
					  if (t < 1)
						return void console.warn(
						  e + " cannot be less than 1, value: " + t,
						);
					case "rendererType":
					  t || (t = "canvas");
					  break;
					case "tabStopWidth":
					  if (t < 1)
						return void console.warn(
						  e + " cannot be less than 1, value: " + t,
						);
					  break;
					case "theme":
					  if (this.renderer) return void this._setTheme(t);
					  break;
					case "scrollback":
					  if ((t = Math.min(t, i.MAX_BUFFER_SIZE)) < 0)
						return void console.warn(
						  e + " cannot be less than 0, value: " + t,
						);
					  if (this.options[e] !== t) {
						var r = this.rows + t;
						if (this.buffer.lines.length > r) {
						  var s = this.buffer.lines.length - r,
							o = this.buffer.ydisp - s < 0;
						  this.buffer.lines.trimStart(s),
							(this.buffer.ybase = Math.max(
							  this.buffer.ybase - s,
							  0,
							)),
							(this.buffer.ydisp = Math.max(
							  this.buffer.ydisp - s,
							  0,
							)),
							o && this.refresh(0, this.rows - 1);
						}
					  }
				  }
				  switch (((this.options[e] = t), e)) {
					case "fontFamily":
					case "fontSize":
					  this.renderer &&
						(this.renderer.clear(),
						this.charMeasure.measure(this.options));
					  break;
					case "drawBoldTextInBrightColors":
					case "experimentalCharAtlas":
					case "enableBold":
					case "letterSpacing":
					case "lineHeight":
					case "fontWeight":
					case "fontWeightBold":
					  this.renderer &&
						(this.renderer.clear(),
						this.renderer.onResize(this.cols, this.rows),
						this.refresh(0, this.rows - 1));
					case "rendererType":
					  this.renderer &&
						(this.unregister(this.renderer),
						this.renderer.dispose(),
						(this.renderer = null)),
						this._setupRenderer(),
						this.renderer.onCharSizeChanged(),
						this._theme && this.renderer.setTheme(this._theme);
					  break;
					case "scrollback":
					  this.buffers.resize(this.cols, this.rows),
						this.viewport && this.viewport.syncScrollArea();
					  break;
					case "screenReaderMode":
					  t
						? this._accessibilityManager ||
						  (this._accessibilityManager =
							new M.AccessibilityManager(this))
						: this._accessibilityManager &&
						  (this._accessibilityManager.dispose(),
						  (this._accessibilityManager = null));
					  break;
					case "tabStopWidth":
					  this.buffers.setupTabStops();
				  }
				  this.renderer && this.renderer.onOptionsChanged();
				}
			  }),
			  (o.prototype._onTextAreaFocus = function (e) {
				this.sendFocus && this.handler(h.C0.ESC + "[I"),
				  this.updateCursorStyle(e),
				  this.element.classList.add("focus"),
				  this.showCursor(),
				  this.emit("focus");
			  }),
			  (o.prototype.blur = function () {
				return this.textarea.blur();
			  }),
			  (o.prototype._onTextAreaBlur = function () {
				(this.textarea.value = ""),
				  this.refresh(this.buffer.y, this.buffer.y),
				  this.sendFocus && this.handler(h.C0.ESC + "[O"),
				  this.element.classList.remove("focus"),
				  this.emit("blur");
			  }),
			  (o.prototype._initGlobal = function () {
				var e = this;
				this._bindKeys(),
				  this.register(
					m.addDisposableDomListener(
					  this.element,
					  "copy",
					  function (t) {
						e.hasSelection() &&
						  a.copyHandler(t, e, e.selectionManager);
					  },
					),
				  );
				var t = function (t) {
				  return a.pasteHandler(t, e);
				};
				this.register(
				  m.addDisposableDomListener(this.textarea, "paste", t),
				),
				  this.register(
					m.addDisposableDomListener(this.element, "paste", t),
				  ),
				  d.isFirefox
					? this.register(
						m.addDisposableDomListener(
						  this.element,
						  "mousedown",
						  function (t) {
							2 === t.button &&
							  a.rightClickHandler(
								t,
								e.textarea,
								e.selectionManager,
								e.options.rightClickSelectsWord,
							  );
						  },
						),
					  )
					: this.register(
						m.addDisposableDomListener(
						  this.element,
						  "contextmenu",
						  function (t) {
							a.rightClickHandler(
							  t,
							  e.textarea,
							  e.selectionManager,
							  e.options.rightClickSelectsWord,
							);
						  },
						),
					  ),
				  d.isLinux &&
					this.register(
					  m.addDisposableDomListener(
						this.element,
						"auxclick",
						function (t) {
						  1 === t.button &&
							a.moveTextAreaUnderMouseCursor(t, e.textarea);
						},
					  ),
					);
			  }),
			  (o.prototype._bindKeys = function () {
				var e = this,
				  t = this;
				this.register(
				  m.addDisposableDomListener(
					this.element,
					"keydown",
					function (e) {
					  k.activeElement === this && t._keyDown(e);
					},
					!0,
				  ),
				),
				  this.register(
					m.addDisposableDomListener(
					  this.element,
					  "keypress",
					  function (e) {
						k.activeElement === this && t._keyPress(e);
					  },
					  !0,
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.element,
					  "keyup",
					  function (r) {
						K(r) || e.focus(), t._keyUp(r);
					  },
					  !0,
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "keydown",
					  function (t) {
						return e._keyDown(t);
					  },
					  !0,
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "keypress",
					  function (t) {
						return e._keyPress(t);
					  },
					  !0,
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "compositionstart",
					  function () {
						return e._compositionHelper.compositionstart();
					  },
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "compositionupdate",
					  function (t) {
						return e._compositionHelper.compositionupdate(t);
					  },
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "compositionend",
					  function () {
						return e._compositionHelper.compositionend();
					  },
					),
				  ),
				  this.register(
					this.addDisposableListener("refresh", function () {
					  return e._compositionHelper.updateCompositionElements();
					}),
				  ),
				  this.register(
					this.addDisposableListener("refresh", function (t) {
					  return e._queueLinkification(t.start, t.end);
					}),
				  );
			  }),
			  (o.prototype.open = function (e) {
				var t = this;
				if (((this._parent = e || this._parent), !this._parent))
				  throw new Error("Terminal requires a parent element.");
				(this._context = this._parent.ownerDocument.defaultView),
				  (this._document = this._parent.ownerDocument),
				  (this._screenDprMonitor = new L.ScreenDprMonitor()),
				  this._screenDprMonitor.setListener(function () {
					return t.emit("dprchange", window.devicePixelRatio);
				  }),
				  this.register(this._screenDprMonitor),
				  (this.element = this._document.createElement("div")),
				  (this.element.dir = "ltr"),
				  this.element.classList.add("terminal"),
				  this.element.classList.add("xterm"),
				  this.element.setAttribute("tabindex", "0"),
				  this._parent.appendChild(this.element);
				var r = k.createDocumentFragment();
				(this._viewportElement = k.createElement("div")),
				  this._viewportElement.classList.add("xterm-viewport"),
				  r.appendChild(this._viewportElement),
				  (this._viewportScrollArea = k.createElement("div")),
				  this._viewportScrollArea.classList.add("xterm-scroll-area"),
				  this._viewportElement.appendChild(this._viewportScrollArea),
				  (this.screenElement = k.createElement("div")),
				  this.screenElement.classList.add("xterm-screen"),
				  (this._helperContainer = k.createElement("div")),
				  this._helperContainer.classList.add("xterm-helpers"),
				  this.screenElement.appendChild(this._helperContainer),
				  r.appendChild(this.screenElement),
				  (this._mouseZoneManager = new v.MouseZoneManager(this)),
				  this.register(this._mouseZoneManager),
				  this.register(
					this.addDisposableListener("scroll", function () {
					  return t._mouseZoneManager.clearAll();
					}),
				  ),
				  this.linkifier.attachToDom(this._mouseZoneManager),
				  (this.textarea = k.createElement("textarea")),
				  this.textarea.classList.add("xterm-helper-textarea"),
				  this.textarea.setAttribute("aria-label", b.promptLabel),
				  this.textarea.setAttribute("aria-multiline", "false"),
				  this.textarea.setAttribute("autocorrect", "off"),
				  this.textarea.setAttribute("autocapitalize", "off"),
				  this.textarea.setAttribute("spellcheck", "false"),
				  (this.textarea.tabIndex = 0),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "focus",
					  function (e) {
						return t._onTextAreaFocus(e);
					  },
					),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this.textarea,
					  "blur",
					  function () {
						return t._onTextAreaBlur();
					  },
					),
				  ),
				  this._helperContainer.appendChild(this.textarea),
				  (this._compositionView = k.createElement("div")),
				  this._compositionView.classList.add("composition-view"),
				  (this._compositionHelper = new s.CompositionHelper(
					this.textarea,
					this._compositionView,
					this,
				  )),
				  this._helperContainer.appendChild(this._compositionView),
				  (this.charMeasure = new p.CharMeasure(
					k,
					this._helperContainer,
				  )),
				  this.element.appendChild(r),
				  this._setupRenderer(),
				  (this._theme = this.options.theme),
				  (this.options.theme = null),
				  (this.viewport = new n.Viewport(
					this,
					this._viewportElement,
					this._viewportScrollArea,
					this.charMeasure,
				  )),
				  this.viewport.onThemeChanged(
					this.renderer.colorManager.colors,
				  ),
				  this.register(this.viewport),
				  this.register(
					this.addDisposableListener("cursormove", function () {
					  return t.renderer.onCursorMove();
					}),
				  ),
				  this.register(
					this.addDisposableListener("resize", function () {
					  return t.renderer.onResize(t.cols, t.rows);
					}),
				  ),
				  this.register(
					this.addDisposableListener("blur", function () {
					  return t.renderer.onBlur();
					}),
				  ),
				  this.register(
					this.addDisposableListener("focus", function () {
					  return t.renderer.onFocus();
					}),
				  ),
				  this.register(
					this.addDisposableListener("dprchange", function () {
					  return t.renderer.onWindowResize(window.devicePixelRatio);
					}),
				  ),
				  this.register(
					m.addDisposableDomListener(window, "resize", function () {
					  return t.renderer.onWindowResize(window.devicePixelRatio);
					}),
				  ),
				  this.register(
					this.charMeasure.addDisposableListener(
					  "charsizechanged",
					  function () {
						return t.renderer.onCharSizeChanged();
					  },
					),
				  ),
				  this.register(
					this.renderer.addDisposableListener("resize", function (e) {
					  return t.viewport.syncScrollArea();
					}),
				  ),
				  (this.selectionManager = new f.SelectionManager(
					this,
					this.charMeasure,
				  )),
				  this.register(
					m.addDisposableDomListener(
					  this.element,
					  "mousedown",
					  function (e) {
						return t.selectionManager.onMouseDown(e);
					  },
					),
				  ),
				  this.register(
					this.selectionManager.addDisposableListener(
					  "refresh",
					  function (e) {
						return t.renderer.onSelectionChanged(
						  e.start,
						  e.end,
						  e.columnSelectMode,
						);
					  },
					),
				  ),
				  this.register(
					this.selectionManager.addDisposableListener(
					  "newselection",
					  function (e) {
						(t.textarea.value = e),
						  t.textarea.focus(),
						  t.textarea.select();
					  },
					),
				  ),
				  this.register(
					this.addDisposableListener("scroll", function () {
					  t.viewport.syncScrollArea(), t.selectionManager.refresh();
					}),
				  ),
				  this.register(
					m.addDisposableDomListener(
					  this._viewportElement,
					  "scroll",
					  function () {
						return t.selectionManager.refresh();
					  },
					),
				  ),
				  (this.mouseHelper = new y.MouseHelper(this.renderer)),
				  this.options.screenReaderMode &&
					(this._accessibilityManager = new M.AccessibilityManager(
					  this,
					)),
				  this.charMeasure.measure(this.options),
				  this.refresh(0, this.rows - 1),
				  this._initGlobal(),
				  this.bindMouse();
			  }),
			  (o.prototype._setupRenderer = function () {
				switch (this.options.rendererType) {
				  case "canvas":
					this.renderer = new u.Renderer(this, this.options.theme);
					break;
				  case "dom":
					this.renderer = new S.DomRenderer(this, this.options.theme);
					break;
				  default:
					throw new Error(
					  'Unrecognized rendererType "' +
						this.options.rendererType +
						'"',
					);
				}
				this.register(this.renderer);
			  }),
			  (o.prototype._setTheme = function (e) {
				this._theme = e;
				var t = this.renderer.setTheme(e);
				this.viewport && this.viewport.onThemeChanged(t);
			  }),
			  (o.prototype.bindMouse = function () {
				var e = this,
				  t = this.element,
				  r = this,
				  i = 32;
				function s(e) {
				  var t, s;
				  if (
					((t = (function (e) {
					  var t, i, s, o, n;
					  switch (e.overrideType || e.type) {
						case "mousedown":
						  (t =
							null !== e.button && void 0 !== e.button
							  ? +e.button
							  : null !== e.which && void 0 !== e.which
								? e.which - 1
								: null),
							d.isMSIE && (t = 1 === t ? 0 : 4 === t ? 1 : t);
						  break;
						case "mouseup":
						  t = 3;
						  break;
						case "DOMMouseScroll":
						  t = e.detail < 0 ? 64 : 65;
						  break;
						case "wheel":
						  t = e.wheelDeltaY > 0 ? 64 : 65;
					  }
					  (i = e.shiftKey ? 4 : 0),
						(s = e.metaKey ? 8 : 0),
						(o = e.ctrlKey ? 16 : 0),
						(n = i | s | o),
						r.vt200Mouse ? (n &= o) : r.normalMouse || (n = 0);
					  return (t = 32 + (n << 2) + t);
					})(e)),
					(s = r.mouseHelper.getRawByteCoords(
					  e,
					  r.screenElement,
					  r.charMeasure,
					  r.options.lineHeight,
					  r.cols,
					  r.rows,
					)))
				  )
					switch ((n(t, s), e.overrideType || e.type)) {
					  case "mousedown":
						i = t;
						break;
					  case "mouseup":
						i = 32;
					}
				}
				function o(e, t) {
				  if (r.utfMouse) {
					if (2047 === t) return void e.push(0);
					t < 127
					  ? e.push(t)
					  : (t > 2047 && (t = 2047),
						e.push(192 | (t >> 6)),
						e.push(128 | (63 & t)));
				  } else {
					if (255 === t) return void e.push(0);
					t > 127 && (t = 127), e.push(t);
				  }
				}
				function n(e, t) {
				  if (r._vt300Mouse) {
					(e &= 3), (t.x -= 32), (t.y -= 32);
					var i = h.C0.ESC + "[24";
					if (0 === e) i += "1";
					else if (1 === e) i += "3";
					else if (2 === e) i += "5";
					else {
					  if (3 === e) return;
					  i += "0";
					}
					return (
					  (i += "~[" + t.x + "," + t.y + "]\r"), void r.handler(i)
					);
				  }
				  if (r._decLocator)
					return (
					  (e &= 3),
					  (t.x -= 32),
					  (t.y -= 32),
					  0 === e
						? (e = 2)
						: 1 === e
						  ? (e = 4)
						  : 2 === e
							? (e = 6)
							: 3 === e && (e = 3),
					  void r.handler(
						h.C0.ESC +
						  "[" +
						  e +
						  ";" +
						  (3 === e ? 4 : 0) +
						  ";" +
						  t.y +
						  ";" +
						  t.x +
						  ";" +
						  t.page || "0&w",
					  )
					);
				  if (r.urxvtMouse)
					return (
					  (t.x -= 32),
					  (t.y -= 32),
					  t.x++,
					  t.y++,
					  void r.handler(
						h.C0.ESC + "[" + e + ";" + t.x + ";" + t.y + "M",
					  )
					);
				  if (r.sgrMouse)
					return (
					  (t.x -= 32),
					  (t.y -= 32),
					  void r.handler(
						h.C0.ESC +
						  "[<" +
						  ((3 == (3 & e) ? -4 & e : e) - 32) +
						  ";" +
						  t.x +
						  ";" +
						  t.y +
						  (3 == (3 & e) ? "m" : "M"),
					  )
					);
				  var s = [];
				  o(s, e),
					o(s, t.x),
					o(s, t.y),
					r.handler(
					  h.C0.ESC + "[M" + String.fromCharCode.apply(String, s),
					);
				}
				this.register(
				  m.addDisposableDomListener(t, "mousedown", function (t) {
					if (
					  (t.preventDefault(),
					  e.focus(),
					  e.mouseEvents &&
						!e.selectionManager.shouldForceSelection(t))
					) {
					  if ((s(t), e.vt200Mouse))
						return (t.overrideType = "mouseup"), s(t), e.cancel(t);
					  var o;
					  e.normalMouse &&
						((o = function (t) {
						  var s, o, a;
						  e.normalMouse &&
							((s = t),
							(o = i),
							(a = r.mouseHelper.getRawByteCoords(
							  s,
							  r.screenElement,
							  r.charMeasure,
							  r.options.lineHeight,
							  r.cols,
							  r.rows,
							)) && n((o += 32), a));
						}),
						e._document.addEventListener("mousemove", o));
					  var a = function (t) {
						return (
						  e.normalMouse && !e.x10Mouse && s(t),
						  o &&
							(e._document.removeEventListener("mousemove", o),
							(o = null)),
						  e._document.removeEventListener("mouseup", a),
						  e.cancel(t)
						);
					  };
					  return (
						e._document.addEventListener("mouseup", a), e.cancel(t)
					  );
					}
				  }),
				),
				  this.register(
					m.addDisposableDomListener(t, "wheel", function (t) {
					  if (e.mouseEvents)
						e.x10Mouse ||
						  e._vt300Mouse ||
						  e._decLocator ||
						  (s(t), t.preventDefault());
					  else if (!e.buffer.hasScrollback) {
						var r = e.viewport.getLinesScrolled(t);
						if (0 === r) return;
						for (
						  var i =
							  h.C0.ESC +
							  (e.applicationCursor ? "O" : "[") +
							  (t.deltaY < 0 ? "A" : "B"),
							o = "",
							n = 0;
						  n < Math.abs(r);
						  n++
						)
						  o += i;
						e.handler(o);
					  }
					}),
				  ),
				  this.register(
					m.addDisposableDomListener(t, "wheel", function (t) {
					  if (!e.mouseEvents)
						return e.viewport.onWheel(t), e.cancel(t);
					}),
				  ),
				  this.register(
					m.addDisposableDomListener(t, "touchstart", function (t) {
					  if (!e.mouseEvents)
						return e.viewport.onTouchStart(t), e.cancel(t);
					}),
				  ),
				  this.register(
					m.addDisposableDomListener(t, "touchmove", function (t) {
					  if (!e.mouseEvents)
						return e.viewport.onTouchMove(t), e.cancel(t);
					}),
				  );
			  }),
			  (o.prototype.refresh = function (e, t) {
				this.renderer && this.renderer.refreshRows(e, t);
			  }),
			  (o.prototype._queueLinkification = function (e, t) {
				this.linkifier && this.linkifier.linkifyRows(e, t);
			  }),
			  (o.prototype.updateCursorStyle = function (e) {
				this.selectionManager &&
				this.selectionManager.shouldColumnSelect(e)
				  ? this.element.classList.add("xterm-cursor-crosshair")
				  : this.element.classList.remove("xterm-cursor-crosshair");
			  }),
			  (o.prototype.showCursor = function () {
				this.cursorState ||
				  ((this.cursorState = 1),
				  this.refresh(this.buffer.y, this.buffer.y));
			  }),
			  (o.prototype.scroll = function (e) {
				var t = E.BufferLine.blankLine(this.cols, i.DEFAULT_ATTR, e),
				  r = this.buffer.ybase + this.buffer.scrollTop,
				  s = this.buffer.ybase + this.buffer.scrollBottom;
				if (0 === this.buffer.scrollTop) {
				  var o =
					this.buffer.lines.length === this.buffer.lines.maxLength;
				  s === this.buffer.lines.length - 1
					? this.buffer.lines.push(t)
					: this.buffer.lines.splice(s + 1, 0, t),
					o
					  ? this._userScrolling &&
						(this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0))
					  : (this.buffer.ybase++,
						this._userScrolling || this.buffer.ydisp++);
				} else {
				  var n = s - r + 1;
				  this.buffer.lines.shiftElements(r + 1, n - 1, -1),
					this.buffer.lines.set(s, t);
				}
				this._userScrolling || (this.buffer.ydisp = this.buffer.ybase),
				  this.updateRange(this.buffer.scrollTop),
				  this.updateRange(this.buffer.scrollBottom),
				  this.emit("scroll", this.buffer.ydisp);
			  }),
			  (o.prototype.scrollLines = function (e, t) {
				if (e < 0) {
				  if (0 === this.buffer.ydisp) return;
				  this._userScrolling = !0;
				} else
				  e + this.buffer.ydisp >= this.buffer.ybase &&
					(this._userScrolling = !1);
				var r = this.buffer.ydisp;
				(this.buffer.ydisp = Math.max(
				  Math.min(this.buffer.ydisp + e, this.buffer.ybase),
				  0,
				)),
				  r !== this.buffer.ydisp &&
					(t || this.emit("scroll", this.buffer.ydisp),
					this.refresh(0, this.rows - 1));
			  }),
			  (o.prototype.scrollPages = function (e) {
				this.scrollLines(e * (this.rows - 1));
			  }),
			  (o.prototype.scrollToTop = function () {
				this.scrollLines(-this.buffer.ydisp);
			  }),
			  (o.prototype.scrollToBottom = function () {
				this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
			  }),
			  (o.prototype.scrollToLine = function (e) {
				var t = e - this.buffer.ydisp;
				0 !== t && this.scrollLines(t);
			  }),
			  (o.prototype.write = function (e) {
				var t = this;
				this._isDisposed ||
				  (e &&
					(this.writeBuffer.push(e),
					this.options.useFlowControl &&
					  !this._xoffSentToCatchUp &&
					  this.writeBuffer.length >= T &&
					  (this.handler(h.C0.DC3), (this._xoffSentToCatchUp = !0)),
					!this._writeInProgress &&
					  this.writeBuffer.length > 0 &&
					  ((this._writeInProgress = !0),
					  setTimeout(function () {
						t._innerWrite();
					  }))));
			  }),
			  (o.prototype._innerWrite = function () {
				var e = this;
				this._isDisposed && (this.writeBuffer = []);
				for (var t = this.writeBuffer.splice(0, A); t.length > 0; ) {
				  var r = t.shift();
				  this._xoffSentToCatchUp &&
					0 === t.length &&
					0 === this.writeBuffer.length &&
					(this.handler(h.C0.DC1), (this._xoffSentToCatchUp = !1)),
					(this._refreshStart = this.buffer.y),
					(this._refreshEnd = this.buffer.y),
					this._inputHandler.parse(r),
					this.updateRange(this.buffer.y),
					this.refresh(this._refreshStart, this._refreshEnd);
				}
				this.writeBuffer.length > 0
				  ? setTimeout(function () {
					  return e._innerWrite();
					}, 0)
				  : (this._writeInProgress = !1);
			  }),
			  (o.prototype.writeln = function (e) {
				this.write(e + "\r\n");
			  }),
			  (o.prototype.attachCustomKeyEventHandler = function (e) {
				this._customKeyEventHandler = e;
			  }),
			  (o.prototype.registerLinkMatcher = function (e, t, r) {
				var i = this.linkifier.registerLinkMatcher(e, t, r);
				return this.refresh(0, this.rows - 1), i;
			  }),
			  (o.prototype.deregisterLinkMatcher = function (e) {
				this.linkifier.deregisterLinkMatcher(e) &&
				  this.refresh(0, this.rows - 1);
			  }),
			  (o.prototype.registerCharacterJoiner = function (e) {
				var t = this.renderer.registerCharacterJoiner(e);
				return this.refresh(0, this.rows - 1), t;
			  }),
			  (o.prototype.deregisterCharacterJoiner = function (e) {
				this.renderer.deregisterCharacterJoiner(e) &&
				  this.refresh(0, this.rows - 1);
			  }),
			  Object.defineProperty(o.prototype, "markers", {
				get: function () {
				  return this.buffer.markers;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (o.prototype.addMarker = function (e) {
				if (this.buffer === this.buffers.normal)
				  return this.buffer.addMarker(
					this.buffer.ybase + this.buffer.y + e,
				  );
			  }),
			  (o.prototype.hasSelection = function () {
				return (
				  !!this.selectionManager && this.selectionManager.hasSelection
				);
			  }),
			  (o.prototype.getSelection = function () {
				return this.selectionManager
				  ? this.selectionManager.selectionText
				  : "";
			  }),
			  (o.prototype.clearSelection = function () {
				this.selectionManager && this.selectionManager.clearSelection();
			  }),
			  (o.prototype.selectAll = function () {
				this.selectionManager && this.selectionManager.selectAll();
			  }),
			  (o.prototype.selectLines = function (e, t) {
				this.selectionManager &&
				  this.selectionManager.selectLines(e, t);
			  }),
			  (o.prototype._keyDown = function (e) {
				if (
				  this._customKeyEventHandler &&
				  !1 === this._customKeyEventHandler(e)
				)
				  return !1;
				if (!this._compositionHelper.keydown(e))
				  return (
					this.buffer.ybase !== this.buffer.ydisp &&
					  this.scrollToBottom(),
					!1
				  );
				var t = x.evaluateKeyboardEvent(
				  e,
				  this.applicationCursor,
				  this.browser.isMac,
				  this.options.macOptionIsMeta,
				);
				if (
				  (this.updateCursorStyle(e),
				  t.type === D.KeyboardResultType.PAGE_DOWN ||
					t.type === D.KeyboardResultType.PAGE_UP)
				) {
				  var r = this.rows - 1;
				  return (
					this.scrollLines(
					  t.type === D.KeyboardResultType.PAGE_UP ? -r : r,
					),
					this.cancel(e, !0)
				  );
				}
				return (
				  t.type === D.KeyboardResultType.SELECT_ALL &&
					this.selectAll(),
				  !!this._isThirdLevelShift(this.browser, e) ||
					(t.cancel && this.cancel(e, !0),
					!t.key ||
					  (this.emit("keydown", e),
					  this.emit("key", t.key, e),
					  this.showCursor(),
					  this.handler(t.key),
					  this.cancel(e, !0)))
				);
			  }),
			  (o.prototype._isThirdLevelShift = function (e, t) {
				var r =
				  (e.isMac &&
					!this.options.macOptionIsMeta &&
					t.altKey &&
					!t.ctrlKey &&
					!t.metaKey) ||
				  (e.isMSWindows && t.altKey && t.ctrlKey && !t.metaKey);
				return "keypress" === t.type
				  ? r
				  : r && (!t.keyCode || t.keyCode > 47);
			  }),
			  (o.prototype.setgLevel = function (e) {
				(this.glevel = e), (this.charset = this.charsets[e]);
			  }),
			  (o.prototype.setgCharset = function (e, t) {
				(this.charsets[e] = t), this.glevel === e && (this.charset = t);
			  }),
			  (o.prototype._keyUp = function (e) {
				this.updateCursorStyle(e);
			  }),
			  (o.prototype._keyPress = function (e) {
				var t;
				if (
				  this._customKeyEventHandler &&
				  !1 === this._customKeyEventHandler(e)
				)
				  return !1;
				if ((this.cancel(e), e.charCode)) t = e.charCode;
				else if (null === e.which || void 0 === e.which) t = e.keyCode;
				else {
				  if (0 === e.which || 0 === e.charCode) return !1;
				  t = e.which;
				}
				return (
				  !(
					!t ||
					((e.altKey || e.ctrlKey || e.metaKey) &&
					  !this._isThirdLevelShift(this.browser, e))
				  ) &&
				  ((t = String.fromCharCode(t)),
				  this.emit("keypress", t, e),
				  this.emit("key", t, e),
				  this.showCursor(),
				  this.handler(t),
				  !0)
				);
			  }),
			  (o.prototype.bell = function () {
				var e = this;
				this.emit("bell"),
				  this._soundBell() && this.soundManager.playBellSound(),
				  this._visualBell() &&
					(this.element.classList.add("visual-bell-active"),
					clearTimeout(this._visualBellTimer),
					(this._visualBellTimer = window.setTimeout(function () {
					  e.element.classList.remove("visual-bell-active");
					}, 200)));
			  }),
			  (o.prototype.log = function (e, t) {
				this.options.debug &&
				  this._context.console &&
				  this._context.console.log &&
				  this._context.console.log(e, t);
			  }),
			  (o.prototype.error = function (e, t) {
				this.options.debug &&
				  this._context.console &&
				  this._context.console.error &&
				  this._context.console.error(e, t);
			  }),
			  (o.prototype.resize = function (e, t) {
				isNaN(e) ||
				  isNaN(t) ||
				  (e !== this.cols || t !== this.rows
					? (e < 1 && (e = 1),
					  t < 1 && (t = 1),
					  this.buffers.resize(e, t),
					  (this.cols = e),
					  (this.rows = t),
					  this.buffers.setupTabStops(this.cols),
					  this.charMeasure &&
						this.charMeasure.measure(this.options),
					  this.refresh(0, this.rows - 1),
					  this.emit("resize", { cols: e, rows: t }))
					: !this.charMeasure ||
					  (this.charMeasure.width && this.charMeasure.height) ||
					  this.charMeasure.measure(this.options));
			  }),
			  (o.prototype.updateRange = function (e) {
				e < this._refreshStart && (this._refreshStart = e),
				  e > this._refreshEnd && (this._refreshEnd = e);
			  }),
			  (o.prototype.maxRange = function () {
				(this._refreshStart = 0), (this._refreshEnd = this.rows - 1);
			  }),
			  (o.prototype.clear = function () {
				if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
				  this.buffer.lines.set(
					0,
					this.buffer.lines.get(this.buffer.ybase + this.buffer.y),
				  ),
					(this.buffer.lines.length = 1),
					(this.buffer.ydisp = 0),
					(this.buffer.ybase = 0),
					(this.buffer.y = 0);
				  for (var e = 1; e < this.rows; e++)
					this.buffer.lines.push(
					  E.BufferLine.blankLine(this.cols, i.DEFAULT_ATTR),
					);
				  this.refresh(0, this.rows - 1),
					this.emit("scroll", this.buffer.ydisp);
				}
			  }),
			  (o.prototype.ch = function (e) {
				return e
				  ? [
					  this.eraseAttr(),
					  i.NULL_CELL_CHAR,
					  i.NULL_CELL_WIDTH,
					  i.NULL_CELL_CODE,
					]
				  : [
					  i.DEFAULT_ATTR,
					  i.NULL_CELL_CHAR,
					  i.NULL_CELL_WIDTH,
					  i.NULL_CELL_CODE,
					];
			  }),
			  (o.prototype.is = function (e) {
				return 0 === (this.options.termName + "").indexOf(e);
			  }),
			  (o.prototype.handler = function (e) {
				this.options.disableStdin ||
				  (this.selectionManager &&
					this.selectionManager.hasSelection &&
					this.selectionManager.clearSelection(),
				  this.buffer.ybase !== this.buffer.ydisp &&
					this.scrollToBottom(),
				  this.emit("data", e));
			  }),
			  (o.prototype.handleTitle = function (e) {
				this.emit("title", e);
			  }),
			  (o.prototype.index = function () {
				this.buffer.y++,
				  this.buffer.y > this.buffer.scrollBottom &&
					(this.buffer.y--, this.scroll()),
				  this.buffer.x >= this.cols && this.buffer.x--;
			  }),
			  (o.prototype.reverseIndex = function () {
				if (this.buffer.y === this.buffer.scrollTop) {
				  var e = this.buffer.scrollBottom - this.buffer.scrollTop;
				  this.buffer.lines.shiftElements(
					this.buffer.y + this.buffer.ybase,
					e,
					1,
				  ),
					this.buffer.lines.set(
					  this.buffer.y + this.buffer.ybase,
					  E.BufferLine.blankLine(this.cols, this.eraseAttr()),
					),
					this.updateRange(this.buffer.scrollTop),
					this.updateRange(this.buffer.scrollBottom);
				} else this.buffer.y--;
			  }),
			  (o.prototype.reset = function () {
				(this.options.rows = this.rows),
				  (this.options.cols = this.cols);
				var e = this._customKeyEventHandler,
				  t = this._inputHandler,
				  r = this.cursorState;
				this._setup(),
				  (this._customKeyEventHandler = e),
				  (this._inputHandler = t),
				  (this.cursorState = r),
				  this.refresh(0, this.rows - 1),
				  this.viewport && this.viewport.syncScrollArea();
			  }),
			  (o.prototype.tabSet = function () {
				this.buffer.tabs[this.buffer.x] = !0;
			  }),
			  (o.prototype.cancel = function (e, t) {
				if (this.options.cancelEvents || t)
				  return e.preventDefault(), e.stopPropagation(), !1;
			  }),
			  (o.prototype.matchColor = function (e, t, r) {
				var i = (e << 16) | (t << 8) | r;
				if (null !== O[i] && void 0 !== O[i]) return O[i];
				for (
				  var s, o, n = 1 / 0, a = -1, h = 0;
				  h < w.DEFAULT_ANSI_COLORS.length;
				  h++
				) {
				  if (
					0 ===
					(o = q(
					  e,
					  t,
					  r,
					  (s = w.DEFAULT_ANSI_COLORS[h].rgba) >>> 24,
					  (s >>> 16) & 255,
					  (s >>> 8) & 255,
					))
				  ) {
					a = h;
					break;
				  }
				  o < n && ((n = o), (a = h));
				}
				return (O[i] = a);
			  }),
			  (o.prototype._visualBell = function () {
				return !1;
			  }),
			  (o.prototype._soundBell = function () {
				return "sound" === this.options.bellStyle;
			  }),
			  o
			);
		  })(o.EventEmitter);
		function K(e) {
		  return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode;
		}
		exports.Terminal = R;
		var O = {};
		function q(e, t, r, i, s, o) {
		  return (
			Math.pow(30 * (e - i), 2) +
			Math.pow(59 * (t - s), 2) +
			Math.pow(11 * (r - o), 2)
		  );
		}
	  },
	  {
		"./BufferSet": "cxFs",
		"./Buffer": "nJkY",
		"./CompositionHelper": "ZmpO",
		"./common/EventEmitter": "lW8c",
		"./Viewport": "8hXU",
		"./handlers/Clipboard": "3c3X",
		"./common/data/EscapeSequences": "xnQp",
		"./InputHandler": "uvkR",
		"./renderer/Renderer": "gvu2",
		"./Linkifier": "ijp2",
		"./SelectionManager": "TOt/",
		"./ui/CharMeasure": "fEPo",
		"./shared/utils/Browser": "/tmL",
		"./ui/Lifecycle": "0SNy",
		"./Strings": "LZis",
		"./utils/MouseHelper": "ueEb",
		"./utils/Clone": "nSfh",
		"./SoundManager": "OPxE",
		"./renderer/ColorManager": "9RWO",
		"./ui/MouseZoneManager": "w6zZ",
		"./AccessibilityManager": "zPBq",
		"./ui/ScreenDprMonitor": "9pHa",
		"./renderer/atlas/CharAtlasCache": "U7kw",
		"./renderer/dom/DomRenderer": "sQSM",
		"./core/input/Keyboard": "mtWM",
		"./core/Types": "PCbn",
		"./BufferLine": "dDZ9",
	  },
	],
	nilJ: [
	  function (require, module, exports) {
		"use strict";
		var e =
		  (this && this.__importStar) ||
		  function (e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
			  for (var o in e)
				Object.hasOwnProperty.call(e, o) && (t[o] = e[o]);
			return (t.default = e), t;
		  };
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var t = require("../Terminal"),
		  o = e(require("../Strings")),
		  r = (function () {
			function e(e) {
			  this._core = new t.Terminal(e);
			}
			return (
			  Object.defineProperty(e.prototype, "element", {
				get: function () {
				  return this._core.element;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(e.prototype, "textarea", {
				get: function () {
				  return this._core.textarea;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(e.prototype, "rows", {
				get: function () {
				  return this._core.rows;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(e.prototype, "cols", {
				get: function () {
				  return this._core.cols;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  Object.defineProperty(e.prototype, "markers", {
				get: function () {
				  return this._core.markers;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  (e.prototype.blur = function () {
				this._core.blur();
			  }),
			  (e.prototype.focus = function () {
				this._core.focus();
			  }),
			  (e.prototype.on = function (e, t) {
				this._core.on(e, t);
			  }),
			  (e.prototype.off = function (e, t) {
				this._core.off(e, t);
			  }),
			  (e.prototype.emit = function (e, t) {
				this._core.emit(e, t);
			  }),
			  (e.prototype.addDisposableListener = function (e, t) {
				return this._core.addDisposableListener(e, t);
			  }),
			  (e.prototype.resize = function (e, t) {
				this._core.resize(e, t);
			  }),
			  (e.prototype.writeln = function (e) {
				this._core.writeln(e);
			  }),
			  (e.prototype.open = function (e) {
				this._core.open(e);
			  }),
			  (e.prototype.attachCustomKeyEventHandler = function (e) {
				this._core.attachCustomKeyEventHandler(e);
			  }),
			  (e.prototype.registerLinkMatcher = function (e, t, o) {
				return this._core.registerLinkMatcher(e, t, o);
			  }),
			  (e.prototype.deregisterLinkMatcher = function (e) {
				this._core.deregisterLinkMatcher(e);
			  }),
			  (e.prototype.registerCharacterJoiner = function (e) {
				return this._core.registerCharacterJoiner(e);
			  }),
			  (e.prototype.deregisterCharacterJoiner = function (e) {
				this._core.deregisterCharacterJoiner(e);
			  }),
			  (e.prototype.addMarker = function (e) {
				return this._core.addMarker(e);
			  }),
			  (e.prototype.hasSelection = function () {
				return this._core.hasSelection();
			  }),
			  (e.prototype.getSelection = function () {
				return this._core.getSelection();
			  }),
			  (e.prototype.clearSelection = function () {
				this._core.clearSelection();
			  }),
			  (e.prototype.selectAll = function () {
				this._core.selectAll();
			  }),
			  (e.prototype.selectLines = function (e, t) {
				this._core.selectLines(e, t);
			  }),
			  (e.prototype.dispose = function () {
				this._core.dispose();
			  }),
			  (e.prototype.destroy = function () {
				this._core.destroy();
			  }),
			  (e.prototype.scrollLines = function (e) {
				this._core.scrollLines(e);
			  }),
			  (e.prototype.scrollPages = function (e) {
				this._core.scrollPages(e);
			  }),
			  (e.prototype.scrollToTop = function () {
				this._core.scrollToTop();
			  }),
			  (e.prototype.scrollToBottom = function () {
				this._core.scrollToBottom();
			  }),
			  (e.prototype.scrollToLine = function (e) {
				this._core.scrollToLine(e);
			  }),
			  (e.prototype.clear = function () {
				this._core.clear();
			  }),
			  (e.prototype.write = function (e) {
				this._core.write(e);
			  }),
			  (e.prototype.getOption = function (e) {
				return this._core.getOption(e);
			  }),
			  (e.prototype.setOption = function (e, t) {
				this._core.setOption(e, t);
			  }),
			  (e.prototype.refresh = function (e, t) {
				this._core.refresh(e, t);
			  }),
			  (e.prototype.reset = function () {
				this._core.reset();
			  }),
			  (e.applyAddon = function (t) {
				t.apply(e);
			  }),
			  Object.defineProperty(e, "strings", {
				get: function () {
				  return o;
				},
				enumerable: !0,
				configurable: !0,
			  }),
			  e
			);
		  })();
		exports.Terminal = r;
	  },
	  { "../Terminal": "Ns+I", "../Strings": "LZis" },
	],
	xWgB: [
	  function (require, module, exports) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var e = require("./public/Terminal");
		module.exports = e.Terminal;
	  },
	  { "./public/Terminal": "nilJ" },
	],
	"h/VH": [
	  function (require, module, exports) {
		var o = require("../core-js/symbol/iterator"),
		  t = require("../core-js/symbol");
		function r(e) {
		  return (r =
			"function" == typeof t && "symbol" == typeof o
			  ? function (o) {
				  return typeof o;
				}
			  : function (o) {
				  return o &&
					"function" == typeof t &&
					o.constructor === t &&
					o !== t.prototype
					? "symbol"
					: typeof o;
				})(e);
		}
		function e(n) {
		  return (
			"function" == typeof t && "symbol" === r(o)
			  ? (module.exports = e =
				  function (o) {
					return r(o);
				  })
			  : (module.exports = e =
				  function (o) {
					return o &&
					  "function" == typeof t &&
					  o.constructor === t &&
					  o !== t.prototype
					  ? "symbol"
					  : r(o);
				  }),
			e(n)
		  );
		}
		module.exports = e;
	  },
	  { "../core-js/symbol/iterator": "573u", "../core-js/symbol": "mr6k" },
	],
	pTUZ: [
	  function (require, module, exports) {
		"use strict";
		var e = r(require("@babel/runtime-corejs2/core-js/json/stringify")),
		  t = r(require("@babel/runtime-corejs2/helpers/typeof"));
		function r(e) {
		  return e && e.__esModule ? e : { default: e };
		}
		function a(r, a, o, s) {
		  var f,
			u = r;
		  function i(e, t) {
			s ? u.__pushToBuffer(e || t) : u.write(e || t);
		  }
		  (o = void 0 === o || o),
			(u.__socket = a),
			(u.__flushBuffer = function () {
			  u.write(u.__attachSocketBuffer), (u.__attachSocketBuffer = null);
			}),
			(u.__pushToBuffer = function (e) {
			  u.__attachSocketBuffer
				? (u.__attachSocketBuffer += e)
				: ((u.__attachSocketBuffer = e),
				  setTimeout(u.__flushBuffer, 10));
			}),
			(u.__getMessage = function (e) {
			  if ("object" === (0, t.default)(e.data))
				if (
				  (f || (f = new TextDecoder()), e.data instanceof ArrayBuffer)
				)
				  i(f.decode(e.data));
				else {
				  var r = new FileReader();
				  r.addEventListener("load", function () {
					i(f.decode(r.result));
				  }),
					r.readAsArrayBuffer(e.data);
				}
			  else {
				if ("string" != typeof e.data)
				  throw Error(
					'Cannot handle "' +
					  (0, t.default)(e.data) +
					  '" websocket message.',
				  );
				i(e.data);
			  }
			}),
			(u.__sendData = function (t) {
			  a.send((0, e.default)(["stdin", t]));
			}),
			(u.__setSize = function (t) {
			  a.send((0, e.default)(["set_size", t.rows, t.cols]));
			}),
			a.addEventListener("message", u.__getMessage),
			o && u.on("data", u.__sendData),
			u.on("resize", u.__setSize),
			a.addEventListener("close", function () {
			  return n(u, a);
			}),
			a.addEventListener("error", function () {
			  return n(u, a);
			});
		}
		function n(e, t) {
		  var r = e;
		  r.off("data", r.__sendData),
			(t = void 0 === t ? r.__socket : t) &&
			  t.removeEventListener("message", r.__getMessage),
			delete r.__socket;
		}
		function o(e) {
		  (e.prototype.terminadoAttach = function (e, t, r) {
			return a(this, e, t, r);
		  }),
			(e.prototype.terminadoDetach = function (e) {
			  return n(this, e);
			});
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.terminadoAttach = a),
		  (exports.terminadoDetach = n),
		  (exports.apply = o);
	  },
	  {
		"@babel/runtime-corejs2/core-js/json/stringify": "E09K",
		"@babel/runtime-corejs2/helpers/typeof": "h/VH",
	  },
	],
	CS9K: [
	  function (require, module, exports) {
		"use strict";
		function e(e, t) {
		  var l;
		  (l =
			void 0 === t
			  ? e.element.classList.contains("fullscreen")
				? "remove"
				: "add"
			  : t
				? "add"
				: "remove"),
			e.element.classList[l]("fullscreen");
		}
		function t(t) {
		  t.prototype.toggleFullScreen = function (t) {
			e(this, t);
		  };
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.toggleFullScreen = e),
		  (exports.apply = t);
	  },
	  {},
	],
	ISf0: [
	  function (require, module, exports) {
		"use strict";
		function e(e) {
		  if (!e.element.parentElement) return null;
		  var t = window.getComputedStyle(e.element.parentElement),
			r = parseInt(t.getPropertyValue("height")),
			o = Math.max(0, parseInt(t.getPropertyValue("width"))),
			n = window.getComputedStyle(e.element),
			p =
			  r -
			  (parseInt(n.getPropertyValue("padding-top")) +
				parseInt(n.getPropertyValue("padding-bottom"))),
			l =
			  o -
			  (parseInt(n.getPropertyValue("padding-right")) +
				parseInt(n.getPropertyValue("padding-left"))) -
			  e._core.viewport.scrollBarWidth;
		  return {
			cols: Math.floor(l / e._core.renderer.dimensions.actualCellWidth),
			rows: Math.floor(p / e._core.renderer.dimensions.actualCellHeight),
		  };
		}
		function t(t) {
		  var r = e(t);
		  r &&
			((t.rows === r.rows && t.cols === r.cols) ||
			  (t._core.renderer.clear(), t.resize(r.cols, r.rows)));
		}
		function r(r) {
		  (r.prototype.proposeGeometry = function () {
			return e(this);
		  }),
			(r.prototype.fit = function () {
			  t(this);
			});
		}
		Object.defineProperty(exports, "__esModule", { value: !0 }),
		  (exports.proposeGeometry = e),
		  (exports.fit = t),
		  (exports.apply = r);
	  },
	  {},
	],
	QVnC: [
	  function (require, module, exports) {
		var global = arguments[3];
		var t = arguments[3];
		!(function (t) {
		  "use strict";
		  var r,
			e = Object.prototype,
			n = e.hasOwnProperty,
			o = "function" == typeof Symbol ? Symbol : {},
			i = o.iterator || "@@iterator",
			a = o.asyncIterator || "@@asyncIterator",
			c = o.toStringTag || "@@toStringTag",
			u = "object" == typeof module,
			h = t.regeneratorRuntime;
		  if (h) u && (module.exports = h);
		  else {
			(h = t.regeneratorRuntime = u ? module.exports : {}).wrap = w;
			var f = "suspendedStart",
			  s = "suspendedYield",
			  l = "executing",
			  p = "completed",
			  y = {},
			  v = {};
			v[i] = function () {
			  return this;
			};
			var d = Object.getPrototypeOf,
			  g = d && d(d(P([])));
			g && g !== e && n.call(g, i) && (v = g);
			var m = (b.prototype = x.prototype = Object.create(v));
			(E.prototype = m.constructor = b),
			  (b.constructor = E),
			  (b[c] = E.displayName = "GeneratorFunction"),
			  (h.isGeneratorFunction = function (t) {
				var r = "function" == typeof t && t.constructor;
				return (
				  !!r &&
				  (r === E || "GeneratorFunction" === (r.displayName || r.name))
				);
			  }),
			  (h.mark = function (t) {
				return (
				  Object.setPrototypeOf
					? Object.setPrototypeOf(t, b)
					: ((t.__proto__ = b),
					  c in t || (t[c] = "GeneratorFunction")),
				  (t.prototype = Object.create(m)),
				  t
				);
			  }),
			  (h.awrap = function (t) {
				return { __await: t };
			  }),
			  _(j.prototype),
			  (j.prototype[a] = function () {
				return this;
			  }),
			  (h.AsyncIterator = j),
			  (h.async = function (t, r, e, n) {
				var o = new j(w(t, r, e, n));
				return h.isGeneratorFunction(r)
				  ? o
				  : o.next().then(function (t) {
					  return t.done ? t.value : o.next();
					});
			  }),
			  _(m),
			  (m[c] = "Generator"),
			  (m[i] = function () {
				return this;
			  }),
			  (m.toString = function () {
				return "[object Generator]";
			  }),
			  (h.keys = function (t) {
				var r = [];
				for (var e in t) r.push(e);
				return (
				  r.reverse(),
				  function e() {
					for (; r.length; ) {
					  var n = r.pop();
					  if (n in t) return (e.value = n), (e.done = !1), e;
					}
					return (e.done = !0), e;
				  }
				);
			  }),
			  (h.values = P),
			  (N.prototype = {
				constructor: N,
				reset: function (t) {
				  if (
					((this.prev = 0),
					(this.next = 0),
					(this.sent = this._sent = r),
					(this.done = !1),
					(this.delegate = null),
					(this.method = "next"),
					(this.arg = r),
					this.tryEntries.forEach(G),
					!t)
				  )
					for (var e in this)
					  "t" === e.charAt(0) &&
						n.call(this, e) &&
						!isNaN(+e.slice(1)) &&
						(this[e] = r);
				},
				stop: function () {
				  this.done = !0;
				  var t = this.tryEntries[0].completion;
				  if ("throw" === t.type) throw t.arg;
				  return this.rval;
				},
				dispatchException: function (t) {
				  if (this.done) throw t;
				  var e = this;
				  function o(n, o) {
					return (
					  (c.type = "throw"),
					  (c.arg = t),
					  (e.next = n),
					  o && ((e.method = "next"), (e.arg = r)),
					  !!o
					);
				  }
				  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var a = this.tryEntries[i],
					  c = a.completion;
					if ("root" === a.tryLoc) return o("end");
					if (a.tryLoc <= this.prev) {
					  var u = n.call(a, "catchLoc"),
						h = n.call(a, "finallyLoc");
					  if (u && h) {
						if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
						if (this.prev < a.finallyLoc) return o(a.finallyLoc);
					  } else if (u) {
						if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
					  } else {
						if (!h)
						  throw new Error(
							"try statement without catch or finally",
						  );
						if (this.prev < a.finallyLoc) return o(a.finallyLoc);
					  }
					}
				  }
				},
				abrupt: function (t, r) {
				  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var o = this.tryEntries[e];
					if (
					  o.tryLoc <= this.prev &&
					  n.call(o, "finallyLoc") &&
					  this.prev < o.finallyLoc
					) {
					  var i = o;
					  break;
					}
				  }
				  i &&
					("break" === t || "continue" === t) &&
					i.tryLoc <= r &&
					r <= i.finallyLoc &&
					(i = null);
				  var a = i ? i.completion : {};
				  return (
					(a.type = t),
					(a.arg = r),
					i
					  ? ((this.method = "next"), (this.next = i.finallyLoc), y)
					  : this.complete(a)
				  );
				},
				complete: function (t, r) {
				  if ("throw" === t.type) throw t.arg;
				  return (
					"break" === t.type || "continue" === t.type
					  ? (this.next = t.arg)
					  : "return" === t.type
						? ((this.rval = this.arg = t.arg),
						  (this.method = "return"),
						  (this.next = "end"))
						: "normal" === t.type && r && (this.next = r),
					y
				  );
				},
				finish: function (t) {
				  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var e = this.tryEntries[r];
					if (e.finallyLoc === t)
					  return this.complete(e.completion, e.afterLoc), G(e), y;
				  }
				},
				catch: function (t) {
				  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var e = this.tryEntries[r];
					if (e.tryLoc === t) {
					  var n = e.completion;
					  if ("throw" === n.type) {
						var o = n.arg;
						G(e);
					  }
					  return o;
					}
				  }
				  throw new Error("illegal catch attempt");
				},
				delegateYield: function (t, e, n) {
				  return (
					(this.delegate = {
					  iterator: P(t),
					  resultName: e,
					  nextLoc: n,
					}),
					"next" === this.method && (this.arg = r),
					y
				  );
				},
			  });
		  }
		  function w(t, r, e, n) {
			var o = r && r.prototype instanceof x ? r : x,
			  i = Object.create(o.prototype),
			  a = new N(n || []);
			return (
			  (i._invoke = (function (t, r, e) {
				var n = f;
				return function (o, i) {
				  if (n === l) throw new Error("Generator is already running");
				  if (n === p) {
					if ("throw" === o) throw i;
					return F();
				  }
				  for (e.method = o, e.arg = i; ; ) {
					var a = e.delegate;
					if (a) {
					  var c = O(a, e);
					  if (c) {
						if (c === y) continue;
						return c;
					  }
					}
					if ("next" === e.method) e.sent = e._sent = e.arg;
					else if ("throw" === e.method) {
					  if (n === f) throw ((n = p), e.arg);
					  e.dispatchException(e.arg);
					} else "return" === e.method && e.abrupt("return", e.arg);
					n = l;
					var u = L(t, r, e);
					if ("normal" === u.type) {
					  if (((n = e.done ? p : s), u.arg === y)) continue;
					  return { value: u.arg, done: e.done };
					}
					"throw" === u.type &&
					  ((n = p), (e.method = "throw"), (e.arg = u.arg));
				  }
				};
			  })(t, e, a)),
			  i
			);
		  }
		  function L(t, r, e) {
			try {
			  return { type: "normal", arg: t.call(r, e) };
			} catch (n) {
			  return { type: "throw", arg: n };
			}
		  }
		  function x() {}
		  function E() {}
		  function b() {}
		  function _(t) {
			["next", "throw", "return"].forEach(function (r) {
			  t[r] = function (t) {
				return this._invoke(r, t);
			  };
			});
		  }
		  function j(t) {
			var r;
			this._invoke = function (e, o) {
			  function i() {
				return new Promise(function (r, i) {
				  !(function r(e, o, i, a) {
					var c = L(t[e], t, o);
					if ("throw" !== c.type) {
					  var u = c.arg,
						h = u.value;
					  return h && "object" == typeof h && n.call(h, "__await")
						? Promise.resolve(h.__await).then(
							function (t) {
							  r("next", t, i, a);
							},
							function (t) {
							  r("throw", t, i, a);
							},
						  )
						: Promise.resolve(h).then(
							function (t) {
							  (u.value = t), i(u);
							},
							function (t) {
							  return r("throw", t, i, a);
							},
						  );
					}
					a(c.arg);
				  })(e, o, r, i);
				});
			  }
			  return (r = r ? r.then(i, i) : i());
			};
		  }
		  function O(t, e) {
			var n = t.iterator[e.method];
			if (n === r) {
			  if (((e.delegate = null), "throw" === e.method)) {
				if (
				  t.iterator.return &&
				  ((e.method = "return"),
				  (e.arg = r),
				  O(t, e),
				  "throw" === e.method)
				)
				  return y;
				(e.method = "throw"),
				  (e.arg = new TypeError(
					"The iterator does not provide a 'throw' method",
				  ));
			  }
			  return y;
			}
			var o = L(n, t.iterator, e.arg);
			if ("throw" === o.type)
			  return (
				(e.method = "throw"), (e.arg = o.arg), (e.delegate = null), y
			  );
			var i = o.arg;
			return i
			  ? i.done
				? ((e[t.resultName] = i.value),
				  (e.next = t.nextLoc),
				  "return" !== e.method && ((e.method = "next"), (e.arg = r)),
				  (e.delegate = null),
				  y)
				: i
			  : ((e.method = "throw"),
				(e.arg = new TypeError("iterator result is not an object")),
				(e.delegate = null),
				y);
		  }
		  function k(t) {
			var r = { tryLoc: t[0] };
			1 in t && (r.catchLoc = t[1]),
			  2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
			  this.tryEntries.push(r);
		  }
		  function G(t) {
			var r = t.completion || {};
			(r.type = "normal"), delete r.arg, (t.completion = r);
		  }
		  function N(t) {
			(this.tryEntries = [{ tryLoc: "root" }]),
			  t.forEach(k, this),
			  this.reset(!0);
		  }
		  function P(t) {
			if (t) {
			  var e = t[i];
			  if (e) return e.call(t);
			  if ("function" == typeof t.next) return t;
			  if (!isNaN(t.length)) {
				var o = -1,
				  a = function e() {
					for (; ++o < t.length; )
					  if (n.call(t, o))
						return (e.value = t[o]), (e.done = !1), e;
					return (e.value = r), (e.done = !0), e;
				  };
				return (a.next = a);
			  }
			}
			return { next: F };
		  }
		  function F() {
			return { value: r, done: !0 };
		  }
		})(
		  (function () {
			return this || ("object" == typeof self && self);
		  })() || Function("return this")(),
		);
	  },
	  {},
	],
	QYzI: [
	  function (require, module, exports) {
		var e =
			(function () {
			  return this || ("object" == typeof self && self);
			})() || Function("return this")(),
		  r =
			e.regeneratorRuntime &&
			Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime") >= 0,
		  t = r && e.regeneratorRuntime;
		if (
		  ((e.regeneratorRuntime = void 0),
		  (module.exports = require("./runtime")),
		  r)
		)
		  e.regeneratorRuntime = t;
		else
		  try {
			delete e.regeneratorRuntime;
		  } catch (n) {
			e.regeneratorRuntime = void 0;
		  }
	  },
	  { "./runtime": "QVnC" },
	],
	i9LV: [
	  function (require, module, exports) {
		module.exports = require("regenerator-runtime");
	  },
	  { "regenerator-runtime": "QYzI" },
	],
	cOHw: [
	  function (require, module, exports) {
		var e = require("./_export"),
		  r = require("./_core"),
		  t = require("./_fails");
		module.exports = function (c, i) {
		  var o = (r.Object || {})[c] || Object[c],
			u = {};
		  (u[c] = i(o)),
			e(
			  e.S +
				e.F *
				  t(function () {
					o(1);
				  }),
			  "Object",
			  u,
			);
		};
	  },
	  { "./_export": "vSO4", "./_core": "zKeE", "./_fails": "wLcK" },
	],
	PDcB: [
	  function (require, module, exports) {
		var e = require("./_to-object"),
		  r = require("./_object-keys");
		require("./_object-sap")("keys", function () {
		  return function (t) {
			return r(e(t));
		  };
		});
	  },
	  {
		"./_to-object": "mbLO",
		"./_object-keys": "knrM",
		"./_object-sap": "cOHw",
	  },
	],
	eOjq: [
	  function (require, module, exports) {
		require("../../modules/es6.object.keys"),
		  (module.exports = require("../../modules/_core").Object.keys);
	  },
	  {
		"../../modules/es6.object.keys": "PDcB",
		"../../modules/_core": "zKeE",
	  },
	],
	"1d81": [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/object/keys");
	  },
	  { "core-js/library/fn/object/keys": "eOjq" },
	],
	OYLD: [
	  function (require, module, exports) {
		var n = require("../core-js/promise");
		function r(r, e, t, o, u, i, c) {
		  try {
			var v = r[i](c),
			  a = v.value;
		  } catch (f) {
			return void t(f);
		  }
		  v.done ? e(a) : n.resolve(a).then(o, u);
		}
		function e(e) {
		  return function () {
			var t = this,
			  o = arguments;
			return new n(function (n, u) {
			  var i = e.apply(t, o);
			  function c(e) {
				r(i, n, u, c, v, "next", e);
			  }
			  function v(e) {
				r(i, n, u, c, v, "throw", e);
			  }
			  c(void 0);
			});
		  };
		}
		module.exports = e;
	  },
	  { "../core-js/promise": "7eOf" },
	],
	N3sD: [
	  function (require, module, exports) {
		module.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
	  },
	  {},
	],
	"Kj+H": [
	  function (require, module, exports) {
		var r = require("./_export"),
		  e = require("./_defined"),
		  i = require("./_fails"),
		  n = require("./_string-ws"),
		  t = "[" + n + "]",
		  u = "​",
		  o = RegExp("^" + t + t + "*"),
		  p = RegExp(t + t + "*$"),
		  a = function (e, t, o) {
			var p = {},
			  a = i(function () {
				return !!n[e]() || u[e]() != u;
			  }),
			  f = (p[e] = a ? t(c) : n[e]);
			o && (p[o] = f), r(r.P + r.F * a, "String", p);
		  },
		  c = (a.trim = function (r, i) {
			return (
			  (r = String(e(r))),
			  1 & i && (r = r.replace(o, "")),
			  2 & i && (r = r.replace(p, "")),
			  r
			);
		  });
		module.exports = a;
	  },
	  {
		"./_export": "vSO4",
		"./_defined": "U72i",
		"./_fails": "wLcK",
		"./_string-ws": "N3sD",
	  },
	],
	wsAP: [
	  function (require, module, exports) {
		var r = require("./_global").parseInt,
		  e = require("./_string-trim").trim,
		  t = require("./_string-ws"),
		  i = /^[-+]?0[xX]/;
		module.exports =
		  8 !== r(t + "08") || 22 !== r(t + "0x16")
			? function (t, n) {
				var s = e(String(t), 3);
				return r(s, n >>> 0 || (i.test(s) ? 16 : 10));
			  }
			: r;
	  },
	  { "./_global": "i1Q6", "./_string-trim": "Kj+H", "./_string-ws": "N3sD" },
	],
	"h7/j": [
	  function (require, module, exports) {
		var r = require("./_export"),
		  e = require("./_parse-int");
		r(r.G + r.F * (parseInt != e), { parseInt: e });
	  },
	  { "./_export": "vSO4", "./_parse-int": "wsAP" },
	],
	"++Z+": [
	  function (require, module, exports) {
		require("../modules/es6.parse-int"),
		  (module.exports = require("../modules/_core").parseInt);
	  },
	  { "../modules/es6.parse-int": "h7/j", "../modules/_core": "zKeE" },
	],
	"6TiY": [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/parse-int");
	  },
	  { "core-js/library/fn/parse-int": "++Z+" },
	],
	tdeJ: [
	  function (require, module, exports) {
		"use strict";
		var n = require("./_a-function"),
		  t = require("./_is-object"),
		  r = require("./_invoke"),
		  e = [].slice,
		  i = {},
		  o = function (n, t, r) {
			if (!(t in i)) {
			  for (var e = [], o = 0; o < t; o++) e[o] = "a[" + o + "]";
			  i[t] = Function("F,a", "return new F(" + e.join(",") + ")");
			}
			return i[t](n, r);
		  };
		module.exports =
		  Function.bind ||
		  function (i) {
			var u = n(this),
			  c = e.call(arguments, 1),
			  a = function () {
				var n = c.concat(e.call(arguments));
				return this instanceof a ? o(u, n.length, n) : r(u, n, i);
			  };
			return t(u.prototype) && (a.prototype = u.prototype), a;
		  };
	  },
	  { "./_a-function": "g31e", "./_is-object": "BxvP", "./_invoke": "o4G5" },
	],
	V0uX: [
	  function (require, module, exports) {
		var e = require("./_export"),
		  r = require("./_object-create"),
		  n = require("./_a-function"),
		  t = require("./_an-object"),
		  u = require("./_is-object"),
		  c = require("./_fails"),
		  i = require("./_bind"),
		  o = (require("./_global").Reflect || {}).construct,
		  a = c(function () {
			function e() {}
			return !(o(function () {}, [], e) instanceof e);
		  }),
		  l = !c(function () {
			o(function () {});
		  });
		e(e.S + e.F * (a || l), "Reflect", {
		  construct: function (e, c) {
			n(e), t(c);
			var f = arguments.length < 3 ? e : n(arguments[2]);
			if (l && !a) return o(e, c, f);
			if (e == f) {
			  switch (c.length) {
				case 0:
				  return new e();
				case 1:
				  return new e(c[0]);
				case 2:
				  return new e(c[0], c[1]);
				case 3:
				  return new e(c[0], c[1], c[2]);
				case 4:
				  return new e(c[0], c[1], c[2], c[3]);
			  }
			  var p = [null];
			  return p.push.apply(p, c), new (i.apply(e, p))();
			}
			var s = f.prototype,
			  q = r(u(s) ? s : Object.prototype),
			  _ = Function.apply.call(e, q, c);
			return u(_) ? _ : q;
		  },
		});
	  },
	  {
		"./_export": "vSO4",
		"./_object-create": "TNJq",
		"./_a-function": "g31e",
		"./_an-object": "zotD",
		"./_is-object": "BxvP",
		"./_fails": "wLcK",
		"./_bind": "tdeJ",
		"./_global": "i1Q6",
	  },
	],
	BLl3: [
	  function (require, module, exports) {
		require("../../modules/es6.reflect.construct"),
		  (module.exports = require("../../modules/_core").Reflect.construct);
	  },
	  {
		"../../modules/es6.reflect.construct": "V0uX",
		"../../modules/_core": "zKeE",
	  },
	],
	vZQy: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/reflect/construct");
	  },
	  { "core-js/library/fn/reflect/construct": "BLl3" },
	],
	"+pCh": [
	  function (require, module, exports) {
		var e = require("./_export"),
		  r = require("./_a-function"),
		  n = require("./_an-object"),
		  i = (require("./_global").Reflect || {}).apply,
		  u = Function.apply;
		e(
		  e.S +
			e.F *
			  !require("./_fails")(function () {
				i(function () {});
			  }),
		  "Reflect",
		  {
			apply: function (e, a, l) {
			  var t = r(e),
				c = n(l);
			  return i ? i(t, a, c) : u.call(t, a, c);
			},
		  },
		);
	  },
	  {
		"./_export": "vSO4",
		"./_a-function": "g31e",
		"./_an-object": "zotD",
		"./_global": "i1Q6",
		"./_fails": "wLcK",
	  },
	],
	EN8u: [
	  function (require, module, exports) {
		require("../../modules/es6.reflect.apply"),
		  (module.exports = require("../../modules/_core").Reflect.apply);
	  },
	  {
		"../../modules/es6.reflect.apply": "+pCh",
		"../../modules/_core": "zKeE",
	  },
	],
	Lf7Q: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/reflect/apply");
	  },
	  { "core-js/library/fn/reflect/apply": "EN8u" },
	],
	"8HgQ": [
	  function (require, module, exports) {
		var e = require("./_object-dp"),
		  r = require("./_object-gopd"),
		  t = require("./_object-gpo"),
		  i = require("./_has"),
		  u = require("./_export"),
		  f = require("./_property-desc"),
		  o = require("./_an-object"),
		  a = require("./_is-object");
		function c(u, l, n) {
		  var q,
			s,
			_ = arguments.length < 4 ? u : arguments[3],
			b = r.f(o(u), l);
		  if (!b) {
			if (a((s = t(u)))) return c(s, l, n, _);
			b = f(0);
		  }
		  if (i(b, "value")) {
			if (!1 === b.writable || !a(_)) return !1;
			if ((q = r.f(_, l))) {
			  if (q.get || q.set || !1 === q.writable) return !1;
			  (q.value = n), e.f(_, l, q);
			} else e.f(_, l, f(0, n));
			return !0;
		  }
		  return void 0 !== b.set && (b.set.call(_, n), !0);
		}
		u(u.S, "Reflect", { set: c });
	  },
	  {
		"./_object-dp": "Gfzd",
		"./_object-gopd": "sxPs",
		"./_object-gpo": "HHE0",
		"./_has": "yS17",
		"./_export": "vSO4",
		"./_property-desc": "0WCH",
		"./_an-object": "zotD",
		"./_is-object": "BxvP",
	  },
	],
	B8e3: [
	  function (require, module, exports) {
		require("../../modules/es6.reflect.set"),
		  (module.exports = require("../../modules/_core").Reflect.set);
	  },
	  {
		"../../modules/es6.reflect.set": "8HgQ",
		"../../modules/_core": "zKeE",
	  },
	],
	"0ojV": [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/reflect/set");
	  },
	  { "core-js/library/fn/reflect/set": "B8e3" },
	],
	V0Qp: [
	  function (require, module, exports) {
		var e = require("./_object-gopd"),
		  r = require("./_object-gpo"),
		  t = require("./_has"),
		  i = require("./_export"),
		  o = require("./_is-object"),
		  u = require("./_an-object");
		function a(i, c) {
		  var v,
			g,
			l = arguments.length < 3 ? i : arguments[2];
		  return u(i) === l
			? i[c]
			: (v = e.f(i, c))
			  ? t(v, "value")
				? v.value
				: void 0 !== v.get
				  ? v.get.call(l)
				  : void 0
			  : o((g = r(i)))
				? a(g, c, l)
				: void 0;
		}
		i(i.S, "Reflect", { get: a });
	  },
	  {
		"./_object-gopd": "sxPs",
		"./_object-gpo": "HHE0",
		"./_has": "yS17",
		"./_export": "vSO4",
		"./_is-object": "BxvP",
		"./_an-object": "zotD",
	  },
	],
	kwvq: [
	  function (require, module, exports) {
		require("../../modules/es6.reflect.get"),
		  (module.exports = require("../../modules/_core").Reflect.get);
	  },
	  {
		"../../modules/es6.reflect.get": "V0Qp",
		"../../modules/_core": "zKeE",
	  },
	],
	TemT: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/reflect/get");
	  },
	  { "core-js/library/fn/reflect/get": "kwvq" },
	],
	"/8vM": [
	  function (require, module, exports) {
		var e = require("./_export");
		e(e.S, "Date", {
		  now: function () {
			return new Date().getTime();
		  },
		});
	  },
	  { "./_export": "vSO4" },
	],
	j9Lu: [
	  function (require, module, exports) {
		require("../../modules/es6.date.now"),
		  (module.exports = require("../../modules/_core").Date.now);
	  },
	  { "../../modules/es6.date.now": "/8vM", "../../modules/_core": "zKeE" },
	],
	Pb2S: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/date/now");
	  },
	  { "core-js/library/fn/date/now": "j9Lu" },
	],
	"7Liz": [
	  function (require, module, exports) {
		var r = require("./_is-object");
		module.exports = function (e, i) {
		  if (!r(e) || e._t !== i)
			throw TypeError("Incompatible receiver, " + i + " required!");
		  return e;
		};
	  },
	  { "./_is-object": "BxvP" },
	],
	AePr: [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_object-dp").f,
		  r = require("./_object-create"),
		  t = require("./_redefine-all"),
		  i = require("./_ctx"),
		  n = require("./_an-instance"),
		  _ = require("./_for-of"),
		  o = require("./_iter-define"),
		  u = require("./_iter-step"),
		  f = require("./_set-species"),
		  s = require("./_descriptors"),
		  l = require("./_meta").fastKey,
		  c = require("./_validate-collection"),
		  v = s ? "_s" : "size",
		  a = function (e, r) {
			var t,
			  i = l(r);
			if ("F" !== i) return e._i[i];
			for (t = e._f; t; t = t.n) if (t.k == r) return t;
		  };
		module.exports = {
		  getConstructor: function (o, u, f, l) {
			var h = o(function (e, t) {
			  n(e, h, u, "_i"),
				(e._t = u),
				(e._i = r(null)),
				(e._f = void 0),
				(e._l = void 0),
				(e[v] = 0),
				null != t && _(t, f, e[l], e);
			});
			return (
			  t(h.prototype, {
				clear: function () {
				  for (var e = c(this, u), r = e._i, t = e._f; t; t = t.n)
					(t.r = !0), t.p && (t.p = t.p.n = void 0), delete r[t.i];
				  (e._f = e._l = void 0), (e[v] = 0);
				},
				delete: function (e) {
				  var r = c(this, u),
					t = a(r, e);
				  if (t) {
					var i = t.n,
					  n = t.p;
					delete r._i[t.i],
					  (t.r = !0),
					  n && (n.n = i),
					  i && (i.p = n),
					  r._f == t && (r._f = i),
					  r._l == t && (r._l = n),
					  r[v]--;
				  }
				  return !!t;
				},
				forEach: function (e) {
				  c(this, u);
				  for (
					var r,
					  t = i(e, arguments.length > 1 ? arguments[1] : void 0, 3);
					(r = r ? r.n : this._f);

				  )
					for (t(r.v, r.k, this); r && r.r; ) r = r.p;
				},
				has: function (e) {
				  return !!a(c(this, u), e);
				},
			  }),
			  s &&
				e(h.prototype, "size", {
				  get: function () {
					return c(this, u)[v];
				  },
				}),
			  h
			);
		  },
		  def: function (e, r, t) {
			var i,
			  n,
			  _ = a(e, r);
			return (
			  _
				? (_.v = t)
				: ((e._l = _ =
					{
					  i: (n = l(r, !0)),
					  k: r,
					  v: t,
					  p: (i = e._l),
					  n: void 0,
					  r: !1,
					}),
				  e._f || (e._f = _),
				  i && (i.n = _),
				  e[v]++,
				  "F" !== n && (e._i[n] = _)),
			  e
			);
		  },
		  getEntry: a,
		  setStrong: function (e, r, t) {
			o(
			  e,
			  r,
			  function (e, t) {
				(this._t = c(e, r)), (this._k = t), (this._l = void 0);
			  },
			  function () {
				for (var e = this._k, r = this._l; r && r.r; ) r = r.p;
				return this._t && (this._l = r = r ? r.n : this._t._f)
				  ? u(0, "keys" == e ? r.k : "values" == e ? r.v : [r.k, r.v])
				  : ((this._t = void 0), u(1));
			  },
			  t ? "entries" : "values",
			  !t,
			  !0,
			),
			  f(r);
		  },
		};
	  },
	  {
		"./_object-dp": "Gfzd",
		"./_object-create": "TNJq",
		"./_redefine-all": "O6kh",
		"./_ctx": "3zRh",
		"./_an-instance": "KUik",
		"./_for-of": "ozpD",
		"./_iter-define": "uRfg",
		"./_iter-step": "xwD+",
		"./_set-species": "FGzK",
		"./_descriptors": "6MLN",
		"./_meta": "e8vu",
		"./_validate-collection": "7Liz",
	  },
	],
	"7tZR": [
	  function (require, module, exports) {
		var r = require("./_is-object"),
		  e = require("./_is-array"),
		  o = require("./_wks")("species");
		module.exports = function (i) {
		  var t;
		  return (
			e(i) &&
			  ("function" != typeof (t = i.constructor) ||
				(t !== Array && !e(t.prototype)) ||
				(t = void 0),
			  r(t) && null === (t = t[o]) && (t = void 0)),
			void 0 === t ? Array : t
		  );
		};
	  },
	  { "./_is-object": "BxvP", "./_is-array": "ayXv", "./_wks": "Ug9I" },
	],
	"TD/Z": [
	  function (require, module, exports) {
		var r = require("./_array-species-constructor");
		module.exports = function (e, n) {
		  return new (r(e))(n);
		};
	  },
	  { "./_array-species-constructor": "7tZR" },
	],
	tMiz: [
	  function (require, module, exports) {
		var e = require("./_ctx"),
		  r = require("./_iobject"),
		  t = require("./_to-object"),
		  i = require("./_to-length"),
		  u = require("./_array-species-create");
		module.exports = function (n, c) {
		  var s = 1 == n,
			a = 2 == n,
			o = 3 == n,
			f = 4 == n,
			l = 6 == n,
			q = 5 == n || l,
			_ = c || u;
		  return function (u, c, h) {
			for (
			  var v,
				p,
				b = t(u),
				d = r(b),
				g = e(c, h, 3),
				j = i(d.length),
				x = 0,
				m = s ? _(u, j) : a ? _(u, 0) : void 0;
			  j > x;
			  x++
			)
			  if ((q || x in d) && ((p = g((v = d[x]), x, b)), n))
				if (s) m[x] = p;
				else if (p)
				  switch (n) {
					case 3:
					  return !0;
					case 5:
					  return v;
					case 6:
					  return x;
					case 2:
					  m.push(v);
				  }
				else if (f) return !1;
			return l ? -1 : o || f ? f : m;
		  };
		};
	  },
	  {
		"./_ctx": "3zRh",
		"./_iobject": "E5Ce",
		"./_to-object": "mbLO",
		"./_to-length": "S7IM",
		"./_array-species-create": "TD/Z",
	  },
	],
	"cYD/": [
	  function (require, module, exports) {
		"use strict";
		var e = require("./_global"),
		  r = require("./_export"),
		  t = require("./_meta"),
		  i = require("./_fails"),
		  o = require("./_hide"),
		  n = require("./_redefine-all"),
		  u = require("./_for-of"),
		  s = require("./_an-instance"),
		  a = require("./_is-object"),
		  c = require("./_set-to-string-tag"),
		  _ = require("./_object-dp").f,
		  f = require("./_array-methods")(0),
		  d = require("./_descriptors");
		module.exports = function (p, l, q, h, g, y) {
		  var v = e[p],
			E = v,
			b = g ? "set" : "add",
			m = E && E.prototype,
			x = {};
		  return (
			d &&
			"function" == typeof E &&
			(y ||
			  (m.forEach &&
				!i(function () {
				  new E().entries().next();
				})))
			  ? ((E = l(function (e, r) {
				  s(e, E, p, "_c"),
					(e._c = new v()),
					null != r && u(r, g, e[b], e);
				})),
				f(
				  "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
					",",
				  ),
				  function (e) {
					var r = "add" == e || "set" == e;
					e in m &&
					  (!y || "clear" != e) &&
					  o(E.prototype, e, function (t, i) {
						if ((s(this, E, e), !r && y && !a(t)))
						  return "get" == e && void 0;
						var o = this._c[e](0 === t ? 0 : t, i);
						return r ? this : o;
					  });
				  },
				),
				y ||
				  _(E.prototype, "size", {
					get: function () {
					  return this._c.size;
					},
				  }))
			  : ((E = h.getConstructor(l, p, g, b)),
				n(E.prototype, q),
				(t.NEED = !0)),
			c(E, p),
			(x[p] = E),
			r(r.G + r.W + r.F, x),
			y || h.setStrong(E, p, g),
			E
		  );
		};
	  },
	  {
		"./_global": "i1Q6",
		"./_export": "vSO4",
		"./_meta": "e8vu",
		"./_fails": "wLcK",
		"./_hide": "akPY",
		"./_redefine-all": "O6kh",
		"./_for-of": "ozpD",
		"./_an-instance": "KUik",
		"./_is-object": "BxvP",
		"./_set-to-string-tag": "11Ut",
		"./_object-dp": "Gfzd",
		"./_array-methods": "tMiz",
		"./_descriptors": "6MLN",
	  },
	],
	SKjJ: [
	  function (require, module, exports) {
		"use strict";
		var t = require("./_collection-strong"),
		  e = require("./_validate-collection"),
		  r = "Map";
		module.exports = require("./_collection")(
		  r,
		  function (t) {
			return function () {
			  return t(this, arguments.length > 0 ? arguments[0] : void 0);
			};
		  },
		  {
			get: function (n) {
			  var i = t.getEntry(e(this, r), n);
			  return i && i.v;
			},
			set: function (n, i) {
			  return t.def(e(this, r), 0 === n ? 0 : n, i);
			},
		  },
		  t,
		  !0,
		);
	  },
	  {
		"./_collection-strong": "AePr",
		"./_validate-collection": "7Liz",
		"./_collection": "cYD/",
	  },
	],
	YLmZ: [
	  function (require, module, exports) {
		var r = require("./_for-of");
		module.exports = function (e, o) {
		  var u = [];
		  return r(e, !1, u.push, u, o), u;
		};
	  },
	  { "./_for-of": "ozpD" },
	],
	x6MZ: [
	  function (require, module, exports) {
		var r = require("./_classof"),
		  e = require("./_array-from-iterable");
		module.exports = function (t) {
		  return function () {
			if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
			return e(this);
		  };
		};
	  },
	  { "./_classof": "ZHvQ", "./_array-from-iterable": "YLmZ" },
	],
	"2SH0": [
	  function (require, module, exports) {
		var e = require("./_export");
		e(e.P + e.R, "Map", {
		  toJSON: require("./_collection-to-json")("Map"),
		});
	  },
	  { "./_export": "vSO4", "./_collection-to-json": "x6MZ" },
	],
	"32ty": [
	  function (require, module, exports) {
		"use strict";
		var r = require("./_export");
		module.exports = function (e) {
		  r(r.S, e, {
			of: function () {
			  for (var r = arguments.length, e = new Array(r); r--; )
				e[r] = arguments[r];
			  return new this(e);
			},
		  });
		};
	  },
	  { "./_export": "vSO4" },
	],
	oRPk: [
	  function (require, module, exports) {
		require("./_set-collection-of")("Map");
	  },
	  { "./_set-collection-of": "32ty" },
	],
	IC7E: [
	  function (require, module, exports) {
		"use strict";
		var r = require("./_export"),
		  e = require("./_a-function"),
		  u = require("./_ctx"),
		  i = require("./_for-of");
		module.exports = function (t) {
		  r(r.S, t, {
			from: function (r) {
			  var t,
				n,
				o,
				s,
				f = arguments[1];
			  return (
				e(this),
				(t = void 0 !== f) && e(f),
				null == r
				  ? new this()
				  : ((n = []),
					t
					  ? ((o = 0),
						(s = u(f, arguments[2], 2)),
						i(r, !1, function (r) {
						  n.push(s(r, o++));
						}))
					  : i(r, !1, n.push, n),
					new this(n))
			  );
			},
		  });
		};
	  },
	  {
		"./_export": "vSO4",
		"./_a-function": "g31e",
		"./_ctx": "3zRh",
		"./_for-of": "ozpD",
	  },
	],
	VEMT: [
	  function (require, module, exports) {
		require("./_set-collection-from")("Map");
	  },
	  { "./_set-collection-from": "IC7E" },
	],
	"K+F3": [
	  function (require, module, exports) {
		require("../modules/es6.object.to-string"),
		  require("../modules/es6.string.iterator"),
		  require("../modules/web.dom.iterable"),
		  require("../modules/es6.map"),
		  require("../modules/es7.map.to-json"),
		  require("../modules/es7.map.of"),
		  require("../modules/es7.map.from"),
		  (module.exports = require("../modules/_core").Map);
	  },
	  {
		"../modules/es6.object.to-string": "tuDi",
		"../modules/es6.string.iterator": "i+u+",
		"../modules/web.dom.iterable": "COf8",
		"../modules/es6.map": "SKjJ",
		"../modules/es7.map.to-json": "2SH0",
		"../modules/es7.map.of": "oRPk",
		"../modules/es7.map.from": "VEMT",
		"../modules/_core": "zKeE",
	  },
	],
	y6NN: [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/map");
	  },
	  { "core-js/library/fn/map": "K+F3" },
	],
	Tzth: [
	  function (require, module, exports) {
		function n(n, o) {
		  if (!(n instanceof o))
			throw new TypeError("Cannot call a class as a function");
		}
		module.exports = n;
	  },
	  {},
	],
	htFH: [
	  function (require, module, exports) {
		var e = require("./_export");
		e(e.S + e.F * !require("./_descriptors"), "Object", {
		  defineProperty: require("./_object-dp").f,
		});
	  },
	  { "./_export": "vSO4", "./_descriptors": "6MLN", "./_object-dp": "Gfzd" },
	],
	"3v7p": [
	  function (require, module, exports) {
		require("../../modules/es6.object.define-property");
		var e = require("../../modules/_core").Object;
		module.exports = function (r, o, t) {
		  return e.defineProperty(r, o, t);
		};
	  },
	  {
		"../../modules/es6.object.define-property": "htFH",
		"../../modules/_core": "zKeE",
	  },
	],
	"6eIq": [
	  function (require, module, exports) {
		module.exports = require("core-js/library/fn/object/define-property");
	  },
	  { "core-js/library/fn/object/define-property": "3v7p" },
	],
	xM5U: [
	  function (require, module, exports) {
		var e = require("../core-js/object/define-property");
		function r(r, n) {
		  for (var o = 0; o < n.length; o++) {
			var t = n[o];
			(t.enumerable = t.enumerable || !1),
			  (t.configurable = !0),
			  "value" in t && (t.writable = !0),
			  e(r, t.key, t);
		  }
		}
		function n(e, n, o) {
		  return n && r(e.prototype, n), o && r(e, o), e;
		}
		module.exports = n;
	  },
	  { "../core-js/object/define-property": "6eIq" },
	],
	y3Z2: [
	  function (require, module, exports) {
		var global = arguments[3];
		var e = arguments[3],
		  t = b(require("@babel/runtime-corejs2/regenerator")),
		  n = b(require("@babel/runtime-corejs2/core-js/promise")),
		  r = b(require("@babel/runtime-corejs2/core-js/object/keys")),
		  a = b(require("@babel/runtime-corejs2/helpers/asyncToGenerator")),
		  s = b(require("@babel/runtime-corejs2/core-js/parse-int")),
		  i = b(require("@babel/runtime-corejs2/core-js/reflect/construct")),
		  o = b(require("@babel/runtime-corejs2/core-js/reflect/apply")),
		  u = b(require("@babel/runtime-corejs2/core-js/reflect/set")),
		  l = b(require("@babel/runtime-corejs2/core-js/reflect/get")),
		  c = b(require("@babel/runtime-corejs2/core-js/date/now")),
		  f = b(require("@babel/runtime-corejs2/helpers/typeof")),
		  d = b(require("@babel/runtime-corejs2/core-js/map")),
		  m = b(require("@babel/runtime-corejs2/helpers/classCallCheck")),
		  v = b(require("@babel/runtime-corejs2/helpers/createClass"));
		function b(e) {
		  return e && e.__esModule ? e : { default: e };
		}
		!(function () {
		  if ("undefined" != typeof window) window.global = window;
		  else {
			if ("undefined" == typeof self)
			  throw new Error(
				"cannot export Go (neither window nor self is defined)",
			  );
			self.global = self;
		  }
		  var b = "";
		  e.fs = {
			constants: {
			  O_WRONLY: -1,
			  O_RDWR: -1,
			  O_CREAT: -1,
			  O_TRUNC: -1,
			  O_APPEND: -1,
			  O_EXCL: -1,
			},
			writeSync: function (e, t) {
			  var n = (b += p.decode(t)).lastIndexOf("\n");
			  return (
				-1 != n && (console.log(b.substr(0, n)), (b = b.substr(n + 1))),
				t.length
			  );
			},
			openSync: function (e, t, n) {
			  var r = new Error("not implemented");
			  throw ((r.code = "ENOSYS"), r);
			},
		  };
		  var h = new TextEncoder("utf-8"),
			p = new TextDecoder("utf-8");
		  e.Go = (function () {
			function b() {
			  var e = this;
			  (0, m.default)(this, b),
				(this.argv = ["js"]),
				(this.env = {}),
				(this.exit = function (e) {
				  0 !== e && console.warn("exit code:", e);
				}),
				(this._callbackTimeouts = new d.default()),
				(this._nextCallbackTimeoutID = 1);
			  var t = function () {
				  return new DataView(e._inst.exports.mem.buffer);
				},
				n = function (e, n) {
				  t().setUint32(e + 0, n, !0),
					t().setUint32(e + 4, Math.floor(n / 4294967296), !0);
				},
				r = function (e) {
				  return (
					t().getUint32(e + 0, !0) +
					4294967296 * t().getInt32(e + 4, !0)
				  );
				},
				a = function (n) {
				  var r = t().getFloat64(n, !0);
				  if (!isNaN(r)) return r;
				  var a = t().getUint32(n, !0);
				  return e._values[a];
				},
				v = function (n, r) {
				  if ("number" == typeof r)
					return isNaN(r)
					  ? (t().setUint32(n + 4, 2146959360, !0),
						void t().setUint32(n, 0, !0))
					  : void t().setFloat64(n, r, !0);
				  switch (r) {
					case void 0:
					  return (
						t().setUint32(n + 4, 2146959360, !0),
						void t().setUint32(n, 1, !0)
					  );
					case null:
					  return (
						t().setUint32(n + 4, 2146959360, !0),
						void t().setUint32(n, 2, !0)
					  );
					case !0:
					  return (
						t().setUint32(n + 4, 2146959360, !0),
						void t().setUint32(n, 3, !0)
					  );
					case !1:
					  return (
						t().setUint32(n + 4, 2146959360, !0),
						void t().setUint32(n, 4, !0)
					  );
				  }
				  var a = e._refs.get(r);
				  void 0 === a &&
					((a = e._values.length),
					e._values.push(r),
					e._refs.set(r, a));
				  var s = 0;
				  switch ((0, f.default)(r)) {
					case "string":
					  s = 1;
					  break;
					case "symbol":
					  s = 2;
					  break;
					case "function":
					  s = 3;
				  }
				  t().setUint32(n + 4, 2146959360 | s, !0),
					t().setUint32(n, a, !0);
				},
				w = function (t) {
				  var n = r(t + 0),
					a = r(t + 8);
				  return new Uint8Array(e._inst.exports.mem.buffer, n, a);
				},
				g = function (e) {
				  for (
					var t = r(e + 0), n = r(e + 8), s = new Array(n), i = 0;
					i < n;
					i++
				  )
					s[i] = a(t + 8 * i);
				  return s;
				},
				_ = function (t) {
				  var n = r(t + 0),
					a = r(t + 8);
				  return p.decode(
					new DataView(e._inst.exports.mem.buffer, n, a),
				  );
				},
				j = (0, c.default)() - performance.now();
			  this.importObject = {
				go: {
				  "runtime.wasmExit": function (n) {
					var r = t().getInt32(n + 8, !0);
					(e.exited = !0),
					  delete e._inst,
					  delete e._values,
					  delete e._refs,
					  e.exit(r);
				  },
				  "runtime.wasmWrite": function (n) {
					var a = r(n + 8),
					  s = r(n + 16),
					  i = t().getInt32(n + 24, !0);
					fs.writeSync(
					  a,
					  new Uint8Array(e._inst.exports.mem.buffer, s, i),
					);
				  },
				  "runtime.nanotime": function (e) {
					n(e + 8, 1e6 * (j + performance.now()));
				  },
				  "runtime.walltime": function (e) {
					var r = new Date().getTime();
					n(e + 8, r / 1e3),
					  t().setInt32(e + 16, (r % 1e3) * 1e6, !0);
				  },
				  "runtime.scheduleCallback": function (n) {
					var a = e._nextCallbackTimeoutID;
					e._nextCallbackTimeoutID++,
					  e._callbackTimeouts.set(
						a,
						setTimeout(
						  function () {
							e._resolveCallbackPromise();
						  },
						  r(n + 8) + 1,
						),
					  ),
					  t().setInt32(n + 16, a, !0);
				  },
				  "runtime.clearScheduledCallback": function (n) {
					var r = t().getInt32(n + 8, !0);
					clearTimeout(e._callbackTimeouts.get(r)),
					  e._callbackTimeouts.delete(r);
				  },
				  "runtime.getRandomData": function (e) {
					crypto.getRandomValues(w(e + 8));
				  },
				  "syscall/js.stringVal": function (e) {
					v(e + 24, _(e + 8));
				  },
				  "syscall/js.valueGet": function (e) {
					v(e + 32, (0, l.default)(a(e + 8), _(e + 16)));
				  },
				  "syscall/js.valueSet": function (e) {
					(0, u.default)(a(e + 8), _(e + 16), a(e + 32));
				  },
				  "syscall/js.valueIndex": function (e) {
					v(e + 24, (0, l.default)(a(e + 8), r(e + 16)));
				  },
				  "syscall/js.valueSetIndex": function (e) {
					(0, u.default)(a(e + 8), r(e + 16), a(e + 24));
				  },
				  "syscall/js.valueCall": function (e) {
					try {
					  var n = a(e + 8),
						r = (0, l.default)(n, _(e + 16)),
						s = g(e + 32);
					  v(e + 56, (0, o.default)(r, n, s)),
						t().setUint8(e + 64, 1);
					} catch (i) {
					  v(e + 56, i), t().setUint8(e + 64, 0);
					}
				  },
				  "syscall/js.valueInvoke": function (e) {
					try {
					  var n = a(e + 8),
						r = g(e + 16);
					  v(e + 40, (0, o.default)(n, void 0, r)),
						t().setUint8(e + 48, 1);
					} catch (s) {
					  v(e + 40, s), t().setUint8(e + 48, 0);
					}
				  },
				  "syscall/js.valueNew": function (e) {
					try {
					  var n = a(e + 8),
						r = g(e + 16);
					  v(e + 40, (0, i.default)(n, r)), t().setUint8(e + 48, 1);
					} catch (s) {
					  v(e + 40, s), t().setUint8(e + 48, 0);
					}
				  },
				  "syscall/js.valueLength": function (e) {
					n(e + 16, (0, s.default)(a(e + 8).length));
				  },
				  "syscall/js.valuePrepareString": function (e) {
					var t = h.encode(String(a(e + 8)));
					v(e + 16, t), n(e + 24, t.length);
				  },
				  "syscall/js.valueLoadString": function (e) {
					var t = a(e + 8);
					w(e + 16).set(t);
				  },
				  "syscall/js.valueInstanceOf": function (e) {
					t().setUint8(e + 24, a(e + 8) instanceof a(e + 16));
				  },
				  debug: function (e) {
					console.log(e);
				  },
				},
			  };
			}
			var w;
			return (
			  (0, v.default)(
				b,
				[
				  {
					key: "run",
					value:
					  ((w = (0, a.default)(
						t.default.mark(function a(s) {
						  var i,
							o,
							u,
							l,
							c,
							f,
							m,
							v,
							b = this;
						  return t.default.wrap(
							function (t) {
							  for (;;)
								switch ((t.prev = t.next)) {
								  case 0:
									(this._inst = s),
									  (this._values = [
										NaN,
										void 0,
										null,
										!0,
										!1,
										e,
										this._inst.exports.mem,
										this,
									  ]),
									  (this._refs = new d.default()),
									  (this._callbackShutdown = !1),
									  (this.exited = !1),
									  (i = new DataView(
										this._inst.exports.mem.buffer,
									  )),
									  (o = 4096),
									  (u = function (e) {
										var t = o;
										return (
										  new Uint8Array(
											i.buffer,
											o,
											e.length + 1,
										  ).set(h.encode(e + "\0")),
										  (o +=
											e.length + (8 - (e.length % 8))),
										  t
										);
									  }),
									  (l = this.argv.length),
									  (c = []),
									  this.argv.forEach(function (e) {
										c.push(u(e));
									  }),
									  (f = (0, r.default)(this.env).sort()),
									  c.push(f.length),
									  f.forEach(function (e) {
										c.push(
										  u("".concat(e, "=").concat(b.env[e])),
										);
									  }),
									  (m = o),
									  c.forEach(function (e) {
										i.setUint32(o, e, !0),
										  i.setUint32(o + 4, 0, !0),
										  (o += 8);
									  });
								  case 16:
									if (
									  ((v = new n.default(function (e) {
										b._resolveCallbackPromise =
										  function () {
											if (b.exited)
											  throw new Error(
												"bad callback: Go program has already exited",
											  );
											setTimeout(e, 0);
										  };
									  })),
									  this._inst.exports.run(l, m),
									  !this.exited)
									) {
									  t.next = 21;
									  break;
									}
									return t.abrupt("break", 25);
								  case 21:
									return (t.next = 23), v;
								  case 23:
									t.next = 16;
									break;
								  case 25:
								  case "end":
									return t.stop();
								}
							},
							a,
							this,
						  );
						}),
					  )),
					  function (e) {
						return w.apply(this, arguments);
					  }),
				  },
				],
				[
				  {
					key: "_makeCallbackHelper",
					value: function (e, t, n) {
					  return function () {
						t.push({ id: e, args: arguments }),
						  n._resolveCallbackPromise();
					  };
					},
				  },
				  {
					key: "_makeEventCallbackHelper",
					value: function (e, t, n, r) {
					  return function (a) {
						e && a.preventDefault(),
						  t && a.stopPropagation(),
						  n && a.stopImmediatePropagation(),
						  r(a);
					  };
					},
				  },
				],
			  ),
			  b
			);
		  })();
		})();
	  },
	  {
		"@babel/runtime-corejs2/regenerator": "i9LV",
		"@babel/runtime-corejs2/core-js/promise": "7eOf",
		"@babel/runtime-corejs2/core-js/object/keys": "1d81",
		"@babel/runtime-corejs2/helpers/asyncToGenerator": "OYLD",
		"@babel/runtime-corejs2/core-js/parse-int": "6TiY",
		"@babel/runtime-corejs2/core-js/reflect/construct": "vZQy",
		"@babel/runtime-corejs2/core-js/reflect/apply": "Lf7Q",
		"@babel/runtime-corejs2/core-js/reflect/set": "0ojV",
		"@babel/runtime-corejs2/core-js/reflect/get": "TemT",
		"@babel/runtime-corejs2/core-js/date/now": "Pb2S",
		"@babel/runtime-corejs2/helpers/typeof": "h/VH",
		"@babel/runtime-corejs2/core-js/map": "y6NN",
		"@babel/runtime-corejs2/helpers/classCallCheck": "Tzth",
		"@babel/runtime-corejs2/helpers/createClass": "xM5U",
	  },
	],
	EVxB: [
	  function (require, module, exports) {
		"use strict";
		var e = o(require("@babel/runtime-corejs2/core-js/json/stringify")),
		  n = o(require("@babel/runtime-corejs2/core-js/symbol/iterator")),
		  t = o(require("@babel/runtime-corejs2/core-js/symbol")),
		  r = o(require("@babel/runtime-corejs2/core-js/promise"));
		function o(e) {
		  return e && e.__esModule ? e : { default: e };
		}
		var i = function (e, n, t, o) {
			return new (t || (t = r.default))(function (r, i) {
			  function s(e) {
				try {
				  c(o.next(e));
				} catch (n) {
				  i(n);
				}
			  }
			  function a(e) {
				try {
				  c(o.throw(e));
				} catch (n) {
				  i(n);
				}
			  }
			  function c(e) {
				e.done
				  ? r(e.value)
				  : new t(function (n) {
					  n(e.value);
					}).then(s, a);
			  }
			  c((o = o.apply(e, n || [])).next());
			});
		  },
		  s = function (e, r) {
			var o,
			  i,
			  s,
			  a,
			  c = {
				label: 0,
				sent: function () {
				  if (1 & s[0]) throw s[1];
				  return s[1];
				},
				trys: [],
				ops: [],
			  };
			return (
			  (a = { next: u(0), throw: u(1), return: u(2) }),
			  "function" == typeof t.default &&
				(a[n.default] = function () {
				  return this;
				}),
			  a
			);
			function u(n) {
			  return function (t) {
				return (function (n) {
				  if (o) throw new TypeError("Generator is already executing.");
				  for (; c; )
					try {
					  if (
						((o = 1),
						i &&
						  (s =
							2 & n[0]
							  ? i.return
							  : n[0]
								? i.throw || ((s = i.return) && s.call(i), 0)
								: i.next) &&
						  !(s = s.call(i, n[1])).done)
					  )
						return s;
					  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
						case 0:
						case 1:
						  s = n;
						  break;
						case 4:
						  return c.label++, { value: n[1], done: !1 };
						case 5:
						  c.label++, (i = n[1]), (n = [0]);
						  continue;
						case 7:
						  (n = c.ops.pop()), c.trys.pop();
						  continue;
						default:
						  if (
							!(s = (s = c.trys).length > 0 && s[s.length - 1]) &&
							(6 === n[0] || 2 === n[0])
						  ) {
							c = 0;
							continue;
						  }
						  if (
							3 === n[0] &&
							(!s || (n[1] > s[0] && n[1] < s[3]))
						  ) {
							c.label = n[1];
							break;
						  }
						  if (6 === n[0] && c.label < s[1]) {
							(c.label = s[1]), (s = n);
							break;
						  }
						  if (s && c.label < s[2]) {
							(c.label = s[2]), c.ops.push(n);
							break;
						  }
						  s[2] && c.ops.pop(), c.trys.pop();
						  continue;
					  }
					  n = r.call(e, c);
					} catch (t) {
					  (n = [6, t]), (i = 0);
					} finally {
					  o = s = 0;
					}
				  if (5 & n[0]) throw n[1];
				  return { value: n[0] ? n[1] : void 0, done: !0 };
				})([n, t]);
			  };
			}
		  },
		  a = function (e) {
			return e && e.__esModule ? e : { default: e };
		  },
		  c = function (e) {
			if (e && e.__esModule) return e;
			var n = {};
			if (null != e)
			  for (var t in e)
				Object.hasOwnProperty.call(e, t) && (n[t] = e[t]);
			return (n.default = e), n;
		  },
		  u = void 0;
		Object.defineProperty(exports, "__esModule", { value: !0 });
		var l = a(require("xterm/src/xterm.ts")),
		  f = c(require("./attach.ts")),
		  d = c(require("xterm/src/addons/fullscreen/fullscreen.ts")),
		  h = c(require("xterm/src/addons/fit/fit.ts"));
		require("xterm/dist/xterm.css"),
		  require("xterm/dist/addons/fullscreen/fullscreen.css"),
		  require("./wasm_exec.js"),
		  l.default.applyAddon(f),
		  l.default.applyAddon(d),
		  l.default.applyAddon(h),
		  WebAssembly.instantiateStreaming ||
			(WebAssembly.instantiateStreaming = function (e, n) {
			  return i(u, void 0, void 0, function () {
				var t;
				return s(this, function (r) {
				  switch (r.label) {
					case 0:
					  return [4, e];
					case 1:
					  return [4, r.sent().arrayBuffer()];
					case 2:
					  return (t = r.sent()), [4, WebAssembly.instantiate(t, n)];
					case 3:
					  return [2, r.sent()];
				  }
				});
			  });
			});
		var p = new Go();
		WebAssembly.instantiateStreaming(
		  fetch("main.wasm"),
		  p.importObject,
		).then(function (e) {
		  e.module;
		  var n = e.instance;
		  p.run(n);
		});
		var b = function (e, n) {
			return fetch("https://up.10kb.site/" + e, {
			  method: "POST",
			  body: n,
			})
			  .then(function (e) {
				return e.text();
			  })
			  .then(function (e) {});
		  },
		  w = function (e) {
			decode(e, function (e, n, t) {
			  "" != t && console.log(t),
				"" != n && (m = n),
				y
				  .setRemoteDescription(
					new RTCSessionDescription({ type: "offer", sdp: e }),
				  )
				  .catch(v),
				y
				  .createAnswer()
				  .then(function (e) {
					return y.setLocalDescription(e);
				  })
				  .catch(v);
			});
		  },
		  m = null,
		  g = new l.default();
		g.open(document.getElementById("terminal")),
		  g.toggleFullScreen(),
		  g.fit(),
		  (window.onresize = function () {
			g.fit();
		  }),
		  g.write("Welcome to the WebTTY web client.\n\r");
		var y = new RTCPeerConnection({
			iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
		  }),
		  v = function (e) {
			g.write(e + "\n\r");
		  },
		  x = y.createDataChannel("data");
		(x.onclose = function () {
		  return console.log("sendChannel has closed");
		}),
		  (x.onopen = function () {
			g.reset(),
			  g.terminadoAttach(x),
			  x.send((0, e.default)(["set_size", g.rows, g.cols])),
			  console.log("sendChannel has opened");
		  }),
		  (y.onsignalingstatechange = function (e) {
			return v(y.signalingState);
		  }),
		  (y.oniceconnectionstatechange = function (e) {
			return v(y.iceConnectionState);
		  }),
		  (y.onicecandidate = function (e) {
			null === e.candidate &&
			  (null == m
				? (g.write(
					"Answer created. Send the following answer to the host:\n\r\n\r",
				  ),
				  encode(y.localDescription.sdp, function (e, n) {
					"" != n && console.log(n), g.write(e);
				  }))
				: (g.write("Waiting for connection..."),
				  encode(y.localDescription.sdp, function (e, n) {
					"" != n && console.log(n), b(m, e);
				  })));
		  }),
		  (y.onnegotiationneeded = function (e) {
			return console.log(e);
		  }),
		  (window.sendMessage = function () {
			var e = document.getElementById("message").value;
			if ("" === e) return alert("Message must not be empty");
			x.send(e);
		  });
		var j = !1,
		  q = window.location.hash.substr(1);
		if ((console.log(q), "" != q))
		  try {
			w(q), (j = !0);
		  } catch (A) {
			console.log(A);
		  }
		0 == j && g.write("Run webtty and paste the offer message below:\n\r"),
		  g.on("data", function (e) {
			if (!j) {
			  g.reset();
			  try {
				w(e);
			  } catch (A) {
				return (
				  console.log(A),
				  g.write("There was an error with the offer: " + e + "\n\r"),
				  void g.write("Try entering the message again: ")
				);
			  }
			  j = !0;
			}
		  });
	  },
	  {
		"@babel/runtime-corejs2/core-js/json/stringify": "E09K",
		"@babel/runtime-corejs2/core-js/symbol/iterator": "573u",
		"@babel/runtime-corejs2/core-js/symbol": "mr6k",
		"@babel/runtime-corejs2/core-js/promise": "7eOf",
		"xterm/src/xterm.ts": "xWgB",
		"./attach.ts": "pTUZ",
		"xterm/src/addons/fullscreen/fullscreen.ts": "CS9K",
		"xterm/src/addons/fit/fit.ts": "ISf0",
		"xterm/dist/xterm.css": "tuDi",
		"xterm/dist/addons/fullscreen/fullscreen.css": "tuDi",
		"./wasm_exec.js": "y3Z2",
	  },
	],
  },
  {},
  ["EVxB"],
  null,
);