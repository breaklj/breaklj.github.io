/*!
 * Valine v1.4.14
 * (c) 2017-2020 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2020/4/26 下午8:39:08
 */
!
  function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
  }(this, function () {
    return function (e) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
      }
      var n = {};
      return t.m = e, t.c = n, t.i = function (e) {
        return e
      }, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        })
      }, t.n = function (e) {
        var n = e && e.__esModule ?
          function () {
            return e.
              default
          } : function () {
            return e
          };
        return t.d(n, "a", n), n
      }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, t.p = "", t(t.s = 18)
    }([function (e, t, n) {
      "use strict";

      function r(e) {
        return e && e.__esModule ? e : {
          default:
            e
        }
      }
      t.__esModule = !0;
      var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(38), a = r(o), s = n(28), l = r(s), c = n(27), u = r(c), p = n(42), f = r(p), d = document, h = navigator, g = /[&<>"'`\\]/g, y = RegExp(g.source), m = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g, v = RegExp(m.source), b = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "`": "&#x60;",
          "\\": "&#x5c;"
        }, w = {};
      for (var x in b) w[b[x]] = x;
      var k = null;
      Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
        var n, r;
        if (null == this) throw new TypeError(" this is null or not defined");
        var i = Object(this),
          o = i.length >>> 0;
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        for (arguments.length > 1 && (n = t), r = 0; r < o;) {
          var a;
          r in i && (a = i[r], e.call(n, a, r, i)), r++
        }
      }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
      }), (0, a.
        default)(l.
          default.fn, {
          prepend: function (e) {
            return e instanceof HTMLElement || (e = e[0]), this.forEach(function (t) {
              t.insertAdjacentElement("afterBegin", e)
            }), this
          },
          append: function (e) {
            return e instanceof HTMLElement || (e = e[0]), this.forEach(function (t) {
              t.insertAdjacentElement("beforeEnd", e)
            }), this
          },
          remove: function () {
            return this.forEach(function (e) {
              try {
                e.parentNode.removeChild(e)
              } catch (e) { }
            }), this
          },
          find: function (e) {
            return (0, l.
              default)(e, this)
          },
          show: function () {
            return this.forEach(function (e) {
              e.style.display = ""
            }), this
          },
          hide: function () {
            return this.forEach(function (e) {
              e.style.display = "none"
            }), this
          },
          on: function (e, t, n) {
            return l.
              default.fn.off(e, t, n), this.forEach(function (r) {
                e.split(" ").forEach(function (e) {
                  r.addEventListener ? r.addEventListener(e, t, n || !1) : r.attachEvent ? r.attachEvent("on" + e, t) : r["on" + e] = t
                })
              }), this
          },
          off: function (e, t, n) {
            return this.forEach(function (r) {
              e.split(" ").forEach(function (e) {
                r.removeEventListener ? r.removeEventListener(e, t, n || !1) : r.detachEvent ? r.detachEvent("on" + e, t) : r["on" + e] = null
              })
            }), this
          },
          html: function (e) {
            return void 0 !== e ? (this.forEach(function (t) {
              t.innerHTML = e
            }), this) : this[0].innerHTML
          },
          text: function (e) {
            return void 0 !== e ? (this.forEach(function (t) {
              t.innerText = e
            }), this) : this[0].innerText
          },
          empty: function (e) {
            return e = e || 0, this.forEach(function (t) {
              setTimeout(function (e) {
                t.innerText = ""
              }, e)
            }), this
          },
          val: function (e) {
            return void 0 !== e ? (this.forEach(function (t) {
              t.value = e
            }), this) : this[0].value || ""
          },
          attr: function () {
            var e = arguments;
            if ("object" == i(arguments[0])) {
              var t = arguments[0],
                n = this;
              return Object.keys(t).forEach(function (e) {
                n.forEach(function (n) {
                  n.setAttribute(e, t[e])
                })
              }), this
            }
            return "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) || "" : (this.forEach(function (t) {
              t.setAttribute(e[0], e[1])
            }), this)
          },
          removeAttr: function (e) {
            return this.forEach(function (t) {
              var n, r = 0,
                i = e && e.match(/[^\x20\t\r\n\f\*\/\\]+/g);
              if (i && 1 === t.nodeType) for (; n = i[r++];) t.removeAttribute(n)
            }), this
          },
          hasClass: function (e) {
            return !!this[0] && new RegExp("(\\s|^)" + e + "(\\s|$)").test(this[0].getAttribute("class"))
          },
          addClass: function (e) {
            return this.forEach(function (t) {
              var n = (0, l.
                default)(t),
                r = n.attr("class");
              n.hasClass(e) || n.attr("class", r += " " + e)
            }), this
          },
          removeClass: function (e) {
            return this.forEach(function (t) {
              var n = (0, l.
                default)(t),
                r = n.attr("class");
              if (n.hasClass(e)) {
                var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                n.attr("class", r.replace(i, ""))
              }
            }), this
          }
        }), (0, a.
          default)(l.
            default, {
            extend: a.
              default,
            noop:


              function () { },
            navi: h,
            ua: h.userAgent,
            lang: h.language || h.languages[0],
            detect: u.
              default,
            store:
              f.
                default,
            escape:


              function (e) {
                return e && y.test(e) ? e.replace(g, function (e) {
                  return b[e]
                }) : e
              },
            unescape: function (e) {
              return e && v.test(e) ? e.replace(m, function (e) {
                return w[e]
              }) : e
            },
            dynamicLoadSource: function (e, t) {
              if ((0, l.
                default)('script[src="' + e + '"]').length) t && t();
              else {
                var n = d.createElement("script");
                n.onload = n.onreadystatechange = function () {
                  var e = this;
                  e.onload = e.onreadystatechange = null, t && t(), (0, l.
                    default)(n).remove()
                }, n.async = !0, n.setAttribute("referrerPolicy", "no-referrer");
                (0, l.
                  default)("head")[0].appendChild(n), n.src = e
              }
            },
            sdkLoader: function (e, t, n) {
              t in window && window[t] ? (k && clearTimeout(k), n && n()) : l.
                default.dynamicLoadSource(e, function () {
                  k = setTimeout(l.
                    default.sdkLoader(e, t, n), 100)
                })
            },
            deleteInWin: function (e, t) {
              var n = function (t) {
                if (e in window) try {
                  delete window[e]
                } catch (t) {
                  window[e] = null
                }
              };
              0 === t ? n() : setTimeout(n, t || 500)
            },
            ajax: function (e) {
              e = e || {}, e.type = (e.type || "GET").toUpperCase(), e.dataType = e.dataType || "json", e.async = e.async || !0, e.timeout = e.timeout || 8e3;
              var t = "[object FormData]" == {}.toString.call(e.data) ? e.data : function (e) {
                var t = [];
                for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.push("t=" + Date.now()), t.join("&")
              }(e.data),
                n = null,
                r = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
              r.onreadystatechange = function (t) {
                if (4 == r.readyState) {
                  clearTimeout(n);
                  var i = r.status;
                  i >= 200 && i < 300 ? e.success && e.success(JSON.parse(r.responseText)) : e.fail && e.fail(i)
                }
              }, "GET" == e.type ? (r.open("GET", e.url + "?" + t, e.async), r.send(null)) : "POST" == e.type && (r.open("POST", e.url, e.async), void 0 == e.contentType || null == e.contentType ? r.send(t) : (r.setRequestHeader("Content-Type", e.contentType), r.send(JSON.stringify(e.data)))), n = setTimeout(function (e) {
                clearTimeout(n), r.abort()
              }, e.timeout)
            }
          }), t.
            default = l.
          default
    }, function (e, t, n) {
      "use strict";
      var r = TypeError,
        i = Object.getOwnPropertyDescriptor;
      if (i) try {
        i({}, "")
      } catch (e) {
        i = null
      }
      var o, a, s = function () {
        throw new r
      },
        l = i ?
          function () {
            try {
              return arguments.callee, s
            } catch (e) {
              try {
                return i(arguments, "callee").get
              } catch (e) {
                return s
              }
            }
          }() : s, c = n(47)(), u = Object.getPrototypeOf ||
            function (e) {
              return e.__proto__
            }, p = o ? u(o) : void 0, f = a ? u(a) : void 0, d = a ? a() : void 0, h = "undefined" == typeof Uint8Array ? void 0 : u(Uint8Array), g = {
              "%Array%": Array,
              "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
              "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
              "%ArrayIteratorPrototype%": c ? u([][Symbol.iterator]()) : void 0,
              "%ArrayPrototype%": Array.prototype,
              "%ArrayProto_entries%": Array.prototype.entries,
              "%ArrayProto_forEach%": Array.prototype.forEach,
              "%ArrayProto_keys%": Array.prototype.keys,
              "%ArrayProto_values%": Array.prototype.values,
              "%AsyncFromSyncIteratorPrototype%": void 0,
              "%AsyncFunction%": void 0,
              "%AsyncFunctionPrototype%": void 0,
              "%AsyncGenerator%": a ? u(d) : void 0,
              "%AsyncGeneratorFunction%": f,
              "%AsyncGeneratorPrototype%": f ? f.prototype : void 0,
              "%AsyncIteratorPrototype%": d && c && Symbol.asyncIterator ? d[Symbol.asyncIterator]() : void 0,
              "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
              "%Boolean%": Boolean,
              "%BooleanPrototype%": Boolean.prototype,
              "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
              "%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
              "%Date%": Date,
              "%DatePrototype%": Date.prototype,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": Error,
              "%ErrorPrototype%": Error.prototype,
              "%eval%": eval,
              "%EvalError%": EvalError,
              "%EvalErrorPrototype%": EvalError.prototype,
              "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
              "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
              "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
              "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
              "%Function%": Function,
              "%FunctionPrototype%": Function.prototype,
              "%Generator%": o ? u(o()) : void 0,
              "%GeneratorFunction%": p,
              "%GeneratorPrototype%": p ? p.prototype : void 0,
              "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
              "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
              "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
              "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
              "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
              "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": c ? u(u([][Symbol.iterator]())) : void 0,
              "%JSON%": "object" == typeof JSON ? JSON : void 0,
              "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
              "%Map%": "undefined" == typeof Map ? void 0 : Map,
              "%MapIteratorPrototype%": "undefined" != typeof Map && c ? u((new Map)[Symbol.iterator]()) : void 0,
              "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
              "%Math%": Math,
              "%Number%": Number,
              "%NumberPrototype%": Number.prototype,
              "%Object%": Object,
              "%ObjectPrototype%": Object.prototype,
              "%ObjProto_toString%": Object.prototype.toString,
              "%ObjProto_valueOf%": Object.prototype.valueOf,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
              "%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
              "%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
              "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
              "%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
              "%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
              "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
              "%RangeError%": RangeError,
              "%RangeErrorPrototype%": RangeError.prototype,
              "%ReferenceError%": ReferenceError,
              "%ReferenceErrorPrototype%": ReferenceError.prototype,
              "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
              "%RegExp%": RegExp,
              "%RegExpPrototype%": RegExp.prototype,
              "%Set%": "undefined" == typeof Set ? void 0 : Set,
              "%SetIteratorPrototype%": "undefined" != typeof Set && c ? u((new Set)[Symbol.iterator]()) : void 0,
              "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
              "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
              "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
              "%String%": String,
              "%StringIteratorPrototype%": c ? u(""[Symbol.iterator]()) : void 0,
              "%StringPrototype%": String.prototype,
              "%Symbol%": c ? Symbol : void 0,
              "%SymbolPrototype%": c ? Symbol.prototype : void 0,
              "%SyntaxError%": SyntaxError,
              "%SyntaxErrorPrototype%": SyntaxError.prototype,
              "%ThrowTypeError%": l,
              "%TypedArray%": h,
              "%TypedArrayPrototype%": h ? h.prototype : void 0,
              "%TypeError%": r,
              "%TypeErrorPrototype%": r.prototype,
              "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
              "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
              "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
              "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
              "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
              "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
              "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
              "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
              "%URIError%": URIError,
              "%URIErrorPrototype%": URIError.prototype,
              "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
              "%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
              "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
              "%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
            }, y = n(4), m = y.call(Function.call, String.prototype.replace), v = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, b = /\\(\\)?/g, w = function (e) {
              var t = [];
              return m(e, v, function (e, n, r, i) {
                t[t.length] = r ? m(i, b, "$1") : n || e
              }), t
            }, x = function (e, t) {
              if (!(e in g)) throw new SyntaxError("intrinsic " + e + " does not exist!");
              if (void 0 === g[e] && !t) throw new r("intrinsic " + e + " exists, but is not available. Please file an issue!");
              return g[e]
            };
      e.exports = function (e, t) {
        if ("string" != typeof e || 0 === e.length) throw new TypeError("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
        for (var n = w(e), o = x("%" + (n.length > 0 ? n[0] : "") + "%", t), a = 1; a < n.length; a += 1) if (null != o) if (i && a + 1 >= n.length) {
          var s = i(o, n[a]);
          if (!(t || n[a] in o)) throw new r("base intrinsic for " + e + " exists, but the property is not available.");
          o = s ? s.get || s.value : o[n[a]]
        } else o = o[n[a]];
        return o
      }
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      t.DEFAULT_EMOJI_CDN = "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/", t.DB_NAME = "Comment", t.defaultConfig = {
        lang: "zh-CN",
        langMode: null,
        appId: "",
        appKey: "",
        clazzName: "Comment",
        meta: ["nick", "mail", "link"],
        path: location.pathname,
        placeholder: "Just Go Go",
        pageSize: 10,
        recordIP: !0,
        serverURLs: "",
        visitor: !1,
        emojiCDN: "",
        emojiMaps: void 0,
        enableQQ: !1,
        requiredFields: []
      }, t.defaultMeta = ["nick", "mail", "link"], t.QQCacheKey = "_v_Cache_Q", t.MetaCacheKey = "_v_Cache_Meta", t.RandomStr = (Date.now() + Math.round(1e3 * Math.random())).toString(32), t.VERSION = "1.4.14"
    }, function (e, t, n) {
      function r(e, t) {
        return new o(t).process(e)
      }
      var i = n(7),
        o = n(29);
      t = e.exports = r, t.FilterCSS = o;
      for (var a in i) t[a] = i[a];
      "undefined" != typeof window && (window.filterCSS = e.exports)
    }, function (e, t, n) {
      "use strict";
      var r = n(32);
      e.exports = Function.prototype.bind || r
    }, function (e, t) {
      e.exports = {
        indexOf: function (e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1
        },
        forEach: function (e, t, n) {
          var r, i;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
        },
        trim: function (e) {
          return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
        },
        spaceIndex: function (e) {
          var t = /\s|\n|\t/,
            n = t.exec(e);
          return n ? n.index : -1
        }
      }
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = n(2),
        i = {
          cdn: r.DEFAULT_EMOJI_CDN,
          maps: n(53),
          parse: function (e) {
            return String(e).replace(new RegExp(":(" + Object.keys(i.maps).join("|") + "):", "ig"), function (e, t) {
              return i.maps[t] ? i.build(t) : e
            })
          },
          build: function (e) {
            var t = /^(https?:)?\/\//i,
              n = i.maps[e],
              r = t.test(n) ? n : i.cdn + n;
            return t.test(r) ? '<img alt="' + e + '" referrerPolicy="no-referrer" class="vemoji" src="' + r + '" />' : ""
          }
        };
      t.
        default = i
    }, function (e, t) {
      function n() {
        var e = {};
        return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e
      }
      function r(e, t, n) { }
      function i(e, t, n) { }
      function o(e, t) {
        return a.test(t) ? "" : t
      }
      var a = /javascript\s*\:/gim;
      t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = i, t.safeAttrValue = o
    }, function (e, t) {
      e.exports = {
        indexOf: function (e, t) {
          var n, r;
          if (Array.prototype.indexOf) return e.indexOf(t);
          for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1
        },
        forEach: function (e, t, n) {
          var r, i;
          if (Array.prototype.forEach) return e.forEach(t, n);
          for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
        },
        trim: function (e) {
          return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
        },
        trimRight: function (e) {
          return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
        }
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(40),
        i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        o = Object.prototype.toString,
        a = Array.prototype.concat,
        s = Object.defineProperty,
        l = function (e) {
          return "function" == typeof e && "[object Function]" === o.call(e)
        },
        c = s &&
          function () {
            var e = {};
            try {
              s(e, "x", {
                enumerable: !1,
                value: e
              });
              for (var t in e) return !1;
              return e.x === e
            } catch (e) {
              return !1
            }
          }(), u = function (e, t, n, r) {
            (!(t in e) || l(r) && r()) && (c ? s(e, t, {
              configurable: !0,
              enumerable: !1,
              value: n,
              writable: !0
            }) : e[t] = n)
          }, p = function (e, t) {
            var n = arguments.length > 2 ? arguments[2] : {},
              o = r(t);
            i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
            for (var s = 0; s < o.length; s += 1) u(e, o[s], t[o[s]], n[o[s]])
          };
      p.supportsDescriptors = !!c, e.exports = p
    }, function (e, t, n) {
      "use strict";
      var r = Object.prototype.toString;
      e.exports = function (e) {
        var t = r.call(e),
          n = "[object Arguments]" === t;
        return n || (n = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === r.call(e.callee)), n
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(45),
        i = n(44),
        o = n(46),
        a = o("String.prototype.replace"),
        s = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
        l = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
      e.exports = function () {
        var e = i(r(this));
        return a(a(e, s, ""), l, "")
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(4),
        i = n(1),
        o = i("%Function%"),
        a = o.apply,
        s = o.call;
      e.exports = function () {
        return r.apply(s, arguments)
      }, e.exports.apply = function () {
        return r.apply(a, arguments)
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(11),
        i = "​";
      e.exports = function () {
        return String.prototype.trim && i.trim() === i ? String.prototype.trim : r
      }
    }, function (e, t) {
      var n;
      n = function () {
        return this
      }();
      try {
        n = n || Function("return this")() || (0, eval)("this")
      } catch (e) {
        "object" == typeof window && (n = window)
      }
      e.exports = n
    }, function (e, t, n) {
      function r() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: ["autoplay", "controls", "loop", "preload", "src"],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          ins: ["datetime"],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
        }
      }
      function i(e, t, n) { }
      function o(e, t, n) { }
      function a(e, t, n) { }
      function s(e, t, n) { }
      function l(e) {
        return e.replace(S, "&lt;").replace(O, "&gt;")
      }
      function c(e, t, n, r) {
        if (n = g(n), "href" === t || "src" === t) {
          if ("#" === (n = A.trim(n))) return "#";
          if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "#" !== n[0] && "/" !== n[0]) return ""
        } else if ("background" === t) {
          if (I.lastIndex = 0, I.test(n)) return ""
        } else if ("style" === t) {
          if (C.lastIndex = 0, C.test(n)) return "";
          if (M.lastIndex = 0, M.test(n) && (I.lastIndex = 0, I.test(n))) return "";
          !1 !== r && (r = r || _, n = r.process(n))
        }
        return n = y(n)
      }
      function u(e) {
        return e.replace($, "&quot;")
      }
      function p(e) {
        return e.replace(E, '"')
      }
      function f(e) {
        return e.replace(j, function (e, t) {
          return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
        })
      }
      function d(e) {
        return e.replace(P, ":").replace(T, " ")
      }
      function h(e) {
        for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
        return A.trim(t)
      }
      function g(e) {
        return e = p(e), e = f(e), e = d(e), e = h(e)
      }
      function y(e) {
        return e = u(e), e = l(e)
      }
      function m() {
        return ""
      }
      function v(e, t) {
        function n(t) {
          return !!r || -1 !== A.indexOf(e, t)
        }
        "function" != typeof t && (t = function () { });
        var r = !Array.isArray(e),
          i = [],
          o = !1;
        return {
          onIgnoreTag: function (e, r, a) {
            if (n(e)) {
              if (a.isClosing) {
                var s = "[/removed]",
                  l = a.position + s.length;
                return i.push([!1 !== o ? o : a.position, l]), o = !1, s
              }
              return o || (o = a.position), "[removed]"
            }
            return t(e, r, a)
          },
          remove: function (e) {
            var t = "",
              n = 0;
            return A.forEach(i, function (r) {
              t += e.slice(n, r[0]), n = r[1]
            }), t += e.slice(n)
          }
        }
      }
      function b(e) {
        return e.replace(F, "")
      }
      function w(e) {
        var t = e.split("");
        return t = t.filter(function (e) {
          var t = e.charCodeAt(0);
          return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
        }), t.join("")
      }
      var x = n(3).FilterCSS,
        k = n(3).getDefaultWhiteList,
        A = n(5),
        _ = new x,
        S = /</g,
        O = />/g,
        $ = /"/g,
        E = /&quot;/g,
        j = /&#([a-zA-Z0-9]*);?/gim,
        P = /&colon;?/gim,
        T = /&newline;?/gim,
        I = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
        C = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        M = /u\s*r\s*l\s*\(.*/gi,
        F = /<!--[\s\S]*?-->/g;
      t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = i, t.onIgnoreTag = o, t.onTagAttr = a, t.onIgnoreTagAttr = s, t.safeAttrValue = c, t.escapeHtml = l, t.escapeQuote = u, t.unescapeQuote = p, t.escapeHtmlEntities = f, t.escapeDangerHtml5Entities = d, t.clearNonPrintableCharacter = h, t.friendlyAttrValue = g, t.escapeAttrValue = y, t.onIgnoreTagStripAll = m, t.StripTagBody = v, t.stripCommentTag = b, t.stripBlankChar = w, t.cssFilter = _, t.getDefaultCSSWhiteList = k
    }, function (e, t, n) {
      function r(e) {
        var t = p.spaceIndex(e);
        if (-1 === t) var n = e.slice(1, -1);
        else var n = e.slice(1, t + 1);
        return n = p.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
      }
      function i(e) {
        return "</" === e.slice(0, 2)
      }
      function o(e, t, n) {
        "user strict";
        var o = "",
          a = 0,
          s = !1,
          l = !1,
          c = 0,
          u = e.length,
          p = "",
          f = "";
        for (c = 0; c < u; c++) {
          var d = e.charAt(c);
          if (!1 === s) {
            if ("<" === d) {
              s = c;
              continue
            }
          } else if (!1 === l) {
            if ("<" === d) {
              o += n(e.slice(a, c)), s = c, a = c;
              continue
            }
            if (">" === d) {
              o += n(e.slice(a, s)), f = e.slice(s, c + 1), p = r(f), o += t(s, o.length, p, f, i(f)), a = c + 1, s = !1;
              continue
            }
            if (('"' === d || "'" === d) && "=" === e.charAt(c - 1)) {
              l = d;
              continue
            }
          } else if (d === l) {
            l = !1;
            continue
          }
        }
        return a < e.length && (o += n(e.substr(a))), o
      }
      function a(e, t) {
        "user strict";

        function n(e, n) {
          if (e = p.trim(e), e = e.replace(f, "").toLowerCase(), !(e.length < 1)) {
            var r = t(e, n || "");
            r && i.push(r)
          }
        }
        for (var r = 0, i = [], o = !1, a = e.length, c = 0; c < a; c++) {
          var d, h, g = e.charAt(c);
          if (!1 !== o || "=" !== g) if (!1 === o || c !== r || '"' !== g && "'" !== g || "=" !== e.charAt(c - 1)) if (/\s|\n|\t/.test(g)) {
            if (e = e.replace(/\s|\n|\t/g, " "), !1 === o) {
              if (-1 === (h = s(e, c))) {
                d = p.trim(e.slice(r, c)), n(d), o = !1, r = c + 1;
                continue
              }
              c = h - 1;
              continue
            }
            if (-1 === (h = l(e, c - 1))) {
              d = p.trim(e.slice(r, c)), d = u(d), n(o, d), o = !1, r = c + 1;
              continue
            }
          } else;
          else {
            if (-1 === (h = e.indexOf(g, c + 1))) break;
            d = p.trim(e.slice(r + 1, h)), n(o, d), o = !1, c = h, r = c + 1
          } else o = e.slice(r, c), r = c + 1
        }
        return r < e.length && (!1 === o ? n(e.slice(r)) : n(o, u(p.trim(e.slice(r))))), p.trim(i.join(" "))
      }
      function s(e, t) {
        for (; t < e.length; t++) {
          var n = e[t];
          if (" " !== n) return "=" === n ? t : -1
        }
      }
      function l(e, t) {
        for (; t > 0; t--) {
          var n = e[t];
          if (" " !== n) return "=" === n ? t : -1
        }
      }
      function c(e) {
        return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
      }
      function u(e) {
        return c(e) ? e.substr(1, e.length - 2) : e
      }
      var p = n(5),
        f = /[^a-zA-Z0-9_:\.\-]/gim;
      t.parseTag = o, t.parseAttr = a
    }, function (e, t, n) {
      var r, i, o;
      /*!
        autosize 4.0.2
        license: MIT
        http://www.jacklmoore.com/autosize
      */
      !
        function (n, a) {
          i = [e, t], r = a, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
        }(0, function (e, t) {
          "use strict";

          function n(e) {
            function t(t) {
              var n = e.style.width;
              e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
            }
            function n(e) {
              for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                node: e.parentNode,
                scrollTop: e.parentNode.scrollTop
              }), e = e.parentNode;
              return t
            }
            function r() {
              if (0 !== e.scrollHeight) {
                var t = n(e),
                  r = document.documentElement && document.documentElement.scrollTop;
                e.style.height = "", e.style.height = e.scrollHeight + s + "px", l = e.clientWidth, t.forEach(function (e) {
                  e.node.scrollTop = e.scrollTop
                }), r && (document.documentElement.scrollTop = r)
              }
            }
            function i() {
              r();
              var n = Math.round(parseFloat(e.style.height)),
                i = window.getComputedStyle(e, null),
                o = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : e.offsetHeight;
              if (o < n ? "hidden" === i.overflowY && (t("scroll"), r(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== i.overflowY && (t("hidden"), r(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), c !== o) {
                c = o;
                var s = a("autosize:resized");
                try {
                  e.dispatchEvent(s)
                } catch (e) { }
              }
            }
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
              var s = null,
                l = null,
                c = null,
                u = function () {
                  e.clientWidth !== l && i()
                },
                p = function (t) {
                  window.removeEventListener("resize", u, !1), e.removeEventListener("input", i, !1), e.removeEventListener("keyup", i, !1), e.removeEventListener("autosize:destroy", p, !1), e.removeEventListener("autosize:update", i, !1), Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n]
                  }), o.delete(e)
                }.bind(e, {
                  height: e.style.height,
                  resize: e.style.resize,
                  overflowY: e.style.overflowY,
                  overflowX: e.style.overflowX,
                  wordWrap: e.style.wordWrap
                });
              e.addEventListener("autosize:destroy", p, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", i, !1), window.addEventListener("resize", u, !1), e.addEventListener("input", i, !1), e.addEventListener("autosize:update", i, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", o.set(e, {
                destroy: p,
                update: i
              }), function () {
                var t = window.getComputedStyle(e, null);
                "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), i()
              }()
            }
          }
          function r(e) {
            var t = o.get(e);
            t && t.destroy()
          }
          function i(e) {
            var t = o.get(e);
            t && t.update()
          }
          var o = "function" == typeof Map ? new Map : function () {
            var e = [],
              t = [];
            return {
              has: function (t) {
                return e.indexOf(t) > -1
              },
              get: function (n) {
                return t[e.indexOf(n)]
              },
              set: function (n, r) {
                -1 === e.indexOf(n) && (e.push(n), t.push(r))
              },
              delete: function (n) {
                var r = e.indexOf(n);
                r > -1 && (e.splice(r, 1), t.splice(r, 1))
              }
            }
          }(),
            a = function (e) {
              return new Event(e, {
                bubbles: !0
              })
            };
          try {
            new Event("test")
          } catch (e) {
            a = function (e) {
              var t = document.createEvent("Event");
              return t.initEvent(e, !0, !1), t
            }
          }
          var s = null;
          "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (s = function (e) {
            return e
          }, s.destroy = function (e) {
            return e
          }, s.update = function (e) {
            return e
          }) : (s = function (e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
              return n(e)
            }), e
          }, s.destroy = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
          }, s.update = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
          }), t.
            default = s, e.exports = t.
              default
        })
    }, function (e, t, n) {
      "use strict";

      function r(e) {
        return e && e.__esModule ? e : {
          default:
            e
        }
      }
      function i(e) {
        return !!e && this.init(e), this
      }
      function o(e) {
        return new i(e)
      }
      var a = n(26),
        s = r(a),
        l = n(17),
        c = r(l),
        u = n(20),
        p = r(u),
        f = n(6),
        d = r(f),
        h = n(2),
        g = n(24),
        y = r(g),
        m = n(0),
        v = r(m),
        b = n(22),
        w = r(b),
        x = n(19),
        k = r(x),
        A = n(23),
        _ = n(25),
        S = r(_),
        O = n(21),
        $ = r(O),
        E = {
          comment: "",
          nick: "",
          mail: "",
          link: "",
          ua: v.
            default.ua,
          url:
            "",
          QQAvatar: ""
        },
        j = "",
        P = {
          cdn: "https://gravatar.loli.net/avatar/",
          ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
          params: "",
          hide: !1
        };
      i.prototype.init = function (e) {
        if ("undefined" == typeof document) throw new Error("Sorry, Valine does not support Server-side rendering.");
        var t = this;
        return e && (e = v.
          default.extend(h.defaultConfig, e), t.i18n = (0, p.
            default)(e.lang || v.
              default.lang, e.langMode), t.config = e, d.
                default.maps = !!e.emojiMaps && e.emojiMaps || d.
                  default.maps, d.
                    default.cdn = !!e.emojiCDN && e.emojiCDN || d.
                      default.cdn, t._init()), t
      }, i.prototype._init = function () {
        var e = this;
        try {
          var t = e.config,
            n = t.avatar,
            r = t.avatarForce,
            i = t.avatar_cdn,
            o = t.visitor,
            a = t.path,
            s = void 0 === a ? location.pathname : a,
            l = t.pageSize,
            c = t.recordIP;
          e.config.path = s.replace(/index\.html?$/, "");
          var u = P.ds,
            p = r ? "&q=" + h.RandomStr : "";
          P.params = "?d=" + (u.indexOf(n) > -1 ? n : "mp") + "&v=" + h.VERSION + p, P.hide = "hide" === n, P.cdn = /^https?\:\/\//.test(i) ? i : P.cdn, e.config.pageSize = isNaN(l) ? 10 : l < 1 ? 10 : l, c && (0, A.recordIPFn)(function (e) {
            return E.ip = e
          });
          var f = e.config.el || null,
            d = (0, v.
              default)(f);
          if (f = f instanceof HTMLElement ? f : d[d.length - 1] || null) {
            e.$el = (0, v.
              default)(f), e.$el.addClass("v").attr("data-class", "v"), P.hide && e.$el.addClass("hide-avatar"), e.config.meta = (e.config.guest_info || e.config.meta || h.defaultMeta).filter(function (e) {
                return h.defaultMeta.indexOf(e) > -1
              }), e.config.requiredFields = e.config.requiredFields.filter(function (e) {
                return h.defaultMeta.indexOf(e) > -1
              });
            var g = (0 == e.config.meta.length ? h.defaultMeta : e.config.meta).map(function (t) {
              var n = "mail" == t ? "email" : "text";
              return h.defaultMeta.indexOf(t) > -1 ? '<div class="col-12 col-md-4"><div class="form-group"><input name="' + t + '" placeholder="' + e.i18n.t(t) + '" class="v' + t + ' vinput form-control text-sm" type="' + n + '"></div></div>' : ""
            }),
              y = '<div class="my-3 vcount" style="display:none;"><i class="text-xl text-primary iconfont icon-message--line mr-2"></i>' + e.i18n.t("comments") + ' (<span class="font-theme text-muted vnum">0</span>) </div> <div id="respond" class="comment-respond mb-4 vpanel"><div class="comment-from-author vwrap"><div class="comment-form-text"><div class="comment-form-info row row-sm vheader item' + g.length + '" id="qqShow">' + g.join("") + '</div><div class="comment-textarea mb-3 vedit"><textarea id="veditor comment" class="form-control form-control-sm veditor vinput" name="comment" placeholder="' + e.config.placeholder + '"  rows="1"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"></div ></div ></div ></div > <div class="vrow"> <div class="d-flex flex-fill align-items-center vcol vcol-70 text-right"><div class="flex-fill"></div><div class="form-submit"><a title="' + e.i18n.t(" emoji") + '"  class="mr-md-2 btn btn-outline-light vicon vemoji-btn">表情</a><a  style="display:none;" title="' + e.i18n.t(" cancelReply") + '" class="mr-md-2 btn btn-outline-light vsubmit  cancel-reply text-right">取消互动</a><a  title="发布评论" class="btn btn-outline-light vsubmit vbtn">' + e.i18n.t("submit") + '</a></div></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div><div style="display:none;" class="vmark"></div></div></div> <div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><ul class="comment-list vcards"></ul><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="pagenavi text-center vpage txt-center" style="display:none"><a class="vmore vbtn">' + e.i18n.t("more") +"</a></div>";
            e.$el.html(y), e.$el.find(".cancel-reply").on("click", function (t) {
              e.reset()
            });
            var m = e.$el.find(".vempty");
            e.$nodata = {
              show: function (t) {
                return m.html(t || e.i18n.t("sofa")).show(), e
              },
              hide: function () {
                return m.hide(), e
              }
            };
            var b = e.$el.find(".vload-bottom"),
              w = e.$el.find(".vload-top");
            e.$loading = {
              show: function (t) {
                return t && w.show() || b.show(), e.$nodata.hide(), e
              },
              hide: function () {
                return w.hide(), b.hide(), 0 === e.$el.find(".vcard").length && e.$nodata.show(), e
              }
            }
          } (0, k.
            default)(e.config, function (t) {
              var n = (0, v.
                default)(".valine-comment-count"),
                r = 0;
              !
                function t(n) {
                  var i = n[r++];
                  if (i) {
                    var o = (0, v.
                      default)(i).attr("data-xid"); !!o && e.Q(o).count().then(function (e) {
                        i.innerText = e, t(n)
                      }).
                        catch(function (e) {
                          i.innerText = 0
                        })
                  }
                }(n), o && I.add(AV.Object.extend("Counter"), e.config.path), e.$el && e.bind()
            })
        } catch (t) {
          (0, $.
            default)(e, t, "init")
        }
      };
      var T = function (e, t) {
        var n = new e,
          r = new AV.ACL;
        r.setPublicReadAccess(!0), r.setPublicWriteAccess(!0), n.setACL(r), n.set("url", t.url), n.set("xid", t.xid), n.set("title", t.title), n.set("time", 1), n.save().then(function (e) {
          (0, v.
            default)(t.el).find(".leancloud-visitors-count").text(1)
        }).
          catch(function (e) { })
      },
        I = {
          add: function (e, t) {
            var n = this,
              r = (0, v.
                default)(".leancloud_visitors,.leancloud-visitors");
            if (1 === r.length) {
              var i = r[0],
                o = decodeURI((0, v.
                  default)(i).attr("id")),
                a = (0, v.
                  default)(i).attr("data-flag-title"),
                s = encodeURI(o),
                l = {
                  el: i,
                  url: o,
                  xid: s,
                  title: a
                };
              if (decodeURI(o) === decodeURI(t)) {
                var c = new AV.Query(e);
                c.equalTo("url", o), c.find().then(function (t) {
                  if (t.length > 0) {
                    var n = t[0];
                    n.increment("time"), n.save().then(function (e) {
                      (0, v.
                        default)(i).find(".leancloud-visitors-count").text(e.get("time"))
                    }).
                      catch(function (e) { })
                  } else T(e, l)
                }).
                  catch(function (t) {
                    101 == t.code ? T(e, l) : (0, $.
                      default)(n, t)
                  })
              } else I.show(e, r)
            } else I.show(e, r)
          },
          show: function (e, t) {
            var n = [];
            if (t.forEach(function (e) {
              var t = (0, v.
                default)(e).find(".leancloud-visitors-count");
              t && t.text("0"), n.push(/\%/.test((0, v.
                default)(e).attr("id")) ? decodeURI((0, v.
                  default)(e).attr("id")) : (0, v.
                    default)(e).attr("id"))
            }), n.length) {
              var r = new AV.Query(e);
              r.containedIn("url", n), r.find().then(function (e) {
                e.length > 0 && t.forEach(function (t) {
                  e.forEach(function (e) {
                    var n = e.get("xid") || encodeURI(e.get("url")),
                      r = e.get("time"),
                      i = (0, v.
                        default)(t),
                      o = i.attr("id");
                    if ((/\%/.test(o) ? o : encodeURI(o)) == n) {
                      var a = i.find(".leancloud-visitors-count");
                      a && a.text(r)
                    }
                  })
                })
              }).
                catch(function (e) { })
            }
          }
        };
      i.prototype.Q = function (e) {
        var t = this,
          n = arguments.length,
          r = t.config.clazzName;
        if (1 == n) {
          var i = new AV.Query(r);
          i.doesNotExist("rid");
          var o = new AV.Query(r);
          o.equalTo("rid", "");
          var a = AV.Query.or(i, o);
          return "*" === e ? a.exists("url") : a.equalTo("url", decodeURI(e)), a.addDescending("createdAt"), a.addDescending("insertedAt"), a
        }
        var s = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""),
          l = "select * from " + r + " where rid in (" + s + ") order by -createdAt,-createdAt";
        return AV.Query.doCloudQuery(l)
      }, i.prototype.installLocale = function (e, t) {
        var n = this;
        return n.i18n(e, t), n
      }, i.prototype.setPath = function (e) {
        return this.config.path = e, this
      }, i.prototype.bind = function () {
        var e = this,
          t = e.$el.find(".vemojis"),
          n = e.$el.find(".vpreview"),
          r = e.$el.find(".vemoji-btn"),
          i = e.$el.find(".vpreview-btn"),
          o = e.$el.find(".veditor"),
          a = d.
            default.maps,
          l = !1,
          u = function (e) {
            var n = [];
            for (var r in a) a.hasOwnProperty(r) && !!d.
              default.build(r) && n.push('<i title="' + r + '" >' + d.
                default.build(r) + "</i>");
            t.html(n.join("")), l = !0, t.find("i").on("click", function (e) {
              e.preventDefault(), x(o[0], " :" + (0, v.
                default)(this).attr("title") + ":")
            })
          };
        e.$emoji = {
          show: function () {
            return !l && u(), e.$preview.hide(), t.show(), r.addClass("actived"), e.$emoji
          },
          hide: function () {
            return r.removeClass("actived"), t.hide(), e.$emoji
          }
        }, e.$preview = {
          show: function () {
            return j ? (e.$emoji.hide(), i.addClass("actived"), n.html(j).show(), M()) : e.$preview.hide(), e.$preview
          },
          hide: function () {
            return i.removeClass("actived"), n.hide().html(""), e.$preview
          }
        };
        var p = function (t) {
          var r = (0, w.
            default)(t.val() || "");
          r || e.$preview.hide(), j != r && (j = r, i.hasClass("actived") > -1 && j != n.html() && n.html(j), (0, c.
            default)(t[0]), M())
        };
        r.on("click", function (t) {
          r.hasClass("actived") ? e.$emoji.hide() : e.$emoji.show()
        }), i.on("click", function (t) {
          i.hasClass("actived") ? e.$preview.hide() : e.$preview.show()
        });
        var f = e.config.meta,
          g = {},
          m = {
            veditor: "comment"
          };
        f.forEach(function (e) {
          m["v" + e] = e
        });
        for (var b in m) m.hasOwnProperty(b) &&
          function () {
            var t = m[b],
              n = e.$el.find("." + b);
            g[t] = n, n.on("input change blur propertychange", function (r) {
              e.config.enableQQ && "blur" === r.type && "nick" === t && (isNaN(n.val()) ? v.
                default.store.get(h.QQCacheKey) && v.
                  default.store.get(h.QQCacheKey).nick != n.val() && (v.
                    default.store.remove(h.QQCacheKey), E.nick = n.val(), E.mail = "", E.QQAvatar = "") :
                (0, A.fetchQQFn)(n.val(), function (e) {
                  var t = e.nick || n.val(),
                    r = e.qq + "@qq.com";
                  (0, v.
                    default)(".vnick").val(t), (0, v.
                      default)(".vmail").val(r), E.nick = t, E.mail = r, E.QQAvatar = e.pic
                })), "comment" === t ? p(n) : E[t] = v.
                  default.escape(n.val().replace(/(^\s*)|(\s*$)/g, "")).substring(0, 40)
            })
          }();
        var x = function (e, t) {
          if (document.selection) {
            e.focus();
            document.selection.createRange().text = t, e.focus()
          } else if (e.selectionStart || "0" == e.selectionStart) {
            var n = e.selectionStart,
              r = e.selectionEnd,
              i = e.scrollTop;
            e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length), e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length, e.scrollTop = i
          } else e.focus(), e.value += t;
          setTimeout(function (t) {
            p((0, v.
              default)(e))
          }, 100)
        },
          k = {
            no: 1,
            size: e.config.pageSize,
            skip: e.config.pageSize
          },
          _ = e.$el.find(".vpage");
        _.on("click", function (e) {
          _.hide(), k.no++, O()
        });
        var O = function () {
          var t = k.size,
            n = k.no,
            r = Number(e.$el.find(".vnum").text());
          e.$loading.show();
          var i = e.Q(e.config.path);
          i.limit(t), i.skip((n - 1) * t), i.find().then(function (i) {
            if (k.skip = k.size, i && i.length) {
              var o = [];
              i.forEach(function (t) {
                o.push(t.id), T(t, e.$el.find(".vcards"), !0)
              }), e.Q(e.config.path, o).then(function (e) {
                (e && e.results || []).forEach(function (e) {
                  T(e, (0, v.
                    default)('.vquote[data-self-id="' + e.get("rid") + '"]'))
                }).
                  catch(function (e) { })
              }), t * n < r ? _.show() : _.hide()
            } else e.$nodata.show();
            e.$loading.hide()
          }).
            catch(function (t) {
              e.$loading.hide(), (0, $.
                default)(e, t, "query")
            })
        };
        e.Q(e.config.path).count().then(function (t) {
          t > 0 ? (e.$el.find(".vcount").show().find(".vnum").text(t), O()) : e.$loading.hide()
        }).
          catch(function (t) {
            (0, $.
              default)(e, t, "count")
          });
        var T = function (t, n, r) {
          var i = (0, v.
            default)('<li class="comment odd alt thread-odd thread-alt depth-1 vcard" id="li-comment-' + t.id + '"></li>'),
            o = t.get("ua"),
            a = "";
          o && !/ja/.test(e.config.lang) && (o = v.
            default.detect(o), a = '<span class="badge badge-light vsys mr-md-2">' + o.browser +  '</span>  <span class="badge badge-success vsys">' + o.os + " " + o.osVersion + "</span>"), "*" === e.config.path && (a = '<a href="' + t.get("url") + '" class="vsys">' + t.get("url") + "</a>");
          var l = t.get("link") ? /^https?\:\/\//.test(t.get("link")) ? t.get("link") : "http://" + t.get("link") : "",
            c = l ? '<div class="flex-fill comment-author text-sm"><a class="vnick" rel="nofollow" href="' + l + '" target="_blank" >' + t.get("nick") + "</a></div>" : '<div class="flex-fill comment-author text-sm vnick">' + t.get("nick") + "</div>",
            u = P.hide ? "" : e.config.enableQQ && t.get("QQAvatar") ? '<article id="div-comment-233" class="comment-body d-flex flex-fill "><div class="comment-avatar-author vcard mr-2 mr-md-3 "><div class="w-48"><img class="rounded vimg" src="' + t.get("QQAvatar") + '" referrerPolicy="no-referrer"/></div></div>' : '<article id="div-comment-233" class="comment-body d-flex flex-fill "><div class="comment-avatar-author vcard mr-2 mr-md-3 "><div class="w-48"><img class="rounded vimg" src="' + (P.cdn + (0, s.
              default)(t.get("mail")) + P.params) + '"></div></div>',
            p = u + '<div class="comment-text d-flex flex-fill flex-column vh"><div class="comment-info d-flex align-items-center mb-1 vhead">' + c + " " + a + '</div><div class="comment-content d-inline-block text-sm vcontent" data-expand="' + e.i18n.t("expand") + '">' + (0, S.
              default)(t.get("comment")) + '</div><div class="d-flex flex-fill text-xs text-muted pt-2 vmeta"><div><time class="comment-date vtime" >' + (0, y.
                default)(t.get("insertedAt"), e.i18n) + '</time></div><div class="flex-fill"></div> <a rel="nofollow" class="comment-reply-link vat" title="与 ' + t.get("nick") + ' 互动！" data-vm-id="' + (t.get("rid") || t.id) + '" data-self-id="' + t.id + '">' + e.i18n.t("reply") + '</a></div><div class="vreply-wrapper" data-self-id="' + t.id + '"></div><div class="vquote" data-self-id="' + t.id + '"></div></div></article>';
          i.html(p);
          var f = i.find(".vat");
          i.find("a").forEach(function (e) {
            e && !(0, v.
              default)(e).hasClass("at") && (0, v.
                default)(e).attr({
                  rel: "nofollow"
                })
          }), r ? n.append(i) : n.prepend(i);
          var d = i.find(".vcontent");
          d && F(d), f && C(f, t), M()
        },
          I = {},
          C = function (t, n) {
            t.on("click", function (r) {
              var i = t.attr("data-vm-id"),
                o = t.attr("data-self-id"),
                a = e.$el.find(".vwrap"),
                s = "@" + v.
                  default.escape(n.get("nick"));
              (0, v.
                default)('.vreply-wrapper[data-self-id="' + o + '"]').append(a).find(".cancel-reply").show(), I = {
                  at: v.
                    default.escape(s) + " ",
                  rid:
                    i,
                  pid: o,
                  rmail: n.get("mail")
                }, g.comment.attr({
                  placeholder: s
                })[0].focus()
            })
          },
          M = function () {
            setTimeout(function () {
              try {
                "MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() || MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.querySelector(".v")])), "renderMathInElement" in window && renderMathInElement((0, v.
                  default)(".v")[0], {
                  delimiters: [{
                    left: "$$",
                    right: "$$",
                    display: !0
                  }, {
                    left: "$",
                    right: "$",
                    display: !1
                  }]
                })
              } catch (e) { }
            }, 100)
          },
          F = function (e) {
            setTimeout(function () {
              e[0].offsetHeight > 200 && (e.addClass("expand"), e.on("click", function (t) {
                e.removeClass("expand")
              }))
            })
          };
        !
          function (t) {
            if (t = v.
              default.store.get(h.MetaCacheKey) || t) for (var n in f) {
                var r = f[n];
                e.$el.find(".v" + r).val(v.
                  default.unescape(t[r])), E[r] = t[r]
              }
            var i = v.
              default.store.get(h.QQCacheKey);
            E.QQAvatar = e.config.enableQQ && !!i && i.pic || ""
          }(), e.reset = function () {
            E.comment = "", g.comment.val(""), p(g.comment), g.comment.attr("placeholder", e.config.placeholder), I = {}, e.$preview.hide(), e.$el.find(".vpanel").append(e.$el.find(".vwrap")), e.$el.find(".cancel-reply").hide(), j = ""
          };
        var R = e.$el.find(".vsubmit"),
          z = function (t) {
            if (e.config.requiredFields.indexOf("nick") > -1 && E.nick.length < 3) return g.nick[0].focus(), void e.$el.find(".status-bar").text("" + e.i18n.t("nickFail")).empty(3e3);
            if (e.config.requiredFields.indexOf("mail") > -1 && !/[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(E.mail)) return g.mail[0].focus(), void e.$el.find(".status-bar").text("" + e.i18n.t("mailFail")).empty(3e3);
            if ("" == j) return void g.comment[0].focus();
            E.comment = j, E.nick = E.nick || "Anonymous";
            var n = v.
              default.store.get("vlx");
            if (n) {
              if (Date.now() / 1e3 - n / 1e3 < 20) return void e.$el.find(".status-bar").text(e.i18n.t("busy")).empty(3e3)
            }
            Q()
          },
          L = function () {
            var e = new AV.ACL;
            return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
          },
          Q = function () {
            v.
              default.store.set("vlx", Date.now()), R.attr({
                disabled: !0
              }), e.$loading.show(!0);
            var t = AV.Object.extend(e.config.clazzName || "Comment"),
              n = new t;
            if (E.url = decodeURI(e.config.path), E.insertedAt = new Date, I.rid) {
              var r = I.pid || I.rid;
              n.set("rid", I.rid), n.set("pid", r), E.comment = j.replace("<p>", '<p><a class="at" href="#' + r + '">' + I.at + "</a> , ")
            }
            for (var i in E) if (E.hasOwnProperty(i)) {
              var o = E[i];
              n.set(i, o)
            }
            n.setACL(L()), n.save().then(function (t) {
              "Anonymous" != E.nick && v.
                default.store.set(h.MetaCacheKey, {
                  nick: E.nick,
                  link: E.link,
                  mail: E.mail
                });
              var n = e.$el.find(".vnum");
              try {
                I.rid ? T(t, (0, v.
                  default)('.vquote[data-self-id="' + I.rid + '"]'), !0) : (Number(n.text()) ? n.text(Number(n.text()) + 1) : e.$el.find(".vcount").show().find(".vnum").text(Number(n.text()) + 1), T(t, e.$el.find(".vcards")), k.skip++), R.removeAttr("disabled"), e.$loading.hide(), e.reset()
              } catch (t) {
                (0, $.
                  default)(e, t, "save")
              }
            }).
              catch(function (t) {
                (0, $.
                  default)(e, t, "commitEvt")
              })
          };
        R.on("click", z), (0, v.
          default)(document).on("keydown", function (e) {
            e = event || e;
            var t = e.keyCode || e.which || e.charCode;
            ((e.ctrlKey || e.metaKey) && 13 === t && z(), 9 === t) && ("veditor" == (document.activeElement.id || "") && (e.preventDefault(), x(o[0], "    ")))
          }).on("paste", function (e) {
            var t = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData;
            t && B(t.items, !0)
          }), o.on("dragenter dragleave dragover drop", function (e) {
            e.stopPropagation(), e.preventDefault(), "drop" === e.type && B(e.dataTransfer.items)
          });
        var B = function (e, t) {
          for (var n = [], r = 0, i = e.length; r < i; r++) {
            var a = e[r];
            if ("string" === a.kind && a.type.match("^text/html")) !t && a.getAsString(function (e) {
              e && x(o[0], e.replace(/<[^>]+>/g, ""))
            });
            else if (-1 !== a.type.indexOf("image")) {
              n.push(a.getAsFile());
              continue
            }
          }
          U(n)
        },
          U = function t(n, r) {
            r = r || 0;
            var i = n.length;
            if (i > 0) {
              var a = n[r];
              R.attr({
                disabled: !0
              });
              var s = "![Uploading " + a.name + "...]()";
              x(o[0], s), N(a, function (l) {
                500 != l.code ? (o.val(o.val().replace(s, "![" + a.name + "](" + l.data.url + ")\r\n")), (0, c.
                  default)(o[0]), ++r < i ? t(n, r) : R.removeAttr("disabled")) : (o.val(o.val().replace(s, "")), (0, c.
                    default)(o[0]), e.$el.find(".status-bar").text(l.msg).empty(3e3), R.removeAttr("disabled"))
              })
            }
          },
          N = function (e, t) {
            var n = new FormData;
            n.append("image", e), v.
              default.ajax({
                type: "post",
                url: "https://pic.alexhchu.com/api/upload",
                data: n,
                success: function (e) {
                  t && t(e)
                }
              })
          }
      }, e.exports = o, e.exports.
        default = o
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = n(0),
        i = function (e) {
          return e && e.__esModule ? e : {
            default:
              e
          }
        }(r),
        o = !1;
      t.
        default = function (e, t) {
          if ("AV" in window) {
            var n = window.AV.version || window.AV.VERSION;
            parseInt(n.split(".")[0]) > 2 ? o = !!AV.applicationId && !!AV.applicationKey : i.
              default.deleteInWin("AV", 0)
          }
          o ? t && t() : i.
            default.sdkLoader("//cdn.jsdelivr.net/npm/leancloud-storage@3/dist/av-min.js", "AV", function (n) {
              var r = "https://",
                i = "",
                a = e.app_id || e.appId,
                s = e.app_key || e.appKey;
              if (!e.serverURLs) switch (a.slice(-9)) {
                case "-9Nh9j0Va":
                  r += "tab.";
                  break;
                case "-MdYXbMMI":
                  r += "us."
              }
              i = e.serverURLs || r + "avoscloud.com", AV.init({
                appId: a,
                appKey: s,
                serverURLs: i
              }), o = !0, t && t()
            })
        }
    }, function (e, t, n) {
      "use strict";

      function r(e) {
        return e && e.__esModule ? e : {
          default:
            e
        }
      }
      t.__esModule = !0;
      var i = n(37),
        o = r(i),
        a = n(56),
        s = r(a),
        l = n(57),
        c = r(l),
        u = n(54),
        p = r(u),
        f = n(55),
        d = r(f),
        h = {
          zh: s.
            default,
          "zh-cn":
            s.
              default,
          "zh-CN":
            s.
              default,
          "zh-TW":
            c.
              default,
          en:
            p.
              default,
          "en-US":
            p.
              default,
          ja:
            d.
              default,
          "ja-JP":
            d.
              default
        };
      t.
        default = function (e, t) {
          return !h[e] && e && t && (h[e] = t), new o.
            default({
              phrases: h[e || "zh"],
              locale: e
            })
        }
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0, t.
        default = function (e, t) {
          if (e.$el && e.$loading.hide().$nodata.hide(), "[object Error]" === {}.toString.call(t)) {
            var n = t.code || t.message || t.error || "";
            if (isNaN(n)) e.$el && e.$nodata.show('<pre style="text-align:left;"> ' + JSON.stringify(t) + "</pre>");
            else {
              var r = e.i18n.t("code-" + n),
                i = (r == "code-" + n ? void 0 : r) || t.message || t.error || "";
              101 == n || -1 == n ? e.$nodata.show() : e.$el && e.$nodata.show('<pre style="text-align:left;">Code ' + n + ": " + i + "</pre>")
            }
          } else e.$el && e.$nodata.show('<pre style="text-align:left;">' + JSON.stringify(t) + "</pre>")
        }
    }, function (e, t, n) {
      "use strict";

      function r(e) {
        return e && e.__esModule ? e : {
          default:
            e
        }
      }
      t.__esModule = !0;
      var i = n(36),
        o = r(i),
        a = n(0),
        s = r(a),
        l = n(6),
        c = r(l),
        u = n(33),
        p = new i.Renderer;
      p.code = function (e, t) {
        return '<pre><code class="hljs language-' + t + '">' + (!t || !hljs.getLanguage(t) ? s.
          default.escape(e) :
          hljs.highlight(t, e).value) + "</code></pre>"
      }, o.
        default.setOptions({
          renderer: "hljs" in window ? p : new i.Renderer,
          highlight: function (e, t) {
            return "hljs" in window ? t && hljs.getLanguage(t) && hljs.highlight(t, e, !0).value || hljs.highlightAuto(e).value : u(e)
          },
          gfm: !0,
          tables: !0,
          breaks: !0,
          pedantic: !1,
          sanitize: !0,
          smartLists: !0,
          smartypants: !0,
          headerPrefi: "v-"
        }), t.
          default = function (e) {
            return c.
              default.parse((0, o.
                default)(e))
          }
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0, t.recordIPFn = t.fetchQQFn = void 0;
      var r = n(0),
        i = function (e) {
          return e && e.__esModule ? e : {
            default:
              e
          }
        }(r),
        o = n(2),
        a = function (e, t) {
          var n = i.
            default.store.get(o.QQCacheKey);
          n && n.qq == e ? t && t(n) :
            i.
              default.ajax({
                type: "POST",
                url: "//valine.api.ioliu.cn/getqqinfo",
                data: {
                  qq: e
                },
                success: function (e) {
                  e.errmsg || (i.
                    default.store.set(o.QQCacheKey, e), t && t(e))
                }
              })
        },
        s = function (e) {
          i.
            default.sdkLoader("//api.ip.sb/jsonip?callback=getIP", "getIP"), window.getIP = function (t) {
              e && e(t.ip), i.
                default.deleteInWin("getIP")
            }
        };
      t.fetchQQFn = a, t.recordIPFn = s
    }, function (e, t, n) {
      "use strict";
      var r = function (e, t) {
        if (!e) return "";
        try {
          var n = o(e).getTime(),
            r = (new Date).getTime(),
            a = r - n,
            s = Math.floor(a / 864e5);
          if (0 === s) {
            var l = a % 864e5,
              c = Math.floor(l / 36e5);
            if (0 === c) {
              var u = l % 36e5,
                p = Math.floor(u / 6e4);
              if (0 === p) {
                var f = u % 6e4;
                return Math.round(f / 1e3) + " " + t.t("seconds")
              }
              return p + " " + t.t("minutes")
            }
            return c + " " + t.t("hours")
          }
          return s < 0 ? t.t("now") : s < 8 ? s + " " + t.t("days") : i(e)
        } catch (e) { }
      },
        i = function (e) {
          var t = a(e.getDate(), 2),
            n = a(e.getMonth() + 1, 2);
          return a(e.getFullYear(), 2) + "-" + n + "-" + t
        },
        o = function e(t) {
          return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : /GMT/.test(t || "") ? e(new Date(t).getTime()) : (t = (t || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), new Date(t))
        },
        a = function (e, t) {
          for (var n = e.toString(); n.length < t;) n = "0" + n;
          return n
        };
      e.exports = r
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = n(51),
        i = function (e) {
          return e && e.__esModule ? e : {
            default:
              e
          }
        }(r);
      t.
        default = function (e) {
          return (0, i.
            default)(e, {
              onTagAttr: function (e, t, n, r) {
                return o(e, t, n, r)
              },
              onIgnoreTagAttr: function (e, t, n, r) {
                return o(e, t, n, r)
              }
            }).replace(/\<\/?div\>/gi, "")
        };
      var o = function (e, t, n, r) {
        if (/code|pre|span/gi.test(e)) {
          if ("style" == t) return t + '="' + (/^color/gi.test(n) ? n : "").replace(/(color:[#0-9a-fA-F]{1,6};?).+/gi, "$1") + '"';
          if ("class" == t) return t + "='" + i.
            default.escapeAttrValue(n) + "'"
        }
        if ("img" === e && ["src", "class"].indexOf(t) > -1) return t + '="' + i.
          default.escapeAttrValue(n) + '" referrerPolicy="no-referrer" '
      }
    }, function (e, t, n) {
      var r;
      !
        function (i) {
          "use strict";

          function o(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
          }
          function a(e, t) {
            return e << t | e >>> 32 - t
          }
          function s(e, t, n, r, i, s) {
            return o(a(o(o(t, e), o(r, s)), i), n)
          }
          function l(e, t, n, r, i, o, a) {
            return s(t & n | ~t & r, e, t, i, o, a)
          }
          function c(e, t, n, r, i, o, a) {
            return s(t & r | n & ~r, e, t, i, o, a)
          }
          function u(e, t, n, r, i, o, a) {
            return s(t ^ n ^ r, e, t, i, o, a)
          }
          function p(e, t, n, r, i, o, a) {
            return s(n ^ (t | ~r), e, t, i, o, a)
          }
          function f(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            var n, r, i, a, s, f = 1732584193,
              d = -271733879,
              h = -1732584194,
              g = 271733878;
            for (n = 0; n < e.length; n += 16) r = f, i = d, a = h, s = g, f = l(f, d, h, g, e[n], 7, -680876936), g = l(g, f, d, h, e[n + 1], 12, -389564586), h = l(h, g, f, d, e[n + 2], 17, 606105819), d = l(d, h, g, f, e[n + 3], 22, -1044525330), f = l(f, d, h, g, e[n + 4], 7, -176418897), g = l(g, f, d, h, e[n + 5], 12, 1200080426), h = l(h, g, f, d, e[n + 6], 17, -1473231341), d = l(d, h, g, f, e[n + 7], 22, -45705983), f = l(f, d, h, g, e[n + 8], 7, 1770035416), g = l(g, f, d, h, e[n + 9], 12, -1958414417), h = l(h, g, f, d, e[n + 10], 17, -42063), d = l(d, h, g, f, e[n + 11], 22, -1990404162), f = l(f, d, h, g, e[n + 12], 7, 1804603682), g = l(g, f, d, h, e[n + 13], 12, -40341101), h = l(h, g, f, d, e[n + 14], 17, -1502002290), d = l(d, h, g, f, e[n + 15], 22, 1236535329), f = c(f, d, h, g, e[n + 1], 5, -165796510), g = c(g, f, d, h, e[n + 6], 9, -1069501632), h = c(h, g, f, d, e[n + 11], 14, 643717713), d = c(d, h, g, f, e[n], 20, -373897302), f = c(f, d, h, g, e[n + 5], 5, -701558691), g = c(g, f, d, h, e[n + 10], 9, 38016083), h = c(h, g, f, d, e[n + 15], 14, -660478335), d = c(d, h, g, f, e[n + 4], 20, -405537848), f = c(f, d, h, g, e[n + 9], 5, 568446438), g = c(g, f, d, h, e[n + 14], 9, -1019803690), h = c(h, g, f, d, e[n + 3], 14, -187363961), d = c(d, h, g, f, e[n + 8], 20, 1163531501), f = c(f, d, h, g, e[n + 13], 5, -1444681467), g = c(g, f, d, h, e[n + 2], 9, -51403784), h = c(h, g, f, d, e[n + 7], 14, 1735328473), d = c(d, h, g, f, e[n + 12], 20, -1926607734), f = u(f, d, h, g, e[n + 5], 4, -378558), g = u(g, f, d, h, e[n + 8], 11, -2022574463), h = u(h, g, f, d, e[n + 11], 16, 1839030562), d = u(d, h, g, f, e[n + 14], 23, -35309556), f = u(f, d, h, g, e[n + 1], 4, -1530992060), g = u(g, f, d, h, e[n + 4], 11, 1272893353), h = u(h, g, f, d, e[n + 7], 16, -155497632), d = u(d, h, g, f, e[n + 10], 23, -1094730640), f = u(f, d, h, g, e[n + 13], 4, 681279174), g = u(g, f, d, h, e[n], 11, -358537222), h = u(h, g, f, d, e[n + 3], 16, -722521979), d = u(d, h, g, f, e[n + 6], 23, 76029189), f = u(f, d, h, g, e[n + 9], 4, -640364487), g = u(g, f, d, h, e[n + 12], 11, -421815835), h = u(h, g, f, d, e[n + 15], 16, 530742520), d = u(d, h, g, f, e[n + 2], 23, -995338651), f = p(f, d, h, g, e[n], 6, -198630844), g = p(g, f, d, h, e[n + 7], 10, 1126891415), h = p(h, g, f, d, e[n + 14], 15, -1416354905), d = p(d, h, g, f, e[n + 5], 21, -57434055), f = p(f, d, h, g, e[n + 12], 6, 1700485571), g = p(g, f, d, h, e[n + 3], 10, -1894986606), h = p(h, g, f, d, e[n + 10], 15, -1051523), d = p(d, h, g, f, e[n + 1], 21, -2054922799), f = p(f, d, h, g, e[n + 8], 6, 1873313359), g = p(g, f, d, h, e[n + 15], 10, -30611744), h = p(h, g, f, d, e[n + 6], 15, -1560198380), d = p(d, h, g, f, e[n + 13], 21, 1309151649), f = p(f, d, h, g, e[n + 4], 6, -145523070), g = p(g, f, d, h, e[n + 11], 10, -1120210379), h = p(h, g, f, d, e[n + 2], 15, 718787259), d = p(d, h, g, f, e[n + 9], 21, -343485551), f = o(f, r), d = o(d, i), h = o(h, a), g = o(g, s);
            return [f, d, h, g]
          }
          function d(e) {
            var t, n = "",
              r = 32 * e.length;
            for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
          }
          function h(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
          }
          function g(e) {
            return d(f(h(e), 8 * e.length))
          }
          function y(e, t) {
            var n, r, i = h(e),
              o = [],
              a = [];
            for (o[15] = a[15] = void 0, i.length > 16 && (i = f(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
            return r = f(o.concat(h(t)), 512 + 8 * t.length), d(f(a.concat(r), 640))
          }
          function m(e) {
            var t, n, r = "0123456789abcdef",
              i = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
            return i
          }
          function v(e) {
            return unescape(encodeURIComponent(e))
          }
          function b(e) {
            return g(v(e))
          }
          function w(e) {
            return m(b(e))
          }
          function x(e, t) {
            return y(v(e), v(t))
          }
          function k(e, t) {
            return m(x(e, t))
          }
          function A(e, t, n) {
            return t ? n ? x(t, e) : k(t, e) : n ? b(e) : w(e)
          }
          void 0 !== (r = function () {
            return A
          }.call(t, n, t, e)) && (e.exports = r)
        }()
    }, function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = function (e) {
        e = e || navigator.userAgent;
        var t = {},
          n = {
            Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
            Presto: e.indexOf("Presto") > -1,
            WebKit: e.indexOf("AppleWebKit") > -1,
            Gecko: e.indexOf("Gecko/") > -1,
            Safari: e.indexOf("Safari") > -1,
            Edge: e.indexOf("Edge") > -1 || e.indexOf("Edg") > -1,
            Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
            IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
            Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
            "Firefox Focus": e.indexOf("Focus") > -1,
            Chromium: e.indexOf("Chromium") > -1,
            Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
            Vivaldi: e.indexOf("Vivaldi") > -1,
            Yandex: e.indexOf("YaBrowser") > -1,
            Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
            360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
            UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
            QQBrowser: e.indexOf("QQBrowser") > -1,
            QQ: e.indexOf("QQ/") > -1,
            Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
            Maxthon: e.indexOf("Maxthon") > -1,
            Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
            LBBROWSER: e.indexOf("LBBROWSER") > -1,
            "2345Explorer": e.indexOf("2345Explorer") > -1,
            TheWorld: e.indexOf("TheWorld") > -1,
            XiaoMi: e.indexOf("MiuiBrowser") > -1,
            Quark: e.indexOf("Quark") > -1,
            Qiyu: e.indexOf("Qiyu") > -1,
            Wechat: e.indexOf("MicroMessenger") > -1,
            Taobao: e.indexOf("AliApp(TB") > -1,
            Alipay: e.indexOf("AliApp(AP") > -1,
            Weibo: e.indexOf("Weibo") > -1,
            Douban: e.indexOf("com.douban.frodo") > -1,
            Suning: e.indexOf("SNEBUY-APP") > -1,
            iQiYi: e.indexOf("IqiyiApp") > -1,
            Windows: e.indexOf("Windows") > -1,
            Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
            macOS: e.indexOf("Macintosh") > -1,
            Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
            Ubuntu: e.indexOf("Ubuntu") > -1,
            FreeBSD: e.indexOf("FreeBSD") > -1,
            Debian: e.indexOf("Debian") > -1,
            "Windows Phone": e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
            BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1 || e.indexOf("BB10") > -1,
            MeeGo: e.indexOf("MeeGo") > -1,
            Symbian: e.indexOf("Symbian") > -1,
            iOS: e.indexOf("like Mac OS X") > -1,
            "Chrome OS": e.indexOf("CrOS") > -1,
            WebOS: e.indexOf("hpwOS") > -1,
            Mobile: e.indexOf("Mobi") > -1 || e.indexOf("iPh") > -1 || e.indexOf("480") > -1,
            Tablet: e.indexOf("Tablet") > -1 || e.indexOf("Pad") > -1 || e.indexOf("Nexus 7") > -1
          };
        n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
        var r = {
          browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
          os: ["Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"]
        };
        for (var i in r) if (r.hasOwnProperty(i)) for (var o = 0, a = r[i].length; o < a; o++) {
          var s = r[i][o];
          n[s] && (t[i] = s)
        }
        var l = {
          Windows: function () {
            var t = e.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
            return {
              6.4: "10",
              6.3: "8.1",
              6.2: "8",
              6.1: "7",
              "6.0": "Vista",
              5.2: "XP",
              5.1: "XP",
              "5.0": "2000"
            }[t] || t
          },
          Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
          iOS: e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
          Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
          "Windows Phone": e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
          macOS: e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
          WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
          BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1")
        };
        t.osVersion = "";
        var c = l[t.os];
        c && (t.osVersion = "function" == typeof c ? c() : c == e ? "" : c);
        var u = {
          Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
          Chrome: e.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
          IE: e.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
          Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
          Firefox: e.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
          "Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
          Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
          Opera: e.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
          Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
          Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
          Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
          Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
          QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
          QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
          Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
          UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
          Sogou: e.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
          "2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
          TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
          XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
          Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
          Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
          Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
          Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
          Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
          Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
          Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
          Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
          iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
        };
        t.version = "";
        var p = u[t.browser];
        return p && (t.version = "function" == typeof p ? p() : p == e ? "" : p), void 0 == t.browser && (t.browser = "Unknow App"), t
      };
      t.
        default = r
    }, function (e, t, n) {
      var r, i;
      !
        function (n, o) {
          var o = function (e, t, n) {
            function r(i, o, a) {
              return a = Object.create(r.fn), i && a.push.apply(a, i[t] ? [i] : "" + i === i ? /</.test(i) ? ((o = e.createElement(o)).innerHTML = i, o.children) : o ? (o = r(o)[0]) ? o[n](i) : a : e[n](i) : i), a
            }
            return r.fn = [], r.one = function (e, t) {
              return r(e, t)[0] || null
            }, r
          }(document, "addEventListener", "querySelectorAll");
          r = [], void 0 !== (i = function () {
            return o
          }.apply(t, r)) && (e.exports = i)
        }()
    }, function (e, t, n) {
      function r(e) {
        return void 0 === e || null === e
      }
      function i(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t
      }
      function o(e) {
        e = i(e || {}), e.whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || a.safeAttrValue, this.options = e
      }
      var a = n(7),
        s = n(30);
      n(8);
      o.prototype.process = function (e) {
        if (e = e || "", !(e = e.toString())) return "";
        var t = this,
          n = t.options,
          i = n.whiteList,
          o = n.onAttr,
          a = n.onIgnoreAttr,
          l = n.safeAttrValue;
        return s(e, function (e, t, n, s, c) {
          var u = i[n],
            p = !1;
          if (!0 === u ? p = u : "function" == typeof u ? p = u(s) : u instanceof RegExp && (p = u.test(s)), !0 !== p && (p = !1), s = l(n, s)) {
            var f = {
              position: t,
              sourcePosition: e,
              source: c,
              isWhite: p
            };
            if (p) {
              var d = o(n, s, f);
              return r(d) ? n + ":" + s : d
            }
            var d = a(n, s, f);
            return r(d) ? void 0 : d
          }
        })
      }, e.exports = o
    }, function (e, t, n) {
      function r(e, t) {
        function n() {
          if (!o) {
            var n = i.trim(e.slice(a, s)),
              r = n.indexOf(":");
            if (-1 !== r) {
              var c = i.trim(n.slice(0, r)),
                u = i.trim(n.slice(r + 1));
              if (c) {
                var p = t(a, l.length, c, u, n);
                p && (l += p + "; ")
              }
            }
          }
          a = s + 1
        }
        e = i.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
        for (var r = e.length, o = !1, a = 0, s = 0, l = ""; s < r; s++) {
          var c = e[s];
          if ("/" === c && "*" === e[s + 1]) {
            var u = e.indexOf("*/", s + 2);
            if (-1 === u) break;
            s = u + 1, a = s + 1, o = !1
          } else "(" === c ? o = !0 : ")" === c ? o = !1 : ";" === c ? o || n() : "\n" === c && n()
        }
        return i.trim(l)
      }
      var i = n(8);
      e.exports = r
    }, function (e, t, n) {
      "use strict";
      var r = n(35),
        i = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        a = function (e, t, n) {
          for (var r = 0, i = e.length; r < i; r++) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
        },
        s = function (e, t, n) {
          for (var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
        },
        l = function (e, t, n) {
          for (var r in e) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
        },
        c = function (e, t, n) {
          if (!r(t)) throw new TypeError("iterator must be a function");
          var o;
          arguments.length >= 3 && (o = n), "[object Array]" === i.call(e) ? a(e, t, o) : "string" == typeof e ? s(e, t, o) : l(e, t, o)
        };
      e.exports = c
    }, function (e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        i = Object.prototype.toString;
      e.exports = function (e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== i.call(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
        for (var n, o = r.call(arguments, 1), a = function () {
          if (this instanceof n) {
            var i = t.apply(this, o.concat(r.call(arguments)));
            return Object(i) === i ? i : this
          }
          return t.apply(e, o.concat(r.call(arguments)))
        }, s = Math.max(0, t.length - o.length), l = [], c = 0; c < s; c++) l.push("$" + c);
        if (n = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(a), t.prototype) {
          var u = function () { };
          u.prototype = t.prototype, n.prototype = new u, u.prototype = null
        }
        return n
      }
    }, function (e, t, n) {
      !
        function (t, n) {
          e.exports = n()
        }(0, function () {
          "use strict";

          function e(e) {
            return '<span style="color: slategray">' + e + "</span>"
          }
          var t = function (e, t) {
            return t = {
              exports: {}
            }, e(t, t.exports), t.exports
          }(function (e) {
            var t = e.exports = function () {
              return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm")
            };
            t.line = function () {
              return /(?:^|\s)\/\/(.+?)$/gm
            }, t.block = function () {
              return /\/\*([\S\s]*?)\*\//gm
            }
          }),
            n = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
          return function (r, i) {
            void 0 === i && (i = {});
            var o = i.colors;
            void 0 === o && (o = n);
            var a = 0,
              s = {},
              l = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/,
              c = /</,
              u = new RegExp("(" + l.source + "|" + c.source + ")|(" + t().source + ")", "gmi");
            return r.replace(u, function (t, n, r) {
              if (r) return e(r);
              if ("<" === n) return "&lt;";
              var i;
              s[n] ? i = s[n] : (i = o[a], s[n] = i);
              var l = '<span style="color: #' + i + '">' + n + "</span>";
              return a = ++a % o.length, l
            })
          }
        })
    }, function (e, t, n) {
      "use strict";
      var r = n(4);
      e.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
    }, function (e, t, n) {
      "use strict";
      var r = Function.prototype.toString,
        i = /^\s*class\b/,
        o = function (e) {
          try {
            var t = r.call(e);
            return i.test(t)
          } catch (e) {
            return !1
          }
        },
        a = function (e) {
          try {
            return !o(e) && (r.call(e), !0)
          } catch (e) {
            return !1
          }
        },
        s = Object.prototype.toString,
        l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
      e.exports = function (e) {
        if (!e) return !1;
        if ("function" != typeof e && "object" != typeof e) return !1;
        if ("function" == typeof e && !e.prototype) return !0;
        if (l) return a(e);
        if (o(e)) return !1;
        var t = s.call(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
      }
    }, function (e, t, n) {
      (function (t) {
        !
          function (t) {
            "use strict";

            function n(e) {
              this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = g.normal, this.options.pedantic ? this.rules = g.pedantic : this.options.gfm && (this.options.tables ? this.rules = g.tables : this.rules = g.gfm)
            }
            function r(e, t) {
              if (this.options = t || h.defaults, this.links = e, this.rules = y.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
              this.options.pedantic ? this.rules = y.pedantic : this.options.gfm && (this.options.breaks ? this.rules = y.breaks : this.rules = y.gfm)
            }
            function i(e) {
              this.options = e || h.defaults
            }
            function o() { }
            function a(e) {
              this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options
            }
            function s(e, t) {
              return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }
            function l(e) {
              return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
                return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
              })
            }
            function c(e, t) {
              return e = e.source || e, t = t || "", {
                replace: function (t, n) {
                  return n = n.source || n, n = n.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this
                },
                getRegex: function () {
                  return new RegExp(e, t)
                }
              }
            }
            function u(e, t) {
              return m[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? m[" " + e] = e + "/" : m[" " + e] = e.replace(/[^/]*$/, "")), e = m[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
            }
            function p() { }
            function f(e) {
              for (var t, n, r = 1; r < arguments.length; r++) {
                t = arguments[r];
                for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
            function d(e, t) {
              var n = e.replace(/([^\\])\|/g, "$1 |").split(/ +\| */),
                r = 0;
              if (n.length > t) n.splice(t);
              else for (; n.length < t;) n.push("");
              for (; r < n.length; r++) n[r] = n[r].replace(/\\\|/g, "|");
              return n
            }
            function h(e, t, r) {
              if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
              if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
              if (r || "function" == typeof t) {
                r || (r = t, t = null), t = f({}, h.defaults, t || {});
                var i, o, l = t.highlight,
                  c = 0;
                try {
                  i = n.lex(e, t)
                } catch (e) {
                  return r(e)
                }
                o = i.length;
                var u = function (e) {
                  if (e) return t.highlight = l, r(e);
                  var n;
                  try {
                    n = a.parse(i, t)
                  } catch (t) {
                    e = t
                  }
                  return t.highlight = l, e ? r(e) : r(null, n)
                };
                if (!l || l.length < 3) return u();
                if (delete t.highlight, !o) return u();
                for (; c < i.length; c++)!
                  function (e) {
                    "code" !== e.type ? --o || u() : l(e.text, e.lang, function (t, n) {
                      return t ? u(t) : null == n || n === e.text ? --o || u() : (e.text = n, e.escaped = !0, void (--o || u()))
                    })
                  }(i[c])
              } else try {
                return t && (t = f({}, h.defaults, t)), a.parse(n.lex(e, t), t)
              } catch (e) {
                if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || h.defaults).silent) return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                throw e
              }
            }
            var g = {
              newline: /^\n+/,
              code: /^( {4}[^\n]+\n*)+/,
              fences: p,
              hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
              heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
              nptable: p,
              blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
              list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
              html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
              def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
              table: p,
              lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
              paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
              text: /^[^\n]+/
            };
            g._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, g._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, g.def = c(g.def).replace("label", g._label).replace("title", g._title).getRegex(), g.bullet = /(?:[*+-]|\d+\.)/, g.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, g.item = c(g.item, "gm").replace(/bull/g, g.bullet).getRegex(), g.list = c(g.list).replace(/bull/g, g.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + g.def.source + ")").getRegex(), g._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", g._comment = /<!--(?!-?>)[\s\S]*?-->/, g.html = c(g.html, "i").replace("comment", g._comment).replace("tag", g._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), g.paragraph = c(g.paragraph).replace("hr", g.hr).replace("heading", g.heading).replace("lheading", g.lheading).replace("tag", g._tag).getRegex(), g.blockquote = c(g.blockquote).replace("paragraph", g.paragraph).getRegex(), g.normal = f({}, g), g.gfm = f({}, g.normal, {
              fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
              paragraph: /^/,
              heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
            }), g.gfm.paragraph = c(g.paragraph).replace("(?!", "(?!" + g.gfm.fences.source.replace("\\1", "\\2") + "|" + g.list.source.replace("\\1", "\\3") + "|").getRegex(), g.tables = f({}, g.gfm, {
              nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
              table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
            }), g.pedantic = f({}, g.normal, {
              html: c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", g._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
              def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
            }), n.rules = g, n.lex = function (e, t) {
              return new n(t).lex(e)
            }, n.prototype.lex = function (e) {
              return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
            }, n.prototype.token = function (e, t) {
              e = e.replace(/^ +$/gm, "");
              for (var n, r, i, o, a, s, l, c, u, p, f, h, y; e;) if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({
                type: "space"
              })), i = this.rules.code.exec(e)) e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({
                type: "code",
                text: this.options.pedantic ? i : i.replace(/\n+$/, "")
              });
              else if (i = this.rules.fences.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: "code",
                lang: i[2],
                text: i[3] || ""
              });
              else if (i = this.rules.heading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: "heading",
                depth: i[1].length,
                text: i[2]
              });
              else if (t && (i = this.rules.nptable.exec(e)) && (s = {
                type: "table",
                header: d(i[1].replace(/^ *| *\| *$/g, "")),
                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
              }, s.header.length === s.align.length)) {
                for (e = e.substring(i[0].length), c = 0; c < s.align.length; c++) / ^ * -+: * $ /.test(s.align[c]) ? s.align[c] = "right" : /^ *:-+: *$/.test(s.align[c]) ? s.align[c] = "center" : /^ *:-+ *$/.test(s.align[c]) ? s.align[c] = "left" : s.align[c] = null;
                for (c = 0; c < s.cells.length; c++) s.cells[c] = d(s.cells[c], s.header.length);
                this.tokens.push(s)
              } else if (i = this.rules.hr.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: "hr"
              });
              else if (i = this.rules.blockquote.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: "blockquote_start"
              }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({
                type: "blockquote_end"
              });
              else if (i = this.rules.list.exec(e)) {
                for (e = e.substring(i[0].length), o = i[2], f = o.length > 1, this.tokens.push({
                  type: "list_start",
                  ordered: f,
                  start: f ? +o : ""
                }), i = i[0].match(this.rules.item), n = !1, p = i.length, c = 0; c < p; c++) s = i[c], l = s.length, s = s.replace(/^ *([*+-]|\d+\.) +/, ""), ~s.indexOf("\n ") && (l -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + l + "}", "gm"), "")), this.options.smartLists && c !== p - 1 && (a = g.bullet.exec(i[c + 1])[0], o === a || o.length > 1 && a.length > 1 || (e = i.slice(c + 1).join("\n") + e, c = p - 1)), r = n || /\n\n(?!\s*$)/.test(s), c !== p - 1 && (n = "\n" === s.charAt(s.length - 1), r || (r = n)), h = /^\[[ xX]\] /.test(s), y = void 0, h && (y = " " !== s[1], s = s.replace(/^\[[ xX]\] +/, "")), this.tokens.push({
                  type: r ? "loose_item_start" : "list_item_start",
                  task: h,
                  checked: y
                }), this.token(s, !1), this.tokens.push({
                  type: "list_item_end"
                });
                this.tokens.push({
                  type: "list_end"
                })
              } else if (i = this.rules.html.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: this.options.sanitize ? "paragraph" : "html",
                pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
                text: i[0]
              });
              else if (t && (i = this.rules.def.exec(e))) e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), u = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[u] || (this.tokens.links[u] = {
                href: i[2],
                title: i[3]
              });
              else if (t && (i = this.rules.table.exec(e)) && (s = {
                type: "table",
                header: d(i[1].replace(/^ *| *\| *$/g, "")),
                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
              }, s.header.length === s.align.length)) {
                for (e = e.substring(i[0].length), c = 0; c < s.align.length; c++) / ^ * -+: * $ /.test(s.align[c]) ? s.align[c] = "right" : /^ *:-+: *$/.test(s.align[c]) ? s.align[c] = "center" : /^ *:-+ *$/.test(s.align[c]) ? s.align[c] = "left" : s.align[c] = null;
                for (c = 0; c < s.cells.length; c++) s.cells[c] = d(s.cells[c].replace(/^ *\| *| *\| *$/g, ""), s.header.length);
                this.tokens.push(s)
              } else if (i = this.rules.lheading.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === i[2] ? 1 : 2,
                text: i[1]
              });
              else if (t && (i = this.rules.paragraph.exec(e))) e = e.substring(i[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
              });
              else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), this.tokens.push({
                type: "text",
                text: i[0]
              });
              else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
              return this.tokens
            };
            var y = {
              escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
              autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
              url: p,
              tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
              link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
              reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
              nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
              strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
              em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
              code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
              br: /^ {2,}\n(?!\s*$)/,
              del: p,
              text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
            };
            y._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, y._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, y._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, y.autolink = c(y.autolink).replace("scheme", y._scheme).replace("email", y._email).getRegex(), y._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, y.tag = c(y.tag).replace("comment", g._comment).replace("attribute", y._attribute).getRegex(), y._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, y._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/, y._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, y.link = c(y.link).replace("label", y._label).replace("href", y._href).replace("title", y._title).getRegex(), y.reflink = c(y.reflink).replace("label", y._label).getRegex(), y.normal = f({}, y), y.pedantic = f({}, y.normal, {
              strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
              link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", y._label).getRegex(),
              reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", y._label).getRegex()
            }), y.gfm = f({}, y.normal, {
              escape: c(y.escape).replace("])", "~|])").getRegex(),
              url: c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", y._email).getRegex(),
              _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^~~(?=\S)([\s\S]*?\S)~~/,
              text: c(y.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
            }), y.breaks = f({}, y.gfm, {
              br: c(y.br).replace("{2,}", "*").getRegex(),
              text: c(y.gfm.text).replace("{2,}", "*").getRegex()
            }), r.rules = y, r.output = function (e, t, n) {
              return new r(t, n).output(e)
            }, r.prototype.output = function (e) {
              for (var t, n, i, o, a, l = ""; e;) if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), l += a[1];
              else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), "@" === a[2] ? (n = s(this.mangle(a[1])), i = "mailto:" + n) : (n = s(a[1]), i = n), l += this.renderer.link(i, null, n);
              else if (this.inLink || !(a = this.rules.url.exec(e))) {
                if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), e = e.substring(a[0].length), l += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : s(a[0]) : a[0];
                else if (a = this.rules.link.exec(e)) e = e.substring(a[0].length), this.inLink = !0, i = a[2], this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i), t ? (i = t[1], o = t[3]) : o = "") : o = a[3] ? a[3].slice(1, -1) : "", i = i.trim().replace(/^<([\s\S]*)>$/, "$1"), l += this.outputLink(a, {
                  href: r.escapes(i),
                  title: r.escapes(o)
                }), this.inLink = !1;
                else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                  if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                    l += a[0].charAt(0), e = a[0].substring(1) + e;
                    continue
                  }
                  this.inLink = !0, l += this.outputLink(a, t), this.inLink = !1
                } else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), l += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
                else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), l += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
                else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), l += this.renderer.codespan(s(a[2].trim(), !0));
                else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), l += this.renderer.br();
                else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), l += this.renderer.del(this.output(a[1]));
                else if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), l += this.renderer.text(s(this.smartypants(a[0])));
                else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
              } else a[0] = this.rules._backpedal.exec(a[0])[0], e = e.substring(a[0].length), "@" === a[2] ? (n = s(a[0]), i = "mailto:" + n) : (n = s(a[0]), i = "www." === a[1] ? "http://" + n : n), l += this.renderer.link(i, null, n);
              return l
            }, r.escapes = function (e) {
              return e ? e.replace(r.rules._escapes, "$1") : e
            }, r.prototype.outputLink = function (e, t) {
              var n = t.href,
                r = t.title ? s(t.title) : null;
              return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, s(e[1]))
            }, r.prototype.smartypants = function (e) {
              return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
            }, r.prototype.mangle = function (e) {
              if (!this.options.mangle) return e;
              for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
              return n
            }, i.prototype.code = function (e, t, n) {
              if (this.options.highlight) {
                var r = this.options.highlight(e, t);
                null != r && r !== e && (n = !0, e = r)
              }
              return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "</code></pre>"
            }, i.prototype.blockquote = function (e) {
              return "<blockquote>\n" + e + "</blockquote>\n"
            }, i.prototype.html = function (e) {
              return e
            }, i.prototype.heading = function (e, t, n) {
              return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
            }, i.prototype.hr = function () {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, i.prototype.list = function (e, t, n) {
              var r = t ? "ol" : "ul";
              return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
            }, i.prototype.listitem = function (e) {
              return "<li>" + e + "</li>\n"
            }, i.prototype.checkbox = function (e) {
              return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }, i.prototype.paragraph = function (e) {
              return "<p>" + e + "</p>\n"
            }, i.prototype.table = function (e, t) {
              return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
            }, i.prototype.tablerow = function (e) {
              return "<tr>\n" + e + "</tr>\n"
            }, i.prototype.tablecell = function (e, t) {
              var n = t.header ? "th" : "td";
              return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
            }, i.prototype.strong = function (e) {
              return "<strong>" + e + "</strong>"
            }, i.prototype.em = function (e) {
              return "<em>" + e + "</em>"
            }, i.prototype.codespan = function (e) {
              return "<code>" + e + "</code>"
            }, i.prototype.br = function () {
              return this.options.xhtml ? "<br/>" : "<br>"
            }, i.prototype.del = function (e) {
              return "<del>" + e + "</del>"
            }, i.prototype.link = function (e, t, n) {
              if (this.options.sanitize) {
                try {
                  var r = decodeURIComponent(l(e)).replace(/[^\w:]/g, "").toLowerCase()
                } catch (e) {
                  return n
                }
                if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return n
              }
              this.options.baseUrl && !v.test(e) && (e = u(this.options.baseUrl, e));
              try {
                e = encodeURI(e).replace(/%25/g, "%")
              } catch (e) {
                return n
              }
              var i = '<a href="' + s(e) + '"';
              return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
            }, i.prototype.image = function (e, t, n) {
              this.options.baseUrl && !v.test(e) && (e = u(this.options.baseUrl, e));
              var r = '<img src="' + e + '" alt="' + n + '"';
              return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
            }, i.prototype.text = function (e) {
              return e
            }, o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function (e) {
              return e
            }, o.prototype.link = o.prototype.image = function (e, t, n) {
              return "" + n
            }, o.prototype.br = function () {
              return ""
            }, a.parse = function (e, t) {
              return new a(t).parse(e)
            }, a.prototype.parse = function (e) {
              this.inline = new r(e.links, this.options), this.inlineText = new r(e.links, f({}, this.options, {
                renderer: new o
              })), this.tokens = e.reverse();
              for (var t = ""; this.next();) t += this.tok();
              return t
            }, a.prototype.next = function () {
              return this.token = this.tokens.pop()
            }, a.prototype.peek = function () {
              return this.tokens[this.tokens.length - 1] || 0
            }, a.prototype.parseText = function () {
              for (var e = this.token.text;
                "text" === this.peek().type;) e += "\n" + this.next().text;
              return this.inline.output(e)
            }, a.prototype.tok = function () {
              switch (this.token.type) {
                case "space":
                  return "";
                case "hr":
                  return this.renderer.hr();
                case "heading":
                  return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, l(this.inlineText.output(this.token.text)));
                case "code":
                  return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                case "table":
                  var e, t, n, r, i = "",
                    o = "";
                  for (n = "", e = 0; e < this.token.header.length; e++) n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                    header: !0,
                    align: this.token.align[e]
                  });
                  for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                    for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                      header: !1,
                      align: this.token.align[r]
                    });
                    o += this.renderer.tablerow(n)
                  }
                  return this.renderer.table(i, o);
                case "blockquote_start":
                  for (o = "";
                    "blockquote_end" !== this.next().type;) o += this.tok();
                  return this.renderer.blockquote(o);
                case "list_start":
                  o = "";
                  for (var a = this.token.ordered, s = this.token.start;
                    "list_end" !== this.next().type;) o += this.tok();
                  return this.renderer.list(o, a, s);
                case "list_item_start":
                  for (o = "", this.token.task && (o += this.renderer.checkbox(this.token.checked));
                    "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
                  return this.renderer.listitem(o);
                case "loose_item_start":
                  for (o = "";
                    "list_item_end" !== this.next().type;) o += this.tok();
                  return this.renderer.listitem(o);
                case "html":
                  return this.renderer.html(this.token.text);
                case "paragraph":
                  return this.renderer.paragraph(this.inline.output(this.token.text));
                case "text":
                  return this.renderer.paragraph(this.parseText())
              }
            };
            var m = {},
              v = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
            p.exec = p, h.options = h.setOptions = function (e) {
              return f(h.defaults, e), h
            }, h.getDefaults = function () {
              return {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: new i,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tables: !0,
                xhtml: !1
              }
            }, h.defaults = h.getDefaults(), h.Parser = a, h.parser = a.parse, h.Renderer = i, h.TextRenderer = o, h.Lexer = n, h.lexer = n.lex, h.InlineLexer = r, h.inlineLexer = r.output, h.parse = h, e.exports = h
          }(this || "undefined" != typeof window && window)
      }).call(t, n(14))
    }, function (e, t, n) {
      "use strict";

      function r(e) {
        var t = {};
        return u(e, function (e, n) {
          u(e, function (e) {
            t[e] = n
          })
        }), t
      }
      function i(e, t) {
        var n = r(e.pluralTypeToLanguages);
        return n[t] || n[y.call(t, /-/, 1)[0]] || n.en
      }
      function o(e, t, n) {
        return e.pluralTypes[i(e, t)](n)
      }
      function a(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      }
      function s(e) {
        var t = e && e.prefix || "%{",
          n = e && e.suffix || "}";
        if (t === m || n === m) throw new RangeError('"' + m + '" token is reserved for pluralization');
        return new RegExp(a(t) + "(.*?)" + a(n), "g")
      }
      function l(e, t, n, r, i) {
        if ("string" != typeof e) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
        if (null == t) return e;
        var a = e,
          s = r || w,
          l = i || b,
          c = "number" == typeof t ? {
            smart_count: t
          } : t;
        if (null != c.smart_count && a) {
          var u = y.call(a, m);
          a = d(u[o(l, n || "en", c.smart_count)] || u[0])
        }
        return a = g.call(a, s, function (e, t) {
          return f(c, t) && null != c[t] ? c[t] : e
        })
      }
      function c(e) {
        var t = e || {};
        this.phrases = {}, this.extend(t.phrases || {}), this.currentLocale = t.locale || "en";
        var n = t.allowMissing ? l : null;
        this.onMissingKey = "function" == typeof t.onMissingKey ? t.onMissingKey : n, this.warn = t.warn || h, this.tokenRegex = s(t.interpolation), this.pluralRules = t.pluralRules || b
      }
      var u = n(31),
        p = n(50),
        f = n(34),
        d = n(43),
        h = function (e) {
          p(!1, e)
        },
        g = String.prototype.replace,
        y = String.prototype.split,
        m = "||||",
        v = function (e) {
          var t = e % 100,
            n = t % 10;
          return 11 !== t && 1 === n ? 0 : 2 <= n && n <= 4 && !(t >= 12 && t <= 14) ? 1 : 2
        },
        b = {
          pluralTypes: {
            arabic: function (e) {
              if (e < 3) return e;
              var t = e % 100;
              return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5
            },
            bosnian_serbian: v,
            chinese: function () {
              return 0
            },
            croatian: v,
            french: function (e) {
              return e > 1 ? 1 : 0
            },
            german: function (e) {
              return 1 !== e ? 1 : 0
            },
            russian: v,
            lithuanian: function (e) {
              return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19) ? 1 : 2
            },
            czech: function (e) {
              return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
            },
            polish: function (e) {
              if (1 === e) return 0;
              var t = e % 10;
              return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            },
            icelandic: function (e) {
              return e % 10 != 1 || e % 100 == 11 ? 1 : 0
            },
            slovenian: function (e) {
              var t = e % 100;
              return 1 === t ? 0 : 2 === t ? 1 : 3 === t || 4 === t ? 2 : 3
            }
          },
          pluralTypeToLanguages: {
            arabic: ["ar"],
            bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
            chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
            croatian: ["hr", "hr-HR"],
            german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
            french: ["fr", "tl", "pt-br"],
            russian: ["ru", "ru-RU"],
            lithuanian: ["lt"],
            czech: ["cs", "cs-CZ", "sk"],
            polish: ["pl"],
            icelandic: ["is"],
            slovenian: ["sl-SL"]
          }
        },
        w = /%\{(.*?)\}/g;
      c.prototype.locale = function (e) {
        return e && (this.currentLocale = e), this.currentLocale
      }, c.prototype.extend = function (e, t) {
        u(e, function (e, n) {
          var r = t ? t + "." + n : n;
          "object" == typeof e ? this.extend(e, r) : this.phrases[r] = e
        }, this)
      }, c.prototype.unset = function (e, t) {
        "string" == typeof e ? delete this.phrases[e] : u(e, function (e, n) {
          var r = t ? t + "." + n : n;
          "object" == typeof e ? this.unset(e, r) : delete this.phrases[r]
        }, this)
      }, c.prototype.clear = function () {
        this.phrases = {}
      }, c.prototype.replace = function (e) {
        this.clear(), this.extend(e)
      }, c.prototype.t = function (e, t) {
        var n, r, i = null == t ? {} : t;
        if ("string" == typeof this.phrases[e]) n = this.phrases[e];
        else if ("string" == typeof i._) n = i._;
        else if (this.onMissingKey) {
          var o = this.onMissingKey;
          r = o(e, i, this.currentLocale, this.tokenRegex, this.pluralRules)
        } else this.warn('Missing translation for key: "' + e + '"'), r = e;
        return "string" == typeof n && (r = l(n, i, this.currentLocale, this.tokenRegex, this.pluralRules)), r
      }, c.prototype.has = function (e) {
        return f(this.phrases, e)
      }, c.transformPhrase = function (e, t, n) {
        return l(e, t, n)
      }, e.exports = c
    }, function (e, t, n) {
      "use strict";

      function r(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
      }
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
      var i = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      e.exports = function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
          for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
          if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
            return t[e]
          }).join("")) return !1;
          var r = {};
          return "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e
          }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
          return !1
        }
      }() ? Object.assign : function (e, t) {
        for (var n, s, l = r(e), c = 1; c < arguments.length; c++) {
          n = Object(arguments[c]);
          for (var u in n) o.call(n, u) && (l[u] = n[u]);
          if (i) {
            s = i(n);
            for (var p = 0; p < s.length; p++) a.call(n, s[p]) && (l[s[p]] = n[s[p]])
          }
        }
        return l
      }
    }, function (e, t, n) {
      "use strict";
      var r;
      if (!Object.keys) {
        var i = Object.prototype.hasOwnProperty,
          o = Object.prototype.toString,
          a = n(10),
          s = Object.prototype.propertyIsEnumerable,
          l = !s.call({
            toString: null
          }, "toString"),
          c = s.call(function () { }, "prototype"),
          u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          p = function (e) {
            var t = e.constructor;
            return t && t.prototype === e
          },
          f = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
          },
          d = function () {
            if ("undefined" == typeof window) return !1;
            for (var e in window) try {
              if (!f["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                p(window[e])
              } catch (e) {
                return !0
              }
            } catch (e) {
              return !0
            }
            return !1
          }(),
          h = function (e) {
            if ("undefined" == typeof window || !d) return p(e);
            try {
              return p(e)
            } catch (e) {
              return !1
            }
          };
        r = function (e) {
          var t = null !== e && "object" == typeof e,
            n = "[object Function]" === o.call(e),
            r = a(e),
            s = t && "[object String]" === o.call(e),
            p = [];
          if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
          var f = c && n;
          if (s && e.length > 0 && !i.call(e, 0)) for (var d = 0; d < e.length; ++d) p.push(String(d));
          if (r && e.length > 0) for (var g = 0; g < e.length; ++g) p.push(String(g));
          else for (var y in e) f && "prototype" === y || !i.call(e, y) || p.push(String(y));
          if (l) for (var m = h(e), v = 0; v < u.length; ++v) m && "constructor" === u[v] || !i.call(e, u[v]) || p.push(u[v]);
          return p
        }
      }
      e.exports = r
    }, function (e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        i = n(10),
        o = Object.keys,
        a = o ?
          function (e) {
            return o(e)
          } : n(39), s = Object.keys;
      a.shim = function () {
        if (Object.keys) {
          (function () {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
          })(1, 2) || (Object.keys = function (e) {
            return s(i(e) ? r.call(e) : e)
          })
        } else Object.keys = a;
        return Object.keys || a
      }, e.exports = a
    }, function (e, t) {
      function n() {
        throw new Error("setTimeout has not been defined")
      }
      function r() {
        throw new Error("clearTimeout has not been defined")
      }
      function i(e) {
        if (u === setTimeout) return setTimeout(e, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
        try {
          return u(e, 0)
        } catch (t) {
          try {
            return u.call(null, e, 0)
          } catch (t) {
            return u.call(this, e, 0)
          }
        }
      }
      function o(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
          return p(e)
        } catch (t) {
          try {
            return p.call(null, e)
          } catch (t) {
            return p.call(this, e)
          }
        }
      }
      function a() {
        g && d && (g = !1, d.length ? h = d.concat(h) : y = -1, h.length && s())
      }
      function s() {
        if (!g) {
          var e = i(a);
          g = !0;
          for (var t = h.length; t;) {
            for (d = h, h = []; ++y < t;) d && d[y].run();
            y = -1, t = h.length
          }
          d = null, g = !1, o(e)
        }
      }
      function l(e, t) {
        this.fun = e, this.array = t
      }
      function c() { }
      var u, p, f = e.exports = {};
      !
        function () {
          try {
            u = "function" == typeof setTimeout ? setTimeout : n
          } catch (e) {
            u = n
          }
          try {
            p = "function" == typeof clearTimeout ? clearTimeout : r
          } catch (e) {
            p = r
          }
        }();
      var d, h = [],
        g = !1,
        y = -1;
      f.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new l(e, t)), 1 !== h.length || g || i(s)
      }, l.prototype.run = function () {
        this.fun.apply(null, this.array)
      }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function (e) {
        return []
      }, f.binding = function (e) {
        throw new Error("process.binding is not supported")
      }, f.cwd = function () {
        return "/"
      }, f.chdir = function (e) {
        throw new Error("process.chdir is not supported")
      }, f.umask = function () {
        return 0
      }
    }, function (e, t, n) {
      "use strict";

      function r(e) {
        return e = JSON.stringify(e), !! /^\{[\s\S]*\}$/.test(e)
      }
      function i(e) {
        return void 0 === e || "function" == typeof e ? e + "" : JSON.stringify(e)
      }
      function o(e) {
        if ("string" == typeof e) try {
          return JSON.parse(e)
        } catch (t) {
          return e
        }
      }
      function a(e) {
        return "[object Function]" === {}.toString.call(e)
      }
      function s(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
      function l() {
        if (!(this instanceof l)) return new l
      }
      function c(e, t) {
        var n = arguments,
          i = null;
        if (p || (p = l()), 0 === n.length) return p.get();
        if (1 === n.length) {
          if ("string" == typeof e) return p.get(e);
          if (r(e)) return p.set(e)
        }
        if (2 === n.length && "string" == typeof e) {
          if (!t) return p.remove(e);
          if (t && "string" == typeof t) return p.set(e, t);
          t && a(t) && (i = null, i = t(e, p.get(e)), c.set(e, i))
        }
        if (2 === n.length && s(e) && a(t)) for (var o = 0, u = e.length; o < u; o++) i = t(e[o], p.get(e[o])), c.set(e[o], i);
        return c
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      /*!
       * storejs v1.0.24
       * Local storage localstorage package provides a simple API
       *
       * Copyright (c) 2018 kenny wang <wowohoo@qq.com>
       * https://github.com/jaywcjlove/store.js
       *
       * Licensed under the MIT license.
       */
      var u = window.localStorage;
      u = function (e) {
        var t = "_Is_Incognit";
        try {
          e.setItem(t, "yes")
        } catch (t) {
          if ("QuotaExceededError" === t.name) {
            var n = function () { };
            e.__proto__ = {
              setItem: n,
              getItem: n,
              removeItem: n,
              clear: n
            }
          }
        } finally {
          "yes" === e.getItem(t) && e.removeItem(t)
        }
        return e
      }(u), l.prototype = {
        set: function (e, t) {
          if (e && !r(e)) u.setItem(e, i(t));
          else if (r(e)) for (var n in e) this.set(n, e[n]);
          return this
        },
        get: function (e) {
          if (!e) {
            var t = {};
            return this.forEach(function (e, n) {
              return t[e] = n
            }), t
          }
          if ("?" === e.charAt(0)) return this.has(e.substr(1));
          var n = arguments;
          if (n.length > 1) {
            for (var r = {}, i = 0, a = n.length; i < a; i++) {
              var s = o(u.getItem(n[i]));
              s && (r[n[i]] = s)
            }
            return r
          }
          return o(u.getItem(e))
        },
        clear: function () {
          return u.clear(), this
        },
        remove: function (e) {
          var t = this.get(e);
          return u.removeItem(e), t
        },
        has: function (e) {
          return {}.hasOwnProperty.call(this.get(), e)
        },
        keys: function () {
          var e = [];
          return this.forEach(function (t) {
            e.push(t)
          }), e
        },
        forEach: function (e) {
          for (var t = 0, n = u.length; t < n; t++) {
            var r = u.key(t);
            e(r, this.get(r))
          }
          return this
        },
        search: function (e) {
          for (var t = this.keys(), n = {}, r = 0, i = t.length; r < i; r++) t[r].indexOf(e) > -1 && (n[t[r]] = this.get(t[r]));
          return n
        }
      };
      var p = null;
      for (var f in l.prototype) c[f] = l.prototype[f];
      t.
        default = c
    }, function (e, t, n) {
      "use strict";
      var r = n(12),
        i = n(9),
        o = n(11),
        a = n(13),
        s = n(49),
        l = r(a());
      i(l, {
        getPolyfill: a,
        implementation: o,
        shim: s
      }), e.exports = l
    }, function (e, t, n) {
      "use strict";
      var r = n(1),
        i = r("%String%"),
        o = r("%TypeError%");
      e.exports = function (e) {
        if ("symbol" == typeof e) throw new o("Cannot convert a Symbol value to a string");
        return i(e)
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(1),
        i = r("%TypeError%");
      e.exports = function (e, t) {
        if (null == e) throw new i(t || "Cannot call method on " + e);
        return e
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(1),
        i = n(12),
        o = i(r("String.prototype.indexOf"));
      e.exports = function (e, t) {
        var n = r(e, !!t);
        return "function" == typeof n && o(e, ".prototype.") ? i(n) : n
      }
    }, function (e, t, n) {
      "use strict";
      (function (t) {
        var r = t.Symbol,
          i = n(48);
        e.exports = function () {
          return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && i())))
        }
      }).call(t, n(14))
    }, function (e, t, n) {
      "use strict";
      e.exports = function () {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          n = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
        e[t] = 42;
        for (t in e) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
        var r = Object.getOwnPropertySymbols(e);
        if (1 !== r.length || r[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var i = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== i.value || !0 !== i.enumerable) return !1
        }
        return !0
      }
    }, function (e, t, n) {
      "use strict";
      var r = n(9),
        i = n(13);
      e.exports = function () {
        var e = i();
        return r(String.prototype, {
          trim: e
        }, {
          trim: function () {
            return String.prototype.trim !== e
          }
        }), e
      }
    }, function (e, t, n) {
      "use strict";
      (function (t) {
        var n = "production" !== t.env.NODE_ENV,
          r = function () { };
        if (n) {
          var i = function (e, t) {
            var n = arguments.length;
            t = new Array(n > 1 ? n - 1 : 0);
            for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
            var i = 0,
              o = "Warning: " + e.replace(/%s/g, function () {
                return t[i++]
              });
            try {
              throw new Error(o)
            } catch (e) { }
          };
          r = function (e, t, n) {
            var r = arguments.length;
            n = new Array(r > 2 ? r - 2 : 0);
            for (var o = 2; o < r; o++) n[o - 2] = arguments[o];
            if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
            e || i.apply(null, [t].concat(n))
          }
        }
        e.exports = r
      }).call(t, n(41))
    }, function (e, t, n) {
      function r(e, t) {
        return new a(t).process(e)
      }
      var i = n(15),
        o = n(16),
        a = n(52);
      t = e.exports = r, t.filterXSS = r, t.FilterXSS = a;
      for (var s in i) t[s] = i[s];
      for (var s in o) t[s] = o[s];
      "undefined" != typeof window && (window.filterXSS = e.exports), function () {
        return "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope
      }() && (self.filterXSS = e.exports)
    }, function (e, t, n) {
      function r(e) {
        return void 0 === e || null === e
      }
      function i(e) {
        var t = f.spaceIndex(e);
        if (-1 === t) return {
          html: "",
          closing: "/" === e[e.length - 2]
        };
        e = f.trim(e.slice(t + 1, -1));
        var n = "/" === e[e.length - 1];
        return n && (e = f.trim(e.slice(0, -1))), {
          html: e,
          closing: n
        }
      }
      function o(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t
      }
      function a(e) {
        e = o(e || {}), e.stripIgnoreTag && (e.onIgnoreTag, e.onIgnoreTag = l.onIgnoreTagStripAll), e.whiteList = e.whiteList || l.whiteList, e.onTag = e.onTag || l.onTag, e.onTagAttr = e.onTagAttr || l.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || l.safeAttrValue, e.escapeHtml = e.escapeHtml || l.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new s(e.css))
      }
      var s = n(3).FilterCSS,
        l = n(15),
        c = n(16),
        u = c.parseTag,
        p = c.parseAttr,
        f = n(5);
      a.prototype.process = function (e) {
        if (e = e || "", !(e = e.toString())) return "";
        var t = this,
          n = t.options,
          o = n.whiteList,
          a = n.onTag,
          s = n.onIgnoreTag,
          c = n.onTagAttr,
          d = n.onIgnoreTagAttr,
          h = n.safeAttrValue,
          g = n.escapeHtml,
          y = t.cssFilter;
        n.stripBlankChar && (e = l.stripBlankChar(e)), n.allowCommentTag || (e = l.stripCommentTag(e));
        var m = !1;
        if (n.stripIgnoreTagBody) {
          var m = l.StripTagBody(n.stripIgnoreTagBody, s);
          s = m.onIgnoreTag
        }
        var v = u(e, function (e, t, n, l, u) {
          var m = {
            sourcePosition: e,
            position: t,
            isClosing: u,
            isWhite: o.hasOwnProperty(n)
          },
            v = a(n, l, m);
          if (!r(v)) return v;
          if (m.isWhite) {
            if (m.isClosing) return "</" + n + ">";
            var b = i(l),
              w = o[n],
              x = p(b.html, function (e, t) {
                var i = -1 !== f.indexOf(w, e),
                  o = c(n, e, t, i);
                if (!r(o)) return o;
                if (i) return t = h(n, e, t, y), t ? e + '="' + t + '"' : e;
                var o = d(n, e, t, i);
                return r(o) ? void 0 : o
              }),
              l = "<" + n;
            return x && (l += " " + x), b.closing && (l += " /"), l += ">"
          }
          var v = s(n, l, m);
          return r(v) ? g(l) : v
        }, g);
        return m && (v = m.remove(v)), v
      }, e.exports = a
    }, function (e, t) {
      e.exports = {
        smile: "e3/2018new_weixioa02_org.png",
        lovely: "09/2018new_keai_org.png",
        happy: "1e/2018new_taikaixin_org.png",
        clap: "6e/2018new_guzhang_thumb.png",
        whee: "33/2018new_xixi_thumb.png",
        haha: "8f/2018new_haha_thumb.png",
        "laugh and cry": "4a/2018new_xiaoku_thumb.png",
        wink: "43/2018new_jiyan_org.png",
        greddy: "fa/2018new_chanzui_org.png",
        awkward: "a3/2018new_heixian_thumb.png",
        sweat: "28/2018new_han_org.png",
        "pick nose": "9a/2018new_wabi_thumb.png",
        hum: "7c/2018new_heng_thumb.png",
        angry: "f6/2018new_nu_thumb.png",
        grievance: "a5/2018new_weiqu_thumb.png",
        poor: "96/2018new_kelian_org.png",
        disappoint: "aa/2018new_shiwang_thumb.png",
        sad: "ee/2018new_beishang_org.png",
        tear: "6e/2018new_leimu_org.png",
        "no way": "83/2018new_kuxiao_org.png",
        shy: "c1/2018new_haixiu_org.png",
        dirt: "10/2018new_wu_thumb.png",
        "love you": "f6/2018new_aini_org.png",
        kiss: "2c/2018new_qinqin_thumb.png",
        amorousness: "9d/2018new_huaxin_org.png",
        longing: "c9/2018new_chongjing_org.png",
        desire: "3e/2018new_tianping_thumb.png",
        "bad laugh": "4d/2018new_huaixiao_org.png",
        blackness: "9e/2018new_yinxian_org.png",
        "laugh without word": "2d/2018new_xiaoerbuyu_org.png",
        titter: "71/2018new_touxiao_org.png",
        cool: "c4/2018new_ku_org.png",
        "not easy": "aa/2018new_bingbujiandan_thumb.png",
        think: "30/2018new_sikao_org.png",
        question: "b8/2018new_ningwen_org.png",
        "no idea": "2a/2018new_wenhao_thumb.png",
        dizzy: "07/2018new_yun_thumb.png",
        bomb: "a2/2018new_shuai_thumb.png",
        bone: "a1/2018new_kulou_thumb.png",
        "be quiet": "b0/2018new_xu_org.png",
        "shut up": "62/2018new_bizui_org.png",
        stupid: "dd/2018new_shayan_org.png",
        "surprise ": "49/2018new_chijing_org.png",
        vomit: "08/2018new_tu_org.png",
        cold: "40/2018new_kouzhao_thumb.png",
        sick: "3b/2018new_shengbing_thumb.png",
        bye: "fd/2018new_baibai_thumb.png",
        "look down on": "da/2018new_bishi_org.png",
        "white eye": "ef/2018new_landelini_org.png",
        "left hum": "43/2018new_zuohengheng_thumb.png",
        "right hum": "c1/2018new_youhengheng_thumb.png",
        crazy: "17/2018new_zhuakuang_org.png",
        "scold ": "87/2018new_zhouma_thumb.png",
        "hit on face": "cb/2018new_dalian_org.png",
        wow: "ae/2018new_ding_org.png",
        fan: "86/2018new_hufen02_org.png",
        money: "a2/2018new_qian_thumb.png",
        yawn: "55/2018new_dahaqian_org.png",
        sleepy: "3c/2018new_kun_thumb.png",
        sleep: "e2/2018new_shuijiao_thumb.png",
        "watermelon ": "01/2018new_chigua_thumb.png",
        doge: "a1/2018new_doge02_org.png",
        dog: "22/2018new_erha_org.png",
        cat: "7b/2018new_miaomiao_thumb.png",
        thumb: "e6/2018new_zan_org.png",
        good: "8a/2018new_good_org.png",
        ok: "45/2018new_ok_org.png",
        yeah: "29/2018new_ye_thumb.png",
        "shack hand": "e9/2018new_woshou_thumb.png",
        bow: "e7/2018new_zuoyi_org.png",
        come: "42/2018new_guolai_thumb.png",
        punch: "86/2018new_quantou_thumb.png"
      }
    }, function (e, t) {
      e.exports = {
        nick: "NickName",
        mail: "E-Mail",
        link: "Website(http://)",
        nickFail: "NickName cannot be less than 3 bytes.",
        mailFail: "Please confirm your email address.",
        sofa: "No comment yet.",
        submit: "Submit",
        reply: "Reply",
        cancelReply: "Cancel reply",
        comments: "Comments",
        cancel: "Cancel",
        confirm: "Confirm",
        continue: "Continue",
        more: "Load More...",
        preview: "Preview",
        emoji: "Emoji",
        expand: "See more....",
        seconds: "seconds ago",
        minutes: "minutes ago",
        hours: "hours ago",
        days: "days ago",
        now: "just now",
        uploading: "Uploading ...",
        uploadDone: "Upload completed!",
        busy: "Submit is busy, please wait...",
        "code-98": "Valine initialization failed, please check your version of av-min.js.",
        "code-99": "Valine initialization failed, Please check the `el` element in the init method.",
        "code-100": "Valine initialization failed, Please check your appId and appKey.",
        "code-140": "The total number of API calls today has exceeded the development version limit.",
        "code-401": "Unauthorized operation, Please check your appId and appKey.",
        "code-403": "Access denied by API domain white list, Please check your security domain."
      }
    }, function (e, t) {
      e.exports = {
        nick: "ニックネーム",
        mail: "メールアドレス",
        link: "サイト(http://)",
        nickFail: "3バイト以上のニックネームをご入力ください.",
        mailFail: "メールアドレスをご確認ください.",
        sofa: "コメントしましょう~",
        submit: "提出する",
        reply: "返信する",
        cancelReply: "キャンセル",
        comments: "コメント",
        cancel: "キャンセル",
        confirm: "確認する",
        continue: "继续",
        more: "さらに読み込む...",
        preview: "プレビュー",
        emoji: "絵文字",
        expand: "もっと見る",
        seconds: "秒前",
        minutes: "分前",
        hours: "時間前",
        days: "日前",
        now: "たっだ今",
        uploading: "アップロード中...",
        uploadDone: "アップロードが完了しました!",
        busy: "20 秒間隔で提出してください    ...",
        "code-98": "ロードエラーです。av-min.js のバージョンを確認してください.",
        "code-99": "ロードエラーです。initにある`el`エレメントを確認ください.",
        "code-100": "ロードエラーです。AppIdとAppKeyを確認ください.",
        "code-140": "今日のAPIコールの総数が開発バージョンの上限を超えた.",
        "code-401": "権限が制限されています。AppIdとAppKeyを確認ください.",
        "code-403": "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください"
      }
    }, function (e, t) {
      e.exports = {
        nick: "QQ号可获取头像和昵称",
        mail: "自动获取",
        link: "网址(可不填)",
        nickFail: "昵称不能少于3个字符",
        mailFail: "请填写正确的邮件地址",
        sofa: "来发评论吧~",
        submit: "发布评论",
        reply: "回复",
        cancelReply: "取消回复",
        comments: "评论",
        cancel: "取消",
        confirm: "确认",
        continue: "继续",
        more: "加载更多...",
        preview: "预览",
        emoji: "表情",
        expand: "查看更多...",
        seconds: "秒前",
        minutes: "分钟前",
        hours: "小时前",
        days: "天前",
        now: "刚刚",
        uploading: "正在传输...",
        uploadDone: "传输完成!",
        busy: "操作频繁，请稍候再试...",
        "code-98": "Valine 初始化失败，请检查 av-min.js 版本",
        "code-99": "Valine 初始化失败，请检查init中的`el`元素.",
        "code-100": "Valine 初始化失败，请检查你的AppId和AppKey.",
        "code-140": "今日 API 调用总次数已超过开发版限制.",
        "code-401": "未经授权的操作，请检查你的AppId和AppKey.",
        "code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置."
      }
    }, function (e, t) {
      e.exports = {
        nick: "暱稱",
        mail: "郵箱",
        link: "網址(http://)",
        nickFail: "昵稱不能少於3個字符",
        mailFail: "請填寫正確的郵件地址",
        sofa: "來發評論吧~",
        submit: "提交",
        reply: "回覆",
        cancelReply: "取消回覆",
        comments: "評論",
        cancel: "取消",
        confirm: "確認",
        continue: "繼續",
        more: "加載更多...",
        preview: "預覽",
        emoji: "表情",
        expand: "查看更多...",
        seconds: "秒前",
        minutes: "分鐘前",
        hours: "小時前",
        days: "天前",
        now: "剛剛",
        uploading: "正在上傳...",
        uploadDone: "上傳完成!",
        busy: "操作頻繁，請稍候再試...",
        "code-98": "Valine 初始化失敗，請檢查 av-min.js 版本",
        "code-99": "Valine 初始化失敗，請檢查init中的`el`元素.",
        "code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.",
        "code-140": "今日 API 調用總次數已超過開發版限制.",
        "code-401": "未經授權的操作，請檢查你的AppId和AppKey.",
        "code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置."
      }
    }])
  });